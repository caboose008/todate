const c_codesStr = "AO,AT,AU,AW,AX,BA,BE,BG,BO,BR,BS,CA,CH,CN,CO,CR,CU,CZ,DE,DK,DO,EC,ES,FI,FR,FR-A,GB,GB-ENG,GB-NIR,GB-SCT,GB-WLS,GH,GR,GT,HK,HN,HR,HU,ID,IE,IN,IL,IS,IT,JP,KZ,LS,LT,LU,MG,MQ,MT,MU,MX,MZ,NG,NL,NO,NZ,NZ-AUK,NZ-BOP,NZ-CAN,NZ-GIS,NZ-HKB,NZ-MBH,NZ-MWT,NZ-NSN,NZ-NTL,NZ-OTA,NZ-STL,NZ-TAS,NZ-TKI,NZ-WGN,NZ-WKO,NZ-WTC,PE,PK,PH,PL,PR,PT,PY,RE,RO,RU,SC,SE,SG,SI,SK,SL,ST,TN,TR,UA,US,UY,VE,ZA,ZW";
const c_namesStr = "Angola,Austria,Australia,Aruba,Åland Islands,Bosnia and Herzegovina,Belgium,Bulgaria,Bolivia,Brazil,The Bahamas,Canada,Switzerland,China,Colombia,Costa Rica,Cuba,Czech Republic,Germany,Denmark,Dominican Republic,Ecuador,Spain,Finland,France,Alsace,United Kingdom,England,Northern Ireland,Scotland,Wales,Ghana,Greece,Guatemala,Hong Kong,Honduras,Croatia,Hungary,Indonesia,Ireland,India,Israel,Iceland,Italy,Japan,Kazakhstan,Lesotho,Lithuania,Luxembourg,Madagascar,Martinique,Malta,Mauritius,Mexico,Mozambique,Nigeria,Netherlands,Norway,New Zealand,Auckland,Bay of Plenty,Canterbury,Gisborne,Hawkes Bay,Marlborough,Manawatu-Wanganui,Nelson,Northland,Otago,Southland,Tasman,Taranaki,Wellington,Waikato,West Coast,Peru,Pakistan,Philippines,Poland,Puerto Rico,Portugal,Paraguay,Réunion,Romania,Russia,Seychelles,Sweden,Singapore,Slovenia,Slovakia,Sierra Leone,Sao Tome and Principe,Tunisia,Turkey,Ukraine,United States,Uruguay,Venezuela,South Africa,Zimbabwe";


export const getCountriesList = function(){
	let countries = {
		names : c_namesStr.split(","),
		codes : c_codesStr.split(",")
	};	

	return countries;

};
