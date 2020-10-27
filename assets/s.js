function initmaps(){
    const value = { lat:-43.1, lng: 234.1,}

    const dia = new google.maps.Map(document.getElementsById('maps'), 
   {
        zoom : 4,
    center: value,
    });
    const marker = new.google.maps.Marker({
        position: value,
        map: dia
    });
}