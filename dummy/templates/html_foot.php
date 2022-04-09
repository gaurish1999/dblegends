<script src="js/notify.min.js"></script>
<script src="js/sweetalert/sweetalert2.min.js"></script>
<script src="js/angular.min.js"></script>
<script src="js/angular-route.min.js"></script>
<script type='text/javascript' src='js/loading-bar.min.js'></script>
<script src="https://unpkg.com/@uirouter/angularjs@1.0.7/release/angular-ui-router.min.js"></script>
<!-- <script src="https://checkout.razorpay.com/v1/checkout.js"></script> -->
<script>
angular.module('ngCart.config', [])
.constant('APIServer', {
    'SERVER': 'https://reportingserver.iretaill.com/',
    'STORE_ID' : <?php echo $CONFIG_store; ?>,
    //'QoACurrencySymbol': '$',
    'QoACurrencySymbol': '₹',
    'MBO' : <?php echo $mbo; ?>,
    'STORE_NAME': `<?php echo $storename; ?>`,
  }
);
</script>

<?php if (!$isBOT) { ?>
  <script src="<?php echo $APPLICATION_JS; ?>"></script>
  <script src="plugins/owlcarousel/owl.carousel.min.js"></script>
<?php } ?>

<script>
    $(window).on('load', function() {
        $(".loader").fadeOut("slow");
    });
</script>

</html>
