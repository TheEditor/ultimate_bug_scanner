package buggy

import (
    "context"
    "time"
)

func leak() {
    ctx, cancel := context.WithTimeout(context.Background(), time.Second)
    _ = ctx
    _ = cancel
    ticker := time.NewTicker(500 * time.Millisecond)
    _ = ticker
    timer := time.NewTimer(time.Second)
    _ = timer
}
