const NAMES = ['alfred', 'alfie', 'alfie']

function countByName(members: string[], name: string): number {
    return 1 + members.filter(v => v == name).length;
}

function comparePrefix(prefix: string, member: string): boolean {
    return prefix === member.substr(0, prefix.length);
}

function containsPrefix(members: string[], prefix: string): boolean {
    for (let i = 0; i < members.length; i++) {
        if (comparePrefix(prefix, members[i])) return true;
    }
    return false;
}

function getShortestPrefix(s: string, members: string[]): string {
    for (let i = 1; i < s.length; i++) {
        let prefix = s.substr(0, i);
        if (!containsPrefix(members, prefix)) {
            return prefix;
        }
    }
    return `${s} ${countByName(members, s)}`;
}

function reslove(names: string[]): string[] {
    const prefixs: string[] = [];
    const members: string[] = [];
    for (let i = 0; i < names.length; i++) {
        const prefix = getShortestPrefix(names[i], members);
        members.push(names[i]);
        prefixs.push(prefix);
    }
    return prefixs;
}

function main() {
    const res = reslove(NAMES || []);
    console.log((res || []).join("\n"));
}

main();
