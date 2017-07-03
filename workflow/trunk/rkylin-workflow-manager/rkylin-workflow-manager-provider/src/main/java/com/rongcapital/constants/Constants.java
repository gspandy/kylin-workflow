package com.rongcapital.constants;
/**
 * @Description:
 *
 * @author       likun
 * @Create Time: 2015年7月1日上午9:55:20
 */
public class Constants {

	/** 日期格式 */
	// yyyy-MM-dd HH:mm:ss
	public static final String DATE_FORMAT_YYYYMMDDHHMMSS = "yyyy-MM-dd HH:mm:ss";
	// yyyy-MM-dd HH:mm:ss
	public static final String DATE_FORMAT_YYYYMMDDHHMMSSSSS = "yyyy-MM-dd HH:mm:ss.SSS";
	public static final String DATE_FORMAT_YYYYMMDD = "yyyy-MM-dd";
	/** 字符集 */
	// UTF-8
	public static final String CHARSET_UTF8 = "UTF-8";
	// GBK
	public static final String CHARSET_GBK = "GBK";

	/** 数据格式 */
	// XML
	public static final String DATA_PROTOCOL_TYPE_XML = "xml";
	// JSON
	public static final String DATA_PROTOCOL_TYPE_JSON = "json";
	
	/** 签名方式 */
	// MD5
	public static final String SIGN_TYPE_MD5 = "md5";

	/** 系统参数名 */
	// method
	public static final String SYS_PARAM_METHOD = "method";
	// format
	public static final String SYS_PARAM_FORMAT = "format";
	// session
	public static final String SYS_PARAM_SESSION = "session";
	// timestamp
	public static final String SYS_PARAM_TIMESTAMP = "timestamp";
	// app_key
	public static final String SYS_PARAM_APP_KEY = "app_key";
	// sign
	public static final String SYS_PARAM_SIGN = "sign";
	
	// 协议状态_失效
	public static final int AGMT_STATUS_0 = 0;
	// 协议状态_生效
	public static final int AGMT_STATUS_1 = 1;
	
	//开始 start
	public static final String START = "start";
	//开始 end
	public static final String END = "end";
	//异常
	public static final String Exception = "exception";
	
	public static final String APPNAME = "authorization_server_";
	
	public static final String FAPPNAME = "rkylin-robot-platform-manager_";
	
	//系统异常
	public static final String SYSTEM_ERR = "系统异常";
	//操作成功
	public static final String SYSTEM_SUCCESS = "成功";
	
	/**合作平台编码*/
	public static final String KZ_CODE = "M000004";
	public static final String BB_CODE = "M000020";
	
}

