(function(){
  var b=document.querySelector('.burger'),n=document.getElementById('nav');
  if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');});
  function $(i){return document.getElementById(i);}
  function val(f,name){var x=f.querySelector('input[name='+name+']:checked');return x?x.value:null;}
  // 1. Salad builder
  var BASE={leaves:['Mixed salad leaves','60 g','leafy'],spinach:['Baby spinach','60 g','spinach'],grain:['Cooked quinoa','120 g','quinoa'],slaw:['Shredded cabbage and carrot','100 g','crunchy slaw']};
  var PROT={chickpeas:['Chickpeas, drained','120 g','chickpea'],egg:['Boiled egg, quartered','1–2','egg'],chicken:['Grilled chicken, sliced','100 g','chicken'],feta:['Feta, crumbled','50 g','feta'],beans:['Black beans, drained','120 g','black bean']};
  var CRUNCH={seeds:['Toasted pumpkin or sunflower seeds','1 tbsp'],nuts:['Walnuts, roughly chopped','15 g'],croutons:['Croutons','a handful'],apple:['Apple, thinly sliced','½']};
  var EXTRA=[['Cherry tomatoes, halved','6'],['Cucumber, diced','¼'],['Red onion, thinly sliced','a few slices']];
  var DR={lemon:['Lemony',[['Olive oil','2 tbsp'],['Lemon juice','1 tbsp'],['Dijon mustard','½ tsp'],['Chopped parsley or dill','1 tbsp']],'Shake in a jar with salt and pepper.'],
    balsamic:['Balsamic',[['Olive oil','2 tbsp'],['Balsamic vinegar','1 tbsp'],['Honey','½ tsp']],'Whisk until glossy; great with spinach and feta.'],
    tahini:['Creamy tahini',[['Tahini','1 tbsp'],['Lemon juice','1 tbsp'],['Water','1–2 tbsp'],['Garlic, grated','a little']],'Whisk, adding water until pourable; it thickens at first, then loosens.'],
    lime:['Lime and chilli',[['Olive oil','1½ tbsp'],['Lime juice','1 tbsp'],['Chilli flakes','a pinch'],['Chopped coriander','1 tbsp']],'Perfect with black beans, chicken and slaw.']};
  var sbf=$('sbf');
  function salad(){if(!sbf)return;var B=BASE[val(sbf,'base')],P=PROT[val(sbf,'prot')],C=CRUNCH[val(sbf,'crunch')],D=DR[val(sbf,'dress')];
    $('sb-n').textContent=D[0]+' '+P[2]+' '+(B[2]==='leafy'?'salad':B[2]+' bowl');
    $('sb-t').innerHTML='<span class="tag">Serves 1</span><span class="tag">10 minutes</span><span class="tag">'+(val(sbf,'prot')==='chicken'?'High protein':'Vegetarian')+'</span>';
    $('sb-l').innerHTML=[B,P].concat(EXTRA,[C]).map(function(x){return '<li><span>'+x[0]+'</span><b>'+x[1]+'</b></li>';}).join('');
    $('sb-d').innerHTML='<b>'+D[0]+' dressing:</b> '+D[1].map(function(x){return x[1]+' '+x[0].toLowerCase();}).join(', ')+'. '+D[2];}
  if(sbf){sbf.addEventListener('change',salad);salad();}
  // 2. Ripeness checker: [ripe sign, speed up, slow down, store]
  var RP={avocado:['Yields slightly to gentle pressure; stem nub comes away easily and is green underneath.','Paper bag with a banana or apple at room temperature.','Keep in the fridge once ripe.','Counter until ripe, then fridge for 2–3 days.'],
    banana:['Yellow with a few brown freckles; sweetest when spotty.','Paper bag at room temperature.','Separate from the bunch and wrap the stems.','Room temperature; ripe bananas can go in the fridge (skins darken, fruit stays fine).'],
    tomato:['Deep, even colour, slight give and a fragrant smell at the stem.','Paper bag on the counter, stem side down.','Cooler room, out of the sun.','Room temperature; only chill when very ripe.'],
    mango:['Fragrant at the stem and gives slightly when pressed; colour varies by variety.','Paper bag at room temperature.','Fridge once ripe.','Counter to ripen, then fridge for up to 5 days.'],
    peach:['Sweet smell and slight give near the stem; no green around the shoulders.','Paper bag, stem side down, at room temperature.','Fridge once ripe.','Counter until ripe, then fridge for 3–5 days.'],
    pear:['Press gently near the stem: ripe when it gives slightly.','Paper bag with a banana.','Fridge slows ripening.','Ripen at room temperature, then fridge.'],
    melon:['Heavy for its size, sweet smell at the blossom end and a slight give.','Leave on the counter for a day or two.','Fridge once cut or ripe.','Whole at room temperature; cut melon covered in the fridge for 3–4 days.'],
    kiwi:['Gives slightly when pressed, like a ripe peach.','Paper bag with an apple.','Fridge keeps firm kiwis for weeks.','Fridge once ripe.'],
    pineapple:['Golden at the base, sweet smell and a leaf that pulls out fairly easily.','Pineapples don’t ripen much after picking, so choose well.','Store upside down for a day to spread sweetness.','Whole at room temperature 1–2 days; cut pieces in the fridge.'],
    berries:['Bright, plump and fully coloured, with no white shoulders on strawberries.','Berries don’t ripen after picking.','Keep chilled, unwashed, in a single layer.','Fridge for 2–3 days; wash just before eating.']};
  var NM={avocado:'Avocado',banana:'Banana',tomato:'Tomato',mango:'Mango',peach:'Peach',pear:'Pear',melon:'Melon',kiwi:'Kiwi',pineapple:'Pineapple',berries:'Berries'};
  var rpf=$('rpf');
  function ripe(){if(!rpf)return;var k=val(rpf,'item'),R=RP[k];$('rp-n').textContent=NM[k];
    $('rp-g').innerHTML='<div><b>Ripe when</b><small>'+R[0]+'</small></div><div><b>Speed it up</b><small>'+R[1]+'</small></div><div><b>Slow it down</b><small>'+R[2]+'</small></div>';
    $('rp-s').innerHTML='<b>Storage:</b> '+R[3];}
  if(rpf){rpf.addEventListener('change',ripe);ripe();}
  // 3. Flavour pairings: [herbs], [spices/extras], idea
  var HP={tomato:[['Basil','Oregano','Thyme'],['Garlic','Olive oil','Balsamic','Chilli'],'Slice ripe tomatoes, drizzle with olive oil, scatter with torn basil and a pinch of salt.'],
    carrot:[['Coriander','Parsley','Dill'],['Cumin','Honey','Orange','Ginger'],'Roast carrots with cumin and honey, then finish with chopped coriander.'],
    potato:[['Rosemary','Chives','Parsley'],['Garlic','Smoked paprika','Lemon'],'Toss new potatoes with rosemary, garlic and olive oil and roast until crisp.'],
    courgette:[['Mint','Basil','Parsley'],['Lemon zest','Garlic','Parmesan','Chilli'],'Grill courgette ribbons and dress with lemon, mint and a little Parmesan.'],
    mushroom:[['Thyme','Parsley','Tarragon'],['Garlic','Butter','Soy sauce'],'Fry mushrooms in a hot pan until golden, then add garlic, thyme and a splash of soy.'],
    chicken:[['Tarragon','Thyme','Rosemary'],['Lemon','Garlic','Paprika','Mustard'],'Roast chicken thighs with lemon slices, garlic and thyme.'],
    fish:[['Dill','Parsley','Chives'],['Lemon','Capers','Butter','Fennel'],'Bake fish with lemon slices and dill, then spoon over melted butter and capers.'],
    lentils:[['Parsley','Coriander','Bay'],['Cumin','Turmeric','Lemon','Tomato'],'Simmer red lentils with cumin and turmeric and finish with lemon and coriander.'],
    strawberry:[['Mint','Basil'],['Balsamic','Black pepper','Lime','Yogurt'],'Toss strawberries with a drop of balsamic, black pepper and torn mint.'],
    apple:[['Sage','Thyme'],['Cinnamon','Nutmeg','Maple','Sharp cheese'],'Bake apple slices with cinnamon and a drizzle of maple syrup.']};
  var hpf=$('hpf');
  function pair(){if(!hpf)return;var k=val(hpf,'ing'),H=HP[k];$('hp-n').textContent=k.charAt(0).toUpperCase()+k.slice(1)+' loves…';
    $('hp-l').innerHTML=H[0].map(function(x){return '<span>'+x+'</span>';}).join('')+H[1].map(function(x){return '<span class="sp">'+x+'</span>';}).join('');
    $('hp-i').innerHTML='<b>Try tonight:</b> '+H[2];}
  if(hpf){hpf.addEventListener('change',pair);pair();}
  // contact & cookies
  var cf=$('cform');
  if(cf)cf.addEventListener('submit',function(ev){ev.preventDefault();if(cf.website.value)return;if(!cf.checkValidity()){cf.reportValidity();return;}
    var body='Name: '+cf.name.value+'\nEmail: '+cf.email.value+'\nTopic: '+cf.topic.value+'\n\n'+cf.message.value;
    window.location.href='mailto:'+cf.dataset.to+'?subject='+encodeURIComponent('Website enquiry: '+cf.topic.value)+'&body='+encodeURIComponent(body);
    var s=$('fm');s.hidden=false;s.textContent='Your email app should now open with your message ready to send. If it doesn’t, please email us directly at '+cf.dataset.to+'.';});
  var c=$('cookie'),v=null;try{v=localStorage.getItem('ffi_cookie');}catch(e){}
  if(c&&!v)c.classList.add('show');
  document.querySelectorAll('[data-cookie]').forEach(function(x){x.addEventListener('click',function(){try{localStorage.setItem('ffi_cookie',x.dataset.cookie);}catch(e){}c.classList.remove('show');});});
  var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
