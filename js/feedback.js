
$(document).ready(function(){
    document.getElementById('bzfd-feedbackBtn').addEventListener('click', function() {
        console.log('clicked')
        const modal = document.getElementById('bzfd-modal');
        if (modal) {
          modal.style.display = 'block';
          return;
        }
      
        const bzfdElements = document.querySelectorAll('[id^="bzfd"], .bzfd-class');
      
        let highestZIndex = 0;
        bzfdElements.forEach(element => {
          const zIndex = parseInt(window.getComputedStyle(element).zIndex);
          if (zIndex > highestZIndex) {
            highestZIndex = zIndex;
          }
        });
      
        const modalElement = document.createElement('div');
        modalElement.setAttribute('id', 'bzfd-modal');
        modalElement.setAttribute('style', 'display: block; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(255, 255, 255, 0.9); z-index: 1000000 !important;');
      
        const closeButton = document.createElement('button');
        closeButton.setAttribute('id', 'bzfd-closeBtn');
        closeButton.setAttribute('style', 'position: absolute; top: 5px; right: 5px; background-color: white; border: none; font-size: 18px; cursor: pointer;color:red;border-radius:0px;');
        closeButton.innerHTML = '&#10006;'; 
      
        modalElement.appendChild(closeButton);
      
        const loadingMessage = document.createElement('h4');
        loadingMessage.innerText = 'Loading...';
        loadingMessage.setAttribute('style', 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);font-family:courier;');
      
        modalElement.appendChild(loadingMessage);
      
        const iframeContent = document.createElement('iframe');
        iframeContent.setAttribute('id', 'bzfd-iframeContent');
        iframeContent.setAttribute('src', 'https://mwfbiz.com/feedback');
        iframeContent.setAttribute('frameborder', '0');
        iframeContent.setAttribute('style', 'width: 100%; height: 100%; display: none;');
      
        modalElement.appendChild(iframeContent);
      
        document.body.appendChild(modalElement);
      
        iframeContent.addEventListener('load', function() {
          loadingMessage.style.display = 'none';
          iframeContent.style.display = 'block';
        });
      
        modalElement.style.display = 'block';
      
      });
      
      document.addEventListener('click', function(event) {
        var modal = document.getElementById('bzfd-modal');
        if (
          (!modal.contains(event.target) && event.target.id !== 'bzfd-feedbackBtn') ||
          event.target.id === 'bzfd-closeBtn'
        ) {
          modal.style.display = 'none';
        }
      });

      window.onscroll = function() {scrollFunction();scrollFunctionhead()};
      function scrollFunction(){
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
         $('#bzfd-feedbackBtn').slideDown('slow');
        } else {
          $('#bzfd-feedbackBtn').slideUp('slow');
        }
      }
});
