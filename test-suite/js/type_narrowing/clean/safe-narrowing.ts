interface Demo { value?: string; }
function useDemo(x?: Demo) {
  if (!x?.value) {
    return "nope";
  }
  return x.value.toUpperCase();
}
