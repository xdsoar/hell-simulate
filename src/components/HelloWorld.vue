<template>
  <div class="hello">
    <div class="title">
      <img src="../assets/dream.jpg" />
    </div>
    <div id="weapons">
      <el-form :inline="true" label-width="80px" label-position="right">
        <el-form-item label="防具">
          <el-select v-model="leftWeapon" placeholder="选择防具">
            <el-option key="手搓" value="手搓" />
            <el-option key="改恶" value="改恶" />
            <el-option key="水果" value="水果" />
            <el-option key="死亡阴影" value="死亡阴影" />
            <el-option key="老兵" value="老兵" />
            <el-option key="擎天" value="擎天" />
            <el-option key="魔法师" value="魔法师" />
          </el-select>
        </el-form-item>
        <el-form-item label="已有件数">
          <el-input-number v-model="leftWeaponHold" :min="0" :max="5"></el-input-number>
        </el-form-item>
      </el-form>
      <el-form :inline="true" label-width="80px" label-position="right">
        <el-form-item label="首饰">
          <el-select v-model="headgear" placeholder="选择首饰">
            <el-option key="大恍惚" value="大恍惚" />
            <el-option key="幸运777" value="幸运777" />
            <el-option key="上古" value="上古" />
          </el-select>
        </el-form-item>
        <el-form-item label="已有件数">
          <el-input-number v-model="headgearHold" :min="0" :max="3" placeholder="已有件数"></el-input-number>
        </el-form-item>
      </el-form>

      <el-form :inline="true" label-width="80px" label-position="right">
        <el-form-item label="特殊装备">
          <el-select v-model="slotWeapon" placeholder="选择特殊装备">
            <el-option key="军神" value="军神" />
            <el-option key="灵宝" value="灵宝" />
            <el-option key="时间战争" value="时间战争" />
          </el-select>
        </el-form-item>
        <el-form-item label="已有件数">
          <el-input-number v-model="slotHold" :min="0" :max="3"></el-input-number>
        </el-form-item>
      </el-form>

      <el-row type="flex" justify="center">
        <el-col :span="10">
          <a class="input_label_text">跨界装备:</a>
          <el-input-number v-model="crossNumber" :min="0" :max="10"></el-input-number>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-switch active-text="使用百变怪" v-model="useAce" inactive-text="不使用" />
      </el-row>

      <el-form :inline="true" label-width="80px" label-position="right">
        <el-form-item label="模拟次数">
          <el-input-number v-model="calculateTime" :min="10" :max="10000" :step="100"></el-input-number>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="mutliCalculate">计算</el-button>
        </el-form-item>
      </el-form>
      <el-row type="flex" justify="center">
        <el-col :span="18" class="resultText">平均而言, 你需要肝{{ result }}次深渊</el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "element-ui/lib/theme-chalk/display.css";
import { HellCounting } from "@/service/HellCounting";

@Component
export default class HelloWorld extends Vue {
  private leftWeapon!: string;
  private headgear!: string;
  private slotWeapon!: string;
  private leftWeaponHold!: number;
  private headgearHold!: number;
  private slotHold!: number;
  private result!: number;
  private calculateTime!: number;
  private crossNumber!: number;
  private useAce!: boolean;

  data() {
    return {
      leftWeapon: "",
      headgear: "",
      slotWeapon: "",
      leftWeaponHold: 0,
      headgearHold: 0,
      slotHold: 0,
      result: 0,
      calculateTime: 1000,
      useAce: true,
      crossNumber: 0
    };
  }

  mutliCalculate(): void {
    let hell = new HellCounting();
    let crossWeapon = this.crossNumber;
    if (this.useAce) {
      crossWeapon += 1;
    }
    let cur = hell.calculateForTimes(
      [this.leftWeapon, this.headgear, this.slotWeapon],
      this.headgearHold + this.leftWeaponHold + this.slotHold,
      crossWeapon, 
      this.calculateTime
    );
    this.result = cur;
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

.resultText {
  height: fit-content;
}

.title {
  margin-bottom: 60px;
}

.input_label_text {
  margin: 20px;
  color: #000000;
}
</style>
