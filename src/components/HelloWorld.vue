<template>
  <div class="hello">
    <div class="title">
      <img src="../assets/dream.jpg" />
    </div>
    <div id="weapons">
      <el-row type="flex" justify="center">
        <el-col :xl="8" :lg="10" :sm="12" :xs="18">
          <el-form class="weapon-selector" label-width="80px" label-position="left">
            <el-row type="flex" justify="center">
              <el-col :span="20">
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
              </el-col>
            </el-row>
            <el-row type="flex" justify="center">
              <el-col :span="20">
                <el-form-item label="首饰">
                  <el-select v-model="headgear" placeholder="选择首饰">
                    <el-option key="大恍惚" value="大恍惚" />
                    <el-option key="幸运777" value="幸运777" />
                    <el-option key="上古" value="上古" />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row type="flex" justify="center">
              <el-col :span="20">
                <el-form-item label="特殊装备">
                  <el-select v-model="slotWeapon" placeholder="选择特殊装备">
                    <el-option key="军神" value="军神" />
                    <el-option key="灵宝" value="灵宝" />
                    <el-option key="时间战争" value="时间战争" />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row type="flex" justify="center">
              <el-col :span="20">
                <el-form-item label="已有件数">
                  <el-select v-model="weaponHold" placeholder="选择已有装备件数">
                    <el-option key="0" value="0" />
                    <el-option key="1" value="1" />
                    <el-option key="2" value="2" />
                    <el-option key="3" value="3" />
                    <el-option key="4" value="4" />
                    <el-option key="5" value="5" />
                    <el-option key="6" value="6" />
                    <el-option key="7" value="7" />
                    <el-option key="8" value="8" />
                    <el-option key="9" value="9" />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row type="flex" justify="center">
              <el-col :span="20">
                <el-form-item label="跨界装备">
                  <el-select v-model="crossNumber" placeholder="选择跨界几件装备">
                    <el-option key="0" value="0" />
                    <el-option key="1" value="1" />
                    <el-option key="2" value="2" />
                    <el-option key="3" value="3" />
                    <el-option key="4" value="4" />
                    <el-option key="5" value="5" />
                    <el-option key="6" value="6" />
                    <el-option key="7" value="7" />
                    <el-option key="8" value="8" />
                    <el-option key="9" value="9" />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
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

      <el-row type="flex" justify="center" v-if="result">
        <el-col
          :span="18"
          class="resultText"
        >平均而言, 你需要肝{{ result.avg }}次深渊, 比较欧的人能在{{ result.q1}}次以内毕业, 比较非的人需要 {{ result.q3 }} 次以上才能毕业</el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "element-ui/lib/theme-chalk/index.css";
import { HellCounting } from "@/service/HellCounting";

@Component
export default class HelloWorld extends Vue {
  private leftWeapon: string = "";
  private headgear: string = "";
  private slotWeapon: string = "";
  private weaponHold: string = "";
  private result: number = 0;
  private calculateTime: number = 1000;
  private crossNumber: string = "";
  private useAce: boolean = true;

  private testArray = ["name1", "name2", "name3"];

  mutliCalculate(): void {
    let hell = new HellCounting();
    let crossWeapon = Number(this.crossNumber);
    if (this.useAce) {
      crossWeapon += 1;
    }
    this.result = hell.calculateForTimes(
      [this.leftWeapon, this.headgear, this.slotWeapon],
      Number(this.weaponHold),
      crossWeapon,
      this.calculateTime
    );
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
  margin-bottom: 10px;
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

.weapon-selector {
  border-radius: 2px;
  border: 1px solid #ebebeb;
  padding-top: 30px;
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 4px, rgba(0, 0, 0, 0.04) 0px 0px 6px;
}
</style>
