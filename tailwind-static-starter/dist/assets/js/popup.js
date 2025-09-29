  function openOfflinesubscription() {
    document.getElementById("Offlinesubscription").classList.remove("hidden");
  }  
  
    function closeOfflinesubscription() {
    document.getElementById("Offlinesubscription").classList.add("hidden");
  }

  
  function openPopup() {
    document.getElementById("popup").classList.remove("hidden");
  }

  function closePopup() {
    document.getElementById("popup").classList.add("hidden");
  }

    function opengiftPopup() {
    document.getElementById("giftPopup").classList.remove("hidden");
  }

   function closePopup() {
    document.getElementById("giftPopup").classList.add("hidden");
  }

    function openbundleProduct() {
    document.getElementById("bundle-products").classList.remove("hidden");
      document.body.style.overflow = "hidden";
  }


     function closePopup() {
    document.getElementById("bundle-products").classList.add("hidden");
      document.body.style.overflow = "";
  }


// Close when clicking backdrop (black area)
document.getElementById("bundle-products").addEventListener("click", function(e) {
  if (e.target === this) {
    closePopup();
  }
});
 