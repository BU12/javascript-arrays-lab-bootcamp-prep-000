const app = "I don't do much."

var destructivelyAppendKitten(name) = [...kittens]
  kittens.append(name);
  return kittens

var destructivelyPrependKitten(name) = [...kittens]
  kittens.unshift(name);
  return kittens

var destructivelyRemoveLastKitten() = [...kittens]
  kittens.pop()
  return kittens

var destructivelyRemoveFirstKitten() = [...kittens]
  kittens.slice(1, kittens.length-1)
  return kittens

var appendKitten(name) = [...kittens]
  kittens.append(name);
  return kittens

var prependKitten(name) = [...kittens]
  kittens.prepend(name);
  return kittens

var removeLastKitten(name) = [...kittens]
  kittens.pop(name)
  return kittens

var removeFirstKitten(name) = [...kittens]
  kittens.shift(name)
  return kittens
