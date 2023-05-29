var DESTINATIONS = [
	{
		code: 'ewr',
		name: 'Newark Liberty International Airport (EWR)',
		city: 'Newark, USA - New Jersey 🇺🇸',
		pos: [40.70340156126785, -74.17330276840164],
		hubs: ['sfo', 'iah', 'mia', 'hnl', 'ord'],
		isHub: true,
		arrRwy: 22,
		depRwy: 22,
		tz: 'US/Eastern'
	},
	{
		code: 'sfo',
		name: 'San Francisco International Airport (SFO)',
		city: 'San Francisco, USA - California 🇺🇸',
		pos: [37.62141455145011, -122.37878377625846],
		hubs: ['ewr', 'iah', 'mia', 'hnl', 'ord'],
		isHub: true,
		arrRwy: 28,
		depRwy: 28,
		tz: 'US/Pacific'
	},
	{
		code: 'iah',
		name: 'George Bush Intercontinental Airport (IAH)',
		city: 'Houston, USA - Texas 🇺🇸',
		pos: [29.99029394928301, -95.33691148715191],
		hubs: ['ewr', 'sfo', 'mia', 'hnl', 'ord'],
		isHub: true,
		arrRwy: 8,
		depRwy: 15,
		tz: 'US/Central'
	},
	{
		code: 'mia',
		name: 'Miami International Airport (MIA)',
		city: 'Miami, USA - Florida 🇺🇸',
		pos: [25.796412980391715, -80.28700802739922],
		hubs: ['ewr', 'sfo', 'iah', 'hnl', 'ord'],
		isHub: true,
		arrRwy: 8,
		depRwy: 8,
		tz: 'US/Eastern'
	},
	{
		code: 'hnl',
		name: 'Daniel K. Inouye International Airport (HNL)',
		city: 'Honolulu, USA - Hawaii 🇺🇸',
		pos: [21.319087239318254, -157.9254318902438],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
		isHub: true,
		arrRwy: 8,
		depRwy: 8,
		tz: 'US/Hawaii'
	},
	{
		code: 'ord',
		name: 'O\'Hare International Airport (ORD)',
		city: 'Chicago, USA - Illinois 🇺🇸',
		pos: [41.980694394637, -87.90899793532991],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		isHub: true,
		arrRwy: 28,
		depRwy: 27,
		tz: 'US/Central'
	},
	{
		name: 'Albuquerque International Airport (ABQ)',
		city: 'Albuquerque, USA - New Mexico 🇺🇸',
		pos: [35.04446359549329, -106.61291166771365],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Kotoka International Airport (ACC)',
		city: 'Accra, Ghana 🇬🇭',
		pos: [5.606084818402552, -0.1681342315152777],
		hubs: ['mia'],
		tz: 'Africa/Accra'
	},
	{
		name: 'Auckland Airport (AKL)',
		city: 'Auckland, New Zealand 🇳🇿',
		pos: [-37.008565657401164, 174.7847156217281],
		hubs: ['hnl'],
		tz: 'Pacific/Auckland'
	},
	{
		name: 'Albany International Airport (ALB)',
		city: 'Albany, USA - New York 🇺🇸',
		pos: [42.74795631522345, -73.80264653273483],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Houari Boumediene Airport (ALG)',
		city: 'Algiers, Algeria 🇩🇿',
		pos: [36.69712417026543, 3.20821173847129],
		hubs: ['mia'],
		tz: 'Africa/Algiers'
	},
	{
		name: 'Amsterdam Schiphol Airport (AMS)',
		city: 'Amsterdam, The Netherlands 🇳🇱',
		pos: [52.310623851948954, 4.768263669222851],
		hubs: ['ewr'],
		tz: 'Europe/Amsterdam'
	},
	{
		name: 'Ted Stevens International Airport (ANC)',
		city: 'Anchorage, USA - Alaska 🇺🇸',
		pos: [61.171332648, -149.991162702],
		hubs: ['ewr', 'sfo', 'iah'],
		tz: 'US/Alaska'
	},
	{
		name: 'V.C. Bird International Airport (ANU)',
		city: 'Saint John\'s, Antigua and Barbuda 🇦🇬',
		pos: [17.141264458109006, -61.79075921641097],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Stockholm Arlanda Airport (ARN)',
		city: 'Stockholm, Sweden 🇸🇪',
		pos: [59.64946534644474, 17.93417522058218],
		hubs: ['ewr'],
		tz: 'Europe/Stockholm'
	},
	{
		name: 'Athens International Airport (ATH)',
		city: 'Athens, Greece 🇬🇷',
		pos: [37.93572283626069, 23.948437055281335],
		hubs: ['ewr'],
		tz: 'Europe/Athens'
	},
	{
		name: 'Hartsfield-Jackson Atlanta International Airport (ATL)',
		city: 'Atlanta, USA - Georgia 🇺🇸',
		pos: [33.64083507608079, -84.42787180090849],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl', 'ord'],
		tz: 'US/Eastern'
	},
	{
		name: 'Queen Beatrix International Airport (AUA)',
		city: 'Oranjestad, Aruba 🇦🇼',
		pos: [12.502909500135036, -70.00820204601975],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Austin-Bergstrom International Airport (AUS)',
		city: 'Austin, USA - Texas 🇺🇸',
		pos: [30.19868847903938, -97.66571921787173],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'El Dorado International Airport (BOG)',
		city: 'Bogota, Colombia 🇨🇴',
		pos: [4.701527767834316, -74.14601141660555],
		hubs: ['iah'],
		tz: 'America/Bogota'
	},
	{
		name: 'Boise Airport (BOI)',
		city: 'Boise, USA - Idaho 🇺🇸',
		pos: [43.56613372250894, -116.22244467737012],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Boston Logan International Airport (BOS)',
		city: 'Boston, USA - Massachusetts 🇺🇸',
		pos: [42.365961658704904, -71.00960315045923],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Eastern'
	},
	{
		name: 'Barcelona-El Prat Airport (BCN)',
		city: 'Barcelona, Spain 🇪🇸',
		pos: [41.29799278042036, 2.0833798949812197],
		hubs: ['ewr'],
		tz: 'Europe/Madrid'
	},
	{
		name: 'L.F. Wade International Airport (BDA)',
		city: 'Hamilton, Bermuda 🇧🇲',
		pos: [32.359855537423016, -64.70471205965694],
		hubs: ['ewr', 'mia'],
		tz: 'Atlantic/Bermuda'
	},
	{
		name: 'Berlin Branderburg Airport (BER)',
		city: 'Berlin, Germany 🇩🇪',
		pos: [52.36421598862855, 13.509032947271669],
		hubs: ['ewr'],
		tz: 'Europe/Berlin'
	},
	{
		name: 'Nashville International Airport (BNA)',
		city: 'Nashville, USA - Tennessee 🇺🇸',
		pos: [36.126169659792566, -86.67743567520559],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Bradley International Airport (BDL)',
		city: 'Hartford, USA - Connecticut 🇺🇸',
		pos: [41.938985209387795, -72.68590265544461],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Western Nebraska-Scottsbluff Regional Airport (BFF)',
		city: 'Scottsbluff, USA - Nebraska 🇺🇸',
		pos: [41.87180880453483, -103.5942995049976],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Grantley Adams International Airport (BGI)',
		city: 'Christ Church, Barbados 🇧🇧',
		pos: [13.080035627493604, -59.48774184440369],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Birmingham-Shuttlesworth International Airport (BHM)',
		city: 'Birmingham, USA - Alabama 🇺🇸',
		pos: [33.5624358209084, -86.75405090040849],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Billings-Logan International Airport (BIL)',
		city: 'Billings, USA - Montana 🇺🇸',
		pos: [45.80363522704425, -108.53800003259418],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Brisbane Airport (BNE)',
		city: 'Brisbane, Australia 🇦🇺',
		pos: [-27.39418580574182, 153.1218517553009],
		hubs: ['hnl'],
		tz: 'Australia/Brisbane'
	},
	{
		name: 'Brussels Airport (BRU)',
		city: 'Brussels, Belgium 🇧🇪',
		pos: [50.90105310968497, 4.485595855926779],
		hubs: ['ewr'],
		tz: 'Europe/Brussels'
	},
	{
		name: 'Brasília International Airport (BSB)',
		city: 'Brasília, Brazil 🇧🇷',
		pos: [-15.869654340657481, -47.91706316214675],
		hubs: ['iah'],
		tz: 'Brazil/East'
	},
	{
		name: 'Burlington International Airport (BTV)',
		city: 'Burlington, USA - Vermont 🇺🇸',
		pos: [44.470755128608445, -73.1516788038435],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Buffalo Niagara International Airport (BUF)',
		city: 'Buffalo, USA - New York 🇺🇸',
		pos: [42.93973729622188, -78.72948524437224],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Hollywood Burbank Airport (BUR)',
		city: 'Burbank, USA - California 🇺🇸',
		pos: [34.19832105435531, -118.35736068695542],
		hubs: ['sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Baltimore/Washington International Airport (BWI)',
		city: 'Baltimore, USA - Maryland 🇺🇸',
		pos: [39.177536943139835, -76.66830640614698],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Eastern'
	},
	{
		name: 'Bozeman Yellowstone International Airport (BZN)',
		city: 'Bozeman, USA - Montana 🇺🇸',
		pos: [45.77835940397085, -111.16142041964636],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Akron-Canton Airport (CAK)',
		city: 'Akron, USA - Ohio 🇺🇸',
		pos: [40.91539520193488, -81.4415358425859],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Paris Charles de Gaulle Airport (CDG)',
		city: 'Paris, France 🇫🇷',
		pos: [49.01088754570143, 2.5481856293293754],
		hubs: ['ewr', 'sfo'],
		tz: 'Europe/Paris'
	},
	{
		name: 'Charleston International Airport (CHS)',
		city: 'Charleston, USA - South Carolina 🇺🇸',
		pos: [32.89249643, -80.037666516],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Eastern Iowa Airport (CID)',
		city: 'Cedar Rapids, USA - Iowa 🇺🇸',
		pos: [41.88633815541166, -91.70700758853724],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Cleveland Hopkins International Airport (CLE)',
		city: 'Cleveland, USA - Ohio 🇺🇸',
		pos: [41.405886997309366, -81.85371669778253],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Charlotte Douglas International Airport (CLT)',
		city: 'Charlotte, USA - North Carolina 🇺🇸',
		pos: [35.214358753004724, -80.94714294071665],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Eastern'
	},
	{
		name: 'John Glenn Columbus International Airport (CMH)',
		city: 'Columbus, USA - Ohio 🇺🇸',
		pos: [39.99990700422163, -82.88685483700165],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Mohammed V International Airport (CMN)',
		city: 'Casablanca, Morocco 🇲🇦',
		pos: [33.370015580895306, -7.5857562888435845],
		hubs: ['mia'],
		tz: 'Africa/Casablanca'
	},
	{
		name: 'Colorado Springs Airport (COS)',
		city: 'Colorado Springs, USA - Colorado 🇺🇸',
		pos: [38.80179559142115, -104.70258244384314],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Cape Town International Airport (CPT)',
		city: 'Cape Town, South Africa 🇿🇦',
		pos: [-33.971498570998, 18.60206364117647],
		hubs: ['mia'],
		tz: 'Africa/Johannesburg'
	},
	{
		name: 'West Virginia International Yeager Airport (CRW)',
		city: 'Charleston, USA - West Virginia 🇺🇸',
		pos: [38.37143955636435, -81.59352849463419],
		hubs: ['ewr'],
		tz: 'US/Eastern'
	},
	{
		name: 'Cancún International Airport (CUN)',
		city: 'Cancún, Mexico 🇲🇽',
		pos: [21.04198345163572, -86.87396332895656],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
		tz: 'America/Cancun'
	},
	{
		name: 'Curaçao International Airport (CUR)',
		city: 'Willemstad, Curaçao 🇨🇼',
		pos: [12.189339619252113, -68.96166422979832],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Cincinnati/Northern Kentucky International Airport (CVG)',
		city: 'Cincinnati, USA - Ohio 🇺🇸',
		pos: [39.05091119818685, -84.66749507901761],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Cassidy International Airport (CXI)',
		city: 'Kiritimati, Kiribati 🇰🇮',
		pos: [1.9867631645901074, -157.35021966168168],
		hubs: ['hnl'],
		tz: 'Pacific/Kiritimati'
	},
	{
		name: 'Daytona Beach International Airport (DAB)',
		city: 'Daytona Beach, USA - Florida 🇺🇸',
		pos: [29.18042531670668, -81.05629836579335],
		hubs: ['iah'],
		tz: 'US/Eastern'
	},
	{
		name: 'Indira Gandhi International Airport (DEL)',
		city: 'New Delhi, India 🇮🇳',
		pos: [28.556463675916227, 77.10008650432476],
		hubs: ['sfo'],
		tz: 'Asia/Kolkata'
	},
	{
		name: 'Denver International Airport (DEN)',
		city: 'Denver, USA - Colorado 🇺🇸',
		pos: [39.856787796502296, -104.67360889044873],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl', 'ord'],
		tz: 'US/Mountain'
	},
	{
		name: 'Dallas/Fort Worth International Airport (DFW)',
		city: 'Dallas, USA - Texas 🇺🇸',
		pos: [32.90175623187377, -97.04011304308536],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl', 'ord'],
		tz: 'US/Central'
	},
	{
		name: 'Des Moines International Airport (DSM)',
		city: 'Des Moines, USA - Iowa 🇺🇸',
		pos: [41.53421361181389, -93.65911766543995],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Blaise Diagne International Airport (DSS)',
		city: 'Ndiass, Senegal 🇸🇳',
		pos: [14.671072249456303, -17.06737968914397],
		hubs: ['mia'],
		tz: 'GMT'
	},
	{
		name: 'Detroit Metropolitan Wayne County Airport (DTW)',
		city: 'Detroit, USA - Michigan 🇺🇸',
		pos: [42.21640799753565, -83.35532128673535],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl', 'ord'],
		tz: 'US/Eastern'
	},
	{
		name: 'Dublin Airport (DUB)',
		city: 'Dublin, Ireland 🇮🇪',
		pos: [53.42641611587296, -6.249684496130292],
		hubs: ['ewr'],
		tz: 'Europe/Dublin'
	},
	{
		name: 'Dubai International Airport (DXB)',
		city: 'Dubai, United Arab Emirates 🇦🇪',
		pos: [25.25309661391826, 55.36567275706557],
		hubs: ['sfo'],
		tz: 'Asia/Dubai'
	},
	{
		name: 'Northwest Florida Beaches International Airport (ECP)',
		city: 'Panama City, USA - Florida 🇺🇸',
		pos: [30.355281862622725, -85.7980485671208],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Edinburgh Airport (EDI)',
		city: 'Edinburgh, United Kingdom 🇬🇧',
		pos: [55.95077897347942, -3.3614102862399537],
		hubs: ['ewr'],
		tz: 'Europe/London'
	},
	{
		name: 'El Paso International Airport (ELP)',
		city: 'El Paso, USA - Texas 🇺🇸',
		pos: [31.80542655947106, -106.38241304461272],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Eugene Airport (EUG)',
		city: 'Eugene, USA - Oregon 🇺🇸',
		pos: [44.12185809726057, -123.21588957302129],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Ezeiza International Airport (EZE)',
		city: 'Buenos Aires, Argentina 🇦🇷',
		pos: [-34.81472221811849, -58.5349142696793],
		hubs: ['iah'],
		tz: 'America/Argentina/Buenos_Aires'
	},
	{
		name: 'Hector International Airport (FAR)',
		city: 'Fargo, USA - North Dakota 🇺🇸',
		pos: [46.92181462122193, -96.81670671316597],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Fresno Yosemite International Airport (FAT)',
		city: 'Fresno, USA - California 🇺🇸',
		pos: [36.77582349137883, -119.7182263207816],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Glacier Park International Airport (FCA)',
		city: 'Kalispell, USA - Montana 🇺🇸',
		pos: [48.30775754813589, -114.25254443066616],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Leonardo da Vinci International Airport (FCO)',
		city: 'Rome, Italy 🇮🇹',
		pos: [41.80413085802929, 12.251849849230378],
		hubs: ['ewr'],
		tz: 'Europe/Rome'
	},
	{
		name: 'Fort Lauderdale-Hollywood International Airport (FLL)',
		city: 'Fort Lauderdale, USA - Florida 🇺🇸',
		pos: [26.074330752581144, -80.1506451175699],
		hubs: ['ewr', 'sfo', 'iah', 'ord'],
		tz: 'US/Eastern'
	},
	{
		name: 'Grand Bahama Airport (FPO)',
		city: 'Freeport, Bahamas 🇧🇸',
		pos: [26.54776858081397, -78.70253123123514],
		hubs: ['mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Frankfurt Airport (FRA)',
		city: 'Frankfurt, Germany 🇩🇪',
		pos: [50.038235470253035, 8.562452176837837],
		hubs: ['ewr'],
		tz: 'Europe/Berlin'
	},
	{
		name: 'Sioux Falls Regional Airport (FSD)',
		city: 'Sioux Falls, USA - South Dakota 🇺🇸',
		pos: [43.58285310955137, -96.74018491546143],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Miguel Hidalgo y Costilla International Airport (GDL)',
		city: 'Guadalajara, Mexico 🇲🇽',
		pos: [20.52589580006699, -103.30765718888681],
		hubs: ['iah', 'ord'],
		tz: 'America/Mexico_City'
	},
	{
		name: 'Rio de Janeiro/Galeao International Airport (GIG)',
		city: 'Rio di Janeiro, Brazil 🇧🇷',
		pos: [-22.804592230082836, -43.25675808978346],
		hubs: ['iah'],
		tz: 'Brazil/East'
	},
	{
		name: 'Gerald R. Ford International Airport (GRR)',
		city: 'Grand Rapids, USA - Michigan 🇺🇸',
		pos: [42.8824264791552, -85.52425954433107],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'São Paulo/Guarulhos International Airport (GRU)',
		city: 'São Paulo, Brazil 🇧🇷',
		pos: [-23.4301397120531, -46.47291429752642],
		hubs: ['iah'],
		tz: 'Brazil/East'
	},
	{
		name: 'Piedmont Triad International Airport (GSO)',
		city: 'Greensboro, USA - North Carolina 🇺🇸',
		pos: [36.10435840414433, -79.935191232335],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Antonio B. Won Pat International Airport (GUM)',
		city: 'Guam 🇬🇺, US Territories',
		pos: [13.4863791493778, 144.80040397596647],
		hubs: ['hnl'],
		tz: 'Pacific/Guam'
	},
	{
		name: 'Jose Marti International Airport (HAV)',
		city: 'Havana, Cuba 🇨🇺',
		pos: [22.98666272, -82.405331712],
		hubs: ['mia'],
		tz: 'Cuba'
	},
	{
		name: 'Helsinki Airport (HEL)',
		city: 'Helsinki, Finland 🇫🇮',
		pos: [60.31828039473722, 24.94972532743364],
		hubs: ['ewr'],
		tz: 'Europe/Helsinki'
	},
	{
		name: 'Hong Kong International Airport (HKG)',
		city: 'Hong Kong, China 🇨🇳',
		pos: [22.308602611679753, 113.91835201005935],
		hubs: ['sfo'],
		tz: 'Asia/Hong_Kong'
	},
	{
		name: 'Dulles International Airport (IAD)',
		city: 'Washington, USA - D.C. 🇺🇸',
		pos: [38.95327013665701, -77.4565514890331],
		hubs: ['sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Eastern'
	},
	{
		name: 'Incheon International Airport (ICN)',
		city: 'Seoul, South Korea 🇰🇷',
		pos: [37.460632804087396, 126.44057390291141],
		hubs: ['sfo'],
		tz: 'Asia/Seoul'
	},
	{
		name: 'Dwight D. Eisenhower Airport (ICT)',
		city: 'Wichita, USA - Kansas 🇺🇸',
		pos: [37.65083588295067, -97.42868807453723],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Wilmington International Airport (ILM)',
		city: 'Wilmington, USA - North Carolina 🇺🇸',
		pos: [34.26623590568664, -77.90979573247422],
		hubs: ['iah'],
		tz: 'US/Eastern'
	},
	{
		name: 'Indianapolis International Airport (IND)',
		city: 'Indianapolis, USA - Indiana 🇺🇸',
		pos: [39.716991323244, -86.29558447337403],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Hilo International Airport (ITO)',
		city: 'Hilo, USA - Hawaii 🇺🇸',
		pos: [19.71828308321948, -155.04165378827003],
		hubs: ['hnl'],
		tz: 'US/Hawaii'
	},
	{
		name: 'Jackson Hole Airport (JAC)',
		city: 'Jackson Hole, USA - Wyoming 🇺🇸',
		pos: [43.60337470927696, -110.73625468784289],
		hubs: ['sfo', 'iah'],
		tz: 'US/Mountain'
	},
	{
		name: 'Jackson-Medgar Wiley Evers International Airport (JAN)',
		city: 'Jackson, USA - Mississippi 🇺🇸',
		pos: [32.31234643525699, -90.07632339635566],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Jacksonville International Airport (JAX)',
		city: 'Jacksonville, USA - Florida 🇺🇸',
		pos: [30.4940250575088, -81.68793680243796],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'John F. Kennedy International Airport (JFK)',
		city: 'New York, USA - New York 🇺🇸',
		pos: [40.64189712324801, -73.7779237593459],
		hubs: ['sfo', 'iah', 'mia', 'hnl', 'ord'],
		tz: 'US/Eastern'
	},
	{
		name: 'O.R. Tambo International Airport (JNB)',
		city: 'Johannesburg, South Africa 🇿🇦',
		pos: [-26.136691994110528, 28.241156617041295],
		hubs: ['mia'],
		tz: 'Africa/Johannesburg'
	},
	{
		name: 'Keflavík International Airport (KEF)',
		city: 'Reykjavík, Iceland 🇮🇸',
		pos: [63.98070701155434, -22.627620001362224],
		hubs: ['ewr'],
		tz: 'Iceland'
	},
	{
		name: 'Kansai International Airport (KIX)',
		city: 'Osaka, Japan 🇯🇵',
		pos: [34.43207316594882, 135.23039389643088],
		hubs: ['sfo'],
		tz: 'Asia/Tokyo'
	},
	{
		name: 'Kona International Airport (KOA)',
		city: 'Kailua-Kona, USA - Hawaii 🇺🇸',
		pos: [19.737769862987626, -156.0428956900814],
		hubs: ['sfo', 'hnl'],
		tz: 'US/Hawaii'
	},
	{
		name: 'Harry Reid International Airport (LAS)',
		city: 'Las Vegas, USA - Nevada 🇺🇸',
		pos: [36.08590149456017, -115.15072229119573],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl', 'ord'],
		tz: 'US/Pacific'
	},
	{
		name: 'Los Angeles International Airport (LAX)',
		city: 'Los Angeles, USA - California 🇺🇸',
		pos: [33.9412952817257, -118.40872312135349],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl', 'ord'],
		tz: 'US/Pacific'
	},
	{
		name: 'Blue Grass Airport (LEX)',
		city: 'Lexington, USA - Kentucky 🇺🇸',
		pos: [38.03779528003609, -84.60259757335659],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Long Beach Airport (LGB)',
		city: 'Long Beach, USA - California 🇺🇸',
		pos: [33.81616877737306, -118.1511592426201],
		hubs: ['sfo'],
		tz: 'US/Pacific'
	},
	{
		name: 'Heathrow Airport (LHR)',
		city: 'London, United Kingdom 🇬🇧',
		pos: [51.47058336357465, -0.4544242756733526],
		hubs: ['ewr', 'sfo'],
		tz: 'Europe/London'
	},
	{
		name: 'Lihue Airport (LIH)',
		city: 'Lihue, USA - Hawaii 🇺🇸',
		pos: [21.978913933768247, -159.34382035743394],
		hubs: ['hnl'],
		tz: 'US/Hawaii'
	},
	{
		name: 'Jorge Chavez International Airport (LIM)',
		city: 'Lima, Peru 🇵🇪',
		pos: [-12.023590851622739, -77.11199313107029],
		hubs: ['iah'],
		tz: 'America/Lima'
	},
	{
		name: 'Humberto Delgado Airport (LIS)',
		city: 'Lisbon, Portugal 🇵🇹',
		pos: [38.77616204030518, -9.135280903021002],
		hubs: ['ewr'],
		tz: 'Europe/Lisbon'
	},
	{
		name: 'Clinton National Airport (LIT)',
		city: 'Little Rock, USA - Arkansas 🇺🇸',
		pos: [34.73014934857, -92.219905134052],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Lanai Airport (LNY)',
		city: 'Lanai City, USA - Hawaii 🇺🇸',
		pos: [20.79129049571412, -156.95037799977516],
		hubs: ['hnl'],
		tz: 'US/Hawaii'
	},
	{
		name: 'Murtala Muhammed International Airport (LOS)',
		city: 'Lagos, Nigeria 🇳🇬',
		pos: [6.582042315799838, 3.3210704254376475],
		hubs: ['mia'],
		tz: 'Africa/Lagos'
	},
	{
		name: 'Adolfo Suarez Madrid-Barajas Airport (MAD)',
		city: 'Madrid, Spain 🇪🇸',
		pos: [40.49847903162269, -3.5676089311550063],
		hubs: ['ewr'],
		tz: 'Europe/Madrid'
	},
	{
		name: 'Midland International Air & Space Port (MAF)',
		city: 'Midland, USA - Texas 🇺🇸',
		pos: [31.942135201414416, -102.20496125514411],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Sangster International Airport (MBJ)',
		city: 'Montego Bay, Jamaica 🇯🇲',
		pos: [18.502391775768107, -77.91451690151644],
		hubs: ['ewr', 'mia'],
		tz: 'America/Jamaica'
	},
	{
		name: 'Kansas City International Airport (MCI)',
		city: 'Kansas City, USA - Missouri 🇺🇸',
		pos: [39.30346588697873, -94.70907396438118],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Orlando International Airport (MCO)',
		city: 'Orlando, USA - Florida 🇺🇸',
		pos: [28.418822273035058, -81.30431680312665],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl', 'ord'],
		tz: 'US/Eastern'
	},
	{
		name: 'Melbourne Airport (MEL)',
		city: 'Melbourne, Australia 🇦🇺',
		pos: [-37.670866092849224, 144.84387908076323],
		hubs: ['hnl'],
		tz: 'Australia/Melbourne'
	},
	{
		name: 'Memphis International Airport (MEM)',
		city: 'Memphis, USA - Tennessee 🇺🇸',
		pos: [35.041980059680945, -89.97921581534257],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Mexico City International Airport (MEX)',
		city: 'Mexico City, Mexico 🇲🇽',
		pos: [19.43624818319543, -99.07194048906919],
		hubs: ['ewr', 'sfo', 'iah', 'ord'],
		tz: 'America/Mexico_City'
	},
	{
		name: 'McAllen International Airport (MFE)',
		city: 'McAllen, USA - Texas 🇺🇸',
		pos: [26.176721835265095, -98.2393465159593],
		hubs: ['iah'],
		tz: 'US/Central'
	},
	{
		name: 'Rogue Valley International Medford Airport (MFR)',
		city: 'Medford, USA - Oregon 🇺🇸',
		pos: [42.369094888174644, -122.87312247409928],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Manchester-Boston Regional Airport (MHT)',
		city: 'Manchester, USA - New Hampshire 🇺🇸',
		pos: [42.9297832621787, -71.43505763213719],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'General Mitchell International Airport (MKE)',
		city: 'Milwaukee, USA - Wisconsin 🇺🇸',
		pos: [42.94783578343849, -87.89664603166004],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Ninoy Aquino International Airport (MNL)',
		city: 'Manila, Philippines 🇵🇭',
		pos: [14.505164646, 121.01833326],
		hubs: ['hnl'],
		tz: 'Asia/Manila'
	},
	{
		name: 'Dane County Regional Airport (MSN)',
		city: 'Madison, USA - Wisconsin 🇺🇸',
		pos: [43.139089365511055, -89.33638061548804],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Missoula Montana Airport (MSO)',
		city: 'Missoula, USA - Montana 🇺🇸',
		pos: [46.91876701016805, -114.08363087487372],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Minneapolis-Saint Paul International Airport (MSP)',
		city: 'Minneapolis, USA - Minnesota 🇺🇸',
		pos: [44.88624650092833, -93.22250729555996],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl', 'ord'],
		tz: 'US/Central'
	},
	{
		name: 'Louis Armstrong New Orleans International Airport (MSY)',
		city: 'New Orleans, USA - Louisiana 🇺🇸',
		pos: [29.991146272960744, -90.25862783681688],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Montrose Regional Airport (MTJ)',
		city: 'Montrose, USA - Colorado 🇺🇸',
		pos: [38.50095072330021, -107.89509828021419],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Monterrey International (MTY)',
		city: 'Monterrey, Mexico 🇲🇽',
		pos: [25.777322304453758, -100.11456996208241],
		hubs: ['iah'],
		tz: 'America/Mexico_City'
	},
	{
		name: 'Munich International Airport (MUC)',
		city: 'Munich, Germany 🇩🇪',
		pos: [48.35101828934641, 11.776488342315458],
		hubs: ['ewr'],
		tz: 'Europe/Berlin'
	},
	{
		name: 'Malpensa Airport (MXP)',
		city: 'Milan, Italy 🇮🇹',
		pos: [45.63003246889486, 8.725487782741581],
		hubs: ['ewr'],
		tz: 'Europe/Rome'
	},
	{
		name: 'Myrtle Beach International Airport (MYR)',
		city: 'Myrtle Beach, USA - South Carolina 🇺🇸',
		pos: [33.68213937915149, -78.92800159200796],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Nadi Airport (NAN)',
		city: 'Nadi, Fiji 🇫🇯',
		pos: [-17.75183452525651, 177.45078438213463],
		hubs: ['hnl'],
		tz: 'Pacific/Fiji'
	},
	{
		name: 'Lynden Pindling International Airport (NAS)',
		city: 'Nassau, Bahamas 🇧🇸',
		pos: [25.04400654513227, -77.46580015121297],
		hubs: ['ewr', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Chubu Centrair International Airport (NGO)',
		city: 'Nagoya, Japan 🇯🇵',
		pos: [34.8574416073902, 136.81089517130727],
		hubs: ['sfo'],
		tz: 'Asia/Tokyo'
	},
	{
		name: 'Narita International Airport (NRT)',
		city: 'Tokyo, Japan 🇯🇵',
		pos: [35.77226493717075, 140.39293589386335],
		hubs: ['ewr', 'sfo'],
		tz: 'Asia/Tokyo'
	},
	{
		name: 'Oakland International Airport (OAK)',
		city: 'Oakland, USA - California 🇺🇸',
		pos: [37.71148324911222, -122.2193824513291],
		hubs: ['ewr', 'iah', 'mia', 'ord'],
		tz: 'US/Pacific'
	},
	{
		name: 'Kahului Airport (OGG)',
		city: 'Kahului, USA - Hawaii 🇺🇸',
		pos: [20.894645227300344, -156.43600538629138],
		hubs: ['sfo', 'hnl'],
		tz: 'US/Hawaii'
	},
	{
		name: 'Will Rogers Airport (OKC)',
		city: 'Oklahoma City, USA - Oklahoma 🇺🇸',
		pos: [35.39319572984369, -97.60050445075717],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Eppley Airfield (OMA)',
		city: 'Omaha, USA - Nebraska 🇺🇸',
		pos: [41.30224308640403, -95.89469287800654],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Ontario International Airport (ONT)',
		city: 'Ontario, USA - California 🇺🇸',
		pos: [34.05596214250547, -117.59904106790037],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Norfolk International Airport (ORF)',
		city: 'Norfolk, USA - Virginia 🇺🇸',
		pos: [36.89570942043663, -76.20000537338909],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Oslo Airport (OSL)',
		city: 'Oslo, Norway 🇳🇴',
		pos: [60.197550081971016, 11.100372283252447],
		hubs: ['ewr'],
		tz: 'Europe/Oslo'
	},
	{
		name: 'Palm Beach International Airport (PBI)',
		city: 'West Palm Beach, USA - Florida 🇺🇸',
		pos: [26.685785827360075, -80.09283796017972],
		hubs: ['ewr', 'sfo', 'iah'],
		tz: 'US/Eastern'
	},
	{
		name: 'Portland International Airport (PDX)',
		city: 'Portland, USA - Oregon 🇺🇸',
		pos: [45.59024957185743, -122.59483674121826],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
		tz: 'US/Pacific'
	},
	{
		name: 'Beijing Capital International Airport (PEK)',
		city: 'Beijing, China 🇨🇳',
		pos: [40.0801853355692, 116.60315498033326],
		hubs: ['sfo'],
		tz: 'Asia/Shanghai'
	},
	{
		name: 'Philadelphia International Airport (PHL)',
		city: 'Philadelphia, USA - Pennsylvania 🇺🇸',
		pos: [39.87312718764114, -75.24362441975858],
		hubs: ['sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Eastern'
	},
	{
		name: 'Phoenix Sky Harbor International Airport (PHX)',
		city: 'Phoenix, USA - Arizona 🇺🇸',
		pos: [33.43582170243552, -112.0101240396323],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl', 'ord'],
		tz: 'US/Mountain'
	},
	{
		name: 'Pittsburgh International Airport (PIT)',
		city: 'Pittsburgh, USA - Pennsylvania 🇺🇸',
		pos: [40.49183102751426, -80.23501945402671],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Providenciales International Airport (PLS)',
		city: 'Providenciales, Turks and Caicos Islands 🇹🇨',
		pos: [21.776326359168177, -72.27128035731569],
		hubs: ['mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Pensacola International Airport (PNS)',
		city: 'Pensacola, USA - Florida 🇺🇸',
		pos: [30.473625313477296, -87.18674410562464],
		hubs: ['iah'],
		tz: 'US/Eastern'
	},
	{
		name: 'Piarco International Airport (POS)',
		city: 'Piarco, Trinidad and Tobago 🇹🇹',
		pos: [10.597664754910571, -61.33951627377069],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Pago Pago International Airport (PPG)',
		city: 'Pago Pago, American Samoa 🇦🇸, US Territories',
		pos: [-14.328529463205866, -170.71318872964144],
		hubs: ['hnl'],
		tz: 'Pacific/Pago_Pago'
	},
	{
		name: 'Fa\'a\'a International Airport (PPT)',
		city: 'Tahiti, French Polynesia 🇵🇫',
		pos: [-17.55960524555043, -149.61021228790472],
		hubs: ['hnl'],
		tz: 'Pacific/Tahiti'
	},
	{
		name: 'Vaclav Havel Airport (PRG)',
		city: 'Prague, Czech Republic 🇨🇿',
		pos: [50.101859796884526, 14.263234742416973],
		hubs: ['ewr'],
		tz: 'Europe/Prague'
	},
	{
		name: 'Palm Springs International Airport (PSP)',
		city: 'Palm Springs, USA - California 🇺🇸',
		pos: [33.830568637238926, -116.50696100322521],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Punta Cana International Airport (PUJ)',
		city: 'Punta Cana, Dominican Republic 🇩🇴',
		pos: [18.563260946101263, -68.36852528802461],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'T.F. Green International Airport (PVD)',
		city: 'Providence, USA - Rhode Island 🇺🇸',
		pos: [41.723507528600045, -71.42691301444177],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Licenciado Gustavo Diaz Ordaz International (PVR)',
		city: 'Puerto Vallarta, Mexico 🇲🇽',
		pos: [20.68049831115806, -105.2524298465564],
		hubs: ['iah', 'ord'],
		tz: 'America/Mexico_City'
	},
	{
		name: 'Portland International Jetport (PWM)',
		city: 'Portland, USA - Maine 🇺🇸',
		pos: [43.64570214332969, -70.31004072274055],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Rapid City Regional Airport (RAP)',
		city: 'Rapid City, USA - South Dakota 🇺🇸',
		pos: [44.038372066425026, -103.06043047128412],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Redmond Municipal Airport (RDM)',
		city: 'Redmond, USA - Oregon 🇺🇸',
		pos: [44.253250764843884, -121.15877034247316],
		hubs: ['ewr', 'sfo', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Raleigh-Durham International Airport (RDU)',
		city: 'Raleigh, USA - North Carolina 🇺🇸',
		pos: [35.88007898015302, -78.78797484463837],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Richmond International Airport (RIC)',
		city: 'Richmond, USA - Virginia 🇺🇸',
		pos: [37.50677505510212, -77.32084242371478],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Reno-Tahoe International Airport (RNO)',
		city: 'Reno, USA - Nevada 🇺🇸',
		pos: [39.49964863013703, -119.76805218683198],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Greater Rochester International Airport (ROC)',
		city: 'Rochester, USA - New York 🇺🇸',
		pos: [43.12253070204068, -77.6666258473552],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Southwest Florida International Airport (RSW)',
		city: 'Fort Myers, USA - Florida 🇺🇸',
		pos: [26.533753077135888, -81.75534048896644],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'San Diego International Airport (SAN)',
		city: 'San Diego, USA - California 🇺🇸',
		pos: [32.733728095648374, -117.19304634789322],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
		tz: 'US/Pacific'
	},
	{
		name: 'San Antonio International Airport (SAT)',
		city: 'San Antonio, USA - Texas 🇺🇸',
		pos: [29.531290632199877, -98.46845569088684],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Savannah/Hilton Head International Airport (SAV)',
		city: 'Savannah, USA - Georgia 🇺🇸',
		pos: [32.12939158823519, -81.20176254594122],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Santa Barbara Airport (SBA)',
		city: 'Santa Barbara, USA - California 🇺🇸',
		pos: [34.42729081888512, -119.83988350359796],
		hubs: ['iah'],
		tz: 'US/Pacific'
	},
	{
		name: 'Seattle-Tacoma International Airport (SEA)',
		city: 'Seattle, USA - Washington 🇺🇸',
		pos: [47.45358306768111, -122.30824812930476],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl', 'ord'],
		tz: 'US/Pacific'
	},
	{
		name: 'Arturo Merino Benitez Airport (SCL)',
		city: 'Santiago, Chile 🇨🇱',
		pos: [-33.38938543980737, -70.79442733965293],
		hubs: ['iah'],
		tz: 'America/Santiago'
	},
	{
		name: 'Louisville Muhammad Ali International Airport (SDF)',
		city: 'Louisville, USA - Kentucky 🇺🇸',
		pos: [38.183129274399, -85.741038508206],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Shanghai Hongqiao International Airport (SHA)',
		city: 'Shanghai, China 🇨🇳',
		pos: [31.193096387538194, 121.33369906532243],
		hubs: ['sfo'],
		tz: 'Asia/Shanghai'
	},
	{
		name: 'Singapore Changi Airport (SIN)',
		city: 'Singapore 🇸🇬',
		pos: [1.3655760814659688, 103.99134627431354],
		hubs: ['hnl'],
		tz: 'Asia/Singapore'
	},
	{
		name: 'Norman Y. Mineta San Jose International Airport (SJC)',
		city: 'San Jose, USA - California 🇺🇸',
		pos: [37.363665715803144, -121.92895897613796],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Los Cabos International Airport (SJD)',
		city: 'San José del Cabo, Mexico 🇲🇽',
		pos: [23.1456048417308, -109.71832014651572],
		hubs: ['iah', 'ord'],
		tz: 'Mexico/BajaSur'
	},
	{
		name: 'Luis Munoz Marin International Airport (SJU)',
		city: 'San Juan, Puerto Rico 🇵🇷, US Territories',
		pos: [18.439669035343876, -65.99915740046777],
		hubs: ['ewr', 'mia', 'ord'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Robert L. Bradshaw International Airport (SKB)',
		city: 'Basseterre, Saint Kitts & Nevis 🇰🇳',
		pos: [17.3108341120326, -62.71916974592183],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Salt Lake City International Airport (SLC)',
		city: 'Salt Lake City, USA - Utah 🇺🇸',
		pos: [40.79051939628816, -111.97902094610347],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
		tz: 'US/Mountain'
	},
	{
		name: 'Sacramento International Airport (SMF)',
		city: 'Sacramento, USA - California 🇺🇸',
		pos: [38.69506863213448, -121.59003261580382],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
		tz: 'US/Pacific'
	},
	{
		name: 'John Wayne Airport (SNA)',
		city: 'Santa Ana, USA - California 🇺🇸',
		pos: [33.67632399877975, -117.86749736129858],
		hubs: ['iah', 'ord'],
		tz: 'US/Pacific'
	},
	{
		name: 'Shannon Airport (SNN)',
		city: 'Shannon, Ireland 🇮🇪',
		pos: [52.69897449709459, -8.914894175822724],
		hubs: ['ewr'],
		tz: 'Europe/Dublin'
	},
	{
		name: 'Sarasota Bradenton International Airport (SRQ)',
		city: 'Sarasota, USA - Florida 🇺🇸',
		pos: [27.395100025167416, -82.5539055345659],
		hubs: ['ewr', 'iah'],
		tz: 'US/Eastern'
	},
	{
		name: 'St. Louis Lambert International Airport (STL)',
		city: 'St. Louis, USA - Missouri 🇺🇸',
		pos: [38.74996298137237, -90.37484608851419],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Princess Juliana International Airport (SXM)',
		city: 'Sint Maarten 🇸🇽',
		pos: [18.04192078940854, -63.113028459403225],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Sydney Airport (SYD)',
		city: 'Sydney, Australia 🇦🇺',
		pos: [-33.94985609315001, 151.1818694507839],
		hubs: ['hnl'],
		tz: 'Australia/Sydney'
	},
	{
		name: 'Syracuse Hancock International Airport (SYR)',
		city: 'Syracuse, USA - New York 🇺🇸',
		pos: [43.113949680808936, -76.11362234818714],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Chengdu Shuangliu International Airport (TFU)',
		city: 'Chengdu, China 🇨🇳',
		pos: [30.271849965598296, 104.44447857901999],
		hubs: ['sfo'],
		tz: 'Asia/Shanghai'
	},
	{
		name: 'Ben Gurion Airport (TLV)',
		city: 'Tel Aviv, Israel 🇮🇱',
		pos: [32.0060775789537, 34.885625736443],
		hubs: ['ewr'],
		tz: 'Asia/Tel_Aviv'
	},
	{
		name: 'Tampa International Airport (TPA)',
		city: 'Tampa, USA - Florida 🇺🇸',
		pos: [27.977171332699836, -82.53112747358927],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
		tz: 'US/Eastern'
	},
	{
		name: 'Taiwan Taoyuan International Airport (TPE)',
		city: 'Taipei, Taiwan 🇹🇼',
		pos: [25.078385372504524, 121.23404549362135],
		hubs: ['sfo'],
		tz: 'Asia/Taipei'
	},
	{
		name: 'Bonriki International Airport (TRW)',
		city: 'Tarawa, Kiribati 🇰🇮',
		pos: [1.3816943367896826, 173.14677443116932],
		hubs: ['hnl'],
		tz: 'Pacific/Tarawa'
	},
	{
		name: 'Tulsa International Airport (TUL)',
		city: 'Tulsa, USA - Oklahoma 🇺🇸',
		pos: [36.198655852278264, -95.8837988854985],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
    {
		name: 'Tucson International Airport (TUS)',
		city: 'Tucson, USA - Arizona 🇺🇸',
		pos: [32.109666228, -110.937996248],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'McGhee Tyson Airport (TYS)',
		city: 'Knoxville, USA - Tennessee 🇺🇸',
		pos: [35.81082427967718, -83.99379244250953],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Mariscal Sucre Quito International Airport (UIO)',
		city: 'Quito, Ecuador 🇪🇨',
		pos: [-0.1234546241729393, -78.3604826167644],
		hubs: ['iah'],
		tz: 'America/Lima'
	},
	{
		name: 'Venice Marco Polo Airport (VCE)',
		city: 'Venice, Italy 🇮🇹',
		pos: [45.50475205289375, 12.346683142255474],
		hubs: ['ewr'],
		tz: 'Europe/Rome'
	},
	{
		name: 'Edmonton International Airport (YEG)',
		city: 'Edmonton, Canada 🇨🇦',
		pos: [53.30623686908562, -113.58276804327605],
		hubs: ['ewr', 'sfo', 'iah'],
		tz: 'Canada/Mountain'
	},
	{
		name: 'Ottawa International Airport (YOW)',
		city: 'Ottawa, Canada 🇨🇦',
		pos: [45.31923461124119, -75.66914374429483],
		hubs: ['ewr', 'sfo', 'iah'],
		tz: 'Canada/Eastern'
	},
	{
		name: 'Montreal-Pierre Elliott Trudeau International Airport (YUL)',
		city: 'Montreal, Canada 🇨🇦',
		pos: [45.461698664876224, -73.7478869554127],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'Canada/Eastern'
	},
	{
		name: 'Calgary International Airport (YYC)',
		city: 'Calgary, Canada 🇨🇦',
		pos: [51.12150310000004, -114.00819495762246],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
		tz: 'Canada/Mountain'
	},
	{
		name: 'Vancouver International Airport (YVR)',
		city: 'Vancouver, Canada 🇨🇦',
		pos: [49.19675521104217, -123.18147272578588],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl', 'ord'],
		tz: 'Canada/Pacific'
	},
	{
		name: 'Toronto Pearson International Airport (YYZ)',
		city: 'Toronto, Canada 🇨🇦',
		pos: [43.67779523959123, -79.6247972173393],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
		tz: 'Canada/Eastern'
	},
	{
		name: 'Zurich Airport (ZRH)',
		city: 'Zurich, Switzerland 🇨🇭',
		pos: [47.461358490923374, 8.553454682550841],
		hubs: ['ewr'],
		tz: 'Europe/Zurich'
	},
];

var FLIGHT_SCHEDULE = `Route,Flight,Aircraft,Type,Route Link,Flight Link,Aircraft Link,Departure,Arrival,Pax,Turnover,Result,$/pax,$/hr
EWR - ABQ,56084270516,E-ABQ-AUS-2,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/56084270516,https://www.airlines-manager.com/aircraft/show/90717078,0:45,9:59,310,"$575,728.00","$529,752.00","$1,708.88","$57,373.86"
EWR - ABQ,56084270517,E-ABQ-AUS-5,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/56084270517,https://www.airlines-manager.com/aircraft/show/95950199,2:45,11:59,310,"$575,728.00","$529,752.00","$1,708.88","$57,373.86"
EWR - ABQ,56103828477,E-ABQ-AUS-1,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/56103828477,https://www.airlines-manager.com/aircraft/show/90717079,10:00,19:14,310,"$575,728.00","$529,752.00","$1,708.88","$57,373.86"
EWR - ABQ,56118925598,E-ABQ-AUS-3,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/56118925598,https://www.airlines-manager.com/aircraft/show/90717077,16:45,1:59,310,"$575,728.00","$529,752.00","$1,708.88","$57,373.86"
EWR - ABQ,56122311557,E-ABQ-AUS-4,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/56122311557,https://www.airlines-manager.com/aircraft/show/90717076,17:45,2:59,310,"$575,728.00","$529,752.00","$1,708.88","$57,373.86"
EWR - ALB,56084270459,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/56084270459,https://www.airlines-manager.com/aircraft/show/119220543,0:15,2:59,310,"$97,112.00","$79,379.00",$256.06,"$29,041.10"
EWR - ALB,56093103171,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/56093103171,https://www.airlines-manager.com/aircraft/show/119220542,4:45,7:29,310,"$97,112.00","$79,379.00",$256.06,"$29,041.10"
EWR - ALB,56118925550,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/56118925550,https://www.airlines-manager.com/aircraft/show/119220545,16:00,18:44,310,"$97,112.00","$79,379.00",$256.06,"$29,041.10"
EWR - ALB,56128543803,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/56128543803,https://www.airlines-manager.com/aircraft/show/119220544,20:30,23:14,310,"$97,112.00","$79,379.00",$256.06,"$29,041.10"
EWR - AMS,56107731671,E-56B-4 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/56107731671,https://www.airlines-manager.com/aircraft/show/94521247,11:30,2:44,748,"$2,330,925.00","$2,086,099.00","$2,788.90","$136,943.04"
EWR - AMS,56112079329,E-56B-2 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/56112079329,https://www.airlines-manager.com/aircraft/show/90656556,13:15,4:29,748,"$2,330,925.00","$2,086,099.00","$2,788.90","$136,943.04"
EWR - AMS,56115475779,E-56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/56115475779,https://www.airlines-manager.com/aircraft/show/89124072,15:00,6:14,748,"$2,089,149.00","$1,905,958.00","$2,548.07","$125,117.59"
EWR - ANC,56103828430,E-STL-PIT-3,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/56103828430,https://www.airlines-manager.com/aircraft/show/115400546,10:00,0:59,338,"$1,007,405.00","$944,321.00","$2,793.85","$63,024.76"
EWR - ANC,56112079325,E-STL-PIT-2,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/56112079325,https://www.airlines-manager.com/aircraft/show/115400547,13:15,4:14,338,"$1,007,405.00","$944,321.00","$2,793.85","$63,024.76"
EWR - ANC,56125473974,E-STL-PIT-1,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/56125473974,https://www.airlines-manager.com/aircraft/show/115400548,18:45,9:44,338,"$1,007,405.00","$944,321.00","$2,793.85","$63,024.76"
EWR - ANC,56131084791,E-STL-PIT-4,A321neo-LR,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/56131084791,https://www.airlines-manager.com/aircraft/show/103406580,21:45,12:44,338,"$1,016,769.00","$951,951.00","$2,816.42","$63,533.99"
EWR - ARN,56093103050,E-56D-1 E,787-10,https://www.airlines-manager.com/network/showline/50072203,https://www.airlines-manager.com/network/showflight/56093103050,https://www.airlines-manager.com/aircraft/show/118644436,3:45,19:44,648,"$1,976,114.00","$1,844,631.00","$2,846.65","$115,409.66"
EWR - ARN,56112079205,E-56D-3 E,787-10,https://www.airlines-manager.com/network/showline/50072203,https://www.airlines-manager.com/network/showflight/56112079205,https://www.airlines-manager.com/aircraft/show/118644438,12:45,4:44,648,"$1,976,114.00","$1,844,631.00","$2,846.65","$115,409.66"
EWR - ARN,56125473977,E-56D-5 E,787-10,https://www.airlines-manager.com/network/showline/50072203,https://www.airlines-manager.com/network/showflight/56125473977,https://www.airlines-manager.com/aircraft/show/118644440,18:45,10:44,648,"$1,976,114.00","$1,844,631.00","$2,846.65","$115,409.66"
EWR - ATH,56084270415,E-84A-7 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/56084270415,https://www.airlines-manager.com/aircraft/show/94521249,0:00,19:59,852,"$3,250,987.00","$2,958,694.00","$3,472.65","$148,058.08"
EWR - ATH,56125474112,E-84A-4 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/56125474112,https://www.airlines-manager.com/aircraft/show/90656551,19:45,15:44,852,"$3,250,987.00","$2,958,694.00","$3,472.65","$148,058.08"
EWR - ATL,56103828439,E-DFW-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/56103828439,https://www.airlines-manager.com/aircraft/show/90489724,10:00,14:59,320,"$317,565.00","$256,248.00",$800.78,"$51,421.00"
EWR - ATL,56115475684,E-DFW-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/56115475684,https://www.airlines-manager.com/aircraft/show/90489726,14:15,19:14,320,"$317,565.00","$256,248.00",$800.78,"$51,421.00"
EWR - ATL,56122311527,E-DFW-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/56122311527,https://www.airlines-manager.com/aircraft/show/90489725,17:30,22:29,320,"$317,565.00","$256,248.00",$800.78,"$51,421.00"
EWR - ATL,56125473967,E-DFW-ATL-6 B,A319-100,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/56125473967,https://www.airlines-manager.com/aircraft/show/105222360,18:30,23:29,198,"$241,826.00","$199,756.00","$1,008.87","$40,084.82"
EWR - ATL,56125473968,E-DFW-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/56125473968,https://www.airlines-manager.com/aircraft/show/86238752,19:45,0:44,320,"$317,565.00","$256,248.00",$800.78,"$51,421.00"
EWR - ATL,56131084843,E-DFW-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/56131084843,https://www.airlines-manager.com/aircraft/show/86238753,22:15,3:14,320,"$317,565.00","$256,248.00",$800.78,"$51,421.00"
EWR - AUS,56084270681,E-ABQ-AUS-3,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/56084270681,https://www.airlines-manager.com/aircraft/show/90717077,2:00,9:59,310,"$501,297.00","$460,053.00","$1,484.04","$57,626.68"
EWR - AUS,56084270682,E-ABQ-AUS-4,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/56084270682,https://www.airlines-manager.com/aircraft/show/90717076,3:00,10:59,310,"$501,297.00","$460,053.00","$1,484.04","$57,626.68"
EWR - AUS,56103828476,E-ABQ-AUS-2,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/56103828476,https://www.airlines-manager.com/aircraft/show/90717078,10:00,17:59,310,"$501,297.00","$460,053.00","$1,484.04","$57,626.68"
EWR - AUS,56112079163,E-ABQ-AUS-5,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/56112079163,https://www.airlines-manager.com/aircraft/show/95950199,12:00,19:59,310,"$501,297.00","$460,053.00","$1,484.04","$57,626.68"
EWR - AUS,56125474055,E-ABQ-AUS-1,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/56125474055,https://www.airlines-manager.com/aircraft/show/90717079,19:15,3:14,310,"$501,297.00","$460,053.00","$1,484.04","$57,626.68"
EWR - BCN,56118925496,E-84A-5 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/56118925496,https://www.airlines-manager.com/aircraft/show/94521250,15:45,7:44,852,"$2,628,418.00","$2,386,121.00","$2,800.61","$149,288.07"
EWR - BCN,56125474149,E-84A-2 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/56125474149,https://www.airlines-manager.com/aircraft/show/94521252,20:00,11:59,852,"$2,628,418.00","$2,386,121.00","$2,800.61","$149,288.07"
EWR - BDA,56103538610,E-YEG-BFF-5 B,A319-100,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/56103538610,https://www.airlines-manager.com/aircraft/show/115493369,8:45,13:59,198,"$244,232.00","$222,459.00","$1,123.53","$42,508.09"
EWR - BDA,56107731586,E-YEG-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/56107731586,https://www.airlines-manager.com/aircraft/show/98936170,11:00,16:14,320,"$322,411.00","$291,621.00",$911.32,"$55,723.76"
EWR - BDA,56112079248,E-YEG-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/56112079248,https://www.airlines-manager.com/aircraft/show/98936171,13:00,18:14,320,"$322,411.00","$291,621.00",$911.32,"$55,723.76"
EWR - BDA,56128543926,E-YEG-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/56128543926,https://www.airlines-manager.com/aircraft/show/98936168,21:00,2:14,320,"$322,411.00","$291,621.00",$911.32,"$55,723.76"
EWR - BDA,56131084876,E-YEG-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/56131084876,https://www.airlines-manager.com/aircraft/show/98936169,22:30,3:44,254,"$260,902.00","$231,842.00",$912.76,"$44,301.02"
EWR - BDL,56084270560,E-COS-ICT-4,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/56084270560,https://www.airlines-manager.com/aircraft/show/108834811,1:00,3:29,310,"$89,797.00","$71,469.00",$230.55,"$28,779.46"
EWR - BDL,56103538657,E-COS-ICT-5,ERJ-175,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/56103538657,https://www.airlines-manager.com/aircraft/show/108466265,9:30,11:59,112,"$38,517.00","$27,319.00",$243.92,"$11,000.94"
EWR - BDL,56115475647,E-COS-ICT-3,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/56115475647,https://www.airlines-manager.com/aircraft/show/108834810,14:00,16:29,310,"$89,797.00","$71,469.00",$230.55,"$28,779.46"
EWR - BDL,56118925544,E-COS-ICT-2,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/56118925544,https://www.airlines-manager.com/aircraft/show/108834809,16:00,18:29,310,"$89,797.00","$71,469.00",$230.55,"$28,779.46"
EWR - BDL,56131084934,E-COS-ICT-1,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/56131084934,https://www.airlines-manager.com/aircraft/show/108834808,23:00,1:29,310,"$89,797.00","$71,469.00",$230.55,"$28,779.46"
EWR - BER,56096590130,E-84B-5  B2,777-300,https://www.airlines-manager.com/network/showline/49921899,https://www.airlines-manager.com/network/showflight/56096590130,https://www.airlines-manager.com/aircraft/show/117958699,5:45,22:14,852,"$2,719,031.00","$2,467,383.00","$2,895.99","$149,689.57"
EWR - BER,56122311565,E-84B-1  B2,777-300,https://www.airlines-manager.com/network/showline/49921899,https://www.airlines-manager.com/network/showflight/56122311565,https://www.airlines-manager.com/aircraft/show/117958695,17:45,10:14,852,"$2,719,031.00","$2,467,383.00","$2,895.99","$149,689.57"
EWR - BFF,56084270694,E-YEG-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/56084270694,https://www.airlines-manager.com/aircraft/show/98936168,2:15,10:14,320,"$507,802.00","$465,091.00","$1,453.41","$58,257.75"
EWR - BFF,56093103056,E-YEG-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/56093103056,https://www.airlines-manager.com/aircraft/show/98936169,3:45,11:44,320,"$507,802.00","$465,091.00","$1,453.41","$58,257.75"
EWR - BFF,56115475671,E-YEG-BFF-5 B,A319-100,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/56115475671,https://www.airlines-manager.com/aircraft/show/115493369,14:00,21:59,198,"$383,240.00","$352,330.00","$1,779.44","$44,133.19"
EWR - BFF,56118925564,E-YEG-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/56118925564,https://www.airlines-manager.com/aircraft/show/98936170,16:15,0:14,320,"$507,802.00","$465,091.00","$1,453.41","$58,257.75"
EWR - BFF,56122311657,E-YEG-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/56122311657,https://www.airlines-manager.com/aircraft/show/98936171,18:15,2:14,320,"$507,802.00","$465,091.00","$1,453.41","$58,257.75"
EWR - BHM,56084270700,E-RAP-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/56084270700,https://www.airlines-manager.com/aircraft/show/116042862,2:15,7:44,310,"$346,865.00","$318,072.00","$1,026.04","$58,007.05"
EWR - BHM,56103538589,E-RAP-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/56103538589,https://www.airlines-manager.com/aircraft/show/116042859,8:30,13:59,310,"$346,865.00","$318,072.00","$1,026.04","$58,007.05"
EWR - BHM,56115475658,E-RAP-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/56115475658,https://www.airlines-manager.com/aircraft/show/116042860,14:00,19:29,310,"$346,865.00","$318,072.00","$1,026.04","$58,007.05"
EWR - BHM,56118925457,E-RAP-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/56118925457,https://www.airlines-manager.com/aircraft/show/116042861,15:15,20:44,310,"$346,865.00","$318,072.00","$1,026.04","$58,007.05"
EWR - BIL,56103828459,E-BIL-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/56103828459,https://www.airlines-manager.com/aircraft/show/116047882,10:00,18:59,320,"$565,856.00","$519,899.00","$1,624.68","$57,873.73"
EWR - BIL,56112079146,E-BIL-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/56112079146,https://www.airlines-manager.com/aircraft/show/116047885,12:00,20:59,320,"$565,856.00","$519,899.00","$1,624.68","$57,873.73"
EWR - BIL,56128543958,E-BIL-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/56128543958,https://www.airlines-manager.com/aircraft/show/116047884,21:15,6:14,320,"$565,856.00","$519,899.00","$1,624.68","$57,873.73"
EWR - BIL,56131084906,E-BIL-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/56131084906,https://www.airlines-manager.com/aircraft/show/116047883,22:45,7:44,320,"$565,856.00","$519,899.00","$1,624.68","$57,873.73"
EWR - BNA,56093102997,E-BNA-JAX-3,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/56093102997,https://www.airlines-manager.com/aircraft/show/104610408,3:15,8:14,310,"$322,924.00","$293,584.00",$947.05,"$58,913.18"
EWR - BNA,56103538582,E-BNA-JAX-2,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/56103538582,https://www.airlines-manager.com/aircraft/show/104610409,8:30,13:29,310,"$322,924.00","$293,584.00",$947.05,"$58,913.18"
EWR - BNA,56112079299,E-BNA-JAX-1,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/56112079299,https://www.airlines-manager.com/aircraft/show/104610410,13:00,17:59,310,"$322,924.00","$293,584.00",$947.05,"$58,913.18"
EWR - BNA,56122311503,E-BNA-JAX-5,ERJ-175,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/56122311503,https://www.airlines-manager.com/aircraft/show/96421247,17:00,21:59,112,"$153,204.00","$134,298.00","$1,199.09","$26,949.43"
EWR - BNA,56128543959,E-BNA-JAX-4,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/56128543959,https://www.airlines-manager.com/aircraft/show/104610407,21:15,2:14,310,"$322,924.00","$293,584.00",$947.05,"$58,913.18"
EWR - BOI,56084270633,E-BOI-PBI-5 B,A319-100,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/56084270633,https://www.airlines-manager.com/aircraft/show/110582846,1:30,11:59,198,"$492,457.00","$454,215.00","$2,294.02","$43,327.34"
EWR - BOI,56103828491,E-BOI-PBI-1,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/56103828491,https://www.airlines-manager.com/aircraft/show/104418460,10:00,20:29,310,"$655,891.00","$608,204.00","$1,961.95","$58,016.28"
EWR - BOI,56115475760,E-BOI-PBI-4,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/56115475760,https://www.airlines-manager.com/aircraft/show/104418463,15:00,1:29,310,"$655,891.00","$608,204.00","$1,961.95","$58,016.28"
EWR - BOI,56118925584,E-BOI-PBI-3,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/56118925584,https://www.airlines-manager.com/aircraft/show/104418462,16:30,2:59,310,"$655,891.00","$608,204.00","$1,961.95","$58,016.28"
EWR - BOI,56133285056,E-BOI-PBI-2,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/56133285056,https://www.airlines-manager.com/aircraft/show/104418461,23:30,9:59,310,"$655,891.00","$608,204.00","$1,961.95","$58,016.28"
EWR - BOS,56084270762,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/56084270762,https://www.airlines-manager.com/aircraft/show/104034464,3:00,5:59,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,56103828515,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/56103828515,https://www.airlines-manager.com/aircraft/show/104034463,10:00,12:59,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,56112079210,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/56112079210,https://www.airlines-manager.com/aircraft/show/104034462,12:45,15:44,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,56115475580,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/56115475580,https://www.airlines-manager.com/aircraft/show/99316501,13:45,16:44,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,56122311496,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/56122311496,https://www.airlines-manager.com/aircraft/show/104034464,17:00,19:59,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,56125474143,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/56125474143,https://www.airlines-manager.com/aircraft/show/104034463,20:00,22:59,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,56131084918,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/56131084918,https://www.airlines-manager.com/aircraft/show/104034462,22:45,1:44,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,56133285086,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/56133285086,https://www.airlines-manager.com/aircraft/show/99316501,23:45,2:44,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BRU,56084270724,E-84B-1  B2,777-300,https://www.airlines-manager.com/network/showline/49921920,https://www.airlines-manager.com/network/showflight/56084270724,https://www.airlines-manager.com/aircraft/show/117958695,2:30,17:44,852,"$2,501,229.00","$2,275,215.00","$2,670.44","$149,357.66"
EWR - BRU,56115475704,E-84B-4  B2,777-300,https://www.airlines-manager.com/network/showline/49921920,https://www.airlines-manager.com/network/showflight/56115475704,https://www.airlines-manager.com/aircraft/show/117958698,14:30,5:44,852,"$2,501,229.00","$2,275,215.00","$2,670.44","$149,357.66"
EWR - BTV,56103538609,E-FCA-CID-1,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/56103538609,https://www.airlines-manager.com/aircraft/show/116042866,8:45,11:59,310,"$140,026.00","$120,811.00",$389.71,"$37,364.23"
EWR - BTV,56112079172,E-FCA-CID-4,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/56112079172,https://www.airlines-manager.com/aircraft/show/116042863,12:00,15:14,310,"$140,026.00","$120,811.00",$389.71,"$37,364.23"
EWR - BTV,56112079173,E-FCA-CID-3,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/56112079173,https://www.airlines-manager.com/aircraft/show/116042864,13:00,16:14,310,"$140,026.00","$120,811.00",$389.71,"$37,364.23"
EWR - BTV,56125474001,E-FCA-CID-2,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/56125474001,https://www.airlines-manager.com/aircraft/show/116042865,18:45,21:59,310,"$140,026.00","$120,811.00",$389.71,"$37,364.23"
EWR - BUF,56096590117,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/56096590117,https://www.airlines-manager.com/aircraft/show/106104450,5:30,8:44,112,"$70,781.00","$57,977.00",$517.65,"$17,931.03"
EWR - BUF,56107731588,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/56107731588,https://www.airlines-manager.com/aircraft/show/105731236,11:00,14:14,320,"$154,671.00","$130,701.00",$408.44,"$40,422.99"
EWR - BUF,56115475705,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/56115475705,https://www.airlines-manager.com/aircraft/show/88494376,14:45,17:59,320,"$154,671.00","$130,701.00",$408.44,"$40,422.99"
EWR - BUF,56125473951,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/56125473951,https://www.airlines-manager.com/aircraft/show/88494377,18:30,21:44,320,"$154,671.00","$130,701.00",$408.44,"$40,422.99"
EWR - BUF,56131084924,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/56131084924,https://www.airlines-manager.com/aircraft/show/88494375,23:00,2:14,320,"$154,671.00","$130,701.00",$408.44,"$40,422.99"
EWR - BWI,56084270460,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/56084270460,https://www.airlines-manager.com/aircraft/show/104034464,0:15,2:59,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,56093103004,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/56093103004,https://www.airlines-manager.com/aircraft/show/104034463,3:15,5:59,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,56103828514,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/56103828514,https://www.airlines-manager.com/aircraft/show/104034462,10:00,12:44,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,56107731648,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/56107731648,https://www.airlines-manager.com/aircraft/show/99316501,11:00,13:44,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,56115475692,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/56115475692,https://www.airlines-manager.com/aircraft/show/104034464,14:15,16:59,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,56122311522,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/56122311522,https://www.airlines-manager.com/aircraft/show/104034463,17:15,19:59,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,56125474142,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/56125474142,https://www.airlines-manager.com/aircraft/show/104034462,20:00,22:44,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,56128543942,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/56128543942,https://www.airlines-manager.com/aircraft/show/99316501,21:00,23:44,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BZN,56084270480,E-BIL-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/56084270480,https://www.airlines-manager.com/aircraft/show/116047885,0:30,9:44,320,"$592,989.00","$546,085.00","$1,706.52","$59,142.78"
EWR - BZN,56112079144,E-BIL-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/56112079144,https://www.airlines-manager.com/aircraft/show/116047884,12:00,21:14,320,"$592,989.00","$546,085.00","$1,706.52","$59,142.78"
EWR - BZN,56112079145,E-BIL-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/56112079145,https://www.airlines-manager.com/aircraft/show/116047883,13:30,22:44,320,"$592,989.00","$546,085.00","$1,706.52","$59,142.78"
EWR - BZN,56131084881,E-BIL-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/56131084881,https://www.airlines-manager.com/aircraft/show/116047882,22:30,7:44,320,"$592,989.00","$546,085.00","$1,706.52","$59,142.78"
EWR - CAK,56103538579,E-BIL-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/56103538579,https://www.airlines-manager.com/aircraft/show/116047884,8:30,11:59,320,"$191,026.00","$166,924.00",$521.64,"$47,920.77"
EWR - CAK,56103828460,E-BIL-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/56103828460,https://www.airlines-manager.com/aircraft/show/116047883,10:00,13:29,320,"$191,026.00","$166,924.00",$521.64,"$47,920.77"
EWR - CAK,56125474020,E-BIL-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/56125474020,https://www.airlines-manager.com/aircraft/show/116047882,19:00,22:29,320,"$191,026.00","$166,924.00",$521.64,"$47,920.77"
EWR - CAK,56128543931,E-BIL-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/56128543931,https://www.airlines-manager.com/aircraft/show/116047885,21:00,0:29,287,"$179,055.00","$155,290.00",$541.08,"$44,580.86"
EWR - CDG,56084270764,E-56A-5 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/56084270764,https://www.airlines-manager.com/aircraft/show/106813011,3:00,18:14,748,"$2,340,297.00","$2,079,866.00","$2,780.57","$136,533.87"
EWR - CDG,56103538611,E-56A-6 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/56103538611,https://www.airlines-manager.com/aircraft/show/106813012,8:45,23:59,748,"$2,340,297.00","$2,079,866.00","$2,780.57","$136,533.87"
EWR - CDG,56125474039,E-56A-2 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/56125474039,https://www.airlines-manager.com/aircraft/show/106813008,19:00,10:14,564,"$1,761,616.00","$1,584,113.00","$2,808.71","$103,989.91"
EWR - CHS,56103538585,E-TUL-DSM-1,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/56103538585,https://www.airlines-manager.com/aircraft/show/110044463,8:30,12:59,310,"$289,603.00","$264,659.00",$853.74,"$59,031.75"
EWR - CHS,56112079190,E-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/56112079190,https://www.airlines-manager.com/aircraft/show/110113039,12:00,16:29,112,"$138,180.00","$122,117.00","$1,090.33","$27,237.99"
EWR - CHS,56115475686,E-TUL-DSM-4,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/56115475686,https://www.airlines-manager.com/aircraft/show/110044466,14:15,18:44,310,"$289,603.00","$264,659.00",$853.74,"$59,031.75"
EWR - CHS,56128543963,E-TUL-DSM-3,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/56128543963,https://www.airlines-manager.com/aircraft/show/110044465,21:15,1:44,310,"$289,603.00","$264,659.00",$853.74,"$59,031.75"
EWR - CHS,56131084935,E-TUL-DSM-2,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/56131084935,https://www.airlines-manager.com/aircraft/show/110044464,23:00,3:29,283,"$274,855.00","$250,376.00",$884.72,"$55,845.95"
EWR - CID,56084270594,E-FCA-CID-4,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/56084270594,https://www.airlines-manager.com/aircraft/show/116042863,1:15,6:59,310,"$357,618.00","$329,009.00","$1,061.32","$57,385.29"
EWR - CID,56084270595,E-FCA-CID-3,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/56084270595,https://www.airlines-manager.com/aircraft/show/116042864,2:15,7:59,310,"$357,618.00","$329,009.00","$1,061.32","$57,385.29"
EWR - CID,56103828497,E-FCA-CID-2,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/56103828497,https://www.airlines-manager.com/aircraft/show/116042865,10:00,15:44,310,"$357,618.00","$329,009.00","$1,061.32","$57,385.29"
EWR - CID,56131084824,E-FCA-CID-1,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/56131084824,https://www.airlines-manager.com/aircraft/show/116042866,22:00,3:44,296,"$348,152.00","$319,893.00","$1,080.72","$55,795.29"
EWR - CLE,56084270671,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/56084270671,https://www.airlines-manager.com/aircraft/show/106104450,1:45,5:29,112,"$92,088.00","$77,509.00",$692.04,"$20,761.34"
EWR - CLE,56093103185,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/56093103185,https://www.airlines-manager.com/aircraft/show/105731236,5:00,8:44,320,"$198,609.00","$171,795.00",$536.86,"$46,016.52"
EWR - CLE,56107731577,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/56107731577,https://www.airlines-manager.com/aircraft/show/88494376,11:00,14:44,320,"$198,609.00","$171,795.00",$536.86,"$46,016.52"
EWR - CLE,56115475706,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/56115475706,https://www.airlines-manager.com/aircraft/show/88494377,14:45,18:29,320,"$198,609.00","$171,795.00",$536.86,"$46,016.52"
EWR - CLE,56125474045,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/56125474045,https://www.airlines-manager.com/aircraft/show/88494375,19:15,22:59,320,"$198,609.00","$171,795.00",$536.86,"$46,016.52"
EWR - CLT,56084270664,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/56084270664,https://www.airlines-manager.com/aircraft/show/104034462,1:45,5:59,216,"$190,091.00","$163,580.00",$757.31,"$38,640.94"
EWR - CLT,56084270665,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/56084270665,https://www.airlines-manager.com/aircraft/show/99316501,2:45,6:59,216,"$190,091.00","$163,580.00",$757.31,"$38,640.94"
EWR - CLT,56103828516,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/56103828516,https://www.airlines-manager.com/aircraft/show/104034464,10:00,14:14,216,"$190,091.00","$163,580.00",$757.31,"$38,640.94"
EWR - CLT,56112079313,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/56112079313,https://www.airlines-manager.com/aircraft/show/104034463,13:00,17:14,216,"$190,091.00","$163,580.00",$757.31,"$38,640.94"
EWR - CLT,56118925494,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/56118925494,https://www.airlines-manager.com/aircraft/show/104034462,15:45,19:59,216,"$190,091.00","$163,580.00",$757.31,"$38,640.94"
EWR - CLT,56118925495,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/56118925495,https://www.airlines-manager.com/aircraft/show/99316501,16:45,20:59,216,"$190,091.00","$163,580.00",$757.31,"$38,640.94"
EWR - CLT,56125474144,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/56125474144,https://www.airlines-manager.com/aircraft/show/104034464,20:00,0:14,216,"$190,091.00","$163,580.00",$757.31,"$38,640.94"
EWR - CLT,56131084938,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/56131084938,https://www.airlines-manager.com/aircraft/show/104034463,23:00,3:14,216,"$190,091.00","$163,580.00",$757.31,"$38,640.94"
EWR - CMH,56093103152,E-BNA-JAX-2,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/56093103152,https://www.airlines-manager.com/aircraft/show/104610409,4:30,8:29,310,"$223,693.00","$199,539.00",$643.67,"$50,093.47"
EWR - CMH,56103538583,E-BNA-JAX-1,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/56103538583,https://www.airlines-manager.com/aircraft/show/104610410,8:30,12:29,310,"$223,693.00","$199,539.00",$643.67,"$50,093.47"
EWR - CMH,56112079319,E-BNA-JAX-5,ERJ-175,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/56112079319,https://www.airlines-manager.com/aircraft/show/96421247,13:00,16:59,112,"$104,115.00","$88,818.00",$793.02,"$22,297.41"
EWR - CMH,56122311514,E-BNA-JAX-4,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/56122311514,https://www.airlines-manager.com/aircraft/show/104610407,17:15,21:14,310,"$223,693.00","$199,539.00",$643.67,"$50,093.47"
EWR - CMH,56133285031,E-BNA-JAX-3,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/56133285031,https://www.airlines-manager.com/aircraft/show/104610408,23:15,3:14,310,"$223,693.00","$199,539.00",$643.67,"$50,093.47"
EWR - COS,56084270625,E-COS-ICT-1,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/56084270625,https://www.airlines-manager.com/aircraft/show/108834808,1:30,9:59,310,"$535,609.00","$493,957.00","$1,593.41","$58,226.76"
EWR - COS,56093103034,E-COS-ICT-4,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/56093103034,https://www.airlines-manager.com/aircraft/show/108834811,3:30,11:59,310,"$535,609.00","$493,957.00","$1,593.41","$58,226.76"
EWR - COS,56112079323,E-COS-ICT-5,ERJ-175,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/56112079323,https://www.airlines-manager.com/aircraft/show/108466265,13:00,21:29,112,"$251,439.00","$223,621.00","$1,996.62","$26,360.04"
EWR - COS,56118925586,E-COS-ICT-3,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/56118925586,https://www.airlines-manager.com/aircraft/show/108834810,16:30,0:59,310,"$535,609.00","$493,957.00","$1,593.41","$58,226.76"
EWR - COS,56125473962,E-COS-ICT-2,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/56125473962,https://www.airlines-manager.com/aircraft/show/108834809,18:30,2:59,310,"$535,609.00","$493,957.00","$1,593.41","$58,226.76"
EWR - CRW,56084270634,E-CRW E,A319-100,https://www.airlines-manager.com/network/showline/50838186,https://www.airlines-manager.com/network/showflight/56084270634,https://www.airlines-manager.com/aircraft/show/120941964,1:30,5:14,216,"$155,815.00","$139,188.00",$644.39,"$37,282.50"
EWR - CRW,56107731537,E-CRW E,A319-100,https://www.airlines-manager.com/network/showline/50838186,https://www.airlines-manager.com/network/showflight/56107731537,https://www.airlines-manager.com/aircraft/show/120941964,10:30,14:14,216,"$155,815.00","$139,188.00",$644.39,"$37,282.50"
EWR - CRW,56115475693,E-CRW E,A319-100,https://www.airlines-manager.com/network/showline/50838186,https://www.airlines-manager.com/network/showflight/56115475693,https://www.airlines-manager.com/aircraft/show/120941964,14:15,17:59,216,"$155,815.00","$139,188.00",$644.39,"$37,282.50"
EWR - CRW,56122311618,E-CRW E,A319-100,https://www.airlines-manager.com/network/showline/50838186,https://www.airlines-manager.com/network/showflight/56122311618,https://www.airlines-manager.com/aircraft/show/120941964,18:00,21:44,216,"$155,815.00","$139,188.00",$644.39,"$37,282.50"
EWR - CRW,56131084807,E-CRW E,A319-100,https://www.airlines-manager.com/network/showline/50838186,https://www.airlines-manager.com/network/showflight/56131084807,https://www.airlines-manager.com/aircraft/show/120941964,21:45,1:29,216,"$155,815.00","$139,188.00",$644.39,"$37,282.50"
EWR - CUN,56084270507,E-CUN-SJU-3,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/56084270507,https://www.airlines-manager.com/aircraft/show/106581306,0:45,8:44,320,"$522,882.00","$475,106.00","$1,484.71","$59,512.23"
EWR - CUN,56084270508,E-CUN-SJU-2,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/56084270508,https://www.airlines-manager.com/aircraft/show/106581305,2:15,10:14,320,"$522,882.00","$475,106.00","$1,484.71","$59,512.23"
EWR - CUN,56112079253,E-CUN-SJU-1,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/56112079253,https://www.airlines-manager.com/aircraft/show/106581304,13:00,20:59,320,"$522,882.00","$475,106.00","$1,484.71","$59,512.23"
EWR - CUN,56115475697,E-CUN-SJU-4,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/56115475697,https://www.airlines-manager.com/aircraft/show/106581307,14:30,22:29,320,"$522,882.00","$475,106.00","$1,484.71","$59,512.23"
EWR - CUN,56131084844,E-CUN-SJU-5,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/56131084844,https://www.airlines-manager.com/aircraft/show/86238754,22:15,6:14,320,"$522,882.00","$475,106.00","$1,484.71","$59,512.23"
EWR - CVG,56084270457,E-BNA-JAX-2,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/56084270457,https://www.airlines-manager.com/aircraft/show/104610409,0:15,4:29,310,"$271,945.00","$244,220.00",$787.81,"$57,689.76"
EWR - CVG,56093103127,E-BNA-JAX-1,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/56093103127,https://www.airlines-manager.com/aircraft/show/104610410,4:15,8:29,310,"$271,945.00","$244,220.00",$787.81,"$57,689.76"
EWR - CVG,56103538569,E-BNA-JAX-5,ERJ-175,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/56103538569,https://www.airlines-manager.com/aircraft/show/96421247,8:15,12:29,112,"$128,787.00","$111,161.00",$992.51,"$26,258.50"
EWR - CVG,56112079298,E-BNA-JAX-4,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/56112079298,https://www.airlines-manager.com/aircraft/show/104610407,13:00,17:14,310,"$271,945.00","$244,220.00",$787.81,"$57,689.76"
EWR - CVG,56125474032,E-BNA-JAX-3,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/56125474032,https://www.airlines-manager.com/aircraft/show/104610408,19:00,23:14,310,"$271,945.00","$244,220.00",$787.81,"$57,689.76"
EWR - DEN,56084270656,E-DEN-SLC-1,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/56084270656,https://www.airlines-manager.com/aircraft/show/86270785,1:45,9:59,310,"$531,120.00","$467,014.00","$1,506.50","$56,722.35"
EWR - DEN,56084270657,E-DEN-SLC-4,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/56084270657,https://www.airlines-manager.com/aircraft/show/90452835,2:45,10:59,310,"$531,120.00","$467,014.00","$1,506.50","$56,722.35"
EWR - DEN,56103828472,E-DEN-SLC-2,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/56103828472,https://www.airlines-manager.com/aircraft/show/87153196,10:00,18:14,310,"$531,120.00","$467,014.00","$1,506.50","$56,722.35"
EWR - DEN,56107731616,E-DEN-SLC-3,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/56107731616,https://www.airlines-manager.com/aircraft/show/86270783,11:00,19:14,310,"$531,120.00","$467,014.00","$1,506.50","$56,722.35"
EWR - DEN,56118925540,E-DEN-SLC-5,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/56118925540,https://www.airlines-manager.com/aircraft/show/90452833,16:00,0:14,310,"$531,120.00","$467,014.00","$1,506.50","$56,722.35"
EWR - DEN,56122311497,E-DEN-SLC-6 B,A319-100,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/56122311497,https://www.airlines-manager.com/aircraft/show/105223076,17:00,1:14,198,"$399,942.00","$348,588.00","$1,760.55","$42,338.62"
EWR - DFW,56084270713,E-DFW-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/56084270713,https://www.airlines-manager.com/aircraft/show/90489724,2:30,9:59,320,"$475,228.00","$410,113.00","$1,281.60","$54,803.52"
EWR - DFW,56093103023,E-DFW-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/56093103023,https://www.airlines-manager.com/aircraft/show/86238753,3:30,10:59,320,"$475,228.00","$410,113.00","$1,281.60","$54,803.52"
EWR - DFW,56103828440,E-DFW-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/56103828440,https://www.airlines-manager.com/aircraft/show/90489725,10:00,17:29,320,"$475,228.00","$410,113.00","$1,281.60","$54,803.52"
EWR - DFW,56107731650,E-DFW-ATL-6 B,A319-100,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/56107731650,https://www.airlines-manager.com/aircraft/show/105222360,11:00,18:29,198,"$359,120.00","$313,518.00","$1,583.42","$41,895.50"
EWR - DFW,56112079194,E-DFW-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/56112079194,https://www.airlines-manager.com/aircraft/show/86238752,12:15,19:44,320,"$475,228.00","$410,113.00","$1,281.60","$54,803.52"
EWR - DFW,56125474046,E-DFW-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/56125474046,https://www.airlines-manager.com/aircraft/show/90489726,19:15,2:44,320,"$475,228.00","$410,113.00","$1,281.60","$54,803.52"
EWR - DSM,56084270690,E-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/56084270690,https://www.airlines-manager.com/aircraft/show/110113039,2:00,7:59,112,"$178,037.00","$157,997.00","$1,410.69","$26,406.18"
EWR - DSM,56093103130,E-TUL-DSM-4,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/56093103130,https://www.airlines-manager.com/aircraft/show/110044466,4:15,10:14,310,"$376,654.00","$346,204.00","$1,116.79","$57,861.39"
EWR - DSM,56112079171,E-TUL-DSM-3,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/56112079171,https://www.airlines-manager.com/aircraft/show/110044465,12:00,17:59,310,"$376,654.00","$346,204.00","$1,116.79","$57,861.39"
EWR - DSM,56115475576,E-TUL-DSM-2,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/56115475576,https://www.airlines-manager.com/aircraft/show/110044464,13:45,19:44,310,"$376,654.00","$346,204.00","$1,116.79","$57,861.39"
EWR - DSM,56131084887,E-TUL-DSM-1,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/56131084887,https://www.airlines-manager.com/aircraft/show/110044463,22:30,4:29,278,"$353,555.00","$323,994.00","$1,165.45","$54,149.42"
EWR - DTW,56093103024,E-DTW-YYZ-5,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/56093103024,https://www.airlines-manager.com/aircraft/show/92003921,3:30,7:29,320,"$228,249.00","$191,002.00",$596.88,"$47,950.29"
EWR - DTW,56103828445,E-DTW-YYZ-1,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/56103828445,https://www.airlines-manager.com/aircraft/show/92003925,10:00,13:59,320,"$228,249.00","$191,002.00",$596.88,"$47,950.29"
EWR - DTW,56112079333,E-DTW-YYZ-2,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/56112079333,https://www.airlines-manager.com/aircraft/show/92003924,13:30,17:29,320,"$228,249.00","$191,002.00",$596.88,"$47,950.29"
EWR - DTW,56131084795,E-DTW-YYZ-3,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/56131084795,https://www.airlines-manager.com/aircraft/show/92003923,21:45,1:44,320,"$228,249.00","$191,002.00",$596.88,"$47,950.29"
EWR - DTW,56131084796,E-DTW-YYZ-4,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/56131084796,https://www.airlines-manager.com/aircraft/show/92003922,22:15,2:14,320,"$228,249.00","$191,002.00",$596.88,"$47,950.29"
EWR - DUB,56093103016,E-56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/56093103016,https://www.airlines-manager.com/aircraft/show/106721557,3:30,16:59,598,"$1,662,831.00","$1,551,567.00","$2,594.59","$115,072.95"
EWR - DUB,56096590087,E-56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/56096590087,https://www.airlines-manager.com/aircraft/show/106721559,5:15,18:44,598,"$1,662,831.00","$1,551,567.00","$2,594.59","$115,072.95"
EWR - DUB,56107731529,E-56C-6 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/56107731529,https://www.airlines-manager.com/aircraft/show/106721561,10:30,23:59,598,"1,662,831$","1,551,567$","$2,594.59","$115,072.95"
EWR - ECP,56084270549,E-MTJ-ECP-3,737-900ER,https://www.airlines-manager.com/network/showline/50761178,https://www.airlines-manager.com/network/showflight/56084270549,https://www.airlines-manager.com/aircraft/show/120706944,1:00,6:44,320,"371,504$","337,111$","$1,053.47","$58,798.43"
EWR - ECP,56103828469,E-MTJ-ECP-2,737-900ER,https://www.airlines-manager.com/network/showline/50761178,https://www.airlines-manager.com/network/showflight/56103828469,https://www.airlines-manager.com/aircraft/show/120706945,10:00,15:44,320,"371,504$","337,111$","$1,053.47","$58,798.43"
EWR - ECP,56115475746,E-MTJ-ECP-4,737-900ER,https://www.airlines-manager.com/network/showline/50761178,https://www.airlines-manager.com/network/showflight/56115475746,https://www.airlines-manager.com/aircraft/show/120706943,15:00,20:44,320,"371,504$","337,111$","$1,053.47","$58,798.43"
EWR - ECP,56125474024,E-MTJ-ECP-1,737-900ER,https://www.airlines-manager.com/network/showline/50761178,https://www.airlines-manager.com/network/showflight/56125474024,https://www.airlines-manager.com/aircraft/show/120706946,19:00,0:44,320,"$371,504.00","$337,111.00","$1,053.47","$58,798.43"
EWR - EDI,56093103111,E-56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/56093103111,https://www.airlines-manager.com/aircraft/show/106721558,4:15,17:59,598,"$1,648,512.00","$1,541,221.00","$2,577.29","$112,224.83"
EWR - EDI,56096590136,E-56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/56096590136,https://www.airlines-manager.com/aircraft/show/106721560,6:00,19:44,598,"$1,648,512.00","$1,541,221.00","$2,577.29","$112,224.83"
EWR - EDI,56125474091,E-56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/56125474091,https://www.airlines-manager.com/aircraft/show/106721560,19:45,9:29,598,"$1,648,512.00","$1,541,221.00","$2,577.29","$112,224.83"
EWR - ELP,56084270471,E-ELP-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/56084270471,https://www.airlines-manager.com/aircraft/show/103365577,0:30,9:59,320,"$593,056.00","$543,274.00","$1,697.73","$57,287.24"
EWR - ELP,56084270472,E-ELP-SAT-5 B,A319-100,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/56084270472,https://www.airlines-manager.com/aircraft/show/110582847,2:30,11:59,198,"$446,662.00","$410,459.00","$2,073.03","$43,282.14"
EWR - ELP,56103828454,E-ELP-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/56103828454,https://www.airlines-manager.com/aircraft/show/103365578,10:00,19:29,320,"$593,056.00","$543,274.00","$1,697.73","$57,287.24"
EWR - ELP,56112079134,E-ELP-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/56112079134,https://www.airlines-manager.com/aircraft/show/103365575,12:00,21:29,320,"$593,056.00","$543,274.00","$1,697.73","$57,287.24"
EWR - ELP,56118925565,E-ELP-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/56118925565,https://www.airlines-manager.com/aircraft/show/103365576,16:15,1:44,320,"$593,056.00","$543,274.00","$1,697.73","$57,287.24"
EWR - EUG,56084270651,E-EUG-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/56084270651,https://www.airlines-manager.com/aircraft/show/119220438,1:45,13:29,320,"$729,984.00","$674,719.00","$2,108.50","$57,504.46"
EWR - EUG,56112079149,E-EUG-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/56112079149,https://www.airlines-manager.com/aircraft/show/119220435,12:00,23:44,320,"$729,984.00","$674,719.00","$2,108.50","$57,504.46"
EWR - EUG,56115475618,E-EUG-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/56115475618,https://www.airlines-manager.com/aircraft/show/119220436,14:00,1:44,320,"$729,984.00","$674,719.00","$2,108.50","$57,504.46"
EWR - EUG,56133285076,E-EUG-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/56133285076,https://www.airlines-manager.com/aircraft/show/119220437,23:45,11:29,320,"$729,984.00","$674,719.00","$2,108.50","$57,504.46"
EWR - FAR,56084270655,E-LIT-FAR-4,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/56084270655,https://www.airlines-manager.com/aircraft/show/86270784,1:45,8:29,310,"$425,315.00","$392,348.00","$1,265.64","$58,269.50"
EWR - FAR,56093103187,E-LIT-FAR-3,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/56093103187,https://www.airlines-manager.com/aircraft/show/86270786,5:00,11:44,310,"$425,315.00","$392,348.00","$1,265.64","$58,269.50"
EWR - FAR,56115475748,E-LIT-FAR-2,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/56115475748,https://www.airlines-manager.com/aircraft/show/86270787,15:00,21:44,310,"$425,315.00","$392,348.00","$1,265.64","$58,269.50"
EWR - FAR,56125474054,E-LIT-FAR-1,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/56125474054,https://www.airlines-manager.com/aircraft/show/90452834,19:15,1:59,310,"$425,315.00","$392,348.00","$1,265.64","$58,269.50"
EWR - FAT,56084270432,E-PSP-FAT-2,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/56084270432,https://www.airlines-manager.com/aircraft/show/119220451,0:15,11:44,338,"$779,642.00","$731,517.00","$2,164.25","$63,702.50"
EWR - FAT,56107731561,E-PSP-FAT-3,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/56107731561,https://www.airlines-manager.com/aircraft/show/119220452,11:00,22:29,338,"$779,642.00","$731,517.00","$2,164.25","$63,702.50"
EWR - FAT,56112079220,E-PSP-FAT-4,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/56112079220,https://www.airlines-manager.com/aircraft/show/116672810,13:00,0:29,338,"$779,642.00","$731,517.00","$2,164.25","$63,702.50"
EWR - FAT,56131084840,E-PSP-FAT-1,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/56131084840,https://www.airlines-manager.com/aircraft/show/119220450,22:15,9:44,338,"$779,642.00","$731,517.00","$2,164.25","$63,702.50"
EWR - FCA,56112079174,E-FCA-CID-1,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/56112079174,https://www.airlines-manager.com/aircraft/show/116042866,12:00,21:59,310,"$626,012.00","$581,310.00","$1,875.19","$58,228.05"
EWR - FCA,56118925460,E-FCA-CID-4,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/56118925460,https://www.airlines-manager.com/aircraft/show/116042863,15:15,1:14,310,"$626,012.00","$581,310.00","$1,875.19","$58,228.05"
EWR - FCA,56118925461,E-FCA-CID-3,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/56118925461,https://www.airlines-manager.com/aircraft/show/116042864,16:15,2:14,310,"$626,012.00","$581,310.00","$1,875.19","$58,228.05"
EWR - FCA,56131084823,E-FCA-CID-2,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/56131084823,https://www.airlines-manager.com/aircraft/show/116042865,22:00,7:59,310,"$626,012.00","$581,310.00","$1,875.19","$58,228.05"
EWR - FCO,56084270723,E-84A-2 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/56084270723,https://www.airlines-manager.com/aircraft/show/94521252,2:30,19:59,852,"$2,914,869.00","$2,640,955.00","$3,099.71","$151,055.58"
EWR - FCO,56112079183,E-84A-3 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/56112079183,https://www.airlines-manager.com/aircraft/show/90656553,12:00,5:29,852,"$2,914,869.00","$2,640,955.00","$3,099.71","$151,055.58"
EWR - FLL,56093103055,E-DTW-YYZ-2,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/56093103055,https://www.airlines-manager.com/aircraft/show/92003924,3:45,9:59,320,"$392,797.00","$352,784.00","$1,102.45","$56,596.36"
EWR - FLL,56096590121,E-DTW-YYZ-4,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/56096590121,https://www.airlines-manager.com/aircraft/show/92003922,5:45,11:59,320,"$392,797.00","$352,784.00","$1,102.45","$56,596.36"
EWR - FLL,56107731582,E-DTW-YYZ-5,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/56107731582,https://www.airlines-manager.com/aircraft/show/92003921,11:00,17:14,320,"$392,797.00","$352,784.00","$1,102.45","$56,596.36"
EWR - FLL,56112079129,E-DTW-YYZ-3,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/56112079129,https://www.airlines-manager.com/aircraft/show/92003923,12:00,18:14,320,"$392,797.00","$352,784.00","$1,102.45","$56,596.36"
EWR - FLL,56122311528,E-DTW-YYZ-1,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/56122311528,https://www.airlines-manager.com/aircraft/show/92003925,17:30,23:44,320,"$392,797.00","$352,784.00","$1,102.45","$56,596.36"
EWR - FRA,56084270745,E-56B-5 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/56084270745,https://www.airlines-manager.com/aircraft/show/94521253,2:45,18:44,748,"$2,453,250.00","$2,188,346.00","$2,925.60","$136,914.24"
EWR - FRA,56093103156,E-56B-3 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/56093103156,https://www.airlines-manager.com/aircraft/show/90656555,4:30,20:29,748,"$2,453,250.00","$2,188,346.00","$2,925.60","$136,914.24"
EWR - FRA,56096590167,E-56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/56096590167,https://www.airlines-manager.com/aircraft/show/94521251,6:15,22:14,748,"$2,215,081.00","$2,014,089.00","$2,692.63","$126,011.82"
EWR - FSD,56093103128,E-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/56093103128,https://www.airlines-manager.com/aircraft/show/107161240,4:15,10:59,310,"$412,992.00","$380,511.00","$1,227.45","$56,511.53"
EWR - FSD,56103538634,E-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/56103538634,https://www.airlines-manager.com/aircraft/show/86782214,9:00,15:44,112,"$194,519.00","$172,989.00","$1,544.54","$25,691.44"
EWR - FSD,56107731632,E-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/56107731632,https://www.airlines-manager.com/aircraft/show/107161239,11:00,17:44,310,"$412,992.00","$380,511.00","$1,227.45","$56,511.53"
EWR - FSD,56118925440,E-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/56118925440,https://www.airlines-manager.com/aircraft/show/107161241,15:15,21:59,310,"$412,992.00","$380,511.00","$1,227.45","$56,511.53"
EWR - FSD,56122311665,E-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/56122311665,https://www.airlines-manager.com/aircraft/show/107161238,18:15,0:59,283,"$391,575.00","$359,960.00","$1,271.94","$53,459.41"
EWR - GRR,56103538590,E-RAP-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/56103538590,https://www.airlines-manager.com/aircraft/show/116042862,8:30,12:59,310,"$278,034.00","$253,092.00",$816.43,"$56,451.75"
EWR - GRR,56115475657,E-RAP-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/56115475657,https://www.airlines-manager.com/aircraft/show/116042859,14:00,18:29,310,"$278,034.00","$253,092.00",$816.43,"$56,451.75"
EWR - GRR,56125474082,E-RAP-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/56125474082,https://www.airlines-manager.com/aircraft/show/116042860,19:30,23:59,310,"$278,034.00","$253,092.00",$816.43,"$56,451.75"
EWR - GRR,56128543831,E-RAP-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/56128543831,https://www.airlines-manager.com/aircraft/show/116042861,20:45,1:14,310,"$278,034.00","$253,092.00",$816.43,"$56,451.75"
EWR - GSO,56093103068,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/56093103068,https://www.airlines-manager.com/aircraft/show/119220544,3:45,7:29,310,"$217,652.00","$195,033.00",$629.14,"$52,240.98"
EWR - GSO,56103828503,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/56103828503,https://www.airlines-manager.com/aircraft/show/119220543,10:00,13:44,310,"$217,652.00","$195,033.00",$629.14,"$52,240.98"
EWR - GSO,56115475699,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/56115475699,https://www.airlines-manager.com/aircraft/show/119220542,14:30,18:14,310,"$217,652.00","$195,033.00",$629.14,"$52,240.98"
EWR - GSO,56133285034,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/56133285034,https://www.airlines-manager.com/aircraft/show/119220545,23:15,2:59,310,"$217,652.00","$195,033.00",$629.14,"$52,240.98"
EWR - HEL,56107731540,E-56D-6 E,787-10,https://www.airlines-manager.com/network/showline/50072206,https://www.airlines-manager.com/network/showflight/56107731540,https://www.airlines-manager.com/aircraft/show/118644441,10:45,3:29,648,"$2,056,992.00","$1,921,807.00","$2,965.75","$114,849.02"
EWR - HEL,56107731541,E-56D-7 E,787-10,https://www.airlines-manager.com/network/showline/50072206,https://www.airlines-manager.com/network/showflight/56107731541,https://www.airlines-manager.com/aircraft/show/118644442,11:00,3:44,648,"$2,056,992.00","$1,921,807.00","$2,965.75","$114,849.02"
EWR - HEL,56125474119,E-56D-2 E,787-10,https://www.airlines-manager.com/network/showline/50072206,https://www.airlines-manager.com/network/showflight/56125474119,https://www.airlines-manager.com/aircraft/show/118644437,20:00,12:44,579,"$1,909,835.00","$1,781,745.00","$3,077.28","$106,478.78"
EWR - IAH,56093103013,E-IAH-LAS-3,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/56093103013,https://www.airlines-manager.com/aircraft/show/105859512,3:30,10:59,338,"$519,680.00","$471,818.00","$1,395.91","$63,049.18"
EWR - IAH,56093103014,E-IAH-LAS-5,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/56093103014,https://www.airlines-manager.com/aircraft/show/105859514,4:30,11:59,338,"$519,680.00","$471,818.00","$1,395.91","$63,049.18"
EWR - IAH,56099991632,E-IAH-LAS-1,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/56099991632,https://www.airlines-manager.com/aircraft/show/105859510,7:30,14:59,338,"$519,680.00","$471,818.00","$1,395.91","$63,049.18"
EWR - IAH,56107731552,E-IAH-LAS-2,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/56107731552,https://www.airlines-manager.com/aircraft/show/105859511,11:00,18:29,338,"$519,680.00","$471,818.00","$1,395.91","$63,049.18"
EWR - IAH,56112079119,E-IAH-LAS-4,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/56112079119,https://www.airlines-manager.com/aircraft/show/105859513,12:00,19:29,338,"$519,680.00","$471,818.00","$1,395.91","$63,049.18"
EWR - IAH,56125474006,E-IAH-LAS-6,ERJ-175,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/56125474006,https://www.airlines-manager.com/aircraft/show/105864236,18:45,2:14,112,"$226,313.00","$194,106.00","$1,733.09","$25,938.44"
EWR - ICT,56084270558,E-COS-ICT-3,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/56084270558,https://www.airlines-manager.com/aircraft/show/108834810,1:00,7:59,310,"$442,853.00","$408,153.00","$1,316.62","$58,446.73"
EWR - ICT,56084270559,E-COS-ICT-2,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/56084270559,https://www.airlines-manager.com/aircraft/show/108834809,3:00,9:59,310,"$442,853.00","$408,153.00","$1,316.62","$58,446.73"
EWR - ICT,56107731637,E-COS-ICT-1,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/56107731637,https://www.airlines-manager.com/aircraft/show/108834808,11:00,17:59,310,"$442,853.00","$408,153.00","$1,316.62","$58,446.73"
EWR - ICT,56112079304,E-COS-ICT-4,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/56112079304,https://www.airlines-manager.com/aircraft/show/108834811,13:00,19:59,310,"$442,853.00","$408,153.00","$1,316.62","$58,446.73"
EWR - ICT,56128543990,E-COS-ICT-5,ERJ-175,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/56128543990,https://www.airlines-manager.com/aircraft/show/108466265,21:30,4:29,112,"$209,485.00","$186,465.00","$1,664.87","$26,701.43"
EWR - IND,56084270467,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/56084270467,https://www.airlines-manager.com/aircraft/show/88494376,0:30,4:59,320,"$295,294.00","$263,726.00",$824.14,"$58,823.64"
EWR - IND,56093103114,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/56093103114,https://www.airlines-manager.com/aircraft/show/88494377,4:15,8:44,320,"$295,294.00","$263,726.00",$824.14,"$58,823.64"
EWR - IND,56107731576,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/56107731576,https://www.airlines-manager.com/aircraft/show/88494375,11:00,15:29,320,"$295,294.00","$263,726.00",$824.14,"$58,823.64"
EWR - IND,56122311545,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/56122311545,https://www.airlines-manager.com/aircraft/show/106104450,17:30,21:59,112,"$140,854.00","$123,199.00","$1,099.99","$27,479.33"
EWR - IND,56128543818,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/56128543818,https://www.airlines-manager.com/aircraft/show/105731236,20:45,1:14,320,"$295,294.00","$263,726.00",$824.14,"$58,823.64"
EWR - JAN,56084270680,E-LIT-FAR-1,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/56084270680,https://www.airlines-manager.com/aircraft/show/90452834,2:00,8:14,310,"$389,232.00","$358,551.00","$1,156.62","$57,521.55"
EWR - JAN,56103538580,E-LIT-FAR-4,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/56103538580,https://www.airlines-manager.com/aircraft/show/86270784,8:30,14:44,310,"$389,232.00","$358,551.00","$1,156.62","$57,521.55"
EWR - JAN,56112079159,E-LIT-FAR-3,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/56112079159,https://www.airlines-manager.com/aircraft/show/86270786,12:00,18:14,310,"$389,232.00","$358,551.00","$1,156.62","$57,521.55"
EWR - JAN,56131084804,E-LIT-FAR-2,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/56131084804,https://www.airlines-manager.com/aircraft/show/86270787,21:45,3:59,310,"$389,232.00","$358,551.00","$1,156.62","$57,521.55"
EWR - JAX,56084270698,E-BNA-JAX-4,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/56084270698,https://www.airlines-manager.com/aircraft/show/104610407,2:15,7:29,310,"$337,690.00","$308,667.00",$995.70,"$58,980.96"
EWR - JAX,56103538561,E-BNA-JAX-3,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/56103538561,https://www.airlines-manager.com/aircraft/show/104610408,8:15,13:29,310,"$337,690.00","$308,667.00",$995.70,"$58,980.96"
EWR - JAX,56115475641,E-BNA-JAX-2,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/56115475641,https://www.airlines-manager.com/aircraft/show/104610409,14:00,19:14,310,"$337,690.00","$308,667.00",$995.70,"$58,980.96"
EWR - JAX,56122311592,E-BNA-JAX-1,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/56122311592,https://www.airlines-manager.com/aircraft/show/104610410,18:00,23:14,310,"$337,690.00","$308,667.00",$995.70,"$58,980.96"
EWR - JAX,56131084836,E-BNA-JAX-5,ERJ-175,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/56131084836,https://www.airlines-manager.com/aircraft/show/96421247,22:00,3:14,112,"$160,212.00","$141,366.00","$1,262.20","$27,012.61"
EWR - KEF,56122311456,E-56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/56122311456,https://www.airlines-manager.com/aircraft/show/106721557,17:00,4:14,598,"$1,343,998.00","$1,254,987.00","$2,098.64","$111,719.91"
EWR - KEF,56122311457,E-56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/56122311457,https://www.airlines-manager.com/aircraft/show/106721558,18:00,5:14,598,"$1,343,998.00","$1,254,987.00","$2,098.64","$111,719.91"
EWR - KEF,56125473976,E-56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/56125473976,https://www.airlines-manager.com/aircraft/show/106721559,18:45,5:59,598,"$1,343,998.00","$1,254,987.00","$2,098.64","$111,719.91"
EWR - LAS,56084270428,E-IAH-LAS-2,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/56084270428,https://www.airlines-manager.com/aircraft/show/105859511,0:15,10:59,338,"$737,877.00","$673,713.00","$1,993.23","$62,768.29"
EWR - LAS,56084270429,E-IAH-LAS-4,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/56084270429,https://www.airlines-manager.com/aircraft/show/105859513,1:15,11:59,338,"$737,877.00","$673,713.00","$1,993.23","$62,768.29"
EWR - LAS,56084270430,E-IAH-LAS-6,ERJ-175,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/56084270430,https://www.airlines-manager.com/aircraft/show/105864236,2:15,12:59,112,"$318,546.00","$274,501.00","$2,450.90","$25,574.63"
EWR - LAS,56112079120,E-IAH-LAS-5,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/56112079120,https://www.airlines-manager.com/aircraft/show/105859514,12:00,22:44,338,"$737,877.00","$673,713.00","$1,993.23","$62,768.29"
EWR - LAS,56115475720,E-IAH-LAS-1,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/56115475720,https://www.airlines-manager.com/aircraft/show/105859510,15:00,1:44,338,"$737,877.00","$673,713.00","$1,993.23","$62,768.29"
EWR - LAS,56118925591,E-IAH-LAS-3,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/56118925591,https://www.airlines-manager.com/aircraft/show/105859512,16:45,3:29,338,"$737,877.00","$673,713.00","$1,993.23","$62,768.29"
EWR - LAX,56084270367,E-SFO-LAX-4,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/56084270367,https://www.airlines-manager.com/aircraft/show/89233030,0:00,11:29,400,"$937,587.00","$846,364.00","$2,115.91","$73,703.69"
EWR - LAX,56084270368,E-SFO-LAX-5,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/56084270368,https://www.airlines-manager.com/aircraft/show/89233027,2:00,13:29,400,"$937,587.00","$846,364.00","$2,115.91","$73,703.69"
EWR - LAX,56112079199,E-SFO-LAX-1,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/56112079199,https://www.airlines-manager.com/aircraft/show/83716137,12:30,23:59,400,"$937,587.00","$846,364.00","$2,115.91","$73,703.69"
EWR - LAX,56115475586,E-SFO-LAX-2,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/56115475586,https://www.airlines-manager.com/aircraft/show/89233028,14:00,1:29,400,"$937,587.00","$846,364.00","$2,115.91","$73,703.69"
EWR - LAX,56118925467,E-SFO-LAX-3,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/56118925467,https://www.airlines-manager.com/aircraft/show/89233029,15:30,2:59,400,"$937,587.00","$846,364.00","$2,115.91","$73,703.69"
EWR - LEX,56084270759,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/56084270759,https://www.airlines-manager.com/aircraft/show/119220545,3:00,7:29,310,"$273,360.00","$250,152.00",$806.94,"$55,795.99"
EWR - LEX,56103828504,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/56103828504,https://www.airlines-manager.com/aircraft/show/119220544,10:00,14:29,310,"$273,360.00","$250,152.00",$806.94,"$55,795.99"
EWR - LEX,56115475577,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/56115475577,https://www.airlines-manager.com/aircraft/show/119220543,13:45,18:14,310,"$273,360.00","$250,152.00",$806.94,"$55,795.99"
EWR - LEX,56122311666,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/56122311666,https://www.airlines-manager.com/aircraft/show/119220542,18:15,22:44,281,"$258,493.00","$235,751.00",$838.97,"$52,583.87"
EWR - LHR,56084270707,E-56A-1 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/56084270707,https://www.airlines-manager.com/aircraft/show/106813007,2:15,16:44,748,"$2,231,685.00","$1,980,082.00","$2,647.17","$136,714.52"
EWR - LHR,56112079203,E-56A-4 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/56112079203,https://www.airlines-manager.com/aircraft/show/106813010,12:30,2:59,748,"$2,231,685.00","$1,980,082.00","$2,647.17","$136,714.52"
EWR - LHR,56122311669,E-56A-5 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/56122311669,https://www.airlines-manager.com/aircraft/show/106813011,18:15,8:44,748,"$2,015,569.00","$1,821,209.00","$2,434.77","$125,745.16"
EWR - LIS,56096590116,E-84A-4 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/56096590116,https://www.airlines-manager.com/aircraft/show/90656551,5:30,19:44,852,"$2,340,226.00","$2,131,891.00","$2,502.22","$149,781.57"
EWR - LIS,56112079196,E-84A-1 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/56112079196,https://www.airlines-manager.com/aircraft/show/90656554,12:15,2:29,852,"$2,340,226.00","$2,131,891.00","$2,502.22","$149,781.57"
EWR - LIT,56103538581,E-LIT-FAR-2,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/56103538581,https://www.airlines-manager.com/aircraft/show/86270787,8:30,14:44,310,"$395,001.00","$364,044.00","$1,174.34","$58,402.78"
EWR - LIT,56112079283,E-LIT-FAR-1,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/56112079283,https://www.airlines-manager.com/aircraft/show/90452834,13:00,19:14,310,"$395,001.00","$364,044.00","$1,174.34","$58,402.78"
EWR - LIT,56125474077,E-LIT-FAR-4,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/56125474077,https://www.airlines-manager.com/aircraft/show/86270784,19:30,1:44,310,"$395,001.00","$364,044.00","$1,174.34","$58,402.78"
EWR - LIT,56131084908,E-LIT-FAR-3,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/56131084908,https://www.airlines-manager.com/aircraft/show/86270786,22:45,4:59,310,"$395,001.00","$364,044.00","$1,174.34","$58,402.78"
EWR - MAD,56084270414,E-56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/56084270414,https://www.airlines-manager.com/aircraft/show/89124072,0:00,14:59,748,"$2,301,537.00","$2,048,578.00","$2,738.74","$136,723.78"
EWR - MAD,56128543804,E-56B-3 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/56128543804,https://www.airlines-manager.com/aircraft/show/90656555,20:30,11:29,748,"$2,301,537.00","$2,048,578.00","$2,738.74","$136,723.78"
EWR - MAD,56131084862,E-56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/56131084862,https://www.airlines-manager.com/aircraft/show/94521251,22:15,13:14,748,"$2,077,752.00","$1,884,361.00","$2,519.20","$125,763.80"
EWR - MAF,56084270600,E-RDM-MAF-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761173,https://www.airlines-manager.com/network/showflight/56084270600,https://www.airlines-manager.com/aircraft/show/120706940,1:30,9:59,272,"$490,066.00","$459,903.00","$1,690.82","$54,212.53"
EWR - MAF,56099991613,E-RDM-MAF-5 B,A319-100,https://www.airlines-manager.com/network/showline/50761173,https://www.airlines-manager.com/network/showflight/56099991613,https://www.airlines-manager.com/aircraft/show/120707022,7:00,15:29,198,"$407,839.00","$375,811.00","$1,898.04","$44,299.92"
EWR - MAF,56103828423,E-RDM-MAF-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761173,https://www.airlines-manager.com/network/showflight/56103828423,https://www.airlines-manager.com/aircraft/show/120706941,10:00,18:29,272,"$490,066.00","$459,903.00","$1,690.82","$54,212.53"
EWR - MAF,56122311570,E-RDM-MAF-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761173,https://www.airlines-manager.com/network/showflight/56122311570,https://www.airlines-manager.com/aircraft/show/120706939,18:00,2:29,272,"$490,066.00","$459,903.00","$1,690.82","$54,212.53"
EWR - MAF,56133285064,E-RDM-MAF-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761173,https://www.airlines-manager.com/network/showflight/56133285064,https://www.airlines-manager.com/aircraft/show/120706942,23:45,8:14,272,"$490,066.00","$459,903.00","$1,690.82","$54,212.53"
EWR - MBJ,56093103019,E-56D-7 E,787-10,https://www.airlines-manager.com/network/showline/50072192,https://www.airlines-manager.com/network/showflight/56093103019,https://www.airlines-manager.com/aircraft/show/118644442,3:30,10:59,648,"$945,645.00","$883,866.00","$1,363.99","$118,111.27"
EWR - MBJ,56107731660,E-56D-5 E,787-10,https://www.airlines-manager.com/network/showline/50072192,https://www.airlines-manager.com/network/showflight/56107731660,https://www.airlines-manager.com/aircraft/show/118644440,11:15,18:44,648,"$945,645.00","$883,866.00","$1,363.99","$118,111.27"
EWR - MBJ,56125474092,E-56D-1 E,787-10,https://www.airlines-manager.com/network/showline/50072192,https://www.airlines-manager.com/network/showflight/56125474092,https://www.airlines-manager.com/aircraft/show/118644436,19:45,3:14,636,"$923,203.00","$862,053.00","$1,355.43","$115,196.39"
EWR - MCI,56093103058,E-ELP-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/56093103058,https://www.airlines-manager.com/aircraft/show/103365578,3:45,9:59,320,"$396,816.00","$357,840.00","$1,118.25","$57,407.49"
EWR - MCI,56096590123,E-ELP-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/56096590123,https://www.airlines-manager.com/aircraft/show/103365575,5:45,11:59,320,"$396,816.00","$357,840.00","$1,118.25","$57,407.49"
EWR - MCI,56103828452,E-ELP-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/56103828452,https://www.airlines-manager.com/aircraft/show/103365576,10:00,16:14,320,"$396,816.00","$357,840.00","$1,118.25","$57,407.49"
EWR - MCI,56122311658,E-ELP-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/56122311658,https://www.airlines-manager.com/aircraft/show/103365577,18:15,0:29,320,"$396,816.00","$357,840.00","$1,118.25","$57,407.49"
EWR - MCI,56128543785,E-ELP-SAT-5 B,A319-100,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/56128543785,https://www.airlines-manager.com/aircraft/show/110582847,20:15,2:29,198,"$300,349.00","$272,622.00","$1,376.88","$43,736.15"
EWR - MCO,56084270638,E-IAH-LAS-1,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/56084270638,https://www.airlines-manager.com/aircraft/show/105859510,1:45,7:29,338,"$391,232.00","$351,937.00","$1,041.23","$61,384.36"
EWR - MCO,56107731553,E-IAH-LAS-3,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/56107731553,https://www.airlines-manager.com/aircraft/show/105859512,11:00,16:44,338,"$391,232.00","$351,937.00","$1,041.23","$61,384.36"
EWR - MCO,56112079322,E-IAH-LAS-6,ERJ-175,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/56112079322,https://www.airlines-manager.com/aircraft/show/105864236,13:00,18:44,112,"$171,315.00","$145,397.00","$1,298.19","$25,359.94"
EWR - MCO,56125473943,E-IAH-LAS-2,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/56125473943,https://www.airlines-manager.com/aircraft/show/105859511,18:30,0:14,338,"$391,232.00","$351,937.00","$1,041.23","$61,384.36"
EWR - MCO,56125473944,E-IAH-LAS-4,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/56125473944,https://www.airlines-manager.com/aircraft/show/105859513,19:30,1:14,338,"$391,232.00","$351,937.00","$1,041.23","$61,384.36"
EWR - MCO,56131084894,E-IAH-LAS-5,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/56131084894,https://www.airlines-manager.com/aircraft/show/105859514,22:45,4:29,338,"$391,232.00","$351,937.00","$1,041.23","$61,384.36"
EWR - MEM,56084270579,E-RNO-MEM-4,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/56084270579,https://www.airlines-manager.com/aircraft/show/99920619,1:15,6:59,320,"$365,097.00","$328,039.00","$1,025.12","$57,216.10"
EWR - MEM,56093103057,E-RNO-MEM-3,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/56093103057,https://www.airlines-manager.com/aircraft/show/99920620,3:45,9:29,320,"$365,097.00","$328,039.00","$1,025.12","$57,216.10"
EWR - MEM,56107731518,E-RNO-MEM-2,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/56107731518,https://www.airlines-manager.com/aircraft/show/99920621,10:15,15:59,320,"$365,097.00","$328,039.00","$1,025.12","$57,216.10"
EWR - MEM,56128543780,E-RNO-MEM-5 B,A319-100,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/56128543780,https://www.airlines-manager.com/aircraft/show/100096560,20:15,1:59,198,"$276,827.00","$250,611.00","$1,265.71","$43,711.22"
EWR - MEM,56128543781,E-RNO-MEM-1,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/56128543781,https://www.airlines-manager.com/aircraft/show/99920622,21:30,3:14,320,"$365,097.00","$328,039.00","$1,025.12","$57,216.10"
EWR - MEX,56084270643,E-DTW-YYZ-3,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/56084270643,https://www.airlines-manager.com/aircraft/show/92003923,1:45,11:59,320,"$641,733.00","$578,133.00","$1,806.67","$56,495.08"
EWR - MEX,56103828517,E-DTW-YYZ-6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/56103828517,https://www.airlines-manager.com/aircraft/show/104258433,10:00,20:14,216,"$488,482.00","$441,977.00","$2,046.19","$43,189.93"
EWR - MEX,56112079128,E-DTW-YYZ-4,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/56112079128,https://www.airlines-manager.com/aircraft/show/92003922,12:00,22:14,320,"641,733$","578,133$","$1,806.67","$56,495.08"
EWR - MEX,56122311508,E-DTW-YYZ-5,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/56122311508,https://www.airlines-manager.com/aircraft/show/92003921,17:15,3:29,320,"641,733$","578,133$","$1,806.67","$56,495.08"
EWR - MEX,56122311509,E-DTW-YYZ-2,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/56122311509,https://www.airlines-manager.com/aircraft/show/92003924,17:30,3:44,320,"641,733$","578,133$","$1,806.67","$56,495.08"
EWR - MEX,56128543782,E-DTW-YYZ-6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/56128543782,https://www.airlines-manager.com/aircraft/show/104258433,20:15,6:29,216,"488,482$","441,977$","$2,046.19","$43,189.93"
EWR - MEX,56133285070,E-DTW-YYZ-1,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/56133285070,https://www.airlines-manager.com/aircraft/show/92003925,23:45,9:59,300,"606,877$","544,675$","$1,815.58","$53,225.57"
EWR - MFR,56084270650,E-EUG-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/56084270650,https://www.airlines-manager.com/aircraft/show/119220436,1:45,13:29,320,"717,698$","661,635$","$2,067.61","$56,389.35"
EWR - MFR,56112079150,E-EUG-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/56112079150,https://www.airlines-manager.com/aircraft/show/119220437,12:00,23:44,320,"717,698$","661,635$","$2,067.61","$56,389.35"
EWR - MFR,56115475619,E-EUG-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/56115475619,https://www.airlines-manager.com/aircraft/show/119220438,14:00,1:44,320,"717,698$","661,635$","$2,067.61","$56,389.35"
EWR - MFR,56133285075,E-EUG-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/56133285075,https://www.airlines-manager.com/aircraft/show/119220435,23:45,11:29,320,"717,698$","661,635$","$2,067.61","$56,389.35"
EWR - MHT,56093103065,E-FCA-CID-1,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/56093103065,https://www.airlines-manager.com/aircraft/show/116042866,3:45,6:44,310,"$126,850.00","$107,713.00",$347.46,"$36,104.92"
EWR - MHT,56103538627,E-FCA-CID-4,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/56103538627,https://www.airlines-manager.com/aircraft/show/116042863,9:00,11:59,310,"$126,850.00","$107,713.00",$347.46,"$36,104.92"
EWR - MHT,56103828496,E-FCA-CID-3,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/56103828496,https://www.airlines-manager.com/aircraft/show/116042864,10:00,12:59,310,"$126,850.00","$107,713.00",$347.46,"$36,104.92"
EWR - MHT,56107731655,E-STL-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/56107731655,https://www.airlines-manager.com/aircraft/show/98887257,11:00,13:59,112,"$56,500.00","$44,653.00",$398.69,"$14,967.49"
EWR - MHT,56118925492,E-FCA-CID-2,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/56118925492,https://www.airlines-manager.com/aircraft/show/116042865,15:45,18:44,310,"$126,850.00","$107,713.00",$347.46,"$36,104.92"
EWR - MIA,56084270711,E-MIA-ORD-5,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/56084270711,https://www.airlines-manager.com/aircraft/show/113251309,2:30,8:44,338,"$431,618.00","$388,532.00","$1,149.50","$62,331.34"
EWR - MIA,56093103074,E-MIA-ORD-1,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/56093103074,https://www.airlines-manager.com/aircraft/show/113251305,4:00,10:14,338,"$431,618.00","$388,532.00","$1,149.50","$62,331.34"
EWR - MIA,56103828428,E-MIA-ORD-2,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/56103828428,https://www.airlines-manager.com/aircraft/show/113251306,10:00,16:14,338,"$431,618.00","$388,532.00","$1,149.50","$62,331.34"
EWR - MIA,56107731558,E-MIA-ORD-4,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/56107731558,https://www.airlines-manager.com/aircraft/show/113251308,11:00,17:14,338,"$431,618.00","$388,532.00","$1,149.50","$62,331.34"
EWR - MIA,56118925573,E-MIA-ORD-3,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/56118925573,https://www.airlines-manager.com/aircraft/show/113251307,16:30,22:44,338,"$431,618.00","$388,532.00","$1,149.50","$62,331.34"
EWR - MKE,56093103008,E-BNA-JAX-5,ERJ-175,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/56093103008,https://www.airlines-manager.com/aircraft/show/96421247,3:15,8:14,112,"$150,329.00","$132,337.00","$1,181.58","$26,555.92"
EWR - MKE,56099991641,E-BNA-JAX-4,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/56099991641,https://www.airlines-manager.com/aircraft/show/104610407,7:30,12:29,310,"$316,661.00","$288,776.00",$931.54,"$57,948.36"
EWR - MKE,56115475640,E-BNA-JAX-3,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/56115475640,https://www.airlines-manager.com/aircraft/show/104610408,14:00,18:59,310,"$316,661.00","$288,776.00",$931.54,"$57,948.36"
EWR - MKE,56125474060,E-BNA-JAX-2,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/56125474060,https://www.airlines-manager.com/aircraft/show/104610409,19:15,0:14,310,"$316,661.00","$288,776.00",$931.54,"$57,948.36"
EWR - MKE,56133285032,E-BNA-JAX-1,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/56133285032,https://www.airlines-manager.com/aircraft/show/104610410,23:15,4:14,310,"$316,661.00","$288,776.00",$931.54,"$57,948.36"
EWR - MSN,56084270721,E-RAP-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/56084270721,https://www.airlines-manager.com/aircraft/show/116042859,2:30,7:44,310,"$331,635.00","$304,391.00",$981.91,"$58,163.89"
EWR - MSN,56103538608,E-RAP-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/56103538608,https://www.airlines-manager.com/aircraft/show/116042860,8:45,13:59,310,"$331,635.00","$304,391.00",$981.91,"$58,163.89"
EWR - MSN,56103828495,E-RAP-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/56103828495,https://www.airlines-manager.com/aircraft/show/116042861,10:00,15:14,310,"$331,635.00","$304,391.00",$981.91,"$58,163.89"
EWR - MSN,56128543940,E-RAP-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/56128543940,https://www.airlines-manager.com/aircraft/show/116042862,21:00,2:14,310,"$331,635.00","$304,391.00",$981.91,"$58,163.89"
EWR - MSO,56084270557,E-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/56084270557,https://www.airlines-manager.com/aircraft/show/107161238,1:00,10:59,310,"$618,420.00","$573,473.00","$1,849.91","$57,443.04"
EWR - MSO,56107731633,E-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/56107731633,https://www.airlines-manager.com/aircraft/show/107161240,11:00,20:59,310,"$618,420.00","$573,473.00","$1,849.91","$57,443.04"
EWR - MSO,56118925500,E-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/56118925500,https://www.airlines-manager.com/aircraft/show/86782214,15:45,1:44,112,"$290,250.00","$259,767.00","$2,319.35","$26,020.07"
EWR - MSO,56122311562,E-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/56122311562,https://www.airlines-manager.com/aircraft/show/107161239,17:45,3:44,310,"$618,420.00","$573,473.00","$1,849.91","$57,443.04"
EWR - MSO,56131084821,E-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/56131084821,https://www.airlines-manager.com/aircraft/show/107161241,22:00,7:59,310,"$618,420.00","$573,473.00","$1,849.91","$57,443.04"
EWR - MSP,56093103186,E-DEN-SLC-3,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/56093103186,https://www.airlines-manager.com/aircraft/show/86270783,5:00,10:59,310,"$376,088.00","$336,853.00","$1,086.62","$56,298.55"
EWR - MSP,56103828474,E-DEN-SLC-5,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/56103828474,https://www.airlines-manager.com/aircraft/show/90452833,10:00,15:59,310,"$376,088.00","$336,853.00","$1,086.62","$56,298.55"
EWR - MSP,56107731651,E-DEN-SLC-6 B,A319-100,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/56107731651,https://www.airlines-manager.com/aircraft/show/105223076,11:00,16:59,198,"$284,972.00","$253,541.00","$1,280.51","$42,374.54"
EWR - MSP,56122311663,E-DEN-SLC-2,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/56122311663,https://www.airlines-manager.com/aircraft/show/87153196,18:15,0:14,310,"$376,088.00","$336,853.00","$1,086.62","$56,298.55"
EWR - MSP,56125474101,E-DEN-SLC-1,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/56125474101,https://www.airlines-manager.com/aircraft/show/86270785,19:45,1:44,310,"$376,088.00","$336,853.00","$1,086.62","$56,298.55"
EWR - MSP,56128543827,E-DEN-SLC-4,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/56128543827,https://www.airlines-manager.com/aircraft/show/90452835,20:45,2:44,310,"376,088$","336,853$","$1,086.62","$56,298.55"
EWR - MSY,56093102993,E-ABQ-AUS-1,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/56093102993,https://www.airlines-manager.com/aircraft/show/90717079,3:15,9:59,310,"$416,273.00","$381,522.00","$1,230.72","$56,661.68"
EWR - MSY,56103828475,E-ABQ-AUS-3,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/56103828475,https://www.airlines-manager.com/aircraft/show/90717077,10:00,16:44,310,"$416,273.00","$381,522.00","$1,230.72","$56,661.68"
EWR - MSY,56107731619,E-ABQ-AUS-4,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/56107731619,https://www.airlines-manager.com/aircraft/show/90717076,11:00,17:44,310,"$416,273.00","$381,522.00","$1,230.72","$56,661.68"
EWR - MSY,56122311585,E-ABQ-AUS-2,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/56122311585,https://www.airlines-manager.com/aircraft/show/90717078,18:00,0:44,310,"$416,273.00","$381,522.00","$1,230.72","$56,661.68"
EWR - MSY,56125474128,E-ABQ-AUS-5,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/56125474128,https://www.airlines-manager.com/aircraft/show/95950199,20:00,2:44,310,"$416,273.00","$381,522.00","$1,230.72","$56,661.68"
EWR - MTJ,56096590144,E-MTJ-ECP-4,737-900ER,https://www.airlines-manager.com/network/showline/50761177,https://www.airlines-manager.com/network/showflight/56096590144,https://www.airlines-manager.com/aircraft/show/120706943,6:00,14:59,320,"$565,136.00","$519,101.00","$1,622.19","$57,784.90"
EWR - MTJ,56103828470,E-MTJ-ECP-1,737-900ER,https://www.airlines-manager.com/network/showline/50761177,https://www.airlines-manager.com/network/showflight/56103828470,https://www.airlines-manager.com/aircraft/show/120706946,10:00,18:59,320,"$565,136.00","$519,101.00","$1,622.19","$57,784.90"
EWR - MTJ,56118925539,E-MTJ-ECP-3,737-900ER,https://www.airlines-manager.com/network/showline/50761177,https://www.airlines-manager.com/network/showflight/56118925539,https://www.airlines-manager.com/aircraft/show/120706944,16:00,0:59,320,"$565,136.00","$519,101.00","$1,622.19","$57,784.90"
EWR - MTJ,56131084802,E-MTJ-ECP-2,737-900ER,https://www.airlines-manager.com/network/showline/50761177,https://www.airlines-manager.com/network/showflight/56131084802,https://www.airlines-manager.com/aircraft/show/120706945,21:45,6:44,320,"$565,136.00","$519,101.00","$1,622.19","$57,784.90"
EWR - MUC,56084270362,E-56C-7 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/56084270362,https://www.airlines-manager.com/aircraft/show/106721562,0:00,16:29,598,"$2,049,665.00","$1,899,594.00","$3,176.58","$115,243.32"
EWR - MUC,56107731563,E-56C-1 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/56107731563,https://www.airlines-manager.com/aircraft/show/106721556,11:00,3:29,598,"$2,049,665.00","$1,899,594.00","$3,176.58","$115,243.32"
EWR - MUC,56125473946,E-56C-7 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/56125473946,https://www.airlines-manager.com/aircraft/show/106721562,18:30,10:59,598,"$2,049,665.00","$1,899,594.00","$3,176.58","$115,243.32"
EWR - MXP,56103828522,E-84B-7 B2,777-300,https://www.airlines-manager.com/network/showline/49921908,https://www.airlines-manager.com/network/showflight/56103828522,https://www.airlines-manager.com/aircraft/show/117958701,10:00,2:29,852,"$2,696,638.00","$2,451,348.00","$2,877.17","$148,716.76"
EWR - MXP,56131084834,E-84B-3  B2,777-300,https://www.airlines-manager.com/network/showline/49921908,https://www.airlines-manager.com/network/showflight/56131084834,https://www.airlines-manager.com/aircraft/show/117958697,22:00,14:29,852,"$2,696,638.00","$2,451,348.00","$2,877.17","$148,716.76"
EWR - MYR,56084270708,E-RDM-MAF-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761175,https://www.airlines-manager.com/network/showflight/56084270708,https://www.airlines-manager.com/aircraft/show/120706939,2:30,6:44,272,"$226,045.00","$207,541.00",$763.02,"$49,025.43"
EWR - MYR,56103538551,E-RDM-MAF-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761175,https://www.airlines-manager.com/network/showflight/56103538551,https://www.airlines-manager.com/aircraft/show/120706942,8:15,12:29,272,"$226,045.00","$207,541.00",$763.02,"$49,025.43"
EWR - MYR,56103828422,E-RDM-MAF-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761175,https://www.airlines-manager.com/network/showflight/56103828422,https://www.airlines-manager.com/aircraft/show/120706940,10:00,14:14,272,"$226,045.00","$207,541.00",$763.02,"$49,025.43"
EWR - MYR,56118925478,E-RDM-MAF-5 B,A319-100,https://www.airlines-manager.com/network/showline/50761175,https://www.airlines-manager.com/network/showflight/56118925478,https://www.airlines-manager.com/aircraft/show/120707022,15:30,19:44,198,"$189,562.00","$170,441.00",$860.81,"$40,261.65"
EWR - MYR,56125473941,E-RDM-MAF-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761175,https://www.airlines-manager.com/network/showflight/56125473941,https://www.airlines-manager.com/aircraft/show/120706941,18:30,22:44,272,"$226,045.00","$207,541.00",$763.02,"$49,025.43"
EWR - NAS,56096590090,E-TUS-TPA-1,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/56096590090,https://www.airlines-manager.com/aircraft/show/98379319,5:15,11:44,310,"$397,029.00","$364,028.00","$1,174.28","$56,148.28"
EWR - NAS,56112079288,E-TUS-TPA-3,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/56112079288,https://www.airlines-manager.com/aircraft/show/98379317,13:00,19:29,310,"$397,029.00","$364,028.00","$1,174.28","$56,148.28"
EWR - NAS,56122311589,E-TUS-TPA-4,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/56122311589,https://www.airlines-manager.com/aircraft/show/98379316,18:00,0:29,310,"$397,029.00","$364,028.00","$1,174.28","$56,148.28"
EWR - NAS,56125474030,E-TUS-TPA-2,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/56125474030,https://www.airlines-manager.com/aircraft/show/98379318,19:00,1:29,310,"$397,029.00","$364,028.00","$1,174.28","$56,148.28"
EWR - NAS,56128543935,E-TUS-TPA-5,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/56128543935,https://www.airlines-manager.com/aircraft/show/98379315,21:00,3:29,291,"$375,648.00","$343,361.00","$1,179.93","$52,960.57"
EWR - NRT,56084270417,E-56A-7 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/56084270417,https://www.airlines-manager.com/aircraft/show/106813013,0:00,2:14,748,"$4,002,745.00","$3,604,043.00","$4,818.24","$1,613,750.60"
EWR - NRT,56107731525,E-56A-3 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/56107731525,https://www.airlines-manager.com/aircraft/show/106813009,10:15,12:29,748,"$3,976,929.00","$3,587,310.00","$4,795.87","$1,606,258.21"
EWR - NRT,56118925602,E-56A-1 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/56118925602,https://www.airlines-manager.com/aircraft/show/106813007,16:45,18:59,748,"$3,579,904.00","$3,294,738.00","$4,404.73","$1,475,255.82"
EWR - OAK,56084270556,E-OAK-SJC-5,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/56084270556,https://www.airlines-manager.com/aircraft/show/104717239,1:00,12:59,310,"$739,348.00","$683,774.00","$2,205.72","$57,060.42"
EWR - OAK,56103828493,E-OAK-SJC-1,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/56103828493,https://www.airlines-manager.com/aircraft/show/104717243,10:00,21:59,310,"$739,348.00","$683,774.00","$2,205.72","$57,060.42"
EWR - OAK,56112079164,E-OAK-SJC-2,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/56112079164,https://www.airlines-manager.com/aircraft/show/104717242,12:00,23:59,310,"$739,348.00","$683,774.00","$2,205.72","$57,060.42"
EWR - OAK,56115475642,E-OAK-SJC-3,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/56115475642,https://www.airlines-manager.com/aircraft/show/104717241,14:00,1:59,310,"$739,348.00","$683,774.00","$2,205.72","$57,060.42"
EWR - OAK,56131084886,E-OAK-SJC-4,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/56131084886,https://www.airlines-manager.com/aircraft/show/104717240,22:30,10:29,310,"$739,348.00","$683,774.00","$2,205.72","$57,060.42"
EWR - OKC,56084270669,E-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/56084270669,https://www.airlines-manager.com/aircraft/show/86782214,1:45,8:59,112,"$218,318.00","$194,572.00","$1,737.25","$26,899.35"
EWR - OKC,56093103064,E-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/56093103064,https://www.airlines-manager.com/aircraft/show/107161239,3:45,10:59,310,"$462,867.00","$427,138.00","$1,377.86","$59,051.34"
EWR - OKC,56099991676,E-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/56099991676,https://www.airlines-manager.com/aircraft/show/107161241,8:00,15:14,310,"$462,867.00","$427,138.00","$1,377.86","$59,051.34"
EWR - OKC,56107731631,E-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/56107731631,https://www.airlines-manager.com/aircraft/show/107161238,11:00,18:14,310,"$462,867.00","$427,138.00","$1,377.86","$59,051.34"
EWR - OKC,56128543937,E-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/56128543937,https://www.airlines-manager.com/aircraft/show/107161240,21:00,4:14,310,"$462,867.00","$427,138.00","$1,377.86","$59,051.34"
EWR - OMA,56084270719,E-BOI-PBI-1,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/56084270719,https://www.airlines-manager.com/aircraft/show/104418460,2:30,8:59,310,"$403,514.00","$370,539.00","$1,195.29","$57,152.54"
EWR - OMA,56099991640,E-BOI-PBI-4,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/56099991640,https://www.airlines-manager.com/aircraft/show/104418463,7:30,13:59,310,"$403,514.00","$370,539.00","$1,195.29","$57,152.54"
EWR - OMA,56103828492,E-BOI-PBI-3,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/56103828492,https://www.airlines-manager.com/aircraft/show/104418462,10:00,16:29,310,"$403,514.00","$370,539.00","$1,195.29","$57,152.54"
EWR - OMA,56122311485,E-BOI-PBI-2,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/56122311485,https://www.airlines-manager.com/aircraft/show/104418461,17:00,23:29,310,"$403,514.00","$370,539.00","$1,195.29","$57,152.54"
EWR - OMA,56125474038,E-BOI-PBI-5 B,A319-100,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/56125474038,https://www.airlines-manager.com/aircraft/show/110582846,19:00,1:29,197,"$304,433.00","$278,040.00","$1,411.37","$42,885.35"
EWR - ONT,56084270383,E-SMF-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/56084270383,https://www.airlines-manager.com/aircraft/show/94889153,0:00,11:29,320,"$706,325.00","$647,621.00","$2,023.82","$56,396.60"
EWR - ONT,56084270384,E-SMF-ONT-5,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/56084270384,https://www.airlines-manager.com/aircraft/show/94889154,2:00,13:29,320,"$706,325.00","$647,621.00","$2,023.82","$56,396.60"
EWR - ONT,56107731676,E-SMF-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/56107731676,https://www.airlines-manager.com/aircraft/show/94889150,11:45,23:14,320,"$706,325.00","$647,621.00","$2,023.82","$56,396.60"
EWR - ONT,56112079327,E-SMF-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/56112079327,https://www.airlines-manager.com/aircraft/show/94889151,13:15,0:44,320,"$706,325.00","$647,621.00","$2,023.82","$56,396.60"
EWR - ONT,56115475708,E-SMF-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/56115475708,https://www.airlines-manager.com/aircraft/show/94889152,14:45,2:14,301,"$680,341.00","$622,866.00","$2,069.32","$54,240.87"
EWR - ORD,56093103178,E-MIA-ORD-2,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/56093103178,https://www.airlines-manager.com/aircraft/show/113251306,5:00,9:59,338,"$341,749.00","$294,714.00",$871.93,"$59,139.93"
EWR - ORD,56107731514,E-MIA-ORD-1,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/56107731514,https://www.airlines-manager.com/aircraft/show/113251305,10:15,15:14,338,"$341,749.00","$294,714.00",$871.93,"$59,139.93"
EWR - ORD,56107731515,E-MIA-ORD-3,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/56107731515,https://www.airlines-manager.com/aircraft/show/113251307,11:30,16:29,338,"$341,749.00","$294,714.00",$871.93,"$59,139.93"
EWR - ORD,56122311505,E-MIA-ORD-4,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/56122311505,https://www.airlines-manager.com/aircraft/show/113251308,17:15,22:14,338,"$341,749.00","$294,714.00",$871.93,"$59,139.93"
EWR - ORD,56128543971,E-MIA-ORD-5,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/56128543971,https://www.airlines-manager.com/aircraft/show/113251309,21:30,2:29,338,"$341,749.00","$294,714.00",$871.93,"$59,139.93"
EWR - ORF,56084270692,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/56084270692,https://www.airlines-manager.com/aircraft/show/88494375,2:15,5:29,320,"$153,803.00","$130,253.00",$407.04,"$40,284.43"
EWR - ORF,56107731657,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/56107731657,https://www.airlines-manager.com/aircraft/show/106104450,11:00,14:14,112,"$70,512.00","$57,910.00",$517.05,"$17,910.31"
EWR - ORF,56115475685,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/56115475685,https://www.airlines-manager.com/aircraft/show/105731236,14:15,17:29,320,"$153,803.00","$130,253.00",$407.04,"$40,284.43"
EWR - ORF,56122311576,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/56122311576,https://www.airlines-manager.com/aircraft/show/88494376,18:00,21:14,320,"$153,803.00","$130,253.00",$407.04,"$40,284.43"
EWR - ORF,56131084794,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/56131084794,https://www.airlines-manager.com/aircraft/show/88494377,21:45,0:59,320,"$153,803.00","$130,253.00",$407.04,"$40,284.43"
EWR - OSL,56093102980,E-56D-2 E,787-10,https://www.airlines-manager.com/network/showline/50072202,https://www.airlines-manager.com/network/showflight/56093102980,https://www.airlines-manager.com/aircraft/show/118644437,3:15,18:29,648,"$1,894,675.00","$1,766,526.00","$2,726.12","$115,964.51"
EWR - OSL,56093102981,E-56D-4 E,787-10,https://www.airlines-manager.com/network/showline/50072202,https://www.airlines-manager.com/network/showflight/56093102981,https://www.airlines-manager.com/aircraft/show/118644439,4:45,19:59,648,"$1,894,675.00","$1,766,526.00","$2,726.12","$115,964.51"
EWR - OSL,56125474120,E-56D-4 E,787-10,https://www.airlines-manager.com/network/showline/50072202,https://www.airlines-manager.com/network/showflight/56125474120,https://www.airlines-manager.com/aircraft/show/118644439,20:00,11:14,648,"$1,894,675.00","$1,766,526.00","$2,726.12","$115,964.51"
EWR - PBI,56084270623,E-BOI-PBI-4,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/56084270623,https://www.airlines-manager.com/aircraft/show/104418463,1:30,7:29,310,"$380,892.00","$348,451.00","$1,124.04","$58,236.94"
EWR - PBI,56084270624,E-BOI-PBI-3,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/56084270624,https://www.airlines-manager.com/aircraft/show/104418462,3:00,8:59,310,"$380,892.00","$348,451.00","$1,124.04","$58,236.94"
EWR - PBI,56107731626,E-BOI-PBI-2,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/56107731626,https://www.airlines-manager.com/aircraft/show/104418461,11:00,16:59,310,"$380,892.00","$348,451.00","$1,124.04","$58,236.94"
EWR - PBI,56112079315,E-BOI-PBI-5 B,A319-100,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/56112079315,https://www.airlines-manager.com/aircraft/show/110582846,13:00,18:59,198,"$288,248.00","$262,252.00","$1,324.51","$43,830.42"
EWR - PBI,56128543800,E-BOI-PBI-1,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/56128543800,https://www.airlines-manager.com/aircraft/show/104418460,20:30,2:29,310,"$380,892.00","$348,451.00","$1,124.04","$58,236.94"
EWR - PDX,56084270357,E-PHX-PDX-3,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/56084270357,https://www.airlines-manager.com/aircraft/show/113595213,0:00,11:29,338,"$761,524.00","$708,817.00","$2,097.09","$61,725.72"
EWR - PDX,56084270358,E-PHX-PDX-4,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/56084270358,https://www.airlines-manager.com/aircraft/show/113595214,2:00,13:29,338,"$761,524.00","$708,817.00","$2,097.09","$61,725.72"
EWR - PDX,56093103179,E-PHX-PDX-5,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/56093103179,https://www.airlines-manager.com/aircraft/show/113595215,5:00,16:29,338,"$761,524.00","$708,817.00","$2,097.09","$61,725.72"
EWR - PDX,56096590178,E-PHX-PDX-6 B,A319-100,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/56096590178,https://www.airlines-manager.com/aircraft/show/99219630,6:30,17:59,198,"$528,797.00","$484,100.00","$2,444.95","$42,156.75"
EWR - PDX,56107731516,E-PHX-PDX-1,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/56107731516,https://www.airlines-manager.com/aircraft/show/113595211,10:15,21:44,338,"$761,524.00","$708,817.00","$2,097.09","$61,725.72"
EWR - PDX,56112079192,E-PHX-PDX-2,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/56112079192,https://www.airlines-manager.com/aircraft/show/113595212,12:15,23:44,309,"$721,546.00","$670,445.00","$2,169.72","$58,384.18"
EWR - PHX,56084270355,E-PHX-PDX-1,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/56084270355,https://www.airlines-manager.com/aircraft/show/113595211,0:00,10:14,338,"$707,316.00","$649,946.00","$1,922.92","$63,512.64"
EWR - PHX,56084270356,E-PHX-PDX-2,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/56084270356,https://www.airlines-manager.com/aircraft/show/113595212,2:00,12:14,338,"$707,316.00","$649,946.00","$1,922.92","$63,512.64"
EWR - PHX,56107731666,E-PHX-PDX-3,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/56107731666,https://www.airlines-manager.com/aircraft/show/113595213,11:30,21:44,338,"$707,316.00","$649,946.00","$1,922.92","$63,512.64"
EWR - PHX,56112079332,E-PHX-PDX-4,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/56112079332,https://www.airlines-manager.com/aircraft/show/113595214,13:30,23:44,338,"$707,316.00","$649,946.00","$1,922.92","$63,512.64"
EWR - PHX,56118925574,E-PHX-PDX-5,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/56118925574,https://www.airlines-manager.com/aircraft/show/113595215,16:30,2:44,338,"$707,316.00","$649,946.00","$1,922.92","$63,512.64"
EWR - PHX,56122311616,E-PHX-PDX-6 B,A319-100,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/56122311616,https://www.airlines-manager.com/aircraft/show/99219630,18:00,4:29,198,"$491,654.00","$443,539.00","$2,240.10","$42,308.97"
EWR - PIT,56093103139,E-STL-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/56093103139,https://www.airlines-manager.com/aircraft/show/98887257,4:15,7:29,112,"$77,629.00","$63,269.00",$564.90,"$19,567.73"
EWR - PIT,56096590169,E-STL-PIT-3,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/56096590169,https://www.airlines-manager.com/aircraft/show/115400546,6:30,9:44,338,"$182,899.00","$160,287.00",$474.22,"$49,573.30"
EWR - PIT,56103828431,E-STL-PIT-2,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/56103828431,https://www.airlines-manager.com/aircraft/show/115400547,10:00,13:14,338,"$182,899.00","$160,287.00",$474.22,"$49,573.30"
EWR - PIT,56112079223,E-STL-PIT-4,A321neo-LR,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/56112079223,https://www.airlines-manager.com/aircraft/show/103406580,13:00,16:14,338,"$184,682.00","$161,906.00",$479.01,"$50,074.02"
EWR - PIT,56118925463,E-STL-PIT-1,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/56118925463,https://www.airlines-manager.com/aircraft/show/115400548,15:30,18:44,338,"$182,899.00","$160,287.00",$474.22,"$49,573.30"
EWR - PIT,56125474088,E-STL-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/56125474088,https://www.airlines-manager.com/aircraft/show/98887257,19:30,22:44,112,"$77,629.00","$63,269.00",$564.90,"$19,567.73"
EWR - PRG,56107731526,E-84B-2  B2,777-300,https://www.airlines-manager.com/network/showline/44327652,https://www.airlines-manager.com/network/showflight/56107731526,https://www.airlines-manager.com/aircraft/show/117958696,10:15,2:59,852,"$2,750,049.00","$2,506,567.00","$2,941.98","$149,794.84"
EWR - PRG,56131084863,E-84B-5  B2,777-300,https://www.airlines-manager.com/network/showline/44327652,https://www.airlines-manager.com/network/showflight/56131084863,https://www.airlines-manager.com/aircraft/show/117958699,22:15,14:59,852,"$2,750,049.00","$2,506,567.00","$2,941.98","$149,794.84"
EWR - PSP,56084270466,E-PSP-FAT-4,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/56084270466,https://www.airlines-manager.com/aircraft/show/116672810,0:30,11:44,338,"$760,434.00","$712,970.00","$2,109.38","$63,469.14"
EWR - PSP,56107731560,E-PSP-FAT-1,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/56107731560,https://www.airlines-manager.com/aircraft/show/119220450,11:00,22:14,338,"$760,434.00","$712,970.00","$2,109.38","$63,469.14"
EWR - PSP,56112079221,E-PSP-FAT-2,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/56112079221,https://www.airlines-manager.com/aircraft/show/119220451,13:00,0:14,338,"$760,434.00","$712,970.00","$2,109.38","$63,469.14"
EWR - PSP,56131084869,E-PSP-FAT-3,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/56131084869,https://www.airlines-manager.com/aircraft/show/119220452,22:30,9:44,338,"$760,434.00","$712,970.00","$2,109.38","$63,469.14"
EWR - PVD,56084270626,E-TUL-DSM-4,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/56084270626,https://www.airlines-manager.com/aircraft/show/110044466,1:30,4:14,310,"$99,383.00","$81,748.00",$263.70,"$29,907.80"
EWR - PVD,56103538641,E-TUL-DSM-3,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/56103538641,https://www.airlines-manager.com/aircraft/show/110044465,9:15,11:59,310,"$99,383.00","$81,748.00",$263.70,"$29,907.80"
EWR - PVD,56107731639,E-TUL-DSM-2,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/56107731639,https://www.airlines-manager.com/aircraft/show/110044464,11:00,13:44,310,"$99,383.00","$81,748.00",$263.70,"$29,907.80"
EWR - PVD,56125474104,E-TUL-DSM-1,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/56125474104,https://www.airlines-manager.com/aircraft/show/110044463,19:45,22:29,310,"$99,383.00","$81,748.00",$263.70,"$29,907.80"
EWR - PVD,56133285040,E-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/56133285040,https://www.airlines-manager.com/aircraft/show/110113039,23:15,1:59,112,"$42,644.00","$31,786.00",$283.80,"$11,629.02"
EWR - PWM,56093103153,E-TUL-DSM-1,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/56093103153,https://www.airlines-manager.com/aircraft/show/110044463,4:30,7:44,310,"$154,650.00","$135,600.00",$437.42,"$41,938.14"
EWR - PWM,56103538614,E-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/56103538614,https://www.airlines-manager.com/aircraft/show/110113039,8:45,11:59,112,"$70,248.00","$58,322.00",$520.73,"$18,037.73"
EWR - PWM,56107731640,E-TUL-DSM-4,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/56107731640,https://www.airlines-manager.com/aircraft/show/110044466,11:00,14:14,310,"154,650$","135,600$",$437.42,"$41,938.14"
EWR - PWM,56122311606,E-TUL-DSM-3,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/56122311606,https://www.airlines-manager.com/aircraft/show/110044465,18:00,21:14,310,"$154,650.00","$135,600.00",$437.42,"$41,938.14"
EWR - PWM,56125474105,E-TUL-DSM-2,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/56125474105,https://www.airlines-manager.com/aircraft/show/110044464,19:45,22:59,302,"$152,314.00","$133,326.00",$441.48,"$41,234.85"
EWR - RAP,56084270400,E-RAP-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/56084270400,https://www.airlines-manager.com/aircraft/show/116042860,0:00,7:59,310,"$497,396.00","$460,380.00","$1,485.10","$57,667.64"
EWR - RAP,56084270401,E-RAP-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/56084270401,https://www.airlines-manager.com/aircraft/show/116042861,1:15,9:14,310,"$497,396.00","$460,380.00","$1,485.10","$57,667.64"
EWR - RAP,56112079309,E-RAP-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/56112079309,https://www.airlines-manager.com/aircraft/show/116042862,13:00,20:59,310,"$497,396.00","$460,380.00","$1,485.10","$57,667.64"
EWR - RAP,56125473963,E-RAP-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/56125473963,https://www.airlines-manager.com/aircraft/show/116042859,18:30,2:29,310,"$497,396.00","$460,380.00","$1,485.10","$57,667.64"
EWR - RDM,56099991574,E-RDM-MAF-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761172,https://www.airlines-manager.com/network/showflight/56099991574,https://www.airlines-manager.com/aircraft/show/120706939,6:45,17:59,272,"$630,804.00","$594,301.00","$2,184.93","$52,905.13"
EWR - RDM,56112079197,E-RDM-MAF-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761172,https://www.airlines-manager.com/network/showflight/56112079197,https://www.airlines-manager.com/aircraft/show/120706942,12:30,23:44,272,"$630,804.00","$594,301.00","$2,184.93","$52,905.13"
EWR - RDM,56115475678,E-RDM-MAF-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761172,https://www.airlines-manager.com/network/showflight/56115475678,https://www.airlines-manager.com/aircraft/show/120706940,14:15,1:29,272,"$630,804.00","$594,301.00","$2,184.93","$52,905.13"
EWR - RDM,56125474111,E-RDM-MAF-5 B,A319-100,https://www.airlines-manager.com/network/showline/50761172,https://www.airlines-manager.com/network/showflight/56125474111,https://www.airlines-manager.com/aircraft/show/120707022,19:45,6:59,198,"$524,065.00","$484,903.00","$2,449.01","$43,166.44"
EWR - RDM,56131084893,E-RDM-MAF-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761172,https://www.airlines-manager.com/network/showflight/56131084893,https://www.airlines-manager.com/aircraft/show/120706941,22:45,9:59,272,"$630,804.00","$594,301.00","$2,184.93","$52,905.13"
EWR - RDU,56084270581,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/56084270581,https://www.airlines-manager.com/aircraft/show/105731236,1:15,4:59,320,"$201,380.00","$173,412.00",$541.91,"$46,449.64"
EWR - RDU,56093103180,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/56093103180,https://www.airlines-manager.com/aircraft/show/88494376,5:00,8:44,320,"201,380$","173,412$",$541.91,"$46,449.64"
EWR - RDU,56107731578,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/56107731578,https://www.airlines-manager.com/aircraft/show/88494377,11:00,14:44,320,"$201,380.00","$173,412.00",$541.91,"$46,449.64"
EWR - RDU,56118925469,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/56118925469,https://www.airlines-manager.com/aircraft/show/88494375,15:30,19:14,320,"$201,380.00","$173,412.00",$541.91,"$46,449.64"
EWR - RDU,56131084838,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/56131084838,https://www.airlines-manager.com/aircraft/show/106104450,22:00,1:44,112,"$93,326.00","$78,129.00",$697.58,"$20,927.41"
EWR - RIC,56084270542,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/56084270542,https://www.airlines-manager.com/aircraft/show/88494377,1:00,4:14,320,"$139,657.00","$116,236.00",$363.24,"$35,949.28"
EWR - RIC,56096590098,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/56096590098,https://www.airlines-manager.com/aircraft/show/88494375,5:30,8:44,320,"$139,657.00","$116,236.00",$363.24,"$35,949.28"
EWR - RIC,56115475695,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/56115475695,https://www.airlines-manager.com/aircraft/show/106104450,14:15,17:29,112,"$62,868.00","$50,351.00",$449.56,"$15,572.47"
EWR - RIC,56122311531,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/56122311531,https://www.airlines-manager.com/aircraft/show/105731236,17:30,20:44,320,"$139,657.00","$116,236.00",$363.24,"$35,949.28"
EWR - RIC,56128543952,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/56128543952,https://www.airlines-manager.com/aircraft/show/88494376,21:15,0:29,320,"$139,657.00","$116,236.00",$363.24,"$35,949.28"
EWR - RNO,56084270689,E-RNO-MEM-5 B,A319-100,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/56084270689,https://www.airlines-manager.com/aircraft/show/100096560,2:00,13:29,198,"$532,092.00","$490,305.00","$2,476.29","$42,697.10"
EWR - RNO,56107731519,E-RNO-MEM-1,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/56107731519,https://www.airlines-manager.com/aircraft/show/99920622,10:15,21:29,320,"$706,113.00","$649,153.00","$2,028.60","$57,788.10"
EWR - RNO,56115475603,E-RNO-MEM-4,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/56115475603,https://www.airlines-manager.com/aircraft/show/99920619,14:00,1:14,320,"$706,113.00","$649,153.00","$2,028.60","$57,788.10"
EWR - RNO,56118925578,E-RNO-MEM-3,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/56118925578,https://www.airlines-manager.com/aircraft/show/99920620,16:30,3:44,320,"$706,113.00","$649,153.00","$2,028.60","$57,788.10"
EWR - RNO,56131084846,E-RNO-MEM-2,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/56131084846,https://www.airlines-manager.com/aircraft/show/99920621,22:15,9:29,320,"$706,113.00","$649,153.00","$2,028.60","$57,788.10"
EWR - ROC,56103828505,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/56103828505,https://www.airlines-manager.com/aircraft/show/119220545,10:00,12:59,310,"$135,540.00","$116,530.00",$375.90,"$39,060.34"
EWR - ROC,56115475700,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/56115475700,https://www.airlines-manager.com/aircraft/show/119220544,14:30,17:29,310,"$135,540.00","$116,530.00",$375.90,"$39,060.34"
EWR - ROC,56122311667,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/56122311667,https://www.airlines-manager.com/aircraft/show/119220543,18:15,21:14,310,"$135,540.00","$116,530.00",$375.90,"$39,060.34"
EWR - ROC,56131084917,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/56131084917,https://www.airlines-manager.com/aircraft/show/119220542,22:45,1:44,310,"$135,540.00","$116,530.00",$375.90,"$39,060.34"
EWR - RSW,56093102984,E-RNO-MEM-1,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/56093102984,https://www.airlines-manager.com/aircraft/show/99920622,3:15,9:29,320,"$390,547.00","$351,777.00","$1,099.30","$56,434.81"
EWR - RSW,56099991605,E-RNO-MEM-4,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/56099991605,https://www.airlines-manager.com/aircraft/show/99920619,7:00,13:14,320,"$390,547.00","$351,777.00","$1,099.30","$56,434.81"
EWR - RSW,56107731517,E-RNO-MEM-3,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/56107731517,https://www.airlines-manager.com/aircraft/show/99920620,10:15,16:29,320,"$390,547.00","$351,777.00","$1,099.30","$56,434.81"
EWR - RSW,56115475666,E-RNO-MEM-5 B,A319-100,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/56115475666,https://www.airlines-manager.com/aircraft/show/100096560,14:00,20:14,198,"$295,991.00","$268,432.00","$1,355.72","$43,063.96"
EWR - RSW,56118925523,E-RNO-MEM-2,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/56118925523,https://www.airlines-manager.com/aircraft/show/99920621,16:00,22:14,320,"$390,547.00","$351,777.00","$1,099.30","$56,434.81"
EWR - SAN,56084270354,E-MIA-ORD-3,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/56084270354,https://www.airlines-manager.com/aircraft/show/113251307,0:00,11:29,338,"$779,172.00","$726,876.00","$2,150.52","$63,298.35"
EWR - SAN,56103828429,E-MIA-ORD-5,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/56103828429,https://www.airlines-manager.com/aircraft/show/113251309,10:00,21:29,338,"$779,172.00","$726,876.00","$2,150.52","$63,298.35"
EWR - SAN,56118925433,E-MIA-ORD-1,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/56118925433,https://www.airlines-manager.com/aircraft/show/113251305,15:15,2:44,338,"$779,172.00","$726,876.00","$2,150.52","$63,298.35"
EWR - SAN,56118925434,E-MIA-ORD-2,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/56118925434,https://www.airlines-manager.com/aircraft/show/113251306,16:15,3:44,338,"$779,172.00","$726,876.00","$2,150.52","$63,298.35"
EWR - SAN,56131084839,E-MIA-ORD-4,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/56131084839,https://www.airlines-manager.com/aircraft/show/113251308,22:15,9:44,338,"$779,172.00","$726,876.00","$2,150.52","$63,298.35"
EWR - SAT,56084270644,E-ELP-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/56084270644,https://www.airlines-manager.com/aircraft/show/103365576,1:45,9:59,320,"$519,976.00","$476,182.00","$1,488.07","$57,835.87"
EWR - SAT,56103828453,E-ELP-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/56103828453,https://www.airlines-manager.com/aircraft/show/103365577,10:00,18:14,320,"$519,976.00","$476,182.00","$1,488.07","$57,835.87"
EWR - SAT,56112079179,E-ELP-SAT-5 B,A319-100,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/56112079179,https://www.airlines-manager.com/aircraft/show/110582847,12:00,20:14,198,"$392,241.00","$360,537.00","$1,820.89","$43,789.92"
EWR - SAT,56125474073,E-ELP-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/56125474073,https://www.airlines-manager.com/aircraft/show/103365578,19:30,3:44,320,"$519,976.00","$476,182.00","$1,488.07","$57,835.87"
EWR - SAT,56128543976,E-ELP-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/56128543976,https://www.airlines-manager.com/aircraft/show/103365575,21:30,5:44,320,"$519,976.00","$476,182.00","$1,488.07","$57,835.87"
EWR - SAV,56093103157,E-COS-ICT-5,ERJ-175,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/56093103157,https://www.airlines-manager.com/aircraft/show/108466265,4:30,9:29,112,"$146,760.00","$129,843.00","$1,159.31","$26,055.45"
EWR - SAV,56103538625,E-COS-ICT-3,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/56103538625,https://www.airlines-manager.com/aircraft/show/108834810,9:00,13:59,310,"$308,702.00","$282,567.00",$911.51,"$56,702.41"
EWR - SAV,56107731638,E-COS-ICT-2,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/56107731638,https://www.airlines-manager.com/aircraft/show/108834809,11:00,15:59,310,"$308,702.00","$282,567.00",$911.51,"$56,702.41"
EWR - SAV,56122311596,E-COS-ICT-1,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/56122311596,https://www.airlines-manager.com/aircraft/show/108834808,18:00,22:59,310,"$308,702.00","$282,567.00",$911.51,"$56,702.41"
EWR - SAV,56125474133,E-COS-ICT-4,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/56125474133,https://www.airlines-manager.com/aircraft/show/108834811,20:00,0:59,261,"$280,144.00","$254,960.00",$976.86,"$51,162.54"
EWR - SDF,56093103091,E-LIT-FAR-2,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/56093103091,https://www.airlines-manager.com/aircraft/show/86270787,4:00,8:29,310,"$296,515.00","$269,422.00",$869.10,"$60,094.13"
EWR - SDF,56103538557,E-LIT-FAR-1,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/56103538557,https://www.airlines-manager.com/aircraft/show/90452834,8:15,12:44,310,"$296,515.00","$269,422.00",$869.10,"$60,094.13"
EWR - SDF,56115475747,E-LIT-FAR-4,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/56115475747,https://www.airlines-manager.com/aircraft/show/86270784,15:00,19:29,310,"$296,515.00","$269,422.00",$869.10,"$60,094.13"
EWR - SDF,56122311662,E-LIT-FAR-3,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/56122311662,https://www.airlines-manager.com/aircraft/show/86270786,18:15,22:44,310,"$296,515.00","$269,422.00",$869.10,"$60,094.13"
EWR - SEA,56084270537,E-DFW-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/56084270537,https://www.airlines-manager.com/aircraft/show/86238752,1:00,12:14,320,"$713,191.00","$644,122.00","$2,012.88","$57,340.24"
EWR - SEA,56084270538,E-DFW-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/56084270538,https://www.airlines-manager.com/aircraft/show/90489726,3:00,14:14,320,"$713,191.00","$644,122.00","$2,012.88","$57,340.24"
EWR - SEA,56107731574,E-DFW-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/56107731574,https://www.airlines-manager.com/aircraft/show/86238753,11:00,22:14,320,"$713,191.00","$644,122.00","$2,012.88","$57,340.24"
EWR - SEA,56115475736,E-DFW-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/56115475736,https://www.airlines-manager.com/aircraft/show/90489724,15:00,2:14,320,"$713,191.00","$644,122.00","$2,012.88","$57,340.24"
EWR - SEA,56131084898,E-DFW-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/56131084898,https://www.airlines-manager.com/aircraft/show/90489725,22:45,9:59,320,"$713,191.00","$644,122.00","$2,012.88","$57,340.24"
EWR - SEA,56133285059,E-DFW-ATL-6 B,A319-100,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/56133285059,https://www.airlines-manager.com/aircraft/show/105222360,23:30,10:59,198,"$537,220.00","$487,342.00","$2,461.32","$42,439.07"
EWR - SFO,56084270364,E-SFO-LAX-1,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/56084270364,https://www.airlines-manager.com/aircraft/show/83716137,0:00,11:44,400,"$949,362.00","$864,753.00","$2,161.88","$73,700.54"
EWR - SFO,56084270365,E-SFO-LAX-2,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/56084270365,https://www.airlines-manager.com/aircraft/show/89233028,1:30,13:14,400,"$949,362.00","$864,753.00","$2,161.88","$73,700.54"
EWR - SFO,56084270366,E-SFO-LAX-3,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/56084270366,https://www.airlines-manager.com/aircraft/show/89233029,3:00,14:44,400,"$949,362.00","$864,753.00","$2,161.88","$73,700.54"
EWR - SFO,56112079193,E-SFO-LAX-4,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/56112079193,https://www.airlines-manager.com/aircraft/show/89233030,12:15,23:59,400,"$949,362.00","$864,753.00","$2,161.88","$73,700.54"
EWR - SFO,56115475680,E-SFO-LAX-5,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/56115475680,https://www.airlines-manager.com/aircraft/show/89233027,14:15,1:59,400,"$949,362.00","$864,753.00","$2,161.88","$73,700.54"
EWR - SJC,56084270396,E-OAK-SJC-2,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/56084270396,https://www.airlines-manager.com/aircraft/show/104717242,0:00,11:59,310,"$736,357.00","$680,407.00","$2,194.86","$56,779.44"
EWR - SJC,56084270397,E-OAK-SJC-3,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/56084270397,https://www.airlines-manager.com/aircraft/show/104717241,2:00,13:59,310,"$736,357.00","$680,407.00","$2,194.86","$56,779.44"
EWR - SJC,56107731536,E-OAK-SJC-4,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/56107731536,https://www.airlines-manager.com/aircraft/show/104717240,10:30,22:29,310,"$736,357.00","$680,407.00","$2,194.86","$56,779.44"
EWR - SJC,56112079300,E-OAK-SJC-5,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/56112079300,https://www.airlines-manager.com/aircraft/show/104717239,13:00,0:59,310,"$736,357.00","$680,407.00","$2,194.86","$56,779.44"
EWR - SJC,56131084819,E-OAK-SJC-1,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/56131084819,https://www.airlines-manager.com/aircraft/show/104717243,22:00,9:59,310,"$736,357.00","$680,407.00","$2,194.86","$56,779.44"
EWR - SJU,56084270473,E-CUN-SJU-1,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/56084270473,https://www.airlines-manager.com/aircraft/show/106581304,0:30,8:44,320,"$528,828.00","$482,931.00","$1,509.16","$58,655.59"
EWR - SJU,56084270474,E-CUN-SJU-4,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/56084270474,https://www.airlines-manager.com/aircraft/show/106581307,2:00,10:14,320,"$528,828.00","$482,931.00","$1,509.16","$58,655.59"
EWR - SJU,56099991602,E-CUN-SJU-5,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/56099991602,https://www.airlines-manager.com/aircraft/show/86238754,7:00,15:14,320,"$528,828.00","$482,931.00","$1,509.16","$58,655.59"
EWR - SJU,56112079254,E-CUN-SJU-3,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/56112079254,https://www.airlines-manager.com/aircraft/show/106581306,13:00,21:14,320,"$528,828.00","$482,931.00","$1,509.16","$58,655.59"
EWR - SJU,56115475696,E-CUN-SJU-2,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/56115475696,https://www.airlines-manager.com/aircraft/show/106581305,14:30,22:44,320,"$528,828.00","$482,931.00","$1,509.16","$58,655.59"
EWR - SLC,56084270453,E-DEN-SLC-2,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/56084270453,https://www.airlines-manager.com/aircraft/show/87153196,0:15,9:59,310,"$614,239.00","$562,310.00","$1,813.90","$57,771.58"
EWR - SLC,56084270454,E-DEN-SLC-5,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/56084270454,https://www.airlines-manager.com/aircraft/show/90452833,0:15,9:59,310,"$614,239.00","$562,310.00","$1,813.90","$57,771.58"
EWR - SLC,56084270455,E-DEN-SLC-6 B,A319-100,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/56084270455,https://www.airlines-manager.com/aircraft/show/105223076,1:15,10:59,198,"$461,814.00","$420,187.00","$2,122.16","$43,169.90"
EWR - SLC,56103828471,E-DEN-SLC-1,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/56103828471,https://www.airlines-manager.com/aircraft/show/86270785,10:00,19:44,310,"$614,239.00","$562,310.00","$1,813.90","$57,771.58"
EWR - SLC,56107731618,E-DEN-SLC-4,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/56107731618,https://www.airlines-manager.com/aircraft/show/90452835,11:00,20:44,310,"$614,239.00","$562,310.00","$1,813.90","$57,771.58"
EWR - SLC,56125474051,E-DEN-SLC-3,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/56125474051,https://www.airlines-manager.com/aircraft/show/86270783,19:15,4:59,310,"$614,239.00","$562,310.00","$1,813.90","$57,771.58"
EWR - SMF,56084270380,E-SMF-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/56084270380,https://www.airlines-manager.com/aircraft/show/94889150,0:00,11:44,320,"$720,802.00","$662,355.00","$2,069.86","$56,450.71"
EWR - SMF,56084270381,E-SMF-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/56084270381,https://www.airlines-manager.com/aircraft/show/94889151,1:30,13:14,320,"$720,802.00","$662,355.00","$2,069.86","$56,450.71"
EWR - SMF,56084270382,E-SMF-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/56084270382,https://www.airlines-manager.com/aircraft/show/94889152,3:00,14:44,320,"$720,802.00","$662,355.00","$2,069.86","$56,450.71"
EWR - SMF,56107731667,E-SMF-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/56107731667,https://www.airlines-manager.com/aircraft/show/94889153,11:30,23:14,320,"$720,802.00","$662,355.00","$2,069.86","$56,450.71"
EWR - SMF,56112079334,E-SMF-ONT-5,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/56112079334,https://www.airlines-manager.com/aircraft/show/94889154,13:30,1:14,320,"$720,802.00","$662,355.00","$2,069.86","$56,450.71"
EWR - SNN,56107731545,E-56B-6 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/56107731545,https://www.airlines-manager.com/aircraft/show/94521248,10:45,23:59,748,"$2,089,804.00","$1,906,543.00","$2,548.85","$144,071.26"
EWR - SNN,56125474004,E-56B-5 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/56125474004,https://www.airlines-manager.com/aircraft/show/94521253,18:45,7:59,748,"$2,003,611.00","$1,846,437.00","$2,468.50","$139,529.24"
EWR - SRQ,56084270514,E-MTJ-ECP-1,737-900ER,https://www.airlines-manager.com/network/showline/50761179,https://www.airlines-manager.com/network/showflight/56084270514,https://www.airlines-manager.com/aircraft/show/120706946,0:45,6:44,320,"$383,317.00","$348,639.00","$1,089.50","$58,268.36"
EWR - SRQ,56103828468,E-MTJ-ECP-3,737-900ER,https://www.airlines-manager.com/network/showline/50761179,https://www.airlines-manager.com/network/showflight/56103828468,https://www.airlines-manager.com/aircraft/show/120706944,10:00,15:59,320,"$383,317.00","$348,639.00","$1,089.50","$58,268.36"
EWR - SRQ,56118925485,E-MTJ-ECP-2,737-900ER,https://www.airlines-manager.com/network/showline/50761179,https://www.airlines-manager.com/network/showflight/56118925485,https://www.airlines-manager.com/aircraft/show/120706945,15:45,21:44,320,"$383,317.00","$348,639.00","$1,089.50","$58,268.36"
EWR - SRQ,56128543823,E-MTJ-ECP-4,737-900ER,https://www.airlines-manager.com/network/showline/50761179,https://www.airlines-manager.com/network/showflight/56128543823,https://www.airlines-manager.com/aircraft/show/120706943,20:45,2:44,296,"$365,751.00","$331,741.00","$1,120.75","$55,444.18"
EWR - STL,56084270530,E-STL-PIT-3,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/56084270530,https://www.airlines-manager.com/aircraft/show/115400546,1:00,6:29,338,"$374,762.00","$343,767.00","$1,017.06","$62,693.07"
EWR - STL,56093103108,E-STL-PIT-2,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/56093103108,https://www.airlines-manager.com/aircraft/show/115400547,4:15,9:44,338,"$374,762.00","$343,767.00","$1,017.06","$62,693.07"
EWR - STL,56103828432,E-STL-PIT-1,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/56103828432,https://www.airlines-manager.com/aircraft/show/115400548,10:00,15:29,338,"$374,762.00","$343,767.00","$1,017.06","$62,693.07"
EWR - STL,56115475677,E-STL-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/56115475677,https://www.airlines-manager.com/aircraft/show/98887257,14:00,19:29,112,"$163,866.00","$143,099.00","$1,277.67","$26,097.08"
EWR - STL,56118925562,E-STL-PIT-4,A321neo-LR,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/56118925562,https://www.airlines-manager.com/aircraft/show/103406580,16:15,21:44,338,"$378,117.00","$346,673.00","$1,025.66","$63,223.04"
EWR - STL,56131084921,E-STL-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/56131084921,https://www.airlines-manager.com/aircraft/show/98887257,22:45,4:14,112,"$163,866.00","$143,099.00","$1,277.67","$26,097.08"
EWR - SYR,56084270661,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/56084270661,https://www.airlines-manager.com/aircraft/show/119220542,1:45,4:44,310,"$125,306.00","$106,702.00",$344.20,"$35,766.03"
EWR - SYR,56112079310,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/56112079310,https://www.airlines-manager.com/aircraft/show/119220545,13:00,15:59,310,"$125,306.00","$106,702.00",$344.20,"$35,766.03"
EWR - SYR,56122311540,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/56122311540,https://www.airlines-manager.com/aircraft/show/119220544,17:30,20:29,310,"$125,306.00","$106,702.00",$344.20,"$35,766.03"
EWR - SYR,56128543964,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/56128543964,https://www.airlines-manager.com/aircraft/show/119220543,21:15,0:14,310,"$125,306.00","$106,702.00",$344.20,"$35,766.03"
EWR - TLV,56084270763,E-TLV-2 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/56084270763,https://www.airlines-manager.com/aircraft/show/89124073,3:00,1:29,884,"$3,672,705.00","$3,353,356.00","$3,793.39","$149,148.52"
EWR - TLV,56128543947,E-TLV-1 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/56128543947,https://www.airlines-manager.com/aircraft/show/93429385,21:00,19:29,884,"$3,672,705.00","$3,353,356.00","$3,793.39","$149,148.52"
EWR - TPA,56096590126,E-TUS-TPA-3,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/56096590126,https://www.airlines-manager.com/aircraft/show/98379317,5:45,11:44,310,"$377,862.00","$342,681.00","$1,105.42","$57,272.59"
EWR - TPA,56107731544,E-TUS-TPA-4,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/56107731544,https://www.airlines-manager.com/aircraft/show/98379316,10:45,16:44,310,"$377,862.00","$342,681.00","$1,105.42","$57,272.59"
EWR - TPA,56112079289,E-TUS-TPA-2,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/56112079289,https://www.airlines-manager.com/aircraft/show/98379318,13:00,18:59,310,"$377,862.00","$342,681.00","$1,105.42","$57,272.59"
EWR - TPA,56115475756,E-TUS-TPA-5,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/56115475756,https://www.airlines-manager.com/aircraft/show/98379315,15:00,20:59,310,"$377,862.00","$342,681.00","$1,105.42","$57,272.59"
EWR - TPA,56133285029,E-TUS-TPA-1,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/56133285029,https://www.airlines-manager.com/aircraft/show/98379319,23:15,5:14,310,"$377,862.00","$342,681.00","$1,105.42","$57,272.59"
EWR - TUL,56084270659,E-TUL-DSM-3,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/56084270659,https://www.airlines-manager.com/aircraft/show/110044465,1:45,8:29,310,"$428,315.00","$394,214.00","$1,271.66","$58,546.63"
EWR - TUL,56093103035,E-TUL-DSM-2,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/56093103035,https://www.airlines-manager.com/aircraft/show/110044464,3:30,10:14,310,"$428,315.00","$394,214.00","$1,271.66","$58,546.63"
EWR - TUL,56112079305,E-TUL-DSM-1,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/56112079305,https://www.airlines-manager.com/aircraft/show/110044463,13:00,19:44,310,"$428,315.00","$394,214.00","$1,271.66","$58,546.63"
EWR - TUL,56118925590,E-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/56118925590,https://www.airlines-manager.com/aircraft/show/110113039,16:30,23:14,112,"$201,473.00","$178,896.00","$1,597.29","$26,568.71"
EWR - TUL,56125473998,E-TUL-DSM-4,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/56125473998,https://www.airlines-manager.com/aircraft/show/110044466,18:45,1:29,310,"$428,315.00","$394,214.00","$1,271.66","$58,546.63"
EWR - TUS,56084270491,E-TUS-TPA-4,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/56084270491,https://www.airlines-manager.com/aircraft/show/98379316,0:30,10:44,310,"$641,733.00","$593,639.00","$1,914.96","$58,010.33"
EWR - TUS,56084270492,E-TUS-TPA-2,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/56084270492,https://www.airlines-manager.com/aircraft/show/98379318,1:30,11:44,310,"$641,733.00","$593,639.00","$1,914.96","$58,010.33"
EWR - TUS,56093103031,E-TUS-TPA-5,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/56093103031,https://www.airlines-manager.com/aircraft/show/98379315,3:30,13:44,310,"$641,733.00","$593,639.00","$1,914.96","$58,010.33"
EWR - TUS,56112079290,E-TUS-TPA-1,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/56112079290,https://www.airlines-manager.com/aircraft/show/98379319,13:00,23:14,310,"$641,733.00","$593,639.00","$1,914.96","$58,010.33"
EWR - TUS,56125474081,E-TUS-TPA-3,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/56125474081,https://www.airlines-manager.com/aircraft/show/98379317,19:30,5:44,310,"$641,733.00","$593,639.00","$1,914.96","$58,010.33"
EWR - TYS,56084270758,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/56084270758,https://www.airlines-manager.com/aircraft/show/119220543,3:00,7:29,310,"$291,829.00","$266,978.00",$861.22,"$59,549.00"
EWR - TYS,56103828502,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/56103828502,https://www.airlines-manager.com/aircraft/show/119220542,10:00,14:29,310,"$291,829.00","$266,978.00",$861.22,"$59,549.00"
EWR - TYS,56125474002,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/56125474002,https://www.airlines-manager.com/aircraft/show/119220545,18:45,23:14,310,"$291,829.00","$266,978.00",$861.22,"$59,549.00"
EWR - TYS,56133285033,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/56133285033,https://www.airlines-manager.com/aircraft/show/119220544,23:15,3:44,310,"$291,829.00","$266,978.00",$861.22,"$59,549.00"
EWR - VCE,56084270765,E-84B-3  B2,777-300,https://www.airlines-manager.com/network/showline/49921914,https://www.airlines-manager.com/network/showflight/56084270765,https://www.airlines-manager.com/aircraft/show/117958697,3:00,20:14,852,"$2,729,726.00","$2,489,336.00","$2,921.76","$144,448.90"
EWR - VCE,56115475781,E-84B-6  B2,777-300,https://www.airlines-manager.com/network/showline/49921914,https://www.airlines-manager.com/network/showflight/56115475781,https://www.airlines-manager.com/aircraft/show/117958700,15:00,8:14,822,"$2,652,799.00","$2,420,842.00","$2,945.06","$140,474.39"
EWR - YEG,56084270441,E-YEG-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/56084270441,https://www.airlines-manager.com/aircraft/show/98936170,0:15,10:14,320,"$636,684.00","$584,290.00","$1,825.91","$58,526.54"
EWR - YEG,56084270442,E-YEG-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/56084270442,https://www.airlines-manager.com/aircraft/show/98936171,2:15,12:14,320,"$636,684.00","$584,290.00","$1,825.91","$58,526.54"
EWR - YEG,56107731585,E-YEG-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/56107731585,https://www.airlines-manager.com/aircraft/show/98936168,11:00,20:59,320,"$636,684.00","$584,290.00","$1,825.91","$58,526.54"
EWR - YEG,56112079200,E-YEG-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/56112079200,https://www.airlines-manager.com/aircraft/show/98936169,12:30,22:29,320,"$636,684.00","$584,290.00","$1,825.91","$58,526.54"
EWR - YEG,56131084833,E-YEG-BFF-5 B,A319-100,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/56131084833,https://www.airlines-manager.com/aircraft/show/115493369,22:00,7:59,198,"$475,490.00","$437,332.00","$2,208.75","$43,806.21"
EWR - YOW,56103538649,E-CUN-SJU-1,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/56103538649,https://www.airlines-manager.com/aircraft/show/106581304,9:30,12:59,320,"$171,271.00","$145,940.00",$456.06,"$41,896.65"
EWR - YOW,56107731590,E-CUN-SJU-4,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/56107731590,https://www.airlines-manager.com/aircraft/show/106581307,11:00,14:29,320,"$171,271.00","$145,940.00",$456.06,"$41,896.65"
EWR - YOW,56125473979,E-CUN-SJU-5,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/56125473979,https://www.airlines-manager.com/aircraft/show/86238754,18:45,22:14,320,"$171,271.00","$145,940.00",$456.06,"$41,896.65"
EWR - YOW,56128543956,E-CUN-SJU-3,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/56128543956,https://www.airlines-manager.com/aircraft/show/106581306,21:15,0:44,320,"$171,271.00","$145,940.00",$456.06,"$41,896.65"
EWR - YOW,56131084902,E-CUN-SJU-2,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/56131084902,https://www.airlines-manager.com/aircraft/show/106581305,22:45,2:14,293,"$162,458.00","$137,365.00",$468.82,"$39,434.93"
EWR - YUL,56103538650,E-CUN-SJU-3,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/56103538650,https://www.airlines-manager.com/aircraft/show/106581306,9:30,12:59,320,"$174,699.00","$146,541.00",$457.94,"$42,069.19"
EWR - YUL,56107731589,E-CUN-SJU-2,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/56107731589,https://www.airlines-manager.com/aircraft/show/106581305,11:00,14:29,320,"$174,699.00","$146,541.00",$457.94,"$42,069.19"
EWR - YUL,56118925436,E-CUN-SJU-5,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/56118925436,https://www.airlines-manager.com/aircraft/show/86238754,15:15,18:44,320,"$174,699.00","$146,541.00",$457.94,"$42,069.19"
EWR - YUL,56128543928,E-CUN-SJU-1,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/56128543928,https://www.airlines-manager.com/aircraft/show/106581304,21:00,0:29,320,"$174,699.00","$146,541.00",$457.94,"$42,069.19"
EWR - YUL,56131084879,E-CUN-SJU-4,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/56131084879,https://www.airlines-manager.com/aircraft/show/106581307,22:30,1:59,320,"$174,699.00","$146,541.00",$457.94,"$42,069.19"
EWR - YVR,56084270376,E-YVR-YYC-1,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/56084270376,https://www.airlines-manager.com/aircraft/show/113681636,0:00,11:14,400,"$912,826.00","$840,448.00","$2,101.12","$74,817.33"
EWR - YVR,56084270377,E-YVR-YYC-2,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/56084270377,https://www.airlines-manager.com/aircraft/show/113681637,1:30,12:44,400,"$912,826.00","$840,448.00","$2,101.12","$74,817.33"
EWR - YVR,56084270378,E-YVR-YYC-3,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/56084270378,https://www.airlines-manager.com/aircraft/show/113681638,3:00,14:14,400,"$912,826.00","$840,448.00","$2,101.12","$74,817.33"
EWR - YVR,56107731662,E-YVR-YYC-4,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/56107731662,https://www.airlines-manager.com/aircraft/show/113681639,11:15,22:29,400,"$912,826.00","$840,448.00","$2,101.12","$74,817.33"
EWR - YVR,56112079208,E-YVR-YYC-5,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/56112079208,https://www.airlines-manager.com/aircraft/show/113681640,12:45,23:59,400,"$912,826.00","$840,448.00","$2,101.12","$74,817.33"
EWR - YYC,56084270608,E-YVR-YYC-4,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/56084270608,https://www.airlines-manager.com/aircraft/show/113681639,1:30,11:14,400,"$791,438.00","$727,885.00","$1,819.71","$74,782.71"
EWR - YYC,56084270609,E-YVR-YYC-5,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/56084270609,https://www.airlines-manager.com/aircraft/show/113681640,3:00,12:44,400,"$791,438.00","$727,885.00","$1,819.71","$74,782.71"
EWR - YYC,56107731661,E-YVR-YYC-1,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/56107731661,https://www.airlines-manager.com/aircraft/show/113681636,11:15,20:59,400,"$791,438.00","$727,885.00","$1,819.71","$74,782.71"
EWR - YYC,56112079207,E-YVR-YYC-2,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/56112079207,https://www.airlines-manager.com/aircraft/show/113681637,12:45,22:29,400,"$791,438.00","$727,885.00","$1,819.71","$74,782.71"
EWR - YYC,56115475681,E-YVR-YYC-3,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/56115475681,https://www.airlines-manager.com/aircraft/show/113681638,14:15,23:59,400,"$791,438.00","$727,885.00","$1,819.71","$74,782.71"
EWR - YYZ,56084270693,E-DTW-YYZ-4,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/56084270693,https://www.airlines-manager.com/aircraft/show/92003922,2:15,5:44,320,"$180,492.00","$146,154.00",$456.73,"$41,958.09"
EWR - YYZ,56099991634,E-DTW-YYZ-5,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/56099991634,https://www.airlines-manager.com/aircraft/show/92003921,7:30,10:59,320,"$180,492.00","$146,154.00",$456.73,"$41,958.09"
EWR - YYZ,56103828444,E-DTW-YYZ-2,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/56103828444,https://www.airlines-manager.com/aircraft/show/92003924,10:00,13:29,320,"$180,492.00","$146,154.00",$456.73,"$41,958.09"
EWR - YYZ,56115475598,E-DTW-YYZ-1,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/56115475598,https://www.airlines-manager.com/aircraft/show/92003925,14:00,17:29,320,"$180,492.00","$146,154.00",$456.73,"$41,958.09"
EWR - YYZ,56122311629,E-DTW-YYZ-3,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/56122311629,https://www.airlines-manager.com/aircraft/show/92003923,18:15,21:44,320,"$180,492.00","$146,154.00",$456.73,"$41,958.09"
EWR - ZRH,56099991660,E-84A-6 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/56099991660,https://www.airlines-manager.com/aircraft/show/90656552,7:45,23:59,852,"$2,642,406.00","$2,399,717.00","$2,816.57","$147,826.51"
EWR - ZRH,56125474148,E-84A-7 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/56125474148,https://www.airlines-manager.com/aircraft/show/94521249,20:00,12:14,852,"$2,642,406.00","$2,399,717.00","$2,816.57","$147,826.51"
EWR - OKC,54556940947,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/54556940947,https://www.airlines-manager.com/aircraft/show/107161238,11:00,18:14,310,"$460,963.00","$425,234.00","$1,371.72","$58,788.11"
EWR - OKC,54575909621,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/54575909621,https://www.airlines-manager.com/aircraft/show/107161240,21:00,4:14,310,"$460,963.00","$425,234.00","$1,371.72","$58,788.11"
EWR - OMA,54536069825,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/54536069825,https://www.airlines-manager.com/aircraft/show/104418460,2:30,8:59,310,"$401,849.00","$368,874.00","$1,189.92","$56,895.73"
EWR - OMA,54545804730,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/54545804730,https://www.airlines-manager.com/aircraft/show/104418463,7:30,13:59,310,"$401,849.00","$368,874.00","$1,189.92","$56,895.73"
EWR - OMA,54551622557,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/54551622557,https://www.airlines-manager.com/aircraft/show/104418462,10:00,16:29,310,"$401,849.00","$368,874.00","$1,189.92","$56,895.73"
EWR - OMA,54567120424,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/54567120424,https://www.airlines-manager.com/aircraft/show/104418461,17:00,23:29,310,"$401,849.00","$368,874.00","$1,189.92","$56,895.73"
EWR - PBI,54536069709,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/54536069709,https://www.airlines-manager.com/aircraft/show/104418463,1:30,7:29,310,"$379,359.00","$346,918.00","$1,119.09","$57,980.72"
EWR - PBI,54536069710,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/54536069710,https://www.airlines-manager.com/aircraft/show/104418462,3:00,8:59,310,"$379,359.00","$346,918.00","$1,119.09","$57,980.72"
EWR - PBI,54556940973,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/54556940973,https://www.airlines-manager.com/aircraft/show/104418461,11:00,16:59,310,"$379,359.00","$346,918.00","$1,119.09","$57,980.72"
EWR - PBI,54575909587,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/54575909587,https://www.airlines-manager.com/aircraft/show/104418460,20:30,2:29,310,"$379,359.00","$346,918.00","$1,119.09","$57,980.72"
EWR - PVD,54536069718,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/54536069718,https://www.airlines-manager.com/aircraft/show/110044466,1:30,4:14,310,"$98,927.00","$81,292.00",$262.23,"$29,740.98"
EWR - PVD,54551622493,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/54551622493,https://www.airlines-manager.com/aircraft/show/110044465,9:15,11:59,310,"$98,927.00","$81,292.00",$262.23,"$29,740.98"
EWR - PVD,54556940949,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/54556940949,https://www.airlines-manager.com/aircraft/show/110044464,11:00,13:44,310,"$98,927.00","$81,292.00",$262.23,"$29,740.98"
EWR - PVD,54571726849,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/54571726849,https://www.airlines-manager.com/aircraft/show/110044463,19:45,22:29,310,"$98,927.00","$81,292.00",$262.23,"$29,740.98"
EWR - PWM,54536069973,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/54536069973,https://www.airlines-manager.com/aircraft/show/110044463,4:30,7:44,310,"$154,039.00","$134,989.00",$435.45,"$41,749.18"
EWR - PWM,54556940950,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/54556940950,https://www.airlines-manager.com/aircraft/show/110044466,11:00,14:14,310,"$154,039.00","$134,989.00",$435.45,"$41,749.18"
EWR - PWM,54571726665,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/54571726665,https://www.airlines-manager.com/aircraft/show/110044465,18:00,21:14,310,"$154,039.00","$134,989.00",$435.45,"$41,749.18"
EWR - RAP,54536069421,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/54536069421,https://www.airlines-manager.com/aircraft/show/116042860,0:00,7:59,310,"$495,290.00","$458,274.00","$1,478.30","$57,403.84"
EWR - RAP,54536069422,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/54536069422,https://www.airlines-manager.com/aircraft/show/116042861,1:15,9:14,310,"$495,290.00","$458,274.00","$1,478.30","$57,403.84"
EWR - RAP,54556941187,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/54556941187,https://www.airlines-manager.com/aircraft/show/116042862,13:00,20:59,310,"$495,290.00","$458,274.00","$1,478.30","$57,403.84"
EWR - RAP,54571726732,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/54571726732,https://www.airlines-manager.com/aircraft/show/116042859,18:30,2:29,310,"$495,290.00","$458,274.00","$1,478.30","$57,403.84"
EWR - ROC,54551622538,EWR-TYS-GSO 4,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/54551622538,https://www.airlines-manager.com/aircraft/show/119220545,10:00,12:59,310,"$134,976.00","$115,966.00",$374.08,"$38,871.28"
EWR - ROC,54562128380,EWR-TYS-GSO 3,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/54562128380,https://www.airlines-manager.com/aircraft/show/119220544,14:30,17:29,310,"$134,976.00","$115,966.00",$374.08,"$38,871.28"
EWR - ROC,54571726711,EWR-TYS-GSO 2,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/54571726711,https://www.airlines-manager.com/aircraft/show/119220543,18:15,21:14,310,"$134,976.00","$115,966.00",$374.08,"$38,871.28"
EWR - ROC,54580945145,EWR-TYS-GSO 1,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/54580945145,https://www.airlines-manager.com/aircraft/show/119220542,22:45,1:44,310,"$134,976.00","$115,966.00",$374.08,"$38,871.28"
EWR - SAV,54551622477,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/54551622477,https://www.airlines-manager.com/aircraft/show/108834810,9:00,13:59,310,"$307,563.00","$281,428.00",$907.83,"$56,473.85"
EWR - SAV,54556940954,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/54556940954,https://www.airlines-manager.com/aircraft/show/108834809,11:00,15:59,310,"$307,563.00","$281,428.00",$907.83,"$56,473.85"
EWR - SAV,54571726692,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/54571726692,https://www.airlines-manager.com/aircraft/show/108834808,18:00,22:59,310,"$307,563.00","$281,428.00",$907.83,"$56,473.85"
EWR - SDF,54536069941,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/54536069941,https://www.airlines-manager.com/aircraft/show/86270787,4:00,8:29,310,"$295,460.00","$268,367.00",$865.70,"$59,858.81"
EWR - SDF,54545804777,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/54545804777,https://www.airlines-manager.com/aircraft/show/90452834,8:15,12:44,310,"$295,460.00","$268,367.00",$865.70,"$59,858.81"
EWR - SDF,54562128449,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/54562128449,https://www.airlines-manager.com/aircraft/show/86270784,15:00,19:29,310,"$295,460.00","$268,367.00",$865.70,"$59,858.81"
EWR - SDF,54571726720,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/54571726720,https://www.airlines-manager.com/aircraft/show/86270786,18:15,22:44,310,"$295,460.00","$268,367.00",$865.70,"$59,858.81"
EWR - SJC,54536069432,EWR-OAK-SJC 2,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/54536069432,https://www.airlines-manager.com/aircraft/show/104717242,0:00,11:59,310,"$732,935.00","$676,985.00","$2,183.82","$56,493.88"
EWR - SJC,54536069433,EWR-OAK-SJC 3,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/54536069433,https://www.airlines-manager.com/aircraft/show/104717241,2:00,13:59,310,"$732,935.00","$676,985.00","$2,183.82","$56,493.88"
EWR - SJC,54551622711,EWR-OAK-SJC 4,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/54551622711,https://www.airlines-manager.com/aircraft/show/104717240,10:30,22:29,310,"$732,935.00","$676,985.00","$2,183.82","$56,493.88"
EWR - SJC,54556941169,EWR-OAK-SJC 5,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/54556941169,https://www.airlines-manager.com/aircraft/show/104717239,13:00,0:59,310,"$732,935.00","$676,985.00","$2,183.82","$56,493.88"
EWR - SJC,54575909716,EWR-OAK-SJC 1,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/54575909716,https://www.airlines-manager.com/aircraft/show/104717243,22:00,9:59,310,"$732,935.00","$676,985.00","$2,183.82","$56,493.88"
EWR - SLC,54536069483,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/54536069483,https://www.airlines-manager.com/aircraft/show/90452833,0:15,9:59,310,"$611,536.00","$559,607.00","$1,805.18","$57,493.87"
EWR - SLC,54536069484,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/54536069484,https://www.airlines-manager.com/aircraft/show/87153196,0:15,9:59,310,"$611,536.00","$559,607.00","$1,805.18","$57,493.87"
EWR - SLC,54551622515,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/54551622515,https://www.airlines-manager.com/aircraft/show/86270785,10:00,19:44,310,"$611,536.00","$559,607.00","$1,805.18","$57,493.87"
EWR - SLC,54556940902,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/54556940902,https://www.airlines-manager.com/aircraft/show/90452835,11:00,20:44,310,"$611,536.00","$559,607.00","$1,805.18","$57,493.87"
EWR - SLC,54571726810,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/54571726810,https://www.airlines-manager.com/aircraft/show/86270783,19:15,4:59,310,"$611,536.00","$559,607.00","$1,805.18","$57,493.87"
EWR - SYR,54536069721,EWR-TYS-GSO 1,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/54536069721,https://www.airlines-manager.com/aircraft/show/119220542,1:45,4:44,310,"$124,806.00","$106,202.00",$342.59,"$35,598.44"
EWR - SYR,54556941137,EWR-TYS-GSO 4,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/54556941137,https://www.airlines-manager.com/aircraft/show/119220545,13:00,15:59,310,"$124,806.00","$106,202.00",$342.59,"$35,598.44"
EWR - SYR,54567120442,EWR-TYS-GSO 3,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/54567120442,https://www.airlines-manager.com/aircraft/show/119220544,17:30,20:29,310,"$124,806.00","$106,202.00",$342.59,"$35,598.44"
EWR - SYR,54575909661,EWR-TYS-GSO 2,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/54575909661,https://www.airlines-manager.com/aircraft/show/119220543,21:15,0:14,310,"$124,806.00","$106,202.00",$342.59,"$35,598.44"
EWR - TPA,54545804619,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/54545804619,https://www.airlines-manager.com/aircraft/show/98379317,5:45,11:44,310,"$376,361.00","$341,180.00","$1,100.58","$57,021.73"
EWR - TPA,54556940891,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/54556940891,https://www.airlines-manager.com/aircraft/show/98379316,10:45,16:44,310,"$376,361.00","$341,180.00","$1,100.58","$57,021.73"
EWR - TPA,54556940892,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/54556940892,https://www.airlines-manager.com/aircraft/show/98379318,13:00,18:59,310,"$376,361.00","$341,180.00","$1,100.58","$57,021.73"
EWR - TPA,54562128424,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/54562128424,https://www.airlines-manager.com/aircraft/show/98379315,15:00,20:59,310,"$376,361.00","$341,180.00","$1,100.58","$57,021.73"
EWR - TPA,54580945221,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/54580945221,https://www.airlines-manager.com/aircraft/show/98379319,23:15,5:14,310,"$376,361.00","$341,180.00","$1,100.58","$57,021.73"
EWR - TUL,54536069747,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/54536069747,https://www.airlines-manager.com/aircraft/show/110044465,1:45,8:29,310,"$426,549.00","$392,448.00","$1,265.96","$58,284.36"
EWR - TUL,54536069748,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/54536069748,https://www.airlines-manager.com/aircraft/show/110044464,3:30,10:14,310,"$426,549.00","$392,448.00","$1,265.96","$58,284.36"
EWR - TUL,54556941147,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/54556941147,https://www.airlines-manager.com/aircraft/show/110044463,13:00,19:44,310,"$426,549.00","$392,448.00","$1,265.96","$58,284.36"
EWR - TUL,54571726755,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/54571726755,https://www.airlines-manager.com/aircraft/show/110044466,18:45,1:29,310,"$426,549.00","$392,448.00","$1,265.96","$58,284.36"
EWR - TUS,54536069557,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/54536069557,https://www.airlines-manager.com/aircraft/show/98379316,0:30,10:44,310,"$638,846.00","$590,752.00","$1,905.65","$57,728.21"
EWR - TUS,54536069558,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/54536069558,https://www.airlines-manager.com/aircraft/show/98379318,1:30,11:44,310,"$638,846.00","$590,752.00","$1,905.65","$57,728.21"
EWR - TUS,54536069559,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/54536069559,https://www.airlines-manager.com/aircraft/show/98379315,3:30,13:44,310,"$638,846.00","$590,752.00","$1,905.65","$57,728.21"
EWR - TUS,54556941198,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/54556941198,https://www.airlines-manager.com/aircraft/show/98379319,13:00,23:14,310,"$638,846.00","$590,752.00","$1,905.65","$57,728.21"
EWR - TUS,54571726841,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/54571726841,https://www.airlines-manager.com/aircraft/show/98379317,19:30,5:44,310,"$638,846.00","$590,752.00","$1,905.65","$57,728.21"
EWR - TYS,54536069882,EWR-TYS-GSO 2,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/54536069882,https://www.airlines-manager.com/aircraft/show/119220543,3:00,7:29,310,"$290,787.00","$265,936.00",$857.86,"$59,316.58"
EWR - TYS,54551622694,EWR-TYS-GSO 1,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/54551622694,https://www.airlines-manager.com/aircraft/show/119220542,10:00,14:29,310,"$290,787.00","$265,936.00",$857.86,"$59,316.58"
EWR - TYS,54571726767,EWR-TYS-GSO 4,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/54571726767,https://www.airlines-manager.com/aircraft/show/119220545,18:45,23:14,310,"$290,787.00","$265,936.00",$857.86,"$59,316.58"
EWR - TYS,54580945213,EWR-TYS-GSO 3,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/54580945213,https://www.airlines-manager.com/aircraft/show/119220544,23:15,3:44,310,"$290,787.00","$265,936.00",$857.86,"$59,316.58"
HNL - AKL,56118925557,H-84B-2 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/56118925557,https://www.airlines-manager.com/aircraft/show/96807092,16:00,9:59,832,"$2,918,341.00","$2,661,151.00","$3,198.50","$147,978.74"
HNL - AKL,56131084942,H-84B-6 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/56131084942,https://www.airlines-manager.com/aircraft/show/96807088,23:00,16:59,832,"$2,900,946.00","$2,649,712.00","$3,184.75","$147,342.65"
HNL - ATL,56093103160,H-56B-2 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/56093103160,https://www.airlines-manager.com/aircraft/show/109187499,4:45,22:44,592,"$2,202,643.00","$2,016,788.00","$3,406.74","$112,147.62"
HNL - ATL,56118925507,H-56B-4 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/56118925507,https://www.airlines-manager.com/aircraft/show/109187501,16:00,9:59,592,"$2,202,643.00","$2,016,788.00","$3,406.74","$112,147.62"
HNL - ATL,56131084895,H-56B-2 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/56131084895,https://www.airlines-manager.com/aircraft/show/109187499,22:45,16:44,592,"$2,202,643.00","$2,016,788.00","$3,406.74","$112,147.62"
HNL - BNE,56093103102,H-84B-6 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/56093103102,https://www.airlines-manager.com/aircraft/show/96807088,4:00,22:59,832,"$3,061,944.00","$2,793,095.00","$3,357.09","$147,134.06"
HNL - BNE,56103828521,H-84B-3 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/56103828521,https://www.airlines-manager.com/aircraft/show/96807091,10:00,4:59,832,"$3,043,502.00","$2,780,999.00","$3,342.55","$146,496.87"
HNL - BOS,56084270363,H-56E-6 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/56084270363,https://www.airlines-manager.com/aircraft/show/117414505,0:00,19:59,592,"$2,408,347.00","$2,248,895.00","$3,798.81","$112,538.53"
HNL - BOS,56103538571,H-56E-1 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/56103538571,https://www.airlines-manager.com/aircraft/show/117414500,8:30,4:29,592,"$2,408,347.00","$2,248,895.00","$3,798.81","$112,538.53"
HNL - BOS,56103828434,H-56E-4 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/56103828434,https://www.airlines-manager.com/aircraft/show/117414503,10:00,5:59,592,"$2,408,347.00","$2,248,895.00","$3,798.81","$112,538.53"
HNL - BWI,56084270712,H-56F-4 B,787-10,https://www.airlines-manager.com/network/showline/50049284,https://www.airlines-manager.com/network/showflight/56084270712,https://www.airlines-manager.com/aircraft/show/118383854,2:30,21:44,592,"$2,293,871.00","$2,143,128.00","$3,620.15","$111,427.80"
HNL - BWI,56107731675,H-56F-5 B,787-10,https://www.airlines-manager.com/network/showline/50049284,https://www.airlines-manager.com/network/showflight/56107731675,https://www.airlines-manager.com/aircraft/show/118383855,11:45,6:59,592,"$2,293,871.00","$2,143,128.00","$3,620.15","$111,427.80"
HNL - BWI,56122311461,H-56F-1 B,787-10,https://www.airlines-manager.com/network/showline/50049284,https://www.airlines-manager.com/network/showflight/56122311461,https://www.airlines-manager.com/aircraft/show/118383851,17:00,12:14,589,"$2,286,471.00","$2,136,091.00","$3,626.64","$111,061.92"
HNL - CLT,56093103142,H-56D-3 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/56093103142,https://www.airlines-manager.com/aircraft/show/112066134,4:30,23:14,592,"$2,263,173.00","$2,107,474.00","$3,559.92","$112,498.61"
HNL - CLT,56096590096,H-56D-5 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/56096590096,https://www.airlines-manager.com/aircraft/show/112066136,5:30,0:14,592,"$2,263,173.00","$2,107,474.00","$3,559.92","$112,498.61"
HNL - CLT,56133285022,H-56D-3 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/56133285022,https://www.airlines-manager.com/aircraft/show/112066134,23:15,17:59,592,"$2,263,173.00","$2,107,474.00","$3,559.92","$112,498.61"
HNL - CXI,56096590106,H-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/56096590106,https://www.airlines-manager.com/aircraft/show/90717080,5:30,12:44,388,"$494,113.00","$463,605.00","$1,194.86","$64,092.86"
HNL - CXI,56115475753,H-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/56115475753,https://www.airlines-manager.com/aircraft/show/90717080,15:00,22:14,388,"$494,113.00","$463,605.00","$1,194.86","$64,092.86"
HNL - CXI,56131084850,H-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/56131084850,https://www.airlines-manager.com/aircraft/show/90717080,22:15,5:29,388,"$494,113.00","$463,605.00","$1,194.86","$64,092.86"
HNL - DEN,56099991599,H-56F-6 B,787-10,https://www.airlines-manager.com/network/showline/43762939,https://www.airlines-manager.com/network/showflight/56099991599,https://www.airlines-manager.com/aircraft/show/118383856,7:00,20:59,592,"$1,714,252.00","$1,569,460.00","$2,651.11","$112,237.90"
HNL - DEN,56122311462,H-56F-2 B,787-10,https://www.airlines-manager.com/network/showline/43762939,https://www.airlines-manager.com/network/showflight/56122311462,https://www.airlines-manager.com/aircraft/show/118383852,17:00,6:59,592,"$1,714,252.00","$1,569,460.00","$2,651.11","$112,237.90"
HNL - DEN,56131084792,H-56F-4 B,787-10,https://www.airlines-manager.com/network/showline/43762939,https://www.airlines-manager.com/network/showflight/56131084792,https://www.airlines-manager.com/aircraft/show/118383854,21:45,11:44,592,"$1,714,252.00","$1,569,460.00","$2,651.11","$112,237.90"
HNL - DFW,56093103143,H-56E-2 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/56093103143,https://www.airlines-manager.com/aircraft/show/117414501,4:30,19:59,592,"$1,894,637.00","$1,743,253.00","$2,944.68","$112,589.00"
HNL - DFW,56122311460,H-56E-7 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/56122311460,https://www.airlines-manager.com/aircraft/show/117414506,17:00,8:29,592,"$1,894,637.00","$1,743,253.00","$2,944.68","$112,589.00"
HNL - DFW,56125473947,H-56E-3 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/56125473947,https://www.airlines-manager.com/aircraft/show/117414502,18:30,9:59,592,"$1,894,637.00","$1,743,253.00","$2,944.68","$112,589.00"
HNL - DTW,56096590137,H-56E-5 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/56096590137,https://www.airlines-manager.com/aircraft/show/117414504,6:00,23:59,592,"$2,160,456.00","$2,010,661.00","$3,396.39","$111,806.91"
HNL - DTW,56125474117,H-56E-2 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/56125474117,https://www.airlines-manager.com/aircraft/show/117414501,20:00,13:59,592,"$2,160,456.00","$2,010,661.00","$3,396.39","$111,806.91"
HNL - DTW,56125474118,H-56E-6 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/56125474118,https://www.airlines-manager.com/aircraft/show/117414505,20:00,13:59,592,"$2,160,456.00","$2,010,661.00","$3,396.39","$111,806.91"
HNL - EWR,56093103110,H-56A-7 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/56093103110,https://www.airlines-manager.com/aircraft/show/95351586,4:15,23:59,592,"$2,374,139.00","$2,212,224.00","$3,736.86","$112,105.95"
HNL - EWR,56096590134,H-56A-6 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/56096590134,https://www.airlines-manager.com/aircraft/show/95351587,6:00,1:44,592,"$2,374,139.00","$2,212,224.00","$3,736.86","$112,105.95"
HNL - EWR,56125474090,H-56A-3 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/56125474090,https://www.airlines-manager.com/aircraft/show/95351590,19:45,15:29,592,"$2,374,139.00","$2,212,224.00","$3,736.86","$112,105.95"
HNL - GUM,56084270359,H-GUM,A321neo,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/56084270359,https://www.airlines-manager.com/aircraft/show/115400544,0:00,16:44,338,"$1,125,989.00","$1,062,930.00","$3,144.76","$63,521.71"
HNL - GUM,56093103174,H-84A-3 F,777-300,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/56093103174,https://www.airlines-manager.com/aircraft/show/95818924,4:45,20:29,832,"$2,562,457.00","$2,362,030.00","$2,838.98","$150,129.03"
HNL - IAD,56093102979,H-56C-3 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/56093102979,https://www.airlines-manager.com/aircraft/show/111639415,3:15,22:14,592,"$2,279,774.00","$2,127,047.00","$3,592.98","$112,048.13"
HNL - IAD,56103538637,H-56C-5 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/56103538637,https://www.airlines-manager.com/aircraft/show/111639417,9:15,4:14,592,"$2,279,774.00","$2,127,047.00","$3,592.98","$112,048.13"
HNL - IAD,56125474116,H-56C-7 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/56125474116,https://www.airlines-manager.com/aircraft/show/111639419,20:00,14:59,592,"$2,279,774.00","$2,127,047.00","$3,592.98","$112,048.13"
HNL - IAH,56084270361,H-56A-1 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/56084270361,https://www.airlines-manager.com/aircraft/show/95351592,0:00,15:59,592,"$1,936,223.00","$1,795,912.00","$3,033.64","$112,361.54"
HNL - IAH,56093103048,H-56A-3 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/56093103048,https://www.airlines-manager.com/aircraft/show/95351590,3:45,19:44,592,"$1,936,223.00","$1,795,912.00","$3,033.64","$112,361.54"
HNL - IAH,56118925506,H-56A-1 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/56118925506,https://www.airlines-manager.com/aircraft/show/95351592,16:00,7:59,592,"$1,936,223.00","$1,795,912.00","$3,033.64","$112,361.54"
HNL - ITO,56084270667,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/56084270667,https://www.airlines-manager.com/aircraft/show/94803593,1:45,4:44,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,56093103007,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/56093103007,https://www.airlines-manager.com/aircraft/show/94803596,3:15,6:14,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,56096590157,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/56096590157,https://www.airlines-manager.com/aircraft/show/94803595,6:00,8:59,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,56103538655,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/56103538655,https://www.airlines-manager.com/aircraft/show/94803594,9:30,12:29,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,56115475783,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/56115475783,https://www.airlines-manager.com/aircraft/show/94803593,15:00,17:59,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,56118925589,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/56118925589,https://www.airlines-manager.com/aircraft/show/94803596,16:30,19:29,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,56125474064,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/56125474064,https://www.airlines-manager.com/aircraft/show/94803595,19:15,22:14,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,56131084920,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/56131084920,https://www.airlines-manager.com/aircraft/show/94803594,22:45,1:44,128,"$66,247.00","$56,171.00",$438.84,"$18,828.27"
HNL - JFK,56084270746,H-56B-6 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/56084270746,https://www.airlines-manager.com/aircraft/show/109187503,3:00,22:44,592,"$2,407,083.00","$2,224,643.00","$3,757.84","$112,735.29"
HNL - JFK,56103538618,H-56B-1 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/56103538618,https://www.airlines-manager.com/aircraft/show/109187498,9:00,4:44,592,"$2,407,083.00","$2,224,643.00","$3,757.84","$112,735.29"
HNL - JFK,56122311458,H-56B-3 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/56122311458,https://www.airlines-manager.com/aircraft/show/109187500,17:00,12:44,592,"$2,407,083.00","$2,224,643.00","$3,757.84","$112,735.29"
HNL - KOA,56084270525,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/56084270525,https://www.airlines-manager.com/aircraft/show/94803595,0:45,3:29,170,"$58,952.00","$48,574.00",$285.73,"$17,770.98"
HNL - KOA,56093103136,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/56093103136,https://www.airlines-manager.com/aircraft/show/94803594,4:15,6:59,170,"$58,952.00","$48,574.00",$285.73,"$17,770.98"
HNL - KOA,56099991629,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/56099991629,https://www.airlines-manager.com/aircraft/show/94803593,7:15,9:59,170,"$58,952.00","$48,574.00",$285.73,"$17,770.98"
HNL - KOA,56103538612,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/56103538612,https://www.airlines-manager.com/aircraft/show/94803596,8:45,11:29,170,"$58,952.00","$48,574.00",$285.73,"$17,770.98"
HNL - KOA,56115475673,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/56115475673,https://www.airlines-manager.com/aircraft/show/94803595,14:00,16:44,170,"$58,952.00","$48,574.00",$285.73,"$17,770.98"
HNL - KOA,56122311541,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/56122311541,https://www.airlines-manager.com/aircraft/show/94803594,17:30,20:14,170,"$58,952.00","$48,574.00",$285.73,"$17,770.98"
HNL - KOA,56128543808,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/56128543808,https://www.airlines-manager.com/aircraft/show/94803593,20:30,23:14,170,"$58,952.00","$48,574.00",$285.73,"$17,770.98"
HNL - KOA,56131084835,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/56131084835,https://www.airlines-manager.com/aircraft/show/94803596,22:00,0:44,170,"$58,952.00","$48,574.00",$285.73,"$17,770.98"
HNL - LAS,56096590180,H-84A-5 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/56096590180,https://www.airlines-manager.com/aircraft/show/95818922,6:30,18:29,832,"$1,898,127.00","$1,711,499.00","$2,057.09","$142,823.28"
HNL - LAS,56118925587,H-LAS S,A321-200,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/56118925587,https://www.airlines-manager.com/aircraft/show/116385511,16:30,5:14,232,"$747,103.00","$675,601.00","$2,912.07","$53,057.67"
HNL - LAS,56128543805,H-84A-3 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/56128543805,https://www.airlines-manager.com/aircraft/show/95818924,20:30,8:29,805,"$1,857,268.00","$1,673,158.00","$2,078.46","$139,623.76"
HNL - LAX,56099991597,H-SFO-LAX-3,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/56099991597,https://www.airlines-manager.com/aircraft/show/110044460,7:00,18:59,338,"$790,352.00","$722,080.00","$2,136.33","$60,257.02"
HNL - LAX,56103538616,H-SFO-LAX-4,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/56103538616,https://www.airlines-manager.com/aircraft/show/110044461,9:00,20:59,338,"$790,352.00","$722,080.00","$2,136.33","$60,257.02"
HNL - LAX,56103828518,H-SFO-LAX-6 B,A319-100,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/56103828518,https://www.airlines-manager.com/aircraft/show/106106389,10:00,21:59,198,"$546,807.00","$489,527.00","$2,472.36","$40,850.65"
HNL - LAX,56122311627,H-SFO-LAX-1,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/56122311627,https://www.airlines-manager.com/aircraft/show/110044458,18:15,6:14,338,"$790,352.00","$722,080.00","$2,136.33","$60,257.02"
HNL - LAX,56128543763,H-SFO-LAX-2,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/56128543763,https://www.airlines-manager.com/aircraft/show/110044459,20:15,8:14,338,"$790,352.00","$722,080.00","$2,136.33","$60,257.02"
HNL - LAX,56131084790,H-SFO-LAX-5,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/56131084790,https://www.airlines-manager.com/aircraft/show/110044462,21:45,9:44,338,"$790,352.00","$722,080.00","$2,136.33","$60,257.02"
HNL - LIH,56084270526,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/56084270526,https://www.airlines-manager.com/aircraft/show/94803596,0:45,3:14,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,56093103042,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/56093103042,https://www.airlines-manager.com/aircraft/show/94803595,3:30,5:59,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,56099991614,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/56099991614,https://www.airlines-manager.com/aircraft/show/94803594,7:00,9:29,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,56103828523,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/56103828523,https://www.airlines-manager.com/aircraft/show/94803593,10:00,12:29,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,56115475674,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/56115475674,https://www.airlines-manager.com/aircraft/show/94803596,14:00,16:29,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,56118925603,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/56118925603,https://www.airlines-manager.com/aircraft/show/94803595,16:45,19:14,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,56128543787,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/56128543787,https://www.airlines-manager.com/aircraft/show/94803594,20:15,22:44,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,56133285038,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/56133285038,https://www.airlines-manager.com/aircraft/show/94803593,23:15,1:44,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LNY,56084270569,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/56084270569,https://www.airlines-manager.com/aircraft/show/106107514,1:00,3:29,116,"$30,431.00","$25,424.00",$219.17,"$10,237.85"
HNL - LNY,56093103043,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/56093103043,https://www.airlines-manager.com/aircraft/show/106107514,3:30,5:59,116,"$30,431.00","$25,424.00",$219.17,"$10,237.85"
HNL - LNY,56096590158,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/56096590158,https://www.airlines-manager.com/aircraft/show/106107514,6:00,8:29,116,"$30,431.00","$25,424.00",$219.17,"$10,237.85"
HNL - LNY,56103538597,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/56103538597,https://www.airlines-manager.com/aircraft/show/106107514,8:30,10:59,116,"$30,431.00","$25,424.00",$219.17,"$10,237.85"
HNL - LNY,56115475787,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/56115475787,https://www.airlines-manager.com/aircraft/show/106107514,15:00,17:29,116,"$30,431.00","$25,424.00",$219.17,"$10,237.85"
HNL - LNY,56122311542,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/56122311542,https://www.airlines-manager.com/aircraft/show/106107514,17:30,19:59,116,"$30,431.00","$25,424.00",$219.17,"$10,237.85"
HNL - LNY,56125474151,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/56125474151,https://www.airlines-manager.com/aircraft/show/106107514,20:00,22:29,116,"$30,431.00","$25,424.00",$219.17,"$10,237.85"
HNL - LNY,56131084892,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/56131084892,https://www.airlines-manager.com/aircraft/show/106107514,22:30,0:59,116,"$30,431.00","$25,424.00",$219.17,"$10,237.85"
HNL - MCO,56084270533,H-56C-7 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/56084270533,https://www.airlines-manager.com/aircraft/show/111639419,1:00,19:59,592,"$2,289,533.00","$2,129,434.00","$3,597.02","$112,173.87"
HNL - MCO,56093103112,H-56C-6 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/56093103112,https://www.airlines-manager.com/aircraft/show/111639418,4:15,23:14,592,"$2,289,533.00","$2,129,434.00","$3,597.02","$112,173.87"
HNL - MCO,56103538552,H-56C-2 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/56103538552,https://www.airlines-manager.com/aircraft/show/111639414,8:15,3:14,592,"$2,289,533.00","$2,129,434.00","$3,597.02","$112,173.87"
HNL - MEL,56103538596,H-84A-4 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/56103538596,https://www.airlines-manager.com/aircraft/show/95818923,8:30,6:29,832,"$3,546,306.00","$3,244,924.00","$3,900.15","$147,608.37"
HNL - MEL,56125474150,H-84A-7 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/56125474150,https://www.airlines-manager.com/aircraft/show/95818920,20:00,17:59,832,"$3,546,306.00","$3,244,924.00","$3,900.15","$147,608.37"
HNL - MIA,56103538570,H-56A-2 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/56103538570,https://www.airlines-manager.com/aircraft/show/95351591,8:30,3:44,592,"$2,335,269.00","$2,169,008.00","$3,663.86","$112,773.38"
HNL - MIA,56107731539,H-56A-5 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/56107731539,https://www.airlines-manager.com/aircraft/show/95351588,10:45,5:59,592,"$2,335,269.00","$2,169,008.00","$3,663.86","$112,773.38"
HNL - MIA,56118925465,H-56A-4 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/56118925465,https://www.airlines-manager.com/aircraft/show/95351589,15:30,10:44,592,"$2,335,269.00","$2,169,008.00","$3,663.86","$112,773.38"
HNL - MNL,56099991650,H-84A-2 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/56099991650,https://www.airlines-manager.com/aircraft/show/95818925,7:30,4:44,832,"$3,468,526.00","$3,179,229.00","$3,821.19","$149,728.21"
HNL - MNL,56125473970,H-84A-5 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/56125473970,https://www.airlines-manager.com/aircraft/show/95818922,18:30,15:44,832,"$3,468,526.00","$3,179,229.00","$3,821.19","$149,728.21"
HNL - MSP,56118925509,H-56C-1 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/56118925509,https://www.airlines-manager.com/aircraft/show/111639413,16:00,8:14,592,"$1,950,535.00","$1,816,162.00","$3,067.84","$111,878.56"
HNL - MSP,56122311459,H-56C-4 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/56122311459,https://www.airlines-manager.com/aircraft/show/111639416,17:00,9:14,592,"$1,950,535.00","$1,816,162.00","$3,067.84","$111,878.56"
HNL - MSP,56131084841,H-56C-3 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/56131084841,https://www.airlines-manager.com/aircraft/show/111639415,22:15,14:29,592,"$1,950,535.00","$1,816,162.00","$3,067.84","$111,878.56"
HNL - NAN,56093103070,H-84A-7 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/56093103070,https://www.airlines-manager.com/aircraft/show/95818920,3:45,17:14,832,"$2,077,351.00","$1,906,145.00","$2,291.04","$141,370.46"
HNL - NAN,56122311619,H-84A-1 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/56122311619,https://www.airlines-manager.com/aircraft/show/95818926,18:00,7:29,832,"$2,048,301.00","$1,886,749.00","$2,267.73","$139,931.94"
HNL - OGG,56084270668,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/56084270668,https://www.airlines-manager.com/aircraft/show/94803594,1:45,4:14,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,56093103175,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/56093103175,https://www.airlines-manager.com/aircraft/show/94803593,4:45,7:14,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,56096590168,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/56096590168,https://www.airlines-manager.com/aircraft/show/94803596,6:15,8:44,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,56103538632,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/56103538632,https://www.airlines-manager.com/aircraft/show/94803595,9:00,11:29,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,56115475785,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/56115475785,https://www.airlines-manager.com/aircraft/show/94803594,15:00,17:29,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,56122311620,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/56122311620,https://www.airlines-manager.com/aircraft/show/94803593,18:00,20:29,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,56125474087,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/56125474087,https://www.airlines-manager.com/aircraft/show/94803596,19:30,21:59,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,56131084864,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/56131084864,https://www.airlines-manager.com/aircraft/show/94803595,22:15,0:44,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - ORD,56103828433,H-56B-5 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/56103828433,https://www.airlines-manager.com/aircraft/show/109187502,10:00,2:59,592,"$2,090,552.00","$1,921,092.00","$3,245.09","$113,116.31"
HNL - ORD,56118925508,H-56B-7 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/56118925508,https://www.airlines-manager.com/aircraft/show/109187504,16:00,8:59,592,"$2,090,552.00","$1,921,092.00","$3,245.09","$113,116.31"
HNL - ORD,56131084896,H-56B-6 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/56131084896,https://www.airlines-manager.com/aircraft/show/109187503,22:45,15:44,592,"$2,090,552.00","$1,921,092.00","$3,245.09","$113,116.31"
HNL - PHL,56099991598,H-56F-3 B,787-10,https://www.airlines-manager.com/network/showline/50049283,https://www.airlines-manager.com/network/showflight/56099991598,https://www.airlines-manager.com/aircraft/show/118383853,7:00,2:29,592,"$2,346,540.00","$2,188,960.00","$3,697.57","$112,350.38"
HNL - PHL,56122311463,H-56F-7 B,787-10,https://www.airlines-manager.com/network/showline/50049283,https://www.airlines-manager.com/network/showflight/56122311463,https://www.airlines-manager.com/aircraft/show/118383857,17:00,12:29,592,"$2,346,540.00","$2,188,960.00","$3,697.57","$112,350.38"
HNL - PHL,56128543841,H-56F-6 B,787-10,https://www.airlines-manager.com/network/showline/50049283,https://www.airlines-manager.com/network/showflight/56128543841,https://www.airlines-manager.com/aircraft/show/118383856,21:00,16:29,592,"$2,346,540.00","$2,188,960.00","$3,697.57","$112,350.38"
HNL - PHX,56093103018,H-56D-7 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/56093103018,https://www.airlines-manager.com/aircraft/show/112066138,3:30,15:59,592,"$1,520,203.00","$1,409,068.00","$2,380.18","$112,875.94"
HNL - PHX,56115475724,H-56D-6 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/56115475724,https://www.airlines-manager.com/aircraft/show/112066137,15:00,3:29,592,"$1,520,203.00","$1,409,068.00","$2,380.18","$112,875.94"
HNL - PHX,56118925511,H-56D-2 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/56118925511,https://www.airlines-manager.com/aircraft/show/112066133,16:00,4:29,592,"$1,520,203.00","$1,409,068.00","$2,380.18","$112,875.94"
HNL - PPG,56093102978,H-TRW-PPG-1 S,A321neo,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/56093102978,https://www.airlines-manager.com/aircraft/show/120872966,3:15,15:29,410,"$843,136.00","$795,552.00","$1,940.37","$65,031.50"
HNL - PPG,56118925504,H-TRW-PPG-2 S,A321neo,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/56118925504,https://www.airlines-manager.com/aircraft/show/120872965,16:00,4:14,410,"$843,136.00","$795,552.00","$1,940.37","$65,031.50"
HNL - PPG,56122311573,H-TRW-PPG-3 S,A321neo,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/56122311573,https://www.airlines-manager.com/aircraft/show/120872964,18:00,6:14,410,"$843,136.00","$795,552.00","$1,940.37","$65,031.50"
HNL - PPT,56093103168,H-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/56093103168,https://www.airlines-manager.com/aircraft/show/88725600,4:45,17:29,310,"$771,400.00","$718,433.00","$2,317.53","$56,421.44"
HNL - PPT,56118925497,H-84A-6 F,777-300,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/56118925497,https://www.airlines-manager.com/aircraft/show/95818921,15:45,3:44,832,"$1,903,144.00","$1,751,128.00","$2,104.72","$146,130.29"
HNL - PPT,56122311537,H-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/56122311537,https://www.airlines-manager.com/aircraft/show/88725600,17:30,6:14,310,"$771,400.00","$718,433.00","$2,317.53","$56,421.44"
HNL - SEA,56093103049,H-56D-1 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/56093103049,https://www.airlines-manager.com/aircraft/show/112066132,3:45,15:14,592,"$1,418,230.00","$1,316,557.00","$2,223.91","$114,649.38"
HNL - SEA,56118925510,H-56D-1 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/56118925510,https://www.airlines-manager.com/aircraft/show/112066132,16:00,3:29,592,"$1,418,230.00","$1,316,557.00","$2,223.91","$114,649.38"
HNL - SEA,56122311574,H-56D-4 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/56122311574,https://www.airlines-manager.com/aircraft/show/112066135,18:00,5:29,592,"$1,418,230.00","$1,316,557.00","$2,223.91","$114,649.38"
HNL - SFO,56099991596,H-SFO-LAX-1,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/56099991596,https://www.airlines-manager.com/aircraft/show/110044458,7:00,18:14,338,"$759,152.00","$700,668.00","$2,072.98","$62,374.01"
HNL - SFO,56103538615,H-SFO-LAX-2,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/56103538615,https://www.airlines-manager.com/aircraft/show/110044459,9:00,20:14,338,"$759,152.00","$700,668.00","$2,072.98","$62,374.01"
HNL - SFO,56107731528,H-SFO-LAX-5,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/56107731528,https://www.airlines-manager.com/aircraft/show/110044462,10:30,21:44,338,"$759,152.00","$700,668.00","$2,072.98","$62,374.01"
HNL - SFO,56125474009,H-SFO-LAX-3,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/56125474009,https://www.airlines-manager.com/aircraft/show/110044460,19:00,6:14,338,"$759,152.00","$700,668.00","$2,072.98","$62,374.01"
HNL - SFO,56128543840,H-SFO-LAX-4,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/56128543840,https://www.airlines-manager.com/aircraft/show/110044461,21:00,8:14,338,"$759,152.00","$700,668.00","$2,072.98","$62,374.01"
HNL - SFO,56131084831,H-SFO-LAX-6 B,A319-100,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/56131084831,https://www.airlines-manager.com/aircraft/show/106106389,22:00,9:29,198,"$528,428.00","$479,141.00","$2,419.90","$41,724.91"
HNL - SIN,56096590094,H-84B-4 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/56096590094,https://www.airlines-manager.com/aircraft/show/96807090,5:15,7:29,832,"$4,330,890.00","$3,932,668.00","$4,726.76","$1,760,896.12"
HNL - SIN,56122311501,H-84B-7 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/56122311501,https://www.airlines-manager.com/aircraft/show/96807087,17:00,19:14,832,"$4,330,890.00","$3,932,668.00","$4,726.76","$1,760,896.12"
HNL - SYD,56099991651,H-84B-5 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/56099991651,https://www.airlines-manager.com/aircraft/show/96807089,7:30,3:59,832,"$3,347,714.00","$3,040,683.00","$3,654.67","$148,446.69"
HNL - SYD,56125474063,H-84B-1 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/56125474063,https://www.airlines-manager.com/aircraft/show/96807093,19:15,15:44,832,"$3,347,714.00","$3,040,683.00","$3,654.67","$148,446.69"
HNL - TRW,56093103109,H-TRW-PPG-2 S,A321neo,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/56093103109,https://www.airlines-manager.com/aircraft/show/120872965,4:15,15:29,410,"$815,013.00","$772,225.00","$1,883.48","$68,744.07"
HNL - TRW,56096590162,H-TRW-PPG-3 S,A321neo,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/56096590162,https://www.airlines-manager.com/aircraft/show/120872964,6:15,17:29,410,"$815,013.00","$772,225.00","$1,883.48","$68,744.07"
HNL - TRW,56118925505,H-TRW-PPG-1 S,A321neo,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/56118925505,https://www.airlines-manager.com/aircraft/show/120872966,16:00,3:14,410,"$815,013.00","$772,225.00","$1,883.48","$68,744.07"
HNL - YVR,56084270433,H-56D-6 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/56084270433,https://www.airlines-manager.com/aircraft/show/112066137,0:15,11:59,592,"$1,421,513.00","$1,326,107.00","$2,240.05","$113,020.48"
HNL - YVR,56093103017,H-56D-2 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/56093103017,https://www.airlines-manager.com/aircraft/show/112066133,3:30,15:14,592,"$1,421,513.00","$1,326,107.00","$2,240.05","$113,020.48"
HNL - YVR,56118925512,H-56D-7 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/56118925512,https://www.airlines-manager.com/aircraft/show/112066138,16:00,3:44,592,"$1,421,513.00","$1,326,107.00","$2,240.05","$113,020.48"
IAH - ABQ,56084270552,I-CLE-STL-1,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/56084270552,https://www.airlines-manager.com/aircraft/show/103600700,1:00,5:59,310,"$318,057.00","$284,740.00",$918.52,"$57,138.46"
IAH - ABQ,56084270553,I-CLE-STL-5 B,A319-100,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/56084270553,https://www.airlines-manager.com/aircraft/show/110582844,2:30,7:29,198,"$241,670.00","$214,984.00","$1,085.78","$43,140.60"
IAH - ABQ,56096590146,I-CLE-STL-4,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/56096590146,https://www.airlines-manager.com/aircraft/show/88725601,6:00,10:59,310,"$318,057.00","$284,740.00",$918.52,"$57,138.46"
IAH - ABQ,56112079295,I-CLE-STL-3,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/56112079295,https://www.airlines-manager.com/aircraft/show/103600702,13:00,17:59,310,"$318,057.00","$284,740.00",$918.52,"$57,138.46"
IAH - ABQ,56125473997,I-CLE-STL-2,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/56125473997,https://www.airlines-manager.com/aircraft/show/103600701,18:45,23:44,310,"$318,057.00","$284,740.00",$918.52,"$57,138.46"
IAH - ALB,56084270446,I-MHT-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/56084270446,https://www.airlines-manager.com/aircraft/show/114266976,0:15,7:59,320,"$497,488.00","$452,034.00","$1,412.61","$58,452.67"
IAH - ALB,56084270447,I-MHT-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/56084270447,https://www.airlines-manager.com/aircraft/show/92800067,2:00,9:59,112,"$235,267.00","$208,227.00","$1,859.17","$26,082.71"
IAH - ALB,56112079142,I-MHT-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/56112079142,https://www.airlines-manager.com/aircraft/show/114266971,12:00,19:44,320,"$497,488.00","$452,034.00","$1,412.61","$58,452.67"
IAH - ALB,56115475744,I-MHT-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/56115475744,https://www.airlines-manager.com/aircraft/show/114266970,15:00,22:44,320,"$497,488.00","$452,034.00","$1,412.61","$58,452.67"
IAH - ALB,56128543771,I-MHT-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/56128543771,https://www.airlines-manager.com/aircraft/show/114266972,20:15,3:59,320,"$497,488.00","$452,034.00","$1,412.61","$58,452.67"
IAH - ANC,56112079169,I-ANC-ONT-1,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/56112079169,https://www.airlines-manager.com/aircraft/show/108258010,12:00,2:44,310,"$901,188.00","$830,964.00","$2,680.53","$56,400.27"
IAH - ANC,56115475645,I-ANC-ONT-2,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/56115475645,https://www.airlines-manager.com/aircraft/show/108258011,14:00,4:44,310,"$901,188.00","$830,964.00","$2,680.53","$56,400.27"
IAH - ANC,56125474061,I-ANC-ONT-3,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/56125474061,https://www.airlines-manager.com/aircraft/show/108258012,19:15,9:59,310,"$901,188.00","$830,964.00","$2,680.53","$56,400.27"
IAH - ANC,56128543962,I-ANC-ONT-4,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/56128543962,https://www.airlines-manager.com/aircraft/show/108089220,21:15,11:59,310,"$901,188.00","$830,964.00","$2,680.53","$56,400.27"
IAH - ANC,56133285037,I-ANC-ONT-5 B,A319-100,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/56133285037,https://www.airlines-manager.com/aircraft/show/108286957,23:15,13:59,198,"$672,390.00","$616,070.00","$3,111.46","$41,814.71"
IAH - ATL,56084270462,I-LAS-ATL-6,ERJ-175,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/56084270462,https://www.airlines-manager.com/aircraft/show/82323704,0:15,4:59,112,"$146,580.00","$112,539.00","$1,004.81","$23,775.85"
IAH - ATL,56103828446,I-LAS-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/56103828446,https://www.airlines-manager.com/aircraft/show/95894466,10:00,14:44,320,"$307,891.00","$243,816.00",$761.93,"$51,510.42"
IAH - ATL,56107731543,I-LAS-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/56107731543,https://www.airlines-manager.com/aircraft/show/96256511,10:45,15:29,320,"$307,891.00","$243,816.00",$761.93,"$51,510.42"
IAH - ATL,56118925520,I-LAS-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/56118925520,https://www.airlines-manager.com/aircraft/show/96183549,16:00,20:44,320,"$307,891.00","$243,816.00",$761.93,"$51,510.42"
IAH - ATL,56122311550,I-LAS-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/56122311550,https://www.airlines-manager.com/aircraft/show/96177955,17:45,22:29,320,"$307,891.00","$243,816.00",$761.93,"$51,510.42"
IAH - ATL,56133285072,I-LAS-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/56133285072,https://www.airlines-manager.com/aircraft/show/96250652,23:45,4:29,320,"$307,891.00","$243,816.00",$761.93,"$51,510.42"
IAH - AUS,56093103107,I-BWI-PHL-2,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/56093103107,https://www.airlines-manager.com/aircraft/show/106007214,4:15,6:59,338,"$100,920.00","$77,319.00",$228.75,"$28,287.44"
IAH - AUS,56107731554,I-BWI-PHL-1,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/56107731554,https://www.airlines-manager.com/aircraft/show/106007213,11:00,13:44,338,"$100,920.00","$77,319.00",$228.75,"$28,287.44"
IAH - AUS,56112079121,I-BWI-PHL-5,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/56112079121,https://www.airlines-manager.com/aircraft/show/106007217,12:00,14:44,338,"$100,920.00","$77,319.00",$228.75,"$28,287.44"
IAH - AUS,56122311626,I-BWI-PHL-4,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/56122311626,https://www.airlines-manager.com/aircraft/show/106007216,18:15,20:59,338,"$100,920.00","$77,319.00",$228.75,"$28,287.44"
IAH - AUS,56128543970,I-BWI-PHL-3,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/56128543970,https://www.airlines-manager.com/aircraft/show/106007215,21:30,0:14,271,"$89,142.00","$65,754.00",$242.63,"$24,056.34"
IAH - BDL,56096590150,I-CLE-STL-1,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/56096590150,https://www.airlines-manager.com/aircraft/show/103600700,6:00,13:59,310,"$500,324.00","$457,984.00","$1,477.37","$57,367.52"
IAH - BDL,56099991648,I-CLE-STL-5 B,A319-100,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/56099991648,https://www.airlines-manager.com/aircraft/show/110582844,7:30,15:29,198,"$377,004.00","$343,067.00","$1,732.66","$42,972.90"
IAH - BDL,56107731617,I-CLE-STL-4,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/56107731617,https://www.airlines-manager.com/aircraft/show/88725601,11:00,18:59,310,"$500,324.00","$457,984.00","$1,477.37","$57,367.52"
IAH - BDL,56122311590,I-CLE-STL-3,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/56122311590,https://www.airlines-manager.com/aircraft/show/103600702,18:00,1:59,310,"$500,324.00","$457,984.00","$1,477.37","$57,367.52"
IAH - BDL,56125474113,I-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/56125474113,https://www.airlines-manager.com/aircraft/show/96990010,19:45,3:44,112,"$235,319.00","$207,286.00","$1,850.77","$25,964.84"
IAH - BDL,56133285080,I-CLE-STL-2,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/56133285080,https://www.airlines-manager.com/aircraft/show/103600701,23:45,7:44,310,"$500,324.00","$457,984.00","$1,477.37","$57,367.52"
IAH - BFF,56093103088,I-MHT-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/56093103088,https://www.airlines-manager.com/aircraft/show/114266972,4:00,9:44,320,"$366,994.00","$329,116.00","$1,028.49","$57,403.95"
IAH - BFF,56107731520,I-MHT-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/56107731520,https://www.airlines-manager.com/aircraft/show/114266976,10:15,15:59,320,"$366,994.00","$329,116.00","$1,028.49","$57,403.95"
IAH - BFF,56112079185,I-MHT-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/56112079185,https://www.airlines-manager.com/aircraft/show/92800067,12:00,17:44,112,"$173,788.00","$152,107.00","$1,358.10","$26,530.29"
IAH - BFF,56125474097,I-MHT-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/56125474097,https://www.airlines-manager.com/aircraft/show/114266971,19:45,1:29,320,"$366,994.00","$329,116.00","$1,028.49","$57,403.95"
IAH - BFF,56131084905,I-MHT-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/56131084905,https://www.airlines-manager.com/aircraft/show/114266970,22:45,4:29,320,"$366,994.00","$329,116.00","$1,028.49","$57,403.95"
IAH - BHM,56084270390,I-BHM,737-900ER,https://www.airlines-manager.com/network/showline/50835066,https://www.airlines-manager.com/network/showflight/56084270390,https://www.airlines-manager.com/aircraft/show/120933644,0:00,4:14,320,"$268,942.00","$236,950.00",$740.47,"$55,972.44"
IAH - BHM,56107731610,I-BHM,737-900ER,https://www.airlines-manager.com/network/showline/50835066,https://www.airlines-manager.com/network/showflight/56107731610,https://www.airlines-manager.com/aircraft/show/120933644,11:00,15:14,320,"$268,942.00","$236,950.00",$740.47,"$55,972.44"
IAH - BHM,56118925438,I-BHM,737-900ER,https://www.airlines-manager.com/network/showline/50835066,https://www.airlines-manager.com/network/showflight/56118925438,https://www.airlines-manager.com/aircraft/show/120933644,15:15,19:29,320,"$268,942.00","$236,950.00",$740.47,"$55,972.44"
IAH - BHM,56125474076,I-BHM,737-900ER,https://www.airlines-manager.com/network/showline/50835066,https://www.airlines-manager.com/network/showflight/56125474076,https://www.airlines-manager.com/aircraft/show/120933644,19:30,23:44,320,"$268,942.00","$236,950.00",$740.47,"$55,972.44"
IAH - BIL,56084270731,I-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/56084270731,https://www.airlines-manager.com/aircraft/show/117273390,2:45,9:59,320,"$457,445.00","$414,054.00","$1,293.92","$57,242.49"
IAH - BIL,56103538622,I-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/56103538622,https://www.airlines-manager.com/aircraft/show/117273392,9:00,16:14,320,"$457,445.00","$414,054.00","$1,293.92","$57,242.49"
IAH - BIL,56107731602,I-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/56107731602,https://www.airlines-manager.com/aircraft/show/117273389,11:00,18:14,320,"$457,445.00","$414,054.00","$1,293.92","$57,242.49"
IAH - BIL,56125473955,I-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/56125473955,https://www.airlines-manager.com/aircraft/show/117273391,18:30,1:44,320,"$457,445.00","$414,054.00","$1,293.92","$57,242.49"
IAH - BNA,56093103095,I-BOI-BNA-4,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/56093103095,https://www.airlines-manager.com/aircraft/show/104258214,4:00,8:44,310,"$302,944.00","$271,735.00",$876.56,"$57,408.80"
IAH - BNA,56103538640,I-BOI-BNA-3,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/56103538640,https://www.airlines-manager.com/aircraft/show/104258213,9:15,13:59,310,"$302,944.00","$271,735.00",$876.56,"$57,408.80"
IAH - BNA,56115475759,I-BOI-BNA-2,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/56115475759,https://www.airlines-manager.com/aircraft/show/104258212,15:00,19:44,310,"$302,944.00","$271,735.00",$876.56,"$57,408.80"
IAH - BNA,56131084817,I-BOI-BNA-1,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/56131084817,https://www.airlines-manager.com/aircraft/show/104258211,22:00,2:44,310,"$302,944.00","$271,735.00",$876.56,"$57,408.80"
IAH - BNA,56131084818,I-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/56131084818,https://www.airlines-manager.com/aircraft/show/103534664,23:00,3:44,112,"$143,897.00","$124,026.00","$1,107.38","$26,202.68"
IAH - BOG,56096590135,I-56A-4 E,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/56096590135,https://www.airlines-manager.com/aircraft/show/106676235,6:00,15:59,648,"$1,306,935.00","$1,214,643.00","$1,874.45","$121,667.08"
IAH - BOG,56115475585,I-56A-6 E,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/56115475585,https://www.airlines-manager.com/aircraft/show/106676237,14:00,23:59,648,"$1,306,935.00","$1,214,643.00","$1,874.45","$121,667.08"
IAH - BOG,56125474115,I-56A-1 E,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/56125474115,https://www.airlines-manager.com/aircraft/show/106676232,20:00,5:59,648,"$1,306,935.00","$1,214,643.00","$1,874.45","$121,667.08"
IAH - BOI,56084270590,I-BOI-BNA-3,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/56084270590,https://www.airlines-manager.com/aircraft/show/104258213,1:15,9:14,310,"$502,482.00","$460,855.00","$1,486.63","$57,727.14"
IAH - BOI,56099991612,I-BOI-BNA-2,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/56099991612,https://www.airlines-manager.com/aircraft/show/104258212,7:00,14:59,310,"$502,482.00","$460,855.00","$1,486.63","$57,727.14"
IAH - BOI,56115475636,I-BOI-BNA-1,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/56115475636,https://www.airlines-manager.com/aircraft/show/104258211,14:00,21:59,310,"$502,482.00","$460,855.00","$1,486.63","$57,727.14"
IAH - BOI,56115475637,I-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/56115475637,https://www.airlines-manager.com/aircraft/show/103534664,15:00,22:59,112,"$236,364.00","$208,802.00","$1,864.30","$26,154.74"
IAH - BOI,56125474129,I-BOI-BNA-4,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/56125474129,https://www.airlines-manager.com/aircraft/show/104258214,20:00,3:59,310,"$502,482.00","$460,855.00","$1,486.63","$57,727.14"
IAH - BOS,56084270639,I-JFK-LAX-3,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/56084270639,https://www.airlines-manager.com/aircraft/show/88400800,1:45,9:59,400,"$668,982.00","$607,178.00","$1,517.95","$73,746.32"
IAH - BOS,56107731566,I-JFK-LAX-2,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/56107731566,https://www.airlines-manager.com/aircraft/show/88400799,11:00,19:14,400,"$668,982.00","$607,178.00","$1,517.95","$73,746.32"
IAH - BOS,56112079122,I-JFK-LAX-4,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/56112079122,https://www.airlines-manager.com/aircraft/show/88400801,12:00,20:14,400,"$668,982.00","$607,178.00","$1,517.95","$73,746.32"
IAH - BOS,56122311548,I-JFK-LAX-5,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/56122311548,https://www.airlines-manager.com/aircraft/show/89233038,17:45,1:59,400,"$668,982.00","$607,178.00","$1,517.95","$73,746.32"
IAH - BOS,56125473948,I-JFK-LAX-1,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/56125473948,https://www.airlines-manager.com/aircraft/show/88400798,18:30,2:44,382,"$651,002.00","$589,944.00","$1,544.36","$71,653.12"
IAH - BSB,56107731665,I-84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/56107731665,https://www.airlines-manager.com/aircraft/show/89124076,11:15,5:29,932,"$3,069,976.00","$2,802,042.00","$3,006.48","$153,676.89"
IAH - BSB,56128543786,I-84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/56128543786,https://www.airlines-manager.com/aircraft/show/88905140,20:15,14:29,932,"$3,069,976.00","$2,802,042.00","$3,006.48","$153,676.89"
IAH - BTV,56084270391,I-BTV-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/56084270391,https://www.airlines-manager.com/aircraft/show/86385103,0:00,8:14,310,"$517,662.00","$475,935.00","$1,535.27","$57,805.87"
IAH - BTV,56093103138,I-BTV-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/56093103138,https://www.airlines-manager.com/aircraft/show/82543907,4:15,12:29,112,"$243,763.00","$215,988.00","$1,928.46","$26,233.36"
IAH - BTV,56099991625,I-BTV-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/56099991625,https://www.airlines-manager.com/aircraft/show/114373409,7:15,15:29,310,"$517,662.00","$475,935.00","$1,535.27","$57,805.87"
IAH - BTV,56115475654,I-BTV-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/56115475654,https://www.airlines-manager.com/aircraft/show/114373410,14:00,22:14,310,"$517,662.00","$475,935.00","$1,535.27","$57,805.87"
IAH - BTV,56125473999,I-BTV-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/56125473999,https://www.airlines-manager.com/aircraft/show/113994196,18:45,2:59,310,"$517,662.00","$475,935.00","$1,535.27","$57,805.87"
IAH - BUF,56084270591,I-PVD-BUF-4,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/56084270591,https://www.airlines-manager.com/aircraft/show/107467127,1:15,8:14,310,"$454,004.00","$415,337.00","$1,339.80","$59,475.47"
IAH - BUF,56093103096,I-PVD-BUF-3,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/56093103096,https://www.airlines-manager.com/aircraft/show/107467128,4:00,10:59,310,"$454,004.00","$415,337.00","$1,339.80","$59,475.47"
IAH - BUF,56112079302,I-PVD-BUF-2,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/56112079302,https://www.airlines-manager.com/aircraft/show/107467129,13:00,19:59,310,"$454,004.00","$415,337.00","$1,339.80","$59,475.47"
IAH - BUF,56122311500,I-PVD-BUF-5 B,A319-100,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/56122311500,https://www.airlines-manager.com/aircraft/show/110582843,17:00,23:59,198,"$342,604.00","$311,616.00","$1,573.82","$44,622.82"
IAH - BUF,56128543961,I-PVD-BUF-1,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/56128543961,https://www.airlines-manager.com/aircraft/show/107467130,21:15,4:14,310,"$454,004.00","$415,337.00","$1,339.80","$59,475.47"
IAH - BUR,56084270722,I-YEG-BUR-4,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/56084270722,https://www.airlines-manager.com/aircraft/show/117273341,2:30,9:59,310,"$469,559.00","$430,890.00","$1,389.97","$57,579.96"
IAH - BUR,56093103000,I-YEG-BUR-3,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/56093103000,https://www.airlines-manager.com/aircraft/show/117273342,3:15,10:44,310,"$469,559.00","$430,890.00","$1,389.97","$57,579.96"
IAH - BUR,56107731559,I-YEG-BUR-5,A321neo,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/56107731559,https://www.airlines-manager.com/aircraft/show/117273340,11:00,18:29,338,"$508,813.00","$471,862.00","$1,396.04","$63,055.06"
IAH - BUR,56122311614,I-YEG-BUR-2,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/56122311614,https://www.airlines-manager.com/aircraft/show/117273343,18:00,1:29,310,"$469,559.00","$430,890.00","$1,389.97","$57,579.96"
IAH - BUR,56128543776,I-YEG-BUR-1,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/56128543776,https://www.airlines-manager.com/aircraft/show/117273344,20:15,3:44,294,"$455,186.00","$417,119.00","$1,418.77","$55,739.73"
IAH - BWI,56084270431,I-BWI-PHL-3,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/56084270431,https://www.airlines-manager.com/aircraft/show/106007215,0:15,6:59,338,"$470,491.00","$429,120.00","$1,269.59","$63,730.69"
IAH - BWI,56107731555,I-BWI-PHL-2,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/56107731555,https://www.airlines-manager.com/aircraft/show/106007214,11:00,17:44,338,"$470,491.00","$429,120.00","$1,269.59","$63,730.69"
IAH - BWI,56115475572,I-BWI-PHL-1,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/56115475572,https://www.airlines-manager.com/aircraft/show/106007213,13:45,20:29,338,"$470,491.00","$429,120.00","$1,269.59","$63,730.69"
IAH - BWI,56115475573,I-BWI-PHL-5,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/56115475573,https://www.airlines-manager.com/aircraft/show/106007217,14:45,21:29,338,"$470,491.00","$429,120.00","$1,269.59","$63,730.69"
IAH - BWI,56128543838,I-BWI-PHL-4,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/56128543838,https://www.airlines-manager.com/aircraft/show/106007216,21:00,3:44,338,"$470,491.00","$429,120.00","$1,269.59","$63,730.69"
IAH - BZN,56084270481,I-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/56084270481,https://www.airlines-manager.com/aircraft/show/117273392,0:30,7:59,320,"$475,071.00","$431,309.00","$1,347.84","$57,635.95"
IAH - BZN,56084270482,I-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/56084270482,https://www.airlines-manager.com/aircraft/show/117273389,2:30,9:59,320,"$475,071.00","$431,309.00","$1,347.84","$57,635.95"
IAH - BZN,56107731604,I-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/56107731604,https://www.airlines-manager.com/aircraft/show/117273391,11:00,18:29,320,"$475,071.00","$431,309.00","$1,347.84","$57,635.95"
IAH - BZN,56125474050,I-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/56125474050,https://www.airlines-manager.com/aircraft/show/117273390,19:15,2:44,320,"$475,071.00","$431,309.00","$1,347.84","$57,635.95"
IAH - CAK,56084270756,I-BTV-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/56084270756,https://www.airlines-manager.com/aircraft/show/113994196,3:00,9:14,310,"$393,368.00","$358,933.00","$1,157.85","$57,582.83"
IAH - CAK,56103538556,I-BTV-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/56103538556,https://www.airlines-manager.com/aircraft/show/86385103,8:15,14:29,310,"$393,368.00","$358,933.00","$1,157.85","$57,582.83"
IAH - CAK,56112079317,I-BTV-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/56112079317,https://www.airlines-manager.com/aircraft/show/82543907,13:00,19:14,112,"$185,783.00","$163,229.00","$1,457.40","$26,186.47"
IAH - CAK,56118925546,I-BTV-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/56118925546,https://www.airlines-manager.com/aircraft/show/114373409,16:00,22:14,310,"$393,368.00","$358,933.00","$1,157.85","$57,582.83"
IAH - CAK,56131084856,I-BTV-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/56131084856,https://www.airlines-manager.com/aircraft/show/114373410,22:15,4:29,295,"$382,045.00","$348,056.00","$1,179.85","$55,837.86"
IAH - CHS,56084270635,I-RIC-SDF-5,ERJ-175,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/56084270635,https://www.airlines-manager.com/aircraft/show/107467211,1:30,7:14,112,"$170,218.00","$149,061.00","$1,330.90","$25,999.01"
IAH - CHS,56093103033,I-RIC-SDF-4,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/56093103033,https://www.airlines-manager.com/aircraft/show/107467131,3:30,9:14,310,"$359,135.00","$326,559.00","$1,053.42","$56,957.97"
IAH - CHS,56112079166,I-RIC-SDF-3,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/56112079166,https://www.airlines-manager.com/aircraft/show/107467132,12:00,17:44,310,"$359,135.00","$326,559.00","$1,053.42","$56,957.97"
IAH - CHS,56122311515,I-RIC-SDF-2,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/56122311515,https://www.airlines-manager.com/aircraft/show/107467133,17:15,22:59,310,"$359,135.00","$326,559.00","$1,053.42","$56,957.97"
IAH - CHS,56133285083,I-RIC-SDF-1,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/56133285083,https://www.airlines-manager.com/aircraft/show/107467134,23:45,5:29,310,"$359,135.00","$326,559.00","$1,053.42","$56,957.97"
IAH - CID,56107731605,I-EUG-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/56107731605,https://www.airlines-manager.com/aircraft/show/119525218,11:00,16:29,320,"$342,285.00","$307,102.00",$959.69,"$56,006.44"
IAH - CID,56112079269,I-EUG-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/56112079269,https://www.airlines-manager.com/aircraft/show/119525217,13:00,18:29,320,"$342,285.00","$307,102.00",$959.69,"$56,006.44"
IAH - CID,56125474099,I-EUG-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/56125474099,https://www.airlines-manager.com/aircraft/show/119525219,19:45,1:14,320,"$342,285.00","$307,102.00",$959.69,"$56,006.44"
IAH - CID,56131084801,I-EUG-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/56131084801,https://www.airlines-manager.com/aircraft/show/119525220,21:45,3:14,303,"$331,305.00","$296,509.00",$978.58,"$54,074.59"
IAH - CLE,56084270684,I-CLE-STL-3,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/56084270684,https://www.airlines-manager.com/aircraft/show/103600702,2:00,8:14,310,"$401,042.00","$364,331.00","$1,175.26","$58,448.82"
IAH - CLE,56099991655,I-CLE-STL-2,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/56099991655,https://www.airlines-manager.com/aircraft/show/103600701,7:45,13:59,310,"$401,042.00","$364,331.00","$1,175.26","$58,448.82"
IAH - CLE,56115475632,I-CLE-STL-1,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/56115475632,https://www.airlines-manager.com/aircraft/show/103600700,14:00,20:14,310,"$401,042.00","$364,331.00","$1,175.26","$58,448.82"
IAH - CLE,56118925477,I-CLE-STL-5 B,A319-100,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/56118925477,https://www.airlines-manager.com/aircraft/show/110582844,15:30,21:44,198,"$302,827.00","$273,411.00","$1,380.86","$43,862.73"
IAH - CLE,56125474027,I-CLE-STL-4,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/56125474027,https://www.airlines-manager.com/aircraft/show/88725601,19:00,1:14,310,"$401,042.00","$364,331.00","$1,175.26","$58,448.82"
IAH - CLT,56093103062,I-SLC-CLT-3,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/56093103062,https://www.airlines-manager.com/aircraft/show/93094697,3:45,9:29,310,"$361,710.00","$319,410.00","$1,030.35","$55,711.05"
IAH - CLT,56103828486,I-SLC-CLT-2,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/56103828486,https://www.airlines-manager.com/aircraft/show/93094698,10:00,15:44,310,"$361,710.00","$319,410.00","$1,030.35","$55,711.05"
IAH - CLT,56112079186,I-SLC-CLT-6,ERJ-175,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/56112079186,https://www.airlines-manager.com/aircraft/show/93100455,12:00,17:44,112,"$171,081.00","$144,110.00","$1,286.70","$25,135.47"
IAH - CLT,56118925599,I-SLC-CLT-1,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/56118925599,https://www.airlines-manager.com/aircraft/show/93094699,16:45,22:29,310,"$361,710.00","$319,410.00","$1,030.35","$55,711.05"
IAH - CLT,56125473992,I-SLC-CLT-5,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/56125473992,https://www.airlines-manager.com/aircraft/show/93094695,18:45,0:29,310,"$361,710.00","$319,410.00","$1,030.35","$55,711.05"
IAH - CLT,56131084816,I-SLC-CLT-4,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/56131084816,https://www.airlines-manager.com/aircraft/show/93094696,22:00,3:44,310,"$361,710.00","$319,410.00","$1,030.35","$55,711.05"
IAH - CMH,56099991611,I-RNO-MCI-1,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/56099991611,https://www.airlines-manager.com/aircraft/show/103882355,7:00,12:59,310,"$379,267.00","$344,000.00","$1,109.68","$57,493.04"
IAH - CMH,56107731625,I-RNO-MCI-4,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/56107731625,https://www.airlines-manager.com/aircraft/show/103882358,11:00,16:59,310,"$379,267.00","$344,000.00","$1,109.68","$57,493.04"
IAH - CMH,56112079188,I-RNO-MCI-5,ERJ-175,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/56112079188,https://www.airlines-manager.com/aircraft/show/105099861,12:00,17:59,112,"$179,105.00","$156,225.00","$1,394.87","$26,110.03"
IAH - CMH,56125474058,I-RNO-MCI-3,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/56125474058,https://www.airlines-manager.com/aircraft/show/103882357,19:15,1:14,310,"$379,267.00","$344,000.00","$1,109.68","$57,493.04"
IAH - CMH,56131084932,I-RNO-MCI-2,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/56131084932,https://www.airlines-manager.com/aircraft/show/103882356,23:00,4:59,310,"$379,267.00","$344,000.00","$1,109.68","$57,493.04"
IAH - COS,56084270658,I-RNO-MCI-1,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/56084270658,https://www.airlines-manager.com/aircraft/show/103882355,1:45,6:59,310,"$331,840.00","$298,925.00",$964.27,"$57,119.43"
IAH - COS,56096590127,I-RNO-MCI-4,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/56096590127,https://www.airlines-manager.com/aircraft/show/103882358,5:45,10:59,310,"$331,840.00","$298,925.00",$964.27,"$57,119.43"
IAH - COS,56115475635,I-RNO-MCI-3,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/56115475635,https://www.airlines-manager.com/aircraft/show/103882357,14:00,19:14,310,"$331,840.00","$298,925.00",$964.27,"$57,119.43"
IAH - COS,56122311561,I-RNO-MCI-2,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/56122311561,https://www.airlines-manager.com/aircraft/show/103882356,17:45,22:59,310,"$331,840.00","$298,925.00",$964.27,"$57,119.43"
IAH - COS,56131084922,I-RNO-MCI-5,ERJ-175,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/56131084922,https://www.airlines-manager.com/aircraft/show/105099861,22:45,3:59,112,"$157,707.00","$136,546.00","$1,219.16","$26,091.59"
IAH - CUN,56084270531,I-56A-4 E,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/56084270531,https://www.airlines-manager.com/aircraft/show/106676235,1:00,5:59,648,"$626,023.00","$572,914.00",$884.13,"$114,966.02"
IAH - CUN,56112079198,I-56A-5 E,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/56112079198,https://www.airlines-manager.com/aircraft/show/106676236,12:30,17:29,648,"$626,023.00","$572,914.00",$884.13,"$114,966.02"
IAH - CUN,56128543794,I-56A-7 E,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/56128543794,https://www.airlines-manager.com/aircraft/show/106676238,20:30,1:29,648,"$626,023.00","$572,914.00",$884.13,"$114,966.02"
IAH - CVG,56084270443,I-SMF-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/56084270443,https://www.airlines-manager.com/aircraft/show/99093332,0:15,5:44,320,"$350,135.00","$309,434.00",$966.98,"$56,431.73"
IAH - CVG,56093103084,I-SMF-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/56093103084,https://www.airlines-manager.com/aircraft/show/99093333,4:00,9:29,320,"$350,135.00","$309,434.00",$966.98,"$56,431.73"
IAH - CVG,56099991669,I-SMF-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/56099991669,https://www.airlines-manager.com/aircraft/show/99093334,8:00,13:29,320,"$350,135.00","$309,434.00",$966.98,"$56,431.73"
IAH - CVG,56115475602,I-SMF-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/56115475602,https://www.airlines-manager.com/aircraft/show/99093335,14:00,19:29,320,"$350,135.00","$309,434.00",$966.98,"$56,431.73"
IAH - CVG,56118925551,I-SMF-CVG-5 B,A319-100,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/56118925551,https://www.airlines-manager.com/aircraft/show/106499070,16:00,21:29,198,"$265,556.00","$237,029.00","$1,197.12","$43,227.17"
IAH - DAB,56084270598,I-ILM-SRQ-4,A321-200,https://www.airlines-manager.com/network/showline/50666457,https://www.airlines-manager.com/network/showflight/56084270598,https://www.airlines-manager.com/aircraft/show/120452415,1:15,6:44,310,"$344,468.00","$312,587.00","$1,008.35","$57,006.75"
IAH - DAB,56103538630,I-ILM-SRQ-3,A321-200,https://www.airlines-manager.com/network/showline/50666457,https://www.airlines-manager.com/network/showflight/56103538630,https://www.airlines-manager.com/aircraft/show/120452416,9:00,14:29,310,"$344,468.00","$312,587.00","$1,008.35","$57,006.75"
IAH - DAB,56115475688,I-ILM-SRQ-2,A321-200,https://www.airlines-manager.com/network/showline/50666457,https://www.airlines-manager.com/network/showflight/56115475688,https://www.airlines-manager.com/aircraft/show/120452417,14:15,19:44,310,"$344,468.00","$312,587.00","$1,008.35","$57,006.75"
IAH - DAB,56125474083,I-ILM-SRQ-1,A321-200,https://www.airlines-manager.com/network/showline/50666457,https://www.airlines-manager.com/network/showflight/56125474083,https://www.airlines-manager.com/aircraft/show/120452418,19:30,0:59,279,"$324,274.00","$293,123.00","$1,050.62","$53,457.08"
IAH - DEN,56112079117,I-SEA-DEN-5,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/56112079117,https://www.airlines-manager.com/aircraft/show/105562975,12:00,17:29,338,"$378,458.00","$325,224.00",$962.20,"$59,311.37"
IAH - DEN,56112079118,I-SEA-DEN-1,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/56112079118,https://www.airlines-manager.com/aircraft/show/105562971,13:00,18:29,338,"$378,458.00","$325,224.00",$962.20,"$59,311.37"
IAH - DEN,56115475672,I-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/56115475672,https://www.airlines-manager.com/aircraft/show/120293379,14:00,19:29,0,"$97,604.00","$23,471.00",#DIV/0!,"$4,280.43"
IAH - DEN,56131084867,I-SEA-DEN-2,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/56131084867,https://www.airlines-manager.com/aircraft/show/105562972,22:30,3:59,338,"$378,458.00","$325,224.00",$962.20,"$59,311.37"
IAH - DEN,56131084868,I-SEA-DEN-3,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/56131084868,https://www.airlines-manager.com/aircraft/show/105562973,23:00,4:29,338,"$378,458.00","$325,224.00",$962.20,"$59,311.37"
IAH - DEN,56133285042,I-SEA-DEN-4,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/56133285042,https://www.airlines-manager.com/aircraft/show/105562974,23:30,4:59,338,"$378,458.00","$325,224.00",$962.20,"$59,311.37"
IAH - DFW,56084270547,I-SMF-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/56084270547,https://www.airlines-manager.com/aircraft/show/99093333,1:00,3:59,320,"$129,311.00","$81,717.00",$255.37,"$27,391.17"
IAH - DFW,56093103183,I-SMF-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/56093103183,https://www.airlines-manager.com/aircraft/show/99093334,5:00,7:59,320,"$129,311.00","$81,717.00",$255.37,"$27,391.17"
IAH - DFW,56107731587,I-SMF-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/56107731587,https://www.airlines-manager.com/aircraft/show/99093335,11:00,13:59,320,"$129,311.00","$81,717.00",$255.37,"$27,391.17"
IAH - DFW,56112079314,I-SMF-CVG-5 B,A319-100,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/56112079314,https://www.airlines-manager.com/aircraft/show/106499070,13:00,15:59,198,"$97,620.00","$65,532.00",$330.97,"$21,966.03"
IAH - DFW,56115475687,I-YEG-BUR-4,A321-200,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/56115475687,https://www.airlines-manager.com/aircraft/show/117273341,14:15,17:14,310,"$130,762.00","$90,664.00",$292.46,"$30,390.17"
IAH - DFW,56128543954,I-SMF-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/56128543954,https://www.airlines-manager.com/aircraft/show/99093332,21:15,0:14,320,"$129,311.00","$81,717.00",$255.37,"$27,391.17"
IAH - DSM,56093102989,I-FAT-SAV-1,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/56093102989,https://www.airlines-manager.com/aircraft/show/110424761,3:15,8:29,320,"$333,281.00","$298,351.00",$932.35,"$57,009.75"
IAH - DSM,56103538604,I-FAT-SAV-4,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/56103538604,https://www.airlines-manager.com/aircraft/show/110424758,8:45,13:59,320,"$333,281.00","$298,351.00",$932.35,"$57,009.75"
IAH - DSM,56115475612,I-FAT-SAV-3,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/56115475612,https://www.airlines-manager.com/aircraft/show/110424759,14:00,19:14,320,"$333,281.00","$298,351.00",$932.35,"$57,009.75"
IAH - DSM,56125473954,I-FAT-SAV-2,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/56125473954,https://www.airlines-manager.com/aircraft/show/110424760,18:30,23:44,320,"$333,281.00","$298,351.00",$932.35,"$57,009.75"
IAH - DTW,56084270487,I-MIA-ORD-1,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/56084270487,https://www.airlines-manager.com/aircraft/show/90183184,0:30,6:44,310,"$395,838.00","$351,081.00","$1,132.52","$56,323.16"
IAH - DTW,56084270488,I-MIA-ORD-5,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/56084270488,https://www.airlines-manager.com/aircraft/show/90183180,2:30,8:44,310,"$395,838.00","$351,081.00","$1,132.52","$56,323.16"
IAH - DTW,56096590147,I-MIA-ORD-4,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/56096590147,https://www.airlines-manager.com/aircraft/show/90183181,6:00,12:14,310,"$395,838.00","$351,081.00","$1,132.52","$56,323.16"
IAH - DTW,56112079280,I-MIA-ORD-3,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/56112079280,https://www.airlines-manager.com/aircraft/show/90183182,13:00,19:14,310,"$395,838.00","$351,081.00","$1,132.52","$56,323.16"
IAH - DTW,56125473989,I-MIA-ORD-2,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/56125473989,https://www.airlines-manager.com/aircraft/show/90183183,18:45,0:59,310,"$395,838.00","$351,081.00","$1,132.52","$56,323.16"
IAH - DTW,56128543834,I-MIA-ORD-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/56128543834,https://www.airlines-manager.com/aircraft/show/90140936,20:45,2:59,136,"$188,161.00","$159,615.00","$1,173.64","$25,606.68"
IAH - ECP,56084270565,I-ILM-SRQ-1,A321-200,https://www.airlines-manager.com/network/showline/50666459,https://www.airlines-manager.com/network/showflight/56084270565,https://www.airlines-manager.com/aircraft/show/120452418,1:00,5:14,310,"$272,555.00","$244,634.00",$789.14,"$57,787.56"
IAH - ECP,56103538653,I-ILM-SRQ-4,A321-200,https://www.airlines-manager.com/network/showline/50666459,https://www.airlines-manager.com/network/showflight/56103538653,https://www.airlines-manager.com/aircraft/show/120452415,9:30,13:44,310,"$272,555.00","$244,634.00",$789.14,"$57,787.56"
IAH - ECP,56115475701,I-ILM-SRQ-3,A321-200,https://www.airlines-manager.com/network/showline/50666459,https://www.airlines-manager.com/network/showflight/56115475701,https://www.airlines-manager.com/aircraft/show/120452416,14:30,18:44,310,"$272,555.00","$244,634.00",$789.14,"$57,787.56"
IAH - ECP,56125474109,I-ILM-SRQ-2,A321-200,https://www.airlines-manager.com/network/showline/50666459,https://www.airlines-manager.com/network/showflight/56125474109,https://www.airlines-manager.com/aircraft/show/120452417,19:45,23:59,310,"$272,555.00","$244,634.00",$789.14,"$57,787.56"
IAH - ELP,56093103032,I-PBI-RSW-3,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/56093103032,https://www.airlines-manager.com/aircraft/show/104717245,3:30,8:14,310,"$300,686.00","$270,329.00",$872.03,"$57,111.76"
IAH - ELP,56107731629,I-PBI-RSW-2,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/56107731629,https://www.airlines-manager.com/aircraft/show/104717246,11:00,15:44,310,"$300,686.00","$270,329.00",$872.03,"$57,111.76"
IAH - ELP,56118925600,I-PBI-RSW-1,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/56118925600,https://www.airlines-manager.com/aircraft/show/104717247,16:45,21:29,310,"$300,686.00","$270,329.00",$872.03,"$57,111.76"
IAH - ELP,56125474041,I-PBI-RSW-5,ERJ-175,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/56125474041,https://www.airlines-manager.com/aircraft/show/104743902,19:00,23:44,112,"$143,217.00","$123,840.00","$1,105.71","$26,163.38"
IAH - ELP,56131084820,I-PBI-RSW-4,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/56131084820,https://www.airlines-manager.com/aircraft/show/104717244,22:00,2:44,310,"$300,686.00","$270,329.00",$872.03,"$57,111.76"
IAH - EUG,56084270582,I-EUG-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/56084270582,https://www.airlines-manager.com/aircraft/show/119525219,1:15,10:14,320,"$571,197.00","$521,465.00","$1,629.58","$58,048.05"
IAH - EUG,56093102992,I-EUG-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/56093102992,https://www.airlines-manager.com/aircraft/show/119525220,3:15,12:14,320,"$571,197.00","$521,465.00","$1,629.58","$58,048.05"
IAH - EUG,56107731659,I-EUG-MFR-5,ERJ-175,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/56107731659,https://www.airlines-manager.com/aircraft/show/119525248,11:00,20:14,112,"$269,366.00","$239,235.00","$2,136.03","$25,909.93"
IAH - EUG,56118925580,I-EUG-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/56118925580,https://www.airlines-manager.com/aircraft/show/119525218,16:30,1:29,320,"$571,197.00","$521,465.00","$1,629.58","$58,048.05"
IAH - EUG,56125473956,I-EUG-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/56125473956,https://www.airlines-manager.com/aircraft/show/119525217,18:30,3:29,320,"$571,197.00","$521,465.00","$1,629.58","$58,048.05"
IAH - EZE,56093103101,I-84A-2 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/56093103101,https://www.airlines-manager.com/aircraft/show/89439130,4:00,0:29,932,"$3,382,163.00","$3,084,901.00","$3,309.98","$150,605.42"
IAH - EZE,56096590115,I-84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/56096590115,https://www.airlines-manager.com/aircraft/show/89124075,5:30,1:59,932,"$3,382,163.00","$3,084,901.00","$3,309.98","$150,605.42"
IAH - FAR,56084270616,I-MSO-FAR-4,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/56084270616,https://www.airlines-manager.com/aircraft/show/110424754,1:30,8:14,320,"$419,119.00","$378,672.00","$1,183.35","$56,238.42"
IAH - FAR,56093103121,I-MSO-FAR-3,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/56093103121,https://www.airlines-manager.com/aircraft/show/110424755,4:15,10:59,320,"$419,119.00","$378,672.00","$1,183.35","$56,238.42"
IAH - FAR,56112079139,I-MSO-FAR-2,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/56112079139,https://www.airlines-manager.com/aircraft/show/110424756,12:00,18:44,320,"$419,119.00","$378,672.00","$1,183.35","$56,238.42"
IAH - FAR,56131084813,I-MSO-FAR-1,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/56131084813,https://www.airlines-manager.com/aircraft/show/110424757,22:00,4:44,320,"$419,119.00","$378,672.00","$1,183.35","$56,238.42"
IAH - FAT,56093103087,I-FAT-SAV-2,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/56093103087,https://www.airlines-manager.com/aircraft/show/110424760,4:00,11:44,320,"$499,203.00","$453,750.00","$1,417.97","$58,674.57"
IAH - FAT,56115475613,I-FAT-SAV-1,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/56115475613,https://www.airlines-manager.com/aircraft/show/110424761,14:00,21:44,320,"$499,203.00","$453,750.00","$1,417.97","$58,674.57"
IAH - FAT,56122311659,I-FAT-SAV-4,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/56122311659,https://www.airlines-manager.com/aircraft/show/110424758,18:15,1:59,320,"$499,203.00","$453,750.00","$1,417.97","$58,674.57"
IAH - FAT,56133285048,I-FAT-SAV-3,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/56133285048,https://www.airlines-manager.com/aircraft/show/110424759,23:30,7:14,320,"$499,203.00","$453,750.00","$1,417.97","$58,674.57"
IAH - FCA,56084270648,I-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/56084270648,https://www.airlines-manager.com/aircraft/show/117273391,1:45,9:59,320,"$523,626.00","$476,436.00","$1,488.86","$57,866.72"
IAH - FCA,56107731603,I-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/56107731603,https://www.airlines-manager.com/aircraft/show/117273390,11:00,19:14,320,"$523,626.00","$476,436.00","$1,488.86","$57,866.72"
IAH - FCA,56118925566,I-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/56118925566,https://www.airlines-manager.com/aircraft/show/117273392,16:15,0:29,320,"$523,626.00","$476,436.00","$1,488.86","$57,866.72"
IAH - FCA,56122311660,I-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/56122311660,https://www.airlines-manager.com/aircraft/show/117273389,18:15,2:29,309,"$512,558.00","$465,845.00","$1,507.59","$56,580.36"
IAH - FLL,56084270489,I-SLC-CLT-5,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/56084270489,https://www.airlines-manager.com/aircraft/show/93094695,0:30,6:14,310,"$368,422.00","$331,194.00","$1,068.37","$57,766.40"
IAH - FLL,56093103061,I-SLC-CLT-4,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/56093103061,https://www.airlines-manager.com/aircraft/show/93094696,3:45,9:29,310,"$368,422.00","$331,194.00","$1,068.37","$57,766.40"
IAH - FLL,56103828485,I-SLC-CLT-3,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/56103828485,https://www.airlines-manager.com/aircraft/show/93094697,10:00,15:44,310,"$368,422.00","$331,194.00","$1,068.37","$57,766.40"
IAH - FLL,56118925488,I-SLC-CLT-2,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/56118925488,https://www.airlines-manager.com/aircraft/show/93094698,15:45,21:29,310,"$368,422.00","$331,194.00","$1,068.37","$57,766.40"
IAH - FLL,56122311567,I-SLC-CLT-6,ERJ-175,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/56122311567,https://www.airlines-manager.com/aircraft/show/93100455,17:45,23:29,112,"$174,669.00","$150,649.00","$1,345.08","$26,275.99"
IAH - FLL,56131084884,I-SLC-CLT-1,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/56131084884,https://www.airlines-manager.com/aircraft/show/93094699,22:30,4:14,310,"$368,422.00","$331,194.00","$1,068.37","$57,766.40"
IAH - FSD,56093103166,I-MSO-FAR-1,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/56093103166,https://www.airlines-manager.com/aircraft/show/110424757,4:45,10:29,320,"$363,297.00","$326,462.00","$1,020.19","$56,941.05"
IAH - FSD,56103538555,I-MSO-FAR-4,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/56103538555,https://www.airlines-manager.com/aircraft/show/110424754,8:15,13:59,320,"$363,297.00","$326,462.00","$1,020.19","$56,941.05"
IAH - FSD,56107731597,I-MSO-FAR-3,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/56107731597,https://www.airlines-manager.com/aircraft/show/110424755,11:00,16:44,320,"$363,297.00","$326,462.00","$1,020.19","$56,941.05"
IAH - FSD,56125473982,I-MSO-FAR-2,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/56125473982,https://www.airlines-manager.com/aircraft/show/110424756,18:45,0:29,283,"$337,772.00","$301,876.00","$1,066.70","$52,652.79"
IAH - GDL,56093103162,I-YYC-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/56093103162,https://www.airlines-manager.com/aircraft/show/114266977,4:45,9:59,400,"$439,742.00","$397,229.00",$993.07,"$75,903.63"
IAH - GDL,56107731542,I-YYC-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/56107731542,https://www.airlines-manager.com/aircraft/show/114266980,10:45,15:59,400,"$439,742.00","$397,229.00",$993.07,"$75,903.63"
IAH - GDL,56112079127,I-YYC-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/56112079127,https://www.airlines-manager.com/aircraft/show/114266979,12:00,17:14,400,"$439,742.00","$397,229.00",$993.07,"$75,903.63"
IAH - GDL,56125474123,I-YYC-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/56125474123,https://www.airlines-manager.com/aircraft/show/114266978,20:00,1:14,356,"$397,648.00","$356,306.00","$1,000.86","$68,083.95"
IAH - GIG,56084270412,I-84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/56084270412,https://www.airlines-manager.com/aircraft/show/88905140,0:00,20:14,932,"$3,392,936.00","$3,090,291.00","$3,315.76","$152,732.67"
IAH - GIG,56084270413,I-84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/56084270413,https://www.airlines-manager.com/aircraft/show/89124074,2:00,22:14,932,"$3,392,936.00","$3,090,291.00","$3,315.76","$152,732.67"
IAH - GRR,56084270597,I-GRR-MSN-3,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/56084270597,https://www.airlines-manager.com/aircraft/show/117273346,1:15,7:29,310,"$391,082.00","$356,324.00","$1,149.43","$57,164.28"
IAH - GRR,56099991626,I-GRR-MSN-2,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/56099991626,https://www.airlines-manager.com/aircraft/show/117273347,7:15,13:29,310,"$391,082.00","$356,324.00","$1,149.43","$57,164.28"
IAH - GRR,56115475661,I-GRR-MSN-1,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/56115475661,https://www.airlines-manager.com/aircraft/show/117273348,14:00,20:14,310,"$391,082.00","$356,324.00","$1,149.43","$57,164.28"
IAH - GRR,56118925549,I-GRR-MSN-4,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/56118925549,https://www.airlines-manager.com/aircraft/show/117273345,16:00,22:14,310,"$391,082.00","$356,324.00","$1,149.43","$57,164.28"
IAH - GRU,56084270532,I-56A-7 E,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/56084270532,https://www.airlines-manager.com/aircraft/show/106676238,1:00,20:29,648,"$2,489,104.00","$2,319,462.00","$3,579.42","$119,048.52"
IAH - GRU,56107731562,I-56A-2 E,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/56107731562,https://www.airlines-manager.com/aircraft/show/106676233,11:00,6:29,648,"$2,489,104.00","$2,319,462.00","$3,579.42","$119,048.52"
IAH - GRU,56122311455,I-56A-4 E,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/56122311455,https://www.airlines-manager.com/aircraft/show/106676235,17:00,12:29,648,"$2,489,104.00","$2,319,462.00","$3,579.42","$119,048.52"
IAH - GSO,56084270652,I-SYR-ROC-1,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/56084270652,https://www.airlines-manager.com/aircraft/show/119525224,1:45,7:44,320,"$375,703.00","$337,351.00","$1,054.22","$56,381.78"
IAH - GSO,56084270653,I-SYR-ROC-4,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/56084270653,https://www.airlines-manager.com/aircraft/show/119525221,2:45,8:44,320,"$375,703.00","$337,351.00","$1,054.22","$56,381.78"
IAH - GSO,56107731607,I-SYR-ROC-3,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/56107731607,https://www.airlines-manager.com/aircraft/show/119525222,11:00,16:59,320,"$375,703.00","$337,351.00","$1,054.22","$56,381.78"
IAH - GSO,56122311661,I-SYR-ROC-2,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/56122311661,https://www.airlines-manager.com/aircraft/show/119525223,18:15,0:14,320,"$375,703.00","$337,351.00","$1,054.22","$56,381.78"
IAH - IAD,56093103044,I-IAD-SAN-6,ERJ-175,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/56093103044,https://www.airlines-manager.com/aircraft/show/105400635,3:30,10:14,112,"$199,547.00","$171,293.00","$1,529.40","$25,439.55"
IAH - IAD,56099991582,I-IAD-SAN-2,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/56099991582,https://www.airlines-manager.com/aircraft/show/98578923,6:45,13:29,320,"$423,598.00","$374,014.00","$1,168.79","$55,546.63"
IAH - IAD,56103828418,I-IAD-SAN-5,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/56103828418,https://www.airlines-manager.com/aircraft/show/98578920,9:45,16:29,320,"$423,598.00","$374,014.00","$1,168.79","$55,546.63"
IAH - IAD,56112079247,I-IAD-SAN-1,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/56112079247,https://www.airlines-manager.com/aircraft/show/98578924,13:00,19:44,320,"$423,598.00","$374,014.00","$1,168.79","$55,546.63"
IAH - IAD,56122311581,I-IAD-SAN-4,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/56122311581,https://www.airlines-manager.com/aircraft/show/98578921,18:00,0:44,320,"$423,598.00","$374,014.00","$1,168.79","$55,546.63"
IAH - IAD,56128543975,I-IAD-SAN-3,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/56128543975,https://www.airlines-manager.com/aircraft/show/98578922,21:30,4:14,320,"$423,598.00","$374,014.00","$1,168.79","$55,546.63"
IAH - ICT,56103828420,I-FAT-SAV-1,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/56103828420,https://www.airlines-manager.com/aircraft/show/110424761,9:45,13:59,320,"$250,907.00","$219,323.00",$685.38,"$51,808.58"
IAH - ICT,56115475611,I-FAT-SAV-4,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/56115475611,https://www.airlines-manager.com/aircraft/show/110424758,14:00,18:14,320,"$250,907.00","$219,323.00",$685.38,"$51,808.58"
IAH - ICT,56125474049,I-FAT-SAV-3,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/56125474049,https://www.airlines-manager.com/aircraft/show/110424759,19:15,23:29,320,"$250,907.00","$219,323.00",$685.38,"$51,808.58"
IAH - ICT,56133285074,I-FAT-SAV-2,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/56133285074,https://www.airlines-manager.com/aircraft/show/110424760,23:45,3:59,318,"$249,962.00","$218,407.00",$686.81,"$51,592.20"
IAH - ILM,56084270402,I-ILM-SRQ-2,A321-200,https://www.airlines-manager.com/network/showline/50666455,https://www.airlines-manager.com/network/showflight/56084270402,https://www.airlines-manager.com/aircraft/show/120452417,0:00,6:14,310,"$394,081.00","$360,168.00","$1,161.83","$57,780.96"
IAH - ILM,56099991681,I-ILM-SRQ-1,A321-200,https://www.airlines-manager.com/network/showline/50666455,https://www.airlines-manager.com/network/showflight/56099991681,https://www.airlines-manager.com/aircraft/show/120452418,8:00,14:14,310,"$394,081.00","$360,168.00","$1,161.83","$57,780.96"
IAH - ILM,56115475579,I-ILM-SRQ-4,A321-200,https://www.airlines-manager.com/network/showline/50666455,https://www.airlines-manager.com/network/showflight/56115475579,https://www.airlines-manager.com/aircraft/show/120452415,13:45,19:59,310,"$394,081.00","$360,168.00","$1,161.83","$57,780.96"
IAH - ILM,56125474003,I-ILM-SRQ-3,A321-200,https://www.airlines-manager.com/network/showline/50666455,https://www.airlines-manager.com/network/showflight/56125474003,https://www.airlines-manager.com/aircraft/show/120452416,18:45,0:59,310,"$394,081.00","$360,168.00","$1,161.83","$57,780.96"
IAH - IND,56084270395,I-PIT-RDU-1,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/56084270395,https://www.airlines-manager.com/aircraft/show/100684074,0:00,5:29,310,"$344,386.00","$310,520.00","$1,001.68","$56,629.79"
IAH - IND,56093103172,I-PIT-RDU-5 B,A319-100,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/56093103172,https://www.airlines-manager.com/aircraft/show/110582845,4:45,10:14,198,"$261,047.00","$233,918.00","$1,181.40","$42,659.82"
IAH - IND,56096590149,I-PIT-RDU-4,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/56096590149,https://www.airlines-manager.com/aircraft/show/100684071,6:00,11:29,310,"$344,386.00","$310,520.00","$1,001.68","$56,629.79"
IAH - IND,56107731668,I-PIT-RDU-3,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/56107731668,https://www.airlines-manager.com/aircraft/show/100684072,11:30,16:59,310,"$344,386.00","$310,520.00","$1,001.68","$56,629.79"
IAH - IND,56122311559,I-PIT-RDU-2,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/56122311559,https://www.airlines-manager.com/aircraft/show/100684073,17:45,23:14,310,"$344,386.00","$310,520.00","$1,001.68","$56,629.79"
IAH - JAC,56084270672,I-SNA-SBA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/56084270672,https://www.airlines-manager.com/aircraft/show/119525225,2:00,8:59,272,"$397,922.00","$370,446.00","$1,361.93","$53,047.16"
IAH - JAC,56107731550,I-SNA-SBA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/56107731550,https://www.airlines-manager.com/aircraft/show/119525227,11:00,17:59,272,"$397,922.00","$370,446.00","$1,361.93","$53,047.16"
IAH - JAC,56112079211,I-SNA-SBA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/56112079211,https://www.airlines-manager.com/aircraft/show/119525228,13:00,19:59,272,"$397,922.00","$370,446.00","$1,361.93","$53,047.16"
IAH - JAC,56125473973,I-SNA-SBA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/56125473973,https://www.airlines-manager.com/aircraft/show/119525226,18:45,1:44,272,"$397,922.00","$370,446.00","$1,361.93","$53,047.16"
IAH - JAC,56128543811,I-SNA-SBA-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/56128543811,https://www.airlines-manager.com/aircraft/show/119525229,20:45,3:44,272,"$397,922.00","$370,446.00","$1,361.93","$53,047.16"
IAH - JAN,56084270479,I-MSO-FAR-2,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/56084270479,https://www.airlines-manager.com/aircraft/show/110424756,0:30,3:59,320,"$177,596.00","$150,145.00",$469.20,"$43,103.83"
IAH - JAN,56107731535,I-MSO-FAR-1,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/56107731535,https://www.airlines-manager.com/aircraft/show/110424757,10:30,13:59,320,"$177,596.00","$150,145.00",$469.20,"$43,103.83"
IAH - JAN,56115475609,I-MSO-FAR-4,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/56115475609,https://www.airlines-manager.com/aircraft/show/110424754,14:00,17:29,320,"$177,596.00","$150,145.00",$469.20,"$43,103.83"
IAH - JAN,56118925596,I-MSO-FAR-3,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/56118925596,https://www.airlines-manager.com/aircraft/show/110424755,16:45,20:14,309,"$173,894.00","$146,547.00",$474.26,"$42,070.91"
IAH - JAX,56084270755,I-PBI-RSW-1,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/56084270755,https://www.airlines-manager.com/aircraft/show/104717247,3:00,8:14,310,"$338,093.00","$305,865.00",$986.66,"$58,445.54"
IAH - JAX,56099991683,I-PBI-RSW-5,ERJ-175,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/56099991683,https://www.airlines-manager.com/aircraft/show/104743902,8:00,13:14,112,"$160,251.00","$139,491.00","$1,245.46","$26,654.33"
IAH - JAX,56107731627,I-PBI-RSW-4,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/56107731627,https://www.airlines-manager.com/aircraft/show/104717244,11:00,16:14,310,"$338,093.00","$305,865.00",$986.66,"$58,445.54"
IAH - JAX,56118925585,I-PBI-RSW-3,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/56118925585,https://www.airlines-manager.com/aircraft/show/104717245,16:30,21:44,310,"$338,093.00","$305,865.00",$986.66,"$58,445.54"
IAH - JAX,56128543960,I-PBI-RSW-2,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/56128543960,https://www.airlines-manager.com/aircraft/show/104717246,21:15,2:29,310,"$338,093.00","$305,865.00",$986.66,"$58,445.54"
IAH - JFK,56084270675,I-JFK-LAX-5,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/56084270675,https://www.airlines-manager.com/aircraft/show/89233038,2:00,9:29,400,"$622,836.00","$549,527.00","$1,373.82","$73,433.45"
IAH - JFK,56107731565,I-JFK-LAX-1,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/56107731565,https://www.airlines-manager.com/aircraft/show/88400798,11:00,18:29,400,"$622,836.00","$549,527.00","$1,373.82","$73,433.45"
IAH - JFK,56122311628,I-JFK-LAX-3,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/56122311628,https://www.airlines-manager.com/aircraft/show/88400800,18:15,1:44,400,"$622,836.00","$549,527.00","$1,373.82","$73,433.45"
IAH - JFK,56125474044,I-JFK-LAX-2,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/56125474044,https://www.airlines-manager.com/aircraft/show/88400799,19:15,2:44,400,"$622,836.00","$549,527.00","$1,373.82","$73,433.45"
IAH - JFK,56128543950,I-JFK-LAX-4,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/56128543950,https://www.airlines-manager.com/aircraft/show/88400801,21:15,4:44,400,"$622,836.00","$549,527.00","$1,373.82","$73,433.45"
IAH - LAS,56093103082,I-LAS-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/56093103082,https://www.airlines-manager.com/aircraft/show/96256511,4:00,10:44,320,"$430,201.00","$368,720.00","$1,152.25","$54,760.40"
IAH - LAS,56093103083,I-LAS-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/56093103083,https://www.airlines-manager.com/aircraft/show/96250652,5:00,11:44,320,"$430,201.00","$368,720.00","$1,152.25","$54,760.40"
IAH - LAS,56096590095,I-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/56096590095,https://www.airlines-manager.com/aircraft/show/96990010,5:15,11:59,112,"$202,299.00","$168,005.00","$1,500.04","$24,951.24"
IAH - LAS,56107731584,I-LAS-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/56107731584,https://www.airlines-manager.com/aircraft/show/96177955,11:00,17:44,320,"$430,201.00","$368,720.00","$1,152.25","$54,760.40"
IAH - LAS,56115475709,I-LAS-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/56115475709,https://www.airlines-manager.com/aircraft/show/95894466,14:45,21:29,320,"$430,201.00","$368,720.00","$1,152.25","$54,760.40"
IAH - LAS,56122311543,I-LAS-ATL-6,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/56122311543,https://www.airlines-manager.com/aircraft/show/82323704,17:30,0:14,112,"$202,299.00","$168,005.00","$1,500.04","$24,951.24"
IAH - LAS,56128543814,I-LAS-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/56128543814,https://www.airlines-manager.com/aircraft/show/96183549,20:45,3:29,320,"$430,201.00","$368,720.00","$1,152.25","$54,760.40"
IAH - LAX,56084270727,I-JFK-LAX-2,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/56084270727,https://www.airlines-manager.com/aircraft/show/88400799,2:45,9:59,400,"$610,729.00","$538,556.00","$1,346.39","$74,454.75"
IAH - LAX,56093103051,I-JFK-LAX-1,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/56093103051,https://www.airlines-manager.com/aircraft/show/88400798,3:45,10:59,400,"$610,729.00","$538,556.00","$1,346.39","$74,454.75"
IAH - LAX,56093103052,I-JFK-LAX-4,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/56093103052,https://www.airlines-manager.com/aircraft/show/88400801,4:45,11:59,400,"$610,729.00","$538,556.00","$1,346.39","$74,454.75"
IAH - LAX,56107731530,I-JFK-LAX-5,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/56107731530,https://www.airlines-manager.com/aircraft/show/89233038,10:30,17:44,400,"$610,729.00","$538,556.00","$1,346.39","$74,454.75"
IAH - LAX,56107731531,I-JFK-LAX-3,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/56107731531,https://www.airlines-manager.com/aircraft/show/88400800,11:00,18:14,400,"$610,729.00","$538,556.00","$1,346.39","$74,454.75"
IAH - LEX,56093103154,I-BTV-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/56093103154,https://www.airlines-manager.com/aircraft/show/114373410,4:30,9:44,310,"$334,781.00","$304,803.00",$983.24,"$58,242.61"
IAH - LEX,56103538642,I-BTV-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/56103538642,https://www.airlines-manager.com/aircraft/show/113994196,9:15,14:29,310,"$334,781.00","$304,803.00",$983.24,"$58,242.61"
IAH - LEX,56115475751,I-BTV-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/56115475751,https://www.airlines-manager.com/aircraft/show/86385103,15:00,20:14,310,"$334,781.00","$304,803.00",$983.24,"$58,242.61"
IAH - LEX,56125474065,I-BTV-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/56125474065,https://www.airlines-manager.com/aircraft/show/82543907,19:15,0:29,112,"$158,973.00","$139,540.00","$1,245.89","$26,663.69"
IAH - LEX,56131084855,I-BTV-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/56131084855,https://www.airlines-manager.com/aircraft/show/114373409,22:15,3:29,266,"$306,722.00","$277,742.00","$1,044.14","$53,071.72"
IAH - LIM,56115475703,I-84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/56115475703,https://www.airlines-manager.com/aircraft/show/89439131,14:30,3:59,932,"$2,260,419.00","$2,060,574.00","$2,210.92","$152,823.78"
IAH - LIM,56133285088,I-84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/56133285088,https://www.airlines-manager.com/aircraft/show/89124074,23:45,13:14,932,"$2,260,419.00","$2,060,574.00","$2,210.92","$152,823.78"
IAH - LIT,56093103063,I-SJC-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/56093103063,https://www.airlines-manager.com/aircraft/show/96692491,3:45,7:14,310,"$189,001.00","$164,995.00",$532.24,"$47,366.99"
IAH - LIT,56107731623,I-SJC-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/56107731623,https://www.airlines-manager.com/aircraft/show/96692343,11:00,14:29,310,"$189,001.00","$164,995.00",$532.24,"$47,366.99"
IAH - LIT,56125474078,I-SJC-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/56125474078,https://www.airlines-manager.com/aircraft/show/96691558,19:30,22:59,310,"$189,001.00","$164,995.00",$532.24,"$47,366.99"
IAH - LIT,56125474079,I-SJC-PWM-5 B,A319-100,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/56125474079,https://www.airlines-manager.com/aircraft/show/106014350,20:00,23:29,198,"$142,596.00","$123,375.00",$623.11,"$35,418.66"
IAH - LIT,56133285055,I-SJC-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/56133285055,https://www.airlines-manager.com/aircraft/show/96694086,23:30,2:59,274,"$176,041.00","$152,404.00",$556.22,"$43,752.34"
IAH - MAF,56093103099,I-MYR-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50555962,https://www.airlines-manager.com/network/showflight/56093103099,https://www.airlines-manager.com/aircraft/show/120452411,4:00,7:44,310,"$203,259.00","$178,181.00",$574.78,"$47,727.05"
IAH - MAF,56103828506,I-MYR-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50555962,https://www.airlines-manager.com/network/showflight/56103828506,https://www.airlines-manager.com/aircraft/show/120452412,10:00,13:44,310,"$203,259.00","$178,181.00",$574.78,"$47,727.05"
IAH - MAF,56115475713,I-MYR-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50555962,https://www.airlines-manager.com/network/showflight/56115475713,https://www.airlines-manager.com/aircraft/show/120452413,14:45,18:29,310,"$203,259.00","$178,181.00",$574.78,"$47,727.05"
IAH - MAF,56125474108,I-MYR-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50555962,https://www.airlines-manager.com/network/showflight/56125474108,https://www.airlines-manager.com/aircraft/show/120452414,19:45,23:29,306,"$201,720.00","$176,689.00",$577.42,"$47,327.41"
IAH - MCI,56084270554,I-RNO-MCI-4,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/56084270554,https://www.airlines-manager.com/aircraft/show/103882358,1:00,5:44,310,"$299,574.00","$268,416.00",$865.86,"$56,707.61"
IAH - MCI,56103538639,I-RNO-MCI-3,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/56103538639,https://www.airlines-manager.com/aircraft/show/103882357,9:15,13:59,310,"$299,574.00","$268,416.00",$865.86,"$56,707.61"
IAH - MCI,56112079297,I-RNO-MCI-2,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/56112079297,https://www.airlines-manager.com/aircraft/show/103882356,13:00,17:44,310,"$299,574.00","$268,416.00",$865.86,"$56,707.61"
IAH - MCI,56122311621,I-RNO-MCI-5,ERJ-175,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/56122311621,https://www.airlines-manager.com/aircraft/show/105099861,18:00,22:44,112,"$141,735.00","$121,915.00","$1,088.53","$25,756.69"
IAH - MCI,56125474086,I-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/56125474086,https://www.airlines-manager.com/aircraft/show/120293379,19:30,23:59,0,"$78,755.00","$36,556.00",$0.00,"$8,153.75"
IAH - MCI,56128543936,I-RNO-MCI-1,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/56128543936,https://www.airlines-manager.com/aircraft/show/103882355,21:00,1:44,310,"$299,574.00","$268,416.00",$865.86,"$56,707.61"
IAH - MCO,56084270550,I-MIA-ORD-2,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/56084270550,https://www.airlines-manager.com/aircraft/show/90183183,1:00,6:29,310,"$346,660.00","$304,266.00",$981.50,"$55,489.24"
IAH - MCO,56084270551,I-MIA-ORD-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/56084270551,https://www.airlines-manager.com/aircraft/show/90140936,3:00,8:29,136,"$165,003.00","$138,225.00","$1,016.36","$25,208.21"
IAH - MCO,56099991587,I-MIA-ORD-1,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/56099991587,https://www.airlines-manager.com/aircraft/show/90183184,6:45,12:14,310,"$346,660.00","$304,266.00",$981.50,"$55,489.24"
IAH - MCO,56103538606,I-MIA-ORD-5,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/56103538606,https://www.airlines-manager.com/aircraft/show/90183180,8:45,14:14,310,"$346,660.00","$304,266.00",$981.50,"$55,489.24"
IAH - MCO,56112079279,I-MIA-ORD-4,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/56112079279,https://www.airlines-manager.com/aircraft/show/90183181,13:00,18:29,310,"$346,660.00","$304,266.00",$981.50,"$55,489.24"
IAH - MCO,56125474053,I-MIA-ORD-3,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/56125474053,https://www.airlines-manager.com/aircraft/show/90183182,19:15,0:44,310,"$346,660.00","$304,266.00",$981.50,"$55,489.24"
IAH - MEM,56096590122,I-SMF-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/56096590122,https://www.airlines-manager.com/aircraft/show/99093332,5:45,9:44,320,"$223,713.00","$190,351.00",$594.85,"$47,786.86"
IAH - MEM,56103538648,I-SMF-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/56103538648,https://www.airlines-manager.com/aircraft/show/99093333,9:30,13:29,320,"$223,713.00","$190,351.00",$594.85,"$47,786.86"
IAH - MEM,56115475601,I-SMF-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/56115475601,https://www.airlines-manager.com/aircraft/show/99093334,14:00,17:59,320,"$223,713.00","$190,351.00",$594.85,"$47,786.86"
IAH - MEM,56125474072,I-SMF-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/56125474072,https://www.airlines-manager.com/aircraft/show/99093335,19:30,23:29,320,"$223,713.00","$190,351.00",$594.85,"$47,786.86"
IAH - MEM,56128543989,I-SMF-CVG-5 B,A319-100,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/56128543989,https://www.airlines-manager.com/aircraft/show/106499070,21:30,1:29,198,"$169,806.00","$146,816.00",$741.49,"$36,857.57"
IAH - MEX,56084270670,I-MEX-YYZ-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/56084270670,https://www.airlines-manager.com/aircraft/show/97026605,1:45,6:44,136,"$153,949.00","$129,048.00",$948.88,"$25,895.92"
IAH - MEX,56096590097,I-MEX-YYZ-2,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/56096590097,https://www.airlines-manager.com/aircraft/show/97076945,5:30,10:29,400,"$415,716.00","$367,373.00",$918.43,"$73,720.33"
IAH - MEX,56103538572,I-MEX-YYZ-5,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/56103538572,https://www.airlines-manager.com/aircraft/show/97076942,8:30,13:29,400,"$415,716.00","$367,373.00",$918.43,"$73,720.33"
IAH - MEX,56112079228,I-MEX-YYZ-1,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/56112079228,https://www.airlines-manager.com/aircraft/show/97076946,13:00,17:59,400,"$415,716.00","$367,373.00",$918.43,"$73,720.33"
IAH - MEX,56118925515,I-MEX-YYZ-4,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/56118925515,https://www.airlines-manager.com/aircraft/show/97076943,16:00,20:59,392,"$408,335.00","$360,191.00",$918.85,"$72,279.13"
IAH - MEX,56131084870,I-MEX-YYZ-3,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/56131084870,https://www.airlines-manager.com/aircraft/show/97076944,22:30,3:29,284,"$308,683.00","$263,221.00",$926.83,"$52,820.27"
IAH - MFE,56093103039,I-MYR-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50555963,https://www.airlines-manager.com/network/showflight/56093103039,https://www.airlines-manager.com/aircraft/show/120452414,3:30,6:44,310,"$171,083.00","$148,684.00",$479.63,"$45,984.74"
IAH - MFE,56112079311,I-MYR-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50555963,https://www.airlines-manager.com/network/showflight/56112079311,https://www.airlines-manager.com/aircraft/show/120452411,13:00,16:14,310,"$171,083.00","$148,684.00",$479.63,"$45,984.74"
IAH - MFE,56122311564,I-MYR-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50555963,https://www.airlines-manager.com/network/showflight/56122311564,https://www.airlines-manager.com/aircraft/show/120452412,17:45,20:59,310,"$171,083.00","$148,684.00",$479.63,"$45,984.74"
IAH - MFE,56131084889,I-MYR-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50555963,https://www.airlines-manager.com/network/showflight/56131084889,https://www.airlines-manager.com/aircraft/show/120452413,22:30,1:44,310,"$171,083.00","$148,684.00",$479.63,"$45,984.74"
IAH - MFR,56084270620,I-EUG-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/56084270620,https://www.airlines-manager.com/aircraft/show/119525218,1:30,10:14,320,"$555,877.00","$506,508.00","$1,582.84","$57,997.10"
IAH - MFR,56093103029,I-EUG-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/56093103029,https://www.airlines-manager.com/aircraft/show/119525217,3:30,12:14,320,"$555,877.00","$506,508.00","$1,582.84","$57,997.10"
IAH - MFR,56107731606,I-EUG-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/56107731606,https://www.airlines-manager.com/aircraft/show/119525219,11:00,19:44,320,"$555,877.00","$506,508.00","$1,582.84","$57,997.10"
IAH - MFR,56112079270,I-EUG-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/56112079270,https://www.airlines-manager.com/aircraft/show/119525220,13:00,21:44,320,"555,877$","506,508$","$1,582.84","$57,997.10"
IAH - MFR,56128543789,I-EUG-MFR-5,ERJ-175,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/56128543789,https://www.airlines-manager.com/aircraft/show/119525248,20:15,5:14,112,"262,366$","232,593$","$2,076.72","$25,891.61"
IAH - MHT,56084270617,I-MHT-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/56084270617,https://www.airlines-manager.com/aircraft/show/114266971,1:30,9:44,320,"525,711$","477,855$","$1,493.30","$58,039.07"
IAH - MHT,56099991586,I-MHT-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/56099991586,https://www.airlines-manager.com/aircraft/show/114266970,6:45,14:59,320,"525,711$","477,855$","$1,493.30","$58,039.07"
IAH - MHT,56112079143,I-MHT-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/56112079143,https://www.airlines-manager.com/aircraft/show/114266972,12:00,20:14,320,"525,711$","477,855$","$1,493.30","$58,039.07"
IAH - MHT,56118925534,I-MHT-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/56118925534,https://www.airlines-manager.com/aircraft/show/114266976,16:00,0:14,320,"525,711$","477,855$","$1,493.30","$58,039.07"
IAH - MHT,56122311566,I-MHT-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/56122311566,https://www.airlines-manager.com/aircraft/show/92800067,17:45,1:59,112,"247,615$","219,048$","$1,955.79","$26,605.02"
IAH - MIA,56084270515,I-MIA-ORD-3,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/56084270515,https://www.airlines-manager.com/aircraft/show/90183182,0:45,6:29,310,"371,613$","325,856$","$1,051.15","$56,835.35"
IAH - MIA,56096590177,I-MIA-ORD-2,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/56096590177,https://www.airlines-manager.com/aircraft/show/90183183,6:30,12:14,310,"371,613$","325,856$","$1,051.15","$56,835.35"
IAH - MIA,56103538599,I-MIA-ORD-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/56103538599,https://www.airlines-manager.com/aircraft/show/90140936,8:30,14:14,136,"176,905$","147,937$","$1,087.77","$25,802.97"
IAH - MIA,56112079282,I-MIA-ORD-1,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/56112079282,https://www.airlines-manager.com/aircraft/show/90183184,13:00,18:44,310,"371,613$","325,856$","$1,051.15","$56,835.35"
IAH - MIA,56115475752,I-MIA-ORD-5,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/56115475752,https://www.airlines-manager.com/aircraft/show/90183180,15:00,20:44,310,"371,613$","325,856$","$1,051.15","$56,835.35"
IAH - MIA,56125473959,I-MIA-ORD-4,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/56125473959,https://www.airlines-manager.com/aircraft/show/90183181,18:30,0:14,310,"371,613$","325,856$","$1,051.15","$56,835.35"
IAH - MKE,56084270555,I-BOI-BNA-2,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/56084270555,https://www.airlines-manager.com/aircraft/show/104258212,1:00,6:59,310,"380,561$","345,427$","$1,114.28","$57,731.53"
IAH - MKE,56099991675,I-BOI-BNA-1,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/56099991675,https://www.airlines-manager.com/aircraft/show/104258211,8:00,13:59,310,"380,561$","345,427$","$1,114.28","$57,731.53"
IAH - MKE,56103538635,I-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/56103538635,https://www.airlines-manager.com/aircraft/show/103534664,9:00,14:59,112,"179,601$","156,801$","$1,400.01","$26,206.30"
IAH - MKE,56115475639,I-BOI-BNA-4,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/56115475639,https://www.airlines-manager.com/aircraft/show/104258214,14:00,19:59,310,"380,561$","345,427$","$1,114.28","$57,731.53"
IAH - MKE,56125474059,I-BOI-BNA-3,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/56125474059,https://www.airlines-manager.com/aircraft/show/104258213,19:15,1:14,310,"380,561$","345,427$","$1,114.28","$57,731.53"
IAH - MSN,56099991644,I-GRR-MSN-3,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/56099991644,https://www.airlines-manager.com/aircraft/show/117273346,7:30,13:29,310,"373,584$","340,499$","$1,098.38","$56,907.91"
IAH - MSN,56115475660,I-GRR-MSN-2,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/56115475660,https://www.airlines-manager.com/aircraft/show/117273347,14:00,19:59,310,"373,584$","340,499$","$1,098.38","$56,907.91"
IAH - MSN,56128543778,I-GRR-MSN-1,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/56128543778,https://www.airlines-manager.com/aircraft/show/117273348,20:15,2:14,310,"373,584$","340,499$","$1,098.38","$56,907.91"
IAH - MSN,56131084858,I-GRR-MSN-4,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/56131084858,https://www.airlines-manager.com/aircraft/show/117273345,22:15,4:14,310,"373,584$","340,499$","$1,098.38","$56,907.91"
IAH - MSO,56093103086,I-MSO-FAR-2,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/56093103086,https://www.airlines-manager.com/aircraft/show/110424756,4:00,11:59,320,"509,127$","462,694$","$1,445.92","$57,957.49"
IAH - MSO,56115475610,I-MSO-FAR-1,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/56115475610,https://www.airlines-manager.com/aircraft/show/110424757,14:00,21:59,320,"509,127$","462,694$","$1,445.92","$57,957.49"
IAH - MSO,56122311534,I-MSO-FAR-4,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/56122311534,https://www.airlines-manager.com/aircraft/show/110424754,17:30,1:29,320,"509,127$","462,694$","$1,445.92","$57,957.49"
IAH - MSO,56128543768,I-MSO-FAR-3,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/56128543768,https://www.airlines-manager.com/aircraft/show/110424755,20:15,4:14,320,"509,127$","462,694$","$1,445.92","$57,957.49"
IAH - MSP,56093103078,I-LAS-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/56093103078,https://www.airlines-manager.com/aircraft/show/95894466,4:00,9:59,320,"384,765$","335,469$","$1,048.34","$56,067.24"
IAH - MSP,56093103079,I-LAS-ATL-6,ERJ-175,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/56093103079,https://www.airlines-manager.com/aircraft/show/82323704,5:00,11:14,112,"182,588$","154,923$","$1,383.24","$24,853.96"
IAH - MSP,56103828447,I-LAS-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/56103828447,https://www.airlines-manager.com/aircraft/show/96183549,10:00,15:59,320,"384,765$","335,469$","$1,048.34","$56,067.24"
IAH - MSP,56122311551,I-LAS-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/56122311551,https://www.airlines-manager.com/aircraft/show/96250652,17:45,23:44,320,"384,765$","335,469$","$1,048.34","$56,067.24"
IAH - MSP,56128543974,I-LAS-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/56128543974,https://www.airlines-manager.com/aircraft/show/96256511,21:30,3:29,320,"384,765$","335,469$","$1,048.34","$56,067.24"
IAH - MSP,56131084874,I-LAS-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/56131084874,https://www.airlines-manager.com/aircraft/show/96177955,22:30,4:29,320,"384,765$","335,469$","$1,048.34","$56,067.24"
IAH - MSY,56093103046,I-BWI-PHL-4,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/56093103046,https://www.airlines-manager.com/aircraft/show/106007216,3:45,6:59,338,"$171,070.00","$146,423.00",$433.20,"$45,285.46"
IAH - MSY,56093103047,I-BWI-PHL-5,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/56093103047,https://www.airlines-manager.com/aircraft/show/106007217,4:45,7:59,338,"$171,070.00","$146,423.00",$433.20,"$45,285.46"
IAH - MSY,56107731556,I-BWI-PHL-3,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/56107731556,https://www.airlines-manager.com/aircraft/show/106007215,11:00,14:14,338,"171,070$","146,423$",$433.20,"$45,285.46"
IAH - MSY,56122311547,I-BWI-PHL-2,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/56122311547,https://www.airlines-manager.com/aircraft/show/106007214,17:45,20:59,338,"$171,070.00","$146,423.00",$433.20,"$45,285.46"
IAH - MSY,56128543793,I-BWI-PHL-1,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/56128543793,https://www.airlines-manager.com/aircraft/show/106007213,20:30,23:44,268,"$149,994.00","$125,833.00",$469.53,"$38,917.42"
IAH - MTJ,56084270760,I-MYR-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50683373,https://www.airlines-manager.com/network/showflight/56084270760,https://www.airlines-manager.com/aircraft/show/120452412,3:00,8:44,310,"$359,072.00","$326,458.00","$1,053.09","$56,940.35"
IAH - MTJ,56103538629,I-MYR-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50683373,https://www.airlines-manager.com/network/showflight/56103538629,https://www.airlines-manager.com/aircraft/show/120452413,9:00,14:44,310,"$359,072.00","$326,458.00","$1,053.09","$56,940.35"
IAH - MTJ,56115475662,I-MYR-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50683373,https://www.airlines-manager.com/network/showflight/56115475662,https://www.airlines-manager.com/aircraft/show/120452414,14:00,19:44,310,"$359,072.00","$326,458.00","$1,053.09","$56,940.35"
IAH - MTJ,56131084859,I-MYR-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50683373,https://www.airlines-manager.com/network/showflight/56131084859,https://www.airlines-manager.com/aircraft/show/120452411,22:15,3:59,244,"$314,023.00","$283,084.00","$1,160.18","$49,375.12"
IAH - MTY,56093103027,I-YOW-SJD-1,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/56093103027,https://www.airlines-manager.com/aircraft/show/114266974,3:30,7:14,320,"$203,277.00","$172,760.00",$539.88,"$46,275.00"
IAH - MTY,56103538646,I-YOW-SJD-5,ERJ-175,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/56103538646,https://www.airlines-manager.com/aircraft/show/105099862,9:15,12:59,112,"$92,839.00","$76,384.00",$682.00,"$20,460.00"
IAH - MTY,56115475614,I-YOW-SJD-4,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/56115475614,https://www.airlines-manager.com/aircraft/show/114266975,14:00,17:44,320,"$203,277.00","$172,760.00",$539.88,"$46,275.00"
IAH - MTY,56122311535,I-YOW-SJD-3,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/56122311535,https://www.airlines-manager.com/aircraft/show/113250059,17:30,21:14,320,"$203,277.00","$172,760.00",$539.88,"$46,275.00"
IAH - MTY,56133285049,I-YOW-SJD-2,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/56133285049,https://www.airlines-manager.com/aircraft/show/113114108,23:30,3:14,320,"$203,277.00","$172,760.00",$539.88,"$46,275.00"
IAH - MYR,56084270662,I-MYR-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50683370,https://www.airlines-manager.com/network/showflight/56084270662,https://www.airlines-manager.com/aircraft/show/120452413,1:45,7:44,310,"$378,289.00","$344,570.00","$1,111.52","$57,588.30"
IAH - MYR,56099991680,I-MYR-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50683370,https://www.airlines-manager.com/network/showflight/56099991680,https://www.airlines-manager.com/aircraft/show/120452414,8:00,13:59,310,"$378,289.00","$344,570.00","$1,111.52","$57,588.30"
IAH - MYR,56118925569,I-MYR-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50683370,https://www.airlines-manager.com/network/showflight/56118925569,https://www.airlines-manager.com/aircraft/show/120452411,16:15,22:14,310,"$378,289.00","$344,570.00","$1,111.52","$57,588.30"
IAH - MYR,56128543941,I-MYR-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50683370,https://www.airlines-manager.com/network/showflight/56128543941,https://www.airlines-manager.com/aircraft/show/120452412,21:00,2:59,310,"$378,289.00","$344,570.00","$1,111.52","$57,588.30"
IAH - OAK,56084270577,I-IAD-SAN-5,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/56084270577,https://www.airlines-manager.com/aircraft/show/98578920,1:15,9:44,320,"$531,050.00","$480,227.00","$1,500.71","$56,608.29"
IAH - OAK,56084270578,I-IAD-SAN-1,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/56084270578,https://www.airlines-manager.com/aircraft/show/98578924,3:00,11:29,320,"$531,050.00","$480,227.00","$1,500.71","$56,608.29"
IAH - OAK,56099991668,I-IAD-SAN-4,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/56099991668,https://www.airlines-manager.com/aircraft/show/98578921,8:00,16:29,320,"$531,050.00","$480,227.00","$1,500.71","$56,608.29"
IAH - OAK,56112079246,I-IAD-SAN-3,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/56112079246,https://www.airlines-manager.com/aircraft/show/98578922,13:00,21:29,320,"$531,050.00","$480,227.00","$1,500.71","$56,608.29"
IAH - OAK,56125474042,I-IAD-SAN-6,ERJ-175,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/56125474042,https://www.airlines-manager.com/aircraft/show/105400635,19:00,3:29,112,"$250,246.00","$220,099.00","$1,965.17","$25,944.87"
IAH - OAK,56131084845,I-IAD-SAN-2,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/56131084845,https://www.airlines-manager.com/aircraft/show/98578923,22:15,6:44,320,"$531,050.00","$480,227.00","$1,500.71","$56,608.29"
IAH - OKC,56096590108,I-RIC-SDF-1,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/56096590108,https://www.airlines-manager.com/aircraft/show/107467134,5:30,9:14,310,"$197,208.00","$171,947.00",$554.67,"$46,057.23"
IAH - OKC,56103828527,I-RIC-SDF-5,ERJ-175,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/56103828527,https://www.airlines-manager.com/aircraft/show/107467211,10:00,13:44,112,"$90,992.00","$75,145.00",$670.94,"$20,128.13"
IAH - OKC,56112079165,I-RIC-SDF-4,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/56112079165,https://www.airlines-manager.com/aircraft/show/107467131,12:00,15:44,310,"$197,208.00","$171,947.00",$554.67,"$46,057.23"
IAH - OKC,56122311563,I-RIC-SDF-3,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/56122311563,https://www.airlines-manager.com/aircraft/show/107467132,17:45,21:29,310,"$197,208.00","$171,947.00",$554.67,"$46,057.23"
IAH - OKC,56131084933,I-RIC-SDF-2,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/56131084933,https://www.airlines-manager.com/aircraft/show/107467133,23:00,2:44,310,"$197,208.00","$171,947.00",$554.67,"$46,057.23"
IAH - OMA,56084270737,I-BOI-BNA-1,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/56084270737,https://www.airlines-manager.com/aircraft/show/104258211,2:45,7:59,310,"$329,990.00","$298,847.00",$964.02,"$57,104.52"
IAH - OMA,56093103071,I-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/56093103071,https://www.airlines-manager.com/aircraft/show/103534664,3:45,8:59,112,"$156,520.00","$136,469.00","$1,218.47","$26,076.88"
IAH - OMA,56103538607,I-BOI-BNA-4,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/56103538607,https://www.airlines-manager.com/aircraft/show/104258214,8:45,13:59,310,"$329,990.00","$298,847.00",$964.02,"$57,104.52"
IAH - OMA,56115475638,I-BOI-BNA-3,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/56115475638,https://www.airlines-manager.com/aircraft/show/104258213,14:00,19:14,310,"$329,990.00","$298,847.00",$964.02,"$57,104.52"
IAH - OMA,56125474102,I-BOI-BNA-2,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/56125474102,https://www.airlines-manager.com/aircraft/show/104258212,19:45,0:59,310,"$329,990.00","$298,847.00",$964.02,"$57,104.52"
IAH - ONT,56084270741,I-ANC-ONT-1,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/56084270741,https://www.airlines-manager.com/aircraft/show/108258010,2:45,9:59,310,"$465,347.00","$424,181.00","$1,368.33","$58,642.53"
IAH - ONT,56093103169,I-ANC-ONT-2,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/56093103169,https://www.airlines-manager.com/aircraft/show/108258011,4:45,11:59,310,"$465,347.00","$424,181.00","$1,368.33","$58,642.53"
IAH - ONT,56112079170,I-ANC-ONT-3,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/56112079170,https://www.airlines-manager.com/aircraft/show/108258012,12:00,19:14,310,"$465,347.00","$424,181.00","$1,368.33","$58,642.53"
IAH - ONT,56115475644,I-ANC-ONT-4,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/56115475644,https://www.airlines-manager.com/aircraft/show/108089220,14:00,21:14,310,"$465,347.00","$424,181.00","$1,368.33","$58,642.53"
IAH - ONT,56118925552,I-ANC-ONT-5 B,A319-100,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/56118925552,https://www.airlines-manager.com/aircraft/show/108286957,16:00,23:14,198,"$351,162.00","$318,172.00","$1,606.93","$43,986.91"
IAH - ORD,56084270456,I-MIA-ORD-4,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/56084270456,https://www.airlines-manager.com/aircraft/show/90183181,0:15,5:59,310,"$364,400.00","$309,434.00",$998.17,"$53,971.05"
IAH - ORD,56096590176,I-MIA-ORD-3,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/56096590176,https://www.airlines-manager.com/aircraft/show/90183182,6:30,12:14,310,"$364,400.00","$309,434.00",$998.17,"$53,971.05"
IAH - ORD,56103538568,I-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/56103538568,https://www.airlines-manager.com/aircraft/show/120293379,8:15,13:59,0,"$101,420.00","$26,513.00",$0.00,"$4,624.36"
IAH - ORD,56112079281,I-MIA-ORD-2,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/56112079281,https://www.airlines-manager.com/aircraft/show/90183183,13:00,18:44,310,"$364,400.00","$309,434.00",$998.17,"$53,971.05"
IAH - ORD,56115475789,I-MIA-ORD-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/56115475789,https://www.airlines-manager.com/aircraft/show/90140936,15:00,20:44,136,"$173,108.00","$138,672.00","$1,019.65","$24,186.98"
IAH - ORD,56125473990,I-MIA-ORD-1,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/56125473990,https://www.airlines-manager.com/aircraft/show/90183184,18:45,0:29,310,"$364,400.00","$309,434.00",$998.17,"$53,971.05"
IAH - ORD,56128543826,I-MIA-ORD-5,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/56128543826,https://www.airlines-manager.com/aircraft/show/90183180,20:45,2:29,310,"$364,400.00","$309,434.00",$998.17,"$53,971.05"
IAH - ORF,56084270411,I-PVD-BUF-5 B,A319-100,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/56084270411,https://www.airlines-manager.com/aircraft/show/110582843,0:00,6:44,198,"$320,725.00","$291,072.00","$1,470.06","$43,228.51"
IAH - ORF,56093103129,I-PVD-BUF-1,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/56093103129,https://www.airlines-manager.com/aircraft/show/107467130,4:15,10:59,310,"$425,000.00","$387,998.00","$1,251.61","$57,623.47"
IAH - ORF,56103538562,I-PVD-BUF-4,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/56103538562,https://www.airlines-manager.com/aircraft/show/107467127,8:15,14:59,310,"$425,000.00","$387,998.00","$1,251.61","$57,623.47"
IAH - ORF,56112079301,I-PVD-BUF-3,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/56112079301,https://www.airlines-manager.com/aircraft/show/107467128,13:00,19:44,310,"$425,000.00","$387,998.00","$1,251.61","$57,623.47"
IAH - ORF,56125474130,I-PVD-BUF-2,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/56125474130,https://www.airlines-manager.com/aircraft/show/107467129,20:00,2:44,310,"$425,000.00","$387,998.00","$1,251.61","$57,623.47"
IAH - PBI,56084270720,I-PBI-RSW-2,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/56084270720,https://www.airlines-manager.com/aircraft/show/104717246,2:30,8:14,310,"$370,693.00","$335,957.00","$1,083.73","$58,597.15"
IAH - PBI,56107731630,I-PBI-RSW-1,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/56107731630,https://www.airlines-manager.com/aircraft/show/104717247,11:00,16:44,310,"$370,693.00","$335,957.00","$1,083.73","$58,597.15"
IAH - PBI,56112079330,I-PBI-RSW-5,ERJ-175,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/56112079330,https://www.airlines-manager.com/aircraft/show/104743902,13:15,18:59,112,"$175,285.00","$152,779.00","$1,364.10","$26,647.50"
IAH - PBI,56118925567,I-PBI-RSW-4,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/56118925567,https://www.airlines-manager.com/aircraft/show/104717244,16:15,21:59,310,"$370,693.00","$335,957.00","$1,083.73","$58,597.15"
IAH - PBI,56131084805,I-PBI-RSW-3,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/56131084805,https://www.airlines-manager.com/aircraft/show/104717245,21:45,3:29,310,"$370,693.00","$335,957.00","$1,083.73","$58,597.15"
IAH - PDX,56084270726,I-SEA-DEN-5,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/56084270726,https://www.airlines-manager.com/aircraft/show/105562975,2:45,11:44,338,"$622,480.00","$574,378.00","$1,699.34","$63,938.18"
IAH - PDX,56093103072,I-SEA-DEN-2,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/56093103072,https://www.airlines-manager.com/aircraft/show/105562972,4:00,12:59,338,"$622,480.00","$574,378.00","$1,699.34","$63,938.18"
IAH - PDX,56093103073,I-SEA-DEN-4,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/56093103073,https://www.airlines-manager.com/aircraft/show/105562974,5:00,13:59,338,"$622,480.00","$574,378.00","$1,699.34","$63,938.18"
IAH - PDX,56112079189,I-SEA-DEN-6,ERJ-175,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/56112079189,https://www.airlines-manager.com/aircraft/show/105601215,12:00,21:14,112,"$270,856.00","$237,445.00","$2,120.04","$25,716.06"
IAH - PDX,56115475583,I-SEA-DEN-3,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/56115475583,https://www.airlines-manager.com/aircraft/show/105562973,14:00,22:59,338,"$622,480.00","$574,378.00","$1,699.34","$63,938.18"
IAH - PDX,56125473942,I-SEA-DEN-1,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/56125473942,https://www.airlines-manager.com/aircraft/show/105562971,18:30,3:29,338,"$622,480.00","$574,378.00","$1,699.34","$63,938.18"
IAH - PHL,56084270419,I-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/56084270419,https://www.airlines-manager.com/aircraft/show/120293379,0:00,7:14,0,"$127,938.00","$65,291.00",#DIV/0!,"$9,026.41"
IAH - PHL,56107731557,I-BWI-PHL-4,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/56107731557,https://www.airlines-manager.com/aircraft/show/106007216,11:00,18:14,338,"$503,297.00","$458,115.00","$1,355.37","$63,333.87"
IAH - PHL,56115475679,I-BWI-PHL-3,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/56115475679,https://www.airlines-manager.com/aircraft/show/106007215,14:15,21:29,338,"$503,297.00","$458,115.00","$1,355.37","$63,333.87"
IAH - PHL,56128543836,I-BWI-PHL-2,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/56128543836,https://www.airlines-manager.com/aircraft/show/106007214,21:00,4:14,338,"$503,297.00","$458,115.00","$1,355.37","$63,333.87"
IAH - PHL,56128543837,I-BWI-PHL-5,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/56128543837,https://www.airlines-manager.com/aircraft/show/106007217,21:30,4:44,338,"$503,297.00","$458,115.00","$1,355.37","$63,333.87"
IAH - PHL,56133285065,I-BWI-PHL-1,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/56133285065,https://www.airlines-manager.com/aircraft/show/106007213,23:45,6:59,338,"$503,297.00","$458,115.00","$1,355.37","$63,333.87"
IAH - PHX,56093103080,I-LAS-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/56093103080,https://www.airlines-manager.com/aircraft/show/96183549,4:00,9:59,320,"$380,643.00","$328,609.00","$1,026.90","$54,920.72"
IAH - PHX,56093103081,I-LAS-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/56093103081,https://www.airlines-manager.com/aircraft/show/96177955,5:00,10:59,320,"$380,643.00","$328,609.00","$1,026.90","$54,920.72"
IAH - PHX,56107731673,I-LAS-ATL-6,ERJ-175,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/56107731673,https://www.airlines-manager.com/aircraft/show/82323704,11:30,17:29,112,"$179,949.00","$150,998.00","$1,348.20","$25,236.43"
IAH - PHX,56107731674,I-LAS-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/56107731674,https://www.airlines-manager.com/aircraft/show/96250652,11:45,17:44,320,"$380,643.00","$328,609.00","$1,026.90","$54,920.72"
IAH - PHX,56118925471,I-LAS-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/56118925471,https://www.airlines-manager.com/aircraft/show/96256511,15:30,21:29,320,"$380,643.00","$328,609.00","$1,026.90","$54,920.72"
IAH - PHX,56128543973,I-LAS-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/56128543973,https://www.airlines-manager.com/aircraft/show/95894466,21:30,3:29,320,"$380,643.00","$328,609.00","$1,026.90","$54,920.72"
IAH - PIT,56093103190,I-PIT-RDU-2,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/56093103190,https://www.airlines-manager.com/aircraft/show/100684073,5:00,11:29,310,"$406,895.00","$368,531.00","$1,188.81","$56,842.83"
IAH - PIT,56107731664,I-PIT-RDU-1,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/56107731664,https://www.airlines-manager.com/aircraft/show/100684074,11:15,17:44,310,"$406,895.00","$368,531.00","$1,188.81","$56,842.83"
IAH - PIT,56118925554,I-PIT-RDU-5 B,A319-100,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/56118925554,https://www.airlines-manager.com/aircraft/show/110582845,16:00,22:29,198,"$307,277.00","$276,538.00","$1,396.66","$42,653.68"
IAH - PIT,56122311513,I-PIT-RDU-4,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/56122311513,https://www.airlines-manager.com/aircraft/show/100684071,17:15,23:44,310,"$406,895.00","$368,531.00","$1,188.81","$56,842.83"
IAH - PIT,56131084914,I-PIT-RDU-3,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/56131084914,https://www.airlines-manager.com/aircraft/show/100684072,22:45,5:14,310,"$406,895.00","$368,531.00","$1,188.81","$56,842.83"
IAH - PNS,56103538628,I-MYR-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50683375,https://www.airlines-manager.com/network/showflight/56103538628,https://www.airlines-manager.com/aircraft/show/120452411,9:00,12:59,310,"$228,813.00","$203,811.00",$657.45,"$51,165.94"
IAH - PNS,56115475578,I-MYR-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50683375,https://www.airlines-manager.com/network/showflight/56115475578,https://www.airlines-manager.com/aircraft/show/120452412,13:45,17:44,310,"$228,813.00","$203,811.00",$657.45,"$51,165.94"
IAH - PNS,56125473965,I-MYR-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50683375,https://www.airlines-manager.com/network/showflight/56125473965,https://www.airlines-manager.com/aircraft/show/120452413,18:30,22:29,310,"$228,813.00","$203,811.00",$657.45,"$51,165.94"
IAH - PNS,56133285058,I-MYR-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50683375,https://www.airlines-manager.com/network/showflight/56133285058,https://www.airlines-manager.com/aircraft/show/120452414,23:30,3:29,310,"$228,813.00","$203,811.00",$657.45,"$51,165.94"
IAH - PSP,56084270628,I-YEG-BUR-2,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/56084270628,https://www.airlines-manager.com/aircraft/show/117273343,1:30,8:29,310,"$452,503.00","$414,449.00","$1,336.93","$59,348.31"
IAH - PSP,56093103067,I-YEG-BUR-1,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/56093103067,https://www.airlines-manager.com/aircraft/show/117273344,3:45,10:44,310,"$452,503.00","$414,449.00","$1,336.93","$59,348.31"
IAH - PSP,56107731644,I-YEG-BUR-3,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/56107731644,https://www.airlines-manager.com/aircraft/show/117273342,11:00,17:59,310,"$452,503.00","$414,449.00","$1,336.93","$59,348.31"
IAH - PSP,56125473945,I-YEG-BUR-5,A321neo,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/56125473945,https://www.airlines-manager.com/aircraft/show/117273340,18:30,1:29,338,"$490,459.00","$453,988.00","$1,343.16","$65,010.21"
IAH - PVD,56084270739,I-PVD-BUF-2,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/56084270739,https://www.airlines-manager.com/aircraft/show/107467129,2:45,10:59,310,"$518,459.00","$476,949.00","$1,538.55","$57,929.03"
IAH - PVD,56099991591,I-PVD-BUF-5 B,A319-100,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/56099991591,https://www.airlines-manager.com/aircraft/show/110582843,6:45,14:59,198,"$390,620.00","$357,345.00","$1,804.77","$43,402.23"
IAH - PVD,56112079303,I-PVD-BUF-1,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/56112079303,https://www.airlines-manager.com/aircraft/show/107467130,13:00,21:14,310,"$518,459.00","$476,949.00","$1,538.55","$57,929.03"
IAH - PVD,56122311486,I-PVD-BUF-4,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/56122311486,https://www.airlines-manager.com/aircraft/show/107467127,17:00,1:14,310,"$518,459.00","$476,949.00","$1,538.55","$57,929.03"
IAH - PVD,56125474103,I-PVD-BUF-3,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/56125474103,https://www.airlines-manager.com/aircraft/show/107467128,19:45,3:59,310,"$518,459.00","$476,949.00","$1,538.55","$57,929.03"
IAH - PVR,56084270767,I-YOW-SJD-5,ERJ-175,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/56084270767,https://www.airlines-manager.com/aircraft/show/105099862,3:00,8:29,112,"$167,029.00","$145,615.00","$1,300.13","$26,555.93"
IAH - PVR,56103538578,I-YOW-SJD-4,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/56103538578,https://www.airlines-manager.com/aircraft/show/114266975,8:30,13:59,320,"$357,042.00","$319,408.00",$998.15,"$58,250.70"
IAH - PVR,56112079141,I-YOW-SJD-3,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/56112079141,https://www.airlines-manager.com/aircraft/show/113250059,12:00,17:29,320,"$357,042.00","$319,408.00",$998.15,"$58,250.70"
IAH - PVR,56122311584,I-YOW-SJD-2,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/56122311584,https://www.airlines-manager.com/aircraft/show/113114108,18:00,23:29,320,"$357,042.00","$319,408.00",$998.15,"$58,250.70"
IAH - PVR,56131084814,I-YOW-SJD-1,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/56131084814,https://www.airlines-manager.com/aircraft/show/114266974,22:00,3:29,320,"$357,042.00","$319,408.00",$998.15,"$58,250.70"
IAH - PWM,56099991659,I-SJC-PWM-5 B,A319-100,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/56099991659,https://www.airlines-manager.com/aircraft/show/106014350,7:45,16:14,198,"$408,258.00","$374,074.00","$1,889.26","$44,095.17"
IAH - PWM,56107731622,I-SJC-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/56107731622,https://www.airlines-manager.com/aircraft/show/96691558,11:00,19:29,310,"$542,330.00","$499,689.00","$1,611.90","$58,902.44"
IAH - PWM,56115475755,I-SJC-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/56115475755,https://www.airlines-manager.com/aircraft/show/96694086,15:00,23:29,310,"$542,330.00","$499,689.00","$1,611.90","$58,902.44"
IAH - PWM,56125474057,I-SJC-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/56125474057,https://www.airlines-manager.com/aircraft/show/96692491,19:15,3:44,310,"$542,330.00","$499,689.00","$1,611.90","$58,902.44"
IAH - PWM,56131084912,I-SJC-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/56131084912,https://www.airlines-manager.com/aircraft/show/96692343,22:45,7:14,310,"$542,330.00","$499,689.00","$1,611.90","$58,902.44"
IAH - RAP,56084270702,I-GRR-MSN-1,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/56084270702,https://www.airlines-manager.com/aircraft/show/117273348,2:15,8:29,310,"$389,890.00","$355,642.00","$1,147.23","$57,054.87"
IAH - RAP,56093103134,I-GRR-MSN-4,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/56093103134,https://www.airlines-manager.com/aircraft/show/117273345,4:15,10:29,310,"$389,890.00","$355,642.00","$1,147.23","$57,054.87"
IAH - RAP,56115475659,I-GRR-MSN-3,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/56115475659,https://www.airlines-manager.com/aircraft/show/117273346,14:00,20:14,310,"$389,890.00","$355,642.00","$1,147.23","$57,054.87"
IAH - RAP,56125474136,I-GRR-MSN-2,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/56125474136,https://www.airlines-manager.com/aircraft/show/117273347,20:00,2:14,293,"$377,260.00","$343,506.00","$1,172.38","$55,107.91"
IAH - RDU,56096590092,I-PIT-RDU-3,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/56096590092,https://www.airlines-manager.com/aircraft/show/100684072,5:15,11:29,310,"$390,232.00","$353,428.00","$1,140.09","$56,699.68"
IAH - RDU,56107731669,I-PIT-RDU-2,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/56107731669,https://www.airlines-manager.com/aircraft/show/100684073,11:30,17:44,310,"$390,232.00","$353,428.00","$1,140.09","$56,699.68"
IAH - RDU,56122311560,I-PIT-RDU-1,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/56122311560,https://www.airlines-manager.com/aircraft/show/100684074,17:45,23:59,310,"$390,232.00","$353,428.00","$1,140.09","$56,699.68"
IAH - RDU,56131084890,I-PIT-RDU-5 B,A319-100,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/56131084890,https://www.airlines-manager.com/aircraft/show/110582845,22:30,4:44,198,"$294,889.00","$265,400.00","$1,340.40","$42,577.54"
IAH - RDU,56133285079,I-PIT-RDU-4,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/56133285079,https://www.airlines-manager.com/aircraft/show/100684071,23:45,5:59,310,"$390,232.00","$353,428.00","$1,140.09","$56,699.68"
IAH - RIC,56084270740,I-RIC-SDF-2,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/56084270740,https://www.airlines-manager.com/aircraft/show/107467133,2:45,9:14,310,"$418,233.00","$381,919.00","$1,232.00","$58,907.81"
IAH - RIC,56112079168,I-RIC-SDF-1,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/56112079168,https://www.airlines-manager.com/aircraft/show/107467134,12:00,18:29,310,"$418,233.00","$381,919.00","$1,232.00","$58,907.81"
IAH - RIC,56115475581,I-RIC-SDF-5,ERJ-175,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/56115475581,https://www.airlines-manager.com/aircraft/show/107467211,13:45,20:14,112,"$196,627.00","$172,821.00","$1,543.04","$26,656.20"
IAH - RIC,56118925491,I-RIC-SDF-4,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/56118925491,https://www.airlines-manager.com/aircraft/show/107467131,15:45,22:14,310,"$418,233.00","$381,919.00","$1,232.00","$58,907.81"
IAH - RIC,56128543985,I-RIC-SDF-3,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/56128543985,https://www.airlines-manager.com/aircraft/show/107467132,21:30,3:59,310,"$418,233.00","$381,919.00","$1,232.00","$58,907.81"
IAH - RNO,56084270589,I-RNO-MCI-3,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/56084270589,https://www.airlines-manager.com/aircraft/show/103882357,1:15,9:14,310,"$514,150.00","$471,042.00","$1,519.49","$59,003.17"
IAH - RNO,56093103103,I-RNO-MCI-5,ERJ-175,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/56093103103,https://www.airlines-manager.com/aircraft/show/105099861,4:00,11:59,112,"$241,738.00","$213,206.00","$1,903.63","$26,706.39"
IAH - RNO,56093103104,I-RNO-MCI-2,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/56093103104,https://www.airlines-manager.com/aircraft/show/103882356,5:00,12:59,310,"$514,150.00","$471,042.00","$1,519.49","$59,003.17"
IAH - RNO,56112079296,I-RNO-MCI-1,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/56112079296,https://www.airlines-manager.com/aircraft/show/103882355,13:00,20:59,310,"$514,150.00","$471,042.00","$1,519.49","$59,003.17"
IAH - RNO,56122311484,I-RNO-MCI-4,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/56122311484,https://www.airlines-manager.com/aircraft/show/103882358,17:00,0:59,310,"$514,150.00","$471,042.00","$1,519.49","$59,003.17"
IAH - ROC,56084270483,I-SYR-ROC-3,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/56084270483,https://www.airlines-manager.com/aircraft/show/119525222,0:30,7:44,320,"$463,219.00","$420,416.00","$1,313.80","$58,122.03"
IAH - ROC,56107731608,I-SYR-ROC-2,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/56107731608,https://www.airlines-manager.com/aircraft/show/119525223,11:00,18:14,320,"$463,219.00","$420,416.00","$1,313.80","$58,122.03"
IAH - ROC,56112079191,I-SYR-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/56112079191,https://www.airlines-manager.com/aircraft/show/119525249,12:00,19:14,112,"$218,849.00","$193,570.00","$1,728.30","$26,760.83"
IAH - ROC,56125473957,I-SYR-ROC-1,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/56125473957,https://www.airlines-manager.com/aircraft/show/119525224,18:30,1:44,320,"$463,219.00","$420,416.00","$1,313.80","$58,122.03"
IAH - ROC,56125473958,I-SYR-ROC-4,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/56125473958,https://www.airlines-manager.com/aircraft/show/119525221,19:30,2:44,320,"$463,219.00","$420,416.00","$1,313.80","$58,122.03"
IAH - RSW,56084270738,I-PBI-RSW-4,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/56084270738,https://www.airlines-manager.com/aircraft/show/104717244,2:45,8:14,310,"$350,834.00","$316,276.00","$1,020.25","$57,679.51"
IAH - RSW,56107731628,I-PBI-RSW-3,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/56107731628,https://www.airlines-manager.com/aircraft/show/104717245,11:00,16:29,310,"$350,834.00","$316,276.00","$1,020.25","$57,679.51"
IAH - RSW,56118925490,I-PBI-RSW-2,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/56118925490,https://www.airlines-manager.com/aircraft/show/104717246,15:45,21:14,310,"$350,834.00","$316,276.00","$1,020.25","$57,679.51"
IAH - RSW,56128543984,I-PBI-RSW-1,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/56128543984,https://www.airlines-manager.com/aircraft/show/104717247,21:30,2:59,310,"$350,834.00","$316,276.00","$1,020.25","$57,679.51"
IAH - RSW,56133285089,I-PBI-RSW-5,ERJ-175,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/56133285089,https://www.airlines-manager.com/aircraft/show/104743902,23:45,5:14,112,"$165,937.00","$143,701.00","$1,283.04","$26,206.87"
IAH - SAN,56084270505,I-IAD-SAN-4,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/56084270505,https://www.airlines-manager.com/aircraft/show/98578921,0:45,7:59,320,"$454,470.00","$407,129.00","$1,272.28","$56,285.12"
IAH - SAN,56093103116,I-IAD-SAN-3,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/56093103116,https://www.airlines-manager.com/aircraft/show/98578922,4:15,11:29,320,"$454,470.00","$407,129.00","$1,272.28","$56,285.12"
IAH - SAN,56107731527,I-IAD-SAN-6,ERJ-175,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/56107731527,https://www.airlines-manager.com/aircraft/show/105400635,10:15,17:29,112,"$215,045.00","$187,586.00","$1,674.88","$25,933.55"
IAH - SAN,56115475738,I-IAD-SAN-2,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/56115475738,https://www.airlines-manager.com/aircraft/show/98578923,15:00,22:14,320,"$454,470.00","$407,129.00","$1,272.28","$56,285.12"
IAH - SAN,56122311580,I-IAD-SAN-5,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/56122311580,https://www.airlines-manager.com/aircraft/show/98578920,18:00,1:14,320,"$454,470.00","$407,129.00","$1,272.28","$56,285.12"
IAH - SAN,56125474094,I-IAD-SAN-1,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/56125474094,https://www.airlines-manager.com/aircraft/show/98578924,19:45,2:59,320,"$454,470.00","$407,129.00","$1,272.28","$56,285.12"
IAH - SAT,56084270630,I-SMF-CVG-5 B,A319-100,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/56084270630,https://www.airlines-manager.com/aircraft/show/106499070,1:30,4:14,198,"$91,093.00","$73,214.00",$369.77,"$26,785.61"
IAH - SAT,56103828419,I-SMF-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/56103828419,https://www.airlines-manager.com/aircraft/show/99093332,9:45,12:29,320,"$120,541.00","$94,177.00",$294.30,"$34,455.00"
IAH - SAT,56115475600,I-SMF-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/56115475600,https://www.airlines-manager.com/aircraft/show/99093333,14:00,16:44,320,"$120,541.00","$94,177.00",$294.30,"$34,455.00"
IAH - SAT,56122311582,I-SMF-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/56122311582,https://www.airlines-manager.com/aircraft/show/99093334,18:00,20:44,320,"$120,541.00","$94,177.00",$294.30,"$34,455.00"
IAH - SAT,56133285045,I-SMF-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/56133285045,https://www.airlines-manager.com/aircraft/show/99093335,23:30,2:14,320,"$120,541.00","$94,177.00",$294.30,"$34,455.00"
IAH - SAV,56084270678,I-FAT-SAV-4,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/56084270678,https://www.airlines-manager.com/aircraft/show/110424758,2:00,7:29,320,"$343,864.00","$308,058.00",$962.68,"$56,180.79"
IAH - SAV,56103538576,I-FAT-SAV-3,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/56103538576,https://www.airlines-manager.com/aircraft/show/110424759,8:30,13:59,320,"$343,864.00","$308,058.00",$962.68,"$56,180.79"
IAH - SAV,56112079259,I-FAT-SAV-2,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/56112079259,https://www.airlines-manager.com/aircraft/show/110424760,13:00,18:29,320,"$343,864.00","$308,058.00",$962.68,"$56,180.79"
IAH - SAV,56131084799,I-FAT-SAV-1,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/56131084799,https://www.airlines-manager.com/aircraft/show/110424761,21:45,3:14,320,"$343,864.00","$308,058.00",$962.68,"$56,180.79"
IAH - SBA,56084270572,I-SNA-SBA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/56084270572,https://www.airlines-manager.com/aircraft/show/119525227,1:15,8:59,272,"$439,188.00","$409,680.00","$1,506.18","$52,975.86"
IAH - SBA,56093102976,I-SNA-SBA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/56093102976,https://www.airlines-manager.com/aircraft/show/119525228,3:15,10:59,272,"$439,188.00","$409,680.00","$1,506.18","$52,975.86"
IAH - SBA,56107731549,I-SNA-SBA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/56107731549,https://www.airlines-manager.com/aircraft/show/119525226,11:00,18:44,272,"$439,188.00","$409,680.00","$1,506.18","$52,975.86"
IAH - SBA,56112079212,I-SNA-SBA-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/56112079212,https://www.airlines-manager.com/aircraft/show/119525229,13:00,20:44,272,"$439,188.00","$409,680.00","$1,506.18","$52,975.86"
IAH - SBA,56122311623,I-SNA-SBA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/56122311623,https://www.airlines-manager.com/aircraft/show/119525225,18:15,1:59,272,"$439,188.00","$409,680.00","$1,506.18","$52,975.86"
IAH - SCL,56084270606,I-56A-1 E,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/56084270606,https://www.airlines-manager.com/aircraft/show/106676232,1:30,19:59,648,"$2,300,982.00","$2,144,866.00","$3,309.98","$116,043.25"
IAH - SCL,56096590170,I-56A-3 E,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/56096590170,https://www.airlines-manager.com/aircraft/show/106676234,6:30,0:59,648,"$2,300,982.00","$2,144,866.00","$3,309.98","$116,043.25"
IAH - SCL,56122311525,I-56A-5 E,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/56122311525,https://www.airlines-manager.com/aircraft/show/106676236,17:30,11:59,648,"$2,300,982.00","$2,144,866.00","$3,309.98","$116,043.25"
IAH - SDF,56093103097,I-RIC-SDF-3,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/56093103097,https://www.airlines-manager.com/aircraft/show/107467132,4:00,9:14,310,"$330,138.00","$297,585.00",$959.95,"$56,863.38"
IAH - SDF,56112079167,I-RIC-SDF-2,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/56112079167,https://www.airlines-manager.com/aircraft/show/107467133,12:00,17:14,310,"$330,138.00","$297,585.00",$959.95,"$56,863.38"
IAH - SDF,56125473961,I-RIC-SDF-1,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/56125473961,https://www.airlines-manager.com/aircraft/show/107467134,18:30,23:44,310,"$330,138.00","$297,585.00",$959.95,"$56,863.38"
IAH - SDF,56128543788,I-RIC-SDF-5,ERJ-175,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/56128543788,https://www.airlines-manager.com/aircraft/show/107467211,20:15,1:29,112,"$156,673.00","$135,766.00","$1,212.20","$25,942.55"
IAH - SDF,56131084853,I-RIC-SDF-4,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/56131084853,https://www.airlines-manager.com/aircraft/show/107467131,22:15,3:29,310,"$330,138.00","$297,585.00",$959.95,"$56,863.38"
IAH - SEA,56093103011,I-SEA-DEN-1,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/56093103011,https://www.airlines-manager.com/aircraft/show/105562971,3:30,12:44,338,"$646,653.00","$591,295.00","$1,749.39","$64,039.17"
IAH - SEA,56093103012,I-SEA-DEN-3,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/56093103012,https://www.airlines-manager.com/aircraft/show/105562973,4:30,13:44,338,"$646,653.00","$591,295.00","$1,749.39","$64,039.17"
IAH - SEA,56112079219,I-SEA-DEN-2,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/56112079219,https://www.airlines-manager.com/aircraft/show/105562972,13:00,22:14,338,"$646,653.00","$591,295.00","$1,749.39","$64,039.17"
IAH - SEA,56115475584,I-SEA-DEN-4,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/56115475584,https://www.airlines-manager.com/aircraft/show/105562974,14:00,23:14,338,"$646,653.00","$591,295.00","$1,749.39","$64,039.17"
IAH - SEA,56122311524,I-SEA-DEN-5,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/56122311524,https://www.airlines-manager.com/aircraft/show/105562975,17:30,2:44,338,"$646,653.00","$591,295.00","$1,749.39","$64,039.17"
IAH - SEA,56128543968,I-SEA-DEN-6,ERJ-175,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/56128543968,https://www.airlines-manager.com/aircraft/show/105601215,21:15,6:44,112,"$280,372.00","$242,484.00","$2,165.04","$25,569.49"
IAH - SJC,56084270754,I-SJC-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/56084270754,https://www.airlines-manager.com/aircraft/show/96694086,3:00,11:14,310,"$533,552.00","$487,923.00","$1,573.95","$59,261.90"
IAH - SJC,56107731624,I-SJC-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/56107731624,https://www.airlines-manager.com/aircraft/show/96692491,11:00,19:14,310,"$533,552.00","$487,923.00","$1,573.95","$59,261.90"
IAH - SJC,56115475698,I-SJC-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/56115475698,https://www.airlines-manager.com/aircraft/show/96692343,14:30,22:44,310,"$533,552.00","$487,923.00","$1,573.95","$59,261.90"
IAH - SJC,56131084930,I-SJC-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/56131084930,https://www.airlines-manager.com/aircraft/show/96691558,23:00,7:14,310,"$533,552.00","$487,923.00","$1,573.95","$59,261.90"
IAH - SJC,56133285060,I-SJC-PWM-5 B,A319-100,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/56133285060,https://www.airlines-manager.com/aircraft/show/106014350,23:30,7:44,198,"$401,349.00","$364,777.00","$1,842.31","$44,304.90"
IAH - SJD,56084270646,I-YOW-SJD-4,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/56084270646,https://www.airlines-manager.com/aircraft/show/114266975,1:45,7:44,320,"$382,514.00","$343,676.00","$1,073.99","$57,438.89"
IAH - SJD,56096590089,I-YOW-SJD-3,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/56096590089,https://www.airlines-manager.com/aircraft/show/113250059,5:15,11:14,320,"$382,514.00","$343,676.00","$1,073.99","$57,438.89"
IAH - SJD,56112079140,I-YOW-SJD-2,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/56112079140,https://www.airlines-manager.com/aircraft/show/113114108,12:00,17:59,320,"$382,514.00","$343,676.00","$1,073.99","$57,438.89"
IAH - SJD,56118925533,I-YOW-SJD-1,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/56118925533,https://www.airlines-manager.com/aircraft/show/114266974,16:00,21:59,320,"$382,514.00","$343,676.00","$1,073.99","$57,438.89"
IAH - SJD,56128543949,I-YOW-SJD-5,ERJ-175,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/56128543949,https://www.airlines-manager.com/aircraft/show/105099862,21:00,2:59,110,"$176,193.00","$153,955.00","$1,399.59","$25,730.64"
IAH - SLC,56084270735,I-SLC-CLT-2,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/56084270735,https://www.airlines-manager.com/aircraft/show/93094698,2:45,9:29,310,"$425,998.00","$382,511.00","$1,233.91","$56,808.56"
IAH - SLC,56093103176,I-SLC-CLT-6,ERJ-175,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/56093103176,https://www.airlines-manager.com/aircraft/show/93100455,4:45,11:29,112,"$200,317.00","$172,140.00","$1,536.96","$25,565.35"
IAH - SLC,56103828487,I-SLC-CLT-1,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/56103828487,https://www.airlines-manager.com/aircraft/show/93094699,10:00,16:44,310,"$425,998.00","$382,511.00","$1,233.91","$56,808.56"
IAH - SLC,56112079162,I-SLC-CLT-5,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/56112079162,https://www.airlines-manager.com/aircraft/show/93094695,12:00,18:44,310,"$425,998.00","$382,511.00","$1,233.91","$56,808.56"
IAH - SLC,56118925439,I-SLC-CLT-4,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/56118925439,https://www.airlines-manager.com/aircraft/show/93094696,15:15,21:59,310,"$425,998.00","$382,511.00","$1,233.91","$56,808.56"
IAH - SLC,56128543934,I-SLC-CLT-3,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/56128543934,https://www.airlines-manager.com/aircraft/show/93094697,21:00,3:44,310,"$425,998.00","$382,511.00","$1,233.91","$56,808.56"
IAH - SMF,56084270695,I-SMF-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/56084270695,https://www.airlines-manager.com/aircraft/show/99093335,2:15,10:29,320,"$532,190.00","$482,961.00","$1,509.25","$58,659.23"
IAH - SMF,56093103135,I-SMF-CVG-5 B,A319-100,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/56093103135,https://www.airlines-manager.com/aircraft/show/106499070,4:15,12:29,198,"$400,763.00","$365,374.00","$1,845.32","$44,377.41"
IAH - SMF,56112079249,I-SMF-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/56112079249,https://www.airlines-manager.com/aircraft/show/99093332,13:00,21:14,320,"$532,190.00","$482,961.00","$1,509.25","$58,659.23"
IAH - SMF,56118925595,I-SMF-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/56118925595,https://www.airlines-manager.com/aircraft/show/99093333,16:45,0:59,320,"$532,190.00","$482,961.00","$1,509.25","$58,659.23"
IAH - SMF,56128543815,I-SMF-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/56128543815,https://www.airlines-manager.com/aircraft/show/99093334,20:45,4:59,320,"$532,190.00","$482,961.00","$1,509.25","$58,659.23"
IAH - SNA,56084270636,I-SNA-SBA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/56084270636,https://www.airlines-manager.com/aircraft/show/119525226,1:45,8:59,272,"$423,610.00","$394,459.00","$1,450.22","$54,533.50"
IAH - SNA,56084270637,I-SYR-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/56084270637,https://www.airlines-manager.com/aircraft/show/119525249,2:45,9:59,112,"$220,728.00","$195,433.00","$1,744.94","$27,018.39"
IAH - SNA,56093103045,I-SNA-SBA-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/56093103045,https://www.airlines-manager.com/aircraft/show/119525229,3:45,10:59,272,"$423,610.00","$394,459.00","$1,450.22","$54,533.50"
IAH - SNA,56107731548,I-SNA-SBA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/56107731548,https://www.airlines-manager.com/aircraft/show/119525225,11:00,18:14,272,"$423,610.00","$394,459.00","$1,450.22","$54,533.50"
IAH - SNA,56122311568,I-SNA-SBA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/56122311568,https://www.airlines-manager.com/aircraft/show/119525227,18:00,1:14,272,"$423,610.00","$394,459.00","$1,450.22","$54,533.50"
IAH - SNA,56125474114,I-SNA-SBA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/56125474114,https://www.airlines-manager.com/aircraft/show/119525228,20:00,3:14,272,"$423,610.00","$394,459.00","$1,450.22","$54,533.50"
IAH - SRQ,56084270564,I-ILM-SRQ-3,A321-200,https://www.airlines-manager.com/network/showline/50666456,https://www.airlines-manager.com/network/showflight/56084270564,https://www.airlines-manager.com/aircraft/show/120452416,1:00,6:14,310,"$332,420.00","$301,728.00",$973.32,"$57,655.03"
IAH - SRQ,56103538631,I-ILM-SRQ-2,A321-200,https://www.airlines-manager.com/network/showline/50666456,https://www.airlines-manager.com/network/showflight/56103538631,https://www.airlines-manager.com/aircraft/show/120452417,9:00,14:14,310,"$332,420.00","$301,728.00",$973.32,"$57,655.03"
IAH - SRQ,56115475689,I-ILM-SRQ-1,A321-200,https://www.airlines-manager.com/network/showline/50666456,https://www.airlines-manager.com/network/showflight/56115475689,https://www.airlines-manager.com/aircraft/show/120452418,14:15,19:29,310,"$332,420.00","$301,728.00",$973.32,"$57,655.03"
IAH - SRQ,56125474137,I-ILM-SRQ-4,A321-200,https://www.airlines-manager.com/network/showline/50666456,https://www.airlines-manager.com/network/showflight/56125474137,https://www.airlines-manager.com/aircraft/show/120452415,20:00,1:14,310,"$332,420.00","$301,728.00",$973.32,"$57,655.03"
IAH - STL,56084270584,I-CLE-STL-4,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/56084270584,https://www.airlines-manager.com/aircraft/show/88725601,1:15,5:59,310,"$300,923.00","$268,652.00",$866.62,"$56,757.46"
IAH - STL,56103538560,I-CLE-STL-3,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/56103538560,https://www.airlines-manager.com/aircraft/show/103600702,8:15,12:59,310,"$300,923.00","$268,652.00",$866.62,"$56,757.46"
IAH - STL,56115475633,I-CLE-STL-2,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/56115475633,https://www.airlines-manager.com/aircraft/show/103600701,14:00,18:44,310,"$300,923.00","$268,652.00",$866.62,"$56,757.46"
IAH - STL,56115475634,I-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/56115475634,https://www.airlines-manager.com/aircraft/show/96990010,15:00,19:44,112,"$143,002.00","$122,472.00","$1,093.50","$25,874.37"
IAH - STL,56128543774,I-CLE-STL-1,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/56128543774,https://www.airlines-manager.com/aircraft/show/103600700,20:15,0:59,310,"$300,923.00","$268,652.00",$866.62,"$56,757.46"
IAH - STL,56131084806,I-CLE-STL-5 B,A319-100,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/56131084806,https://www.airlines-manager.com/aircraft/show/110582844,21:45,2:29,198,"$228,609.00","$202,763.00","$1,024.06","$42,837.25"
IAH - SYR,56084270450,I-SYR-ROC-2,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/56084270450,https://www.airlines-manager.com/aircraft/show/119525223,0:15,7:44,320,"$476,176.00","$431,891.00","$1,349.66","$57,713.72"
IAH - SYR,56107731609,I-SYR-ROC-1,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/56107731609,https://www.airlines-manager.com/aircraft/show/119525224,11:00,18:29,320,"$476,176.00","$431,891.00","$1,349.66","$57,713.72"
IAH - SYR,56112079151,I-SYR-ROC-4,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/56112079151,https://www.airlines-manager.com/aircraft/show/119525221,12:00,19:29,320,"$476,176.00","$431,891.00","$1,349.66","$57,713.72"
IAH - SYR,56122311479,I-SYR-ROC-3,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/56122311479,https://www.airlines-manager.com/aircraft/show/119525222,17:00,0:29,320,"$476,176.00","$431,891.00","$1,349.66","$57,713.72"
IAH - SYR,56125474066,I-SYR-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/56125474066,https://www.airlines-manager.com/aircraft/show/119525249,19:15,2:44,112,"$225,013.00","$198,807.00","$1,775.06","$26,566.64"
IAH - TPA,56093103123,I-SLC-CLT-1,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/56093103123,https://www.airlines-manager.com/aircraft/show/93094699,4:15,9:29,310,"$327,531.00","$292,309.00",$942.93,"$55,855.22"
IAH - TPA,56096590165,I-SLC-CLT-5,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/56096590165,https://www.airlines-manager.com/aircraft/show/93094695,6:15,11:29,310,"$327,531.00","$292,309.00",$942.93,"$55,855.22"
IAH - TPA,56103828484,I-SLC-CLT-4,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/56103828484,https://www.airlines-manager.com/aircraft/show/93094696,10:00,15:14,310,"$327,531.00","$292,309.00",$942.93,"$55,855.22"
IAH - TPA,56118925487,I-SLC-CLT-3,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/56118925487,https://www.airlines-manager.com/aircraft/show/93094697,15:45,20:59,310,"$327,531.00","$292,309.00",$942.93,"$55,855.22"
IAH - TPA,56128543982,I-SLC-CLT-2,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/56128543982,https://www.airlines-manager.com/aircraft/show/93094698,21:30,2:44,310,"$327,531.00","$292,309.00",$942.93,"$55,855.22"
IAH - TPA,56133285062,I-SLC-CLT-6,ERJ-175,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/56133285062,https://www.airlines-manager.com/aircraft/show/93100455,23:30,4:44,112,"$155,657.00","$133,151.00","$1,188.85","$25,442.87"
IAH - TUL,56084270495,I-BTV-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/56084270495,https://www.airlines-manager.com/aircraft/show/82543907,0:30,4:14,112,"$93,962.00","$77,748.00",$694.18,"$20,825.36"
IAH - TUL,56093103036,I-BTV-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/56093103036,https://www.airlines-manager.com/aircraft/show/114373409,3:30,7:14,310,"$203,562.00","$177,791.00",$573.52,"$47,622.59"
IAH - TUL,56103828421,I-BTV-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/56103828421,https://www.airlines-manager.com/aircraft/show/114373410,9:45,13:29,310,"$203,562.00","$177,791.00",$573.52,"$47,622.59"
IAH - TUL,56115475761,I-BTV-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/56115475761,https://www.airlines-manager.com/aircraft/show/113994196,15:00,18:44,310,"$203,562.00","$177,791.00",$573.52,"$47,622.59"
IAH - TUL,56128543773,I-BTV-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/56128543773,https://www.airlines-manager.com/aircraft/show/86385103,20:15,23:59,310,"$203,562.00","$177,791.00",$573.52,"$47,622.59"
IAH - TUS,56096590107,I-PIT-RDU-1,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/56096590107,https://www.airlines-manager.com/aircraft/show/100684074,5:30,11:14,310,"$360,113.00","$326,034.00","$1,051.72","$56,866.40"
IAH - TUS,56107731523,I-PIT-RDU-5 B,A319-100,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/56107731523,https://www.airlines-manager.com/aircraft/show/110582845,10:15,15:59,198,"$273,000.00","$245,697.00","$1,240.89","$42,854.13"
IAH - TUS,56107731524,I-PIT-RDU-4,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/56107731524,https://www.airlines-manager.com/aircraft/show/100684071,11:30,17:14,310,"$360,113.00","$326,034.00","$1,051.72","$56,866.40"
IAH - TUS,56122311483,I-PIT-RDU-3,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/56122311483,https://www.airlines-manager.com/aircraft/show/100684072,17:00,22:44,310,"$360,113.00","$326,034.00","$1,051.72","$56,866.40"
IAH - TUS,56133285030,I-PIT-RDU-2,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/56133285030,https://www.airlines-manager.com/aircraft/show/100684073,23:15,4:59,310,"$360,113.00","$326,034.00","$1,051.72","$56,866.40"
IAH - TYS,56084270701,I-GRR-MSN-2,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/56084270701,https://www.airlines-manager.com/aircraft/show/117273347,2:15,7:14,310,"$326,466.00","$296,307.00",$955.83,"$59,459.60"
IAH - TYS,56103538592,I-GRR-MSN-1,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/56103538592,https://www.airlines-manager.com/aircraft/show/117273348,8:30,13:29,310,"$326,466.00","$296,307.00",$955.83,"$59,459.60"
IAH - TYS,56107731646,I-GRR-MSN-4,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/56107731646,https://www.airlines-manager.com/aircraft/show/117273345,11:00,15:59,310,"$326,466.00","$296,307.00",$955.83,"$59,459.60"
IAH - TYS,56128543777,I-GRR-MSN-3,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/56128543777,https://www.airlines-manager.com/aircraft/show/117273346,20:15,1:14,310,"$326,466.00","$296,307.00",$955.83,"$59,459.60"
IAH - UIO,56084270494,I-84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/56084270494,https://www.airlines-manager.com/aircraft/show/89124076,0:30,11:14,932,"$1,803,944.00","$1,648,550.00","$1,768.83","$153,591.61"
IAH - UIO,56112079328,I-84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/56112079328,https://www.airlines-manager.com/aircraft/show/88905141,13:15,23:59,932,"$1,803,944.00","$1,648,550.00","$1,768.83","$153,591.61"
IAH - YEG,56084270605,I-YEG-BUR-5,A321neo,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/56084270605,https://www.airlines-manager.com/aircraft/show/117273340,1:30,10:44,338,"$643,713.00","$597,097.00","$1,766.56","$64,667.55"
IAH - YEG,56103538591,I-YEG-BUR-2,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/56103538591,https://www.airlines-manager.com/aircraft/show/117273343,8:30,17:44,310,"$594,387.00","$545,454.00","$1,759.53","$59,074.44"
IAH - YEG,56107731645,I-YEG-BUR-1,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/56107731645,https://www.airlines-manager.com/aircraft/show/117273344,11:00,20:14,310,"$594,387.00","$545,454.00","$1,759.53","$59,074.44"
IAH - YEG,56122311518,I-YEG-BUR-4,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/56122311518,https://www.airlines-manager.com/aircraft/show/117273341,17:15,2:29,310,"$594,387.00","$545,454.00","$1,759.53","$59,074.44"
IAH - YEG,56122311519,I-YEG-BUR-3,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/56122311519,https://www.airlines-manager.com/aircraft/show/117273342,18:00,3:14,310,"$594,387.00","$545,454.00","$1,759.53","$59,074.44"
IAH - YOW,56093102990,I-YOW-SJD-2,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/56093102990,https://www.airlines-manager.com/aircraft/show/113114108,3:15,11:14,320,"$510,982.00","$463,325.00","$1,447.89","$58,036.53"
IAH - YOW,56099991673,I-YOW-SJD-1,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/56099991673,https://www.airlines-manager.com/aircraft/show/114266974,8:00,15:59,320,"$510,982.00","$463,325.00","$1,447.89","$58,036.53"
IAH - YOW,56112079321,I-YOW-SJD-5,ERJ-175,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/56112079321,https://www.airlines-manager.com/aircraft/show/105099862,13:00,20:59,112,"$239,404.00","$211,199.00","$1,885.71","$26,454.99"
IAH - YOW,56122311555,I-YOW-SJD-4,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/56122311555,https://www.airlines-manager.com/aircraft/show/114266975,17:45,1:44,320,"$510,982.00","$463,325.00","$1,447.89","$58,036.53"
IAH - YOW,56128543957,I-YOW-SJD-3,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/56128543957,https://www.airlines-manager.com/aircraft/show/113250059,21:15,5:14,320,"$510,982.00","$463,325.00","$1,447.89","$58,036.53"
IAH - YUL,56084270498,I-YYC-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/56084270498,https://www.airlines-manager.com/aircraft/show/114266980,0:45,8:44,400,"$685,428.00","$627,487.00","$1,568.72","$78,599.62"
IAH - YUL,56084270499,I-YYC-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/56084270499,https://www.airlines-manager.com/aircraft/show/114266979,2:00,9:59,400,"$685,428.00","$627,487.00","$1,568.72","$78,599.62"
IAH - YUL,56112079126,I-YYC-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/56112079126,https://www.airlines-manager.com/aircraft/show/114266978,12:00,19:59,400,"$685,428.00","$627,487.00","$1,568.72","$78,599.62"
IAH - YUL,56128543813,I-YYC-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/56128543813,https://www.airlines-manager.com/aircraft/show/114266977,20:45,4:44,400,"$685,428.00","$627,487.00","$1,568.72","$78,599.62"
IAH - YVR,56084270536,I-MEX-YYZ-1,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/56084270536,https://www.airlines-manager.com/aircraft/show/97076946,1:00,10:29,400,"$777,801.00","$709,739.00","$1,774.35","$74,840.67"
IAH - YVR,56093103077,I-MEX-YYZ-4,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/56093103077,https://www.airlines-manager.com/aircraft/show/97076943,4:00,13:29,400,"$777,801.00","$709,739.00","$1,774.35","$74,840.67"
IAH - YVR,56112079226,I-MEX-YYZ-3,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/56112079226,https://www.airlines-manager.com/aircraft/show/97076944,13:00,22:29,400,"$777,801.00","$709,739.00","$1,774.35","$74,840.67"
IAH - YVR,56118925559,I-MEX-YYZ-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/56118925559,https://www.airlines-manager.com/aircraft/show/97026605,16:00,1:44,136,"$286,977.00","$251,069.00","$1,846.10","$25,794.76"
IAH - YVR,56125474121,I-MEX-YYZ-2,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/56125474121,https://www.airlines-manager.com/aircraft/show/97076945,20:00,5:29,400,"$777,801.00","$709,739.00","$1,774.35","$74,840.67"
IAH - YVR,56131084923,I-MEX-YYZ-5,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/56131084923,https://www.airlines-manager.com/aircraft/show/97076942,23:00,8:29,400,"$777,801.00","$709,739.00","$1,774.35","$74,840.67"
IAH - YYC,56084270573,I-YYC-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/56084270573,https://www.airlines-manager.com/aircraft/show/114266978,1:15,9:59,400,"$746,053.00","$683,301.00","$1,708.25","$78,240.57"
IAH - YYC,56112079125,I-YYC-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/56112079125,https://www.airlines-manager.com/aircraft/show/114266977,12:00,20:44,400,"$746,053.00","$683,301.00","$1,708.25","$78,240.57"
IAH - YYC,56118925516,I-YYC-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/56118925516,https://www.airlines-manager.com/aircraft/show/114266980,16:00,0:44,400,"$746,053.00","$683,301.00","$1,708.25","$78,240.57"
IAH - YYC,56122311507,I-YYC-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/56122311507,https://www.airlines-manager.com/aircraft/show/114266979,17:15,1:59,400,"$746,053.00","$683,301.00","$1,708.25","$78,240.57"
IAH - YYZ,56093103021,I-MEX-YYZ-3,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/56093103021,https://www.airlines-manager.com/aircraft/show/97076944,3:30,10:29,400,"$574,924.00","$516,276.00","$1,290.69","$73,929.74"
IAH - YYZ,56099991594,I-MEX-YYZ-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/56099991594,https://www.airlines-manager.com/aircraft/show/97026605,6:45,13:44,136,"$212,224.00","$181,681.00","$1,335.89","$26,016.37"
IAH - YYZ,56112079227,I-MEX-YYZ-2,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/56112079227,https://www.airlines-manager.com/aircraft/show/97076945,13:00,19:59,400,"$574,924.00","$516,276.00","$1,290.69","$73,929.74"
IAH - YYZ,56118925514,I-MEX-YYZ-5,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/56118925514,https://www.airlines-manager.com/aircraft/show/97076942,16:00,22:59,400,"$574,924.00","$516,276.00","$1,290.69","$73,929.74"
IAH - YYZ,56122311575,I-MEX-YYZ-1,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/56122311575,https://www.airlines-manager.com/aircraft/show/97076946,18:00,0:59,400,"$574,924.00","$516,276.00","$1,290.69","$73,929.74"
IAH - YYZ,56128543923,I-MEX-YYZ-4,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/56128543923,https://www.airlines-manager.com/aircraft/show/97076943,21:00,3:59,400,"$574,924.00","$516,276.00","$1,290.69","$73,929.74"
IAH - ROC,54571726728,IAH-SYR-ROC 4,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/54571726728,https://www.airlines-manager.com/aircraft/show/119525221,19:30,2:44,320,"$461,250.00","$418,447.00","$1,307.65","$57,849.82"
IAH - SAN,54536069563,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/54536069563,https://www.airlines-manager.com/aircraft/show/98578921,0:45,7:59,320,"$452,539.00","$405,198.00","$1,266.24","$56,018.16"
IAH - SAN,54536069564,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/54536069564,https://www.airlines-manager.com/aircraft/show/98578922,4:15,11:29,320,"$452,539.00","$405,198.00","$1,266.24","$56,018.16"
IAH - SAN,54562128402,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/54562128402,https://www.airlines-manager.com/aircraft/show/98578923,15:00,22:14,320,"$452,539.00","$405,198.00","$1,266.24","$56,018.16"
IAH - SAN,54571726660,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/54571726660,https://www.airlines-manager.com/aircraft/show/98578920,18:00,1:14,320,"$452,539.00","$405,198.00","$1,266.24","$56,018.16"
IAH - SAN,54571726661,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/54571726661,https://www.airlines-manager.com/aircraft/show/98578924,19:45,2:59,320,"$452,539.00","$405,198.00","$1,266.24","$56,018.16"
IAH - SAT,54551622508,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/54551622508,https://www.airlines-manager.com/aircraft/show/99093332,9:45,12:29,320,"$119,393.00","$93,029.00",$290.72,"$34,035.00"
IAH - SAT,54562128302,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/54562128302,https://www.airlines-manager.com/aircraft/show/99093333,14:00,16:44,320,"$119,393.00","$93,029.00",$290.72,"$34,035.00"
IAH - SAT,54571726662,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/54571726662,https://www.airlines-manager.com/aircraft/show/99093334,18:00,20:44,320,"$119,393.00","$93,029.00",$290.72,"$34,035.00"
IAH - SAT,54580945223,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/54580945223,https://www.airlines-manager.com/aircraft/show/99093335,23:30,2:14,320,"$119,393.00","$93,029.00",$290.72,"$34,035.00"
IAH - SAV,54536069783,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/54536069783,https://www.airlines-manager.com/aircraft/show/110424758,2:00,7:29,320,"$342,511.00","$306,705.00",$958.45,"$55,934.04"
IAH - SAV,54551622421,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/54551622421,https://www.airlines-manager.com/aircraft/show/110424759,8:30,13:59,320,"$342,511.00","$306,705.00",$958.45,"$55,934.04"
IAH - SAV,54556941148,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/54556941148,https://www.airlines-manager.com/aircraft/show/110424760,13:00,18:29,320,"$342,511.00","$306,705.00",$958.45,"$55,934.04"
IAH - SAV,54575909705,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/54575909705,https://www.airlines-manager.com/aircraft/show/110424761,21:45,3:14,320,"$342,511.00","$306,705.00",$958.45,"$55,934.04"
IAH - SJD,54536069761,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/54536069761,https://www.airlines-manager.com/aircraft/show/114266975,1:45,7:44,320,"$380,962.00","$342,124.00","$1,069.14","$57,179.50"
IAH - SJD,54536069762,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/54536069762,https://www.airlines-manager.com/aircraft/show/113250059,5:15,11:14,320,"$380,962.00","$342,124.00","$1,069.14","$57,179.50"
IAH - SJD,54556941082,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/54556941082,https://www.airlines-manager.com/aircraft/show/113114108,12:00,17:59,320,"$380,962.00","$342,124.00","$1,069.14","$57,179.50"
IAH - SJD,54567120310,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/54567120310,https://www.airlines-manager.com/aircraft/show/114266974,16:00,21:59,320,"$380,962.00","$342,124.00","$1,069.14","$57,179.50"
IAH - SMF,54536069802,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/54536069802,https://www.airlines-manager.com/aircraft/show/99093335,2:15,10:29,320,"$529,867.00","$480,638.00","$1,501.99","$58,377.09"
IAH - SMF,54556941191,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/54556941191,https://www.airlines-manager.com/aircraft/show/99093332,13:00,21:14,320,"$529,867.00","$480,638.00","$1,501.99","$58,377.09"
IAH - SMF,54567120382,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/54567120382,https://www.airlines-manager.com/aircraft/show/99093333,16:45,0:59,320,"$529,867.00","$480,638.00","$1,501.99","$58,377.09"
IAH - SMF,54575909603,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/54575909603,https://www.airlines-manager.com/aircraft/show/99093334,20:45,4:59,320,"$529,867.00","$480,638.00","$1,501.99","$58,377.09"
IAH - SYR,54536069506,IAH-SYR-ROC 2,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/54536069506,https://www.airlines-manager.com/aircraft/show/119525223,0:15,7:44,320,"$474,124.00","$429,839.00","$1,343.25","$57,439.51"
IAH - SYR,54556940913,IAH-SYR-ROC 1,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/54556940913,https://www.airlines-manager.com/aircraft/show/119525224,11:00,18:29,320,"$474,124.00","$429,839.00","$1,343.25","$57,439.51"
IAH - SYR,54556940914,IAH-SYR-ROC 4,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/54556940914,https://www.airlines-manager.com/aircraft/show/119525221,12:00,19:29,320,"$474,124.00","$429,839.00","$1,343.25","$57,439.51"
IAH - SYR,54567120415,IAH-SYR-ROC 3,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/54567120415,https://www.airlines-manager.com/aircraft/show/119525222,17:00,0:29,320,"$474,124.00","$429,839.00","$1,343.25","$57,439.51"
IAH - YOW,54536069889,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/54536069889,https://www.airlines-manager.com/aircraft/show/113114108,3:15,11:14,320,"$508,793.00","$461,136.00","$1,441.05","$57,762.34"
IAH - YOW,54545804760,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/54545804760,https://www.airlines-manager.com/aircraft/show/114266974,8:00,15:59,320,"$508,793.00","$461,136.00","$1,441.05","$57,762.34"
IAH - YOW,54571726658,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/54571726658,https://www.airlines-manager.com/aircraft/show/114266975,17:45,1:44,320,"$508,793.00","$461,136.00","$1,441.05","$57,762.34"
IAH - YOW,54575909647,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/54575909647,https://www.airlines-manager.com/aircraft/show/113250059,21:15,5:14,320,"$508,793.00","$461,136.00","$1,441.05","$57,762.34"
MIA - ABQ,56084270587,M-IAD-TUS-1,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/56084270587,https://www.airlines-manager.com/aircraft/show/97556721,1:15,9:59,310,"$549,643.00","$501,802.00","$1,618.72","$57,458.24"
MIA - ABQ,56093103124,M-IAD-TUS-4,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/56093103124,https://www.airlines-manager.com/aircraft/show/97556718,4:15,12:59,310,"$549,643.00","$501,802.00","$1,618.72","$57,458.24"
MIA - ABQ,56103828488,M-IAD-TUS-3,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/56103828488,https://www.airlines-manager.com/aircraft/show/97556719,10:00,18:44,310,"$549,643.00","$501,802.00","$1,618.72","$57,458.24"
MIA - ABQ,56125474080,M-IAD-TUS-2,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/56125474080,https://www.airlines-manager.com/aircraft/show/97556720,19:30,4:14,310,"$549,643.00","$501,802.00","$1,618.72","$57,458.24"
MIA - ABQ,56131084885,M-IAD-TUS-5,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/56131084885,https://www.airlines-manager.com/aircraft/show/97556716,22:30,7:14,310,"$549,643.00","$501,802.00","$1,618.72","$57,458.24"
MIA - ACC,56115475694,M-84B-2 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/56115475694,https://www.airlines-manager.com/aircraft/show/106676226,14:15,11:59,962,"$3,584,617.00","$3,274,304.00","$3,403.64","$150,658.16"
MIA - ACC,56131084919,M-84B-4 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/56131084919,https://www.airlines-manager.com/aircraft/show/106676228,22:45,20:29,962,"$3,584,617.00","$3,274,304.00","$3,403.64","$150,658.16"
MIA - ALB,56093103026,M-DSM-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/56093103026,https://www.airlines-manager.com/aircraft/show/113101233,3:30,10:14,320,"$429,480.00","$388,106.00","$1,212.83","$57,639.50"
MIA - ALB,56112079261,M-DSM-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/56112079261,https://www.airlines-manager.com/aircraft/show/113101230,13:00,19:44,320,"$429,480.00","$388,106.00","$1,212.83","$57,639.50"
MIA - ALB,56118925560,M-DSM-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/56118925560,https://www.airlines-manager.com/aircraft/show/100049776,16:00,22:59,112,"$202,975.00","$178,712.00","$1,595.64","$25,591.22"
MIA - ALB,56128543769,M-DSM-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/56128543769,https://www.airlines-manager.com/aircraft/show/111064081,20:15,2:59,320,"$429,480.00","$388,106.00","$1,212.83","$57,639.50"
MIA - ALB,56133285028,M-DSM-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/56133285028,https://www.airlines-manager.com/aircraft/show/113101228,23:15,5:59,320,"$429,480.00","$388,106.00","$1,212.83","$57,639.50"
MIA - ALG,56122311502,M-84B-7 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/56122311502,https://www.airlines-manager.com/aircraft/show/106676231,17:00,12:29,962,"$3,254,925.00","$2,969,393.00","$3,086.69","$152,406.83"
MIA - ALG,56128543807,M-84B-5 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/56128543807,https://www.airlines-manager.com/aircraft/show/106676229,20:30,15:59,962,"$3,254,925.00","$2,969,393.00","$3,086.69","$152,406.83"
MIA - ANU,56096590179,M-ANU-SXM-3 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/56096590179,https://www.airlines-manager.com/aircraft/show/110114297,6:30,13:44,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ANU,56103538594,M-ANU-SXM-4 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/56103538594,https://www.airlines-manager.com/aircraft/show/110114298,8:30,15:44,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ANU,56112079177,M-ANU-SXM-1 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/56112079177,https://www.airlines-manager.com/aircraft/show/110114295,12:00,19:14,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ANU,56112079178,M-ANU-SXM-2 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/56112079178,https://www.airlines-manager.com/aircraft/show/110114296,13:00,20:14,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ANU,56118925588,M-ANU-SXM-6 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/56118925588,https://www.airlines-manager.com/aircraft/show/110114300,16:30,23:44,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ANU,56133285061,M-ANU-SXM-5 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/56133285061,https://www.airlines-manager.com/aircraft/show/110114299,23:30,6:44,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ATL,56112079123,M-LAX-DEN-4,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/56112079123,https://www.airlines-manager.com/aircraft/show/91126652,12:00,16:29,400,"$366,475.00","$302,230.00",$755.58,"$67,411.90"
MIA - ATL,56112079124,M-LAX-DEN-2,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/56112079124,https://www.airlines-manager.com/aircraft/show/91126650,13:00,17:29,400,"$366,475.00","$302,230.00",$755.58,"$67,411.90"
MIA - ATL,56125474067,M-LAX-DEN-1,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/56125474067,https://www.airlines-manager.com/aircraft/show/91126649,19:30,23:59,400,"$366,475.00","$302,230.00",$755.58,"$67,411.90"
MIA - ATL,56128543922,M-LAX-DEN-3,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/56128543922,https://www.airlines-manager.com/aircraft/show/91126651,21:00,1:29,400,"$366,475.00","$302,230.00",$755.58,"$67,411.90"
MIA - AUA,56084270749,M-BGI-CUR-1,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/56084270749,https://www.airlines-manager.com/aircraft/show/107121795,3:00,9:29,320,"$405,459.00","$365,639.00","$1,142.62","$56,396.76"
MIA - AUA,56093103148,M-BGI-CUR-4,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/56093103148,https://www.airlines-manager.com/aircraft/show/107121798,4:30,10:59,320,"$405,459.00","$365,639.00","$1,142.62","$56,396.76"
MIA - AUA,56107731592,M-BGI-CUR-3,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/56107731592,https://www.airlines-manager.com/aircraft/show/107121797,11:00,17:29,320,"$405,459.00","$365,639.00","$1,142.62","$56,396.76"
MIA - AUA,56122311552,M-BGI-CUR-2,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/56122311552,https://www.airlines-manager.com/aircraft/show/107121796,17:45,0:14,320,"$405,459.00","$365,639.00","$1,142.62","$56,396.76"
MIA - AUA,56131084798,M-BGI-CUR-5,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/56131084798,https://www.airlines-manager.com/aircraft/show/107121799,21:45,4:14,243,"$317,044.00","$280,166.00","$1,152.95","$43,213.26"
MIA - AUS,56084270729,M-AUS-PIT-2,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/56084270729,https://www.airlines-manager.com/aircraft/show/99920625,2:45,9:14,320,"$403,957.00","$360,258.00","$1,125.81","$55,566.79"
MIA - AUS,56103828451,M-AUS-PIT-1,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/56103828451,https://www.airlines-manager.com/aircraft/show/99920626,10:00,16:29,320,"$403,957.00","$360,258.00","$1,125.81","$55,566.79"
MIA - AUS,56115475675,M-AUS-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/56115475675,https://www.airlines-manager.com/aircraft/show/82323689,14:00,20:29,112,"$190,525.00","$165,466.00","$1,477.38","$25,521.75"
MIA - AUS,56115475676,M-AUS-PIT-4,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/56115475676,https://www.airlines-manager.com/aircraft/show/99920623,14:45,21:14,320,"$403,957.00","$360,258.00","$1,125.81","$55,566.79"
MIA - AUS,56128543816,M-AUS-PIT-3,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/56128543816,https://www.airlines-manager.com/aircraft/show/99920624,20:45,3:14,320,"$403,957.00","$360,258.00","$1,125.81","$55,566.79"
MIA - BDA,56084270761,M-PUJ-BDA-1 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/56084270761,https://www.airlines-manager.com/aircraft/show/104034457,3:00,9:14,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDA,56093103069,M-PUJ-BDA-3 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/56093103069,https://www.airlines-manager.com/aircraft/show/104034459,3:45,9:59,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDA,56103828512,M-PUJ-BDA-4 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/56103828512,https://www.airlines-manager.com/aircraft/show/104034460,10:00,16:14,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDA,56107731649,M-PUJ-BDA-6 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/56107731649,https://www.airlines-manager.com/aircraft/show/99326789,11:00,17:14,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDA,56118925493,M-PUJ-BDA-5 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/56118925493,https://www.airlines-manager.com/aircraft/show/104034461,15:45,21:59,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDA,56128543967,M-PUJ-BDA-2 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/56128543967,https://www.airlines-manager.com/aircraft/show/104034458,21:15,3:29,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDL,56084270751,M-BDL-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/56084270751,https://www.airlines-manager.com/aircraft/show/107763565,3:00,9:44,320,"$428,052.00","$385,771.00","$1,205.53","$57,292.72"
MIA - BDL,56099991684,M-BDL-SAT-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/56099991684,https://www.airlines-manager.com/aircraft/show/107467213,8:00,14:44,112,"$201,310.00","$176,683.00","$1,577.53","$26,240.05"
MIA - BDL,56115475574,M-BDL-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/56115475574,https://www.airlines-manager.com/aircraft/show/107763561,13:45,20:29,320,"$428,052.00","$385,771.00","$1,205.53","$57,292.72"
MIA - BDL,56115475575,M-BDL-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/56115475575,https://www.airlines-manager.com/aircraft/show/107763566,14:00,20:44,320,"$428,052.00","$385,771.00","$1,205.53","$57,292.72"
MIA - BDL,56128543799,M-BDL-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/56128543799,https://www.airlines-manager.com/aircraft/show/107763562,20:30,3:14,320,"$428,052.00","$385,771.00","$1,205.53","$57,292.72"
MIA - BFF,56084270512,M-PSP-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/56084270512,https://www.airlines-manager.com/aircraft/show/116789634,0:45,9:29,320,"$556,654.00","$506,491.00","$1,582.78","$57,995.15"
MIA - BFF,56084270513,M-PSP-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/56084270513,https://www.airlines-manager.com/aircraft/show/116789632,1:00,9:44,320,"$556,654.00","$506,491.00","$1,582.78","$57,995.15"
MIA - BFF,56103828467,M-PSP-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/56103828467,https://www.airlines-manager.com/aircraft/show/116789633,10:00,18:44,320,"$556,654.00","$506,491.00","$1,582.78","$57,995.15"
MIA - BFF,56112079265,M-PSP-BFF-5,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/56112079265,https://www.airlines-manager.com/aircraft/show/116789630,13:00,21:44,320,"$556,654.00","$506,491.00","$1,582.78","$57,995.15"
MIA - BFF,56128543820,M-PSP-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/56128543820,https://www.airlines-manager.com/aircraft/show/116789631,20:45,5:29,320,"$556,654.00","$506,491.00","$1,582.78","$57,995.15"
MIA - BGI,56084270730,M-BGI-CUR-2,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/56084270730,https://www.airlines-manager.com/aircraft/show/107121796,2:45,10:59,320,"$518,059.00","$469,235.00","$1,466.36","$56,992.11"
MIA - BGI,56099991583,M-BGI-CUR-5,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/56099991583,https://www.airlines-manager.com/aircraft/show/107121799,6:45,14:59,320,"$518,059.00","$469,235.00","$1,466.36","$56,992.11"
MIA - BGI,56112079135,M-BGI-CUR-1,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/56112079135,https://www.airlines-manager.com/aircraft/show/107121795,12:00,20:14,320,"$518,059.00","$469,235.00","$1,466.36","$56,992.11"
MIA - BGI,56112079136,M-BGI-CUR-4,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/56112079136,https://www.airlines-manager.com/aircraft/show/107121798,13:30,21:44,320,"$518,059.00","$469,235.00","$1,466.36","$56,992.11"
MIA - BGI,56125474126,M-BGI-CUR-3,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/56125474126,https://www.airlines-manager.com/aircraft/show/107121797,20:00,4:14,320,"$518,059.00","$469,235.00","$1,466.36","$56,992.11"
MIA - BHM,56093103066,M-CID-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/56093103066,https://www.airlines-manager.com/aircraft/show/116789651,3:45,8:29,310,"$302,720.00","$273,542.00",$882.39,"$57,790.56"
MIA - BHM,56103828500,M-CID-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/56103828500,https://www.airlines-manager.com/aircraft/show/116789652,10:00,14:44,310,"$302,720.00","$273,542.00",$882.39,"$57,790.56"
MIA - BHM,56122311517,M-CID-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/56122311517,https://www.airlines-manager.com/aircraft/show/116789653,17:15,21:59,310,"$302,720.00","$273,542.00",$882.39,"$57,790.56"
MIA - BHM,56131084915,M-CID-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/56131084915,https://www.airlines-manager.com/aircraft/show/116789650,22:45,3:29,310,"$302,720.00","$273,542.00",$882.39,"$57,790.56"
MIA - BIL,56103828464,M-BIL-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/56103828464,https://www.airlines-manager.com/aircraft/show/116789629,10:00,20:14,320,"$634,212.00","$578,720.00","$1,808.50","$56,552.44"
MIA - BIL,56112079148,M-BIL-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/56112079148,https://www.airlines-manager.com/aircraft/show/116789628,12:00,22:14,320,"$634,212.00","$578,720.00","$1,808.50","$56,552.44"
MIA - BIL,56115475615,M-BIL-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/56115475615,https://www.airlines-manager.com/aircraft/show/116789627,14:00,0:14,320,"$634,212.00","$578,720.00","$1,808.50","$56,552.44"
MIA - BIL,56128543977,M-BIL-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/56128543977,https://www.airlines-manager.com/aircraft/show/116789626,21:30,7:44,320,"$634,212.00","$578,720.00","$1,808.50","$56,552.44"
MIA - BIL,56133285090,M-BIL-BZN-5,ERJ-175,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/56133285090,https://www.airlines-manager.com/aircraft/show/116042637,23:45,9:59,112,"$298,004.00","$264,192.00","$2,358.86","$25,816.81"
MIA - BNA,56084270527,M-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/56084270527,https://www.airlines-manager.com/aircraft/show/103534663,0:45,5:59,112,"$157,714.00","$136,236.00","$1,216.39","$26,032.36"
MIA - BNA,56084270528,M-BOI-BNA-4,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/56084270528,https://www.airlines-manager.com/aircraft/show/103775657,1:15,6:29,320,"$332,050.00","$293,799.00",$918.12,"$56,139.94"
MIA - BNA,56093103164,M-BOI-BNA-3,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/56093103164,https://www.airlines-manager.com/aircraft/show/104020880,4:45,9:59,320,"$332,050.00","$293,799.00",$918.12,"$56,139.94"
MIA - BNA,56103828456,M-BOI-BNA-2,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/56103828456,https://www.airlines-manager.com/aircraft/show/104022609,10:00,15:14,320,"$332,050.00","$293,799.00",$918.12,"$56,139.94"
MIA - BNA,56112079187,M-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/56112079187,https://www.airlines-manager.com/aircraft/show/103534663,12:00,17:14,112,"$157,714.00","$136,236.00","$1,216.39","$26,032.36"
MIA - BNA,56128543955,M-BOI-BNA-1,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/56128543955,https://www.airlines-manager.com/aircraft/show/104133006,21:15,2:29,320,"$332,050.00","$293,799.00",$918.12,"$56,139.94"
MIA - BOI,56084270666,M-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/56084270666,https://www.airlines-manager.com/aircraft/show/106339154,1:45,12:59,198,"$525,442.00","$481,573.00","$2,432.19","$42,870.00"
MIA - BOI,56103828457,M-BOI-BNA-1,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/56103828457,https://www.airlines-manager.com/aircraft/show/104133006,10:00,21:14,320,"$698,526.00","$638,374.00","$1,994.92","$56,828.55"
MIA - BOI,56115475606,M-BOI-BNA-4,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/56115475606,https://www.airlines-manager.com/aircraft/show/103775657,14:00,1:14,320,"$698,526.00","$638,374.00","$1,994.92","$56,828.55"
MIA - BOI,56122311530,M-BOI-BNA-3,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/56122311530,https://www.airlines-manager.com/aircraft/show/104020880,17:30,4:44,320,"$698,526.00","$638,374.00","$1,994.92","$56,828.55"
MIA - BOI,56131084901,M-BOI-BNA-2,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/56131084901,https://www.airlines-manager.com/aircraft/show/104022609,22:45,9:59,320,"$698,526.00","$638,374.00","$1,994.92","$56,828.55"
MIA - BOS,56084270683,M-SJU-BOS-5,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/56084270683,https://www.airlines-manager.com/aircraft/show/91352059,2:00,8:59,310,"$445,815.00","$401,406.00","$1,294.86","$57,480.57"
MIA - BOS,56093103188,M-SJU-BOS-1,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/56093103188,https://www.airlines-manager.com/aircraft/show/91352063,5:00,11:59,310,"$445,815.00","$401,406.00","$1,294.86","$57,480.57"
MIA - BOS,56107731663,M-SJU-BOS-4,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/56107731663,https://www.airlines-manager.com/aircraft/show/91352060,11:15,18:14,310,"$445,815.00","$401,406.00","$1,294.86","$57,480.57"
MIA - BOS,56118925581,M-SJU-BOS-2,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/56118925581,https://www.airlines-manager.com/aircraft/show/91352062,16:30,23:29,310,"$445,815.00","$401,406.00","$1,294.86","$57,480.57"
MIA - BOS,56125474028,M-SJU-BOS-3,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/56125474028,https://www.airlines-manager.com/aircraft/show/91352061,19:00,1:59,310,"$445,815.00","$401,406.00","$1,294.86","$57,480.57"
MIA - BOS,56128543784,M-SJU-BOS-6 B,A319-100,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/56128543784,https://www.airlines-manager.com/aircraft/show/110582841,20:15,3:14,198,"$337,082.00","$301,501.00","$1,522.73","$43,174.37"
MIA - BTV,56084270752,M-DSM-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/56084270752,https://www.airlines-manager.com/aircraft/show/111064081,3:00,10:14,320,"$461,408.00","$418,536.00","$1,307.93","$57,862.12"
MIA - BTV,56103538605,M-DSM-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/56103538605,https://www.airlines-manager.com/aircraft/show/113101228,8:45,15:59,320,"$461,408.00","$418,536.00","$1,307.93","$57,862.12"
MIA - BTV,56112079262,M-DSM-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/56112079262,https://www.airlines-manager.com/aircraft/show/113101233,13:00,20:14,320,"$461,408.00","$418,536.00","$1,307.93","$57,862.12"
MIA - BTV,56125474096,M-DSM-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/56125474096,https://www.airlines-manager.com/aircraft/show/113101230,19:45,2:59,320,"$461,408.00","$418,536.00","$1,307.93","$57,862.12"
MIA - BTV,56131084943,M-DSM-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/56131084943,https://www.airlines-manager.com/aircraft/show/100049776,23:00,6:29,112,"$219,081.00","$193,710.00","$1,729.55","$25,885.52"
MIA - BUF,56084270750,M-BDL-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/56084270750,https://www.airlines-manager.com/aircraft/show/107763561,3:00,9:44,320,"$425,908.00","$384,093.00","$1,200.29","$57,043.51"
MIA - BUF,56093102988,M-BDL-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/56093102988,https://www.airlines-manager.com/aircraft/show/107763566,3:15,9:59,320,"$425,908.00","$384,093.00","$1,200.29","$57,043.51"
MIA - BUF,56107731595,M-BDL-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/56107731595,https://www.airlines-manager.com/aircraft/show/107763562,11:00,17:44,320,"$425,908.00","$384,093.00","$1,200.29","$57,043.51"
MIA - BUF,56122311533,M-BDL-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/56122311533,https://www.airlines-manager.com/aircraft/show/107763565,17:30,0:14,320,"$425,908.00","$384,093.00","$1,200.29","$57,043.51"
MIA - BUF,56128543969,M-BDL-SAT-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/56128543969,https://www.airlines-manager.com/aircraft/show/107467213,21:15,3:59,112,"$200,324.00","$175,956.00","$1,571.04","$26,132.08"
MIA - BUR,56084270742,M-BUR-PVD-4,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/56084270742,https://www.airlines-manager.com/aircraft/show/108834806,2:45,13:59,310,"$704,259.00","$651,354.00","$2,101.14","$57,984.04"
MIA - BUR,56107731634,M-BUR-PVD-1,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/56107731634,https://www.airlines-manager.com/aircraft/show/108834803,11:00,22:14,310,"$704,259.00","$651,354.00","$2,101.14","$57,984.04"
MIA - BUR,56115475646,M-BUR-PVD-3,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/56115475646,https://www.airlines-manager.com/aircraft/show/108834805,14:00,1:14,310,"$704,259.00","$651,354.00","$2,101.14","$57,984.04"
MIA - BUR,56125474145,M-BUR-PVD-5 B,A319-100,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/56125474145,https://www.airlines-manager.com/aircraft/show/108834807,20:00,7:14,198,"$528,191.00","$485,766.00","$2,453.36","$43,243.26"
MIA - BUR,56128543830,M-BUR-PVD-2,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/56128543830,https://www.airlines-manager.com/aircraft/show/108834804,20:45,7:59,310,"$704,259.00","$651,354.00","$2,101.14","$57,984.04"
MIA - BWI,56093103094,M-BWI-YYZ-4,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/56093103094,https://www.airlines-manager.com/aircraft/show/92153442,4:00,9:44,310,"$362,448.00","$324,139.00","$1,045.61","$56,535.87"
MIA - BWI,56096590148,M-BWI-YYZ-5,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/56096590148,https://www.airlines-manager.com/aircraft/show/92153439,6:00,11:44,310,"$362,448.00","$324,139.00","$1,045.61","$56,535.87"
MIA - BWI,56103828483,M-BWI-YYZ-1,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/56103828483,https://www.airlines-manager.com/aircraft/show/92153443,10:00,15:44,310,"$362,448.00","$324,139.00","$1,045.61","$56,535.87"
MIA - BWI,56112079284,M-BWI-YYZ-2,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/56112079284,https://www.airlines-manager.com/aircraft/show/92153440,13:00,18:44,310,"$362,448.00","$324,139.00","$1,045.61","$56,535.87"
MIA - BWI,56128543933,M-BWI-YYZ-3,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/56128543933,https://www.airlines-manager.com/aircraft/show/92153441,21:00,2:44,310,"$362,448.00","$324,139.00","$1,045.61","$56,535.87"
MIA - BWI,56131084940,M-BWI-YYZ-6 B,A319-100,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/56131084940,https://www.airlines-manager.com/aircraft/show/120519717,23:00,4:44,169,"$254,625.00","$224,800.00","$1,330.18","$39,209.30"
MIA - BZN,56084270449,M-BIL-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/56084270449,https://www.airlines-manager.com/aircraft/show/116789627,0:15,10:44,320,"$656,911.00","$600,715.00","$1,877.23","$57,301.91"
MIA - BZN,56107731601,M-BIL-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/56107731601,https://www.airlines-manager.com/aircraft/show/116789626,11:00,21:29,320,"$656,911.00","$600,715.00","$1,877.23","$57,301.91"
MIA - BZN,56112079324,M-BIL-BZN-5,ERJ-175,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/56112079324,https://www.airlines-manager.com/aircraft/show/116042637,13:00,23:44,112,"$309,244.00","$274,765.00","$2,453.26","$25,599.22"
MIA - BZN,56128543772,M-BIL-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/56128543772,https://www.airlines-manager.com/aircraft/show/116789629,20:15,6:44,320,"$656,911.00","$600,715.00","$1,877.23","$57,301.91"
MIA - BZN,56131084848,M-BIL-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/56131084848,https://www.airlines-manager.com/aircraft/show/116789628,22:15,8:44,320,"$656,911.00","$600,715.00","$1,877.23","$57,301.91"
MIA - CAK,56084270687,M-MHT-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/56084270687,https://www.airlines-manager.com/aircraft/show/115493370,2:00,8:14,310,"$385,091.00","$351,321.00","$1,133.29","$56,361.66"
MIA - CAK,56103538565,M-MHT-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/56103538565,https://www.airlines-manager.com/aircraft/show/115493371,8:15,14:29,310,"$385,091.00","$351,321.00","$1,133.29","$56,361.66"
MIA - CAK,56107731643,M-MHT-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/56107731643,https://www.airlines-manager.com/aircraft/show/115493372,11:00,17:14,310,"$385,091.00","$351,321.00","$1,133.29","$56,361.66"
MIA - CAK,56122311622,M-MHT-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/56122311622,https://www.airlines-manager.com/aircraft/show/114912307,18:00,0:14,112,"$181,775.00","$159,685.00","$1,425.76","$25,617.91"
MIA - CAK,56128543939,M-MHT-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/56128543939,https://www.airlines-manager.com/aircraft/show/115493373,21:00,3:14,276,"$360,018.00","$327,223.00","$1,185.59","$52,495.67"
MIA - CHS,56093102996,M-SDF-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/56093102996,https://www.airlines-manager.com/aircraft/show/94886626,3:15,7:14,310,"$226,980.00","$200,988.00",$648.35,"$50,457.24"
MIA - CHS,56103538624,M-SDF-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/56103538624,https://www.airlines-manager.com/aircraft/show/96692674,9:00,12:59,310,"$226,980.00","$200,988.00",$648.35,"$50,457.24"
MIA - CHS,56107731656,M-SDF-PWM-5,ERJ-175,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/56107731656,https://www.airlines-manager.com/aircraft/show/105601657,11:00,14:59,112,"$105,788.00","$89,336.00",$797.64,"$22,427.45"
MIA - CHS,56115475626,M-SDF-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/56115475626,https://www.airlines-manager.com/aircraft/show/94886625,14:00,17:59,310,"$226,980.00","$200,988.00",$648.35,"$50,457.24"
MIA - CHS,56128543829,M-SDF-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/56128543829,https://www.airlines-manager.com/aircraft/show/94886629,20:45,0:44,293,"$219,653.00","$193,890.00",$661.74,"$48,675.31"
MIA - CID,56084270596,M-CID-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/56084270596,https://www.airlines-manager.com/aircraft/show/116789652,1:15,8:29,310,"$455,731.00","$418,272.00","$1,349.26","$57,825.62"
MIA - CID,56103828501,M-CID-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/56103828501,https://www.airlines-manager.com/aircraft/show/116789653,10:00,17:14,310,"$455,731.00","$418,272.00","$1,349.26","$57,825.62"
MIA - CID,56118925475,M-CID-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/56118925475,https://www.airlines-manager.com/aircraft/show/116789650,15:30,22:44,310,"$455,731.00","$418,272.00","$1,349.26","$57,825.62"
MIA - CID,56128543802,M-CID-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/56128543802,https://www.airlines-manager.com/aircraft/show/116789651,20:30,3:44,310,"$455,731.00","$418,272.00","$1,349.26","$57,825.62"
MIA - CLE,56084270496,M-COS-CVG-5,ERJ-175,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/56084270496,https://www.airlines-manager.com/aircraft/show/103534665,0:30,6:44,112,"$188,656.00","$164,872.00","$1,472.07","$26,450.05"
MIA - CLE,56093103118,M-COS-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/56093103118,https://www.airlines-manager.com/aircraft/show/103684630,4:15,10:29,320,"$400,132.00","$358,875.00","$1,121.48","$57,573.53"
MIA - CLE,56099991653,M-COS-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/56099991653,https://www.airlines-manager.com/aircraft/show/103365574,7:45,13:59,320,"$400,132.00","$358,875.00","$1,121.48","$57,573.53"
MIA - CLE,56112079252,M-COS-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/56112079252,https://www.airlines-manager.com/aircraft/show/103684632,13:00,19:14,320,"$400,132.00","$358,875.00","$1,121.48","$57,573.53"
MIA - CLE,56128543817,M-COS-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/56128543817,https://www.airlines-manager.com/aircraft/show/103684631,20:45,2:59,320,"$400,132.00","$358,875.00","$1,121.48","$57,573.53"
MIA - CLT,56093103137,M-ORD-DFW-6,ERJ-175,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/56093103137,https://www.airlines-manager.com/aircraft/show/82543123,4:15,8:59,112,"$142,655.00","$118,748.00","$1,060.25","$25,087.61"
MIA - CLT,56103828480,M-ORD-DFW-3,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/56103828480,https://www.airlines-manager.com/aircraft/show/91600939,10:00,14:44,310,"$299,768.00","$261,819.00",$844.58,"$55,313.87"
MIA - CLT,56118925541,M-ORD-DFW-2,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/56118925541,https://www.airlines-manager.com/aircraft/show/91600936,16:00,20:44,310,"$299,768.00","$261,819.00",$844.58,"$55,313.87"
MIA - CLT,56122311558,M-ORD-DFW-5,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/56122311558,https://www.airlines-manager.com/aircraft/show/91600937,17:45,22:29,310,"$299,768.00","$261,819.00",$844.58,"$55,313.87"
MIA - CLT,56131084882,M-ORD-DFW-1,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/56131084882,https://www.airlines-manager.com/aircraft/show/91600935,22:30,3:14,310,"$299,768.00","$261,819.00",$844.58,"$55,313.87"
MIA - CLT,56133285053,M-ORD-DFW-4,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/56133285053,https://www.airlines-manager.com/aircraft/show/91600938,23:30,4:14,310,"$299,768.00","$261,819.00",$844.58,"$55,313.87"
MIA - CMH,56084270642,M-MKE-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/56084270642,https://www.airlines-manager.com/aircraft/show/88494374,1:45,7:44,320,"$373,993.00","$333,972.00","$1,043.66","$55,817.05"
MIA - CMH,56099991618,M-MKE-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/56099991618,https://www.airlines-manager.com/aircraft/show/88494378,7:15,13:14,320,"$373,993.00","$333,972.00","$1,043.66","$55,817.05"
MIA - CMH,56115475597,M-MKE-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/56115475597,https://www.airlines-manager.com/aircraft/show/91806233,14:00,19:59,320,"$373,993.00","$333,972.00","$1,043.66","$55,817.05"
MIA - CMH,56122311617,M-MKE-CMH-5 B,A319-100,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/56122311617,https://www.airlines-manager.com/aircraft/show/110582842,18:00,23:59,198,"$283,790.00","$255,521.00","$1,290.51","$42,705.46"
MIA - CMH,56128543925,M-MKE-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/56128543925,https://www.airlines-manager.com/aircraft/show/88239556,21:00,2:59,320,"$373,993.00","$333,972.00","$1,043.66","$55,817.05"
MIA - CMN,56093103195,M-84B-4 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/56093103195,https://www.airlines-manager.com/aircraft/show/106676228,5:00,22:44,962,"$2,973,893.00","$2,715,224.00","$2,822.48","$153,114.14"
MIA - CMN,56128543806,M-84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/56128543806,https://www.airlines-manager.com/aircraft/show/106676225,20:30,14:14,962,"$2,973,893.00","$2,715,224.00","$2,822.48","$153,114.14"
MIA - COS,56096590173,M-COS-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/56096590173,https://www.airlines-manager.com/aircraft/show/103684631,6:30,14:59,320,"$546,028.00","$494,638.00","$1,545.74","$58,307.03"
MIA - COS,56103828525,M-COS-CVG-5,ERJ-175,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/56103828525,https://www.airlines-manager.com/aircraft/show/103534665,10:00,18:44,112,"$257,259.00","$226,678.00","$2,023.91","$25,955.50"
MIA - COS,56115475605,M-COS-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/56115475605,https://www.airlines-manager.com/aircraft/show/103684630,14:00,22:29,320,"$546,028.00","$494,638.00","$1,545.74","$58,307.03"
MIA - COS,56122311529,M-COS-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/56122311529,https://www.airlines-manager.com/aircraft/show/103365574,17:30,1:59,320,"$546,028.00","$494,638.00","$1,545.74","$58,307.03"
MIA - COS,56131084900,M-COS-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/56131084900,https://www.airlines-manager.com/aircraft/show/103684632,22:45,7:14,320,"$546,028.00","$494,638.00","$1,545.74","$58,307.03"
MIA - CPT,56093103193,M-84A-6 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/56093103193,https://www.airlines-manager.com/aircraft/show/93731916,5:00,10:29,1124,"$5,639,082.00","$5,244,474.00","$4,665.90","$956,439.03"
MIA - CPT,56122311615,M-84A-2 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/56122311615,https://www.airlines-manager.com/aircraft/show/93686968,18:00,23:29,1124,"$5,639,082.00","$5,244,474.00","$4,665.90","$956,439.03"
MIA - CUN,56096590104,M-PSP-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/56096590104,https://www.airlines-manager.com/aircraft/show/116789631,5:30,9:44,320,"$251,434.00","$216,081.00",$675.25,"$51,042.76"
MIA - CUN,56103538652,M-PSP-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/56103538652,https://www.airlines-manager.com/aircraft/show/116789634,9:30,13:44,320,"$251,434.00","$216,081.00",$675.25,"$51,042.76"
MIA - CUN,56103828466,M-PSP-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/56103828466,https://www.airlines-manager.com/aircraft/show/116789632,10:00,14:14,320,"$251,434.00","$216,081.00",$675.25,"$51,042.76"
MIA - CUN,56125473984,M-PSP-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/56125473984,https://www.airlines-manager.com/aircraft/show/116789633,18:45,22:59,320,"$251,434.00","$216,081.00",$675.25,"$51,042.76"
MIA - CUN,56131084800,M-PSP-BFF-5,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/56131084800,https://www.airlines-manager.com/aircraft/show/116789630,21:45,1:59,316,"$248,581.00","$213,299.00",$675.00,"$50,385.59"
MIA - CUR,56093103119,M-BGI-CUR-3,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/56093103119,https://www.airlines-manager.com/aircraft/show/107121797,4:15,10:59,320,"$414,925.00","$372,912.00","$1,165.35","$55,382.97"
MIA - CUR,56107731591,M-BGI-CUR-2,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/56107731591,https://www.airlines-manager.com/aircraft/show/107121796,11:00,17:44,320,"$414,925.00","$372,912.00","$1,165.35","$55,382.97"
MIA - CUR,56115475742,M-BGI-CUR-5,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/56115475742,https://www.airlines-manager.com/aircraft/show/107121799,15:00,21:44,320,"$414,925.00","$372,912.00","$1,165.35","$55,382.97"
MIA - CUR,56128543767,M-BGI-CUR-1,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/56128543767,https://www.airlines-manager.com/aircraft/show/107121795,20:15,2:59,320,"$414,925.00","$372,912.00","$1,165.35","$55,382.97"
MIA - CUR,56131084797,M-BGI-CUR-4,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/56131084797,https://www.airlines-manager.com/aircraft/show/107121798,21:45,4:29,297,"$387,670.00","$346,581.00","$1,166.94","$51,472.43"
MIA - CVG,56084270676,M-COS-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/56084270676,https://www.airlines-manager.com/aircraft/show/103365574,2:00,7:44,320,"$370,605.00","$328,724.00","$1,027.26","$57,335.58"
MIA - CVG,56099991620,M-COS-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/56099991620,https://www.airlines-manager.com/aircraft/show/103684632,7:15,12:59,320,"$370,605.00","$328,724.00","$1,027.26","$57,335.58"
MIA - CVG,56115475741,M-COS-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/56115475741,https://www.airlines-manager.com/aircraft/show/103684631,15:00,20:44,320,"$370,605.00","$328,724.00","$1,027.26","$57,335.58"
MIA - CVG,56125474005,M-COS-CVG-5,ERJ-175,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/56125474005,https://www.airlines-manager.com/aircraft/show/103534665,18:45,0:29,112,"$175,356.00","$151,647.00","$1,353.99","$26,450.06"
MIA - CVG,56131084878,M-COS-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/56131084878,https://www.airlines-manager.com/aircraft/show/103684630,22:30,4:14,320,"$370,605.00","$328,724.00","$1,027.26","$57,335.58"
MIA - DEN,56084270607,M-LAX-DEN-3,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/56084270607,https://www.airlines-manager.com/aircraft/show/91126651,1:30,9:59,400,"$730,615.00","$644,983.00","$1,612.46","$76,029.43"
MIA - DEN,56093103020,M-LAX-DEN-4,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/56093103020,https://www.airlines-manager.com/aircraft/show/91126652,3:30,11:59,400,"$730,615.00","$644,983.00","$1,612.46","$76,029.43"
MIA - DEN,56107731567,M-LAX-DEN-1,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/56107731567,https://www.airlines-manager.com/aircraft/show/91126649,11:00,19:29,400,"$730,615.00","$644,983.00","$1,612.46","$76,029.43"
MIA - DEN,56122311526,M-LAX-DEN-2,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/56122311526,https://www.airlines-manager.com/aircraft/show/91126650,17:30,1:59,400,"$730,615.00","$644,983.00","$1,612.46","$76,029.43"
MIA - DEN,56131084861,M-LAX-DEN-5 E,A319-100,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/56131084861,https://www.airlines-manager.com/aircraft/show/115181776,22:15,6:59,216,"$428,425.00","$372,033.00","$1,722.38","$42,599.20"
MIA - DFW,56093103030,M-ORD-DFW-2,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/56093103030,https://www.airlines-manager.com/aircraft/show/91600936,3:30,9:59,310,"$410,166.00","$354,245.00","$1,142.73","$54,639.33"
MIA - DFW,56103828478,M-ORD-DFW-1,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/56103828478,https://www.airlines-manager.com/aircraft/show/91600935,10:00,16:29,310,"$410,166.00","$354,245.00","$1,142.73","$54,639.33"
MIA - DFW,56107731621,M-ORD-DFW-4,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/56107731621,https://www.airlines-manager.com/aircraft/show/91600938,11:00,17:29,310,"$410,166.00","$354,245.00","$1,142.73","$54,639.33"
MIA - DFW,56118925499,M-ORD-DFW-6,ERJ-175,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/56118925499,https://www.airlines-manager.com/aircraft/show/82543123,15:45,22:14,112,"$193,018.00","$157,511.00","$1,406.35","$24,294.76"
MIA - DFW,56128543980,M-ORD-DFW-3,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/56128543980,https://www.airlines-manager.com/aircraft/show/91600939,21:30,3:59,310,"$410,166.00","$354,245.00","$1,142.73","$54,639.33"
MIA - DFW,56131084883,M-ORD-DFW-5,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/56131084883,https://www.airlines-manager.com/aircraft/show/91600937,22:30,4:59,310,"$410,166.00","$354,245.00","$1,142.73","$54,639.33"
MIA - DSM,56084270753,M-DSM-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/56084270753,https://www.airlines-manager.com/aircraft/show/113101230,3:00,10:14,320,"$457,870.00","$414,841.00","$1,296.38","$57,351.29"
MIA - DSM,56103538613,M-DSM-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/56103538613,https://www.airlines-manager.com/aircraft/show/100049776,8:45,15:59,112,"$216,773.00","$191,389.00","$1,708.83","$26,459.31"
MIA - DSM,56112079260,M-DSM-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/56112079260,https://www.airlines-manager.com/aircraft/show/111064081,13:00,20:14,320,"$457,870.00","$414,841.00","$1,296.38","$57,351.29"
MIA - DSM,56118925532,M-DSM-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/56118925532,https://www.airlines-manager.com/aircraft/show/113101228,16:00,23:14,320,"$457,870.00","$414,841.00","$1,296.38","$57,351.29"
MIA - DSM,56128543770,M-DSM-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/56128543770,https://www.airlines-manager.com/aircraft/show/113101233,20:15,3:29,320,"$457,870.00","$414,841.00","$1,296.38","$57,351.29"
MIA - DSS,56084270416,M-84B-7 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/56084270416,https://www.airlines-manager.com/aircraft/show/106676231,0:00,16:59,962,"$2,864,435.00","$2,618,423.00","$2,721.85","$154,176.04"
MIA - DSS,56112079184,M-84B-3 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/56112079184,https://www.airlines-manager.com/aircraft/show/106676227,12:00,4:59,962,"$2,864,435.00","$2,618,423.00","$2,721.85","$154,176.04"
MIA - DTW,56084270611,M-PDX-DTW-3,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/56084270611,https://www.airlines-manager.com/aircraft/show/89943713,1:30,7:59,320,"$414,846.00","$362,524.00","$1,132.89","$55,916.30"
MIA - DTW,56084270612,M-PDX-DTW-4,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/56084270612,https://www.airlines-manager.com/aircraft/show/89943712,2:30,8:59,320,"$414,846.00","$362,524.00","$1,132.89","$55,916.30"
MIA - DTW,56103828437,M-PDX-DTW-2,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/56103828437,https://www.airlines-manager.com/aircraft/show/89943714,10:00,16:29,320,"$414,846.00","$362,524.00","$1,132.89","$55,916.30"
MIA - DTW,56115475595,M-PDX-DTW-5,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/56115475595,https://www.airlines-manager.com/aircraft/show/89943711,14:00,20:29,320,"$414,846.00","$362,524.00","$1,132.89","$55,916.30"
MIA - DTW,56131084873,M-PDX-DTW-1,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/56131084873,https://www.airlines-manager.com/aircraft/show/89943715,22:30,4:59,320,"$414,846.00","$362,524.00","$1,132.89","$55,916.30"
MIA - ECP,56084270463,M-MAF-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50834918,https://www.airlines-manager.com/network/showflight/56084270463,https://www.airlines-manager.com/aircraft/show/92137503,0:15,4:14,112,"$103,168.00","$86,664.00",$773.79,"$21,756.65"
MIA - ECP,56084270464,M-MAF-ROC-4,A321-200,https://www.airlines-manager.com/network/showline/50834918,https://www.airlines-manager.com/network/showflight/56084270464,https://www.airlines-manager.com/aircraft/show/120933310,2:15,6:14,310,"$221,304.00","$195,136.00",$629.47,"$48,988.12"
MIA - ECP,56099991682,M-MAF-ROC-3,A321-200,https://www.airlines-manager.com/network/showline/50834918,https://www.airlines-manager.com/network/showflight/56099991682,https://www.airlines-manager.com/aircraft/show/120933309,8:00,11:59,310,"$221,304.00","$195,136.00",$629.47,"$48,988.12"
MIA - ECP,56103828508,M-MAF-ROC-2,A321-200,https://www.airlines-manager.com/network/showline/50834918,https://www.airlines-manager.com/network/showflight/56103828508,https://www.airlines-manager.com/aircraft/show/120933308,10:00,13:59,310,"$221,304.00","$195,136.00",$629.47,"$48,988.12"
MIA - ECP,56118925601,M-MAF-ROC-1,A321-200,https://www.airlines-manager.com/network/showline/50834918,https://www.airlines-manager.com/network/showflight/56118925601,https://www.airlines-manager.com/aircraft/show/120933307,16:45,20:44,310,"$221,304.00","$195,136.00",$629.47,"$48,988.12"
MIA - ELP,56103538566,M-ELP-MCI-5 B,A319-100,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/56103538566,https://www.airlines-manager.com/aircraft/show/105093924,8:15,16:44,198,"$402,779.00","$366,768.00","$1,852.36","$43,233.95"
MIA - ELP,56103828442,M-ELP-MCI-1,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/56103828442,https://www.airlines-manager.com/aircraft/show/91806234,10:00,18:29,320,"$534,175.00","$484,066.00","$1,512.71","$57,060.83"
MIA - ELP,56118925563,M-ELP-MCI-3,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/56118925563,https://www.airlines-manager.com/aircraft/show/91806232,16:15,0:44,320,"$534,175.00","$484,066.00","$1,512.71","$57,060.83"
MIA - ELP,56122311470,M-ELP-MCI-4,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/56122311470,https://www.airlines-manager.com/aircraft/show/91806231,17:00,1:29,320,"$534,175.00","$484,066.00","$1,512.71","$57,060.83"
MIA - ELP,56133285025,M-ELP-MCI-2,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/56133285025,https://www.airlines-manager.com/aircraft/show/91806235,23:15,7:44,320,"$534,175.00","$484,066.00","$1,512.71","$57,060.83"
MIA - EUG,56084270622,M-EUG-SYR-4,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/56084270622,https://www.airlines-manager.com/aircraft/show/119652480,1:30,13:59,320,"$770,422.00","$706,945.00","$2,209.20","$56,631.11"
MIA - EUG,56115475624,M-EUG-SYR-1,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/56115475624,https://www.airlines-manager.com/aircraft/show/119652483,14:00,2:29,320,"$770,422.00","$706,945.00","$2,209.20","$56,631.11"
MIA - EUG,56125473985,M-EUG-SYR-3,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/56125473985,https://www.airlines-manager.com/aircraft/show/119652481,18:45,7:14,320,"$770,422.00","$706,945.00","$2,209.20","$56,631.11"
MIA - EUG,56133285051,M-EUG-SYR-2,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/56133285051,https://www.airlines-manager.com/aircraft/show/119652482,23:30,11:59,320,"$770,422.00","$706,945.00","$2,209.20","$56,631.11"
MIA - FAR,56084270511,M-FAR-TUL-3,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/56084270511,https://www.airlines-manager.com/aircraft/show/110883161,0:45,9:29,320,"$548,683.00","$499,861.00","$1,562.07","$57,235.99"
MIA - FAR,56099991621,M-FAR-TUL-4,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/56099991621,https://www.airlines-manager.com/aircraft/show/110883162,7:15,15:59,320,"$548,683.00","$499,861.00","$1,562.07","$57,235.99"
MIA - FAR,56107731598,M-FAR-TUL-1,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/56107731598,https://www.airlines-manager.com/aircraft/show/110883159,11:00,19:44,320,"$548,683.00","$499,861.00","$1,562.07","$57,235.99"
MIA - FAR,56118925530,M-FAR-TUL-2,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/56118925530,https://www.airlines-manager.com/aircraft/show/110883160,16:00,0:44,320,"$548,683.00","$499,861.00","$1,562.07","$57,235.99"
MIA - FAR,56122311670,M-FAR-TUL-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/56122311670,https://www.airlines-manager.com/aircraft/show/87169421,18:15,2:59,112,"$258,578.00","$229,164.00","$2,046.11","$26,240.15"
MIA - FAT,56103538577,M-FAT-MSO-4,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/56103538577,https://www.airlines-manager.com/aircraft/show/113101232,8:30,19:59,320,"$721,117.00","$660,903.00","$2,065.32","$57,553.24"
MIA - FAT,56107731546,M-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/56107731546,https://www.airlines-manager.com/aircraft/show/120519142,10:45,22:14,0,"$202,638.00","$131,134.00",$0.00,"$11,419.51"
MIA - FAT,56107731547,M-FAT-MSO-1,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/56107731547,https://www.airlines-manager.com/aircraft/show/113101229,11:00,22:29,320,"$721,117.00","$660,903.00","$2,065.32","$57,553.24"
MIA - FAT,56125474019,M-FAT-MSO-2,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/56125474019,https://www.airlines-manager.com/aircraft/show/113101231,19:00,6:29,320,"$721,117.00","$660,903.00","$2,065.32","$57,553.24"
MIA - FAT,56131084847,M-FAT-MSO-3,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/56131084847,https://www.airlines-manager.com/aircraft/show/113101234,22:15,9:44,320,"$684,642.00","$629,659.00","$1,967.68","$54,832.42"
MIA - FCA,56084270485,M-FCA-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/56084270485,https://www.airlines-manager.com/aircraft/show/119652477,0:30,11:59,320,"$707,833.00","$648,466.00","$2,026.46","$56,470.19"
MIA - FCA,56084270486,M-FCA-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/56084270486,https://www.airlines-manager.com/aircraft/show/119652476,2:30,13:59,320,"$707,833.00","$648,466.00","$2,026.46","$56,470.19"
MIA - FCA,56112079153,M-FCA-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/56112079153,https://www.airlines-manager.com/aircraft/show/119652479,12:00,23:29,320,"$707,833.00","$648,466.00","$2,026.46","$56,470.19"
MIA - FCA,56115475621,M-FCA-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/56115475621,https://www.airlines-manager.com/aircraft/show/119652478,14:00,1:29,320,"$707,833.00","$648,466.00","$2,026.46","$56,470.19"
MIA - FPO,56084270444,M-BGI-CUR-2,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/56084270444,https://www.airlines-manager.com/aircraft/show/107121796,0:15,2:44,320,"$84,372.00","$59,731.00",$186.66,"$24,052.75"
MIA - FPO,56093103120,M-BGI-CUR-5,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/56093103120,https://www.airlines-manager.com/aircraft/show/107121799,4:15,6:44,320,"$84,372.00","$59,731.00",$186.66,"$24,052.75"
MIA - FPO,56103538651,M-BGI-CUR-1,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/56103538651,https://www.airlines-manager.com/aircraft/show/107121795,9:30,11:59,320,"$84,372.00","$59,731.00",$186.66,"$24,052.75"
MIA - FPO,56107731593,M-BGI-CUR-4,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/56107731593,https://www.airlines-manager.com/aircraft/show/107121798,11:00,13:29,320,"$84,372.00","$59,731.00",$186.66,"$24,052.75"
MIA - FPO,56122311532,M-BGI-CUR-3,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/56122311532,https://www.airlines-manager.com/aircraft/show/107121797,17:30,19:59,204,"$61,288.00","$37,042.00",$181.58,"$14,916.24"
MIA - FSD,56084270561,M-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/56084270561,https://www.airlines-manager.com/aircraft/show/110883110,1:00,8:59,310,"$503,709.00","$462,376.00","$1,491.54","$57,917.66"
MIA - FSD,56084270562,M-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/56084270562,https://www.airlines-manager.com/aircraft/show/110883113,2:45,10:44,310,"$503,709.00","$462,376.00","$1,491.54","$57,917.66"
MIA - FSD,56115475648,M-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/56115475648,https://www.airlines-manager.com/aircraft/show/110883112,14:00,21:59,310,"$503,709.00","$462,376.00","$1,491.54","$57,917.66"
MIA - FSD,56118925568,M-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/56118925568,https://www.airlines-manager.com/aircraft/show/110883111,16:15,0:14,310,"$503,709.00","$462,376.00","$1,491.54","$57,917.66"
MIA - FSD,56131084837,M-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/56131084837,https://www.airlines-manager.com/aircraft/show/104353572,22:00,5:59,96,"$222,144.00","$195,720.00","$2,038.75","$24,516.08"
MIA - GRR,56084270422,M-RAP-GRR-5,ERJ-175,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/56084270422,https://www.airlines-manager.com/aircraft/show/116042630,0:00,6:44,112,"$200,498.00","$176,006.00","$1,571.48","$26,139.50"
MIA - GRR,56084270423,M-RAP-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/56084270423,https://www.airlines-manager.com/aircraft/show/116789623,2:15,8:59,320,"$424,936.00","$383,045.00","$1,197.02","$56,887.87"
MIA - GRR,56103828462,M-RAP-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/56103828462,https://www.airlines-manager.com/aircraft/show/116789624,10:00,16:44,320,"$424,936.00","$383,045.00","$1,197.02","$56,887.87"
MIA - GRR,56112079147,M-RAP-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/56112079147,https://www.airlines-manager.com/aircraft/show/116789622,12:00,18:44,320,"$424,936.00","$383,045.00","$1,197.02","$56,887.87"
MIA - GRR,56125474021,M-RAP-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/56125474021,https://www.airlines-manager.com/aircraft/show/116789625,19:00,1:44,320,"$424,936.00","$383,045.00","$1,197.02","$56,887.87"
MIA - GSO,56103538638,M-EUG-SYR-1,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/56103538638,https://www.airlines-manager.com/aircraft/show/119652483,9:15,13:59,320,"$310,263.00","$276,328.00",$863.53,"$58,379.15"
MIA - GSO,56115475623,M-EUG-SYR-3,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/56115475623,https://www.airlines-manager.com/aircraft/show/119652481,14:00,18:44,320,"$310,263.00","$276,328.00",$863.53,"$58,379.15"
MIA - GSO,56125473986,M-EUG-SYR-2,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/56125473986,https://www.airlines-manager.com/aircraft/show/119652482,18:45,23:29,320,"$310,263.00","$276,328.00",$863.53,"$58,379.15"
MIA - GSO,56128543822,M-EUG-SYR-4,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/56128543822,https://www.airlines-manager.com/aircraft/show/119652480,20:45,1:29,310,"$304,417.00","$270,674.00",$873.14,"$57,184.65"
MIA - HAV,56093103181,M-PDX-DTW-1,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/56093103181,https://www.airlines-manager.com/aircraft/show/89943715,5:00,7:59,320,"$131,980.00","$102,173.00",$319.29,"$34,247.93"
MIA - HAV,56103538619,M-PDX-DTW-4,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/56103538619,https://www.airlines-manager.com/aircraft/show/89943712,9:00,11:59,320,"$131,980.00","$102,173.00",$319.29,"$34,247.93"
MIA - HAV,56103828436,M-PDX-DTW-3,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/56103828436,https://www.airlines-manager.com/aircraft/show/89943713,10:00,12:59,320,"$131,980.00","$102,173.00",$319.29,"$34,247.93"
MIA - HAV,56118925577,M-PDX-DTW-2,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/56118925577,https://www.airlines-manager.com/aircraft/show/89943714,16:30,19:29,320,"$131,980.00","$102,173.00",$319.29,"$34,247.93"
MIA - HAV,56128543796,M-PDX-DTW-5,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/56128543796,https://www.airlines-manager.com/aircraft/show/89943711,20:30,23:29,289,"$120,693.00","$91,131.00",$315.33,"$30,546.70"
MIA - IAD,56093103125,M-IAD-TUS-2,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/56093103125,https://www.airlines-manager.com/aircraft/show/97556720,4:15,9:59,310,"$363,777.00","$324,476.00","$1,046.70","$56,594.65"
MIA - IAD,56099991623,M-IAD-TUS-5,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/56099991623,https://www.airlines-manager.com/aircraft/show/97556716,7:15,12:59,310,"$363,777.00","$324,476.00","$1,046.70","$56,594.65"
MIA - IAD,56103828490,M-IAD-TUS-1,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/56103828490,https://www.airlines-manager.com/aircraft/show/97556721,10:00,15:44,310,"$363,777.00","$324,476.00","$1,046.70","$56,594.65"
MIA - IAD,56112079287,M-IAD-TUS-4,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/56112079287,https://www.airlines-manager.com/aircraft/show/97556718,13:00,18:44,310,"$363,777.00","$324,476.00","$1,046.70","$56,594.65"
MIA - IAD,56125473996,M-IAD-TUS-3,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/56125473996,https://www.airlines-manager.com/aircraft/show/97556719,18:45,0:29,310,"$363,777.00","$324,476.00","$1,046.70","$56,594.65"
MIA - ICT,56084270715,M-FAR-TUL-1,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/56084270715,https://www.airlines-manager.com/aircraft/show/110883159,2:30,9:29,320,"$448,851.00","$405,534.00","$1,267.29","$58,071.69"
MIA - ICT,56103538621,M-FAR-TUL-2,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/56103538621,https://www.airlines-manager.com/aircraft/show/110883160,9:00,15:59,320,"$448,851.00","$405,534.00","$1,267.29","$58,071.69"
MIA - ICT,56107731654,M-FAR-TUL-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/56107731654,https://www.airlines-manager.com/aircraft/show/87169421,11:00,18:14,112,"$213,247.00","$187,816.00","$1,676.93","$25,965.35"
MIA - ICT,56122311554,M-FAR-TUL-3,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/56122311554,https://www.airlines-manager.com/aircraft/show/110883161,17:45,0:44,320,"$448,851.00","$405,534.00","$1,267.29","$58,071.69"
MIA - ICT,56131084904,M-FAR-TUL-4,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/56131084904,https://www.airlines-manager.com/aircraft/show/110883162,22:45,5:44,320,"$448,851.00","$405,534.00","$1,267.29","$58,071.69"
MIA - IND,56084270725,M-AUS-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/56084270725,https://www.airlines-manager.com/aircraft/show/82323689,2:30,8:29,112,"$181,512.00","$157,824.00","$1,409.14","$26,377.27"
MIA - IND,56093102985,M-AUS-PIT-4,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/56093102985,https://www.airlines-manager.com/aircraft/show/99920623,3:15,9:14,320,"$384,262.00","$342,843.00","$1,071.38","$57,299.67"
MIA - IND,56103828449,M-AUS-PIT-3,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/56103828449,https://www.airlines-manager.com/aircraft/show/99920624,10:00,15:59,320,"$384,262.00","$342,843.00","$1,071.38","$57,299.67"
MIA - IND,56118925525,M-AUS-PIT-2,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/56118925525,https://www.airlines-manager.com/aircraft/show/99920625,16:00,21:59,320,"$384,262.00","$342,843.00","$1,071.38","$57,299.67"
MIA - IND,56131084877,M-AUS-PIT-1,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/56131084877,https://www.airlines-manager.com/aircraft/show/99920626,22:30,4:29,320,"$384,262.00","$342,843.00","$1,071.38","$57,299.67"
MIA - JAN,56096590118,M-MHT-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/56096590118,https://www.airlines-manager.com/aircraft/show/114912307,5:30,10:29,112,"$149,970.00","$131,075.00","$1,170.31","$26,302.68"
MIA - JAN,56103538588,M-MHT-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/56103538588,https://www.airlines-manager.com/aircraft/show/115493373,8:30,13:29,310,"$315,458.00","$286,126.00",$922.99,"$57,416.59"
MIA - JAN,56115475655,M-MHT-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/56115475655,https://www.airlines-manager.com/aircraft/show/115493370,14:00,18:59,310,"$315,458.00","$286,126.00",$922.99,"$57,416.59"
MIA - JAN,56128543775,M-MHT-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/56128543775,https://www.airlines-manager.com/aircraft/show/115493371,20:15,1:14,310,"$315,458.00","$286,126.00",$922.99,"$57,416.59"
MIA - JAN,56131084888,M-MHT-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/56131084888,https://www.airlines-manager.com/aircraft/show/115493372,22:30,3:29,256,"$283,146.00","$254,913.00",$995.75,"$51,153.11"
MIA - JAX,56084270748,M-COS-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/56084270748,https://www.airlines-manager.com/aircraft/show/103684631,3:00,6:29,320,"$174,389.00","$145,350.00",$454.22,"$41,727.27"
MIA - JAX,56107731533,M-COS-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/56107731533,https://www.airlines-manager.com/aircraft/show/103684630,10:30,13:59,320,"$174,389.00","$145,350.00",$454.22,"$41,727.27"
MIA - JAX,56115475604,M-COS-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/56115475604,https://www.airlines-manager.com/aircraft/show/103365574,14:00,17:29,320,"$174,389.00","$145,350.00",$454.22,"$41,727.27"
MIA - JAX,56125474048,M-COS-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/56125474048,https://www.airlines-manager.com/aircraft/show/103684632,19:15,22:44,320,"$174,389.00","$145,350.00",$454.22,"$41,727.27"
MIA - JAX,56131084860,M-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/56131084860,https://www.airlines-manager.com/aircraft/show/106339154,22:15,1:44,198,"$132,355.00","$112,459.00",$567.97,"$32,284.88"
MIA - JFK,56096590119,M-JFK-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/56096590119,https://www.airlines-manager.com/aircraft/show/105308264,5:45,11:59,338,"$430,736.00","$378,260.00","$1,119.11","$60,683.42"
MIA - JFK,56099991593,M-JFK-PHX-6,ERJ-175,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/56099991593,https://www.airlines-manager.com/aircraft/show/82683137,6:45,12:59,112,"$187,689.00","$153,479.00","$1,370.35","$24,622.30"
MIA - JFK,56103828427,M-JFK-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/56103828427,https://www.airlines-manager.com/aircraft/show/105308267,10:00,16:14,338,"$430,736.00","$378,260.00","$1,119.11","$60,683.42"
MIA - JFK,56112079116,M-JFK-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/56112079116,https://www.airlines-manager.com/aircraft/show/105308265,12:00,18:14,338,"$430,736.00","$378,260.00","$1,119.11","$60,683.42"
MIA - JFK,56122311571,M-JFK-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/56122311571,https://www.airlines-manager.com/aircraft/show/105308266,18:00,0:14,338,"$430,736.00","$378,260.00","$1,119.11","$60,683.42"
MIA - JFK,56128543812,M-JFK-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/56128543812,https://www.airlines-manager.com/aircraft/show/105308268,20:45,2:59,338,"$430,736.00","$378,260.00","$1,119.11","$60,683.42"
MIA - JNB,56084270405,M-84A-4 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/56084270405,https://www.airlines-manager.com/aircraft/show/93686966,0:00,6:44,1124,"$6,037,007.00","$5,603,375.00","$4,985.21","$832,184.41"
MIA - JNB,56112079312,M-84A-7 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/56112079312,https://www.airlines-manager.com/aircraft/show/93776641,13:00,19:44,1124,"$6,037,007.00","$5,603,375.00","$4,985.21","$832,184.41"
MIA - LAS,56084270604,M-LAS-SEA-5,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/56084270604,https://www.airlines-manager.com/aircraft/show/105093929,1:30,11:59,338,"$720,041.00","$652,865.00","$1,931.55","$62,276.47"
MIA - LAS,56103828424,M-LAS-SEA-1,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/56103828424,https://www.airlines-manager.com/aircraft/show/105093925,10:00,20:29,338,"$720,041.00","$652,865.00","$1,931.55","$62,276.47"
MIA - LAS,56112079180,M-LAS-SEA-6 B,A319-100,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/56112079180,https://www.airlines-manager.com/aircraft/show/113251304,12:00,22:29,198,"$499,043.00","$443,039.00","$2,237.57","$42,261.27"
MIA - LAS,56112079181,M-LAS-SEA-2,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/56112079181,https://www.airlines-manager.com/aircraft/show/105093926,13:00,23:29,338,"$720,041.00","$652,865.00","$1,931.55","$62,276.47"
MIA - LAS,56115475716,M-LAS-SEA-3,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/56115475716,https://www.airlines-manager.com/aircraft/show/105093927,15:00,1:29,338,"$720,041.00","$652,865.00","$1,931.55","$62,276.47"
MIA - LAS,56131084866,M-LAS-SEA-4,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/56131084866,https://www.airlines-manager.com/aircraft/show/105093928,22:30,8:59,338,"$720,041.00","$652,865.00","$1,931.55","$62,276.47"
MIA - LAX,56084270369,M-LAX-DEN-1,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/56084270369,https://www.airlines-manager.com/aircraft/show/91126649,0:00,10:59,400,"$921,726.00","$828,254.00","$2,070.64","$75,410.08"
MIA - LAX,56084270370,M-LAX-DEN-2,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/56084270370,https://www.airlines-manager.com/aircraft/show/91126650,2:00,12:59,400,"$921,726.00","$828,254.00","$2,070.64","$75,410.08"
MIA - LAX,56103828435,M-LAX-DEN-3,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/56103828435,https://www.airlines-manager.com/aircraft/show/91126651,10:00,20:59,400,"$921,726.00","$828,254.00","$2,070.64","$75,410.08"
MIA - LAX,56107731653,M-LAX-DEN-5 E,A319-100,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/56107731653,https://www.airlines-manager.com/aircraft/show/115181776,11:00,22:14,216,"$539,517.00","$478,154.00","$2,213.68","$42,565.64"
MIA - LAX,56118925575,M-LAX-DEN-4,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/56118925575,https://www.airlines-manager.com/aircraft/show/91126652,16:30,3:29,400,"$921,726.00","$828,254.00","$2,070.64","$75,410.08"
MIA - LEX,56084270757,M-CID-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/56084270757,https://www.airlines-manager.com/aircraft/show/116789653,3:00,8:29,310,"$349,957.00","$319,272.00","$1,029.91","$58,225.90"
MIA - LEX,56103828498,M-CID-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/56103828498,https://www.airlines-manager.com/aircraft/show/116789650,10:00,15:29,310,"$349,957.00","$319,272.00","$1,029.91","$58,225.90"
MIA - LEX,56115475765,M-CID-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/56115475765,https://www.airlines-manager.com/aircraft/show/116789651,15:00,20:29,310,"$349,957.00","$319,272.00","$1,029.91","$58,225.90"
MIA - LEX,56125474107,M-CID-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/56125474107,https://www.airlines-manager.com/aircraft/show/116789652,19:45,1:14,303,"$345,320.00","$314,805.00","$1,038.96","$57,411.25"
MIA - LIT,56084270697,M-SDF-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/56084270697,https://www.airlines-manager.com/aircraft/show/96692674,2:15,7:59,310,"$361,995.00","$329,608.00","$1,063.25","$57,489.77"
MIA - LIT,56093103140,M-SDF-PWM-5,ERJ-175,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/56093103140,https://www.airlines-manager.com/aircraft/show/105601657,4:15,9:59,112,"$171,636.00","$150,561.00","$1,344.29","$26,260.64"
MIA - LIT,56103538558,M-SDF-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/56103538558,https://www.airlines-manager.com/aircraft/show/94886625,8:15,13:59,310,"$361,995.00","$329,608.00","$1,063.25","$57,489.77"
MIA - LIT,56115475754,M-SDF-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/56115475754,https://www.airlines-manager.com/aircraft/show/94886629,15:00,20:44,310,"$361,995.00","$329,608.00","$1,063.25","$57,489.77"
MIA - LIT,56128543983,M-SDF-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/56128543983,https://www.airlines-manager.com/aircraft/show/94886626,21:30,3:14,306,"$359,239.00","$326,956.00","$1,068.48","$57,027.21"
MIA - LOS,56099991588,M-84A-5 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/56099991588,https://www.airlines-manager.com/aircraft/show/93704215,6:45,4:59,1124,"$4,277,261.00","$3,977,814.00","$3,538.98","$178,912.17"
MIA - LOS,56125474110,M-84A-1 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/56125474110,https://www.airlines-manager.com/aircraft/show/93686969,19:45,17:59,1115,"$4,217,924.00","$3,920,833.00","$3,516.44","$176,349.31"
MIA - MAF,56084270566,M-MAF-ROC-1,A321-200,https://www.airlines-manager.com/network/showline/50834915,https://www.airlines-manager.com/network/showflight/56084270566,https://www.airlines-manager.com/aircraft/show/120933307,1:00,8:29,310,"$470,887.00","$431,493.00","$1,391.91","$57,660.53"
MIA - MAF,56103828524,M-MAF-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50834915,https://www.airlines-manager.com/network/showflight/56103828524,https://www.airlines-manager.com/aircraft/show/92137503,10:00,17:29,112,"$222,557.00","$196,495.00","$1,754.42","$26,257.68"
MIA - MAF,56112079176,M-MAF-ROC-4,A321-200,https://www.airlines-manager.com/network/showline/50834915,https://www.airlines-manager.com/network/showflight/56112079176,https://www.airlines-manager.com/aircraft/show/120933310,12:00,19:29,310,"$470,887.00","$431,493.00","$1,391.91","$57,660.53"
MIA - MAF,56118925570,M-MAF-ROC-3,A321-200,https://www.airlines-manager.com/network/showline/50834915,https://www.airlines-manager.com/network/showflight/56118925570,https://www.airlines-manager.com/aircraft/show/120933309,16:15,23:44,310,"$470,887.00","$431,493.00","$1,391.91","$57,660.53"
MIA - MAF,56122311668,M-MAF-ROC-2,A321-200,https://www.airlines-manager.com/network/showline/50834915,https://www.airlines-manager.com/network/showflight/56122311668,https://www.airlines-manager.com/aircraft/show/120933308,18:15,1:44,309,"$469,983.00","$430,627.00","$1,393.61","$57,544.81"
MIA - MBJ,56084270522,M-PUJ-BDA-4 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/56084270522,https://www.airlines-manager.com/aircraft/show/104034460,0:45,4:59,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MBJ,56093103194,M-PUJ-BDA-5 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/56093103194,https://www.airlines-manager.com/aircraft/show/104034461,5:00,9:14,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MBJ,56103828511,M-PUJ-BDA-3 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/56103828511,https://www.airlines-manager.com/aircraft/show/104034459,10:00,14:14,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MBJ,56112079209,M-PUJ-BDA-1 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/56112079209,https://www.airlines-manager.com/aircraft/show/104034457,12:45,16:59,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MBJ,56122311495,M-PUJ-BDA-2 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/56122311495,https://www.airlines-manager.com/aircraft/show/104034458,17:00,21:14,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MBJ,56131084937,M-PUJ-BDA-6 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/56131084937,https://www.airlines-manager.com/aircraft/show/99326789,23:00,3:14,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MCI,56084270501,M-ELP-MCI-3,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/56084270501,https://www.airlines-manager.com/aircraft/show/91806232,0:45,7:44,320,"$448,685.00","$403,102.00","$1,259.69","$57,723.44"
MIA - MCI,56084270502,M-ELP-MCI-4,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/56084270502,https://www.airlines-manager.com/aircraft/show/91806231,1:30,8:29,320,"$448,685.00","$403,102.00","$1,259.69","$57,723.44"
MIA - MCI,56103828443,M-ELP-MCI-2,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/56103828443,https://www.airlines-manager.com/aircraft/show/91806235,10:00,16:59,320,"$448,685.00","$403,102.00","$1,259.69","$57,723.44"
MIA - MCI,56125473952,M-ELP-MCI-1,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/56125473952,https://www.airlines-manager.com/aircraft/show/91806234,18:30,1:29,320,"$448,685.00","$403,102.00","$1,259.69","$57,723.44"
MIA - MCI,56125473953,M-ELP-MCI-5 B,A319-100,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/56125473953,https://www.airlines-manager.com/aircraft/show/105093924,19:00,1:59,198,"$338,938.00","$306,546.00","$1,548.21","$43,896.80"
MIA - MCO,56084270445,M-BDL-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/56084270445,https://www.airlines-manager.com/aircraft/show/107763565,0:15,2:59,320,"$122,517.00","$85,295.00",$266.55,"$31,205.49"
MIA - MCO,56093103105,M-BDL-SAT-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/56093103105,https://www.airlines-manager.com/aircraft/show/107467213,4:00,6:44,112,"$55,044.00","$35,872.00",$320.29,"$13,123.90"
MIA - MCO,56096590160,M-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/56096590160,https://www.airlines-manager.com/aircraft/show/103534663,6:00,8:44,112,"$55,044.00","$35,872.00",$320.29,"$13,123.90"
MIA - MCO,56103538645,M-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/56103538645,https://www.airlines-manager.com/aircraft/show/103534663,9:15,11:59,112,"$55,044.00","$35,872.00",$320.29,"$13,123.90"
MIA - MCO,56103828458,M-BDL-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/56103828458,https://www.airlines-manager.com/aircraft/show/107763566,10:00,12:44,320,"$122,517.00","$85,295.00",$266.55,"$31,205.49"
MIA - MCO,56107731594,M-BDL-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/56107731594,https://www.airlines-manager.com/aircraft/show/107763561,11:00,13:44,320,"$122,517.00","$85,295.00",$266.55,"$31,205.49"
MIA - MCO,56122311553,M-BDL-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/56122311553,https://www.airlines-manager.com/aircraft/show/107763562,17:45,20:29,320,"$122,517.00","$85,295.00",$266.55,"$31,205.49"
MIA - MEM,56084270409,M-MKE-CMH-5 B,A319-100,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/56084270409,https://www.airlines-manager.com/aircraft/show/110582842,0:00,5:29,198,"$263,114.00","$235,345.00","$1,188.61","$42,920.06"
MIA - MEM,56084270410,M-MKE-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/56084270410,https://www.airlines-manager.com/aircraft/show/88239556,3:00,8:29,320,"$346,619.00","$307,030.00",$959.47,"$55,993.31"
MIA - MEM,56099991652,M-MKE-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/56099991652,https://www.airlines-manager.com/aircraft/show/88494374,7:45,13:14,320,"$346,619.00","$307,030.00",$959.47,"$55,993.31"
MIA - MEM,56115475594,M-MKE-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/56115475594,https://www.airlines-manager.com/aircraft/show/88494378,14:00,19:29,320,"$346,619.00","$307,030.00",$959.47,"$55,993.31"
MIA - MEM,56125474124,M-MKE-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/56125474124,https://www.airlines-manager.com/aircraft/show/91806233,20:00,1:29,320,"$346,619.00","$307,030.00",$959.47,"$55,993.31"
MIA - MFR,56084270621,M-FCA-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/56084270621,https://www.airlines-manager.com/aircraft/show/119652478,1:30,13:59,320,"$759,604.00","$696,142.00","$2,175.44","$55,765.71"
MIA - MFR,56112079152,M-FCA-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/56112079152,https://www.airlines-manager.com/aircraft/show/119652477,12:00,0:29,320,"$759,604.00","$696,142.00","$2,175.44","$55,765.71"
MIA - MFR,56115475620,M-FCA-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/56115475620,https://www.airlines-manager.com/aircraft/show/119652476,14:00,2:29,320,"$759,604.00","$696,142.00","$2,175.44","$55,765.71"
MIA - MFR,56133285050,M-FCA-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/56133285050,https://www.airlines-manager.com/aircraft/show/119652479,23:30,11:59,320,"$759,604.00","$696,142.00","$2,175.44","$55,765.71"
MIA - MHT,56084270593,M-MHT-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/56084270593,https://www.airlines-manager.com/aircraft/show/115493371,1:15,8:14,310,"$454,152.00","$415,897.00","$1,341.60","$59,555.66"
MIA - MHT,56093103037,M-MHT-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/56093103037,https://www.airlines-manager.com/aircraft/show/115493372,3:30,10:29,310,"$454,152.00","$415,897.00","$1,341.60","$59,555.66"
MIA - MHT,56107731658,M-MHT-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/56107731658,https://www.airlines-manager.com/aircraft/show/114912307,11:00,17:59,112,"$214,353.00","$189,156.00","$1,688.89","$27,086.78"
MIA - MHT,56115475656,M-MHT-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/56115475656,https://www.airlines-manager.com/aircraft/show/115493373,14:00,20:59,310,"$454,152.00","$415,897.00","$1,341.60","$59,555.66"
MIA - MHT,56125474037,M-MHT-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/56125474037,https://www.airlines-manager.com/aircraft/show/115493370,19:00,1:59,310,"$454,152.00","$415,897.00","$1,341.60","$59,555.66"
MIA - MKE,56084270439,M-MKE-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/56084270439,https://www.airlines-manager.com/aircraft/show/88494378,0:15,7:14,320,"$448,362.00","$404,235.00","$1,263.23","$57,885.68"
MIA - MKE,56096590163,M-MKE-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/56096590163,https://www.airlines-manager.com/aircraft/show/91806233,6:15,13:14,320,"$448,362.00","$404,235.00","$1,263.23","$57,885.68"
MIA - MKE,56107731652,M-MKE-CMH-5 B,A319-100,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/56107731652,https://www.airlines-manager.com/aircraft/show/110582842,11:00,17:59,198,"$338,895.00","$307,460.00","$1,552.83","$44,027.68"
MIA - MKE,56115475592,M-MKE-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/56115475592,https://www.airlines-manager.com/aircraft/show/88239556,14:00,20:59,320,"$448,362.00","$404,235.00","$1,263.23","$57,885.68"
MIA - MKE,56125473981,M-MKE-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/56125473981,https://www.airlines-manager.com/aircraft/show/88494374,18:45,1:44,320,"$448,362.00","$404,235.00","$1,263.23","$57,885.68"
MIA - MSN,56084270647,M-RAP-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/56084270647,https://www.airlines-manager.com/aircraft/show/116789625,1:45,8:59,320,"$451,863.00","$409,290.00","$1,279.03","$56,583.87"
MIA - MSN,56099991661,M-RAP-GRR-5,ERJ-175,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/56099991661,https://www.airlines-manager.com/aircraft/show/116042630,7:45,14:59,112,"$214,048.00","$188,966.00","$1,687.20","$26,124.33"
MIA - MSN,56103828461,M-RAP-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/56103828461,https://www.airlines-manager.com/aircraft/show/116789623,10:00,17:14,320,"$451,863.00","$409,290.00","$1,279.03","$56,583.87"
MIA - MSN,56118925597,M-RAP-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/56118925597,https://www.airlines-manager.com/aircraft/show/116789624,16:45,23:59,320,"$451,863.00","$409,290.00","$1,279.03","$56,583.87"
MIA - MSN,56125473983,M-RAP-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/56125473983,https://www.airlines-manager.com/aircraft/show/116789622,18:45,1:59,320,"$451,863.00","$409,290.00","$1,279.03","$56,583.87"
MIA - MSO,56099991654,M-FAT-MSO-2,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/56099991654,https://www.airlines-manager.com/aircraft/show/113101231,7:45,18:59,320,"$700,402.00","$641,423.00","$2,004.45","$57,099.97"
MIA - MSO,56107731600,M-FAT-MSO-3,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/56107731600,https://www.airlines-manager.com/aircraft/show/113101234,11:00,22:14,320,"$700,402.00","$641,423.00","$2,004.45","$57,099.97"
MIA - MSO,56125474127,M-FAT-MSO-4,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/56125474127,https://www.airlines-manager.com/aircraft/show/113101232,20:00,7:14,320,"$700,402.00","$641,423.00","$2,004.45","$57,099.97"
MIA - MSO,56131084880,M-FAT-MSO-1,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/56131084880,https://www.airlines-manager.com/aircraft/show/113101229,22:30,9:44,320,"$700,402.00","$641,423.00","$2,004.45","$57,099.97"
MIA - MSP,56084270673,M-JFK-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/56084270673,https://www.airlines-manager.com/aircraft/show/105308267,2:00,9:59,338,"$544,122.00","$495,440.00","$1,465.80","$62,059.29"
MIA - MSP,56084270674,M-JFK-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/56084270674,https://www.airlines-manager.com/aircraft/show/105308268,3:00,10:59,338,"$544,122.00","$495,440.00","$1,465.80","$62,059.29"
MIA - MSP,56103828426,M-JFK-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/56103828426,https://www.airlines-manager.com/aircraft/show/105308266,10:00,17:59,338,"$544,122.00","$495,440.00","$1,465.80","$62,059.29"
MIA - MSP,56112079318,M-JFK-PHX-6,ERJ-175,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/56112079318,https://www.airlines-manager.com/aircraft/show/82683137,13:00,20:59,112,"$236,852.00","$203,894.00","$1,820.48","$25,539.96"
MIA - MSP,56122311625,M-JFK-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/56122311625,https://www.airlines-manager.com/aircraft/show/105308265,18:15,2:14,338,"$544,122.00","$495,440.00","$1,465.80","$62,059.29"
MIA - MSP,56131084789,M-JFK-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/56131084789,https://www.airlines-manager.com/aircraft/show/105308264,21:45,5:44,338,"$544,122.00","$495,440.00","$1,465.80","$62,059.29"
MIA - MSY,56084270613,M-MKE-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/56084270613,https://www.airlines-manager.com/aircraft/show/91806233,1:30,6:14,320,"$301,171.00","$266,048.00",$831.40,"$56,207.32"
MIA - MSY,56096590114,M-MKE-CMH-5 B,A319-100,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/56096590114,https://www.airlines-manager.com/aircraft/show/110582842,5:30,10:14,198,"229,505$","205,012$","$1,035.41","$43,312.39"
MIA - MSY,56103538574,M-MKE-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/56103538574,https://www.airlines-manager.com/aircraft/show/88239556,8:30,13:14,320,"301,171$","266,048$",$831.40,"$56,207.32"
MIA - MSY,56115475593,M-MKE-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/56115475593,https://www.airlines-manager.com/aircraft/show/88494374,14:00,18:44,320,"301,171$","266,048$",$831.40,"$56,207.32"
MIA - MSY,56125474070,M-MKE-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/56125474070,https://www.airlines-manager.com/aircraft/show/88494378,19:30,0:14,320,"301,171$","266,048$",$831.40,"$56,207.32"
MIA - MTJ,56084270583,M-RDM-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50834908,https://www.airlines-manager.com/network/showflight/56084270583,https://www.airlines-manager.com/aircraft/show/88725597,1:15,10:29,310,"579,705$","533,668$","$1,721.51","$57,797.98"
MIA - MTJ,56103828473,M-RDM-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50834908,https://www.airlines-manager.com/network/showflight/56103828473,https://www.airlines-manager.com/aircraft/show/88725598,10:00,19:14,310,"579,705$","533,668$","$1,721.51","$57,797.98"
MIA - MTJ,56112079278,M-RDM-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50834908,https://www.airlines-manager.com/network/showflight/56112079278,https://www.airlines-manager.com/aircraft/show/88725599,13:00,22:14,310,"579,705$","533,668$","$1,721.51","$57,797.98"
MIA - MTJ,56131084852,M-RDM-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50834908,https://www.airlines-manager.com/network/showflight/56131084852,https://www.airlines-manager.com/aircraft/show/106766698,22:15,7:29,310,"579,705$","533,668$","$1,721.51","$57,797.98"
MIA - MYR,56099991658,M-MAF-ROC-4,A321-200,https://www.airlines-manager.com/network/showline/50834920,https://www.airlines-manager.com/network/showflight/56099991658,https://www.airlines-manager.com/aircraft/show/120933310,7:45,11:59,310,"253,255$","226,311$",$730.04,"$53,459.29"
MIA - MYR,56112079175,M-MAF-ROC-3,A321-200,https://www.airlines-manager.com/network/showline/50834920,https://www.airlines-manager.com/network/showflight/56112079175,https://www.airlines-manager.com/aircraft/show/120933309,12:00,16:14,310,"253,255$","226,311$",$730.04,"$53,459.29"
MIA - MYR,56115475663,M-MAF-ROC-2,A321-200,https://www.airlines-manager.com/network/showline/50834920,https://www.airlines-manager.com/network/showflight/56115475663,https://www.airlines-manager.com/aircraft/show/120933308,14:00,18:14,310,"253,255$","226,311$",$730.04,"$53,459.29"
MIA - MYR,56128543833,M-MAF-ROC-1,A321-200,https://www.airlines-manager.com/network/showline/50834920,https://www.airlines-manager.com/network/showflight/56128543833,https://www.airlines-manager.com/aircraft/show/120933307,20:45,0:59,310,"253,255$","226,311$",$730.04,"$53,459.29"
MIA - NAS,56084270704,M-PUJ-BDA-5 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/56084270704,https://www.airlines-manager.com/aircraft/show/104034461,2:15,4:59,228,"79,351$","61,380$",$269.21,"$22,456.10"
MIA - NAS,56099991647,M-PUJ-BDA-6 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/56099991647,https://www.airlines-manager.com/aircraft/show/99326789,7:30,10:14,228,"79,351$","61,380$",$269.21,"$22,456.10"
MIA - NAS,56103828509,M-PUJ-BDA-1 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/56103828509,https://www.airlines-manager.com/aircraft/show/104034457,10:00,12:44,228,"79,351$","61,380$",$269.21,"$22,456.10"
MIA - NAS,56115475690,M-PUJ-BDA-2 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/56115475690,https://www.airlines-manager.com/aircraft/show/104034458,14:15,16:59,228,"79,351$","61,380$",$269.21,"$22,456.10"
MIA - NAS,56125473966,M-PUJ-BDA-3 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/56125473966,https://www.airlines-manager.com/aircraft/show/104034459,18:30,21:14,228,"79,351$","61,380$",$269.21,"$22,456.10"
MIA - NAS,56131084829,M-PUJ-BDA-4 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/56131084829,https://www.airlines-manager.com/aircraft/show/104034460,22:00,0:44,228,"79,351$","61,380$",$269.21,"$22,456.10"
MIA - OAK,56084270543,M-OAK-SMF-5,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/56084270543,https://www.airlines-manager.com/aircraft/show/91198617,1:00,12:59,320,"741,020$","675,128$","$2,109.78","$56,338.92"
MIA - OAK,56107731580,M-OAK-SMF-1,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/56107731580,https://www.airlines-manager.com/aircraft/show/91198615,11:00,22:59,320,"741,020$","675,128$","$2,109.78","$56,338.92"
MIA - OAK,56112079242,M-OAK-SMF-2,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/56112079242,https://www.airlines-manager.com/aircraft/show/91198619,13:00,0:59,320,"741,020$","675,128$","$2,109.78","$56,338.92"
MIA - OAK,56115475737,M-OAK-SMF-3,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/56115475737,https://www.airlines-manager.com/aircraft/show/91198616,15:00,2:59,320,"741,020$","675,128$","$2,109.78","$56,338.92"
MIA - OAK,56131084926,M-OAK-SMF-4,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/56131084926,https://www.airlines-manager.com/aircraft/show/91198618,23:00,10:59,320,"741,020$","675,128$","$2,109.78","$56,338.92"
MIA - OKC,56084270660,M-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/56084270660,https://www.airlines-manager.com/aircraft/show/110883112,1:45,8:29,310,"432,205$","394,574$","$1,272.82","$58,600.10"
MIA - OKC,56093103098,M-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/56093103098,https://www.airlines-manager.com/aircraft/show/110883111,4:00,10:44,310,"432,205$","394,574$","$1,272.82","$58,600.10"
MIA - OKC,56103828526,M-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/56103828526,https://www.airlines-manager.com/aircraft/show/104353572,10:00,16:44,112,"203,116$","178,405$","$1,592.90","$26,495.79"
MIA - OKC,56112079306,M-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/56112079306,https://www.airlines-manager.com/aircraft/show/110883110,13:00,19:44,310,"432,205$","394,574$","$1,272.82","$58,600.10"
MIA - OKC,56115475711,M-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/56115475711,https://www.airlines-manager.com/aircraft/show/110883113,14:45,21:29,310,"432,205$","394,574$","$1,272.82","$58,600.10"
MIA - OMA,56084270714,M-BOI-BNA-1,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/56084270714,https://www.airlines-manager.com/aircraft/show/104133006,2:30,9:59,320,"479,555$","434,477$","$1,357.74","$58,059.29"
MIA - OMA,56096590174,M-BOI-BNA-4,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/56096590174,https://www.airlines-manager.com/aircraft/show/103775657,6:30,13:59,320,"479,555$","434,477$","$1,357.74","$58,059.29"
MIA - OMA,56103828455,M-BOI-BNA-3,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/56103828455,https://www.airlines-manager.com/aircraft/show/104020880,10:00,17:29,320,"479,555$","434,477$","$1,357.74","$58,059.29"
MIA - OMA,56118925437,M-BOI-BNA-2,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/56118925437,https://www.airlines-manager.com/aircraft/show/104022609,15:15,22:44,320,"479,555$","434,477$","$1,357.74","$58,059.29"
MIA - OMA,56122311523,M-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/56122311523,https://www.airlines-manager.com/aircraft/show/103534663,17:15,0:44,112,"226,251$","199,652$","$1,782.61","$26,679.55"
MIA - ONT,56084270468,M-RNO-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/56084270468,https://www.airlines-manager.com/aircraft/show/90489722,0:30,11:29,320,"694,458$","632,850$","$1,977.66","$57,619.12"
MIA - ONT,56084270469,M-RNO-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/56084270469,https://www.airlines-manager.com/aircraft/show/86238756,2:30,13:29,320,"694,458$","632,850$","$1,977.66","$57,619.12"
MIA - ONT,56107731579,M-RNO-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/56107731579,https://www.airlines-manager.com/aircraft/show/90489723,11:00,21:59,320,"694,458$","632,850$","$1,977.66","$57,619.12"
MIA - ONT,56115475667,M-RNO-ONT-5 B,A319-100,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/56115475667,https://www.airlines-manager.com/aircraft/show/105223010,14:00,0:59,198,"521,256$","476,516$","$2,406.65","$43,385.37"
MIA - ONT,56131084872,M-RNO-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/56131084872,https://www.airlines-manager.com/aircraft/show/86238755,22:30,9:29,320,"694,458$","632,850$","$1,977.66","$57,619.12"
MIA - ORD,56093102994,M-ORD-DFW-1,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/56093102994,https://www.airlines-manager.com/aircraft/show/91600935,3:15,9:59,310,"425,664$","365,859$","$1,180.19","$54,335.50"
MIA - ORD,56093102995,M-ORD-DFW-4,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/56093102995,https://www.airlines-manager.com/aircraft/show/91600938,4:15,10:59,310,"425,664$","365,859$","$1,180.19","$54,335.50"
MIA - ORD,56103538633,M-ORD-DFW-6,ERJ-175,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/56103538633,https://www.airlines-manager.com/aircraft/show/82543123,9:00,15:44,112,"199,854$","161,877$","$1,445.33","$24,041.14"
MIA - ORD,56107731620,M-ORD-DFW-5,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/56107731620,https://www.airlines-manager.com/aircraft/show/91600937,11:00,17:44,310,"425,664$","365,859$","$1,180.19","$54,335.50"
MIA - ORD,56115475710,M-ORD-DFW-3,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/56115475710,https://www.airlines-manager.com/aircraft/show/91600939,14:45,21:29,310,"425,664$","365,859$","$1,180.19","$54,335.50"
MIA - ORD,56118925476,M-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/56118925476,https://www.airlines-manager.com/aircraft/show/106339154,15:30,22:14,198,"320,961$","273,065$","$1,379.12","$40,554.21"
MIA - ORD,56128543828,M-ORD-DFW-2,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/56128543828,https://www.airlines-manager.com/aircraft/show/91600936,20:45,3:29,310,"425,664$","365,859$","$1,180.19","$54,335.50"
MIA - ORF,56084270465,M-MHT-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/56084270465,https://www.airlines-manager.com/aircraft/show/114912307,0:15,5:29,112,"157,906$","137,933$","$1,231.54","$26,356.62"
MIA - ORF,56093102999,M-MHT-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/56093102999,https://www.airlines-manager.com/aircraft/show/115493373,3:15,8:29,310,"332,506$","301,556$",$972.76,"$57,622.17"
MIA - ORF,56103538564,M-MHT-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/56103538564,https://www.airlines-manager.com/aircraft/show/115493370,8:15,13:29,310,"332,506$","301,556$",$972.76,"$57,622.17"
MIA - ORF,56115475764,M-MHT-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/56115475764,https://www.airlines-manager.com/aircraft/show/115493371,15:00,20:14,310,"332,506$","301,556$",$972.76,"$57,622.17"
MIA - ORF,56122311516,M-MHT-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/56122311516,https://www.airlines-manager.com/aircraft/show/115493372,17:15,22:29,310,"332,506$","301,556$",$972.76,"$57,622.17"
MIA - PDX,56103828438,M-PDX-DTW-1,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/56103828438,https://www.airlines-manager.com/aircraft/show/89943715,10:00,22:29,320,"774,889$","704,572$","$2,201.79","$56,441.01"
MIA - PDX,56112079239,M-PDX-DTW-3,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/56112079239,https://www.airlines-manager.com/aircraft/show/89943713,13:00,1:29,320,"774,889$","704,572$","$2,201.79","$56,441.01"
MIA - PDX,56115475596,M-PDX-DTW-4,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/56115475596,https://www.airlines-manager.com/aircraft/show/89943712,14:00,2:29,320,"774,889$","704,572$","$2,201.79","$56,441.01"
MIA - PDX,56125474071,M-PDX-DTW-2,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/56125474071,https://www.airlines-manager.com/aircraft/show/89943714,19:30,7:59,320,"774,889$","704,572$","$2,201.79","$56,441.01"
MIA - PDX,56133285044,M-PDX-DTW-5,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/56133285044,https://www.airlines-manager.com/aircraft/show/89943711,23:30,11:59,320,"774,889$","704,572$","$2,201.79","$56,441.01"
MIA - PHL,56093103092,M-ORD-DFW-3,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/56093103092,https://www.airlines-manager.com/aircraft/show/91600939,4:00,9:59,310,"381,305$","339,530$","$1,095.26","$56,745.96"
MIA - PHL,56093103093,M-ORD-DFW-5,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/56093103093,https://www.airlines-manager.com/aircraft/show/91600937,5:00,10:59,310,"381,305$","339,530$","$1,095.26","$56,745.96"
MIA - PHL,56103828479,M-ORD-DFW-2,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/56103828479,https://www.airlines-manager.com/aircraft/show/91600936,10:00,15:59,310,"$381,305.00","$339,530.00","$1,095.26","$56,745.96"
MIA - PHL,56118925582,M-ORD-DFW-1,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/56118925582,https://www.airlines-manager.com/aircraft/show/91600935,16:30,22:29,310,"$381,305.00","$339,530.00","$1,095.26","$56,745.96"
MIA - PHL,56122311538,M-ORD-DFW-4,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/56122311538,https://www.airlines-manager.com/aircraft/show/91600938,17:30,23:29,310,"$381,305.00","$339,530.00","$1,095.26","$56,745.96"
MIA - PHL,56131084865,M-ORD-DFW-6,ERJ-175,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/56131084865,https://www.airlines-manager.com/aircraft/show/82543123,22:15,4:14,112,"$180,118.00","$153,280.00","$1,368.57","$25,617.83"
MIA - PHX,56084270425,M-JFK-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/56084270425,https://www.airlines-manager.com/aircraft/show/105308266,0:15,9:59,338,"$673,510.00","$614,805.00","$1,818.95","$63,164.90"
MIA - PHX,56084270426,M-JFK-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/56084270426,https://www.airlines-manager.com/aircraft/show/105308265,2:15,11:59,338,"$673,510.00","$614,805.00","$1,818.95","$63,164.90"
MIA - PHX,56107731551,M-JFK-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/56107731551,https://www.airlines-manager.com/aircraft/show/105308268,11:00,20:44,338,"$673,510.00","$614,805.00","$1,818.95","$63,164.90"
MIA - PHX,56112079115,M-JFK-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/56112079115,https://www.airlines-manager.com/aircraft/show/105308264,12:00,21:44,338,"$673,510.00","$614,805.00","$1,818.95","$63,164.90"
MIA - PHX,56118925561,M-JFK-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/56118925561,https://www.airlines-manager.com/aircraft/show/105308267,16:15,1:59,338,"$673,510.00","$614,805.00","$1,818.95","$63,164.90"
MIA - PHX,56128543948,M-JFK-PHX-6,ERJ-175,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/56128543948,https://www.airlines-manager.com/aircraft/show/82683137,21:00,6:44,112,"$291,110.00","$250,973.00","$2,240.83","$25,784.90"
MIA - PIT,56093102986,M-AUS-PIT-3,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/56093102986,https://www.airlines-manager.com/aircraft/show/99920624,3:15,9:14,320,"$382,895.00","$341,219.00","$1,066.31","$57,028.25"
MIA - PIT,56103828450,M-AUS-PIT-2,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/56103828450,https://www.airlines-manager.com/aircraft/show/99920625,10:00,15:59,320,"$382,895.00","$341,219.00","$1,066.31","$57,028.25"
MIA - PIT,56118925579,M-AUS-PIT-1,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/56118925579,https://www.airlines-manager.com/aircraft/show/99920626,16:30,22:29,320,"$382,895.00","$341,219.00","$1,066.31","$57,028.25"
MIA - PIT,56128543809,M-AUS-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/56128543809,https://www.airlines-manager.com/aircraft/show/82323689,20:30,2:29,112,"$180,854.00","$157,058.00","$1,402.30","$26,249.25"
MIA - PIT,56128543810,M-AUS-PIT-4,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/56128543810,https://www.airlines-manager.com/aircraft/show/99920623,21:15,3:14,320,"$382,895.00","$341,219.00","$1,066.31","$57,028.25"
MIA - PLS,56093103002,M-PUJ-BDA-6 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/56093103002,https://www.airlines-manager.com/aircraft/show/99326789,3:15,7:29,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - PLS,56093103003,M-PUJ-BDA-4 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/56093103003,https://www.airlines-manager.com/aircraft/show/104034460,5:00,9:14,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - PLS,56103828510,M-PUJ-BDA-2 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/56103828510,https://www.airlines-manager.com/aircraft/show/104034458,10:00,14:14,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - PLS,56115475691,M-PUJ-BDA-3 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/56115475691,https://www.airlines-manager.com/aircraft/show/104034459,14:15,18:29,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - PLS,56122311494,M-PUJ-BDA-1 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/56122311494,https://www.airlines-manager.com/aircraft/show/104034457,17:00,21:14,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - PLS,56131084830,M-PUJ-BDA-5 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/56131084830,https://www.airlines-manager.com/aircraft/show/104034461,22:00,2:14,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - POS,56112079202,M-84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/56112079202,https://www.airlines-manager.com/aircraft/show/106676225,12:30,20:29,962,"$1,341,807.00","$1,224,700.00","$1,273.08","$153,407.10"
MIA - POS,56118925558,M-84B-6 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/56118925558,https://www.airlines-manager.com/aircraft/show/106676230,16:00,23:59,732,"$1,109,115.00","$1,004,629.00","$1,372.44","$125,840.79"
MIA - PSP,56084270679,M-PSP-BFF-5,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/56084270679,https://www.airlines-manager.com/aircraft/show/116789630,2:00,12:44,320,"$662,540.00","$604,842.00","$1,890.13","$56,351.74"
MIA - PSP,56103828465,M-PSP-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/56103828465,https://www.airlines-manager.com/aircraft/show/116789631,10:00,20:44,320,"$662,540.00","$604,842.00","$1,890.13","$56,351.74"
MIA - PSP,56115475616,M-PSP-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/56115475616,https://www.airlines-manager.com/aircraft/show/116789634,14:00,0:44,320,"$662,540.00","$604,842.00","$1,890.13","$56,351.74"
MIA - PSP,56115475617,M-PSP-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/56115475617,https://www.airlines-manager.com/aircraft/show/116789632,14:15,0:59,320,"$662,540.00","$604,842.00","$1,890.13","$56,351.74"
MIA - PSP,56131084927,M-PSP-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/56131084927,https://www.airlines-manager.com/aircraft/show/116789633,23:00,9:44,243,"$563,441.00","$510,362.00","$2,100.26","$47,549.25"
MIA - PUJ,56093103041,M-PUJ-BDA-2 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/56093103041,https://www.airlines-manager.com/aircraft/show/104034458,3:30,9:14,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PUJ,56103828513,M-PUJ-BDA-5 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/56103828513,https://www.airlines-manager.com/aircraft/show/104034461,10:00,15:44,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PUJ,56118925571,M-PUJ-BDA-4 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/56118925571,https://www.airlines-manager.com/aircraft/show/104034460,16:15,21:59,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PUJ,56122311521,M-PUJ-BDA-6 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/56122311521,https://www.airlines-manager.com/aircraft/show/99326789,17:15,22:59,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PUJ,56128543966,M-PUJ-BDA-1 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/56128543966,https://www.airlines-manager.com/aircraft/show/104034457,21:15,2:59,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PUJ,56131084828,M-PUJ-BDA-3 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/56131084828,https://www.airlines-manager.com/aircraft/show/104034459,22:00,3:44,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PVD,56084270592,M-BUR-PVD-3,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/56084270592,https://www.airlines-manager.com/aircraft/show/108834805,1:15,7:59,310,"$427,684.00","$391,455.00","$1,262.76","$58,136.88"
MIA - PVD,56099991628,M-BUR-PVD-5 B,A319-100,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/56099991628,https://www.airlines-manager.com/aircraft/show/108834807,7:15,13:59,198,"$322,661.00","$293,626.00","$1,482.96","$43,607.82"
MIA - PVD,56107731635,M-BUR-PVD-2,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/56107731635,https://www.airlines-manager.com/aircraft/show/108834804,11:00,17:44,310,"$427,684.00","$391,455.00","$1,262.76","$58,136.88"
MIA - PVD,56122311487,M-BUR-PVD-4,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/56122311487,https://www.airlines-manager.com/aircraft/show/108834806,17:00,23:44,310,"$427,684.00","$391,455.00","$1,262.76","$58,136.88"
MIA - PVD,56131084854,M-BUR-PVD-1,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/56131084854,https://www.airlines-manager.com/aircraft/show/108834803,22:15,4:59,310,"$427,684.00","$391,455.00","$1,262.76","$58,136.88"
MIA - PWM,56099991639,M-SDF-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/56099991639,https://www.airlines-manager.com/aircraft/show/94886629,7:30,14:59,310,"$468,156.00","$430,232.00","$1,387.85","$57,492.03"
MIA - PWM,56115475627,M-SDF-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/56115475627,https://www.airlines-manager.com/aircraft/show/94886626,14:00,21:29,310,"$468,156.00","$430,232.00","$1,387.85","$57,492.03"
MIA - PWM,56125473993,M-SDF-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/56125473993,https://www.airlines-manager.com/aircraft/show/96692674,18:45,2:14,310,"$468,156.00","$430,232.00","$1,387.85","$57,492.03"
MIA - PWM,56128543835,M-SDF-PWM-5,ERJ-175,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/56128543835,https://www.airlines-manager.com/aircraft/show/105601657,20:45,4:14,112,"$220,894.00","$195,774.00","$1,747.98","$26,161.34"
MIA - PWM,56133285077,M-SDF-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/56133285077,https://www.airlines-manager.com/aircraft/show/94886625,23:45,7:14,310,"$468,156.00","$430,232.00","$1,387.85","$57,492.03"
MIA - RAP,56084270387,M-RAP-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/56084270387,https://www.airlines-manager.com/aircraft/show/116789624,0:00,8:59,320,"$563,858.00","$513,914.00","$1,605.98","$57,207.50"
MIA - RAP,56084270388,M-RAP-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/56084270388,https://www.airlines-manager.com/aircraft/show/116789622,2:00,10:59,320,"$563,858.00","$513,914.00","$1,605.98","$57,207.50"
MIA - RAP,56103828463,M-RAP-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/56103828463,https://www.airlines-manager.com/aircraft/show/116789625,10:00,18:59,320,"$563,858.00","$513,914.00","$1,605.98","$57,207.50"
MIA - RAP,56115475797,M-RAP-GRR-5,ERJ-175,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/56115475797,https://www.airlines-manager.com/aircraft/show/116042630,15:00,23:59,112,"$265,771.00","$235,577.00","$2,103.37","$26,223.78"
MIA - RAP,56122311510,M-RAP-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/56122311510,https://www.airlines-manager.com/aircraft/show/116789623,17:15,2:14,320,"$563,858.00","$513,914.00","$1,605.98","$57,207.50"
MIA - RDM,56103828494,M-RDM-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50834907,https://www.airlines-manager.com/network/showflight/56103828494,https://www.airlines-manager.com/aircraft/show/106766698,10:00,22:14,310,"$750,430.00","$694,304.00","$2,239.69","$56,755.10"
MIA - RDM,56112079277,M-RDM-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50834907,https://www.airlines-manager.com/network/showflight/56112079277,https://www.airlines-manager.com/aircraft/show/88725597,13:00,1:14,310,"$750,430.00","$694,304.00","$2,239.69","$56,755.10"
MIA - RDM,56125474052,M-RDM-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50834907,https://www.airlines-manager.com/network/showflight/56125474052,https://www.airlines-manager.com/aircraft/show/88725598,19:15,7:29,310,"$750,430.00","$694,304.00","$2,239.69","$56,755.10"
MIA - RDM,56131084849,M-RDM-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50834907,https://www.airlines-manager.com/network/showflight/56131084849,https://www.airlines-manager.com/aircraft/show/88725599,22:15,10:29,310,"$750,430.00","$694,304.00","$2,239.69","$56,755.10"
MIA - RDU,56093103147,M-AUS-PIT-1,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/56093103147,https://www.airlines-manager.com/aircraft/show/99920626,4:30,9:14,320,"$310,630.00","$274,454.00",$857.67,"$57,983.24"
MIA - RDU,56103538598,M-AUS-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/56103538598,https://www.airlines-manager.com/aircraft/show/82323689,8:30,13:14,112,"$147,838.00","$127,705.00","$1,140.22","$26,979.93"
MIA - RDU,56103828448,M-AUS-PIT-4,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/56103828448,https://www.airlines-manager.com/aircraft/show/99920623,10:00,14:44,320,"$310,630.00","$274,454.00",$857.67,"$57,983.24"
MIA - RDU,56118925524,M-AUS-PIT-3,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/56118925524,https://www.airlines-manager.com/aircraft/show/99920624,16:00,20:44,320,"$310,630.00","$274,454.00",$857.67,"$57,983.24"
MIA - RDU,56131084812,M-AUS-PIT-2,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/56131084812,https://www.airlines-manager.com/aircraft/show/99920625,22:00,2:44,320,"$310,630.00","$274,454.00",$857.67,"$57,983.24"
MIA - RIC,56103538586,M-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/56103538586,https://www.airlines-manager.com/aircraft/show/110883112,8:30,13:44,310,"$336,966.00","$305,684.00",$986.08,"$58,410.96"
MIA - RIC,56107731641,M-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/56107731641,https://www.airlines-manager.com/aircraft/show/110883111,11:00,16:14,310,"$336,966.00","$305,684.00",$986.08,"$58,410.96"
MIA - RIC,56118925604,M-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/56118925604,https://www.airlines-manager.com/aircraft/show/104353572,16:45,21:59,112,"$160,060.00","$139,846.00","$1,248.63","$26,722.17"
MIA - RIC,56125474106,M-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/56125474106,https://www.airlines-manager.com/aircraft/show/110883110,19:45,0:59,310,"$336,966.00","$305,684.00",$986.08,"$58,410.96"
MIA - RIC,56128543986,M-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/56128543986,https://www.airlines-manager.com/aircraft/show/110883113,21:30,2:44,310,"$336,966.00","$305,684.00",$986.08,"$58,410.96"
MIA - RNO,56084270567,M-RNO-ONT-5 B,A319-100,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/56084270567,https://www.airlines-manager.com/aircraft/show/105223010,1:00,12:44,198,"$546,103.00","$500,266.00","$2,526.60","$42,636.31"
MIA - RNO,56107731575,M-RNO-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/56107731575,https://www.airlines-manager.com/aircraft/show/86238755,11:00,22:29,320,"$725,284.00","$662,433.00","$2,070.10","$57,686.47"
MIA - RNO,56112079240,M-RNO-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/56112079240,https://www.airlines-manager.com/aircraft/show/90489722,13:00,0:29,320,"$725,284.00","$662,433.00","$2,070.10","$57,686.47"
MIA - RNO,56115475733,M-RNO-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/56115475733,https://www.airlines-manager.com/aircraft/show/86238756,15:00,2:29,320,"$725,284.00","$662,433.00","$2,070.10","$57,686.47"
MIA - RNO,56131084811,M-RNO-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/56131084811,https://www.airlines-manager.com/aircraft/show/90489723,22:00,9:29,320,"$725,284.00","$662,433.00","$2,070.10","$57,686.47"
MIA - ROC,56084270663,M-MAF-ROC-2,A321-200,https://www.airlines-manager.com/network/showline/50424914,https://www.airlines-manager.com/network/showflight/56084270663,https://www.airlines-manager.com/aircraft/show/120933308,1:45,8:29,310,"$427,406.00","$391,117.00","$1,261.67","$58,086.68"
MIA - ROC,56103828507,M-MAF-ROC-1,A321-200,https://www.airlines-manager.com/network/showline/50424914,https://www.airlines-manager.com/network/showflight/56103828507,https://www.airlines-manager.com/aircraft/show/120933307,10:00,16:44,310,"$427,406.00","$391,117.00","$1,261.67","$58,086.68"
MIA - ROC,56122311544,M-MAF-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50424914,https://www.airlines-manager.com/network/showflight/56122311544,https://www.airlines-manager.com/aircraft/show/92137503,17:30,0:14,112,"$201,000.00","$177,122.00","$1,581.45","$26,305.25"
MIA - ROC,56125474084,M-MAF-ROC-4,A321-200,https://www.airlines-manager.com/network/showline/50424914,https://www.airlines-manager.com/network/showflight/56125474084,https://www.airlines-manager.com/aircraft/show/120933310,19:30,2:14,310,"$427,406.00","$391,117.00","$1,261.67","$58,086.68"
MIA - ROC,56133285085,M-MAF-ROC-3,A321-200,https://www.airlines-manager.com/network/showline/50424914,https://www.airlines-manager.com/network/showflight/56133285085,https://www.airlines-manager.com/aircraft/show/120933309,23:45,6:29,310,"$427,406.00","$391,117.00","$1,261.67","$58,086.68"
MIA - RSW,56093103100,M-ANU-SXM-3 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/56093103100,https://www.airlines-manager.com/aircraft/show/110114297,4:00,6:29,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - RSW,56103538644,M-ANU-SXM-1 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/56103538644,https://www.airlines-manager.com/aircraft/show/110114295,9:15,11:44,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - RSW,56107731522,M-ANU-SXM-2 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/56107731522,https://www.airlines-manager.com/aircraft/show/110114296,10:15,12:44,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - RSW,56115475670,M-ANU-SXM-6 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/56115475670,https://www.airlines-manager.com/aircraft/show/110114300,14:00,16:29,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - RSW,56128543944,M-ANU-SXM-5 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/56128543944,https://www.airlines-manager.com/aircraft/show/110114299,21:00,23:29,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - RSW,56131084939,M-ANU-SXM-4 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/56131084939,https://www.airlines-manager.com/aircraft/show/110114298,23:00,1:29,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - SAN,56084270420,M-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/56084270420,https://www.airlines-manager.com/aircraft/show/120519142,0:00,10:44,0,"$190,591.00","$116,070.00",#DIV/0!,"$10,813.98"
MIA - SAN,56084270421,M-BWI-YYZ-2,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/56084270421,https://www.airlines-manager.com/aircraft/show/92153440,1:45,12:44,310,"$680,679.00","$623,880.00","$2,012.52","$56,802.43"
MIA - SAN,56103828481,M-BWI-YYZ-3,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/56103828481,https://www.airlines-manager.com/aircraft/show/92153441,10:00,20:59,310,"$680,679.00","$623,880.00","$2,012.52","$56,802.43"
MIA - SAN,56112079182,M-BWI-YYZ-6 B,A319-100,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/56112079182,https://www.airlines-manager.com/aircraft/show/120519717,12:00,22:59,198,"$511,028.00","$465,491.00","$2,350.96","$42,381.58"
MIA - SAN,56122311481,M-BWI-YYZ-4,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/56122311481,https://www.airlines-manager.com/aircraft/show/92153442,17:00,3:59,310,"$680,679.00","$623,880.00","$2,012.52","$56,802.43"
MIA - SAN,56125474029,M-BWI-YYZ-5,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/56125474029,https://www.airlines-manager.com/aircraft/show/92153439,19:00,5:59,310,"$680,679.00","$623,880.00","$2,012.52","$56,802.43"
MIA - SAN,56131084910,M-BWI-YYZ-1,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/56131084910,https://www.airlines-manager.com/aircraft/show/92153443,22:45,9:44,310,"$664,966.00","$611,888.00","$1,973.83","$55,710.59"
MIA - SAT,56093102987,M-BDL-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/56093102987,https://www.airlines-manager.com/aircraft/show/107763562,3:15,9:44,320,"$412,163.00","$370,879.00","$1,159.00","$57,204.99"
MIA - SAT,56107731596,M-BDL-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/56107731596,https://www.airlines-manager.com/aircraft/show/107763565,11:00,17:29,320,"$412,163.00","$370,879.00","$1,159.00","$57,204.99"
MIA - SAT,56115475714,M-BDL-SAT-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/56115475714,https://www.airlines-manager.com/aircraft/show/107467213,14:45,21:14,112,"$194,327.00","$170,361.00","$1,521.08","$26,276.76"
MIA - SAT,56128543797,M-BDL-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/56128543797,https://www.airlines-manager.com/aircraft/show/107763561,20:30,2:59,320,"$412,163.00","$370,879.00","$1,159.00","$57,204.99"
MIA - SAT,56128543798,M-BDL-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/56128543798,https://www.airlines-manager.com/aircraft/show/107763566,20:45,3:14,320,"$412,163.00","$370,879.00","$1,159.00","$57,204.99"
MIA - SAV,56084270458,M-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/56084270458,https://www.airlines-manager.com/aircraft/show/110883111,0:15,3:59,310,"$215,345.00","$190,074.00",$613.14,"$50,912.68"
MIA - SAV,56096590161,M-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/56096590161,https://www.airlines-manager.com/aircraft/show/104353572,6:00,9:44,112,"$100,516.00","$84,583.00",$755.21,"$22,656.16"
MIA - SAV,56103538626,M-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/56103538626,https://www.airlines-manager.com/aircraft/show/110883110,9:00,12:44,310,"$215,345.00","$190,074.00",$613.14,"$50,912.68"
MIA - SAV,56107731642,M-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/56107731642,https://www.airlines-manager.com/aircraft/show/110883113,11:00,14:44,310,"$215,345.00","$190,074.00",$613.14,"$50,912.68"
MIA - SAV,56131084822,M-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/56131084822,https://www.airlines-manager.com/aircraft/show/110883112,22:00,1:44,271,"$199,390.00","$174,590.00",$644.24,"$46,765.18"
MIA - SDF,56084270520,M-SDF-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/56084270520,https://www.airlines-manager.com/aircraft/show/94886629,0:45,6:29,310,"$357,909.00","$323,543.00","$1,043.69","$56,431.92"
MIA - SDF,56103538559,M-SDF-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/56103538559,https://www.airlines-manager.com/aircraft/show/94886626,8:15,13:59,310,"$357,909.00","$323,543.00","$1,043.69","$56,431.92"
MIA - SDF,56112079285,M-SDF-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/56112079285,https://www.airlines-manager.com/aircraft/show/96692674,13:00,18:44,310,"$357,909.00","$323,543.00","$1,043.69","$56,431.92"
MIA - SDF,56115475791,M-SDF-PWM-5,ERJ-175,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/56115475791,https://www.airlines-manager.com/aircraft/show/105601657,15:00,20:44,112,"$169,578.00","$147,365.00","$1,315.76","$25,703.20"
MIA - SDF,56122311586,M-SDF-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/56122311586,https://www.airlines-manager.com/aircraft/show/94886625,18:00,23:44,310,"$357,909.00","$323,543.00","$1,043.69","$56,431.92"
MIA - SEA,56084270603,M-LAS-SEA-3,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/56084270603,https://www.airlines-manager.com/aircraft/show/105093927,1:30,13:59,338,"$834,881.00","$766,832.00","$2,268.73","$61,428.46"
MIA - SEA,56103828425,M-LAS-SEA-4,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/56103828425,https://www.airlines-manager.com/aircraft/show/105093928,10:00,22:29,338,"$834,881.00","$766,832.00","$2,268.73","$61,428.46"
MIA - SEA,56112079218,M-LAS-SEA-5,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/56112079218,https://www.airlines-manager.com/aircraft/show/105093929,13:00,1:29,338,"$834,881.00","$766,832.00","$2,268.73","$61,428.46"
MIA - SEA,56128543792,M-LAS-SEA-1,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/56128543792,https://www.airlines-manager.com/aircraft/show/105093925,20:30,8:59,338,"$834,881.00","$766,832.00","$2,268.73","$61,428.46"
MIA - SEA,56131084891,M-LAS-SEA-6 B,A319-100,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/56131084891,https://www.airlines-manager.com/aircraft/show/113251304,22:30,11:14,198,"$578,175.00","$520,898.00","$2,630.80","$40,908.22"
MIA - SEA,56133285041,M-LAS-SEA-2,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/56133285041,https://www.airlines-manager.com/aircraft/show/105093926,23:30,11:59,338,"$834,881.00","$766,832.00","$2,268.73","$61,428.46"
MIA - SJC,56084270645,M-SJC-YYC-5,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/56084270645,https://www.airlines-manager.com/aircraft/show/107763563,1:45,13:44,320,"$734,893.00","$668,726.00","$2,089.77","$55,804.67"
MIA - SJC,56112079138,M-SJC-YYC-1,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/56112079138,https://www.airlines-manager.com/aircraft/show/107763569,12:00,23:59,320,"$734,893.00","$668,726.00","$2,089.77","$55,804.67"
MIA - SJC,56115475608,M-SJC-YYC-2,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/56115475608,https://www.airlines-manager.com/aircraft/show/107763568,14:00,1:59,320,"$734,893.00","$668,726.00","$2,089.77","$55,804.67"
MIA - SJC,56118925529,M-SJC-YYC-3,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/56118925529,https://www.airlines-manager.com/aircraft/show/107763567,16:00,3:59,320,"$734,893.00","$668,726.00","$2,089.77","$55,804.67"
MIA - SJC,56133285073,M-SJC-YYC-4,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/56133285073,https://www.airlines-manager.com/aircraft/show/107763564,23:45,11:44,320,"$734,893.00","$668,726.00","$2,089.77","$55,804.67"
MIA - SJU,56093103006,M-SJU-BOS-6 B,A319-100,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/56093103006,https://www.airlines-manager.com/aircraft/show/110582841,3:15,9:29,198,"$287,737.00","$258,672.00","$1,306.42","$41,498.18"
MIA - SJU,56107731521,M-SJU-BOS-2,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/56107731521,https://www.airlines-manager.com/aircraft/show/91352062,10:15,16:29,310,"$381,512.00","$345,237.00","$1,113.67","$55,385.61"
MIA - SJU,56112079195,M-SJU-BOS-3,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/56112079195,https://www.airlines-manager.com/aircraft/show/91352061,12:15,18:29,310,"$381,512.00","$345,237.00","$1,113.67","$55,385.61"
MIA - SJU,56122311664,M-SJU-BOS-4,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/56122311664,https://www.airlines-manager.com/aircraft/show/91352060,18:15,0:29,310,"$381,512.00","$345,237.00","$1,113.67","$55,385.61"
MIA - SJU,56125474056,M-SJU-BOS-5,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/56125474056,https://www.airlines-manager.com/aircraft/show/91352059,19:15,1:29,310,"$381,512.00","$345,237.00","$1,113.67","$55,385.61"
MIA - SJU,56131084909,M-SJU-BOS-1,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/56131084909,https://www.airlines-manager.com/aircraft/show/91352063,22:45,4:59,274,"$342,154.00","$307,168.00","$1,121.05","$49,278.29"
MIA - SKB,56084270631,M-ANU-SXM-4 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/56084270631,https://www.airlines-manager.com/aircraft/show/110114298,1:30,8:29,228,"$345,078.00","$315,549.00","$1,383.99","$45,186.01"
MIA - SKB,56084270632,M-ANU-SXM-1 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/56084270632,https://www.airlines-manager.com/aircraft/show/110114295,2:15,9:14,228,"$345,078.00","$315,549.00","$1,383.99","$45,186.01"
MIA - SKB,56093103005,M-ANU-SXM-2 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/56093103005,https://www.airlines-manager.com/aircraft/show/110114296,3:15,10:14,228,"$345,078.00","$315,549.00","$1,383.99","$45,186.01"
MIA - SKB,56099991590,M-ANU-SXM-6 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/56099991590,https://www.airlines-manager.com/aircraft/show/110114300,6:45,13:44,228,"$345,078.00","$315,549.00","$1,383.99","$45,186.01"
MIA - SKB,56115475669,M-ANU-SXM-5 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/56115475669,https://www.airlines-manager.com/aircraft/show/110114299,14:00,20:59,228,"$345,078.00","$315,549.00","$1,383.99","$45,186.01"
MIA - SKB,56128543943,M-ANU-SXM-3 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/56128543943,https://www.airlines-manager.com/aircraft/show/110114297,21:00,3:59,228,"$345,078.00","$315,549.00","$1,383.99","$45,186.01"
MIA - SLC,56084270392,M-SJU-BOS-2,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/56084270392,https://www.airlines-manager.com/aircraft/show/91352062,0:00,10:14,310,"$644,121.00","$586,535.00","$1,892.05","$57,316.12"
MIA - SLC,56084270393,M-SJU-BOS-4,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/56084270393,https://www.airlines-manager.com/aircraft/show/91352060,1:00,11:14,310,"$644,121.00","$586,535.00","$1,892.05","$57,316.12"
MIA - SLC,56084270394,M-SJU-BOS-3,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/56084270394,https://www.airlines-manager.com/aircraft/show/91352061,2:00,12:14,310,"$644,121.00","$586,535.00","$1,892.05","$57,316.12"
MIA - SLC,56103538623,M-SJU-BOS-5,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/56103538623,https://www.airlines-manager.com/aircraft/show/91352059,9:00,19:14,310,"$644,121.00","$586,535.00","$1,892.05","$57,316.12"
MIA - SLC,56103828520,M-SJU-BOS-6 B,A319-100,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/56103828520,https://www.airlines-manager.com/aircraft/show/110582841,10:00,20:14,198,"$483,924.00","$437,765.00","$2,210.93","$42,778.34"
MIA - SLC,56112079160,M-SJU-BOS-1,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/56112079160,https://www.airlines-manager.com/aircraft/show/91352063,12:00,22:14,310,"$644,121.00","$586,535.00","$1,892.05","$57,316.12"
MIA - SMF,56084270544,M-OAK-SMF-2,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/56084270544,https://www.airlines-manager.com/aircraft/show/91198619,1:00,12:59,320,"$735,091.00","$671,059.00","$2,097.06","$55,999.36"
MIA - SMF,56084270545,M-OAK-SMF-3,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/56084270545,https://www.airlines-manager.com/aircraft/show/91198616,3:00,14:59,320,"$735,091.00","$671,059.00","$2,097.06","$55,999.36"
MIA - SMF,56107731581,M-OAK-SMF-4,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/56107731581,https://www.airlines-manager.com/aircraft/show/91198618,11:00,22:59,320,"$735,091.00","$671,059.00","$2,097.06","$55,999.36"
MIA - SMF,56112079241,M-OAK-SMF-5,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/56112079241,https://www.airlines-manager.com/aircraft/show/91198617,13:00,0:59,320,"$735,091.00","$671,059.00","$2,097.06","$55,999.36"
MIA - SMF,56131084925,M-OAK-SMF-1,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/56131084925,https://www.airlines-manager.com/aircraft/show/91198615,23:00,10:59,320,"$735,091.00","$671,059.00","$2,097.06","$55,999.36"
MIA - STL,56084270614,M-ELP-MCI-1,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/56084270614,https://www.airlines-manager.com/aircraft/show/91806234,1:30,7:44,320,"$395,052.00","$351,479.00","$1,098.37","$56,387.01"
MIA - STL,56084270615,M-ELP-MCI-5 B,A319-100,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/56084270615,https://www.airlines-manager.com/aircraft/show/105093924,2:00,8:14,198,"$298,871.00","$268,112.00","$1,354.10","$43,012.62"
MIA - STL,56103538575,M-ELP-MCI-4,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/56103538575,https://www.airlines-manager.com/aircraft/show/91806231,8:30,14:44,320,"$395,052.00","$351,479.00","$1,098.37","$56,387.01"
MIA - STL,56103828441,M-ELP-MCI-3,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/56103828441,https://www.airlines-manager.com/aircraft/show/91806232,10:00,16:14,320,"$395,052.00","$351,479.00","$1,098.37","$56,387.01"
MIA - STL,56122311471,M-ELP-MCI-2,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/56122311471,https://www.airlines-manager.com/aircraft/show/91806235,17:00,23:14,320,"$395,052.00","$351,479.00","$1,098.37","$56,387.01"
MIA - SXM,56099991589,M-ANU-SXM-5 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/56099991589,https://www.airlines-manager.com/aircraft/show/110114299,6:45,13:44,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SXM,56115475668,M-ANU-SXM-3 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/56115475668,https://www.airlines-manager.com/aircraft/show/110114297,14:00,20:59,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SXM,56118925553,M-ANU-SXM-4 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/56118925553,https://www.airlines-manager.com/aircraft/show/110114298,16:00,22:59,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SXM,56125474062,M-ANU-SXM-1 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/56125474062,https://www.airlines-manager.com/aircraft/show/110114295,19:15,2:14,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SXM,56128543783,M-ANU-SXM-2 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/56128543783,https://www.airlines-manager.com/aircraft/show/110114296,20:15,3:14,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SXM,56133285087,M-ANU-SXM-6 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/56133285087,https://www.airlines-manager.com/aircraft/show/110114300,23:45,6:44,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SYR,56084270716,M-EUG-SYR-1,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/56084270716,https://www.airlines-manager.com/aircraft/show/119652483,2:30,9:14,320,"$433,063.00","$391,646.00","$1,223.89","$58,165.25"
MIA - SYR,56099991622,M-EUG-SYR-3,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/56099991622,https://www.airlines-manager.com/aircraft/show/119652481,7:15,13:59,320,"$433,063.00","$391,646.00","$1,223.89","$58,165.25"
MIA - SYR,56112079154,M-EUG-SYR-2,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/56112079154,https://www.airlines-manager.com/aircraft/show/119652482,12:00,18:44,320,"$433,063.00","$391,646.00","$1,223.89","$58,165.25"
MIA - SYR,56115475622,M-EUG-SYR-4,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/56115475622,https://www.airlines-manager.com/aircraft/show/119652480,14:00,20:44,320,"$433,063.00","$391,646.00","$1,223.89","$58,165.25"
MIA - TPA,56093103191,M-BUR-PVD-1,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/56093103191,https://www.airlines-manager.com/aircraft/show/108834803,5:00,7:59,310,"$128,129.00","$102,113.00",$329.40,"$34,227.82"
MIA - TPA,56107731636,M-BUR-PVD-3,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/56107731636,https://www.airlines-manager.com/aircraft/show/108834805,11:00,13:59,310,"$128,129.00","$102,113.00",$329.40,"$34,227.82"
MIA - TPA,56122311498,M-BUR-PVD-5 B,A319-100,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/56122311498,https://www.airlines-manager.com/aircraft/show/108834807,17:00,19:59,198,"$95,593.00","$74,772.00",$377.64,"$25,063.24"
MIA - TPA,56122311499,M-BUR-PVD-2,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/56122311499,https://www.airlines-manager.com/aircraft/show/108834804,17:45,20:44,310,"$128,129.00","$102,113.00",$329.40,"$34,227.82"
MIA - TPA,56133285084,M-BUR-PVD-4,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/56133285084,https://www.airlines-manager.com/aircraft/show/108834806,23:45,2:44,310,"$128,129.00","$102,113.00",$329.40,"$34,227.82"
MIA - TUL,56084270509,M-FAR-TUL-2,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/56084270509,https://www.airlines-manager.com/aircraft/show/110883160,0:45,7:29,320,"$417,622.00","$376,181.00","$1,175.57","$55,868.47"
MIA - TUL,56084270510,M-FAR-TUL-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/56084270510,https://www.airlines-manager.com/aircraft/show/87169421,3:00,9:44,112,"$196,831.00","$172,707.00","$1,542.03","$25,649.55"
MIA - TUL,56107731599,M-FAR-TUL-3,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/56107731599,https://www.airlines-manager.com/aircraft/show/110883161,11:00,17:44,320,"$417,622.00","$376,181.00","$1,175.57","$55,868.47"
MIA - TUL,56118925531,M-FAR-TUL-4,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/56118925531,https://www.airlines-manager.com/aircraft/show/110883162,16:00,22:44,320,"$417,622.00","$376,181.00","$1,175.57","$55,868.47"
MIA - TUL,56125474095,M-FAR-TUL-1,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/56125474095,https://www.airlines-manager.com/aircraft/show/110883159,19:45,2:29,320,"$417,622.00","$376,181.00","$1,175.57","$55,868.47"
MIA - TUS,56084270490,M-IAD-TUS-3,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/56084270490,https://www.airlines-manager.com/aircraft/show/97556719,0:30,9:59,310,"$593,850.00","$545,245.00","$1,758.85","$57,495.08"
MIA - TUS,56103828489,M-IAD-TUS-2,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/56103828489,https://www.airlines-manager.com/aircraft/show/97556720,10:00,19:29,310,"$593,850.00","$545,245.00","$1,758.85","$57,495.08"
MIA - TUS,56112079286,M-IAD-TUS-5,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/56112079286,https://www.airlines-manager.com/aircraft/show/97556716,13:00,22:29,310,"$593,850.00","$545,245.00","$1,758.85","$57,495.08"
MIA - TUS,56118925489,M-IAD-TUS-1,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/56118925489,https://www.airlines-manager.com/aircraft/show/97556721,15:45,1:14,310,"$593,850.00","$545,245.00","$1,758.85","$57,495.08"
MIA - TUS,56125473994,M-IAD-TUS-4,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/56125473994,https://www.airlines-manager.com/aircraft/show/97556718,18:45,4:14,310,"$593,850.00","$545,245.00","$1,758.85","$57,495.08"
MIA - TYS,56093103038,M-CID-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/56093103038,https://www.airlines-manager.com/aircraft/show/116789650,3:30,8:29,310,"$315,564.00","$286,171.00",$923.13,"$57,425.62"
MIA - TYS,56103828499,M-CID-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/56103828499,https://www.airlines-manager.com/aircraft/show/116789651,10:00,14:59,310,"$315,564.00","$286,171.00",$923.13,"$57,425.62"
MIA - TYS,56115475712,M-CID-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/56115475712,https://www.airlines-manager.com/aircraft/show/116789652,14:45,19:44,310,"$315,564.00","$286,171.00",$923.13,"$57,425.62"
MIA - TYS,56131084825,M-CID-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/56131084825,https://www.airlines-manager.com/aircraft/show/116789653,22:00,2:59,310,"$315,564.00","$286,171.00",$923.13,"$57,425.62"
MIA - YUL,56096590172,M-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/56096590172,https://www.airlines-manager.com/aircraft/show/113101225,6:30,13:59,400,"$630,873.00","$576,566.00","$1,441.42","$77,046.68"
MIA - YUL,56107731569,M-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/56107731569,https://www.airlines-manager.com/aircraft/show/113101226,11:00,18:29,400,"$630,873.00","$576,566.00","$1,441.42","$77,046.68"
MIA - YUL,56115475730,M-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/56115475730,https://www.airlines-manager.com/aircraft/show/113101227,15:00,22:29,400,"$630,873.00","$576,566.00","$1,441.42","$77,046.68"
MIA - YUL,56133285067,M-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/56133285067,https://www.airlines-manager.com/aircraft/show/113101224,23:45,7:14,400,"$630,873.00","$576,566.00","$1,441.42","$77,046.68"
MIA - YVR,56107731568,M-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/56107731568,https://www.airlines-manager.com/aircraft/show/113101224,11:00,23:44,400,"$1,049,041.00","$964,395.00","$2,410.99","$75,737.83"
MIA - YVR,56115475587,M-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/56115475587,https://www.airlines-manager.com/aircraft/show/113101225,14:00,2:44,400,"$1,049,041.00","$964,395.00","$2,410.99","$75,737.83"
MIA - YVR,56125473949,M-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/56125473949,https://www.airlines-manager.com/aircraft/show/113101226,18:30,7:14,400,"$1,049,041.00","$964,395.00","$2,410.99","$75,737.83"
MIA - YVR,56131084871,M-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/56131084871,https://www.airlines-manager.com/aircraft/show/113101227,22:30,11:14,400,"$1,049,041.00","$964,395.00","$2,410.99","$75,737.83"
MIA - YYC,56084270385,M-SJC-YYC-1,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/56084270385,https://www.airlines-manager.com/aircraft/show/107763569,0:00,11:44,320,"$733,218.00","$664,622.00","$2,076.94","$56,643.92"
MIA - YYC,56084270386,M-SJC-YYC-2,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/56084270386,https://www.airlines-manager.com/aircraft/show/107763568,2:00,13:44,320,"$733,218.00","$664,622.00","$2,076.94","$56,643.92"
MIA - YYC,56093103085,M-SJC-YYC-3,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/56093103085,https://www.airlines-manager.com/aircraft/show/107763567,4:00,15:44,320,"$733,218.00","$664,622.00","$2,076.94","$56,643.92"
MIA - YYC,56112079137,M-SJC-YYC-4,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/56112079137,https://www.airlines-manager.com/aircraft/show/107763564,12:00,23:44,320,"$733,218.00","$664,622.00","$2,076.94","$56,643.92"
MIA - YYC,56115475607,M-SJC-YYC-5,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/56115475607,https://www.airlines-manager.com/aircraft/show/107763563,14:00,1:44,320,"$733,218.00","$664,622.00","$2,076.94","$56,643.92"
MIA - YYZ,56084270734,M-BWI-YYZ-3,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/56084270734,https://www.airlines-manager.com/aircraft/show/92153441,2:45,9:44,310,"$439,732.00","$392,992.00","$1,267.72","$56,275.70"
MIA - YYZ,56093103173,M-BWI-YYZ-6 B,A319-100,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/56093103173,https://www.airlines-manager.com/aircraft/show/120519717,4:45,11:44,198,"$329,542.00","$292,098.00","$1,475.24","$41,827.88"
MIA - YYZ,56103828482,M-BWI-YYZ-4,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/56103828482,https://www.airlines-manager.com/aircraft/show/92153442,10:00,16:59,310,"$439,732.00","$392,992.00","$1,267.72","$56,275.70"
MIA - YYZ,56112079161,M-BWI-YYZ-5,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/56112079161,https://www.airlines-manager.com/aircraft/show/92153439,12:00,18:59,310,"$439,732.00","$392,992.00","$1,267.72","$56,275.70"
MIA - YYZ,56118925486,M-BWI-YYZ-1,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/56118925486,https://www.airlines-manager.com/aircraft/show/92153443,15:45,22:44,310,"$439,732.00","$392,992.00","$1,267.72","$56,275.70"
MIA - YYZ,56125473991,M-BWI-YYZ-2,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/56125473991,https://www.airlines-manager.com/aircraft/show/92153440,18:45,1:44,310,"$439,732.00","$392,992.00","$1,267.72","$56,275.70"
SFO - ABQ,56103538601,S-MCI-OMA-1,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/56103538601,https://www.airlines-manager.com/aircraft/show/88239553,8:45,14:14,320,"$351,204.00","$311,153.00",$972.35,"$56,745.23"
SFO - ABQ,56103538602,S-MCI-OMA-5 B,A319-100,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/56103538602,https://www.airlines-manager.com/aircraft/show/105223003,8:45,14:14,198,"$266,605.00","$238,475.00","$1,204.42","$43,490.88"
SFO - ABQ,56107731532,S-MCI-OMA-4,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/56107731532,https://www.airlines-manager.com/aircraft/show/88239557,10:30,15:59,320,"$351,204.00","$311,153.00",$972.35,"$56,745.23"
SFO - ABQ,56115475735,S-MCI-OMA-3,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/56115475735,https://www.airlines-manager.com/aircraft/show/88239555,15:00,20:29,320,"$351,204.00","$311,153.00",$972.35,"$56,745.23"
SFO - ABQ,56131084897,S-MCI-OMA-2,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/56131084897,https://www.airlines-manager.com/aircraft/show/88239554,22:45,4:14,320,"$351,204.00","$311,153.00",$972.35,"$56,745.23"
SFO - ALB,56084270493,S-ALB-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/56084270493,https://www.airlines-manager.com/aircraft/show/112650097,0:30,12:29,310,"$737,199.00","$681,035.00","$2,196.89","$56,831.85"
SFO - ALB,56096590110,S-ALB-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/56096590110,https://www.airlines-manager.com/aircraft/show/112650096,5:30,17:29,310,"$737,199.00","$681,035.00","$2,196.89","$56,831.85"
SFO - ALB,56099991649,S-ALB-CAK-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/56099991649,https://www.airlines-manager.com/aircraft/show/112650090,7:30,19:29,198,"$551,373.00","$506,332.00","$2,557.23","$42,253.02"
SFO - ALB,56115475652,S-ALB-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/56115475652,https://www.airlines-manager.com/aircraft/show/112650099,14:00,1:59,310,"$737,199.00","$681,035.00","$2,196.89","$56,831.85"
SFO - ALB,56122311612,S-ALB-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/56122311612,https://www.airlines-manager.com/aircraft/show/112650098,18:00,5:59,310,"$737,199.00","$681,035.00","$2,196.89","$56,831.85"
SFO - ANC,56084270710,S-BWI-ANC-4,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/56084270710,https://www.airlines-manager.com/aircraft/show/106255848,2:30,12:14,338,"$665,760.00","$617,716.00","$1,827.56","$63,463.97"
SFO - ANC,56093103015,S-BWI-ANC-5,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/56093103015,https://www.airlines-manager.com/aircraft/show/106255849,3:30,13:14,338,"$665,760.00","$617,716.00","$1,827.56","$63,463.97"
SFO - ANC,56125474007,S-BWI-ANC-1,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/56125474007,https://www.airlines-manager.com/aircraft/show/106255845,19:00,4:44,338,"$665,760.00","$617,716.00","$1,827.56","$63,463.97"
SFO - ANC,56125474008,S-BWI-ANC-2,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/56125474008,https://www.airlines-manager.com/aircraft/show/106255846,20:00,5:44,338,"$665,760.00","$617,716.00","$1,827.56","$63,463.97"
SFO - ANC,56128543839,S-BWI-ANC-3,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/56128543839,https://www.airlines-manager.com/aircraft/show/106255847,21:00,6:44,338,"$665,760.00","$617,716.00","$1,827.56","$63,463.97"
SFO - ATL,56122311492,S-168C-3 B2,747-400,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/56122311492,https://www.airlines-manager.com/aircraft/show/120752303,17:00,2:44,968,"$1,863,868.00","$1,685,722.00","$1,741.45","$173,190.62"
SFO - ATL,56122311493,S-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/56122311493,https://www.airlines-manager.com/aircraft/show/107467212,18:00,4:29,112,"$307,106.00","$254,690.00","$2,274.02","$24,294.75"
SFO - ATL,56125474140,S-168D-6 B2,747-400,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/56125474140,https://www.airlines-manager.com/aircraft/show/120752299,20:00,5:44,968,"$1,863,868.00","$1,685,722.00","$1,741.45","$173,190.62"
SFO - AUS,56084270518,S-OGG-AUS-1,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/56084270518,https://www.airlines-manager.com/aircraft/show/92773481,0:45,8:44,310,"$503,113.00","$458,860.00","$1,480.19","$57,477.24"
SFO - AUS,56084270519,S-OGG-AUS-2,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/56084270519,https://www.airlines-manager.com/aircraft/show/92773480,2:45,10:44,310,"$503,113.00","$458,860.00","$1,480.19","$57,477.24"
SFO - AUS,56112079335,S-OGG-AUS-3,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/56112079335,https://www.airlines-manager.com/aircraft/show/92773479,13:30,21:29,310,"$503,113.00","$458,860.00","$1,480.19","$57,477.24"
SFO - AUS,56118925472,S-OGG-AUS-4,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/56118925472,https://www.airlines-manager.com/aircraft/show/92773478,15:30,23:29,310,"$503,113.00","$458,860.00","$1,480.19","$57,477.24"
SFO - AUS,56125473960,S-OGG-AUS-5,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/56125473960,https://www.airlines-manager.com/aircraft/show/92773477,18:30,2:29,310,"$503,113.00","$458,860.00","$1,480.19","$57,477.24"
SFO - BDL,56093103163,S-RSW-BDL-1,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/56093103163,https://www.airlines-manager.com/aircraft/show/84915098,4:45,16:59,320,"$745,353.00","$681,235.00","$2,128.86","$55,686.78"
SFO - BDL,56099991579,S-RSW-BDL-2,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/56099991579,https://www.airlines-manager.com/aircraft/show/84915099,6:45,18:59,320,"$745,353.00","$681,235.00","$2,128.86","$55,686.78"
SFO - BDL,56103538600,S-RSW-BDL-5,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/56103538600,https://www.airlines-manager.com/aircraft/show/84915102,8:45,20:59,320,"$745,353.00","$681,235.00","$2,128.86","$55,686.78"
SFO - BDL,56122311467,S-RSW-BDL-3,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/56122311467,https://www.airlines-manager.com/aircraft/show/84915100,17:00,5:14,320,"$745,353.00","$681,235.00","$2,128.86","$55,686.78"
SFO - BDL,56125474015,S-RSW-BDL-4,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/56125474015,https://www.airlines-manager.com/aircraft/show/84915101,19:00,7:14,320,"$745,353.00","$681,235.00","$2,128.86","$55,686.78"
SFO - BFF,56084270570,S-ICT-BFF-5,ERJ-175,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/56084270570,https://www.airlines-manager.com/aircraft/show/114912306,1:00,7:14,112,"$184,180.00","$161,791.00","$1,444.56","$25,955.78"
SFO - BFF,56084270571,S-ICT-BFF-4,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/56084270571,https://www.airlines-manager.com/aircraft/show/114912268,2:15,8:29,310,"$391,156.00","$356,860.00","$1,151.16","$57,250.27"
SFO - BFF,56103538563,S-ICT-BFF-3,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/56103538563,https://www.airlines-manager.com/aircraft/show/114912263,8:15,14:29,310,"$391,156.00","$356,860.00","$1,151.16","$57,250.27"
SFO - BFF,56118925547,S-ICT-BFF-2,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/56118925547,https://www.airlines-manager.com/aircraft/show/114912264,16:00,22:14,310,"$391,156.00","$356,860.00","$1,151.16","$57,250.27"
SFO - BFF,56133285057,S-ICT-BFF-1,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/56133285057,https://www.airlines-manager.com/aircraft/show/114912267,23:30,5:44,310,"$391,156.00","$356,860.00","$1,151.16","$57,250.27"
SFO - BHM,56096590105,S-BHM-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/56096590105,https://www.airlines-manager.com/aircraft/show/117782568,5:30,15:29,320,"$624,697.00","$570,602.00","$1,783.13","$57,155.46"
SFO - BHM,56099991609,S-BHM-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/56099991609,https://www.airlines-manager.com/aircraft/show/117782569,7:00,16:59,320,"$624,697.00","$570,602.00","$1,783.13","$57,155.46"
SFO - BHM,56115475775,S-BHM-GRR-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/56115475775,https://www.airlines-manager.com/aircraft/show/117782583,15:00,0:59,198,"$469,973.00","$430,696.00","$2,175.23","$43,141.50"
SFO - BHM,56125474098,S-BHM-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/56125474098,https://www.airlines-manager.com/aircraft/show/117782567,19:45,5:44,320,"$624,697.00","$570,602.00","$1,783.13","$57,155.46"
SFO - BHM,56131084815,S-BHM-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/56131084815,https://www.airlines-manager.com/aircraft/show/117782566,22:00,7:59,320,"$624,697.00","$570,602.00","$1,783.13","$57,155.46"
SFO - BIL,56084270703,S-FAR-BIL-4,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/56084270703,https://www.airlines-manager.com/aircraft/show/117782587,2:15,7:59,310,"$357,113.00","$324,930.00","$1,048.16","$56,673.84"
SFO - BIL,56103538643,S-FAR-BIL-3,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/56103538643,https://www.airlines-manager.com/aircraft/show/117782586,9:15,14:59,310,"$357,113.00","$324,930.00","$1,048.16","$56,673.84"
SFO - BIL,56115475768,S-FAR-BIL-2,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/56115475768,https://www.airlines-manager.com/aircraft/show/117782585,15:00,20:44,310,"$357,113.00","$324,930.00","$1,048.16","$56,673.84"
SFO - BIL,56131084916,S-FAR-BIL-1,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/56131084916,https://www.airlines-manager.com/aircraft/show/117782584,22:45,4:29,310,"$357,113.00","$324,930.00","$1,048.16","$56,673.84"
SFO - BNA,56084270580,S-BNA-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/56084270580,https://www.airlines-manager.com/aircraft/show/103365580,1:15,10:59,320,"$608,391.00","$552,114.00","$1,725.36","$56,724.04"
SFO - BNA,56096590159,S-BNA-CMH-6,ERJ-175,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/56096590159,https://www.airlines-manager.com/aircraft/show/82323681,6:00,15:44,112,"$286,104.00","$252,244.00","$2,252.18","$25,915.48"
SFO - BNA,56112079251,S-BNA-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/56112079251,https://www.airlines-manager.com/aircraft/show/103365583,13:00,22:44,320,"$608,391.00","$552,114.00","$1,725.36","$56,724.04"
SFO - BNA,56115475740,S-BNA-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/56115475740,https://www.airlines-manager.com/aircraft/show/103365582,15:00,0:44,320,"$608,391.00","$552,114.00","$1,725.36","$56,724.04"
SFO - BNA,56118925483,S-BNA-CMH-5,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/56118925483,https://www.airlines-manager.com/aircraft/show/103365579,15:45,1:29,320,"$608,391.00","$552,114.00","$1,725.36","$56,724.04"
SFO - BNA,56133285027,S-BNA-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/56133285027,https://www.airlines-manager.com/aircraft/show/103365581,23:15,8:59,320,"$608,391.00","$552,114.00","$1,725.36","$56,724.04"
SFO - BOI,56084270576,S-CLE-MKE-2,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/56084270576,https://www.airlines-manager.com/aircraft/show/92519369,1:15,5:29,320,"$248,121.00","$217,386.00",$679.33,"$51,351.02"
SFO - BOI,56103828417,S-CLE-MKE-1,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/56103828417,https://www.airlines-manager.com/aircraft/show/92519368,9:45,13:59,320,"$248,121.00","$217,386.00",$679.33,"$51,351.02"
SFO - BOI,56115475707,S-CLE-MKE-4,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/56115475707,https://www.airlines-manager.com/aircraft/show/92519371,14:45,18:59,320,"$248,121.00","$217,386.00",$679.33,"$51,351.02"
SFO - BOI,56118925518,S-CLE-MKE-3,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/56118925518,https://www.airlines-manager.com/aircraft/show/92519367,16:00,20:14,320,"$248,121.00","$217,386.00",$679.33,"$51,351.02"
SFO - BOS,56084270424,S-BOS-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/56084270424,https://www.airlines-manager.com/aircraft/show/104864961,0:15,12:44,338,"$841,524.00","$778,167.00","$2,302.27","$62,336.48"
SFO - BOS,56107731672,S-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/56107731672,https://www.airlines-manager.com/aircraft/show/120141531,11:30,23:59,0,"$222,034.00","$134,572.00",#DIV/0!,"$10,780.13"
SFO - BOS,56112079217,S-BOS-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/56112079217,https://www.airlines-manager.com/aircraft/show/104901564,13:00,1:29,338,"$841,524.00","$778,167.00","$2,302.27","$62,336.48"
SFO - BOS,56115475582,S-BOS-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/56115475582,https://www.airlines-manager.com/aircraft/show/104870960,14:00,2:29,338,"$841,524.00","$778,167.00","$2,302.27","$62,336.48"
SFO - BOS,56118925479,S-BOS-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/56118925479,https://www.airlines-manager.com/aircraft/show/104874465,15:45,4:14,338,"$841,524.00","$778,167.00","$2,302.27","$62,336.48"
SFO - BOS,56128543760,S-BOS-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/56128543760,https://www.airlines-manager.com/aircraft/show/104901544,20:15,8:44,338,"$841,524.00","$778,167.00","$2,302.27","$62,336.48"
SFO - BTV,56084270398,S-BTV-LEX-4,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/56084270398,https://www.airlines-manager.com/aircraft/show/112650092,0:00,11:59,310,"$733,303.00","$677,318.00","$2,184.90","$56,521.67"
SFO - BTV,56096590155,S-BTV-LEX-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/56096590155,https://www.airlines-manager.com/aircraft/show/112650089,6:00,17:59,198,"$549,048.00","$504,149.00","$2,546.21","$42,070.85"
SFO - BTV,56115475650,S-BTV-LEX-1,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/56115475650,https://www.airlines-manager.com/aircraft/show/112650095,14:00,1:59,310,"$733,303.00","$677,318.00","$2,184.90","$56,521.67"
SFO - BTV,56122311611,S-BTV-LEX-2,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/56122311611,https://www.airlines-manager.com/aircraft/show/112650094,18:00,5:59,310,"$733,303.00","$677,318.00","$2,184.90","$56,521.67"
SFO - BTV,56125474134,S-BTV-LEX-3,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/56125474134,https://www.airlines-manager.com/aircraft/show/112650093,20:00,7:59,310,"$733,303.00","$677,318.00","$2,184.90","$56,521.67"
SFO - BUF,56084270627,S-PVD-BUF-1,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/56084270627,https://www.airlines-manager.com/aircraft/show/112650108,1:30,12:29,310,"$690,191.00","$636,733.00","$2,053.98","$57,972.66"
SFO - BUF,56096590111,S-PVD-BUF-2,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/56096590111,https://www.airlines-manager.com/aircraft/show/112650107,5:30,16:29,310,"$690,191.00","$636,733.00","$2,053.98","$57,972.66"
SFO - BUF,56099991643,S-PVD-BUF-3,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/56099991643,https://www.airlines-manager.com/aircraft/show/112650106,7:30,18:29,310,"$690,191.00","$636,733.00","$2,053.98","$57,972.66"
SFO - BUF,56112079307,S-PVD-BUF-4,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/56112079307,https://www.airlines-manager.com/aircraft/show/112650105,13:00,23:59,310,"$690,191.00","$636,733.00","$2,053.98","$57,972.66"
SFO - BUF,56122311613,S-PVD-BUF-5,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/56122311613,https://www.airlines-manager.com/aircraft/show/112650104,18:00,4:59,310,"$690,191.00","$636,733.00","$2,053.98","$57,972.66"
SFO - BUR,56084270699,S-SAV-JAN-1,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/56084270699,https://www.airlines-manager.com/aircraft/show/114912265,2:15,5:44,310,"$174,124.00","$151,614.00",$489.08,"$43,525.55"
SFO - BUR,56093103133,S-SAV-JAN-4,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/56093103133,https://www.airlines-manager.com/aircraft/show/114912270,4:15,7:44,310,"$174,124.00","$151,614.00",$489.08,"$43,525.55"
SFO - BUR,56107731670,S-SAV-JAN-5 B,A319-100,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/56107731670,https://www.airlines-manager.com/aircraft/show/114917486,11:30,14:59,198,"$131,182.00","$113,160.00",$571.52,"$32,486.12"
SFO - BUR,56118925474,S-SAV-JAN-3,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/56118925474,https://www.airlines-manager.com/aircraft/show/114912269,15:30,18:59,310,"$174,124.00","$151,614.00",$489.08,"$43,525.55"
SFO - BUR,56122311491,S-SAV-JAN-2,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/56122311491,https://www.airlines-manager.com/aircraft/show/114912266,17:00,20:29,310,"$174,124.00","$151,614.00",$489.08,"$43,525.55"
SFO - BWI,56093103159,S-BWI-ANC-1,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/56093103159,https://www.airlines-manager.com/aircraft/show/106255845,4:45,16:14,338,"$792,718.00","$734,335.00","$2,172.59","$63,947.90"
SFO - BWI,56096590120,S-BWI-ANC-2,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/56096590120,https://www.airlines-manager.com/aircraft/show/106255846,5:45,17:14,338,"$792,718.00","$734,335.00","$2,172.59","$63,947.90"
SFO - BWI,56099991576,S-BWI-ANC-3,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/56099991576,https://www.airlines-manager.com/aircraft/show/106255847,6:45,18:14,338,"$792,718.00","$734,335.00","$2,172.59","$63,947.90"
SFO - BWI,56115475721,S-BWI-ANC-4,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/56115475721,https://www.airlines-manager.com/aircraft/show/106255848,15:00,2:29,338,"$792,718.00","$734,335.00","$2,172.59","$63,947.90"
SFO - BWI,56118925503,S-BWI-ANC-5,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/56118925503,https://www.airlines-manager.com/aircraft/show/106255849,16:00,3:29,338,"$792,718.00","$734,335.00","$2,172.59","$63,947.90"
SFO - BZN,56103828416,S-ROC-COS-1,A321neo,https://www.airlines-manager.com/network/showline/50555367,https://www.airlines-manager.com/network/showflight/56103828416,https://www.airlines-manager.com/aircraft/show/120112476,9:45,14:59,338,"$357,990.00","$329,036.00",$973.48,"$62,873.12"
SFO - BZN,56115475722,S-ROC-COS-3,A321neo,https://www.airlines-manager.com/network/showline/50555367,https://www.airlines-manager.com/network/showflight/56115475722,https://www.airlines-manager.com/aircraft/show/120112474,15:00,20:14,338,"$357,990.00","$329,036.00",$973.48,"$62,873.12"
SFO - BZN,56125473975,S-ROC-COS-2,A321neo,https://www.airlines-manager.com/network/showline/50555367,https://www.airlines-manager.com/network/showflight/56125473975,https://www.airlines-manager.com/aircraft/show/120112475,18:45,23:59,338,"$357,990.00","$329,036.00",$973.48,"$62,873.12"
SFO - BZN,56133285066,S-ROC-COS-4,A321neo,https://www.airlines-manager.com/network/showline/50555367,https://www.airlines-manager.com/network/showflight/56133285066,https://www.airlines-manager.com/aircraft/show/120051490,23:45,4:59,274,"$317,821.00","$290,044.00","$1,058.55","$55,422.42"
SFO - CAK,56084270686,S-ALB-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/56084270686,https://www.airlines-manager.com/aircraft/show/112650099,2:00,12:29,310,"$660,859.00","$610,685.00","$1,969.95","$58,252.94"
SFO - CAK,56096590153,S-ALB-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/56096590153,https://www.airlines-manager.com/aircraft/show/112650098,6:00,16:29,310,"$660,859.00","$610,685.00","$1,969.95","$58,252.94"
SFO - CAK,56115475651,S-ALB-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/56115475651,https://www.airlines-manager.com/aircraft/show/112650097,14:00,0:29,310,"$660,859.00","$610,685.00","$1,969.95","$58,252.94"
SFO - CAK,56125474033,S-ALB-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/56125474033,https://www.airlines-manager.com/aircraft/show/112650096,19:00,5:29,310,"$660,859.00","$610,685.00","$1,969.95","$58,252.94"
SFO - CAK,56128543945,S-ALB-CAK-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/56128543945,https://www.airlines-manager.com/aircraft/show/112650090,21:00,7:29,198,"$496,365.00","$456,132.00","$2,303.70","$43,510.21"
SFO - CDG,56093103040,S-168D-2 B2,747-400,https://www.airlines-manager.com/network/showline/50769259,https://www.airlines-manager.com/network/showflight/56093103040,https://www.airlines-manager.com/aircraft/show/120752295,3:30,1:29,968,"$4,129,579.00","$3,785,477.00","$3,910.62","$172,197.59"
SFO - CDG,56128543988,S-168C-1 B2,747-400,https://www.airlines-manager.com/network/showline/50769259,https://www.airlines-manager.com/network/showflight/56128543988,https://www.airlines-manager.com/aircraft/show/120752301,21:30,19:29,943,"$4,059,658.00","$3,719,876.00","$3,944.73","$169,213.46"
SFO - CHS,56084270618,S-MHT-CHS-1,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/56084270618,https://www.airlines-manager.com/aircraft/show/114917465,1:30,12:44,320,"$704,942.00","$645,793.00","$2,018.10","$57,488.99"
SFO - CHS,56096590103,S-MHT-CHS-2,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/56096590103,https://www.airlines-manager.com/aircraft/show/114917464,5:30,16:44,320,"$704,942.00","$645,793.00","$2,018.10","$57,488.99"
SFO - CHS,56103538595,S-MHT-CHS-5 B,A319-100,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/56103538595,https://www.airlines-manager.com/aircraft/show/114912262,8:30,19:59,198,"$531,446.00","$488,189.00","$2,465.60","$42,512.83"
SFO - CHS,56112079263,S-MHT-CHS-3,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/56112079263,https://www.airlines-manager.com/aircraft/show/114917463,13:00,0:14,320,"$704,942.00","$645,793.00","$2,018.10","$57,488.99"
SFO - CHS,56122311477,S-MHT-CHS-4,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/56122311477,https://www.airlines-manager.com/aircraft/show/114266973,17:00,4:14,320,"$704,942.00","$645,793.00","$2,018.10","$57,488.99"
SFO - CID,56084270619,S-YEG-YYC-1,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/56084270619,https://www.airlines-manager.com/aircraft/show/117782561,1:30,9:59,320,"$530,499.00","$483,550.00","$1,511.09","$57,000.00"
SFO - CID,56096590175,S-YEG-YYC-4,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/56096590175,https://www.airlines-manager.com/aircraft/show/116932364,6:30,14:59,320,"$530,499.00","$483,550.00","$1,511.09","$57,000.00"
SFO - CID,56112079266,S-YEG-YYC-3,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/56112079266,https://www.airlines-manager.com/aircraft/show/117782559,13:00,21:29,320,"$530,499.00","$483,550.00","$1,511.09","$57,000.00"
SFO - CID,56125474022,S-YEG-YYC-2,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/56125474022,https://www.airlines-manager.com/aircraft/show/117782560,19:00,3:29,320,"$530,499.00","$483,550.00","$1,511.09","$57,000.00"
SFO - CID,56128543946,S-YEG-YYC-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/56128543946,https://www.airlines-manager.com/aircraft/show/117782581,21:00,5:29,198,"$400,688.00","$366,754.00","$1,852.29","$43,232.30"
SFO - CLE,56096590099,S-CLE-MKE-2,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/56096590099,https://www.airlines-manager.com/aircraft/show/92519369,5:30,15:59,320,"$653,869.00","$596,150.00","$1,862.97","$56,866.45"
SFO - CLE,56096590100,S-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/56096590100,https://www.airlines-manager.com/aircraft/show/107467212,6:30,16:59,112,"$307,058.00","$271,917.00","$2,427.83","$25,938.03"
SFO - CLE,56099991636,S-CLE-MKE-5,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/56099991636,https://www.airlines-manager.com/aircraft/show/92519370,7:30,17:59,320,"$653,869.00","$596,150.00","$1,862.97","$56,866.45"
SFO - CLE,56115475599,S-CLE-MKE-1,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/56115475599,https://www.airlines-manager.com/aircraft/show/92519368,14:00,0:29,320,"$653,869.00","$596,150.00","$1,862.97","$56,866.45"
SFO - CLE,56125474016,S-CLE-MKE-4,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/56125474016,https://www.airlines-manager.com/aircraft/show/92519371,19:00,5:29,320,"$653,869.00","$596,150.00","$1,862.97","$56,866.45"
SFO - CLE,56128543766,S-CLE-MKE-3,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/56128543766,https://www.airlines-manager.com/aircraft/show/92519367,20:15,6:44,320,"$653,869.00","$596,150.00","$1,862.97","$56,866.45"
SFO - CLT,56084270371,S-IAD-CLT-3,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/56084270371,https://www.airlines-manager.com/aircraft/show/96135563,0:00,10:44,400,"$893,309.00","$813,344.00","$2,033.36","$75,777.39"
SFO - CLT,56096590138,S-IAD-CLT-4,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/56096590138,https://www.airlines-manager.com/aircraft/show/96135562,6:00,16:44,400,"$893,309.00","$813,344.00","$2,033.36","$75,777.39"
SFO - CLT,56112079326,S-IAD-CLT-1,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/56112079326,https://www.airlines-manager.com/aircraft/show/96135565,13:15,23:59,400,"$893,309.00","$813,344.00","$2,033.36","$75,777.39"
SFO - CLT,56118925435,S-IAD-CLT-5,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/56118925435,https://www.airlines-manager.com/aircraft/show/96135561,15:15,1:59,400,"$893,309.00","$813,344.00","$2,033.36","$75,777.39"
SFO - CLT,56122311506,S-IAD-CLT-2,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/56122311506,https://www.airlines-manager.com/aircraft/show/96135564,17:15,3:59,400,"$893,309.00","$813,344.00","$2,033.36","$75,777.39"
SFO - CMH,56084270506,S-BNA-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/56084270506,https://www.airlines-manager.com/aircraft/show/103365582,0:45,10:59,320,"$638,686.00","$581,389.00","$1,816.84","$56,813.26"
SFO - CMH,56096590102,S-BNA-CMH-5,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/56096590102,https://www.airlines-manager.com/aircraft/show/103365579,5:30,15:44,320,"$638,686.00","$581,389.00","$1,816.84","$56,813.26"
SFO - CMH,56112079250,S-BNA-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/56112079250,https://www.airlines-manager.com/aircraft/show/103365581,13:00,23:14,320,"$638,686.00","$581,389.00","$1,816.84","$56,813.26"
SFO - CMH,56115475739,S-BNA-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/56115475739,https://www.airlines-manager.com/aircraft/show/103365580,15:00,1:14,320,"$638,686.00","$581,389.00","$1,816.84","$56,813.26"
SFO - CMH,56118925498,S-BNA-CMH-6,ERJ-175,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/56118925498,https://www.airlines-manager.com/aircraft/show/82323681,15:45,1:59,112,"$300,499.00","$265,689.00","$2,372.22","$25,963.09"
SFO - CMH,56131084899,S-BNA-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/56131084899,https://www.airlines-manager.com/aircraft/show/103365583,22:45,8:59,320,"$638,686.00","$581,389.00","$1,816.84","$56,813.26"
SFO - COS,56084270691,S-ROC-COS-1,A321neo,https://www.airlines-manager.com/network/showline/50555364,https://www.airlines-manager.com/network/showflight/56084270691,https://www.airlines-manager.com/aircraft/show/120112476,2:15,7:59,338,"$397,466.00","$363,971.00","$1,076.84","$63,483.31"
SFO - COS,56103538636,S-ROC-COS-3,A321neo,https://www.airlines-manager.com/network/showline/50555364,https://www.airlines-manager.com/network/showflight/56103538636,https://www.airlines-manager.com/aircraft/show/120112474,9:15,14:59,338,"397,466$","363,971$","$1,076.84","$63,483.31"
SFO - COS,56112079222,S-ROC-COS-2,A321neo,https://www.airlines-manager.com/network/showline/50555364,https://www.airlines-manager.com/network/showflight/56112079222,https://www.airlines-manager.com/aircraft/show/120112475,13:00,18:44,338,"397,466$","363,971$","$1,076.84","$63,483.31"
SFO - COS,56122311572,S-ROC-COS-4,A321neo,https://www.airlines-manager.com/network/showline/50555364,https://www.airlines-manager.com/network/showflight/56122311572,https://www.airlines-manager.com/aircraft/show/120051490,18:00,23:44,337,"396,768$","363,295$","$1,078.03","$63,365.41"
SFO - CUN,56084270437,S-YOW-CUN-1,757-300,https://www.airlines-manager.com/network/showline/50555302,https://www.airlines-manager.com/network/showflight/56084270437,https://www.airlines-manager.com/aircraft/show/120056768,0:15,11:29,400,"948,335$","874,378$","$2,185.95","$77,837.80"
SFO - CUN,56084270438,S-YOW-CUN-2,757-300,https://www.airlines-manager.com/network/showline/50555302,https://www.airlines-manager.com/network/showflight/56084270438,https://www.airlines-manager.com/aircraft/show/120056767,1:15,12:29,400,"948,335$","874,378$","$2,185.95","$77,837.80"
SFO - CUN,56112079233,S-YOW-CUN-3,757-300,https://www.airlines-manager.com/network/showline/50555302,https://www.airlines-manager.com/network/showflight/56112079233,https://www.airlines-manager.com/aircraft/show/120056766,13:00,0:14,400,"948,335$","874,378$","$2,185.95","$77,837.80"
SFO - CUN,56115475590,S-YOW-CUN-4,757-300,https://www.airlines-manager.com/network/showline/50555302,https://www.airlines-manager.com/network/showflight/56115475590,https://www.airlines-manager.com/aircraft/show/120056765,14:00,1:14,400,"948,335$","874,378$","$2,185.95","$77,837.80"
SFO - CVG,56093103189,S-IND-CVG-3,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/56093103189,https://www.airlines-manager.com/aircraft/show/99316504,5:00,14:59,310,"630,041$","577,014$","$1,861.34","$57,797.73"
SFO - CVG,56099991610,S-IND-CVG-5,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/56099991610,https://www.airlines-manager.com/aircraft/show/99316502,7:00,16:59,310,"630,041$","577,014$","$1,861.34","$57,797.73"
SFO - CVG,56112079293,S-IND-CVG-2,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/56112079293,https://www.airlines-manager.com/aircraft/show/99316505,13:00,22:59,310,"630,041$","577,014$","$1,861.34","$57,797.73"
SFO - CVG,56115475757,S-IND-CVG-4,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/56115475757,https://www.airlines-manager.com/aircraft/show/99316503,15:00,0:59,310,"630,041$","577,014$","$1,861.34","$57,797.73"
SFO - CVG,56122311504,S-IND-CVG-6,ERJ-175,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/56122311504,https://www.airlines-manager.com/aircraft/show/99174346,17:00,2:59,112,"295,248$","259,885$","$2,320.40","$26,031.89"
SFO - CVG,56131084913,S-IND-CVG-1,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/56131084913,https://www.airlines-manager.com/aircraft/show/99316506,22:45,8:44,310,"630,041$","577,014$","$1,861.34","$57,797.73"
SFO - DEL,56084270403,S-168B-1 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/56084270403,https://www.airlines-manager.com/aircraft/show/86832727,0:00,5:29,1046,"5,812,778$","5,394,209$","$5,156.99","$983,746.32"
SFO - DEL,56084270404,S-168A-1 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/56084270404,https://www.airlines-manager.com/aircraft/show/86969602,2:00,7:29,1046,"$5,812,778.00","$5,394,209.00","$5,156.99","$983,746.32"
SFO - DEN,56084270434,S-IAH-MEX-5,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/56084270434,https://www.airlines-manager.com/aircraft/show/101045335,0:15,5:59,400,"$475,022.00","$407,058.00","$1,017.65","$70,998.49"
SFO - DEN,56096590171,S-IAH-MEX-1,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/56096590171,https://www.airlines-manager.com/aircraft/show/101045339,6:30,12:14,400,"$475,022.00","$407,058.00","$1,017.65","$70,998.49"
SFO - DEN,56103538573,S-IAH-MEX-4,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/56103538573,https://www.airlines-manager.com/aircraft/show/101045336,8:30,14:14,400,"$475,022.00","$407,058.00","$1,017.65","$70,998.49"
SFO - DEN,56112079230,S-IAH-MEX-3,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/56112079230,https://www.airlines-manager.com/aircraft/show/101045337,13:00,18:44,400,"$475,022.00","$407,058.00","$1,017.65","$70,998.49"
SFO - DEN,56131084842,S-IAH-MEX-2,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/56131084842,https://www.airlines-manager.com/aircraft/show/101045338,22:15,3:59,382,"$462,423.00","$394,910.00","$1,033.80","$68,879.65"
SFO - DFW,56084270497,S-DFW-2,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/56084270497,https://www.airlines-manager.com/aircraft/show/120752619,0:45,8:29,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DFW,56099991662,S-DFW-1,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/56099991662,https://www.airlines-manager.com/aircraft/show/120517724,8:00,15:44,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DFW,56103538617,S-DFW-2,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/56103538617,https://www.airlines-manager.com/aircraft/show/120752619,9:00,16:44,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DFW,56118925480,S-DFW-1,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/56118925480,https://www.airlines-manager.com/aircraft/show/120517724,15:45,23:29,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DFW,56118925481,S-DFW-2,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/56118925481,https://www.airlines-manager.com/aircraft/show/120752619,16:45,0:29,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DFW,56133285043,S-DFW-1,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/56133285043,https://www.airlines-manager.com/aircraft/show/120517724,23:30,7:14,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DSM,56093103150,S-TUL-DSM-3,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/56093103150,https://www.airlines-manager.com/aircraft/show/108410858,4:30,12:29,320,"$508,775.00","$462,937.00","$1,446.68","$57,987.93"
SFO - DSM,56112079256,S-TUL-DSM-2,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/56112079256,https://www.airlines-manager.com/aircraft/show/108410857,13:00,20:59,320,"$508,775.00","$462,937.00","$1,446.68","$57,987.93"
SFO - DSM,56115475795,S-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/56115475795,https://www.airlines-manager.com/aircraft/show/108466264,15:00,23:14,112,"$240,808.00","$213,387.00","$1,905.24","$25,917.45"
SFO - DSM,56131084903,S-TUL-DSM-1,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/56131084903,https://www.airlines-manager.com/aircraft/show/108410856,22:45,6:44,320,"$508,775.00","$462,937.00","$1,446.68","$57,987.93"
SFO - DSM,56133285047,S-TUL-DSM-4,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/56133285047,https://www.airlines-manager.com/aircraft/show/108410859,23:30,7:29,320,"$508,775.00","$462,937.00","$1,446.68","$57,987.93"
SFO - DTW,56093103144,S-ORD-DTW-4,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/56093103144,https://www.airlines-manager.com/aircraft/show/101045331,4:30,14:29,400,"$823,515.00","$748,392.00","$1,870.98","$74,964.14"
SFO - DTW,56093103145,S-ORD-DTW-3,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/56093103145,https://www.airlines-manager.com/aircraft/show/101045332,5:00,14:59,400,"$823,515.00","$748,392.00","$1,870.98","$74,964.14"
SFO - DTW,56115475727,S-ORD-DTW-2,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/56115475727,https://www.airlines-manager.com/aircraft/show/101045333,15:00,0:59,400,"$823,515.00","$748,392.00","$1,870.98","$74,964.14"
SFO - DTW,56122311464,S-ORD-DTW-5,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/56122311464,https://www.airlines-manager.com/aircraft/show/101045330,17:00,2:59,400,"$823,515.00","$748,392.00","$1,870.98","$74,964.14"
SFO - DTW,56131084810,S-ORD-DTW-1,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/56131084810,https://www.airlines-manager.com/aircraft/show/101045334,22:00,7:59,400,"$823,515.00","$748,392.00","$1,870.98","$74,964.14"
SFO - DXB,56096590112,S-168B-2 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/56096590112,https://www.airlines-manager.com/aircraft/show/87566901,5:30,12:29,1046,"$6,017,199.00","$5,552,011.00","$5,307.85","$795,037.37"
SFO - DXB,56099991645,S-168A-2 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/56099991645,https://www.airlines-manager.com/aircraft/show/86596991,7:30,14:29,1046,"$6,017,199.00","$5,552,011.00","$5,307.85","$795,037.37"
SFO - ELP,56096590129,S-ICT-BFF-1,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/56096590129,https://www.airlines-manager.com/aircraft/show/114912267,5:45,11:44,310,"$376,198.00","$341,426.00","$1,101.37","$57,062.84"
SFO - ELP,56099991631,S-ICT-BFF-5,ERJ-175,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/56099991631,https://www.airlines-manager.com/aircraft/show/114912306,7:15,13:14,112,"$178,042.00","$155,448.00","$1,387.93","$25,980.17"
SFO - ELP,56103538587,S-ICT-BFF-4,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/56103538587,https://www.airlines-manager.com/aircraft/show/114912268,8:30,14:29,310,"$376,198.00","$341,426.00","$1,101.37","$57,062.84"
SFO - ELP,56115475762,S-ICT-BFF-3,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/56115475762,https://www.airlines-manager.com/aircraft/show/114912263,15:00,20:59,310,"$376,198.00","$341,426.00","$1,101.37","$57,062.84"
SFO - ELP,56131084857,S-ICT-BFF-2,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/56131084857,https://www.airlines-manager.com/aircraft/show/114912264,22:15,4:14,310,"$376,198.00","$341,426.00","$1,101.37","$57,062.84"
SFO - EUG,56084270649,S-BHM-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/56084270649,https://www.airlines-manager.com/aircraft/show/117782568,1:45,5:29,320,"$217,713.00","$189,681.00",$592.75,"$50,807.41"
SFO - EUG,56093102991,S-BHM-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/56093102991,https://www.airlines-manager.com/aircraft/show/117782569,3:15,6:59,320,"$217,713.00","$189,681.00",$592.75,"$50,807.41"
SFO - EUG,56118925537,S-BHM-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/56118925537,https://www.airlines-manager.com/aircraft/show/117782567,16:00,19:44,320,"$217,713.00","$189,681.00",$592.75,"$50,807.41"
SFO - EUG,56122311556,S-BHM-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/56122311556,https://www.airlines-manager.com/aircraft/show/117782566,17:45,21:29,267,"$195,787.00","$168,398.00",$630.70,"$45,106.61"
SFO - FAR,56084270563,S-FAR-BIL-3,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/56084270563,https://www.airlines-manager.com/aircraft/show/117782586,1:00,8:44,310,"$491,795.00","$452,290.00","$1,459.00","$58,485.78"
SFO - FAR,56099991627,S-FAR-BIL-2,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/56099991627,https://www.airlines-manager.com/aircraft/show/117782585,7:15,14:59,310,"$491,795.00","$452,290.00","$1,459.00","$58,485.78"
SFO - FAR,56115475766,S-FAR-BIL-1,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/56115475766,https://www.airlines-manager.com/aircraft/show/117782584,15:00,22:44,310,"$491,795.00","$452,290.00","$1,459.00","$58,485.78"
SFO - FAR,56125473964,S-FAR-BIL-4,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/56125473964,https://www.airlines-manager.com/aircraft/show/117782587,18:30,2:14,310,"$491,795.00","$452,290.00","$1,459.00","$58,485.78"
SFO - FAT,56084270677,S-TUL-DSM-2,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/56084270677,https://www.airlines-manager.com/aircraft/show/108410857,2:00,4:44,320,"$95,749.00","$71,553.00",$223.60,"$26,177.93"
SFO - FAT,56107731677,S-TUL-DSM-1,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/56107731677,https://www.airlines-manager.com/aircraft/show/108410856,11:45,14:29,320,"$95,749.00","$71,553.00",$223.60,"$26,177.93"
SFO - FAT,56112079258,S-TUL-DSM-4,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/56112079258,https://www.airlines-manager.com/aircraft/show/108410859,13:00,15:44,320,"$95,749.00","$71,553.00",$223.60,"$26,177.93"
SFO - FAT,56122311583,S-TUL-DSM-3,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/56122311583,https://www.airlines-manager.com/aircraft/show/108410858,18:00,20:44,320,"$95,749.00","$71,553.00",$223.60,"$26,177.93"
SFO - FAT,56133285039,S-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/56133285039,https://www.airlines-manager.com/aircraft/show/108466264,23:15,1:59,70,"$34,114.00","$21,843.00",$312.04,"$7,991.34"
SFO - FCA,56093103158,S-MAF-FCA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/56093103158,https://www.airlines-manager.com/aircraft/show/120056759,4:45,9:59,272,"$305,111.00","$281,676.00","$1,035.57","$53,823.44"
SFO - FCA,56112079215,S-MAF-FCA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/56112079215,https://www.airlines-manager.com/aircraft/show/120056760,13:00,18:14,272,"$305,111.00","$281,676.00","$1,035.57","$53,823.44"
SFO - FCA,56115475715,S-MAF-FCA-5,ERJ-175,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/56115475715,https://www.airlines-manager.com/aircraft/show/119652600,14:45,20:14,112,"$160,704.00","$140,973.00","$1,258.69","$25,709.36"
SFO - FCA,56125474089,S-MAF-FCA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/56125474089,https://www.airlines-manager.com/aircraft/show/120056761,19:45,0:59,272,"$305,111.00","$281,676.00","$1,035.57","$53,823.44"
SFO - FCA,56133285063,S-MAF-FCA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/56133285063,https://www.airlines-manager.com/aircraft/show/120056758,23:45,4:59,272,"$305,111.00","$281,676.00","$1,035.57","$53,823.44"
SFO - FLL,56084270440,S-FLL-TPA-2,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/56084270440,https://www.airlines-manager.com/aircraft/show/97955543,0:15,12:14,320,"$739,785.00","$671,757.00","$2,099.24","$56,057.61"
SFO - FLL,56093103115,S-FLL-TPA-4,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/56093103115,https://www.airlines-manager.com/aircraft/show/97955541,4:15,16:14,320,"$739,785.00","$671,757.00","$2,099.24","$56,057.61"
SFO - FLL,56099991646,S-FLL-TPA-6 B,A319-100,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/56099991646,https://www.airlines-manager.com/aircraft/show/97900729,7:30,19:44,198,"$556,070.00","$506,591.00","$2,558.54","$41,410.71"
SFO - FLL,56112079244,S-FLL-TPA-1,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/56112079244,https://www.airlines-manager.com/aircraft/show/97955544,13:00,0:59,320,"$739,785.00","$671,757.00","$2,099.24","$56,057.61"
SFO - FLL,56122311473,S-FLL-TPA-3,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/56122311473,https://www.airlines-manager.com/aircraft/show/97955542,17:00,4:59,320,"$739,785.00","$671,757.00","$2,099.24","$56,057.61"
SFO - FLL,56125474125,S-FLL-TPA-5,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/56125474125,https://www.airlines-manager.com/aircraft/show/97955540,20:00,7:59,320,"$739,785.00","$671,757.00","$2,099.24","$56,057.61"
SFO - FSD,56084270475,S-OKC-FSD-1,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/56084270475,https://www.airlines-manager.com/aircraft/show/107160378,0:30,7:59,320,"$471,889.00","$428,607.00","$1,339.40","$57,274.88"
SFO - FSD,56084270476,S-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/56084270476,https://www.airlines-manager.com/aircraft/show/107132310,2:00,9:29,112,"$223,210.00","$197,491.00","$1,763.31","$26,390.78"
SFO - FSD,56084270477,S-OKC-FSD-4,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/56084270477,https://www.airlines-manager.com/aircraft/show/107160381,3:00,10:29,320,"$471,889.00","$428,607.00","$1,339.40","$57,274.88"
SFO - FSD,56099991672,S-OKC-FSD-3,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/56099991672,https://www.airlines-manager.com/aircraft/show/107160380,8:00,15:29,320,"$471,889.00","$428,607.00","$1,339.40","$57,274.88"
SFO - FSD,56118925526,S-OKC-FSD-2,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/56118925526,https://www.airlines-manager.com/aircraft/show/107160379,16:00,23:29,287,"$441,885.00","$399,846.00","$1,393.19","$53,431.54"
SFO - GRR,56084270568,S-BHM-GRR-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/56084270568,https://www.airlines-manager.com/aircraft/show/117782583,1:00,10:44,198,"$458,303.00","$419,852.00","$2,120.46","$43,135.48"
SFO - GRR,56096590125,S-BHM-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/56096590125,https://www.airlines-manager.com/aircraft/show/117782567,5:45,15:29,320,"$608,484.00","$555,512.00","$1,735.98","$57,073.15"
SFO - GRR,56099991674,S-BHM-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/56099991674,https://www.airlines-manager.com/aircraft/show/117782566,8:00,17:44,320,"$608,484.00","$555,512.00","$1,735.98","$57,073.15"
SFO - GRR,56118925538,S-BHM-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/56118925538,https://www.airlines-manager.com/aircraft/show/117782568,16:00,1:44,320,"$608,484.00","$555,512.00","$1,735.98","$57,073.15"
SFO - GRR,56122311536,S-BHM-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/56122311536,https://www.airlines-manager.com/aircraft/show/117782569,17:30,3:14,320,"$608,484.00","$555,512.00","$1,735.98","$57,073.15"
SFO - GSO,56084270484,S-GSO-SYR-4,737-900ER,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/56084270484,https://www.airlines-manager.com/aircraft/show/119550235,0:30,11:29,320,"$687,935.00","$629,220.00","$1,966.31","$57,288.62"
SFO - GSO,56096590156,S-GSO-SYR-5,A319-100,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/56096590156,https://www.airlines-manager.com/aircraft/show/120112473,6:00,17:14,198,"$519,051.00","$476,182.00","$2,404.96","$42,390.09"
SFO - GSO,56112079157,S-GSO-SYR-1,737-900ER,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/56112079157,https://www.airlines-manager.com/aircraft/show/120056764,12:00,22:59,320,"$687,935.00","$629,220.00","$1,966.31","$57,288.62"
SFO - GSO,56112079158,S-GSO-SYR-2,737-900ER,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/56112079158,https://www.airlines-manager.com/aircraft/show/120056763,13:00,23:59,320,"$687,935.00","$629,220.00","$1,966.31","$57,288.62"
SFO - GSO,56133285052,S-GSO-SYR-3,737-900ER,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/56133285052,https://www.airlines-manager.com/aircraft/show/120056762,23:30,10:29,320,"$687,935.00","$629,220.00","$1,966.31","$57,288.62"
SFO - HKG,56128543965,S-168B-6 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/56128543965,https://www.airlines-manager.com/aircraft/show/87083947,21:15,23:59,1046,"$5,282,521.00","$4,883,932.00","$4,669.15","$1,786,804.39"
SFO - HKG,56133285035,S-168A-6 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/56133285035,https://www.airlines-manager.com/aircraft/show/88032836,23:15,1:59,1046,"$5,282,521.00","$4,883,932.00","$4,669.15","$1,786,804.39"
SFO - IAD,56084270372,S-IAD-CLT-1,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/56084270372,https://www.airlines-manager.com/aircraft/show/96135565,0:00,11:14,400,"$912,332.00","$834,314.00","$2,085.79","$74,271.28"
SFO - IAD,56093103076,S-IAD-CLT-5,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/56093103076,https://www.airlines-manager.com/aircraft/show/96135561,4:00,15:14,400,"$912,332.00","$834,314.00","$2,085.79","$74,271.28"
SFO - IAD,56096590139,S-IAD-CLT-2,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/56096590139,https://www.airlines-manager.com/aircraft/show/96135564,6:00,17:14,400,"$912,332.00","$834,314.00","$2,085.79","$74,271.28"
SFO - IAD,56112079206,S-IAD-CLT-3,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/56112079206,https://www.airlines-manager.com/aircraft/show/96135563,12:45,23:59,400,"$912,332.00","$834,314.00","$2,085.79","$74,271.28"
SFO - IAD,56118925592,S-IAD-CLT-4,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/56118925592,https://www.airlines-manager.com/aircraft/show/96135562,16:45,3:59,400,"$912,332.00","$834,314.00","$2,085.79","$74,271.28"
SFO - IAH,56093103161,S-IAH-MEX-2,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/56093103161,https://www.airlines-manager.com/aircraft/show/101045338,4:45,12:59,400,"$694,602.00","$624,794.00","$1,561.99","$75,885.91"
SFO - IAH,56099991578,S-IAH-MEX-5,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/56099991578,https://www.airlines-manager.com/aircraft/show/101045335,6:45,14:59,400,"$694,602.00","$624,794.00","$1,561.99","$75,885.91"
SFO - IAH,56112079232,S-IAH-MEX-1,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/56112079232,https://www.airlines-manager.com/aircraft/show/101045339,13:00,21:14,400,"$694,602.00","$624,794.00","$1,561.99","$75,885.91"
SFO - IAH,56115475729,S-IAH-MEX-4,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/56115475729,https://www.airlines-manager.com/aircraft/show/101045336,15:00,23:14,400,"$694,602.00","$624,794.00","$1,561.99","$75,885.91"
SFO - IAH,56125474068,S-IAH-MEX-3,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/56125474068,https://www.airlines-manager.com/aircraft/show/101045337,19:30,3:44,400,"$694,602.00","$624,794.00","$1,561.99","$75,885.91"
SFO - ICN,56096590093,S-168D-1 B2,747-400,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/56096590093,https://www.airlines-manager.com/aircraft/show/120752294,5:15,3:29,968,"$4,255,893.00","$3,935,008.00","$4,065.09","$176,986.87"
SFO - ICN,56133285036,S-168C-7 B2,747-400,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/56133285036,https://www.airlines-manager.com/aircraft/show/120752307,23:15,21:29,968,"$4,255,893.00","$3,935,008.00","$4,065.09","$176,986.87"
SFO - ICT,56084270521,S-ICT-BFF-3,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/56084270521,https://www.airlines-manager.com/aircraft/show/114912263,0:45,8:14,310,"$469,158.00","$430,023.00","$1,387.17","$57,464.10"
SFO - ICT,56099991679,S-ICT-BFF-2,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/56099991679,https://www.airlines-manager.com/aircraft/show/114912264,8:00,15:29,310,"$469,158.00","$430,023.00","$1,387.17","$57,464.10"
SFO - ICT,56118925548,S-ICT-BFF-1,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/56118925548,https://www.airlines-manager.com/aircraft/show/114912267,16:00,23:29,310,"$469,158.00","$430,023.00","$1,387.17","$57,464.10"
SFO - ICT,56122311546,S-ICT-BFF-5,ERJ-175,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/56122311546,https://www.airlines-manager.com/aircraft/show/114912306,17:30,0:59,112,"$221,348.00","$195,492.00","$1,745.46","$26,123.65"
SFO - ICT,56125474000,S-ICT-BFF-4,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/56125474000,https://www.airlines-manager.com/aircraft/show/114912268,18:45,2:14,310,"$469,158.00","$430,023.00","$1,387.17","$57,464.10"
SFO - IND,56096590091,S-IND-CVG-4,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/56096590091,https://www.airlines-manager.com/aircraft/show/99316503,5:15,14:59,310,"$605,607.00","$555,557.00","$1,792.12","$57,077.77"
SFO - IND,56099991630,S-IND-CVG-6,ERJ-175,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/56099991630,https://www.airlines-manager.com/aircraft/show/99174346,7:15,16:59,112,"$284,129.00","$250,715.00","$2,238.53","$25,758.39"
SFO - IND,56112079294,S-IND-CVG-1,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/56112079294,https://www.airlines-manager.com/aircraft/show/99316506,13:00,22:44,310,"$605,607.00","$555,557.00","$1,792.12","$57,077.77"
SFO - IND,56115475758,S-IND-CVG-3,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/56115475758,https://www.airlines-manager.com/aircraft/show/99316504,15:00,0:44,310,"$605,607.00","$555,557.00","$1,792.12","$57,077.77"
SFO - IND,56122311482,S-IND-CVG-5,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/56122311482,https://www.airlines-manager.com/aircraft/show/99316502,17:00,2:44,310,"$605,607.00","$555,557.00","$1,792.12","$57,077.77"
SFO - IND,56131084931,S-IND-CVG-2,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/56131084931,https://www.airlines-manager.com/aircraft/show/99316505,23:00,8:44,310,"$605,607.00","$555,557.00","$1,792.12","$57,077.77"
SFO - JAC,56084270529,S-MAF-FCA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/56084270529,https://www.airlines-manager.com/aircraft/show/120056761,1:00,5:59,272,"$285,290.00","$263,927.00",$970.32,"$52,961.94"
SFO - JAC,56093103177,S-MAF-FCA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/56093103177,https://www.airlines-manager.com/aircraft/show/120056758,5:00,9:59,272,"$285,290.00","$263,927.00",$970.32,"$52,961.94"
SFO - JAC,56112079214,S-MAF-FCA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/56112079214,https://www.airlines-manager.com/aircraft/show/120056759,13:00,17:59,272,"$285,290.00","$263,927.00",$970.32,"$52,961.94"
SFO - JAC,56122311624,S-MAF-FCA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/56122311624,https://www.airlines-manager.com/aircraft/show/120056760,18:15,23:14,272,"$285,290.00","$263,927.00",$970.32,"$52,961.94"
SFO - JAC,56128543790,S-MAF-FCA-5,ERJ-175,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/56128543790,https://www.airlines-manager.com/aircraft/show/119652600,20:15,1:14,112,"$149,834.00","$131,932.00","$1,177.96","$26,474.65"
SFO - JAN,56084270705,S-SAV-JAN-5 B,A319-100,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/56084270705,https://www.airlines-manager.com/aircraft/show/114917486,2:15,11:29,198,"$439,387.00","$402,942.00","$2,035.06","$43,639.93"
SFO - JAN,56096590166,S-SAV-JAN-3,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/56096590166,https://www.airlines-manager.com/aircraft/show/114912269,6:15,15:29,310,"$583,909.00","$538,452.00","$1,736.94","$58,316.10"
SFO - JAN,56099991656,S-SAV-JAN-2,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/56099991656,https://www.airlines-manager.com/aircraft/show/114912266,7:45,16:59,310,"$583,909.00","$538,452.00","$1,736.94","$58,316.10"
SFO - JAN,56122311490,S-SAV-JAN-1,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/56122311490,https://www.airlines-manager.com/aircraft/show/114912265,17:00,2:14,310,"$583,909.00","$538,452.00","$1,736.94","$58,316.10"
SFO - JAN,56125474036,S-SAV-JAN-4,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/56125474036,https://www.airlines-manager.com/aircraft/show/114912270,19:00,4:14,310,"$583,909.00","$538,452.00","$1,736.94","$58,316.10"
SFO - JAX,56096590145,S-JAX-SAT-5,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/56096590145,https://www.airlines-manager.com/aircraft/show/86377315,6:00,17:14,310,"$704,676.00","$649,607.00","$2,095.51","$57,828.52"
SFO - JAX,56112079275,S-JAX-SAT-1,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/56112079275,https://www.airlines-manager.com/aircraft/show/86375568,13:00,0:14,310,"$704,676.00","$649,607.00","$2,095.51","$57,828.52"
SFO - JAX,56115475749,S-JAX-SAT-2,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/56115475749,https://www.airlines-manager.com/aircraft/show/86371267,15:00,2:14,310,"$704,676.00","$649,607.00","$2,095.51","$57,828.52"
SFO - JAX,56128543932,S-JAX-SAT-3,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/56128543932,https://www.airlines-manager.com/aircraft/show/86385102,21:00,8:14,310,"$704,676.00","$649,607.00","$2,095.51","$57,828.52"
SFO - JAX,56131084929,S-JAX-SAT-4,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/56131084929,https://www.airlines-manager.com/aircraft/show/86378760,23:00,10:14,310,"$704,676.00","$649,607.00","$2,095.51","$57,828.52"
SFO - JFK,56084270535,S-MIA-JFK-4,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/56084270535,https://www.airlines-manager.com/aircraft/show/89233034,1:00,12:59,400,"$965,414.00","$866,916.00","$2,167.29","$72,343.48"
SFO - JFK,56099991601,S-MIA-JFK-5,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/56099991601,https://www.airlines-manager.com/aircraft/show/89233035,7:00,18:59,400,"$965,414.00","$866,916.00","$2,167.29","$72,343.48"
SFO - JFK,56112079224,S-MIA-JFK-1,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/56112079224,https://www.airlines-manager.com/aircraft/show/89233032,13:00,0:59,400,"$965,414.00","$866,916.00","$2,167.29","$72,343.48"
SFO - JFK,56118925513,S-MIA-JFK-2,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/56118925513,https://www.airlines-manager.com/aircraft/show/84622093,16:00,3:59,400,"$965,414.00","$866,916.00","$2,167.29","$72,343.48"
SFO - JFK,56125474011,S-MIA-JFK-3,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/56125474011,https://www.airlines-manager.com/aircraft/show/89233031,19:00,6:59,400,"$965,414.00","$866,916.00","$2,167.29","$72,343.48"
SFO - KIX,56084270629,S-168D-3 B2,747-400,https://www.airlines-manager.com/network/showline/50769294,https://www.airlines-manager.com/network/showflight/56084270629,https://www.airlines-manager.com/aircraft/show/120752296,1:30,22:59,968,"$4,000,997.00","$3,703,245.00","$3,825.67","$172,377.58"
SFO - KIX,56125474085,S-168C-2 B2,747-400,https://www.airlines-manager.com/network/showline/50769294,https://www.airlines-manager.com/network/showflight/56125474085,https://www.airlines-manager.com/aircraft/show/120752302,19:30,16:59,968,"$4,000,997.00","$3,703,245.00","$3,825.67","$172,377.58"
SFO - KOA,56084270743,S-KOA-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/56084270743,https://www.airlines-manager.com/aircraft/show/112650101,2:45,13:59,310,"$705,734.00","$650,862.00","$2,099.55","$57,940.24"
SFO - KOA,56093103170,S-KOA-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/56093103170,https://www.airlines-manager.com/aircraft/show/112650100,4:45,15:59,310,"$705,734.00","$650,862.00","$2,099.55","$57,940.24"
SFO - KOA,56112079316,S-KOA-PWM-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/56112079316,https://www.airlines-manager.com/aircraft/show/112650091,13:00,0:14,198,"$529,574.00","$485,575.00","$2,452.40","$43,226.26"
SFO - KOA,56122311488,S-KOA-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/56122311488,https://www.airlines-manager.com/aircraft/show/112650103,17:00,4:14,310,"$705,734.00","$650,862.00","$2,099.55","$57,940.24"
SFO - KOA,56125474135,S-KOA-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/56125474135,https://www.airlines-manager.com/aircraft/show/112650102,20:00,7:14,310,"$705,734.00","$650,862.00","$2,099.55","$57,940.24"
SFO - LAS,56096590133,S-BOS-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/56096590133,https://www.airlines-manager.com/aircraft/show/104901564,6:00,9:44,338,"$218,684.00","$179,991.00",$532.52,"$48,211.88"
SFO - LAS,56099991595,S-BOS-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/56099991595,https://www.airlines-manager.com/aircraft/show/104870960,7:00,10:44,338,"$218,684.00","$179,991.00",$532.52,"$48,211.88"
SFO - LAS,56112079113,S-BOS-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/56112079113,https://www.airlines-manager.com/aircraft/show/104874465,12:00,15:44,338,"$218,684.00","$179,991.00",$532.52,"$48,211.88"
SFO - LAS,56118925572,S-BOS-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/56118925572,https://www.airlines-manager.com/aircraft/show/104901544,16:30,20:14,338,"$218,684.00","$179,991.00",$532.52,"$48,211.88"
SFO - LAS,56128543791,S-BOS-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/56128543791,https://www.airlines-manager.com/aircraft/show/104864961,20:30,0:14,338,"$218,684.00","$179,991.00",$532.52,"$48,211.88"
SFO - LAX,56084270688,S-PHL-SEA-6 B,A319-100,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/56084270688,https://www.airlines-manager.com/aircraft/show/97900730,2:00,5:29,198,"$133,747.00","$101,733.00",$513.80,"$29,205.65"
SFO - LAX,56093103146,S-PHL-SEA-1,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/56093103146,https://www.airlines-manager.com/aircraft/show/92390872,4:30,7:59,320,"$176,398.00","$129,187.00",$403.71,"$37,087.18"
SFO - LAX,56099991635,S-PHL-SEA-5,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/56099991635,https://www.airlines-manager.com/aircraft/show/92390869,7:30,10:59,320,"$176,398.00","$129,187.00",$403.71,"$37,087.18"
SFO - LAX,56103538554,S-PHL-SEA-4,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/56103538554,https://www.airlines-manager.com/aircraft/show/92390870,8:15,11:44,320,"$176,398.00","$129,187.00",$403.71,"$37,087.18"
SFO - LAX,56112079133,S-PHL-SEA-3,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/56112079133,https://www.airlines-manager.com/aircraft/show/92390873,12:00,15:29,320,"$176,398.00","$129,187.00",$403.71,"$37,087.18"
SFO - LAX,56118925594,S-PHL-SEA-2,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/56118925594,https://www.airlines-manager.com/aircraft/show/92390871,16:45,20:14,320,"$176,398.00","$129,187.00",$403.71,"$37,087.18"
SFO - LEX,56084270685,S-BTV-LEX-1,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/56084270685,https://www.airlines-manager.com/aircraft/show/112650095,2:00,11:59,310,"$625,642.00","$578,194.00","$1,865.14","$57,915.93"
SFO - LEX,56096590152,S-BTV-LEX-2,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/56096590152,https://www.airlines-manager.com/aircraft/show/112650094,6:00,15:59,310,"$625,642.00","$578,194.00","$1,865.14","$57,915.93"
SFO - LEX,56099991678,S-BTV-LEX-3,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/56099991678,https://www.airlines-manager.com/aircraft/show/112650093,8:00,17:59,310,"$625,642.00","$578,194.00","$1,865.14","$57,915.93"
SFO - LEX,56115475649,S-BTV-LEX-4,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/56115475649,https://www.airlines-manager.com/aircraft/show/112650092,14:00,23:59,310,"$625,642.00","$578,194.00","$1,865.14","$57,915.93"
SFO - LEX,56125474146,S-BTV-LEX-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/56125474146,https://www.airlines-manager.com/aircraft/show/112650089,20:00,5:59,198,"$470,560.00","$432,514.00","$2,184.41","$43,323.61"
SFO - LGB,56093103001,S-FAR-BIL-2,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/56093103001,https://www.airlines-manager.com/aircraft/show/117782585,3:15,6:44,310,"$181,588.00","$157,489.00",$508.03,"$45,212.15"
SFO - LGB,56107731647,S-FAR-BIL-1,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/56107731647,https://www.airlines-manager.com/aircraft/show/117782584,11:00,14:29,310,"$181,588.00","$157,489.00",$508.03,"$45,212.15"
SFO - LGB,56115475770,S-FAR-BIL-4,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/56115475770,https://www.airlines-manager.com/aircraft/show/117782587,15:00,18:29,310,"$181,588.00","$157,489.00",$508.03,"$45,212.15"
SFO - LGB,56128543987,S-FAR-BIL-3,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/56128543987,https://www.airlines-manager.com/aircraft/show/117782586,21:30,0:59,310,"$181,588.00","$157,489.00",$508.03,"$45,212.15"
SFO - LHR,56084270744,S-168C-4 B2,747-400,https://www.airlines-manager.com/network/showline/50769240,https://www.airlines-manager.com/network/showflight/56084270744,https://www.airlines-manager.com/aircraft/show/120752304,2:45,23:59,968,"$4,060,744.00","$3,726,461.00","$3,849.65","$175,500.52"
SFO - LHR,56131084936,S-168D-3 B2,747-400,https://www.airlines-manager.com/network/showline/50769240,https://www.airlines-manager.com/network/showflight/56131084936,https://www.airlines-manager.com/aircraft/show/120752296,23:00,20:14,968,"$4,060,744.00","$3,726,461.00","$3,849.65","$175,500.52"
SFO - LIT,56084270696,S-SDF-LIT-3,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/56084270696,https://www.airlines-manager.com/aircraft/show/94886627,2:15,10:59,310,"$542,816.00","$499,788.00","$1,612.22","$57,227.63"
SFO - LIT,56093102998,S-SDF-LIT-5,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/56093102998,https://www.airlines-manager.com/aircraft/show/106453498,3:15,11:59,310,"$542,816.00","$499,788.00","$1,612.22","$57,227.63"
SFO - LIT,56115475630,S-SDF-LIT-2,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/56115475630,https://www.airlines-manager.com/aircraft/show/94886628,14:00,22:44,310,"$542,816.00","$499,788.00","$1,612.22","$57,227.63"
SFO - LIT,56115475631,S-SDF-LIT-4,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/56115475631,https://www.airlines-manager.com/aircraft/show/106453500,15:00,23:44,310,"$542,816.00","$499,788.00","$1,612.22","$57,227.63"
SFO - LIT,56133285081,S-SDF-LIT-1,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/56133285081,https://www.airlines-manager.com/aircraft/show/106453499,23:45,8:29,310,"$542,816.00","$499,788.00","$1,612.22","$57,227.63"
SFO - MAF,56093102977,S-MAF-FCA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/56093102977,https://www.airlines-manager.com/aircraft/show/120056760,3:15,9:59,272,"$388,045.00","$360,385.00","$1,324.94","$53,522.52"
SFO - MAF,56099991685,S-MAF-FCA-5,ERJ-175,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/56099991685,https://www.airlines-manager.com/aircraft/show/119652600,8:00,14:44,112,"$201,536.00","$177,709.00","$1,586.69","$26,392.43"
SFO - MAF,56112079216,S-MAF-FCA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/56112079216,https://www.airlines-manager.com/aircraft/show/120056761,13:00,19:44,272,"$388,045.00","$360,385.00","$1,324.94","$53,522.52"
SFO - MAF,56122311453,S-MAF-FCA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/56122311453,https://www.airlines-manager.com/aircraft/show/120056758,17:00,23:44,272,"$388,045.00","$360,385.00","$1,324.94","$53,522.52"
SFO - MAF,56131084809,S-MAF-FCA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/56131084809,https://www.airlines-manager.com/aircraft/show/120056759,22:00,4:44,272,"$388,045.00","$360,385.00","$1,324.94","$53,522.52"
SFO - MCI,56099991603,S-MCI-OMA-2,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/56099991603,https://www.airlines-manager.com/aircraft/show/88239554,7:00,14:59,320,"$507,197.00","$458,271.00","$1,432.10","$57,403.47"
SFO - MCI,56122311468,S-MCI-OMA-1,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/56122311468,https://www.airlines-manager.com/aircraft/show/88239553,17:00,0:59,320,"$507,197.00","$458,271.00","$1,432.10","$57,403.47"
SFO - MCI,56122311469,S-MCI-OMA-5 B,A319-100,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/56122311469,https://www.airlines-manager.com/aircraft/show/105223003,17:00,0:59,198,"$382,381.00","$347,373.00","$1,754.41","$43,512.28"
SFO - MCI,56125473980,S-MCI-OMA-4,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/56125473980,https://www.airlines-manager.com/aircraft/show/88239557,18:45,2:44,320,"$507,197.00","$458,271.00","$1,432.10","$57,403.47"
SFO - MCI,56133285024,S-MCI-OMA-3,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/56133285024,https://www.airlines-manager.com/aircraft/show/88239555,23:15,7:14,320,"$507,197.00","$458,271.00","$1,432.10","$57,403.47"
SFO - MCO,56084270418,S-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/56084270418,https://www.airlines-manager.com/aircraft/show/120141531,0:00,11:29,0,"$207,765.00","$117,928.00",$0.00,"$10,269.49"
SFO - MCO,56093103009,S-MCO-MSP-2,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/56093103009,https://www.airlines-manager.com/aircraft/show/105367367,3:30,14:59,338,"$795,031.00","$730,062.00","$2,159.95","$63,575.79"
SFO - MCO,56093103010,S-MCO-MSP-5,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/56093103010,https://www.airlines-manager.com/aircraft/show/105367364,4:30,15:59,338,"$795,031.00","$730,062.00","$2,159.95","$63,575.79"
SFO - MCO,56115475719,S-MCO-MSP-1,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/56115475719,https://www.airlines-manager.com/aircraft/show/105367368,15:00,2:29,338,"$795,031.00","$730,062.00","$2,159.95","$63,575.79"
SFO - MCO,56122311454,S-MCO-MSP-4,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/56122311454,https://www.airlines-manager.com/aircraft/show/105367365,17:00,4:29,338,"$795,031.00","$730,062.00","$2,159.95","$63,575.79"
SFO - MCO,56125474043,S-MCO-MSP-3,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/56125474043,https://www.airlines-manager.com/aircraft/show/105367366,19:15,6:44,338,"$795,031.00","$730,062.00","$2,159.95","$63,575.79"
SFO - MEM,56084270736,S-MEM-PIT-4,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/56084270736,https://www.airlines-manager.com/aircraft/show/98788934,2:45,11:59,310,"$576,829.00","$528,105.00","$1,703.56","$57,195.49"
SFO - MEM,56096590131,S-MEM-PIT-6,ERJ-175,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/56096590131,https://www.airlines-manager.com/aircraft/show/98675305,5:45,14:59,112,"$270,633.00","$238,251.00","$2,127.24","$25,803.36"
SFO - MEM,56112079292,S-MEM-PIT-1,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/56112079292,https://www.airlines-manager.com/aircraft/show/98788937,13:00,22:14,310,"$576,829.00","$528,105.00","$1,703.56","$57,195.49"
SFO - MEM,56118925543,S-MEM-PIT-3,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/56118925543,https://www.airlines-manager.com/aircraft/show/98788935,16:00,1:14,310,"$576,829.00","$528,105.00","$1,703.56","$57,195.49"
SFO - MEM,56125474031,S-MEM-PIT-5,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/56125474031,https://www.airlines-manager.com/aircraft/show/98788933,19:00,4:14,310,"$576,829.00","$528,105.00","$1,703.56","$57,195.49"
SFO - MEM,56133285078,S-MEM-PIT-2,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/56133285078,https://www.airlines-manager.com/aircraft/show/98788936,23:45,8:59,310,"$576,829.00","$528,105.00","$1,703.56","$57,195.49"
SFO - MEX,56093103053,S-IAH-MEX-3,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/56093103053,https://www.airlines-manager.com/aircraft/show/101045337,3:45,12:59,400,"$773,222.00","$702,355.00","$1,755.89","$76,067.33"
SFO - MEX,56112079231,S-IAH-MEX-2,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/56112079231,https://www.airlines-manager.com/aircraft/show/101045338,13:00,22:14,400,"$773,222.00","$702,355.00","$1,755.89","$76,067.33"
SFO - MEX,56115475728,S-IAH-MEX-5,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/56115475728,https://www.airlines-manager.com/aircraft/show/101045335,15:00,0:14,400,"$773,222.00","$702,355.00","$1,755.89","$76,067.33"
SFO - MEX,56128543951,S-IAH-MEX-1,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/56128543951,https://www.airlines-manager.com/aircraft/show/101045339,21:15,6:29,400,"$773,222.00","$702,355.00","$1,755.89","$76,067.33"
SFO - MEX,56133285023,S-IAH-MEX-4,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/56133285023,https://www.airlines-manager.com/aircraft/show/101045336,23:15,8:29,371,"$726,138.00","$657,041.00","$1,771.00","$71,159.68"
SFO - MFR,56084270548,S-TYS-MSN-2,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/56084270548,https://www.airlines-manager.com/aircraft/show/117782564,1:00,4:29,320,"$173,273.00","$146,641.00",$458.25,"$42,097.89"
SFO - MFR,56093103090,S-TYS-MSN-1,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/56093103090,https://www.airlines-manager.com/aircraft/show/117782565,4:00,7:29,320,"$173,273.00","$146,641.00",$458.25,"$42,097.89"
SFO - MFR,56118925535,S-TYS-MSN-3,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/56118925535,https://www.airlines-manager.com/aircraft/show/117782563,16:00,19:29,320,"$173,273.00","$146,641.00",$458.25,"$42,097.89"
SFO - MFR,56122311511,S-TYS-MSN-4,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/56122311511,https://www.airlines-manager.com/aircraft/show/117782562,17:15,20:44,292,"$164,107.00","$137,723.00",$471.65,"$39,537.70"
SFO - MHT,56084270448,S-MHT-CHS-3,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/56084270448,https://www.airlines-manager.com/aircraft/show/114917463,0:15,12:44,320,"$762,087.00","$698,102.00","$2,181.57","$55,922.72"
SFO - MHT,56093103122,S-MHT-CHS-4,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/56093103122,https://www.airlines-manager.com/aircraft/show/114266973,4:15,16:44,320,"$762,087.00","$698,102.00","$2,181.57","$55,922.72"
SFO - MHT,56112079264,S-MHT-CHS-1,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/56112079264,https://www.airlines-manager.com/aircraft/show/114917465,13:00,1:29,320,"$762,087.00","$698,102.00","$2,181.57","$55,922.72"
SFO - MHT,56122311478,S-MHT-CHS-2,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/56122311478,https://www.airlines-manager.com/aircraft/show/114917464,17:00,5:29,320,"$762,087.00","$698,102.00","$2,181.57","$55,922.72"
SFO - MHT,56125474147,S-MHT-CHS-5 B,A319-100,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/56125474147,https://www.airlines-manager.com/aircraft/show/114912262,20:00,8:29,198,"$571,071.00","$524,144.00","$2,647.19","$41,987.50"
SFO - MIA,56084270534,S-MIA-JFK-1,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/56084270534,https://www.airlines-manager.com/aircraft/show/89233032,1:00,12:59,400,"$958,829.00","$868,986.00","$2,172.47","$72,516.22"
SFO - MIA,56093103075,S-MIA-JFK-2,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/56093103075,https://www.airlines-manager.com/aircraft/show/84622093,4:00,15:59,400,"$958,829.00","$868,986.00","$2,172.47","$72,516.22"
SFO - MIA,56099991600,S-MIA-JFK-3,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/56099991600,https://www.airlines-manager.com/aircraft/show/89233031,7:00,18:59,400,"$958,829.00","$868,986.00","$2,172.47","$72,516.22"
SFO - MIA,56112079225,S-MIA-JFK-4,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/56112079225,https://www.airlines-manager.com/aircraft/show/89233034,13:00,0:59,400,"958,829$","868,986$","$2,172.47","$72,516.22"
SFO - MIA,56125474012,S-MIA-JFK-5,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/56125474012,https://www.airlines-manager.com/aircraft/show/89233035,19:00,6:59,400,"$958,829.00","$868,986.00","$2,172.47","$72,516.22"
SFO - MKE,56084270470,S-CLE-MKE-1,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/56084270470,https://www.airlines-manager.com/aircraft/show/92519368,0:30,9:44,320,"$586,128.00","$533,360.00","$1,666.75","$57,764.62"
SFO - MKE,56096590101,S-CLE-MKE-4,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/56096590101,https://www.airlines-manager.com/aircraft/show/92519371,5:30,14:44,320,"$586,128.00","$533,360.00","$1,666.75","$57,764.62"
SFO - MKE,56099991580,S-CLE-MKE-3,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/56099991580,https://www.airlines-manager.com/aircraft/show/92519367,6:45,15:59,320,"$586,128.00","$533,360.00","$1,666.75","$57,764.62"
SFO - MKE,56118925519,S-CLE-MKE-2,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/56118925519,https://www.airlines-manager.com/aircraft/show/92519369,16:00,1:14,320,"$586,128.00","$533,360.00","$1,666.75","$57,764.62"
SFO - MKE,56122311577,S-CLE-MKE-5,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/56122311577,https://www.airlines-manager.com/aircraft/show/92519370,18:00,3:14,320,"$586,128.00","$533,360.00","$1,666.75","$57,764.62"
SFO - MSN,56084270706,S-TYS-MSN-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/56084270706,https://www.airlines-manager.com/aircraft/show/117782582,2:15,11:14,198,"424,215$","388,553$","$1,962.39","$43,252.65"
SFO - MSN,56099991607,S-TYS-MSN-4,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/56099991607,https://www.airlines-manager.com/aircraft/show/117782562,7:00,15:59,320,"562,482$","513,233$","$1,603.85","$57,131.69"
SFO - MSN,56099991608,S-TYS-MSN-3,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/56099991608,https://www.airlines-manager.com/aircraft/show/117782563,7:00,15:59,320,"562,482$","513,233$","$1,603.85","$57,131.69"
SFO - MSN,56118925536,S-TYS-MSN-2,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/56118925536,https://www.airlines-manager.com/aircraft/show/117782564,16:00,0:59,320,"562,482$","513,233$","$1,603.85","$57,131.69"
SFO - MSN,56125474023,S-TYS-MSN-1,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/56125474023,https://www.airlines-manager.com/aircraft/show/117782565,19:00,3:59,320,"562,482$","513,233$","$1,603.85","$57,131.69"
SFO - MSO,56099991584,S-TUL-DSM-1,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/56099991584,https://www.airlines-manager.com/aircraft/show/108410856,6:45,11:44,320,"$322,461.00","$288,750.00",$902.34,"$57,943.14"
SFO - MSO,56099991585,S-TUL-DSM-4,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/56099991585,https://www.airlines-manager.com/aircraft/show/108410859,7:30,12:29,320,"$322,461.00","$288,750.00",$902.34,"$57,943.14"
SFO - MSO,56112079257,S-TUL-DSM-3,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/56112079257,https://www.airlines-manager.com/aircraft/show/108410858,13:00,17:59,320,"$322,461.00","$288,750.00",$902.34,"$57,943.14"
SFO - MSO,56128543930,S-TUL-DSM-2,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/56128543930,https://www.airlines-manager.com/aircraft/show/108410857,21:00,1:59,268,"$290,727.00","$258,092.00",$963.03,"$51,791.04"
SFO - MSP,56084270709,S-MCO-MSP-1,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/56084270709,https://www.airlines-manager.com/aircraft/show/105367368,2:30,10:44,338,"$572,597.00","$523,159.00","$1,547.81","$63,541.58"
SFO - MSP,56093103141,S-MCO-MSP-4,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/56093103141,https://www.airlines-manager.com/aircraft/show/105367365,4:30,12:44,338,"$572,597.00","$523,159.00","$1,547.81","$63,541.58"
SFO - MSP,56099991575,S-MCO-MSP-3,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/56099991575,https://www.airlines-manager.com/aircraft/show/105367366,6:45,14:59,338,"572,597$","523,159$","$1,547.81","$63,541.58"
SFO - MSP,56115475718,S-MCO-MSP-2,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/56115475718,https://www.airlines-manager.com/aircraft/show/105367367,15:00,23:14,338,"572,597$","523,159$","$1,547.81","$63,541.58"
SFO - MSP,56118925502,S-MCO-MSP-5,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/56118925502,https://www.airlines-manager.com/aircraft/show/105367364,16:00,0:14,338,"572,597$","523,159$","$1,547.81","$63,541.58"
SFO - MSY,56084270766,S-MSY-STL-6,ERJ-175,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/56084270766,https://www.airlines-manager.com/aircraft/show/103534666,3:00,12:29,112,"279,484$","246,810$","$2,203.66","$26,025.66"
SFO - MSY,56096590143,S-MSY-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/56096590143,https://www.airlines-manager.com/aircraft/show/98075266,6:00,15:29,320,"593,870$","539,636$","$1,686.36","$56,903.62"
SFO - MSY,56099991667,S-MSY-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/56099991667,https://www.airlines-manager.com/aircraft/show/98075264,8:00,17:29,320,"593,870$","539,636$","$1,686.36","$56,903.62"
SFO - MSY,56112079245,S-MSY-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/56112079245,https://www.airlines-manager.com/aircraft/show/98075267,13:00,22:29,320,"593,870$","539,636$","$1,686.36","$56,903.62"
SFO - MSY,56128543953,S-MSY-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/56128543953,https://www.airlines-manager.com/aircraft/show/98075265,21:15,6:44,320,"593,870$","539,636$","$1,686.36","$56,903.62"
SFO - MSY,56133285026,S-MSY-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/56133285026,https://www.airlines-manager.com/aircraft/show/98075263,23:15,8:44,320,"593,870$","539,636$","$1,686.36","$56,903.62"
SFO - NGO,56084270406,S-168C-5 B2,747-400,https://www.airlines-manager.com/network/showline/50769298,https://www.airlines-manager.com/network/showflight/56084270406,https://www.airlines-manager.com/aircraft/show/120752305,0:00,20:59,968,"3,903,860$","3,617,048$","$3,736.62","$172,377.19"
SFO - NGO,56128543779,S-168D-4 B2,747-400,https://www.airlines-manager.com/network/showline/50769298,https://www.airlines-manager.com/network/showflight/56128543779,https://www.airlines-manager.com/aircraft/show/120752297,20:15,17:14,968,"3,903,860$","3,617,048$","$3,736.62","$172,377.19"
SFO - NRT,56084270407,S-168C-6-B2,747-400,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/56084270407,https://www.airlines-manager.com/aircraft/show/120752306,0:00,20:14,968,"3,876,882$","3,579,468$","$3,697.80","$176,909.46"
SFO - NRT,56122311520,S-168D-5 B2,747-400,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/56122311520,https://www.airlines-manager.com/aircraft/show/120752298,17:15,13:29,968,"3,876,882$","3,579,468$","$3,697.80","$176,909.46"
SFO - OGG,56084270718,S-OGG-AUS-5,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/56084270718,https://www.airlines-manager.com/aircraft/show/92773477,2:30,13:44,310,"697,883$","645,321$","$2,081.68","$57,446.97"
SFO - OGG,56112079336,S-OGG-AUS-1,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/56112079336,https://www.airlines-manager.com/aircraft/show/92773481,13:30,0:44,310,"697,883$","645,321$","$2,081.68","$57,446.97"
SFO - OGG,56118925473,S-OGG-AUS-2,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/56118925473,https://www.airlines-manager.com/aircraft/show/92773480,15:30,2:44,310,"697,883$","645,321$","$2,081.68","$57,446.97"
SFO - OGG,56128543981,S-OGG-AUS-3,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/56128543981,https://www.airlines-manager.com/aircraft/show/92773479,21:30,8:44,310,"697,883$","645,321$","$2,081.68","$57,446.97"
SFO - OGG,56133285054,S-OGG-AUS-4,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/56133285054,https://www.airlines-manager.com/aircraft/show/92773478,23:30,10:44,310,"697,883$","645,321$","$2,081.68","$57,446.97"
SFO - OKC,56084270478,S-OKC-FSD-3,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/56084270478,https://www.airlines-manager.com/aircraft/show/107160380,0:30,7:59,320,"476,319$","432,077$","$1,350.24","$57,738.57"
SFO - OKC,56099991671,S-OKC-FSD-2,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/56099991671,https://www.airlines-manager.com/aircraft/show/107160379,8:00,15:29,320,"476,319$","432,077$","$1,350.24","$57,738.57"
SFO - OKC,56122311476,S-OKC-FSD-1,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/56122311476,https://www.airlines-manager.com/aircraft/show/107160378,17:00,0:29,320,"476,319$","432,077$","$1,350.24","$57,738.57"
SFO - OKC,56125473971,S-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/56125473971,https://www.airlines-manager.com/aircraft/show/107132310,18:30,1:59,112,"224,788$","198,645$","$1,773.62","$26,544.99"
SFO - OKC,56125473972,S-OKC-FSD-4,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/56125473972,https://www.airlines-manager.com/aircraft/show/107160381,19:30,2:59,320,"476,319$","432,077$","$1,350.24","$57,738.57"
SFO - OMA,56084270539,S-MCI-OMA-1,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/56084270539,https://www.airlines-manager.com/aircraft/show/88239553,1:00,8:44,320,"484,959$","439,887$","$1,374.65","$56,881.94"
SFO - OMA,56084270540,S-MCI-OMA-5 B,A319-100,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/56084270540,https://www.airlines-manager.com/aircraft/show/105223003,1:00,8:44,198,"366,607$","334,272$","$1,688.24","$43,224.83"
SFO - OMA,56084270541,S-MCI-OMA-4,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/56084270541,https://www.airlines-manager.com/aircraft/show/88239557,2:45,10:29,320,"484,959$","439,887$","$1,374.65","$56,881.94"
SFO - OMA,56099991617,S-MCI-OMA-3,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/56099991617,https://www.airlines-manager.com/aircraft/show/88239555,7:15,14:59,320,"484,959$","439,887$","$1,374.65","$56,881.94"
SFO - OMA,56115475734,S-MCI-OMA-2,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/56115475734,https://www.airlines-manager.com/aircraft/show/88239554,15:00,22:44,320,"484,959$","439,887$","$1,374.65","$56,881.94"
SFO - ONT,56093103149,S-OKC-FSD-2,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/56093103149,https://www.airlines-manager.com/aircraft/show/107160379,4:30,7:59,320,"180,494$","150,361$",$469.88,"$43,165.84"
SFO - ONT,56112079255,S-OKC-FSD-1,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/56112079255,https://www.airlines-manager.com/aircraft/show/107160378,13:00,16:29,320,"180,494$","150,361$",$469.88,"$43,165.84"
SFO - ONT,56115475793,S-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/56115475793,https://www.airlines-manager.com/aircraft/show/107132310,15:00,18:29,112,"83,245$","67,122$",$599.30,"$19,269.47"
SFO - ONT,56118925528,S-OKC-FSD-4,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/56118925528,https://www.airlines-manager.com/aircraft/show/107160381,16:00,19:29,320,"180,494$","150,361$",$469.88,"$43,165.84"
SFO - ONT,56128543929,S-OKC-FSD-3,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/56128543929,https://www.airlines-manager.com/aircraft/show/107160380,21:00,0:29,320,"180,494$","150,361$",$469.88,"$43,165.84"
SFO - ORD,56096590140,S-ORD-DTW-2,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/56096590140,https://www.airlines-manager.com/aircraft/show/101045333,6:00,14:59,400,"760,394$","672,993$","$1,682.48","$74,915.73"
SFO - ORD,56099991633,S-ORD-DTW-5,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/56099991633,https://www.airlines-manager.com/aircraft/show/101045330,7:30,16:29,400,"760,394$","672,993$","$1,682.48","$74,915.73"
SFO - ORD,56112079229,S-ORD-DTW-1,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/56112079229,https://www.airlines-manager.com/aircraft/show/101045334,13:00,21:59,400,"760,394$","672,993$","$1,682.48","$74,915.73"
SFO - ORD,56115475725,S-ORD-DTW-4,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/56115475725,https://www.airlines-manager.com/aircraft/show/101045331,15:00,23:59,400,"760,394$","672,993$","$1,682.48","$74,915.73"
SFO - ORD,56125474122,S-ORD-DTW-3,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/56125474122,https://www.airlines-manager.com/aircraft/show/101045332,20:00,4:59,400,"760,394$","672,993$","$1,682.48","$74,915.73"
SFO - ORF,56096590109,S-ORF-RIC-3,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/56096590109,https://www.airlines-manager.com/aircraft/show/108328836,5:30,17:29,310,"732,603$","676,491$","$2,182.23","$56,452.66"
SFO - ORF,56099991642,S-ORF-RIC-4,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/56099991642,https://www.airlines-manager.com/aircraft/show/108328837,7:30,19:29,310,"732,603$","676,491$","$2,182.23","$56,452.66"
SFO - ORF,56122311593,S-ORF-RIC-1,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/56122311593,https://www.airlines-manager.com/aircraft/show/108328834,18:00,5:59,310,"732,603$","676,491$","$2,182.23","$56,452.66"
SFO - ORF,56125474131,S-ORF-RIC-2,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/56125474131,https://www.airlines-manager.com/aircraft/show/108328835,20:00,7:59,310,"732,603$","676,491$","$2,182.23","$56,452.66"
SFO - ORF,56131084832,S-ORF-RIC-5 B,A319-100,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/56131084832,https://www.airlines-manager.com/aircraft/show/108328833,22:00,9:59,198,"547,743$","502,744$","$2,539.11","$41,953.60"
SFO - PBI,56093103117,S-PBI-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/56093103117,https://www.airlines-manager.com/aircraft/show/100301186,4:15,16:14,320,"734,200$","669,869$","$2,093.34","$55,900.06"
SFO - PBI,56096590164,S-PBI-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/56096590164,https://www.airlines-manager.com/aircraft/show/100301185,6:15,18:14,320,"734,200$","669,869$","$2,093.34","$55,900.06"
SFO - PBI,56122311475,S-PBI-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/56122311475,https://www.airlines-manager.com/aircraft/show/100301188,17:00,4:59,320,"734,200$","669,869$","$2,093.34","$55,900.06"
SFO - PBI,56125474018,S-PBI-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/56125474018,https://www.airlines-manager.com/aircraft/show/100301187,19:00,6:59,320,"734,200$","669,869$","$2,093.34","$55,900.06"
SFO - PBI,56128543927,S-PBI-RDU-5,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/56128543927,https://www.airlines-manager.com/aircraft/show/100301184,21:00,8:59,320,"734,200$","669,869$","$2,093.34","$55,900.06"
SFO - PDX,56084270427,S-MCO-MSP-5,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/56084270427,https://www.airlines-manager.com/aircraft/show/105367364,0:15,4:29,338,"272,269$","242,872$",$718.56,"$57,371.34"
SFO - PDX,56107731538,S-MCO-MSP-1,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/56107731538,https://www.airlines-manager.com/aircraft/show/105367368,10:45,14:59,338,"272,269$","242,872$",$718.56,"$57,371.34"
SFO - PDX,56112079204,S-MCO-MSP-4,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/56112079204,https://www.airlines-manager.com/aircraft/show/105367365,12:45,16:59,338,"272,269$","242,872$",$718.56,"$57,371.34"
SFO - PDX,56115475717,S-MCO-MSP-3,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/56115475717,https://www.airlines-manager.com/aircraft/show/105367366,15:00,19:14,338,"272,269$","242,872$",$718.56,"$57,371.34"
SFO - PDX,56133285021,S-MCO-MSP-2,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/56133285021,https://www.airlines-manager.com/aircraft/show/105367367,23:15,3:29,274,"241,778$","213,185$",$778.05,"$50,358.66"
SFO - PEK,56084270408,S-168C-7 B2,747-400,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/56084270408,https://www.airlines-manager.com/aircraft/show/120752307,0:00,23:14,968,"4,491,411$","4,124,325$","$4,260.67","$177,517.58"
SFO - PEK,56096590154,S-168D-7 B2,747-400,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/56096590154,https://www.airlines-manager.com/aircraft/show/120752300,6:00,5:14,968,"4,491,411$","4,124,325$","$4,260.67","$177,517.58"
SFO - PHL,56084270379,S-PHL-SEA-2,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/56084270379,https://www.airlines-manager.com/aircraft/show/92390871,0:00,11:44,320,"730,738$","658,186$","$2,056.83","$56,095.40"
SFO - PHL,56112079132,S-PHL-SEA-1,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/56112079132,https://www.airlines-manager.com/aircraft/show/92390872,12:00,23:44,320,"730,738$","658,186$","$2,056.83","$56,095.40"
SFO - PHL,56115475664,S-PHL-SEA-6 B,A319-100,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/56115475664,https://www.airlines-manager.com/aircraft/show/97900730,14:00,1:59,198,"548,740$","496,348$","$2,506.81","$41,419.86"
SFO - PHL,56115475665,S-PHL-SEA-5,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/56115475665,https://www.airlines-manager.com/aircraft/show/92390869,15:00,2:44,320,"730,738$","658,186$","$2,056.83","$56,095.40"
SFO - PHL,56118925482,S-PHL-SEA-4,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/56118925482,https://www.airlines-manager.com/aircraft/show/92390870,15:45,3:29,320,"730,738$","658,186$","$2,056.83","$56,095.40"
SFO - PHL,56125474047,S-PHL-SEA-3,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/56125474047,https://www.airlines-manager.com/aircraft/show/92390873,19:15,6:59,320,"730,738$","658,186$","$2,056.83","$56,095.40"
SFO - PHX,56084270601,S-BOS-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/56084270601,https://www.airlines-manager.com/aircraft/show/104901564,1:30,5:59,338,"323,043$","284,985$",$843.15,"$63,565.43"
SFO - PHX,56084270602,S-BOS-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/56084270602,https://www.airlines-manager.com/aircraft/show/104870960,2:30,6:59,338,"323,043$","284,985$",$843.15,"$63,565.43"
SFO - PHX,56093103106,S-BOS-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/56093103106,https://www.airlines-manager.com/aircraft/show/104874465,4:15,8:44,338,"323,043$","284,985$",$843.15,"$63,565.43"
SFO - PHX,56112079114,S-BOS-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/56112079114,https://www.airlines-manager.com/aircraft/show/104901544,12:00,16:29,338,"323,043$","284,985$",$843.15,"$63,565.43"
SFO - PHX,56118925501,S-BOS-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/56118925501,https://www.airlines-manager.com/aircraft/show/104864961,16:00,20:29,338,"323,043$","284,985$",$843.15,"$63,565.43"
SFO - PIT,56084270588,S-MEM-PIT-3,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/56084270588,https://www.airlines-manager.com/aircraft/show/98788935,1:15,11:59,310,"676,648$","621,492$","$2,004.81","$57,902.98"
SFO - PIT,56093103126,S-MEM-PIT-5,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/56093103126,https://www.airlines-manager.com/aircraft/show/98788933,4:15,14:59,310,"676,648$","621,492$","$2,004.81","$57,902.98"
SFO - PIT,56112079291,S-MEM-PIT-2,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/56112079291,https://www.airlines-manager.com/aircraft/show/98788936,13:00,23:44,310,"676,648$","621,492$","$2,004.81","$57,902.98"
SFO - PIT,56118925542,S-MEM-PIT-4,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/56118925542,https://www.airlines-manager.com/aircraft/show/98788934,16:00,2:44,310,"676,648$","621,492$","$2,004.81","$57,902.98"
SFO - PIT,56125474040,S-MEM-PIT-6,ERJ-175,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/56125474040,https://www.airlines-manager.com/aircraft/show/98675305,19:00,5:44,112,"317,025$","280,006$","$2,500.05","$26,087.52"
SFO - PIT,56131084851,S-MEM-PIT-1,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/56131084851,https://www.airlines-manager.com/aircraft/show/98788937,22:15,8:59,310,"676,648$","621,492$","$2,004.81","$57,902.98"
SFO - PSP,56093103132,S-ICT-BFF-2,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/56093103132,https://www.airlines-manager.com/aircraft/show/114912264,4:15,7:59,310,"200,274$","175,476$",$566.05,"$47,002.50"
SFO - PSP,56107731678,S-ICT-BFF-1,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/56107731678,https://www.airlines-manager.com/aircraft/show/114912267,11:45,15:29,310,"200,274$","175,476$",$566.05,"$47,002.50"
SFO - PSP,56112079331,S-ICT-BFF-5,ERJ-175,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/56112079331,https://www.airlines-manager.com/aircraft/show/114912306,13:15,16:59,112,"92,401$","76,790$",$685.63,"$20,568.75"
SFO - PSP,56115475763,S-ICT-BFF-4,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/56115475763,https://www.airlines-manager.com/aircraft/show/114912268,15:00,18:44,310,"200,274$","175,476$",$566.05,"$47,002.50"
SFO - PSP,56128543938,S-ICT-BFF-3,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/56128543938,https://www.airlines-manager.com/aircraft/show/114912263,21:00,0:44,280,"188,842$","164,389$",$587.10,"$44,032.77"
SFO - PVD,56084270399,S-PVD-BUF-4,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/56084270399,https://www.airlines-manager.com/aircraft/show/112650105,0:00,12:29,310,"763,375$","705,708$","$2,276.48","$56,532.02"
SFO - PVD,56093103192,S-PVD-BUF-5,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/56093103192,https://www.airlines-manager.com/aircraft/show/112650104,5:00,17:29,310,"763,375$","705,708$","$2,276.48","$56,532.02"
SFO - PVD,56112079308,S-PVD-BUF-1,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/56112079308,https://www.airlines-manager.com/aircraft/show/112650108,13:00,1:29,310,"763,375$","705,708$","$2,276.48","$56,532.02"
SFO - PVD,56122311489,S-PVD-BUF-2,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/56122311489,https://www.airlines-manager.com/aircraft/show/112650107,17:00,5:29,310,"763,375$","705,708$","$2,276.48","$56,532.02"
SFO - PVD,56125474034,S-PVD-BUF-3,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/56125474034,https://www.airlines-manager.com/aircraft/show/112650106,19:00,7:29,310,"763,375$","705,708$","$2,276.48","$56,532.02"
SFO - PWM,56084270461,S-KOA-PWM-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/56084270461,https://www.airlines-manager.com/aircraft/show/112650091,0:15,12:59,198,"576,974$","530,777$","$2,680.69","$41,684.06"
SFO - PWM,56093103131,S-KOA-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/56093103131,https://www.airlines-manager.com/aircraft/show/112650103,4:15,16:59,310,"771,182$","713,582$","$2,301.88","$56,040.47"
SFO - PWM,56099991624,S-KOA-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/56099991624,https://www.airlines-manager.com/aircraft/show/112650102,7:15,19:59,310,"771,182$","713,582$","$2,301.88","$56,040.47"
SFO - PWM,56115475653,S-KOA-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/56115475653,https://www.airlines-manager.com/aircraft/show/112650101,14:00,2:44,310,"771,182$","713,582$","$2,301.88","$56,040.47"
SFO - PWM,56118925545,S-KOA-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/56118925545,https://www.airlines-manager.com/aircraft/show/112650100,16:00,4:44,310,"771,182$","713,582$","$2,301.88","$56,040.47"
SFO - RAP,56093103155,S-FAR-BIL-1,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/56093103155,https://www.airlines-manager.com/aircraft/show/117782584,4:30,10:59,310,"399,527$","365,234$","$1,178.17","$56,334.29"
SFO - RAP,56103538593,S-FAR-BIL-4,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/56103538593,https://www.airlines-manager.com/aircraft/show/117782587,8:30,14:59,310,"399,527$","365,234$","$1,178.17","$56,334.29"
SFO - RAP,56115475769,S-FAR-BIL-3,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/56115475769,https://www.airlines-manager.com/aircraft/show/117782586,15:00,21:29,310,"399,527$","365,234$","$1,178.17","$56,334.29"
SFO - RAP,56128543832,S-FAR-BIL-2,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/56128543832,https://www.airlines-manager.com/aircraft/show/117782585,20:45,3:14,288,"382,781$","349,151$","$1,212.33","$53,853.62"
SFO - RDM,56084270599,S-MAF-FCA-5,ERJ-175,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/56084270599,https://www.airlines-manager.com/aircraft/show/119652600,1:15,5:14,112,"102,798$","87,608$",$782.21,"$21,993.64"
SFO - RDM,56096590132,S-MAF-FCA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/56096590132,https://www.airlines-manager.com/aircraft/show/120056761,6:00,9:59,272,"199,098$","180,421$",$663.31,"$45,293.97"
SFO - RDM,56112079213,S-MAF-FCA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/56112079213,https://www.airlines-manager.com/aircraft/show/120056758,13:00,16:59,272,"199,098$","180,421$",$663.31,"$45,293.97"
SFO - RDM,56122311569,S-MAF-FCA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/56122311569,https://www.airlines-manager.com/aircraft/show/120056759,18:00,21:59,272,"199,098$","180,421$",$663.31,"$45,293.97"
SFO - RDM,56133285020,S-MAF-FCA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/56133285020,https://www.airlines-manager.com/aircraft/show/120056760,23:15,3:14,272,"199,098$","180,421$",$663.31,"$45,293.97"
SFO - RDU,56093103184,S-PBI-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/56093103184,https://www.airlines-manager.com/aircraft/show/100301188,5:00,16:14,320,"712,851$","650,128$","$2,031.65","$57,874.90"
SFO - RDU,56099991606,S-PBI-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/56099991606,https://www.airlines-manager.com/aircraft/show/100301187,7:00,18:14,320,"712,851$","650,128$","$2,031.65","$57,874.90"
SFO - RDU,56103538620,S-PBI-RDU-5,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/56103538620,https://www.airlines-manager.com/aircraft/show/100301184,9:00,20:14,320,"712,851$","650,128$","$2,031.65","$57,874.90"
SFO - RDU,56122311474,S-PBI-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/56122311474,https://www.airlines-manager.com/aircraft/show/100301186,17:00,4:14,320,"712,851$","650,128$","$2,031.65","$57,874.90"
SFO - RDU,56125474017,S-PBI-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/56125474017,https://www.airlines-manager.com/aircraft/show/100301185,19:00,6:14,320,"712,851$","650,128$","$2,031.65","$57,874.90"
SFO - RIC,56096590151,S-ORF-RIC-1,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/56096590151,https://www.airlines-manager.com/aircraft/show/108328834,6:00,17:29,310,"726,691$","671,657$","$2,166.64","$58,489.72"
SFO - RIC,56099991677,S-ORF-RIC-2,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/56099991677,https://www.airlines-manager.com/aircraft/show/108328835,8:00,19:29,310,"726,691$","671,657$","$2,166.64","$58,489.72"
SFO - RIC,56103828519,S-ORF-RIC-5 B,A319-100,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/56103828519,https://www.airlines-manager.com/aircraft/show/108328833,10:00,21:29,198,"544,866$","500,734$","$2,528.96","$43,605.28"
SFO - RIC,56122311595,S-ORF-RIC-3,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/56122311595,https://www.airlines-manager.com/aircraft/show/108328836,18:00,5:29,310,"726,691$","671,657$","$2,166.64","$58,489.72"
SFO - RIC,56125474132,S-ORF-RIC-4,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/56125474132,https://www.airlines-manager.com/aircraft/show/108328837,20:00,7:29,310,"726,691$","671,657$","$2,166.64","$58,489.72"
SFO - RNO,56093103113,S-MCI-OMA-2,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/56093103113,https://www.airlines-manager.com/aircraft/show/88239554,4:15,6:59,320,"119,453$","93,133$",$291.04,"$34,073.05"
SFO - RNO,56115475682,S-MCI-OMA-1,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/56115475682,https://www.airlines-manager.com/aircraft/show/88239553,14:15,16:59,320,"119,453$","93,133$",$291.04,"$34,073.05"
SFO - RNO,56115475683,S-MCI-OMA-5 B,A319-100,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/56115475683,https://www.airlines-manager.com/aircraft/show/105223003,14:15,16:59,198,"90,385$","72,533$",$366.33,"$26,536.46"
SFO - RNO,56118925517,S-MCI-OMA-4,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/56118925517,https://www.airlines-manager.com/aircraft/show/88239557,16:00,18:44,320,"119,453$","93,133$",$291.04,"$34,073.05"
SFO - RNO,56128543795,S-MCI-OMA-3,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/56128543795,https://www.airlines-manager.com/aircraft/show/88239555,20:30,23:14,320,"119,453$","93,133$",$291.04,"$34,073.05"
SFO - ROC,56084270360,S-ROC-COS-2,A321neo,https://www.airlines-manager.com/network/showline/50555363,https://www.airlines-manager.com/network/showflight/56084270360,https://www.airlines-manager.com/aircraft/show/120112475,0:00,11:14,338,"771,233$","721,249$","$2,133.87","$64,206.14"
SFO - ROC,56099991577,S-ROC-COS-4,A321neo,https://www.airlines-manager.com/network/showline/50555363,https://www.airlines-manager.com/network/showflight/56099991577,https://www.airlines-manager.com/aircraft/show/120051490,6:45,17:59,338,"771,233$","721,249$","$2,133.87","$64,206.14"
SFO - ROC,56115475723,S-ROC-COS-1,A321neo,https://www.airlines-manager.com/network/showline/50555363,https://www.airlines-manager.com/network/showflight/56115475723,https://www.airlines-manager.com/aircraft/show/120112476,15:00,2:14,338,"771,233$","721,249$","$2,133.87","$64,206.14"
SFO - ROC,56128543764,S-ROC-COS-3,A321neo,https://www.airlines-manager.com/network/showline/50555363,https://www.airlines-manager.com/network/showflight/56128543764,https://www.airlines-manager.com/aircraft/show/120112474,20:15,7:29,338,"771,233$","721,249$","$2,133.87","$64,206.14"
SFO - RSW,56096590088,S-RSW-BDL-3,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/56096590088,https://www.airlines-manager.com/aircraft/show/84915100,5:15,16:59,320,"730,424$","665,610$","$2,080.03","$56,728.13"
SFO - RSW,56099991616,S-RSW-BDL-4,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/56099991616,https://www.airlines-manager.com/aircraft/show/84915101,7:15,18:59,320,"730,424$","665,610$","$2,080.03","$56,728.13"
SFO - RSW,56122311466,S-RSW-BDL-1,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/56122311466,https://www.airlines-manager.com/aircraft/show/84915098,17:00,4:44,320,"730,424$","665,610$","$2,080.03","$56,728.13"
SFO - RSW,56125474014,S-RSW-BDL-2,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/56125474014,https://www.airlines-manager.com/aircraft/show/84915099,19:00,6:44,320,"730,424$","665,610$","$2,080.03","$56,728.13"
SFO - RSW,56128543924,S-RSW-BDL-5,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/56128543924,https://www.airlines-manager.com/aircraft/show/84915102,21:00,8:44,320,"730,424$","665,610$","$2,080.03","$56,728.13"
SFO - SAN,56099991665,S-PHL-SEA-1,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/56099991665,https://www.airlines-manager.com/aircraft/show/92390872,8:00,11:44,320,"217,287$","184,448$",$576.40,"$49,405.71"
SFO - SAN,56107731583,S-PHL-SEA-5,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/56107731583,https://www.airlines-manager.com/aircraft/show/92390869,11:00,14:44,320,"217,287$","184,448$",$576.40,"$49,405.71"
SFO - SAN,56112079130,S-PHL-SEA-4,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/56112079130,https://www.airlines-manager.com/aircraft/show/92390870,12:00,15:44,320,"217,287$","184,448$",$576.40,"$49,405.71"
SFO - SAN,56118925470,S-PHL-SEA-3,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/56118925470,https://www.airlines-manager.com/aircraft/show/92390873,15:30,19:14,320,"217,287$","184,448$",$576.40,"$49,405.71"
SFO - SAN,56128543765,S-PHL-SEA-2,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/56128543765,https://www.airlines-manager.com/aircraft/show/92390871,20:15,23:59,318,"216,466$","183,651$",$577.52,"$49,192.23"
SFO - SAT,56084270451,S-JAX-SAT-1,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/56084270451,https://www.airlines-manager.com/aircraft/show/86375568,0:15,8:14,310,"498,478$","457,208$","$1,474.86","$57,270.31"
SFO - SAT,56084270452,S-JAX-SAT-2,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/56084270452,https://www.airlines-manager.com/aircraft/show/86371267,2:15,10:14,310,"498,478$","457,208$","$1,474.86","$57,270.31"
SFO - SAT,56112079276,S-JAX-SAT-3,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/56112079276,https://www.airlines-manager.com/aircraft/show/86385102,13:00,20:59,310,"498,478$","457,208$","$1,474.86","$57,270.31"
SFO - SAT,56115475750,S-JAX-SAT-4,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/56115475750,https://www.airlines-manager.com/aircraft/show/86378760,15:00,22:59,310,"498,478$","457,208$","$1,474.86","$57,270.31"
SFO - SAT,56122311512,S-JAX-SAT-5,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/56122311512,https://www.airlines-manager.com/aircraft/show/86377315,17:15,1:14,310,"498,478$","457,208$","$1,474.86","$57,270.31"
SFO - SAV,56096590128,S-SAV-JAN-1,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/56096590128,https://www.airlines-manager.com/aircraft/show/114912265,5:45,16:59,310,"696,685$","643,380$","$2,075.42","$57,274.18"
SFO - SAV,56099991657,S-SAV-JAN-4,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/56099991657,https://www.airlines-manager.com/aircraft/show/114912270,7:45,18:59,310,"696,685$","643,380$","$2,075.42","$57,274.18"
SFO - SAV,56115475772,S-SAV-JAN-5 B,A319-100,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/56115475772,https://www.airlines-manager.com/aircraft/show/114917486,15:00,2:14,198,"523,286$","480,541$","$2,426.97","$42,778.13"
SFO - SAV,56125474035,S-SAV-JAN-3,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/56125474035,https://www.airlines-manager.com/aircraft/show/114912269,19:00,6:14,310,"696,685$","643,380$","$2,075.42","$57,274.18"
SFO - SAV,56128543801,S-SAV-JAN-2,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/56128543801,https://www.airlines-manager.com/aircraft/show/114912266,20:30,7:44,310,"696,685$","643,380$","$2,075.42","$57,274.18"
SFO - SDF,56084270585,S-SDF-LIT-2,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/56084270585,https://www.airlines-manager.com/aircraft/show/94886628,1:15,10:59,310,"614,512$","564,269$","$1,820.22","$57,972.84"
SFO - SDF,56084270586,S-SDF-LIT-4,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/56084270586,https://www.airlines-manager.com/aircraft/show/106453500,2:15,11:59,310,"614,512$","564,269$","$1,820.22","$57,972.84"
SFO - SDF,56115475643,S-SDF-LIT-1,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/56115475643,https://www.airlines-manager.com/aircraft/show/106453499,14:00,23:44,310,"614,512$","564,269$","$1,820.22","$57,972.84"
SFO - SDF,56118925583,S-SDF-LIT-3,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/56118925583,https://www.airlines-manager.com/aircraft/show/94886627,16:30,2:14,310,"614,512$","564,269$","$1,820.22","$57,972.84"
SFO - SDF,56122311539,S-SDF-LIT-5,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/56122311539,https://www.airlines-manager.com/aircraft/show/106453498,17:30,3:14,310,"614,512$","564,269$","$1,820.22","$57,972.84"
SFO - SEA,56084270728,S-PHL-SEA-5,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/56084270728,https://www.airlines-manager.com/aircraft/show/92390869,2:45,7:29,320,"301,272$","257,664$",$805.20,"$54,436.06"
SFO - SEA,56093103025,S-PHL-SEA-4,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/56093103025,https://www.airlines-manager.com/aircraft/show/92390870,3:30,8:14,320,"301,272$","257,664$",$805.20,"$54,436.06"
SFO - SEA,56096590113,S-PHL-SEA-6 B,A319-100,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/56096590113,https://www.airlines-manager.com/aircraft/show/97900730,5:30,10:14,198,"229,629$","199,471$","$1,007.43","$42,141.76"
SFO - SEA,56099991604,S-PHL-SEA-3,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/56099991604,https://www.airlines-manager.com/aircraft/show/92390873,7:00,11:44,320,"301,272$","257,664$",$805.20,"$54,436.06"
SFO - SEA,56112079131,S-PHL-SEA-2,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/56112079131,https://www.airlines-manager.com/aircraft/show/92390871,12:00,16:44,320,"301,272$","257,664$",$805.20,"$54,436.06"
SFO - SEA,56133285071,S-PHL-SEA-1,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/56133285071,https://www.airlines-manager.com/aircraft/show/92390872,23:45,4:29,302,"291,029$","247,750$",$820.36,"$52,341.55"
SFO - SHA,56125474138,S-168B-4 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/56125474138,https://www.airlines-manager.com/aircraft/show/87933798,20:00,19:59,1046,"4,655,897$","4,320,364$","$4,130.37","$180,140.26"
SFO - SHA,56131084827,S-168A-4 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/56131084827,https://www.airlines-manager.com/aircraft/show/86817628,22:00,21:59,1046,"4,655,897$","4,320,364$","$4,130.37","$180,140.26"
SFO - SLC,56084270373,S-ORD-DTW-4,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/56084270373,https://www.airlines-manager.com/aircraft/show/101045331,0:00,4:29,400,"353,831$","312,930$",$782.33,"$69,798.51"
SFO - SLC,56084270374,S-ORD-DTW-2,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/56084270374,https://www.airlines-manager.com/aircraft/show/101045333,1:00,5:29,400,"353,831$","312,930$",$782.33,"$69,798.51"
SFO - SLC,56084270375,S-ORD-DTW-5,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/56084270375,https://www.airlines-manager.com/aircraft/show/101045330,3:00,7:29,400,"353,831$","312,930$",$782.33,"$69,798.51"
SFO - SLC,56099991664,S-ORD-DTW-1,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/56099991664,https://www.airlines-manager.com/aircraft/show/101045334,8:00,12:29,400,"353,831$","312,930$",$782.33,"$69,798.51"
SFO - SLC,56115475726,S-ORD-DTW-3,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/56115475726,https://www.airlines-manager.com/aircraft/show/101045332,15:00,19:29,222,"257,197$","219,119$",$987.02,"$48,874.13"
SFO - SMF,56103538584,S-SDF-LIT-1,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/56103538584,https://www.airlines-manager.com/aircraft/show/106453499,8:30,10:59,310,"83,132$","62,550$",$201.77,"$25,187.92"
SFO - SMF,56115475628,S-SDF-LIT-3,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/56115475628,https://www.airlines-manager.com/aircraft/show/94886627,14:00,16:29,310,"83,132$","62,550$",$201.77,"$25,187.92"
SFO - SMF,56115475629,S-SDF-LIT-5,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/56115475629,https://www.airlines-manager.com/aircraft/show/106453498,15:00,17:29,310,"83,132$","62,550$",$201.77,"$25,187.92"
SFO - SMF,56131084911,S-SDF-LIT-2,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/56131084911,https://www.airlines-manager.com/aircraft/show/94886628,22:45,1:14,310,"83,132$","62,550$",$201.77,"$25,187.92"
SFO - SMF,56133285082,S-SDF-LIT-4,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/56133285082,https://www.airlines-manager.com/aircraft/show/106453500,23:45,2:14,310,"83,132$","62,550$",$201.77,"$25,187.92"
SFO - STL,56099991581,S-MSY-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/56099991581,https://www.airlines-manager.com/aircraft/show/98075265,6:45,15:29,320,"557,439$","503,685$","$1,574.02","$57,673.85"
SFO - STL,56103538603,S-MSY-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/56103538603,https://www.airlines-manager.com/aircraft/show/98075263,8:45,17:29,320,"557,439$","503,685$","$1,574.02","$57,673.85"
SFO - STL,56112079320,S-MSY-STL-6,ERJ-175,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/56112079320,https://www.airlines-manager.com/aircraft/show/103534666,13:00,21:44,112,"262,228$","230,306$","$2,056.30","$26,370.92"
SFO - STL,56118925522,S-MSY-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/56118925522,https://www.airlines-manager.com/aircraft/show/98075266,16:00,0:44,320,"557,439$","503,685$","$1,574.02","$57,673.85"
SFO - STL,56122311579,S-MSY-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/56122311579,https://www.airlines-manager.com/aircraft/show/98075264,18:00,2:44,320,"557,439$","503,685$","$1,574.02","$57,673.85"
SFO - STL,56131084875,S-MSY-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/56131084875,https://www.airlines-manager.com/aircraft/show/98075267,22:30,7:14,320,"557,439$","503,685$","$1,574.02","$57,673.85"
SFO - SYR,56084270389,S-GSO-SYR-2,737-900ER,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/56084270389,https://www.airlines-manager.com/aircraft/show/120056763,0:00,11:29,320,"714,764$","654,987$","$2,046.83","$57,038.06"
SFO - SYR,56112079155,S-GSO-SYR-3,737-900ER,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/56112079155,https://www.airlines-manager.com/aircraft/show/120056762,12:00,23:29,320,"714,764$","654,987$","$2,046.83","$57,038.06"
SFO - SYR,56112079156,S-GSO-SYR-4,737-900ER,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/56112079156,https://www.airlines-manager.com/aircraft/show/119550235,13:00,0:29,320,"714,764$","654,987$","$2,046.83","$57,038.06"
SFO - SYR,56125473969,S-GSO-SYR-5,A319-100,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/56125473969,https://www.airlines-manager.com/aircraft/show/120112473,18:30,5:59,198,"537,637$","493,892$","$2,494.40","$43,009.46"
SFO - SYR,56131084928,S-GSO-SYR-1,737-900ER,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/56131084928,https://www.airlines-manager.com/aircraft/show/120056764,23:00,10:29,320,"714,764$","654,987$","$2,046.83","$57,038.06"
SFO - TFU,56112079201,S-168B-3 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/56112079201,https://www.airlines-manager.com/aircraft/show/87566902,12:30,14:59,1046,"5,238,347$","4,830,688$","$4,618.25","$1,945,243.49"
SFO - TFU,56115475702,S-168A-3 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/56115475702,https://www.airlines-manager.com/aircraft/show/86483501,14:30,16:59,1046,"5,238,347$","4,830,688$","$4,618.25","$1,945,243.49"
SFO - TPA,56084270546,S-FLL-TPA-1,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/56084270546,https://www.airlines-manager.com/aircraft/show/97955544,1:00,12:14,320,"704,621$","638,570$","$1,995.53","$56,845.99"
SFO - TPA,56093103182,S-FLL-TPA-3,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/56093103182,https://www.airlines-manager.com/aircraft/show/97955542,5:00,16:14,320,"704,621$","638,570$","$1,995.53","$56,845.99"
SFO - TPA,56099991666,S-FLL-TPA-5,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/56099991666,https://www.airlines-manager.com/aircraft/show/97955540,8:00,19:14,320,"704,621$","638,570$","$1,995.53","$56,845.99"
SFO - TPA,56112079243,S-FLL-TPA-2,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/56112079243,https://www.airlines-manager.com/aircraft/show/97955543,13:00,0:14,320,"704,621$","638,570$","$1,995.53","$56,845.99"
SFO - TPA,56122311472,S-FLL-TPA-4,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/56122311472,https://www.airlines-manager.com/aircraft/show/97955541,17:00,4:14,320,"704,621$","638,570$","$1,995.53","$56,845.99"
SFO - TPA,56125474141,S-FLL-TPA-6 B,A319-100,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/56125474141,https://www.airlines-manager.com/aircraft/show/97900729,20:00,7:29,198,"531,620$","483,764$","$2,443.25","$42,127.49"
SFO - TPE,56125474139,S-168B-5 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/56125474139,https://www.airlines-manager.com/aircraft/show/87933799,20:00,21:14,1046,"4,782,404$","4,432,378$","$4,237.46","$3,593,820.00"
SFO - TPE,56131084826,S-168A-5 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/56131084826,https://www.airlines-manager.com/aircraft/show/86808589,22:00,23:14,1032,"4,737,574$","4,390,353$","$4,254.22","$3,559,745.68"
SFO - TUL,56093103165,S-TUL-DSM-2,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/56093103165,https://www.airlines-manager.com/aircraft/show/108410857,4:45,12:29,320,"493,680$","448,182$","$1,400.57","$57,954.57"
SFO - TUL,56099991615,S-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/56099991615,https://www.airlines-manager.com/aircraft/show/108466264,7:00,14:44,112,"232,916$","205,908$","$1,838.46","$26,626.03"
SFO - TUL,56115475743,S-TUL-DSM-1,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/56115475743,https://www.airlines-manager.com/aircraft/show/108410856,15:00,22:44,320,"493,680$","448,182$","$1,400.57","$57,954.57"
SFO - TUL,56118925484,S-TUL-DSM-4,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/56118925484,https://www.airlines-manager.com/aircraft/show/108410859,15:45,23:29,320,"493,680$","448,182$","$1,400.57","$57,954.57"
SFO - TUL,56128543819,S-TUL-DSM-3,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/56128543819,https://www.airlines-manager.com/aircraft/show/108410858,20:45,4:29,320,"493,680$","448,182$","$1,400.57","$57,954.57"
SFO - TUS,56099991670,S-OKC-FSD-1,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/56099991670,https://www.airlines-manager.com/aircraft/show/107160378,8:00,12:59,320,"319,228$","284,067$",$887.71,"$57,003.41"
SFO - TUS,56103538656,S-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/56103538656,https://www.airlines-manager.com/aircraft/show/107132310,9:30,14:29,112,"152,035$","132,268$","$1,180.96","$26,542.07"
SFO - TUS,56107731534,S-OKC-FSD-4,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/56107731534,https://www.airlines-manager.com/aircraft/show/107160381,10:30,15:29,320,"319,228$","284,067$",$887.71,"$57,003.41"
SFO - TUS,56118925527,S-OKC-FSD-3,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/56118925527,https://www.airlines-manager.com/aircraft/show/107160380,16:00,20:59,320,"319,228$","284,067$",$887.71,"$57,003.41"
SFO - TUS,56133285046,S-OKC-FSD-2,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/56133285046,https://www.airlines-manager.com/aircraft/show/107160379,23:30,4:29,320,"319,228$","284,067$",$887.71,"$57,003.41"
SFO - TYS,56096590124,S-TYS-MSN-2,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/56096590124,https://www.airlines-manager.com/aircraft/show/117782564,5:45,15:59,320,"642,888$","588,205$","$1,838.14","$57,479.32"
SFO - TYS,56099991637,S-TYS-MSN-1,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/56099991637,https://www.airlines-manager.com/aircraft/show/117782565,7:30,17:44,320,"642,888$","588,205$","$1,838.14","$57,479.32"
SFO - TYS,56118925555,S-TYS-MSN-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/56118925555,https://www.airlines-manager.com/aircraft/show/117782582,16:00,2:14,198,"483,910$","444,071$","$2,242.78","$43,394.56"
SFO - TYS,56125474075,S-TYS-MSN-3,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/56125474075,https://www.airlines-manager.com/aircraft/show/117782563,19:30,5:44,320,"642,888$","588,205$","$1,838.14","$57,479.32"
SFO - TYS,56128543821,S-TYS-MSN-4,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/56128543821,https://www.airlines-manager.com/aircraft/show/117782562,20:45,6:59,320,"642,888$","588,205$","$1,838.14","$57,479.32"
SFO - YEG,56093103028,S-YEG-YYC-2,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/56093103028,https://www.airlines-manager.com/aircraft/show/117782560,3:30,9:59,320,"420,949$","378,331$","$1,182.28","$58,354.40"
SFO - YEG,56103538567,S-YEG-YYC-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/56103538567,https://www.airlines-manager.com/aircraft/show/117782581,8:15,14:59,198,"317,291$","287,019$","$1,449.59","$42,626.58"
SFO - YEG,56112079268,S-YEG-YYC-1,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/56112079268,https://www.airlines-manager.com/aircraft/show/117782561,13:00,19:29,320,"420,949$","378,331$","$1,182.28","$58,354.40"
SFO - YEG,56115475745,S-YEG-YYC-4,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/56115475745,https://www.airlines-manager.com/aircraft/show/116932364,15:00,21:29,320,"420,949$","378,331$","$1,182.28","$58,354.40"
SFO - YEG,56128543979,S-YEG-YYC-3,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/56128543979,https://www.airlines-manager.com/aircraft/show/117782559,21:30,3:59,320,"420,949$","378,331$","$1,182.28","$58,354.40"
SFO - YOW,56084270435,S-YOW-CUN-3,757-300,https://www.airlines-manager.com/network/showline/50555301,https://www.airlines-manager.com/network/showflight/56084270435,https://www.airlines-manager.com/aircraft/show/120056766,0:15,11:29,400,"934,986$","864,487$","$2,161.22","$76,957.30"
SFO - YOW,56084270436,S-YOW-CUN-4,757-300,https://www.airlines-manager.com/network/showline/50555301,https://www.airlines-manager.com/network/showflight/56084270436,https://www.airlines-manager.com/aircraft/show/120056765,1:15,12:29,400,"934,986$","864,487$","$2,161.22","$76,957.30"
SFO - YOW,56112079234,S-YOW-CUN-1,757-300,https://www.airlines-manager.com/network/showline/50555301,https://www.airlines-manager.com/network/showflight/56112079234,https://www.airlines-manager.com/aircraft/show/120056768,13:00,0:14,400,"934,986$","864,487$","$2,161.22","$76,957.30"
SFO - YOW,56115475591,S-YOW-CUN-2,757-300,https://www.airlines-manager.com/network/showline/50555301,https://www.airlines-manager.com/network/showflight/56115475591,https://www.airlines-manager.com/aircraft/show/120056767,14:00,1:14,400,"934,986$","864,487$","$2,161.22","$76,957.30"
SFO - YUL,56084270500,S-YYZ-YUL-1,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/56084270500,https://www.airlines-manager.com/aircraft/show/115413609,0:45,12:29,400,"926,903$","850,879$","$2,127.20","$72,518.10"
SFO - YUL,56096590142,S-YYZ-YUL-4,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/56096590142,https://www.airlines-manager.com/aircraft/show/115413612,6:00,17:44,400,"926,903$","850,879$","$2,127.20","$72,518.10"
SFO - YUL,56115475589,S-YYZ-YUL-2,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/56115475589,https://www.airlines-manager.com/aircraft/show/115413610,14:00,1:44,400,"926,903$","850,879$","$2,127.20","$72,518.10"
SFO - YUL,56118925593,S-YYZ-YUL-3,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/56118925593,https://www.airlines-manager.com/aircraft/show/115413611,16:45,4:29,400,"926,903$","850,879$","$2,127.20","$72,518.10"
SFO - YUL,56125473978,S-YYZ-YUL- 5,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/56125473978,https://www.airlines-manager.com/aircraft/show/91126653,18:45,6:29,400,"926,903$","850,879$","$2,127.20","$72,518.10"
SFO - YVR,56084270503,S-MSY-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/56084270503,https://www.airlines-manager.com/aircraft/show/98075266,0:45,5:59,320,"331,374$","290,411$",$907.53,"$55,492.55"
SFO - YVR,56084270504,S-MSY-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/56084270504,https://www.airlines-manager.com/aircraft/show/98075264,2:45,7:59,320,"331,374$","290,411$",$907.53,"$55,492.55"
SFO - YVR,56099991619,S-MSY-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/56099991619,https://www.airlines-manager.com/aircraft/show/98075267,7:15,12:29,320,"331,374$","290,411$",$907.53,"$55,492.55"
SFO - YVR,56118925521,S-MSY-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/56118925521,https://www.airlines-manager.com/aircraft/show/98075265,16:00,21:14,320,"331,374$","290,411$",$907.53,"$55,492.55"
SFO - YVR,56122311578,S-MSY-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/56122311578,https://www.airlines-manager.com/aircraft/show/98075263,18:00,23:14,320,"331,374$","290,411$",$907.53,"$55,492.55"
SFO - YVR,56131084808,S-MSY-STL-6,ERJ-175,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/56131084808,https://www.airlines-manager.com/aircraft/show/103534666,21:45,2:59,112,"156,970$","134,156$","$1,197.82","$25,634.90"
SFO - YYC,56093103089,S-YEG-YYC-3,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/56093103089,https://www.airlines-manager.com/aircraft/show/117782559,4:00,9:59,320,"386,674$","342,885$","$1,071.52","$57,306.69"
SFO - YYC,56112079267,S-YEG-YYC-2,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/56112079267,https://www.airlines-manager.com/aircraft/show/117782560,13:00,18:59,320,"386,674$","342,885$","$1,071.52","$57,306.69"
SFO - YYC,56115475774,S-YEG-YYC-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/56115475774,https://www.airlines-manager.com/aircraft/show/117782581,15:00,20:59,198,"290,770$","259,950$","$1,312.88","$43,445.68"
SFO - YYC,56125474074,S-YEG-YYC-1,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/56125474074,https://www.airlines-manager.com/aircraft/show/117782561,19:30,1:29,320,"386,674$","342,885$","$1,071.52","$57,306.69"
SFO - YYC,56128543978,S-YEG-YYC-4,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/56128543978,https://www.airlines-manager.com/aircraft/show/116932364,21:30,3:29,320,"386,674$","342,885$","$1,071.52","$57,306.69"
SFO - YYZ,56084270640,S-YYZ-YUL-2,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/56084270640,https://www.airlines-manager.com/aircraft/show/115413610,1:45,12:29,400,"886,073$","807,953$","$2,019.88","$75,275.12"
SFO - YYZ,56096590141,S-YYZ-YUL-3,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/56096590141,https://www.airlines-manager.com/aircraft/show/115413611,6:00,16:44,400,"886,073$","807,953$","$2,019.88","$75,275.12"
SFO - YYZ,56099991663,S-YYZ-YUL- 5,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/56099991663,https://www.airlines-manager.com/aircraft/show/91126653,8:00,18:44,400,"886,073$","807,953$","$2,019.88","$75,275.12"
SFO - YYZ,56115475588,S-YYZ-YUL-1,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/56115475588,https://www.airlines-manager.com/aircraft/show/115413609,14:00,0:44,400,"886,073$","807,953$","$2,019.88","$75,275.12"
SFO - YYZ,56122311549,S-YYZ-YUL-4,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/56122311549,https://www.airlines-manager.com/aircraft/show/115413612,17:45,4:29,400,"886,073$","807,953$","$2,019.88","$75,275.12"
ORD - CUN,56196261310,O-LAS-PHX-1,737-900ER,https://www.airlines-manager.com/network/showline/50984856,https://www.airlines-manager.com/network/showflight/56196261310,https://www.airlines-manager.com/aircraft/show/121383380,2:45,10:29,320,"494,858$","431,882$","$1,349.63","$55,846.81"
ORD - CUN,56210122540,O-LAS-PHX-6 B,A319-100,https://www.airlines-manager.com/network/showline/50984856,https://www.airlines-manager.com/network/showflight/56210122540,https://www.airlines-manager.com/aircraft/show/121383409,6:45,14:29,198,"367,693$","323,393$","$1,633.30","$41,818.06"
ORD - CUN,56217593418,O-LAS-PHX-3,737-900ER,https://www.airlines-manager.com/network/showline/50984856,https://www.airlines-manager.com/network/showflight/56217593418,https://www.airlines-manager.com/aircraft/show/121383378,11:00,18:44,320,"494,858$","431,882$","$1,349.63","$55,846.81"
ORD - CUN,56221859546,O-LAS-PHX-5,737-900ER,https://www.airlines-manager.com/network/showline/50984856,https://www.airlines-manager.com/network/showflight/56221859546,https://www.airlines-manager.com/aircraft/show/121383376,13:00,20:44,320,"494,858$","431,882$","$1,349.63","$55,846.81"
ORD - CUN,56233930518,O-LAS-PHX-2,737-900ER,https://www.airlines-manager.com/network/showline/50984856,https://www.airlines-manager.com/network/showflight/56233930518,https://www.airlines-manager.com/aircraft/show/121383379,18:45,2:29,320,"494,858$","431,882$","$1,349.63","$55,846.81"
ORD - CUN,56239770909,O-LAS-PHX-4,737-900ER,https://www.airlines-manager.com/network/showline/50984856,https://www.airlines-manager.com/network/showflight/56239770909,https://www.airlines-manager.com/aircraft/show/121383377,20:45,4:29,291,"455,403$","393,841$","$1,353.41","$50,927.72"
ORD - DEN,56213637235,O-YVR-GDL-1,757-300,https://www.airlines-manager.com/network/showline/50984812,https://www.airlines-manager.com/network/showflight/56213637235,https://www.airlines-manager.com/aircraft/show/121383385,9:30,14:59,400,"453,524$","375,130$",$937.83,"$68,412.77"
ORD - DEN,56217593376,O-YVR-GDL-4,757-300,https://www.airlines-manager.com/network/showline/50984812,https://www.airlines-manager.com/network/showflight/56217593376,https://www.airlines-manager.com/aircraft/show/121383382,11:00,16:29,400,"453,524$","375,130$",$937.83,"$68,412.77"
ORD - DEN,56221859509,O-YVR-GDL-5,757-300,https://www.airlines-manager.com/network/showline/50984812,https://www.airlines-manager.com/network/showflight/56221859509,https://www.airlines-manager.com/aircraft/show/121383381,13:00,18:29,400,"453,524$","375,130$",$937.83,"$68,412.77"
ORD - DEN,56237075974,O-YVR-GDL-2,757-300,https://www.airlines-manager.com/network/showline/50984812,https://www.airlines-manager.com/network/showflight/56237075974,https://www.airlines-manager.com/aircraft/show/121383384,19:45,1:14,400,"453,524$","375,130$",$937.83,"$68,412.77"
ORD - DEN,56239771004,O-YVR-GDL-3,757-300,https://www.airlines-manager.com/network/showline/50984812,https://www.airlines-manager.com/network/showflight/56239771004,https://www.airlines-manager.com/aircraft/show/121383383,21:45,3:14,400,"453,524$","375,130$",$937.83,"$68,412.77"
ORD - GDL,56196261142,O-YVR-GDL-4,757-300,https://www.airlines-manager.com/network/showline/50984857,https://www.airlines-manager.com/network/showflight/56196261142,https://www.airlines-manager.com/aircraft/show/121383382,1:15,9:59,400,"718,146$","644,547$","$1,611.37","$73,803.09"
ORD - GDL,56196261143,O-YVR-GDL-5,757-300,https://www.airlines-manager.com/network/showline/50984857,https://www.airlines-manager.com/network/showflight/56196261143,https://www.airlines-manager.com/aircraft/show/121383381,3:15,11:59,400,"718,146$","644,547$","$1,611.37","$73,803.09"
ORD - GDL,56217593377,O-YVR-GDL-2,757-300,https://www.airlines-manager.com/network/showline/50984857,https://www.airlines-manager.com/network/showflight/56217593377,https://www.airlines-manager.com/aircraft/show/121383384,11:00,19:44,400,"718,146$","644,547$","$1,611.37","$73,803.09"
ORD - GDL,56221859510,O-YVR-GDL-3,757-300,https://www.airlines-manager.com/network/showline/50984857,https://www.airlines-manager.com/network/showflight/56221859510,https://www.airlines-manager.com/aircraft/show/121383383,13:00,21:44,400,"718,146$","644,547$","$1,611.37","$73,803.09"
ORD - GDL,56243602051,O-YVR-GDL-1,757-300,https://www.airlines-manager.com/network/showline/50984857,https://www.airlines-manager.com/network/showflight/56243602051,https://www.airlines-manager.com/aircraft/show/121383385,23:45,8:29,327,"606,178$","536,683$","$1,641.23","$61,452.25"
ORD - LAS,56196261292,O-LAS-PHX-2,737-900ER,https://www.airlines-manager.com/network/showline/50984816,https://www.airlines-manager.com/network/showflight/56196261292,https://www.airlines-manager.com/aircraft/show/121383379,2:30,10:29,320,"510,022$","430,593$","$1,345.60","$53,936.49"
ORD - LAS,56203580447,O-LAS-PHX-4,737-900ER,https://www.airlines-manager.com/network/showline/50984816,https://www.airlines-manager.com/network/showflight/56203580447,https://www.airlines-manager.com/aircraft/show/121383377,4:30,12:29,320,"510,022$","430,593$","$1,345.60","$53,936.49"
ORD - LAS,56217593420,O-LAS-PHX-1,737-900ER,https://www.airlines-manager.com/network/showline/50984816,https://www.airlines-manager.com/network/showflight/56217593420,https://www.airlines-manager.com/aircraft/show/121383380,11:00,18:59,320,"510,022$","430,593$","$1,345.60","$53,936.49"
ORD - LAS,56226389543,O-LAS-PHX-6 B,A319-100,https://www.airlines-manager.com/network/showline/50984816,https://www.airlines-manager.com/network/showflight/56226389543,https://www.airlines-manager.com/aircraft/show/121383409,15:00,22:59,198,"384,665$","329,295$","$1,663.11","$41,247.81"
ORD - LAS,56233930517,O-LAS-PHX-3,737-900ER,https://www.airlines-manager.com/network/showline/50984816,https://www.airlines-manager.com/network/showflight/56233930517,https://www.airlines-manager.com/aircraft/show/121383378,18:45,2:44,320,"510,022$","430,593$","$1,345.60","$53,936.49"
ORD - LAS,56239770908,O-LAS-PHX-5,737-900ER,https://www.airlines-manager.com/network/showline/50984816,https://www.airlines-manager.com/network/showflight/56239770908,https://www.airlines-manager.com/aircraft/show/121383376,20:45,4:44,320,"510,022$","430,593$","$1,345.60","$53,936.49"
ORD - LAX,56196261181,O-LAX-SEA-2,757-300,https://www.airlines-manager.com/network/showline/50984815,https://www.airlines-manager.com/network/showflight/56196261181,https://www.airlines-manager.com/aircraft/show/121383389,1:30,10:14,400,"734,364$","641,084$","$1,602.71","$73,406.56"
ORD - LAX,56203580317,O-LAX-SEA-4,757-300,https://www.airlines-manager.com/network/showline/50984815,https://www.airlines-manager.com/network/showflight/56203580317,https://www.airlines-manager.com/aircraft/show/121383387,3:30,12:14,400,"734,364$","641,084$","$1,602.71","$73,406.56"
ORD - LAX,56226389502,O-LAX-SEA-1,757-300,https://www.airlines-manager.com/network/showline/50984815,https://www.airlines-manager.com/network/showflight/56226389502,https://www.airlines-manager.com/aircraft/show/121383390,15:00,23:44,400,"734,364$","641,084$","$1,602.71","$73,406.56"
ORD - LAX,56230405933,O-LAX-SEA-3,757-300,https://www.airlines-manager.com/network/showline/50984815,https://www.airlines-manager.com/network/showflight/56230405933,https://www.airlines-manager.com/aircraft/show/121383388,17:00,1:44,400,"734,364$","641,084$","$1,602.71","$73,406.56"
ORD - LAX,56233930542,O-LAX-SEA-5,757-300,https://www.airlines-manager.com/network/showline/50984815,https://www.airlines-manager.com/network/showflight/56233930542,https://www.airlines-manager.com/aircraft/show/121383386,19:00,3:44,400,"734,364$","641,084$","$1,602.71","$73,406.56"
ORD - MCO,56213637141,O-LAX-SEA-1,757-300,https://www.airlines-manager.com/network/showline/50984818,https://www.airlines-manager.com/network/showflight/56213637141,https://www.airlines-manager.com/aircraft/show/121383390,8:15,14:14,400,"486,278$","419,311$","$1,048.28","$70,079.83"
ORD - MCO,56217593378,O-LAX-SEA-3,757-300,https://www.airlines-manager.com/network/showline/50984818,https://www.airlines-manager.com/network/showflight/56217593378,https://www.airlines-manager.com/aircraft/show/121383388,11:00,16:59,400,"486,278$","419,311$","$1,048.28","$70,079.83"
ORD - MCO,56221859511,O-LAX-SEA-5,757-300,https://www.airlines-manager.com/network/showline/50984818,https://www.airlines-manager.com/network/showflight/56221859511,https://www.airlines-manager.com/aircraft/show/121383386,13:00,18:59,400,"486,278$","419,311$","$1,048.28","$70,079.83"
ORD - MCO,56237075948,O-LAX-SEA-2,757-300,https://www.airlines-manager.com/network/showline/50984818,https://www.airlines-manager.com/network/showflight/56237075948,https://www.airlines-manager.com/aircraft/show/121383389,19:30,1:29,400,"486,278$","419,311$","$1,048.28","$70,079.83"
ORD - MCO,56239770980,O-LAX-SEA-4,757-300,https://www.airlines-manager.com/network/showline/50984818,https://www.airlines-manager.com/network/showflight/56239770980,https://www.airlines-manager.com/aircraft/show/121383387,21:30,3:29,364,"460,388$","394,361$","$1,083.41","$65,909.92"
ORD - MEX,56196261324,O-MEX E,787-10,https://www.airlines-manager.com/network/showline/50926864,https://www.airlines-manager.com/network/showflight/56196261324,https://www.airlines-manager.com/aircraft/show/121207125,3:00,10:59,648,"1,066,967$","966,855$","$1,492.06","$121,109.19"
ORD - MEX,56217593370,O-MEX E,787-10,https://www.airlines-manager.com/network/showline/50926864,https://www.airlines-manager.com/network/showflight/56217593370,https://www.airlines-manager.com/aircraft/show/121207125,11:00,18:59,648,"1,066,967$","966,855$","$1,492.06","$121,109.19"
ORD - MEX,56233930539,O-MEX E,787-10,https://www.airlines-manager.com/network/showline/50926864,https://www.airlines-manager.com/network/showflight/56233930539,https://www.airlines-manager.com/aircraft/show/121207125,19:00,2:59,648,"1,066,967$","966,855$","$1,492.06","$121,109.19"
ORD - PDX,56196261227,O-PDX-SAN-2,737-900ER,https://www.airlines-manager.com/network/showline/50984820,https://www.airlines-manager.com/network/showflight/56196261227,https://www.airlines-manager.com/aircraft/show/121383374,1:45,10:29,320,"557,358$","489,633$","$1,530.10","$56,064.85"
ORD - PDX,56203580355,O-PDX-SAN-4,737-900ER,https://www.airlines-manager.com/network/showline/50984820,https://www.airlines-manager.com/network/showflight/56203580355,https://www.airlines-manager.com/aircraft/show/121383372,3:45,12:29,320,"557,358$","489,633$","$1,530.10","$56,064.85"
ORD - PDX,56226389387,O-PDX-SAN-1,737-900ER,https://www.airlines-manager.com/network/showline/50984820,https://www.airlines-manager.com/network/showflight/56226389387,https://www.airlines-manager.com/aircraft/show/121383375,14:00,22:44,320,"557,358$","489,633$","$1,530.10","$56,064.85"
ORD - PDX,56230405869,O-PDX-SAN-6 B,A319-100,https://www.airlines-manager.com/network/showline/50984820,https://www.airlines-manager.com/network/showflight/56230405869,https://www.airlines-manager.com/aircraft/show/121383410,16:00,0:44,198,"420,196$","372,271$","$1,880.16","$42,626.45"
ORD - PDX,56230405870,O-PDX-SAN-3,737-900ER,https://www.airlines-manager.com/network/showline/50984820,https://www.airlines-manager.com/network/showflight/56230405870,https://www.airlines-manager.com/aircraft/show/121383373,17:00,1:44,320,"557,358$","489,633$","$1,530.10","$56,064.85"
ORD - PDX,56233930554,O-PDX-SAN-5,737-900ER,https://www.airlines-manager.com/network/showline/50984820,https://www.airlines-manager.com/network/showflight/56233930554,https://www.airlines-manager.com/aircraft/show/121383371,19:00,3:44,320,"557,358$","489,633$","$1,530.10","$56,064.85"
ORD - PHX,56196261309,O-LAS-PHX-3,737-900ER,https://www.airlines-manager.com/network/showline/50984819,https://www.airlines-manager.com/network/showflight/56196261309,https://www.airlines-manager.com/aircraft/show/121383378,2:45,10:29,320,"492,818$","420,732$","$1,314.79","$54,405.00"
ORD - PHX,56203580464,O-LAS-PHX-5,737-900ER,https://www.airlines-manager.com/network/showline/50984819,https://www.airlines-manager.com/network/showflight/56203580464,https://www.airlines-manager.com/aircraft/show/121383376,4:45,12:29,320,"492,818$","420,732$","$1,314.79","$54,405.00"
ORD - PHX,56217593419,O-LAS-PHX-2,737-900ER,https://www.airlines-manager.com/network/showline/50984819,https://www.airlines-manager.com/network/showflight/56217593419,https://www.airlines-manager.com/aircraft/show/121383379,11:00,18:44,320,"492,818$","420,732$","$1,314.79","$54,405.00"
ORD - PHX,56221859547,O-LAS-PHX-4,737-900ER,https://www.airlines-manager.com/network/showline/50984819,https://www.airlines-manager.com/network/showflight/56221859547,https://www.airlines-manager.com/aircraft/show/121383377,13:00,20:44,320,"492,818$","420,732$","$1,314.79","$54,405.00"
ORD - PHX,56233930555,O-LAS-PHX-1,737-900ER,https://www.airlines-manager.com/network/showline/50984819,https://www.airlines-manager.com/network/showflight/56233930555,https://www.airlines-manager.com/aircraft/show/121383380,19:00,2:44,320,"492,818$","420,732$","$1,314.79","$54,405.00"
ORD - PHX,56241954459,O-LAS-PHX-6 B,A319-100,https://www.airlines-manager.com/network/showline/50984819,https://www.airlines-manager.com/network/showflight/56241954459,https://www.airlines-manager.com/aircraft/show/121383409,23:00,6:44,198,"372,009$","321,652$","$1,624.51","$41,592.93"
ORD - SAN,56196261090,O-PDX-SAN-6 B,A319-100,https://www.airlines-manager.com/network/showline/50984821,https://www.airlines-manager.com/network/showflight/56196261090,https://www.airlines-manager.com/aircraft/show/121383410,0:45,9:29,198,"419,974$","372,484$","$1,881.23","$42,650.84"
ORD - SAN,56196261091,O-PDX-SAN-3,737-900ER,https://www.airlines-manager.com/network/showline/50984821,https://www.airlines-manager.com/network/showflight/56196261091,https://www.airlines-manager.com/aircraft/show/121383373,1:45,10:29,320,"557,448$","490,339$","$1,532.31","$56,145.69"
ORD - SAN,56203580354,O-PDX-SAN-5,737-900ER,https://www.airlines-manager.com/network/showline/50984821,https://www.airlines-manager.com/network/showflight/56203580354,https://www.airlines-manager.com/aircraft/show/121383371,3:45,12:29,320,"557,448$","490,339$","$1,532.31","$56,145.69"
ORD - SAN,56217593417,O-PDX-SAN-2,737-900ER,https://www.airlines-manager.com/network/showline/50984821,https://www.airlines-manager.com/network/showflight/56217593417,https://www.airlines-manager.com/aircraft/show/121383374,11:00,19:44,320,"557,448$","490,339$","$1,532.31","$56,145.69"
ORD - SAN,56221859545,O-PDX-SAN-4,737-900ER,https://www.airlines-manager.com/network/showline/50984821,https://www.airlines-manager.com/network/showflight/56221859545,https://www.airlines-manager.com/aircraft/show/121383372,13:00,21:44,320,"557,448$","490,339$","$1,532.31","$56,145.69"
ORD - SAN,56241954408,O-PDX-SAN-1,737-900ER,https://www.airlines-manager.com/network/showline/50984821,https://www.airlines-manager.com/network/showflight/56241954408,https://www.airlines-manager.com/aircraft/show/121383375,22:45,7:29,320,"557,448$","490,339$","$1,532.31","$56,145.69"
ORD - SEA,56196261213,O-LAX-SEA-3,757-300,https://www.airlines-manager.com/network/showline/50984822,https://www.airlines-manager.com/network/showflight/56196261213,https://www.airlines-manager.com/aircraft/show/121383388,1:45,10:14,400,"718,707$","637,475$","$1,593.69","$75,144.40"
ORD - SEA,56203580349,O-LAX-SEA-5,757-300,https://www.airlines-manager.com/network/showline/50984822,https://www.airlines-manager.com/network/showflight/56203580349,https://www.airlines-manager.com/aircraft/show/121383386,3:45,12:14,400,"718,707$","637,475$","$1,593.69","$75,144.40"
ORD - SEA,56217593379,O-LAX-SEA-2,757-300,https://www.airlines-manager.com/network/showline/50984822,https://www.airlines-manager.com/network/showflight/56217593379,https://www.airlines-manager.com/aircraft/show/121383389,11:00,19:29,400,"718,707$","637,475$","$1,593.69","$75,144.40"
ORD - SEA,56221859512,O-LAX-SEA-4,757-300,https://www.airlines-manager.com/network/showline/50984822,https://www.airlines-manager.com/network/showflight/56221859512,https://www.airlines-manager.com/aircraft/show/121383387,13:00,21:29,400,"718,707$","637,475$","$1,593.69","$75,144.40"
ORD - SEA,56243602052,O-LAX-SEA-1,757-300,https://www.airlines-manager.com/network/showline/50984822,https://www.airlines-manager.com/network/showflight/56243602052,https://www.airlines-manager.com/aircraft/show/121383390,23:45,8:14,400,"718,707$","637,475$","$1,593.69","$75,144.40"
ORD - TPA,56210122586,O-PDX-SAN-1,737-900ER,https://www.airlines-manager.com/network/showline/50984824,https://www.airlines-manager.com/network/showflight/56210122586,https://www.airlines-manager.com/aircraft/show/121383375,7:30,13:29,320,"375,820$","319,842$",$999.51,"$53,455.49"
ORD - TPA,56213637242,O-PDX-SAN-6 B,A319-100,https://www.airlines-manager.com/network/showline/50984824,https://www.airlines-manager.com/network/showflight/56213637242,https://www.airlines-manager.com/aircraft/show/121383410,9:30,15:29,198,"284,901$","245,962$","$1,242.23","$41,107.86"
ORD - TPA,56217593416,O-PDX-SAN-3,737-900ER,https://www.airlines-manager.com/network/showline/50984824,https://www.airlines-manager.com/network/showflight/56217593416,https://www.airlines-manager.com/aircraft/show/121383373,11:00,16:59,320,"375,820$","319,842$",$999.51,"$53,455.49"
ORD - TPA,56221859544,O-PDX-SAN-5,737-900ER,https://www.airlines-manager.com/network/showline/50984824,https://www.airlines-manager.com/network/showflight/56221859544,https://www.airlines-manager.com/aircraft/show/121383371,13:00,18:59,320,"375,820$","319,842$",$999.51,"$53,455.49"
ORD - TPA,56237075982,O-PDX-SAN-2,737-900ER,https://www.airlines-manager.com/network/showline/50984824,https://www.airlines-manager.com/network/showflight/56237075982,https://www.airlines-manager.com/aircraft/show/121383374,19:45,1:44,320,"375,820$","319,842$",$999.51,"$53,455.49"
ORD - TPA,56239771013,O-PDX-SAN-4,737-900ER,https://www.airlines-manager.com/network/showline/50984824,https://www.airlines-manager.com/network/showflight/56239771013,https://www.airlines-manager.com/aircraft/show/121383372,21:45,3:44,269,"339,006$","284,419$","$1,057.32","$47,535.21"
ORD - YVR,56196261144,O-YVR-GDL-2,757-300,https://www.airlines-manager.com/network/showline/50984850,https://www.airlines-manager.com/network/showflight/56196261144,https://www.airlines-manager.com/aircraft/show/121383384,1:15,9:59,400,"728,709$","651,879$","$1,629.70","$74,642.63"
ORD - YVR,56196261145,O-YVR-GDL-3,757-300,https://www.airlines-manager.com/network/showline/50984850,https://www.airlines-manager.com/network/showflight/56196261145,https://www.airlines-manager.com/aircraft/show/121383383,3:15,11:59,400,"728,709$","651,879$","$1,629.70","$74,642.63"
ORD - YVR,56226389501,O-YVR-GDL-1,757-300,https://www.airlines-manager.com/network/showline/50984850,https://www.airlines-manager.com/network/showflight/56226389501,https://www.airlines-manager.com/aircraft/show/121383385,15:00,23:44,400,"728,709$","651,879$","$1,629.70","$74,642.63"
ORD - YVR,56230405894,O-YVR-GDL-4,757-300,https://www.airlines-manager.com/network/showline/50984850,https://www.airlines-manager.com/network/showflight/56230405894,https://www.airlines-manager.com/aircraft/show/121383382,16:30,1:14,400,"728,709$","651,879$","$1,629.70","$74,642.63"
ORD - YVR,56233930485,O-YVR-GDL-5,757-300,https://www.airlines-manager.com/network/showline/50984850,https://www.airlines-manager.com/network/showflight/56233930485,https://www.airlines-manager.com/aircraft/show/121383381,18:30,3:14,400,"728,709$","651,879$","$1,629.70","$74,642.63"`;
