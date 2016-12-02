document.addEventListener('DOMContentLoaded', function() {
  var response = {
    "items": [{
      "id": "0B7_nu7V8Jt84d3g1ME05Z3R2QU0"
    }, {
      "id": "0Bwx-OwnNeIvwVk1DTEpnR0J6VHc"
    }, {
      "id": "0Bwx-OwnNeIvwblBHLVEza0hxY2s"
    }, {
      "id": "0Bwx-OwnNeIvwTkZZVXp0dDg4bXc"
    }, {
      "id": "0Bwx-OwnNeIvwZTN1YzZrcm53eFE"
    }, {
      "id": "0Bwx-OwnNeIvwYkZ5ZXpjWHhKcFk"
    }]
  };

  var imageIds = response.items.map(function(item) {
      url="http://drive.google.com/uc?export=view&id=" + item.id;
      return '<a href="' + theurl + '" title=' + item.caption + '><img src="' theurl + '" width = "100" height="200"></a>'
  });

  document.getElementById('aGallery').insertAdjacentHTML('afterbegin', imageIds.join(''));
});
