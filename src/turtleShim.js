// ==========================================================================
// turtle მოდულის ემულატორი Pyodide-ისთვის.
// სტანდარტული turtle მოდული tkinter-ს საჭიროებს, რომელიც ბრაუზერში არ არსებობს.
// ეს მოდული იგივე ბრძანებებს იძლევა, მაგრამ ხატვის ბრძანებებს სიაში ინახავს,
// რომელსაც შემდეგ JavaScript canvas-ზე ხატავს (იხ. TurtlePlayground.jsx).
// კოდი იგივეა, რასაც მოსწავლე Thonny-ში ან VS Code-ში დაწერდა.
// ==========================================================================

export const TURTLE_SHIM = String.raw`
import math, json

_CMDS = []
_TURTLES = []
_STATE = {"bg": "white"}
_MAX_CMDS = 20000


def _c(c):
    if isinstance(c, (tuple, list)) and len(c) == 3:
        r, g, b = c
        if max(r, g, b) <= 1:
            r, g, b = r * 255, g * 255, b * 255
        return "rgb(%d,%d,%d)" % (int(r), int(g), int(b))
    return str(c)


def _push(cmd):
    if len(_CMDS) >= _MAX_CMDS:
        raise RuntimeError("ძალიან ბევრი ხაზი დაიხატა (20000-ზე მეტი). შეამოწმე ციკლი - ხომ არ არის უსასრულო?")
    _CMDS.append(cmd)


class Turtle:
    def __init__(self, *args, **kwargs):
        self._x = 0.0
        self._y = 0.0
        self._heading = 0.0
        self._pen = True
        self._color = "black"
        self._fillcolor = "black"
        self._size = 1
        self._visible = True
        self._filling = False
        self._fill_index = 0
        self._fillpts = []
        _TURTLES.append(self)

    def _move_to(self, nx, ny):
        if self._pen:
            _push(("line", self._x, self._y, nx, ny, self._color, self._size))
        self._x = nx
        self._y = ny
        if self._filling:
            self._fillpts.append((nx, ny))

    # --- მოძრაობა ---
    def forward(self, distance):
        r = math.radians(self._heading)
        self._move_to(self._x + distance * math.cos(r), self._y + distance * math.sin(r))
    fd = forward

    def backward(self, distance):
        self.forward(-distance)
    back = backward
    bk = backward

    def left(self, angle):
        self._heading = (self._heading + angle) % 360
    lt = left

    def right(self, angle):
        self.left(-angle)
    rt = right

    def goto(self, x, y=None):
        if y is None:
            x, y = x
        self._move_to(float(x), float(y))
    setpos = goto
    setposition = goto

    def setx(self, x):
        self._move_to(float(x), self._y)

    def sety(self, y):
        self._move_to(self._x, float(y))

    def setheading(self, angle):
        self._heading = angle % 360
    seth = setheading

    def home(self):
        self._move_to(0.0, 0.0)
        self._heading = 0.0

    def circle(self, radius, extent=360, steps=None):
        if radius == 0:
            return
        if steps is None:
            full = min(180, int(abs(radius) * 0.5 + 24))
            n = max(1, int(full * abs(extent) / 360))
        else:
            n = max(1, int(steps))
        sign = 1 if radius >= 0 else -1
        angle = sign * extent / n
        side = 2 * abs(radius) * math.sin(math.radians(abs(angle) / 2))
        self.left(angle / 2)
        for _ in range(n):
            self.forward(side)
            self.left(angle)
        self.left(-angle / 2)

    # --- კალამი და ფერები ---
    def penup(self):
        self._pen = False
    pu = penup
    up = penup

    def pendown(self):
        self._pen = True
    pd = pendown
    down = pendown

    def isdown(self):
        return self._pen

    def pensize(self, width=None):
        if width is None:
            return self._size
        self._size = width
    width = pensize

    def pencolor(self, *args):
        if not args:
            return self._color
        self._color = _c(args[0] if len(args) == 1 else args)

    def fillcolor(self, *args):
        if not args:
            return self._fillcolor
        self._fillcolor = _c(args[0] if len(args) == 1 else args)

    def color(self, *args):
        if not args:
            return (self._color, self._fillcolor)
        if len(args) == 1:
            self._color = _c(args[0])
            self._fillcolor = _c(args[0])
        elif len(args) == 2:
            self._color = _c(args[0])
            self._fillcolor = _c(args[1])
        else:
            self._color = _c(args)
            self._fillcolor = _c(args)

    def begin_fill(self):
        self._filling = True
        self._fill_index = len(_CMDS)
        self._fillpts = [(self._x, self._y)]

    def end_fill(self):
        if self._filling and len(self._fillpts) > 2:
            span = len(_CMDS) - self._fill_index
            _CMDS.insert(self._fill_index, ("fill", list(self._fillpts), self._fillcolor, span))
        self._filling = False
        self._fillpts = []

    def filling(self):
        return self._filling

    # --- ფიგურები და ტექსტი ---
    def dot(self, size=None, color=None):
        if size is None:
            size = max(self._size + 4, self._size * 2)
        _push(("dot", self._x, self._y, size, _c(color) if color is not None else self._color))

    def stamp(self):
        _push(("stamp", self._x, self._y, self._heading, self._color))

    def write(self, arg, move=False, align="left", font=("Arial", 12, "normal")):
        size = font[1] if len(font) > 1 else 12
        weight = font[2] if len(font) > 2 else "normal"
        _push(("text", self._x, self._y, str(arg), self._color, size, align, weight))

    # --- ხილვადობა ---
    def hideturtle(self):
        self._visible = False
    ht = hideturtle

    def showturtle(self):
        self._visible = True
    st = showturtle

    def isvisible(self):
        return self._visible

    # --- ინფორმაცია ---
    def xcor(self):
        return self._x

    def ycor(self):
        return self._y

    def heading(self):
        return self._heading

    def position(self):
        return (self._x, self._y)
    pos = position

    def distance(self, x, y=None):
        if y is None:
            x, y = x
        return math.hypot(x - self._x, y - self._y)

    def towards(self, x, y=None):
        if y is None:
            x, y = x
        return math.degrees(math.atan2(y - self._y, x - self._x)) % 360

    # --- გასუფთავება ---
    def clear(self):
        del _CMDS[:]

    def reset(self):
        del _CMDS[:]
        self._x = 0.0
        self._y = 0.0
        self._heading = 0.0
        self._pen = True
        self._color = "black"
        self._fillcolor = "black"
        self._size = 1

    # --- თავსებადობისთვის: ბრაუზერში მათ ეფექტი არ აქვთ ---
    def speed(self, speed=None):
        return 0

    def shape(self, name=None):
        return "classic"

    def shapesize(self, *args, **kwargs):
        return None
    turtlesize = shapesize

    def tracer(self, *args, **kwargs):
        return None

    def delay(self, *args, **kwargs):
        return None


class Screen:
    def bgcolor(self, *args):
        if not args:
            return _STATE["bg"]
        _STATE["bg"] = _c(args[0] if len(args) == 1 else args)

    def title(self, *args):
        return None

    def setup(self, *args, **kwargs):
        return None

    def tracer(self, *args, **kwargs):
        return None

    def update(self):
        return None

    def delay(self, *args, **kwargs):
        return None

    def colormode(self, *args):
        return 1.0

    def exitonclick(self):
        return None

    def mainloop(self):
        return None
    done = mainloop

    def bye(self):
        return None

    def listen(self, *args, **kwargs):
        return None

    def onkey(self, *args, **kwargs):
        return None
    onkeypress = onkey
    onkeyrelease = onkey
    onclick = onkey
    ontimer = onkey

    def window_width(self):
        return 480

    def window_height(self):
        return 480


Pen = Turtle

_default_turtle = Turtle()
_default_screen = Screen()

_TURTLE_FUNCS = [
    "forward", "fd", "back", "backward", "bk", "left", "lt", "right", "rt",
    "goto", "setpos", "setposition", "setx", "sety", "setheading", "seth",
    "home", "circle", "penup", "pu", "up", "pendown", "pd", "down", "isdown",
    "pensize", "width", "pencolor", "fillcolor", "color", "begin_fill",
    "end_fill", "filling", "dot", "stamp", "write", "hideturtle", "ht",
    "showturtle", "st", "isvisible", "xcor", "ycor", "heading", "position",
    "pos", "distance", "towards", "clear", "reset", "speed", "shape",
    "shapesize", "turtlesize",
]
_SCREEN_FUNCS = [
    "bgcolor", "title", "setup", "tracer", "update", "delay", "colormode",
    "exitonclick", "mainloop", "done", "bye", "listen", "onkey",
    "onkeypress", "onkeyrelease", "onclick", "ontimer", "window_width",
    "window_height",
]

# ნაგულისხმევი turtle ეკრანზე მხოლოდ მაშინ ჩნდება, თუ მოდულის დონის
# ფუნქციებს (forward(...), left(...)) პირდაპირ ვიყენებთ.
_TURTLES.remove(_default_turtle)


def _make_turtle_func(name):
    def wrapper(*args, **kwargs):
        if _default_turtle not in _TURTLES:
            _TURTLES.append(_default_turtle)
        return getattr(_default_turtle, name)(*args, **kwargs)
    wrapper.__name__ = name
    return wrapper


for _name in _TURTLE_FUNCS:
    globals()[_name] = _make_turtle_func(_name)
for _name in _SCREEN_FUNCS:
    globals()[_name] = getattr(_default_screen, _name)


def getscreen():
    return _default_screen


def _snapshot():
    return json.dumps({
        "cmds": _CMDS,
        "bg": _STATE["bg"],
        "turtles": [
            {"x": t._x, "y": t._y, "h": t._heading, "visible": t._visible, "color": t._color}
            for t in _TURTLES
        ],
    })
`
