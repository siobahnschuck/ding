'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let foodItems = [
      {
        name: 'almond milk',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.swansonvitamins.com%2Fimages%2Fitems%2F150%2FBLD002.png&f=1&nofb=1',
        category: 'dairy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'asiago cheese',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fshop.sartoricheese.com%2Fcmsstatic%2Fproduct%2F10143%2FFontina_Quarter_smallfile_cheeseshop.png%3Bjsessionid%3D4A5F62D4CDAF9F6667BA179D023421F6%3Fresize-width-amount%3D168%26resize-height-amount%3D112%26resize-high-quality%3Dtrue%26resize-maintain-aspect-ratio%3Dfalse%26resize-reduce-only%3Dtrue&f=1&nofb=1',
        category: 'dairy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'butter',
        image:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2016%2F07%2FButter-PNG-Clipart-180x180.png&f=1&nofb=1',
        category: 'dairy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'cheddar cheese',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mcdonalds.com%2Fcontent%2Fdam%2Fusa%2Fnfl%2Fnutrition%2Fingredients%2Fregular%2Fshredded_cheddar_jack_cheese.png&f=1&nofb=1',
        category: 'dairy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'heavy cream',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhorizon.com%2Fwp-content%2Fuploads%2Fheavy-cream.png&f=1&nofb=1',
        category: 'dairy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'cream cheese',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Figav3-metcdn-com.global.ssl.fastly.net%2Fcontent%2Fuploads%2Fsites%2F2%2F2016%2F10%2F25042105%2Fsoftened-cream-cheese-150x150.png&f=1&nofb=1',
        category: 'dairy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'goat cheese',
        image:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhaydayencyclopedia.weebly.com%2Fuploads%2F6%2F1%2F9%2F8%2F61987563%2F1567357.png&f=1&nofb=1',
        category: 'dairy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'margerine',
        image:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2016%2F07%2FButter-Free-PNG-Image-180x180.png&f=1&nofb=1',
        category: 'dairy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'mozzerella cheese',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0669%2F0045%2Fproducts%2Ftresmozz340g659_large.png%3Fv%3D1434858778&f=1&nofb=1',
        category: 'dairy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'oat milk',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnew-lozo-prod.s3.amazonaws.com%2Foffers%2Fimages%2Foffer_77123.png&f=1&nofb=1',
        category: 'dairy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'parmesan cheese',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Figav3-metcdn-com.global.ssl.fastly.net%2Fcontent%2Fuploads%2Fsites%2F2%2F2016%2F10%2F26024142%2Fparmesan-cheese-150x150.png&f=1&nofb=1',
        category: 'dairy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'pepperjack cheese',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd3dx3xtlhhlssb.cloudfront.net%2Fcms%2Fingredients%2Fsmall%2F_175xAUTO_crop_center-center%2FNEW-Jack-Cheese.png&f=1&nofb=1',
        category: 'dairy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'ricotta cheese',
        image:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Frobertsboxedmeats.ca%2Fwp-content%2Fuploads%2F2011%2F06%2Fricotta-emballage1-150x150.png&f=1&nofb=1',
        category: 'dairy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'sour cream ',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F24%2Fd7%2F91%2F24d79159e52806ea0d5764fd0072e05a.png&f=1&nofb=1',
        category: 'dairy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'soy milk',
        image:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.dreamplantbased.com%2Fwp-content%2Fuploads%2F2016%2F01%2Fproduct-soy-dream-vanilla-enriched-150x150.png&f=1&nofb=1',
        category: 'dairy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'whole milk',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.milkmeansmore.org%2Fwp-content%2Fuploads%2F2018%2F03%2Fwhole-milk.png&f=1&nofb=1',
        category: 'dairy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'avocado',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Fruits/Avocado.png',
        category: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'banana',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Fruits/Banana.png',
        category: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'blueberry',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Fruits/Blueberry.png',
        category: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'cantaloupe',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Fruits/Muskymelon.png',
        category: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'cherry',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Fruits/Cherry.png',
        category: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'cherry tomato',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mindstick.com%2FKidsZone%2FContent%2FImages%2FVegetables%2FCherry_Tomatoes.png&f=1&nofb=1',
        category: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'dragonfruit',
        image:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.dragonfruitindia.in%2Fimages%2Fnewsite%2Fprodhome1.png&f=1&nofb=1',
        category: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'red apple',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Fruits/Apple.png',
        category: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'grannysmith apple',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frawjuiceguru.com%2Fwp-content%2Fuploads%2FappleUSDA-150x150.png&f=1&nofb=1',
        category: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'apricot',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Fruits/Apricot.png',
        category: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'grapefruit',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fwww.truelovescam.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fgrapefruit-300x1901-150x150.png&f=1&nofb=1',
        category: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'guava',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Fruits/Guava.png',
        category: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'grapes',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Fruits/Grapes.png',
        category: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'honeydew',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Femojipedia-us.s3.dualstack.us-west-1.amazonaws.com%2Fthumbs%2F120%2Fapple%2F198%2Fmelon_1f348.png&f=1&nofb=1',
        category: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'jackfruit',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Fruits/Jackfruit.png',
        category: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'kiwi',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Fruits/Kiwi.png',
        category: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'lychee',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Fruits/Lychee.png',
        category: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'mango',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Fruits/Mango.png',
        category: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'orange',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Fruits/Orange.png',
        category: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'pear',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Fruits/Pear.png',
        category: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'pineapple',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Fruits/Pineapple.png',
        category: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'pomegranate',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Fruits/Pomgranate.png',
        category: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'raspberry',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Fruits/Rasberry.png',
        category: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'blackberry',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Fruits/Blackberry.png',
        category: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'roma tomato',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.italian-rose.com%2Fsites%2Fdefault%2Ffiles%2Fphotos%2Froma_tomato_ir.png&f=1&nofb=1',
        category: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'star fruit',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Fruits/Starfruit.png',
        category: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'strawberry',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Fruits/Strawberry.png',
        category: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'vine tomato',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Tomato.png',
        category: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'watermelon',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Fruits/Watermelon.png',
        category: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'basil',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fphohoa.com%2Fwp-content%2Fuploads%2F2018%2F06%2Fbasil-150x150.png&f=1&nofb=1',
        category: 'herb',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'chive',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Chives.png',
        category: 'herb',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'cilantro',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sembrar100.com%2Fwp-content%2Fuploads%2Fcilantro-2029498_960_720-150x150.png&f=1&nofb=1',
        category: 'herb',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'dill',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Dill.png',
        category: 'herb',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'garlic',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Garlic.png',
        category: 'herb',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'mint ',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fv.fastcdn.co%2Fu%2F658b456f%2F20576851-0-mint-leaves-5.png&f=1&nofb=1',
        category: 'herb',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'parsley',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyogiproducts.com%2Fwp-content%2Fuploads%2F2014%2F08%2Fparsley-leaf-ingredient-photo-150x150.png&f=1&nofb=1',
        category: 'herb',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'rosemary',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.avinaturals.com%2Fwp-content%2Fuploads%2F2015%2F05%2Fcertified-organic-rosemary-essential-oil-150x150.png&f=1&nofb=1',
        category: 'herb',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'bison',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fb6%2F94%2Fd4%2Fb694d47e7c9d96074a1245cd36c8f7f0.png&f=1&nofb=1',
        category: 'protein',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'black beans',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd3dx3xtlhhlssb.cloudfront.net%2Fcms%2Fingredients%2Fsmall%2F_175xAUTO_crop_center-center%2FNEW-Black-Beans.png&f=1&nofb=1',
        category: 'protein',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'chicken bone broth',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.salsify.com%2Fimage%2Fupload%2Fs--99TjsQLU--%2Fh_175%2Cw_175%2Cc_fit%2Cfl_keep_iptc.clip%2Cg_center%2Cf_auto%2Fklj3f3rsyn0zllewqu0r.png&f=1&nofb=1',
        category: 'protein',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'chicken',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgamepedia.cursecdn.com%2Fscum_gamepedia_en%2Fthumb%2F6%2F6b%2FPlucked_Chicken.png%2F128px-Plucked_Chicken.png%3Fversion%3D288e2ec5db5ee366c06967a7eed99805&f=1&nofb=1',
        category: 'protein',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'eggs',
        image:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffreepngdownload.com%2Fimage%2Fegg-png-free-download-1.png&f=1&nofb=1',
        category: 'protein',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'fish',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Farkids.net%2Fimage%2Fitem%2F120%2Fraw-fish-meat.png&f=1&nofb=1',
        category: 'protein',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'ground beef',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.albertsons-media.com%2Fis%2Fimage%2FABS%2FL4_1_19_1_5%3F%24ecom-aisles-tile-png-alpha%24&f=1&nofb=1',
        category: 'protein',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'kidney beans',
        image:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FKidney-Beans-PNG-HD-Image-180x180.png&f=1&nofb=1',
        category: 'protein',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'lamb',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhilltopmeats.com.au%2Fwp-content%2Fuploads%2F2014%2F02%2FEZYCARVE.png&f=1&nofb=1',
        category: 'protein',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'pinto beans',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F128kkc1lz0bb4acz5k4bbbrw-wpengine.netdna-ssl.com%2Fwp-content%2Fuploads%2F2017%2F10%2FMenu-TopIt-pintobeans.png&f=1&nofb=1',
        category: 'protein',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'pork loin',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.shop.loblaws.ca%2Fproducts%2F20822907%2Fb1%2Fen%2Ffront%2F20822907_front_a01.png&f=1&nofb=1',
        category: 'protein',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'quinoa',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.niceandnatural.co.nz%2Fthemes%2Fniceandnatural%2Fimg%2Fkey-ingredients%2Fquinoa.png&f=1&nofb=1',
        category: 'protein',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'salmon',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblackhawkpetcare.com%2Fmedia%2F1126%2Fingredient-salmon.png%3Fwidth%3D180%26mode%3Dcrop%26quality%3D77&f=1&nofb=1',
        category: 'protein',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'shrimp',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.albertsons-media.com%2Fis%2Fimage%2FABS%2FL4_1_19_3_4%3F%24ecom-aisles-tile-png-alpha%24&f=1&nofb=1',
        category: 'protein',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'lobster',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1198%2F2742%2Ffiles%2FseafoodHead_transparent.png%3F11055110029267161334&f=1&nofb=1',
        category: 'protein',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'turkey',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Ffreepngimages.com%2Fwp-content%2Fuploads%2F2016%2F12%2Funcooked-turkey-no-background.png%3Fresize%3D150%252C150&f=1&nofb=1',
        category: 'protein',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'tofu',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fleikaipokebowl.com%2Fwp-content%2Fuploads%2F2020%2F07%2Ftofu-1.png&f=1&nofb=1',
        category: 'protein',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'seitan',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.jumpseller.com%2Fstore%2Fgaleria-aguasanta%2F6470310%2Fbistec-vegetal-500g.png%3F1595702844&f=1&nofb=1',
        category: 'protein',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'acorn squash',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Acorn_Squash.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'artichoke',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Artichoke.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'arugula ',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Arugula.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'asparagus',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Asparagus.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'beet',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Beetroot.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'bokchoy',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Bokchoy.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'broccoli',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Broccoli.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'brussel sprouts',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Brussels_Sprouts.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'butternut squash',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Butternut_Squash.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'cabbage ',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Cabbage.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'carrot',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Carrot.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'cauliflower',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Cauliflower.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'celery',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Celery.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'chayote',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Chayote_Squash.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'collard green',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Collard-Greens.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'cucumber',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Cucumber.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'eggplant',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Eggplant.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'endive',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Endive.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'fennel',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Fennel.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'fingerling potato',
        image:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.greatertater.com%2Fimages%2Fpotato-laratte.png&f=1&nofb=1',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'green bell pepper',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Ffreepngimages.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fgreen-pepper-png-image.png%3Fresize%3D150%252C150&f=1&nofb=1',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'iceberg lettuce',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Lettuce.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'jalapeno pepper',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Jalapeno_Pepper.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'kale',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Kale.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'leek',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Leeks.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'lemon',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Lemon.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'lime',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Lime.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'mustard greens',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Mustard_Greens.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'okra',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Okra.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'oyster mushroom',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wixstatic.com%2Fmedia%2F332044_e3579289b7944da3b35f31f1d69c8c85~mv2.png%2Fv1%2Ffill%2Fw_220%2Ch_221%2Cal_c%2Cusm_0.66_1.00_0.01%2FOyster%2520Transparent.png&f=1&nofb=1',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'parsnip',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Parsnip.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'peas',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Pea.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'pumpkin',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Pumpkin.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'radish',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Radish.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'red bell pepper',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.P6Db1T4DtB-yuZKO4-7l5AAAAA%26pid%3DApi&f=1',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'red cabbage',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Radicchio.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'red chili pepper',
        image:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2016%2F04%2FPepper-PNG-Image-180x180.png&f=1&nofb=1',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'red onion',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Onion.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'red potato',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fshawneemilling.com%2Fwp-content%2Fuploads%2F2014%2F12%2Fred-potatoes.png&f=1&nofb=1',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'romaine lettuce',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Butternut_Lettuce.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'russet potato',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.seedpotatoes.ca%2Fwp-content%2Fuploads%2F2015%2F12%2Fgoldrush-180x180.png&f=1&nofb=1',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'rutabaga',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Rutabaga.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'scallion',
        image:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftasteasianfood.com%2Fwp-content%2Fuploads%2F2015%2F03%2Fspring-onion-150x150.png&f=1&nofb=1',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'shallots',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Shallots.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'potabella mushroom',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbotanicahealth.com%2Fwp-content%2Fuploads%2F2018%2F08%2FPortabella-Mushrooms-113x85.png&f=1&nofb=1',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'snow peas',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Green_Soybeans.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'spinach',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Spinach.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'spring onion',
        image:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftasteasianfood.com%2Fwp-content%2Fuploads%2F2015%2F03%2Fspring-onion-150x150.png&f=1&nofb=1',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'string bean',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Green_Beans.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'sweet potato',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/sweet_potato.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'swiss chard',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Swiss_Chard.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'taro',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Taro.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'turnip',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgamepedia.cursecdn.com%2Fatlas_gamepedia_en%2Fthumb%2F3%2F31%2FWild_Turnip.png%2F128px-Wild_Turnip.png%3Fversion%3D903cf5209cc362e3c34c057df6580468&f=1&nofb=1',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'white mushroom',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Mushroom.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'white onion',
        image:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.greenharvest.com.au%2FImages%2FSeeds%2FOnionEarlyWhiteGrano.png&f=1&nofb=1',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'yellow bell pepper',
        image:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.healing-journeys-energy.com%2Fimages%2FColor-Yellow-Pepper.png&f=1&nofb=1',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'yellow corn',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Corn.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'yellow onion',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wixstatic.com%2Fmedia%2F765a88_4ea2df8a2932484f960989bac44f13f7~mv2.png%2Fv1%2Ffill%2Fw_186%2Ch_174%2Cal_c%2Cusm_0.66_1.00_0.01%2Fyellow-onion-shallot-vegetarian-cuisine-.png&f=1&nofb=1',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'yellow squash',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Summer_Squash.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'yucca',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Yucca_Root.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'yukon gold potato',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Yukon%20Gold_Potatoes.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'zucchini ',
        image:
          'https://www.mindstick.com/KidsZone/Content/Images/Vegetables/Zucchini.png',
        category: 'vegetable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'rice',
        image:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2018%2F04%2FRice-PNG-File-180x180.png&f=1&nofb=1',
        category: 'grain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'all purpose flour',
        image:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftopratedkitchen.com%2Fwp-content%2Fuploads%2F2016%2F01%2FAll-Purpose-Flour.png&f=1&nofb=1',
        category: 'grain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'lentils',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0167%2F5359%2F0372%2Fproducts%2F1053_1_bulk_180x.png%3Fv%3D1562906860&f=1&nofb=1',
        category: 'grain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'popcorn',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipart.info%2Fimages%2Fminicovers%2F1559830187popcorn-png-transparent-6.png&f=1&nofb=1',
        category: 'grain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'boxed pasta',
        image:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.digitaliano.net%2Fdigitaliano_materiali_online%2Fpasta%2FPenneThumbnail.png&f=1&nofb=1',
        category: 'grain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'couscous',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fengros.aarstiderne.com%2Fmedia%2F2045%2Fcouscous-fuldkorn-2369-750-750-50.png%3Fanchor%3Dcenter%26mode%3Dcrop%26height%3D196%26rnd%3D132445589870000000&f=1&nofb=1',
        category: 'grain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'baking powder',
        image:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffosterclark.com%2Fwp-content%2Fuploads%2F2016%2F06%2Ffc-baking-powder-6x12x110g-tin-18m-pe-eng-arb-150x150.png&f=1&nofb=1',
        category: 'grain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'baking soda',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.shop.loblaws.ca%2Fproducts%2F20063491001%2Fb1%2Fen%2Ffront%2F20063491001_front_a01.png&f=1&nofb=1',
        category: 'grain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'sugar',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.free-emoticons.com%2Ffiles%2Ffoods-emoticons%2F6592.png&f=1&nofb=1',
        category: 'grain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'salt',
        image:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2%2FSalt-PNG-File-Download-Free-180x180.png&f=1&nofb=1',
        category: 'grain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'active dry yeast',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.shop.loblaws.ca%2Fproducts%2F20309430002%2Fb1%2Fen%2Ffront%2F20309430002_front_a01.png&f=1&nofb=1',
        category: 'grain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'olive oil',
        image:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2017%2F03%2FOlive-Oil-PNG-HD-180x180.png&f=1&nofb=1',
        category: 'oil',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'vegetable oil',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbaguiooil.com%2Fassets%2Fimgs%2Fproduct-images%2Fprod_img_1488245815_RIUZG.png&f=1&nofb=1',
        category: 'oil',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'sesame oil',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.swansonvitamins.com%2Fimages%2Fitems%2F150%2FSWF056.png&f=1&nofb=1',
        category: 'oil',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'coconut oil',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.swansonvitamins.com%2Fimages%2Fitems%2F150%2FNTV043.png&f=1&nofb=1',
        category: 'oil',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('foodItems', foodItems)
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('foodItems')
  }
}
