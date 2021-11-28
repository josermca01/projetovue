<template>
  <div class="home">
    <h1>This is the myprojects page</h1>
   <v-list v-for="project,index in $store.state.projects" :key=index><v-card><v-card-title>{{project.name}}</v-card-title>{{project.description}}</v-card></v-list>

  </div>
</template>