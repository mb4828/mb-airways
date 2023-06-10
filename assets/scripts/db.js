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
		hubs: ['ewr', 'sfo', 'iah', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
		tz: 'US/Mountain'
	},
	{
		name: 'Boston Logan International Airport (BOS)',
		city: 'Boston, USA - Massachusetts 🇺🇸',
		pos: [42.365961658704904, -71.00960315045923],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['sfo', 'iah', 'mia', 'ord'],
		tz: 'US/Pacific'
	},
	{
		name: 'Baltimore/Washington International Airport (BWI)',
		city: 'Baltimore, USA - Maryland 🇺🇸',
		pos: [39.177536943139835, -76.66830640614698],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
		tz: 'US/Eastern'
	},
	{
		name: 'Charlotte Douglas International Airport (CLT)',
		city: 'Charlotte, USA - North Carolina 🇺🇸',
		pos: [35.214358753004724, -80.94714294071665],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl', 'ord'],
		tz: 'US/Eastern'
	},
	{
		name: 'John Glenn Columbus International Airport (CMH)',
		city: 'Columbus, USA - Ohio 🇺🇸',
		pos: [39.99990700422163, -82.88685483700165],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['sfo', 'iah', 'mia', 'hnl', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['sfo', 'iah', 'ord'],
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
		hubs: ['sfo', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'ord'],
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
		hubs: ['sfo', 'iah', 'mia', 'hnl', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
EWR - ABQ,56862956279,E-ABQ-AUS-2,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/56862956279,https://www.airlines-manager.com/aircraft/show/90717078,0:45,9:59,310,"$575,728.00","$529,752.00","$1,708.88","$57,373.86"
EWR - ABQ,56862956280,E-ABQ-AUS-5,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/56862956280,https://www.airlines-manager.com/aircraft/show/95950199,2:45,11:59,310,"$575,728.00","$529,752.00","$1,708.88","$57,373.86"
EWR - ABQ,56880042600,E-ABQ-AUS-1,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/56880042600,https://www.airlines-manager.com/aircraft/show/90717079,10:00,19:14,310,"$575,728.00","$529,752.00","$1,708.88","$57,373.86"
EWR - ABQ,56892624190,E-ABQ-AUS-3,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/56892624190,https://www.airlines-manager.com/aircraft/show/90717077,16:45,1:59,310,"$575,728.00","$529,752.00","$1,708.88","$57,373.86"
EWR - ABQ,56895754228,E-ABQ-AUS-4,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/56895754228,https://www.airlines-manager.com/aircraft/show/90717076,17:45,2:59,310,"$575,728.00","$529,752.00","$1,708.88","$57,373.86"
EWR - ALB,56862956213,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/56862956213,https://www.airlines-manager.com/aircraft/show/119220543,0:15,2:59,310,"$97,112.00","$79,379.00",$256.06,"$29,041.10"
EWR - ALB,56866822915,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/56866822915,https://www.airlines-manager.com/aircraft/show/119220542,4:45,7:29,310,"$97,112.00","$79,379.00",$256.06,"$29,041.10"
EWR - ALB,56892624133,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/56892624133,https://www.airlines-manager.com/aircraft/show/119220545,16:00,18:44,310,"$97,112.00","$79,379.00",$256.06,"$29,041.10"
EWR - ALB,56901278212,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/56901278212,https://www.airlines-manager.com/aircraft/show/119220544,20:30,23:14,310,"$97,112.00","$79,379.00",$256.06,"$29,041.10"
EWR - AMS,56883365070,E-56B-4 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/56883365070,https://www.airlines-manager.com/aircraft/show/94521247,11:30,2:44,748,"$2,330,925.00","$2,086,099.00","$2,788.90","$136,943.04"
EWR - AMS,56886798203,E-56B-2 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/56886798203,https://www.airlines-manager.com/aircraft/show/90656556,13:15,4:29,748,"$2,330,925.00","$2,086,099.00","$2,788.90","$136,943.04"
EWR - AMS,56889535317,E-56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/56889535317,https://www.airlines-manager.com/aircraft/show/89124072,15:00,6:14,748,"$2,089,149.00","$1,905,958.00","$2,548.07","$125,117.59"
EWR - ANC,56880042544,E-STL-PIT-3,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/56880042544,https://www.airlines-manager.com/aircraft/show/115400546,10:00,0:59,338,"$1,007,405.00","$944,321.00","$2,793.85","$63,024.76"
EWR - ANC,56886798199,E-STL-PIT-2,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/56886798199,https://www.airlines-manager.com/aircraft/show/115400547,13:15,4:14,338,"$1,007,405.00","$944,321.00","$2,793.85","$63,024.76"
EWR - ANC,56898577515,E-STL-PIT-1,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/56898577515,https://www.airlines-manager.com/aircraft/show/115400548,18:45,9:44,338,"$1,007,405.00","$944,321.00","$2,793.85","$63,024.76"
EWR - ANC,56903707075,E-STL-PIT-4,A321neo-LR,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/56903707075,https://www.airlines-manager.com/aircraft/show/103406580,21:45,12:44,338,"$1,016,769.00","$951,951.00","$2,816.42","$63,533.99"
EWR - ARN,56862956691,E-56D-1 E,787-10,https://www.airlines-manager.com/network/showline/50072203,https://www.airlines-manager.com/network/showflight/56862956691,https://www.airlines-manager.com/aircraft/show/118644436,3:45,19:44,648,"$1,976,114.00","$1,844,631.00","$2,846.65","$115,409.66"
EWR - ARN,56886798047,E-56D-3 E,787-10,https://www.airlines-manager.com/network/showline/50072203,https://www.airlines-manager.com/network/showflight/56886798047,https://www.airlines-manager.com/aircraft/show/118644438,12:45,4:44,648,"$1,976,114.00","$1,844,631.00","$2,846.65","$115,409.66"
EWR - ARN,56898577518,E-56D-5 E,787-10,https://www.airlines-manager.com/network/showline/50072203,https://www.airlines-manager.com/network/showflight/56898577518,https://www.airlines-manager.com/aircraft/show/118644440,18:45,10:44,648,"$1,976,114.00","$1,844,631.00","$2,846.65","$115,409.66"
EWR - ATH,56862956164,E-84A-7 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/56862956164,https://www.airlines-manager.com/aircraft/show/94521249,0:00,19:59,852,"$3,250,987.00","$2,958,694.00","$3,472.65","$148,058.08"
EWR - ATH,56898577674,E-84A-4 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/56898577674,https://www.airlines-manager.com/aircraft/show/90656551,19:45,15:44,852,"$3,250,987.00","$2,958,694.00","$3,472.65","$148,058.08"
EWR - ATL,56880042554,E-DFW-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/56880042554,https://www.airlines-manager.com/aircraft/show/90489724,10:00,14:59,320,"$317,565.00","$256,248.00",$800.78,"$51,421.00"
EWR - ATL,56889535217,E-DFW-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/56889535217,https://www.airlines-manager.com/aircraft/show/90489726,14:15,19:14,320,"$317,565.00","$256,248.00",$800.78,"$51,421.00"
EWR - ATL,56895754194,E-DFW-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/56895754194,https://www.airlines-manager.com/aircraft/show/90489725,17:30,22:29,320,"$317,565.00","$256,248.00",$800.78,"$51,421.00"
EWR - ATL,56895754195,E-DFW-ATL-6 B,A319-100,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/56895754195,https://www.airlines-manager.com/aircraft/show/105222360,18:30,23:29,198,"$241,826.00","$199,756.00","$1,008.87","$40,084.82"
EWR - ATL,56898577654,E-DFW-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/56898577654,https://www.airlines-manager.com/aircraft/show/86238752,19:45,0:44,320,"$317,565.00","$256,248.00",$800.78,"$51,421.00"
EWR - ATL,56903707135,E-DFW-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/56903707135,https://www.airlines-manager.com/aircraft/show/86238753,22:15,3:14,320,"$317,565.00","$256,248.00",$800.78,"$51,421.00"
EWR - AUS,56862956489,E-ABQ-AUS-3,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/56862956489,https://www.airlines-manager.com/aircraft/show/90717077,2:00,9:59,310,"$501,297.00","$460,053.00","$1,484.04","$57,626.68"
EWR - AUS,56862956490,E-ABQ-AUS-4,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/56862956490,https://www.airlines-manager.com/aircraft/show/90717076,3:00,10:59,310,"$501,297.00","$460,053.00","$1,484.04","$57,626.68"
EWR - AUS,56880042599,E-ABQ-AUS-2,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/56880042599,https://www.airlines-manager.com/aircraft/show/90717078,10:00,17:59,310,"$501,297.00","$460,053.00","$1,484.04","$57,626.68"
EWR - AUS,56883365122,E-ABQ-AUS-5,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/56883365122,https://www.airlines-manager.com/aircraft/show/95950199,12:00,19:59,310,"$501,297.00","$460,053.00","$1,484.04","$57,626.68"
EWR - AUS,56898577611,E-ABQ-AUS-1,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/56898577611,https://www.airlines-manager.com/aircraft/show/90717079,19:15,3:14,310,"$501,297.00","$460,053.00","$1,484.04","$57,626.68"
EWR - BCN,56892624074,E-84A-5 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/56892624074,https://www.airlines-manager.com/aircraft/show/94521250,15:45,7:44,852,"$2,628,418.00","$2,386,121.00","$2,800.61","$149,288.07"
EWR - BCN,56901278165,E-84A-2 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/56901278165,https://www.airlines-manager.com/aircraft/show/94521252,20:00,11:59,852,"$2,628,418.00","$2,386,121.00","$2,800.61","$149,288.07"
EWR - BDA,56876734177,E-YEG-BFF-5 B,A319-100,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/56876734177,https://www.airlines-manager.com/aircraft/show/115493369,8:45,13:59,198,"$244,232.00","$222,459.00","$1,123.53","$42,508.09"
EWR - BDA,56880042741,E-YEG-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/56880042741,https://www.airlines-manager.com/aircraft/show/98936170,11:00,16:14,320,"$322,411.00","$291,621.00",$911.32,"$55,723.76"
EWR - BDA,56886798112,E-YEG-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/56886798112,https://www.airlines-manager.com/aircraft/show/98936171,13:00,18:14,320,"$322,411.00","$291,621.00",$911.32,"$55,723.76"
EWR - BDA,56901278254,E-YEG-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/56901278254,https://www.airlines-manager.com/aircraft/show/98936168,21:00,2:14,320,"$322,411.00","$291,621.00",$911.32,"$55,723.76"
EWR - BDA,56903707168,E-YEG-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/56903707168,https://www.airlines-manager.com/aircraft/show/98936169,22:30,3:44,254,"$260,902.00","$231,842.00",$912.76,"$44,301.02"
EWR - BDL,56862956325,E-COS-ICT-4,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/56862956325,https://www.airlines-manager.com/aircraft/show/108834811,1:00,3:29,310,"$89,797.00","$71,469.00",$230.55,"$28,779.46"
EWR - BDL,56876734225,E-COS-ICT-5,ERJ-175,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/56876734225,https://www.airlines-manager.com/aircraft/show/108466265,9:30,11:59,112,"$38,517.00","$27,319.00",$243.92,"$11,000.94"
EWR - BDL,56886798281,E-COS-ICT-3,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/56886798281,https://www.airlines-manager.com/aircraft/show/108834810,14:00,16:29,310,"$89,797.00","$71,469.00",$230.55,"$28,779.46"
EWR - BDL,56892624127,E-COS-ICT-2,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/56892624127,https://www.airlines-manager.com/aircraft/show/108834809,16:00,18:29,310,"$89,797.00","$71,469.00",$230.55,"$28,779.46"
EWR - BDL,56906228734,E-COS-ICT-1,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/56906228734,https://www.airlines-manager.com/aircraft/show/108834808,23:00,1:29,310,"$89,797.00","$71,469.00",$230.55,"$28,779.46"
EWR - BER,56869877601,E-84B-5  B2,777-300,https://www.airlines-manager.com/network/showline/49921899,https://www.airlines-manager.com/network/showflight/56869877601,https://www.airlines-manager.com/aircraft/show/117958699,5:45,22:14,852,"$2,719,031.00","$2,467,383.00","$2,895.99","$149,689.57"
EWR - BER,56895754237,E-84B-1  B2,777-300,https://www.airlines-manager.com/network/showline/49921899,https://www.airlines-manager.com/network/showflight/56895754237,https://www.airlines-manager.com/aircraft/show/117958695,17:45,10:14,852,"$2,719,031.00","$2,467,383.00","$2,895.99","$149,689.57"
EWR - BFF,56862956502,E-YEG-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/56862956502,https://www.airlines-manager.com/aircraft/show/98936168,2:15,10:14,320,"$507,802.00","$465,091.00","$1,453.41","$58,257.75"
EWR - BFF,56862956503,E-YEG-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/56862956503,https://www.airlines-manager.com/aircraft/show/98936169,3:45,11:44,320,"$507,802.00","$465,091.00","$1,453.41","$58,257.75"
EWR - BFF,56886798304,E-YEG-BFF-5 B,A319-100,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/56886798304,https://www.airlines-manager.com/aircraft/show/115493369,14:00,21:59,198,"$383,240.00","$352,330.00","$1,779.44","$44,133.19"
EWR - BFF,56892624152,E-YEG-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/56892624152,https://www.airlines-manager.com/aircraft/show/98936170,16:15,0:14,320,"$507,802.00","$465,091.00","$1,453.41","$58,257.75"
EWR - BFF,56895754291,E-YEG-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/56895754291,https://www.airlines-manager.com/aircraft/show/98936171,18:15,2:14,320,"$507,802.00","$465,091.00","$1,453.41","$58,257.75"
EWR - BHM,56862956513,E-RAP-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/56862956513,https://www.airlines-manager.com/aircraft/show/116042862,2:15,7:44,310,"$346,865.00","$318,072.00","$1,026.04","$58,007.05"
EWR - BHM,56876734151,E-RAP-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/56876734151,https://www.airlines-manager.com/aircraft/show/116042859,8:30,13:59,310,"$346,865.00","$318,072.00","$1,026.04","$58,007.05"
EWR - BHM,56886798292,E-RAP-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/56886798292,https://www.airlines-manager.com/aircraft/show/116042860,14:00,19:29,310,"$346,865.00","$318,072.00","$1,026.04","$58,007.05"
EWR - BHM,56889535337,E-RAP-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/56889535337,https://www.airlines-manager.com/aircraft/show/116042861,15:15,20:44,310,"$346,865.00","$318,072.00","$1,026.04","$58,007.05"
EWR - BIL,56880042577,E-BIL-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/56880042577,https://www.airlines-manager.com/aircraft/show/116047882,10:00,18:59,320,"$565,856.00","$519,899.00","$1,624.68","$57,873.73"
EWR - BIL,56883365107,E-BIL-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/56883365107,https://www.airlines-manager.com/aircraft/show/116047885,12:00,20:59,320,"$565,856.00","$519,899.00","$1,624.68","$57,873.73"
EWR - BIL,56901278287,E-BIL-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/56901278287,https://www.airlines-manager.com/aircraft/show/116047884,21:15,6:14,320,"$565,856.00","$519,899.00","$1,624.68","$57,873.73"
EWR - BIL,56903707199,E-BIL-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/56903707199,https://www.airlines-manager.com/aircraft/show/116047883,22:45,7:44,320,"$565,856.00","$519,899.00","$1,624.68","$57,873.73"
EWR - BNA,56862956666,E-BNA-JAX-3,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/56862956666,https://www.airlines-manager.com/aircraft/show/104610408,3:15,8:14,310,"$322,924.00","$293,584.00",$947.05,"$58,913.18"
EWR - BNA,56876734140,E-BNA-JAX-2,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/56876734140,https://www.airlines-manager.com/aircraft/show/104610409,8:30,13:29,310,"$322,924.00","$293,584.00",$947.05,"$58,913.18"
EWR - BNA,56886798171,E-BNA-JAX-1,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/56886798171,https://www.airlines-manager.com/aircraft/show/104610410,13:00,17:59,310,"$322,924.00","$293,584.00",$947.05,"$58,913.18"
EWR - BNA,56892624242,E-BNA-JAX-5,ERJ-175,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/56892624242,https://www.airlines-manager.com/aircraft/show/96421247,17:00,21:59,112,"$153,204.00","$134,298.00","$1,199.09","$26,949.43"
EWR - BNA,56901278288,E-BNA-JAX-4,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/56901278288,https://www.airlines-manager.com/aircraft/show/104610407,21:15,2:14,310,"$322,924.00","$293,584.00",$947.05,"$58,913.18"
EWR - BOI,56862956428,E-BOI-PBI-5 B,A319-100,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/56862956428,https://www.airlines-manager.com/aircraft/show/110582846,1:30,11:59,198,"$492,457.00","$454,215.00","$2,294.02","$43,327.34"
EWR - BOI,56880042617,E-BOI-PBI-1,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/56880042617,https://www.airlines-manager.com/aircraft/show/104418460,10:00,20:29,310,"$655,891.00","$608,204.00","$1,961.95","$58,016.28"
EWR - BOI,56889535301,E-BOI-PBI-4,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/56889535301,https://www.airlines-manager.com/aircraft/show/104418463,15:00,1:29,310,"$655,891.00","$608,204.00","$1,961.95","$58,016.28"
EWR - BOI,56892624175,E-BOI-PBI-3,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/56892624175,https://www.airlines-manager.com/aircraft/show/104418462,16:30,2:59,310,"$655,891.00","$608,204.00","$1,961.95","$58,016.28"
EWR - BOI,56906228781,E-BOI-PBI-2,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/56906228781,https://www.airlines-manager.com/aircraft/show/104418461,23:30,9:59,310,"$655,891.00","$608,204.00","$1,961.95","$58,016.28"
EWR - BOS,56862956647,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/56862956647,https://www.airlines-manager.com/aircraft/show/104034464,3:00,5:59,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,56880042644,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/56880042644,https://www.airlines-manager.com/aircraft/show/104034463,10:00,12:59,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,56886798057,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/56886798057,https://www.airlines-manager.com/aircraft/show/104034462,12:45,15:44,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,56886798058,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/56886798058,https://www.airlines-manager.com/aircraft/show/99316501,13:45,16:44,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,56892624237,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/56892624237,https://www.airlines-manager.com/aircraft/show/104034464,17:00,19:59,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,56901278157,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/56901278157,https://www.airlines-manager.com/aircraft/show/104034463,20:00,22:59,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,56903707213,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/56903707213,https://www.airlines-manager.com/aircraft/show/104034462,22:45,1:44,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,56906228812,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/56906228812,https://www.airlines-manager.com/aircraft/show/99316501,23:45,2:44,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BRU,56862956558,E-84B-1  B2,777-300,https://www.airlines-manager.com/network/showline/49921920,https://www.airlines-manager.com/network/showflight/56862956558,https://www.airlines-manager.com/aircraft/show/117958695,2:30,17:44,852,"$2,501,229.00","$2,275,215.00","$2,670.44","$149,357.66"
EWR - BRU,56889535239,E-84B-4  B2,777-300,https://www.airlines-manager.com/network/showline/49921920,https://www.airlines-manager.com/network/showflight/56889535239,https://www.airlines-manager.com/aircraft/show/117958698,14:30,5:44,852,"$2,501,229.00","$2,275,215.00","$2,670.44","$149,357.66"
EWR - BTV,56876734176,E-FCA-CID-1,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/56876734176,https://www.airlines-manager.com/aircraft/show/116042866,8:45,11:59,310,"$140,026.00","$120,811.00",$389.71,"$37,364.23"
EWR - BTV,56883365131,E-FCA-CID-4,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/56883365131,https://www.airlines-manager.com/aircraft/show/116042863,12:00,15:14,310,"$140,026.00","$120,811.00",$389.71,"$37,364.23"
EWR - BTV,56886798182,E-FCA-CID-3,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/56886798182,https://www.airlines-manager.com/aircraft/show/116042864,13:00,16:14,310,"$140,026.00","$120,811.00",$389.71,"$37,364.23"
EWR - BTV,56898577542,E-FCA-CID-2,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/56898577542,https://www.airlines-manager.com/aircraft/show/116042865,18:45,21:59,310,"$140,026.00","$120,811.00",$389.71,"$37,364.23"
EWR - BUF,56869877587,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/56869877587,https://www.airlines-manager.com/aircraft/show/106104450,5:30,8:44,112,"70,781$","57,977$",$517.65,"$17,931.03"
EWR - BUF,56880042743,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/56880042743,https://www.airlines-manager.com/aircraft/show/105731236,11:00,14:14,320,"154,671$","130,701$",$408.44,"$40,422.99"
EWR - BUF,56889535242,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/56889535242,https://www.airlines-manager.com/aircraft/show/88494376,14:45,17:59,320,"154,671$","130,701$",$408.44,"$40,422.99"
EWR - BUF,56895754314,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/56895754314,https://www.airlines-manager.com/aircraft/show/88494377,18:30,21:44,320,"$154,671.00","$130,701.00",$408.44,"$40,422.99"
EWR - BUF,56906228722,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/56906228722,https://www.airlines-manager.com/aircraft/show/88494375,23:00,2:14,320,"$154,671.00","$130,701.00",$408.44,"$40,422.99"
EWR - BWI,56862956214,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/56862956214,https://www.airlines-manager.com/aircraft/show/104034464,0:15,2:59,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,56862956215,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/56862956215,https://www.airlines-manager.com/aircraft/show/104034463,3:15,5:59,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,56880042642,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/56880042642,https://www.airlines-manager.com/aircraft/show/104034462,10:00,12:44,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,56880042643,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/56880042643,https://www.airlines-manager.com/aircraft/show/99316501,11:00,13:44,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,56889535226,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/56889535226,https://www.airlines-manager.com/aircraft/show/104034464,14:15,16:59,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,56895754188,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/56895754188,https://www.airlines-manager.com/aircraft/show/104034463,17:15,19:59,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,56901278155,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/56901278155,https://www.airlines-manager.com/aircraft/show/104034462,20:00,22:44,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,56901278156,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/56901278156,https://www.airlines-manager.com/aircraft/show/99316501,21:00,23:44,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BZN,56862956237,E-BIL-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/56862956237,https://www.airlines-manager.com/aircraft/show/116047885,0:30,9:44,320,"$592,989.00","$546,085.00","$1,706.52","$59,142.78"
EWR - BZN,56883365106,E-BIL-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/56883365106,https://www.airlines-manager.com/aircraft/show/116047884,12:00,21:14,320,"$592,989.00","$546,085.00","$1,706.52","$59,142.78"
EWR - BZN,56886798210,E-BIL-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/56886798210,https://www.airlines-manager.com/aircraft/show/116047883,13:30,22:44,320,"$592,989.00","$546,085.00","$1,706.52","$59,142.78"
EWR - BZN,56903707173,E-BIL-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/56903707173,https://www.airlines-manager.com/aircraft/show/116047882,22:30,7:44,320,"$592,989.00","$546,085.00","$1,706.52","$59,142.78"
EWR - CAK,56876734135,E-BIL-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/56876734135,https://www.airlines-manager.com/aircraft/show/116047884,8:30,11:59,320,"$191,026.00","$166,924.00",$521.64,"$47,920.77"
EWR - CAK,56880042578,E-BIL-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/56880042578,https://www.airlines-manager.com/aircraft/show/116047883,10:00,13:29,320,"$191,026.00","$166,924.00",$521.64,"$47,920.77"
EWR - CAK,56898577562,E-BIL-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/56898577562,https://www.airlines-manager.com/aircraft/show/116047882,19:00,22:29,320,"$191,026.00","$166,924.00",$521.64,"$47,920.77"
EWR - CAK,56901278259,E-BIL-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/56901278259,https://www.airlines-manager.com/aircraft/show/116047885,21:00,0:29,288,"$179,418.00","$155,643.00",$540.43,"$44,682.20"
EWR - CDG,56862956649,E-56A-5 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/56862956649,https://www.airlines-manager.com/aircraft/show/106813011,3:00,18:14,748,"$2,340,297.00","$2,079,866.00","$2,780.57","$136,533.87"
EWR - CDG,56876734178,E-56A-6 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/56876734178,https://www.airlines-manager.com/aircraft/show/106813012,8:45,23:59,748,"$2,340,297.00","$2,079,866.00","$2,780.57","$136,533.87"
EWR - CDG,56898577583,E-56A-2 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/56898577583,https://www.airlines-manager.com/aircraft/show/106813008,19:00,10:14,564,"1,761,616$","1,584,113$","$2,808.71","$103,989.91"
EWR - CHS,56876734144,E-TUL-DSM-1,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/56876734144,https://www.airlines-manager.com/aircraft/show/110044463,8:30,12:59,310,"289,603$","264,659$",$853.74,"$59,031.75"
EWR - CHS,56883365146,E-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/56883365146,https://www.airlines-manager.com/aircraft/show/110113039,12:00,16:29,112,"138,180$","122,117$","$1,090.33","$27,237.99"
EWR - CHS,56889535220,E-TUL-DSM-4,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/56889535220,https://www.airlines-manager.com/aircraft/show/110044466,14:15,18:44,310,"289,603$","264,659$",$853.74,"$59,031.75"
EWR - CHS,56901278292,E-TUL-DSM-3,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/56901278292,https://www.airlines-manager.com/aircraft/show/110044465,21:15,1:44,310,"$289,603.00","$264,659.00",$853.74,"$59,031.75"
EWR - CHS,56906228735,E-TUL-DSM-2,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/56906228735,https://www.airlines-manager.com/aircraft/show/110044464,23:00,3:29,283,"$274,855.00","$250,376.00",$884.72,"$55,845.95"
EWR - CID,56862956376,E-FCA-CID-4,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/56862956376,https://www.airlines-manager.com/aircraft/show/116042863,1:15,6:59,310,"$357,618.00","$329,009.00","$1,061.32","$57,385.29"
EWR - CID,56862956377,E-FCA-CID-3,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/56862956377,https://www.airlines-manager.com/aircraft/show/116042864,2:15,7:59,310,"$357,618.00","$329,009.00","$1,061.32","$57,385.29"
EWR - CID,56880042624,E-FCA-CID-2,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/56880042624,https://www.airlines-manager.com/aircraft/show/116042865,10:00,15:44,310,"$357,618.00","$329,009.00","$1,061.32","$57,385.29"
EWR - CID,56903707113,E-FCA-CID-1,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/56903707113,https://www.airlines-manager.com/aircraft/show/116042866,22:00,3:44,296,"$348,152.00","$319,893.00","$1,080.72","$55,795.29"
EWR - CLE,56862956478,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/56862956478,https://www.airlines-manager.com/aircraft/show/106104450,1:45,5:29,112,"$92,088.00","$77,509.00",$692.04,"$20,761.34"
EWR - CLE,56866822930,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/56866822930,https://www.airlines-manager.com/aircraft/show/105731236,5:00,8:44,320,"$198,609.00","$171,795.00",$536.86,"$46,016.52"
EWR - CLE,56880042732,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/56880042732,https://www.airlines-manager.com/aircraft/show/88494376,11:00,14:44,320,"$198,609.00","$171,795.00",$536.86,"$46,016.52"
EWR - CLE,56889535243,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/56889535243,https://www.airlines-manager.com/aircraft/show/88494377,14:45,18:29,320,"$198,609.00","$171,795.00",$536.86,"$46,016.52"
EWR - CLE,56898577591,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/56898577591,https://www.airlines-manager.com/aircraft/show/88494375,19:15,22:59,320,"$198,609.00","$171,795.00",$536.86,"$46,016.52"
EWR - CLT,56862956469,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/56862956469,https://www.airlines-manager.com/aircraft/show/104034462,1:45,5:59,216,"$190,091.00","$163,580.00",$757.31,"$38,640.94"
EWR - CLT,56862956470,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/56862956470,https://www.airlines-manager.com/aircraft/show/99316501,2:45,6:59,216,"190,091$","163,580$",$757.31,"$38,640.94"
EWR - CLT,56880042645,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/56880042645,https://www.airlines-manager.com/aircraft/show/104034464,10:00,14:14,216,"190,091$","163,580$",$757.31,"$38,640.94"
EWR - CLT,56886798186,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/56886798186,https://www.airlines-manager.com/aircraft/show/104034463,13:00,17:14,216,"190,091$","163,580$",$757.31,"$38,640.94"
EWR - CLT,56892624071,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/56892624071,https://www.airlines-manager.com/aircraft/show/104034462,15:45,19:59,216,"190,091$","163,580$",$757.31,"$38,640.94"
EWR - CLT,56892624072,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/56892624072,https://www.airlines-manager.com/aircraft/show/99316501,16:45,20:59,216,"$190,091.00","$163,580.00",$757.31,"$38,640.94"
EWR - CLT,56901278158,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/56901278158,https://www.airlines-manager.com/aircraft/show/104034464,20:00,0:14,216,"$190,091.00","$163,580.00",$757.31,"$38,640.94"
EWR - CLT,56906228738,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/56906228738,https://www.airlines-manager.com/aircraft/show/104034463,23:00,3:14,216,"$190,091.00","$163,580.00",$757.31,"$38,640.94"
EWR - CMH,56866822891,E-BNA-JAX-2,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/56866822891,https://www.airlines-manager.com/aircraft/show/104610409,4:30,8:29,310,"$223,693.00","$199,539.00",$643.67,"$50,093.47"
EWR - CMH,56876734141,E-BNA-JAX-1,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/56876734141,https://www.airlines-manager.com/aircraft/show/104610410,8:30,12:29,310,"$223,693.00","$199,539.00",$643.67,"$50,093.47"
EWR - CMH,56886798193,E-BNA-JAX-5,ERJ-175,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/56886798193,https://www.airlines-manager.com/aircraft/show/96421247,13:00,16:59,112,"$104,115.00","$88,818.00",$793.02,"$22,297.41"
EWR - CMH,56895754180,E-BNA-JAX-4,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/56895754180,https://www.airlines-manager.com/aircraft/show/104610407,17:15,21:14,310,"$223,693.00","$199,539.00",$643.67,"$50,093.47"
EWR - CMH,56906228757,E-BNA-JAX-3,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/56906228757,https://www.airlines-manager.com/aircraft/show/104610408,23:15,3:14,310,"$223,693.00","$199,539.00",$643.67,"$50,093.47"
EWR - COS,56862956417,E-COS-ICT-1,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/56862956417,https://www.airlines-manager.com/aircraft/show/108834808,1:30,9:59,310,"$535,609.00","$493,957.00","$1,593.41","$58,226.76"
EWR - COS,56862956418,E-COS-ICT-4,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/56862956418,https://www.airlines-manager.com/aircraft/show/108834811,3:30,11:59,310,"$535,609.00","$493,957.00","$1,593.41","$58,226.76"
EWR - COS,56886798197,E-COS-ICT-5,ERJ-175,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/56886798197,https://www.airlines-manager.com/aircraft/show/108466265,13:00,21:29,112,"$251,439.00","$223,621.00","$1,996.62","$26,360.04"
EWR - COS,56892624177,E-COS-ICT-3,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/56892624177,https://www.airlines-manager.com/aircraft/show/108834810,16:30,0:59,310,"$535,609.00","$493,957.00","$1,593.41","$58,226.76"
EWR - COS,56895754324,E-COS-ICT-2,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/56895754324,https://www.airlines-manager.com/aircraft/show/108834809,18:30,2:59,310,"$535,609.00","$493,957.00","$1,593.41","$58,226.76"
EWR - CRW,56862956429,E-CRW E,A319-100,https://www.airlines-manager.com/network/showline/50838186,https://www.airlines-manager.com/network/showflight/56862956429,https://www.airlines-manager.com/aircraft/show/120941964,1:30,5:14,216,"$155,815.00","$139,188.00",$644.39,"$37,282.50"
EWR - CRW,56880042679,E-CRW E,A319-100,https://www.airlines-manager.com/network/showline/50838186,https://www.airlines-manager.com/network/showflight/56880042679,https://www.airlines-manager.com/aircraft/show/120941964,10:30,14:14,216,"$155,815.00","$139,188.00",$644.39,"$37,282.50"
EWR - CRW,56889535227,E-CRW E,A319-100,https://www.airlines-manager.com/network/showline/50838186,https://www.airlines-manager.com/network/showflight/56889535227,https://www.airlines-manager.com/aircraft/show/120941964,14:15,17:59,216,"$155,815.00","$139,188.00",$644.39,"$37,282.50"
EWR - CRW,56895754276,E-CRW E,A319-100,https://www.airlines-manager.com/network/showline/50838186,https://www.airlines-manager.com/network/showflight/56895754276,https://www.airlines-manager.com/aircraft/show/120941964,18:00,21:44,216,"$155,815.00","$139,188.00",$644.39,"$37,282.50"
EWR - CRW,56903707093,E-CRW E,A319-100,https://www.airlines-manager.com/network/showline/50838186,https://www.airlines-manager.com/network/showflight/56903707093,https://www.airlines-manager.com/aircraft/show/120941964,21:45,1:29,216,"$155,815.00","$139,188.00",$644.39,"$37,282.50"
EWR - CUN,56862956270,E-CUN-SJU-3,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/56862956270,https://www.airlines-manager.com/aircraft/show/106581306,0:45,8:44,320,"$522,882.00","$475,106.00","$1,484.71","$59,512.23"
EWR - CUN,56862956271,E-CUN-SJU-2,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/56862956271,https://www.airlines-manager.com/aircraft/show/106581305,2:15,10:14,320,"$522,882.00","$475,106.00","$1,484.71","$59,512.23"
EWR - CUN,56886798117,E-CUN-SJU-1,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/56886798117,https://www.airlines-manager.com/aircraft/show/106581304,13:00,20:59,320,"$522,882.00","$475,106.00","$1,484.71","$59,512.23"
EWR - CUN,56889535232,E-CUN-SJU-4,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/56889535232,https://www.airlines-manager.com/aircraft/show/106581307,14:30,22:29,320,"$522,882.00","$475,106.00","$1,484.71","$59,512.23"
EWR - CUN,56903707136,E-CUN-SJU-5,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/56903707136,https://www.airlines-manager.com/aircraft/show/86238754,22:15,6:14,320,"$522,882.00","$475,106.00","$1,484.71","$59,512.23"
EWR - CVG,56862956211,E-BNA-JAX-2,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/56862956211,https://www.airlines-manager.com/aircraft/show/104610409,0:15,4:29,310,"$271,945.00","$244,220.00",$787.81,"$57,689.76"
EWR - CVG,56866822855,E-BNA-JAX-1,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/56866822855,https://www.airlines-manager.com/aircraft/show/104610410,4:15,8:29,310,"$271,945.00","$244,220.00",$787.81,"$57,689.76"
EWR - CVG,56876734125,E-BNA-JAX-5,ERJ-175,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/56876734125,https://www.airlines-manager.com/aircraft/show/96421247,8:15,12:29,112,"$128,787.00","$111,161.00",$992.51,"$26,258.50"
EWR - CVG,56886798170,E-BNA-JAX-4,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/56886798170,https://www.airlines-manager.com/aircraft/show/104610407,13:00,17:14,310,"$271,945.00","$244,220.00",$787.81,"$57,689.76"
EWR - CVG,56898577575,E-BNA-JAX-3,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/56898577575,https://www.airlines-manager.com/aircraft/show/104610408,19:00,23:14,310,"$271,945.00","$244,220.00",$787.81,"$57,689.76"
EWR - DEN,56862956460,E-DEN-SLC-1,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/56862956460,https://www.airlines-manager.com/aircraft/show/86270785,1:45,9:59,310,"$531,120.00","$467,014.00","$1,506.50","$56,722.35"
EWR - DEN,56862956461,E-DEN-SLC-4,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/56862956461,https://www.airlines-manager.com/aircraft/show/90452835,2:45,10:59,310,"$531,120.00","$467,014.00","$1,506.50","$56,722.35"
EWR - DEN,56880042592,E-DEN-SLC-2,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/56880042592,https://www.airlines-manager.com/aircraft/show/87153196,10:00,18:14,310,"$531,120.00","$467,014.00","$1,506.50","$56,722.35"
EWR - DEN,56880042593,E-DEN-SLC-3,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/56880042593,https://www.airlines-manager.com/aircraft/show/86270783,11:00,19:14,310,"$531,120.00","$467,014.00","$1,506.50","$56,722.35"
EWR - DEN,56892624122,E-DEN-SLC-5,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/56892624122,https://www.airlines-manager.com/aircraft/show/90452833,16:00,0:14,310,"$531,120.00","$467,014.00","$1,506.50","$56,722.35"
EWR - DEN,56892624123,E-DEN-SLC-6 B,A319-100,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/56892624123,https://www.airlines-manager.com/aircraft/show/105223076,17:00,1:14,198,"$399,942.00","$348,588.00","$1,760.55","$42,338.62"
EWR - DFW,56862956535,E-DFW-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/56862956535,https://www.airlines-manager.com/aircraft/show/90489724,2:30,9:59,320,"$475,228.00","$410,113.00","$1,281.60","$54,803.52"
EWR - DFW,56862956537,E-DFW-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/56862956537,https://www.airlines-manager.com/aircraft/show/86238753,3:30,10:59,320,"$475,228.00","$410,113.00","$1,281.60","$54,803.52"
EWR - DFW,56880042555,E-DFW-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/56880042555,https://www.airlines-manager.com/aircraft/show/90489725,10:00,17:29,320,"475,228$","410,113$","$1,281.60","$54,803.52"
EWR - DFW,56880042556,E-DFW-ATL-6 B,A319-100,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/56880042556,https://www.airlines-manager.com/aircraft/show/105222360,11:00,18:29,198,"359,120$","313,518$","$1,583.42","$41,895.50"
EWR - DFW,56883365150,E-DFW-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/56883365150,https://www.airlines-manager.com/aircraft/show/86238752,12:15,19:44,320,"475,228$","410,113$","$1,281.60","$54,803.52"
EWR - DFW,56898577592,E-DFW-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/56898577592,https://www.airlines-manager.com/aircraft/show/90489726,19:15,2:44,320,"475,228$","410,113$","$1,281.60","$54,803.52"
EWR - DSM,56862956498,E-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/56862956498,https://www.airlines-manager.com/aircraft/show/110113039,2:00,7:59,112,"$178,037.00","$157,997.00","$1,410.69","$26,406.18"
EWR - DSM,56866822858,E-TUL-DSM-4,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/56866822858,https://www.airlines-manager.com/aircraft/show/110044466,4:15,10:14,310,"$376,654.00","$346,204.00","$1,116.79","$57,861.39"
EWR - DSM,56883365130,E-TUL-DSM-3,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/56883365130,https://www.airlines-manager.com/aircraft/show/110044465,12:00,17:59,310,"$376,654.00","$346,204.00","$1,116.79","$57,861.39"
EWR - DSM,56886798218,E-TUL-DSM-2,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/56886798218,https://www.airlines-manager.com/aircraft/show/110044464,13:45,19:44,310,"$376,654.00","$346,204.00","$1,116.79","$57,861.39"
EWR - DSM,56903707178,E-TUL-DSM-1,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/56903707178,https://www.airlines-manager.com/aircraft/show/110044463,22:30,4:29,278,"$353,555.00","$323,994.00","$1,165.45","$54,149.42"
EWR - DTW,56862956678,E-DTW-YYZ-5,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/56862956678,https://www.airlines-manager.com/aircraft/show/92003921,3:30,7:29,320,"$228,249.00","$191,002.00",$596.88,"$47,950.29"
EWR - DTW,56880042561,E-DTW-YYZ-1,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/56880042561,https://www.airlines-manager.com/aircraft/show/92003925,10:00,13:59,320,"$228,249.00","$191,002.00",$596.88,"$47,950.29"
EWR - DTW,56886798207,E-DTW-YYZ-2,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/56886798207,https://www.airlines-manager.com/aircraft/show/92003924,13:30,17:29,320,"$228,249.00","$191,002.00",$596.88,"$47,950.29"
EWR - DTW,56903707079,E-DTW-YYZ-3,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/56903707079,https://www.airlines-manager.com/aircraft/show/92003923,21:45,1:44,320,"$228,249.00","$191,002.00",$596.88,"$47,950.29"
EWR - DTW,56903707080,E-DTW-YYZ-4,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/56903707080,https://www.airlines-manager.com/aircraft/show/92003922,22:15,2:14,320,"$228,249.00","$191,002.00",$596.88,"$47,950.29"
EWR - DUB,56862956674,E-56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/56862956674,https://www.airlines-manager.com/aircraft/show/106721557,3:30,16:59,598,"$1,662,831.00","$1,551,567.00","$2,594.59","$115,072.95"
EWR - DUB,56866822943,E-56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/56866822943,https://www.airlines-manager.com/aircraft/show/106721559,5:15,18:44,598,"$1,662,831.00","$1,551,567.00","$2,594.59","$115,072.95"
EWR - DUB,56880042671,E-56C-6 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/56880042671,https://www.airlines-manager.com/aircraft/show/106721561,10:30,23:59,598,"$1,662,831.00","$1,551,567.00","$2,594.59","$115,072.95"
EWR - ECP,56862956314,E-MTJ-ECP-3,737-900ER,https://www.airlines-manager.com/network/showline/50761178,https://www.airlines-manager.com/network/showflight/56862956314,https://www.airlines-manager.com/aircraft/show/120706944,1:00,6:44,320,"$371,504.00","$337,111.00","$1,053.47","$58,798.43"
EWR - ECP,56880042587,E-MTJ-ECP-2,737-900ER,https://www.airlines-manager.com/network/showline/50761178,https://www.airlines-manager.com/network/showflight/56880042587,https://www.airlines-manager.com/aircraft/show/120706945,10:00,15:44,320,"$371,504.00","$337,111.00","$1,053.47","$58,798.43"
EWR - ECP,56889535287,E-MTJ-ECP-4,737-900ER,https://www.airlines-manager.com/network/showline/50761178,https://www.airlines-manager.com/network/showflight/56889535287,https://www.airlines-manager.com/aircraft/show/120706943,15:00,20:44,320,"$371,504.00","$337,111.00","$1,053.47","$58,798.43"
EWR - ECP,56898577566,E-MTJ-ECP-1,737-900ER,https://www.airlines-manager.com/network/showline/50761178,https://www.airlines-manager.com/network/showflight/56898577566,https://www.airlines-manager.com/aircraft/show/120706946,19:00,0:44,320,"$371,504.00","$337,111.00","$1,053.47","$58,798.43"
EWR - EDI,56866822838,E-56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/56866822838,https://www.airlines-manager.com/aircraft/show/106721558,4:15,17:59,598,"$1,648,512.00","$1,541,221.00","$2,577.29","$112,224.83"
EWR - EDI,56869877607,E-56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/56869877607,https://www.airlines-manager.com/aircraft/show/106721560,6:00,19:44,598,"$1,648,512.00","$1,541,221.00","$2,577.29","$112,224.83"
EWR - EDI,56898577651,E-56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/56898577651,https://www.airlines-manager.com/aircraft/show/106721560,19:45,9:29,598,"$1,648,512.00","$1,541,221.00","$2,577.29","$112,224.83"
EWR - ELP,56862956228,E-ELP-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/56862956228,https://www.airlines-manager.com/aircraft/show/103365577,0:30,9:59,320,"$593,056.00","$543,274.00","$1,697.73","$57,287.24"
EWR - ELP,56862956229,E-ELP-SAT-5 B,A319-100,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/56862956229,https://www.airlines-manager.com/aircraft/show/110582847,2:30,11:59,198,"$446,662.00","$410,459.00","$2,073.03","$43,282.14"
EWR - ELP,56880042571,E-ELP-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/56880042571,https://www.airlines-manager.com/aircraft/show/103365578,10:00,19:29,320,"$593,056.00","$543,274.00","$1,697.73","$57,287.24"
EWR - ELP,56883365097,E-ELP-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/56883365097,https://www.airlines-manager.com/aircraft/show/103365575,12:00,21:29,320,"$593,056.00","$543,274.00","$1,697.73","$57,287.24"
EWR - ELP,56892624153,E-ELP-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/56892624153,https://www.airlines-manager.com/aircraft/show/103365576,16:15,1:44,320,"$593,056.00","$543,274.00","$1,697.73","$57,287.24"
EWR - EUG,56862956452,E-EUG-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/56862956452,https://www.airlines-manager.com/aircraft/show/119220438,1:45,13:29,320,"$729,984.00","$674,719.00","$2,108.50","$57,504.46"
EWR - EUG,56883365110,E-EUG-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/56883365110,https://www.airlines-manager.com/aircraft/show/119220435,12:00,23:44,320,"$729,984.00","$674,719.00","$2,108.50","$57,504.46"
EWR - EUG,56886798255,E-EUG-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/56886798255,https://www.airlines-manager.com/aircraft/show/119220436,14:00,1:44,320,"$729,984.00","$674,719.00","$2,108.50","$57,504.46"
EWR - EUG,56906228802,E-EUG-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/56906228802,https://www.airlines-manager.com/aircraft/show/119220437,23:45,11:29,320,"$729,984.00","$674,719.00","$2,108.50","$57,504.46"
EWR - FAR,56862956459,E-LIT-FAR-4,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/56862956459,https://www.airlines-manager.com/aircraft/show/86270784,1:45,8:29,310,"$425,315.00","$392,348.00","$1,265.64","$58,269.50"
EWR - FAR,56866822932,E-LIT-FAR-3,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/56866822932,https://www.airlines-manager.com/aircraft/show/86270786,5:00,11:44,310,"$425,315.00","$392,348.00","$1,265.64","$58,269.50"
EWR - FAR,56889535289,E-LIT-FAR-2,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/56889535289,https://www.airlines-manager.com/aircraft/show/86270787,15:00,21:44,310,"$425,315.00","$392,348.00","$1,265.64","$58,269.50"
EWR - FAR,56898577610,E-LIT-FAR-1,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/56898577610,https://www.airlines-manager.com/aircraft/show/90452834,19:15,1:59,310,"$425,315.00","$392,348.00","$1,265.64","$58,269.50"
EWR - FAT,56862956182,E-PSP-FAT-2,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/56862956182,https://www.airlines-manager.com/aircraft/show/119220451,0:15,11:44,338,"$779,642.00","$731,517.00","$2,164.25","$63,702.50"
EWR - FAT,56880042706,E-PSP-FAT-3,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/56880042706,https://www.airlines-manager.com/aircraft/show/119220452,11:00,22:29,338,"$779,642.00","$731,517.00","$2,164.25","$63,702.50"
EWR - FAT,56886798073,E-PSP-FAT-4,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/56886798073,https://www.airlines-manager.com/aircraft/show/116672810,13:00,0:29,338,"$779,642.00","$731,517.00","$2,164.25","$63,702.50"
EWR - FAT,56903707131,E-PSP-FAT-1,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/56903707131,https://www.airlines-manager.com/aircraft/show/119220450,22:15,9:44,338,"$779,642.00","$731,517.00","$2,164.25","$63,702.50"
EWR - FCA,56883365132,E-FCA-CID-1,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/56883365132,https://www.airlines-manager.com/aircraft/show/116042866,12:00,21:59,310,"$626,012.00","$581,310.00","$1,875.19","$58,228.05"
EWR - FCA,56889535338,E-FCA-CID-4,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/56889535338,https://www.airlines-manager.com/aircraft/show/116042863,15:15,1:14,310,"$626,012.00","$581,310.00","$1,875.19","$58,228.05"
EWR - FCA,56892624157,E-FCA-CID-3,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/56892624157,https://www.airlines-manager.com/aircraft/show/116042864,16:15,2:14,310,"$626,012.00","$581,310.00","$1,875.19","$58,228.05"
EWR - FCA,56903707112,E-FCA-CID-2,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/56903707112,https://www.airlines-manager.com/aircraft/show/116042865,22:00,7:59,310,"$626,012.00","$581,310.00","$1,875.19","$58,228.05"
EWR - FCO,56862956557,E-84A-2 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/56862956557,https://www.airlines-manager.com/aircraft/show/94521252,2:30,19:59,852,"$2,914,869.00","$2,640,955.00","$3,099.71","$151,055.58"
EWR - FCO,56883365139,E-84A-3 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/56883365139,https://www.airlines-manager.com/aircraft/show/90656553,12:00,5:29,852,"$2,914,869.00","$2,640,955.00","$3,099.71","$151,055.58"
EWR - FLL,56862956693,E-DTW-YYZ-2,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/56862956693,https://www.airlines-manager.com/aircraft/show/92003924,3:45,9:59,320,"$392,797.00","$352,784.00","$1,102.45","$56,596.36"
EWR - FLL,56869877591,E-DTW-YYZ-4,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/56869877591,https://www.airlines-manager.com/aircraft/show/92003922,5:45,11:59,320,"$392,797.00","$352,784.00","$1,102.45","$56,596.36"
EWR - FLL,56880042737,E-DTW-YYZ-5,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/56880042737,https://www.airlines-manager.com/aircraft/show/92003921,11:00,17:14,320,"$392,797.00","$352,784.00","$1,102.45","$56,596.36"
EWR - FLL,56883365092,E-DTW-YYZ-3,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/56883365092,https://www.airlines-manager.com/aircraft/show/92003923,12:00,18:14,320,"$392,797.00","$352,784.00","$1,102.45","$56,596.36"
EWR - FLL,56895754196,E-DTW-YYZ-1,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/56895754196,https://www.airlines-manager.com/aircraft/show/92003925,17:30,23:44,320,"$392,797.00","$352,784.00","$1,102.45","$56,596.36"
EWR - FRA,56862956610,E-56B-5 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/56862956610,https://www.airlines-manager.com/aircraft/show/94521253,2:45,18:44,748,"$2,453,250.00","$2,188,346.00","$2,925.60","$136,914.24"
EWR - FRA,56866822895,E-56B-3 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/56866822895,https://www.airlines-manager.com/aircraft/show/90656555,4:30,20:29,748,"$2,453,250.00","$2,188,346.00","$2,925.60","$136,914.24"
EWR - FRA,56869877638,E-56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/56869877638,https://www.airlines-manager.com/aircraft/show/94521251,6:15,22:14,748,"$2,215,081.00","$2,014,089.00","$2,692.63","$126,011.82"
EWR - FSD,56866822856,E-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/56866822856,https://www.airlines-manager.com/aircraft/show/107161240,4:15,10:59,310,"$412,992.00","$380,511.00","$1,227.45","$56,511.53"
EWR - FSD,56876734202,E-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/56876734202,https://www.airlines-manager.com/aircraft/show/86782214,9:00,15:44,112,"$194,519.00","$172,989.00","$1,544.54","$25,691.44"
EWR - FSD,56880042786,E-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/56880042786,https://www.airlines-manager.com/aircraft/show/107161239,11:00,17:44,310,"$412,992.00","$380,511.00","$1,227.45","$56,511.53"
EWR - FSD,56889535336,E-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/56889535336,https://www.airlines-manager.com/aircraft/show/107161241,15:15,21:59,310,"$412,992.00","$380,511.00","$1,227.45","$56,511.53"
EWR - FSD,56895754299,E-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/56895754299,https://www.airlines-manager.com/aircraft/show/107161238,18:15,0:59,283,"$391,575.00","$359,960.00","$1,271.94","$53,459.41"
EWR - GRR,56876734153,E-RAP-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/56876734153,https://www.airlines-manager.com/aircraft/show/116042862,8:30,12:59,310,"$278,034.00","$253,092.00",$816.43,"$56,451.75"
EWR - GRR,56886798291,E-RAP-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/56886798291,https://www.airlines-manager.com/aircraft/show/116042859,14:00,18:29,310,"$278,034.00","$253,092.00",$816.43,"$56,451.75"
EWR - GRR,56898577640,E-RAP-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/56898577640,https://www.airlines-manager.com/aircraft/show/116042860,19:30,23:59,310,"$278,034.00","$253,092.00",$816.43,"$56,451.75"
EWR - GRR,56901278240,E-RAP-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/56901278240,https://www.airlines-manager.com/aircraft/show/116042861,20:45,1:14,310,"$278,034.00","$253,092.00",$816.43,"$56,451.75"
EWR - GSO,56862956699,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/56862956699,https://www.airlines-manager.com/aircraft/show/119220544,3:45,7:29,310,"$217,652.00","$195,033.00",$629.14,"$52,240.98"
EWR - GSO,56880042630,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/56880042630,https://www.airlines-manager.com/aircraft/show/119220543,10:00,13:44,310,"$217,652.00","$195,033.00",$629.14,"$52,240.98"
EWR - GSO,56889535234,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/56889535234,https://www.airlines-manager.com/aircraft/show/119220542,14:30,18:14,310,"$217,652.00","$195,033.00",$629.14,"$52,240.98"
EWR - GSO,56906228760,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/56906228760,https://www.airlines-manager.com/aircraft/show/119220545,23:15,2:59,310,"$217,652.00","$195,033.00",$629.14,"$52,240.98"
EWR - HEL,56880042682,E-56D-6 E,787-10,https://www.airlines-manager.com/network/showline/50072206,https://www.airlines-manager.com/network/showflight/56880042682,https://www.airlines-manager.com/aircraft/show/118644441,10:45,3:29,648,"$2,056,992.00","$1,921,807.00","$2,965.75","$114,849.02"
EWR - HEL,56880042683,E-56D-7 E,787-10,https://www.airlines-manager.com/network/showline/50072206,https://www.airlines-manager.com/network/showflight/56880042683,https://www.airlines-manager.com/aircraft/show/118644442,11:00,3:44,648,"$2,056,992.00","$1,921,807.00","$2,965.75","$114,849.02"
EWR - HEL,56901278131,E-56D-2 E,787-10,https://www.airlines-manager.com/network/showline/50072206,https://www.airlines-manager.com/network/showflight/56901278131,https://www.airlines-manager.com/aircraft/show/118644437,20:00,12:44,580,"$1,911,968.00","$1,783,775.00","$3,075.47","$106,600.10"
EWR - IAH,56862956672,E-IAH-LAS-3,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/56862956672,https://www.airlines-manager.com/aircraft/show/105859512,3:30,10:59,338,"$514,124.00","$466,262.00","$1,379.47","$62,306.73"
EWR - IAH,56866822872,E-IAH-LAS-5,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/56866822872,https://www.airlines-manager.com/aircraft/show/105859514,4:30,11:59,338,"$514,124.00","$466,262.00","$1,379.47","$62,306.73"
EWR - IAH,56873155636,E-IAH-LAS-1,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/56873155636,https://www.airlines-manager.com/aircraft/show/105859510,7:30,14:59,338,"$514,124.00","$466,262.00","$1,379.47","$62,306.73"
EWR - IAH,56880042697,E-IAH-LAS-2,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/56880042697,https://www.airlines-manager.com/aircraft/show/105859511,11:00,18:29,338,"$514,124.00","$466,262.00","$1,379.47","$62,306.73"
EWR - IAH,56883365083,E-IAH-LAS-4,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/56883365083,https://www.airlines-manager.com/aircraft/show/105859513,12:00,19:29,338,"$514,124.00","$466,262.00","$1,379.47","$62,306.73"
EWR - IAH,56892624134,Corporate Jet,A320-200,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/56892624134,https://www.airlines-manager.com/aircraft/show/101412921,16:00,23:29,84,"$360,563.00","$313,010.00","$3,726.31","$41,827.62"
EWR - IAH,56898577547,E-IAH-LAS-6,ERJ-175,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/56898577547,https://www.airlines-manager.com/aircraft/show/105864236,18:45,2:14,112,"223,737$","191,530$","$1,710.09","$25,594.21"
EWR - ICT,56862956323,E-COS-ICT-3,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/56862956323,https://www.airlines-manager.com/aircraft/show/108834810,1:00,7:59,310,"442,853$","408,153$","$1,316.62","$58,446.73"
EWR - ICT,56862956324,E-COS-ICT-2,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/56862956324,https://www.airlines-manager.com/aircraft/show/108834809,3:00,9:59,310,"442,853$","408,153$","$1,316.62","$58,446.73"
EWR - ICT,56880042791,E-COS-ICT-1,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/56880042791,https://www.airlines-manager.com/aircraft/show/108834808,11:00,17:59,310,"442,853$","408,153$","$1,316.62","$58,446.73"
EWR - ICT,56886798176,E-COS-ICT-4,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/56886798176,https://www.airlines-manager.com/aircraft/show/108834811,13:00,19:59,310,"$442,853.00","$408,153.00","$1,316.62","$58,446.73"
EWR - ICT,56903707072,E-COS-ICT-5,ERJ-175,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/56903707072,https://www.airlines-manager.com/aircraft/show/108466265,21:30,4:29,112,"$209,485.00","$186,465.00","$1,664.87","$26,701.43"
EWR - IND,56862956224,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/56862956224,https://www.airlines-manager.com/aircraft/show/88494376,0:30,4:59,320,"$295,294.00","$263,726.00",$824.14,"$58,823.64"
EWR - IND,56866822841,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/56866822841,https://www.airlines-manager.com/aircraft/show/88494377,4:15,8:44,320,"$295,294.00","$263,726.00",$824.14,"$58,823.64"
EWR - IND,56880042731,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/56880042731,https://www.airlines-manager.com/aircraft/show/88494375,11:00,15:29,320,"295,294$","263,726$",$824.14,"$58,823.64"
EWR - IND,56895754213,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/56895754213,https://www.airlines-manager.com/aircraft/show/106104450,17:30,21:59,112,"140,854$","123,199$","$1,099.99","$27,479.33"
EWR - IND,56901278228,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/56901278228,https://www.airlines-manager.com/aircraft/show/105731236,20:45,1:14,320,"295,294$","263,726$",$824.14,"$58,823.64"
EWR - JAN,56862956488,E-LIT-FAR-1,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/56862956488,https://www.airlines-manager.com/aircraft/show/90452834,2:00,8:14,310,"389,232$","358,551$","$1,156.62","$57,521.55"
EWR - JAN,56876734137,E-LIT-FAR-4,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/56876734137,https://www.airlines-manager.com/aircraft/show/86270784,8:30,14:44,310,"$389,232.00","$358,551.00","$1,156.62","$57,521.55"
EWR - JAN,56883365118,E-LIT-FAR-3,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/56883365118,https://www.airlines-manager.com/aircraft/show/86270786,12:00,18:14,310,"$389,232.00","$358,551.00","$1,156.62","$57,521.55"
EWR - JAN,56903707090,E-LIT-FAR-2,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/56903707090,https://www.airlines-manager.com/aircraft/show/86270787,21:45,3:59,310,"$389,232.00","$358,551.00","$1,156.62","$57,521.55"
EWR - JAX,56862956511,E-BNA-JAX-4,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/56862956511,https://www.airlines-manager.com/aircraft/show/104610407,2:15,7:29,310,"$337,690.00","$308,667.00",$995.70,"$58,980.96"
EWR - JAX,56876734117,E-BNA-JAX-3,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/56876734117,https://www.airlines-manager.com/aircraft/show/104610408,8:15,13:29,310,"$337,690.00","$308,667.00",$995.70,"$58,980.96"
EWR - JAX,56886798275,E-BNA-JAX-2,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/56886798275,https://www.airlines-manager.com/aircraft/show/104610409,14:00,19:14,310,"$337,690.00","$308,667.00",$995.70,"$58,980.96"
EWR - JAX,56895754264,E-BNA-JAX-1,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/56895754264,https://www.airlines-manager.com/aircraft/show/104610410,18:00,23:14,310,"$337,690.00","$308,667.00",$995.70,"$58,980.96"
EWR - JAX,56903707125,E-BNA-JAX-5,ERJ-175,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/56903707125,https://www.airlines-manager.com/aircraft/show/96421247,22:00,3:14,112,"$160,212.00","$141,366.00","$1,262.20","$27,012.61"
EWR - KEF,56892624201,E-56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/56892624201,https://www.airlines-manager.com/aircraft/show/106721557,17:00,4:14,598,"$1,343,998.00","$1,254,987.00","$2,098.64","$111,719.91"
EWR - KEF,56895754247,E-56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/56895754247,https://www.airlines-manager.com/aircraft/show/106721558,18:00,5:14,598,"$1,343,998.00","$1,254,987.00","$2,098.64","$111,719.91"
EWR - KEF,56898577517,E-56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/56898577517,https://www.airlines-manager.com/aircraft/show/106721559,18:45,5:59,598,"$1,343,998.00","$1,254,987.00","$2,098.64","$111,719.91"
EWR - LAS,56862956178,E-IAH-LAS-2,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/56862956178,https://www.airlines-manager.com/aircraft/show/105859511,0:15,10:59,338,"$737,877.00","$673,713.00","$1,993.23","$62,768.29"
EWR - LAS,56862956179,E-IAH-LAS-4,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/56862956179,https://www.airlines-manager.com/aircraft/show/105859513,1:15,11:59,338,"$737,877.00","$673,713.00","$1,993.23","$62,768.29"
EWR - LAS,56862956180,E-IAH-LAS-6,ERJ-175,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/56862956180,https://www.airlines-manager.com/aircraft/show/105864236,2:15,12:59,112,"$318,546.00","$274,501.00","$2,450.90","$25,574.63"
EWR - LAS,56883365084,E-IAH-LAS-5,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/56883365084,https://www.airlines-manager.com/aircraft/show/105859514,12:00,22:44,338,"$737,877.00","$673,713.00","$1,993.23","$62,768.29"
EWR - LAS,56889535260,E-IAH-LAS-1,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/56889535260,https://www.airlines-manager.com/aircraft/show/105859510,15:00,1:44,338,"$737,877.00","$673,713.00","$1,993.23","$62,768.29"
EWR - LAS,56892624182,E-IAH-LAS-3,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/56892624182,https://www.airlines-manager.com/aircraft/show/105859512,16:45,3:29,338,"$737,877.00","$673,713.00","$1,993.23","$62,768.29"
EWR - LAX,56862956114,E-SFO-LAX-4,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/56862956114,https://www.airlines-manager.com/aircraft/show/89233030,0:00,11:29,400,"$937,587.00","$846,364.00","$2,115.91","$73,703.69"
EWR - LAX,56862956115,E-SFO-LAX-5,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/56862956115,https://www.airlines-manager.com/aircraft/show/89233027,2:00,13:29,400,"$937,587.00","$846,364.00","$2,115.91","$73,703.69"
EWR - LAX,56883365155,E-SFO-LAX-1,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/56883365155,https://www.airlines-manager.com/aircraft/show/83716137,12:30,23:59,400,"$937,587.00","$846,364.00","$2,115.91","$73,703.69"
EWR - LAX,56886798227,E-SFO-LAX-2,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/56886798227,https://www.airlines-manager.com/aircraft/show/89233028,14:00,1:29,400,"937,587$","846,364$","$2,115.91","$73,703.69"
EWR - LAX,56889535342,E-SFO-LAX-3,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/56889535342,https://www.airlines-manager.com/aircraft/show/89233029,15:30,2:59,400,"$937,587.00","$846,364.00","$2,115.91","$73,703.69"
EWR - LEX,56862956643,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/56862956643,https://www.airlines-manager.com/aircraft/show/119220545,3:00,7:29,310,"$273,360.00","$250,152.00",$806.94,"$55,795.99"
EWR - LEX,56880042631,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/56880042631,https://www.airlines-manager.com/aircraft/show/119220544,10:00,14:29,310,"$273,360.00","$250,152.00",$806.94,"$55,795.99"
EWR - LEX,56886798219,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/56886798219,https://www.airlines-manager.com/aircraft/show/119220543,13:45,18:14,310,"$273,360.00","$250,152.00",$806.94,"$55,795.99"
EWR - LEX,56895754300,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/56895754300,https://www.airlines-manager.com/aircraft/show/119220542,18:15,22:44,281,"$258,493.00","$235,751.00",$838.97,"$52,583.87"
EWR - LHR,56862956524,E-56A-1 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/56862956524,https://www.airlines-manager.com/aircraft/show/106813007,2:15,16:44,748,"$2,231,685.00","$1,980,082.00","$2,647.17","$136,714.52"
EWR - LHR,56883365159,E-56A-4 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/56883365159,https://www.airlines-manager.com/aircraft/show/106813010,12:30,2:59,748,"$2,231,685.00","$1,980,082.00","$2,647.17","$136,714.52"
EWR - LHR,56895754303,E-56A-5 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/56895754303,https://www.airlines-manager.com/aircraft/show/106813011,18:15,8:44,748,"$2,015,569.00","$1,821,209.00","$2,434.77","$125,745.16"
EWR - LIS,56869877586,E-84A-4 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/56869877586,https://www.airlines-manager.com/aircraft/show/90656551,5:30,19:44,852,"$2,340,226.00","$2,131,891.00","$2,502.22","$149,781.57"
EWR - LIS,56883365152,E-84A-1 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/56883365152,https://www.airlines-manager.com/aircraft/show/90656554,12:15,2:29,852,"$2,340,226.00","$2,131,891.00","$2,502.22","$149,781.57"
EWR - LIT,56876734138,E-LIT-FAR-2,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/56876734138,https://www.airlines-manager.com/aircraft/show/86270787,8:30,14:44,310,"$395,001.00","$364,044.00","$1,174.34","$58,402.78"
EWR - LIT,56886798155,E-LIT-FAR-1,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/56886798155,https://www.airlines-manager.com/aircraft/show/90452834,13:00,19:14,310,"$395,001.00","$364,044.00","$1,174.34","$58,402.78"
EWR - LIT,56898577636,E-LIT-FAR-4,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/56898577636,https://www.airlines-manager.com/aircraft/show/86270784,19:30,1:44,310,"$395,001.00","$364,044.00","$1,174.34","$58,402.78"
EWR - LIT,56903707203,E-LIT-FAR-3,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/56903707203,https://www.airlines-manager.com/aircraft/show/86270786,22:45,4:59,310,"$395,001.00","$364,044.00","$1,174.34","$58,402.78"
EWR - MAD,56862956163,E-56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/56862956163,https://www.airlines-manager.com/aircraft/show/89124072,0:00,14:59,748,"$2,301,537.00","$2,048,578.00","$2,738.74","$136,723.78"
EWR - MAD,56901278213,E-56B-3 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/56901278213,https://www.airlines-manager.com/aircraft/show/90656555,20:30,11:29,748,"$2,301,537.00","$2,048,578.00","$2,738.74","$136,723.78"
EWR - MAD,56903707156,E-56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/56903707156,https://www.airlines-manager.com/aircraft/show/94521251,22:15,13:14,748,"$2,077,752.00","$1,884,361.00","$2,519.20","$125,763.80"
EWR - MAF,56862956382,E-RDM-MAF-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761173,https://www.airlines-manager.com/network/showflight/56862956382,https://www.airlines-manager.com/aircraft/show/120706940,1:30,9:59,272,"$490,066.00","$459,903.00","$1,690.82","$54,212.53"
EWR - MAF,56873155617,E-RDM-MAF-5 B,A319-100,https://www.airlines-manager.com/network/showline/50761173,https://www.airlines-manager.com/network/showflight/56873155617,https://www.airlines-manager.com/aircraft/show/120707022,7:00,15:29,198,"$407,839.00","$375,811.00","$1,898.04","$44,299.92"
EWR - MAF,56880042536,E-RDM-MAF-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761173,https://www.airlines-manager.com/network/showflight/56880042536,https://www.airlines-manager.com/aircraft/show/120706941,10:00,18:29,272,"$490,066.00","$459,903.00","$1,690.82","$54,212.53"
EWR - MAF,56895754242,E-RDM-MAF-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761173,https://www.airlines-manager.com/network/showflight/56895754242,https://www.airlines-manager.com/aircraft/show/120706939,18:00,2:29,272,"$490,066.00","$459,903.00","$1,690.82","$54,212.53"
EWR - MAF,56906228790,E-RDM-MAF-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761173,https://www.airlines-manager.com/network/showflight/56906228790,https://www.airlines-manager.com/aircraft/show/120706942,23:45,8:14,272,"490,066$","459,903$","$1,690.82","$54,212.53"
EWR - MBJ,56862956676,E-56D-7 E,787-10,https://www.airlines-manager.com/network/showline/50072192,https://www.airlines-manager.com/network/showflight/56862956676,https://www.airlines-manager.com/aircraft/show/118644442,3:30,10:59,648,"945,645$","883,866$","$1,363.99","$118,111.27"
EWR - MBJ,56883365055,E-56D-5 E,787-10,https://www.airlines-manager.com/network/showline/50072192,https://www.airlines-manager.com/network/showflight/56883365055,https://www.airlines-manager.com/aircraft/show/118644440,11:15,18:44,648,"945,645$","883,866$","$1,363.99","$118,111.27"
EWR - MBJ,56898577652,E-56D-1 E,787-10,https://www.airlines-manager.com/network/showline/50072192,https://www.airlines-manager.com/network/showflight/56898577652,https://www.airlines-manager.com/aircraft/show/118644436,19:45,3:14,636,"923,203$","862,053$","$1,355.43","$115,196.39"
EWR - MCI,56862956694,E-ELP-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/56862956694,https://www.airlines-manager.com/aircraft/show/103365578,3:45,9:59,320,"396,816$","357,840$","$1,118.25","$57,407.49"
EWR - MCI,56869877593,E-ELP-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/56869877593,https://www.airlines-manager.com/aircraft/show/103365575,5:45,11:59,320,"$396,816.00","$357,840.00","$1,118.25","$57,407.49"
EWR - MCI,56880042569,E-ELP-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/56880042569,https://www.airlines-manager.com/aircraft/show/103365576,10:00,16:14,320,"$396,816.00","$357,840.00","$1,118.25","$57,407.49"
EWR - MCI,56895754292,E-ELP-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/56895754292,https://www.airlines-manager.com/aircraft/show/103365577,18:15,0:29,320,"$396,816.00","$357,840.00","$1,118.25","$57,407.49"
EWR - MCI,56901278193,E-ELP-SAT-5 B,A319-100,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/56901278193,https://www.airlines-manager.com/aircraft/show/110582847,20:15,2:29,198,"$300,349.00","$272,622.00","$1,376.88","$43,736.15"
EWR - MCO,56862956435,E-IAH-LAS-1,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/56862956435,https://www.airlines-manager.com/aircraft/show/105859510,1:45,7:29,338,"$391,232.00","$351,937.00","$1,041.23","$61,384.36"
EWR - MCO,56880042698,E-IAH-LAS-3,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/56880042698,https://www.airlines-manager.com/aircraft/show/105859512,11:00,16:44,338,"391,232$","351,937$","$1,041.23","$61,384.36"
EWR - MCO,56886798196,E-IAH-LAS-6,ERJ-175,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/56886798196,https://www.airlines-manager.com/aircraft/show/105864236,13:00,18:44,112,"171,315$","145,397$","$1,298.19","$25,359.94"
EWR - MCO,56895754307,E-IAH-LAS-2,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/56895754307,https://www.airlines-manager.com/aircraft/show/105859511,18:30,0:14,338,"391,232$","351,937$","$1,041.23","$61,384.36"
EWR - MCO,56898577623,E-IAH-LAS-4,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/56898577623,https://www.airlines-manager.com/aircraft/show/105859513,19:30,1:14,338,"391,232$","351,937$","$1,041.23","$61,384.36"
EWR - MCO,56903707185,E-IAH-LAS-5,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/56903707185,https://www.airlines-manager.com/aircraft/show/105859514,22:45,4:29,338,"391,232$","351,937$","$1,041.23","$61,384.36"
EWR - MEM,56862956350,E-RNO-MEM-4,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/56862956350,https://www.airlines-manager.com/aircraft/show/99920619,1:15,6:59,320,"365,097$","328,039$","$1,025.12","$57,216.10"
EWR - MEM,56862956351,E-RNO-MEM-3,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/56862956351,https://www.airlines-manager.com/aircraft/show/99920620,3:45,9:29,320,"365,097$","328,039$","$1,025.12","$57,216.10"
EWR - MEM,56880042661,E-RNO-MEM-2,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/56880042661,https://www.airlines-manager.com/aircraft/show/99920621,10:15,15:59,320,"365,097$","328,039$","$1,025.12","$57,216.10"
EWR - MEM,56901278189,E-RNO-MEM-5 B,A319-100,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/56901278189,https://www.airlines-manager.com/aircraft/show/100096560,20:15,1:59,198,"$276,827.00","$250,611.00","$1,265.71","$43,711.22"
EWR - MEM,56903707052,E-RNO-MEM-1,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/56903707052,https://www.airlines-manager.com/aircraft/show/99920622,21:30,3:14,320,"$365,097.00","$328,039.00","$1,025.12","$57,216.10"
EWR - MEX,56862956443,E-DTW-YYZ-3,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/56862956443,https://www.airlines-manager.com/aircraft/show/92003923,1:45,11:59,320,"$641,733.00","$578,133.00","$1,806.67","$56,495.08"
EWR - MEX,56880042646,E-DTW-YYZ-6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/56880042646,https://www.airlines-manager.com/aircraft/show/104258433,10:00,20:14,216,"$488,482.00","$441,977.00","$2,046.19","$43,189.93"
EWR - MEX,56883365091,E-DTW-YYZ-4,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/56883365091,https://www.airlines-manager.com/aircraft/show/92003922,12:00,22:14,320,"$641,733.00","$578,133.00","$1,806.67","$56,495.08"
EWR - MEX,56895754172,E-DTW-YYZ-5,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/56895754172,https://www.airlines-manager.com/aircraft/show/92003921,17:15,3:29,320,"$641,733.00","$578,133.00","$1,806.67","$56,495.08"
EWR - MEX,56895754173,E-DTW-YYZ-2,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/56895754173,https://www.airlines-manager.com/aircraft/show/92003924,17:30,3:44,320,"$641,733.00","$578,133.00","$1,806.67","$56,495.08"
EWR - MEX,56901278190,E-DTW-YYZ-6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/56901278190,https://www.airlines-manager.com/aircraft/show/104258433,20:15,6:29,216,"$488,482.00","$441,977.00","$2,046.19","$43,189.93"
EWR - MEX,56906228796,E-DTW-YYZ-1,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/56906228796,https://www.airlines-manager.com/aircraft/show/92003925,23:45,9:59,300,"$606,877.00","$544,675.00","$1,815.58","$53,225.57"
EWR - MFR,56862956451,E-EUG-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/56862956451,https://www.airlines-manager.com/aircraft/show/119220436,1:45,13:29,320,"$717,698.00","$661,635.00","$2,067.61","$56,389.35"
EWR - MFR,56883365111,E-EUG-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/56883365111,https://www.airlines-manager.com/aircraft/show/119220437,12:00,23:44,320,"$717,698.00","$661,635.00","$2,067.61","$56,389.35"
EWR - MFR,56886798256,E-EUG-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/56886798256,https://www.airlines-manager.com/aircraft/show/119220438,14:00,1:44,320,"$717,698.00","$661,635.00","$2,067.61","$56,389.35"
EWR - MFR,56906228801,E-EUG-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/56906228801,https://www.airlines-manager.com/aircraft/show/119220435,23:45,11:29,320,"$717,698.00","$661,635.00","$2,067.61","$56,389.35"
EWR - MHT,56862956697,E-FCA-CID-1,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/56862956697,https://www.airlines-manager.com/aircraft/show/116042866,3:45,6:44,310,"$126,850.00","$107,713.00",$347.46,"$36,104.92"
EWR - MHT,56876734195,E-FCA-CID-4,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/56876734195,https://www.airlines-manager.com/aircraft/show/116042863,9:00,11:59,310,"$126,850.00","$107,713.00",$347.46,"$36,104.92"
EWR - MHT,56880042622,E-FCA-CID-3,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/56880042622,https://www.airlines-manager.com/aircraft/show/116042864,10:00,12:59,310,"$126,850.00","$107,713.00",$347.46,"$36,104.92"
EWR - MHT,56880042623,E-STL-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/56880042623,https://www.airlines-manager.com/aircraft/show/98887257,11:00,13:59,112,"$56,500.00","$44,653.00",$398.69,"$14,967.49"
EWR - MHT,56892624067,E-FCA-CID-2,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/56892624067,https://www.airlines-manager.com/aircraft/show/116042865,15:45,18:44,310,"$126,850.00","$107,713.00",$347.46,"$36,104.92"
EWR - MIA,56862956533,E-MIA-ORD-5,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/56862956533,https://www.airlines-manager.com/aircraft/show/113251309,2:30,8:44,338,"$426,856.00","$383,770.00","$1,135.41","$61,567.38"
EWR - MIA,56866822796,E-MIA-ORD-1,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/56866822796,https://www.airlines-manager.com/aircraft/show/113251305,4:00,10:14,338,"$426,856.00","$383,770.00","$1,135.41","$61,567.38"
EWR - MIA,56880042541,E-MIA-ORD-2,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/56880042541,https://www.airlines-manager.com/aircraft/show/113251306,10:00,16:14,338,"$426,856.00","$383,770.00","$1,135.41","$61,567.38"
EWR - MIA,56880042542,E-MIA-ORD-4,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/56880042542,https://www.airlines-manager.com/aircraft/show/113251308,11:00,17:14,338,"$426,856.00","$383,770.00","$1,135.41","$61,567.38"
EWR - MIA,56892624162,E-MIA-ORD-3,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/56892624162,https://www.airlines-manager.com/aircraft/show/113251307,16:30,22:44,338,"$426,856.00","$383,770.00","$1,135.41","$61,567.38"
EWR - MIA,56906228784,Corporate Jet,A320-200,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/56906228784,https://www.airlines-manager.com/aircraft/show/101412921,23:30,5:44,84,"300,798$","257,952$","$3,070.86","$41,382.67"
EWR - MKE,56862956670,E-BNA-JAX-5,ERJ-175,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/56862956670,https://www.airlines-manager.com/aircraft/show/96421247,3:15,8:14,112,"150,329$","132,337$","$1,181.58","$26,555.92"
EWR - MKE,56873155646,E-BNA-JAX-4,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/56873155646,https://www.airlines-manager.com/aircraft/show/104610407,7:30,12:29,310,"316,661$","288,776$",$931.54,"$57,948.36"
EWR - MKE,56886798274,E-BNA-JAX-3,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/56886798274,https://www.airlines-manager.com/aircraft/show/104610408,14:00,18:59,310,"316,661$","288,776$",$931.54,"$57,948.36"
EWR - MKE,56898577616,E-BNA-JAX-2,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/56898577616,https://www.airlines-manager.com/aircraft/show/104610409,19:15,0:14,310,"316,661$","288,776$",$931.54,"$57,948.36"
EWR - MKE,56906228758,E-BNA-JAX-1,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/56906228758,https://www.airlines-manager.com/aircraft/show/104610410,23:15,4:14,310,"$316,661.00","$288,776.00",$931.54,"$57,948.36"
EWR - MSN,56862956551,E-RAP-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/56862956551,https://www.airlines-manager.com/aircraft/show/116042859,2:30,7:44,310,"$331,635.00","$304,391.00",$981.91,"$58,163.89"
EWR - MSN,56876734175,E-RAP-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/56876734175,https://www.airlines-manager.com/aircraft/show/116042860,8:45,13:59,310,"$331,635.00","$304,391.00",$981.91,"$58,163.89"
EWR - MSN,56880042621,E-RAP-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/56880042621,https://www.airlines-manager.com/aircraft/show/116042861,10:00,15:14,310,"$331,635.00","$304,391.00",$981.91,"$58,163.89"
EWR - MSN,56901278269,E-RAP-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/56901278269,https://www.airlines-manager.com/aircraft/show/116042862,21:00,2:14,310,"331,635$","304,391$",$981.91,"$58,163.89"
EWR - MSO,56862956322,E-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/56862956322,https://www.airlines-manager.com/aircraft/show/107161238,1:00,10:59,310,"618,420$","573,473$","$1,849.91","$57,443.04"
EWR - MSO,56880042787,E-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/56880042787,https://www.airlines-manager.com/aircraft/show/107161240,11:00,20:59,310,"618,420$","573,473$","$1,849.91","$57,443.04"
EWR - MSO,56892624080,E-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/56892624080,https://www.airlines-manager.com/aircraft/show/86782214,15:45,1:44,112,"290,250$","259,767$","$2,319.35","$26,020.07"
EWR - MSO,56895754233,E-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/56895754233,https://www.airlines-manager.com/aircraft/show/107161239,17:45,3:44,310,"618,420$","573,473$","$1,849.91","$57,443.04"
EWR - MSO,56903707110,E-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/56903707110,https://www.airlines-manager.com/aircraft/show/107161241,22:00,7:59,310,"$618,420.00","$573,473.00","$1,849.91","$57,443.04"
EWR - MSP,56866822931,E-DEN-SLC-3,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/56866822931,https://www.airlines-manager.com/aircraft/show/86270783,5:00,10:59,310,"$376,088.00","$336,853.00","$1,086.62","$56,298.55"
EWR - MSP,56880042595,E-DEN-SLC-5,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/56880042595,https://www.airlines-manager.com/aircraft/show/90452833,10:00,15:59,310,"$376,088.00","$336,853.00","$1,086.62","$56,298.55"
EWR - MSP,56880042596,E-DEN-SLC-6 B,A319-100,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/56880042596,https://www.airlines-manager.com/aircraft/show/105223076,11:00,16:59,198,"$284,972.00","$253,541.00","$1,280.51","$42,374.54"
EWR - MSP,56895754297,E-DEN-SLC-2,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/56895754297,https://www.airlines-manager.com/aircraft/show/87153196,18:15,0:14,310,"$376,088.00","$336,853.00","$1,086.62","$56,298.55"
EWR - MSP,56898577663,E-DEN-SLC-1,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/56898577663,https://www.airlines-manager.com/aircraft/show/86270785,19:45,1:44,310,"$376,088.00","$336,853.00","$1,086.62","$56,298.55"
EWR - MSP,56901278237,E-DEN-SLC-4,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/56901278237,https://www.airlines-manager.com/aircraft/show/90452835,20:45,2:44,310,"$376,088.00","$336,853.00","$1,086.62","$56,298.55"
EWR - MSY,56862956663,E-ABQ-AUS-1,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/56862956663,https://www.airlines-manager.com/aircraft/show/90717079,3:15,9:59,310,"$416,273.00","$381,522.00","$1,230.72","$56,661.68"
EWR - MSY,56880042597,E-ABQ-AUS-3,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/56880042597,https://www.airlines-manager.com/aircraft/show/90717077,10:00,16:44,310,"$416,273.00","$381,522.00","$1,230.72","$56,661.68"
EWR - MSY,56880042598,E-ABQ-AUS-4,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/56880042598,https://www.airlines-manager.com/aircraft/show/90717076,11:00,17:44,310,"$416,273.00","$381,522.00","$1,230.72","$56,661.68"
EWR - MSY,56895754260,E-ABQ-AUS-2,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/56895754260,https://www.airlines-manager.com/aircraft/show/90717078,18:00,0:44,310,"$416,273.00","$381,522.00","$1,230.72","$56,661.68"
EWR - MSY,56901278141,E-ABQ-AUS-5,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/56901278141,https://www.airlines-manager.com/aircraft/show/95950199,20:00,2:44,310,"$416,273.00","$381,522.00","$1,230.72","$56,661.68"
EWR - MTJ,56869877615,E-MTJ-ECP-4,737-900ER,https://www.airlines-manager.com/network/showline/50761177,https://www.airlines-manager.com/network/showflight/56869877615,https://www.airlines-manager.com/aircraft/show/120706943,6:00,14:59,320,"$565,136.00","$519,101.00","$1,622.19","$57,784.90"
EWR - MTJ,56880042588,E-MTJ-ECP-1,737-900ER,https://www.airlines-manager.com/network/showline/50761177,https://www.airlines-manager.com/network/showflight/56880042588,https://www.airlines-manager.com/aircraft/show/120706946,10:00,18:59,320,"$565,136.00","$519,101.00","$1,622.19","$57,784.90"
EWR - MTJ,56892624120,E-MTJ-ECP-3,737-900ER,https://www.airlines-manager.com/network/showline/50761177,https://www.airlines-manager.com/network/showflight/56892624120,https://www.airlines-manager.com/aircraft/show/120706944,16:00,0:59,320,"$565,136.00","$519,101.00","$1,622.19","$57,784.90"
EWR - MTJ,56903707086,E-MTJ-ECP-2,737-900ER,https://www.airlines-manager.com/network/showline/50761177,https://www.airlines-manager.com/network/showflight/56903707086,https://www.airlines-manager.com/aircraft/show/120706945,21:45,6:44,320,"$565,136.00","$519,101.00","$1,622.19","$57,784.90"
EWR - MUC,56862956109,E-56C-7 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/56862956109,https://www.airlines-manager.com/aircraft/show/106721562,0:00,16:29,598,"$2,049,665.00","$1,899,594.00","$3,176.58","$115,243.32"
EWR - MUC,56880042718,E-56C-1 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/56880042718,https://www.airlines-manager.com/aircraft/show/106721556,11:00,3:29,598,"$2,049,665.00","$1,899,594.00","$3,176.58","$115,243.32"
EWR - MUC,56895754310,E-56C-7 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/56895754310,https://www.airlines-manager.com/aircraft/show/106721562,18:30,10:59,598,"$2,049,665.00","$1,899,594.00","$3,176.58","$115,243.32"
EWR - MXP,56880042651,E-84B-7 B2,777-300,https://www.airlines-manager.com/network/showline/49921908,https://www.airlines-manager.com/network/showflight/56880042651,https://www.airlines-manager.com/aircraft/show/117958701,10:00,2:29,852,"$2,696,638.00","$2,451,348.00","$2,877.17","$148,716.76"
EWR - MXP,56903707123,E-84B-3  B2,777-300,https://www.airlines-manager.com/network/showline/49921908,https://www.airlines-manager.com/network/showflight/56903707123,https://www.airlines-manager.com/aircraft/show/117958697,22:00,14:29,852,"$2,696,638.00","$2,451,348.00","$2,877.17","$148,716.76"
EWR - MYR,56862956526,E-RDM-MAF-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761175,https://www.airlines-manager.com/network/showflight/56862956526,https://www.airlines-manager.com/aircraft/show/120706939,2:30,6:44,272,"$226,045.00","$207,541.00",$763.02,"$49,025.43"
EWR - MYR,56876734103,E-RDM-MAF-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761175,https://www.airlines-manager.com/network/showflight/56876734103,https://www.airlines-manager.com/aircraft/show/120706942,8:15,12:29,272,"$226,045.00","$207,541.00",$763.02,"$49,025.43"
EWR - MYR,56880042535,E-RDM-MAF-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761175,https://www.airlines-manager.com/network/showflight/56880042535,https://www.airlines-manager.com/aircraft/show/120706940,10:00,14:14,272,"$226,045.00","$207,541.00",$763.02,"$49,025.43"
EWR - MYR,56889535352,E-RDM-MAF-5 B,A319-100,https://www.airlines-manager.com/network/showline/50761175,https://www.airlines-manager.com/network/showflight/56889535352,https://www.airlines-manager.com/aircraft/show/120707022,15:30,19:44,198,"$189,562.00","$170,441.00",$860.81,"$40,261.65"
EWR - MYR,56895754305,E-RDM-MAF-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761175,https://www.airlines-manager.com/network/showflight/56895754305,https://www.airlines-manager.com/aircraft/show/120706941,18:30,22:44,272,"$226,045.00","$207,541.00",$763.02,"$49,025.43"
EWR - NAS,56866822946,E-TUS-TPA-1,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/56866822946,https://www.airlines-manager.com/aircraft/show/98379319,5:15,11:44,310,"$397,029.00","$364,028.00","$1,174.28","$56,148.28"
EWR - NAS,56886798160,E-TUS-TPA-3,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/56886798160,https://www.airlines-manager.com/aircraft/show/98379317,13:00,19:29,310,"$397,029.00","$364,028.00","$1,174.28","$56,148.28"
EWR - NAS,56895754262,E-TUS-TPA-4,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/56895754262,https://www.airlines-manager.com/aircraft/show/98379316,18:00,0:29,310,"$397,029.00","$364,028.00","$1,174.28","$56,148.28"
EWR - NAS,56898577573,E-TUS-TPA-2,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/56898577573,https://www.airlines-manager.com/aircraft/show/98379318,19:00,1:29,310,"$397,029.00","$364,028.00","$1,174.28","$56,148.28"
EWR - NAS,56901278264,E-TUS-TPA-5,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/56901278264,https://www.airlines-manager.com/aircraft/show/98379315,21:00,3:29,292,"$376,773.00","$344,449.00","$1,179.62","$53,128.38"
EWR - NRT,56862956166,E-56A-7 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/56862956166,https://www.airlines-manager.com/aircraft/show/106813013,0:00,2:14,748,"$4,002,745.00","$3,604,043.00","$4,818.24","$1,613,750.60"
EWR - NRT,56880042667,E-56A-3 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/56880042667,https://www.airlines-manager.com/aircraft/show/106813009,10:15,12:29,748,"3,976,929$","3,587,310$","$4,795.87","$1,606,258.21"
EWR - NRT,56892624194,E-56A-1 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/56892624194,https://www.airlines-manager.com/aircraft/show/106813007,16:45,18:59,748,"3,579,904$","3,294,738$","$4,404.73","$1,475,255.82"
EWR - OAK,56862956321,E-OAK-SJC-5,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/56862956321,https://www.airlines-manager.com/aircraft/show/104717239,1:00,12:59,310,"739,348$","683,774$","$2,205.72","$57,060.42"
EWR - OAK,56880042619,E-OAK-SJC-1,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/56880042619,https://www.airlines-manager.com/aircraft/show/104717243,10:00,21:59,310,"739,348$","683,774$","$2,205.72","$57,060.42"
EWR - OAK,56883365123,E-OAK-SJC-2,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/56883365123,https://www.airlines-manager.com/aircraft/show/104717242,12:00,23:59,310,"739,348$","683,774$","$2,205.72","$57,060.42"
EWR - OAK,56886798276,E-OAK-SJC-3,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/56886798276,https://www.airlines-manager.com/aircraft/show/104717241,14:00,1:59,310,"739,348$","683,774$","$2,205.72","$57,060.42"
EWR - OAK,56903707177,E-OAK-SJC-4,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/56903707177,https://www.airlines-manager.com/aircraft/show/104717240,22:30,10:29,310,"739,348$","683,774$","$2,205.72","$57,060.42"
EWR - OKC,56862956475,E-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/56862956475,https://www.airlines-manager.com/aircraft/show/86782214,1:45,8:59,112,"218,318$","194,572$","$1,737.25","$26,899.35"
EWR - OKC,56862956476,E-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/56862956476,https://www.airlines-manager.com/aircraft/show/107161239,3:45,10:59,310,"462,867$","427,138$","$1,377.86","$59,051.34"
EWR - OKC,56873155717,E-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/56873155717,https://www.airlines-manager.com/aircraft/show/107161241,8:00,15:14,310,"$462,867.00","$427,138.00","$1,377.86","$59,051.34"
EWR - OKC,56880042785,E-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/56880042785,https://www.airlines-manager.com/aircraft/show/107161238,11:00,18:14,310,"$462,867.00","$427,138.00","$1,377.86","$59,051.34"
EWR - OKC,56901278266,E-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/56901278266,https://www.airlines-manager.com/aircraft/show/107161240,21:00,4:14,310,"$462,867.00","$427,138.00","$1,377.86","$59,051.34"
EWR - OMA,56862956548,E-BOI-PBI-1,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/56862956548,https://www.airlines-manager.com/aircraft/show/104418460,2:30,8:59,310,"$403,514.00","$370,539.00","$1,195.29","$57,152.54"
EWR - OMA,56873155645,E-BOI-PBI-4,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/56873155645,https://www.airlines-manager.com/aircraft/show/104418463,7:30,13:59,310,"$403,514.00","$370,539.00","$1,195.29","$57,152.54"
EWR - OMA,56880042618,E-BOI-PBI-3,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/56880042618,https://www.airlines-manager.com/aircraft/show/104418462,10:00,16:29,310,"$403,514.00","$370,539.00","$1,195.29","$57,152.54"
EWR - OMA,56892624227,E-BOI-PBI-2,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/56892624227,https://www.airlines-manager.com/aircraft/show/104418461,17:00,23:29,310,"$403,514.00","$370,539.00","$1,195.29","$57,152.54"
EWR - OMA,56898577582,E-BOI-PBI-5 B,A319-100,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/56898577582,https://www.airlines-manager.com/aircraft/show/110582846,19:00,1:29,198,"$305,209.00","$278,781.00","$1,407.98","$42,999.64"
EWR - ONT,56862956130,E-SMF-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/56862956130,https://www.airlines-manager.com/aircraft/show/94889153,0:00,11:29,320,"$706,325.00","$647,621.00","$2,023.82","$56,396.60"
EWR - ONT,56862956131,E-SMF-ONT-5,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/56862956131,https://www.airlines-manager.com/aircraft/show/94889154,2:00,13:29,320,"$706,325.00","$647,621.00","$2,023.82","$56,396.60"
EWR - ONT,56883365075,E-SMF-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/56883365075,https://www.airlines-manager.com/aircraft/show/94889150,11:45,23:14,320,"$706,325.00","$647,621.00","$2,023.82","$56,396.60"
EWR - ONT,56886798201,E-SMF-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/56886798201,https://www.airlines-manager.com/aircraft/show/94889151,13:15,0:44,320,"$706,325.00","$647,621.00","$2,023.82","$56,396.60"
EWR - ONT,56889535245,E-SMF-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/56889535245,https://www.airlines-manager.com/aircraft/show/94889152,14:45,2:14,302,"$681,709.00","$624,170.00","$2,066.79","$54,354.43"
EWR - ORD,56866822922,E-MIA-ORD-2,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/56866822922,https://www.airlines-manager.com/aircraft/show/113251306,5:00,9:59,338,"$338,489.00","$291,454.00",$862.29,"$58,485.75"
EWR - ORD,56880042657,E-MIA-ORD-1,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/56880042657,https://www.airlines-manager.com/aircraft/show/113251305,10:15,15:14,338,"$338,489.00","$291,454.00",$862.29,"$58,485.75"
EWR - ORD,56880042658,Corporate Jet,A320-200,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/56880042658,https://www.airlines-manager.com/aircraft/show/101412921,11:00,15:59,84,"$242,231.00","$195,355.00","$2,325.65","$39,201.67"
EWR - ORD,56883365061,E-MIA-ORD-3,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/56883365061,https://www.airlines-manager.com/aircraft/show/113251307,11:30,16:29,338,"$338,489.00","$291,454.00",$862.29,"$58,485.75"
EWR - ORD,56895754169,E-MIA-ORD-4,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/56895754169,https://www.airlines-manager.com/aircraft/show/113251308,17:15,22:14,338,"$338,489.00","$291,454.00",$862.29,"$58,485.75"
EWR - ORD,56903707046,E-MIA-ORD-5,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/56903707046,https://www.airlines-manager.com/aircraft/show/113251309,21:30,2:29,338,"$338,489.00","$291,454.00",$862.29,"$58,485.75"
EWR - ORF,56862956500,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/56862956500,https://www.airlines-manager.com/aircraft/show/88494375,2:15,5:29,320,"$153,803.00","$130,253.00",$407.04,"$40,284.43"
EWR - ORF,56880042805,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/56880042805,https://www.airlines-manager.com/aircraft/show/106104450,11:00,14:14,112,"$70,512.00","$57,910.00",$517.05,"$17,910.31"
EWR - ORF,56889535218,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/56889535218,https://www.airlines-manager.com/aircraft/show/105731236,14:15,17:29,320,"$153,803.00","$130,253.00",$407.04,"$40,284.43"
EWR - ORF,56895754251,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/56895754251,https://www.airlines-manager.com/aircraft/show/88494376,18:00,21:14,320,"$153,803.00","$130,253.00",$407.04,"$40,284.43"
EWR - ORF,56903707078,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/56903707078,https://www.airlines-manager.com/aircraft/show/88494377,21:45,0:59,320,"$153,803.00","$130,253.00",$407.04,"$40,284.43"
EWR - OSL,56862956656,E-56D-2 E,787-10,https://www.airlines-manager.com/network/showline/50072202,https://www.airlines-manager.com/network/showflight/56862956656,https://www.airlines-manager.com/aircraft/show/118644437,3:15,18:29,648,"$1,894,675.00","$1,766,526.00","$2,726.12","$115,964.51"
EWR - OSL,56866822902,E-56D-4 E,787-10,https://www.airlines-manager.com/network/showline/50072202,https://www.airlines-manager.com/network/showflight/56866822902,https://www.airlines-manager.com/aircraft/show/118644439,4:45,19:59,648,"$1,894,675.00","$1,766,526.00","$2,726.12","$115,964.51"
EWR - OSL,56901278132,E-56D-4 E,787-10,https://www.airlines-manager.com/network/showline/50072202,https://www.airlines-manager.com/network/showflight/56901278132,https://www.airlines-manager.com/aircraft/show/118644439,20:00,11:14,648,"$1,894,675.00","$1,766,526.00","$2,726.12","$115,964.51"
EWR - PBI,56862956415,E-BOI-PBI-4,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/56862956415,https://www.airlines-manager.com/aircraft/show/104418463,1:30,7:29,310,"$380,892.00","$348,451.00","$1,124.04","$58,236.94"
EWR - PBI,56862956416,E-BOI-PBI-3,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/56862956416,https://www.airlines-manager.com/aircraft/show/104418462,3:00,8:59,310,"$380,892.00","$348,451.00","$1,124.04","$58,236.94"
EWR - PBI,56880042780,E-BOI-PBI-2,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/56880042780,https://www.airlines-manager.com/aircraft/show/104418461,11:00,16:59,310,"$380,892.00","$348,451.00","$1,124.04","$58,236.94"
EWR - PBI,56886798189,E-BOI-PBI-5 B,A319-100,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/56886798189,https://www.airlines-manager.com/aircraft/show/110582846,13:00,18:59,198,"$288,248.00","$262,252.00","$1,324.51","$43,830.42"
EWR - PBI,56901278209,E-BOI-PBI-1,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/56901278209,https://www.airlines-manager.com/aircraft/show/104418460,20:30,2:29,310,"$380,892.00","$348,451.00","$1,124.04","$58,236.94"
EWR - PDX,56862956103,E-PHX-PDX-3,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/56862956103,https://www.airlines-manager.com/aircraft/show/113595213,0:00,11:29,338,"$761,524.00","$708,817.00","$2,097.09","$61,725.72"
EWR - PDX,56862956104,E-PHX-PDX-4,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/56862956104,https://www.airlines-manager.com/aircraft/show/113595214,2:00,13:29,338,"$761,524.00","$708,817.00","$2,097.09","$61,725.72"
EWR - PDX,56866822923,E-PHX-PDX-5,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/56866822923,https://www.airlines-manager.com/aircraft/show/113595215,5:00,16:29,338,"$761,524.00","$708,817.00","$2,097.09","$61,725.72"
EWR - PDX,56869877649,E-PHX-PDX-6 B,A319-100,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/56869877649,https://www.airlines-manager.com/aircraft/show/99219630,6:30,17:59,198,"$528,797.00","$484,100.00","$2,444.95","$42,156.75"
EWR - PDX,56880042659,E-PHX-PDX-1,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/56880042659,https://www.airlines-manager.com/aircraft/show/113595211,10:15,21:44,338,"$761,524.00","$708,817.00","$2,097.09","$61,725.72"
EWR - PDX,56883365148,E-PHX-PDX-2,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/56883365148,https://www.airlines-manager.com/aircraft/show/113595212,12:15,23:44,310,"$722,925.00","$671,768.00","$2,166.99","$58,499.39"
EWR - PHX,56862956099,E-PHX-PDX-1,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/56862956099,https://www.airlines-manager.com/aircraft/show/113595211,0:00,10:14,338,"$707,316.00","$649,946.00","$1,922.92","$63,512.64"
EWR - PHX,56862956101,E-PHX-PDX-2,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/56862956101,https://www.airlines-manager.com/aircraft/show/113595212,2:00,12:14,338,"707,316$","649,946$","$1,922.92","$63,512.64"
EWR - PHX,56883365062,E-PHX-PDX-3,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/56883365062,https://www.airlines-manager.com/aircraft/show/113595213,11:30,21:44,338,"707,316$","649,946$","$1,922.92","$63,512.64"
EWR - PHX,56886798206,E-PHX-PDX-4,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/56886798206,https://www.airlines-manager.com/aircraft/show/113595214,13:30,23:44,338,"707,316$","649,946$","$1,922.92","$63,512.64"
EWR - PHX,56892624163,E-PHX-PDX-5,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/56892624163,https://www.airlines-manager.com/aircraft/show/113595215,16:30,2:44,338,"707,316$","649,946$","$1,922.92","$63,512.64"
EWR - PHX,56895754274,E-PHX-PDX-6 B,A319-100,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/56895754274,https://www.airlines-manager.com/aircraft/show/99219630,18:00,4:29,198,"491,654$","443,539$","$2,240.10","$42,308.97"
EWR - PIT,56866822867,E-STL-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/56866822867,https://www.airlines-manager.com/aircraft/show/98887257,4:15,7:29,112,"77,629$","63,269$",$564.90,"$19,567.73"
EWR - PIT,56869877640,E-STL-PIT-3,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/56869877640,https://www.airlines-manager.com/aircraft/show/115400546,6:30,9:44,338,"182,899$","160,287$",$474.22,"$49,573.30"
EWR - PIT,56880042545,E-STL-PIT-2,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/56880042545,https://www.airlines-manager.com/aircraft/show/115400547,10:00,13:14,338,"182,899$","160,287$",$474.22,"$49,573.30"
EWR - PIT,56886798083,E-STL-PIT-4,A321neo-LR,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/56886798083,https://www.airlines-manager.com/aircraft/show/103406580,13:00,16:14,338,"$184,682.00","$161,906.00",$479.01,"$50,074.02"
EWR - PIT,56889535339,E-STL-PIT-1,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/56889535339,https://www.airlines-manager.com/aircraft/show/115400548,15:30,18:44,338,"$182,899.00","$160,287.00",$474.22,"$49,573.30"
EWR - PIT,56898577646,E-STL-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/56898577646,https://www.airlines-manager.com/aircraft/show/98887257,19:30,22:44,112,"$77,629.00","$63,269.00",$564.90,"$19,567.73"
EWR - PRG,56880042668,E-84B-2  B2,777-300,https://www.airlines-manager.com/network/showline/44327652,https://www.airlines-manager.com/network/showflight/56880042668,https://www.airlines-manager.com/aircraft/show/117958696,10:15,2:59,852,"$2,750,049.00","$2,506,567.00","$2,941.98","$149,794.84"
EWR - PRG,56903707157,E-84B-5  B2,777-300,https://www.airlines-manager.com/network/showline/44327652,https://www.airlines-manager.com/network/showflight/56903707157,https://www.airlines-manager.com/aircraft/show/117958699,22:15,14:59,852,"$2,750,049.00","$2,506,567.00","$2,941.98","$149,794.84"
EWR - PSP,56862956222,E-PSP-FAT-4,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/56862956222,https://www.airlines-manager.com/aircraft/show/116672810,0:30,11:44,338,"$760,434.00","$712,970.00","$2,109.38","$63,469.14"
EWR - PSP,56880042705,E-PSP-FAT-1,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/56880042705,https://www.airlines-manager.com/aircraft/show/119220450,11:00,22:14,338,"$760,434.00","$712,970.00","$2,109.38","$63,469.14"
EWR - PSP,56886798074,E-PSP-FAT-2,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/56886798074,https://www.airlines-manager.com/aircraft/show/119220451,13:00,0:14,338,"$760,434.00","$712,970.00","$2,109.38","$63,469.14"
EWR - PSP,56903707162,E-PSP-FAT-3,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/56903707162,https://www.airlines-manager.com/aircraft/show/119220452,22:30,9:44,338,"$760,434.00","$712,970.00","$2,109.38","$63,469.14"
EWR - PVD,56862956419,E-TUL-DSM-4,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/56862956419,https://www.airlines-manager.com/aircraft/show/110044466,1:30,4:14,310,"$99,383.00","$81,748.00",$263.70,"$29,907.80"
EWR - PVD,56876734209,E-TUL-DSM-3,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/56876734209,https://www.airlines-manager.com/aircraft/show/110044465,9:15,11:59,310,"$99,383.00","$81,748.00",$263.70,"$29,907.80"
EWR - PVD,56880042793,E-TUL-DSM-2,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/56880042793,https://www.airlines-manager.com/aircraft/show/110044464,11:00,13:44,310,"$99,383.00","$81,748.00",$263.70,"$29,907.80"
EWR - PVD,56898577666,E-TUL-DSM-1,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/56898577666,https://www.airlines-manager.com/aircraft/show/110044463,19:45,22:29,310,"$99,383.00","$81,748.00",$263.70,"$29,907.80"
EWR - PVD,56906228766,E-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/56906228766,https://www.airlines-manager.com/aircraft/show/110113039,23:15,1:59,112,"$42,644.00","$31,786.00",$283.80,"$11,629.02"
EWR - PWM,56866822892,E-TUL-DSM-1,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/56866822892,https://www.airlines-manager.com/aircraft/show/110044463,4:30,7:44,310,"$154,650.00","$135,600.00",$437.42,"$41,938.14"
EWR - PWM,56876734181,E-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/56876734181,https://www.airlines-manager.com/aircraft/show/110113039,8:45,11:59,112,"$70,248.00","$58,322.00",$520.73,"$18,037.73"
EWR - PWM,56880042794,E-TUL-DSM-4,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/56880042794,https://www.airlines-manager.com/aircraft/show/110044466,11:00,14:14,310,"$154,650.00","$135,600.00",$437.42,"$41,938.14"
EWR - PWM,56895754268,E-TUL-DSM-3,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/56895754268,https://www.airlines-manager.com/aircraft/show/110044465,18:00,21:14,310,"$154,650.00","$135,600.00",$437.42,"$41,938.14"
EWR - PWM,56898577667,E-TUL-DSM-2,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/56898577667,https://www.airlines-manager.com/aircraft/show/110044464,19:45,22:59,303,"$152,606.00","$133,610.00",$440.96,"$41,322.68"
EWR - RAP,56862956149,E-RAP-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/56862956149,https://www.airlines-manager.com/aircraft/show/116042860,0:00,7:59,310,"$497,396.00","$460,380.00","$1,485.10","$57,667.64"
EWR - RAP,56862956150,E-RAP-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/56862956150,https://www.airlines-manager.com/aircraft/show/116042861,1:15,9:14,310,"$497,396.00","$460,380.00","$1,485.10","$57,667.64"
EWR - RAP,56886798181,E-RAP-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/56886798181,https://www.airlines-manager.com/aircraft/show/116042862,13:00,20:59,310,"$497,396.00","$460,380.00","$1,485.10","$57,667.64"
EWR - RAP,56895754325,E-RAP-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/56895754325,https://www.airlines-manager.com/aircraft/show/116042859,18:30,2:29,310,"$497,396.00","$460,380.00","$1,485.10","$57,667.64"
EWR - RDM,56873155577,E-RDM-MAF-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761172,https://www.airlines-manager.com/network/showflight/56873155577,https://www.airlines-manager.com/aircraft/show/120706939,6:45,17:59,272,"$630,804.00","$594,301.00","$2,184.93","$52,905.13"
EWR - RDM,56883365153,E-RDM-MAF-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761172,https://www.airlines-manager.com/network/showflight/56883365153,https://www.airlines-manager.com/aircraft/show/120706942,12:30,23:44,272,"$630,804.00","$594,301.00","$2,184.93","$52,905.13"
EWR - RDM,56889535210,E-RDM-MAF-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761172,https://www.airlines-manager.com/network/showflight/56889535210,https://www.airlines-manager.com/aircraft/show/120706940,14:15,1:29,272,"$630,804.00","$594,301.00","$2,184.93","$52,905.13"
EWR - RDM,56898577673,E-RDM-MAF-5 B,A319-100,https://www.airlines-manager.com/network/showline/50761172,https://www.airlines-manager.com/network/showflight/56898577673,https://www.airlines-manager.com/aircraft/show/120707022,19:45,6:59,198,"$524,065.00","$484,903.00","$2,449.01","$43,166.44"
EWR - RDM,56903707184,E-RDM-MAF-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761172,https://www.airlines-manager.com/network/showflight/56903707184,https://www.airlines-manager.com/aircraft/show/120706941,22:45,9:59,272,"$630,804.00","$594,301.00","$2,184.93","$52,905.13"
EWR - RDU,56862956353,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/56862956353,https://www.airlines-manager.com/aircraft/show/105731236,1:15,4:59,320,"$201,380.00","$173,412.00",$541.91,"$46,449.64"
EWR - RDU,56866822925,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/56866822925,https://www.airlines-manager.com/aircraft/show/88494376,5:00,8:44,320,"201,380$","173,412$",$541.91,"$46,449.64"
EWR - RDU,56880042733,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/56880042733,https://www.airlines-manager.com/aircraft/show/88494377,11:00,14:44,320,"201,380$","173,412$",$541.91,"$46,449.64"
EWR - RDU,56889535343,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/56889535343,https://www.airlines-manager.com/aircraft/show/88494375,15:30,19:14,320,"201,380$","173,412$",$541.91,"$46,449.64"
EWR - RDU,56903707129,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/56903707129,https://www.airlines-manager.com/aircraft/show/106104450,22:00,1:44,112,"93,326$","78,129$",$697.58,"$20,927.41"
EWR - RIC,56862956307,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/56862956307,https://www.airlines-manager.com/aircraft/show/88494377,1:00,4:14,320,"139,657$","116,236$",$363.24,"$35,949.28"
EWR - RIC,56869877566,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/56869877566,https://www.airlines-manager.com/aircraft/show/88494375,5:30,8:44,320,"$139,657.00","$116,236.00",$363.24,"$35,949.28"
EWR - RIC,56889535229,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/56889535229,https://www.airlines-manager.com/aircraft/show/106104450,14:15,17:29,112,"$62,868.00","$50,351.00",$449.56,"$15,572.47"
EWR - RIC,56895754199,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/56895754199,https://www.airlines-manager.com/aircraft/show/105731236,17:30,20:44,320,"$139,657.00","$116,236.00",$363.24,"$35,949.28"
EWR - RIC,56901278281,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/56901278281,https://www.airlines-manager.com/aircraft/show/88494376,21:15,0:29,320,"$139,657.00","$116,236.00",$363.24,"$35,949.28"
EWR - RNO,56862956497,E-RNO-MEM-5 B,A319-100,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/56862956497,https://www.airlines-manager.com/aircraft/show/100096560,2:00,13:29,198,"$532,092.00","$490,305.00","$2,476.29","$42,697.10"
EWR - RNO,56880042662,E-RNO-MEM-1,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/56880042662,https://www.airlines-manager.com/aircraft/show/99920622,10:15,21:29,320,"$706,113.00","$649,153.00","$2,028.60","$57,788.10"
EWR - RNO,56886798241,E-RNO-MEM-4,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/56886798241,https://www.airlines-manager.com/aircraft/show/99920619,14:00,1:14,320,"$706,113.00","$649,153.00","$2,028.60","$57,788.10"
EWR - RNO,56892624167,E-RNO-MEM-3,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/56892624167,https://www.airlines-manager.com/aircraft/show/99920620,16:30,3:44,320,"$706,113.00","$649,153.00","$2,028.60","$57,788.10"
EWR - RNO,56903707138,E-RNO-MEM-2,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/56903707138,https://www.airlines-manager.com/aircraft/show/99920621,22:15,9:29,320,"$706,113.00","$649,153.00","$2,028.60","$57,788.10"
EWR - ROC,56880042632,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/56880042632,https://www.airlines-manager.com/aircraft/show/119220545,10:00,12:59,310,"$135,540.00","$116,530.00",$375.90,"$39,060.34"
EWR - ROC,56889535235,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/56889535235,https://www.airlines-manager.com/aircraft/show/119220544,14:30,17:29,310,"$135,540.00","$116,530.00",$375.90,"$39,060.34"
EWR - ROC,56895754301,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/56895754301,https://www.airlines-manager.com/aircraft/show/119220543,18:15,21:14,310,"$135,540.00","$116,530.00",$375.90,"$39,060.34"
EWR - ROC,56903707212,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/56903707212,https://www.airlines-manager.com/aircraft/show/119220542,22:45,1:44,310,"$135,540.00","$116,530.00",$375.90,"$39,060.34"
EWR - RSW,56862956657,E-RNO-MEM-1,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/56862956657,https://www.airlines-manager.com/aircraft/show/99920622,3:15,9:29,320,"$390,547.00","$351,777.00","$1,099.30","$56,434.81"
EWR - RSW,56873155609,E-RNO-MEM-4,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/56873155609,https://www.airlines-manager.com/aircraft/show/99920619,7:00,13:14,320,"$390,547.00","$351,777.00","$1,099.30","$56,434.81"
EWR - RSW,56880042660,E-RNO-MEM-3,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/56880042660,https://www.airlines-manager.com/aircraft/show/99920620,10:15,16:29,320,"$390,547.00","$351,777.00","$1,099.30","$56,434.81"
EWR - RSW,56886798299,E-RNO-MEM-5 B,A319-100,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/56886798299,https://www.airlines-manager.com/aircraft/show/100096560,14:00,20:14,198,"$295,991.00","$268,432.00","$1,355.72","$43,063.96"
EWR - RSW,56892624104,E-RNO-MEM-2,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/56892624104,https://www.airlines-manager.com/aircraft/show/99920621,16:00,22:14,320,"$390,547.00","$351,777.00","$1,099.30","$56,434.81"
EWR - SAN,56862956093,E-MIA-ORD-3,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/56862956093,https://www.airlines-manager.com/aircraft/show/113251307,0:00,11:29,338,"$779,172.00","$726,876.00","$2,150.52","$63,298.35"
EWR - SAN,56880042543,E-MIA-ORD-5,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/56880042543,https://www.airlines-manager.com/aircraft/show/113251309,10:00,21:29,338,"$779,172.00","$726,876.00","$2,150.52","$63,298.35"
EWR - SAN,56889535329,E-MIA-ORD-1,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/56889535329,https://www.airlines-manager.com/aircraft/show/113251305,15:15,2:44,338,"$779,172.00","$726,876.00","$2,150.52","$63,298.35"
EWR - SAN,56892624147,E-MIA-ORD-2,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/56892624147,https://www.airlines-manager.com/aircraft/show/113251306,16:15,3:44,338,"$779,172.00","$726,876.00","$2,150.52","$63,298.35"
EWR - SAN,56903707130,E-MIA-ORD-4,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/56903707130,https://www.airlines-manager.com/aircraft/show/113251308,22:15,9:44,338,"$779,172.00","$726,876.00","$2,150.52","$63,298.35"
EWR - SAT,56862956444,E-ELP-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/56862956444,https://www.airlines-manager.com/aircraft/show/103365576,1:45,9:59,320,"$519,976.00","$476,182.00","$1,488.07","$57,835.87"
EWR - SAT,56880042570,E-ELP-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/56880042570,https://www.airlines-manager.com/aircraft/show/103365577,10:00,18:14,320,"$519,976.00","$476,182.00","$1,488.07","$57,835.87"
EWR - SAT,56883365136,E-ELP-SAT-5 B,A319-100,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/56883365136,https://www.airlines-manager.com/aircraft/show/110582847,12:00,20:14,198,"$392,241.00","$360,537.00","$1,820.89","$43,789.92"
EWR - SAT,56898577630,E-ELP-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/56898577630,https://www.airlines-manager.com/aircraft/show/103365578,19:30,3:44,320,"$519,976.00","$476,182.00","$1,488.07","$57,835.87"
EWR - SAT,56903707055,E-ELP-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/56903707055,https://www.airlines-manager.com/aircraft/show/103365575,21:30,5:44,320,"$519,976.00","$476,182.00","$1,488.07","$57,835.87"
EWR - SAV,56866822896,E-COS-ICT-5,ERJ-175,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/56866822896,https://www.airlines-manager.com/aircraft/show/108466265,4:30,9:29,112,"146,760$","129,843$","$1,159.31","$26,055.45"
EWR - SAV,56876734193,E-COS-ICT-3,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/56876734193,https://www.airlines-manager.com/aircraft/show/108834810,9:00,13:59,310,"308,702$","282,567$",$911.51,"$56,702.41"
EWR - SAV,56880042792,E-COS-ICT-2,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/56880042792,https://www.airlines-manager.com/aircraft/show/108834809,11:00,15:59,310,"308,702$","282,567$",$911.51,"$56,702.41"
EWR - SAV,56895754267,E-COS-ICT-1,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/56895754267,https://www.airlines-manager.com/aircraft/show/108834808,18:00,22:59,310,"308,702$","282,567$",$911.51,"$56,702.41"
EWR - SAV,56901278146,E-COS-ICT-4,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/56901278146,https://www.airlines-manager.com/aircraft/show/108834811,20:00,0:59,261,"280,144$","254,960$",$976.86,"$51,162.54"
EWR - SDF,56866822815,E-LIT-FAR-2,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/56866822815,https://www.airlines-manager.com/aircraft/show/86270787,4:00,8:29,310,"296,515$","269,422$",$869.10,"$60,094.13"
EWR - SDF,56876734113,E-LIT-FAR-1,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/56876734113,https://www.airlines-manager.com/aircraft/show/90452834,8:15,12:44,310,"296,515$","269,422$",$869.10,"$60,094.13"
EWR - SDF,56889535288,E-LIT-FAR-4,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/56889535288,https://www.airlines-manager.com/aircraft/show/86270784,15:00,19:29,310,"296,515$","269,422$",$869.10,"$60,094.13"
EWR - SDF,56895754296,E-LIT-FAR-3,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/56895754296,https://www.airlines-manager.com/aircraft/show/86270786,18:15,22:44,310,"$296,515.00","$269,422.00",$869.10,"$60,094.13"
EWR - SEA,56862956302,E-DFW-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/56862956302,https://www.airlines-manager.com/aircraft/show/86238752,1:00,12:14,320,"$713,191.00","$644,122.00","$2,012.88","$57,340.24"
EWR - SEA,56862956303,E-DFW-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/56862956303,https://www.airlines-manager.com/aircraft/show/90489726,3:00,14:14,320,"$713,191.00","$644,122.00","$2,012.88","$57,340.24"
EWR - SEA,56880042729,E-DFW-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/56880042729,https://www.airlines-manager.com/aircraft/show/86238753,11:00,22:14,320,"$713,191.00","$644,122.00","$2,012.88","$57,340.24"
EWR - SEA,56889535276,E-DFW-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/56889535276,https://www.airlines-manager.com/aircraft/show/90489724,15:00,2:14,320,"$713,191.00","$644,122.00","$2,012.88","$57,340.24"
EWR - SEA,56903707191,E-DFW-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/56903707191,https://www.airlines-manager.com/aircraft/show/90489725,22:45,9:59,320,"$713,191.00","$644,122.00","$2,012.88","$57,340.24"
EWR - SEA,56906228785,E-DFW-ATL-6 B,A319-100,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/56906228785,https://www.airlines-manager.com/aircraft/show/105222360,23:30,10:59,198,"$537,220.00","$487,342.00","$2,461.32","$42,439.07"
EWR - SFO,56862956111,E-SFO-LAX-1,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/56862956111,https://www.airlines-manager.com/aircraft/show/83716137,0:00,11:44,400,"$949,362.00","$864,753.00","$2,161.88","$73,700.54"
EWR - SFO,56862956112,E-SFO-LAX-2,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/56862956112,https://www.airlines-manager.com/aircraft/show/89233028,1:30,13:14,400,"$949,362.00","$864,753.00","$2,161.88","$73,700.54"
EWR - SFO,56862956113,E-SFO-LAX-3,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/56862956113,https://www.airlines-manager.com/aircraft/show/89233029,3:00,14:44,400,"$949,362.00","$864,753.00","$2,161.88","$73,700.54"
EWR - SFO,56883365149,E-SFO-LAX-4,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/56883365149,https://www.airlines-manager.com/aircraft/show/89233030,12:15,23:59,400,"$949,362.00","$864,753.00","$2,161.88","$73,700.54"
EWR - SFO,56889535213,E-SFO-LAX-5,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/56889535213,https://www.airlines-manager.com/aircraft/show/89233027,14:15,1:59,400,"$949,362.00","$864,753.00","$2,161.88","$73,700.54"
EWR - SJC,56862956145,E-OAK-SJC-2,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/56862956145,https://www.airlines-manager.com/aircraft/show/104717242,0:00,11:59,310,"$736,357.00","$680,407.00","$2,194.86","$56,779.44"
EWR - SJC,56862956146,E-OAK-SJC-3,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/56862956146,https://www.airlines-manager.com/aircraft/show/104717241,2:00,13:59,310,"$736,357.00","$680,407.00","$2,194.86","$56,779.44"
EWR - SJC,56880042678,E-OAK-SJC-4,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/56880042678,https://www.airlines-manager.com/aircraft/show/104717240,10:30,22:29,310,"$736,357.00","$680,407.00","$2,194.86","$56,779.44"
EWR - SJC,56886798172,E-OAK-SJC-5,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/56886798172,https://www.airlines-manager.com/aircraft/show/104717239,13:00,0:59,310,"$736,357.00","$680,407.00","$2,194.86","$56,779.44"
EWR - SJC,56903707108,E-OAK-SJC-1,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/56903707108,https://www.airlines-manager.com/aircraft/show/104717243,22:00,9:59,310,"$736,357.00","$680,407.00","$2,194.86","$56,779.44"
EWR - SJU,56862956230,E-CUN-SJU-1,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/56862956230,https://www.airlines-manager.com/aircraft/show/106581304,0:30,8:44,320,"$528,828.00","$482,931.00","$1,509.16","$58,655.59"
EWR - SJU,56862956231,E-CUN-SJU-4,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/56862956231,https://www.airlines-manager.com/aircraft/show/106581307,2:00,10:14,320,"$528,828.00","$482,931.00","$1,509.16","$58,655.59"
EWR - SJU,56873155606,E-CUN-SJU-5,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/56873155606,https://www.airlines-manager.com/aircraft/show/86238754,7:00,15:14,320,"$528,828.00","$482,931.00","$1,509.16","$58,655.59"
EWR - SJU,56886798118,E-CUN-SJU-3,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/56886798118,https://www.airlines-manager.com/aircraft/show/106581306,13:00,21:14,320,"$528,828.00","$482,931.00","$1,509.16","$58,655.59"
EWR - SJU,56889535231,E-CUN-SJU-2,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/56889535231,https://www.airlines-manager.com/aircraft/show/106581305,14:30,22:44,320,"$528,828.00","$482,931.00","$1,509.16","$58,655.59"
EWR - SLC,56862956207,E-DEN-SLC-2,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/56862956207,https://www.airlines-manager.com/aircraft/show/87153196,0:15,9:59,310,"$614,239.00","$562,310.00","$1,813.90","$57,771.58"
EWR - SLC,56862956208,E-DEN-SLC-5,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/56862956208,https://www.airlines-manager.com/aircraft/show/90452833,0:15,9:59,310,"$614,239.00","$562,310.00","$1,813.90","$57,771.58"
EWR - SLC,56862956209,E-DEN-SLC-6 B,A319-100,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/56862956209,https://www.airlines-manager.com/aircraft/show/105223076,1:15,10:59,198,"$461,814.00","$420,187.00","$2,122.16","$43,169.90"
EWR - SLC,56880042590,E-DEN-SLC-1,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/56880042590,https://www.airlines-manager.com/aircraft/show/86270785,10:00,19:44,310,"$614,239.00","$562,310.00","$1,813.90","$57,771.58"
EWR - SLC,56880042591,E-DEN-SLC-4,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/56880042591,https://www.airlines-manager.com/aircraft/show/90452835,11:00,20:44,310,"$614,239.00","$562,310.00","$1,813.90","$57,771.58"
EWR - SLC,56898577599,E-DEN-SLC-3,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/56898577599,https://www.airlines-manager.com/aircraft/show/86270783,19:15,4:59,310,"$614,239.00","$562,310.00","$1,813.90","$57,771.58"
EWR - SMF,56862956127,E-SMF-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/56862956127,https://www.airlines-manager.com/aircraft/show/94889150,0:00,11:44,320,"$720,802.00","$662,355.00","$2,069.86","$56,450.71"
EWR - SMF,56862956128,E-SMF-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/56862956128,https://www.airlines-manager.com/aircraft/show/94889151,1:30,13:14,320,"$720,802.00","$662,355.00","$2,069.86","$56,450.71"
EWR - SMF,56862956129,E-SMF-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/56862956129,https://www.airlines-manager.com/aircraft/show/94889152,3:00,14:44,320,"$720,802.00","$662,355.00","$2,069.86","$56,450.71"
EWR - SMF,56883365063,E-SMF-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/56883365063,https://www.airlines-manager.com/aircraft/show/94889153,11:30,23:14,320,"$720,802.00","$662,355.00","$2,069.86","$56,450.71"
EWR - SMF,56886798208,E-SMF-ONT-5,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/56886798208,https://www.airlines-manager.com/aircraft/show/94889154,13:30,1:14,320,"$720,802.00","$662,355.00","$2,069.86","$56,450.71"
EWR - SNN,56880042686,E-56B-6 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/56880042686,https://www.airlines-manager.com/aircraft/show/94521248,10:45,23:59,748,"$2,089,804.00","$1,906,543.00","$2,548.85","$144,071.26"
EWR - SNN,56898577545,E-56B-5 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/56898577545,https://www.airlines-manager.com/aircraft/show/94521253,18:45,7:59,748,"$2,003,611.00","$1,846,437.00","$2,468.50","$139,529.24"
EWR - SRQ,56862956277,E-MTJ-ECP-1,737-900ER,https://www.airlines-manager.com/network/showline/50761179,https://www.airlines-manager.com/network/showflight/56862956277,https://www.airlines-manager.com/aircraft/show/120706946,0:45,6:44,320,"$383,317.00","$348,639.00","$1,089.50","$58,268.36"
EWR - SRQ,56880042586,E-MTJ-ECP-3,737-900ER,https://www.airlines-manager.com/network/showline/50761179,https://www.airlines-manager.com/network/showflight/56880042586,https://www.airlines-manager.com/aircraft/show/120706944,10:00,15:59,320,"$383,317.00","$348,639.00","$1,089.50","$58,268.36"
EWR - SRQ,56892624056,E-MTJ-ECP-2,737-900ER,https://www.airlines-manager.com/network/showline/50761179,https://www.airlines-manager.com/network/showflight/56892624056,https://www.airlines-manager.com/aircraft/show/120706945,15:45,21:44,320,"$383,317.00","$348,639.00","$1,089.50","$58,268.36"
EWR - SRQ,56901278233,E-MTJ-ECP-4,737-900ER,https://www.airlines-manager.com/network/showline/50761179,https://www.airlines-manager.com/network/showflight/56901278233,https://www.airlines-manager.com/aircraft/show/120706943,20:45,2:44,296,"$365,751.00","$331,741.00","$1,120.75","$55,444.18"
EWR - STL,56862956295,E-STL-PIT-3,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/56862956295,https://www.airlines-manager.com/aircraft/show/115400546,1:00,6:29,338,"$374,762.00","$343,767.00","$1,017.06","$62,693.07"
EWR - STL,56866822833,E-STL-PIT-2,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/56866822833,https://www.airlines-manager.com/aircraft/show/115400547,4:15,9:44,338,"$374,762.00","$343,767.00","$1,017.06","$62,693.07"
EWR - STL,56880042546,E-STL-PIT-1,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/56880042546,https://www.airlines-manager.com/aircraft/show/115400548,10:00,15:29,338,"$374,762.00","$343,767.00","$1,017.06","$62,693.07"
EWR - STL,56886798308,E-STL-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/56886798308,https://www.airlines-manager.com/aircraft/show/98887257,14:00,19:29,112,"$163,866.00","$143,099.00","$1,277.67","$26,097.08"
EWR - STL,56892624149,E-STL-PIT-4,A321neo-LR,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/56892624149,https://www.airlines-manager.com/aircraft/show/103406580,16:15,21:44,338,"$378,117.00","$346,673.00","$1,025.66","$63,223.04"
EWR - STL,56903707216,E-STL-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/56903707216,https://www.airlines-manager.com/aircraft/show/98887257,22:45,4:14,112,"$163,866.00","$143,099.00","$1,277.67","$26,097.08"
EWR - SYR,56862956466,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/56862956466,https://www.airlines-manager.com/aircraft/show/119220542,1:45,4:44,310,"$125,306.00","$106,702.00",$344.20,"$35,766.03"
EWR - SYR,56886798183,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/56886798183,https://www.airlines-manager.com/aircraft/show/119220545,13:00,15:59,310,"$125,306.00","$106,702.00",$344.20,"$35,766.03"
EWR - SYR,56895754208,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/56895754208,https://www.airlines-manager.com/aircraft/show/119220544,17:30,20:29,310,"$125,306.00","$106,702.00",$344.20,"$35,766.03"
EWR - SYR,56901278293,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/56901278293,https://www.airlines-manager.com/aircraft/show/119220543,21:15,0:14,310,"$125,306.00","$106,702.00",$344.20,"$35,766.03"
EWR - TLV,56862956648,E-TLV-2 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/56862956648,https://www.airlines-manager.com/aircraft/show/89124073,3:00,1:29,884,"$3,672,705.00","$3,353,356.00","$3,793.39","$149,148.52"
EWR - TLV,56901278275,E-TLV-1 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/56901278275,https://www.airlines-manager.com/aircraft/show/93429385,21:00,19:29,884,"$3,672,705.00","$3,353,356.00","$3,793.39","$149,148.52"
EWR - TPA,56869877597,E-TUS-TPA-3,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/56869877597,https://www.airlines-manager.com/aircraft/show/98379317,5:45,11:44,310,"$377,862.00","$342,681.00","$1,105.42","$57,272.59"
EWR - TPA,56880042685,E-TUS-TPA-4,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/56880042685,https://www.airlines-manager.com/aircraft/show/98379316,10:45,16:44,310,"$377,862.00","$342,681.00","$1,105.42","$57,272.59"
EWR - TPA,56886798161,E-TUS-TPA-2,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/56886798161,https://www.airlines-manager.com/aircraft/show/98379318,13:00,18:59,310,"$377,862.00","$342,681.00","$1,105.42","$57,272.59"
EWR - TPA,56889535297,E-TUS-TPA-5,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/56889535297,https://www.airlines-manager.com/aircraft/show/98379315,15:00,20:59,310,"$377,862.00","$342,681.00","$1,105.42","$57,272.59"
EWR - TPA,56906228755,E-TUS-TPA-1,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/56906228755,https://www.airlines-manager.com/aircraft/show/98379319,23:15,5:14,310,"$377,862.00","$342,681.00","$1,105.42","$57,272.59"
EWR - TUL,56862956463,E-TUL-DSM-3,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/56862956463,https://www.airlines-manager.com/aircraft/show/110044465,1:45,8:29,310,"428,315$","394,214$","$1,271.66","$58,546.63"
EWR - TUL,56862956464,E-TUL-DSM-2,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/56862956464,https://www.airlines-manager.com/aircraft/show/110044464,3:30,10:14,310,"428,315$","394,214$","$1,271.66","$58,546.63"
EWR - TUL,56886798177,E-TUL-DSM-1,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/56886798177,https://www.airlines-manager.com/aircraft/show/110044463,13:00,19:44,310,"428,315$","394,214$","$1,271.66","$58,546.63"
EWR - TUL,56892624181,E-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/56892624181,https://www.airlines-manager.com/aircraft/show/110113039,16:30,23:14,112,"201,473$","178,896$","$1,597.29","$26,568.71"
EWR - TUL,56898577539,E-TUL-DSM-4,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/56898577539,https://www.airlines-manager.com/aircraft/show/110044466,18:45,1:29,310,"$428,315.00","$394,214.00","$1,271.66","$58,546.63"
EWR - TUS,56862956251,E-TUS-TPA-4,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/56862956251,https://www.airlines-manager.com/aircraft/show/98379316,0:30,10:44,310,"$641,733.00","$593,639.00","$1,914.96","$58,010.33"
EWR - TUS,56862956252,E-TUS-TPA-2,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/56862956252,https://www.airlines-manager.com/aircraft/show/98379318,1:30,11:44,310,"$641,733.00","$593,639.00","$1,914.96","$58,010.33"
EWR - TUS,56862956253,E-TUS-TPA-5,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/56862956253,https://www.airlines-manager.com/aircraft/show/98379315,3:30,13:44,310,"$641,733.00","$593,639.00","$1,914.96","$58,010.33"
EWR - TUS,56886798162,E-TUS-TPA-1,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/56886798162,https://www.airlines-manager.com/aircraft/show/98379319,13:00,23:14,310,"$641,733.00","$593,639.00","$1,914.96","$58,010.33"
EWR - TUS,56898577639,E-TUS-TPA-3,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/56898577639,https://www.airlines-manager.com/aircraft/show/98379317,19:30,5:44,310,"$641,733.00","$593,639.00","$1,914.96","$58,010.33"
EWR - TYS,56862956642,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/56862956642,https://www.airlines-manager.com/aircraft/show/119220543,3:00,7:29,310,"$291,829.00","$266,978.00",$861.22,"$59,549.00"
EWR - TYS,56880042629,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/56880042629,https://www.airlines-manager.com/aircraft/show/119220542,10:00,14:29,310,"$291,829.00","$266,978.00",$861.22,"$59,549.00"
EWR - TYS,56898577543,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/56898577543,https://www.airlines-manager.com/aircraft/show/119220545,18:45,23:14,310,"$291,829.00","$266,978.00",$861.22,"$59,549.00"
EWR - TYS,56906228759,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/56906228759,https://www.airlines-manager.com/aircraft/show/119220544,23:15,3:44,310,"$291,829.00","$266,978.00",$861.22,"$59,549.00"
EWR - VCE,56862956650,E-84B-3  B2,777-300,https://www.airlines-manager.com/network/showline/49921914,https://www.airlines-manager.com/network/showflight/56862956650,https://www.airlines-manager.com/aircraft/show/117958697,3:00,20:14,852,"$2,729,726.00","$2,489,336.00","$2,921.76","$144,448.90"
EWR - VCE,56889535318,E-84B-6  B2,777-300,https://www.airlines-manager.com/network/showline/49921914,https://www.airlines-manager.com/network/showflight/56889535318,https://www.airlines-manager.com/aircraft/show/117958700,15:00,8:14,823,"$2,654,951.00","$2,422,853.00","$2,943.93","$140,591.08"
EWR - YEG,56862956192,E-YEG-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/56862956192,https://www.airlines-manager.com/aircraft/show/98936170,0:15,10:14,320,"$636,684.00","$584,290.00","$1,825.91","$58,526.54"
EWR - YEG,56862956193,E-YEG-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/56862956193,https://www.airlines-manager.com/aircraft/show/98936171,2:15,12:14,320,"$636,684.00","$584,290.00","$1,825.91","$58,526.54"
EWR - YEG,56880042740,E-YEG-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/56880042740,https://www.airlines-manager.com/aircraft/show/98936168,11:00,20:59,320,"636,684$","584,290$","$1,825.91","$58,526.54"
EWR - YEG,56883365156,E-YEG-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/56883365156,https://www.airlines-manager.com/aircraft/show/98936169,12:30,22:29,320,"636,684$","584,290$","$1,825.91","$58,526.54"
EWR - YEG,56903707122,E-YEG-BFF-5 B,A319-100,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/56903707122,https://www.airlines-manager.com/aircraft/show/115493369,22:00,7:59,198,"475,490$","437,332$","$2,208.75","$43,806.21"
EWR - YOW,56876734217,E-CUN-SJU-1,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/56876734217,https://www.airlines-manager.com/aircraft/show/106581304,9:30,12:59,320,"171,271$","145,940$",$456.06,"$41,896.65"
EWR - YOW,56880042745,E-CUN-SJU-4,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/56880042745,https://www.airlines-manager.com/aircraft/show/106581307,11:00,14:29,320,"171,271$","145,940$",$456.06,"$41,896.65"
EWR - YOW,56898577520,E-CUN-SJU-5,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/56898577520,https://www.airlines-manager.com/aircraft/show/86238754,18:45,22:14,320,"$171,271.00","$145,940.00",$456.06,"$41,896.65"
EWR - YOW,56901278285,E-CUN-SJU-3,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/56901278285,https://www.airlines-manager.com/aircraft/show/106581306,21:15,0:44,320,"$171,271.00","$145,940.00",$456.06,"$41,896.65"
EWR - YOW,56903707195,E-CUN-SJU-2,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/56903707195,https://www.airlines-manager.com/aircraft/show/106581305,22:45,2:14,294,"$162,785.00","$137,684.00",$468.31,"$39,526.51"
EWR - YUL,56876734218,E-CUN-SJU-3,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/56876734218,https://www.airlines-manager.com/aircraft/show/106581306,9:30,12:59,320,"$174,699.00","$146,541.00",$457.94,"$42,069.19"
EWR - YUL,56880042744,E-CUN-SJU-2,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/56880042744,https://www.airlines-manager.com/aircraft/show/106581305,11:00,14:29,320,"$174,699.00","$146,541.00",$457.94,"$42,069.19"
EWR - YUL,56889535331,E-CUN-SJU-5,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/56889535331,https://www.airlines-manager.com/aircraft/show/86238754,15:15,18:44,320,"$174,699.00","$146,541.00",$457.94,"$42,069.19"
EWR - YUL,56901278256,E-CUN-SJU-1,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/56901278256,https://www.airlines-manager.com/aircraft/show/106581304,21:00,0:29,320,"$174,699.00","$146,541.00",$457.94,"$42,069.19"
EWR - YUL,56903707171,E-CUN-SJU-4,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/56903707171,https://www.airlines-manager.com/aircraft/show/106581307,22:30,1:59,320,"$174,699.00","$146,541.00",$457.94,"$42,069.19"
EWR - YVR,56862956123,E-YVR-YYC-1,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/56862956123,https://www.airlines-manager.com/aircraft/show/113681636,0:00,11:14,400,"$912,826.00","$840,448.00","$2,101.12","$74,817.33"
EWR - YVR,56862956124,E-YVR-YYC-2,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/56862956124,https://www.airlines-manager.com/aircraft/show/113681637,1:30,12:44,400,"$912,826.00","$840,448.00","$2,101.12","$74,817.33"
EWR - YVR,56862956125,E-YVR-YYC-3,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/56862956125,https://www.airlines-manager.com/aircraft/show/113681638,3:00,14:14,400,"$912,826.00","$840,448.00","$2,101.12","$74,817.33"
EWR - YVR,56883365057,E-YVR-YYC-4,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/56883365057,https://www.airlines-manager.com/aircraft/show/113681639,11:15,22:29,400,"$912,826.00","$840,448.00","$2,101.12","$74,817.33"
EWR - YVR,56886798050,E-YVR-YYC-5,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/56886798050,https://www.airlines-manager.com/aircraft/show/113681640,12:45,23:59,400,"$912,826.00","$840,448.00","$2,101.12","$74,817.33"
EWR - YYC,56862956396,E-YVR-YYC-4,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/56862956396,https://www.airlines-manager.com/aircraft/show/113681639,1:30,11:14,400,"$791,438.00","$727,885.00","$1,819.71","$74,782.71"
EWR - YYC,56862956397,E-YVR-YYC-5,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/56862956397,https://www.airlines-manager.com/aircraft/show/113681640,3:00,12:44,400,"$791,438.00","$727,885.00","$1,819.71","$74,782.71"
EWR - YYC,56883365056,E-YVR-YYC-1,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/56883365056,https://www.airlines-manager.com/aircraft/show/113681636,11:15,20:59,400,"$791,438.00","$727,885.00","$1,819.71","$74,782.71"
EWR - YYC,56886798049,E-YVR-YYC-2,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/56886798049,https://www.airlines-manager.com/aircraft/show/113681637,12:45,22:29,400,"$791,438.00","$727,885.00","$1,819.71","$74,782.71"
EWR - YYC,56889535214,E-YVR-YYC-3,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/56889535214,https://www.airlines-manager.com/aircraft/show/113681638,14:15,23:59,400,"$791,438.00","$727,885.00","$1,819.71","$74,782.71"
EWR - YYZ,56862956501,E-DTW-YYZ-4,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/56862956501,https://www.airlines-manager.com/aircraft/show/92003922,2:15,5:44,320,"$180,492.00","$146,154.00",$456.73,"$41,958.09"
EWR - YYZ,56873155638,E-DTW-YYZ-5,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/56873155638,https://www.airlines-manager.com/aircraft/show/92003921,7:30,10:59,320,"$180,492.00","$146,154.00",$456.73,"$41,958.09"
EWR - YYZ,56880042560,E-DTW-YYZ-2,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/56880042560,https://www.airlines-manager.com/aircraft/show/92003924,10:00,13:29,320,"$180,492.00","$146,154.00",$456.73,"$41,958.09"
EWR - YYZ,56886798236,E-DTW-YYZ-1,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/56886798236,https://www.airlines-manager.com/aircraft/show/92003925,14:00,17:29,320,"$180,492.00","$146,154.00",$456.73,"$41,958.09"
EWR - YYZ,56895754290,E-DTW-YYZ-3,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/56895754290,https://www.airlines-manager.com/aircraft/show/92003923,18:15,21:44,320,"$180,492.00","$146,154.00",$456.73,"$41,958.09"
EWR - ZRH,56873155700,E-84A-6 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/56873155700,https://www.airlines-manager.com/aircraft/show/90656552,7:45,23:59,852,"$2,642,406.00","$2,399,717.00","$2,816.57","$147,826.51"
EWR - ZRH,56901278164,E-84A-7 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/56901278164,https://www.airlines-manager.com/aircraft/show/94521249,20:00,12:14,852,"$2,642,406.00","$2,399,717.00","$2,816.57","$147,826.51"
HNL - AKL,56892624142,H-84B-2 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/56892624142,https://www.airlines-manager.com/aircraft/show/96807092,16:00,9:59,832,"$2,918,341.00","$2,661,151.00","$3,198.50","$147,978.74"
HNL - AKL,56906228742,H-84B-6 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/56906228742,https://www.airlines-manager.com/aircraft/show/96807088,23:00,16:59,832,"$2,900,946.00","$2,649,712.00","$3,184.75","$147,342.65"
HNL - ATL,56866822901,H-56B-2 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/56866822901,https://www.airlines-manager.com/aircraft/show/109187499,4:45,22:44,592,"$2,202,643.00","$2,016,788.00","$3,406.74","$112,147.62"
HNL - ATL,56892624087,H-56B-4 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/56892624087,https://www.airlines-manager.com/aircraft/show/109187501,16:00,9:59,592,"$2,202,643.00","$2,016,788.00","$3,406.74","$112,147.62"
HNL - ATL,56903707188,H-56B-2 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/56903707188,https://www.airlines-manager.com/aircraft/show/109187499,22:45,16:44,592,"$2,202,643.00","$2,016,788.00","$3,406.74","$112,147.62"
HNL - BNE,56866822826,H-84B-6 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/56866822826,https://www.airlines-manager.com/aircraft/show/96807088,4:00,22:59,832,"$3,061,944.00","$2,793,095.00","$3,357.09","$147,134.06"
HNL - BNE,56880042650,H-84B-3 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/56880042650,https://www.airlines-manager.com/aircraft/show/96807091,10:00,4:59,832,"$3,043,502.00","$2,780,999.00","$3,342.55","$146,496.87"
HNL - BOS,56862956110,H-56E-6 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/56862956110,https://www.airlines-manager.com/aircraft/show/117414505,0:00,19:59,592,"$2,408,347.00","$2,248,895.00","$3,798.81","$112,538.53"
HNL - BOS,56876734127,H-56E-1 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/56876734127,https://www.airlines-manager.com/aircraft/show/117414500,8:30,4:29,592,"$2,408,347.00","$2,248,895.00","$3,798.81","$112,538.53"
HNL - BOS,56880042548,H-56E-4 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/56880042548,https://www.airlines-manager.com/aircraft/show/117414503,10:00,5:59,592,"$2,408,347.00","$2,248,895.00","$3,798.81","$112,538.53"
HNL - BWI,56862956534,H-56F-4 B,787-10,https://www.airlines-manager.com/network/showline/50049284,https://www.airlines-manager.com/network/showflight/56862956534,https://www.airlines-manager.com/aircraft/show/118383854,2:30,21:44,592,"$2,293,871.00","$2,143,128.00","$3,620.15","$111,427.80"
HNL - BWI,56883365074,H-56F-5 B,787-10,https://www.airlines-manager.com/network/showline/50049284,https://www.airlines-manager.com/network/showflight/56883365074,https://www.airlines-manager.com/aircraft/show/118383855,11:45,6:59,592,"$2,293,871.00","$2,143,128.00","$3,620.15","$111,427.80"
HNL - BWI,56892624204,H-56F-1 B,787-10,https://www.airlines-manager.com/network/showline/50049284,https://www.airlines-manager.com/network/showflight/56892624204,https://www.airlines-manager.com/aircraft/show/118383851,17:00,12:14,589,"$2,286,471.00","$2,136,091.00","$3,626.64","$111,061.92"
HNL - CLT,56866822873,H-56D-3 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/56866822873,https://www.airlines-manager.com/aircraft/show/112066134,4:30,23:14,592,"$2,263,173.00","$2,107,474.00","$3,559.92","$112,498.61"
HNL - CLT,56869877564,H-56D-5 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/56869877564,https://www.airlines-manager.com/aircraft/show/112066136,5:30,0:14,592,"$2,263,173.00","$2,107,474.00","$3,559.92","$112,498.61"
HNL - CLT,56906228747,H-56D-3 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/56906228747,https://www.airlines-manager.com/aircraft/show/112066134,23:15,17:59,592,"$2,263,173.00","$2,107,474.00","$3,559.92","$112,498.61"
HNL - CXI,56869877576,H-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/56869877576,https://www.airlines-manager.com/aircraft/show/90717080,5:30,12:44,388,"$494,113.00","$463,605.00","$1,194.86","$64,092.86"
HNL - CXI,56889535294,H-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/56889535294,https://www.airlines-manager.com/aircraft/show/90717080,15:00,22:14,388,"$494,113.00","$463,605.00","$1,194.86","$64,092.86"
HNL - CXI,56903707144,H-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/56903707144,https://www.airlines-manager.com/aircraft/show/90717080,22:15,5:29,388,"$494,113.00","$463,605.00","$1,194.86","$64,092.86"
HNL - DEN,56873155603,H-56F-6 B,787-10,https://www.airlines-manager.com/network/showline/43762939,https://www.airlines-manager.com/network/showflight/56873155603,https://www.airlines-manager.com/aircraft/show/118383856,7:00,20:59,592,"$1,714,252.00","$1,569,460.00","$2,651.11","$112,237.90"
HNL - DEN,56892624205,H-56F-2 B,787-10,https://www.airlines-manager.com/network/showline/43762939,https://www.airlines-manager.com/network/showflight/56892624205,https://www.airlines-manager.com/aircraft/show/118383852,17:00,6:59,592,"$1,714,252.00","$1,569,460.00","$2,651.11","$112,237.90"
HNL - DEN,56903707076,H-56F-4 B,787-10,https://www.airlines-manager.com/network/showline/43762939,https://www.airlines-manager.com/network/showflight/56903707076,https://www.airlines-manager.com/aircraft/show/118383854,21:45,11:44,592,"$1,714,252.00","$1,569,460.00","$2,651.11","$112,237.90"
HNL - DFW,56866822881,H-56E-2 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/56866822881,https://www.airlines-manager.com/aircraft/show/117414501,4:30,19:59,592,"$1,894,637.00","$1,743,253.00","$2,944.68","$112,589.00"
HNL - DFW,56892624203,H-56E-7 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/56892624203,https://www.airlines-manager.com/aircraft/show/117414506,17:00,8:29,592,"1,894,637$","1,743,253$","$2,944.68","$112,589.00"
HNL - DFW,56895754311,H-56E-3 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/56895754311,https://www.airlines-manager.com/aircraft/show/117414502,18:30,9:59,592,"1,894,637$","1,743,253$","$2,944.68","$112,589.00"
HNL - DTW,56869877608,H-56E-5 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/56869877608,https://www.airlines-manager.com/aircraft/show/117414504,6:00,23:59,592,"2,160,456$","2,010,661$","$3,396.39","$111,806.91"
HNL - DTW,56901278129,H-56E-2 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/56901278129,https://www.airlines-manager.com/aircraft/show/117414501,20:00,13:59,592,"2,160,456$","2,010,661$","$3,396.39","$111,806.91"
HNL - DTW,56901278130,H-56E-6 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/56901278130,https://www.airlines-manager.com/aircraft/show/117414505,20:00,13:59,592,"$2,160,456.00","$2,010,661.00","$3,396.39","$111,806.91"
HNL - EWR,56866822837,H-56A-7 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/56866822837,https://www.airlines-manager.com/aircraft/show/95351586,4:15,23:59,592,"$2,374,139.00","$2,212,224.00","$3,736.86","$112,105.95"
HNL - EWR,56869877605,H-56A-6 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/56869877605,https://www.airlines-manager.com/aircraft/show/95351587,6:00,1:44,592,"$2,374,139.00","$2,212,224.00","$3,736.86","$112,105.95"
HNL - EWR,56898577650,H-56A-3 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/56898577650,https://www.airlines-manager.com/aircraft/show/95351590,19:45,15:29,592,"$2,374,139.00","$2,212,224.00","$3,736.86","$112,105.95"
HNL - GUM,56862956105,H-GUM,A321neo,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/56862956105,https://www.airlines-manager.com/aircraft/show/115400544,0:00,16:44,338,"$1,125,989.00","$1,062,930.00","$3,144.76","$63,521.71"
HNL - GUM,56866822918,H-84A-3 F,777-300,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/56866822918,https://www.airlines-manager.com/aircraft/show/95818924,4:45,20:29,832,"$2,562,457.00","$2,362,030.00","$2,838.98","$150,129.03"
HNL - IAD,56862956655,H-56C-3 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/56862956655,https://www.airlines-manager.com/aircraft/show/111639415,3:15,22:14,592,"$2,279,774.00","$2,127,047.00","$3,592.98","$112,048.13"
HNL - IAD,56876734205,H-56C-5 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/56876734205,https://www.airlines-manager.com/aircraft/show/111639417,9:15,4:14,592,"$2,279,774.00","$2,127,047.00","$3,592.98","$112,048.13"
HNL - IAD,56901278128,H-56C-7 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/56901278128,https://www.airlines-manager.com/aircraft/show/111639419,20:00,14:59,592,"$2,279,774.00","$2,127,047.00","$3,592.98","$112,048.13"
HNL - IAH,56862956107,H-56A-1 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/56862956107,https://www.airlines-manager.com/aircraft/show/95351592,0:00,15:59,592,"$1,936,223.00","$1,795,912.00","$3,033.64","$112,361.54"
HNL - IAH,56862956108,H-56A-3 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/56862956108,https://www.airlines-manager.com/aircraft/show/95351590,3:45,19:44,592,"$1,936,223.00","$1,795,912.00","$3,033.64","$112,361.54"
HNL - IAH,56892624086,H-56A-1 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/56892624086,https://www.airlines-manager.com/aircraft/show/95351592,16:00,7:59,592,"$1,936,223.00","$1,795,912.00","$3,033.64","$112,361.54"
HNL - ITO,56862956472,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/56862956472,https://www.airlines-manager.com/aircraft/show/94803593,1:45,4:44,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,56862956473,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/56862956473,https://www.airlines-manager.com/aircraft/show/94803596,3:15,6:14,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,56869877628,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/56869877628,https://www.airlines-manager.com/aircraft/show/94803595,6:00,8:59,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,56876734223,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/56876734223,https://www.airlines-manager.com/aircraft/show/94803594,9:30,12:29,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,56889535319,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/56889535319,https://www.airlines-manager.com/aircraft/show/94803593,15:00,17:59,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,56892624180,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/56892624180,https://www.airlines-manager.com/aircraft/show/94803596,16:30,19:29,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,56898577620,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/56898577620,https://www.airlines-manager.com/aircraft/show/94803595,19:15,22:14,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,56903707215,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/56903707215,https://www.airlines-manager.com/aircraft/show/94803594,22:45,1:44,129,"$66,486.00","$56,402.00",$437.22,"$18,905.70"
HNL - JFK,56862956615,H-56B-6 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/56862956615,https://www.airlines-manager.com/aircraft/show/109187503,3:00,22:44,592,"$2,407,083.00","$2,224,643.00","$3,757.84","$112,735.29"
HNL - JFK,56876734185,H-56B-1 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/56876734185,https://www.airlines-manager.com/aircraft/show/109187498,9:00,4:44,592,"$2,407,083.00","$2,224,643.00","$3,757.84","$112,735.29"
HNL - JFK,56892624202,H-56B-3 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/56892624202,https://www.airlines-manager.com/aircraft/show/109187500,17:00,12:44,592,"2,407,083$","2,224,643$","$3,757.84","$112,735.29"
HNL - KOA,56862956289,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/56862956289,https://www.airlines-manager.com/aircraft/show/94803595,0:45,3:29,170,"58,952$","48,574$",$285.73,"$17,770.98"
HNL - KOA,56866822864,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/56866822864,https://www.airlines-manager.com/aircraft/show/94803594,4:15,6:59,170,"58,952$","48,574$",$285.73,"$17,770.98"
HNL - KOA,56873155633,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/56873155633,https://www.airlines-manager.com/aircraft/show/94803593,7:15,9:59,170,"58,952$","48,574$",$285.73,"$17,770.98"
HNL - KOA,56876734179,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/56876734179,https://www.airlines-manager.com/aircraft/show/94803596,8:45,11:29,170,"$58,952.00","$48,574.00",$285.73,"$17,770.98"
HNL - KOA,56886798305,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/56886798305,https://www.airlines-manager.com/aircraft/show/94803595,14:00,16:44,170,"$58,952.00","$48,574.00",$285.73,"$17,770.98"
HNL - KOA,56895754209,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/56895754209,https://www.airlines-manager.com/aircraft/show/94803594,17:30,20:14,170,"$58,952.00","$48,574.00",$285.73,"$17,770.98"
HNL - KOA,56901278217,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/56901278217,https://www.airlines-manager.com/aircraft/show/94803593,20:30,23:14,170,"$58,952.00","$48,574.00",$285.73,"$17,770.98"
HNL - KOA,56903707124,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/56903707124,https://www.airlines-manager.com/aircraft/show/94803596,22:00,0:44,170,"$58,952.00","$48,574.00",$285.73,"$17,770.98"
HNL - LAS,56869877651,H-84A-5 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/56869877651,https://www.airlines-manager.com/aircraft/show/95818922,6:30,18:29,832,"$1,898,127.00","$1,711,499.00","$2,057.09","$142,823.28"
HNL - LAS,56892624178,H-LAS S,A321-200,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/56892624178,https://www.airlines-manager.com/aircraft/show/116385511,16:30,5:14,232,"$747,103.00","$675,601.00","$2,912.07","$53,057.67"
HNL - LAS,56901278214,H-84A-3 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/56901278214,https://www.airlines-manager.com/aircraft/show/95818924,20:30,8:29,806,"$1,858,782.00","$1,674,579.00","$2,077.64","$139,742.34"
HNL - LAX,56873155600,H-SFO-LAX-3,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/56873155600,https://www.airlines-manager.com/aircraft/show/110044460,7:00,18:59,338,"$790,352.00","$722,080.00","$2,136.33","$60,257.02"
HNL - LAX,56876734183,H-SFO-LAX-4,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/56876734183,https://www.airlines-manager.com/aircraft/show/110044461,9:00,20:59,338,"$790,352.00","$722,080.00","$2,136.33","$60,257.02"
HNL - LAX,56880042647,H-SFO-LAX-6 B,A319-100,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/56880042647,https://www.airlines-manager.com/aircraft/show/106106389,10:00,21:59,198,"$546,807.00","$489,527.00","$2,472.36","$40,850.65"
HNL - LAX,56895754286,H-SFO-LAX-1,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/56895754286,https://www.airlines-manager.com/aircraft/show/110044458,18:15,6:14,338,"$790,352.00","$722,080.00","$2,136.33","$60,257.02"
HNL - LAX,56901278169,H-SFO-LAX-2,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/56901278169,https://www.airlines-manager.com/aircraft/show/110044459,20:15,8:14,338,"$790,352.00","$722,080.00","$2,136.33","$60,257.02"
HNL - LAX,56903707074,H-SFO-LAX-5,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/56903707074,https://www.airlines-manager.com/aircraft/show/110044462,21:45,9:44,338,"$790,352.00","$722,080.00","$2,136.33","$60,257.02"
HNL - LIH,56862956290,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/56862956290,https://www.airlines-manager.com/aircraft/show/94803596,0:45,3:14,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,56862956291,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/56862956291,https://www.airlines-manager.com/aircraft/show/94803595,3:30,5:59,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,56873155618,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/56873155618,https://www.airlines-manager.com/aircraft/show/94803594,7:00,9:29,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,56880042652,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/56880042652,https://www.airlines-manager.com/aircraft/show/94803593,10:00,12:29,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,56886798306,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/56886798306,https://www.airlines-manager.com/aircraft/show/94803596,14:00,16:29,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,56892624195,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/56892624195,https://www.airlines-manager.com/aircraft/show/94803595,16:45,19:14,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,56901278195,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/56901278195,https://www.airlines-manager.com/aircraft/show/94803594,20:15,22:44,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,56906228764,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/56906228764,https://www.airlines-manager.com/aircraft/show/94803593,23:15,1:44,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LNY,56862956334,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/56862956334,https://www.airlines-manager.com/aircraft/show/106107514,1:00,3:29,116,"$30,431.00","$25,424.00",$219.17,"$10,237.85"
HNL - LNY,56862956335,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/56862956335,https://www.airlines-manager.com/aircraft/show/106107514,3:30,5:59,116,"30,431$","25,424$",$219.17,"$10,237.85"
HNL - LNY,56869877629,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/56869877629,https://www.airlines-manager.com/aircraft/show/106107514,6:00,8:29,116,"30,431$","25,424$",$219.17,"$10,237.85"
HNL - LNY,56876734162,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/56876734162,https://www.airlines-manager.com/aircraft/show/106107514,8:30,10:59,116,"30,431$","25,424$",$219.17,"$10,237.85"
HNL - LNY,56889535321,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/56889535321,https://www.airlines-manager.com/aircraft/show/106107514,15:00,17:29,116,"30,431$","25,424$",$219.17,"$10,237.85"
HNL - LNY,56895754210,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/56895754210,https://www.airlines-manager.com/aircraft/show/106107514,17:30,19:59,116,"$30,431.00","$25,424.00",$219.17,"$10,237.85"
HNL - LNY,56901278167,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/56901278167,https://www.airlines-manager.com/aircraft/show/106107514,20:00,22:29,116,"$30,431.00","$25,424.00",$219.17,"$10,237.85"
HNL - LNY,56903707183,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/56903707183,https://www.airlines-manager.com/aircraft/show/106107514,22:30,0:59,116,"$30,431.00","$25,424.00",$219.17,"$10,237.85"
HNL - MCO,56862956298,H-56C-7 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/56862956298,https://www.airlines-manager.com/aircraft/show/111639419,1:00,19:59,592,"$2,289,533.00","$2,129,434.00","$3,597.02","$112,173.87"
HNL - MCO,56866822839,H-56C-6 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/56866822839,https://www.airlines-manager.com/aircraft/show/111639418,4:15,23:14,592,"$2,289,533.00","$2,129,434.00","$3,597.02","$112,173.87"
HNL - MCO,56876734105,H-56C-2 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/56876734105,https://www.airlines-manager.com/aircraft/show/111639414,8:15,3:14,592,"2,289,533$","2,129,434$","$3,597.02","$112,173.87"
HNL - MEL,56876734161,H-84A-4 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/56876734161,https://www.airlines-manager.com/aircraft/show/95818923,8:30,6:29,832,"3,546,306$","3,244,924$","$3,900.15","$147,608.37"
HNL - MEL,56901278166,H-84A-7 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/56901278166,https://www.airlines-manager.com/aircraft/show/95818920,20:00,17:59,832,"3,546,306$","3,244,924$","$3,900.15","$147,608.37"
HNL - MIA,56876734126,H-56A-2 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/56876734126,https://www.airlines-manager.com/aircraft/show/95351591,8:30,3:44,592,"2,335,269$","2,169,008$","$3,663.86","$112,773.38"
HNL - MIA,56880042681,H-56A-5 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/56880042681,https://www.airlines-manager.com/aircraft/show/95351588,10:45,5:59,592,"2,335,269$","2,169,008$","$3,663.86","$112,773.38"
HNL - MIA,56889535341,H-56A-4 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/56889535341,https://www.airlines-manager.com/aircraft/show/95351589,15:30,10:44,592,"$2,335,269.00","$2,169,008.00","$3,663.86","$112,773.38"
HNL - MNL,56873155655,H-84A-2 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/56873155655,https://www.airlines-manager.com/aircraft/show/95818925,7:30,4:44,832,"$3,468,526.00","$3,179,229.00","$3,821.19","$149,728.21"
HNL - MNL,56895754333,H-84A-5 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/56895754333,https://www.airlines-manager.com/aircraft/show/95818922,18:30,15:44,832,"$3,468,526.00","$3,179,229.00","$3,821.19","$149,728.21"
HNL - MSP,56892624089,H-56C-1 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/56892624089,https://www.airlines-manager.com/aircraft/show/111639413,16:00,8:14,592,"$1,950,535.00","$1,816,162.00","$3,067.84","$111,878.56"
HNL - MSP,56892624090,H-56C-4 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/56892624090,https://www.airlines-manager.com/aircraft/show/111639416,17:00,9:14,592,"$1,950,535.00","$1,816,162.00","$3,067.84","$111,878.56"
HNL - MSP,56903707133,H-56C-3 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/56903707133,https://www.airlines-manager.com/aircraft/show/111639415,22:15,14:29,592,"$1,950,535.00","$1,816,162.00","$3,067.84","$111,878.56"
HNL - NAN,56862956700,H-84A-7 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/56862956700,https://www.airlines-manager.com/aircraft/show/95818920,3:45,17:14,832,"$2,077,351.00","$1,906,145.00","$2,291.04","$141,370.46"
HNL - NAN,56895754277,H-84A-1 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/56895754277,https://www.airlines-manager.com/aircraft/show/95818926,18:00,7:29,832,"$2,048,301.00","$1,886,749.00","$2,267.73","$139,931.94"
HNL - OGG,56862956474,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/56862956474,https://www.airlines-manager.com/aircraft/show/94803594,1:45,4:14,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,56866822919,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/56866822919,https://www.airlines-manager.com/aircraft/show/94803593,4:45,7:14,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,56869877639,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/56869877639,https://www.airlines-manager.com/aircraft/show/94803596,6:15,8:44,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,56876734200,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/56876734200,https://www.airlines-manager.com/aircraft/show/94803595,9:00,11:29,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,56889535320,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/56889535320,https://www.airlines-manager.com/aircraft/show/94803594,15:00,17:29,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,56895754278,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/56895754278,https://www.airlines-manager.com/aircraft/show/94803593,18:00,20:29,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,56898577645,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/56898577645,https://www.airlines-manager.com/aircraft/show/94803596,19:30,21:59,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,56903707158,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/56903707158,https://www.airlines-manager.com/aircraft/show/94803595,22:15,0:44,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - ORD,56880042547,H-56B-5 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/56880042547,https://www.airlines-manager.com/aircraft/show/109187502,10:00,2:59,592,"$2,090,552.00","$1,921,092.00","$3,245.09","$113,116.31"
HNL - ORD,56892624088,H-56B-7 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/56892624088,https://www.airlines-manager.com/aircraft/show/109187504,16:00,8:59,592,"$2,090,552.00","$1,921,092.00","$3,245.09","$113,116.31"
HNL - ORD,56903707189,H-56B-6 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/56903707189,https://www.airlines-manager.com/aircraft/show/109187503,22:45,15:44,592,"$2,090,552.00","$1,921,092.00","$3,245.09","$113,116.31"
HNL - PHL,56873155602,H-56F-3 B,787-10,https://www.airlines-manager.com/network/showline/50049283,https://www.airlines-manager.com/network/showflight/56873155602,https://www.airlines-manager.com/aircraft/show/118383853,7:00,2:29,592,"$2,346,540.00","$2,188,960.00","$3,697.57","$112,350.38"
HNL - PHL,56892624206,H-56F-7 B,787-10,https://www.airlines-manager.com/network/showline/50049283,https://www.airlines-manager.com/network/showflight/56892624206,https://www.airlines-manager.com/aircraft/show/118383857,17:00,12:29,592,"$2,346,540.00","$2,188,960.00","$3,697.57","$112,350.38"
HNL - PHL,56901278249,H-56F-6 B,787-10,https://www.airlines-manager.com/network/showline/50049283,https://www.airlines-manager.com/network/showflight/56901278249,https://www.airlines-manager.com/aircraft/show/118383856,21:00,16:29,592,"$2,346,540.00","$2,188,960.00","$3,697.57","$112,350.38"
HNL - PHX,56862956675,H-56D-7 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/56862956675,https://www.airlines-manager.com/aircraft/show/112066138,3:30,15:59,592,"$1,520,203.00","$1,409,068.00","$2,380.18","$112,875.94"
HNL - PHX,56889535264,H-56D-6 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/56889535264,https://www.airlines-manager.com/aircraft/show/112066137,15:00,3:29,592,"$1,520,203.00","$1,409,068.00","$2,380.18","$112,875.94"
HNL - PHX,56892624092,H-56D-2 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/56892624092,https://www.airlines-manager.com/aircraft/show/112066133,16:00,4:29,592,"$1,520,203.00","$1,409,068.00","$2,380.18","$112,875.94"
HNL - PPG,56862956654,H-TRW-PPG-1 S,A321neo,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/56862956654,https://www.airlines-manager.com/aircraft/show/120872966,3:15,15:29,410,"$843,136.00","$795,552.00","$1,940.37","$65,031.50"
HNL - PPG,56892624084,H-TRW-PPG-2 S,A321neo,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/56892624084,https://www.airlines-manager.com/aircraft/show/120872965,16:00,4:14,410,"$843,136.00","$795,552.00","$1,940.37","$65,031.50"
HNL - PPG,56895754245,H-TRW-PPG-3 S,A321neo,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/56895754245,https://www.airlines-manager.com/aircraft/show/120872964,18:00,6:14,410,"$843,136.00","$795,552.00","$1,940.37","$65,031.50"
HNL - PPT,56866822912,H-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/56866822912,https://www.airlines-manager.com/aircraft/show/88725600,4:45,17:29,310,"$771,400.00","$718,433.00","$2,317.53","$56,421.44"
HNL - PPT,56892624076,H-84A-6 F,777-300,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/56892624076,https://www.airlines-manager.com/aircraft/show/95818921,15:45,3:44,832,"$1,903,144.00","$1,751,128.00","$2,104.72","$146,130.29"
HNL - PPT,56895754205,H-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/56895754205,https://www.airlines-manager.com/aircraft/show/88725600,17:30,6:14,310,"$771,400.00","$718,433.00","$2,317.53","$56,421.44"
HNL - SEA,56862956690,H-56D-1 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/56862956690,https://www.airlines-manager.com/aircraft/show/112066132,3:45,15:14,592,"$1,418,230.00","$1,316,557.00","$2,223.91","$114,649.38"
HNL - SEA,56892624091,H-56D-1 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/56892624091,https://www.airlines-manager.com/aircraft/show/112066132,16:00,3:29,592,"$1,418,230.00","$1,316,557.00","$2,223.91","$114,649.38"
HNL - SEA,56895754248,H-56D-4 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/56895754248,https://www.airlines-manager.com/aircraft/show/112066135,18:00,5:29,592,"$1,418,230.00","$1,316,557.00","$2,223.91","$114,649.38"
HNL - SFO,56873155599,H-SFO-LAX-1,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/56873155599,https://www.airlines-manager.com/aircraft/show/110044458,7:00,18:14,338,"$759,152.00","$700,668.00","$2,072.98","$62,374.01"
HNL - SFO,56876734182,H-SFO-LAX-2,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/56876734182,https://www.airlines-manager.com/aircraft/show/110044459,9:00,20:14,338,"$759,152.00","$700,668.00","$2,072.98","$62,374.01"
HNL - SFO,56880042670,H-SFO-LAX-5,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/56880042670,https://www.airlines-manager.com/aircraft/show/110044462,10:30,21:44,338,"$759,152.00","$700,668.00","$2,072.98","$62,374.01"
HNL - SFO,56898577551,H-SFO-LAX-3,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/56898577551,https://www.airlines-manager.com/aircraft/show/110044460,19:00,6:14,338,"$759,152.00","$700,668.00","$2,072.98","$62,374.01"
HNL - SFO,56901278247,H-SFO-LAX-4,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/56901278247,https://www.airlines-manager.com/aircraft/show/110044461,21:00,8:14,338,"$759,152.00","$700,668.00","$2,072.98","$62,374.01"
HNL - SFO,56903707120,H-SFO-LAX-6 B,A319-100,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/56903707120,https://www.airlines-manager.com/aircraft/show/106106389,22:00,9:29,198,"$528,428.00","$479,141.00","$2,419.90","$41,724.91"
HNL - SIN,56866822950,H-84B-4 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/56866822950,https://www.airlines-manager.com/aircraft/show/96807090,5:15,7:29,832,"$4,330,890.00","$3,932,668.00","$4,726.76","$1,760,896.12"
HNL - SIN,56892624240,H-84B-7 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/56892624240,https://www.airlines-manager.com/aircraft/show/96807087,17:00,19:14,832,"$4,330,890.00","$3,932,668.00","$4,726.76","$1,760,896.12"
HNL - SYD,56873155656,H-84B-5 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/56873155656,https://www.airlines-manager.com/aircraft/show/96807089,7:30,3:59,832,"$3,347,714.00","$3,040,683.00","$3,654.67","$148,446.69"
HNL - SYD,56898577619,H-84B-1 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/56898577619,https://www.airlines-manager.com/aircraft/show/96807093,19:15,15:44,832,"$3,347,714.00","$3,040,683.00","$3,654.67","$148,446.69"
HNL - TRW,56866822834,H-TRW-PPG-2 S,A321neo,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/56866822834,https://www.airlines-manager.com/aircraft/show/120872965,4:15,15:29,410,"$815,013.00","$772,225.00","$1,883.48","$68,744.07"
HNL - TRW,56869877633,H-TRW-PPG-3 S,A321neo,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/56869877633,https://www.airlines-manager.com/aircraft/show/120872964,6:15,17:29,410,"$815,013.00","$772,225.00","$1,883.48","$68,744.07"
HNL - TRW,56892624085,H-TRW-PPG-1 S,A321neo,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/56892624085,https://www.airlines-manager.com/aircraft/show/120872966,16:00,3:14,410,"$815,013.00","$772,225.00","$1,883.48","$68,744.07"
HNL - YVR,56862956183,H-56D-6 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/56862956183,https://www.airlines-manager.com/aircraft/show/112066137,0:15,11:59,592,"$1,421,513.00","$1,326,107.00","$2,240.05","$113,020.48"
HNL - YVR,56862956184,H-56D-2 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/56862956184,https://www.airlines-manager.com/aircraft/show/112066133,3:30,15:14,592,"$1,421,513.00","$1,326,107.00","$2,240.05","$113,020.48"
HNL - YVR,56892624093,H-56D-7 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/56892624093,https://www.airlines-manager.com/aircraft/show/112066138,16:00,3:44,592,"$1,421,513.00","$1,326,107.00","$2,240.05","$113,020.48"
IAH - ABQ,56862956317,I-CLE-STL-1,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/56862956317,https://www.airlines-manager.com/aircraft/show/103600700,1:00,5:59,310,"$318,057.00","$284,740.00",$918.52,"$57,138.46"
IAH - ABQ,56862956318,I-CLE-STL-5 B,A319-100,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/56862956318,https://www.airlines-manager.com/aircraft/show/110582844,2:30,7:29,198,"$241,670.00","$214,984.00","$1,085.78","$43,140.60"
IAH - ABQ,56869877617,I-CLE-STL-4,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/56869877617,https://www.airlines-manager.com/aircraft/show/88725601,6:00,10:59,310,"$318,057.00","$284,740.00",$918.52,"$57,138.46"
IAH - ABQ,56886798167,I-CLE-STL-3,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/56886798167,https://www.airlines-manager.com/aircraft/show/103600702,13:00,17:59,310,"$318,057.00","$284,740.00",$918.52,"$57,138.46"
IAH - ABQ,56898577538,I-CLE-STL-2,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/56898577538,https://www.airlines-manager.com/aircraft/show/103600701,18:45,23:44,310,"$318,057.00","$284,740.00",$918.52,"$57,138.46"
IAH - ALB,56862956197,I-MHT-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/56862956197,https://www.airlines-manager.com/aircraft/show/114266976,0:15,7:59,320,"497,488$","452,034$","$1,412.61","$58,452.67"
IAH - ALB,56862956198,I-MHT-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/56862956198,https://www.airlines-manager.com/aircraft/show/92800067,2:00,9:59,112,"235,267$","208,227$","$1,859.17","$26,082.71"
IAH - ALB,56883365104,I-MHT-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/56883365104,https://www.airlines-manager.com/aircraft/show/114266971,12:00,19:44,320,"497,488$","452,034$","$1,412.61","$58,452.67"
IAH - ALB,56889535285,I-MHT-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/56889535285,https://www.airlines-manager.com/aircraft/show/114266970,15:00,22:44,320,"497,488$","452,034$","$1,412.61","$58,452.67"
IAH - ALB,56901278178,I-MHT-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/56901278178,https://www.airlines-manager.com/aircraft/show/114266972,20:15,3:59,320,"$497,488.00","$452,034.00","$1,412.61","$58,452.67"
IAH - ANC,56883365128,I-ANC-ONT-1,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/56883365128,https://www.airlines-manager.com/aircraft/show/108258010,12:00,2:44,310,"$901,188.00","$830,964.00","$2,680.53","$56,400.27"
IAH - ANC,56886798279,I-ANC-ONT-2,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/56886798279,https://www.airlines-manager.com/aircraft/show/108258011,14:00,4:44,310,"$901,188.00","$830,964.00","$2,680.53","$56,400.27"
IAH - ANC,56898577617,I-ANC-ONT-3,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/56898577617,https://www.airlines-manager.com/aircraft/show/108258012,19:15,9:59,310,"$901,188.00","$830,964.00","$2,680.53","$56,400.27"
IAH - ANC,56901278291,I-ANC-ONT-4,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/56901278291,https://www.airlines-manager.com/aircraft/show/108089220,21:15,11:59,310,"$901,188.00","$830,964.00","$2,680.53","$56,400.27"
IAH - ANC,56906228763,I-ANC-ONT-5 B,A319-100,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/56906228763,https://www.airlines-manager.com/aircraft/show/108286957,23:15,13:59,198,"$672,390.00","$616,070.00","$3,111.46","$41,814.71"
IAH - ATL,56862956217,I-LAS-ATL-6,ERJ-175,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/56862956217,https://www.airlines-manager.com/aircraft/show/82323704,0:15,4:59,112,"$146,580.00","$112,539.00","$1,004.81","$23,775.85"
IAH - ATL,56880042562,I-LAS-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/56880042562,https://www.airlines-manager.com/aircraft/show/95894466,10:00,14:44,320,"$307,891.00","$243,816.00",$761.93,"$51,510.42"
IAH - ATL,56880042563,I-LAS-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/56880042563,https://www.airlines-manager.com/aircraft/show/96256511,10:45,15:29,320,"$307,891.00","$243,816.00",$761.93,"$51,510.42"
IAH - ATL,56892624101,I-LAS-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/56892624101,https://www.airlines-manager.com/aircraft/show/96183549,16:00,20:44,320,"$307,891.00","$243,816.00",$761.93,"$51,510.42"
IAH - ATL,56895754220,I-LAS-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/56895754220,https://www.airlines-manager.com/aircraft/show/96177955,17:45,22:29,320,"$307,891.00","$243,816.00",$761.93,"$51,510.42"
IAH - ATL,56906228798,I-LAS-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/56906228798,https://www.airlines-manager.com/aircraft/show/96250652,23:45,4:29,320,"$307,891.00","$243,816.00",$761.93,"$51,510.42"
IAH - AUS,56866822832,I-BWI-PHL-2,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/56866822832,https://www.airlines-manager.com/aircraft/show/106007214,4:15,6:59,338,"$100,920.00","$77,319.00",$228.75,"$28,287.44"
IAH - AUS,56880042699,I-BWI-PHL-1,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/56880042699,https://www.airlines-manager.com/aircraft/show/106007213,11:00,13:44,338,"$100,920.00","$77,319.00",$228.75,"$28,287.44"
IAH - AUS,56883365085,I-BWI-PHL-5,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/56883365085,https://www.airlines-manager.com/aircraft/show/106007217,12:00,14:44,338,"$100,920.00","$77,319.00",$228.75,"$28,287.44"
IAH - AUS,56895754285,I-BWI-PHL-4,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/56895754285,https://www.airlines-manager.com/aircraft/show/106007216,18:15,20:59,338,"$100,920.00","$77,319.00",$228.75,"$28,287.44"
IAH - AUS,56903707042,I-BWI-PHL-3,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/56903707042,https://www.airlines-manager.com/aircraft/show/106007215,21:30,0:14,271,"$89,142.00","$65,754.00",$242.63,"$24,056.34"
IAH - BDL,56869877621,I-CLE-STL-1,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/56869877621,https://www.airlines-manager.com/aircraft/show/103600700,6:00,13:59,310,"$500,324.00","$457,984.00","$1,477.37","$57,367.52"
IAH - BDL,56873155653,I-CLE-STL-5 B,A319-100,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/56873155653,https://www.airlines-manager.com/aircraft/show/110582844,7:30,15:29,198,"$377,004.00","$343,067.00","$1,732.66","$42,972.90"
IAH - BDL,56880042774,I-CLE-STL-4,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/56880042774,https://www.airlines-manager.com/aircraft/show/88725601,11:00,18:59,310,"$500,324.00","$457,984.00","$1,477.37","$57,367.52"
IAH - BDL,56895754263,I-CLE-STL-3,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/56895754263,https://www.airlines-manager.com/aircraft/show/103600702,18:00,1:59,310,"$500,324.00","$457,984.00","$1,477.37","$57,367.52"
IAH - BDL,56898577675,I-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/56898577675,https://www.airlines-manager.com/aircraft/show/96990010,19:45,3:44,112,"$235,319.00","$207,286.00","$1,850.77","$25,964.84"
IAH - BDL,56906228806,I-CLE-STL-2,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/56906228806,https://www.airlines-manager.com/aircraft/show/103600701,23:45,7:44,310,"$500,324.00","$457,984.00","$1,477.37","$57,367.52"
IAH - BFF,56866822811,I-MHT-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/56866822811,https://www.airlines-manager.com/aircraft/show/114266972,4:00,9:44,320,"$366,994.00","$329,116.00","$1,028.49","$57,403.95"
IAH - BFF,56880042663,I-MHT-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/56880042663,https://www.airlines-manager.com/aircraft/show/114266976,10:15,15:59,320,"$366,994.00","$329,116.00","$1,028.49","$57,403.95"
IAH - BFF,56883365141,I-MHT-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/56883365141,https://www.airlines-manager.com/aircraft/show/92800067,12:00,17:44,112,"$173,788.00","$152,107.00","$1,358.10","$26,530.29"
IAH - BFF,56898577658,I-MHT-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/56898577658,https://www.airlines-manager.com/aircraft/show/114266971,19:45,1:29,320,"$366,994.00","$329,116.00","$1,028.49","$57,403.95"
IAH - BFF,56903707198,I-MHT-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/56903707198,https://www.airlines-manager.com/aircraft/show/114266970,22:45,4:29,320,"$366,994.00","$329,116.00","$1,028.49","$57,403.95"
IAH - BHM,56862956137,I-BHM,737-900ER,https://www.airlines-manager.com/network/showline/50835066,https://www.airlines-manager.com/network/showflight/56862956137,https://www.airlines-manager.com/aircraft/show/120933644,0:00,4:14,320,"$268,942.00","$236,950.00",$740.47,"$55,972.44"
IAH - BHM,56880042764,I-BHM,737-900ER,https://www.airlines-manager.com/network/showline/50835066,https://www.airlines-manager.com/network/showflight/56880042764,https://www.airlines-manager.com/aircraft/show/120933644,11:00,15:14,320,"$268,942.00","$236,950.00",$740.47,"$55,972.44"
IAH - BHM,56889535333,I-BHM,737-900ER,https://www.airlines-manager.com/network/showline/50835066,https://www.airlines-manager.com/network/showflight/56889535333,https://www.airlines-manager.com/aircraft/show/120933644,15:15,19:29,320,"$268,942.00","$236,950.00",$740.47,"$55,972.44"
IAH - BHM,56898577635,I-BHM,737-900ER,https://www.airlines-manager.com/network/showline/50835066,https://www.airlines-manager.com/network/showflight/56898577635,https://www.airlines-manager.com/aircraft/show/120933644,19:30,23:44,320,"$268,942.00","$236,950.00",$740.47,"$55,972.44"
IAH - BIL,56862956577,I-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/56862956577,https://www.airlines-manager.com/aircraft/show/117273390,2:45,9:59,320,"$457,445.00","$414,054.00","$1,293.92","$57,242.49"
IAH - BIL,56876734189,I-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/56876734189,https://www.airlines-manager.com/aircraft/show/117273392,9:00,16:14,320,"$457,445.00","$414,054.00","$1,293.92","$57,242.49"
IAH - BIL,56880042756,I-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/56880042756,https://www.airlines-manager.com/aircraft/show/117273389,11:00,18:14,320,"$457,445.00","$414,054.00","$1,293.92","$57,242.49"
IAH - BIL,56895754317,I-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/56895754317,https://www.airlines-manager.com/aircraft/show/117273391,18:30,1:44,320,"$457,445.00","$414,054.00","$1,293.92","$57,242.49"
IAH - BNA,56866822819,I-BOI-BNA-4,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/56866822819,https://www.airlines-manager.com/aircraft/show/104258214,4:00,8:44,310,"$302,944.00","$271,735.00",$876.56,"$57,408.80"
IAH - BNA,56876734208,I-BOI-BNA-3,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/56876734208,https://www.airlines-manager.com/aircraft/show/104258213,9:15,13:59,310,"$302,944.00","$271,735.00",$876.56,"$57,408.80"
IAH - BNA,56889535300,I-BOI-BNA-2,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/56889535300,https://www.airlines-manager.com/aircraft/show/104258212,15:00,19:44,310,"$302,944.00","$271,735.00",$876.56,"$57,408.80"
IAH - BNA,56903707107,I-BOI-BNA-1,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/56903707107,https://www.airlines-manager.com/aircraft/show/104258211,22:00,2:44,310,"$302,944.00","$271,735.00",$876.56,"$57,408.80"
IAH - BNA,56906228744,I-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/56906228744,https://www.airlines-manager.com/aircraft/show/103534664,23:00,3:44,112,"$143,897.00","$124,026.00","$1,107.38","$26,202.68"
IAH - BOG,56869877606,I-56A-4 E,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/56869877606,https://www.airlines-manager.com/aircraft/show/106676235,6:00,15:59,648,"$1,306,935.00","$1,214,643.00","$1,874.45","$121,667.08"
IAH - BOG,56886798226,I-56A-6 E,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/56886798226,https://www.airlines-manager.com/aircraft/show/106676237,14:00,23:59,648,"$1,306,935.00","$1,214,643.00","$1,874.45","$121,667.08"
IAH - BOG,56901278127,I-56A-1 E,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/56901278127,https://www.airlines-manager.com/aircraft/show/106676232,20:00,5:59,648,"$1,306,935.00","$1,214,643.00","$1,874.45","$121,667.08"
IAH - BOI,56862956367,I-BOI-BNA-3,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/56862956367,https://www.airlines-manager.com/aircraft/show/104258213,1:15,9:14,310,"$502,482.00","$460,855.00","$1,486.63","$57,727.14"
IAH - BOI,56873155616,I-BOI-BNA-2,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/56873155616,https://www.airlines-manager.com/aircraft/show/104258212,7:00,14:59,310,"502,482$","460,855$","$1,486.63","$57,727.14"
IAH - BOI,56886798271,I-BOI-BNA-1,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/56886798271,https://www.airlines-manager.com/aircraft/show/104258211,14:00,21:59,310,"502,482$","460,855$","$1,486.63","$57,727.14"
IAH - BOI,56889535324,I-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/56889535324,https://www.airlines-manager.com/aircraft/show/103534664,15:00,22:59,112,"236,364$","208,802$","$1,864.30","$26,154.74"
IAH - BOI,56901278142,I-BOI-BNA-4,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/56901278142,https://www.airlines-manager.com/aircraft/show/104258214,20:00,3:59,310,"502,482$","460,855$","$1,486.63","$57,727.14"
IAH - BOS,56862956438,I-JFK-LAX-3,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/56862956438,https://www.airlines-manager.com/aircraft/show/88400800,1:45,9:59,400,"$668,982.00","$607,178.00","$1,517.95","$73,746.32"
IAH - BOS,56880042721,I-JFK-LAX-2,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/56880042721,https://www.airlines-manager.com/aircraft/show/88400799,11:00,19:14,400,"$668,982.00","$607,178.00","$1,517.95","$73,746.32"
IAH - BOS,56883365086,I-JFK-LAX-4,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/56883365086,https://www.airlines-manager.com/aircraft/show/88400801,12:00,20:14,400,"$668,982.00","$607,178.00","$1,517.95","$73,746.32"
IAH - BOS,56895754217,I-JFK-LAX-5,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/56895754217,https://www.airlines-manager.com/aircraft/show/89233038,17:45,1:59,400,"$668,982.00","$607,178.00","$1,517.95","$73,746.32"
IAH - BOS,56895754218,I-JFK-LAX-1,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/56895754218,https://www.airlines-manager.com/aircraft/show/88400798,18:30,2:44,383,"$652,001.00","$590,901.00","$1,542.82","$71,769.35"
IAH - BSB,56883365060,I-84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/56883365060,https://www.airlines-manager.com/aircraft/show/89124076,11:15,5:29,932,"$3,069,976.00","$2,802,042.00","$3,006.48","$153,676.89"
IAH - BSB,56901278194,I-84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/56901278194,https://www.airlines-manager.com/aircraft/show/88905140,20:15,14:29,932,"$3,069,976.00","$2,802,042.00","$3,006.48","$153,676.89"
IAH - BTV,56862956140,I-BTV-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/56862956140,https://www.airlines-manager.com/aircraft/show/86385103,0:00,8:14,310,"$517,662.00","$475,935.00","$1,535.27","$57,805.87"
IAH - BTV,56866822866,I-BTV-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/56866822866,https://www.airlines-manager.com/aircraft/show/82543907,4:15,12:29,112,"$243,763.00","$215,988.00","$1,928.46","$26,233.36"
IAH - BTV,56873155629,I-BTV-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/56873155629,https://www.airlines-manager.com/aircraft/show/114373409,7:15,15:29,310,"$517,662.00","$475,935.00","$1,535.27","$57,805.87"
IAH - BTV,56886798288,I-BTV-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/56886798288,https://www.airlines-manager.com/aircraft/show/114373410,14:00,22:14,310,"$517,662.00","$475,935.00","$1,535.27","$57,805.87"
IAH - BTV,56898577540,I-BTV-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/56898577540,https://www.airlines-manager.com/aircraft/show/113994196,18:45,2:59,310,"$517,662.00","$475,935.00","$1,535.27","$57,805.87"
IAH - BUF,56862956369,I-PVD-BUF-4,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/56862956369,https://www.airlines-manager.com/aircraft/show/107467127,1:15,8:14,310,"$454,004.00","$415,337.00","$1,339.80","$59,475.47"
IAH - BUF,56866822820,I-PVD-BUF-3,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/56866822820,https://www.airlines-manager.com/aircraft/show/107467128,4:00,10:59,310,"$454,004.00","$415,337.00","$1,339.80","$59,475.47"
IAH - BUF,56886798174,I-PVD-BUF-2,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/56886798174,https://www.airlines-manager.com/aircraft/show/107467129,13:00,19:59,310,"$454,004.00","$415,337.00","$1,339.80","$59,475.47"
IAH - BUF,56892624239,I-PVD-BUF-5 B,A319-100,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/56892624239,https://www.airlines-manager.com/aircraft/show/110582843,17:00,23:59,198,"$342,604.00","$311,616.00","$1,573.82","$44,622.82"
IAH - BUF,56901278290,I-PVD-BUF-1,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/56901278290,https://www.airlines-manager.com/aircraft/show/107467130,21:15,4:14,310,"$454,004.00","$415,337.00","$1,339.80","$59,475.47"
IAH - BUR,56862956553,I-YEG-BUR-4,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/56862956553,https://www.airlines-manager.com/aircraft/show/117273341,2:30,9:59,310,"469,559$","430,890$","$1,389.97","$57,579.96"
IAH - BUR,56862956555,I-YEG-BUR-3,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/56862956555,https://www.airlines-manager.com/aircraft/show/117273342,3:15,10:44,310,"469,559$","430,890$","$1,389.97","$57,579.96"
IAH - BUR,56880042704,I-YEG-BUR-5,A321neo,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/56880042704,https://www.airlines-manager.com/aircraft/show/117273340,11:00,18:29,338,"508,813$","471,862$","$1,396.04","$63,055.06"
IAH - BUR,56895754272,I-YEG-BUR-2,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/56895754272,https://www.airlines-manager.com/aircraft/show/117273343,18:00,1:29,310,"469,559$","430,890$","$1,389.97","$57,579.96"
IAH - BUR,56901278185,I-YEG-BUR-1,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/56901278185,https://www.airlines-manager.com/aircraft/show/117273344,20:15,3:44,295,"$456,085.00","$417,981.00","$1,416.88","$55,854.92"
IAH - BWI,56862956181,I-BWI-PHL-3,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/56862956181,https://www.airlines-manager.com/aircraft/show/106007215,0:15,6:59,338,"$470,491.00","$429,120.00","$1,269.59","$63,730.69"
IAH - BWI,56880042700,I-BWI-PHL-2,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/56880042700,https://www.airlines-manager.com/aircraft/show/106007214,11:00,17:44,338,"$470,491.00","$429,120.00","$1,269.59","$63,730.69"
IAH - BWI,56886798213,I-BWI-PHL-1,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/56886798213,https://www.airlines-manager.com/aircraft/show/106007213,13:45,20:29,338,"$470,491.00","$429,120.00","$1,269.59","$63,730.69"
IAH - BWI,56889535240,I-BWI-PHL-5,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/56889535240,https://www.airlines-manager.com/aircraft/show/106007217,14:45,21:29,338,"$470,491.00","$429,120.00","$1,269.59","$63,730.69"
IAH - BWI,56901278246,I-BWI-PHL-4,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/56901278246,https://www.airlines-manager.com/aircraft/show/106007216,21:00,3:44,338,"$470,491.00","$429,120.00","$1,269.59","$63,730.69"
IAH - BZN,56862956238,I-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/56862956238,https://www.airlines-manager.com/aircraft/show/117273392,0:30,7:59,320,"$475,071.00","$431,309.00","$1,347.84","$57,635.95"
IAH - BZN,56862956239,I-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/56862956239,https://www.airlines-manager.com/aircraft/show/117273389,2:30,9:59,320,"$475,071.00","$431,309.00","$1,347.84","$57,635.95"
IAH - BZN,56880042758,I-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/56880042758,https://www.airlines-manager.com/aircraft/show/117273391,11:00,18:29,320,"$475,071.00","$431,309.00","$1,347.84","$57,635.95"
IAH - BZN,56898577596,I-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/56898577596,https://www.airlines-manager.com/aircraft/show/117273390,19:15,2:44,320,"$475,071.00","$431,309.00","$1,347.84","$57,635.95"
IAH - CAK,56862956640,I-BTV-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/56862956640,https://www.airlines-manager.com/aircraft/show/113994196,3:00,9:14,310,"$393,368.00","$358,933.00","$1,157.85","$57,582.83"
IAH - CAK,56876734112,I-BTV-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/56876734112,https://www.airlines-manager.com/aircraft/show/86385103,8:15,14:29,310,"$393,368.00","$358,933.00","$1,157.85","$57,582.83"
IAH - CAK,56886798191,I-BTV-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/56886798191,https://www.airlines-manager.com/aircraft/show/82543907,13:00,19:14,112,"$185,783.00","$163,229.00","$1,457.40","$26,186.47"
IAH - CAK,56892624129,I-BTV-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/56892624129,https://www.airlines-manager.com/aircraft/show/114373409,16:00,22:14,310,"$393,368.00","$358,933.00","$1,157.85","$57,582.83"
IAH - CAK,56903707150,I-BTV-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/56903707150,https://www.airlines-manager.com/aircraft/show/114373410,22:15,4:29,295,"$382,045.00","$348,056.00","$1,179.85","$55,837.86"
IAH - CHS,56862956430,I-RIC-SDF-5,ERJ-175,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/56862956430,https://www.airlines-manager.com/aircraft/show/107467211,1:30,7:14,112,"$170,218.00","$149,061.00","$1,330.90","$25,999.01"
IAH - CHS,56862956431,I-RIC-SDF-4,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/56862956431,https://www.airlines-manager.com/aircraft/show/107467131,3:30,9:14,310,"$359,135.00","$326,559.00","$1,053.42","$56,957.97"
IAH - CHS,56883365125,I-RIC-SDF-3,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/56883365125,https://www.airlines-manager.com/aircraft/show/107467132,12:00,17:44,310,"$359,135.00","$326,559.00","$1,053.42","$56,957.97"
IAH - CHS,56895754181,I-RIC-SDF-2,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/56895754181,https://www.airlines-manager.com/aircraft/show/107467133,17:15,22:59,310,"$359,135.00","$326,559.00","$1,053.42","$56,957.97"
IAH - CHS,56906228809,I-RIC-SDF-1,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/56906228809,https://www.airlines-manager.com/aircraft/show/107467134,23:45,5:29,310,"359,135$","326,559$","$1,053.42","$56,957.97"
IAH - CID,56880042759,I-EUG-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/56880042759,https://www.airlines-manager.com/aircraft/show/119525218,11:00,16:29,320,"342,285$","307,102$",$959.69,"$56,006.44"
IAH - CID,56886798133,I-EUG-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/56886798133,https://www.airlines-manager.com/aircraft/show/119525217,13:00,18:29,320,"342,285$","307,102$",$959.69,"$56,006.44"
IAH - CID,56898577660,I-EUG-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/56898577660,https://www.airlines-manager.com/aircraft/show/119525219,19:45,1:14,320,"342,285$","307,102$",$959.69,"$56,006.44"
IAH - CID,56903707085,I-EUG-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/56903707085,https://www.airlines-manager.com/aircraft/show/119525220,21:45,3:14,304,"331,950$","297,131$",$977.40,"$54,188.02"
IAH - CLE,56862956492,I-CLE-STL-3,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/56862956492,https://www.airlines-manager.com/aircraft/show/103600702,2:00,8:14,310,"401,042$","364,331$","$1,175.26","$58,448.82"
IAH - CLE,56873155695,I-CLE-STL-2,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/56873155695,https://www.airlines-manager.com/aircraft/show/103600701,7:45,13:59,310,"401,042$","364,331$","$1,175.26","$58,448.82"
IAH - CLE,56886798268,I-CLE-STL-1,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/56886798268,https://www.airlines-manager.com/aircraft/show/103600700,14:00,20:14,310,"401,042$","364,331$","$1,175.26","$58,448.82"
IAH - CLE,56889535351,I-CLE-STL-5 B,A319-100,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/56889535351,https://www.airlines-manager.com/aircraft/show/110582844,15:30,21:44,198,"302,827$","273,411$","$1,380.86","$43,862.73"
IAH - CLE,56898577570,I-CLE-STL-4,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/56898577570,https://www.airlines-manager.com/aircraft/show/88725601,19:00,1:14,310,"$401,042.00","$364,331.00","$1,175.26","$58,448.82"
IAH - CLT,56862956695,I-SLC-CLT-3,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/56862956695,https://www.airlines-manager.com/aircraft/show/93094697,3:45,9:29,310,"$361,710.00","$319,410.00","$1,030.35","$55,711.05"
IAH - CLT,56880042612,I-SLC-CLT-2,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/56880042612,https://www.airlines-manager.com/aircraft/show/93094698,10:00,15:44,310,"$361,710.00","$319,410.00","$1,030.35","$55,711.05"
IAH - CLT,56883365142,I-SLC-CLT-6,ERJ-175,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/56883365142,https://www.airlines-manager.com/aircraft/show/93100455,12:00,17:44,112,"$171,081.00","$144,110.00","$1,286.70","$25,135.47"
IAH - CLT,56892624191,I-SLC-CLT-1,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/56892624191,https://www.airlines-manager.com/aircraft/show/93094699,16:45,22:29,310,"$361,710.00","$319,410.00","$1,030.35","$55,711.05"
IAH - CLT,56898577534,I-SLC-CLT-5,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/56898577534,https://www.airlines-manager.com/aircraft/show/93094695,18:45,0:29,310,"$361,710.00","$319,410.00","$1,030.35","$55,711.05"
IAH - CLT,56903707106,I-SLC-CLT-4,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/56903707106,https://www.airlines-manager.com/aircraft/show/93094696,22:00,3:44,310,"$361,710.00","$319,410.00","$1,030.35","$55,711.05"
IAH - CMH,56873155615,I-RNO-MCI-1,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/56873155615,https://www.airlines-manager.com/aircraft/show/103882355,7:00,12:59,310,"$379,267.00","$344,000.00","$1,109.68","$57,493.04"
IAH - CMH,56880042779,I-RNO-MCI-4,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/56880042779,https://www.airlines-manager.com/aircraft/show/103882358,11:00,16:59,310,"379,267$","344,000$","$1,109.68","$57,493.04"
IAH - CMH,56883365144,I-RNO-MCI-5,ERJ-175,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/56883365144,https://www.airlines-manager.com/aircraft/show/105099861,12:00,17:59,112,"179,105$","156,225$","$1,394.87","$26,110.03"
IAH - CMH,56898577614,I-RNO-MCI-3,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/56898577614,https://www.airlines-manager.com/aircraft/show/103882357,19:15,1:14,310,"379,267$","344,000$","$1,109.68","$57,493.04"
IAH - CMH,56906228732,I-RNO-MCI-2,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/56906228732,https://www.airlines-manager.com/aircraft/show/103882356,23:00,4:59,310,"379,267$","344,000$","$1,109.68","$57,493.04"
IAH - COS,56862956462,I-RNO-MCI-1,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/56862956462,https://www.airlines-manager.com/aircraft/show/103882355,1:45,6:59,310,"$331,840.00","$298,925.00",$964.27,"$57,119.43"
IAH - COS,56869877598,I-RNO-MCI-4,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/56869877598,https://www.airlines-manager.com/aircraft/show/103882358,5:45,10:59,310,"$331,840.00","$298,925.00",$964.27,"$57,119.43"
IAH - COS,56886798270,I-RNO-MCI-3,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/56886798270,https://www.airlines-manager.com/aircraft/show/103882357,14:00,19:14,310,"$331,840.00","$298,925.00",$964.27,"$57,119.43"
IAH - COS,56895754232,I-RNO-MCI-2,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/56895754232,https://www.airlines-manager.com/aircraft/show/103882356,17:45,22:59,310,"$331,840.00","$298,925.00",$964.27,"$57,119.43"
IAH - COS,56903707217,I-RNO-MCI-5,ERJ-175,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/56903707217,https://www.airlines-manager.com/aircraft/show/105099861,22:45,3:59,112,"$157,707.00","$136,546.00","$1,219.16","$26,091.59"
IAH - CUN,56862956296,I-56A-4 E,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/56862956296,https://www.airlines-manager.com/aircraft/show/106676235,1:00,5:59,648,"$626,023.00","$572,914.00",$884.13,"$114,966.02"
IAH - CUN,56883365154,I-56A-5 E,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/56883365154,https://www.airlines-manager.com/aircraft/show/106676236,12:30,17:29,648,"$626,023.00","$572,914.00",$884.13,"$114,966.02"
IAH - CUN,56901278203,I-56A-7 E,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/56901278203,https://www.airlines-manager.com/aircraft/show/106676238,20:30,1:29,648,"$626,023.00","$572,914.00",$884.13,"$114,966.02"
IAH - CVG,56862956194,I-SMF-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/56862956194,https://www.airlines-manager.com/aircraft/show/99093332,0:15,5:44,320,"$350,135.00","$309,434.00",$966.98,"$56,431.73"
IAH - CVG,56866822807,I-SMF-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/56866822807,https://www.airlines-manager.com/aircraft/show/99093333,4:00,9:29,320,"$350,135.00","$309,434.00",$966.98,"$56,431.73"
IAH - CVG,56873155709,I-SMF-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/56873155709,https://www.airlines-manager.com/aircraft/show/99093334,8:00,13:29,320,"$350,135.00","$309,434.00",$966.98,"$56,431.73"
IAH - CVG,56886798240,I-SMF-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/56886798240,https://www.airlines-manager.com/aircraft/show/99093335,14:00,19:29,320,"$350,135.00","$309,434.00",$966.98,"$56,431.73"
IAH - CVG,56892624135,I-SMF-CVG-5 B,A319-100,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/56892624135,https://www.airlines-manager.com/aircraft/show/106499070,16:00,21:29,198,"$265,556.00","$237,029.00","$1,197.12","$43,227.17"
IAH - DAB,56862956380,I-ILM-SRQ-4,A321-200,https://www.airlines-manager.com/network/showline/50666457,https://www.airlines-manager.com/network/showflight/56862956380,https://www.airlines-manager.com/aircraft/show/120452415,1:15,6:44,310,"344,468$","312,587$","$1,008.35","$57,006.75"
IAH - DAB,56876734198,I-ILM-SRQ-3,A321-200,https://www.airlines-manager.com/network/showline/50666457,https://www.airlines-manager.com/network/showflight/56876734198,https://www.airlines-manager.com/aircraft/show/120452416,9:00,14:29,310,"344,468$","312,587$","$1,008.35","$57,006.75"
IAH - DAB,56889535222,I-ILM-SRQ-2,A321-200,https://www.airlines-manager.com/network/showline/50666457,https://www.airlines-manager.com/network/showflight/56889535222,https://www.airlines-manager.com/aircraft/show/120452417,14:15,19:44,310,"344,468$","312,587$","$1,008.35","$57,006.75"
IAH - DAB,56898577641,I-ILM-SRQ-1,A321-200,https://www.airlines-manager.com/network/showline/50666457,https://www.airlines-manager.com/network/showflight/56898577641,https://www.airlines-manager.com/aircraft/show/120452418,19:30,0:59,279,"324,274$","293,123$","$1,050.62","$53,457.08"
IAH - DEN,56883365082,I-SEA-DEN-5,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/56883365082,https://www.airlines-manager.com/aircraft/show/105562975,12:00,17:29,338,"378,458$","325,224$",$962.20,"$59,311.37"
IAH - DEN,56886798069,I-SEA-DEN-1,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/56886798069,https://www.airlines-manager.com/aircraft/show/105562971,13:00,18:29,338,"$378,458.00","$325,224.00",$962.20,"$59,311.37"
IAH - DEN,56886798070,I-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/56886798070,https://www.airlines-manager.com/aircraft/show/120293379,14:00,19:29,0,"$97,604.00","$23,471.00",$0.00,"$4,280.43"
IAH - DEN,56903707161,I-SEA-DEN-2,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/56903707161,https://www.airlines-manager.com/aircraft/show/105562972,22:30,3:59,338,"$378,458.00","$325,224.00",$962.20,"$59,311.37"
IAH - DEN,56906228718,I-SEA-DEN-3,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/56906228718,https://www.airlines-manager.com/aircraft/show/105562973,23:00,4:29,338,"$378,458.00","$325,224.00",$962.20,"$59,311.37"
IAH - DEN,56906228719,I-SEA-DEN-4,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/56906228719,https://www.airlines-manager.com/aircraft/show/105562974,23:30,4:59,338,"378,458$","325,224$",$962.20,"$59,311.37"
IAH - DFW,56862956312,I-SMF-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/56862956312,https://www.airlines-manager.com/aircraft/show/99093333,1:00,3:59,320,"129,311$","81,717$",$255.37,"$27,391.17"
IAH - DFW,56866822928,I-SMF-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/56866822928,https://www.airlines-manager.com/aircraft/show/99093334,5:00,7:59,320,"129,311$","81,717$",$255.37,"$27,391.17"
IAH - DFW,56880042742,I-SMF-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/56880042742,https://www.airlines-manager.com/aircraft/show/99093335,11:00,13:59,320,"129,311$","81,717$",$255.37,"$27,391.17"
IAH - DFW,56886798187,I-SMF-CVG-5 B,A319-100,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/56886798187,https://www.airlines-manager.com/aircraft/show/106499070,13:00,15:59,198,"97,620$","65,532$",$330.97,"$21,966.03"
IAH - DFW,56889535221,I-YEG-BUR-4,A321-200,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/56889535221,https://www.airlines-manager.com/aircraft/show/117273341,14:15,17:14,310,"$130,762.00","$90,664.00",$292.46,"$30,390.17"
IAH - DFW,56901278283,I-SMF-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/56901278283,https://www.airlines-manager.com/aircraft/show/99093332,21:15,0:14,320,"$129,311.00","$81,717.00",$255.37,"$27,391.17"
IAH - DSM,56862956660,I-FAT-SAV-1,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/56862956660,https://www.airlines-manager.com/aircraft/show/110424761,3:15,8:29,320,"$333,281.00","$298,351.00",$932.35,"$57,009.75"
IAH - DSM,56876734169,I-FAT-SAV-4,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/56876734169,https://www.airlines-manager.com/aircraft/show/110424758,8:45,13:59,320,"$333,281.00","$298,351.00",$932.35,"$57,009.75"
IAH - DSM,56886798250,I-FAT-SAV-3,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/56886798250,https://www.airlines-manager.com/aircraft/show/110424759,14:00,19:14,320,"$333,281.00","$298,351.00",$932.35,"$57,009.75"
IAH - DSM,56895754316,I-FAT-SAV-2,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/56895754316,https://www.airlines-manager.com/aircraft/show/110424760,18:30,23:44,320,"$333,281.00","$298,351.00",$932.35,"$57,009.75"
IAH - DTW,56862956246,I-MIA-ORD-1,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/56862956246,https://www.airlines-manager.com/aircraft/show/90183184,0:30,6:44,310,"$395,838.00","$351,081.00","$1,132.52","$56,323.16"
IAH - DTW,56862956247,I-MIA-ORD-5,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/56862956247,https://www.airlines-manager.com/aircraft/show/90183180,2:30,8:44,310,"$395,838.00","$351,081.00","$1,132.52","$56,323.16"
IAH - DTW,56869877618,I-MIA-ORD-4,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/56869877618,https://www.airlines-manager.com/aircraft/show/90183181,6:00,12:14,310,"$395,838.00","$351,081.00","$1,132.52","$56,323.16"
IAH - DTW,56886798152,I-MIA-ORD-3,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/56886798152,https://www.airlines-manager.com/aircraft/show/90183182,13:00,19:14,310,"$395,838.00","$351,081.00","$1,132.52","$56,323.16"
IAH - DTW,56898577531,I-MIA-ORD-2,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/56898577531,https://www.airlines-manager.com/aircraft/show/90183183,18:45,0:59,310,"$395,838.00","$351,081.00","$1,132.52","$56,323.16"
IAH - DTW,56901278243,I-MIA-ORD-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/56901278243,https://www.airlines-manager.com/aircraft/show/90140936,20:45,2:59,136,"$188,161.00","$159,615.00","$1,173.64","$25,606.68"
IAH - ECP,56862956330,I-ILM-SRQ-1,A321-200,https://www.airlines-manager.com/network/showline/50666459,https://www.airlines-manager.com/network/showflight/56862956330,https://www.airlines-manager.com/aircraft/show/120452418,1:00,5:14,310,"$272,555.00","$244,634.00",$789.14,"$57,787.56"
IAH - ECP,56876734221,I-ILM-SRQ-4,A321-200,https://www.airlines-manager.com/network/showline/50666459,https://www.airlines-manager.com/network/showflight/56876734221,https://www.airlines-manager.com/aircraft/show/120452415,9:30,13:44,310,"$272,555.00","$244,634.00",$789.14,"$57,787.56"
IAH - ECP,56889535236,I-ILM-SRQ-3,A321-200,https://www.airlines-manager.com/network/showline/50666459,https://www.airlines-manager.com/network/showflight/56889535236,https://www.airlines-manager.com/aircraft/show/120452416,14:30,18:44,310,"$272,555.00","$244,634.00",$789.14,"$57,787.56"
IAH - ECP,56898577671,I-ILM-SRQ-2,A321-200,https://www.airlines-manager.com/network/showline/50666459,https://www.airlines-manager.com/network/showflight/56898577671,https://www.airlines-manager.com/aircraft/show/120452417,19:45,23:59,310,"$272,555.00","$244,634.00",$789.14,"$57,787.56"
IAH - ELP,56862956683,I-PBI-RSW-3,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/56862956683,https://www.airlines-manager.com/aircraft/show/104717245,3:30,8:14,310,"$300,686.00","$270,329.00",$872.03,"$57,111.76"
IAH - ELP,56880042783,I-PBI-RSW-2,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/56880042783,https://www.airlines-manager.com/aircraft/show/104717246,11:00,15:44,310,"$300,686.00","$270,329.00",$872.03,"$57,111.76"
IAH - ELP,56892624192,I-PBI-RSW-1,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/56892624192,https://www.airlines-manager.com/aircraft/show/104717247,16:45,21:29,310,"$300,686.00","$270,329.00",$872.03,"$57,111.76"
IAH - ELP,56898577585,I-PBI-RSW-5,ERJ-175,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/56898577585,https://www.airlines-manager.com/aircraft/show/104743902,19:00,23:44,112,"$143,217.00","$123,840.00","$1,105.71","$26,163.38"
IAH - ELP,56903707109,I-PBI-RSW-4,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/56903707109,https://www.airlines-manager.com/aircraft/show/104717244,22:00,2:44,310,"$300,686.00","$270,329.00",$872.03,"$57,111.76"
IAH - EUG,56862956354,I-EUG-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/56862956354,https://www.airlines-manager.com/aircraft/show/119525219,1:15,10:14,320,"$571,197.00","$521,465.00","$1,629.58","$58,048.05"
IAH - EUG,56862956355,I-EUG-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/56862956355,https://www.airlines-manager.com/aircraft/show/119525220,3:15,12:14,320,"$571,197.00","$521,465.00","$1,629.58","$58,048.05"
IAH - EUG,56880042807,I-EUG-MFR-5,ERJ-175,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/56880042807,https://www.airlines-manager.com/aircraft/show/119525248,11:00,20:14,112,"$269,366.00","$239,235.00","$2,136.03","$25,909.93"
IAH - EUG,56892624169,I-EUG-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/56892624169,https://www.airlines-manager.com/aircraft/show/119525218,16:30,1:29,320,"$571,197.00","$521,465.00","$1,629.58","$58,048.05"
IAH - EUG,56895754318,I-EUG-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/56895754318,https://www.airlines-manager.com/aircraft/show/119525217,18:30,3:29,320,"$571,197.00","$521,465.00","$1,629.58","$58,048.05"
IAH - EZE,56866822825,I-84A-2 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/56866822825,https://www.airlines-manager.com/aircraft/show/89439130,4:00,0:29,932,"$3,382,163.00","$3,084,901.00","$3,309.98","$150,605.42"
IAH - EZE,56869877585,I-84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/56869877585,https://www.airlines-manager.com/aircraft/show/89124075,5:30,1:59,932,"$3,382,163.00","$3,084,901.00","$3,309.98","$150,605.42"
IAH - FAR,56862956405,I-MSO-FAR-4,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/56862956405,https://www.airlines-manager.com/aircraft/show/110424754,1:30,8:14,320,"$419,119.00","$378,672.00","$1,183.35","$56,238.42"
IAH - FAR,56866822848,I-MSO-FAR-3,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/56866822848,https://www.airlines-manager.com/aircraft/show/110424755,4:15,10:59,320,"$419,119.00","$378,672.00","$1,183.35","$56,238.42"
IAH - FAR,56883365101,I-MSO-FAR-2,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/56883365101,https://www.airlines-manager.com/aircraft/show/110424756,12:00,18:44,320,"$419,119.00","$378,672.00","$1,183.35","$56,238.42"
IAH - FAR,56903707102,I-MSO-FAR-1,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/56903707102,https://www.airlines-manager.com/aircraft/show/110424757,22:00,4:44,320,"$419,119.00","$378,672.00","$1,183.35","$56,238.42"
IAH - FAT,56866822810,I-FAT-SAV-2,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/56866822810,https://www.airlines-manager.com/aircraft/show/110424760,4:00,11:44,320,"$499,203.00","$453,750.00","$1,417.97","$58,674.57"
IAH - FAT,56886798251,I-FAT-SAV-1,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/56886798251,https://www.airlines-manager.com/aircraft/show/110424761,14:00,21:44,320,"$499,203.00","$453,750.00","$1,417.97","$58,674.57"
IAH - FAT,56895754293,I-FAT-SAV-4,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/56895754293,https://www.airlines-manager.com/aircraft/show/110424758,18:15,1:59,320,"$499,203.00","$453,750.00","$1,417.97","$58,674.57"
IAH - FAT,56906228773,I-FAT-SAV-3,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/56906228773,https://www.airlines-manager.com/aircraft/show/110424759,23:30,7:14,320,"499,203$","453,750$","$1,417.97","$58,674.57"
IAH - FCA,56862956448,I-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/56862956448,https://www.airlines-manager.com/aircraft/show/117273391,1:45,9:59,320,"$523,626.00","$476,436.00","$1,488.86","$57,866.72"
IAH - FCA,56880042757,I-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/56880042757,https://www.airlines-manager.com/aircraft/show/117273390,11:00,19:14,320,"$523,626.00","$476,436.00","$1,488.86","$57,866.72"
IAH - FCA,56892624154,I-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/56892624154,https://www.airlines-manager.com/aircraft/show/117273392,16:15,0:29,320,"$523,626.00","$476,436.00","$1,488.86","$57,866.72"
IAH - FCA,56895754294,I-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/56895754294,https://www.airlines-manager.com/aircraft/show/117273389,18:15,2:29,310,"513,564$","466,808$","$1,505.83","$56,697.33"
IAH - FLL,56862956248,I-SLC-CLT-5,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/56862956248,https://www.airlines-manager.com/aircraft/show/93094695,0:30,6:14,310,"$368,422.00","$331,194.00","$1,068.37","$57,766.40"
IAH - FLL,56862956249,I-SLC-CLT-4,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/56862956249,https://www.airlines-manager.com/aircraft/show/93094696,3:45,9:29,310,"$368,422.00","$331,194.00","$1,068.37","$57,766.40"
IAH - FLL,56880042611,I-SLC-CLT-3,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/56880042611,https://www.airlines-manager.com/aircraft/show/93094697,10:00,15:44,310,"$368,422.00","$331,194.00","$1,068.37","$57,766.40"
IAH - FLL,56892624061,I-SLC-CLT-2,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/56892624061,https://www.airlines-manager.com/aircraft/show/93094698,15:45,21:29,310,"$368,422.00","$331,194.00","$1,068.37","$57,766.40"
IAH - FLL,56895754239,I-SLC-CLT-6,ERJ-175,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/56895754239,https://www.airlines-manager.com/aircraft/show/93100455,17:45,23:29,112,"174,669$","150,649$","$1,345.08","$26,275.99"
IAH - FLL,56903707175,I-SLC-CLT-1,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/56903707175,https://www.airlines-manager.com/aircraft/show/93094699,22:30,4:14,310,"368,422$","331,194$","$1,068.37","$57,766.40"
IAH - FSD,56866822909,I-MSO-FAR-1,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/56866822909,https://www.airlines-manager.com/aircraft/show/110424757,4:45,10:29,320,"363,297$","326,462$","$1,020.19","$56,941.05"
IAH - FSD,56876734108,I-MSO-FAR-4,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/56876734108,https://www.airlines-manager.com/aircraft/show/110424754,8:15,13:59,320,"363,297$","326,462$","$1,020.19","$56,941.05"
IAH - FSD,56880042751,I-MSO-FAR-3,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/56880042751,https://www.airlines-manager.com/aircraft/show/110424755,11:00,16:44,320,"363,297$","326,462$","$1,020.19","$56,941.05"
IAH - FSD,56898577523,I-MSO-FAR-2,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/56898577523,https://www.airlines-manager.com/aircraft/show/110424756,18:45,0:29,283,"$337,772.00","$301,876.00","$1,066.70","$52,652.79"
IAH - GDL,56866822905,I-YYC-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/56866822905,https://www.airlines-manager.com/aircraft/show/114266977,4:45,9:59,400,"$439,742.00","$397,229.00",$993.07,"$75,903.63"
IAH - GDL,56880042684,I-YYC-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/56880042684,https://www.airlines-manager.com/aircraft/show/114266980,10:45,15:59,400,"$439,742.00","$397,229.00",$993.07,"$75,903.63"
IAH - GDL,56883365090,I-YYC-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/56883365090,https://www.airlines-manager.com/aircraft/show/114266979,12:00,17:14,400,"$439,742.00","$397,229.00",$993.07,"$75,903.63"
IAH - GDL,56901278135,I-YYC-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/56901278135,https://www.airlines-manager.com/aircraft/show/114266978,20:00,1:14,356,"$397,648.00","$356,306.00","$1,000.86","$68,083.95"
IAH - GIG,56862956161,I-84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/56862956161,https://www.airlines-manager.com/aircraft/show/88905140,0:00,20:14,932,"$3,392,936.00","$3,090,291.00","$3,315.76","$152,732.67"
IAH - GIG,56862956162,I-84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/56862956162,https://www.airlines-manager.com/aircraft/show/89124074,2:00,22:14,932,"$3,392,936.00","$3,090,291.00","$3,315.76","$152,732.67"
IAH - GRR,56862956379,I-GRR-MSN-3,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/56862956379,https://www.airlines-manager.com/aircraft/show/117273346,1:15,7:29,310,"$391,082.00","$356,324.00","$1,149.43","$57,164.28"
IAH - GRR,56873155630,I-GRR-MSN-2,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/56873155630,https://www.airlines-manager.com/aircraft/show/117273347,7:15,13:29,310,"$391,082.00","$356,324.00","$1,149.43","$57,164.28"
IAH - GRR,56886798295,I-GRR-MSN-1,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/56886798295,https://www.airlines-manager.com/aircraft/show/117273348,14:00,20:14,310,"$391,082.00","$356,324.00","$1,149.43","$57,164.28"
IAH - GRR,56892624132,I-GRR-MSN-4,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/56892624132,https://www.airlines-manager.com/aircraft/show/117273345,16:00,22:14,310,"$391,082.00","$356,324.00","$1,149.43","$57,164.28"
IAH - GRU,56862956297,I-56A-7 E,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/56862956297,https://www.airlines-manager.com/aircraft/show/106676238,1:00,20:29,648,"$2,489,104.00","$2,319,462.00","$3,579.42","$119,048.52"
IAH - GRU,56880042717,I-56A-2 E,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/56880042717,https://www.airlines-manager.com/aircraft/show/106676233,11:00,6:29,648,"$2,489,104.00","$2,319,462.00","$3,579.42","$119,048.52"
IAH - GRU,56892624200,I-56A-4 E,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/56892624200,https://www.airlines-manager.com/aircraft/show/106676235,17:00,12:29,648,"$2,489,104.00","$2,319,462.00","$3,579.42","$119,048.52"
IAH - GSO,56862956453,I-SYR-ROC-1,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/56862956453,https://www.airlines-manager.com/aircraft/show/119525224,1:45,7:44,320,"$375,703.00","$337,351.00","$1,054.22","$56,381.78"
IAH - GSO,56862956454,I-SYR-ROC-4,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/56862956454,https://www.airlines-manager.com/aircraft/show/119525221,2:45,8:44,320,"$375,703.00","$337,351.00","$1,054.22","$56,381.78"
IAH - GSO,56880042761,I-SYR-ROC-3,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/56880042761,https://www.airlines-manager.com/aircraft/show/119525222,11:00,16:59,320,"$375,703.00","$337,351.00","$1,054.22","$56,381.78"
IAH - GSO,56895754295,I-SYR-ROC-2,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/56895754295,https://www.airlines-manager.com/aircraft/show/119525223,18:15,0:14,320,"$375,703.00","$337,351.00","$1,054.22","$56,381.78"
IAH - IAD,56862956688,I-IAD-SAN-6,ERJ-175,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/56862956688,https://www.airlines-manager.com/aircraft/show/105400635,3:30,10:14,112,"$199,547.00","$171,293.00","$1,529.40","$25,439.55"
IAH - IAD,56873155585,I-IAD-SAN-2,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/56873155585,https://www.airlines-manager.com/aircraft/show/98578923,6:45,13:29,320,"$423,598.00","$374,014.00","$1,168.79","$55,546.63"
IAH - IAD,56880042531,I-IAD-SAN-5,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/56880042531,https://www.airlines-manager.com/aircraft/show/98578920,9:45,16:29,320,"$423,598.00","$374,014.00","$1,168.79","$55,546.63"
IAH - IAD,56886798111,I-IAD-SAN-1,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/56886798111,https://www.airlines-manager.com/aircraft/show/98578924,13:00,19:44,320,"$423,598.00","$374,014.00","$1,168.79","$55,546.63"
IAH - IAD,56895754256,I-IAD-SAN-4,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/56895754256,https://www.airlines-manager.com/aircraft/show/98578921,18:00,0:44,320,"$423,598.00","$374,014.00","$1,168.79","$55,546.63"
IAH - IAD,56903707051,I-IAD-SAN-3,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/56903707051,https://www.airlines-manager.com/aircraft/show/98578922,21:30,4:14,320,"$423,598.00","$374,014.00","$1,168.79","$55,546.63"
IAH - ICT,56880042533,I-FAT-SAV-1,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/56880042533,https://www.airlines-manager.com/aircraft/show/110424761,9:45,13:59,320,"$250,907.00","$219,323.00",$685.38,"$51,808.58"
IAH - ICT,56886798249,I-FAT-SAV-4,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/56886798249,https://www.airlines-manager.com/aircraft/show/110424758,14:00,18:14,320,"$250,907.00","$219,323.00",$685.38,"$51,808.58"
IAH - ICT,56898577595,I-FAT-SAV-3,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/56898577595,https://www.airlines-manager.com/aircraft/show/110424759,19:15,23:29,320,"$250,907.00","$219,323.00",$685.38,"$51,808.58"
IAH - ICT,56906228800,I-FAT-SAV-2,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/56906228800,https://www.airlines-manager.com/aircraft/show/110424760,23:45,3:59,318,"$249,962.00","$218,407.00",$686.81,"$51,592.20"
IAH - ILM,56862956151,I-ILM-SRQ-2,A321-200,https://www.airlines-manager.com/network/showline/50666455,https://www.airlines-manager.com/network/showflight/56862956151,https://www.airlines-manager.com/aircraft/show/120452417,0:00,6:14,310,"$394,081.00","$360,168.00","$1,161.83","$57,780.96"
IAH - ILM,56873155722,I-ILM-SRQ-1,A321-200,https://www.airlines-manager.com/network/showline/50666455,https://www.airlines-manager.com/network/showflight/56873155722,https://www.airlines-manager.com/aircraft/show/120452418,8:00,14:14,310,"$394,081.00","$360,168.00","$1,161.83","$57,780.96"
IAH - ILM,56886798221,I-ILM-SRQ-4,A321-200,https://www.airlines-manager.com/network/showline/50666455,https://www.airlines-manager.com/network/showflight/56886798221,https://www.airlines-manager.com/aircraft/show/120452415,13:45,19:59,310,"$394,081.00","$360,168.00","$1,161.83","$57,780.96"
IAH - ILM,56898577544,I-ILM-SRQ-3,A321-200,https://www.airlines-manager.com/network/showline/50666455,https://www.airlines-manager.com/network/showflight/56898577544,https://www.airlines-manager.com/aircraft/show/120452416,18:45,0:59,310,"$394,081.00","$360,168.00","$1,161.83","$57,780.96"
IAH - IND,56862956144,I-PIT-RDU-1,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/56862956144,https://www.airlines-manager.com/aircraft/show/100684074,0:00,5:29,310,"$344,386.00","$310,520.00","$1,001.68","$56,629.79"
IAH - IND,56866822916,I-PIT-RDU-5 B,A319-100,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/56866822916,https://www.airlines-manager.com/aircraft/show/110582845,4:45,10:14,198,"$261,047.00","$233,918.00","$1,181.40","$42,659.82"
IAH - IND,56869877620,I-PIT-RDU-4,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/56869877620,https://www.airlines-manager.com/aircraft/show/100684071,6:00,11:29,310,"$344,386.00","$310,520.00","$1,001.68","$56,629.79"
IAH - IND,56883365067,I-PIT-RDU-3,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/56883365067,https://www.airlines-manager.com/aircraft/show/100684072,11:30,16:59,310,"$344,386.00","$310,520.00","$1,001.68","$56,629.79"
IAH - IND,56895754230,I-PIT-RDU-2,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/56895754230,https://www.airlines-manager.com/aircraft/show/100684073,17:45,23:14,310,"$344,386.00","$310,520.00","$1,001.68","$56,629.79"
IAH - JAC,56862956479,I-SNA-SBA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/56862956479,https://www.airlines-manager.com/aircraft/show/119525225,2:00,8:59,272,"$397,922.00","$370,446.00","$1,361.93","$53,047.16"
IAH - JAC,56880042694,I-SNA-SBA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/56880042694,https://www.airlines-manager.com/aircraft/show/119525227,11:00,17:59,272,"$397,922.00","$370,446.00","$1,361.93","$53,047.16"
IAH - JAC,56886798059,I-SNA-SBA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/56886798059,https://www.airlines-manager.com/aircraft/show/119525228,13:00,19:59,272,"$397,922.00","$370,446.00","$1,361.93","$53,047.16"
IAH - JAC,56898577514,I-SNA-SBA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/56898577514,https://www.airlines-manager.com/aircraft/show/119525226,18:45,1:44,272,"$397,922.00","$370,446.00","$1,361.93","$53,047.16"
IAH - JAC,56901278220,I-SNA-SBA-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/56901278220,https://www.airlines-manager.com/aircraft/show/119525229,20:45,3:44,272,"$397,922.00","$370,446.00","$1,361.93","$53,047.16"
IAH - JAN,56862956236,I-MSO-FAR-2,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/56862956236,https://www.airlines-manager.com/aircraft/show/110424756,0:30,3:59,320,"$177,596.00","$150,145.00",$469.20,"$43,103.83"
IAH - JAN,56880042677,I-MSO-FAR-1,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/56880042677,https://www.airlines-manager.com/aircraft/show/110424757,10:30,13:59,320,"$177,596.00","$150,145.00",$469.20,"$43,103.83"
IAH - JAN,56886798247,I-MSO-FAR-4,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/56886798247,https://www.airlines-manager.com/aircraft/show/110424754,14:00,17:29,320,"$177,596.00","$150,145.00",$469.20,"$43,103.83"
IAH - JAN,56892624187,I-MSO-FAR-3,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/56892624187,https://www.airlines-manager.com/aircraft/show/110424755,16:45,20:14,309,"$173,894.00","$146,547.00",$474.26,"$42,070.91"
IAH - JAX,56862956639,I-PBI-RSW-1,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/56862956639,https://www.airlines-manager.com/aircraft/show/104717247,3:00,8:14,310,"$338,093.00","$305,865.00",$986.66,"$58,445.54"
IAH - JAX,56873155724,I-PBI-RSW-5,ERJ-175,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/56873155724,https://www.airlines-manager.com/aircraft/show/104743902,8:00,13:14,112,"$160,251.00","$139,491.00","$1,245.46","$26,654.33"
IAH - JAX,56880042781,I-PBI-RSW-4,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/56880042781,https://www.airlines-manager.com/aircraft/show/104717244,11:00,16:14,310,"$338,093.00","$305,865.00",$986.66,"$58,445.54"
IAH - JAX,56892624176,I-PBI-RSW-3,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/56892624176,https://www.airlines-manager.com/aircraft/show/104717245,16:30,21:44,310,"$338,093.00","$305,865.00",$986.66,"$58,445.54"
IAH - JAX,56901278289,I-PBI-RSW-2,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/56901278289,https://www.airlines-manager.com/aircraft/show/104717246,21:15,2:29,310,"$338,093.00","$305,865.00",$986.66,"$58,445.54"
IAH - JFK,56862956482,I-JFK-LAX-5,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/56862956482,https://www.airlines-manager.com/aircraft/show/89233038,2:00,9:29,400,"$622,836.00","$549,527.00","$1,373.82","$73,433.45"
IAH - JFK,56880042720,I-JFK-LAX-1,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/56880042720,https://www.airlines-manager.com/aircraft/show/88400798,11:00,18:29,400,"$622,836.00","$549,527.00","$1,373.82","$73,433.45"
IAH - JFK,56895754289,I-JFK-LAX-3,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/56895754289,https://www.airlines-manager.com/aircraft/show/88400800,18:15,1:44,400,"$622,836.00","$549,527.00","$1,373.82","$73,433.45"
IAH - JFK,56898577590,I-JFK-LAX-2,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/56898577590,https://www.airlines-manager.com/aircraft/show/88400799,19:15,2:44,400,"$622,836.00","$549,527.00","$1,373.82","$73,433.45"
IAH - JFK,56901278279,I-JFK-LAX-4,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/56901278279,https://www.airlines-manager.com/aircraft/show/88400801,21:15,4:44,400,"$622,836.00","$549,527.00","$1,373.82","$73,433.45"
IAH - LAS,56866822804,I-LAS-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/56866822804,https://www.airlines-manager.com/aircraft/show/96256511,4:00,10:44,320,"$430,201.00","$368,720.00","$1,152.25","$54,760.40"
IAH - LAS,56866822805,I-LAS-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/56866822805,https://www.airlines-manager.com/aircraft/show/96250652,5:00,11:44,320,"$430,201.00","$368,720.00","$1,152.25","$54,760.40"
IAH - LAS,56866822806,I-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/56866822806,https://www.airlines-manager.com/aircraft/show/96990010,5:15,11:59,112,"$202,299.00","$168,005.00","$1,500.04","$24,951.24"
IAH - LAS,56880042739,I-LAS-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/56880042739,https://www.airlines-manager.com/aircraft/show/96177955,11:00,17:44,320,"$430,201.00","$368,720.00","$1,152.25","$54,760.40"
IAH - LAS,56889535246,I-LAS-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/56889535246,https://www.airlines-manager.com/aircraft/show/95894466,14:45,21:29,320,"$430,201.00","$368,720.00","$1,152.25","$54,760.40"
IAH - LAS,56895754211,I-LAS-ATL-6,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/56895754211,https://www.airlines-manager.com/aircraft/show/82323704,17:30,0:14,112,"$202,299.00","$168,005.00","$1,500.04","$24,951.24"
IAH - LAS,56901278224,I-LAS-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/56901278224,https://www.airlines-manager.com/aircraft/show/96183549,20:45,3:29,320,"$430,201.00","$368,720.00","$1,152.25","$54,760.40"
IAH - LAX,56862956566,I-JFK-LAX-2,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/56862956566,https://www.airlines-manager.com/aircraft/show/88400799,2:45,9:59,400,"$610,729.00","$538,556.00","$1,346.39","$74,454.75"
IAH - LAX,56862956568,I-JFK-LAX-1,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/56862956568,https://www.airlines-manager.com/aircraft/show/88400798,3:45,10:59,400,"$610,729.00","$538,556.00","$1,346.39","$74,454.75"
IAH - LAX,56866822903,I-JFK-LAX-4,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/56866822903,https://www.airlines-manager.com/aircraft/show/88400801,4:45,11:59,400,"$610,729.00","$538,556.00","$1,346.39","$74,454.75"
IAH - LAX,56880042672,I-JFK-LAX-5,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/56880042672,https://www.airlines-manager.com/aircraft/show/89233038,10:30,17:44,400,"$610,729.00","$538,556.00","$1,346.39","$74,454.75"
IAH - LAX,56880042673,I-JFK-LAX-3,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/56880042673,https://www.airlines-manager.com/aircraft/show/88400800,11:00,18:14,400,"$610,729.00","$538,556.00","$1,346.39","$74,454.75"
IAH - LEX,56866822893,I-BTV-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/56866822893,https://www.airlines-manager.com/aircraft/show/114373410,4:30,9:44,310,"$334,781.00","$304,803.00",$983.24,"$58,242.61"
IAH - LEX,56876734210,I-BTV-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/56876734210,https://www.airlines-manager.com/aircraft/show/113994196,9:15,14:29,310,"$334,781.00","$304,803.00",$983.24,"$58,242.61"
IAH - LEX,56889535292,I-BTV-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/56889535292,https://www.airlines-manager.com/aircraft/show/86385103,15:00,20:14,310,"$334,781.00","$304,803.00",$983.24,"$58,242.61"
IAH - LEX,56898577621,I-BTV-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/56898577621,https://www.airlines-manager.com/aircraft/show/82543907,19:15,0:29,112,"$158,973.00","$139,540.00","$1,245.89","$26,663.69"
IAH - LEX,56903707149,I-BTV-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/56903707149,https://www.airlines-manager.com/aircraft/show/114373409,22:15,3:29,267,"307,359$","278,357$","$1,042.54","$53,189.24"
IAH - LIM,56889535238,I-84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/56889535238,https://www.airlines-manager.com/aircraft/show/89439131,14:30,3:59,932,"2,260,419$","2,060,574$","$2,210.92","$152,823.78"
IAH - LIM,56906228814,I-84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/56906228814,https://www.airlines-manager.com/aircraft/show/89124074,23:45,13:14,932,"2,260,419$","2,060,574$","$2,210.92","$152,823.78"
IAH - LIT,56862956696,I-SJC-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/56862956696,https://www.airlines-manager.com/aircraft/show/96692491,3:45,7:14,310,"189,001$","164,995$",$532.24,"$47,366.99"
IAH - LIT,56880042777,I-SJC-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/56880042777,https://www.airlines-manager.com/aircraft/show/96692343,11:00,14:29,310,"189,001$","164,995$",$532.24,"$47,366.99"
IAH - LIT,56898577637,I-SJC-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/56898577637,https://www.airlines-manager.com/aircraft/show/96691558,19:30,22:59,310,"$189,001.00","$164,995.00",$532.24,"$47,366.99"
IAH - LIT,56901278159,I-SJC-PWM-5 B,A319-100,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/56901278159,https://www.airlines-manager.com/aircraft/show/106014350,20:00,23:29,198,"$142,596.00","$123,375.00",$623.11,"$35,418.66"
IAH - LIT,56906228780,I-SJC-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/56906228780,https://www.airlines-manager.com/aircraft/show/96694086,23:30,2:59,275,"$176,401.00","$152,754.00",$555.47,"$43,852.82"
IAH - MAF,56866822823,I-MYR-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50555962,https://www.airlines-manager.com/network/showflight/56866822823,https://www.airlines-manager.com/aircraft/show/120452411,4:00,7:44,310,"$203,259.00","$178,181.00",$574.78,"$47,727.05"
IAH - MAF,56880042633,I-MYR-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50555962,https://www.airlines-manager.com/network/showflight/56880042633,https://www.airlines-manager.com/aircraft/show/120452412,10:00,13:44,310,"$203,259.00","$178,181.00",$574.78,"$47,727.05"
IAH - MAF,56889535253,I-MYR-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50555962,https://www.airlines-manager.com/network/showflight/56889535253,https://www.airlines-manager.com/aircraft/show/120452413,14:45,18:29,310,"$203,259.00","$178,181.00",$574.78,"$47,727.05"
IAH - MAF,56898577670,I-MYR-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50555962,https://www.airlines-manager.com/network/showflight/56898577670,https://www.airlines-manager.com/aircraft/show/120452414,19:45,23:29,307,"$202,105.00","$177,062.00",$576.75,"$47,427.32"
IAH - MCI,56862956319,I-RNO-MCI-4,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/56862956319,https://www.airlines-manager.com/aircraft/show/103882358,1:00,5:44,310,"$299,574.00","$268,416.00",$865.86,"$56,707.61"
IAH - MCI,56876734207,I-RNO-MCI-3,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/56876734207,https://www.airlines-manager.com/aircraft/show/103882357,9:15,13:59,310,"299,574$","268,416$",$865.86,"$56,707.61"
IAH - MCI,56886798169,I-RNO-MCI-2,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/56886798169,https://www.airlines-manager.com/aircraft/show/103882356,13:00,17:44,310,"299,574$","268,416$",$865.86,"$56,707.61"
IAH - MCI,56895754279,I-RNO-MCI-5,ERJ-175,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/56895754279,https://www.airlines-manager.com/aircraft/show/105099861,18:00,22:44,112,"141,735$","121,915$","$1,088.53","$25,756.69"
IAH - MCI,56898577644,I-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/56898577644,https://www.airlines-manager.com/aircraft/show/120293379,19:30,23:59,0,"$78,755.00","$36,556.00",$0.00,"$8,153.75"
IAH - MCI,56901278265,I-RNO-MCI-1,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/56901278265,https://www.airlines-manager.com/aircraft/show/103882355,21:00,1:44,310,"$299,574.00","$268,416.00",$865.86,"$56,707.61"
IAH - MCO,56862956315,I-MIA-ORD-2,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/56862956315,https://www.airlines-manager.com/aircraft/show/90183183,1:00,6:29,310,"$346,660.00","$304,266.00",$981.50,"$55,489.24"
IAH - MCO,56862956316,I-MIA-ORD-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/56862956316,https://www.airlines-manager.com/aircraft/show/90140936,3:00,8:29,136,"$165,003.00","$138,225.00","$1,016.36","$25,208.21"
IAH - MCO,56873155590,I-MIA-ORD-1,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/56873155590,https://www.airlines-manager.com/aircraft/show/90183184,6:45,12:14,310,"$346,660.00","$304,266.00",$981.50,"$55,489.24"
IAH - MCO,56876734173,I-MIA-ORD-5,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/56876734173,https://www.airlines-manager.com/aircraft/show/90183180,8:45,14:14,310,"$346,660.00","$304,266.00",$981.50,"$55,489.24"
IAH - MCO,56886798151,I-MIA-ORD-4,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/56886798151,https://www.airlines-manager.com/aircraft/show/90183181,13:00,18:29,310,"$346,660.00","$304,266.00",$981.50,"$55,489.24"
IAH - MCO,56898577609,I-MIA-ORD-3,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/56898577609,https://www.airlines-manager.com/aircraft/show/90183182,19:15,0:44,310,"$346,660.00","$304,266.00",$981.50,"$55,489.24"
IAH - MEM,56869877592,I-SMF-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/56869877592,https://www.airlines-manager.com/aircraft/show/99093332,5:45,9:44,320,"$223,713.00","$190,351.00",$594.85,"$47,786.86"
IAH - MEM,56876734216,I-SMF-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/56876734216,https://www.airlines-manager.com/aircraft/show/99093333,9:30,13:29,320,"$223,713.00","$190,351.00",$594.85,"$47,786.86"
IAH - MEM,56886798239,I-SMF-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/56886798239,https://www.airlines-manager.com/aircraft/show/99093334,14:00,17:59,320,"$223,713.00","$190,351.00",$594.85,"$47,786.86"
IAH - MEM,56898577629,I-SMF-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/56898577629,https://www.airlines-manager.com/aircraft/show/99093335,19:30,23:29,320,"$223,713.00","$190,351.00",$594.85,"$47,786.86"
IAH - MEM,56903707071,I-SMF-CVG-5 B,A319-100,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/56903707071,https://www.airlines-manager.com/aircraft/show/106499070,21:30,1:29,198,"169,806$","146,816$",$741.49,"$36,857.57"
IAH - MEX,56862956477,I-MEX-YYZ-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/56862956477,https://www.airlines-manager.com/aircraft/show/97026605,1:45,6:44,136,"153,949$","129,048$",$948.88,"$25,895.92"
IAH - MEX,56869877565,I-MEX-YYZ-2,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/56869877565,https://www.airlines-manager.com/aircraft/show/97076945,5:30,10:29,400,"415,716$","367,373$",$918.43,"$73,720.33"
IAH - MEX,56876734128,I-MEX-YYZ-5,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/56876734128,https://www.airlines-manager.com/aircraft/show/97076942,8:30,13:29,400,"415,716$","367,373$",$918.43,"$73,720.33"
IAH - MEX,56886798089,I-MEX-YYZ-1,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/56886798089,https://www.airlines-manager.com/aircraft/show/97076946,13:00,17:59,400,"$415,716.00","$367,373.00",$918.43,"$73,720.33"
IAH - MEX,56892624096,I-MEX-YYZ-4,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/56892624096,https://www.airlines-manager.com/aircraft/show/97076943,16:00,20:59,392,"$408,335.00","$360,191.00",$918.85,"$72,279.13"
IAH - MEX,56903707163,I-MEX-YYZ-3,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/56903707163,https://www.airlines-manager.com/aircraft/show/97076944,22:30,3:29,284,"$308,683.00","$263,221.00",$926.83,"$52,820.27"
IAH - MFE,56862956685,I-MYR-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50555963,https://www.airlines-manager.com/network/showflight/56862956685,https://www.airlines-manager.com/aircraft/show/120452414,3:30,6:44,310,"$171,083.00","$148,684.00",$479.63,"$45,984.74"
IAH - MFE,56886798184,I-MYR-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50555963,https://www.airlines-manager.com/network/showflight/56886798184,https://www.airlines-manager.com/aircraft/show/120452411,13:00,16:14,310,"$171,083.00","$148,684.00",$479.63,"$45,984.74"
IAH - MFE,56895754236,I-MYR-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50555963,https://www.airlines-manager.com/network/showflight/56895754236,https://www.airlines-manager.com/aircraft/show/120452412,17:45,20:59,310,"$171,083.00","$148,684.00",$479.63,"$45,984.74"
IAH - MFE,56903707180,I-MYR-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50555963,https://www.airlines-manager.com/network/showflight/56903707180,https://www.airlines-manager.com/aircraft/show/120452413,22:30,1:44,310,"$171,083.00","$148,684.00",$479.63,"$45,984.74"
IAH - MFR,56862956409,I-EUG-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/56862956409,https://www.airlines-manager.com/aircraft/show/119525218,1:30,10:14,320,"$555,877.00","$506,508.00","$1,582.84","$57,997.10"
IAH - MFR,56862956410,I-EUG-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/56862956410,https://www.airlines-manager.com/aircraft/show/119525217,3:30,12:14,320,"$555,877.00","$506,508.00","$1,582.84","$57,997.10"
IAH - MFR,56880042760,I-EUG-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/56880042760,https://www.airlines-manager.com/aircraft/show/119525219,11:00,19:44,320,"555,877$","506,508$","$1,582.84","$57,997.10"
IAH - MFR,56886798134,I-EUG-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/56886798134,https://www.airlines-manager.com/aircraft/show/119525220,13:00,21:44,320,"555,877$","506,508$","$1,582.84","$57,997.10"
IAH - MFR,56901278197,I-EUG-MFR-5,ERJ-175,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/56901278197,https://www.airlines-manager.com/aircraft/show/119525248,20:15,5:14,112,"262,366$","232,593$","$2,076.72","$25,891.61"
IAH - MHT,56862956406,I-MHT-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/56862956406,https://www.airlines-manager.com/aircraft/show/114266971,1:30,9:44,320,"525,711$","477,855$","$1,493.30","$58,039.07"
IAH - MHT,56873155589,I-MHT-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/56873155589,https://www.airlines-manager.com/aircraft/show/114266970,6:45,14:59,320,"525,711$","477,855$","$1,493.30","$58,039.07"
IAH - MHT,56883365105,I-MHT-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/56883365105,https://www.airlines-manager.com/aircraft/show/114266972,12:00,20:14,320,"$525,711.00","$477,855.00","$1,493.30","$58,039.07"
IAH - MHT,56892624115,I-MHT-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/56892624115,https://www.airlines-manager.com/aircraft/show/114266976,16:00,0:14,320,"$525,711.00","$477,855.00","$1,493.30","$58,039.07"
IAH - MHT,56895754238,I-MHT-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/56895754238,https://www.airlines-manager.com/aircraft/show/92800067,17:45,1:59,112,"$247,615.00","$219,048.00","$1,955.79","$26,605.02"
IAH - MIA,56862956278,I-MIA-ORD-3,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/56862956278,https://www.airlines-manager.com/aircraft/show/90183182,0:45,6:29,310,"$371,613.00","$325,856.00","$1,051.15","$56,835.35"
IAH - MIA,56869877648,I-MIA-ORD-2,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/56869877648,https://www.airlines-manager.com/aircraft/show/90183183,6:30,12:14,310,"$371,613.00","$325,856.00","$1,051.15","$56,835.35"
IAH - MIA,56876734164,I-MIA-ORD-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/56876734164,https://www.airlines-manager.com/aircraft/show/90140936,8:30,14:14,136,"$176,905.00","$147,937.00","$1,087.77","$25,802.97"
IAH - MIA,56886798154,I-MIA-ORD-1,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/56886798154,https://www.airlines-manager.com/aircraft/show/90183184,13:00,18:44,310,"$371,613.00","$325,856.00","$1,051.15","$56,835.35"
IAH - MIA,56889535293,I-MIA-ORD-5,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/56889535293,https://www.airlines-manager.com/aircraft/show/90183180,15:00,20:44,310,"$371,613.00","$325,856.00","$1,051.15","$56,835.35"
IAH - MIA,56895754321,I-MIA-ORD-4,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/56895754321,https://www.airlines-manager.com/aircraft/show/90183181,18:30,0:14,310,"$371,613.00","$325,856.00","$1,051.15","$56,835.35"
IAH - MKE,56862956320,I-BOI-BNA-2,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/56862956320,https://www.airlines-manager.com/aircraft/show/104258212,1:00,6:59,310,"$380,561.00","$345,427.00","$1,114.28","$57,731.53"
IAH - MKE,56873155716,I-BOI-BNA-1,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/56873155716,https://www.airlines-manager.com/aircraft/show/104258211,8:00,13:59,310,"$380,561.00","$345,427.00","$1,114.28","$57,731.53"
IAH - MKE,56876734203,I-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/56876734203,https://www.airlines-manager.com/aircraft/show/103534664,9:00,14:59,112,"$179,601.00","$156,801.00","$1,400.01","$26,206.30"
IAH - MKE,56886798273,I-BOI-BNA-4,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/56886798273,https://www.airlines-manager.com/aircraft/show/104258214,14:00,19:59,310,"$380,561.00","$345,427.00","$1,114.28","$57,731.53"
IAH - MKE,56898577615,I-BOI-BNA-3,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/56898577615,https://www.airlines-manager.com/aircraft/show/104258213,19:15,1:14,310,"$380,561.00","$345,427.00","$1,114.28","$57,731.53"
IAH - MSN,56873155649,I-GRR-MSN-3,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/56873155649,https://www.airlines-manager.com/aircraft/show/117273346,7:30,13:29,310,"$373,584.00","$340,499.00","$1,098.38","$56,907.91"
IAH - MSN,56886798294,I-GRR-MSN-2,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/56886798294,https://www.airlines-manager.com/aircraft/show/117273347,14:00,19:59,310,"$373,584.00","$340,499.00","$1,098.38","$56,907.91"
IAH - MSN,56901278187,I-GRR-MSN-1,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/56901278187,https://www.airlines-manager.com/aircraft/show/117273348,20:15,2:14,310,"$373,584.00","$340,499.00","$1,098.38","$56,907.91"
IAH - MSN,56903707152,I-GRR-MSN-4,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/56903707152,https://www.airlines-manager.com/aircraft/show/117273345,22:15,4:14,310,"$373,584.00","$340,499.00","$1,098.38","$56,907.91"
IAH - MSO,56866822809,I-MSO-FAR-2,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/56866822809,https://www.airlines-manager.com/aircraft/show/110424756,4:00,11:59,320,"$509,127.00","$462,694.00","$1,445.92","$57,957.49"
IAH - MSO,56886798248,I-MSO-FAR-1,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/56886798248,https://www.airlines-manager.com/aircraft/show/110424757,14:00,21:59,320,"$509,127.00","$462,694.00","$1,445.92","$57,957.49"
IAH - MSO,56895754202,I-MSO-FAR-4,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/56895754202,https://www.airlines-manager.com/aircraft/show/110424754,17:30,1:29,320,"$509,127.00","$462,694.00","$1,445.92","$57,957.49"
IAH - MSO,56901278175,I-MSO-FAR-3,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/56901278175,https://www.airlines-manager.com/aircraft/show/110424755,20:15,4:14,320,"$509,127.00","$462,694.00","$1,445.92","$57,957.49"
IAH - MSP,56866822800,I-LAS-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/56866822800,https://www.airlines-manager.com/aircraft/show/95894466,4:00,9:59,320,"$384,765.00","$335,469.00","$1,048.34","$56,067.24"
IAH - MSP,56866822801,I-LAS-ATL-6,ERJ-175,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/56866822801,https://www.airlines-manager.com/aircraft/show/82323704,5:00,11:14,112,"$182,588.00","$154,923.00","$1,383.24","$24,853.96"
IAH - MSP,56880042564,I-LAS-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/56880042564,https://www.airlines-manager.com/aircraft/show/96183549,10:00,15:59,320,"$384,765.00","$335,469.00","$1,048.34","$56,067.24"
IAH - MSP,56895754221,I-LAS-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/56895754221,https://www.airlines-manager.com/aircraft/show/96250652,17:45,23:44,320,"$384,765.00","$335,469.00","$1,048.34","$56,067.24"
IAH - MSP,56903707049,I-LAS-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/56903707049,https://www.airlines-manager.com/aircraft/show/96256511,21:30,3:29,320,"384,765$","335,469$","$1,048.34","$56,067.24"
IAH - MSP,56903707050,I-LAS-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/56903707050,https://www.airlines-manager.com/aircraft/show/96177955,22:30,4:29,320,"384,765$","335,469$","$1,048.34","$56,067.24"
IAH - MSY,56862956689,I-BWI-PHL-4,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/56862956689,https://www.airlines-manager.com/aircraft/show/106007216,3:45,6:59,338,"171,070$","146,423$",$433.20,"$45,285.46"
IAH - MSY,56866822898,I-BWI-PHL-5,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/56866822898,https://www.airlines-manager.com/aircraft/show/106007217,4:45,7:59,338,"171,070$","146,423$",$433.20,"$45,285.46"
IAH - MSY,56880042701,I-BWI-PHL-3,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/56880042701,https://www.airlines-manager.com/aircraft/show/106007215,11:00,14:14,338,"$171,070.00","$146,423.00",$433.20,"$45,285.46"
IAH - MSY,56895754215,I-BWI-PHL-2,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/56895754215,https://www.airlines-manager.com/aircraft/show/106007214,17:45,20:59,338,"$171,070.00","$146,423.00",$433.20,"$45,285.46"
IAH - MSY,56901278201,I-BWI-PHL-1,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/56901278201,https://www.airlines-manager.com/aircraft/show/106007213,20:30,23:44,268,"$149,994.00","$125,833.00",$469.53,"$38,917.42"
IAH - MTJ,56862956644,I-MYR-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50683373,https://www.airlines-manager.com/network/showflight/56862956644,https://www.airlines-manager.com/aircraft/show/120452412,3:00,8:44,310,"$359,072.00","$326,458.00","$1,053.09","$56,940.35"
IAH - MTJ,56876734197,I-MYR-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50683373,https://www.airlines-manager.com/network/showflight/56876734197,https://www.airlines-manager.com/aircraft/show/120452413,9:00,14:44,310,"$359,072.00","$326,458.00","$1,053.09","$56,940.35"
IAH - MTJ,56886798296,I-MYR-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50683373,https://www.airlines-manager.com/network/showflight/56886798296,https://www.airlines-manager.com/aircraft/show/120452414,14:00,19:44,310,"$359,072.00","$326,458.00","$1,053.09","$56,940.35"
IAH - MTJ,56903707153,I-MYR-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50683373,https://www.airlines-manager.com/network/showflight/56903707153,https://www.airlines-manager.com/aircraft/show/120452411,22:15,3:59,244,"$314,023.00","$283,084.00","$1,160.18","$49,375.12"
IAH - MTY,56862956680,I-YOW-SJD-1,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/56862956680,https://www.airlines-manager.com/aircraft/show/114266974,3:30,7:14,320,"$203,277.00","$172,760.00",$539.88,"$46,275.00"
IAH - MTY,56876734214,I-YOW-SJD-5,ERJ-175,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/56876734214,https://www.airlines-manager.com/aircraft/show/105099862,9:15,12:59,112,"$92,839.00","$76,384.00",$682.00,"$20,460.00"
IAH - MTY,56886798252,I-YOW-SJD-4,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/56886798252,https://www.airlines-manager.com/aircraft/show/114266975,14:00,17:44,320,"$203,277.00","$172,760.00",$539.88,"$46,275.00"
IAH - MTY,56895754203,I-YOW-SJD-3,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/56895754203,https://www.airlines-manager.com/aircraft/show/113250059,17:30,21:14,320,"$203,277.00","$172,760.00",$539.88,"$46,275.00"
IAH - MTY,56906228774,I-YOW-SJD-2,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/56906228774,https://www.airlines-manager.com/aircraft/show/113114108,23:30,3:14,320,"$203,277.00","$172,760.00",$539.88,"$46,275.00"
IAH - MYR,56862956467,I-MYR-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50683370,https://www.airlines-manager.com/network/showflight/56862956467,https://www.airlines-manager.com/aircraft/show/120452413,1:45,7:44,310,"$378,289.00","$344,570.00","$1,111.52","$57,588.30"
IAH - MYR,56873155721,I-MYR-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50683370,https://www.airlines-manager.com/network/showflight/56873155721,https://www.airlines-manager.com/aircraft/show/120452414,8:00,13:59,310,"$378,289.00","$344,570.00","$1,111.52","$57,588.30"
IAH - MYR,56892624158,I-MYR-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50683370,https://www.airlines-manager.com/network/showflight/56892624158,https://www.airlines-manager.com/aircraft/show/120452411,16:15,22:14,310,"$378,289.00","$344,570.00","$1,111.52","$57,588.30"
IAH - MYR,56901278270,I-MYR-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50683370,https://www.airlines-manager.com/network/showflight/56901278270,https://www.airlines-manager.com/aircraft/show/120452412,21:00,2:59,310,"378,289$","344,570$","$1,111.52","$57,588.30"
IAH - OAK,56862956348,I-IAD-SAN-5,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/56862956348,https://www.airlines-manager.com/aircraft/show/98578920,1:15,9:44,320,"531,050$","480,227$","$1,500.71","$56,608.29"
IAH - OAK,56862956349,I-IAD-SAN-1,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/56862956349,https://www.airlines-manager.com/aircraft/show/98578924,3:00,11:29,320,"531,050$","480,227$","$1,500.71","$56,608.29"
IAH - OAK,56873155708,I-IAD-SAN-4,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/56873155708,https://www.airlines-manager.com/aircraft/show/98578921,8:00,16:29,320,"531,050$","480,227$","$1,500.71","$56,608.29"
IAH - OAK,56886798110,I-IAD-SAN-3,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/56886798110,https://www.airlines-manager.com/aircraft/show/98578922,13:00,21:29,320,"531,050$","480,227$","$1,500.71","$56,608.29"
IAH - OAK,56898577586,I-IAD-SAN-6,ERJ-175,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/56898577586,https://www.airlines-manager.com/aircraft/show/105400635,19:00,3:29,112,"250,246$","220,099$","$1,965.17","$25,944.87"
IAH - OAK,56903707137,I-IAD-SAN-2,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/56903707137,https://www.airlines-manager.com/aircraft/show/98578923,22:15,6:44,320,"531,050$","480,227$","$1,500.71","$56,608.29"
IAH - OKC,56869877578,I-RIC-SDF-1,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/56869877578,https://www.airlines-manager.com/aircraft/show/107467134,5:30,9:14,310,"197,208$","171,947$",$554.67,"$46,057.23"
IAH - OKC,56880042656,I-RIC-SDF-5,ERJ-175,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/56880042656,https://www.airlines-manager.com/aircraft/show/107467211,10:00,13:44,112,"$90,992.00","$75,145.00",$670.94,"$20,128.13"
IAH - OKC,56883365124,I-RIC-SDF-4,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/56883365124,https://www.airlines-manager.com/aircraft/show/107467131,12:00,15:44,310,"$197,208.00","$171,947.00",$554.67,"$46,057.23"
IAH - OKC,56895754234,I-RIC-SDF-3,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/56895754234,https://www.airlines-manager.com/aircraft/show/107467132,17:45,21:29,310,"$197,208.00","$171,947.00",$554.67,"$46,057.23"
IAH - OKC,56906228733,I-RIC-SDF-2,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/56906228733,https://www.airlines-manager.com/aircraft/show/107467133,23:00,2:44,310,"$197,208.00","$171,947.00",$554.67,"$46,057.23"
IAH - OMA,56862956587,I-BOI-BNA-1,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/56862956587,https://www.airlines-manager.com/aircraft/show/104258211,2:45,7:59,310,"$329,990.00","$298,847.00",$964.02,"$57,104.52"
IAH - OMA,56862956589,I-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/56862956589,https://www.airlines-manager.com/aircraft/show/103534664,3:45,8:59,112,"$156,520.00","$136,469.00","$1,218.47","$26,076.88"
IAH - OMA,56876734174,I-BOI-BNA-4,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/56876734174,https://www.airlines-manager.com/aircraft/show/104258214,8:45,13:59,310,"$329,990.00","$298,847.00",$964.02,"$57,104.52"
IAH - OMA,56886798272,I-BOI-BNA-3,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/56886798272,https://www.airlines-manager.com/aircraft/show/104258213,14:00,19:14,310,"$329,990.00","$298,847.00",$964.02,"$57,104.52"
IAH - OMA,56898577664,I-BOI-BNA-2,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/56898577664,https://www.airlines-manager.com/aircraft/show/104258212,19:45,0:59,310,"$329,990.00","$298,847.00",$964.02,"$57,104.52"
IAH - ONT,56862956602,I-ANC-ONT-1,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/56862956602,https://www.airlines-manager.com/aircraft/show/108258010,2:45,9:59,310,"465,347$","424,181$","$1,368.33","$58,642.53"
IAH - ONT,56866822913,I-ANC-ONT-2,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/56866822913,https://www.airlines-manager.com/aircraft/show/108258011,4:45,11:59,310,"$465,347.00","$424,181.00","$1,368.33","$58,642.53"
IAH - ONT,56883365129,I-ANC-ONT-3,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/56883365129,https://www.airlines-manager.com/aircraft/show/108258012,12:00,19:14,310,"$465,347.00","$424,181.00","$1,368.33","$58,642.53"
IAH - ONT,56886798278,I-ANC-ONT-4,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/56886798278,https://www.airlines-manager.com/aircraft/show/108089220,14:00,21:14,310,"$465,347.00","$424,181.00","$1,368.33","$58,642.53"
IAH - ONT,56892624136,I-ANC-ONT-5 B,A319-100,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/56892624136,https://www.airlines-manager.com/aircraft/show/108286957,16:00,23:14,198,"$351,162.00","$318,172.00","$1,606.93","$43,986.91"
IAH - ORD,56862956210,I-MIA-ORD-4,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/56862956210,https://www.airlines-manager.com/aircraft/show/90183181,0:15,5:59,310,"$364,400.00","$309,434.00",$998.17,"$53,971.05"
IAH - ORD,56869877647,I-MIA-ORD-3,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/56869877647,https://www.airlines-manager.com/aircraft/show/90183182,6:30,12:14,310,"$364,400.00","$309,434.00",$998.17,"$53,971.05"
IAH - ORD,56876734124,I-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/56876734124,https://www.airlines-manager.com/aircraft/show/120293379,8:15,13:59,0,"$101,420.00","$26,513.00",#DIV/0!,"$4,624.36"
IAH - ORD,56886798153,I-MIA-ORD-2,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/56886798153,https://www.airlines-manager.com/aircraft/show/90183183,13:00,18:44,310,"$364,400.00","$309,434.00",$998.17,"$53,971.05"
IAH - ORD,56889535322,I-MIA-ORD-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/56889535322,https://www.airlines-manager.com/aircraft/show/90140936,15:00,20:44,136,"$173,108.00","$138,672.00","$1,019.65","$24,186.98"
IAH - ORD,56898577532,I-MIA-ORD-1,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/56898577532,https://www.airlines-manager.com/aircraft/show/90183184,18:45,0:29,310,"$364,400.00","$309,434.00",$998.17,"$53,971.05"
IAH - ORD,56901278236,I-MIA-ORD-5,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/56901278236,https://www.airlines-manager.com/aircraft/show/90183180,20:45,2:29,310,"$364,400.00","$309,434.00",$998.17,"$53,971.05"
IAH - ORF,56862956160,I-PVD-BUF-5 B,A319-100,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/56862956160,https://www.airlines-manager.com/aircraft/show/110582843,0:00,6:44,198,"$320,725.00","$291,072.00","$1,470.06","$43,228.51"
IAH - ORF,56866822857,I-PVD-BUF-1,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/56866822857,https://www.airlines-manager.com/aircraft/show/107467130,4:15,10:59,310,"$425,000.00","$387,998.00","$1,251.61","$57,623.47"
IAH - ORF,56876734118,I-PVD-BUF-4,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/56876734118,https://www.airlines-manager.com/aircraft/show/107467127,8:15,14:59,310,"$425,000.00","$387,998.00","$1,251.61","$57,623.47"
IAH - ORF,56886798173,I-PVD-BUF-3,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/56886798173,https://www.airlines-manager.com/aircraft/show/107467128,13:00,19:44,310,"425,000$","387,998$","$1,251.61","$57,623.47"
IAH - ORF,56901278143,I-PVD-BUF-2,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/56901278143,https://www.airlines-manager.com/aircraft/show/107467129,20:00,2:44,310,"$425,000.00","$387,998.00","$1,251.61","$57,623.47"
IAH - PBI,56862956550,I-PBI-RSW-2,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/56862956550,https://www.airlines-manager.com/aircraft/show/104717246,2:30,8:14,310,"370,693$","335,957$","$1,083.73","$58,597.15"
IAH - PBI,56880042784,I-PBI-RSW-1,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/56880042784,https://www.airlines-manager.com/aircraft/show/104717247,11:00,16:44,310,"370,693$","335,957$","$1,083.73","$58,597.15"
IAH - PBI,56886798204,I-PBI-RSW-5,ERJ-175,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/56886798204,https://www.airlines-manager.com/aircraft/show/104743902,13:15,18:59,112,"$175,285.00","$152,779.00","$1,364.10","$26,647.50"
IAH - PBI,56892624155,I-PBI-RSW-4,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/56892624155,https://www.airlines-manager.com/aircraft/show/104717244,16:15,21:59,310,"$370,693.00","$335,957.00","$1,083.73","$58,597.15"
IAH - PBI,56903707091,I-PBI-RSW-3,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/56903707091,https://www.airlines-manager.com/aircraft/show/104717245,21:45,3:29,310,"$370,693.00","$335,957.00","$1,083.73","$58,597.15"
IAH - PDX,56862956565,I-SEA-DEN-5,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/56862956565,https://www.airlines-manager.com/aircraft/show/105562975,2:45,11:44,338,"$622,480.00","$574,378.00","$1,699.34","$63,938.18"
IAH - PDX,56866822794,I-SEA-DEN-2,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/56866822794,https://www.airlines-manager.com/aircraft/show/105562972,4:00,12:59,338,"$622,480.00","$574,378.00","$1,699.34","$63,938.18"
IAH - PDX,56866822795,I-SEA-DEN-4,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/56866822795,https://www.airlines-manager.com/aircraft/show/105562974,5:00,13:59,338,"$622,480.00","$574,378.00","$1,699.34","$63,938.18"
IAH - PDX,56883365145,I-SEA-DEN-6,ERJ-175,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/56883365145,https://www.airlines-manager.com/aircraft/show/105601215,12:00,21:14,112,"$270,856.00","$237,445.00","$2,120.04","$25,716.06"
IAH - PDX,56886798223,I-SEA-DEN-3,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/56886798223,https://www.airlines-manager.com/aircraft/show/105562973,14:00,22:59,338,"$622,480.00","$574,378.00","$1,699.34","$63,938.18"
IAH - PDX,56895754306,I-SEA-DEN-1,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/56895754306,https://www.airlines-manager.com/aircraft/show/105562971,18:30,3:29,338,"622,480$","574,378$","$1,699.34","$63,938.18"
IAH - PHL,56862956169,I-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/56862956169,https://www.airlines-manager.com/aircraft/show/120293379,0:00,7:14,0,"127,938$","65,291$",$0.00,"$9,026.41"
IAH - PHL,56880042702,I-BWI-PHL-4,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/56880042702,https://www.airlines-manager.com/aircraft/show/106007216,11:00,18:14,338,"503,297$","458,115$","$1,355.37","$63,333.87"
IAH - PHL,56889535211,I-BWI-PHL-3,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/56889535211,https://www.airlines-manager.com/aircraft/show/106007215,14:15,21:29,338,"503,297$","458,115$","$1,355.37","$63,333.87"
IAH - PHL,56901278245,I-BWI-PHL-2,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/56901278245,https://www.airlines-manager.com/aircraft/show/106007214,21:00,4:14,338,"503,297$","458,115$","$1,355.37","$63,333.87"
IAH - PHL,56903707045,I-BWI-PHL-5,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/56903707045,https://www.airlines-manager.com/aircraft/show/106007217,21:30,4:44,338,"$503,297.00","$458,115.00","$1,355.37","$63,333.87"
IAH - PHL,56906228791,I-BWI-PHL-1,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/56906228791,https://www.airlines-manager.com/aircraft/show/106007213,23:45,6:59,338,"$503,297.00","$458,115.00","$1,355.37","$63,333.87"
IAH - PHX,56866822802,I-LAS-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/56866822802,https://www.airlines-manager.com/aircraft/show/96183549,4:00,9:59,320,"$380,643.00","$328,609.00","$1,026.90","$54,920.72"
IAH - PHX,56866822803,I-LAS-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/56866822803,https://www.airlines-manager.com/aircraft/show/96177955,5:00,10:59,320,"$380,643.00","$328,609.00","$1,026.90","$54,920.72"
IAH - PHX,56883365072,I-LAS-ATL-6,ERJ-175,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/56883365072,https://www.airlines-manager.com/aircraft/show/82323704,11:30,17:29,112,"179,949$","150,998$","$1,348.20","$25,236.43"
IAH - PHX,56883365073,I-LAS-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/56883365073,https://www.airlines-manager.com/aircraft/show/96250652,11:45,17:44,320,"380,643$","328,609$","$1,026.90","$54,920.72"
IAH - PHX,56889535345,I-LAS-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/56889535345,https://www.airlines-manager.com/aircraft/show/96256511,15:30,21:29,320,"380,643$","328,609$","$1,026.90","$54,920.72"
IAH - PHX,56903707048,I-LAS-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/56903707048,https://www.airlines-manager.com/aircraft/show/95894466,21:30,3:29,320,"380,643$","328,609$","$1,026.90","$54,920.72"
IAH - PIT,56866822935,I-PIT-RDU-2,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/56866822935,https://www.airlines-manager.com/aircraft/show/100684073,5:00,11:29,310,"406,895$","368,531$","$1,188.81","$56,842.83"
IAH - PIT,56883365059,I-PIT-RDU-1,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/56883365059,https://www.airlines-manager.com/aircraft/show/100684074,11:15,17:44,310,"406,895$","368,531$","$1,188.81","$56,842.83"
IAH - PIT,56892624138,I-PIT-RDU-5 B,A319-100,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/56892624138,https://www.airlines-manager.com/aircraft/show/110582845,16:00,22:29,198,"307,277$","276,538$","$1,396.66","$42,653.68"
IAH - PIT,56895754179,I-PIT-RDU-4,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/56895754179,https://www.airlines-manager.com/aircraft/show/100684071,17:15,23:44,310,"406,895$","368,531$","$1,188.81","$56,842.83"
IAH - PIT,56903707209,I-PIT-RDU-3,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/56903707209,https://www.airlines-manager.com/aircraft/show/100684072,22:45,5:14,310,"406,895$","368,531$","$1,188.81","$56,842.83"
IAH - PNS,56876734196,I-MYR-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50683375,https://www.airlines-manager.com/network/showflight/56876734196,https://www.airlines-manager.com/aircraft/show/120452411,9:00,12:59,310,"228,813$","203,811$",$657.45,"$51,165.94"
IAH - PNS,56886798220,I-MYR-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50683375,https://www.airlines-manager.com/network/showflight/56886798220,https://www.airlines-manager.com/aircraft/show/120452412,13:45,17:44,310,"228,813$","203,811$",$657.45,"$51,165.94"
IAH - PNS,56895754327,I-MYR-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50683375,https://www.airlines-manager.com/network/showflight/56895754327,https://www.airlines-manager.com/aircraft/show/120452413,18:30,22:29,310,"228,813$","203,811$",$657.45,"$51,165.94"
IAH - PNS,56906228783,I-MYR-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50683375,https://www.airlines-manager.com/network/showflight/56906228783,https://www.airlines-manager.com/aircraft/show/120452414,23:30,3:29,310,"228,813$","203,811$",$657.45,"$51,165.94"
IAH - PSP,56862956421,I-YEG-BUR-2,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/56862956421,https://www.airlines-manager.com/aircraft/show/117273343,1:30,8:29,310,"452,503$","414,449$","$1,336.93","$59,348.31"
IAH - PSP,56862956422,I-YEG-BUR-1,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/56862956422,https://www.airlines-manager.com/aircraft/show/117273344,3:45,10:44,310,"452,503$","414,449$","$1,336.93","$59,348.31"
IAH - PSP,56880042798,I-YEG-BUR-3,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/56880042798,https://www.airlines-manager.com/aircraft/show/117273342,11:00,17:59,310,"$452,503.00","$414,449.00","$1,336.93","$59,348.31"
IAH - PSP,56895754308,I-YEG-BUR-5,A321neo,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/56895754308,https://www.airlines-manager.com/aircraft/show/117273340,18:30,1:29,338,"$490,459.00","$453,988.00","$1,343.16","$65,010.21"
IAH - PVD,56862956596,I-PVD-BUF-2,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/56862956596,https://www.airlines-manager.com/aircraft/show/107467129,2:45,10:59,310,"$518,459.00","$476,949.00","$1,538.55","$57,929.03"
IAH - PVD,56873155594,I-PVD-BUF-5 B,A319-100,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/56873155594,https://www.airlines-manager.com/aircraft/show/110582843,6:45,14:59,198,"$390,620.00","$357,345.00","$1,804.77","$43,402.23"
IAH - PVD,56886798175,I-PVD-BUF-1,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/56886798175,https://www.airlines-manager.com/aircraft/show/107467130,13:00,21:14,310,"$518,459.00","$476,949.00","$1,538.55","$57,929.03"
IAH - PVD,56892624228,I-PVD-BUF-4,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/56892624228,https://www.airlines-manager.com/aircraft/show/107467127,17:00,1:14,310,"518,459$","476,949$","$1,538.55","$57,929.03"
IAH - PVD,56898577665,I-PVD-BUF-3,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/56898577665,https://www.airlines-manager.com/aircraft/show/107467128,19:45,3:59,310,"518,459$","476,949$","$1,538.55","$57,929.03"
IAH - PVR,56862956652,I-YOW-SJD-5,ERJ-175,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/56862956652,https://www.airlines-manager.com/aircraft/show/105099862,3:00,8:29,112,"167,029$","145,615$","$1,300.13","$26,555.93"
IAH - PVR,56876734134,I-YOW-SJD-4,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/56876734134,https://www.airlines-manager.com/aircraft/show/114266975,8:30,13:59,320,"357,042$","319,408$",$998.15,"$58,250.70"
IAH - PVR,56883365103,I-YOW-SJD-3,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/56883365103,https://www.airlines-manager.com/aircraft/show/113250059,12:00,17:29,320,"$357,042.00","$319,408.00",$998.15,"$58,250.70"
IAH - PVR,56895754259,I-YOW-SJD-2,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/56895754259,https://www.airlines-manager.com/aircraft/show/113114108,18:00,23:29,320,"$357,042.00","$319,408.00",$998.15,"$58,250.70"
IAH - PVR,56903707103,I-YOW-SJD-1,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/56903707103,https://www.airlines-manager.com/aircraft/show/114266974,22:00,3:29,320,"$357,042.00","$319,408.00",$998.15,"$58,250.70"
IAH - PWM,56873155699,I-SJC-PWM-5 B,A319-100,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/56873155699,https://www.airlines-manager.com/aircraft/show/106014350,7:45,16:14,198,"$408,258.00","$374,074.00","$1,889.26","$44,095.17"
IAH - PWM,56880042776,I-SJC-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/56880042776,https://www.airlines-manager.com/aircraft/show/96691558,11:00,19:29,310,"$542,330.00","$499,689.00","$1,611.90","$58,902.44"
IAH - PWM,56889535296,I-SJC-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/56889535296,https://www.airlines-manager.com/aircraft/show/96694086,15:00,23:29,310,"$542,330.00","$499,689.00","$1,611.90","$58,902.44"
IAH - PWM,56898577613,I-SJC-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/56898577613,https://www.airlines-manager.com/aircraft/show/96692491,19:15,3:44,310,"$542,330.00","$499,689.00","$1,611.90","$58,902.44"
IAH - PWM,56903707207,I-SJC-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/56903707207,https://www.airlines-manager.com/aircraft/show/96692343,22:45,7:14,310,"$542,330.00","$499,689.00","$1,611.90","$58,902.44"
IAH - RAP,56862956517,I-GRR-MSN-1,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/56862956517,https://www.airlines-manager.com/aircraft/show/117273348,2:15,8:29,310,"$389,890.00","$355,642.00","$1,147.23","$57,054.87"
IAH - RAP,56866822862,I-GRR-MSN-4,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/56866822862,https://www.airlines-manager.com/aircraft/show/117273345,4:15,10:29,310,"$389,890.00","$355,642.00","$1,147.23","$57,054.87"
IAH - RAP,56886798293,I-GRR-MSN-3,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/56886798293,https://www.airlines-manager.com/aircraft/show/117273346,14:00,20:14,310,"$389,890.00","$355,642.00","$1,147.23","$57,054.87"
IAH - RAP,56901278149,I-GRR-MSN-2,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/56901278149,https://www.airlines-manager.com/aircraft/show/117273347,20:00,2:14,293,"$377,260.00","$343,506.00","$1,172.38","$55,107.91"
IAH - RDU,56866822948,I-PIT-RDU-3,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/56866822948,https://www.airlines-manager.com/aircraft/show/100684072,5:15,11:29,310,"$390,232.00","$353,428.00","$1,140.09","$56,699.68"
IAH - RDU,56883365068,I-PIT-RDU-2,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/56883365068,https://www.airlines-manager.com/aircraft/show/100684073,11:30,17:44,310,"$390,232.00","$353,428.00","$1,140.09","$56,699.68"
IAH - RDU,56895754231,I-PIT-RDU-1,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/56895754231,https://www.airlines-manager.com/aircraft/show/100684074,17:45,23:59,310,"$390,232.00","$353,428.00","$1,140.09","$56,699.68"
IAH - RDU,56903707181,I-PIT-RDU-5 B,A319-100,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/56903707181,https://www.airlines-manager.com/aircraft/show/110582845,22:30,4:44,198,"$294,889.00","$265,400.00","$1,340.40","$42,577.54"
IAH - RDU,56906228805,I-PIT-RDU-4,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/56906228805,https://www.airlines-manager.com/aircraft/show/100684071,23:45,5:59,310,"$390,232.00","$353,428.00","$1,140.09","$56,699.68"
IAH - RIC,56862956599,I-RIC-SDF-2,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/56862956599,https://www.airlines-manager.com/aircraft/show/107467133,2:45,9:14,310,"$418,233.00","$381,919.00","$1,232.00","$58,907.81"
IAH - RIC,56883365127,I-RIC-SDF-1,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/56883365127,https://www.airlines-manager.com/aircraft/show/107467134,12:00,18:29,310,"$418,233.00","$381,919.00","$1,232.00","$58,907.81"
IAH - RIC,56886798222,I-RIC-SDF-5,ERJ-175,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/56886798222,https://www.airlines-manager.com/aircraft/show/107467211,13:45,20:14,112,"$196,627.00","$172,821.00","$1,543.04","$26,656.20"
IAH - RIC,56892624065,I-RIC-SDF-4,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/56892624065,https://www.airlines-manager.com/aircraft/show/107467131,15:45,22:14,310,"$418,233.00","$381,919.00","$1,232.00","$58,907.81"
IAH - RIC,56903707067,I-RIC-SDF-3,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/56903707067,https://www.airlines-manager.com/aircraft/show/107467132,21:30,3:59,310,"$418,233.00","$381,919.00","$1,232.00","$58,907.81"
IAH - RNO,56862956366,I-RNO-MCI-3,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/56862956366,https://www.airlines-manager.com/aircraft/show/103882357,1:15,9:14,310,"$514,150.00","$471,042.00","$1,519.49","$59,003.17"
IAH - RNO,56866822827,I-RNO-MCI-5,ERJ-175,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/56866822827,https://www.airlines-manager.com/aircraft/show/105099861,4:00,11:59,112,"$241,738.00","$213,206.00","$1,903.63","$26,706.39"
IAH - RNO,56866822828,I-RNO-MCI-2,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/56866822828,https://www.airlines-manager.com/aircraft/show/103882356,5:00,12:59,310,"$514,150.00","$471,042.00","$1,519.49","$59,003.17"
IAH - RNO,56886798168,I-RNO-MCI-1,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/56886798168,https://www.airlines-manager.com/aircraft/show/103882355,13:00,20:59,310,"$514,150.00","$471,042.00","$1,519.49","$59,003.17"
IAH - RNO,56892624226,I-RNO-MCI-4,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/56892624226,https://www.airlines-manager.com/aircraft/show/103882358,17:00,0:59,310,"$514,150.00","$471,042.00","$1,519.49","$59,003.17"
IAH - ROC,56862956240,I-SYR-ROC-3,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/56862956240,https://www.airlines-manager.com/aircraft/show/119525222,0:30,7:44,320,"$463,219.00","$420,416.00","$1,313.80","$58,122.03"
IAH - ROC,56880042762,I-SYR-ROC-2,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/56880042762,https://www.airlines-manager.com/aircraft/show/119525223,11:00,18:14,320,"$463,219.00","$420,416.00","$1,313.80","$58,122.03"
IAH - ROC,56883365147,I-SYR-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/56883365147,https://www.airlines-manager.com/aircraft/show/119525249,12:00,19:14,112,"$218,849.00","$193,570.00","$1,728.30","$26,760.83"
IAH - ROC,56895754319,I-SYR-ROC-1,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/56895754319,https://www.airlines-manager.com/aircraft/show/119525224,18:30,1:44,320,"$463,219.00","$420,416.00","$1,313.80","$58,122.03"
IAH - ROC,56898577634,I-SYR-ROC-4,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/56898577634,https://www.airlines-manager.com/aircraft/show/119525221,19:30,2:44,320,"$463,219.00","$420,416.00","$1,313.80","$58,122.03"
IAH - RSW,56862956593,I-PBI-RSW-4,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/56862956593,https://www.airlines-manager.com/aircraft/show/104717244,2:45,8:14,310,"$350,834.00","$316,276.00","$1,020.25","$57,679.51"
IAH - RSW,56880042782,I-PBI-RSW-3,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/56880042782,https://www.airlines-manager.com/aircraft/show/104717245,11:00,16:29,310,"$350,834.00","$316,276.00","$1,020.25","$57,679.51"
IAH - RSW,56892624064,I-PBI-RSW-2,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/56892624064,https://www.airlines-manager.com/aircraft/show/104717246,15:45,21:14,310,"350,834$","316,276$","$1,020.25","$57,679.51"
IAH - RSW,56903707066,I-PBI-RSW-1,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/56903707066,https://www.airlines-manager.com/aircraft/show/104717247,21:30,2:59,310,"350,834$","316,276$","$1,020.25","$57,679.51"
IAH - RSW,56906228815,I-PBI-RSW-5,ERJ-175,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/56906228815,https://www.airlines-manager.com/aircraft/show/104743902,23:45,5:14,112,"165,937$","143,701$","$1,283.04","$26,206.87"
IAH - SAN,56862956268,I-IAD-SAN-4,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/56862956268,https://www.airlines-manager.com/aircraft/show/98578921,0:45,7:59,320,"454,470$","407,129$","$1,272.28","$56,285.12"
IAH - SAN,56866822843,I-IAD-SAN-3,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/56866822843,https://www.airlines-manager.com/aircraft/show/98578922,4:15,11:29,320,"454,470$","407,129$","$1,272.28","$56,285.12"
IAH - SAN,56880042669,I-IAD-SAN-6,ERJ-175,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/56880042669,https://www.airlines-manager.com/aircraft/show/105400635,10:15,17:29,112,"$215,045.00","$187,586.00","$1,674.88","$25,933.55"
IAH - SAN,56889535279,I-IAD-SAN-2,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/56889535279,https://www.airlines-manager.com/aircraft/show/98578923,15:00,22:14,320,"$454,470.00","$407,129.00","$1,272.28","$56,285.12"
IAH - SAN,56895754255,I-IAD-SAN-5,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/56895754255,https://www.airlines-manager.com/aircraft/show/98578920,18:00,1:14,320,"$454,470.00","$407,129.00","$1,272.28","$56,285.12"
IAH - SAN,56898577655,I-IAD-SAN-1,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/56898577655,https://www.airlines-manager.com/aircraft/show/98578924,19:45,2:59,320,"$454,470.00","$407,129.00","$1,272.28","$56,285.12"
IAH - SAT,56862956424,I-SMF-CVG-5 B,A319-100,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/56862956424,https://www.airlines-manager.com/aircraft/show/106499070,1:30,4:14,198,"$91,093.00","$73,214.00",$369.77,"$26,785.61"
IAH - SAT,56880042532,I-SMF-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/56880042532,https://www.airlines-manager.com/aircraft/show/99093332,9:45,12:29,320,"$120,541.00","$94,177.00",$294.30,"$34,455.00"
IAH - SAT,56886798238,I-SMF-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/56886798238,https://www.airlines-manager.com/aircraft/show/99093333,14:00,16:44,320,"$120,541.00","$94,177.00",$294.30,"$34,455.00"
IAH - SAT,56895754257,I-SMF-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/56895754257,https://www.airlines-manager.com/aircraft/show/99093334,18:00,20:44,320,"$120,541.00","$94,177.00",$294.30,"$34,455.00"
IAH - SAT,56906228770,I-SMF-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/56906228770,https://www.airlines-manager.com/aircraft/show/99093335,23:30,2:14,320,"$120,541.00","$94,177.00",$294.30,"$34,455.00"
IAH - SAV,56862956485,I-FAT-SAV-4,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/56862956485,https://www.airlines-manager.com/aircraft/show/110424758,2:00,7:29,320,"343,864$","308,058$",$962.68,"$56,180.79"
IAH - SAV,56876734132,I-FAT-SAV-3,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/56876734132,https://www.airlines-manager.com/aircraft/show/110424759,8:30,13:59,320,"343,864$","308,058$",$962.68,"$56,180.79"
IAH - SAV,56886798123,I-FAT-SAV-2,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/56886798123,https://www.airlines-manager.com/aircraft/show/110424760,13:00,18:29,320,"343,864$","308,058$",$962.68,"$56,180.79"
IAH - SAV,56903707083,I-FAT-SAV-1,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/56903707083,https://www.airlines-manager.com/aircraft/show/110424761,21:45,3:14,320,"343,864$","308,058$",$962.68,"$56,180.79"
IAH - SBA,56862956338,I-SNA-SBA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/56862956338,https://www.airlines-manager.com/aircraft/show/119525227,1:15,8:59,272,"$439,188.00","$409,680.00","$1,506.18","$52,975.86"
IAH - SBA,56862956339,I-SNA-SBA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/56862956339,https://www.airlines-manager.com/aircraft/show/119525228,3:15,10:59,272,"$439,188.00","$409,680.00","$1,506.18","$52,975.86"
IAH - SBA,56880042690,I-SNA-SBA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/56880042690,https://www.airlines-manager.com/aircraft/show/119525226,11:00,18:44,272,"$439,188.00","$409,680.00","$1,506.18","$52,975.86"
IAH - SBA,56886798060,I-SNA-SBA-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/56886798060,https://www.airlines-manager.com/aircraft/show/119525229,13:00,20:44,272,"$439,188.00","$409,680.00","$1,506.18","$52,975.86"
IAH - SBA,56895754282,I-SNA-SBA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/56895754282,https://www.airlines-manager.com/aircraft/show/119525225,18:15,1:59,272,"$439,188.00","$409,680.00","$1,506.18","$52,975.86"
IAH - SCL,56862956393,I-56A-1 E,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/56862956393,https://www.airlines-manager.com/aircraft/show/106676232,1:30,19:59,648,"$2,300,982.00","$2,144,866.00","$3,309.98","$116,043.25"
IAH - SCL,56869877641,I-56A-3 E,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/56869877641,https://www.airlines-manager.com/aircraft/show/106676234,6:30,0:59,648,"$2,300,982.00","$2,144,866.00","$3,309.98","$116,043.25"
IAH - SCL,56895754192,I-56A-5 E,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/56895754192,https://www.airlines-manager.com/aircraft/show/106676236,17:30,11:59,648,"$2,300,982.00","$2,144,866.00","$3,309.98","$116,043.25"
IAH - SDF,56866822821,I-RIC-SDF-3,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/56866822821,https://www.airlines-manager.com/aircraft/show/107467132,4:00,9:14,310,"$330,138.00","$297,585.00",$959.95,"$56,863.38"
IAH - SDF,56883365126,I-RIC-SDF-2,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/56883365126,https://www.airlines-manager.com/aircraft/show/107467133,12:00,17:14,310,"$330,138.00","$297,585.00",$959.95,"$56,863.38"
IAH - SDF,56895754323,I-RIC-SDF-1,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/56895754323,https://www.airlines-manager.com/aircraft/show/107467134,18:30,23:44,310,"$330,138.00","$297,585.00",$959.95,"$56,863.38"
IAH - SDF,56901278196,I-RIC-SDF-5,ERJ-175,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/56901278196,https://www.airlines-manager.com/aircraft/show/107467211,20:15,1:29,112,"$156,673.00","$135,766.00","$1,212.20","$25,942.55"
IAH - SDF,56903707147,I-RIC-SDF-4,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/56903707147,https://www.airlines-manager.com/aircraft/show/107467131,22:15,3:29,310,"$330,138.00","$297,585.00",$959.95,"$56,863.38"
IAH - SEA,56862956671,I-SEA-DEN-1,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/56862956671,https://www.airlines-manager.com/aircraft/show/105562971,3:30,12:44,338,"$646,653.00","$591,295.00","$1,749.39","$64,039.17"
IAH - SEA,56866822871,I-SEA-DEN-3,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/56866822871,https://www.airlines-manager.com/aircraft/show/105562973,4:30,13:44,338,"$646,653.00","$591,295.00","$1,749.39","$64,039.17"
IAH - SEA,56886798071,I-SEA-DEN-2,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/56886798071,https://www.airlines-manager.com/aircraft/show/105562972,13:00,22:14,338,"$646,653.00","$591,295.00","$1,749.39","$64,039.17"
IAH - SEA,56886798072,I-SEA-DEN-4,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/56886798072,https://www.airlines-manager.com/aircraft/show/105562974,14:00,23:14,338,"$646,653.00","$591,295.00","$1,749.39","$64,039.17"
IAH - SEA,56895754190,I-SEA-DEN-5,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/56895754190,https://www.airlines-manager.com/aircraft/show/105562975,17:30,2:44,338,"$646,653.00","$591,295.00","$1,749.39","$64,039.17"
IAH - SEA,56901278297,I-SEA-DEN-6,ERJ-175,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/56901278297,https://www.airlines-manager.com/aircraft/show/105601215,21:15,6:44,112,"$280,372.00","$242,484.00","$2,165.04","$25,569.49"
IAH - SJC,56862956638,I-SJC-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/56862956638,https://www.airlines-manager.com/aircraft/show/96694086,3:00,11:14,310,"$533,552.00","$487,923.00","$1,573.95","$59,261.90"
IAH - SJC,56880042778,I-SJC-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/56880042778,https://www.airlines-manager.com/aircraft/show/96692491,11:00,19:14,310,"$533,552.00","$487,923.00","$1,573.95","$59,261.90"
IAH - SJC,56889535233,I-SJC-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/56889535233,https://www.airlines-manager.com/aircraft/show/96692343,14:30,22:44,310,"$533,552.00","$487,923.00","$1,573.95","$59,261.90"
IAH - SJC,56906228729,I-SJC-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/56906228729,https://www.airlines-manager.com/aircraft/show/96691558,23:00,7:14,310,"$533,552.00","$487,923.00","$1,573.95","$59,261.90"
IAH - SJC,56906228730,I-SJC-PWM-5 B,A319-100,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/56906228730,https://www.airlines-manager.com/aircraft/show/106014350,23:30,7:44,198,"$401,349.00","$364,777.00","$1,842.31","$44,304.90"
IAH - SJD,56862956446,I-YOW-SJD-4,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/56862956446,https://www.airlines-manager.com/aircraft/show/114266975,1:45,7:44,320,"$382,514.00","$343,676.00","$1,073.99","$57,438.89"
IAH - SJD,56866822945,I-YOW-SJD-3,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/56866822945,https://www.airlines-manager.com/aircraft/show/113250059,5:15,11:14,320,"$382,514.00","$343,676.00","$1,073.99","$57,438.89"
IAH - SJD,56883365102,I-YOW-SJD-2,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/56883365102,https://www.airlines-manager.com/aircraft/show/113114108,12:00,17:59,320,"$382,514.00","$343,676.00","$1,073.99","$57,438.89"
IAH - SJD,56892624114,I-YOW-SJD-1,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/56892624114,https://www.airlines-manager.com/aircraft/show/114266974,16:00,21:59,320,"$382,514.00","$343,676.00","$1,073.99","$57,438.89"
IAH - SJD,56901278277,I-YOW-SJD-5,ERJ-175,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/56901278277,https://www.airlines-manager.com/aircraft/show/105099862,21:00,2:59,110,"$176,193.00","$153,955.00","$1,399.59","$25,730.64"
IAH - SLC,56862956584,I-SLC-CLT-2,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/56862956584,https://www.airlines-manager.com/aircraft/show/93094698,2:45,9:29,310,"$425,998.00","$382,511.00","$1,233.91","$56,808.56"
IAH - SLC,56866822920,I-SLC-CLT-6,ERJ-175,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/56866822920,https://www.airlines-manager.com/aircraft/show/93100455,4:45,11:29,112,"$200,317.00","$172,140.00","$1,536.96","$25,565.35"
IAH - SLC,56880042613,I-SLC-CLT-1,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/56880042613,https://www.airlines-manager.com/aircraft/show/93094699,10:00,16:44,310,"$425,998.00","$382,511.00","$1,233.91","$56,808.56"
IAH - SLC,56883365121,I-SLC-CLT-5,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/56883365121,https://www.airlines-manager.com/aircraft/show/93094695,12:00,18:44,310,"$425,998.00","$382,511.00","$1,233.91","$56,808.56"
IAH - SLC,56889535335,I-SLC-CLT-4,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/56889535335,https://www.airlines-manager.com/aircraft/show/93094696,15:15,21:59,310,"$425,998.00","$382,511.00","$1,233.91","$56,808.56"
IAH - SLC,56901278263,I-SLC-CLT-3,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/56901278263,https://www.airlines-manager.com/aircraft/show/93094697,21:00,3:44,310,"$425,998.00","$382,511.00","$1,233.91","$56,808.56"
IAH - SMF,56862956504,I-SMF-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/56862956504,https://www.airlines-manager.com/aircraft/show/99093335,2:15,10:29,320,"$532,190.00","$482,961.00","$1,509.25","$58,659.23"
IAH - SMF,56866822863,I-SMF-CVG-5 B,A319-100,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/56866822863,https://www.airlines-manager.com/aircraft/show/106499070,4:15,12:29,198,"$400,763.00","$365,374.00","$1,845.32","$44,377.41"
IAH - SMF,56886798113,I-SMF-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/56886798113,https://www.airlines-manager.com/aircraft/show/99093332,13:00,21:14,320,"$532,190.00","$482,961.00","$1,509.25","$58,659.23"
IAH - SMF,56892624186,I-SMF-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/56892624186,https://www.airlines-manager.com/aircraft/show/99093333,16:45,0:59,320,"$532,190.00","$482,961.00","$1,509.25","$58,659.23"
IAH - SMF,56901278225,I-SMF-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/56901278225,https://www.airlines-manager.com/aircraft/show/99093334,20:45,4:59,320,"$532,190.00","$482,961.00","$1,509.25","$58,659.23"
IAH - SNA,56862956432,I-SNA-SBA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/56862956432,https://www.airlines-manager.com/aircraft/show/119525226,1:45,8:59,272,"$423,610.00","$394,459.00","$1,450.22","$54,533.50"
IAH - SNA,56862956433,I-SYR-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/56862956433,https://www.airlines-manager.com/aircraft/show/119525249,2:45,9:59,112,"$220,728.00","$195,433.00","$1,744.94","$27,018.39"
IAH - SNA,56862956434,I-SNA-SBA-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/56862956434,https://www.airlines-manager.com/aircraft/show/119525229,3:45,10:59,272,"$423,610.00","$394,459.00","$1,450.22","$54,533.50"
IAH - SNA,56880042689,I-SNA-SBA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/56880042689,https://www.airlines-manager.com/aircraft/show/119525225,11:00,18:14,272,"423,610$","394,459$","$1,450.22","$54,533.50"
IAH - SNA,56895754240,I-SNA-SBA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/56895754240,https://www.airlines-manager.com/aircraft/show/119525227,18:00,1:14,272,"423,610$","394,459$","$1,450.22","$54,533.50"
IAH - SNA,56901278123,I-SNA-SBA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/56901278123,https://www.airlines-manager.com/aircraft/show/119525228,20:00,3:14,272,"423,610$","394,459$","$1,450.22","$54,533.50"
IAH - SRQ,56862956329,I-ILM-SRQ-3,A321-200,https://www.airlines-manager.com/network/showline/50666456,https://www.airlines-manager.com/network/showflight/56862956329,https://www.airlines-manager.com/aircraft/show/120452416,1:00,6:14,310,"332,420$","301,728$",$973.32,"$57,655.03"
IAH - SRQ,56876734199,I-ILM-SRQ-2,A321-200,https://www.airlines-manager.com/network/showline/50666456,https://www.airlines-manager.com/network/showflight/56876734199,https://www.airlines-manager.com/aircraft/show/120452417,9:00,14:14,310,"332,420$","301,728$",$973.32,"$57,655.03"
IAH - SRQ,56889535223,I-ILM-SRQ-1,A321-200,https://www.airlines-manager.com/network/showline/50666456,https://www.airlines-manager.com/network/showflight/56889535223,https://www.airlines-manager.com/aircraft/show/120452418,14:15,19:29,310,"$332,420.00","$301,728.00",$973.32,"$57,655.03"
IAH - SRQ,56901278150,I-ILM-SRQ-4,A321-200,https://www.airlines-manager.com/network/showline/50666456,https://www.airlines-manager.com/network/showflight/56901278150,https://www.airlines-manager.com/aircraft/show/120452415,20:00,1:14,310,"$332,420.00","$301,728.00",$973.32,"$57,655.03"
IAH - STL,56862956360,I-CLE-STL-4,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/56862956360,https://www.airlines-manager.com/aircraft/show/88725601,1:15,5:59,310,"$300,923.00","$268,652.00",$866.62,"$56,757.46"
IAH - STL,56876734116,I-CLE-STL-3,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/56876734116,https://www.airlines-manager.com/aircraft/show/103600702,8:15,12:59,310,"$300,923.00","$268,652.00",$866.62,"$56,757.46"
IAH - STL,56886798269,I-CLE-STL-2,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/56886798269,https://www.airlines-manager.com/aircraft/show/103600701,14:00,18:44,310,"$300,923.00","$268,652.00",$866.62,"$56,757.46"
IAH - STL,56889535323,I-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/56889535323,https://www.airlines-manager.com/aircraft/show/96990010,15:00,19:44,112,"$143,002.00","$122,472.00","$1,093.50","$25,874.37"
IAH - STL,56901278183,I-CLE-STL-1,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/56901278183,https://www.airlines-manager.com/aircraft/show/103600700,20:15,0:59,310,"$300,923.00","$268,652.00",$866.62,"$56,757.46"
IAH - STL,56903707092,I-CLE-STL-5 B,A319-100,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/56903707092,https://www.airlines-manager.com/aircraft/show/110582844,21:45,2:29,198,"$228,609.00","$202,763.00","$1,024.06","$42,837.25"
IAH - SYR,56862956201,I-SYR-ROC-2,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/56862956201,https://www.airlines-manager.com/aircraft/show/119525223,0:15,7:44,320,"$476,176.00","$431,891.00","$1,349.66","$57,713.72"
IAH - SYR,56880042763,I-SYR-ROC-1,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/56880042763,https://www.airlines-manager.com/aircraft/show/119525224,11:00,18:29,320,"$476,176.00","$431,891.00","$1,349.66","$57,713.72"
IAH - SYR,56883365112,I-SYR-ROC-4,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/56883365112,https://www.airlines-manager.com/aircraft/show/119525221,12:00,19:29,320,"$476,176.00","$431,891.00","$1,349.66","$57,713.72"
IAH - SYR,56892624221,I-SYR-ROC-3,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/56892624221,https://www.airlines-manager.com/aircraft/show/119525222,17:00,0:29,320,"$476,176.00","$431,891.00","$1,349.66","$57,713.72"
IAH - SYR,56898577622,I-SYR-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/56898577622,https://www.airlines-manager.com/aircraft/show/119525249,19:15,2:44,112,"$225,013.00","$198,807.00","$1,775.06","$26,566.64"
IAH - TPA,56866822851,I-SLC-CLT-1,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/56866822851,https://www.airlines-manager.com/aircraft/show/93094699,4:15,9:29,310,"$327,531.00","$292,309.00",$942.93,"$55,855.22"
IAH - TPA,56869877636,I-SLC-CLT-5,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/56869877636,https://www.airlines-manager.com/aircraft/show/93094695,6:15,11:29,310,"$327,531.00","$292,309.00",$942.93,"$55,855.22"
IAH - TPA,56880042608,I-SLC-CLT-4,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/56880042608,https://www.airlines-manager.com/aircraft/show/93094696,10:00,15:14,310,"$327,531.00","$292,309.00",$942.93,"$55,855.22"
IAH - TPA,56892624060,I-SLC-CLT-3,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/56892624060,https://www.airlines-manager.com/aircraft/show/93094697,15:45,20:59,310,"$327,531.00","$292,309.00",$942.93,"$55,855.22"
IAH - TPA,56903707064,I-SLC-CLT-2,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/56903707064,https://www.airlines-manager.com/aircraft/show/93094698,21:30,2:44,310,"$327,531.00","$292,309.00",$942.93,"$55,855.22"
IAH - TPA,56906228787,I-SLC-CLT-6,ERJ-175,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/56906228787,https://www.airlines-manager.com/aircraft/show/93100455,23:30,4:44,112,"$155,657.00","$133,151.00","$1,188.85","$25,442.87"
IAH - TUL,56862956256,I-BTV-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/56862956256,https://www.airlines-manager.com/aircraft/show/82543907,0:30,4:14,112,"$93,962.00","$77,748.00",$694.18,"$20,825.36"
IAH - TUL,56862956257,I-BTV-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/56862956257,https://www.airlines-manager.com/aircraft/show/114373409,3:30,7:14,310,"$203,562.00","$177,791.00",$573.52,"$47,622.59"
IAH - TUL,56880042534,I-BTV-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/56880042534,https://www.airlines-manager.com/aircraft/show/114373410,9:45,13:29,310,"$203,562.00","$177,791.00",$573.52,"$47,622.59"
IAH - TUL,56889535304,I-BTV-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/56889535304,https://www.airlines-manager.com/aircraft/show/113994196,15:00,18:44,310,"$203,562.00","$177,791.00",$573.52,"$47,622.59"
IAH - TUL,56901278182,I-BTV-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/56901278182,https://www.airlines-manager.com/aircraft/show/86385103,20:15,23:59,310,"$203,562.00","$177,791.00",$573.52,"$47,622.59"
IAH - TUS,56869877577,I-PIT-RDU-1,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/56869877577,https://www.airlines-manager.com/aircraft/show/100684074,5:30,11:14,310,"$360,113.00","$326,034.00","$1,051.72","$56,866.40"
IAH - TUS,56880042666,I-PIT-RDU-5 B,A319-100,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/56880042666,https://www.airlines-manager.com/aircraft/show/110582845,10:15,15:59,198,"$273,000.00","$245,697.00","$1,240.89","$42,854.13"
IAH - TUS,56883365066,I-PIT-RDU-4,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/56883365066,https://www.airlines-manager.com/aircraft/show/100684071,11:30,17:14,310,"$360,113.00","$326,034.00","$1,051.72","$56,866.40"
IAH - TUS,56892624225,I-PIT-RDU-3,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/56892624225,https://www.airlines-manager.com/aircraft/show/100684072,17:00,22:44,310,"$360,113.00","$326,034.00","$1,051.72","$56,866.40"
IAH - TUS,56906228756,I-PIT-RDU-2,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/56906228756,https://www.airlines-manager.com/aircraft/show/100684073,23:15,4:59,310,"$360,113.00","$326,034.00","$1,051.72","$56,866.40"
IAH - TYS,56862956515,I-GRR-MSN-2,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/56862956515,https://www.airlines-manager.com/aircraft/show/117273347,2:15,7:14,310,"$326,466.00","$296,307.00",$955.83,"$59,459.60"
IAH - TYS,56876734157,I-GRR-MSN-1,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/56876734157,https://www.airlines-manager.com/aircraft/show/117273348,8:30,13:29,310,"$326,466.00","$296,307.00",$955.83,"$59,459.60"
IAH - TYS,56880042800,I-GRR-MSN-4,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/56880042800,https://www.airlines-manager.com/aircraft/show/117273345,11:00,15:59,310,"$326,466.00","$296,307.00",$955.83,"$59,459.60"
IAH - TYS,56901278186,I-GRR-MSN-3,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/56901278186,https://www.airlines-manager.com/aircraft/show/117273346,20:15,1:14,310,"$326,466.00","$296,307.00",$955.83,"$59,459.60"
IAH - UIO,56862956255,I-84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/56862956255,https://www.airlines-manager.com/aircraft/show/89124076,0:30,11:14,932,"$1,803,944.00","$1,648,550.00","$1,768.83","$153,591.61"
IAH - UIO,56886798202,I-84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/56886798202,https://www.airlines-manager.com/aircraft/show/88905141,13:15,23:59,932,"$1,803,944.00","$1,648,550.00","$1,768.83","$153,591.61"
IAH - YEG,56862956388,I-YEG-BUR-5,A321neo,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/56862956388,https://www.airlines-manager.com/aircraft/show/117273340,1:30,10:44,338,"$643,713.00","$597,097.00","$1,766.56","$64,667.55"
IAH - YEG,56876734155,I-YEG-BUR-2,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/56876734155,https://www.airlines-manager.com/aircraft/show/117273343,8:30,17:44,310,"$594,387.00","$545,454.00","$1,759.53","$59,074.44"
IAH - YEG,56880042799,I-YEG-BUR-1,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/56880042799,https://www.airlines-manager.com/aircraft/show/117273344,11:00,20:14,310,"$594,387.00","$545,454.00","$1,759.53","$59,074.44"
IAH - YEG,56895754184,I-YEG-BUR-4,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/56895754184,https://www.airlines-manager.com/aircraft/show/117273341,17:15,2:29,310,"$594,387.00","$545,454.00","$1,759.53","$59,074.44"
IAH - YEG,56895754185,I-YEG-BUR-3,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/56895754185,https://www.airlines-manager.com/aircraft/show/117273342,18:00,3:14,310,"$594,387.00","$545,454.00","$1,759.53","$59,074.44"
IAH - YOW,56862956661,I-YOW-SJD-2,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/56862956661,https://www.airlines-manager.com/aircraft/show/113114108,3:15,11:14,320,"$510,982.00","$463,325.00","$1,447.89","$58,036.53"
IAH - YOW,56873155713,I-YOW-SJD-1,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/56873155713,https://www.airlines-manager.com/aircraft/show/114266974,8:00,15:59,320,"$510,982.00","$463,325.00","$1,447.89","$58,036.53"
IAH - YOW,56886798195,I-YOW-SJD-5,ERJ-175,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/56886798195,https://www.airlines-manager.com/aircraft/show/105099862,13:00,20:59,112,"$239,404.00","$211,199.00","$1,885.71","$26,454.99"
IAH - YOW,56895754225,I-YOW-SJD-4,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/56895754225,https://www.airlines-manager.com/aircraft/show/114266975,17:45,1:44,320,"$510,982.00","$463,325.00","$1,447.89","$58,036.53"
IAH - YOW,56901278286,I-YOW-SJD-3,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/56901278286,https://www.airlines-manager.com/aircraft/show/113250059,21:15,5:14,320,"$510,982.00","$463,325.00","$1,447.89","$58,036.53"
IAH - YUL,56862956261,I-YYC-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/56862956261,https://www.airlines-manager.com/aircraft/show/114266980,0:45,8:44,400,"$685,428.00","$627,487.00","$1,568.72","$78,599.62"
IAH - YUL,56862956262,I-YYC-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/56862956262,https://www.airlines-manager.com/aircraft/show/114266979,2:00,9:59,400,"$685,428.00","$627,487.00","$1,568.72","$78,599.62"
IAH - YUL,56883365089,I-YYC-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/56883365089,https://www.airlines-manager.com/aircraft/show/114266978,12:00,19:59,400,"685,428$","627,487$","$1,568.72","$78,599.62"
IAH - YUL,56901278223,I-YYC-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/56901278223,https://www.airlines-manager.com/aircraft/show/114266977,20:45,4:44,400,"685,428$","627,487$","$1,568.72","$78,599.62"
IAH - YVR,56862956301,I-MEX-YYZ-1,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/56862956301,https://www.airlines-manager.com/aircraft/show/97076946,1:00,10:29,400,"777,801$","709,739$","$1,774.35","$74,840.67"
IAH - YVR,56866822799,I-MEX-YYZ-4,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/56866822799,https://www.airlines-manager.com/aircraft/show/97076943,4:00,13:29,400,"777,801$","709,739$","$1,774.35","$74,840.67"
IAH - YVR,56886798087,I-MEX-YYZ-3,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/56886798087,https://www.airlines-manager.com/aircraft/show/97076944,13:00,22:29,400,"777,801$","709,739$","$1,774.35","$74,840.67"
IAH - YVR,56892624144,I-MEX-YYZ-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/56892624144,https://www.airlines-manager.com/aircraft/show/97026605,16:00,1:44,136,"286,977$","251,069$","$1,846.10","$25,794.76"
IAH - YVR,56901278133,I-MEX-YYZ-2,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/56901278133,https://www.airlines-manager.com/aircraft/show/97076945,20:00,5:29,400,"777,801$","709,739$","$1,774.35","$74,840.67"
IAH - YVR,56906228721,I-MEX-YYZ-5,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/56906228721,https://www.airlines-manager.com/aircraft/show/97076942,23:00,8:29,400,"777,801$","709,739$","$1,774.35","$74,840.67"
IAH - YYC,56862956342,I-YYC-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/56862956342,https://www.airlines-manager.com/aircraft/show/114266978,1:15,9:59,400,"746,053$","683,301$","$1,708.25","$78,240.57"
IAH - YYC,56883365088,I-YYC-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/56883365088,https://www.airlines-manager.com/aircraft/show/114266977,12:00,20:44,400,"746,053$","683,301$","$1,708.25","$78,240.57"
IAH - YYC,56892624097,I-YYC-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/56892624097,https://www.airlines-manager.com/aircraft/show/114266980,16:00,0:44,400,"746,053$","683,301$","$1,708.25","$78,240.57"
IAH - YYC,56895754171,I-YYC-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/56895754171,https://www.airlines-manager.com/aircraft/show/114266979,17:15,1:59,400,"746,053$","683,301$","$1,708.25","$78,240.57"
IAH - YYZ,56862956677,I-MEX-YYZ-3,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/56862956677,https://www.airlines-manager.com/aircraft/show/97076944,3:30,10:29,400,"574,924$","516,276$","$1,290.69","$73,929.74"
IAH - YYZ,56873155597,I-MEX-YYZ-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/56873155597,https://www.airlines-manager.com/aircraft/show/97026605,6:45,13:44,136,"212,224$","181,681$","$1,335.89","$26,016.37"
IAH - YYZ,56886798088,I-MEX-YYZ-2,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/56886798088,https://www.airlines-manager.com/aircraft/show/97076945,13:00,19:59,400,"$574,924.00","$516,276.00","$1,290.69","$73,929.74"
IAH - YYZ,56892624095,I-MEX-YYZ-5,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/56892624095,https://www.airlines-manager.com/aircraft/show/97076942,16:00,22:59,400,"$574,924.00","$516,276.00","$1,290.69","$73,929.74"
IAH - YYZ,56895754250,I-MEX-YYZ-1,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/56895754250,https://www.airlines-manager.com/aircraft/show/97076946,18:00,0:59,400,"$574,924.00","$516,276.00","$1,290.69","$73,929.74"
IAH - YYZ,56901278251,I-MEX-YYZ-4,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/56901278251,https://www.airlines-manager.com/aircraft/show/97076943,21:00,3:59,400,"$574,924.00","$516,276.00","$1,290.69","$73,929.74"
MIA - ABQ,56862956363,M-IAD-TUS-1,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/56862956363,https://www.airlines-manager.com/aircraft/show/97556721,1:15,9:59,310,"$549,643.00","$501,802.00","$1,618.72","$57,458.24"
MIA - ABQ,56866822852,M-IAD-TUS-4,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/56866822852,https://www.airlines-manager.com/aircraft/show/97556718,4:15,12:59,310,"$549,643.00","$501,802.00","$1,618.72","$57,458.24"
MIA - ABQ,56880042614,M-IAD-TUS-3,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/56880042614,https://www.airlines-manager.com/aircraft/show/97556719,10:00,18:44,310,"$549,643.00","$501,802.00","$1,618.72","$57,458.24"
MIA - ABQ,56898577638,M-IAD-TUS-2,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/56898577638,https://www.airlines-manager.com/aircraft/show/97556720,19:30,4:14,310,"$549,643.00","$501,802.00","$1,618.72","$57,458.24"
MIA - ABQ,56903707176,M-IAD-TUS-5,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/56903707176,https://www.airlines-manager.com/aircraft/show/97556716,22:30,7:14,310,"$549,643.00","$501,802.00","$1,618.72","$57,458.24"
MIA - ACC,56889535228,M-84B-2 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/56889535228,https://www.airlines-manager.com/aircraft/show/106676226,14:15,11:59,962,"$3,584,617.00","$3,274,304.00","$3,403.64","$150,658.16"
MIA - ACC,56903707214,M-84B-4 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/56903707214,https://www.airlines-manager.com/aircraft/show/106676228,22:45,20:29,962,"$3,584,617.00","$3,274,304.00","$3,403.64","$150,658.16"
MIA - ALB,56862956679,M-DSM-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/56862956679,https://www.airlines-manager.com/aircraft/show/113101233,3:30,10:14,320,"$429,480.00","$388,106.00","$1,212.83","$57,639.50"
MIA - ALB,56886798125,M-DSM-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/56886798125,https://www.airlines-manager.com/aircraft/show/113101230,13:00,19:44,320,"429,480$","388,106$","$1,212.83","$57,639.50"
MIA - ALB,56892624145,M-DSM-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/56892624145,https://www.airlines-manager.com/aircraft/show/100049776,16:00,22:59,112,"202,975$","178,712$","$1,595.64","$25,591.22"
MIA - ALB,56901278176,M-DSM-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/56901278176,https://www.airlines-manager.com/aircraft/show/111064081,20:15,2:59,320,"429,480$","388,106$","$1,212.83","$57,639.50"
MIA - ALB,56906228753,M-DSM-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/56906228753,https://www.airlines-manager.com/aircraft/show/113101228,23:15,5:59,320,"429,480$","388,106$","$1,212.83","$57,639.50"
MIA - ALG,56892624241,M-84B-7 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/56892624241,https://www.airlines-manager.com/aircraft/show/106676231,17:00,12:29,962,"3,254,925$","2,969,393$","$3,086.69","$152,406.83"
MIA - ALG,56901278216,M-84B-5 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/56901278216,https://www.airlines-manager.com/aircraft/show/106676229,20:30,15:59,962,"3,254,925$","2,969,393$","$3,086.69","$152,406.83"
MIA - ANU,56869877650,M-ANU-SXM-3 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/56869877650,https://www.airlines-manager.com/aircraft/show/110114297,6:30,13:44,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ANU,56876734159,M-ANU-SXM-4 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/56876734159,https://www.airlines-manager.com/aircraft/show/110114298,8:30,15:44,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ANU,56883365135,M-ANU-SXM-1 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/56883365135,https://www.airlines-manager.com/aircraft/show/110114295,12:00,19:14,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ANU,56886798188,M-ANU-SXM-2 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/56886798188,https://www.airlines-manager.com/aircraft/show/110114296,13:00,20:14,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ANU,56892624179,M-ANU-SXM-6 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/56892624179,https://www.airlines-manager.com/aircraft/show/110114300,16:30,23:44,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ANU,56906228786,M-ANU-SXM-5 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/56906228786,https://www.airlines-manager.com/aircraft/show/110114299,23:30,6:44,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ATL,56883365087,M-LAX-DEN-4,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/56883365087,https://www.airlines-manager.com/aircraft/show/91126652,12:00,16:29,400,"$366,475.00","$302,230.00",$755.58,"$67,411.90"
MIA - ATL,56886798086,M-LAX-DEN-2,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/56886798086,https://www.airlines-manager.com/aircraft/show/91126650,13:00,17:29,400,"$366,475.00","$302,230.00",$755.58,"$67,411.90"
MIA - ATL,56898577624,M-LAX-DEN-1,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/56898577624,https://www.airlines-manager.com/aircraft/show/91126649,19:30,23:59,400,"$366,475.00","$302,230.00",$755.58,"$67,411.90"
MIA - ATL,56901278250,M-LAX-DEN-3,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/56901278250,https://www.airlines-manager.com/aircraft/show/91126651,21:00,1:29,400,"366,475$","302,230$",$755.58,"$67,411.90"
MIA - AUA,56862956624,M-BGI-CUR-1,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/56862956624,https://www.airlines-manager.com/aircraft/show/107121795,3:00,9:29,320,"405,459$","365,639$","$1,142.62","$56,396.76"
MIA - AUA,56866822886,M-BGI-CUR-4,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/56866822886,https://www.airlines-manager.com/aircraft/show/107121798,4:30,10:59,320,"405,459$","365,639$","$1,142.62","$56,396.76"
MIA - AUA,56880042747,M-BGI-CUR-3,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/56880042747,https://www.airlines-manager.com/aircraft/show/107121797,11:00,17:29,320,"405,459$","365,639$","$1,142.62","$56,396.76"
MIA - AUA,56895754222,M-BGI-CUR-2,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/56895754222,https://www.airlines-manager.com/aircraft/show/107121796,17:45,0:14,320,"$405,459.00","$365,639.00","$1,142.62","$56,396.76"
MIA - AUA,56903707082,M-BGI-CUR-5,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/56903707082,https://www.airlines-manager.com/aircraft/show/107121799,21:45,4:14,243,"317,044$","280,166$","$1,152.95","$43,213.26"
MIA - AUS,56862956573,M-AUS-PIT-2,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/56862956573,https://www.airlines-manager.com/aircraft/show/99920625,2:45,9:14,320,"403,957$","360,258$","$1,125.81","$55,566.79"
MIA - AUS,56880042568,M-AUS-PIT-1,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/56880042568,https://www.airlines-manager.com/aircraft/show/99920626,10:00,16:29,320,"403,957$","360,258$","$1,125.81","$55,566.79"
MIA - AUS,56886798307,M-AUS-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/56886798307,https://www.airlines-manager.com/aircraft/show/82323689,14:00,20:29,112,"190,525$","165,466$","$1,477.38","$25,521.75"
MIA - AUS,56889535247,M-AUS-PIT-4,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/56889535247,https://www.airlines-manager.com/aircraft/show/99920623,14:45,21:14,320,"$403,957.00","$360,258.00","$1,125.81","$55,566.79"
MIA - AUS,56901278226,M-AUS-PIT-3,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/56901278226,https://www.airlines-manager.com/aircraft/show/99920624,20:45,3:14,320,"403,957$","360,258$","$1,125.81","$55,566.79"
MIA - BDA,56862956645,M-PUJ-BDA-1 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/56862956645,https://www.airlines-manager.com/aircraft/show/104034457,3:00,9:14,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDA,56862956646,M-PUJ-BDA-3 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/56862956646,https://www.airlines-manager.com/aircraft/show/104034459,3:45,9:59,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDA,56880042639,M-PUJ-BDA-4 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/56880042639,https://www.airlines-manager.com/aircraft/show/104034460,10:00,16:14,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDA,56880042640,M-PUJ-BDA-6 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/56880042640,https://www.airlines-manager.com/aircraft/show/99326789,11:00,17:14,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDA,56892624069,M-PUJ-BDA-5 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/56892624069,https://www.airlines-manager.com/aircraft/show/104034461,15:45,21:59,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDA,56901278296,M-PUJ-BDA-2 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/56901278296,https://www.airlines-manager.com/aircraft/show/104034458,21:15,3:29,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDL,56862956631,M-BDL-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/56862956631,https://www.airlines-manager.com/aircraft/show/107763565,3:00,9:44,320,"$428,052.00","$385,771.00","$1,205.53","$57,292.72"
MIA - BDL,56873155725,M-BDL-SAT-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/56873155725,https://www.airlines-manager.com/aircraft/show/107467213,8:00,14:44,112,"$201,310.00","$176,683.00","$1,577.53","$26,240.05"
MIA - BDL,56886798214,M-BDL-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/56886798214,https://www.airlines-manager.com/aircraft/show/107763561,13:45,20:29,320,"$428,052.00","$385,771.00","$1,205.53","$57,292.72"
MIA - BDL,56886798215,M-BDL-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/56886798215,https://www.airlines-manager.com/aircraft/show/107763566,14:00,20:44,320,"$428,052.00","$385,771.00","$1,205.53","$57,292.72"
MIA - BDL,56901278208,M-BDL-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/56901278208,https://www.airlines-manager.com/aircraft/show/107763562,20:30,3:14,320,"$428,052.00","$385,771.00","$1,205.53","$57,292.72"
MIA - BFF,56862956275,M-PSP-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/56862956275,https://www.airlines-manager.com/aircraft/show/116789634,0:45,9:29,320,"$556,654.00","$506,491.00","$1,582.78","$57,995.15"
MIA - BFF,56862956276,M-PSP-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/56862956276,https://www.airlines-manager.com/aircraft/show/116789632,1:00,9:44,320,"$556,654.00","$506,491.00","$1,582.78","$57,995.15"
MIA - BFF,56880042585,M-PSP-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/56880042585,https://www.airlines-manager.com/aircraft/show/116789633,10:00,18:44,320,"$556,654.00","$506,491.00","$1,582.78","$57,995.15"
MIA - BFF,56886798129,M-PSP-BFF-5,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/56886798129,https://www.airlines-manager.com/aircraft/show/116789630,13:00,21:44,320,"$556,654.00","$506,491.00","$1,582.78","$57,995.15"
MIA - BFF,56901278230,M-PSP-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/56901278230,https://www.airlines-manager.com/aircraft/show/116789631,20:45,5:29,320,"$556,654.00","$506,491.00","$1,582.78","$57,995.15"
MIA - BGI,56862956575,M-BGI-CUR-2,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/56862956575,https://www.airlines-manager.com/aircraft/show/107121796,2:45,10:59,320,"$518,059.00","$469,235.00","$1,466.36","$56,992.11"
MIA - BGI,56873155586,M-BGI-CUR-5,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/56873155586,https://www.airlines-manager.com/aircraft/show/107121799,6:45,14:59,320,"$518,059.00","$469,235.00","$1,466.36","$56,992.11"
MIA - BGI,56883365098,M-BGI-CUR-1,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/56883365098,https://www.airlines-manager.com/aircraft/show/107121795,12:00,20:14,320,"$518,059.00","$469,235.00","$1,466.36","$56,992.11"
MIA - BGI,56886798209,M-BGI-CUR-4,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/56886798209,https://www.airlines-manager.com/aircraft/show/107121798,13:30,21:44,320,"$518,059.00","$469,235.00","$1,466.36","$56,992.11"
MIA - BGI,56901278138,M-BGI-CUR-3,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/56901278138,https://www.airlines-manager.com/aircraft/show/107121797,20:00,4:14,320,"$518,059.00","$469,235.00","$1,466.36","$56,992.11"
MIA - BHM,56862956698,M-CID-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/56862956698,https://www.airlines-manager.com/aircraft/show/116789651,3:45,8:29,310,"$302,720.00","$273,542.00",$882.39,"$57,790.56"
MIA - BHM,56880042627,M-CID-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/56880042627,https://www.airlines-manager.com/aircraft/show/116789652,10:00,14:44,310,"$302,720.00","$273,542.00",$882.39,"$57,790.56"
MIA - BHM,56895754183,M-CID-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/56895754183,https://www.airlines-manager.com/aircraft/show/116789653,17:15,21:59,310,"$302,720.00","$273,542.00",$882.39,"$57,790.56"
MIA - BHM,56903707210,M-CID-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/56903707210,https://www.airlines-manager.com/aircraft/show/116789650,22:45,3:29,310,"$302,720.00","$273,542.00",$882.39,"$57,790.56"
MIA - BIL,56880042582,M-BIL-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/56880042582,https://www.airlines-manager.com/aircraft/show/116789629,10:00,20:14,320,"634,212$","578,720$","$1,808.50","$56,552.44"
MIA - BIL,56883365109,M-BIL-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/56883365109,https://www.airlines-manager.com/aircraft/show/116789628,12:00,22:14,320,"$634,212.00","$578,720.00","$1,808.50","$56,552.44"
MIA - BIL,56886798253,M-BIL-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/56886798253,https://www.airlines-manager.com/aircraft/show/116789627,14:00,0:14,320,"$634,212.00","$578,720.00","$1,808.50","$56,552.44"
MIA - BIL,56903707056,M-BIL-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/56903707056,https://www.airlines-manager.com/aircraft/show/116789626,21:30,7:44,320,"$634,212.00","$578,720.00","$1,808.50","$56,552.44"
MIA - BIL,56906228816,M-BIL-BZN-5,ERJ-175,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/56906228816,https://www.airlines-manager.com/aircraft/show/116042637,23:45,9:59,112,"$298,004.00","$264,192.00","$2,358.86","$25,816.81"
MIA - BNA,56862956292,M-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/56862956292,https://www.airlines-manager.com/aircraft/show/103534663,0:45,5:59,112,"$157,714.00","$136,236.00","$1,216.39","$26,032.36"
MIA - BNA,56862956293,M-BOI-BNA-4,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/56862956293,https://www.airlines-manager.com/aircraft/show/103775657,1:15,6:29,320,"$332,050.00","$293,799.00",$918.12,"$56,139.94"
MIA - BNA,56866822907,M-BOI-BNA-3,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/56866822907,https://www.airlines-manager.com/aircraft/show/104020880,4:45,9:59,320,"$332,050.00","$293,799.00",$918.12,"$56,139.94"
MIA - BNA,56880042573,M-BOI-BNA-2,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/56880042573,https://www.airlines-manager.com/aircraft/show/104022609,10:00,15:14,320,"$332,050.00","$293,799.00",$918.12,"$56,139.94"
MIA - BNA,56883365143,M-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/56883365143,https://www.airlines-manager.com/aircraft/show/103534663,12:00,17:14,112,"$157,714.00","$136,236.00","$1,216.39","$26,032.36"
MIA - BNA,56901278284,M-BOI-BNA-1,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/56901278284,https://www.airlines-manager.com/aircraft/show/104133006,21:15,2:29,320,"$332,050.00","$293,799.00",$918.12,"$56,139.94"
MIA - BOI,56862956471,M-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/56862956471,https://www.airlines-manager.com/aircraft/show/106339154,1:45,12:59,198,"$525,442.00","$481,573.00","$2,432.19","$42,870.00"
MIA - BOI,56880042574,M-BOI-BNA-1,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/56880042574,https://www.airlines-manager.com/aircraft/show/104133006,10:00,21:14,320,"$698,526.00","$638,374.00","$1,994.92","$56,828.55"
MIA - BOI,56886798244,M-BOI-BNA-4,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/56886798244,https://www.airlines-manager.com/aircraft/show/103775657,14:00,1:14,320,"$698,526.00","$638,374.00","$1,994.92","$56,828.55"
MIA - BOI,56895754198,M-BOI-BNA-3,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/56895754198,https://www.airlines-manager.com/aircraft/show/104020880,17:30,4:44,320,"$698,526.00","$638,374.00","$1,994.92","$56,828.55"
MIA - BOI,56903707194,M-BOI-BNA-2,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/56903707194,https://www.airlines-manager.com/aircraft/show/104022609,22:45,9:59,320,"$698,526.00","$638,374.00","$1,994.92","$56,828.55"
MIA - BOS,56862956491,M-SJU-BOS-5,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/56862956491,https://www.airlines-manager.com/aircraft/show/91352059,2:00,8:59,310,"$445,815.00","$401,406.00","$1,294.86","$57,480.57"
MIA - BOS,56866822933,M-SJU-BOS-1,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/56866822933,https://www.airlines-manager.com/aircraft/show/91352063,5:00,11:59,310,"$445,815.00","$401,406.00","$1,294.86","$57,480.57"
MIA - BOS,56883365058,M-SJU-BOS-4,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/56883365058,https://www.airlines-manager.com/aircraft/show/91352060,11:15,18:14,310,"$445,815.00","$401,406.00","$1,294.86","$57,480.57"
MIA - BOS,56892624172,M-SJU-BOS-2,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/56892624172,https://www.airlines-manager.com/aircraft/show/91352062,16:30,23:29,310,"$445,815.00","$401,406.00","$1,294.86","$57,480.57"
MIA - BOS,56898577571,M-SJU-BOS-3,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/56898577571,https://www.airlines-manager.com/aircraft/show/91352061,19:00,1:59,310,"$445,815.00","$401,406.00","$1,294.86","$57,480.57"
MIA - BOS,56901278192,M-SJU-BOS-6 B,A319-100,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/56901278192,https://www.airlines-manager.com/aircraft/show/110582841,20:15,3:14,198,"$337,082.00","$301,501.00","$1,522.73","$43,174.37"
MIA - BTV,56862956633,M-DSM-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/56862956633,https://www.airlines-manager.com/aircraft/show/111064081,3:00,10:14,320,"$461,408.00","$418,536.00","$1,307.93","$57,862.12"
MIA - BTV,56876734170,M-DSM-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/56876734170,https://www.airlines-manager.com/aircraft/show/113101228,8:45,15:59,320,"$461,408.00","$418,536.00","$1,307.93","$57,862.12"
MIA - BTV,56886798126,M-DSM-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/56886798126,https://www.airlines-manager.com/aircraft/show/113101233,13:00,20:14,320,"$461,408.00","$418,536.00","$1,307.93","$57,862.12"
MIA - BTV,56898577657,M-DSM-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/56898577657,https://www.airlines-manager.com/aircraft/show/113101230,19:45,2:59,320,"$461,408.00","$418,536.00","$1,307.93","$57,862.12"
MIA - BTV,56906228743,M-DSM-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/56906228743,https://www.airlines-manager.com/aircraft/show/100049776,23:00,6:29,112,"$219,081.00","$193,710.00","$1,729.55","$25,885.52"
MIA - BUF,56862956627,M-BDL-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/56862956627,https://www.airlines-manager.com/aircraft/show/107763561,3:00,9:44,320,"$425,908.00","$384,093.00","$1,200.29","$57,043.51"
MIA - BUF,56862956629,M-BDL-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/56862956629,https://www.airlines-manager.com/aircraft/show/107763566,3:15,9:59,320,"$425,908.00","$384,093.00","$1,200.29","$57,043.51"
MIA - BUF,56880042749,M-BDL-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/56880042749,https://www.airlines-manager.com/aircraft/show/107763562,11:00,17:44,320,"$425,908.00","$384,093.00","$1,200.29","$57,043.51"
MIA - BUF,56895754201,M-BDL-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/56895754201,https://www.airlines-manager.com/aircraft/show/107763565,17:30,0:14,320,"$425,908.00","$384,093.00","$1,200.29","$57,043.51"
MIA - BUF,56901278298,M-BDL-SAT-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/56901278298,https://www.airlines-manager.com/aircraft/show/107467213,21:15,3:59,112,"$200,324.00","$175,956.00","$1,571.04","$26,132.08"
MIA - BUR,56862956603,M-BUR-PVD-4,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/56862956603,https://www.airlines-manager.com/aircraft/show/108834806,2:45,13:59,310,"$704,259.00","$651,354.00","$2,101.14","$57,984.04"
MIA - BUR,56880042788,M-BUR-PVD-1,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/56880042788,https://www.airlines-manager.com/aircraft/show/108834803,11:00,22:14,310,"$704,259.00","$651,354.00","$2,101.14","$57,984.04"
MIA - BUR,56886798280,M-BUR-PVD-3,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/56886798280,https://www.airlines-manager.com/aircraft/show/108834805,14:00,1:14,310,"$704,259.00","$651,354.00","$2,101.14","$57,984.04"
MIA - BUR,56901278160,M-BUR-PVD-5 B,A319-100,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/56901278160,https://www.airlines-manager.com/aircraft/show/108834807,20:00,7:14,198,"528,191$","485,766$","$2,453.36","$43,243.26"
MIA - BUR,56901278161,M-BUR-PVD-2,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/56901278161,https://www.airlines-manager.com/aircraft/show/108834804,20:45,7:59,310,"$704,259.00","$651,354.00","$2,101.14","$57,984.04"
MIA - BWI,56866822818,M-BWI-YYZ-4,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/56866822818,https://www.airlines-manager.com/aircraft/show/92153442,4:00,9:44,310,"$362,448.00","$324,139.00","$1,045.61","$56,535.87"
MIA - BWI,56869877619,M-BWI-YYZ-5,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/56869877619,https://www.airlines-manager.com/aircraft/show/92153439,6:00,11:44,310,"$362,448.00","$324,139.00","$1,045.61","$56,535.87"
MIA - BWI,56880042607,M-BWI-YYZ-1,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/56880042607,https://www.airlines-manager.com/aircraft/show/92153443,10:00,15:44,310,"$362,448.00","$324,139.00","$1,045.61","$56,535.87"
MIA - BWI,56886798156,M-BWI-YYZ-2,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/56886798156,https://www.airlines-manager.com/aircraft/show/92153440,13:00,18:44,310,"$362,448.00","$324,139.00","$1,045.61","$56,535.87"
MIA - BWI,56901278262,M-BWI-YYZ-3,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/56901278262,https://www.airlines-manager.com/aircraft/show/92153441,21:00,2:44,310,"$362,448.00","$324,139.00","$1,045.61","$56,535.87"
MIA - BWI,56906228740,M-BWI-YYZ-6 B,A319-100,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/56906228740,https://www.airlines-manager.com/aircraft/show/120519717,23:00,4:44,170,"$255,318.00","$225,464.00","$1,326.26","$39,325.12"
MIA - BZN,56862956200,M-BIL-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/56862956200,https://www.airlines-manager.com/aircraft/show/116789627,0:15,10:44,320,"$656,911.00","$600,715.00","$1,877.23","$57,301.91"
MIA - BZN,56880042755,M-BIL-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/56880042755,https://www.airlines-manager.com/aircraft/show/116789626,11:00,21:29,320,"$656,911.00","$600,715.00","$1,877.23","$57,301.91"
MIA - BZN,56886798198,M-BIL-BZN-5,ERJ-175,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/56886798198,https://www.airlines-manager.com/aircraft/show/116042637,13:00,23:44,112,"$309,244.00","$274,765.00","$2,453.26","$25,599.22"
MIA - BZN,56901278179,M-BIL-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/56901278179,https://www.airlines-manager.com/aircraft/show/116789629,20:15,6:44,320,"656,911$","600,715$","$1,877.23","$57,301.91"
MIA - BZN,56903707140,M-BIL-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/56903707140,https://www.airlines-manager.com/aircraft/show/116789628,22:15,8:44,320,"$656,911.00","$600,715.00","$1,877.23","$57,301.91"
MIA - CAK,56862956495,M-MHT-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/56862956495,https://www.airlines-manager.com/aircraft/show/115493370,2:00,8:14,310,"$385,091.00","$351,321.00","$1,133.29","$56,361.66"
MIA - CAK,56876734121,M-MHT-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/56876734121,https://www.airlines-manager.com/aircraft/show/115493371,8:15,14:29,310,"$385,091.00","$351,321.00","$1,133.29","$56,361.66"
MIA - CAK,56880042797,M-MHT-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/56880042797,https://www.airlines-manager.com/aircraft/show/115493372,11:00,17:14,310,"$385,091.00","$351,321.00","$1,133.29","$56,361.66"
MIA - CAK,56895754281,M-MHT-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/56895754281,https://www.airlines-manager.com/aircraft/show/114912307,18:00,0:14,112,"$181,775.00","$159,685.00","$1,425.76","$25,617.91"
MIA - CAK,56901278268,M-MHT-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/56901278268,https://www.airlines-manager.com/aircraft/show/115493373,21:00,3:14,276,"$360,018.00","$327,223.00","$1,185.59","$52,495.67"
MIA - CHS,56862956665,M-SDF-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/56862956665,https://www.airlines-manager.com/aircraft/show/94886626,3:15,7:14,310,"$226,980.00","$200,988.00",$648.35,"$50,457.24"
MIA - CHS,56876734192,M-SDF-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/56876734192,https://www.airlines-manager.com/aircraft/show/96692674,9:00,12:59,310,"$226,980.00","$200,988.00",$648.35,"$50,457.24"
MIA - CHS,56880042804,M-SDF-PWM-5,ERJ-175,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/56880042804,https://www.airlines-manager.com/aircraft/show/105601657,11:00,14:59,112,"105,788$","89,336$",$797.64,"$22,427.45"
MIA - CHS,56886798264,M-SDF-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/56886798264,https://www.airlines-manager.com/aircraft/show/94886625,14:00,17:59,310,"226,980$","200,988$",$648.35,"$50,457.24"
MIA - CHS,56901278239,M-SDF-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/56901278239,https://www.airlines-manager.com/aircraft/show/94886629,20:45,0:44,294,"220,084$","194,307$",$660.91,"$48,780.00"
MIA - CID,56862956378,M-CID-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/56862956378,https://www.airlines-manager.com/aircraft/show/116789652,1:15,8:29,310,"455,731$","418,272$","$1,349.26","$57,825.62"
MIA - CID,56880042628,M-CID-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/56880042628,https://www.airlines-manager.com/aircraft/show/116789653,10:00,17:14,310,"$455,731.00","$418,272.00","$1,349.26","$57,825.62"
MIA - CID,56889535350,M-CID-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/56889535350,https://www.airlines-manager.com/aircraft/show/116789650,15:30,22:44,310,"$455,731.00","$418,272.00","$1,349.26","$57,825.62"
MIA - CID,56901278211,M-CID-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/56901278211,https://www.airlines-manager.com/aircraft/show/116789651,20:30,3:44,310,"455,731$","418,272$","$1,349.26","$57,825.62"
MIA - CLE,56862956258,M-COS-CVG-5,ERJ-175,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/56862956258,https://www.airlines-manager.com/aircraft/show/103534665,0:30,6:44,112,"$188,656.00","$164,872.00","$1,472.07","$26,450.05"
MIA - CLE,56866822845,M-COS-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/56866822845,https://www.airlines-manager.com/aircraft/show/103684630,4:15,10:29,320,"$400,132.00","$358,875.00","$1,121.48","$57,573.53"
MIA - CLE,56873155692,M-COS-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/56873155692,https://www.airlines-manager.com/aircraft/show/103365574,7:45,13:59,320,"$400,132.00","$358,875.00","$1,121.48","$57,573.53"
MIA - CLE,56886798116,M-COS-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/56886798116,https://www.airlines-manager.com/aircraft/show/103684632,13:00,19:14,320,"$400,132.00","$358,875.00","$1,121.48","$57,573.53"
MIA - CLE,56901278227,M-COS-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/56901278227,https://www.airlines-manager.com/aircraft/show/103684631,20:45,2:59,320,"$400,132.00","$358,875.00","$1,121.48","$57,573.53"
MIA - CLT,56866822865,M-ORD-DFW-6,ERJ-175,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/56866822865,https://www.airlines-manager.com/aircraft/show/82543123,4:15,8:59,112,"$142,655.00","$118,748.00","$1,060.25","$25,087.61"
MIA - CLT,56880042604,M-ORD-DFW-3,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/56880042604,https://www.airlines-manager.com/aircraft/show/91600939,10:00,14:44,310,"$299,768.00","$261,819.00",$844.58,"$55,313.87"
MIA - CLT,56892624124,M-ORD-DFW-2,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/56892624124,https://www.airlines-manager.com/aircraft/show/91600936,16:00,20:44,310,"$299,768.00","$261,819.00",$844.58,"$55,313.87"
MIA - CLT,56895754229,M-ORD-DFW-5,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/56895754229,https://www.airlines-manager.com/aircraft/show/91600937,17:45,22:29,310,"299,768$","261,819$",$844.58,"$55,313.87"
MIA - CLT,56903707174,M-ORD-DFW-1,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/56903707174,https://www.airlines-manager.com/aircraft/show/91600935,22:30,3:14,310,"$299,768.00","$261,819.00",$844.58,"$55,313.87"
MIA - CLT,56906228778,M-ORD-DFW-4,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/56906228778,https://www.airlines-manager.com/aircraft/show/91600938,23:30,4:14,310,"$299,768.00","$261,819.00",$844.58,"$55,313.87"
MIA - CMH,56862956442,M-MKE-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/56862956442,https://www.airlines-manager.com/aircraft/show/88494374,1:45,7:44,320,"$373,993.00","$333,972.00","$1,043.66","$55,817.05"
MIA - CMH,56873155622,M-MKE-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/56873155622,https://www.airlines-manager.com/aircraft/show/88494378,7:15,13:14,320,"$373,993.00","$333,972.00","$1,043.66","$55,817.05"
MIA - CMH,56886798235,M-MKE-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/56886798235,https://www.airlines-manager.com/aircraft/show/91806233,14:00,19:59,320,"$373,993.00","$333,972.00","$1,043.66","$55,817.05"
MIA - CMH,56895754275,M-MKE-CMH-5 B,A319-100,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/56895754275,https://www.airlines-manager.com/aircraft/show/110582842,18:00,23:59,198,"$283,790.00","$255,521.00","$1,290.51","$42,705.46"
MIA - CMH,56901278253,M-MKE-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/56901278253,https://www.airlines-manager.com/aircraft/show/88239556,21:00,2:59,320,"$373,993.00","$333,972.00","$1,043.66","$55,817.05"
MIA - CMN,56866822941,M-84B-4 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/56866822941,https://www.airlines-manager.com/aircraft/show/106676228,5:00,22:44,962,"$2,973,893.00","$2,715,224.00","$2,822.48","$153,114.14"
MIA - CMN,56901278215,M-84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/56901278215,https://www.airlines-manager.com/aircraft/show/106676225,20:30,14:14,962,"$2,973,893.00","$2,715,224.00","$2,822.48","$153,114.14"
MIA - COS,56869877644,M-COS-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/56869877644,https://www.airlines-manager.com/aircraft/show/103684631,6:30,14:59,320,"$546,028.00","$494,638.00","$1,545.74","$58,307.03"
MIA - COS,56880042654,M-COS-CVG-5,ERJ-175,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/56880042654,https://www.airlines-manager.com/aircraft/show/103534665,10:00,18:44,112,"$257,259.00","$226,678.00","$2,023.91","$25,955.50"
MIA - COS,56886798243,M-COS-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/56886798243,https://www.airlines-manager.com/aircraft/show/103684630,14:00,22:29,320,"$546,028.00","$494,638.00","$1,545.74","$58,307.03"
MIA - COS,56895754197,M-COS-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/56895754197,https://www.airlines-manager.com/aircraft/show/103365574,17:30,1:59,320,"$546,028.00","$494,638.00","$1,545.74","$58,307.03"
MIA - COS,56903707193,M-COS-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/56903707193,https://www.airlines-manager.com/aircraft/show/103684632,22:45,7:14,320,"$546,028.00","$494,638.00","$1,545.74","$58,307.03"
MIA - CPT,56866822938,M-84A-6 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/56866822938,https://www.airlines-manager.com/aircraft/show/93731916,5:00,10:29,1124,"$5,639,082.00","$5,244,474.00","$4,665.90","$956,439.03"
MIA - CPT,56895754273,M-84A-2 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/56895754273,https://www.airlines-manager.com/aircraft/show/93686968,18:00,23:29,1124,"$5,639,082.00","$5,244,474.00","$4,665.90","$956,439.03"
MIA - CUN,56869877572,M-PSP-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/56869877572,https://www.airlines-manager.com/aircraft/show/116789631,5:30,9:44,320,"$251,434.00","$216,081.00",$675.25,"$51,042.76"
MIA - CUN,56876734220,M-PSP-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/56876734220,https://www.airlines-manager.com/aircraft/show/116789634,9:30,13:44,320,"$251,434.00","$216,081.00",$675.25,"$51,042.76"
MIA - CUN,56880042584,M-PSP-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/56880042584,https://www.airlines-manager.com/aircraft/show/116789632,10:00,14:14,320,"$251,434.00","$216,081.00",$675.25,"$51,042.76"
MIA - CUN,56898577525,M-PSP-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/56898577525,https://www.airlines-manager.com/aircraft/show/116789633,18:45,22:59,320,"$251,434.00","$216,081.00",$675.25,"$51,042.76"
MIA - CUN,56903707084,M-PSP-BFF-5,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/56903707084,https://www.airlines-manager.com/aircraft/show/116789630,21:45,1:59,316,"$248,581.00","$213,299.00",$675.00,"$50,385.59"
MIA - CUR,56866822846,M-BGI-CUR-3,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/56866822846,https://www.airlines-manager.com/aircraft/show/107121797,4:15,10:59,320,"$414,925.00","$372,912.00","$1,165.35","$55,382.97"
MIA - CUR,56880042746,M-BGI-CUR-2,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/56880042746,https://www.airlines-manager.com/aircraft/show/107121796,11:00,17:44,320,"$414,925.00","$372,912.00","$1,165.35","$55,382.97"
MIA - CUR,56889535283,M-BGI-CUR-5,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/56889535283,https://www.airlines-manager.com/aircraft/show/107121799,15:00,21:44,320,"$414,925.00","$372,912.00","$1,165.35","$55,382.97"
MIA - CUR,56901278174,M-BGI-CUR-1,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/56901278174,https://www.airlines-manager.com/aircraft/show/107121795,20:15,2:59,320,"$414,925.00","$372,912.00","$1,165.35","$55,382.97"
MIA - CUR,56903707081,M-BGI-CUR-4,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/56903707081,https://www.airlines-manager.com/aircraft/show/107121798,21:45,4:29,297,"$387,670.00","$346,581.00","$1,166.94","$51,472.43"
MIA - CVG,56862956483,M-COS-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/56862956483,https://www.airlines-manager.com/aircraft/show/103365574,2:00,7:44,320,"370,605$","328,724$","$1,027.26","$57,335.58"
MIA - CVG,56873155624,M-COS-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/56873155624,https://www.airlines-manager.com/aircraft/show/103684632,7:15,12:59,320,"$370,605.00","$328,724.00","$1,027.26","$57,335.58"
MIA - CVG,56889535282,M-COS-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/56889535282,https://www.airlines-manager.com/aircraft/show/103684631,15:00,20:44,320,"$370,605.00","$328,724.00","$1,027.26","$57,335.58"
MIA - CVG,56898577546,M-COS-CVG-5,ERJ-175,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/56898577546,https://www.airlines-manager.com/aircraft/show/103534665,18:45,0:29,112,"$175,356.00","$151,647.00","$1,353.99","$26,450.06"
MIA - CVG,56903707170,M-COS-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/56903707170,https://www.airlines-manager.com/aircraft/show/103684630,22:30,4:14,320,"$370,605.00","$328,724.00","$1,027.26","$57,335.58"
MIA - DEN,56862956394,M-LAX-DEN-3,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/56862956394,https://www.airlines-manager.com/aircraft/show/91126651,1:30,9:59,400,"730,615$","644,983$","$1,612.46","$76,029.43"
MIA - DEN,56862956395,M-LAX-DEN-4,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/56862956395,https://www.airlines-manager.com/aircraft/show/91126652,3:30,11:59,400,"730,615$","644,983$","$1,612.46","$76,029.43"
MIA - DEN,56880042722,M-LAX-DEN-1,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/56880042722,https://www.airlines-manager.com/aircraft/show/91126649,11:00,19:29,400,"730,615$","644,983$","$1,612.46","$76,029.43"
MIA - DEN,56895754193,M-LAX-DEN-2,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/56895754193,https://www.airlines-manager.com/aircraft/show/91126650,17:30,1:59,400,"$730,615.00","$644,983.00","$1,612.46","$76,029.43"
MIA - DEN,56903707155,M-LAX-DEN-5 E,A319-100,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/56903707155,https://www.airlines-manager.com/aircraft/show/115181776,22:15,6:59,216,"428,425$","372,033$","$1,722.38","$42,599.20"
MIA - DFW,56862956682,M-ORD-DFW-2,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/56862956682,https://www.airlines-manager.com/aircraft/show/91600936,3:30,9:59,310,"$410,166.00","$354,245.00","$1,142.73","$54,639.33"
MIA - DFW,56880042601,M-ORD-DFW-1,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/56880042601,https://www.airlines-manager.com/aircraft/show/91600935,10:00,16:29,310,"$410,166.00","$354,245.00","$1,142.73","$54,639.33"
MIA - DFW,56880042602,M-ORD-DFW-4,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/56880042602,https://www.airlines-manager.com/aircraft/show/91600938,11:00,17:29,310,"$410,166.00","$354,245.00","$1,142.73","$54,639.33"
MIA - DFW,56892624079,M-ORD-DFW-6,ERJ-175,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/56892624079,https://www.airlines-manager.com/aircraft/show/82543123,15:45,22:14,112,"$193,018.00","$157,511.00","$1,406.35","$24,294.76"
MIA - DFW,56903707061,M-ORD-DFW-3,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/56903707061,https://www.airlines-manager.com/aircraft/show/91600939,21:30,3:59,310,"$410,166.00","$354,245.00","$1,142.73","$54,639.33"
MIA - DFW,56903707062,M-ORD-DFW-5,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/56903707062,https://www.airlines-manager.com/aircraft/show/91600937,22:30,4:59,310,"$410,166.00","$354,245.00","$1,142.73","$54,639.33"
MIA - DSM,56862956636,M-DSM-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/56862956636,https://www.airlines-manager.com/aircraft/show/113101230,3:00,10:14,320,"$457,870.00","$414,841.00","$1,296.38","$57,351.29"
MIA - DSM,56876734180,M-DSM-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/56876734180,https://www.airlines-manager.com/aircraft/show/100049776,8:45,15:59,112,"$216,773.00","$191,389.00","$1,708.83","$26,459.31"
MIA - DSM,56886798124,M-DSM-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/56886798124,https://www.airlines-manager.com/aircraft/show/111064081,13:00,20:14,320,"$457,870.00","$414,841.00","$1,296.38","$57,351.29"
MIA - DSM,56892624113,M-DSM-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/56892624113,https://www.airlines-manager.com/aircraft/show/113101228,16:00,23:14,320,"$457,870.00","$414,841.00","$1,296.38","$57,351.29"
MIA - DSM,56901278177,M-DSM-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/56901278177,https://www.airlines-manager.com/aircraft/show/113101233,20:15,3:29,320,"$457,870.00","$414,841.00","$1,296.38","$57,351.29"
MIA - DSS,56862956165,M-84B-7 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/56862956165,https://www.airlines-manager.com/aircraft/show/106676231,0:00,16:59,962,"$2,864,435.00","$2,618,423.00","$2,721.85","$154,176.04"
MIA - DSS,56883365140,M-84B-3 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/56883365140,https://www.airlines-manager.com/aircraft/show/106676227,12:00,4:59,962,"$2,864,435.00","$2,618,423.00","$2,721.85","$154,176.04"
MIA - DTW,56862956400,M-PDX-DTW-3,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/56862956400,https://www.airlines-manager.com/aircraft/show/89943713,1:30,7:59,320,"$414,846.00","$362,524.00","$1,132.89","$55,916.30"
MIA - DTW,56862956401,M-PDX-DTW-4,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/56862956401,https://www.airlines-manager.com/aircraft/show/89943712,2:30,8:59,320,"$414,846.00","$362,524.00","$1,132.89","$55,916.30"
MIA - DTW,56880042552,M-PDX-DTW-2,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/56880042552,https://www.airlines-manager.com/aircraft/show/89943714,10:00,16:29,320,"$414,846.00","$362,524.00","$1,132.89","$55,916.30"
MIA - DTW,56886798234,M-PDX-DTW-5,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/56886798234,https://www.airlines-manager.com/aircraft/show/89943711,14:00,20:29,320,"$414,846.00","$362,524.00","$1,132.89","$55,916.30"
MIA - DTW,56903707166,M-PDX-DTW-1,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/56903707166,https://www.airlines-manager.com/aircraft/show/89943715,22:30,4:59,320,"$414,846.00","$362,524.00","$1,132.89","$55,916.30"
MIA - ECP,56862956218,M-MAF-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50834918,https://www.airlines-manager.com/network/showflight/56862956218,https://www.airlines-manager.com/aircraft/show/92137503,0:15,4:14,112,"$103,168.00","$86,664.00",$773.79,"$21,756.65"
MIA - ECP,56862956219,M-MAF-ROC-4,A321-200,https://www.airlines-manager.com/network/showline/50834918,https://www.airlines-manager.com/network/showflight/56862956219,https://www.airlines-manager.com/aircraft/show/120933310,2:15,6:14,310,"221,304$","195,136$",$629.47,"$48,988.12"
MIA - ECP,56873155723,M-MAF-ROC-3,A321-200,https://www.airlines-manager.com/network/showline/50834918,https://www.airlines-manager.com/network/showflight/56873155723,https://www.airlines-manager.com/aircraft/show/120933309,8:00,11:59,310,"221,304$","195,136$",$629.47,"$48,988.12"
MIA - ECP,56880042635,M-MAF-ROC-2,A321-200,https://www.airlines-manager.com/network/showline/50834918,https://www.airlines-manager.com/network/showflight/56880042635,https://www.airlines-manager.com/aircraft/show/120933308,10:00,13:59,310,"221,304$","195,136$",$629.47,"$48,988.12"
MIA - ECP,56892624193,M-MAF-ROC-1,A321-200,https://www.airlines-manager.com/network/showline/50834918,https://www.airlines-manager.com/network/showflight/56892624193,https://www.airlines-manager.com/aircraft/show/120933307,16:45,20:44,310,"221,304$","195,136$",$629.47,"$48,988.12"
MIA - ELP,56876734122,M-ELP-MCI-5 B,A319-100,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/56876734122,https://www.airlines-manager.com/aircraft/show/105093924,8:15,16:44,198,"$402,779.00","$366,768.00","$1,852.36","$43,233.95"
MIA - ELP,56880042558,M-ELP-MCI-1,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/56880042558,https://www.airlines-manager.com/aircraft/show/91806234,10:00,18:29,320,"$534,175.00","$484,066.00","$1,512.71","$57,060.83"
MIA - ELP,56892624150,M-ELP-MCI-3,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/56892624150,https://www.airlines-manager.com/aircraft/show/91806232,16:15,0:44,320,"$534,175.00","$484,066.00","$1,512.71","$57,060.83"
MIA - ELP,56892624151,M-ELP-MCI-4,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/56892624151,https://www.airlines-manager.com/aircraft/show/91806231,17:00,1:29,320,"534,175$","484,066$","$1,512.71","$57,060.83"
MIA - ELP,56906228750,M-ELP-MCI-2,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/56906228750,https://www.airlines-manager.com/aircraft/show/91806235,23:15,7:44,320,"$534,175.00","$484,066.00","$1,512.71","$57,060.83"
MIA - EUG,56862956412,M-EUG-SYR-4,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/56862956412,https://www.airlines-manager.com/aircraft/show/119652480,1:30,13:59,320,"$770,422.00","$706,945.00","$2,209.20","$56,631.11"
MIA - EUG,56886798261,M-EUG-SYR-1,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/56886798261,https://www.airlines-manager.com/aircraft/show/119652483,14:00,2:29,320,"$770,422.00","$706,945.00","$2,209.20","$56,631.11"
MIA - EUG,56898577526,M-EUG-SYR-3,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/56898577526,https://www.airlines-manager.com/aircraft/show/119652481,18:45,7:14,320,"$770,422.00","$706,945.00","$2,209.20","$56,631.11"
MIA - EUG,56906228776,M-EUG-SYR-2,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/56906228776,https://www.airlines-manager.com/aircraft/show/119652482,23:30,11:59,320,"$770,422.00","$706,945.00","$2,209.20","$56,631.11"
MIA - FAR,56862956274,M-FAR-TUL-3,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/56862956274,https://www.airlines-manager.com/aircraft/show/110883161,0:45,9:29,320,"$548,683.00","$499,861.00","$1,562.07","$57,235.99"
MIA - FAR,56873155625,M-FAR-TUL-4,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/56873155625,https://www.airlines-manager.com/aircraft/show/110883162,7:15,15:59,320,"$548,683.00","$499,861.00","$1,562.07","$57,235.99"
MIA - FAR,56880042752,M-FAR-TUL-1,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/56880042752,https://www.airlines-manager.com/aircraft/show/110883159,11:00,19:44,320,"$548,683.00","$499,861.00","$1,562.07","$57,235.99"
MIA - FAR,56892624111,M-FAR-TUL-2,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/56892624111,https://www.airlines-manager.com/aircraft/show/110883160,16:00,0:44,320,"$548,683.00","$499,861.00","$1,562.07","$57,235.99"
MIA - FAR,56895754304,M-FAR-TUL-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/56895754304,https://www.airlines-manager.com/aircraft/show/87169421,18:15,2:59,112,"$258,578.00","$229,164.00","$2,046.11","$26,240.15"
MIA - FAT,56876734133,M-FAT-MSO-4,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/56876734133,https://www.airlines-manager.com/aircraft/show/113101232,8:30,19:59,320,"$721,117.00","$660,903.00","$2,065.32","$57,553.24"
MIA - FAT,56880042687,M-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/56880042687,https://www.airlines-manager.com/aircraft/show/120519142,10:45,22:14,0,"$202,638.00","$131,134.00",#DIV/0!,"$11,419.51"
MIA - FAT,56880042688,M-FAT-MSO-1,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/56880042688,https://www.airlines-manager.com/aircraft/show/113101229,11:00,22:29,320,"$721,117.00","$660,903.00","$2,065.32","$57,553.24"
MIA - FAT,56898577561,M-FAT-MSO-2,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/56898577561,https://www.airlines-manager.com/aircraft/show/113101231,19:00,6:29,320,"$721,117.00","$660,903.00","$2,065.32","$57,553.24"
MIA - FAT,56903707139,M-FAT-MSO-3,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/56903707139,https://www.airlines-manager.com/aircraft/show/113101234,22:15,9:44,320,"$684,642.00","$629,659.00","$1,967.68","$54,832.42"
MIA - FCA,56862956242,M-FCA-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/56862956242,https://www.airlines-manager.com/aircraft/show/119652477,0:30,11:59,320,"$707,833.00","$648,466.00","$2,026.46","$56,470.19"
MIA - FCA,56862956243,M-FCA-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/56862956243,https://www.airlines-manager.com/aircraft/show/119652476,2:30,13:59,320,"$707,833.00","$648,466.00","$2,026.46","$56,470.19"
MIA - FCA,56883365114,M-FCA-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/56883365114,https://www.airlines-manager.com/aircraft/show/119652479,12:00,23:29,320,"$707,833.00","$648,466.00","$2,026.46","$56,470.19"
MIA - FCA,56886798258,M-FCA-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/56886798258,https://www.airlines-manager.com/aircraft/show/119652478,14:00,1:29,320,"$707,833.00","$648,466.00","$2,026.46","$56,470.19"
MIA - FPO,56862956195,M-BGI-CUR-2,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/56862956195,https://www.airlines-manager.com/aircraft/show/107121796,0:15,2:44,320,"$84,372.00","$59,731.00",$186.66,"$24,052.75"
MIA - FPO,56866822847,M-BGI-CUR-5,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/56866822847,https://www.airlines-manager.com/aircraft/show/107121799,4:15,6:44,320,"$84,372.00","$59,731.00",$186.66,"$24,052.75"
MIA - FPO,56876734219,M-BGI-CUR-1,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/56876734219,https://www.airlines-manager.com/aircraft/show/107121795,9:30,11:59,320,"$84,372.00","$59,731.00",$186.66,"$24,052.75"
MIA - FPO,56880042748,M-BGI-CUR-4,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/56880042748,https://www.airlines-manager.com/aircraft/show/107121798,11:00,13:29,320,"$84,372.00","$59,731.00",$186.66,"$24,052.75"
MIA - FPO,56895754200,M-BGI-CUR-3,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/56895754200,https://www.airlines-manager.com/aircraft/show/107121797,17:30,19:59,205,"$61,451.00","$37,202.00",$181.47,"$14,980.67"
MIA - FSD,56862956326,M-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/56862956326,https://www.airlines-manager.com/aircraft/show/110883110,1:00,8:59,310,"$503,709.00","$462,376.00","$1,491.54","$57,917.66"
MIA - FSD,56862956327,M-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/56862956327,https://www.airlines-manager.com/aircraft/show/110883113,2:45,10:44,310,"503,709$","462,376$","$1,491.54","$57,917.66"
MIA - FSD,56886798282,M-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/56886798282,https://www.airlines-manager.com/aircraft/show/110883112,14:00,21:59,310,"$503,709.00","$462,376.00","$1,491.54","$57,917.66"
MIA - FSD,56892624156,M-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/56892624156,https://www.airlines-manager.com/aircraft/show/110883111,16:15,0:14,310,"$503,709.00","$462,376.00","$1,491.54","$57,917.66"
MIA - FSD,56903707126,M-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/56903707126,https://www.airlines-manager.com/aircraft/show/104353572,22:00,5:59,96,"$222,144.00","$195,720.00","$2,038.75","$24,516.08"
MIA - GRR,56862956172,M-RAP-GRR-5,ERJ-175,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/56862956172,https://www.airlines-manager.com/aircraft/show/116042630,0:00,6:44,112,"$200,498.00","$176,006.00","$1,571.48","$26,139.50"
MIA - GRR,56862956173,M-RAP-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/56862956173,https://www.airlines-manager.com/aircraft/show/116789623,2:15,8:59,320,"$424,936.00","$383,045.00","$1,197.02","$56,887.87"
MIA - GRR,56880042580,M-RAP-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/56880042580,https://www.airlines-manager.com/aircraft/show/116789624,10:00,16:44,320,"$424,936.00","$383,045.00","$1,197.02","$56,887.87"
MIA - GRR,56883365108,M-RAP-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/56883365108,https://www.airlines-manager.com/aircraft/show/116789622,12:00,18:44,320,"$424,936.00","$383,045.00","$1,197.02","$56,887.87"
MIA - GRR,56898577563,M-RAP-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/56898577563,https://www.airlines-manager.com/aircraft/show/116789625,19:00,1:44,320,"$424,936.00","$383,045.00","$1,197.02","$56,887.87"
MIA - GSO,56876734206,M-EUG-SYR-1,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/56876734206,https://www.airlines-manager.com/aircraft/show/119652483,9:15,13:59,320,"$310,263.00","$276,328.00",$863.53,"$58,379.15"
MIA - GSO,56886798260,M-EUG-SYR-3,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/56886798260,https://www.airlines-manager.com/aircraft/show/119652481,14:00,18:44,320,"$310,263.00","$276,328.00",$863.53,"$58,379.15"
MIA - GSO,56898577527,M-EUG-SYR-2,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/56898577527,https://www.airlines-manager.com/aircraft/show/119652482,18:45,23:29,320,"$310,263.00","$276,328.00",$863.53,"$58,379.15"
MIA - GSO,56901278232,M-EUG-SYR-4,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/56901278232,https://www.airlines-manager.com/aircraft/show/119652480,20:45,1:29,311,"$305,001.00","$271,239.00",$872.15,"$57,304.01"
MIA - HAV,56866822926,M-PDX-DTW-1,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/56866822926,https://www.airlines-manager.com/aircraft/show/89943715,5:00,7:59,320,"$131,980.00","$102,173.00",$319.29,"$34,247.93"
MIA - HAV,56876734186,M-PDX-DTW-4,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/56876734186,https://www.airlines-manager.com/aircraft/show/89943712,9:00,11:59,320,"$131,980.00","$102,173.00",$319.29,"$34,247.93"
MIA - HAV,56880042551,M-PDX-DTW-3,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/56880042551,https://www.airlines-manager.com/aircraft/show/89943713,10:00,12:59,320,"$131,980.00","$102,173.00",$319.29,"$34,247.93"
MIA - HAV,56892624166,M-PDX-DTW-2,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/56892624166,https://www.airlines-manager.com/aircraft/show/89943714,16:30,19:29,320,"$131,980.00","$102,173.00",$319.29,"$34,247.93"
MIA - HAV,56901278205,M-PDX-DTW-5,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/56901278205,https://www.airlines-manager.com/aircraft/show/89943711,20:30,23:29,289,"$120,693.00","$91,131.00",$315.33,"$30,546.70"
MIA - IAD,56866822853,M-IAD-TUS-2,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/56866822853,https://www.airlines-manager.com/aircraft/show/97556720,4:15,9:59,310,"$363,777.00","$324,476.00","$1,046.70","$56,594.65"
MIA - IAD,56873155627,M-IAD-TUS-5,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/56873155627,https://www.airlines-manager.com/aircraft/show/97556716,7:15,12:59,310,"$363,777.00","$324,476.00","$1,046.70","$56,594.65"
MIA - IAD,56880042616,M-IAD-TUS-1,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/56880042616,https://www.airlines-manager.com/aircraft/show/97556721,10:00,15:44,310,"$363,777.00","$324,476.00","$1,046.70","$56,594.65"
MIA - IAD,56886798159,M-IAD-TUS-4,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/56886798159,https://www.airlines-manager.com/aircraft/show/97556718,13:00,18:44,310,"$363,777.00","$324,476.00","$1,046.70","$56,594.65"
MIA - IAD,56898577537,M-IAD-TUS-3,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/56898577537,https://www.airlines-manager.com/aircraft/show/97556719,18:45,0:29,310,"$363,777.00","$324,476.00","$1,046.70","$56,594.65"
MIA - ICT,56862956540,M-FAR-TUL-1,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/56862956540,https://www.airlines-manager.com/aircraft/show/110883159,2:30,9:29,320,"$448,851.00","$405,534.00","$1,267.29","$58,071.69"
MIA - ICT,56876734188,M-FAR-TUL-2,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/56876734188,https://www.airlines-manager.com/aircraft/show/110883160,9:00,15:59,320,"$448,851.00","$405,534.00","$1,267.29","$58,071.69"
MIA - ICT,56880042803,M-FAR-TUL-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/56880042803,https://www.airlines-manager.com/aircraft/show/87169421,11:00,18:14,112,"$213,247.00","$187,816.00","$1,676.93","$25,965.35"
MIA - ICT,56895754224,M-FAR-TUL-3,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/56895754224,https://www.airlines-manager.com/aircraft/show/110883161,17:45,0:44,320,"$448,851.00","$405,534.00","$1,267.29","$58,071.69"
MIA - ICT,56903707197,M-FAR-TUL-4,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/56903707197,https://www.airlines-manager.com/aircraft/show/110883162,22:45,5:44,320,"$448,851.00","$405,534.00","$1,267.29","$58,071.69"
MIA - IND,56862956561,M-AUS-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/56862956561,https://www.airlines-manager.com/aircraft/show/82323689,2:30,8:29,112,"$181,512.00","$157,824.00","$1,409.14","$26,377.27"
MIA - IND,56862956563,M-AUS-PIT-4,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/56862956563,https://www.airlines-manager.com/aircraft/show/99920623,3:15,9:14,320,"$384,262.00","$342,843.00","$1,071.38","$57,299.67"
MIA - IND,56880042566,M-AUS-PIT-3,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/56880042566,https://www.airlines-manager.com/aircraft/show/99920624,10:00,15:59,320,"$384,262.00","$342,843.00","$1,071.38","$57,299.67"
MIA - IND,56892624106,M-AUS-PIT-2,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/56892624106,https://www.airlines-manager.com/aircraft/show/99920625,16:00,21:59,320,"384,262$","342,843$","$1,071.38","$57,299.67"
MIA - IND,56903707169,M-AUS-PIT-1,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/56903707169,https://www.airlines-manager.com/aircraft/show/99920626,22:30,4:29,320,"$384,262.00","$342,843.00","$1,071.38","$57,299.67"
MIA - JAN,56869877588,M-MHT-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/56869877588,https://www.airlines-manager.com/aircraft/show/114912307,5:30,10:29,112,"$149,970.00","$131,075.00","$1,170.31","$26,302.68"
MIA - JAN,56876734150,M-MHT-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/56876734150,https://www.airlines-manager.com/aircraft/show/115493373,8:30,13:29,310,"$315,458.00","$286,126.00",$922.99,"$57,416.59"
MIA - JAN,56886798289,M-MHT-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/56886798289,https://www.airlines-manager.com/aircraft/show/115493370,14:00,18:59,310,"$315,458.00","$286,126.00",$922.99,"$57,416.59"
MIA - JAN,56901278184,M-MHT-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/56901278184,https://www.airlines-manager.com/aircraft/show/115493371,20:15,1:14,310,"$315,458.00","$286,126.00",$922.99,"$57,416.59"
MIA - JAN,56903707179,M-MHT-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/56903707179,https://www.airlines-manager.com/aircraft/show/115493372,22:30,3:29,256,"$283,146.00","$254,913.00",$995.75,"$51,153.11"
MIA - JAX,56862956620,M-COS-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/56862956620,https://www.airlines-manager.com/aircraft/show/103684631,3:00,6:29,320,"$174,389.00","$145,350.00",$454.22,"$41,727.27"
MIA - JAX,56880042675,M-COS-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/56880042675,https://www.airlines-manager.com/aircraft/show/103684630,10:30,13:59,320,"174,389$","145,350$",$454.22,"$41,727.27"
MIA - JAX,56886798242,M-COS-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/56886798242,https://www.airlines-manager.com/aircraft/show/103365574,14:00,17:29,320,"$174,389.00","$145,350.00",$454.22,"$41,727.27"
MIA - JAX,56898577594,M-COS-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/56898577594,https://www.airlines-manager.com/aircraft/show/103684632,19:15,22:44,320,"174,389$","145,350$",$454.22,"$41,727.27"
MIA - JAX,56903707154,M-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/56903707154,https://www.airlines-manager.com/aircraft/show/106339154,22:15,1:44,198,"132,355$","112,459$",$567.97,"$32,284.88"
MIA - JFK,56869877589,M-JFK-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/56869877589,https://www.airlines-manager.com/aircraft/show/105308264,5:45,11:59,338,"$430,736.00","$378,260.00","$1,119.11","$60,683.42"
MIA - JFK,56873155596,M-JFK-PHX-6,ERJ-175,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/56873155596,https://www.airlines-manager.com/aircraft/show/82683137,6:45,12:59,112,"$187,689.00","$153,479.00","$1,370.35","$24,622.30"
MIA - JFK,56880042540,M-JFK-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/56880042540,https://www.airlines-manager.com/aircraft/show/105308267,10:00,16:14,338,"430,736$","378,260$","$1,119.11","$60,683.42"
MIA - JFK,56883365081,M-JFK-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/56883365081,https://www.airlines-manager.com/aircraft/show/105308265,12:00,18:14,338,"$430,736.00","$378,260.00","$1,119.11","$60,683.42"
MIA - JFK,56895754243,M-JFK-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/56895754243,https://www.airlines-manager.com/aircraft/show/105308266,18:00,0:14,338,"430,736$","378,260$","$1,119.11","$60,683.42"
MIA - JFK,56901278221,M-JFK-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/56901278221,https://www.airlines-manager.com/aircraft/show/105308268,20:45,2:59,338,"$430,736.00","$378,260.00","$1,119.11","$60,683.42"
MIA - JNB,56862956154,M-84A-4 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/56862956154,https://www.airlines-manager.com/aircraft/show/93686966,0:00,6:44,1124,"$6,037,007.00","$5,603,375.00","$4,985.21","$832,184.41"
MIA - JNB,56886798185,M-84A-7 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/56886798185,https://www.airlines-manager.com/aircraft/show/93776641,13:00,19:44,1124,"$6,037,007.00","$5,603,375.00","$4,985.21","$832,184.41"
MIA - LAS,56862956386,M-LAS-SEA-5,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/56862956386,https://www.airlines-manager.com/aircraft/show/105093929,1:30,11:59,338,"$720,041.00","$652,865.00","$1,931.55","$62,276.47"
MIA - LAS,56880042537,M-LAS-SEA-1,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/56880042537,https://www.airlines-manager.com/aircraft/show/105093925,10:00,20:29,338,"$720,041.00","$652,865.00","$1,931.55","$62,276.47"
MIA - LAS,56883365137,M-LAS-SEA-6 B,A319-100,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/56883365137,https://www.airlines-manager.com/aircraft/show/113251304,12:00,22:29,198,"$499,043.00","$443,039.00","$2,237.57","$42,261.27"
MIA - LAS,56886798067,M-LAS-SEA-2,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/56886798067,https://www.airlines-manager.com/aircraft/show/105093926,13:00,23:29,338,"720,041$","652,865$","$1,931.55","$62,276.47"
MIA - LAS,56889535256,M-LAS-SEA-3,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/56889535256,https://www.airlines-manager.com/aircraft/show/105093927,15:00,1:29,338,"$720,041.00","$652,865.00","$1,931.55","$62,276.47"
MIA - LAS,56903707160,M-LAS-SEA-4,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/56903707160,https://www.airlines-manager.com/aircraft/show/105093928,22:30,8:59,338,"$720,041.00","$652,865.00","$1,931.55","$62,276.47"
MIA - LAX,56862956116,M-LAX-DEN-1,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/56862956116,https://www.airlines-manager.com/aircraft/show/91126649,0:00,10:59,400,"921,726$","828,254$","$2,070.64","$75,410.08"
MIA - LAX,56862956117,M-LAX-DEN-2,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/56862956117,https://www.airlines-manager.com/aircraft/show/91126650,2:00,12:59,400,"$921,726.00","$828,254.00","$2,070.64","$75,410.08"
MIA - LAX,56880042549,M-LAX-DEN-3,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/56880042549,https://www.airlines-manager.com/aircraft/show/91126651,10:00,20:59,400,"$921,726.00","$828,254.00","$2,070.64","$75,410.08"
MIA - LAX,56880042550,M-LAX-DEN-5 E,A319-100,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/56880042550,https://www.airlines-manager.com/aircraft/show/115181776,11:00,22:14,216,"$539,517.00","$478,154.00","$2,213.68","$42,565.64"
MIA - LAX,56892624164,M-LAX-DEN-4,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/56892624164,https://www.airlines-manager.com/aircraft/show/91126652,16:30,3:29,400,"921,726$","828,254$","$2,070.64","$75,410.08"
MIA - LEX,56862956641,M-CID-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/56862956641,https://www.airlines-manager.com/aircraft/show/116789653,3:00,8:29,310,"349,957$","319,272$","$1,029.91","$58,225.90"
MIA - LEX,56880042625,M-CID-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/56880042625,https://www.airlines-manager.com/aircraft/show/116789650,10:00,15:29,310,"349,957$","319,272$","$1,029.91","$58,225.90"
MIA - LEX,56889535308,M-CID-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/56889535308,https://www.airlines-manager.com/aircraft/show/116789651,15:00,20:29,310,"349,957$","319,272$","$1,029.91","$58,225.90"
MIA - LEX,56898577669,M-CID-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/56898577669,https://www.airlines-manager.com/aircraft/show/116789652,19:45,1:14,303,"$345,320.00","$314,805.00","$1,038.96","$57,411.25"
MIA - LIT,56862956509,M-SDF-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/56862956509,https://www.airlines-manager.com/aircraft/show/96692674,2:15,7:59,310,"$361,995.00","$329,608.00","$1,063.25","$57,489.77"
MIA - LIT,56866822868,M-SDF-PWM-5,ERJ-175,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/56866822868,https://www.airlines-manager.com/aircraft/show/105601657,4:15,9:59,112,"$171,636.00","$150,561.00","$1,344.29","$26,260.64"
MIA - LIT,56876734114,M-SDF-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/56876734114,https://www.airlines-manager.com/aircraft/show/94886625,8:15,13:59,310,"$361,995.00","$329,608.00","$1,063.25","$57,489.77"
MIA - LIT,56889535295,M-SDF-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/56889535295,https://www.airlines-manager.com/aircraft/show/94886629,15:00,20:44,310,"$361,995.00","$329,608.00","$1,063.25","$57,489.77"
MIA - LIT,56903707065,M-SDF-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/56903707065,https://www.airlines-manager.com/aircraft/show/94886626,21:30,3:14,307,"$359,928.00","$327,619.00","$1,067.16","$57,142.85"
MIA - LOS,56873155591,M-84A-5 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/56873155591,https://www.airlines-manager.com/aircraft/show/93704215,6:45,4:59,1124,"$4,277,261.00","$3,977,814.00","$3,538.98","$178,912.17"
MIA - LOS,56898577672,M-84A-1 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/56898577672,https://www.airlines-manager.com/aircraft/show/93686969,19:45,17:59,1115,"$4,217,924.00","$3,920,833.00","$3,516.44","$176,349.31"
MIA - MAF,56862956331,M-MAF-ROC-1,A321-200,https://www.airlines-manager.com/network/showline/50834915,https://www.airlines-manager.com/network/showflight/56862956331,https://www.airlines-manager.com/aircraft/show/120933307,1:00,8:29,310,"$470,887.00","$431,493.00","$1,391.91","$57,660.53"
MIA - MAF,56880042653,M-MAF-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50834915,https://www.airlines-manager.com/network/showflight/56880042653,https://www.airlines-manager.com/aircraft/show/92137503,10:00,17:29,112,"$222,557.00","$196,495.00","$1,754.42","$26,257.68"
MIA - MAF,56883365134,M-MAF-ROC-4,A321-200,https://www.airlines-manager.com/network/showline/50834915,https://www.airlines-manager.com/network/showflight/56883365134,https://www.airlines-manager.com/aircraft/show/120933310,12:00,19:29,310,"$470,887.00","$431,493.00","$1,391.91","$57,660.53"
MIA - MAF,56892624159,M-MAF-ROC-3,A321-200,https://www.airlines-manager.com/network/showline/50834915,https://www.airlines-manager.com/network/showflight/56892624159,https://www.airlines-manager.com/aircraft/show/120933309,16:15,23:44,310,"$470,887.00","$431,493.00","$1,391.91","$57,660.53"
MIA - MAF,56895754302,M-MAF-ROC-2,A321-200,https://www.airlines-manager.com/network/showline/50834915,https://www.airlines-manager.com/network/showflight/56895754302,https://www.airlines-manager.com/aircraft/show/120933308,18:15,1:44,309,"$469,983.00","$430,627.00","$1,393.61","$57,544.81"
MIA - MBJ,56862956285,M-PUJ-BDA-4 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/56862956285,https://www.airlines-manager.com/aircraft/show/104034460,0:45,4:59,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MBJ,56866822940,M-PUJ-BDA-5 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/56866822940,https://www.airlines-manager.com/aircraft/show/104034461,5:00,9:14,228,"193,225$","171,899$",$753.94,"$40,606.06"
MIA - MBJ,56880042638,M-PUJ-BDA-3 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/56880042638,https://www.airlines-manager.com/aircraft/show/104034459,10:00,14:14,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MBJ,56886798056,M-PUJ-BDA-1 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/56886798056,https://www.airlines-manager.com/aircraft/show/104034457,12:45,16:59,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MBJ,56892624236,M-PUJ-BDA-2 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/56892624236,https://www.airlines-manager.com/aircraft/show/104034458,17:00,21:14,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MBJ,56906228737,M-PUJ-BDA-6 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/56906228737,https://www.airlines-manager.com/aircraft/show/99326789,23:00,3:14,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MCI,56862956264,M-ELP-MCI-3,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/56862956264,https://www.airlines-manager.com/aircraft/show/91806232,0:45,7:44,320,"$448,685.00","$403,102.00","$1,259.69","$57,723.44"
MIA - MCI,56862956265,M-ELP-MCI-4,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/56862956265,https://www.airlines-manager.com/aircraft/show/91806231,1:30,8:29,320,"$448,685.00","$403,102.00","$1,259.69","$57,723.44"
MIA - MCI,56880042559,M-ELP-MCI-2,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/56880042559,https://www.airlines-manager.com/aircraft/show/91806235,10:00,16:59,320,"$448,685.00","$403,102.00","$1,259.69","$57,723.44"
MIA - MCI,56895754315,M-ELP-MCI-1,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/56895754315,https://www.airlines-manager.com/aircraft/show/91806234,18:30,1:29,320,"448,685$","403,102$","$1,259.69","$57,723.44"
MIA - MCI,56898577581,M-ELP-MCI-5 B,A319-100,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/56898577581,https://www.airlines-manager.com/aircraft/show/105093924,19:00,1:59,198,"$338,938.00","$306,546.00","$1,548.21","$43,896.80"
MIA - MCO,56862956196,M-BDL-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/56862956196,https://www.airlines-manager.com/aircraft/show/107763565,0:15,2:59,320,"$122,517.00","$85,295.00",$266.55,"$31,205.49"
MIA - MCO,56866822829,M-BDL-SAT-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/56866822829,https://www.airlines-manager.com/aircraft/show/107467213,4:00,6:44,112,"$55,044.00","$35,872.00",$320.29,"$13,123.90"
MIA - MCO,56869877631,M-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/56869877631,https://www.airlines-manager.com/aircraft/show/103534663,6:00,8:44,112,"$55,044.00","$35,872.00",$320.29,"$13,123.90"
MIA - MCO,56876734213,M-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/56876734213,https://www.airlines-manager.com/aircraft/show/103534663,9:15,11:59,112,"55,044$","35,872$",$320.29,"$13,123.90"
MIA - MCO,56880042575,M-BDL-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/56880042575,https://www.airlines-manager.com/aircraft/show/107763566,10:00,12:44,320,"$122,517.00","$85,295.00",$266.55,"$31,205.49"
MIA - MCO,56880042576,M-BDL-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/56880042576,https://www.airlines-manager.com/aircraft/show/107763561,11:00,13:44,320,"122,517$","85,295$",$266.55,"$31,205.49"
MIA - MCO,56895754223,M-BDL-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/56895754223,https://www.airlines-manager.com/aircraft/show/107763562,17:45,20:29,320,"122,517$","85,295$",$266.55,"$31,205.49"
MIA - MEM,56862956158,M-MKE-CMH-5 B,A319-100,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/56862956158,https://www.airlines-manager.com/aircraft/show/110582842,0:00,5:29,198,"$263,114.00","$235,345.00","$1,188.61","$42,920.06"
MIA - MEM,56862956159,M-MKE-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/56862956159,https://www.airlines-manager.com/aircraft/show/88239556,3:00,8:29,320,"$346,619.00","$307,030.00",$959.47,"$55,993.31"
MIA - MEM,56873155691,M-MKE-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/56873155691,https://www.airlines-manager.com/aircraft/show/88494374,7:45,13:14,320,"$346,619.00","$307,030.00",$959.47,"$55,993.31"
MIA - MEM,56886798233,M-MKE-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/56886798233,https://www.airlines-manager.com/aircraft/show/88494378,14:00,19:29,320,"$346,619.00","$307,030.00",$959.47,"$55,993.31"
MIA - MEM,56901278136,M-MKE-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/56901278136,https://www.airlines-manager.com/aircraft/show/91806233,20:00,1:29,320,"$346,619.00","$307,030.00",$959.47,"$55,993.31"
MIA - MFR,56862956411,M-FCA-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/56862956411,https://www.airlines-manager.com/aircraft/show/119652478,1:30,13:59,320,"$759,604.00","$696,142.00","$2,175.44","$55,765.71"
MIA - MFR,56883365113,M-FCA-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/56883365113,https://www.airlines-manager.com/aircraft/show/119652477,12:00,0:29,320,"$759,604.00","$696,142.00","$2,175.44","$55,765.71"
MIA - MFR,56886798257,M-FCA-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/56886798257,https://www.airlines-manager.com/aircraft/show/119652476,14:00,2:29,320,"$759,604.00","$696,142.00","$2,175.44","$55,765.71"
MIA - MFR,56906228775,M-FCA-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/56906228775,https://www.airlines-manager.com/aircraft/show/119652479,23:30,11:59,320,"$759,604.00","$696,142.00","$2,175.44","$55,765.71"
MIA - MHT,56862956372,M-MHT-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/56862956372,https://www.airlines-manager.com/aircraft/show/115493371,1:15,8:14,310,"$454,152.00","$415,897.00","$1,341.60","$59,555.66"
MIA - MHT,56862956374,M-MHT-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/56862956374,https://www.airlines-manager.com/aircraft/show/115493372,3:30,10:29,310,"$454,152.00","$415,897.00","$1,341.60","$59,555.66"
MIA - MHT,56880042806,M-MHT-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/56880042806,https://www.airlines-manager.com/aircraft/show/114912307,11:00,17:59,112,"$214,353.00","$189,156.00","$1,688.89","$27,086.78"
MIA - MHT,56886798290,M-MHT-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/56886798290,https://www.airlines-manager.com/aircraft/show/115493373,14:00,20:59,310,"$454,152.00","$415,897.00","$1,341.60","$59,555.66"
MIA - MHT,56898577580,M-MHT-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/56898577580,https://www.airlines-manager.com/aircraft/show/115493370,19:00,1:59,310,"$454,152.00","$415,897.00","$1,341.60","$59,555.66"
MIA - MKE,56862956190,M-MKE-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/56862956190,https://www.airlines-manager.com/aircraft/show/88494378,0:15,7:14,320,"448,362$","404,235$","$1,263.23","$57,885.68"
MIA - MKE,56869877634,M-MKE-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/56869877634,https://www.airlines-manager.com/aircraft/show/91806233,6:15,13:14,320,"448,362$","404,235$","$1,263.23","$57,885.68"
MIA - MKE,56880042802,M-MKE-CMH-5 B,A319-100,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/56880042802,https://www.airlines-manager.com/aircraft/show/110582842,11:00,17:59,198,"$338,895.00","$307,460.00","$1,552.83","$44,027.68"
MIA - MKE,56886798231,M-MKE-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/56886798231,https://www.airlines-manager.com/aircraft/show/88239556,14:00,20:59,320,"$448,362.00","$404,235.00","$1,263.23","$57,885.68"
MIA - MKE,56898577522,M-MKE-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/56898577522,https://www.airlines-manager.com/aircraft/show/88494374,18:45,1:44,320,"$448,362.00","$404,235.00","$1,263.23","$57,885.68"
MIA - MSN,56862956447,M-RAP-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/56862956447,https://www.airlines-manager.com/aircraft/show/116789625,1:45,8:59,320,"$451,863.00","$409,290.00","$1,279.03","$56,583.87"
MIA - MSN,56873155701,M-RAP-GRR-5,ERJ-175,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/56873155701,https://www.airlines-manager.com/aircraft/show/116042630,7:45,14:59,112,"$214,048.00","$188,966.00","$1,687.20","$26,124.33"
MIA - MSN,56880042579,M-RAP-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/56880042579,https://www.airlines-manager.com/aircraft/show/116789623,10:00,17:14,320,"$451,863.00","$409,290.00","$1,279.03","$56,583.87"
MIA - MSN,56892624188,M-RAP-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/56892624188,https://www.airlines-manager.com/aircraft/show/116789624,16:45,23:59,320,"$451,863.00","$409,290.00","$1,279.03","$56,583.87"
MIA - MSN,56898577524,M-RAP-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/56898577524,https://www.airlines-manager.com/aircraft/show/116789622,18:45,1:59,320,"$451,863.00","$409,290.00","$1,279.03","$56,583.87"
MIA - MSO,56873155693,M-FAT-MSO-2,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/56873155693,https://www.airlines-manager.com/aircraft/show/113101231,7:45,18:59,320,"$700,402.00","$641,423.00","$2,004.45","$57,099.97"
MIA - MSO,56880042754,M-FAT-MSO-3,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/56880042754,https://www.airlines-manager.com/aircraft/show/113101234,11:00,22:14,320,"$700,402.00","$641,423.00","$2,004.45","$57,099.97"
MIA - MSO,56901278139,M-FAT-MSO-4,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/56901278139,https://www.airlines-manager.com/aircraft/show/113101232,20:00,7:14,320,"$700,402.00","$641,423.00","$2,004.45","$57,099.97"
MIA - MSO,56903707172,M-FAT-MSO-1,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/56903707172,https://www.airlines-manager.com/aircraft/show/113101229,22:30,9:44,320,"$700,402.00","$641,423.00","$2,004.45","$57,099.97"
MIA - MSP,56862956480,M-JFK-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/56862956480,https://www.airlines-manager.com/aircraft/show/105308267,2:00,9:59,338,"$544,122.00","$495,440.00","$1,465.80","$62,059.29"
MIA - MSP,56862956481,M-JFK-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/56862956481,https://www.airlines-manager.com/aircraft/show/105308268,3:00,10:59,338,"$544,122.00","$495,440.00","$1,465.80","$62,059.29"
MIA - MSP,56880042539,M-JFK-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/56880042539,https://www.airlines-manager.com/aircraft/show/105308266,10:00,17:59,338,"$544,122.00","$495,440.00","$1,465.80","$62,059.29"
MIA - MSP,56886798192,M-JFK-PHX-6,ERJ-175,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/56886798192,https://www.airlines-manager.com/aircraft/show/82683137,13:00,20:59,112,"$236,852.00","$203,894.00","$1,820.48","$25,539.96"
MIA - MSP,56895754284,M-JFK-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/56895754284,https://www.airlines-manager.com/aircraft/show/105308265,18:15,2:14,338,"544,122$","495,440$","$1,465.80","$62,059.29"
MIA - MSP,56903707073,M-JFK-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/56903707073,https://www.airlines-manager.com/aircraft/show/105308264,21:45,5:44,338,"$544,122.00","$495,440.00","$1,465.80","$62,059.29"
MIA - MSY,56862956402,M-MKE-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/56862956402,https://www.airlines-manager.com/aircraft/show/91806233,1:30,6:14,320,"$301,171.00","$266,048.00",$831.40,"$56,207.32"
MIA - MSY,56869877584,M-MKE-CMH-5 B,A319-100,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/56869877584,https://www.airlines-manager.com/aircraft/show/110582842,5:30,10:14,198,"229,505$","205,012$","$1,035.41","$43,312.39"
MIA - MSY,56876734130,M-MKE-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/56876734130,https://www.airlines-manager.com/aircraft/show/88239556,8:30,13:14,320,"$301,171.00","$266,048.00",$831.40,"$56,207.32"
MIA - MSY,56886798232,M-MKE-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/56886798232,https://www.airlines-manager.com/aircraft/show/88494374,14:00,18:44,320,"$301,171.00","$266,048.00",$831.40,"$56,207.32"
MIA - MSY,56898577627,M-MKE-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/56898577627,https://www.airlines-manager.com/aircraft/show/88494378,19:30,0:14,320,"$301,171.00","$266,048.00",$831.40,"$56,207.32"
MIA - MTJ,56862956359,M-RDM-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50834908,https://www.airlines-manager.com/network/showflight/56862956359,https://www.airlines-manager.com/aircraft/show/88725597,1:15,10:29,310,"$579,705.00","$533,668.00","$1,721.51","$57,797.98"
MIA - MTJ,56880042594,M-RDM-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50834908,https://www.airlines-manager.com/network/showflight/56880042594,https://www.airlines-manager.com/aircraft/show/88725598,10:00,19:14,310,"$579,705.00","$533,668.00","$1,721.51","$57,797.98"
MIA - MTJ,56886798150,M-RDM-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50834908,https://www.airlines-manager.com/network/showflight/56886798150,https://www.airlines-manager.com/aircraft/show/88725599,13:00,22:14,310,"$579,705.00","$533,668.00","$1,721.51","$57,797.98"
MIA - MTJ,56903707146,M-RDM-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50834908,https://www.airlines-manager.com/network/showflight/56903707146,https://www.airlines-manager.com/aircraft/show/106766698,22:15,7:29,310,"579,705$","533,668$","$1,721.51","$57,797.98"
MIA - MYR,56873155698,M-MAF-ROC-4,A321-200,https://www.airlines-manager.com/network/showline/50834920,https://www.airlines-manager.com/network/showflight/56873155698,https://www.airlines-manager.com/aircraft/show/120933310,7:45,11:59,310,"$253,255.00","$226,311.00",$730.04,"$53,459.29"
MIA - MYR,56883365133,M-MAF-ROC-3,A321-200,https://www.airlines-manager.com/network/showline/50834920,https://www.airlines-manager.com/network/showflight/56883365133,https://www.airlines-manager.com/aircraft/show/120933309,12:00,16:14,310,"$253,255.00","$226,311.00",$730.04,"$53,459.29"
MIA - MYR,56886798297,M-MAF-ROC-2,A321-200,https://www.airlines-manager.com/network/showline/50834920,https://www.airlines-manager.com/network/showflight/56886798297,https://www.airlines-manager.com/aircraft/show/120933308,14:00,18:14,310,"$253,255.00","$226,311.00",$730.04,"$53,459.29"
MIA - MYR,56901278242,M-MAF-ROC-1,A321-200,https://www.airlines-manager.com/network/showline/50834920,https://www.airlines-manager.com/network/showflight/56901278242,https://www.airlines-manager.com/aircraft/show/120933307,20:45,0:59,310,"$253,255.00","$226,311.00",$730.04,"$53,459.29"
MIA - NAS,56862956520,M-PUJ-BDA-5 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/56862956520,https://www.airlines-manager.com/aircraft/show/104034461,2:15,4:59,228,"$79,351.00","$61,380.00",$269.21,"$22,456.10"
MIA - NAS,56873155652,M-PUJ-BDA-6 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/56873155652,https://www.airlines-manager.com/aircraft/show/99326789,7:30,10:14,228,"$79,351.00","$61,380.00",$269.21,"$22,456.10"
MIA - NAS,56880042636,M-PUJ-BDA-1 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/56880042636,https://www.airlines-manager.com/aircraft/show/104034457,10:00,12:44,228,"$79,351.00","$61,380.00",$269.21,"$22,456.10"
MIA - NAS,56889535224,M-PUJ-BDA-2 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/56889535224,https://www.airlines-manager.com/aircraft/show/104034458,14:15,16:59,228,"$79,351.00","$61,380.00",$269.21,"$22,456.10"
MIA - NAS,56895754328,M-PUJ-BDA-3 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/56895754328,https://www.airlines-manager.com/aircraft/show/104034459,18:30,21:14,228,"$79,351.00","$61,380.00",$269.21,"$22,456.10"
MIA - NAS,56903707118,M-PUJ-BDA-4 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/56903707118,https://www.airlines-manager.com/aircraft/show/104034460,22:00,0:44,228,"79,351$","61,380$",$269.21,"$22,456.10"
MIA - OAK,56862956308,M-OAK-SMF-5,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/56862956308,https://www.airlines-manager.com/aircraft/show/91198617,1:00,12:59,320,"741,020$","675,128$","$2,109.78","$56,338.92"
MIA - OAK,56880042735,M-OAK-SMF-1,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/56880042735,https://www.airlines-manager.com/aircraft/show/91198615,11:00,22:59,320,"$741,020.00","$675,128.00","$2,109.78","$56,338.92"
MIA - OAK,56886798106,M-OAK-SMF-2,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/56886798106,https://www.airlines-manager.com/aircraft/show/91198619,13:00,0:59,320,"741,020$","675,128$","$2,109.78","$56,338.92"
MIA - OAK,56889535277,M-OAK-SMF-3,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/56889535277,https://www.airlines-manager.com/aircraft/show/91198616,15:00,2:59,320,"$741,020.00","$675,128.00","$2,109.78","$56,338.92"
MIA - OAK,56906228724,M-OAK-SMF-4,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/56906228724,https://www.airlines-manager.com/aircraft/show/91198618,23:00,10:59,320,"741,020$","675,128$","$2,109.78","$56,338.92"
MIA - OKC,56862956465,M-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/56862956465,https://www.airlines-manager.com/aircraft/show/110883112,1:45,8:29,310,"$432,205.00","$394,574.00","$1,272.82","$58,600.10"
MIA - OKC,56866822822,M-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/56866822822,https://www.airlines-manager.com/aircraft/show/110883111,4:00,10:44,310,"432,205$","394,574$","$1,272.82","$58,600.10"
MIA - OKC,56880042655,M-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/56880042655,https://www.airlines-manager.com/aircraft/show/104353572,10:00,16:44,112,"$203,116.00","$178,405.00","$1,592.90","$26,495.79"
MIA - OKC,56886798178,M-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/56886798178,https://www.airlines-manager.com/aircraft/show/110883110,13:00,19:44,310,"$432,205.00","$394,574.00","$1,272.82","$58,600.10"
MIA - OKC,56889535251,M-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/56889535251,https://www.airlines-manager.com/aircraft/show/110883113,14:45,21:29,310,"$432,205.00","$394,574.00","$1,272.82","$58,600.10"
MIA - OMA,56862956539,M-BOI-BNA-1,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/56862956539,https://www.airlines-manager.com/aircraft/show/104133006,2:30,9:59,320,"$479,555.00","$434,477.00","$1,357.74","$58,059.29"
MIA - OMA,56869877645,M-BOI-BNA-4,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/56869877645,https://www.airlines-manager.com/aircraft/show/103775657,6:30,13:59,320,"$479,555.00","$434,477.00","$1,357.74","$58,059.29"
MIA - OMA,56880042572,M-BOI-BNA-3,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/56880042572,https://www.airlines-manager.com/aircraft/show/104020880,10:00,17:29,320,"$479,555.00","$434,477.00","$1,357.74","$58,059.29"
MIA - OMA,56889535332,M-BOI-BNA-2,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/56889535332,https://www.airlines-manager.com/aircraft/show/104022609,15:15,22:44,320,"$479,555.00","$434,477.00","$1,357.74","$58,059.29"
MIA - OMA,56895754189,M-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/56895754189,https://www.airlines-manager.com/aircraft/show/103534663,17:15,0:44,112,"$226,251.00","$199,652.00","$1,782.61","$26,679.55"
MIA - ONT,56862956225,M-RNO-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/56862956225,https://www.airlines-manager.com/aircraft/show/90489722,0:30,11:29,320,"694,458$","632,850$","$1,977.66","$57,619.12"
MIA - ONT,56862956226,M-RNO-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/56862956226,https://www.airlines-manager.com/aircraft/show/86238756,2:30,13:29,320,"$694,458.00","$632,850.00","$1,977.66","$57,619.12"
MIA - ONT,56880042734,M-RNO-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/56880042734,https://www.airlines-manager.com/aircraft/show/90489723,11:00,21:59,320,"$694,458.00","$632,850.00","$1,977.66","$57,619.12"
MIA - ONT,56886798300,M-RNO-ONT-5 B,A319-100,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/56886798300,https://www.airlines-manager.com/aircraft/show/105223010,14:00,0:59,198,"$521,256.00","$476,516.00","$2,406.65","$43,385.37"
MIA - ONT,56903707165,M-RNO-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/56903707165,https://www.airlines-manager.com/aircraft/show/86238755,22:30,9:29,320,"$694,458.00","$632,850.00","$1,977.66","$57,619.12"
MIA - ORD,56862956664,M-ORD-DFW-1,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/56862956664,https://www.airlines-manager.com/aircraft/show/91600935,3:15,9:59,310,"$425,664.00","$365,859.00","$1,180.19","$54,335.50"
MIA - ORD,56866822850,M-ORD-DFW-4,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/56866822850,https://www.airlines-manager.com/aircraft/show/91600938,4:15,10:59,310,"$425,664.00","$365,859.00","$1,180.19","$54,335.50"
MIA - ORD,56876734201,M-ORD-DFW-6,ERJ-175,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/56876734201,https://www.airlines-manager.com/aircraft/show/82543123,9:00,15:44,112,"$199,854.00","$161,877.00","$1,445.33","$24,041.14"
MIA - ORD,56880042775,M-ORD-DFW-5,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/56880042775,https://www.airlines-manager.com/aircraft/show/91600937,11:00,17:44,310,"$425,664.00","$365,859.00","$1,180.19","$54,335.50"
MIA - ORD,56889535249,M-ORD-DFW-3,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/56889535249,https://www.airlines-manager.com/aircraft/show/91600939,14:45,21:29,310,"$425,664.00","$365,859.00","$1,180.19","$54,335.50"
MIA - ORD,56889535250,M-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/56889535250,https://www.airlines-manager.com/aircraft/show/106339154,15:30,22:14,198,"$320,961.00","$273,065.00","$1,379.12","$40,554.21"
MIA - ORD,56901278238,M-ORD-DFW-2,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/56901278238,https://www.airlines-manager.com/aircraft/show/91600936,20:45,3:29,310,"$425,664.00","$365,859.00","$1,180.19","$54,335.50"
MIA - ORF,56862956220,M-MHT-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/56862956220,https://www.airlines-manager.com/aircraft/show/114912307,0:15,5:29,112,"$157,906.00","$137,933.00","$1,231.54","$26,356.62"
MIA - ORF,56862956221,M-MHT-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/56862956221,https://www.airlines-manager.com/aircraft/show/115493373,3:15,8:29,310,"$332,506.00","$301,556.00",$972.76,"$57,622.17"
MIA - ORF,56876734120,M-MHT-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/56876734120,https://www.airlines-manager.com/aircraft/show/115493370,8:15,13:29,310,"$332,506.00","$301,556.00",$972.76,"$57,622.17"
MIA - ORF,56889535307,M-MHT-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/56889535307,https://www.airlines-manager.com/aircraft/show/115493371,15:00,20:14,310,"$332,506.00","$301,556.00",$972.76,"$57,622.17"
MIA - ORF,56895754182,M-MHT-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/56895754182,https://www.airlines-manager.com/aircraft/show/115493372,17:15,22:29,310,"$332,506.00","$301,556.00",$972.76,"$57,622.17"
MIA - PDX,56880042553,M-PDX-DTW-1,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/56880042553,https://www.airlines-manager.com/aircraft/show/89943715,10:00,22:29,320,"$774,889.00","$704,572.00","$2,201.79","$56,441.01"
MIA - PDX,56886798102,M-PDX-DTW-3,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/56886798102,https://www.airlines-manager.com/aircraft/show/89943713,13:00,1:29,320,"$774,889.00","$704,572.00","$2,201.79","$56,441.01"
MIA - PDX,56886798103,M-PDX-DTW-4,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/56886798103,https://www.airlines-manager.com/aircraft/show/89943712,14:00,2:29,320,"$774,889.00","$704,572.00","$2,201.79","$56,441.01"
MIA - PDX,56898577628,M-PDX-DTW-2,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/56898577628,https://www.airlines-manager.com/aircraft/show/89943714,19:30,7:59,320,"$774,889.00","$704,572.00","$2,201.79","$56,441.01"
MIA - PDX,56906228769,M-PDX-DTW-5,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/56906228769,https://www.airlines-manager.com/aircraft/show/89943711,23:30,11:59,320,"$774,889.00","$704,572.00","$2,201.79","$56,441.01"
MIA - PHL,56866822816,M-ORD-DFW-3,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/56866822816,https://www.airlines-manager.com/aircraft/show/91600939,4:00,9:59,310,"$381,305.00","$339,530.00","$1,095.26","$56,745.96"
MIA - PHL,56866822817,M-ORD-DFW-5,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/56866822817,https://www.airlines-manager.com/aircraft/show/91600937,5:00,10:59,310,"$381,305.00","$339,530.00","$1,095.26","$56,745.96"
MIA - PHL,56880042603,M-ORD-DFW-2,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/56880042603,https://www.airlines-manager.com/aircraft/show/91600936,10:00,15:59,310,"$381,305.00","$339,530.00","$1,095.26","$56,745.96"
MIA - PHL,56892624173,M-ORD-DFW-1,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/56892624173,https://www.airlines-manager.com/aircraft/show/91600935,16:30,22:29,310,"$381,305.00","$339,530.00","$1,095.26","$56,745.96"
MIA - PHL,56895754206,M-ORD-DFW-4,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/56895754206,https://www.airlines-manager.com/aircraft/show/91600938,17:30,23:29,310,"$381,305.00","$339,530.00","$1,095.26","$56,745.96"
MIA - PHL,56903707159,M-ORD-DFW-6,ERJ-175,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/56903707159,https://www.airlines-manager.com/aircraft/show/82543123,22:15,4:14,112,"$180,118.00","$153,280.00","$1,368.57","$25,617.83"
MIA - PHX,56862956175,M-JFK-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/56862956175,https://www.airlines-manager.com/aircraft/show/105308266,0:15,9:59,338,"$673,510.00","$614,805.00","$1,818.95","$63,164.90"
MIA - PHX,56862956176,M-JFK-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/56862956176,https://www.airlines-manager.com/aircraft/show/105308265,2:15,11:59,338,"$673,510.00","$614,805.00","$1,818.95","$63,164.90"
MIA - PHX,56880042696,M-JFK-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/56880042696,https://www.airlines-manager.com/aircraft/show/105308268,11:00,20:44,338,"$673,510.00","$614,805.00","$1,818.95","$63,164.90"
MIA - PHX,56883365080,M-JFK-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/56883365080,https://www.airlines-manager.com/aircraft/show/105308264,12:00,21:44,338,"$673,510.00","$614,805.00","$1,818.95","$63,164.90"
MIA - PHX,56892624146,M-JFK-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/56892624146,https://www.airlines-manager.com/aircraft/show/105308267,16:15,1:59,338,"$673,510.00","$614,805.00","$1,818.95","$63,164.90"
MIA - PHX,56901278276,M-JFK-PHX-6,ERJ-175,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/56901278276,https://www.airlines-manager.com/aircraft/show/82683137,21:00,6:44,112,"$291,110.00","$250,973.00","$2,240.83","$25,784.90"
MIA - PIT,56862956658,M-AUS-PIT-3,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/56862956658,https://www.airlines-manager.com/aircraft/show/99920624,3:15,9:14,320,"$382,895.00","$341,219.00","$1,066.31","$57,028.25"
MIA - PIT,56880042567,M-AUS-PIT-2,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/56880042567,https://www.airlines-manager.com/aircraft/show/99920625,10:00,15:59,320,"$382,895.00","$341,219.00","$1,066.31","$57,028.25"
MIA - PIT,56892624168,M-AUS-PIT-1,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/56892624168,https://www.airlines-manager.com/aircraft/show/99920626,16:30,22:29,320,"$382,895.00","$341,219.00","$1,066.31","$57,028.25"
MIA - PIT,56901278218,M-AUS-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/56901278218,https://www.airlines-manager.com/aircraft/show/82323689,20:30,2:29,112,"$180,854.00","$157,058.00","$1,402.30","$26,249.25"
MIA - PIT,56901278219,M-AUS-PIT-4,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/56901278219,https://www.airlines-manager.com/aircraft/show/99920623,21:15,3:14,320,"$382,895.00","$341,219.00","$1,066.31","$57,028.25"
MIA - PLS,56862956668,M-PUJ-BDA-6 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/56862956668,https://www.airlines-manager.com/aircraft/show/99326789,3:15,7:29,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - PLS,56866822939,M-PUJ-BDA-4 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/56866822939,https://www.airlines-manager.com/aircraft/show/104034460,5:00,9:14,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - PLS,56880042637,M-PUJ-BDA-2 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/56880042637,https://www.airlines-manager.com/aircraft/show/104034458,10:00,14:14,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - PLS,56889535225,M-PUJ-BDA-3 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/56889535225,https://www.airlines-manager.com/aircraft/show/104034459,14:15,18:29,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - PLS,56892624235,M-PUJ-BDA-1 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/56892624235,https://www.airlines-manager.com/aircraft/show/104034457,17:00,21:14,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - PLS,56903707119,M-PUJ-BDA-5 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/56903707119,https://www.airlines-manager.com/aircraft/show/104034461,22:00,2:14,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - POS,56883365158,M-84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/56883365158,https://www.airlines-manager.com/aircraft/show/106676225,12:30,20:29,962,"$1,341,807.00","$1,224,700.00","$1,273.08","$153,407.10"
MIA - POS,56892624143,M-84B-6 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/56892624143,https://www.airlines-manager.com/aircraft/show/106676230,16:00,23:59,734,"$1,111,138.00","$1,006,542.00","$1,371.31","$126,080.42"
MIA - PSP,56862956486,M-PSP-BFF-5,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/56862956486,https://www.airlines-manager.com/aircraft/show/116789630,2:00,12:44,320,"$662,540.00","$604,842.00","$1,890.13","$56,351.74"
MIA - PSP,56880042583,M-PSP-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/56880042583,https://www.airlines-manager.com/aircraft/show/116789631,10:00,20:44,320,"$662,540.00","$604,842.00","$1,890.13","$56,351.74"
MIA - PSP,56886798254,M-PSP-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/56886798254,https://www.airlines-manager.com/aircraft/show/116789634,14:00,0:44,320,"$662,540.00","$604,842.00","$1,890.13","$56,351.74"
MIA - PSP,56889535219,M-PSP-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/56889535219,https://www.airlines-manager.com/aircraft/show/116789632,14:15,0:59,320,"$662,540.00","$604,842.00","$1,890.13","$56,351.74"
MIA - PSP,56906228725,M-PSP-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/56906228725,https://www.airlines-manager.com/aircraft/show/116789633,23:00,9:44,243,"$563,441.00","$510,362.00","$2,100.26","$47,549.25"
MIA - PUJ,56862956687,M-PUJ-BDA-2 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/56862956687,https://www.airlines-manager.com/aircraft/show/104034458,3:30,9:14,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PUJ,56880042641,M-PUJ-BDA-5 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/56880042641,https://www.airlines-manager.com/aircraft/show/104034461,10:00,15:44,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PUJ,56892624160,M-PUJ-BDA-4 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/56892624160,https://www.airlines-manager.com/aircraft/show/104034460,16:15,21:59,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PUJ,56895754187,M-PUJ-BDA-6 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/56895754187,https://www.airlines-manager.com/aircraft/show/99326789,17:15,22:59,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PUJ,56901278295,M-PUJ-BDA-1 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/56901278295,https://www.airlines-manager.com/aircraft/show/104034457,21:15,2:59,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PUJ,56903707117,M-PUJ-BDA-3 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/56903707117,https://www.airlines-manager.com/aircraft/show/104034459,22:00,3:44,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PVD,56862956370,M-BUR-PVD-3,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/56862956370,https://www.airlines-manager.com/aircraft/show/108834805,1:15,7:59,310,"$427,684.00","$391,455.00","$1,262.76","$58,136.88"
MIA - PVD,56873155632,M-BUR-PVD-5 B,A319-100,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/56873155632,https://www.airlines-manager.com/aircraft/show/108834807,7:15,13:59,198,"$322,661.00","$293,626.00","$1,482.96","$43,607.82"
MIA - PVD,56880042789,M-BUR-PVD-2,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/56880042789,https://www.airlines-manager.com/aircraft/show/108834804,11:00,17:44,310,"$427,684.00","$391,455.00","$1,262.76","$58,136.88"
MIA - PVD,56892624229,M-BUR-PVD-4,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/56892624229,https://www.airlines-manager.com/aircraft/show/108834806,17:00,23:44,310,"$427,684.00","$391,455.00","$1,262.76","$58,136.88"
MIA - PVD,56903707148,M-BUR-PVD-1,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/56903707148,https://www.airlines-manager.com/aircraft/show/108834803,22:15,4:59,310,"$427,684.00","$391,455.00","$1,262.76","$58,136.88"
MIA - PWM,56873155644,M-SDF-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/56873155644,https://www.airlines-manager.com/aircraft/show/94886629,7:30,14:59,310,"$468,156.00","$430,232.00","$1,387.85","$57,492.03"
MIA - PWM,56886798265,M-SDF-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/56886798265,https://www.airlines-manager.com/aircraft/show/94886626,14:00,21:29,310,"$468,156.00","$430,232.00","$1,387.85","$57,492.03"
MIA - PWM,56898577535,M-SDF-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/56898577535,https://www.airlines-manager.com/aircraft/show/96692674,18:45,2:14,310,"$468,156.00","$430,232.00","$1,387.85","$57,492.03"
MIA - PWM,56901278244,M-SDF-PWM-5,ERJ-175,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/56901278244,https://www.airlines-manager.com/aircraft/show/105601657,20:45,4:14,112,"$220,894.00","$195,774.00","$1,747.98","$26,161.34"
MIA - PWM,56906228803,M-SDF-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/56906228803,https://www.airlines-manager.com/aircraft/show/94886625,23:45,7:14,310,"$468,156.00","$430,232.00","$1,387.85","$57,492.03"
MIA - RAP,56862956134,M-RAP-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/56862956134,https://www.airlines-manager.com/aircraft/show/116789624,0:00,8:59,320,"$563,858.00","$513,914.00","$1,605.98","$57,207.50"
MIA - RAP,56862956135,M-RAP-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/56862956135,https://www.airlines-manager.com/aircraft/show/116789622,2:00,10:59,320,"$563,858.00","$513,914.00","$1,605.98","$57,207.50"
MIA - RAP,56880042581,M-RAP-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/56880042581,https://www.airlines-manager.com/aircraft/show/116789625,10:00,18:59,320,"$563,858.00","$513,914.00","$1,605.98","$57,207.50"
MIA - RAP,56889535328,M-RAP-GRR-5,ERJ-175,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/56889535328,https://www.airlines-manager.com/aircraft/show/116042630,15:00,23:59,112,"$265,771.00","$235,577.00","$2,103.37","$26,223.78"
MIA - RAP,56895754174,M-RAP-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/56895754174,https://www.airlines-manager.com/aircraft/show/116789623,17:15,2:14,320,"$563,858.00","$513,914.00","$1,605.98","$57,207.50"
MIA - RDM,56880042620,M-RDM-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50834907,https://www.airlines-manager.com/network/showflight/56880042620,https://www.airlines-manager.com/aircraft/show/106766698,10:00,22:14,310,"$750,430.00","$694,304.00","$2,239.69","$56,755.10"
MIA - RDM,56886798149,M-RDM-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50834907,https://www.airlines-manager.com/network/showflight/56886798149,https://www.airlines-manager.com/aircraft/show/88725597,13:00,1:14,310,"$750,430.00","$694,304.00","$2,239.69","$56,755.10"
MIA - RDM,56898577601,M-RDM-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50834907,https://www.airlines-manager.com/network/showflight/56898577601,https://www.airlines-manager.com/aircraft/show/88725598,19:15,7:29,310,"750,430$","694,304$","$2,239.69","$56,755.10"
MIA - RDM,56903707143,M-RDM-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50834907,https://www.airlines-manager.com/network/showflight/56903707143,https://www.airlines-manager.com/aircraft/show/88725599,22:15,10:29,310,"750,430$","694,304$","$2,239.69","$56,755.10"
MIA - RDU,56866822885,M-AUS-PIT-1,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/56866822885,https://www.airlines-manager.com/aircraft/show/99920626,4:30,9:14,320,"310,630$","274,454$",$857.67,"$57,983.24"
MIA - RDU,56876734163,M-AUS-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/56876734163,https://www.airlines-manager.com/aircraft/show/82323689,8:30,13:14,112,"147,838$","127,705$","$1,140.22","$26,979.93"
MIA - RDU,56880042565,M-AUS-PIT-4,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/56880042565,https://www.airlines-manager.com/aircraft/show/99920623,10:00,14:44,320,"$310,630.00","$274,454.00",$857.67,"$57,983.24"
MIA - RDU,56892624105,M-AUS-PIT-3,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/56892624105,https://www.airlines-manager.com/aircraft/show/99920624,16:00,20:44,320,"$310,630.00","$274,454.00",$857.67,"$57,983.24"
MIA - RDU,56903707101,M-AUS-PIT-2,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/56903707101,https://www.airlines-manager.com/aircraft/show/99920625,22:00,2:44,320,"$310,630.00","$274,454.00",$857.67,"$57,983.24"
MIA - RIC,56876734146,M-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/56876734146,https://www.airlines-manager.com/aircraft/show/110883112,8:30,13:44,310,"$336,966.00","$305,684.00",$986.08,"$58,410.96"
MIA - RIC,56880042795,M-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/56880042795,https://www.airlines-manager.com/aircraft/show/110883111,11:00,16:14,310,"$336,966.00","$305,684.00",$986.08,"$58,410.96"
MIA - RIC,56892624196,M-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/56892624196,https://www.airlines-manager.com/aircraft/show/104353572,16:45,21:59,112,"$160,060.00","$139,846.00","$1,248.63","$26,722.17"
MIA - RIC,56898577668,M-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/56898577668,https://www.airlines-manager.com/aircraft/show/110883110,19:45,0:59,310,"$336,966.00","$305,684.00",$986.08,"$58,410.96"
MIA - RIC,56903707068,M-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/56903707068,https://www.airlines-manager.com/aircraft/show/110883113,21:30,2:44,310,"$336,966.00","$305,684.00",$986.08,"$58,410.96"
MIA - RNO,56862956332,M-RNO-ONT-5 B,A319-100,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/56862956332,https://www.airlines-manager.com/aircraft/show/105223010,1:00,12:44,198,"$546,103.00","$500,266.00","$2,526.60","$42,636.31"
MIA - RNO,56880042730,M-RNO-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/56880042730,https://www.airlines-manager.com/aircraft/show/86238755,11:00,22:29,320,"$725,284.00","$662,433.00","$2,070.10","$57,686.47"
MIA - RNO,56886798104,M-RNO-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/56886798104,https://www.airlines-manager.com/aircraft/show/90489722,13:00,0:29,320,"$725,284.00","$662,433.00","$2,070.10","$57,686.47"
MIA - RNO,56889535273,M-RNO-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/56889535273,https://www.airlines-manager.com/aircraft/show/86238756,15:00,2:29,320,"$725,284.00","$662,433.00","$2,070.10","$57,686.47"
MIA - RNO,56903707100,M-RNO-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/56903707100,https://www.airlines-manager.com/aircraft/show/90489723,22:00,9:29,320,"$725,284.00","$662,433.00","$2,070.10","$57,686.47"
MIA - ROC,56862956468,M-MAF-ROC-2,A321-200,https://www.airlines-manager.com/network/showline/50424914,https://www.airlines-manager.com/network/showflight/56862956468,https://www.airlines-manager.com/aircraft/show/120933308,1:45,8:29,310,"$427,406.00","$391,117.00","$1,261.67","$58,086.68"
MIA - ROC,56880042634,M-MAF-ROC-1,A321-200,https://www.airlines-manager.com/network/showline/50424914,https://www.airlines-manager.com/network/showflight/56880042634,https://www.airlines-manager.com/aircraft/show/120933307,10:00,16:44,310,"$427,406.00","$391,117.00","$1,261.67","$58,086.68"
MIA - ROC,56895754212,M-MAF-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50424914,https://www.airlines-manager.com/network/showflight/56895754212,https://www.airlines-manager.com/aircraft/show/92137503,17:30,0:14,112,"$201,000.00","$177,122.00","$1,581.45","$26,305.25"
MIA - ROC,56898577642,M-MAF-ROC-4,A321-200,https://www.airlines-manager.com/network/showline/50424914,https://www.airlines-manager.com/network/showflight/56898577642,https://www.airlines-manager.com/aircraft/show/120933310,19:30,2:14,310,"$427,406.00","$391,117.00","$1,261.67","$58,086.68"
MIA - ROC,56906228811,M-MAF-ROC-3,A321-200,https://www.airlines-manager.com/network/showline/50424914,https://www.airlines-manager.com/network/showflight/56906228811,https://www.airlines-manager.com/aircraft/show/120933309,23:45,6:29,310,"$427,406.00","$391,117.00","$1,261.67","$58,086.68"
MIA - RSW,56866822824,M-ANU-SXM-3 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/56866822824,https://www.airlines-manager.com/aircraft/show/110114297,4:00,6:29,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - RSW,56876734212,M-ANU-SXM-1 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/56876734212,https://www.airlines-manager.com/aircraft/show/110114295,9:15,11:44,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - RSW,56880042665,M-ANU-SXM-2 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/56880042665,https://www.airlines-manager.com/aircraft/show/110114296,10:15,12:44,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - RSW,56886798303,M-ANU-SXM-6 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/56886798303,https://www.airlines-manager.com/aircraft/show/110114300,14:00,16:29,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - RSW,56901278272,M-ANU-SXM-5 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/56901278272,https://www.airlines-manager.com/aircraft/show/110114299,21:00,23:29,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - RSW,56906228739,M-ANU-SXM-4 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/56906228739,https://www.airlines-manager.com/aircraft/show/110114298,23:00,1:29,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - SAN,56862956170,M-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/56862956170,https://www.airlines-manager.com/aircraft/show/120519142,0:00,10:44,0,"$190,591.00","$116,070.00",$0.00,"$10,813.98"
MIA - SAN,56862956171,M-BWI-YYZ-2,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/56862956171,https://www.airlines-manager.com/aircraft/show/92153440,1:45,12:44,310,"$680,679.00","$623,880.00","$2,012.52","$56,802.43"
MIA - SAN,56880042605,M-BWI-YYZ-3,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/56880042605,https://www.airlines-manager.com/aircraft/show/92153441,10:00,20:59,310,"$680,679.00","$623,880.00","$2,012.52","$56,802.43"
MIA - SAN,56883365138,M-BWI-YYZ-6 B,A319-100,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/56883365138,https://www.airlines-manager.com/aircraft/show/120519717,12:00,22:59,198,"$511,028.00","$465,491.00","$2,350.96","$42,381.58"
MIA - SAN,56892624223,M-BWI-YYZ-4,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/56892624223,https://www.airlines-manager.com/aircraft/show/92153442,17:00,3:59,310,"$680,679.00","$623,880.00","$2,012.52","$56,802.43"
MIA - SAN,56898577572,M-BWI-YYZ-5,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/56898577572,https://www.airlines-manager.com/aircraft/show/92153439,19:00,5:59,310,"$680,679.00","$623,880.00","$2,012.52","$56,802.43"
MIA - SAN,56903707205,M-BWI-YYZ-1,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/56903707205,https://www.airlines-manager.com/aircraft/show/92153443,22:45,9:44,310,"$664,966.00","$611,888.00","$1,973.83","$55,710.59"
MIA - SAT,56862956659,M-BDL-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/56862956659,https://www.airlines-manager.com/aircraft/show/107763562,3:15,9:44,320,"$412,163.00","$370,879.00","$1,159.00","$57,204.99"
MIA - SAT,56880042750,M-BDL-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/56880042750,https://www.airlines-manager.com/aircraft/show/107763565,11:00,17:29,320,"$412,163.00","$370,879.00","$1,159.00","$57,204.99"
MIA - SAT,56889535254,M-BDL-SAT-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/56889535254,https://www.airlines-manager.com/aircraft/show/107467213,14:45,21:14,112,"$194,327.00","$170,361.00","$1,521.08","$26,276.76"
MIA - SAT,56901278206,M-BDL-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/56901278206,https://www.airlines-manager.com/aircraft/show/107763561,20:30,2:59,320,"$412,163.00","$370,879.00","$1,159.00","$57,204.99"
MIA - SAT,56901278207,M-BDL-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/56901278207,https://www.airlines-manager.com/aircraft/show/107763566,20:45,3:14,320,"$412,163.00","$370,879.00","$1,159.00","$57,204.99"
MIA - SAV,56862956212,M-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/56862956212,https://www.airlines-manager.com/aircraft/show/110883111,0:15,3:59,310,"$215,345.00","$190,074.00",$613.14,"$50,912.68"
MIA - SAV,56869877632,M-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/56869877632,https://www.airlines-manager.com/aircraft/show/104353572,6:00,9:44,112,"$100,516.00","$84,583.00",$755.21,"$22,656.16"
MIA - SAV,56876734194,M-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/56876734194,https://www.airlines-manager.com/aircraft/show/110883110,9:00,12:44,310,"$215,345.00","$190,074.00",$613.14,"$50,912.68"
MIA - SAV,56880042796,M-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/56880042796,https://www.airlines-manager.com/aircraft/show/110883113,11:00,14:44,310,"$215,345.00","$190,074.00",$613.14,"$50,912.68"
MIA - SAV,56903707111,M-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/56903707111,https://www.airlines-manager.com/aircraft/show/110883112,22:00,1:44,271,"$199,390.00","$174,590.00",$644.24,"$46,765.18"
MIA - SDF,56862956283,M-SDF-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/56862956283,https://www.airlines-manager.com/aircraft/show/94886629,0:45,6:29,310,"$357,909.00","$323,543.00","$1,043.69","$56,431.92"
MIA - SDF,56876734115,M-SDF-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/56876734115,https://www.airlines-manager.com/aircraft/show/94886626,8:15,13:59,310,"$357,909.00","$323,543.00","$1,043.69","$56,431.92"
MIA - SDF,56886798157,M-SDF-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/56886798157,https://www.airlines-manager.com/aircraft/show/96692674,13:00,18:44,310,"$357,909.00","$323,543.00","$1,043.69","$56,431.92"
MIA - SDF,56889535325,M-SDF-PWM-5,ERJ-175,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/56889535325,https://www.airlines-manager.com/aircraft/show/105601657,15:00,20:44,112,"$169,578.00","$147,365.00","$1,315.76","$25,703.20"
MIA - SDF,56895754261,M-SDF-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/56895754261,https://www.airlines-manager.com/aircraft/show/94886625,18:00,23:44,310,"$357,909.00","$323,543.00","$1,043.69","$56,431.92"
MIA - SEA,56862956385,M-LAS-SEA-3,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/56862956385,https://www.airlines-manager.com/aircraft/show/105093927,1:30,13:59,338,"$834,881.00","$766,832.00","$2,268.73","$61,428.46"
MIA - SEA,56880042538,M-LAS-SEA-4,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/56880042538,https://www.airlines-manager.com/aircraft/show/105093928,10:00,22:29,338,"$834,881.00","$766,832.00","$2,268.73","$61,428.46"
MIA - SEA,56886798068,M-LAS-SEA-5,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/56886798068,https://www.airlines-manager.com/aircraft/show/105093929,13:00,1:29,338,"$834,881.00","$766,832.00","$2,268.73","$61,428.46"
MIA - SEA,56901278200,M-LAS-SEA-1,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/56901278200,https://www.airlines-manager.com/aircraft/show/105093925,20:30,8:59,338,"$834,881.00","$766,832.00","$2,268.73","$61,428.46"
MIA - SEA,56903707182,M-LAS-SEA-6 B,A319-100,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/56903707182,https://www.airlines-manager.com/aircraft/show/113251304,22:30,11:14,198,"578,175$","520,898$","$2,630.80","$40,908.22"
MIA - SEA,56906228767,M-LAS-SEA-2,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/56906228767,https://www.airlines-manager.com/aircraft/show/105093926,23:30,11:59,338,"$834,881.00","$766,832.00","$2,268.73","$61,428.46"
MIA - SJC,56862956445,M-SJC-YYC-5,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/56862956445,https://www.airlines-manager.com/aircraft/show/107763563,1:45,13:44,320,"$734,893.00","$668,726.00","$2,089.77","$55,804.67"
MIA - SJC,56883365100,M-SJC-YYC-1,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/56883365100,https://www.airlines-manager.com/aircraft/show/107763569,12:00,23:59,320,"$734,893.00","$668,726.00","$2,089.77","$55,804.67"
MIA - SJC,56886798246,M-SJC-YYC-2,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/56886798246,https://www.airlines-manager.com/aircraft/show/107763568,14:00,1:59,320,"$734,893.00","$668,726.00","$2,089.77","$55,804.67"
MIA - SJC,56892624110,M-SJC-YYC-3,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/56892624110,https://www.airlines-manager.com/aircraft/show/107763567,16:00,3:59,320,"734,893$","668,726$","$2,089.77","$55,804.67"
MIA - SJC,56906228799,M-SJC-YYC-4,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/56906228799,https://www.airlines-manager.com/aircraft/show/107763564,23:45,11:44,320,"734,893$","668,726$","$2,089.77","$55,804.67"
MIA - SJU,56862956669,M-SJU-BOS-6 B,A319-100,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/56862956669,https://www.airlines-manager.com/aircraft/show/110582841,3:15,9:29,198,"$287,737.00","$258,672.00","$1,306.42","$41,498.18"
MIA - SJU,56880042664,M-SJU-BOS-2,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/56880042664,https://www.airlines-manager.com/aircraft/show/91352062,10:15,16:29,310,"$381,512.00","$345,237.00","$1,113.67","$55,385.61"
MIA - SJU,56883365151,M-SJU-BOS-3,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/56883365151,https://www.airlines-manager.com/aircraft/show/91352061,12:15,18:29,310,"$381,512.00","$345,237.00","$1,113.67","$55,385.61"
MIA - SJU,56895754298,M-SJU-BOS-4,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/56895754298,https://www.airlines-manager.com/aircraft/show/91352060,18:15,0:29,310,"$381,512.00","$345,237.00","$1,113.67","$55,385.61"
MIA - SJU,56898577612,M-SJU-BOS-5,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/56898577612,https://www.airlines-manager.com/aircraft/show/91352059,19:15,1:29,310,"381,512$","345,237$","$1,113.67","$55,385.61"
MIA - SJU,56903707204,M-SJU-BOS-1,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/56903707204,https://www.airlines-manager.com/aircraft/show/91352063,22:45,4:59,274,"342,154$","307,168$","$1,121.05","$49,278.29"
MIA - SKB,56862956425,M-ANU-SXM-4 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/56862956425,https://www.airlines-manager.com/aircraft/show/110114298,1:30,8:29,228,"345,078$","315,549$","$1,383.99","$45,186.01"
MIA - SKB,56862956426,M-ANU-SXM-1 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/56862956426,https://www.airlines-manager.com/aircraft/show/110114295,2:15,9:14,228,"$345,078.00","$315,549.00","$1,383.99","$45,186.01"
MIA - SKB,56862956427,M-ANU-SXM-2 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/56862956427,https://www.airlines-manager.com/aircraft/show/110114296,3:15,10:14,228,"345,078$","315,549$","$1,383.99","$45,186.01"
MIA - SKB,56873155593,M-ANU-SXM-6 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/56873155593,https://www.airlines-manager.com/aircraft/show/110114300,6:45,13:44,228,"$345,078.00","$315,549.00","$1,383.99","$45,186.01"
MIA - SKB,56886798302,M-ANU-SXM-5 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/56886798302,https://www.airlines-manager.com/aircraft/show/110114299,14:00,20:59,228,"$345,078.00","$315,549.00","$1,383.99","$45,186.01"
MIA - SKB,56901278271,M-ANU-SXM-3 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/56901278271,https://www.airlines-manager.com/aircraft/show/110114297,21:00,3:59,228,"$345,078.00","$315,549.00","$1,383.99","$45,186.01"
MIA - SLC,56862956141,M-SJU-BOS-2,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/56862956141,https://www.airlines-manager.com/aircraft/show/91352062,0:00,10:14,310,"$644,121.00","$586,535.00","$1,892.05","$57,316.12"
MIA - SLC,56862956142,M-SJU-BOS-4,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/56862956142,https://www.airlines-manager.com/aircraft/show/91352060,1:00,11:14,310,"$644,121.00","$586,535.00","$1,892.05","$57,316.12"
MIA - SLC,56862956143,M-SJU-BOS-3,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/56862956143,https://www.airlines-manager.com/aircraft/show/91352061,2:00,12:14,310,"$644,121.00","$586,535.00","$1,892.05","$57,316.12"
MIA - SLC,56876734191,M-SJU-BOS-5,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/56876734191,https://www.airlines-manager.com/aircraft/show/91352059,9:00,19:14,310,"$644,121.00","$586,535.00","$1,892.05","$57,316.12"
MIA - SLC,56880042649,M-SJU-BOS-6 B,A319-100,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/56880042649,https://www.airlines-manager.com/aircraft/show/110582841,10:00,20:14,198,"$483,924.00","$437,765.00","$2,210.93","$42,778.34"
MIA - SLC,56883365119,M-SJU-BOS-1,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/56883365119,https://www.airlines-manager.com/aircraft/show/91352063,12:00,22:14,310,"$644,121.00","$586,535.00","$1,892.05","$57,316.12"
MIA - SMF,56862956309,M-OAK-SMF-2,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/56862956309,https://www.airlines-manager.com/aircraft/show/91198619,1:00,12:59,320,"735,091$","671,059$","$2,097.06","$55,999.36"
MIA - SMF,56862956310,M-OAK-SMF-3,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/56862956310,https://www.airlines-manager.com/aircraft/show/91198616,3:00,14:59,320,"$735,091.00","$671,059.00","$2,097.06","$55,999.36"
MIA - SMF,56880042736,M-OAK-SMF-4,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/56880042736,https://www.airlines-manager.com/aircraft/show/91198618,11:00,22:59,320,"735,091$","671,059$","$2,097.06","$55,999.36"
MIA - SMF,56886798105,M-OAK-SMF-5,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/56886798105,https://www.airlines-manager.com/aircraft/show/91198617,13:00,0:59,320,"$735,091.00","$671,059.00","$2,097.06","$55,999.36"
MIA - SMF,56906228723,M-OAK-SMF-1,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/56906228723,https://www.airlines-manager.com/aircraft/show/91198615,23:00,10:59,320,"$735,091.00","$671,059.00","$2,097.06","$55,999.36"
MIA - STL,56862956403,M-ELP-MCI-1,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/56862956403,https://www.airlines-manager.com/aircraft/show/91806234,1:30,7:44,320,"$395,052.00","$351,479.00","$1,098.37","$56,387.01"
MIA - STL,56862956404,M-ELP-MCI-5 B,A319-100,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/56862956404,https://www.airlines-manager.com/aircraft/show/105093924,2:00,8:14,198,"$298,871.00","$268,112.00","$1,354.10","$43,012.62"
MIA - STL,56876734131,M-ELP-MCI-4,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/56876734131,https://www.airlines-manager.com/aircraft/show/91806231,8:30,14:44,320,"$395,052.00","$351,479.00","$1,098.37","$56,387.01"
MIA - STL,56880042557,M-ELP-MCI-3,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/56880042557,https://www.airlines-manager.com/aircraft/show/91806232,10:00,16:14,320,"$395,052.00","$351,479.00","$1,098.37","$56,387.01"
MIA - STL,56892624213,M-ELP-MCI-2,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/56892624213,https://www.airlines-manager.com/aircraft/show/91806235,17:00,23:14,320,"$395,052.00","$351,479.00","$1,098.37","$56,387.01"
MIA - SXM,56873155592,M-ANU-SXM-5 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/56873155592,https://www.airlines-manager.com/aircraft/show/110114299,6:45,13:44,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SXM,56886798301,M-ANU-SXM-3 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/56886798301,https://www.airlines-manager.com/aircraft/show/110114297,14:00,20:59,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SXM,56892624137,M-ANU-SXM-4 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/56892624137,https://www.airlines-manager.com/aircraft/show/110114298,16:00,22:59,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SXM,56898577618,M-ANU-SXM-1 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/56898577618,https://www.airlines-manager.com/aircraft/show/110114295,19:15,2:14,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SXM,56901278191,M-ANU-SXM-2 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/56901278191,https://www.airlines-manager.com/aircraft/show/110114296,20:15,3:14,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SXM,56906228813,M-ANU-SXM-6 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/56906228813,https://www.airlines-manager.com/aircraft/show/110114300,23:45,6:44,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SYR,56862956542,M-EUG-SYR-1,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/56862956542,https://www.airlines-manager.com/aircraft/show/119652483,2:30,9:14,320,"433,063$","391,646$","$1,223.89","$58,165.25"
MIA - SYR,56873155626,M-EUG-SYR-3,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/56873155626,https://www.airlines-manager.com/aircraft/show/119652481,7:15,13:59,320,"$433,063.00","$391,646.00","$1,223.89","$58,165.25"
MIA - SYR,56883365115,M-EUG-SYR-2,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/56883365115,https://www.airlines-manager.com/aircraft/show/119652482,12:00,18:44,320,"$433,063.00","$391,646.00","$1,223.89","$58,165.25"
MIA - SYR,56886798259,M-EUG-SYR-4,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/56886798259,https://www.airlines-manager.com/aircraft/show/119652480,14:00,20:44,320,"$433,063.00","$391,646.00","$1,223.89","$58,165.25"
MIA - TPA,56866822936,M-BUR-PVD-1,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/56866822936,https://www.airlines-manager.com/aircraft/show/108834803,5:00,7:59,310,"$128,129.00","$102,113.00",$329.40,"$34,227.82"
MIA - TPA,56880042790,M-BUR-PVD-3,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/56880042790,https://www.airlines-manager.com/aircraft/show/108834805,11:00,13:59,310,"$128,129.00","$102,113.00",$329.40,"$34,227.82"
MIA - TPA,56892624238,M-BUR-PVD-5 B,A319-100,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/56892624238,https://www.airlines-manager.com/aircraft/show/108834807,17:00,19:59,198,"$95,593.00","$74,772.00",$377.64,"$25,063.24"
MIA - TPA,56895754235,M-BUR-PVD-2,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/56895754235,https://www.airlines-manager.com/aircraft/show/108834804,17:45,20:44,310,"$128,129.00","$102,113.00",$329.40,"$34,227.82"
MIA - TPA,56906228810,M-BUR-PVD-4,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/56906228810,https://www.airlines-manager.com/aircraft/show/108834806,23:45,2:44,310,"$128,129.00","$102,113.00",$329.40,"$34,227.82"
MIA - TUL,56862956272,M-FAR-TUL-2,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/56862956272,https://www.airlines-manager.com/aircraft/show/110883160,0:45,7:29,320,"$417,622.00","$376,181.00","$1,175.57","$55,868.47"
MIA - TUL,56862956273,M-FAR-TUL-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/56862956273,https://www.airlines-manager.com/aircraft/show/87169421,3:00,9:44,112,"$196,831.00","$172,707.00","$1,542.03","$25,649.55"
MIA - TUL,56880042753,M-FAR-TUL-3,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/56880042753,https://www.airlines-manager.com/aircraft/show/110883161,11:00,17:44,320,"$417,622.00","$376,181.00","$1,175.57","$55,868.47"
MIA - TUL,56892624112,M-FAR-TUL-4,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/56892624112,https://www.airlines-manager.com/aircraft/show/110883162,16:00,22:44,320,"$417,622.00","$376,181.00","$1,175.57","$55,868.47"
MIA - TUL,56898577656,M-FAR-TUL-1,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/56898577656,https://www.airlines-manager.com/aircraft/show/110883159,19:45,2:29,320,"$417,622.00","$376,181.00","$1,175.57","$55,868.47"
MIA - TUS,56862956250,M-IAD-TUS-3,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/56862956250,https://www.airlines-manager.com/aircraft/show/97556719,0:30,9:59,310,"$593,850.00","$545,245.00","$1,758.85","$57,495.08"
MIA - TUS,56880042615,M-IAD-TUS-2,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/56880042615,https://www.airlines-manager.com/aircraft/show/97556720,10:00,19:29,310,"$593,850.00","$545,245.00","$1,758.85","$57,495.08"
MIA - TUS,56886798158,M-IAD-TUS-5,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/56886798158,https://www.airlines-manager.com/aircraft/show/97556716,13:00,22:29,310,"$593,850.00","$545,245.00","$1,758.85","$57,495.08"
MIA - TUS,56892624062,M-IAD-TUS-1,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/56892624062,https://www.airlines-manager.com/aircraft/show/97556721,15:45,1:14,310,"$593,850.00","$545,245.00","$1,758.85","$57,495.08"
MIA - TUS,56898577536,M-IAD-TUS-4,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/56898577536,https://www.airlines-manager.com/aircraft/show/97556718,18:45,4:14,310,"593,850$","545,245$","$1,758.85","$57,495.08"
MIA - TYS,56862956684,M-CID-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/56862956684,https://www.airlines-manager.com/aircraft/show/116789650,3:30,8:29,310,"$315,564.00","$286,171.00",$923.13,"$57,425.62"
MIA - TYS,56880042626,M-CID-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/56880042626,https://www.airlines-manager.com/aircraft/show/116789651,10:00,14:59,310,"$315,564.00","$286,171.00",$923.13,"$57,425.62"
MIA - TYS,56889535252,M-CID-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/56889535252,https://www.airlines-manager.com/aircraft/show/116789652,14:45,19:44,310,"$315,564.00","$286,171.00",$923.13,"$57,425.62"
MIA - TYS,56903707114,M-CID-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/56903707114,https://www.airlines-manager.com/aircraft/show/116789653,22:00,2:59,310,"$315,564.00","$286,171.00",$923.13,"$57,425.62"
MIA - YUL,56869877643,M-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/56869877643,https://www.airlines-manager.com/aircraft/show/113101225,6:30,13:59,400,"$630,873.00","$576,566.00","$1,441.42","$77,046.68"
MIA - YUL,56880042724,M-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/56880042724,https://www.airlines-manager.com/aircraft/show/113101226,11:00,18:29,400,"630,873$","576,566$","$1,441.42","$77,046.68"
MIA - YUL,56889535270,M-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/56889535270,https://www.airlines-manager.com/aircraft/show/113101227,15:00,22:29,400,"630,873$","576,566$","$1,441.42","$77,046.68"
MIA - YUL,56906228793,M-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/56906228793,https://www.airlines-manager.com/aircraft/show/113101224,23:45,7:14,400,"$630,873.00","$576,566.00","$1,441.42","$77,046.68"
MIA - YVR,56880042723,M-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/56880042723,https://www.airlines-manager.com/aircraft/show/113101224,11:00,23:44,400,"$1,049,041.00","$964,395.00","$2,410.99","$75,737.83"
MIA - YVR,56886798228,M-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/56886798228,https://www.airlines-manager.com/aircraft/show/113101225,14:00,2:44,400,"$1,049,041.00","$964,395.00","$2,410.99","$75,737.83"
MIA - YVR,56895754312,M-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/56895754312,https://www.airlines-manager.com/aircraft/show/113101226,18:30,7:14,400,"$1,049,041.00","$964,395.00","$2,410.99","$75,737.83"
MIA - YVR,56903707164,M-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/56903707164,https://www.airlines-manager.com/aircraft/show/113101227,22:30,11:14,400,"$1,049,041.00","$964,395.00","$2,410.99","$75,737.83"
MIA - YYC,56862956132,M-SJC-YYC-1,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/56862956132,https://www.airlines-manager.com/aircraft/show/107763569,0:00,11:44,320,"$733,218.00","$664,622.00","$2,076.94","$56,643.92"
MIA - YYC,56862956133,M-SJC-YYC-2,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/56862956133,https://www.airlines-manager.com/aircraft/show/107763568,2:00,13:44,320,"$733,218.00","$664,622.00","$2,076.94","$56,643.92"
MIA - YYC,56866822808,M-SJC-YYC-3,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/56866822808,https://www.airlines-manager.com/aircraft/show/107763567,4:00,15:44,320,"$733,218.00","$664,622.00","$2,076.94","$56,643.92"
MIA - YYC,56883365099,M-SJC-YYC-4,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/56883365099,https://www.airlines-manager.com/aircraft/show/107763564,12:00,23:44,320,"$733,218.00","$664,622.00","$2,076.94","$56,643.92"
MIA - YYC,56886798245,M-SJC-YYC-5,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/56886798245,https://www.airlines-manager.com/aircraft/show/107763563,14:00,1:44,320,"$733,218.00","$664,622.00","$2,076.94","$56,643.92"
MIA - YYZ,56862956581,M-BWI-YYZ-3,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/56862956581,https://www.airlines-manager.com/aircraft/show/92153441,2:45,9:44,310,"$439,732.00","$392,992.00","$1,267.72","$56,275.70"
MIA - YYZ,56866822917,M-BWI-YYZ-6 B,A319-100,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/56866822917,https://www.airlines-manager.com/aircraft/show/120519717,4:45,11:44,198,"$329,542.00","$292,098.00","$1,475.24","$41,827.88"
MIA - YYZ,56880042606,M-BWI-YYZ-4,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/56880042606,https://www.airlines-manager.com/aircraft/show/92153442,10:00,16:59,310,"$439,732.00","$392,992.00","$1,267.72","$56,275.70"
MIA - YYZ,56883365120,M-BWI-YYZ-5,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/56883365120,https://www.airlines-manager.com/aircraft/show/92153439,12:00,18:59,310,"$439,732.00","$392,992.00","$1,267.72","$56,275.70"
MIA - YYZ,56892624059,M-BWI-YYZ-1,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/56892624059,https://www.airlines-manager.com/aircraft/show/92153443,15:45,22:44,310,"$439,732.00","$392,992.00","$1,267.72","$56,275.70"
MIA - YYZ,56898577533,M-BWI-YYZ-2,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/56898577533,https://www.airlines-manager.com/aircraft/show/92153440,18:45,1:44,310,"$439,732.00","$392,992.00","$1,267.72","$56,275.70"
SFO - ABQ,56876734166,S-MCI-OMA-1,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/56876734166,https://www.airlines-manager.com/aircraft/show/88239553,8:45,14:14,320,"$351,204.00","$311,153.00",$972.35,"$56,745.23"
SFO - ABQ,56876734167,S-MCI-OMA-5 B,A319-100,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/56876734167,https://www.airlines-manager.com/aircraft/show/105223003,8:45,14:14,198,"$266,605.00","$238,475.00","$1,204.42","$43,490.88"
SFO - ABQ,56880042674,S-MCI-OMA-4,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/56880042674,https://www.airlines-manager.com/aircraft/show/88239557,10:30,15:59,320,"351,204$","311,153$",$972.35,"$56,745.23"
SFO - ABQ,56889535275,S-MCI-OMA-3,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/56889535275,https://www.airlines-manager.com/aircraft/show/88239555,15:00,20:29,320,"$351,204.00","$311,153.00",$972.35,"$56,745.23"
SFO - ABQ,56903707190,S-MCI-OMA-2,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/56903707190,https://www.airlines-manager.com/aircraft/show/88239554,22:45,4:14,320,"$351,204.00","$311,153.00",$972.35,"$56,745.23"
SFO - ALB,56862956254,S-ALB-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/56862956254,https://www.airlines-manager.com/aircraft/show/112650097,0:30,12:29,310,"$737,199.00","$681,035.00","$2,196.89","$56,831.85"
SFO - ALB,56869877580,S-ALB-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/56869877580,https://www.airlines-manager.com/aircraft/show/112650096,5:30,17:29,310,"$737,199.00","$681,035.00","$2,196.89","$56,831.85"
SFO - ALB,56873155654,S-ALB-CAK-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/56873155654,https://www.airlines-manager.com/aircraft/show/112650090,7:30,19:29,198,"551,373$","506,332$","$2,557.23","$42,253.02"
SFO - ALB,56886798286,S-ALB-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/56886798286,https://www.airlines-manager.com/aircraft/show/112650099,14:00,1:59,310,"$737,199.00","$681,035.00","$2,196.89","$56,831.85"
SFO - ALB,56895754270,S-ALB-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/56895754270,https://www.airlines-manager.com/aircraft/show/112650098,18:00,5:59,310,"$737,199.00","$681,035.00","$2,196.89","$56,831.85"
SFO - ANC,56862956530,S-BWI-ANC-4,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/56862956530,https://www.airlines-manager.com/aircraft/show/106255848,2:30,12:14,338,"$665,760.00","$617,716.00","$1,827.56","$63,463.97"
SFO - ANC,56862956531,S-BWI-ANC-5,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/56862956531,https://www.airlines-manager.com/aircraft/show/106255849,3:30,13:14,338,"$665,760.00","$617,716.00","$1,827.56","$63,463.97"
SFO - ANC,56898577550,S-BWI-ANC-1,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/56898577550,https://www.airlines-manager.com/aircraft/show/106255845,19:00,4:44,338,"$665,760.00","$617,716.00","$1,827.56","$63,463.97"
SFO - ANC,56901278124,S-BWI-ANC-2,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/56901278124,https://www.airlines-manager.com/aircraft/show/106255846,20:00,5:44,338,"$665,760.00","$617,716.00","$1,827.56","$63,463.97"
SFO - ANC,56901278125,S-BWI-ANC-3,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/56901278125,https://www.airlines-manager.com/aircraft/show/106255847,21:00,6:44,338,"$665,760.00","$617,716.00","$1,827.56","$63,463.97"
SFO - ATL,56892624234,S-168C-3 B2,747-400,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/56892624234,https://www.airlines-manager.com/aircraft/show/120752303,17:00,2:44,968,"$1,863,868.00","$1,685,722.00","$1,741.45","$173,190.62"
SFO - ATL,56895754280,S-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/56895754280,https://www.airlines-manager.com/aircraft/show/107467212,18:00,4:29,112,"$307,106.00","$254,690.00","$2,274.02","$24,294.75"
SFO - ATL,56901278153,S-168D-6 B2,747-400,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/56901278153,https://www.airlines-manager.com/aircraft/show/120752299,20:00,5:44,968,"$1,863,868.00","$1,685,722.00","$1,741.45","$173,190.62"
SFO - AUS,56862956281,S-OGG-AUS-1,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/56862956281,https://www.airlines-manager.com/aircraft/show/92773481,0:45,8:44,310,"503,113$","458,860$","$1,480.19","$57,477.24"
SFO - AUS,56862956282,S-OGG-AUS-2,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/56862956282,https://www.airlines-manager.com/aircraft/show/92773480,2:45,10:44,310,"$503,113.00","$458,860.00","$1,480.19","$57,477.24"
SFO - AUS,56886798211,S-OGG-AUS-3,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/56886798211,https://www.airlines-manager.com/aircraft/show/92773479,13:30,21:29,310,"$503,113.00","$458,860.00","$1,480.19","$57,477.24"
SFO - AUS,56889535347,S-OGG-AUS-4,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/56889535347,https://www.airlines-manager.com/aircraft/show/92773478,15:30,23:29,310,"$503,113.00","$458,860.00","$1,480.19","$57,477.24"
SFO - AUS,56895754322,S-OGG-AUS-5,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/56895754322,https://www.airlines-manager.com/aircraft/show/92773477,18:30,2:29,310,"$503,113.00","$458,860.00","$1,480.19","$57,477.24"
SFO - BDL,56866822906,S-RSW-BDL-1,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/56866822906,https://www.airlines-manager.com/aircraft/show/84915098,4:45,16:59,320,"$745,353.00","$681,235.00","$2,128.86","$55,686.78"
SFO - BDL,56873155582,S-RSW-BDL-2,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/56873155582,https://www.airlines-manager.com/aircraft/show/84915099,6:45,18:59,320,"$745,353.00","$681,235.00","$2,128.86","$55,686.78"
SFO - BDL,56876734165,S-RSW-BDL-5,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/56876734165,https://www.airlines-manager.com/aircraft/show/84915102,8:45,20:59,320,"$745,353.00","$681,235.00","$2,128.86","$55,686.78"
SFO - BDL,56892624210,S-RSW-BDL-3,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/56892624210,https://www.airlines-manager.com/aircraft/show/84915100,17:00,5:14,320,"$745,353.00","$681,235.00","$2,128.86","$55,686.78"
SFO - BDL,56898577557,S-RSW-BDL-4,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/56898577557,https://www.airlines-manager.com/aircraft/show/84915101,19:00,7:14,320,"$745,353.00","$681,235.00","$2,128.86","$55,686.78"
SFO - BFF,56862956336,S-ICT-BFF-5,ERJ-175,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/56862956336,https://www.airlines-manager.com/aircraft/show/114912306,1:00,7:14,112,"$184,180.00","$161,791.00","$1,444.56","$25,955.78"
SFO - BFF,56862956337,S-ICT-BFF-4,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/56862956337,https://www.airlines-manager.com/aircraft/show/114912268,2:15,8:29,310,"$391,156.00","$356,860.00","$1,151.16","$57,250.27"
SFO - BFF,56876734119,S-ICT-BFF-3,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/56876734119,https://www.airlines-manager.com/aircraft/show/114912263,8:15,14:29,310,"$391,156.00","$356,860.00","$1,151.16","$57,250.27"
SFO - BFF,56892624130,S-ICT-BFF-2,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/56892624130,https://www.airlines-manager.com/aircraft/show/114912264,16:00,22:14,310,"$391,156.00","$356,860.00","$1,151.16","$57,250.27"
SFO - BFF,56906228782,S-ICT-BFF-1,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/56906228782,https://www.airlines-manager.com/aircraft/show/114912267,23:30,5:44,310,"$391,156.00","$356,860.00","$1,151.16","$57,250.27"
SFO - BHM,56869877573,S-BHM-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/56869877573,https://www.airlines-manager.com/aircraft/show/117782568,5:30,15:29,320,"$624,697.00","$570,602.00","$1,783.13","$57,155.46"
SFO - BHM,56873155613,S-BHM-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/56873155613,https://www.airlines-manager.com/aircraft/show/117782569,7:00,16:59,320,"624,697$","570,602$","$1,783.13","$57,155.46"
SFO - BHM,56889535315,S-BHM-GRR-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/56889535315,https://www.airlines-manager.com/aircraft/show/117782583,15:00,0:59,198,"469,973$","430,696$","$2,175.23","$43,141.50"
SFO - BHM,56898577659,S-BHM-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/56898577659,https://www.airlines-manager.com/aircraft/show/117782567,19:45,5:44,320,"624,697$","570,602$","$1,783.13","$57,155.46"
SFO - BHM,56903707104,S-BHM-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/56903707104,https://www.airlines-manager.com/aircraft/show/117782566,22:00,7:59,320,"624,697$","570,602$","$1,783.13","$57,155.46"
SFO - BIL,56862956519,S-FAR-BIL-4,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/56862956519,https://www.airlines-manager.com/aircraft/show/117782587,2:15,7:59,310,"357,113$","324,930$","$1,048.16","$56,673.84"
SFO - BIL,56876734211,S-FAR-BIL-3,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/56876734211,https://www.airlines-manager.com/aircraft/show/117782586,9:15,14:59,310,"$357,113.00","$324,930.00","$1,048.16","$56,673.84"
SFO - BIL,56889535310,S-FAR-BIL-2,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/56889535310,https://www.airlines-manager.com/aircraft/show/117782585,15:00,20:44,310,"$357,113.00","$324,930.00","$1,048.16","$56,673.84"
SFO - BIL,56903707211,S-FAR-BIL-1,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/56903707211,https://www.airlines-manager.com/aircraft/show/117782584,22:45,4:29,310,"$357,113.00","$324,930.00","$1,048.16","$56,673.84"
SFO - BNA,56862956352,S-BNA-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/56862956352,https://www.airlines-manager.com/aircraft/show/103365580,1:15,10:59,320,"$608,391.00","$552,114.00","$1,725.36","$56,724.04"
SFO - BNA,56869877630,S-BNA-CMH-6,ERJ-175,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/56869877630,https://www.airlines-manager.com/aircraft/show/82323681,6:00,15:44,112,"$286,104.00","$252,244.00","$2,252.18","$25,915.48"
SFO - BNA,56886798115,S-BNA-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/56886798115,https://www.airlines-manager.com/aircraft/show/103365583,13:00,22:44,320,"$608,391.00","$552,114.00","$1,725.36","$56,724.04"
SFO - BNA,56889535281,S-BNA-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/56889535281,https://www.airlines-manager.com/aircraft/show/103365582,15:00,0:44,320,"$608,391.00","$552,114.00","$1,725.36","$56,724.04"
SFO - BNA,56892624054,S-BNA-CMH-5,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/56892624054,https://www.airlines-manager.com/aircraft/show/103365579,15:45,1:29,320,"$608,391.00","$552,114.00","$1,725.36","$56,724.04"
SFO - BNA,56906228752,S-BNA-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/56906228752,https://www.airlines-manager.com/aircraft/show/103365581,23:15,8:59,320,"$608,391.00","$552,114.00","$1,725.36","$56,724.04"
SFO - BOI,56862956347,S-CLE-MKE-2,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/56862956347,https://www.airlines-manager.com/aircraft/show/92519369,1:15,5:29,320,"$248,121.00","$217,386.00",$679.33,"$51,351.02"
SFO - BOI,56880042530,S-CLE-MKE-1,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/56880042530,https://www.airlines-manager.com/aircraft/show/92519368,9:45,13:59,320,"$248,121.00","$217,386.00",$679.33,"$51,351.02"
SFO - BOI,56889535244,S-CLE-MKE-4,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/56889535244,https://www.airlines-manager.com/aircraft/show/92519371,14:45,18:59,320,"$248,121.00","$217,386.00",$679.33,"$51,351.02"
SFO - BOI,56892624099,S-CLE-MKE-3,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/56892624099,https://www.airlines-manager.com/aircraft/show/92519367,16:00,20:14,320,"$248,121.00","$217,386.00",$679.33,"$51,351.02"
SFO - BOS,56862956174,S-BOS-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/56862956174,https://www.airlines-manager.com/aircraft/show/104864961,0:15,12:44,338,"841,524$","778,167$","$2,302.27","$62,336.48"
SFO - BOS,56883365071,S-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/56883365071,https://www.airlines-manager.com/aircraft/show/120141531,11:30,23:59,0,"$222,034.00","$134,572.00",#DIV/0!,"$10,780.13"
SFO - BOS,56886798065,S-BOS-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/56886798065,https://www.airlines-manager.com/aircraft/show/104901564,13:00,1:29,338,"$841,524.00","$778,167.00","$2,302.27","$62,336.48"
SFO - BOS,56886798066,S-BOS-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/56886798066,https://www.airlines-manager.com/aircraft/show/104870960,14:00,2:29,338,"$841,524.00","$778,167.00","$2,302.27","$62,336.48"
SFO - BOS,56892624050,S-BOS-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/56892624050,https://www.airlines-manager.com/aircraft/show/104874465,15:45,4:14,338,"$841,524.00","$778,167.00","$2,302.27","$62,336.48"
SFO - BOS,56901278168,S-BOS-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/56901278168,https://www.airlines-manager.com/aircraft/show/104901544,20:15,8:44,338,"$841,524.00","$778,167.00","$2,302.27","$62,336.48"
SFO - BTV,56862956147,S-BTV-LEX-4,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/56862956147,https://www.airlines-manager.com/aircraft/show/112650092,0:00,11:59,310,"$733,303.00","$677,318.00","$2,184.90","$56,521.67"
SFO - BTV,56869877626,S-BTV-LEX-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/56869877626,https://www.airlines-manager.com/aircraft/show/112650089,6:00,17:59,198,"$549,048.00","$504,149.00","$2,546.21","$42,070.85"
SFO - BTV,56886798284,S-BTV-LEX-1,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/56886798284,https://www.airlines-manager.com/aircraft/show/112650095,14:00,1:59,310,"$733,303.00","$677,318.00","$2,184.90","$56,521.67"
SFO - BTV,56895754269,S-BTV-LEX-2,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/56895754269,https://www.airlines-manager.com/aircraft/show/112650094,18:00,5:59,310,"$733,303.00","$677,318.00","$2,184.90","$56,521.67"
SFO - BTV,56901278147,S-BTV-LEX-3,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/56901278147,https://www.airlines-manager.com/aircraft/show/112650093,20:00,7:59,310,"$733,303.00","$677,318.00","$2,184.90","$56,521.67"
SFO - BUF,56862956420,S-PVD-BUF-1,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/56862956420,https://www.airlines-manager.com/aircraft/show/112650108,1:30,12:29,310,"690,191$","636,733$","$2,053.98","$57,972.66"
SFO - BUF,56869877581,S-PVD-BUF-2,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/56869877581,https://www.airlines-manager.com/aircraft/show/112650107,5:30,16:29,310,"$690,191.00","$636,733.00","$2,053.98","$57,972.66"
SFO - BUF,56873155648,S-PVD-BUF-3,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/56873155648,https://www.airlines-manager.com/aircraft/show/112650106,7:30,18:29,310,"$690,191.00","$636,733.00","$2,053.98","$57,972.66"
SFO - BUF,56886798179,S-PVD-BUF-4,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/56886798179,https://www.airlines-manager.com/aircraft/show/112650105,13:00,23:59,310,"690,191$","636,733$","$2,053.98","$57,972.66"
SFO - BUF,56895754271,S-PVD-BUF-5,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/56895754271,https://www.airlines-manager.com/aircraft/show/112650104,18:00,4:59,310,"690,191$","636,733$","$2,053.98","$57,972.66"
SFO - BUR,56862956512,S-SAV-JAN-1,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/56862956512,https://www.airlines-manager.com/aircraft/show/114912265,2:15,5:44,310,"174,124$","151,614$",$489.08,"$43,525.55"
SFO - BUR,56866822861,S-SAV-JAN-4,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/56866822861,https://www.airlines-manager.com/aircraft/show/114912270,4:15,7:44,310,"174,124$","151,614$",$489.08,"$43,525.55"
SFO - BUR,56883365069,S-SAV-JAN-5 B,A319-100,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/56883365069,https://www.airlines-manager.com/aircraft/show/114917486,11:30,14:59,198,"131,182$","113,160$",$571.52,"$32,486.12"
SFO - BUR,56889535349,S-SAV-JAN-3,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/56889535349,https://www.airlines-manager.com/aircraft/show/114912269,15:30,18:59,310,"174,124$","151,614$",$489.08,"$43,525.55"
SFO - BUR,56892624233,S-SAV-JAN-2,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/56892624233,https://www.airlines-manager.com/aircraft/show/114912266,17:00,20:29,310,"$174,124.00","$151,614.00",$489.08,"$43,525.55"
SFO - BWI,56866822899,S-BWI-ANC-1,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/56866822899,https://www.airlines-manager.com/aircraft/show/106255845,4:45,16:14,338,"$792,718.00","$734,335.00","$2,172.59","$63,947.90"
SFO - BWI,56869877590,S-BWI-ANC-2,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/56869877590,https://www.airlines-manager.com/aircraft/show/106255846,5:45,17:14,338,"$792,718.00","$734,335.00","$2,172.59","$63,947.90"
SFO - BWI,56873155579,S-BWI-ANC-3,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/56873155579,https://www.airlines-manager.com/aircraft/show/106255847,6:45,18:14,338,"$792,718.00","$734,335.00","$2,172.59","$63,947.90"
SFO - BWI,56889535261,S-BWI-ANC-4,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/56889535261,https://www.airlines-manager.com/aircraft/show/106255848,15:00,2:29,338,"$792,718.00","$734,335.00","$2,172.59","$63,947.90"
SFO - BWI,56892624083,S-BWI-ANC-5,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/56892624083,https://www.airlines-manager.com/aircraft/show/106255849,16:00,3:29,338,"$792,718.00","$734,335.00","$2,172.59","$63,947.90"
SFO - BZN,56880042529,S-ROC-COS-1,A321neo,https://www.airlines-manager.com/network/showline/50555367,https://www.airlines-manager.com/network/showflight/56880042529,https://www.airlines-manager.com/aircraft/show/120112476,9:45,14:59,338,"$357,990.00","$329,036.00",$973.48,"$62,873.12"
SFO - BZN,56889535262,S-ROC-COS-3,A321neo,https://www.airlines-manager.com/network/showline/50555367,https://www.airlines-manager.com/network/showflight/56889535262,https://www.airlines-manager.com/aircraft/show/120112474,15:00,20:14,338,"$357,990.00","$329,036.00",$973.48,"$62,873.12"
SFO - BZN,56898577516,S-ROC-COS-2,A321neo,https://www.airlines-manager.com/network/showline/50555367,https://www.airlines-manager.com/network/showflight/56898577516,https://www.airlines-manager.com/aircraft/show/120112475,18:45,23:59,338,"$357,990.00","$329,036.00",$973.48,"$62,873.12"
SFO - BZN,56906228792,S-ROC-COS-4,A321neo,https://www.airlines-manager.com/network/showline/50555367,https://www.airlines-manager.com/network/showflight/56906228792,https://www.airlines-manager.com/aircraft/show/120051490,23:45,4:59,274,"317,821$","290,044$","$1,058.55","$55,422.42"
SFO - CAK,56862956494,S-ALB-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/56862956494,https://www.airlines-manager.com/aircraft/show/112650099,2:00,12:29,310,"$660,859.00","$610,685.00","$1,969.95","$58,252.94"
SFO - CAK,56869877624,S-ALB-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/56869877624,https://www.airlines-manager.com/aircraft/show/112650098,6:00,16:29,310,"$660,859.00","$610,685.00","$1,969.95","$58,252.94"
SFO - CAK,56886798285,S-ALB-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/56886798285,https://www.airlines-manager.com/aircraft/show/112650097,14:00,0:29,310,"$660,859.00","$610,685.00","$1,969.95","$58,252.94"
SFO - CAK,56898577576,S-ALB-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/56898577576,https://www.airlines-manager.com/aircraft/show/112650096,19:00,5:29,310,"$660,859.00","$610,685.00","$1,969.95","$58,252.94"
SFO - CAK,56901278273,S-ALB-CAK-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/56901278273,https://www.airlines-manager.com/aircraft/show/112650090,21:00,7:29,198,"$496,365.00","$456,132.00","$2,303.70","$43,510.21"
SFO - CDG,56862956686,S-168D-2 B2,747-400,https://www.airlines-manager.com/network/showline/50769259,https://www.airlines-manager.com/network/showflight/56862956686,https://www.airlines-manager.com/aircraft/show/120752295,3:30,1:29,968,"$4,129,579.00","$3,785,477.00","$3,910.62","$172,197.59"
SFO - CDG,56903707070,S-168C-1 B2,747-400,https://www.airlines-manager.com/network/showline/50769259,https://www.airlines-manager.com/network/showflight/56903707070,https://www.airlines-manager.com/aircraft/show/120752301,21:30,19:29,944,"$4,062,455.00","$3,722,501.00","$3,943.33","$169,332.87"
SFO - CHS,56862956407,S-MHT-CHS-1,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/56862956407,https://www.airlines-manager.com/aircraft/show/114917465,1:30,12:44,320,"$704,942.00","$645,793.00","$2,018.10","$57,488.99"
SFO - CHS,56869877571,S-MHT-CHS-2,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/56869877571,https://www.airlines-manager.com/aircraft/show/114917464,5:30,16:44,320,"$704,942.00","$645,793.00","$2,018.10","$57,488.99"
SFO - CHS,56876734160,S-MHT-CHS-5 B,A319-100,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/56876734160,https://www.airlines-manager.com/aircraft/show/114912262,8:30,19:59,198,"$531,446.00","$488,189.00","$2,465.60","$42,512.83"
SFO - CHS,56886798127,S-MHT-CHS-3,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/56886798127,https://www.airlines-manager.com/aircraft/show/114917463,13:00,0:14,320,"$704,942.00","$645,793.00","$2,018.10","$57,488.99"
SFO - CHS,56892624219,S-MHT-CHS-4,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/56892624219,https://www.airlines-manager.com/aircraft/show/114266973,17:00,4:14,320,"$704,942.00","$645,793.00","$2,018.10","$57,488.99"
SFO - CID,56862956408,S-YEG-YYC-1,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/56862956408,https://www.airlines-manager.com/aircraft/show/117782561,1:30,9:59,320,"$530,499.00","$483,550.00","$1,511.09","$57,000.00"
SFO - CID,56869877646,S-YEG-YYC-4,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/56869877646,https://www.airlines-manager.com/aircraft/show/116932364,6:30,14:59,320,"530,499$","483,550$","$1,511.09","$57,000.00"
SFO - CID,56886798130,S-YEG-YYC-3,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/56886798130,https://www.airlines-manager.com/aircraft/show/117782559,13:00,21:29,320,"$530,499.00","$483,550.00","$1,511.09","$57,000.00"
SFO - CID,56898577564,S-YEG-YYC-2,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/56898577564,https://www.airlines-manager.com/aircraft/show/117782560,19:00,3:29,320,"$530,499.00","$483,550.00","$1,511.09","$57,000.00"
SFO - CID,56901278274,S-YEG-YYC-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/56901278274,https://www.airlines-manager.com/aircraft/show/117782581,21:00,5:29,198,"$400,688.00","$366,754.00","$1,852.29","$43,232.30"
SFO - CLE,56869877567,S-CLE-MKE-2,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/56869877567,https://www.airlines-manager.com/aircraft/show/92519369,5:30,15:59,320,"$653,869.00","$596,150.00","$1,862.97","$56,866.45"
SFO - CLE,56869877568,S-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/56869877568,https://www.airlines-manager.com/aircraft/show/107467212,6:30,16:59,112,"307,058$","271,917$","$2,427.83","$25,938.03"
SFO - CLE,56873155640,S-CLE-MKE-5,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/56873155640,https://www.airlines-manager.com/aircraft/show/92519370,7:30,17:59,320,"$653,869.00","$596,150.00","$1,862.97","$56,866.45"
SFO - CLE,56886798237,S-CLE-MKE-1,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/56886798237,https://www.airlines-manager.com/aircraft/show/92519368,14:00,0:29,320,"$653,869.00","$596,150.00","$1,862.97","$56,866.45"
SFO - CLE,56898577558,S-CLE-MKE-4,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/56898577558,https://www.airlines-manager.com/aircraft/show/92519371,19:00,5:29,320,"$653,869.00","$596,150.00","$1,862.97","$56,866.45"
SFO - CLE,56901278173,S-CLE-MKE-3,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/56901278173,https://www.airlines-manager.com/aircraft/show/92519367,20:15,6:44,320,"$653,869.00","$596,150.00","$1,862.97","$56,866.45"
SFO - CLT,56862956118,S-IAD-CLT-3,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/56862956118,https://www.airlines-manager.com/aircraft/show/96135563,0:00,10:44,400,"$893,309.00","$813,344.00","$2,033.36","$75,777.39"
SFO - CLT,56869877609,S-IAD-CLT-4,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/56869877609,https://www.airlines-manager.com/aircraft/show/96135562,6:00,16:44,400,"$893,309.00","$813,344.00","$2,033.36","$75,777.39"
SFO - CLT,56886798200,S-IAD-CLT-1,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/56886798200,https://www.airlines-manager.com/aircraft/show/96135565,13:15,23:59,400,"$893,309.00","$813,344.00","$2,033.36","$75,777.39"
SFO - CLT,56889535330,S-IAD-CLT-5,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/56889535330,https://www.airlines-manager.com/aircraft/show/96135561,15:15,1:59,400,"$893,309.00","$813,344.00","$2,033.36","$75,777.39"
SFO - CLT,56895754170,S-IAD-CLT-2,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/56895754170,https://www.airlines-manager.com/aircraft/show/96135564,17:15,3:59,400,"$893,309.00","$813,344.00","$2,033.36","$75,777.39"
SFO - CMH,56862956269,S-BNA-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/56862956269,https://www.airlines-manager.com/aircraft/show/103365582,0:45,10:59,320,"$638,686.00","$581,389.00","$1,816.84","$56,813.26"
SFO - CMH,56869877570,S-BNA-CMH-5,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/56869877570,https://www.airlines-manager.com/aircraft/show/103365579,5:30,15:44,320,"$638,686.00","$581,389.00","$1,816.84","$56,813.26"
SFO - CMH,56886798114,S-BNA-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/56886798114,https://www.airlines-manager.com/aircraft/show/103365581,13:00,23:14,320,"$638,686.00","$581,389.00","$1,816.84","$56,813.26"
SFO - CMH,56889535280,S-BNA-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/56889535280,https://www.airlines-manager.com/aircraft/show/103365580,15:00,1:14,320,"$638,686.00","$581,389.00","$1,816.84","$56,813.26"
SFO - CMH,56892624077,S-BNA-CMH-6,ERJ-175,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/56892624077,https://www.airlines-manager.com/aircraft/show/82323681,15:45,1:59,112,"$300,499.00","$265,689.00","$2,372.22","$25,963.09"
SFO - CMH,56903707192,S-BNA-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/56903707192,https://www.airlines-manager.com/aircraft/show/103365583,22:45,8:59,320,"$638,686.00","$581,389.00","$1,816.84","$56,813.26"
SFO - COS,56862956499,S-ROC-COS-1,A321neo,https://www.airlines-manager.com/network/showline/50555364,https://www.airlines-manager.com/network/showflight/56862956499,https://www.airlines-manager.com/aircraft/show/120112476,2:15,7:59,338,"$397,466.00","$363,971.00","$1,076.84","$63,483.31"
SFO - COS,56876734204,S-ROC-COS-3,A321neo,https://www.airlines-manager.com/network/showline/50555364,https://www.airlines-manager.com/network/showflight/56876734204,https://www.airlines-manager.com/aircraft/show/120112474,9:15,14:59,338,"$397,466.00","$363,971.00","$1,076.84","$63,483.31"
SFO - COS,56886798075,S-ROC-COS-2,A321neo,https://www.airlines-manager.com/network/showline/50555364,https://www.airlines-manager.com/network/showflight/56886798075,https://www.airlines-manager.com/aircraft/show/120112475,13:00,18:44,338,"$397,466.00","$363,971.00","$1,076.84","$63,483.31"
SFO - COS,56895754244,S-ROC-COS-4,A321neo,https://www.airlines-manager.com/network/showline/50555364,https://www.airlines-manager.com/network/showflight/56895754244,https://www.airlines-manager.com/aircraft/show/120051490,18:00,23:44,337,"$396,768.00","$363,295.00","$1,078.03","$63,365.41"
SFO - CUN,56862956188,S-YOW-CUN-1,757-300,https://www.airlines-manager.com/network/showline/50555302,https://www.airlines-manager.com/network/showflight/56862956188,https://www.airlines-manager.com/aircraft/show/120056768,0:15,11:29,400,"$948,335.00","$874,378.00","$2,185.95","$77,837.80"
SFO - CUN,56862956189,S-YOW-CUN-2,757-300,https://www.airlines-manager.com/network/showline/50555302,https://www.airlines-manager.com/network/showflight/56862956189,https://www.airlines-manager.com/aircraft/show/120056767,1:15,12:29,400,"$948,335.00","$874,378.00","$2,185.95","$77,837.80"
SFO - CUN,56886798094,S-YOW-CUN-3,757-300,https://www.airlines-manager.com/network/showline/50555302,https://www.airlines-manager.com/network/showflight/56886798094,https://www.airlines-manager.com/aircraft/show/120056766,13:00,0:14,400,"$948,335.00","$874,378.00","$2,185.95","$77,837.80"
SFO - CUN,56886798095,S-YOW-CUN-4,757-300,https://www.airlines-manager.com/network/showline/50555302,https://www.airlines-manager.com/network/showflight/56886798095,https://www.airlines-manager.com/aircraft/show/120056765,14:00,1:14,400,"$948,335.00","$874,378.00","$2,185.95","$77,837.80"
SFO - CVG,56866822934,S-IND-CVG-3,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/56866822934,https://www.airlines-manager.com/aircraft/show/99316504,5:00,14:59,310,"$630,041.00","$577,014.00","$1,861.34","$57,797.73"
SFO - CVG,56873155614,S-IND-CVG-5,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/56873155614,https://www.airlines-manager.com/aircraft/show/99316502,7:00,16:59,310,"$630,041.00","$577,014.00","$1,861.34","$57,797.73"
SFO - CVG,56886798165,S-IND-CVG-2,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/56886798165,https://www.airlines-manager.com/aircraft/show/99316505,13:00,22:59,310,"$630,041.00","$577,014.00","$1,861.34","$57,797.73"
SFO - CVG,56889535298,S-IND-CVG-4,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/56889535298,https://www.airlines-manager.com/aircraft/show/99316503,15:00,0:59,310,"$630,041.00","$577,014.00","$1,861.34","$57,797.73"
SFO - CVG,56892624243,S-IND-CVG-6,ERJ-175,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/56892624243,https://www.airlines-manager.com/aircraft/show/99174346,17:00,2:59,112,"$295,248.00","$259,885.00","$2,320.40","$26,031.89"
SFO - CVG,56903707208,S-IND-CVG-1,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/56903707208,https://www.airlines-manager.com/aircraft/show/99316506,22:45,8:44,310,"$630,041.00","$577,014.00","$1,861.34","$57,797.73"
SFO - DEL,56862956152,S-168B-1 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/56862956152,https://www.airlines-manager.com/aircraft/show/86832727,0:00,5:29,1046,"$5,812,778.00","$5,394,209.00","$5,156.99","$983,746.32"
SFO - DEL,56862956153,S-168A-1 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/56862956153,https://www.airlines-manager.com/aircraft/show/86969602,2:00,7:29,1046,"$5,812,778.00","$5,394,209.00","$5,156.99","$983,746.32"
SFO - DEN,56862956185,S-IAH-MEX-5,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/56862956185,https://www.airlines-manager.com/aircraft/show/101045335,0:15,5:59,400,"$475,022.00","$407,058.00","$1,017.65","$70,998.49"
SFO - DEN,56869877642,S-IAH-MEX-1,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/56869877642,https://www.airlines-manager.com/aircraft/show/101045339,6:30,12:14,400,"$475,022.00","$407,058.00","$1,017.65","$70,998.49"
SFO - DEN,56876734129,S-IAH-MEX-4,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/56876734129,https://www.airlines-manager.com/aircraft/show/101045336,8:30,14:14,400,"$475,022.00","$407,058.00","$1,017.65","$70,998.49"
SFO - DEN,56886798091,S-IAH-MEX-3,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/56886798091,https://www.airlines-manager.com/aircraft/show/101045337,13:00,18:44,400,"$475,022.00","$407,058.00","$1,017.65","$70,998.49"
SFO - DEN,56903707134,S-IAH-MEX-2,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/56903707134,https://www.airlines-manager.com/aircraft/show/101045338,22:15,3:59,383,"$463,123.00","$395,585.00","$1,032.86","$68,997.38"
SFO - DFW,56862956259,S-DFW-2,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/56862956259,https://www.airlines-manager.com/aircraft/show/120752619,0:45,8:29,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DFW,56873155702,S-DFW-1,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/56873155702,https://www.airlines-manager.com/aircraft/show/120517724,8:00,15:44,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DFW,56876734184,S-DFW-2,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/56876734184,https://www.airlines-manager.com/aircraft/show/120752619,9:00,16:44,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DFW,56892624051,S-DFW-1,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/56892624051,https://www.airlines-manager.com/aircraft/show/120517724,15:45,23:29,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DFW,56892624052,S-DFW-2,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/56892624052,https://www.airlines-manager.com/aircraft/show/120752619,16:45,0:29,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DFW,56906228768,S-DFW-1,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/56906228768,https://www.airlines-manager.com/aircraft/show/120517724,23:30,7:14,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DSM,56866822888,S-TUL-DSM-3,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/56866822888,https://www.airlines-manager.com/aircraft/show/108410858,4:30,12:29,320,"$508,775.00","$462,937.00","$1,446.68","$57,987.93"
SFO - DSM,56886798120,S-TUL-DSM-2,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/56886798120,https://www.airlines-manager.com/aircraft/show/108410857,13:00,20:59,320,"$508,775.00","$462,937.00","$1,446.68","$57,987.93"
SFO - DSM,56889535327,S-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/56889535327,https://www.airlines-manager.com/aircraft/show/108466264,15:00,23:14,112,"$240,808.00","$213,387.00","$1,905.24","$25,917.45"
SFO - DSM,56903707196,S-TUL-DSM-1,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/56903707196,https://www.airlines-manager.com/aircraft/show/108410856,22:45,6:44,320,"$508,775.00","$462,937.00","$1,446.68","$57,987.93"
SFO - DSM,56906228772,S-TUL-DSM-4,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/56906228772,https://www.airlines-manager.com/aircraft/show/108410859,23:30,7:29,320,"$508,775.00","$462,937.00","$1,446.68","$57,987.93"
SFO - DTW,56866822882,S-ORD-DTW-4,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/56866822882,https://www.airlines-manager.com/aircraft/show/101045331,4:30,14:29,400,"$823,515.00","$748,392.00","$1,870.98","$74,964.14"
SFO - DTW,56866822883,S-ORD-DTW-3,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/56866822883,https://www.airlines-manager.com/aircraft/show/101045332,5:00,14:59,400,"$823,515.00","$748,392.00","$1,870.98","$74,964.14"
SFO - DTW,56889535267,S-ORD-DTW-2,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/56889535267,https://www.airlines-manager.com/aircraft/show/101045333,15:00,0:59,400,"$823,515.00","$748,392.00","$1,870.98","$74,964.14"
SFO - DTW,56892624207,S-ORD-DTW-5,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/56892624207,https://www.airlines-manager.com/aircraft/show/101045330,17:00,2:59,400,"$823,515.00","$748,392.00","$1,870.98","$74,964.14"
SFO - DTW,56903707099,S-ORD-DTW-1,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/56903707099,https://www.airlines-manager.com/aircraft/show/101045334,22:00,7:59,400,"$823,515.00","$748,392.00","$1,870.98","$74,964.14"
SFO - DXB,56869877582,S-168B-2 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/56869877582,https://www.airlines-manager.com/aircraft/show/87566901,5:30,12:29,1046,"$6,017,199.00","$5,552,011.00","$5,307.85","$795,037.37"
SFO - DXB,56873155650,S-168A-2 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/56873155650,https://www.airlines-manager.com/aircraft/show/86596991,7:30,14:29,1046,"$6,017,199.00","$5,552,011.00","$5,307.85","$795,037.37"
SFO - ELP,56869877600,S-ICT-BFF-1,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/56869877600,https://www.airlines-manager.com/aircraft/show/114912267,5:45,11:44,310,"$376,198.00","$341,426.00","$1,101.37","$57,062.84"
SFO - ELP,56873155635,S-ICT-BFF-5,ERJ-175,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/56873155635,https://www.airlines-manager.com/aircraft/show/114912306,7:15,13:14,112,"$178,042.00","$155,448.00","$1,387.93","$25,980.17"
SFO - ELP,56876734148,S-ICT-BFF-4,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/56876734148,https://www.airlines-manager.com/aircraft/show/114912268,8:30,14:29,310,"$376,198.00","$341,426.00","$1,101.37","$57,062.84"
SFO - ELP,56889535305,S-ICT-BFF-3,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/56889535305,https://www.airlines-manager.com/aircraft/show/114912263,15:00,20:59,310,"$376,198.00","$341,426.00","$1,101.37","$57,062.84"
SFO - ELP,56903707151,S-ICT-BFF-2,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/56903707151,https://www.airlines-manager.com/aircraft/show/114912264,22:15,4:14,310,"$376,198.00","$341,426.00","$1,101.37","$57,062.84"
SFO - EUG,56862956449,S-BHM-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/56862956449,https://www.airlines-manager.com/aircraft/show/117782568,1:45,5:29,320,"217,713$","189,681$",$592.75,"$50,807.41"
SFO - EUG,56862956450,S-BHM-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/56862956450,https://www.airlines-manager.com/aircraft/show/117782569,3:15,6:59,320,"217,713$","189,681$",$592.75,"$50,807.41"
SFO - EUG,56892624118,S-BHM-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/56892624118,https://www.airlines-manager.com/aircraft/show/117782567,16:00,19:44,320,"217,713$","189,681$",$592.75,"$50,807.41"
SFO - EUG,56895754226,S-BHM-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/56895754226,https://www.airlines-manager.com/aircraft/show/117782566,17:45,21:29,268,"196,200$","168,799$",$629.85,"$45,214.02"
SFO - FAR,56862956328,S-FAR-BIL-3,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/56862956328,https://www.airlines-manager.com/aircraft/show/117782586,1:00,8:44,310,"491,795$","452,290$","$1,459.00","$58,485.78"
SFO - FAR,56873155631,S-FAR-BIL-2,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/56873155631,https://www.airlines-manager.com/aircraft/show/117782585,7:15,14:59,310,"491,795$","452,290$","$1,459.00","$58,485.78"
SFO - FAR,56889535309,S-FAR-BIL-1,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/56889535309,https://www.airlines-manager.com/aircraft/show/117782584,15:00,22:44,310,"491,795$","452,290$","$1,459.00","$58,485.78"
SFO - FAR,56895754326,S-FAR-BIL-4,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/56895754326,https://www.airlines-manager.com/aircraft/show/117782587,18:30,2:14,310,"491,795$","452,290$","$1,459.00","$58,485.78"
SFO - FAT,56862956484,S-TUL-DSM-2,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/56862956484,https://www.airlines-manager.com/aircraft/show/108410857,2:00,4:44,320,"95,749$","71,553$",$223.60,"$26,177.93"
SFO - FAT,56883365076,S-TUL-DSM-1,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/56883365076,https://www.airlines-manager.com/aircraft/show/108410856,11:45,14:29,320,"95,749$","71,553$",$223.60,"$26,177.93"
SFO - FAT,56886798122,S-TUL-DSM-4,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/56886798122,https://www.airlines-manager.com/aircraft/show/108410859,13:00,15:44,320,"95,749$","71,553$",$223.60,"$26,177.93"
SFO - FAT,56895754258,S-TUL-DSM-3,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/56895754258,https://www.airlines-manager.com/aircraft/show/108410858,18:00,20:44,320,"95,749$","71,553$",$223.60,"$26,177.93"
SFO - FAT,56906228765,S-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/56906228765,https://www.airlines-manager.com/aircraft/show/108466264,23:15,1:59,70,"34,114$","21,843$",$312.04,"$7,991.34"
SFO - FCA,56866822897,S-MAF-FCA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/56866822897,https://www.airlines-manager.com/aircraft/show/120056759,4:45,9:59,272,"305,111$","281,676$","$1,035.57","$53,823.44"
SFO - FCA,56886798063,S-MAF-FCA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/56886798063,https://www.airlines-manager.com/aircraft/show/120056760,13:00,18:14,272,"305,111$","281,676$","$1,035.57","$53,823.44"
SFO - FCA,56889535255,S-MAF-FCA-5,ERJ-175,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/56889535255,https://www.airlines-manager.com/aircraft/show/119652600,14:45,20:14,112,"160,704$","140,973$","$1,258.69","$25,709.36"
SFO - FCA,56898577647,S-MAF-FCA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/56898577647,https://www.airlines-manager.com/aircraft/show/120056761,19:45,0:59,272,"305,111$","281,676$","$1,035.57","$53,823.44"
SFO - FCA,56906228789,S-MAF-FCA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/56906228789,https://www.airlines-manager.com/aircraft/show/120056758,23:45,4:59,272,"305,111$","281,676$","$1,035.57","$53,823.44"
SFO - FLL,56862956191,S-FLL-TPA-2,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/56862956191,https://www.airlines-manager.com/aircraft/show/97955543,0:15,12:14,320,"739,785$","671,757$","$2,099.24","$56,057.61"
SFO - FLL,56866822842,S-FLL-TPA-4,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/56866822842,https://www.airlines-manager.com/aircraft/show/97955541,4:15,16:14,320,"739,785$","671,757$","$2,099.24","$56,057.61"
SFO - FLL,56873155651,S-FLL-TPA-6 B,A319-100,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/56873155651,https://www.airlines-manager.com/aircraft/show/97900729,7:30,19:44,198,"556,070$","506,591$","$2,558.54","$41,410.71"
SFO - FLL,56886798108,S-FLL-TPA-1,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/56886798108,https://www.airlines-manager.com/aircraft/show/97955544,13:00,0:59,320,"739,785$","671,757$","$2,099.24","$56,057.61"
SFO - FLL,56892624215,S-FLL-TPA-3,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/56892624215,https://www.airlines-manager.com/aircraft/show/97955542,17:00,4:59,320,"739,785$","671,757$","$2,099.24","$56,057.61"
SFO - FLL,56901278137,S-FLL-TPA-5,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/56901278137,https://www.airlines-manager.com/aircraft/show/97955540,20:00,7:59,320,"739,785$","671,757$","$2,099.24","$56,057.61"
SFO - FSD,56862956232,S-OKC-FSD-1,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/56862956232,https://www.airlines-manager.com/aircraft/show/107160378,0:30,7:59,320,"471,889$","428,607$","$1,339.40","$57,274.88"
SFO - FSD,56862956233,S-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/56862956233,https://www.airlines-manager.com/aircraft/show/107132310,2:00,9:29,112,"223,210$","197,491$","$1,763.31","$26,390.78"
SFO - FSD,56862956234,S-OKC-FSD-4,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/56862956234,https://www.airlines-manager.com/aircraft/show/107160381,3:00,10:29,320,"471,889$","428,607$","$1,339.40","$57,274.88"
SFO - FSD,56873155712,S-OKC-FSD-3,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/56873155712,https://www.airlines-manager.com/aircraft/show/107160380,8:00,15:29,320,"471,889$","428,607$","$1,339.40","$57,274.88"
SFO - FSD,56892624107,S-OKC-FSD-2,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/56892624107,https://www.airlines-manager.com/aircraft/show/107160379,16:00,23:29,288,"442,795$","400,719$","$1,391.39","$53,548.20"
SFO - GRR,56862956333,S-BHM-GRR-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/56862956333,https://www.airlines-manager.com/aircraft/show/117782583,1:00,10:44,198,"458,303$","419,852$","$2,120.46","$43,135.48"
SFO - GRR,56869877595,S-BHM-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/56869877595,https://www.airlines-manager.com/aircraft/show/117782567,5:45,15:29,320,"608,484$","555,512$","$1,735.98","$57,073.15"
SFO - GRR,56873155714,S-BHM-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/56873155714,https://www.airlines-manager.com/aircraft/show/117782566,8:00,17:44,320,"608,484$","555,512$","$1,735.98","$57,073.15"
SFO - GRR,56892624119,S-BHM-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/56892624119,https://www.airlines-manager.com/aircraft/show/117782568,16:00,1:44,320,"608,484$","555,512$","$1,735.98","$57,073.15"
SFO - GRR,56895754204,S-BHM-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/56895754204,https://www.airlines-manager.com/aircraft/show/117782569,17:30,3:14,320,"608,484$","555,512$","$1,735.98","$57,073.15"
SFO - GSO,56862956241,S-GSO-SYR-4,737-900ER,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/56862956241,https://www.airlines-manager.com/aircraft/show/119550235,0:30,11:29,320,"687,935$","629,220$","$1,966.31","$57,288.62"
SFO - GSO,56869877627,S-GSO-SYR-5,A319-100,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/56869877627,https://www.airlines-manager.com/aircraft/show/120112473,6:00,17:14,198,"519,051$","476,182$","$2,404.96","$42,390.09"
SFO - GSO,56883365117,S-GSO-SYR-1,737-900ER,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/56883365117,https://www.airlines-manager.com/aircraft/show/120056764,12:00,22:59,320,"687,935$","629,220$","$1,966.31","$57,288.62"
SFO - GSO,56886798136,S-GSO-SYR-2,737-900ER,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/56886798136,https://www.airlines-manager.com/aircraft/show/120056763,13:00,23:59,320,"687,935$","629,220$","$1,966.31","$57,288.62"
SFO - GSO,56906228777,S-GSO-SYR-3,737-900ER,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/56906228777,https://www.airlines-manager.com/aircraft/show/120056762,23:30,10:29,320,"687,935$","629,220$","$1,966.31","$57,288.62"
SFO - HKG,56901278294,S-168B-6 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/56901278294,https://www.airlines-manager.com/aircraft/show/87083947,21:15,23:59,1046,"5,282,521$","4,883,932$","$4,669.15","$1,786,804.39"
SFO - HKG,56906228761,S-168A-6 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/56906228761,https://www.airlines-manager.com/aircraft/show/88032836,23:15,1:59,1046,"5,282,521$","4,883,932$","$4,669.15","$1,786,804.39"
SFO - IAD,56862956119,S-IAD-CLT-1,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/56862956119,https://www.airlines-manager.com/aircraft/show/96135565,0:00,11:14,400,"912,332$","834,314$","$2,085.79","$74,271.28"
SFO - IAD,56866822798,S-IAD-CLT-5,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/56866822798,https://www.airlines-manager.com/aircraft/show/96135561,4:00,15:14,400,"912,332$","834,314$","$2,085.79","$74,271.28"
SFO - IAD,56869877610,S-IAD-CLT-2,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/56869877610,https://www.airlines-manager.com/aircraft/show/96135564,6:00,17:14,400,"912,332$","834,314$","$2,085.79","$74,271.28"
SFO - IAD,56886798048,S-IAD-CLT-3,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/56886798048,https://www.airlines-manager.com/aircraft/show/96135563,12:45,23:59,400,"912,332$","834,314$","$2,085.79","$74,271.28"
SFO - IAD,56892624183,S-IAD-CLT-4,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/56892624183,https://www.airlines-manager.com/aircraft/show/96135562,16:45,3:59,400,"912,332$","834,314$","$2,085.79","$74,271.28"
SFO - IAH,56866822904,S-IAH-MEX-2,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/56866822904,https://www.airlines-manager.com/aircraft/show/101045338,4:45,12:59,400,"694,602$","624,794$","$1,561.99","$75,885.91"
SFO - IAH,56873155581,S-IAH-MEX-5,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/56873155581,https://www.airlines-manager.com/aircraft/show/101045335,6:45,14:59,400,"694,602$","624,794$","$1,561.99","$75,885.91"
SFO - IAH,56886798093,S-IAH-MEX-1,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/56886798093,https://www.airlines-manager.com/aircraft/show/101045339,13:00,21:14,400,"694,602$","624,794$","$1,561.99","$75,885.91"
SFO - IAH,56889535269,S-IAH-MEX-4,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/56889535269,https://www.airlines-manager.com/aircraft/show/101045336,15:00,23:14,400,"694,602$","624,794$","$1,561.99","$75,885.91"
SFO - IAH,56898577625,S-IAH-MEX-3,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/56898577625,https://www.airlines-manager.com/aircraft/show/101045337,19:30,3:44,400,"694,602$","624,794$","$1,561.99","$75,885.91"
SFO - ICN,56866822949,S-168D-1 B2,747-400,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/56866822949,https://www.airlines-manager.com/aircraft/show/120752294,5:15,3:29,968,"4,255,893$","3,935,008$","$4,065.09","$176,986.87"
SFO - ICN,56906228762,S-168C-7 B2,747-400,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/56906228762,https://www.airlines-manager.com/aircraft/show/120752307,23:15,21:29,968,"4,255,893$","3,935,008$","$4,065.09","$176,986.87"
SFO - ICT,56862956284,S-ICT-BFF-3,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/56862956284,https://www.airlines-manager.com/aircraft/show/114912263,0:45,8:14,310,"469,158$","430,023$","$1,387.17","$57,464.10"
SFO - ICT,56873155720,S-ICT-BFF-2,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/56873155720,https://www.airlines-manager.com/aircraft/show/114912264,8:00,15:29,310,"469,158$","430,023$","$1,387.17","$57,464.10"
SFO - ICT,56892624131,S-ICT-BFF-1,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/56892624131,https://www.airlines-manager.com/aircraft/show/114912267,16:00,23:29,310,"469,158$","430,023$","$1,387.17","$57,464.10"
SFO - ICT,56895754214,S-ICT-BFF-5,ERJ-175,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/56895754214,https://www.airlines-manager.com/aircraft/show/114912306,17:30,0:59,112,"221,348$","195,492$","$1,745.46","$26,123.65"
SFO - ICT,56898577541,S-ICT-BFF-4,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/56898577541,https://www.airlines-manager.com/aircraft/show/114912268,18:45,2:14,310,"469,158$","430,023$","$1,387.17","$57,464.10"
SFO - IND,56866822947,S-IND-CVG-4,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/56866822947,https://www.airlines-manager.com/aircraft/show/99316503,5:15,14:59,310,"605,607$","555,557$","$1,792.12","$57,077.77"
SFO - IND,56873155634,S-IND-CVG-6,ERJ-175,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/56873155634,https://www.airlines-manager.com/aircraft/show/99174346,7:15,16:59,112,"284,129$","250,715$","$2,238.53","$25,758.39"
SFO - IND,56886798166,S-IND-CVG-1,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/56886798166,https://www.airlines-manager.com/aircraft/show/99316506,13:00,22:44,310,"605,607$","555,557$","$1,792.12","$57,077.77"
SFO - IND,56889535299,S-IND-CVG-3,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/56889535299,https://www.airlines-manager.com/aircraft/show/99316504,15:00,0:44,310,"605,607$","555,557$","$1,792.12","$57,077.77"
SFO - IND,56892624224,S-IND-CVG-5,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/56892624224,https://www.airlines-manager.com/aircraft/show/99316502,17:00,2:44,310,"605,607$","555,557$","$1,792.12","$57,077.77"
SFO - IND,56906228731,S-IND-CVG-2,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/56906228731,https://www.airlines-manager.com/aircraft/show/99316505,23:00,8:44,310,"605,607$","555,557$","$1,792.12","$57,077.77"
SFO - JAC,56862956294,S-MAF-FCA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/56862956294,https://www.airlines-manager.com/aircraft/show/120056761,1:00,5:59,272,"285,290$","263,927$",$970.32,"$52,961.94"
SFO - JAC,56866822921,S-MAF-FCA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/56866822921,https://www.airlines-manager.com/aircraft/show/120056758,5:00,9:59,272,"285,290$","263,927$",$970.32,"$52,961.94"
SFO - JAC,56886798062,S-MAF-FCA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/56886798062,https://www.airlines-manager.com/aircraft/show/120056759,13:00,17:59,272,"285,290$","263,927$",$970.32,"$52,961.94"
SFO - JAC,56895754283,S-MAF-FCA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/56895754283,https://www.airlines-manager.com/aircraft/show/120056760,18:15,23:14,272,"285,290$","263,927$",$970.32,"$52,961.94"
SFO - JAC,56901278198,S-MAF-FCA-5,ERJ-175,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/56901278198,https://www.airlines-manager.com/aircraft/show/119652600,20:15,1:14,112,"149,834$","131,932$","$1,177.96","$26,474.65"
SFO - JAN,56862956521,S-SAV-JAN-5 B,A319-100,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/56862956521,https://www.airlines-manager.com/aircraft/show/114917486,2:15,11:29,198,"439,387$","402,942$","$2,035.06","$43,639.93"
SFO - JAN,56869877637,S-SAV-JAN-3,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/56869877637,https://www.airlines-manager.com/aircraft/show/114912269,6:15,15:29,310,"583,909$","538,452$","$1,736.94","$58,316.10"
SFO - JAN,56873155696,S-SAV-JAN-2,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/56873155696,https://www.airlines-manager.com/aircraft/show/114912266,7:45,16:59,310,"583,909$","538,452$","$1,736.94","$58,316.10"
SFO - JAN,56892624232,S-SAV-JAN-1,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/56892624232,https://www.airlines-manager.com/aircraft/show/114912265,17:00,2:14,310,"583,909$","538,452$","$1,736.94","$58,316.10"
SFO - JAN,56898577579,S-SAV-JAN-4,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/56898577579,https://www.airlines-manager.com/aircraft/show/114912270,19:00,4:14,310,"583,909$","538,452$","$1,736.94","$58,316.10"
SFO - JAX,56869877616,S-JAX-SAT-5,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/56869877616,https://www.airlines-manager.com/aircraft/show/86377315,6:00,17:14,310,"704,676$","649,607$","$2,095.51","$57,828.52"
SFO - JAX,56886798147,S-JAX-SAT-1,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/56886798147,https://www.airlines-manager.com/aircraft/show/86375568,13:00,0:14,310,"704,676$","649,607$","$2,095.51","$57,828.52"
SFO - JAX,56889535290,S-JAX-SAT-2,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/56889535290,https://www.airlines-manager.com/aircraft/show/86371267,15:00,2:14,310,"704,676$","649,607$","$2,095.51","$57,828.52"
SFO - JAX,56901278261,S-JAX-SAT-3,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/56901278261,https://www.airlines-manager.com/aircraft/show/86385102,21:00,8:14,310,"704,676$","649,607$","$2,095.51","$57,828.52"
SFO - JAX,56906228728,S-JAX-SAT-4,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/56906228728,https://www.airlines-manager.com/aircraft/show/86378760,23:00,10:14,310,"704,676$","649,607$","$2,095.51","$57,828.52"
SFO - JFK,56862956300,S-MIA-JFK-4,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/56862956300,https://www.airlines-manager.com/aircraft/show/89233034,1:00,12:59,400,"965,414$","866,916$","$2,167.29","$72,343.48"
SFO - JFK,56873155605,S-MIA-JFK-5,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/56873155605,https://www.airlines-manager.com/aircraft/show/89233035,7:00,18:59,400,"965,414$","866,916$","$2,167.29","$72,343.48"
SFO - JFK,56886798084,S-MIA-JFK-1,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/56886798084,https://www.airlines-manager.com/aircraft/show/89233032,13:00,0:59,400,"965,414$","866,916$","$2,167.29","$72,343.48"
SFO - JFK,56892624094,S-MIA-JFK-2,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/56892624094,https://www.airlines-manager.com/aircraft/show/84622093,16:00,3:59,400,"965,414$","866,916$","$2,167.29","$72,343.48"
SFO - JFK,56898577553,S-MIA-JFK-3,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/56898577553,https://www.airlines-manager.com/aircraft/show/89233031,19:00,6:59,400,"965,414$","866,916$","$2,167.29","$72,343.48"
SFO - KIX,56862956423,S-168D-3 B2,747-400,https://www.airlines-manager.com/network/showline/50769294,https://www.airlines-manager.com/network/showflight/56862956423,https://www.airlines-manager.com/aircraft/show/120752296,1:30,22:59,968,"4,000,997$","3,703,245$","$3,825.67","$172,377.58"
SFO - KIX,56898577643,S-168C-2 B2,747-400,https://www.airlines-manager.com/network/showline/50769294,https://www.airlines-manager.com/network/showflight/56898577643,https://www.airlines-manager.com/aircraft/show/120752302,19:30,16:59,968,"4,000,997$","3,703,245$","$3,825.67","$172,377.58"
SFO - KOA,56862956604,S-KOA-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/56862956604,https://www.airlines-manager.com/aircraft/show/112650101,2:45,13:59,310,"705,734$","650,862$","$2,099.55","$57,940.24"
SFO - KOA,56866822914,S-KOA-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/56866822914,https://www.airlines-manager.com/aircraft/show/112650100,4:45,15:59,310,"705,734$","650,862$","$2,099.55","$57,940.24"
SFO - KOA,56886798190,S-KOA-PWM-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/56886798190,https://www.airlines-manager.com/aircraft/show/112650091,13:00,0:14,198,"529,574$","485,575$","$2,452.40","$43,226.26"
SFO - KOA,56892624230,S-KOA-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/56892624230,https://www.airlines-manager.com/aircraft/show/112650103,17:00,4:14,310,"705,734$","650,862$","$2,099.55","$57,940.24"
SFO - KOA,56901278148,S-KOA-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/56901278148,https://www.airlines-manager.com/aircraft/show/112650102,20:00,7:14,310,"705,734$","650,862$","$2,099.55","$57,940.24"
SFO - LAS,56869877604,S-BOS-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/56869877604,https://www.airlines-manager.com/aircraft/show/104901564,6:00,9:44,338,"218,684$","179,991$",$532.52,"$48,211.88"
SFO - LAS,56873155598,S-BOS-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/56873155598,https://www.airlines-manager.com/aircraft/show/104870960,7:00,10:44,338,"218,684$","179,991$",$532.52,"$48,211.88"
SFO - LAS,56883365078,S-BOS-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/56883365078,https://www.airlines-manager.com/aircraft/show/104874465,12:00,15:44,338,"218,684$","179,991$",$532.52,"$48,211.88"
SFO - LAS,56892624161,S-BOS-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/56892624161,https://www.airlines-manager.com/aircraft/show/104901544,16:30,20:14,338,"218,684$","179,991$",$532.52,"$48,211.88"
SFO - LAS,56901278199,S-BOS-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/56901278199,https://www.airlines-manager.com/aircraft/show/104864961,20:30,0:14,338,"218,684$","179,991$",$532.52,"$48,211.88"
SFO - LAX,56862956496,S-PHL-SEA-6 B,A319-100,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/56862956496,https://www.airlines-manager.com/aircraft/show/97900730,2:00,5:29,198,"133,747$","101,733$",$513.80,"$29,205.65"
SFO - LAX,56866822884,S-PHL-SEA-1,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/56866822884,https://www.airlines-manager.com/aircraft/show/92390872,4:30,7:59,320,"176,398$","129,187$",$403.71,"$37,087.18"
SFO - LAX,56873155639,S-PHL-SEA-5,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/56873155639,https://www.airlines-manager.com/aircraft/show/92390869,7:30,10:59,320,"176,398$","129,187$",$403.71,"$37,087.18"
SFO - LAX,56876734107,S-PHL-SEA-4,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/56876734107,https://www.airlines-manager.com/aircraft/show/92390870,8:15,11:44,320,"176,398$","129,187$",$403.71,"$37,087.18"
SFO - LAX,56883365096,S-PHL-SEA-3,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/56883365096,https://www.airlines-manager.com/aircraft/show/92390873,12:00,15:29,320,"176,398$","129,187$",$403.71,"$37,087.18"
SFO - LAX,56892624185,S-PHL-SEA-2,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/56892624185,https://www.airlines-manager.com/aircraft/show/92390871,16:45,20:14,320,"176,398$","129,187$",$403.71,"$37,087.18"
SFO - LEX,56862956493,S-BTV-LEX-1,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/56862956493,https://www.airlines-manager.com/aircraft/show/112650095,2:00,11:59,310,"625,642$","578,194$","$1,865.14","$57,915.93"
SFO - LEX,56869877623,S-BTV-LEX-2,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/56869877623,https://www.airlines-manager.com/aircraft/show/112650094,6:00,15:59,310,"625,642$","578,194$","$1,865.14","$57,915.93"
SFO - LEX,56873155719,S-BTV-LEX-3,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/56873155719,https://www.airlines-manager.com/aircraft/show/112650093,8:00,17:59,310,"625,642$","578,194$","$1,865.14","$57,915.93"
SFO - LEX,56886798283,S-BTV-LEX-4,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/56886798283,https://www.airlines-manager.com/aircraft/show/112650092,14:00,23:59,310,"625,642$","578,194$","$1,865.14","$57,915.93"
SFO - LEX,56901278162,S-BTV-LEX-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/56901278162,https://www.airlines-manager.com/aircraft/show/112650089,20:00,5:59,198,"470,560$","432,514$","$2,184.41","$43,323.61"
SFO - LGB,56862956667,S-FAR-BIL-2,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/56862956667,https://www.airlines-manager.com/aircraft/show/117782585,3:15,6:44,310,"181,588$","157,489$",$508.03,"$45,212.15"
SFO - LGB,56880042801,S-FAR-BIL-1,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/56880042801,https://www.airlines-manager.com/aircraft/show/117782584,11:00,14:29,310,"181,588$","157,489$",$508.03,"$45,212.15"
SFO - LGB,56889535312,S-FAR-BIL-4,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/56889535312,https://www.airlines-manager.com/aircraft/show/117782587,15:00,18:29,310,"181,588$","157,489$",$508.03,"$45,212.15"
SFO - LGB,56903707069,S-FAR-BIL-3,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/56903707069,https://www.airlines-manager.com/aircraft/show/117782586,21:30,0:59,310,"181,588$","157,489$",$508.03,"$45,212.15"
SFO - LHR,56862956607,S-168C-4 B2,747-400,https://www.airlines-manager.com/network/showline/50769240,https://www.airlines-manager.com/network/showflight/56862956607,https://www.airlines-manager.com/aircraft/show/120752304,2:45,23:59,968,"4,060,744$","3,726,461$","$3,849.65","$175,500.52"
SFO - LHR,56906228736,S-168D-3 B2,747-400,https://www.airlines-manager.com/network/showline/50769240,https://www.airlines-manager.com/network/showflight/56906228736,https://www.airlines-manager.com/aircraft/show/120752296,23:00,20:14,968,"4,060,744$","3,726,461$","$3,849.65","$175,500.52"
SFO - LIT,56862956506,S-SDF-LIT-3,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/56862956506,https://www.airlines-manager.com/aircraft/show/94886627,2:15,10:59,310,"542,816$","499,788$","$1,612.22","$57,227.63"
SFO - LIT,56862956508,S-SDF-LIT-5,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/56862956508,https://www.airlines-manager.com/aircraft/show/106453498,3:15,11:59,310,"542,816$","499,788$","$1,612.22","$57,227.63"
SFO - LIT,56886798267,S-SDF-LIT-2,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/56886798267,https://www.airlines-manager.com/aircraft/show/94886628,14:00,22:44,310,"542,816$","499,788$","$1,612.22","$57,227.63"
SFO - LIT,56889535303,S-SDF-LIT-4,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/56889535303,https://www.airlines-manager.com/aircraft/show/106453500,15:00,23:44,310,"542,816$","499,788$","$1,612.22","$57,227.63"
SFO - LIT,56906228807,S-SDF-LIT-1,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/56906228807,https://www.airlines-manager.com/aircraft/show/106453499,23:45,8:29,310,"542,816$","499,788$","$1,612.22","$57,227.63"
SFO - MAF,56862956653,S-MAF-FCA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/56862956653,https://www.airlines-manager.com/aircraft/show/120056760,3:15,9:59,272,"388,045$","360,385$","$1,324.94","$53,522.52"
SFO - MAF,56873155726,S-MAF-FCA-5,ERJ-175,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/56873155726,https://www.airlines-manager.com/aircraft/show/119652600,8:00,14:44,112,"201,536$","177,709$","$1,586.69","$26,392.43"
SFO - MAF,56886798064,S-MAF-FCA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/56886798064,https://www.airlines-manager.com/aircraft/show/120056761,13:00,19:44,272,"388,045$","360,385$","$1,324.94","$53,522.52"
SFO - MAF,56892624197,S-MAF-FCA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/56892624197,https://www.airlines-manager.com/aircraft/show/120056758,17:00,23:44,272,"388,045$","360,385$","$1,324.94","$53,522.52"
SFO - MAF,56903707095,S-MAF-FCA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/56903707095,https://www.airlines-manager.com/aircraft/show/120056759,22:00,4:44,272,"388,045$","360,385$","$1,324.94","$53,522.52"
SFO - MCI,56873155607,S-MCI-OMA-2,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/56873155607,https://www.airlines-manager.com/aircraft/show/88239554,7:00,14:59,320,"507,197$","458,271$","$1,432.10","$57,403.47"
SFO - MCI,56892624211,S-MCI-OMA-1,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/56892624211,https://www.airlines-manager.com/aircraft/show/88239553,17:00,0:59,320,"507,197$","458,271$","$1,432.10","$57,403.47"
SFO - MCI,56892624212,S-MCI-OMA-5 B,A319-100,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/56892624212,https://www.airlines-manager.com/aircraft/show/105223003,17:00,0:59,198,"382,381$","347,373$","$1,754.41","$43,512.28"
SFO - MCI,56898577521,S-MCI-OMA-4,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/56898577521,https://www.airlines-manager.com/aircraft/show/88239557,18:45,2:44,320,"507,197$","458,271$","$1,432.10","$57,403.47"
SFO - MCI,56906228749,S-MCI-OMA-3,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/56906228749,https://www.airlines-manager.com/aircraft/show/88239555,23:15,7:14,320,"507,197$","458,271$","$1,432.10","$57,403.47"
SFO - MCO,56862956167,S-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/56862956167,https://www.airlines-manager.com/aircraft/show/120141531,0:00,11:29,0,"207,765$","117,928$",#DIV/0!,"$10,269.49"
SFO - MCO,56862956168,S-MCO-MSP-2,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/56862956168,https://www.airlines-manager.com/aircraft/show/105367367,3:30,14:59,338,"795,031$","730,062$","$2,159.95","$63,575.79"
SFO - MCO,56866822869,S-MCO-MSP-5,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/56866822869,https://www.airlines-manager.com/aircraft/show/105367364,4:30,15:59,338,"795,031$","730,062$","$2,159.95","$63,575.79"
SFO - MCO,56889535259,S-MCO-MSP-1,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/56889535259,https://www.airlines-manager.com/aircraft/show/105367368,15:00,2:29,338,"795,031$","730,062$","$2,159.95","$63,575.79"
SFO - MCO,56892624198,S-MCO-MSP-4,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/56892624198,https://www.airlines-manager.com/aircraft/show/105367365,17:00,4:29,338,"795,031$","730,062$","$2,159.95","$63,575.79"
SFO - MCO,56898577587,S-MCO-MSP-3,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/56898577587,https://www.airlines-manager.com/aircraft/show/105367366,19:15,6:44,338,"795,031$","730,062$","$2,159.95","$63,575.79"
SFO - MEM,56862956585,S-MEM-PIT-4,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/56862956585,https://www.airlines-manager.com/aircraft/show/98788934,2:45,11:59,310,"576,829$","528,105$","$1,703.56","$57,195.49"
SFO - MEM,56869877602,S-MEM-PIT-6,ERJ-175,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/56869877602,https://www.airlines-manager.com/aircraft/show/98675305,5:45,14:59,112,"270,633$","238,251$","$2,127.24","$25,803.36"
SFO - MEM,56886798164,S-MEM-PIT-1,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/56886798164,https://www.airlines-manager.com/aircraft/show/98788937,13:00,22:14,310,"576,829$","528,105$","$1,703.56","$57,195.49"
SFO - MEM,56892624126,S-MEM-PIT-3,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/56892624126,https://www.airlines-manager.com/aircraft/show/98788935,16:00,1:14,310,"576,829$","528,105$","$1,703.56","$57,195.49"
SFO - MEM,56898577574,S-MEM-PIT-5,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/56898577574,https://www.airlines-manager.com/aircraft/show/98788933,19:00,4:14,310,"576,829$","528,105$","$1,703.56","$57,195.49"
SFO - MEM,56906228804,S-MEM-PIT-2,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/56906228804,https://www.airlines-manager.com/aircraft/show/98788936,23:45,8:59,310,"576,829$","528,105$","$1,703.56","$57,195.49"
SFO - MEX,56862956692,S-IAH-MEX-3,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/56862956692,https://www.airlines-manager.com/aircraft/show/101045337,3:45,12:59,400,"773,222$","702,355$","$1,755.89","$76,067.33"
SFO - MEX,56886798092,S-IAH-MEX-2,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/56886798092,https://www.airlines-manager.com/aircraft/show/101045338,13:00,22:14,400,"773,222$","702,355$","$1,755.89","$76,067.33"
SFO - MEX,56889535268,S-IAH-MEX-5,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/56889535268,https://www.airlines-manager.com/aircraft/show/101045335,15:00,0:14,400,"773,222$","702,355$","$1,755.89","$76,067.33"
SFO - MEX,56901278280,S-IAH-MEX-1,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/56901278280,https://www.airlines-manager.com/aircraft/show/101045339,21:15,6:29,400,"773,222$","702,355$","$1,755.89","$76,067.33"
SFO - MEX,56906228748,S-IAH-MEX-4,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/56906228748,https://www.airlines-manager.com/aircraft/show/101045336,23:15,8:29,371,"726,138$","657,041$","$1,771.00","$71,159.68"
SFO - MFR,56862956313,S-TYS-MSN-2,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/56862956313,https://www.airlines-manager.com/aircraft/show/117782564,1:00,4:29,320,"173,273$","146,641$",$458.25,"$42,097.89"
SFO - MFR,56866822813,S-TYS-MSN-1,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/56866822813,https://www.airlines-manager.com/aircraft/show/117782565,4:00,7:29,320,"173,273$","146,641$",$458.25,"$42,097.89"
SFO - MFR,56892624116,S-TYS-MSN-3,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/56892624116,https://www.airlines-manager.com/aircraft/show/117782563,16:00,19:29,320,"173,273$","146,641$",$458.25,"$42,097.89"
SFO - MFR,56895754175,S-TYS-MSN-4,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/56895754175,https://www.airlines-manager.com/aircraft/show/117782562,17:15,20:44,292,"164,107$","137,723$",$471.65,"$39,537.70"
SFO - MHT,56862956199,S-MHT-CHS-3,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/56862956199,https://www.airlines-manager.com/aircraft/show/114917463,0:15,12:44,320,"762,087$","698,102$","$2,181.57","$55,922.72"
SFO - MHT,56866822849,S-MHT-CHS-4,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/56866822849,https://www.airlines-manager.com/aircraft/show/114266973,4:15,16:44,320,"762,087$","698,102$","$2,181.57","$55,922.72"
SFO - MHT,56886798128,S-MHT-CHS-1,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/56886798128,https://www.airlines-manager.com/aircraft/show/114917465,13:00,1:29,320,"762,087$","698,102$","$2,181.57","$55,922.72"
SFO - MHT,56892624220,S-MHT-CHS-2,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/56892624220,https://www.airlines-manager.com/aircraft/show/114917464,17:00,5:29,320,"762,087$","698,102$","$2,181.57","$55,922.72"
SFO - MHT,56901278163,S-MHT-CHS-5 B,A319-100,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/56901278163,https://www.airlines-manager.com/aircraft/show/114912262,20:00,8:29,198,"571,071$","524,144$","$2,647.19","$41,987.50"
SFO - MIA,56862956299,S-MIA-JFK-1,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/56862956299,https://www.airlines-manager.com/aircraft/show/89233032,1:00,12:59,400,"958,829$","868,986$","$2,172.47","$72,516.22"
SFO - MIA,56866822797,S-MIA-JFK-2,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/56866822797,https://www.airlines-manager.com/aircraft/show/84622093,4:00,15:59,400,"958,829$","868,986$","$2,172.47","$72,516.22"
SFO - MIA,56873155604,S-MIA-JFK-3,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/56873155604,https://www.airlines-manager.com/aircraft/show/89233031,7:00,18:59,400,"958,829$","868,986$","$2,172.47","$72,516.22"
SFO - MIA,56886798085,S-MIA-JFK-4,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/56886798085,https://www.airlines-manager.com/aircraft/show/89233034,13:00,0:59,400,"958,829$","868,986$","$2,172.47","$72,516.22"
SFO - MIA,56898577554,S-MIA-JFK-5,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/56898577554,https://www.airlines-manager.com/aircraft/show/89233035,19:00,6:59,400,"958,829$","868,986$","$2,172.47","$72,516.22"
SFO - MKE,56862956227,S-CLE-MKE-1,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/56862956227,https://www.airlines-manager.com/aircraft/show/92519368,0:30,9:44,320,"586,128$","533,360$","$1,666.75","$57,764.62"
SFO - MKE,56869877569,S-CLE-MKE-4,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/56869877569,https://www.airlines-manager.com/aircraft/show/92519371,5:30,14:44,320,"586,128$","533,360$","$1,666.75","$57,764.62"
SFO - MKE,56873155583,S-CLE-MKE-3,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/56873155583,https://www.airlines-manager.com/aircraft/show/92519367,6:45,15:59,320,"586,128$","533,360$","$1,666.75","$57,764.62"
SFO - MKE,56892624100,S-CLE-MKE-2,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/56892624100,https://www.airlines-manager.com/aircraft/show/92519369,16:00,1:14,320,"586,128$","533,360$","$1,666.75","$57,764.62"
SFO - MKE,56895754252,S-CLE-MKE-5,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/56895754252,https://www.airlines-manager.com/aircraft/show/92519370,18:00,3:14,320,"586,128$","533,360$","$1,666.75","$57,764.62"
SFO - MSN,56862956523,S-TYS-MSN-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/56862956523,https://www.airlines-manager.com/aircraft/show/117782582,2:15,11:14,198,"424,215$","388,553$","$1,962.39","$43,252.65"
SFO - MSN,56873155611,S-TYS-MSN-4,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/56873155611,https://www.airlines-manager.com/aircraft/show/117782562,7:00,15:59,320,"562,482$","513,233$","$1,603.85","$57,131.69"
SFO - MSN,56873155612,S-TYS-MSN-3,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/56873155612,https://www.airlines-manager.com/aircraft/show/117782563,7:00,15:59,320,"562,482$","513,233$","$1,603.85","$57,131.69"
SFO - MSN,56892624117,S-TYS-MSN-2,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/56892624117,https://www.airlines-manager.com/aircraft/show/117782564,16:00,0:59,320,"562,482$","513,233$","$1,603.85","$57,131.69"
SFO - MSN,56898577565,S-TYS-MSN-1,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/56898577565,https://www.airlines-manager.com/aircraft/show/117782565,19:00,3:59,320,"562,482$","513,233$","$1,603.85","$57,131.69"
SFO - MSO,56873155587,S-TUL-DSM-1,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/56873155587,https://www.airlines-manager.com/aircraft/show/108410856,6:45,11:44,320,"322,461$","288,750$",$902.34,"$57,943.14"
SFO - MSO,56873155588,S-TUL-DSM-4,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/56873155588,https://www.airlines-manager.com/aircraft/show/108410859,7:30,12:29,320,"322,461$","288,750$",$902.34,"$57,943.14"
SFO - MSO,56886798121,S-TUL-DSM-3,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/56886798121,https://www.airlines-manager.com/aircraft/show/108410858,13:00,17:59,320,"322,461$","288,750$",$902.34,"$57,943.14"
SFO - MSO,56901278258,S-TUL-DSM-2,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/56901278258,https://www.airlines-manager.com/aircraft/show/108410857,21:00,1:59,269,"291,338$","258,682$",$961.64,"$51,909.43"
SFO - MSP,56862956528,S-MCO-MSP-1,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/56862956528,https://www.airlines-manager.com/aircraft/show/105367368,2:30,10:44,338,"572,597$","523,159$","$1,547.81","$63,541.58"
SFO - MSP,56866822870,S-MCO-MSP-4,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/56866822870,https://www.airlines-manager.com/aircraft/show/105367365,4:30,12:44,338,"572,597$","523,159$","$1,547.81","$63,541.58"
SFO - MSP,56873155578,S-MCO-MSP-3,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/56873155578,https://www.airlines-manager.com/aircraft/show/105367366,6:45,14:59,338,"572,597$","523,159$","$1,547.81","$63,541.58"
SFO - MSP,56889535258,S-MCO-MSP-2,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/56889535258,https://www.airlines-manager.com/aircraft/show/105367367,15:00,23:14,338,"572,597$","523,159$","$1,547.81","$63,541.58"
SFO - MSP,56892624082,S-MCO-MSP-5,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/56892624082,https://www.airlines-manager.com/aircraft/show/105367364,16:00,0:14,338,"572,597$","523,159$","$1,547.81","$63,541.58"
SFO - MSY,56862956651,S-MSY-STL-6,ERJ-175,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/56862956651,https://www.airlines-manager.com/aircraft/show/103534666,3:00,12:29,112,"279,484$","246,810$","$2,203.66","$26,025.66"
SFO - MSY,56869877614,S-MSY-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/56869877614,https://www.airlines-manager.com/aircraft/show/98075266,6:00,15:29,320,"593,870$","539,636$","$1,686.36","$56,903.62"
SFO - MSY,56873155707,S-MSY-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/56873155707,https://www.airlines-manager.com/aircraft/show/98075264,8:00,17:29,320,"593,870$","539,636$","$1,686.36","$56,903.62"
SFO - MSY,56886798109,S-MSY-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/56886798109,https://www.airlines-manager.com/aircraft/show/98075267,13:00,22:29,320,"593,870$","539,636$","$1,686.36","$56,903.62"
SFO - MSY,56901278282,S-MSY-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/56901278282,https://www.airlines-manager.com/aircraft/show/98075265,21:15,6:44,320,"593,870$","539,636$","$1,686.36","$56,903.62"
SFO - MSY,56906228751,S-MSY-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/56906228751,https://www.airlines-manager.com/aircraft/show/98075263,23:15,8:44,320,"593,870$","539,636$","$1,686.36","$56,903.62"
SFO - NGO,56862956155,S-168C-5 B2,747-400,https://www.airlines-manager.com/network/showline/50769298,https://www.airlines-manager.com/network/showflight/56862956155,https://www.airlines-manager.com/aircraft/show/120752305,0:00,20:59,968,"3,903,860$","3,617,048$","$3,736.62","$172,377.19"
SFO - NGO,56901278188,S-168D-4 B2,747-400,https://www.airlines-manager.com/network/showline/50769298,https://www.airlines-manager.com/network/showflight/56901278188,https://www.airlines-manager.com/aircraft/show/120752297,20:15,17:14,968,"3,903,860$","3,617,048$","$3,736.62","$172,377.19"
SFO - NRT,56862956156,S-168C-6-B2,747-400,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/56862956156,https://www.airlines-manager.com/aircraft/show/120752306,0:00,20:14,968,"3,876,882$","3,579,468$","$3,697.80","$176,909.46"
SFO - NRT,56895754186,S-168D-5 B2,747-400,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/56895754186,https://www.airlines-manager.com/aircraft/show/120752298,17:15,13:29,968,"3,876,882$","3,579,468$","$3,697.80","$176,909.46"
SFO - OGG,56862956547,S-OGG-AUS-5,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/56862956547,https://www.airlines-manager.com/aircraft/show/92773477,2:30,13:44,310,"697,883$","645,321$","$2,081.68","$57,446.97"
SFO - OGG,56886798212,S-OGG-AUS-1,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/56886798212,https://www.airlines-manager.com/aircraft/show/92773481,13:30,0:44,310,"697,883$","645,321$","$2,081.68","$57,446.97"
SFO - OGG,56889535348,S-OGG-AUS-2,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/56889535348,https://www.airlines-manager.com/aircraft/show/92773480,15:30,2:44,310,"697,883$","645,321$","$2,081.68","$57,446.97"
SFO - OGG,56903707063,S-OGG-AUS-3,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/56903707063,https://www.airlines-manager.com/aircraft/show/92773479,21:30,8:44,310,"697,883$","645,321$","$2,081.68","$57,446.97"
SFO - OGG,56906228779,S-OGG-AUS-4,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/56906228779,https://www.airlines-manager.com/aircraft/show/92773478,23:30,10:44,310,"697,883$","645,321$","$2,081.68","$57,446.97"
SFO - OKC,56862956235,S-OKC-FSD-3,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/56862956235,https://www.airlines-manager.com/aircraft/show/107160380,0:30,7:59,320,"476,319$","432,077$","$1,350.24","$57,738.57"
SFO - OKC,56873155711,S-OKC-FSD-2,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/56873155711,https://www.airlines-manager.com/aircraft/show/107160379,8:00,15:29,320,"476,319$","432,077$","$1,350.24","$57,738.57"
SFO - OKC,56892624218,S-OKC-FSD-1,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/56892624218,https://www.airlines-manager.com/aircraft/show/107160378,17:00,0:29,320,"476,319$","432,077$","$1,350.24","$57,738.57"
SFO - OKC,56895754334,S-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/56895754334,https://www.airlines-manager.com/aircraft/show/107132310,18:30,1:59,112,"224,788$","198,645$","$1,773.62","$26,544.99"
SFO - OKC,56898577631,S-OKC-FSD-4,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/56898577631,https://www.airlines-manager.com/aircraft/show/107160381,19:30,2:59,320,"476,319$","432,077$","$1,350.24","$57,738.57"
SFO - OMA,56862956304,S-MCI-OMA-1,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/56862956304,https://www.airlines-manager.com/aircraft/show/88239553,1:00,8:44,320,"484,959$","439,887$","$1,374.65","$56,881.94"
SFO - OMA,56862956305,S-MCI-OMA-5 B,A319-100,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/56862956305,https://www.airlines-manager.com/aircraft/show/105223003,1:00,8:44,198,"366,607$","334,272$","$1,688.24","$43,224.83"
SFO - OMA,56862956306,S-MCI-OMA-4,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/56862956306,https://www.airlines-manager.com/aircraft/show/88239557,2:45,10:29,320,"484,959$","439,887$","$1,374.65","$56,881.94"
SFO - OMA,56873155621,S-MCI-OMA-3,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/56873155621,https://www.airlines-manager.com/aircraft/show/88239555,7:15,14:59,320,"484,959$","439,887$","$1,374.65","$56,881.94"
SFO - OMA,56889535274,S-MCI-OMA-2,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/56889535274,https://www.airlines-manager.com/aircraft/show/88239554,15:00,22:44,320,"484,959$","439,887$","$1,374.65","$56,881.94"
SFO - ONT,56866822887,S-OKC-FSD-2,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/56866822887,https://www.airlines-manager.com/aircraft/show/107160379,4:30,7:59,320,"180,494$","150,361$",$469.88,"$43,165.84"
SFO - ONT,56886798119,S-OKC-FSD-1,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/56886798119,https://www.airlines-manager.com/aircraft/show/107160378,13:00,16:29,320,"180,494$","150,361$",$469.88,"$43,165.84"
SFO - ONT,56889535326,S-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/56889535326,https://www.airlines-manager.com/aircraft/show/107132310,15:00,18:29,112,"83,245$","67,122$",$599.30,"$19,269.47"
SFO - ONT,56892624109,S-OKC-FSD-4,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/56892624109,https://www.airlines-manager.com/aircraft/show/107160381,16:00,19:29,320,"180,494$","150,361$",$469.88,"$43,165.84"
SFO - ONT,56901278257,S-OKC-FSD-3,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/56901278257,https://www.airlines-manager.com/aircraft/show/107160380,21:00,0:29,320,"180,494$","150,361$",$469.88,"$43,165.84"
SFO - ORD,56869877611,S-ORD-DTW-2,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/56869877611,https://www.airlines-manager.com/aircraft/show/101045333,6:00,14:59,400,"760,394$","672,993$","$1,682.48","$74,915.73"
SFO - ORD,56873155637,S-ORD-DTW-5,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/56873155637,https://www.airlines-manager.com/aircraft/show/101045330,7:30,16:29,400,"760,394$","672,993$","$1,682.48","$74,915.73"
SFO - ORD,56886798090,S-ORD-DTW-1,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/56886798090,https://www.airlines-manager.com/aircraft/show/101045334,13:00,21:59,400,"760,394$","672,993$","$1,682.48","$74,915.73"
SFO - ORD,56889535265,S-ORD-DTW-4,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/56889535265,https://www.airlines-manager.com/aircraft/show/101045331,15:00,23:59,400,"760,394$","672,993$","$1,682.48","$74,915.73"
SFO - ORD,56901278134,S-ORD-DTW-3,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/56901278134,https://www.airlines-manager.com/aircraft/show/101045332,20:00,4:59,400,"760,394$","672,993$","$1,682.48","$74,915.73"
SFO - ORF,56869877579,S-ORF-RIC-3,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/56869877579,https://www.airlines-manager.com/aircraft/show/108328836,5:30,17:29,310,"732,603$","676,491$","$2,182.23","$56,452.66"
SFO - ORF,56873155647,S-ORF-RIC-4,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/56873155647,https://www.airlines-manager.com/aircraft/show/108328837,7:30,19:29,310,"732,603$","676,491$","$2,182.23","$56,452.66"
SFO - ORF,56895754265,S-ORF-RIC-1,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/56895754265,https://www.airlines-manager.com/aircraft/show/108328834,18:00,5:59,310,"732,603$","676,491$","$2,182.23","$56,452.66"
SFO - ORF,56901278144,S-ORF-RIC-2,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/56901278144,https://www.airlines-manager.com/aircraft/show/108328835,20:00,7:59,310,"732,603$","676,491$","$2,182.23","$56,452.66"
SFO - ORF,56903707121,S-ORF-RIC-5 B,A319-100,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/56903707121,https://www.airlines-manager.com/aircraft/show/108328833,22:00,9:59,198,"547,743$","502,744$","$2,539.11","$41,953.60"
SFO - PBI,56866822844,S-PBI-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/56866822844,https://www.airlines-manager.com/aircraft/show/100301186,4:15,16:14,320,"734,200$","669,869$","$2,093.34","$55,900.06"
SFO - PBI,56869877635,S-PBI-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/56869877635,https://www.airlines-manager.com/aircraft/show/100301185,6:15,18:14,320,"734,200$","669,869$","$2,093.34","$55,900.06"
SFO - PBI,56892624217,S-PBI-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/56892624217,https://www.airlines-manager.com/aircraft/show/100301188,17:00,4:59,320,"734,200$","669,869$","$2,093.34","$55,900.06"
SFO - PBI,56898577560,S-PBI-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/56898577560,https://www.airlines-manager.com/aircraft/show/100301187,19:00,6:59,320,"734,200$","669,869$","$2,093.34","$55,900.06"
SFO - PBI,56901278255,S-PBI-RDU-5,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/56901278255,https://www.airlines-manager.com/aircraft/show/100301184,21:00,8:59,320,"734,200$","669,869$","$2,093.34","$55,900.06"
SFO - PDX,56862956177,S-MCO-MSP-5,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/56862956177,https://www.airlines-manager.com/aircraft/show/105367364,0:15,4:29,338,"272,269$","242,872$",$718.56,"$57,371.34"
SFO - PDX,56880042680,S-MCO-MSP-1,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/56880042680,https://www.airlines-manager.com/aircraft/show/105367368,10:45,14:59,338,"272,269$","242,872$",$718.56,"$57,371.34"
SFO - PDX,56886798046,S-MCO-MSP-4,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/56886798046,https://www.airlines-manager.com/aircraft/show/105367365,12:45,16:59,338,"272,269$","242,872$",$718.56,"$57,371.34"
SFO - PDX,56889535257,S-MCO-MSP-3,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/56889535257,https://www.airlines-manager.com/aircraft/show/105367366,15:00,19:14,338,"272,269$","242,872$",$718.56,"$57,371.34"
SFO - PDX,56906228746,S-MCO-MSP-2,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/56906228746,https://www.airlines-manager.com/aircraft/show/105367367,23:15,3:29,274,"241,778$","213,185$",$778.05,"$50,358.66"
SFO - PEK,56862956157,S-168C-7 B2,747-400,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/56862956157,https://www.airlines-manager.com/aircraft/show/120752307,0:00,23:14,968,"4,491,411$","4,124,325$","$4,260.67","$177,517.58"
SFO - PEK,56869877625,S-168D-7 B2,747-400,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/56869877625,https://www.airlines-manager.com/aircraft/show/120752300,6:00,5:14,968,"4,491,411$","4,124,325$","$4,260.67","$177,517.58"
SFO - PHL,56862956126,S-PHL-SEA-2,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/56862956126,https://www.airlines-manager.com/aircraft/show/92390871,0:00,11:44,320,"730,738$","658,186$","$2,056.83","$56,095.40"
SFO - PHL,56883365095,S-PHL-SEA-1,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/56883365095,https://www.airlines-manager.com/aircraft/show/92390872,12:00,23:44,320,"730,738$","658,186$","$2,056.83","$56,095.40"
SFO - PHL,56886798298,S-PHL-SEA-6 B,A319-100,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/56886798298,https://www.airlines-manager.com/aircraft/show/97900730,14:00,1:59,198,"548,740$","496,348$","$2,506.81","$41,419.86"
SFO - PHL,56889535278,S-PHL-SEA-5,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/56889535278,https://www.airlines-manager.com/aircraft/show/92390869,15:00,2:44,320,"730,738$","658,186$","$2,056.83","$56,095.40"
SFO - PHL,56892624053,S-PHL-SEA-4,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/56892624053,https://www.airlines-manager.com/aircraft/show/92390870,15:45,3:29,320,"730,738$","658,186$","$2,056.83","$56,095.40"
SFO - PHL,56898577593,S-PHL-SEA-3,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/56898577593,https://www.airlines-manager.com/aircraft/show/92390873,19:15,6:59,320,"730,738$","658,186$","$2,056.83","$56,095.40"
SFO - PHX,56862956383,S-BOS-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/56862956383,https://www.airlines-manager.com/aircraft/show/104901564,1:30,5:59,338,"323,043$","284,985$",$843.15,"$63,565.43"
SFO - PHX,56862956384,S-BOS-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/56862956384,https://www.airlines-manager.com/aircraft/show/104870960,2:30,6:59,338,"323,043$","284,985$",$843.15,"$63,565.43"
SFO - PHX,56866822831,S-BOS-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/56866822831,https://www.airlines-manager.com/aircraft/show/104874465,4:15,8:44,338,"323,043$","284,985$",$843.15,"$63,565.43"
SFO - PHX,56883365079,S-BOS-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/56883365079,https://www.airlines-manager.com/aircraft/show/104901544,12:00,16:29,338,"323,043$","284,985$",$843.15,"$63,565.43"
SFO - PHX,56892624081,S-BOS-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/56892624081,https://www.airlines-manager.com/aircraft/show/104864961,16:00,20:29,338,"323,043$","284,985$",$843.15,"$63,565.43"
SFO - PIT,56862956365,S-MEM-PIT-3,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/56862956365,https://www.airlines-manager.com/aircraft/show/98788935,1:15,11:59,310,"676,648$","621,492$","$2,004.81","$57,902.98"
SFO - PIT,56866822854,S-MEM-PIT-5,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/56866822854,https://www.airlines-manager.com/aircraft/show/98788933,4:15,14:59,310,"676,648$","621,492$","$2,004.81","$57,902.98"
SFO - PIT,56886798163,S-MEM-PIT-2,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/56886798163,https://www.airlines-manager.com/aircraft/show/98788936,13:00,23:44,310,"676,648$","621,492$","$2,004.81","$57,902.98"
SFO - PIT,56892624125,S-MEM-PIT-4,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/56892624125,https://www.airlines-manager.com/aircraft/show/98788934,16:00,2:44,310,"676,648$","621,492$","$2,004.81","$57,902.98"
SFO - PIT,56898577584,S-MEM-PIT-6,ERJ-175,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/56898577584,https://www.airlines-manager.com/aircraft/show/98675305,19:00,5:44,112,"317,025$","280,006$","$2,500.05","$26,087.52"
SFO - PIT,56903707145,S-MEM-PIT-1,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/56903707145,https://www.airlines-manager.com/aircraft/show/98788937,22:15,8:59,310,"676,648$","621,492$","$2,004.81","$57,902.98"
SFO - PSP,56866822860,S-ICT-BFF-2,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/56866822860,https://www.airlines-manager.com/aircraft/show/114912264,4:15,7:59,310,"200,274$","175,476$",$566.05,"$47,002.50"
SFO - PSP,56883365077,S-ICT-BFF-1,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/56883365077,https://www.airlines-manager.com/aircraft/show/114912267,11:45,15:29,310,"200,274$","175,476$",$566.05,"$47,002.50"
SFO - PSP,56886798205,S-ICT-BFF-5,ERJ-175,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/56886798205,https://www.airlines-manager.com/aircraft/show/114912306,13:15,16:59,112,"92,401$","76,790$",$685.63,"$20,568.75"
SFO - PSP,56889535306,S-ICT-BFF-4,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/56889535306,https://www.airlines-manager.com/aircraft/show/114912268,15:00,18:44,310,"200,274$","175,476$",$566.05,"$47,002.50"
SFO - PSP,56901278267,S-ICT-BFF-3,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/56901278267,https://www.airlines-manager.com/aircraft/show/114912263,21:00,0:44,280,"188,842$","164,389$",$587.10,"$44,032.77"
SFO - PVD,56862956148,S-PVD-BUF-4,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/56862956148,https://www.airlines-manager.com/aircraft/show/112650105,0:00,12:29,310,"763,375$","705,708$","$2,276.48","$56,532.02"
SFO - PVD,56866822937,S-PVD-BUF-5,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/56866822937,https://www.airlines-manager.com/aircraft/show/112650104,5:00,17:29,310,"763,375$","705,708$","$2,276.48","$56,532.02"
SFO - PVD,56886798180,S-PVD-BUF-1,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/56886798180,https://www.airlines-manager.com/aircraft/show/112650108,13:00,1:29,310,"763,375$","705,708$","$2,276.48","$56,532.02"
SFO - PVD,56892624231,S-PVD-BUF-2,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/56892624231,https://www.airlines-manager.com/aircraft/show/112650107,17:00,5:29,310,"763,375$","705,708$","$2,276.48","$56,532.02"
SFO - PVD,56898577577,S-PVD-BUF-3,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/56898577577,https://www.airlines-manager.com/aircraft/show/112650106,19:00,7:29,310,"763,375$","705,708$","$2,276.48","$56,532.02"
SFO - PWM,56862956216,S-KOA-PWM-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/56862956216,https://www.airlines-manager.com/aircraft/show/112650091,0:15,12:59,198,"576,974$","530,777$","$2,680.69","$41,684.06"
SFO - PWM,56866822859,S-KOA-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/56866822859,https://www.airlines-manager.com/aircraft/show/112650103,4:15,16:59,310,"771,182$","713,582$","$2,301.88","$56,040.47"
SFO - PWM,56873155628,S-KOA-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/56873155628,https://www.airlines-manager.com/aircraft/show/112650102,7:15,19:59,310,"771,182$","713,582$","$2,301.88","$56,040.47"
SFO - PWM,56886798287,S-KOA-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/56886798287,https://www.airlines-manager.com/aircraft/show/112650101,14:00,2:44,310,"771,182$","713,582$","$2,301.88","$56,040.47"
SFO - PWM,56892624128,S-KOA-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/56892624128,https://www.airlines-manager.com/aircraft/show/112650100,16:00,4:44,310,"771,182$","713,582$","$2,301.88","$56,040.47"
SFO - RAP,56866822894,S-FAR-BIL-1,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/56866822894,https://www.airlines-manager.com/aircraft/show/117782584,4:30,10:59,310,"399,527$","365,234$","$1,178.17","$56,334.29"
SFO - RAP,56876734158,S-FAR-BIL-4,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/56876734158,https://www.airlines-manager.com/aircraft/show/117782587,8:30,14:59,310,"399,527$","365,234$","$1,178.17","$56,334.29"
SFO - RAP,56889535311,S-FAR-BIL-3,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/56889535311,https://www.airlines-manager.com/aircraft/show/117782586,15:00,21:29,310,"399,527$","365,234$","$1,178.17","$56,334.29"
SFO - RAP,56901278241,S-FAR-BIL-2,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/56901278241,https://www.airlines-manager.com/aircraft/show/117782585,20:45,3:14,288,"382,781$","349,151$","$1,212.33","$53,853.62"
SFO - RDM,56862956381,S-MAF-FCA-5,ERJ-175,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/56862956381,https://www.airlines-manager.com/aircraft/show/119652600,1:15,5:14,112,"102,798$","87,608$",$782.21,"$21,993.64"
SFO - RDM,56869877603,S-MAF-FCA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/56869877603,https://www.airlines-manager.com/aircraft/show/120056761,6:00,9:59,272,"199,098$","180,421$",$663.31,"$45,293.97"
SFO - RDM,56886798061,S-MAF-FCA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/56886798061,https://www.airlines-manager.com/aircraft/show/120056758,13:00,16:59,272,"199,098$","180,421$",$663.31,"$45,293.97"
SFO - RDM,56895754241,S-MAF-FCA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/56895754241,https://www.airlines-manager.com/aircraft/show/120056759,18:00,21:59,272,"199,098$","180,421$",$663.31,"$45,293.97"
SFO - RDM,56906228745,S-MAF-FCA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/56906228745,https://www.airlines-manager.com/aircraft/show/120056760,23:15,3:14,272,"199,098$","180,421$",$663.31,"$45,293.97"
SFO - RDU,56866822929,S-PBI-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/56866822929,https://www.airlines-manager.com/aircraft/show/100301188,5:00,16:14,320,"712,851$","650,128$","$2,031.65","$57,874.90"
SFO - RDU,56873155610,S-PBI-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/56873155610,https://www.airlines-manager.com/aircraft/show/100301187,7:00,18:14,320,"712,851$","650,128$","$2,031.65","$57,874.90"
SFO - RDU,56876734187,S-PBI-RDU-5,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/56876734187,https://www.airlines-manager.com/aircraft/show/100301184,9:00,20:14,320,"712,851$","650,128$","$2,031.65","$57,874.90"
SFO - RDU,56892624216,S-PBI-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/56892624216,https://www.airlines-manager.com/aircraft/show/100301186,17:00,4:14,320,"712,851$","650,128$","$2,031.65","$57,874.90"
SFO - RDU,56898577559,S-PBI-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/56898577559,https://www.airlines-manager.com/aircraft/show/100301185,19:00,6:14,320,"712,851$","650,128$","$2,031.65","$57,874.90"
SFO - RIC,56869877622,S-ORF-RIC-1,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/56869877622,https://www.airlines-manager.com/aircraft/show/108328834,6:00,17:29,310,"726,691$","671,657$","$2,166.64","$58,489.72"
SFO - RIC,56873155718,S-ORF-RIC-2,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/56873155718,https://www.airlines-manager.com/aircraft/show/108328835,8:00,19:29,310,"726,691$","671,657$","$2,166.64","$58,489.72"
SFO - RIC,56880042648,S-ORF-RIC-5 B,A319-100,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/56880042648,https://www.airlines-manager.com/aircraft/show/108328833,10:00,21:29,198,"544,866$","500,734$","$2,528.96","$43,605.28"
SFO - RIC,56895754266,S-ORF-RIC-3,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/56895754266,https://www.airlines-manager.com/aircraft/show/108328836,18:00,5:29,310,"726,691$","671,657$","$2,166.64","$58,489.72"
SFO - RIC,56901278145,S-ORF-RIC-4,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/56901278145,https://www.airlines-manager.com/aircraft/show/108328837,20:00,7:29,310,"726,691$","671,657$","$2,166.64","$58,489.72"
SFO - RNO,56866822840,S-MCI-OMA-2,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/56866822840,https://www.airlines-manager.com/aircraft/show/88239554,4:15,6:59,320,"119,453$","93,133$",$291.04,"$34,073.05"
SFO - RNO,56889535215,S-MCI-OMA-1,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/56889535215,https://www.airlines-manager.com/aircraft/show/88239553,14:15,16:59,320,"119,453$","93,133$",$291.04,"$34,073.05"
SFO - RNO,56889535216,S-MCI-OMA-5 B,A319-100,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/56889535216,https://www.airlines-manager.com/aircraft/show/105223003,14:15,16:59,198,"90,385$","72,533$",$366.33,"$26,536.46"
SFO - RNO,56892624098,S-MCI-OMA-4,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/56892624098,https://www.airlines-manager.com/aircraft/show/88239557,16:00,18:44,320,"119,453$","93,133$",$291.04,"$34,073.05"
SFO - RNO,56901278204,S-MCI-OMA-3,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/56901278204,https://www.airlines-manager.com/aircraft/show/88239555,20:30,23:14,320,"119,453$","93,133$",$291.04,"$34,073.05"
SFO - ROC,56862956106,S-ROC-COS-2,A321neo,https://www.airlines-manager.com/network/showline/50555363,https://www.airlines-manager.com/network/showflight/56862956106,https://www.airlines-manager.com/aircraft/show/120112475,0:00,11:14,338,"771,233$","721,249$","$2,133.87","$64,206.14"
SFO - ROC,56873155580,S-ROC-COS-4,A321neo,https://www.airlines-manager.com/network/showline/50555363,https://www.airlines-manager.com/network/showflight/56873155580,https://www.airlines-manager.com/aircraft/show/120051490,6:45,17:59,338,"771,233$","721,249$","$2,133.87","$64,206.14"
SFO - ROC,56889535263,S-ROC-COS-1,A321neo,https://www.airlines-manager.com/network/showline/50555363,https://www.airlines-manager.com/network/showflight/56889535263,https://www.airlines-manager.com/aircraft/show/120112476,15:00,2:14,338,"771,233$","721,249$","$2,133.87","$64,206.14"
SFO - ROC,56901278170,S-ROC-COS-3,A321neo,https://www.airlines-manager.com/network/showline/50555363,https://www.airlines-manager.com/network/showflight/56901278170,https://www.airlines-manager.com/aircraft/show/120112474,20:15,7:29,338,"771,233$","721,249$","$2,133.87","$64,206.14"
SFO - RSW,56866822944,S-RSW-BDL-3,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/56866822944,https://www.airlines-manager.com/aircraft/show/84915100,5:15,16:59,320,"730,424$","665,610$","$2,080.03","$56,728.13"
SFO - RSW,56873155620,S-RSW-BDL-4,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/56873155620,https://www.airlines-manager.com/aircraft/show/84915101,7:15,18:59,320,"730,424$","665,610$","$2,080.03","$56,728.13"
SFO - RSW,56892624209,S-RSW-BDL-1,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/56892624209,https://www.airlines-manager.com/aircraft/show/84915098,17:00,4:44,320,"730,424$","665,610$","$2,080.03","$56,728.13"
SFO - RSW,56898577556,S-RSW-BDL-2,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/56898577556,https://www.airlines-manager.com/aircraft/show/84915099,19:00,6:44,320,"730,424$","665,610$","$2,080.03","$56,728.13"
SFO - RSW,56901278252,S-RSW-BDL-5,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/56901278252,https://www.airlines-manager.com/aircraft/show/84915102,21:00,8:44,320,"730,424$","665,610$","$2,080.03","$56,728.13"
SFO - SAN,56873155705,S-PHL-SEA-1,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/56873155705,https://www.airlines-manager.com/aircraft/show/92390872,8:00,11:44,320,"217,287$","184,448$",$576.40,"$49,405.71"
SFO - SAN,56880042738,S-PHL-SEA-5,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/56880042738,https://www.airlines-manager.com/aircraft/show/92390869,11:00,14:44,320,"217,287$","184,448$",$576.40,"$49,405.71"
SFO - SAN,56883365093,S-PHL-SEA-4,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/56883365093,https://www.airlines-manager.com/aircraft/show/92390870,12:00,15:44,320,"217,287$","184,448$",$576.40,"$49,405.71"
SFO - SAN,56889535344,S-PHL-SEA-3,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/56889535344,https://www.airlines-manager.com/aircraft/show/92390873,15:30,19:14,320,"217,287$","184,448$",$576.40,"$49,405.71"
SFO - SAN,56901278172,S-PHL-SEA-2,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/56901278172,https://www.airlines-manager.com/aircraft/show/92390871,20:15,23:59,319,"216,876$","184,049$",$576.96,"$49,298.84"
SFO - SAT,56862956205,S-JAX-SAT-1,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/56862956205,https://www.airlines-manager.com/aircraft/show/86375568,0:15,8:14,310,"498,478$","457,208$","$1,474.86","$57,270.31"
SFO - SAT,56862956206,S-JAX-SAT-2,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/56862956206,https://www.airlines-manager.com/aircraft/show/86371267,2:15,10:14,310,"498,478$","457,208$","$1,474.86","$57,270.31"
SFO - SAT,56886798148,S-JAX-SAT-3,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/56886798148,https://www.airlines-manager.com/aircraft/show/86385102,13:00,20:59,310,"498,478$","457,208$","$1,474.86","$57,270.31"
SFO - SAT,56889535291,S-JAX-SAT-4,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/56889535291,https://www.airlines-manager.com/aircraft/show/86378760,15:00,22:59,310,"498,478$","457,208$","$1,474.86","$57,270.31"
SFO - SAT,56895754178,S-JAX-SAT-5,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/56895754178,https://www.airlines-manager.com/aircraft/show/86377315,17:15,1:14,310,"498,478$","457,208$","$1,474.86","$57,270.31"
SFO - SAV,56869877599,S-SAV-JAN-1,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/56869877599,https://www.airlines-manager.com/aircraft/show/114912265,5:45,16:59,310,"696,685$","643,380$","$2,075.42","$57,274.18"
SFO - SAV,56873155697,S-SAV-JAN-4,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/56873155697,https://www.airlines-manager.com/aircraft/show/114912270,7:45,18:59,310,"696,685$","643,380$","$2,075.42","$57,274.18"
SFO - SAV,56889535313,S-SAV-JAN-5 B,A319-100,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/56889535313,https://www.airlines-manager.com/aircraft/show/114917486,15:00,2:14,198,"523,286$","480,541$","$2,426.97","$42,778.13"
SFO - SAV,56898577578,S-SAV-JAN-3,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/56898577578,https://www.airlines-manager.com/aircraft/show/114912269,19:00,6:14,310,"696,685$","643,380$","$2,075.42","$57,274.18"
SFO - SAV,56901278210,S-SAV-JAN-2,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/56901278210,https://www.airlines-manager.com/aircraft/show/114912266,20:30,7:44,310,"696,685$","643,380$","$2,075.42","$57,274.18"
SFO - SDF,56862956361,S-SDF-LIT-2,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/56862956361,https://www.airlines-manager.com/aircraft/show/94886628,1:15,10:59,310,"614,512$","564,269$","$1,820.22","$57,972.84"
SFO - SDF,56862956362,S-SDF-LIT-4,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/56862956362,https://www.airlines-manager.com/aircraft/show/106453500,2:15,11:59,310,"614,512$","564,269$","$1,820.22","$57,972.84"
SFO - SDF,56886798277,S-SDF-LIT-1,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/56886798277,https://www.airlines-manager.com/aircraft/show/106453499,14:00,23:44,310,"614,512$","564,269$","$1,820.22","$57,972.84"
SFO - SDF,56892624174,S-SDF-LIT-3,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/56892624174,https://www.airlines-manager.com/aircraft/show/94886627,16:30,2:14,310,"614,512$","564,269$","$1,820.22","$57,972.84"
SFO - SDF,56895754207,S-SDF-LIT-5,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/56895754207,https://www.airlines-manager.com/aircraft/show/106453498,17:30,3:14,310,"614,512$","564,269$","$1,820.22","$57,972.84"
SFO - SEA,56862956570,S-PHL-SEA-5,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/56862956570,https://www.airlines-manager.com/aircraft/show/92390869,2:45,7:29,320,"301,272$","257,664$",$805.20,"$54,436.06"
SFO - SEA,56862956572,S-PHL-SEA-4,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/56862956572,https://www.airlines-manager.com/aircraft/show/92390870,3:30,8:14,320,"301,272$","257,664$",$805.20,"$54,436.06"
SFO - SEA,56869877583,S-PHL-SEA-6 B,A319-100,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/56869877583,https://www.airlines-manager.com/aircraft/show/97900730,5:30,10:14,198,"229,629$","199,471$","$1,007.43","$42,141.76"
SFO - SEA,56873155608,S-PHL-SEA-3,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/56873155608,https://www.airlines-manager.com/aircraft/show/92390873,7:00,11:44,320,"301,272$","257,664$",$805.20,"$54,436.06"
SFO - SEA,56883365094,S-PHL-SEA-2,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/56883365094,https://www.airlines-manager.com/aircraft/show/92390871,12:00,16:44,320,"301,272$","257,664$",$805.20,"$54,436.06"
SFO - SEA,56906228797,S-PHL-SEA-1,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/56906228797,https://www.airlines-manager.com/aircraft/show/92390872,23:45,4:29,303,"291,598$","248,301$",$819.48,"$52,457.96"
SFO - SHA,56901278151,S-168B-4 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/56901278151,https://www.airlines-manager.com/aircraft/show/87933798,20:00,19:59,1046,"4,655,897$","4,320,364$","$4,130.37","$180,140.26"
SFO - SHA,56903707116,S-168A-4 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/56903707116,https://www.airlines-manager.com/aircraft/show/86817628,22:00,21:59,1046,"4,655,897$","4,320,364$","$4,130.37","$180,140.26"
SFO - SLC,56862956120,S-ORD-DTW-4,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/56862956120,https://www.airlines-manager.com/aircraft/show/101045331,0:00,4:29,400,"353,831$","312,930$",$782.33,"$69,798.51"
SFO - SLC,56862956121,S-ORD-DTW-2,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/56862956121,https://www.airlines-manager.com/aircraft/show/101045333,1:00,5:29,400,"353,831$","312,930$",$782.33,"$69,798.51"
SFO - SLC,56862956122,S-ORD-DTW-5,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/56862956122,https://www.airlines-manager.com/aircraft/show/101045330,3:00,7:29,400,"353,831$","312,930$",$782.33,"$69,798.51"
SFO - SLC,56873155704,S-ORD-DTW-1,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/56873155704,https://www.airlines-manager.com/aircraft/show/101045334,8:00,12:29,400,"353,831$","312,930$",$782.33,"$69,798.51"
SFO - SLC,56889535266,S-ORD-DTW-3,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/56889535266,https://www.airlines-manager.com/aircraft/show/101045332,15:00,19:29,223,"257,715$","219,622$",$984.85,"$48,986.32"
SFO - SMF,56876734142,S-SDF-LIT-1,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/56876734142,https://www.airlines-manager.com/aircraft/show/106453499,8:30,10:59,310,"83,132$","62,550$",$201.77,"$25,187.92"
SFO - SMF,56886798266,S-SDF-LIT-3,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/56886798266,https://www.airlines-manager.com/aircraft/show/94886627,14:00,16:29,310,"83,132$","62,550$",$201.77,"$25,187.92"
SFO - SMF,56889535302,S-SDF-LIT-5,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/56889535302,https://www.airlines-manager.com/aircraft/show/106453498,15:00,17:29,310,"83,132$","62,550$",$201.77,"$25,187.92"
SFO - SMF,56903707206,S-SDF-LIT-2,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/56903707206,https://www.airlines-manager.com/aircraft/show/94886628,22:45,1:14,310,"83,132$","62,550$",$201.77,"$25,187.92"
SFO - SMF,56906228808,S-SDF-LIT-4,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/56906228808,https://www.airlines-manager.com/aircraft/show/106453500,23:45,2:14,310,"83,132$","62,550$",$201.77,"$25,187.92"
SFO - STL,56873155584,S-MSY-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/56873155584,https://www.airlines-manager.com/aircraft/show/98075265,6:45,15:29,320,"557,439$","503,685$","$1,574.02","$57,673.85"
SFO - STL,56876734168,S-MSY-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/56876734168,https://www.airlines-manager.com/aircraft/show/98075263,8:45,17:29,320,"557,439$","503,685$","$1,574.02","$57,673.85"
SFO - STL,56886798194,S-MSY-STL-6,ERJ-175,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/56886798194,https://www.airlines-manager.com/aircraft/show/103534666,13:00,21:44,112,"262,228$","230,306$","$2,056.30","$26,370.92"
SFO - STL,56892624103,S-MSY-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/56892624103,https://www.airlines-manager.com/aircraft/show/98075266,16:00,0:44,320,"557,439$","503,685$","$1,574.02","$57,673.85"
SFO - STL,56895754254,S-MSY-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/56895754254,https://www.airlines-manager.com/aircraft/show/98075264,18:00,2:44,320,"557,439$","503,685$","$1,574.02","$57,673.85"
SFO - STL,56903707167,S-MSY-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/56903707167,https://www.airlines-manager.com/aircraft/show/98075267,22:30,7:14,320,"557,439$","503,685$","$1,574.02","$57,673.85"
SFO - SYR,56862956136,S-GSO-SYR-2,737-900ER,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/56862956136,https://www.airlines-manager.com/aircraft/show/120056763,0:00,11:29,320,"714,764$","654,987$","$2,046.83","$57,038.06"
SFO - SYR,56883365116,S-GSO-SYR-3,737-900ER,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/56883365116,https://www.airlines-manager.com/aircraft/show/120056762,12:00,23:29,320,"714,764$","654,987$","$2,046.83","$57,038.06"
SFO - SYR,56886798135,S-GSO-SYR-4,737-900ER,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/56886798135,https://www.airlines-manager.com/aircraft/show/119550235,13:00,0:29,320,"714,764$","654,987$","$2,046.83","$57,038.06"
SFO - SYR,56895754329,S-GSO-SYR-5,A319-100,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/56895754329,https://www.airlines-manager.com/aircraft/show/120112473,18:30,5:59,198,"537,637$","493,892$","$2,494.40","$43,009.46"
SFO - SYR,56906228726,S-GSO-SYR-1,737-900ER,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/56906228726,https://www.airlines-manager.com/aircraft/show/120056764,23:00,10:29,320,"714,764$","654,987$","$2,046.83","$57,038.06"
SFO - TFU,56883365157,S-168B-3 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/56883365157,https://www.airlines-manager.com/aircraft/show/87566902,12:30,14:59,1046,"5,238,347$","4,830,688$","$4,618.25","$1,945,243.49"
SFO - TFU,56889535237,S-168A-3 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/56889535237,https://www.airlines-manager.com/aircraft/show/86483501,14:30,16:59,1046,"5,238,347$","4,830,688$","$4,618.25","$1,945,243.49"
SFO - TPA,56862956311,S-FLL-TPA-1,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/56862956311,https://www.airlines-manager.com/aircraft/show/97955544,1:00,12:14,320,"704,621$","638,570$","$1,995.53","$56,845.99"
SFO - TPA,56866822927,S-FLL-TPA-3,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/56866822927,https://www.airlines-manager.com/aircraft/show/97955542,5:00,16:14,320,"704,621$","638,570$","$1,995.53","$56,845.99"
SFO - TPA,56873155706,S-FLL-TPA-5,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/56873155706,https://www.airlines-manager.com/aircraft/show/97955540,8:00,19:14,320,"704,621$","638,570$","$1,995.53","$56,845.99"
SFO - TPA,56886798107,S-FLL-TPA-2,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/56886798107,https://www.airlines-manager.com/aircraft/show/97955543,13:00,0:14,320,"704,621$","638,570$","$1,995.53","$56,845.99"
SFO - TPA,56892624214,S-FLL-TPA-4,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/56892624214,https://www.airlines-manager.com/aircraft/show/97955541,17:00,4:14,320,"704,621$","638,570$","$1,995.53","$56,845.99"
SFO - TPA,56901278154,S-FLL-TPA-6 B,A319-100,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/56901278154,https://www.airlines-manager.com/aircraft/show/97900729,20:00,7:29,198,"531,620$","483,764$","$2,443.25","$42,127.49"
SFO - TPE,56901278152,S-168B-5 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/56901278152,https://www.airlines-manager.com/aircraft/show/87933799,20:00,21:14,1046,"4,782,404$","4,432,378$","$4,237.46","$3,593,820.00"
SFO - TPE,56903707115,S-168A-5 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/56903707115,https://www.airlines-manager.com/aircraft/show/86808589,22:00,23:14,1032,"4,737,574$","4,390,353$","$4,254.22","$3,559,745.68"
SFO - TUL,56866822908,S-TUL-DSM-2,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/56866822908,https://www.airlines-manager.com/aircraft/show/108410857,4:45,12:29,320,"493,680$","448,182$","$1,400.57","$57,954.57"
SFO - TUL,56873155619,S-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/56873155619,https://www.airlines-manager.com/aircraft/show/108466264,7:00,14:44,112,"232,916$","205,908$","$1,838.46","$26,626.03"
SFO - TUL,56889535284,S-TUL-DSM-1,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/56889535284,https://www.airlines-manager.com/aircraft/show/108410856,15:00,22:44,320,"493,680$","448,182$","$1,400.57","$57,954.57"
SFO - TUL,56892624055,S-TUL-DSM-4,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/56892624055,https://www.airlines-manager.com/aircraft/show/108410859,15:45,23:29,320,"493,680$","448,182$","$1,400.57","$57,954.57"
SFO - TUL,56901278229,S-TUL-DSM-3,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/56901278229,https://www.airlines-manager.com/aircraft/show/108410858,20:45,4:29,320,"493,680$","448,182$","$1,400.57","$57,954.57"
SFO - TUS,56873155710,S-OKC-FSD-1,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/56873155710,https://www.airlines-manager.com/aircraft/show/107160378,8:00,12:59,320,"319,228$","284,067$",$887.71,"$57,003.41"
SFO - TUS,56876734224,S-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/56876734224,https://www.airlines-manager.com/aircraft/show/107132310,9:30,14:29,112,"152,035$","132,268$","$1,180.96","$26,542.07"
SFO - TUS,56880042676,S-OKC-FSD-4,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/56880042676,https://www.airlines-manager.com/aircraft/show/107160381,10:30,15:29,320,"319,228$","284,067$",$887.71,"$57,003.41"
SFO - TUS,56892624108,S-OKC-FSD-3,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/56892624108,https://www.airlines-manager.com/aircraft/show/107160380,16:00,20:59,320,"319,228$","284,067$",$887.71,"$57,003.41"
SFO - TUS,56906228771,S-OKC-FSD-2,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/56906228771,https://www.airlines-manager.com/aircraft/show/107160379,23:30,4:29,320,"319,228$","284,067$",$887.71,"$57,003.41"
SFO - TYS,56869877594,S-TYS-MSN-2,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/56869877594,https://www.airlines-manager.com/aircraft/show/117782564,5:45,15:59,320,"642,888$","588,205$","$1,838.14","$57,479.32"
SFO - TYS,56873155641,S-TYS-MSN-1,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/56873155641,https://www.airlines-manager.com/aircraft/show/117782565,7:30,17:44,320,"642,888$","588,205$","$1,838.14","$57,479.32"
SFO - TYS,56892624139,S-TYS-MSN-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/56892624139,https://www.airlines-manager.com/aircraft/show/117782582,16:00,2:14,198,"483,910$","444,071$","$2,242.78","$43,394.56"
SFO - TYS,56898577633,S-TYS-MSN-3,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/56898577633,https://www.airlines-manager.com/aircraft/show/117782563,19:30,5:44,320,"642,888$","588,205$","$1,838.14","$57,479.32"
SFO - TYS,56901278231,S-TYS-MSN-4,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/56901278231,https://www.airlines-manager.com/aircraft/show/117782562,20:45,6:59,320,"642,888$","588,205$","$1,838.14","$57,479.32"
SFO - YEG,56862956681,S-YEG-YYC-2,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/56862956681,https://www.airlines-manager.com/aircraft/show/117782560,3:30,9:59,320,"420,949$","378,331$","$1,182.28","$58,354.40"
SFO - YEG,56876734123,S-YEG-YYC-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/56876734123,https://www.airlines-manager.com/aircraft/show/117782581,8:15,14:59,198,"317,291$","287,019$","$1,449.59","$42,626.58"
SFO - YEG,56886798132,S-YEG-YYC-1,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/56886798132,https://www.airlines-manager.com/aircraft/show/117782561,13:00,19:29,320,"420,949$","378,331$","$1,182.28","$58,354.40"
SFO - YEG,56889535286,S-YEG-YYC-4,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/56889535286,https://www.airlines-manager.com/aircraft/show/116932364,15:00,21:29,320,"420,949$","378,331$","$1,182.28","$58,354.40"
SFO - YEG,56903707059,S-YEG-YYC-3,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/56903707059,https://www.airlines-manager.com/aircraft/show/117782559,21:30,3:59,320,"420,949$","378,331$","$1,182.28","$58,354.40"
SFO - YOW,56862956186,S-YOW-CUN-3,757-300,https://www.airlines-manager.com/network/showline/50555301,https://www.airlines-manager.com/network/showflight/56862956186,https://www.airlines-manager.com/aircraft/show/120056766,0:15,11:29,400,"934,986$","864,487$","$2,161.22","$76,957.30"
SFO - YOW,56862956187,S-YOW-CUN-4,757-300,https://www.airlines-manager.com/network/showline/50555301,https://www.airlines-manager.com/network/showflight/56862956187,https://www.airlines-manager.com/aircraft/show/120056765,1:15,12:29,400,"934,986$","864,487$","$2,161.22","$76,957.30"
SFO - YOW,56886798096,S-YOW-CUN-1,757-300,https://www.airlines-manager.com/network/showline/50555301,https://www.airlines-manager.com/network/showflight/56886798096,https://www.airlines-manager.com/aircraft/show/120056768,13:00,0:14,400,"934,986$","864,487$","$2,161.22","$76,957.30"
SFO - YOW,56886798097,S-YOW-CUN-2,757-300,https://www.airlines-manager.com/network/showline/50555301,https://www.airlines-manager.com/network/showflight/56886798097,https://www.airlines-manager.com/aircraft/show/120056767,14:00,1:14,400,"934,986$","864,487$","$2,161.22","$76,957.30"
SFO - YUL,56862956263,S-YYZ-YUL-1,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/56862956263,https://www.airlines-manager.com/aircraft/show/115413609,0:45,12:29,400,"926,903$","850,879$","$2,127.20","$72,518.10"
SFO - YUL,56869877613,S-YYZ-YUL-4,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/56869877613,https://www.airlines-manager.com/aircraft/show/115413612,6:00,17:44,400,"926,903$","850,879$","$2,127.20","$72,518.10"
SFO - YUL,56886798230,S-YYZ-YUL-2,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/56886798230,https://www.airlines-manager.com/aircraft/show/115413610,14:00,1:44,400,"926,903$","850,879$","$2,127.20","$72,518.10"
SFO - YUL,56892624184,S-YYZ-YUL-3,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/56892624184,https://www.airlines-manager.com/aircraft/show/115413611,16:45,4:29,400,"926,903$","850,879$","$2,127.20","$72,518.10"
SFO - YUL,56898577519,S-YYZ-YUL- 5,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/56898577519,https://www.airlines-manager.com/aircraft/show/91126653,18:45,6:29,400,"926,903$","850,879$","$2,127.20","$72,518.10"
SFO - YVR,56862956266,S-MSY-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/56862956266,https://www.airlines-manager.com/aircraft/show/98075266,0:45,5:59,320,"331,374$","290,411$",$907.53,"$55,492.55"
SFO - YVR,56862956267,S-MSY-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/56862956267,https://www.airlines-manager.com/aircraft/show/98075264,2:45,7:59,320,"331,374$","290,411$",$907.53,"$55,492.55"
SFO - YVR,56873155623,S-MSY-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/56873155623,https://www.airlines-manager.com/aircraft/show/98075267,7:15,12:29,320,"331,374$","290,411$",$907.53,"$55,492.55"
SFO - YVR,56892624102,S-MSY-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/56892624102,https://www.airlines-manager.com/aircraft/show/98075265,16:00,21:14,320,"331,374$","290,411$",$907.53,"$55,492.55"
SFO - YVR,56895754253,S-MSY-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/56895754253,https://www.airlines-manager.com/aircraft/show/98075263,18:00,23:14,320,"331,374$","290,411$",$907.53,"$55,492.55"
SFO - YVR,56903707094,S-MSY-STL-6,ERJ-175,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/56903707094,https://www.airlines-manager.com/aircraft/show/103534666,21:45,2:59,112,"156,970$","134,156$","$1,197.82","$25,634.90"
SFO - YYC,56866822812,S-YEG-YYC-3,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/56866822812,https://www.airlines-manager.com/aircraft/show/117782559,4:00,9:59,320,"386,674$","342,885$","$1,071.52","$57,306.69"
SFO - YYC,56886798131,S-YEG-YYC-2,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/56886798131,https://www.airlines-manager.com/aircraft/show/117782560,13:00,18:59,320,"386,674$","342,885$","$1,071.52","$57,306.69"
SFO - YYC,56889535314,S-YEG-YYC-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/56889535314,https://www.airlines-manager.com/aircraft/show/117782581,15:00,20:59,198,"290,770$","259,950$","$1,312.88","$43,445.68"
SFO - YYC,56898577632,S-YEG-YYC-1,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/56898577632,https://www.airlines-manager.com/aircraft/show/117782561,19:30,1:29,320,"386,674$","342,885$","$1,071.52","$57,306.69"
SFO - YYC,56903707058,S-YEG-YYC-4,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/56903707058,https://www.airlines-manager.com/aircraft/show/116932364,21:30,3:29,320,"386,674$","342,885$","$1,071.52","$57,306.69"
SFO - YYZ,56862956439,S-YYZ-YUL-2,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/56862956439,https://www.airlines-manager.com/aircraft/show/115413610,1:45,12:29,400,"886,073$","807,953$","$2,019.88","$75,275.12"
SFO - YYZ,56869877612,S-YYZ-YUL-3,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/56869877612,https://www.airlines-manager.com/aircraft/show/115413611,6:00,16:44,400,"886,073$","807,953$","$2,019.88","$75,275.12"
SFO - YYZ,56873155703,S-YYZ-YUL- 5,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/56873155703,https://www.airlines-manager.com/aircraft/show/91126653,8:00,18:44,400,"886,073$","807,953$","$2,019.88","$75,275.12"
SFO - YYZ,56886798229,S-YYZ-YUL-1,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/56886798229,https://www.airlines-manager.com/aircraft/show/115413609,14:00,0:44,400,"886,073$","807,953$","$2,019.88","$75,275.12"
SFO - YYZ,56895754219,S-YYZ-YUL-4,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/56895754219,https://www.airlines-manager.com/aircraft/show/115413612,17:45,4:29,400,"886,073$","807,953$","$2,019.88","$75,275.12"
ORD - ATL,56862956223,O-ATL-YYZ-4,A321neo,https://www.airlines-manager.com/network/showline/51097511,https://www.airlines-manager.com/network/showflight/56862956223,https://www.airlines-manager.com/aircraft/show/121813378,0:30,4:59,338,"306,011$","244,274$",$722.70,"$54,484.91"
ORD - ATL,56866822835,O-ATL-YYZ-3,A321neo,https://www.airlines-manager.com/network/showline/51097511,https://www.airlines-manager.com/network/showflight/56866822835,https://www.airlines-manager.com/aircraft/show/121813379,4:15,8:44,338,"306,011$","244,274$",$722.70,"$54,484.91"
ORD - ATL,56880042709,O-ATL-YYZ-1,A321neo,https://www.airlines-manager.com/network/showline/51097511,https://www.airlines-manager.com/network/showflight/56880042709,https://www.airlines-manager.com/aircraft/show/121813381,11:00,15:29,338,"306,011$","244,274$",$722.70,"$54,484.91"
ORD - ATL,56886798076,O-ATL-YYZ-2,A321neo,https://www.airlines-manager.com/network/showline/51097511,https://www.airlines-manager.com/network/showflight/56886798076,https://www.airlines-manager.com/aircraft/show/121813380,13:00,17:29,338,"306,011$","244,274$",$722.70,"$54,484.91"
ORD - ATL,56901278248,O-ATL-YYZ-5,A321neo,https://www.airlines-manager.com/network/showline/51097511,https://www.airlines-manager.com/network/showflight/56901278248,https://www.airlines-manager.com/aircraft/show/115400545,21:00,1:29,338,"306,011$","244,274$",$722.70,"$54,484.91"
ORD - BOS,56873155715,O-SJC-ONT-5,737-900ER,https://www.airlines-manager.com/network/showline/51202004,https://www.airlines-manager.com/network/showflight/56873155715,https://www.airlines-manager.com/aircraft/show/122278407,8:00,13:29,320,"347,375$","291,986$",$912.46,"$53,249.73"
ORD - BOS,56880042772,O-SJC-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/51202004,https://www.airlines-manager.com/network/showflight/56880042772,https://www.airlines-manager.com/aircraft/show/122278409,11:00,16:29,320,"347,375$","291,986$",$912.46,"$53,249.73"
ORD - BOS,56886798144,O-SJC-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/51202004,https://www.airlines-manager.com/network/showflight/56886798144,https://www.airlines-manager.com/aircraft/show/122278408,13:00,18:29,320,"347,375$","291,986$",$912.46,"$53,249.73"
ORD - BOS,56886798145,O-SJC-BOS,ERJ-175,https://www.airlines-manager.com/network/showline/51202004,https://www.airlines-manager.com/network/showflight/56886798145,https://www.airlines-manager.com/aircraft/show/122320232,13:15,18:44,102,"154,631$","124,884$","$1,224.35","$22,775.20"
ORD - BOS,56901278181,O-SJC-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/51202004,https://www.airlines-manager.com/network/showflight/56901278181,https://www.airlines-manager.com/aircraft/show/122278411,20:15,1:44,320,"347,375$","291,986$",$912.46,"$53,249.73"
ORD - BOS,56903707142,O-SJC-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/51202004,https://www.airlines-manager.com/network/showflight/56903707142,https://www.airlines-manager.com/aircraft/show/122278410,22:15,3:44,320,"347,375$","291,986$",$912.46,"$53,249.73"
ORD - BWI,56862956356,O-BWI-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202040,https://www.airlines-manager.com/network/showflight/56862956356,https://www.airlines-manager.com/aircraft/show/122278393,1:15,5:44,320,"282,844$","233,250$",$728.91,"$52,026.02"
ORD - BWI,56869877575,O-BWI-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202040,https://www.airlines-manager.com/network/showflight/56869877575,https://www.airlines-manager.com/aircraft/show/122278394,5:30,9:59,320,"282,844$","233,250$",$728.91,"$52,026.02"
ORD - BWI,56876734136,O-BWI-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202040,https://www.airlines-manager.com/network/showflight/56876734136,https://www.airlines-manager.com/aircraft/show/122278395,8:30,12:59,320,"282,844$","233,250$",$728.91,"$52,026.02"
ORD - BWI,56889535248,O-BWI-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202040,https://www.airlines-manager.com/network/showflight/56889535248,https://www.airlines-manager.com/aircraft/show/122278396,14:45,19:14,320,"282,844$","233,250$",$728.91,"$52,026.02"
ORD - BWI,56903707105,O-BWI-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202040,https://www.airlines-manager.com/network/showflight/56903707105,https://www.airlines-manager.com/aircraft/show/122278392,22:00,2:29,320,"282,844$","233,250$",$728.91,"$52,026.02"
ORD - CLE,56862956413,O-BWI-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202033,https://www.airlines-manager.com/network/showflight/56862956413,https://www.airlines-manager.com/aircraft/show/122278396,1:30,4:44,320,"169,071$","129,280$",$404.00,"$39,983.51"
ORD - CLE,56876734171,O-BWI-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202033,https://www.airlines-manager.com/network/showflight/56876734171,https://www.airlines-manager.com/aircraft/show/122278392,8:45,11:59,320,"169,071$","129,280$",$404.00,"$39,983.51"
ORD - CLE,56886798052,O-BWI-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202033,https://www.airlines-manager.com/network/showflight/56886798052,https://www.airlines-manager.com/aircraft/show/122278393,12:45,15:59,320,"169,071$","129,280$",$404.00,"$39,983.51"
ORD - CLE,56892624222,O-BWI-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202033,https://www.airlines-manager.com/network/showflight/56892624222,https://www.airlines-manager.com/aircraft/show/122278394,17:00,20:14,320,"169,071$","129,280$",$404.00,"$39,983.51"
ORD - CLE,56901278140,O-BWI-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202033,https://www.airlines-manager.com/network/showflight/56901278140,https://www.airlines-manager.com/aircraft/show/122278395,20:00,23:14,320,"169,071$","129,280$",$404.00,"$39,983.51"
ORD - CLT,56862956138,O-YEG-YUL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202027,https://www.airlines-manager.com/network/showflight/56862956138,https://www.airlines-manager.com/aircraft/show/122278401,0:00,4:29,320,"278,728$","224,375$",$701.17,"$50,046.47"
ORD - CLT,56862956139,O-YEG-YUL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202027,https://www.airlines-manager.com/network/showflight/56862956139,https://www.airlines-manager.com/aircraft/show/122278397,3:45,8:14,320,"278,728$","224,375$",$701.17,"$50,046.47"
ORD - CLT,56876734110,O-YEG-YUL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202027,https://www.airlines-manager.com/network/showflight/56876734110,https://www.airlines-manager.com/aircraft/show/122278398,8:15,12:44,320,"278,728$","224,375$",$701.17,"$50,046.47"
ORD - CLT,56886798055,O-YEG-YUL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202027,https://www.airlines-manager.com/network/showflight/56886798055,https://www.airlines-manager.com/aircraft/show/122278399,12:45,17:14,320,"278,728$","224,375$",$701.17,"$50,046.47"
ORD - CLT,56892624170,O-YEG-YUL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202027,https://www.airlines-manager.com/network/showflight/56892624170,https://www.airlines-manager.com/aircraft/show/122278400,16:30,20:59,320,"278,728$","224,375$",$701.17,"$50,046.47"
ORD - CLT,56906228788,O-SJC-BOS,ERJ-175,https://www.airlines-manager.com/network/showline/51202027,https://www.airlines-manager.com/network/showflight/56906228788,https://www.airlines-manager.com/aircraft/show/122320232,23:30,3:59,102,"123,769$","95,169$",$933.03,"$21,227.29"
ORD - CUN,56862956580,O-LAS-PHX-1,737-900ER,https://www.airlines-manager.com/network/showline/50984856,https://www.airlines-manager.com/network/showflight/56862956580,https://www.airlines-manager.com/aircraft/show/121383380,2:45,10:29,320,"494,858$","431,882$","$1,349.63","$55,846.81"
ORD - CUN,56873155595,O-LAS-PHX-6 B,A319-100,https://www.airlines-manager.com/network/showline/50984856,https://www.airlines-manager.com/network/showflight/56873155595,https://www.airlines-manager.com/aircraft/show/121383409,6:45,14:29,198,"367,693$","323,393$","$1,633.30","$41,818.06"
ORD - CUN,56880042767,O-LAS-PHX-3,737-900ER,https://www.airlines-manager.com/network/showline/50984856,https://www.airlines-manager.com/network/showflight/56880042767,https://www.airlines-manager.com/aircraft/show/121383378,11:00,18:44,320,"494,858$","431,882$","$1,349.63","$55,846.81"
ORD - CUN,56886798139,O-LAS-PHX-5,737-900ER,https://www.airlines-manager.com/network/showline/50984856,https://www.airlines-manager.com/network/showflight/56886798139,https://www.airlines-manager.com/aircraft/show/121383376,13:00,20:44,320,"494,858$","431,882$","$1,349.63","$55,846.81"
ORD - CUN,56898577529,O-LAS-PHX-2,737-900ER,https://www.airlines-manager.com/network/showline/50984856,https://www.airlines-manager.com/network/showflight/56898577529,https://www.airlines-manager.com/aircraft/show/121383379,18:45,2:29,320,"494,858$","431,882$","$1,349.63","$55,846.81"
ORD - CUN,56901278235,O-LAS-PHX-4,737-900ER,https://www.airlines-manager.com/network/showline/50984856,https://www.airlines-manager.com/network/showflight/56901278235,https://www.airlines-manager.com/aircraft/show/121383377,20:45,4:29,291,"455,403$","393,841$","$1,353.41","$50,927.72"
ORD - CVG,56869877574,O-BWI-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202038,https://www.airlines-manager.com/network/showflight/56869877574,https://www.airlines-manager.com/aircraft/show/122278392,5:30,8:44,320,"137,876$","96,497$",$301.55,"$29,844.43"
ORD - CVG,56876734172,O-BWI-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202038,https://www.airlines-manager.com/network/showflight/56876734172,https://www.airlines-manager.com/aircraft/show/122278393,8:45,11:59,320,"137,876$","96,497$",$301.55,"$29,844.43"
ORD - CVG,56886798216,O-BWI-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202038,https://www.airlines-manager.com/network/showflight/56886798216,https://www.airlines-manager.com/aircraft/show/122278394,13:45,16:59,320,"137,876$","96,497$",$301.55,"$29,844.43"
ORD - CVG,56892624189,O-BWI-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202038,https://www.airlines-manager.com/network/showflight/56892624189,https://www.airlines-manager.com/aircraft/show/122278395,16:45,19:59,320,"137,876$","96,497$",$301.55,"$29,844.43"
ORD - CVG,56903707141,O-BWI-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202038,https://www.airlines-manager.com/network/showflight/56903707141,https://www.airlines-manager.com/aircraft/show/122278396,22:15,1:29,320,"137,876$","96,497$",$301.55,"$29,844.43"
ORD - DEN,56876734215,O-YVR-GDL-1,757-300,https://www.airlines-manager.com/network/showline/50984812,https://www.airlines-manager.com/network/showflight/56876734215,https://www.airlines-manager.com/aircraft/show/121383385,9:30,14:59,400,"453,524$","375,130$",$937.83,"$68,412.77"
ORD - DEN,56880042725,O-YVR-GDL-4,757-300,https://www.airlines-manager.com/network/showline/50984812,https://www.airlines-manager.com/network/showflight/56880042725,https://www.airlines-manager.com/aircraft/show/121383382,11:00,16:29,400,"453,524$","375,130$",$937.83,"$68,412.77"
ORD - DEN,56886798098,O-YVR-GDL-5,757-300,https://www.airlines-manager.com/network/showline/50984812,https://www.airlines-manager.com/network/showflight/56886798098,https://www.airlines-manager.com/aircraft/show/121383381,13:00,18:29,400,"453,524$","375,130$",$937.83,"$68,412.77"
ORD - DEN,56898577653,O-YVR-GDL-2,757-300,https://www.airlines-manager.com/network/showline/50984812,https://www.airlines-manager.com/network/showflight/56898577653,https://www.airlines-manager.com/aircraft/show/121383384,19:45,1:14,400,"453,524$","375,130$",$937.83,"$68,412.77"
ORD - DEN,56903707077,O-YVR-GDL-3,757-300,https://www.airlines-manager.com/network/showline/50984812,https://www.airlines-manager.com/network/showflight/56903707077,https://www.airlines-manager.com/aircraft/show/121383383,21:45,3:14,400,"453,524$","375,130$",$937.83,"$68,412.77"
ORD - DFW,56876734104,O-OAK-SMF-3,A321neo,https://www.airlines-manager.com/network/showline/51097509,https://www.airlines-manager.com/network/showflight/56876734104,https://www.airlines-manager.com/aircraft/show/121813394,8:15,13:29,338,"366,044$","307,135$",$908.68,"$58,688.22"
ORD - DFW,56880042715,O-OAK-SMF-2,A321neo,https://www.airlines-manager.com/network/showline/51097509,https://www.airlines-manager.com/network/showflight/56880042715,https://www.airlines-manager.com/aircraft/show/121813395,11:00,16:14,338,"366,044$","307,135$",$908.68,"$58,688.22"
ORD - DFW,56886798081,O-OAK-SMF-5,A321neo,https://www.airlines-manager.com/network/showline/51097509,https://www.airlines-manager.com/network/showflight/56886798081,https://www.airlines-manager.com/aircraft/show/121813392,13:00,18:14,338,"366,044$","307,135$",$908.68,"$58,688.22"
ORD - DFW,56901278171,O-OAK-SMF-1,A321neo,https://www.airlines-manager.com/network/showline/51097509,https://www.airlines-manager.com/network/showflight/56901278171,https://www.airlines-manager.com/aircraft/show/121813396,20:15,1:29,338,"366,044$","307,135$",$908.68,"$58,688.22"
ORD - DFW,56903707132,O-OAK-SMF-4,A321neo,https://www.airlines-manager.com/network/showline/51097509,https://www.airlines-manager.com/network/showflight/56903707132,https://www.airlines-manager.com/aircraft/show/121813393,22:15,3:29,338,"366,044$","307,135$",$908.68,"$58,688.22"
ORD - DTW,56866822900,O-SJD-FLL-1,A321neo,https://www.airlines-manager.com/network/showline/51097518,https://www.airlines-manager.com/network/showflight/56866822900,https://www.airlines-manager.com/aircraft/show/121813386,4:45,7:44,338,"143,894$","104,421$",$308.94,"$35,001.45"
ORD - DTW,56880042710,O-SJD-FLL-5,A321neo,https://www.airlines-manager.com/network/showline/51097518,https://www.airlines-manager.com/network/showflight/56880042710,https://www.airlines-manager.com/aircraft/show/121813382,11:00,13:59,338,"143,894$","104,421$",$308.94,"$35,001.45"
ORD - DTW,56886798224,O-SJD-FLL-4,A321neo,https://www.airlines-manager.com/network/showline/51097518,https://www.airlines-manager.com/network/showflight/56886798224,https://www.airlines-manager.com/aircraft/show/121813383,14:00,16:59,338,"143,894$","104,421$",$308.94,"$35,001.45"
ORD - DTW,56895754216,O-SJD-FLL-2,A321neo,https://www.airlines-manager.com/network/showline/51097518,https://www.airlines-manager.com/network/showflight/56895754216,https://www.airlines-manager.com/aircraft/show/121813385,17:45,20:44,338,"143,894$","104,421$",$308.94,"$35,001.45"
ORD - DTW,56898577649,O-SJD-FLL-3,A321neo,https://www.airlines-manager.com/network/showline/51097518,https://www.airlines-manager.com/network/showflight/56898577649,https://www.airlines-manager.com/aircraft/show/121813384,19:45,22:44,338,"143,894$","104,421$",$308.94,"$35,001.45"
ORD - FLL,56866822836,O-SJD-FLL-5,A321neo,https://www.airlines-manager.com/network/showline/51097513,https://www.airlines-manager.com/network/showflight/56866822836,https://www.airlines-manager.com/aircraft/show/121813382,4:15,10:59,338,"461,039$","411,813$","$1,218.38","$61,160.35"
ORD - FLL,56873155601,O-SJD-FLL-4,A321neo,https://www.airlines-manager.com/network/showline/51097513,https://www.airlines-manager.com/network/showflight/56873155601,https://www.airlines-manager.com/aircraft/show/121813383,7:00,13:44,338,"461,039$","411,813$","$1,218.38","$61,160.35"
ORD - FLL,56880042711,O-SJD-FLL-2,A321neo,https://www.airlines-manager.com/network/showline/51097513,https://www.airlines-manager.com/network/showflight/56880042711,https://www.airlines-manager.com/aircraft/show/121813385,11:00,17:44,338,"461,039$","411,813$","$1,218.38","$61,160.35"
ORD - FLL,56886798077,O-SJD-FLL-3,A321neo,https://www.airlines-manager.com/network/showline/51097513,https://www.airlines-manager.com/network/showflight/56886798077,https://www.airlines-manager.com/aircraft/show/121813384,13:00,19:44,338,"461,039$","411,813$","$1,218.38","$61,160.35"
ORD - FLL,56903707097,O-SJD-FLL-1,A321neo,https://www.airlines-manager.com/network/showline/51097513,https://www.airlines-manager.com/network/showflight/56903707097,https://www.airlines-manager.com/aircraft/show/121813386,22:00,4:44,338,"461,039$","411,813$","$1,218.38","$61,160.35"
ORD - GDL,56862956343,O-YVR-GDL-4,757-300,https://www.airlines-manager.com/network/showline/50984857,https://www.airlines-manager.com/network/showflight/56862956343,https://www.airlines-manager.com/aircraft/show/121383382,1:15,9:59,400,"718,146$","644,547$","$1,611.37","$73,803.09"
ORD - GDL,56862956344,O-YVR-GDL-5,757-300,https://www.airlines-manager.com/network/showline/50984857,https://www.airlines-manager.com/network/showflight/56862956344,https://www.airlines-manager.com/aircraft/show/121383381,3:15,11:59,400,"718,146$","644,547$","$1,611.37","$73,803.09"
ORD - GDL,56880042726,O-YVR-GDL-2,757-300,https://www.airlines-manager.com/network/showline/50984857,https://www.airlines-manager.com/network/showflight/56880042726,https://www.airlines-manager.com/aircraft/show/121383384,11:00,19:44,400,"718,146$","644,547$","$1,611.37","$73,803.09"
ORD - GDL,56886798099,O-YVR-GDL-3,757-300,https://www.airlines-manager.com/network/showline/50984857,https://www.airlines-manager.com/network/showflight/56886798099,https://www.airlines-manager.com/aircraft/show/121383383,13:00,21:44,400,"718,146$","644,547$","$1,611.37","$73,803.09"
ORD - GDL,56906228794,O-YVR-GDL-1,757-300,https://www.airlines-manager.com/network/showline/50984857,https://www.airlines-manager.com/network/showflight/56906228794,https://www.airlines-manager.com/aircraft/show/121383385,23:45,8:29,327,"606,178$","536,683$","$1,641.23","$61,452.25"
ORD - IAD,56866822890,O-YEG-YUL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202029,https://www.airlines-manager.com/network/showflight/56866822890,https://www.airlines-manager.com/aircraft/show/122278401,4:30,8:59,320,"276,074$","225,496$",$704.68,"$50,296.51"
ORD - IAD,56876734109,O-YEG-YUL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202029,https://www.airlines-manager.com/network/showflight/56876734109,https://www.airlines-manager.com/aircraft/show/122278397,8:15,12:44,320,"276,074$","225,496$",$704.68,"$50,296.51"
ORD - IAD,56886798054,O-YEG-YUL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202029,https://www.airlines-manager.com/network/showflight/56886798054,https://www.airlines-manager.com/aircraft/show/122278398,12:45,17:14,320,"276,074$","225,496$",$704.68,"$50,296.51"
ORD - IAD,56895754177,O-YEG-YUL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202029,https://www.airlines-manager.com/network/showflight/56895754177,https://www.airlines-manager.com/aircraft/show/122278399,17:15,21:44,320,"276,074$","225,496$",$704.68,"$50,296.51"
ORD - IAD,56901278260,O-YEG-YUL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202029,https://www.airlines-manager.com/network/showflight/56901278260,https://www.airlines-manager.com/aircraft/show/122278400,21:00,1:29,320,"276,074$","225,496$",$704.68,"$50,296.51"
ORD - IND,56866822911,O-BWI-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202035,https://www.airlines-manager.com/network/showflight/56866822911,https://www.airlines-manager.com/aircraft/show/122278396,4:45,7:29,320,"100,552$","62,181$",$194.32,"$22,749.15"
ORD - IND,56886798051,O-BWI-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202035,https://www.airlines-manager.com/network/showflight/56886798051,https://www.airlines-manager.com/aircraft/show/122278392,12:45,15:29,320,"100,552$","62,181$",$194.32,"$22,749.15"
ORD - IND,56892624121,O-BWI-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202035,https://www.airlines-manager.com/network/showflight/56892624121,https://www.airlines-manager.com/aircraft/show/122278393,16:00,18:44,320,"100,552$","62,181$",$194.32,"$22,749.15"
ORD - IND,56901278180,O-BWI-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202035,https://www.airlines-manager.com/network/showflight/56901278180,https://www.airlines-manager.com/aircraft/show/122278394,20:15,22:59,320,"100,552$","62,181$",$194.32,"$22,749.15"
ORD - IND,56906228754,O-BWI-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202035,https://www.airlines-manager.com/network/showflight/56906228754,https://www.airlines-manager.com/aircraft/show/122278395,23:15,1:59,302,"97,074$","58,789$",$194.67,"$21,508.17"
ORD - JFK,56873155690,O-SJD-FLL-1,A321neo,https://www.airlines-manager.com/network/showline/51097514,https://www.airlines-manager.com/network/showflight/56873155690,https://www.airlines-manager.com/aircraft/show/121813386,7:45,12:44,338,"349,136$","292,869$",$866.48,"$58,769.70"
ORD - JFK,56889535212,O-SJD-FLL-5,A321neo,https://www.airlines-manager.com/network/showline/51097514,https://www.airlines-manager.com/network/showflight/56889535212,https://www.airlines-manager.com/aircraft/show/121813382,14:15,19:14,338,"349,136$","292,869$",$866.48,"$58,769.70"
ORD - JFK,56892624199,O-SJD-FLL-4,A321neo,https://www.airlines-manager.com/network/showline/51097514,https://www.airlines-manager.com/network/showflight/56892624199,https://www.airlines-manager.com/aircraft/show/121813383,17:00,21:59,338,"349,136$","292,869$",$866.48,"$58,769.70"
ORD - JFK,56901278222,O-SJD-FLL-2,A321neo,https://www.airlines-manager.com/network/showline/51097514,https://www.airlines-manager.com/network/showflight/56901278222,https://www.airlines-manager.com/aircraft/show/121813385,20:45,1:44,338,"349,136$","292,869$",$866.48,"$58,769.70"
ORD - JFK,56903707187,O-SJD-FLL-3,A321neo,https://www.airlines-manager.com/network/showline/51097514,https://www.airlines-manager.com/network/showflight/56903707187,https://www.airlines-manager.com/aircraft/show/121813384,22:45,3:44,338,"349,136$","292,869$",$866.48,"$58,769.70"
ORD - LAS,56862956543,O-LAS-PHX-2,737-900ER,https://www.airlines-manager.com/network/showline/50984816,https://www.airlines-manager.com/network/showflight/56862956543,https://www.airlines-manager.com/aircraft/show/121383379,2:30,10:29,320,"510,022$","430,593$","$1,345.60","$53,936.49"
ORD - LAS,56866822889,O-LAS-PHX-4,737-900ER,https://www.airlines-manager.com/network/showline/50984816,https://www.airlines-manager.com/network/showflight/56866822889,https://www.airlines-manager.com/aircraft/show/121383377,4:30,12:29,320,"510,022$","430,593$","$1,345.60","$53,936.49"
ORD - LAS,56880042769,O-LAS-PHX-1,737-900ER,https://www.airlines-manager.com/network/showline/50984816,https://www.airlines-manager.com/network/showflight/56880042769,https://www.airlines-manager.com/aircraft/show/121383380,11:00,18:59,320,"510,022$","430,593$","$1,345.60","$53,936.49"
ORD - LAS,56889535316,O-LAS-PHX-6 B,A319-100,https://www.airlines-manager.com/network/showline/50984816,https://www.airlines-manager.com/network/showflight/56889535316,https://www.airlines-manager.com/aircraft/show/121383409,15:00,22:59,198,"384,665$","329,295$","$1,663.11","$41,247.81"
ORD - LAS,56898577528,O-LAS-PHX-3,737-900ER,https://www.airlines-manager.com/network/showline/50984816,https://www.airlines-manager.com/network/showflight/56898577528,https://www.airlines-manager.com/aircraft/show/121383378,18:45,2:44,320,"510,022$","430,593$","$1,345.60","$53,936.49"
ORD - LAS,56901278234,O-LAS-PHX-5,737-900ER,https://www.airlines-manager.com/network/showline/50984816,https://www.airlines-manager.com/network/showflight/56901278234,https://www.airlines-manager.com/aircraft/show/121383376,20:45,4:44,320,"510,022$","430,593$","$1,345.60","$53,936.49"
ORD - LAX,56862956398,O-LAX-SEA-2,757-300,https://www.airlines-manager.com/network/showline/50984815,https://www.airlines-manager.com/network/showflight/56862956398,https://www.airlines-manager.com/aircraft/show/121383389,1:30,10:14,400,"734,364$","641,084$","$1,602.71","$73,406.56"
ORD - LAX,56862956399,O-LAX-SEA-4,757-300,https://www.airlines-manager.com/network/showline/50984815,https://www.airlines-manager.com/network/showflight/56862956399,https://www.airlines-manager.com/aircraft/show/121383387,3:30,12:14,400,"734,364$","641,084$","$1,602.71","$73,406.56"
ORD - LAX,56889535272,O-LAX-SEA-1,757-300,https://www.airlines-manager.com/network/showline/50984815,https://www.airlines-manager.com/network/showflight/56889535272,https://www.airlines-manager.com/aircraft/show/121383390,15:00,23:44,400,"734,364$","641,084$","$1,602.71","$73,406.56"
ORD - LAX,56892624208,O-LAX-SEA-3,757-300,https://www.airlines-manager.com/network/showline/50984815,https://www.airlines-manager.com/network/showflight/56892624208,https://www.airlines-manager.com/aircraft/show/121383388,17:00,1:44,400,"734,364$","641,084$","$1,602.71","$73,406.56"
ORD - LAX,56898577555,O-LAX-SEA-5,757-300,https://www.airlines-manager.com/network/showline/50984815,https://www.airlines-manager.com/network/showflight/56898577555,https://www.airlines-manager.com/aircraft/show/121383386,19:00,3:44,400,"734,364$","641,084$","$1,602.71","$73,406.56"
ORD - LGB,56862956203,O-RNO-LGB-1,737-900ER,https://www.airlines-manager.com/network/showline/51202005,https://www.airlines-manager.com/network/showflight/56862956203,https://www.airlines-manager.com/aircraft/show/122278406,0:15,8:59,320,"554,757$","491,337$","$1,535.43","$56,259.96"
ORD - LGB,56862956204,O-RNO-LGB-2,737-900ER,https://www.airlines-manager.com/network/showline/51202005,https://www.airlines-manager.com/network/showflight/56862956204,https://www.airlines-manager.com/aircraft/show/122278405,2:15,10:59,320,"554,757$","491,337$","$1,535.43","$56,259.96"
ORD - LGB,56886798141,O-RNO-LGB-5,737-900ER,https://www.airlines-manager.com/network/showline/51202005,https://www.airlines-manager.com/network/showflight/56886798141,https://www.airlines-manager.com/aircraft/show/122278402,13:00,21:44,320,"554,757$","491,337$","$1,535.43","$56,259.96"
ORD - LGB,56892624057,O-RNO-LGB-3,737-900ER,https://www.airlines-manager.com/network/showline/51202005,https://www.airlines-manager.com/network/showflight/56892624057,https://www.airlines-manager.com/aircraft/show/122278404,15:45,0:29,320,"554,757$","491,337$","$1,535.43","$56,259.96"
ORD - LGB,56895754227,O-RNO-LGB-4,737-900ER,https://www.airlines-manager.com/network/showline/51202005,https://www.airlines-manager.com/network/showflight/56895754227,https://www.airlines-manager.com/aircraft/show/122278403,17:45,2:29,320,"554,757$","491,337$","$1,535.43","$56,259.96"
ORD - MCO,56876734106,O-LAX-SEA-1,757-300,https://www.airlines-manager.com/network/showline/50984818,https://www.airlines-manager.com/network/showflight/56876734106,https://www.airlines-manager.com/aircraft/show/121383390,8:15,14:14,400,"486,278$","419,311$","$1,048.28","$70,079.83"
ORD - MCO,56880042727,O-LAX-SEA-3,757-300,https://www.airlines-manager.com/network/showline/50984818,https://www.airlines-manager.com/network/showflight/56880042727,https://www.airlines-manager.com/aircraft/show/121383388,11:00,16:59,400,"486,278$","419,311$","$1,048.28","$70,079.83"
ORD - MCO,56886798100,O-LAX-SEA-5,757-300,https://www.airlines-manager.com/network/showline/50984818,https://www.airlines-manager.com/network/showflight/56886798100,https://www.airlines-manager.com/aircraft/show/121383386,13:00,18:59,400,"486,278$","419,311$","$1,048.28","$70,079.83"
ORD - MCO,56898577626,O-LAX-SEA-2,757-300,https://www.airlines-manager.com/network/showline/50984818,https://www.airlines-manager.com/network/showflight/56898577626,https://www.airlines-manager.com/aircraft/show/121383389,19:30,1:29,400,"486,278$","419,311$","$1,048.28","$70,079.83"
ORD - MCO,56903707047,O-LAX-SEA-4,757-300,https://www.airlines-manager.com/network/showline/50984818,https://www.airlines-manager.com/network/showflight/56903707047,https://www.airlines-manager.com/aircraft/show/121383387,21:30,3:29,364,"460,388$","394,361$","$1,083.41","$65,909.92"
ORD - MEX,56862956617,O-MEX E,787-10,https://www.airlines-manager.com/network/showline/50926864,https://www.airlines-manager.com/network/showflight/56862956617,https://www.airlines-manager.com/aircraft/show/121207125,3:00,10:59,648,"1,066,967$","966,855$","$1,492.06","$121,109.19"
ORD - MEX,56880042719,O-MEX E,787-10,https://www.airlines-manager.com/network/showline/50926864,https://www.airlines-manager.com/network/showflight/56880042719,https://www.airlines-manager.com/aircraft/show/121207125,11:00,18:59,648,"1,066,967$","966,855$","$1,492.06","$121,109.19"
ORD - MEX,56898577552,O-MEX E,787-10,https://www.airlines-manager.com/network/showline/50926864,https://www.airlines-manager.com/network/showflight/56898577552,https://www.airlines-manager.com/aircraft/show/121207125,19:00,2:59,648,"1,066,967$","966,855$","$1,492.06","$121,109.19"
ORD - MKE,56862956414,O-YEG-YUL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202032,https://www.airlines-manager.com/network/showflight/56862956414,https://www.airlines-manager.com/aircraft/show/122278400,1:30,3:59,320,"77,521$","42,051$",$131.41,"$16,933.29"
ORD - MKE,56876734190,O-YEG-YUL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202032,https://www.airlines-manager.com/network/showflight/56876734190,https://www.airlines-manager.com/aircraft/show/122278401,9:00,11:29,320,"77,521$","42,051$",$131.41,"$16,933.29"
ORD - MKE,56886798053,O-YEG-YUL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202032,https://www.airlines-manager.com/network/showflight/56886798053,https://www.airlines-manager.com/aircraft/show/122278397,12:45,15:14,320,"77,521$","42,051$",$131.41,"$16,933.29"
ORD - MKE,56895754176,O-YEG-YUL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202032,https://www.airlines-manager.com/network/showflight/56895754176,https://www.airlines-manager.com/aircraft/show/122278398,17:15,19:44,320,"77,521$","42,051$",$131.41,"$16,933.29"
ORD - MKE,56903707088,O-YEG-YUL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202032,https://www.airlines-manager.com/network/showflight/56903707088,https://www.airlines-manager.com/aircraft/show/122278399,21:45,0:14,320,"77,521$","42,051$",$131.41,"$16,933.29"
ORD - MSP,56866822942,O-ATL-YYZ-5,A321neo,https://www.airlines-manager.com/network/showline/51097519,https://www.airlines-manager.com/network/showflight/56866822942,https://www.airlines-manager.com/aircraft/show/115400545,5:15,8:44,338,"192,452$","152,247$",$450.43,"$43,707.27"
ORD - MSP,56880042707,O-ATL-YYZ-4,A321neo,https://www.airlines-manager.com/network/showline/51097519,https://www.airlines-manager.com/network/showflight/56880042707,https://www.airlines-manager.com/aircraft/show/121813378,11:00,14:29,338,"192,452$","152,247$",$450.43,"$43,707.27"
ORD - MSP,56889535241,O-ATL-YYZ-3,A321neo,https://www.airlines-manager.com/network/showline/51097519,https://www.airlines-manager.com/network/showflight/56889535241,https://www.airlines-manager.com/aircraft/show/121813379,14:45,18:14,338,"192,452$","152,247$",$450.43,"$43,707.27"
ORD - MSP,56898577588,O-ATL-YYZ-1,A321neo,https://www.airlines-manager.com/network/showline/51097519,https://www.airlines-manager.com/network/showflight/56898577588,https://www.airlines-manager.com/aircraft/show/121813381,19:15,22:44,338,"192,452$","152,247$",$450.43,"$43,707.27"
ORD - MSP,56901278278,O-ATL-YYZ-2,A321neo,https://www.airlines-manager.com/network/showline/51097519,https://www.airlines-manager.com/network/showflight/56901278278,https://www.airlines-manager.com/aircraft/show/121813380,21:15,0:44,338,"192,452$","152,247$",$450.43,"$43,707.27"
ORD - OAK,56862956340,O-OAK-SMF-2,A321neo,https://www.airlines-manager.com/network/showline/51097516,https://www.airlines-manager.com/network/showflight/56862956340,https://www.airlines-manager.com/aircraft/show/121813395,1:15,10:29,338,"632,876$","575,553$","$1,702.82","$62,334.26"
ORD - OAK,56862956341,O-OAK-SMF-5,A321neo,https://www.airlines-manager.com/network/showline/51097516,https://www.airlines-manager.com/network/showflight/56862956341,https://www.airlines-manager.com/aircraft/show/121813392,3:15,12:29,338,"632,876$","575,553$","$1,702.82","$62,334.26"
ORD - OAK,56880042716,O-OAK-SMF-1,A321neo,https://www.airlines-manager.com/network/showline/51097516,https://www.airlines-manager.com/network/showflight/56880042716,https://www.airlines-manager.com/aircraft/show/121813396,11:00,20:14,338,"632,876$","575,553$","$1,702.82","$62,334.26"
ORD - OAK,56886798082,O-OAK-SMF-4,A321neo,https://www.airlines-manager.com/network/showline/51097516,https://www.airlines-manager.com/network/showflight/56886798082,https://www.airlines-manager.com/aircraft/show/121813393,13:00,22:14,338,"632,876$","575,553$","$1,702.82","$62,334.26"
ORD - OAK,56906228720,O-OAK-SMF-3,A321neo,https://www.airlines-manager.com/network/showline/51097516,https://www.airlines-manager.com/network/showflight/56906228720,https://www.airlines-manager.com/aircraft/show/121813394,23:00,8:14,338,"632,876$","575,553$","$1,702.82","$62,334.26"
ORD - ONT,56862956457,O-SJC-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/51202009,https://www.airlines-manager.com/network/showflight/56862956457,https://www.airlines-manager.com/aircraft/show/122278411,1:45,10:29,320,"551,827$","486,749$","$1,521.09","$55,734.62"
ORD - ONT,56862956458,O-SJC-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/51202009,https://www.airlines-manager.com/network/showflight/56862956458,https://www.airlines-manager.com/aircraft/show/122278410,3:45,12:29,320,"551,827$","486,749$","$1,521.09","$55,734.62"
ORD - ONT,56886798263,O-SJC-ONT-5,737-900ER,https://www.airlines-manager.com/network/showline/51202009,https://www.airlines-manager.com/network/showflight/56886798263,https://www.airlines-manager.com/aircraft/show/122278407,14:00,22:44,320,"551,827$","486,749$","$1,521.09","$55,734.62"
ORD - ONT,56892624171,O-SJC-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/51202009,https://www.airlines-manager.com/network/showflight/56892624171,https://www.airlines-manager.com/aircraft/show/122278409,16:30,1:14,320,"551,827$","486,749$","$1,521.09","$55,734.62"
ORD - ONT,56895754320,O-SJC-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/51202009,https://www.airlines-manager.com/network/showflight/56895754320,https://www.airlines-manager.com/aircraft/show/122278408,18:30,3:14,320,"551,827$","486,749$","$1,521.09","$55,734.62"
ORD - PDX,56862956455,O-PDX-SAN-2,737-900ER,https://www.airlines-manager.com/network/showline/50984820,https://www.airlines-manager.com/network/showflight/56862956455,https://www.airlines-manager.com/aircraft/show/121383374,1:45,10:29,320,"557,358$","489,633$","$1,530.10","$56,064.85"
ORD - PDX,56862956456,O-PDX-SAN-4,737-900ER,https://www.airlines-manager.com/network/showline/50984820,https://www.airlines-manager.com/network/showflight/56862956456,https://www.airlines-manager.com/aircraft/show/121383372,3:45,12:29,320,"557,358$","489,633$","$1,530.10","$56,064.85"
ORD - PDX,56886798262,O-PDX-SAN-1,737-900ER,https://www.airlines-manager.com/network/showline/50984820,https://www.airlines-manager.com/network/showflight/56886798262,https://www.airlines-manager.com/aircraft/show/121383375,14:00,22:44,320,"557,358$","489,633$","$1,530.10","$56,064.85"
ORD - PDX,56892624140,O-PDX-SAN-6 B,A319-100,https://www.airlines-manager.com/network/showline/50984820,https://www.airlines-manager.com/network/showflight/56892624140,https://www.airlines-manager.com/aircraft/show/121383410,16:00,0:44,198,"420,196$","372,271$","$1,880.16","$42,626.45"
ORD - PDX,56892624141,O-PDX-SAN-3,737-900ER,https://www.airlines-manager.com/network/showline/50984820,https://www.airlines-manager.com/network/showflight/56892624141,https://www.airlines-manager.com/aircraft/show/121383373,17:00,1:44,320,"557,358$","489,633$","$1,530.10","$56,064.85"
ORD - PDX,56898577567,O-PDX-SAN-5,737-900ER,https://www.airlines-manager.com/network/showline/50984820,https://www.airlines-manager.com/network/showflight/56898577567,https://www.airlines-manager.com/aircraft/show/121383371,19:00,3:44,320,"557,358$","489,633$","$1,530.10","$56,064.85"
ORD - PHL,56876734111,O-RNO-LGB-5,737-900ER,https://www.airlines-manager.com/network/showline/51202010,https://www.airlines-manager.com/network/showflight/56876734111,https://www.airlines-manager.com/aircraft/show/122278402,8:15,12:59,320,"303,790$","250,421$",$782.57,"$52,905.85"
ORD - PHL,56880042770,O-RNO-LGB-3,737-900ER,https://www.airlines-manager.com/network/showline/51202010,https://www.airlines-manager.com/network/showflight/56880042770,https://www.airlines-manager.com/aircraft/show/122278404,11:00,15:44,320,"303,790$","250,421$",$782.57,"$52,905.85"
ORD - PHL,56886798142,O-RNO-LGB-4,737-900ER,https://www.airlines-manager.com/network/showline/51202010,https://www.airlines-manager.com/network/showflight/56886798142,https://www.airlines-manager.com/aircraft/show/122278403,13:00,17:44,320,"303,790$","250,421$",$782.57,"$52,905.85"
ORD - PHL,56898577548,O-SJC-BOS,ERJ-175,https://www.airlines-manager.com/network/showline/51202010,https://www.airlines-manager.com/network/showflight/56898577548,https://www.airlines-manager.com/aircraft/show/122320232,18:45,23:29,102,"135,728$","107,438$","$1,053.31","$22,698.17"
ORD - PHL,56898577549,O-RNO-LGB-1,737-900ER,https://www.airlines-manager.com/network/showline/51202010,https://www.airlines-manager.com/network/showflight/56898577549,https://www.airlines-manager.com/aircraft/show/122278406,19:30,0:14,320,"303,790$","250,421$",$782.57,"$52,905.85"
ORD - PHL,56903707060,O-RNO-LGB-2,737-900ER,https://www.airlines-manager.com/network/showline/51202010,https://www.airlines-manager.com/network/showflight/56903707060,https://www.airlines-manager.com/aircraft/show/122278405,21:30,2:14,320,"303,790$","250,421$",$782.57,"$52,905.85"
ORD - PHX,56862956578,O-LAS-PHX-3,737-900ER,https://www.airlines-manager.com/network/showline/50984819,https://www.airlines-manager.com/network/showflight/56862956578,https://www.airlines-manager.com/aircraft/show/121383378,2:45,10:29,320,"492,818$","420,732$","$1,314.79","$54,405.00"
ORD - PHX,56866822910,O-LAS-PHX-5,737-900ER,https://www.airlines-manager.com/network/showline/50984819,https://www.airlines-manager.com/network/showflight/56866822910,https://www.airlines-manager.com/aircraft/show/121383376,4:45,12:29,320,"492,818$","420,732$","$1,314.79","$54,405.00"
ORD - PHX,56880042768,O-LAS-PHX-2,737-900ER,https://www.airlines-manager.com/network/showline/50984819,https://www.airlines-manager.com/network/showflight/56880042768,https://www.airlines-manager.com/aircraft/show/121383379,11:00,18:44,320,"492,818$","420,732$","$1,314.79","$54,405.00"
ORD - PHX,56886798140,O-LAS-PHX-4,737-900ER,https://www.airlines-manager.com/network/showline/50984819,https://www.airlines-manager.com/network/showflight/56886798140,https://www.airlines-manager.com/aircraft/show/121383377,13:00,20:44,320,"492,818$","420,732$","$1,314.79","$54,405.00"
ORD - PHX,56898577568,O-LAS-PHX-1,737-900ER,https://www.airlines-manager.com/network/showline/50984819,https://www.airlines-manager.com/network/showflight/56898577568,https://www.airlines-manager.com/aircraft/show/121383380,19:00,2:44,320,"492,818$","420,732$","$1,314.79","$54,405.00"
ORD - PHX,56906228741,O-LAS-PHX-6 B,A319-100,https://www.airlines-manager.com/network/showline/50984819,https://www.airlines-manager.com/network/showflight/56906228741,https://www.airlines-manager.com/aircraft/show/121383409,23:00,6:44,198,"372,009$","321,652$","$1,624.51","$41,592.93"
ORD - PVR,56862956389,O-YYC-SLC-1,A321neo,https://www.airlines-manager.com/network/showline/51097558,https://www.airlines-manager.com/network/showflight/56862956389,https://www.airlines-manager.com/aircraft/show/121813391,1:30,10:29,338,"619,880$","564,603$","$1,670.42","$62,850.06"
ORD - PVR,56862956390,O-YYC-SLC-4,A321neo,https://www.airlines-manager.com/network/showline/51097558,https://www.airlines-manager.com/network/showflight/56862956390,https://www.airlines-manager.com/aircraft/show/121813388,3:30,12:29,338,"619,880$","564,603$","$1,670.42","$62,850.06"
ORD - PVR,56880042712,O-YYC-SLC-3,A321neo,https://www.airlines-manager.com/network/showline/51097558,https://www.airlines-manager.com/network/showflight/56880042712,https://www.airlines-manager.com/aircraft/show/121813389,11:00,19:59,338,"619,880$","564,603$","$1,670.42","$62,850.06"
ORD - PVR,56886798079,O-YYC-SLC-5,A321neo,https://www.airlines-manager.com/network/showline/51097558,https://www.airlines-manager.com/network/showflight/56886798079,https://www.airlines-manager.com/aircraft/show/121813387,13:00,21:59,338,"619,880$","564,603$","$1,670.42","$62,850.06"
ORD - PVR,56895754246,O-YYC-SLC-2,A321neo,https://www.airlines-manager.com/network/showline/51097558,https://www.airlines-manager.com/network/showflight/56895754246,https://www.airlines-manager.com/aircraft/show/121813390,18:00,2:59,338,"619,880$","564,603$","$1,670.42","$62,850.06"
ORD - RNO,56862956244,O-RNO-LGB-3,737-900ER,https://www.airlines-manager.com/network/showline/51202011,https://www.airlines-manager.com/network/showflight/56862956244,https://www.airlines-manager.com/aircraft/show/122278404,0:30,8:59,320,"541,593$","478,361$","$1,494.88","$56,388.33"
ORD - RNO,56862956245,O-RNO-LGB-4,737-900ER,https://www.airlines-manager.com/network/showline/51202011,https://www.airlines-manager.com/network/showflight/56862956245,https://www.airlines-manager.com/aircraft/show/122278403,2:30,10:59,320,"541,593$","478,361$","$1,494.88","$56,388.33"
ORD - RNO,56880042771,O-RNO-LGB-1,737-900ER,https://www.airlines-manager.com/network/showline/51202011,https://www.airlines-manager.com/network/showflight/56880042771,https://www.airlines-manager.com/aircraft/show/122278406,11:00,19:29,320,"541,593$","478,361$","$1,494.88","$56,388.33"
ORD - RNO,56886798143,O-RNO-LGB-2,737-900ER,https://www.airlines-manager.com/network/showline/51202011,https://www.airlines-manager.com/network/showflight/56886798143,https://www.airlines-manager.com/aircraft/show/122278405,13:00,21:29,320,"541,593$","478,361$","$1,494.88","$56,388.33"
ORD - RNO,56903707089,O-RNO-LGB-5,737-900ER,https://www.airlines-manager.com/network/showline/51202011,https://www.airlines-manager.com/network/showflight/56903707089,https://www.airlines-manager.com/aircraft/show/122278402,21:45,6:14,320,"541,593$","478,361$","$1,494.88","$56,388.33"
ORD - RSW,56862956487,O-BWI-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202039,https://www.airlines-manager.com/network/showflight/56862956487,https://www.airlines-manager.com/aircraft/show/122278395,2:00,8:29,320,"403,635$","347,958$","$1,087.37","$53,669.61"
ORD - RSW,56873155643,O-BWI-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202039,https://www.airlines-manager.com/network/showflight/56873155643,https://www.airlines-manager.com/aircraft/show/122278396,7:30,13:59,320,"403,635$","347,958$","$1,087.37","$53,669.61"
ORD - RSW,56889535346,O-BWI-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202039,https://www.airlines-manager.com/network/showflight/56889535346,https://www.airlines-manager.com/aircraft/show/122278392,15:30,21:59,320,"403,635$","347,958$","$1,087.37","$53,669.61"
ORD - RSW,56898577530,O-BWI-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202039,https://www.airlines-manager.com/network/showflight/56898577530,https://www.airlines-manager.com/aircraft/show/122278393,18:45,1:14,320,"403,635$","347,958$","$1,087.37","$53,669.61"
ORD - RSW,56906228727,O-BWI-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202039,https://www.airlines-manager.com/network/showflight/56906228727,https://www.airlines-manager.com/aircraft/show/122278394,23:00,5:29,273,"367,387$","313,130$","$1,147.00","$48,297.69"
ORD - SAN,56862956286,O-PDX-SAN-6 B,A319-100,https://www.airlines-manager.com/network/showline/50984821,https://www.airlines-manager.com/network/showflight/56862956286,https://www.airlines-manager.com/aircraft/show/121383410,0:45,9:29,198,"419,974$","372,484$","$1,881.23","$42,650.84"
ORD - SAN,56862956287,O-PDX-SAN-3,737-900ER,https://www.airlines-manager.com/network/showline/50984821,https://www.airlines-manager.com/network/showflight/56862956287,https://www.airlines-manager.com/aircraft/show/121383373,1:45,10:29,320,"557,448$","490,339$","$1,532.31","$56,145.69"
ORD - SAN,56862956288,O-PDX-SAN-5,737-900ER,https://www.airlines-manager.com/network/showline/50984821,https://www.airlines-manager.com/network/showflight/56862956288,https://www.airlines-manager.com/aircraft/show/121383371,3:45,12:29,320,"557,448$","490,339$","$1,532.31","$56,145.69"
ORD - SAN,56880042766,O-PDX-SAN-2,737-900ER,https://www.airlines-manager.com/network/showline/50984821,https://www.airlines-manager.com/network/showflight/56880042766,https://www.airlines-manager.com/aircraft/show/121383374,11:00,19:44,320,"557,448$","490,339$","$1,532.31","$56,145.69"
ORD - SAN,56886798138,O-PDX-SAN-4,737-900ER,https://www.airlines-manager.com/network/showline/50984821,https://www.airlines-manager.com/network/showflight/56886798138,https://www.airlines-manager.com/aircraft/show/121383372,13:00,21:44,320,"557,448$","490,339$","$1,532.31","$56,145.69"
ORD - SAN,56903707200,O-PDX-SAN-1,737-900ER,https://www.airlines-manager.com/network/showline/50984821,https://www.airlines-manager.com/network/showflight/56903707200,https://www.airlines-manager.com/aircraft/show/121383375,22:45,7:29,320,"557,448$","490,339$","$1,532.31","$56,145.69"
ORD - SEA,56862956440,O-LAX-SEA-3,757-300,https://www.airlines-manager.com/network/showline/50984822,https://www.airlines-manager.com/network/showflight/56862956440,https://www.airlines-manager.com/aircraft/show/121383388,1:45,10:14,400,"718,707$","637,475$","$1,593.69","$75,144.40"
ORD - SEA,56862956441,O-LAX-SEA-5,757-300,https://www.airlines-manager.com/network/showline/50984822,https://www.airlines-manager.com/network/showflight/56862956441,https://www.airlines-manager.com/aircraft/show/121383386,3:45,12:14,400,"718,707$","637,475$","$1,593.69","$75,144.40"
ORD - SEA,56880042728,O-LAX-SEA-2,757-300,https://www.airlines-manager.com/network/showline/50984822,https://www.airlines-manager.com/network/showflight/56880042728,https://www.airlines-manager.com/aircraft/show/121383389,11:00,19:29,400,"718,707$","637,475$","$1,593.69","$75,144.40"
ORD - SEA,56886798101,O-LAX-SEA-4,757-300,https://www.airlines-manager.com/network/showline/50984822,https://www.airlines-manager.com/network/showflight/56886798101,https://www.airlines-manager.com/aircraft/show/121383387,13:00,21:29,400,"718,707$","637,475$","$1,593.69","$75,144.40"
ORD - SEA,56906228795,O-LAX-SEA-1,757-300,https://www.airlines-manager.com/network/showline/50984822,https://www.airlines-manager.com/network/showflight/56906228795,https://www.airlines-manager.com/aircraft/show/121383390,23:45,8:14,400,"718,707$","637,475$","$1,593.69","$75,144.40"
ORD - SJC,56862956357,O-SJC-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/51202007,https://www.airlines-manager.com/network/showflight/56862956357,https://www.airlines-manager.com/aircraft/show/122278409,1:15,10:29,320,"579,545$","511,882$","$1,599.63","$55,438.48"
ORD - SJC,56862956358,O-SJC-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/51202007,https://www.airlines-manager.com/network/showflight/56862956358,https://www.airlines-manager.com/aircraft/show/122278408,3:15,12:29,320,"579,545$","511,882$","$1,599.63","$55,438.48"
ORD - SJC,56866822830,O-SJC-BOS,ERJ-175,https://www.airlines-manager.com/network/showline/51202007,https://www.airlines-manager.com/network/showflight/56866822830,https://www.airlines-manager.com/aircraft/show/122320232,4:00,13:14,102,"255,491$","217,327$","$2,130.66","$23,537.22"
ORD - SJC,56880042773,O-SJC-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/51202007,https://www.airlines-manager.com/network/showflight/56880042773,https://www.airlines-manager.com/aircraft/show/122278411,11:00,20:14,320,"579,545$","511,882$","$1,599.63","$55,438.48"
ORD - SJC,56886798146,O-SJC-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/51202007,https://www.airlines-manager.com/network/showflight/56886798146,https://www.airlines-manager.com/aircraft/show/122278410,13:00,22:14,320,"579,545$","511,882$","$1,599.63","$55,438.48"
ORD - SJC,56903707202,O-SJC-ONT-5,737-900ER,https://www.airlines-manager.com/network/showline/51202007,https://www.airlines-manager.com/network/showflight/56903707202,https://www.airlines-manager.com/aircraft/show/122278407,22:45,7:59,320,"579,545$","511,882$","$1,599.63","$55,438.48"
ORD - SJD,56862956436,O-SJD-FLL-2,A321neo,https://www.airlines-manager.com/network/showline/51097559,https://www.airlines-manager.com/network/showflight/56862956436,https://www.airlines-manager.com/aircraft/show/121813385,1:45,10:44,338,"623,013$","567,939$","$1,680.29","$63,221.41"
ORD - SJD,56862956437,O-SJD-FLL-3,A321neo,https://www.airlines-manager.com/network/showline/51097559,https://www.airlines-manager.com/network/showflight/56862956437,https://www.airlines-manager.com/aircraft/show/121813384,3:45,12:44,338,"623,013$","567,939$","$1,680.29","$63,221.41"
ORD - SJD,56886798078,O-SJD-FLL-1,A321neo,https://www.airlines-manager.com/network/showline/51097559,https://www.airlines-manager.com/network/showflight/56886798078,https://www.airlines-manager.com/aircraft/show/121813386,13:00,21:59,338,"623,013$","567,939$","$1,680.29","$63,221.41"
ORD - SJD,56898577589,O-SJD-FLL-5,A321neo,https://www.airlines-manager.com/network/showline/51097559,https://www.airlines-manager.com/network/showflight/56898577589,https://www.airlines-manager.com/aircraft/show/121813382,19:15,4:14,338,"623,013$","567,939$","$1,680.29","$63,221.41"
ORD - SJD,56903707096,O-SJD-FLL-4,A321neo,https://www.airlines-manager.com/network/showline/51097559,https://www.airlines-manager.com/network/showflight/56903707096,https://www.airlines-manager.com/aircraft/show/121813383,22:00,6:59,338,"623,013$","567,939$","$1,680.29","$63,221.41"
ORD - SJU,56862956260,O-ATL-YYZ-2,A321neo,https://www.airlines-manager.com/network/showline/51097587,https://www.airlines-manager.com/network/showflight/56862956260,https://www.airlines-manager.com/aircraft/show/121813380,0:45,10:44,338,"698,683$","637,914$","$1,887.32","$63,897.90"
ORD - SJU,56880042703,O-ATL-YYZ-5,A321neo,https://www.airlines-manager.com/network/showline/51097587,https://www.airlines-manager.com/network/showflight/56880042703,https://www.airlines-manager.com/aircraft/show/115400545,11:00,20:59,338,"698,683$","637,914$","$1,887.32","$63,897.90"
ORD - SJU,56889535230,O-ATL-YYZ-4,A321neo,https://www.airlines-manager.com/network/showline/51097587,https://www.airlines-manager.com/network/showflight/56889535230,https://www.airlines-manager.com/aircraft/show/121813378,14:30,0:29,338,"698,683$","637,914$","$1,887.32","$63,897.90"
ORD - SJU,56895754287,O-ATL-YYZ-3,A321neo,https://www.airlines-manager.com/network/showline/51097587,https://www.airlines-manager.com/network/showflight/56895754287,https://www.airlines-manager.com/aircraft/show/121813379,18:15,4:14,338,"698,683$","637,914$","$1,887.32","$63,897.90"
ORD - SJU,56903707186,O-ATL-YYZ-1,A321neo,https://www.airlines-manager.com/network/showline/51097587,https://www.airlines-manager.com/network/showflight/56903707186,https://www.airlines-manager.com/aircraft/show/121813381,22:45,8:44,338,"698,683$","637,914$","$1,887.32","$63,897.90"
ORD - SLC,56862956673,O-YYC-SLC-3,A321neo,https://www.airlines-manager.com/network/showline/51097521,https://www.airlines-manager.com/network/showflight/56862956673,https://www.airlines-manager.com/aircraft/show/121813389,3:30,10:29,338,"484,413$","431,505$","$1,276.64","$61,790.69"
ORD - SLC,56869877563,O-YYC-SLC-5,A321neo,https://www.airlines-manager.com/network/showline/51097521,https://www.airlines-manager.com/network/showflight/56869877563,https://www.airlines-manager.com/aircraft/show/121813387,5:30,12:29,338,"484,413$","431,505$","$1,276.64","$61,790.69"
ORD - SLC,56880042713,O-YYC-SLC-2,A321neo,https://www.airlines-manager.com/network/showline/51097521,https://www.airlines-manager.com/network/showflight/56880042713,https://www.airlines-manager.com/aircraft/show/121813390,11:00,17:59,338,"484,413$","431,505$","$1,276.64","$61,790.69"
ORD - SLC,56895754309,O-YYC-SLC-1,A321neo,https://www.airlines-manager.com/network/showline/51097521,https://www.airlines-manager.com/network/showflight/56895754309,https://www.airlines-manager.com/aircraft/show/121813391,18:30,1:29,338,"484,413$","431,505$","$1,276.64","$61,790.69"
ORD - SLC,56901278202,O-YYC-SLC-4,A321neo,https://www.airlines-manager.com/network/showline/51097521,https://www.airlines-manager.com/network/showflight/56901278202,https://www.airlines-manager.com/aircraft/show/121813388,20:30,3:29,338,"484,413$","431,505$","$1,276.64","$61,790.69"
ORD - SMF,56862956391,O-OAK-SMF-1,A321neo,https://www.airlines-manager.com/network/showline/51097520,https://www.airlines-manager.com/network/showflight/56862956391,https://www.airlines-manager.com/aircraft/show/121813396,1:30,10:29,338,"618,472$","563,095$","$1,665.96","$62,682.19"
ORD - SMF,56862956392,O-OAK-SMF-4,A321neo,https://www.airlines-manager.com/network/showline/51097520,https://www.airlines-manager.com/network/showflight/56862956392,https://www.airlines-manager.com/aircraft/show/121813393,3:30,12:29,338,"618,472$","563,095$","$1,665.96","$62,682.19"
ORD - SMF,56886798225,O-OAK-SMF-3,A321neo,https://www.airlines-manager.com/network/showline/51097520,https://www.airlines-manager.com/network/showflight/56886798225,https://www.airlines-manager.com/aircraft/show/121813394,14:00,22:59,338,"618,472$","563,095$","$1,665.96","$62,682.19"
ORD - SMF,56892624148,O-OAK-SMF-2,A321neo,https://www.airlines-manager.com/network/showline/51097520,https://www.airlines-manager.com/network/showflight/56892624148,https://www.airlines-manager.com/aircraft/show/121813395,16:15,1:14,338,"618,472$","563,095$","$1,665.96","$62,682.19"
ORD - SMF,56895754288,O-OAK-SMF-5,A321neo,https://www.airlines-manager.com/network/showline/51097520,https://www.airlines-manager.com/network/showflight/56895754288,https://www.airlines-manager.com/aircraft/show/121813392,18:15,3:14,338,"618,472$","563,095$","$1,665.96","$62,682.19"
ORD - SNA,56880042695,O-SNA-TODO,737-MAX8-200,https://www.airlines-manager.com/network/showline/51184362,https://www.airlines-manager.com/network/showflight/56880042695,https://www.airlines-manager.com/aircraft/show/120993787,11:00,19:44,272,"560,209$","518,315$","$1,905.57","$59,349.05"
ORD - SNA,56898577648,O-SNA-TODO,737-MAX8-200,https://www.airlines-manager.com/network/showline/51184362,https://www.airlines-manager.com/network/showflight/56898577648,https://www.airlines-manager.com/aircraft/show/120993787,19:45,4:29,272,"560,209$","518,315$","$1,905.57","$59,349.05"
ORD - STL,56862956545,O-BWI-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202037,https://www.airlines-manager.com/network/showflight/56862956545,https://www.airlines-manager.com/aircraft/show/122278392,2:30,5:29,320,"135,708$","94,657$",$295.80,"$31,728.60"
ORD - STL,56869877596,O-BWI-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202037,https://www.airlines-manager.com/network/showflight/56869877596,https://www.airlines-manager.com/aircraft/show/122278393,5:45,8:44,320,"135,708$","94,657$",$295.80,"$31,728.60"
ORD - STL,56880042589,O-BWI-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202037,https://www.airlines-manager.com/network/showflight/56880042589,https://www.airlines-manager.com/aircraft/show/122278394,10:00,12:59,320,"135,708$","94,657$",$295.80,"$31,728.60"
ORD - STL,56886798217,O-BWI-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202037,https://www.airlines-manager.com/network/showflight/56886798217,https://www.airlines-manager.com/aircraft/show/122278395,13:45,16:44,320,"135,708$","94,657$",$295.80,"$31,728.60"
ORD - STL,56898577598,O-BWI-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202037,https://www.airlines-manager.com/network/showflight/56898577598,https://www.airlines-manager.com/aircraft/show/122278396,19:15,22:14,320,"135,708$","94,657$",$295.80,"$31,728.60"
ORD - TPA,56873155642,O-PDX-SAN-1,737-900ER,https://www.airlines-manager.com/network/showline/50984824,https://www.airlines-manager.com/network/showflight/56873155642,https://www.airlines-manager.com/aircraft/show/121383375,7:30,13:29,320,"375,820$","319,842$",$999.51,"$53,455.49"
ORD - TPA,56876734222,O-PDX-SAN-6 B,A319-100,https://www.airlines-manager.com/network/showline/50984824,https://www.airlines-manager.com/network/showflight/56876734222,https://www.airlines-manager.com/aircraft/show/121383410,9:30,15:29,198,"284,901$","245,962$","$1,242.23","$41,107.86"
ORD - TPA,56880042765,O-PDX-SAN-3,737-900ER,https://www.airlines-manager.com/network/showline/50984824,https://www.airlines-manager.com/network/showflight/56880042765,https://www.airlines-manager.com/aircraft/show/121383373,11:00,16:59,320,"375,820$","319,842$",$999.51,"$53,455.49"
ORD - TPA,56886798137,O-PDX-SAN-5,737-900ER,https://www.airlines-manager.com/network/showline/50984824,https://www.airlines-manager.com/network/showflight/56886798137,https://www.airlines-manager.com/aircraft/show/121383371,13:00,18:59,320,"375,820$","319,842$",$999.51,"$53,455.49"
ORD - TPA,56898577661,O-PDX-SAN-2,737-900ER,https://www.airlines-manager.com/network/showline/50984824,https://www.airlines-manager.com/network/showflight/56898577661,https://www.airlines-manager.com/aircraft/show/121383374,19:45,1:44,320,"375,820$","319,842$",$999.51,"$53,455.49"
ORD - TPA,56903707087,O-PDX-SAN-4,737-900ER,https://www.airlines-manager.com/network/showline/50984824,https://www.airlines-manager.com/network/showflight/56903707087,https://www.airlines-manager.com/aircraft/show/121383372,21:45,3:44,270,"339,728$","285,114$","$1,055.98","$47,651.36"
ORD - YEG,56862956202,O-YEG-YUL-3,737-900ER,https://www.airlines-manager.com/network/showline/51201991,https://www.airlines-manager.com/network/showflight/56862956202,https://www.airlines-manager.com/aircraft/show/122278399,0:15,7:44,320,"484,754$","424,935$","$1,327.92","$56,784.19"
ORD - YEG,56866822814,O-YEG-YUL-2,737-900ER,https://www.airlines-manager.com/network/showline/51201991,https://www.airlines-manager.com/network/showflight/56866822814,https://www.airlines-manager.com/aircraft/show/122278400,4:00,11:29,320,"484,754$","424,935$","$1,327.92","$56,784.19"
ORD - YEG,56883365065,O-YEG-YUL-1,737-900ER,https://www.airlines-manager.com/network/showline/51201991,https://www.airlines-manager.com/network/showflight/56883365065,https://www.airlines-manager.com/aircraft/show/122278401,11:30,18:59,320,"484,754$","424,935$","$1,327.92","$56,784.19"
ORD - YEG,56889535334,O-YEG-YUL-5,737-900ER,https://www.airlines-manager.com/network/showline/51201991,https://www.airlines-manager.com/network/showflight/56889535334,https://www.airlines-manager.com/aircraft/show/122278397,15:15,22:44,320,"484,754$","424,935$","$1,327.92","$56,784.19"
ORD - YEG,56898577662,O-YEG-YUL-4,737-900ER,https://www.airlines-manager.com/network/showline/51201991,https://www.airlines-manager.com/network/showflight/56898577662,https://www.airlines-manager.com/aircraft/show/122278398,19:45,3:14,320,"484,754$","424,935$","$1,327.92","$56,784.19"
ORD - YUL,56862956662,O-YEG-YUL-4,737-900ER,https://www.airlines-manager.com/network/showline/51201992,https://www.airlines-manager.com/network/showflight/56862956662,https://www.airlines-manager.com/aircraft/show/122278398,3:15,8:14,320,"322,103$","272,133$",$850.42,"$54,608.63"
ORD - YUL,56873155694,O-YEG-YUL-3,737-900ER,https://www.airlines-manager.com/network/showline/51201992,https://www.airlines-manager.com/network/showflight/56873155694,https://www.airlines-manager.com/aircraft/show/122278399,7:45,12:44,320,"322,103$","272,133$",$850.42,"$54,608.63"
ORD - YUL,56883365064,O-YEG-YUL-2,737-900ER,https://www.airlines-manager.com/network/showline/51201992,https://www.airlines-manager.com/network/showflight/56883365064,https://www.airlines-manager.com/aircraft/show/122278400,11:30,16:29,320,"322,103$","272,133$",$850.42,"$54,608.63"
ORD - YUL,56898577569,O-YEG-YUL-1,737-900ER,https://www.airlines-manager.com/network/showline/51201992,https://www.airlines-manager.com/network/showflight/56898577569,https://www.airlines-manager.com/aircraft/show/122278401,19:00,23:59,320,"322,103$","272,133$",$850.42,"$54,608.63"
ORD - YUL,56903707201,O-YEG-YUL-5,737-900ER,https://www.airlines-manager.com/network/showline/51201992,https://www.airlines-manager.com/network/showflight/56903707201,https://www.airlines-manager.com/aircraft/show/122278397,22:45,3:44,320,"322,103$","272,133$",$850.42,"$54,608.63"
ORD - YVR,56862956345,O-YVR-GDL-2,757-300,https://www.airlines-manager.com/network/showline/50984850,https://www.airlines-manager.com/network/showflight/56862956345,https://www.airlines-manager.com/aircraft/show/121383384,1:15,9:59,400,"728,709$","651,879$","$1,629.70","$74,642.63"
ORD - YVR,56862956346,O-YVR-GDL-3,757-300,https://www.airlines-manager.com/network/showline/50984850,https://www.airlines-manager.com/network/showflight/56862956346,https://www.airlines-manager.com/aircraft/show/121383383,3:15,11:59,400,"728,709$","651,879$","$1,629.70","$74,642.63"
ORD - YVR,56889535271,O-YVR-GDL-1,757-300,https://www.airlines-manager.com/network/showline/50984850,https://www.airlines-manager.com/network/showflight/56889535271,https://www.airlines-manager.com/aircraft/show/121383385,15:00,23:44,400,"728,709$","651,879$","$1,629.70","$74,642.63"
ORD - YVR,56892624165,O-YVR-GDL-4,757-300,https://www.airlines-manager.com/network/showline/50984850,https://www.airlines-manager.com/network/showflight/56892624165,https://www.airlines-manager.com/aircraft/show/121383382,16:30,1:14,400,"728,709$","651,879$","$1,629.70","$74,642.63"
ORD - YVR,56895754313,O-YVR-GDL-5,757-300,https://www.airlines-manager.com/network/showline/50984850,https://www.airlines-manager.com/network/showflight/56895754313,https://www.airlines-manager.com/aircraft/show/121383381,18:30,3:14,400,"728,709$","651,879$","$1,629.70","$74,642.63"
ORD - YYC,56862956612,O-YYC-SLC-2,A321neo,https://www.airlines-manager.com/network/showline/51097547,https://www.airlines-manager.com/network/showflight/56862956612,https://www.airlines-manager.com/aircraft/show/121813390,3:00,10:29,338,"518,520$","465,177$","$1,376.26","$62,161.74"
ORD - YYC,56880042714,O-YYC-SLC-1,A321neo,https://www.airlines-manager.com/network/showline/51097547,https://www.airlines-manager.com/network/showflight/56880042714,https://www.airlines-manager.com/aircraft/show/121813391,11:00,18:29,338,"518,520$","465,177$","$1,376.26","$62,161.74"
ORD - YYC,56886798080,O-YYC-SLC-4,A321neo,https://www.airlines-manager.com/network/showline/51097547,https://www.airlines-manager.com/network/showflight/56886798080,https://www.airlines-manager.com/aircraft/show/121813388,13:00,20:29,338,"518,520$","465,177$","$1,376.26","$62,161.74"
ORD - YYC,56901278126,O-YYC-SLC-3,A321neo,https://www.airlines-manager.com/network/showline/51097547,https://www.airlines-manager.com/network/showflight/56901278126,https://www.airlines-manager.com/aircraft/show/121813389,20:00,3:29,338,"518,520$","465,177$","$1,376.26","$62,161.74"
ORD - YYC,56903707098,O-YYC-SLC-5,A321neo,https://www.airlines-manager.com/network/showline/51097547,https://www.airlines-manager.com/network/showflight/56903707098,https://www.airlines-manager.com/aircraft/show/121813387,22:00,5:29,338,"518,520$","465,177$","$1,376.26","$62,161.74"
ORD - YYZ,56862956387,O-ATL-YYZ-5,A321neo,https://www.airlines-manager.com/network/showline/51097548,https://www.airlines-manager.com/network/showflight/56862956387,https://www.airlines-manager.com/aircraft/show/115400545,1:30,5:14,338,"237,420$","195,123$",$577.29,"$52,265.09"
ORD - YYZ,56866822924,O-ATL-YYZ-4,A321neo,https://www.airlines-manager.com/network/showline/51097548,https://www.airlines-manager.com/network/showflight/56866822924,https://www.airlines-manager.com/aircraft/show/121813378,5:00,8:44,338,"237,420$","195,123$",$577.29,"$52,265.09"
ORD - YYZ,56880042708,O-ATL-YYZ-3,A321neo,https://www.airlines-manager.com/network/showline/51097548,https://www.airlines-manager.com/network/showflight/56880042708,https://www.airlines-manager.com/aircraft/show/121813379,11:00,14:44,338,"237,420$","195,123$",$577.29,"$52,265.09"
ORD - YYZ,56889535340,O-ATL-YYZ-1,A321neo,https://www.airlines-manager.com/network/showline/51097548,https://www.airlines-manager.com/network/showflight/56889535340,https://www.airlines-manager.com/aircraft/show/121813381,15:30,19:14,338,"237,420$","195,123$",$577.29,"$52,265.09"
ORD - YYZ,56895754191,O-ATL-YYZ-2,A321neo,https://www.airlines-manager.com/network/showline/51097548,https://www.airlines-manager.com/network/showflight/56895754191,https://www.airlines-manager.com/aircraft/show/121813380,17:30,21:14,338,"237,420$","195,123$",$577.29,"$52,265.09"`;
