
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

export const questions = [
  {
    title: '考察box-sizing。将div设置为：总宽为100px的盒子。两个解法',
    answer: '',
    component: Question0,
    AnswerComponent: Answer1,
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
    title: '设置字体字重',
    answer: '',
    component: Question5,
    AnswerComponent: Answer5,
    tips: [
      'https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight'
    ]
  }
];
export default {};
