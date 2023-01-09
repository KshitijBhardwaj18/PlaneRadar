
      function initMap() {
        // Algorithim
        const lat = parseFloat(getUrlParameter('latitude'));
        const lng = parseFloat(getUrlParameter('longitude'));
        const h = parseFloat(getUrlParameter('altitude'));
        const v = parseFloat(getUrlParameter('speed'));

        let t = Math.sqrt(2*h/9.8);
        let d = v*t;







        //Map code
        const center = {lat: lat, lng: lng};
        const map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: center
        });
        new google.maps.Circle({
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: 'white',
          fillOpacity: 0.35,
          map: map,
          center: center,
          radius: d
        });
      }
      function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
      }
    
