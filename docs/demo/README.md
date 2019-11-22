---
prev: /guide/
next: false
---

# Demo

## Default

<br>
<v-avatar  />

```html
<v-avatar username="Amaury Tobias" />
```

## Properties

<br>
<v-avatar inline username="Amaury-Tobias Quiroz" background-color="#FFC107" :size="100" rounded :lighten="20"></v-avatar>
<v-avatar inline username="Amaury-Tobias Quiroz" background-color="#FFC107" :size="100" color="#fff"></v-avatar>

```html
<v-avatar
  inline
  username="Amaury-Tobias Quiroz"
  background-color="#FFC107"
  :size="100"
  rounded
  :lighten="20"
></v-avatar>
<v-avatar
  inline
  username="Amaury-Tobias Quiroz"
  background-color="#FFC107"
  :size="100"
  color="#fff"
></v-avatar>
```

## Using `src`

<br>
<v-avatar
  inline
  username="Cutte Puppy"
  src="https://www.welt.de/img/wissenschaft/umwelt/mobile132259361/3372502257-ci102l-w1024/MEXICAN-AXOLOTL.jpg"
  :size="100"
  rounded
></v-avatar>
<v-avatar
  inline
  username="Cutte Puppy"
  src="https://i.pinimg.com/236x/45/37/ab/4537abebd9bebe9ac09ca93707367b19.jpg"
  :size="100"
  rounded
></v-avatar>
<v-avatar
  inline
  username="Cutte Puppy"
  src="http://stylearena.net/wp-content/uploads/2015/04/beautiful-cats-hd-wallpapers-16.jpg"
  :size="100"
  rounded
></v-avatar>

```html
<v-avatar
  username="Cutte Puppy"
  src="CuttePuppy.jpg"
  :size="100"
  rounded
></v-avatar>
```

## Colors

<v-avatar inline v-for="i in 18" :username='"A".repeat(i)' :initials="i.toString()" :key="i"></v-avatar>
