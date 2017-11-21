<<<<<<< HEAD
/**
 * $Id: LA.js 643 2009-07-09 15:19:14Z wingedfox $
 *
 * Lakhota IME implementation
 *
 * This software is protected by patent No.2009611147 issued on 20.02.2009 by Russian Federal Service for Intellectual Property Patents and Trademarks.
 *
 * @author Konstantin Wiolowan
 * @copyright 2008-2009 Konstantin Wiolowan <wiolowan@mail.ru>
 * @version $Rev: 643 $
 * @lastchange $Author: wingedfox $ $Date: 2009-07-09 19:19:14 +0400 (Чт, 09 июл 2009) $
=======
/**
 * $Id: LA.js 643 2009-07-09 15:19:14Z wingedfox $
 *
 * Lakhota IME implementation
 *
 * This software is protected by patent No.2009611147 issued on 20.02.2009 by Russian Federal Service for Intellectual Property Patents and Trademarks.
 *
 * @author Konstantin Wiolowan
 * @copyright 2008-2009 Konstantin Wiolowan <wiolowan@mail.ru>
 * @version $Rev: 643 $
 * @lastchange $Author: wingedfox $ $Date: 2009-07-09 19:19:14 +0400 (Чт, 09 июл 2009) $
>>>>>>> e8efc462ec36a2f1402dc140a557cbd1b33c707f
 */
VirtualKeyboard.Langs.LA=new function(){var i=this;var I={ga:'ǧa',ge:'ǧe',gi:'ǧi','go':'ǧo',gu:'ǧu',Ga:'Ʀa',Ge:'Ʀe',GI:'Ʀi',Go:'Ʀo',Gu:'Ʀu',GA:'ƦA',GE:'ƦE',GI:'ƦI',GO:'ƦO',GU:'ƦU',pha:'p\u021fa',pho:'p\u021fo',Pha:'P\u021fa',Pho:'P\u021fo',PHA:'P\u021ea',PHo:'P\u021eo',tha:'t\u021fa',tho:'t\u021fo',Tha:'T\u021fa',Tho:'T\u021fo',THa:'T\u021ea',THo:'T\u021eo',kha:'k\u021fa',kho:'k\u021fo',Kha:'K\u021fa',Kho:'K\u021fo',KHa:'K\u021ea',KHo:'K\u021eo',"a'":'á',"A'":'Á',"i'":'í',"I'":'Í',"u'":'ú',"U'":'Ú',hwa:'\u021fwa',hwi:'\u021fwi',hwu:'\u021fwu',Hwa:'\u021ewa',Hwi:'\u021ewi',Hwu:'\u021ewu',HWA:'\u021eWA',HWI:'\u021eWI',HWU:'\u021eWU',hwe:'\u021fwe',Hwe:'\u021ewe',HWE:'\u021eWE'},l={'hwo':'\u021fwo','Hwo':'\u021ewo','\u021eWO':'HWO'},o={'phun':'pȟuŋ','Phun':'Pȟuŋ','PHUN':'PȞUŊ','thun':'tȟuŋ','Thun':'Tȟuŋ','THUN':'TȞUŊ','khun':'kȟuŋ','Khun':'Kȟuŋ','KHUN':'KȞUŊ','phún':'pȟúŋ','Phún':'Pȟúŋ','PHÚN':'PȞÚŊ','thún':'tȟúŋ','Thún':'Tȟúŋ','THÚN':'TȞÚŊ','khún':'kȟúŋ','Khún':'Kȟúŋ','KHÚN':'KȞÚŊ','an':'aŋ','An':'Aŋ','AN':'AŊ','in':'iŋ','In':'Iŋ','IN':'IŊ','un':'uŋ','Un':'Uŋ','UN':'UŊ','án':'áŋ','Án':'Áŋ','ÁN':'ÁŊ','ín':'íŋ','Ín':'Íŋ','ÍN':'ÍŊ','ún':'úŋ','Ún':'Úŋ','ÚN':'ÚŊ','h':'\u021f','H':'\u021e'},O={'phúŋ':'pȟúŋ','Phúŋ':'Pȟúŋ','PHÚ':'PȞÚŊ','thúŋ':'tȟúŋ','Thú':'Tȟúŋ','THÚŊ':'TȞÚŊ','khúŋ':'kȟúŋ','Khúŋ':'Kȟú','KHÚ':'KȞÚŊ','phúŋ':'pȟúŋ','Phúŋ':'Pȟú','PHÚ':'PȞÚ','thúŋ':'tȟúŋ','Thúŋ':'Tȟú','THÚŊ':'TȞÚ','khúŋ':'kȟúŋ','Khúŋ':'Kȟú','KHÚŊ':'KȞÚ',"p'":'p’',"P'":'P’',"k'":'k’',"K'":'K’',"t'":'t’',"T'":'T’',"č'":'č’',"Č'":'Č’',"s'":'s’',"S'":'S’',"š'":'š’',"Š'":'Š’',"\u021f'":'\u021f’',"\u021e'":'\u021e’',"h'":'\u021f’',"H'":'\u021e’',"e'":'é',"E'":'É',"o'":'ó',"O'":'Ó','hwo\'':'\u021fwó','Hwo\'':'\u021ewó','\u021eWO\'':'HWÓ'},Q={ph:'ph',Ph:'Ph',PH:'PH',th:'th',Th:'Th',TH:'TH',kh:'kh',Kh:'Kh',KH:'KH',an:'an',An:'An',AN:'AN','in':'in',In:'In',IN:'IN',un:'un',Un:'Un',UN:'UN','án':'án','Án':'Án','ÁN':'ÁN','ín':'ín','Ín':'Ín','ÍN':'ÍN','ún':'ún','Ún':'Ún','ÚN':'ÚN',hw:'hw',Hw:'Hw',HW:'HW'},_={phu:'phu',Phu:'Phu',PHU:'PHU',thu:'thu',Thu:'Thu',THU:'THU',khu:'khu',Khu:'Khu',KHU:'KHU',"phu'":'phú',"Phu'":'Phú',"PHU'":'PHÚ',"thu'":'thú',"Thu'":'Thú',"THU'":'THÚ',"khu'":'khú',"Khu'":'Khú',"KHU'":'KHÚ',hwo:'hwo',Hwo:'Hwo',HWO:'HWO'},c={'phun':'phun','Phun':'Phun','PHUN':'PHUN','thun':'thun','Thun':'Thun','THUN':'THUN','khun':'khun','Khun':'Khun','KHUN':'KHUN','phún':'phún','Phún':'Phún','PHÚN':'PHÚN','thún':'thún','Thún':'Thún','THÚN':'THÚN','khún':'khún','Khún':'Khún','KHÚN':'KHÚN'},C={};(function(){var e,v;var V="ǧwštypsdghȟkl'zžčbnmǦWŠTPSDGH\u021eKLZŽČBNM".split('');var x=" [].,<>;:\"?`~1!2@3#4$5%6^7&8*9(0)-_=+\|\u00A0".split('');for(v in O)C[v]=[O[v],0];for(v in I)C[v]=[I[v],1];for(v in Q)C[v]=[Q[v],2];for(v in _)C[v]=[_[v],3];for(v in c)C[v]=[c[v],4];for(v in o){for(var e=0,X=V.length;e<X;e++)C[v+V[e]]=[o[v]+(V[e]=="'"?"’":V[e]),1];for(var e=0,z=x.length;e<z;e++)C[v+x[e]]=[o[v]+x[e],0]}for(v in l){for(var e=0,X=V.length;e<X;e++)if(V[e]!="'")C[v+V[e]]=[l[v]+V[e],1]}C['hw']=['hw',2];O=I=Q=_=c=o=null;i.remap=C})();i.charProcessor=function(e,v,V){if(e=='\u0008'){if(v.length){return[v.slice(0,-1),v.length-1]}}else if(V.caps){return[v+e,0]}else if(/[^A-z'ŋčǧȟšžŊČǦȞŠ]/.test(e)){return C[v+e]||[v+e,0]}else{return C[v+e]||[v+e,1]}}};
