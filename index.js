import {Engine} from "qm-numeric-particle";

let engine = Engine.new(10);

window.addEventListener('resize', () => engine.on_resize(), false);

function update(time) {
        engine.on_request_animation_frame(time);
        window.requestAnimationFrame(update);
}

update(0);
