/* eslint-disable @next/next/no-img-element */
 import gsap from 'gsap'
import { useEffect } from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";

{/*Reference https://codepen.io/GreenSock/pen/BaZaXVR */}
 export default function Some() {
 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({overwrite: 'auto', duration: 0.3});
    
    let sections = gsap.utils.toArray(".section"),
        currentSection = sections[0];
    
    // when the page resizes, we adjust the height of the body accordingly.
    function setTotalHeight() {
      let h = 0;
      sections.forEach(section => h += section.offsetWidth);
      gsap.set("body", {height: h});
    };
    setTotalHeight();
    ScrollTrigger.addEventListener("refreshInit", setTotalHeight);
    
    
    // create a ScrollTrigger for each section
    sections.forEach((section, i) => {
      // we calculate positions based on the previous ScrollTrigger (if one exists)
      let prevScrollTrigger = ScrollTrigger.getById("st" + (i - 1)),
          tl = gsap.timeline({
            scrollTrigger: {
              id: "st" + i,
              start: () => prevScrollTrigger ? prevScrollTrigger.end : 0,
              end: () => "+=" + section.offsetHeight, // taller sections should take longer to scroll
              scrub: true,
              // when a new section activates (from either direction), set the section accordinglyl.
              onToggle: self => self.isActive && setSection(section),
              invalidateOnRefresh: true,
              markers: true
            }
          });
      tl.to(section, {
        y: () => Math.min(0, window.innerHeight - section.offsetHeight),
        duration: 1,
        delay: 0.05, // add 5% of stillness on each end to make it feel better
        ease: "none",
      })
      .to({}, {duration: 0.05});
    });
    
    function setSection(newSection) {
      if (newSection !== currentSection) {
        gsap.to(currentSection, {autoAlpha: 0});
        gsap.to(newSection, {autoAlpha: 1});
        currentSection = newSection;
      }
    }
    
}, []);

  return (
    <>
   <div className="section one">section 1</div>
<div className="section two">
  <strong>section 2</strong>
  <br />
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, dolor pellentesque feugiat efficitur, enim ligula sollicitudin massa, in ullamcorper odio nibh ac enim. Proin volutpat est libero, vel mollis ante faucibus non. Vivamus accumsan semper auctor. Suspendisse arcu lacus, laoreet in magna eget, rhoncus consequat enim. Nam a gravida est. Duis gravida nisl risus. Aenean blandit purus eros, eleifend sodales nisl porttitor tincidunt. Duis tempor vehicula posuere. Proin vestibulum tortor a nisl interdum sodales.

In hac habitasse platea dictumst. Donec vel consequat mauris. Proin iaculis placerat odio nec dictum. Aenean commodo ex a lorem finibus venenatis. Cras at mollis augue. Integer posuere lacus ligula, in congue mauris egestas euismod. Pellentesque molestie risus non sem imperdiet, sit amet iaculis ligula faucibus. Pellentesque sed sagittis nunc. Aliquam cursus non nunc ut hendrerit. Phasellus sed ligula ipsum. Duis eget felis velit. Pellentesque gravida aliquam pretium. Donec porta ornare gravida.

Nullam nec tempor ante. Sed commodo urna a quam sagittis rutrum. Quisque quis nisl at elit dapibus vehicula a vitae eros. Ut consequat risus at arcu ullamcorper aliquam. In id sapien eu ipsum accumsan convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur mattis lacus vel purus egestas, sit amet molestie velit cursus.

Integer consequat nisi sed lectus hendrerit laoreet. Mauris porta facilisis diam, vel hendrerit nisl. Etiam rhoncus, tortor sit amet convallis porttitor, diam arcu luctus leo, et dictum nunc lacus id enim. Curabitur volutpat rhoncus nisl, quis luctus nibh accumsan a. Nunc mi libero, porta non tristique at, semper eu sem. Duis viverra diam erat, vulputate imperdiet lacus accumsan quis. Curabitur a ornare erat. Phasellus venenatis libero a placerat volutpat. Integer in elit a nunc lacinia posuere quis non diam. Integer sollicitudin pellentesque lacus at consequat. Nunc a purus in felis semper auctor eget tincidunt nisl. Duis neque risus, condimentum non pretium sit amet, ullamcorper at ipsum.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer elementum odio vel congue venenatis. Nullam ornare massa vitae vestibulum mollis. Morbi ac metus a libero vestibulum placerat nec vel sapien. Duis varius sed arcu vel placerat. Sed aliquet nisl quis risus vulputate finibus. Ut rutrum nisi in turpis suscipit, nec suscipit sapien mattis. Cras sed massa vehicula, pharetra libero quis, vulputate diam. Curabitur sem ligula, elementum ac elementum nec, pellentesque eu nulla.

Maecenas quis mauris sed turpis facilisis rutrum. Vestibulum quis odio eget mi luctus pellentesque. Cras malesuada, purus et bibendum feugiat, mauris lorem aliquam lacus, quis tincidunt lectus orci eu tortor. Integer id tellus porta, aliquet eros ac, accumsan odio. Maecenas vitae odio mattis, efficitur arcu et, scelerisque lorem. Nulla lacus magna, vehicula id tellus a, faucibus aliquet libero. Nulla felis nisl, ullamcorper vel leo ut, rhoncus placerat tortor. Aliquam accumsan lectus eu scelerisque dapibus.

Nullam justo tellus, pretium eget accumsan a, blandit vitae magna. Praesent enim nulla, tincidunt ut ultricies vitae, porta cursus sapien. In hac habitasse platea dictumst. Morbi tristique justo id nibh luctus mollis ac id leo. Vestibulum sed volutpat metus. Suspendisse vitae tincidunt est, ac euismod elit. Vestibulum vel finibus libero.

Nam in mollis libero. Donec tempor tortor quis mauris tincidunt, vitae maximus nibh dignissim. In elementum, turpis vitae sagittis malesuada, quam erat tempor eros, a aliquet quam ante et ante. Curabitur varius orci mauris, non dapibus quam pulvinar id. Praesent a orci sit amet tellus placerat tincidunt. Mauris quis odio arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam imperdiet, quam id vehicula mollis, neque nunc auctor ante, at feugiat sapien tellus vitae leo. Donec et suscipit lacus.

Donec vel malesuada mi, tempor varius tellus. Etiam ante justo, vulputate quis placerat eu, tincidunt in tortor. Phasellus eleifend lorem nec dui porta, quis vulputate mauris cursus. Duis tortor velit, ultrices et dolor ac, luctus hendrerit nunc. Integer laoreet risus ac tellus imperdiet, a iaculis augue ornare. Quisque in leo sit amet neque hendrerit porta ut sed nulla. Ut sed posuere magna. Phasellus posuere urna lacus, sed consequat felis vehicula sit amet. Phasellus pretium ex at ante maximus, at consequat nisl elementum. Aliquam nec tellus et magna semper dictum vitae ut urna. Nam porttitor lacinia ante a luctus. Duis volutpat convallis urna quis suscipit. Suspendisse potenti. Fusce vestibulum erat dolor, at molestie felis fermentum ut. Etiam id efficitur nibh, bibendum vulputate velit. Fusce a molestie orci.

Donec nulla quam, scelerisque vel ligula nec, tincidunt bibendum metus. Suspendisse potenti. Ut rutrum metus libero, at maximus est placerat in. Nunc vitae lectus ut risus porttitor ullamcorper. Vivamus sollicitudin libero vitae efficitur aliquam. Integer ut nunc risus. Aliquam quis iaculis magna. Proin velit quam, ullamcorper sed blandit eu, tincidunt ut ex. Aliquam in ligula quis enim vestibulum lacinia ut rhoncus sapien. Pellentesque convallis tellus sed tortor finibus, in lobortis sem fringilla. Nunc id auctor elit. Maecenas id mauris eu metus porta ultricies cursus quis justo. Vestibulum tincidunt eros sit amet elit molestie feugiat sit amet ut libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a purus at tellus ultrices lacinia. Donec gravida ante mauris, eget tincidunt lectus vulputate et.

Pellentesque vitae malesuada orci. Ut elementum tincidunt lacus vel congue. Sed lacinia libero est, ut venenatis risus tincidunt vitae. Aenean tempor aliquet ligula, in cursus ligula condimentum vel. Vestibulum feugiat luctus purus, vel vulputate lorem iaculis et. Mauris sit amet rhoncus lacus. Donec metus quam, aliquet eu erat id, pretium venenatis orci. Suspendisse enim erat, ornare nec sollicitudin sit amet, tristique nec purus. Cras suscipit sed ligula id accumsan. Aliquam commodo nulla felis, nec suscipit nunc rutrum a. Integer ex felis, consectetur a condimentum eget, laoreet quis leo. Vestibulum maximus, sem vitae interdum interdum, ex erat hendrerit mauris, quis imperdiet arcu lacus et orci. In eget dolor quis elit commodo bibendum eget eu odio.

Nam vestibulum, quam ac vestibulum posuere, ex urna hendrerit turpis, a luctus leo massa efficitur sapien. Nullam tempor, erat non finibus luctus, ante nisi finibus est, sit amet egestas massa tortor eget quam. Phasellus ligula mauris, placerat id ipsum a, semper maximus sapien. Mauris tristique sodales tincidunt. Sed quis dolor euismod, feugiat justo nec, feugiat magna. Donec risus diam, pulvinar sit amet erat quis, accumsan mollis est. Maecenas nisi urna, semper et bibendum a, lacinia non sapien. Aenean rutrum dictum ultricies. Aliquam at mattis elit. Vivamus orci ligula, ullamcorper vitae ex quis, molestie suscipit tortor. Aliquam eget fermentum risus. Suspendisse sed odio erat. Morbi non massa porta, laoreet justo a, porta elit. Nulla interdum elementum venenatis.

Nunc vitae sollicitudin nisi. Vivamus neque justo, tempor eu laoreet eu, tincidunt id lorem. Proin id enim mauris. Suspendisse vel sapien a nisl fringilla ultrices. Curabitur magna velit, tincidunt ut ante at, sagittis ornare diam. Maecenas ac turpis felis. In vitae mattis quam, finibus faucibus eros. Quisque tempus, dolor placerat fringilla ullamcorper, justo augue eleifend nulla, quis gravida augue nisi nec mauris. Nam aliquam eros ac diam semper facilisis. In vel ornare nibh. Etiam urna ante, tincidunt sit amet dignissim a, pulvinar vel justo. Etiam fermentum diam nec erat feugiat, id mollis risus fermentum. Nunc scelerisque dolor ut leo dapibus pulvinar. Donec aliquet efficitur massa, non posuere libero. Donec euismod placerat malesuada. Nam interdum efficitur nibh sit amet malesuada.

Donec ornare a massa et commodo. Etiam aliquam venenatis nisl, nec tincidunt nunc sollicitudin vel. Cras sed gravida neque, sed pretium sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur malesuada eu orci vel finibus. Morbi ultrices magna leo, sit amet commodo arcu viverra non. Proin facilisis felis ex, fringilla condimentum turpis pellentesque ac. Ut sed euismod arcu. Ut maximus, nibh a blandit semper, erat mauris varius nunc, eu sodales risus mauris at diam. Aenean quis pretium nisl.

Maecenas et neque justo. Vestibulum sollicitudin lectus est, vel semper velit pharetra sed. Donec sit amet aliquam nisl, vel pellentesque sapien. Aenean tincidunt aliquet sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur tincidunt sapien eget nisl lobortis venenatis. Nunc quis ex consequat, elementum risus eu, vehicula sapien. Maecenas tellus turpis, pulvinar ac urna ut, ultrices imperdiet metus. Vestibulum sodales porttitor libero. Morbi at felis mollis justo posuere varius. Integer vehicula vestibulum tincidunt. Nunc molestie turpis sit amet ullamcorper pretium. Nam vitae metus quis urna luctus bibendum sit amet in tortor. Nam posuere velit at risus scelerisque, at faucibus erat sagittis.

Maecenas posuere nibh non odio lobortis, at rhoncus lacus luctus. Ut nec elementum eros. Mauris bibendum, erat vitae volutpat elementum, quam dolor ultrices mauris, eu venenatis ipsum dui at ex. Integer vulputate iaculis nulla. Suspendisse porta tellus elit, vel maximus mi facilisis eget. Aliquam erat volutpat. Praesent aliquam fermentum mi nec posuere. Nullam laoreet eros luctus, cursus nibh nec, hendrerit justo.

Etiam nunc nunc, imperdiet eu suscipit sed, accumsan eu nunc. Nam efficitur ante et commodo sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam lacinia, massa sed elementum interdum, sem mauris dictum eros, ac porta neque dui vel nulla. Sed enim nulla, volutpat eu congue ac, bibendum at ligula. Mauris ullamcorper ut tellus quis ornare. Suspendisse vel libero congue, dapibus massa et, vulputate nibh. Vivamus iaculis efficitur velit eget ullamcorper. Maecenas lacus felis, semper pretium arcu pulvinar, luctus fringilla nibh. Donec sit amet mauris pharetra, tincidunt justo et, viverra ante. Quisque sed tortor et nulla feugiat imperdiet nec eu libero. Nam varius vitae massa ut porttitor. Praesent quis pretium eros.

Praesent tincidunt libero quis blandit eleifend. Donec in malesuada dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet malesuada lectus. Nunc pretium arcu nisl, at pulvinar enim suscipit accumsan. Sed at ex suscipit, interdum dui sit amet, finibus lectus. Vestibulum efficitur sagittis metus, id fringilla nunc facilisis a. Sed vel posuere nulla. Cras laoreet dictum ex, eget finibus leo dictum ac. Quisque eget eros quis velit placerat viverra et interdum velit. Phasellus ac nunc risus. Suspendisse tempor justo pellentesque nunc pharetra, non consectetur lacus ultrices. In libero risus, gravida eget sollicitudin in, sollicitudin quis mi.

Morbi id eleifend mauris. Integer a mollis libero. In venenatis leo ac leo faucibus, eget vulputate felis ultricies. Curabitur nec nulla eu mauris mattis mollis. Morbi magna est, molestie sed sodales id, accumsan sed diam. Vivamus porta vel ligula ac interdum. Aenean pharetra, diam at tincidunt fringilla, turpis tortor varius velit, nec cursus erat turpis sit amet nibh. Proin pellentesque tempus libero, vitae rhoncus turpis varius et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

In lacus tellus, hendrerit sit amet magna ut, rhoncus accumsan magna. Pellentesque placerat imperdiet tellus nec aliquet. Phasellus id odio malesuada neque cursus tincidunt. Vestibulum et metus risus. Integer venenatis elit purus, vitae sagittis dui eleifend eu. Aliquam volutpat tincidunt orci, vel condimentum tellus suscipit a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin tincidunt euismod consequat. Aenean molestie orci ut consectetur consequat. Ut arcu libero, tincidunt eget leo sit amet, tincidunt gravida justo. Aliquam aliquam risus lacus, vitae vehicula est dignissim eu. Nunc eu blandit massa, ac lacinia lorem. Pellentesque interdum massa mattis, tristique diam in, aliquet dolor. Maecenas vel congue elit.

Maecenas vel pellentesque ligula. Mauris ut augue vel eros aliquam scelerisque. Curabitur sed magna ut quam efficitur semper sed a tortor. Integer nec hendrerit urna. Nullam laoreet, mi a venenatis lacinia, elit purus porta lacus, sit amet sodales ipsum tortor a enim. In ac metus eros. Nulla in ultricies nisl, eu fringilla nunc. Aenean ut accumsan augue. Vestibulum finibus in ex id dictum. Sed sollicitudin nibh et blandit ornare. Quisque ultrices, est vel consectetur sagittis, ex lorem lacinia metus, at tincidunt libero turpis sagittis ex.

Suspendisse porttitor dui vel lorem cursus, vel pellentesque nibh luctus. Nam vel gravida tellus, sed blandit augue. Maecenas elementum sem id vestibulum maximus. Quisque vitae consequat tortor, ac fermentum libero. Quisque aliquet feugiat purus nec placerat. Proin eget commodo risus. Nulla a augue ut eros rutrum ultrices. Etiam commodo facilisis finibus. Mauris laoreet, ipsum ut euismod finibus, ante ipsum accumsan massa, nec suscipit nisl eros imperdiet ipsum. Ut vestibulum consectetur pulvinar. Integer a tortor erat.

Nullam semper risus tortor, et vestibulum enim viverra sed. Vivamus at massa eleifend, pulvinar ligula et, posuere leo. Vivamus tristique, ligula sit amet consectetur finibus, justo magna imperdiet ante, et accumsan eros quam a sapien. Etiam at dolor quis turpis elementum dapibus nec ac est. Fusce ac ipsum libero. Morbi justo est, rutrum luctus bibendum ac, dictum eu enim. Duis placerat euismod metus. Nullam in posuere turpis, ut aliquet felis. Donec lobortis facilisis urna, eu placerat ex pharetra vitae. In hac habitasse platea dictumst. Nulla a mauris ut leo sagittis pulvinar. In sed lorem imperdiet, ornare mauris quis, sollicitudin lacus. Phasellus nec dapibus lectus, sit amet tristique sapien. Integer vel rhoncus dolor, quis ultricies massa. Donec vestibulum dolor mauris, vel ultricies lacus efficitur vel.

Quisque semper condimentum mattis. Donec pretium arcu eu interdum sollicitudin. Pellentesque at pellentesque diam, a pretium libero. Quisque ultrices luctus orci a viverra. In a velit ac diam pharetra interdum vitae et felis. Vestibulum fringilla facilisis est. In commodo augue sed ligula egestas suscipit. Vivamus aliquet metus ac facilisis tincidunt. Aliquam imperdiet convallis tortor, id varius quam consectetur et. Maecenas a egestas urna. Proin ut suscipit tortor. Morbi quis aliquet ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Nam malesuada neque in neque ultrices consectetur sed eget lorem. Praesent lacinia eu nibh quis maximus. Pellentesque a ultrices odio. Vestibulum commodo, diam in tempus euismod, sapien risus facilisis est, elementum sollicitudin turpis diam eget ligula. Etiam cursus eget est id congue. Sed id felis eu justo dignissim dignissim et vitae erat. Nam consectetur iaculis mi, non scelerisque massa consequat at. Sed vitae nunc sem. Donec et consequat nibh, ac hendrerit tellus. Maecenas vitae lectus odio. Praesent a bibendum sem. Vestibulum gravida feugiat dolor, non vehicula libero dapibus sit amet.

Aliquam sodales purus non purus faucibus, sit amet consequat risus iaculis. Phasellus convallis commodo diam, eu pellentesque est laoreet et. Pellentesque vehicula auctor diam nec sollicitudin. Nunc vel sem at leo pharetra suscipit et at felis. Duis ante ipsum, vehicula eu aliquet id, malesuada et odio. Duis eget felis elementum, faucibus erat ac, egestas felis. Proin maximus, dui a egestas semper, nibh nibh laoreet nunc, non viverra mauris ante sit amet dui. Nam malesuada sagittis velit, non lacinia est efficitur ut. Curabitur dapibus laoreet vulputate. Aliquam faucibus, tortor lobortis faucibus vulputate, risus magna luctus dui, quis fringilla est nibh in ligula.

Ut faucibus libero et lacus sodales, et efficitur diam tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis luctus, turpis sit amet finibus facilisis, risus libero aliquam libero, vel lacinia nibh sem id tortor. Integer ut sapien arcu. Maecenas condimentum mi dapibus volutpat egestas. Integer eleifend libero ac interdum egestas. Aenean ex turpis, sodales ut tempor at, iaculis non leo. Integer id velit ac sapien aliquet pharetra non et urna. Praesent porttitor scelerisque elit lobortis volutpat. Curabitur tellus augue, suscipit sed purus fringilla, vestibulum dignissim nibh. Nunc interdum non lacus et luctus. Suspendisse est turpis, gravida vel rhoncus a, luctus ac risus.

Morbi id sollicitudin urna. Aenean pretium, lacus in fringilla molestie, eros ante efficitur justo, at tincidunt ipsum velit tristique tortor. Sed egestas porttitor augue at rhoncus. Fusce sed feugiat sem. Duis ut aliquet purus, sed gravida risus. Proin laoreet dolor in ultrices iaculis. Maecenas id varius neque. Fusce lorem ligula, aliquet sed ullamcorper ac, semper vitae ex. Cras sed dolor sem. Vivamus posuere porttitor orci a pharetra. Nulla interdum convallis dui, id dignissim erat pulvinar eget. Integer mollis, mauris sed pharetra cursus, purus est tempus mi, in porta libero metus id est. Aenean posuere luctus finibus. In laoreet nibh sit amet nisi scelerisque rutrum. Etiam ultrices lacus lectus, ut tempor elit mollis in. Cras aliquet, nunc eu facilisis fermentum, felis augue porttitor est, quis luctus ligula felis ornare lacus.

Suspendisse interdum cursus viverra. Sed pulvinar tincidunt consectetur. Morbi sapien libero, laoreet in nibh ac, efficitur tristique mauris. Aenean sodales, tellus in blandit vehicula, sapien sem imperdiet ligula, a vestibulum est nisl eu ex. Donec malesuada ex a facilisis mollis. Aliquam at semper ex. Maecenas cursus diam a ligula auctor fringilla.

Pellentesque eget ornare risus, hendrerit iaculis ante. Proin volutpat interdum pretium. Maecenas semper nunc vel neque hendrerit, nec scelerisque mauris accumsan. Sed ac elit gravida, convallis neque quis, vestibulum neque. Sed nec ornare justo, faucibus fermentum velit. Mauris convallis libero vitae lobortis faucibus. Aenean vel pretium odio. Aliquam a magna magna. Donec congue maximus vehicula. Curabitur consectetur lectus ut ante vehicula accumsan. Morbi arcu dui, feugiat sit amet nulla sit amet, convallis dignissim sapien. Curabitur orci turpis, faucibus id hendrerit in, consequat nec augue. Etiam scelerisque accumsan lacus tincidunt hendrerit. Duis odio velit, scelerisque id lorem nec, sagittis vestibulum augue.
</div>
<div className="section three">
  section 3
</div>

 
 
     <style
      dangerouslySetInnerHTML={{
          __html: `
          * {
          box-sizing: border-box;
        }
        
        body { 
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        
        .section {
          font-size: 20px;
          padding: 40px;
          position: fixed;
          width: 100%;
          min-height: 100%;
          top: 0;
          left: 0;
        }
        
        .section.one {
          background: lightblue;
        }
        
        .section.two {
          background: pink;
        }
        
        .section.three {
          background: lightcoral;
        }
        
        .section:not(.one) {
          opacity: 0;
          visibility: hidden;
        } 
        
          
     
                   `
      }}
    />
 
 </>
 )
}