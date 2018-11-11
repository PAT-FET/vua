<template>
<div>
    <div class="border rounded my-5 p-3">
      <div class="display-1">Display-1</div>
      <div class="display-2">Display-2</div>
      <div class="display-3">Display-3</div>
      <div class="display-4">Display-4</div>
      <div class="headline">Headline</div>
      <div class="title">Title</div>
      <div class="subheading">Subheading</div>
      <div class="body-regular">Body regular</div>
      <div class="body-secondary">Body secondary</div>
      <div class="caption">Caption</div>
    </div>

    <div class="my-5">
      <div class="title">段落下外补 spacing-3</div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.</p>

      <div class="border-top mt-4 pb-4"></div>

      <div class="title">列表的左內补 spacing-4</div>
      <ul class="list-unstyled">
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Integer molestie lorem at massa</li>
        <li>Facilisis in pretium nisl aliquet</li>
        <li>Nulla volutpat aliquam velit
          <ul>
            <li>Phasellus iaculis neque</li>
            <li>Purus sodales ultricies</li>
            <li>Vestibulum laoreet porttitor sem</li>
            <li>Ac tristique libero volutpat at</li>
          </ul>
        </li>
        <li>Faucibus porta lacus fringilla vel</li>
        <li>Aenean sit amet erat nunc</li>
        <li>Eget porttitor lorem</li>
      </ul>

      <div class="border-top mt-4 pb-4"></div>

      <div class="title">Code</div>
      <p>For example, <code>&lt;section&gt;</code> should be wrapped as inline.</p>

    </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   基本使用示例
 * @desc
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
}
</script>
