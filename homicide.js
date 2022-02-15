// reduce karma low enough to enable gang formation
/**
 *
 * @param {'.'}.NS ns
 */
export async function main(ns){
    while (true){
        var commit_time = ns.commitCrime('homicide');
        await ns.sleep(commit_time);
        if (ns.isBusy()){
            await ns.sleep(500);
        }
        if (ns.heart.break() < -54000){
            return;
        }
    }
}