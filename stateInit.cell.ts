import { beginCell } from "@ton/core";

const cell = beginCell()
    .storeBuffer(Buffer.from("My Awesome Token", "utf8"))
    .storeBuffer(Buffer.from("MAT", "utf8"))
    .storeUint(9, 8)
    .storeAddress('EQCObIMiCLlWlEdT9FVPZWz5jAWocxqhu6bYzwtJzEkkhAsa')
    .endCell();

export default cell;