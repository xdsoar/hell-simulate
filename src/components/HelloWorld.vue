<template>
  <div class="hello">
    <p>For a guide and recipes on how to configure / customize this project</p>
    <div id="weapons">
      <el-form ref="form" >
      <el-row :gutter="8" type="flex">
        <el-col :span="2"> <el-form-item :span="6" label="活动名称" /> </el-col>
        <el-col :span="2">
          <el-select v-model="leftWeapon" placehodler="选择防具">
            <el-option key="手搓" value="手搓" />
            <el-option key="改恶" value="改恶" />
            <el-option key="水果" value="水果" />
          </el-select>
        </el-col>
        <el-col :span="4" class="hidden-md-and-down">
          <el-input-number v-model="leftWeaponHold" :min="0" :max="5" label="已有件数" ></el-input-number>
        </el-col>
        <el-col :span="4">
          <el-select v-model="headgear" placehodler="选择首饰">
            <el-option key="大恍惚" value="大恍惚" />
            <el-option key="幸运777" value="幸运777" />
            <el-option key="上古术士" value="上古术士" />
          </el-select>
        </el-col>
        <el-col :span="4" class="hidden-md-and-down">
          <el-input-number v-model="headgearHold" :min="0" :max="3" label="已有件数" ></el-input-number>
        </el-col>
        <el-col :span="4" >
          <el-select v-model="slot" placehodler="选择特殊装备">
            <el-option key="军神" value="军神" />
            <el-option key="灵宝" value="灵宝" />
            <el-option key="时间战争" value="时间战争" />
          </el-select>
        </el-col>
        <el-col :span="4" class="hidden-md-and-down">
          <el-input-number v-model="slotHold" :min="0" :max="3" label="已有件数" ></el-input-number>
        </el-col>
      </el-row>
      </el-form>
      <span>
        防具: {{ leftWeapon }}
        <br />
      </span>
      <span>首饰: {{ headgear }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import 'element-ui/lib/theme-chalk/display.css';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  data() {
    return {
      leftWeapon: [],
      headgear: [],
      slot: [],
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
</style>
