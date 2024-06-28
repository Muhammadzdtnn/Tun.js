

        (function(window) {

      window.googletag = window.googletag || { cmd: [] };
      googletag.cmd = googletag.cmd || [];

      let rewardedSlot;

      // styles_pre
      let colour = "background: linear-gradient(170.1deg, #9D85FF 0%, #CF8BF3 100%)!important;";
      let clean = "background: rgba(245, 245, 245, 1)!important;";
      let black = "background: linear-gradient(180deg, #0F0F0F 0%, rgba(15, 15, 15, 0) 100%)!important;";
      let target = "";
    
      googletag.cmd.push(() => {
        if (target.length === 0) {
        rewardedSlot = googletag.defineOutOfPageSlot(
          "/22697551224/Ads_full",
          googletag.enums.OutOfPageFormat.REWARDED,
        );
          
} else {
        rewardedSlot = googletag.defineOutOfPageSlot(
          "/22697551224/Ads_full",
          googletag.enums.OutOfPageFormat.REWARDED,
        ).setTargeting('target', ['']);
}
        
        if ('onTimer' == 'onExit') {
          window.history.pushState({}, null, null);
        }

        


        // Slot returns null if the page or device does not support rewarded ads.
        if (rewardedSlot) {
          
          window.dismissRewardedAd170983604565ea070d5136f = function() {
          googletag.destroySlots([rewardedSlot]);
      }

          rewardedSlot.addService(googletag.pubads());

          googletag.pubads().addEventListener("rewardedSlotReady", (event) => {


          if ('onTimer' === 'onExit') {
                window.addEventListener('popstate', () => {
                event.makeRewardedVisible();
                console.log('User clicked back button');
                applyStyles();

              });
            }
          else if ('onTimer' === 'onCall'){

                window.showVDVTRewardedAd = function() {
                event.makeRewardedVisible();
                      console.log('User clicked back button');
                       applyStyles();
                }
          }
          else {
            var delay = (''||1) * 1000;
                    setTimeout(() => {
                       event.makeRewardedVisible();
                        applyStyles();

                    }, delay);
                
                
            }


          });

          googletag.pubads().addEventListener("rewardedSlotClosed", dismissRewardedAd170983604565ea070d5136f);

          googletag.pubads().addEventListener("rewardedSlotGranted", (event) => {
            // Automatically close the ad by destroying the slot.
            // Remove this to force the user to close the ad themselves.
            // dismissRewardedAd();
            if ('disabled' !== 'disabled') {
              if (rewardedSlot) {
                  googletag.destroySlots([rewardedSlot]);
                }
            }

            const reward = event.payload;
            // Tracking link removed as per instructions
          });

          googletag.enableServices();
          googletag.display(rewardedSlot);
      if (googletag.pubads().isInitialLoadDisabled()) {
                  googletag.pubads().refresh([rewardedSlot]);
      }
          //rollback
googletag.pubads().addEventListener("slotRenderEnded", (event) => {
  const slot = event.slot;


  if (slot === rewardedSlot) {

 

var containsAds = !event.isEmpty; 
    console.log(containsAds);
if (containsAds === true) {
   var slotId = slot.getSlotElementId();
          
  document.getElementById(slotId).style.cssText += (black+'');
            // Code related to keyValue parsing and external fallback removed as per instructions
        }

  console.group("Slot", slot.getSlotElementId(), "finished rendering.");

  // Log details of the rendered ad.
  console.log("Advertiser ID:", event.advertiserId);
  console.log("Campaign ID:", event.campaignId);
  console.log("Company IDs:", event.companyIds);
  console.log("Creative ID:", event.creativeId);
  console.log("Creative Template ID:", event.creativeTemplateId);
  console.log("Is backfill?:", event.isBackfill);
  console.log("Is empty?:", event.isEmpty);
  console.log("Label IDs:", event.labelIds);
  console.log("Line Item ID:", event.lineItemId);
  console.log("Size:", event.size);
  console.log("Slot content changed?", event.slotContentChanged);
  console.log("Source Agnostic Creative ID:", event.sourceAgnosticCreativeId);
  console.log("Source Agnostic Line Item ID:", event.sourceAgnosticLineItemId);
  console.log("Yield Group IDs:", event.yieldGroupIds);
  console.groupEnd();
  }
});

// rollback
          
        }
       else {
          console.log("no rewarded ad");
        }
      });


      
      function applyStyles() {
      // Credit: Mateusz Rybczonec

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 15;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

            document.getElementById("app234").innerHTML = `
<div id="base-timer" class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

startTimer();

function onTimesUp() {
    document
      .getElementById("app234")
      .classList.add("hidden");

  clearInterval(timerInterval);
  setTimeout(() => {
    
        document
      .getElementById("close")
      .classList.remove("hidden");
    }, 1100);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    var timerlabel = document.getElementById("base-timer-label");
    if (timerlabel != null) {
          document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
     );
    }

    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  return `${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
          var pp = document.getElementById("base-timer-path-remaining") !== null;
  if (pp){
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
      }
  else {}
  } else if (timeLeft <= warning.threshold) {
      var pp = document.getElementById("base-timer-path-remaining") !== null;
  if (pp){
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
      }
  else {}
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  var pp = document.getElementById("base-timer-path-remaining") !== null;
  if (pp){
    document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
  }
  else {}
}

      }
    
        googletag.cmd.push(function () {
      });  
      }(window));
    
