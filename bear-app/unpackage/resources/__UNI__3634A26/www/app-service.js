var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[2,'?:'],[[7],[3,'_rotate']],[1,'rotate_loop'],[1,'']]]])
Z([[7],[3,'_rotate']])
Z([[2,'!'],[[7],[3,'_rotate']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'main-list oBorder'])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'_isShowPass']],[[2,'==='],[[7],[3,'type']],[1,'password']]],[[2,'!'],[[7],[3,'_isShowCode']]]])
Z([[2,'&&'],[[7],[3,'_isShowCode']],[[2,'!'],[[7],[3,'_isShowPass']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'main'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'phoneData']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'11'])
Z([3,'请输入手机号码'])
Z([3,'text'])
Z([[7],[3,'phoneData']])
Z([3,'1'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'passData']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z(z[5])
Z([3,'请输入新密码'])
Z([3,'password'])
Z([[7],[3,'passData']])
Z([3,'2'])
Z(z[2])
Z(z[3])
Z(z[3])
Z([3,'vue-ref'])
Z([3,'获取重置码'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^setCode']],[[4],[[5],[[4],[[5],[1,'getVerCode']]]]]]]],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'verCode']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'runCode'])
Z([3,'4'])
Z([3,'验证码'])
Z([3,'30'])
Z([3,'number'])
Z([[7],[3,'verCode']])
Z([3,'3'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'startRePass']]]]]]]]])
Z([[7],[3,'isRotate']])
Z([3,'重置密码'])
Z(z[25])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'main'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'userTel']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'11'])
Z([3,'电话'])
Z([3,'number'])
Z([[7],[3,'userTel']])
Z([3,'1'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'userPwd']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z(z[5])
Z([3,'密码'])
Z([3,'password'])
Z([[7],[3,'userPwd']])
Z([3,'2'])
Z(z[2])
Z(z[3])
Z([3,'wbutton'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'startLogin']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'isRotate']])
Z([3,'登 录'])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'main'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'userName']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'4'])
Z([3,'姓名'])
Z([3,'text'])
Z([[7],[3,'userName']])
Z([3,'1'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'userTel']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'11'])
Z([3,'手机号'])
Z(z[7])
Z([[7],[3,'userTel']])
Z([3,'2'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'userPwd']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z(z[13])
Z([3,'登录密码'])
Z([3,'password'])
Z([[7],[3,'userPwd']])
Z([3,'3'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'startReg']]]]]]]]])
Z([[7],[3,'isRotate']])
Z([3,'注 册'])
Z(z[5])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/watch-login/watch-button.wxml','./components/watch-login/watch-input.wxml','./pages/home/home.wxml','./pages/live/beforeLive.wxml','./pages/login/forget.wxml','./pages/login/login.wxml','./pages/login/register.wxml','./pages/me/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,1,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,2,e,s,gg)){oD.wxVkey=1
}
xC.wxXCkey=1
oD.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var cF=_n('view')
_rz(z,cF,'class',0,e,s,gg)
var hG=_v()
_(cF,hG)
if(_oz(z,1,e,s,gg)){hG.wxVkey=1
}
var oH=_v()
_(cF,oH)
if(_oz(z,2,e,s,gg)){oH.wxVkey=1
}
hG.wxXCkey=1
oH.wxXCkey=1
_(r,cF)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var aL=_n('view')
_rz(z,aL,'class',0,e,s,gg)
var tM=_n('view')
_rz(z,tM,'class',1,e,s,gg)
var eN=_mz(z,'w-input',['bind:__l',2,'bind:input',1,'data-event-opts',2,'maxlength',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(tM,eN)
var bO=_mz(z,'w-input',['isShowPass',-1,'bind:__l',10,'bind:input',1,'data-event-opts',2,'maxlength',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(tM,bO)
var oP=_mz(z,'w-input',['isShowCode',-1,'bind:__l',18,'bind:input',1,'bind:setCode',2,'class',3,'codeText',4,'data-event-opts',5,'data-ref',6,'maxlength',7,'placeholder',8,'setTime',9,'type',10,'value',11,'vueId',12],[],e,s,gg)
_(tM,oP)
_(aL,tM)
var xQ=_mz(z,'w-button',['bind:__l',31,'bindtap',1,'data-event-opts',2,'rotate',3,'text',4,'vueId',5],[],e,s,gg)
_(aL,xQ)
_(r,aL)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var fS=_n('view')
_rz(z,fS,'class',0,e,s,gg)
var cT=_n('view')
_rz(z,cT,'class',1,e,s,gg)
var hU=_mz(z,'w-input',['bind:__l',2,'bind:input',1,'data-event-opts',2,'maxlength',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(cT,hU)
var oV=_mz(z,'w-input',['bind:__l',10,'bind:input',1,'data-event-opts',2,'maxlength',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(cT,oV)
_(fS,cT)
var cW=_mz(z,'w-button',['bind:__l',18,'bindtap',1,'class',2,'data-event-opts',3,'rotate',4,'text',5,'vueId',6],[],e,s,gg)
_(fS,cW)
_(r,fS)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var lY=_n('view')
_rz(z,lY,'class',0,e,s,gg)
var aZ=_n('view')
_rz(z,aZ,'class',1,e,s,gg)
var t1=_mz(z,'w-input',['bind:__l',2,'bind:input',1,'data-event-opts',2,'maxlength',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(aZ,t1)
var e2=_mz(z,'w-input',['bind:__l',10,'bind:input',1,'data-event-opts',2,'maxlength',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(aZ,e2)
var b3=_mz(z,'w-input',['isShowPass',-1,'bind:__l',18,'bind:input',1,'data-event-opts',2,'maxlength',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(aZ,b3)
_(lY,aZ)
var o4=_mz(z,'w-button',['bind:__l',26,'bindtap',1,'data-event-opts',2,'rotate',3,'text',4,'vueId',5],[],e,s,gg)
_(lY,o4)
_(r,lY)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/login/login","pages/me/index","pages/live/beforeLive","pages/login/register","pages/login/forget","pages/home/home"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"borderStyle":"black","backgroundColor":"#333","color":"#8F8F94","selectedColor":"#f33e54","list":[{"pagePath":"pages/home/home","iconPath":"static/image/tabbar/home.png","selectedIconPath":"static/image/tabbar/homeactive.png","text":"首页"},{"pagePath":"pages/live/beforeLive","iconPath":"static/image/tabbar/add.png","selectedIconPath":"static/image/tabbar/addactive.png","text":"直播"},{"pagePath":"pages/me/index","iconPath":"static/image/tabbar/me.png","selectedIconPath":"static/image/tabbar/meactive.png","text":"我"}]},"nvue":{"pages":{"pages/live/live.html":{"window":{"usingComponents":{}},"nvue":true}}},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"bear-app","compilerVersion":"2.3.3","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/watch-login/watch-button.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/watch-login/watch-button.wxml']=$gwx('./components/watch-login/watch-button.wxml');

__wxAppCode__['components/watch-login/watch-input.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/watch-login/watch-input.wxml']=$gwx('./components/watch-login/watch-input.wxml');

__wxAppCode__['pages/home/home.json']={"usingComponents":{}};
__wxAppCode__['pages/home/home.wxml']=$gwx('./pages/home/home.wxml');

__wxAppCode__['pages/live/beforeLive.json']={"usingComponents":{}};
__wxAppCode__['pages/live/beforeLive.wxml']=$gwx('./pages/live/beforeLive.wxml');

__wxAppCode__['pages/login/forget.json']={"usingComponents":{"w-input":"/components/watch-login/watch-input","w-button":"/components/watch-login/watch-button"}};
__wxAppCode__['pages/login/forget.wxml']=$gwx('./pages/login/forget.wxml');

__wxAppCode__['pages/login/login.json']={"usingComponents":{"w-input":"/components/watch-login/watch-input","w-button":"/components/watch-login/watch-button"}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/login/register.json']={"usingComponents":{"w-input":"/components/watch-login/watch-input","w-button":"/components/watch-login/watch-button"}};
__wxAppCode__['pages/login/register.wxml']=$gwx('./pages/login/register.wxml');

__wxAppCode__['pages/me/index.json']={"usingComponents":{}};
__wxAppCode__['pages/me/index.wxml']=$gwx('./pages/me/index.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{1037:function(t,e,n){"use strict";var o=n("ecea"),u=n.n(o);u.a},1168:function(t,e,n){"use strict";n.r(e);var o=n("7ff3"),u=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=u.a},"1bd4":function(t,e,n){"use strict";(function(t){n("2b8f"),n("921b");var e=r(n("66fd")),o=r(n("2f47")),u=r(n("0548"));function r(t){return t&&t.__esModule?t:{default:t}}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){a(t,e,n[e])})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default.config.productionTip=!1,e.default.prototype.$store=u.default,o.default.mpType="app";var f=new e.default(c({},o.default,{store:u.default}));t(f).$mount()}).call(this,n("6e42")["createApp"])},"2f47":function(t,e,n){"use strict";n.r(e);var o=n("1168");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("1037");var r,c,a=n("2877"),f=Object(a["a"])(o["default"],r,c,!1,null,null,null);e["default"]=f.exports},"7ff3":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){var e=this;t.getStorage({key:"userInfo",success:function(t){e.$store.commit("login",t.data)}}),t.getLocation({type:"wgs84",success:function(t){e.$store.commit("location",t)}})}};e.default=n}).call(this,n("6e42")["default"])},ecea:function(t,e,n){}},[["1bd4","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var r, o, i = t[0], c = t[1], l = t[2], s = 0, f = []; s < i.length; s++) {
      o = i[s], a[o] && f.push(a[o][0]), a[o] = 0;
    }

    for (r in c) {
      Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    }

    p && p(t);

    while (f.length) {
      f.shift()();
    }

    return u.push.apply(u, l || []), n();
  }

  function n() {
    for (var e, t = 0; t < u.length; t++) {
      for (var n = u[t], r = !0, o = 1; o < n.length; o++) {
        var i = n[o];
        0 !== a[i] && (r = !1);
      }

      r && (u.splice(t--, 1), e = c(c.s = n[0]));
    }

    return e;
  }

  var r = {},
      o = {
    "common/runtime": 0
  },
      a = {
    "common/runtime": 0
  },
      u = [];

  function i(e) {
    return c.p + "" + e + ".js";
  }

  function c(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, c), n.l = !0, n.exports;
  }

  c.e = function (e) {
    var t = [],
        n = {
      "components/watch-login/watch-button": 1,
      "components/watch-login/watch-input": 1
    };
    o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise(function (t, n) {
      for (var r = ({
        "components/watch-login/watch-button": "components/watch-login/watch-button",
        "components/watch-login/watch-input": "components/watch-login/watch-input"
      }[e] || e) + ".wxss", a = c.p + r, u = document.getElementsByTagName("link"), i = 0; i < u.length; i++) {
        var l = u[i],
            s = l.getAttribute("data-href") || l.getAttribute("href");
        if ("stylesheet" === l.rel && (s === r || s === a)) return t();
      }

      var f = document.getElementsByTagName("style");

      for (i = 0; i < f.length; i++) {
        l = f[i], s = l.getAttribute("data-href");
        if (s === r || s === a) return t();
      }

      var p = document.createElement("link");
      p.rel = "stylesheet", p.type = "text/css", p.onload = t, p.onerror = function (t) {
        var r = t && t.target && t.target.src || a,
            u = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
        u.request = r, delete o[e], p.parentNode.removeChild(p), n(u);
      }, p.href = a;
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(p);
    }).then(function () {
      o[e] = 0;
    }));
    var r = a[e];
    if (0 !== r) if (r) t.push(r[2]);else {
      var u = new Promise(function (t, n) {
        r = a[e] = [t, n];
      });
      t.push(r[2] = u);
      var l,
          s = document.createElement("script");
      s.charset = "utf-8", s.timeout = 120, c.nc && s.setAttribute("nonce", c.nc), s.src = i(e), l = function l(t) {
        s.onerror = s.onload = null, clearTimeout(f);
        var n = a[e];

        if (0 !== n) {
          if (n) {
            var r = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src,
                u = new Error("Loading chunk " + e + " failed.\n(" + r + ": " + o + ")");
            u.type = r, u.request = o, n[1](u);
          }

          a[e] = void 0;
        }
      };
      var f = setTimeout(function () {
        l({
          type: "timeout",
          target: s
        });
      }, 12e4);
      s.onerror = s.onload = l, document.head.appendChild(s);
    }
    return Promise.all(t);
  }, c.m = e, c.c = r, c.d = function (e, t, n) {
    c.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, c.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, c.t = function (e, t) {
    if (1 & t && (e = c(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (c.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      c.d(n, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return n;
  }, c.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return c.d(t, "a", t), t;
  }, c.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, c.p = "/", c.oe = function (e) {
    throw console.error(e), e;
  };
  var l = global["webpackJsonp"] = global["webpackJsonp"] || [],
      s = l.push.bind(l);
  l.push = t, l = l.slice();

  for (var f = 0; f < l.length; f++) {
    t(l[f]);
  }

  var p = s;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0548":function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("66fd")),i=a(n("2f62"));function a(t){return t&&t.__esModule?t:{default:t}}o.default.use(i.default);var s=new i.default.Store({state:{login:!1,userTel:"",userName:"",lat:"",lng:""},mutations:{login:function(e,n){e.login=!0,e.userTel=n.userTel,e.userName=n.userName,t.setStorage({key:"userInfo",data:n})},logout:function(e){e.login=!1,e.userTel="",e.userName="",t.removeStorage({key:"userInfo",success:function(t){console.log(r("成功清理缓存"," at store\\index.js:29"))}})},location:function(t,e){t.lat=e.latitude,t.lng=e.longitude}},actions:{}}),u=s;e.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(o){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),i="";if(o.length>1){var a=o.pop();i=o.join("---COMMA---"),0===a.indexOf(" at ")?i+=a:i+="---COMMA---"+a}else i=o[0];return i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var u,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=u):o&&(u=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var f=c.render;c.render=function(t,e){return u.call(e),f(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return r})},"2b8f":function(t,e,n){},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return d}),n.d(e,"install",function(){return x}),n.d(e,"mapState",function(){return E}),n.d(e,"mapMutations",function(){return D}),n.d(e,"mapGetters",function(){return P}),n.d(e,"mapActions",function(){return C}),n.d(e,"createNamespacedHelpers",function(){return T});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var r=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},o="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function i(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){o.emit("vuex:mutation",t,e)}))}function a(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function s(t){return null!==t&&"object"===typeof t}function u(t){return t&&"function"===typeof t.then}var c=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},f={namespaced:{configurable:!0}};f.namespaced.get=function(){return!!this._rawModule.namespaced},c.prototype.addChild=function(t,e){this._children[t]=e},c.prototype.removeChild=function(t){delete this._children[t]},c.prototype.getChild=function(t){return this._children[t]},c.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},c.prototype.forEachChild=function(t){a(this._children,t)},c.prototype.forEachGetter=function(t){this._rawModule.getters&&a(this._rawModule.getters,t)},c.prototype.forEachAction=function(t){this._rawModule.actions&&a(this._rawModule.actions,t)},c.prototype.forEachMutation=function(t){this._rawModule.mutations&&a(this._rawModule.mutations,t)},Object.defineProperties(c.prototype,f);var l=function(t){this.register([],t,!1)};function p(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;p(t.concat(r),e.getChild(r),n.modules[r])}}l.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},l.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},l.prototype.update=function(t){p([],this.root,t)},l.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var o=new c(e,n);if(0===t.length)this.root=o;else{var i=this.get(t.slice(0,-1));i.addChild(t[t.length-1],o)}e.modules&&a(e.modules,function(e,o){r.register(t.concat(o),e,n)})},l.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var h;var d=function(t){var e=this;void 0===t&&(t={}),!h&&"undefined"!==typeof window&&window.Vue&&x(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var o=t.state;void 0===o&&(o={}),"function"===typeof o&&(o=o()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new l(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new h;var a=this,s=this,u=s.dispatch,c=s.commit;this.dispatch=function(t,e){return u.call(a,t,e)},this.commit=function(t,e,n){return c.call(a,t,e,n)},this.strict=r,m(this,o,[],this._modules.root),g(this,o),n.forEach(function(t){return t(e)}),h.config.devtools&&i(this)},v={state:{configurable:!0}};function _(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function y(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;m(t,n,[],t._modules.root,!0),g(t,n,e)}function g(t,e,n){var r=t._vm;t.getters={};var o=t._wrappedGetters,i={};a(o,function(e,n){i[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=h.config.silent;h.config.silent=!0,t._vm=new h({data:{$$state:e},computed:i}),h.config.silent=s,t.strict&&S(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),h.nextTick(function(){return r.$destroy()}))}function m(t,e,n,r,o){var i=!n.length,a=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[a]=r),!i&&!o){var s=k(e,n.slice(0,-1)),u=n[n.length-1];t._withCommit(function(){h.set(s,u,r.state)})}var c=r.context=b(t,a,n);r.forEachMutation(function(e,n){var r=a+n;w(t,r,e,c)}),r.forEachAction(function(e,n){var r=e.root?n:a+n,o=e.handler||e;O(t,r,o,c)}),r.forEachGetter(function(e,n){var r=a+n;A(t,r,e,c)}),r.forEachChild(function(r,i){m(t,e,n.concat(i),r,o)})}function b(t,e,n){var r=""===e,o={dispatch:r?t.dispatch:function(n,r,o){var i=j(n,r,o),a=i.payload,s=i.options,u=i.type;return s&&s.root||(u=e+u),t.dispatch(u,a)},commit:r?t.commit:function(n,r,o){var i=j(n,r,o),a=i.payload,s=i.options,u=i.type;s&&s.root||(u=e+u),t.commit(u,a,s)}};return Object.defineProperties(o,{getters:{get:r?function(){return t.getters}:function(){return $(t,e)}},state:{get:function(){return k(t.state,n)}}}),o}function $(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach(function(o){if(o.slice(0,r)===e){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[o]},enumerable:!0})}}),n}function w(t,e,n,r){var o=t._mutations[e]||(t._mutations[e]=[]);o.push(function(e){n.call(t,r.state,e)})}function O(t,e,n,r){var o=t._actions[e]||(t._actions[e]=[]);o.push(function(e,o){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,o);return u(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):i})}function A(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function S(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function k(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function j(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function x(t){h&&t===h||(h=t,r(h))}v.state.get=function(){return this._vm._data.$$state},v.state.set=function(t){0},d.prototype.commit=function(t,e,n){var r=this,o=j(t,e,n),i=o.type,a=o.payload,s=(o.options,{type:i,payload:a}),u=this._mutations[i];u&&(this._withCommit(function(){u.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(s,r.state)}))},d.prototype.dispatch=function(t,e){var n=this,r=j(t,e),o=r.type,i=r.payload,a={type:o,payload:i},s=this._actions[o];if(s)return this._actionSubscribers.forEach(function(t){return t(a,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(i)})):s[0](i)},d.prototype.subscribe=function(t){return _(t,this._subscribers)},d.prototype.subscribeAction=function(t){return _(t,this._actionSubscribers)},d.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},d.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},d.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),m(this,this.state,t,this._modules.get(t),n.preserveState),g(this,this.state)},d.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=k(e.state,t.slice(0,-1));h.delete(n,t[t.length-1])}),y(this)},d.prototype.hotUpdate=function(t){this._modules.update(t),y(this,!0)},d.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(d.prototype,v);var E=N(function(t,e){var n={};return I(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=M(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof o?o.call(this,e,n):e[o]},n[r].vuex=!0}),n}),D=N(function(t,e){var n={};return I(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var i=M(this.$store,"mapMutations",t);if(!i)return;r=i.context.commit}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),P=N(function(t,e){var n={};return I(e).forEach(function(e){var r=e.key,o=e.val;o=t+o,n[r]=function(){if(!t||M(this.$store,"mapGetters",t))return this.$store.getters[o]},n[r].vuex=!0}),n}),C=N(function(t,e){var n={};return I(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var i=M(this.$store,"mapActions",t);if(!i)return;r=i.context.dispatch}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),T=function(t){return{mapState:E.bind(null,t),mapGetters:P.bind(null,t),mapMutations:D.bind(null,t),mapActions:C.bind(null,t)}};function I(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function N(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function M(t,e,n){var r=t._modulesNamespaceMap[n];return r}var R={Store:d,install:x,version:"3.0.1",mapState:E,mapMutations:D,mapGetters:P,mapActions:C,createNamespacedHelpers:T};e["default"]=R},"5e44":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={pages:{"pages/login/login":{},"pages/me/index":{},"pages/live/beforeLive":{},"pages/login/register":{},"pages/login/forget":{},"pages/home/home":{}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}};e.default=r},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function i(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function u(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function f(t){return"[object Object]"===c.call(t)}function l(t){return"[object RegExp]"===c.call(t)}function p(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function h(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||f(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function _(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}_("slot,component",!0);var y=_("key,ref,slot,slot-scope,is");function g(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function b(t,e){return m.call(t,e)}function $(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var w=/-(\w)/g,O=$(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),A=$(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),S=/\B([A-Z])/g,k=$(function(t){return t.replace(S,"-$1").toLowerCase()});function j(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function x(t,e){return t.bind(e)}var E=Function.prototype.bind?x:j;function D(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function P(t,e){for(var n in e)t[n]=e[n];return t}function C(t){for(var e={},n=0;n<t.length;n++)t[n]&&P(e,t[n]);return e}function T(t,e,n){}var I=function(t,e,n){return!1},N=function(t){return t};function M(t,e){if(t===e)return!0;var n=u(t),r=u(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var o=Array.isArray(t),i=Array.isArray(e);if(o&&i)return t.length===e.length&&t.every(function(t,n){return M(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(o||i)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return M(t[n],e[n])})}catch(c){return!1}}function R(t,e){for(var n=0;n<t.length;n++)if(M(t[n],e))return n;return-1}function U(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var V=["component","directive","filter"],B=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],q={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:I,isReservedAttr:I,isUnknownElement:I,getTagNamespace:T,parsePlatformTagName:N,mustUseProp:I,async:!0,_lifecycleHooks:B},F=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function L(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function H(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var G=new RegExp("[^"+F.source+".$_\\d]");function z(t){if(!G.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var J,W="__proto__"in{},K="undefined"!==typeof window,X="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Z=X&&WXEnvironment.platform.toLowerCase(),Q=K&&window.navigator.userAgent.toLowerCase(),Y=Q&&/msie|trident/.test(Q),tt=(Q&&Q.indexOf("msie 9.0"),Q&&Q.indexOf("edge/")>0),et=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)||"ios"===Z),nt=(Q&&/chrome\/\d+/.test(Q),Q&&/phantomjs/.test(Q),Q&&Q.match(/firefox\/(\d+)/),{}.watch);if(K)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(eo){}var ot=function(){return void 0===J&&(J=!K&&!X&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),J},it=K&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,ut="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=T,ft=0,lt=function(){this.id=ft++,this.subs=[]};function pt(t){lt.SharedObject.targetStack.push(t),lt.SharedObject.target=t}function ht(){lt.SharedObject.targetStack.pop(),lt.SharedObject.target=lt.SharedObject.targetStack[lt.SharedObject.targetStack.length-1]}lt.prototype.addSub=function(t){this.subs.push(t)},lt.prototype.removeSub=function(t){g(this.subs,t)},lt.prototype.depend=function(){lt.SharedObject.target&&lt.SharedObject.target.addDep(this)},lt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},lt.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},lt.SharedObject.target=null,lt.SharedObject.targetStack=[];var dt=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},vt={child:{configurable:!0}};vt.child.get=function(){return this.componentInstance},Object.defineProperties(dt.prototype,vt);var _t=function(t){void 0===t&&(t="");var e=new dt;return e.text=t,e.isComment=!0,e};function yt(t){return new dt(void 0,void 0,void 0,String(t))}function gt(t){var e=new dt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var mt=Array.prototype,bt=Object.create(mt),$t=["push","pop","shift","unshift","splice","sort","reverse"];$t.forEach(function(t){var e=mt[t];H(bt,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var wt=Object.getOwnPropertyNames(bt),Ot=!0;function At(t){Ot=t}var St=function(t){this.value=t,this.dep=new lt,this.vmCount=0,H(t,"__ob__",this),Array.isArray(t)?(W?t.push!==t.__proto__.push?jt(t,bt,wt):kt(t,bt):jt(t,bt,wt),this.observeArray(t)):this.walk(t)};function kt(t,e){t.__proto__=e}function jt(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];H(t,i,e[i])}}function xt(t,e){var n;if(u(t)&&!(t instanceof dt))return b(t,"__ob__")&&t.__ob__ instanceof St?n=t.__ob__:Ot&&!ot()&&(Array.isArray(t)||f(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new St(t)),e&&n&&n.vmCount++,n}function Et(t,e,n,r,o){var i=new lt,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,u=a&&a.set;s&&!u||2!==arguments.length||(n=t[e]);var c=!o&&xt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return lt.SharedObject.target&&(i.depend(),c&&(c.dep.depend(),Array.isArray(e)&&Ct(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||s&&!u||(u?u.call(t,e):n=e,c=!o&&xt(e),i.notify())}})}}function Dt(t,e,n){if(Array.isArray(t)&&p(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Et(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Pt(t,e){if(Array.isArray(t)&&p(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function Ct(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Ct(e)}St.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Et(t,e[n])},St.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)xt(t[e])};var Tt=q.optionMergeStrategies;function It(t,e){if(!e)return t;for(var n,r,o,i=ut?Reflect.ownKeys(e):Object.keys(e),a=0;a<i.length;a++)n=i[a],"__ob__"!==n&&(r=t[n],o=e[n],b(t,n)?r!==o&&f(r)&&f(o)&&It(r,o):Dt(t,n,o));return t}function Nt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,o="function"===typeof t?t.call(n,n):t;return r?It(r,o):o}:e?t?function(){return It("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Mt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Rt(n):n}function Rt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Ut(t,e,n,r){var o=Object.create(t||null);return e?P(o,e):o}Tt.data=function(t,e,n){return n?Nt(t,e,n):e&&"function"!==typeof e?t:Nt(t,e)},B.forEach(function(t){Tt[t]=Mt}),V.forEach(function(t){Tt[t+"s"]=Ut}),Tt.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};for(var i in P(o,t),e){var a=o[i],s=e[i];a&&!Array.isArray(a)&&(a=[a]),o[i]=a?a.concat(s):Array.isArray(s)?s:[s]}return o},Tt.props=Tt.methods=Tt.inject=Tt.computed=function(t,e,n,r){if(!t)return e;var o=Object.create(null);return P(o,t),e&&P(o,e),o},Tt.provide=Nt;var Vt=function(t,e){return void 0===e?t:e};function Bt(t,e){var n=t.props;if(n){var r,o,i,a={};if(Array.isArray(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(i=O(o),a[i]={type:null})}else if(f(n))for(var s in n)o=n[s],i=O(s),a[i]=f(o)?o:{type:o};else 0;t.props=a}}function qt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(f(n))for(var i in n){var a=n[i];r[i]=f(a)?P({from:i},a):{from:a}}else 0}}function Ft(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Lt(t,e,n){if("function"===typeof e&&(e=e.options),Bt(e,n),qt(e,n),Ft(e),!e._base&&(e.extends&&(t=Lt(t,e.extends,n)),e.mixins))for(var r=0,o=e.mixins.length;r<o;r++)t=Lt(t,e.mixins[r],n);var i,a={};for(i in t)s(i);for(i in e)b(t,i)||s(i);function s(r){var o=Tt[r]||Vt;a[r]=o(t[r],e[r],n,r)}return a}function Ht(t,e,n,r){if("string"===typeof n){var o=t[e];if(b(o,n))return o[n];var i=O(n);if(b(o,i))return o[i];var a=A(i);if(b(o,a))return o[a];var s=o[n]||o[i]||o[a];return s}}function Gt(t,e,n,r){var o=e[t],i=!b(n,t),a=n[t],s=Kt(Boolean,o.type);if(s>-1)if(i&&!b(o,"default"))a=!1;else if(""===a||a===k(t)){var u=Kt(String,o.type);(u<0||s<u)&&(a=!0)}if(void 0===a){a=zt(r,o,t);var c=Ot;At(!0),xt(a),At(c)}return a}function zt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Jt(e.type)?r.call(t):r}}function Jt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Wt(t,e){return Jt(t)===Jt(e)}function Kt(t,e){if(!Array.isArray(e))return Wt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Wt(e[n],t))return n;return-1}function Xt(t,e,n){pt();try{if(e){var r=e;while(r=r.$parent){var o=r.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{var a=!1===o[i].call(r,t,e,n);if(a)return}catch(eo){Qt(eo,r,"errorCaptured hook")}}}Qt(t,e,n)}finally{ht()}}function Zt(t,e,n,r,o){var i;try{i=n?t.apply(e,n):t.call(e),i&&!i._isVue&&h(i)&&!i._handled&&(i.catch(function(t){return Xt(t,r,o+" (Promise/async)")}),i._handled=!0)}catch(eo){Xt(eo,r,o)}return i}function Qt(t,e,n){if(q.errorHandler)try{return q.errorHandler.call(null,t,e,n)}catch(eo){eo!==t&&Yt(eo,null,"config.errorHandler")}Yt(t,e,n)}function Yt(t,e,n){if(!K&&!X||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function re(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var oe=Promise.resolve();te=function(){oe.then(re),et&&setTimeout(T)}}else if(Y||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(re)}:function(){setTimeout(re,0)};else{var ie=1,ae=new MutationObserver(re),se=document.createTextNode(String(ie));ae.observe(se,{characterData:!0}),te=function(){ie=(ie+1)%2,se.data=String(ie)}}function ue(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(eo){Xt(eo,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ce=new st;function fe(t){le(t,ce),ce.clear()}function le(t,e){var n,r,o=Array.isArray(t);if(!(!o&&!u(t)||Object.isFrozen(t)||t instanceof dt)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)le(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)le(t[r[n]],e)}}}var pe=$(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function he(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Zt(r,null,arguments,e,"v-on handler");for(var o=r.slice(),i=0;i<o.length;i++)Zt(o[i],null,t,e,"v-on handler")}return n.fns=t,n}function de(t,e,n,o,a,s){var u,c,f,l;for(u in t)c=t[u],f=e[u],l=pe(u),r(c)||(r(f)?(r(c.fns)&&(c=t[u]=he(c,s)),i(l.once)&&(c=t[u]=a(l.name,c,l.capture)),n(l.name,c,l.capture,l.passive,l.params)):c!==f&&(f.fns=c,t[u]=f));for(u in e)r(t[u])&&(l=pe(u),o(l.name,e[u],l.capture))}function ve(t,e,n){var i=e.options.props;if(!r(i)){var a={},s=t.attrs,u=t.props;if(o(s)||o(u))for(var c in i){var f=k(c);_e(a,u,c,f,!0)||_e(a,s,c,f,!1)}return a}}function _e(t,e,n,r,i){if(o(e)){if(b(e,n))return t[n]=e[n],i||delete e[n],!0;if(b(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function ye(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function ge(t){return s(t)?[yt(t)]:Array.isArray(t)?be(t):void 0}function me(t){return o(t)&&o(t.text)&&a(t.isComment)}function be(t,e){var n,a,u,c,f=[];for(n=0;n<t.length;n++)a=t[n],r(a)||"boolean"===typeof a||(u=f.length-1,c=f[u],Array.isArray(a)?a.length>0&&(a=be(a,(e||"")+"_"+n),me(a[0])&&me(c)&&(f[u]=yt(c.text+a[0].text),a.shift()),f.push.apply(f,a)):s(a)?me(c)?f[u]=yt(c.text+a):""!==a&&f.push(yt(a)):me(a)&&me(c)?f[u]=yt(c.text+a.text):(i(t._isVList)&&o(a.tag)&&r(a.key)&&o(e)&&(a.key="__vlist"+e+"_"+n+"__"),f.push(a)));return f}function $e(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function we(t){var e=Oe(t.$options.inject,t);e&&(At(!1),Object.keys(e).forEach(function(n){Et(t,n,e[n])}),At(!0))}function Oe(t,e){if(t){for(var n=Object.create(null),r=ut?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o];if("__ob__"!==i){var a=t[i].from,s=e;while(s){if(s._provided&&b(s._provided,a)){n[i]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[i]){var u=t[i].default;n[i]="function"===typeof u?u.call(e):u}else 0}}return n}}function Ae(t,e){if(!t||!t.length)return{};for(var n={},r=0,o=t.length;r<o;r++){var i=t[r],a=i.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,i.context!==e&&i.fnContext!==e||!a||null==a.slot)i.asyncMeta&&i.asyncMeta.data&&"page"===i.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(i):(n.default||(n.default=[])).push(i);else{var s=a.slot,u=n[s]||(n[s]=[]);"template"===i.tag?u.push.apply(u,i.children||[]):u.push(i)}}for(var c in n)n[c].every(Se)&&delete n[c];return n}function Se(t){return t.isComment&&!t.asyncFactory||" "===t.text}function ke(t,e,r){var o,i=Object.keys(e).length>0,a=t?!!t.$stable:!i,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==n&&s===r.$key&&!i&&!r.$hasNormal)return r;for(var u in o={},t)t[u]&&"$"!==u[0]&&(o[u]=je(e,u,t[u]))}else o={};for(var c in e)c in o||(o[c]=xe(e,c));return t&&Object.isExtensible(t)&&(t._normalized=o),H(o,"$stable",a),H(o,"$key",s),H(o,"$hasNormal",i),o}function je(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:ge(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function xe(t,e){return function(){return t[e]}}function Ee(t,e){var n,r,i,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))if(ut&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),f=c.next();while(!f.done)n.push(e(f.value,n.length)),f=c.next()}else for(a=Object.keys(t),n=new Array(a.length),r=0,i=a.length;r<i;r++)s=a[r],n[r]=e(t[s],s,r);return o(n)||(n=[]),n._isVList=!0,n}function De(t,e,n,r){var o,i=this.$scopedSlots[t];i?(n=n||{},r&&(n=P(P({},r),n)),o=i(n)||e):o=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},o):o}function Pe(t){return Ht(this.$options,"filters",t,!0)||N}function Ce(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Te(t,e,n,r,o){var i=q.keyCodes[e]||n;return o&&r&&!q.keyCodes[e]?Ce(o,r):i?Ce(i,t):r?k(r)!==e:void 0}function Ie(t,e,n,r,o){if(n)if(u(n)){var i;Array.isArray(n)&&(n=C(n));var a=function(a){if("class"===a||"style"===a||y(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||q.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var u=O(a),c=k(a);if(!(u in i)&&!(c in i)&&(i[a]=n[a],o)){var f=t.on||(t.on={});f["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Ne(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Re(r,"__static__"+t,!1),r)}function Me(t,e,n){return Re(t,"__once__"+e+(n?"_"+n:""),!0),t}function Re(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Ue(t[r],e+"_"+r,n);else Ue(t,e,n)}function Ue(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ve(t,e){if(e)if(f(e)){var n=t.on=t.on?P({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(o,i):i}}else;return t}function Be(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var i=t[o];Array.isArray(i)?Be(i,e,n):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn)}return r&&(e.$key=r),e}function qe(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Fe(t,e){return"string"===typeof t?e+t:t}function Le(t){t._o=Me,t._n=v,t._s=d,t._l=Ee,t._t=De,t._q=M,t._i=R,t._m=Ne,t._f=Pe,t._k=Te,t._b=Ie,t._v=yt,t._e=_t,t._u=Be,t._g=Ve,t._d=qe,t._p=Fe}function He(t,e,r,o,a){var s,u=this,c=a.options;b(o,"_uid")?(s=Object.create(o),s._original=o):(s=o,o=o._original);var f=i(c._compiled),l=!f;this.data=t,this.props=e,this.children=r,this.parent=o,this.listeners=t.on||n,this.injections=Oe(c.inject,o),this.slots=function(){return u.$slots||ke(t.scopedSlots,u.$slots=Ae(r,o)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return ke(t.scopedSlots,this.slots())}}),f&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=ke(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,r){var i=rn(s,t,e,n,r,l);return i&&!Array.isArray(i)&&(i.fnScopeId=c._scopeId,i.fnContext=o),i}:this._c=function(t,e,n,r){return rn(s,t,e,n,r,l)}}function Ge(t,e,r,i,a){var s=t.options,u={},c=s.props;if(o(c))for(var f in c)u[f]=Gt(f,c,e||n);else o(r.attrs)&&Je(u,r.attrs),o(r.props)&&Je(u,r.props);var l=new He(r,u,a,i,t),p=s.render.call(null,l._c,l);if(p instanceof dt)return ze(p,r,l.parent,s,l);if(Array.isArray(p)){for(var h=ge(p)||[],d=new Array(h.length),v=0;v<h.length;v++)d[v]=ze(h[v],r,l.parent,s,l);return d}}function ze(t,e,n,r,o){var i=gt(t);return i.fnContext=n,i.fnOptions=r,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function Je(t,e){for(var n in e)t[O(n)]=e[n]}Le(He.prototype);var We={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;We.prepatch(n,n)}else{var r=t.componentInstance=Ze(t,On);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;jn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Pn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Ln(n):En(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Dn(e,!0):e.$destroy())}},Ke=Object.keys(We);function Xe(t,e,n,a,s){if(!r(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var f;if(r(t.cid)&&(f=t,t=dn(f,c),void 0===t))return hn(f,e,n,a,s);e=e||{},pr(t),o(e.model)&&tn(t.options,e);var l=ve(e,t,s);if(i(t.options.functional))return Ge(t,l,e,n,a);var p=e.on;if(e.on=e.nativeOn,i(t.options.abstract)){var h=e.slot;e={},h&&(e.slot=h)}Qe(e);var d=t.options.name||s,v=new dt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:p,tag:s,children:a},f);return v}}}function Ze(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Qe(t){for(var e=t.hook||(t.hook={}),n=0;n<Ke.length;n++){var r=Ke[n],o=e[r],i=We[r];o===i||o&&o._merged||(e[r]=o?Ye(i,o):i)}}function Ye(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function tn(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var i=e.on||(e.on={}),a=i[r],s=e.model.callback;o(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(i[r]=[s].concat(a)):i[r]=s}var en=1,nn=2;function rn(t,e,n,r,o,a){return(Array.isArray(n)||s(n))&&(o=r,r=n,n=void 0),i(a)&&(o=nn),on(t,e,n,r,o)}function on(t,e,n,r,i){if(o(n)&&o(n.__ob__))return _t();if(o(n)&&o(n.is)&&(e=n.is),!e)return _t();var a,s,u;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===nn?r=ge(r):i===en&&(r=ye(r)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||q.getTagNamespace(e),a=q.isReservedTag(e)?new dt(q.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!o(u=Ht(t.$options,"components",e))?new dt(e,n,r,void 0,void 0,t):Xe(u,n,t,r,e)):a=Xe(e,n,t,r);return Array.isArray(a)?a:o(a)?(o(s)&&an(a,s),o(n)&&sn(n),a):_t()}function an(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var a=0,s=t.children.length;a<s;a++){var u=t.children[a];o(u.tag)&&(r(u.ns)||i(n)&&"svg"!==u.tag)&&an(u,e,n)}}function sn(t){u(t.style)&&fe(t.style),u(t.class)&&fe(t.class)}function un(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,o=r&&r.context;t.$slots=Ae(e._renderChildren,o),t.$scopedSlots=n,t._c=function(e,n,r,o){return rn(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return rn(t,e,n,r,o,!0)};var i=r&&r.data;Et(t,"$attrs",i&&i.attrs||n,null,!0),Et(t,"$listeners",e._parentListeners||n,null,!0)}var cn,fn=null;function ln(t){Le(t.prototype),t.prototype.$nextTick=function(t){return ue(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,o=n._parentVnode;o&&(e.$scopedSlots=ke(o.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=o;try{fn=e,t=r.call(e._renderProxy,e.$createElement)}catch(eo){Xt(eo,e,"render"),t=e._vnode}finally{fn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof dt||(t=_t()),t.parent=o,t}}function pn(t,e){return(t.__esModule||ut&&"Module"===t[Symbol.toStringTag])&&(t=t.default),u(t)?e.extend(t):t}function hn(t,e,n,r,o){var i=_t();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function dn(t,e){if(i(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=fn;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),i(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var a=t.owners=[n],s=!0,c=null,f=null;n.$on("hook:destroyed",function(){return g(a,n)});var l=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==c&&(clearTimeout(c),c=null),null!==f&&(clearTimeout(f),f=null))},p=U(function(n){t.resolved=pn(n,e),s?a.length=0:l(!0)}),d=U(function(e){o(t.errorComp)&&(t.error=!0,l(!0))}),v=t(p,d);return u(v)&&(h(v)?r(t.resolved)&&v.then(p,d):h(v.component)&&(v.component.then(p,d),o(v.error)&&(t.errorComp=pn(v.error,e)),o(v.loading)&&(t.loadingComp=pn(v.loading,e),0===v.delay?t.loading=!0:c=setTimeout(function(){c=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,l(!1))},v.delay||200)),o(v.timeout)&&(f=setTimeout(function(){f=null,r(t.resolved)&&d(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function vn(t){return t.isComment&&t.asyncFactory}function _n(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||vn(n)))return n}}function yn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&$n(t,e)}function gn(t,e){cn.$on(t,e)}function mn(t,e){cn.$off(t,e)}function bn(t,e){var n=cn;return function r(){var o=e.apply(null,arguments);null!==o&&n.$off(t,r)}}function $n(t,e,n){cn=t,de(e,n||{},gn,mn,bn,t),cn=void 0}function wn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var o=0,i=t.length;o<i;o++)r.$on(t[o],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,o=t.length;r<o;r++)n.$off(t[r],e);return n}var i,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(i=a[s],i===e||i.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?D(n):n;for(var r=D(arguments,1),o='event handler for "'+t+'"',i=0,a=n.length;i<a;i++)Zt(n[i],e,r,e,o)}return e}}var On=null;function An(t){var e=On;return On=t,function(){On=e}}function Sn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function kn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,o=n._vnode,i=An(n);n._vnode=t,n.$el=o?n.__patch__(o,t):n.__patch__(n.$el,t,e,!1),i(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Pn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||g(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Pn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function jn(t,e,r,o,i){var a=o.data.scopedSlots,s=t.$scopedSlots,u=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),c=!!(i||t.$options._renderChildren||u);if(t.$options._parentVnode=o,t.$vnode=o,t._vnode&&(t._vnode.parent=o),t.$options._renderChildren=i,t.$attrs=o.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){At(!1);for(var f=t._props,l=t.$options._propKeys||[],p=0;p<l.length;p++){var h=l[p],d=t.$options.props;f[h]=Gt(h,d,e,t)}At(!0),t.$options.propsData=e}r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,$n(t,r,v),c&&(t.$slots=Ae(i,o.context),t.$forceUpdate())}function xn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function En(t,e){if(e){if(t._directInactive=!1,xn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)En(t.$children[n]);Pn(t,"activated")}}function Dn(t,e){if((!e||(t._directInactive=!0,!xn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Dn(t.$children[n]);Pn(t,"deactivated")}}function Pn(t,e){pt();var n=t.$options[e],r=e+" hook";if(n)for(var o=0,i=n.length;o<i;o++)Zt(n[o],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),ht()}var Cn=[],Tn=[],In={},Nn=!1,Mn=!1,Rn=0;function Un(){Rn=Cn.length=Tn.length=0,In={},Nn=Mn=!1}var Vn=Date.now;if(K&&!Y){var Bn=window.performance;Bn&&"function"===typeof Bn.now&&Vn()>document.createEvent("Event").timeStamp&&(Vn=function(){return Bn.now()})}function qn(){var t,e;for(Vn(),Mn=!0,Cn.sort(function(t,e){return t.id-e.id}),Rn=0;Rn<Cn.length;Rn++)t=Cn[Rn],t.before&&t.before(),e=t.id,In[e]=null,t.run();var n=Tn.slice(),r=Cn.slice();Un(),Hn(n),Fn(r),it&&q.devtools&&it.emit("flush")}function Fn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Pn(r,"updated")}}function Ln(t){t._inactive=!1,Tn.push(t)}function Hn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,En(t[e],!0)}function Gn(t){var e=t.id;if(null==In[e]){if(In[e]=!0,Mn){var n=Cn.length-1;while(n>Rn&&Cn[n].id>t.id)n--;Cn.splice(n+1,0,t)}else Cn.push(t);Nn||(Nn=!0,ue(qn))}}var zn=0,Jn=function(t,e,n,r,o){this.vm=t,o&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++zn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=z(e),this.getter||(this.getter=T)),this.value=this.lazy?void 0:this.get()};Jn.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(eo){if(!this.user)throw eo;Xt(eo,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&fe(t),ht(),this.cleanupDeps()}return t},Jn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Jn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Jn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Gn(this)},Jn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(eo){Xt(eo,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Jn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Jn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Jn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Wn={enumerable:!0,configurable:!0,get:T,set:T};function Kn(t,e,n){Wn.get=function(){return this[e][n]},Wn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Wn)}function Xn(t){t._watchers=[];var e=t.$options;e.props&&Zn(t,e.props),e.methods&&ir(t,e.methods),e.data?Qn(t):xt(t._data={},!0),e.computed&&er(t,e.computed),e.watch&&e.watch!==nt&&ar(t,e.watch)}function Zn(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;i||At(!1);var a=function(i){o.push(i);var a=Gt(i,e,n,t);Et(r,i,a),i in t||Kn(t,"_props",i)};for(var s in e)a(s);At(!0)}function Qn(t){var e=t.$options.data;e=t._data="function"===typeof e?Yn(e,t):e||{},f(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];0,r&&b(r,i)||L(i)||Kn(t,"_data",i)}xt(e,!0)}function Yn(t,e){pt();try{return t.call(e,e)}catch(eo){return Xt(eo,e,"data()"),{}}finally{ht()}}var tr={lazy:!0};function er(t,e){var n=t._computedWatchers=Object.create(null),r=ot();for(var o in e){var i=e[o],a="function"===typeof i?i:i.get;0,r||(n[o]=new Jn(t,a||T,T,tr)),o in t||nr(t,o,i)}}function nr(t,e,n){var r=!ot();"function"===typeof n?(Wn.get=r?rr(e):or(n),Wn.set=T):(Wn.get=n.get?r&&!1!==n.cache?rr(e):or(n.get):T,Wn.set=n.set||T),Object.defineProperty(t,e,Wn)}function rr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),lt.SharedObject.target&&e.depend(),e.value}}function or(t){return function(){return t.call(this,this)}}function ir(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?T:E(e[n],t)}function ar(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)sr(t,n,r[o]);else sr(t,n,r)}}function sr(t,e,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function ur(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Dt,t.prototype.$delete=Pt,t.prototype.$watch=function(t,e,n){var r=this;if(f(e))return sr(r,t,e,n);n=n||{},n.user=!0;var o=new Jn(r,t,e,n);if(n.immediate)try{e.call(r,o.value)}catch(i){Xt(i,r,'callback for immediate watcher "'+o.expression+'"')}return function(){o.teardown()}}}var cr=0;function fr(t){t.prototype._init=function(t){var e=this;e._uid=cr++,e._isVue=!0,t&&t._isComponent?lr(e,t):e.$options=Lt(pr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Sn(e),yn(e),un(e),Pn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&we(e),Xn(e),"mp-toutiao"!==e.mpHost&&$e(e),"mp-toutiao"!==e.mpHost&&Pn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function lr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var o=r.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function pr(t){var e=t.options;if(t.super){var n=pr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=hr(t);o&&P(t.extendOptions,o),e=t.options=Lt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function hr(t){var e,n=t.options,r=t.sealedOptions;for(var o in n)n[o]!==r[o]&&(e||(e={}),e[o]=n[o]);return e}function dr(t){this._init(t)}function vr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=D(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function _r(t){t.mixin=function(t){return this.options=Lt(this.options,t),this}}function yr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Lt(n.options,t),a["super"]=n,a.options.props&&gr(a),a.options.computed&&mr(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,V.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=P({},a.options),o[r]=a,a}}function gr(t){var e=t.options.props;for(var n in e)Kn(t.prototype,"_props",n)}function mr(t){var e=t.options.computed;for(var n in e)nr(t.prototype,n,e[n])}function br(t){V.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&f(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function $r(t){return t&&(t.Ctor.options.name||t.tag)}function wr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!l(t)&&t.test(e)}function Or(t,e){var n=t.cache,r=t.keys,o=t._vnode;for(var i in n){var a=n[i];if(a){var s=$r(a.componentOptions);s&&!e(s)&&Ar(n,i,r,o)}}}function Ar(t,e,n,r){var o=t[e];!o||r&&o.tag===r.tag||o.componentInstance.$destroy(),t[e]=null,g(n,e)}fr(dr),ur(dr),wn(dr),kn(dr),ln(dr);var Sr=[String,RegExp,Array],kr={name:"keep-alive",abstract:!0,props:{include:Sr,exclude:Sr,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Ar(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Or(t,function(t){return wr(e,t)})}),this.$watch("exclude",function(e){Or(t,function(t){return!wr(e,t)})})},render:function(){var t=this.$slots.default,e=_n(t),n=e&&e.componentOptions;if(n){var r=$r(n),o=this,i=o.include,a=o.exclude;if(i&&(!r||!wr(i,r))||a&&r&&wr(a,r))return e;var s=this,u=s.cache,c=s.keys,f=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;u[f]?(e.componentInstance=u[f].componentInstance,g(c,f),c.push(f)):(u[f]=e,c.push(f),this.max&&c.length>parseInt(this.max)&&Ar(u,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},jr={KeepAlive:kr};function xr(t){var e={get:function(){return q}};Object.defineProperty(t,"config",e),t.util={warn:ct,extend:P,mergeOptions:Lt,defineReactive:Et},t.set=Dt,t.delete=Pt,t.nextTick=ue,t.observable=function(t){return xt(t),t},t.options=Object.create(null),V.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,P(t.options.components,jr),vr(t),_r(t),yr(t),br(t)}xr(dr),Object.defineProperty(dr.prototype,"$isServer",{get:ot}),Object.defineProperty(dr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(dr,"FunctionalRenderContext",{value:He}),dr.version="2.6.10";var Er="[object Array]",Dr="[object Object]";function Pr(t,e){var n={};return Cr(t,e),Tr(t,e,"",n),n}function Cr(t,e){if(t!==e){var n=Nr(t),r=Nr(e);if(n==Dr&&r==Dr){if(Object.keys(t).length>=Object.keys(e).length)for(var o in e){var i=t[o];void 0===i?t[o]=null:Cr(i,e[o])}}else n==Er&&r==Er&&t.length>=e.length&&e.forEach(function(e,n){Cr(t[n],e)})}}function Tr(t,e,n,r){if(t!==e){var o=Nr(t),i=Nr(e);if(o==Dr)if(i!=Dr||Object.keys(t).length<Object.keys(e).length)Ir(r,n,t);else{var a=function(o){var i=t[o],a=e[o],s=Nr(i),u=Nr(a);if(s!=Er&&s!=Dr)i!=e[o]&&Ir(r,(""==n?"":n+".")+o,i);else if(s==Er)u!=Er?Ir(r,(""==n?"":n+".")+o,i):i.length<a.length?Ir(r,(""==n?"":n+".")+o,i):i.forEach(function(t,e){Tr(t,a[e],(""==n?"":n+".")+o+"["+e+"]",r)});else if(s==Dr)if(u!=Dr||Object.keys(i).length<Object.keys(a).length)Ir(r,(""==n?"":n+".")+o,i);else for(var c in i)Tr(i[c],a[c],(""==n?"":n+".")+o+"."+c,r)};for(var s in t)a(s)}else o==Er?i!=Er?Ir(r,n,t):t.length<e.length?Ir(r,n,t):t.forEach(function(t,o){Tr(t,e[o],n+"["+o+"]",r)}):Ir(r,n,t)}}function Ir(t,e,n){t[e]=n}function Nr(t){return Object.prototype.toString.call(t)}function Mr(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Rr(t){return Cn.find(function(e){return t._watcher===e})}function Ur(t,e){if(!t.__next_tick_pending&&!Rr(t)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ue(e,t)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var o;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(eo){Xt(eo,t,"nextTick")}else o&&o(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){o=t})}function Vr(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Br=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,o=Object.create(null);try{o=Vr(this)}catch(s){console.error(s)}o.__webviewId__=r.data.__webviewId__;var i=Object.create(null);Object.keys(o).forEach(function(t){i[t]=r.data[t]});var a=Pr(o,i);Object.keys(a).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,r.setData(a,function(){n.__next_tick_pending=!1,Mr(n)})):Mr(this)}};function qr(){}function Fr(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=qr),t.$options.render||(t.$options.render=qr),"mp-toutiao"!==t.mpHost&&Pn(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new Jn(t,r,T,{before:function(){t._isMounted&&!t._isDestroyed&&Pn(t,"beforeUpdate")}},!0),n=!1,t}function Lr(t,e){return o(t)||o(e)?Hr(t,Gr(e)):""}function Hr(t,e){return t?e?t+" "+e:t:e||""}function Gr(t){return Array.isArray(t)?zr(t):u(t)?Jr(t):"string"===typeof t?t:""}function zr(t){for(var e,n="",r=0,i=t.length;r<i;r++)o(e=Gr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Jr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Wr=$(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Kr(t){return Array.isArray(t)?C(t):"string"===typeof t?Wr(t):t}var Xr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Zr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Zr(t[r],n.slice(1).join("."))}function Qr(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:D(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Ur(this,t)},Xr.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=$e,t.prototype.__init_injections=we,t.prototype.__call_hook=function(t,e){var n=this;pt();var r,o=n.$options[t],i=t+" hook";if(o)for(var a=0,s=o.length;a<s;a++)r=Zt(o[a],n,e?[e]:null,n,i);return n._hasHookEvent&&n.$emit("hook:"+t),ht(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return f(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Zr(e||this,t)},t.prototype.__get_class=function(t,e){return Lr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Kr(t),r=e?P(e,n):n;return Object.keys(r).map(function(t){return k(t)+":"+r[t]}).join(";")},t.prototype.__map=function(t,e){var n,r,o,i,a;if(Array.isArray(t)){for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);return n}if(u(t)){for(i=Object.keys(t),n=Object.create(null),r=0,o=i.length;r<o;r++)a=i[r],n[a]=e(t[a],a,r);return n}return[]}}var Yr=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function to(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==Yr.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;Yr.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=Yr}dr.prototype.__patch__=Br,dr.prototype.$mount=function(t,e){return Fr(this,t,e)},to(dr),Qr(dr),e["default"]=dr}.call(this,n("c8ba"))},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=de,e.createComponent=Ae,e.createPage=Oe,e.default=void 0;var r=o(n("66fd"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return u(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(u){o=!0,i=u}finally{try{r||null==s["return"]||s["return"]()}finally{if(o)throw i}}return n}function u(t){if(Array.isArray(t))return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return h(t)||p(t)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function h(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var d=Object.prototype.toString,v=Object.prototype.hasOwnProperty;function _(t){return"function"===typeof t}function y(t){return"string"===typeof t}function g(t){return"[object Object]"===d.call(t)}function m(t,e){return v.call(t,e)}function b(){}function $(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var w=/-(\w)/g,O=$(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),A=["invoke","success","fail","complete","returnValue"],S={},k={};function j(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?x(n):n}function x(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function E(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function D(t,e){Object.keys(e).forEach(function(n){-1!==A.indexOf(n)&&_(e[n])&&(t[n]=j(t[n],e[n]))})}function P(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==A.indexOf(n)&&_(e[n])&&E(t[n],e[n])})}function C(t,e){"string"===typeof t&&g(e)?D(k[t]||(k[t]={}),e):g(t)&&D(S,t)}function T(t,e){"string"===typeof t?g(e)?P(k[t],e):delete k[t]:g(t)&&P(S,t)}function I(t){return function(e){return t(e)||e}}function N(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function M(t,e){for(var n=!1,r=0;r<t.length;r++){var o=t[r];if(n)n=Promise.then(I(o));else{var i=o(e);if(N(i)&&(n=Promise.resolve(i)),!1===i)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function R(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){M(t[n],e).then(function(t){return _(r)&&r(t)||t})}}}),e}function U(t,e){var n=[];Array.isArray(S.returnValue)&&n.push.apply(n,f(S.returnValue));var r=k[t];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,f(r.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function V(t){var e=Object.create(null);Object.keys(S).forEach(function(t){"returnValue"!==t&&(e[t]=S[t].slice())});var n=k[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function B(t,e,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];var a=V(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=M(a.invoke,n);return s.then(function(t){return e.apply(void 0,[R(a,t)].concat(o))})}return e.apply(void 0,[R(a,n)].concat(o))}return e.apply(void 0,[n].concat(o))}var q={returnValue:function(t){return N(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},F=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,L=/^create|Manager$/,H=/^on/;function G(t){return L.test(t)}function z(t){return F.test(t)}function J(t){return H.test(t)}function W(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function K(t){return!(G(t)||z(t)||J(t))}function X(t,e){return K(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return _(n.success)||_(n.fail)||_(n.complete)?U(t,B.apply(void 0,[t,e,n].concat(o))):U(t,W(new Promise(function(r,i){B.apply(void 0,[t,e,Object.assign({},n,{success:r,fail:i})].concat(o)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var Z=1e-4,Q=750,Y=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;tt=r,et=n,Y="ios"===e}function rt(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Q*(e||tt);return n<0&&(n=-n),n=Math.floor(n+Z),0===n?1!==et&&Y?.5:1:t<0?-n:n}var ot={promiseInterceptor:q},it=Object.freeze({upx2px:rt,interceptors:ot,addInterceptor:C,removeInterceptor:T}),at={},st=[],ut=[],ct=["success","fail","cancel","complete"];function ft(t,e,n){return function(r){return e(pt(t,r,n))}}function lt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(g(e)){var i=!0===o?e:{};for(var a in _(n)&&(n=n(e,i)||{}),e)if(m(n,a)){var s=n[a];_(s)&&(s=s(e[a],e,i)),s?y(s)?i[s]=e[a]:g(s)&&(i[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ct.indexOf(a)?i[a]=ft(t,e[a],r):o||(i[a]=e[a]);return i}return _(e)&&(e=ft(t,e,r)),e}function pt(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return _(at.returnValue)&&(e=at.returnValue(t,e)),lt(t,e,n,{},r)}function ht(t,e){if(m(at,t)){var n=at[t];return n?function(e,r){var o=n;_(n)&&(o=n(e)),e=lt(t,e,o.args,o.returnValue);var i=[e];"undefined"!==typeof r&&i.push(r);var a=wx[o.name||t].apply(wx,i);return z(t)?pt(t,a,o.returnValue,G(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var dt=Object.create(null),vt=["subscribePush","unsubscribePush","onPush","offPush","share"];function _t(t){return function(e){var n=e.fail,r=e.complete,o={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};_(n)&&n(o),_(r)&&r(o)}}vt.forEach(function(t){dt[t]=_t(t)});var yt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function gt(t,e,n){return t[e].apply(t,n)}function mt(){return gt(yt(),"$on",Array.prototype.slice.call(arguments))}function bt(){return gt(yt(),"$off",Array.prototype.slice.call(arguments))}function $t(){return gt(yt(),"$once",Array.prototype.slice.call(arguments))}function wt(){return gt(yt(),"$emit",Array.prototype.slice.call(arguments))}var Ot=Object.freeze({$on:mt,$off:bt,$once:$t,$emit:wt});function At(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r=plus.webview.getWebviewById(t.__uniapp_mask_id);r=r.parent()||r;var o=t.show,i=t.hide,a=t.close,s=function(){r.setStyle({mask:n})},u=function(){r.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.hide=function(){u();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.close=function(){u(),e=[];for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a.apply(t,r)}}}function St(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&At(e),e}function kt(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}var jt=Object.freeze({requireNativePlugin:kt,getSubNVueById:St}),xt=Page,Et=Component,Dt=/:/g,Pt=$(function(t){return O(t.replace(Dt,"-"))});function Ct(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return e.apply(t,[Pt(n)].concat(o))}}}function Tt(t,e){var n=e[t];e[t]=n?function(){Ct(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){Ct(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Tt("onLoad",t),xt(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Tt("created",t),Et(t)};var It=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Nt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){m(n,e)&&(t[e]=n[e])})}function Mt(t,e){if(!e)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(e=e.default||e,_(e))return!!_(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(_(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Mt(t,e)}):void 0}function Rt(t,e,n){e.forEach(function(e){Mt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Ut(t,e){var n;return e=e.default||e,_(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Vt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Bt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function qt(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(o){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(o){}return g(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||m(n,t)||(n[t]=r[t])}),n}var Ft=[String,Number,Boolean,Object,Array,null];function Lt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Ht(t,e){var n=t["behaviors"],r=t["extends"],o=t["mixins"],i=t["props"];i||(t["props"]=i=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(i)?(i.push("name"),i.push("value")):(i["name"]={type:String,default:""},i["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),g(r)&&r.props&&a.push(e({properties:zt(r.props,!0)})),Array.isArray(o)&&o.forEach(function(t){g(t)&&t.props&&a.push(e({properties:zt(t.props,!0)}))}),a}function Gt(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function zt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Lt(t)}}):g(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(g(r)){var o=r["default"];_(o)&&(o=o()),r.type=Gt(e,r.type),n[e]={type:-1!==Ft.indexOf(r.type)?r.type:null,value:o,observer:Lt(e)}}else{var i=Gt(e,r);n[e]={type:-1!==Ft.indexOf(i)?i:null,observer:Lt(e)}}}),n}function Jt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=b,t.preventDefault=b,t.target=t.target||{},m(t,"detail")||(t.detail={}),g(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Wt(t,e){var n=t;return e.forEach(function(e){var r=e[0],o=e[2];if(r||"undefined"!==typeof o){var i=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=o:i?Array.isArray(s)?n=s.find(function(e){return t.__get_value(i,e)===o}):g(s)?n=Object.keys(s).find(function(e){return t.__get_value(i,s[e])===o}):console.error("v-for 暂不支持循环数据：",s):n=s[o],a&&(n=t.__get_value(a,n))}}),n}function Kt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,o){"string"===typeof e?e?"$event"===e?r["$"+o]=n:0===e.indexOf("$event.")?r["$"+o]=t.__get_value(e.replace("$event.",""),n):r["$"+o]=t.__get_value(e):r["$"+o]=t:r["$"+o]=Wt(t,e)}),r}function Xt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Zt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=!1;if(o&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=Kt(t,r,e),u=[];return n.forEach(function(t){"$event"===t?"__set_model"!==i||o?o&&!a?u.push(e.detail.__args__[0]):u.push(e):u.push(e.target.value):Array.isArray(t)&&"o"===t[0]?u.push(Xt(t)):"string"===typeof t&&m(s,t)?u.push(s[t]):u.push(t)}),u}var Qt="~",Yt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Jt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var o=t.type,i=[];return r.forEach(function(n){var r=n[0],a=n[1],s=r.charAt(0)===Yt;r=s?r.slice(1):r;var u=r.charAt(0)===Qt;r=u?r.slice(1):r,a&&te(o,r)&&a.forEach(function(n){var r=n[0];if(r){var o=e.$vm;o.$options.generic&&o.$parent&&o.$parent.$parent&&(o=o.$parent.$parent);var a=o[r];if(!_(a))throw new Error(" _vm.".concat(r," is not a function"));if(u){if(a.once)return;a.once=!0}i.push(a.apply(o,Zt(e.$vm,t,n[1],n[2],s,r)))}})}),"input"===o&&1===i.length&&"undefined"!==typeof i[0]?i[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function re(t,e){var n=e.mocks,o=e.initRefs;t.$options.store&&(r.default.prototype.$store=t.$options.store),r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(o(this),Nt(this,n)))}});var i={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return i.globalData=t.$options.globalData||{},Rt(i,ne),i}var oe=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ie(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var o=n.length-1;o>=0;o--)if(r=ie(n[o],e),r)return r}function ae(t){return Behavior(t)}function se(){return!!this.route}function ue(t){this.triggerEvent("__l",t)}function ce(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function fe(t){var e,n=t.detail||t.value,r=n.vuePid,o=n.vueOptions;r&&(e=ie(this.$vm,r)),e||(e=this.$vm),o.parent=e}function le(t){return re(t,{mocks:oe,initRefs:ce})}var pe=["onUniNViewMessage"];function he(t){var e=le(t);return Rt(e,pe),e}function de(t){return App(he(t)),t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,o=e.initRelation,a=Ut(r.default,t),s=i(a,2),u=s[0],c=s[1],f={options:{multipleSlots:!0,addGlobalClass:!0},data:qt(c,r.default.prototype),behaviors:Ht(c,ae),properties:zt(c.props,!1,c.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Bt(t.vueId,this),o.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new u(e),Vt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:fe,__e:ee}};return Array.isArray(c.wxsCallMethods)&&c.wxsCallMethods.forEach(function(t){f.methods[t]=function(e){return this.$vm[t](e)}}),n?f:[f,u]}function _e(t){return ve(t,{isPage:se,initRelation:ue})}function ye(t){var e=_e(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var ge=["onShow","onHide","onUnload"];function me(t,e){e.isPage,e.initRelation;var n=ye(t);return Rt(n.methods,ge,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function be(t){return me(t,{isPage:se,initRelation:ue})}ge.push.apply(ge,It);var $e=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function we(t){var e=be(t);return Rt(e.methods,$e),e}function Oe(t){return Component(we(t))}function Ae(t){return Component(ye(t))}st.forEach(function(t){at[t]=!1}),ut.forEach(function(t){var e=at[t]&&at[t].name?at[t].name:t;wx.canIUse(e)||(at[t]=!1)});var Se={};Object.keys(it).forEach(function(t){Se[t]=it[t]}),Object.keys(Ot).forEach(function(t){Se[t]=Ot[t]}),Object.keys(jt).forEach(function(t){Se[t]=X(t,jt[t])}),Object.keys(wx).forEach(function(t){(m(wx,t)||m(at,t))&&(Se[t]=X(t,ht(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Se,t.UniEmitter=Ot),wx.createApp=de,wx.createPage=Oe,wx.createComponent=Ae;var ke=Se,je=ke;e.default=je}).call(this,n("c8ba"))},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23320190923002",_inBundle:!1,_integrity:"sha512-MnftsvgOac3q1FCOBPzivbFn8GNQFo7D2DY325HeEZyFCWgx5GEwHpGYjT1PQU6v7DaDn0ruxa3ObdpUIYbmZw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23320190923002.tgz",_shasum:"0c400c140ca0b3c05f52d25f11583cf05a0c4e9a",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"fed4c73fb9142a1b277dd79313939cad90693d3e",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23320190923002"}},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function r(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?o(t):e}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}var l=e.version,p="https://tongji.dcloud.io/uni/stat",h="https://tongji.dcloud.io/uni/stat.gif",d=1800,v=300,_=10,y="__DC_STAT_UUID",g="__DC_UUID_VALUE";function m(){var e="";if("n"===O()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(y)}catch(n){e=g}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(y,e)}catch(n){t.setStorageSync(y,g)}}return e}var b=function(t){var e=Object.keys(t),n=e.sort(),r={},o="";for(var i in n)r[n[i]]=t[n[i]],o+=n[i]+"="+t[n[i]]+"&";return{sign:"",options:o.substr(0,o.length-1)}},$=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},w=function(){return parseInt((new Date).getTime()/1e3)},O=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},A=function(){var e="";return"wx"!==O()&&"qq"!==O()||(e=t.getAccountInfoSync().miniProgram.appId||""),e},S=function(){return"n"===O()?plus.runtime.version:""},k=function(){var t=O(),e="";return"n"===t&&(e=plus.runtime.channel),e},j=function(e){var n=O(),r="";return e||("wx"===n&&(r=t.getLaunchOptionsSync().scene),r)},x="First__Visit__Time",E="Last__Visit__Time",D=function(){var e=t.getStorageSync(x),n=0;return e?n=e:(n=w(),t.setStorageSync(x,n),t.removeStorageSync(E)),n},P=function(){var e=t.getStorageSync(E),n=0;return n=e||"",t.setStorageSync(E,w()),n},C="__page__residence__time",T=0,I=0,N=function(){return T=w(),"n"===O()&&t.setStorageSync(C,w()),T},M=function(){return I=w(),"n"===O()&&(T=t.getStorageSync(C)),I-T},R="Total__Visit__Count",U=function(){var e=t.getStorageSync(R),n=1;return e&&(n=e,n++),t.setStorageSync(R,n),n},V=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},B=0,q=0,F=function(){var t=(new Date).getTime();return B=t,q=0,t},L=function(){var t=(new Date).getTime();return q=t,t},H=function(t){var e=0;if(0!==B&&(e=q-B),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>v;return{residenceTime:e,overtime:n}}if("page"===t){var r=e>d;return{residenceTime:e,overtime:r}}return{residenceTime:e}},G=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===O()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},z=function(t){var e=getCurrentPages(),n=e[e.length-1],r=n.$vm,o=t._query,i=o&&"{}"!==JSON.stringify(o)?"?"+JSON.stringify(o):"";return t._query="","bd"===O()?r.$mp&&r.$mp.page.is+i:r.$scope&&r.$scope.route+i||r.$mp&&r.$mp.page.route+i},J=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},W=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},K=n("5e44").default,X=n("9c6f").default||n("9c6f"),Z=t.getSystemInfoSync(),Q=function(){function e(){u(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:m(),ut:O(),mpn:A(),ak:X.appid,usv:l,v:S(),ch:k(),cn:"",pn:"",ct:"",t:w(),tt:"",p:"android"===Z.platform?"a":"i",brand:Z.brand||"",md:Z.model,sv:Z.system.replace(/(Android|iOS)\s/,""),mpsdk:Z.SDKVersion||"",mpv:Z.version||"",lang:Z.language,pr:Z.pixelRatio,ww:Z.windowWidth,wh:Z.windowHeight,sw:Z.screenWidth,sh:Z.screenHeight}}return f(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){L();var t=H("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,L();var n=H();F();var r=z(this);this._sendHideRequest({urlref:r,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=z(this),e=G();if(this._navigationBarTitle.config=K&&K.pages[e]&&K.pages[e].titleNView&&K.pages[e].titleNView.titleText||K&&K.pages[e]&&K.pages[e].navigationBarTitleText||"",this.__licationShow)return F(),this.__licationShow=!1,void(this._lastPageRoute=t);L(),this._lastPageRoute=t;var n=H("page");if(n.overtime){var r={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(r)}F()}},{key:"_pageHide",value:function(){if(!this.__licationHide){L();var t=H("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=w(),this.statData.sc=j(t.scene),this.statData.fvts=D(),this.statData.lvts=P(),this.statData.tvc=U(),"n"===O()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,r=t.urlref_ts;this._navigationBarTitle.lt="11";var o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(o)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,r=t.urlref_ts,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(o,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,r=t.value,o=void 0===r?"":r,i=this._lastPageRoute,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:i,ch:this.statData.ch,e_n:n,e_v:"object"===typeof o?JSON.stringify(o):o.toString(),usv:this.statData.usv,t:w(),p:this.statData.p};this.request(a)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;X.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var r=this,o=w(),i=this._navigationBarTitle;e.ttn=i.page,e.ttpj=i.config,e.ttc=i.report;var a=this._reportingRequestData;if("n"===O()&&(a=t.getStorageSync("__UNI__STAT__DATA")||{}),a[e.lt]||(a[e.lt]=[]),a[e.lt].push(e),"n"===O()&&t.setStorageSync("__UNI__STAT__DATA",a),!(M()<_)||n){var s=this._reportingRequestData;"n"===O()&&(s=t.getStorageSync("__UNI__STAT__DATA")),N();var u=[],c=[],f=[],p=function(t){var e=s[t];e.forEach(function(e){var n=$(e);0===t?u.push(n):3===t?f.push(n):c.push(n)})};for(var h in s)p(h);u.push.apply(u,c.concat(f));var d={usv:l,t:o,requests:JSON.stringify(u)};this._reportingRequestData={},"n"===O()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==O()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){r._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:p,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=b(V(t)).options;e.src=h+"?"+n}},{key:"sendEvent",value:function(t,e){W(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Y=function(e){function n(){var e;return u(this,n),e=r(this,i(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return a(n,e),f(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),f(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,N(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,J(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,J(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(n)}}]),n}(Q),tt=Y.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function rt(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}rt()}).call(this,n("6e42")["default"])},"9c6f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={appid:"__UNI__3634A26"};e.default=r},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/watch-login/watch-button';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/watch-login/watch-button.js';

define('components/watch-login/watch-button.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/watch-login/watch-button"], {
  2226: function _(t, n, e) {},
  "26e1": function e1(t, n, e) {
    "use strict";

    var r = e("2226"),
        a = e.n(r);
    a.a;
  },
  "3ad1": function ad1(t, n, e) {
    "use strict";

    e.r(n);
    var r = e("e376"),
        a = e.n(r);

    for (var u in r) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return r[t];
        });
      }(u);
    }

    n["default"] = a.a;
  },
  c632: function c632(t, n, e) {
    "use strict";

    var r = function r() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    e.d(n, "a", function () {
      return r;
    }), e.d(n, "b", function () {
      return a;
    });
  },
  dddf: function dddf(t, n, e) {
    "use strict";

    e.r(n);
    var r = e("c632"),
        a = e("3ad1");

    for (var u in a) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(u);
    }

    e("26e1");
    var o = e("2877"),
        i = Object(o["a"])(a["default"], r["a"], r["b"], !1, null, null, null);
    n["default"] = i.exports;
  },
  e376: function e376(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var r = {
      props: {
        text: String,
        rotate: {
          type: [Boolean, String],
          default: !1
        },
        bgColor: {
          type: String,
          default: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.6))"
        },
        fontColor: {
          type: String,
          default: "#FFFFFF"
        }
      },
      computed: {
        _rotate: function _rotate() {
          return "false" !== String(this.rotate);
        }
      }
    };
    n.default = r;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/watch-login/watch-button-create-component', {
  'components/watch-login/watch-button-create-component': function componentsWatchLoginWatchButtonCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("dddf"));
  }
}, [['components/watch-login/watch-button-create-component']]]);
});
require('components/watch-login/watch-button.js');
__wxRoute = 'components/watch-login/watch-input';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/watch-login/watch-input.js';

define('components/watch-login/watch-input.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/watch-login/watch-input"], {
  "0b7f": function b7f(t, e, n) {
    "use strict";

    var i;
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var s = {
      data: function data() {
        return {
          showPassword: !1,
          second: 0,
          isRunCode: !1
        };
      },
      props: {
        type: String,
        value: String,
        placeholder: String,
        maxlength: {
          type: [Number, String],
          default: 20
        },
        isShowPass: {
          type: [Boolean, String],
          default: !1
        },
        isShowCode: {
          type: [Boolean, String],
          default: !1
        },
        codeText: {
          type: String,
          default: "获取验证码"
        },
        setTime: {
          type: [Number, String],
          default: 60
        }
      },
      model: {
        prop: "value",
        event: "input"
      },
      mounted: function mounted() {
        var t = this;
        this, this.$on("runCode", function (e) {
          t.runCode(e);
        }), clearInterval(i);
      },
      methods: {
        showPass: function showPass() {
          this.showPassword = !this.showPassword;
        },
        onInput: function onInput(t) {
          this.$emit("input", t.target.value);
        },
        setCode: function setCode() {
          if (this.isRunCode) return !1;
          this.$emit("setCode");
        },
        runCode: function runCode(t) {
          if ("0" == String(t)) return this.second = 0, clearInterval(i), this.isRunCode = !1, !1;
          if (this.isRunCode) return !1;
          this.isRunCode = !0, this.second = this._setTime;
          var e = this;
          i = setInterval(function () {
            e.second--, 0 == e.second && (e.isRunCode = !1, clearInterval(i));
          }, 1e3);
        }
      },
      computed: {
        _type: function _type() {
          var t = this.type;
          return "password" == t ? "text" : t;
        },
        _isShowPass: function _isShowPass() {
          return "false" !== String(this.isShowPass);
        },
        _isShowCode: function _isShowCode() {
          return "false" !== String(this.isShowCode);
        },
        _setTime: function _setTime() {
          var t = Number(this.setTime);
          return t > 0 ? t : 60;
        },
        getVerCodeSecond: function getVerCodeSecond() {
          return this.second <= 0 ? this.codeText : this.second < 10 ? "0" + this.second : this.second;
        }
      }
    };
    e.default = s;
  },
  1414: function _(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("0b7f"),
        s = n.n(i);

    for (var o in i) {
      "default" !== o && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(o);
    }

    e["default"] = s.a;
  },
  "8b5f": function b5f(t, e, n) {
    "use strict";

    var i = function i() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        s = [];

    n.d(e, "a", function () {
      return i;
    }), n.d(e, "b", function () {
      return s;
    });
  },
  "9fdf": function fdf(t, e, n) {},
  aeec: function aeec(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("8b5f"),
        s = n("1414");

    for (var o in s) {
      "default" !== o && function (t) {
        n.d(e, t, function () {
          return s[t];
        });
      }(o);
    }

    n("f371");
    var r = n("2877"),
        u = Object(r["a"])(s["default"], i["a"], i["b"], !1, null, null, null);
    e["default"] = u.exports;
  },
  f371: function f371(t, e, n) {
    "use strict";

    var i = n("9fdf"),
        s = n.n(i);
    s.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/watch-login/watch-input-create-component', {
  'components/watch-login/watch-input-create-component': function componentsWatchLoginWatchInputCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("aeec"));
  }
}, [['components/watch-login/watch-input-create-component']]]);
});
require('components/watch-login/watch-input.js');

__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"0253":function(A,n,r){"use strict";var t=r("c1c6"),d=r.n(t);d.a},"67f4":function(A,n,r){"use strict";(function(A,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var d=function(){return r.e("components/watch-login/watch-input").then(r.bind(null,"aeec"))},e=function(){return r.e("components/watch-login/watch-button").then(r.bind(null,"dddf"))},u={data:function(){return{logoImage:"data:image/png;base64,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2GMaO3asXnvtNe6VAI6Ab+ME/kvPnj01ZcoUzZ07V9dccw3jIQalpKTopptu0pIlSzRu3Dh16NDBOgnwHc5AAJJKly6tq666SgMHDlTVqlWtc+Aj/7lXYt26dXruuec0YcIEua5rnQWY4wwEYtoJJ5ygAQMGaMmSJfrb3/7GeMAR1atXTy+88IIWLlyo3r17Ky6Ot0/ENn4CEJMSExM1cOBALV26VA899JCqVKlinYSAOOWUU/Tcc89p8eLF6tOnD99jgpjFgEBMSUhI0A033KAlS5boL3/5Cw9+wnGrWbOmBg8erMWLF//8CG0gljAgEDN69OihRYsW6ZFHHmE4IGJq1KihF154QTNmzFDz5s2tc4CoYUAg9Nq0aaMZM2bon//8p2rUqGGdg5A644wzNGHCBL399tuqX7++dQ7gOQYEQqtu3boaO3asxowZozPOOMM6BzHi/PPP15w5czR06FClpqZa5wCeYUAgdJKSkvToo4/q448/VuvWra1zEKMuu+wyLVy4UDfddBM3WiKUGBAIld69e2vx4sXq16+fEhJ4zAlsJSUl6YEHHtCcOXPUokUL6xwgohgQCIX09HRNmzZNzz33nCpXrmydA/xK3bp19e6772r48OE6+eSTrXOAiGBAINBOOOEEPfbYY5o7d64aNWpknQP8rs6dO2vZsmW66aabrFOAEmNAILDOO+88zZ8/X9dff711ClAsDzzwgKZNm6Y6depYpwDHjQGBwElKStLgwYM1ceJEVa9e3ToHOC6NGjXSxx9/rFtvvZWbLBFIDAgESuvWrbVw4UL16dPHOgUosdKlS+uee+7RRx99pNNOO806BygWBgQCoWzZsnruuec0duxYPluP0GnYsKFmz56tQYMGWacAx4wBAd8788wzNWfOHPXu3ds6BfDUfffdp9GjRys5Odk6BTgqBgR8y3EcDRo0SB9++CGPoEbMuOCCC/Txxx+rYcOG1inA72JAwJcqV66sCRMm6L777uOBUIg51atX14cffqhrr73WOgU4IgYEfKddu3aaP3++mjVrZp0CmCldurSeeOIJvfLKKypbtqx1DvA/GBDwlRtvvFGjRo3SiSeeaJ0C+MIll1yijz76SDVr1rROAX6FAQFfiIuL0z//+U89+OCDiovjX0vgl+rWrauZM2fq/PPPt04BfsY7NcxVqFBB77//vnr06GGdAvhWuXLlNGbMGP35z3+2TgEkMSBg7NRTT9XMmTPVtGlT6xTA9xzH0R133KG33npLSUlJ1jmIcQwImGnTpo2mTZumatWqWacAgdK2bVvNmDFDp5xyinUKYhgDAiYuu+wyHpgDlMApp5yiKVOmqEmTJtYpiFEMCETd/fffr6FDh/IFQkAJVaxYUe+99546d+5snYIYxIBA1CQkJOjVV1/VzTffbJ0ChEaZMmU0bNgw3XTTTdYpiDEMCERF+fLlNXHiRHXq1Mk6BQgdx3H0wAMP6Nlnn7VOQQxhQMBzVapU0dSpU7lWC3jsiiuu0GuvvcblQUQFAwKeqlGjhqZMmaI6depYpwAx4aKLLtKYMWNUpkwZ6xSEHAMCnqldu7Y+/PBDVa9e3ToFiCmZmZl69913lZiYaJ2CEGNAwBMNGjTQlClTdNJJJ1mnADHpnHPO0YQJE1SuXDnrFIQUAwIRd/bZZ2vSpEmqVKmSdQoQ0xo1aqQPPvhAFSpUsE5BCDEgEFFnnnmm3n33Xf7UA/hEenq6Jk6cyDfcIuIYEIiYBg0aaPz48Vx3BXwmPT1d7733Hk9+RUQ5Xr1wWlqa69Vrw3/S09M1YcIELlsY2rZtmzZu3KgNGzZo06ZNWrFihRYvXmzalJGRobPPPlu1atXSqaeeqjp16qhq1aqmTbFs2bJl6tmzpwoKCqxTEEVZWVme/K5nQKDEatSooalTpyolJcU6JWYUFRXpq6++0qJFi7R48WItWrRI+/bts846JuXLl1fz5s3VokULtWjRQg0bNlRcHCdDo2Xx4sW6/PLLdfDgQesURAkDAr5UvXp1TZw4USeffLJ1Suh9+eWXWrhwoRYtWqRFixYpLy/POikifjkoWrVqpYYNG1onhd7s2bPVp08f6wxECQMCvlOpUiV98MEHfKWwR7KysjR58mQtWLBAn3zyifbu3WudFBUVKlRQRkaGMjMz1aVLFz4K7JHJkyerf//+1hmIAgYEfKVMmTKaNGmSzjrrLOuUUPnqq6/00Ucfadq0afrqq6+sc3yhUaNG6tChgy6++GI1aNDAOidUXnzxRT366KPWGfAYAwK+Mnr0aF1wwQXWGaHw/fffa/z48Xr77be1efNm6xxfq1Onji6//HL16NGDy2YR8qc//Uljx461zoCHGBDwjYceekgDBgywzgi0/Px8TZ48WW+//bY++eQT65xAyszM1JVXXqkOHTrw0eES6tOnj2bPnm2dAY8wIOALffr00eDBg60zAqmoqEgLFy7U2LFj9cEHH+jAgQPWSaFQtmxZXXLJJbr88svVrFkz65xAys/PV6dOnbR69WrrFHiAAQFz7du316hRo6wzAmf37t0aMWKERo8erezsbOucUKtZs6auvvpq/fGPf1TZsmWtcwJlx44duuiii7Rt2zbrFEQYAwKmTj31VM2YMYNTxcWQk5OjV155Ra+++ioP7omyChUqqH///urXrx+PVS+GL774Qp07d9ahQ4esUxBBDAiYSU5O1vTp0/m45jHKycnR888/rzfeeEP79++3zolpJ554ogYMGKB+/frxGOdjNGbMGN1+++3WGYggBgTMjBo1Su3bt7fO8L1du3bppZde0ogRIzjj4DPly5fXjTfeqBtuuEFJSUnWOb535513avTo0dYZiBAGBEzcdtttuuuuu6wzfG3Pnj16+eWXNXz4cOXn51vn4HdUqFBBAwcO1HXXXcfluN9x6NAhdezYkWeRhAQDAlHXqlUrjRs3To7j2b8mgXb48GG99tprevrpp5Wbm2udg2KoUqWK7r//fl122WX8+30EWVlZatOmjX788UfrFJQQAwJRVaNGDc2aNYsb0I5gzpw5uu+++7Rx40brFJRAkyZN9MQTT/BE1SNYvHixunfvbp2BEvJqQPAVePhNw4cPZzz8hh9++EHXXHONrrjiCsZDCCxfvlwdOnTQn//8Z+3Zs8c6x3cyMjI0aNAg6wz4FAMC/+Ovf/2rGjVqZJ3hK67r6rXXXlPLli01ffp06xxE2FtvvaVWrVpp8uTJ1im+c9ddd+mMM86wzoAPcQkDv9KmTRuNGTPGOsNXNm3apBtvvFErVqywTkEUXHjhhRoyZIhSUlKsU3xj06ZNatu2LZ8uCiguYcBz1apV08svv2yd4SsvvviimjdvzniIITNmzFCrVq00YcIE6xTfqFWrlh555BHrDPgMZyAgSYqLi9OUKVPUuHFj6xRf2Lx5s/r376+VK1dap8DQhRdeqH/84x+qWLGidYov9O3bVzNnzrTOQDFxBgKeuv322xkPPxk2bJhat27NeIBmzJihzMxMTZ061TrFF4YOHaoqVapYZ8AnOAMB1atXT7Nnz1ZCQoJ1iqndu3erf//+WrBggXUKfOiqq67SY489pjJlylinmJo5c6b69u1rnYFi4AwEPPPiiy/G/HhYsWKF2rZty3jAEY0ePVqdOnXSli1brFNMtW/fXpdddpl1BnyAARHjbrjhhpj/iNbw4cPVpUsXvmobR/X111+rbdu2mjVrlnWKqb/97W98SgVcwohlqampWrx4ccx+J8ChQ4c0cOBATZo0yToFAXTPPffo1ltvtc4ww6WM4OASBiJu6NChMTse9uzZox49ejAecNyefPJJDRo0SIWFhdYpJriUAQZEjOrRo4cyMzOtM0x8//336tSpk5YsWWKdgoAbP368evXqFbNfpvb444/rpJNOss6AEQZEDEpKStJDDz1knWHiP9998O2331qnICQWLVqkzp0764cffrBOibpy5crp/vvvt86AEQZEDLrnnntUuXJl64yomzVrlrp168aXJiHi1q5dqz/84Q9as2aNdUrU9e7dm+/OiVEMiBhTp04d/fGPf7TOiLoxY8boqquu0sGDB61TEFI7d+5Ux44dtXjxYuuUqHv22WetE2CAARFjnnvuOcXHx1tnRNUzzzyj22+/3ToDMSA/P1/du3fXtGnTrFOi6vTTT9e1115rnYEoY0DEkMsuu0xNmza1zoiqxx57TIMHD7bOQIy5/vrr9dFHH1lnRNVf/vIXvjMkxjAgYkTZsmX18MMPW2dE1eOPP64XXnjBOgMxqKioSNdee62mTJlinRI1ycnJ3FAZYxgQMWLQoEEx9eS4xx57TEOHDrXOQIzr379/TJ2JuPzyy1WnTh3rDEQJAyIGpKSkaMCAAdYZUTN06FDOPMAXioqKdP3118fMjZVxcXF68MEHrTMQJQyIGHDHHXfohBNOsM6IismTJ+vxxx+3zgB+VlhYqL59++qbb76xTomKDh066KyzzrLOQBQwIEKuevXqMfO8+gULFsTUmRYER15ennr27BkzD5t65JFHrBMQBQyIkLv33ntj4mObq1at0jXXXKOioiLrFOA35eTkqHfv3tq7d691iueaNWumtm3bWmfAYwyIEEtPT1f37t2tMzy3fft29e7dW/n5+dYpwO9at26drrnmmpj4Aq4HHnjAOgEeY0CEWCx8pGr//v264oortHPnTusU4Jh88skn+vOf/2yd4bnTTjtNnTp1ss6AhxgQIZWenq4LL7zQOsNTRUVF6tevn1atWmWdAhTL2LFj9dJLL1lneI4nwIYbAyKk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ZWRkqE+fPtYZAI5i8uTJatmypYYMGaIDBw785j+zdetWzZo1K8pl8AoDIiQmTpyonJwc6wxPPPzww6patap1BoCjOHDggJ566illZmb+5kfMR4wYYVAFrzAgQmT48OHWCZ5ITk7WP//5T+sMAMdo8+bNuv7663XZZZfp22+/lfTvcfHWW28ZlyGS4r164eTk5Ie9em38ttWrV+v6669XqVKlrFMirkaNGtq7d6+WL19unQLgGG3evFn/+te/lJ+fr82bN2vKlCnWSTFp3759f/XidfkURsg88sgjof3448GDB9WuXTtt2LDBOgUAAoNPYeCYvPDCCzp8+LB1hidKly6tYcOGKSEhwToFAGIeAyJksrOzNWnSJOsMz5x++ul69NFHrTMAIOYxIEJo6NCh1gmeuvbaa9W1a1frDACIaQyIEFq9erVmzpxpneGpIUOGqGHDhtYZABCzGBAh9eSTT1oneOqEE07QyJEjlZycbJ0CHJdzzjlHM2bM0Nlnn22dAhwXBkRIff3115o2bZp1hqeqV6+ukSNHWmcAxVarVi2NGjVKZ5xxhj788EO98MILqlKlinUWUCwMiBAbPHiwXDfcn6Zt2bKlXn75ZesM4JglJSXprbfeUsWKFX/+e927d9eiRYt088038ykjBAYPkgqxHTt26LTTTlN6erp1iqcaNGigMmXKaP78+dYpwO9yHEdvv/22zjrrrP/5/5UuXVqtW7dWjx499M0332jz5s0GhQgjrx4kxRmIkHv66aetE6Ji0KBBuuaaa6wzgN/11FNPKSMj43f/mVq1amn8+PEaPXq0atasGaUyoPg4AxFyOTk5qlevnho0aGCd4rn27dvrm2++0bp166xTgP9x9913q3///sf8z9epU0c33HCDSpUqpWXLloX2AXHwHo+yxnE75ZRTtGjRIuuMqOndu7fmzZtnnQH87KabbtIDDzxw3P/9bdu26W9/+5vee++9CFYhVvAoaxy3jRs3atiwYdYZUTNy5Eg1atTIOgOQJF155ZUlGg+SdPLJJ+uFF17QxIkTdeqpp0aoDCgZzkDEiKSkJC1dulQVKlSwTomKH3/8UZdcconWrl1rnYIY1qVLF73yyitynMi91R4+fFgjR47Uk08+qby8vIi9LsKLMxAokby8PD3xxBPWGVFz4okn6t133w39J1DgX926ddOwYcMiOh4kKSEhQf369dOnn36qK664IqKvDRQHZyBiiOM4mjNnTkz9Ut2zZ4969OihVatWWacghvTu3VtDhgyJ+Hj4LV9//bVuu+02ffnll54fC8HEGQiUmOu6uvvuu60zoqpChQp6//33dc4551inIEb069dPzz33XFTGgyQ1bNhQH330kYYMGaJKlSpF5ZiAxICIOZ988knoH3H938qVK6d33nnnqJ+/B0rqvvvuM/m6ecdxdPnll2vx4sW64YYbFBfHWzu8xyWMGFS9enUtWbLEOsPEgAEDNHHiROsMhNDf//53XX311dYZkqT169frnnvu0cKFC61T4ANeXcLgQVIxaO/evTpw4IBat25tnRJ1nTt3VmFhoT755BPrFIREYmKi3nzzTV1yySXWKT+rVKmSevXqpfr162vp0qXat2+fdRIM8SApRFR8fLzmzJmjunXrWqeYeP/99zVw4EAVFhZapyDAqlatqrFjx6pevXrWKUdUUFCgoUOH6oUXXtDBgwetc2CAmygRUYWFhbrtttusM8x07dpV48eP/9U3IgLFcc4552jWrFm+Hg/Sv8+Q3HXXXVq4cKE6duxonYMQYUDEsKVLl+qtt96yzjDTvHlzzZw5Mya+JwSR1bNnT33wwQeBGqDVq1fXiBEj9Pbbb+uUU06xzkEIcAkjxpUrV06LFy9WSkqKdYqZgoICDRgwQNOnT7dOgc+VLl1aTz75ZOAf4HTo0CENHz5cgwcPVkFBgXUOPMZNlPDEwYMHtX379pg+tVmqVCl169ZNRUVF3FyJI6pdu7bGjx+vtm3bWqeUWHx8vJo2baorrrhCO3fu5EFrIcdNlPDUqFGj1L59e+sMc4sWLdKNN96o7du3W6fARzp16qTnn39eZcuWtU7xxPLly3XHHXfom2++sU6BB7iJEp66+eabtW3bNusMcy1atND8+fPVq1cv6xT4QGJiop5++mm9+uqroR0PktSkSRPNnj1bf//732PmC/dQcpyBwM+aNWumCRMmRO0RvH43a9Ys3XLLLdq1a5d1Cgyce+65evnll1WtWjXrlKjavXu3nnrqKb3++utyXd7Gw4AzEPDcp59+qn/84x/WGb5xwQUXaP78+erWrZt1CqKoTJkyevTRRzVp0qSYGw+SVLFiRT3xxBP6+OOP1bhxY+sc+BhnIPA/Jk+erHPPPdc6w1dmzZqlP//5z8rOzrZOgYcaN26sF198kY85/sLEiRM1YMAA6wyUAGcgEDX9+/fn0bf/5YILLtC8efMC//E9/Lby5ctr8ODB+vDDDxkP/4VLeDgSzkDgN11wwQUaPXq0dYYvccd6uPTp00f33XcfX4X9G5YtW6YuXbpwL0TA8RwIRNXGjRtVqlQpNW/e3DrFd6pWraq+ffuqatWqWrZsGQ/iCagGDRrojTfe0DXXXKPExETrHN/ZuXOnunbtqvz8fOsUlBDPgYCJN998U+3atbPO8K29e/fqqaee0ogRI6xTcIxOPfVU3Xnnnbr00kutU3ytS5cuWrp0qXUGIsCrMxAMCPyu5ORkzZgxQ7Vr17ZO8bUtW7bo2Wef1bhx4/iGT5869dRTddddd6lz586Ki+P2r99z7733auTIkdYZiBAGBMykp6dr2rRpnOY9Bps2bdLgwYM1fvx46xT8JD09XXfeeac6d+5snRII48aN06233mqdgQhiQMBUx44dOU1fDBs2bNArr7yiUaNGWafErEaNGum2225Thw4drFMC48svv1SXLl104MAB6xREEAMC5u666y7ddttt1hmBsnPnTv3rX//SyJEjtXv3buucmNCiRQvdeuutat26tXVKoGRlZalDhw58D0wIMSDgC8OHD+dU8HF6/fXXNXLkSK1evdo6JZS6du2qG264QU2aNLFOCZy8vDx16tRJa9assU6BBxgQ8IVSpUpp0qRJPOK2BD7//HO99dZbevfdd5WXl2edE2gNGjRQnz591L17d57jcJwOHz6s7t27a8mSJdYp8AgDAr5RqVIlTZ8+PSa/JyCS9u/fr4kTJ2rChAmaO3eudU5gVKhQQV27dtWVV16pM8880zon8AYNGsRNvyHHgICv1K1bVx999FGov+I4mnbt2qVp06Zp0qRJmj9/voqKiqyTfKVChQrq3LmzunTpohYtWighIcE6KRSeeuopDRkyxDoDHmNAwHfat2/Ppww88OOPP2r27NmaOnWq5s+frz179lgnmahRo4Zat26tSy+9VJmZmdY5oTNmzBjdfvvt1hmIAgYEfOmKK67Qs88+a50RasuXL9e8efM0b948LV682DrHM+np6WratKmaN2+uzMxMpaamWieF1scff6wrr7zSOgNRwoCAb1199dX6+9//bp0RM5YtW6bPPvtMy5Yt0yeffKKcnBzrpONy5plnqmnT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",userTel:"15516392395",userPwd:"123123",isRotate:!1}},components:{wInput:d,wButton:e},mounted:function(){this.isLogin()},methods:{isLogin:function(){try{A.getStorage({key:"userInfo",success:function(n){n.data&&(console.log(t(n.data," at pages\\login\\login.vue:67")),A.reLaunch({url:"../me/index"}))}})}catch(n){}},startLogin:function(){var n=this;if(this.isRotate)return!1;""!=this.userTel.length?this.userPwd.length<5?A.showToast({icon:"none",position:"bottom",title:"密码不正确"}):(A.request({url:"http://192.168.1.18:8080/app/login",dataType:"json",method:"POST",data:{userTel:n.userTel,userPwd:n.userPwd},success:function(r){""!=r.data&&(n.$store.commit("login",r.data),A.reLaunch({url:"../me/index"}))},fail:function(A){console.log(t(网络错误," at pages\\login\\login.vue:123"))}}),n.isRotate=!0,setTimeout(function(){n.isRotate=!1},3e3)):A.showToast({icon:"none",position:"bottom",title:"手机号不能为空"})},login_weixin:function(){A.showToast({icon:"none",position:"bottom",title:"..."})},login_weibo:function(){A.showToast({icon:"none",position:"bottom",title:"..."})},login_github:function(){A.showToast({icon:"none",position:"bottom",title:"..."})}}};n.default=u}).call(this,r("6e42")["default"],r("0de9")["default"])},"755d":function(A,n,r){"use strict";var t=function(){var A=this,n=A.$createElement;A._self._c},d=[];r.d(n,"a",function(){return t}),r.d(n,"b",function(){return d})},"94fe":function(A,n,r){"use strict";r.r(n);var t=r("67f4"),d=r.n(t);for(var e in t)"default"!==e&&function(A){r.d(n,A,function(){return t[A]})}(e);n["default"]=d.a},a985:function(A,n,r){"use strict";r.r(n);var t=r("755d"),d=r("94fe");for(var e in d)"default"!==e&&function(A){r.d(n,A,function(){return d[A]})}(e);r("0253");var u=r("2877"),a=Object(u["a"])(d["default"],t["a"],t["b"],!1,null,null,null);n["default"]=a.exports},ad10:function(A,n,r){"use strict";(function(A){r("2b8f"),r("921b");t(r("66fd"));var n=t(r("a985"));function t(A){return A&&A.__esModule?A:{default:A}}A(n.default)}).call(this,r("6e42")["createPage"])},c1c6:function(A,n,r){}},[["ad10","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/me/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/index.js';

define('pages/me/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/index"],{"085a":function(e,n,t){"use strict";var u=t("29a0"),a=t.n(u);a.a},"29a0":function(e,n,t){},"3d6e":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=t("2f62"),a={data:function(){return{isH5Plus:!0,severList:[[{name:"退出登录",icon:"point.png",func:"logout"}]]}},onLoad:function(){this.init()},computed:(0,u.mapState)({userInfo:function(e){return{face:"../../static/image/face.jpeg",userName:e.userName,userTel:e.userTel}}}),methods:{tmpFunc:function(e){e&&this[e]()},logout:function(){e.clearStorage({key:"userInfo"}),e.reLaunch({url:"../login/login"})}}};n.default=a}).call(this,t("6e42")["default"])},"4ae8":function(e,n,t){"use strict";t.r(n);var u=t("3d6e"),a=t.n(u);for(var o in u)"default"!==o&&function(e){t.d(n,e,function(){return u[e]})}(o);n["default"]=a.a},5930:function(e,n,t){"use strict";(function(e){t("2b8f"),t("921b");u(t("66fd"));var n=u(t("b09e"));function u(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},"8fe9":function(e,n,t){"use strict";var u=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"a",function(){return u}),t.d(n,"b",function(){return a})},b09e:function(e,n,t){"use strict";t.r(n);var u=t("8fe9"),a=t("4ae8");for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);t("085a");var r=t("2877"),i=Object(r["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=i.exports}},[["5930","common/runtime","common/vendor"]]]);
});
require('pages/me/index.js');
__wxRoute = 'pages/live/beforeLive';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/live/beforeLive.js';

define('pages/live/beforeLive.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/live/beforeLive"],{1327:function(n,t,e){"use strict";(function(n){e("2b8f"),e("921b");u(e("66fd"));var t=u(e("546a"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},1743:function(n,t,e){"use strict";e.r(t);var u=e("8e49"),a=e.n(u);for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);t["default"]=a.a},"546a":function(n,t,e){"use strict";e.r(t);var u=e("905d"),a=e("1743");for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);e("ed74");var i=e("2877"),c=Object(i["a"])(a["default"],u["a"],u["b"],!1,null,"69bbb4e5",null);t["default"]=c.exports},"8e49":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{active:!1}},onLoad:function(){},onShow:function(){this.active=!0},onHide:function(){this.active=!1},methods:{goToPage:function(t){t&&n.reLaunch({url:t})}}};t.default=e}).call(this,e("6e42")["default"])},"905d":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return a})},b6ae:function(n,t,e){},ed74:function(n,t,e){"use strict";var u=e("b6ae"),a=e.n(u);a.a}},[["1327","common/runtime","common/vendor"]]]);
});
require('pages/live/beforeLive.js');
__wxRoute = 'pages/login/register';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/register.js';

define('pages/login/register.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/register"],{"180c":function(A,r,n){"use strict";n.r(r);var t=n("d50c"),d=n.n(t);for(var e in t)"default"!==e&&function(A){n.d(r,A,function(){return t[A]})}(e);r["default"]=d.a},"24b1":function(A,r,n){"use strict";var t=function(){var A=this,r=A.$createElement;A._self._c},d=[];n.d(r,"a",function(){return t}),n.d(r,"b",function(){return d})},"893b":function(A,r,n){"use strict";var t=n("ae66"),d=n.n(t);d.a},ae66:function(A,r,n){},d50c:function(A,r,n){"use strict";(function(A,t){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var d=function(){return n.e("components/watch-login/watch-input").then(n.bind(null,"aeec"))},e=function(){return n.e("components/watch-login/watch-button").then(n.bind(null,"dddf"))},u={data:function(){return{logoImage:"data:image/png;base64,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2GMaO3asXnvtNe6VAI6Ab+ME/kvPnj01ZcoUzZ07V9dccw3jIQalpKTopptu0pIlSzRu3Dh16NDBOgnwHc5AAJJKly6tq666SgMHDlTVqlWtc+Aj/7lXYt26dXruuec0YcIEua5rnQWY4wwEYtoJJ5ygAQMGaMmSJfrb3/7GeMAR1atXTy+88IIWLlyo3r17Ky6Ot0/ENn4CEJMSExM1cOBALV26VA899JCqVKlinYSAOOWUU/Tcc89p8eLF6tOnD99jgpjFgEBMSUhI0A033KAlS5boL3/5Cw9+wnGrWbOmBg8erMWLF//8CG0gljAgEDN69OihRYsW6ZFHHmE4IGJq1KihF154QTNmzFDz5s2tc4CoYUAg9Nq0aaMZM2bon//8p2rUqGGdg5A644wzNGHCBL399tuqX7++dQ7gOQYEQqtu3boaO3asxowZozPOOMM6BzHi/PPP15w5czR06FClpqZa5wCeYUAgdJKSkvToo4/q448/VuvWra1zEKMuu+wyLVy4UDfddBM3WiKUGBAIld69e2vx4sXq16+fEhJ4zAlsJSUl6YEHHtCcOXPUokUL6xwgohgQCIX09HRNmzZNzz33nCpXrmydA/xK3bp19e6772r48OE6+eSTrXOAiGBAINBOOOEEPfbYY5o7d64aNWpknQP8rs6dO2vZsmW66aabrFOAEmNAILDOO+88zZ8/X9dff711ClAsDzzwgKZNm6Y6depYpwDHjQGBwElKStLgwYM1ceJEVa9e3ToHOC6NGjXSxx9/rFtvvZWbLBFIDAgESuvWrbVw4UL16dPHOgUosdKlS+uee+7RRx99pNNOO806BygWBgQCoWzZsnruuec0duxYPluP0GnYsKFmz56tQYMGWacAx4wBAd8788wzNWfOHPXu3ds6BfDUfffdp9GjRys5Odk6BTgqBgR8y3EcDRo0SB9++CGPoEbMuOCCC/Txxx+rYcOG1inA72JAwJcqV66sCRMm6L777uOBUIg51atX14cffqhrr73WOgU4IgYEfKddu3aaP3++mjVrZp0CmCldurSeeOIJvfLKKypbtqx1DvA/GBDwlRtvvFGjRo3SiSeeaJ0C+MIll1yijz76SDVr1rROAX6FAQFfiIuL0z//+U89+OCDiovjX0vgl+rWrauZM2fq/PPPt04BfsY7NcxVqFBB77//vnr06GGdAvhWuXLlNGbMGP35z3+2TgEkMSBg7NRTT9XMmTPVtGlT6xTA9xzH0R133KG33npLSUlJ1jmIcQwImGnTpo2mTZumatWqWacAgdK2bVvNmDFDp5xyinUKYhgDAiYuu+wyHpgDlMApp5yiKVOmqEmTJtYpiFEMCETd/fffr6FDh/IFQkAJVaxYUe+99546d+5snYIYxIBA1CQkJOjVV1/VzTffbJ0ChEaZMmU0bNgw3XTTTdYpiDEMCERF+fLlNXHiRHXq1Mk6BQgdx3H0wAMP6Nlnn7VOQQxhQMBzVapU0dSpU7lWC3jsiiuu0GuvvcblQUQFAwKeqlGjhqZMmaI6depYpwAx4aKLLtKYMWNUpkwZ6xSEHAMCnqldu7Y+/PBDVa9e3ToFiCmZmZl69913lZiYaJ2CEGNAwBMNGjTQlClTdNJJJ1mnADHpnHPO0YQJE1SuXDnrFIQUAwIRd/bZZ2vSpEmqVKmSdQoQ0xo1aqQPPvhAFSpUsE5BCDEgEFFnnnmm3n33Xf7UA/hEenq6Jk6cyDfcIuIYEIiYBg0aaPz48Vx3BXwmPT1d7733Hk9+RUQ5Xr1wWlqa69Vrw3/S09M1YcIELlsY2rZtmzZu3KgNGzZo06ZNWrFihRYvXmzalJGRobPPPlu1atXSqaeeqjp16qhq1aqmTbFs2bJl6tmzpwoKCqxTEEVZWVme/K5nQKDEatSooalTpyolJcU6JWYUFRXpq6++0qJFi7R48WItWrRI+/bts846JuXLl1fz5s3VokULtWjRQg0bNlRcHCdDo2Xx4sW6/PLLdfDgQesURAkDAr5UvXp1TZw4USeffLJ1Suh9+eWXWrhwoRYtWqRFixYpLy/POikifjkoWrVqpYYNG1onhd7s2bPVp08f6wxECQMCvlOpUiV98MEHfKWwR7KysjR58mQtWLBAn3zyifbu3WudFBUVKlRQRkaGMjMz1aVLFz4K7JHJkyerf//+1hmIAgYEfKVMmTKaNGmSzjrrLOuUUPnqq6/00Ucfadq0afrqq6+sc3yhUaNG6tChgy6++GI1aNDAOidUXnzxRT366KPWGfAYAwK+Mnr0aF1wwQXWGaHw/fffa/z48Xr77be1efNm6xxfq1Onji6//HL16NGDy2YR8qc//Uljx461zoCHGBDwjYceekgDBgywzgi0/Px8TZ48WW+//bY++eQT65xAyszM1JVXXqkOHTrw0eES6tOnj2bPnm2dAY8wIOALffr00eDBg60zAqmoqEgLFy7U2LFj9cEHH+jAgQPWSaFQtmxZXXLJJbr88svVrFkz65xAys/PV6dOnbR69WrrFHiAAQFz7du316hRo6wzAmf37t0aMWKERo8erezsbOucUKtZs6auvvpq/fGPf1TZsmWtcwJlx44duuiii7Rt2zbrFEQYAwKmTj31VM2YMYNTxcWQk5OjV155Ra+++ioP7omyChUqqH///urXrx+PVS+GL774Qp07d9ahQ4esUxBBDAiYSU5O1vTp0/m45jHKycnR888/rzfeeEP79++3zolpJ554ogYMGKB+/frxGOdjNGbMGN1+++3WGYggBgTMjBo1Su3bt7fO8L1du3bppZde0ogRIzjj4DPly5fXjTfeqBtuuEFJSUnWOb535513avTo0dYZiBAGBEzcdtttuuuuu6wzfG3Pnj16+eWXNXz4cOXn51vn4HdUqFBBAwcO1HXXXcfluN9x6NAhdezYkWeRhAQDAlHXqlUrjRs3To7j2b8mgXb48GG99tprevrpp5Wbm2udg2KoUqWK7r//fl122WX8+30EWVlZatOmjX788UfrFJQQAwJRVaNGDc2aNYsb0I5gzpw5uu+++7Rx40brFJRAkyZN9MQTT/BE1SNYvHixunfvbp2BEvJqQPAVePhNw4cPZzz8hh9++EHXXHONrrjiCsZDCCxfvlwdOnTQn//8Z+3Zs8c6x3cyMjI0aNAg6wz4FAMC/+Ovf/2rGjVqZJ3hK67r6rXXXlPLli01ffp06xxE2FtvvaVWrVpp8uTJ1im+c9ddd+mMM86wzoAPcQkDv9KmTRuNGTPGOsNXNm3apBtvvFErVqywTkEUXHjhhRoyZIhSUlKsU3xj06ZNatu2LZ8uCiguYcBz1apV08svv2yd4SsvvviimjdvzniIITNmzFCrVq00YcIE6xTfqFWrlh555BHrDPgMZyAgSYqLi9OUKVPUuHFj6xRf2Lx5s/r376+VK1dap8DQhRdeqH/84x+qWLGidYov9O3bVzNnzrTOQDFxBgKeuv322xkPPxk2bJhat27NeIBmzJihzMxMTZ061TrFF4YOHaoqVapYZ8AnOAMB1atXT7Nnz1ZCQoJ1iqndu3erf//+WrBggXUKfOiqq67SY489pjJlylinmJo5c6b69u1rnYFi4AwEPPPiiy/G/HhYsWKF2rZty3jAEY0ePVqdOnXSli1brFNMtW/fXpdddpl1BnyAARHjbrjhhpj/iNbw4cPVpUsXvmobR/X111+rbdu2mjVrlnWKqb/97W98SgVcwohlqampWrx4ccx+J8ChQ4c0cOBATZo0yToFAXTPPffo1ltvtc4ww6WM4OASBiJu6NChMTse9uzZox49ejAecNyefPJJDRo0SIWFhdYpJriUAQZEjOrRo4cyMzOtM0x8//336tSpk5YsWWKdgoAbP368evXqFbNfpvb444/rpJNOss6AEQZEDEpKStJDDz1knWHiP9998O2331qnICQWLVqkzp0764cffrBOibpy5crp/vvvt86AEQZEDLrnnntUuXJl64yomzVrlrp168aXJiHi1q5dqz/84Q9as2aNdUrU9e7dm+/OiVEMiBhTp04d/fGPf7TOiLoxY8boqquu0sGDB61TEFI7d+5Ux44dtXjxYuuUqHv22WetE2CAARFjnnvuOcXHx1tnRNUzzzyj22+/3ToDMSA/P1/du3fXtGnTrFOi6vTTT9e1115rnYEoY0DEkMsuu0xNmza1zoiqxx57TIMHD7bOQIy5/vrr9dFHH1lnRNVf/vIXvjMkxjAgYkTZsmX18MMPW2dE1eOPP64XXnjBOgMxqKioSNdee62mTJlinRI1ycnJ3FAZYxgQMWLQoEEx9eS4xx57TEOHDrXOQIzr379/TJ2JuPzyy1WnTh3rDEQJAyIGpKSkaMCAAdYZUTN06FDOPMAXioqKdP3118fMjZVxcXF68MEHrTMQJQyIGHDHHXfohBNOsM6IismTJ+vxxx+3zgB+VlhYqL59++qbb76xTomKDh066KyzzrLOQBQwIEKuevXqMfO8+gULFsTUmRYER15ennr27BkzD5t65JFHrBMQBQyIkLv33ntj4mObq1at0jXXXKOioiLrFOA35eTkqHfv3tq7d691iueaNWumtm3bWmfAYwyIEEtPT1f37t2tMzy3fft29e7dW/n5+dYpwO9at26drrnmmpj4Aq4HHnjAOgEeY0CEWCx8pGr//v264oortHPnTusU4Jh88skn+vOf/2yd4bnTTjtNnTp1ss6AhxgQIZWenq4LL7zQOsNTRUVF6tevn1atWmWdAhTL2LFj9dJLL1lneI4nwIYbAyKk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ZWRkqE+fPtYZAI5i8uTJatmypYYMGaIDBw785j+zdetWzZo1K8pl8AoDIiQmTpyonJwc6wxPPPzww6patap1BoCjOHDggJ566illZmb+5kfMR4wYYVAFrzAgQmT48OHWCZ5ITk7WP//5T+sMAMdo8+bNuv7663XZZZfp22+/lfTvcfHWW28ZlyGS4r164eTk5Ie9em38ttWrV+v6669XqVKlrFMirkaNGtq7d6+WL19unQLgGG3evFn/+te/lJ+fr82bN2vKlCnWSTFp3759f/XidfkURsg88sgjof3448GDB9WuXTtt2LDBOgUAAoNPYeCYvPDCCzp8+LB1hidKly6tYcOGKSEhwToFAGIeAyJksrOzNWnSJOsMz5x++ul69NFHrTMAIOYxIEJo6NCh1gmeuvbaa9W1a1frDACIaQyIEFq9erVmzpxpneGpIUOGqGHDhtYZABCzGBAh9eSTT1oneOqEE07QyJEjlZycbJ0CHJdzzjlHM2bM0Nlnn22dAhwXBkRIff3115o2bZp1hqeqV6+ukSNHWmcAxVarVi2NGjVKZ5xxhj788EO98MILqlKlinUWUCwMiBAbPHiwXDfcn6Zt2bKlXn75ZesM4JglJSXprbfeUsWKFX/+e927d9eiRYt088038ykjBAYPkgqxHTt26LTTTlN6erp1iqcaNGigMmXKaP78+dYpwO9yHEdvv/22zjrrrP/5/5UuXVqtW7dWjx499M0332jz5s0GhQgjrx4kxRmIkHv66aetE6Ji0KBBuuaaa6wzgN/11FNPKSMj43f/mVq1amn8+PEaPXq0atasGaUyoPg4AxFyOTk5qlevnho0aGCd4rn27dvrm2++0bp166xTgP9x9913q3///sf8z9epU0c33HCDSpUqpWXLloX2AXHwHo+yxnE75ZRTtGjRIuuMqOndu7fmzZtnnQH87KabbtIDDzxw3P/9bdu26W9/+5vee++9CFYhVvAoaxy3jRs3atiwYdYZUTNy5Eg1atTIOgOQJF155ZUlGg+SdPLJJ+uFF17QxIkTdeqpp0aoDCgZzkDEiKSkJC1dulQVKlSwTomKH3/8UZdcconWrl1rnYIY1qVLF73yyitynMi91R4+fFgjR47Uk08+qby8vIi9LsKLMxAokby8PD3xxBPWGVFz4okn6t133w39J1DgX926ddOwYcMiOh4kKSEhQf369dOnn36qK664IqKvDRQHZyBiiOM4mjNnTkz9Ut2zZ4969OihVatWWacghvTu3VtDhgyJ+Hj4LV9//bVuu+02ffnll54fC8HEGQiUmOu6uvvuu60zoqpChQp6//33dc4551inIEb069dPzz33XFTGgyQ1bNhQH330kYYMGaJKlSpF5ZiAxICIOZ988knoH3H938qVK6d33nnnqJ+/B0rqvvvuM/m6ecdxdPnll2vx4sW64YYbFBfHWzu8xyWMGFS9enUtWbLEOsPEgAEDNHHiROsMhNDf//53XX311dYZkqT169frnnvu0cKFC61T4ANeXcLgQVIxaO/evTpw4IBat25tnRJ1nTt3VmFhoT755BPrFIREYmKi3nzzTV1yySXWKT+rVKmSevXqpfr162vp0qXat2+fdRIM8SApRFR8fLzmzJmjunXrWqeYeP/99zVw4EAVFhZapyDAqlatqrFjx6pevXrWKUdUUFCgoUOH6oUXXtDBgwetc2CAmygRUYWFhbrtttusM8x07dpV48eP/9U3IgLFcc4552jWrFm+Hg/Sv8+Q3HXXXVq4cKE6duxonYMQYUDEsKVLl+qtt96yzjDTvHlzzZw5Mya+JwSR1bNnT33wwQeBGqDVq1fXiBEj9Pbbb+uUU06xzkEIcAkjxpUrV06LFy9WSkqKdYqZgoICDRgwQNOnT7dOgc+VLl1aTz75ZOAf4HTo0CENHz5cgwcPVkFBgXUOPMZNlPDEwYMHtX379pg+tVmqVCl169ZNRUVF3FyJI6pdu7bGjx+vtm3bWqeUWHx8vJo2baorrrhCO3fu5EFrIcdNlPDUqFGj1L59e+sMc4sWLdKNN96o7du3W6fARzp16qTnn39eZcuWtU7xxPLly3XHHXfom2++sU6BB7iJEp66+eabtW3bNusMcy1atND8+fPVq1cv6xT4QGJiop5++mm9+uqroR0PktSkSRPNnj1bf//732PmC/dQcpyBwM+aNWumCRMmRO0RvH43a9Ys3XLLLdq1a5d1Cgyce+65evnll1WtWjXrlKjavXu3nnrqKb3++utyXd7Gw4AzEPDcp59+qn/84x/WGb5xwQUXaP78+erWrZt1CqKoTJkyevTRRzVp0qSYGw+SVLFiRT3xxBP6+OOP1bhxY+sc+BhnIPA/Jk+erHPPPdc6w1dmzZqlP//5z8rOzrZOgYcaN26sF198kY85/sLEiRM1YMAA6wyUAGcgEDX9+/fn0bf/5YILLtC8efMC//E9/Lby5ctr8ODB+vDDDxkP/4VLeDgSzkDgN11wwQUaPXq0dYYvccd6uPTp00f33XcfX4X9G5YtW6YuXbpwL0TA8RwIRNXGjRtVqlQpNW/e3DrFd6pWraq+ffuqatWqWrZsGQ/iCagGDRrojTfe0DXXXKPExETrHN/ZuXOnunbtqvz8fOsUlBDPgYCJN998U+3atbPO8K29e/fqqaee0ogRI6xTcIxOPfVU3Xnnnbr00kutU3ytS5cuWrp0qXUGIsCrMxAMCPyu5ORkzZgxQ7Vr17ZO8bUtW7bo2Wef1bhx4/iGT5869dRTddddd6lz586Ki+P2r99z7733auTIkdYZiBAGBMykp6dr2rRpnOY9Bps2bdLgwYM1fvx46xT8JD09XXfeeac6d+5snRII48aN06233mqdgQhiQMBUx44dOU1fDBs2bNArr7yiUaNGWafErEaNGum2225Thw4drFMC48svv1SXLl104MAB6xREEAMC5u666y7ddttt1hmBsnPnTv3rX//SyJEjtXv3buucmNCiRQvdeuutat26tXVKoGRlZalDhw58D0wIMSDgC8OHD+dU8HF6/fXXNXLkSK1evdo6JZS6du2qG264QU2aNLFOCZy8vDx16tRJa9assU6BBxgQ8IVSpUpp0qRJPOK2BD7//HO99dZbevfdd5WXl2edE2gNGjRQnz591L17d57jcJwOHz6s7t27a8mSJdYp8AgDAr5RqVIlTZ8+PSa/JyCS9u/fr4kTJ2rChAmaO3eudU5gVKhQQV27dtWVV16pM8880zon8AYNGsRNvyHHgICv1K1bVx999FGov+I4mnbt2qVp06Zp0qRJmj9/voqKiqyTfKVChQrq3LmzunTpohYtWighIcE6KRSeeuopDRkyxDoDHmNAwHfat2/Ppww88OOPP2r27NmaOnWq5s+frz179lgnmahRo4Zat26tSy+9VJmZmdY5oTNmzBjdfvvt1hmIAgYEfOmKK67Qs88+a50RasuXL9e8efM0b948LV682DrHM+np6WratKmaN2+uzMxMpaamWieF1scff6wrr7zSOgNRwoCAb1199dX6+9//bp0RM5YtW6bPPvtMy5Yt0yeffKKcnBzrpONy5plnqmnT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",userTel:"",userPwd:"",userName:"",isRotate:!1}},components:{wInput:d,wButton:e},mounted:function(){},methods:{startReg:function(){var r=this;if(this.isRotate)return!1;if(11!=this.userTel.length)return A.showToast({icon:"none",position:"bottom",title:"手机号不正确"}),!1;if(this.userPwd.length<6)return A.showToast({icon:"none",position:"bottom",title:"密码不正确"}),!1;var n={userTel:r.userTel,userPwd:r.userPwd,userName:r.userName};A.request({url:"http://192.168.1.18:8080/app/register",dataType:"json",method:"POST",data:n,success:function(d){200==d.data.statusCode?(r.$store.commit("login",n),A.reLaunch({url:"../me/index"})):console.log(t("注册失败了"," at pages\\login\\register.vue:80"))},fail:function(A){console.log(t(网络错误," at pages\\login\\register.vue:85"))}}),console.log(t("注册成功"," at pages\\login\\register.vue:88")),r.isRotate=!0,setTimeout(function(){r.isRotate=!1},3e3)}}};r.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},db5a:function(A,r,n){"use strict";(function(A){n("2b8f"),n("921b");t(n("66fd"));var r=t(n("ed40"));function t(A){return A&&A.__esModule?A:{default:A}}A(r.default)}).call(this,n("6e42")["createPage"])},ed40:function(A,r,n){"use strict";n.r(r);var t=n("24b1"),d=n("180c");for(var e in d)"default"!==e&&function(A){n.d(r,A,function(){return d[A]})}(e);n("893b");var u=n("2877"),a=Object(u["a"])(d["default"],t["a"],t["b"],!1,null,null,null);r["default"]=a.exports}},[["db5a","common/runtime","common/vendor"]]]);
});
require('pages/login/register.js');
__wxRoute = 'pages/login/forget';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/forget.js';

define('pages/login/forget.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/forget"],{"303b":function(t,n,o){"use strict";(function(t,e){var i;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(){return o.e("components/watch-login/watch-input").then(o.bind(null,"aeec"))},u=function(){return o.e("components/watch-login/watch-button").then(o.bind(null,"dddf"))},s={data:function(){return{phoneData:"",passData:"",verCode:"",isRotate:!1}},components:{wInput:a,wButton:u},mounted:function(){i=this},methods:{getVerCode:function(){if(11!=i.phoneData.length)return t.showToast({icon:"none",position:"bottom",title:"手机号不正确"}),!1;console.log(e("获取验证码"," at pages\\login\\forget.vue:77")),this.$refs.runCode.$emit("runCode"),t.showToast({icon:"none",position:"bottom",title:"模拟倒计时触发"}),setTimeout(function(){i.$refs.runCode.$emit("runCode",0),t.showToast({icon:"none",position:"bottom",title:"模拟倒计时终止"})},3e3)},startRePass:function(){return!this.isRotate&&(11!=this.phoneData.length?(t.showToast({icon:"none",position:"bottom",title:"手机号不正确"}),!1):this.passData.length<6?(t.showToast({icon:"none",position:"bottom",title:"密码不正确"}),!1):4!=this.verCode.length?(t.showToast({icon:"none",position:"bottom",title:"验证码不正确"}),!1):(console.log(e("重置密码成功"," at pages\\login\\forget.vue:124")),i.isRotate=!0,void setTimeout(function(){i.isRotate=!1},3e3)))}}};n.default=s}).call(this,o("6e42")["default"],o("0de9")["default"])},4639:function(t,n,o){},"67c7":function(t,n,o){"use strict";o.r(n);var e=o("a4c4"),i=o("8f8e");for(var a in i)"default"!==a&&function(t){o.d(n,t,function(){return i[t]})}(a);o("c484");var u=o("2877"),s=Object(u["a"])(i["default"],e["a"],e["b"],!1,null,null,null);n["default"]=s.exports},"81fa":function(t,n,o){"use strict";(function(t){o("2b8f"),o("921b");e(o("66fd"));var n=e(o("67c7"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,o("6e42")["createPage"])},"8f8e":function(t,n,o){"use strict";o.r(n);var e=o("303b"),i=o.n(e);for(var a in e)"default"!==a&&function(t){o.d(n,t,function(){return e[t]})}(a);n["default"]=i.a},a4c4:function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},i=[];o.d(n,"a",function(){return e}),o.d(n,"b",function(){return i})},c484:function(t,n,o){"use strict";var e=o("4639"),i=o.n(e);i.a}},[["81fa","common/runtime","common/vendor"]]]);
});
require('pages/login/forget.js');
__wxRoute = 'pages/home/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/home/home.js';

define('pages/home/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/home"],{"0bcd":function(e,t,n){"use strict";n.r(t);var u=n("449e"),r=n.n(u);for(var a in u)"default"!==a&&function(e){n.d(t,e,function(){return u[e]})}(a);t["default"]=r.a},"449e":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}},methods:{}};t.default=u},"6b8d":function(e,t,n){"use strict";n.r(t);var u=n("e5ac"),r=n("0bcd");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);var c=n("2877"),o=Object(c["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=o.exports},e5ac:function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return r})},e8d6:function(e,t,n){"use strict";(function(e){n("2b8f"),n("921b");u(n("66fd"));var t=u(n("6b8d"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["e8d6","common/runtime","common/vendor"]]]);
});
require('pages/home/home.js');
__wxRoute = 'pages/live/live';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/live/live.js';

define('pages/live/live.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function(){
              this.$vm && this.$vm.__call_hook('onShow')
            },
            onHide: function(){
              this.$vm && this.$vm.__call_hook('onHide')
            },
            onPullDownRefresh: function(){
              this.$vm && this.$vm.__call_hook('onPullDownRefresh')
            }
        })
    
});
require('pages/live/live.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

