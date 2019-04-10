/* 
 * Application : Innovate
 * ClassName   : sys_script_client
 * Created On  : 2019-03-05 09:18:30
 * Created By  : admin
 * Updated On  : 2019-03-05 09:18:30
 * Updated By  : admin
 * URL         : /sys_script_client.do?sys_id=21119e74db403300a53cfbef299619db
 */
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }

   //Type appropriate comment here, and begin script below
	alert('You have selected: ' + newValue);
}
