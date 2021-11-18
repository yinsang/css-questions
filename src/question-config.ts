
import Question0 from './questions/0';
import Answer0 from './questions/0/answer';
import Question1 from './questions/1';
import Answer1 from './questions/1/answer';
import Question2 from './questions/2';
import Answer2 from './questions/2/answer';
import Question3 from './questions/3';
import Answer3 from './questions/3/answer';
import Question4 from './questions/4';
import Answer4 from './questions/4/answer';
import Question5 from './questions/5';
import Answer5 from './questions/5/answer';
import Question6 from './questions/6';
import Answer6 from './questions/6/answer';
import Question7 from './questions/7';
import Answer7 from './questions/7/answer';
import Question8 from './questions/8';
import Answer8 from './questions/8/answer';
import Question9 from './questions/9';
import Answer9 from './questions/9/answer';
import Question10 from './questions/9';
import Answer10 from './questions/9/answer';

export const questions = [
  {
    title: '考察box-sizing。将div设置为：总宽为100px的盒子。两个解法',
    answer: '',
    component: Question0,
    AnswerComponent: Answer0,
    tips: [
      'https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing'
    ]
  },
  {
    title: '考察outline。学会用outline调试各种css问题。给div套上1px、红色的outline',
    answer: '',
    component: Question1,
    AnswerComponent: Answer1,
    tips: [
      'https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline'
    ]
  },
  {
    title: '给文字设置字号和行高。自动撑起高度为高度30px',
    answer: '',
    component: Question2,
    AnswerComponent: Answer2,
    tips: [
      'https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height'
    ]
  },
  {
    title: '用class，不要用nth-child。给div中的第2个元素设置红色字体',
    answer: '',
    component: Question3,
    AnswerComponent: Answer3,
    tips: [
      'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/class'
    ]
  },
  {
    title: '用padding，少用margin。给子元素增加向上的距离20px',
    answer: '',
    component: Question4,
    AnswerComponent: Answer4,
    tips: [
      'https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding',
      'https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin'
    ]
  },
  {
    title: '设置字体字重为加粗',
    answer: '',
    component: Question5,
    AnswerComponent: Answer5,
    tips: [
      'https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight'
    ]
  },
  {
    title: '设置div的宽度自动撑满',
    answer: '',
    component: Question6,
    AnswerComponent: Answer6,
    tips: [

      'https://developer.mozilla.org/zh-CN/docs/Web/CSS/width',
      'https://www.zhangxinxu.com/wordpress/2010/10/%e9%a1%b5%e9%9d%a2%e9%87%8d%e6%9e%84%e2%80%9c%e9%91%ab%e4%b8%89%e6%97%a0%e5%87%86%e5%88%99%e2%80%9d-%e4%b9%8b%e2%80%9c%e6%97%a0%e5%ae%bd%e5%ba%a6%e2%80%9d%e5%87%86%e5%88%99/',
      'https://www.zhangxinxu.com/wordpress/2018/07/css-width-auto/'
    ]
  },
  {
    title: '高度的自动撑起。将div设置为100px高，图片设置为50px高',
    answer: '',
    component: Question7,
    AnswerComponent: Answer7,
    tips: [
      'https://developer.mozilla.org/zh-CN/docs/Web/CSS/height'
    ]
  },
  {
    title: '学会flex的基础用法。一行两列',
    answer: '',
    component: Question8,
    AnswerComponent: Answer8,
    tips: [
      'https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html',
      'https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex'
    ]
  },
  {
    title: '实现图片在div的最右侧',
    answer: '',
    component: Question9,
    AnswerComponent: Answer9,
    tips: [
      'https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html',
      'https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex',
      'https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin'
    ]
  }
];
export default {};
