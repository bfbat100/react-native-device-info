var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.useOnMount=useOnMount;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=require("react");function useOnMount(asyncGetter,initialResult){var _useState=(0,_react.useState)({loading:true,result:initialResult}),_useState2=(0,_slicedToArray2.default)(_useState,2),response=_useState2[0],setResponse=_useState2[1];(0,_react.useEffect)(function(){var getAsync=function getAsync(){var result;return _regenerator.default.async(function getAsync$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _regenerator.default.awrap(asyncGetter());case 2:result=_context.sent;setResponse({loading:false,result:result});case 4:case"end":return _context.stop();}}});};getAsync();},[asyncGetter]);return response;}
//# sourceMappingURL=asyncHookWrappers.js.map