declare module 'trailduck' {
    type NodeList<K> = { [name: string]: Node<K> };
    type Cycle = string[];
    type Node<K> = {
        /**
         * List of children of this node
         */
        children: NodeList<K>,
        /**
         * List of parents of this node
         */
        parents: NodeList<K>,
        /**
         * List of cycles containing this node
         */
        cycles: Cycle[],
        payload?: K,
        name: string
    }
    export default class TrailDuck<K> {
        constructor(list : { [name: string]: { children: string[], payload?: K } });
        /**
         * List of cycles.
         * Each cycle is an array of node names.
         */
        cycles: Cycle[];
        ordered: Node<K>[];
    }
}