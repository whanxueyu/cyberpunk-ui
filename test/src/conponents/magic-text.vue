<template>
  <div class="content">
    <!-- CyberMagicText 组件 -->
    <div class="section">
      <div class="section-title">CyberMagicText - 魔术文字效果</div>

      <!-- ======================== 基础用法 ======================== -->
      <div class="subsection">
        <h3 class="sub-title">🏷️ 基础用法</h3>
        <p class="desc">通过 slot 传入文本即可获得魔术文字效果</p>
        <div class="demo-row">
          <cyber-magic-text>CyberMagicText</cyber-magic-text>
          <cyber-magic-text>赛博朋克魔术文字</cyber-magic-text>
        </div>
      </div>

      <!-- ======================== 渐变预设 ======================== -->
      <div class="subsection">
        <h3 class="sub-title">🎨 渐变预设 (gradient)</h3>
        <p class="desc">内置 6 种赛博朋克风格渐变：cyberpunk / aurora / fire / ocean / sunset / neon</p>
        <div class="preset-grid">
          <div class="preset-item" v-for="preset in gradients" :key="preset">
            <p class="demo-label">{{ preset }}</p>
            <cyber-magic-text :gradient="preset">CyberMagicText</cyber-magic-text>
          </div>
        </div>
      </div>

      <!-- ======================== 自定义渐变色 ======================== -->
      <div class="subsection">
        <h3 class="sub-title">🖍️ 自定义渐变色 (gradientColors)</h3>
        <p class="desc">传入颜色数组即可自定义渐变，支持任意角度</p>
        <div class="demo-row">
          <cyber-magic-text :gradient-colors="['#ff00ff', '#ffbf00', '#00ffff']" gradient-angle="90deg">
            自定义90°
          </cyber-magic-text>
          <cyber-magic-text :gradient-colors="['#00ff00', '#00ffcc', '#00aaff']" gradient-angle="135deg">
            自定义135°
          </cyber-magic-text>
          <cyber-magic-text :gradient-colors="['#ff004c', '#7b2fbe', '#00d4ff']" gradient-angle="to right">
            从左到右
          </cyber-magic-text>
        </div>
      </div>

      <!-- ======================== 动画速度 ======================== -->
      <div class="subsection">
        <h3 class="sub-title">⚡ 动画速度 (speed / duration)</h3>
        <p class="desc">三种预设速度 slow(30s) / normal(20s) / fast(10s)，或通过 duration 自定义秒数</p>
        <div class="demo-row">
          <div class="demo-item">
            <p class="demo-label">slow (30s)</p>
            <cyber-magic-text speed="slow">慢速动画</cyber-magic-text>
          </div>
          <div class="demo-item">
            <p class="demo-label">normal (20s)</p>
            <cyber-magic-text speed="normal">正常速度</cyber-magic-text>
          </div>
          <div class="demo-item">
            <p class="demo-label">fast (10s)</p>
            <cyber-magic-text speed="fast">快速动画</cyber-magic-text>
          </div>
          <div class="demo-item">
            <p class="demo-label">duration=5s (自定义)</p>
            <cyber-magic-text :duration="5">自定义时长</cyber-magic-text>
          </div>
        </div>
      </div>

      <!-- ======================== 高光效果 ======================== -->
      <div class="subsection">
        <h3 class="sub-title">✨ 高光效果 (glowColor / glowSize / blendMode)</h3>
        <p class="desc">自定义扫描高光的颜色、大小和混合模式</p>
        <div class="demo-grid-3">
          <div class="demo-card" v-for="glow in glowSamples" :key="glow.label">
            <p class="demo-label">{{ glow.label }}</p>
            <cyber-magic-text
              :glow-color="glow.color"
              :glow-size="glow.size"
              :blend-mode="glow.blend"
              gradient="ocean"
            >
              GLOW
            </cyber-magic-text>
          </div>
        </div>
      </div>

      <!-- ======================== 描边样式 ======================== -->
      <div class="subsection">
        <h3 class="sub-title">🖊️ 描边样式 (strokeColor / strokeWidth)</h3>
        <p class="desc">自定义文字描边颜色和宽度</p>
        <div class="demo-row">
          <cyber-magic-text stroke-color="#ff00ff" stroke-width="2px">紫红描边</cyber-magic-text>
          <cyber-magic-text stroke-color="#00ffff" stroke-width="2px">青色描边</cyber-magic-text>
          <cyber-magic-text stroke-color="#00ff00" stroke-width="3px">绿色粗描边</cyber-magic-text>
          <cyber-magic-text stroke-color="transparent" stroke-width="0px">无描边</cyber-magic-text>
        </div>
      </div>

      <!-- ======================== 字体样式 ======================== -->
      <div class="subsection">
        <h3 class="sub-title">🔤 字体样式 (fontWeight / fontFamily)</h3>
        <p class="desc">可自定义字体粗细和字体族</p>
        <div class="demo-row">
          <cyber-magic-text font-weight="300" gradient="aurora">轻量字重</cyber-magic-text>
          <cyber-magic-text font-weight="900" gradient="fire">超粗字重</cyber-magic-text>
          <cyber-magic-text font-family="'Times New Roman', serif" font-weight="bold" gradient="sunset">
            衬线字体
          </cyber-magic-text>
        </div>
      </div>

      <!-- ======================== 渲染标签 ======================== -->
      <div class="subsection">
        <h3 class="sub-title">🏗️ 渲染标签 (tag)</h3>
        <p class="desc">通过 tag 属性指定 HTML 标签，默认为 span，可设为 h1~h6、p 等</p>
        <div class="demo-row" style="align-items: baseline;">
          <cyber-magic-text tag="h1" gradient="neon">H1 标题</cyber-magic-text>
          <cyber-magic-text tag="h3" gradient="ocean">H3 标题</cyber-magic-text>
          <cyber-magic-text tag="p" gradient="fire">P 段落</cyber-magic-text>
        </div>
      </div>

      <!-- ======================== 禁用态 ======================== -->
      <div class="subsection">
        <h3 class="sub-title">🚫 禁用态 (disabled)</h3>
        <p class="desc">禁用后文字变灰，动画停止，鼠标变为不可用样式</p>
        <div class="demo-row">
          <cyber-magic-text>正常状态</cyber-magic-text>
          <cyber-magic-text disabled>已禁用</cyber-magic-text>
        </div>
      </div>

      <!-- ======================== 各种尺寸 ======================== -->
      <div class="subsection">
        <h3 class="sub-title">📐 不同尺寸</h3>
        <p class="desc">通过外部 CSS 控制 font-size，自适应各种尺寸</p>
        <div class="demo-col">
          <div style="font-size: 60px; line-height: 1.2;">
            <cyber-magic-text gradient="cyberpunk">60px 大字</cyber-magic-text>
          </div>
          <div style="font-size: 36px; line-height: 1.2;">
            <cyber-magic-text gradient="aurora">36px 中字</cyber-magic-text>
          </div>
          <div style="font-size: 22px; line-height: 1.2;">
            <cyber-magic-text gradient="fire">22px 小字</cyber-magic-text>
          </div>
          <div style="font-size: 14px; line-height: 1.2;">
            <cyber-magic-text gradient="sunset">14px 超小字</cyber-magic-text>
          </div>
        </div>
      </div>

      <!-- ======================== 特殊字符 ======================== -->
      <div class="subsection">
        <h3 class="sub-title">🔣 特殊字符支持</h3>
        <div class="demo-row">
          <cyber-magic-text>!@#$%^&*()_+</cyber-magic-text>
          <cyber-magic-text>+-*/\|{}[]</cyber-magic-text>
          <cyber-magic-text>1234567890</cyber-magic-text>
        </div>
      </div>

      <!-- ======================== 组合效果 ======================== -->
      <div class="subsection">
        <h3 class="sub-title">🎯 组合效果展示</h3>
        <p class="desc">综合使用多个参数打造独特的文字效果</p>
        <div class="combo-grid">
          <div class="combo-item">
            <p class="demo-label">赛博霓虹</p>
            <cyber-magic-text
              gradient="neon"
              speed="fast"
              glow-color="#ff00ff"
              stroke-color="#ff00ff"
              stroke-width="1px"
            >
              NEON CYBER
            </cyber-magic-text>
          </div>
          <div class="combo-item">
            <p class="demo-label">深海极光</p>
            <cyber-magic-text
              gradient="ocean"
              speed="slow"
              glow-color="#7efff5"
              glow-size="30%"
              stroke-color="#00d4ff"
              stroke-width="1px"
            >
              DEEP OCEAN
            </cyber-magic-text>
          </div>
          <div class="combo-item">
            <p class="demo-label">烈焰风暴</p>
            <cyber-magic-text
              gradient="fire"
              speed="fast"
              glow-color="#ffe600"
              stroke-color="#ff6b00"
              stroke-width="2px"
              blend-mode="hard-light"
            >
              FIRE STORM
            </cyber-magic-text>
          </div>
          <div class="combo-item">
            <p class="demo-label">极光幻影</p>
            <cyber-magic-text
              gradient="aurora"
              speed="normal"
              glow-color="#00ff87"
              glow-size="28%"
              stroke-color="#7b2fbe"
              stroke-width="1px"
              blend-mode="screen"
            >
              AURORA
            </cyber-magic-text>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MagicTextGradient, MagicTextBlendMode } from '../../../package/components/magicText/src/instance'

const gradients: MagicTextGradient[] = ['cyberpunk', 'aurora', 'fire', 'ocean', 'sunset', 'neon']

const glowSamples: { label: string; color: string; size: string; blend: MagicTextBlendMode }[] = [
  { label: '白色高光 (default)', color: '#fff', size: '25%', blend: 'color-dodge' },
  { label: '青色高光 + screen', color: '#00ffff', size: '28%', blend: 'screen' },
  { label: '粉色高光 + overlay', color: '#ff269b', size: '30%', blend: 'overlay' },
  { label: '金色大光斑', color: '#ffbf00', size: '40%', blend: 'soft-light' },
  { label: '绿色高光 + hard-light', color: '#00ff00', size: '20%', blend: 'hard-light' },
  { label: '紫色小光斑', color: '#7b2fbe', size: '15%', blend: 'color-dodge' },
]
</script>

<style scoped lang="scss">
.content {
  padding: 30px;
  text-align: left;
  font-size: 36px;
}

.section {
  margin-bottom: 60px;
}

.section-title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #00ffff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 255, 255, 0.2);
}

.subsection {
  margin-bottom: 36px;
}

.sub-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 6px;
  color: #e0e0e0;
}

.desc {
  font-size: 13px;
  color: #888;
  margin-bottom: 14px;
}

.demo-row {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  align-items: center;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
}

.demo-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
}

.demo-label {
  font-size: 13px;
  color: #999;
  margin-bottom: 4px;
}

.demo-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  min-width: 160px;
}

.demo-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.preset-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.preset-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 16px;
}

.combo-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.combo-item {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  transition: border-color 0.3s;

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
  }
}
</style>
