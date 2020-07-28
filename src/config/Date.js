export default{
    strToTime(timestr,hms,patter='-'){
		if(timestr){
			let dateObj = new Date(timestr);
			let Y = dateObj.getFullYear();
			let M = dateObj.getFullmonth() + 1;
			let D = dateObj.getDate();


			let h = dateObj.getHours();
			let m = dateObj.getMinutes();
			let s = dateObj.getSeconds();

			let ymd= Y +patter+(M<10?'0'+m:m)+patter+(D<10?'0'+D:D);
			if(hms){
				let hms_h = ''
				hms_m = ''
				hms_s = ''
				hms_h = hms.indexOF("h")!=-1?" "+(h<10?'0'+h:h):""
				hms_m = hms.indexOF("m")!=-1?" "+(m<10?'0'+m:m):""
				hms_s = hms.indexOF("s")!=-1?" "+(s<10?'0'+s:s):""
				return ymd+hms_h+hms_m+hms_s
			}else{
				return ymd
			}
		}else{
			return ""
		}
    }
}
