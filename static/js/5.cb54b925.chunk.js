(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{379:function(n,t){n.exports={title:"React\u751f\u547d\u5468\u671f\u8be6\u89e3",date:"2018-04-06 17:06:19",tags:"React",header_img:"",key:"React\u751f\u547d\u5468\u671f\u8be6\u89e3.md",content:"\n\n# React\u751f\u547d\u5468\u671f\u56fe\u89e3\n\n![React\u751f\u547d\u5468\u671f\u56fe\u89e3](React\u751f\u547d\u5468\u671f\u8be6\u89e3/react_life_cycle.png)\n\n# \u8be6\u7ec6\u8bf4\u660e\n\n\u751f\u547d\u5468\u671f\u5305\u542b4\u79cd\u60c5\u51b5\uff1a\u7ec4\u4ef6\u521d\u59cb\u5316\u88c5\u8f7d\u65f6\u5019\uff0c\u7ec4\u4ef6\u5c5e\u6027\u6539\u53d8\u65f6\u5019\uff0c\u7ec4\u4ef6\u72b6\u6001\u6539\u53d8\u65f6\u5019\uff0c\u7ec4\u4ef6\u88ab\u9500\u6bc1\u65f6\u5019\n\n\u751f\u547d\u5468\u671f\u5171\u63d0\u4f9b\u4e8610\u4e2a\u4e0d\u540c\u7684API\u3002\n\n## defaultProps\n\nES6\u4f7f\u7528defaultProps()\u65b9\u6cd5\uff0cES5\u4e2dgetDefaultProps()\u65b9\u6cd5\u3002\u53ea\u8c03\u7528\u4e00\u6b21\uff0c\u8fd4\u56de\u5bf9\u8c61\u7528\u4e8e\u8bbe\u7f6e\u9ed8\u8ba4\u7684props\uff0c\u4f46\u662f\u5bf9\u4e8e\u5f15\u7528\u503c\u4f1a\u5728\u5404\u4e2a\u5b9e\u4f8b\u4e2d\u5171\u4eab\u3002\n\n## constructor(props)\n\n\u6784\u9020\u51fd\u6570\uff0c\u5b9e\u4f8b\u521b\u5efa\u7684\u65f6\u5019\u8c03\u7528\uff0c\u4e3b\u8981\u4e3a\u4e86\u521d\u59cb\u5316state\u6216\u7ed1\u5b9athis\uff0cES5\u4e2d\u7528getInitialState()\n\n## componentWillMount()\n\n\u7b2c\u4e00\u6b21\u6e32\u67d3\u9636\u6bb5\u5728\u8c03\u7528render\u65b9\u6cd5\u524d\u4f1a\u8c03\u7528\uff0c\u6b64\u65f6\u4ecd\u7136\u53ef\u4ee5\u4fee\u6539\u7ec4\u4ef6\u7684state\n\n## render()\n\n\u5fc5\u9009\u65b9\u6cd5\uff0c\u521b\u5efa\u865a\u62dfDOM\uff0c\u8be5\u65b9\u6cd5\u5177\u6709\u7279\u6b8a\u89c4\u5219\uff1a\n\n- \u53ea\u80fd\u901a\u8fc7this.props\u548cthis.state\u8bbf\u95ee\u6570\u636e\n- \u53ef\u4ee5\u8fd4\u56denull\u3001false\u6216\u4efb\u4f55React\u7ec4\u4ef6\n- \u53ea\u80fd\u51fa\u73b0\u4e00\u4e2a\u9876\u7ea7\u7ec4\u4ef6\uff08\u4e0d\u80fd\u8fd4\u56de\u6570\u7ec4\uff09\n- \u4e0d\u80fd\u6539\u53d8\u7ec4\u4ef6\u7684\u72b6\u6001state\n- \u4e0d\u80fd\u4fee\u6539DOM\u7684\u8f93\u51fa\n\n## componentDidMount\n\n\u9996\u6b21\u88c5\u8f7d\u6e32\u67d3\u5b8c\u6210\uff0c\u771f\u5b9e\u7684DOM\u88ab\u6e32\u67d3\u51fa\u6765\u540e\u8c03\u7528\uff0c\u53ef\u4ee5\u505a\u4e00\u4e9b\u4f9d\u8d56DOM\u7684\u64cd\u4f5c\uff0c\u6bd4\u5982\u5229\u7528refs\u83b7\u53d6DOM\u3002\u5b50\u7ec4\u4ef6\u6bd4\u7236\u7ec4\u4ef6\u4f18\u5148\u6e32\u67d3\uff0c\u6240\u4ee5\u53ef\u4ee5\u83b7\u53d6\u5b50\u7ec4\u4ef6\u5bf9\u5e94\u7684DOM\u3002\n\n\u6ce8\u610f\uff1a\u5728\u670d\u52a1\u7aef\u4e2d\uff0c\u8be5\u65b9\u6cd5\u4e0d\u4f1a\u88ab\u8c03\u7528\uff01\n\n## componentWillReciveProps(nextProps)\n\n\u7ec4\u4ef6\u63a5\u53d7\u5230\u65b0\u7684props\u65f6\u5019\u8c03\u7528\uff0c\u6b64\u65f6\u53ef\u4ee5\u6839\u636enextProps\u6765\u4fee\u6539state\u3002\n\n\u6ce8\u610f\uff1a\u8fd9\u4e2a\u65f6\u5019\u867d\u7136\u8bf4\u662f\u83b7\u53d6\u65b0\u7684\u5c5e\u6027\uff0c\u4f46\u662f\u5e76\u4e0d\u80fd\u4fdd\u8bc1\u5c5e\u6027\u4e00\u5b9a\u53d1\u751f\u4e86\u6539\u53d8\u3002\n\n## shouldComponentUpdate(nextProps, nextState)\n\n\u63a5\u53d7\u5230\u65b0\u7684\u5c5e\u6027\u6216\u8005\u65b0\u7684\u72b6\u6001\u7684\u65f6\u5019\u5728render\u524d\u4f1a\u88ab\u8c03\u7528\u3002\u9664\u4e86\u8c03\u7528forceUpdate\u548c\u521d\u59cb\u5316\u6e32\u67d3\u4ee5\u5916\u3002\n\n\u8be5\u65b9\u6cd5\u8ba9\u6211\u4eec\u6709\u673a\u4f1a\u51b3\u5b9a\u662f\u5426\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\uff0c\u8fd4\u56defalse\uff0c\u90a3\u4e48\u4e0d\u4f1a\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\uff0c\u501f\u6b64\u53ef\u4ee5\u4f18\u5316\u6027\u80fd\uff0c\u9664\u975e\u7279\u6b8a\u60c5\u51b5\u6bd4\u5982\u5728\u7ec4\u4ef6\u5f88\u591a\u6027\u80fd\u74f6\u9888\uff0c\u5927\u591a\u6570\u60c5\u51b5\u4e0d\u63a8\u8350\u4f7f\u7528\u3002\n\n## componentWillUpdate(nextProps, nextState)\n\n\u5f53\u7ec4\u4ef6\u786e\u5b9a\u8981\u66f4\u65b0\uff0crender\u4e4b\u524d\u88ab\u8c03\u7528\u3002\n\n\u8fd9\u4e2a\u65f6\u5019\u53ef\u4ee5\u786e\u5b9a\u4e00\u5b9a\u4f1a\u66f4\u65b0\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u6267\u884c\u66f4\u65b0\u524d\u7684\u64cd\u4f5c\u3002\u6b64\u65f6\u4e0d\u80fd\u66f4\u65b0\u4fee\u6539state\u548cprops\uff01\n\n## componentDitUpdate()\n\n\u5b8c\u6210\u6e32\u67d3\u65b0\u7684props\u6216\u8005state\u540e\u8c03\u7528\uff0c\u6b64\u65f6\u53ef\u4ee5\u8bbf\u95ee\u5230\u65b0\u7684DOM\u5143\u7d20\u3002\n\n## componentWillUnmount()\n\n\u7ec4\u4ef6\u88ab\u5378\u8f7d\u4e4b\u524d\u8c03\u7528\uff0c\u53ef\u4ee5\u7528\u4e8e\u505a\u4e00\u4e9b\u6e05\u7406\u5de5\u4f5c\uff0c\u5728componentDidMount\u65b9\u6cd5\u4e2d\u6dfb\u52a0\u7684\u6240\u6709\u4efb\u52a1\u90fd\u9700\u8981\u5728\u8be5\u65b9\u6cd5\u4e2d\u64a4\u9500\uff0c\u6bd4\u5982\u521b\u5efa\u7684\u5b9a\u65f6\u5668\u6216\u6dfb\u52a0\u7684\u4e8b\u4ef6\u76d1\u542c\u5668\u3002\n"}}}]);
//# sourceMappingURL=5.cb54b925.chunk.js.map