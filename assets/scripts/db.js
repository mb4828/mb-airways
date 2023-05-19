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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
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
		hubs: ['ewr', 'sfo', 'iah'],
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
		hubs: ['sfo', 'iah', 'mia', 'hnl'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
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
		hubs: ['ewr', 'iah', 'mia'],
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
		hubs: ['iah'],
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
		hubs: ['iah'],
		tz: 'Mexico/BajaSur'
	},
	{
		name: 'Luis Munoz Marin International Airport (SJU)',
		city: 'San Juan, Puerto Rico 🇵🇷, US Territories',
		pos: [18.439669035343876, -65.99915740046777],
		hubs: ['ewr', 'mia'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Sacramento International Airport (SMF)',
		city: 'Sacramento, USA - California 🇺🇸',
		pos: [38.69506863213448, -121.59003261580382],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'John Wayne Airport (SNA)',
		city: 'Santa Ana, USA - California 🇺🇸',
		pos: [33.67632399877975, -117.86749736129858],
		hubs: ['iah'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
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
EWR - ABQ,55704057931,E-ABQ-AUS-2,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/55704057931,https://www.airlines-manager.com/aircraft/show/90717078,0:45,9:59,310,"$575,728.00","$529,752.00","$1,708.88","$57,373.86"
EWR - ABQ,55704057932,E-ABQ-AUS-5,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/55704057932,https://www.airlines-manager.com/aircraft/show/95950199,2:45,11:59,310,"$575,728.00","$529,752.00","$1,708.88","$57,373.86"
EWR - ABQ,55721560570,E-ABQ-AUS-1,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/55721560570,https://www.airlines-manager.com/aircraft/show/90717079,10:00,19:14,310,"$575,728.00","$529,752.00","$1,708.88","$57,373.86"
EWR - ABQ,55735532940,E-ABQ-AUS-3,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/55735532940,https://www.airlines-manager.com/aircraft/show/90717077,16:45,1:59,310,"$575,728.00","$529,752.00","$1,708.88","$57,373.86"
EWR - ABQ,55735532941,E-ABQ-AUS-4,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/55735532941,https://www.airlines-manager.com/aircraft/show/90717076,17:45,2:59,310,"$575,728.00","$529,752.00","$1,708.88","$57,373.86"
EWR - ALB,55704057869,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/55704057869,https://www.airlines-manager.com/aircraft/show/119220543,0:15,2:59,310,"$97,112.00","$79,379.00",$256.06,"$29,041.10"
EWR - ALB,55708448895,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/55708448895,https://www.airlines-manager.com/aircraft/show/119220542,4:45,7:29,310,"$97,112.00","$79,379.00",$256.06,"$29,041.10"
EWR - ALB,55732031845,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/55732031845,https://www.airlines-manager.com/aircraft/show/119220545,16:00,18:44,310,"$97,112.00","$79,379.00",$256.06,"$29,041.10"
EWR - ALB,55741695614,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/55741695614,https://www.airlines-manager.com/aircraft/show/119220544,20:30,23:14,310,"$97,112.00","$79,379.00",$256.06,"$29,041.10"
EWR - AMS,55724951890,E-56B-4 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/55724951890,https://www.airlines-manager.com/aircraft/show/94521247,11:30,2:44,748,"$2,330,925.00","$2,086,099.00","$2,788.90","$136,943.04"
EWR - AMS,55728562281,E-56B-2 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/55728562281,https://www.airlines-manager.com/aircraft/show/90656556,13:15,4:29,748,"$2,330,925.00","$2,086,099.00","$2,788.90","$136,943.04"
EWR - AMS,55732031751,E-56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/55732031751,https://www.airlines-manager.com/aircraft/show/89124072,15:00,6:14,748,"$2,089,149.00","$1,905,958.00","$2,548.07","$125,117.59"
EWR - ANC,55721560515,E-STL-PIT-3,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/55721560515,https://www.airlines-manager.com/aircraft/show/115400546,10:00,0:59,338,"$1,007,349.00","$944,265.00","$2,793.68","$63,021.02"
EWR - ANC,55728562277,E-STL-PIT-2,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/55728562277,https://www.airlines-manager.com/aircraft/show/115400547,13:15,4:14,338,"$1,007,349.00","$944,265.00","$2,793.68","$63,021.02"
EWR - ANC,55738770058,E-STL-PIT-1,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/55738770058,https://www.airlines-manager.com/aircraft/show/115400548,18:45,9:44,338,"$1,007,349.00","$944,265.00","$2,793.68","$63,021.02"
EWR - ANC,55744388939,E-STL-PIT-4,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/55744388939,https://www.airlines-manager.com/aircraft/show/115400545,21:45,12:44,338,"$1,007,349.00","$944,265.00","$2,793.68","$63,021.02"
EWR - ARN,55704058341,E-56D-1 E,787-10,https://www.airlines-manager.com/network/showline/50072203,https://www.airlines-manager.com/network/showflight/55704058341,https://www.airlines-manager.com/aircraft/show/118644436,3:45,19:44,648,"$1,976,114.00","$1,844,631.00","$2,846.65","$115,409.66"
EWR - ARN,55724951981,E-56D-3 E,787-10,https://www.airlines-manager.com/network/showline/50072203,https://www.airlines-manager.com/network/showflight/55724951981,https://www.airlines-manager.com/aircraft/show/118644438,12:45,4:44,648,"$1,976,114.00","$1,844,631.00","$2,846.65","$115,409.66"
EWR - ARN,55738770060,E-56D-5 E,787-10,https://www.airlines-manager.com/network/showline/50072203,https://www.airlines-manager.com/network/showflight/55738770060,https://www.airlines-manager.com/aircraft/show/118644440,18:45,10:44,648,"$1,976,114.00","$1,844,631.00","$2,846.65","$115,409.66"
EWR - ATH,55704057823,E-84A-7 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/55704057823,https://www.airlines-manager.com/aircraft/show/94521249,0:00,19:59,852,"$3,250,987.00","$2,958,694.00","$3,472.65","$148,058.08"
EWR - ATH,55741695532,E-84A-4 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/55741695532,https://www.airlines-manager.com/aircraft/show/90656551,19:45,15:44,852,"$3,250,987.00","$2,958,694.00","$3,472.65","$148,058.08"
EWR - ATL,55721560525,E-DFW-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/55721560525,https://www.airlines-manager.com/aircraft/show/90489724,10:00,14:59,320,"$317,565.00","$256,248.00",$800.78,"$51,421.00"
EWR - ATL,55728562389,E-DFW-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/55728562389,https://www.airlines-manager.com/aircraft/show/90489726,14:15,19:14,320,"$317,565.00","$256,248.00",$800.78,"$51,421.00"
EWR - ATL,55735533016,E-DFW-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/55735533016,https://www.airlines-manager.com/aircraft/show/90489725,17:30,22:29,320,"$317,565.00","$256,248.00",$800.78,"$51,421.00"
EWR - ATL,55738770053,E-DFW-ATL-6 B,A319-100,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/55738770053,https://www.airlines-manager.com/aircraft/show/105222360,18:30,23:29,198,"$241,826.00","$199,756.00","$1,008.87","$40,084.82"
EWR - ATL,55741695513,E-DFW-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/55741695513,https://www.airlines-manager.com/aircraft/show/86238752,19:45,0:44,320,"$317,565.00","$256,248.00",$800.78,"$51,421.00"
EWR - ATL,55744388986,E-DFW-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/55744388986,https://www.airlines-manager.com/aircraft/show/86238753,22:15,3:14,320,"$317,565.00","$256,248.00",$800.78,"$51,421.00"
EWR - AUS,55704058186,E-ABQ-AUS-3,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/55704058186,https://www.airlines-manager.com/aircraft/show/90717077,2:00,9:59,310,"$501,297.00","$460,053.00","$1,484.04","$57,626.68"
EWR - AUS,55704058187,E-ABQ-AUS-4,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/55704058187,https://www.airlines-manager.com/aircraft/show/90717076,3:00,10:59,310,"$501,297.00","$460,053.00","$1,484.04","$57,626.68"
EWR - AUS,55721560569,E-ABQ-AUS-2,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/55721560569,https://www.airlines-manager.com/aircraft/show/90717078,10:00,17:59,310,"$501,297.00","$460,053.00","$1,484.04","$57,626.68"
EWR - AUS,55724951942,E-ABQ-AUS-5,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/55724951942,https://www.airlines-manager.com/aircraft/show/95950199,12:00,19:59,310,"$501,297.00","$460,053.00","$1,484.04","$57,626.68"
EWR - AUS,55738770128,E-ABQ-AUS-1,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/55738770128,https://www.airlines-manager.com/aircraft/show/90717079,19:15,3:14,310,"$501,297.00","$460,053.00","$1,484.04","$57,626.68"
EWR - BCN,55732031797,E-84A-5 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/55732031797,https://www.airlines-manager.com/aircraft/show/94521250,15:45,7:44,852,"$2,628,418.00","$2,386,121.00","$2,800.61","$149,288.07"
EWR - BCN,55741695571,E-84A-2 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/55741695571,https://www.airlines-manager.com/aircraft/show/94521252,20:00,11:59,852,"$2,628,418.00","$2,386,121.00","$2,800.61","$149,288.07"
EWR - BDA,55718008638,E-YEG-BFF-5 B,A319-100,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/55718008638,https://www.airlines-manager.com/aircraft/show/115493369,8:45,13:59,198,"$244,232.00","$222,459.00","$1,123.53","$42,508.09"
EWR - BDA,55721560710,E-YEG-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/55721560710,https://www.airlines-manager.com/aircraft/show/98936170,11:00,16:14,320,"$322,411.00","$291,621.00",$911.32,"$55,723.76"
EWR - BDA,55728562197,E-YEG-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/55728562197,https://www.airlines-manager.com/aircraft/show/98936171,13:00,18:14,320,"$322,411.00","$291,621.00",$911.32,"$55,723.76"
EWR - BDA,55744388870,E-YEG-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/55744388870,https://www.airlines-manager.com/aircraft/show/98936168,21:00,2:14,320,"$322,411.00","$291,621.00",$911.32,"$55,723.76"
EWR - BDA,55746468122,E-YEG-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/55746468122,https://www.airlines-manager.com/aircraft/show/98936169,22:30,3:44,253,"$259,970.00","$230,937.00",$912.79,"$44,128.09"
EWR - BDL,55704057974,E-COS-ICT-4,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/55704057974,https://www.airlines-manager.com/aircraft/show/108834811,1:00,3:29,310,"$89,797.00","$71,469.00",$230.55,"$28,779.46"
EWR - BDL,55718008683,E-COS-ICT-5,ERJ-175,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/55718008683,https://www.airlines-manager.com/aircraft/show/108466265,9:30,11:59,112,"$38,517.00","$27,319.00",$243.92,"$11,000.94"
EWR - BDL,55728562355,E-COS-ICT-3,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/55728562355,https://www.airlines-manager.com/aircraft/show/108834810,14:00,16:29,310,"$89,797.00","$71,469.00",$230.55,"$28,779.46"
EWR - BDL,55732031839,E-COS-ICT-2,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/55732031839,https://www.airlines-manager.com/aircraft/show/108834809,16:00,18:29,310,"$89,797.00","$71,469.00",$230.55,"$28,779.46"
EWR - BDL,55746468184,E-COS-ICT-1,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/55746468184,https://www.airlines-manager.com/aircraft/show/108834808,23:00,1:29,310,"$89,797.00","$71,469.00",$230.55,"$28,779.46"
EWR - BER,55711311616,E-84B-5  B2,777-300,https://www.airlines-manager.com/network/showline/49921899,https://www.airlines-manager.com/network/showflight/55711311616,https://www.airlines-manager.com/aircraft/show/117958699,5:45,22:14,852,"$2,719,031.00","$2,467,383.00","$2,895.99","$149,689.57"
EWR - BER,55735533051,E-84B-1  B2,777-300,https://www.airlines-manager.com/network/showline/49921899,https://www.airlines-manager.com/network/showflight/55735533051,https://www.airlines-manager.com/aircraft/show/117958695,17:45,10:14,852,"$2,719,031.00","$2,467,383.00","$2,895.99","$149,689.57"
EWR - BFF,55704058199,E-YEG-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/55704058199,https://www.airlines-manager.com/aircraft/show/98936168,2:15,10:14,320,"$507,802.00","$465,091.00","$1,453.41","$58,257.75"
EWR - BFF,55704058200,E-YEG-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/55704058200,https://www.airlines-manager.com/aircraft/show/98936169,3:45,11:44,320,"$507,802.00","$465,091.00","$1,453.41","$58,257.75"
EWR - BFF,55728562378,E-YEG-BFF-5 B,A319-100,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/55728562378,https://www.airlines-manager.com/aircraft/show/115493369,14:00,21:59,198,"$383,240.00","$352,330.00","$1,779.44","$44,133.19"
EWR - BFF,55735532902,E-YEG-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/55735532902,https://www.airlines-manager.com/aircraft/show/98936170,16:15,0:14,320,"$507,802.00","$465,091.00","$1,453.41","$58,257.75"
EWR - BFF,55738770015,E-YEG-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/55738770015,https://www.airlines-manager.com/aircraft/show/98936171,18:15,2:14,320,"$507,802.00","$465,091.00","$1,453.41","$58,257.75"
EWR - BHM,55704058207,E-RAP-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/55704058207,https://www.airlines-manager.com/aircraft/show/116042862,2:15,7:44,310,"$346,865.00","$318,072.00","$1,026.04","$58,007.05"
EWR - BHM,55718008617,E-RAP-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/55718008617,https://www.airlines-manager.com/aircraft/show/116042859,8:30,13:59,310,"$346,865.00","$318,072.00","$1,026.04","$58,007.05"
EWR - BHM,55728562366,E-RAP-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/55728562366,https://www.airlines-manager.com/aircraft/show/116042860,14:00,19:29,310,"$346,865.00","$318,072.00","$1,026.04","$58,007.05"
EWR - BHM,55732031771,E-RAP-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/55732031771,https://www.airlines-manager.com/aircraft/show/116042861,15:15,20:44,310,"$346,865.00","$318,072.00","$1,026.04","$58,007.05"
EWR - BIL,55721560548,E-BIL-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/55721560548,https://www.airlines-manager.com/aircraft/show/116047882,10:00,18:59,320,"$565,856.00","$519,899.00","$1,624.68","$57,873.73"
EWR - BIL,55724951927,E-BIL-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/55724951927,https://www.airlines-manager.com/aircraft/show/116047885,12:00,20:59,320,"$565,856.00","$519,899.00","$1,624.68","$57,873.73"
EWR - BIL,55744388903,E-BIL-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/55744388903,https://www.airlines-manager.com/aircraft/show/116047884,21:15,6:14,320,"$565,856.00","$519,899.00","$1,624.68","$57,873.73"
EWR - BIL,55746468156,E-BIL-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/55746468156,https://www.airlines-manager.com/aircraft/show/116047883,22:45,7:44,320,"$565,856.00","$519,899.00","$1,624.68","$57,873.73"
EWR - BNA,55704058317,E-BNA-JAX-3,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/55704058317,https://www.airlines-manager.com/aircraft/show/104610408,3:15,8:14,310,"$322,924.00","$293,584.00",$947.05,"$58,913.18"
EWR - BNA,55718008610,E-BNA-JAX-2,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/55718008610,https://www.airlines-manager.com/aircraft/show/104610409,8:30,13:29,310,"$322,924.00","$293,584.00",$947.05,"$58,913.18"
EWR - BNA,55728562248,E-BNA-JAX-1,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/55728562248,https://www.airlines-manager.com/aircraft/show/104610410,13:00,17:59,310,"$322,924.00","$293,584.00",$947.05,"$58,913.18"
EWR - BNA,55735532994,E-BNA-JAX-5,ERJ-175,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/55735532994,https://www.airlines-manager.com/aircraft/show/96421247,17:00,21:59,112,"$153,204.00","$134,298.00","$1,199.09","$26,949.43"
EWR - BNA,55744388904,E-BNA-JAX-4,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/55744388904,https://www.airlines-manager.com/aircraft/show/104610407,21:15,2:14,310,"$322,924.00","$293,584.00",$947.05,"$58,913.18"
EWR - BOI,55704058054,E-BOI-PBI-5 B,A319-100,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/55704058054,https://www.airlines-manager.com/aircraft/show/110582846,1:30,11:59,198,"$492,457.00","$454,215.00","$2,294.02","$43,327.34"
EWR - BOI,55721560607,E-BOI-PBI-1,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/55721560607,https://www.airlines-manager.com/aircraft/show/104418460,10:00,20:29,310,"$655,891.00","$608,204.00","$1,961.95","$58,016.28"
EWR - BOI,55732031736,E-BOI-PBI-4,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/55732031736,https://www.airlines-manager.com/aircraft/show/104418463,15:00,1:29,310,"$655,891.00","$608,204.00","$1,961.95","$58,016.28"
EWR - BOI,55735532925,E-BOI-PBI-3,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/55735532925,https://www.airlines-manager.com/aircraft/show/104418462,16:30,2:59,310,"$655,891.00","$608,204.00","$1,961.95","$58,016.28"
EWR - BOI,55746468226,E-BOI-PBI-2,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/55746468226,https://www.airlines-manager.com/aircraft/show/104418461,23:30,9:59,310,"$655,891.00","$608,204.00","$1,961.95","$58,016.28"
EWR - BOS,55704058299,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/55704058299,https://www.airlines-manager.com/aircraft/show/104034464,3:00,5:59,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,55721560634,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/55721560634,https://www.airlines-manager.com/aircraft/show/104034463,10:00,12:59,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,55724951986,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/55724951986,https://www.airlines-manager.com/aircraft/show/104034462,12:45,15:44,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,55728562298,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/55728562298,https://www.airlines-manager.com/aircraft/show/99316501,13:45,16:44,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,55735532987,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/55735532987,https://www.airlines-manager.com/aircraft/show/104034464,17:00,19:59,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,55741695564,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/55741695564,https://www.airlines-manager.com/aircraft/show/104034463,20:00,22:59,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,55746468167,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/55746468167,https://www.airlines-manager.com/aircraft/show/104034462,22:45,1:44,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,55747839778,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/55747839778,https://www.airlines-manager.com/aircraft/show/99316501,23:45,2:44,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BRU,55704058233,E-84B-1  B2,777-300,https://www.airlines-manager.com/network/showline/49921920,https://www.airlines-manager.com/network/showflight/55704058233,https://www.airlines-manager.com/aircraft/show/117958695,2:30,17:44,852,"$2,501,229.00","$2,275,215.00","$2,670.44","$149,357.66"
EWR - BRU,55728562406,E-84B-4  B2,777-300,https://www.airlines-manager.com/network/showline/49921920,https://www.airlines-manager.com/network/showflight/55728562406,https://www.airlines-manager.com/aircraft/show/117958698,14:30,5:44,852,"$2,501,229.00","$2,275,215.00","$2,670.44","$149,357.66"
EWR - BTV,55718008637,E-FCA-CID-1,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/55718008637,https://www.airlines-manager.com/aircraft/show/116042866,8:45,11:59,310,"$140,026.00","$120,811.00",$389.71,"$37,364.23"
EWR - BTV,55724951951,E-FCA-CID-4,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/55724951951,https://www.airlines-manager.com/aircraft/show/116042863,12:00,15:14,310,"$140,026.00","$120,811.00",$389.71,"$37,364.23"
EWR - BTV,55728562259,E-FCA-CID-3,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/55728562259,https://www.airlines-manager.com/aircraft/show/116042864,13:00,16:14,310,"$140,026.00","$120,811.00",$389.71,"$37,364.23"
EWR - BTV,55738770081,E-FCA-CID-2,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/55738770081,https://www.airlines-manager.com/aircraft/show/116042865,18:45,21:59,310,"$140,026.00","$120,811.00",$389.71,"$37,364.23"
EWR - BUF,55711311603,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/55711311603,https://www.airlines-manager.com/aircraft/show/106104450,5:30,8:44,112,"$70,781.00","$57,977.00",$517.65,"$17,931.03"
EWR - BUF,55721560712,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/55721560712,https://www.airlines-manager.com/aircraft/show/105731236,11:00,14:14,320,"$154,671.00","$130,701.00",$408.44,"$40,422.99"
EWR - BUF,55732031672,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/55732031672,https://www.airlines-manager.com/aircraft/show/88494376,14:45,17:59,320,"$154,671.00","$130,701.00",$408.44,"$40,422.99"
EWR - BUF,55738770038,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/55738770038,https://www.airlines-manager.com/aircraft/show/88494377,18:30,21:44,320,"$154,671.00","$130,701.00",$408.44,"$40,422.99"
EWR - BUF,55746468173,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/55746468173,https://www.airlines-manager.com/aircraft/show/88494375,23:00,2:14,320,"$154,671.00","$130,701.00",$408.44,"$40,422.99"
EWR - BWI,55704057870,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/55704057870,https://www.airlines-manager.com/aircraft/show/104034464,0:15,2:59,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,55704057871,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/55704057871,https://www.airlines-manager.com/aircraft/show/104034463,3:15,5:59,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,55721560632,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/55721560632,https://www.airlines-manager.com/aircraft/show/104034462,10:00,12:44,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,55721560633,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/55721560633,https://www.airlines-manager.com/aircraft/show/99316501,11:00,13:44,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,55728562396,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/55728562396,https://www.airlines-manager.com/aircraft/show/104034464,14:15,16:59,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,55735533011,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/55735533011,https://www.airlines-manager.com/aircraft/show/104034463,17:15,19:59,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,55741695563,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/55741695563,https://www.airlines-manager.com/aircraft/show/104034462,20:00,22:44,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,55744388886,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/55744388886,https://www.airlines-manager.com/aircraft/show/99316501,21:00,23:44,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BZN,55704057892,E-BIL-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/55704057892,https://www.airlines-manager.com/aircraft/show/116047885,0:30,9:44,320,"$592,989.00","$546,085.00","$1,706.52","$59,142.78"
EWR - BZN,55724951926,E-BIL-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/55724951926,https://www.airlines-manager.com/aircraft/show/116047884,12:00,21:14,320,"$592,989.00","$546,085.00","$1,706.52","$59,142.78"
EWR - BZN,55728562288,E-BIL-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/55728562288,https://www.airlines-manager.com/aircraft/show/116047883,13:30,22:44,320,"$592,989.00","$546,085.00","$1,706.52","$59,142.78"
EWR - BZN,55746468127,E-BIL-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/55746468127,https://www.airlines-manager.com/aircraft/show/116047882,22:30,7:44,320,"$592,989.00","$546,085.00","$1,706.52","$59,142.78"
EWR - CAK,55718008607,E-BIL-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/55718008607,https://www.airlines-manager.com/aircraft/show/116047884,8:30,11:59,320,"$191,026.00","$166,924.00",$521.64,"$47,920.77"
EWR - CAK,55721560549,E-BIL-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/55721560549,https://www.airlines-manager.com/aircraft/show/116047883,10:00,13:29,320,"$191,026.00","$166,924.00",$521.64,"$47,920.77"
EWR - CAK,55738770097,E-BIL-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/55738770097,https://www.airlines-manager.com/aircraft/show/116047882,19:00,22:29,320,"$191,026.00","$166,924.00",$521.64,"$47,920.77"
EWR - CAK,55744388875,E-BIL-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/55744388875,https://www.airlines-manager.com/aircraft/show/116047885,21:00,0:29,286,"$178,693.00","$154,939.00",$541.74,"$44,480.10"
EWR - CDG,55704058301,E-56A-5 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/55704058301,https://www.airlines-manager.com/aircraft/show/106813011,3:00,18:14,748,"$2,340,297.00","$2,079,866.00","$2,780.57","$136,533.87"
EWR - CDG,55718008639,E-56A-6 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/55718008639,https://www.airlines-manager.com/aircraft/show/106813012,8:45,23:59,748,"$2,340,297.00","$2,079,866.00","$2,780.57","$136,533.87"
EWR - CDG,55738770113,E-56A-2 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/55738770113,https://www.airlines-manager.com/aircraft/show/106813008,19:00,10:14,562,"$1,757,785.00","$1,580,528.00","$2,812.33","$103,754.57"
EWR - CHS,55718008613,E-TUL-DSM-1,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/55718008613,https://www.airlines-manager.com/aircraft/show/110044463,8:30,12:59,310,"$289,603.00","$264,659.00",$853.74,"$59,031.75"
EWR - CHS,55724951966,E-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/55724951966,https://www.airlines-manager.com/aircraft/show/110113039,12:00,16:29,112,"$138,180.00","$122,117.00","$1,090.33","$27,237.99"
EWR - CHS,55728562391,E-TUL-DSM-4,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/55728562391,https://www.airlines-manager.com/aircraft/show/110044466,14:15,18:44,310,"$289,603.00","$264,659.00",$853.74,"$59,031.75"
EWR - CHS,55744388908,E-TUL-DSM-3,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/55744388908,https://www.airlines-manager.com/aircraft/show/110044465,21:15,1:44,310,"$289,603.00","$264,659.00",$853.74,"$59,031.75"
EWR - CHS,55746468185,E-TUL-DSM-2,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/55746468185,https://www.airlines-manager.com/aircraft/show/110044464,23:00,3:29,282,"$274,309.00","$249,847.00",$885.98,"$55,727.96"
EWR - CID,55704058011,E-FCA-CID-4,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/55704058011,https://www.airlines-manager.com/aircraft/show/116042863,1:15,6:59,310,"$357,618.00","$329,009.00","$1,061.32","$57,385.29"
EWR - CID,55704058012,E-FCA-CID-3,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/55704058012,https://www.airlines-manager.com/aircraft/show/116042864,2:15,7:59,310,"$357,618.00","$329,009.00","$1,061.32","$57,385.29"
EWR - CID,55721560614,E-FCA-CID-2,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/55721560614,https://www.airlines-manager.com/aircraft/show/116042865,10:00,15:44,310,"$357,618.00","$329,009.00","$1,061.32","$57,385.29"
EWR - CID,55744388969,E-FCA-CID-1,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/55744388969,https://www.airlines-manager.com/aircraft/show/116042866,22:00,3:44,295,"$347,476.00","$319,242.00","$1,082.18","$55,681.74"
EWR - CLE,55704058176,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/55704058176,https://www.airlines-manager.com/aircraft/show/106104450,1:45,5:29,112,"$92,088.00","$77,509.00",$692.04,"$20,761.34"
EWR - CLE,55708448909,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/55708448909,https://www.airlines-manager.com/aircraft/show/105731236,5:00,8:44,320,"$198,609.00","$171,795.00",$536.86,"$46,016.52"
EWR - CLE,55721560701,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/55721560701,https://www.airlines-manager.com/aircraft/show/88494376,11:00,14:44,320,"$198,609.00","$171,795.00",$536.86,"$46,016.52"
EWR - CLE,55732031673,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/55732031673,https://www.airlines-manager.com/aircraft/show/88494377,14:45,18:29,320,"$198,609.00","$171,795.00",$536.86,"$46,016.52"
EWR - CLE,55738770118,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/55738770118,https://www.airlines-manager.com/aircraft/show/88494375,19:15,22:59,320,"$198,609.00","$171,795.00",$536.86,"$46,016.52"
EWR - CLT,55704058167,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/55704058167,https://www.airlines-manager.com/aircraft/show/104034462,1:45,5:59,216,"$190,091.00","$163,580.00",$757.31,"$38,640.94"
EWR - CLT,55704058168,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/55704058168,https://www.airlines-manager.com/aircraft/show/99316501,2:45,6:59,216,"$190,091.00","$163,580.00",$757.31,"$38,640.94"
EWR - CLT,55721560635,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/55721560635,https://www.airlines-manager.com/aircraft/show/104034464,10:00,14:14,216,"$190,091.00","$163,580.00",$757.31,"$38,640.94"
EWR - CLT,55728562263,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/55728562263,https://www.airlines-manager.com/aircraft/show/104034463,13:00,17:14,216,"$190,091.00","$163,580.00",$757.31,"$38,640.94"
EWR - CLT,55732031796,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/55732031796,https://www.airlines-manager.com/aircraft/show/104034462,15:45,19:59,216,"$190,091.00","$163,580.00",$757.31,"$38,640.94"
EWR - CLT,55735532945,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/55735532945,https://www.airlines-manager.com/aircraft/show/99316501,16:45,20:59,216,"$190,091.00","$163,580.00",$757.31,"$38,640.94"
EWR - CLT,55741695565,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/55741695565,https://www.airlines-manager.com/aircraft/show/104034464,20:00,0:14,216,"$190,091.00","$163,580.00",$757.31,"$38,640.94"
EWR - CLT,55746468188,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/55746468188,https://www.airlines-manager.com/aircraft/show/104034463,23:00,3:14,216,"$190,091.00","$163,580.00",$757.31,"$38,640.94"
EWR - CMH,55708448874,E-BNA-JAX-2,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/55708448874,https://www.airlines-manager.com/aircraft/show/104610409,4:30,8:29,310,"$223,693.00","$199,539.00",$643.67,"$50,093.47"
EWR - CMH,55718008611,E-BNA-JAX-1,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/55718008611,https://www.airlines-manager.com/aircraft/show/104610410,8:30,12:29,310,"$223,693.00","$199,539.00",$643.67,"$50,093.47"
EWR - CMH,55728562271,E-BNA-JAX-5,ERJ-175,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/55728562271,https://www.airlines-manager.com/aircraft/show/96421247,13:00,16:59,112,"$104,115.00","$88,818.00",$793.02,"$22,297.41"
EWR - CMH,55735533005,E-BNA-JAX-4,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/55735533005,https://www.airlines-manager.com/aircraft/show/104610407,17:15,21:14,310,"$223,693.00","$199,539.00",$643.67,"$50,093.47"
EWR - CMH,55746468205,E-BNA-JAX-3,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/55746468205,https://www.airlines-manager.com/aircraft/show/104610408,23:15,3:14,310,"$223,693.00","$199,539.00",$643.67,"$50,093.47"
EWR - COS,55704058043,E-COS-ICT-1,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/55704058043,https://www.airlines-manager.com/aircraft/show/108834808,1:30,9:59,310,"$535,609.00","$493,957.00","$1,593.41","$58,226.76"
EWR - COS,55704058044,E-COS-ICT-4,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/55704058044,https://www.airlines-manager.com/aircraft/show/108834811,3:30,11:59,310,"$535,609.00","$493,957.00","$1,593.41","$58,226.76"
EWR - COS,55728562275,E-COS-ICT-5,ERJ-175,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/55728562275,https://www.airlines-manager.com/aircraft/show/108466265,13:00,21:29,112,"$251,439.00","$223,621.00","$1,996.62","$26,360.04"
EWR - COS,55735532927,E-COS-ICT-3,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/55735532927,https://www.airlines-manager.com/aircraft/show/108834810,16:30,0:59,310,"$535,609.00","$493,957.00","$1,593.41","$58,226.76"
EWR - COS,55738770048,E-COS-ICT-2,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/55738770048,https://www.airlines-manager.com/aircraft/show/108834809,18:30,2:59,310,"$535,609.00","$493,957.00","$1,593.41","$58,226.76"
EWR - CRW,55704058055,E-CRW E,A319-100,https://www.airlines-manager.com/network/showline/50838186,https://www.airlines-manager.com/network/showflight/55704058055,https://www.airlines-manager.com/aircraft/show/120941964,1:30,5:14,216,"$155,815.00","$139,188.00",$644.39,"$37,282.50"
EWR - CRW,55721560668,E-CRW E,A319-100,https://www.airlines-manager.com/network/showline/50838186,https://www.airlines-manager.com/network/showflight/55721560668,https://www.airlines-manager.com/aircraft/show/120941964,10:30,14:14,216,"$155,815.00","$139,188.00",$644.39,"$37,282.50"
EWR - CRW,55728562397,E-CRW E,A319-100,https://www.airlines-manager.com/network/showline/50838186,https://www.airlines-manager.com/network/showflight/55728562397,https://www.airlines-manager.com/aircraft/show/120941964,14:15,17:59,216,"$155,815.00","$139,188.00",$644.39,"$37,282.50"
EWR - CRW,55738770001,E-CRW E,A319-100,https://www.airlines-manager.com/network/showline/50838186,https://www.airlines-manager.com/network/showflight/55738770001,https://www.airlines-manager.com/aircraft/show/120941964,18:00,21:44,216,"$155,815.00","$139,188.00",$644.39,"$37,282.50"
EWR - CRW,55744388953,E-CRW E,A319-100,https://www.airlines-manager.com/network/showline/50838186,https://www.airlines-manager.com/network/showflight/55744388953,https://www.airlines-manager.com/aircraft/show/120941964,21:45,1:29,216,"$155,815.00","$139,188.00",$644.39,"$37,282.50"
EWR - CUN,55704057922,E-CUN-SJU-3,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/55704057922,https://www.airlines-manager.com/aircraft/show/106581306,0:45,8:44,320,"$522,882.00","$475,106.00","$1,484.71","$59,512.23"
EWR - CUN,55704057923,E-CUN-SJU-2,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/55704057923,https://www.airlines-manager.com/aircraft/show/106581305,2:15,10:14,320,"$522,882.00","$475,106.00","$1,484.71","$59,512.23"
EWR - CUN,55728562202,E-CUN-SJU-1,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/55728562202,https://www.airlines-manager.com/aircraft/show/106581304,13:00,20:59,320,"$522,882.00","$475,106.00","$1,484.71","$59,512.23"
EWR - CUN,55728562203,E-CUN-SJU-4,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/55728562203,https://www.airlines-manager.com/aircraft/show/106581307,14:30,22:29,320,"$522,882.00","$475,106.00","$1,484.71","$59,512.23"
EWR - CUN,55744388987,E-CUN-SJU-5,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/55744388987,https://www.airlines-manager.com/aircraft/show/86238754,22:15,6:14,320,"$522,882.00","$475,106.00","$1,484.71","$59,512.23"
EWR - CVG,55704057867,E-BNA-JAX-2,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/55704057867,https://www.airlines-manager.com/aircraft/show/104610409,0:15,4:29,310,"$271,945.00","$244,220.00",$787.81,"$57,689.76"
EWR - CVG,55708448758,E-BNA-JAX-1,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/55708448758,https://www.airlines-manager.com/aircraft/show/104610410,4:15,8:29,310,"$271,945.00","$244,220.00",$787.81,"$57,689.76"
EWR - CVG,55718008597,E-BNA-JAX-5,ERJ-175,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/55718008597,https://www.airlines-manager.com/aircraft/show/96421247,8:15,12:29,112,"$128,787.00","$111,161.00",$992.51,"$26,258.50"
EWR - CVG,55728562247,E-BNA-JAX-4,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/55728562247,https://www.airlines-manager.com/aircraft/show/104610407,13:00,17:14,310,"$271,945.00","$244,220.00",$787.81,"$57,689.76"
EWR - CVG,55738770106,E-BNA-JAX-3,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/55738770106,https://www.airlines-manager.com/aircraft/show/104610408,19:00,23:14,310,"$271,945.00","$244,220.00",$787.81,"$57,689.76"
EWR - DEN,55704058078,E-DEN-SLC-1,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/55704058078,https://www.airlines-manager.com/aircraft/show/86270785,1:45,9:59,310,"$531,120.00","$467,014.00","$1,506.50","$56,722.35"
EWR - DEN,55704058079,E-DEN-SLC-4,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/55704058079,https://www.airlines-manager.com/aircraft/show/90452835,2:45,10:59,310,"$531,120.00","$467,014.00","$1,506.50","$56,722.35"
EWR - DEN,55721560562,E-DEN-SLC-2,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/55721560562,https://www.airlines-manager.com/aircraft/show/87153196,10:00,18:14,310,"$531,120.00","$467,014.00","$1,506.50","$56,722.35"
EWR - DEN,55721560563,E-DEN-SLC-3,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/55721560563,https://www.airlines-manager.com/aircraft/show/86270783,11:00,19:14,310,"$531,120.00","$467,014.00","$1,506.50","$56,722.35"
EWR - DEN,55732031835,E-DEN-SLC-5,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/55732031835,https://www.airlines-manager.com/aircraft/show/90452833,16:00,0:14,310,"$531,120.00","$467,014.00","$1,506.50","$56,722.35"
EWR - DEN,55735532988,E-DEN-SLC-6 B,A319-100,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/55735532988,https://www.airlines-manager.com/aircraft/show/105223076,17:00,1:14,198,"$399,942.00","$348,588.00","$1,760.55","$42,338.62"
EWR - DFW,55704058221,E-DFW-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/55704058221,https://www.airlines-manager.com/aircraft/show/90489724,2:30,9:59,320,"$475,228.00","$410,113.00","$1,281.60","$54,803.52"
EWR - DFW,55704058222,E-DFW-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/55704058222,https://www.airlines-manager.com/aircraft/show/86238753,3:30,10:59,320,"$475,228.00","$410,113.00","$1,281.60","$54,803.52"
EWR - DFW,55721560526,E-DFW-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/55721560526,https://www.airlines-manager.com/aircraft/show/90489725,10:00,17:29,320,"$475,228.00","$410,113.00","$1,281.60","$54,803.52"
EWR - DFW,55721560527,E-DFW-ATL-6 B,A319-100,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/55721560527,https://www.airlines-manager.com/aircraft/show/105222360,11:00,18:29,198,"$359,120.00","$313,518.00","$1,583.42","$41,895.50"
EWR - DFW,55724951970,E-DFW-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/55724951970,https://www.airlines-manager.com/aircraft/show/86238752,12:15,19:44,320,"$475,228.00","$410,113.00","$1,281.60","$54,803.52"
EWR - DFW,55738770119,E-DFW-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/55738770119,https://www.airlines-manager.com/aircraft/show/90489726,19:15,2:44,320,"$475,228.00","$410,113.00","$1,281.60","$54,803.52"
EWR - DSM,55704058195,E-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/55704058195,https://www.airlines-manager.com/aircraft/show/110113039,2:00,7:59,112,"$178,037.00","$157,997.00","$1,410.69","$26,406.18"
EWR - DSM,55708448761,E-TUL-DSM-4,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/55708448761,https://www.airlines-manager.com/aircraft/show/110044466,4:15,10:14,310,"$376,654.00","$346,204.00","$1,116.79","$57,861.39"
EWR - DSM,55724951950,E-TUL-DSM-3,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/55724951950,https://www.airlines-manager.com/aircraft/show/110044465,12:00,17:59,310,"$376,654.00","$346,204.00","$1,116.79","$57,861.39"
EWR - DSM,55728562294,E-TUL-DSM-2,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/55728562294,https://www.airlines-manager.com/aircraft/show/110044464,13:45,19:44,310,"$376,654.00","$346,204.00","$1,116.79","$57,861.39"
EWR - DSM,55746468134,E-TUL-DSM-1,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/55746468134,https://www.airlines-manager.com/aircraft/show/110044463,22:30,4:29,276,"$352,112.00","$322,607.00","$1,168.87","$53,917.60"
EWR - DTW,55704058328,E-DTW-YYZ-5,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/55704058328,https://www.airlines-manager.com/aircraft/show/92003921,3:30,7:29,320,"$228,249.00","$191,002.00",$596.88,"$47,950.29"
EWR - DTW,55721560532,E-DTW-YYZ-1,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/55721560532,https://www.airlines-manager.com/aircraft/show/92003925,10:00,13:59,320,"$228,249.00","$191,002.00",$596.88,"$47,950.29"
EWR - DTW,55728562285,E-DTW-YYZ-2,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/55728562285,https://www.airlines-manager.com/aircraft/show/92003924,13:30,17:29,320,"$228,249.00","$191,002.00",$596.88,"$47,950.29"
EWR - DTW,55744388942,E-DTW-YYZ-3,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/55744388942,https://www.airlines-manager.com/aircraft/show/92003923,21:45,1:44,320,"$228,249.00","$191,002.00",$596.88,"$47,950.29"
EWR - DTW,55744388943,E-DTW-YYZ-4,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/55744388943,https://www.airlines-manager.com/aircraft/show/92003922,22:15,2:14,320,"$228,249.00","$191,002.00",$596.88,"$47,950.29"
EWR - DUB,55704058324,E-56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/55704058324,https://www.airlines-manager.com/aircraft/show/106721557,3:30,16:59,598,"$1,662,831.00","$1,551,567.00","$2,594.59","$115,072.95"
EWR - DUB,55708448921,E-56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/55708448921,https://www.airlines-manager.com/aircraft/show/106721559,5:15,18:44,598,"$1,662,831.00","$1,551,567.00","$2,594.59","$115,072.95"
EWR - DUB,55721560660,E-56C-6 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/55721560660,https://www.airlines-manager.com/aircraft/show/106721561,10:30,23:59,598,"1,662,831$","1,551,567$","$2,594.59","$115,072.95"
EWR - ECP,55704057963,E-MTJ-ECP-3,737-900ER,https://www.airlines-manager.com/network/showline/50761178,https://www.airlines-manager.com/network/showflight/55704057963,https://www.airlines-manager.com/aircraft/show/120706944,1:00,6:44,320,"371,504$","337,111$","$1,053.47","$58,798.43"
EWR - ECP,55721560558,E-MTJ-ECP-2,737-900ER,https://www.airlines-manager.com/network/showline/50761178,https://www.airlines-manager.com/network/showflight/55721560558,https://www.airlines-manager.com/aircraft/show/120706945,10:00,15:44,320,"371,504$","337,111$","$1,053.47","$58,798.43"
EWR - ECP,55732031722,E-MTJ-ECP-4,737-900ER,https://www.airlines-manager.com/network/showline/50761178,https://www.airlines-manager.com/network/showflight/55732031722,https://www.airlines-manager.com/aircraft/show/120706943,15:00,20:44,320,"371,504$","337,111$","$1,053.47","$58,798.43"
EWR - ECP,55738770101,E-MTJ-ECP-1,737-900ER,https://www.airlines-manager.com/network/showline/50761178,https://www.airlines-manager.com/network/showflight/55738770101,https://www.airlines-manager.com/aircraft/show/120706946,19:00,0:44,320,"$371,504.00","$337,111.00","$1,053.47","$58,798.43"
EWR - EDI,55708448741,E-56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/55708448741,https://www.airlines-manager.com/aircraft/show/106721558,4:15,17:59,598,"$1,648,512.00","$1,541,221.00","$2,577.29","$112,224.83"
EWR - EDI,55711311622,E-56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/55711311622,https://www.airlines-manager.com/aircraft/show/106721560,6:00,19:44,598,"$1,648,512.00","$1,541,221.00","$2,577.29","$112,224.83"
EWR - EDI,55741695511,E-56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/55741695511,https://www.airlines-manager.com/aircraft/show/106721560,19:45,9:29,598,"$1,648,512.00","$1,541,221.00","$2,577.29","$112,224.83"
EWR - ELP,55704057883,E-ELP-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/55704057883,https://www.airlines-manager.com/aircraft/show/103365577,0:30,9:59,320,"$593,056.00","$543,274.00","$1,697.73","$57,287.24"
EWR - ELP,55704057884,E-ELP-SAT-5 B,A319-100,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/55704057884,https://www.airlines-manager.com/aircraft/show/110582847,2:30,11:59,198,"$446,662.00","$410,459.00","$2,073.03","$43,282.14"
EWR - ELP,55721560542,E-ELP-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/55721560542,https://www.airlines-manager.com/aircraft/show/103365578,10:00,19:29,320,"$593,056.00","$543,274.00","$1,697.73","$57,287.24"
EWR - ELP,55724951917,E-ELP-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/55724951917,https://www.airlines-manager.com/aircraft/show/103365575,12:00,21:29,320,"$593,056.00","$543,274.00","$1,697.73","$57,287.24"
EWR - ELP,55735532903,E-ELP-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/55735532903,https://www.airlines-manager.com/aircraft/show/103365576,16:15,1:44,320,"$593,056.00","$543,274.00","$1,697.73","$57,287.24"
EWR - EUG,55704058074,E-EUG-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/55704058074,https://www.airlines-manager.com/aircraft/show/119220438,1:45,13:29,320,"$729,984.00","$674,719.00","$2,108.50","$57,504.46"
EWR - EUG,55724951930,E-EUG-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/55724951930,https://www.airlines-manager.com/aircraft/show/119220435,12:00,23:44,320,"$729,984.00","$674,719.00","$2,108.50","$57,504.46"
EWR - EUG,55728562331,E-EUG-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/55728562331,https://www.airlines-manager.com/aircraft/show/119220436,14:00,1:44,320,"$729,984.00","$674,719.00","$2,108.50","$57,504.46"
EWR - EUG,55747839768,E-EUG-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/55747839768,https://www.airlines-manager.com/aircraft/show/119220437,23:45,11:29,320,"$729,984.00","$674,719.00","$2,108.50","$57,504.46"
EWR - FAR,55704058077,E-LIT-FAR-4,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/55704058077,https://www.airlines-manager.com/aircraft/show/86270784,1:45,8:29,310,"$425,315.00","$392,348.00","$1,265.64","$58,269.50"
EWR - FAR,55708448911,E-LIT-FAR-3,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/55708448911,https://www.airlines-manager.com/aircraft/show/86270786,5:00,11:44,310,"$425,315.00","$392,348.00","$1,265.64","$58,269.50"
EWR - FAR,55732031724,E-LIT-FAR-2,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/55732031724,https://www.airlines-manager.com/aircraft/show/86270787,15:00,21:44,310,"$425,315.00","$392,348.00","$1,265.64","$58,269.50"
EWR - FAR,55738770127,E-LIT-FAR-1,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/55738770127,https://www.airlines-manager.com/aircraft/show/90452834,19:15,1:59,310,"$425,315.00","$392,348.00","$1,265.64","$58,269.50"
EWR - FAT,55704057841,E-PSP-FAT-2,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/55704057841,https://www.airlines-manager.com/aircraft/show/119220451,0:15,11:44,338,"$779,642.00","$731,517.00","$2,164.25","$63,702.50"
EWR - FAT,55721560690,E-PSP-FAT-3,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/55721560690,https://www.airlines-manager.com/aircraft/show/119220452,11:00,22:29,338,"$779,642.00","$731,517.00","$2,164.25","$63,702.50"
EWR - FAT,55728562170,E-PSP-FAT-4,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/55728562170,https://www.airlines-manager.com/aircraft/show/116672810,13:00,0:29,338,"$779,642.00","$731,517.00","$2,164.25","$63,702.50"
EWR - FAT,55744388983,E-PSP-FAT-1,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/55744388983,https://www.airlines-manager.com/aircraft/show/119220450,22:15,9:44,338,"$779,642.00","$731,517.00","$2,164.25","$63,702.50"
EWR - FCA,55724951952,E-FCA-CID-1,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/55724951952,https://www.airlines-manager.com/aircraft/show/116042866,12:00,21:59,310,"$626,012.00","$581,310.00","$1,875.19","$58,228.05"
EWR - FCA,55732031772,E-FCA-CID-4,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/55732031772,https://www.airlines-manager.com/aircraft/show/116042863,15:15,1:14,310,"$626,012.00","$581,310.00","$1,875.19","$58,228.05"
EWR - FCA,55735532907,E-FCA-CID-3,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/55735532907,https://www.airlines-manager.com/aircraft/show/116042864,16:15,2:14,310,"$626,012.00","$581,310.00","$1,875.19","$58,228.05"
EWR - FCA,55744388968,E-FCA-CID-2,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/55744388968,https://www.airlines-manager.com/aircraft/show/116042865,22:00,7:59,310,"$626,012.00","$581,310.00","$1,875.19","$58,228.05"
EWR - FCO,55704058232,E-84A-2 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/55704058232,https://www.airlines-manager.com/aircraft/show/94521252,2:30,19:59,852,"$2,914,869.00","$2,640,955.00","$3,099.71","$151,055.58"
EWR - FCO,55724951959,E-84A-3 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/55724951959,https://www.airlines-manager.com/aircraft/show/90656553,12:00,5:29,852,"$2,914,869.00","$2,640,955.00","$3,099.71","$151,055.58"
EWR - FLL,55704058343,E-DTW-YYZ-2,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/55704058343,https://www.airlines-manager.com/aircraft/show/92003924,3:45,9:59,320,"$392,797.00","$352,784.00","$1,102.45","$56,596.36"
EWR - FLL,55711311607,E-DTW-YYZ-4,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/55711311607,https://www.airlines-manager.com/aircraft/show/92003922,5:45,11:59,320,"$392,797.00","$352,784.00","$1,102.45","$56,596.36"
EWR - FLL,55721560706,E-DTW-YYZ-5,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/55721560706,https://www.airlines-manager.com/aircraft/show/92003921,11:00,17:14,320,"$392,797.00","$352,784.00","$1,102.45","$56,596.36"
EWR - FLL,55724951912,E-DTW-YYZ-3,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/55724951912,https://www.airlines-manager.com/aircraft/show/92003923,12:00,18:14,320,"$392,797.00","$352,784.00","$1,102.45","$56,596.36"
EWR - FLL,55735533017,E-DTW-YYZ-1,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/55735533017,https://www.airlines-manager.com/aircraft/show/92003925,17:30,23:44,320,"$392,797.00","$352,784.00","$1,102.45","$56,596.36"
EWR - FRA,55704058281,E-56B-5 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/55704058281,https://www.airlines-manager.com/aircraft/show/94521253,2:45,18:44,748,"$2,453,250.00","$2,188,346.00","$2,925.60","$136,914.24"
EWR - FRA,55708448878,E-56B-3 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/55708448878,https://www.airlines-manager.com/aircraft/show/90656555,4:30,20:29,748,"$2,453,250.00","$2,188,346.00","$2,925.60","$136,914.24"
EWR - FRA,55711311653,E-56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/55711311653,https://www.airlines-manager.com/aircraft/show/94521251,6:15,22:14,748,"$2,215,081.00","$2,014,089.00","$2,692.63","$126,011.82"
EWR - FSD,55708448759,E-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/55708448759,https://www.airlines-manager.com/aircraft/show/107161240,4:15,10:59,310,"$412,992.00","$380,511.00","$1,227.45","$56,511.53"
EWR - FSD,55718008662,E-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/55718008662,https://www.airlines-manager.com/aircraft/show/86782214,9:00,15:44,112,"$194,519.00","$172,989.00","$1,544.54","$25,691.44"
EWR - FSD,55721560746,E-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/55721560746,https://www.airlines-manager.com/aircraft/show/107161239,11:00,17:44,310,"$412,992.00","$380,511.00","$1,227.45","$56,511.53"
EWR - FSD,55732031770,E-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/55732031770,https://www.airlines-manager.com/aircraft/show/107161241,15:15,21:59,310,"$412,992.00","$380,511.00","$1,227.45","$56,511.53"
EWR - FSD,55738770024,E-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/55738770024,https://www.airlines-manager.com/aircraft/show/107161238,18:15,0:59,282,"$390,782.00","$359,199.00","$1,273.76","$53,346.39"
EWR - GRR,55718008618,E-RAP-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/55718008618,https://www.airlines-manager.com/aircraft/show/116042862,8:30,12:59,310,"$278,034.00","$253,092.00",$816.43,"$56,451.75"
EWR - GRR,55728562365,E-RAP-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/55728562365,https://www.airlines-manager.com/aircraft/show/116042859,14:00,18:29,310,"$278,034.00","$253,092.00",$816.43,"$56,451.75"
EWR - GRR,55741695501,E-RAP-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/55741695501,https://www.airlines-manager.com/aircraft/show/116042860,19:30,23:59,310,"$278,034.00","$253,092.00",$816.43,"$56,451.75"
EWR - GRR,55741695502,E-RAP-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/55741695502,https://www.airlines-manager.com/aircraft/show/116042861,20:45,1:14,310,"$278,034.00","$253,092.00",$816.43,"$56,451.75"
EWR - GSO,55704058349,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/55704058349,https://www.airlines-manager.com/aircraft/show/119220544,3:45,7:29,310,"$217,652.00","$195,033.00",$629.14,"$52,240.98"
EWR - GSO,55721560620,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/55721560620,https://www.airlines-manager.com/aircraft/show/119220543,10:00,13:44,310,"$217,652.00","$195,033.00",$629.14,"$52,240.98"
EWR - GSO,55728562401,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/55728562401,https://www.airlines-manager.com/aircraft/show/119220542,14:30,18:14,310,"$217,652.00","$195,033.00",$629.14,"$52,240.98"
EWR - GSO,55746468208,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/55746468208,https://www.airlines-manager.com/aircraft/show/119220545,23:15,2:59,310,"$217,652.00","$195,033.00",$629.14,"$52,240.98"
EWR - HEL,55721560671,E-56D-6 E,787-10,https://www.airlines-manager.com/network/showline/50072206,https://www.airlines-manager.com/network/showflight/55721560671,https://www.airlines-manager.com/aircraft/show/118644441,10:45,3:29,648,"$2,056,992.00","$1,921,807.00","$2,965.75","$114,849.02"
EWR - HEL,55721560672,E-56D-7 E,787-10,https://www.airlines-manager.com/network/showline/50072206,https://www.airlines-manager.com/network/showflight/55721560672,https://www.airlines-manager.com/aircraft/show/118644442,11:00,3:44,648,"$2,056,992.00","$1,921,807.00","$2,965.75","$114,849.02"
EWR - HEL,55741695540,E-56D-2 E,787-10,https://www.airlines-manager.com/network/showline/50072206,https://www.airlines-manager.com/network/showflight/55741695540,https://www.airlines-manager.com/aircraft/show/118644437,20:00,12:44,578,"$1,907,702.00","$1,779,714.00","$3,079.09","$106,357.41"
EWR - IAH,55704058323,E-IAH-LAS-3,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/55704058323,https://www.airlines-manager.com/aircraft/show/105859512,3:30,10:59,338,"$519,680.00","$471,818.00","$1,395.91","$63,049.18"
EWR - IAH,55708448775,E-IAH-LAS-5,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/55708448775,https://www.airlines-manager.com/aircraft/show/105859514,4:30,11:59,338,"$519,680.00","$471,818.00","$1,395.91","$63,049.18"
EWR - IAH,55714463623,E-IAH-LAS-1,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/55714463623,https://www.airlines-manager.com/aircraft/show/105859510,7:30,14:59,338,"$519,680.00","$471,818.00","$1,395.91","$63,049.18"
EWR - IAH,55721560682,E-IAH-LAS-2,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/55721560682,https://www.airlines-manager.com/aircraft/show/105859511,11:00,18:29,338,"$519,680.00","$471,818.00","$1,395.91","$63,049.18"
EWR - IAH,55724951903,E-IAH-LAS-4,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/55724951903,https://www.airlines-manager.com/aircraft/show/105859513,12:00,19:29,338,"$519,680.00","$471,818.00","$1,395.91","$63,049.18"
EWR - IAH,55738770086,E-IAH-LAS-6,ERJ-175,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/55738770086,https://www.airlines-manager.com/aircraft/show/105864236,18:45,2:14,112,"$226,313.00","$194,106.00","$1,733.09","$25,938.44"
EWR - ICT,55704057972,E-COS-ICT-3,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/55704057972,https://www.airlines-manager.com/aircraft/show/108834810,1:00,7:59,310,"$442,853.00","$408,153.00","$1,316.62","$58,446.73"
EWR - ICT,55704057973,E-COS-ICT-2,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/55704057973,https://www.airlines-manager.com/aircraft/show/108834809,3:00,9:59,310,"$442,853.00","$408,153.00","$1,316.62","$58,446.73"
EWR - ICT,55721560751,E-COS-ICT-1,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/55721560751,https://www.airlines-manager.com/aircraft/show/108834808,11:00,17:59,310,"$442,853.00","$408,153.00","$1,316.62","$58,446.73"
EWR - ICT,55728562253,E-COS-ICT-4,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/55728562253,https://www.airlines-manager.com/aircraft/show/108834811,13:00,19:59,310,"$442,853.00","$408,153.00","$1,316.62","$58,446.73"
EWR - ICT,55744388936,E-COS-ICT-5,ERJ-175,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/55744388936,https://www.airlines-manager.com/aircraft/show/108466265,21:30,4:29,112,"$209,485.00","$186,465.00","$1,664.87","$26,701.43"
EWR - IND,55704057879,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/55704057879,https://www.airlines-manager.com/aircraft/show/88494376,0:30,4:59,320,"$295,294.00","$263,726.00",$824.14,"$58,823.64"
EWR - IND,55708448744,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/55708448744,https://www.airlines-manager.com/aircraft/show/88494377,4:15,8:44,320,"$295,294.00","$263,726.00",$824.14,"$58,823.64"
EWR - IND,55721560700,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/55721560700,https://www.airlines-manager.com/aircraft/show/88494375,11:00,15:29,320,"$295,294.00","$263,726.00",$824.14,"$58,823.64"
EWR - IND,55735533032,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/55735533032,https://www.airlines-manager.com/aircraft/show/106104450,17:30,21:59,112,"$140,854.00","$123,199.00","$1,099.99","$27,479.33"
EWR - IND,55741695628,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/55741695628,https://www.airlines-manager.com/aircraft/show/105731236,20:45,1:14,320,"$295,294.00","$263,726.00",$824.14,"$58,823.64"
EWR - JAN,55704058185,E-LIT-FAR-1,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/55704058185,https://www.airlines-manager.com/aircraft/show/90452834,2:00,8:14,310,"$389,232.00","$358,551.00","$1,156.62","$57,521.55"
EWR - JAN,55718008608,E-LIT-FAR-4,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/55718008608,https://www.airlines-manager.com/aircraft/show/86270784,8:30,14:44,310,"$389,232.00","$358,551.00","$1,156.62","$57,521.55"
EWR - JAN,55724951938,E-LIT-FAR-3,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/55724951938,https://www.airlines-manager.com/aircraft/show/86270786,12:00,18:14,310,"$389,232.00","$358,551.00","$1,156.62","$57,521.55"
EWR - JAN,55744388950,E-LIT-FAR-2,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/55744388950,https://www.airlines-manager.com/aircraft/show/86270787,21:45,3:59,310,"$389,232.00","$358,551.00","$1,156.62","$57,521.55"
EWR - JAX,55704058205,E-BNA-JAX-4,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/55704058205,https://www.airlines-manager.com/aircraft/show/104610407,2:15,7:29,310,"$337,690.00","$308,667.00",$995.70,"$58,980.96"
EWR - JAX,55718008589,E-BNA-JAX-3,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/55718008589,https://www.airlines-manager.com/aircraft/show/104610408,8:15,13:29,310,"$337,690.00","$308,667.00",$995.70,"$58,980.96"
EWR - JAX,55728562349,E-BNA-JAX-2,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/55728562349,https://www.airlines-manager.com/aircraft/show/104610409,14:00,19:14,310,"$337,690.00","$308,667.00",$995.70,"$58,980.96"
EWR - JAX,55738769988,E-BNA-JAX-1,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/55738769988,https://www.airlines-manager.com/aircraft/show/104610410,18:00,23:14,310,"$337,690.00","$308,667.00",$995.70,"$58,980.96"
EWR - JAX,55744388979,E-BNA-JAX-5,ERJ-175,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/55744388979,https://www.airlines-manager.com/aircraft/show/96421247,22:00,3:14,112,"$160,212.00","$141,366.00","$1,262.20","$27,012.61"
EWR - KEF,55735532952,E-56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/55735532952,https://www.airlines-manager.com/aircraft/show/106721557,17:00,4:14,598,"$1,343,998.00","$1,254,987.00","$2,098.64","$111,719.91"
EWR - KEF,55738769970,E-56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/55738769970,https://www.airlines-manager.com/aircraft/show/106721558,18:00,5:14,598,"$1,343,998.00","$1,254,987.00","$2,098.64","$111,719.91"
EWR - KEF,55738769971,E-56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/55738769971,https://www.airlines-manager.com/aircraft/show/106721559,18:45,5:59,598,"$1,343,998.00","$1,254,987.00","$2,098.64","$111,719.91"
EWR - LAS,55704057837,E-IAH-LAS-2,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/55704057837,https://www.airlines-manager.com/aircraft/show/105859511,0:15,10:59,338,"$737,877.00","$673,713.00","$1,993.23","$62,768.29"
EWR - LAS,55704057838,E-IAH-LAS-4,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/55704057838,https://www.airlines-manager.com/aircraft/show/105859513,1:15,11:59,338,"$737,877.00","$673,713.00","$1,993.23","$62,768.29"
EWR - LAS,55704057839,E-IAH-LAS-6,ERJ-175,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/55704057839,https://www.airlines-manager.com/aircraft/show/105864236,2:15,12:59,112,"$318,546.00","$274,501.00","$2,450.90","$25,574.63"
EWR - LAS,55724951904,E-IAH-LAS-5,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/55724951904,https://www.airlines-manager.com/aircraft/show/105859514,12:00,22:44,338,"$737,877.00","$673,713.00","$1,993.23","$62,768.29"
EWR - LAS,55732031691,E-IAH-LAS-1,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/55732031691,https://www.airlines-manager.com/aircraft/show/105859510,15:00,1:44,338,"$737,877.00","$673,713.00","$1,993.23","$62,768.29"
EWR - LAS,55735532932,E-IAH-LAS-3,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/55735532932,https://www.airlines-manager.com/aircraft/show/105859512,16:45,3:29,338,"$737,877.00","$673,713.00","$1,993.23","$62,768.29"
EWR - LAX,55704057775,E-SFO-LAX-4,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/55704057775,https://www.airlines-manager.com/aircraft/show/89233030,0:00,11:29,400,"$937,587.00","$846,364.00","$2,115.91","$73,703.69"
EWR - LAX,55704057776,E-SFO-LAX-5,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/55704057776,https://www.airlines-manager.com/aircraft/show/89233027,2:00,13:29,400,"$937,587.00","$846,364.00","$2,115.91","$73,703.69"
EWR - LAX,55724951975,E-SFO-LAX-1,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/55724951975,https://www.airlines-manager.com/aircraft/show/83716137,12:30,23:59,400,"$937,587.00","$846,364.00","$2,115.91","$73,703.69"
EWR - LAX,55728562302,E-SFO-LAX-2,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/55728562302,https://www.airlines-manager.com/aircraft/show/89233028,14:00,1:29,400,"$937,587.00","$846,364.00","$2,115.91","$73,703.69"
EWR - LAX,55732031775,E-SFO-LAX-3,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/55732031775,https://www.airlines-manager.com/aircraft/show/89233029,15:30,2:59,400,"$937,587.00","$846,364.00","$2,115.91","$73,703.69"
EWR - LEX,55704058295,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/55704058295,https://www.airlines-manager.com/aircraft/show/119220545,3:00,7:29,310,"$273,360.00","$250,152.00",$806.94,"$55,795.99"
EWR - LEX,55721560621,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/55721560621,https://www.airlines-manager.com/aircraft/show/119220544,10:00,14:29,310,"$273,360.00","$250,152.00",$806.94,"$55,795.99"
EWR - LEX,55728562295,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/55728562295,https://www.airlines-manager.com/aircraft/show/119220543,13:45,18:14,310,"$273,360.00","$250,152.00",$806.94,"$55,795.99"
EWR - LEX,55738770025,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/55738770025,https://www.airlines-manager.com/aircraft/show/119220542,18:15,22:44,280,"$257,981.00","$235,255.00",$840.20,"$52,473.23"
EWR - LHR,55704058214,E-56A-1 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/55704058214,https://www.airlines-manager.com/aircraft/show/106813007,2:15,16:44,748,"$2,231,685.00","$1,980,082.00","$2,647.17","$136,714.52"
EWR - LHR,55724951979,E-56A-4 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/55724951979,https://www.airlines-manager.com/aircraft/show/106813010,12:30,2:59,748,"$2,231,685.00","$1,980,082.00","$2,647.17","$136,714.52"
EWR - LHR,55738770028,E-56A-5 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/55738770028,https://www.airlines-manager.com/aircraft/show/106813011,18:15,8:44,748,"$2,015,569.00","$1,821,209.00","$2,434.77","$125,745.16"
EWR - LIS,55711311602,E-84A-4 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/55711311602,https://www.airlines-manager.com/aircraft/show/90656551,5:30,19:44,852,"$2,340,226.00","$2,131,891.00","$2,502.22","$149,781.57"
EWR - LIS,55724951972,E-84A-1 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/55724951972,https://www.airlines-manager.com/aircraft/show/90656554,12:15,2:29,852,"$2,340,226.00","$2,131,891.00","$2,502.22","$149,781.57"
EWR - LIT,55718008609,E-LIT-FAR-2,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/55718008609,https://www.airlines-manager.com/aircraft/show/86270787,8:30,14:44,310,"$395,001.00","$364,044.00","$1,174.34","$58,402.78"
EWR - LIT,55728562232,E-LIT-FAR-1,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/55728562232,https://www.airlines-manager.com/aircraft/show/90452834,13:00,19:14,310,"$395,001.00","$364,044.00","$1,174.34","$58,402.78"
EWR - LIT,55741695496,E-LIT-FAR-4,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/55741695496,https://www.airlines-manager.com/aircraft/show/86270784,19:30,1:44,310,"$395,001.00","$364,044.00","$1,174.34","$58,402.78"
EWR - LIT,55746468157,E-LIT-FAR-3,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/55746468157,https://www.airlines-manager.com/aircraft/show/86270786,22:45,4:59,310,"$395,001.00","$364,044.00","$1,174.34","$58,402.78"
EWR - MAD,55704057822,E-56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/55704057822,https://www.airlines-manager.com/aircraft/show/89124072,0:00,14:59,748,"$2,301,537.00","$2,048,578.00","$2,738.74","$136,723.78"
EWR - MAD,55741695615,E-56B-3 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/55741695615,https://www.airlines-manager.com/aircraft/show/90656555,20:30,11:29,748,"$2,301,537.00","$2,048,578.00","$2,738.74","$136,723.78"
EWR - MAD,55744389005,E-56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/55744389005,https://www.airlines-manager.com/aircraft/show/94521251,22:15,13:14,748,"$2,077,752.00","$1,884,361.00","$2,519.20","$125,763.80"
EWR - MAF,55704058017,E-RDM-MAF-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761173,https://www.airlines-manager.com/network/showflight/55704058017,https://www.airlines-manager.com/aircraft/show/120706940,1:30,9:59,272,"$490,066.00","$459,903.00","$1,690.82","$54,212.53"
EWR - MAF,55714463604,E-RDM-MAF-5 B,A319-100,https://www.airlines-manager.com/network/showline/50761173,https://www.airlines-manager.com/network/showflight/55714463604,https://www.airlines-manager.com/aircraft/show/120707022,7:00,15:29,198,"$407,839.00","$375,811.00","$1,898.04","$44,299.92"
EWR - MAF,55721560507,E-RDM-MAF-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761173,https://www.airlines-manager.com/network/showflight/55721560507,https://www.airlines-manager.com/aircraft/show/120706941,10:00,18:29,272,"$490,066.00","$459,903.00","$1,690.82","$54,212.53"
EWR - MAF,55738769966,E-RDM-MAF-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761173,https://www.airlines-manager.com/network/showflight/55738769966,https://www.airlines-manager.com/aircraft/show/120706939,18:00,2:29,272,"$490,066.00","$459,903.00","$1,690.82","$54,212.53"
EWR - MAF,55747839758,E-RDM-MAF-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761173,https://www.airlines-manager.com/network/showflight/55747839758,https://www.airlines-manager.com/aircraft/show/120706942,23:45,8:14,272,"$490,066.00","$459,903.00","$1,690.82","$54,212.53"
EWR - MBJ,55704058326,E-56D-7 E,787-10,https://www.airlines-manager.com/network/showline/50072192,https://www.airlines-manager.com/network/showflight/55704058326,https://www.airlines-manager.com/aircraft/show/118644442,3:30,10:59,648,"$945,645.00","$883,866.00","$1,363.99","$118,111.27"
EWR - MBJ,55721560768,E-56D-5 E,787-10,https://www.airlines-manager.com/network/showline/50072192,https://www.airlines-manager.com/network/showflight/55721560768,https://www.airlines-manager.com/aircraft/show/118644440,11:15,18:44,648,"$945,645.00","$883,866.00","$1,363.99","$118,111.27"
EWR - MBJ,55741695512,E-56D-1 E,787-10,https://www.airlines-manager.com/network/showline/50072192,https://www.airlines-manager.com/network/showflight/55741695512,https://www.airlines-manager.com/aircraft/show/118644436,19:45,3:14,635,"$921,782.00","$860,680.00","$1,355.40","$115,012.92"
EWR - MCI,55704058344,E-ELP-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/55704058344,https://www.airlines-manager.com/aircraft/show/103365578,3:45,9:59,320,"$396,816.00","$357,840.00","$1,118.25","$57,407.49"
EWR - MCI,55711311609,E-ELP-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/55711311609,https://www.airlines-manager.com/aircraft/show/103365575,5:45,11:59,320,"$396,816.00","$357,840.00","$1,118.25","$57,407.49"
EWR - MCI,55721560540,E-ELP-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/55721560540,https://www.airlines-manager.com/aircraft/show/103365576,10:00,16:14,320,"$396,816.00","$357,840.00","$1,118.25","$57,407.49"
EWR - MCI,55738770016,E-ELP-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/55738770016,https://www.airlines-manager.com/aircraft/show/103365577,18:15,0:29,320,"$396,816.00","$357,840.00","$1,118.25","$57,407.49"
EWR - MCI,55741695596,E-ELP-SAT-5 B,A319-100,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/55741695596,https://www.airlines-manager.com/aircraft/show/110582847,20:15,2:29,198,"$300,349.00","$272,622.00","$1,376.88","$43,736.15"
EWR - MCO,55704058061,E-IAH-LAS-1,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/55704058061,https://www.airlines-manager.com/aircraft/show/105859510,1:45,7:29,338,"$391,232.00","$351,937.00","$1,041.23","$61,384.36"
EWR - MCO,55721560683,E-IAH-LAS-3,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/55721560683,https://www.airlines-manager.com/aircraft/show/105859512,11:00,16:44,338,"$391,232.00","$351,937.00","$1,041.23","$61,384.36"
EWR - MCO,55728562274,E-IAH-LAS-6,ERJ-175,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/55728562274,https://www.airlines-manager.com/aircraft/show/105864236,13:00,18:44,112,"$171,315.00","$145,397.00","$1,298.19","$25,359.94"
EWR - MCO,55738770032,E-IAH-LAS-2,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/55738770032,https://www.airlines-manager.com/aircraft/show/105859511,18:30,0:14,338,"$391,232.00","$351,937.00","$1,041.23","$61,384.36"
EWR - MCO,55741695483,E-IAH-LAS-4,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/55741695483,https://www.airlines-manager.com/aircraft/show/105859513,19:30,1:14,338,"$391,232.00","$351,937.00","$1,041.23","$61,384.36"
EWR - MCO,55746468142,E-IAH-LAS-5,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/55746468142,https://www.airlines-manager.com/aircraft/show/105859514,22:45,4:29,338,"$391,232.00","$351,937.00","$1,041.23","$61,384.36"
EWR - MEM,55704057993,E-RNO-MEM-4,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/55704057993,https://www.airlines-manager.com/aircraft/show/99920619,1:15,6:59,320,"$365,097.00","$328,039.00","$1,025.12","$57,216.10"
EWR - MEM,55704057994,E-RNO-MEM-3,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/55704057994,https://www.airlines-manager.com/aircraft/show/99920620,3:45,9:29,320,"$365,097.00","$328,039.00","$1,025.12","$57,216.10"
EWR - MEM,55721560650,E-RNO-MEM-2,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/55721560650,https://www.airlines-manager.com/aircraft/show/99920621,10:15,15:59,320,"$365,097.00","$328,039.00","$1,025.12","$57,216.10"
EWR - MEM,55741695592,E-RNO-MEM-5 B,A319-100,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/55741695592,https://www.airlines-manager.com/aircraft/show/100096560,20:15,1:59,198,"$276,827.00","$250,611.00","$1,265.71","$43,711.22"
EWR - MEM,55744388921,E-RNO-MEM-1,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/55744388921,https://www.airlines-manager.com/aircraft/show/99920622,21:30,3:14,320,"$365,097.00","$328,039.00","$1,025.12","$57,216.10"
EWR - MEX,55704058065,E-DTW-YYZ-3,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/55704058065,https://www.airlines-manager.com/aircraft/show/92003923,1:45,11:59,320,"$641,733.00","$578,133.00","$1,806.67","$56,495.08"
EWR - MEX,55721560636,E-DTW-YYZ-6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/55721560636,https://www.airlines-manager.com/aircraft/show/104258433,10:00,20:14,216,"$488,482.00","$441,977.00","$2,046.19","$43,189.93"
EWR - MEX,55724951911,E-DTW-YYZ-4,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/55724951911,https://www.airlines-manager.com/aircraft/show/92003922,12:00,22:14,320,"641,733$","578,133$","$1,806.67","$56,495.08"
EWR - MEX,55735532999,E-DTW-YYZ-5,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/55735532999,https://www.airlines-manager.com/aircraft/show/92003921,17:15,3:29,320,"641,733$","578,133$","$1,806.67","$56,495.08"
EWR - MEX,55735533000,E-DTW-YYZ-2,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/55735533000,https://www.airlines-manager.com/aircraft/show/92003924,17:30,3:44,320,"641,733$","578,133$","$1,806.67","$56,495.08"
EWR - MEX,55741695593,E-DTW-YYZ-6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/55741695593,https://www.airlines-manager.com/aircraft/show/104258433,20:15,6:29,216,"488,482$","441,977$","$2,046.19","$43,189.93"
EWR - MEX,55747839762,E-DTW-YYZ-1,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/55747839762,https://www.airlines-manager.com/aircraft/show/92003925,23:45,9:59,300,"606,877$","544,675$","$1,815.58","$53,225.57"
EWR - MFR,55704058073,E-EUG-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/55704058073,https://www.airlines-manager.com/aircraft/show/119220436,1:45,13:29,320,"717,698$","661,635$","$2,067.61","$56,389.35"
EWR - MFR,55724951931,E-EUG-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/55724951931,https://www.airlines-manager.com/aircraft/show/119220437,12:00,23:44,320,"717,698$","661,635$","$2,067.61","$56,389.35"
EWR - MFR,55728562332,E-EUG-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/55728562332,https://www.airlines-manager.com/aircraft/show/119220438,14:00,1:44,320,"717,698$","661,635$","$2,067.61","$56,389.35"
EWR - MFR,55747839767,E-EUG-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/55747839767,https://www.airlines-manager.com/aircraft/show/119220435,23:45,11:29,320,"717,698$","661,635$","$2,067.61","$56,389.35"
EWR - MHT,55704058347,E-FCA-CID-1,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/55704058347,https://www.airlines-manager.com/aircraft/show/116042866,3:45,6:44,310,"$126,850.00","$107,713.00",$347.46,"$36,104.92"
EWR - MHT,55718008655,E-FCA-CID-4,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/55718008655,https://www.airlines-manager.com/aircraft/show/116042863,9:00,11:59,310,"$126,850.00","$107,713.00",$347.46,"$36,104.92"
EWR - MHT,55721560612,E-FCA-CID-3,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/55721560612,https://www.airlines-manager.com/aircraft/show/116042864,10:00,12:59,310,"$126,850.00","$107,713.00",$347.46,"$36,104.92"
EWR - MHT,55721560613,E-STL-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/55721560613,https://www.airlines-manager.com/aircraft/show/98887257,11:00,13:59,112,"$56,500.00","$44,653.00",$398.69,"$14,967.49"
EWR - MHT,55732031794,E-FCA-CID-2,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/55732031794,https://www.airlines-manager.com/aircraft/show/116042865,15:45,18:44,310,"$126,850.00","$107,713.00",$347.46,"$36,104.92"
EWR - MIA,55704058219,E-MIA-ORD-5,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/55704058219,https://www.airlines-manager.com/aircraft/show/113251309,2:30,8:44,338,"$431,618.00","$388,532.00","$1,149.50","$62,331.34"
EWR - MIA,55708448703,E-MIA-ORD-1,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/55708448703,https://www.airlines-manager.com/aircraft/show/113251305,4:00,10:14,338,"$431,618.00","$388,532.00","$1,149.50","$62,331.34"
EWR - MIA,55721560512,E-MIA-ORD-2,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/55721560512,https://www.airlines-manager.com/aircraft/show/113251306,10:00,16:14,338,"$431,618.00","$388,532.00","$1,149.50","$62,331.34"
EWR - MIA,55721560513,E-MIA-ORD-4,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/55721560513,https://www.airlines-manager.com/aircraft/show/113251308,11:00,17:14,338,"$431,618.00","$388,532.00","$1,149.50","$62,331.34"
EWR - MIA,55735532913,E-MIA-ORD-3,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/55735532913,https://www.airlines-manager.com/aircraft/show/113251307,16:30,22:44,338,"$431,618.00","$388,532.00","$1,149.50","$62,331.34"
EWR - MKE,55704058321,E-BNA-JAX-5,ERJ-175,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/55704058321,https://www.airlines-manager.com/aircraft/show/96421247,3:15,8:14,112,"$150,329.00","$132,337.00","$1,181.58","$26,555.92"
EWR - MKE,55714463631,E-BNA-JAX-4,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/55714463631,https://www.airlines-manager.com/aircraft/show/104610407,7:30,12:29,310,"$316,661.00","$288,776.00",$931.54,"$57,948.36"
EWR - MKE,55728562348,E-BNA-JAX-3,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/55728562348,https://www.airlines-manager.com/aircraft/show/104610408,14:00,18:59,310,"$316,661.00","$288,776.00",$931.54,"$57,948.36"
EWR - MKE,55738770132,E-BNA-JAX-2,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/55738770132,https://www.airlines-manager.com/aircraft/show/104610409,19:15,0:14,310,"$316,661.00","$288,776.00",$931.54,"$57,948.36"
EWR - MKE,55746468206,E-BNA-JAX-1,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/55746468206,https://www.airlines-manager.com/aircraft/show/104610410,23:15,4:14,310,"$316,661.00","$288,776.00",$931.54,"$57,948.36"
EWR - MSN,55704058229,E-RAP-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/55704058229,https://www.airlines-manager.com/aircraft/show/116042859,2:30,7:44,310,"$331,635.00","$304,391.00",$981.91,"$58,163.89"
EWR - MSN,55718008636,E-RAP-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/55718008636,https://www.airlines-manager.com/aircraft/show/116042860,8:45,13:59,310,"$331,635.00","$304,391.00",$981.91,"$58,163.89"
EWR - MSN,55721560611,E-RAP-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/55721560611,https://www.airlines-manager.com/aircraft/show/116042861,10:00,15:14,310,"$331,635.00","$304,391.00",$981.91,"$58,163.89"
EWR - MSN,55744388884,E-RAP-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/55744388884,https://www.airlines-manager.com/aircraft/show/116042862,21:00,2:14,310,"$331,635.00","$304,391.00",$981.91,"$58,163.89"
EWR - MSO,55704057971,E-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/55704057971,https://www.airlines-manager.com/aircraft/show/107161238,1:00,10:59,310,"$618,420.00","$573,473.00","$1,849.91","$57,443.04"
EWR - MSO,55721560747,E-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/55721560747,https://www.airlines-manager.com/aircraft/show/107161240,11:00,20:59,310,"$618,420.00","$573,473.00","$1,849.91","$57,443.04"
EWR - MSO,55732031800,E-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/55732031800,https://www.airlines-manager.com/aircraft/show/86782214,15:45,1:44,112,"$290,250.00","$259,767.00","$2,319.35","$26,020.07"
EWR - MSO,55735533048,E-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/55735533048,https://www.airlines-manager.com/aircraft/show/107161239,17:45,3:44,310,"$618,420.00","$573,473.00","$1,849.91","$57,443.04"
EWR - MSO,55744388966,E-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/55744388966,https://www.airlines-manager.com/aircraft/show/107161241,22:00,7:59,310,"$618,420.00","$573,473.00","$1,849.91","$57,443.04"
EWR - MSP,55708448910,E-DEN-SLC-3,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/55708448910,https://www.airlines-manager.com/aircraft/show/86270783,5:00,10:59,310,"$376,088.00","$336,853.00","$1,086.62","$56,298.55"
EWR - MSP,55721560565,E-DEN-SLC-5,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/55721560565,https://www.airlines-manager.com/aircraft/show/90452833,10:00,15:59,310,"$376,088.00","$336,853.00","$1,086.62","$56,298.55"
EWR - MSP,55721560566,E-DEN-SLC-6 B,A319-100,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/55721560566,https://www.airlines-manager.com/aircraft/show/105223076,11:00,16:59,198,"$284,972.00","$253,541.00","$1,280.51","$42,374.54"
EWR - MSP,55738770021,E-DEN-SLC-2,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/55738770021,https://www.airlines-manager.com/aircraft/show/87153196,18:15,0:14,310,"$376,088.00","$336,853.00","$1,086.62","$56,298.55"
EWR - MSP,55741695520,E-DEN-SLC-1,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/55741695520,https://www.airlines-manager.com/aircraft/show/86270785,19:45,1:44,310,"$376,088.00","$336,853.00","$1,086.62","$56,298.55"
EWR - MSP,55741695521,E-DEN-SLC-4,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/55741695521,https://www.airlines-manager.com/aircraft/show/90452835,20:45,2:44,310,"376,088$","336,853$","$1,086.62","$56,298.55"
EWR - MSY,55704058314,E-ABQ-AUS-1,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/55704058314,https://www.airlines-manager.com/aircraft/show/90717079,3:15,9:59,310,"$416,273.00","$381,522.00","$1,230.72","$56,661.68"
EWR - MSY,55721560567,E-ABQ-AUS-3,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/55721560567,https://www.airlines-manager.com/aircraft/show/90717077,10:00,16:44,310,"$416,273.00","$381,522.00","$1,230.72","$56,661.68"
EWR - MSY,55721560568,E-ABQ-AUS-4,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/55721560568,https://www.airlines-manager.com/aircraft/show/90717076,11:00,17:44,310,"$416,273.00","$381,522.00","$1,230.72","$56,661.68"
EWR - MSY,55738769983,E-ABQ-AUS-2,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/55738769983,https://www.airlines-manager.com/aircraft/show/90717078,18:00,0:44,310,"$416,273.00","$381,522.00","$1,230.72","$56,661.68"
EWR - MSY,55741695549,E-ABQ-AUS-5,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/55741695549,https://www.airlines-manager.com/aircraft/show/95950199,20:00,2:44,310,"$416,273.00","$381,522.00","$1,230.72","$56,661.68"
EWR - MTJ,55711311630,E-MTJ-ECP-4,737-900ER,https://www.airlines-manager.com/network/showline/50761177,https://www.airlines-manager.com/network/showflight/55711311630,https://www.airlines-manager.com/aircraft/show/120706943,6:00,14:59,320,"$565,136.00","$519,101.00","$1,622.19","$57,784.90"
EWR - MTJ,55721560559,E-MTJ-ECP-1,737-900ER,https://www.airlines-manager.com/network/showline/50761177,https://www.airlines-manager.com/network/showflight/55721560559,https://www.airlines-manager.com/aircraft/show/120706946,10:00,18:59,320,"$565,136.00","$519,101.00","$1,622.19","$57,784.90"
EWR - MTJ,55732031834,E-MTJ-ECP-3,737-900ER,https://www.airlines-manager.com/network/showline/50761177,https://www.airlines-manager.com/network/showflight/55732031834,https://www.airlines-manager.com/aircraft/show/120706944,16:00,0:59,320,"$565,136.00","$519,101.00","$1,622.19","$57,784.90"
EWR - MTJ,55744388949,E-MTJ-ECP-2,737-900ER,https://www.airlines-manager.com/network/showline/50761177,https://www.airlines-manager.com/network/showflight/55744388949,https://www.airlines-manager.com/aircraft/show/120706945,21:45,6:44,320,"$565,136.00","$519,101.00","$1,622.19","$57,784.90"
EWR - MUC,55704057770,E-56C-7 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/55704057770,https://www.airlines-manager.com/aircraft/show/106721562,0:00,16:29,598,"$2,049,665.00","$1,899,594.00","$3,176.58","$115,243.32"
EWR - MUC,55721560692,E-56C-1 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/55721560692,https://www.airlines-manager.com/aircraft/show/106721556,11:00,3:29,598,"$2,049,665.00","$1,899,594.00","$3,176.58","$115,243.32"
EWR - MUC,55738770034,E-56C-7 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/55738770034,https://www.airlines-manager.com/aircraft/show/106721562,18:30,10:59,598,"$2,049,665.00","$1,899,594.00","$3,176.58","$115,243.32"
EWR - MXP,55721560641,E-84B-7 B2,777-300,https://www.airlines-manager.com/network/showline/49921908,https://www.airlines-manager.com/network/showflight/55721560641,https://www.airlines-manager.com/aircraft/show/117958701,10:00,2:29,852,"$2,696,638.00","$2,451,348.00","$2,877.17","$148,716.76"
EWR - MXP,55744388977,E-84B-3  B2,777-300,https://www.airlines-manager.com/network/showline/49921908,https://www.airlines-manager.com/network/showflight/55744388977,https://www.airlines-manager.com/aircraft/show/117958697,22:00,14:29,852,"$2,696,638.00","$2,451,348.00","$2,877.17","$148,716.76"
EWR - MYR,55704058215,E-RDM-MAF-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761175,https://www.airlines-manager.com/network/showflight/55704058215,https://www.airlines-manager.com/aircraft/show/120706939,2:30,6:44,272,"$226,045.00","$207,541.00",$763.02,"$49,025.43"
EWR - MYR,55718008580,E-RDM-MAF-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761175,https://www.airlines-manager.com/network/showflight/55718008580,https://www.airlines-manager.com/aircraft/show/120706942,8:15,12:29,272,"$226,045.00","$207,541.00",$763.02,"$49,025.43"
EWR - MYR,55721560506,E-RDM-MAF-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761175,https://www.airlines-manager.com/network/showflight/55721560506,https://www.airlines-manager.com/aircraft/show/120706940,10:00,14:14,272,"$226,045.00","$207,541.00",$763.02,"$49,025.43"
EWR - MYR,55732031784,E-RDM-MAF-5 B,A319-100,https://www.airlines-manager.com/network/showline/50761175,https://www.airlines-manager.com/network/showflight/55732031784,https://www.airlines-manager.com/aircraft/show/120707022,15:30,19:44,198,"$189,562.00","$170,441.00",$860.81,"$40,261.65"
EWR - MYR,55738770030,E-RDM-MAF-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761175,https://www.airlines-manager.com/network/showflight/55738770030,https://www.airlines-manager.com/aircraft/show/120706941,18:30,22:44,272,"$226,045.00","$207,541.00",$763.02,"$49,025.43"
EWR - NAS,55708448924,E-TUS-TPA-1,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/55708448924,https://www.airlines-manager.com/aircraft/show/98379319,5:15,11:44,310,"$397,029.00","$364,028.00","$1,174.28","$56,148.28"
EWR - NAS,55728562237,E-TUS-TPA-3,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/55728562237,https://www.airlines-manager.com/aircraft/show/98379317,13:00,19:29,310,"$397,029.00","$364,028.00","$1,174.28","$56,148.28"
EWR - NAS,55738769985,E-TUS-TPA-4,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/55738769985,https://www.airlines-manager.com/aircraft/show/98379316,18:00,0:29,310,"$397,029.00","$364,028.00","$1,174.28","$56,148.28"
EWR - NAS,55738769986,E-TUS-TPA-2,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/55738769986,https://www.airlines-manager.com/aircraft/show/98379318,19:00,1:29,310,"$397,029.00","$364,028.00","$1,174.28","$56,148.28"
EWR - NAS,55744388879,E-TUS-TPA-5,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/55744388879,https://www.airlines-manager.com/aircraft/show/98379315,21:00,3:29,291,"$375,648.00","$343,361.00","$1,179.93","$52,960.57"
EWR - NRT,55704057825,E-56A-7 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/55704057825,https://www.airlines-manager.com/aircraft/show/106813013,0:00,2:14,748,"$4,002,745.00","$3,604,043.00","$4,818.24","$1,613,750.60"
EWR - NRT,55721560656,E-56A-3 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/55721560656,https://www.airlines-manager.com/aircraft/show/106813009,10:15,12:29,748,"$3,976,929.00","$3,587,310.00","$4,795.87","$1,606,258.21"
EWR - NRT,55735532946,E-56A-1 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/55735532946,https://www.airlines-manager.com/aircraft/show/106813007,16:45,18:59,748,"$3,579,904.00","$3,294,738.00","$4,404.73","$1,475,255.82"
EWR - OAK,55704057970,E-OAK-SJC-5,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/55704057970,https://www.airlines-manager.com/aircraft/show/104717239,1:00,12:59,310,"$739,348.00","$683,774.00","$2,205.72","$57,060.42"
EWR - OAK,55721560609,E-OAK-SJC-1,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/55721560609,https://www.airlines-manager.com/aircraft/show/104717243,10:00,21:59,310,"$739,348.00","$683,774.00","$2,205.72","$57,060.42"
EWR - OAK,55724951943,E-OAK-SJC-2,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/55724951943,https://www.airlines-manager.com/aircraft/show/104717242,12:00,23:59,310,"$739,348.00","$683,774.00","$2,205.72","$57,060.42"
EWR - OAK,55728562350,E-OAK-SJC-3,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/55728562350,https://www.airlines-manager.com/aircraft/show/104717241,14:00,1:59,310,"$739,348.00","$683,774.00","$2,205.72","$57,060.42"
EWR - OAK,55746468133,E-OAK-SJC-4,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/55746468133,https://www.airlines-manager.com/aircraft/show/104717240,22:30,10:29,310,"$739,348.00","$683,774.00","$2,205.72","$57,060.42"
EWR - OKC,55704058173,E-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/55704058173,https://www.airlines-manager.com/aircraft/show/86782214,1:45,8:59,112,"$218,318.00","$194,572.00","$1,737.25","$26,899.35"
EWR - OKC,55704058174,E-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/55704058174,https://www.airlines-manager.com/aircraft/show/107161239,3:45,10:59,310,"$462,867.00","$427,138.00","$1,377.86","$59,051.34"
EWR - OKC,55714463670,E-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/55714463670,https://www.airlines-manager.com/aircraft/show/107161241,8:00,15:14,310,"$462,867.00","$427,138.00","$1,377.86","$59,051.34"
EWR - OKC,55721560745,E-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/55721560745,https://www.airlines-manager.com/aircraft/show/107161238,11:00,18:14,310,"$462,867.00","$427,138.00","$1,377.86","$59,051.34"
EWR - OKC,55744388881,E-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/55744388881,https://www.airlines-manager.com/aircraft/show/107161240,21:00,4:14,310,"$462,867.00","$427,138.00","$1,377.86","$59,051.34"
EWR - OMA,55704058227,E-BOI-PBI-1,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/55704058227,https://www.airlines-manager.com/aircraft/show/104418460,2:30,8:59,310,"$403,514.00","$370,539.00","$1,195.29","$57,152.54"
EWR - OMA,55714463630,E-BOI-PBI-4,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/55714463630,https://www.airlines-manager.com/aircraft/show/104418463,7:30,13:59,310,"$403,514.00","$370,539.00","$1,195.29","$57,152.54"
EWR - OMA,55721560608,E-BOI-PBI-3,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/55721560608,https://www.airlines-manager.com/aircraft/show/104418462,10:00,16:29,310,"$403,514.00","$370,539.00","$1,195.29","$57,152.54"
EWR - OMA,55735532977,E-BOI-PBI-2,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/55735532977,https://www.airlines-manager.com/aircraft/show/104418461,17:00,23:29,310,"$403,514.00","$370,539.00","$1,195.29","$57,152.54"
EWR - OMA,55738770112,E-BOI-PBI-5 B,A319-100,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/55738770112,https://www.airlines-manager.com/aircraft/show/110582846,19:00,1:29,196,"$303,657.00","$277,300.00","$1,414.80","$42,771.21"
EWR - ONT,55704057791,E-SMF-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/55704057791,https://www.airlines-manager.com/aircraft/show/94889153,0:00,11:29,320,"$706,325.00","$647,621.00","$2,023.82","$56,396.60"
EWR - ONT,55704057792,E-SMF-ONT-5,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/55704057792,https://www.airlines-manager.com/aircraft/show/94889154,2:00,13:29,320,"$706,325.00","$647,621.00","$2,023.82","$56,396.60"
EWR - ONT,55724951895,E-SMF-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/55724951895,https://www.airlines-manager.com/aircraft/show/94889150,11:45,23:14,320,"$706,325.00","$647,621.00","$2,023.82","$56,396.60"
EWR - ONT,55728562279,E-SMF-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/55728562279,https://www.airlines-manager.com/aircraft/show/94889151,13:15,0:44,320,"$706,325.00","$647,621.00","$2,023.82","$56,396.60"
EWR - ONT,55732031676,E-SMF-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/55732031676,https://www.airlines-manager.com/aircraft/show/94889152,14:45,2:14,300,"$678,974.00","$621,564.00","$2,071.88","$54,127.49"
EWR - ORD,55708448902,E-MIA-ORD-2,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/55708448902,https://www.airlines-manager.com/aircraft/show/113251306,5:00,9:59,338,"$341,749.00","$294,714.00",$871.93,"$59,139.93"
EWR - ORD,55721560647,E-MIA-ORD-1,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/55721560647,https://www.airlines-manager.com/aircraft/show/113251305,10:15,15:14,338,"$341,749.00","$294,714.00",$871.93,"$59,139.93"
EWR - ORD,55724951883,E-MIA-ORD-3,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/55724951883,https://www.airlines-manager.com/aircraft/show/113251307,11:30,16:29,338,"$341,749.00","$294,714.00",$871.93,"$59,139.93"
EWR - ORD,55735532996,E-MIA-ORD-4,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/55735532996,https://www.airlines-manager.com/aircraft/show/113251308,17:15,22:14,338,"$341,749.00","$294,714.00",$871.93,"$59,139.93"
EWR - ORD,55744388917,E-MIA-ORD-5,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/55744388917,https://www.airlines-manager.com/aircraft/show/113251309,21:30,2:29,338,"$341,749.00","$294,714.00",$871.93,"$59,139.93"
EWR - ORF,55704058197,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/55704058197,https://www.airlines-manager.com/aircraft/show/88494375,2:15,5:29,320,"$153,803.00","$130,253.00",$407.04,"$40,284.43"
EWR - ORF,55721560765,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/55721560765,https://www.airlines-manager.com/aircraft/show/106104450,11:00,14:14,112,"$70,512.00","$57,910.00",$517.05,"$17,910.31"
EWR - ORF,55728562390,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/55728562390,https://www.airlines-manager.com/aircraft/show/105731236,14:15,17:29,320,"$153,803.00","$130,253.00",$407.04,"$40,284.43"
EWR - ORF,55738769974,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/55738769974,https://www.airlines-manager.com/aircraft/show/88494376,18:00,21:14,320,"$153,803.00","$130,253.00",$407.04,"$40,284.43"
EWR - ORF,55744388941,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/55744388941,https://www.airlines-manager.com/aircraft/show/88494377,21:45,0:59,320,"$153,803.00","$130,253.00",$407.04,"$40,284.43"
EWR - OSL,55704058308,E-56D-2 E,787-10,https://www.airlines-manager.com/network/showline/50072202,https://www.airlines-manager.com/network/showflight/55704058308,https://www.airlines-manager.com/aircraft/show/118644437,3:15,18:29,648,"$1,894,675.00","$1,766,526.00","$2,726.12","$115,964.51"
EWR - OSL,55708448884,E-56D-4 E,787-10,https://www.airlines-manager.com/network/showline/50072202,https://www.airlines-manager.com/network/showflight/55708448884,https://www.airlines-manager.com/aircraft/show/118644439,4:45,19:59,648,"$1,894,675.00","$1,766,526.00","$2,726.12","$115,964.51"
EWR - OSL,55741695541,E-56D-4 E,787-10,https://www.airlines-manager.com/network/showline/50072202,https://www.airlines-manager.com/network/showflight/55741695541,https://www.airlines-manager.com/aircraft/show/118644439,20:00,11:14,648,"$1,894,675.00","$1,766,526.00","$2,726.12","$115,964.51"
EWR - PBI,55704058041,E-BOI-PBI-4,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/55704058041,https://www.airlines-manager.com/aircraft/show/104418463,1:30,7:29,310,"$380,892.00","$348,451.00","$1,124.04","$58,236.94"
EWR - PBI,55704058042,E-BOI-PBI-3,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/55704058042,https://www.airlines-manager.com/aircraft/show/104418462,3:00,8:59,310,"$380,892.00","$348,451.00","$1,124.04","$58,236.94"
EWR - PBI,55721560740,E-BOI-PBI-2,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/55721560740,https://www.airlines-manager.com/aircraft/show/104418461,11:00,16:59,310,"$380,892.00","$348,451.00","$1,124.04","$58,236.94"
EWR - PBI,55728562267,E-BOI-PBI-5 B,A319-100,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/55728562267,https://www.airlines-manager.com/aircraft/show/110582846,13:00,18:59,198,"$288,248.00","$262,252.00","$1,324.51","$43,830.42"
EWR - PBI,55741695611,E-BOI-PBI-1,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/55741695611,https://www.airlines-manager.com/aircraft/show/104418460,20:30,2:29,310,"$380,892.00","$348,451.00","$1,124.04","$58,236.94"
EWR - PDX,55704057764,E-PHX-PDX-3,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/55704057764,https://www.airlines-manager.com/aircraft/show/113595213,0:00,11:29,338,"$761,524.00","$708,817.00","$2,097.09","$61,725.72"
EWR - PDX,55704057765,E-PHX-PDX-4,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/55704057765,https://www.airlines-manager.com/aircraft/show/113595214,2:00,13:29,338,"$761,524.00","$708,817.00","$2,097.09","$61,725.72"
EWR - PDX,55708448903,E-PHX-PDX-5,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/55708448903,https://www.airlines-manager.com/aircraft/show/113595215,5:00,16:29,338,"$761,524.00","$708,817.00","$2,097.09","$61,725.72"
EWR - PDX,55711311664,E-PHX-PDX-6 B,A319-100,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/55711311664,https://www.airlines-manager.com/aircraft/show/99219630,6:30,17:59,198,"$528,797.00","$484,100.00","$2,444.95","$42,156.75"
EWR - PDX,55721560648,E-PHX-PDX-1,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/55721560648,https://www.airlines-manager.com/aircraft/show/113595211,10:15,21:44,338,"$761,524.00","$708,817.00","$2,097.09","$61,725.72"
EWR - PDX,55724951968,E-PHX-PDX-2,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/55724951968,https://www.airlines-manager.com/aircraft/show/113595212,12:15,23:44,307,"$718,789.00","$667,798.00","$2,175.24","$58,153.67"
EWR - PHX,55704057762,E-PHX-PDX-1,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/55704057762,https://www.airlines-manager.com/aircraft/show/113595211,0:00,10:14,338,"$707,316.00","$649,946.00","$1,922.92","$63,512.64"
EWR - PHX,55704057763,E-PHX-PDX-2,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/55704057763,https://www.airlines-manager.com/aircraft/show/113595212,2:00,12:14,338,"$707,316.00","$649,946.00","$1,922.92","$63,512.64"
EWR - PHX,55724951884,E-PHX-PDX-3,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/55724951884,https://www.airlines-manager.com/aircraft/show/113595213,11:30,21:44,338,"$707,316.00","$649,946.00","$1,922.92","$63,512.64"
EWR - PHX,55728562284,E-PHX-PDX-4,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/55728562284,https://www.airlines-manager.com/aircraft/show/113595214,13:30,23:44,338,"$707,316.00","$649,946.00","$1,922.92","$63,512.64"
EWR - PHX,55735532914,E-PHX-PDX-5,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/55735532914,https://www.airlines-manager.com/aircraft/show/113595215,16:30,2:44,338,"$707,316.00","$649,946.00","$1,922.92","$63,512.64"
EWR - PHX,55738769999,E-PHX-PDX-6 B,A319-100,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/55738769999,https://www.airlines-manager.com/aircraft/show/99219630,18:00,4:29,198,"$491,654.00","$443,539.00","$2,240.10","$42,308.97"
EWR - PIT,55708448770,E-STL-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/55708448770,https://www.airlines-manager.com/aircraft/show/98887257,4:15,7:29,112,"$77,669.00","$63,309.00",$565.26,"$19,580.10"
EWR - PIT,55711311655,E-STL-PIT-3,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/55711311655,https://www.airlines-manager.com/aircraft/show/115400546,6:30,9:44,338,"$182,949.00","$160,337.00",$474.37,"$49,588.76"
EWR - PIT,55721560516,E-STL-PIT-2,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/55721560516,https://www.airlines-manager.com/aircraft/show/115400547,10:00,13:14,338,"$182,949.00","$160,337.00",$474.37,"$49,588.76"
EWR - PIT,55728562169,E-STL-PIT-4,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/55728562169,https://www.airlines-manager.com/aircraft/show/115400545,13:00,16:14,338,"$182,949.00","$160,337.00",$474.37,"$49,588.76"
EWR - PIT,55732031773,E-STL-PIT-1,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/55732031773,https://www.airlines-manager.com/aircraft/show/115400548,15:30,18:44,338,"$182,949.00","$160,337.00",$474.37,"$49,588.76"
EWR - PIT,55741695508,E-STL-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/55741695508,https://www.airlines-manager.com/aircraft/show/98887257,19:30,22:44,112,"$77,669.00","$63,309.00",$565.26,"$19,580.10"
EWR - PRG,55721560657,E-84B-2  B2,777-300,https://www.airlines-manager.com/network/showline/44327652,https://www.airlines-manager.com/network/showflight/55721560657,https://www.airlines-manager.com/aircraft/show/117958696,10:15,2:59,852,"$2,750,049.00","$2,506,567.00","$2,941.98","$149,794.84"
EWR - PRG,55744389006,E-84B-5  B2,777-300,https://www.airlines-manager.com/network/showline/44327652,https://www.airlines-manager.com/network/showflight/55744389006,https://www.airlines-manager.com/aircraft/show/117958699,22:15,14:59,852,"$2,750,049.00","$2,506,567.00","$2,941.98","$149,794.84"
EWR - PSP,55704057878,E-PSP-FAT-4,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/55704057878,https://www.airlines-manager.com/aircraft/show/116672810,0:30,11:44,338,"$760,434.00","$712,970.00","$2,109.38","$63,469.14"
EWR - PSP,55721560689,E-PSP-FAT-1,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/55721560689,https://www.airlines-manager.com/aircraft/show/119220450,11:00,22:14,338,"$760,434.00","$712,970.00","$2,109.38","$63,469.14"
EWR - PSP,55728562171,E-PSP-FAT-2,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/55728562171,https://www.airlines-manager.com/aircraft/show/119220451,13:00,0:14,338,"$760,434.00","$712,970.00","$2,109.38","$63,469.14"
EWR - PSP,55746468115,E-PSP-FAT-3,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/55746468115,https://www.airlines-manager.com/aircraft/show/119220452,22:30,9:44,338,"$760,434.00","$712,970.00","$2,109.38","$63,469.14"
EWR - PVD,55704058045,E-TUL-DSM-4,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/55704058045,https://www.airlines-manager.com/aircraft/show/110044466,1:30,4:14,310,"$99,383.00","$81,748.00",$263.70,"$29,907.80"
EWR - PVD,55718008669,E-TUL-DSM-3,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/55718008669,https://www.airlines-manager.com/aircraft/show/110044465,9:15,11:59,310,"$99,383.00","$81,748.00",$263.70,"$29,907.80"
EWR - PVD,55721560753,E-TUL-DSM-2,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/55721560753,https://www.airlines-manager.com/aircraft/show/110044464,11:00,13:44,310,"$99,383.00","$81,748.00",$263.70,"$29,907.80"
EWR - PVD,55741695524,E-TUL-DSM-1,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/55741695524,https://www.airlines-manager.com/aircraft/show/110044463,19:45,22:29,310,"$99,383.00","$81,748.00",$263.70,"$29,907.80"
EWR - PVD,55746468214,E-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/55746468214,https://www.airlines-manager.com/aircraft/show/110113039,23:15,1:59,112,"$42,644.00","$31,786.00",$283.80,"$11,629.02"
EWR - PWM,55708448875,E-TUL-DSM-1,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/55708448875,https://www.airlines-manager.com/aircraft/show/110044463,4:30,7:44,310,"$154,650.00","$135,600.00",$437.42,"$41,938.14"
EWR - PWM,55718008642,E-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/55718008642,https://www.airlines-manager.com/aircraft/show/110113039,8:45,11:59,112,"$70,248.00","$58,322.00",$520.73,"$18,037.73"
EWR - PWM,55721560754,E-TUL-DSM-4,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/55721560754,https://www.airlines-manager.com/aircraft/show/110044466,11:00,14:14,310,"154,650$","135,600$",$437.42,"$41,938.14"
EWR - PWM,55738769992,E-TUL-DSM-3,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/55738769992,https://www.airlines-manager.com/aircraft/show/110044465,18:00,21:14,310,"$154,650.00","$135,600.00",$437.42,"$41,938.14"
EWR - PWM,55741695525,E-TUL-DSM-2,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/55741695525,https://www.airlines-manager.com/aircraft/show/110044464,19:45,22:59,301,"$152,022.00","$133,042.00",$442.00,"$41,147.01"
EWR - RAP,55704057808,E-RAP-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/55704057808,https://www.airlines-manager.com/aircraft/show/116042860,0:00,7:59,310,"$497,396.00","$460,380.00","$1,485.10","$57,667.64"
EWR - RAP,55704057809,E-RAP-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/55704057809,https://www.airlines-manager.com/aircraft/show/116042861,1:15,9:14,310,"$497,396.00","$460,380.00","$1,485.10","$57,667.64"
EWR - RAP,55728562258,E-RAP-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/55728562258,https://www.airlines-manager.com/aircraft/show/116042862,13:00,20:59,310,"$497,396.00","$460,380.00","$1,485.10","$57,667.64"
EWR - RAP,55738770049,E-RAP-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/55738770049,https://www.airlines-manager.com/aircraft/show/116042859,18:30,2:29,310,"$497,396.00","$460,380.00","$1,485.10","$57,667.64"
EWR - RDM,55714463566,E-RDM-MAF-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761172,https://www.airlines-manager.com/network/showflight/55714463566,https://www.airlines-manager.com/aircraft/show/120706939,6:45,17:59,272,"$630,804.00","$594,301.00","$2,184.93","$52,905.13"
EWR - RDM,55724951973,E-RDM-MAF-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761172,https://www.airlines-manager.com/network/showflight/55724951973,https://www.airlines-manager.com/aircraft/show/120706942,12:30,23:44,272,"$630,804.00","$594,301.00","$2,184.93","$52,905.13"
EWR - RDM,55728562383,E-RDM-MAF-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761172,https://www.airlines-manager.com/network/showflight/55728562383,https://www.airlines-manager.com/aircraft/show/120706940,14:15,1:29,272,"$630,804.00","$594,301.00","$2,184.93","$52,905.13"
EWR - RDM,55741695531,E-RDM-MAF-5 B,A319-100,https://www.airlines-manager.com/network/showline/50761172,https://www.airlines-manager.com/network/showflight/55741695531,https://www.airlines-manager.com/aircraft/show/120707022,19:45,6:59,198,"$524,065.00","$484,903.00","$2,449.01","$43,166.44"
EWR - RDM,55746468141,E-RDM-MAF-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761172,https://www.airlines-manager.com/network/showflight/55746468141,https://www.airlines-manager.com/aircraft/show/120706941,22:45,9:59,272,"$630,804.00","$594,301.00","$2,184.93","$52,905.13"
EWR - RDU,55704057996,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/55704057996,https://www.airlines-manager.com/aircraft/show/105731236,1:15,4:59,320,"$201,380.00","$173,412.00",$541.91,"$46,449.64"
EWR - RDU,55708448904,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/55708448904,https://www.airlines-manager.com/aircraft/show/88494376,5:00,8:44,320,"201,380$","173,412$",$541.91,"$46,449.64"
EWR - RDU,55721560702,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/55721560702,https://www.airlines-manager.com/aircraft/show/88494377,11:00,14:44,320,"$201,380.00","$173,412.00",$541.91,"$46,449.64"
EWR - RDU,55732031776,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/55732031776,https://www.airlines-manager.com/aircraft/show/88494375,15:30,19:14,320,"$201,380.00","$173,412.00",$541.91,"$46,449.64"
EWR - RDU,55744388981,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/55744388981,https://www.airlines-manager.com/aircraft/show/106104450,22:00,1:44,112,"$93,326.00","$78,129.00",$697.58,"$20,927.41"
EWR - RIC,55704057956,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/55704057956,https://www.airlines-manager.com/aircraft/show/88494377,1:00,4:14,320,"$139,657.00","$116,236.00",$363.24,"$35,949.28"
EWR - RIC,55711311584,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/55711311584,https://www.airlines-manager.com/aircraft/show/88494375,5:30,8:44,320,"$139,657.00","$116,236.00",$363.24,"$35,949.28"
EWR - RIC,55728562399,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/55728562399,https://www.airlines-manager.com/aircraft/show/106104450,14:15,17:29,112,"$62,868.00","$50,351.00",$449.56,"$15,572.47"
EWR - RIC,55735533020,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/55735533020,https://www.airlines-manager.com/aircraft/show/105731236,17:30,20:44,320,"$139,657.00","$116,236.00",$363.24,"$35,949.28"
EWR - RIC,55744388896,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/55744388896,https://www.airlines-manager.com/aircraft/show/88494376,21:15,0:29,320,"$139,657.00","$116,236.00",$363.24,"$35,949.28"
EWR - RNO,55704058194,E-RNO-MEM-5 B,A319-100,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/55704058194,https://www.airlines-manager.com/aircraft/show/100096560,2:00,13:29,198,"$532,092.00","$490,305.00","$2,476.29","$42,697.10"
EWR - RNO,55721560651,E-RNO-MEM-1,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/55721560651,https://www.airlines-manager.com/aircraft/show/99920622,10:15,21:29,320,"$706,113.00","$649,153.00","$2,028.60","$57,788.10"
EWR - RNO,55728562316,E-RNO-MEM-4,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/55728562316,https://www.airlines-manager.com/aircraft/show/99920619,14:00,1:14,320,"$706,113.00","$649,153.00","$2,028.60","$57,788.10"
EWR - RNO,55735532917,E-RNO-MEM-3,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/55735532917,https://www.airlines-manager.com/aircraft/show/99920620,16:30,3:44,320,"$706,113.00","$649,153.00","$2,028.60","$57,788.10"
EWR - RNO,55744388989,E-RNO-MEM-2,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/55744388989,https://www.airlines-manager.com/aircraft/show/99920621,22:15,9:29,320,"$706,113.00","$649,153.00","$2,028.60","$57,788.10"
EWR - ROC,55721560622,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/55721560622,https://www.airlines-manager.com/aircraft/show/119220545,10:00,12:59,310,"$135,540.00","$116,530.00",$375.90,"$39,060.34"
EWR - ROC,55728562402,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/55728562402,https://www.airlines-manager.com/aircraft/show/119220544,14:30,17:29,310,"$135,540.00","$116,530.00",$375.90,"$39,060.34"
EWR - ROC,55738770026,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/55738770026,https://www.airlines-manager.com/aircraft/show/119220543,18:15,21:14,310,"$135,540.00","$116,530.00",$375.90,"$39,060.34"
EWR - ROC,55746468166,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/55746468166,https://www.airlines-manager.com/aircraft/show/119220542,22:45,1:44,310,"$135,540.00","$116,530.00",$375.90,"$39,060.34"
EWR - RSW,55704058309,E-RNO-MEM-1,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/55704058309,https://www.airlines-manager.com/aircraft/show/99920622,3:15,9:29,320,"$390,547.00","$351,777.00","$1,099.30","$56,434.81"
EWR - RSW,55714463596,E-RNO-MEM-4,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/55714463596,https://www.airlines-manager.com/aircraft/show/99920619,7:00,13:14,320,"$390,547.00","$351,777.00","$1,099.30","$56,434.81"
EWR - RSW,55721560649,E-RNO-MEM-3,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/55721560649,https://www.airlines-manager.com/aircraft/show/99920620,10:15,16:29,320,"$390,547.00","$351,777.00","$1,099.30","$56,434.81"
EWR - RSW,55728562373,E-RNO-MEM-5 B,A319-100,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/55728562373,https://www.airlines-manager.com/aircraft/show/100096560,14:00,20:14,198,"$295,991.00","$268,432.00","$1,355.72","$43,063.96"
EWR - RSW,55732031819,E-RNO-MEM-2,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/55732031819,https://www.airlines-manager.com/aircraft/show/99920621,16:00,22:14,320,"$390,547.00","$351,777.00","$1,099.30","$56,434.81"
EWR - SAN,55704057761,E-MIA-ORD-3,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/55704057761,https://www.airlines-manager.com/aircraft/show/113251307,0:00,11:29,338,"$779,172.00","$726,876.00","$2,150.52","$63,298.35"
EWR - SAN,55721560514,E-MIA-ORD-5,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/55721560514,https://www.airlines-manager.com/aircraft/show/113251309,10:00,21:29,338,"$779,172.00","$726,876.00","$2,150.52","$63,298.35"
EWR - SAN,55732031764,E-MIA-ORD-1,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/55732031764,https://www.airlines-manager.com/aircraft/show/113251305,15:15,2:44,338,"$779,172.00","$726,876.00","$2,150.52","$63,298.35"
EWR - SAN,55735532898,E-MIA-ORD-2,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/55735532898,https://www.airlines-manager.com/aircraft/show/113251306,16:15,3:44,338,"$779,172.00","$726,876.00","$2,150.52","$63,298.35"
EWR - SAN,55744388982,E-MIA-ORD-4,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/55744388982,https://www.airlines-manager.com/aircraft/show/113251308,22:15,9:44,338,"$779,172.00","$726,876.00","$2,150.52","$63,298.35"
EWR - SAT,55704058066,E-ELP-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/55704058066,https://www.airlines-manager.com/aircraft/show/103365576,1:45,9:59,320,"$519,976.00","$476,182.00","$1,488.07","$57,835.87"
EWR - SAT,55721560541,E-ELP-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/55721560541,https://www.airlines-manager.com/aircraft/show/103365577,10:00,18:14,320,"$519,976.00","$476,182.00","$1,488.07","$57,835.87"
EWR - SAT,55724951956,E-ELP-SAT-5 B,A319-100,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/55724951956,https://www.airlines-manager.com/aircraft/show/110582847,12:00,20:14,198,"$392,241.00","$360,537.00","$1,820.89","$43,789.92"
EWR - SAT,55741695489,E-ELP-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/55741695489,https://www.airlines-manager.com/aircraft/show/103365578,19:30,3:44,320,"$519,976.00","$476,182.00","$1,488.07","$57,835.87"
EWR - SAT,55744388922,E-ELP-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/55744388922,https://www.airlines-manager.com/aircraft/show/103365575,21:30,5:44,320,"$519,976.00","$476,182.00","$1,488.07","$57,835.87"
EWR - SAV,55708448879,E-COS-ICT-5,ERJ-175,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/55708448879,https://www.airlines-manager.com/aircraft/show/108466265,4:30,9:29,112,"$146,760.00","$129,843.00","$1,159.31","$26,055.45"
EWR - SAV,55718008653,E-COS-ICT-3,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/55718008653,https://www.airlines-manager.com/aircraft/show/108834810,9:00,13:59,310,"$308,702.00","$282,567.00",$911.51,"$56,702.41"
EWR - SAV,55721560752,E-COS-ICT-2,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/55721560752,https://www.airlines-manager.com/aircraft/show/108834809,11:00,15:59,310,"$308,702.00","$282,567.00",$911.51,"$56,702.41"
EWR - SAV,55738769991,E-COS-ICT-1,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/55738769991,https://www.airlines-manager.com/aircraft/show/108834808,18:00,22:59,310,"$308,702.00","$282,567.00",$911.51,"$56,702.41"
EWR - SAV,55741695554,E-COS-ICT-4,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/55741695554,https://www.airlines-manager.com/aircraft/show/108834811,20:00,0:59,260,"$279,561.00","$254,397.00",$978.45,"$51,049.57"
EWR - SDF,55708448721,E-LIT-FAR-2,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/55708448721,https://www.airlines-manager.com/aircraft/show/86270787,4:00,8:29,310,"$296,515.00","$269,422.00",$869.10,"$60,094.13"
EWR - SDF,55718008585,E-LIT-FAR-1,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/55718008585,https://www.airlines-manager.com/aircraft/show/90452834,8:15,12:44,310,"$296,515.00","$269,422.00",$869.10,"$60,094.13"
EWR - SDF,55732031723,E-LIT-FAR-4,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/55732031723,https://www.airlines-manager.com/aircraft/show/86270784,15:00,19:29,310,"$296,515.00","$269,422.00",$869.10,"$60,094.13"
EWR - SDF,55738770020,E-LIT-FAR-3,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/55738770020,https://www.airlines-manager.com/aircraft/show/86270786,18:15,22:44,310,"$296,515.00","$269,422.00",$869.10,"$60,094.13"
EWR - SEA,55704057951,E-DFW-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/55704057951,https://www.airlines-manager.com/aircraft/show/86238752,1:00,12:14,320,"$713,191.00","$644,122.00","$2,012.88","$57,340.24"
EWR - SEA,55704057952,E-DFW-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/55704057952,https://www.airlines-manager.com/aircraft/show/90489726,3:00,14:14,320,"$713,191.00","$644,122.00","$2,012.88","$57,340.24"
EWR - SEA,55721560698,E-DFW-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/55721560698,https://www.airlines-manager.com/aircraft/show/86238753,11:00,22:14,320,"$713,191.00","$644,122.00","$2,012.88","$57,340.24"
EWR - SEA,55732031707,E-DFW-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/55732031707,https://www.airlines-manager.com/aircraft/show/90489724,15:00,2:14,320,"$713,191.00","$644,122.00","$2,012.88","$57,340.24"
EWR - SEA,55746468146,E-DFW-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/55746468146,https://www.airlines-manager.com/aircraft/show/90489725,22:45,9:59,320,"$713,191.00","$644,122.00","$2,012.88","$57,340.24"
EWR - SEA,55746468147,E-DFW-ATL-6 B,A319-100,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/55746468147,https://www.airlines-manager.com/aircraft/show/105222360,23:30,10:59,198,"$537,220.00","$487,342.00","$2,461.32","$42,439.07"
EWR - SFO,55704057772,E-SFO-LAX-1,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/55704057772,https://www.airlines-manager.com/aircraft/show/83716137,0:00,11:44,400,"$949,362.00","$864,753.00","$2,161.88","$73,700.54"
EWR - SFO,55704057773,E-SFO-LAX-2,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/55704057773,https://www.airlines-manager.com/aircraft/show/89233028,1:30,13:14,400,"$949,362.00","$864,753.00","$2,161.88","$73,700.54"
EWR - SFO,55704057774,E-SFO-LAX-3,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/55704057774,https://www.airlines-manager.com/aircraft/show/89233029,3:00,14:44,400,"$949,362.00","$864,753.00","$2,161.88","$73,700.54"
EWR - SFO,55724951969,E-SFO-LAX-4,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/55724951969,https://www.airlines-manager.com/aircraft/show/89233030,12:15,23:59,400,"$949,362.00","$864,753.00","$2,161.88","$73,700.54"
EWR - SFO,55728562385,E-SFO-LAX-5,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/55728562385,https://www.airlines-manager.com/aircraft/show/89233027,14:15,1:59,400,"$949,362.00","$864,753.00","$2,161.88","$73,700.54"
EWR - SJC,55704057804,E-OAK-SJC-2,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/55704057804,https://www.airlines-manager.com/aircraft/show/104717242,0:00,11:59,310,"$736,357.00","$680,407.00","$2,194.86","$56,779.44"
EWR - SJC,55704057805,E-OAK-SJC-3,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/55704057805,https://www.airlines-manager.com/aircraft/show/104717241,2:00,13:59,310,"$736,357.00","$680,407.00","$2,194.86","$56,779.44"
EWR - SJC,55721560667,E-OAK-SJC-4,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/55721560667,https://www.airlines-manager.com/aircraft/show/104717240,10:30,22:29,310,"$736,357.00","$680,407.00","$2,194.86","$56,779.44"
EWR - SJC,55728562249,E-OAK-SJC-5,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/55728562249,https://www.airlines-manager.com/aircraft/show/104717239,13:00,0:59,310,"$736,357.00","$680,407.00","$2,194.86","$56,779.44"
EWR - SJC,55744388964,E-OAK-SJC-1,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/55744388964,https://www.airlines-manager.com/aircraft/show/104717243,22:00,9:59,310,"$736,357.00","$680,407.00","$2,194.86","$56,779.44"
EWR - SJU,55704057885,E-CUN-SJU-1,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/55704057885,https://www.airlines-manager.com/aircraft/show/106581304,0:30,8:44,320,"$528,828.00","$482,931.00","$1,509.16","$58,655.59"
EWR - SJU,55704057886,E-CUN-SJU-4,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/55704057886,https://www.airlines-manager.com/aircraft/show/106581307,2:00,10:14,320,"$528,828.00","$482,931.00","$1,509.16","$58,655.59"
EWR - SJU,55714463593,E-CUN-SJU-5,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/55714463593,https://www.airlines-manager.com/aircraft/show/86238754,7:00,15:14,320,"$528,828.00","$482,931.00","$1,509.16","$58,655.59"
EWR - SJU,55728562204,E-CUN-SJU-3,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/55728562204,https://www.airlines-manager.com/aircraft/show/106581306,13:00,21:14,320,"$528,828.00","$482,931.00","$1,509.16","$58,655.59"
EWR - SJU,55728562205,E-CUN-SJU-2,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/55728562205,https://www.airlines-manager.com/aircraft/show/106581305,14:30,22:44,320,"$528,828.00","$482,931.00","$1,509.16","$58,655.59"
EWR - SLC,55704057863,E-DEN-SLC-2,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/55704057863,https://www.airlines-manager.com/aircraft/show/87153196,0:15,9:59,310,"$614,239.00","$562,310.00","$1,813.90","$57,771.58"
EWR - SLC,55704057864,E-DEN-SLC-5,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/55704057864,https://www.airlines-manager.com/aircraft/show/90452833,0:15,9:59,310,"$614,239.00","$562,310.00","$1,813.90","$57,771.58"
EWR - SLC,55704057865,E-DEN-SLC-6 B,A319-100,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/55704057865,https://www.airlines-manager.com/aircraft/show/105223076,1:15,10:59,198,"$461,814.00","$420,187.00","$2,122.16","$43,169.90"
EWR - SLC,55721560560,E-DEN-SLC-1,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/55721560560,https://www.airlines-manager.com/aircraft/show/86270785,10:00,19:44,310,"$614,239.00","$562,310.00","$1,813.90","$57,771.58"
EWR - SLC,55721560561,E-DEN-SLC-4,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/55721560561,https://www.airlines-manager.com/aircraft/show/90452835,11:00,20:44,310,"$614,239.00","$562,310.00","$1,813.90","$57,771.58"
EWR - SLC,55738770124,E-DEN-SLC-3,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/55738770124,https://www.airlines-manager.com/aircraft/show/86270783,19:15,4:59,310,"$614,239.00","$562,310.00","$1,813.90","$57,771.58"
EWR - SMF,55704057788,E-SMF-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/55704057788,https://www.airlines-manager.com/aircraft/show/94889150,0:00,11:44,320,"$720,802.00","$662,355.00","$2,069.86","$56,450.71"
EWR - SMF,55704057789,E-SMF-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/55704057789,https://www.airlines-manager.com/aircraft/show/94889151,1:30,13:14,320,"$720,802.00","$662,355.00","$2,069.86","$56,450.71"
EWR - SMF,55704057790,E-SMF-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/55704057790,https://www.airlines-manager.com/aircraft/show/94889152,3:00,14:44,320,"$720,802.00","$662,355.00","$2,069.86","$56,450.71"
EWR - SMF,55724951885,E-SMF-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/55724951885,https://www.airlines-manager.com/aircraft/show/94889153,11:30,23:14,320,"$720,802.00","$662,355.00","$2,069.86","$56,450.71"
EWR - SMF,55728562286,E-SMF-ONT-5,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/55728562286,https://www.airlines-manager.com/aircraft/show/94889154,13:30,1:14,320,"$720,802.00","$662,355.00","$2,069.86","$56,450.71"
EWR - SNN,55721560675,E-56B-6 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/55721560675,https://www.airlines-manager.com/aircraft/show/94521248,10:45,23:59,748,"$2,089,804.00","$1,906,543.00","$2,548.85","$144,071.26"
EWR - SNN,55738770084,E-56B-5 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/55738770084,https://www.airlines-manager.com/aircraft/show/94521253,18:45,7:59,748,"$2,003,611.00","$1,846,437.00","$2,468.50","$139,529.24"
EWR - SRQ,55704057929,E-MTJ-ECP-1,737-900ER,https://www.airlines-manager.com/network/showline/50761179,https://www.airlines-manager.com/network/showflight/55704057929,https://www.airlines-manager.com/aircraft/show/120706946,0:45,6:44,320,"$383,317.00","$348,639.00","$1,089.50","$58,268.36"
EWR - SRQ,55721560557,E-MTJ-ECP-3,737-900ER,https://www.airlines-manager.com/network/showline/50761179,https://www.airlines-manager.com/network/showflight/55721560557,https://www.airlines-manager.com/aircraft/show/120706944,10:00,15:59,320,"$383,317.00","$348,639.00","$1,089.50","$58,268.36"
EWR - SRQ,55732031787,E-MTJ-ECP-2,737-900ER,https://www.airlines-manager.com/network/showline/50761179,https://www.airlines-manager.com/network/showflight/55732031787,https://www.airlines-manager.com/aircraft/show/120706945,15:45,21:44,320,"$383,317.00","$348,639.00","$1,089.50","$58,268.36"
EWR - SRQ,55741695632,E-MTJ-ECP-4,737-900ER,https://www.airlines-manager.com/network/showline/50761179,https://www.airlines-manager.com/network/showflight/55741695632,https://www.airlines-manager.com/aircraft/show/120706943,20:45,2:44,295,"$365,019.00","$331,037.00","$1,122.16","$55,326.52"
EWR - STL,55704057944,E-STL-PIT-3,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/55704057944,https://www.airlines-manager.com/aircraft/show/115400546,1:00,6:29,338,"$374,524.00","$343,529.00","$1,016.36","$62,649.67"
EWR - STL,55708448738,E-STL-PIT-2,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/55708448738,https://www.airlines-manager.com/aircraft/show/115400547,4:15,9:44,338,"$374,524.00","$343,529.00","$1,016.36","$62,649.67"
EWR - STL,55721560517,E-STL-PIT-1,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/55721560517,https://www.airlines-manager.com/aircraft/show/115400548,10:00,15:29,338,"$374,524.00","$343,529.00","$1,016.36","$62,649.67"
EWR - STL,55728562382,E-STL-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/55728562382,https://www.airlines-manager.com/aircraft/show/98887257,14:00,19:29,112,"$163,834.00","$143,067.00","$1,277.38","$26,091.25"
EWR - STL,55735532899,E-STL-PIT-4,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/55735532899,https://www.airlines-manager.com/aircraft/show/115400545,16:15,21:44,338,"$374,524.00","$343,529.00","$1,016.36","$62,649.67"
EWR - STL,55746468170,E-STL-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/55746468170,https://www.airlines-manager.com/aircraft/show/98887257,22:45,4:14,112,"$163,834.00","$143,067.00","$1,277.38","$26,091.25"
EWR - SYR,55704058164,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/55704058164,https://www.airlines-manager.com/aircraft/show/119220542,1:45,4:44,310,"$125,306.00","$106,702.00",$344.20,"$35,766.03"
EWR - SYR,55728562260,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/55728562260,https://www.airlines-manager.com/aircraft/show/119220545,13:00,15:59,310,"$125,306.00","$106,702.00",$344.20,"$35,766.03"
EWR - SYR,55735533027,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/55735533027,https://www.airlines-manager.com/aircraft/show/119220544,17:30,20:29,310,"$125,306.00","$106,702.00",$344.20,"$35,766.03"
EWR - SYR,55744388909,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/55744388909,https://www.airlines-manager.com/aircraft/show/119220543,21:15,0:14,310,"$125,306.00","$106,702.00",$344.20,"$35,766.03"
EWR - TLV,55704058300,E-TLV-2 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/55704058300,https://www.airlines-manager.com/aircraft/show/89124073,3:00,1:29,884,"$3,672,705.00","$3,353,356.00","$3,793.39","$149,148.52"
EWR - TLV,55744388891,E-TLV-1 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/55744388891,https://www.airlines-manager.com/aircraft/show/93429385,21:00,19:29,884,"$3,672,705.00","$3,353,356.00","$3,793.39","$149,148.52"
EWR - TPA,55711311612,E-TUS-TPA-3,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/55711311612,https://www.airlines-manager.com/aircraft/show/98379317,5:45,11:44,310,"$377,862.00","$342,681.00","$1,105.42","$57,272.59"
EWR - TPA,55721560674,E-TUS-TPA-4,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/55721560674,https://www.airlines-manager.com/aircraft/show/98379316,10:45,16:44,310,"$377,862.00","$342,681.00","$1,105.42","$57,272.59"
EWR - TPA,55728562238,E-TUS-TPA-2,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/55728562238,https://www.airlines-manager.com/aircraft/show/98379318,13:00,18:59,310,"$377,862.00","$342,681.00","$1,105.42","$57,272.59"
EWR - TPA,55732031732,E-TUS-TPA-5,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/55732031732,https://www.airlines-manager.com/aircraft/show/98379315,15:00,20:59,310,"$377,862.00","$342,681.00","$1,105.42","$57,272.59"
EWR - TPA,55746468203,E-TUS-TPA-1,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/55746468203,https://www.airlines-manager.com/aircraft/show/98379319,23:15,5:14,310,"$377,862.00","$342,681.00","$1,105.42","$57,272.59"
EWR - TUL,55704058161,E-TUL-DSM-3,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/55704058161,https://www.airlines-manager.com/aircraft/show/110044465,1:45,8:29,310,"$428,315.00","$394,214.00","$1,271.66","$58,546.63"
EWR - TUL,55704058162,E-TUL-DSM-2,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/55704058162,https://www.airlines-manager.com/aircraft/show/110044464,3:30,10:14,310,"$428,315.00","$394,214.00","$1,271.66","$58,546.63"
EWR - TUL,55728562254,E-TUL-DSM-1,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/55728562254,https://www.airlines-manager.com/aircraft/show/110044463,13:00,19:44,310,"$428,315.00","$394,214.00","$1,271.66","$58,546.63"
EWR - TUL,55735532931,E-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/55735532931,https://www.airlines-manager.com/aircraft/show/110113039,16:30,23:14,112,"$201,473.00","$178,896.00","$1,597.29","$26,568.71"
EWR - TUL,55738770078,E-TUL-DSM-4,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/55738770078,https://www.airlines-manager.com/aircraft/show/110044466,18:45,1:29,310,"$428,315.00","$394,214.00","$1,271.66","$58,546.63"
EWR - TUS,55704057904,E-TUS-TPA-4,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/55704057904,https://www.airlines-manager.com/aircraft/show/98379316,0:30,10:44,310,"$641,733.00","$593,639.00","$1,914.96","$58,010.33"
EWR - TUS,55704057905,E-TUS-TPA-2,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/55704057905,https://www.airlines-manager.com/aircraft/show/98379318,1:30,11:44,310,"$641,733.00","$593,639.00","$1,914.96","$58,010.33"
EWR - TUS,55704057906,E-TUS-TPA-5,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/55704057906,https://www.airlines-manager.com/aircraft/show/98379315,3:30,13:44,310,"$641,733.00","$593,639.00","$1,914.96","$58,010.33"
EWR - TUS,55728562239,E-TUS-TPA-1,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/55728562239,https://www.airlines-manager.com/aircraft/show/98379319,13:00,23:14,310,"$641,733.00","$593,639.00","$1,914.96","$58,010.33"
EWR - TUS,55741695500,E-TUS-TPA-3,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/55741695500,https://www.airlines-manager.com/aircraft/show/98379317,19:30,5:44,310,"$641,733.00","$593,639.00","$1,914.96","$58,010.33"
EWR - TYS,55704058294,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/55704058294,https://www.airlines-manager.com/aircraft/show/119220543,3:00,7:29,310,"$291,829.00","$266,978.00",$861.22,"$59,549.00"
EWR - TYS,55721560619,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/55721560619,https://www.airlines-manager.com/aircraft/show/119220542,10:00,14:29,310,"$291,829.00","$266,978.00",$861.22,"$59,549.00"
EWR - TYS,55738770082,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/55738770082,https://www.airlines-manager.com/aircraft/show/119220545,18:45,23:14,310,"$291,829.00","$266,978.00",$861.22,"$59,549.00"
EWR - TYS,55746468207,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/55746468207,https://www.airlines-manager.com/aircraft/show/119220544,23:15,3:44,310,"$291,829.00","$266,978.00",$861.22,"$59,549.00"
EWR - VCE,55704058302,E-84B-3  B2,777-300,https://www.airlines-manager.com/network/showline/49921914,https://www.airlines-manager.com/network/showflight/55704058302,https://www.airlines-manager.com/aircraft/show/117958697,3:00,20:14,852,"$2,729,726.00","$2,489,336.00","$2,921.76","$144,448.90"
EWR - VCE,55732031752,E-84B-6  B2,777-300,https://www.airlines-manager.com/network/showline/49921914,https://www.airlines-manager.com/network/showflight/55732031752,https://www.airlines-manager.com/aircraft/show/117958700,15:00,8:14,821,"$2,650,647.00","$2,418,830.00","$2,946.20","$140,357.64"
EWR - YEG,55704057851,E-YEG-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/55704057851,https://www.airlines-manager.com/aircraft/show/98936170,0:15,10:14,320,"$636,684.00","$584,290.00","$1,825.91","$58,526.54"
EWR - YEG,55704057852,E-YEG-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/55704057852,https://www.airlines-manager.com/aircraft/show/98936171,2:15,12:14,320,"$636,684.00","$584,290.00","$1,825.91","$58,526.54"
EWR - YEG,55721560709,E-YEG-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/55721560709,https://www.airlines-manager.com/aircraft/show/98936168,11:00,20:59,320,"$636,684.00","$584,290.00","$1,825.91","$58,526.54"
EWR - YEG,55724951976,E-YEG-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/55724951976,https://www.airlines-manager.com/aircraft/show/98936169,12:30,22:29,320,"$636,684.00","$584,290.00","$1,825.91","$58,526.54"
EWR - YEG,55744388976,E-YEG-BFF-5 B,A319-100,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/55744388976,https://www.airlines-manager.com/aircraft/show/115493369,22:00,7:59,198,"$475,490.00","$437,332.00","$2,208.75","$43,806.21"
EWR - YOW,55718008676,E-CUN-SJU-1,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/55718008676,https://www.airlines-manager.com/aircraft/show/106581304,9:30,12:59,320,"$171,271.00","$145,940.00",$456.06,"$41,896.65"
EWR - YOW,55721560714,E-CUN-SJU-4,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/55721560714,https://www.airlines-manager.com/aircraft/show/106581307,11:00,14:29,320,"$171,271.00","$145,940.00",$456.06,"$41,896.65"
EWR - YOW,55738770062,E-CUN-SJU-5,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/55738770062,https://www.airlines-manager.com/aircraft/show/86238754,18:45,22:14,320,"$171,271.00","$145,940.00",$456.06,"$41,896.65"
EWR - YOW,55744388901,E-CUN-SJU-3,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/55744388901,https://www.airlines-manager.com/aircraft/show/106581306,21:15,0:44,320,"$171,271.00","$145,940.00",$456.06,"$41,896.65"
EWR - YOW,55746468151,E-CUN-SJU-2,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/55746468151,https://www.airlines-manager.com/aircraft/show/106581305,22:45,2:14,292,"$162,132.00","$137,048.00",$469.34,"$39,343.92"
EWR - YUL,55718008677,E-CUN-SJU-3,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/55718008677,https://www.airlines-manager.com/aircraft/show/106581306,9:30,12:59,320,"$174,699.00","$146,541.00",$457.94,"$42,069.19"
EWR - YUL,55721560713,E-CUN-SJU-2,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/55721560713,https://www.airlines-manager.com/aircraft/show/106581305,11:00,14:29,320,"$174,699.00","$146,541.00",$457.94,"$42,069.19"
EWR - YUL,55732031766,E-CUN-SJU-5,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/55732031766,https://www.airlines-manager.com/aircraft/show/86238754,15:15,18:44,320,"$174,699.00","$146,541.00",$457.94,"$42,069.19"
EWR - YUL,55744388872,E-CUN-SJU-1,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/55744388872,https://www.airlines-manager.com/aircraft/show/106581304,21:00,0:29,320,"$174,699.00","$146,541.00",$457.94,"$42,069.19"
EWR - YUL,55746468125,E-CUN-SJU-4,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/55746468125,https://www.airlines-manager.com/aircraft/show/106581307,22:30,1:59,320,"$174,699.00","$146,541.00",$457.94,"$42,069.19"
EWR - YVR,55704057784,E-YVR-YYC-1,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/55704057784,https://www.airlines-manager.com/aircraft/show/113681636,0:00,11:14,400,"$912,826.00","$840,448.00","$2,101.12","$74,817.33"
EWR - YVR,55704057785,E-YVR-YYC-2,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/55704057785,https://www.airlines-manager.com/aircraft/show/113681637,1:30,12:44,400,"$912,826.00","$840,448.00","$2,101.12","$74,817.33"
EWR - YVR,55704057786,E-YVR-YYC-3,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/55704057786,https://www.airlines-manager.com/aircraft/show/113681638,3:00,14:14,400,"$912,826.00","$840,448.00","$2,101.12","$74,817.33"
EWR - YVR,55721560770,E-YVR-YYC-4,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/55721560770,https://www.airlines-manager.com/aircraft/show/113681639,11:15,22:29,400,"$912,826.00","$840,448.00","$2,101.12","$74,817.33"
EWR - YVR,55724951984,E-YVR-YYC-5,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/55724951984,https://www.airlines-manager.com/aircraft/show/113681640,12:45,23:59,400,"$912,826.00","$840,448.00","$2,101.12","$74,817.33"
EWR - YYC,55704058026,E-YVR-YYC-4,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/55704058026,https://www.airlines-manager.com/aircraft/show/113681639,1:30,11:14,400,"$791,438.00","$727,885.00","$1,819.71","$74,782.71"
EWR - YYC,55704058027,E-YVR-YYC-5,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/55704058027,https://www.airlines-manager.com/aircraft/show/113681640,3:00,12:44,400,"$791,438.00","$727,885.00","$1,819.71","$74,782.71"
EWR - YYC,55721560769,E-YVR-YYC-1,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/55721560769,https://www.airlines-manager.com/aircraft/show/113681636,11:15,20:59,400,"$791,438.00","$727,885.00","$1,819.71","$74,782.71"
EWR - YYC,55724951983,E-YVR-YYC-2,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/55724951983,https://www.airlines-manager.com/aircraft/show/113681637,12:45,22:29,400,"$791,438.00","$727,885.00","$1,819.71","$74,782.71"
EWR - YYC,55728562386,E-YVR-YYC-3,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/55728562386,https://www.airlines-manager.com/aircraft/show/113681638,14:15,23:59,400,"$791,438.00","$727,885.00","$1,819.71","$74,782.71"
EWR - YYZ,55704058198,E-DTW-YYZ-4,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/55704058198,https://www.airlines-manager.com/aircraft/show/92003922,2:15,5:44,320,"$180,492.00","$146,154.00",$456.73,"$41,958.09"
EWR - YYZ,55714463625,E-DTW-YYZ-5,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/55714463625,https://www.airlines-manager.com/aircraft/show/92003921,7:30,10:59,320,"$180,492.00","$146,154.00",$456.73,"$41,958.09"
EWR - YYZ,55721560531,E-DTW-YYZ-2,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/55721560531,https://www.airlines-manager.com/aircraft/show/92003924,10:00,13:29,320,"$180,492.00","$146,154.00",$456.73,"$41,958.09"
EWR - YYZ,55728562311,E-DTW-YYZ-1,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/55728562311,https://www.airlines-manager.com/aircraft/show/92003925,14:00,17:29,320,"$180,492.00","$146,154.00",$456.73,"$41,958.09"
EWR - YYZ,55738770014,E-DTW-YYZ-3,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/55738770014,https://www.airlines-manager.com/aircraft/show/92003923,18:15,21:44,320,"$180,492.00","$146,154.00",$456.73,"$41,958.09"
EWR - ZRH,55714463654,E-84A-6 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/55714463654,https://www.airlines-manager.com/aircraft/show/90656552,7:45,23:59,852,"$2,642,406.00","$2,399,717.00","$2,816.57","$147,826.51"
EWR - ZRH,55741695570,E-84A-7 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/55741695570,https://www.airlines-manager.com/aircraft/show/94521249,20:00,12:14,852,"$2,642,406.00","$2,399,717.00","$2,816.57","$147,826.51"
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
HNL - AKL,55732031851,H-84B-2 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/55732031851,https://www.airlines-manager.com/aircraft/show/96807092,16:00,9:59,832,"$2,918,341.00","$2,661,151.00","$3,198.50","$147,978.74"
HNL - AKL,55746468191,H-84B-6 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/55746468191,https://www.airlines-manager.com/aircraft/show/96807088,23:00,16:59,832,"$2,900,946.00","$2,649,712.00","$3,184.75","$147,342.65"
HNL - ATL,55708448883,H-56B-2 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/55708448883,https://www.airlines-manager.com/aircraft/show/109187499,4:45,22:44,592,"$2,202,643.00","$2,016,788.00","$3,406.74","$112,147.62"
HNL - ATL,55732031805,H-56B-4 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/55732031805,https://www.airlines-manager.com/aircraft/show/109187501,16:00,9:59,592,"$2,202,643.00","$2,016,788.00","$3,406.74","$112,147.62"
HNL - ATL,55746468143,H-56B-2 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/55746468143,https://www.airlines-manager.com/aircraft/show/109187499,22:45,16:44,592,"$2,202,643.00","$2,016,788.00","$3,406.74","$112,147.62"
HNL - BNE,55708448732,H-84B-6 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/55708448732,https://www.airlines-manager.com/aircraft/show/96807088,4:00,22:59,832,"$3,061,944.00","$2,793,095.00","$3,357.09","$147,134.06"
HNL - BNE,55721560640,H-84B-3 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/55721560640,https://www.airlines-manager.com/aircraft/show/96807091,10:00,4:59,832,"$3,043,502.00","$2,780,999.00","$3,342.55","$146,496.87"
HNL - BOS,55704057771,H-56E-6 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/55704057771,https://www.airlines-manager.com/aircraft/show/117414505,0:00,19:59,592,"$2,408,347.00","$2,248,895.00","$3,798.81","$112,538.53"
HNL - BOS,55718008599,H-56E-1 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/55718008599,https://www.airlines-manager.com/aircraft/show/117414500,8:30,4:29,592,"$2,408,347.00","$2,248,895.00","$3,798.81","$112,538.53"
HNL - BOS,55721560519,H-56E-4 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/55721560519,https://www.airlines-manager.com/aircraft/show/117414503,10:00,5:59,592,"$2,408,347.00","$2,248,895.00","$3,798.81","$112,538.53"
HNL - BWI,55704058220,H-56F-4 B,787-10,https://www.airlines-manager.com/network/showline/50049284,https://www.airlines-manager.com/network/showflight/55704058220,https://www.airlines-manager.com/aircraft/show/118383854,2:30,21:44,592,"$2,293,871.00","$2,143,128.00","$3,620.15","$111,427.80"
HNL - BWI,55724951894,H-56F-5 B,787-10,https://www.airlines-manager.com/network/showline/50049284,https://www.airlines-manager.com/network/showflight/55724951894,https://www.airlines-manager.com/aircraft/show/118383855,11:45,6:59,592,"$2,293,871.00","$2,143,128.00","$3,620.15","$111,427.80"
HNL - BWI,55735532956,H-56F-1 B,787-10,https://www.airlines-manager.com/network/showline/50049284,https://www.airlines-manager.com/network/showflight/55735532956,https://www.airlines-manager.com/aircraft/show/118383851,17:00,12:14,587,"$2,281,538.00","$2,131,401.00","$3,631.01","$110,818.08"
HNL - CLT,55708448776,H-56D-3 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/55708448776,https://www.airlines-manager.com/aircraft/show/112066134,4:30,23:14,592,"$2,263,173.00","$2,107,474.00","$3,559.92","$112,498.61"
HNL - CLT,55711311582,H-56D-5 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/55711311582,https://www.airlines-manager.com/aircraft/show/112066136,5:30,0:14,592,"$2,263,173.00","$2,107,474.00","$3,559.92","$112,498.61"
HNL - CLT,55746468196,H-56D-3 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/55746468196,https://www.airlines-manager.com/aircraft/show/112066134,23:15,17:59,592,"$2,263,173.00","$2,107,474.00","$3,559.92","$112,498.61"
HNL - CXI,55711311592,H-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/55711311592,https://www.airlines-manager.com/aircraft/show/90717080,5:30,12:44,388,"$494,113.00","$463,605.00","$1,194.86","$64,092.86"
HNL - CXI,55732031729,H-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/55732031729,https://www.airlines-manager.com/aircraft/show/90717080,15:00,22:14,388,"$494,113.00","$463,605.00","$1,194.86","$64,092.86"
HNL - CXI,55744388993,H-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/55744388993,https://www.airlines-manager.com/aircraft/show/90717080,22:15,5:29,388,"$494,113.00","$463,605.00","$1,194.86","$64,092.86"
HNL - DEN,55714463590,H-56F-6 B,787-10,https://www.airlines-manager.com/network/showline/43762939,https://www.airlines-manager.com/network/showflight/55714463590,https://www.airlines-manager.com/aircraft/show/118383856,7:00,20:59,592,"$1,714,252.00","$1,569,460.00","$2,651.11","$112,237.90"
HNL - DEN,55735532957,H-56F-2 B,787-10,https://www.airlines-manager.com/network/showline/43762939,https://www.airlines-manager.com/network/showflight/55735532957,https://www.airlines-manager.com/aircraft/show/118383852,17:00,6:59,592,"$1,714,252.00","$1,569,460.00","$2,651.11","$112,237.90"
HNL - DEN,55744388940,H-56F-4 B,787-10,https://www.airlines-manager.com/network/showline/43762939,https://www.airlines-manager.com/network/showflight/55744388940,https://www.airlines-manager.com/aircraft/show/118383854,21:45,11:44,592,"$1,714,252.00","$1,569,460.00","$2,651.11","$112,237.90"
HNL - DFW,55708448777,H-56E-2 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/55708448777,https://www.airlines-manager.com/aircraft/show/117414501,4:30,19:59,592,"$1,894,637.00","$1,743,253.00","$2,944.68","$112,589.00"
HNL - DFW,55735532955,H-56E-7 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/55735532955,https://www.airlines-manager.com/aircraft/show/117414506,17:00,8:29,592,"$1,894,637.00","$1,743,253.00","$2,944.68","$112,589.00"
HNL - DFW,55738770035,H-56E-3 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/55738770035,https://www.airlines-manager.com/aircraft/show/117414502,18:30,9:59,592,"$1,894,637.00","$1,743,253.00","$2,944.68","$112,589.00"
HNL - DTW,55711311623,H-56E-5 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/55711311623,https://www.airlines-manager.com/aircraft/show/117414504,6:00,23:59,592,"$2,160,456.00","$2,010,661.00","$3,396.39","$111,806.91"
HNL - DTW,55741695538,H-56E-2 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/55741695538,https://www.airlines-manager.com/aircraft/show/117414501,20:00,13:59,592,"$2,160,456.00","$2,010,661.00","$3,396.39","$111,806.91"
HNL - DTW,55741695539,H-56E-6 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/55741695539,https://www.airlines-manager.com/aircraft/show/117414505,20:00,13:59,592,"$2,160,456.00","$2,010,661.00","$3,396.39","$111,806.91"
HNL - EWR,55708448740,H-56A-7 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/55708448740,https://www.airlines-manager.com/aircraft/show/95351586,4:15,23:59,592,"$2,374,139.00","$2,212,224.00","$3,736.86","$112,105.95"
HNL - EWR,55711311620,H-56A-6 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/55711311620,https://www.airlines-manager.com/aircraft/show/95351587,6:00,1:44,592,"$2,374,139.00","$2,212,224.00","$3,736.86","$112,105.95"
HNL - EWR,55741695510,H-56A-3 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/55741695510,https://www.airlines-manager.com/aircraft/show/95351590,19:45,15:29,592,"$2,374,139.00","$2,212,224.00","$3,736.86","$112,105.95"
HNL - GUM,55704057766,H-GUM,A321neo,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/55704057766,https://www.airlines-manager.com/aircraft/show/115400544,0:00,16:44,338,"$1,125,989.00","$1,062,930.00","$3,144.76","$63,521.71"
HNL - GUM,55708448898,H-84A-3 F,777-300,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/55708448898,https://www.airlines-manager.com/aircraft/show/95818924,4:45,20:29,832,"$2,562,457.00","$2,362,030.00","$2,838.98","$150,129.03"
HNL - IAD,55704058307,H-56C-3 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/55704058307,https://www.airlines-manager.com/aircraft/show/111639415,3:15,22:14,592,"$2,279,774.00","$2,127,047.00","$3,592.98","$112,048.13"
HNL - IAD,55718008665,H-56C-5 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/55718008665,https://www.airlines-manager.com/aircraft/show/111639417,9:15,4:14,592,"$2,279,774.00","$2,127,047.00","$3,592.98","$112,048.13"
HNL - IAD,55741695537,H-56C-7 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/55741695537,https://www.airlines-manager.com/aircraft/show/111639419,20:00,14:59,592,"$2,279,774.00","$2,127,047.00","$3,592.98","$112,048.13"
HNL - IAH,55704057768,H-56A-1 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/55704057768,https://www.airlines-manager.com/aircraft/show/95351592,0:00,15:59,592,"$1,936,223.00","$1,795,912.00","$3,033.64","$112,361.54"
HNL - IAH,55704057769,H-56A-3 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/55704057769,https://www.airlines-manager.com/aircraft/show/95351590,3:45,19:44,592,"$1,936,223.00","$1,795,912.00","$3,033.64","$112,361.54"
HNL - IAH,55732031804,H-56A-1 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/55732031804,https://www.airlines-manager.com/aircraft/show/95351592,16:00,7:59,592,"$1,936,223.00","$1,795,912.00","$3,033.64","$112,361.54"
HNL - ITO,55704058170,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/55704058170,https://www.airlines-manager.com/aircraft/show/94803593,1:45,4:44,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,55704058171,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/55704058171,https://www.airlines-manager.com/aircraft/show/94803596,3:15,6:14,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,55711311643,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/55711311643,https://www.airlines-manager.com/aircraft/show/94803595,6:00,8:59,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,55718008681,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/55718008681,https://www.airlines-manager.com/aircraft/show/94803594,9:30,12:29,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,55732031753,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/55732031753,https://www.airlines-manager.com/aircraft/show/94803593,15:00,17:59,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,55735532930,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/55735532930,https://www.airlines-manager.com/aircraft/show/94803596,16:30,19:29,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,55738770136,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/55738770136,https://www.airlines-manager.com/aircraft/show/94803595,19:15,22:14,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,55746468169,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/55746468169,https://www.airlines-manager.com/aircraft/show/94803594,22:45,1:44,127,"$66,008.00","$55,941.00",$440.48,"$18,751.17"
HNL - JFK,55704058282,H-56B-6 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/55704058282,https://www.airlines-manager.com/aircraft/show/109187503,3:00,22:44,592,"$2,407,083.00","$2,224,643.00","$3,757.84","$112,735.29"
HNL - JFK,55718008646,H-56B-1 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/55718008646,https://www.airlines-manager.com/aircraft/show/109187498,9:00,4:44,592,"$2,407,083.00","$2,224,643.00","$3,757.84","$112,735.29"
HNL - JFK,55735532953,H-56B-3 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/55735532953,https://www.airlines-manager.com/aircraft/show/109187500,17:00,12:44,592,"$2,407,083.00","$2,224,643.00","$3,757.84","$112,735.29"
HNL - KOA,55704057938,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/55704057938,https://www.airlines-manager.com/aircraft/show/94803595,0:45,3:29,170,"$58,952.00","$48,574.00",$285.73,"$17,770.98"
HNL - KOA,55708448767,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/55708448767,https://www.airlines-manager.com/aircraft/show/94803594,4:15,6:59,170,"$58,952.00","$48,574.00",$285.73,"$17,770.98"
HNL - KOA,55714463620,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/55714463620,https://www.airlines-manager.com/aircraft/show/94803593,7:15,9:59,170,"$58,952.00","$48,574.00",$285.73,"$17,770.98"
HNL - KOA,55718008640,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/55718008640,https://www.airlines-manager.com/aircraft/show/94803596,8:45,11:29,170,"$58,952.00","$48,574.00",$285.73,"$17,770.98"
HNL - KOA,55728562379,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/55728562379,https://www.airlines-manager.com/aircraft/show/94803595,14:00,16:44,170,"$58,952.00","$48,574.00",$285.73,"$17,770.98"
HNL - KOA,55735533028,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/55735533028,https://www.airlines-manager.com/aircraft/show/94803594,17:30,20:14,170,"$58,952.00","$48,574.00",$285.73,"$17,770.98"
HNL - KOA,55741695619,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/55741695619,https://www.airlines-manager.com/aircraft/show/94803593,20:30,23:14,170,"$58,952.00","$48,574.00",$285.73,"$17,770.98"
HNL - KOA,55744388978,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/55744388978,https://www.airlines-manager.com/aircraft/show/94803596,22:00,0:44,170,"$58,952.00","$48,574.00",$285.73,"$17,770.98"
HNL - LAS,55711311666,H-84A-5 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/55711311666,https://www.airlines-manager.com/aircraft/show/95818922,6:30,18:29,832,"$1,898,127.00","$1,711,499.00","$2,057.09","$142,823.28"
HNL - LAS,55735532928,H-LAS S,A321-200,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/55735532928,https://www.airlines-manager.com/aircraft/show/116385511,16:30,5:14,232,"$747,103.00","$675,601.00","$2,912.07","$53,057.67"
HNL - LAS,55741695616,H-84A-3 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/55741695616,https://www.airlines-manager.com/aircraft/show/95818924,20:30,8:29,803,"$1,854,242.00","$1,670,319.00","$2,080.10","$139,386.84"
HNL - LAX,55714463588,H-SFO-LAX-3,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/55714463588,https://www.airlines-manager.com/aircraft/show/110044460,7:00,18:59,338,"$790,352.00","$722,080.00","$2,136.33","$60,257.02"
HNL - LAX,55718008644,H-SFO-LAX-4,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/55718008644,https://www.airlines-manager.com/aircraft/show/110044461,9:00,20:59,338,"$790,352.00","$722,080.00","$2,136.33","$60,257.02"
HNL - LAX,55721560637,H-SFO-LAX-6 B,A319-100,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/55721560637,https://www.airlines-manager.com/aircraft/show/106106389,10:00,21:59,198,"$546,807.00","$489,527.00","$2,472.36","$40,850.65"
HNL - LAX,55738770011,H-SFO-LAX-1,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/55738770011,https://www.airlines-manager.com/aircraft/show/110044458,18:15,6:14,338,"$790,352.00","$722,080.00","$2,136.33","$60,257.02"
HNL - LAX,55741695575,H-SFO-LAX-2,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/55741695575,https://www.airlines-manager.com/aircraft/show/110044459,20:15,8:14,338,"$790,352.00","$722,080.00","$2,136.33","$60,257.02"
HNL - LAX,55744388938,H-SFO-LAX-5,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/55744388938,https://www.airlines-manager.com/aircraft/show/110044462,21:45,9:44,338,"$790,352.00","$722,080.00","$2,136.33","$60,257.02"
HNL - LIH,55704057939,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/55704057939,https://www.airlines-manager.com/aircraft/show/94803596,0:45,3:14,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,55704057940,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/55704057940,https://www.airlines-manager.com/aircraft/show/94803595,3:30,5:59,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,55714463605,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/55714463605,https://www.airlines-manager.com/aircraft/show/94803594,7:00,9:29,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,55721560642,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/55721560642,https://www.airlines-manager.com/aircraft/show/94803593,10:00,12:29,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,55728562380,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/55728562380,https://www.airlines-manager.com/aircraft/show/94803596,14:00,16:29,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,55735532947,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/55735532947,https://www.airlines-manager.com/aircraft/show/94803595,16:45,19:14,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,55741695598,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/55741695598,https://www.airlines-manager.com/aircraft/show/94803594,20:15,22:44,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,55746468212,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/55746468212,https://www.airlines-manager.com/aircraft/show/94803593,23:15,1:44,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LNY,55704057983,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/55704057983,https://www.airlines-manager.com/aircraft/show/106107514,1:00,3:29,116,"$30,431.00","$25,424.00",$219.17,"$10,237.85"
HNL - LNY,55704057984,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/55704057984,https://www.airlines-manager.com/aircraft/show/106107514,3:30,5:59,116,"$30,431.00","$25,424.00",$219.17,"$10,237.85"
HNL - LNY,55711311644,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/55711311644,https://www.airlines-manager.com/aircraft/show/106107514,6:00,8:29,116,"$30,431.00","$25,424.00",$219.17,"$10,237.85"
HNL - LNY,55718008625,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/55718008625,https://www.airlines-manager.com/aircraft/show/106107514,8:30,10:59,116,"$30,431.00","$25,424.00",$219.17,"$10,237.85"
HNL - LNY,55732031755,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/55732031755,https://www.airlines-manager.com/aircraft/show/106107514,15:00,17:29,116,"$30,431.00","$25,424.00",$219.17,"$10,237.85"
HNL - LNY,55735533029,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/55735533029,https://www.airlines-manager.com/aircraft/show/106107514,17:30,19:59,116,"$30,431.00","$25,424.00",$219.17,"$10,237.85"
HNL - LNY,55741695573,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/55741695573,https://www.airlines-manager.com/aircraft/show/106107514,20:00,22:29,116,"$30,431.00","$25,424.00",$219.17,"$10,237.85"
HNL - LNY,55746468140,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/55746468140,https://www.airlines-manager.com/aircraft/show/106107514,22:30,0:59,116,"$30,431.00","$25,424.00",$219.17,"$10,237.85"
HNL - MCO,55704057947,H-56C-7 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/55704057947,https://www.airlines-manager.com/aircraft/show/111639419,1:00,19:59,592,"$2,289,533.00","$2,129,434.00","$3,597.02","$112,173.87"
HNL - MCO,55708448742,H-56C-6 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/55708448742,https://www.airlines-manager.com/aircraft/show/111639418,4:15,23:14,592,"$2,289,533.00","$2,129,434.00","$3,597.02","$112,173.87"
HNL - MCO,55718008581,H-56C-2 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/55718008581,https://www.airlines-manager.com/aircraft/show/111639414,8:15,3:14,592,"$2,289,533.00","$2,129,434.00","$3,597.02","$112,173.87"
HNL - MEL,55718008624,H-84A-4 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/55718008624,https://www.airlines-manager.com/aircraft/show/95818923,8:30,6:29,832,"$3,546,306.00","$3,244,924.00","$3,900.15","$147,608.37"
HNL - MEL,55741695572,H-84A-7 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/55741695572,https://www.airlines-manager.com/aircraft/show/95818920,20:00,17:59,832,"$3,546,306.00","$3,244,924.00","$3,900.15","$147,608.37"
HNL - MIA,55718008598,H-56A-2 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/55718008598,https://www.airlines-manager.com/aircraft/show/95351591,8:30,3:44,592,"$2,335,269.00","$2,169,008.00","$3,663.86","$112,773.38"
HNL - MIA,55721560670,H-56A-5 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/55721560670,https://www.airlines-manager.com/aircraft/show/95351588,10:45,5:59,592,"$2,335,269.00","$2,169,008.00","$3,663.86","$112,773.38"
HNL - MIA,55732031774,H-56A-4 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/55732031774,https://www.airlines-manager.com/aircraft/show/95351589,15:30,10:44,592,"$2,335,269.00","$2,169,008.00","$3,663.86","$112,773.38"
HNL - MNL,55714463640,H-84A-2 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/55714463640,https://www.airlines-manager.com/aircraft/show/95818925,7:30,4:44,832,"$3,468,526.00","$3,179,229.00","$3,821.19","$149,728.21"
HNL - MNL,55738770055,H-84A-5 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/55738770055,https://www.airlines-manager.com/aircraft/show/95818922,18:30,15:44,832,"$3,468,526.00","$3,179,229.00","$3,821.19","$149,728.21"
HNL - MSP,55732031807,H-56C-1 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/55732031807,https://www.airlines-manager.com/aircraft/show/111639413,16:00,8:14,592,"$1,950,535.00","$1,816,162.00","$3,067.84","$111,878.56"
HNL - MSP,55735532954,H-56C-4 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/55735532954,https://www.airlines-manager.com/aircraft/show/111639416,17:00,9:14,592,"$1,950,535.00","$1,816,162.00","$3,067.84","$111,878.56"
HNL - MSP,55744388984,H-56C-3 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/55744388984,https://www.airlines-manager.com/aircraft/show/111639415,22:15,14:29,592,"$1,950,535.00","$1,816,162.00","$3,067.84","$111,878.56"
HNL - NAN,55704058350,H-84A-7 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/55704058350,https://www.airlines-manager.com/aircraft/show/95818920,3:45,17:14,832,"$2,077,351.00","$1,906,145.00","$2,291.04","$141,370.46"
HNL - NAN,55738770002,H-84A-1 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/55738770002,https://www.airlines-manager.com/aircraft/show/95818926,18:00,7:29,832,"$2,048,301.00","$1,886,749.00","$2,267.73","$139,931.94"
HNL - OGG,55704058172,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/55704058172,https://www.airlines-manager.com/aircraft/show/94803594,1:45,4:14,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,55708448899,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/55708448899,https://www.airlines-manager.com/aircraft/show/94803593,4:45,7:14,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,55711311654,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/55711311654,https://www.airlines-manager.com/aircraft/show/94803596,6:15,8:44,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,55718008660,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/55718008660,https://www.airlines-manager.com/aircraft/show/94803595,9:00,11:29,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,55732031754,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/55732031754,https://www.airlines-manager.com/aircraft/show/94803594,15:00,17:29,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,55738770003,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/55738770003,https://www.airlines-manager.com/aircraft/show/94803593,18:00,20:29,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,55741695507,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/55741695507,https://www.airlines-manager.com/aircraft/show/94803596,19:30,21:59,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,55744389007,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/55744389007,https://www.airlines-manager.com/aircraft/show/94803595,22:15,0:44,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - ORD,55721560518,H-56B-5 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/55721560518,https://www.airlines-manager.com/aircraft/show/109187502,10:00,2:59,592,"$2,090,552.00","$1,921,092.00","$3,245.09","$113,116.31"
HNL - ORD,55732031806,H-56B-7 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/55732031806,https://www.airlines-manager.com/aircraft/show/109187504,16:00,8:59,592,"$2,090,552.00","$1,921,092.00","$3,245.09","$113,116.31"
HNL - ORD,55746468144,H-56B-6 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/55746468144,https://www.airlines-manager.com/aircraft/show/109187503,22:45,15:44,592,"$2,090,552.00","$1,921,092.00","$3,245.09","$113,116.31"
HNL - PHL,55714463589,H-56F-3 B,787-10,https://www.airlines-manager.com/network/showline/50049283,https://www.airlines-manager.com/network/showflight/55714463589,https://www.airlines-manager.com/aircraft/show/118383853,7:00,2:29,592,"$2,346,540.00","$2,188,960.00","$3,697.57","$112,350.38"
HNL - PHL,55735532958,H-56F-7 B,787-10,https://www.airlines-manager.com/network/showline/50049283,https://www.airlines-manager.com/network/showflight/55735532958,https://www.airlines-manager.com/aircraft/show/118383857,17:00,12:29,592,"$2,346,540.00","$2,188,960.00","$3,697.57","$112,350.38"
HNL - PHL,55744388865,H-56F-6 B,787-10,https://www.airlines-manager.com/network/showline/50049283,https://www.airlines-manager.com/network/showflight/55744388865,https://www.airlines-manager.com/aircraft/show/118383856,21:00,16:29,592,"$2,346,540.00","$2,188,960.00","$3,697.57","$112,350.38"
HNL - PHX,55704058325,H-56D-7 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/55704058325,https://www.airlines-manager.com/aircraft/show/112066138,3:30,15:59,592,"$1,520,203.00","$1,409,068.00","$2,380.18","$112,875.94"
HNL - PHX,55732031696,H-56D-6 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/55732031696,https://www.airlines-manager.com/aircraft/show/112066137,15:00,3:29,592,"$1,520,203.00","$1,409,068.00","$2,380.18","$112,875.94"
HNL - PHX,55732031697,H-56D-2 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/55732031697,https://www.airlines-manager.com/aircraft/show/112066133,16:00,4:29,592,"$1,520,203.00","$1,409,068.00","$2,380.18","$112,875.94"
HNL - PPG,55704058306,H-TRW-PPG-1 S,A321neo,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/55704058306,https://www.airlines-manager.com/aircraft/show/120872966,3:15,15:29,410,"$843,136.00","$795,552.00","$1,940.37","$65,031.50"
HNL - PPG,55732031802,H-TRW-PPG-2 S,A321neo,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/55732031802,https://www.airlines-manager.com/aircraft/show/120872965,16:00,4:14,410,"$843,136.00","$795,552.00","$1,940.37","$65,031.50"
HNL - PPG,55738769969,H-TRW-PPG-3 S,A321neo,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/55738769969,https://www.airlines-manager.com/aircraft/show/120872964,18:00,6:14,410,"$843,136.00","$795,552.00","$1,940.37","$65,031.50"
HNL - PPT,55708448892,H-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/55708448892,https://www.airlines-manager.com/aircraft/show/88725600,4:45,17:29,310,"$771,400.00","$718,433.00","$2,317.53","$56,421.44"
HNL - PPT,55732031798,H-84A-6 F,777-300,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/55732031798,https://www.airlines-manager.com/aircraft/show/95818921,15:45,3:44,832,"$1,903,144.00","$1,751,128.00","$2,104.72","$146,130.29"
HNL - PPT,55735533026,H-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/55735533026,https://www.airlines-manager.com/aircraft/show/88725600,17:30,6:14,310,"$771,400.00","$718,433.00","$2,317.53","$56,421.44"
HNL - SEA,55704058340,H-56D-1 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/55704058340,https://www.airlines-manager.com/aircraft/show/112066132,3:45,15:14,592,"$1,418,230.00","$1,316,557.00","$2,223.91","$114,649.38"
HNL - SEA,55732031808,H-56D-1 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/55732031808,https://www.airlines-manager.com/aircraft/show/112066132,16:00,3:29,592,"$1,418,230.00","$1,316,557.00","$2,223.91","$114,649.38"
HNL - SEA,55738769972,H-56D-4 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/55738769972,https://www.airlines-manager.com/aircraft/show/112066135,18:00,5:29,592,"$1,418,230.00","$1,316,557.00","$2,223.91","$114,649.38"
HNL - SFO,55714463587,H-SFO-LAX-1,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/55714463587,https://www.airlines-manager.com/aircraft/show/110044458,7:00,18:14,338,"$759,152.00","$700,668.00","$2,072.98","$62,374.01"
HNL - SFO,55718008643,H-SFO-LAX-2,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/55718008643,https://www.airlines-manager.com/aircraft/show/110044459,9:00,20:14,338,"$759,152.00","$700,668.00","$2,072.98","$62,374.01"
HNL - SFO,55721560659,H-SFO-LAX-5,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/55721560659,https://www.airlines-manager.com/aircraft/show/110044462,10:30,21:44,338,"$759,152.00","$700,668.00","$2,072.98","$62,374.01"
HNL - SFO,55738770088,H-SFO-LAX-3,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/55738770088,https://www.airlines-manager.com/aircraft/show/110044460,19:00,6:14,338,"$759,152.00","$700,668.00","$2,072.98","$62,374.01"
HNL - SFO,55744388863,H-SFO-LAX-4,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/55744388863,https://www.airlines-manager.com/aircraft/show/110044461,21:00,8:14,338,"$759,152.00","$700,668.00","$2,072.98","$62,374.01"
HNL - SFO,55744388864,H-SFO-LAX-6 B,A319-100,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/55744388864,https://www.airlines-manager.com/aircraft/show/106106389,22:00,9:29,198,"$528,428.00","$479,141.00","$2,419.90","$41,724.91"
HNL - SIN,55708448928,H-84B-4 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/55708448928,https://www.airlines-manager.com/aircraft/show/96807090,5:15,7:29,832,"$4,330,890.00","$3,932,668.00","$4,726.76","$1,760,896.12"
HNL - SIN,55735532992,H-84B-7 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/55735532992,https://www.airlines-manager.com/aircraft/show/96807087,17:00,19:14,832,"$4,330,890.00","$3,932,668.00","$4,726.76","$1,760,896.12"
HNL - SYD,55714463641,H-84B-5 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/55714463641,https://www.airlines-manager.com/aircraft/show/96807089,7:30,3:59,832,"$3,347,714.00","$3,040,683.00","$3,654.67","$148,446.69"
HNL - SYD,55738770135,H-84B-1 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/55738770135,https://www.airlines-manager.com/aircraft/show/96807093,19:15,15:44,832,"$3,347,714.00","$3,040,683.00","$3,654.67","$148,446.69"
HNL - TRW,55708448739,H-TRW-PPG-2 S,A321neo,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/55708448739,https://www.airlines-manager.com/aircraft/show/120872965,4:15,15:29,410,"$815,013.00","$772,225.00","$1,883.48","$68,744.07"
HNL - TRW,55711311648,H-TRW-PPG-3 S,A321neo,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/55711311648,https://www.airlines-manager.com/aircraft/show/120872964,6:15,17:29,410,"$815,013.00","$772,225.00","$1,883.48","$68,744.07"
HNL - TRW,55732031803,H-TRW-PPG-1 S,A321neo,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/55732031803,https://www.airlines-manager.com/aircraft/show/120872966,16:00,3:14,410,"$815,013.00","$772,225.00","$1,883.48","$68,744.07"
HNL - YVR,55704057842,H-56D-6 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/55704057842,https://www.airlines-manager.com/aircraft/show/112066137,0:15,11:59,592,"$1,421,513.00","$1,326,107.00","$2,240.05","$113,020.48"
HNL - YVR,55704057843,H-56D-2 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/55704057843,https://www.airlines-manager.com/aircraft/show/112066133,3:30,15:14,592,"$1,421,513.00","$1,326,107.00","$2,240.05","$113,020.48"
HNL - YVR,55732031809,H-56D-7 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/55732031809,https://www.airlines-manager.com/aircraft/show/112066138,16:00,3:44,592,"$1,421,513.00","$1,326,107.00","$2,240.05","$113,020.48"
IAH - ABQ,55307089453,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/55307089453,https://www.airlines-manager.com/aircraft/show/103600700,1:00,5:59,310,"$318,057.00","$284,740.00",$918.52,"$57,138.46"
IAH - ABQ,55307089454,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/55307089454,https://www.airlines-manager.com/aircraft/show/110582844,2:30,7:29,198,"$241,670.00","$214,984.00","$1,085.78","$43,140.60"
IAH - ABQ,55321920684,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/55321920684,https://www.airlines-manager.com/aircraft/show/88725601,6:00,10:59,310,"$318,057.00","$284,740.00",$918.52,"$57,138.46"
IAH - ABQ,55339205057,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/55339205057,https://www.airlines-manager.com/aircraft/show/103600702,13:00,17:59,310,"$318,057.00","$284,740.00",$918.52,"$57,138.46"
IAH - ABQ,55349594369,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/55349594369,https://www.airlines-manager.com/aircraft/show/103600701,18:45,23:44,310,"$318,057.00","$284,740.00",$918.52,"$57,138.46"
IAH - ALB,55307089361,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/55307089361,https://www.airlines-manager.com/aircraft/show/114266976,0:15,7:59,320,"$497,488.00","$452,034.00","$1,412.61","$58,452.67"
IAH - ALB,55307089362,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/55307089362,https://www.airlines-manager.com/aircraft/show/92800067,2:00,9:59,112,"$235,267.00","$208,227.00","$1,859.17","$26,082.71"
IAH - ALB,55335025991,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/55335025991,https://www.airlines-manager.com/aircraft/show/114266971,12:00,19:44,320,"$497,488.00","$452,034.00","$1,412.61","$58,452.67"
IAH - ALB,55342652328,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/55342652328,https://www.airlines-manager.com/aircraft/show/114266970,15:00,22:44,320,"$497,488.00","$452,034.00","$1,412.61","$58,452.67"
IAH - ALB,55352803003,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/55352803003,https://www.airlines-manager.com/aircraft/show/114266972,20:15,3:59,320,"$497,488.00","$452,034.00","$1,412.61","$58,452.67"
IAH - ANC,55335026014,IAH-ANC-ONT 1,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/55335026014,https://www.airlines-manager.com/aircraft/show/108258010,12:00,2:44,310,"$901,188.00","$830,964.00","$2,680.53","$56,400.27"
IAH - ANC,55342652231,IAH-ANC-ONT 2,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/55342652231,https://www.airlines-manager.com/aircraft/show/108258011,14:00,4:44,310,"$901,188.00","$830,964.00","$2,680.53","$56,400.27"
IAH - ANC,55352802904,IAH-ANC-ONT 3,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/55352802904,https://www.airlines-manager.com/aircraft/show/108258012,19:15,9:59,310,"$901,188.00","$830,964.00","$2,680.53","$56,400.27"
IAH - ANC,55355670167,IAH-ANC-ONT 4,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/55355670167,https://www.airlines-manager.com/aircraft/show/108089220,21:15,11:59,310,"$901,188.00","$830,964.00","$2,680.53","$56,400.27"
IAH - ANC,55358036091,IAH-ANC-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/55358036091,https://www.airlines-manager.com/aircraft/show/108286957,23:15,13:59,198,"$672,390.00","$616,070.00","$3,111.46","$41,814.71"
IAH - ATL,55307089378,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/55307089378,https://www.airlines-manager.com/aircraft/show/82323704,0:15,4:59,112,"$146,580.00","$112,539.00","$1,004.81","$23,775.85"
IAH - ATL,55331908200,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/55331908200,https://www.airlines-manager.com/aircraft/show/95894466,10:00,14:44,320,"$307,891.00","$243,816.00",$761.93,"$51,510.42"
IAH - ATL,55335025833,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/55335025833,https://www.airlines-manager.com/aircraft/show/96256511,10:45,15:29,320,"$307,891.00","$243,816.00",$761.93,"$51,510.42"
IAH - ATL,55345991572,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/55345991572,https://www.airlines-manager.com/aircraft/show/96183549,16:00,20:44,320,"$307,891.00","$243,816.00",$761.93,"$51,510.42"
IAH - ATL,55349594246,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/55349594246,https://www.airlines-manager.com/aircraft/show/96177955,17:45,22:29,320,"$307,891.00","$243,816.00",$761.93,"$51,510.42"
IAH - ATL,55359814147,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/55359814147,https://www.airlines-manager.com/aircraft/show/96250652,23:45,4:29,320,"$307,891.00","$243,816.00",$761.93,"$51,510.42"
IAH - AUS,55318172058,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/55318172058,https://www.airlines-manager.com/aircraft/show/106007214,4:15,6:59,338,"$100,920.00","$77,319.00",$228.75,"$28,287.44"
IAH - AUS,55335025845,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/55335025845,https://www.airlines-manager.com/aircraft/show/106007213,11:00,13:44,338,"$100,920.00","$77,319.00",$228.75,"$28,287.44"
IAH - AUS,55335025846,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/55335025846,https://www.airlines-manager.com/aircraft/show/106007217,12:00,14:44,338,"$100,920.00","$77,319.00",$228.75,"$28,287.44"
IAH - AUS,55349594307,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/55349594307,https://www.airlines-manager.com/aircraft/show/106007216,18:15,20:59,338,"$100,920.00","$77,319.00",$228.75,"$28,287.44"
IAH - AUS,55355670176,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/55355670176,https://www.airlines-manager.com/aircraft/show/106007215,21:30,0:14,268,"$88,614.00","$65,236.00",$243.42,"$23,866.83"
IAH - BDL,55321920687,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/55321920687,https://www.airlines-manager.com/aircraft/show/103600700,6:00,13:59,310,"$500,324.00","$457,984.00","$1,477.37","$57,367.52"
IAH - BDL,55325252053,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/55325252053,https://www.airlines-manager.com/aircraft/show/110582844,7:30,15:29,198,"$377,004.00","$343,067.00","$1,732.66","$42,972.90"
IAH - BDL,55335025908,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/55335025908,https://www.airlines-manager.com/aircraft/show/88725601,11:00,18:59,310,"$500,324.00","$457,984.00","$1,477.37","$57,367.52"
IAH - BDL,55349594287,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/55349594287,https://www.airlines-manager.com/aircraft/show/103600702,18:00,1:59,310,"$500,324.00","$457,984.00","$1,477.37","$57,367.52"
IAH - BDL,55352802955,IAH-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/55352802955,https://www.airlines-manager.com/aircraft/show/96990010,19:45,3:44,112,"$235,319.00","$207,286.00","$1,850.77","$25,964.84"
IAH - BDL,55359814155,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/55359814155,https://www.airlines-manager.com/aircraft/show/103600701,23:45,7:44,310,"$500,324.00","$457,984.00","$1,477.37","$57,367.52"
IAH - BFF,55318172041,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/55318172041,https://www.airlines-manager.com/aircraft/show/114266972,4:00,9:44,320,"$366,994.00","$329,116.00","$1,028.49","$57,403.95"
IAH - BFF,55331908277,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/55331908277,https://www.airlines-manager.com/aircraft/show/114266976,10:15,15:59,320,"$366,994.00","$329,116.00","$1,028.49","$57,403.95"
IAH - BFF,55335026025,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/55335026025,https://www.airlines-manager.com/aircraft/show/92800067,12:00,17:44,112,"$173,788.00","$152,107.00","$1,358.10","$26,530.29"
IAH - BFF,55352802940,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/55352802940,https://www.airlines-manager.com/aircraft/show/114266971,19:45,1:29,320,"$366,994.00","$329,116.00","$1,028.49","$57,403.95"
IAH - BFF,55358036030,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/55358036030,https://www.airlines-manager.com/aircraft/show/114266970,22:45,4:29,320,"$366,994.00","$329,116.00","$1,028.49","$57,403.95"
IAH - BIL,55318171877,IAH-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/55318171877,https://www.airlines-manager.com/aircraft/show/117273390,2:45,9:59,320,"$457,445.00","$414,054.00","$1,293.92","$57,242.49"
IAH - BIL,55328734133,IAH-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/55328734133,https://www.airlines-manager.com/aircraft/show/117273392,9:00,16:14,320,"$457,445.00","$414,054.00","$1,293.92","$57,242.49"
IAH - BIL,55335025897,IAH-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/55335025897,https://www.airlines-manager.com/aircraft/show/117273389,11:00,18:14,320,"$457,445.00","$414,054.00","$1,293.92","$57,242.49"
IAH - BIL,55349594334,IAH-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/55349594334,https://www.airlines-manager.com/aircraft/show/117273391,18:30,1:44,320,"$457,445.00","$414,054.00","$1,293.92","$57,242.49"
IAH - BNA,55318172047,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/55318172047,https://www.airlines-manager.com/aircraft/show/104258214,4:00,8:44,310,"$302,944.00","$271,735.00",$876.56,"$57,408.80"
IAH - BNA,55331908152,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/55331908152,https://www.airlines-manager.com/aircraft/show/104258213,9:15,13:59,310,"$302,944.00","$271,735.00",$876.56,"$57,408.80"
IAH - BNA,55342652342,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/55342652342,https://www.airlines-manager.com/aircraft/show/104258212,15:00,19:44,310,"$302,944.00","$271,735.00",$876.56,"$57,408.80"
IAH - BNA,55355670220,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/55355670220,https://www.airlines-manager.com/aircraft/show/104258211,22:00,2:44,310,"$302,944.00","$271,735.00",$876.56,"$57,408.80"
IAH - BNA,55358036074,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/55358036074,https://www.airlines-manager.com/aircraft/show/103534664,23:00,3:44,112,"$143,897.00","$124,026.00","$1,107.38","$26,202.68"
IAH - BOG,55321920674,IAH 56A-4 E,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/55321920674,https://www.airlines-manager.com/aircraft/show/106676235,6:00,15:59,648,"$1,306,935.00","$1,214,643.00","$1,874.45","$121,667.08"
IAH - BOG,55342652169,IAH 56A-6 E,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/55342652169,https://www.airlines-manager.com/aircraft/show/106676237,14:00,23:59,648,"$1,306,935.00","$1,214,643.00","$1,874.45","$121,667.08"
IAH - BOG,55352802957,IAH 56A-1 E,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/55352802957,https://www.airlines-manager.com/aircraft/show/106676232,20:00,5:59,648,"$1,306,935.00","$1,214,643.00","$1,874.45","$121,667.08"
IAH - BOI,55307089484,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/55307089484,https://www.airlines-manager.com/aircraft/show/104258213,1:15,9:14,310,"$502,482.00","$460,855.00","$1,486.63","$57,727.14"
IAH - BOI,55325252015,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/55325252015,https://www.airlines-manager.com/aircraft/show/104258212,7:00,14:59,310,"$502,482.00","$460,855.00","$1,486.63","$57,727.14"
IAH - BOI,55342652222,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/55342652222,https://www.airlines-manager.com/aircraft/show/104258211,14:00,21:59,310,"$502,482.00","$460,855.00","$1,486.63","$57,727.14"
IAH - BOI,55342652223,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/55342652223,https://www.airlines-manager.com/aircraft/show/103534664,15:00,22:59,112,"$236,364.00","$208,802.00","$1,864.30","$26,154.74"
IAH - BOI,55352802971,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/55352802971,https://www.airlines-manager.com/aircraft/show/104258214,20:00,3:59,310,"$502,482.00","$460,855.00","$1,486.63","$57,727.14"
IAH - BOS,55307089527,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/55307089527,https://www.airlines-manager.com/aircraft/show/88400800,1:45,9:59,400,"$668,982.00","$607,178.00","$1,517.95","$73,746.32"
IAH - BOS,55335025857,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/55335025857,https://www.airlines-manager.com/aircraft/show/88400799,11:00,19:14,400,"$668,982.00","$607,178.00","$1,517.95","$73,746.32"
IAH - BOS,55335025858,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/55335025858,https://www.airlines-manager.com/aircraft/show/88400801,12:00,20:14,400,"$668,982.00","$607,178.00","$1,517.95","$73,746.32"
IAH - BOS,55349594243,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/55349594243,https://www.airlines-manager.com/aircraft/show/89233038,17:45,1:59,400,"$668,982.00","$607,178.00","$1,517.95","$73,746.32"
IAH - BOS,55349594244,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/55349594244,https://www.airlines-manager.com/aircraft/show/88400798,18:30,2:44,379,"$648,005.00","$587,071.00","$1,549.00","$71,304.17"
IAH - BSB,55335025957,IAH 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/55335025957,https://www.airlines-manager.com/aircraft/show/89124076,11:15,5:29,932,"$3,069,976.00","$2,802,042.00","$3,006.48","$153,676.89"
IAH - BSB,55352803014,IAH 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/55352803014,https://www.airlines-manager.com/aircraft/show/88905140,20:15,14:29,932,"$3,069,976.00","$2,802,042.00","$3,006.48","$153,676.89"
IAH - BTV,55307089312,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/55307089312,https://www.airlines-manager.com/aircraft/show/86385103,0:00,8:14,310,"$517,662.00","$475,935.00","$1,535.27","$57,805.87"
IAH - BTV,55318172090,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/55318172090,https://www.airlines-manager.com/aircraft/show/82543907,4:15,12:29,112,"$243,763.00","$215,988.00","$1,928.46","$26,233.36"
IAH - BTV,55325252032,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/55325252032,https://www.airlines-manager.com/aircraft/show/114373409,7:15,15:29,310,"$517,662.00","$475,935.00","$1,535.27","$57,805.87"
IAH - BTV,55342652240,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/55342652240,https://www.airlines-manager.com/aircraft/show/114373410,14:00,22:14,310,"$517,662.00","$475,935.00","$1,535.27","$57,805.87"
IAH - BTV,55349594371,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/55349594371,https://www.airlines-manager.com/aircraft/show/113994196,18:45,2:59,310,"$517,662.00","$475,935.00","$1,535.27","$57,805.87"
IAH - BUF,55307089485,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/55307089485,https://www.airlines-manager.com/aircraft/show/107467127,1:15,8:14,310,"$454,004.00","$415,337.00","$1,339.80","$59,475.47"
IAH - BUF,55318172048,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/55318172048,https://www.airlines-manager.com/aircraft/show/107467128,4:00,10:59,310,"$454,004.00","$415,337.00","$1,339.80","$59,475.47"
IAH - BUF,55339205064,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/55339205064,https://www.airlines-manager.com/aircraft/show/107467129,13:00,19:59,310,"$454,004.00","$415,337.00","$1,339.80","$59,475.47"
IAH - BUF,55345991699,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/55345991699,https://www.airlines-manager.com/aircraft/show/110582843,17:00,23:59,198,"$342,604.00","$311,616.00","$1,573.82","$44,622.82"
IAH - BUF,55355670166,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/55355670166,https://www.airlines-manager.com/aircraft/show/107467130,21:15,4:14,310,"$454,004.00","$415,337.00","$1,339.80","$59,475.47"
IAH - BUR,55307089680,IAH-YEG-BUR 4,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/55307089680,https://www.airlines-manager.com/aircraft/show/117273341,2:30,9:59,310,"$469,559.00","$430,890.00","$1,389.97","$57,579.96"
IAH - BUR,55318171970,IAH-YEG-BUR 3,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/55318171970,https://www.airlines-manager.com/aircraft/show/117273342,3:15,10:44,310,"$469,559.00","$430,890.00","$1,389.97","$57,579.96"
IAH - BUR,55335025851,IAH-YEG-BUR 5,A321neo,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/55335025851,https://www.airlines-manager.com/aircraft/show/117273340,11:00,18:29,338,"$508,813.00","$471,862.00","$1,396.04","$63,055.06"
IAH - BUR,55349594296,IAH-YEG-BUR 2,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/55349594296,https://www.airlines-manager.com/aircraft/show/117273343,18:00,1:29,310,"$469,559.00","$430,890.00","$1,389.97","$57,579.96"
IAH - BUR,55352803008,IAH-YEG-BUR 1,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/55352803008,https://www.airlines-manager.com/aircraft/show/117273344,20:15,3:44,292,"$453,390.00","$415,399.00","$1,422.60","$55,509.89"
IAH - BWI,55307089346,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/55307089346,https://www.airlines-manager.com/aircraft/show/106007215,0:15,6:59,338,"$470,491.00","$429,120.00","$1,269.59","$63,730.69"
IAH - BWI,55335025847,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/55335025847,https://www.airlines-manager.com/aircraft/show/106007214,11:00,17:44,338,"$470,491.00","$429,120.00","$1,269.59","$63,730.69"
IAH - BWI,55339205103,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/55339205103,https://www.airlines-manager.com/aircraft/show/106007213,13:45,20:29,338,"$470,491.00","$429,120.00","$1,269.59","$63,730.69"
IAH - BWI,55342652289,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/55342652289,https://www.airlines-manager.com/aircraft/show/106007217,14:45,21:29,338,"$470,491.00","$429,120.00","$1,269.59","$63,730.69"
IAH - BWI,55355670122,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/55355670122,https://www.airlines-manager.com/aircraft/show/106007216,21:00,3:44,338,"$470,491.00","$429,120.00","$1,269.59","$63,730.69"
IAH - BZN,55307089394,IAH-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/55307089394,https://www.airlines-manager.com/aircraft/show/117273392,0:30,7:59,320,"$475,071.00","$431,309.00","$1,347.84","$57,635.95"
IAH - BZN,55307089395,IAH-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/55307089395,https://www.airlines-manager.com/aircraft/show/117273389,2:30,9:59,320,"$475,071.00","$431,309.00","$1,347.84","$57,635.95"
IAH - BZN,55335025899,IAH-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/55335025899,https://www.airlines-manager.com/aircraft/show/117273391,11:00,18:29,320,"$475,071.00","$431,309.00","$1,347.84","$57,635.95"
IAH - BZN,55352802894,IAH-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/55352802894,https://www.airlines-manager.com/aircraft/show/117273390,19:15,2:44,320,"$475,071.00","$431,309.00","$1,347.84","$57,635.95"
IAH - CAK,55318171924,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/55318171924,https://www.airlines-manager.com/aircraft/show/113994196,3:00,9:14,310,"$393,368.00","$358,933.00","$1,157.85","$57,582.83"
IAH - CAK,55328734069,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/55328734069,https://www.airlines-manager.com/aircraft/show/86385103,8:15,14:29,310,"$393,368.00","$358,933.00","$1,157.85","$57,582.83"
IAH - CAK,55339205081,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/55339205081,https://www.airlines-manager.com/aircraft/show/82543907,13:00,19:14,112,"$185,783.00","$163,229.00","$1,457.40","$26,186.47"
IAH - CAK,55345991601,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/55345991601,https://www.airlines-manager.com/aircraft/show/114373409,16:00,22:14,310,"$393,368.00","$358,933.00","$1,157.85","$57,582.83"
IAH - CAK,55358035981,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/55358035981,https://www.airlines-manager.com/aircraft/show/114373410,22:15,4:29,293,"$380,536.00","$346,606.00","$1,182.96","$55,605.24"
IAH - CHS,55307089524,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/55307089524,https://www.airlines-manager.com/aircraft/show/107467211,1:30,7:14,112,"$170,218.00","$149,061.00","$1,330.90","$25,999.01"
IAH - CHS,55318172001,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/55318172001,https://www.airlines-manager.com/aircraft/show/107467131,3:30,9:14,310,"$359,135.00","$326,559.00","$1,053.42","$56,957.97"
IAH - CHS,55335026011,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/55335026011,https://www.airlines-manager.com/aircraft/show/107467132,12:00,17:44,310,"$359,135.00","$326,559.00","$1,053.42","$56,957.97"
IAH - CHS,55349594210,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/55349594210,https://www.airlines-manager.com/aircraft/show/107467133,17:15,22:59,310,"$359,135.00","$326,559.00","$1,053.42","$56,957.97"
IAH - CHS,55359814158,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/55359814158,https://www.airlines-manager.com/aircraft/show/107467134,23:45,5:29,310,"$359,135.00","$326,559.00","$1,053.42","$56,957.97"
IAH - CID,55335025900,IAH-EUG-MFR 3,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/55335025900,https://www.airlines-manager.com/aircraft/show/119525218,11:00,16:29,320,"$342,285.00","$307,102.00",$959.69,"$56,006.44"
IAH - CID,55339205035,IAH-EUG-MFR 4,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/55339205035,https://www.airlines-manager.com/aircraft/show/119525217,13:00,18:29,320,"$342,285.00","$307,102.00",$959.69,"$56,006.44"
IAH - CID,55352802942,IAH-EUG-MFR 2,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/55352802942,https://www.airlines-manager.com/aircraft/show/119525219,19:45,1:14,320,"$342,285.00","$307,102.00",$959.69,"$56,006.44"
IAH - CID,55355670206,IAH-EUG-MFR 1,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/55355670206,https://www.airlines-manager.com/aircraft/show/119525220,21:45,3:14,301,"$330,013.00","$295,263.00",$980.94,"$53,847.36"
IAH - CLE,55307089564,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/55307089564,https://www.airlines-manager.com/aircraft/show/103600702,2:00,8:14,310,"$401,042.00","$364,331.00","$1,175.26","$58,448.82"
IAH - CLE,55328734037,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/55328734037,https://www.airlines-manager.com/aircraft/show/103600701,7:45,13:59,310,"$401,042.00","$364,331.00","$1,175.26","$58,448.82"
IAH - CLE,55342652217,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/55342652217,https://www.airlines-manager.com/aircraft/show/103600700,14:00,20:14,310,"$401,042.00","$364,331.00","$1,175.26","$58,448.82"
IAH - CLE,55342652218,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/55342652218,https://www.airlines-manager.com/aircraft/show/110582844,15:30,21:44,198,"$302,827.00","$273,411.00","$1,380.86","$43,862.73"
IAH - CLE,55352802869,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/55352802869,https://www.airlines-manager.com/aircraft/show/88725601,19:00,1:14,310,"$401,042.00","$364,331.00","$1,175.26","$58,448.82"
IAH - CLT,55318172022,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/55318172022,https://www.airlines-manager.com/aircraft/show/93094697,3:45,9:29,310,"$361,710.00","$319,410.00","$1,030.35","$55,711.05"
IAH - CLT,55331908234,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/55331908234,https://www.airlines-manager.com/aircraft/show/93094698,10:00,15:44,310,"$361,710.00","$319,410.00","$1,030.35","$55,711.05"
IAH - CLT,55335026026,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/55335026026,https://www.airlines-manager.com/aircraft/show/93100455,12:00,17:44,112,"$171,081.00","$144,110.00","$1,286.70","$25,135.47"
IAH - CLT,55345991655,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/55345991655,https://www.airlines-manager.com/aircraft/show/93094699,16:45,22:29,310,"$361,710.00","$319,410.00","$1,030.35","$55,711.05"
IAH - CLT,55349594365,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/55349594365,https://www.airlines-manager.com/aircraft/show/93094695,18:45,0:29,310,"$361,710.00","$319,410.00","$1,030.35","$55,711.05"
IAH - CLT,55355670219,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/55355670219,https://www.airlines-manager.com/aircraft/show/93094696,22:00,3:44,310,"$361,710.00","$319,410.00","$1,030.35","$55,711.05"
IAH - CMH,55325252014,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/55325252014,https://www.airlines-manager.com/aircraft/show/103882355,7:00,12:59,310,"$379,267.00","$344,000.00","$1,109.68","$57,493.04"
IAH - CMH,55335025916,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/55335025916,https://www.airlines-manager.com/aircraft/show/103882358,11:00,16:59,310,"$379,267.00","$344,000.00","$1,109.68","$57,493.04"
IAH - CMH,55335025917,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/55335025917,https://www.airlines-manager.com/aircraft/show/105099861,12:00,17:59,112,"$179,105.00","$156,225.00","$1,394.87","$26,110.03"
IAH - CMH,55352802901,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/55352802901,https://www.airlines-manager.com/aircraft/show/103882357,19:15,1:14,310,"$379,267.00","$344,000.00","$1,109.68","$57,493.04"
IAH - CMH,55358036064,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/55358036064,https://www.airlines-manager.com/aircraft/show/103882356,23:00,4:59,310,"$379,267.00","$344,000.00","$1,109.68","$57,493.04"
IAH - COS,55307089542,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/55307089542,https://www.airlines-manager.com/aircraft/show/103882355,1:45,6:59,310,"$331,840.00","$298,925.00",$964.27,"$57,119.43"
IAH - COS,55321920666,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/55321920666,https://www.airlines-manager.com/aircraft/show/103882358,5:45,10:59,310,"$331,840.00","$298,925.00",$964.27,"$57,119.43"
IAH - COS,55342652221,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/55342652221,https://www.airlines-manager.com/aircraft/show/103882357,14:00,19:14,310,"$331,840.00","$298,925.00",$964.27,"$57,119.43"
IAH - COS,55349594257,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/55349594257,https://www.airlines-manager.com/aircraft/show/103882356,17:45,22:59,310,"$331,840.00","$298,925.00",$964.27,"$57,119.43"
IAH - COS,55358036046,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/55358036046,https://www.airlines-manager.com/aircraft/show/105099861,22:45,3:59,112,"$157,707.00","$136,546.00","$1,219.16","$26,091.59"
IAH - CUN,55307089437,IAH 56A-4 E,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/55307089437,https://www.airlines-manager.com/aircraft/show/106676235,1:00,5:59,648,"$626,023.00","$572,914.00",$884.13,"$114,966.02"
IAH - CUN,55339204963,IAH 56A-5 E,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/55339204963,https://www.airlines-manager.com/aircraft/show/106676236,12:30,17:29,648,"$626,023.00","$572,914.00",$884.13,"$114,966.02"
IAH - CUN,55355670058,IAH 56A-7 E,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/55355670058,https://www.airlines-manager.com/aircraft/show/106676238,20:30,1:29,648,"$626,023.00","$572,914.00",$884.13,"$114,966.02"
IAH - CVG,55307089358,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/55307089358,https://www.airlines-manager.com/aircraft/show/99093332,0:15,5:44,320,"$350,135.00","$309,434.00",$966.98,"$56,431.73"
IAH - CVG,55318172037,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/55318172037,https://www.airlines-manager.com/aircraft/show/99093333,4:00,9:29,320,"$350,135.00","$309,434.00",$966.98,"$56,431.73"
IAH - CVG,55328734049,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/55328734049,https://www.airlines-manager.com/aircraft/show/99093334,8:00,13:29,320,"$350,135.00","$309,434.00",$966.98,"$56,431.73"
IAH - CVG,55342652187,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/55342652187,https://www.airlines-manager.com/aircraft/show/99093335,14:00,19:29,320,"$350,135.00","$309,434.00",$966.98,"$56,431.73"
IAH - CVG,55345991606,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/55345991606,https://www.airlines-manager.com/aircraft/show/106499070,16:00,21:29,198,"$265,556.00","$237,029.00","$1,197.12","$43,227.17"
IAH - DAB,55307089492,IAH-ILM-SRQ 4,A321-200,https://www.airlines-manager.com/network/showline/50666457,https://www.airlines-manager.com/network/showflight/55307089492,https://www.airlines-manager.com/aircraft/show/120452415,1:15,6:44,310,"$344,468.00","$312,587.00","$1,008.35","$57,006.75"
IAH - DAB,55328734141,IAH-ILM-SRQ 3,A321-200,https://www.airlines-manager.com/network/showline/50666457,https://www.airlines-manager.com/network/showflight/55328734141,https://www.airlines-manager.com/aircraft/show/120452416,9:00,14:29,310,"$344,468.00","$312,587.00","$1,008.35","$57,006.75"
IAH - DAB,55342652273,IAH-ILM-SRQ 2,A321-200,https://www.airlines-manager.com/network/showline/50666457,https://www.airlines-manager.com/network/showflight/55342652273,https://www.airlines-manager.com/aircraft/show/120452417,14:15,19:44,310,"$344,468.00","$312,587.00","$1,008.35","$57,006.75"
IAH - DAB,55352802928,IAH-ILM-SRQ 1,A321-200,https://www.airlines-manager.com/network/showline/50666457,https://www.airlines-manager.com/network/showflight/55352802928,https://www.airlines-manager.com/aircraft/show/120452418,19:30,0:59,277,"$322,971.00","$291,867.00","$1,053.67","$53,228.02"
IAH - DEN,55335025975,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/55335025975,https://www.airlines-manager.com/aircraft/show/105562975,12:00,17:29,338,"$378,458.00","$325,224.00",$962.20,"$59,311.37"
IAH - DEN,55339204986,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/55339204986,https://www.airlines-manager.com/aircraft/show/105562971,13:00,18:29,338,"$378,458.00","$325,224.00",$962.20,"$59,311.37"
IAH - DEN,55342652258,IAH CARGO,B737-700C,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/55342652258,https://www.airlines-manager.com/aircraft/show/120293379,14:00,19:29,0,"$97,604.00","$23,471.00",$0.00,"$4,280.43"
IAH - DEN,55358035992,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/55358035992,https://www.airlines-manager.com/aircraft/show/105562972,22:30,3:59,338,"$378,458.00","$325,224.00",$962.20,"$59,311.37"
IAH - DEN,55358035993,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/55358035993,https://www.airlines-manager.com/aircraft/show/105562973,23:00,4:29,338,"$378,458.00","$325,224.00",$962.20,"$59,311.37"
IAH - DEN,55359814120,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/55359814120,https://www.airlines-manager.com/aircraft/show/105562974,23:30,4:59,338,"$378,458.00","$325,224.00",$962.20,"$59,311.37"
IAH - DFW,55307089450,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/55307089450,https://www.airlines-manager.com/aircraft/show/99093333,1:00,3:59,320,"$129,311.00","$81,717.00",$255.37,"$27,391.17"
IAH - DFW,55321920613,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/55321920613,https://www.airlines-manager.com/aircraft/show/99093334,5:00,7:59,320,"$129,311.00","$81,717.00",$255.37,"$27,391.17"
IAH - DFW,55335025882,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/55335025882,https://www.airlines-manager.com/aircraft/show/99093335,11:00,13:59,320,"$129,311.00","$81,717.00",$255.37,"$27,391.17"
IAH - DFW,55339205077,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/55339205077,https://www.airlines-manager.com/aircraft/show/106499070,13:00,15:59,198,"$97,620.00","$65,532.00",$330.97,"$21,966.03"
IAH - DFW,55342652272,IAH-YEG-BUR 4,A321-200,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/55342652272,https://www.airlines-manager.com/aircraft/show/117273341,14:15,17:14,310,"$130,762.00","$90,664.00",$292.46,"$30,390.17"
IAH - DFW,55355670159,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/55355670159,https://www.airlines-manager.com/aircraft/show/99093332,21:15,0:14,320,"$129,311.00","$81,717.00",$255.37,"$27,391.17"
IAH - DSM,55318171959,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/55318171959,https://www.airlines-manager.com/aircraft/show/110424761,3:15,8:29,320,"$333,281.00","$298,351.00",$932.35,"$57,009.75"
IAH - DSM,55328734116,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/55328734116,https://www.airlines-manager.com/aircraft/show/110424758,8:45,13:59,320,"$333,281.00","$298,351.00",$932.35,"$57,009.75"
IAH - DSM,55342652198,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/55342652198,https://www.airlines-manager.com/aircraft/show/110424759,14:00,19:14,320,"$333,281.00","$298,351.00",$932.35,"$57,009.75"
IAH - DSM,55349594333,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/55349594333,https://www.airlines-manager.com/aircraft/show/110424760,18:30,23:44,320,"$333,281.00","$298,351.00",$932.35,"$57,009.75"
IAH - DTW,55307089400,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/55307089400,https://www.airlines-manager.com/aircraft/show/90183184,0:30,6:44,310,"$395,838.00","$351,081.00","$1,132.52","$56,323.16"
IAH - DTW,55307089401,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/55307089401,https://www.airlines-manager.com/aircraft/show/90183180,2:30,8:44,310,"$395,838.00","$351,081.00","$1,132.52","$56,323.16"
IAH - DTW,55321920685,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/55321920685,https://www.airlines-manager.com/aircraft/show/90183181,6:00,12:14,310,"$395,838.00","$351,081.00","$1,132.52","$56,323.16"
IAH - DTW,55339205042,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/55339205042,https://www.airlines-manager.com/aircraft/show/90183182,13:00,19:14,310,"$395,838.00","$351,081.00","$1,132.52","$56,323.16"
IAH - DTW,55349594362,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/55349594362,https://www.airlines-manager.com/aircraft/show/90183183,18:45,0:59,310,"$395,838.00","$351,081.00","$1,132.52","$56,323.16"
IAH - DTW,55355670118,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/55355670118,https://www.airlines-manager.com/aircraft/show/90140936,20:45,2:59,136,"$188,161.00","$159,615.00","$1,173.64","$25,606.68"
IAH - ECP,55307089464,IAH-ILM-SRQ 1,A321-200,https://www.airlines-manager.com/network/showline/50666459,https://www.airlines-manager.com/network/showflight/55307089464,https://www.airlines-manager.com/aircraft/show/120452418,1:00,5:14,310,"$272,555.00","$244,634.00",$789.14,"$57,787.56"
IAH - ECP,55331908167,IAH-ILM-SRQ 4,A321-200,https://www.airlines-manager.com/network/showline/50666459,https://www.airlines-manager.com/network/showflight/55331908167,https://www.airlines-manager.com/aircraft/show/120452415,9:30,13:44,310,"$272,555.00","$244,634.00",$789.14,"$57,787.56"
IAH - ECP,55342652285,IAH-ILM-SRQ 3,A321-200,https://www.airlines-manager.com/network/showline/50666459,https://www.airlines-manager.com/network/showflight/55342652285,https://www.airlines-manager.com/aircraft/show/120452416,14:30,18:44,310,"$272,555.00","$244,634.00",$789.14,"$57,787.56"
IAH - ECP,55352802951,IAH-ILM-SRQ 2,A321-200,https://www.airlines-manager.com/network/showline/50666459,https://www.airlines-manager.com/network/showflight/55352802951,https://www.airlines-manager.com/aircraft/show/120452417,19:45,23:59,310,"$272,555.00","$244,634.00",$789.14,"$57,787.56"
IAH - ELP,55318172000,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/55318172000,https://www.airlines-manager.com/aircraft/show/104717245,3:30,8:14,310,"$300,686.00","$270,329.00",$872.03,"$57,111.76"
IAH - ELP,55335025921,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/55335025921,https://www.airlines-manager.com/aircraft/show/104717246,11:00,15:44,310,"$300,686.00","$270,329.00",$872.03,"$57,111.76"
IAH - ELP,55345991656,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/55345991656,https://www.airlines-manager.com/aircraft/show/104717247,16:45,21:29,310,"$300,686.00","$270,329.00",$872.03,"$57,111.76"
IAH - ELP,55352802885,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/55352802885,https://www.airlines-manager.com/aircraft/show/104743902,19:00,23:44,112,"$143,217.00","$123,840.00","$1,105.71","$26,163.38"
IAH - ELP,55355670222,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/55355670222,https://www.airlines-manager.com/aircraft/show/104717244,22:00,2:44,310,"$300,686.00","$270,329.00",$872.03,"$57,111.76"
IAH - EUG,55307089477,IAH-EUG-MFR 2,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/55307089477,https://www.airlines-manager.com/aircraft/show/119525219,1:15,10:14,320,"$571,197.00","$521,465.00","$1,629.58","$58,048.05"
IAH - EUG,55318171962,IAH-EUG-MFR 1,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/55318171962,https://www.airlines-manager.com/aircraft/show/119525220,3:15,12:14,320,"$571,197.00","$521,465.00","$1,629.58","$58,048.05"
IAH - EUG,55335025951,IAH-EUG-MFR 5,ERJ-175,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/55335025951,https://www.airlines-manager.com/aircraft/show/119525248,11:00,20:14,112,"$269,366.00","$239,235.00","$2,136.03","$25,909.93"
IAH - EUG,55345991635,IAH-EUG-MFR 3,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/55345991635,https://www.airlines-manager.com/aircraft/show/119525218,16:30,1:29,320,"$571,197.00","$521,465.00","$1,629.58","$58,048.05"
IAH - EUG,55349594335,IAH-EUG-MFR 4,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/55349594335,https://www.airlines-manager.com/aircraft/show/119525217,18:30,3:29,320,"$571,197.00","$521,465.00","$1,629.58","$58,048.05"
IAH - EZE,55318172053,IAH 84A-2 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/55318172053,https://www.airlines-manager.com/aircraft/show/89439130,4:00,0:29,932,"$3,382,163.00","$3,084,901.00","$3,309.98","$150,605.42"
IAH - EZE,55321920655,IAH 84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/55321920655,https://www.airlines-manager.com/aircraft/show/89124075,5:30,1:59,932,"$3,382,163.00","$3,084,901.00","$3,309.98","$150,605.42"
IAH - FAR,55307089507,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/55307089507,https://www.airlines-manager.com/aircraft/show/110424754,1:30,8:14,320,"$419,119.00","$378,672.00","$1,183.35","$56,238.42"
IAH - FAR,55318172071,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/55318172071,https://www.airlines-manager.com/aircraft/show/110424755,4:15,10:59,320,"$419,119.00","$378,672.00","$1,183.35","$56,238.42"
IAH - FAR,55335025988,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/55335025988,https://www.airlines-manager.com/aircraft/show/110424756,12:00,18:44,320,"$419,119.00","$378,672.00","$1,183.35","$56,238.42"
IAH - FAR,55355670216,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/55355670216,https://www.airlines-manager.com/aircraft/show/110424757,22:00,4:44,320,"$419,119.00","$378,672.00","$1,183.35","$56,238.42"
IAH - FAT,55318172040,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/55318172040,https://www.airlines-manager.com/aircraft/show/110424760,4:00,11:44,320,"$499,203.00","$453,750.00","$1,417.97","$58,674.57"
IAH - FAT,55342652199,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/55342652199,https://www.airlines-manager.com/aircraft/show/110424761,14:00,21:44,320,"$499,203.00","$453,750.00","$1,417.97","$58,674.57"
IAH - FAT,55349594313,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/55349594313,https://www.airlines-manager.com/aircraft/show/110424758,18:15,1:59,320,"$499,203.00","$453,750.00","$1,417.97","$58,674.57"
IAH - FAT,55359814125,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/55359814125,https://www.airlines-manager.com/aircraft/show/110424759,23:30,7:14,320,"$499,203.00","$453,750.00","$1,417.97","$58,674.57"
IAH - FCA,55307089535,IAH-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/55307089535,https://www.airlines-manager.com/aircraft/show/117273391,1:45,9:59,320,"$523,626.00","$476,436.00","$1,488.86","$57,866.72"
IAH - FCA,55335025898,IAH-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/55335025898,https://www.airlines-manager.com/aircraft/show/117273390,11:00,19:14,320,"$523,626.00","$476,436.00","$1,488.86","$57,866.72"
IAH - FCA,55345991622,IAH-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/55345991622,https://www.airlines-manager.com/aircraft/show/117273392,16:15,0:29,320,"$523,626.00","$476,436.00","$1,488.86","$57,866.72"
IAH - FCA,55349594314,IAH-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/55349594314,https://www.airlines-manager.com/aircraft/show/117273389,18:15,2:29,307,"$510,545.00","$463,919.00","$1,511.14","$56,346.44"
IAH - FLL,55307089402,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/55307089402,https://www.airlines-manager.com/aircraft/show/93094695,0:30,6:14,310,"$368,422.00","$331,194.00","$1,068.37","$57,766.40"
IAH - FLL,55318172021,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/55318172021,https://www.airlines-manager.com/aircraft/show/93094696,3:45,9:29,310,"$368,422.00","$331,194.00","$1,068.37","$57,766.40"
IAH - FLL,55331908233,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/55331908233,https://www.airlines-manager.com/aircraft/show/93094697,10:00,15:44,310,"$368,422.00","$331,194.00","$1,068.37","$57,766.40"
IAH - FLL,55345991541,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/55345991541,https://www.airlines-manager.com/aircraft/show/93094698,15:45,21:29,310,"$368,422.00","$331,194.00","$1,068.37","$57,766.40"
IAH - FLL,55349594264,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/55349594264,https://www.airlines-manager.com/aircraft/show/93100455,17:45,23:29,112,"$174,669.00","$150,649.00","$1,345.08","$26,275.99"
IAH - FLL,55358036009,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/55358036009,https://www.airlines-manager.com/aircraft/show/93094699,22:30,4:14,310,"$368,422.00","$331,194.00","$1,068.37","$57,766.40"
IAH - FSD,55321920591,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/55321920591,https://www.airlines-manager.com/aircraft/show/110424757,4:45,10:29,320,"$363,297.00","$326,462.00","$1,020.19","$56,941.05"
IAH - FSD,55328734068,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/55328734068,https://www.airlines-manager.com/aircraft/show/110424754,8:15,13:59,320,"$363,297.00","$326,462.00","$1,020.19","$56,941.05"
IAH - FSD,55335025892,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/55335025892,https://www.airlines-manager.com/aircraft/show/110424755,11:00,16:44,320,"$363,297.00","$326,462.00","$1,020.19","$56,941.05"
IAH - FSD,55349594357,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/55349594357,https://www.airlines-manager.com/aircraft/show/110424756,18:45,0:29,280,"$335,702.00","$299,882.00","$1,071.01","$52,305.00"
IAH - GDL,55321920587,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/55321920587,https://www.airlines-manager.com/aircraft/show/114266977,4:45,9:59,400,"$439,742.00","$397,229.00",$993.07,"$75,903.63"
IAH - GDL,55335025831,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/55335025831,https://www.airlines-manager.com/aircraft/show/114266980,10:45,15:59,400,"$439,742.00","$397,229.00",$993.07,"$75,903.63"
IAH - GDL,55335025832,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/55335025832,https://www.airlines-manager.com/aircraft/show/114266979,12:00,17:14,400,"$439,742.00","$397,229.00",$993.07,"$75,903.63"
IAH - GDL,55352802965,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/55352802965,https://www.airlines-manager.com/aircraft/show/114266978,20:00,1:14,355,"$396,692.00","$355,377.00","$1,001.06","$67,906.43"
IAH - GIG,55307089330,IAH 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/55307089330,https://www.airlines-manager.com/aircraft/show/88905140,0:00,20:14,932,"$3,392,936.00","$3,090,291.00","$3,315.76","$152,732.67"
IAH - GIG,55307089331,IAH 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/55307089331,https://www.airlines-manager.com/aircraft/show/89124074,2:00,22:14,932,"$3,392,936.00","$3,090,291.00","$3,315.76","$152,732.67"
IAH - GRR,55307089491,IAH-GRR-MSN 3,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/55307089491,https://www.airlines-manager.com/aircraft/show/117273346,1:15,7:29,310,"$391,082.00","$356,324.00","$1,149.43","$57,164.28"
IAH - GRR,55325252033,IAH-GRR-MSN 2,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/55325252033,https://www.airlines-manager.com/aircraft/show/117273347,7:15,13:29,310,"$391,082.00","$356,324.00","$1,149.43","$57,164.28"
IAH - GRR,55342652248,IAH-GRR-MSN 1,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/55342652248,https://www.airlines-manager.com/aircraft/show/117273348,14:00,20:14,310,"$391,082.00","$356,324.00","$1,149.43","$57,164.28"
IAH - GRR,55345991604,IAH-GRR-MSN 4,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/55345991604,https://www.airlines-manager.com/aircraft/show/117273345,16:00,22:14,310,"$391,082.00","$356,324.00","$1,149.43","$57,164.28"
IAH - GRU,55307089438,IAH 56A-7 E,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/55307089438,https://www.airlines-manager.com/aircraft/show/106676238,1:00,20:29,648,"$2,489,104.00","$2,319,462.00","$3,579.42","$119,048.52"
IAH - GRU,55335025854,IAH 56A-2 E,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/55335025854,https://www.airlines-manager.com/aircraft/show/106676233,11:00,6:29,648,"$2,489,104.00","$2,319,462.00","$3,579.42","$119,048.52"
IAH - GRU,55345991662,IAH 56A-4 E,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/55345991662,https://www.airlines-manager.com/aircraft/show/106676235,17:00,12:29,648,"$2,489,104.00","$2,319,462.00","$3,579.42","$119,048.52"
IAH - GSO,55307089539,IAH-SYR-ROC 1,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/55307089539,https://www.airlines-manager.com/aircraft/show/119525224,1:45,7:44,320,"$375,703.00","$337,351.00","$1,054.22","$56,381.78"
IAH - GSO,55318171878,IAH-SYR-ROC 4,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/55318171878,https://www.airlines-manager.com/aircraft/show/119525221,2:45,8:44,320,"$375,703.00","$337,351.00","$1,054.22","$56,381.78"
IAH - GSO,55335025902,IAH-SYR-ROC 3,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/55335025902,https://www.airlines-manager.com/aircraft/show/119525222,11:00,16:59,320,"$375,703.00","$337,351.00","$1,054.22","$56,381.78"
IAH - GSO,55349594315,IAH-SYR-ROC 2,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/55349594315,https://www.airlines-manager.com/aircraft/show/119525223,18:15,0:14,320,"$375,703.00","$337,351.00","$1,054.22","$56,381.78"
IAH - IAD,55318172011,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/55318172011,https://www.airlines-manager.com/aircraft/show/105400635,3:30,10:14,112,"$199,547.00","$171,293.00","$1,529.40","$25,439.55"
IAH - IAD,55325251985,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/55325251985,https://www.airlines-manager.com/aircraft/show/98578923,6:45,13:29,320,"$423,598.00","$374,014.00","$1,168.79","$55,546.63"
IAH - IAD,55331908174,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/55331908174,https://www.airlines-manager.com/aircraft/show/98578920,9:45,16:29,320,"$423,598.00","$374,014.00","$1,168.79","$55,546.63"
IAH - IAD,55339205013,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/55339205013,https://www.airlines-manager.com/aircraft/show/98578924,13:00,19:44,320,"$423,598.00","$374,014.00","$1,168.79","$55,546.63"
IAH - IAD,55349594279,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/55349594279,https://www.airlines-manager.com/aircraft/show/98578921,18:00,0:44,320,"$423,598.00","$374,014.00","$1,168.79","$55,546.63"
IAH - IAD,55355670180,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/55355670180,https://www.airlines-manager.com/aircraft/show/98578922,21:30,4:14,320,"$423,598.00","$374,014.00","$1,168.79","$55,546.63"
IAH - ICT,55331908176,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/55331908176,https://www.airlines-manager.com/aircraft/show/110424761,9:45,13:59,320,"$250,907.00","$219,323.00",$685.38,"$51,808.58"
IAH - ICT,55342652197,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/55342652197,https://www.airlines-manager.com/aircraft/show/110424758,14:00,18:14,320,"$250,907.00","$219,323.00",$685.38,"$51,808.58"
IAH - ICT,55352802893,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/55352802893,https://www.airlines-manager.com/aircraft/show/110424759,19:15,23:29,320,"$250,907.00","$219,323.00",$685.38,"$51,808.58"
IAH - ICT,55359814149,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/55359814149,https://www.airlines-manager.com/aircraft/show/110424760,23:45,3:59,316,"$249,016.00","$217,490.00",$688.26,"$51,375.59"
IAH - ILM,55307089323,IAH-ILM-SRQ 2,A321-200,https://www.airlines-manager.com/network/showline/50666455,https://www.airlines-manager.com/network/showflight/55307089323,https://www.airlines-manager.com/aircraft/show/120452417,0:00,6:14,310,"$394,081.00","$360,168.00","$1,161.83","$57,780.96"
IAH - ILM,55328734062,IAH-ILM-SRQ 1,A321-200,https://www.airlines-manager.com/network/showline/50666455,https://www.airlines-manager.com/network/showflight/55328734062,https://www.airlines-manager.com/aircraft/show/120452418,8:00,14:14,310,"$394,081.00","$360,168.00","$1,161.83","$57,780.96"
IAH - ILM,55339205108,IAH-ILM-SRQ 4,A321-200,https://www.airlines-manager.com/network/showline/50666455,https://www.airlines-manager.com/network/showflight/55339205108,https://www.airlines-manager.com/aircraft/show/120452415,13:45,19:59,310,"$394,081.00","$360,168.00","$1,161.83","$57,780.96"
IAH - ILM,55349594374,IAH-ILM-SRQ 3,A321-200,https://www.airlines-manager.com/network/showline/50666455,https://www.airlines-manager.com/network/showflight/55349594374,https://www.airlines-manager.com/aircraft/show/120452416,18:45,0:59,310,"$394,081.00","$360,168.00","$1,161.83","$57,780.96"
IAH - IND,55307089316,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/55307089316,https://www.airlines-manager.com/aircraft/show/100684074,0:00,5:29,310,"$344,386.00","$310,520.00","$1,001.68","$56,629.79"
IAH - IND,55321920596,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/55321920596,https://www.airlines-manager.com/aircraft/show/110582845,4:45,10:14,198,"$261,047.00","$233,918.00","$1,181.40","$42,659.82"
IAH - IND,55321920597,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/55321920597,https://www.airlines-manager.com/aircraft/show/100684071,6:00,11:29,310,"$344,386.00","$310,520.00","$1,001.68","$56,629.79"
IAH - IND,55335025962,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/55335025962,https://www.airlines-manager.com/aircraft/show/100684072,11:30,16:59,310,"$344,386.00","$310,520.00","$1,001.68","$56,629.79"
IAH - IND,55349594255,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/55349594255,https://www.airlines-manager.com/aircraft/show/100684073,17:45,23:14,310,"$344,386.00","$310,520.00","$1,001.68","$56,629.79"
IAH - JAC,55307089554,IAH-SNA-SBA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/55307089554,https://www.airlines-manager.com/aircraft/show/119525225,2:00,8:59,272,"$397,922.00","$370,446.00","$1,361.93","$53,047.16"
IAH - JAC,55335025839,IAH-SNA-SBA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/55335025839,https://www.airlines-manager.com/aircraft/show/119525227,11:00,17:59,272,"$397,922.00","$370,446.00","$1,361.93","$53,047.16"
IAH - JAC,55339204977,IAH-SNA-SBA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/55339204977,https://www.airlines-manager.com/aircraft/show/119525228,13:00,19:59,272,"$397,922.00","$370,446.00","$1,361.93","$53,047.16"
IAH - JAC,55349594349,IAH-SNA-SBA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/55349594349,https://www.airlines-manager.com/aircraft/show/119525226,18:45,1:44,272,"$397,922.00","$370,446.00","$1,361.93","$53,047.16"
IAH - JAC,55355670088,IAH-SNA-SBA-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/55355670088,https://www.airlines-manager.com/aircraft/show/119525229,20:45,3:44,272,"$397,922.00","$370,446.00","$1,361.93","$53,047.16"
IAH - JAN,55307089392,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/55307089392,https://www.airlines-manager.com/aircraft/show/110424756,0:30,3:59,320,"$177,596.00","$150,145.00",$469.20,"$43,103.83"
IAH - JAN,55331908288,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/55331908288,https://www.airlines-manager.com/aircraft/show/110424757,10:30,13:59,320,"$177,596.00","$150,145.00",$469.20,"$43,103.83"
IAH - JAN,55342652195,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/55342652195,https://www.airlines-manager.com/aircraft/show/110424754,14:00,17:29,320,"$177,596.00","$150,145.00",$469.20,"$43,103.83"
IAH - JAN,55345991652,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/55345991652,https://www.airlines-manager.com/aircraft/show/110424755,16:45,20:14,307,"$173,221.00","$145,892.00",$475.22,"$41,882.87"
IAH - JAX,55318171922,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/55318171922,https://www.airlines-manager.com/aircraft/show/104717247,3:00,8:14,310,"$338,093.00","$305,865.00",$986.66,"$58,445.54"
IAH - JAX,55328734063,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/55328734063,https://www.airlines-manager.com/aircraft/show/104743902,8:00,13:14,112,"$160,251.00","$139,491.00","$1,245.46","$26,654.33"
IAH - JAX,55335025919,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/55335025919,https://www.airlines-manager.com/aircraft/show/104717244,11:00,16:14,310,"$338,093.00","$305,865.00",$986.66,"$58,445.54"
IAH - JAX,55345991640,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/55345991640,https://www.airlines-manager.com/aircraft/show/104717245,16:30,21:44,310,"$338,093.00","$305,865.00",$986.66,"$58,445.54"
IAH - JAX,55355670165,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/55355670165,https://www.airlines-manager.com/aircraft/show/104717246,21:15,2:29,310,"$338,093.00","$305,865.00",$986.66,"$58,445.54"
IAH - JFK,55307089556,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/55307089556,https://www.airlines-manager.com/aircraft/show/89233038,2:00,9:29,400,"$622,836.00","$549,527.00","$1,373.82","$73,433.45"
IAH - JFK,55335025856,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/55335025856,https://www.airlines-manager.com/aircraft/show/88400798,11:00,18:29,400,"$622,836.00","$549,527.00","$1,373.82","$73,433.45"
IAH - JFK,55349594309,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/55349594309,https://www.airlines-manager.com/aircraft/show/88400800,18:15,1:44,400,"$622,836.00","$549,527.00","$1,373.82","$73,433.45"
IAH - JFK,55352802888,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/55352802888,https://www.airlines-manager.com/aircraft/show/88400799,19:15,2:44,400,"$622,836.00","$549,527.00","$1,373.82","$73,433.45"
IAH - JFK,55355670155,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/55355670155,https://www.airlines-manager.com/aircraft/show/88400801,21:15,4:44,400,"$622,836.00","$549,527.00","$1,373.82","$73,433.45"
IAH - LAS,55318172036,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/55318172036,https://www.airlines-manager.com/aircraft/show/96256511,4:00,10:44,320,"$430,201.00","$368,720.00","$1,152.25","$54,760.40"
IAH - LAS,55321920610,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/55321920610,https://www.airlines-manager.com/aircraft/show/96250652,5:00,11:44,320,"$430,201.00","$368,720.00","$1,152.25","$54,760.40"
IAH - LAS,55321920611,IAH-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/55321920611,https://www.airlines-manager.com/aircraft/show/96990010,5:15,11:59,112,"$202,299.00","$168,005.00","$1,500.04","$24,951.24"
IAH - LAS,55335025879,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/55335025879,https://www.airlines-manager.com/aircraft/show/96177955,11:00,17:44,320,"$430,201.00","$368,720.00","$1,152.25","$54,760.40"
IAH - LAS,55342652294,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/55342652294,https://www.airlines-manager.com/aircraft/show/95894466,14:45,21:29,320,"$430,201.00","$368,720.00","$1,152.25","$54,760.40"
IAH - LAS,55349594238,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/55349594238,https://www.airlines-manager.com/aircraft/show/82323704,17:30,0:14,112,"$202,299.00","$168,005.00","$1,500.04","$24,951.24"
IAH - LAS,55355670101,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/55355670101,https://www.airlines-manager.com/aircraft/show/96183549,20:45,3:29,320,"$430,201.00","$368,720.00","$1,152.25","$54,760.40"
IAH - LAX,55318171869,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/55318171869,https://www.airlines-manager.com/aircraft/show/88400799,2:45,9:59,400,"$610,729.00","$538,556.00","$1,346.39","$74,454.75"
IAH - LAX,55318171870,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/55318171870,https://www.airlines-manager.com/aircraft/show/88400798,3:45,10:59,400,"$610,729.00","$538,556.00","$1,346.39","$74,454.75"
IAH - LAX,55321920585,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/55321920585,https://www.airlines-manager.com/aircraft/show/88400801,4:45,11:59,400,"$610,729.00","$538,556.00","$1,346.39","$74,454.75"
IAH - LAX,55331908285,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/55331908285,https://www.airlines-manager.com/aircraft/show/89233038,10:30,17:44,400,"$610,729.00","$538,556.00","$1,346.39","$74,454.75"
IAH - LAX,55335025859,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/55335025859,https://www.airlines-manager.com/aircraft/show/88400800,11:00,18:14,400,"$610,729.00","$538,556.00","$1,346.39","$74,454.75"
IAH - LEX,55318172103,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/55318172103,https://www.airlines-manager.com/aircraft/show/114373410,4:30,9:44,310,"$334,781.00","$304,803.00",$983.24,"$58,242.61"
IAH - LEX,55331908154,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/55331908154,https://www.airlines-manager.com/aircraft/show/113994196,9:15,14:29,310,"$334,781.00","$304,803.00",$983.24,"$58,242.61"
IAH - LEX,55342652334,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/55342652334,https://www.airlines-manager.com/aircraft/show/86385103,15:00,20:14,310,"$334,781.00","$304,803.00",$983.24,"$58,242.61"
IAH - LEX,55352802909,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/55352802909,https://www.airlines-manager.com/aircraft/show/82543907,19:15,0:29,112,"$158,973.00","$139,540.00","$1,245.89","$26,663.69"
IAH - LEX,55358035980,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/55358035980,https://www.airlines-manager.com/aircraft/show/114373409,22:15,3:29,264,"$305,446.00","$276,512.00","$1,047.39","$52,836.69"
IAH - LIM,55342652287,IAH 84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/55342652287,https://www.airlines-manager.com/aircraft/show/89439131,14:30,3:59,932,"$2,260,419.00","$2,060,574.00","$2,210.92","$152,823.78"
IAH - LIM,55359814162,IAH 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/55359814162,https://www.airlines-manager.com/aircraft/show/89124074,23:45,13:14,932,"$2,260,419.00","$2,060,574.00","$2,210.92","$152,823.78"
IAH - LIT,55318172023,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/55318172023,https://www.airlines-manager.com/aircraft/show/96692491,3:45,7:14,310,"$189,001.00","$164,995.00",$532.24,"$47,366.99"
IAH - LIT,55335025914,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/55335025914,https://www.airlines-manager.com/aircraft/show/96692343,11:00,14:29,310,"$189,001.00","$164,995.00",$532.24,"$47,366.99"
IAH - LIT,55352802923,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/55352802923,https://www.airlines-manager.com/aircraft/show/96691558,19:30,22:59,310,"$189,001.00","$164,995.00",$532.24,"$47,366.99"
IAH - LIT,55352802924,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/55352802924,https://www.airlines-manager.com/aircraft/show/106014350,20:00,23:29,198,"$142,596.00","$123,375.00",$623.11,"$35,418.66"
IAH - LIT,55359814132,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/55359814132,https://www.airlines-manager.com/aircraft/show/96694086,23:30,2:59,273,"$175,681.00","$152,055.00",$556.98,"$43,652.15"
IAH - MAF,55318172051,IAH-MYR-MTJ 4,A321-200,https://www.airlines-manager.com/network/showline/50555962,https://www.airlines-manager.com/network/showflight/55318172051,https://www.airlines-manager.com/aircraft/show/120452411,4:00,7:44,310,"$203,259.00","$178,181.00",$574.78,"$47,727.05"
IAH - MAF,55331908253,IAH-MYR-MTJ 3,A321-200,https://www.airlines-manager.com/network/showline/50555962,https://www.airlines-manager.com/network/showflight/55331908253,https://www.airlines-manager.com/aircraft/show/120452412,10:00,13:44,310,"$203,259.00","$178,181.00",$574.78,"$47,727.05"
IAH - MAF,55342652299,IAH-MYR-MTJ 2,A321-200,https://www.airlines-manager.com/network/showline/50555962,https://www.airlines-manager.com/network/showflight/55342652299,https://www.airlines-manager.com/aircraft/show/120452413,14:45,18:29,310,"$203,259.00","$178,181.00",$574.78,"$47,727.05"
IAH - MAF,55352802950,IAH-MYR-MTJ 1,A321-200,https://www.airlines-manager.com/network/showline/50555962,https://www.airlines-manager.com/network/showflight/55352802950,https://www.airlines-manager.com/aircraft/show/120452414,19:45,23:29,304,"$200,950.00","$175,942.00",$578.76,"$47,127.32"
IAH - MCI,55307089455,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/55307089455,https://www.airlines-manager.com/aircraft/show/103882358,1:00,5:44,310,"$299,574.00","$268,416.00",$865.86,"$56,707.61"
IAH - MCI,55331908151,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/55331908151,https://www.airlines-manager.com/aircraft/show/103882357,9:15,13:59,310,"$299,574.00","$268,416.00",$865.86,"$56,707.61"
IAH - MCI,55339205059,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/55339205059,https://www.airlines-manager.com/aircraft/show/103882356,13:00,17:44,310,"$299,574.00","$268,416.00",$865.86,"$56,707.61"
IAH - MCI,55349594302,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/55349594302,https://www.airlines-manager.com/aircraft/show/105099861,18:00,22:44,112,"$141,735.00","$121,915.00","$1,088.53","$25,756.69"
IAH - MCI,55352802929,IAH CARGO,B737-700C,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/55352802929,https://www.airlines-manager.com/aircraft/show/120293379,19:30,23:59,0,"$78,755.00","$36,556.00",$0.00,"$8,153.75"
IAH - MCI,55355670141,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/55355670141,https://www.airlines-manager.com/aircraft/show/103882355,21:00,1:44,310,"$299,574.00","$268,416.00",$865.86,"$56,707.61"
IAH - MCO,55307089452,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/55307089452,https://www.airlines-manager.com/aircraft/show/90183183,1:00,6:29,310,"$346,660.00","$304,266.00",$981.50,"$55,489.24"
IAH - MCO,55318171936,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/55318171936,https://www.airlines-manager.com/aircraft/show/90140936,3:00,8:29,136,"$165,003.00","$138,225.00","$1,016.36","$25,208.21"
IAH - MCO,55325251990,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/55325251990,https://www.airlines-manager.com/aircraft/show/90183184,6:45,12:14,310,"$346,660.00","$304,266.00",$981.50,"$55,489.24"
IAH - MCO,55328734118,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/55328734118,https://www.airlines-manager.com/aircraft/show/90183180,8:45,14:14,310,"$346,660.00","$304,266.00",$981.50,"$55,489.24"
IAH - MCO,55339205041,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/55339205041,https://www.airlines-manager.com/aircraft/show/90183181,13:00,18:29,310,"$346,660.00","$304,266.00",$981.50,"$55,489.24"
IAH - MCO,55352802896,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/55352802896,https://www.airlines-manager.com/aircraft/show/90183182,19:15,0:44,310,"$346,660.00","$304,266.00",$981.50,"$55,489.24"
IAH - MEM,55321920661,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/55321920661,https://www.airlines-manager.com/aircraft/show/99093332,5:45,9:44,320,"$223,713.00","$190,351.00",$594.85,"$47,786.86"
IAH - MEM,55331908161,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/55331908161,https://www.airlines-manager.com/aircraft/show/99093333,9:30,13:29,320,"$223,713.00","$190,351.00",$594.85,"$47,786.86"
IAH - MEM,55342652186,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/55342652186,https://www.airlines-manager.com/aircraft/show/99093334,14:00,17:59,320,"$223,713.00","$190,351.00",$594.85,"$47,786.86"
IAH - MEM,55352802916,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/55352802916,https://www.airlines-manager.com/aircraft/show/99093335,19:30,23:29,320,"$223,713.00","$190,351.00",$594.85,"$47,786.86"
IAH - MEM,55355670194,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/55355670194,https://www.airlines-manager.com/aircraft/show/106499070,21:30,1:29,198,"$169,806.00","$146,816.00",$741.49,"$36,857.57"
IAH - MEX,55307089552,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/55307089552,https://www.airlines-manager.com/aircraft/show/97026605,1:45,6:44,136,"$153,949.00","$129,048.00",$948.88,"$25,895.92"
IAH - MEX,55321920638,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/55321920638,https://www.airlines-manager.com/aircraft/show/97076945,5:30,10:29,400,"$415,716.00","$367,373.00",$918.43,"$73,720.33"
IAH - MEX,55328734084,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/55328734084,https://www.airlines-manager.com/aircraft/show/97076942,8:30,13:29,400,"$415,716.00","$367,373.00",$918.43,"$73,720.33"
IAH - MEX,55339204998,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/55339204998,https://www.airlines-manager.com/aircraft/show/97076946,13:00,17:59,400,"$415,716.00","$367,373.00",$918.43,"$73,720.33"
IAH - MEX,55345991567,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/55345991567,https://www.airlines-manager.com/aircraft/show/97076943,16:00,20:59,392,"$408,335.00","$360,191.00",$918.85,"$72,279.13"
IAH - MEX,55358035995,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/55358035995,https://www.airlines-manager.com/aircraft/show/97076944,22:30,3:29,284,"$308,683.00","$263,221.00",$926.83,"$52,820.27"
IAH - MFE,55318172007,IAH-MYR-MTJ 1,A321-200,https://www.airlines-manager.com/network/showline/50555963,https://www.airlines-manager.com/network/showflight/55318172007,https://www.airlines-manager.com/aircraft/show/120452414,3:30,6:44,310,"$171,083.00","$148,684.00",$479.63,"$45,984.74"
IAH - MFE,55339205074,IAH-MYR-MTJ 4,A321-200,https://www.airlines-manager.com/network/showline/50555963,https://www.airlines-manager.com/network/showflight/55339205074,https://www.airlines-manager.com/aircraft/show/120452411,13:00,16:14,310,"$171,083.00","$148,684.00",$479.63,"$45,984.74"
IAH - MFE,55349594261,IAH-MYR-MTJ 3,A321-200,https://www.airlines-manager.com/network/showline/50555963,https://www.airlines-manager.com/network/showflight/55349594261,https://www.airlines-manager.com/aircraft/show/120452412,17:45,20:59,310,"$171,083.00","$148,684.00",$479.63,"$45,984.74"
IAH - MFE,55358036014,IAH-MYR-MTJ 2,A321-200,https://www.airlines-manager.com/network/showline/50555963,https://www.airlines-manager.com/network/showflight/55358036014,https://www.airlines-manager.com/aircraft/show/120452413,22:30,1:44,310,"$171,083.00","$148,684.00",$479.63,"$45,984.74"
IAH - MFR,55307089511,IAH-EUG-MFR 3,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/55307089511,https://www.airlines-manager.com/aircraft/show/119525218,1:30,10:14,320,"$555,877.00","$506,508.00","$1,582.84","$57,997.10"
IAH - MFR,55318171996,IAH-EUG-MFR 4,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/55318171996,https://www.airlines-manager.com/aircraft/show/119525217,3:30,12:14,320,"$555,877.00","$506,508.00","$1,582.84","$57,997.10"
IAH - MFR,55335025901,IAH-EUG-MFR 2,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/55335025901,https://www.airlines-manager.com/aircraft/show/119525219,11:00,19:44,320,"$555,877.00","$506,508.00","$1,582.84","$57,997.10"
IAH - MFR,55339205036,IAH-EUG-MFR 1,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/55339205036,https://www.airlines-manager.com/aircraft/show/119525220,13:00,21:44,320,"$555,877.00","$506,508.00","$1,582.84","$57,997.10"
IAH - MFR,55352803017,IAH-EUG-MFR 5,ERJ-175,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/55352803017,https://www.airlines-manager.com/aircraft/show/119525248,20:15,5:14,112,"$262,366.00","$232,593.00","$2,076.72","$25,891.61"
IAH - MHT,55307089508,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/55307089508,https://www.airlines-manager.com/aircraft/show/114266971,1:30,9:44,320,"$525,711.00","$477,855.00","$1,493.30","$58,039.07"
IAH - MHT,55325251989,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/55325251989,https://www.airlines-manager.com/aircraft/show/114266970,6:45,14:59,320,"$525,711.00","$477,855.00","$1,493.30","$58,039.07"
IAH - MHT,55335025992,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/55335025992,https://www.airlines-manager.com/aircraft/show/114266972,12:00,20:14,320,"525,711$","477,855$","$1,493.30","$58,039.07"
IAH - MHT,55345991586,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/55345991586,https://www.airlines-manager.com/aircraft/show/114266976,16:00,0:14,320,"525,711$","477,855$","$1,493.30","$58,039.07"
IAH - MHT,55349594263,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/55349594263,https://www.airlines-manager.com/aircraft/show/92800067,17:45,1:59,112,"247,615$","219,048$","$1,955.79","$26,605.02"
IAH - MIA,55307089424,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/55307089424,https://www.airlines-manager.com/aircraft/show/90183182,0:45,6:29,310,"371,613$","325,856$","$1,051.15","$56,835.35"
IAH - MIA,55325251972,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/55325251972,https://www.airlines-manager.com/aircraft/show/90183183,6:30,12:14,310,"371,613$","325,856$","$1,051.15","$56,835.35"
IAH - MIA,55328734111,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/55328734111,https://www.airlines-manager.com/aircraft/show/90140936,8:30,14:14,136,"176,905$","147,937$","$1,087.77","$25,802.97"
IAH - MIA,55339205044,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/55339205044,https://www.airlines-manager.com/aircraft/show/90183184,13:00,18:44,310,"371,613$","325,856$","$1,051.15","$56,835.35"
IAH - MIA,55342652335,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/55342652335,https://www.airlines-manager.com/aircraft/show/90183180,15:00,20:44,310,"371,613$","325,856$","$1,051.15","$56,835.35"
IAH - MIA,55349594337,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/55349594337,https://www.airlines-manager.com/aircraft/show/90183181,18:30,0:14,310,"371,613$","325,856$","$1,051.15","$56,835.35"
IAH - MKE,55307089456,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/55307089456,https://www.airlines-manager.com/aircraft/show/104258212,1:00,6:59,310,"380,561$","345,427$","$1,114.28","$57,731.53"
IAH - MKE,55328734055,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/55328734055,https://www.airlines-manager.com/aircraft/show/104258211,8:00,13:59,310,"380,561$","345,427$","$1,114.28","$57,731.53"
IAH - MKE,55328734056,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/55328734056,https://www.airlines-manager.com/aircraft/show/103534664,9:00,14:59,112,"179,601$","156,801$","$1,400.01","$26,206.30"
IAH - MKE,55342652225,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/55342652225,https://www.airlines-manager.com/aircraft/show/104258214,14:00,19:59,310,"380,561$","345,427$","$1,114.28","$57,731.53"
IAH - MKE,55352802902,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/55352802902,https://www.airlines-manager.com/aircraft/show/104258213,19:15,1:14,310,"380,561$","345,427$","$1,114.28","$57,731.53"
IAH - MSN,55325252049,IAH-GRR-MSN 3,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/55325252049,https://www.airlines-manager.com/aircraft/show/117273346,7:30,13:29,310,"373,584$","340,499$","$1,098.38","$56,907.91"
IAH - MSN,55342652247,IAH-GRR-MSN 2,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/55342652247,https://www.airlines-manager.com/aircraft/show/117273347,14:00,19:59,310,"373,584$","340,499$","$1,098.38","$56,907.91"
IAH - MSN,55352803010,IAH-GRR-MSN 1,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/55352803010,https://www.airlines-manager.com/aircraft/show/117273348,20:15,2:14,310,"373,584$","340,499$","$1,098.38","$56,907.91"
IAH - MSN,55358035983,IAH-GRR-MSN 4,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/55358035983,https://www.airlines-manager.com/aircraft/show/117273345,22:15,4:14,310,"373,584$","340,499$","$1,098.38","$56,907.91"
IAH - MSO,55318172039,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/55318172039,https://www.airlines-manager.com/aircraft/show/110424756,4:00,11:59,320,"509,127$","462,694$","$1,445.92","$57,957.49"
IAH - MSO,55342652196,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/55342652196,https://www.airlines-manager.com/aircraft/show/110424757,14:00,21:59,320,"509,127$","462,694$","$1,445.92","$57,957.49"
IAH - MSO,55349594229,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/55349594229,https://www.airlines-manager.com/aircraft/show/110424754,17:30,1:29,320,"509,127$","462,694$","$1,445.92","$57,957.49"
IAH - MSO,55352803000,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/55352803000,https://www.airlines-manager.com/aircraft/show/110424755,20:15,4:14,320,"509,127$","462,694$","$1,445.92","$57,957.49"
IAH - MSP,55318172034,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/55318172034,https://www.airlines-manager.com/aircraft/show/95894466,4:00,9:59,320,"384,765$","335,469$","$1,048.34","$56,067.24"
IAH - MSP,55321920629,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/55321920629,https://www.airlines-manager.com/aircraft/show/82323704,5:00,11:14,112,"182,588$","154,923$","$1,383.24","$24,853.96"
IAH - MSP,55331908201,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/55331908201,https://www.airlines-manager.com/aircraft/show/96183549,10:00,15:59,320,"384,765$","335,469$","$1,048.34","$56,067.24"
IAH - MSP,55349594247,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/55349594247,https://www.airlines-manager.com/aircraft/show/96250652,17:45,23:44,320,"384,765$","335,469$","$1,048.34","$56,067.24"
IAH - MSP,55355670179,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/55355670179,https://www.airlines-manager.com/aircraft/show/96256511,21:30,3:29,320,"384,765$","335,469$","$1,048.34","$56,067.24"
IAH - MSP,55358035999,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/55358035999,https://www.airlines-manager.com/aircraft/show/96177955,22:30,4:29,320,"384,765$","335,469$","$1,048.34","$56,067.24"
IAH - MSY,55318172012,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/55318172012,https://www.airlines-manager.com/aircraft/show/106007216,3:45,6:59,338,"171,070$","146,423$",$433.20,"$45,285.46"
IAH - MSY,55321920580,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/55321920580,https://www.airlines-manager.com/aircraft/show/106007217,4:45,7:59,338,"171,070$","146,423$",$433.20,"$45,285.46"
IAH - MSY,55335025848,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/55335025848,https://www.airlines-manager.com/aircraft/show/106007215,11:00,14:14,338,"171,070$","146,423$",$433.20,"$45,285.46"
IAH - MSY,55349594242,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/55349594242,https://www.airlines-manager.com/aircraft/show/106007214,17:45,20:59,338,"171,070$","146,423$",$433.20,"$45,285.46"
IAH - MSY,55355670057,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/55355670057,https://www.airlines-manager.com/aircraft/show/106007213,20:30,23:44,265,"$149,091.00","$124,950.00",$471.51,"$38,644.33"
IAH - MTJ,55318171928,IAH-MYR-MTJ 3,A321-200,https://www.airlines-manager.com/network/showline/50683373,https://www.airlines-manager.com/network/showflight/55318171928,https://www.airlines-manager.com/aircraft/show/120452412,3:00,8:44,310,"$359,072.00","$326,458.00","$1,053.09","$56,940.35"
IAH - MTJ,55328734140,IAH-MYR-MTJ 2,A321-200,https://www.airlines-manager.com/network/showline/50683373,https://www.airlines-manager.com/network/showflight/55328734140,https://www.airlines-manager.com/aircraft/show/120452413,9:00,14:44,310,"359,072$","326,458$","$1,053.09","$56,940.35"
IAH - MTJ,55342652249,IAH-MYR-MTJ 1,A321-200,https://www.airlines-manager.com/network/showline/50683373,https://www.airlines-manager.com/network/showflight/55342652249,https://www.airlines-manager.com/aircraft/show/120452414,14:00,19:44,310,"$359,072.00","$326,458.00","$1,053.09","$56,940.35"
IAH - MTJ,55358035984,IAH-MYR-MTJ 4,A321-200,https://www.airlines-manager.com/network/showline/50683373,https://www.airlines-manager.com/network/showflight/55358035984,https://www.airlines-manager.com/aircraft/show/120452411,22:15,3:59,242,"$312,658.00","$281,770.00","$1,164.34","$49,145.93"
IAH - MTY,55318171994,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/55318171994,https://www.airlines-manager.com/aircraft/show/114266974,3:30,7:14,320,"$203,277.00","$172,760.00",$539.88,"$46,275.00"
IAH - MTY,55331908160,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/55331908160,https://www.airlines-manager.com/aircraft/show/105099862,9:15,12:59,112,"$92,839.00","$76,384.00",$682.00,"$20,460.00"
IAH - MTY,55342652200,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/55342652200,https://www.airlines-manager.com/aircraft/show/114266975,14:00,17:44,320,"$203,277.00","$172,760.00",$539.88,"$46,275.00"
IAH - MTY,55349594230,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/55349594230,https://www.airlines-manager.com/aircraft/show/113250059,17:30,21:14,320,"$203,277.00","$172,760.00",$539.88,"$46,275.00"
IAH - MTY,55359814126,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/55359814126,https://www.airlines-manager.com/aircraft/show/113114108,23:30,3:14,320,"$203,277.00","$172,760.00",$539.88,"$46,275.00"
IAH - MYR,55307089546,IAH-MYR-MTJ 2,A321-200,https://www.airlines-manager.com/network/showline/50683370,https://www.airlines-manager.com/network/showflight/55307089546,https://www.airlines-manager.com/aircraft/show/120452413,1:45,7:44,310,"$378,289.00","$344,570.00","$1,111.52","$57,588.30"
IAH - MYR,55328734061,IAH-MYR-MTJ 1,A321-200,https://www.airlines-manager.com/network/showline/50683370,https://www.airlines-manager.com/network/showflight/55328734061,https://www.airlines-manager.com/aircraft/show/120452414,8:00,13:59,310,"$378,289.00","$344,570.00","$1,111.52","$57,588.30"
IAH - MYR,55345991626,IAH-MYR-MTJ 4,A321-200,https://www.airlines-manager.com/network/showline/50683370,https://www.airlines-manager.com/network/showflight/55345991626,https://www.airlines-manager.com/aircraft/show/120452411,16:15,22:14,310,"$378,289.00","$344,570.00","$1,111.52","$57,588.30"
IAH - MYR,55355670146,IAH-MYR-MTJ 3,A321-200,https://www.airlines-manager.com/network/showline/50683370,https://www.airlines-manager.com/network/showflight/55355670146,https://www.airlines-manager.com/aircraft/show/120452412,21:00,2:59,310,"$378,289.00","$344,570.00","$1,111.52","$57,588.30"
IAH - OAK,55307089473,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/55307089473,https://www.airlines-manager.com/aircraft/show/98578920,1:15,9:44,320,"$531,050.00","$480,227.00","$1,500.71","$56,608.29"
IAH - OAK,55318171909,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/55318171909,https://www.airlines-manager.com/aircraft/show/98578924,3:00,11:29,320,"$531,050.00","$480,227.00","$1,500.71","$56,608.29"
IAH - OAK,55328734048,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/55328734048,https://www.airlines-manager.com/aircraft/show/98578921,8:00,16:29,320,"$531,050.00","$480,227.00","$1,500.71","$56,608.29"
IAH - OAK,55339205012,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/55339205012,https://www.airlines-manager.com/aircraft/show/98578922,13:00,21:29,320,"$531,050.00","$480,227.00","$1,500.71","$56,608.29"
IAH - OAK,55352802886,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/55352802886,https://www.airlines-manager.com/aircraft/show/105400635,19:00,3:29,112,"$250,246.00","$220,099.00","$1,965.17","$25,944.87"
IAH - OAK,55358035972,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/55358035972,https://www.airlines-manager.com/aircraft/show/98578923,22:15,6:44,320,"$531,050.00","$480,227.00","$1,500.71","$56,608.29"
IAH - OKC,55321920648,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/55321920648,https://www.airlines-manager.com/aircraft/show/107467134,5:30,9:14,310,"$197,208.00","$171,947.00",$554.67,"$46,057.23"
IAH - OKC,55331908271,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/55331908271,https://www.airlines-manager.com/aircraft/show/107467211,10:00,13:44,112,"$90,992.00","$75,145.00",$670.94,"$20,128.13"
IAH - OKC,55335026010,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/55335026010,https://www.airlines-manager.com/aircraft/show/107467131,12:00,15:44,310,"$197,208.00","$171,947.00",$554.67,"$46,057.23"
IAH - OKC,55349594259,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/55349594259,https://www.airlines-manager.com/aircraft/show/107467132,17:45,21:29,310,"$197,208.00","$171,947.00",$554.67,"$46,057.23"
IAH - OKC,55358036065,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/55358036065,https://www.airlines-manager.com/aircraft/show/107467133,23:00,2:44,310,"$197,208.00","$171,947.00",$554.67,"$46,057.23"
IAH - OMA,55318171885,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/55318171885,https://www.airlines-manager.com/aircraft/show/104258211,2:45,7:59,310,"$329,990.00","$298,847.00",$964.02,"$57,104.52"
IAH - OMA,55318171886,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/55318171886,https://www.airlines-manager.com/aircraft/show/103534664,3:45,8:59,112,"$156,520.00","$136,469.00","$1,218.47","$26,076.88"
IAH - OMA,55328734119,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/55328734119,https://www.airlines-manager.com/aircraft/show/104258214,8:45,13:59,310,"$329,990.00","$298,847.00",$964.02,"$57,104.52"
IAH - OMA,55342652224,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/55342652224,https://www.airlines-manager.com/aircraft/show/104258213,14:00,19:14,310,"$329,990.00","$298,847.00",$964.02,"$57,104.52"
IAH - OMA,55352802944,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/55352802944,https://www.airlines-manager.com/aircraft/show/104258212,19:45,0:59,310,"$329,990.00","$298,847.00",$964.02,"$57,104.52"
IAH - ONT,55318171890,IAH-ANC-ONT 1,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/55318171890,https://www.airlines-manager.com/aircraft/show/108258010,2:45,9:59,310,"$465,347.00","$424,181.00","$1,368.33","$58,642.53"
IAH - ONT,55321920593,IAH-ANC-ONT 2,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/55321920593,https://www.airlines-manager.com/aircraft/show/108258011,4:45,11:59,310,"$465,347.00","$424,181.00","$1,368.33","$58,642.53"
IAH - ONT,55335026015,IAH-ANC-ONT 3,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/55335026015,https://www.airlines-manager.com/aircraft/show/108258012,12:00,19:14,310,"$465,347.00","$424,181.00","$1,368.33","$58,642.53"
IAH - ONT,55342652230,IAH-ANC-ONT 4,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/55342652230,https://www.airlines-manager.com/aircraft/show/108089220,14:00,21:14,310,"$465,347.00","$424,181.00","$1,368.33","$58,642.53"
IAH - ONT,55345991607,IAH-ANC-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/55345991607,https://www.airlines-manager.com/aircraft/show/108286957,16:00,23:14,198,"$351,162.00","$318,172.00","$1,606.93","$43,986.91"
IAH - ORD,55307089371,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/55307089371,https://www.airlines-manager.com/aircraft/show/90183181,0:15,5:59,310,"$364,400.00","$309,434.00",$998.17,"$53,971.05"
IAH - ORD,55325251971,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/55325251971,https://www.airlines-manager.com/aircraft/show/90183182,6:30,12:14,310,"$364,400.00","$309,434.00",$998.17,"$53,971.05"
IAH - ORD,55339205043,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/55339205043,https://www.airlines-manager.com/aircraft/show/90183183,13:00,18:44,310,"$364,400.00","$309,434.00",$998.17,"$53,971.05"
IAH - ORD,55342652362,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/55342652362,https://www.airlines-manager.com/aircraft/show/90140936,15:00,20:44,136,"$173,108.00","$138,672.00","$1,019.65","$24,186.98"
IAH - ORD,55349594363,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/55349594363,https://www.airlines-manager.com/aircraft/show/90183184,18:45,0:29,310,"$364,400.00","$309,434.00",$998.17,"$53,971.05"
IAH - ORD,55355670111,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/55355670111,https://www.airlines-manager.com/aircraft/show/90183180,20:45,2:29,310,"$364,400.00","$309,434.00",$998.17,"$53,971.05"
IAH - ORF,55307089328,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/55307089328,https://www.airlines-manager.com/aircraft/show/110582843,0:00,6:44,198,"$320,725.00","$291,072.00","$1,470.06","$43,228.51"
IAH - ORF,55318172080,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/55318172080,https://www.airlines-manager.com/aircraft/show/107467130,4:15,10:59,310,"$425,000.00","$387,998.00","$1,251.61","$57,623.47"
IAH - ORF,55328734075,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/55328734075,https://www.airlines-manager.com/aircraft/show/107467127,8:15,14:59,310,"$425,000.00","$387,998.00","$1,251.61","$57,623.47"
IAH - ORF,55339205063,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/55339205063,https://www.airlines-manager.com/aircraft/show/107467128,13:00,19:44,310,"$425,000.00","$387,998.00","$1,251.61","$57,623.47"
IAH - ORF,55352802972,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/55352802972,https://www.airlines-manager.com/aircraft/show/107467129,20:00,2:44,310,"$425,000.00","$387,998.00","$1,251.61","$57,623.47"
IAH - PBI,55307089627,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/55307089627,https://www.airlines-manager.com/aircraft/show/104717246,2:30,8:14,310,"$370,693.00","$335,957.00","$1,083.73","$58,597.15"
IAH - PBI,55335025922,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/55335025922,https://www.airlines-manager.com/aircraft/show/104717247,11:00,16:44,310,"$370,693.00","$335,957.00","$1,083.73","$58,597.15"
IAH - PBI,55339205094,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/55339205094,https://www.airlines-manager.com/aircraft/show/104743902,13:15,18:59,112,"$175,285.00","$152,779.00","$1,364.10","$26,647.50"
IAH - PBI,55345991623,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/55345991623,https://www.airlines-manager.com/aircraft/show/104717244,16:15,21:59,310,"$370,693.00","$335,957.00","$1,083.73","$58,597.15"
IAH - PBI,55355670209,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/55355670209,https://www.airlines-manager.com/aircraft/show/104717245,21:45,3:29,310,"$370,693.00","$335,957.00","$1,083.73","$58,597.15"
IAH - PDX,55318171867,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/55318171867,https://www.airlines-manager.com/aircraft/show/105562975,2:45,11:44,338,"$622,480.00","$574,378.00","$1,699.34","$63,938.18"
IAH - PDX,55318171868,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/55318171868,https://www.airlines-manager.com/aircraft/show/105562972,4:00,12:59,338,"$622,480.00","$574,378.00","$1,699.34","$63,938.18"
IAH - PDX,55321920603,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/55321920603,https://www.airlines-manager.com/aircraft/show/105562974,5:00,13:59,338,"$622,480.00","$574,378.00","$1,699.34","$63,938.18"
IAH - PDX,55335026028,IAH-SEA-DEN 6,ERJ-175,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/55335026028,https://www.airlines-manager.com/aircraft/show/105601215,12:00,21:14,112,"$270,856.00","$237,445.00","$2,120.04","$25,716.06"
IAH - PDX,55342652167,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/55342652167,https://www.airlines-manager.com/aircraft/show/105562973,14:00,22:59,338,"$622,480.00","$574,378.00","$1,699.34","$63,938.18"
IAH - PDX,55349594325,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/55349594325,https://www.airlines-manager.com/aircraft/show/105562971,18:30,3:29,338,"$622,480.00","$574,378.00","$1,699.34","$63,938.18"
IAH - PHL,55335025849,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/55335025849,https://www.airlines-manager.com/aircraft/show/106007216,11:00,18:14,338,"$503,297.00","$458,115.00","$1,355.37","$63,333.87"
IAH - PHL,55342652264,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/55342652264,https://www.airlines-manager.com/aircraft/show/106007215,14:15,21:29,338,"$503,297.00","$458,115.00","$1,355.37","$63,333.87"
IAH - PHL,55355670120,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/55355670120,https://www.airlines-manager.com/aircraft/show/106007214,21:00,4:14,338,"$503,297.00","$458,115.00","$1,355.37","$63,333.87"
IAH - PHL,55355670121,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/55355670121,https://www.airlines-manager.com/aircraft/show/106007217,21:30,4:44,338,"$503,297.00","$458,115.00","$1,355.37","$63,333.87"
IAH - PHL,55359814142,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/55359814142,https://www.airlines-manager.com/aircraft/show/106007213,23:45,6:59,338,"$503,297.00","$458,115.00","$1,355.37","$63,333.87"
IAH - PHX,55318172035,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/55318172035,https://www.airlines-manager.com/aircraft/show/96183549,4:00,9:59,320,"$380,643.00","$328,609.00","$1,026.90","$54,920.72"
IAH - PHX,55321920609,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/55321920609,https://www.airlines-manager.com/aircraft/show/96177955,5:00,10:59,320,"$380,643.00","$328,609.00","$1,026.90","$54,920.72"
IAH - PHX,55335025966,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/55335025966,https://www.airlines-manager.com/aircraft/show/82323704,11:30,17:29,112,"$179,949.00","$150,998.00","$1,348.20","$25,236.43"
IAH - PHX,55335025967,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/55335025967,https://www.airlines-manager.com/aircraft/show/96250652,11:45,17:44,320,"$380,643.00","$328,609.00","$1,026.90","$54,920.72"
IAH - PHX,55342652378,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/55342652378,https://www.airlines-manager.com/aircraft/show/96256511,15:30,21:29,320,"$380,643.00","$328,609.00","$1,026.90","$54,920.72"
IAH - PHX,55355670178,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/55355670178,https://www.airlines-manager.com/aircraft/show/95894466,21:30,3:29,320,"$380,643.00","$328,609.00","$1,026.90","$54,920.72"
IAH - PIT,55321920621,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/55321920621,https://www.airlines-manager.com/aircraft/show/100684073,5:00,11:29,310,"$406,895.00","$368,531.00","$1,188.81","$56,842.83"
IAH - PIT,55335025956,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/55335025956,https://www.airlines-manager.com/aircraft/show/100684074,11:15,17:44,310,"$406,895.00","$368,531.00","$1,188.81","$56,842.83"
IAH - PIT,55345991609,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/55345991609,https://www.airlines-manager.com/aircraft/show/110582845,16:00,22:29,198,"$307,277.00","$276,538.00","$1,396.66","$42,653.68"
IAH - PIT,55349594208,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/55349594208,https://www.airlines-manager.com/aircraft/show/100684071,17:15,23:44,310,"$406,895.00","$368,531.00","$1,188.81","$56,842.83"
IAH - PIT,55358036038,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/55358036038,https://www.airlines-manager.com/aircraft/show/100684072,22:45,5:14,310,"$406,895.00","$368,531.00","$1,188.81","$56,842.83"
IAH - PNS,55328734139,IAH-MYR-MTJ 4,A321-200,https://www.airlines-manager.com/network/showline/50683375,https://www.airlines-manager.com/network/showflight/55328734139,https://www.airlines-manager.com/aircraft/show/120452411,9:00,12:59,310,"$228,813.00","$203,811.00",$657.45,"$51,165.94"
IAH - PNS,55339205107,IAH-MYR-MTJ 3,A321-200,https://www.airlines-manager.com/network/showline/50683375,https://www.airlines-manager.com/network/showflight/55339205107,https://www.airlines-manager.com/aircraft/show/120452412,13:45,17:44,310,"$228,813.00","$203,811.00",$657.45,"$51,165.94"
IAH - PNS,55349594343,IAH-MYR-MTJ 2,A321-200,https://www.airlines-manager.com/network/showline/50683375,https://www.airlines-manager.com/network/showflight/55349594343,https://www.airlines-manager.com/aircraft/show/120452413,18:30,22:29,310,"$228,813.00","$203,811.00",$657.45,"$51,165.94"
IAH - PNS,55359814135,IAH-MYR-MTJ 1,A321-200,https://www.airlines-manager.com/network/showline/50683375,https://www.airlines-manager.com/network/showflight/55359814135,https://www.airlines-manager.com/aircraft/show/120452414,23:30,3:29,310,"$228,813.00","$203,811.00",$657.45,"$51,165.94"
IAH - PSP,55307089519,IAH-YEG-BUR 2,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/55307089519,https://www.airlines-manager.com/aircraft/show/117273343,1:30,8:29,310,"$452,503.00","$414,449.00","$1,336.93","$59,348.31"
IAH - PSP,55318172027,IAH-YEG-BUR 1,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/55318172027,https://www.airlines-manager.com/aircraft/show/117273344,3:45,10:44,310,"$452,503.00","$414,449.00","$1,336.93","$59,348.31"
IAH - PSP,55335025936,IAH-YEG-BUR 3,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/55335025936,https://www.airlines-manager.com/aircraft/show/117273342,11:00,17:59,310,"$452,503.00","$414,449.00","$1,336.93","$59,348.31"
IAH - PSP,55349594327,IAH-YEG-BUR 5,A321neo,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/55349594327,https://www.airlines-manager.com/aircraft/show/117273340,18:30,1:29,338,"$490,459.00","$453,988.00","$1,343.16","$65,010.21"
IAH - PVD,55318171888,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/55318171888,https://www.airlines-manager.com/aircraft/show/107467129,2:45,10:59,310,"$518,459.00","$476,949.00","$1,538.55","$57,929.03"
IAH - PVD,55325251994,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/55325251994,https://www.airlines-manager.com/aircraft/show/110582843,6:45,14:59,198,"$390,620.00","$357,345.00","$1,804.77","$43,402.23"
IAH - PVD,55339205065,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/55339205065,https://www.airlines-manager.com/aircraft/show/107467130,13:00,21:14,310,"$518,459.00","$476,949.00","$1,538.55","$57,929.03"
IAH - PVD,55345991689,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/55345991689,https://www.airlines-manager.com/aircraft/show/107467127,17:00,1:14,310,"$518,459.00","$476,949.00","$1,538.55","$57,929.03"
IAH - PVD,55352802945,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/55352802945,https://www.airlines-manager.com/aircraft/show/107467128,19:45,3:59,310,"$518,459.00","$476,949.00","$1,538.55","$57,929.03"
IAH - PVR,55318171938,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/55318171938,https://www.airlines-manager.com/aircraft/show/105099862,3:00,8:29,112,"$167,029.00","$145,615.00","$1,300.13","$26,555.93"
IAH - PVR,55328734090,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/55328734090,https://www.airlines-manager.com/aircraft/show/114266975,8:30,13:59,320,"$357,042.00","$319,408.00",$998.15,"$58,250.70"
IAH - PVR,55335025990,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/55335025990,https://www.airlines-manager.com/aircraft/show/113250059,12:00,17:29,320,"$357,042.00","$319,408.00",$998.15,"$58,250.70"
IAH - PVR,55349594282,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/55349594282,https://www.airlines-manager.com/aircraft/show/113114108,18:00,23:29,320,"$357,042.00","$319,408.00",$998.15,"$58,250.70"
IAH - PVR,55355670217,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/55355670217,https://www.airlines-manager.com/aircraft/show/114266974,22:00,3:29,320,"$357,042.00","$319,408.00",$998.15,"$58,250.70"
IAH - PWM,55328734040,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/55328734040,https://www.airlines-manager.com/aircraft/show/106014350,7:45,16:14,198,"$408,258.00","$374,074.00","$1,889.26","$44,095.17"
IAH - PWM,55335025913,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/55335025913,https://www.airlines-manager.com/aircraft/show/96691558,11:00,19:29,310,"$542,330.00","$499,689.00","$1,611.90","$58,902.44"
IAH - PWM,55342652338,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/55342652338,https://www.airlines-manager.com/aircraft/show/96694086,15:00,23:29,310,"$542,330.00","$499,689.00","$1,611.90","$58,902.44"
IAH - PWM,55352802900,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/55352802900,https://www.airlines-manager.com/aircraft/show/96692491,19:15,3:44,310,"$542,330.00","$499,689.00","$1,611.90","$58,902.44"
IAH - PWM,55358036036,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/55358036036,https://www.airlines-manager.com/aircraft/show/96692343,22:45,7:14,310,"$542,330.00","$499,689.00","$1,611.90","$58,902.44"
IAH - RAP,55307089596,IAH-GRR-MSN 1,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/55307089596,https://www.airlines-manager.com/aircraft/show/117273348,2:15,8:29,310,"$389,890.00","$355,642.00","$1,147.23","$57,054.87"
IAH - RAP,55318172085,IAH-GRR-MSN 4,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/55318172085,https://www.airlines-manager.com/aircraft/show/117273345,4:15,10:29,310,"$389,890.00","$355,642.00","$1,147.23","$57,054.87"
IAH - RAP,55342652246,IAH-GRR-MSN 3,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/55342652246,https://www.airlines-manager.com/aircraft/show/117273346,14:00,20:14,310,"$389,890.00","$355,642.00","$1,147.23","$57,054.87"
IAH - RAP,55352802978,IAH-GRR-MSN 2,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/55352802978,https://www.airlines-manager.com/aircraft/show/117273347,20:00,2:14,291,"$375,775.00","$342,079.00","$1,175.53","$54,878.98"
IAH - RDU,55321920635,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/55321920635,https://www.airlines-manager.com/aircraft/show/100684072,5:15,11:29,310,"$390,232.00","$353,428.00","$1,140.09","$56,699.68"
IAH - RDU,55335025963,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/55335025963,https://www.airlines-manager.com/aircraft/show/100684073,11:30,17:44,310,"$390,232.00","$353,428.00","$1,140.09","$56,699.68"
IAH - RDU,55349594256,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/55349594256,https://www.airlines-manager.com/aircraft/show/100684074,17:45,23:59,310,"$390,232.00","$353,428.00","$1,140.09","$56,699.68"
IAH - RDU,55358036015,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/55358036015,https://www.airlines-manager.com/aircraft/show/110582845,22:30,4:44,198,"$294,889.00","$265,400.00","$1,340.40","$42,577.54"
IAH - RDU,55359814154,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/55359814154,https://www.airlines-manager.com/aircraft/show/100684071,23:45,5:59,310,"$390,232.00","$353,428.00","$1,140.09","$56,699.68"
IAH - RIC,55318171889,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/55318171889,https://www.airlines-manager.com/aircraft/show/107467133,2:45,9:14,310,"$418,233.00","$381,919.00","$1,232.00","$58,907.81"
IAH - RIC,55335026013,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/55335026013,https://www.airlines-manager.com/aircraft/show/107467134,12:00,18:29,310,"$418,233.00","$381,919.00","$1,232.00","$58,907.81"
IAH - RIC,55339205109,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/55339205109,https://www.airlines-manager.com/aircraft/show/107467211,13:45,20:14,112,"$196,627.00","$172,821.00","$1,543.04","$26,656.20"
IAH - RIC,55345991544,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/55345991544,https://www.airlines-manager.com/aircraft/show/107467131,15:45,22:14,310,"$418,233.00","$381,919.00","$1,232.00","$58,907.81"
IAH - RIC,55355670191,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/55355670191,https://www.airlines-manager.com/aircraft/show/107467132,21:30,3:59,310,"$418,233.00","$381,919.00","$1,232.00","$58,907.81"
IAH - RNO,55307089483,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/55307089483,https://www.airlines-manager.com/aircraft/show/103882357,1:15,9:14,310,"$514,150.00","$471,042.00","$1,519.49","$59,003.17"
IAH - RNO,55318172055,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/55318172055,https://www.airlines-manager.com/aircraft/show/105099861,4:00,11:59,112,"$241,738.00","$213,206.00","$1,903.63","$26,706.39"
IAH - RNO,55321920622,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/55321920622,https://www.airlines-manager.com/aircraft/show/103882356,5:00,12:59,310,"$514,150.00","$471,042.00","$1,519.49","$59,003.17"
IAH - RNO,55339205058,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/55339205058,https://www.airlines-manager.com/aircraft/show/103882355,13:00,20:59,310,"$514,150.00","$471,042.00","$1,519.49","$59,003.17"
IAH - RNO,55345991687,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/55345991687,https://www.airlines-manager.com/aircraft/show/103882358,17:00,0:59,310,"$514,150.00","$471,042.00","$1,519.49","$59,003.17"
IAH - ROC,55307089396,IAH-SYR-ROC 3,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/55307089396,https://www.airlines-manager.com/aircraft/show/119525222,0:30,7:44,320,"$463,219.00","$420,416.00","$1,313.80","$58,122.03"
IAH - ROC,55335025903,IAH-SYR-ROC 2,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/55335025903,https://www.airlines-manager.com/aircraft/show/119525223,11:00,18:14,320,"$463,219.00","$420,416.00","$1,313.80","$58,122.03"
IAH - ROC,55335025904,IAH-SYR-ROC 5,ERJ-175,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/55335025904,https://www.airlines-manager.com/aircraft/show/119525249,12:00,19:14,112,"$218,849.00","$193,570.00","$1,728.30","$26,760.83"
IAH - ROC,55349594336,IAH-SYR-ROC 1,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/55349594336,https://www.airlines-manager.com/aircraft/show/119525224,18:30,1:44,320,"$463,219.00","$420,416.00","$1,313.80","$58,122.03"
IAH - ROC,55352802921,IAH-SYR-ROC 4,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/55352802921,https://www.airlines-manager.com/aircraft/show/119525221,19:30,2:44,320,"$463,219.00","$420,416.00","$1,313.80","$58,122.03"
IAH - RSW,55318171887,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/55318171887,https://www.airlines-manager.com/aircraft/show/104717244,2:45,8:14,310,"$350,834.00","$316,276.00","$1,020.25","$57,679.51"
IAH - RSW,55335025920,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/55335025920,https://www.airlines-manager.com/aircraft/show/104717245,11:00,16:29,310,"$350,834.00","$316,276.00","$1,020.25","$57,679.51"
IAH - RSW,55345991543,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/55345991543,https://www.airlines-manager.com/aircraft/show/104717246,15:45,21:14,310,"$350,834.00","$316,276.00","$1,020.25","$57,679.51"
IAH - RSW,55355670190,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/55355670190,https://www.airlines-manager.com/aircraft/show/104717247,21:30,2:59,310,"$350,834.00","$316,276.00","$1,020.25","$57,679.51"
IAH - RSW,55359814163,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/55359814163,https://www.airlines-manager.com/aircraft/show/104743902,23:45,5:14,112,"$165,937.00","$143,701.00","$1,283.04","$26,206.87"
IAH - SAN,55307089416,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/55307089416,https://www.airlines-manager.com/aircraft/show/98578921,0:45,7:59,320,"$454,470.00","$407,129.00","$1,272.28","$56,285.12"
IAH - SAN,55318172066,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/55318172066,https://www.airlines-manager.com/aircraft/show/98578922,4:15,11:29,320,"$454,470.00","$407,129.00","$1,272.28","$56,285.12"
IAH - SAN,55331908282,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/55331908282,https://www.airlines-manager.com/aircraft/show/105400635,10:15,17:29,112,"$215,045.00","$187,586.00","$1,674.88","$25,933.55"
IAH - SAN,55342652322,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/55342652322,https://www.airlines-manager.com/aircraft/show/98578923,15:00,22:14,320,"$454,470.00","$407,129.00","$1,272.28","$56,285.12"
IAH - SAN,55349594278,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/55349594278,https://www.airlines-manager.com/aircraft/show/98578920,18:00,1:14,320,"$454,470.00","$407,129.00","$1,272.28","$56,285.12"
IAH - SAN,55352802937,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/55352802937,https://www.airlines-manager.com/aircraft/show/98578924,19:45,2:59,320,"$454,470.00","$407,129.00","$1,272.28","$56,285.12"
IAH - SAT,55307089520,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/55307089520,https://www.airlines-manager.com/aircraft/show/106499070,1:30,4:14,198,"$91,093.00","$73,214.00",$369.77,"$26,785.61"
IAH - SAT,55331908175,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/55331908175,https://www.airlines-manager.com/aircraft/show/99093332,9:45,12:29,320,"$120,541.00","$94,177.00",$294.30,"$34,455.00"
IAH - SAT,55342652185,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/55342652185,https://www.airlines-manager.com/aircraft/show/99093333,14:00,16:44,320,"$120,541.00","$94,177.00",$294.30,"$34,455.00"
IAH - SAT,55349594280,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/55349594280,https://www.airlines-manager.com/aircraft/show/99093334,18:00,20:44,320,"$120,541.00","$94,177.00",$294.30,"$34,455.00"
IAH - SAT,55359814122,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/55359814122,https://www.airlines-manager.com/aircraft/show/99093335,23:30,2:14,320,"$120,541.00","$94,177.00",$294.30,"$34,455.00"
IAH - SAV,55307089559,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/55307089559,https://www.airlines-manager.com/aircraft/show/110424758,2:00,7:29,320,"$343,864.00","$308,058.00",$962.68,"$56,180.79"
IAH - SAV,55328734088,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/55328734088,https://www.airlines-manager.com/aircraft/show/110424759,8:30,13:59,320,"$343,864.00","$308,058.00",$962.68,"$56,180.79"
IAH - SAV,55339205025,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/55339205025,https://www.airlines-manager.com/aircraft/show/110424760,13:00,18:29,320,"$343,864.00","$308,058.00",$962.68,"$56,180.79"
IAH - SAV,55355670204,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/55355670204,https://www.airlines-manager.com/aircraft/show/110424761,21:45,3:14,320,"$343,864.00","$308,058.00",$962.68,"$56,180.79"
IAH - SBA,55307089470,IAH-SNA-SBA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/55307089470,https://www.airlines-manager.com/aircraft/show/119525227,1:15,8:59,272,"$439,188.00","$409,680.00","$1,506.18","$52,975.86"
IAH - SBA,55318171939,IAH-SNA-SBA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/55318171939,https://www.airlines-manager.com/aircraft/show/119525228,3:15,10:59,272,"$439,188.00","$409,680.00","$1,506.18","$52,975.86"
IAH - SBA,55335025838,IAH-SNA-SBA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/55335025838,https://www.airlines-manager.com/aircraft/show/119525226,11:00,18:44,272,"$439,188.00","$409,680.00","$1,506.18","$52,975.86"
IAH - SBA,55339204978,IAH-SNA-SBA-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/55339204978,https://www.airlines-manager.com/aircraft/show/119525229,13:00,20:44,272,"$439,188.00","$409,680.00","$1,506.18","$52,975.86"
IAH - SBA,55349594304,IAH-SNA-SBA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/55349594304,https://www.airlines-manager.com/aircraft/show/119525225,18:15,1:59,272,"$439,188.00","$409,680.00","$1,506.18","$52,975.86"
IAH - SCL,55307089499,IAH 56A-1 E,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/55307089499,https://www.airlines-manager.com/aircraft/show/106676232,1:30,19:59,648,"$2,300,982.00","$2,144,866.00","$3,309.98","$116,043.25"
IAH - SCL,55325251965,IAH 56A-3 E,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/55325251965,https://www.airlines-manager.com/aircraft/show/106676234,6:30,0:59,648,"$2,300,982.00","$2,144,866.00","$3,309.98","$116,043.25"
IAH - SCL,55349594219,IAH 56A-5 E,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/55349594219,https://www.airlines-manager.com/aircraft/show/106676236,17:30,11:59,648,"$2,300,982.00","$2,144,866.00","$3,309.98","$116,043.25"
IAH - SDF,55318172049,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/55318172049,https://www.airlines-manager.com/aircraft/show/107467132,4:00,9:14,310,"$330,138.00","$297,585.00",$959.95,"$56,863.38"
IAH - SDF,55335026012,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/55335026012,https://www.airlines-manager.com/aircraft/show/107467133,12:00,17:14,310,"$330,138.00","$297,585.00",$959.95,"$56,863.38"
IAH - SDF,55349594339,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/55349594339,https://www.airlines-manager.com/aircraft/show/107467134,18:30,23:44,310,"$330,138.00","$297,585.00",$959.95,"$56,863.38"
IAH - SDF,55352803016,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/55352803016,https://www.airlines-manager.com/aircraft/show/107467211,20:15,1:29,112,"$156,673.00","$135,766.00","$1,212.20","$25,942.55"
IAH - SDF,55358035978,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/55358035978,https://www.airlines-manager.com/aircraft/show/107467131,22:15,3:29,310,"$330,138.00","$297,585.00",$959.95,"$56,863.38"
IAH - SEA,55318171980,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/55318171980,https://www.airlines-manager.com/aircraft/show/105562971,3:30,12:44,338,"$646,653.00","$591,295.00","$1,749.39","$64,039.17"
IAH - SEA,55318171981,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/55318171981,https://www.airlines-manager.com/aircraft/show/105562973,4:30,13:44,338,"$646,653.00","$591,295.00","$1,749.39","$64,039.17"
IAH - SEA,55339204987,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/55339204987,https://www.airlines-manager.com/aircraft/show/105562972,13:00,22:14,338,"$646,653.00","$591,295.00","$1,749.39","$64,039.17"
IAH - SEA,55342652168,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/55342652168,https://www.airlines-manager.com/aircraft/show/105562974,14:00,23:14,338,"$646,653.00","$591,295.00","$1,749.39","$64,039.17"
IAH - SEA,55349594218,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/55349594218,https://www.airlines-manager.com/aircraft/show/105562975,17:30,2:44,338,"$646,653.00","$591,295.00","$1,749.39","$64,039.17"
IAH - SEA,55355670174,IAH-SEA-DEN 6,ERJ-175,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/55355670174,https://www.airlines-manager.com/aircraft/show/105601215,21:15,6:44,112,"$280,372.00","$242,484.00","$2,165.04","$25,569.49"
IAH - SJC,55318171920,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/55318171920,https://www.airlines-manager.com/aircraft/show/96694086,3:00,11:14,310,"$533,552.00","$487,923.00","$1,573.95","$59,261.90"
IAH - SJC,55335025915,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/55335025915,https://www.airlines-manager.com/aircraft/show/96692491,11:00,19:14,310,"$533,552.00","$487,923.00","$1,573.95","$59,261.90"
IAH - SJC,55342652282,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/55342652282,https://www.airlines-manager.com/aircraft/show/96692343,14:30,22:44,310,"$533,552.00","$487,923.00","$1,573.95","$59,261.90"
IAH - SJC,55358036062,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/55358036062,https://www.airlines-manager.com/aircraft/show/96691558,23:00,7:14,310,"$533,552.00","$487,923.00","$1,573.95","$59,261.90"
IAH - SJC,55359814137,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/55359814137,https://www.airlines-manager.com/aircraft/show/106014350,23:30,7:44,198,"$401,349.00","$364,777.00","$1,842.31","$44,304.90"
IAH - SJD,55307089533,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/55307089533,https://www.airlines-manager.com/aircraft/show/114266975,1:45,7:44,320,"$382,514.00","$343,676.00","$1,073.99","$57,438.89"
IAH - SJD,55321920632,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/55321920632,https://www.airlines-manager.com/aircraft/show/113250059,5:15,11:14,320,"$382,514.00","$343,676.00","$1,073.99","$57,438.89"
IAH - SJD,55335025989,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/55335025989,https://www.airlines-manager.com/aircraft/show/113114108,12:00,17:59,320,"$382,514.00","$343,676.00","$1,073.99","$57,438.89"
IAH - SJD,55345991585,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/55345991585,https://www.airlines-manager.com/aircraft/show/114266974,16:00,21:59,320,"$382,514.00","$343,676.00","$1,073.99","$57,438.89"
IAH - SJD,55355670154,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/55355670154,https://www.airlines-manager.com/aircraft/show/105099862,21:00,2:59,109,"$175,124.00","$152,940.00","$1,403.12","$25,561.00"
IAH - SLC,55318171882,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/55318171882,https://www.airlines-manager.com/aircraft/show/93094698,2:45,9:29,310,"$425,998.00","$382,511.00","$1,233.91","$56,808.56"
IAH - SLC,55321920601,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/55321920601,https://www.airlines-manager.com/aircraft/show/93100455,4:45,11:29,112,"$200,317.00","$172,140.00","$1,536.96","$25,565.35"
IAH - SLC,55331908235,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/55331908235,https://www.airlines-manager.com/aircraft/show/93094699,10:00,16:44,310,"$425,998.00","$382,511.00","$1,233.91","$56,808.56"
IAH - SLC,55335026007,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/55335026007,https://www.airlines-manager.com/aircraft/show/93094695,12:00,18:44,310,"$425,998.00","$382,511.00","$1,233.91","$56,808.56"
IAH - SLC,55342652371,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/55342652371,https://www.airlines-manager.com/aircraft/show/93094696,15:15,21:59,310,"$425,998.00","$382,511.00","$1,233.91","$56,808.56"
IAH - SLC,55355670139,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/55355670139,https://www.airlines-manager.com/aircraft/show/93094697,21:00,3:44,310,"$425,998.00","$382,511.00","$1,233.91","$56,808.56"
IAH - SMF,55307089582,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/55307089582,https://www.airlines-manager.com/aircraft/show/99093335,2:15,10:29,320,"$532,190.00","$482,961.00","$1,509.25","$58,659.23"
IAH - SMF,55318172086,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/55318172086,https://www.airlines-manager.com/aircraft/show/106499070,4:15,12:29,198,"$400,763.00","$365,374.00","$1,845.32","$44,377.41"
IAH - SMF,55339205015,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/55339205015,https://www.airlines-manager.com/aircraft/show/99093332,13:00,21:14,320,"$532,190.00","$482,961.00","$1,509.25","$58,659.23"
IAH - SMF,55345991651,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/55345991651,https://www.airlines-manager.com/aircraft/show/99093333,16:45,0:59,320,"$532,190.00","$482,961.00","$1,509.25","$58,659.23"
IAH - SMF,55355670102,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/55355670102,https://www.airlines-manager.com/aircraft/show/99093334,20:45,4:59,320,"$532,190.00","$482,961.00","$1,509.25","$58,659.23"
IAH - SNA,55307089525,IAH-SNA-SBA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/55307089525,https://www.airlines-manager.com/aircraft/show/119525226,1:45,8:59,272,"$423,610.00","$394,459.00","$1,450.22","$54,533.50"
IAH - SNA,55318171897,IAH-SYR-ROC 5,ERJ-175,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/55318171897,https://www.airlines-manager.com/aircraft/show/119525249,2:45,9:59,112,"$220,728.00","$195,433.00","$1,744.94","$27,018.39"
IAH - SNA,55318171898,IAH-SNA-SBA-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/55318171898,https://www.airlines-manager.com/aircraft/show/119525229,3:45,10:59,272,"$423,610.00","$394,459.00","$1,450.22","$54,533.50"
IAH - SNA,55335025837,IAH-SNA-SBA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/55335025837,https://www.airlines-manager.com/aircraft/show/119525225,11:00,18:14,272,"$423,610.00","$394,459.00","$1,450.22","$54,533.50"
IAH - SNA,55349594265,IAH-SNA-SBA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/55349594265,https://www.airlines-manager.com/aircraft/show/119525227,18:00,1:14,272,"$423,610.00","$394,459.00","$1,450.22","$54,533.50"
IAH - SNA,55352802956,IAH-SNA-SBA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/55352802956,https://www.airlines-manager.com/aircraft/show/119525228,20:00,3:14,272,"$423,610.00","$394,459.00","$1,450.22","$54,533.50"
IAH - SRQ,55307089463,IAH-ILM-SRQ 3,A321-200,https://www.airlines-manager.com/network/showline/50666456,https://www.airlines-manager.com/network/showflight/55307089463,https://www.airlines-manager.com/aircraft/show/120452416,1:00,6:14,310,"$332,420.00","$301,728.00",$973.32,"$57,655.03"
IAH - SRQ,55328734142,IAH-ILM-SRQ 2,A321-200,https://www.airlines-manager.com/network/showline/50666456,https://www.airlines-manager.com/network/showflight/55328734142,https://www.airlines-manager.com/aircraft/show/120452417,9:00,14:14,310,"$332,420.00","$301,728.00",$973.32,"$57,655.03"
IAH - SRQ,55342652274,IAH-ILM-SRQ 1,A321-200,https://www.airlines-manager.com/network/showline/50666456,https://www.airlines-manager.com/network/showflight/55342652274,https://www.airlines-manager.com/aircraft/show/120452418,14:15,19:29,310,"$332,420.00","$301,728.00",$973.32,"$57,655.03"
IAH - SRQ,55352802979,IAH-ILM-SRQ 4,A321-200,https://www.airlines-manager.com/network/showline/50666456,https://www.airlines-manager.com/network/showflight/55352802979,https://www.airlines-manager.com/aircraft/show/120452415,20:00,1:14,310,"$332,420.00","$301,728.00",$973.32,"$57,655.03"
IAH - STL,55307089478,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/55307089478,https://www.airlines-manager.com/aircraft/show/88725601,1:15,5:59,310,"$300,923.00","$268,652.00",$866.62,"$56,757.46"
IAH - STL,55328734073,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/55328734073,https://www.airlines-manager.com/aircraft/show/103600702,8:15,12:59,310,"$300,923.00","$268,652.00",$866.62,"$56,757.46"
IAH - STL,55342652219,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/55342652219,https://www.airlines-manager.com/aircraft/show/103600701,14:00,18:44,310,"$300,923.00","$268,652.00",$866.62,"$56,757.46"
IAH - STL,55342652220,IAH-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/55342652220,https://www.airlines-manager.com/aircraft/show/96990010,15:00,19:44,112,"$143,002.00","$122,472.00","$1,093.50","$25,874.37"
IAH - STL,55352803006,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/55352803006,https://www.airlines-manager.com/aircraft/show/103600700,20:15,0:59,310,"$300,923.00","$268,652.00",$866.62,"$56,757.46"
IAH - STL,55355670210,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/55355670210,https://www.airlines-manager.com/aircraft/show/110582844,21:45,2:29,198,"$228,609.00","$202,763.00","$1,024.06","$42,837.25"
IAH - SYR,55307089365,IAH-SYR-ROC 2,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/55307089365,https://www.airlines-manager.com/aircraft/show/119525223,0:15,7:44,320,"$476,176.00","$431,891.00","$1,349.66","$57,713.72"
IAH - SYR,55335025905,IAH-SYR-ROC 1,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/55335025905,https://www.airlines-manager.com/aircraft/show/119525224,11:00,18:29,320,"$476,176.00","$431,891.00","$1,349.66","$57,713.72"
IAH - SYR,55335025906,IAH-SYR-ROC 4,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/55335025906,https://www.airlines-manager.com/aircraft/show/119525221,12:00,19:29,320,"$476,176.00","$431,891.00","$1,349.66","$57,713.72"
IAH - SYR,55345991683,IAH-SYR-ROC 3,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/55345991683,https://www.airlines-manager.com/aircraft/show/119525222,17:00,0:29,320,"$476,176.00","$431,891.00","$1,349.66","$57,713.72"
IAH - SYR,55352802910,IAH-SYR-ROC 5,ERJ-175,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/55352802910,https://www.airlines-manager.com/aircraft/show/119525249,19:15,2:44,112,"$225,013.00","$198,807.00","$1,775.06","$26,566.64"
IAH - TPA,55318172074,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/55318172074,https://www.airlines-manager.com/aircraft/show/93094699,4:15,9:29,310,"$327,531.00","$292,309.00",$942.93,"$55,855.22"
IAH - TPA,55325251960,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/55325251960,https://www.airlines-manager.com/aircraft/show/93094695,6:15,11:29,310,"$327,531.00","$292,309.00",$942.93,"$55,855.22"
IAH - TPA,55331908232,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/55331908232,https://www.airlines-manager.com/aircraft/show/93094696,10:00,15:14,310,"$327,531.00","$292,309.00",$942.93,"$55,855.22"
IAH - TPA,55345991540,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/55345991540,https://www.airlines-manager.com/aircraft/show/93094697,15:45,20:59,310,"$327,531.00","$292,309.00",$942.93,"$55,855.22"
IAH - TPA,55355670188,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/55355670188,https://www.airlines-manager.com/aircraft/show/93094698,21:30,2:44,310,"$327,531.00","$292,309.00",$942.93,"$55,855.22"
IAH - TPA,55359814139,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/55359814139,https://www.airlines-manager.com/aircraft/show/93100455,23:30,4:44,110,"$154,420.00","$131,982.00","$1,199.84","$25,219.49"
IAH - TUL,55307089408,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/55307089408,https://www.airlines-manager.com/aircraft/show/82543907,0:30,4:14,112,"$93,962.00","$77,748.00",$694.18,"$20,825.36"
IAH - TUL,55318172004,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/55318172004,https://www.airlines-manager.com/aircraft/show/114373409,3:30,7:14,310,"$203,562.00","$177,791.00",$573.52,"$47,622.59"
IAH - TUL,55331908177,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/55331908177,https://www.airlines-manager.com/aircraft/show/114373410,9:45,13:29,310,"$203,562.00","$177,791.00",$573.52,"$47,622.59"
IAH - TUL,55342652345,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/55342652345,https://www.airlines-manager.com/aircraft/show/113994196,15:00,18:44,310,"$203,562.00","$177,791.00",$573.52,"$47,622.59"
IAH - TUL,55352803005,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/55352803005,https://www.airlines-manager.com/aircraft/show/86385103,20:15,23:59,310,"$203,562.00","$177,791.00",$573.52,"$47,622.59"
IAH - TUS,55321920647,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/55321920647,https://www.airlines-manager.com/aircraft/show/100684074,5:30,11:14,310,"$360,113.00","$326,034.00","$1,051.72","$56,866.40"
IAH - TUS,55331908279,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/55331908279,https://www.airlines-manager.com/aircraft/show/110582845,10:15,15:59,198,"$273,000.00","$245,697.00","$1,240.89","$42,854.13"
IAH - TUS,55335025961,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/55335025961,https://www.airlines-manager.com/aircraft/show/100684071,11:30,17:14,310,"$360,113.00","$326,034.00","$1,051.72","$56,866.40"
IAH - TUS,55345991686,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/55345991686,https://www.airlines-manager.com/aircraft/show/100684072,17:00,22:44,310,"$360,113.00","$326,034.00","$1,051.72","$56,866.40"
IAH - TUS,55358036085,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/55358036085,https://www.airlines-manager.com/aircraft/show/100684073,23:15,4:59,310,"$360,113.00","$326,034.00","$1,051.72","$56,866.40"
IAH - TYS,55307089594,IAH-GRR-MSN 2,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/55307089594,https://www.airlines-manager.com/aircraft/show/117273347,2:15,7:14,310,"$326,466.00","$296,307.00",$955.83,"$59,459.60"
IAH - TYS,55328734104,IAH-GRR-MSN 1,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/55328734104,https://www.airlines-manager.com/aircraft/show/117273348,8:30,13:29,310,"$326,466.00","$296,307.00",$955.83,"$59,459.60"
IAH - TYS,55335025938,IAH-GRR-MSN 4,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/55335025938,https://www.airlines-manager.com/aircraft/show/117273345,11:00,15:59,310,"$326,466.00","$296,307.00",$955.83,"$59,459.60"
IAH - TYS,55352803009,IAH-GRR-MSN 3,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/55352803009,https://www.airlines-manager.com/aircraft/show/117273346,20:15,1:14,310,"$326,466.00","$296,307.00",$955.83,"$59,459.60"
IAH - UIO,55307089407,IAH 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/55307089407,https://www.airlines-manager.com/aircraft/show/89124076,0:30,11:14,932,"$1,803,944.00","$1,648,550.00","$1,768.83","$153,591.61"
IAH - UIO,55339205092,IAH 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/55339205092,https://www.airlines-manager.com/aircraft/show/88905141,13:15,23:59,932,"$1,803,944.00","$1,648,550.00","$1,768.83","$153,591.61"
IAH - YEG,55307089498,IAH-YEG-BUR 5,A321neo,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/55307089498,https://www.airlines-manager.com/aircraft/show/117273340,1:30,10:44,338,"$643,713.00","$597,097.00","$1,766.56","$64,667.55"
IAH - YEG,55328734103,IAH-YEG-BUR 2,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/55328734103,https://www.airlines-manager.com/aircraft/show/117273343,8:30,17:44,310,"$594,387.00","$545,454.00","$1,759.53","$59,074.44"
IAH - YEG,55335025937,IAH-YEG-BUR 1,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/55335025937,https://www.airlines-manager.com/aircraft/show/117273344,11:00,20:14,310,"$594,387.00","$545,454.00","$1,759.53","$59,074.44"
IAH - YEG,55349594213,IAH-YEG-BUR 4,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/55349594213,https://www.airlines-manager.com/aircraft/show/117273341,17:15,2:29,310,"$594,387.00","$545,454.00","$1,759.53","$59,074.44"
IAH - YEG,55349594214,IAH-YEG-BUR 3,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/55349594214,https://www.airlines-manager.com/aircraft/show/117273342,18:00,3:14,310,"$594,387.00","$545,454.00","$1,759.53","$59,074.44"
IAH - YOW,55318171960,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/55318171960,https://www.airlines-manager.com/aircraft/show/113114108,3:15,11:14,320,"$510,982.00","$463,325.00","$1,447.89","$58,036.53"
IAH - YOW,55328734053,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/55328734053,https://www.airlines-manager.com/aircraft/show/114266974,8:00,15:59,320,"$510,982.00","$463,325.00","$1,447.89","$58,036.53"
IAH - YOW,55339205085,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/55339205085,https://www.airlines-manager.com/aircraft/show/105099862,13:00,20:59,112,"$239,404.00","$211,199.00","$1,885.71","$26,454.99"
IAH - YOW,55349594251,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/55349594251,https://www.airlines-manager.com/aircraft/show/114266975,17:45,1:44,320,"$510,982.00","$463,325.00","$1,447.89","$58,036.53"
IAH - YOW,55355670162,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/55355670162,https://www.airlines-manager.com/aircraft/show/113250059,21:15,5:14,320,"$510,982.00","$463,325.00","$1,447.89","$58,036.53"
IAH - YUL,55307089410,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/55307089410,https://www.airlines-manager.com/aircraft/show/114266980,0:45,8:44,400,"$685,428.00","$627,487.00","$1,568.72","$78,599.62"
IAH - YUL,55307089411,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/55307089411,https://www.airlines-manager.com/aircraft/show/114266979,2:00,9:59,400,"$685,428.00","$627,487.00","$1,568.72","$78,599.62"
IAH - YUL,55335025979,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/55335025979,https://www.airlines-manager.com/aircraft/show/114266978,12:00,19:59,400,"$685,428.00","$627,487.00","$1,568.72","$78,599.62"
IAH - YUL,55355670100,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/55355670100,https://www.airlines-manager.com/aircraft/show/114266977,20:45,4:44,400,"$685,428.00","$627,487.00","$1,568.72","$78,599.62"
IAH - YVR,55307089442,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/55307089442,https://www.airlines-manager.com/aircraft/show/97076946,1:00,10:29,400,"$777,801.00","$709,739.00","$1,774.35","$74,840.67"
IAH - YVR,55318172033,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/55318172033,https://www.airlines-manager.com/aircraft/show/97076943,4:00,13:29,400,"$777,801.00","$709,739.00","$1,774.35","$74,840.67"
IAH - YVR,55339204996,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/55339204996,https://www.airlines-manager.com/aircraft/show/97076944,13:00,22:29,400,"$777,801.00","$709,739.00","$1,774.35","$74,840.67"
IAH - YVR,55345991613,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/55345991613,https://www.airlines-manager.com/aircraft/show/97026605,16:00,1:44,136,"$286,977.00","$251,069.00","$1,846.10","$25,794.76"
IAH - YVR,55352802963,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/55352802963,https://www.airlines-manager.com/aircraft/show/97076945,20:00,5:29,400,"$777,801.00","$709,739.00","$1,774.35","$74,840.67"
IAH - YVR,55358036047,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/55358036047,https://www.airlines-manager.com/aircraft/show/97076942,23:00,8:29,400,"$777,801.00","$709,739.00","$1,774.35","$74,840.67"
IAH - YYC,55307089471,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/55307089471,https://www.airlines-manager.com/aircraft/show/114266978,1:15,9:59,400,"$746,053.00","$683,301.00","$1,708.25","$78,240.57"
IAH - YYC,55335025978,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/55335025978,https://www.airlines-manager.com/aircraft/show/114266977,12:00,20:44,400,"$746,053.00","$683,301.00","$1,708.25","$78,240.57"
IAH - YYC,55345991568,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/55345991568,https://www.airlines-manager.com/aircraft/show/114266980,16:00,0:44,400,"$746,053.00","$683,301.00","$1,708.25","$78,240.57"
IAH - YYC,55349594202,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/55349594202,https://www.airlines-manager.com/aircraft/show/114266979,17:15,1:59,400,"$746,053.00","$683,301.00","$1,708.25","$78,240.57"
IAH - YYZ,55318171990,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/55318171990,https://www.airlines-manager.com/aircraft/show/97076944,3:30,10:29,400,"$574,924.00","$516,276.00","$1,290.69","$73,929.74"
IAH - YYZ,55325251997,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/55325251997,https://www.airlines-manager.com/aircraft/show/97026605,6:45,13:44,136,"$212,224.00","$181,681.00","$1,335.89","$26,016.37"
IAH - YYZ,55339204997,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/55339204997,https://www.airlines-manager.com/aircraft/show/97076945,13:00,19:59,400,"$574,924.00","$516,276.00","$1,290.69","$73,929.74"
IAH - YYZ,55345991566,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/55345991566,https://www.airlines-manager.com/aircraft/show/97076942,16:00,22:59,400,"$574,924.00","$516,276.00","$1,290.69","$73,929.74"
IAH - YYZ,55349594273,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/55349594273,https://www.airlines-manager.com/aircraft/show/97076946,18:00,0:59,400,"$574,924.00","$516,276.00","$1,290.69","$73,929.74"
IAH - YYZ,55355670128,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/55355670128,https://www.airlines-manager.com/aircraft/show/97076943,21:00,3:59,400,"$574,924.00","$516,276.00","$1,290.69","$73,929.74"
IAH - PVR,54556941084,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/54556941084,https://www.airlines-manager.com/aircraft/show/113250059,12:00,17:29,320,"$355,635.00","$318,001.00",$993.75,"$57,994.10"
IAH - PVR,54571726679,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/54571726679,https://www.airlines-manager.com/aircraft/show/113114108,18:00,23:29,320,"$355,635.00","$318,001.00",$993.75,"$57,994.10"
IAH - PVR,54575909748,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/54575909748,https://www.airlines-manager.com/aircraft/show/114266974,22:00,3:29,320,"$355,635.00","$318,001.00",$993.75,"$57,994.10"
IAH - ROC,54536069529,IAH-SYR-ROC 3,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/54536069529,https://www.airlines-manager.com/aircraft/show/119525222,0:30,7:44,320,"$461,250.00","$418,447.00","$1,307.65","$57,849.82"
IAH - ROC,54556940911,IAH-SYR-ROC 2,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/54556940911,https://www.airlines-manager.com/aircraft/show/119525223,11:00,18:14,320,"$461,250.00","$418,447.00","$1,307.65","$57,849.82"
IAH - ROC,54571726727,IAH-SYR-ROC 1,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/54571726727,https://www.airlines-manager.com/aircraft/show/119525224,18:30,1:44,320,"$461,250.00","$418,447.00","$1,307.65","$57,849.82"
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
MIA - ABQ,55704058003,M-IAD-TUS-1,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/55704058003,https://www.airlines-manager.com/aircraft/show/97556721,1:15,9:59,310,"$549,643.00","$501,802.00","$1,618.72","$57,458.24"
MIA - ABQ,55708448755,M-IAD-TUS-4,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/55708448755,https://www.airlines-manager.com/aircraft/show/97556718,4:15,12:59,310,"$549,643.00","$501,802.00","$1,618.72","$57,458.24"
MIA - ABQ,55721560604,M-IAD-TUS-3,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/55721560604,https://www.airlines-manager.com/aircraft/show/97556719,10:00,18:44,310,"$549,643.00","$501,802.00","$1,618.72","$57,458.24"
MIA - ABQ,55741695499,M-IAD-TUS-2,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/55741695499,https://www.airlines-manager.com/aircraft/show/97556720,19:30,4:14,310,"$549,643.00","$501,802.00","$1,618.72","$57,458.24"
MIA - ABQ,55746468132,M-IAD-TUS-5,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/55746468132,https://www.airlines-manager.com/aircraft/show/97556716,22:30,7:14,310,"$549,643.00","$501,802.00","$1,618.72","$57,458.24"
MIA - ACC,55728562398,M-84B-2 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/55728562398,https://www.airlines-manager.com/aircraft/show/106676226,14:15,11:59,962,"$3,584,617.00","$3,274,304.00","$3,403.64","$150,658.16"
MIA - ACC,55746468168,M-84B-4 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/55746468168,https://www.airlines-manager.com/aircraft/show/106676228,22:45,20:29,962,"$3,584,617.00","$3,274,304.00","$3,403.64","$150,658.16"
MIA - ALB,55704058329,M-DSM-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/55704058329,https://www.airlines-manager.com/aircraft/show/113101233,3:30,10:14,320,"$429,480.00","$388,106.00","$1,212.83","$57,639.50"
MIA - ALB,55728562212,M-DSM-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/55728562212,https://www.airlines-manager.com/aircraft/show/113101230,13:00,19:44,320,"$429,480.00","$388,106.00","$1,212.83","$57,639.50"
MIA - ALB,55732031854,M-DSM-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/55732031854,https://www.airlines-manager.com/aircraft/show/100049776,16:00,22:59,112,"$202,975.00","$178,712.00","$1,595.64","$25,591.22"
MIA - ALB,55741695581,M-DSM-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/55741695581,https://www.airlines-manager.com/aircraft/show/111064081,20:15,2:59,320,"$429,480.00","$388,106.00","$1,212.83","$57,639.50"
MIA - ALB,55746468202,M-DSM-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/55746468202,https://www.airlines-manager.com/aircraft/show/113101228,23:15,5:59,320,"$429,480.00","$388,106.00","$1,212.83","$57,639.50"
MIA - ALG,55735532993,M-84B-7 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/55735532993,https://www.airlines-manager.com/aircraft/show/106676231,17:00,12:29,962,"$3,254,925.00","$2,969,393.00","$3,086.69","$152,406.83"
MIA - ALG,55741695618,M-84B-5 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/55741695618,https://www.airlines-manager.com/aircraft/show/106676229,20:30,15:59,962,"$3,254,925.00","$2,969,393.00","$3,086.69","$152,406.83"
MIA - ANU,55711311665,M-ANU-SXM-3 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/55711311665,https://www.airlines-manager.com/aircraft/show/110114297,6:30,13:44,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ANU,55718008622,M-ANU-SXM-4 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/55718008622,https://www.airlines-manager.com/aircraft/show/110114298,8:30,15:44,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ANU,55724951955,M-ANU-SXM-1 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/55724951955,https://www.airlines-manager.com/aircraft/show/110114295,12:00,19:14,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ANU,55728562266,M-ANU-SXM-2 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/55728562266,https://www.airlines-manager.com/aircraft/show/110114296,13:00,20:14,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ANU,55735532929,M-ANU-SXM-6 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/55735532929,https://www.airlines-manager.com/aircraft/show/110114300,16:30,23:44,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ANU,55746468229,M-ANU-SXM-5 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/55746468229,https://www.airlines-manager.com/aircraft/show/110114299,23:30,6:44,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ATL,55724951907,M-LAX-DEN-4,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/55724951907,https://www.airlines-manager.com/aircraft/show/91126652,12:00,16:29,400,"$366,475.00","$302,230.00",$755.58,"$67,411.90"
MIA - ATL,55728562175,M-LAX-DEN-2,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/55728562175,https://www.airlines-manager.com/aircraft/show/91126650,13:00,17:29,400,"$366,475.00","$302,230.00",$755.58,"$67,411.90"
MIA - ATL,55741695484,M-LAX-DEN-1,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/55741695484,https://www.airlines-manager.com/aircraft/show/91126649,19:30,23:59,400,"$366,475.00","$302,230.00",$755.58,"$67,411.90"
MIA - ATL,55744388866,M-LAX-DEN-3,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/55744388866,https://www.airlines-manager.com/aircraft/show/91126651,21:00,1:29,400,"$366,475.00","$302,230.00",$755.58,"$67,411.90"
MIA - AUA,55704058284,M-BGI-CUR-1,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/55704058284,https://www.airlines-manager.com/aircraft/show/107121795,3:00,9:29,320,"$405,459.00","$365,639.00","$1,142.62","$56,396.76"
MIA - AUA,55708448871,M-BGI-CUR-4,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/55708448871,https://www.airlines-manager.com/aircraft/show/107121798,4:30,10:59,320,"$405,459.00","$365,639.00","$1,142.62","$56,396.76"
MIA - AUA,55721560716,M-BGI-CUR-3,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/55721560716,https://www.airlines-manager.com/aircraft/show/107121797,11:00,17:29,320,"$405,459.00","$365,639.00","$1,142.62","$56,396.76"
MIA - AUA,55735533039,M-BGI-CUR-2,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/55735533039,https://www.airlines-manager.com/aircraft/show/107121796,17:45,0:14,320,"$405,459.00","$365,639.00","$1,142.62","$56,396.76"
MIA - AUA,55744388945,M-BGI-CUR-5,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/55744388945,https://www.airlines-manager.com/aircraft/show/107121799,21:45,4:14,242,"$315,896.00","$279,057.00","$1,153.13","$43,042.21"
MIA - AUS,55704058266,M-AUS-PIT-2,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/55704058266,https://www.airlines-manager.com/aircraft/show/99920625,2:45,9:14,320,"$403,957.00","$360,258.00","$1,125.81","$55,566.79"
MIA - AUS,55721560539,M-AUS-PIT-1,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/55721560539,https://www.airlines-manager.com/aircraft/show/99920626,10:00,16:29,320,"$403,957.00","$360,258.00","$1,125.81","$55,566.79"
MIA - AUS,55728562381,M-AUS-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/55728562381,https://www.airlines-manager.com/aircraft/show/82323689,14:00,20:29,112,"$190,525.00","$165,466.00","$1,477.38","$25,521.75"
MIA - AUS,55732031678,M-AUS-PIT-4,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/55732031678,https://www.airlines-manager.com/aircraft/show/99920623,14:45,21:14,320,"$403,957.00","$360,258.00","$1,125.81","$55,566.79"
MIA - AUS,55741695626,M-AUS-PIT-3,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/55741695626,https://www.airlines-manager.com/aircraft/show/99920624,20:45,3:14,320,"$403,957.00","$360,258.00","$1,125.81","$55,566.79"
MIA - BDA,55704058297,M-PUJ-BDA-1 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/55704058297,https://www.airlines-manager.com/aircraft/show/104034457,3:00,9:14,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDA,55704058298,M-PUJ-BDA-3 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/55704058298,https://www.airlines-manager.com/aircraft/show/104034459,3:45,9:59,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDA,55721560629,M-PUJ-BDA-4 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/55721560629,https://www.airlines-manager.com/aircraft/show/104034460,10:00,16:14,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDA,55721560630,M-PUJ-BDA-6 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/55721560630,https://www.airlines-manager.com/aircraft/show/99326789,11:00,17:14,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDA,55732031795,M-PUJ-BDA-5 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/55732031795,https://www.airlines-manager.com/aircraft/show/104034461,15:45,21:59,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDA,55744388913,M-PUJ-BDA-2 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/55744388913,https://www.airlines-manager.com/aircraft/show/104034458,21:15,3:29,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDL,55704058287,M-BDL-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/55704058287,https://www.airlines-manager.com/aircraft/show/107763565,3:00,9:44,320,"$428,052.00","$385,771.00","$1,205.53","$57,292.72"
MIA - BDL,55714463678,M-BDL-SAT-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/55714463678,https://www.airlines-manager.com/aircraft/show/107467213,8:00,14:44,112,"$201,310.00","$176,683.00","$1,577.53","$26,240.05"
MIA - BDL,55728562292,M-BDL-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/55728562292,https://www.airlines-manager.com/aircraft/show/107763561,13:45,20:29,320,"$428,052.00","$385,771.00","$1,205.53","$57,292.72"
MIA - BDL,55728562293,M-BDL-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/55728562293,https://www.airlines-manager.com/aircraft/show/107763566,14:00,20:44,320,"$428,052.00","$385,771.00","$1,205.53","$57,292.72"
MIA - BDL,55741695610,M-BDL-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/55741695610,https://www.airlines-manager.com/aircraft/show/107763562,20:30,3:14,320,"$428,052.00","$385,771.00","$1,205.53","$57,292.72"
MIA - BFF,55704057927,M-PSP-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/55704057927,https://www.airlines-manager.com/aircraft/show/116789634,0:45,9:29,320,"$556,654.00","$506,491.00","$1,582.78","$57,995.15"
MIA - BFF,55704057928,M-PSP-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/55704057928,https://www.airlines-manager.com/aircraft/show/116789632,1:00,9:44,320,"$556,654.00","$506,491.00","$1,582.78","$57,995.15"
MIA - BFF,55721560556,M-PSP-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/55721560556,https://www.airlines-manager.com/aircraft/show/116789633,10:00,18:44,320,"$556,654.00","$506,491.00","$1,582.78","$57,995.15"
MIA - BFF,55728562216,M-PSP-BFF-5,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/55728562216,https://www.airlines-manager.com/aircraft/show/116789630,13:00,21:44,320,"$556,654.00","$506,491.00","$1,582.78","$57,995.15"
MIA - BFF,55741695630,M-PSP-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/55741695630,https://www.airlines-manager.com/aircraft/show/116789631,20:45,5:29,320,"$556,654.00","$506,491.00","$1,582.78","$57,995.15"
MIA - BGI,55704058267,M-BGI-CUR-2,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/55704058267,https://www.airlines-manager.com/aircraft/show/107121796,2:45,10:59,320,"$518,059.00","$469,235.00","$1,466.36","$56,992.11"
MIA - BGI,55714463575,M-BGI-CUR-5,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/55714463575,https://www.airlines-manager.com/aircraft/show/107121799,6:45,14:59,320,"$518,059.00","$469,235.00","$1,466.36","$56,992.11"
MIA - BGI,55724951918,M-BGI-CUR-1,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/55724951918,https://www.airlines-manager.com/aircraft/show/107121795,12:00,20:14,320,"$518,059.00","$469,235.00","$1,466.36","$56,992.11"
MIA - BGI,55728562287,M-BGI-CUR-4,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/55728562287,https://www.airlines-manager.com/aircraft/show/107121798,13:30,21:44,320,"$518,059.00","$469,235.00","$1,466.36","$56,992.11"
MIA - BGI,55741695547,M-BGI-CUR-3,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/55741695547,https://www.airlines-manager.com/aircraft/show/107121797,20:00,4:14,320,"$518,059.00","$469,235.00","$1,466.36","$56,992.11"
MIA - BHM,55704058348,M-CID-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/55704058348,https://www.airlines-manager.com/aircraft/show/116789651,3:45,8:29,310,"$302,720.00","$273,542.00",$882.39,"$57,790.56"
MIA - BHM,55721560617,M-CID-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/55721560617,https://www.airlines-manager.com/aircraft/show/116789652,10:00,14:44,310,"$302,720.00","$273,542.00",$882.39,"$57,790.56"
MIA - BHM,55735533008,M-CID-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/55735533008,https://www.airlines-manager.com/aircraft/show/116789653,17:15,21:59,310,"$302,720.00","$273,542.00",$882.39,"$57,790.56"
MIA - BHM,55746468164,M-CID-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/55746468164,https://www.airlines-manager.com/aircraft/show/116789650,22:45,3:29,310,"$302,720.00","$273,542.00",$882.39,"$57,790.56"
MIA - BIL,55721560553,M-BIL-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/55721560553,https://www.airlines-manager.com/aircraft/show/116789629,10:00,20:14,320,"$634,212.00","$578,720.00","$1,808.50","$56,552.44"
MIA - BIL,55724951929,M-BIL-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/55724951929,https://www.airlines-manager.com/aircraft/show/116789628,12:00,22:14,320,"$634,212.00","$578,720.00","$1,808.50","$56,552.44"
MIA - BIL,55728562328,M-BIL-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/55728562328,https://www.airlines-manager.com/aircraft/show/116789627,14:00,0:14,320,"$634,212.00","$578,720.00","$1,808.50","$56,552.44"
MIA - BIL,55744388923,M-BIL-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/55744388923,https://www.airlines-manager.com/aircraft/show/116789626,21:30,7:44,320,"$634,212.00","$578,720.00","$1,808.50","$56,552.44"
MIA - BIL,55747839782,M-BIL-BZN-5,ERJ-175,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/55747839782,https://www.airlines-manager.com/aircraft/show/116042637,23:45,9:59,112,"$298,004.00","$264,192.00","$2,358.86","$25,816.81"
MIA - BNA,55704057941,M-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/55704057941,https://www.airlines-manager.com/aircraft/show/103534663,0:45,5:59,112,"$157,714.00","$136,236.00","$1,216.39","$26,032.36"
MIA - BNA,55704057942,M-BOI-BNA-4,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/55704057942,https://www.airlines-manager.com/aircraft/show/103775657,1:15,6:29,320,"$332,050.00","$293,799.00",$918.12,"$56,139.94"
MIA - BNA,55708448889,M-BOI-BNA-3,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/55708448889,https://www.airlines-manager.com/aircraft/show/104020880,4:45,9:59,320,"$332,050.00","$293,799.00",$918.12,"$56,139.94"
MIA - BNA,55721560544,M-BOI-BNA-2,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/55721560544,https://www.airlines-manager.com/aircraft/show/104022609,10:00,15:14,320,"$332,050.00","$293,799.00",$918.12,"$56,139.94"
MIA - BNA,55724951963,M-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/55724951963,https://www.airlines-manager.com/aircraft/show/103534663,12:00,17:14,112,"$157,714.00","$136,236.00","$1,216.39","$26,032.36"
MIA - BNA,55744388900,M-BOI-BNA-1,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/55744388900,https://www.airlines-manager.com/aircraft/show/104133006,21:15,2:29,320,"$332,050.00","$293,799.00",$918.12,"$56,139.94"
MIA - BOI,55704058169,M-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/55704058169,https://www.airlines-manager.com/aircraft/show/106339154,1:45,12:59,198,"$525,442.00","$481,573.00","$2,432.19","$42,870.00"
MIA - BOI,55721560545,M-BOI-BNA-1,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/55721560545,https://www.airlines-manager.com/aircraft/show/104133006,10:00,21:14,320,"$698,526.00","$638,374.00","$1,994.92","$56,828.55"
MIA - BOI,55728562319,M-BOI-BNA-4,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/55728562319,https://www.airlines-manager.com/aircraft/show/103775657,14:00,1:14,320,"$698,526.00","$638,374.00","$1,994.92","$56,828.55"
MIA - BOI,55735533019,M-BOI-BNA-3,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/55735533019,https://www.airlines-manager.com/aircraft/show/104020880,17:30,4:44,320,"$698,526.00","$638,374.00","$1,994.92","$56,828.55"
MIA - BOI,55746468150,M-BOI-BNA-2,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/55746468150,https://www.airlines-manager.com/aircraft/show/104022609,22:45,9:59,320,"$698,526.00","$638,374.00","$1,994.92","$56,828.55"
MIA - BOS,55704058188,M-SJU-BOS-5,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/55704058188,https://www.airlines-manager.com/aircraft/show/91352059,2:00,8:59,310,"$445,815.00","$401,406.00","$1,294.86","$57,480.57"
MIA - BOS,55708448912,M-SJU-BOS-1,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/55708448912,https://www.airlines-manager.com/aircraft/show/91352063,5:00,11:59,310,"$445,815.00","$401,406.00","$1,294.86","$57,480.57"
MIA - BOS,55721560771,M-SJU-BOS-4,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/55721560771,https://www.airlines-manager.com/aircraft/show/91352060,11:15,18:14,310,"$445,815.00","$401,406.00","$1,294.86","$57,480.57"
MIA - BOS,55735532920,M-SJU-BOS-2,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/55735532920,https://www.airlines-manager.com/aircraft/show/91352062,16:30,23:29,310,"$445,815.00","$401,406.00","$1,294.86","$57,480.57"
MIA - BOS,55738770103,M-SJU-BOS-3,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/55738770103,https://www.airlines-manager.com/aircraft/show/91352061,19:00,1:59,310,"$445,815.00","$401,406.00","$1,294.86","$57,480.57"
MIA - BOS,55741695595,M-SJU-BOS-6 B,A319-100,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/55741695595,https://www.airlines-manager.com/aircraft/show/110582841,20:15,3:14,198,"$337,082.00","$301,501.00","$1,522.73","$43,174.37"
MIA - BTV,55704058288,M-DSM-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/55704058288,https://www.airlines-manager.com/aircraft/show/111064081,3:00,10:14,320,"$461,408.00","$418,536.00","$1,307.93","$57,862.12"
MIA - BTV,55718008633,M-DSM-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/55718008633,https://www.airlines-manager.com/aircraft/show/113101228,8:45,15:59,320,"$461,408.00","$418,536.00","$1,307.93","$57,862.12"
MIA - BTV,55728562213,M-DSM-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/55728562213,https://www.airlines-manager.com/aircraft/show/113101233,13:00,20:14,320,"$461,408.00","$418,536.00","$1,307.93","$57,862.12"
MIA - BTV,55741695516,M-DSM-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/55741695516,https://www.airlines-manager.com/aircraft/show/113101230,19:45,2:59,320,"$461,408.00","$418,536.00","$1,307.93","$57,862.12"
MIA - BTV,55746468192,M-DSM-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/55746468192,https://www.airlines-manager.com/aircraft/show/100049776,23:00,6:29,112,"$219,081.00","$193,710.00","$1,729.55","$25,885.52"
MIA - BUF,55704058285,M-BDL-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/55704058285,https://www.airlines-manager.com/aircraft/show/107763561,3:00,9:44,320,"$425,908.00","$384,093.00","$1,200.29","$57,043.51"
MIA - BUF,55704058286,M-BDL-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/55704058286,https://www.airlines-manager.com/aircraft/show/107763566,3:15,9:59,320,"$425,908.00","$384,093.00","$1,200.29","$57,043.51"
MIA - BUF,55721560718,M-BDL-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/55721560718,https://www.airlines-manager.com/aircraft/show/107763562,11:00,17:44,320,"$425,908.00","$384,093.00","$1,200.29","$57,043.51"
MIA - BUF,55735533022,M-BDL-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/55735533022,https://www.airlines-manager.com/aircraft/show/107763565,17:30,0:14,320,"$425,908.00","$384,093.00","$1,200.29","$57,043.51"
MIA - BUF,55744388915,M-BDL-SAT-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/55744388915,https://www.airlines-manager.com/aircraft/show/107467213,21:15,3:59,112,"$200,324.00","$175,956.00","$1,571.04","$26,132.08"
MIA - BUR,55704058278,M-BUR-PVD-4,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/55704058278,https://www.airlines-manager.com/aircraft/show/108834806,2:45,13:59,310,"$704,259.00","$651,354.00","$2,101.14","$57,984.04"
MIA - BUR,55721560748,M-BUR-PVD-1,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/55721560748,https://www.airlines-manager.com/aircraft/show/108834803,11:00,22:14,310,"$704,259.00","$651,354.00","$2,101.14","$57,984.04"
MIA - BUR,55728562354,M-BUR-PVD-3,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/55728562354,https://www.airlines-manager.com/aircraft/show/108834805,14:00,1:14,310,"$704,259.00","$651,354.00","$2,101.14","$57,984.04"
MIA - BUR,55741695566,M-BUR-PVD-5 B,A319-100,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/55741695566,https://www.airlines-manager.com/aircraft/show/108834807,20:00,7:14,198,"$528,191.00","$485,766.00","$2,453.36","$43,243.26"
MIA - BUR,55741695567,M-BUR-PVD-2,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/55741695567,https://www.airlines-manager.com/aircraft/show/108834804,20:45,7:59,310,"$704,259.00","$651,354.00","$2,101.14","$57,984.04"
MIA - BWI,55708448724,M-BWI-YYZ-4,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/55708448724,https://www.airlines-manager.com/aircraft/show/92153442,4:00,9:44,310,"$362,448.00","$324,139.00","$1,045.61","$56,535.87"
MIA - BWI,55711311634,M-BWI-YYZ-5,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/55711311634,https://www.airlines-manager.com/aircraft/show/92153439,6:00,11:44,310,"$362,448.00","$324,139.00","$1,045.61","$56,535.87"
MIA - BWI,55721560577,M-BWI-YYZ-1,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/55721560577,https://www.airlines-manager.com/aircraft/show/92153443,10:00,15:44,310,"$362,448.00","$324,139.00","$1,045.61","$56,535.87"
MIA - BWI,55728562233,M-BWI-YYZ-2,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/55728562233,https://www.airlines-manager.com/aircraft/show/92153440,13:00,18:44,310,"$362,448.00","$324,139.00","$1,045.61","$56,535.87"
MIA - BWI,55744388877,M-BWI-YYZ-3,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/55744388877,https://www.airlines-manager.com/aircraft/show/92153441,21:00,2:44,310,"$362,448.00","$324,139.00","$1,045.61","$56,535.87"
MIA - BWI,55746468190,M-BWI-YYZ-6 B,A319-100,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/55746468190,https://www.airlines-manager.com/aircraft/show/120519717,23:00,4:44,167,"$253,240.00","$223,475.00","$1,338.17","$38,978.20"
MIA - BZN,55704057859,M-BIL-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/55704057859,https://www.airlines-manager.com/aircraft/show/116789627,0:15,10:44,320,"$656,911.00","$600,715.00","$1,877.23","$57,301.91"
MIA - BZN,55721560724,M-BIL-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/55721560724,https://www.airlines-manager.com/aircraft/show/116789626,11:00,21:29,320,"$656,911.00","$600,715.00","$1,877.23","$57,301.91"
MIA - BZN,55728562276,M-BIL-BZN-5,ERJ-175,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/55728562276,https://www.airlines-manager.com/aircraft/show/116042637,13:00,23:44,112,"$309,244.00","$274,765.00","$2,453.26","$25,599.22"
MIA - BZN,55741695584,M-BIL-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/55741695584,https://www.airlines-manager.com/aircraft/show/116789629,20:15,6:44,320,"$656,911.00","$600,715.00","$1,877.23","$57,301.91"
MIA - BZN,55744388991,M-BIL-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/55744388991,https://www.airlines-manager.com/aircraft/show/116789628,22:15,8:44,320,"$656,911.00","$600,715.00","$1,877.23","$57,301.91"
MIA - CAK,55704058192,M-MHT-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/55704058192,https://www.airlines-manager.com/aircraft/show/115493370,2:00,8:14,310,"$385,091.00","$351,321.00","$1,133.29","$56,361.66"
MIA - CAK,55718008593,M-MHT-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/55718008593,https://www.airlines-manager.com/aircraft/show/115493371,8:15,14:29,310,"$385,091.00","$351,321.00","$1,133.29","$56,361.66"
MIA - CAK,55721560757,M-MHT-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/55721560757,https://www.airlines-manager.com/aircraft/show/115493372,11:00,17:14,310,"$385,091.00","$351,321.00","$1,133.29","$56,361.66"
MIA - CAK,55738770006,M-MHT-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/55738770006,https://www.airlines-manager.com/aircraft/show/114912307,18:00,0:14,112,"$181,775.00","$159,685.00","$1,425.76","$25,617.91"
MIA - CAK,55744388883,M-MHT-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/55744388883,https://www.airlines-manager.com/aircraft/show/115493373,21:00,3:14,275,"$359,280.00","$326,514.00","$1,187.32","$52,381.93"
MIA - CHS,55704058316,M-SDF-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/55704058316,https://www.airlines-manager.com/aircraft/show/94886626,3:15,7:14,310,"$226,980.00","$200,988.00",$648.35,"$50,457.24"
MIA - CHS,55718008652,M-SDF-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/55718008652,https://www.airlines-manager.com/aircraft/show/96692674,9:00,12:59,310,"$226,980.00","$200,988.00",$648.35,"$50,457.24"
MIA - CHS,55721560764,M-SDF-PWM-5,ERJ-175,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/55721560764,https://www.airlines-manager.com/aircraft/show/105601657,11:00,14:59,112,"$105,788.00","$89,336.00",$797.64,"$22,427.45"
MIA - CHS,55728562338,M-SDF-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/55728562338,https://www.airlines-manager.com/aircraft/show/94886625,14:00,17:59,310,"$226,980.00","$200,988.00",$648.35,"$50,457.24"
MIA - CHS,55741695635,M-SDF-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/55741695635,https://www.airlines-manager.com/aircraft/show/94886629,20:45,0:44,292,"$219,222.00","$193,472.00",$662.58,"$48,570.38"
MIA - CID,55704058013,M-CID-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/55704058013,https://www.airlines-manager.com/aircraft/show/116789652,1:15,8:29,310,"$455,731.00","$418,272.00","$1,349.26","$57,825.62"
MIA - CID,55721560618,M-CID-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/55721560618,https://www.airlines-manager.com/aircraft/show/116789653,10:00,17:14,310,"$455,731.00","$418,272.00","$1,349.26","$57,825.62"
MIA - CID,55732031782,M-CID-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/55732031782,https://www.airlines-manager.com/aircraft/show/116789650,15:30,22:44,310,"$455,731.00","$418,272.00","$1,349.26","$57,825.62"
MIA - CID,55741695613,M-CID-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/55741695613,https://www.airlines-manager.com/aircraft/show/116789651,20:30,3:44,310,"$455,731.00","$418,272.00","$1,349.26","$57,825.62"
MIA - CLE,55704057911,M-COS-CVG-5,ERJ-175,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/55704057911,https://www.airlines-manager.com/aircraft/show/103534665,0:30,6:44,112,"$188,656.00","$164,872.00","$1,472.07","$26,450.05"
MIA - CLE,55708448748,M-COS-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/55708448748,https://www.airlines-manager.com/aircraft/show/103684630,4:15,10:29,320,"$400,132.00","$358,875.00","$1,121.48","$57,573.53"
MIA - CLE,55714463643,M-COS-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/55714463643,https://www.airlines-manager.com/aircraft/show/103365574,7:45,13:59,320,"$400,132.00","$358,875.00","$1,121.48","$57,573.53"
MIA - CLE,55728562201,M-COS-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/55728562201,https://www.airlines-manager.com/aircraft/show/103684632,13:00,19:14,320,"$400,132.00","$358,875.00","$1,121.48","$57,573.53"
MIA - CLE,55741695627,M-COS-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/55741695627,https://www.airlines-manager.com/aircraft/show/103684631,20:45,2:59,320,"$400,132.00","$358,875.00","$1,121.48","$57,573.53"
MIA - CLT,55708448768,M-ORD-DFW-6,ERJ-175,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/55708448768,https://www.airlines-manager.com/aircraft/show/82543123,4:15,8:59,112,"$142,655.00","$118,748.00","$1,060.25","$25,087.61"
MIA - CLT,55721560574,M-ORD-DFW-3,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/55721560574,https://www.airlines-manager.com/aircraft/show/91600939,10:00,14:44,310,"$299,768.00","$261,819.00",$844.58,"$55,313.87"
MIA - CLT,55732031836,M-ORD-DFW-2,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/55732031836,https://www.airlines-manager.com/aircraft/show/91600936,16:00,20:44,310,"$299,768.00","$261,819.00",$844.58,"$55,313.87"
MIA - CLT,55735533044,M-ORD-DFW-5,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/55735533044,https://www.airlines-manager.com/aircraft/show/91600937,17:45,22:29,310,"$299,768.00","$261,819.00",$844.58,"$55,313.87"
MIA - CLT,55746468128,M-ORD-DFW-1,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/55746468128,https://www.airlines-manager.com/aircraft/show/91600935,22:30,3:14,310,"$299,768.00","$261,819.00",$844.58,"$55,313.87"
MIA - CLT,55746468129,M-ORD-DFW-4,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/55746468129,https://www.airlines-manager.com/aircraft/show/91600938,23:30,4:14,310,"$299,768.00","$261,819.00",$844.58,"$55,313.87"
MIA - CMH,55704058064,M-MKE-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/55704058064,https://www.airlines-manager.com/aircraft/show/88494374,1:45,7:44,320,"$373,993.00","$333,972.00","$1,043.66","$55,817.05"
MIA - CMH,55714463609,M-MKE-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/55714463609,https://www.airlines-manager.com/aircraft/show/88494378,7:15,13:14,320,"$373,993.00","$333,972.00","$1,043.66","$55,817.05"
MIA - CMH,55728562310,M-MKE-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/55728562310,https://www.airlines-manager.com/aircraft/show/91806233,14:00,19:59,320,"$373,993.00","$333,972.00","$1,043.66","$55,817.05"
MIA - CMH,55738770000,M-MKE-CMH-5 B,A319-100,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/55738770000,https://www.airlines-manager.com/aircraft/show/110582842,18:00,23:59,198,"$283,790.00","$255,521.00","$1,290.51","$42,705.46"
MIA - CMH,55744388869,M-MKE-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/55744388869,https://www.airlines-manager.com/aircraft/show/88239556,21:00,2:59,320,"$373,993.00","$333,972.00","$1,043.66","$55,817.05"
MIA - CMN,55708448920,M-84B-4 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/55708448920,https://www.airlines-manager.com/aircraft/show/106676228,5:00,22:44,962,"$2,973,893.00","$2,715,224.00","$2,822.48","$153,114.14"
MIA - CMN,55741695617,M-84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/55741695617,https://www.airlines-manager.com/aircraft/show/106676225,20:30,14:14,962,"$2,973,893.00","$2,715,224.00","$2,822.48","$153,114.14"
MIA - COS,55711311659,M-COS-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/55711311659,https://www.airlines-manager.com/aircraft/show/103684631,6:30,14:59,320,"$546,028.00","$494,638.00","$1,545.74","$58,307.03"
MIA - COS,55721560644,M-COS-CVG-5,ERJ-175,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/55721560644,https://www.airlines-manager.com/aircraft/show/103534665,10:00,18:44,112,"$257,259.00","$226,678.00","$2,023.91","$25,955.50"
MIA - COS,55728562318,M-COS-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/55728562318,https://www.airlines-manager.com/aircraft/show/103684630,14:00,22:29,320,"$546,028.00","$494,638.00","$1,545.74","$58,307.03"
MIA - COS,55735533018,M-COS-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/55735533018,https://www.airlines-manager.com/aircraft/show/103365574,17:30,1:59,320,"$546,028.00","$494,638.00","$1,545.74","$58,307.03"
MIA - COS,55746468149,M-COS-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/55746468149,https://www.airlines-manager.com/aircraft/show/103684632,22:45,7:14,320,"$546,028.00","$494,638.00","$1,545.74","$58,307.03"
MIA - CPT,55708448917,M-84A-6 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/55708448917,https://www.airlines-manager.com/aircraft/show/93731916,5:00,10:29,1124,"$5,639,082.00","$5,244,474.00","$4,665.90","$956,439.03"
MIA - CPT,55738769998,M-84A-2 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/55738769998,https://www.airlines-manager.com/aircraft/show/93686968,18:00,23:29,1124,"$5,639,082.00","$5,244,474.00","$4,665.90","$956,439.03"
MIA - CUN,55711311590,M-PSP-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/55711311590,https://www.airlines-manager.com/aircraft/show/116789631,5:30,9:44,320,"$251,434.00","$216,081.00",$675.25,"$51,042.76"
MIA - CUN,55718008679,M-PSP-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/55718008679,https://www.airlines-manager.com/aircraft/show/116789634,9:30,13:44,320,"$251,434.00","$216,081.00",$675.25,"$51,042.76"
MIA - CUN,55721560555,M-PSP-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/55721560555,https://www.airlines-manager.com/aircraft/show/116789632,10:00,14:14,320,"$251,434.00","$216,081.00",$675.25,"$51,042.76"
MIA - CUN,55738770067,M-PSP-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/55738770067,https://www.airlines-manager.com/aircraft/show/116789633,18:45,22:59,320,"$251,434.00","$216,081.00",$675.25,"$51,042.76"
MIA - CUN,55744388947,M-PSP-BFF-5,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/55744388947,https://www.airlines-manager.com/aircraft/show/116789630,21:45,1:59,315,"$247,867.00","$212,603.00",$674.93,"$50,221.18"
MIA - CUR,55708448749,M-BGI-CUR-3,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/55708448749,https://www.airlines-manager.com/aircraft/show/107121797,4:15,10:59,320,"$414,925.00","$372,912.00","$1,165.35","$55,382.97"
MIA - CUR,55721560715,M-BGI-CUR-2,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/55721560715,https://www.airlines-manager.com/aircraft/show/107121796,11:00,17:44,320,"$414,925.00","$372,912.00","$1,165.35","$55,382.97"
MIA - CUR,55732031717,M-BGI-CUR-5,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/55732031717,https://www.airlines-manager.com/aircraft/show/107121799,15:00,21:44,320,"$414,925.00","$372,912.00","$1,165.35","$55,382.97"
MIA - CUR,55741695579,M-BGI-CUR-1,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/55741695579,https://www.airlines-manager.com/aircraft/show/107121795,20:15,2:59,320,"$414,925.00","$372,912.00","$1,165.35","$55,382.97"
MIA - CUR,55744388944,M-BGI-CUR-4,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/55744388944,https://www.airlines-manager.com/aircraft/show/107121798,21:45,4:29,296,"$386,485.00","$345,436.00","$1,167.01","$51,302.38"
MIA - CVG,55704058181,M-COS-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/55704058181,https://www.airlines-manager.com/aircraft/show/103365574,2:00,7:44,320,"$370,605.00","$328,724.00","$1,027.26","$57,335.58"
MIA - CVG,55714463611,M-COS-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/55714463611,https://www.airlines-manager.com/aircraft/show/103684632,7:15,12:59,320,"$370,605.00","$328,724.00","$1,027.26","$57,335.58"
MIA - CVG,55732031716,M-COS-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/55732031716,https://www.airlines-manager.com/aircraft/show/103684631,15:00,20:44,320,"$370,605.00","$328,724.00","$1,027.26","$57,335.58"
MIA - CVG,55738770085,M-COS-CVG-5,ERJ-175,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/55738770085,https://www.airlines-manager.com/aircraft/show/103534665,18:45,0:29,112,"$175,356.00","$151,647.00","$1,353.99","$26,450.06"
MIA - CVG,55746468124,M-COS-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/55746468124,https://www.airlines-manager.com/aircraft/show/103684630,22:30,4:14,320,"$370,605.00","$328,724.00","$1,027.26","$57,335.58"
MIA - DEN,55704058024,M-LAX-DEN-3,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/55704058024,https://www.airlines-manager.com/aircraft/show/91126651,1:30,9:59,400,"$730,615.00","$644,983.00","$1,612.46","$76,029.43"
MIA - DEN,55704058025,M-LAX-DEN-4,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/55704058025,https://www.airlines-manager.com/aircraft/show/91126652,3:30,11:59,400,"$730,615.00","$644,983.00","$1,612.46","$76,029.43"
MIA - DEN,55721560695,M-LAX-DEN-1,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/55721560695,https://www.airlines-manager.com/aircraft/show/91126649,11:00,19:29,400,"$730,615.00","$644,983.00","$1,612.46","$76,029.43"
MIA - DEN,55735533015,M-LAX-DEN-2,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/55735533015,https://www.airlines-manager.com/aircraft/show/91126650,17:30,1:59,400,"$730,615.00","$644,983.00","$1,612.46","$76,029.43"
MIA - DEN,55744389004,M-LAX-DEN-5 E,A319-100,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/55744389004,https://www.airlines-manager.com/aircraft/show/115181776,22:15,6:59,216,"$428,425.00","$372,033.00","$1,722.38","$42,599.20"
MIA - DFW,55704058332,M-ORD-DFW-2,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/55704058332,https://www.airlines-manager.com/aircraft/show/91600936,3:30,9:59,310,"$410,166.00","$354,245.00","$1,142.73","$54,639.33"
MIA - DFW,55721560571,M-ORD-DFW-1,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/55721560571,https://www.airlines-manager.com/aircraft/show/91600935,10:00,16:29,310,"$410,166.00","$354,245.00","$1,142.73","$54,639.33"
MIA - DFW,55721560572,M-ORD-DFW-4,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/55721560572,https://www.airlines-manager.com/aircraft/show/91600938,11:00,17:29,310,"$410,166.00","$354,245.00","$1,142.73","$54,639.33"
MIA - DFW,55732031799,M-ORD-DFW-6,ERJ-175,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/55732031799,https://www.airlines-manager.com/aircraft/show/82543123,15:45,22:14,112,"$193,018.00","$157,511.00","$1,406.35","$24,294.76"
MIA - DFW,55744388926,M-ORD-DFW-3,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/55744388926,https://www.airlines-manager.com/aircraft/show/91600939,21:30,3:59,310,"$410,166.00","$354,245.00","$1,142.73","$54,639.33"
MIA - DFW,55746468130,M-ORD-DFW-5,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/55746468130,https://www.airlines-manager.com/aircraft/show/91600937,22:30,4:59,310,"$410,166.00","$354,245.00","$1,142.73","$54,639.33"
MIA - DSM,55704058289,M-DSM-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/55704058289,https://www.airlines-manager.com/aircraft/show/113101230,3:00,10:14,320,"$457,870.00","$414,841.00","$1,296.38","$57,351.29"
MIA - DSM,55718008641,M-DSM-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/55718008641,https://www.airlines-manager.com/aircraft/show/100049776,8:45,15:59,112,"$216,773.00","$191,389.00","$1,708.83","$26,459.31"
MIA - DSM,55728562211,M-DSM-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/55728562211,https://www.airlines-manager.com/aircraft/show/111064081,13:00,20:14,320,"$457,870.00","$414,841.00","$1,296.38","$57,351.29"
MIA - DSM,55732031827,M-DSM-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/55732031827,https://www.airlines-manager.com/aircraft/show/113101228,16:00,23:14,320,"$457,870.00","$414,841.00","$1,296.38","$57,351.29"
MIA - DSM,55741695582,M-DSM-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/55741695582,https://www.airlines-manager.com/aircraft/show/113101233,20:15,3:29,320,"$457,870.00","$414,841.00","$1,296.38","$57,351.29"
MIA - DSS,55704057824,M-84B-7 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/55704057824,https://www.airlines-manager.com/aircraft/show/106676231,0:00,16:59,962,"$2,864,435.00","$2,618,423.00","$2,721.85","$154,176.04"
MIA - DSS,55724951960,M-84B-3 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/55724951960,https://www.airlines-manager.com/aircraft/show/106676227,12:00,4:59,962,"$2,864,435.00","$2,618,423.00","$2,721.85","$154,176.04"
MIA - DTW,55704058028,M-PDX-DTW-3,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/55704058028,https://www.airlines-manager.com/aircraft/show/89943713,1:30,7:59,320,"$414,846.00","$362,524.00","$1,132.89","$55,916.30"
MIA - DTW,55704058029,M-PDX-DTW-4,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/55704058029,https://www.airlines-manager.com/aircraft/show/89943712,2:30,8:59,320,"$414,846.00","$362,524.00","$1,132.89","$55,916.30"
MIA - DTW,55721560523,M-PDX-DTW-2,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/55721560523,https://www.airlines-manager.com/aircraft/show/89943714,10:00,16:29,320,"$414,846.00","$362,524.00","$1,132.89","$55,916.30"
MIA - DTW,55728562309,M-PDX-DTW-5,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/55728562309,https://www.airlines-manager.com/aircraft/show/89943711,14:00,20:29,320,"$414,846.00","$362,524.00","$1,132.89","$55,916.30"
MIA - DTW,55746468119,M-PDX-DTW-1,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/55746468119,https://www.airlines-manager.com/aircraft/show/89943715,22:30,4:59,320,"$414,846.00","$362,524.00","$1,132.89","$55,916.30"
MIA - ECP,55704057874,M-MAF-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50834918,https://www.airlines-manager.com/network/showflight/55704057874,https://www.airlines-manager.com/aircraft/show/92137503,0:15,4:14,112,"$103,168.00","$86,664.00",$773.79,"$21,756.65"
MIA - ECP,55704057875,M-MAF-ROC-4,A321-200,https://www.airlines-manager.com/network/showline/50834918,https://www.airlines-manager.com/network/showflight/55704057875,https://www.airlines-manager.com/aircraft/show/120933310,2:15,6:14,310,"$221,304.00","$195,136.00",$629.47,"$48,988.12"
MIA - ECP,55714463676,M-MAF-ROC-3,A321-200,https://www.airlines-manager.com/network/showline/50834918,https://www.airlines-manager.com/network/showflight/55714463676,https://www.airlines-manager.com/aircraft/show/120933309,8:00,11:59,310,"$221,304.00","$195,136.00",$629.47,"$48,988.12"
MIA - ECP,55721560625,M-MAF-ROC-2,A321-200,https://www.airlines-manager.com/network/showline/50834918,https://www.airlines-manager.com/network/showflight/55721560625,https://www.airlines-manager.com/aircraft/show/120933308,10:00,13:59,310,"$221,304.00","$195,136.00",$629.47,"$48,988.12"
MIA - ECP,55735532944,M-MAF-ROC-1,A321-200,https://www.airlines-manager.com/network/showline/50834918,https://www.airlines-manager.com/network/showflight/55735532944,https://www.airlines-manager.com/aircraft/show/120933307,16:45,20:44,310,"$221,304.00","$195,136.00",$629.47,"$48,988.12"
MIA - ELP,55718008594,M-ELP-MCI-5 B,A319-100,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/55718008594,https://www.airlines-manager.com/aircraft/show/105093924,8:15,16:44,198,"$402,779.00","$366,768.00","$1,852.36","$43,233.95"
MIA - ELP,55721560529,M-ELP-MCI-1,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/55721560529,https://www.airlines-manager.com/aircraft/show/91806234,10:00,18:29,320,"$534,175.00","$484,066.00","$1,512.71","$57,060.83"
MIA - ELP,55735532900,M-ELP-MCI-3,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/55735532900,https://www.airlines-manager.com/aircraft/show/91806232,16:15,0:44,320,"$534,175.00","$484,066.00","$1,512.71","$57,060.83"
MIA - ELP,55735532901,M-ELP-MCI-4,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/55735532901,https://www.airlines-manager.com/aircraft/show/91806231,17:00,1:29,320,"$534,175.00","$484,066.00","$1,512.71","$57,060.83"
MIA - ELP,55746468199,M-ELP-MCI-2,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/55746468199,https://www.airlines-manager.com/aircraft/show/91806235,23:15,7:44,320,"$534,175.00","$484,066.00","$1,512.71","$57,060.83"
MIA - EUG,55704058040,M-EUG-SYR-4,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/55704058040,https://www.airlines-manager.com/aircraft/show/119652480,1:30,13:59,320,"$770,422.00","$706,945.00","$2,209.20","$56,631.11"
MIA - EUG,55728562337,M-EUG-SYR-1,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/55728562337,https://www.airlines-manager.com/aircraft/show/119652483,14:00,2:29,320,"$770,422.00","$706,945.00","$2,209.20","$56,631.11"
MIA - EUG,55738770068,M-EUG-SYR-3,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/55738770068,https://www.airlines-manager.com/aircraft/show/119652481,18:45,7:14,320,"$770,422.00","$706,945.00","$2,209.20","$56,631.11"
MIA - EUG,55746468222,M-EUG-SYR-2,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/55746468222,https://www.airlines-manager.com/aircraft/show/119652482,23:30,11:59,320,"$770,422.00","$706,945.00","$2,209.20","$56,631.11"
MIA - FAR,55704057926,M-FAR-TUL-3,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/55704057926,https://www.airlines-manager.com/aircraft/show/110883161,0:45,9:29,320,"$548,683.00","$499,861.00","$1,562.07","$57,235.99"
MIA - FAR,55714463612,M-FAR-TUL-4,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/55714463612,https://www.airlines-manager.com/aircraft/show/110883162,7:15,15:59,320,"$548,683.00","$499,861.00","$1,562.07","$57,235.99"
MIA - FAR,55721560721,M-FAR-TUL-1,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/55721560721,https://www.airlines-manager.com/aircraft/show/110883159,11:00,19:44,320,"$548,683.00","$499,861.00","$1,562.07","$57,235.99"
MIA - FAR,55732031825,M-FAR-TUL-2,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/55732031825,https://www.airlines-manager.com/aircraft/show/110883160,16:00,0:44,320,"$548,683.00","$499,861.00","$1,562.07","$57,235.99"
MIA - FAR,55738770029,M-FAR-TUL-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/55738770029,https://www.airlines-manager.com/aircraft/show/87169421,18:15,2:59,112,"$258,578.00","$229,164.00","$2,046.11","$26,240.15"
MIA - FAT,55718008605,M-FAT-MSO-4,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/55718008605,https://www.airlines-manager.com/aircraft/show/113101232,8:30,19:59,320,"$721,117.00","$660,903.00","$2,065.32","$57,553.24"
MIA - FAT,55721560676,M-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/55721560676,https://www.airlines-manager.com/aircraft/show/120519142,10:45,22:14,0,"$202,638.00","$131,134.00",$0.00,"$11,419.51"
MIA - FAT,55721560677,M-FAT-MSO-1,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/55721560677,https://www.airlines-manager.com/aircraft/show/113101229,11:00,22:29,320,"$721,117.00","$660,903.00","$2,065.32","$57,553.24"
MIA - FAT,55738770096,M-FAT-MSO-2,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/55738770096,https://www.airlines-manager.com/aircraft/show/113101231,19:00,6:29,320,"$721,117.00","$660,903.00","$2,065.32","$57,553.24"
MIA - FAT,55744388990,M-FAT-MSO-3,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/55744388990,https://www.airlines-manager.com/aircraft/show/113101234,22:15,9:44,320,"$684,642.00","$629,659.00","$1,967.68","$54,832.42"
MIA - FCA,55704057897,M-FCA-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/55704057897,https://www.airlines-manager.com/aircraft/show/119652477,0:30,11:59,320,"$707,833.00","$648,466.00","$2,026.46","$56,470.19"
MIA - FCA,55704057898,M-FCA-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/55704057898,https://www.airlines-manager.com/aircraft/show/119652476,2:30,13:59,320,"$707,833.00","$648,466.00","$2,026.46","$56,470.19"
MIA - FCA,55724951934,M-FCA-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/55724951934,https://www.airlines-manager.com/aircraft/show/119652479,12:00,23:29,320,"$707,833.00","$648,466.00","$2,026.46","$56,470.19"
MIA - FCA,55728562334,M-FCA-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/55728562334,https://www.airlines-manager.com/aircraft/show/119652478,14:00,1:29,320,"$707,833.00","$648,466.00","$2,026.46","$56,470.19"
MIA - FPO,55704057854,M-BGI-CUR-2,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/55704057854,https://www.airlines-manager.com/aircraft/show/107121796,0:15,2:44,320,"$84,372.00","$59,731.00",$186.66,"$24,052.75"
MIA - FPO,55708448750,M-BGI-CUR-5,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/55708448750,https://www.airlines-manager.com/aircraft/show/107121799,4:15,6:44,320,"$84,372.00","$59,731.00",$186.66,"$24,052.75"
MIA - FPO,55718008678,M-BGI-CUR-1,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/55718008678,https://www.airlines-manager.com/aircraft/show/107121795,9:30,11:59,320,"$84,372.00","$59,731.00",$186.66,"$24,052.75"
MIA - FPO,55721560717,M-BGI-CUR-4,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/55721560717,https://www.airlines-manager.com/aircraft/show/107121798,11:00,13:29,320,"$84,372.00","$59,731.00",$186.66,"$24,052.75"
MIA - FPO,55735533021,M-BGI-CUR-3,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/55735533021,https://www.airlines-manager.com/aircraft/show/107121797,17:30,19:59,204,"$61,288.00","$37,042.00",$181.58,"$14,916.24"
MIA - FSD,55704057975,M-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/55704057975,https://www.airlines-manager.com/aircraft/show/110883110,1:00,8:59,310,"$503,709.00","$462,376.00","$1,491.54","$57,917.66"
MIA - FSD,55704057976,M-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/55704057976,https://www.airlines-manager.com/aircraft/show/110883113,2:45,10:44,310,"$503,709.00","$462,376.00","$1,491.54","$57,917.66"
MIA - FSD,55728562356,M-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/55728562356,https://www.airlines-manager.com/aircraft/show/110883112,14:00,21:59,310,"$503,709.00","$462,376.00","$1,491.54","$57,917.66"
MIA - FSD,55735532906,M-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/55735532906,https://www.airlines-manager.com/aircraft/show/110883111,16:15,0:14,310,"$503,709.00","$462,376.00","$1,491.54","$57,917.66"
MIA - FSD,55744388980,M-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/55744388980,https://www.airlines-manager.com/aircraft/show/104353572,22:00,5:59,95,"$221,171.00","$194,813.00","$2,050.66","$24,402.46"
MIA - GRR,55704057831,M-RAP-GRR-5,ERJ-175,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/55704057831,https://www.airlines-manager.com/aircraft/show/116042630,0:00,6:44,112,"$200,498.00","$176,006.00","$1,571.48","$26,139.50"
MIA - GRR,55704057832,M-RAP-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/55704057832,https://www.airlines-manager.com/aircraft/show/116789623,2:15,8:59,320,"$424,936.00","$383,045.00","$1,197.02","$56,887.87"
MIA - GRR,55721560551,M-RAP-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/55721560551,https://www.airlines-manager.com/aircraft/show/116789624,10:00,16:44,320,"$424,936.00","$383,045.00","$1,197.02","$56,887.87"
MIA - GRR,55724951928,M-RAP-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/55724951928,https://www.airlines-manager.com/aircraft/show/116789622,12:00,18:44,320,"$424,936.00","$383,045.00","$1,197.02","$56,887.87"
MIA - GRR,55738770098,M-RAP-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/55738770098,https://www.airlines-manager.com/aircraft/show/116789625,19:00,1:44,320,"$424,936.00","$383,045.00","$1,197.02","$56,887.87"
MIA - GSO,55718008666,M-EUG-SYR-1,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/55718008666,https://www.airlines-manager.com/aircraft/show/119652483,9:15,13:59,320,"$310,263.00","$276,328.00",$863.53,"$58,379.15"
MIA - GSO,55728562336,M-EUG-SYR-3,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/55728562336,https://www.airlines-manager.com/aircraft/show/119652481,14:00,18:44,320,"$310,263.00","$276,328.00",$863.53,"$58,379.15"
MIA - GSO,55738770069,M-EUG-SYR-2,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/55738770069,https://www.airlines-manager.com/aircraft/show/119652482,18:45,23:29,320,"$310,263.00","$276,328.00",$863.53,"$58,379.15"
MIA - GSO,55741695631,M-EUG-SYR-4,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/55741695631,https://www.airlines-manager.com/aircraft/show/119652480,20:45,1:29,309,"$303,832.00","$270,108.00",$874.14,"$57,065.07"
MIA - HAV,55708448905,M-PDX-DTW-1,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/55708448905,https://www.airlines-manager.com/aircraft/show/89943715,5:00,7:59,320,"$131,980.00","$102,173.00",$319.29,"$34,247.93"
MIA - HAV,55718008647,M-PDX-DTW-4,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/55718008647,https://www.airlines-manager.com/aircraft/show/89943712,9:00,11:59,320,"$131,980.00","$102,173.00",$319.29,"$34,247.93"
MIA - HAV,55721560522,M-PDX-DTW-3,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/55721560522,https://www.airlines-manager.com/aircraft/show/89943713,10:00,12:59,320,"$131,980.00","$102,173.00",$319.29,"$34,247.93"
MIA - HAV,55735532916,M-PDX-DTW-2,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/55735532916,https://www.airlines-manager.com/aircraft/show/89943714,16:30,19:29,320,"$131,980.00","$102,173.00",$319.29,"$34,247.93"
MIA - HAV,55741695607,M-PDX-DTW-5,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/55741695607,https://www.airlines-manager.com/aircraft/show/89943711,20:30,23:29,289,"$120,693.00","$91,131.00",$315.33,"$30,546.70"
MIA - IAD,55708448756,M-IAD-TUS-2,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/55708448756,https://www.airlines-manager.com/aircraft/show/97556720,4:15,9:59,310,"$363,777.00","$324,476.00","$1,046.70","$56,594.65"
MIA - IAD,55714463614,M-IAD-TUS-5,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/55714463614,https://www.airlines-manager.com/aircraft/show/97556716,7:15,12:59,310,"$363,777.00","$324,476.00","$1,046.70","$56,594.65"
MIA - IAD,55721560606,M-IAD-TUS-1,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/55721560606,https://www.airlines-manager.com/aircraft/show/97556721,10:00,15:44,310,"$363,777.00","$324,476.00","$1,046.70","$56,594.65"
MIA - IAD,55728562236,M-IAD-TUS-4,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/55728562236,https://www.airlines-manager.com/aircraft/show/97556718,13:00,18:44,310,"$363,777.00","$324,476.00","$1,046.70","$56,594.65"
MIA - IAD,55738770076,M-IAD-TUS-3,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/55738770076,https://www.airlines-manager.com/aircraft/show/97556719,18:45,0:29,310,"$363,777.00","$324,476.00","$1,046.70","$56,594.65"
MIA - ICT,55704058224,M-FAR-TUL-1,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/55704058224,https://www.airlines-manager.com/aircraft/show/110883159,2:30,9:29,320,"$448,851.00","$405,534.00","$1,267.29","$58,071.69"
MIA - ICT,55718008649,M-FAR-TUL-2,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/55718008649,https://www.airlines-manager.com/aircraft/show/110883160,9:00,15:59,320,"$448,851.00","$405,534.00","$1,267.29","$58,071.69"
MIA - ICT,55721560763,M-FAR-TUL-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/55721560763,https://www.airlines-manager.com/aircraft/show/87169421,11:00,18:14,112,"$213,247.00","$187,816.00","$1,676.93","$25,965.35"
MIA - ICT,55735533041,M-FAR-TUL-3,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/55735533041,https://www.airlines-manager.com/aircraft/show/110883161,17:45,0:44,320,"$448,851.00","$405,534.00","$1,267.29","$58,071.69"
MIA - ICT,55746468154,M-FAR-TUL-4,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/55746468154,https://www.airlines-manager.com/aircraft/show/110883162,22:45,5:44,320,"$448,851.00","$405,534.00","$1,267.29","$58,071.69"
MIA - IND,55704058234,M-AUS-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/55704058234,https://www.airlines-manager.com/aircraft/show/82323689,2:30,8:29,112,"$181,512.00","$157,824.00","$1,409.14","$26,377.27"
MIA - IND,55704058235,M-AUS-PIT-4,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/55704058235,https://www.airlines-manager.com/aircraft/show/99920623,3:15,9:14,320,"$384,262.00","$342,843.00","$1,071.38","$57,299.67"
MIA - IND,55721560537,M-AUS-PIT-3,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/55721560537,https://www.airlines-manager.com/aircraft/show/99920624,10:00,15:59,320,"$384,262.00","$342,843.00","$1,071.38","$57,299.67"
MIA - IND,55732031821,M-AUS-PIT-2,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/55732031821,https://www.airlines-manager.com/aircraft/show/99920625,16:00,21:59,320,"$384,262.00","$342,843.00","$1,071.38","$57,299.67"
MIA - IND,55746468123,M-AUS-PIT-1,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/55746468123,https://www.airlines-manager.com/aircraft/show/99920626,22:30,4:29,320,"$384,262.00","$342,843.00","$1,071.38","$57,299.67"
MIA - JAN,55711311604,M-MHT-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/55711311604,https://www.airlines-manager.com/aircraft/show/114912307,5:30,10:29,112,"$149,970.00","$131,075.00","$1,170.31","$26,302.68"
MIA - JAN,55718008616,M-MHT-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/55718008616,https://www.airlines-manager.com/aircraft/show/115493373,8:30,13:29,310,"$315,458.00","$286,126.00",$922.99,"$57,416.59"
MIA - JAN,55728562363,M-MHT-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/55728562363,https://www.airlines-manager.com/aircraft/show/115493370,14:00,18:59,310,"$315,458.00","$286,126.00",$922.99,"$57,416.59"
MIA - JAN,55741695587,M-MHT-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/55741695587,https://www.airlines-manager.com/aircraft/show/115493371,20:15,1:14,310,"$315,458.00","$286,126.00",$922.99,"$57,416.59"
MIA - JAN,55746468135,M-MHT-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/55746468135,https://www.airlines-manager.com/aircraft/show/115493372,22:30,3:29,255,"$282,548.00","$254,335.00",$997.39,"$51,037.12"
MIA - JAX,55704058283,M-COS-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/55704058283,https://www.airlines-manager.com/aircraft/show/103684631,3:00,6:29,320,"$174,389.00","$145,350.00",$454.22,"$41,727.27"
MIA - JAX,55721560664,M-COS-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/55721560664,https://www.airlines-manager.com/aircraft/show/103684630,10:30,13:59,320,"$174,389.00","$145,350.00",$454.22,"$41,727.27"
MIA - JAX,55728562317,M-COS-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/55728562317,https://www.airlines-manager.com/aircraft/show/103365574,14:00,17:29,320,"$174,389.00","$145,350.00",$454.22,"$41,727.27"
MIA - JAX,55738770121,M-COS-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/55738770121,https://www.airlines-manager.com/aircraft/show/103684632,19:15,22:44,320,"$174,389.00","$145,350.00",$454.22,"$41,727.27"
MIA - JAX,55744389003,M-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/55744389003,https://www.airlines-manager.com/aircraft/show/106339154,22:15,1:44,198,"$132,355.00","$112,459.00",$567.97,"$32,284.88"
MIA - JFK,55711311605,M-JFK-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/55711311605,https://www.airlines-manager.com/aircraft/show/105308264,5:45,11:59,338,"$430,736.00","$378,260.00","$1,119.11","$60,683.42"
MIA - JFK,55714463584,M-JFK-PHX-6,ERJ-175,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/55714463584,https://www.airlines-manager.com/aircraft/show/82683137,6:45,12:59,112,"$187,689.00","$153,479.00","$1,370.35","$24,622.30"
MIA - JFK,55721560511,M-JFK-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/55721560511,https://www.airlines-manager.com/aircraft/show/105308267,10:00,16:14,338,"$430,736.00","$378,260.00","$1,119.11","$60,683.42"
MIA - JFK,55724951901,M-JFK-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/55724951901,https://www.airlines-manager.com/aircraft/show/105308265,12:00,18:14,338,"$430,736.00","$378,260.00","$1,119.11","$60,683.42"
MIA - JFK,55738769967,M-JFK-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/55738769967,https://www.airlines-manager.com/aircraft/show/105308266,18:00,0:14,338,"$430,736.00","$378,260.00","$1,119.11","$60,683.42"
MIA - JFK,55741695622,M-JFK-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/55741695622,https://www.airlines-manager.com/aircraft/show/105308268,20:45,2:59,338,"$430,736.00","$378,260.00","$1,119.11","$60,683.42"
MIA - JNB,55704057813,M-84A-4 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/55704057813,https://www.airlines-manager.com/aircraft/show/93686966,0:00,6:44,1124,"$6,037,007.00","$5,603,375.00","$4,985.21","$832,184.41"
MIA - JNB,55728562262,M-84A-7 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/55728562262,https://www.airlines-manager.com/aircraft/show/93776641,13:00,19:44,1124,"$6,037,007.00","$5,603,375.00","$4,985.21","$832,184.41"
MIA - LAS,55704058021,M-LAS-SEA-5,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/55704058021,https://www.airlines-manager.com/aircraft/show/105093929,1:30,11:59,338,"$720,041.00","$652,865.00","$1,931.55","$62,276.47"
MIA - LAS,55721560508,M-LAS-SEA-1,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/55721560508,https://www.airlines-manager.com/aircraft/show/105093925,10:00,20:29,338,"$720,041.00","$652,865.00","$1,931.55","$62,276.47"
MIA - LAS,55724951957,M-LAS-SEA-6 B,A319-100,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/55724951957,https://www.airlines-manager.com/aircraft/show/113251304,12:00,22:29,198,"$499,043.00","$443,039.00","$2,237.57","$42,261.27"
MIA - LAS,55728562163,M-LAS-SEA-2,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/55728562163,https://www.airlines-manager.com/aircraft/show/105093926,13:00,23:29,338,"$720,041.00","$652,865.00","$1,931.55","$62,276.47"
MIA - LAS,55732031686,M-LAS-SEA-3,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/55732031686,https://www.airlines-manager.com/aircraft/show/105093927,15:00,1:29,338,"$720,041.00","$652,865.00","$1,931.55","$62,276.47"
MIA - LAS,55746468111,M-LAS-SEA-4,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/55746468111,https://www.airlines-manager.com/aircraft/show/105093928,22:30,8:59,338,"$720,041.00","$652,865.00","$1,931.55","$62,276.47"
MIA - LAX,55704057777,M-LAX-DEN-1,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/55704057777,https://www.airlines-manager.com/aircraft/show/91126649,0:00,10:59,400,"$921,726.00","$828,254.00","$2,070.64","$75,410.08"
MIA - LAX,55704057778,M-LAX-DEN-2,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/55704057778,https://www.airlines-manager.com/aircraft/show/91126650,2:00,12:59,400,"$921,726.00","$828,254.00","$2,070.64","$75,410.08"
MIA - LAX,55721560520,M-LAX-DEN-3,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/55721560520,https://www.airlines-manager.com/aircraft/show/91126651,10:00,20:59,400,"$921,726.00","$828,254.00","$2,070.64","$75,410.08"
MIA - LAX,55721560521,M-LAX-DEN-5 E,A319-100,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/55721560521,https://www.airlines-manager.com/aircraft/show/115181776,11:00,22:14,216,"$539,517.00","$478,154.00","$2,213.68","$42,565.64"
MIA - LAX,55735532915,M-LAX-DEN-4,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/55735532915,https://www.airlines-manager.com/aircraft/show/91126652,16:30,3:29,400,"$921,726.00","$828,254.00","$2,070.64","$75,410.08"
MIA - LEX,55704058293,M-CID-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/55704058293,https://www.airlines-manager.com/aircraft/show/116789653,3:00,8:29,310,"$349,957.00","$319,272.00","$1,029.91","$58,225.90"
MIA - LEX,55721560615,M-CID-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/55721560615,https://www.airlines-manager.com/aircraft/show/116789650,10:00,15:29,310,"$349,957.00","$319,272.00","$1,029.91","$58,225.90"
MIA - LEX,55732031743,M-CID-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/55732031743,https://www.airlines-manager.com/aircraft/show/116789651,15:00,20:29,310,"$349,957.00","$319,272.00","$1,029.91","$58,225.90"
MIA - LEX,55741695527,M-CID-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/55741695527,https://www.airlines-manager.com/aircraft/show/116789652,19:45,1:14,302,"$344,657.00","$314,166.00","$1,040.28","$57,294.71"
MIA - LIT,55704058204,M-SDF-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/55704058204,https://www.airlines-manager.com/aircraft/show/96692674,2:15,7:59,310,"$361,995.00","$329,608.00","$1,063.25","$57,489.77"
MIA - LIT,55708448771,M-SDF-PWM-5,ERJ-175,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/55708448771,https://www.airlines-manager.com/aircraft/show/105601657,4:15,9:59,112,"$171,636.00","$150,561.00","$1,344.29","$26,260.64"
MIA - LIT,55718008586,M-SDF-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/55718008586,https://www.airlines-manager.com/aircraft/show/94886625,8:15,13:59,310,"$361,995.00","$329,608.00","$1,063.25","$57,489.77"
MIA - LIT,55732031730,M-SDF-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/55732031730,https://www.airlines-manager.com/aircraft/show/94886629,15:00,20:44,310,"$361,995.00","$329,608.00","$1,063.25","$57,489.77"
MIA - LIT,55744388929,M-SDF-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/55744388929,https://www.airlines-manager.com/aircraft/show/94886626,21:30,3:14,306,"$359,239.00","$326,956.00","$1,068.48","$57,027.21"
MIA - LOS,55714463580,M-84A-5 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/55714463580,https://www.airlines-manager.com/aircraft/show/93704215,6:45,4:59,1124,"$4,277,261.00","$3,977,814.00","$3,538.98","$178,912.17"
MIA - LOS,55741695530,M-84A-1 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/55741695530,https://www.airlines-manager.com/aircraft/show/93686969,19:45,17:59,1115,"$4,217,924.00","$3,920,833.00","$3,516.44","$176,349.31"
MIA - MAF,55704057980,M-MAF-ROC-1,A321-200,https://www.airlines-manager.com/network/showline/50834915,https://www.airlines-manager.com/network/showflight/55704057980,https://www.airlines-manager.com/aircraft/show/120933307,1:00,8:29,310,"$470,887.00","$431,493.00","$1,391.91","$57,660.53"
MIA - MAF,55721560643,M-MAF-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50834915,https://www.airlines-manager.com/network/showflight/55721560643,https://www.airlines-manager.com/aircraft/show/92137503,10:00,17:29,112,"$222,557.00","$196,495.00","$1,754.42","$26,257.68"
MIA - MAF,55724951954,M-MAF-ROC-4,A321-200,https://www.airlines-manager.com/network/showline/50834915,https://www.airlines-manager.com/network/showflight/55724951954,https://www.airlines-manager.com/aircraft/show/120933310,12:00,19:29,310,"$470,887.00","$431,493.00","$1,391.91","$57,660.53"
MIA - MAF,55735532909,M-MAF-ROC-3,A321-200,https://www.airlines-manager.com/network/showline/50834915,https://www.airlines-manager.com/network/showflight/55735532909,https://www.airlines-manager.com/aircraft/show/120933309,16:15,23:44,310,"$470,887.00","$431,493.00","$1,391.91","$57,660.53"
MIA - MAF,55738770027,M-MAF-ROC-2,A321-200,https://www.airlines-manager.com/network/showline/50834915,https://www.airlines-manager.com/network/showflight/55738770027,https://www.airlines-manager.com/aircraft/show/120933308,18:15,1:44,308,"$469,078.00","$429,760.00","$1,395.32","$57,428.95"
MIA - MBJ,55704057937,M-PUJ-BDA-4 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/55704057937,https://www.airlines-manager.com/aircraft/show/104034460,0:45,4:59,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MBJ,55708448919,M-PUJ-BDA-5 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/55708448919,https://www.airlines-manager.com/aircraft/show/104034461,5:00,9:14,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MBJ,55721560628,M-PUJ-BDA-3 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/55721560628,https://www.airlines-manager.com/aircraft/show/104034459,10:00,14:14,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MBJ,55724951985,M-PUJ-BDA-1 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/55724951985,https://www.airlines-manager.com/aircraft/show/104034457,12:45,16:59,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MBJ,55735532986,M-PUJ-BDA-2 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/55735532986,https://www.airlines-manager.com/aircraft/show/104034458,17:00,21:14,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MBJ,55746468187,M-PUJ-BDA-6 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/55746468187,https://www.airlines-manager.com/aircraft/show/99326789,23:00,3:14,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MCI,55704057916,M-ELP-MCI-3,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/55704057916,https://www.airlines-manager.com/aircraft/show/91806232,0:45,7:44,320,"$448,685.00","$403,102.00","$1,259.69","$57,723.44"
MIA - MCI,55704057917,M-ELP-MCI-4,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/55704057917,https://www.airlines-manager.com/aircraft/show/91806231,1:30,8:29,320,"$448,685.00","$403,102.00","$1,259.69","$57,723.44"
MIA - MCI,55721560530,M-ELP-MCI-2,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/55721560530,https://www.airlines-manager.com/aircraft/show/91806235,10:00,16:59,320,"$448,685.00","$403,102.00","$1,259.69","$57,723.44"
MIA - MCI,55738770039,M-ELP-MCI-1,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/55738770039,https://www.airlines-manager.com/aircraft/show/91806234,18:30,1:29,320,"$448,685.00","$403,102.00","$1,259.69","$57,723.44"
MIA - MCI,55738770040,M-ELP-MCI-5 B,A319-100,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/55738770040,https://www.airlines-manager.com/aircraft/show/105093924,19:00,1:59,198,"$338,938.00","$306,546.00","$1,548.21","$43,896.80"
MIA - MCO,55704057855,M-BDL-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/55704057855,https://www.airlines-manager.com/aircraft/show/107763565,0:15,2:59,320,"$122,517.00","$85,295.00",$266.55,"$31,205.49"
MIA - MCO,55708448735,M-BDL-SAT-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/55708448735,https://www.airlines-manager.com/aircraft/show/107467213,4:00,6:44,112,"$55,044.00","$35,872.00",$320.29,"$13,123.90"
MIA - MCO,55711311646,M-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/55711311646,https://www.airlines-manager.com/aircraft/show/103534663,6:00,8:44,112,"$55,044.00","$35,872.00",$320.29,"$13,123.90"
MIA - MCO,55718008673,M-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/55718008673,https://www.airlines-manager.com/aircraft/show/103534663,9:15,11:59,112,"$55,044.00","$35,872.00",$320.29,"$13,123.90"
MIA - MCO,55721560546,M-BDL-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/55721560546,https://www.airlines-manager.com/aircraft/show/107763566,10:00,12:44,320,"$122,517.00","$85,295.00",$266.55,"$31,205.49"
MIA - MCO,55721560547,M-BDL-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/55721560547,https://www.airlines-manager.com/aircraft/show/107763561,11:00,13:44,320,"$122,517.00","$85,295.00",$266.55,"$31,205.49"
MIA - MCO,55735533040,M-BDL-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/55735533040,https://www.airlines-manager.com/aircraft/show/107763562,17:45,20:29,320,"$122,517.00","$85,295.00",$266.55,"$31,205.49"
MIA - MEM,55704057817,M-MKE-CMH-5 B,A319-100,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/55704057817,https://www.airlines-manager.com/aircraft/show/110582842,0:00,5:29,198,"$263,114.00","$235,345.00","$1,188.61","$42,920.06"
MIA - MEM,55704057818,M-MKE-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/55704057818,https://www.airlines-manager.com/aircraft/show/88239556,3:00,8:29,320,"$346,619.00","$307,030.00",$959.47,"$55,993.31"
MIA - MEM,55714463642,M-MKE-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/55714463642,https://www.airlines-manager.com/aircraft/show/88494374,7:45,13:14,320,"$346,619.00","$307,030.00",$959.47,"$55,993.31"
MIA - MEM,55728562308,M-MKE-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/55728562308,https://www.airlines-manager.com/aircraft/show/88494378,14:00,19:29,320,"$346,619.00","$307,030.00",$959.47,"$55,993.31"
MIA - MEM,55741695545,M-MKE-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/55741695545,https://www.airlines-manager.com/aircraft/show/91806233,20:00,1:29,320,"$346,619.00","$307,030.00",$959.47,"$55,993.31"
MIA - MFR,55704058039,M-FCA-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/55704058039,https://www.airlines-manager.com/aircraft/show/119652478,1:30,13:59,320,"$759,604.00","$696,142.00","$2,175.44","$55,765.71"
MIA - MFR,55724951933,M-FCA-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/55724951933,https://www.airlines-manager.com/aircraft/show/119652477,12:00,0:29,320,"$759,604.00","$696,142.00","$2,175.44","$55,765.71"
MIA - MFR,55728562333,M-FCA-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/55728562333,https://www.airlines-manager.com/aircraft/show/119652476,14:00,2:29,320,"$759,604.00","$696,142.00","$2,175.44","$55,765.71"
MIA - MFR,55746468221,M-FCA-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/55746468221,https://www.airlines-manager.com/aircraft/show/119652479,23:30,11:59,320,"$759,604.00","$696,142.00","$2,175.44","$55,765.71"
MIA - MHT,55704058009,M-MHT-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/55704058009,https://www.airlines-manager.com/aircraft/show/115493371,1:15,8:14,310,"$454,152.00","$415,897.00","$1,341.60","$59,555.66"
MIA - MHT,55704058010,M-MHT-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/55704058010,https://www.airlines-manager.com/aircraft/show/115493372,3:30,10:29,310,"$454,152.00","$415,897.00","$1,341.60","$59,555.66"
MIA - MHT,55721560766,M-MHT-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/55721560766,https://www.airlines-manager.com/aircraft/show/114912307,11:00,17:59,112,"$214,353.00","$189,156.00","$1,688.89","$27,086.78"
MIA - MHT,55728562364,M-MHT-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/55728562364,https://www.airlines-manager.com/aircraft/show/115493373,14:00,20:59,310,"$454,152.00","$415,897.00","$1,341.60","$59,555.66"
MIA - MHT,55738770111,M-MHT-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/55738770111,https://www.airlines-manager.com/aircraft/show/115493370,19:00,1:59,310,"$454,152.00","$415,897.00","$1,341.60","$59,555.66"
MIA - MKE,55704057849,M-MKE-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/55704057849,https://www.airlines-manager.com/aircraft/show/88494378,0:15,7:14,320,"$448,362.00","$404,235.00","$1,263.23","$57,885.68"
MIA - MKE,55711311649,M-MKE-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/55711311649,https://www.airlines-manager.com/aircraft/show/91806233,6:15,13:14,320,"$448,362.00","$404,235.00","$1,263.23","$57,885.68"
MIA - MKE,55721560762,M-MKE-CMH-5 B,A319-100,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/55721560762,https://www.airlines-manager.com/aircraft/show/110582842,11:00,17:59,198,"$338,895.00","$307,460.00","$1,552.83","$44,027.68"
MIA - MKE,55728562306,M-MKE-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/55728562306,https://www.airlines-manager.com/aircraft/show/88239556,14:00,20:59,320,"$448,362.00","$404,235.00","$1,263.23","$57,885.68"
MIA - MKE,55738770064,M-MKE-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/55738770064,https://www.airlines-manager.com/aircraft/show/88494374,18:45,1:44,320,"$448,362.00","$404,235.00","$1,263.23","$57,885.68"
MIA - MSN,55704058069,M-RAP-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/55704058069,https://www.airlines-manager.com/aircraft/show/116789625,1:45,8:59,320,"$451,863.00","$409,290.00","$1,279.03","$56,583.87"
MIA - MSN,55714463655,M-RAP-GRR-5,ERJ-175,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/55714463655,https://www.airlines-manager.com/aircraft/show/116042630,7:45,14:59,112,"$214,048.00","$188,966.00","$1,687.20","$26,124.33"
MIA - MSN,55721560550,M-RAP-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/55721560550,https://www.airlines-manager.com/aircraft/show/116789623,10:00,17:14,320,"$451,863.00","$409,290.00","$1,279.03","$56,583.87"
MIA - MSN,55735532939,M-RAP-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/55735532939,https://www.airlines-manager.com/aircraft/show/116789624,16:45,23:59,320,"$451,863.00","$409,290.00","$1,279.03","$56,583.87"
MIA - MSN,55738770066,M-RAP-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/55738770066,https://www.airlines-manager.com/aircraft/show/116789622,18:45,1:59,320,"$451,863.00","$409,290.00","$1,279.03","$56,583.87"
MIA - MSO,55714463644,M-FAT-MSO-2,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/55714463644,https://www.airlines-manager.com/aircraft/show/113101231,7:45,18:59,320,"$700,402.00","$641,423.00","$2,004.45","$57,099.97"
MIA - MSO,55721560723,M-FAT-MSO-3,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/55721560723,https://www.airlines-manager.com/aircraft/show/113101234,11:00,22:14,320,"$700,402.00","$641,423.00","$2,004.45","$57,099.97"
MIA - MSO,55741695548,M-FAT-MSO-4,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/55741695548,https://www.airlines-manager.com/aircraft/show/113101232,20:00,7:14,320,"$700,402.00","$641,423.00","$2,004.45","$57,099.97"
MIA - MSO,55746468126,M-FAT-MSO-1,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/55746468126,https://www.airlines-manager.com/aircraft/show/113101229,22:30,9:44,320,"$700,402.00","$641,423.00","$2,004.45","$57,099.97"
MIA - MSP,55704058178,M-JFK-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/55704058178,https://www.airlines-manager.com/aircraft/show/105308267,2:00,9:59,338,"$544,122.00","$495,440.00","$1,465.80","$62,059.29"
MIA - MSP,55704058179,M-JFK-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/55704058179,https://www.airlines-manager.com/aircraft/show/105308268,3:00,10:59,338,"$544,122.00","$495,440.00","$1,465.80","$62,059.29"
MIA - MSP,55721560510,M-JFK-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/55721560510,https://www.airlines-manager.com/aircraft/show/105308266,10:00,17:59,338,"$544,122.00","$495,440.00","$1,465.80","$62,059.29"
MIA - MSP,55728562270,M-JFK-PHX-6,ERJ-175,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/55728562270,https://www.airlines-manager.com/aircraft/show/82683137,13:00,20:59,112,"$236,852.00","$203,894.00","$1,820.48","$25,539.96"
MIA - MSP,55738770009,M-JFK-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/55738770009,https://www.airlines-manager.com/aircraft/show/105308265,18:15,2:14,338,"$544,122.00","$495,440.00","$1,465.80","$62,059.29"
MIA - MSP,55744388937,M-JFK-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/55744388937,https://www.airlines-manager.com/aircraft/show/105308264,21:45,5:44,338,"$544,122.00","$495,440.00","$1,465.80","$62,059.29"
MIA - MSY,55704058030,M-MKE-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/55704058030,https://www.airlines-manager.com/aircraft/show/91806233,1:30,6:14,320,"$301,171.00","$266,048.00",$831.40,"$56,207.32"
MIA - MSY,55711311600,M-MKE-CMH-5 B,A319-100,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/55711311600,https://www.airlines-manager.com/aircraft/show/110582842,5:30,10:14,198,"229,505$","205,012$","$1,035.41","$43,312.39"
MIA - MSY,55718008602,M-MKE-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/55718008602,https://www.airlines-manager.com/aircraft/show/88239556,8:30,13:14,320,"301,171$","266,048$",$831.40,"$56,207.32"
MIA - MSY,55728562307,M-MKE-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/55728562307,https://www.airlines-manager.com/aircraft/show/88494374,14:00,18:44,320,"301,171$","266,048$",$831.40,"$56,207.32"
MIA - MSY,55741695486,M-MKE-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/55741695486,https://www.airlines-manager.com/aircraft/show/88494378,19:30,0:14,320,"301,171$","266,048$",$831.40,"$56,207.32"
MIA - MTJ,55704057999,M-RDM-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50834908,https://www.airlines-manager.com/network/showflight/55704057999,https://www.airlines-manager.com/aircraft/show/88725597,1:15,10:29,310,"579,705$","533,668$","$1,721.51","$57,797.98"
MIA - MTJ,55721560564,M-RDM-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50834908,https://www.airlines-manager.com/network/showflight/55721560564,https://www.airlines-manager.com/aircraft/show/88725598,10:00,19:14,310,"579,705$","533,668$","$1,721.51","$57,797.98"
MIA - MTJ,55728562227,M-RDM-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50834908,https://www.airlines-manager.com/network/showflight/55728562227,https://www.airlines-manager.com/aircraft/show/88725599,13:00,22:14,310,"579,705$","533,668$","$1,721.51","$57,797.98"
MIA - MTJ,55744388995,M-RDM-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50834908,https://www.airlines-manager.com/network/showflight/55744388995,https://www.airlines-manager.com/aircraft/show/106766698,22:15,7:29,310,"579,705$","533,668$","$1,721.51","$57,797.98"
MIA - MYR,55714463652,M-MAF-ROC-4,A321-200,https://www.airlines-manager.com/network/showline/50834920,https://www.airlines-manager.com/network/showflight/55714463652,https://www.airlines-manager.com/aircraft/show/120933310,7:45,11:59,310,"253,255$","226,311$",$730.04,"$53,459.29"
MIA - MYR,55724951953,M-MAF-ROC-3,A321-200,https://www.airlines-manager.com/network/showline/50834920,https://www.airlines-manager.com/network/showflight/55724951953,https://www.airlines-manager.com/aircraft/show/120933309,12:00,16:14,310,"253,255$","226,311$",$730.04,"$53,459.29"
MIA - MYR,55728562371,M-MAF-ROC-2,A321-200,https://www.airlines-manager.com/network/showline/50834920,https://www.airlines-manager.com/network/showflight/55728562371,https://www.airlines-manager.com/aircraft/show/120933308,14:00,18:14,310,"253,255$","226,311$",$730.04,"$53,459.29"
MIA - MYR,55741695637,M-MAF-ROC-1,A321-200,https://www.airlines-manager.com/network/showline/50834920,https://www.airlines-manager.com/network/showflight/55741695637,https://www.airlines-manager.com/aircraft/show/120933307,20:45,0:59,310,"253,255$","226,311$",$730.04,"$53,459.29"
MIA - NAS,55704058211,M-PUJ-BDA-5 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/55704058211,https://www.airlines-manager.com/aircraft/show/104034461,2:15,4:59,228,"79,351$","61,380$",$269.21,"$22,456.10"
MIA - NAS,55714463637,M-PUJ-BDA-6 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/55714463637,https://www.airlines-manager.com/aircraft/show/99326789,7:30,10:14,228,"79,351$","61,380$",$269.21,"$22,456.10"
MIA - NAS,55721560626,M-PUJ-BDA-1 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/55721560626,https://www.airlines-manager.com/aircraft/show/104034457,10:00,12:44,228,"79,351$","61,380$",$269.21,"$22,456.10"
MIA - NAS,55728562394,M-PUJ-BDA-2 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/55728562394,https://www.airlines-manager.com/aircraft/show/104034458,14:15,16:59,228,"79,351$","61,380$",$269.21,"$22,456.10"
MIA - NAS,55738770052,M-PUJ-BDA-3 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/55738770052,https://www.airlines-manager.com/aircraft/show/104034459,18:30,21:14,228,"79,351$","61,380$",$269.21,"$22,456.10"
MIA - NAS,55744388973,M-PUJ-BDA-4 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/55744388973,https://www.airlines-manager.com/aircraft/show/104034460,22:00,0:44,228,"79,351$","61,380$",$269.21,"$22,456.10"
MIA - OAK,55704057957,M-OAK-SMF-5,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/55704057957,https://www.airlines-manager.com/aircraft/show/91198617,1:00,12:59,320,"741,020$","675,128$","$2,109.78","$56,338.92"
MIA - OAK,55721560704,M-OAK-SMF-1,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/55721560704,https://www.airlines-manager.com/aircraft/show/91198615,11:00,22:59,320,"741,020$","675,128$","$2,109.78","$56,338.92"
MIA - OAK,55728562191,M-OAK-SMF-2,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/55728562191,https://www.airlines-manager.com/aircraft/show/91198619,13:00,0:59,320,"741,020$","675,128$","$2,109.78","$56,338.92"
MIA - OAK,55732031708,M-OAK-SMF-3,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/55732031708,https://www.airlines-manager.com/aircraft/show/91198616,15:00,2:59,320,"741,020$","675,128$","$2,109.78","$56,338.92"
MIA - OAK,55746468175,M-OAK-SMF-4,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/55746468175,https://www.airlines-manager.com/aircraft/show/91198618,23:00,10:59,320,"741,020$","675,128$","$2,109.78","$56,338.92"
MIA - OKC,55704058163,M-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/55704058163,https://www.airlines-manager.com/aircraft/show/110883112,1:45,8:29,310,"432,205$","394,574$","$1,272.82","$58,600.10"
MIA - OKC,55708448728,M-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/55708448728,https://www.airlines-manager.com/aircraft/show/110883111,4:00,10:44,310,"432,205$","394,574$","$1,272.82","$58,600.10"
MIA - OKC,55721560645,M-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/55721560645,https://www.airlines-manager.com/aircraft/show/104353572,10:00,16:44,112,"203,116$","178,405$","$1,592.90","$26,495.79"
MIA - OKC,55728562255,M-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/55728562255,https://www.airlines-manager.com/aircraft/show/110883110,13:00,19:44,310,"432,205$","394,574$","$1,272.82","$58,600.10"
MIA - OKC,55732031681,M-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/55732031681,https://www.airlines-manager.com/aircraft/show/110883113,14:45,21:29,310,"432,205$","394,574$","$1,272.82","$58,600.10"
MIA - OMA,55704058223,M-BOI-BNA-1,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/55704058223,https://www.airlines-manager.com/aircraft/show/104133006,2:30,9:59,320,"479,555$","434,477$","$1,357.74","$58,059.29"
MIA - OMA,55711311660,M-BOI-BNA-4,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/55711311660,https://www.airlines-manager.com/aircraft/show/103775657,6:30,13:59,320,"479,555$","434,477$","$1,357.74","$58,059.29"
MIA - OMA,55721560543,M-BOI-BNA-3,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/55721560543,https://www.airlines-manager.com/aircraft/show/104020880,10:00,17:29,320,"479,555$","434,477$","$1,357.74","$58,059.29"
MIA - OMA,55732031767,M-BOI-BNA-2,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/55732031767,https://www.airlines-manager.com/aircraft/show/104022609,15:15,22:44,320,"479,555$","434,477$","$1,357.74","$58,059.29"
MIA - OMA,55735533012,M-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/55735533012,https://www.airlines-manager.com/aircraft/show/103534663,17:15,0:44,112,"226,251$","199,652$","$1,782.61","$26,679.55"
MIA - ONT,55704057880,M-RNO-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/55704057880,https://www.airlines-manager.com/aircraft/show/90489722,0:30,11:29,320,"694,458$","632,850$","$1,977.66","$57,619.12"
MIA - ONT,55704057881,M-RNO-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/55704057881,https://www.airlines-manager.com/aircraft/show/86238756,2:30,13:29,320,"694,458$","632,850$","$1,977.66","$57,619.12"
MIA - ONT,55721560703,M-RNO-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/55721560703,https://www.airlines-manager.com/aircraft/show/90489723,11:00,21:59,320,"694,458$","632,850$","$1,977.66","$57,619.12"
MIA - ONT,55728562374,M-RNO-ONT-5 B,A319-100,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/55728562374,https://www.airlines-manager.com/aircraft/show/105223010,14:00,0:59,198,"521,256$","476,516$","$2,406.65","$43,385.37"
MIA - ONT,55746468118,M-RNO-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/55746468118,https://www.airlines-manager.com/aircraft/show/86238755,22:30,9:29,320,"694,458$","632,850$","$1,977.66","$57,619.12"
MIA - ORD,55704058315,M-ORD-DFW-1,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/55704058315,https://www.airlines-manager.com/aircraft/show/91600935,3:15,9:59,310,"425,664$","365,859$","$1,180.19","$54,335.50"
MIA - ORD,55708448753,M-ORD-DFW-4,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/55708448753,https://www.airlines-manager.com/aircraft/show/91600938,4:15,10:59,310,"425,664$","365,859$","$1,180.19","$54,335.50"
MIA - ORD,55718008661,M-ORD-DFW-6,ERJ-175,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/55718008661,https://www.airlines-manager.com/aircraft/show/82543123,9:00,15:44,112,"199,854$","161,877$","$1,445.33","$24,041.14"
MIA - ORD,55721560735,M-ORD-DFW-5,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/55721560735,https://www.airlines-manager.com/aircraft/show/91600937,11:00,17:44,310,"425,664$","365,859$","$1,180.19","$54,335.50"
MIA - ORD,55732031679,M-ORD-DFW-3,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/55732031679,https://www.airlines-manager.com/aircraft/show/91600939,14:45,21:29,310,"425,664$","365,859$","$1,180.19","$54,335.50"
MIA - ORD,55732031680,M-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/55732031680,https://www.airlines-manager.com/aircraft/show/106339154,15:30,22:14,198,"320,961$","273,065$","$1,379.12","$40,554.21"
MIA - ORD,55741695634,M-ORD-DFW-2,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/55741695634,https://www.airlines-manager.com/aircraft/show/91600936,20:45,3:29,310,"425,664$","365,859$","$1,180.19","$54,335.50"
MIA - ORF,55704057876,M-MHT-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/55704057876,https://www.airlines-manager.com/aircraft/show/114912307,0:15,5:29,112,"157,906$","137,933$","$1,231.54","$26,356.62"
MIA - ORF,55704057877,M-MHT-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/55704057877,https://www.airlines-manager.com/aircraft/show/115493373,3:15,8:29,310,"332,506$","301,556$",$972.76,"$57,622.17"
MIA - ORF,55718008592,M-MHT-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/55718008592,https://www.airlines-manager.com/aircraft/show/115493370,8:15,13:29,310,"332,506$","301,556$",$972.76,"$57,622.17"
MIA - ORF,55732031742,M-MHT-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/55732031742,https://www.airlines-manager.com/aircraft/show/115493371,15:00,20:14,310,"332,506$","301,556$",$972.76,"$57,622.17"
MIA - ORF,55735533007,M-MHT-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/55735533007,https://www.airlines-manager.com/aircraft/show/115493372,17:15,22:29,310,"332,506$","301,556$",$972.76,"$57,622.17"
MIA - PDX,55721560524,M-PDX-DTW-1,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/55721560524,https://www.airlines-manager.com/aircraft/show/89943715,10:00,22:29,320,"774,889$","704,572$","$2,201.79","$56,441.01"
MIA - PDX,55728562187,M-PDX-DTW-3,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/55728562187,https://www.airlines-manager.com/aircraft/show/89943713,13:00,1:29,320,"774,889$","704,572$","$2,201.79","$56,441.01"
MIA - PDX,55728562188,M-PDX-DTW-4,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/55728562188,https://www.airlines-manager.com/aircraft/show/89943712,14:00,2:29,320,"774,889$","704,572$","$2,201.79","$56,441.01"
MIA - PDX,55741695487,M-PDX-DTW-2,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/55741695487,https://www.airlines-manager.com/aircraft/show/89943714,19:30,7:59,320,"774,889$","704,572$","$2,201.79","$56,441.01"
MIA - PDX,55746468216,M-PDX-DTW-5,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/55746468216,https://www.airlines-manager.com/aircraft/show/89943711,23:30,11:59,320,"774,889$","704,572$","$2,201.79","$56,441.01"
MIA - PHL,55708448722,M-ORD-DFW-3,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/55708448722,https://www.airlines-manager.com/aircraft/show/91600939,4:00,9:59,310,"381,305$","339,530$","$1,095.26","$56,745.96"
MIA - PHL,55708448723,M-ORD-DFW-5,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/55708448723,https://www.airlines-manager.com/aircraft/show/91600937,5:00,10:59,310,"381,305$","339,530$","$1,095.26","$56,745.96"
MIA - PHL,55721560573,M-ORD-DFW-2,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/55721560573,https://www.airlines-manager.com/aircraft/show/91600936,10:00,15:59,310,"$381,305.00","$339,530.00","$1,095.26","$56,745.96"
MIA - PHL,55735532921,M-ORD-DFW-1,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/55735532921,https://www.airlines-manager.com/aircraft/show/91600935,16:30,22:29,310,"$381,305.00","$339,530.00","$1,095.26","$56,745.96"
MIA - PHL,55735532922,M-ORD-DFW-4,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/55735532922,https://www.airlines-manager.com/aircraft/show/91600938,17:30,23:29,310,"$381,305.00","$339,530.00","$1,095.26","$56,745.96"
MIA - PHL,55744389008,M-ORD-DFW-6,ERJ-175,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/55744389008,https://www.airlines-manager.com/aircraft/show/82543123,22:15,4:14,112,"$180,118.00","$153,280.00","$1,368.57","$25,617.83"
MIA - PHX,55704057834,M-JFK-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/55704057834,https://www.airlines-manager.com/aircraft/show/105308266,0:15,9:59,338,"$673,510.00","$614,805.00","$1,818.95","$63,164.90"
MIA - PHX,55704057835,M-JFK-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/55704057835,https://www.airlines-manager.com/aircraft/show/105308265,2:15,11:59,338,"$673,510.00","$614,805.00","$1,818.95","$63,164.90"
MIA - PHX,55721560681,M-JFK-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/55721560681,https://www.airlines-manager.com/aircraft/show/105308268,11:00,20:44,338,"$673,510.00","$614,805.00","$1,818.95","$63,164.90"
MIA - PHX,55724951900,M-JFK-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/55724951900,https://www.airlines-manager.com/aircraft/show/105308264,12:00,21:44,338,"$673,510.00","$614,805.00","$1,818.95","$63,164.90"
MIA - PHX,55735532897,M-JFK-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/55735532897,https://www.airlines-manager.com/aircraft/show/105308267,16:15,1:59,338,"$673,510.00","$614,805.00","$1,818.95","$63,164.90"
MIA - PHX,55744388892,M-JFK-PHX-6,ERJ-175,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/55744388892,https://www.airlines-manager.com/aircraft/show/82683137,21:00,6:44,112,"$291,110.00","$250,973.00","$2,240.83","$25,784.90"
MIA - PIT,55704058310,M-AUS-PIT-3,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/55704058310,https://www.airlines-manager.com/aircraft/show/99920624,3:15,9:14,320,"$382,895.00","$341,219.00","$1,066.31","$57,028.25"
MIA - PIT,55721560538,M-AUS-PIT-2,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/55721560538,https://www.airlines-manager.com/aircraft/show/99920625,10:00,15:59,320,"$382,895.00","$341,219.00","$1,066.31","$57,028.25"
MIA - PIT,55735532918,M-AUS-PIT-1,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/55735532918,https://www.airlines-manager.com/aircraft/show/99920626,16:30,22:29,320,"$382,895.00","$341,219.00","$1,066.31","$57,028.25"
MIA - PIT,55741695620,M-AUS-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/55741695620,https://www.airlines-manager.com/aircraft/show/82323689,20:30,2:29,112,"$180,854.00","$157,058.00","$1,402.30","$26,249.25"
MIA - PIT,55744388899,M-AUS-PIT-4,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/55744388899,https://www.airlines-manager.com/aircraft/show/99920623,21:15,3:14,320,"$382,895.00","$341,219.00","$1,066.31","$57,028.25"
MIA - PLS,55704058319,M-PUJ-BDA-6 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/55704058319,https://www.airlines-manager.com/aircraft/show/99326789,3:15,7:29,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - PLS,55708448918,M-PUJ-BDA-4 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/55708448918,https://www.airlines-manager.com/aircraft/show/104034460,5:00,9:14,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - PLS,55721560627,M-PUJ-BDA-2 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/55721560627,https://www.airlines-manager.com/aircraft/show/104034458,10:00,14:14,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - PLS,55728562395,M-PUJ-BDA-3 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/55728562395,https://www.airlines-manager.com/aircraft/show/104034459,14:15,18:29,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - PLS,55735532985,M-PUJ-BDA-1 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/55735532985,https://www.airlines-manager.com/aircraft/show/104034457,17:00,21:14,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - PLS,55744388974,M-PUJ-BDA-5 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/55744388974,https://www.airlines-manager.com/aircraft/show/104034461,22:00,2:14,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - POS,55724951978,M-84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/55724951978,https://www.airlines-manager.com/aircraft/show/106676225,12:30,20:29,962,"$1,341,807.00","$1,224,700.00","$1,273.08","$153,407.10"
MIA - POS,55732031852,M-84B-6 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/55732031852,https://www.airlines-manager.com/aircraft/show/106676230,16:00,23:59,731,"$1,108,103.00","$1,003,672.00","$1,373.01","$125,720.92"
MIA - PSP,55704058184,M-PSP-BFF-5,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/55704058184,https://www.airlines-manager.com/aircraft/show/116789630,2:00,12:44,320,"$662,540.00","$604,842.00","$1,890.13","$56,351.74"
MIA - PSP,55721560554,M-PSP-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/55721560554,https://www.airlines-manager.com/aircraft/show/116789631,10:00,20:44,320,"$662,540.00","$604,842.00","$1,890.13","$56,351.74"
MIA - PSP,55728562329,M-PSP-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/55728562329,https://www.airlines-manager.com/aircraft/show/116789634,14:00,0:44,320,"$662,540.00","$604,842.00","$1,890.13","$56,351.74"
MIA - PSP,55728562330,M-PSP-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/55728562330,https://www.airlines-manager.com/aircraft/show/116789632,14:15,0:59,320,"$662,540.00","$604,842.00","$1,890.13","$56,351.74"
MIA - PSP,55746468176,M-PSP-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/55746468176,https://www.airlines-manager.com/aircraft/show/116789633,23:00,9:44,241,"$560,867.00","$507,908.00","$2,107.50","$47,320.62"
MIA - PUJ,55704058337,M-PUJ-BDA-2 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/55704058337,https://www.airlines-manager.com/aircraft/show/104034458,3:30,9:14,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PUJ,55721560631,M-PUJ-BDA-5 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/55721560631,https://www.airlines-manager.com/aircraft/show/104034461,10:00,15:44,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PUJ,55735532910,M-PUJ-BDA-4 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/55735532910,https://www.airlines-manager.com/aircraft/show/104034460,16:15,21:59,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PUJ,55735532911,M-PUJ-BDA-6 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/55735532911,https://www.airlines-manager.com/aircraft/show/99326789,17:15,22:59,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PUJ,55744388911,M-PUJ-BDA-1 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/55744388911,https://www.airlines-manager.com/aircraft/show/104034457,21:15,2:59,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PUJ,55744388912,M-PUJ-BDA-3 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/55744388912,https://www.airlines-manager.com/aircraft/show/104034459,22:00,3:44,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PVD,55704058008,M-BUR-PVD-3,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/55704058008,https://www.airlines-manager.com/aircraft/show/108834805,1:15,7:59,310,"$427,684.00","$391,455.00","$1,262.76","$58,136.88"
MIA - PVD,55714463619,M-BUR-PVD-5 B,A319-100,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/55714463619,https://www.airlines-manager.com/aircraft/show/108834807,7:15,13:59,198,"$322,661.00","$293,626.00","$1,482.96","$43,607.82"
MIA - PVD,55721560749,M-BUR-PVD-2,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/55721560749,https://www.airlines-manager.com/aircraft/show/108834804,11:00,17:44,310,"$427,684.00","$391,455.00","$1,262.76","$58,136.88"
MIA - PVD,55735532979,M-BUR-PVD-4,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/55735532979,https://www.airlines-manager.com/aircraft/show/108834806,17:00,23:44,310,"$427,684.00","$391,455.00","$1,262.76","$58,136.88"
MIA - PVD,55744388997,M-BUR-PVD-1,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/55744388997,https://www.airlines-manager.com/aircraft/show/108834803,22:15,4:59,310,"$427,684.00","$391,455.00","$1,262.76","$58,136.88"
MIA - PWM,55714463629,M-SDF-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/55714463629,https://www.airlines-manager.com/aircraft/show/94886629,7:30,14:59,310,"$468,156.00","$430,232.00","$1,387.85","$57,492.03"
MIA - PWM,55728562339,M-SDF-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/55728562339,https://www.airlines-manager.com/aircraft/show/94886626,14:00,21:29,310,"$468,156.00","$430,232.00","$1,387.85","$57,492.03"
MIA - PWM,55738770074,M-SDF-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/55738770074,https://www.airlines-manager.com/aircraft/show/96692674,18:45,2:14,310,"$468,156.00","$430,232.00","$1,387.85","$57,492.03"
MIA - PWM,55741695639,M-SDF-PWM-5,ERJ-175,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/55741695639,https://www.airlines-manager.com/aircraft/show/105601657,20:45,4:14,112,"$220,894.00","$195,774.00","$1,747.98","$26,161.34"
MIA - PWM,55747839769,M-SDF-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/55747839769,https://www.airlines-manager.com/aircraft/show/94886625,23:45,7:14,310,"$468,156.00","$430,232.00","$1,387.85","$57,492.03"
MIA - RAP,55704057795,M-RAP-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/55704057795,https://www.airlines-manager.com/aircraft/show/116789624,0:00,8:59,320,"$563,858.00","$513,914.00","$1,605.98","$57,207.50"
MIA - RAP,55704057796,M-RAP-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/55704057796,https://www.airlines-manager.com/aircraft/show/116789622,2:00,10:59,320,"$563,858.00","$513,914.00","$1,605.98","$57,207.50"
MIA - RAP,55721560552,M-RAP-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/55721560552,https://www.airlines-manager.com/aircraft/show/116789625,10:00,18:59,320,"$563,858.00","$513,914.00","$1,605.98","$57,207.50"
MIA - RAP,55732031763,M-RAP-GRR-5,ERJ-175,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/55732031763,https://www.airlines-manager.com/aircraft/show/116042630,15:00,23:59,112,"$265,771.00","$235,577.00","$2,103.37","$26,223.78"
MIA - RAP,55735533001,M-RAP-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/55735533001,https://www.airlines-manager.com/aircraft/show/116789623,17:15,2:14,320,"$563,858.00","$513,914.00","$1,605.98","$57,207.50"
MIA - RDM,55721560610,M-RDM-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50834907,https://www.airlines-manager.com/network/showflight/55721560610,https://www.airlines-manager.com/aircraft/show/106766698,10:00,22:14,310,"$750,430.00","$694,304.00","$2,239.69","$56,755.10"
MIA - RDM,55728562226,M-RDM-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50834907,https://www.airlines-manager.com/network/showflight/55728562226,https://www.airlines-manager.com/aircraft/show/88725597,13:00,1:14,310,"$750,430.00","$694,304.00","$2,239.69","$56,755.10"
MIA - RDM,55738770125,M-RDM-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50834907,https://www.airlines-manager.com/network/showflight/55738770125,https://www.airlines-manager.com/aircraft/show/88725598,19:15,7:29,310,"$750,430.00","$694,304.00","$2,239.69","$56,755.10"
MIA - RDM,55744388992,M-RDM-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50834907,https://www.airlines-manager.com/network/showflight/55744388992,https://www.airlines-manager.com/aircraft/show/88725599,22:15,10:29,310,"$750,430.00","$694,304.00","$2,239.69","$56,755.10"
MIA - RDU,55708448870,M-AUS-PIT-1,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/55708448870,https://www.airlines-manager.com/aircraft/show/99920626,4:30,9:14,320,"$310,630.00","$274,454.00",$857.67,"$57,983.24"
MIA - RDU,55718008626,M-AUS-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/55718008626,https://www.airlines-manager.com/aircraft/show/82323689,8:30,13:14,112,"$147,838.00","$127,705.00","$1,140.22","$26,979.93"
MIA - RDU,55721560536,M-AUS-PIT-4,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/55721560536,https://www.airlines-manager.com/aircraft/show/99920623,10:00,14:44,320,"$310,630.00","$274,454.00",$857.67,"$57,983.24"
MIA - RDU,55732031820,M-AUS-PIT-3,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/55732031820,https://www.airlines-manager.com/aircraft/show/99920624,16:00,20:44,320,"$310,630.00","$274,454.00",$857.67,"$57,983.24"
MIA - RDU,55744388958,M-AUS-PIT-2,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/55744388958,https://www.airlines-manager.com/aircraft/show/99920625,22:00,2:44,320,"$310,630.00","$274,454.00",$857.67,"$57,983.24"
MIA - RIC,55718008614,M-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/55718008614,https://www.airlines-manager.com/aircraft/show/110883112,8:30,13:44,310,"$336,966.00","$305,684.00",$986.08,"$58,410.96"
MIA - RIC,55721560755,M-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/55721560755,https://www.airlines-manager.com/aircraft/show/110883111,11:00,16:14,310,"$336,966.00","$305,684.00",$986.08,"$58,410.96"
MIA - RIC,55735532948,M-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/55735532948,https://www.airlines-manager.com/aircraft/show/104353572,16:45,21:59,112,"$160,060.00","$139,846.00","$1,248.63","$26,722.17"
MIA - RIC,55741695526,M-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/55741695526,https://www.airlines-manager.com/aircraft/show/110883110,19:45,0:59,310,"$336,966.00","$305,684.00",$986.08,"$58,410.96"
MIA - RIC,55744388932,M-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/55744388932,https://www.airlines-manager.com/aircraft/show/110883113,21:30,2:44,310,"$336,966.00","$305,684.00",$986.08,"$58,410.96"
MIA - RNO,55704057981,M-RNO-ONT-5 B,A319-100,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/55704057981,https://www.airlines-manager.com/aircraft/show/105223010,1:00,12:44,198,"$546,103.00","$500,266.00","$2,526.60","$42,636.31"
MIA - RNO,55721560699,M-RNO-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/55721560699,https://www.airlines-manager.com/aircraft/show/86238755,11:00,22:29,320,"$725,284.00","$662,433.00","$2,070.10","$57,686.47"
MIA - RNO,55728562189,M-RNO-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/55728562189,https://www.airlines-manager.com/aircraft/show/90489722,13:00,0:29,320,"$725,284.00","$662,433.00","$2,070.10","$57,686.47"
MIA - RNO,55732031704,M-RNO-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/55732031704,https://www.airlines-manager.com/aircraft/show/86238756,15:00,2:29,320,"$725,284.00","$662,433.00","$2,070.10","$57,686.47"
MIA - RNO,55744388957,M-RNO-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/55744388957,https://www.airlines-manager.com/aircraft/show/90489723,22:00,9:29,320,"$725,284.00","$662,433.00","$2,070.10","$57,686.47"
MIA - ROC,55704058166,M-MAF-ROC-2,A321-200,https://www.airlines-manager.com/network/showline/50424914,https://www.airlines-manager.com/network/showflight/55704058166,https://www.airlines-manager.com/aircraft/show/120933308,1:45,8:29,310,"$427,406.00","$391,117.00","$1,261.67","$58,086.68"
MIA - ROC,55721560624,M-MAF-ROC-1,A321-200,https://www.airlines-manager.com/network/showline/50424914,https://www.airlines-manager.com/network/showflight/55721560624,https://www.airlines-manager.com/aircraft/show/120933307,10:00,16:44,310,"$427,406.00","$391,117.00","$1,261.67","$58,086.68"
MIA - ROC,55735533031,M-MAF-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50424914,https://www.airlines-manager.com/network/showflight/55735533031,https://www.airlines-manager.com/aircraft/show/92137503,17:30,0:14,112,"$201,000.00","$177,122.00","$1,581.45","$26,305.25"
MIA - ROC,55741695504,M-MAF-ROC-4,A321-200,https://www.airlines-manager.com/network/showline/50424914,https://www.airlines-manager.com/network/showflight/55741695504,https://www.airlines-manager.com/aircraft/show/120933310,19:30,2:14,310,"$427,406.00","$391,117.00","$1,261.67","$58,086.68"
MIA - ROC,55747839777,M-MAF-ROC-3,A321-200,https://www.airlines-manager.com/network/showline/50424914,https://www.airlines-manager.com/network/showflight/55747839777,https://www.airlines-manager.com/aircraft/show/120933309,23:45,6:29,310,"$427,406.00","$391,117.00","$1,261.67","$58,086.68"
MIA - RSW,55708448730,M-ANU-SXM-3 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/55708448730,https://www.airlines-manager.com/aircraft/show/110114297,4:00,6:29,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - RSW,55718008672,M-ANU-SXM-1 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/55718008672,https://www.airlines-manager.com/aircraft/show/110114295,9:15,11:44,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - RSW,55721560654,M-ANU-SXM-2 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/55721560654,https://www.airlines-manager.com/aircraft/show/110114296,10:15,12:44,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - RSW,55728562377,M-ANU-SXM-6 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/55728562377,https://www.airlines-manager.com/aircraft/show/110114300,14:00,16:29,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - RSW,55744388888,M-ANU-SXM-5 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/55744388888,https://www.airlines-manager.com/aircraft/show/110114299,21:00,23:29,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - RSW,55746468189,M-ANU-SXM-4 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/55746468189,https://www.airlines-manager.com/aircraft/show/110114298,23:00,1:29,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - SAN,55704057829,M-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/55704057829,https://www.airlines-manager.com/aircraft/show/120519142,0:00,10:44,0,"$190,591.00","$116,070.00",#DIV/0!,"$10,813.98"
MIA - SAN,55704057830,M-BWI-YYZ-2,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/55704057830,https://www.airlines-manager.com/aircraft/show/92153440,1:45,12:44,310,"$680,679.00","$623,880.00","$2,012.52","$56,802.43"
MIA - SAN,55721560575,M-BWI-YYZ-3,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/55721560575,https://www.airlines-manager.com/aircraft/show/92153441,10:00,20:59,310,"$680,679.00","$623,880.00","$2,012.52","$56,802.43"
MIA - SAN,55724951958,M-BWI-YYZ-6 B,A319-100,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/55724951958,https://www.airlines-manager.com/aircraft/show/120519717,12:00,22:59,198,"$511,028.00","$465,491.00","$2,350.96","$42,381.58"
MIA - SAN,55735532973,M-BWI-YYZ-4,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/55735532973,https://www.airlines-manager.com/aircraft/show/92153442,17:00,3:59,310,"$680,679.00","$623,880.00","$2,012.52","$56,802.43"
MIA - SAN,55738770104,M-BWI-YYZ-5,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/55738770104,https://www.airlines-manager.com/aircraft/show/92153439,19:00,5:59,310,"$680,679.00","$623,880.00","$2,012.52","$56,802.43"
MIA - SAN,55746468159,M-BWI-YYZ-1,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/55746468159,https://www.airlines-manager.com/aircraft/show/92153443,22:45,9:44,310,"$664,966.00","$611,888.00","$1,973.83","$55,710.59"
MIA - SAT,55704058311,M-BDL-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/55704058311,https://www.airlines-manager.com/aircraft/show/107763562,3:15,9:44,320,"$412,163.00","$370,879.00","$1,159.00","$57,204.99"
MIA - SAT,55721560719,M-BDL-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/55721560719,https://www.airlines-manager.com/aircraft/show/107763565,11:00,17:29,320,"$412,163.00","$370,879.00","$1,159.00","$57,204.99"
MIA - SAT,55732031684,M-BDL-SAT-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/55732031684,https://www.airlines-manager.com/aircraft/show/107467213,14:45,21:14,112,"$194,327.00","$170,361.00","$1,521.08","$26,276.76"
MIA - SAT,55741695608,M-BDL-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/55741695608,https://www.airlines-manager.com/aircraft/show/107763561,20:30,2:59,320,"$412,163.00","$370,879.00","$1,159.00","$57,204.99"
MIA - SAT,55741695609,M-BDL-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/55741695609,https://www.airlines-manager.com/aircraft/show/107763566,20:45,3:14,320,"$412,163.00","$370,879.00","$1,159.00","$57,204.99"
MIA - SAV,55704057868,M-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/55704057868,https://www.airlines-manager.com/aircraft/show/110883111,0:15,3:59,310,"$215,345.00","$190,074.00",$613.14,"$50,912.68"
MIA - SAV,55711311647,M-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/55711311647,https://www.airlines-manager.com/aircraft/show/104353572,6:00,9:44,112,"$100,516.00","$84,583.00",$755.21,"$22,656.16"
MIA - SAV,55718008654,M-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/55718008654,https://www.airlines-manager.com/aircraft/show/110883110,9:00,12:44,310,"$215,345.00","$190,074.00",$613.14,"$50,912.68"
MIA - SAV,55721560756,M-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/55721560756,https://www.airlines-manager.com/aircraft/show/110883113,11:00,14:44,310,"$215,345.00","$190,074.00",$613.14,"$50,912.68"
MIA - SAV,55744388967,M-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/55744388967,https://www.airlines-manager.com/aircraft/show/110883112,22:00,1:44,270,"$198,981.00","$174,193.00",$645.16,"$46,658.84"
MIA - SDF,55704057935,M-SDF-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/55704057935,https://www.airlines-manager.com/aircraft/show/94886629,0:45,6:29,310,"$357,909.00","$323,543.00","$1,043.69","$56,431.92"
MIA - SDF,55718008587,M-SDF-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/55718008587,https://www.airlines-manager.com/aircraft/show/94886626,8:15,13:59,310,"$357,909.00","$323,543.00","$1,043.69","$56,431.92"
MIA - SDF,55728562234,M-SDF-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/55728562234,https://www.airlines-manager.com/aircraft/show/96692674,13:00,18:44,310,"$357,909.00","$323,543.00","$1,043.69","$56,431.92"
MIA - SDF,55732031759,M-SDF-PWM-5,ERJ-175,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/55732031759,https://www.airlines-manager.com/aircraft/show/105601657,15:00,20:44,112,"$169,578.00","$147,365.00","$1,315.76","$25,703.20"
MIA - SDF,55738769984,M-SDF-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/55738769984,https://www.airlines-manager.com/aircraft/show/94886625,18:00,23:44,310,"$357,909.00","$323,543.00","$1,043.69","$56,431.92"
MIA - SEA,55704058020,M-LAS-SEA-3,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/55704058020,https://www.airlines-manager.com/aircraft/show/105093927,1:30,13:59,338,"$834,881.00","$766,832.00","$2,268.73","$61,428.46"
MIA - SEA,55721560509,M-LAS-SEA-4,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/55721560509,https://www.airlines-manager.com/aircraft/show/105093928,10:00,22:29,338,"$834,881.00","$766,832.00","$2,268.73","$61,428.46"
MIA - SEA,55728562164,M-LAS-SEA-5,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/55728562164,https://www.airlines-manager.com/aircraft/show/105093929,13:00,1:29,338,"$834,881.00","$766,832.00","$2,268.73","$61,428.46"
MIA - SEA,55741695603,M-LAS-SEA-1,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/55741695603,https://www.airlines-manager.com/aircraft/show/105093925,20:30,8:59,338,"$834,881.00","$766,832.00","$2,268.73","$61,428.46"
MIA - SEA,55746468138,M-LAS-SEA-6 B,A319-100,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/55746468138,https://www.airlines-manager.com/aircraft/show/113251304,22:30,11:14,198,"$578,175.00","$520,898.00","$2,630.80","$40,908.22"
MIA - SEA,55746468139,M-LAS-SEA-2,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/55746468139,https://www.airlines-manager.com/aircraft/show/105093926,23:30,11:59,338,"$834,881.00","$766,832.00","$2,268.73","$61,428.46"
MIA - SJC,55704058067,M-SJC-YYC-5,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/55704058067,https://www.airlines-manager.com/aircraft/show/107763563,1:45,13:44,320,"$734,893.00","$668,726.00","$2,089.77","$55,804.67"
MIA - SJC,55724951920,M-SJC-YYC-1,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/55724951920,https://www.airlines-manager.com/aircraft/show/107763569,12:00,23:59,320,"$734,893.00","$668,726.00","$2,089.77","$55,804.67"
MIA - SJC,55728562321,M-SJC-YYC-2,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/55728562321,https://www.airlines-manager.com/aircraft/show/107763568,14:00,1:59,320,"$734,893.00","$668,726.00","$2,089.77","$55,804.67"
MIA - SJC,55732031824,M-SJC-YYC-3,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/55732031824,https://www.airlines-manager.com/aircraft/show/107763567,16:00,3:59,320,"$734,893.00","$668,726.00","$2,089.77","$55,804.67"
MIA - SJC,55747839765,M-SJC-YYC-4,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/55747839765,https://www.airlines-manager.com/aircraft/show/107763564,23:45,11:44,320,"$734,893.00","$668,726.00","$2,089.77","$55,804.67"
MIA - SJU,55704058320,M-SJU-BOS-6 B,A319-100,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/55704058320,https://www.airlines-manager.com/aircraft/show/110582841,3:15,9:29,198,"$287,737.00","$258,672.00","$1,306.42","$41,498.18"
MIA - SJU,55721560653,M-SJU-BOS-2,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/55721560653,https://www.airlines-manager.com/aircraft/show/91352062,10:15,16:29,310,"$381,512.00","$345,237.00","$1,113.67","$55,385.61"
MIA - SJU,55724951971,M-SJU-BOS-3,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/55724951971,https://www.airlines-manager.com/aircraft/show/91352061,12:15,18:29,310,"$381,512.00","$345,237.00","$1,113.67","$55,385.61"
MIA - SJU,55738770022,M-SJU-BOS-4,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/55738770022,https://www.airlines-manager.com/aircraft/show/91352060,18:15,0:29,310,"$381,512.00","$345,237.00","$1,113.67","$55,385.61"
MIA - SJU,55738770023,M-SJU-BOS-5,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/55738770023,https://www.airlines-manager.com/aircraft/show/91352059,19:15,1:29,310,"$381,512.00","$345,237.00","$1,113.67","$55,385.61"
MIA - SJU,55746468158,M-SJU-BOS-1,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/55746468158,https://www.airlines-manager.com/aircraft/show/91352063,22:45,4:59,274,"$342,154.00","$307,168.00","$1,121.05","$49,278.29"
MIA - SKB,55704058051,M-ANU-SXM-4 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/55704058051,https://www.airlines-manager.com/aircraft/show/110114298,1:30,8:29,228,"$345,078.00","$315,549.00","$1,383.99","$45,186.01"
MIA - SKB,55704058052,M-ANU-SXM-1 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/55704058052,https://www.airlines-manager.com/aircraft/show/110114295,2:15,9:14,228,"$345,078.00","$315,549.00","$1,383.99","$45,186.01"
MIA - SKB,55704058053,M-ANU-SXM-2 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/55704058053,https://www.airlines-manager.com/aircraft/show/110114296,3:15,10:14,228,"$345,078.00","$315,549.00","$1,383.99","$45,186.01"
MIA - SKB,55714463582,M-ANU-SXM-6 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/55714463582,https://www.airlines-manager.com/aircraft/show/110114300,6:45,13:44,228,"$345,078.00","$315,549.00","$1,383.99","$45,186.01"
MIA - SKB,55728562376,M-ANU-SXM-5 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/55728562376,https://www.airlines-manager.com/aircraft/show/110114299,14:00,20:59,228,"$345,078.00","$315,549.00","$1,383.99","$45,186.01"
MIA - SKB,55744388887,M-ANU-SXM-3 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/55744388887,https://www.airlines-manager.com/aircraft/show/110114297,21:00,3:59,228,"$345,078.00","$315,549.00","$1,383.99","$45,186.01"
MIA - SLC,55704057800,M-SJU-BOS-2,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/55704057800,https://www.airlines-manager.com/aircraft/show/91352062,0:00,10:14,310,"$644,121.00","$586,535.00","$1,892.05","$57,316.12"
MIA - SLC,55704057801,M-SJU-BOS-4,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/55704057801,https://www.airlines-manager.com/aircraft/show/91352060,1:00,11:14,310,"$644,121.00","$586,535.00","$1,892.05","$57,316.12"
MIA - SLC,55704057802,M-SJU-BOS-3,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/55704057802,https://www.airlines-manager.com/aircraft/show/91352061,2:00,12:14,310,"$644,121.00","$586,535.00","$1,892.05","$57,316.12"
MIA - SLC,55718008651,M-SJU-BOS-5,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/55718008651,https://www.airlines-manager.com/aircraft/show/91352059,9:00,19:14,310,"$644,121.00","$586,535.00","$1,892.05","$57,316.12"
MIA - SLC,55721560639,M-SJU-BOS-6 B,A319-100,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/55721560639,https://www.airlines-manager.com/aircraft/show/110582841,10:00,20:14,198,"$483,924.00","$437,765.00","$2,210.93","$42,778.34"
MIA - SLC,55724951939,M-SJU-BOS-1,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/55724951939,https://www.airlines-manager.com/aircraft/show/91352063,12:00,22:14,310,"$644,121.00","$586,535.00","$1,892.05","$57,316.12"
MIA - SMF,55704057958,M-OAK-SMF-2,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/55704057958,https://www.airlines-manager.com/aircraft/show/91198619,1:00,12:59,320,"$735,091.00","$671,059.00","$2,097.06","$55,999.36"
MIA - SMF,55704057959,M-OAK-SMF-3,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/55704057959,https://www.airlines-manager.com/aircraft/show/91198616,3:00,14:59,320,"$735,091.00","$671,059.00","$2,097.06","$55,999.36"
MIA - SMF,55721560705,M-OAK-SMF-4,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/55721560705,https://www.airlines-manager.com/aircraft/show/91198618,11:00,22:59,320,"$735,091.00","$671,059.00","$2,097.06","$55,999.36"
MIA - SMF,55728562190,M-OAK-SMF-5,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/55728562190,https://www.airlines-manager.com/aircraft/show/91198617,13:00,0:59,320,"$735,091.00","$671,059.00","$2,097.06","$55,999.36"
MIA - SMF,55746468174,M-OAK-SMF-1,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/55746468174,https://www.airlines-manager.com/aircraft/show/91198615,23:00,10:59,320,"$735,091.00","$671,059.00","$2,097.06","$55,999.36"
MIA - STL,55704058031,M-ELP-MCI-1,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/55704058031,https://www.airlines-manager.com/aircraft/show/91806234,1:30,7:44,320,"$395,052.00","$351,479.00","$1,098.37","$56,387.01"
MIA - STL,55704058032,M-ELP-MCI-5 B,A319-100,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/55704058032,https://www.airlines-manager.com/aircraft/show/105093924,2:00,8:14,198,"$298,871.00","$268,112.00","$1,354.10","$43,012.62"
MIA - STL,55718008603,M-ELP-MCI-4,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/55718008603,https://www.airlines-manager.com/aircraft/show/91806231,8:30,14:44,320,"$395,052.00","$351,479.00","$1,098.37","$56,387.01"
MIA - STL,55721560528,M-ELP-MCI-3,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/55721560528,https://www.airlines-manager.com/aircraft/show/91806232,10:00,16:14,320,"$395,052.00","$351,479.00","$1,098.37","$56,387.01"
MIA - STL,55735532964,M-ELP-MCI-2,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/55735532964,https://www.airlines-manager.com/aircraft/show/91806235,17:00,23:14,320,"$395,052.00","$351,479.00","$1,098.37","$56,387.01"
MIA - SXM,55714463581,M-ANU-SXM-5 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/55714463581,https://www.airlines-manager.com/aircraft/show/110114299,6:45,13:44,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SXM,55728562375,M-ANU-SXM-3 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/55728562375,https://www.airlines-manager.com/aircraft/show/110114297,14:00,20:59,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SXM,55732031848,M-ANU-SXM-4 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/55732031848,https://www.airlines-manager.com/aircraft/show/110114298,16:00,22:59,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SXM,55738770134,M-ANU-SXM-1 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/55738770134,https://www.airlines-manager.com/aircraft/show/110114295,19:15,2:14,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SXM,55741695594,M-ANU-SXM-2 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/55741695594,https://www.airlines-manager.com/aircraft/show/110114296,20:15,3:14,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SXM,55747839779,M-ANU-SXM-6 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/55747839779,https://www.airlines-manager.com/aircraft/show/110114300,23:45,6:44,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SYR,55704058225,M-EUG-SYR-1,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/55704058225,https://www.airlines-manager.com/aircraft/show/119652483,2:30,9:14,320,"$433,063.00","$391,646.00","$1,223.89","$58,165.25"
MIA - SYR,55714463613,M-EUG-SYR-3,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/55714463613,https://www.airlines-manager.com/aircraft/show/119652481,7:15,13:59,320,"$433,063.00","$391,646.00","$1,223.89","$58,165.25"
MIA - SYR,55724951935,M-EUG-SYR-2,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/55724951935,https://www.airlines-manager.com/aircraft/show/119652482,12:00,18:44,320,"$433,063.00","$391,646.00","$1,223.89","$58,165.25"
MIA - SYR,55728562335,M-EUG-SYR-4,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/55728562335,https://www.airlines-manager.com/aircraft/show/119652480,14:00,20:44,320,"$433,063.00","$391,646.00","$1,223.89","$58,165.25"
MIA - TPA,55708448915,M-BUR-PVD-1,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/55708448915,https://www.airlines-manager.com/aircraft/show/108834803,5:00,7:59,310,"$128,129.00","$102,113.00",$329.40,"$34,227.82"
MIA - TPA,55721560750,M-BUR-PVD-3,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/55721560750,https://www.airlines-manager.com/aircraft/show/108834805,11:00,13:59,310,"$128,129.00","$102,113.00",$329.40,"$34,227.82"
MIA - TPA,55735532989,M-BUR-PVD-5 B,A319-100,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/55735532989,https://www.airlines-manager.com/aircraft/show/108834807,17:00,19:59,198,"$95,593.00","$74,772.00",$377.64,"$25,063.24"
MIA - TPA,55735532990,M-BUR-PVD-2,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/55735532990,https://www.airlines-manager.com/aircraft/show/108834804,17:45,20:44,310,"$128,129.00","$102,113.00",$329.40,"$34,227.82"
MIA - TPA,55747839776,M-BUR-PVD-4,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/55747839776,https://www.airlines-manager.com/aircraft/show/108834806,23:45,2:44,310,"$128,129.00","$102,113.00",$329.40,"$34,227.82"
MIA - TUL,55704057924,M-FAR-TUL-2,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/55704057924,https://www.airlines-manager.com/aircraft/show/110883160,0:45,7:29,320,"$417,622.00","$376,181.00","$1,175.57","$55,868.47"
MIA - TUL,55704057925,M-FAR-TUL-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/55704057925,https://www.airlines-manager.com/aircraft/show/87169421,3:00,9:44,112,"$196,831.00","$172,707.00","$1,542.03","$25,649.55"
MIA - TUL,55721560722,M-FAR-TUL-3,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/55721560722,https://www.airlines-manager.com/aircraft/show/110883161,11:00,17:44,320,"$417,622.00","$376,181.00","$1,175.57","$55,868.47"
MIA - TUL,55732031826,M-FAR-TUL-4,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/55732031826,https://www.airlines-manager.com/aircraft/show/110883162,16:00,22:44,320,"$417,622.00","$376,181.00","$1,175.57","$55,868.47"
MIA - TUL,55741695515,M-FAR-TUL-1,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/55741695515,https://www.airlines-manager.com/aircraft/show/110883159,19:45,2:29,320,"$417,622.00","$376,181.00","$1,175.57","$55,868.47"
MIA - TUS,55704057903,M-IAD-TUS-3,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/55704057903,https://www.airlines-manager.com/aircraft/show/97556719,0:30,9:59,310,"$593,850.00","$545,245.00","$1,758.85","$57,495.08"
MIA - TUS,55721560605,M-IAD-TUS-2,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/55721560605,https://www.airlines-manager.com/aircraft/show/97556720,10:00,19:29,310,"$593,850.00","$545,245.00","$1,758.85","$57,495.08"
MIA - TUS,55728562235,M-IAD-TUS-5,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/55728562235,https://www.airlines-manager.com/aircraft/show/97556716,13:00,22:29,310,"$593,850.00","$545,245.00","$1,758.85","$57,495.08"
MIA - TUS,55732031791,M-IAD-TUS-1,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/55732031791,https://www.airlines-manager.com/aircraft/show/97556721,15:45,1:14,310,"$593,850.00","$545,245.00","$1,758.85","$57,495.08"
MIA - TUS,55738770075,M-IAD-TUS-4,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/55738770075,https://www.airlines-manager.com/aircraft/show/97556718,18:45,4:14,310,"$593,850.00","$545,245.00","$1,758.85","$57,495.08"
MIA - TYS,55704058334,M-CID-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/55704058334,https://www.airlines-manager.com/aircraft/show/116789650,3:30,8:29,310,"$315,564.00","$286,171.00",$923.13,"$57,425.62"
MIA - TYS,55721560616,M-CID-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/55721560616,https://www.airlines-manager.com/aircraft/show/116789651,10:00,14:59,310,"$315,564.00","$286,171.00",$923.13,"$57,425.62"
MIA - TYS,55732031682,M-CID-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/55732031682,https://www.airlines-manager.com/aircraft/show/116789652,14:45,19:44,310,"$315,564.00","$286,171.00",$923.13,"$57,425.62"
MIA - TYS,55744388970,M-CID-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/55744388970,https://www.airlines-manager.com/aircraft/show/116789653,22:00,2:59,310,"$315,564.00","$286,171.00",$923.13,"$57,425.62"
MIA - YUL,55711311658,M-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/55711311658,https://www.airlines-manager.com/aircraft/show/113101225,6:30,13:59,400,"$630,873.00","$576,566.00","$1,441.42","$77,046.68"
MIA - YUL,55721560697,M-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/55721560697,https://www.airlines-manager.com/aircraft/show/113101226,11:00,18:29,400,"$630,873.00","$576,566.00","$1,441.42","$77,046.68"
MIA - YUL,55732031703,M-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/55732031703,https://www.airlines-manager.com/aircraft/show/113101227,15:00,22:29,400,"$630,873.00","$576,566.00","$1,441.42","$77,046.68"
MIA - YUL,55747839761,M-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/55747839761,https://www.airlines-manager.com/aircraft/show/113101224,23:45,7:14,400,"$630,873.00","$576,566.00","$1,441.42","$77,046.68"
MIA - YVR,55721560696,M-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/55721560696,https://www.airlines-manager.com/aircraft/show/113101224,11:00,23:44,400,"$1,049,041.00","$964,395.00","$2,410.99","$75,737.83"
MIA - YVR,55728562303,M-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/55728562303,https://www.airlines-manager.com/aircraft/show/113101225,14:00,2:44,400,"$1,049,041.00","$964,395.00","$2,410.99","$75,737.83"
MIA - YVR,55738770037,M-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/55738770037,https://www.airlines-manager.com/aircraft/show/113101226,18:30,7:14,400,"$1,049,041.00","$964,395.00","$2,410.99","$75,737.83"
MIA - YVR,55746468117,M-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/55746468117,https://www.airlines-manager.com/aircraft/show/113101227,22:30,11:14,400,"$1,049,041.00","$964,395.00","$2,410.99","$75,737.83"
MIA - YYC,55704057793,M-SJC-YYC-1,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/55704057793,https://www.airlines-manager.com/aircraft/show/107763569,0:00,11:44,320,"$733,218.00","$664,622.00","$2,076.94","$56,643.92"
MIA - YYC,55704057794,M-SJC-YYC-2,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/55704057794,https://www.airlines-manager.com/aircraft/show/107763568,2:00,13:44,320,"$733,218.00","$664,622.00","$2,076.94","$56,643.92"
MIA - YYC,55708448715,M-SJC-YYC-3,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/55708448715,https://www.airlines-manager.com/aircraft/show/107763567,4:00,15:44,320,"$733,218.00","$664,622.00","$2,076.94","$56,643.92"
MIA - YYC,55724951919,M-SJC-YYC-4,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/55724951919,https://www.airlines-manager.com/aircraft/show/107763564,12:00,23:44,320,"$733,218.00","$664,622.00","$2,076.94","$56,643.92"
MIA - YYC,55728562320,M-SJC-YYC-5,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/55728562320,https://www.airlines-manager.com/aircraft/show/107763563,14:00,1:44,320,"$733,218.00","$664,622.00","$2,076.94","$56,643.92"
MIA - YYZ,55704058269,M-BWI-YYZ-3,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/55704058269,https://www.airlines-manager.com/aircraft/show/92153441,2:45,9:44,310,"$439,732.00","$392,992.00","$1,267.72","$56,275.70"
MIA - YYZ,55708448897,M-BWI-YYZ-6 B,A319-100,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/55708448897,https://www.airlines-manager.com/aircraft/show/120519717,4:45,11:44,198,"$329,542.00","$292,098.00","$1,475.24","$41,827.88"
MIA - YYZ,55721560576,M-BWI-YYZ-4,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/55721560576,https://www.airlines-manager.com/aircraft/show/92153442,10:00,16:59,310,"$439,732.00","$392,992.00","$1,267.72","$56,275.70"
MIA - YYZ,55724951940,M-BWI-YYZ-5,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/55724951940,https://www.airlines-manager.com/aircraft/show/92153439,12:00,18:59,310,"$439,732.00","$392,992.00","$1,267.72","$56,275.70"
MIA - YYZ,55732031788,M-BWI-YYZ-1,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/55732031788,https://www.airlines-manager.com/aircraft/show/92153443,15:45,22:44,310,"$439,732.00","$392,992.00","$1,267.72","$56,275.70"
MIA - YYZ,55738770072,M-BWI-YYZ-2,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/55738770072,https://www.airlines-manager.com/aircraft/show/92153440,18:45,1:44,310,"$439,732.00","$392,992.00","$1,267.72","$56,275.70"
SFO - ABQ,55718008629,S-MCI-OMA-1,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/55718008629,https://www.airlines-manager.com/aircraft/show/88239553,8:45,14:14,320,"$351,204.00","$311,153.00",$972.35,"$56,745.23"
SFO - ABQ,55718008630,S-MCI-OMA-5 B,A319-100,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/55718008630,https://www.airlines-manager.com/aircraft/show/105223003,8:45,14:14,198,"$266,605.00","$238,475.00","$1,204.42","$43,490.88"
SFO - ABQ,55721560663,S-MCI-OMA-4,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/55721560663,https://www.airlines-manager.com/aircraft/show/88239557,10:30,15:59,320,"$351,204.00","$311,153.00",$972.35,"$56,745.23"
SFO - ABQ,55732031706,S-MCI-OMA-3,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/55732031706,https://www.airlines-manager.com/aircraft/show/88239555,15:00,20:29,320,"$351,204.00","$311,153.00",$972.35,"$56,745.23"
SFO - ABQ,55746468145,S-MCI-OMA-2,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/55746468145,https://www.airlines-manager.com/aircraft/show/88239554,22:45,4:14,320,"$351,204.00","$311,153.00",$972.35,"$56,745.23"
SFO - ALB,55704057907,S-ALB-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/55704057907,https://www.airlines-manager.com/aircraft/show/112650097,0:30,12:29,310,"$737,199.00","$681,035.00","$2,196.89","$56,831.85"
SFO - ALB,55711311596,S-ALB-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/55711311596,https://www.airlines-manager.com/aircraft/show/112650096,5:30,17:29,310,"$737,199.00","$681,035.00","$2,196.89","$56,831.85"
SFO - ALB,55714463639,S-ALB-CAK-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/55714463639,https://www.airlines-manager.com/aircraft/show/112650090,7:30,19:29,198,"$551,373.00","$506,332.00","$2,557.23","$42,253.02"
SFO - ALB,55728562360,S-ALB-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/55728562360,https://www.airlines-manager.com/aircraft/show/112650099,14:00,1:59,310,"$737,199.00","$681,035.00","$2,196.89","$56,831.85"
SFO - ALB,55738769994,S-ALB-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/55738769994,https://www.airlines-manager.com/aircraft/show/112650098,18:00,5:59,310,"$737,199.00","$681,035.00","$2,196.89","$56,831.85"
SFO - ANC,55704058217,S-BWI-ANC-4,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/55704058217,https://www.airlines-manager.com/aircraft/show/106255848,2:30,12:14,338,"$665,760.00","$617,716.00","$1,827.56","$63,463.97"
SFO - ANC,55704058218,S-BWI-ANC-5,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/55704058218,https://www.airlines-manager.com/aircraft/show/106255849,3:30,13:14,338,"$665,760.00","$617,716.00","$1,827.56","$63,463.97"
SFO - ANC,55738770087,S-BWI-ANC-1,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/55738770087,https://www.airlines-manager.com/aircraft/show/106255845,19:00,4:44,338,"$665,760.00","$617,716.00","$1,827.56","$63,463.97"
SFO - ANC,55741695535,S-BWI-ANC-2,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/55741695535,https://www.airlines-manager.com/aircraft/show/106255846,20:00,5:44,338,"$665,760.00","$617,716.00","$1,827.56","$63,463.97"
SFO - ANC,55744388862,S-BWI-ANC-3,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/55744388862,https://www.airlines-manager.com/aircraft/show/106255847,21:00,6:44,338,"$665,760.00","$617,716.00","$1,827.56","$63,463.97"
SFO - ATL,55735532984,S-168C-3 B2,747-400,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/55735532984,https://www.airlines-manager.com/aircraft/show/120752303,17:00,2:44,968,"$1,863,868.00","$1,685,722.00","$1,741.45","$173,190.62"
SFO - ATL,55738770005,S-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/55738770005,https://www.airlines-manager.com/aircraft/show/107467212,18:00,4:29,112,"$307,106.00","$254,690.00","$2,274.02","$24,294.75"
SFO - ATL,55741695561,S-168D-6 B2,747-400,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/55741695561,https://www.airlines-manager.com/aircraft/show/120752299,20:00,5:44,968,"$1,863,868.00","$1,685,722.00","$1,741.45","$173,190.62"
SFO - AUS,55704057933,S-OGG-AUS-1,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/55704057933,https://www.airlines-manager.com/aircraft/show/92773481,0:45,8:44,310,"$503,113.00","$458,860.00","$1,480.19","$57,477.24"
SFO - AUS,55704057934,S-OGG-AUS-2,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/55704057934,https://www.airlines-manager.com/aircraft/show/92773480,2:45,10:44,310,"$503,113.00","$458,860.00","$1,480.19","$57,477.24"
SFO - AUS,55728562289,S-OGG-AUS-3,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/55728562289,https://www.airlines-manager.com/aircraft/show/92773479,13:30,21:29,310,"$503,113.00","$458,860.00","$1,480.19","$57,477.24"
SFO - AUS,55732031779,S-OGG-AUS-4,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/55732031779,https://www.airlines-manager.com/aircraft/show/92773478,15:30,23:29,310,"$503,113.00","$458,860.00","$1,480.19","$57,477.24"
SFO - AUS,55738770046,S-OGG-AUS-5,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/55738770046,https://www.airlines-manager.com/aircraft/show/92773477,18:30,2:29,310,"$503,113.00","$458,860.00","$1,480.19","$57,477.24"
SFO - BDL,55708448888,S-RSW-BDL-1,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/55708448888,https://www.airlines-manager.com/aircraft/show/84915098,4:45,16:59,320,"$745,353.00","$681,235.00","$2,128.86","$55,686.78"
SFO - BDL,55714463571,S-RSW-BDL-2,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/55714463571,https://www.airlines-manager.com/aircraft/show/84915099,6:45,18:59,320,"$745,353.00","$681,235.00","$2,128.86","$55,686.78"
SFO - BDL,55718008628,S-RSW-BDL-5,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/55718008628,https://www.airlines-manager.com/aircraft/show/84915102,8:45,20:59,320,"$745,353.00","$681,235.00","$2,128.86","$55,686.78"
SFO - BDL,55735532961,S-RSW-BDL-3,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/55735532961,https://www.airlines-manager.com/aircraft/show/84915100,17:00,5:14,320,"$745,353.00","$681,235.00","$2,128.86","$55,686.78"
SFO - BDL,55738770092,S-RSW-BDL-4,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/55738770092,https://www.airlines-manager.com/aircraft/show/84915101,19:00,7:14,320,"$745,353.00","$681,235.00","$2,128.86","$55,686.78"
SFO - BFF,55704057985,S-ICT-BFF-5,ERJ-175,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/55704057985,https://www.airlines-manager.com/aircraft/show/114912306,1:00,7:14,112,"$184,180.00","$161,791.00","$1,444.56","$25,955.78"
SFO - BFF,55704057986,S-ICT-BFF-4,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/55704057986,https://www.airlines-manager.com/aircraft/show/114912268,2:15,8:29,310,"$391,156.00","$356,860.00","$1,151.16","$57,250.27"
SFO - BFF,55718008591,S-ICT-BFF-3,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/55718008591,https://www.airlines-manager.com/aircraft/show/114912263,8:15,14:29,310,"$391,156.00","$356,860.00","$1,151.16","$57,250.27"
SFO - BFF,55732031842,S-ICT-BFF-2,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/55732031842,https://www.airlines-manager.com/aircraft/show/114912264,16:00,22:14,310,"$391,156.00","$356,860.00","$1,151.16","$57,250.27"
SFO - BFF,55746468227,S-ICT-BFF-1,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/55746468227,https://www.airlines-manager.com/aircraft/show/114912267,23:30,5:44,310,"$391,156.00","$356,860.00","$1,151.16","$57,250.27"
SFO - BHM,55711311591,S-BHM-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/55711311591,https://www.airlines-manager.com/aircraft/show/117782568,5:30,15:29,320,"$624,697.00","$570,602.00","$1,783.13","$57,155.46"
SFO - BHM,55714463600,S-BHM-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/55714463600,https://www.airlines-manager.com/aircraft/show/117782569,7:00,16:59,320,"$624,697.00","$570,602.00","$1,783.13","$57,155.46"
SFO - BHM,55732031750,S-BHM-GRR-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/55732031750,https://www.airlines-manager.com/aircraft/show/117782583,15:00,0:59,198,"$469,973.00","$430,696.00","$2,175.23","$43,141.50"
SFO - BHM,55741695518,S-BHM-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/55741695518,https://www.airlines-manager.com/aircraft/show/117782567,19:45,5:44,320,"$624,697.00","$570,602.00","$1,783.13","$57,155.46"
SFO - BHM,55744388961,S-BHM-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/55744388961,https://www.airlines-manager.com/aircraft/show/117782566,22:00,7:59,320,"$624,697.00","$570,602.00","$1,783.13","$57,155.46"
SFO - BIL,55704058210,S-FAR-BIL-4,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/55704058210,https://www.airlines-manager.com/aircraft/show/117782587,2:15,7:59,310,"$357,113.00","$324,930.00","$1,048.16","$56,673.84"
SFO - BIL,55718008671,S-FAR-BIL-3,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/55718008671,https://www.airlines-manager.com/aircraft/show/117782586,9:15,14:59,310,"$357,113.00","$324,930.00","$1,048.16","$56,673.84"
SFO - BIL,55732031745,S-FAR-BIL-2,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/55732031745,https://www.airlines-manager.com/aircraft/show/117782585,15:00,20:44,310,"$357,113.00","$324,930.00","$1,048.16","$56,673.84"
SFO - BIL,55746468165,S-FAR-BIL-1,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/55746468165,https://www.airlines-manager.com/aircraft/show/117782584,22:45,4:29,308,"$355,765.00","$323,631.00","$1,050.75","$56,447.27"
SFO - BNA,55704057995,S-BNA-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/55704057995,https://www.airlines-manager.com/aircraft/show/103365580,1:15,10:59,320,"$608,391.00","$552,114.00","$1,725.36","$56,724.04"
SFO - BNA,55711311645,S-BNA-CMH-6,ERJ-175,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/55711311645,https://www.airlines-manager.com/aircraft/show/82323681,6:00,15:44,112,"$286,104.00","$252,244.00","$2,252.18","$25,915.48"
SFO - BNA,55728562200,S-BNA-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/55728562200,https://www.airlines-manager.com/aircraft/show/103365583,13:00,22:44,320,"$608,391.00","$552,114.00","$1,725.36","$56,724.04"
SFO - BNA,55732031714,S-BNA-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/55732031714,https://www.airlines-manager.com/aircraft/show/103365582,15:00,0:44,320,"$608,391.00","$552,114.00","$1,725.36","$56,724.04"
SFO - BNA,55732031715,S-BNA-CMH-5,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/55732031715,https://www.airlines-manager.com/aircraft/show/103365579,15:45,1:29,320,"$608,391.00","$552,114.00","$1,725.36","$56,724.04"
SFO - BNA,55746468201,S-BNA-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/55746468201,https://www.airlines-manager.com/aircraft/show/103365581,23:15,8:59,320,"$608,391.00","$552,114.00","$1,725.36","$56,724.04"
SFO - BOI,55704057990,S-CLE-MKE-2,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/55704057990,https://www.airlines-manager.com/aircraft/show/92519369,1:15,5:29,320,"$248,121.00","$217,386.00",$679.33,"$51,351.02"
SFO - BOI,55721560501,S-CLE-MKE-1,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/55721560501,https://www.airlines-manager.com/aircraft/show/92519368,9:45,13:59,320,"$248,121.00","$217,386.00",$679.33,"$51,351.02"
SFO - BOI,55732031674,S-CLE-MKE-4,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/55732031674,https://www.airlines-manager.com/aircraft/show/92519371,14:45,18:59,320,"$248,121.00","$217,386.00",$679.33,"$51,351.02"
SFO - BOI,55732031675,S-CLE-MKE-3,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/55732031675,https://www.airlines-manager.com/aircraft/show/92519367,16:00,20:14,320,"$248,121.00","$217,386.00",$679.33,"$51,351.02"
SFO - BOS,55704057833,S-BOS-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/55704057833,https://www.airlines-manager.com/aircraft/show/104864961,0:15,12:44,338,"$841,524.00","$778,167.00","$2,302.27","$62,336.48"
SFO - BOS,55724951891,S-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/55724951891,https://www.airlines-manager.com/aircraft/show/120141531,11:30,23:59,0,"$222,034.00","$134,572.00",#DIV/0!,"$10,780.13"
SFO - BOS,55728562161,S-BOS-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/55728562161,https://www.airlines-manager.com/aircraft/show/104901564,13:00,1:29,338,"$841,524.00","$778,167.00","$2,302.27","$62,336.48"
SFO - BOS,55728562162,S-BOS-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/55728562162,https://www.airlines-manager.com/aircraft/show/104870960,14:00,2:29,338,"$841,524.00","$778,167.00","$2,302.27","$62,336.48"
SFO - BOS,55732031785,S-BOS-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/55732031785,https://www.airlines-manager.com/aircraft/show/104874465,15:45,4:14,338,"$841,524.00","$778,167.00","$2,302.27","$62,336.48"
SFO - BOS,55741695574,S-BOS-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/55741695574,https://www.airlines-manager.com/aircraft/show/104901544,20:15,8:44,338,"$841,524.00","$778,167.00","$2,302.27","$62,336.48"
SFO - BTV,55704057806,S-BTV-LEX-4,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/55704057806,https://www.airlines-manager.com/aircraft/show/112650092,0:00,11:59,310,"$733,303.00","$677,318.00","$2,184.90","$56,521.67"
SFO - BTV,55711311641,S-BTV-LEX-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/55711311641,https://www.airlines-manager.com/aircraft/show/112650089,6:00,17:59,198,"$549,048.00","$504,149.00","$2,546.21","$42,070.85"
SFO - BTV,55728562358,S-BTV-LEX-1,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/55728562358,https://www.airlines-manager.com/aircraft/show/112650095,14:00,1:59,310,"$733,303.00","$677,318.00","$2,184.90","$56,521.67"
SFO - BTV,55738769993,S-BTV-LEX-2,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/55738769993,https://www.airlines-manager.com/aircraft/show/112650094,18:00,5:59,310,"$733,303.00","$677,318.00","$2,184.90","$56,521.67"
SFO - BTV,55741695555,S-BTV-LEX-3,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/55741695555,https://www.airlines-manager.com/aircraft/show/112650093,20:00,7:59,310,"$733,303.00","$677,318.00","$2,184.90","$56,521.67"
SFO - BUF,55704058046,S-PVD-BUF-1,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/55704058046,https://www.airlines-manager.com/aircraft/show/112650108,1:30,12:29,310,"$690,191.00","$636,733.00","$2,053.98","$57,972.66"
SFO - BUF,55711311597,S-PVD-BUF-2,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/55711311597,https://www.airlines-manager.com/aircraft/show/112650107,5:30,16:29,310,"$690,191.00","$636,733.00","$2,053.98","$57,972.66"
SFO - BUF,55714463633,S-PVD-BUF-3,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/55714463633,https://www.airlines-manager.com/aircraft/show/112650106,7:30,18:29,310,"$690,191.00","$636,733.00","$2,053.98","$57,972.66"
SFO - BUF,55728562256,S-PVD-BUF-4,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/55728562256,https://www.airlines-manager.com/aircraft/show/112650105,13:00,23:59,310,"$690,191.00","$636,733.00","$2,053.98","$57,972.66"
SFO - BUF,55738769995,S-PVD-BUF-5,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/55738769995,https://www.airlines-manager.com/aircraft/show/112650104,18:00,4:59,310,"$690,191.00","$636,733.00","$2,053.98","$57,972.66"
SFO - BUR,55704058206,S-SAV-JAN-1,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/55704058206,https://www.airlines-manager.com/aircraft/show/114912265,2:15,5:44,310,"$174,124.00","$151,614.00",$489.08,"$43,525.55"
SFO - BUR,55708448764,S-SAV-JAN-4,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/55708448764,https://www.airlines-manager.com/aircraft/show/114912270,4:15,7:44,310,"$174,124.00","$151,614.00",$489.08,"$43,525.55"
SFO - BUR,55724951889,S-SAV-JAN-5 B,A319-100,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/55724951889,https://www.airlines-manager.com/aircraft/show/114917486,11:30,14:59,198,"$131,182.00","$113,160.00",$571.52,"$32,486.12"
SFO - BUR,55732031781,S-SAV-JAN-3,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/55732031781,https://www.airlines-manager.com/aircraft/show/114912269,15:30,18:59,310,"$174,124.00","$151,614.00",$489.08,"$43,525.55"
SFO - BUR,55735532983,S-SAV-JAN-2,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/55735532983,https://www.airlines-manager.com/aircraft/show/114912266,17:00,20:29,310,"$174,124.00","$151,614.00",$489.08,"$43,525.55"
SFO - BWI,55708448882,S-BWI-ANC-1,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/55708448882,https://www.airlines-manager.com/aircraft/show/106255845,4:45,16:14,338,"$792,718.00","$734,335.00","$2,172.59","$63,947.90"
SFO - BWI,55711311606,S-BWI-ANC-2,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/55711311606,https://www.airlines-manager.com/aircraft/show/106255846,5:45,17:14,338,"$792,718.00","$734,335.00","$2,172.59","$63,947.90"
SFO - BWI,55714463568,S-BWI-ANC-3,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/55714463568,https://www.airlines-manager.com/aircraft/show/106255847,6:45,18:14,338,"$792,718.00","$734,335.00","$2,172.59","$63,947.90"
SFO - BWI,55732031692,S-BWI-ANC-4,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/55732031692,https://www.airlines-manager.com/aircraft/show/106255848,15:00,2:29,338,"$792,718.00","$734,335.00","$2,172.59","$63,947.90"
SFO - BWI,55732031693,S-BWI-ANC-5,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/55732031693,https://www.airlines-manager.com/aircraft/show/106255849,16:00,3:29,338,"$792,718.00","$734,335.00","$2,172.59","$63,947.90"
SFO - BZN,55721560500,S-ROC-COS-1,A321neo,https://www.airlines-manager.com/network/showline/50555367,https://www.airlines-manager.com/network/showflight/55721560500,https://www.airlines-manager.com/aircraft/show/120112476,9:45,14:59,338,"$357,990.00","$329,036.00",$973.48,"$62,873.12"
SFO - BZN,55732031694,S-ROC-COS-3,A321neo,https://www.airlines-manager.com/network/showline/50555367,https://www.airlines-manager.com/network/showflight/55732031694,https://www.airlines-manager.com/aircraft/show/120112474,15:00,20:14,338,"$357,990.00","$329,036.00",$973.48,"$62,873.12"
SFO - BZN,55738770059,S-ROC-COS-2,A321neo,https://www.airlines-manager.com/network/showline/50555367,https://www.airlines-manager.com/network/showflight/55738770059,https://www.airlines-manager.com/aircraft/show/120112475,18:45,23:59,338,"$357,990.00","$329,036.00",$973.48,"$62,873.12"
SFO - BZN,55747839760,S-ROC-COS-4,A321neo,https://www.airlines-manager.com/network/showline/50555367,https://www.airlines-manager.com/network/showflight/55747839760,https://www.airlines-manager.com/aircraft/show/120051490,23:45,4:59,272,"$316,566.00","$288,826.00","$1,061.86","$55,189.68"
SFO - CAK,55704058191,S-ALB-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/55704058191,https://www.airlines-manager.com/aircraft/show/112650099,2:00,12:29,310,"$660,859.00","$610,685.00","$1,969.95","$58,252.94"
SFO - CAK,55711311639,S-ALB-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/55711311639,https://www.airlines-manager.com/aircraft/show/112650098,6:00,16:29,310,"$660,859.00","$610,685.00","$1,969.95","$58,252.94"
SFO - CAK,55728562359,S-ALB-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/55728562359,https://www.airlines-manager.com/aircraft/show/112650097,14:00,0:29,310,"$660,859.00","$610,685.00","$1,969.95","$58,252.94"
SFO - CAK,55738770107,S-ALB-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/55738770107,https://www.airlines-manager.com/aircraft/show/112650096,19:00,5:29,310,"$660,859.00","$610,685.00","$1,969.95","$58,252.94"
SFO - CAK,55744388889,S-ALB-CAK-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/55744388889,https://www.airlines-manager.com/aircraft/show/112650090,21:00,7:29,198,"$496,365.00","$456,132.00","$2,303.70","$43,510.21"
SFO - CDG,55704058336,S-168D-2 B2,747-400,https://www.airlines-manager.com/network/showline/50769259,https://www.airlines-manager.com/network/showflight/55704058336,https://www.airlines-manager.com/aircraft/show/120752295,3:30,1:29,968,"$4,129,579.00","$3,785,477.00","$3,910.62","$172,197.59"
SFO - CDG,55744388934,S-168C-1 B2,747-400,https://www.airlines-manager.com/network/showline/50769259,https://www.airlines-manager.com/network/showflight/55744388934,https://www.airlines-manager.com/aircraft/show/120752301,21:30,19:29,940,"$4,051,267.00","$3,712,004.00","$3,948.94","$168,855.38"
SFO - CHS,55704058035,S-MHT-CHS-1,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/55704058035,https://www.airlines-manager.com/aircraft/show/114917465,1:30,12:44,320,"$704,942.00","$645,793.00","$2,018.10","$57,488.99"
SFO - CHS,55711311589,S-MHT-CHS-2,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/55711311589,https://www.airlines-manager.com/aircraft/show/114917464,5:30,16:44,320,"$704,942.00","$645,793.00","$2,018.10","$57,488.99"
SFO - CHS,55718008623,S-MHT-CHS-5 B,A319-100,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/55718008623,https://www.airlines-manager.com/aircraft/show/114912262,8:30,19:59,198,"$531,446.00","$488,189.00","$2,465.60","$42,512.83"
SFO - CHS,55728562214,S-MHT-CHS-3,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/55728562214,https://www.airlines-manager.com/aircraft/show/114917463,13:00,0:14,320,"$704,942.00","$645,793.00","$2,018.10","$57,488.99"
SFO - CHS,55735532970,S-MHT-CHS-4,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/55735532970,https://www.airlines-manager.com/aircraft/show/114266973,17:00,4:14,320,"$704,942.00","$645,793.00","$2,018.10","$57,488.99"
SFO - CID,55704058036,S-YEG-YYC-1,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/55704058036,https://www.airlines-manager.com/aircraft/show/117782561,1:30,9:59,320,"$530,499.00","$483,550.00","$1,511.09","$57,000.00"
SFO - CID,55711311661,S-YEG-YYC-4,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/55711311661,https://www.airlines-manager.com/aircraft/show/116932364,6:30,14:59,320,"$530,499.00","$483,550.00","$1,511.09","$57,000.00"
SFO - CID,55728562217,S-YEG-YYC-3,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/55728562217,https://www.airlines-manager.com/aircraft/show/117782559,13:00,21:29,320,"$530,499.00","$483,550.00","$1,511.09","$57,000.00"
SFO - CID,55738770099,S-YEG-YYC-2,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/55738770099,https://www.airlines-manager.com/aircraft/show/117782560,19:00,3:29,320,"$530,499.00","$483,550.00","$1,511.09","$57,000.00"
SFO - CID,55744388890,S-YEG-YYC-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/55744388890,https://www.airlines-manager.com/aircraft/show/117782581,21:00,5:29,198,"$400,688.00","$366,754.00","$1,852.29","$43,232.30"
SFO - CLE,55711311585,S-CLE-MKE-2,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/55711311585,https://www.airlines-manager.com/aircraft/show/92519369,5:30,15:59,320,"$653,869.00","$596,150.00","$1,862.97","$56,866.45"
SFO - CLE,55711311586,S-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/55711311586,https://www.airlines-manager.com/aircraft/show/107467212,6:30,16:59,112,"$307,058.00","$271,917.00","$2,427.83","$25,938.03"
SFO - CLE,55714463627,S-CLE-MKE-5,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/55714463627,https://www.airlines-manager.com/aircraft/show/92519370,7:30,17:59,320,"$653,869.00","$596,150.00","$1,862.97","$56,866.45"
SFO - CLE,55728562312,S-CLE-MKE-1,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/55728562312,https://www.airlines-manager.com/aircraft/show/92519368,14:00,0:29,320,"$653,869.00","$596,150.00","$1,862.97","$56,866.45"
SFO - CLE,55738770093,S-CLE-MKE-4,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/55738770093,https://www.airlines-manager.com/aircraft/show/92519371,19:00,5:29,320,"$653,869.00","$596,150.00","$1,862.97","$56,866.45"
SFO - CLE,55741695578,S-CLE-MKE-3,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/55741695578,https://www.airlines-manager.com/aircraft/show/92519367,20:15,6:44,320,"$653,869.00","$596,150.00","$1,862.97","$56,866.45"
SFO - CLT,55704057779,S-IAD-CLT-3,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/55704057779,https://www.airlines-manager.com/aircraft/show/96135563,0:00,10:44,400,"$893,309.00","$813,344.00","$2,033.36","$75,777.39"
SFO - CLT,55711311624,S-IAD-CLT-4,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/55711311624,https://www.airlines-manager.com/aircraft/show/96135562,6:00,16:44,400,"$893,309.00","$813,344.00","$2,033.36","$75,777.39"
SFO - CLT,55728562278,S-IAD-CLT-1,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/55728562278,https://www.airlines-manager.com/aircraft/show/96135565,13:15,23:59,400,"$893,309.00","$813,344.00","$2,033.36","$75,777.39"
SFO - CLT,55732031765,S-IAD-CLT-5,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/55732031765,https://www.airlines-manager.com/aircraft/show/96135561,15:15,1:59,400,"$893,309.00","$813,344.00","$2,033.36","$75,777.39"
SFO - CLT,55735532997,S-IAD-CLT-2,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/55735532997,https://www.airlines-manager.com/aircraft/show/96135564,17:15,3:59,400,"$893,309.00","$813,344.00","$2,033.36","$75,777.39"
SFO - CMH,55704057921,S-BNA-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/55704057921,https://www.airlines-manager.com/aircraft/show/103365582,0:45,10:59,320,"$638,686.00","$581,389.00","$1,816.84","$56,813.26"
SFO - CMH,55711311588,S-BNA-CMH-5,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/55711311588,https://www.airlines-manager.com/aircraft/show/103365579,5:30,15:44,320,"$638,686.00","$581,389.00","$1,816.84","$56,813.26"
SFO - CMH,55728562199,S-BNA-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/55728562199,https://www.airlines-manager.com/aircraft/show/103365581,13:00,23:14,320,"$638,686.00","$581,389.00","$1,816.84","$56,813.26"
SFO - CMH,55732031712,S-BNA-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/55732031712,https://www.airlines-manager.com/aircraft/show/103365580,15:00,1:14,320,"$638,686.00","$581,389.00","$1,816.84","$56,813.26"
SFO - CMH,55732031713,S-BNA-CMH-6,ERJ-175,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/55732031713,https://www.airlines-manager.com/aircraft/show/82323681,15:45,1:59,112,"$300,499.00","$265,689.00","$2,372.22","$25,963.09"
SFO - CMH,55746468148,S-BNA-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/55746468148,https://www.airlines-manager.com/aircraft/show/103365583,22:45,8:59,320,"$638,686.00","$581,389.00","$1,816.84","$56,813.26"
SFO - COS,55704058196,S-ROC-COS-1,A321neo,https://www.airlines-manager.com/network/showline/50555364,https://www.airlines-manager.com/network/showflight/55704058196,https://www.airlines-manager.com/aircraft/show/120112476,2:15,7:59,338,"$397,466.00","$363,971.00","$1,076.84","$63,483.31"
SFO - COS,55718008664,S-ROC-COS-3,A321neo,https://www.airlines-manager.com/network/showline/50555364,https://www.airlines-manager.com/network/showflight/55718008664,https://www.airlines-manager.com/aircraft/show/120112474,9:15,14:59,338,"397,466$","363,971$","$1,076.84","$63,483.31"
SFO - COS,55728562172,S-ROC-COS-2,A321neo,https://www.airlines-manager.com/network/showline/50555364,https://www.airlines-manager.com/network/showflight/55728562172,https://www.airlines-manager.com/aircraft/show/120112475,13:00,18:44,338,"397,466$","363,971$","$1,076.84","$63,483.31"
SFO - COS,55738769968,S-ROC-COS-4,A321neo,https://www.airlines-manager.com/network/showline/50555364,https://www.airlines-manager.com/network/showflight/55738769968,https://www.airlines-manager.com/aircraft/show/120051490,18:00,23:44,335,"395,372$","361,943$","$1,080.43","$63,129.59"
SFO - CUN,55704057847,S-YOW-CUN-1,757-300,https://www.airlines-manager.com/network/showline/50555302,https://www.airlines-manager.com/network/showflight/55704057847,https://www.airlines-manager.com/aircraft/show/120056768,0:15,11:29,400,"948,335$","874,378$","$2,185.95","$77,837.80"
SFO - CUN,55704057848,S-YOW-CUN-2,757-300,https://www.airlines-manager.com/network/showline/50555302,https://www.airlines-manager.com/network/showflight/55704057848,https://www.airlines-manager.com/aircraft/show/120056767,1:15,12:29,400,"948,335$","874,378$","$2,185.95","$77,837.80"
SFO - CUN,55728562183,S-YOW-CUN-3,757-300,https://www.airlines-manager.com/network/showline/50555302,https://www.airlines-manager.com/network/showflight/55728562183,https://www.airlines-manager.com/aircraft/show/120056766,13:00,0:14,400,"948,335$","874,378$","$2,185.95","$77,837.80"
SFO - CUN,55728562184,S-YOW-CUN-4,757-300,https://www.airlines-manager.com/network/showline/50555302,https://www.airlines-manager.com/network/showflight/55728562184,https://www.airlines-manager.com/aircraft/show/120056765,14:00,1:14,400,"948,335$","874,378$","$2,185.95","$77,837.80"
SFO - CVG,55708448913,S-IND-CVG-3,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/55708448913,https://www.airlines-manager.com/aircraft/show/99316504,5:00,14:59,310,"630,041$","577,014$","$1,861.34","$57,797.73"
SFO - CVG,55714463601,S-IND-CVG-5,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/55714463601,https://www.airlines-manager.com/aircraft/show/99316502,7:00,16:59,310,"630,041$","577,014$","$1,861.34","$57,797.73"
SFO - CVG,55728562242,S-IND-CVG-2,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/55728562242,https://www.airlines-manager.com/aircraft/show/99316505,13:00,22:59,310,"630,041$","577,014$","$1,861.34","$57,797.73"
SFO - CVG,55732031733,S-IND-CVG-4,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/55732031733,https://www.airlines-manager.com/aircraft/show/99316503,15:00,0:59,310,"630,041$","577,014$","$1,861.34","$57,797.73"
SFO - CVG,55735532995,S-IND-CVG-6,ERJ-175,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/55735532995,https://www.airlines-manager.com/aircraft/show/99174346,17:00,2:59,112,"295,248$","259,885$","$2,320.40","$26,031.89"
SFO - CVG,55746468162,S-IND-CVG-1,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/55746468162,https://www.airlines-manager.com/aircraft/show/99316506,22:45,8:44,310,"630,041$","577,014$","$1,861.34","$57,797.73"
SFO - DEL,55704057811,S-168B-1 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/55704057811,https://www.airlines-manager.com/aircraft/show/86832727,0:00,5:29,1046,"5,812,778$","5,394,209$","$5,156.99","$983,746.32"
SFO - DEL,55704057812,S-168A-1 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/55704057812,https://www.airlines-manager.com/aircraft/show/86969602,2:00,7:29,1046,"$5,812,778.00","$5,394,209.00","$5,156.99","$983,746.32"
SFO - DEN,55704057844,S-IAH-MEX-5,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/55704057844,https://www.airlines-manager.com/aircraft/show/101045335,0:15,5:59,400,"$475,022.00","$407,058.00","$1,017.65","$70,998.49"
SFO - DEN,55711311657,S-IAH-MEX-1,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/55711311657,https://www.airlines-manager.com/aircraft/show/101045339,6:30,12:14,400,"$475,022.00","$407,058.00","$1,017.65","$70,998.49"
SFO - DEN,55718008601,S-IAH-MEX-4,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/55718008601,https://www.airlines-manager.com/aircraft/show/101045336,8:30,14:14,400,"$475,022.00","$407,058.00","$1,017.65","$70,998.49"
SFO - DEN,55728562180,S-IAH-MEX-3,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/55728562180,https://www.airlines-manager.com/aircraft/show/101045337,13:00,18:44,400,"$475,022.00","$407,058.00","$1,017.65","$70,998.49"
SFO - DEN,55744388985,S-IAH-MEX-2,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/55744388985,https://www.airlines-manager.com/aircraft/show/101045338,22:15,3:59,379,"$460,324.00","$392,886.00","$1,036.64","$68,526.63"
SFO - DFW,55704057912,S-DFW-2,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/55704057912,https://www.airlines-manager.com/aircraft/show/120752619,0:45,8:29,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DFW,55714463656,S-DFW-1,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/55714463656,https://www.airlines-manager.com/aircraft/show/120517724,8:00,15:44,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DFW,55718008645,S-DFW-2,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/55718008645,https://www.airlines-manager.com/aircraft/show/120752619,9:00,16:44,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DFW,55732031786,S-DFW-1,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/55732031786,https://www.airlines-manager.com/aircraft/show/120517724,15:45,23:29,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DFW,55735532933,S-DFW-2,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/55735532933,https://www.airlines-manager.com/aircraft/show/120752619,16:45,0:29,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DFW,55746468215,S-DFW-1,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/55746468215,https://www.airlines-manager.com/aircraft/show/120517724,23:30,7:14,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DSM,55708448873,S-TUL-DSM-3,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/55708448873,https://www.airlines-manager.com/aircraft/show/108410858,4:30,12:29,320,"$508,775.00","$462,937.00","$1,446.68","$57,987.93"
SFO - DSM,55728562207,S-TUL-DSM-2,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/55728562207,https://www.airlines-manager.com/aircraft/show/108410857,13:00,20:59,320,"$508,775.00","$462,937.00","$1,446.68","$57,987.93"
SFO - DSM,55732031762,S-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/55732031762,https://www.airlines-manager.com/aircraft/show/108466264,15:00,23:14,112,"$240,808.00","$213,387.00","$1,905.24","$25,917.45"
SFO - DSM,55746468152,S-TUL-DSM-1,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/55746468152,https://www.airlines-manager.com/aircraft/show/108410856,22:45,6:44,320,"$508,775.00","$462,937.00","$1,446.68","$57,987.93"
SFO - DSM,55746468153,S-TUL-DSM-4,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/55746468153,https://www.airlines-manager.com/aircraft/show/108410859,23:30,7:29,320,"$508,775.00","$462,937.00","$1,446.68","$57,987.93"
SFO - DTW,55708448778,S-ORD-DTW-4,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/55708448778,https://www.airlines-manager.com/aircraft/show/101045331,4:30,14:29,400,"$823,515.00","$748,392.00","$1,870.98","$74,964.14"
SFO - DTW,55708448779,S-ORD-DTW-3,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/55708448779,https://www.airlines-manager.com/aircraft/show/101045332,5:00,14:59,400,"$823,515.00","$748,392.00","$1,870.98","$74,964.14"
SFO - DTW,55732031700,S-ORD-DTW-2,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/55732031700,https://www.airlines-manager.com/aircraft/show/101045333,15:00,0:59,400,"$823,515.00","$748,392.00","$1,870.98","$74,964.14"
SFO - DTW,55735532959,S-ORD-DTW-5,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/55735532959,https://www.airlines-manager.com/aircraft/show/101045330,17:00,2:59,400,"$823,515.00","$748,392.00","$1,870.98","$74,964.14"
SFO - DTW,55744388956,S-ORD-DTW-1,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/55744388956,https://www.airlines-manager.com/aircraft/show/101045334,22:00,7:59,400,"$823,515.00","$748,392.00","$1,870.98","$74,964.14"
SFO - DXB,55711311598,S-168B-2 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/55711311598,https://www.airlines-manager.com/aircraft/show/87566901,5:30,12:29,1046,"$6,017,199.00","$5,552,011.00","$5,307.85","$795,037.37"
SFO - DXB,55714463635,S-168A-2 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/55714463635,https://www.airlines-manager.com/aircraft/show/86596991,7:30,14:29,1046,"$6,017,199.00","$5,552,011.00","$5,307.85","$795,037.37"
SFO - ELP,55711311615,S-ICT-BFF-1,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/55711311615,https://www.airlines-manager.com/aircraft/show/114912267,5:45,11:44,310,"$376,198.00","$341,426.00","$1,101.37","$57,062.84"
SFO - ELP,55714463622,S-ICT-BFF-5,ERJ-175,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/55714463622,https://www.airlines-manager.com/aircraft/show/114912306,7:15,13:14,112,"$178,042.00","$155,448.00","$1,387.93","$25,980.17"
SFO - ELP,55718008615,S-ICT-BFF-4,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/55718008615,https://www.airlines-manager.com/aircraft/show/114912268,8:30,14:29,310,"$376,198.00","$341,426.00","$1,101.37","$57,062.84"
SFO - ELP,55732031740,S-ICT-BFF-3,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/55732031740,https://www.airlines-manager.com/aircraft/show/114912263,15:00,20:59,310,"$376,198.00","$341,426.00","$1,101.37","$57,062.84"
SFO - ELP,55744389000,S-ICT-BFF-2,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/55744389000,https://www.airlines-manager.com/aircraft/show/114912264,22:15,4:14,310,"$376,198.00","$341,426.00","$1,101.37","$57,062.84"
SFO - EUG,55704058071,S-BHM-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/55704058071,https://www.airlines-manager.com/aircraft/show/117782568,1:45,5:29,320,"$217,713.00","$189,681.00",$592.75,"$50,807.41"
SFO - EUG,55704058072,S-BHM-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/55704058072,https://www.airlines-manager.com/aircraft/show/117782569,3:15,6:59,320,"$217,713.00","$189,681.00",$592.75,"$50,807.41"
SFO - EUG,55732031832,S-BHM-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/55732031832,https://www.airlines-manager.com/aircraft/show/117782567,16:00,19:44,320,"$217,713.00","$189,681.00",$592.75,"$50,807.41"
SFO - EUG,55735533043,S-BHM-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/55735533043,https://www.airlines-manager.com/aircraft/show/117782566,17:45,21:29,266,"$195,373.00","$167,996.00",$631.56,"$44,998.93"
SFO - FAR,55704057977,S-FAR-BIL-3,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/55704057977,https://www.airlines-manager.com/aircraft/show/117782586,1:00,8:44,310,"$491,795.00","$452,290.00","$1,459.00","$58,485.78"
SFO - FAR,55714463618,S-FAR-BIL-2,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/55714463618,https://www.airlines-manager.com/aircraft/show/117782585,7:15,14:59,310,"$491,795.00","$452,290.00","$1,459.00","$58,485.78"
SFO - FAR,55732031744,S-FAR-BIL-1,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/55732031744,https://www.airlines-manager.com/aircraft/show/117782584,15:00,22:44,310,"$491,795.00","$452,290.00","$1,459.00","$58,485.78"
SFO - FAR,55738770050,S-FAR-BIL-4,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/55738770050,https://www.airlines-manager.com/aircraft/show/117782587,18:30,2:14,310,"$491,795.00","$452,290.00","$1,459.00","$58,485.78"
SFO - FAT,55704058182,S-TUL-DSM-2,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/55704058182,https://www.airlines-manager.com/aircraft/show/108410857,2:00,4:44,320,"$95,749.00","$71,553.00",$223.60,"$26,177.93"
SFO - FAT,55724951896,S-TUL-DSM-1,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/55724951896,https://www.airlines-manager.com/aircraft/show/108410856,11:45,14:29,320,"$95,749.00","$71,553.00",$223.60,"$26,177.93"
SFO - FAT,55728562209,S-TUL-DSM-4,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/55728562209,https://www.airlines-manager.com/aircraft/show/108410859,13:00,15:44,320,"$95,749.00","$71,553.00",$223.60,"$26,177.93"
SFO - FAT,55738769981,S-TUL-DSM-3,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/55738769981,https://www.airlines-manager.com/aircraft/show/108410858,18:00,20:44,320,"$95,749.00","$71,553.00",$223.60,"$26,177.93"
SFO - FAT,55746468213,S-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/55746468213,https://www.airlines-manager.com/aircraft/show/108466264,23:15,1:59,68,"$33,745.00","$21,488.00",$316.00,"$7,861.46"
SFO - FCA,55708448880,S-MAF-FCA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/55708448880,https://www.airlines-manager.com/aircraft/show/120056759,4:45,9:59,272,"$305,111.00","$281,676.00","$1,035.57","$53,823.44"
SFO - FCA,55728562159,S-MAF-FCA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/55728562159,https://www.airlines-manager.com/aircraft/show/120056760,13:00,18:14,272,"$305,111.00","$281,676.00","$1,035.57","$53,823.44"
SFO - FCA,55732031685,S-MAF-FCA-5,ERJ-175,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/55732031685,https://www.airlines-manager.com/aircraft/show/119652600,14:45,20:14,112,"$160,704.00","$140,973.00","$1,258.69","$25,709.36"
SFO - FCA,55741695509,S-MAF-FCA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/55741695509,https://www.airlines-manager.com/aircraft/show/120056761,19:45,0:59,272,"$305,111.00","$281,676.00","$1,035.57","$53,823.44"
SFO - FCA,55747839757,S-MAF-FCA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/55747839757,https://www.airlines-manager.com/aircraft/show/120056758,23:45,4:59,272,"$305,111.00","$281,676.00","$1,035.57","$53,823.44"
SFO - FLL,55704057850,S-FLL-TPA-2,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/55704057850,https://www.airlines-manager.com/aircraft/show/97955543,0:15,12:14,320,"$739,785.00","$671,757.00","$2,099.24","$56,057.61"
SFO - FLL,55708448745,S-FLL-TPA-4,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/55708448745,https://www.airlines-manager.com/aircraft/show/97955541,4:15,16:14,320,"$739,785.00","$671,757.00","$2,099.24","$56,057.61"
SFO - FLL,55714463636,S-FLL-TPA-6 B,A319-100,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/55714463636,https://www.airlines-manager.com/aircraft/show/97900729,7:30,19:44,198,"$556,070.00","$506,591.00","$2,558.54","$41,410.71"
SFO - FLL,55728562193,S-FLL-TPA-1,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/55728562193,https://www.airlines-manager.com/aircraft/show/97955544,13:00,0:59,320,"$739,785.00","$671,757.00","$2,099.24","$56,057.61"
SFO - FLL,55735532966,S-FLL-TPA-3,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/55735532966,https://www.airlines-manager.com/aircraft/show/97955542,17:00,4:59,320,"$739,785.00","$671,757.00","$2,099.24","$56,057.61"
SFO - FLL,55741695546,S-FLL-TPA-5,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/55741695546,https://www.airlines-manager.com/aircraft/show/97955540,20:00,7:59,320,"$739,785.00","$671,757.00","$2,099.24","$56,057.61"
SFO - FSD,55704057887,S-OKC-FSD-1,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/55704057887,https://www.airlines-manager.com/aircraft/show/107160378,0:30,7:59,320,"$471,889.00","$428,607.00","$1,339.40","$57,274.88"
SFO - FSD,55704057888,S-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/55704057888,https://www.airlines-manager.com/aircraft/show/107132310,2:00,9:29,112,"$223,210.00","$197,491.00","$1,763.31","$26,390.78"
SFO - FSD,55704057889,S-OKC-FSD-4,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/55704057889,https://www.airlines-manager.com/aircraft/show/107160381,3:00,10:29,320,"$471,889.00","$428,607.00","$1,339.40","$57,274.88"
SFO - FSD,55714463666,S-OKC-FSD-3,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/55714463666,https://www.airlines-manager.com/aircraft/show/107160380,8:00,15:29,320,"$471,889.00","$428,607.00","$1,339.40","$57,274.88"
SFO - FSD,55732031822,S-OKC-FSD-2,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/55732031822,https://www.airlines-manager.com/aircraft/show/107160379,16:00,23:29,286,"$440,976.00","$398,975.00","$1,395.02","$53,315.14"
SFO - GRR,55704057982,S-BHM-GRR-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/55704057982,https://www.airlines-manager.com/aircraft/show/117782583,1:00,10:44,198,"$458,303.00","$419,852.00","$2,120.46","$43,135.48"
SFO - GRR,55711311611,S-BHM-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/55711311611,https://www.airlines-manager.com/aircraft/show/117782567,5:45,15:29,320,"$608,484.00","$555,512.00","$1,735.98","$57,073.15"
SFO - GRR,55714463668,S-BHM-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/55714463668,https://www.airlines-manager.com/aircraft/show/117782566,8:00,17:44,320,"$608,484.00","$555,512.00","$1,735.98","$57,073.15"
SFO - GRR,55732031833,S-BHM-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/55732031833,https://www.airlines-manager.com/aircraft/show/117782568,16:00,1:44,320,"$608,484.00","$555,512.00","$1,735.98","$57,073.15"
SFO - GRR,55735533025,S-BHM-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/55735533025,https://www.airlines-manager.com/aircraft/show/117782569,17:30,3:14,320,"$608,484.00","$555,512.00","$1,735.98","$57,073.15"
SFO - GSO,55704057896,S-GSO-SYR-4,737-900ER,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/55704057896,https://www.airlines-manager.com/aircraft/show/119550235,0:30,11:29,320,"$687,935.00","$629,220.00","$1,966.31","$57,288.62"
SFO - GSO,55711311642,S-GSO-SYR-5,A319-100,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/55711311642,https://www.airlines-manager.com/aircraft/show/120112473,6:00,17:14,198,"$519,051.00","$476,182.00","$2,404.96","$42,390.09"
SFO - GSO,55724951937,S-GSO-SYR-1,737-900ER,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/55724951937,https://www.airlines-manager.com/aircraft/show/120056764,12:00,22:59,320,"$687,935.00","$629,220.00","$1,966.31","$57,288.62"
SFO - GSO,55728562223,S-GSO-SYR-2,737-900ER,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/55728562223,https://www.airlines-manager.com/aircraft/show/120056763,13:00,23:59,320,"$687,935.00","$629,220.00","$1,966.31","$57,288.62"
SFO - GSO,55746468223,S-GSO-SYR-3,737-900ER,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/55746468223,https://www.airlines-manager.com/aircraft/show/120056762,23:30,10:29,320,"$687,935.00","$629,220.00","$1,966.31","$57,288.62"
SFO - HKG,55744388910,S-168B-6 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/55744388910,https://www.airlines-manager.com/aircraft/show/87083947,21:15,23:59,1046,"$5,282,521.00","$4,883,932.00","$4,669.15","$1,786,804.39"
SFO - HKG,55746468209,S-168A-6 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/55746468209,https://www.airlines-manager.com/aircraft/show/88032836,23:15,1:59,1046,"$5,282,521.00","$4,883,932.00","$4,669.15","$1,786,804.39"
SFO - IAD,55704057780,S-IAD-CLT-1,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/55704057780,https://www.airlines-manager.com/aircraft/show/96135565,0:00,11:14,400,"$912,332.00","$834,314.00","$2,085.79","$74,271.28"
SFO - IAD,55708448705,S-IAD-CLT-5,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/55708448705,https://www.airlines-manager.com/aircraft/show/96135561,4:00,15:14,400,"$912,332.00","$834,314.00","$2,085.79","$74,271.28"
SFO - IAD,55711311625,S-IAD-CLT-2,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/55711311625,https://www.airlines-manager.com/aircraft/show/96135564,6:00,17:14,400,"$912,332.00","$834,314.00","$2,085.79","$74,271.28"
SFO - IAD,55724951982,S-IAD-CLT-3,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/55724951982,https://www.airlines-manager.com/aircraft/show/96135563,12:45,23:59,400,"$912,332.00","$834,314.00","$2,085.79","$74,271.28"
SFO - IAD,55735532934,S-IAD-CLT-4,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/55735532934,https://www.airlines-manager.com/aircraft/show/96135562,16:45,3:59,400,"$912,332.00","$834,314.00","$2,085.79","$74,271.28"
SFO - IAH,55708448886,S-IAH-MEX-2,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/55708448886,https://www.airlines-manager.com/aircraft/show/101045338,4:45,12:59,400,"$694,602.00","$624,794.00","$1,561.99","$75,885.91"
SFO - IAH,55714463570,S-IAH-MEX-5,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/55714463570,https://www.airlines-manager.com/aircraft/show/101045335,6:45,14:59,400,"$694,602.00","$624,794.00","$1,561.99","$75,885.91"
SFO - IAH,55728562182,S-IAH-MEX-1,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/55728562182,https://www.airlines-manager.com/aircraft/show/101045339,13:00,21:14,400,"$694,602.00","$624,794.00","$1,561.99","$75,885.91"
SFO - IAH,55732031702,S-IAH-MEX-4,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/55732031702,https://www.airlines-manager.com/aircraft/show/101045336,15:00,23:14,400,"$694,602.00","$624,794.00","$1,561.99","$75,885.91"
SFO - IAH,55741695485,S-IAH-MEX-3,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/55741695485,https://www.airlines-manager.com/aircraft/show/101045337,19:30,3:44,400,"$694,602.00","$624,794.00","$1,561.99","$75,885.91"
SFO - ICN,55708448927,S-168D-1 B2,747-400,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/55708448927,https://www.airlines-manager.com/aircraft/show/120752294,5:15,3:29,968,"$4,255,893.00","$3,935,008.00","$4,065.09","$176,986.87"
SFO - ICN,55746468210,S-168C-7 B2,747-400,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/55746468210,https://www.airlines-manager.com/aircraft/show/120752307,23:15,21:29,968,"$4,255,893.00","$3,935,008.00","$4,065.09","$176,986.87"
SFO - ICT,55704057936,S-ICT-BFF-3,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/55704057936,https://www.airlines-manager.com/aircraft/show/114912263,0:45,8:14,310,"$469,158.00","$430,023.00","$1,387.17","$57,464.10"
SFO - ICT,55714463673,S-ICT-BFF-2,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/55714463673,https://www.airlines-manager.com/aircraft/show/114912264,8:00,15:29,310,"$469,158.00","$430,023.00","$1,387.17","$57,464.10"
SFO - ICT,55732031843,S-ICT-BFF-1,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/55732031843,https://www.airlines-manager.com/aircraft/show/114912267,16:00,23:29,310,"$469,158.00","$430,023.00","$1,387.17","$57,464.10"
SFO - ICT,55735533033,S-ICT-BFF-5,ERJ-175,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/55735533033,https://www.airlines-manager.com/aircraft/show/114912306,17:30,0:59,112,"$221,348.00","$195,492.00","$1,745.46","$26,123.65"
SFO - ICT,55738770080,S-ICT-BFF-4,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/55738770080,https://www.airlines-manager.com/aircraft/show/114912268,18:45,2:14,310,"$469,158.00","$430,023.00","$1,387.17","$57,464.10"
SFO - IND,55708448925,S-IND-CVG-4,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/55708448925,https://www.airlines-manager.com/aircraft/show/99316503,5:15,14:59,310,"$605,607.00","$555,557.00","$1,792.12","$57,077.77"
SFO - IND,55714463621,S-IND-CVG-6,ERJ-175,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/55714463621,https://www.airlines-manager.com/aircraft/show/99174346,7:15,16:59,112,"$284,129.00","$250,715.00","$2,238.53","$25,758.39"
SFO - IND,55728562243,S-IND-CVG-1,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/55728562243,https://www.airlines-manager.com/aircraft/show/99316506,13:00,22:44,310,"$605,607.00","$555,557.00","$1,792.12","$57,077.77"
SFO - IND,55732031734,S-IND-CVG-3,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/55732031734,https://www.airlines-manager.com/aircraft/show/99316504,15:00,0:44,310,"$605,607.00","$555,557.00","$1,792.12","$57,077.77"
SFO - IND,55735532974,S-IND-CVG-5,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/55735532974,https://www.airlines-manager.com/aircraft/show/99316502,17:00,2:44,310,"$605,607.00","$555,557.00","$1,792.12","$57,077.77"
SFO - IND,55746468181,S-IND-CVG-2,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/55746468181,https://www.airlines-manager.com/aircraft/show/99316505,23:00,8:44,310,"$605,607.00","$555,557.00","$1,792.12","$57,077.77"
SFO - JAC,55704057943,S-MAF-FCA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/55704057943,https://www.airlines-manager.com/aircraft/show/120056761,1:00,5:59,272,"$285,290.00","$263,927.00",$970.32,"$52,961.94"
SFO - JAC,55708448901,S-MAF-FCA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/55708448901,https://www.airlines-manager.com/aircraft/show/120056758,5:00,9:59,272,"$285,290.00","$263,927.00",$970.32,"$52,961.94"
SFO - JAC,55728562158,S-MAF-FCA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/55728562158,https://www.airlines-manager.com/aircraft/show/120056759,13:00,17:59,272,"$285,290.00","$263,927.00",$970.32,"$52,961.94"
SFO - JAC,55738770008,S-MAF-FCA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/55738770008,https://www.airlines-manager.com/aircraft/show/120056760,18:15,23:14,272,"$285,290.00","$263,927.00",$970.32,"$52,961.94"
SFO - JAC,55741695601,S-MAF-FCA-5,ERJ-175,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/55741695601,https://www.airlines-manager.com/aircraft/show/119652600,20:15,1:14,112,"$149,834.00","$131,932.00","$1,177.96","$26,474.65"
SFO - JAN,55704058212,S-SAV-JAN-5 B,A319-100,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/55704058212,https://www.airlines-manager.com/aircraft/show/114917486,2:15,11:29,198,"$439,387.00","$402,942.00","$2,035.06","$43,639.93"
SFO - JAN,55711311652,S-SAV-JAN-3,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/55711311652,https://www.airlines-manager.com/aircraft/show/114912269,6:15,15:29,310,"$583,909.00","$538,452.00","$1,736.94","$58,316.10"
SFO - JAN,55714463650,S-SAV-JAN-2,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/55714463650,https://www.airlines-manager.com/aircraft/show/114912266,7:45,16:59,310,"$583,909.00","$538,452.00","$1,736.94","$58,316.10"
SFO - JAN,55735532982,S-SAV-JAN-1,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/55735532982,https://www.airlines-manager.com/aircraft/show/114912265,17:00,2:14,310,"$583,909.00","$538,452.00","$1,736.94","$58,316.10"
SFO - JAN,55738770110,S-SAV-JAN-4,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/55738770110,https://www.airlines-manager.com/aircraft/show/114912270,19:00,4:14,310,"$583,909.00","$538,452.00","$1,736.94","$58,316.10"
SFO - JAX,55711311631,S-JAX-SAT-5,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/55711311631,https://www.airlines-manager.com/aircraft/show/86377315,6:00,17:14,310,"$704,676.00","$649,607.00","$2,095.51","$57,828.52"
SFO - JAX,55728562224,S-JAX-SAT-1,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/55728562224,https://www.airlines-manager.com/aircraft/show/86375568,13:00,0:14,310,"$704,676.00","$649,607.00","$2,095.51","$57,828.52"
SFO - JAX,55732031725,S-JAX-SAT-2,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/55732031725,https://www.airlines-manager.com/aircraft/show/86371267,15:00,2:14,310,"$704,676.00","$649,607.00","$2,095.51","$57,828.52"
SFO - JAX,55744388876,S-JAX-SAT-3,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/55744388876,https://www.airlines-manager.com/aircraft/show/86385102,21:00,8:14,310,"$704,676.00","$649,607.00","$2,095.51","$57,828.52"
SFO - JAX,55746468178,S-JAX-SAT-4,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/55746468178,https://www.airlines-manager.com/aircraft/show/86378760,23:00,10:14,310,"$704,676.00","$649,607.00","$2,095.51","$57,828.52"
SFO - JFK,55704057949,S-MIA-JFK-4,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/55704057949,https://www.airlines-manager.com/aircraft/show/89233034,1:00,12:59,400,"$965,414.00","$866,916.00","$2,167.29","$72,343.48"
SFO - JFK,55714463592,S-MIA-JFK-5,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/55714463592,https://www.airlines-manager.com/aircraft/show/89233035,7:00,18:59,400,"$965,414.00","$866,916.00","$2,167.29","$72,343.48"
SFO - JFK,55728562173,S-MIA-JFK-1,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/55728562173,https://www.airlines-manager.com/aircraft/show/89233032,13:00,0:59,400,"$965,414.00","$866,916.00","$2,167.29","$72,343.48"
SFO - JFK,55732031810,S-MIA-JFK-2,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/55732031810,https://www.airlines-manager.com/aircraft/show/84622093,16:00,3:59,400,"$965,414.00","$866,916.00","$2,167.29","$72,343.48"
SFO - JFK,55738770089,S-MIA-JFK-3,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/55738770089,https://www.airlines-manager.com/aircraft/show/89233031,19:00,6:59,400,"$965,414.00","$866,916.00","$2,167.29","$72,343.48"
SFO - KIX,55704058049,S-168D-3 B2,747-400,https://www.airlines-manager.com/network/showline/50769294,https://www.airlines-manager.com/network/showflight/55704058049,https://www.airlines-manager.com/aircraft/show/120752296,1:30,22:59,968,"$4,000,997.00","$3,703,245.00","$3,825.67","$172,377.58"
SFO - KIX,55741695505,S-168C-2 B2,747-400,https://www.airlines-manager.com/network/showline/50769294,https://www.airlines-manager.com/network/showflight/55741695505,https://www.airlines-manager.com/aircraft/show/120752302,19:30,16:59,968,"$4,000,997.00","$3,703,245.00","$3,825.67","$172,377.58"
SFO - KOA,55704058279,S-KOA-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/55704058279,https://www.airlines-manager.com/aircraft/show/112650101,2:45,13:59,310,"$705,734.00","$650,862.00","$2,099.55","$57,940.24"
SFO - KOA,55708448894,S-KOA-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/55708448894,https://www.airlines-manager.com/aircraft/show/112650100,4:45,15:59,310,"$705,734.00","$650,862.00","$2,099.55","$57,940.24"
SFO - KOA,55728562268,S-KOA-PWM-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/55728562268,https://www.airlines-manager.com/aircraft/show/112650091,13:00,0:14,198,"$529,574.00","$485,575.00","$2,452.40","$43,226.26"
SFO - KOA,55735532980,S-KOA-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/55735532980,https://www.airlines-manager.com/aircraft/show/112650103,17:00,4:14,310,"$705,734.00","$650,862.00","$2,099.55","$57,940.24"
SFO - KOA,55741695556,S-KOA-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/55741695556,https://www.airlines-manager.com/aircraft/show/112650102,20:00,7:14,310,"$705,734.00","$650,862.00","$2,099.55","$57,940.24"
SFO - LAS,55711311619,S-BOS-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/55711311619,https://www.airlines-manager.com/aircraft/show/104901564,6:00,9:44,338,"$218,684.00","$179,991.00",$532.52,"$48,211.88"
SFO - LAS,55714463586,S-BOS-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/55714463586,https://www.airlines-manager.com/aircraft/show/104870960,7:00,10:44,338,"$218,684.00","$179,991.00",$532.52,"$48,211.88"
SFO - LAS,55724951898,S-BOS-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/55724951898,https://www.airlines-manager.com/aircraft/show/104874465,12:00,15:44,338,"$218,684.00","$179,991.00",$532.52,"$48,211.88"
SFO - LAS,55735532912,S-BOS-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/55735532912,https://www.airlines-manager.com/aircraft/show/104901544,16:30,20:14,338,"$218,684.00","$179,991.00",$532.52,"$48,211.88"
SFO - LAS,55741695602,S-BOS-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/55741695602,https://www.airlines-manager.com/aircraft/show/104864961,20:30,0:14,338,"$218,684.00","$179,991.00",$532.52,"$48,211.88"
SFO - LAX,55704058193,S-PHL-SEA-6 B,A319-100,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/55704058193,https://www.airlines-manager.com/aircraft/show/97900730,2:00,5:29,198,"$133,747.00","$101,733.00",$513.80,"$29,205.65"
SFO - LAX,55708448780,S-PHL-SEA-1,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/55708448780,https://www.airlines-manager.com/aircraft/show/92390872,4:30,7:59,320,"$176,398.00","$129,187.00",$403.71,"$37,087.18"
SFO - LAX,55714463626,S-PHL-SEA-5,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/55714463626,https://www.airlines-manager.com/aircraft/show/92390869,7:30,10:59,320,"$176,398.00","$129,187.00",$403.71,"$37,087.18"
SFO - LAX,55718008582,S-PHL-SEA-4,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/55718008582,https://www.airlines-manager.com/aircraft/show/92390870,8:15,11:44,320,"$176,398.00","$129,187.00",$403.71,"$37,087.18"
SFO - LAX,55724951916,S-PHL-SEA-3,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/55724951916,https://www.airlines-manager.com/aircraft/show/92390873,12:00,15:29,320,"$176,398.00","$129,187.00",$403.71,"$37,087.18"
SFO - LAX,55735532936,S-PHL-SEA-2,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/55735532936,https://www.airlines-manager.com/aircraft/show/92390871,16:45,20:14,320,"$176,398.00","$129,187.00",$403.71,"$37,087.18"
SFO - LEX,55704058190,S-BTV-LEX-1,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/55704058190,https://www.airlines-manager.com/aircraft/show/112650095,2:00,11:59,310,"$625,642.00","$578,194.00","$1,865.14","$57,915.93"
SFO - LEX,55711311638,S-BTV-LEX-2,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/55711311638,https://www.airlines-manager.com/aircraft/show/112650094,6:00,15:59,310,"$625,642.00","$578,194.00","$1,865.14","$57,915.93"
SFO - LEX,55714463672,S-BTV-LEX-3,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/55714463672,https://www.airlines-manager.com/aircraft/show/112650093,8:00,17:59,310,"$625,642.00","$578,194.00","$1,865.14","$57,915.93"
SFO - LEX,55728562357,S-BTV-LEX-4,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/55728562357,https://www.airlines-manager.com/aircraft/show/112650092,14:00,23:59,310,"$625,642.00","$578,194.00","$1,865.14","$57,915.93"
SFO - LEX,55741695568,S-BTV-LEX-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/55741695568,https://www.airlines-manager.com/aircraft/show/112650089,20:00,5:59,198,"$470,560.00","$432,514.00","$2,184.41","$43,323.61"
SFO - LGB,55704058318,S-FAR-BIL-2,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/55704058318,https://www.airlines-manager.com/aircraft/show/117782585,3:15,6:44,310,"$181,588.00","$157,489.00",$508.03,"$45,212.15"
SFO - LGB,55721560761,S-FAR-BIL-1,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/55721560761,https://www.airlines-manager.com/aircraft/show/117782584,11:00,14:29,310,"$181,588.00","$157,489.00",$508.03,"$45,212.15"
SFO - LGB,55732031747,S-FAR-BIL-4,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/55732031747,https://www.airlines-manager.com/aircraft/show/117782587,15:00,18:29,310,"$181,588.00","$157,489.00",$508.03,"$45,212.15"
SFO - LGB,55744388933,S-FAR-BIL-3,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/55744388933,https://www.airlines-manager.com/aircraft/show/117782586,21:30,0:59,310,"$181,588.00","$157,489.00",$508.03,"$45,212.15"
SFO - LHR,55704058280,S-168C-4 B2,747-400,https://www.airlines-manager.com/network/showline/50769240,https://www.airlines-manager.com/network/showflight/55704058280,https://www.airlines-manager.com/aircraft/show/120752304,2:45,23:59,968,"$4,060,744.00","$3,726,461.00","$3,849.65","$175,500.52"
SFO - LHR,55746468186,S-168D-3 B2,747-400,https://www.airlines-manager.com/network/showline/50769240,https://www.airlines-manager.com/network/showflight/55746468186,https://www.airlines-manager.com/aircraft/show/120752296,23:00,20:14,968,"$4,060,744.00","$3,726,461.00","$3,849.65","$175,500.52"
SFO - LIT,55704058202,S-SDF-LIT-3,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/55704058202,https://www.airlines-manager.com/aircraft/show/94886627,2:15,10:59,310,"$542,816.00","$499,788.00","$1,612.22","$57,227.63"
SFO - LIT,55704058203,S-SDF-LIT-5,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/55704058203,https://www.airlines-manager.com/aircraft/show/106453498,3:15,11:59,310,"$542,816.00","$499,788.00","$1,612.22","$57,227.63"
SFO - LIT,55728562341,S-SDF-LIT-2,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/55728562341,https://www.airlines-manager.com/aircraft/show/94886628,14:00,22:44,310,"$542,816.00","$499,788.00","$1,612.22","$57,227.63"
SFO - LIT,55732031738,S-SDF-LIT-4,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/55732031738,https://www.airlines-manager.com/aircraft/show/106453500,15:00,23:44,310,"$542,816.00","$499,788.00","$1,612.22","$57,227.63"
SFO - LIT,55747839773,S-SDF-LIT-1,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/55747839773,https://www.airlines-manager.com/aircraft/show/106453499,23:45,8:29,310,"$542,816.00","$499,788.00","$1,612.22","$57,227.63"
SFO - MAF,55704058305,S-MAF-FCA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/55704058305,https://www.airlines-manager.com/aircraft/show/120056760,3:15,9:59,272,"$388,045.00","$360,385.00","$1,324.94","$53,522.52"
SFO - MAF,55714463679,S-MAF-FCA-5,ERJ-175,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/55714463679,https://www.airlines-manager.com/aircraft/show/119652600,8:00,14:44,112,"$201,536.00","$177,709.00","$1,586.69","$26,392.43"
SFO - MAF,55728562160,S-MAF-FCA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/55728562160,https://www.airlines-manager.com/aircraft/show/120056761,13:00,19:44,272,"$388,045.00","$360,385.00","$1,324.94","$53,522.52"
SFO - MAF,55735532949,S-MAF-FCA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/55735532949,https://www.airlines-manager.com/aircraft/show/120056758,17:00,23:44,272,"$388,045.00","$360,385.00","$1,324.94","$53,522.52"
SFO - MAF,55744388955,S-MAF-FCA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/55744388955,https://www.airlines-manager.com/aircraft/show/120056759,22:00,4:44,272,"$388,045.00","$360,385.00","$1,324.94","$53,522.52"
SFO - MCI,55714463594,S-MCI-OMA-2,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/55714463594,https://www.airlines-manager.com/aircraft/show/88239554,7:00,14:59,320,"$507,197.00","$458,271.00","$1,432.10","$57,403.47"
SFO - MCI,55735532962,S-MCI-OMA-1,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/55735532962,https://www.airlines-manager.com/aircraft/show/88239553,17:00,0:59,320,"$507,197.00","$458,271.00","$1,432.10","$57,403.47"
SFO - MCI,55735532963,S-MCI-OMA-5 B,A319-100,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/55735532963,https://www.airlines-manager.com/aircraft/show/105223003,17:00,0:59,198,"$382,381.00","$347,373.00","$1,754.41","$43,512.28"
SFO - MCI,55738770063,S-MCI-OMA-4,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/55738770063,https://www.airlines-manager.com/aircraft/show/88239557,18:45,2:44,320,"$507,197.00","$458,271.00","$1,432.10","$57,403.47"
SFO - MCI,55746468198,S-MCI-OMA-3,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/55746468198,https://www.airlines-manager.com/aircraft/show/88239555,23:15,7:14,320,"$507,197.00","$458,271.00","$1,432.10","$57,403.47"
SFO - MCO,55704057826,S-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/55704057826,https://www.airlines-manager.com/aircraft/show/120141531,0:00,11:29,0,"$207,765.00","$117,928.00",$0.00,"$10,269.49"
SFO - MCO,55704057827,S-MCO-MSP-2,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/55704057827,https://www.airlines-manager.com/aircraft/show/105367367,3:30,14:59,338,"$795,031.00","$730,062.00","$2,159.95","$63,575.79"
SFO - MCO,55708448772,S-MCO-MSP-5,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/55708448772,https://www.airlines-manager.com/aircraft/show/105367364,4:30,15:59,338,"$795,031.00","$730,062.00","$2,159.95","$63,575.79"
SFO - MCO,55732031690,S-MCO-MSP-1,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/55732031690,https://www.airlines-manager.com/aircraft/show/105367368,15:00,2:29,338,"$795,031.00","$730,062.00","$2,159.95","$63,575.79"
SFO - MCO,55735532950,S-MCO-MSP-4,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/55735532950,https://www.airlines-manager.com/aircraft/show/105367365,17:00,4:29,338,"$795,031.00","$730,062.00","$2,159.95","$63,575.79"
SFO - MCO,55738770117,S-MCO-MSP-3,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/55738770117,https://www.airlines-manager.com/aircraft/show/105367366,19:15,6:44,338,"$795,031.00","$730,062.00","$2,159.95","$63,575.79"
SFO - MEM,55704058271,S-MEM-PIT-4,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/55704058271,https://www.airlines-manager.com/aircraft/show/98788934,2:45,11:59,310,"$576,829.00","$528,105.00","$1,703.56","$57,195.49"
SFO - MEM,55711311617,S-MEM-PIT-6,ERJ-175,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/55711311617,https://www.airlines-manager.com/aircraft/show/98675305,5:45,14:59,112,"$270,633.00","$238,251.00","$2,127.24","$25,803.36"
SFO - MEM,55728562241,S-MEM-PIT-1,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/55728562241,https://www.airlines-manager.com/aircraft/show/98788937,13:00,22:14,310,"$576,829.00","$528,105.00","$1,703.56","$57,195.49"
SFO - MEM,55732031838,S-MEM-PIT-3,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/55732031838,https://www.airlines-manager.com/aircraft/show/98788935,16:00,1:14,310,"$576,829.00","$528,105.00","$1,703.56","$57,195.49"
SFO - MEM,55738770105,S-MEM-PIT-5,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/55738770105,https://www.airlines-manager.com/aircraft/show/98788933,19:00,4:14,310,"$576,829.00","$528,105.00","$1,703.56","$57,195.49"
SFO - MEM,55747839770,S-MEM-PIT-2,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/55747839770,https://www.airlines-manager.com/aircraft/show/98788936,23:45,8:59,310,"$576,829.00","$528,105.00","$1,703.56","$57,195.49"
SFO - MEX,55704058342,S-IAH-MEX-3,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/55704058342,https://www.airlines-manager.com/aircraft/show/101045337,3:45,12:59,400,"$773,222.00","$702,355.00","$1,755.89","$76,067.33"
SFO - MEX,55728562181,S-IAH-MEX-2,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/55728562181,https://www.airlines-manager.com/aircraft/show/101045338,13:00,22:14,400,"$773,222.00","$702,355.00","$1,755.89","$76,067.33"
SFO - MEX,55732031701,S-IAH-MEX-5,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/55732031701,https://www.airlines-manager.com/aircraft/show/101045335,15:00,0:14,400,"$773,222.00","$702,355.00","$1,755.89","$76,067.33"
SFO - MEX,55744388895,S-IAH-MEX-1,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/55744388895,https://www.airlines-manager.com/aircraft/show/101045339,21:15,6:29,400,"$773,222.00","$702,355.00","$1,755.89","$76,067.33"
SFO - MEX,55746468197,S-IAH-MEX-4,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/55746468197,https://www.airlines-manager.com/aircraft/show/101045336,23:15,8:29,370,"$724,515.00","$655,479.00","$1,771.56","$70,990.51"
SFO - MFR,55704057962,S-TYS-MSN-2,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/55704057962,https://www.airlines-manager.com/aircraft/show/117782564,1:00,4:29,320,"$173,273.00","$146,641.00",$458.25,"$42,097.89"
SFO - MFR,55708448720,S-TYS-MSN-1,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/55708448720,https://www.airlines-manager.com/aircraft/show/117782565,4:00,7:29,320,"$173,273.00","$146,641.00",$458.25,"$42,097.89"
SFO - MFR,55732031830,S-TYS-MSN-3,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/55732031830,https://www.airlines-manager.com/aircraft/show/117782563,16:00,19:29,320,"$173,273.00","$146,641.00",$458.25,"$42,097.89"
SFO - MFR,55735533002,S-TYS-MSN-4,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/55735533002,https://www.airlines-manager.com/aircraft/show/117782562,17:15,20:44,291,"$163,780.00","$137,405.00",$472.18,"$39,446.41"
SFO - MHT,55704057858,S-MHT-CHS-3,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/55704057858,https://www.airlines-manager.com/aircraft/show/114917463,0:15,12:44,320,"$762,087.00","$698,102.00","$2,181.57","$55,922.72"
SFO - MHT,55708448752,S-MHT-CHS-4,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/55708448752,https://www.airlines-manager.com/aircraft/show/114266973,4:15,16:44,320,"$762,087.00","$698,102.00","$2,181.57","$55,922.72"
SFO - MHT,55728562215,S-MHT-CHS-1,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/55728562215,https://www.airlines-manager.com/aircraft/show/114917465,13:00,1:29,320,"$762,087.00","$698,102.00","$2,181.57","$55,922.72"
SFO - MHT,55735532971,S-MHT-CHS-2,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/55735532971,https://www.airlines-manager.com/aircraft/show/114917464,17:00,5:29,320,"$762,087.00","$698,102.00","$2,181.57","$55,922.72"
SFO - MHT,55741695569,S-MHT-CHS-5 B,A319-100,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/55741695569,https://www.airlines-manager.com/aircraft/show/114912262,20:00,8:29,198,"$571,071.00","$524,144.00","$2,647.19","$41,987.50"
SFO - MIA,55704057948,S-MIA-JFK-1,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/55704057948,https://www.airlines-manager.com/aircraft/show/89233032,1:00,12:59,400,"$958,829.00","$868,986.00","$2,172.47","$72,516.22"
SFO - MIA,55708448704,S-MIA-JFK-2,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/55708448704,https://www.airlines-manager.com/aircraft/show/84622093,4:00,15:59,400,"$958,829.00","$868,986.00","$2,172.47","$72,516.22"
SFO - MIA,55714463591,S-MIA-JFK-3,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/55714463591,https://www.airlines-manager.com/aircraft/show/89233031,7:00,18:59,400,"$958,829.00","$868,986.00","$2,172.47","$72,516.22"
SFO - MIA,55728562174,S-MIA-JFK-4,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/55728562174,https://www.airlines-manager.com/aircraft/show/89233034,13:00,0:59,400,"958,829$","868,986$","$2,172.47","$72,516.22"
SFO - MIA,55738770090,S-MIA-JFK-5,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/55738770090,https://www.airlines-manager.com/aircraft/show/89233035,19:00,6:59,400,"$958,829.00","$868,986.00","$2,172.47","$72,516.22"
SFO - MKE,55704057882,S-CLE-MKE-1,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/55704057882,https://www.airlines-manager.com/aircraft/show/92519368,0:30,9:44,320,"$586,128.00","$533,360.00","$1,666.75","$57,764.62"
SFO - MKE,55711311587,S-CLE-MKE-4,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/55711311587,https://www.airlines-manager.com/aircraft/show/92519371,5:30,14:44,320,"$586,128.00","$533,360.00","$1,666.75","$57,764.62"
SFO - MKE,55714463572,S-CLE-MKE-3,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/55714463572,https://www.airlines-manager.com/aircraft/show/92519367,6:45,15:59,320,"$586,128.00","$533,360.00","$1,666.75","$57,764.62"
SFO - MKE,55732031815,S-CLE-MKE-2,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/55732031815,https://www.airlines-manager.com/aircraft/show/92519369,16:00,1:14,320,"$586,128.00","$533,360.00","$1,666.75","$57,764.62"
SFO - MKE,55738769975,S-CLE-MKE-5,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/55738769975,https://www.airlines-manager.com/aircraft/show/92519370,18:00,3:14,320,"$586,128.00","$533,360.00","$1,666.75","$57,764.62"
SFO - MSN,55704058213,S-TYS-MSN-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/55704058213,https://www.airlines-manager.com/aircraft/show/117782582,2:15,11:14,198,"424,215$","388,553$","$1,962.39","$43,252.65"
SFO - MSN,55714463598,S-TYS-MSN-4,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/55714463598,https://www.airlines-manager.com/aircraft/show/117782562,7:00,15:59,320,"562,482$","513,233$","$1,603.85","$57,131.69"
SFO - MSN,55714463599,S-TYS-MSN-3,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/55714463599,https://www.airlines-manager.com/aircraft/show/117782563,7:00,15:59,320,"562,482$","513,233$","$1,603.85","$57,131.69"
SFO - MSN,55732031831,S-TYS-MSN-2,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/55732031831,https://www.airlines-manager.com/aircraft/show/117782564,16:00,0:59,320,"562,482$","513,233$","$1,603.85","$57,131.69"
SFO - MSN,55738770100,S-TYS-MSN-1,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/55738770100,https://www.airlines-manager.com/aircraft/show/117782565,19:00,3:59,320,"562,482$","513,233$","$1,603.85","$57,131.69"
SFO - MSO,55714463576,S-TUL-DSM-1,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/55714463576,https://www.airlines-manager.com/aircraft/show/108410856,6:45,11:44,320,"$322,461.00","$288,750.00",$902.34,"$57,943.14"
SFO - MSO,55714463577,S-TUL-DSM-4,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/55714463577,https://www.airlines-manager.com/aircraft/show/108410859,7:30,12:29,320,"$322,461.00","$288,750.00",$902.34,"$57,943.14"
SFO - MSO,55728562208,S-TUL-DSM-3,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/55728562208,https://www.airlines-manager.com/aircraft/show/108410858,13:00,17:59,320,"$322,461.00","$288,750.00",$902.34,"$57,943.14"
SFO - MSO,55744388874,S-TUL-DSM-2,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/55744388874,https://www.airlines-manager.com/aircraft/show/108410857,21:00,1:59,268,"$290,727.00","$258,092.00",$963.03,"$51,791.04"
SFO - MSP,55704058216,S-MCO-MSP-1,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/55704058216,https://www.airlines-manager.com/aircraft/show/105367368,2:30,10:44,338,"$572,597.00","$523,159.00","$1,547.81","$63,541.58"
SFO - MSP,55708448773,S-MCO-MSP-4,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/55708448773,https://www.airlines-manager.com/aircraft/show/105367365,4:30,12:44,338,"$572,597.00","$523,159.00","$1,547.81","$63,541.58"
SFO - MSP,55714463567,S-MCO-MSP-3,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/55714463567,https://www.airlines-manager.com/aircraft/show/105367366,6:45,14:59,338,"572,597$","523,159$","$1,547.81","$63,541.58"
SFO - MSP,55732031688,S-MCO-MSP-2,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/55732031688,https://www.airlines-manager.com/aircraft/show/105367367,15:00,23:14,338,"572,597$","523,159$","$1,547.81","$63,541.58"
SFO - MSP,55732031689,S-MCO-MSP-5,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/55732031689,https://www.airlines-manager.com/aircraft/show/105367364,16:00,0:14,338,"572,597$","523,159$","$1,547.81","$63,541.58"
SFO - MSY,55704058303,S-MSY-STL-6,ERJ-175,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/55704058303,https://www.airlines-manager.com/aircraft/show/103534666,3:00,12:29,112,"279,484$","246,810$","$2,203.66","$26,025.66"
SFO - MSY,55711311629,S-MSY-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/55711311629,https://www.airlines-manager.com/aircraft/show/98075266,6:00,15:29,320,"593,870$","539,636$","$1,686.36","$56,903.62"
SFO - MSY,55714463661,S-MSY-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/55714463661,https://www.airlines-manager.com/aircraft/show/98075264,8:00,17:29,320,"593,870$","539,636$","$1,686.36","$56,903.62"
SFO - MSY,55728562194,S-MSY-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/55728562194,https://www.airlines-manager.com/aircraft/show/98075267,13:00,22:29,320,"593,870$","539,636$","$1,686.36","$56,903.62"
SFO - MSY,55744388897,S-MSY-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/55744388897,https://www.airlines-manager.com/aircraft/show/98075265,21:15,6:44,320,"593,870$","539,636$","$1,686.36","$56,903.62"
SFO - MSY,55746468200,S-MSY-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/55746468200,https://www.airlines-manager.com/aircraft/show/98075263,23:15,8:44,320,"593,870$","539,636$","$1,686.36","$56,903.62"
SFO - NGO,55704057814,S-168C-5 B2,747-400,https://www.airlines-manager.com/network/showline/50769298,https://www.airlines-manager.com/network/showflight/55704057814,https://www.airlines-manager.com/aircraft/show/120752305,0:00,20:59,968,"3,903,860$","3,617,048$","$3,736.62","$172,377.19"
SFO - NGO,55741695591,S-168D-4 B2,747-400,https://www.airlines-manager.com/network/showline/50769298,https://www.airlines-manager.com/network/showflight/55741695591,https://www.airlines-manager.com/aircraft/show/120752297,20:15,17:14,968,"3,903,860$","3,617,048$","$3,736.62","$172,377.19"
SFO - NRT,55704057815,S-168C-6-B2,747-400,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/55704057815,https://www.airlines-manager.com/aircraft/show/120752306,0:00,20:14,968,"3,876,882$","3,579,468$","$3,697.80","$176,909.46"
SFO - NRT,55735533010,S-168D-5 B2,747-400,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/55735533010,https://www.airlines-manager.com/aircraft/show/120752298,17:15,13:29,968,"3,876,882$","3,579,468$","$3,697.80","$176,909.46"
SFO - OGG,55704058226,S-OGG-AUS-5,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/55704058226,https://www.airlines-manager.com/aircraft/show/92773477,2:30,13:44,310,"697,883$","645,321$","$2,081.68","$57,446.97"
SFO - OGG,55728562290,S-OGG-AUS-1,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/55728562290,https://www.airlines-manager.com/aircraft/show/92773481,13:30,0:44,310,"697,883$","645,321$","$2,081.68","$57,446.97"
SFO - OGG,55732031780,S-OGG-AUS-2,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/55732031780,https://www.airlines-manager.com/aircraft/show/92773480,15:30,2:44,310,"697,883$","645,321$","$2,081.68","$57,446.97"
SFO - OGG,55744388927,S-OGG-AUS-3,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/55744388927,https://www.airlines-manager.com/aircraft/show/92773479,21:30,8:44,310,"697,883$","645,321$","$2,081.68","$57,446.97"
SFO - OGG,55746468224,S-OGG-AUS-4,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/55746468224,https://www.airlines-manager.com/aircraft/show/92773478,23:30,10:44,310,"697,883$","645,321$","$2,081.68","$57,446.97"
SFO - OKC,55704057890,S-OKC-FSD-3,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/55704057890,https://www.airlines-manager.com/aircraft/show/107160380,0:30,7:59,320,"476,319$","432,077$","$1,350.24","$57,738.57"
SFO - OKC,55714463665,S-OKC-FSD-2,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/55714463665,https://www.airlines-manager.com/aircraft/show/107160379,8:00,15:29,320,"476,319$","432,077$","$1,350.24","$57,738.57"
SFO - OKC,55735532969,S-OKC-FSD-1,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/55735532969,https://www.airlines-manager.com/aircraft/show/107160378,17:00,0:29,320,"476,319$","432,077$","$1,350.24","$57,738.57"
SFO - OKC,55738770056,S-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/55738770056,https://www.airlines-manager.com/aircraft/show/107132310,18:30,1:59,112,"224,788$","198,645$","$1,773.62","$26,544.99"
SFO - OKC,55741695490,S-OKC-FSD-4,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/55741695490,https://www.airlines-manager.com/aircraft/show/107160381,19:30,2:59,320,"476,319$","432,077$","$1,350.24","$57,738.57"
SFO - OMA,55704057953,S-MCI-OMA-1,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/55704057953,https://www.airlines-manager.com/aircraft/show/88239553,1:00,8:44,320,"484,959$","439,887$","$1,374.65","$56,881.94"
SFO - OMA,55704057954,S-MCI-OMA-5 B,A319-100,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/55704057954,https://www.airlines-manager.com/aircraft/show/105223003,1:00,8:44,198,"366,607$","334,272$","$1,688.24","$43,224.83"
SFO - OMA,55704057955,S-MCI-OMA-4,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/55704057955,https://www.airlines-manager.com/aircraft/show/88239557,2:45,10:29,320,"484,959$","439,887$","$1,374.65","$56,881.94"
SFO - OMA,55714463608,S-MCI-OMA-3,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/55714463608,https://www.airlines-manager.com/aircraft/show/88239555,7:15,14:59,320,"484,959$","439,887$","$1,374.65","$56,881.94"
SFO - OMA,55732031705,S-MCI-OMA-2,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/55732031705,https://www.airlines-manager.com/aircraft/show/88239554,15:00,22:44,320,"484,959$","439,887$","$1,374.65","$56,881.94"
SFO - ONT,55708448872,S-OKC-FSD-2,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/55708448872,https://www.airlines-manager.com/aircraft/show/107160379,4:30,7:59,320,"180,494$","150,361$",$469.88,"$43,165.84"
SFO - ONT,55728562206,S-OKC-FSD-1,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/55728562206,https://www.airlines-manager.com/aircraft/show/107160378,13:00,16:29,320,"180,494$","150,361$",$469.88,"$43,165.84"
SFO - ONT,55732031760,S-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/55732031760,https://www.airlines-manager.com/aircraft/show/107132310,15:00,18:29,112,"83,245$","67,122$",$599.30,"$19,269.47"
SFO - ONT,55732031761,S-OKC-FSD-4,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/55732031761,https://www.airlines-manager.com/aircraft/show/107160381,16:00,19:29,320,"180,494$","150,361$",$469.88,"$43,165.84"
SFO - ONT,55744388873,S-OKC-FSD-3,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/55744388873,https://www.airlines-manager.com/aircraft/show/107160380,21:00,0:29,320,"180,494$","150,361$",$469.88,"$43,165.84"
SFO - ORD,55711311626,S-ORD-DTW-2,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/55711311626,https://www.airlines-manager.com/aircraft/show/101045333,6:00,14:59,400,"760,394$","672,993$","$1,682.48","$74,915.73"
SFO - ORD,55714463624,S-ORD-DTW-5,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/55714463624,https://www.airlines-manager.com/aircraft/show/101045330,7:30,16:29,400,"760,394$","672,993$","$1,682.48","$74,915.73"
SFO - ORD,55728562179,S-ORD-DTW-1,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/55728562179,https://www.airlines-manager.com/aircraft/show/101045334,13:00,21:59,400,"760,394$","672,993$","$1,682.48","$74,915.73"
SFO - ORD,55732031698,S-ORD-DTW-4,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/55732031698,https://www.airlines-manager.com/aircraft/show/101045331,15:00,23:59,400,"760,394$","672,993$","$1,682.48","$74,915.73"
SFO - ORD,55741695543,S-ORD-DTW-3,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/55741695543,https://www.airlines-manager.com/aircraft/show/101045332,20:00,4:59,400,"760,394$","672,993$","$1,682.48","$74,915.73"
SFO - ORF,55711311595,S-ORF-RIC-3,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/55711311595,https://www.airlines-manager.com/aircraft/show/108328836,5:30,17:29,310,"732,603$","676,491$","$2,182.23","$56,452.66"
SFO - ORF,55714463632,S-ORF-RIC-4,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/55714463632,https://www.airlines-manager.com/aircraft/show/108328837,7:30,19:29,310,"732,603$","676,491$","$2,182.23","$56,452.66"
SFO - ORF,55738769989,S-ORF-RIC-1,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/55738769989,https://www.airlines-manager.com/aircraft/show/108328834,18:00,5:59,310,"732,603$","676,491$","$2,182.23","$56,452.66"
SFO - ORF,55741695552,S-ORF-RIC-2,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/55741695552,https://www.airlines-manager.com/aircraft/show/108328835,20:00,7:59,310,"732,603$","676,491$","$2,182.23","$56,452.66"
SFO - ORF,55744388975,S-ORF-RIC-5 B,A319-100,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/55744388975,https://www.airlines-manager.com/aircraft/show/108328833,22:00,9:59,198,"547,743$","502,744$","$2,539.11","$41,953.60"
SFO - PBI,55708448747,S-PBI-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/55708448747,https://www.airlines-manager.com/aircraft/show/100301186,4:15,16:14,320,"734,200$","669,869$","$2,093.34","$55,900.06"
SFO - PBI,55711311650,S-PBI-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/55711311650,https://www.airlines-manager.com/aircraft/show/100301185,6:15,18:14,320,"734,200$","669,869$","$2,093.34","$55,900.06"
SFO - PBI,55735532968,S-PBI-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/55735532968,https://www.airlines-manager.com/aircraft/show/100301188,17:00,4:59,320,"734,200$","669,869$","$2,093.34","$55,900.06"
SFO - PBI,55738770095,S-PBI-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/55738770095,https://www.airlines-manager.com/aircraft/show/100301187,19:00,6:59,320,"734,200$","669,869$","$2,093.34","$55,900.06"
SFO - PBI,55744388871,S-PBI-RDU-5,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/55744388871,https://www.airlines-manager.com/aircraft/show/100301184,21:00,8:59,320,"734,200$","669,869$","$2,093.34","$55,900.06"
SFO - PDX,55704057836,S-MCO-MSP-5,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/55704057836,https://www.airlines-manager.com/aircraft/show/105367364,0:15,4:29,338,"272,269$","242,872$",$718.56,"$57,371.34"
SFO - PDX,55721560669,S-MCO-MSP-1,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/55721560669,https://www.airlines-manager.com/aircraft/show/105367368,10:45,14:59,338,"272,269$","242,872$",$718.56,"$57,371.34"
SFO - PDX,55724951980,S-MCO-MSP-4,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/55724951980,https://www.airlines-manager.com/aircraft/show/105367365,12:45,16:59,338,"272,269$","242,872$",$718.56,"$57,371.34"
SFO - PDX,55732031687,S-MCO-MSP-3,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/55732031687,https://www.airlines-manager.com/aircraft/show/105367366,15:00,19:14,338,"272,269$","242,872$",$718.56,"$57,371.34"
SFO - PDX,55746468195,S-MCO-MSP-2,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/55746468195,https://www.airlines-manager.com/aircraft/show/105367367,23:15,3:29,273,"241,301$","212,721$",$779.20,"$50,249.06"
SFO - PEK,55704057816,S-168C-7 B2,747-400,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/55704057816,https://www.airlines-manager.com/aircraft/show/120752307,0:00,23:14,968,"4,491,411$","4,124,325$","$4,260.67","$177,517.58"
SFO - PEK,55711311640,S-168D-7 B2,747-400,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/55711311640,https://www.airlines-manager.com/aircraft/show/120752300,6:00,5:14,968,"4,491,411$","4,124,325$","$4,260.67","$177,517.58"
SFO - PHL,55704057787,S-PHL-SEA-2,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/55704057787,https://www.airlines-manager.com/aircraft/show/92390871,0:00,11:44,320,"730,738$","658,186$","$2,056.83","$56,095.40"
SFO - PHL,55724951915,S-PHL-SEA-1,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/55724951915,https://www.airlines-manager.com/aircraft/show/92390872,12:00,23:44,320,"730,738$","658,186$","$2,056.83","$56,095.40"
SFO - PHL,55728562372,S-PHL-SEA-6 B,A319-100,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/55728562372,https://www.airlines-manager.com/aircraft/show/97900730,14:00,1:59,198,"548,740$","496,348$","$2,506.81","$41,419.86"
SFO - PHL,55732031709,S-PHL-SEA-5,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/55732031709,https://www.airlines-manager.com/aircraft/show/92390869,15:00,2:44,320,"730,738$","658,186$","$2,056.83","$56,095.40"
SFO - PHL,55732031710,S-PHL-SEA-4,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/55732031710,https://www.airlines-manager.com/aircraft/show/92390870,15:45,3:29,320,"730,738$","658,186$","$2,056.83","$56,095.40"
SFO - PHL,55738770120,S-PHL-SEA-3,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/55738770120,https://www.airlines-manager.com/aircraft/show/92390873,19:15,6:59,320,"730,738$","658,186$","$2,056.83","$56,095.40"
SFO - PHX,55704058018,S-BOS-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/55704058018,https://www.airlines-manager.com/aircraft/show/104901564,1:30,5:59,338,"323,043$","284,985$",$843.15,"$63,565.43"
SFO - PHX,55704058019,S-BOS-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/55704058019,https://www.airlines-manager.com/aircraft/show/104870960,2:30,6:59,338,"323,043$","284,985$",$843.15,"$63,565.43"
SFO - PHX,55708448736,S-BOS-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/55708448736,https://www.airlines-manager.com/aircraft/show/104874465,4:15,8:44,338,"323,043$","284,985$",$843.15,"$63,565.43"
SFO - PHX,55724951899,S-BOS-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/55724951899,https://www.airlines-manager.com/aircraft/show/104901544,12:00,16:29,338,"323,043$","284,985$",$843.15,"$63,565.43"
SFO - PHX,55732031801,S-BOS-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/55732031801,https://www.airlines-manager.com/aircraft/show/104864961,16:00,20:29,338,"323,043$","284,985$",$843.15,"$63,565.43"
SFO - PIT,55704058004,S-MEM-PIT-3,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/55704058004,https://www.airlines-manager.com/aircraft/show/98788935,1:15,11:59,310,"676,648$","621,492$","$2,004.81","$57,902.98"
SFO - PIT,55708448757,S-MEM-PIT-5,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/55708448757,https://www.airlines-manager.com/aircraft/show/98788933,4:15,14:59,310,"676,648$","621,492$","$2,004.81","$57,902.98"
SFO - PIT,55728562240,S-MEM-PIT-2,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/55728562240,https://www.airlines-manager.com/aircraft/show/98788936,13:00,23:44,310,"676,648$","621,492$","$2,004.81","$57,902.98"
SFO - PIT,55732031837,S-MEM-PIT-4,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/55732031837,https://www.airlines-manager.com/aircraft/show/98788934,16:00,2:44,310,"676,648$","621,492$","$2,004.81","$57,902.98"
SFO - PIT,55738770114,S-MEM-PIT-6,ERJ-175,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/55738770114,https://www.airlines-manager.com/aircraft/show/98675305,19:00,5:44,112,"317,025$","280,006$","$2,500.05","$26,087.52"
SFO - PIT,55744388994,S-MEM-PIT-1,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/55744388994,https://www.airlines-manager.com/aircraft/show/98788937,22:15,8:59,310,"676,648$","621,492$","$2,004.81","$57,902.98"
SFO - PSP,55708448763,S-ICT-BFF-2,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/55708448763,https://www.airlines-manager.com/aircraft/show/114912264,4:15,7:59,310,"200,274$","175,476$",$566.05,"$47,002.50"
SFO - PSP,55724951897,S-ICT-BFF-1,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/55724951897,https://www.airlines-manager.com/aircraft/show/114912267,11:45,15:29,310,"200,274$","175,476$",$566.05,"$47,002.50"
SFO - PSP,55728562283,S-ICT-BFF-5,ERJ-175,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/55728562283,https://www.airlines-manager.com/aircraft/show/114912306,13:15,16:59,112,"92,401$","76,790$",$685.63,"$20,568.75"
SFO - PSP,55732031741,S-ICT-BFF-4,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/55732031741,https://www.airlines-manager.com/aircraft/show/114912268,15:00,18:44,310,"200,274$","175,476$",$566.05,"$47,002.50"
SFO - PSP,55744388882,S-ICT-BFF-3,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/55744388882,https://www.airlines-manager.com/aircraft/show/114912263,21:00,0:44,279,"188,461$","164,020$",$587.89,"$43,933.93"
SFO - PVD,55704057807,S-PVD-BUF-4,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/55704057807,https://www.airlines-manager.com/aircraft/show/112650105,0:00,12:29,310,"763,375$","705,708$","$2,276.48","$56,532.02"
SFO - PVD,55708448916,S-PVD-BUF-5,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/55708448916,https://www.airlines-manager.com/aircraft/show/112650104,5:00,17:29,310,"763,375$","705,708$","$2,276.48","$56,532.02"
SFO - PVD,55728562257,S-PVD-BUF-1,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/55728562257,https://www.airlines-manager.com/aircraft/show/112650108,13:00,1:29,310,"763,375$","705,708$","$2,276.48","$56,532.02"
SFO - PVD,55735532981,S-PVD-BUF-2,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/55735532981,https://www.airlines-manager.com/aircraft/show/112650107,17:00,5:29,310,"763,375$","705,708$","$2,276.48","$56,532.02"
SFO - PVD,55738770108,S-PVD-BUF-3,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/55738770108,https://www.airlines-manager.com/aircraft/show/112650106,19:00,7:29,310,"763,375$","705,708$","$2,276.48","$56,532.02"
SFO - PWM,55704057872,S-KOA-PWM-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/55704057872,https://www.airlines-manager.com/aircraft/show/112650091,0:15,12:59,198,"576,974$","530,777$","$2,680.69","$41,684.06"
SFO - PWM,55708448762,S-KOA-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/55708448762,https://www.airlines-manager.com/aircraft/show/112650103,4:15,16:59,310,"771,182$","713,582$","$2,301.88","$56,040.47"
SFO - PWM,55714463615,S-KOA-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/55714463615,https://www.airlines-manager.com/aircraft/show/112650102,7:15,19:59,310,"771,182$","713,582$","$2,301.88","$56,040.47"
SFO - PWM,55728562361,S-KOA-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/55728562361,https://www.airlines-manager.com/aircraft/show/112650101,14:00,2:44,310,"771,182$","713,582$","$2,301.88","$56,040.47"
SFO - PWM,55732031840,S-KOA-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/55732031840,https://www.airlines-manager.com/aircraft/show/112650100,16:00,4:44,310,"771,182$","713,582$","$2,301.88","$56,040.47"
SFO - RAP,55708448877,S-FAR-BIL-1,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/55708448877,https://www.airlines-manager.com/aircraft/show/117782584,4:30,10:59,310,"399,527$","365,234$","$1,178.17","$56,334.29"
SFO - RAP,55718008621,S-FAR-BIL-4,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/55718008621,https://www.airlines-manager.com/aircraft/show/117782587,8:30,14:59,310,"399,527$","365,234$","$1,178.17","$56,334.29"
SFO - RAP,55732031746,S-FAR-BIL-3,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/55732031746,https://www.airlines-manager.com/aircraft/show/117782586,15:00,21:29,310,"399,527$","365,234$","$1,178.17","$56,334.29"
SFO - RAP,55741695636,S-FAR-BIL-2,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/55741695636,https://www.airlines-manager.com/aircraft/show/117782585,20:45,3:14,287,"382,020$","348,420$","$1,214.01","$53,740.87"
SFO - RDM,55704058016,S-MAF-FCA-5,ERJ-175,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/55704058016,https://www.airlines-manager.com/aircraft/show/119652600,1:15,5:14,112,"102,798$","87,608$",$782.21,"$21,993.64"
SFO - RDM,55711311618,S-MAF-FCA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/55711311618,https://www.airlines-manager.com/aircraft/show/120056761,6:00,9:59,272,"199,098$","180,421$",$663.31,"$45,293.97"
SFO - RDM,55728562157,S-MAF-FCA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/55728562157,https://www.airlines-manager.com/aircraft/show/120056758,13:00,16:59,272,"199,098$","180,421$",$663.31,"$45,293.97"
SFO - RDM,55738769965,S-MAF-FCA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/55738769965,https://www.airlines-manager.com/aircraft/show/120056759,18:00,21:59,272,"199,098$","180,421$",$663.31,"$45,293.97"
SFO - RDM,55746468194,S-MAF-FCA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/55746468194,https://www.airlines-manager.com/aircraft/show/120056760,23:15,3:14,272,"199,098$","180,421$",$663.31,"$45,293.97"
SFO - RDU,55708448908,S-PBI-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/55708448908,https://www.airlines-manager.com/aircraft/show/100301188,5:00,16:14,320,"712,851$","650,128$","$2,031.65","$57,874.90"
SFO - RDU,55714463597,S-PBI-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/55714463597,https://www.airlines-manager.com/aircraft/show/100301187,7:00,18:14,320,"712,851$","650,128$","$2,031.65","$57,874.90"
SFO - RDU,55718008648,S-PBI-RDU-5,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/55718008648,https://www.airlines-manager.com/aircraft/show/100301184,9:00,20:14,320,"712,851$","650,128$","$2,031.65","$57,874.90"
SFO - RDU,55735532967,S-PBI-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/55735532967,https://www.airlines-manager.com/aircraft/show/100301186,17:00,4:14,320,"712,851$","650,128$","$2,031.65","$57,874.90"
SFO - RDU,55738770094,S-PBI-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/55738770094,https://www.airlines-manager.com/aircraft/show/100301185,19:00,6:14,320,"712,851$","650,128$","$2,031.65","$57,874.90"
SFO - RIC,55711311637,S-ORF-RIC-1,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/55711311637,https://www.airlines-manager.com/aircraft/show/108328834,6:00,17:29,310,"726,691$","671,657$","$2,166.64","$58,489.72"
SFO - RIC,55714463671,S-ORF-RIC-2,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/55714463671,https://www.airlines-manager.com/aircraft/show/108328835,8:00,19:29,310,"726,691$","671,657$","$2,166.64","$58,489.72"
SFO - RIC,55721560638,S-ORF-RIC-5 B,A319-100,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/55721560638,https://www.airlines-manager.com/aircraft/show/108328833,10:00,21:29,198,"544,866$","500,734$","$2,528.96","$43,605.28"
SFO - RIC,55738769990,S-ORF-RIC-3,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/55738769990,https://www.airlines-manager.com/aircraft/show/108328836,18:00,5:29,310,"726,691$","671,657$","$2,166.64","$58,489.72"
SFO - RIC,55741695553,S-ORF-RIC-4,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/55741695553,https://www.airlines-manager.com/aircraft/show/108328837,20:00,7:29,310,"726,691$","671,657$","$2,166.64","$58,489.72"
SFO - RNO,55708448743,S-MCI-OMA-2,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/55708448743,https://www.airlines-manager.com/aircraft/show/88239554,4:15,6:59,320,"119,453$","93,133$",$291.04,"$34,073.05"
SFO - RNO,55728562387,S-MCI-OMA-1,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/55728562387,https://www.airlines-manager.com/aircraft/show/88239553,14:15,16:59,320,"119,453$","93,133$",$291.04,"$34,073.05"
SFO - RNO,55728562388,S-MCI-OMA-5 B,A319-100,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/55728562388,https://www.airlines-manager.com/aircraft/show/105223003,14:15,16:59,198,"90,385$","72,533$",$366.33,"$26,536.46"
SFO - RNO,55732031814,S-MCI-OMA-4,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/55732031814,https://www.airlines-manager.com/aircraft/show/88239557,16:00,18:44,320,"119,453$","93,133$",$291.04,"$34,073.05"
SFO - RNO,55741695606,S-MCI-OMA-3,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/55741695606,https://www.airlines-manager.com/aircraft/show/88239555,20:30,23:14,320,"119,453$","93,133$",$291.04,"$34,073.05"
SFO - ROC,55704057767,S-ROC-COS-2,A321neo,https://www.airlines-manager.com/network/showline/50555363,https://www.airlines-manager.com/network/showflight/55704057767,https://www.airlines-manager.com/aircraft/show/120112475,0:00,11:14,338,"771,233$","721,249$","$2,133.87","$64,206.14"
SFO - ROC,55714463569,S-ROC-COS-4,A321neo,https://www.airlines-manager.com/network/showline/50555363,https://www.airlines-manager.com/network/showflight/55714463569,https://www.airlines-manager.com/aircraft/show/120051490,6:45,17:59,338,"771,233$","721,249$","$2,133.87","$64,206.14"
SFO - ROC,55732031695,S-ROC-COS-1,A321neo,https://www.airlines-manager.com/network/showline/50555363,https://www.airlines-manager.com/network/showflight/55732031695,https://www.airlines-manager.com/aircraft/show/120112476,15:00,2:14,338,"771,233$","721,249$","$2,133.87","$64,206.14"
SFO - ROC,55741695576,S-ROC-COS-3,A321neo,https://www.airlines-manager.com/network/showline/50555363,https://www.airlines-manager.com/network/showflight/55741695576,https://www.airlines-manager.com/aircraft/show/120112474,20:15,7:29,338,"771,233$","721,249$","$2,133.87","$64,206.14"
SFO - RSW,55708448922,S-RSW-BDL-3,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/55708448922,https://www.airlines-manager.com/aircraft/show/84915100,5:15,16:59,320,"730,424$","665,610$","$2,080.03","$56,728.13"
SFO - RSW,55714463607,S-RSW-BDL-4,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/55714463607,https://www.airlines-manager.com/aircraft/show/84915101,7:15,18:59,320,"730,424$","665,610$","$2,080.03","$56,728.13"
SFO - RSW,55735532960,S-RSW-BDL-1,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/55735532960,https://www.airlines-manager.com/aircraft/show/84915098,17:00,4:44,320,"730,424$","665,610$","$2,080.03","$56,728.13"
SFO - RSW,55738770091,S-RSW-BDL-2,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/55738770091,https://www.airlines-manager.com/aircraft/show/84915099,19:00,6:44,320,"730,424$","665,610$","$2,080.03","$56,728.13"
SFO - RSW,55744388868,S-RSW-BDL-5,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/55744388868,https://www.airlines-manager.com/aircraft/show/84915102,21:00,8:44,320,"730,424$","665,610$","$2,080.03","$56,728.13"
SFO - SAN,55714463659,S-PHL-SEA-1,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/55714463659,https://www.airlines-manager.com/aircraft/show/92390872,8:00,11:44,320,"217,287$","184,448$",$576.40,"$49,405.71"
SFO - SAN,55721560707,S-PHL-SEA-5,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/55721560707,https://www.airlines-manager.com/aircraft/show/92390869,11:00,14:44,320,"217,287$","184,448$",$576.40,"$49,405.71"
SFO - SAN,55724951913,S-PHL-SEA-4,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/55724951913,https://www.airlines-manager.com/aircraft/show/92390870,12:00,15:44,320,"217,287$","184,448$",$576.40,"$49,405.71"
SFO - SAN,55732031777,S-PHL-SEA-3,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/55732031777,https://www.airlines-manager.com/aircraft/show/92390873,15:30,19:14,320,"217,287$","184,448$",$576.40,"$49,405.71"
SFO - SAN,55741695577,S-PHL-SEA-2,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/55741695577,https://www.airlines-manager.com/aircraft/show/92390871,20:15,23:59,317,"216,055$","183,252$",$578.08,"$49,085.36"
SFO - SAT,55704057861,S-JAX-SAT-1,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/55704057861,https://www.airlines-manager.com/aircraft/show/86375568,0:15,8:14,310,"498,478$","457,208$","$1,474.86","$57,270.31"
SFO - SAT,55704057862,S-JAX-SAT-2,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/55704057862,https://www.airlines-manager.com/aircraft/show/86371267,2:15,10:14,310,"498,478$","457,208$","$1,474.86","$57,270.31"
SFO - SAT,55728562225,S-JAX-SAT-3,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/55728562225,https://www.airlines-manager.com/aircraft/show/86385102,13:00,20:59,310,"498,478$","457,208$","$1,474.86","$57,270.31"
SFO - SAT,55732031726,S-JAX-SAT-4,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/55732031726,https://www.airlines-manager.com/aircraft/show/86378760,15:00,22:59,310,"498,478$","457,208$","$1,474.86","$57,270.31"
SFO - SAT,55735533003,S-JAX-SAT-5,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/55735533003,https://www.airlines-manager.com/aircraft/show/86377315,17:15,1:14,310,"498,478$","457,208$","$1,474.86","$57,270.31"
SFO - SAV,55711311614,S-SAV-JAN-1,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/55711311614,https://www.airlines-manager.com/aircraft/show/114912265,5:45,16:59,310,"696,685$","643,380$","$2,075.42","$57,274.18"
SFO - SAV,55714463651,S-SAV-JAN-4,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/55714463651,https://www.airlines-manager.com/aircraft/show/114912270,7:45,18:59,310,"696,685$","643,380$","$2,075.42","$57,274.18"
SFO - SAV,55732031748,S-SAV-JAN-5 B,A319-100,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/55732031748,https://www.airlines-manager.com/aircraft/show/114917486,15:00,2:14,198,"523,286$","480,541$","$2,426.97","$42,778.13"
SFO - SAV,55738770109,S-SAV-JAN-3,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/55738770109,https://www.airlines-manager.com/aircraft/show/114912269,19:00,6:14,310,"696,685$","643,380$","$2,075.42","$57,274.18"
SFO - SAV,55741695612,S-SAV-JAN-2,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/55741695612,https://www.airlines-manager.com/aircraft/show/114912266,20:30,7:44,310,"696,685$","643,380$","$2,075.42","$57,274.18"
SFO - SDF,55704058001,S-SDF-LIT-2,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/55704058001,https://www.airlines-manager.com/aircraft/show/94886628,1:15,10:59,310,"614,512$","564,269$","$1,820.22","$57,972.84"
SFO - SDF,55704058002,S-SDF-LIT-4,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/55704058002,https://www.airlines-manager.com/aircraft/show/106453500,2:15,11:59,310,"614,512$","564,269$","$1,820.22","$57,972.84"
SFO - SDF,55728562351,S-SDF-LIT-1,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/55728562351,https://www.airlines-manager.com/aircraft/show/106453499,14:00,23:44,310,"614,512$","564,269$","$1,820.22","$57,972.84"
SFO - SDF,55735532923,S-SDF-LIT-3,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/55735532923,https://www.airlines-manager.com/aircraft/show/94886627,16:30,2:14,310,"614,512$","564,269$","$1,820.22","$57,972.84"
SFO - SDF,55735532924,S-SDF-LIT-5,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/55735532924,https://www.airlines-manager.com/aircraft/show/106453498,17:30,3:14,310,"614,512$","564,269$","$1,820.22","$57,972.84"
SFO - SEA,55704058239,S-PHL-SEA-5,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/55704058239,https://www.airlines-manager.com/aircraft/show/92390869,2:45,7:29,320,"301,272$","257,664$",$805.20,"$54,436.06"
SFO - SEA,55704058240,S-PHL-SEA-4,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/55704058240,https://www.airlines-manager.com/aircraft/show/92390870,3:30,8:14,320,"301,272$","257,664$",$805.20,"$54,436.06"
SFO - SEA,55711311599,S-PHL-SEA-6 B,A319-100,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/55711311599,https://www.airlines-manager.com/aircraft/show/97900730,5:30,10:14,198,"229,629$","199,471$","$1,007.43","$42,141.76"
SFO - SEA,55714463595,S-PHL-SEA-3,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/55714463595,https://www.airlines-manager.com/aircraft/show/92390873,7:00,11:44,320,"301,272$","257,664$",$805.20,"$54,436.06"
SFO - SEA,55724951914,S-PHL-SEA-2,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/55724951914,https://www.airlines-manager.com/aircraft/show/92390871,12:00,16:44,320,"301,272$","257,664$",$805.20,"$54,436.06"
SFO - SEA,55747839763,S-PHL-SEA-1,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/55747839763,https://www.airlines-manager.com/aircraft/show/92390872,23:45,4:29,301,"290,460$","247,200$",$821.26,"$52,225.35"
SFO - SHA,55741695559,S-168B-4 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/55741695559,https://www.airlines-manager.com/aircraft/show/87933798,20:00,19:59,1046,"4,655,897$","4,320,364$","$4,130.37","$180,140.26"
SFO - SHA,55744388972,S-168A-4 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/55744388972,https://www.airlines-manager.com/aircraft/show/86817628,22:00,21:59,1046,"4,655,897$","4,320,364$","$4,130.37","$180,140.26"
SFO - SLC,55704057781,S-ORD-DTW-4,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/55704057781,https://www.airlines-manager.com/aircraft/show/101045331,0:00,4:29,400,"353,831$","312,930$",$782.33,"$69,798.51"
SFO - SLC,55704057782,S-ORD-DTW-2,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/55704057782,https://www.airlines-manager.com/aircraft/show/101045333,1:00,5:29,400,"353,831$","312,930$",$782.33,"$69,798.51"
SFO - SLC,55704057783,S-ORD-DTW-5,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/55704057783,https://www.airlines-manager.com/aircraft/show/101045330,3:00,7:29,400,"353,831$","312,930$",$782.33,"$69,798.51"
SFO - SLC,55714463658,S-ORD-DTW-1,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/55714463658,https://www.airlines-manager.com/aircraft/show/101045334,8:00,12:29,400,"353,831$","312,930$",$782.33,"$69,798.51"
SFO - SLC,55732031699,S-ORD-DTW-3,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/55732031699,https://www.airlines-manager.com/aircraft/show/101045332,15:00,19:29,220,"255,886$","217,843$",$990.20,"$48,589.52"
SFO - SMF,55718008612,S-SDF-LIT-1,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/55718008612,https://www.airlines-manager.com/aircraft/show/106453499,8:30,10:59,310,"83,132$","62,550$",$201.77,"$25,187.92"
SFO - SMF,55728562340,S-SDF-LIT-3,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/55728562340,https://www.airlines-manager.com/aircraft/show/94886627,14:00,16:29,310,"83,132$","62,550$",$201.77,"$25,187.92"
SFO - SMF,55732031737,S-SDF-LIT-5,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/55732031737,https://www.airlines-manager.com/aircraft/show/106453498,15:00,17:29,310,"83,132$","62,550$",$201.77,"$25,187.92"
SFO - SMF,55746468160,S-SDF-LIT-2,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/55746468160,https://www.airlines-manager.com/aircraft/show/94886628,22:45,1:14,310,"83,132$","62,550$",$201.77,"$25,187.92"
SFO - SMF,55747839774,S-SDF-LIT-4,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/55747839774,https://www.airlines-manager.com/aircraft/show/106453500,23:45,2:14,310,"83,132$","62,550$",$201.77,"$25,187.92"
SFO - STL,55714463573,S-MSY-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/55714463573,https://www.airlines-manager.com/aircraft/show/98075265,6:45,15:29,320,"557,439$","503,685$","$1,574.02","$57,673.85"
SFO - STL,55718008631,S-MSY-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/55718008631,https://www.airlines-manager.com/aircraft/show/98075263,8:45,17:29,320,"557,439$","503,685$","$1,574.02","$57,673.85"
SFO - STL,55728562272,S-MSY-STL-6,ERJ-175,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/55728562272,https://www.airlines-manager.com/aircraft/show/103534666,13:00,21:44,112,"262,228$","230,306$","$2,056.30","$26,370.92"
SFO - STL,55732031818,S-MSY-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/55732031818,https://www.airlines-manager.com/aircraft/show/98075266,16:00,0:44,320,"557,439$","503,685$","$1,574.02","$57,673.85"
SFO - STL,55738769977,S-MSY-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/55738769977,https://www.airlines-manager.com/aircraft/show/98075264,18:00,2:44,320,"557,439$","503,685$","$1,574.02","$57,673.85"
SFO - STL,55746468121,S-MSY-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/55746468121,https://www.airlines-manager.com/aircraft/show/98075267,22:30,7:14,320,"557,439$","503,685$","$1,574.02","$57,673.85"
SFO - SYR,55704057797,S-GSO-SYR-2,737-900ER,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/55704057797,https://www.airlines-manager.com/aircraft/show/120056763,0:00,11:29,320,"714,764$","654,987$","$2,046.83","$57,038.06"
SFO - SYR,55724951936,S-GSO-SYR-3,737-900ER,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/55724951936,https://www.airlines-manager.com/aircraft/show/120056762,12:00,23:29,320,"714,764$","654,987$","$2,046.83","$57,038.06"
SFO - SYR,55728562222,S-GSO-SYR-4,737-900ER,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/55728562222,https://www.airlines-manager.com/aircraft/show/119550235,13:00,0:29,320,"714,764$","654,987$","$2,046.83","$57,038.06"
SFO - SYR,55738770054,S-GSO-SYR-5,A319-100,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/55738770054,https://www.airlines-manager.com/aircraft/show/120112473,18:30,5:59,198,"537,637$","493,892$","$2,494.40","$43,009.46"
SFO - SYR,55746468177,S-GSO-SYR-1,737-900ER,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/55746468177,https://www.airlines-manager.com/aircraft/show/120056764,23:00,10:29,320,"714,764$","654,987$","$2,046.83","$57,038.06"
SFO - TFU,55724951977,S-168B-3 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/55724951977,https://www.airlines-manager.com/aircraft/show/87566902,12:30,14:59,1046,"5,238,347$","4,830,688$","$4,618.25","$1,945,243.49"
SFO - TFU,55728562404,S-168A-3 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/55728562404,https://www.airlines-manager.com/aircraft/show/86483501,14:30,16:59,1046,"5,238,347$","4,830,688$","$4,618.25","$1,945,243.49"
SFO - TPA,55704057960,S-FLL-TPA-1,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/55704057960,https://www.airlines-manager.com/aircraft/show/97955544,1:00,12:14,320,"704,621$","638,570$","$1,995.53","$56,845.99"
SFO - TPA,55708448906,S-FLL-TPA-3,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/55708448906,https://www.airlines-manager.com/aircraft/show/97955542,5:00,16:14,320,"704,621$","638,570$","$1,995.53","$56,845.99"
SFO - TPA,55714463660,S-FLL-TPA-5,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/55714463660,https://www.airlines-manager.com/aircraft/show/97955540,8:00,19:14,320,"704,621$","638,570$","$1,995.53","$56,845.99"
SFO - TPA,55728562192,S-FLL-TPA-2,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/55728562192,https://www.airlines-manager.com/aircraft/show/97955543,13:00,0:14,320,"704,621$","638,570$","$1,995.53","$56,845.99"
SFO - TPA,55735532965,S-FLL-TPA-4,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/55735532965,https://www.airlines-manager.com/aircraft/show/97955541,17:00,4:14,320,"704,621$","638,570$","$1,995.53","$56,845.99"
SFO - TPA,55741695562,S-FLL-TPA-6 B,A319-100,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/55741695562,https://www.airlines-manager.com/aircraft/show/97900729,20:00,7:29,198,"531,620$","483,764$","$2,443.25","$42,127.49"
SFO - TPE,55741695560,S-168B-5 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/55741695560,https://www.airlines-manager.com/aircraft/show/87933799,20:00,21:14,1046,"4,782,404$","4,432,378$","$4,237.46","$3,593,820.00"
SFO - TPE,55744388971,S-168A-5 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/55744388971,https://www.airlines-manager.com/aircraft/show/86808589,22:00,23:14,1029,"4,727,967$","4,381,347$","$4,257.87","$3,552,443.51"
SFO - TUL,55708448890,S-TUL-DSM-2,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/55708448890,https://www.airlines-manager.com/aircraft/show/108410857,4:45,12:29,320,"493,680$","448,182$","$1,400.57","$57,954.57"
SFO - TUL,55714463606,S-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/55714463606,https://www.airlines-manager.com/aircraft/show/108466264,7:00,14:44,112,"232,916$","205,908$","$1,838.46","$26,626.03"
SFO - TUL,55732031718,S-TUL-DSM-1,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/55732031718,https://www.airlines-manager.com/aircraft/show/108410856,15:00,22:44,320,"493,680$","448,182$","$1,400.57","$57,954.57"
SFO - TUL,55732031719,S-TUL-DSM-4,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/55732031719,https://www.airlines-manager.com/aircraft/show/108410859,15:45,23:29,320,"493,680$","448,182$","$1,400.57","$57,954.57"
SFO - TUL,55741695629,S-TUL-DSM-3,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/55741695629,https://www.airlines-manager.com/aircraft/show/108410858,20:45,4:29,320,"493,680$","448,182$","$1,400.57","$57,954.57"
SFO - TUS,55714463664,S-OKC-FSD-1,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/55714463664,https://www.airlines-manager.com/aircraft/show/107160378,8:00,12:59,320,"319,228$","284,067$",$887.71,"$57,003.41"
SFO - TUS,55718008682,S-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/55718008682,https://www.airlines-manager.com/aircraft/show/107132310,9:30,14:29,112,"152,035$","132,268$","$1,180.96","$26,542.07"
SFO - TUS,55721560665,S-OKC-FSD-4,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/55721560665,https://www.airlines-manager.com/aircraft/show/107160381,10:30,15:29,320,"319,228$","284,067$",$887.71,"$57,003.41"
SFO - TUS,55732031823,S-OKC-FSD-3,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/55732031823,https://www.airlines-manager.com/aircraft/show/107160380,16:00,20:59,320,"319,228$","284,067$",,
SFO - TUS,55746468218,S-OKC-FSD-2,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/55746468218,https://www.airlines-manager.com/aircraft/show/107160379,23:30,4:29,320,"319,228$","284,067$",,
SFO - TYS,55711311610,S-TYS-MSN-2,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/55711311610,https://www.airlines-manager.com/aircraft/show/117782564,5:45,15:59,320,"642,888$","588,205$",,
SFO - TYS,55714463628,S-TYS-MSN-1,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/55714463628,https://www.airlines-manager.com/aircraft/show/117782565,7:30,17:44,320,"642,888$","588,205$",,
SFO - TYS,55732031850,S-TYS-MSN-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/55732031850,https://www.airlines-manager.com/aircraft/show/117782582,16:00,2:14,198,"483,910$","444,071$",,
SFO - TYS,55741695492,S-TYS-MSN-3,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/55741695492,https://www.airlines-manager.com/aircraft/show/117782563,19:30,5:44,320,"642,888$","588,205$",,
SFO - TYS,55741695493,S-TYS-MSN-4,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/55741695493,https://www.airlines-manager.com/aircraft/show/117782562,20:45,6:59,320,"642,888$","588,205$",,
SFO - YEG,55704058331,S-YEG-YYC-2,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/55704058331,https://www.airlines-manager.com/aircraft/show/117782560,3:30,9:59,320,"420,949$","378,331$",,
SFO - YEG,55718008595,S-YEG-YYC-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/55718008595,https://www.airlines-manager.com/aircraft/show/117782581,8:15,14:59,198,"317,291$","287,019$",,
SFO - YEG,55728562219,S-YEG-YYC-1,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/55728562219,https://www.airlines-manager.com/aircraft/show/117782561,13:00,19:29,320,"420,949$","378,331$",,
SFO - YEG,55732031721,S-YEG-YYC-4,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/55732031721,https://www.airlines-manager.com/aircraft/show/116932364,15:00,21:29,320,"420,949$","378,331$",,
SFO - YEG,55744388925,S-YEG-YYC-3,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/55744388925,https://www.airlines-manager.com/aircraft/show/117782559,21:30,3:59,320,"420,949$","378,331$",,
SFO - YOW,55704057845,S-YOW-CUN-3,757-300,https://www.airlines-manager.com/network/showline/50555301,https://www.airlines-manager.com/network/showflight/55704057845,https://www.airlines-manager.com/aircraft/show/120056766,0:15,11:29,400,"934,986$","864,487$",,
SFO - YOW,55704057846,S-YOW-CUN-4,757-300,https://www.airlines-manager.com/network/showline/50555301,https://www.airlines-manager.com/network/showflight/55704057846,https://www.airlines-manager.com/aircraft/show/120056765,1:15,12:29,400,"934,986$","864,487$",,
SFO - YOW,55728562185,S-YOW-CUN-1,757-300,https://www.airlines-manager.com/network/showline/50555301,https://www.airlines-manager.com/network/showflight/55728562185,https://www.airlines-manager.com/aircraft/show/120056768,13:00,0:14,400,"934,986$","864,487$",,
SFO - YOW,55728562186,S-YOW-CUN-2,757-300,https://www.airlines-manager.com/network/showline/50555301,https://www.airlines-manager.com/network/showflight/55728562186,https://www.airlines-manager.com/aircraft/show/120056767,14:00,1:14,400,"934,986$","864,487$",,
SFO - YUL,55704057915,S-YYZ-YUL-1,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/55704057915,https://www.airlines-manager.com/aircraft/show/115413609,0:45,12:29,400,"926,903$","850,879$",,
SFO - YUL,55711311628,S-YYZ-YUL-4,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/55711311628,https://www.airlines-manager.com/aircraft/show/115413612,6:00,17:44,400,"926,903$","850,879$",,
SFO - YUL,55728562305,S-YYZ-YUL-2,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/55728562305,https://www.airlines-manager.com/aircraft/show/115413610,14:00,1:44,400,"926,903$","850,879$",,
SFO - YUL,55735532935,S-YYZ-YUL-3,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/55735532935,https://www.airlines-manager.com/aircraft/show/115413611,16:45,4:29,400,"926,903$","850,879$",,
SFO - YUL,55738770061,S-YYZ-YUL- 5,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/55738770061,https://www.airlines-manager.com/aircraft/show/91126653,18:45,6:29,400,"926,903$","850,879$",,
SFO - YVR,55704057918,S-MSY-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/55704057918,https://www.airlines-manager.com/aircraft/show/98075266,0:45,5:59,320,"331,374$","290,411$",,
SFO - YVR,55704057919,S-MSY-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/55704057919,https://www.airlines-manager.com/aircraft/show/98075264,2:45,7:59,320,"331,374$","290,411$",,
SFO - YVR,55714463610,S-MSY-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/55714463610,https://www.airlines-manager.com/aircraft/show/98075267,7:15,12:29,320,"331,374$","290,411$",,
SFO - YVR,55732031817,S-MSY-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/55732031817,https://www.airlines-manager.com/aircraft/show/98075265,16:00,21:14,320,"331,374$","290,411$",,
SFO - YVR,55738769976,S-MSY-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/55738769976,https://www.airlines-manager.com/aircraft/show/98075263,18:00,23:14,320,"331,374$","290,411$",,
SFO - YVR,55744388954,S-MSY-STL-6,ERJ-175,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/55744388954,https://www.airlines-manager.com/aircraft/show/103534666,21:45,2:59,112,"156,970$","134,156$",,
SFO - YYC,55708448719,S-YEG-YYC-3,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/55708448719,https://www.airlines-manager.com/aircraft/show/117782559,4:00,9:59,320,"386,674$","342,885$",,
SFO - YYC,55728562218,S-YEG-YYC-2,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/55728562218,https://www.airlines-manager.com/aircraft/show/117782560,13:00,18:59,320,"386,674$","342,885$",,
SFO - YYC,55732031749,S-YEG-YYC-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/55732031749,https://www.airlines-manager.com/aircraft/show/117782581,15:00,20:59,198,"290,770$","259,950$",,
SFO - YYC,55741695491,S-YEG-YYC-1,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/55741695491,https://www.airlines-manager.com/aircraft/show/117782561,19:30,1:29,320,"386,674$","342,885$",,
SFO - YYC,55744388924,S-YEG-YYC-4,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/55744388924,https://www.airlines-manager.com/aircraft/show/116932364,21:30,3:29,320,"386,674$","342,885$",,
SFO - YYZ,55704058063,S-YYZ-YUL-2,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/55704058063,https://www.airlines-manager.com/aircraft/show/115413610,1:45,12:29,400,"886,073$","807,953$",,
SFO - YYZ,55711311627,S-YYZ-YUL-3,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/55711311627,https://www.airlines-manager.com/aircraft/show/115413611,6:00,16:44,400,"886,073$","807,953$",,
SFO - YYZ,55714463657,S-YYZ-YUL- 5,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/55714463657,https://www.airlines-manager.com/aircraft/show/91126653,8:00,18:44,400,"886,073$","807,953$",,
SFO - YYZ,55728562304,S-YYZ-YUL-1,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/55728562304,https://www.airlines-manager.com/aircraft/show/115413609,14:00,0:44,400,"886,073$","807,953$",,
SFO - YYZ,55735533036,S-YYZ-YUL-4,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/55735533036,https://www.airlines-manager.com/aircraft/show/115413612,17:45,4:29,400,"886,073$","807,953$",,`;
