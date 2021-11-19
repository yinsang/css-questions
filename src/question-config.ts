
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
import Question10 from './questions/10';
import Answer10 from './questions/10/answer';
import Question11 from './questions/11';
import Answer11 from './questions/11/answer';
import Question12 from './questions/12/index.module';
import Answer12 from './questions/12/answer';
import Question13 from './questions/13';
import Answer13 from './questions/13/answer';
import Question14 from './questions/14';
import Answer14 from './questions/14/answer';
import Question15 from './questions/15';
import Answer15 from './questions/15/answer';
import Question16 from './questions/16';
import Answer16 from './questions/16/answer';
import Question17 from './questions/17';
import Answer17 from './questions/17/answer';
import Question18 from './questions/18';
import Answer18 from './questions/18/answer';
import Question19 from './questions/19';
import Answer19 from './questions/19/answer';

import Question20 from './questions/20';
import Answer20 from './questions/20/answer';

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
    title: 'flex 实现图片在div的最右侧',
    answer: '',
    component: Question9,
    AnswerComponent: Answer9,
    tips: [
      'https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html',
      'https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex',
      'https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin',
      'https://www.zhangxinxu.com/wordpress/2010/01/css-float%E6%B5%AE%E5%8A%A8%E7%9A%84%E6%B7%B1%E5%85%A5%E7%A0%94%E7%A9%B6%E3%80%81%E8%AF%A6%E8%A7%A3%E5%8F%8A%E6%8B%93%E5%B1%95%E4%B8%80/',
      'https://www.xinran001.com/frontend/162.html'
    ]
  },
  {
    title: '善用font的继承。给下面所有字体都设置  font-family: fantasy;',
    answer: '',
    component: Question10,
    AnswerComponent: Answer10,
    tips: [
      'https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family'
    ]
  },
  {
    title: '忘记!important吧。',
    answer: '',
    component: Question11,
    AnswerComponent: Answer11,
    tips: [
      'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity',
      'https://stackoverflow.com/questions/3706819/what-are-the-implications-of-using-important-in-css'
    ]
  },
  {
    title: 'img宽高只保留一个就好。设置图片高30px，宽度自适应',
    answer: '',
    component: Question12,
    AnswerComponent: Answer12,
    tips: [
      'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img'
    ]
  },
  {
    title: '写class，别直接用标签名。给div中的span设置color 红色',
    answer: '',
    component: Question13,
    AnswerComponent: Answer13,
    tips: [
      'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img'
    ]
  },
  {
    title: '灵活切换img和background-image。进行图文最佳结合',
    answer: '',
    component: Question14,
    AnswerComponent: Answer14,
    tips: [
      'https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-image'
    ]
  },
  {
    title: 'div中子元素的水平居中',
    answer: '',
    component: Question15,
    AnswerComponent: Answer15,
    tips: [
      'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img',
      'https://segmentfault.com/a/1190000021249922',
      'https://www.google.com/search?q=css%E6%B0%B4%E5%B9%B3%E5%B1%85%E4%B8%AD&rlz=1C5GCEA_enUS922US922&oq=css%E6%B0%B4%E5%B9%B3%E5%B1%85%E4%B8%AD&aqs=chrome..69i57j69i59j35i39l2j69i60l2j69i65j69i61.2555j0j7&sourceid=chrome&ie=UTF-8'
    ]
  },
  {
    title: 'div中子元素的垂直居中',
    answer: '',
    component: Question16,
    AnswerComponent: Answer16,
    tips: [
      'https://www.google.com/search?q=css%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD&rlz=1C5GCEA_enUS922US922&sxsrf=AOaemvKIRPoWYgWBZl7NI9bv7HfQGIP2kw%3A1637293577545&ei=CR6XYZndILW2qtsPqJ23uAQ&ved=0ahUKEwjZhdTwwaP0AhU1m2oFHajODUcQ4dUDCA4&uact=5&oq=css%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAEEcQsAMyBwgAEEcQsANKBAhBGABQAFgAYIPLEmgBcAN4AIABAIgBAJIBAJgBAMgBAsABAQ&sclient=gws-wiz'
    ]
  },
  {
    title: 'div中子元素的水平垂直居中',
    answer: '',
    component: Question17,
    AnswerComponent: Answer17,
    tips: [
      '自己google吧'
    ]
  },
  {
    title: '只使用padding-top。一列内最后一个元素，尽量不要使用margin和padding-bottom去撑起高度。',
    answer: '',
    component: Question18,
    AnswerComponent: Answer18,
    tips: [
      '自己google吧'
    ]
  },
  {
    title: '使用完整classname，不要使用&-去拼接scss',
    answer: '',
    component: Question19,
    AnswerComponent: Answer19,
    tips: [
      '自己google吧'
    ]
  },
  {
    title: '原始css的reset应该在全局去做',
    answer: '',
    component: Question20,
    AnswerComponent: Answer20,
    tips: [
      '自己google吧'
    ]
  }
];
export default {};
