<template>
  <div class="hello">
    <p>For a guide and recipes on how to configure / customize this project</p>
    <div id="weapons">
      <el-form ref="form">
        <el-form-item label="防具">
          <el-select v-model="leftWeapon" placeholder="选择防具">
            <el-option key="手搓" value="手搓" />
            <el-option key="改恶" value="改恶" />
            <el-option key="水果" value="水果" />
          </el-select>
          <el-form-item label="已有件数">
            <el-input-number v-model="leftWeaponHold" :min="0" :max="5" placeholder="已有件数"></el-input-number>
          </el-form-item>
        </el-form-item>
        <el-form-item>
          <el-select v-model="headgear" placeholder="选择首饰">
            <el-option key="大恍惚" value="大恍惚" />
            <el-option key="幸运777" value="幸运777" />
            <el-option key="上古术士" value="上古术士" />
          </el-select>
          <el-input-number v-model="headgearHold" :min="0" :max="3" placeholder="已有件数"></el-input-number>
        </el-form-item>
        <el-form-item>
          <el-select v-model="slotWeapon" placeholder="选择特殊装备">
            <el-option key="军神" value="军神" />
            <el-option key="灵宝" value="灵宝" />
            <el-option key="时间战争" value="时间战争" />
          </el-select>

          <el-input-number v-model="slotHold" :min="0" :max="3" placeholder="已有件数"></el-input-number>
        </el-form-item>
      </el-form>
      <span>hello: {{ result }}</span>
      <el-button type="primary" v-on:click="calculate">计算</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import "element-ui/lib/theme-chalk/display.css";
import { HellCounting } from "@/service/HellCounting";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  data() {
    return {
      leftWeapon: [],
      headgear: [],
      slotWeapon: [],
      leftWeaponHold: 0,
      headgearHold: 0,
      slotHold: 0
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.el-row {
  margin-bottom: 20px;
}

.el-input-number {
  width: 70%;
}
</style>
