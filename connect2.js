/** @param {import(".").NS } ns */
async function find_target(ns, target){
    var s = ['home'];
    var discovered = [];
    while(s.length > 0){
        var v = s.pop();
        ns.connect(v);
        if (v == target){
            ns.tprint("Found target");
            return;
        }
        if (!discovered.includes(v)){
            discovered.push(v);
            var edges = ns.scan(v);
            for (var i = 0; i < edges.length; ++i){
                s.push(edges[i]);
            }
        }
    }
}

/** @param {import(".").NS } ns */
export async function main(ns) {
    var target = ns.args[0]
    find_target(ns, target);

}