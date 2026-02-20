export function computeLayout(node, x, y, gap, nodes = []) {
    if (!node) return nodes;

    nodes.push({
        data: node.data,
        x,
        y,
        left: node.left,
        right: node.right
    });

    computeLayout(node.left, x - gap, y + 80, gap / 2, nodes);
    computeLayout(node.right, x + gap, y + 80, gap / 2, nodes);

    return nodes;
}

export function renderTree(nodes, container, lastInserted, path = []) {
    container.innerHTML = "";

    const pathValues = path.map(n => n.data);

    nodes.forEach(n => {
        const el = document.createElement("div");
        el.className = "node";
        el.textContent = n.data;   // 👈 CLAVE

        el.style.left = n.x + "px";
        el.style.top = n.y + "px";

        if (n.data === lastInserted) {
            el.classList.add("new-node");
        }

        container.appendChild(el);
    });
}
function drawLine(svg, x1, y1, x2, y2) {
    const line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
    );

    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);

    line.setAttribute("stroke", "#555");
    line.setAttribute("stroke-width", "2");

    // animación
    line.setAttribute("stroke-dasharray", "1000");
    line.setAttribute("stroke-dashoffset", "1000");
    line.style.transition = "stroke-dashoffset var(--anim-speed) ease";

    svg.appendChild(line);
    requestAnimationFrame(() =>
        line.setAttribute("stroke-dashoffset", "0")
    );
}
export function renderEdges(nodes, svg) {
    console.log("renderEdges llamado:", nodes.length);
    const nodeMap = new Map();

    // Mapear data → nodo visual
    nodes.forEach(n => nodeMap.set(n.data, n));

    nodes.forEach(node => {
        if (node.left && nodeMap.has(node.left.data)) {
            const left = nodeMap.get(node.left.data);
            drawLine(
                svg,
                node.x + 20,
                node.y + 20,
                left.x + 20,
                left.y + 20
            );
        }

        if (node.right && nodeMap.has(node.right.data)) {
            const right = nodeMap.get(node.right.data);
            drawLine(
                svg,
                node.x + 20,
                node.y + 20,
                right.x + 20,
                right.y + 20
            );
        }
    });
}
export async function animateSearch(path, found) {
    clearNodeStates();

    for (const p of path) {
        const el = [...document.querySelectorAll(".node")]
            .find(n => Number(n.textContent) === p.data);

        if (!el) continue;

        el.classList.add("visiting");
        await sleep();
        el.classList.remove("visiting");
    }

    const last = path.at(-1);
    if (!last) return;

    const lastEl = [...document.querySelectorAll(".node")]
        .find(n => Number(n.textContent) === last.data);

    if (!lastEl) return;

    if (found) {
        lastEl.classList.add("found");
        // el verde puede quedarse si quieres
    } else {
        lastEl.classList.add("not-found");
        await sleep();
        lastEl.classList.remove("not-found"); // 👈 CLAVE
    }
}

function clearNodeStates() {
    document.querySelectorAll(".node").forEach(n => {
        n.classList.remove("visiting", "found", "not-found", "new-node");
    });
}
function sleep(ms = getAnimSpeed()) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getAnimSpeed() {
    const value = getComputedStyle(document.documentElement)
        .getPropertyValue("--anim-speed");
    return parseInt(value) || 600;
}

