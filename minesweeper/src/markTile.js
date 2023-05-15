import { statusTile } from './board.js';

export function markTile(tile) {
    if (tile.status !== statusTile.HIDDEN && tile.status !== statusTile.MARKED) {
        return
    }
    if (tile.status === statusTile.MARKED) {
        tile.status = statusTile.HIDDEN
    } else {
        tile.status = statusTile.MARKED
    }
}
