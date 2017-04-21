(function ($) {

  $('.loadmore').on('click', 'a', function (e) {

      e.preventDefault();
      var _this = $(this),
          _parent = _this.parents('.menu-list-wrapper'),
          _target = _parent.find('.menu-list'),
          _set = _target.find('.menu-item.hidden').slice(0, 2); // Herre 2 is the limit
      if (_set.length) {
          _set.animate({opacity: 0});
          _set.promise().done(function () {
              _set.removeClass('hidden');
              _set.show().animate({opacity: 1}, 1000);
          });
      } else {
          _this.text('No more item to display');
      }
      return false;

  });
    /*-------------------------------------
     Window load function
     -------------------------------------*/
    $(window).on('load', function () {

        // Page Preloader
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });

        //jQuery for Isotope initialization
        var $container = $('#inner-isotope');
        if ($container.length > 0) {
            var $isotope = $container.find('.featuredContainer').isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });

            $container.find('.isotop-classes-tab').on('click', 'a', function () {
                var $this = $(this);
                $this.parent('.isotop-classes-tab').find('a').removeClass('current');
                $this.addClass('current');
                var selector = $this.attr('data-filter');
                $isotope.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
        }
    });// end window load function


    var lang = window.navigator.language.substring(0,2);
    const i18n_obj = {
        locale: lang,
        isReplace: true,
        messages: {
          en: {
            banner1_title: 'A stellar Anchor for ETH',
            banner1_content:'（1）Once transferred to a continuous dividend into digital assets (ETH, XLM), continuous access to income'
            +'<br>'+
            '（2）Safe, convenient and efficient payment to adapt to all kinds of scenes safe, convenient and efficient payment'
            +'<br>'+
            '（3）Flexible and transparent asset exchange ETH, XLM two types of flexible asset exchange, open and transparent',
            banner1_btn:'Get Started',
            banner2_title:'No trust, anonymous trading',
            banner2_content:'Due to the fact that there is no centralized control of the distributed characteristics, the point to point asset transaction.',
            banner2_btn:'Get Started',
            section1_title1:'Sustainable income',
            section1_content1:'Transferred to digital assets, the proportion of Stellar network access to the original assets (XLM) revenue',
            section1_title2:'Safe and efficient',
            section1_content2:'Based on block chain technology, 5S quasi real-time and efficient payment',
            section1_title3:'Transparent exchange',
            section1_content3:'Distributed exchange, chain linked transaction, to avoid the risk of a variety of black box operations',
            section2_title:'what is the ledgerpayment?',
            section2_content:'Based on the Stellar block chain network, to achieve safe and efficient payment, transparent asset exchange and continuous and reliable income and other key features for a variety of applications to provide safe, convenient and efficient account payment platform.',
            section2_end:'Trust, make the world a better place.<br>'+
            'Right, we deserve to be trusted!',
            section3_head:'How to do?',
            section3_title1:'Add Trust',
            section3_content1:'1, this is the premise of any operation<br>'+
            '2, add address stellar in admin*ledgerpayment.com<br>'+
            'or<br>'+
            'GD57VZIJJBYH36ORWY7MZBLVCYUIOEMQWYX5PQELA7YBPLKQDYRSLVCO trust asset code is ETH<br>'+
            '3, you can start the ETH (Ethernet currency) of the charge transfer',
            section3_title2:'Recharge',
            section3_content2:'1, the use of the wallet to the 0x30100bda3c874751b5ea958a98b7f9c6c8d1f2df address transfer<br>'+
            '2, in the memo field input need to recharge amount<br>'+
            '3, we will as soon as possible for your stellar address ETH recharge',
            section3_title3:'Withdrawal',
            section3_content3:'1, to the address<br>'+
            'Admin*ledgerpayment.com<br>'+
            'or<br>'+
            'GD57VZIJJBYH36ORWY7MZBLVCYUIOEMQWYX5PQELA7YBPLKQDYRSLVCO transfer ETH<br>'+
            '2, note the need to mention the amount of currency and the star of the public address',
            section4_head:'Guides',
            section4_title1:'what is stellar network?',
            section4_title2:'Why I need to exchange ETH of stellar?',
            section4_title3:'How to recharge ETH of stellar?',
            section4_title4:'How to carry out asset transactions in the stellar on the distributed exchange?',
          },
          zh: {
            banner1_title: 'stellar的以太币锚点',
            banner1_content:'（1）一次转入，持续分红 一次转入数字资产（ETH、XLM），持续获取收益 '
            +'<br>'+
            '（2）安全、便捷、高效支付 适应各类场景的安全、便捷和高效支付 '
            +'<br>'+
            '（3）灵活透明资产兑换 ETH、XLM两类资产灵活兑换，公开透明',
            banner1_btn:'现在开始！',
            banner2_title:'无需信任，匿名的资产交易',
            banner2_content:'基于区块链网络，由于其实分布式特性没有中心化机构控制，点对点的资产交易。',
            banner2_btn:'现在开始！',
            section1_title1:'持续收益',
            section1_content1:'转入数字资产，按比例获取Stellar网络增发的原生资产（XLM）收益',
            section1_title2:'安全高效',
            section1_content2:'基于区块链技术，5S左右准实时高效支付',
            section1_title3:'透明兑换',
            section1_content3:'分布式交易所，链上撮合交易，避免各种暗箱操作风险',
            section2_title:'什么是来付？',
            section2_content:'基于Stellar区块链网络，实现安全高效支付、透明资产兑换和持续可靠收益等关键功能，为各类应用提供安全、便捷和高效的账户支付平台。',
            section2_end:'信任，让这个世界变得美好!<br>'+
            '恰好，我们值得信任！',
            section3_head:'我们能做什么？',
            section3_title1:'Trust',
            section3_content1:'1、这是任何操作的前提<br>'+
            '2、在stellar中添加地址admin*ledgerpayment.com<br>'+
            '或<br>'+
            'GD57VZIJJBYH36ORWY7MZBLVCYUIOEMQWYX5PQELA7YBPLKQDYRSLVCO信任资产代码为ETH<br>'+
            '3、即可开始ETH（以太币）的充转提',
            section3_title2:'充值',
            section3_content2:'1、使用以太钱包向0x30100bda3c874751b5ea958a98b7f9c6c8d1f2df地址转账<br>'+
            '2、在备注字段中输入需要充值的金额<br>'+
            '3、我们将尽快为您的stellar地址进行ETH充值',
            section3_title3:'提现',
            section3_content3:'1,向地址<br>'+
            'Admin*ledgerpayment.com<br>'+
            '或<br>'+
            'GD57VZIJJBYH36ORWY7MZBLVCYUIOEMQWYX5PQELA7YBPLKQDYRSLVCO转账ETH<br>'+
            '2、备注需要提现的恒星币金额和以太坊公钥地址',
            section4_head:'攻略',
            section4_title1:'什么是stellar（恒星）网络？',
            section4_title2:'为什么要兑换stellar（恒星网络）上的ETH?',
            section4_title3:'如何使用以太币与stellar（恒星）网络上的ETH资产兑换？',
            section4_title4:'如何在stellar（恒星）上的分布式交易所进行资产交易？',
          }
        }
      }
    const di18n = new DI18n(i18n_obj)

    $("#en").click(function(){
        lang = "en"
        const di18n = new DI18n(i18n_obj)
        console.log(lang)
    });
    $("#zh").click(function(){
        lang = "zh"
        const di18n = new DI18n(i18n_obj)
        console.log(lang)
    });
})(jQuery);
