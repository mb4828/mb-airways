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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
		tz: 'US/Eastern'
	},
	{
		name: 'Western Nebraska-Scottsbluff Regional Airport (BFF)',
		city: 'Scottsbluff, USA - Nebraska 🇺🇸',
		pos: [41.87180880453483, -103.5942995049976],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
		tz: 'US/Mountain'
	},
	{
		name: 'Eugene Airport (EUG)',
		city: 'Eugene, USA - Oregon 🇺🇸',
		pos: [44.12185809726057, -123.21588957302129],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		name: 'Fairbanks International Airport (FAI)',
		city: 'Fairbanks, USA - Alaska 🇺🇸',
		pos: [64.8164391043826, -147.8635168019232],
		hubs: ['ord'],
		tz: 'US/Alaska'
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
		name: 'Spokane International Airport (GEG)',
		city: 'Spokane, USA - Washington 🇺🇸',
		pos: [47.62118457654647, -117.53338283178057],
		hubs: ['ord'],
		tz: 'US/Pacific'
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		name: 'Juneau International Airport (JNU)',
		city: 'Juneau, USA - Alaska 🇺🇸',
		pos: [58.358352647857295, -134.58387162073254],
		hubs: ['ord'],
		tz: 'US/Alaska'
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
		hubs: ['iah', 'ord'],
		tz: 'US/Central'
	},
	{
		name: 'Rogue Valley International Medford Airport (MFR)',
		city: 'Medford, USA - Oregon 🇺🇸',
		pos: [42.369094888174644, -122.87312247409928],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
		tz: 'US/Pacific'
	},
	{
		name: 'Manchester-Boston Regional Airport (MHT)',
		city: 'Manchester, USA - New Hampshire 🇺🇸',
		pos: [42.9297832621787, -71.43505763213719],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['iah', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
		tz: 'US/Central'
	},
	{
		name: 'Eppley Airfield (OMA)',
		city: 'Omaha, USA - Nebraska 🇺🇸',
		pos: [41.30224308640403, -95.89469287800654],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
		tz: 'US/Eastern'
	},
	{
		name: 'Kangerlussuaq Airport (SFJ)',
		city: 'Kangerlussuaq, Greenland 🇬🇱',
		pos: [67.1775669383681, -50.651060561338205],
		hubs: ['ord'],
		tz: 'America/Nuuk'
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
		hubs: ['ewr', 'sfo', 'iah', 'ord'],
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
		name: 'Winnipeg James Armstrong Richardson International Airport (YWG)',
		city: 'Winnipeg, Canada 🇨🇦',
		pos: [49.90989045505348, -97.23656756049226],
		hubs: ['ord'],
		tz: 'Canada/Mountain'
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
		name: 'Yellowknife Airport (YZF)',
		city: 'Yellowknife, Canada 🇨🇦',
		pos: [62.46527349066923, -114.44129734775916],
		hubs: ['ord'],
		tz: 'Canada/Mountain'
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
EWR - ABQ,57632964187,E-ABQ-AUS-2,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/57632964187,https://www.airlines-manager.com/aircraft/show/90717078,0:45,9:59,310,"$575,728.00","$529,752.00","$1,708.88","$57,373.86"
EWR - ABQ,57632964189,E-ABQ-AUS-5,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/57632964189,https://www.airlines-manager.com/aircraft/show/95950199,2:45,11:59,310,"$575,728.00","$529,752.00","$1,708.88","$57,373.86"
EWR - ABQ,57648263087,E-ABQ-AUS-1,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/57648263087,https://www.airlines-manager.com/aircraft/show/90717079,10:00,19:14,310,"$575,728.00","$529,752.00","$1,708.88","$57,373.86"
EWR - ABQ,57662009395,E-ABQ-AUS-3,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/57662009395,https://www.airlines-manager.com/aircraft/show/90717077,16:45,1:59,310,"$575,728.00","$529,752.00","$1,708.88","$57,373.86"
EWR - ABQ,57665599575,E-ABQ-AUS-4,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/57665599575,https://www.airlines-manager.com/aircraft/show/90717076,17:45,2:59,310,"$575,728.00","$529,752.00","$1,708.88","$57,373.86"
EWR - ALB,57632964017,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/57632964017,https://www.airlines-manager.com/aircraft/show/119220543,0:15,2:59,310,"$97,112.00","$79,379.00",$256.06,"$29,041.10"
EWR - ALB,57637373131,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/57637373131,https://www.airlines-manager.com/aircraft/show/119220542,4:45,7:29,310,"$97,112.00","$79,379.00",$256.06,"$29,041.10"
EWR - ALB,57662009334,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/57662009334,https://www.airlines-manager.com/aircraft/show/119220545,16:00,18:44,310,"$97,112.00","$79,379.00",$256.06,"$29,041.10"
EWR - ALB,57671659196,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/57671659196,https://www.airlines-manager.com/aircraft/show/119220544,20:30,23:14,310,"$97,112.00","$79,379.00",$256.06,"$29,041.10"
EWR - AMS,57651685725,E-56B-4 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/57651685725,https://www.airlines-manager.com/aircraft/show/94521247,11:30,2:44,748,"$2,330,925.00","$2,066,730.00","$2,763.01","$135,671.55"
EWR - AMS,57655460189,E-56B-2 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/57655460189,https://www.airlines-manager.com/aircraft/show/90656556,13:15,4:29,748,"$2,330,925.00","$2,066,730.00","$2,763.01","$135,671.55"
EWR - AMS,57658665238,E-56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/57658665238,https://www.airlines-manager.com/aircraft/show/89124072,15:00,6:14,748,"$2,104,373.00","$1,900,580.00","$2,540.88","$124,764.55"
EWR - ANC,57648263042,E-STL-PIT-3,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/57648263042,https://www.airlines-manager.com/aircraft/show/115400546,10:00,0:59,338,"$1,007,405.00","$944,321.00","$2,793.85","$63,024.76"
EWR - ANC,57655460183,E-STL-PIT-2,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/57655460183,https://www.airlines-manager.com/aircraft/show/115400547,13:15,4:14,338,"$1,007,405.00","$944,321.00","$2,793.85","$63,024.76"
EWR - ANC,57665599687,E-STL-PIT-1,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/57665599687,https://www.airlines-manager.com/aircraft/show/115400548,18:45,9:44,338,"$1,007,405.00","$944,321.00","$2,793.85","$63,024.76"
EWR - ANC,57671659321,E-STL-PIT-4,A321neo-LR,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/57671659321,https://www.airlines-manager.com/aircraft/show/103406580,21:45,12:44,338,"$1,016,769.00","$951,951.00","$2,816.42","$63,533.99"
EWR - ARN,57632964687,E-56D-1 E,787-10,https://www.airlines-manager.com/network/showline/50072203,https://www.airlines-manager.com/network/showflight/57632964687,https://www.airlines-manager.com/aircraft/show/118644436,3:45,19:44,648,"$1,976,114.00","$1,844,631.00","$2,846.65","$115,409.66"
EWR - ARN,57655460022,E-56D-3 E,787-10,https://www.airlines-manager.com/network/showline/50072203,https://www.airlines-manager.com/network/showflight/57655460022,https://www.airlines-manager.com/aircraft/show/118644438,12:45,4:44,648,"$1,976,114.00","$1,844,631.00","$2,846.65","$115,409.66"
EWR - ARN,57665599689,E-56D-5 E,787-10,https://www.airlines-manager.com/network/showline/50072203,https://www.airlines-manager.com/network/showflight/57665599689,https://www.airlines-manager.com/aircraft/show/118644440,18:45,10:44,648,"$1,976,114.00","$1,844,631.00","$2,846.65","$115,409.66"
EWR - ATH,57632963885,E-84A-7 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/57632963885,https://www.airlines-manager.com/aircraft/show/94521249,0:00,19:59,852,"$3,250,987.00","$2,958,694.00","$3,472.65","$148,058.08"
EWR - ATH,57668758372,E-84A-4 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/57668758372,https://www.airlines-manager.com/aircraft/show/90656551,19:45,15:44,852,"$3,250,987.00","$2,958,694.00","$3,472.65","$148,058.08"
EWR - ATL,57648263050,E-DFW-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/57648263050,https://www.airlines-manager.com/aircraft/show/90489724,10:00,14:59,320,"$317,565.00","$256,248.00",$800.78,"$51,421.00"
EWR - ATL,57658665137,E-DFW-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/57658665137,https://www.airlines-manager.com/aircraft/show/90489726,14:15,19:14,320,"$317,565.00","$256,248.00",$800.78,"$51,421.00"
EWR - ATL,57665599540,E-DFW-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/57665599540,https://www.airlines-manager.com/aircraft/show/90489725,17:30,22:29,320,"$317,565.00","$256,248.00",$800.78,"$51,421.00"
EWR - ATL,57665599541,E-DFW-ATL-6 B,A319-100,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/57665599541,https://www.airlines-manager.com/aircraft/show/105222360,18:30,23:29,198,"$241,826.00","$199,756.00","$1,008.87","$40,084.82"
EWR - ATL,57668758350,E-DFW-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/57668758350,https://www.airlines-manager.com/aircraft/show/86238752,19:45,0:44,320,"$317,565.00","$256,248.00",$800.78,"$51,421.00"
EWR - ATL,57674153192,E-DFW-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/57674153192,https://www.airlines-manager.com/aircraft/show/86238753,22:15,3:14,320,"$317,565.00","$256,248.00",$800.78,"$51,421.00"
EWR - AUS,57632964533,E-ABQ-AUS-3,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/57632964533,https://www.airlines-manager.com/aircraft/show/90717077,2:00,9:59,310,"$501,297.00","$460,053.00","$1,484.04","$57,626.68"
EWR - AUS,57632964534,E-ABQ-AUS-4,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/57632964534,https://www.airlines-manager.com/aircraft/show/90717076,3:00,10:59,310,"$501,297.00","$460,053.00","$1,484.04","$57,626.68"
EWR - AUS,57648263086,E-ABQ-AUS-2,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/57648263086,https://www.airlines-manager.com/aircraft/show/90717078,10:00,17:59,310,"$501,297.00","$460,053.00","$1,484.04","$57,626.68"
EWR - AUS,57651685770,E-ABQ-AUS-5,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/57651685770,https://www.airlines-manager.com/aircraft/show/95950199,12:00,19:59,310,"$501,297.00","$460,053.00","$1,484.04","$57,626.68"
EWR - AUS,57668758301,E-ABQ-AUS-1,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/57668758301,https://www.airlines-manager.com/aircraft/show/90717079,19:15,3:14,310,"$501,297.00","$460,053.00","$1,484.04","$57,626.68"
EWR - BCN,57662009261,E-84A-5 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/57662009261,https://www.airlines-manager.com/aircraft/show/94521250,15:45,7:44,852,"$2,628,418.00","$2,386,121.00","$2,800.61","$149,288.07"
EWR - BCN,57668758412,E-84A-2 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/57668758412,https://www.airlines-manager.com/aircraft/show/94521252,20:00,11:59,852,"$2,628,418.00","$2,386,121.00","$2,800.61","$149,288.07"
EWR - BDA,57644525277,E-YEG-BFF-5 B,A319-100,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/57644525277,https://www.airlines-manager.com/aircraft/show/115493369,8:45,13:59,198,"$244,232.00","$222,459.00","$1,123.53","$42,508.09"
EWR - BDA,57651685613,E-YEG-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/57651685613,https://www.airlines-manager.com/aircraft/show/98936170,11:00,16:14,320,"$322,411.00","$291,621.00",$911.32,"$55,723.76"
EWR - BDA,57655460083,E-YEG-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/57655460083,https://www.airlines-manager.com/aircraft/show/98936171,13:00,18:14,320,"$322,411.00","$291,621.00",$911.32,"$55,723.76"
EWR - BDA,57671659243,E-YEG-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/57671659243,https://www.airlines-manager.com/aircraft/show/98936168,21:00,2:14,320,"$322,411.00","$291,621.00",$911.32,"$55,723.76"
EWR - BDA,57674153229,E-YEG-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/57674153229,https://www.airlines-manager.com/aircraft/show/98936169,22:30,3:44,255,"$261,834.00","$232,748.00",$912.74,"$44,474.14"
EWR - BDL,57632964293,E-COS-ICT-4,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/57632964293,https://www.airlines-manager.com/aircraft/show/108834811,1:00,3:29,310,"$89,797.00","$71,469.00",$230.55,"$28,779.46"
EWR - BDL,57648263026,E-COS-ICT-5,ERJ-175,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/57648263026,https://www.airlines-manager.com/aircraft/show/108466265,9:30,11:59,112,"$38,517.00","$27,319.00",$243.92,"$11,000.94"
EWR - BDL,57658665098,E-COS-ICT-3,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/57658665098,https://www.airlines-manager.com/aircraft/show/108834810,14:00,16:29,310,"$89,797.00","$71,469.00",$230.55,"$28,779.46"
EWR - BDL,57662009328,E-COS-ICT-2,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/57662009328,https://www.airlines-manager.com/aircraft/show/108834809,16:00,18:29,310,"$89,797.00","$71,469.00",$230.55,"$28,779.46"
EWR - BDL,57674153298,E-COS-ICT-1,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/57674153298,https://www.airlines-manager.com/aircraft/show/108834808,23:00,1:29,310,"$89,797.00","$71,469.00",$230.55,"$28,779.46"
EWR - BER,57637373216,E-84B-5  B2,777-300,https://www.airlines-manager.com/network/showline/49921899,https://www.airlines-manager.com/network/showflight/57637373216,https://www.airlines-manager.com/aircraft/show/117958699,5:45,22:14,852,"$2,719,031.00","$2,467,383.00","$2,895.99","$149,689.57"
EWR - BER,57665599584,E-84B-1  B2,777-300,https://www.airlines-manager.com/network/showline/49921899,https://www.airlines-manager.com/network/showflight/57665599584,https://www.airlines-manager.com/aircraft/show/117958695,17:45,10:14,852,"$2,719,031.00","$2,467,383.00","$2,895.99","$149,689.57"
EWR - BFF,57632964550,E-YEG-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/57632964550,https://www.airlines-manager.com/aircraft/show/98936168,2:15,10:14,320,"$507,802.00","$465,091.00","$1,453.41","$58,257.75"
EWR - BFF,57632964551,E-YEG-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/57632964551,https://www.airlines-manager.com/aircraft/show/98936169,3:45,11:44,320,"$507,802.00","$465,091.00","$1,453.41","$58,257.75"
EWR - BFF,57658665123,E-YEG-BFF-5 B,A319-100,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/57658665123,https://www.airlines-manager.com/aircraft/show/115493369,14:00,21:59,198,"$383,240.00","$352,330.00","$1,779.44","$44,133.19"
EWR - BFF,57662009354,E-YEG-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/57662009354,https://www.airlines-manager.com/aircraft/show/98936170,16:15,0:14,320,"$507,802.00","$465,091.00","$1,453.41","$58,257.75"
EWR - BFF,57665599640,E-YEG-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/57665599640,https://www.airlines-manager.com/aircraft/show/98936171,18:15,2:14,320,"$507,802.00","$465,091.00","$1,453.41","$58,257.75"
EWR - BHM,57632964561,E-RAP-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/57632964561,https://www.airlines-manager.com/aircraft/show/116042862,2:15,7:44,310,"$346,865.00","$318,072.00","$1,026.04","$58,007.05"
EWR - BHM,57644525253,E-RAP-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/57644525253,https://www.airlines-manager.com/aircraft/show/116042859,8:30,13:59,310,"$346,865.00","$318,072.00","$1,026.04","$58,007.05"
EWR - BHM,57658665109,E-RAP-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/57658665109,https://www.airlines-manager.com/aircraft/show/116042860,14:00,19:29,310,"$346,865.00","$318,072.00","$1,026.04","$58,007.05"
EWR - BHM,57658665110,E-RAP-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/57658665110,https://www.airlines-manager.com/aircraft/show/116042861,15:15,20:44,310,"$346,865.00","$318,072.00","$1,026.04","$58,007.05"
EWR - BIL,57648263069,E-BIL-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/57648263069,https://www.airlines-manager.com/aircraft/show/116047882,10:00,18:59,320,"$565,856.00","$519,899.00","$1,624.68","$57,873.73"
EWR - BIL,57651685756,E-BIL-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/57651685756,https://www.airlines-manager.com/aircraft/show/116047885,12:00,20:59,320,"$565,856.00","$519,899.00","$1,624.68","$57,873.73"
EWR - BIL,57671659277,E-BIL-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/57671659277,https://www.airlines-manager.com/aircraft/show/116047884,21:15,6:14,320,"$565,856.00","$519,899.00","$1,624.68","$57,873.73"
EWR - BIL,57674153262,E-BIL-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/57674153262,https://www.airlines-manager.com/aircraft/show/116047883,22:45,7:44,320,"$565,856.00","$519,899.00","$1,624.68","$57,873.73"
EWR - BNA,57632964661,E-BNA-JAX-3,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/57632964661,https://www.airlines-manager.com/aircraft/show/104610408,3:15,8:14,310,"$322,924.00","$293,584.00",$947.05,"$58,913.18"
EWR - BNA,57644525246,E-BNA-JAX-2,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/57644525246,https://www.airlines-manager.com/aircraft/show/104610409,8:30,13:29,310,"$322,924.00","$293,584.00",$947.05,"$58,913.18"
EWR - BNA,57655460145,E-BNA-JAX-1,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/57655460145,https://www.airlines-manager.com/aircraft/show/104610410,13:00,17:59,310,"$322,924.00","$293,584.00",$947.05,"$58,913.18"
EWR - BNA,57662009447,E-BNA-JAX-5,ERJ-175,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/57662009447,https://www.airlines-manager.com/aircraft/show/96421247,17:00,21:59,112,"$153,204.00","$134,298.00","$1,199.09","$26,949.43"
EWR - BNA,57671659278,E-BNA-JAX-4,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/57671659278,https://www.airlines-manager.com/aircraft/show/104610407,21:15,2:14,310,"$322,924.00","$293,584.00",$947.05,"$58,913.18"
EWR - BOI,57632964466,E-BOI-PBI-5 B,A319-100,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/57632964466,https://www.airlines-manager.com/aircraft/show/110582846,1:30,11:59,198,"$492,457.00","$454,215.00","$2,294.02","$43,327.34"
EWR - BOI,57648263101,E-BOI-PBI-1,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/57648263101,https://www.airlines-manager.com/aircraft/show/104418460,10:00,20:29,310,"$655,891.00","$608,204.00","$1,961.95","$58,016.28"
EWR - BOI,57658665222,E-BOI-PBI-4,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/57658665222,https://www.airlines-manager.com/aircraft/show/104418463,15:00,1:29,310,"$655,891.00","$608,204.00","$1,961.95","$58,016.28"
EWR - BOI,57662009378,E-BOI-PBI-3,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/57662009378,https://www.airlines-manager.com/aircraft/show/104418462,16:30,2:59,310,"$655,891.00","$608,204.00","$1,961.95","$58,016.28"
EWR - BOI,57675937076,E-BOI-PBI-2,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/57675937076,https://www.airlines-manager.com/aircraft/show/104418461,23:30,9:59,310,"$655,891.00","$608,204.00","$1,961.95","$58,016.28"
EWR - BOS,57632964640,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/57632964640,https://www.airlines-manager.com/aircraft/show/104034464,3:00,5:59,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,57648263124,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/57648263124,https://www.airlines-manager.com/aircraft/show/104034463,10:00,12:59,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,57655460032,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/57655460032,https://www.airlines-manager.com/aircraft/show/104034462,12:45,15:44,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,57655460033,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/57655460033,https://www.airlines-manager.com/aircraft/show/99316501,13:45,16:44,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,57662009442,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/57662009442,https://www.airlines-manager.com/aircraft/show/104034464,17:00,19:59,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,57668758406,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/57668758406,https://www.airlines-manager.com/aircraft/show/104034463,20:00,22:59,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,57674153279,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/57674153279,https://www.airlines-manager.com/aircraft/show/104034462,22:45,1:44,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,57675937109,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/57675937109,https://www.airlines-manager.com/aircraft/show/99316501,23:45,2:44,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BRU,57632964593,E-84B-1  B2,777-300,https://www.airlines-manager.com/network/showline/49921920,https://www.airlines-manager.com/network/showflight/57632964593,https://www.airlines-manager.com/aircraft/show/117958695,2:30,17:44,852,"$2,501,229.00","$2,275,215.00","$2,670.44","$149,357.66"
EWR - BRU,57658665161,E-84B-4  B2,777-300,https://www.airlines-manager.com/network/showline/49921920,https://www.airlines-manager.com/network/showflight/57658665161,https://www.airlines-manager.com/aircraft/show/117958698,14:30,5:44,852,"$2,501,229.00","$2,275,215.00","$2,670.44","$149,357.66"
EWR - BTV,57644525276,E-FCA-CID-1,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/57644525276,https://www.airlines-manager.com/aircraft/show/116042866,8:45,11:59,310,"$140,026.00","$120,811.00",$389.71,"$37,364.23"
EWR - BTV,57651685779,E-FCA-CID-4,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/57651685779,https://www.airlines-manager.com/aircraft/show/116042863,12:00,15:14,310,"$140,026.00","$120,811.00",$389.71,"$37,364.23"
EWR - BTV,57655460156,E-FCA-CID-3,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/57655460156,https://www.airlines-manager.com/aircraft/show/116042864,13:00,16:14,310,"$140,026.00","$120,811.00",$389.71,"$37,364.23"
EWR - BTV,57665599713,E-FCA-CID-2,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/57665599713,https://www.airlines-manager.com/aircraft/show/116042865,18:45,21:59,310,"$140,026.00","$120,811.00",$389.71,"$37,364.23"
EWR - BUF,57637373200,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/57637373200,https://www.airlines-manager.com/aircraft/show/106104450,5:30,8:44,112,"70,781$","57,977$",$517.65,"$17,931.03"
EWR - BUF,57651685615,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/57651685615,https://www.airlines-manager.com/aircraft/show/105731236,11:00,14:14,320,"154,671$","130,701$",$408.44,"$40,422.99"
EWR - BUF,57658665164,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/57658665164,https://www.airlines-manager.com/aircraft/show/88494376,14:45,17:59,320,"154,671$","130,701$",$408.44,"$40,422.99"
EWR - BUF,57665599666,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/57665599666,https://www.airlines-manager.com/aircraft/show/88494377,18:30,21:44,320,"$154,671.00","$130,701.00",$408.44,"$40,422.99"
EWR - BUF,57674153286,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/57674153286,https://www.airlines-manager.com/aircraft/show/88494375,23:00,2:14,320,"$154,671.00","$130,701.00",$408.44,"$40,422.99"
EWR - BWI,57632964020,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/57632964020,https://www.airlines-manager.com/aircraft/show/104034464,0:15,2:59,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,57632964021,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/57632964021,https://www.airlines-manager.com/aircraft/show/104034463,3:15,5:59,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,57648263123,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/57648263123,https://www.airlines-manager.com/aircraft/show/104034462,10:00,12:44,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,57651685690,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/57651685690,https://www.airlines-manager.com/aircraft/show/99316501,11:00,13:44,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,57658665146,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/57658665146,https://www.airlines-manager.com/aircraft/show/104034464,14:15,16:59,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,57665599531,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/57665599531,https://www.airlines-manager.com/aircraft/show/104034463,17:15,19:59,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,57668758405,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/57668758405,https://www.airlines-manager.com/aircraft/show/104034462,20:00,22:44,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,57671659260,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/57671659260,https://www.airlines-manager.com/aircraft/show/99316501,21:00,23:44,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BZN,57632964064,E-BIL-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/57632964064,https://www.airlines-manager.com/aircraft/show/116047885,0:30,9:44,320,"$592,989.00","$546,085.00","$1,706.52","$59,142.78"
EWR - BZN,57651685755,E-BIL-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/57651685755,https://www.airlines-manager.com/aircraft/show/116047884,12:00,21:14,320,"$592,989.00","$546,085.00","$1,706.52","$59,142.78"
EWR - BZN,57655460196,E-BIL-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/57655460196,https://www.airlines-manager.com/aircraft/show/116047883,13:30,22:44,320,"$592,989.00","$546,085.00","$1,706.52","$59,142.78"
EWR - BZN,57674153234,E-BIL-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/57674153234,https://www.airlines-manager.com/aircraft/show/116047882,22:30,7:44,320,"$592,989.00","$546,085.00","$1,706.52","$59,142.78"
EWR - CAK,57644525242,E-BIL-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/57644525242,https://www.airlines-manager.com/aircraft/show/116047884,8:30,11:59,320,"$191,026.00","$166,924.00",$521.64,"$47,920.77"
EWR - CAK,57648263070,E-BIL-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/57648263070,https://www.airlines-manager.com/aircraft/show/116047883,10:00,13:29,320,"$191,026.00","$166,924.00",$521.64,"$47,920.77"
EWR - CAK,57668758257,E-BIL-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/57668758257,https://www.airlines-manager.com/aircraft/show/116047882,19:00,22:29,320,"$191,026.00","$166,924.00",$521.64,"$47,920.77"
EWR - CAK,57671659248,E-BIL-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/57671659248,https://www.airlines-manager.com/aircraft/show/116047885,21:00,0:29,290,"$180,144.00","$156,349.00",$539.13,"$44,884.88"
EWR - CDG,57632964643,E-56A-5 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/57632964643,https://www.airlines-manager.com/aircraft/show/106813011,3:00,18:14,748,"$2,340,297.00","$2,079,866.00","$2,780.57","$136,533.87"
EWR - CDG,57644525278,E-56A-6 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/57644525278,https://www.airlines-manager.com/aircraft/show/106813012,8:45,23:59,748,"$2,340,297.00","$2,079,866.00","$2,780.57","$136,533.87"
EWR - CDG,57668758281,E-56A-2 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/57668758281,https://www.airlines-manager.com/aircraft/show/106813008,19:00,10:14,568,"1,769,280$","1,591,285$","$2,801.56","$104,460.72"
EWR - CHS,57644525249,E-TUL-DSM-1,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/57644525249,https://www.airlines-manager.com/aircraft/show/110044463,8:30,12:59,310,"289,603$","264,659$",$853.74,"$59,031.75"
EWR - CHS,57651685796,E-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/57651685796,https://www.airlines-manager.com/aircraft/show/110113039,12:00,16:29,112,"138,180$","122,117$","$1,090.33","$27,237.99"
EWR - CHS,57658665140,E-TUL-DSM-4,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/57658665140,https://www.airlines-manager.com/aircraft/show/110044466,14:15,18:44,310,"289,603$","264,659$",$853.74,"$59,031.75"
EWR - CHS,57671659282,E-TUL-DSM-3,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/57671659282,https://www.airlines-manager.com/aircraft/show/110044465,21:15,1:44,310,"$289,603.00","$264,659.00",$853.74,"$59,031.75"
EWR - CHS,57674153299,E-TUL-DSM-2,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/57674153299,https://www.airlines-manager.com/aircraft/show/110044464,23:00,3:29,286,"$276,494.00","$251,963.00",$880.99,"$56,199.93"
EWR - CID,57632964343,E-FCA-CID-4,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/57632964343,https://www.airlines-manager.com/aircraft/show/116042863,1:15,6:59,310,"$357,618.00","$329,009.00","$1,061.32","$57,385.29"
EWR - CID,57632964344,E-FCA-CID-3,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/57632964344,https://www.airlines-manager.com/aircraft/show/116042864,2:15,7:59,310,"$357,618.00","$329,009.00","$1,061.32","$57,385.29"
EWR - CID,57648263106,E-FCA-CID-2,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/57648263106,https://www.airlines-manager.com/aircraft/show/116042865,10:00,15:44,310,"$357,618.00","$329,009.00","$1,061.32","$57,385.29"
EWR - CID,57674153170,E-FCA-CID-1,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/57674153170,https://www.airlines-manager.com/aircraft/show/116042866,22:00,3:44,299,"$350,180.00","$321,846.00","$1,076.41","$56,135.93"
EWR - CLE,57632964521,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/57632964521,https://www.airlines-manager.com/aircraft/show/106104450,1:45,5:29,112,"$92,088.00","$77,509.00",$692.04,"$20,761.34"
EWR - CLE,57637373151,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/57637373151,https://www.airlines-manager.com/aircraft/show/105731236,5:00,8:44,320,"$198,609.00","$171,795.00",$536.86,"$46,016.52"
EWR - CLE,57651685602,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/57651685602,https://www.airlines-manager.com/aircraft/show/88494376,11:00,14:44,320,"$198,609.00","$171,795.00",$536.86,"$46,016.52"
EWR - CLE,57658665165,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/57658665165,https://www.airlines-manager.com/aircraft/show/88494377,14:45,18:29,320,"$198,609.00","$171,795.00",$536.86,"$46,016.52"
EWR - CLE,57668758289,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/57668758289,https://www.airlines-manager.com/aircraft/show/88494375,19:15,22:59,320,"$198,609.00","$171,795.00",$536.86,"$46,016.52"
EWR - CLT,57632964512,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/57632964512,https://www.airlines-manager.com/aircraft/show/104034462,1:45,5:59,216,"$190,091.00","$163,580.00",$757.31,"$38,640.94"
EWR - CLT,57632964513,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/57632964513,https://www.airlines-manager.com/aircraft/show/99316501,2:45,6:59,216,"190,091$","163,580$",$757.31,"$38,640.94"
EWR - CLT,57648263125,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/57648263125,https://www.airlines-manager.com/aircraft/show/104034464,10:00,14:14,216,"190,091$","163,580$",$757.31,"$38,640.94"
EWR - CLT,57655460163,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/57655460163,https://www.airlines-manager.com/aircraft/show/104034463,13:00,17:14,216,"190,091$","163,580$",$757.31,"$38,640.94"
EWR - CLT,57662009259,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/57662009259,https://www.airlines-manager.com/aircraft/show/104034462,15:45,19:59,216,"190,091$","163,580$",$757.31,"$38,640.94"
EWR - CLT,57662009260,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/57662009260,https://www.airlines-manager.com/aircraft/show/99316501,16:45,20:59,216,"$190,091.00","$163,580.00",$757.31,"$38,640.94"
EWR - CLT,57668758407,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/57668758407,https://www.airlines-manager.com/aircraft/show/104034464,20:00,0:14,216,"$190,091.00","$163,580.00",$757.31,"$38,640.94"
EWR - CLT,57674153302,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/57674153302,https://www.airlines-manager.com/aircraft/show/104034463,23:00,3:14,216,"$190,091.00","$163,580.00",$757.31,"$38,640.94"
EWR - CMH,57637373106,E-BNA-JAX-2,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/57637373106,https://www.airlines-manager.com/aircraft/show/104610409,4:30,8:29,310,"$223,693.00","$199,539.00",$643.67,"$50,093.47"
EWR - CMH,57644525247,E-BNA-JAX-1,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/57644525247,https://www.airlines-manager.com/aircraft/show/104610410,8:30,12:29,310,"$223,693.00","$199,539.00",$643.67,"$50,093.47"
EWR - CMH,57655460176,E-BNA-JAX-5,ERJ-175,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/57655460176,https://www.airlines-manager.com/aircraft/show/96421247,13:00,16:59,112,"$104,115.00","$88,818.00",$793.02,"$22,297.41"
EWR - CMH,57665599521,E-BNA-JAX-4,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/57665599521,https://www.airlines-manager.com/aircraft/show/104610407,17:15,21:14,310,"$223,693.00","$199,539.00",$643.67,"$50,093.47"
EWR - CMH,57674153325,E-BNA-JAX-3,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/57674153325,https://www.airlines-manager.com/aircraft/show/104610408,23:15,3:14,310,"$223,693.00","$199,539.00",$643.67,"$50,093.47"
EWR - COS,57632964455,E-COS-ICT-1,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/57632964455,https://www.airlines-manager.com/aircraft/show/108834808,1:30,9:59,310,"$535,609.00","$493,957.00","$1,593.41","$58,226.76"
EWR - COS,57632964456,E-COS-ICT-4,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/57632964456,https://www.airlines-manager.com/aircraft/show/108834811,3:30,11:59,310,"$535,609.00","$493,957.00","$1,593.41","$58,226.76"
EWR - COS,57655460180,E-COS-ICT-5,ERJ-175,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/57655460180,https://www.airlines-manager.com/aircraft/show/108466265,13:00,21:29,112,"$251,439.00","$223,621.00","$1,996.62","$26,360.04"
EWR - COS,57662009380,E-COS-ICT-3,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/57662009380,https://www.airlines-manager.com/aircraft/show/108834810,16:30,0:59,310,"$535,609.00","$493,957.00","$1,593.41","$58,226.76"
EWR - COS,57665599677,E-COS-ICT-2,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/57665599677,https://www.airlines-manager.com/aircraft/show/108834809,18:30,2:59,310,"$535,609.00","$493,957.00","$1,593.41","$58,226.76"
EWR - CRW,57632964467,E-CRW E,A319-100,https://www.airlines-manager.com/network/showline/50838186,https://www.airlines-manager.com/network/showflight/57632964467,https://www.airlines-manager.com/aircraft/show/120941964,1:30,5:14,216,"$155,815.00","$139,188.00",$644.39,"$37,282.50"
EWR - CRW,57648263152,E-CRW E,A319-100,https://www.airlines-manager.com/network/showline/50838186,https://www.airlines-manager.com/network/showflight/57648263152,https://www.airlines-manager.com/aircraft/show/120941964,10:30,14:14,216,"$155,815.00","$139,188.00",$644.39,"$37,282.50"
EWR - CRW,57658665147,E-CRW E,A319-100,https://www.airlines-manager.com/network/showline/50838186,https://www.airlines-manager.com/network/showflight/57658665147,https://www.airlines-manager.com/aircraft/show/120941964,14:15,17:59,216,"$155,815.00","$139,188.00",$644.39,"$37,282.50"
EWR - CRW,57665599625,E-CRW E,A319-100,https://www.airlines-manager.com/network/showline/50838186,https://www.airlines-manager.com/network/showflight/57665599625,https://www.airlines-manager.com/aircraft/show/120941964,18:00,21:44,216,"$155,815.00","$139,188.00",$644.39,"$37,282.50"
EWR - CRW,57671659339,E-CRW E,A319-100,https://www.airlines-manager.com/network/showline/50838186,https://www.airlines-manager.com/network/showflight/57671659339,https://www.airlines-manager.com/aircraft/show/120941964,21:45,1:29,216,"$155,815.00","$139,188.00",$644.39,"$37,282.50"
EWR - CUN,57632964168,E-CUN-SJU-3,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/57632964168,https://www.airlines-manager.com/aircraft/show/106581306,0:45,8:44,320,"$522,882.00","$475,106.00","$1,484.71","$59,512.23"
EWR - CUN,57632964170,E-CUN-SJU-2,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/57632964170,https://www.airlines-manager.com/aircraft/show/106581305,2:15,10:14,320,"$522,882.00","$475,106.00","$1,484.71","$59,512.23"
EWR - CUN,57655460088,E-CUN-SJU-1,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/57655460088,https://www.airlines-manager.com/aircraft/show/106581304,13:00,20:59,320,"$522,882.00","$475,106.00","$1,484.71","$59,512.23"
EWR - CUN,57658665152,E-CUN-SJU-4,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/57658665152,https://www.airlines-manager.com/aircraft/show/106581307,14:30,22:29,320,"$522,882.00","$475,106.00","$1,484.71","$59,512.23"
EWR - CUN,57674153193,E-CUN-SJU-5,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/57674153193,https://www.airlines-manager.com/aircraft/show/86238754,22:15,6:14,320,"$522,882.00","$475,106.00","$1,484.71","$59,512.23"
EWR - CVG,57632964015,E-BNA-JAX-2,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/57632964015,https://www.airlines-manager.com/aircraft/show/104610409,0:15,4:29,310,"$271,945.00","$244,220.00",$787.81,"$57,689.76"
EWR - CVG,57637373074,E-BNA-JAX-1,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/57637373074,https://www.airlines-manager.com/aircraft/show/104610410,4:15,8:29,310,"$271,945.00","$244,220.00",$787.81,"$57,689.76"
EWR - CVG,57644525232,E-BNA-JAX-5,ERJ-175,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/57644525232,https://www.airlines-manager.com/aircraft/show/96421247,8:15,12:29,112,"$128,787.00","$111,161.00",$992.51,"$26,258.50"
EWR - CVG,57655460144,E-BNA-JAX-4,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/57655460144,https://www.airlines-manager.com/aircraft/show/104610407,13:00,17:14,310,"$271,945.00","$244,220.00",$787.81,"$57,689.76"
EWR - CVG,57668758273,E-BNA-JAX-3,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/57668758273,https://www.airlines-manager.com/aircraft/show/104610408,19:00,23:14,310,"$271,945.00","$244,220.00",$787.81,"$57,689.76"
EWR - DEN,57632964500,E-DEN-SLC-1,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/57632964500,https://www.airlines-manager.com/aircraft/show/86270785,1:45,9:59,310,"$531,120.00","$467,014.00","$1,506.50","$56,722.35"
EWR - DEN,57632964501,E-DEN-SLC-4,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/57632964501,https://www.airlines-manager.com/aircraft/show/90452835,2:45,10:59,310,"$531,120.00","$467,014.00","$1,506.50","$56,722.35"
EWR - DEN,57648263082,E-DEN-SLC-2,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/57648263082,https://www.airlines-manager.com/aircraft/show/87153196,10:00,18:14,310,"$531,120.00","$467,014.00","$1,506.50","$56,722.35"
EWR - DEN,57651685651,E-DEN-SLC-3,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/57651685651,https://www.airlines-manager.com/aircraft/show/86270783,11:00,19:14,310,"$531,120.00","$467,014.00","$1,506.50","$56,722.35"
EWR - DEN,57662009323,E-DEN-SLC-5,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/57662009323,https://www.airlines-manager.com/aircraft/show/90452833,16:00,0:14,310,"$531,120.00","$467,014.00","$1,506.50","$56,722.35"
EWR - DEN,57662009324,E-DEN-SLC-6 B,A319-100,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/57662009324,https://www.airlines-manager.com/aircraft/show/105223076,17:00,1:14,198,"$399,942.00","$348,588.00","$1,760.55","$42,338.62"
EWR - DFW,57632964577,E-DFW-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/57632964577,https://www.airlines-manager.com/aircraft/show/90489724,2:30,9:59,320,"$475,228.00","$410,113.00","$1,281.60","$54,803.52"
EWR - DFW,57632964578,E-DFW-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/57632964578,https://www.airlines-manager.com/aircraft/show/86238753,3:30,10:59,320,"$475,228.00","$410,113.00","$1,281.60","$54,803.52"
EWR - DFW,57648263051,E-DFW-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/57648263051,https://www.airlines-manager.com/aircraft/show/90489725,10:00,17:29,320,"475,228$","410,113$","$1,281.60","$54,803.52"
EWR - DFW,57651685692,E-DFW-ATL-6 B,A319-100,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/57651685692,https://www.airlines-manager.com/aircraft/show/105222360,11:00,18:29,198,"359,120$","313,518$","$1,583.42","$41,895.50"
EWR - DFW,57655460009,E-DFW-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/57655460009,https://www.airlines-manager.com/aircraft/show/86238752,12:15,19:44,320,"475,228$","410,113$","$1,281.60","$54,803.52"
EWR - DFW,57668758290,E-DFW-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/57668758290,https://www.airlines-manager.com/aircraft/show/90489726,19:15,2:44,320,"475,228$","410,113$","$1,281.60","$54,803.52"
EWR - DSM,57632964542,E-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/57632964542,https://www.airlines-manager.com/aircraft/show/110113039,2:00,7:59,112,"$178,037.00","$157,997.00","$1,410.69","$26,406.18"
EWR - DSM,57637373077,E-TUL-DSM-4,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/57637373077,https://www.airlines-manager.com/aircraft/show/110044466,4:15,10:14,310,"$376,654.00","$346,204.00","$1,116.79","$57,861.39"
EWR - DSM,57651685778,E-TUL-DSM-3,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/57651685778,https://www.airlines-manager.com/aircraft/show/110044465,12:00,17:59,310,"$376,654.00","$346,204.00","$1,116.79","$57,861.39"
EWR - DSM,57655460206,E-TUL-DSM-2,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/57655460206,https://www.airlines-manager.com/aircraft/show/110044464,13:45,19:44,310,"$376,654.00","$346,204.00","$1,116.79","$57,861.39"
EWR - DSM,57674153240,E-TUL-DSM-1,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/57674153240,https://www.airlines-manager.com/aircraft/show/110044463,22:30,4:29,281,"$355,721.00","$326,077.00","$1,160.42","$54,497.55"
EWR - DTW,57632964674,E-DTW-YYZ-5,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/57632964674,https://www.airlines-manager.com/aircraft/show/92003921,3:30,7:29,320,"$228,249.00","$191,002.00",$596.88,"$47,950.29"
EWR - DTW,57648263056,E-DTW-YYZ-1,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/57648263056,https://www.airlines-manager.com/aircraft/show/92003925,10:00,13:59,320,"$228,249.00","$191,002.00",$596.88,"$47,950.29"
EWR - DTW,57655460193,E-DTW-YYZ-2,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/57655460193,https://www.airlines-manager.com/aircraft/show/92003924,13:30,17:29,320,"$228,249.00","$191,002.00",$596.88,"$47,950.29"
EWR - DTW,57671659325,E-DTW-YYZ-3,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/57671659325,https://www.airlines-manager.com/aircraft/show/92003923,21:45,1:44,320,"$228,249.00","$191,002.00",$596.88,"$47,950.29"
EWR - DTW,57674153194,E-DTW-YYZ-4,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/57674153194,https://www.airlines-manager.com/aircraft/show/92003922,22:15,2:14,320,"$228,249.00","$191,002.00",$596.88,"$47,950.29"
EWR - DUB,57632964670,E-56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/57632964670,https://www.airlines-manager.com/aircraft/show/106721557,3:30,16:59,598,"$1,662,831.00","$1,551,567.00","$2,594.59","$115,072.95"
EWR - DUB,57637373168,E-56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/57637373168,https://www.airlines-manager.com/aircraft/show/106721559,5:15,18:44,598,"$1,662,831.00","$1,551,567.00","$2,594.59","$115,072.95"
EWR - DUB,57648263146,E-56C-6 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/57648263146,https://www.airlines-manager.com/aircraft/show/106721561,10:30,23:59,598,"$1,662,831.00","$1,551,567.00","$2,594.59","$115,072.95"
EWR - ECP,57632964263,E-MTJ-ECP-3,737-900ER,https://www.airlines-manager.com/network/showline/50761178,https://www.airlines-manager.com/network/showflight/57632964263,https://www.airlines-manager.com/aircraft/show/120706944,1:00,6:44,320,"$371,504.00","$337,111.00","$1,053.47","$58,798.43"
EWR - ECP,57648263078,E-MTJ-ECP-2,737-900ER,https://www.airlines-manager.com/network/showline/50761178,https://www.airlines-manager.com/network/showflight/57648263078,https://www.airlines-manager.com/aircraft/show/120706945,10:00,15:44,320,"$371,504.00","$337,111.00","$1,053.47","$58,798.43"
EWR - ECP,57658665208,E-MTJ-ECP-4,737-900ER,https://www.airlines-manager.com/network/showline/50761178,https://www.airlines-manager.com/network/showflight/57658665208,https://www.airlines-manager.com/aircraft/show/120706943,15:00,20:44,320,"$371,504.00","$337,111.00","$1,053.47","$58,798.43"
EWR - ECP,57668758261,E-MTJ-ECP-1,737-900ER,https://www.airlines-manager.com/network/showline/50761178,https://www.airlines-manager.com/network/showflight/57668758261,https://www.airlines-manager.com/aircraft/show/120706946,19:00,0:44,320,"$371,504.00","$337,111.00","$1,053.47","$58,798.43"
EWR - EDI,57637373057,E-56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/57637373057,https://www.airlines-manager.com/aircraft/show/106721558,4:15,17:59,598,"$1,648,512.00","$1,541,221.00","$2,577.29","$112,224.83"
EWR - EDI,57640828086,E-56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/57640828086,https://www.airlines-manager.com/aircraft/show/106721560,6:00,19:44,598,"$1,648,512.00","$1,541,221.00","$2,577.29","$112,224.83"
EWR - EDI,57668758347,E-56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/57668758347,https://www.airlines-manager.com/aircraft/show/106721560,19:45,9:29,598,"$1,648,512.00","$1,541,221.00","$2,577.29","$112,224.83"
EWR - ELP,57632964039,E-ELP-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/57632964039,https://www.airlines-manager.com/aircraft/show/103365577,0:30,9:59,320,"$593,056.00","$543,274.00","$1,697.73","$57,287.24"
EWR - ELP,57632964042,E-ELP-SAT-5 B,A319-100,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/57632964042,https://www.airlines-manager.com/aircraft/show/110582847,2:30,11:59,198,"$446,662.00","$410,459.00","$2,073.03","$43,282.14"
EWR - ELP,57648263065,E-ELP-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/57648263065,https://www.airlines-manager.com/aircraft/show/103365578,10:00,19:29,320,"$593,056.00","$543,274.00","$1,697.73","$57,287.24"
EWR - ELP,57651685746,E-ELP-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/57651685746,https://www.airlines-manager.com/aircraft/show/103365575,12:00,21:29,320,"$593,056.00","$543,274.00","$1,697.73","$57,287.24"
EWR - ELP,57662009355,E-ELP-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/57662009355,https://www.airlines-manager.com/aircraft/show/103365576,16:15,1:44,320,"$593,056.00","$543,274.00","$1,697.73","$57,287.24"
EWR - EUG,57632964490,E-EUG-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/57632964490,https://www.airlines-manager.com/aircraft/show/119220438,1:45,13:29,320,"$729,984.00","$674,719.00","$2,108.50","$57,504.46"
EWR - EUG,57651685759,E-EUG-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/57651685759,https://www.airlines-manager.com/aircraft/show/119220435,12:00,23:44,320,"$729,984.00","$674,719.00","$2,108.50","$57,504.46"
EWR - EUG,57658665066,E-EUG-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/57658665066,https://www.airlines-manager.com/aircraft/show/119220436,14:00,1:44,320,"$729,984.00","$674,719.00","$2,108.50","$57,504.46"
EWR - EUG,57675937098,E-EUG-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/57675937098,https://www.airlines-manager.com/aircraft/show/119220437,23:45,11:29,320,"$729,984.00","$674,719.00","$2,108.50","$57,504.46"
EWR - FAR,57632964499,E-LIT-FAR-4,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/57632964499,https://www.airlines-manager.com/aircraft/show/86270784,1:45,8:29,310,"$425,315.00","$392,348.00","$1,265.64","$58,269.50"
EWR - FAR,57637373154,E-LIT-FAR-3,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/57637373154,https://www.airlines-manager.com/aircraft/show/86270786,5:00,11:44,310,"$425,315.00","$392,348.00","$1,265.64","$58,269.50"
EWR - FAR,57658665210,E-LIT-FAR-2,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/57658665210,https://www.airlines-manager.com/aircraft/show/86270787,15:00,21:44,310,"$425,315.00","$392,348.00","$1,265.64","$58,269.50"
EWR - FAR,57668758300,E-LIT-FAR-1,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/57668758300,https://www.airlines-manager.com/aircraft/show/90452834,19:15,1:59,310,"$425,315.00","$392,348.00","$1,265.64","$58,269.50"
EWR - FAT,57632963983,E-PSP-FAT-2,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/57632963983,https://www.airlines-manager.com/aircraft/show/119220451,0:15,11:44,338,"$779,642.00","$731,517.00","$2,164.25","$63,702.50"
EWR - FAT,57651685574,E-PSP-FAT-3,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/57651685574,https://www.airlines-manager.com/aircraft/show/119220452,11:00,22:29,338,"$779,642.00","$731,517.00","$2,164.25","$63,702.50"
EWR - FAT,57655460047,E-PSP-FAT-4,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/57655460047,https://www.airlines-manager.com/aircraft/show/116672810,13:00,0:29,338,"$779,642.00","$731,517.00","$2,164.25","$63,702.50"
EWR - FAT,57674153186,E-PSP-FAT-1,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/57674153186,https://www.airlines-manager.com/aircraft/show/119220450,22:15,9:44,338,"$779,642.00","$731,517.00","$2,164.25","$63,702.50"
EWR - FCA,57651685780,E-FCA-CID-1,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/57651685780,https://www.airlines-manager.com/aircraft/show/116042866,12:00,21:59,310,"$626,012.00","$581,310.00","$1,875.19","$58,228.05"
EWR - FCA,57658665256,E-FCA-CID-4,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/57658665256,https://www.airlines-manager.com/aircraft/show/116042863,15:15,1:14,310,"$626,012.00","$581,310.00","$1,875.19","$58,228.05"
EWR - FCA,57662009359,E-FCA-CID-3,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/57662009359,https://www.airlines-manager.com/aircraft/show/116042864,16:15,2:14,310,"$626,012.00","$581,310.00","$1,875.19","$58,228.05"
EWR - FCA,57674153169,E-FCA-CID-2,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/57674153169,https://www.airlines-manager.com/aircraft/show/116042865,22:00,7:59,310,"$626,012.00","$581,310.00","$1,875.19","$58,228.05"
EWR - FCO,57632964592,E-84A-2 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/57632964592,https://www.airlines-manager.com/aircraft/show/94521252,2:30,19:59,852,"$2,914,869.00","$2,640,955.00","$3,099.71","$151,055.58"
EWR - FCO,57651685790,E-84A-3 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/57651685790,https://www.airlines-manager.com/aircraft/show/90656553,12:00,5:29,852,"$2,914,869.00","$2,640,955.00","$3,099.71","$151,055.58"
EWR - FLL,57632964689,E-DTW-YYZ-2,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/57632964689,https://www.airlines-manager.com/aircraft/show/92003924,3:45,9:59,320,"$392,797.00","$352,784.00","$1,102.45","$56,596.36"
EWR - FLL,57637373203,E-DTW-YYZ-4,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/57637373203,https://www.airlines-manager.com/aircraft/show/92003922,5:45,11:59,320,"$392,797.00","$352,784.00","$1,102.45","$56,596.36"
EWR - FLL,57651685607,E-DTW-YYZ-5,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/57651685607,https://www.airlines-manager.com/aircraft/show/92003921,11:00,17:14,320,"$392,797.00","$352,784.00","$1,102.45","$56,596.36"
EWR - FLL,57651685608,E-DTW-YYZ-3,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/57651685608,https://www.airlines-manager.com/aircraft/show/92003923,12:00,18:14,320,"$392,797.00","$352,784.00","$1,102.45","$56,596.36"
EWR - FLL,57665599542,E-DTW-YYZ-1,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/57665599542,https://www.airlines-manager.com/aircraft/show/92003925,17:30,23:44,320,"$392,797.00","$352,784.00","$1,102.45","$56,596.36"
EWR - FRA,57632964619,E-56B-5 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/57632964619,https://www.airlines-manager.com/aircraft/show/94521253,2:45,18:44,748,"$2,453,250.00","$2,188,346.00","$2,925.60","$136,914.24"
EWR - FRA,57637373110,E-56B-3 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/57637373110,https://www.airlines-manager.com/aircraft/show/90656555,4:30,20:29,748,"$2,453,250.00","$2,188,346.00","$2,925.60","$136,914.24"
EWR - FRA,57640828118,E-56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/57640828118,https://www.airlines-manager.com/aircraft/show/94521251,6:15,22:14,748,"$2,215,081.00","$2,014,089.00","$2,692.63","$126,011.82"
EWR - FSD,57637373075,E-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/57637373075,https://www.airlines-manager.com/aircraft/show/107161240,4:15,10:59,310,"$412,992.00","$380,511.00","$1,227.45","$56,511.53"
EWR - FSD,57648262995,E-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/57648262995,https://www.airlines-manager.com/aircraft/show/86782214,9:00,15:44,112,"$194,519.00","$172,989.00","$1,544.54","$25,691.44"
EWR - FSD,57651685668,E-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/57651685668,https://www.airlines-manager.com/aircraft/show/107161239,11:00,17:44,310,"$412,992.00","$380,511.00","$1,227.45","$56,511.53"
EWR - FSD,57658665255,E-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/57658665255,https://www.airlines-manager.com/aircraft/show/107161241,15:15,21:59,310,"$412,992.00","$380,511.00","$1,227.45","$56,511.53"
EWR - FSD,57665599649,E-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/57665599649,https://www.airlines-manager.com/aircraft/show/107161238,18:15,0:59,286,"$393,955.00","$362,243.00","$1,266.58","$53,798.47"
EWR - GRR,57644525254,E-RAP-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/57644525254,https://www.airlines-manager.com/aircraft/show/116042862,8:30,12:59,310,"$278,034.00","$253,092.00",$816.43,"$56,451.75"
EWR - GRR,57658665108,E-RAP-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/57658665108,https://www.airlines-manager.com/aircraft/show/116042859,14:00,18:29,310,"$278,034.00","$253,092.00",$816.43,"$56,451.75"
EWR - GRR,57668758335,E-RAP-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/57668758335,https://www.airlines-manager.com/aircraft/show/116042860,19:30,23:59,310,"$278,034.00","$253,092.00",$816.43,"$56,451.75"
EWR - GRR,57671659226,E-RAP-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/57671659226,https://www.airlines-manager.com/aircraft/show/116042861,20:45,1:14,310,"$278,034.00","$253,092.00",$816.43,"$56,451.75"
EWR - GSO,57632964697,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/57632964697,https://www.airlines-manager.com/aircraft/show/119220544,3:45,7:29,310,"$217,652.00","$195,033.00",$629.14,"$52,240.98"
EWR - GSO,57648263112,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/57648263112,https://www.airlines-manager.com/aircraft/show/119220543,10:00,13:44,310,"$217,652.00","$195,033.00",$629.14,"$52,240.98"
EWR - GSO,57658665155,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/57658665155,https://www.airlines-manager.com/aircraft/show/119220542,14:30,18:14,310,"$217,652.00","$195,033.00",$629.14,"$52,240.98"
EWR - GSO,57674153328,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/57674153328,https://www.airlines-manager.com/aircraft/show/119220545,23:15,2:59,310,"$217,652.00","$195,033.00",$629.14,"$52,240.98"
EWR - HEL,57651685544,E-56D-6 E,787-10,https://www.airlines-manager.com/network/showline/50072206,https://www.airlines-manager.com/network/showflight/57651685544,https://www.airlines-manager.com/aircraft/show/118644441,10:45,3:29,648,"$2,056,992.00","$1,921,807.00","$2,965.75","$114,849.02"
EWR - HEL,57651685545,E-56D-7 E,787-10,https://www.airlines-manager.com/network/showline/50072206,https://www.airlines-manager.com/network/showflight/57651685545,https://www.airlines-manager.com/aircraft/show/118644442,11:00,3:44,648,"$2,056,992.00","$1,921,807.00","$2,965.75","$114,849.02"
EWR - HEL,57668758380,E-56D-2 E,787-10,https://www.airlines-manager.com/network/showline/50072206,https://www.airlines-manager.com/network/showflight/57668758380,https://www.airlines-manager.com/aircraft/show/118644437,20:00,12:44,584,"$1,920,499.00","$1,791,895.00","$3,068.31","$107,085.36"
EWR - IAH,57632964667,E-IAH-LAS-3,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/57632964667,https://www.airlines-manager.com/aircraft/show/105859512,3:30,10:59,338,"$514,124.00","$466,262.00","$1,379.47","$62,306.73"
EWR - IAH,57637373092,E-IAH-LAS-5,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/57637373092,https://www.airlines-manager.com/aircraft/show/105859514,4:30,11:59,338,"$514,124.00","$466,262.00","$1,379.47","$62,306.73"
EWR - IAH,57644525148,E-IAH-LAS-1,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/57644525148,https://www.airlines-manager.com/aircraft/show/105859510,7:30,14:59,338,"$514,124.00","$466,262.00","$1,379.47","$62,306.73"
EWR - IAH,57651685562,E-IAH-LAS-2,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/57651685562,https://www.airlines-manager.com/aircraft/show/105859511,11:00,18:29,338,"$514,124.00","$466,262.00","$1,379.47","$62,306.73"
EWR - IAH,57651685563,E-IAH-LAS-4,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/57651685563,https://www.airlines-manager.com/aircraft/show/105859513,12:00,19:29,338,"$514,124.00","$466,262.00","$1,379.47","$62,306.73"
EWR - IAH,57662009335,Corporate Jet,A320-200,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/57662009335,https://www.airlines-manager.com/aircraft/show/101412921,16:00,23:29,84,"$360,563.00","$313,010.00","$3,726.31","$41,827.62"
EWR - IAH,57665599720,E-IAH-LAS-6,ERJ-175,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/57665599720,https://www.airlines-manager.com/aircraft/show/105864236,18:45,2:14,112,"223,737$","191,530$","$1,710.09","$25,594.21"
EWR - ICT,57632964288,E-COS-ICT-3,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/57632964288,https://www.airlines-manager.com/aircraft/show/108834810,1:00,7:59,310,"442,853$","408,153$","$1,316.62","$58,446.73"
EWR - ICT,57632964292,E-COS-ICT-2,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/57632964292,https://www.airlines-manager.com/aircraft/show/108834809,3:00,9:59,310,"442,853$","408,153$","$1,316.62","$58,446.73"
EWR - ICT,57651685673,E-COS-ICT-1,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/57651685673,https://www.airlines-manager.com/aircraft/show/108834808,11:00,17:59,310,"442,853$","408,153$","$1,316.62","$58,446.73"
EWR - ICT,57655460150,E-COS-ICT-4,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/57655460150,https://www.airlines-manager.com/aircraft/show/108834811,13:00,19:59,310,"$442,853.00","$408,153.00","$1,316.62","$58,446.73"
EWR - ICT,57671659315,E-COS-ICT-5,ERJ-175,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/57671659315,https://www.airlines-manager.com/aircraft/show/108466265,21:30,4:29,112,"$209,485.00","$186,465.00","$1,664.87","$26,701.43"
EWR - IND,57632964030,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/57632964030,https://www.airlines-manager.com/aircraft/show/88494376,0:30,4:59,320,"$295,294.00","$263,726.00",$824.14,"$58,823.64"
EWR - IND,57637373060,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/57637373060,https://www.airlines-manager.com/aircraft/show/88494377,4:15,8:44,320,"$295,294.00","$263,726.00",$824.14,"$58,823.64"
EWR - IND,57651685601,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/57651685601,https://www.airlines-manager.com/aircraft/show/88494375,11:00,15:29,320,"295,294$","263,726$",$824.14,"$58,823.64"
EWR - IND,57665599559,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/57665599559,https://www.airlines-manager.com/aircraft/show/106104450,17:30,21:59,112,"140,854$","123,199$","$1,099.99","$27,479.33"
EWR - IND,57671659213,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/57671659213,https://www.airlines-manager.com/aircraft/show/105731236,20:45,1:14,320,"295,294$","263,726$",$824.14,"$58,823.64"
EWR - JAN,57632964532,E-LIT-FAR-1,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/57632964532,https://www.airlines-manager.com/aircraft/show/90452834,2:00,8:14,310,"389,232$","358,551$","$1,156.62","$57,521.55"
EWR - JAN,57644525244,E-LIT-FAR-4,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/57644525244,https://www.airlines-manager.com/aircraft/show/86270784,8:30,14:44,310,"$389,232.00","$358,551.00","$1,156.62","$57,521.55"
EWR - JAN,57651685766,E-LIT-FAR-3,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/57651685766,https://www.airlines-manager.com/aircraft/show/86270786,12:00,18:14,310,"$389,232.00","$358,551.00","$1,156.62","$57,521.55"
EWR - JAN,57671659336,E-LIT-FAR-2,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/57671659336,https://www.airlines-manager.com/aircraft/show/86270787,21:45,3:59,310,"$389,232.00","$358,551.00","$1,156.62","$57,521.55"
EWR - JAX,57632964559,E-BNA-JAX-4,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/57632964559,https://www.airlines-manager.com/aircraft/show/104610407,2:15,7:29,310,"$337,690.00","$308,667.00",$995.70,"$58,980.96"
EWR - JAX,57644525224,E-BNA-JAX-3,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/57644525224,https://www.airlines-manager.com/aircraft/show/104610408,8:15,13:29,310,"$337,690.00","$308,667.00",$995.70,"$58,980.96"
EWR - JAX,57658665092,E-BNA-JAX-2,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/57658665092,https://www.airlines-manager.com/aircraft/show/104610409,14:00,19:14,310,"$337,690.00","$308,667.00",$995.70,"$58,980.96"
EWR - JAX,57665599613,E-BNA-JAX-1,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/57665599613,https://www.airlines-manager.com/aircraft/show/104610410,18:00,23:14,310,"$337,690.00","$308,667.00",$995.70,"$58,980.96"
EWR - JAX,57674153182,E-BNA-JAX-5,ERJ-175,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/57674153182,https://www.airlines-manager.com/aircraft/show/96421247,22:00,3:14,112,"$160,212.00","$141,366.00","$1,262.20","$27,012.61"
EWR - KEF,57662009406,E-56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/57662009406,https://www.airlines-manager.com/aircraft/show/106721557,17:00,4:14,598,"$1,343,998.00","$1,254,987.00","$2,098.64","$111,719.91"
EWR - KEF,57665599594,E-56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/57665599594,https://www.airlines-manager.com/aircraft/show/106721558,18:00,5:14,598,"$1,343,998.00","$1,254,987.00","$2,098.64","$111,719.91"
EWR - KEF,57665599595,E-56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/57665599595,https://www.airlines-manager.com/aircraft/show/106721559,18:45,5:59,598,"$1,343,998.00","$1,254,987.00","$2,098.64","$111,719.91"
EWR - LAS,57632963979,E-IAH-LAS-2,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/57632963979,https://www.airlines-manager.com/aircraft/show/105859511,0:15,10:59,338,"$737,877.00","$673,713.00","$1,993.23","$62,768.29"
EWR - LAS,57632963980,E-IAH-LAS-4,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/57632963980,https://www.airlines-manager.com/aircraft/show/105859513,1:15,11:59,338,"$737,877.00","$673,713.00","$1,993.23","$62,768.29"
EWR - LAS,57632963981,E-IAH-LAS-6,ERJ-175,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/57632963981,https://www.airlines-manager.com/aircraft/show/105864236,2:15,12:59,112,"$318,546.00","$274,501.00","$2,450.90","$25,574.63"
EWR - LAS,57651685738,E-IAH-LAS-5,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/57651685738,https://www.airlines-manager.com/aircraft/show/105859514,12:00,22:44,338,"$737,877.00","$673,713.00","$1,993.23","$62,768.29"
EWR - LAS,57658665181,E-IAH-LAS-1,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/57658665181,https://www.airlines-manager.com/aircraft/show/105859510,15:00,1:44,338,"$737,877.00","$673,713.00","$1,993.23","$62,768.29"
EWR - LAS,57662009386,E-IAH-LAS-3,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/57662009386,https://www.airlines-manager.com/aircraft/show/105859512,16:45,3:29,338,"$737,877.00","$673,713.00","$1,993.23","$62,768.29"
EWR - LAX,57632963830,E-SFO-LAX-4,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/57632963830,https://www.airlines-manager.com/aircraft/show/89233030,0:00,11:29,400,"$937,587.00","$846,364.00","$2,115.91","$73,703.69"
EWR - LAX,57632963831,E-SFO-LAX-5,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/57632963831,https://www.airlines-manager.com/aircraft/show/89233027,2:00,13:29,400,"$937,587.00","$846,364.00","$2,115.91","$73,703.69"
EWR - LAX,57655460014,E-SFO-LAX-1,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/57655460014,https://www.airlines-manager.com/aircraft/show/83716137,12:30,23:59,400,"$937,587.00","$846,364.00","$2,115.91","$73,703.69"
EWR - LAX,57658665033,E-SFO-LAX-2,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/57658665033,https://www.airlines-manager.com/aircraft/show/89233028,14:00,1:29,400,"937,587$","846,364$","$2,115.91","$73,703.69"
EWR - LAX,57662009230,E-SFO-LAX-3,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/57662009230,https://www.airlines-manager.com/aircraft/show/89233029,15:30,2:59,400,"$937,587.00","$846,364.00","$2,115.91","$73,703.69"
EWR - LEX,57632964636,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/57632964636,https://www.airlines-manager.com/aircraft/show/119220545,3:00,7:29,310,"$273,360.00","$250,152.00",$806.94,"$55,795.99"
EWR - LEX,57648263113,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/57648263113,https://www.airlines-manager.com/aircraft/show/119220544,10:00,14:29,310,"$273,360.00","$250,152.00",$806.94,"$55,795.99"
EWR - LEX,57655460207,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/57655460207,https://www.airlines-manager.com/aircraft/show/119220543,13:45,18:14,310,"$273,360.00","$250,152.00",$806.94,"$55,795.99"
EWR - LEX,57665599650,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/57665599650,https://www.airlines-manager.com/aircraft/show/119220542,18:15,22:44,284,"$260,031.00","$237,241.00",$835.36,"$52,916.21"
EWR - LHR,57632964569,E-56A-1 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/57632964569,https://www.airlines-manager.com/aircraft/show/106813007,2:15,16:44,748,"$2,231,685.00","$1,980,082.00","$2,647.17","$136,714.52"
EWR - LHR,57655460020,E-56A-4 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/57655460020,https://www.airlines-manager.com/aircraft/show/106813010,12:30,2:59,748,"$2,231,685.00","$1,980,082.00","$2,647.17","$136,714.52"
EWR - LHR,57665599654,E-56A-5 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/57665599654,https://www.airlines-manager.com/aircraft/show/106813011,18:15,8:44,748,"$2,015,569.00","$1,821,209.00","$2,434.77","$125,745.16"
EWR - LIS,57637373199,E-84A-4 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/57637373199,https://www.airlines-manager.com/aircraft/show/90656551,5:30,19:44,852,"$2,340,226.00","$2,131,891.00","$2,502.22","$149,781.57"
EWR - LIS,57655460011,E-84A-1 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/57655460011,https://www.airlines-manager.com/aircraft/show/90656554,12:15,2:29,852,"$2,340,226.00","$2,131,891.00","$2,502.22","$149,781.57"
EWR - LIT,57644525245,E-LIT-FAR-2,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/57644525245,https://www.airlines-manager.com/aircraft/show/86270787,8:30,14:44,310,"$395,001.00","$364,044.00","$1,174.34","$58,402.78"
EWR - LIT,57655460129,E-LIT-FAR-1,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/57655460129,https://www.airlines-manager.com/aircraft/show/90452834,13:00,19:14,310,"$395,001.00","$364,044.00","$1,174.34","$58,402.78"
EWR - LIT,57668758330,E-LIT-FAR-4,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/57668758330,https://www.airlines-manager.com/aircraft/show/86270784,19:30,1:44,310,"$395,001.00","$364,044.00","$1,174.34","$58,402.78"
EWR - LIT,57674153267,E-LIT-FAR-3,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/57674153267,https://www.airlines-manager.com/aircraft/show/86270786,22:45,4:59,310,"$395,001.00","$364,044.00","$1,174.34","$58,402.78"
EWR - MAD,57632963884,E-56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/57632963884,https://www.airlines-manager.com/aircraft/show/89124072,0:00,14:59,748,"$2,301,537.00","$2,048,578.00","$2,738.74","$136,723.78"
EWR - MAD,57671659198,E-56B-3 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/57671659198,https://www.airlines-manager.com/aircraft/show/90656555,20:30,11:29,748,"$2,301,537.00","$2,048,578.00","$2,738.74","$136,723.78"
EWR - MAD,57674153214,E-56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/57674153214,https://www.airlines-manager.com/aircraft/show/94521251,22:15,13:14,748,"$2,077,752.00","$1,884,361.00","$2,519.20","$125,763.80"
EWR - MAF,57632964350,E-RDM-MAF-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761173,https://www.airlines-manager.com/network/showflight/57632964350,https://www.airlines-manager.com/aircraft/show/120706940,1:30,9:59,272,"$490,066.00","$459,903.00","$1,690.82","$54,212.53"
EWR - MAF,57640828172,E-RDM-MAF-5 B,A319-100,https://www.airlines-manager.com/network/showline/50761173,https://www.airlines-manager.com/network/showflight/57640828172,https://www.airlines-manager.com/aircraft/show/120707022,7:00,15:29,198,"$407,839.00","$375,811.00","$1,898.04","$44,299.92"
EWR - MAF,57648263035,E-RDM-MAF-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761173,https://www.airlines-manager.com/network/showflight/57648263035,https://www.airlines-manager.com/aircraft/show/120706941,10:00,18:29,272,"$490,066.00","$459,903.00","$1,690.82","$54,212.53"
EWR - MAF,57665599589,E-RDM-MAF-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761173,https://www.airlines-manager.com/network/showflight/57665599589,https://www.airlines-manager.com/aircraft/show/120706939,18:00,2:29,272,"$490,066.00","$459,903.00","$1,690.82","$54,212.53"
EWR - MAF,57675937086,E-RDM-MAF-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761173,https://www.airlines-manager.com/network/showflight/57675937086,https://www.airlines-manager.com/aircraft/show/120706942,23:45,8:14,272,"490,066$","459,903$","$1,690.82","$54,212.53"
EWR - MBJ,57632964672,E-56D-7 E,787-10,https://www.airlines-manager.com/network/showline/50072192,https://www.airlines-manager.com/network/showflight/57632964672,https://www.airlines-manager.com/aircraft/show/118644442,3:30,10:59,648,"945,645$","883,866$","$1,363.99","$118,111.27"
EWR - MBJ,57651685704,E-56D-5 E,787-10,https://www.airlines-manager.com/network/showline/50072192,https://www.airlines-manager.com/network/showflight/57651685704,https://www.airlines-manager.com/aircraft/show/118644440,11:15,18:44,648,"945,645$","883,866$","$1,363.99","$118,111.27"
EWR - MBJ,57668758348,E-56D-1 E,787-10,https://www.airlines-manager.com/network/showline/50072192,https://www.airlines-manager.com/network/showflight/57668758348,https://www.airlines-manager.com/aircraft/show/118644436,19:45,3:14,637,"924,623$","863,424$","$1,355.45","$115,379.60"
EWR - MCI,57632964690,E-ELP-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/57632964690,https://www.airlines-manager.com/aircraft/show/103365578,3:45,9:59,320,"396,816$","357,840$","$1,118.25","$57,407.49"
EWR - MCI,57637373205,E-ELP-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/57637373205,https://www.airlines-manager.com/aircraft/show/103365575,5:45,11:59,320,"$396,816.00","$357,840.00","$1,118.25","$57,407.49"
EWR - MCI,57648263063,E-ELP-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/57648263063,https://www.airlines-manager.com/aircraft/show/103365576,10:00,16:14,320,"$396,816.00","$357,840.00","$1,118.25","$57,407.49"
EWR - MCI,57665599641,E-ELP-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/57665599641,https://www.airlines-manager.com/aircraft/show/103365577,18:15,0:29,320,"$396,816.00","$357,840.00","$1,118.25","$57,407.49"
EWR - MCI,57668758439,E-ELP-SAT-5 B,A319-100,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/57668758439,https://www.airlines-manager.com/aircraft/show/110582847,20:15,2:29,198,"$300,349.00","$272,622.00","$1,376.88","$43,736.15"
EWR - MCO,57632964473,E-IAH-LAS-1,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/57632964473,https://www.airlines-manager.com/aircraft/show/105859510,1:45,7:29,338,"$391,232.00","$351,937.00","$1,041.23","$61,384.36"
EWR - MCO,57651685564,E-IAH-LAS-3,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/57651685564,https://www.airlines-manager.com/aircraft/show/105859512,11:00,16:44,338,"391,232$","351,937$","$1,041.23","$61,384.36"
EWR - MCO,57655460179,E-IAH-LAS-6,ERJ-175,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/57655460179,https://www.airlines-manager.com/aircraft/show/105864236,13:00,18:44,112,"171,315$","145,397$","$1,298.19","$25,359.94"
EWR - MCO,57665599659,E-IAH-LAS-2,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/57665599659,https://www.airlines-manager.com/aircraft/show/105859511,18:30,0:14,338,"391,232$","351,937$","$1,041.23","$61,384.36"
EWR - MCO,57668758314,E-IAH-LAS-4,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/57668758314,https://www.airlines-manager.com/aircraft/show/105859513,19:30,1:14,338,"391,232$","351,937$","$1,041.23","$61,384.36"
EWR - MCO,57674153248,E-IAH-LAS-5,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/57674153248,https://www.airlines-manager.com/aircraft/show/105859514,22:45,4:29,338,"391,232$","351,937$","$1,041.23","$61,384.36"
EWR - MEM,57632964318,E-RNO-MEM-4,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/57632964318,https://www.airlines-manager.com/aircraft/show/99920619,1:15,6:59,320,"365,097$","328,039$","$1,025.12","$57,216.10"
EWR - MEM,57632964319,E-RNO-MEM-3,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/57632964319,https://www.airlines-manager.com/aircraft/show/99920620,3:45,9:29,320,"365,097$","328,039$","$1,025.12","$57,216.10"
EWR - MEM,57648263138,E-RNO-MEM-2,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/57648263138,https://www.airlines-manager.com/aircraft/show/99920621,10:15,15:59,320,"365,097$","328,039$","$1,025.12","$57,216.10"
EWR - MEM,57668758437,E-RNO-MEM-5 B,A319-100,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/57668758437,https://www.airlines-manager.com/aircraft/show/100096560,20:15,1:59,198,"$276,827.00","$250,611.00","$1,265.71","$43,711.22"
EWR - MEM,57671659295,E-RNO-MEM-1,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/57671659295,https://www.airlines-manager.com/aircraft/show/99920622,21:30,3:14,320,"$365,097.00","$328,039.00","$1,025.12","$57,216.10"
EWR - MEX,57632964481,E-DTW-YYZ-3,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/57632964481,https://www.airlines-manager.com/aircraft/show/92003923,1:45,11:59,320,"$641,733.00","$578,133.00","$1,806.67","$56,495.08"
EWR - MEX,57648263126,E-DTW-YYZ-6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/57648263126,https://www.airlines-manager.com/aircraft/show/104258433,10:00,20:14,216,"$488,482.00","$441,977.00","$2,046.19","$43,189.93"
EWR - MEX,57651685742,E-DTW-YYZ-4,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/57651685742,https://www.airlines-manager.com/aircraft/show/92003922,12:00,22:14,320,"$641,733.00","$578,133.00","$1,806.67","$56,495.08"
EWR - MEX,57665599512,E-DTW-YYZ-5,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/57665599512,https://www.airlines-manager.com/aircraft/show/92003921,17:15,3:29,320,"$641,733.00","$578,133.00","$1,806.67","$56,495.08"
EWR - MEX,57665599513,E-DTW-YYZ-2,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/57665599513,https://www.airlines-manager.com/aircraft/show/92003924,17:30,3:44,320,"$641,733.00","$578,133.00","$1,806.67","$56,495.08"
EWR - MEX,57668758438,E-DTW-YYZ-6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/57668758438,https://www.airlines-manager.com/aircraft/show/104258433,20:15,6:29,216,"$488,482.00","$441,977.00","$2,046.19","$43,189.93"
EWR - MEX,57675937092,E-DTW-YYZ-1,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/57675937092,https://www.airlines-manager.com/aircraft/show/92003925,23:45,9:59,302,"$610,362.00","$548,020.00","$1,814.64","$53,552.44"
EWR - MFR,57632964489,E-EUG-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/57632964489,https://www.airlines-manager.com/aircraft/show/119220436,1:45,13:29,320,"$717,698.00","$661,635.00","$2,067.61","$56,389.35"
EWR - MFR,57651685760,E-EUG-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/57651685760,https://www.airlines-manager.com/aircraft/show/119220437,12:00,23:44,320,"$717,698.00","$661,635.00","$2,067.61","$56,389.35"
EWR - MFR,57658665067,E-EUG-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/57658665067,https://www.airlines-manager.com/aircraft/show/119220438,14:00,1:44,320,"$717,698.00","$661,635.00","$2,067.61","$56,389.35"
EWR - MFR,57675937097,E-EUG-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/57675937097,https://www.airlines-manager.com/aircraft/show/119220435,23:45,11:29,320,"$717,698.00","$661,635.00","$2,067.61","$56,389.35"
EWR - MHT,57632964695,E-FCA-CID-1,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/57632964695,https://www.airlines-manager.com/aircraft/show/116042866,3:45,6:44,310,"$126,850.00","$107,713.00",$347.46,"$36,104.92"
EWR - MHT,57648262987,E-FCA-CID-4,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/57648262987,https://www.airlines-manager.com/aircraft/show/116042863,9:00,11:59,310,"$126,850.00","$107,713.00",$347.46,"$36,104.92"
EWR - MHT,57648262988,E-FCA-CID-3,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/57648262988,https://www.airlines-manager.com/aircraft/show/116042864,10:00,12:59,310,"$126,850.00","$107,713.00",$347.46,"$36,104.92"
EWR - MHT,57651685697,E-STL-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/57651685697,https://www.airlines-manager.com/aircraft/show/98887257,11:00,13:59,112,"$56,500.00","$44,653.00",$398.69,"$14,967.49"
EWR - MHT,57662009257,E-FCA-CID-2,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/57662009257,https://www.airlines-manager.com/aircraft/show/116042865,15:45,18:44,310,"$126,850.00","$107,713.00",$347.46,"$36,104.92"
EWR - MIA,57632964574,E-MIA-ORD-5,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/57632964574,https://www.airlines-manager.com/aircraft/show/113251309,2:30,8:44,338,"$426,856.00","$383,770.00","$1,135.41","$61,567.38"
EWR - MIA,57632964575,E-MIA-ORD-1,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/57632964575,https://www.airlines-manager.com/aircraft/show/113251305,4:00,10:14,338,"$426,856.00","$383,770.00","$1,135.41","$61,567.38"
EWR - MIA,57648263040,E-MIA-ORD-2,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/57648263040,https://www.airlines-manager.com/aircraft/show/113251306,10:00,16:14,338,"$426,856.00","$383,770.00","$1,135.41","$61,567.38"
EWR - MIA,57651685570,E-MIA-ORD-4,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/57651685570,https://www.airlines-manager.com/aircraft/show/113251308,11:00,17:14,338,"$426,856.00","$383,770.00","$1,135.41","$61,567.38"
EWR - MIA,57662009364,E-MIA-ORD-3,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/57662009364,https://www.airlines-manager.com/aircraft/show/113251307,16:30,22:44,338,"$426,856.00","$383,770.00","$1,135.41","$61,567.38"
EWR - MIA,57675937079,Corporate Jet,A320-200,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/57675937079,https://www.airlines-manager.com/aircraft/show/101412921,23:30,5:44,84,"300,798$","257,952$","$3,070.86","$41,382.67"
EWR - MKE,57632964665,E-BNA-JAX-5,ERJ-175,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/57632964665,https://www.airlines-manager.com/aircraft/show/96421247,3:15,8:14,112,"150,329$","132,337$","$1,181.58","$26,555.92"
EWR - MKE,57644525160,E-BNA-JAX-4,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/57644525160,https://www.airlines-manager.com/aircraft/show/104610407,7:30,12:29,310,"316,661$","288,776$",$931.54,"$57,948.36"
EWR - MKE,57658665091,E-BNA-JAX-3,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/57658665091,https://www.airlines-manager.com/aircraft/show/104610408,14:00,18:59,310,"316,661$","288,776$",$931.54,"$57,948.36"
EWR - MKE,57668758306,E-BNA-JAX-2,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/57668758306,https://www.airlines-manager.com/aircraft/show/104610409,19:15,0:14,310,"316,661$","288,776$",$931.54,"$57,948.36"
EWR - MKE,57674153326,E-BNA-JAX-1,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/57674153326,https://www.airlines-manager.com/aircraft/show/104610410,23:15,4:14,310,"$316,661.00","$288,776.00",$931.54,"$57,948.36"
EWR - MSN,57632964588,E-RAP-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/57632964588,https://www.airlines-manager.com/aircraft/show/116042859,2:30,7:44,310,"$331,635.00","$304,391.00",$981.91,"$58,163.89"
EWR - MSN,57644525275,E-RAP-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/57644525275,https://www.airlines-manager.com/aircraft/show/116042860,8:45,13:59,310,"$331,635.00","$304,391.00",$981.91,"$58,163.89"
EWR - MSN,57648263105,E-RAP-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/57648263105,https://www.airlines-manager.com/aircraft/show/116042861,10:00,15:14,310,"$331,635.00","$304,391.00",$981.91,"$58,163.89"
EWR - MSN,57671659258,E-RAP-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/57671659258,https://www.airlines-manager.com/aircraft/show/116042862,21:00,2:14,310,"331,635$","304,391$",$981.91,"$58,163.89"
EWR - MSO,57632964285,E-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/57632964285,https://www.airlines-manager.com/aircraft/show/107161238,1:00,10:59,310,"618,420$","573,473$","$1,849.91","$57,443.04"
EWR - MSO,57651685669,E-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/57651685669,https://www.airlines-manager.com/aircraft/show/107161240,11:00,20:59,310,"618,420$","573,473$","$1,849.91","$57,443.04"
EWR - MSO,57662009265,E-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/57662009265,https://www.airlines-manager.com/aircraft/show/86782214,15:45,1:44,112,"290,250$","259,767$","$2,319.35","$26,020.07"
EWR - MSO,57665599580,E-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/57665599580,https://www.airlines-manager.com/aircraft/show/107161239,17:45,3:44,310,"618,420$","573,473$","$1,849.91","$57,443.04"
EWR - MSO,57674153167,E-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/57674153167,https://www.airlines-manager.com/aircraft/show/107161241,22:00,7:59,310,"$618,420.00","$573,473.00","$1,849.91","$57,443.04"
EWR - MSP,57637373153,E-DEN-SLC-3,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/57637373153,https://www.airlines-manager.com/aircraft/show/86270783,5:00,10:59,310,"$376,088.00","$336,853.00","$1,086.62","$56,298.55"
EWR - MSP,57648263084,E-DEN-SLC-5,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/57648263084,https://www.airlines-manager.com/aircraft/show/90452833,10:00,15:59,310,"$376,088.00","$336,853.00","$1,086.62","$56,298.55"
EWR - MSP,57651685693,E-DEN-SLC-6 B,A319-100,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/57651685693,https://www.airlines-manager.com/aircraft/show/105223076,11:00,16:59,198,"$284,972.00","$253,541.00","$1,280.51","$42,374.54"
EWR - MSP,57665599647,E-DEN-SLC-2,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/57665599647,https://www.airlines-manager.com/aircraft/show/87153196,18:15,0:14,310,"$376,088.00","$336,853.00","$1,086.62","$56,298.55"
EWR - MSP,57668758360,E-DEN-SLC-1,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/57668758360,https://www.airlines-manager.com/aircraft/show/86270785,19:45,1:44,310,"$376,088.00","$336,853.00","$1,086.62","$56,298.55"
EWR - MSP,57671659222,E-DEN-SLC-4,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/57671659222,https://www.airlines-manager.com/aircraft/show/90452835,20:45,2:44,310,"$376,088.00","$336,853.00","$1,086.62","$56,298.55"
EWR - MSY,57632964658,E-ABQ-AUS-1,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/57632964658,https://www.airlines-manager.com/aircraft/show/90717079,3:15,9:59,310,"$416,273.00","$381,522.00","$1,230.72","$56,661.68"
EWR - MSY,57648263085,E-ABQ-AUS-3,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/57648263085,https://www.airlines-manager.com/aircraft/show/90717077,10:00,16:44,310,"$416,273.00","$381,522.00","$1,230.72","$56,661.68"
EWR - MSY,57651685654,E-ABQ-AUS-4,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/57651685654,https://www.airlines-manager.com/aircraft/show/90717076,11:00,17:44,310,"$416,273.00","$381,522.00","$1,230.72","$56,661.68"
EWR - MSY,57665599609,E-ABQ-AUS-2,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/57665599609,https://www.airlines-manager.com/aircraft/show/90717078,18:00,0:44,310,"$416,273.00","$381,522.00","$1,230.72","$56,661.68"
EWR - MSY,57668758391,E-ABQ-AUS-5,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/57668758391,https://www.airlines-manager.com/aircraft/show/95950199,20:00,2:44,310,"$416,273.00","$381,522.00","$1,230.72","$56,661.68"
EWR - MTJ,57640828094,E-MTJ-ECP-4,737-900ER,https://www.airlines-manager.com/network/showline/50761177,https://www.airlines-manager.com/network/showflight/57640828094,https://www.airlines-manager.com/aircraft/show/120706943,6:00,14:59,320,"$565,136.00","$519,101.00","$1,622.19","$57,784.90"
EWR - MTJ,57648263079,E-MTJ-ECP-1,737-900ER,https://www.airlines-manager.com/network/showline/50761177,https://www.airlines-manager.com/network/showflight/57648263079,https://www.airlines-manager.com/aircraft/show/120706946,10:00,18:59,320,"$565,136.00","$519,101.00","$1,622.19","$57,784.90"
EWR - MTJ,57662009305,E-MTJ-ECP-3,737-900ER,https://www.airlines-manager.com/network/showline/50761177,https://www.airlines-manager.com/network/showflight/57662009305,https://www.airlines-manager.com/aircraft/show/120706944,16:00,0:59,320,"$565,136.00","$519,101.00","$1,622.19","$57,784.90"
EWR - MTJ,57671659331,E-MTJ-ECP-2,737-900ER,https://www.airlines-manager.com/network/showline/50761177,https://www.airlines-manager.com/network/showflight/57671659331,https://www.airlines-manager.com/aircraft/show/120706945,21:45,6:44,320,"$565,136.00","$519,101.00","$1,622.19","$57,784.90"
EWR - MUC,57632963825,E-56C-7 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/57632963825,https://www.airlines-manager.com/aircraft/show/106721562,0:00,16:29,598,"$2,049,665.00","$1,899,594.00","$3,176.58","$115,243.32"
EWR - MUC,57651685586,E-56C-1 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/57651685586,https://www.airlines-manager.com/aircraft/show/106721556,11:00,3:29,598,"$2,049,665.00","$1,899,594.00","$3,176.58","$115,243.32"
EWR - MUC,57665599662,E-56C-7 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/57665599662,https://www.airlines-manager.com/aircraft/show/106721562,18:30,10:59,598,"$2,049,665.00","$1,899,594.00","$3,176.58","$115,243.32"
EWR - MXP,57648263129,E-84B-7 B2,777-300,https://www.airlines-manager.com/network/showline/49921908,https://www.airlines-manager.com/network/showflight/57648263129,https://www.airlines-manager.com/aircraft/show/117958701,10:00,2:29,852,"$2,696,638.00","$2,451,348.00","$2,877.17","$148,716.76"
EWR - MXP,57674153180,E-84B-3  B2,777-300,https://www.airlines-manager.com/network/showline/49921908,https://www.airlines-manager.com/network/showflight/57674153180,https://www.airlines-manager.com/aircraft/show/117958697,22:00,14:29,852,"$2,696,638.00","$2,451,348.00","$2,877.17","$148,716.76"
EWR - MYR,57632964570,E-RDM-MAF-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761175,https://www.airlines-manager.com/network/showflight/57632964570,https://www.airlines-manager.com/aircraft/show/120706939,2:30,6:44,272,"$226,045.00","$207,541.00",$763.02,"$49,025.43"
EWR - MYR,57644525211,E-RDM-MAF-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761175,https://www.airlines-manager.com/network/showflight/57644525211,https://www.airlines-manager.com/aircraft/show/120706942,8:15,12:29,272,"$226,045.00","$207,541.00",$763.02,"$49,025.43"
EWR - MYR,57648263034,E-RDM-MAF-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761175,https://www.airlines-manager.com/network/showflight/57648263034,https://www.airlines-manager.com/aircraft/show/120706940,10:00,14:14,272,"$226,045.00","$207,541.00",$763.02,"$49,025.43"
EWR - MYR,57662009242,E-RDM-MAF-5 B,A319-100,https://www.airlines-manager.com/network/showline/50761175,https://www.airlines-manager.com/network/showflight/57662009242,https://www.airlines-manager.com/aircraft/show/120707022,15:30,19:44,198,"$189,562.00","$170,441.00",$860.81,"$40,261.65"
EWR - MYR,57665599657,E-RDM-MAF-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761175,https://www.airlines-manager.com/network/showflight/57665599657,https://www.airlines-manager.com/aircraft/show/120706941,18:30,22:44,272,"$226,045.00","$207,541.00",$763.02,"$49,025.43"
EWR - NAS,57637373171,E-TUS-TPA-1,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/57637373171,https://www.airlines-manager.com/aircraft/show/98379319,5:15,11:44,310,"$397,029.00","$364,028.00","$1,174.28","$56,148.28"
EWR - NAS,57655460134,E-TUS-TPA-3,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/57655460134,https://www.airlines-manager.com/aircraft/show/98379317,13:00,19:29,310,"$397,029.00","$364,028.00","$1,174.28","$56,148.28"
EWR - NAS,57665599611,E-TUS-TPA-4,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/57665599611,https://www.airlines-manager.com/aircraft/show/98379316,18:00,0:29,310,"$397,029.00","$364,028.00","$1,174.28","$56,148.28"
EWR - NAS,57668758271,E-TUS-TPA-2,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/57668758271,https://www.airlines-manager.com/aircraft/show/98379318,19:00,1:29,310,"$397,029.00","$364,028.00","$1,174.28","$56,148.28"
EWR - NAS,57671659253,E-TUS-TPA-5,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/57671659253,https://www.airlines-manager.com/aircraft/show/98379315,21:00,3:29,292,"$376,773.00","$344,449.00","$1,179.62","$53,128.38"
EWR - NRT,57632963887,E-56A-7 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/57632963887,https://www.airlines-manager.com/aircraft/show/106813013,0:00,2:14,748,"$4,002,745.00","$3,604,043.00","$4,818.24","$1,613,750.60"
EWR - NRT,57648263143,E-56A-3 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/57648263143,https://www.airlines-manager.com/aircraft/show/106813009,10:15,12:29,748,"3,976,929$","3,587,310$","$4,795.87","$1,606,258.21"
EWR - NRT,57662009399,E-56A-1 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/57662009399,https://www.airlines-manager.com/aircraft/show/106813007,16:45,18:59,748,"3,579,904$","3,294,738$","$4,404.73","$1,475,255.82"
EWR - OAK,57632964283,E-OAK-SJC-5,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/57632964283,https://www.airlines-manager.com/aircraft/show/104717239,1:00,12:59,310,"739,348$","683,774$","$2,205.72","$57,060.42"
EWR - OAK,57648263103,E-OAK-SJC-1,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/57648263103,https://www.airlines-manager.com/aircraft/show/104717243,10:00,21:59,310,"739,348$","683,774$","$2,205.72","$57,060.42"
EWR - OAK,57651685771,E-OAK-SJC-2,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/57651685771,https://www.airlines-manager.com/aircraft/show/104717242,12:00,23:59,310,"739,348$","683,774$","$2,205.72","$57,060.42"
EWR - OAK,57658665093,E-OAK-SJC-3,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/57658665093,https://www.airlines-manager.com/aircraft/show/104717241,14:00,1:59,310,"739,348$","683,774$","$2,205.72","$57,060.42"
EWR - OAK,57674153239,E-OAK-SJC-4,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/57674153239,https://www.airlines-manager.com/aircraft/show/104717240,22:30,10:29,310,"739,348$","683,774$","$2,205.72","$57,060.42"
EWR - OKC,57632964518,E-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/57632964518,https://www.airlines-manager.com/aircraft/show/86782214,1:45,8:59,112,"218,318$","194,572$","$1,737.25","$26,899.35"
EWR - OKC,57632964519,E-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/57632964519,https://www.airlines-manager.com/aircraft/show/107161239,3:45,10:59,310,"462,867$","427,138$","$1,377.86","$59,051.34"
EWR - OKC,57644525200,E-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/57644525200,https://www.airlines-manager.com/aircraft/show/107161241,8:00,15:14,310,"$462,867.00","$427,138.00","$1,377.86","$59,051.34"
EWR - OKC,57651685667,E-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/57651685667,https://www.airlines-manager.com/aircraft/show/107161238,11:00,18:14,310,"$462,867.00","$427,138.00","$1,377.86","$59,051.34"
EWR - OKC,57671659255,E-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/57671659255,https://www.airlines-manager.com/aircraft/show/107161240,21:00,4:14,310,"$462,867.00","$427,138.00","$1,377.86","$59,051.34"
EWR - OMA,57632964586,E-BOI-PBI-1,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/57632964586,https://www.airlines-manager.com/aircraft/show/104418460,2:30,8:59,310,"$403,514.00","$370,539.00","$1,195.29","$57,152.54"
EWR - OMA,57644525159,E-BOI-PBI-4,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/57644525159,https://www.airlines-manager.com/aircraft/show/104418463,7:30,13:59,310,"$403,514.00","$370,539.00","$1,195.29","$57,152.54"
EWR - OMA,57648263102,E-BOI-PBI-3,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/57648263102,https://www.airlines-manager.com/aircraft/show/104418462,10:00,16:29,310,"$403,514.00","$370,539.00","$1,195.29","$57,152.54"
EWR - OMA,57662009433,E-BOI-PBI-2,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/57662009433,https://www.airlines-manager.com/aircraft/show/104418461,17:00,23:29,310,"$403,514.00","$370,539.00","$1,195.29","$57,152.54"
EWR - OMA,57668758280,E-BOI-PBI-5 B,A319-100,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/57668758280,https://www.airlines-manager.com/aircraft/show/110582846,19:00,1:29,198,"$305,209.00","$278,781.00","$1,407.98","$42,999.64"
EWR - ONT,57632963847,E-SMF-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/57632963847,https://www.airlines-manager.com/aircraft/show/94889153,0:00,11:29,320,"$706,325.00","$647,621.00","$2,023.82","$56,396.60"
EWR - ONT,57632963848,E-SMF-ONT-5,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/57632963848,https://www.airlines-manager.com/aircraft/show/94889154,2:00,13:29,320,"$706,325.00","$647,621.00","$2,023.82","$56,396.60"
EWR - ONT,57651685731,E-SMF-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/57651685731,https://www.airlines-manager.com/aircraft/show/94889150,11:45,23:14,320,"$706,325.00","$647,621.00","$2,023.82","$56,396.60"
EWR - ONT,57655460185,E-SMF-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/57655460185,https://www.airlines-manager.com/aircraft/show/94889151,13:15,0:44,320,"$706,325.00","$647,621.00","$2,023.82","$56,396.60"
EWR - ONT,57658665167,E-SMF-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/57658665167,https://www.airlines-manager.com/aircraft/show/94889152,14:45,2:14,305,"$685,811.00","$628,077.00","$2,059.27","$54,694.66"
EWR - ORD,57637373140,E-MIA-ORD-2,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/57637373140,https://www.airlines-manager.com/aircraft/show/113251306,5:00,9:59,338,"$338,489.00","$291,454.00",$862.29,"$58,485.75"
EWR - ORD,57648263135,E-MIA-ORD-1,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/57648263135,https://www.airlines-manager.com/aircraft/show/113251305,10:15,15:14,338,"$338,489.00","$291,454.00",$862.29,"$58,485.75"
EWR - ORD,57651685688,Corporate Jet,A320-200,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/57651685688,https://www.airlines-manager.com/aircraft/show/101412921,11:00,15:59,84,"$242,231.00","$195,355.00","$2,325.65","$39,201.67"
EWR - ORD,57651685689,E-MIA-ORD-3,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/57651685689,https://www.airlines-manager.com/aircraft/show/113251307,11:30,16:29,338,"$338,489.00","$291,454.00",$862.29,"$58,485.75"
EWR - ORD,57665599508,E-MIA-ORD-4,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/57665599508,https://www.airlines-manager.com/aircraft/show/113251308,17:15,22:14,338,"$338,489.00","$291,454.00",$862.29,"$58,485.75"
EWR - ORD,57671659290,E-MIA-ORD-5,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/57671659290,https://www.airlines-manager.com/aircraft/show/113251309,21:30,2:29,338,"$338,489.00","$291,454.00",$862.29,"$58,485.75"
EWR - ORF,57632964548,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/57632964548,https://www.airlines-manager.com/aircraft/show/88494375,2:15,5:29,320,"$153,803.00","$130,253.00",$407.04,"$40,284.43"
EWR - ORF,57651685699,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/57651685699,https://www.airlines-manager.com/aircraft/show/106104450,11:00,14:14,112,"$70,512.00","$57,910.00",$517.05,"$17,910.31"
EWR - ORF,57658665138,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/57658665138,https://www.airlines-manager.com/aircraft/show/105731236,14:15,17:29,320,"$153,803.00","$130,253.00",$407.04,"$40,284.43"
EWR - ORF,57665599598,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/57665599598,https://www.airlines-manager.com/aircraft/show/88494376,18:00,21:14,320,"$153,803.00","$130,253.00",$407.04,"$40,284.43"
EWR - ORF,57671659324,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/57671659324,https://www.airlines-manager.com/aircraft/show/88494377,21:45,0:59,320,"$153,803.00","$130,253.00",$407.04,"$40,284.43"
EWR - OSL,57632964650,E-56D-2 E,787-10,https://www.airlines-manager.com/network/showline/50072202,https://www.airlines-manager.com/network/showflight/57632964650,https://www.airlines-manager.com/aircraft/show/118644437,3:15,18:29,648,"$1,894,675.00","$1,766,526.00","$2,726.12","$115,964.51"
EWR - OSL,57637373118,E-56D-4 E,787-10,https://www.airlines-manager.com/network/showline/50072202,https://www.airlines-manager.com/network/showflight/57637373118,https://www.airlines-manager.com/aircraft/show/118644439,4:45,19:59,648,"$1,894,675.00","$1,766,526.00","$2,726.12","$115,964.51"
EWR - OSL,57668758381,E-56D-4 E,787-10,https://www.airlines-manager.com/network/showline/50072202,https://www.airlines-manager.com/network/showflight/57668758381,https://www.airlines-manager.com/aircraft/show/118644439,20:00,11:14,648,"$1,894,675.00","$1,766,526.00","$2,726.12","$115,964.51"
EWR - PBI,57632964453,E-BOI-PBI-4,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/57632964453,https://www.airlines-manager.com/aircraft/show/104418463,1:30,7:29,310,"$380,892.00","$348,451.00","$1,124.04","$58,236.94"
EWR - PBI,57632964454,E-BOI-PBI-3,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/57632964454,https://www.airlines-manager.com/aircraft/show/104418462,3:00,8:59,310,"$380,892.00","$348,451.00","$1,124.04","$58,236.94"
EWR - PBI,57651685662,E-BOI-PBI-2,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/57651685662,https://www.airlines-manager.com/aircraft/show/104418461,11:00,16:59,310,"$380,892.00","$348,451.00","$1,124.04","$58,236.94"
EWR - PBI,57655460172,E-BOI-PBI-5 B,A319-100,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/57655460172,https://www.airlines-manager.com/aircraft/show/110582846,13:00,18:59,198,"$288,248.00","$262,252.00","$1,324.51","$43,830.42"
EWR - PBI,57671659193,E-BOI-PBI-1,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/57671659193,https://www.airlines-manager.com/aircraft/show/104418460,20:30,2:29,310,"$380,892.00","$348,451.00","$1,124.04","$58,236.94"
EWR - PDX,57632963819,E-PHX-PDX-3,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/57632963819,https://www.airlines-manager.com/aircraft/show/113595213,0:00,11:29,338,"$761,524.00","$708,817.00","$2,097.09","$61,725.72"
EWR - PDX,57632963820,E-PHX-PDX-4,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/57632963820,https://www.airlines-manager.com/aircraft/show/113595214,2:00,13:29,338,"$761,524.00","$708,817.00","$2,097.09","$61,725.72"
EWR - PDX,57637373141,E-PHX-PDX-5,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/57637373141,https://www.airlines-manager.com/aircraft/show/113595215,5:00,16:29,338,"$761,524.00","$708,817.00","$2,097.09","$61,725.72"
EWR - PDX,57640828129,E-PHX-PDX-6 B,A319-100,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/57640828129,https://www.airlines-manager.com/aircraft/show/99219630,6:30,17:59,198,"$528,797.00","$484,100.00","$2,444.95","$42,156.75"
EWR - PDX,57648263136,E-PHX-PDX-1,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/57648263136,https://www.airlines-manager.com/aircraft/show/113595211,10:15,21:44,338,"$761,524.00","$708,817.00","$2,097.09","$61,725.72"
EWR - PDX,57655460006,E-PHX-PDX-2,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/57655460006,https://www.airlines-manager.com/aircraft/show/113595212,12:15,23:44,313,"$727,060.00","$675,737.00","$2,158.90","$58,845.02"
EWR - PHX,57632963817,E-PHX-PDX-1,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/57632963817,https://www.airlines-manager.com/aircraft/show/113595211,0:00,10:14,338,"$707,316.00","$649,946.00","$1,922.92","$63,512.64"
EWR - PHX,57632963818,E-PHX-PDX-2,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/57632963818,https://www.airlines-manager.com/aircraft/show/113595212,2:00,12:14,338,"707,316$","649,946$","$1,922.92","$63,512.64"
EWR - PHX,57651685711,E-PHX-PDX-3,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/57651685711,https://www.airlines-manager.com/aircraft/show/113595213,11:30,21:44,338,"707,316$","649,946$","$1,922.92","$63,512.64"
EWR - PHX,57655460192,E-PHX-PDX-4,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/57655460192,https://www.airlines-manager.com/aircraft/show/113595214,13:30,23:44,338,"707,316$","649,946$","$1,922.92","$63,512.64"
EWR - PHX,57662009365,E-PHX-PDX-5,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/57662009365,https://www.airlines-manager.com/aircraft/show/113595215,16:30,2:44,338,"707,316$","649,946$","$1,922.92","$63,512.64"
EWR - PHX,57665599623,E-PHX-PDX-6 B,A319-100,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/57665599623,https://www.airlines-manager.com/aircraft/show/99219630,18:00,4:29,198,"491,654$","443,539$","$2,240.10","$42,308.97"
EWR - PIT,57637373086,E-STL-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/57637373086,https://www.airlines-manager.com/aircraft/show/98887257,4:15,7:29,112,"77,629$","63,269$",$564.90,"$19,567.73"
EWR - PIT,57640828120,E-STL-PIT-3,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/57640828120,https://www.airlines-manager.com/aircraft/show/115400546,6:30,9:44,338,"182,899$","160,287$",$474.22,"$49,573.30"
EWR - PIT,57648263043,E-STL-PIT-2,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/57648263043,https://www.airlines-manager.com/aircraft/show/115400547,10:00,13:14,338,"182,899$","160,287$",$474.22,"$49,573.30"
EWR - PIT,57655460057,E-STL-PIT-4,A321neo-LR,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/57655460057,https://www.airlines-manager.com/aircraft/show/103406580,13:00,16:14,338,"$184,682.00","$161,906.00",$479.01,"$50,074.02"
EWR - PIT,57662009227,E-STL-PIT-1,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/57662009227,https://www.airlines-manager.com/aircraft/show/115400548,15:30,18:44,338,"$182,899.00","$160,287.00",$474.22,"$49,573.30"
EWR - PIT,57668758341,E-STL-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/57668758341,https://www.airlines-manager.com/aircraft/show/98887257,19:30,22:44,112,"$77,629.00","$63,269.00",$564.90,"$19,567.73"
EWR - PRG,57648263144,E-84B-2  B2,777-300,https://www.airlines-manager.com/network/showline/44327652,https://www.airlines-manager.com/network/showflight/57648263144,https://www.airlines-manager.com/aircraft/show/117958696,10:15,2:59,852,"$2,750,049.00","$2,506,567.00","$2,941.98","$149,794.84"
EWR - PRG,57674153215,E-84B-5  B2,777-300,https://www.airlines-manager.com/network/showline/44327652,https://www.airlines-manager.com/network/showflight/57674153215,https://www.airlines-manager.com/aircraft/show/117958699,22:15,14:59,852,"$2,750,049.00","$2,506,567.00","$2,941.98","$149,794.84"
EWR - PSP,57632964028,E-PSP-FAT-4,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/57632964028,https://www.airlines-manager.com/aircraft/show/116672810,0:30,11:44,338,"$760,434.00","$712,970.00","$2,109.38","$63,469.14"
EWR - PSP,57651685573,E-PSP-FAT-1,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/57651685573,https://www.airlines-manager.com/aircraft/show/119220450,11:00,22:14,338,"$760,434.00","$712,970.00","$2,109.38","$63,469.14"
EWR - PSP,57655460048,E-PSP-FAT-2,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/57655460048,https://www.airlines-manager.com/aircraft/show/119220451,13:00,0:14,338,"$760,434.00","$712,970.00","$2,109.38","$63,469.14"
EWR - PSP,57674153221,E-PSP-FAT-3,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/57674153221,https://www.airlines-manager.com/aircraft/show/119220452,22:30,9:44,338,"$760,434.00","$712,970.00","$2,109.38","$63,469.14"
EWR - PVD,57632964457,E-TUL-DSM-4,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/57632964457,https://www.airlines-manager.com/aircraft/show/110044466,1:30,4:14,310,"$99,383.00","$81,748.00",$263.70,"$29,907.80"
EWR - PVD,57648263003,E-TUL-DSM-3,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/57648263003,https://www.airlines-manager.com/aircraft/show/110044465,9:15,11:59,310,"$99,383.00","$81,748.00",$263.70,"$29,907.80"
EWR - PVD,57651685675,E-TUL-DSM-2,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/57651685675,https://www.airlines-manager.com/aircraft/show/110044464,11:00,13:44,310,"$99,383.00","$81,748.00",$263.70,"$29,907.80"
EWR - PVD,57668758363,E-TUL-DSM-1,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/57668758363,https://www.airlines-manager.com/aircraft/show/110044463,19:45,22:29,310,"$99,383.00","$81,748.00",$263.70,"$29,907.80"
EWR - PVD,57674153334,E-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/57674153334,https://www.airlines-manager.com/aircraft/show/110113039,23:15,1:59,112,"$42,644.00","$31,786.00",$283.80,"$11,629.02"
EWR - PWM,57637373107,E-TUL-DSM-1,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/57637373107,https://www.airlines-manager.com/aircraft/show/110044463,4:30,7:44,310,"$154,650.00","$135,600.00",$437.42,"$41,938.14"
EWR - PWM,57644525281,E-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/57644525281,https://www.airlines-manager.com/aircraft/show/110113039,8:45,11:59,112,"$70,248.00","$58,322.00",$520.73,"$18,037.73"
EWR - PWM,57651685676,E-TUL-DSM-4,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/57651685676,https://www.airlines-manager.com/aircraft/show/110044466,11:00,14:14,310,"$154,650.00","$135,600.00",$437.42,"$41,938.14"
EWR - PWM,57665599617,E-TUL-DSM-3,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/57665599617,https://www.airlines-manager.com/aircraft/show/110044465,18:00,21:14,310,"$154,650.00","$135,600.00",$437.42,"$41,938.14"
EWR - PWM,57668758364,E-TUL-DSM-2,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/57668758364,https://www.airlines-manager.com/aircraft/show/110044464,19:45,22:59,305,"$153,190.00","$134,179.00",$439.93,"$41,498.66"
EWR - RAP,57632963868,E-RAP-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/57632963868,https://www.airlines-manager.com/aircraft/show/116042860,0:00,7:59,310,"$497,396.00","$460,380.00","$1,485.10","$57,667.64"
EWR - RAP,57632963869,E-RAP-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/57632963869,https://www.airlines-manager.com/aircraft/show/116042861,1:15,9:14,310,"$497,396.00","$460,380.00","$1,485.10","$57,667.64"
EWR - RAP,57655460155,E-RAP-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/57655460155,https://www.airlines-manager.com/aircraft/show/116042862,13:00,20:59,310,"$497,396.00","$460,380.00","$1,485.10","$57,667.64"
EWR - RAP,57665599678,E-RAP-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/57665599678,https://www.airlines-manager.com/aircraft/show/116042859,18:30,2:29,310,"$497,396.00","$460,380.00","$1,485.10","$57,667.64"
EWR - RDM,57640828133,E-RDM-MAF-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761172,https://www.airlines-manager.com/network/showflight/57640828133,https://www.airlines-manager.com/aircraft/show/120706939,6:45,17:59,272,"$630,804.00","$594,301.00","$2,184.93","$52,905.13"
EWR - RDM,57655460012,E-RDM-MAF-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761172,https://www.airlines-manager.com/network/showflight/57655460012,https://www.airlines-manager.com/aircraft/show/120706942,12:30,23:44,272,"$630,804.00","$594,301.00","$2,184.93","$52,905.13"
EWR - RDM,57658665130,E-RDM-MAF-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761172,https://www.airlines-manager.com/network/showflight/57658665130,https://www.airlines-manager.com/aircraft/show/120706940,14:15,1:29,272,"$630,804.00","$594,301.00","$2,184.93","$52,905.13"
EWR - RDM,57668758370,E-RDM-MAF-5 B,A319-100,https://www.airlines-manager.com/network/showline/50761172,https://www.airlines-manager.com/network/showflight/57668758370,https://www.airlines-manager.com/aircraft/show/120707022,19:45,6:59,198,"$524,065.00","$484,903.00","$2,449.01","$43,166.44"
EWR - RDM,57674153247,E-RDM-MAF-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761172,https://www.airlines-manager.com/network/showflight/57674153247,https://www.airlines-manager.com/aircraft/show/120706941,22:45,9:59,272,"$630,804.00","$594,301.00","$2,184.93","$52,905.13"
EWR - RDU,57632964321,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/57632964321,https://www.airlines-manager.com/aircraft/show/105731236,1:15,4:59,320,"$201,380.00","$173,412.00",$541.91,"$46,449.64"
EWR - RDU,57637373143,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/57637373143,https://www.airlines-manager.com/aircraft/show/88494376,5:00,8:44,320,"201,380$","173,412$",$541.91,"$46,449.64"
EWR - RDU,57651685603,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/57651685603,https://www.airlines-manager.com/aircraft/show/88494377,11:00,14:44,320,"201,380$","173,412$",$541.91,"$46,449.64"
EWR - RDU,57662009231,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/57662009231,https://www.airlines-manager.com/aircraft/show/88494375,15:30,19:14,320,"201,380$","173,412$",$541.91,"$46,449.64"
EWR - RDU,57674153184,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/57674153184,https://www.airlines-manager.com/aircraft/show/106104450,22:00,1:44,112,"93,326$","78,129$",$697.58,"$20,927.41"
EWR - RIC,57632964245,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/57632964245,https://www.airlines-manager.com/aircraft/show/88494377,1:00,4:14,320,"139,657$","116,236$",$363.24,"$35,949.28"
EWR - RIC,57637373180,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/57637373180,https://www.airlines-manager.com/aircraft/show/88494375,5:30,8:44,320,"$139,657.00","$116,236.00",$363.24,"$35,949.28"
EWR - RIC,57658665149,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/57658665149,https://www.airlines-manager.com/aircraft/show/106104450,14:15,17:29,112,"$62,868.00","$50,351.00",$449.56,"$15,572.47"
EWR - RIC,57665599545,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/57665599545,https://www.airlines-manager.com/aircraft/show/105731236,17:30,20:44,320,"$139,657.00","$116,236.00",$363.24,"$35,949.28"
EWR - RIC,57671659271,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/57671659271,https://www.airlines-manager.com/aircraft/show/88494376,21:15,0:29,320,"$139,657.00","$116,236.00",$363.24,"$35,949.28"
EWR - RNO,57632964541,E-RNO-MEM-5 B,A319-100,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/57632964541,https://www.airlines-manager.com/aircraft/show/100096560,2:00,13:29,198,"$532,092.00","$490,305.00","$2,476.29","$42,697.10"
EWR - RNO,57648263139,E-RNO-MEM-1,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/57648263139,https://www.airlines-manager.com/aircraft/show/99920622,10:15,21:29,320,"$706,113.00","$649,153.00","$2,028.60","$57,788.10"
EWR - RNO,57658665050,E-RNO-MEM-4,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/57658665050,https://www.airlines-manager.com/aircraft/show/99920619,14:00,1:14,320,"$706,113.00","$649,153.00","$2,028.60","$57,788.10"
EWR - RNO,57662009370,E-RNO-MEM-3,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/57662009370,https://www.airlines-manager.com/aircraft/show/99920620,16:30,3:44,320,"$706,113.00","$649,153.00","$2,028.60","$57,788.10"
EWR - RNO,57674153196,E-RNO-MEM-2,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/57674153196,https://www.airlines-manager.com/aircraft/show/99920621,22:15,9:29,320,"$706,113.00","$649,153.00","$2,028.60","$57,788.10"
EWR - ROC,57648263114,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/57648263114,https://www.airlines-manager.com/aircraft/show/119220545,10:00,12:59,310,"$135,540.00","$116,530.00",$375.90,"$39,060.34"
EWR - ROC,57658665156,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/57658665156,https://www.airlines-manager.com/aircraft/show/119220544,14:30,17:29,310,"$135,540.00","$116,530.00",$375.90,"$39,060.34"
EWR - ROC,57665599651,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/57665599651,https://www.airlines-manager.com/aircraft/show/119220543,18:15,21:14,310,"$135,540.00","$116,530.00",$375.90,"$39,060.34"
EWR - ROC,57674153276,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/57674153276,https://www.airlines-manager.com/aircraft/show/119220542,22:45,1:44,310,"$135,540.00","$116,530.00",$375.90,"$39,060.34"
EWR - RSW,57632964651,E-RNO-MEM-1,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/57632964651,https://www.airlines-manager.com/aircraft/show/99920622,3:15,9:29,320,"$390,547.00","$351,777.00","$1,099.30","$56,434.81"
EWR - RSW,57640828163,E-RNO-MEM-4,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/57640828163,https://www.airlines-manager.com/aircraft/show/99920619,7:00,13:14,320,"$390,547.00","$351,777.00","$1,099.30","$56,434.81"
EWR - RSW,57648263137,E-RNO-MEM-3,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/57648263137,https://www.airlines-manager.com/aircraft/show/99920620,10:15,16:29,320,"$390,547.00","$351,777.00","$1,099.30","$56,434.81"
EWR - RSW,57658665118,E-RNO-MEM-5 B,A319-100,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/57658665118,https://www.airlines-manager.com/aircraft/show/100096560,14:00,20:14,198,"$295,991.00","$268,432.00","$1,355.72","$43,063.96"
EWR - RSW,57662009289,E-RNO-MEM-2,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/57662009289,https://www.airlines-manager.com/aircraft/show/99920621,16:00,22:14,320,"$390,547.00","$351,777.00","$1,099.30","$56,434.81"
EWR - SAN,57632963816,E-MIA-ORD-3,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/57632963816,https://www.airlines-manager.com/aircraft/show/113251307,0:00,11:29,338,"$779,172.00","$726,876.00","$2,150.52","$63,298.35"
EWR - SAN,57648263041,E-MIA-ORD-5,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/57648263041,https://www.airlines-manager.com/aircraft/show/113251309,10:00,21:29,338,"$779,172.00","$726,876.00","$2,150.52","$63,298.35"
EWR - SAN,57658665248,E-MIA-ORD-1,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/57658665248,https://www.airlines-manager.com/aircraft/show/113251305,15:15,2:44,338,"$779,172.00","$726,876.00","$2,150.52","$63,298.35"
EWR - SAN,57662009348,E-MIA-ORD-2,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/57662009348,https://www.airlines-manager.com/aircraft/show/113251306,16:15,3:44,338,"$779,172.00","$726,876.00","$2,150.52","$63,298.35"
EWR - SAN,57674153185,E-MIA-ORD-4,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/57674153185,https://www.airlines-manager.com/aircraft/show/113251308,22:15,9:44,338,"$779,172.00","$726,876.00","$2,150.52","$63,298.35"
EWR - SAT,57632964482,E-ELP-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/57632964482,https://www.airlines-manager.com/aircraft/show/103365576,1:45,9:59,320,"$519,976.00","$476,182.00","$1,488.07","$57,835.87"
EWR - SAT,57648263064,E-ELP-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/57648263064,https://www.airlines-manager.com/aircraft/show/103365577,10:00,18:14,320,"$519,976.00","$476,182.00","$1,488.07","$57,835.87"
EWR - SAT,57651685786,E-ELP-SAT-5 B,A319-100,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/57651685786,https://www.airlines-manager.com/aircraft/show/110582847,12:00,20:14,198,"$392,241.00","$360,537.00","$1,820.89","$43,789.92"
EWR - SAT,57668758321,E-ELP-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/57668758321,https://www.airlines-manager.com/aircraft/show/103365578,19:30,3:44,320,"$519,976.00","$476,182.00","$1,488.07","$57,835.87"
EWR - SAT,57671659296,E-ELP-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/57671659296,https://www.airlines-manager.com/aircraft/show/103365575,21:30,5:44,320,"$519,976.00","$476,182.00","$1,488.07","$57,835.87"
EWR - SAV,57637373111,E-COS-ICT-5,ERJ-175,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/57637373111,https://www.airlines-manager.com/aircraft/show/108466265,4:30,9:29,112,"146,760$","129,843$","$1,159.31","$26,055.45"
EWR - SAV,57648262985,E-COS-ICT-3,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/57648262985,https://www.airlines-manager.com/aircraft/show/108834810,9:00,13:59,310,"308,702$","282,567$",$911.51,"$56,702.41"
EWR - SAV,57651685674,E-COS-ICT-2,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/57651685674,https://www.airlines-manager.com/aircraft/show/108834809,11:00,15:59,310,"308,702$","282,567$",$911.51,"$56,702.41"
EWR - SAV,57665599616,E-COS-ICT-1,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/57665599616,https://www.airlines-manager.com/aircraft/show/108834808,18:00,22:59,310,"308,702$","282,567$",$911.51,"$56,702.41"
EWR - SAV,57668758396,E-COS-ICT-4,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/57668758396,https://www.airlines-manager.com/aircraft/show/108834811,20:00,0:59,264,"281,893$","256,651$",$972.16,"$51,501.87"
EWR - SDF,57632964707,E-LIT-FAR-2,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/57632964707,https://www.airlines-manager.com/aircraft/show/86270787,4:00,8:29,310,"296,515$","269,422$",$869.10,"$60,094.13"
EWR - SDF,57644525220,E-LIT-FAR-1,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/57644525220,https://www.airlines-manager.com/aircraft/show/90452834,8:15,12:44,310,"296,515$","269,422$",$869.10,"$60,094.13"
EWR - SDF,57658665209,E-LIT-FAR-4,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/57658665209,https://www.airlines-manager.com/aircraft/show/86270784,15:00,19:29,310,"296,515$","269,422$",$869.10,"$60,094.13"
EWR - SDF,57665599646,E-LIT-FAR-3,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/57665599646,https://www.airlines-manager.com/aircraft/show/86270786,18:15,22:44,310,"$296,515.00","$269,422.00",$869.10,"$60,094.13"
EWR - SEA,57632964236,E-DFW-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/57632964236,https://www.airlines-manager.com/aircraft/show/86238752,1:00,12:14,320,"$713,191.00","$644,122.00","$2,012.88","$57,340.24"
EWR - SEA,57632964238,E-DFW-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/57632964238,https://www.airlines-manager.com/aircraft/show/90489726,3:00,14:14,320,"$713,191.00","$644,122.00","$2,012.88","$57,340.24"
EWR - SEA,57651685599,E-DFW-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/57651685599,https://www.airlines-manager.com/aircraft/show/86238753,11:00,22:14,320,"$713,191.00","$644,122.00","$2,012.88","$57,340.24"
EWR - SEA,57658665198,E-DFW-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/57658665198,https://www.airlines-manager.com/aircraft/show/90489724,15:00,2:14,320,"$713,191.00","$644,122.00","$2,012.88","$57,340.24"
EWR - SEA,57674153254,E-DFW-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/57674153254,https://www.airlines-manager.com/aircraft/show/90489725,22:45,9:59,320,"$713,191.00","$644,122.00","$2,012.88","$57,340.24"
EWR - SEA,57675937080,E-DFW-ATL-6 B,A319-100,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/57675937080,https://www.airlines-manager.com/aircraft/show/105222360,23:30,10:59,198,"$537,220.00","$487,342.00","$2,461.32","$42,439.07"
EWR - SFO,57632963827,E-SFO-LAX-1,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/57632963827,https://www.airlines-manager.com/aircraft/show/83716137,0:00,11:44,400,"$949,362.00","$864,753.00","$2,161.88","$73,700.54"
EWR - SFO,57632963828,E-SFO-LAX-2,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/57632963828,https://www.airlines-manager.com/aircraft/show/89233028,1:30,13:14,400,"$949,362.00","$864,753.00","$2,161.88","$73,700.54"
EWR - SFO,57632963829,E-SFO-LAX-3,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/57632963829,https://www.airlines-manager.com/aircraft/show/89233029,3:00,14:44,400,"$949,362.00","$864,753.00","$2,161.88","$73,700.54"
EWR - SFO,57655460008,E-SFO-LAX-4,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/57655460008,https://www.airlines-manager.com/aircraft/show/89233030,12:15,23:59,400,"$949,362.00","$864,753.00","$2,161.88","$73,700.54"
EWR - SFO,57658665133,E-SFO-LAX-5,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/57658665133,https://www.airlines-manager.com/aircraft/show/89233027,14:15,1:59,400,"$949,362.00","$864,753.00","$2,161.88","$73,700.54"
EWR - SJC,57632963864,E-OAK-SJC-2,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/57632963864,https://www.airlines-manager.com/aircraft/show/104717242,0:00,11:59,310,"$736,357.00","$680,407.00","$2,194.86","$56,779.44"
EWR - SJC,57632963865,E-OAK-SJC-3,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/57632963865,https://www.airlines-manager.com/aircraft/show/104717241,2:00,13:59,310,"$736,357.00","$680,407.00","$2,194.86","$56,779.44"
EWR - SJC,57648263151,E-OAK-SJC-4,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/57648263151,https://www.airlines-manager.com/aircraft/show/104717240,10:30,22:29,310,"$736,357.00","$680,407.00","$2,194.86","$56,779.44"
EWR - SJC,57655460146,E-OAK-SJC-5,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/57655460146,https://www.airlines-manager.com/aircraft/show/104717239,13:00,0:59,310,"$736,357.00","$680,407.00","$2,194.86","$56,779.44"
EWR - SJC,57674153165,E-OAK-SJC-1,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/57674153165,https://www.airlines-manager.com/aircraft/show/104717243,22:00,9:59,310,"$736,357.00","$680,407.00","$2,194.86","$56,779.44"
EWR - SJU,57632964045,E-CUN-SJU-1,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/57632964045,https://www.airlines-manager.com/aircraft/show/106581304,0:30,8:44,320,"$528,828.00","$482,931.00","$1,509.16","$58,655.59"
EWR - SJU,57632964047,E-CUN-SJU-4,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/57632964047,https://www.airlines-manager.com/aircraft/show/106581307,2:00,10:14,320,"$528,828.00","$482,931.00","$1,509.16","$58,655.59"
EWR - SJU,57640828160,E-CUN-SJU-5,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/57640828160,https://www.airlines-manager.com/aircraft/show/86238754,7:00,15:14,320,"$528,828.00","$482,931.00","$1,509.16","$58,655.59"
EWR - SJU,57655460089,E-CUN-SJU-3,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/57655460089,https://www.airlines-manager.com/aircraft/show/106581306,13:00,21:14,320,"$528,828.00","$482,931.00","$1,509.16","$58,655.59"
EWR - SJU,57658665151,E-CUN-SJU-2,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/57658665151,https://www.airlines-manager.com/aircraft/show/106581305,14:30,22:44,320,"$528,828.00","$482,931.00","$1,509.16","$58,655.59"
EWR - SLC,57632964011,E-DEN-SLC-2,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/57632964011,https://www.airlines-manager.com/aircraft/show/87153196,0:15,9:59,310,"$614,239.00","$562,310.00","$1,813.90","$57,771.58"
EWR - SLC,57632964012,E-DEN-SLC-5,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/57632964012,https://www.airlines-manager.com/aircraft/show/90452833,0:15,9:59,310,"$614,239.00","$562,310.00","$1,813.90","$57,771.58"
EWR - SLC,57632964013,E-DEN-SLC-6 B,A319-100,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/57632964013,https://www.airlines-manager.com/aircraft/show/105223076,1:15,10:59,198,"$461,814.00","$420,187.00","$2,122.16","$43,169.90"
EWR - SLC,57648263081,E-DEN-SLC-1,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/57648263081,https://www.airlines-manager.com/aircraft/show/86270785,10:00,19:44,310,"$614,239.00","$562,310.00","$1,813.90","$57,771.58"
EWR - SLC,57651685653,E-DEN-SLC-4,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/57651685653,https://www.airlines-manager.com/aircraft/show/90452835,11:00,20:44,310,"$614,239.00","$562,310.00","$1,813.90","$57,771.58"
EWR - SLC,57668758297,E-DEN-SLC-3,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/57668758297,https://www.airlines-manager.com/aircraft/show/86270783,19:15,4:59,310,"$614,239.00","$562,310.00","$1,813.90","$57,771.58"
EWR - SMF,57632963844,E-SMF-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/57632963844,https://www.airlines-manager.com/aircraft/show/94889150,0:00,11:44,320,"$720,802.00","$662,355.00","$2,069.86","$56,450.71"
EWR - SMF,57632963845,E-SMF-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/57632963845,https://www.airlines-manager.com/aircraft/show/94889151,1:30,13:14,320,"$720,802.00","$662,355.00","$2,069.86","$56,450.71"
EWR - SMF,57632963846,E-SMF-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/57632963846,https://www.airlines-manager.com/aircraft/show/94889152,3:00,14:44,320,"$720,802.00","$662,355.00","$2,069.86","$56,450.71"
EWR - SMF,57651685712,E-SMF-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/57651685712,https://www.airlines-manager.com/aircraft/show/94889153,11:30,23:14,320,"$720,802.00","$662,355.00","$2,069.86","$56,450.71"
EWR - SMF,57655460194,E-SMF-ONT-5,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/57655460194,https://www.airlines-manager.com/aircraft/show/94889154,13:30,1:14,320,"$720,802.00","$662,355.00","$2,069.86","$56,450.71"
EWR - SNN,57651685550,E-56B-6 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/57651685550,https://www.airlines-manager.com/aircraft/show/94521248,10:45,23:59,748,"$2,089,804.00","$1,906,543.00","$2,548.85","$144,071.26"
EWR - SNN,57665599718,E-56B-5 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/57665599718,https://www.airlines-manager.com/aircraft/show/94521253,18:45,7:59,748,"$2,003,611.00","$1,846,437.00","$2,468.50","$139,529.24"
EWR - SRQ,57632964183,E-MTJ-ECP-1,737-900ER,https://www.airlines-manager.com/network/showline/50761179,https://www.airlines-manager.com/network/showflight/57632964183,https://www.airlines-manager.com/aircraft/show/120706946,0:45,6:44,320,"$383,317.00","$348,639.00","$1,089.50","$58,268.36"
EWR - SRQ,57648263077,E-MTJ-ECP-3,737-900ER,https://www.airlines-manager.com/network/showline/50761179,https://www.airlines-manager.com/network/showflight/57648263077,https://www.airlines-manager.com/aircraft/show/120706944,10:00,15:59,320,"$383,317.00","$348,639.00","$1,089.50","$58,268.36"
EWR - SRQ,57662009249,E-MTJ-ECP-2,737-900ER,https://www.airlines-manager.com/network/showline/50761179,https://www.airlines-manager.com/network/showflight/57662009249,https://www.airlines-manager.com/aircraft/show/120706945,15:45,21:44,320,"$383,317.00","$348,639.00","$1,089.50","$58,268.36"
EWR - SRQ,57671659218,E-MTJ-ECP-4,737-900ER,https://www.airlines-manager.com/network/showline/50761179,https://www.airlines-manager.com/network/showflight/57671659218,https://www.airlines-manager.com/aircraft/show/120706943,20:45,2:44,299,"$367,947.00","$333,854.00","$1,116.57","$55,797.33"
EWR - STL,57632964218,E-STL-PIT-3,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/57632964218,https://www.airlines-manager.com/aircraft/show/115400546,1:00,6:29,338,"$374,762.00","$343,767.00","$1,017.06","$62,693.07"
EWR - STL,57637373052,E-STL-PIT-2,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/57637373052,https://www.airlines-manager.com/aircraft/show/115400547,4:15,9:44,338,"$374,762.00","$343,767.00","$1,017.06","$62,693.07"
EWR - STL,57648263044,E-STL-PIT-1,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/57648263044,https://www.airlines-manager.com/aircraft/show/115400548,10:00,15:29,338,"$374,762.00","$343,767.00","$1,017.06","$62,693.07"
EWR - STL,57658665129,E-STL-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/57658665129,https://www.airlines-manager.com/aircraft/show/98887257,14:00,19:29,112,"$163,866.00","$143,099.00","$1,277.67","$26,097.08"
EWR - STL,57662009351,E-STL-PIT-4,A321neo-LR,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/57662009351,https://www.airlines-manager.com/aircraft/show/103406580,16:15,21:44,338,"$378,117.00","$346,673.00","$1,025.66","$63,223.04"
EWR - STL,57674153282,E-STL-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/57674153282,https://www.airlines-manager.com/aircraft/show/98887257,22:45,4:14,112,"$163,866.00","$143,099.00","$1,277.67","$26,097.08"
EWR - SYR,57632964507,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/57632964507,https://www.airlines-manager.com/aircraft/show/119220542,1:45,4:44,310,"$125,306.00","$106,702.00",$344.20,"$35,766.03"
EWR - SYR,57655460157,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/57655460157,https://www.airlines-manager.com/aircraft/show/119220545,13:00,15:59,310,"$125,306.00","$106,702.00",$344.20,"$35,766.03"
EWR - SYR,57665599554,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/57665599554,https://www.airlines-manager.com/aircraft/show/119220544,17:30,20:29,310,"$125,306.00","$106,702.00",$344.20,"$35,766.03"
EWR - SYR,57671659283,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/57671659283,https://www.airlines-manager.com/aircraft/show/119220543,21:15,0:14,310,"$125,306.00","$106,702.00",$344.20,"$35,766.03"
EWR - TLV,57632964642,E-TLV-2 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/57632964642,https://www.airlines-manager.com/aircraft/show/89124073,3:00,1:29,884,"$3,672,705.00","$3,353,356.00","$3,793.39","$149,148.52"
EWR - TLV,57671659265,E-TLV-1 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/57671659265,https://www.airlines-manager.com/aircraft/show/93429385,21:00,19:29,884,"$3,672,705.00","$3,353,356.00","$3,793.39","$149,148.52"
EWR - TPA,57637373212,E-TUS-TPA-3,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/57637373212,https://www.airlines-manager.com/aircraft/show/98379317,5:45,11:44,310,"$377,862.00","$342,681.00","$1,105.42","$57,272.59"
EWR - TPA,57651685549,E-TUS-TPA-4,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/57651685549,https://www.airlines-manager.com/aircraft/show/98379316,10:45,16:44,310,"$377,862.00","$342,681.00","$1,105.42","$57,272.59"
EWR - TPA,57655460135,E-TUS-TPA-2,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/57655460135,https://www.airlines-manager.com/aircraft/show/98379318,13:00,18:59,310,"$377,862.00","$342,681.00","$1,105.42","$57,272.59"
EWR - TPA,57658665218,E-TUS-TPA-5,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/57658665218,https://www.airlines-manager.com/aircraft/show/98379315,15:00,20:59,310,"$377,862.00","$342,681.00","$1,105.42","$57,272.59"
EWR - TPA,57674153323,E-TUS-TPA-1,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/57674153323,https://www.airlines-manager.com/aircraft/show/98379319,23:15,5:14,310,"$377,862.00","$342,681.00","$1,105.42","$57,272.59"
EWR - TUL,57632964503,E-TUL-DSM-3,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/57632964503,https://www.airlines-manager.com/aircraft/show/110044465,1:45,8:29,310,"428,315$","394,214$","$1,271.66","$58,546.63"
EWR - TUL,57632964504,E-TUL-DSM-2,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/57632964504,https://www.airlines-manager.com/aircraft/show/110044464,3:30,10:14,310,"428,315$","394,214$","$1,271.66","$58,546.63"
EWR - TUL,57655460151,E-TUL-DSM-1,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/57655460151,https://www.airlines-manager.com/aircraft/show/110044463,13:00,19:44,310,"428,315$","394,214$","$1,271.66","$58,546.63"
EWR - TUL,57662009385,E-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/57662009385,https://www.airlines-manager.com/aircraft/show/110113039,16:30,23:14,112,"201,473$","178,896$","$1,597.29","$26,568.71"
EWR - TUL,57665599711,E-TUL-DSM-4,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/57665599711,https://www.airlines-manager.com/aircraft/show/110044466,18:45,1:29,310,"$428,315.00","$394,214.00","$1,271.66","$58,546.63"
EWR - TUS,57632964126,E-TUS-TPA-4,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/57632964126,https://www.airlines-manager.com/aircraft/show/98379316,0:30,10:44,310,"$641,733.00","$593,639.00","$1,914.96","$58,010.33"
EWR - TUS,57632964129,E-TUS-TPA-2,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/57632964129,https://www.airlines-manager.com/aircraft/show/98379318,1:30,11:44,310,"$641,733.00","$593,639.00","$1,914.96","$58,010.33"
EWR - TUS,57632964131,E-TUS-TPA-5,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/57632964131,https://www.airlines-manager.com/aircraft/show/98379315,3:30,13:44,310,"$641,733.00","$593,639.00","$1,914.96","$58,010.33"
EWR - TUS,57655460136,E-TUS-TPA-1,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/57655460136,https://www.airlines-manager.com/aircraft/show/98379319,13:00,23:14,310,"$641,733.00","$593,639.00","$1,914.96","$58,010.33"
EWR - TUS,57668758334,E-TUS-TPA-3,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/57668758334,https://www.airlines-manager.com/aircraft/show/98379317,19:30,5:44,310,"$641,733.00","$593,639.00","$1,914.96","$58,010.33"
EWR - TYS,57632964635,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/57632964635,https://www.airlines-manager.com/aircraft/show/119220543,3:00,7:29,310,"$291,829.00","$266,978.00",$861.22,"$59,549.00"
EWR - TYS,57648263111,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/57648263111,https://www.airlines-manager.com/aircraft/show/119220542,10:00,14:29,310,"$291,829.00","$266,978.00",$861.22,"$59,549.00"
EWR - TYS,57665599714,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/57665599714,https://www.airlines-manager.com/aircraft/show/119220545,18:45,23:14,310,"$291,829.00","$266,978.00",$861.22,"$59,549.00"
EWR - TYS,57674153327,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/57674153327,https://www.airlines-manager.com/aircraft/show/119220544,23:15,3:44,310,"$291,829.00","$266,978.00",$861.22,"$59,549.00"
EWR - VCE,57632964644,E-84B-3  B2,777-300,https://www.airlines-manager.com/network/showline/49921914,https://www.airlines-manager.com/network/showflight/57632964644,https://www.airlines-manager.com/aircraft/show/117958697,3:00,20:14,852,"$2,729,726.00","$2,489,336.00","$2,921.76","$144,448.90"
EWR - VCE,57658665239,E-84B-6  B2,777-300,https://www.airlines-manager.com/network/showline/49921914,https://www.airlines-manager.com/network/showflight/57658665239,https://www.airlines-manager.com/aircraft/show/117958700,15:00,8:14,827,"$2,663,558.00","$2,430,898.00","$2,939.42","$141,057.91"
EWR - YEG,57632963993,E-YEG-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/57632963993,https://www.airlines-manager.com/aircraft/show/98936170,0:15,10:14,320,"$636,684.00","$584,290.00","$1,825.91","$58,526.54"
EWR - YEG,57632963994,E-YEG-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/57632963994,https://www.airlines-manager.com/aircraft/show/98936171,2:15,12:14,320,"$636,684.00","$584,290.00","$1,825.91","$58,526.54"
EWR - YEG,57651685612,E-YEG-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/57651685612,https://www.airlines-manager.com/aircraft/show/98936168,11:00,20:59,320,"636,684$","584,290$","$1,825.91","$58,526.54"
EWR - YEG,57655460015,E-YEG-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/57655460015,https://www.airlines-manager.com/aircraft/show/98936169,12:30,22:29,320,"636,684$","584,290$","$1,825.91","$58,526.54"
EWR - YEG,57674153179,E-YEG-BFF-5 B,A319-100,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/57674153179,https://www.airlines-manager.com/aircraft/show/115493369,22:00,7:59,198,"475,490$","437,332$","$2,208.75","$43,806.21"
EWR - YOW,57648263014,E-CUN-SJU-1,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/57648263014,https://www.airlines-manager.com/aircraft/show/106581304,9:30,12:59,320,"171,271$","145,940$",$456.06,"$41,896.65"
EWR - YOW,57651685617,E-CUN-SJU-4,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/57651685617,https://www.airlines-manager.com/aircraft/show/106581307,11:00,14:29,320,"171,271$","145,940$",$456.06,"$41,896.65"
EWR - YOW,57665599691,E-CUN-SJU-5,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/57665599691,https://www.airlines-manager.com/aircraft/show/86238754,18:45,22:14,320,"$171,271.00","$145,940.00",$456.06,"$41,896.65"
EWR - YOW,57671659275,E-CUN-SJU-3,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/57671659275,https://www.airlines-manager.com/aircraft/show/106581306,21:15,0:44,320,"$171,271.00","$145,940.00",$456.06,"$41,896.65"
EWR - YOW,57674153258,E-CUN-SJU-2,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/57674153258,https://www.airlines-manager.com/aircraft/show/106581305,22:45,2:14,297,"$163,764.00","$138,636.00",$466.79,"$39,799.81"
EWR - YUL,57648263015,E-CUN-SJU-3,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/57648263015,https://www.airlines-manager.com/aircraft/show/106581306,9:30,12:59,320,"$174,699.00","$146,541.00",$457.94,"$42,069.19"
EWR - YUL,57651685616,E-CUN-SJU-2,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/57651685616,https://www.airlines-manager.com/aircraft/show/106581305,11:00,14:29,320,"$174,699.00","$146,541.00",$457.94,"$42,069.19"
EWR - YUL,57658665250,E-CUN-SJU-5,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/57658665250,https://www.airlines-manager.com/aircraft/show/86238754,15:15,18:44,320,"$174,699.00","$146,541.00",$457.94,"$42,069.19"
EWR - YUL,57671659245,E-CUN-SJU-1,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/57671659245,https://www.airlines-manager.com/aircraft/show/106581304,21:00,0:29,320,"$174,699.00","$146,541.00",$457.94,"$42,069.19"
EWR - YUL,57674153232,E-CUN-SJU-4,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/57674153232,https://www.airlines-manager.com/aircraft/show/106581307,22:30,1:59,320,"$174,699.00","$146,541.00",$457.94,"$42,069.19"
EWR - YVR,57632963840,E-YVR-YYC-1,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/57632963840,https://www.airlines-manager.com/aircraft/show/113681636,0:00,11:14,400,"$912,826.00","$840,448.00","$2,101.12","$74,817.33"
EWR - YVR,57632963841,E-YVR-YYC-2,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/57632963841,https://www.airlines-manager.com/aircraft/show/113681637,1:30,12:44,400,"$912,826.00","$840,448.00","$2,101.12","$74,817.33"
EWR - YVR,57632963842,E-YVR-YYC-3,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/57632963842,https://www.airlines-manager.com/aircraft/show/113681638,3:00,14:14,400,"$912,826.00","$840,448.00","$2,101.12","$74,817.33"
EWR - YVR,57651685706,E-YVR-YYC-4,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/57651685706,https://www.airlines-manager.com/aircraft/show/113681639,11:15,22:29,400,"$912,826.00","$840,448.00","$2,101.12","$74,817.33"
EWR - YVR,57655460025,E-YVR-YYC-5,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/57655460025,https://www.airlines-manager.com/aircraft/show/113681640,12:45,23:59,400,"$912,826.00","$840,448.00","$2,101.12","$74,817.33"
EWR - YYC,57632964364,E-YVR-YYC-4,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/57632964364,https://www.airlines-manager.com/aircraft/show/113681639,1:30,11:14,400,"$791,438.00","$727,885.00","$1,819.71","$74,782.71"
EWR - YYC,57632964365,E-YVR-YYC-5,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/57632964365,https://www.airlines-manager.com/aircraft/show/113681640,3:00,12:44,400,"$791,438.00","$727,885.00","$1,819.71","$74,782.71"
EWR - YYC,57651685705,E-YVR-YYC-1,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/57651685705,https://www.airlines-manager.com/aircraft/show/113681636,11:15,20:59,400,"$791,438.00","$727,885.00","$1,819.71","$74,782.71"
EWR - YYC,57655460024,E-YVR-YYC-2,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/57655460024,https://www.airlines-manager.com/aircraft/show/113681637,12:45,22:29,400,"$791,438.00","$727,885.00","$1,819.71","$74,782.71"
EWR - YYC,57658665134,E-YVR-YYC-3,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/57658665134,https://www.airlines-manager.com/aircraft/show/113681638,14:15,23:59,400,"$791,438.00","$727,885.00","$1,819.71","$74,782.71"
EWR - YYZ,57632964549,E-DTW-YYZ-4,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/57632964549,https://www.airlines-manager.com/aircraft/show/92003922,2:15,5:44,320,"$180,492.00","$146,154.00",$456.73,"$41,958.09"
EWR - YYZ,57644525150,E-DTW-YYZ-5,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/57644525150,https://www.airlines-manager.com/aircraft/show/92003921,7:30,10:59,320,"$180,492.00","$146,154.00",$456.73,"$41,958.09"
EWR - YYZ,57648263055,E-DTW-YYZ-2,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/57648263055,https://www.airlines-manager.com/aircraft/show/92003924,10:00,13:29,320,"$180,492.00","$146,154.00",$456.73,"$41,958.09"
EWR - YYZ,57658665045,E-DTW-YYZ-1,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/57658665045,https://www.airlines-manager.com/aircraft/show/92003925,14:00,17:29,320,"$180,492.00","$146,154.00",$456.73,"$41,958.09"
EWR - YYZ,57665599639,E-DTW-YYZ-3,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/57665599639,https://www.airlines-manager.com/aircraft/show/92003923,18:15,21:44,320,"$180,492.00","$146,154.00",$456.73,"$41,958.09"
EWR - ZRH,57644525182,E-84A-6 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/57644525182,https://www.airlines-manager.com/aircraft/show/90656552,7:45,23:59,852,"$2,642,406.00","$2,399,717.00","$2,816.57","$147,826.51"
EWR - ZRH,57668758411,E-84A-7 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/57668758411,https://www.airlines-manager.com/aircraft/show/94521249,20:00,12:14,852,"$2,642,406.00","$2,399,717.00","$2,816.57","$147,826.51"
HNL - AKL,57662009343,H-84B-2 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/57662009343,https://www.airlines-manager.com/aircraft/show/96807092,16:00,9:59,832,"$2,918,341.00","$2,661,151.00","$3,198.50","$147,978.74"
HNL - AKL,57674153306,H-84B-6 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/57674153306,https://www.airlines-manager.com/aircraft/show/96807088,23:00,16:59,832,"$2,900,946.00","$2,649,712.00","$3,184.75","$147,342.65"
HNL - ATL,57637373117,H-56B-2 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/57637373117,https://www.airlines-manager.com/aircraft/show/109187499,4:45,22:44,592,"$2,202,643.00","$2,016,788.00","$3,406.74","$112,147.62"
HNL - ATL,57662009272,H-56B-4 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/57662009272,https://www.airlines-manager.com/aircraft/show/109187501,16:00,9:59,592,"$2,202,643.00","$2,016,788.00","$3,406.74","$112,147.62"
HNL - ATL,57674153251,H-56B-2 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/57674153251,https://www.airlines-manager.com/aircraft/show/109187499,22:45,16:44,592,"$2,202,643.00","$2,016,788.00","$3,406.74","$112,147.62"
HNL - BNE,57632964715,H-84B-6 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/57632964715,https://www.airlines-manager.com/aircraft/show/96807088,4:00,22:59,832,"$3,061,944.00","$2,793,095.00","$3,357.09","$147,134.06"
HNL - BNE,57648263128,H-84B-3 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/57648263128,https://www.airlines-manager.com/aircraft/show/96807091,10:00,4:59,832,"$3,043,502.00","$2,780,999.00","$3,342.55","$146,496.87"
HNL - BOS,57632963826,H-56E-6 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/57632963826,https://www.airlines-manager.com/aircraft/show/117414505,0:00,19:59,592,"$2,408,347.00","$2,248,895.00","$3,798.81","$112,538.53"
HNL - BOS,57644525234,H-56E-1 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/57644525234,https://www.airlines-manager.com/aircraft/show/117414500,8:30,4:29,592,"$2,408,347.00","$2,248,895.00","$3,798.81","$112,538.53"
HNL - BOS,57648263046,H-56E-4 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/57648263046,https://www.airlines-manager.com/aircraft/show/117414503,10:00,5:59,592,"$2,408,347.00","$2,248,895.00","$3,798.81","$112,538.53"
HNL - BWI,57632964576,H-56F-4 B,787-10,https://www.airlines-manager.com/network/showline/50049284,https://www.airlines-manager.com/network/showflight/57632964576,https://www.airlines-manager.com/aircraft/show/118383854,2:30,21:44,592,"$2,293,871.00","$2,143,128.00","$3,620.15","$111,427.80"
HNL - BWI,57651685730,H-56F-5 B,787-10,https://www.airlines-manager.com/network/showline/50049284,https://www.airlines-manager.com/network/showflight/57651685730,https://www.airlines-manager.com/aircraft/show/118383855,11:45,6:59,592,"$2,293,871.00","$2,143,128.00","$3,620.15","$111,427.80"
HNL - BWI,57662009409,H-56F-1 B,787-10,https://www.airlines-manager.com/network/showline/50049284,https://www.airlines-manager.com/network/showflight/57662009409,https://www.airlines-manager.com/aircraft/show/118383851,17:00,12:14,592,"$2,293,871.00","$2,143,128.00","$3,620.15","$111,427.80"
HNL - CLT,57637373093,H-56D-3 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/57637373093,https://www.airlines-manager.com/aircraft/show/112066134,4:30,23:14,592,"$2,263,173.00","$2,107,474.00","$3,559.92","$112,498.61"
HNL - CLT,57637373094,H-56D-5 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/57637373094,https://www.airlines-manager.com/aircraft/show/112066136,5:30,0:14,592,"$2,263,173.00","$2,107,474.00","$3,559.92","$112,498.61"
HNL - CLT,57674153314,H-56D-3 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/57674153314,https://www.airlines-manager.com/aircraft/show/112066134,23:15,17:59,592,"$2,263,173.00","$2,107,474.00","$3,559.92","$112,498.61"
HNL - CXI,57637373189,H-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/57637373189,https://www.airlines-manager.com/aircraft/show/90717080,5:30,12:44,388,"$494,113.00","$463,605.00","$1,194.86","$64,092.86"
HNL - CXI,57658665215,H-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/57658665215,https://www.airlines-manager.com/aircraft/show/90717080,15:00,22:14,388,"$494,113.00","$463,605.00","$1,194.86","$64,092.86"
HNL - CXI,57674153202,H-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/57674153202,https://www.airlines-manager.com/aircraft/show/90717080,22:15,5:29,388,"$494,113.00","$463,605.00","$1,194.86","$64,092.86"
HNL - DEN,57640828157,H-56F-6 B,787-10,https://www.airlines-manager.com/network/showline/43762939,https://www.airlines-manager.com/network/showflight/57640828157,https://www.airlines-manager.com/aircraft/show/118383856,7:00,20:59,592,"$1,714,252.00","$1,569,460.00","$2,651.11","$112,237.90"
HNL - DEN,57662009410,H-56F-2 B,787-10,https://www.airlines-manager.com/network/showline/43762939,https://www.airlines-manager.com/network/showflight/57662009410,https://www.airlines-manager.com/aircraft/show/118383852,17:00,6:59,592,"$1,714,252.00","$1,569,460.00","$2,651.11","$112,237.90"
HNL - DEN,57671659322,H-56F-4 B,787-10,https://www.airlines-manager.com/network/showline/43762939,https://www.airlines-manager.com/network/showflight/57671659322,https://www.airlines-manager.com/aircraft/show/118383854,21:45,11:44,592,"$1,714,252.00","$1,569,460.00","$2,651.11","$112,237.90"
HNL - DFW,57637373095,H-56E-2 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/57637373095,https://www.airlines-manager.com/aircraft/show/117414501,4:30,19:59,592,"$1,894,637.00","$1,743,253.00","$2,944.68","$112,589.00"
HNL - DFW,57662009408,H-56E-7 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/57662009408,https://www.airlines-manager.com/aircraft/show/117414506,17:00,8:29,592,"1,894,637$","1,743,253$","$2,944.68","$112,589.00"
HNL - DFW,57665599663,H-56E-3 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/57665599663,https://www.airlines-manager.com/aircraft/show/117414502,18:30,9:59,592,"1,894,637$","1,743,253$","$2,944.68","$112,589.00"
HNL - DTW,57640828087,H-56E-5 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/57640828087,https://www.airlines-manager.com/aircraft/show/117414504,6:00,23:59,592,"2,160,456$","2,010,661$","$3,396.39","$111,806.91"
HNL - DTW,57668758378,H-56E-2 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/57668758378,https://www.airlines-manager.com/aircraft/show/117414501,20:00,13:59,592,"2,160,456$","2,010,661$","$3,396.39","$111,806.91"
HNL - DTW,57668758379,H-56E-6 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/57668758379,https://www.airlines-manager.com/aircraft/show/117414505,20:00,13:59,592,"$2,160,456.00","$2,010,661.00","$3,396.39","$111,806.91"
HNL - EWR,57637373056,H-56A-7 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/57637373056,https://www.airlines-manager.com/aircraft/show/95351586,4:15,23:59,592,"$2,374,139.00","$2,212,224.00","$3,736.86","$112,105.95"
HNL - EWR,57640828084,H-56A-6 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/57640828084,https://www.airlines-manager.com/aircraft/show/95351587,6:00,1:44,592,"$2,374,139.00","$2,212,224.00","$3,736.86","$112,105.95"
HNL - EWR,57668758346,H-56A-3 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/57668758346,https://www.airlines-manager.com/aircraft/show/95351590,19:45,15:29,592,"$2,374,139.00","$2,212,224.00","$3,736.86","$112,105.95"
HNL - GUM,57632963821,H-GUM,A321neo,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/57632963821,https://www.airlines-manager.com/aircraft/show/115400544,0:00,16:44,338,"$1,125,989.00","$1,062,930.00","$3,144.76","$63,521.71"
HNL - GUM,57637373135,H-84A-3 F,777-300,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/57637373135,https://www.airlines-manager.com/aircraft/show/95818924,4:45,20:29,832,"$2,562,457.00","$2,362,030.00","$2,838.98","$150,129.03"
HNL - IAD,57632964649,H-56C-3 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/57632964649,https://www.airlines-manager.com/aircraft/show/111639415,3:15,22:14,592,"$2,279,774.00","$2,127,047.00","$3,592.98","$112,048.13"
HNL - IAD,57648262998,H-56C-5 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/57648262998,https://www.airlines-manager.com/aircraft/show/111639417,9:15,4:14,592,"$2,279,774.00","$2,127,047.00","$3,592.98","$112,048.13"
HNL - IAD,57668758377,H-56C-7 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/57668758377,https://www.airlines-manager.com/aircraft/show/111639419,20:00,14:59,592,"$2,279,774.00","$2,127,047.00","$3,592.98","$112,048.13"
HNL - IAH,57632963823,H-56A-1 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/57632963823,https://www.airlines-manager.com/aircraft/show/95351592,0:00,15:59,592,"$1,936,223.00","$1,795,912.00","$3,033.64","$112,361.54"
HNL - IAH,57632963824,H-56A-3 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/57632963824,https://www.airlines-manager.com/aircraft/show/95351590,3:45,19:44,592,"$1,936,223.00","$1,795,912.00","$3,033.64","$112,361.54"
HNL - IAH,57662009271,H-56A-1 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/57662009271,https://www.airlines-manager.com/aircraft/show/95351592,16:00,7:59,592,"$1,936,223.00","$1,795,912.00","$3,033.64","$112,361.54"
HNL - ITO,57632964515,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/57632964515,https://www.airlines-manager.com/aircraft/show/94803593,1:45,4:44,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,57632964516,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/57632964516,https://www.airlines-manager.com/aircraft/show/94803596,3:15,6:14,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,57640828108,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/57640828108,https://www.airlines-manager.com/aircraft/show/94803595,6:00,8:59,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,57648263023,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/57648263023,https://www.airlines-manager.com/aircraft/show/94803594,9:30,12:29,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,57658665240,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/57658665240,https://www.airlines-manager.com/aircraft/show/94803593,15:00,17:59,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,57662009384,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/57662009384,https://www.airlines-manager.com/aircraft/show/94803596,16:30,19:29,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,57668758311,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/57668758311,https://www.airlines-manager.com/aircraft/show/94803595,19:15,22:14,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,57674153281,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/57674153281,https://www.airlines-manager.com/aircraft/show/94803594,22:45,1:44,132,"$67,317.00","$57,205.00",$433.37,"$19,174.86"
HNL - JFK,57632964622,H-56B-6 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/57632964622,https://www.airlines-manager.com/aircraft/show/109187503,3:00,22:44,592,"$2,407,083.00","$2,224,643.00","$3,757.84","$112,735.29"
HNL - JFK,57648262974,H-56B-1 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/57648262974,https://www.airlines-manager.com/aircraft/show/109187498,9:00,4:44,592,"$2,407,083.00","$2,224,643.00","$3,757.84","$112,735.29"
HNL - JFK,57662009407,H-56B-3 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/57662009407,https://www.airlines-manager.com/aircraft/show/109187500,17:00,12:44,592,"2,407,083$","2,224,643$","$3,757.84","$112,735.29"
HNL - KOA,57632964207,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/57632964207,https://www.airlines-manager.com/aircraft/show/94803595,0:45,3:29,170,"58,952$","48,574$",$285.73,"$17,770.98"
HNL - KOA,57637373083,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/57637373083,https://www.airlines-manager.com/aircraft/show/94803594,4:15,6:59,170,"58,952$","48,574$",$285.73,"$17,770.98"
HNL - KOA,57640828188,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/57640828188,https://www.airlines-manager.com/aircraft/show/94803593,7:15,9:59,170,"58,952$","48,574$",$285.73,"$17,770.98"
HNL - KOA,57644525279,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/57644525279,https://www.airlines-manager.com/aircraft/show/94803596,8:45,11:29,170,"$58,952.00","$48,574.00",$285.73,"$17,770.98"
HNL - KOA,57658665125,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/57658665125,https://www.airlines-manager.com/aircraft/show/94803595,14:00,16:44,170,"$58,952.00","$48,574.00",$285.73,"$17,770.98"
HNL - KOA,57665599555,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/57665599555,https://www.airlines-manager.com/aircraft/show/94803594,17:30,20:14,170,"$58,952.00","$48,574.00",$285.73,"$17,770.98"
HNL - KOA,57671659202,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/57671659202,https://www.airlines-manager.com/aircraft/show/94803593,20:30,23:14,170,"$58,952.00","$48,574.00",$285.73,"$17,770.98"
HNL - KOA,57674153181,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/57674153181,https://www.airlines-manager.com/aircraft/show/94803596,22:00,0:44,170,"$58,952.00","$48,574.00",$285.73,"$17,770.98"
HNL - LAS,57640828131,H-84A-5 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/57640828131,https://www.airlines-manager.com/aircraft/show/95818922,6:30,18:29,832,"$1,898,127.00","$1,711,499.00","$2,057.09","$142,823.28"
HNL - LAS,57662009381,H-LAS S,A321-200,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/57662009381,https://www.airlines-manager.com/aircraft/show/116385511,16:30,5:14,232,"$747,103.00","$675,601.00","$2,912.07","$53,057.67"
HNL - LAS,57671659199,H-84A-3 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/57671659199,https://www.airlines-manager.com/aircraft/show/95818924,20:30,8:29,809,"$1,863,321.00","$1,678,838.00","$2,075.20","$140,097.75"
HNL - LAX,57640828154,H-SFO-LAX-3,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/57640828154,https://www.airlines-manager.com/aircraft/show/110044460,7:00,18:59,338,"$790,352.00","$722,080.00","$2,136.33","$60,257.02"
HNL - LAX,57648262970,H-SFO-LAX-4,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/57648262970,https://www.airlines-manager.com/aircraft/show/110044461,9:00,20:59,338,"$790,352.00","$722,080.00","$2,136.33","$60,257.02"
HNL - LAX,57648262971,H-SFO-LAX-6 B,A319-100,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/57648262971,https://www.airlines-manager.com/aircraft/show/106106389,10:00,21:59,198,"$546,807.00","$489,527.00","$2,472.36","$40,850.65"
HNL - LAX,57665599635,H-SFO-LAX-1,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/57665599635,https://www.airlines-manager.com/aircraft/show/110044458,18:15,6:14,338,"$790,352.00","$722,080.00","$2,136.33","$60,257.02"
HNL - LAX,57668758416,H-SFO-LAX-2,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/57668758416,https://www.airlines-manager.com/aircraft/show/110044459,20:15,8:14,338,"$790,352.00","$722,080.00","$2,136.33","$60,257.02"
HNL - LAX,57671659319,H-SFO-LAX-5,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/57671659319,https://www.airlines-manager.com/aircraft/show/110044462,21:45,9:44,338,"$790,352.00","$722,080.00","$2,136.33","$60,257.02"
HNL - LIH,57632964209,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/57632964209,https://www.airlines-manager.com/aircraft/show/94803596,0:45,3:14,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,57632964211,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/57632964211,https://www.airlines-manager.com/aircraft/show/94803595,3:30,5:59,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,57640828173,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/57640828173,https://www.airlines-manager.com/aircraft/show/94803594,7:00,9:29,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,57648263130,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/57648263130,https://www.airlines-manager.com/aircraft/show/94803593,10:00,12:29,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,57658665126,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/57658665126,https://www.airlines-manager.com/aircraft/show/94803596,14:00,16:29,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,57662009400,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/57662009400,https://www.airlines-manager.com/aircraft/show/94803595,16:45,19:14,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,57668758441,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/57668758441,https://www.airlines-manager.com/aircraft/show/94803594,20:15,22:44,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,57674153332,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/57674153332,https://www.airlines-manager.com/aircraft/show/94803593,23:15,1:44,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LNY,57632964302,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/57632964302,https://www.airlines-manager.com/aircraft/show/106107514,1:00,3:29,116,"$30,431.00","$25,424.00",$219.17,"$10,237.85"
HNL - LNY,57632964303,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/57632964303,https://www.airlines-manager.com/aircraft/show/106107514,3:30,5:59,116,"30,431$","25,424$",$219.17,"$10,237.85"
HNL - LNY,57640828109,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/57640828109,https://www.airlines-manager.com/aircraft/show/106107514,6:00,8:29,116,"30,431$","25,424$",$219.17,"$10,237.85"
HNL - LNY,57644525261,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/57644525261,https://www.airlines-manager.com/aircraft/show/106107514,8:30,10:59,116,"30,431$","25,424$",$219.17,"$10,237.85"
HNL - LNY,57658665242,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/57658665242,https://www.airlines-manager.com/aircraft/show/106107514,15:00,17:29,116,"30,431$","25,424$",$219.17,"$10,237.85"
HNL - LNY,57665599556,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/57665599556,https://www.airlines-manager.com/aircraft/show/106107514,17:30,19:59,116,"$30,431.00","$25,424.00",$219.17,"$10,237.85"
HNL - LNY,57668758414,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/57668758414,https://www.airlines-manager.com/aircraft/show/106107514,20:00,22:29,116,"$30,431.00","$25,424.00",$219.17,"$10,237.85"
HNL - LNY,57674153246,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/57674153246,https://www.airlines-manager.com/aircraft/show/106107514,22:30,0:59,116,"$30,431.00","$25,424.00",$219.17,"$10,237.85"
HNL - MCO,57632964224,H-56C-7 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/57632964224,https://www.airlines-manager.com/aircraft/show/111639419,1:00,19:59,592,"$2,289,533.00","$2,129,434.00","$3,597.02","$112,173.87"
HNL - MCO,57637373058,H-56C-6 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/57637373058,https://www.airlines-manager.com/aircraft/show/111639418,4:15,23:14,592,"$2,289,533.00","$2,129,434.00","$3,597.02","$112,173.87"
HNL - MCO,57644525213,H-56C-2 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/57644525213,https://www.airlines-manager.com/aircraft/show/111639414,8:15,3:14,592,"2,289,533$","2,129,434$","$3,597.02","$112,173.87"
HNL - MEL,57644525260,H-84A-4 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/57644525260,https://www.airlines-manager.com/aircraft/show/95818923,8:30,6:29,832,"3,546,306$","3,244,924$","$3,900.15","$147,608.37"
HNL - MEL,57668758413,H-84A-7 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/57668758413,https://www.airlines-manager.com/aircraft/show/95818920,20:00,17:59,832,"3,546,306$","3,244,924$","$3,900.15","$147,608.37"
HNL - MIA,57644525233,H-56A-2 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/57644525233,https://www.airlines-manager.com/aircraft/show/95351591,8:30,3:44,592,"2,335,269$","2,169,008$","$3,663.86","$112,773.38"
HNL - MIA,57651685543,H-56A-5 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/57651685543,https://www.airlines-manager.com/aircraft/show/95351588,10:45,5:59,592,"2,335,269$","2,169,008$","$3,663.86","$112,773.38"
HNL - MIA,57662009229,H-56A-4 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/57662009229,https://www.airlines-manager.com/aircraft/show/95351589,15:30,10:44,592,"$2,335,269.00","$2,169,008.00","$3,663.86","$112,773.38"
HNL - MNL,57644525169,H-84A-2 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/57644525169,https://www.airlines-manager.com/aircraft/show/95818925,7:30,4:44,832,"$3,468,526.00","$3,179,229.00","$3,821.19","$149,728.21"
HNL - MNL,57665599684,H-84A-5 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/57665599684,https://www.airlines-manager.com/aircraft/show/95818922,18:30,15:44,832,"$3,468,526.00","$3,179,229.00","$3,821.19","$149,728.21"
HNL - MSP,57662009274,H-56C-1 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/57662009274,https://www.airlines-manager.com/aircraft/show/111639413,16:00,8:14,592,"$1,950,535.00","$1,816,162.00","$3,067.84","$111,878.56"
HNL - MSP,57662009275,H-56C-4 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/57662009275,https://www.airlines-manager.com/aircraft/show/111639416,17:00,9:14,592,"$1,950,535.00","$1,816,162.00","$3,067.84","$111,878.56"
HNL - MSP,57674153189,H-56C-3 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/57674153189,https://www.airlines-manager.com/aircraft/show/111639415,22:15,14:29,592,"$1,950,535.00","$1,816,162.00","$3,067.84","$111,878.56"
HNL - NAN,57632964698,H-84A-7 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/57632964698,https://www.airlines-manager.com/aircraft/show/95818920,3:45,17:14,832,"$2,077,351.00","$1,906,145.00","$2,291.04","$141,370.46"
HNL - NAN,57665599626,H-84A-1 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/57665599626,https://www.airlines-manager.com/aircraft/show/95818926,18:00,7:29,832,"$2,048,301.00","$1,886,749.00","$2,267.73","$139,931.94"
HNL - OGG,57632964517,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/57632964517,https://www.airlines-manager.com/aircraft/show/94803594,1:45,4:14,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,57637373136,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/57637373136,https://www.airlines-manager.com/aircraft/show/94803593,4:45,7:14,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,57640828119,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/57640828119,https://www.airlines-manager.com/aircraft/show/94803596,6:15,8:44,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,57648262993,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/57648262993,https://www.airlines-manager.com/aircraft/show/94803595,9:00,11:29,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,57658665241,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/57658665241,https://www.airlines-manager.com/aircraft/show/94803594,15:00,17:29,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,57665599627,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/57665599627,https://www.airlines-manager.com/aircraft/show/94803593,18:00,20:29,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,57668758340,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/57668758340,https://www.airlines-manager.com/aircraft/show/94803596,19:30,21:59,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,57674153216,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/57674153216,https://www.airlines-manager.com/aircraft/show/94803595,22:15,0:44,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - ORD,57648263045,H-56B-5 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/57648263045,https://www.airlines-manager.com/aircraft/show/109187502,10:00,2:59,592,"$2,090,552.00","$1,921,092.00","$3,245.09","$113,116.31"
HNL - ORD,57662009273,H-56B-7 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/57662009273,https://www.airlines-manager.com/aircraft/show/109187504,16:00,8:59,592,"$2,090,552.00","$1,921,092.00","$3,245.09","$113,116.31"
HNL - ORD,57674153252,H-56B-6 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/57674153252,https://www.airlines-manager.com/aircraft/show/109187503,22:45,15:44,592,"$2,090,552.00","$1,921,092.00","$3,245.09","$113,116.31"
HNL - PHL,57640828156,H-56F-3 B,787-10,https://www.airlines-manager.com/network/showline/50049283,https://www.airlines-manager.com/network/showflight/57640828156,https://www.airlines-manager.com/aircraft/show/118383853,7:00,2:29,592,"$2,346,540.00","$2,188,960.00","$3,697.57","$112,350.38"
HNL - PHL,57662009411,H-56F-7 B,787-10,https://www.airlines-manager.com/network/showline/50049283,https://www.airlines-manager.com/network/showflight/57662009411,https://www.airlines-manager.com/aircraft/show/118383857,17:00,12:29,592,"$2,346,540.00","$2,188,960.00","$3,697.57","$112,350.38"
HNL - PHL,57671659238,H-56F-6 B,787-10,https://www.airlines-manager.com/network/showline/50049283,https://www.airlines-manager.com/network/showflight/57671659238,https://www.airlines-manager.com/aircraft/show/118383856,21:00,16:29,592,"$2,346,540.00","$2,188,960.00","$3,697.57","$112,350.38"
HNL - PHX,57632964671,H-56D-7 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/57632964671,https://www.airlines-manager.com/aircraft/show/112066138,3:30,15:59,592,"$1,520,203.00","$1,409,068.00","$2,380.18","$112,875.94"
HNL - PHX,57658665186,H-56D-6 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/57658665186,https://www.airlines-manager.com/aircraft/show/112066137,15:00,3:29,592,"$1,520,203.00","$1,409,068.00","$2,380.18","$112,875.94"
HNL - PHX,57662009277,H-56D-2 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/57662009277,https://www.airlines-manager.com/aircraft/show/112066133,16:00,4:29,592,"$1,520,203.00","$1,409,068.00","$2,380.18","$112,875.94"
HNL - PPG,57632964648,H-TRW-PPG-1 S,A321neo,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/57632964648,https://www.airlines-manager.com/aircraft/show/120872966,3:15,15:29,410,"$843,136.00","$795,552.00","$1,940.37","$65,031.50"
HNL - PPG,57662009269,H-TRW-PPG-2 S,A321neo,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/57662009269,https://www.airlines-manager.com/aircraft/show/120872965,16:00,4:14,410,"$843,136.00","$795,552.00","$1,940.37","$65,031.50"
HNL - PPG,57665599592,H-TRW-PPG-3 S,A321neo,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/57665599592,https://www.airlines-manager.com/aircraft/show/120872964,18:00,6:14,410,"$843,136.00","$795,552.00","$1,940.37","$65,031.50"
HNL - PPT,57637373128,H-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/57637373128,https://www.airlines-manager.com/aircraft/show/88725600,4:45,17:29,310,"$771,400.00","$718,433.00","$2,317.53","$56,421.44"
HNL - PPT,57662009262,H-84A-6 F,777-300,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/57662009262,https://www.airlines-manager.com/aircraft/show/95818921,15:45,3:44,832,"$1,903,144.00","$1,751,128.00","$2,104.72","$146,130.29"
HNL - PPT,57665599551,H-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/57665599551,https://www.airlines-manager.com/aircraft/show/88725600,17:30,6:14,310,"$771,400.00","$718,433.00","$2,317.53","$56,421.44"
HNL - SEA,57632964686,H-56D-1 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/57632964686,https://www.airlines-manager.com/aircraft/show/112066132,3:45,15:14,592,"$1,418,230.00","$1,316,557.00","$2,223.91","$114,649.38"
HNL - SEA,57662009276,H-56D-1 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/57662009276,https://www.airlines-manager.com/aircraft/show/112066132,16:00,3:29,592,"$1,418,230.00","$1,316,557.00","$2,223.91","$114,649.38"
HNL - SEA,57665599596,H-56D-4 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/57665599596,https://www.airlines-manager.com/aircraft/show/112066135,18:00,5:29,592,"$1,418,230.00","$1,316,557.00","$2,223.91","$114,649.38"
HNL - SFO,57640828153,H-SFO-LAX-1,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/57640828153,https://www.airlines-manager.com/aircraft/show/110044458,7:00,18:14,338,"$759,152.00","$700,668.00","$2,072.98","$62,374.01"
HNL - SFO,57648262968,H-SFO-LAX-2,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/57648262968,https://www.airlines-manager.com/aircraft/show/110044459,9:00,20:14,338,"$759,152.00","$700,668.00","$2,072.98","$62,374.01"
HNL - SFO,57648262969,H-SFO-LAX-5,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/57648262969,https://www.airlines-manager.com/aircraft/show/110044462,10:30,21:44,338,"$759,152.00","$700,668.00","$2,072.98","$62,374.01"
HNL - SFO,57668758233,H-SFO-LAX-3,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/57668758233,https://www.airlines-manager.com/aircraft/show/110044460,19:00,6:14,338,"$759,152.00","$700,668.00","$2,072.98","$62,374.01"
HNL - SFO,57671659236,H-SFO-LAX-4,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/57671659236,https://www.airlines-manager.com/aircraft/show/110044461,21:00,8:14,338,"$759,152.00","$700,668.00","$2,072.98","$62,374.01"
HNL - SFO,57674153177,H-SFO-LAX-6 B,A319-100,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/57674153177,https://www.airlines-manager.com/aircraft/show/106106389,22:00,9:29,198,"$528,428.00","$479,141.00","$2,419.90","$41,724.91"
HNL - SIN,57637373177,H-84B-4 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/57637373177,https://www.airlines-manager.com/aircraft/show/96807090,5:15,7:29,832,"$4,330,890.00","$3,932,668.00","$4,726.76","$1,760,896.12"
HNL - SIN,57662009445,H-84B-7 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/57662009445,https://www.airlines-manager.com/aircraft/show/96807087,17:00,19:14,832,"$4,330,890.00","$3,932,668.00","$4,726.76","$1,760,896.12"
HNL - SYD,57644525170,H-84B-5 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/57644525170,https://www.airlines-manager.com/aircraft/show/96807089,7:30,3:59,832,"$3,347,714.00","$3,040,683.00","$3,654.67","$148,446.69"
HNL - SYD,57668758310,H-84B-1 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/57668758310,https://www.airlines-manager.com/aircraft/show/96807093,19:15,15:44,832,"$3,347,714.00","$3,040,683.00","$3,654.67","$148,446.69"
HNL - TRW,57637373053,H-TRW-PPG-2 S,A321neo,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/57637373053,https://www.airlines-manager.com/aircraft/show/120872965,4:15,15:29,410,"$815,013.00","$772,225.00","$1,883.48","$68,744.07"
HNL - TRW,57640828113,H-TRW-PPG-3 S,A321neo,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/57640828113,https://www.airlines-manager.com/aircraft/show/120872964,6:15,17:29,410,"$815,013.00","$772,225.00","$1,883.48","$68,744.07"
HNL - TRW,57662009270,H-TRW-PPG-1 S,A321neo,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/57662009270,https://www.airlines-manager.com/aircraft/show/120872966,16:00,3:14,410,"$815,013.00","$772,225.00","$1,883.48","$68,744.07"
HNL - YVR,57632963984,H-56D-6 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/57632963984,https://www.airlines-manager.com/aircraft/show/112066137,0:15,11:59,592,"$1,421,513.00","$1,326,107.00","$2,240.05","$113,020.48"
HNL - YVR,57632963985,H-56D-2 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/57632963985,https://www.airlines-manager.com/aircraft/show/112066133,3:30,15:14,592,"$1,421,513.00","$1,326,107.00","$2,240.05","$113,020.48"
HNL - YVR,57662009278,H-56D-7 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/57662009278,https://www.airlines-manager.com/aircraft/show/112066138,16:00,3:44,592,"$1,421,513.00","$1,326,107.00","$2,240.05","$113,020.48"
IAH - ABQ,57632964272,I-CLE-STL-1,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/57632964272,https://www.airlines-manager.com/aircraft/show/103600700,1:00,5:59,310,"$318,057.00","$284,740.00",$918.52,"$57,138.46"
IAH - ABQ,57632964274,I-CLE-STL-5 B,A319-100,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/57632964274,https://www.airlines-manager.com/aircraft/show/110582844,2:30,7:29,198,"$241,670.00","$214,984.00","$1,085.78","$43,140.60"
IAH - ABQ,57640828096,I-CLE-STL-4,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/57640828096,https://www.airlines-manager.com/aircraft/show/88725601,6:00,10:59,310,"$318,057.00","$284,740.00",$918.52,"$57,138.46"
IAH - ABQ,57655460141,I-CLE-STL-3,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/57655460141,https://www.airlines-manager.com/aircraft/show/103600702,13:00,17:59,310,"$318,057.00","$284,740.00",$918.52,"$57,138.46"
IAH - ABQ,57665599710,I-CLE-STL-2,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/57665599710,https://www.airlines-manager.com/aircraft/show/103600701,18:45,23:44,310,"$318,057.00","$284,740.00",$918.52,"$57,138.46"
IAH - ALB,57632964000,I-MHT-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/57632964000,https://www.airlines-manager.com/aircraft/show/114266976,0:15,7:59,320,"497,488$","452,034$","$1,412.61","$58,452.67"
IAH - ALB,57632964001,I-MHT-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/57632964001,https://www.airlines-manager.com/aircraft/show/92800067,2:00,9:59,112,"235,267$","208,227$","$1,859.17","$26,082.71"
IAH - ALB,57651685753,I-MHT-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/57651685753,https://www.airlines-manager.com/aircraft/show/114266971,12:00,19:44,320,"497,488$","452,034$","$1,412.61","$58,452.67"
IAH - ALB,57658665206,I-MHT-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/57658665206,https://www.airlines-manager.com/aircraft/show/114266970,15:00,22:44,320,"497,488$","452,034$","$1,412.61","$58,452.67"
IAH - ALB,57668758425,I-MHT-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/57668758425,https://www.airlines-manager.com/aircraft/show/114266972,20:15,3:59,320,"$497,488.00","$452,034.00","$1,412.61","$58,452.67"
IAH - ANC,57651685776,I-ANC-ONT-1,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/57651685776,https://www.airlines-manager.com/aircraft/show/108258010,12:00,2:44,310,"$901,188.00","$830,964.00","$2,680.53","$56,400.27"
IAH - ANC,57658665096,I-ANC-ONT-2,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/57658665096,https://www.airlines-manager.com/aircraft/show/108258011,14:00,4:44,310,"$901,188.00","$830,964.00","$2,680.53","$56,400.27"
IAH - ANC,57668758307,I-ANC-ONT-3,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/57668758307,https://www.airlines-manager.com/aircraft/show/108258012,19:15,9:59,310,"$901,188.00","$830,964.00","$2,680.53","$56,400.27"
IAH - ANC,57671659281,I-ANC-ONT-4,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/57671659281,https://www.airlines-manager.com/aircraft/show/108089220,21:15,11:59,310,"$901,188.00","$830,964.00","$2,680.53","$56,400.27"
IAH - ANC,57674153331,I-ANC-ONT-5 B,A319-100,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/57674153331,https://www.airlines-manager.com/aircraft/show/108286957,23:15,13:59,198,"$672,390.00","$616,070.00","$3,111.46","$41,814.71"
IAH - ATL,57632964023,I-LAS-ATL-6,ERJ-175,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/57632964023,https://www.airlines-manager.com/aircraft/show/82323704,0:15,4:59,112,"$146,580.00","$112,539.00","$1,004.81","$23,775.85"
IAH - ATL,57648263057,I-LAS-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/57648263057,https://www.airlines-manager.com/aircraft/show/95894466,10:00,14:44,320,"$307,891.00","$243,816.00",$761.93,"$51,510.42"
IAH - ATL,57651685548,I-LAS-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/57651685548,https://www.airlines-manager.com/aircraft/show/96256511,10:45,15:29,320,"$307,891.00","$243,816.00",$761.93,"$51,510.42"
IAH - ATL,57662009286,I-LAS-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/57662009286,https://www.airlines-manager.com/aircraft/show/96183549,16:00,20:44,320,"$307,891.00","$243,816.00",$761.93,"$51,510.42"
IAH - ATL,57665599567,I-LAS-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/57665599567,https://www.airlines-manager.com/aircraft/show/96177955,17:45,22:29,320,"$307,891.00","$243,816.00",$761.93,"$51,510.42"
IAH - ATL,57675937094,I-LAS-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/57675937094,https://www.airlines-manager.com/aircraft/show/96250652,23:45,4:29,320,"$307,891.00","$243,816.00",$761.93,"$51,510.42"
IAH - AUS,57637373051,I-BWI-PHL-2,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/57637373051,https://www.airlines-manager.com/aircraft/show/106007214,4:15,6:59,338,"$100,920.00","$77,319.00",$228.75,"$28,287.44"
IAH - AUS,57651685565,I-BWI-PHL-1,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/57651685565,https://www.airlines-manager.com/aircraft/show/106007213,11:00,13:44,338,"$100,920.00","$77,319.00",$228.75,"$28,287.44"
IAH - AUS,57651685566,I-BWI-PHL-5,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/57651685566,https://www.airlines-manager.com/aircraft/show/106007217,12:00,14:44,338,"$100,920.00","$77,319.00",$228.75,"$28,287.44"
IAH - AUS,57665599634,I-BWI-PHL-4,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/57665599634,https://www.airlines-manager.com/aircraft/show/106007216,18:15,20:59,338,"$100,920.00","$77,319.00",$228.75,"$28,287.44"
IAH - AUS,57671659289,I-BWI-PHL-3,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/57671659289,https://www.airlines-manager.com/aircraft/show/106007215,21:30,0:14,274,"$89,669.00","$66,272.00",$241.87,"$24,245.85"
IAH - BDL,57640828100,I-CLE-STL-1,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/57640828100,https://www.airlines-manager.com/aircraft/show/103600700,6:00,13:59,310,"$500,324.00","$457,984.00","$1,477.37","$57,367.52"
IAH - BDL,57644525167,I-CLE-STL-5 B,A319-100,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/57644525167,https://www.airlines-manager.com/aircraft/show/110582844,7:30,15:29,198,"$377,004.00","$343,067.00","$1,732.66","$42,972.90"
IAH - BDL,57651685652,I-CLE-STL-4,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/57651685652,https://www.airlines-manager.com/aircraft/show/88725601,11:00,18:59,310,"$500,324.00","$457,984.00","$1,477.37","$57,367.52"
IAH - BDL,57665599612,I-CLE-STL-3,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/57665599612,https://www.airlines-manager.com/aircraft/show/103600702,18:00,1:59,310,"$500,324.00","$457,984.00","$1,477.37","$57,367.52"
IAH - BDL,57668758373,I-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/57668758373,https://www.airlines-manager.com/aircraft/show/96990010,19:45,3:44,112,"$235,319.00","$207,286.00","$1,850.77","$25,964.84"
IAH - BDL,57675937103,I-CLE-STL-2,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/57675937103,https://www.airlines-manager.com/aircraft/show/103600701,23:45,7:44,310,"$500,324.00","$457,984.00","$1,477.37","$57,367.52"
IAH - BFF,57632964704,I-MHT-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/57632964704,https://www.airlines-manager.com/aircraft/show/114266972,4:00,9:44,320,"$366,994.00","$329,116.00","$1,028.49","$57,403.95"
IAH - BFF,57648263140,I-MHT-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/57648263140,https://www.airlines-manager.com/aircraft/show/114266976,10:15,15:59,320,"$366,994.00","$329,116.00","$1,028.49","$57,403.95"
IAH - BFF,57651685792,I-MHT-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/57651685792,https://www.airlines-manager.com/aircraft/show/92800067,12:00,17:44,112,"$173,788.00","$152,107.00","$1,358.10","$26,530.29"
IAH - BFF,57668758354,I-MHT-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/57668758354,https://www.airlines-manager.com/aircraft/show/114266971,19:45,1:29,320,"$366,994.00","$329,116.00","$1,028.49","$57,403.95"
IAH - BFF,57674153261,I-MHT-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/57674153261,https://www.airlines-manager.com/aircraft/show/114266970,22:45,4:29,320,"$366,994.00","$329,116.00","$1,028.49","$57,403.95"
IAH - BHM,57632963855,I-BHM,737-900ER,https://www.airlines-manager.com/network/showline/50835066,https://www.airlines-manager.com/network/showflight/57632963855,https://www.airlines-manager.com/aircraft/show/120933644,0:00,4:14,320,"$268,942.00","$236,950.00",$740.47,"$55,972.44"
IAH - BHM,57651685639,I-BHM,737-900ER,https://www.airlines-manager.com/network/showline/50835066,https://www.airlines-manager.com/network/showflight/57651685639,https://www.airlines-manager.com/aircraft/show/120933644,11:00,15:14,320,"$268,942.00","$236,950.00",$740.47,"$55,972.44"
IAH - BHM,57658665252,I-BHM,737-900ER,https://www.airlines-manager.com/network/showline/50835066,https://www.airlines-manager.com/network/showflight/57658665252,https://www.airlines-manager.com/aircraft/show/120933644,15:15,19:29,320,"$268,942.00","$236,950.00",$740.47,"$55,972.44"
IAH - BHM,57668758326,I-BHM,737-900ER,https://www.airlines-manager.com/network/showline/50835066,https://www.airlines-manager.com/network/showflight/57668758326,https://www.airlines-manager.com/aircraft/show/120933644,19:30,23:44,320,"$268,942.00","$236,950.00",$740.47,"$55,972.44"
IAH - BIL,57632964604,I-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/57632964604,https://www.airlines-manager.com/aircraft/show/117273390,2:45,9:59,320,"$457,445.00","$414,054.00","$1,293.92","$57,242.49"
IAH - BIL,57648262979,I-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/57648262979,https://www.airlines-manager.com/aircraft/show/117273392,9:00,16:14,320,"$457,445.00","$414,054.00","$1,293.92","$57,242.49"
IAH - BIL,57651685629,I-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/57651685629,https://www.airlines-manager.com/aircraft/show/117273389,11:00,18:14,320,"$457,445.00","$414,054.00","$1,293.92","$57,242.49"
IAH - BIL,57665599669,I-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/57665599669,https://www.airlines-manager.com/aircraft/show/117273391,18:30,1:44,320,"$457,445.00","$414,054.00","$1,293.92","$57,242.49"
IAH - BNA,57632964710,I-BOI-BNA-4,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/57632964710,https://www.airlines-manager.com/aircraft/show/104258214,4:00,8:44,310,"$302,944.00","$271,735.00",$876.56,"$57,408.80"
IAH - BNA,57648263002,I-BOI-BNA-3,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/57648263002,https://www.airlines-manager.com/aircraft/show/104258213,9:15,13:59,310,"$302,944.00","$271,735.00",$876.56,"$57,408.80"
IAH - BNA,57658665221,I-BOI-BNA-2,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/57658665221,https://www.airlines-manager.com/aircraft/show/104258212,15:00,19:44,310,"$302,944.00","$271,735.00",$876.56,"$57,408.80"
IAH - BNA,57674153163,I-BOI-BNA-1,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/57674153163,https://www.airlines-manager.com/aircraft/show/104258211,22:00,2:44,310,"$302,944.00","$271,735.00",$876.56,"$57,408.80"
IAH - BNA,57674153164,I-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/57674153164,https://www.airlines-manager.com/aircraft/show/103534664,23:00,3:44,112,"$143,897.00","$124,026.00","$1,107.38","$26,202.68"
IAH - BOG,57640828085,I-56A-4 E,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/57640828085,https://www.airlines-manager.com/aircraft/show/106676235,6:00,15:59,648,"$1,306,935.00","$1,214,643.00","$1,874.45","$121,667.08"
IAH - BOG,57658665032,I-56A-6 E,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/57658665032,https://www.airlines-manager.com/aircraft/show/106676237,14:00,23:59,648,"$1,306,935.00","$1,214,643.00","$1,874.45","$121,667.08"
IAH - BOG,57668758376,I-56A-1 E,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/57668758376,https://www.airlines-manager.com/aircraft/show/106676232,20:00,5:59,648,"$1,306,935.00","$1,214,643.00","$1,874.45","$121,667.08"
IAH - BOI,57632964337,I-BOI-BNA-3,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/57632964337,https://www.airlines-manager.com/aircraft/show/104258213,1:15,9:14,310,"$502,482.00","$460,855.00","$1,486.63","$57,727.14"
IAH - BOI,57640828171,I-BOI-BNA-2,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/57640828171,https://www.airlines-manager.com/aircraft/show/104258212,7:00,14:59,310,"502,482$","460,855$","$1,486.63","$57,727.14"
IAH - BOI,57658665087,I-BOI-BNA-1,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/57658665087,https://www.airlines-manager.com/aircraft/show/104258211,14:00,21:59,310,"502,482$","460,855$","$1,486.63","$57,727.14"
IAH - BOI,57658665088,I-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/57658665088,https://www.airlines-manager.com/aircraft/show/103534664,15:00,22:59,112,"236,364$","208,802$","$1,864.30","$26,154.74"
IAH - BOI,57668758392,I-BOI-BNA-4,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/57668758392,https://www.airlines-manager.com/aircraft/show/104258214,20:00,3:59,310,"502,482$","460,855$","$1,486.63","$57,727.14"
IAH - BOS,57632964476,I-JFK-LAX-3,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/57632964476,https://www.airlines-manager.com/aircraft/show/88400800,1:45,9:59,400,"$668,982.00","$607,178.00","$1,517.95","$73,746.32"
IAH - BOS,57651685589,I-JFK-LAX-2,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/57651685589,https://www.airlines-manager.com/aircraft/show/88400799,11:00,19:14,400,"$668,982.00","$607,178.00","$1,517.95","$73,746.32"
IAH - BOS,57651685590,I-JFK-LAX-4,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/57651685590,https://www.airlines-manager.com/aircraft/show/88400801,12:00,20:14,400,"$668,982.00","$607,178.00","$1,517.95","$73,746.32"
IAH - BOS,57665599564,I-JFK-LAX-5,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/57665599564,https://www.airlines-manager.com/aircraft/show/89233038,17:45,1:59,400,"$668,982.00","$607,178.00","$1,517.95","$73,746.32"
IAH - BOS,57665599565,I-JFK-LAX-1,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/57665599565,https://www.airlines-manager.com/aircraft/show/88400798,18:30,2:44,386,"$654,998.00","$593,774.00","$1,538.27","$72,118.30"
IAH - BSB,57651685710,I-84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/57651685710,https://www.airlines-manager.com/aircraft/show/89124076,11:15,5:29,932,"$3,069,976.00","$2,802,042.00","$3,006.48","$153,676.89"
IAH - BSB,57668758440,I-84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/57668758440,https://www.airlines-manager.com/aircraft/show/88905140,20:15,14:29,932,"$3,069,976.00","$2,802,042.00","$3,006.48","$153,676.89"
IAH - BTV,57632963859,I-BTV-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/57632963859,https://www.airlines-manager.com/aircraft/show/86385103,0:00,8:14,310,"$517,662.00","$475,935.00","$1,535.27","$57,805.87"
IAH - BTV,57637373085,I-BTV-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/57637373085,https://www.airlines-manager.com/aircraft/show/82543907,4:15,12:29,112,"$243,763.00","$215,988.00","$1,928.46","$26,233.36"
IAH - BTV,57640828184,I-BTV-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/57640828184,https://www.airlines-manager.com/aircraft/show/114373409,7:15,15:29,310,"$517,662.00","$475,935.00","$1,535.27","$57,805.87"
IAH - BTV,57658665105,I-BTV-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/57658665105,https://www.airlines-manager.com/aircraft/show/114373410,14:00,22:14,310,"$517,662.00","$475,935.00","$1,535.27","$57,805.87"
IAH - BTV,57665599712,I-BTV-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/57665599712,https://www.airlines-manager.com/aircraft/show/113994196,18:45,2:59,310,"$517,662.00","$475,935.00","$1,535.27","$57,805.87"
IAH - BUF,57632964338,I-PVD-BUF-4,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/57632964338,https://www.airlines-manager.com/aircraft/show/107467127,1:15,8:14,310,"$454,004.00","$415,337.00","$1,339.80","$59,475.47"
IAH - BUF,57632964339,I-PVD-BUF-3,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/57632964339,https://www.airlines-manager.com/aircraft/show/107467128,4:00,10:59,310,"$454,004.00","$415,337.00","$1,339.80","$59,475.47"
IAH - BUF,57655460148,I-PVD-BUF-2,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/57655460148,https://www.airlines-manager.com/aircraft/show/107467129,13:00,19:59,310,"$454,004.00","$415,337.00","$1,339.80","$59,475.47"
IAH - BUF,57662009444,I-PVD-BUF-5 B,A319-100,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/57662009444,https://www.airlines-manager.com/aircraft/show/110582843,17:00,23:59,198,"$342,604.00","$311,616.00","$1,573.82","$44,622.82"
IAH - BUF,57671659280,I-PVD-BUF-1,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/57671659280,https://www.airlines-manager.com/aircraft/show/107467130,21:15,4:14,310,"$454,004.00","$415,337.00","$1,339.80","$59,475.47"
IAH - BUR,57632964589,I-YEG-BUR-4,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/57632964589,https://www.airlines-manager.com/aircraft/show/117273341,2:30,9:59,310,"469,559$","430,890$","$1,389.97","$57,579.96"
IAH - BUR,57632964590,I-YEG-BUR-3,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/57632964590,https://www.airlines-manager.com/aircraft/show/117273342,3:15,10:44,310,"469,559$","430,890$","$1,389.97","$57,579.96"
IAH - BUR,57651685572,I-YEG-BUR-5,A321neo,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/57651685572,https://www.airlines-manager.com/aircraft/show/117273340,11:00,18:29,338,"508,813$","471,862$","$1,396.04","$63,055.06"
IAH - BUR,57665599621,I-YEG-BUR-2,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/57665599621,https://www.airlines-manager.com/aircraft/show/117273343,18:00,1:29,310,"469,559$","430,890$","$1,389.97","$57,579.96"
IAH - BUR,57668758432,I-YEG-BUR-1,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/57668758432,https://www.airlines-manager.com/aircraft/show/117273344,20:15,3:44,298,"$458,780.00","$420,563.00","$1,411.29","$56,199.96"
IAH - BWI,57632963982,I-BWI-PHL-3,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/57632963982,https://www.airlines-manager.com/aircraft/show/106007215,0:15,6:59,338,"$470,491.00","$429,120.00","$1,269.59","$63,730.69"
IAH - BWI,57651685567,I-BWI-PHL-2,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/57651685567,https://www.airlines-manager.com/aircraft/show/106007214,11:00,17:44,338,"$470,491.00","$429,120.00","$1,269.59","$63,730.69"
IAH - BWI,57655460202,I-BWI-PHL-1,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/57655460202,https://www.airlines-manager.com/aircraft/show/106007213,13:45,20:29,338,"$470,491.00","$429,120.00","$1,269.59","$63,730.69"
IAH - BWI,57658665162,I-BWI-PHL-5,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/57658665162,https://www.airlines-manager.com/aircraft/show/106007217,14:45,21:29,338,"$470,491.00","$429,120.00","$1,269.59","$63,730.69"
IAH - BWI,57671659234,I-BWI-PHL-4,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/57671659234,https://www.airlines-manager.com/aircraft/show/106007216,21:00,3:44,338,"$470,491.00","$429,120.00","$1,269.59","$63,730.69"
IAH - BZN,57632964066,I-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/57632964066,https://www.airlines-manager.com/aircraft/show/117273392,0:30,7:59,320,"$475,071.00","$431,309.00","$1,347.84","$57,635.95"
IAH - BZN,57632964069,I-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/57632964069,https://www.airlines-manager.com/aircraft/show/117273389,2:30,9:59,320,"$475,071.00","$431,309.00","$1,347.84","$57,635.95"
IAH - BZN,57651685631,I-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/57651685631,https://www.airlines-manager.com/aircraft/show/117273391,11:00,18:29,320,"$475,071.00","$431,309.00","$1,347.84","$57,635.95"
IAH - BZN,57668758294,I-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/57668758294,https://www.airlines-manager.com/aircraft/show/117273390,19:15,2:44,320,"$475,071.00","$431,309.00","$1,347.84","$57,635.95"
IAH - CAK,57632964633,I-BTV-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/57632964633,https://www.airlines-manager.com/aircraft/show/113994196,3:00,9:14,310,"$393,368.00","$358,933.00","$1,157.85","$57,582.83"
IAH - CAK,57644525219,I-BTV-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/57644525219,https://www.airlines-manager.com/aircraft/show/86385103,8:15,14:29,310,"$393,368.00","$358,933.00","$1,157.85","$57,582.83"
IAH - CAK,57655460174,I-BTV-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/57655460174,https://www.airlines-manager.com/aircraft/show/82543907,13:00,19:14,112,"$185,783.00","$163,229.00","$1,457.40","$26,186.47"
IAH - CAK,57662009330,I-BTV-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/57662009330,https://www.airlines-manager.com/aircraft/show/114373409,16:00,22:14,310,"$393,368.00","$358,933.00","$1,157.85","$57,582.83"
IAH - CAK,57674153208,I-BTV-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/57674153208,https://www.airlines-manager.com/aircraft/show/114373410,22:15,4:29,298,"$384,310.00","$350,232.00","$1,175.28","$56,186.95"
IAH - CHS,57632964468,I-RIC-SDF-5,ERJ-175,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/57632964468,https://www.airlines-manager.com/aircraft/show/107467211,1:30,7:14,112,"$170,218.00","$149,061.00","$1,330.90","$25,999.01"
IAH - CHS,57632964469,I-RIC-SDF-4,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/57632964469,https://www.airlines-manager.com/aircraft/show/107467131,3:30,9:14,310,"$359,135.00","$326,559.00","$1,053.42","$56,957.97"
IAH - CHS,57651685773,I-RIC-SDF-3,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/57651685773,https://www.airlines-manager.com/aircraft/show/107467132,12:00,17:44,310,"$359,135.00","$326,559.00","$1,053.42","$56,957.97"
IAH - CHS,57665599522,I-RIC-SDF-2,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/57665599522,https://www.airlines-manager.com/aircraft/show/107467133,17:15,22:59,310,"$359,135.00","$326,559.00","$1,053.42","$56,957.97"
IAH - CHS,57675937106,I-RIC-SDF-1,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/57675937106,https://www.airlines-manager.com/aircraft/show/107467134,23:45,5:29,310,"359,135$","326,559$","$1,053.42","$56,957.97"
IAH - CID,57651685632,I-EUG-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/57651685632,https://www.airlines-manager.com/aircraft/show/119525218,11:00,16:29,320,"342,285$","307,102$",$959.69,"$56,006.44"
IAH - CID,57655460104,I-EUG-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/57655460104,https://www.airlines-manager.com/aircraft/show/119525217,13:00,18:29,320,"342,285$","307,102$",$959.69,"$56,006.44"
IAH - CID,57668758356,I-EUG-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/57668758356,https://www.airlines-manager.com/aircraft/show/119525219,19:45,1:14,320,"342,285$","307,102$",$959.69,"$56,006.44"
IAH - CID,57671659330,I-EUG-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/57671659330,https://www.airlines-manager.com/aircraft/show/119525220,21:45,3:14,306,"333,242$","298,378$",$975.09,"$54,415.44"
IAH - CLE,57632964536,I-CLE-STL-3,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/57632964536,https://www.airlines-manager.com/aircraft/show/103600702,2:00,8:14,310,"401,042$","364,331$","$1,175.26","$58,448.82"
IAH - CLE,57644525177,I-CLE-STL-2,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/57644525177,https://www.airlines-manager.com/aircraft/show/103600701,7:45,13:59,310,"401,042$","364,331$","$1,175.26","$58,448.82"
IAH - CLE,57658665083,I-CLE-STL-1,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/57658665083,https://www.airlines-manager.com/aircraft/show/103600700,14:00,20:14,310,"401,042$","364,331$","$1,175.26","$58,448.82"
IAH - CLE,57662009241,I-CLE-STL-5 B,A319-100,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/57662009241,https://www.airlines-manager.com/aircraft/show/110582844,15:30,21:44,198,"302,827$","273,411$","$1,380.86","$43,862.73"
IAH - CLE,57668758267,I-CLE-STL-4,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/57668758267,https://www.airlines-manager.com/aircraft/show/88725601,19:00,1:14,310,"$401,042.00","$364,331.00","$1,175.26","$58,448.82"
IAH - CLT,57632964693,I-SLC-CLT-3,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/57632964693,https://www.airlines-manager.com/aircraft/show/93094697,3:45,9:29,310,"$361,710.00","$319,410.00","$1,030.35","$55,711.05"
IAH - CLT,57648263096,I-SLC-CLT-2,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/57648263096,https://www.airlines-manager.com/aircraft/show/93094698,10:00,15:44,310,"$361,710.00","$319,410.00","$1,030.35","$55,711.05"
IAH - CLT,57651685793,I-SLC-CLT-6,ERJ-175,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/57651685793,https://www.airlines-manager.com/aircraft/show/93100455,12:00,17:44,112,"$171,081.00","$144,110.00","$1,286.70","$25,135.47"
IAH - CLT,57662009396,I-SLC-CLT-1,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/57662009396,https://www.airlines-manager.com/aircraft/show/93094699,16:45,22:29,310,"$361,710.00","$319,410.00","$1,030.35","$55,711.05"
IAH - CLT,57665599706,I-SLC-CLT-5,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/57665599706,https://www.airlines-manager.com/aircraft/show/93094695,18:45,0:29,310,"$361,710.00","$319,410.00","$1,030.35","$55,711.05"
IAH - CLT,57674153162,I-SLC-CLT-4,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/57674153162,https://www.airlines-manager.com/aircraft/show/93094696,22:00,3:44,310,"$361,710.00","$319,410.00","$1,030.35","$55,711.05"
IAH - CMH,57640828170,I-RNO-MCI-1,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/57640828170,https://www.airlines-manager.com/aircraft/show/103882355,7:00,12:59,310,"$379,267.00","$344,000.00","$1,109.68","$57,493.04"
IAH - CMH,57651685660,I-RNO-MCI-4,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/57651685660,https://www.airlines-manager.com/aircraft/show/103882358,11:00,16:59,310,"379,267$","344,000$","$1,109.68","$57,493.04"
IAH - CMH,57651685661,I-RNO-MCI-5,ERJ-175,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/57651685661,https://www.airlines-manager.com/aircraft/show/105099861,12:00,17:59,112,"179,105$","156,225$","$1,394.87","$26,110.03"
IAH - CMH,57668758304,I-RNO-MCI-3,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/57668758304,https://www.airlines-manager.com/aircraft/show/103882357,19:15,1:14,310,"379,267$","344,000$","$1,109.68","$57,493.04"
IAH - CMH,57674153296,I-RNO-MCI-2,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/57674153296,https://www.airlines-manager.com/aircraft/show/103882356,23:00,4:59,310,"379,267$","344,000$","$1,109.68","$57,493.04"
IAH - COS,57632964502,I-RNO-MCI-1,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/57632964502,https://www.airlines-manager.com/aircraft/show/103882355,1:45,6:59,310,"$331,840.00","$298,925.00",$964.27,"$57,119.43"
IAH - COS,57637373213,I-RNO-MCI-4,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/57637373213,https://www.airlines-manager.com/aircraft/show/103882358,5:45,10:59,310,"$331,840.00","$298,925.00",$964.27,"$57,119.43"
IAH - COS,57658665086,I-RNO-MCI-3,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/57658665086,https://www.airlines-manager.com/aircraft/show/103882357,14:00,19:14,310,"$331,840.00","$298,925.00",$964.27,"$57,119.43"
IAH - COS,57665599579,I-RNO-MCI-2,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/57665599579,https://www.airlines-manager.com/aircraft/show/103882356,17:45,22:59,310,"$331,840.00","$298,925.00",$964.27,"$57,119.43"
IAH - COS,57674153283,I-RNO-MCI-5,ERJ-175,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/57674153283,https://www.airlines-manager.com/aircraft/show/105099861,22:45,3:59,112,"$157,707.00","$136,546.00","$1,219.16","$26,091.59"
IAH - CUN,57632964220,I-56A-4 E,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/57632964220,https://www.airlines-manager.com/aircraft/show/106676235,1:00,5:59,648,"$626,023.00","$572,914.00",$884.13,"$114,966.02"
IAH - CUN,57655460013,I-56A-5 E,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/57655460013,https://www.airlines-manager.com/aircraft/show/106676236,12:30,17:29,648,"$626,023.00","$572,914.00",$884.13,"$114,966.02"
IAH - CUN,57671659187,I-56A-7 E,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/57671659187,https://www.airlines-manager.com/aircraft/show/106676238,20:30,1:29,648,"$626,023.00","$572,914.00",$884.13,"$114,966.02"
IAH - CVG,57632963995,I-SMF-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/57632963995,https://www.airlines-manager.com/aircraft/show/99093332,0:15,5:44,320,"$350,135.00","$309,434.00",$966.98,"$56,431.73"
IAH - CVG,57632963996,I-SMF-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/57632963996,https://www.airlines-manager.com/aircraft/show/99093333,4:00,9:29,320,"$350,135.00","$309,434.00",$966.98,"$56,431.73"
IAH - CVG,57644525191,I-SMF-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/57644525191,https://www.airlines-manager.com/aircraft/show/99093334,8:00,13:29,320,"$350,135.00","$309,434.00",$966.98,"$56,431.73"
IAH - CVG,57658665049,I-SMF-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/57658665049,https://www.airlines-manager.com/aircraft/show/99093335,14:00,19:29,320,"$350,135.00","$309,434.00",$966.98,"$56,431.73"
IAH - CVG,57662009336,I-SMF-CVG-5 B,A319-100,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/57662009336,https://www.airlines-manager.com/aircraft/show/106499070,16:00,21:29,198,"$265,556.00","$237,029.00","$1,197.12","$43,227.17"
IAH - DAB,57632964347,I-ILM-SRQ-4,A321-200,https://www.airlines-manager.com/network/showline/50666457,https://www.airlines-manager.com/network/showflight/57632964347,https://www.airlines-manager.com/aircraft/show/120452415,1:15,6:44,310,"344,468$","312,587$","$1,008.35","$57,006.75"
IAH - DAB,57648262991,I-ILM-SRQ-3,A321-200,https://www.airlines-manager.com/network/showline/50666457,https://www.airlines-manager.com/network/showflight/57648262991,https://www.airlines-manager.com/aircraft/show/120452416,9:00,14:29,310,"344,468$","312,587$","$1,008.35","$57,006.75"
IAH - DAB,57658665142,I-ILM-SRQ-2,A321-200,https://www.airlines-manager.com/network/showline/50666457,https://www.airlines-manager.com/network/showflight/57658665142,https://www.airlines-manager.com/aircraft/show/120452417,14:15,19:44,310,"344,468$","312,587$","$1,008.35","$57,006.75"
IAH - DAB,57668758336,I-ILM-SRQ-1,A321-200,https://www.airlines-manager.com/network/showline/50666457,https://www.airlines-manager.com/network/showflight/57668758336,https://www.airlines-manager.com/aircraft/show/120452418,19:30,0:59,281,"325,577$","294,379$","$1,047.61","$53,686.14"
IAH - DEN,57651685737,I-SEA-DEN-5,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/57651685737,https://www.airlines-manager.com/aircraft/show/105562975,12:00,17:29,338,"378,458$","325,224$",$962.20,"$59,311.37"
IAH - DEN,57655460045,I-SEA-DEN-1,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/57655460045,https://www.airlines-manager.com/aircraft/show/105562971,13:00,18:29,338,"$378,458.00","$325,224.00",$962.20,"$59,311.37"
IAH - DEN,57658665124,I-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/57658665124,https://www.airlines-manager.com/aircraft/show/120293379,14:00,19:29,0,"$97,604.00","$23,471.00",$0.00,"$4,280.43"
IAH - DEN,57674153219,I-SEA-DEN-2,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/57674153219,https://www.airlines-manager.com/aircraft/show/105562972,22:30,3:59,338,"$378,458.00","$325,224.00",$962.20,"$59,311.37"
IAH - DEN,57674153220,I-SEA-DEN-3,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/57674153220,https://www.airlines-manager.com/aircraft/show/105562973,23:00,4:29,338,"$378,458.00","$325,224.00",$962.20,"$59,311.37"
IAH - DEN,57675937062,I-SEA-DEN-4,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/57675937062,https://www.airlines-manager.com/aircraft/show/105562974,23:30,4:59,338,"378,458$","325,224$",$962.20,"$59,311.37"
IAH - DFW,57632964257,I-SMF-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/57632964257,https://www.airlines-manager.com/aircraft/show/99093333,1:00,3:59,320,"129,311$","81,717$",$255.37,"$27,391.17"
IAH - DFW,57637373149,I-SMF-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/57637373149,https://www.airlines-manager.com/aircraft/show/99093334,5:00,7:59,320,"129,311$","81,717$",$255.37,"$27,391.17"
IAH - DFW,57651685614,I-SMF-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/57651685614,https://www.airlines-manager.com/aircraft/show/99093335,11:00,13:59,320,"129,311$","81,717$",$255.37,"$27,391.17"
IAH - DFW,57655460164,I-SMF-CVG-5 B,A319-100,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/57655460164,https://www.airlines-manager.com/aircraft/show/106499070,13:00,15:59,198,"97,620$","65,532$",$330.97,"$21,966.03"
IAH - DFW,57658665141,I-YEG-BUR-4,A321-200,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/57658665141,https://www.airlines-manager.com/aircraft/show/117273341,14:15,17:14,310,"$130,762.00","$90,664.00",$292.46,"$30,390.17"
IAH - DFW,57671659273,I-SMF-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/57671659273,https://www.airlines-manager.com/aircraft/show/99093332,21:15,0:14,320,"$129,311.00","$81,717.00",$255.37,"$27,391.17"
IAH - DSM,57632964654,I-FAT-SAV-1,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/57632964654,https://www.airlines-manager.com/aircraft/show/110424761,3:15,8:29,320,"$333,281.00","$298,351.00",$932.35,"$57,009.75"
IAH - DSM,57644525268,I-FAT-SAV-4,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/57644525268,https://www.airlines-manager.com/aircraft/show/110424758,8:45,13:59,320,"$333,281.00","$298,351.00",$932.35,"$57,009.75"
IAH - DSM,57658665060,I-FAT-SAV-3,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/57658665060,https://www.airlines-manager.com/aircraft/show/110424759,14:00,19:14,320,"$333,281.00","$298,351.00",$932.35,"$57,009.75"
IAH - DSM,57665599668,I-FAT-SAV-2,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/57665599668,https://www.airlines-manager.com/aircraft/show/110424760,18:30,23:44,320,"$333,281.00","$298,351.00",$932.35,"$57,009.75"
IAH - DTW,57632964086,I-MIA-ORD-1,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/57632964086,https://www.airlines-manager.com/aircraft/show/90183184,0:30,6:44,310,"$395,838.00","$351,081.00","$1,132.52","$56,323.16"
IAH - DTW,57632964088,I-MIA-ORD-5,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/57632964088,https://www.airlines-manager.com/aircraft/show/90183180,2:30,8:44,310,"$395,838.00","$351,081.00","$1,132.52","$56,323.16"
IAH - DTW,57640828097,I-MIA-ORD-4,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/57640828097,https://www.airlines-manager.com/aircraft/show/90183181,6:00,12:14,310,"$395,838.00","$351,081.00","$1,132.52","$56,323.16"
IAH - DTW,57655460126,I-MIA-ORD-3,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/57655460126,https://www.airlines-manager.com/aircraft/show/90183182,13:00,19:14,310,"$395,838.00","$351,081.00","$1,132.52","$56,323.16"
IAH - DTW,57665599703,I-MIA-ORD-2,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/57665599703,https://www.airlines-manager.com/aircraft/show/90183183,18:45,0:59,310,"$395,838.00","$351,081.00","$1,132.52","$56,323.16"
IAH - DTW,57671659230,I-MIA-ORD-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/57671659230,https://www.airlines-manager.com/aircraft/show/90140936,20:45,2:59,136,"$188,161.00","$159,615.00","$1,173.64","$25,606.68"
IAH - ECP,57632964298,I-ILM-SRQ-1,A321-200,https://www.airlines-manager.com/network/showline/50666459,https://www.airlines-manager.com/network/showflight/57632964298,https://www.airlines-manager.com/aircraft/show/120452418,1:00,5:14,310,"$272,555.00","$244,634.00",$789.14,"$57,787.56"
IAH - ECP,57648263020,I-ILM-SRQ-4,A321-200,https://www.airlines-manager.com/network/showline/50666459,https://www.airlines-manager.com/network/showflight/57648263020,https://www.airlines-manager.com/aircraft/show/120452415,9:30,13:44,310,"$272,555.00","$244,634.00",$789.14,"$57,787.56"
IAH - ECP,57658665157,I-ILM-SRQ-3,A321-200,https://www.airlines-manager.com/network/showline/50666459,https://www.airlines-manager.com/network/showflight/57658665157,https://www.airlines-manager.com/aircraft/show/120452416,14:30,18:44,310,"$272,555.00","$244,634.00",$789.14,"$57,787.56"
IAH - ECP,57668758368,I-ILM-SRQ-2,A321-200,https://www.airlines-manager.com/network/showline/50666459,https://www.airlines-manager.com/network/showflight/57668758368,https://www.airlines-manager.com/aircraft/show/120452417,19:45,23:59,310,"$272,555.00","$244,634.00",$789.14,"$57,787.56"
IAH - ELP,57632964679,I-PBI-RSW-3,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/57632964679,https://www.airlines-manager.com/aircraft/show/104717245,3:30,8:14,310,"$300,686.00","$270,329.00",$872.03,"$57,111.76"
IAH - ELP,57651685665,I-PBI-RSW-2,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/57651685665,https://www.airlines-manager.com/aircraft/show/104717246,11:00,15:44,310,"$300,686.00","$270,329.00",$872.03,"$57,111.76"
IAH - ELP,57662009397,I-PBI-RSW-1,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/57662009397,https://www.airlines-manager.com/aircraft/show/104717247,16:45,21:29,310,"$300,686.00","$270,329.00",$872.03,"$57,111.76"
IAH - ELP,57668758283,I-PBI-RSW-5,ERJ-175,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/57668758283,https://www.airlines-manager.com/aircraft/show/104743902,19:00,23:44,112,"$143,217.00","$123,840.00","$1,105.71","$26,163.38"
IAH - ELP,57674153166,I-PBI-RSW-4,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/57674153166,https://www.airlines-manager.com/aircraft/show/104717244,22:00,2:44,310,"$300,686.00","$270,329.00",$872.03,"$57,111.76"
IAH - EUG,57632964322,I-EUG-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/57632964322,https://www.airlines-manager.com/aircraft/show/119525219,1:15,10:14,320,"$571,197.00","$521,465.00","$1,629.58","$58,048.05"
IAH - EUG,57632964323,I-EUG-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/57632964323,https://www.airlines-manager.com/aircraft/show/119525220,3:15,12:14,320,"$571,197.00","$521,465.00","$1,629.58","$58,048.05"
IAH - EUG,57651685701,I-EUG-MFR-5,ERJ-175,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/57651685701,https://www.airlines-manager.com/aircraft/show/119525248,11:00,20:14,112,"$269,366.00","$239,235.00","$2,136.03","$25,909.93"
IAH - EUG,57662009372,I-EUG-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/57662009372,https://www.airlines-manager.com/aircraft/show/119525218,16:30,1:29,320,"$571,197.00","$521,465.00","$1,629.58","$58,048.05"
IAH - EUG,57665599670,I-EUG-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/57665599670,https://www.airlines-manager.com/aircraft/show/119525217,18:30,3:29,320,"$571,197.00","$521,465.00","$1,629.58","$58,048.05"
IAH - EZE,57632964714,I-84A-2 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/57632964714,https://www.airlines-manager.com/aircraft/show/89439130,4:00,0:29,932,"$3,382,163.00","$3,084,901.00","$3,309.98","$150,605.42"
IAH - EZE,57637373198,I-84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/57637373198,https://www.airlines-manager.com/aircraft/show/89124075,5:30,1:59,932,"$3,382,163.00","$3,084,901.00","$3,309.98","$150,605.42"
IAH - FAR,57632964443,I-MSO-FAR-4,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/57632964443,https://www.airlines-manager.com/aircraft/show/110424754,1:30,8:14,320,"$419,119.00","$378,672.00","$1,183.35","$56,238.42"
IAH - FAR,57637373067,I-MSO-FAR-3,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/57637373067,https://www.airlines-manager.com/aircraft/show/110424755,4:15,10:59,320,"$419,119.00","$378,672.00","$1,183.35","$56,238.42"
IAH - FAR,57651685750,I-MSO-FAR-2,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/57651685750,https://www.airlines-manager.com/aircraft/show/110424756,12:00,18:44,320,"$419,119.00","$378,672.00","$1,183.35","$56,238.42"
IAH - FAR,57674153157,I-MSO-FAR-1,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/57674153157,https://www.airlines-manager.com/aircraft/show/110424757,22:00,4:44,320,"$419,119.00","$378,672.00","$1,183.35","$56,238.42"
IAH - FAT,57632964703,I-FAT-SAV-2,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/57632964703,https://www.airlines-manager.com/aircraft/show/110424760,4:00,11:44,320,"$499,203.00","$453,750.00","$1,417.97","$58,674.57"
IAH - FAT,57658665061,I-FAT-SAV-1,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/57658665061,https://www.airlines-manager.com/aircraft/show/110424761,14:00,21:44,320,"$499,203.00","$453,750.00","$1,417.97","$58,674.57"
IAH - FAT,57665599642,I-FAT-SAV-4,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/57665599642,https://www.airlines-manager.com/aircraft/show/110424758,18:15,1:59,320,"$499,203.00","$453,750.00","$1,417.97","$58,674.57"
IAH - FAT,57675937068,I-FAT-SAV-3,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/57675937068,https://www.airlines-manager.com/aircraft/show/110424759,23:30,7:14,320,"499,203$","453,750$","$1,417.97","$58,674.57"
IAH - FCA,57632964486,I-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/57632964486,https://www.airlines-manager.com/aircraft/show/117273391,1:45,9:59,320,"$523,626.00","$476,436.00","$1,488.86","$57,866.72"
IAH - FCA,57651685630,I-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/57651685630,https://www.airlines-manager.com/aircraft/show/117273390,11:00,19:14,320,"$523,626.00","$476,436.00","$1,488.86","$57,866.72"
IAH - FCA,57662009356,I-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/57662009356,https://www.airlines-manager.com/aircraft/show/117273392,16:15,0:29,320,"$523,626.00","$476,436.00","$1,488.86","$57,866.72"
IAH - FCA,57665599643,I-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/57665599643,https://www.airlines-manager.com/aircraft/show/117273389,18:15,2:29,312,"515,576$","468,733$","$1,502.35","$56,931.13"
IAH - FLL,57632964091,I-SLC-CLT-5,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/57632964091,https://www.airlines-manager.com/aircraft/show/93094695,0:30,6:14,310,"$368,422.00","$331,194.00","$1,068.37","$57,766.40"
IAH - FLL,57632964094,I-SLC-CLT-4,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/57632964094,https://www.airlines-manager.com/aircraft/show/93094696,3:45,9:29,310,"$368,422.00","$331,194.00","$1,068.37","$57,766.40"
IAH - FLL,57648263095,I-SLC-CLT-3,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/57648263095,https://www.airlines-manager.com/aircraft/show/93094697,10:00,15:44,310,"$368,422.00","$331,194.00","$1,068.37","$57,766.40"
IAH - FLL,57662009253,I-SLC-CLT-2,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/57662009253,https://www.airlines-manager.com/aircraft/show/93094698,15:45,21:29,310,"$368,422.00","$331,194.00","$1,068.37","$57,766.40"
IAH - FLL,57665599586,I-SLC-CLT-6,ERJ-175,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/57665599586,https://www.airlines-manager.com/aircraft/show/93100455,17:45,23:29,112,"174,669$","150,649$","$1,345.08","$26,275.99"
IAH - FLL,57674153237,I-SLC-CLT-1,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/57674153237,https://www.airlines-manager.com/aircraft/show/93094699,22:30,4:14,310,"368,422$","331,194$","$1,068.37","$57,766.40"
IAH - FSD,57637373125,I-MSO-FAR-1,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/57637373125,https://www.airlines-manager.com/aircraft/show/110424757,4:45,10:29,320,"363,297$","326,462$","$1,020.19","$56,941.05"
IAH - FSD,57644525215,I-MSO-FAR-4,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/57644525215,https://www.airlines-manager.com/aircraft/show/110424754,8:15,13:59,320,"363,297$","326,462$","$1,020.19","$56,941.05"
IAH - FSD,57651685624,I-MSO-FAR-3,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/57651685624,https://www.airlines-manager.com/aircraft/show/110424755,11:00,16:44,320,"363,297$","326,462$","$1,020.19","$56,941.05"
IAH - FSD,57665599694,I-MSO-FAR-2,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/57665599694,https://www.airlines-manager.com/aircraft/show/110424756,18:45,0:29,286,"$339,841.00","$303,869.00","$1,062.48","$53,000.41"
IAH - GDL,57637373121,I-YYC-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/57637373121,https://www.airlines-manager.com/aircraft/show/114266977,4:45,9:59,400,"$439,742.00","$397,229.00",$993.07,"$75,903.63"
IAH - GDL,57651685546,I-YYC-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/57651685546,https://www.airlines-manager.com/aircraft/show/114266980,10:45,15:59,400,"$439,742.00","$397,229.00",$993.07,"$75,903.63"
IAH - GDL,57651685547,I-YYC-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/57651685547,https://www.airlines-manager.com/aircraft/show/114266979,12:00,17:14,400,"$439,742.00","$397,229.00",$993.07,"$75,903.63"
IAH - GDL,57668758384,I-YYC-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/57668758384,https://www.airlines-manager.com/aircraft/show/114266978,20:00,1:14,357,"$398,605.00","$357,236.00","$1,000.66","$68,261.66"
IAH - GIG,57632963882,I-84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/57632963882,https://www.airlines-manager.com/aircraft/show/88905140,0:00,20:14,932,"$3,392,936.00","$3,090,291.00","$3,315.76","$152,732.67"
IAH - GIG,57632963883,I-84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/57632963883,https://www.airlines-manager.com/aircraft/show/89124074,2:00,22:14,932,"$3,392,936.00","$3,090,291.00","$3,315.76","$152,732.67"
IAH - GRR,57632964346,I-GRR-MSN-3,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/57632964346,https://www.airlines-manager.com/aircraft/show/117273346,1:15,7:29,310,"$391,082.00","$356,324.00","$1,149.43","$57,164.28"
IAH - GRR,57640828185,I-GRR-MSN-2,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/57640828185,https://www.airlines-manager.com/aircraft/show/117273347,7:15,13:29,310,"$391,082.00","$356,324.00","$1,149.43","$57,164.28"
IAH - GRR,57658665113,I-GRR-MSN-1,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/57658665113,https://www.airlines-manager.com/aircraft/show/117273348,14:00,20:14,310,"$391,082.00","$356,324.00","$1,149.43","$57,164.28"
IAH - GRR,57662009333,I-GRR-MSN-4,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/57662009333,https://www.airlines-manager.com/aircraft/show/117273345,16:00,22:14,310,"$391,082.00","$356,324.00","$1,149.43","$57,164.28"
IAH - GRU,57632964222,I-56A-7 E,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/57632964222,https://www.airlines-manager.com/aircraft/show/106676238,1:00,20:29,648,"$2,489,104.00","$2,319,462.00","$3,579.42","$119,048.52"
IAH - GRU,57651685585,I-56A-2 E,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/57651685585,https://www.airlines-manager.com/aircraft/show/106676233,11:00,6:29,648,"$2,489,104.00","$2,319,462.00","$3,579.42","$119,048.52"
IAH - GRU,57662009405,I-56A-4 E,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/57662009405,https://www.airlines-manager.com/aircraft/show/106676235,17:00,12:29,648,"$2,489,104.00","$2,319,462.00","$3,579.42","$119,048.52"
IAH - GSO,57632964491,I-SYR-ROC-1,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/57632964491,https://www.airlines-manager.com/aircraft/show/119525224,1:45,7:44,320,"$375,703.00","$337,351.00","$1,054.22","$56,381.78"
IAH - GSO,57632964492,I-SYR-ROC-4,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/57632964492,https://www.airlines-manager.com/aircraft/show/119525221,2:45,8:44,320,"$375,703.00","$337,351.00","$1,054.22","$56,381.78"
IAH - GSO,57651685634,I-SYR-ROC-3,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/57651685634,https://www.airlines-manager.com/aircraft/show/119525222,11:00,16:59,320,"$375,703.00","$337,351.00","$1,054.22","$56,381.78"
IAH - GSO,57665599644,I-SYR-ROC-2,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/57665599644,https://www.airlines-manager.com/aircraft/show/119525223,18:15,0:14,320,"$375,703.00","$337,351.00","$1,054.22","$56,381.78"
IAH - IAD,57632964684,I-IAD-SAN-6,ERJ-175,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/57632964684,https://www.airlines-manager.com/aircraft/show/105400635,3:30,10:14,112,"$199,547.00","$171,293.00","$1,529.40","$25,439.55"
IAH - IAD,57640828141,I-IAD-SAN-2,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/57640828141,https://www.airlines-manager.com/aircraft/show/98578923,6:45,13:29,320,"$423,598.00","$374,014.00","$1,168.79","$55,546.63"
IAH - IAD,57648263029,I-IAD-SAN-5,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/57648263029,https://www.airlines-manager.com/aircraft/show/98578920,9:45,16:29,320,"$423,598.00","$374,014.00","$1,168.79","$55,546.63"
IAH - IAD,57655460082,I-IAD-SAN-1,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/57655460082,https://www.airlines-manager.com/aircraft/show/98578924,13:00,19:44,320,"$423,598.00","$374,014.00","$1,168.79","$55,546.63"
IAH - IAD,57665599603,I-IAD-SAN-4,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/57665599603,https://www.airlines-manager.com/aircraft/show/98578921,18:00,0:44,320,"$423,598.00","$374,014.00","$1,168.79","$55,546.63"
IAH - IAD,57671659294,I-IAD-SAN-3,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/57671659294,https://www.airlines-manager.com/aircraft/show/98578922,21:30,4:14,320,"$423,598.00","$374,014.00","$1,168.79","$55,546.63"
IAH - ICT,57648263031,I-FAT-SAV-1,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/57648263031,https://www.airlines-manager.com/aircraft/show/110424761,9:45,13:59,320,"$250,907.00","$219,323.00",$685.38,"$51,808.58"
IAH - ICT,57658665059,I-FAT-SAV-4,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/57658665059,https://www.airlines-manager.com/aircraft/show/110424758,14:00,18:14,320,"$250,907.00","$219,323.00",$685.38,"$51,808.58"
IAH - ICT,57668758293,I-FAT-SAV-3,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/57668758293,https://www.airlines-manager.com/aircraft/show/110424759,19:15,23:29,320,"$250,907.00","$219,323.00",$685.38,"$51,808.58"
IAH - ICT,57675937096,I-FAT-SAV-2,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/57675937096,https://www.airlines-manager.com/aircraft/show/110424760,23:45,3:59,320,"$250,907.00","$219,323.00",$685.38,"$51,808.58"
IAH - ILM,57632963870,I-ILM-SRQ-2,A321-200,https://www.airlines-manager.com/network/showline/50666455,https://www.airlines-manager.com/network/showflight/57632963870,https://www.airlines-manager.com/aircraft/show/120452417,0:00,6:14,310,"$394,081.00","$360,168.00","$1,161.83","$57,780.96"
IAH - ILM,57644525205,I-ILM-SRQ-1,A321-200,https://www.airlines-manager.com/network/showline/50666455,https://www.airlines-manager.com/network/showflight/57644525205,https://www.airlines-manager.com/aircraft/show/120452418,8:00,14:14,310,"$394,081.00","$360,168.00","$1,161.83","$57,780.96"
IAH - ILM,57655460209,I-ILM-SRQ-4,A321-200,https://www.airlines-manager.com/network/showline/50666455,https://www.airlines-manager.com/network/showflight/57655460209,https://www.airlines-manager.com/aircraft/show/120452415,13:45,19:59,310,"$394,081.00","$360,168.00","$1,161.83","$57,780.96"
IAH - ILM,57665599715,I-ILM-SRQ-3,A321-200,https://www.airlines-manager.com/network/showline/50666455,https://www.airlines-manager.com/network/showflight/57665599715,https://www.airlines-manager.com/aircraft/show/120452416,18:45,0:59,310,"$394,081.00","$360,168.00","$1,161.83","$57,780.96"
IAH - IND,57632963863,I-PIT-RDU-1,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/57632963863,https://www.airlines-manager.com/aircraft/show/100684074,0:00,5:29,310,"$344,386.00","$310,520.00","$1,001.68","$56,629.79"
IAH - IND,57637373133,I-PIT-RDU-5 B,A319-100,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/57637373133,https://www.airlines-manager.com/aircraft/show/110582845,4:45,10:14,198,"$261,047.00","$233,918.00","$1,181.40","$42,659.82"
IAH - IND,57640828099,I-PIT-RDU-4,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/57640828099,https://www.airlines-manager.com/aircraft/show/100684071,6:00,11:29,310,"$344,386.00","$310,520.00","$1,001.68","$56,629.79"
IAH - IND,57651685720,I-PIT-RDU-3,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/57651685720,https://www.airlines-manager.com/aircraft/show/100684072,11:30,16:59,310,"$344,386.00","$310,520.00","$1,001.68","$56,629.79"
IAH - IND,57665599577,I-PIT-RDU-2,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/57665599577,https://www.airlines-manager.com/aircraft/show/100684073,17:45,23:14,310,"$344,386.00","$310,520.00","$1,001.68","$56,629.79"
IAH - JAC,57632964522,I-SNA-SBA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/57632964522,https://www.airlines-manager.com/aircraft/show/119525225,2:00,8:59,272,"$397,922.00","$370,446.00","$1,361.93","$53,047.16"
IAH - JAC,57651685555,I-SNA-SBA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/57651685555,https://www.airlines-manager.com/aircraft/show/119525227,11:00,17:59,272,"$397,922.00","$370,446.00","$1,361.93","$53,047.16"
IAH - JAC,57655460034,I-SNA-SBA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/57655460034,https://www.airlines-manager.com/aircraft/show/119525228,13:00,19:59,272,"$397,922.00","$370,446.00","$1,361.93","$53,047.16"
IAH - JAC,57665599686,I-SNA-SBA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/57665599686,https://www.airlines-manager.com/aircraft/show/119525226,18:45,1:44,272,"$397,922.00","$370,446.00","$1,361.93","$53,047.16"
IAH - JAC,57671659205,I-SNA-SBA-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/57671659205,https://www.airlines-manager.com/aircraft/show/119525229,20:45,3:44,272,"$397,922.00","$370,446.00","$1,361.93","$53,047.16"
IAH - JAN,57632964061,I-MSO-FAR-2,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/57632964061,https://www.airlines-manager.com/aircraft/show/110424756,0:30,3:59,320,"$177,596.00","$150,145.00",$469.20,"$43,103.83"
IAH - JAN,57648263150,I-MSO-FAR-1,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/57648263150,https://www.airlines-manager.com/aircraft/show/110424757,10:30,13:59,320,"$177,596.00","$150,145.00",$469.20,"$43,103.83"
IAH - JAN,57658665057,I-MSO-FAR-4,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/57658665057,https://www.airlines-manager.com/aircraft/show/110424754,14:00,17:29,320,"$177,596.00","$150,145.00",$469.20,"$43,103.83"
IAH - JAN,57662009391,I-MSO-FAR-3,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/57662009391,https://www.airlines-manager.com/aircraft/show/110424755,16:45,20:14,312,"$174,904.00","$147,528.00",$472.85,"$42,352.54"
IAH - JAX,57632964632,I-PBI-RSW-1,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/57632964632,https://www.airlines-manager.com/aircraft/show/104717247,3:00,8:14,310,"$338,093.00","$305,865.00",$986.66,"$58,445.54"
IAH - JAX,57644525208,I-PBI-RSW-5,ERJ-175,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/57644525208,https://www.airlines-manager.com/aircraft/show/104743902,8:00,13:14,112,"$160,251.00","$139,491.00","$1,245.46","$26,654.33"
IAH - JAX,57651685663,I-PBI-RSW-4,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/57651685663,https://www.airlines-manager.com/aircraft/show/104717244,11:00,16:14,310,"$338,093.00","$305,865.00",$986.66,"$58,445.54"
IAH - JAX,57662009379,I-PBI-RSW-3,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/57662009379,https://www.airlines-manager.com/aircraft/show/104717245,16:30,21:44,310,"$338,093.00","$305,865.00",$986.66,"$58,445.54"
IAH - JAX,57671659279,I-PBI-RSW-2,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/57671659279,https://www.airlines-manager.com/aircraft/show/104717246,21:15,2:29,310,"$338,093.00","$305,865.00",$986.66,"$58,445.54"
IAH - JFK,57632964525,I-JFK-LAX-5,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/57632964525,https://www.airlines-manager.com/aircraft/show/89233038,2:00,9:29,400,"$622,836.00","$549,527.00","$1,373.82","$73,433.45"
IAH - JFK,57651685588,I-JFK-LAX-1,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/57651685588,https://www.airlines-manager.com/aircraft/show/88400798,11:00,18:29,400,"$622,836.00","$549,527.00","$1,373.82","$73,433.45"
IAH - JFK,57665599638,I-JFK-LAX-3,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/57665599638,https://www.airlines-manager.com/aircraft/show/88400800,18:15,1:44,400,"$622,836.00","$549,527.00","$1,373.82","$73,433.45"
IAH - JFK,57668758288,I-JFK-LAX-2,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/57668758288,https://www.airlines-manager.com/aircraft/show/88400799,19:15,2:44,400,"$622,836.00","$549,527.00","$1,373.82","$73,433.45"
IAH - JFK,57671659269,I-JFK-LAX-4,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/57671659269,https://www.airlines-manager.com/aircraft/show/88400801,21:15,4:44,400,"$622,836.00","$549,527.00","$1,373.82","$73,433.45"
IAH - LAS,57632964701,I-LAS-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/57632964701,https://www.airlines-manager.com/aircraft/show/96256511,4:00,10:44,320,"$430,201.00","$368,720.00","$1,152.25","$54,760.40"
IAH - LAS,57637373146,I-LAS-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/57637373146,https://www.airlines-manager.com/aircraft/show/96250652,5:00,11:44,320,"$430,201.00","$368,720.00","$1,152.25","$54,760.40"
IAH - LAS,57637373147,I-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/57637373147,https://www.airlines-manager.com/aircraft/show/96990010,5:15,11:59,112,"$202,299.00","$168,005.00","$1,500.04","$24,951.24"
IAH - LAS,57651685611,I-LAS-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/57651685611,https://www.airlines-manager.com/aircraft/show/96177955,11:00,17:44,320,"$430,201.00","$368,720.00","$1,152.25","$54,760.40"
IAH - LAS,57658665168,I-LAS-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/57658665168,https://www.airlines-manager.com/aircraft/show/95894466,14:45,21:29,320,"$430,201.00","$368,720.00","$1,152.25","$54,760.40"
IAH - LAS,57665599557,I-LAS-ATL-6,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/57665599557,https://www.airlines-manager.com/aircraft/show/82323704,17:30,0:14,112,"$202,299.00","$168,005.00","$1,500.04","$24,951.24"
IAH - LAS,57671659209,I-LAS-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/57671659209,https://www.airlines-manager.com/aircraft/show/96183549,20:45,3:29,320,"$430,201.00","$368,720.00","$1,152.25","$54,760.40"
IAH - LAX,57632964598,I-JFK-LAX-2,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/57632964598,https://www.airlines-manager.com/aircraft/show/88400799,2:45,9:59,400,"$610,729.00","$538,556.00","$1,346.39","$74,454.75"
IAH - LAX,57632964599,I-JFK-LAX-1,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/57632964599,https://www.airlines-manager.com/aircraft/show/88400798,3:45,10:59,400,"$610,729.00","$538,556.00","$1,346.39","$74,454.75"
IAH - LAX,57637373119,I-JFK-LAX-4,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/57637373119,https://www.airlines-manager.com/aircraft/show/88400801,4:45,11:59,400,"$610,729.00","$538,556.00","$1,346.39","$74,454.75"
IAH - LAX,57648263147,I-JFK-LAX-5,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/57648263147,https://www.airlines-manager.com/aircraft/show/89233038,10:30,17:44,400,"$610,729.00","$538,556.00","$1,346.39","$74,454.75"
IAH - LAX,57651685591,I-JFK-LAX-3,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/57651685591,https://www.airlines-manager.com/aircraft/show/88400800,11:00,18:14,400,"$610,729.00","$538,556.00","$1,346.39","$74,454.75"
IAH - LEX,57637373108,I-BTV-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/57637373108,https://www.airlines-manager.com/aircraft/show/114373410,4:30,9:44,310,"$334,781.00","$304,803.00",$983.24,"$58,242.61"
IAH - LEX,57648263004,I-BTV-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/57648263004,https://www.airlines-manager.com/aircraft/show/113994196,9:15,14:29,310,"$334,781.00","$304,803.00",$983.24,"$58,242.61"
IAH - LEX,57658665213,I-BTV-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/57658665213,https://www.airlines-manager.com/aircraft/show/86385103,15:00,20:14,310,"$334,781.00","$304,803.00",$983.24,"$58,242.61"
IAH - LEX,57668758312,I-BTV-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/57668758312,https://www.airlines-manager.com/aircraft/show/82543907,19:15,0:29,112,"$158,973.00","$139,540.00","$1,245.89","$26,663.69"
IAH - LEX,57674153207,I-BTV-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/57674153207,https://www.airlines-manager.com/aircraft/show/114373409,22:15,3:29,269,"308,635$","279,587$","$1,039.36","$53,424.27"
IAH - LIM,57658665160,I-84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/57658665160,https://www.airlines-manager.com/aircraft/show/89439131,14:30,3:59,932,"2,260,419$","2,060,574$","$2,210.92","$152,823.78"
IAH - LIM,57675937111,I-84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/57675937111,https://www.airlines-manager.com/aircraft/show/89124074,23:45,13:14,932,"2,260,419$","2,060,574$","$2,210.92","$152,823.78"
IAH - LIT,57632964694,I-SJC-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/57632964694,https://www.airlines-manager.com/aircraft/show/96692491,3:45,7:14,310,"189,001$","164,995$",$532.24,"$47,366.99"
IAH - LIT,57651685658,I-SJC-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/57651685658,https://www.airlines-manager.com/aircraft/show/96692343,11:00,14:29,310,"189,001$","164,995$",$532.24,"$47,366.99"
IAH - LIT,57668758331,I-SJC-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/57668758331,https://www.airlines-manager.com/aircraft/show/96691558,19:30,22:59,310,"$189,001.00","$164,995.00",$532.24,"$47,366.99"
IAH - LIT,57668758332,I-SJC-PWM-5 B,A319-100,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/57668758332,https://www.airlines-manager.com/aircraft/show/106014350,20:00,23:29,198,"$142,596.00","$123,375.00",$623.11,"$35,418.66"
IAH - LIT,57675937075,I-SJC-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/57675937075,https://www.airlines-manager.com/aircraft/show/96694086,23:30,2:59,277,"$177,121.00","$153,453.00",$553.98,"$44,053.49"
IAH - MAF,57632964712,I-MYR-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50555962,https://www.airlines-manager.com/network/showflight/57632964712,https://www.airlines-manager.com/aircraft/show/120452411,4:00,7:44,310,"$203,259.00","$178,181.00",$574.78,"$47,727.05"
IAH - MAF,57648263115,I-MYR-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50555962,https://www.airlines-manager.com/network/showflight/57648263115,https://www.airlines-manager.com/aircraft/show/120452412,10:00,13:44,310,"$203,259.00","$178,181.00",$574.78,"$47,727.05"
IAH - MAF,57658665174,I-MYR-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50555962,https://www.airlines-manager.com/network/showflight/57658665174,https://www.airlines-manager.com/aircraft/show/120452413,14:45,18:29,310,"$203,259.00","$178,181.00",$574.78,"$47,727.05"
IAH - MAF,57668758367,I-MYR-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50555962,https://www.airlines-manager.com/network/showflight/57668758367,https://www.airlines-manager.com/aircraft/show/120452414,19:45,23:29,309,"$202,874.00","$177,808.00",$575.43,"$47,627.14"
IAH - MCI,57632964277,I-RNO-MCI-4,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/57632964277,https://www.airlines-manager.com/aircraft/show/103882358,1:00,5:44,310,"$299,574.00","$268,416.00",$865.86,"$56,707.61"
IAH - MCI,57648263001,I-RNO-MCI-3,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/57648263001,https://www.airlines-manager.com/aircraft/show/103882357,9:15,13:59,310,"299,574$","268,416$",$865.86,"$56,707.61"
IAH - MCI,57655460143,I-RNO-MCI-2,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/57655460143,https://www.airlines-manager.com/aircraft/show/103882356,13:00,17:44,310,"299,574$","268,416$",$865.86,"$56,707.61"
IAH - MCI,57665599628,I-RNO-MCI-5,ERJ-175,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/57665599628,https://www.airlines-manager.com/aircraft/show/105099861,18:00,22:44,112,"141,735$","121,915$","$1,088.53","$25,756.69"
IAH - MCI,57668758339,I-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/57668758339,https://www.airlines-manager.com/aircraft/show/120293379,19:30,23:59,0,"$78,755.00","$36,556.00",$0.00,"$8,153.75"
IAH - MCI,57671659254,I-RNO-MCI-1,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/57671659254,https://www.airlines-manager.com/aircraft/show/103882355,21:00,1:44,310,"$299,574.00","$268,416.00",$865.86,"$56,707.61"
IAH - MCO,57632964267,I-MIA-ORD-2,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/57632964267,https://www.airlines-manager.com/aircraft/show/90183183,1:00,6:29,310,"$346,660.00","$304,266.00",$981.50,"$55,489.24"
IAH - MCO,57632964270,I-MIA-ORD-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/57632964270,https://www.airlines-manager.com/aircraft/show/90140936,3:00,8:29,136,"$165,003.00","$138,225.00","$1,016.36","$25,208.21"
IAH - MCO,57640828145,I-MIA-ORD-1,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/57640828145,https://www.airlines-manager.com/aircraft/show/90183184,6:45,12:14,310,"$346,660.00","$304,266.00",$981.50,"$55,489.24"
IAH - MCO,57644525273,I-MIA-ORD-5,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/57644525273,https://www.airlines-manager.com/aircraft/show/90183180,8:45,14:14,310,"$346,660.00","$304,266.00",$981.50,"$55,489.24"
IAH - MCO,57655460125,I-MIA-ORD-4,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/57655460125,https://www.airlines-manager.com/aircraft/show/90183181,13:00,18:29,310,"$346,660.00","$304,266.00",$981.50,"$55,489.24"
IAH - MCO,57668758299,I-MIA-ORD-3,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/57668758299,https://www.airlines-manager.com/aircraft/show/90183182,19:15,0:44,310,"$346,660.00","$304,266.00",$981.50,"$55,489.24"
IAH - MEM,57637373204,I-SMF-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/57637373204,https://www.airlines-manager.com/aircraft/show/99093332,5:45,9:44,320,"$223,713.00","$190,351.00",$594.85,"$47,786.86"
IAH - MEM,57648263013,I-SMF-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/57648263013,https://www.airlines-manager.com/aircraft/show/99093333,9:30,13:29,320,"$223,713.00","$190,351.00",$594.85,"$47,786.86"
IAH - MEM,57658665048,I-SMF-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/57658665048,https://www.airlines-manager.com/aircraft/show/99093334,14:00,17:59,320,"$223,713.00","$190,351.00",$594.85,"$47,786.86"
IAH - MEM,57668758320,I-SMF-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/57668758320,https://www.airlines-manager.com/aircraft/show/99093335,19:30,23:29,320,"$223,713.00","$190,351.00",$594.85,"$47,786.86"
IAH - MEM,57671659313,I-SMF-CVG-5 B,A319-100,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/57671659313,https://www.airlines-manager.com/aircraft/show/106499070,21:30,1:29,198,"169,806$","146,816$",$741.49,"$36,857.57"
IAH - MEX,57632964520,I-MEX-YYZ-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/57632964520,https://www.airlines-manager.com/aircraft/show/97026605,1:45,6:44,136,"153,949$","129,048$",$948.88,"$25,895.92"
IAH - MEX,57637373179,I-MEX-YYZ-2,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/57637373179,https://www.airlines-manager.com/aircraft/show/97076945,5:30,10:29,400,"415,716$","367,373$",$918.43,"$73,720.33"
IAH - MEX,57644525235,I-MEX-YYZ-5,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/57644525235,https://www.airlines-manager.com/aircraft/show/97076942,8:30,13:29,400,"415,716$","367,373$",$918.43,"$73,720.33"
IAH - MEX,57655460063,I-MEX-YYZ-1,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/57655460063,https://www.airlines-manager.com/aircraft/show/97076946,13:00,17:59,400,"$415,716.00","$367,373.00",$918.43,"$73,720.33"
IAH - MEX,57662009281,I-MEX-YYZ-4,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/57662009281,https://www.airlines-manager.com/aircraft/show/97076943,16:00,20:59,394,"$410,180.00","$361,986.00",$918.75,"$72,639.33"
IAH - MEX,57674153223,I-MEX-YYZ-3,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/57674153223,https://www.airlines-manager.com/aircraft/show/97076944,22:30,3:29,284,"$308,683.00","$263,221.00",$926.83,"$52,820.27"
IAH - MFE,57632964681,I-MYR-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50555963,https://www.airlines-manager.com/network/showflight/57632964681,https://www.airlines-manager.com/aircraft/show/120452414,3:30,6:44,310,"$171,083.00","$148,684.00",$479.63,"$45,984.74"
IAH - MFE,57655460158,I-MYR-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50555963,https://www.airlines-manager.com/network/showflight/57655460158,https://www.airlines-manager.com/aircraft/show/120452411,13:00,16:14,310,"$171,083.00","$148,684.00",$479.63,"$45,984.74"
IAH - MFE,57665599583,I-MYR-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50555963,https://www.airlines-manager.com/network/showflight/57665599583,https://www.airlines-manager.com/aircraft/show/120452412,17:45,20:59,310,"$171,083.00","$148,684.00",$479.63,"$45,984.74"
IAH - MFE,57674153242,I-MYR-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50555963,https://www.airlines-manager.com/network/showflight/57674153242,https://www.airlines-manager.com/aircraft/show/120452413,22:30,1:44,310,"$171,083.00","$148,684.00",$479.63,"$45,984.74"
IAH - MFR,57632964447,I-EUG-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/57632964447,https://www.airlines-manager.com/aircraft/show/119525218,1:30,10:14,320,"$555,877.00","$506,508.00","$1,582.84","$57,997.10"
IAH - MFR,57632964448,I-EUG-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/57632964448,https://www.airlines-manager.com/aircraft/show/119525217,3:30,12:14,320,"$555,877.00","$506,508.00","$1,582.84","$57,997.10"
IAH - MFR,57651685633,I-EUG-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/57651685633,https://www.airlines-manager.com/aircraft/show/119525219,11:00,19:44,320,"555,877$","506,508$","$1,582.84","$57,997.10"
IAH - MFR,57655460105,I-EUG-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/57655460105,https://www.airlines-manager.com/aircraft/show/119525220,13:00,21:44,320,"555,877$","506,508$","$1,582.84","$57,997.10"
IAH - MFR,57668758443,I-EUG-MFR-5,ERJ-175,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/57668758443,https://www.airlines-manager.com/aircraft/show/119525248,20:15,5:14,112,"262,366$","232,593$","$2,076.72","$25,891.61"
IAH - MHT,57632964444,I-MHT-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/57632964444,https://www.airlines-manager.com/aircraft/show/114266971,1:30,9:44,320,"525,711$","477,855$","$1,493.30","$58,039.07"
IAH - MHT,57640828144,I-MHT-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/57640828144,https://www.airlines-manager.com/aircraft/show/114266970,6:45,14:59,320,"525,711$","477,855$","$1,493.30","$58,039.07"
IAH - MHT,57651685754,I-MHT-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/57651685754,https://www.airlines-manager.com/aircraft/show/114266972,12:00,20:14,320,"$525,711.00","$477,855.00","$1,493.30","$58,039.07"
IAH - MHT,57662009300,I-MHT-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/57662009300,https://www.airlines-manager.com/aircraft/show/114266976,16:00,0:14,320,"$525,711.00","$477,855.00","$1,493.30","$58,039.07"
IAH - MHT,57665599585,I-MHT-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/57665599585,https://www.airlines-manager.com/aircraft/show/92800067,17:45,1:59,112,"$247,615.00","$219,048.00","$1,955.79","$26,605.02"
IAH - MIA,57632964185,I-MIA-ORD-3,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/57632964185,https://www.airlines-manager.com/aircraft/show/90183182,0:45,6:29,310,"$371,613.00","$325,856.00","$1,051.15","$56,835.35"
IAH - MIA,57640828128,I-MIA-ORD-2,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/57640828128,https://www.airlines-manager.com/aircraft/show/90183183,6:30,12:14,310,"$371,613.00","$325,856.00","$1,051.15","$56,835.35"
IAH - MIA,57644525263,I-MIA-ORD-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/57644525263,https://www.airlines-manager.com/aircraft/show/90140936,8:30,14:14,136,"$176,905.00","$147,937.00","$1,087.77","$25,802.97"
IAH - MIA,57655460128,I-MIA-ORD-1,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/57655460128,https://www.airlines-manager.com/aircraft/show/90183184,13:00,18:44,310,"$371,613.00","$325,856.00","$1,051.15","$56,835.35"
IAH - MIA,57658665214,I-MIA-ORD-5,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/57658665214,https://www.airlines-manager.com/aircraft/show/90183180,15:00,20:44,310,"$371,613.00","$325,856.00","$1,051.15","$56,835.35"
IAH - MIA,57665599674,I-MIA-ORD-4,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/57665599674,https://www.airlines-manager.com/aircraft/show/90183181,18:30,0:14,310,"$371,613.00","$325,856.00","$1,051.15","$56,835.35"
IAH - MKE,57632964280,I-BOI-BNA-2,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/57632964280,https://www.airlines-manager.com/aircraft/show/104258212,1:00,6:59,310,"$380,561.00","$345,427.00","$1,114.28","$57,731.53"
IAH - MKE,57644525199,I-BOI-BNA-1,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/57644525199,https://www.airlines-manager.com/aircraft/show/104258211,8:00,13:59,310,"$380,561.00","$345,427.00","$1,114.28","$57,731.53"
IAH - MKE,57648262996,I-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/57648262996,https://www.airlines-manager.com/aircraft/show/103534664,9:00,14:59,112,"$179,601.00","$156,801.00","$1,400.01","$26,206.30"
IAH - MKE,57658665090,I-BOI-BNA-4,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/57658665090,https://www.airlines-manager.com/aircraft/show/104258214,14:00,19:59,310,"$380,561.00","$345,427.00","$1,114.28","$57,731.53"
IAH - MKE,57668758305,I-BOI-BNA-3,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/57668758305,https://www.airlines-manager.com/aircraft/show/104258213,19:15,1:14,310,"$380,561.00","$345,427.00","$1,114.28","$57,731.53"
IAH - MSN,57644525163,I-GRR-MSN-3,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/57644525163,https://www.airlines-manager.com/aircraft/show/117273346,7:30,13:29,310,"$373,584.00","$340,499.00","$1,098.38","$56,907.91"
IAH - MSN,57658665112,I-GRR-MSN-2,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/57658665112,https://www.airlines-manager.com/aircraft/show/117273347,14:00,19:59,310,"$373,584.00","$340,499.00","$1,098.38","$56,907.91"
IAH - MSN,57668758434,I-GRR-MSN-1,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/57668758434,https://www.airlines-manager.com/aircraft/show/117273348,20:15,2:14,310,"$373,584.00","$340,499.00","$1,098.38","$56,907.91"
IAH - MSN,57674153210,I-GRR-MSN-4,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/57674153210,https://www.airlines-manager.com/aircraft/show/117273345,22:15,4:14,310,"$373,584.00","$340,499.00","$1,098.38","$56,907.91"
IAH - MSO,57632964702,I-MSO-FAR-2,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/57632964702,https://www.airlines-manager.com/aircraft/show/110424756,4:00,11:59,320,"$509,127.00","$462,694.00","$1,445.92","$57,957.49"
IAH - MSO,57658665058,I-MSO-FAR-1,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/57658665058,https://www.airlines-manager.com/aircraft/show/110424757,14:00,21:59,320,"$509,127.00","$462,694.00","$1,445.92","$57,957.49"
IAH - MSO,57665599548,I-MSO-FAR-4,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/57665599548,https://www.airlines-manager.com/aircraft/show/110424754,17:30,1:29,320,"$509,127.00","$462,694.00","$1,445.92","$57,957.49"
IAH - MSO,57668758422,I-MSO-FAR-3,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/57668758422,https://www.airlines-manager.com/aircraft/show/110424755,20:15,4:14,320,"$509,127.00","$462,694.00","$1,445.92","$57,957.49"
IAH - MSP,57632964699,I-LAS-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/57632964699,https://www.airlines-manager.com/aircraft/show/95894466,4:00,9:59,320,"$384,765.00","$335,469.00","$1,048.34","$56,067.24"
IAH - MSP,57637373166,I-LAS-ATL-6,ERJ-175,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/57637373166,https://www.airlines-manager.com/aircraft/show/82323704,5:00,11:14,112,"$182,588.00","$154,923.00","$1,383.24","$24,853.96"
IAH - MSP,57648263058,I-LAS-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/57648263058,https://www.airlines-manager.com/aircraft/show/96183549,10:00,15:59,320,"$384,765.00","$335,469.00","$1,048.34","$56,067.24"
IAH - MSP,57665599568,I-LAS-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/57665599568,https://www.airlines-manager.com/aircraft/show/96250652,17:45,23:44,320,"$384,765.00","$335,469.00","$1,048.34","$56,067.24"
IAH - MSP,57671659293,I-LAS-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/57671659293,https://www.airlines-manager.com/aircraft/show/96256511,21:30,3:29,320,"384,765$","335,469$","$1,048.34","$56,067.24"
IAH - MSP,57674153227,I-LAS-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/57674153227,https://www.airlines-manager.com/aircraft/show/96177955,22:30,4:29,320,"384,765$","335,469$","$1,048.34","$56,067.24"
IAH - MSY,57632964685,I-BWI-PHL-4,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/57632964685,https://www.airlines-manager.com/aircraft/show/106007216,3:45,6:59,338,"171,070$","146,423$",$433.20,"$45,285.46"
IAH - MSY,57637373113,I-BWI-PHL-5,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/57637373113,https://www.airlines-manager.com/aircraft/show/106007217,4:45,7:59,338,"171,070$","146,423$",$433.20,"$45,285.46"
IAH - MSY,57651685568,I-BWI-PHL-3,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/57651685568,https://www.airlines-manager.com/aircraft/show/106007215,11:00,14:14,338,"$171,070.00","$146,423.00",$433.20,"$45,285.46"
IAH - MSY,57665599562,I-BWI-PHL-2,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/57665599562,https://www.airlines-manager.com/aircraft/show/106007214,17:45,20:59,338,"$171,070.00","$146,423.00",$433.20,"$45,285.46"
IAH - MSY,57671659185,I-BWI-PHL-1,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/57671659185,https://www.airlines-manager.com/aircraft/show/106007213,20:30,23:44,271,"$150,897.00","$126,715.00",$467.58,"$39,190.21"
IAH - MTJ,57632964637,I-MYR-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50683373,https://www.airlines-manager.com/network/showflight/57632964637,https://www.airlines-manager.com/aircraft/show/120452412,3:00,8:44,310,"$359,072.00","$326,458.00","$1,053.09","$56,940.35"
IAH - MTJ,57648262990,I-MYR-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50683373,https://www.airlines-manager.com/network/showflight/57648262990,https://www.airlines-manager.com/aircraft/show/120452413,9:00,14:44,310,"$359,072.00","$326,458.00","$1,053.09","$56,940.35"
IAH - MTJ,57658665114,I-MYR-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50683373,https://www.airlines-manager.com/network/showflight/57658665114,https://www.airlines-manager.com/aircraft/show/120452414,14:00,19:44,310,"$359,072.00","$326,458.00","$1,053.09","$56,940.35"
IAH - MTJ,57674153211,I-MYR-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50683373,https://www.airlines-manager.com/network/showflight/57674153211,https://www.airlines-manager.com/aircraft/show/120452411,22:15,3:59,247,"$316,071.00","$285,056.00","$1,154.07","$49,719.07"
IAH - MTY,57632964676,I-YOW-SJD-1,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/57632964676,https://www.airlines-manager.com/aircraft/show/114266974,3:30,7:14,320,"$203,277.00","$172,760.00",$539.88,"$46,275.00"
IAH - MTY,57648263011,I-YOW-SJD-5,ERJ-175,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/57648263011,https://www.airlines-manager.com/aircraft/show/105099862,9:15,12:59,112,"$92,839.00","$76,384.00",$682.00,"$20,460.00"
IAH - MTY,57658665062,I-YOW-SJD-4,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/57658665062,https://www.airlines-manager.com/aircraft/show/114266975,14:00,17:44,320,"$203,277.00","$172,760.00",$539.88,"$46,275.00"
IAH - MTY,57665599549,I-YOW-SJD-3,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/57665599549,https://www.airlines-manager.com/aircraft/show/113250059,17:30,21:14,320,"$203,277.00","$172,760.00",$539.88,"$46,275.00"
IAH - MTY,57675937069,I-YOW-SJD-2,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/57675937069,https://www.airlines-manager.com/aircraft/show/113114108,23:30,3:14,320,"$203,277.00","$172,760.00",$539.88,"$46,275.00"
IAH - MYR,57632964508,I-MYR-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50683370,https://www.airlines-manager.com/network/showflight/57632964508,https://www.airlines-manager.com/aircraft/show/120452413,1:45,7:44,310,"$378,289.00","$344,570.00","$1,111.52","$57,588.30"
IAH - MYR,57644525204,I-MYR-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50683370,https://www.airlines-manager.com/network/showflight/57644525204,https://www.airlines-manager.com/aircraft/show/120452414,8:00,13:59,310,"$378,289.00","$344,570.00","$1,111.52","$57,588.30"
IAH - MYR,57662009360,I-MYR-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50683370,https://www.airlines-manager.com/network/showflight/57662009360,https://www.airlines-manager.com/aircraft/show/120452411,16:15,22:14,310,"$378,289.00","$344,570.00","$1,111.52","$57,588.30"
IAH - MYR,57671659259,I-MYR-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50683370,https://www.airlines-manager.com/network/showflight/57671659259,https://www.airlines-manager.com/aircraft/show/120452412,21:00,2:59,310,"378,289$","344,570$","$1,111.52","$57,588.30"
IAH - OAK,57632964316,I-IAD-SAN-5,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/57632964316,https://www.airlines-manager.com/aircraft/show/98578920,1:15,9:44,320,"531,050$","480,227$","$1,500.71","$56,608.29"
IAH - OAK,57632964317,I-IAD-SAN-1,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/57632964317,https://www.airlines-manager.com/aircraft/show/98578924,3:00,11:29,320,"531,050$","480,227$","$1,500.71","$56,608.29"
IAH - OAK,57644525190,I-IAD-SAN-4,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/57644525190,https://www.airlines-manager.com/aircraft/show/98578921,8:00,16:29,320,"531,050$","480,227$","$1,500.71","$56,608.29"
IAH - OAK,57655460081,I-IAD-SAN-3,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/57655460081,https://www.airlines-manager.com/aircraft/show/98578922,13:00,21:29,320,"531,050$","480,227$","$1,500.71","$56,608.29"
IAH - OAK,57668758284,I-IAD-SAN-6,ERJ-175,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/57668758284,https://www.airlines-manager.com/aircraft/show/105400635,19:00,3:29,112,"250,246$","220,099$","$1,965.17","$25,944.87"
IAH - OAK,57674153195,I-IAD-SAN-2,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/57674153195,https://www.airlines-manager.com/aircraft/show/98578923,22:15,6:44,320,"531,050$","480,227$","$1,500.71","$56,608.29"
IAH - OKC,57637373191,I-RIC-SDF-1,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/57637373191,https://www.airlines-manager.com/aircraft/show/107467134,5:30,9:14,310,"197,208$","171,947$",$554.67,"$46,057.23"
IAH - OKC,57648263134,I-RIC-SDF-5,ERJ-175,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/57648263134,https://www.airlines-manager.com/aircraft/show/107467211,10:00,13:44,112,"$90,992.00","$75,145.00",$670.94,"$20,128.13"
IAH - OKC,57651685772,I-RIC-SDF-4,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/57651685772,https://www.airlines-manager.com/aircraft/show/107467131,12:00,15:44,310,"$197,208.00","$171,947.00",$554.67,"$46,057.23"
IAH - OKC,57665599581,I-RIC-SDF-3,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/57665599581,https://www.airlines-manager.com/aircraft/show/107467132,17:45,21:29,310,"$197,208.00","$171,947.00",$554.67,"$46,057.23"
IAH - OKC,57674153297,I-RIC-SDF-2,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/57674153297,https://www.airlines-manager.com/aircraft/show/107467133,23:00,2:44,310,"$197,208.00","$171,947.00",$554.67,"$46,057.23"
IAH - OMA,57632964610,I-BOI-BNA-1,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/57632964610,https://www.airlines-manager.com/aircraft/show/104258211,2:45,7:59,310,"$329,990.00","$298,847.00",$964.02,"$57,104.52"
IAH - OMA,57632964611,I-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/57632964611,https://www.airlines-manager.com/aircraft/show/103534664,3:45,8:59,112,"$156,520.00","$136,469.00","$1,218.47","$26,076.88"
IAH - OMA,57644525274,I-BOI-BNA-4,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/57644525274,https://www.airlines-manager.com/aircraft/show/104258214,8:45,13:59,310,"$329,990.00","$298,847.00",$964.02,"$57,104.52"
IAH - OMA,57658665089,I-BOI-BNA-3,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/57658665089,https://www.airlines-manager.com/aircraft/show/104258213,14:00,19:14,310,"$329,990.00","$298,847.00",$964.02,"$57,104.52"
IAH - OMA,57668758361,I-BOI-BNA-2,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/57668758361,https://www.airlines-manager.com/aircraft/show/104258212,19:45,0:59,310,"$329,990.00","$298,847.00",$964.02,"$57,104.52"
IAH - ONT,57632964615,I-ANC-ONT-1,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/57632964615,https://www.airlines-manager.com/aircraft/show/108258010,2:45,9:59,310,"465,347$","424,181$","$1,368.33","$58,642.53"
IAH - ONT,57637373129,I-ANC-ONT-2,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/57637373129,https://www.airlines-manager.com/aircraft/show/108258011,4:45,11:59,310,"$465,347.00","$424,181.00","$1,368.33","$58,642.53"
IAH - ONT,57651685777,I-ANC-ONT-3,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/57651685777,https://www.airlines-manager.com/aircraft/show/108258012,12:00,19:14,310,"$465,347.00","$424,181.00","$1,368.33","$58,642.53"
IAH - ONT,57658665095,I-ANC-ONT-4,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/57658665095,https://www.airlines-manager.com/aircraft/show/108089220,14:00,21:14,310,"$465,347.00","$424,181.00","$1,368.33","$58,642.53"
IAH - ONT,57662009337,I-ANC-ONT-5 B,A319-100,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/57662009337,https://www.airlines-manager.com/aircraft/show/108286957,16:00,23:14,198,"$351,162.00","$318,172.00","$1,606.93","$43,986.91"
IAH - ORD,57632964014,I-MIA-ORD-4,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/57632964014,https://www.airlines-manager.com/aircraft/show/90183181,0:15,5:59,310,"$364,400.00","$309,434.00",$998.17,"$53,971.05"
IAH - ORD,57640828127,I-MIA-ORD-3,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/57640828127,https://www.airlines-manager.com/aircraft/show/90183182,6:30,12:14,310,"$364,400.00","$309,434.00",$998.17,"$53,971.05"
IAH - ORD,57644525231,I-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/57644525231,https://www.airlines-manager.com/aircraft/show/120293379,8:15,13:59,0,"$101,420.00","$26,513.00",#DIV/0!,"$4,624.36"
IAH - ORD,57655460127,I-MIA-ORD-2,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/57655460127,https://www.airlines-manager.com/aircraft/show/90183183,13:00,18:44,310,"$364,400.00","$309,434.00",$998.17,"$53,971.05"
IAH - ORD,57658665243,I-MIA-ORD-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/57658665243,https://www.airlines-manager.com/aircraft/show/90140936,15:00,20:44,136,"$173,108.00","$138,672.00","$1,019.65","$24,186.98"
IAH - ORD,57665599704,I-MIA-ORD-1,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/57665599704,https://www.airlines-manager.com/aircraft/show/90183184,18:45,0:29,310,"$364,400.00","$309,434.00",$998.17,"$53,971.05"
IAH - ORD,57671659221,I-MIA-ORD-5,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/57671659221,https://www.airlines-manager.com/aircraft/show/90183180,20:45,2:29,310,"$364,400.00","$309,434.00",$998.17,"$53,971.05"
IAH - ORF,57632963879,I-PVD-BUF-5 B,A319-100,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/57632963879,https://www.airlines-manager.com/aircraft/show/110582843,0:00,6:44,198,"$320,725.00","$291,072.00","$1,470.06","$43,228.51"
IAH - ORF,57637373076,I-PVD-BUF-1,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/57637373076,https://www.airlines-manager.com/aircraft/show/107467130,4:15,10:59,310,"$425,000.00","$387,998.00","$1,251.61","$57,623.47"
IAH - ORF,57644525225,I-PVD-BUF-4,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/57644525225,https://www.airlines-manager.com/aircraft/show/107467127,8:15,14:59,310,"$425,000.00","$387,998.00","$1,251.61","$57,623.47"
IAH - ORF,57655460147,I-PVD-BUF-3,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/57655460147,https://www.airlines-manager.com/aircraft/show/107467128,13:00,19:44,310,"425,000$","387,998$","$1,251.61","$57,623.47"
IAH - ORF,57668758393,I-PVD-BUF-2,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/57668758393,https://www.airlines-manager.com/aircraft/show/107467129,20:00,2:44,310,"$425,000.00","$387,998.00","$1,251.61","$57,623.47"
IAH - PBI,57632964587,I-PBI-RSW-2,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/57632964587,https://www.airlines-manager.com/aircraft/show/104717246,2:30,8:14,310,"370,693$","335,957$","$1,083.73","$58,597.15"
IAH - PBI,57651685666,I-PBI-RSW-1,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/57651685666,https://www.airlines-manager.com/aircraft/show/104717247,11:00,16:44,310,"370,693$","335,957$","$1,083.73","$58,597.15"
IAH - PBI,57655460190,I-PBI-RSW-5,ERJ-175,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/57655460190,https://www.airlines-manager.com/aircraft/show/104743902,13:15,18:59,112,"$175,285.00","$152,779.00","$1,364.10","$26,647.50"
IAH - PBI,57662009357,I-PBI-RSW-4,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/57662009357,https://www.airlines-manager.com/aircraft/show/104717244,16:15,21:59,310,"$370,693.00","$335,957.00","$1,083.73","$58,597.15"
IAH - PBI,57671659337,I-PBI-RSW-3,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/57671659337,https://www.airlines-manager.com/aircraft/show/104717245,21:45,3:29,310,"$370,693.00","$335,957.00","$1,083.73","$58,597.15"
IAH - PDX,57632964596,I-SEA-DEN-5,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/57632964596,https://www.airlines-manager.com/aircraft/show/105562975,2:45,11:44,338,"$622,480.00","$574,378.00","$1,699.34","$63,938.18"
IAH - PDX,57632964597,I-SEA-DEN-2,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/57632964597,https://www.airlines-manager.com/aircraft/show/105562972,4:00,12:59,338,"$622,480.00","$574,378.00","$1,699.34","$63,938.18"
IAH - PDX,57637373139,I-SEA-DEN-4,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/57637373139,https://www.airlines-manager.com/aircraft/show/105562974,5:00,13:59,338,"$622,480.00","$574,378.00","$1,699.34","$63,938.18"
IAH - PDX,57651685795,I-SEA-DEN-6,ERJ-175,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/57651685795,https://www.airlines-manager.com/aircraft/show/105601215,12:00,21:14,112,"$270,856.00","$237,445.00","$2,120.04","$25,716.06"
IAH - PDX,57658665028,I-SEA-DEN-3,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/57658665028,https://www.airlines-manager.com/aircraft/show/105562973,14:00,22:59,338,"$622,480.00","$574,378.00","$1,699.34","$63,938.18"
IAH - PDX,57665599658,I-SEA-DEN-1,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/57665599658,https://www.airlines-manager.com/aircraft/show/105562971,18:30,3:29,338,"622,480$","574,378$","$1,699.34","$63,938.18"
IAH - PHL,57632963890,I-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/57632963890,https://www.airlines-manager.com/aircraft/show/120293379,0:00,7:14,0,"127,938$","65,291$",$0.00,"$9,026.41"
IAH - PHL,57651685569,I-BWI-PHL-4,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/57651685569,https://www.airlines-manager.com/aircraft/show/106007216,11:00,18:14,338,"503,297$","458,115$","$1,355.37","$63,333.87"
IAH - PHL,57658665131,I-BWI-PHL-3,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/57658665131,https://www.airlines-manager.com/aircraft/show/106007215,14:15,21:29,338,"503,297$","458,115$","$1,355.37","$63,333.87"
IAH - PHL,57671659232,I-BWI-PHL-2,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/57671659232,https://www.airlines-manager.com/aircraft/show/106007214,21:00,4:14,338,"503,297$","458,115$","$1,355.37","$63,333.87"
IAH - PHL,57671659233,I-BWI-PHL-5,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/57671659233,https://www.airlines-manager.com/aircraft/show/106007217,21:30,4:44,338,"$503,297.00","$458,115.00","$1,355.37","$63,333.87"
IAH - PHL,57675937087,I-BWI-PHL-1,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/57675937087,https://www.airlines-manager.com/aircraft/show/106007213,23:45,6:59,338,"$503,297.00","$458,115.00","$1,355.37","$63,333.87"
IAH - PHX,57632964700,I-LAS-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/57632964700,https://www.airlines-manager.com/aircraft/show/96183549,4:00,9:59,320,"$380,643.00","$328,609.00","$1,026.90","$54,920.72"
IAH - PHX,57637373145,I-LAS-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/57637373145,https://www.airlines-manager.com/aircraft/show/96177955,5:00,10:59,320,"$380,643.00","$328,609.00","$1,026.90","$54,920.72"
IAH - PHX,57651685727,I-LAS-ATL-6,ERJ-175,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/57651685727,https://www.airlines-manager.com/aircraft/show/82323704,11:30,17:29,112,"179,949$","150,998$","$1,348.20","$25,236.43"
IAH - PHX,57651685728,I-LAS-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/57651685728,https://www.airlines-manager.com/aircraft/show/96250652,11:45,17:44,320,"380,643$","328,609$","$1,026.90","$54,920.72"
IAH - PHX,57662009233,I-LAS-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/57662009233,https://www.airlines-manager.com/aircraft/show/96256511,15:30,21:29,320,"380,643$","328,609$","$1,026.90","$54,920.72"
IAH - PHX,57671659292,I-LAS-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/57671659292,https://www.airlines-manager.com/aircraft/show/95894466,21:30,3:29,320,"380,643$","328,609$","$1,026.90","$54,920.72"
IAH - PIT,57637373158,I-PIT-RDU-2,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/57637373158,https://www.airlines-manager.com/aircraft/show/100684073,5:00,11:29,310,"406,895$","368,531$","$1,188.81","$56,842.83"
IAH - PIT,57651685708,I-PIT-RDU-1,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/57651685708,https://www.airlines-manager.com/aircraft/show/100684074,11:15,17:44,310,"406,895$","368,531$","$1,188.81","$56,842.83"
IAH - PIT,57662009339,I-PIT-RDU-5 B,A319-100,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/57662009339,https://www.airlines-manager.com/aircraft/show/110582845,16:00,22:29,198,"307,277$","276,538$","$1,396.66","$42,653.68"
IAH - PIT,57665599520,I-PIT-RDU-4,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/57665599520,https://www.airlines-manager.com/aircraft/show/100684071,17:15,23:44,310,"406,895$","368,531$","$1,188.81","$56,842.83"
IAH - PIT,57674153273,I-PIT-RDU-3,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/57674153273,https://www.airlines-manager.com/aircraft/show/100684072,22:45,5:14,310,"406,895$","368,531$","$1,188.81","$56,842.83"
IAH - PNS,57648262989,I-MYR-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50683375,https://www.airlines-manager.com/network/showflight/57648262989,https://www.airlines-manager.com/aircraft/show/120452411,9:00,12:59,310,"228,813$","203,811$",$657.45,"$51,165.94"
IAH - PNS,57655460208,I-MYR-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50683375,https://www.airlines-manager.com/network/showflight/57655460208,https://www.airlines-manager.com/aircraft/show/120452412,13:45,17:44,310,"228,813$","203,811$",$657.45,"$51,165.94"
IAH - PNS,57665599680,I-MYR-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50683375,https://www.airlines-manager.com/network/showflight/57665599680,https://www.airlines-manager.com/aircraft/show/120452413,18:30,22:29,310,"228,813$","203,811$",$657.45,"$51,165.94"
IAH - PNS,57675937078,I-MYR-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50683375,https://www.airlines-manager.com/network/showflight/57675937078,https://www.airlines-manager.com/aircraft/show/120452414,23:30,3:29,310,"228,813$","203,811$",$657.45,"$51,165.94"
IAH - PSP,57632964459,I-YEG-BUR-2,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/57632964459,https://www.airlines-manager.com/aircraft/show/117273343,1:30,8:29,310,"452,503$","414,449$","$1,336.93","$59,348.31"
IAH - PSP,57632964460,I-YEG-BUR-1,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/57632964460,https://www.airlines-manager.com/aircraft/show/117273344,3:45,10:44,310,"452,503$","414,449$","$1,336.93","$59,348.31"
IAH - PSP,57651685680,I-YEG-BUR-3,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/57651685680,https://www.airlines-manager.com/aircraft/show/117273342,11:00,17:59,310,"$452,503.00","$414,449.00","$1,336.93","$59,348.31"
IAH - PSP,57665599660,I-YEG-BUR-5,A321neo,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/57665599660,https://www.airlines-manager.com/aircraft/show/117273340,18:30,1:29,338,"$490,459.00","$453,988.00","$1,343.16","$65,010.21"
IAH - PVD,57632964613,I-PVD-BUF-2,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/57632964613,https://www.airlines-manager.com/aircraft/show/107467129,2:45,10:59,310,"$518,459.00","$476,949.00","$1,538.55","$57,929.03"
IAH - PVD,57640828149,I-PVD-BUF-5 B,A319-100,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/57640828149,https://www.airlines-manager.com/aircraft/show/110582843,6:45,14:59,198,"$390,620.00","$357,345.00","$1,804.77","$43,402.23"
IAH - PVD,57655460149,I-PVD-BUF-1,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/57655460149,https://www.airlines-manager.com/aircraft/show/107467130,13:00,21:14,310,"$518,459.00","$476,949.00","$1,538.55","$57,929.03"
IAH - PVD,57662009434,I-PVD-BUF-4,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/57662009434,https://www.airlines-manager.com/aircraft/show/107467127,17:00,1:14,310,"518,459$","476,949$","$1,538.55","$57,929.03"
IAH - PVD,57668758362,I-PVD-BUF-3,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/57668758362,https://www.airlines-manager.com/aircraft/show/107467128,19:45,3:59,310,"518,459$","476,949$","$1,538.55","$57,929.03"
IAH - PVR,57632964646,I-YOW-SJD-5,ERJ-175,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/57632964646,https://www.airlines-manager.com/aircraft/show/105099862,3:00,8:29,112,"167,029$","145,615$","$1,300.13","$26,555.93"
IAH - PVR,57644525241,I-YOW-SJD-4,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/57644525241,https://www.airlines-manager.com/aircraft/show/114266975,8:30,13:59,320,"357,042$","319,408$",$998.15,"$58,250.70"
IAH - PVR,57651685752,I-YOW-SJD-3,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/57651685752,https://www.airlines-manager.com/aircraft/show/113250059,12:00,17:29,320,"$357,042.00","$319,408.00",$998.15,"$58,250.70"
IAH - PVR,57665599606,I-YOW-SJD-2,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/57665599606,https://www.airlines-manager.com/aircraft/show/113114108,18:00,23:29,320,"$357,042.00","$319,408.00",$998.15,"$58,250.70"
IAH - PVR,57674153158,I-YOW-SJD-1,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/57674153158,https://www.airlines-manager.com/aircraft/show/114266974,22:00,3:29,320,"$357,042.00","$319,408.00",$998.15,"$58,250.70"
IAH - PWM,57644525181,I-SJC-PWM-5 B,A319-100,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/57644525181,https://www.airlines-manager.com/aircraft/show/106014350,7:45,16:14,198,"$408,258.00","$374,074.00","$1,889.26","$44,095.17"
IAH - PWM,57651685657,I-SJC-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/57651685657,https://www.airlines-manager.com/aircraft/show/96691558,11:00,19:29,310,"$542,330.00","$499,689.00","$1,611.90","$58,902.44"
IAH - PWM,57658665217,I-SJC-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/57658665217,https://www.airlines-manager.com/aircraft/show/96694086,15:00,23:29,310,"$542,330.00","$499,689.00","$1,611.90","$58,902.44"
IAH - PWM,57668758303,I-SJC-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/57668758303,https://www.airlines-manager.com/aircraft/show/96692491,19:15,3:44,310,"$542,330.00","$499,689.00","$1,611.90","$58,902.44"
IAH - PWM,57674153271,I-SJC-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/57674153271,https://www.airlines-manager.com/aircraft/show/96692343,22:45,7:14,310,"$542,330.00","$499,689.00","$1,611.90","$58,902.44"
IAH - RAP,57632964563,I-GRR-MSN-1,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/57632964563,https://www.airlines-manager.com/aircraft/show/117273348,2:15,8:29,310,"$389,890.00","$355,642.00","$1,147.23","$57,054.87"
IAH - RAP,57637373081,I-GRR-MSN-4,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/57637373081,https://www.airlines-manager.com/aircraft/show/117273345,4:15,10:29,310,"$389,890.00","$355,642.00","$1,147.23","$57,054.87"
IAH - RAP,57658665111,I-GRR-MSN-3,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/57658665111,https://www.airlines-manager.com/aircraft/show/117273346,14:00,20:14,310,"$389,890.00","$355,642.00","$1,147.23","$57,054.87"
IAH - RAP,57668758399,I-GRR-MSN-2,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/57668758399,https://www.airlines-manager.com/aircraft/show/117273347,20:00,2:14,296,"$379,489.00","$345,648.00","$1,167.73","$55,451.55"
IAH - RDU,57637373173,I-PIT-RDU-3,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/57637373173,https://www.airlines-manager.com/aircraft/show/100684072,5:15,11:29,310,"$390,232.00","$353,428.00","$1,140.09","$56,699.68"
IAH - RDU,57651685721,I-PIT-RDU-2,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/57651685721,https://www.airlines-manager.com/aircraft/show/100684073,11:30,17:44,310,"$390,232.00","$353,428.00","$1,140.09","$56,699.68"
IAH - RDU,57665599578,I-PIT-RDU-1,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/57665599578,https://www.airlines-manager.com/aircraft/show/100684074,17:45,23:59,310,"$390,232.00","$353,428.00","$1,140.09","$56,699.68"
IAH - RDU,57674153244,I-PIT-RDU-5 B,A319-100,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/57674153244,https://www.airlines-manager.com/aircraft/show/110582845,22:30,4:44,198,"$294,889.00","$265,400.00","$1,340.40","$42,577.54"
IAH - RDU,57675937102,I-PIT-RDU-4,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/57675937102,https://www.airlines-manager.com/aircraft/show/100684071,23:45,5:59,310,"$390,232.00","$353,428.00","$1,140.09","$56,699.68"
IAH - RIC,57632964614,I-RIC-SDF-2,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/57632964614,https://www.airlines-manager.com/aircraft/show/107467133,2:45,9:14,310,"$418,233.00","$381,919.00","$1,232.00","$58,907.81"
IAH - RIC,57651685775,I-RIC-SDF-1,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/57651685775,https://www.airlines-manager.com/aircraft/show/107467134,12:00,18:29,310,"$418,233.00","$381,919.00","$1,232.00","$58,907.81"
IAH - RIC,57655460210,I-RIC-SDF-5,ERJ-175,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/57655460210,https://www.airlines-manager.com/aircraft/show/107467211,13:45,20:14,112,"$196,627.00","$172,821.00","$1,543.04","$26,656.20"
IAH - RIC,57662009256,I-RIC-SDF-4,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/57662009256,https://www.airlines-manager.com/aircraft/show/107467131,15:45,22:14,310,"$418,233.00","$381,919.00","$1,232.00","$58,907.81"
IAH - RIC,57671659308,I-RIC-SDF-3,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/57671659308,https://www.airlines-manager.com/aircraft/show/107467132,21:30,3:59,310,"$418,233.00","$381,919.00","$1,232.00","$58,907.81"
IAH - RNO,57632964335,I-RNO-MCI-3,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/57632964335,https://www.airlines-manager.com/aircraft/show/103882357,1:15,9:14,310,"$514,150.00","$471,042.00","$1,519.49","$59,003.17"
IAH - RNO,57632964336,I-RNO-MCI-5,ERJ-175,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/57632964336,https://www.airlines-manager.com/aircraft/show/105099861,4:00,11:59,112,"$241,738.00","$213,206.00","$1,903.63","$26,706.39"
IAH - RNO,57637373159,I-RNO-MCI-2,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/57637373159,https://www.airlines-manager.com/aircraft/show/103882356,5:00,12:59,310,"$514,150.00","$471,042.00","$1,519.49","$59,003.17"
IAH - RNO,57655460142,I-RNO-MCI-1,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/57655460142,https://www.airlines-manager.com/aircraft/show/103882355,13:00,20:59,310,"$514,150.00","$471,042.00","$1,519.49","$59,003.17"
IAH - RNO,57662009432,I-RNO-MCI-4,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/57662009432,https://www.airlines-manager.com/aircraft/show/103882358,17:00,0:59,310,"$514,150.00","$471,042.00","$1,519.49","$59,003.17"
IAH - ROC,57632964071,I-SYR-ROC-3,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/57632964071,https://www.airlines-manager.com/aircraft/show/119525222,0:30,7:44,320,"$463,219.00","$420,416.00","$1,313.80","$58,122.03"
IAH - ROC,57651685635,I-SYR-ROC-2,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/57651685635,https://www.airlines-manager.com/aircraft/show/119525223,11:00,18:14,320,"$463,219.00","$420,416.00","$1,313.80","$58,122.03"
IAH - ROC,57651685636,I-SYR-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/57651685636,https://www.airlines-manager.com/aircraft/show/119525249,12:00,19:14,112,"$218,849.00","$193,570.00","$1,728.30","$26,760.83"
IAH - ROC,57665599671,I-SYR-ROC-1,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/57665599671,https://www.airlines-manager.com/aircraft/show/119525224,18:30,1:44,320,"$463,219.00","$420,416.00","$1,313.80","$58,122.03"
IAH - ROC,57668758325,I-SYR-ROC-4,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/57668758325,https://www.airlines-manager.com/aircraft/show/119525221,19:30,2:44,320,"$463,219.00","$420,416.00","$1,313.80","$58,122.03"
IAH - RSW,57632964612,I-PBI-RSW-4,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/57632964612,https://www.airlines-manager.com/aircraft/show/104717244,2:45,8:14,310,"$350,834.00","$316,276.00","$1,020.25","$57,679.51"
IAH - RSW,57651685664,I-PBI-RSW-3,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/57651685664,https://www.airlines-manager.com/aircraft/show/104717245,11:00,16:29,310,"$350,834.00","$316,276.00","$1,020.25","$57,679.51"
IAH - RSW,57662009255,I-PBI-RSW-2,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/57662009255,https://www.airlines-manager.com/aircraft/show/104717246,15:45,21:14,310,"350,834$","316,276$","$1,020.25","$57,679.51"
IAH - RSW,57671659307,I-PBI-RSW-1,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/57671659307,https://www.airlines-manager.com/aircraft/show/104717247,21:30,2:59,310,"350,834$","316,276$","$1,020.25","$57,679.51"
IAH - RSW,57675937112,I-PBI-RSW-5,ERJ-175,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/57675937112,https://www.airlines-manager.com/aircraft/show/104743902,23:45,5:14,112,"165,937$","143,701$","$1,283.04","$26,206.87"
IAH - SAN,57632964164,I-IAD-SAN-4,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/57632964164,https://www.airlines-manager.com/aircraft/show/98578921,0:45,7:59,320,"454,470$","407,129$","$1,272.28","$56,285.12"
IAH - SAN,57637373062,I-IAD-SAN-3,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/57637373062,https://www.airlines-manager.com/aircraft/show/98578922,4:15,11:29,320,"454,470$","407,129$","$1,272.28","$56,285.12"
IAH - SAN,57648263145,I-IAD-SAN-6,ERJ-175,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/57648263145,https://www.airlines-manager.com/aircraft/show/105400635,10:15,17:29,112,"$215,045.00","$187,586.00","$1,674.88","$25,933.55"
IAH - SAN,57658665200,I-IAD-SAN-2,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/57658665200,https://www.airlines-manager.com/aircraft/show/98578923,15:00,22:14,320,"$454,470.00","$407,129.00","$1,272.28","$56,285.12"
IAH - SAN,57665599602,I-IAD-SAN-5,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/57665599602,https://www.airlines-manager.com/aircraft/show/98578920,18:00,1:14,320,"$454,470.00","$407,129.00","$1,272.28","$56,285.12"
IAH - SAN,57668758351,I-IAD-SAN-1,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/57668758351,https://www.airlines-manager.com/aircraft/show/98578924,19:45,2:59,320,"$454,470.00","$407,129.00","$1,272.28","$56,285.12"
IAH - SAT,57632964462,I-SMF-CVG-5 B,A319-100,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/57632964462,https://www.airlines-manager.com/aircraft/show/106499070,1:30,4:14,198,"$91,093.00","$73,214.00",$369.77,"$26,785.61"
IAH - SAT,57648263030,I-SMF-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/57648263030,https://www.airlines-manager.com/aircraft/show/99093332,9:45,12:29,320,"$120,541.00","$94,177.00",$294.30,"$34,455.00"
IAH - SAT,57658665047,I-SMF-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/57658665047,https://www.airlines-manager.com/aircraft/show/99093333,14:00,16:44,320,"$120,541.00","$94,177.00",$294.30,"$34,455.00"
IAH - SAT,57665599604,I-SMF-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/57665599604,https://www.airlines-manager.com/aircraft/show/99093334,18:00,20:44,320,"$120,541.00","$94,177.00",$294.30,"$34,455.00"
IAH - SAT,57675937065,I-SMF-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/57675937065,https://www.airlines-manager.com/aircraft/show/99093335,23:30,2:14,320,"$120,541.00","$94,177.00",$294.30,"$34,455.00"
IAH - SAV,57632964528,I-FAT-SAV-4,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/57632964528,https://www.airlines-manager.com/aircraft/show/110424758,2:00,7:29,320,"343,864$","308,058$",$962.68,"$56,180.79"
IAH - SAV,57644525239,I-FAT-SAV-3,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/57644525239,https://www.airlines-manager.com/aircraft/show/110424759,8:30,13:59,320,"343,864$","308,058$",$962.68,"$56,180.79"
IAH - SAV,57655460094,I-FAT-SAV-2,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/57655460094,https://www.airlines-manager.com/aircraft/show/110424760,13:00,18:29,320,"343,864$","308,058$",$962.68,"$56,180.79"
IAH - SAV,57671659328,I-FAT-SAV-1,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/57671659328,https://www.airlines-manager.com/aircraft/show/110424761,21:45,3:14,320,"343,864$","308,058$",$962.68,"$56,180.79"
IAH - SBA,57632964306,I-SNA-SBA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/57632964306,https://www.airlines-manager.com/aircraft/show/119525227,1:15,8:59,272,"$439,188.00","$409,680.00","$1,506.18","$52,975.86"
IAH - SBA,57632964307,I-SNA-SBA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/57632964307,https://www.airlines-manager.com/aircraft/show/119525228,3:15,10:59,272,"$439,188.00","$409,680.00","$1,506.18","$52,975.86"
IAH - SBA,57651685554,I-SNA-SBA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/57651685554,https://www.airlines-manager.com/aircraft/show/119525226,11:00,18:44,272,"$439,188.00","$409,680.00","$1,506.18","$52,975.86"
IAH - SBA,57655460035,I-SNA-SBA-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/57655460035,https://www.airlines-manager.com/aircraft/show/119525229,13:00,20:44,272,"$439,188.00","$409,680.00","$1,506.18","$52,975.86"
IAH - SBA,57665599631,I-SNA-SBA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/57665599631,https://www.airlines-manager.com/aircraft/show/119525225,18:15,1:59,272,"$439,188.00","$409,680.00","$1,506.18","$52,975.86"
IAH - SCL,57632964361,I-56A-1 E,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/57632964361,https://www.airlines-manager.com/aircraft/show/106676232,1:30,19:59,648,"$2,300,982.00","$2,144,866.00","$3,309.98","$116,043.25"
IAH - SCL,57640828121,I-56A-3 E,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/57640828121,https://www.airlines-manager.com/aircraft/show/106676234,6:30,0:59,648,"$2,300,982.00","$2,144,866.00","$3,309.98","$116,043.25"
IAH - SCL,57665599538,I-56A-5 E,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/57665599538,https://www.airlines-manager.com/aircraft/show/106676236,17:30,11:59,648,"$2,300,982.00","$2,144,866.00","$3,309.98","$116,043.25"
IAH - SDF,57632964711,I-RIC-SDF-3,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/57632964711,https://www.airlines-manager.com/aircraft/show/107467132,4:00,9:14,310,"$330,138.00","$297,585.00",$959.95,"$56,863.38"
IAH - SDF,57651685774,I-RIC-SDF-2,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/57651685774,https://www.airlines-manager.com/aircraft/show/107467133,12:00,17:14,310,"$330,138.00","$297,585.00",$959.95,"$56,863.38"
IAH - SDF,57665599676,I-RIC-SDF-1,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/57665599676,https://www.airlines-manager.com/aircraft/show/107467134,18:30,23:44,310,"$330,138.00","$297,585.00",$959.95,"$56,863.38"
IAH - SDF,57668758442,I-RIC-SDF-5,ERJ-175,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/57668758442,https://www.airlines-manager.com/aircraft/show/107467211,20:15,1:29,112,"$156,673.00","$135,766.00","$1,212.20","$25,942.55"
IAH - SDF,57674153205,I-RIC-SDF-4,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/57674153205,https://www.airlines-manager.com/aircraft/show/107467131,22:15,3:29,310,"$330,138.00","$297,585.00",$959.95,"$56,863.38"
IAH - SEA,57632964666,I-SEA-DEN-1,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/57632964666,https://www.airlines-manager.com/aircraft/show/105562971,3:30,12:44,338,"$646,653.00","$591,295.00","$1,749.39","$64,039.17"
IAH - SEA,57637373091,I-SEA-DEN-3,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/57637373091,https://www.airlines-manager.com/aircraft/show/105562973,4:30,13:44,338,"$646,653.00","$591,295.00","$1,749.39","$64,039.17"
IAH - SEA,57655460046,I-SEA-DEN-2,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/57655460046,https://www.airlines-manager.com/aircraft/show/105562972,13:00,22:14,338,"$646,653.00","$591,295.00","$1,749.39","$64,039.17"
IAH - SEA,57658665029,I-SEA-DEN-4,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/57658665029,https://www.airlines-manager.com/aircraft/show/105562974,14:00,23:14,338,"$646,653.00","$591,295.00","$1,749.39","$64,039.17"
IAH - SEA,57665599536,I-SEA-DEN-5,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/57665599536,https://www.airlines-manager.com/aircraft/show/105562975,17:30,2:44,338,"$646,653.00","$591,295.00","$1,749.39","$64,039.17"
IAH - SEA,57671659287,I-SEA-DEN-6,ERJ-175,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/57671659287,https://www.airlines-manager.com/aircraft/show/105601215,21:15,6:44,112,"$280,372.00","$242,484.00","$2,165.04","$25,569.49"
IAH - SJC,57632964631,I-SJC-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/57632964631,https://www.airlines-manager.com/aircraft/show/96694086,3:00,11:14,310,"$533,552.00","$487,923.00","$1,573.95","$59,261.90"
IAH - SJC,57651685659,I-SJC-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/57651685659,https://www.airlines-manager.com/aircraft/show/96692491,11:00,19:14,310,"$533,552.00","$487,923.00","$1,573.95","$59,261.90"
IAH - SJC,57658665154,I-SJC-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/57658665154,https://www.airlines-manager.com/aircraft/show/96692343,14:30,22:44,310,"$533,552.00","$487,923.00","$1,573.95","$59,261.90"
IAH - SJC,57674153294,I-SJC-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/57674153294,https://www.airlines-manager.com/aircraft/show/96691558,23:00,7:14,310,"$533,552.00","$487,923.00","$1,573.95","$59,261.90"
IAH - SJC,57675937081,I-SJC-PWM-5 B,A319-100,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/57675937081,https://www.airlines-manager.com/aircraft/show/106014350,23:30,7:44,198,"$401,349.00","$364,777.00","$1,842.31","$44,304.90"
IAH - SJD,57632964484,I-YOW-SJD-4,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/57632964484,https://www.airlines-manager.com/aircraft/show/114266975,1:45,7:44,320,"$382,514.00","$343,676.00","$1,073.99","$57,438.89"
IAH - SJD,57637373170,I-YOW-SJD-3,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/57637373170,https://www.airlines-manager.com/aircraft/show/113250059,5:15,11:14,320,"$382,514.00","$343,676.00","$1,073.99","$57,438.89"
IAH - SJD,57651685751,I-YOW-SJD-2,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/57651685751,https://www.airlines-manager.com/aircraft/show/113114108,12:00,17:59,320,"$382,514.00","$343,676.00","$1,073.99","$57,438.89"
IAH - SJD,57662009299,I-YOW-SJD-1,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/57662009299,https://www.airlines-manager.com/aircraft/show/114266974,16:00,21:59,320,"$382,514.00","$343,676.00","$1,073.99","$57,438.89"
IAH - SJD,57671659267,I-YOW-SJD-5,ERJ-175,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/57671659267,https://www.airlines-manager.com/aircraft/show/105099862,21:00,2:59,111,"$177,263.00","$154,971.00","$1,396.14","$25,900.45"
IAH - SLC,57632964608,I-SLC-CLT-2,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/57632964608,https://www.airlines-manager.com/aircraft/show/93094698,2:45,9:29,310,"$425,998.00","$382,511.00","$1,233.91","$56,808.56"
IAH - SLC,57637373137,I-SLC-CLT-6,ERJ-175,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/57637373137,https://www.airlines-manager.com/aircraft/show/93100455,4:45,11:29,112,"$200,317.00","$172,140.00","$1,536.96","$25,565.35"
IAH - SLC,57648263097,I-SLC-CLT-1,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/57648263097,https://www.airlines-manager.com/aircraft/show/93094699,10:00,16:44,310,"$425,998.00","$382,511.00","$1,233.91","$56,808.56"
IAH - SLC,57651685769,I-SLC-CLT-5,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/57651685769,https://www.airlines-manager.com/aircraft/show/93094695,12:00,18:44,310,"$425,998.00","$382,511.00","$1,233.91","$56,808.56"
IAH - SLC,57658665254,I-SLC-CLT-4,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/57658665254,https://www.airlines-manager.com/aircraft/show/93094696,15:15,21:59,310,"$425,998.00","$382,511.00","$1,233.91","$56,808.56"
IAH - SLC,57671659252,I-SLC-CLT-3,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/57671659252,https://www.airlines-manager.com/aircraft/show/93094697,21:00,3:44,310,"$425,998.00","$382,511.00","$1,233.91","$56,808.56"
IAH - SMF,57632964552,I-SMF-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/57632964552,https://www.airlines-manager.com/aircraft/show/99093335,2:15,10:29,320,"$532,190.00","$482,961.00","$1,509.25","$58,659.23"
IAH - SMF,57637373082,I-SMF-CVG-5 B,A319-100,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/57637373082,https://www.airlines-manager.com/aircraft/show/106499070,4:15,12:29,198,"$400,763.00","$365,374.00","$1,845.32","$44,377.41"
IAH - SMF,57655460084,I-SMF-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/57655460084,https://www.airlines-manager.com/aircraft/show/99093332,13:00,21:14,320,"$532,190.00","$482,961.00","$1,509.25","$58,659.23"
IAH - SMF,57662009390,I-SMF-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/57662009390,https://www.airlines-manager.com/aircraft/show/99093333,16:45,0:59,320,"$532,190.00","$482,961.00","$1,509.25","$58,659.23"
IAH - SMF,57671659210,I-SMF-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/57671659210,https://www.airlines-manager.com/aircraft/show/99093334,20:45,4:59,320,"$532,190.00","$482,961.00","$1,509.25","$58,659.23"
IAH - SNA,57632964470,I-SNA-SBA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/57632964470,https://www.airlines-manager.com/aircraft/show/119525226,1:45,8:59,272,"$423,610.00","$394,459.00","$1,450.22","$54,533.50"
IAH - SNA,57632964471,I-SYR-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/57632964471,https://www.airlines-manager.com/aircraft/show/119525249,2:45,9:59,112,"$220,728.00","$195,433.00","$1,744.94","$27,018.39"
IAH - SNA,57632964472,I-SNA-SBA-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/57632964472,https://www.airlines-manager.com/aircraft/show/119525229,3:45,10:59,272,"$423,610.00","$394,459.00","$1,450.22","$54,533.50"
IAH - SNA,57651685553,I-SNA-SBA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/57651685553,https://www.airlines-manager.com/aircraft/show/119525225,11:00,18:14,272,"423,610$","394,459$","$1,450.22","$54,533.50"
IAH - SNA,57665599587,I-SNA-SBA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/57665599587,https://www.airlines-manager.com/aircraft/show/119525227,18:00,1:14,272,"423,610$","394,459$","$1,450.22","$54,533.50"
IAH - SNA,57668758374,I-SNA-SBA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/57668758374,https://www.airlines-manager.com/aircraft/show/119525228,20:00,3:14,272,"423,610$","394,459$","$1,450.22","$54,533.50"
IAH - SRQ,57632964297,I-ILM-SRQ-3,A321-200,https://www.airlines-manager.com/network/showline/50666456,https://www.airlines-manager.com/network/showflight/57632964297,https://www.airlines-manager.com/aircraft/show/120452416,1:00,6:14,310,"332,420$","301,728$",$973.32,"$57,655.03"
IAH - SRQ,57648262992,I-ILM-SRQ-2,A321-200,https://www.airlines-manager.com/network/showline/50666456,https://www.airlines-manager.com/network/showflight/57648262992,https://www.airlines-manager.com/aircraft/show/120452417,9:00,14:14,310,"332,420$","301,728$",$973.32,"$57,655.03"
IAH - SRQ,57658665143,I-ILM-SRQ-1,A321-200,https://www.airlines-manager.com/network/showline/50666456,https://www.airlines-manager.com/network/showflight/57658665143,https://www.airlines-manager.com/aircraft/show/120452418,14:15,19:29,310,"$332,420.00","$301,728.00",$973.32,"$57,655.03"
IAH - SRQ,57668758400,I-ILM-SRQ-4,A321-200,https://www.airlines-manager.com/network/showline/50666456,https://www.airlines-manager.com/network/showflight/57668758400,https://www.airlines-manager.com/aircraft/show/120452415,20:00,1:14,310,"$332,420.00","$301,728.00",$973.32,"$57,655.03"
IAH - STL,57632964330,I-CLE-STL-4,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/57632964330,https://www.airlines-manager.com/aircraft/show/88725601,1:15,5:59,310,"$300,923.00","$268,652.00",$866.62,"$56,757.46"
IAH - STL,57644525223,I-CLE-STL-3,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/57644525223,https://www.airlines-manager.com/aircraft/show/103600702,8:15,12:59,310,"$300,923.00","$268,652.00",$866.62,"$56,757.46"
IAH - STL,57658665084,I-CLE-STL-2,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/57658665084,https://www.airlines-manager.com/aircraft/show/103600701,14:00,18:44,310,"$300,923.00","$268,652.00",$866.62,"$56,757.46"
IAH - STL,57658665085,I-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/57658665085,https://www.airlines-manager.com/aircraft/show/96990010,15:00,19:44,112,"$143,002.00","$122,472.00","$1,093.50","$25,874.37"
IAH - STL,57668758430,I-CLE-STL-1,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/57668758430,https://www.airlines-manager.com/aircraft/show/103600700,20:15,0:59,310,"$300,923.00","$268,652.00",$866.62,"$56,757.46"
IAH - STL,57671659338,I-CLE-STL-5 B,A319-100,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/57671659338,https://www.airlines-manager.com/aircraft/show/110582844,21:45,2:29,198,"$228,609.00","$202,763.00","$1,024.06","$42,837.25"
IAH - SYR,57632964004,I-SYR-ROC-2,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/57632964004,https://www.airlines-manager.com/aircraft/show/119525223,0:15,7:44,320,"$476,176.00","$431,891.00","$1,349.66","$57,713.72"
IAH - SYR,57651685637,I-SYR-ROC-1,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/57651685637,https://www.airlines-manager.com/aircraft/show/119525224,11:00,18:29,320,"$476,176.00","$431,891.00","$1,349.66","$57,713.72"
IAH - SYR,57651685638,I-SYR-ROC-4,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/57651685638,https://www.airlines-manager.com/aircraft/show/119525221,12:00,19:29,320,"$476,176.00","$431,891.00","$1,349.66","$57,713.72"
IAH - SYR,57662009426,I-SYR-ROC-3,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/57662009426,https://www.airlines-manager.com/aircraft/show/119525222,17:00,0:29,320,"$476,176.00","$431,891.00","$1,349.66","$57,713.72"
IAH - SYR,57668758313,I-SYR-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/57668758313,https://www.airlines-manager.com/aircraft/show/119525249,19:15,2:44,112,"$225,013.00","$198,807.00","$1,775.06","$26,566.64"
IAH - TPA,57637373070,I-SLC-CLT-1,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/57637373070,https://www.airlines-manager.com/aircraft/show/93094699,4:15,9:29,310,"$327,531.00","$292,309.00",$942.93,"$55,855.22"
IAH - TPA,57640828116,I-SLC-CLT-5,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/57640828116,https://www.airlines-manager.com/aircraft/show/93094695,6:15,11:29,310,"$327,531.00","$292,309.00",$942.93,"$55,855.22"
IAH - TPA,57648263094,I-SLC-CLT-4,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/57648263094,https://www.airlines-manager.com/aircraft/show/93094696,10:00,15:14,310,"$327,531.00","$292,309.00",$942.93,"$55,855.22"
IAH - TPA,57662009252,I-SLC-CLT-3,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/57662009252,https://www.airlines-manager.com/aircraft/show/93094697,15:45,20:59,310,"$327,531.00","$292,309.00",$942.93,"$55,855.22"
IAH - TPA,57671659305,I-SLC-CLT-2,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/57671659305,https://www.airlines-manager.com/aircraft/show/93094698,21:30,2:44,310,"$327,531.00","$292,309.00",$942.93,"$55,855.22"
IAH - TPA,57675937083,I-SLC-CLT-6,ERJ-175,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/57675937083,https://www.airlines-manager.com/aircraft/show/93100455,23:30,4:44,112,"$155,657.00","$133,151.00","$1,188.85","$25,442.87"
IAH - TUL,57632964140,I-BTV-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/57632964140,https://www.airlines-manager.com/aircraft/show/82543907,0:30,4:14,112,"$93,962.00","$77,748.00",$694.18,"$20,825.36"
IAH - TUL,57632964142,I-BTV-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/57632964142,https://www.airlines-manager.com/aircraft/show/114373409,3:30,7:14,310,"$203,562.00","$177,791.00",$573.52,"$47,622.59"
IAH - TUL,57648263032,I-BTV-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/57648263032,https://www.airlines-manager.com/aircraft/show/114373410,9:45,13:29,310,"$203,562.00","$177,791.00",$573.52,"$47,622.59"
IAH - TUL,57658665223,I-BTV-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/57658665223,https://www.airlines-manager.com/aircraft/show/113994196,15:00,18:44,310,"$203,562.00","$177,791.00",$573.52,"$47,622.59"
IAH - TUL,57668758429,I-BTV-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/57668758429,https://www.airlines-manager.com/aircraft/show/86385103,20:15,23:59,310,"$203,562.00","$177,791.00",$573.52,"$47,622.59"
IAH - TUS,57637373190,I-PIT-RDU-1,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/57637373190,https://www.airlines-manager.com/aircraft/show/100684074,5:30,11:14,310,"$360,113.00","$326,034.00","$1,051.72","$56,866.40"
IAH - TUS,57648263142,I-PIT-RDU-5 B,A319-100,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/57648263142,https://www.airlines-manager.com/aircraft/show/110582845,10:15,15:59,198,"$273,000.00","$245,697.00","$1,240.89","$42,854.13"
IAH - TUS,57651685719,I-PIT-RDU-4,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/57651685719,https://www.airlines-manager.com/aircraft/show/100684071,11:30,17:14,310,"$360,113.00","$326,034.00","$1,051.72","$56,866.40"
IAH - TUS,57662009431,I-PIT-RDU-3,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/57662009431,https://www.airlines-manager.com/aircraft/show/100684072,17:00,22:44,310,"$360,113.00","$326,034.00","$1,051.72","$56,866.40"
IAH - TUS,57674153324,I-PIT-RDU-2,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/57674153324,https://www.airlines-manager.com/aircraft/show/100684073,23:15,4:59,310,"$360,113.00","$326,034.00","$1,051.72","$56,866.40"
IAH - TYS,57632964562,I-GRR-MSN-2,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/57632964562,https://www.airlines-manager.com/aircraft/show/117273347,2:15,7:14,310,"$326,466.00","$296,307.00",$955.83,"$59,459.60"
IAH - TYS,57644525256,I-GRR-MSN-1,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/57644525256,https://www.airlines-manager.com/aircraft/show/117273348,8:30,13:29,310,"$326,466.00","$296,307.00",$955.83,"$59,459.60"
IAH - TYS,57651685682,I-GRR-MSN-4,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/57651685682,https://www.airlines-manager.com/aircraft/show/117273345,11:00,15:59,310,"$326,466.00","$296,307.00",$955.83,"$59,459.60"
IAH - TYS,57668758433,I-GRR-MSN-3,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/57668758433,https://www.airlines-manager.com/aircraft/show/117273346,20:15,1:14,310,"$326,466.00","$296,307.00",$955.83,"$59,459.60"
IAH - UIO,57632964138,I-84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/57632964138,https://www.airlines-manager.com/aircraft/show/89124076,0:30,11:14,932,"$1,803,944.00","$1,648,550.00","$1,768.83","$153,591.61"
IAH - UIO,57655460188,I-84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/57655460188,https://www.airlines-manager.com/aircraft/show/88905141,13:15,23:59,932,"$1,803,944.00","$1,648,550.00","$1,768.83","$153,591.61"
IAH - YEG,57632964356,I-YEG-BUR-5,A321neo,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/57632964356,https://www.airlines-manager.com/aircraft/show/117273340,1:30,10:44,338,"$643,713.00","$597,097.00","$1,766.56","$64,667.55"
IAH - YEG,57644525255,I-YEG-BUR-2,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/57644525255,https://www.airlines-manager.com/aircraft/show/117273343,8:30,17:44,310,"$594,387.00","$545,454.00","$1,759.53","$59,074.44"
IAH - YEG,57651685681,I-YEG-BUR-1,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/57651685681,https://www.airlines-manager.com/aircraft/show/117273344,11:00,20:14,310,"$594,387.00","$545,454.00","$1,759.53","$59,074.44"
IAH - YEG,57665599525,I-YEG-BUR-4,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/57665599525,https://www.airlines-manager.com/aircraft/show/117273341,17:15,2:29,310,"$594,387.00","$545,454.00","$1,759.53","$59,074.44"
IAH - YEG,57665599526,I-YEG-BUR-3,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/57665599526,https://www.airlines-manager.com/aircraft/show/117273342,18:00,3:14,310,"$594,387.00","$545,454.00","$1,759.53","$59,074.44"
IAH - YOW,57632964655,I-YOW-SJD-2,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/57632964655,https://www.airlines-manager.com/aircraft/show/113114108,3:15,11:14,320,"$510,982.00","$463,325.00","$1,447.89","$58,036.53"
IAH - YOW,57644525195,I-YOW-SJD-1,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/57644525195,https://www.airlines-manager.com/aircraft/show/114266974,8:00,15:59,320,"$510,982.00","$463,325.00","$1,447.89","$58,036.53"
IAH - YOW,57655460178,I-YOW-SJD-5,ERJ-175,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/57655460178,https://www.airlines-manager.com/aircraft/show/105099862,13:00,20:59,112,"$239,404.00","$211,199.00","$1,885.71","$26,454.99"
IAH - YOW,57665599572,I-YOW-SJD-4,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/57665599572,https://www.airlines-manager.com/aircraft/show/114266975,17:45,1:44,320,"$510,982.00","$463,325.00","$1,447.89","$58,036.53"
IAH - YOW,57671659276,I-YOW-SJD-3,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/57671659276,https://www.airlines-manager.com/aircraft/show/113250059,21:15,5:14,320,"$510,982.00","$463,325.00","$1,447.89","$58,036.53"
IAH - YUL,57632964150,I-YYC-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/57632964150,https://www.airlines-manager.com/aircraft/show/114266980,0:45,8:44,400,"$685,428.00","$627,487.00","$1,568.72","$78,599.62"
IAH - YUL,57632964152,I-YYC-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/57632964152,https://www.airlines-manager.com/aircraft/show/114266979,2:00,9:59,400,"$685,428.00","$627,487.00","$1,568.72","$78,599.62"
IAH - YUL,57651685741,I-YYC-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/57651685741,https://www.airlines-manager.com/aircraft/show/114266978,12:00,19:59,400,"685,428$","627,487$","$1,568.72","$78,599.62"
IAH - YUL,57671659208,I-YYC-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/57671659208,https://www.airlines-manager.com/aircraft/show/114266977,20:45,4:44,400,"685,428$","627,487$","$1,568.72","$78,599.62"
IAH - YVR,57632964232,I-MEX-YYZ-1,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/57632964232,https://www.airlines-manager.com/aircraft/show/97076946,1:00,10:29,400,"777,801$","709,739$","$1,774.35","$74,840.67"
IAH - YVR,57632964234,I-MEX-YYZ-4,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/57632964234,https://www.airlines-manager.com/aircraft/show/97076943,4:00,13:29,400,"777,801$","709,739$","$1,774.35","$74,840.67"
IAH - YVR,57655460061,I-MEX-YYZ-3,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/57655460061,https://www.airlines-manager.com/aircraft/show/97076944,13:00,22:29,400,"777,801$","709,739$","$1,774.35","$74,840.67"
IAH - YVR,57662009345,I-MEX-YYZ-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/57662009345,https://www.airlines-manager.com/aircraft/show/97026605,16:00,1:44,136,"286,977$","251,069$","$1,846.10","$25,794.76"
IAH - YVR,57668758382,I-MEX-YYZ-2,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/57668758382,https://www.airlines-manager.com/aircraft/show/97076945,20:00,5:29,400,"777,801$","709,739$","$1,774.35","$74,840.67"
IAH - YVR,57674153285,I-MEX-YYZ-5,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/57674153285,https://www.airlines-manager.com/aircraft/show/97076942,23:00,8:29,400,"777,801$","709,739$","$1,774.35","$74,840.67"
IAH - YYC,57632964310,I-YYC-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/57632964310,https://www.airlines-manager.com/aircraft/show/114266978,1:15,9:59,400,"746,053$","683,301$","$1,708.25","$78,240.57"
IAH - YYC,57651685740,I-YYC-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/57651685740,https://www.airlines-manager.com/aircraft/show/114266977,12:00,20:44,400,"746,053$","683,301$","$1,708.25","$78,240.57"
IAH - YYC,57662009282,I-YYC-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/57662009282,https://www.airlines-manager.com/aircraft/show/114266980,16:00,0:44,400,"746,053$","683,301$","$1,708.25","$78,240.57"
IAH - YYC,57665599511,I-YYC-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/57665599511,https://www.airlines-manager.com/aircraft/show/114266979,17:15,1:59,400,"746,053$","683,301$","$1,708.25","$78,240.57"
IAH - YYZ,57632964673,I-MEX-YYZ-3,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/57632964673,https://www.airlines-manager.com/aircraft/show/97076944,3:30,10:29,400,"574,924$","516,276$","$1,290.69","$73,929.74"
IAH - YYZ,57640828152,I-MEX-YYZ-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/57640828152,https://www.airlines-manager.com/aircraft/show/97026605,6:45,13:44,136,"212,224$","181,681$","$1,335.89","$26,016.37"
IAH - YYZ,57655460062,I-MEX-YYZ-2,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/57655460062,https://www.airlines-manager.com/aircraft/show/97076945,13:00,19:59,400,"$574,924.00","$516,276.00","$1,290.69","$73,929.74"
IAH - YYZ,57662009280,I-MEX-YYZ-5,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/57662009280,https://www.airlines-manager.com/aircraft/show/97076942,16:00,22:59,400,"$574,924.00","$516,276.00","$1,290.69","$73,929.74"
IAH - YYZ,57665599597,I-MEX-YYZ-1,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/57665599597,https://www.airlines-manager.com/aircraft/show/97076946,18:00,0:59,400,"$574,924.00","$516,276.00","$1,290.69","$73,929.74"
IAH - YYZ,57671659240,I-MEX-YYZ-4,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/57671659240,https://www.airlines-manager.com/aircraft/show/97076943,21:00,3:59,400,"$574,924.00","$516,276.00","$1,290.69","$73,929.74"
MIA - ABQ,57632964333,M-IAD-TUS-1,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/57632964333,https://www.airlines-manager.com/aircraft/show/97556721,1:15,9:59,310,"$549,643.00","$501,802.00","$1,618.72","$57,458.24"
MIA - ABQ,57637373071,M-IAD-TUS-4,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/57637373071,https://www.airlines-manager.com/aircraft/show/97556718,4:15,12:59,310,"$549,643.00","$501,802.00","$1,618.72","$57,458.24"
MIA - ABQ,57648263098,M-IAD-TUS-3,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/57648263098,https://www.airlines-manager.com/aircraft/show/97556719,10:00,18:44,310,"$549,643.00","$501,802.00","$1,618.72","$57,458.24"
MIA - ABQ,57668758333,M-IAD-TUS-2,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/57668758333,https://www.airlines-manager.com/aircraft/show/97556720,19:30,4:14,310,"$549,643.00","$501,802.00","$1,618.72","$57,458.24"
MIA - ABQ,57674153238,M-IAD-TUS-5,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/57674153238,https://www.airlines-manager.com/aircraft/show/97556716,22:30,7:14,310,"$549,643.00","$501,802.00","$1,618.72","$57,458.24"
MIA - ACC,57658665148,M-84B-2 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/57658665148,https://www.airlines-manager.com/aircraft/show/106676226,14:15,11:59,962,"$3,584,617.00","$3,274,304.00","$3,403.64","$150,658.16"
MIA - ACC,57674153280,M-84B-4 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/57674153280,https://www.airlines-manager.com/aircraft/show/106676228,22:45,20:29,962,"$3,584,617.00","$3,274,304.00","$3,403.64","$150,658.16"
MIA - ALB,57632964675,M-DSM-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/57632964675,https://www.airlines-manager.com/aircraft/show/113101233,3:30,10:14,320,"$429,480.00","$388,106.00","$1,212.83","$57,639.50"
MIA - ALB,57655460096,M-DSM-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/57655460096,https://www.airlines-manager.com/aircraft/show/113101230,13:00,19:44,320,"429,480$","388,106$","$1,212.83","$57,639.50"
MIA - ALB,57662009346,M-DSM-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/57662009346,https://www.airlines-manager.com/aircraft/show/100049776,16:00,22:59,112,"202,975$","178,712$","$1,595.64","$25,591.22"
MIA - ALB,57668758423,M-DSM-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/57668758423,https://www.airlines-manager.com/aircraft/show/111064081,20:15,2:59,320,"429,480$","388,106$","$1,212.83","$57,639.50"
MIA - ALB,57674153320,M-DSM-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/57674153320,https://www.airlines-manager.com/aircraft/show/113101228,23:15,5:59,320,"429,480$","388,106$","$1,212.83","$57,639.50"
MIA - ALG,57662009446,M-84B-7 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/57662009446,https://www.airlines-manager.com/aircraft/show/106676231,17:00,12:29,962,"3,254,925$","2,969,393$","$3,086.69","$152,406.83"
MIA - ALG,57671659201,M-84B-5 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/57671659201,https://www.airlines-manager.com/aircraft/show/106676229,20:30,15:59,962,"3,254,925$","2,969,393$","$3,086.69","$152,406.83"
MIA - ANU,57640828130,M-ANU-SXM-3 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/57640828130,https://www.airlines-manager.com/aircraft/show/110114297,6:30,13:44,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ANU,57644525258,M-ANU-SXM-4 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/57644525258,https://www.airlines-manager.com/aircraft/show/110114298,8:30,15:44,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ANU,57651685785,M-ANU-SXM-1 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/57651685785,https://www.airlines-manager.com/aircraft/show/110114295,12:00,19:14,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ANU,57655460165,M-ANU-SXM-2 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/57655460165,https://www.airlines-manager.com/aircraft/show/110114296,13:00,20:14,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ANU,57662009383,M-ANU-SXM-6 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/57662009383,https://www.airlines-manager.com/aircraft/show/110114300,16:30,23:44,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ANU,57675937082,M-ANU-SXM-5 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/57675937082,https://www.airlines-manager.com/aircraft/show/110114299,23:30,6:44,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ATL,57651685739,M-LAX-DEN-4,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/57651685739,https://www.airlines-manager.com/aircraft/show/91126652,12:00,16:29,400,"$366,475.00","$302,230.00",$755.58,"$67,411.90"
MIA - ATL,57655460060,M-LAX-DEN-2,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/57655460060,https://www.airlines-manager.com/aircraft/show/91126650,13:00,17:29,400,"$366,475.00","$302,230.00",$755.58,"$67,411.90"
MIA - ATL,57668758315,M-LAX-DEN-1,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/57668758315,https://www.airlines-manager.com/aircraft/show/91126649,19:30,23:59,400,"$366,475.00","$302,230.00",$755.58,"$67,411.90"
MIA - ATL,57671659239,M-LAX-DEN-3,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/57671659239,https://www.airlines-manager.com/aircraft/show/91126651,21:00,1:29,400,"366,475$","302,230$",$755.58,"$67,411.90"
MIA - AUA,57632964625,M-BGI-CUR-1,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/57632964625,https://www.airlines-manager.com/aircraft/show/107121795,3:00,9:29,320,"405,459$","365,639$","$1,142.62","$56,396.76"
MIA - AUA,57637373100,M-BGI-CUR-4,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/57637373100,https://www.airlines-manager.com/aircraft/show/107121798,4:30,10:59,320,"405,459$","365,639$","$1,142.62","$56,396.76"
MIA - AUA,57651685619,M-BGI-CUR-3,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/57651685619,https://www.airlines-manager.com/aircraft/show/107121797,11:00,17:29,320,"405,459$","365,639$","$1,142.62","$56,396.76"
MIA - AUA,57665599569,M-BGI-CUR-2,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/57665599569,https://www.airlines-manager.com/aircraft/show/107121796,17:45,0:14,320,"$405,459.00","$365,639.00","$1,142.62","$56,396.76"
MIA - AUA,57671659327,M-BGI-CUR-5,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/57671659327,https://www.airlines-manager.com/aircraft/show/107121799,21:45,4:14,244,"318,192$","281,276$","$1,152.77","$43,384.47"
MIA - AUS,57632964602,M-AUS-PIT-2,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/57632964602,https://www.airlines-manager.com/aircraft/show/99920625,2:45,9:14,320,"403,957$","360,258$","$1,125.81","$55,566.79"
MIA - AUS,57648263062,M-AUS-PIT-1,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/57648263062,https://www.airlines-manager.com/aircraft/show/99920626,10:00,16:29,320,"403,957$","360,258$","$1,125.81","$55,566.79"
MIA - AUS,57658665127,M-AUS-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/57658665127,https://www.airlines-manager.com/aircraft/show/82323689,14:00,20:29,112,"190,525$","165,466$","$1,477.38","$25,521.75"
MIA - AUS,57658665128,M-AUS-PIT-4,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/57658665128,https://www.airlines-manager.com/aircraft/show/99920623,14:45,21:14,320,"$403,957.00","$360,258.00","$1,125.81","$55,566.79"
MIA - AUS,57671659211,M-AUS-PIT-3,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/57671659211,https://www.airlines-manager.com/aircraft/show/99920624,20:45,3:14,320,"403,957$","360,258$","$1,125.81","$55,566.79"
MIA - BDA,57632964638,M-PUJ-BDA-1 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/57632964638,https://www.airlines-manager.com/aircraft/show/104034457,3:00,9:14,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDA,57632964639,M-PUJ-BDA-3 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/57632964639,https://www.airlines-manager.com/aircraft/show/104034459,3:45,9:59,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDA,57648263121,M-PUJ-BDA-4 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/57648263121,https://www.airlines-manager.com/aircraft/show/104034460,10:00,16:14,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDA,57651685691,M-PUJ-BDA-6 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/57651685691,https://www.airlines-manager.com/aircraft/show/99326789,11:00,17:14,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDA,57662009258,M-PUJ-BDA-5 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/57662009258,https://www.airlines-manager.com/aircraft/show/104034461,15:45,21:59,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDA,57671659286,M-PUJ-BDA-2 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/57671659286,https://www.airlines-manager.com/aircraft/show/104034458,21:15,3:29,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDL,57632964628,M-BDL-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/57632964628,https://www.airlines-manager.com/aircraft/show/107763565,3:00,9:44,320,"$428,052.00","$385,771.00","$1,205.53","$57,292.72"
MIA - BDL,57644525209,M-BDL-SAT-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/57644525209,https://www.airlines-manager.com/aircraft/show/107467213,8:00,14:44,112,"$201,310.00","$176,683.00","$1,577.53","$26,240.05"
MIA - BDL,57655460203,M-BDL-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/57655460203,https://www.airlines-manager.com/aircraft/show/107763561,13:45,20:29,320,"$428,052.00","$385,771.00","$1,205.53","$57,292.72"
MIA - BDL,57658665055,M-BDL-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/57658665055,https://www.airlines-manager.com/aircraft/show/107763566,14:00,20:44,320,"$428,052.00","$385,771.00","$1,205.53","$57,292.72"
MIA - BDL,57671659192,M-BDL-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/57671659192,https://www.airlines-manager.com/aircraft/show/107763562,20:30,3:14,320,"$428,052.00","$385,771.00","$1,205.53","$57,292.72"
MIA - BFF,57632964179,M-PSP-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/57632964179,https://www.airlines-manager.com/aircraft/show/116789634,0:45,9:29,320,"$556,654.00","$506,491.00","$1,582.78","$57,995.15"
MIA - BFF,57632964181,M-PSP-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/57632964181,https://www.airlines-manager.com/aircraft/show/116789632,1:00,9:44,320,"$556,654.00","$506,491.00","$1,582.78","$57,995.15"
MIA - BFF,57648263076,M-PSP-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/57648263076,https://www.airlines-manager.com/aircraft/show/116789633,10:00,18:44,320,"$556,654.00","$506,491.00","$1,582.78","$57,995.15"
MIA - BFF,57655460100,M-PSP-BFF-5,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/57655460100,https://www.airlines-manager.com/aircraft/show/116789630,13:00,21:44,320,"$556,654.00","$506,491.00","$1,582.78","$57,995.15"
MIA - BFF,57671659215,M-PSP-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/57671659215,https://www.airlines-manager.com/aircraft/show/116789631,20:45,5:29,320,"$556,654.00","$506,491.00","$1,582.78","$57,995.15"
MIA - BGI,57632964603,M-BGI-CUR-2,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/57632964603,https://www.airlines-manager.com/aircraft/show/107121796,2:45,10:59,320,"$518,059.00","$469,235.00","$1,466.36","$56,992.11"
MIA - BGI,57640828142,M-BGI-CUR-5,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/57640828142,https://www.airlines-manager.com/aircraft/show/107121799,6:45,14:59,320,"$518,059.00","$469,235.00","$1,466.36","$56,992.11"
MIA - BGI,57651685747,M-BGI-CUR-1,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/57651685747,https://www.airlines-manager.com/aircraft/show/107121795,12:00,20:14,320,"$518,059.00","$469,235.00","$1,466.36","$56,992.11"
MIA - BGI,57655460195,M-BGI-CUR-4,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/57655460195,https://www.airlines-manager.com/aircraft/show/107121798,13:30,21:44,320,"$518,059.00","$469,235.00","$1,466.36","$56,992.11"
MIA - BGI,57668758388,M-BGI-CUR-3,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/57668758388,https://www.airlines-manager.com/aircraft/show/107121797,20:00,4:14,320,"$518,059.00","$469,235.00","$1,466.36","$56,992.11"
MIA - BHM,57632964696,M-CID-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/57632964696,https://www.airlines-manager.com/aircraft/show/116789651,3:45,8:29,310,"$302,720.00","$273,542.00",$882.39,"$57,790.56"
MIA - BHM,57648263109,M-CID-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/57648263109,https://www.airlines-manager.com/aircraft/show/116789652,10:00,14:44,310,"$302,720.00","$273,542.00",$882.39,"$57,790.56"
MIA - BHM,57665599524,M-CID-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/57665599524,https://www.airlines-manager.com/aircraft/show/116789653,17:15,21:59,310,"$302,720.00","$273,542.00",$882.39,"$57,790.56"
MIA - BHM,57674153274,M-CID-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/57674153274,https://www.airlines-manager.com/aircraft/show/116789650,22:45,3:29,310,"$302,720.00","$273,542.00",$882.39,"$57,790.56"
MIA - BIL,57648263074,M-BIL-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/57648263074,https://www.airlines-manager.com/aircraft/show/116789629,10:00,20:14,320,"634,212$","578,720$","$1,808.50","$56,552.44"
MIA - BIL,57651685758,M-BIL-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/57651685758,https://www.airlines-manager.com/aircraft/show/116789628,12:00,22:14,320,"$634,212.00","$578,720.00","$1,808.50","$56,552.44"
MIA - BIL,57658665063,M-BIL-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/57658665063,https://www.airlines-manager.com/aircraft/show/116789627,14:00,0:14,320,"$634,212.00","$578,720.00","$1,808.50","$56,552.44"
MIA - BIL,57671659297,M-BIL-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/57671659297,https://www.airlines-manager.com/aircraft/show/116789626,21:30,7:44,320,"$634,212.00","$578,720.00","$1,808.50","$56,552.44"
MIA - BIL,57675937113,M-BIL-BZN-5,ERJ-175,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/57675937113,https://www.airlines-manager.com/aircraft/show/116042637,23:45,9:59,112,"$298,004.00","$264,192.00","$2,358.86","$25,816.81"
MIA - BNA,57632964213,M-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/57632964213,https://www.airlines-manager.com/aircraft/show/103534663,0:45,5:59,112,"$157,714.00","$136,236.00","$1,216.39","$26,032.36"
MIA - BNA,57632964215,M-BOI-BNA-4,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/57632964215,https://www.airlines-manager.com/aircraft/show/103775657,1:15,6:29,320,"$332,050.00","$293,799.00",$918.12,"$56,139.94"
MIA - BNA,57637373123,M-BOI-BNA-3,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/57637373123,https://www.airlines-manager.com/aircraft/show/104020880,4:45,9:59,320,"$332,050.00","$293,799.00",$918.12,"$56,139.94"
MIA - BNA,57648263067,M-BOI-BNA-2,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/57648263067,https://www.airlines-manager.com/aircraft/show/104022609,10:00,15:14,320,"$332,050.00","$293,799.00",$918.12,"$56,139.94"
MIA - BNA,57651685794,M-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/57651685794,https://www.airlines-manager.com/aircraft/show/103534663,12:00,17:14,112,"$157,714.00","$136,236.00","$1,216.39","$26,032.36"
MIA - BNA,57671659274,M-BOI-BNA-1,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/57671659274,https://www.airlines-manager.com/aircraft/show/104133006,21:15,2:29,320,"$332,050.00","$293,799.00",$918.12,"$56,139.94"
MIA - BOI,57632964514,M-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/57632964514,https://www.airlines-manager.com/aircraft/show/106339154,1:45,12:59,198,"$525,442.00","$481,573.00","$2,432.19","$42,870.00"
MIA - BOI,57648263068,M-BOI-BNA-1,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/57648263068,https://www.airlines-manager.com/aircraft/show/104133006,10:00,21:14,320,"$698,526.00","$638,374.00","$1,994.92","$56,828.55"
MIA - BOI,57658665053,M-BOI-BNA-4,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/57658665053,https://www.airlines-manager.com/aircraft/show/103775657,14:00,1:14,320,"$698,526.00","$638,374.00","$1,994.92","$56,828.55"
MIA - BOI,57665599544,M-BOI-BNA-3,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/57665599544,https://www.airlines-manager.com/aircraft/show/104020880,17:30,4:44,320,"$698,526.00","$638,374.00","$1,994.92","$56,828.55"
MIA - BOI,57674153257,M-BOI-BNA-2,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/57674153257,https://www.airlines-manager.com/aircraft/show/104022609,22:45,9:59,320,"$698,526.00","$638,374.00","$1,994.92","$56,828.55"
MIA - BOS,57632964535,M-SJU-BOS-5,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/57632964535,https://www.airlines-manager.com/aircraft/show/91352059,2:00,8:59,310,"$445,815.00","$401,406.00","$1,294.86","$57,480.57"
MIA - BOS,57637373155,M-SJU-BOS-1,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/57637373155,https://www.airlines-manager.com/aircraft/show/91352063,5:00,11:59,310,"$445,815.00","$401,406.00","$1,294.86","$57,480.57"
MIA - BOS,57651685707,M-SJU-BOS-4,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/57651685707,https://www.airlines-manager.com/aircraft/show/91352060,11:15,18:14,310,"$445,815.00","$401,406.00","$1,294.86","$57,480.57"
MIA - BOS,57662009375,M-SJU-BOS-2,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/57662009375,https://www.airlines-manager.com/aircraft/show/91352062,16:30,23:29,310,"$445,815.00","$401,406.00","$1,294.86","$57,480.57"
MIA - BOS,57668758268,M-SJU-BOS-3,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/57668758268,https://www.airlines-manager.com/aircraft/show/91352061,19:00,1:59,310,"$445,815.00","$401,406.00","$1,294.86","$57,480.57"
MIA - BOS,57668758269,M-SJU-BOS-6 B,A319-100,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/57668758269,https://www.airlines-manager.com/aircraft/show/110582841,20:15,3:14,198,"$337,082.00","$301,501.00","$1,522.73","$43,174.37"
MIA - BTV,57632964629,M-DSM-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/57632964629,https://www.airlines-manager.com/aircraft/show/111064081,3:00,10:14,320,"$461,408.00","$418,536.00","$1,307.93","$57,862.12"
MIA - BTV,57644525269,M-DSM-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/57644525269,https://www.airlines-manager.com/aircraft/show/113101228,8:45,15:59,320,"$461,408.00","$418,536.00","$1,307.93","$57,862.12"
MIA - BTV,57655460097,M-DSM-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/57655460097,https://www.airlines-manager.com/aircraft/show/113101233,13:00,20:14,320,"$461,408.00","$418,536.00","$1,307.93","$57,862.12"
MIA - BTV,57668758353,M-DSM-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/57668758353,https://www.airlines-manager.com/aircraft/show/113101230,19:45,2:59,320,"$461,408.00","$418,536.00","$1,307.93","$57,862.12"
MIA - BTV,57674153307,M-DSM-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/57674153307,https://www.airlines-manager.com/aircraft/show/100049776,23:00,6:29,112,"$219,081.00","$193,710.00","$1,729.55","$25,885.52"
MIA - BUF,57632964626,M-BDL-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/57632964626,https://www.airlines-manager.com/aircraft/show/107763561,3:00,9:44,320,"$425,908.00","$384,093.00","$1,200.29","$57,043.51"
MIA - BUF,57632964627,M-BDL-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/57632964627,https://www.airlines-manager.com/aircraft/show/107763566,3:15,9:59,320,"$425,908.00","$384,093.00","$1,200.29","$57,043.51"
MIA - BUF,57651685622,M-BDL-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/57651685622,https://www.airlines-manager.com/aircraft/show/107763562,11:00,17:44,320,"$425,908.00","$384,093.00","$1,200.29","$57,043.51"
MIA - BUF,57665599547,M-BDL-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/57665599547,https://www.airlines-manager.com/aircraft/show/107763565,17:30,0:14,320,"$425,908.00","$384,093.00","$1,200.29","$57,043.51"
MIA - BUF,57671659288,M-BDL-SAT-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/57671659288,https://www.airlines-manager.com/aircraft/show/107467213,21:15,3:59,112,"$200,324.00","$175,956.00","$1,571.04","$26,132.08"
MIA - BUR,57632964616,M-BUR-PVD-4,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/57632964616,https://www.airlines-manager.com/aircraft/show/108834806,2:45,13:59,310,"$704,259.00","$651,354.00","$2,101.14","$57,984.04"
MIA - BUR,57651685670,M-BUR-PVD-1,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/57651685670,https://www.airlines-manager.com/aircraft/show/108834803,11:00,22:14,310,"$704,259.00","$651,354.00","$2,101.14","$57,984.04"
MIA - BUR,57658665097,M-BUR-PVD-3,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/57658665097,https://www.airlines-manager.com/aircraft/show/108834805,14:00,1:14,310,"$704,259.00","$651,354.00","$2,101.14","$57,984.04"
MIA - BUR,57668758408,M-BUR-PVD-5 B,A319-100,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/57668758408,https://www.airlines-manager.com/aircraft/show/108834807,20:00,7:14,198,"528,191$","485,766$","$2,453.36","$43,243.26"
MIA - BUR,57671659225,M-BUR-PVD-2,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/57671659225,https://www.airlines-manager.com/aircraft/show/108834804,20:45,7:59,310,"$704,259.00","$651,354.00","$2,101.14","$57,984.04"
MIA - BWI,57632964709,M-BWI-YYZ-4,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/57632964709,https://www.airlines-manager.com/aircraft/show/92153442,4:00,9:44,310,"$362,448.00","$324,139.00","$1,045.61","$56,535.87"
MIA - BWI,57640828098,M-BWI-YYZ-5,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/57640828098,https://www.airlines-manager.com/aircraft/show/92153439,6:00,11:44,310,"$362,448.00","$324,139.00","$1,045.61","$56,535.87"
MIA - BWI,57648263093,M-BWI-YYZ-1,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/57648263093,https://www.airlines-manager.com/aircraft/show/92153443,10:00,15:44,310,"$362,448.00","$324,139.00","$1,045.61","$56,535.87"
MIA - BWI,57655460130,M-BWI-YYZ-2,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/57655460130,https://www.airlines-manager.com/aircraft/show/92153440,13:00,18:44,310,"$362,448.00","$324,139.00","$1,045.61","$56,535.87"
MIA - BWI,57671659251,M-BWI-YYZ-3,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/57671659251,https://www.airlines-manager.com/aircraft/show/92153441,21:00,2:44,310,"$362,448.00","$324,139.00","$1,045.61","$56,535.87"
MIA - BWI,57674153304,M-BWI-YYZ-6 B,A319-100,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/57674153304,https://www.airlines-manager.com/aircraft/show/120519717,23:00,4:44,173,"$257,396.00","$227,452.00","$1,314.75","$39,671.86"
MIA - BZN,57632964003,M-BIL-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/57632964003,https://www.airlines-manager.com/aircraft/show/116789627,0:15,10:44,320,"$656,911.00","$600,715.00","$1,877.23","$57,301.91"
MIA - BZN,57651685628,M-BIL-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/57651685628,https://www.airlines-manager.com/aircraft/show/116789626,11:00,21:29,320,"$656,911.00","$600,715.00","$1,877.23","$57,301.91"
MIA - BZN,57655460181,M-BIL-BZN-5,ERJ-175,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/57655460181,https://www.airlines-manager.com/aircraft/show/116042637,13:00,23:44,112,"$309,244.00","$274,765.00","$2,453.26","$25,599.22"
MIA - BZN,57668758426,M-BIL-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/57668758426,https://www.airlines-manager.com/aircraft/show/116789629,20:15,6:44,320,"656,911$","600,715$","$1,877.23","$57,301.91"
MIA - BZN,57674153198,M-BIL-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/57674153198,https://www.airlines-manager.com/aircraft/show/116789628,22:15,8:44,320,"$656,911.00","$600,715.00","$1,877.23","$57,301.91"
MIA - CAK,57632964539,M-MHT-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/57632964539,https://www.airlines-manager.com/aircraft/show/115493370,2:00,8:14,310,"$385,091.00","$351,321.00","$1,133.29","$56,361.66"
MIA - CAK,57644525228,M-MHT-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/57644525228,https://www.airlines-manager.com/aircraft/show/115493371,8:15,14:29,310,"$385,091.00","$351,321.00","$1,133.29","$56,361.66"
MIA - CAK,57651685679,M-MHT-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/57651685679,https://www.airlines-manager.com/aircraft/show/115493372,11:00,17:14,310,"$385,091.00","$351,321.00","$1,133.29","$56,361.66"
MIA - CAK,57665599630,M-MHT-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/57665599630,https://www.airlines-manager.com/aircraft/show/114912307,18:00,0:14,112,"$181,775.00","$159,685.00","$1,425.76","$25,617.91"
MIA - CAK,57671659257,M-MHT-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/57671659257,https://www.airlines-manager.com/aircraft/show/115493373,21:00,3:14,279,"$362,230.00","$329,349.00","$1,180.46","$52,836.74"
MIA - CHS,57632964660,M-SDF-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/57632964660,https://www.airlines-manager.com/aircraft/show/94886626,3:15,7:14,310,"$226,980.00","$200,988.00",$648.35,"$50,457.24"
MIA - CHS,57648262984,M-SDF-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/57648262984,https://www.airlines-manager.com/aircraft/show/96692674,9:00,12:59,310,"$226,980.00","$200,988.00",$648.35,"$50,457.24"
MIA - CHS,57651685698,M-SDF-PWM-5,ERJ-175,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/57651685698,https://www.airlines-manager.com/aircraft/show/105601657,11:00,14:59,112,"105,788$","89,336$",$797.64,"$22,427.45"
MIA - CHS,57658665077,M-SDF-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/57658665077,https://www.airlines-manager.com/aircraft/show/94886625,14:00,17:59,310,"226,980$","200,988$",$648.35,"$50,457.24"
MIA - CHS,57671659224,M-SDF-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/57671659224,https://www.airlines-manager.com/aircraft/show/94886629,20:45,0:44,296,"220,946$","195,142$",$659.26,"$48,989.62"
MIA - CID,57632964345,M-CID-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/57632964345,https://www.airlines-manager.com/aircraft/show/116789652,1:15,8:29,310,"455,731$","418,272$","$1,349.26","$57,825.62"
MIA - CID,57648263110,M-CID-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/57648263110,https://www.airlines-manager.com/aircraft/show/116789653,10:00,17:14,310,"$455,731.00","$418,272.00","$1,349.26","$57,825.62"
MIA - CID,57662009239,M-CID-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/57662009239,https://www.airlines-manager.com/aircraft/show/116789650,15:30,22:44,310,"$455,731.00","$418,272.00","$1,349.26","$57,825.62"
MIA - CID,57671659195,M-CID-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/57671659195,https://www.airlines-manager.com/aircraft/show/116789651,20:30,3:44,310,"455,731$","418,272$","$1,349.26","$57,825.62"
MIA - CLE,57632964144,M-COS-CVG-5,ERJ-175,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/57632964144,https://www.airlines-manager.com/aircraft/show/103534665,0:30,6:44,112,"$188,656.00","$164,872.00","$1,472.07","$26,450.05"
MIA - CLE,57637373064,M-COS-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/57637373064,https://www.airlines-manager.com/aircraft/show/103684630,4:15,10:29,320,"$400,132.00","$358,875.00","$1,121.48","$57,573.53"
MIA - CLE,57644525173,M-COS-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/57644525173,https://www.airlines-manager.com/aircraft/show/103365574,7:45,13:59,320,"$400,132.00","$358,875.00","$1,121.48","$57,573.53"
MIA - CLE,57655460087,M-COS-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/57655460087,https://www.airlines-manager.com/aircraft/show/103684632,13:00,19:14,320,"$400,132.00","$358,875.00","$1,121.48","$57,573.53"
MIA - CLE,57671659212,M-COS-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/57671659212,https://www.airlines-manager.com/aircraft/show/103684631,20:45,2:59,320,"$400,132.00","$358,875.00","$1,121.48","$57,573.53"
MIA - CLT,57637373084,M-ORD-DFW-6,ERJ-175,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/57637373084,https://www.airlines-manager.com/aircraft/show/82543123,4:15,8:59,112,"$142,655.00","$118,748.00","$1,060.25","$25,087.61"
MIA - CLT,57648263090,M-ORD-DFW-3,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/57648263090,https://www.airlines-manager.com/aircraft/show/91600939,10:00,14:44,310,"$299,768.00","$261,819.00",$844.58,"$55,313.87"
MIA - CLT,57662009325,M-ORD-DFW-2,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/57662009325,https://www.airlines-manager.com/aircraft/show/91600936,16:00,20:44,310,"$299,768.00","$261,819.00",$844.58,"$55,313.87"
MIA - CLT,57665599576,M-ORD-DFW-5,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/57665599576,https://www.airlines-manager.com/aircraft/show/91600937,17:45,22:29,310,"299,768$","261,819$",$844.58,"$55,313.87"
MIA - CLT,57674153235,M-ORD-DFW-1,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/57674153235,https://www.airlines-manager.com/aircraft/show/91600935,22:30,3:14,310,"$299,768.00","$261,819.00",$844.58,"$55,313.87"
MIA - CLT,57675937073,M-ORD-DFW-4,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/57675937073,https://www.airlines-manager.com/aircraft/show/91600938,23:30,4:14,310,"$299,768.00","$261,819.00",$844.58,"$55,313.87"
MIA - CMH,57632964480,M-MKE-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/57632964480,https://www.airlines-manager.com/aircraft/show/88494374,1:45,7:44,320,"$373,993.00","$333,972.00","$1,043.66","$55,817.05"
MIA - CMH,57640828177,M-MKE-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/57640828177,https://www.airlines-manager.com/aircraft/show/88494378,7:15,13:14,320,"$373,993.00","$333,972.00","$1,043.66","$55,817.05"
MIA - CMH,57658665044,M-MKE-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/57658665044,https://www.airlines-manager.com/aircraft/show/91806233,14:00,19:59,320,"$373,993.00","$333,972.00","$1,043.66","$55,817.05"
MIA - CMH,57665599624,M-MKE-CMH-5 B,A319-100,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/57665599624,https://www.airlines-manager.com/aircraft/show/110582842,18:00,23:59,198,"$283,790.00","$255,521.00","$1,290.51","$42,705.46"
MIA - CMH,57671659242,M-MKE-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/57671659242,https://www.airlines-manager.com/aircraft/show/88239556,21:00,2:59,320,"$373,993.00","$333,972.00","$1,043.66","$55,817.05"
MIA - CMN,57637373165,M-84B-4 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/57637373165,https://www.airlines-manager.com/aircraft/show/106676228,5:00,22:44,962,"$2,973,893.00","$2,715,224.00","$2,822.48","$153,114.14"
MIA - CMN,57671659200,M-84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/57671659200,https://www.airlines-manager.com/aircraft/show/106676225,20:30,14:14,962,"$2,973,893.00","$2,715,224.00","$2,822.48","$153,114.14"
MIA - COS,57640828124,M-COS-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/57640828124,https://www.airlines-manager.com/aircraft/show/103684631,6:30,14:59,320,"$546,028.00","$494,638.00","$1,545.74","$58,307.03"
MIA - COS,57648263132,M-COS-CVG-5,ERJ-175,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/57648263132,https://www.airlines-manager.com/aircraft/show/103534665,10:00,18:44,112,"$257,259.00","$226,678.00","$2,023.91","$25,955.50"
MIA - COS,57658665052,M-COS-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/57658665052,https://www.airlines-manager.com/aircraft/show/103684630,14:00,22:29,320,"$546,028.00","$494,638.00","$1,545.74","$58,307.03"
MIA - COS,57665599543,M-COS-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/57665599543,https://www.airlines-manager.com/aircraft/show/103365574,17:30,1:59,320,"$546,028.00","$494,638.00","$1,545.74","$58,307.03"
MIA - COS,57674153256,M-COS-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/57674153256,https://www.airlines-manager.com/aircraft/show/103684632,22:45,7:14,320,"$546,028.00","$494,638.00","$1,545.74","$58,307.03"
MIA - CPT,57637373162,M-84A-6 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/57637373162,https://www.airlines-manager.com/aircraft/show/93731916,5:00,10:29,1124,"$5,639,082.00","$5,244,474.00","$4,665.90","$956,439.03"
MIA - CPT,57665599622,M-84A-2 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/57665599622,https://www.airlines-manager.com/aircraft/show/93686968,18:00,23:29,1124,"$5,639,082.00","$5,244,474.00","$4,665.90","$956,439.03"
MIA - CUN,57637373185,M-PSP-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/57637373185,https://www.airlines-manager.com/aircraft/show/116789631,5:30,9:44,320,"$251,434.00","$216,081.00",$675.25,"$51,042.76"
MIA - CUN,57648263017,M-PSP-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/57648263017,https://www.airlines-manager.com/aircraft/show/116789634,9:30,13:44,320,"$251,434.00","$216,081.00",$675.25,"$51,042.76"
MIA - CUN,57648263018,M-PSP-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/57648263018,https://www.airlines-manager.com/aircraft/show/116789632,10:00,14:14,320,"$251,434.00","$216,081.00",$675.25,"$51,042.76"
MIA - CUN,57665599696,M-PSP-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/57665599696,https://www.airlines-manager.com/aircraft/show/116789633,18:45,22:59,320,"$251,434.00","$216,081.00",$675.25,"$51,042.76"
MIA - CUN,57671659329,M-PSP-BFF-5,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/57671659329,https://www.airlines-manager.com/aircraft/show/116789630,21:45,1:59,317,"$249,294.00","$213,994.00",$675.06,"$50,549.76"
MIA - CUR,57637373065,M-BGI-CUR-3,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/57637373065,https://www.airlines-manager.com/aircraft/show/107121797,4:15,10:59,320,"$414,925.00","$372,912.00","$1,165.35","$55,382.97"
MIA - CUR,57651685618,M-BGI-CUR-2,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/57651685618,https://www.airlines-manager.com/aircraft/show/107121796,11:00,17:44,320,"$414,925.00","$372,912.00","$1,165.35","$55,382.97"
MIA - CUR,57658665204,M-BGI-CUR-5,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/57658665204,https://www.airlines-manager.com/aircraft/show/107121799,15:00,21:44,320,"$414,925.00","$372,912.00","$1,165.35","$55,382.97"
MIA - CUR,57668758421,M-BGI-CUR-1,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/57668758421,https://www.airlines-manager.com/aircraft/show/107121795,20:15,2:59,320,"$414,925.00","$372,912.00","$1,165.35","$55,382.97"
MIA - CUR,57671659326,M-BGI-CUR-4,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/57671659326,https://www.airlines-manager.com/aircraft/show/107121798,21:45,4:29,298,"$388,855.00","$347,726.00","$1,166.87","$51,642.48"
MIA - CVG,57632964526,M-COS-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/57632964526,https://www.airlines-manager.com/aircraft/show/103365574,2:00,7:44,320,"370,605$","328,724$","$1,027.26","$57,335.58"
MIA - CVG,57640828179,M-COS-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/57640828179,https://www.airlines-manager.com/aircraft/show/103684632,7:15,12:59,320,"$370,605.00","$328,724.00","$1,027.26","$57,335.58"
MIA - CVG,57658665203,M-COS-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/57658665203,https://www.airlines-manager.com/aircraft/show/103684631,15:00,20:44,320,"$370,605.00","$328,724.00","$1,027.26","$57,335.58"
MIA - CVG,57665599719,M-COS-CVG-5,ERJ-175,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/57665599719,https://www.airlines-manager.com/aircraft/show/103534665,18:45,0:29,112,"$175,356.00","$151,647.00","$1,353.99","$26,450.06"
MIA - CVG,57674153231,M-COS-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/57674153231,https://www.airlines-manager.com/aircraft/show/103684630,22:30,4:14,320,"$370,605.00","$328,724.00","$1,027.26","$57,335.58"
MIA - DEN,57632964362,M-LAX-DEN-3,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/57632964362,https://www.airlines-manager.com/aircraft/show/91126651,1:30,9:59,400,"730,615$","644,983$","$1,612.46","$76,029.43"
MIA - DEN,57632964363,M-LAX-DEN-4,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/57632964363,https://www.airlines-manager.com/aircraft/show/91126652,3:30,11:59,400,"730,615$","644,983$","$1,612.46","$76,029.43"
MIA - DEN,57651685592,M-LAX-DEN-1,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/57651685592,https://www.airlines-manager.com/aircraft/show/91126649,11:00,19:29,400,"730,615$","644,983$","$1,612.46","$76,029.43"
MIA - DEN,57665599539,M-LAX-DEN-2,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/57665599539,https://www.airlines-manager.com/aircraft/show/91126650,17:30,1:59,400,"$730,615.00","$644,983.00","$1,612.46","$76,029.43"
MIA - DEN,57674153213,M-LAX-DEN-5 E,A319-100,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/57674153213,https://www.airlines-manager.com/aircraft/show/115181776,22:15,6:59,216,"428,425$","372,033$","$1,722.38","$42,599.20"
MIA - DFW,57632964678,M-ORD-DFW-2,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/57632964678,https://www.airlines-manager.com/aircraft/show/91600936,3:30,9:59,310,"$410,166.00","$354,245.00","$1,142.73","$54,639.33"
MIA - DFW,57648263088,M-ORD-DFW-1,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/57648263088,https://www.airlines-manager.com/aircraft/show/91600935,10:00,16:29,310,"$410,166.00","$354,245.00","$1,142.73","$54,639.33"
MIA - DFW,57651685656,M-ORD-DFW-4,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/57651685656,https://www.airlines-manager.com/aircraft/show/91600938,11:00,17:29,310,"$410,166.00","$354,245.00","$1,142.73","$54,639.33"
MIA - DFW,57662009264,M-ORD-DFW-6,ERJ-175,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/57662009264,https://www.airlines-manager.com/aircraft/show/82543123,15:45,22:14,112,"$193,018.00","$157,511.00","$1,406.35","$24,294.76"
MIA - DFW,57671659303,M-ORD-DFW-3,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/57671659303,https://www.airlines-manager.com/aircraft/show/91600939,21:30,3:59,310,"$410,166.00","$354,245.00","$1,142.73","$54,639.33"
MIA - DFW,57674153236,M-ORD-DFW-5,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/57674153236,https://www.airlines-manager.com/aircraft/show/91600937,22:30,4:59,310,"$410,166.00","$354,245.00","$1,142.73","$54,639.33"
MIA - DSM,57632964630,M-DSM-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/57632964630,https://www.airlines-manager.com/aircraft/show/113101230,3:00,10:14,320,"$457,870.00","$414,841.00","$1,296.38","$57,351.29"
MIA - DSM,57644525280,M-DSM-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/57644525280,https://www.airlines-manager.com/aircraft/show/100049776,8:45,15:59,112,"$216,773.00","$191,389.00","$1,708.83","$26,459.31"
MIA - DSM,57655460095,M-DSM-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/57655460095,https://www.airlines-manager.com/aircraft/show/111064081,13:00,20:14,320,"$457,870.00","$414,841.00","$1,296.38","$57,351.29"
MIA - DSM,57662009298,M-DSM-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/57662009298,https://www.airlines-manager.com/aircraft/show/113101228,16:00,23:14,320,"$457,870.00","$414,841.00","$1,296.38","$57,351.29"
MIA - DSM,57668758424,M-DSM-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/57668758424,https://www.airlines-manager.com/aircraft/show/113101233,20:15,3:29,320,"$457,870.00","$414,841.00","$1,296.38","$57,351.29"
MIA - DSS,57632963886,M-84B-7 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/57632963886,https://www.airlines-manager.com/aircraft/show/106676231,0:00,16:59,962,"$2,864,435.00","$2,618,423.00","$2,721.85","$154,176.04"
MIA - DSS,57651685791,M-84B-3 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/57651685791,https://www.airlines-manager.com/aircraft/show/106676227,12:00,4:59,962,"$2,864,435.00","$2,618,423.00","$2,721.85","$154,176.04"
MIA - DTW,57632964368,M-PDX-DTW-3,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/57632964368,https://www.airlines-manager.com/aircraft/show/89943713,1:30,7:59,320,"$414,846.00","$362,524.00","$1,132.89","$55,916.30"
MIA - DTW,57632964369,M-PDX-DTW-4,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/57632964369,https://www.airlines-manager.com/aircraft/show/89943712,2:30,8:59,320,"$414,846.00","$362,524.00","$1,132.89","$55,916.30"
MIA - DTW,57648263048,M-PDX-DTW-2,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/57648263048,https://www.airlines-manager.com/aircraft/show/89943714,10:00,16:29,320,"$414,846.00","$362,524.00","$1,132.89","$55,916.30"
MIA - DTW,57658665042,M-PDX-DTW-5,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/57658665042,https://www.airlines-manager.com/aircraft/show/89943711,14:00,20:29,320,"$414,846.00","$362,524.00","$1,132.89","$55,916.30"
MIA - DTW,57674153226,M-PDX-DTW-1,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/57674153226,https://www.airlines-manager.com/aircraft/show/89943715,22:30,4:59,320,"$414,846.00","$362,524.00","$1,132.89","$55,916.30"
MIA - ECP,57632964024,M-MAF-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50834918,https://www.airlines-manager.com/network/showflight/57632964024,https://www.airlines-manager.com/aircraft/show/92137503,0:15,4:14,112,"$103,168.00","$86,664.00",$773.79,"$21,756.65"
MIA - ECP,57632964025,M-MAF-ROC-4,A321-200,https://www.airlines-manager.com/network/showline/50834918,https://www.airlines-manager.com/network/showflight/57632964025,https://www.airlines-manager.com/aircraft/show/120933310,2:15,6:14,310,"221,304$","195,136$",$629.47,"$48,988.12"
MIA - ECP,57644525206,M-MAF-ROC-3,A321-200,https://www.airlines-manager.com/network/showline/50834918,https://www.airlines-manager.com/network/showflight/57644525206,https://www.airlines-manager.com/aircraft/show/120933309,8:00,11:59,310,"221,304$","195,136$",$629.47,"$48,988.12"
MIA - ECP,57648263117,M-MAF-ROC-2,A321-200,https://www.airlines-manager.com/network/showline/50834918,https://www.airlines-manager.com/network/showflight/57648263117,https://www.airlines-manager.com/aircraft/show/120933308,10:00,13:59,310,"221,304$","195,136$",$629.47,"$48,988.12"
MIA - ECP,57662009398,M-MAF-ROC-1,A321-200,https://www.airlines-manager.com/network/showline/50834918,https://www.airlines-manager.com/network/showflight/57662009398,https://www.airlines-manager.com/aircraft/show/120933307,16:45,20:44,310,"221,304$","195,136$",$629.47,"$48,988.12"
MIA - ELP,57644525229,M-ELP-MCI-5 B,A319-100,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/57644525229,https://www.airlines-manager.com/aircraft/show/105093924,8:15,16:44,198,"$402,779.00","$366,768.00","$1,852.36","$43,233.95"
MIA - ELP,57648263053,M-ELP-MCI-1,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/57648263053,https://www.airlines-manager.com/aircraft/show/91806234,10:00,18:29,320,"$534,175.00","$484,066.00","$1,512.71","$57,060.83"
MIA - ELP,57662009352,M-ELP-MCI-3,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/57662009352,https://www.airlines-manager.com/aircraft/show/91806232,16:15,0:44,320,"$534,175.00","$484,066.00","$1,512.71","$57,060.83"
MIA - ELP,57662009353,M-ELP-MCI-4,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/57662009353,https://www.airlines-manager.com/aircraft/show/91806231,17:00,1:29,320,"534,175$","484,066$","$1,512.71","$57,060.83"
MIA - ELP,57674153317,M-ELP-MCI-2,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/57674153317,https://www.airlines-manager.com/aircraft/show/91806235,23:15,7:44,320,"$534,175.00","$484,066.00","$1,512.71","$57,060.83"
MIA - EUG,57632964450,M-EUG-SYR-4,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/57632964450,https://www.airlines-manager.com/aircraft/show/119652480,1:30,13:59,320,"$770,422.00","$706,945.00","$2,209.20","$56,631.11"
MIA - EUG,57658665072,M-EUG-SYR-1,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/57658665072,https://www.airlines-manager.com/aircraft/show/119652483,14:00,2:29,320,"$770,422.00","$706,945.00","$2,209.20","$56,631.11"
MIA - EUG,57665599697,M-EUG-SYR-3,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/57665599697,https://www.airlines-manager.com/aircraft/show/119652481,18:45,7:14,320,"$770,422.00","$706,945.00","$2,209.20","$56,631.11"
MIA - EUG,57675937071,M-EUG-SYR-2,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/57675937071,https://www.airlines-manager.com/aircraft/show/119652482,23:30,11:59,320,"$770,422.00","$706,945.00","$2,209.20","$56,631.11"
MIA - FAR,57632964177,M-FAR-TUL-3,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/57632964177,https://www.airlines-manager.com/aircraft/show/110883161,0:45,9:29,320,"$548,683.00","$499,861.00","$1,562.07","$57,235.99"
MIA - FAR,57640828180,M-FAR-TUL-4,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/57640828180,https://www.airlines-manager.com/aircraft/show/110883162,7:15,15:59,320,"$548,683.00","$499,861.00","$1,562.07","$57,235.99"
MIA - FAR,57651685625,M-FAR-TUL-1,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/57651685625,https://www.airlines-manager.com/aircraft/show/110883159,11:00,19:44,320,"$548,683.00","$499,861.00","$1,562.07","$57,235.99"
MIA - FAR,57662009296,M-FAR-TUL-2,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/57662009296,https://www.airlines-manager.com/aircraft/show/110883160,16:00,0:44,320,"$548,683.00","$499,861.00","$1,562.07","$57,235.99"
MIA - FAR,57665599655,M-FAR-TUL-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/57665599655,https://www.airlines-manager.com/aircraft/show/87169421,18:15,2:59,112,"$258,578.00","$229,164.00","$2,046.11","$26,240.15"
MIA - FAT,57644525240,M-FAT-MSO-4,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/57644525240,https://www.airlines-manager.com/aircraft/show/113101232,8:30,19:59,320,"$721,117.00","$660,903.00","$2,065.32","$57,553.24"
MIA - FAT,57651685551,M-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/57651685551,https://www.airlines-manager.com/aircraft/show/120519142,10:45,22:14,0,"$202,638.00","$131,134.00",#DIV/0!,"$11,419.51"
MIA - FAT,57651685552,M-FAT-MSO-1,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/57651685552,https://www.airlines-manager.com/aircraft/show/113101229,11:00,22:29,320,"$721,117.00","$660,903.00","$2,065.32","$57,553.24"
MIA - FAT,57668758246,M-FAT-MSO-2,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/57668758246,https://www.airlines-manager.com/aircraft/show/113101231,19:00,6:29,320,"$721,117.00","$660,903.00","$2,065.32","$57,553.24"
MIA - FAT,57674153197,M-FAT-MSO-3,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/57674153197,https://www.airlines-manager.com/aircraft/show/113101234,22:15,9:44,320,"$684,642.00","$629,659.00","$1,967.68","$54,832.42"
MIA - FCA,57632964076,M-FCA-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/57632964076,https://www.airlines-manager.com/aircraft/show/119652477,0:30,11:59,320,"$707,833.00","$648,466.00","$2,026.46","$56,470.19"
MIA - FCA,57632964079,M-FCA-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/57632964079,https://www.airlines-manager.com/aircraft/show/119652476,2:30,13:59,320,"$707,833.00","$648,466.00","$2,026.46","$56,470.19"
MIA - FCA,57651685762,M-FCA-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/57651685762,https://www.airlines-manager.com/aircraft/show/119652479,12:00,23:29,320,"$707,833.00","$648,466.00","$2,026.46","$56,470.19"
MIA - FCA,57658665069,M-FCA-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/57658665069,https://www.airlines-manager.com/aircraft/show/119652478,14:00,1:29,320,"$707,833.00","$648,466.00","$2,026.46","$56,470.19"
MIA - FPO,57632963997,M-BGI-CUR-2,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/57632963997,https://www.airlines-manager.com/aircraft/show/107121796,0:15,2:44,320,"$84,372.00","$59,731.00",$186.66,"$24,052.75"
MIA - FPO,57637373066,M-BGI-CUR-5,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/57637373066,https://www.airlines-manager.com/aircraft/show/107121799,4:15,6:44,320,"$84,372.00","$59,731.00",$186.66,"$24,052.75"
MIA - FPO,57648263016,M-BGI-CUR-1,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/57648263016,https://www.airlines-manager.com/aircraft/show/107121795,9:30,11:59,320,"$84,372.00","$59,731.00",$186.66,"$24,052.75"
MIA - FPO,57651685620,M-BGI-CUR-4,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/57651685620,https://www.airlines-manager.com/aircraft/show/107121798,11:00,13:29,320,"$84,372.00","$59,731.00",$186.66,"$24,052.75"
MIA - FPO,57665599546,M-BGI-CUR-3,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/57665599546,https://www.airlines-manager.com/aircraft/show/107121797,17:30,19:59,209,"$62,172.00","$37,911.00",$181.39,"$15,266.17"
MIA - FSD,57632964294,M-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/57632964294,https://www.airlines-manager.com/aircraft/show/110883110,1:00,8:59,310,"$503,709.00","$462,376.00","$1,491.54","$57,917.66"
MIA - FSD,57632964295,M-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/57632964295,https://www.airlines-manager.com/aircraft/show/110883113,2:45,10:44,310,"503,709$","462,376$","$1,491.54","$57,917.66"
MIA - FSD,57658665099,M-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/57658665099,https://www.airlines-manager.com/aircraft/show/110883112,14:00,21:59,310,"$503,709.00","$462,376.00","$1,491.54","$57,917.66"
MIA - FSD,57662009358,M-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/57662009358,https://www.airlines-manager.com/aircraft/show/110883111,16:15,0:14,310,"$503,709.00","$462,376.00","$1,491.54","$57,917.66"
MIA - FSD,57674153183,M-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/57674153183,https://www.airlines-manager.com/aircraft/show/104353572,22:00,5:59,99,"$225,061.00","$198,438.00","$2,004.42","$24,856.53"
MIA - GRR,57632963893,M-RAP-GRR-5,ERJ-175,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/57632963893,https://www.airlines-manager.com/aircraft/show/116042630,0:00,6:44,112,"$200,498.00","$176,006.00","$1,571.48","$26,139.50"
MIA - GRR,57632963894,M-RAP-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/57632963894,https://www.airlines-manager.com/aircraft/show/116789623,2:15,8:59,320,"$424,936.00","$383,045.00","$1,197.02","$56,887.87"
MIA - GRR,57648263072,M-RAP-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/57648263072,https://www.airlines-manager.com/aircraft/show/116789624,10:00,16:44,320,"$424,936.00","$383,045.00","$1,197.02","$56,887.87"
MIA - GRR,57651685757,M-RAP-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/57651685757,https://www.airlines-manager.com/aircraft/show/116789622,12:00,18:44,320,"$424,936.00","$383,045.00","$1,197.02","$56,887.87"
MIA - GRR,57668758258,M-RAP-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/57668758258,https://www.airlines-manager.com/aircraft/show/116789625,19:00,1:44,320,"$424,936.00","$383,045.00","$1,197.02","$56,887.87"
MIA - GSO,57648262999,M-EUG-SYR-1,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/57648262999,https://www.airlines-manager.com/aircraft/show/119652483,9:15,13:59,320,"$310,263.00","$276,328.00",$863.53,"$58,379.15"
MIA - GSO,57658665071,M-EUG-SYR-3,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/57658665071,https://www.airlines-manager.com/aircraft/show/119652481,14:00,18:44,320,"$310,263.00","$276,328.00",$863.53,"$58,379.15"
MIA - GSO,57665599698,M-EUG-SYR-2,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/57665599698,https://www.airlines-manager.com/aircraft/show/119652482,18:45,23:29,320,"$310,263.00","$276,328.00",$863.53,"$58,379.15"
MIA - GSO,57671659217,M-EUG-SYR-4,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/57671659217,https://www.airlines-manager.com/aircraft/show/119652480,20:45,1:29,313,"$306,171.00","$272,370.00",$870.19,"$57,542.96"
MIA - HAV,57637373144,M-PDX-DTW-1,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/57637373144,https://www.airlines-manager.com/aircraft/show/89943715,5:00,7:59,320,"$131,980.00","$102,173.00",$319.29,"$34,247.93"
MIA - HAV,57648262975,M-PDX-DTW-4,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/57648262975,https://www.airlines-manager.com/aircraft/show/89943712,9:00,11:59,320,"$131,980.00","$102,173.00",$319.29,"$34,247.93"
MIA - HAV,57648262976,M-PDX-DTW-3,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/57648262976,https://www.airlines-manager.com/aircraft/show/89943713,10:00,12:59,320,"$131,980.00","$102,173.00",$319.29,"$34,247.93"
MIA - HAV,57662009369,M-PDX-DTW-2,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/57662009369,https://www.airlines-manager.com/aircraft/show/89943714,16:30,19:29,320,"$131,980.00","$102,173.00",$319.29,"$34,247.93"
MIA - HAV,57671659189,M-PDX-DTW-5,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/57671659189,https://www.airlines-manager.com/aircraft/show/89943711,20:30,23:29,291,"$121,421.00","$91,843.00",$315.61,"$30,785.36"
MIA - IAD,57637373072,M-IAD-TUS-2,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/57637373072,https://www.airlines-manager.com/aircraft/show/97556720,4:15,9:59,310,"$363,777.00","$324,476.00","$1,046.70","$56,594.65"
MIA - IAD,57640828182,M-IAD-TUS-5,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/57640828182,https://www.airlines-manager.com/aircraft/show/97556716,7:15,12:59,310,"$363,777.00","$324,476.00","$1,046.70","$56,594.65"
MIA - IAD,57648263100,M-IAD-TUS-1,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/57648263100,https://www.airlines-manager.com/aircraft/show/97556721,10:00,15:44,310,"$363,777.00","$324,476.00","$1,046.70","$56,594.65"
MIA - IAD,57655460133,M-IAD-TUS-4,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/57655460133,https://www.airlines-manager.com/aircraft/show/97556718,13:00,18:44,310,"$363,777.00","$324,476.00","$1,046.70","$56,594.65"
MIA - IAD,57665599709,M-IAD-TUS-3,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/57665599709,https://www.airlines-manager.com/aircraft/show/97556719,18:45,0:29,310,"$363,777.00","$324,476.00","$1,046.70","$56,594.65"
MIA - ICT,57632964580,M-FAR-TUL-1,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/57632964580,https://www.airlines-manager.com/aircraft/show/110883159,2:30,9:29,320,"$448,851.00","$405,534.00","$1,267.29","$58,071.69"
MIA - ICT,57648262978,M-FAR-TUL-2,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/57648262978,https://www.airlines-manager.com/aircraft/show/110883160,9:00,15:59,320,"$448,851.00","$405,534.00","$1,267.29","$58,071.69"
MIA - ICT,57651685696,M-FAR-TUL-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/57651685696,https://www.airlines-manager.com/aircraft/show/87169421,11:00,18:14,112,"$213,247.00","$187,816.00","$1,676.93","$25,965.35"
MIA - ICT,57665599571,M-FAR-TUL-3,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/57665599571,https://www.airlines-manager.com/aircraft/show/110883161,17:45,0:44,320,"$448,851.00","$405,534.00","$1,267.29","$58,071.69"
MIA - ICT,57674153260,M-FAR-TUL-4,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/57674153260,https://www.airlines-manager.com/aircraft/show/110883162,22:45,5:44,320,"$448,851.00","$405,534.00","$1,267.29","$58,071.69"
MIA - IND,57632964594,M-AUS-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/57632964594,https://www.airlines-manager.com/aircraft/show/82323689,2:30,8:29,112,"$181,512.00","$157,824.00","$1,409.14","$26,377.27"
MIA - IND,57632964595,M-AUS-PIT-4,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/57632964595,https://www.airlines-manager.com/aircraft/show/99920623,3:15,9:14,320,"$384,262.00","$342,843.00","$1,071.38","$57,299.67"
MIA - IND,57648263060,M-AUS-PIT-3,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/57648263060,https://www.airlines-manager.com/aircraft/show/99920624,10:00,15:59,320,"$384,262.00","$342,843.00","$1,071.38","$57,299.67"
MIA - IND,57662009291,M-AUS-PIT-2,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/57662009291,https://www.airlines-manager.com/aircraft/show/99920625,16:00,21:59,320,"384,262$","342,843$","$1,071.38","$57,299.67"
MIA - IND,57674153230,M-AUS-PIT-1,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/57674153230,https://www.airlines-manager.com/aircraft/show/99920626,22:30,4:29,320,"$384,262.00","$342,843.00","$1,071.38","$57,299.67"
MIA - JAN,57637373201,M-MHT-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/57637373201,https://www.airlines-manager.com/aircraft/show/114912307,5:30,10:29,112,"$149,970.00","$131,075.00","$1,170.31","$26,302.68"
MIA - JAN,57644525252,M-MHT-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/57644525252,https://www.airlines-manager.com/aircraft/show/115493373,8:30,13:29,310,"$315,458.00","$286,126.00",$922.99,"$57,416.59"
MIA - JAN,57658665106,M-MHT-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/57658665106,https://www.airlines-manager.com/aircraft/show/115493370,14:00,18:59,310,"$315,458.00","$286,126.00",$922.99,"$57,416.59"
MIA - JAN,57668758431,M-MHT-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/57668758431,https://www.airlines-manager.com/aircraft/show/115493371,20:15,1:14,310,"$315,458.00","$286,126.00",$922.99,"$57,416.59"
MIA - JAN,57674153241,M-MHT-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/57674153241,https://www.airlines-manager.com/aircraft/show/115493372,22:30,3:29,259,"$284,942.00","$256,648.00",$990.92,"$51,501.27"
MIA - JAX,57632964624,M-COS-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/57632964624,https://www.airlines-manager.com/aircraft/show/103684631,3:00,6:29,320,"$174,389.00","$145,350.00",$454.22,"$41,727.27"
MIA - JAX,57648263149,M-COS-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/57648263149,https://www.airlines-manager.com/aircraft/show/103684630,10:30,13:59,320,"174,389$","145,350$",$454.22,"$41,727.27"
MIA - JAX,57658665051,M-COS-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/57658665051,https://www.airlines-manager.com/aircraft/show/103365574,14:00,17:29,320,"$174,389.00","$145,350.00",$454.22,"$41,727.27"
MIA - JAX,57668758292,M-COS-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/57668758292,https://www.airlines-manager.com/aircraft/show/103684632,19:15,22:44,320,"174,389$","145,350$",$454.22,"$41,727.27"
MIA - JAX,57674153212,M-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/57674153212,https://www.airlines-manager.com/aircraft/show/106339154,22:15,1:44,198,"132,355$","112,459$",$567.97,"$32,284.88"
MIA - JFK,57637373202,M-JFK-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/57637373202,https://www.airlines-manager.com/aircraft/show/105308264,5:45,11:59,338,"$430,736.00","$378,260.00","$1,119.11","$60,683.42"
MIA - JFK,57640828151,M-JFK-PHX-6,ERJ-175,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/57640828151,https://www.airlines-manager.com/aircraft/show/82683137,6:45,12:59,112,"$187,689.00","$153,479.00","$1,370.35","$24,622.30"
MIA - JFK,57648263039,M-JFK-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/57648263039,https://www.airlines-manager.com/aircraft/show/105308267,10:00,16:14,338,"430,736$","378,260$","$1,119.11","$60,683.42"
MIA - JFK,57651685736,M-JFK-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/57651685736,https://www.airlines-manager.com/aircraft/show/105308265,12:00,18:14,338,"$430,736.00","$378,260.00","$1,119.11","$60,683.42"
MIA - JFK,57665599590,M-JFK-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/57665599590,https://www.airlines-manager.com/aircraft/show/105308266,18:00,0:14,338,"430,736$","378,260$","$1,119.11","$60,683.42"
MIA - JFK,57671659206,M-JFK-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/57671659206,https://www.airlines-manager.com/aircraft/show/105308268,20:45,2:59,338,"$430,736.00","$378,260.00","$1,119.11","$60,683.42"
MIA - JNB,57632963873,M-84A-4 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/57632963873,https://www.airlines-manager.com/aircraft/show/93686966,0:00,6:44,1124,"$6,037,007.00","$5,603,375.00","$4,985.21","$832,184.41"
MIA - JNB,57655460162,M-84A-7 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/57655460162,https://www.airlines-manager.com/aircraft/show/93776641,13:00,19:44,1124,"$6,037,007.00","$5,603,375.00","$4,985.21","$832,184.41"
MIA - LAS,57632964354,M-LAS-SEA-5,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/57632964354,https://www.airlines-manager.com/aircraft/show/105093929,1:30,11:59,338,"$720,041.00","$652,865.00","$1,931.55","$62,276.47"
MIA - LAS,57648263036,M-LAS-SEA-1,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/57648263036,https://www.airlines-manager.com/aircraft/show/105093925,10:00,20:29,338,"$720,041.00","$652,865.00","$1,931.55","$62,276.47"
MIA - LAS,57651685787,M-LAS-SEA-6 B,A319-100,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/57651685787,https://www.airlines-manager.com/aircraft/show/113251304,12:00,22:29,198,"$499,043.00","$443,039.00","$2,237.57","$42,261.27"
MIA - LAS,57655460043,M-LAS-SEA-2,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/57655460043,https://www.airlines-manager.com/aircraft/show/105093926,13:00,23:29,338,"720,041$","652,865$","$1,931.55","$62,276.47"
MIA - LAS,57658665177,M-LAS-SEA-3,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/57658665177,https://www.airlines-manager.com/aircraft/show/105093927,15:00,1:29,338,"$720,041.00","$652,865.00","$1,931.55","$62,276.47"
MIA - LAS,57674153218,M-LAS-SEA-4,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/57674153218,https://www.airlines-manager.com/aircraft/show/105093928,22:30,8:59,338,"$720,041.00","$652,865.00","$1,931.55","$62,276.47"
MIA - LAX,57632963832,M-LAX-DEN-1,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/57632963832,https://www.airlines-manager.com/aircraft/show/91126649,0:00,10:59,400,"921,726$","828,254$","$2,070.64","$75,410.08"
MIA - LAX,57632963833,M-LAX-DEN-2,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/57632963833,https://www.airlines-manager.com/aircraft/show/91126650,2:00,12:59,400,"$921,726.00","$828,254.00","$2,070.64","$75,410.08"
MIA - LAX,57648263047,M-LAX-DEN-3,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/57648263047,https://www.airlines-manager.com/aircraft/show/91126651,10:00,20:59,400,"$921,726.00","$828,254.00","$2,070.64","$75,410.08"
MIA - LAX,57651685695,M-LAX-DEN-5 E,A319-100,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/57651685695,https://www.airlines-manager.com/aircraft/show/115181776,11:00,22:14,216,"$539,517.00","$478,154.00","$2,213.68","$42,565.64"
MIA - LAX,57662009367,M-LAX-DEN-4,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/57662009367,https://www.airlines-manager.com/aircraft/show/91126652,16:30,3:29,400,"921,726$","828,254$","$2,070.64","$75,410.08"
MIA - LEX,57632964634,M-CID-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/57632964634,https://www.airlines-manager.com/aircraft/show/116789653,3:00,8:29,310,"349,957$","319,272$","$1,029.91","$58,225.90"
MIA - LEX,57648263107,M-CID-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/57648263107,https://www.airlines-manager.com/aircraft/show/116789650,10:00,15:29,310,"349,957$","319,272$","$1,029.91","$58,225.90"
MIA - LEX,57658665227,M-CID-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/57658665227,https://www.airlines-manager.com/aircraft/show/116789651,15:00,20:29,310,"349,957$","319,272$","$1,029.91","$58,225.90"
MIA - LEX,57668758366,M-CID-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/57668758366,https://www.airlines-manager.com/aircraft/show/116789652,19:45,1:14,305,"$346,645.00","$316,081.00","$1,036.33","$57,643.95"
MIA - LIT,57632964558,M-SDF-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/57632964558,https://www.airlines-manager.com/aircraft/show/96692674,2:15,7:59,310,"$361,995.00","$329,608.00","$1,063.25","$57,489.77"
MIA - LIT,57637373087,M-SDF-PWM-5,ERJ-175,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/57637373087,https://www.airlines-manager.com/aircraft/show/105601657,4:15,9:59,112,"$171,636.00","$150,561.00","$1,344.29","$26,260.64"
MIA - LIT,57644525221,M-SDF-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/57644525221,https://www.airlines-manager.com/aircraft/show/94886625,8:15,13:59,310,"$361,995.00","$329,608.00","$1,063.25","$57,489.77"
MIA - LIT,57658665216,M-SDF-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/57658665216,https://www.airlines-manager.com/aircraft/show/94886629,15:00,20:44,310,"$361,995.00","$329,608.00","$1,063.25","$57,489.77"
MIA - LIT,57671659306,M-SDF-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/57671659306,https://www.airlines-manager.com/aircraft/show/94886626,21:30,3:14,309,"$361,306.00","$328,945.00","$1,064.55","$57,374.13"
MIA - LOS,57640828146,M-84A-5 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/57640828146,https://www.airlines-manager.com/aircraft/show/93704215,6:45,4:59,1124,"$4,277,261.00","$3,977,814.00","$3,538.98","$178,912.17"
MIA - LOS,57668758369,M-84A-1 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/57668758369,https://www.airlines-manager.com/aircraft/show/93686969,19:45,17:59,1115,"$4,217,924.00","$3,920,833.00","$3,516.44","$176,349.31"
MIA - MAF,57632964299,M-MAF-ROC-1,A321-200,https://www.airlines-manager.com/network/showline/50834915,https://www.airlines-manager.com/network/showflight/57632964299,https://www.airlines-manager.com/aircraft/show/120933307,1:00,8:29,310,"$470,887.00","$431,493.00","$1,391.91","$57,660.53"
MIA - MAF,57648263131,M-MAF-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50834915,https://www.airlines-manager.com/network/showflight/57648263131,https://www.airlines-manager.com/aircraft/show/92137503,10:00,17:29,112,"$222,557.00","$196,495.00","$1,754.42","$26,257.68"
MIA - MAF,57651685784,M-MAF-ROC-4,A321-200,https://www.airlines-manager.com/network/showline/50834915,https://www.airlines-manager.com/network/showflight/57651685784,https://www.airlines-manager.com/aircraft/show/120933310,12:00,19:29,310,"$470,887.00","$431,493.00","$1,391.91","$57,660.53"
MIA - MAF,57662009361,M-MAF-ROC-3,A321-200,https://www.airlines-manager.com/network/showline/50834915,https://www.airlines-manager.com/network/showflight/57662009361,https://www.airlines-manager.com/aircraft/show/120933309,16:15,23:44,310,"$470,887.00","$431,493.00","$1,391.91","$57,660.53"
MIA - MAF,57665599652,M-MAF-ROC-2,A321-200,https://www.airlines-manager.com/network/showline/50834915,https://www.airlines-manager.com/network/showflight/57665599652,https://www.airlines-manager.com/aircraft/show/120933308,18:15,1:44,310,"$470,887.00","$431,493.00","$1,391.91","$57,660.53"
MIA - MBJ,57632964199,M-PUJ-BDA-4 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/57632964199,https://www.airlines-manager.com/aircraft/show/104034460,0:45,4:59,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MBJ,57637373164,M-PUJ-BDA-5 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/57637373164,https://www.airlines-manager.com/aircraft/show/104034461,5:00,9:14,228,"193,225$","171,899$",$753.94,"$40,606.06"
MIA - MBJ,57648263120,M-PUJ-BDA-3 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/57648263120,https://www.airlines-manager.com/aircraft/show/104034459,10:00,14:14,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MBJ,57655460031,M-PUJ-BDA-1 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/57655460031,https://www.airlines-manager.com/aircraft/show/104034457,12:45,16:59,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MBJ,57662009441,M-PUJ-BDA-2 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/57662009441,https://www.airlines-manager.com/aircraft/show/104034458,17:00,21:14,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MBJ,57674153301,M-PUJ-BDA-6 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/57674153301,https://www.airlines-manager.com/aircraft/show/99326789,23:00,3:14,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MCI,57632964156,M-ELP-MCI-3,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/57632964156,https://www.airlines-manager.com/aircraft/show/91806232,0:45,7:44,320,"$448,685.00","$403,102.00","$1,259.69","$57,723.44"
MIA - MCI,57632964158,M-ELP-MCI-4,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/57632964158,https://www.airlines-manager.com/aircraft/show/91806231,1:30,8:29,320,"$448,685.00","$403,102.00","$1,259.69","$57,723.44"
MIA - MCI,57648263054,M-ELP-MCI-2,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/57648263054,https://www.airlines-manager.com/aircraft/show/91806235,10:00,16:59,320,"$448,685.00","$403,102.00","$1,259.69","$57,723.44"
MIA - MCI,57665599667,M-ELP-MCI-1,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/57665599667,https://www.airlines-manager.com/aircraft/show/91806234,18:30,1:29,320,"448,685$","403,102$","$1,259.69","$57,723.44"
MIA - MCI,57668758279,M-ELP-MCI-5 B,A319-100,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/57668758279,https://www.airlines-manager.com/aircraft/show/105093924,19:00,1:59,198,"$338,938.00","$306,546.00","$1,548.21","$43,896.80"
MIA - MCO,57632963998,M-BDL-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/57632963998,https://www.airlines-manager.com/aircraft/show/107763565,0:15,2:59,320,"$122,517.00","$85,295.00",$266.55,"$31,205.49"
MIA - MCO,57632963999,M-BDL-SAT-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/57632963999,https://www.airlines-manager.com/aircraft/show/107467213,4:00,6:44,112,"$55,044.00","$35,872.00",$320.29,"$13,123.90"
MIA - MCO,57640828111,M-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/57640828111,https://www.airlines-manager.com/aircraft/show/103534663,6:00,8:44,112,"$55,044.00","$35,872.00",$320.29,"$13,123.90"
MIA - MCO,57648263009,M-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/57648263009,https://www.airlines-manager.com/aircraft/show/103534663,9:15,11:59,112,"55,044$","35,872$",$320.29,"$13,123.90"
MIA - MCO,57648263010,M-BDL-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/57648263010,https://www.airlines-manager.com/aircraft/show/107763566,10:00,12:44,320,"$122,517.00","$85,295.00",$266.55,"$31,205.49"
MIA - MCO,57651685621,M-BDL-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/57651685621,https://www.airlines-manager.com/aircraft/show/107763561,11:00,13:44,320,"122,517$","85,295$",$266.55,"$31,205.49"
MIA - MCO,57665599570,M-BDL-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/57665599570,https://www.airlines-manager.com/aircraft/show/107763562,17:45,20:29,320,"122,517$","85,295$",$266.55,"$31,205.49"
MIA - MEM,57632963877,M-MKE-CMH-5 B,A319-100,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/57632963877,https://www.airlines-manager.com/aircraft/show/110582842,0:00,5:29,198,"$263,114.00","$235,345.00","$1,188.61","$42,920.06"
MIA - MEM,57632963878,M-MKE-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/57632963878,https://www.airlines-manager.com/aircraft/show/88239556,3:00,8:29,320,"$346,619.00","$307,030.00",$959.47,"$55,993.31"
MIA - MEM,57644525172,M-MKE-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/57644525172,https://www.airlines-manager.com/aircraft/show/88494374,7:45,13:14,320,"$346,619.00","$307,030.00",$959.47,"$55,993.31"
MIA - MEM,57658665041,M-MKE-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/57658665041,https://www.airlines-manager.com/aircraft/show/88494378,14:00,19:29,320,"$346,619.00","$307,030.00",$959.47,"$55,993.31"
MIA - MEM,57668758385,M-MKE-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/57668758385,https://www.airlines-manager.com/aircraft/show/91806233,20:00,1:29,320,"$346,619.00","$307,030.00",$959.47,"$55,993.31"
MIA - MFR,57632964449,M-FCA-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/57632964449,https://www.airlines-manager.com/aircraft/show/119652478,1:30,13:59,320,"$759,604.00","$696,142.00","$2,175.44","$55,765.71"
MIA - MFR,57651685761,M-FCA-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/57651685761,https://www.airlines-manager.com/aircraft/show/119652477,12:00,0:29,320,"$759,604.00","$696,142.00","$2,175.44","$55,765.71"
MIA - MFR,57658665068,M-FCA-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/57658665068,https://www.airlines-manager.com/aircraft/show/119652476,14:00,2:29,320,"$759,604.00","$696,142.00","$2,175.44","$55,765.71"
MIA - MFR,57675937070,M-FCA-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/57675937070,https://www.airlines-manager.com/aircraft/show/119652479,23:30,11:59,320,"$759,604.00","$696,142.00","$2,175.44","$55,765.71"
MIA - MHT,57632964341,M-MHT-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/57632964341,https://www.airlines-manager.com/aircraft/show/115493371,1:15,8:14,310,"$454,152.00","$415,897.00","$1,341.60","$59,555.66"
MIA - MHT,57632964342,M-MHT-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/57632964342,https://www.airlines-manager.com/aircraft/show/115493372,3:30,10:29,310,"$454,152.00","$415,897.00","$1,341.60","$59,555.66"
MIA - MHT,57651685700,M-MHT-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/57651685700,https://www.airlines-manager.com/aircraft/show/114912307,11:00,17:59,112,"$214,353.00","$189,156.00","$1,688.89","$27,086.78"
MIA - MHT,57658665107,M-MHT-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/57658665107,https://www.airlines-manager.com/aircraft/show/115493373,14:00,20:59,310,"$454,152.00","$415,897.00","$1,341.60","$59,555.66"
MIA - MHT,57668758278,M-MHT-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/57668758278,https://www.airlines-manager.com/aircraft/show/115493370,19:00,1:59,310,"$454,152.00","$415,897.00","$1,341.60","$59,555.66"
MIA - MKE,57632963991,M-MKE-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/57632963991,https://www.airlines-manager.com/aircraft/show/88494378,0:15,7:14,320,"448,362$","404,235$","$1,263.23","$57,885.68"
MIA - MKE,57640828114,M-MKE-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/57640828114,https://www.airlines-manager.com/aircraft/show/91806233,6:15,13:14,320,"448,362$","404,235$","$1,263.23","$57,885.68"
MIA - MKE,57651685694,M-MKE-CMH-5 B,A319-100,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/57651685694,https://www.airlines-manager.com/aircraft/show/110582842,11:00,17:59,198,"$338,895.00","$307,460.00","$1,552.83","$44,027.68"
MIA - MKE,57658665039,M-MKE-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/57658665039,https://www.airlines-manager.com/aircraft/show/88239556,14:00,20:59,320,"$448,362.00","$404,235.00","$1,263.23","$57,885.68"
MIA - MKE,57665599693,M-MKE-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/57665599693,https://www.airlines-manager.com/aircraft/show/88494374,18:45,1:44,320,"$448,362.00","$404,235.00","$1,263.23","$57,885.68"
MIA - MSN,57632964485,M-RAP-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/57632964485,https://www.airlines-manager.com/aircraft/show/116789625,1:45,8:59,320,"$451,863.00","$409,290.00","$1,279.03","$56,583.87"
MIA - MSN,57644525183,M-RAP-GRR-5,ERJ-175,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/57644525183,https://www.airlines-manager.com/aircraft/show/116042630,7:45,14:59,112,"$214,048.00","$188,966.00","$1,687.20","$26,124.33"
MIA - MSN,57648263071,M-RAP-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/57648263071,https://www.airlines-manager.com/aircraft/show/116789623,10:00,17:14,320,"$451,863.00","$409,290.00","$1,279.03","$56,583.87"
MIA - MSN,57662009392,M-RAP-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/57662009392,https://www.airlines-manager.com/aircraft/show/116789624,16:45,23:59,320,"$451,863.00","$409,290.00","$1,279.03","$56,583.87"
MIA - MSN,57665599695,M-RAP-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/57665599695,https://www.airlines-manager.com/aircraft/show/116789622,18:45,1:59,320,"$451,863.00","$409,290.00","$1,279.03","$56,583.87"
MIA - MSO,57644525174,M-FAT-MSO-2,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/57644525174,https://www.airlines-manager.com/aircraft/show/113101231,7:45,18:59,320,"$700,402.00","$641,423.00","$2,004.45","$57,099.97"
MIA - MSO,57651685627,M-FAT-MSO-3,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/57651685627,https://www.airlines-manager.com/aircraft/show/113101234,11:00,22:14,320,"$700,402.00","$641,423.00","$2,004.45","$57,099.97"
MIA - MSO,57668758389,M-FAT-MSO-4,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/57668758389,https://www.airlines-manager.com/aircraft/show/113101232,20:00,7:14,320,"$700,402.00","$641,423.00","$2,004.45","$57,099.97"
MIA - MSO,57674153233,M-FAT-MSO-1,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/57674153233,https://www.airlines-manager.com/aircraft/show/113101229,22:30,9:44,320,"$700,402.00","$641,423.00","$2,004.45","$57,099.97"
MIA - MSP,57632964523,M-JFK-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/57632964523,https://www.airlines-manager.com/aircraft/show/105308267,2:00,9:59,338,"$544,122.00","$495,440.00","$1,465.80","$62,059.29"
MIA - MSP,57632964524,M-JFK-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/57632964524,https://www.airlines-manager.com/aircraft/show/105308268,3:00,10:59,338,"$544,122.00","$495,440.00","$1,465.80","$62,059.29"
MIA - MSP,57648263038,M-JFK-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/57648263038,https://www.airlines-manager.com/aircraft/show/105308266,10:00,17:59,338,"$544,122.00","$495,440.00","$1,465.80","$62,059.29"
MIA - MSP,57655460175,M-JFK-PHX-6,ERJ-175,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/57655460175,https://www.airlines-manager.com/aircraft/show/82683137,13:00,20:59,112,"$236,852.00","$203,894.00","$1,820.48","$25,539.96"
MIA - MSP,57665599633,M-JFK-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/57665599633,https://www.airlines-manager.com/aircraft/show/105308265,18:15,2:14,338,"544,122$","495,440$","$1,465.80","$62,059.29"
MIA - MSP,57671659318,M-JFK-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/57671659318,https://www.airlines-manager.com/aircraft/show/105308264,21:45,5:44,338,"$544,122.00","$495,440.00","$1,465.80","$62,059.29"
MIA - MSY,57632964370,M-MKE-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/57632964370,https://www.airlines-manager.com/aircraft/show/91806233,1:30,6:14,320,"$301,171.00","$266,048.00",$831.40,"$56,207.32"
MIA - MSY,57637373197,M-MKE-CMH-5 B,A319-100,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/57637373197,https://www.airlines-manager.com/aircraft/show/110582842,5:30,10:14,198,"229,505$","205,012$","$1,035.41","$43,312.39"
MIA - MSY,57644525237,M-MKE-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/57644525237,https://www.airlines-manager.com/aircraft/show/88239556,8:30,13:14,320,"$301,171.00","$266,048.00",$831.40,"$56,207.32"
MIA - MSY,57658665040,M-MKE-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/57658665040,https://www.airlines-manager.com/aircraft/show/88494374,14:00,18:44,320,"$301,171.00","$266,048.00",$831.40,"$56,207.32"
MIA - MSY,57668758318,M-MKE-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/57668758318,https://www.airlines-manager.com/aircraft/show/88494378,19:30,0:14,320,"$301,171.00","$266,048.00",$831.40,"$56,207.32"
MIA - MTJ,57632964329,M-RDM-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50834908,https://www.airlines-manager.com/network/showflight/57632964329,https://www.airlines-manager.com/aircraft/show/88725597,1:15,10:29,310,"$579,705.00","$533,668.00","$1,721.51","$57,797.98"
MIA - MTJ,57648263083,M-RDM-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50834908,https://www.airlines-manager.com/network/showflight/57648263083,https://www.airlines-manager.com/aircraft/show/88725598,10:00,19:14,310,"$579,705.00","$533,668.00","$1,721.51","$57,797.98"
MIA - MTJ,57655460124,M-RDM-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50834908,https://www.airlines-manager.com/network/showflight/57655460124,https://www.airlines-manager.com/aircraft/show/88725599,13:00,22:14,310,"$579,705.00","$533,668.00","$1,721.51","$57,797.98"
MIA - MTJ,57674153204,M-RDM-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50834908,https://www.airlines-manager.com/network/showflight/57674153204,https://www.airlines-manager.com/aircraft/show/106766698,22:15,7:29,310,"579,705$","533,668$","$1,721.51","$57,797.98"
MIA - MYR,57644525180,M-MAF-ROC-4,A321-200,https://www.airlines-manager.com/network/showline/50834920,https://www.airlines-manager.com/network/showflight/57644525180,https://www.airlines-manager.com/aircraft/show/120933310,7:45,11:59,310,"$253,255.00","$226,311.00",$730.04,"$53,459.29"
MIA - MYR,57651685781,M-MAF-ROC-3,A321-200,https://www.airlines-manager.com/network/showline/50834920,https://www.airlines-manager.com/network/showflight/57651685781,https://www.airlines-manager.com/aircraft/show/120933309,12:00,16:14,310,"$253,255.00","$226,311.00",$730.04,"$53,459.29"
MIA - MYR,57658665115,M-MAF-ROC-2,A321-200,https://www.airlines-manager.com/network/showline/50834920,https://www.airlines-manager.com/network/showflight/57658665115,https://www.airlines-manager.com/aircraft/show/120933308,14:00,18:14,310,"$253,255.00","$226,311.00",$730.04,"$53,459.29"
MIA - MYR,57671659228,M-MAF-ROC-1,A321-200,https://www.airlines-manager.com/network/showline/50834920,https://www.airlines-manager.com/network/showflight/57671659228,https://www.airlines-manager.com/aircraft/show/120933307,20:45,0:59,310,"$253,255.00","$226,311.00",$730.04,"$53,459.29"
MIA - NAS,57632964565,M-PUJ-BDA-5 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/57632964565,https://www.airlines-manager.com/aircraft/show/104034461,2:15,4:59,228,"$79,351.00","$61,380.00",$269.21,"$22,456.10"
MIA - NAS,57644525166,M-PUJ-BDA-6 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/57644525166,https://www.airlines-manager.com/aircraft/show/99326789,7:30,10:14,228,"$79,351.00","$61,380.00",$269.21,"$22,456.10"
MIA - NAS,57648263118,M-PUJ-BDA-1 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/57648263118,https://www.airlines-manager.com/aircraft/show/104034457,10:00,12:44,228,"$79,351.00","$61,380.00",$269.21,"$22,456.10"
MIA - NAS,57658665144,M-PUJ-BDA-2 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/57658665144,https://www.airlines-manager.com/aircraft/show/104034458,14:15,16:59,228,"$79,351.00","$61,380.00",$269.21,"$22,456.10"
MIA - NAS,57665599681,M-PUJ-BDA-3 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/57665599681,https://www.airlines-manager.com/aircraft/show/104034459,18:30,21:14,228,"$79,351.00","$61,380.00",$269.21,"$22,456.10"
MIA - NAS,57674153175,M-PUJ-BDA-4 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/57674153175,https://www.airlines-manager.com/aircraft/show/104034460,22:00,0:44,228,"79,351$","61,380$",$269.21,"$22,456.10"
MIA - OAK,57632964247,M-OAK-SMF-5,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/57632964247,https://www.airlines-manager.com/aircraft/show/91198617,1:00,12:59,320,"741,020$","675,128$","$2,109.78","$56,338.92"
MIA - OAK,57651685605,M-OAK-SMF-1,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/57651685605,https://www.airlines-manager.com/aircraft/show/91198615,11:00,22:59,320,"$741,020.00","$675,128.00","$2,109.78","$56,338.92"
MIA - OAK,57655460077,M-OAK-SMF-2,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/57655460077,https://www.airlines-manager.com/aircraft/show/91198619,13:00,0:59,320,"741,020$","675,128$","$2,109.78","$56,338.92"
MIA - OAK,57658665199,M-OAK-SMF-3,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/57658665199,https://www.airlines-manager.com/aircraft/show/91198616,15:00,2:59,320,"$741,020.00","$675,128.00","$2,109.78","$56,338.92"
MIA - OAK,57674153288,M-OAK-SMF-4,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/57674153288,https://www.airlines-manager.com/aircraft/show/91198618,23:00,10:59,320,"741,020$","675,128$","$2,109.78","$56,338.92"
MIA - OKC,57632964505,M-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/57632964505,https://www.airlines-manager.com/aircraft/show/110883112,1:45,8:29,310,"$432,205.00","$394,574.00","$1,272.82","$58,600.10"
MIA - OKC,57632964506,M-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/57632964506,https://www.airlines-manager.com/aircraft/show/110883111,4:00,10:44,310,"432,205$","394,574$","$1,272.82","$58,600.10"
MIA - OKC,57648263133,M-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/57648263133,https://www.airlines-manager.com/aircraft/show/104353572,10:00,16:44,112,"$203,116.00","$178,405.00","$1,592.90","$26,495.79"
MIA - OKC,57655460152,M-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/57655460152,https://www.airlines-manager.com/aircraft/show/110883110,13:00,19:44,310,"$432,205.00","$394,574.00","$1,272.82","$58,600.10"
MIA - OKC,57658665172,M-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/57658665172,https://www.airlines-manager.com/aircraft/show/110883113,14:45,21:29,310,"$432,205.00","$394,574.00","$1,272.82","$58,600.10"
MIA - OMA,57632964579,M-BOI-BNA-1,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/57632964579,https://www.airlines-manager.com/aircraft/show/104133006,2:30,9:59,320,"$479,555.00","$434,477.00","$1,357.74","$58,059.29"
MIA - OMA,57640828125,M-BOI-BNA-4,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/57640828125,https://www.airlines-manager.com/aircraft/show/103775657,6:30,13:59,320,"$479,555.00","$434,477.00","$1,357.74","$58,059.29"
MIA - OMA,57648263066,M-BOI-BNA-3,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/57648263066,https://www.airlines-manager.com/aircraft/show/104020880,10:00,17:29,320,"$479,555.00","$434,477.00","$1,357.74","$58,059.29"
MIA - OMA,57658665251,M-BOI-BNA-2,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/57658665251,https://www.airlines-manager.com/aircraft/show/104022609,15:15,22:44,320,"$479,555.00","$434,477.00","$1,357.74","$58,059.29"
MIA - OMA,57665599533,M-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/57665599533,https://www.airlines-manager.com/aircraft/show/103534663,17:15,0:44,112,"$226,251.00","$199,652.00","$1,782.61","$26,679.55"
MIA - ONT,57632964032,M-RNO-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/57632964032,https://www.airlines-manager.com/aircraft/show/90489722,0:30,11:29,320,"694,458$","632,850$","$1,977.66","$57,619.12"
MIA - ONT,57632964033,M-RNO-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/57632964033,https://www.airlines-manager.com/aircraft/show/86238756,2:30,13:29,320,"$694,458.00","$632,850.00","$1,977.66","$57,619.12"
MIA - ONT,57651685604,M-RNO-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/57651685604,https://www.airlines-manager.com/aircraft/show/90489723,11:00,21:59,320,"$694,458.00","$632,850.00","$1,977.66","$57,619.12"
MIA - ONT,57658665119,M-RNO-ONT-5 B,A319-100,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/57658665119,https://www.airlines-manager.com/aircraft/show/105223010,14:00,0:59,198,"$521,256.00","$476,516.00","$2,406.65","$43,385.37"
MIA - ONT,57674153225,M-RNO-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/57674153225,https://www.airlines-manager.com/aircraft/show/86238755,22:30,9:29,320,"$694,458.00","$632,850.00","$1,977.66","$57,619.12"
MIA - ORD,57632964659,M-ORD-DFW-1,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/57632964659,https://www.airlines-manager.com/aircraft/show/91600935,3:15,9:59,310,"$425,664.00","$365,859.00","$1,180.19","$54,335.50"
MIA - ORD,57637373069,M-ORD-DFW-4,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/57637373069,https://www.airlines-manager.com/aircraft/show/91600938,4:15,10:59,310,"$425,664.00","$365,859.00","$1,180.19","$54,335.50"
MIA - ORD,57648262994,M-ORD-DFW-6,ERJ-175,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/57648262994,https://www.airlines-manager.com/aircraft/show/82543123,9:00,15:44,112,"$199,854.00","$161,877.00","$1,445.33","$24,041.14"
MIA - ORD,57651685655,M-ORD-DFW-5,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/57651685655,https://www.airlines-manager.com/aircraft/show/91600937,11:00,17:44,310,"$425,664.00","$365,859.00","$1,180.19","$54,335.50"
MIA - ORD,57658665171,M-ORD-DFW-3,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/57658665171,https://www.airlines-manager.com/aircraft/show/91600939,14:45,21:29,310,"$425,664.00","$365,859.00","$1,180.19","$54,335.50"
MIA - ORD,57662009240,M-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/57662009240,https://www.airlines-manager.com/aircraft/show/106339154,15:30,22:14,198,"$320,961.00","$273,065.00","$1,379.12","$40,554.21"
MIA - ORD,57671659223,M-ORD-DFW-2,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/57671659223,https://www.airlines-manager.com/aircraft/show/91600936,20:45,3:29,310,"$425,664.00","$365,859.00","$1,180.19","$54,335.50"
MIA - ORF,57632964026,M-MHT-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/57632964026,https://www.airlines-manager.com/aircraft/show/114912307,0:15,5:29,112,"$157,906.00","$137,933.00","$1,231.54","$26,356.62"
MIA - ORF,57632964027,M-MHT-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/57632964027,https://www.airlines-manager.com/aircraft/show/115493373,3:15,8:29,310,"$332,506.00","$301,556.00",$972.76,"$57,622.17"
MIA - ORF,57644525227,M-MHT-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/57644525227,https://www.airlines-manager.com/aircraft/show/115493370,8:15,13:29,310,"$332,506.00","$301,556.00",$972.76,"$57,622.17"
MIA - ORF,57658665226,M-MHT-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/57658665226,https://www.airlines-manager.com/aircraft/show/115493371,15:00,20:14,310,"$332,506.00","$301,556.00",$972.76,"$57,622.17"
MIA - ORF,57665599523,M-MHT-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/57665599523,https://www.airlines-manager.com/aircraft/show/115493372,17:15,22:29,310,"$332,506.00","$301,556.00",$972.76,"$57,622.17"
MIA - PDX,57648263049,M-PDX-DTW-1,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/57648263049,https://www.airlines-manager.com/aircraft/show/89943715,10:00,22:29,320,"$774,889.00","$704,572.00","$2,201.79","$56,441.01"
MIA - PDX,57655460074,M-PDX-DTW-3,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/57655460074,https://www.airlines-manager.com/aircraft/show/89943713,13:00,1:29,320,"$774,889.00","$704,572.00","$2,201.79","$56,441.01"
MIA - PDX,57658665043,M-PDX-DTW-4,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/57658665043,https://www.airlines-manager.com/aircraft/show/89943712,14:00,2:29,320,"$774,889.00","$704,572.00","$2,201.79","$56,441.01"
MIA - PDX,57668758319,M-PDX-DTW-2,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/57668758319,https://www.airlines-manager.com/aircraft/show/89943714,19:30,7:59,320,"$774,889.00","$704,572.00","$2,201.79","$56,441.01"
MIA - PDX,57675937064,M-PDX-DTW-5,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/57675937064,https://www.airlines-manager.com/aircraft/show/89943711,23:30,11:59,320,"$774,889.00","$704,572.00","$2,201.79","$56,441.01"
MIA - PHL,57632964708,M-ORD-DFW-3,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/57632964708,https://www.airlines-manager.com/aircraft/show/91600939,4:00,9:59,310,"$381,305.00","$339,530.00","$1,095.26","$56,745.96"
MIA - PHL,57637373156,M-ORD-DFW-5,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/57637373156,https://www.airlines-manager.com/aircraft/show/91600937,5:00,10:59,310,"$381,305.00","$339,530.00","$1,095.26","$56,745.96"
MIA - PHL,57648263089,M-ORD-DFW-2,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/57648263089,https://www.airlines-manager.com/aircraft/show/91600936,10:00,15:59,310,"$381,305.00","$339,530.00","$1,095.26","$56,745.96"
MIA - PHL,57662009376,M-ORD-DFW-1,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/57662009376,https://www.airlines-manager.com/aircraft/show/91600935,16:30,22:29,310,"$381,305.00","$339,530.00","$1,095.26","$56,745.96"
MIA - PHL,57665599552,M-ORD-DFW-4,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/57665599552,https://www.airlines-manager.com/aircraft/show/91600938,17:30,23:29,310,"$381,305.00","$339,530.00","$1,095.26","$56,745.96"
MIA - PHL,57674153217,M-ORD-DFW-6,ERJ-175,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/57674153217,https://www.airlines-manager.com/aircraft/show/82543123,22:15,4:14,112,"$180,118.00","$153,280.00","$1,368.57","$25,617.83"
MIA - PHX,57632963976,M-JFK-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/57632963976,https://www.airlines-manager.com/aircraft/show/105308266,0:15,9:59,338,"$673,510.00","$614,805.00","$1,818.95","$63,164.90"
MIA - PHX,57632963977,M-JFK-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/57632963977,https://www.airlines-manager.com/aircraft/show/105308265,2:15,11:59,338,"$673,510.00","$614,805.00","$1,818.95","$63,164.90"
MIA - PHX,57651685560,M-JFK-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/57651685560,https://www.airlines-manager.com/aircraft/show/105308268,11:00,20:44,338,"$673,510.00","$614,805.00","$1,818.95","$63,164.90"
MIA - PHX,57651685561,M-JFK-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/57651685561,https://www.airlines-manager.com/aircraft/show/105308264,12:00,21:44,338,"$673,510.00","$614,805.00","$1,818.95","$63,164.90"
MIA - PHX,57662009347,M-JFK-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/57662009347,https://www.airlines-manager.com/aircraft/show/105308267,16:15,1:59,338,"$673,510.00","$614,805.00","$1,818.95","$63,164.90"
MIA - PHX,57671659266,M-JFK-PHX-6,ERJ-175,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/57671659266,https://www.airlines-manager.com/aircraft/show/82683137,21:00,6:44,112,"$291,110.00","$250,973.00","$2,240.83","$25,784.90"
MIA - PIT,57632964652,M-AUS-PIT-3,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/57632964652,https://www.airlines-manager.com/aircraft/show/99920624,3:15,9:14,320,"$382,895.00","$341,219.00","$1,066.31","$57,028.25"
MIA - PIT,57648263061,M-AUS-PIT-2,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/57648263061,https://www.airlines-manager.com/aircraft/show/99920625,10:00,15:59,320,"$382,895.00","$341,219.00","$1,066.31","$57,028.25"
MIA - PIT,57662009371,M-AUS-PIT-1,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/57662009371,https://www.airlines-manager.com/aircraft/show/99920626,16:30,22:29,320,"$382,895.00","$341,219.00","$1,066.31","$57,028.25"
MIA - PIT,57671659203,M-AUS-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/57671659203,https://www.airlines-manager.com/aircraft/show/82323689,20:30,2:29,112,"$180,854.00","$157,058.00","$1,402.30","$26,249.25"
MIA - PIT,57671659204,M-AUS-PIT-4,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/57671659204,https://www.airlines-manager.com/aircraft/show/99920623,21:15,3:14,320,"$382,895.00","$341,219.00","$1,066.31","$57,028.25"
MIA - PLS,57632964663,M-PUJ-BDA-6 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/57632964663,https://www.airlines-manager.com/aircraft/show/99326789,3:15,7:29,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - PLS,57637373163,M-PUJ-BDA-4 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/57637373163,https://www.airlines-manager.com/aircraft/show/104034460,5:00,9:14,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - PLS,57648263119,M-PUJ-BDA-2 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/57648263119,https://www.airlines-manager.com/aircraft/show/104034458,10:00,14:14,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - PLS,57658665145,M-PUJ-BDA-3 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/57658665145,https://www.airlines-manager.com/aircraft/show/104034459,14:15,18:29,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - PLS,57662009440,M-PUJ-BDA-1 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/57662009440,https://www.airlines-manager.com/aircraft/show/104034457,17:00,21:14,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - PLS,57674153176,M-PUJ-BDA-5 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/57674153176,https://www.airlines-manager.com/aircraft/show/104034461,22:00,2:14,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - POS,57655460019,M-84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/57655460019,https://www.airlines-manager.com/aircraft/show/106676225,12:30,20:29,962,"$1,341,807.00","$1,224,700.00","$1,273.08","$153,407.10"
MIA - POS,57662009344,M-84B-6 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/57662009344,https://www.airlines-manager.com/aircraft/show/106676230,16:00,23:59,738,"$1,115,185.00","$1,010,370.00","$1,369.07","$126,559.92"
MIA - PSP,57632964529,M-PSP-BFF-5,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/57632964529,https://www.airlines-manager.com/aircraft/show/116789630,2:00,12:44,320,"$662,540.00","$604,842.00","$1,890.13","$56,351.74"
MIA - PSP,57648263075,M-PSP-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/57648263075,https://www.airlines-manager.com/aircraft/show/116789631,10:00,20:44,320,"$662,540.00","$604,842.00","$1,890.13","$56,351.74"
MIA - PSP,57658665064,M-PSP-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/57658665064,https://www.airlines-manager.com/aircraft/show/116789634,14:00,0:44,320,"$662,540.00","$604,842.00","$1,890.13","$56,351.74"
MIA - PSP,57658665065,M-PSP-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/57658665065,https://www.airlines-manager.com/aircraft/show/116789632,14:15,0:59,320,"$662,540.00","$604,842.00","$1,890.13","$56,351.74"
MIA - PSP,57674153289,M-PSP-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/57674153289,https://www.airlines-manager.com/aircraft/show/116789633,23:00,9:44,246,"$567,302.00","$514,043.00","$2,089.61","$47,892.20"
MIA - PUJ,57632964683,M-PUJ-BDA-2 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/57632964683,https://www.airlines-manager.com/aircraft/show/104034458,3:30,9:14,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PUJ,57648263122,M-PUJ-BDA-5 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/57648263122,https://www.airlines-manager.com/aircraft/show/104034461,10:00,15:44,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PUJ,57662009362,M-PUJ-BDA-4 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/57662009362,https://www.airlines-manager.com/aircraft/show/104034460,16:15,21:59,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PUJ,57665599530,M-PUJ-BDA-6 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/57665599530,https://www.airlines-manager.com/aircraft/show/99326789,17:15,22:59,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PUJ,57671659285,M-PUJ-BDA-1 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/57671659285,https://www.airlines-manager.com/aircraft/show/104034457,21:15,2:59,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PUJ,57674153174,M-PUJ-BDA-3 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/57674153174,https://www.airlines-manager.com/aircraft/show/104034459,22:00,3:44,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PVD,57632964340,M-BUR-PVD-3,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/57632964340,https://www.airlines-manager.com/aircraft/show/108834805,1:15,7:59,310,"$427,684.00","$391,455.00","$1,262.76","$58,136.88"
MIA - PVD,57640828187,M-BUR-PVD-5 B,A319-100,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/57640828187,https://www.airlines-manager.com/aircraft/show/108834807,7:15,13:59,198,"$322,661.00","$293,626.00","$1,482.96","$43,607.82"
MIA - PVD,57651685671,M-BUR-PVD-2,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/57651685671,https://www.airlines-manager.com/aircraft/show/108834804,11:00,17:44,310,"$427,684.00","$391,455.00","$1,262.76","$58,136.88"
MIA - PVD,57662009435,M-BUR-PVD-4,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/57662009435,https://www.airlines-manager.com/aircraft/show/108834806,17:00,23:44,310,"$427,684.00","$391,455.00","$1,262.76","$58,136.88"
MIA - PVD,57674153206,M-BUR-PVD-1,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/57674153206,https://www.airlines-manager.com/aircraft/show/108834803,22:15,4:59,310,"$427,684.00","$391,455.00","$1,262.76","$58,136.88"
MIA - PWM,57644525158,M-SDF-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/57644525158,https://www.airlines-manager.com/aircraft/show/94886629,7:30,14:59,310,"$468,156.00","$430,232.00","$1,387.85","$57,492.03"
MIA - PWM,57658665078,M-SDF-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/57658665078,https://www.airlines-manager.com/aircraft/show/94886626,14:00,21:29,310,"$468,156.00","$430,232.00","$1,387.85","$57,492.03"
MIA - PWM,57665599707,M-SDF-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/57665599707,https://www.airlines-manager.com/aircraft/show/96692674,18:45,2:14,310,"$468,156.00","$430,232.00","$1,387.85","$57,492.03"
MIA - PWM,57671659231,M-SDF-PWM-5,ERJ-175,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/57671659231,https://www.airlines-manager.com/aircraft/show/105601657,20:45,4:14,112,"$220,894.00","$195,774.00","$1,747.98","$26,161.34"
MIA - PWM,57675937100,M-SDF-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/57675937100,https://www.airlines-manager.com/aircraft/show/94886625,23:45,7:14,310,"$468,156.00","$430,232.00","$1,387.85","$57,492.03"
MIA - RAP,57632963852,M-RAP-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/57632963852,https://www.airlines-manager.com/aircraft/show/116789624,0:00,8:59,320,"$563,858.00","$513,914.00","$1,605.98","$57,207.50"
MIA - RAP,57632963853,M-RAP-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/57632963853,https://www.airlines-manager.com/aircraft/show/116789622,2:00,10:59,320,"$563,858.00","$513,914.00","$1,605.98","$57,207.50"
MIA - RAP,57648263073,M-RAP-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/57648263073,https://www.airlines-manager.com/aircraft/show/116789625,10:00,18:59,320,"$563,858.00","$513,914.00","$1,605.98","$57,207.50"
MIA - RAP,57658665247,M-RAP-GRR-5,ERJ-175,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/57658665247,https://www.airlines-manager.com/aircraft/show/116042630,15:00,23:59,112,"$265,771.00","$235,577.00","$2,103.37","$26,223.78"
MIA - RAP,57665599514,M-RAP-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/57665599514,https://www.airlines-manager.com/aircraft/show/116789623,17:15,2:14,320,"$563,858.00","$513,914.00","$1,605.98","$57,207.50"
MIA - RDM,57648263104,M-RDM-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50834907,https://www.airlines-manager.com/network/showflight/57648263104,https://www.airlines-manager.com/aircraft/show/106766698,10:00,22:14,310,"$750,430.00","$694,304.00","$2,239.69","$56,755.10"
MIA - RDM,57655460123,M-RDM-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50834907,https://www.airlines-manager.com/network/showflight/57655460123,https://www.airlines-manager.com/aircraft/show/88725597,13:00,1:14,310,"$750,430.00","$694,304.00","$2,239.69","$56,755.10"
MIA - RDM,57668758298,M-RDM-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50834907,https://www.airlines-manager.com/network/showflight/57668758298,https://www.airlines-manager.com/aircraft/show/88725598,19:15,7:29,310,"750,430$","694,304$","$2,239.69","$56,755.10"
MIA - RDM,57674153201,M-RDM-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50834907,https://www.airlines-manager.com/network/showflight/57674153201,https://www.airlines-manager.com/aircraft/show/88725599,22:15,10:29,310,"750,430$","694,304$","$2,239.69","$56,755.10"
MIA - RDU,57637373099,M-AUS-PIT-1,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/57637373099,https://www.airlines-manager.com/aircraft/show/99920626,4:30,9:14,320,"310,630$","274,454$",$857.67,"$57,983.24"
MIA - RDU,57644525262,M-AUS-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/57644525262,https://www.airlines-manager.com/aircraft/show/82323689,8:30,13:14,112,"147,838$","127,705$","$1,140.22","$26,979.93"
MIA - RDU,57648263059,M-AUS-PIT-4,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/57648263059,https://www.airlines-manager.com/aircraft/show/99920623,10:00,14:44,320,"$310,630.00","$274,454.00",$857.67,"$57,983.24"
MIA - RDU,57662009290,M-AUS-PIT-3,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/57662009290,https://www.airlines-manager.com/aircraft/show/99920624,16:00,20:44,320,"$310,630.00","$274,454.00",$857.67,"$57,983.24"
MIA - RDU,57674153156,M-AUS-PIT-2,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/57674153156,https://www.airlines-manager.com/aircraft/show/99920625,22:00,2:44,320,"$310,630.00","$274,454.00",$857.67,"$57,983.24"
MIA - RIC,57644525250,M-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/57644525250,https://www.airlines-manager.com/aircraft/show/110883112,8:30,13:44,310,"$336,966.00","$305,684.00",$986.08,"$58,410.96"
MIA - RIC,57651685677,M-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/57651685677,https://www.airlines-manager.com/aircraft/show/110883111,11:00,16:14,310,"$336,966.00","$305,684.00",$986.08,"$58,410.96"
MIA - RIC,57662009401,M-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/57662009401,https://www.airlines-manager.com/aircraft/show/104353572,16:45,21:59,112,"$160,060.00","$139,846.00","$1,248.63","$26,722.17"
MIA - RIC,57668758365,M-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/57668758365,https://www.airlines-manager.com/aircraft/show/110883110,19:45,0:59,310,"$336,966.00","$305,684.00",$986.08,"$58,410.96"
MIA - RIC,57671659309,M-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/57671659309,https://www.airlines-manager.com/aircraft/show/110883113,21:30,2:44,310,"$336,966.00","$305,684.00",$986.08,"$58,410.96"
MIA - RNO,57632964300,M-RNO-ONT-5 B,A319-100,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/57632964300,https://www.airlines-manager.com/aircraft/show/105223010,1:00,12:44,198,"$546,103.00","$500,266.00","$2,526.60","$42,636.31"
MIA - RNO,57651685600,M-RNO-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/57651685600,https://www.airlines-manager.com/aircraft/show/86238755,11:00,22:29,320,"$725,284.00","$662,433.00","$2,070.10","$57,686.47"
MIA - RNO,57655460075,M-RNO-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/57655460075,https://www.airlines-manager.com/aircraft/show/90489722,13:00,0:29,320,"$725,284.00","$662,433.00","$2,070.10","$57,686.47"
MIA - RNO,57658665195,M-RNO-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/57658665195,https://www.airlines-manager.com/aircraft/show/86238756,15:00,2:29,320,"$725,284.00","$662,433.00","$2,070.10","$57,686.47"
MIA - RNO,57674153155,M-RNO-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/57674153155,https://www.airlines-manager.com/aircraft/show/90489723,22:00,9:29,320,"$725,284.00","$662,433.00","$2,070.10","$57,686.47"
MIA - ROC,57632964509,M-MAF-ROC-2,A321-200,https://www.airlines-manager.com/network/showline/50424914,https://www.airlines-manager.com/network/showflight/57632964509,https://www.airlines-manager.com/aircraft/show/120933308,1:45,8:29,310,"$427,406.00","$391,117.00","$1,261.67","$58,086.68"
MIA - ROC,57648263116,M-MAF-ROC-1,A321-200,https://www.airlines-manager.com/network/showline/50424914,https://www.airlines-manager.com/network/showflight/57648263116,https://www.airlines-manager.com/aircraft/show/120933307,10:00,16:44,310,"$427,406.00","$391,117.00","$1,261.67","$58,086.68"
MIA - ROC,57665599558,M-MAF-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50424914,https://www.airlines-manager.com/network/showflight/57665599558,https://www.airlines-manager.com/aircraft/show/92137503,17:30,0:14,112,"$201,000.00","$177,122.00","$1,581.45","$26,305.25"
MIA - ROC,57668758337,M-MAF-ROC-4,A321-200,https://www.airlines-manager.com/network/showline/50424914,https://www.airlines-manager.com/network/showflight/57668758337,https://www.airlines-manager.com/aircraft/show/120933310,19:30,2:14,310,"$427,406.00","$391,117.00","$1,261.67","$58,086.68"
MIA - ROC,57675937108,M-MAF-ROC-3,A321-200,https://www.airlines-manager.com/network/showline/50424914,https://www.airlines-manager.com/network/showflight/57675937108,https://www.airlines-manager.com/aircraft/show/120933309,23:45,6:29,310,"$427,406.00","$391,117.00","$1,261.67","$58,086.68"
MIA - RSW,57632964713,M-ANU-SXM-3 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/57632964713,https://www.airlines-manager.com/aircraft/show/110114297,4:00,6:29,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - RSW,57648263007,M-ANU-SXM-1 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/57648263007,https://www.airlines-manager.com/aircraft/show/110114295,9:15,11:44,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - RSW,57648263008,M-ANU-SXM-2 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/57648263008,https://www.airlines-manager.com/aircraft/show/110114296,10:15,12:44,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - RSW,57658665122,M-ANU-SXM-6 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/57658665122,https://www.airlines-manager.com/aircraft/show/110114300,14:00,16:29,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - RSW,57671659262,M-ANU-SXM-5 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/57671659262,https://www.airlines-manager.com/aircraft/show/110114299,21:00,23:29,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - RSW,57674153303,M-ANU-SXM-4 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/57674153303,https://www.airlines-manager.com/aircraft/show/110114298,23:00,1:29,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - SAN,57632963891,M-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/57632963891,https://www.airlines-manager.com/aircraft/show/120519142,0:00,10:44,0,"$190,591.00","$116,070.00",$0.00,"$10,813.98"
MIA - SAN,57632963892,M-BWI-YYZ-2,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/57632963892,https://www.airlines-manager.com/aircraft/show/92153440,1:45,12:44,310,"$680,679.00","$623,880.00","$2,012.52","$56,802.43"
MIA - SAN,57648263091,M-BWI-YYZ-3,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/57648263091,https://www.airlines-manager.com/aircraft/show/92153441,10:00,20:59,310,"$680,679.00","$623,880.00","$2,012.52","$56,802.43"
MIA - SAN,57651685788,M-BWI-YYZ-6 B,A319-100,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/57651685788,https://www.airlines-manager.com/aircraft/show/120519717,12:00,22:59,198,"$511,028.00","$465,491.00","$2,350.96","$42,381.58"
MIA - SAN,57662009429,M-BWI-YYZ-4,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/57662009429,https://www.airlines-manager.com/aircraft/show/92153442,17:00,3:59,310,"$680,679.00","$623,880.00","$2,012.52","$56,802.43"
MIA - SAN,57668758270,M-BWI-YYZ-5,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/57668758270,https://www.airlines-manager.com/aircraft/show/92153439,19:00,5:59,310,"$680,679.00","$623,880.00","$2,012.52","$56,802.43"
MIA - SAN,57674153269,M-BWI-YYZ-1,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/57674153269,https://www.airlines-manager.com/aircraft/show/92153443,22:45,9:44,310,"$664,966.00","$611,888.00","$1,973.83","$55,710.59"
MIA - SAT,57632964653,M-BDL-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/57632964653,https://www.airlines-manager.com/aircraft/show/107763562,3:15,9:44,320,"$412,163.00","$370,879.00","$1,159.00","$57,204.99"
MIA - SAT,57651685623,M-BDL-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/57651685623,https://www.airlines-manager.com/aircraft/show/107763565,11:00,17:29,320,"$412,163.00","$370,879.00","$1,159.00","$57,204.99"
MIA - SAT,57658665175,M-BDL-SAT-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/57658665175,https://www.airlines-manager.com/aircraft/show/107467213,14:45,21:14,112,"$194,327.00","$170,361.00","$1,521.08","$26,276.76"
MIA - SAT,57671659190,M-BDL-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/57671659190,https://www.airlines-manager.com/aircraft/show/107763561,20:30,2:59,320,"$412,163.00","$370,879.00","$1,159.00","$57,204.99"
MIA - SAT,57671659191,M-BDL-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/57671659191,https://www.airlines-manager.com/aircraft/show/107763566,20:45,3:14,320,"$412,163.00","$370,879.00","$1,159.00","$57,204.99"
MIA - SAV,57632964016,M-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/57632964016,https://www.airlines-manager.com/aircraft/show/110883111,0:15,3:59,310,"$215,345.00","$190,074.00",$613.14,"$50,912.68"
MIA - SAV,57640828112,M-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/57640828112,https://www.airlines-manager.com/aircraft/show/104353572,6:00,9:44,112,"$100,516.00","$84,583.00",$755.21,"$22,656.16"
MIA - SAV,57648262986,M-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/57648262986,https://www.airlines-manager.com/aircraft/show/110883110,9:00,12:44,310,"$215,345.00","$190,074.00",$613.14,"$50,912.68"
MIA - SAV,57651685678,M-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/57651685678,https://www.airlines-manager.com/aircraft/show/110883113,11:00,14:44,310,"$215,345.00","$190,074.00",$613.14,"$50,912.68"
MIA - SAV,57674153168,M-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/57674153168,https://www.airlines-manager.com/aircraft/show/110883112,22:00,1:44,274,"$200,617.00","$175,781.00",$641.54,"$47,084.20"
MIA - SDF,57632964195,M-SDF-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/57632964195,https://www.airlines-manager.com/aircraft/show/94886629,0:45,6:29,310,"$357,909.00","$323,543.00","$1,043.69","$56,431.92"
MIA - SDF,57644525222,M-SDF-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/57644525222,https://www.airlines-manager.com/aircraft/show/94886626,8:15,13:59,310,"$357,909.00","$323,543.00","$1,043.69","$56,431.92"
MIA - SDF,57655460131,M-SDF-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/57655460131,https://www.airlines-manager.com/aircraft/show/96692674,13:00,18:44,310,"$357,909.00","$323,543.00","$1,043.69","$56,431.92"
MIA - SDF,57658665244,M-SDF-PWM-5,ERJ-175,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/57658665244,https://www.airlines-manager.com/aircraft/show/105601657,15:00,20:44,112,"$169,578.00","$147,365.00","$1,315.76","$25,703.20"
MIA - SDF,57665599610,M-SDF-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/57665599610,https://www.airlines-manager.com/aircraft/show/94886625,18:00,23:44,310,"$357,909.00","$323,543.00","$1,043.69","$56,431.92"
MIA - SEA,57632964353,M-LAS-SEA-3,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/57632964353,https://www.airlines-manager.com/aircraft/show/105093927,1:30,13:59,338,"$834,881.00","$766,832.00","$2,268.73","$61,428.46"
MIA - SEA,57648263037,M-LAS-SEA-4,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/57648263037,https://www.airlines-manager.com/aircraft/show/105093928,10:00,22:29,338,"$834,881.00","$766,832.00","$2,268.73","$61,428.46"
MIA - SEA,57655460044,M-LAS-SEA-5,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/57655460044,https://www.airlines-manager.com/aircraft/show/105093929,13:00,1:29,338,"$834,881.00","$766,832.00","$2,268.73","$61,428.46"
MIA - SEA,57671659184,M-LAS-SEA-1,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/57671659184,https://www.airlines-manager.com/aircraft/show/105093925,20:30,8:59,338,"$834,881.00","$766,832.00","$2,268.73","$61,428.46"
MIA - SEA,57674153245,M-LAS-SEA-6 B,A319-100,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/57674153245,https://www.airlines-manager.com/aircraft/show/113251304,22:30,11:14,198,"578,175$","520,898$","$2,630.80","$40,908.22"
MIA - SEA,57675937061,M-LAS-SEA-2,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/57675937061,https://www.airlines-manager.com/aircraft/show/105093926,23:30,11:59,338,"$834,881.00","$766,832.00","$2,268.73","$61,428.46"
MIA - SJC,57632964483,M-SJC-YYC-5,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/57632964483,https://www.airlines-manager.com/aircraft/show/107763563,1:45,13:44,320,"$734,893.00","$668,726.00","$2,089.77","$55,804.67"
MIA - SJC,57651685749,M-SJC-YYC-1,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/57651685749,https://www.airlines-manager.com/aircraft/show/107763569,12:00,23:59,320,"$734,893.00","$668,726.00","$2,089.77","$55,804.67"
MIA - SJC,57658665056,M-SJC-YYC-2,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/57658665056,https://www.airlines-manager.com/aircraft/show/107763568,14:00,1:59,320,"$734,893.00","$668,726.00","$2,089.77","$55,804.67"
MIA - SJC,57662009295,M-SJC-YYC-3,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/57662009295,https://www.airlines-manager.com/aircraft/show/107763567,16:00,3:59,320,"734,893$","668,726$","$2,089.77","$55,804.67"
MIA - SJC,57675937095,M-SJC-YYC-4,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/57675937095,https://www.airlines-manager.com/aircraft/show/107763564,23:45,11:44,320,"734,893$","668,726$","$2,089.77","$55,804.67"
MIA - SJU,57632964664,M-SJU-BOS-6 B,A319-100,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/57632964664,https://www.airlines-manager.com/aircraft/show/110582841,3:15,9:29,198,"$287,737.00","$258,672.00","$1,306.42","$41,498.18"
MIA - SJU,57648263141,M-SJU-BOS-2,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/57648263141,https://www.airlines-manager.com/aircraft/show/91352062,10:15,16:29,310,"$381,512.00","$345,237.00","$1,113.67","$55,385.61"
MIA - SJU,57655460010,M-SJU-BOS-3,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/57655460010,https://www.airlines-manager.com/aircraft/show/91352061,12:15,18:29,310,"$381,512.00","$345,237.00","$1,113.67","$55,385.61"
MIA - SJU,57665599648,M-SJU-BOS-4,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/57665599648,https://www.airlines-manager.com/aircraft/show/91352060,18:15,0:29,310,"$381,512.00","$345,237.00","$1,113.67","$55,385.61"
MIA - SJU,57668758302,M-SJU-BOS-5,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/57668758302,https://www.airlines-manager.com/aircraft/show/91352059,19:15,1:29,310,"381,512$","345,237$","$1,113.67","$55,385.61"
MIA - SJU,57674153268,M-SJU-BOS-1,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/57674153268,https://www.airlines-manager.com/aircraft/show/91352063,22:45,4:59,276,"344,341$","309,283$","$1,120.59","$49,617.59"
MIA - SKB,57632964463,M-ANU-SXM-4 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/57632964463,https://www.airlines-manager.com/aircraft/show/110114298,1:30,8:29,228,"345,078$","315,549$","$1,383.99","$45,186.01"
MIA - SKB,57632964464,M-ANU-SXM-1 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/57632964464,https://www.airlines-manager.com/aircraft/show/110114295,2:15,9:14,228,"$345,078.00","$315,549.00","$1,383.99","$45,186.01"
MIA - SKB,57632964465,M-ANU-SXM-2 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/57632964465,https://www.airlines-manager.com/aircraft/show/110114296,3:15,10:14,228,"345,078$","315,549$","$1,383.99","$45,186.01"
MIA - SKB,57640828148,M-ANU-SXM-6 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/57640828148,https://www.airlines-manager.com/aircraft/show/110114300,6:45,13:44,228,"$345,078.00","$315,549.00","$1,383.99","$45,186.01"
MIA - SKB,57658665121,M-ANU-SXM-5 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/57658665121,https://www.airlines-manager.com/aircraft/show/110114299,14:00,20:59,228,"$345,078.00","$315,549.00","$1,383.99","$45,186.01"
MIA - SKB,57671659261,M-ANU-SXM-3 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/57671659261,https://www.airlines-manager.com/aircraft/show/110114297,21:00,3:59,228,"$345,078.00","$315,549.00","$1,383.99","$45,186.01"
MIA - SLC,57632963860,M-SJU-BOS-2,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/57632963860,https://www.airlines-manager.com/aircraft/show/91352062,0:00,10:14,310,"$644,121.00","$586,535.00","$1,892.05","$57,316.12"
MIA - SLC,57632963861,M-SJU-BOS-4,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/57632963861,https://www.airlines-manager.com/aircraft/show/91352060,1:00,11:14,310,"$644,121.00","$586,535.00","$1,892.05","$57,316.12"
MIA - SLC,57632963862,M-SJU-BOS-3,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/57632963862,https://www.airlines-manager.com/aircraft/show/91352061,2:00,12:14,310,"$644,121.00","$586,535.00","$1,892.05","$57,316.12"
MIA - SLC,57648262982,M-SJU-BOS-5,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/57648262982,https://www.airlines-manager.com/aircraft/show/91352059,9:00,19:14,310,"$644,121.00","$586,535.00","$1,892.05","$57,316.12"
MIA - SLC,57648262983,M-SJU-BOS-6 B,A319-100,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/57648262983,https://www.airlines-manager.com/aircraft/show/110582841,10:00,20:14,198,"$483,924.00","$437,765.00","$2,210.93","$42,778.34"
MIA - SLC,57651685767,M-SJU-BOS-1,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/57651685767,https://www.airlines-manager.com/aircraft/show/91352063,12:00,22:14,310,"$644,121.00","$586,535.00","$1,892.05","$57,316.12"
MIA - SMF,57632964250,M-OAK-SMF-2,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/57632964250,https://www.airlines-manager.com/aircraft/show/91198619,1:00,12:59,320,"735,091$","671,059$","$2,097.06","$55,999.36"
MIA - SMF,57632964252,M-OAK-SMF-3,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/57632964252,https://www.airlines-manager.com/aircraft/show/91198616,3:00,14:59,320,"$735,091.00","$671,059.00","$2,097.06","$55,999.36"
MIA - SMF,57651685606,M-OAK-SMF-4,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/57651685606,https://www.airlines-manager.com/aircraft/show/91198618,11:00,22:59,320,"735,091$","671,059$","$2,097.06","$55,999.36"
MIA - SMF,57655460076,M-OAK-SMF-5,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/57655460076,https://www.airlines-manager.com/aircraft/show/91198617,13:00,0:59,320,"$735,091.00","$671,059.00","$2,097.06","$55,999.36"
MIA - SMF,57674153287,M-OAK-SMF-1,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/57674153287,https://www.airlines-manager.com/aircraft/show/91198615,23:00,10:59,320,"$735,091.00","$671,059.00","$2,097.06","$55,999.36"
MIA - STL,57632964371,M-ELP-MCI-1,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/57632964371,https://www.airlines-manager.com/aircraft/show/91806234,1:30,7:44,320,"$395,052.00","$351,479.00","$1,098.37","$56,387.01"
MIA - STL,57632964442,M-ELP-MCI-5 B,A319-100,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/57632964442,https://www.airlines-manager.com/aircraft/show/105093924,2:00,8:14,198,"$298,871.00","$268,112.00","$1,354.10","$43,012.62"
MIA - STL,57644525238,M-ELP-MCI-4,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/57644525238,https://www.airlines-manager.com/aircraft/show/91806231,8:30,14:44,320,"$395,052.00","$351,479.00","$1,098.37","$56,387.01"
MIA - STL,57648263052,M-ELP-MCI-3,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/57648263052,https://www.airlines-manager.com/aircraft/show/91806232,10:00,16:14,320,"$395,052.00","$351,479.00","$1,098.37","$56,387.01"
MIA - STL,57662009418,M-ELP-MCI-2,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/57662009418,https://www.airlines-manager.com/aircraft/show/91806235,17:00,23:14,320,"$395,052.00","$351,479.00","$1,098.37","$56,387.01"
MIA - SXM,57640828147,M-ANU-SXM-5 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/57640828147,https://www.airlines-manager.com/aircraft/show/110114299,6:45,13:44,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SXM,57658665120,M-ANU-SXM-3 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/57658665120,https://www.airlines-manager.com/aircraft/show/110114297,14:00,20:59,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SXM,57662009338,M-ANU-SXM-4 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/57662009338,https://www.airlines-manager.com/aircraft/show/110114298,16:00,22:59,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SXM,57668758308,M-ANU-SXM-1 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/57668758308,https://www.airlines-manager.com/aircraft/show/110114295,19:15,2:14,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SXM,57668758309,M-ANU-SXM-2 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/57668758309,https://www.airlines-manager.com/aircraft/show/110114296,20:15,3:14,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SXM,57675937110,M-ANU-SXM-6 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/57675937110,https://www.airlines-manager.com/aircraft/show/110114300,23:45,6:44,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SYR,57632964581,M-EUG-SYR-1,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/57632964581,https://www.airlines-manager.com/aircraft/show/119652483,2:30,9:14,320,"433,063$","391,646$","$1,223.89","$58,165.25"
MIA - SYR,57640828181,M-EUG-SYR-3,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/57640828181,https://www.airlines-manager.com/aircraft/show/119652481,7:15,13:59,320,"$433,063.00","$391,646.00","$1,223.89","$58,165.25"
MIA - SYR,57651685763,M-EUG-SYR-2,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/57651685763,https://www.airlines-manager.com/aircraft/show/119652482,12:00,18:44,320,"$433,063.00","$391,646.00","$1,223.89","$58,165.25"
MIA - SYR,57658665070,M-EUG-SYR-4,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/57658665070,https://www.airlines-manager.com/aircraft/show/119652480,14:00,20:44,320,"$433,063.00","$391,646.00","$1,223.89","$58,165.25"
MIA - TPA,57637373160,M-BUR-PVD-1,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/57637373160,https://www.airlines-manager.com/aircraft/show/108834803,5:00,7:59,310,"$128,129.00","$102,113.00",$329.40,"$34,227.82"
MIA - TPA,57651685672,M-BUR-PVD-3,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/57651685672,https://www.airlines-manager.com/aircraft/show/108834805,11:00,13:59,310,"$128,129.00","$102,113.00",$329.40,"$34,227.82"
MIA - TPA,57662009443,M-BUR-PVD-5 B,A319-100,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/57662009443,https://www.airlines-manager.com/aircraft/show/108834807,17:00,19:59,198,"$95,593.00","$74,772.00",$377.64,"$25,063.24"
MIA - TPA,57665599582,M-BUR-PVD-2,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/57665599582,https://www.airlines-manager.com/aircraft/show/108834804,17:45,20:44,310,"$128,129.00","$102,113.00",$329.40,"$34,227.82"
MIA - TPA,57675937107,M-BUR-PVD-4,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/57675937107,https://www.airlines-manager.com/aircraft/show/108834806,23:45,2:44,310,"$128,129.00","$102,113.00",$329.40,"$34,227.82"
MIA - TUL,57632964172,M-FAR-TUL-2,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/57632964172,https://www.airlines-manager.com/aircraft/show/110883160,0:45,7:29,320,"$417,622.00","$376,181.00","$1,175.57","$55,868.47"
MIA - TUL,57632964175,M-FAR-TUL-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/57632964175,https://www.airlines-manager.com/aircraft/show/87169421,3:00,9:44,112,"$196,831.00","$172,707.00","$1,542.03","$25,649.55"
MIA - TUL,57651685626,M-FAR-TUL-3,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/57651685626,https://www.airlines-manager.com/aircraft/show/110883161,11:00,17:44,320,"$417,622.00","$376,181.00","$1,175.57","$55,868.47"
MIA - TUL,57662009297,M-FAR-TUL-4,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/57662009297,https://www.airlines-manager.com/aircraft/show/110883162,16:00,22:44,320,"$417,622.00","$376,181.00","$1,175.57","$55,868.47"
MIA - TUL,57668758352,M-FAR-TUL-1,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/57668758352,https://www.airlines-manager.com/aircraft/show/110883159,19:45,2:29,320,"$417,622.00","$376,181.00","$1,175.57","$55,868.47"
MIA - TUS,57632964123,M-IAD-TUS-3,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/57632964123,https://www.airlines-manager.com/aircraft/show/97556719,0:30,9:59,310,"$593,850.00","$545,245.00","$1,758.85","$57,495.08"
MIA - TUS,57648263099,M-IAD-TUS-2,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/57648263099,https://www.airlines-manager.com/aircraft/show/97556720,10:00,19:29,310,"$593,850.00","$545,245.00","$1,758.85","$57,495.08"
MIA - TUS,57655460132,M-IAD-TUS-5,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/57655460132,https://www.airlines-manager.com/aircraft/show/97556716,13:00,22:29,310,"$593,850.00","$545,245.00","$1,758.85","$57,495.08"
MIA - TUS,57662009254,M-IAD-TUS-1,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/57662009254,https://www.airlines-manager.com/aircraft/show/97556721,15:45,1:14,310,"$593,850.00","$545,245.00","$1,758.85","$57,495.08"
MIA - TUS,57665599708,M-IAD-TUS-4,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/57665599708,https://www.airlines-manager.com/aircraft/show/97556718,18:45,4:14,310,"593,850$","545,245$","$1,758.85","$57,495.08"
MIA - TYS,57632964680,M-CID-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/57632964680,https://www.airlines-manager.com/aircraft/show/116789650,3:30,8:29,310,"$315,564.00","$286,171.00",$923.13,"$57,425.62"
MIA - TYS,57648263108,M-CID-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/57648263108,https://www.airlines-manager.com/aircraft/show/116789651,10:00,14:59,310,"$315,564.00","$286,171.00",$923.13,"$57,425.62"
MIA - TYS,57658665173,M-CID-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/57658665173,https://www.airlines-manager.com/aircraft/show/116789652,14:45,19:44,310,"$315,564.00","$286,171.00",$923.13,"$57,425.62"
MIA - TYS,57674153171,M-CID-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/57674153171,https://www.airlines-manager.com/aircraft/show/116789653,22:00,2:59,310,"$315,564.00","$286,171.00",$923.13,"$57,425.62"
MIA - YUL,57640828123,M-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/57640828123,https://www.airlines-manager.com/aircraft/show/113101225,6:30,13:59,400,"$630,873.00","$576,566.00","$1,441.42","$77,046.68"
MIA - YUL,57651685594,M-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/57651685594,https://www.airlines-manager.com/aircraft/show/113101226,11:00,18:29,400,"630,873$","576,566$","$1,441.42","$77,046.68"
MIA - YUL,57658665192,M-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/57658665192,https://www.airlines-manager.com/aircraft/show/113101227,15:00,22:29,400,"630,873$","576,566$","$1,441.42","$77,046.68"
MIA - YUL,57675937089,M-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/57675937089,https://www.airlines-manager.com/aircraft/show/113101224,23:45,7:14,400,"$630,873.00","$576,566.00","$1,441.42","$77,046.68"
MIA - YVR,57651685593,M-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/57651685593,https://www.airlines-manager.com/aircraft/show/113101224,11:00,23:44,400,"$1,049,041.00","$964,395.00","$2,410.99","$75,737.83"
MIA - YVR,57658665034,M-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/57658665034,https://www.airlines-manager.com/aircraft/show/113101225,14:00,2:44,400,"$1,049,041.00","$964,395.00","$2,410.99","$75,737.83"
MIA - YVR,57665599664,M-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/57665599664,https://www.airlines-manager.com/aircraft/show/113101226,18:30,7:14,400,"$1,049,041.00","$964,395.00","$2,410.99","$75,737.83"
MIA - YVR,57674153224,M-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/57674153224,https://www.airlines-manager.com/aircraft/show/113101227,22:30,11:14,400,"$1,049,041.00","$964,395.00","$2,410.99","$75,737.83"
MIA - YYC,57632963849,M-SJC-YYC-1,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/57632963849,https://www.airlines-manager.com/aircraft/show/107763569,0:00,11:44,320,"$733,218.00","$664,622.00","$2,076.94","$56,643.92"
MIA - YYC,57632963850,M-SJC-YYC-2,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/57632963850,https://www.airlines-manager.com/aircraft/show/107763568,2:00,13:44,320,"$733,218.00","$664,622.00","$2,076.94","$56,643.92"
MIA - YYC,57632963851,M-SJC-YYC-3,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/57632963851,https://www.airlines-manager.com/aircraft/show/107763567,4:00,15:44,320,"$733,218.00","$664,622.00","$2,076.94","$56,643.92"
MIA - YYC,57651685748,M-SJC-YYC-4,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/57651685748,https://www.airlines-manager.com/aircraft/show/107763564,12:00,23:44,320,"$733,218.00","$664,622.00","$2,076.94","$56,643.92"
MIA - YYC,57658665054,M-SJC-YYC-5,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/57658665054,https://www.airlines-manager.com/aircraft/show/107763563,14:00,1:44,320,"$733,218.00","$664,622.00","$2,076.94","$56,643.92"
MIA - YYZ,57632964607,M-BWI-YYZ-3,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/57632964607,https://www.airlines-manager.com/aircraft/show/92153441,2:45,9:44,310,"$439,732.00","$392,992.00","$1,267.72","$56,275.70"
MIA - YYZ,57637373134,M-BWI-YYZ-6 B,A319-100,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/57637373134,https://www.airlines-manager.com/aircraft/show/120519717,4:45,11:44,198,"$329,542.00","$292,098.00","$1,475.24","$41,827.88"
MIA - YYZ,57648263092,M-BWI-YYZ-4,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/57648263092,https://www.airlines-manager.com/aircraft/show/92153442,10:00,16:59,310,"$439,732.00","$392,992.00","$1,267.72","$56,275.70"
MIA - YYZ,57651685768,M-BWI-YYZ-5,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/57651685768,https://www.airlines-manager.com/aircraft/show/92153439,12:00,18:59,310,"$439,732.00","$392,992.00","$1,267.72","$56,275.70"
MIA - YYZ,57662009251,M-BWI-YYZ-1,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/57662009251,https://www.airlines-manager.com/aircraft/show/92153443,15:45,22:44,310,"$439,732.00","$392,992.00","$1,267.72","$56,275.70"
MIA - YYZ,57665599705,M-BWI-YYZ-2,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/57665599705,https://www.airlines-manager.com/aircraft/show/92153440,18:45,1:44,310,"$439,732.00","$392,992.00","$1,267.72","$56,275.70"
SFO - ABQ,57644525265,S-MCI-OMA-1,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/57644525265,https://www.airlines-manager.com/aircraft/show/88239553,8:45,14:14,320,"$351,204.00","$311,153.00",$972.35,"$56,745.23"
SFO - ABQ,57644525266,S-MCI-OMA-5 B,A319-100,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/57644525266,https://www.airlines-manager.com/aircraft/show/105223003,8:45,14:14,198,"$266,605.00","$238,475.00","$1,204.42","$43,490.88"
SFO - ABQ,57648263148,S-MCI-OMA-4,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/57648263148,https://www.airlines-manager.com/aircraft/show/88239557,10:30,15:59,320,"351,204$","311,153$",$972.35,"$56,745.23"
SFO - ABQ,57658665197,S-MCI-OMA-3,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/57658665197,https://www.airlines-manager.com/aircraft/show/88239555,15:00,20:29,320,"$351,204.00","$311,153.00",$972.35,"$56,745.23"
SFO - ABQ,57674153253,S-MCI-OMA-2,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/57674153253,https://www.airlines-manager.com/aircraft/show/88239554,22:45,4:14,320,"$351,204.00","$311,153.00",$972.35,"$56,745.23"
SFO - ALB,57632964133,S-ALB-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/57632964133,https://www.airlines-manager.com/aircraft/show/112650097,0:30,12:29,310,"$737,199.00","$681,035.00","$2,196.89","$56,831.85"
SFO - ALB,57637373193,S-ALB-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/57637373193,https://www.airlines-manager.com/aircraft/show/112650096,5:30,17:29,310,"$737,199.00","$681,035.00","$2,196.89","$56,831.85"
SFO - ALB,57644525168,S-ALB-CAK-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/57644525168,https://www.airlines-manager.com/aircraft/show/112650090,7:30,19:29,198,"551,373$","506,332$","$2,557.23","$42,253.02"
SFO - ALB,57658665103,S-ALB-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/57658665103,https://www.airlines-manager.com/aircraft/show/112650099,14:00,1:59,310,"$737,199.00","$681,035.00","$2,196.89","$56,831.85"
SFO - ALB,57665599619,S-ALB-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/57665599619,https://www.airlines-manager.com/aircraft/show/112650098,18:00,5:59,310,"$737,199.00","$681,035.00","$2,196.89","$56,831.85"
SFO - ANC,57632964572,S-BWI-ANC-4,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/57632964572,https://www.airlines-manager.com/aircraft/show/106255848,2:30,12:14,338,"$665,760.00","$617,716.00","$1,827.56","$63,463.97"
SFO - ANC,57632964573,S-BWI-ANC-5,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/57632964573,https://www.airlines-manager.com/aircraft/show/106255849,3:30,13:14,338,"$665,760.00","$617,716.00","$1,827.56","$63,463.97"
SFO - ANC,57668758231,S-BWI-ANC-1,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/57668758231,https://www.airlines-manager.com/aircraft/show/106255845,19:00,4:44,338,"$665,760.00","$617,716.00","$1,827.56","$63,463.97"
SFO - ANC,57668758232,S-BWI-ANC-2,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/57668758232,https://www.airlines-manager.com/aircraft/show/106255846,20:00,5:44,338,"$665,760.00","$617,716.00","$1,827.56","$63,463.97"
SFO - ANC,57671659235,S-BWI-ANC-3,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/57671659235,https://www.airlines-manager.com/aircraft/show/106255847,21:00,6:44,338,"$665,760.00","$617,716.00","$1,827.56","$63,463.97"
SFO - ATL,57662009439,S-168C-3 B2,747-400,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/57662009439,https://www.airlines-manager.com/aircraft/show/120752303,17:00,2:44,968,"$1,863,868.00","$1,685,722.00","$1,741.45","$173,190.62"
SFO - ATL,57665599629,S-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/57665599629,https://www.airlines-manager.com/aircraft/show/107467212,18:00,4:29,112,"$307,106.00","$254,690.00","$2,274.02","$24,294.75"
SFO - ATL,57668758403,S-168D-6 B2,747-400,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/57668758403,https://www.airlines-manager.com/aircraft/show/120752299,20:00,5:44,968,"$1,863,868.00","$1,685,722.00","$1,741.45","$173,190.62"
SFO - AUS,57632964191,S-OGG-AUS-1,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/57632964191,https://www.airlines-manager.com/aircraft/show/92773481,0:45,8:44,310,"503,113$","458,860$","$1,480.19","$57,477.24"
SFO - AUS,57632964193,S-OGG-AUS-2,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/57632964193,https://www.airlines-manager.com/aircraft/show/92773480,2:45,10:44,310,"$503,113.00","$458,860.00","$1,480.19","$57,477.24"
SFO - AUS,57655460197,S-OGG-AUS-3,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/57655460197,https://www.airlines-manager.com/aircraft/show/92773479,13:30,21:29,310,"$503,113.00","$458,860.00","$1,480.19","$57,477.24"
SFO - AUS,57662009235,S-OGG-AUS-4,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/57662009235,https://www.airlines-manager.com/aircraft/show/92773478,15:30,23:29,310,"$503,113.00","$458,860.00","$1,480.19","$57,477.24"
SFO - AUS,57665599675,S-OGG-AUS-5,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/57665599675,https://www.airlines-manager.com/aircraft/show/92773477,18:30,2:29,310,"$503,113.00","$458,860.00","$1,480.19","$57,477.24"
SFO - BDL,57637373122,S-RSW-BDL-1,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/57637373122,https://www.airlines-manager.com/aircraft/show/84915098,4:45,16:59,320,"$745,353.00","$681,235.00","$2,128.86","$55,686.78"
SFO - BDL,57640828138,S-RSW-BDL-2,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/57640828138,https://www.airlines-manager.com/aircraft/show/84915099,6:45,18:59,320,"$745,353.00","$681,235.00","$2,128.86","$55,686.78"
SFO - BDL,57644525264,S-RSW-BDL-5,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/57644525264,https://www.airlines-manager.com/aircraft/show/84915102,8:45,20:59,320,"$745,353.00","$681,235.00","$2,128.86","$55,686.78"
SFO - BDL,57662009415,S-RSW-BDL-3,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/57662009415,https://www.airlines-manager.com/aircraft/show/84915100,17:00,5:14,320,"$745,353.00","$681,235.00","$2,128.86","$55,686.78"
SFO - BDL,57668758239,S-RSW-BDL-4,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/57668758239,https://www.airlines-manager.com/aircraft/show/84915101,19:00,7:14,320,"$745,353.00","$681,235.00","$2,128.86","$55,686.78"
SFO - BFF,57632964304,S-ICT-BFF-5,ERJ-175,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/57632964304,https://www.airlines-manager.com/aircraft/show/114912306,1:00,7:14,112,"$184,180.00","$161,791.00","$1,444.56","$25,955.78"
SFO - BFF,57632964305,S-ICT-BFF-4,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/57632964305,https://www.airlines-manager.com/aircraft/show/114912268,2:15,8:29,310,"$391,156.00","$356,860.00","$1,151.16","$57,250.27"
SFO - BFF,57644525226,S-ICT-BFF-3,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/57644525226,https://www.airlines-manager.com/aircraft/show/114912263,8:15,14:29,310,"$391,156.00","$356,860.00","$1,151.16","$57,250.27"
SFO - BFF,57662009331,S-ICT-BFF-2,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/57662009331,https://www.airlines-manager.com/aircraft/show/114912264,16:00,22:14,310,"$391,156.00","$356,860.00","$1,151.16","$57,250.27"
SFO - BFF,57675937077,S-ICT-BFF-1,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/57675937077,https://www.airlines-manager.com/aircraft/show/114912267,23:30,5:44,310,"$391,156.00","$356,860.00","$1,151.16","$57,250.27"
SFO - BHM,57637373186,S-BHM-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/57637373186,https://www.airlines-manager.com/aircraft/show/117782568,5:30,15:29,320,"$624,697.00","$570,602.00","$1,783.13","$57,155.46"
SFO - BHM,57640828167,S-BHM-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/57640828167,https://www.airlines-manager.com/aircraft/show/117782569,7:00,16:59,320,"624,697$","570,602$","$1,783.13","$57,155.46"
SFO - BHM,57658665236,S-BHM-GRR-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/57658665236,https://www.airlines-manager.com/aircraft/show/117782583,15:00,0:59,198,"469,973$","430,696$","$2,175.23","$43,141.50"
SFO - BHM,57668758355,S-BHM-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/57668758355,https://www.airlines-manager.com/aircraft/show/117782567,19:45,5:44,320,"624,697$","570,602$","$1,783.13","$57,155.46"
SFO - BHM,57674153159,S-BHM-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/57674153159,https://www.airlines-manager.com/aircraft/show/117782566,22:00,7:59,320,"624,697$","570,602$","$1,783.13","$57,155.46"
SFO - BIL,57632964564,S-FAR-BIL-4,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/57632964564,https://www.airlines-manager.com/aircraft/show/117782587,2:15,7:59,310,"357,113$","324,930$","$1,048.16","$56,673.84"
SFO - BIL,57648263005,S-FAR-BIL-3,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/57648263005,https://www.airlines-manager.com/aircraft/show/117782586,9:15,14:59,310,"$357,113.00","$324,930.00","$1,048.16","$56,673.84"
SFO - BIL,57658665229,S-FAR-BIL-2,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/57658665229,https://www.airlines-manager.com/aircraft/show/117782585,15:00,20:44,310,"$357,113.00","$324,930.00","$1,048.16","$56,673.84"
SFO - BIL,57674153275,S-FAR-BIL-1,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/57674153275,https://www.airlines-manager.com/aircraft/show/117782584,22:45,4:29,310,"$357,113.00","$324,930.00","$1,048.16","$56,673.84"
SFO - BNA,57632964320,S-BNA-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/57632964320,https://www.airlines-manager.com/aircraft/show/103365580,1:15,10:59,320,"$608,391.00","$552,114.00","$1,725.36","$56,724.04"
SFO - BNA,57640828110,S-BNA-CMH-6,ERJ-175,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/57640828110,https://www.airlines-manager.com/aircraft/show/82323681,6:00,15:44,112,"$286,104.00","$252,244.00","$2,252.18","$25,915.48"
SFO - BNA,57655460086,S-BNA-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/57655460086,https://www.airlines-manager.com/aircraft/show/103365583,13:00,22:44,320,"$608,391.00","$552,114.00","$1,725.36","$56,724.04"
SFO - BNA,57658665202,S-BNA-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/57658665202,https://www.airlines-manager.com/aircraft/show/103365582,15:00,0:44,320,"$608,391.00","$552,114.00","$1,725.36","$56,724.04"
SFO - BNA,57662009247,S-BNA-CMH-5,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/57662009247,https://www.airlines-manager.com/aircraft/show/103365579,15:45,1:29,320,"$608,391.00","$552,114.00","$1,725.36","$56,724.04"
SFO - BNA,57674153319,S-BNA-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/57674153319,https://www.airlines-manager.com/aircraft/show/103365581,23:15,8:59,320,"$608,391.00","$552,114.00","$1,725.36","$56,724.04"
SFO - BOI,57632964315,S-CLE-MKE-2,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/57632964315,https://www.airlines-manager.com/aircraft/show/92519369,1:15,5:29,320,"$248,121.00","$217,386.00",$679.33,"$51,351.02"
SFO - BOI,57648263028,S-CLE-MKE-1,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/57648263028,https://www.airlines-manager.com/aircraft/show/92519368,9:45,13:59,320,"$248,121.00","$217,386.00",$679.33,"$51,351.02"
SFO - BOI,57658665166,S-CLE-MKE-4,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/57658665166,https://www.airlines-manager.com/aircraft/show/92519371,14:45,18:59,320,"$248,121.00","$217,386.00",$679.33,"$51,351.02"
SFO - BOI,57662009284,S-CLE-MKE-3,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/57662009284,https://www.airlines-manager.com/aircraft/show/92519367,16:00,20:14,320,"$248,121.00","$217,386.00",$679.33,"$51,351.02"
SFO - BOS,57632963895,S-BOS-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/57632963895,https://www.airlines-manager.com/aircraft/show/104864961,0:15,12:44,338,"841,524$","778,167$","$2,302.27","$62,336.48"
SFO - BOS,57651685726,S-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/57651685726,https://www.airlines-manager.com/aircraft/show/120141531,11:30,23:59,0,"$222,034.00","$134,572.00",#DIV/0!,"$10,780.13"
SFO - BOS,57655460042,S-BOS-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/57655460042,https://www.airlines-manager.com/aircraft/show/104901564,13:00,1:29,338,"$841,524.00","$778,167.00","$2,302.27","$62,336.48"
SFO - BOS,57658665027,S-BOS-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/57658665027,https://www.airlines-manager.com/aircraft/show/104870960,14:00,2:29,338,"$841,524.00","$778,167.00","$2,302.27","$62,336.48"
SFO - BOS,57662009243,S-BOS-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/57662009243,https://www.airlines-manager.com/aircraft/show/104874465,15:45,4:14,338,"$841,524.00","$778,167.00","$2,302.27","$62,336.48"
SFO - BOS,57668758415,S-BOS-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/57668758415,https://www.airlines-manager.com/aircraft/show/104901544,20:15,8:44,338,"$841,524.00","$778,167.00","$2,302.27","$62,336.48"
SFO - BTV,57632963866,S-BTV-LEX-4,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/57632963866,https://www.airlines-manager.com/aircraft/show/112650092,0:00,11:59,310,"$733,303.00","$677,318.00","$2,184.90","$56,521.67"
SFO - BTV,57640828105,S-BTV-LEX-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/57640828105,https://www.airlines-manager.com/aircraft/show/112650089,6:00,17:59,198,"$549,048.00","$504,149.00","$2,546.21","$42,070.85"
SFO - BTV,57658665101,S-BTV-LEX-1,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/57658665101,https://www.airlines-manager.com/aircraft/show/112650095,14:00,1:59,310,"$733,303.00","$677,318.00","$2,184.90","$56,521.67"
SFO - BTV,57665599618,S-BTV-LEX-2,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/57665599618,https://www.airlines-manager.com/aircraft/show/112650094,18:00,5:59,310,"$733,303.00","$677,318.00","$2,184.90","$56,521.67"
SFO - BTV,57668758397,S-BTV-LEX-3,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/57668758397,https://www.airlines-manager.com/aircraft/show/112650093,20:00,7:59,310,"$733,303.00","$677,318.00","$2,184.90","$56,521.67"
SFO - BUF,57632964458,S-PVD-BUF-1,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/57632964458,https://www.airlines-manager.com/aircraft/show/112650108,1:30,12:29,310,"690,191$","636,733$","$2,053.98","$57,972.66"
SFO - BUF,57637373194,S-PVD-BUF-2,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/57637373194,https://www.airlines-manager.com/aircraft/show/112650107,5:30,16:29,310,"$690,191.00","$636,733.00","$2,053.98","$57,972.66"
SFO - BUF,57644525162,S-PVD-BUF-3,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/57644525162,https://www.airlines-manager.com/aircraft/show/112650106,7:30,18:29,310,"$690,191.00","$636,733.00","$2,053.98","$57,972.66"
SFO - BUF,57655460153,S-PVD-BUF-4,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/57655460153,https://www.airlines-manager.com/aircraft/show/112650105,13:00,23:59,310,"690,191$","636,733$","$2,053.98","$57,972.66"
SFO - BUF,57665599620,S-PVD-BUF-5,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/57665599620,https://www.airlines-manager.com/aircraft/show/112650104,18:00,4:59,310,"690,191$","636,733$","$2,053.98","$57,972.66"
SFO - BUR,57632964560,S-SAV-JAN-1,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/57632964560,https://www.airlines-manager.com/aircraft/show/114912265,2:15,5:44,310,"174,124$","151,614$",$489.08,"$43,525.55"
SFO - BUR,57637373080,S-SAV-JAN-4,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/57637373080,https://www.airlines-manager.com/aircraft/show/114912270,4:15,7:44,310,"174,124$","151,614$",$489.08,"$43,525.55"
SFO - BUR,57651685724,S-SAV-JAN-5 B,A319-100,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/57651685724,https://www.airlines-manager.com/aircraft/show/114917486,11:30,14:59,198,"131,182$","113,160$",$571.52,"$32,486.12"
SFO - BUR,57662009237,S-SAV-JAN-3,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/57662009237,https://www.airlines-manager.com/aircraft/show/114912269,15:30,18:59,310,"174,124$","151,614$",$489.08,"$43,525.55"
SFO - BUR,57662009238,S-SAV-JAN-2,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/57662009238,https://www.airlines-manager.com/aircraft/show/114912266,17:00,20:29,310,"$174,124.00","$151,614.00",$489.08,"$43,525.55"
SFO - BWI,57637373114,S-BWI-ANC-1,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/57637373114,https://www.airlines-manager.com/aircraft/show/106255845,4:45,16:14,338,"$792,718.00","$734,335.00","$2,172.59","$63,947.90"
SFO - BWI,57637373115,S-BWI-ANC-2,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/57637373115,https://www.airlines-manager.com/aircraft/show/106255846,5:45,17:14,338,"$792,718.00","$734,335.00","$2,172.59","$63,947.90"
SFO - BWI,57640828135,S-BWI-ANC-3,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/57640828135,https://www.airlines-manager.com/aircraft/show/106255847,6:45,18:14,338,"$792,718.00","$734,335.00","$2,172.59","$63,947.90"
SFO - BWI,57658665182,S-BWI-ANC-4,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/57658665182,https://www.airlines-manager.com/aircraft/show/106255848,15:00,2:29,338,"$792,718.00","$734,335.00","$2,172.59","$63,947.90"
SFO - BWI,57662009268,S-BWI-ANC-5,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/57662009268,https://www.airlines-manager.com/aircraft/show/106255849,16:00,3:29,338,"$792,718.00","$734,335.00","$2,172.59","$63,947.90"
SFO - BZN,57648263027,S-ROC-COS-1,A321neo,https://www.airlines-manager.com/network/showline/50555367,https://www.airlines-manager.com/network/showflight/57648263027,https://www.airlines-manager.com/aircraft/show/120112476,9:45,14:59,338,"$357,990.00","$329,036.00",$973.48,"$62,873.12"
SFO - BZN,57658665183,S-ROC-COS-3,A321neo,https://www.airlines-manager.com/network/showline/50555367,https://www.airlines-manager.com/network/showflight/57658665183,https://www.airlines-manager.com/aircraft/show/120112474,15:00,20:14,338,"$357,990.00","$329,036.00",$973.48,"$62,873.12"
SFO - BZN,57665599688,S-ROC-COS-2,A321neo,https://www.airlines-manager.com/network/showline/50555367,https://www.airlines-manager.com/network/showflight/57665599688,https://www.airlines-manager.com/aircraft/show/120112475,18:45,23:59,338,"$357,990.00","$329,036.00",$973.48,"$62,873.12"
SFO - BZN,57675937088,S-ROC-COS-4,A321neo,https://www.airlines-manager.com/network/showline/50555367,https://www.airlines-manager.com/network/showflight/57675937088,https://www.airlines-manager.com/aircraft/show/120051490,23:45,4:59,277,"319,704$","291,872$","$1,053.69","$55,771.72"
SFO - CAK,57632964538,S-ALB-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/57632964538,https://www.airlines-manager.com/aircraft/show/112650099,2:00,12:29,310,"$660,859.00","$610,685.00","$1,969.95","$58,252.94"
SFO - CAK,57640828103,S-ALB-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/57640828103,https://www.airlines-manager.com/aircraft/show/112650098,6:00,16:29,310,"$660,859.00","$610,685.00","$1,969.95","$58,252.94"
SFO - CAK,57658665102,S-ALB-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/57658665102,https://www.airlines-manager.com/aircraft/show/112650097,14:00,0:29,310,"$660,859.00","$610,685.00","$1,969.95","$58,252.94"
SFO - CAK,57668758274,S-ALB-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/57668758274,https://www.airlines-manager.com/aircraft/show/112650096,19:00,5:29,310,"$660,859.00","$610,685.00","$1,969.95","$58,252.94"
SFO - CAK,57671659263,S-ALB-CAK-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/57671659263,https://www.airlines-manager.com/aircraft/show/112650090,21:00,7:29,198,"$496,365.00","$456,132.00","$2,303.70","$43,510.21"
SFO - CDG,57632964682,S-168D-2 B2,747-400,https://www.airlines-manager.com/network/showline/50769259,https://www.airlines-manager.com/network/showflight/57632964682,https://www.airlines-manager.com/aircraft/show/120752295,3:30,1:29,968,"$4,129,579.00","$3,785,477.00","$3,910.62","$172,197.59"
SFO - CDG,57671659312,S-168C-1 B2,747-400,https://www.airlines-manager.com/network/showline/50769259,https://www.airlines-manager.com/network/showflight/57671659312,https://www.airlines-manager.com/aircraft/show/120752301,21:30,19:29,947,"$4,070,845.00","$3,730,372.00","$3,939.15","$169,690.92"
SFO - CHS,57632964445,S-MHT-CHS-1,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/57632964445,https://www.airlines-manager.com/aircraft/show/114917465,1:30,12:44,320,"$704,942.00","$645,793.00","$2,018.10","$57,488.99"
SFO - CHS,57637373184,S-MHT-CHS-2,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/57637373184,https://www.airlines-manager.com/aircraft/show/114917464,5:30,16:44,320,"$704,942.00","$645,793.00","$2,018.10","$57,488.99"
SFO - CHS,57644525259,S-MHT-CHS-5 B,A319-100,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/57644525259,https://www.airlines-manager.com/aircraft/show/114912262,8:30,19:59,198,"$531,446.00","$488,189.00","$2,465.60","$42,512.83"
SFO - CHS,57655460098,S-MHT-CHS-3,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/57655460098,https://www.airlines-manager.com/aircraft/show/114917463,13:00,0:14,320,"$704,942.00","$645,793.00","$2,018.10","$57,488.99"
SFO - CHS,57662009424,S-MHT-CHS-4,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/57662009424,https://www.airlines-manager.com/aircraft/show/114266973,17:00,4:14,320,"$704,942.00","$645,793.00","$2,018.10","$57,488.99"
SFO - CID,57632964446,S-YEG-YYC-1,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/57632964446,https://www.airlines-manager.com/aircraft/show/117782561,1:30,9:59,320,"$530,499.00","$483,550.00","$1,511.09","$57,000.00"
SFO - CID,57640828126,S-YEG-YYC-4,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/57640828126,https://www.airlines-manager.com/aircraft/show/116932364,6:30,14:59,320,"530,499$","483,550$","$1,511.09","$57,000.00"
SFO - CID,57655460101,S-YEG-YYC-3,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/57655460101,https://www.airlines-manager.com/aircraft/show/117782559,13:00,21:29,320,"$530,499.00","$483,550.00","$1,511.09","$57,000.00"
SFO - CID,57668758259,S-YEG-YYC-2,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/57668758259,https://www.airlines-manager.com/aircraft/show/117782560,19:00,3:29,320,"$530,499.00","$483,550.00","$1,511.09","$57,000.00"
SFO - CID,57671659264,S-YEG-YYC-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/57671659264,https://www.airlines-manager.com/aircraft/show/117782581,21:00,5:29,198,"$400,688.00","$366,754.00","$1,852.29","$43,232.30"
SFO - CLE,57637373181,S-CLE-MKE-2,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/57637373181,https://www.airlines-manager.com/aircraft/show/92519369,5:30,15:59,320,"$653,869.00","$596,150.00","$1,862.97","$56,866.45"
SFO - CLE,57640828132,S-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/57640828132,https://www.airlines-manager.com/aircraft/show/107467212,6:30,16:59,112,"307,058$","271,917$","$2,427.83","$25,938.03"
SFO - CLE,57644525153,S-CLE-MKE-5,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/57644525153,https://www.airlines-manager.com/aircraft/show/92519370,7:30,17:59,320,"$653,869.00","$596,150.00","$1,862.97","$56,866.45"
SFO - CLE,57658665046,S-CLE-MKE-1,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/57658665046,https://www.airlines-manager.com/aircraft/show/92519368,14:00,0:29,320,"$653,869.00","$596,150.00","$1,862.97","$56,866.45"
SFO - CLE,57668758240,S-CLE-MKE-4,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/57668758240,https://www.airlines-manager.com/aircraft/show/92519371,19:00,5:29,320,"$653,869.00","$596,150.00","$1,862.97","$56,866.45"
SFO - CLE,57668758241,S-CLE-MKE-3,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/57668758241,https://www.airlines-manager.com/aircraft/show/92519367,20:15,6:44,320,"$653,869.00","$596,150.00","$1,862.97","$56,866.45"
SFO - CLT,57632963834,S-IAD-CLT-3,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/57632963834,https://www.airlines-manager.com/aircraft/show/96135563,0:00,10:44,400,"$893,309.00","$813,344.00","$2,033.36","$75,777.39"
SFO - CLT,57640828088,S-IAD-CLT-4,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/57640828088,https://www.airlines-manager.com/aircraft/show/96135562,6:00,16:44,400,"$893,309.00","$813,344.00","$2,033.36","$75,777.39"
SFO - CLT,57655460184,S-IAD-CLT-1,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/57655460184,https://www.airlines-manager.com/aircraft/show/96135565,13:15,23:59,400,"$893,309.00","$813,344.00","$2,033.36","$75,777.39"
SFO - CLT,57658665249,S-IAD-CLT-5,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/57658665249,https://www.airlines-manager.com/aircraft/show/96135561,15:15,1:59,400,"$893,309.00","$813,344.00","$2,033.36","$75,777.39"
SFO - CLT,57665599510,S-IAD-CLT-2,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/57665599510,https://www.airlines-manager.com/aircraft/show/96135564,17:15,3:59,400,"$893,309.00","$813,344.00","$2,033.36","$75,777.39"
SFO - CMH,57632964166,S-BNA-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/57632964166,https://www.airlines-manager.com/aircraft/show/103365582,0:45,10:59,320,"$638,686.00","$581,389.00","$1,816.84","$56,813.26"
SFO - CMH,57637373183,S-BNA-CMH-5,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/57637373183,https://www.airlines-manager.com/aircraft/show/103365579,5:30,15:44,320,"$638,686.00","$581,389.00","$1,816.84","$56,813.26"
SFO - CMH,57655460085,S-BNA-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/57655460085,https://www.airlines-manager.com/aircraft/show/103365581,13:00,23:14,320,"$638,686.00","$581,389.00","$1,816.84","$56,813.26"
SFO - CMH,57658665201,S-BNA-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/57658665201,https://www.airlines-manager.com/aircraft/show/103365580,15:00,1:14,320,"$638,686.00","$581,389.00","$1,816.84","$56,813.26"
SFO - CMH,57662009263,S-BNA-CMH-6,ERJ-175,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/57662009263,https://www.airlines-manager.com/aircraft/show/82323681,15:45,1:59,112,"$300,499.00","$265,689.00","$2,372.22","$25,963.09"
SFO - CMH,57674153255,S-BNA-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/57674153255,https://www.airlines-manager.com/aircraft/show/103365583,22:45,8:59,320,"$638,686.00","$581,389.00","$1,816.84","$56,813.26"
SFO - COS,57632964546,S-ROC-COS-1,A321neo,https://www.airlines-manager.com/network/showline/50555364,https://www.airlines-manager.com/network/showflight/57632964546,https://www.airlines-manager.com/aircraft/show/120112476,2:15,7:59,338,"$397,466.00","$363,971.00","$1,076.84","$63,483.31"
SFO - COS,57648262997,S-ROC-COS-3,A321neo,https://www.airlines-manager.com/network/showline/50555364,https://www.airlines-manager.com/network/showflight/57648262997,https://www.airlines-manager.com/aircraft/show/120112474,9:15,14:59,338,"$397,466.00","$363,971.00","$1,076.84","$63,483.31"
SFO - COS,57655460049,S-ROC-COS-2,A321neo,https://www.airlines-manager.com/network/showline/50555364,https://www.airlines-manager.com/network/showflight/57655460049,https://www.airlines-manager.com/aircraft/show/120112475,13:00,18:44,338,"$397,466.00","$363,971.00","$1,076.84","$63,483.31"
SFO - COS,57665599591,S-ROC-COS-4,A321neo,https://www.airlines-manager.com/network/showline/50555364,https://www.airlines-manager.com/network/showflight/57665599591,https://www.airlines-manager.com/aircraft/show/120051490,18:00,23:44,338,"$397,466.00","$363,971.00","$1,076.84","$63,483.31"
SFO - CUN,57632963989,S-YOW-CUN-1,757-300,https://www.airlines-manager.com/network/showline/50555302,https://www.airlines-manager.com/network/showflight/57632963989,https://www.airlines-manager.com/aircraft/show/120056768,0:15,11:29,400,"$948,335.00","$874,378.00","$2,185.95","$77,837.80"
SFO - CUN,57632963990,S-YOW-CUN-2,757-300,https://www.airlines-manager.com/network/showline/50555302,https://www.airlines-manager.com/network/showflight/57632963990,https://www.airlines-manager.com/aircraft/show/120056767,1:15,12:29,400,"$948,335.00","$874,378.00","$2,185.95","$77,837.80"
SFO - CUN,57655460068,S-YOW-CUN-3,757-300,https://www.airlines-manager.com/network/showline/50555302,https://www.airlines-manager.com/network/showflight/57655460068,https://www.airlines-manager.com/aircraft/show/120056766,13:00,0:14,400,"$948,335.00","$874,378.00","$2,185.95","$77,837.80"
SFO - CUN,57658665037,S-YOW-CUN-4,757-300,https://www.airlines-manager.com/network/showline/50555302,https://www.airlines-manager.com/network/showflight/57658665037,https://www.airlines-manager.com/aircraft/show/120056765,14:00,1:14,400,"$948,335.00","$874,378.00","$2,185.95","$77,837.80"
SFO - CVG,57637373157,S-IND-CVG-3,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/57637373157,https://www.airlines-manager.com/aircraft/show/99316504,5:00,14:59,310,"$630,041.00","$577,014.00","$1,861.34","$57,797.73"
SFO - CVG,57640828169,S-IND-CVG-5,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/57640828169,https://www.airlines-manager.com/aircraft/show/99316502,7:00,16:59,310,"$630,041.00","$577,014.00","$1,861.34","$57,797.73"
SFO - CVG,57655460139,S-IND-CVG-2,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/57655460139,https://www.airlines-manager.com/aircraft/show/99316505,13:00,22:59,310,"$630,041.00","$577,014.00","$1,861.34","$57,797.73"
SFO - CVG,57658665219,S-IND-CVG-4,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/57658665219,https://www.airlines-manager.com/aircraft/show/99316503,15:00,0:59,310,"$630,041.00","$577,014.00","$1,861.34","$57,797.73"
SFO - CVG,57662009448,S-IND-CVG-6,ERJ-175,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/57662009448,https://www.airlines-manager.com/aircraft/show/99174346,17:00,2:59,112,"$295,248.00","$259,885.00","$2,320.40","$26,031.89"
SFO - CVG,57674153272,S-IND-CVG-1,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/57674153272,https://www.airlines-manager.com/aircraft/show/99316506,22:45,8:44,310,"$630,041.00","$577,014.00","$1,861.34","$57,797.73"
SFO - DEL,57632963871,S-168B-1 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/57632963871,https://www.airlines-manager.com/aircraft/show/86832727,0:00,5:29,1046,"$5,812,778.00","$5,394,209.00","$5,156.99","$983,746.32"
SFO - DEL,57632963872,S-168A-1 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/57632963872,https://www.airlines-manager.com/aircraft/show/86969602,2:00,7:29,1046,"$5,812,778.00","$5,394,209.00","$5,156.99","$983,746.32"
SFO - DEN,57632963986,S-IAH-MEX-5,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/57632963986,https://www.airlines-manager.com/aircraft/show/101045335,0:15,5:59,400,"$475,022.00","$407,058.00","$1,017.65","$70,998.49"
SFO - DEN,57640828122,S-IAH-MEX-1,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/57640828122,https://www.airlines-manager.com/aircraft/show/101045339,6:30,12:14,400,"$475,022.00","$407,058.00","$1,017.65","$70,998.49"
SFO - DEN,57644525236,S-IAH-MEX-4,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/57644525236,https://www.airlines-manager.com/aircraft/show/101045336,8:30,14:14,400,"$475,022.00","$407,058.00","$1,017.65","$70,998.49"
SFO - DEN,57655460065,S-IAH-MEX-3,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/57655460065,https://www.airlines-manager.com/aircraft/show/101045337,13:00,18:44,400,"$475,022.00","$407,058.00","$1,017.65","$70,998.49"
SFO - DEN,57674153191,S-IAH-MEX-2,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/57674153191,https://www.airlines-manager.com/aircraft/show/101045338,22:15,3:59,386,"$465,223.00","$397,610.00","$1,030.08","$69,350.58"
SFO - DFW,57632964146,S-DFW-2,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/57632964146,https://www.airlines-manager.com/aircraft/show/120752619,0:45,8:29,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DFW,57644525184,S-DFW-1,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/57644525184,https://www.airlines-manager.com/aircraft/show/120517724,8:00,15:44,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DFW,57648262972,S-DFW-2,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/57648262972,https://www.airlines-manager.com/aircraft/show/120752619,9:00,16:44,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DFW,57662009244,S-DFW-1,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/57662009244,https://www.airlines-manager.com/aircraft/show/120517724,15:45,23:29,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DFW,57662009245,S-DFW-2,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/57662009245,https://www.airlines-manager.com/aircraft/show/120752619,16:45,0:29,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DFW,57675937063,S-DFW-1,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/57675937063,https://www.airlines-manager.com/aircraft/show/120517724,23:30,7:14,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DSM,57637373102,S-TUL-DSM-3,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/57637373102,https://www.airlines-manager.com/aircraft/show/108410858,4:30,12:29,320,"$508,775.00","$462,937.00","$1,446.68","$57,987.93"
SFO - DSM,57655460091,S-TUL-DSM-2,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/57655460091,https://www.airlines-manager.com/aircraft/show/108410857,13:00,20:59,320,"$508,775.00","$462,937.00","$1,446.68","$57,987.93"
SFO - DSM,57658665246,S-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/57658665246,https://www.airlines-manager.com/aircraft/show/108466264,15:00,23:14,112,"$240,808.00","$213,387.00","$1,905.24","$25,917.45"
SFO - DSM,57674153259,S-TUL-DSM-1,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/57674153259,https://www.airlines-manager.com/aircraft/show/108410856,22:45,6:44,320,"$508,775.00","$462,937.00","$1,446.68","$57,987.93"
SFO - DSM,57675937067,S-TUL-DSM-4,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/57675937067,https://www.airlines-manager.com/aircraft/show/108410859,23:30,7:29,320,"$508,775.00","$462,937.00","$1,446.68","$57,987.93"
SFO - DTW,57637373096,S-ORD-DTW-4,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/57637373096,https://www.airlines-manager.com/aircraft/show/101045331,4:30,14:29,400,"$823,515.00","$748,392.00","$1,870.98","$74,964.14"
SFO - DTW,57637373097,S-ORD-DTW-3,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/57637373097,https://www.airlines-manager.com/aircraft/show/101045332,5:00,14:59,400,"$823,515.00","$748,392.00","$1,870.98","$74,964.14"
SFO - DTW,57658665189,S-ORD-DTW-2,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/57658665189,https://www.airlines-manager.com/aircraft/show/101045333,15:00,0:59,400,"$823,515.00","$748,392.00","$1,870.98","$74,964.14"
SFO - DTW,57662009412,S-ORD-DTW-5,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/57662009412,https://www.airlines-manager.com/aircraft/show/101045330,17:00,2:59,400,"$823,515.00","$748,392.00","$1,870.98","$74,964.14"
SFO - DTW,57674153154,S-ORD-DTW-1,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/57674153154,https://www.airlines-manager.com/aircraft/show/101045334,22:00,7:59,400,"$823,515.00","$748,392.00","$1,870.98","$74,964.14"
SFO - DXB,57637373195,S-168B-2 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/57637373195,https://www.airlines-manager.com/aircraft/show/87566901,5:30,12:29,1046,"$6,017,199.00","$5,552,011.00","$5,307.85","$795,037.37"
SFO - DXB,57644525164,S-168A-2 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/57644525164,https://www.airlines-manager.com/aircraft/show/86596991,7:30,14:29,1046,"$6,017,199.00","$5,552,011.00","$5,307.85","$795,037.37"
SFO - ELP,57637373215,S-ICT-BFF-1,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/57637373215,https://www.airlines-manager.com/aircraft/show/114912267,5:45,11:44,310,"$376,198.00","$341,426.00","$1,101.37","$57,062.84"
SFO - ELP,57640828190,S-ICT-BFF-5,ERJ-175,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/57640828190,https://www.airlines-manager.com/aircraft/show/114912306,7:15,13:14,112,"$178,042.00","$155,448.00","$1,387.93","$25,980.17"
SFO - ELP,57644525251,S-ICT-BFF-4,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/57644525251,https://www.airlines-manager.com/aircraft/show/114912268,8:30,14:29,310,"$376,198.00","$341,426.00","$1,101.37","$57,062.84"
SFO - ELP,57658665224,S-ICT-BFF-3,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/57658665224,https://www.airlines-manager.com/aircraft/show/114912263,15:00,20:59,310,"$376,198.00","$341,426.00","$1,101.37","$57,062.84"
SFO - ELP,57674153209,S-ICT-BFF-2,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/57674153209,https://www.airlines-manager.com/aircraft/show/114912264,22:15,4:14,310,"$376,198.00","$341,426.00","$1,101.37","$57,062.84"
SFO - EUG,57632964487,S-BHM-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/57632964487,https://www.airlines-manager.com/aircraft/show/117782568,1:45,5:29,320,"217,713$","189,681$",$592.75,"$50,807.41"
SFO - EUG,57632964488,S-BHM-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/57632964488,https://www.airlines-manager.com/aircraft/show/117782569,3:15,6:59,320,"217,713$","189,681$",$592.75,"$50,807.41"
SFO - EUG,57662009303,S-BHM-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/57662009303,https://www.airlines-manager.com/aircraft/show/117782567,16:00,19:44,320,"217,713$","189,681$",$592.75,"$50,807.41"
SFO - EUG,57665599573,S-BHM-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/57665599573,https://www.airlines-manager.com/aircraft/show/117782566,17:45,21:29,270,"197,028$","169,603$",$628.16,"$45,429.38"
SFO - FAR,57632964296,S-FAR-BIL-3,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/57632964296,https://www.airlines-manager.com/aircraft/show/117782586,1:00,8:44,310,"491,795$","452,290$","$1,459.00","$58,485.78"
SFO - FAR,57640828186,S-FAR-BIL-2,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/57640828186,https://www.airlines-manager.com/aircraft/show/117782585,7:15,14:59,310,"491,795$","452,290$","$1,459.00","$58,485.78"
SFO - FAR,57658665228,S-FAR-BIL-1,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/57658665228,https://www.airlines-manager.com/aircraft/show/117782584,15:00,22:44,310,"491,795$","452,290$","$1,459.00","$58,485.78"
SFO - FAR,57665599679,S-FAR-BIL-4,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/57665599679,https://www.airlines-manager.com/aircraft/show/117782587,18:30,2:14,310,"491,795$","452,290$","$1,459.00","$58,485.78"
SFO - FAT,57632964527,S-TUL-DSM-2,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/57632964527,https://www.airlines-manager.com/aircraft/show/108410857,2:00,4:44,320,"95,749$","71,553$",$223.60,"$26,177.93"
SFO - FAT,57651685732,S-TUL-DSM-1,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/57651685732,https://www.airlines-manager.com/aircraft/show/108410856,11:45,14:29,320,"95,749$","71,553$",$223.60,"$26,177.93"
SFO - FAT,57655460093,S-TUL-DSM-4,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/57655460093,https://www.airlines-manager.com/aircraft/show/108410859,13:00,15:44,320,"95,749$","71,553$",$223.60,"$26,177.93"
SFO - FAT,57665599605,S-TUL-DSM-3,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/57665599605,https://www.airlines-manager.com/aircraft/show/108410858,18:00,20:44,320,"95,749$","71,553$",$223.60,"$26,177.93"
SFO - FAT,57674153333,S-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/57674153333,https://www.airlines-manager.com/aircraft/show/108466264,23:15,1:59,73,"34,666$","22,375$",$306.51,"$8,185.98"
SFO - FCA,57637373112,S-MAF-FCA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/57637373112,https://www.airlines-manager.com/aircraft/show/120056759,4:45,9:59,272,"305,111$","281,676$","$1,035.57","$53,823.44"
SFO - FCA,57655460038,S-MAF-FCA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/57655460038,https://www.airlines-manager.com/aircraft/show/120056760,13:00,18:14,272,"305,111$","281,676$","$1,035.57","$53,823.44"
SFO - FCA,57658665176,S-MAF-FCA-5,ERJ-175,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/57658665176,https://www.airlines-manager.com/aircraft/show/119652600,14:45,20:14,112,"160,704$","140,973$","$1,258.69","$25,709.36"
SFO - FCA,57668758342,S-MAF-FCA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/57668758342,https://www.airlines-manager.com/aircraft/show/120056761,19:45,0:59,272,"305,111$","281,676$","$1,035.57","$53,823.44"
SFO - FCA,57675937085,S-MAF-FCA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/57675937085,https://www.airlines-manager.com/aircraft/show/120056758,23:45,4:59,272,"305,111$","281,676$","$1,035.57","$53,823.44"
SFO - FLL,57632963992,S-FLL-TPA-2,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/57632963992,https://www.airlines-manager.com/aircraft/show/97955543,0:15,12:14,320,"739,785$","671,757$","$2,099.24","$56,057.61"
SFO - FLL,57637373061,S-FLL-TPA-4,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/57637373061,https://www.airlines-manager.com/aircraft/show/97955541,4:15,16:14,320,"739,785$","671,757$","$2,099.24","$56,057.61"
SFO - FLL,57644525165,S-FLL-TPA-6 B,A319-100,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/57644525165,https://www.airlines-manager.com/aircraft/show/97900729,7:30,19:44,198,"556,070$","506,591$","$2,558.54","$41,410.71"
SFO - FLL,57655460079,S-FLL-TPA-1,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/57655460079,https://www.airlines-manager.com/aircraft/show/97955544,13:00,0:59,320,"739,785$","671,757$","$2,099.24","$56,057.61"
SFO - FLL,57662009420,S-FLL-TPA-3,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/57662009420,https://www.airlines-manager.com/aircraft/show/97955542,17:00,4:59,320,"739,785$","671,757$","$2,099.24","$56,057.61"
SFO - FLL,57668758387,S-FLL-TPA-5,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/57668758387,https://www.airlines-manager.com/aircraft/show/97955540,20:00,7:59,320,"739,785$","671,757$","$2,099.24","$56,057.61"
SFO - FSD,57632964050,S-OKC-FSD-1,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/57632964050,https://www.airlines-manager.com/aircraft/show/107160378,0:30,7:59,320,"471,889$","428,607$","$1,339.40","$57,274.88"
SFO - FSD,57632964053,S-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/57632964053,https://www.airlines-manager.com/aircraft/show/107132310,2:00,9:29,112,"223,210$","197,491$","$1,763.31","$26,390.78"
SFO - FSD,57632964056,S-OKC-FSD-4,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/57632964056,https://www.airlines-manager.com/aircraft/show/107160381,3:00,10:29,320,"471,889$","428,607$","$1,339.40","$57,274.88"
SFO - FSD,57644525194,S-OKC-FSD-3,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/57644525194,https://www.airlines-manager.com/aircraft/show/107160380,8:00,15:29,320,"471,889$","428,607$","$1,339.40","$57,274.88"
SFO - FSD,57662009292,S-OKC-FSD-2,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/57662009292,https://www.airlines-manager.com/aircraft/show/107160379,16:00,23:29,290,"444,613$","402,461$","$1,387.80","$53,780.98"
SFO - GRR,57632964301,S-BHM-GRR-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/57632964301,https://www.airlines-manager.com/aircraft/show/117782583,1:00,10:44,198,"458,303$","419,852$","$2,120.46","$43,135.48"
SFO - GRR,57637373207,S-BHM-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/57637373207,https://www.airlines-manager.com/aircraft/show/117782567,5:45,15:29,320,"608,484$","555,512$","$1,735.98","$57,073.15"
SFO - GRR,57644525196,S-BHM-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/57644525196,https://www.airlines-manager.com/aircraft/show/117782566,8:00,17:44,320,"608,484$","555,512$","$1,735.98","$57,073.15"
SFO - GRR,57662009304,S-BHM-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/57662009304,https://www.airlines-manager.com/aircraft/show/117782568,16:00,1:44,320,"608,484$","555,512$","$1,735.98","$57,073.15"
SFO - GRR,57665599550,S-BHM-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/57665599550,https://www.airlines-manager.com/aircraft/show/117782569,17:30,3:14,320,"608,484$","555,512$","$1,735.98","$57,073.15"
SFO - GSO,57632964074,S-GSO-SYR-4,737-900ER,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/57632964074,https://www.airlines-manager.com/aircraft/show/119550235,0:30,11:29,320,"687,935$","629,220$","$1,966.31","$57,288.62"
SFO - GSO,57640828106,S-GSO-SYR-5,A319-100,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/57640828106,https://www.airlines-manager.com/aircraft/show/120112473,6:00,17:14,198,"519,051$","476,182$","$2,404.96","$42,390.09"
SFO - GSO,57651685765,S-GSO-SYR-1,737-900ER,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/57651685765,https://www.airlines-manager.com/aircraft/show/120056764,12:00,22:59,320,"687,935$","629,220$","$1,966.31","$57,288.62"
SFO - GSO,57655460107,S-GSO-SYR-2,737-900ER,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/57655460107,https://www.airlines-manager.com/aircraft/show/120056763,13:00,23:59,320,"687,935$","629,220$","$1,966.31","$57,288.62"
SFO - GSO,57675937072,S-GSO-SYR-3,737-900ER,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/57675937072,https://www.airlines-manager.com/aircraft/show/120056762,23:30,10:29,320,"687,935$","629,220$","$1,966.31","$57,288.62"
SFO - HKG,57671659284,S-168B-6 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/57671659284,https://www.airlines-manager.com/aircraft/show/87083947,21:15,23:59,1046,"5,282,521$","4,883,932$","$4,669.15","$1,786,804.39"
SFO - HKG,57674153329,S-168A-6 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/57674153329,https://www.airlines-manager.com/aircraft/show/88032836,23:15,1:59,1046,"5,282,521$","4,883,932$","$4,669.15","$1,786,804.39"
SFO - IAD,57632963835,S-IAD-CLT-1,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/57632963835,https://www.airlines-manager.com/aircraft/show/96135565,0:00,11:14,400,"912,332$","834,314$","$2,085.79","$74,271.28"
SFO - IAD,57632963836,S-IAD-CLT-5,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/57632963836,https://www.airlines-manager.com/aircraft/show/96135561,4:00,15:14,400,"912,332$","834,314$","$2,085.79","$74,271.28"
SFO - IAD,57640828089,S-IAD-CLT-2,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/57640828089,https://www.airlines-manager.com/aircraft/show/96135564,6:00,17:14,400,"912,332$","834,314$","$2,085.79","$74,271.28"
SFO - IAD,57655460023,S-IAD-CLT-3,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/57655460023,https://www.airlines-manager.com/aircraft/show/96135563,12:45,23:59,400,"912,332$","834,314$","$2,085.79","$74,271.28"
SFO - IAD,57662009387,S-IAD-CLT-4,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/57662009387,https://www.airlines-manager.com/aircraft/show/96135562,16:45,3:59,400,"912,332$","834,314$","$2,085.79","$74,271.28"
SFO - IAH,57637373120,S-IAH-MEX-2,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/57637373120,https://www.airlines-manager.com/aircraft/show/101045338,4:45,12:59,400,"694,602$","624,794$","$1,561.99","$75,885.91"
SFO - IAH,57640828137,S-IAH-MEX-5,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/57640828137,https://www.airlines-manager.com/aircraft/show/101045335,6:45,14:59,400,"694,602$","624,794$","$1,561.99","$75,885.91"
SFO - IAH,57655460067,S-IAH-MEX-1,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/57655460067,https://www.airlines-manager.com/aircraft/show/101045339,13:00,21:14,400,"694,602$","624,794$","$1,561.99","$75,885.91"
SFO - IAH,57658665191,S-IAH-MEX-4,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/57658665191,https://www.airlines-manager.com/aircraft/show/101045336,15:00,23:14,400,"694,602$","624,794$","$1,561.99","$75,885.91"
SFO - IAH,57668758316,S-IAH-MEX-3,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/57668758316,https://www.airlines-manager.com/aircraft/show/101045337,19:30,3:44,400,"694,602$","624,794$","$1,561.99","$75,885.91"
SFO - ICN,57637373175,S-168D-1 B2,747-400,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/57637373175,https://www.airlines-manager.com/aircraft/show/120752294,5:15,3:29,968,"4,255,893$","3,935,008$","$4,065.09","$176,986.87"
SFO - ICN,57674153330,S-168C-7 B2,747-400,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/57674153330,https://www.airlines-manager.com/aircraft/show/120752307,23:15,21:29,968,"4,255,893$","3,935,008$","$4,065.09","$176,986.87"
SFO - ICT,57632964197,S-ICT-BFF-3,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/57632964197,https://www.airlines-manager.com/aircraft/show/114912263,0:45,8:14,310,"469,158$","430,023$","$1,387.17","$57,464.10"
SFO - ICT,57644525203,S-ICT-BFF-2,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/57644525203,https://www.airlines-manager.com/aircraft/show/114912264,8:00,15:29,310,"469,158$","430,023$","$1,387.17","$57,464.10"
SFO - ICT,57662009332,S-ICT-BFF-1,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/57662009332,https://www.airlines-manager.com/aircraft/show/114912267,16:00,23:29,310,"469,158$","430,023$","$1,387.17","$57,464.10"
SFO - ICT,57665599560,S-ICT-BFF-5,ERJ-175,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/57665599560,https://www.airlines-manager.com/aircraft/show/114912306,17:30,0:59,112,"221,348$","195,492$","$1,745.46","$26,123.65"
SFO - ICT,57665599561,S-ICT-BFF-4,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/57665599561,https://www.airlines-manager.com/aircraft/show/114912268,18:45,2:14,310,"469,158$","430,023$","$1,387.17","$57,464.10"
SFO - IND,57637373172,S-IND-CVG-4,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/57637373172,https://www.airlines-manager.com/aircraft/show/99316503,5:15,14:59,310,"605,607$","555,557$","$1,792.12","$57,077.77"
SFO - IND,57640828189,S-IND-CVG-6,ERJ-175,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/57640828189,https://www.airlines-manager.com/aircraft/show/99174346,7:15,16:59,112,"284,129$","250,715$","$2,238.53","$25,758.39"
SFO - IND,57655460140,S-IND-CVG-1,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/57655460140,https://www.airlines-manager.com/aircraft/show/99316506,13:00,22:44,310,"605,607$","555,557$","$1,792.12","$57,077.77"
SFO - IND,57658665220,S-IND-CVG-3,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/57658665220,https://www.airlines-manager.com/aircraft/show/99316504,15:00,0:44,310,"605,607$","555,557$","$1,792.12","$57,077.77"
SFO - IND,57662009430,S-IND-CVG-5,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/57662009430,https://www.airlines-manager.com/aircraft/show/99316502,17:00,2:44,310,"605,607$","555,557$","$1,792.12","$57,077.77"
SFO - IND,57674153295,S-IND-CVG-2,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/57674153295,https://www.airlines-manager.com/aircraft/show/99316505,23:00,8:44,310,"605,607$","555,557$","$1,792.12","$57,077.77"
SFO - JAC,57632964216,S-MAF-FCA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/57632964216,https://www.airlines-manager.com/aircraft/show/120056761,1:00,5:59,272,"285,290$","263,927$",$970.32,"$52,961.94"
SFO - JAC,57637373138,S-MAF-FCA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/57637373138,https://www.airlines-manager.com/aircraft/show/120056758,5:00,9:59,272,"285,290$","263,927$",$970.32,"$52,961.94"
SFO - JAC,57655460037,S-MAF-FCA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/57655460037,https://www.airlines-manager.com/aircraft/show/120056759,13:00,17:59,272,"285,290$","263,927$",$970.32,"$52,961.94"
SFO - JAC,57665599632,S-MAF-FCA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/57665599632,https://www.airlines-manager.com/aircraft/show/120056760,18:15,23:14,272,"285,290$","263,927$",$970.32,"$52,961.94"
SFO - JAC,57668758444,S-MAF-FCA-5,ERJ-175,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/57668758444,https://www.airlines-manager.com/aircraft/show/119652600,20:15,1:14,112,"149,834$","131,932$","$1,177.96","$26,474.65"
SFO - JAN,57632964566,S-SAV-JAN-5 B,A319-100,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/57632964566,https://www.airlines-manager.com/aircraft/show/114917486,2:15,11:29,198,"439,387$","402,942$","$2,035.06","$43,639.93"
SFO - JAN,57640828117,S-SAV-JAN-3,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/57640828117,https://www.airlines-manager.com/aircraft/show/114912269,6:15,15:29,310,"583,909$","538,452$","$1,736.94","$58,316.10"
SFO - JAN,57644525178,S-SAV-JAN-2,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/57644525178,https://www.airlines-manager.com/aircraft/show/114912266,7:45,16:59,310,"583,909$","538,452$","$1,736.94","$58,316.10"
SFO - JAN,57662009438,S-SAV-JAN-1,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/57662009438,https://www.airlines-manager.com/aircraft/show/114912265,17:00,2:14,310,"583,909$","538,452$","$1,736.94","$58,316.10"
SFO - JAN,57668758277,S-SAV-JAN-4,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/57668758277,https://www.airlines-manager.com/aircraft/show/114912270,19:00,4:14,310,"583,909$","538,452$","$1,736.94","$58,316.10"
SFO - JAX,57640828095,S-JAX-SAT-5,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/57640828095,https://www.airlines-manager.com/aircraft/show/86377315,6:00,17:14,310,"704,676$","649,607$","$2,095.51","$57,828.52"
SFO - JAX,57655460121,S-JAX-SAT-1,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/57655460121,https://www.airlines-manager.com/aircraft/show/86375568,13:00,0:14,310,"704,676$","649,607$","$2,095.51","$57,828.52"
SFO - JAX,57658665211,S-JAX-SAT-2,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/57658665211,https://www.airlines-manager.com/aircraft/show/86371267,15:00,2:14,310,"704,676$","649,607$","$2,095.51","$57,828.52"
SFO - JAX,57671659250,S-JAX-SAT-3,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/57671659250,https://www.airlines-manager.com/aircraft/show/86385102,21:00,8:14,310,"704,676$","649,607$","$2,095.51","$57,828.52"
SFO - JAX,57674153293,S-JAX-SAT-4,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/57674153293,https://www.airlines-manager.com/aircraft/show/86378760,23:00,10:14,310,"704,676$","649,607$","$2,095.51","$57,828.52"
SFO - JFK,57632964230,S-MIA-JFK-4,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/57632964230,https://www.airlines-manager.com/aircraft/show/89233034,1:00,12:59,400,"965,414$","866,916$","$2,167.29","$72,343.48"
SFO - JFK,57640828159,S-MIA-JFK-5,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/57640828159,https://www.airlines-manager.com/aircraft/show/89233035,7:00,18:59,400,"965,414$","866,916$","$2,167.29","$72,343.48"
SFO - JFK,57655460058,S-MIA-JFK-1,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/57655460058,https://www.airlines-manager.com/aircraft/show/89233032,13:00,0:59,400,"965,414$","866,916$","$2,167.29","$72,343.48"
SFO - JFK,57662009279,S-MIA-JFK-2,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/57662009279,https://www.airlines-manager.com/aircraft/show/84622093,16:00,3:59,400,"965,414$","866,916$","$2,167.29","$72,343.48"
SFO - JFK,57668758235,S-MIA-JFK-3,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/57668758235,https://www.airlines-manager.com/aircraft/show/89233031,19:00,6:59,400,"965,414$","866,916$","$2,167.29","$72,343.48"
SFO - KIX,57632964461,S-168D-3 B2,747-400,https://www.airlines-manager.com/network/showline/50769294,https://www.airlines-manager.com/network/showflight/57632964461,https://www.airlines-manager.com/aircraft/show/120752296,1:30,22:59,968,"4,000,997$","3,703,245$","$3,825.67","$172,377.58"
SFO - KIX,57668758338,S-168C-2 B2,747-400,https://www.airlines-manager.com/network/showline/50769294,https://www.airlines-manager.com/network/showflight/57668758338,https://www.airlines-manager.com/aircraft/show/120752302,19:30,16:59,968,"4,000,997$","3,703,245$","$3,825.67","$172,377.58"
SFO - KOA,57632964617,S-KOA-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/57632964617,https://www.airlines-manager.com/aircraft/show/112650101,2:45,13:59,310,"705,734$","650,862$","$2,099.55","$57,940.24"
SFO - KOA,57637373130,S-KOA-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/57637373130,https://www.airlines-manager.com/aircraft/show/112650100,4:45,15:59,310,"705,734$","650,862$","$2,099.55","$57,940.24"
SFO - KOA,57655460173,S-KOA-PWM-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/57655460173,https://www.airlines-manager.com/aircraft/show/112650091,13:00,0:14,198,"529,574$","485,575$","$2,452.40","$43,226.26"
SFO - KOA,57662009436,S-KOA-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/57662009436,https://www.airlines-manager.com/aircraft/show/112650103,17:00,4:14,310,"705,734$","650,862$","$2,099.55","$57,940.24"
SFO - KOA,57668758398,S-KOA-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/57668758398,https://www.airlines-manager.com/aircraft/show/112650102,20:00,7:14,310,"705,734$","650,862$","$2,099.55","$57,940.24"
SFO - LAS,57640828082,S-BOS-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/57640828082,https://www.airlines-manager.com/aircraft/show/104901564,6:00,9:44,338,"218,684$","179,991$",$532.52,"$48,211.88"
SFO - LAS,57640828083,S-BOS-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/57640828083,https://www.airlines-manager.com/aircraft/show/104870960,7:00,10:44,338,"218,684$","179,991$",$532.52,"$48,211.88"
SFO - LAS,57651685734,S-BOS-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/57651685734,https://www.airlines-manager.com/aircraft/show/104874465,12:00,15:44,338,"218,684$","179,991$",$532.52,"$48,211.88"
SFO - LAS,57662009363,S-BOS-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/57662009363,https://www.airlines-manager.com/aircraft/show/104901544,16:30,20:14,338,"218,684$","179,991$",$532.52,"$48,211.88"
SFO - LAS,57671659183,S-BOS-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/57671659183,https://www.airlines-manager.com/aircraft/show/104864961,20:30,0:14,338,"218,684$","179,991$",$532.52,"$48,211.88"
SFO - LAX,57632964540,S-PHL-SEA-6 B,A319-100,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/57632964540,https://www.airlines-manager.com/aircraft/show/97900730,2:00,5:29,198,"133,747$","101,733$",$513.80,"$29,205.65"
SFO - LAX,57637373098,S-PHL-SEA-1,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/57637373098,https://www.airlines-manager.com/aircraft/show/92390872,4:30,7:59,320,"176,398$","129,187$",$403.71,"$37,087.18"
SFO - LAX,57644525151,S-PHL-SEA-5,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/57644525151,https://www.airlines-manager.com/aircraft/show/92390869,7:30,10:59,320,"176,398$","129,187$",$403.71,"$37,087.18"
SFO - LAX,57644525152,S-PHL-SEA-4,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/57644525152,https://www.airlines-manager.com/aircraft/show/92390870,8:15,11:44,320,"176,398$","129,187$",$403.71,"$37,087.18"
SFO - LAX,57651685745,S-PHL-SEA-3,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/57651685745,https://www.airlines-manager.com/aircraft/show/92390873,12:00,15:29,320,"176,398$","129,187$",$403.71,"$37,087.18"
SFO - LAX,57662009389,S-PHL-SEA-2,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/57662009389,https://www.airlines-manager.com/aircraft/show/92390871,16:45,20:14,320,"176,398$","129,187$",$403.71,"$37,087.18"
SFO - LEX,57632964537,S-BTV-LEX-1,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/57632964537,https://www.airlines-manager.com/aircraft/show/112650095,2:00,11:59,310,"625,642$","578,194$","$1,865.14","$57,915.93"
SFO - LEX,57640828102,S-BTV-LEX-2,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/57640828102,https://www.airlines-manager.com/aircraft/show/112650094,6:00,15:59,310,"625,642$","578,194$","$1,865.14","$57,915.93"
SFO - LEX,57644525202,S-BTV-LEX-3,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/57644525202,https://www.airlines-manager.com/aircraft/show/112650093,8:00,17:59,310,"625,642$","578,194$","$1,865.14","$57,915.93"
SFO - LEX,57658665100,S-BTV-LEX-4,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/57658665100,https://www.airlines-manager.com/aircraft/show/112650092,14:00,23:59,310,"625,642$","578,194$","$1,865.14","$57,915.93"
SFO - LEX,57668758409,S-BTV-LEX-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/57668758409,https://www.airlines-manager.com/aircraft/show/112650089,20:00,5:59,198,"470,560$","432,514$","$2,184.41","$43,323.61"
SFO - LGB,57632964662,S-FAR-BIL-2,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/57632964662,https://www.airlines-manager.com/aircraft/show/117782585,3:15,6:44,310,"181,588$","157,489$",$508.03,"$45,212.15"
SFO - LGB,57651685683,S-FAR-BIL-1,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/57651685683,https://www.airlines-manager.com/aircraft/show/117782584,11:00,14:29,310,"181,588$","157,489$",$508.03,"$45,212.15"
SFO - LGB,57658665231,S-FAR-BIL-4,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/57658665231,https://www.airlines-manager.com/aircraft/show/117782587,15:00,18:29,310,"181,588$","157,489$",$508.03,"$45,212.15"
SFO - LGB,57671659310,S-FAR-BIL-3,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/57671659310,https://www.airlines-manager.com/aircraft/show/117782586,21:30,0:59,310,"181,588$","157,489$",$508.03,"$45,212.15"
SFO - LHR,57632964618,S-168C-4 B2,747-400,https://www.airlines-manager.com/network/showline/50769240,https://www.airlines-manager.com/network/showflight/57632964618,https://www.airlines-manager.com/aircraft/show/120752304,2:45,23:59,968,"4,060,744$","3,726,461$","$3,849.65","$175,500.52"
SFO - LHR,57674153300,S-168D-3 B2,747-400,https://www.airlines-manager.com/network/showline/50769240,https://www.airlines-manager.com/network/showflight/57674153300,https://www.airlines-manager.com/aircraft/show/120752296,23:00,20:14,968,"4,060,744$","3,726,461$","$3,849.65","$175,500.52"
SFO - LIT,57632964556,S-SDF-LIT-3,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/57632964556,https://www.airlines-manager.com/aircraft/show/94886627,2:15,10:59,310,"542,816$","499,788$","$1,612.22","$57,227.63"
SFO - LIT,57632964557,S-SDF-LIT-5,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/57632964557,https://www.airlines-manager.com/aircraft/show/106453498,3:15,11:59,310,"542,816$","499,788$","$1,612.22","$57,227.63"
SFO - LIT,57658665081,S-SDF-LIT-2,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/57658665081,https://www.airlines-manager.com/aircraft/show/94886628,14:00,22:44,310,"542,816$","499,788$","$1,612.22","$57,227.63"
SFO - LIT,57658665082,S-SDF-LIT-4,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/57658665082,https://www.airlines-manager.com/aircraft/show/106453500,15:00,23:44,310,"542,816$","499,788$","$1,612.22","$57,227.63"
SFO - LIT,57675937104,S-SDF-LIT-1,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/57675937104,https://www.airlines-manager.com/aircraft/show/106453499,23:45,8:29,310,"542,816$","499,788$","$1,612.22","$57,227.63"
SFO - MAF,57632964647,S-MAF-FCA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/57632964647,https://www.airlines-manager.com/aircraft/show/120056760,3:15,9:59,272,"388,045$","360,385$","$1,324.94","$53,522.52"
SFO - MAF,57644525210,S-MAF-FCA-5,ERJ-175,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/57644525210,https://www.airlines-manager.com/aircraft/show/119652600,8:00,14:44,112,"201,536$","177,709$","$1,586.69","$26,392.43"
SFO - MAF,57655460039,S-MAF-FCA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/57655460039,https://www.airlines-manager.com/aircraft/show/120056761,13:00,19:44,272,"388,045$","360,385$","$1,324.94","$53,522.52"
SFO - MAF,57662009402,S-MAF-FCA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/57662009402,https://www.airlines-manager.com/aircraft/show/120056758,17:00,23:44,272,"388,045$","360,385$","$1,324.94","$53,522.52"
SFO - MAF,57674153150,S-MAF-FCA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/57674153150,https://www.airlines-manager.com/aircraft/show/120056759,22:00,4:44,272,"388,045$","360,385$","$1,324.94","$53,522.52"
SFO - MCI,57640828161,S-MCI-OMA-2,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/57640828161,https://www.airlines-manager.com/aircraft/show/88239554,7:00,14:59,320,"507,197$","458,271$","$1,432.10","$57,403.47"
SFO - MCI,57662009416,S-MCI-OMA-1,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/57662009416,https://www.airlines-manager.com/aircraft/show/88239553,17:00,0:59,320,"507,197$","458,271$","$1,432.10","$57,403.47"
SFO - MCI,57662009417,S-MCI-OMA-5 B,A319-100,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/57662009417,https://www.airlines-manager.com/aircraft/show/105223003,17:00,0:59,198,"382,381$","347,373$","$1,754.41","$43,512.28"
SFO - MCI,57665599692,S-MCI-OMA-4,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/57665599692,https://www.airlines-manager.com/aircraft/show/88239557,18:45,2:44,320,"507,197$","458,271$","$1,432.10","$57,403.47"
SFO - MCI,57674153316,S-MCI-OMA-3,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/57674153316,https://www.airlines-manager.com/aircraft/show/88239555,23:15,7:14,320,"507,197$","458,271$","$1,432.10","$57,403.47"
SFO - MCO,57632963888,S-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/57632963888,https://www.airlines-manager.com/aircraft/show/120141531,0:00,11:29,0,"207,765$","117,928$",#DIV/0!,"$10,269.49"
SFO - MCO,57632963889,S-MCO-MSP-2,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/57632963889,https://www.airlines-manager.com/aircraft/show/105367367,3:30,14:59,338,"795,031$","730,062$","$2,159.95","$63,575.79"
SFO - MCO,57637373089,S-MCO-MSP-5,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/57637373089,https://www.airlines-manager.com/aircraft/show/105367364,4:30,15:59,338,"795,031$","730,062$","$2,159.95","$63,575.79"
SFO - MCO,57658665180,S-MCO-MSP-1,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/57658665180,https://www.airlines-manager.com/aircraft/show/105367368,15:00,2:29,338,"795,031$","730,062$","$2,159.95","$63,575.79"
SFO - MCO,57662009403,S-MCO-MSP-4,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/57662009403,https://www.airlines-manager.com/aircraft/show/105367365,17:00,4:29,338,"795,031$","730,062$","$2,159.95","$63,575.79"
SFO - MCO,57668758285,S-MCO-MSP-3,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/57668758285,https://www.airlines-manager.com/aircraft/show/105367366,19:15,6:44,338,"795,031$","730,062$","$2,159.95","$63,575.79"
SFO - MEM,57632964609,S-MEM-PIT-4,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/57632964609,https://www.airlines-manager.com/aircraft/show/98788934,2:45,11:59,310,"576,829$","528,105$","$1,703.56","$57,195.49"
SFO - MEM,57637373217,S-MEM-PIT-6,ERJ-175,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/57637373217,https://www.airlines-manager.com/aircraft/show/98675305,5:45,14:59,112,"270,633$","238,251$","$2,127.24","$25,803.36"
SFO - MEM,57655460138,S-MEM-PIT-1,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/57655460138,https://www.airlines-manager.com/aircraft/show/98788937,13:00,22:14,310,"576,829$","528,105$","$1,703.56","$57,195.49"
SFO - MEM,57662009327,S-MEM-PIT-3,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/57662009327,https://www.airlines-manager.com/aircraft/show/98788935,16:00,1:14,310,"576,829$","528,105$","$1,703.56","$57,195.49"
SFO - MEM,57668758272,S-MEM-PIT-5,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/57668758272,https://www.airlines-manager.com/aircraft/show/98788933,19:00,4:14,310,"576,829$","528,105$","$1,703.56","$57,195.49"
SFO - MEM,57675937101,S-MEM-PIT-2,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/57675937101,https://www.airlines-manager.com/aircraft/show/98788936,23:45,8:59,310,"576,829$","528,105$","$1,703.56","$57,195.49"
SFO - MEX,57632964688,S-IAH-MEX-3,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/57632964688,https://www.airlines-manager.com/aircraft/show/101045337,3:45,12:59,400,"773,222$","702,355$","$1,755.89","$76,067.33"
SFO - MEX,57655460066,S-IAH-MEX-2,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/57655460066,https://www.airlines-manager.com/aircraft/show/101045338,13:00,22:14,400,"773,222$","702,355$","$1,755.89","$76,067.33"
SFO - MEX,57658665190,S-IAH-MEX-5,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/57658665190,https://www.airlines-manager.com/aircraft/show/101045335,15:00,0:14,400,"773,222$","702,355$","$1,755.89","$76,067.33"
SFO - MEX,57671659270,S-IAH-MEX-1,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/57671659270,https://www.airlines-manager.com/aircraft/show/101045339,21:15,6:29,400,"773,222$","702,355$","$1,755.89","$76,067.33"
SFO - MEX,57674153315,S-IAH-MEX-4,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/57674153315,https://www.airlines-manager.com/aircraft/show/101045336,23:15,8:29,373,"729,385$","660,166$","$1,769.88","$71,498.12"
SFO - MFR,57632964259,S-TYS-MSN-2,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/57632964259,https://www.airlines-manager.com/aircraft/show/117782564,1:00,4:29,320,"173,273$","146,641$",$458.25,"$42,097.89"
SFO - MFR,57632964261,S-TYS-MSN-1,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/57632964261,https://www.airlines-manager.com/aircraft/show/117782565,4:00,7:29,320,"173,273$","146,641$",$458.25,"$42,097.89"
SFO - MFR,57662009301,S-TYS-MSN-3,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/57662009301,https://www.airlines-manager.com/aircraft/show/117782563,16:00,19:29,320,"173,273$","146,641$",$458.25,"$42,097.89"
SFO - MFR,57665599515,S-TYS-MSN-4,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/57665599515,https://www.airlines-manager.com/aircraft/show/117782562,17:15,20:44,295,"165,089$","138,679$",$470.10,"$39,812.15"
SFO - MHT,57632964002,S-MHT-CHS-3,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/57632964002,https://www.airlines-manager.com/aircraft/show/114917463,0:15,12:44,320,"762,087$","698,102$","$2,181.57","$55,922.72"
SFO - MHT,57637373068,S-MHT-CHS-4,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/57637373068,https://www.airlines-manager.com/aircraft/show/114266973,4:15,16:44,320,"762,087$","698,102$","$2,181.57","$55,922.72"
SFO - MHT,57655460099,S-MHT-CHS-1,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/57655460099,https://www.airlines-manager.com/aircraft/show/114917465,13:00,1:29,320,"762,087$","698,102$","$2,181.57","$55,922.72"
SFO - MHT,57662009425,S-MHT-CHS-2,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/57662009425,https://www.airlines-manager.com/aircraft/show/114917464,17:00,5:29,320,"762,087$","698,102$","$2,181.57","$55,922.72"
SFO - MHT,57668758410,S-MHT-CHS-5 B,A319-100,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/57668758410,https://www.airlines-manager.com/aircraft/show/114912262,20:00,8:29,198,"571,071$","524,144$","$2,647.19","$41,987.50"
SFO - MIA,57632964226,S-MIA-JFK-1,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/57632964226,https://www.airlines-manager.com/aircraft/show/89233032,1:00,12:59,400,"958,829$","868,986$","$2,172.47","$72,516.22"
SFO - MIA,57632964228,S-MIA-JFK-2,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/57632964228,https://www.airlines-manager.com/aircraft/show/84622093,4:00,15:59,400,"958,829$","868,986$","$2,172.47","$72,516.22"
SFO - MIA,57640828158,S-MIA-JFK-3,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/57640828158,https://www.airlines-manager.com/aircraft/show/89233031,7:00,18:59,400,"958,829$","868,986$","$2,172.47","$72,516.22"
SFO - MIA,57655460059,S-MIA-JFK-4,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/57655460059,https://www.airlines-manager.com/aircraft/show/89233034,13:00,0:59,400,"958,829$","868,986$","$2,172.47","$72,516.22"
SFO - MIA,57668758236,S-MIA-JFK-5,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/57668758236,https://www.airlines-manager.com/aircraft/show/89233035,19:00,6:59,400,"958,829$","868,986$","$2,172.47","$72,516.22"
SFO - MKE,57632964036,S-CLE-MKE-1,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/57632964036,https://www.airlines-manager.com/aircraft/show/92519368,0:30,9:44,320,"586,128$","533,360$","$1,666.75","$57,764.62"
SFO - MKE,57637373182,S-CLE-MKE-4,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/57637373182,https://www.airlines-manager.com/aircraft/show/92519371,5:30,14:44,320,"586,128$","533,360$","$1,666.75","$57,764.62"
SFO - MKE,57640828139,S-CLE-MKE-3,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/57640828139,https://www.airlines-manager.com/aircraft/show/92519367,6:45,15:59,320,"586,128$","533,360$","$1,666.75","$57,764.62"
SFO - MKE,57662009285,S-CLE-MKE-2,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/57662009285,https://www.airlines-manager.com/aircraft/show/92519369,16:00,1:14,320,"586,128$","533,360$","$1,666.75","$57,764.62"
SFO - MKE,57665599599,S-CLE-MKE-5,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/57665599599,https://www.airlines-manager.com/aircraft/show/92519370,18:00,3:14,320,"586,128$","533,360$","$1,666.75","$57,764.62"
SFO - MSN,57632964567,S-TYS-MSN-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/57632964567,https://www.airlines-manager.com/aircraft/show/117782582,2:15,11:14,198,"424,215$","388,553$","$1,962.39","$43,252.65"
SFO - MSN,57640828165,S-TYS-MSN-4,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/57640828165,https://www.airlines-manager.com/aircraft/show/117782562,7:00,15:59,320,"562,482$","513,233$","$1,603.85","$57,131.69"
SFO - MSN,57640828166,S-TYS-MSN-3,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/57640828166,https://www.airlines-manager.com/aircraft/show/117782563,7:00,15:59,320,"562,482$","513,233$","$1,603.85","$57,131.69"
SFO - MSN,57662009302,S-TYS-MSN-2,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/57662009302,https://www.airlines-manager.com/aircraft/show/117782564,16:00,0:59,320,"562,482$","513,233$","$1,603.85","$57,131.69"
SFO - MSN,57668758260,S-TYS-MSN-1,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/57668758260,https://www.airlines-manager.com/aircraft/show/117782565,19:00,3:59,320,"562,482$","513,233$","$1,603.85","$57,131.69"
SFO - MSO,57640828143,S-TUL-DSM-1,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/57640828143,https://www.airlines-manager.com/aircraft/show/108410856,6:45,11:44,320,"322,461$","288,750$",$902.34,"$57,943.14"
SFO - MSO,57644525154,S-TUL-DSM-4,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/57644525154,https://www.airlines-manager.com/aircraft/show/108410859,7:30,12:29,320,"322,461$","288,750$",$902.34,"$57,943.14"
SFO - MSO,57655460092,S-TUL-DSM-3,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/57655460092,https://www.airlines-manager.com/aircraft/show/108410858,13:00,17:59,320,"322,461$","288,750$",$902.34,"$57,943.14"
SFO - MSO,57671659247,S-TUL-DSM-2,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/57671659247,https://www.airlines-manager.com/aircraft/show/108410857,21:00,1:59,271,"292,558$","259,861$",$958.90,"$52,146.02"
SFO - MSP,57632964571,S-MCO-MSP-1,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/57632964571,https://www.airlines-manager.com/aircraft/show/105367368,2:30,10:44,338,"572,597$","523,159$","$1,547.81","$63,541.58"
SFO - MSP,57637373090,S-MCO-MSP-4,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/57637373090,https://www.airlines-manager.com/aircraft/show/105367365,4:30,12:44,338,"572,597$","523,159$","$1,547.81","$63,541.58"
SFO - MSP,57640828134,S-MCO-MSP-3,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/57640828134,https://www.airlines-manager.com/aircraft/show/105367366,6:45,14:59,338,"572,597$","523,159$","$1,547.81","$63,541.58"
SFO - MSP,57658665179,S-MCO-MSP-2,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/57658665179,https://www.airlines-manager.com/aircraft/show/105367367,15:00,23:14,338,"572,597$","523,159$","$1,547.81","$63,541.58"
SFO - MSP,57662009267,S-MCO-MSP-5,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/57662009267,https://www.airlines-manager.com/aircraft/show/105367364,16:00,0:14,338,"572,597$","523,159$","$1,547.81","$63,541.58"
SFO - MSY,57632964645,S-MSY-STL-6,ERJ-175,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/57632964645,https://www.airlines-manager.com/aircraft/show/103534666,3:00,12:29,112,"279,484$","246,810$","$2,203.66","$26,025.66"
SFO - MSY,57640828093,S-MSY-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/57640828093,https://www.airlines-manager.com/aircraft/show/98075266,6:00,15:29,320,"593,870$","539,636$","$1,686.36","$56,903.62"
SFO - MSY,57644525189,S-MSY-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/57644525189,https://www.airlines-manager.com/aircraft/show/98075264,8:00,17:29,320,"593,870$","539,636$","$1,686.36","$56,903.62"
SFO - MSY,57655460080,S-MSY-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/57655460080,https://www.airlines-manager.com/aircraft/show/98075267,13:00,22:29,320,"593,870$","539,636$","$1,686.36","$56,903.62"
SFO - MSY,57671659272,S-MSY-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/57671659272,https://www.airlines-manager.com/aircraft/show/98075265,21:15,6:44,320,"593,870$","539,636$","$1,686.36","$56,903.62"
SFO - MSY,57674153318,S-MSY-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/57674153318,https://www.airlines-manager.com/aircraft/show/98075263,23:15,8:44,320,"593,870$","539,636$","$1,686.36","$56,903.62"
SFO - NGO,57632963874,S-168C-5 B2,747-400,https://www.airlines-manager.com/network/showline/50769298,https://www.airlines-manager.com/network/showflight/57632963874,https://www.airlines-manager.com/aircraft/show/120752305,0:00,20:59,968,"3,903,860$","3,617,048$","$3,736.62","$172,377.19"
SFO - NGO,57668758436,S-168D-4 B2,747-400,https://www.airlines-manager.com/network/showline/50769298,https://www.airlines-manager.com/network/showflight/57668758436,https://www.airlines-manager.com/aircraft/show/120752297,20:15,17:14,968,"3,903,860$","3,617,048$","$3,736.62","$172,377.19"
SFO - NRT,57632963875,S-168C-6-B2,747-400,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/57632963875,https://www.airlines-manager.com/aircraft/show/120752306,0:00,20:14,968,"3,876,882$","3,579,468$","$3,697.80","$176,909.46"
SFO - NRT,57665599529,S-168D-5 B2,747-400,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/57665599529,https://www.airlines-manager.com/aircraft/show/120752298,17:15,13:29,968,"3,876,882$","3,579,468$","$3,697.80","$176,909.46"
SFO - OGG,57632964585,S-OGG-AUS-5,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/57632964585,https://www.airlines-manager.com/aircraft/show/92773477,2:30,13:44,310,"697,883$","645,321$","$2,081.68","$57,446.97"
SFO - OGG,57655460198,S-OGG-AUS-1,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/57655460198,https://www.airlines-manager.com/aircraft/show/92773481,13:30,0:44,310,"697,883$","645,321$","$2,081.68","$57,446.97"
SFO - OGG,57662009236,S-OGG-AUS-2,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/57662009236,https://www.airlines-manager.com/aircraft/show/92773480,15:30,2:44,310,"697,883$","645,321$","$2,081.68","$57,446.97"
SFO - OGG,57671659304,S-OGG-AUS-3,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/57671659304,https://www.airlines-manager.com/aircraft/show/92773479,21:30,8:44,310,"697,883$","645,321$","$2,081.68","$57,446.97"
SFO - OGG,57675937074,S-OGG-AUS-4,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/57675937074,https://www.airlines-manager.com/aircraft/show/92773478,23:30,10:44,310,"697,883$","645,321$","$2,081.68","$57,446.97"
SFO - OKC,57632964059,S-OKC-FSD-3,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/57632964059,https://www.airlines-manager.com/aircraft/show/107160380,0:30,7:59,320,"476,319$","432,077$","$1,350.24","$57,738.57"
SFO - OKC,57644525193,S-OKC-FSD-2,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/57644525193,https://www.airlines-manager.com/aircraft/show/107160379,8:00,15:29,320,"476,319$","432,077$","$1,350.24","$57,738.57"
SFO - OKC,57662009423,S-OKC-FSD-1,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/57662009423,https://www.airlines-manager.com/aircraft/show/107160378,17:00,0:29,320,"476,319$","432,077$","$1,350.24","$57,738.57"
SFO - OKC,57665599685,S-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/57665599685,https://www.airlines-manager.com/aircraft/show/107132310,18:30,1:59,112,"224,788$","198,645$","$1,773.62","$26,544.99"
SFO - OKC,57668758322,S-OKC-FSD-4,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/57668758322,https://www.airlines-manager.com/aircraft/show/107160381,19:30,2:59,320,"476,319$","432,077$","$1,350.24","$57,738.57"
SFO - OMA,57632964240,S-MCI-OMA-1,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/57632964240,https://www.airlines-manager.com/aircraft/show/88239553,1:00,8:44,320,"484,959$","439,887$","$1,374.65","$56,881.94"
SFO - OMA,57632964241,S-MCI-OMA-5 B,A319-100,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/57632964241,https://www.airlines-manager.com/aircraft/show/105223003,1:00,8:44,198,"366,607$","334,272$","$1,688.24","$43,224.83"
SFO - OMA,57632964243,S-MCI-OMA-4,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/57632964243,https://www.airlines-manager.com/aircraft/show/88239557,2:45,10:29,320,"484,959$","439,887$","$1,374.65","$56,881.94"
SFO - OMA,57640828176,S-MCI-OMA-3,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/57640828176,https://www.airlines-manager.com/aircraft/show/88239555,7:15,14:59,320,"484,959$","439,887$","$1,374.65","$56,881.94"
SFO - OMA,57658665196,S-MCI-OMA-2,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/57658665196,https://www.airlines-manager.com/aircraft/show/88239554,15:00,22:44,320,"484,959$","439,887$","$1,374.65","$56,881.94"
SFO - ONT,57637373101,S-OKC-FSD-2,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/57637373101,https://www.airlines-manager.com/aircraft/show/107160379,4:30,7:59,320,"180,494$","150,361$",$469.88,"$43,165.84"
SFO - ONT,57655460090,S-OKC-FSD-1,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/57655460090,https://www.airlines-manager.com/aircraft/show/107160378,13:00,16:29,320,"180,494$","150,361$",$469.88,"$43,165.84"
SFO - ONT,57658665245,S-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/57658665245,https://www.airlines-manager.com/aircraft/show/107132310,15:00,18:29,112,"83,245$","67,122$",$599.30,"$19,269.47"
SFO - ONT,57662009294,S-OKC-FSD-4,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/57662009294,https://www.airlines-manager.com/aircraft/show/107160381,16:00,19:29,320,"180,494$","150,361$",$469.88,"$43,165.84"
SFO - ONT,57671659246,S-OKC-FSD-3,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/57671659246,https://www.airlines-manager.com/aircraft/show/107160380,21:00,0:29,320,"180,494$","150,361$",$469.88,"$43,165.84"
SFO - ORD,57640828090,S-ORD-DTW-2,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/57640828090,https://www.airlines-manager.com/aircraft/show/101045333,6:00,14:59,400,"760,394$","672,993$","$1,682.48","$74,915.73"
SFO - ORD,57644525149,S-ORD-DTW-5,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/57644525149,https://www.airlines-manager.com/aircraft/show/101045330,7:30,16:29,400,"760,394$","672,993$","$1,682.48","$74,915.73"
SFO - ORD,57655460064,S-ORD-DTW-1,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/57655460064,https://www.airlines-manager.com/aircraft/show/101045334,13:00,21:59,400,"760,394$","672,993$","$1,682.48","$74,915.73"
SFO - ORD,57658665187,S-ORD-DTW-4,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/57658665187,https://www.airlines-manager.com/aircraft/show/101045331,15:00,23:59,400,"760,394$","672,993$","$1,682.48","$74,915.73"
SFO - ORD,57668758383,S-ORD-DTW-3,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/57668758383,https://www.airlines-manager.com/aircraft/show/101045332,20:00,4:59,400,"760,394$","672,993$","$1,682.48","$74,915.73"
SFO - ORF,57637373192,S-ORF-RIC-3,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/57637373192,https://www.airlines-manager.com/aircraft/show/108328836,5:30,17:29,310,"732,603$","676,491$","$2,182.23","$56,452.66"
SFO - ORF,57644525161,S-ORF-RIC-4,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/57644525161,https://www.airlines-manager.com/aircraft/show/108328837,7:30,19:29,310,"732,603$","676,491$","$2,182.23","$56,452.66"
SFO - ORF,57665599614,S-ORF-RIC-1,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/57665599614,https://www.airlines-manager.com/aircraft/show/108328834,18:00,5:59,310,"732,603$","676,491$","$2,182.23","$56,452.66"
SFO - ORF,57668758394,S-ORF-RIC-2,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/57668758394,https://www.airlines-manager.com/aircraft/show/108328835,20:00,7:59,310,"732,603$","676,491$","$2,182.23","$56,452.66"
SFO - ORF,57674153178,S-ORF-RIC-5 B,A319-100,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/57674153178,https://www.airlines-manager.com/aircraft/show/108328833,22:00,9:59,198,"547,743$","502,744$","$2,539.11","$41,953.60"
SFO - PBI,57637373063,S-PBI-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/57637373063,https://www.airlines-manager.com/aircraft/show/100301186,4:15,16:14,320,"734,200$","669,869$","$2,093.34","$55,900.06"
SFO - PBI,57640828115,S-PBI-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/57640828115,https://www.airlines-manager.com/aircraft/show/100301185,6:15,18:14,320,"734,200$","669,869$","$2,093.34","$55,900.06"
SFO - PBI,57662009422,S-PBI-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/57662009422,https://www.airlines-manager.com/aircraft/show/100301188,17:00,4:59,320,"734,200$","669,869$","$2,093.34","$55,900.06"
SFO - PBI,57668758244,S-PBI-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/57668758244,https://www.airlines-manager.com/aircraft/show/100301187,19:00,6:59,320,"734,200$","669,869$","$2,093.34","$55,900.06"
SFO - PBI,57671659244,S-PBI-RDU-5,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/57671659244,https://www.airlines-manager.com/aircraft/show/100301184,21:00,8:59,320,"734,200$","669,869$","$2,093.34","$55,900.06"
SFO - PDX,57632963978,S-MCO-MSP-5,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/57632963978,https://www.airlines-manager.com/aircraft/show/105367364,0:15,4:29,338,"272,269$","242,872$",$718.56,"$57,371.34"
SFO - PDX,57651685542,S-MCO-MSP-1,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/57651685542,https://www.airlines-manager.com/aircraft/show/105367368,10:45,14:59,338,"272,269$","242,872$",$718.56,"$57,371.34"
SFO - PDX,57655460021,S-MCO-MSP-4,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/57655460021,https://www.airlines-manager.com/aircraft/show/105367365,12:45,16:59,338,"272,269$","242,872$",$718.56,"$57,371.34"
SFO - PDX,57658665178,S-MCO-MSP-3,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/57658665178,https://www.airlines-manager.com/aircraft/show/105367366,15:00,19:14,338,"272,269$","242,872$",$718.56,"$57,371.34"
SFO - PDX,57674153313,S-MCO-MSP-2,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/57674153313,https://www.airlines-manager.com/aircraft/show/105367367,23:15,3:29,277,"243,207$","214,576$",$774.64,"$50,687.24"
SFO - PEK,57632963876,S-168C-7 B2,747-400,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/57632963876,https://www.airlines-manager.com/aircraft/show/120752307,0:00,23:14,968,"4,491,411$","4,124,325$","$4,260.67","$177,517.58"
SFO - PEK,57640828104,S-168D-7 B2,747-400,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/57640828104,https://www.airlines-manager.com/aircraft/show/120752300,6:00,5:14,968,"4,491,411$","4,124,325$","$4,260.67","$177,517.58"
SFO - PHL,57632963843,S-PHL-SEA-2,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/57632963843,https://www.airlines-manager.com/aircraft/show/92390871,0:00,11:44,320,"730,738$","658,186$","$2,056.83","$56,095.40"
SFO - PHL,57651685744,S-PHL-SEA-1,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/57651685744,https://www.airlines-manager.com/aircraft/show/92390872,12:00,23:44,320,"730,738$","658,186$","$2,056.83","$56,095.40"
SFO - PHL,57658665116,S-PHL-SEA-6 B,A319-100,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/57658665116,https://www.airlines-manager.com/aircraft/show/97900730,14:00,1:59,198,"548,740$","496,348$","$2,506.81","$41,419.86"
SFO - PHL,57658665117,S-PHL-SEA-5,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/57658665117,https://www.airlines-manager.com/aircraft/show/92390869,15:00,2:44,320,"730,738$","658,186$","$2,056.83","$56,095.40"
SFO - PHL,57662009246,S-PHL-SEA-4,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/57662009246,https://www.airlines-manager.com/aircraft/show/92390870,15:45,3:29,320,"730,738$","658,186$","$2,056.83","$56,095.40"
SFO - PHL,57668758291,S-PHL-SEA-3,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/57668758291,https://www.airlines-manager.com/aircraft/show/92390873,19:15,6:59,320,"730,738$","658,186$","$2,056.83","$56,095.40"
SFO - PHX,57632964351,S-BOS-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/57632964351,https://www.airlines-manager.com/aircraft/show/104901564,1:30,5:59,338,"323,043$","284,985$",$843.15,"$63,565.43"
SFO - PHX,57632964352,S-BOS-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/57632964352,https://www.airlines-manager.com/aircraft/show/104870960,2:30,6:59,338,"323,043$","284,985$",$843.15,"$63,565.43"
SFO - PHX,57637373050,S-BOS-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/57637373050,https://www.airlines-manager.com/aircraft/show/104874465,4:15,8:44,338,"323,043$","284,985$",$843.15,"$63,565.43"
SFO - PHX,57651685735,S-BOS-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/57651685735,https://www.airlines-manager.com/aircraft/show/104901544,12:00,16:29,338,"323,043$","284,985$",$843.15,"$63,565.43"
SFO - PHX,57662009266,S-BOS-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/57662009266,https://www.airlines-manager.com/aircraft/show/104864961,16:00,20:29,338,"323,043$","284,985$",$843.15,"$63,565.43"
SFO - PIT,57632964334,S-MEM-PIT-3,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/57632964334,https://www.airlines-manager.com/aircraft/show/98788935,1:15,11:59,310,"676,648$","621,492$","$2,004.81","$57,902.98"
SFO - PIT,57637373073,S-MEM-PIT-5,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/57637373073,https://www.airlines-manager.com/aircraft/show/98788933,4:15,14:59,310,"676,648$","621,492$","$2,004.81","$57,902.98"
SFO - PIT,57655460137,S-MEM-PIT-2,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/57655460137,https://www.airlines-manager.com/aircraft/show/98788936,13:00,23:44,310,"676,648$","621,492$","$2,004.81","$57,902.98"
SFO - PIT,57662009326,S-MEM-PIT-4,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/57662009326,https://www.airlines-manager.com/aircraft/show/98788934,16:00,2:44,310,"676,648$","621,492$","$2,004.81","$57,902.98"
SFO - PIT,57668758282,S-MEM-PIT-6,ERJ-175,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/57668758282,https://www.airlines-manager.com/aircraft/show/98675305,19:00,5:44,112,"317,025$","280,006$","$2,500.05","$26,087.52"
SFO - PIT,57674153203,S-MEM-PIT-1,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/57674153203,https://www.airlines-manager.com/aircraft/show/98788937,22:15,8:59,310,"676,648$","621,492$","$2,004.81","$57,902.98"
SFO - PSP,57637373079,S-ICT-BFF-2,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/57637373079,https://www.airlines-manager.com/aircraft/show/114912264,4:15,7:59,310,"200,274$","175,476$",$566.05,"$47,002.50"
SFO - PSP,57651685733,S-ICT-BFF-1,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/57651685733,https://www.airlines-manager.com/aircraft/show/114912267,11:45,15:29,310,"200,274$","175,476$",$566.05,"$47,002.50"
SFO - PSP,57655460191,S-ICT-BFF-5,ERJ-175,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/57655460191,https://www.airlines-manager.com/aircraft/show/114912306,13:15,16:59,112,"92,401$","76,790$",$685.63,"$20,568.75"
SFO - PSP,57658665225,S-ICT-BFF-4,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/57658665225,https://www.airlines-manager.com/aircraft/show/114912268,15:00,18:44,310,"200,274$","175,476$",$566.05,"$47,002.50"
SFO - PSP,57671659256,S-ICT-BFF-3,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/57671659256,https://www.airlines-manager.com/aircraft/show/114912263,21:00,0:44,283,"189,985$","165,498$",$584.80,"$44,329.82"
SFO - PVD,57632963867,S-PVD-BUF-4,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/57632963867,https://www.airlines-manager.com/aircraft/show/112650105,0:00,12:29,310,"763,375$","705,708$","$2,276.48","$56,532.02"
SFO - PVD,57637373161,S-PVD-BUF-5,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/57637373161,https://www.airlines-manager.com/aircraft/show/112650104,5:00,17:29,310,"763,375$","705,708$","$2,276.48","$56,532.02"
SFO - PVD,57655460154,S-PVD-BUF-1,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/57655460154,https://www.airlines-manager.com/aircraft/show/112650108,13:00,1:29,310,"763,375$","705,708$","$2,276.48","$56,532.02"
SFO - PVD,57662009437,S-PVD-BUF-2,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/57662009437,https://www.airlines-manager.com/aircraft/show/112650107,17:00,5:29,310,"763,375$","705,708$","$2,276.48","$56,532.02"
SFO - PVD,57668758275,S-PVD-BUF-3,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/57668758275,https://www.airlines-manager.com/aircraft/show/112650106,19:00,7:29,310,"763,375$","705,708$","$2,276.48","$56,532.02"
SFO - PWM,57632964022,S-KOA-PWM-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/57632964022,https://www.airlines-manager.com/aircraft/show/112650091,0:15,12:59,198,"576,974$","530,777$","$2,680.69","$41,684.06"
SFO - PWM,57637373078,S-KOA-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/57637373078,https://www.airlines-manager.com/aircraft/show/112650103,4:15,16:59,310,"771,182$","713,582$","$2,301.88","$56,040.47"
SFO - PWM,57640828183,S-KOA-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/57640828183,https://www.airlines-manager.com/aircraft/show/112650102,7:15,19:59,310,"771,182$","713,582$","$2,301.88","$56,040.47"
SFO - PWM,57658665104,S-KOA-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/57658665104,https://www.airlines-manager.com/aircraft/show/112650101,14:00,2:44,310,"771,182$","713,582$","$2,301.88","$56,040.47"
SFO - PWM,57662009329,S-KOA-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/57662009329,https://www.airlines-manager.com/aircraft/show/112650100,16:00,4:44,310,"771,182$","713,582$","$2,301.88","$56,040.47"
SFO - RAP,57637373109,S-FAR-BIL-1,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/57637373109,https://www.airlines-manager.com/aircraft/show/117782584,4:30,10:59,310,"399,527$","365,234$","$1,178.17","$56,334.29"
SFO - RAP,57644525257,S-FAR-BIL-4,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/57644525257,https://www.airlines-manager.com/aircraft/show/117782587,8:30,14:59,310,"399,527$","365,234$","$1,178.17","$56,334.29"
SFO - RAP,57658665230,S-FAR-BIL-3,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/57658665230,https://www.airlines-manager.com/aircraft/show/117782586,15:00,21:29,310,"399,527$","365,234$","$1,178.17","$56,334.29"
SFO - RAP,57671659227,S-FAR-BIL-2,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/57671659227,https://www.airlines-manager.com/aircraft/show/117782585,20:45,3:14,291,"385,065$","351,344$","$1,207.37","$54,191.88"
SFO - RDM,57632964349,S-MAF-FCA-5,ERJ-175,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/57632964349,https://www.airlines-manager.com/aircraft/show/119652600,1:15,5:14,112,"102,798$","87,608$",$782.21,"$21,993.64"
SFO - RDM,57640828081,S-MAF-FCA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/57640828081,https://www.airlines-manager.com/aircraft/show/120056761,6:00,9:59,272,"199,098$","180,421$",$663.31,"$45,293.97"
SFO - RDM,57655460036,S-MAF-FCA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/57655460036,https://www.airlines-manager.com/aircraft/show/120056758,13:00,16:59,272,"199,098$","180,421$",$663.31,"$45,293.97"
SFO - RDM,57665599588,S-MAF-FCA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/57665599588,https://www.airlines-manager.com/aircraft/show/120056759,18:00,21:59,272,"199,098$","180,421$",$663.31,"$45,293.97"
SFO - RDM,57674153309,S-MAF-FCA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/57674153309,https://www.airlines-manager.com/aircraft/show/120056760,23:15,3:14,272,"199,098$","180,421$",$663.31,"$45,293.97"
SFO - RDU,57637373150,S-PBI-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/57637373150,https://www.airlines-manager.com/aircraft/show/100301188,5:00,16:14,320,"712,851$","650,128$","$2,031.65","$57,874.90"
SFO - RDU,57640828164,S-PBI-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/57640828164,https://www.airlines-manager.com/aircraft/show/100301187,7:00,18:14,320,"712,851$","650,128$","$2,031.65","$57,874.90"
SFO - RDU,57648262977,S-PBI-RDU-5,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/57648262977,https://www.airlines-manager.com/aircraft/show/100301184,9:00,20:14,320,"712,851$","650,128$","$2,031.65","$57,874.90"
SFO - RDU,57662009421,S-PBI-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/57662009421,https://www.airlines-manager.com/aircraft/show/100301186,17:00,4:14,320,"712,851$","650,128$","$2,031.65","$57,874.90"
SFO - RDU,57668758242,S-PBI-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/57668758242,https://www.airlines-manager.com/aircraft/show/100301185,19:00,6:14,320,"712,851$","650,128$","$2,031.65","$57,874.90"
SFO - RIC,57640828101,S-ORF-RIC-1,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/57640828101,https://www.airlines-manager.com/aircraft/show/108328834,6:00,17:29,310,"726,691$","671,657$","$2,166.64","$58,489.72"
SFO - RIC,57644525201,S-ORF-RIC-2,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/57644525201,https://www.airlines-manager.com/aircraft/show/108328835,8:00,19:29,310,"726,691$","671,657$","$2,166.64","$58,489.72"
SFO - RIC,57648263127,S-ORF-RIC-5 B,A319-100,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/57648263127,https://www.airlines-manager.com/aircraft/show/108328833,10:00,21:29,198,"544,866$","500,734$","$2,528.96","$43,605.28"
SFO - RIC,57665599615,S-ORF-RIC-3,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/57665599615,https://www.airlines-manager.com/aircraft/show/108328836,18:00,5:29,310,"726,691$","671,657$","$2,166.64","$58,489.72"
SFO - RIC,57668758395,S-ORF-RIC-4,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/57668758395,https://www.airlines-manager.com/aircraft/show/108328837,20:00,7:29,310,"726,691$","671,657$","$2,166.64","$58,489.72"
SFO - RNO,57637373059,S-MCI-OMA-2,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/57637373059,https://www.airlines-manager.com/aircraft/show/88239554,4:15,6:59,320,"119,453$","93,133$",$291.04,"$34,073.05"
SFO - RNO,57658665135,S-MCI-OMA-1,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/57658665135,https://www.airlines-manager.com/aircraft/show/88239553,14:15,16:59,320,"119,453$","93,133$",$291.04,"$34,073.05"
SFO - RNO,57658665136,S-MCI-OMA-5 B,A319-100,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/57658665136,https://www.airlines-manager.com/aircraft/show/105223003,14:15,16:59,198,"90,385$","72,533$",$366.33,"$26,536.46"
SFO - RNO,57662009283,S-MCI-OMA-4,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/57662009283,https://www.airlines-manager.com/aircraft/show/88239557,16:00,18:44,320,"119,453$","93,133$",$291.04,"$34,073.05"
SFO - RNO,57671659188,S-MCI-OMA-3,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/57671659188,https://www.airlines-manager.com/aircraft/show/88239555,20:30,23:14,320,"119,453$","93,133$",$291.04,"$34,073.05"
SFO - ROC,57632963822,S-ROC-COS-2,A321neo,https://www.airlines-manager.com/network/showline/50555363,https://www.airlines-manager.com/network/showflight/57632963822,https://www.airlines-manager.com/aircraft/show/120112475,0:00,11:14,338,"771,233$","721,249$","$2,133.87","$64,206.14"
SFO - ROC,57640828136,S-ROC-COS-4,A321neo,https://www.airlines-manager.com/network/showline/50555363,https://www.airlines-manager.com/network/showflight/57640828136,https://www.airlines-manager.com/aircraft/show/120051490,6:45,17:59,338,"771,233$","721,249$","$2,133.87","$64,206.14"
SFO - ROC,57658665184,S-ROC-COS-1,A321neo,https://www.airlines-manager.com/network/showline/50555363,https://www.airlines-manager.com/network/showflight/57658665184,https://www.airlines-manager.com/aircraft/show/120112476,15:00,2:14,338,"771,233$","721,249$","$2,133.87","$64,206.14"
SFO - ROC,57668758417,S-ROC-COS-3,A321neo,https://www.airlines-manager.com/network/showline/50555363,https://www.airlines-manager.com/network/showflight/57668758417,https://www.airlines-manager.com/aircraft/show/120112474,20:15,7:29,338,"771,233$","721,249$","$2,133.87","$64,206.14"
SFO - RSW,57637373169,S-RSW-BDL-3,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/57637373169,https://www.airlines-manager.com/aircraft/show/84915100,5:15,16:59,320,"730,424$","665,610$","$2,080.03","$56,728.13"
SFO - RSW,57640828175,S-RSW-BDL-4,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/57640828175,https://www.airlines-manager.com/aircraft/show/84915101,7:15,18:59,320,"730,424$","665,610$","$2,080.03","$56,728.13"
SFO - RSW,57662009414,S-RSW-BDL-1,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/57662009414,https://www.airlines-manager.com/aircraft/show/84915098,17:00,4:44,320,"730,424$","665,610$","$2,080.03","$56,728.13"
SFO - RSW,57668758238,S-RSW-BDL-2,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/57668758238,https://www.airlines-manager.com/aircraft/show/84915099,19:00,6:44,320,"730,424$","665,610$","$2,080.03","$56,728.13"
SFO - RSW,57671659241,S-RSW-BDL-5,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/57671659241,https://www.airlines-manager.com/aircraft/show/84915102,21:00,8:44,320,"730,424$","665,610$","$2,080.03","$56,728.13"
SFO - SAN,57644525187,S-PHL-SEA-1,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/57644525187,https://www.airlines-manager.com/aircraft/show/92390872,8:00,11:44,320,"217,287$","184,448$",$576.40,"$49,405.71"
SFO - SAN,57651685609,S-PHL-SEA-5,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/57651685609,https://www.airlines-manager.com/aircraft/show/92390869,11:00,14:44,320,"217,287$","184,448$",$576.40,"$49,405.71"
SFO - SAN,57651685610,S-PHL-SEA-4,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/57651685610,https://www.airlines-manager.com/aircraft/show/92390870,12:00,15:44,320,"217,287$","184,448$",$576.40,"$49,405.71"
SFO - SAN,57662009232,S-PHL-SEA-3,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/57662009232,https://www.airlines-manager.com/aircraft/show/92390873,15:30,19:14,320,"217,287$","184,448$",$576.40,"$49,405.71"
SFO - SAN,57668758420,S-PHL-SEA-2,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/57668758420,https://www.airlines-manager.com/aircraft/show/92390871,20:15,23:59,320,"217,287$","184,448$",$576.40,"$49,405.71"
SFO - SAT,57632964009,S-JAX-SAT-1,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/57632964009,https://www.airlines-manager.com/aircraft/show/86375568,0:15,8:14,310,"498,478$","457,208$","$1,474.86","$57,270.31"
SFO - SAT,57632964010,S-JAX-SAT-2,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/57632964010,https://www.airlines-manager.com/aircraft/show/86371267,2:15,10:14,310,"498,478$","457,208$","$1,474.86","$57,270.31"
SFO - SAT,57655460122,S-JAX-SAT-3,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/57655460122,https://www.airlines-manager.com/aircraft/show/86385102,13:00,20:59,310,"498,478$","457,208$","$1,474.86","$57,270.31"
SFO - SAT,57658665212,S-JAX-SAT-4,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/57658665212,https://www.airlines-manager.com/aircraft/show/86378760,15:00,22:59,310,"498,478$","457,208$","$1,474.86","$57,270.31"
SFO - SAT,57665599519,S-JAX-SAT-5,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/57665599519,https://www.airlines-manager.com/aircraft/show/86377315,17:15,1:14,310,"498,478$","457,208$","$1,474.86","$57,270.31"
SFO - SAV,57637373214,S-SAV-JAN-1,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/57637373214,https://www.airlines-manager.com/aircraft/show/114912265,5:45,16:59,310,"696,685$","643,380$","$2,075.42","$57,274.18"
SFO - SAV,57644525179,S-SAV-JAN-4,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/57644525179,https://www.airlines-manager.com/aircraft/show/114912270,7:45,18:59,310,"696,685$","643,380$","$2,075.42","$57,274.18"
SFO - SAV,57658665234,S-SAV-JAN-5 B,A319-100,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/57658665234,https://www.airlines-manager.com/aircraft/show/114917486,15:00,2:14,198,"523,286$","480,541$","$2,426.97","$42,778.13"
SFO - SAV,57668758276,S-SAV-JAN-3,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/57668758276,https://www.airlines-manager.com/aircraft/show/114912269,19:00,6:14,310,"696,685$","643,380$","$2,075.42","$57,274.18"
SFO - SAV,57671659194,S-SAV-JAN-2,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/57671659194,https://www.airlines-manager.com/aircraft/show/114912266,20:30,7:44,310,"696,685$","643,380$","$2,075.42","$57,274.18"
SFO - SDF,57632964331,S-SDF-LIT-2,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/57632964331,https://www.airlines-manager.com/aircraft/show/94886628,1:15,10:59,310,"614,512$","564,269$","$1,820.22","$57,972.84"
SFO - SDF,57632964332,S-SDF-LIT-4,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/57632964332,https://www.airlines-manager.com/aircraft/show/106453500,2:15,11:59,310,"614,512$","564,269$","$1,820.22","$57,972.84"
SFO - SDF,57658665094,S-SDF-LIT-1,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/57658665094,https://www.airlines-manager.com/aircraft/show/106453499,14:00,23:44,310,"614,512$","564,269$","$1,820.22","$57,972.84"
SFO - SDF,57662009377,S-SDF-LIT-3,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/57662009377,https://www.airlines-manager.com/aircraft/show/94886627,16:30,2:14,310,"614,512$","564,269$","$1,820.22","$57,972.84"
SFO - SDF,57665599553,S-SDF-LIT-5,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/57665599553,https://www.airlines-manager.com/aircraft/show/106453498,17:30,3:14,310,"614,512$","564,269$","$1,820.22","$57,972.84"
SFO - SEA,57632964600,S-PHL-SEA-5,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/57632964600,https://www.airlines-manager.com/aircraft/show/92390869,2:45,7:29,320,"301,272$","257,664$",$805.20,"$54,436.06"
SFO - SEA,57632964601,S-PHL-SEA-4,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/57632964601,https://www.airlines-manager.com/aircraft/show/92390870,3:30,8:14,320,"301,272$","257,664$",$805.20,"$54,436.06"
SFO - SEA,57637373196,S-PHL-SEA-6 B,A319-100,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/57637373196,https://www.airlines-manager.com/aircraft/show/97900730,5:30,10:14,198,"229,629$","199,471$","$1,007.43","$42,141.76"
SFO - SEA,57640828162,S-PHL-SEA-3,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/57640828162,https://www.airlines-manager.com/aircraft/show/92390873,7:00,11:44,320,"301,272$","257,664$",$805.20,"$54,436.06"
SFO - SEA,57651685743,S-PHL-SEA-2,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/57651685743,https://www.airlines-manager.com/aircraft/show/92390871,12:00,16:44,320,"301,272$","257,664$",$805.20,"$54,436.06"
SFO - SEA,57675937093,S-PHL-SEA-1,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/57675937093,https://www.airlines-manager.com/aircraft/show/92390872,23:45,4:29,306,"293,306$","249,954$",$816.84,"$52,807.18"
SFO - SHA,57668758401,S-168B-4 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/57668758401,https://www.airlines-manager.com/aircraft/show/87933798,20:00,19:59,1046,"4,655,897$","4,320,364$","$4,130.37","$180,140.26"
SFO - SHA,57674153173,S-168A-4 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/57674153173,https://www.airlines-manager.com/aircraft/show/86817628,22:00,21:59,1046,"4,655,897$","4,320,364$","$4,130.37","$180,140.26"
SFO - SLC,57632963837,S-ORD-DTW-4,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/57632963837,https://www.airlines-manager.com/aircraft/show/101045331,0:00,4:29,400,"353,831$","312,930$",$782.33,"$69,798.51"
SFO - SLC,57632963838,S-ORD-DTW-2,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/57632963838,https://www.airlines-manager.com/aircraft/show/101045333,1:00,5:29,400,"353,831$","312,930$",$782.33,"$69,798.51"
SFO - SLC,57632963839,S-ORD-DTW-5,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/57632963839,https://www.airlines-manager.com/aircraft/show/101045330,3:00,7:29,400,"353,831$","312,930$",$782.33,"$69,798.51"
SFO - SLC,57644525186,S-ORD-DTW-1,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/57644525186,https://www.airlines-manager.com/aircraft/show/101045334,8:00,12:29,400,"353,831$","312,930$",$782.33,"$69,798.51"
SFO - SLC,57658665188,S-ORD-DTW-3,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/57658665188,https://www.airlines-manager.com/aircraft/show/101045332,15:00,19:29,227,"260,063$","221,904$",$977.55,"$49,495.32"
SFO - SMF,57644525248,S-SDF-LIT-1,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/57644525248,https://www.airlines-manager.com/aircraft/show/106453499,8:30,10:59,310,"83,132$","62,550$",$201.77,"$25,187.92"
SFO - SMF,57658665079,S-SDF-LIT-3,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/57658665079,https://www.airlines-manager.com/aircraft/show/94886627,14:00,16:29,310,"83,132$","62,550$",$201.77,"$25,187.92"
SFO - SMF,57658665080,S-SDF-LIT-5,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/57658665080,https://www.airlines-manager.com/aircraft/show/106453498,15:00,17:29,310,"83,132$","62,550$",$201.77,"$25,187.92"
SFO - SMF,57674153270,S-SDF-LIT-2,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/57674153270,https://www.airlines-manager.com/aircraft/show/94886628,22:45,1:14,310,"83,132$","62,550$",$201.77,"$25,187.92"
SFO - SMF,57675937105,S-SDF-LIT-4,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/57675937105,https://www.airlines-manager.com/aircraft/show/106453500,23:45,2:14,310,"83,132$","62,550$",$201.77,"$25,187.92"
SFO - STL,57640828140,S-MSY-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/57640828140,https://www.airlines-manager.com/aircraft/show/98075265,6:45,15:29,320,"557,439$","503,685$","$1,574.02","$57,673.85"
SFO - STL,57644525267,S-MSY-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/57644525267,https://www.airlines-manager.com/aircraft/show/98075263,8:45,17:29,320,"557,439$","503,685$","$1,574.02","$57,673.85"
SFO - STL,57655460177,S-MSY-STL-6,ERJ-175,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/57655460177,https://www.airlines-manager.com/aircraft/show/103534666,13:00,21:44,112,"262,228$","230,306$","$2,056.30","$26,370.92"
SFO - STL,57662009288,S-MSY-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/57662009288,https://www.airlines-manager.com/aircraft/show/98075266,16:00,0:44,320,"557,439$","503,685$","$1,574.02","$57,673.85"
SFO - STL,57665599601,S-MSY-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/57665599601,https://www.airlines-manager.com/aircraft/show/98075264,18:00,2:44,320,"557,439$","503,685$","$1,574.02","$57,673.85"
SFO - STL,57674153228,S-MSY-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/57674153228,https://www.airlines-manager.com/aircraft/show/98075267,22:30,7:14,320,"557,439$","503,685$","$1,574.02","$57,673.85"
SFO - SYR,57632963854,S-GSO-SYR-2,737-900ER,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/57632963854,https://www.airlines-manager.com/aircraft/show/120056763,0:00,11:29,320,"714,764$","654,987$","$2,046.83","$57,038.06"
SFO - SYR,57651685764,S-GSO-SYR-3,737-900ER,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/57651685764,https://www.airlines-manager.com/aircraft/show/120056762,12:00,23:29,320,"714,764$","654,987$","$2,046.83","$57,038.06"
SFO - SYR,57655460106,S-GSO-SYR-4,737-900ER,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/57655460106,https://www.airlines-manager.com/aircraft/show/119550235,13:00,0:29,320,"714,764$","654,987$","$2,046.83","$57,038.06"
SFO - SYR,57665599682,S-GSO-SYR-5,A319-100,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/57665599682,https://www.airlines-manager.com/aircraft/show/120112473,18:30,5:59,198,"537,637$","493,892$","$2,494.40","$43,009.46"
SFO - SYR,57674153290,S-GSO-SYR-1,737-900ER,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/57674153290,https://www.airlines-manager.com/aircraft/show/120056764,23:00,10:29,320,"714,764$","654,987$","$2,046.83","$57,038.06"
SFO - TFU,57655460018,S-168B-3 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/57655460018,https://www.airlines-manager.com/aircraft/show/87566902,12:30,14:59,1046,"5,238,347$","4,830,688$","$4,618.25","$1,945,243.49"
SFO - TFU,57658665158,S-168A-3 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/57658665158,https://www.airlines-manager.com/aircraft/show/86483501,14:30,16:59,1046,"5,238,347$","4,830,688$","$4,618.25","$1,945,243.49"
SFO - TPA,57632964254,S-FLL-TPA-1,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/57632964254,https://www.airlines-manager.com/aircraft/show/97955544,1:00,12:14,320,"704,621$","638,570$","$1,995.53","$56,845.99"
SFO - TPA,57637373148,S-FLL-TPA-3,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/57637373148,https://www.airlines-manager.com/aircraft/show/97955542,5:00,16:14,320,"704,621$","638,570$","$1,995.53","$56,845.99"
SFO - TPA,57644525188,S-FLL-TPA-5,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/57644525188,https://www.airlines-manager.com/aircraft/show/97955540,8:00,19:14,320,"704,621$","638,570$","$1,995.53","$56,845.99"
SFO - TPA,57655460078,S-FLL-TPA-2,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/57655460078,https://www.airlines-manager.com/aircraft/show/97955543,13:00,0:14,320,"704,621$","638,570$","$1,995.53","$56,845.99"
SFO - TPA,57662009419,S-FLL-TPA-4,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/57662009419,https://www.airlines-manager.com/aircraft/show/97955541,17:00,4:14,320,"704,621$","638,570$","$1,995.53","$56,845.99"
SFO - TPA,57668758404,S-FLL-TPA-6 B,A319-100,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/57668758404,https://www.airlines-manager.com/aircraft/show/97900729,20:00,7:29,198,"531,620$","483,764$","$2,443.25","$42,127.49"
SFO - TPE,57668758402,S-168B-5 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/57668758402,https://www.airlines-manager.com/aircraft/show/87933799,20:00,21:14,1046,"4,782,404$","4,432,378$","$4,237.46","$3,593,820.00"
SFO - TPE,57674153172,S-168A-5 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/57674153172,https://www.airlines-manager.com/aircraft/show/86808589,22:00,23:14,1038,"4,756,787$","4,408,364$","$4,246.98","$3,574,349.19"
SFO - TUL,57637373124,S-TUL-DSM-2,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/57637373124,https://www.airlines-manager.com/aircraft/show/108410857,4:45,12:29,320,"493,680$","448,182$","$1,400.57","$57,954.57"
SFO - TUL,57640828174,S-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/57640828174,https://www.airlines-manager.com/aircraft/show/108466264,7:00,14:44,112,"232,916$","205,908$","$1,838.46","$26,626.03"
SFO - TUL,57658665205,S-TUL-DSM-1,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/57658665205,https://www.airlines-manager.com/aircraft/show/108410856,15:00,22:44,320,"493,680$","448,182$","$1,400.57","$57,954.57"
SFO - TUL,57662009248,S-TUL-DSM-4,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/57662009248,https://www.airlines-manager.com/aircraft/show/108410859,15:45,23:29,320,"493,680$","448,182$","$1,400.57","$57,954.57"
SFO - TUL,57671659214,S-TUL-DSM-3,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/57671659214,https://www.airlines-manager.com/aircraft/show/108410858,20:45,4:29,320,"493,680$","448,182$","$1,400.57","$57,954.57"
SFO - TUS,57644525192,S-OKC-FSD-1,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/57644525192,https://www.airlines-manager.com/aircraft/show/107160378,8:00,12:59,320,"319,228$","284,067$",$887.71,"$57,003.41"
SFO - TUS,57648263024,S-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/57648263024,https://www.airlines-manager.com/aircraft/show/107132310,9:30,14:29,112,"152,035$","132,268$","$1,180.96","$26,542.07"
SFO - TUS,57648263025,S-OKC-FSD-4,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/57648263025,https://www.airlines-manager.com/aircraft/show/107160381,10:30,15:29,320,"319,228$","284,067$",$887.71,"$57,003.41"
SFO - TUS,57662009293,S-OKC-FSD-3,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/57662009293,https://www.airlines-manager.com/aircraft/show/107160380,16:00,20:59,320,"319,228$","284,067$",$887.71,"$57,003.41"
SFO - TUS,57675937066,S-OKC-FSD-2,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/57675937066,https://www.airlines-manager.com/aircraft/show/107160379,23:30,4:29,320,"319,228$","284,067$",$887.71,"$57,003.41"
SFO - TYS,57637373206,S-TYS-MSN-2,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/57637373206,https://www.airlines-manager.com/aircraft/show/117782564,5:45,15:59,320,"642,888$","588,205$","$1,838.14","$57,479.32"
SFO - TYS,57644525155,S-TYS-MSN-1,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/57644525155,https://www.airlines-manager.com/aircraft/show/117782565,7:30,17:44,320,"642,888$","588,205$","$1,838.14","$57,479.32"
SFO - TYS,57662009340,S-TYS-MSN-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/57662009340,https://www.airlines-manager.com/aircraft/show/117782582,16:00,2:14,198,"483,910$","444,071$","$2,242.78","$43,394.56"
SFO - TYS,57668758324,S-TYS-MSN-3,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/57668758324,https://www.airlines-manager.com/aircraft/show/117782563,19:30,5:44,320,"642,888$","588,205$","$1,838.14","$57,479.32"
SFO - TYS,57671659216,S-TYS-MSN-4,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/57671659216,https://www.airlines-manager.com/aircraft/show/117782562,20:45,6:59,320,"642,888$","588,205$","$1,838.14","$57,479.32"
SFO - YEG,57632964677,S-YEG-YYC-2,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/57632964677,https://www.airlines-manager.com/aircraft/show/117782560,3:30,9:59,320,"420,949$","378,331$","$1,182.28","$58,354.40"
SFO - YEG,57644525230,S-YEG-YYC-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/57644525230,https://www.airlines-manager.com/aircraft/show/117782581,8:15,14:59,198,"317,291$","287,019$","$1,449.59","$42,626.58"
SFO - YEG,57655460103,S-YEG-YYC-1,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/57655460103,https://www.airlines-manager.com/aircraft/show/117782561,13:00,19:29,320,"420,949$","378,331$","$1,182.28","$58,354.40"
SFO - YEG,57658665207,S-YEG-YYC-4,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/57658665207,https://www.airlines-manager.com/aircraft/show/116932364,15:00,21:29,320,"420,949$","378,331$","$1,182.28","$58,354.40"
SFO - YEG,57671659299,S-YEG-YYC-3,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/57671659299,https://www.airlines-manager.com/aircraft/show/117782559,21:30,3:59,320,"420,949$","378,331$","$1,182.28","$58,354.40"
SFO - YOW,57632963987,S-YOW-CUN-3,757-300,https://www.airlines-manager.com/network/showline/50555301,https://www.airlines-manager.com/network/showflight/57632963987,https://www.airlines-manager.com/aircraft/show/120056766,0:15,11:29,400,"934,986$","864,487$","$2,161.22","$76,957.30"
SFO - YOW,57632963988,S-YOW-CUN-4,757-300,https://www.airlines-manager.com/network/showline/50555301,https://www.airlines-manager.com/network/showflight/57632963988,https://www.airlines-manager.com/aircraft/show/120056765,1:15,12:29,400,"934,986$","864,487$","$2,161.22","$76,957.30"
SFO - YOW,57655460069,S-YOW-CUN-1,757-300,https://www.airlines-manager.com/network/showline/50555301,https://www.airlines-manager.com/network/showflight/57655460069,https://www.airlines-manager.com/aircraft/show/120056768,13:00,0:14,400,"934,986$","864,487$","$2,161.22","$76,957.30"
SFO - YOW,57658665038,S-YOW-CUN-2,757-300,https://www.airlines-manager.com/network/showline/50555301,https://www.airlines-manager.com/network/showflight/57658665038,https://www.airlines-manager.com/aircraft/show/120056767,14:00,1:14,400,"934,986$","864,487$","$2,161.22","$76,957.30"
SFO - YUL,57632964154,S-YYZ-YUL-1,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/57632964154,https://www.airlines-manager.com/aircraft/show/115413609,0:45,12:29,400,"926,903$","850,879$","$2,127.20","$72,518.10"
SFO - YUL,57640828092,S-YYZ-YUL-4,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/57640828092,https://www.airlines-manager.com/aircraft/show/115413612,6:00,17:44,400,"926,903$","850,879$","$2,127.20","$72,518.10"
SFO - YUL,57658665036,S-YYZ-YUL-2,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/57658665036,https://www.airlines-manager.com/aircraft/show/115413610,14:00,1:44,400,"926,903$","850,879$","$2,127.20","$72,518.10"
SFO - YUL,57662009388,S-YYZ-YUL-3,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/57662009388,https://www.airlines-manager.com/aircraft/show/115413611,16:45,4:29,400,"926,903$","850,879$","$2,127.20","$72,518.10"
SFO - YUL,57665599690,S-YYZ-YUL- 5,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/57665599690,https://www.airlines-manager.com/aircraft/show/91126653,18:45,6:29,400,"926,903$","850,879$","$2,127.20","$72,518.10"
SFO - YVR,57632964160,S-MSY-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/57632964160,https://www.airlines-manager.com/aircraft/show/98075266,0:45,5:59,320,"331,374$","290,411$",$907.53,"$55,492.55"
SFO - YVR,57632964162,S-MSY-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/57632964162,https://www.airlines-manager.com/aircraft/show/98075264,2:45,7:59,320,"331,374$","290,411$",$907.53,"$55,492.55"
SFO - YVR,57640828178,S-MSY-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/57640828178,https://www.airlines-manager.com/aircraft/show/98075267,7:15,12:29,320,"331,374$","290,411$",$907.53,"$55,492.55"
SFO - YVR,57662009287,S-MSY-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/57662009287,https://www.airlines-manager.com/aircraft/show/98075265,16:00,21:14,320,"331,374$","290,411$",$907.53,"$55,492.55"
SFO - YVR,57665599600,S-MSY-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/57665599600,https://www.airlines-manager.com/aircraft/show/98075263,18:00,23:14,320,"331,374$","290,411$",$907.53,"$55,492.55"
SFO - YVR,57671659340,S-MSY-STL-6,ERJ-175,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/57671659340,https://www.airlines-manager.com/aircraft/show/103534666,21:45,2:59,112,"156,970$","134,156$","$1,197.82","$25,634.90"
SFO - YYC,57632964705,S-YEG-YYC-3,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/57632964705,https://www.airlines-manager.com/aircraft/show/117782559,4:00,9:59,320,"386,674$","342,885$","$1,071.52","$57,306.69"
SFO - YYC,57655460102,S-YEG-YYC-2,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/57655460102,https://www.airlines-manager.com/aircraft/show/117782560,13:00,18:59,320,"386,674$","342,885$","$1,071.52","$57,306.69"
SFO - YYC,57658665235,S-YEG-YYC-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/57658665235,https://www.airlines-manager.com/aircraft/show/117782581,15:00,20:59,198,"290,770$","259,950$","$1,312.88","$43,445.68"
SFO - YYC,57668758323,S-YEG-YYC-1,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/57668758323,https://www.airlines-manager.com/aircraft/show/117782561,19:30,1:29,320,"386,674$","342,885$","$1,071.52","$57,306.69"
SFO - YYC,57671659298,S-YEG-YYC-4,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/57671659298,https://www.airlines-manager.com/aircraft/show/116932364,21:30,3:29,320,"386,674$","342,885$","$1,071.52","$57,306.69"
SFO - YYZ,57632964477,S-YYZ-YUL-2,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/57632964477,https://www.airlines-manager.com/aircraft/show/115413610,1:45,12:29,400,"886,073$","807,953$","$2,019.88","$75,275.12"
SFO - YYZ,57640828091,S-YYZ-YUL-3,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/57640828091,https://www.airlines-manager.com/aircraft/show/115413611,6:00,16:44,400,"886,073$","807,953$","$2,019.88","$75,275.12"
SFO - YYZ,57644525185,S-YYZ-YUL- 5,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/57644525185,https://www.airlines-manager.com/aircraft/show/91126653,8:00,18:44,400,"886,073$","807,953$","$2,019.88","$75,275.12"
SFO - YYZ,57658665035,S-YYZ-YUL-1,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/57658665035,https://www.airlines-manager.com/aircraft/show/115413609,14:00,0:44,400,"886,073$","807,953$","$2,019.88","$75,275.12"
SFO - YYZ,57665599566,S-YYZ-YUL-4,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/57665599566,https://www.airlines-manager.com/aircraft/show/115413612,17:45,4:29,400,"886,073$","807,953$","$2,019.88","$75,275.12"
ORD - ABQ,57632964584,O-GEG-ABQ-3,737-900ER,https://www.airlines-manager.com/network/showline/51552831,https://www.airlines-manager.com/network/showflight/57632964584,https://www.airlines-manager.com/aircraft/show/123133561,2:30,8:59,320,"404,279$","348,004$","$1,087.51","$53,676.71"
ORD - ABQ,57644525207,O-GEG-ABQ-5,A319-100,https://www.airlines-manager.com/network/showline/51552831,https://www.airlines-manager.com/network/showflight/57644525207,https://www.airlines-manager.com/aircraft/show/123232505,8:00,14:29,198,"306,047$","266,746$","$1,347.20","$41,143.34"
ORD - ABQ,57651685717,O-GEG-ABQ-2,737-900ER,https://www.airlines-manager.com/network/showline/51552831,https://www.airlines-manager.com/network/showflight/57651685717,https://www.airlines-manager.com/aircraft/show/123133562,11:30,17:59,320,"404,279$","348,004$","$1,087.51","$53,676.71"
ORD - ABQ,57655460016,O-GEG-ABQ-4,737-900ER,https://www.airlines-manager.com/network/showline/51552831,https://www.airlines-manager.com/network/showflight/57655460016,https://www.airlines-manager.com/aircraft/show/123133560,12:30,18:59,320,"404,279$","348,004$","$1,087.51","$53,676.71"
ORD - ABQ,57668758329,O-GEG-ABQ-1,737-900ER,https://www.airlines-manager.com/network/showline/51552831,https://www.airlines-manager.com/network/showflight/57668758329,https://www.airlines-manager.com/aircraft/show/123133563,19:30,1:59,320,"404,279$","348,004$","$1,087.51","$53,676.71"
ORD - ANC,57651685685,O-ANC-TUS-1,A321-200,https://www.airlines-manager.com/network/showline/51427559,https://www.airlines-manager.com/network/showflight/57651685685,https://www.airlines-manager.com/aircraft/show/122771603,11:00,0:14,310,"800,693$","724,629$","$2,337.51","$54,757.86"
ORD - ANC,57655460160,O-ANC-TUS-2,A321-200,https://www.airlines-manager.com/network/showline/51427559,https://www.airlines-manager.com/network/showflight/57655460160,https://www.airlines-manager.com/aircraft/show/122771602,13:00,2:14,310,"800,693$","724,629$","$2,337.51","$54,757.86"
ORD - ANC,57665599716,O-ANC-TUS-3,A321-200,https://www.airlines-manager.com/network/showline/51427559,https://www.airlines-manager.com/network/showflight/57665599716,https://www.airlines-manager.com/aircraft/show/122771601,18:45,7:59,310,"800,693$","724,629$","$2,337.51","$54,757.86"
ORD - ANC,57671659229,O-ANC-TUS-4,A321-200,https://www.airlines-manager.com/network/showline/51427559,https://www.airlines-manager.com/network/showflight/57671659229,https://www.airlines-manager.com/aircraft/show/122771600,20:45,9:59,310,"800,693$","724,629$","$2,337.51","$54,757.86"
ORD - ANC,57674153277,O-ANC-TUS-5,A321-200,https://www.airlines-manager.com/network/showline/51427559,https://www.airlines-manager.com/network/showflight/57674153277,https://www.airlines-manager.com/aircraft/show/122771599,22:45,11:59,310,"800,693$","724,629$","$2,337.51","$54,757.86"
ORD - ATL,57632964029,O-ATL-YYZ-4,A321neo,https://www.airlines-manager.com/network/showline/51097511,https://www.airlines-manager.com/network/showflight/57632964029,https://www.airlines-manager.com/aircraft/show/121813378,0:30,4:59,338,"306,011$","244,274$",$722.70,"$54,484.91"
ORD - ATL,57637373054,O-ATL-YYZ-3,A321neo,https://www.airlines-manager.com/network/showline/51097511,https://www.airlines-manager.com/network/showflight/57637373054,https://www.airlines-manager.com/aircraft/show/121813379,4:15,8:44,338,"306,011$","244,274$",$722.70,"$54,484.91"
ORD - ATL,57651685577,O-ATL-YYZ-1,A321neo,https://www.airlines-manager.com/network/showline/51097511,https://www.airlines-manager.com/network/showflight/57651685577,https://www.airlines-manager.com/aircraft/show/121813381,11:00,15:29,338,"306,011$","244,274$",$722.70,"$54,484.91"
ORD - ATL,57655460050,O-ATL-YYZ-2,A321neo,https://www.airlines-manager.com/network/showline/51097511,https://www.airlines-manager.com/network/showflight/57655460050,https://www.airlines-manager.com/aircraft/show/121813380,13:00,17:29,338,"306,011$","244,274$",$722.70,"$54,484.91"
ORD - ATL,57671659237,O-ATL-YYZ-5,A321neo,https://www.airlines-manager.com/network/showline/51097511,https://www.airlines-manager.com/network/showflight/57671659237,https://www.airlines-manager.com/aircraft/show/115400545,21:00,1:29,338,"306,011$","244,274$",$722.70,"$54,484.91"
ORD - AUS,57632964641,O-FAT-AUS-5,A319-100,https://www.airlines-manager.com/network/showline/51427537,https://www.airlines-manager.com/network/showflight/57632964641,https://www.airlines-manager.com/aircraft/show/122771598,3:00,8:59,198,"284,835$","247,560$","$1,250.30","$41,374.93"
ORD - AUS,57651685649,O-FAT-AUS-3,737-900ER,https://www.airlines-manager.com/network/showline/51427537,https://www.airlines-manager.com/network/showflight/57651685649,https://www.airlines-manager.com/aircraft/show/122805429,11:00,16:59,320,"375,971$","322,407$","$1,007.52","$53,884.18"
ORD - AUS,57655460118,O-FAT-AUS-4,737-900ER,https://www.airlines-manager.com/network/showline/51427537,https://www.airlines-manager.com/network/showflight/57655460118,https://www.airlines-manager.com/aircraft/show/122805428,13:00,18:59,320,"375,971$","322,407$","$1,007.52","$53,884.18"
ORD - AUS,57668758359,O-FAT-AUS-1,737-900ER,https://www.airlines-manager.com/network/showline/51427537,https://www.airlines-manager.com/network/showflight/57668758359,https://www.airlines-manager.com/aircraft/show/122805431,19:45,1:44,320,"375,971$","322,407$","$1,007.52","$53,884.18"
ORD - AUS,57671659335,O-FAT-AUS-2,737-900ER,https://www.airlines-manager.com/network/showline/51427537,https://www.airlines-manager.com/network/showflight/57671659335,https://www.airlines-manager.com/aircraft/show/122805430,21:45,3:44,320,"375,971$","322,407$","$1,007.52","$53,884.18"
ORD - BDL,57632964692,O-EUG-BDL-4,737-900ER,https://www.airlines-manager.com/network/showline/51552953,https://www.airlines-manager.com/network/showflight/57632964692,https://www.airlines-manager.com/aircraft/show/123133556,3:45,8:59,320,"330,682$","283,441$",$885.75,"$54,160.70"
ORD - BDL,57644525176,O-EUG-BDL-3,737-900ER,https://www.airlines-manager.com/network/showline/51552953,https://www.airlines-manager.com/network/showflight/57644525176,https://www.airlines-manager.com/aircraft/show/123133557,7:45,12:59,320,"330,682$","283,441$",$885.75,"$54,160.70"
ORD - BDL,57651685715,O-EUG-BDL-2,737-900ER,https://www.airlines-manager.com/network/showline/51552953,https://www.airlines-manager.com/network/showflight/57651685715,https://www.airlines-manager.com/aircraft/show/123133558,11:30,16:44,320,"330,682$","283,441$",$885.75,"$54,160.70"
ORD - BDL,57655460182,O-EUG-BDL-5,ERJ-175,https://www.airlines-manager.com/network/showline/51552953,https://www.airlines-manager.com/network/showflight/57655460182,https://www.airlines-manager.com/aircraft/show/123133603,13:00,18:14,112,"156,993$","131,097$","$1,170.51","$25,050.38"
ORD - BDL,57674153161,O-EUG-BDL-1,737-900ER,https://www.airlines-manager.com/network/showline/51552953,https://www.airlines-manager.com/network/showflight/57674153161,https://www.airlines-manager.com/aircraft/show/123133559,22:00,3:14,320,"330,682$","283,441$",$885.75,"$54,160.70"
ORD - BFF,57632963880,O-JAX-BFF-5,A319-100,https://www.airlines-manager.com/network/showline/51552837,https://www.airlines-manager.com/network/showflight/57632963880,https://www.airlines-manager.com/aircraft/show/123232507,0:00,5:14,198,"251,817$","219,067$","$1,106.40","$41,859.94"
ORD - BFF,57632963881,O-JAX-BFF-3,A321neo,https://www.airlines-manager.com/network/showline/51552837,https://www.airlines-manager.com/network/showflight/57632963881,https://www.airlines-manager.com/aircraft/show/123232508,3:45,8:59,338,"359,662$","319,773$",$946.07,"$61,103.12"
ORD - BFF,57651685703,O-JAX-BFF-2,A321neo,https://www.airlines-manager.com/network/showline/51552837,https://www.airlines-manager.com/network/showflight/57651685703,https://www.airlines-manager.com/aircraft/show/123232509,11:15,16:29,338,"359,662$","319,773$",$946.07,"$61,103.12"
ORD - BFF,57665599509,O-JAX-BFF-1,A321neo,https://www.airlines-manager.com/network/showline/51552837,https://www.airlines-manager.com/network/showflight/57665599509,https://www.airlines-manager.com/aircraft/show/123232510,17:15,22:29,338,"359,662$","319,773$",$946.07,"$61,103.12"
ORD - BFF,57671659320,O-JAX-BFF-4,A321neo,https://www.airlines-manager.com/network/showline/51552837,https://www.airlines-manager.com/network/showflight/57671659320,https://www.airlines-manager.com/aircraft/show/121813377,21:45,2:59,338,"359,662$","319,773$",$946.07,"$61,103.12"
ORD - BNA,57632963858,O-MSY-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/51427545,https://www.airlines-manager.com/network/showflight/57632963858,https://www.airlines-manager.com/aircraft/show/122805427,0:00,3:44,320,"200,031$","157,271$",$491.47,"$42,126.16"
ORD - BNA,57640828107,O-MSY-RDU-5,A319-100,https://www.airlines-manager.com/network/showline/51427545,https://www.airlines-manager.com/network/showflight/57640828107,https://www.airlines-manager.com/aircraft/show/122771597,6:00,9:44,198,"151,544$","122,383$",$618.10,"$32,781.16"
ORD - BNA,57648263019,O-MSY-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/51427545,https://www.airlines-manager.com/network/showflight/57648263019,https://www.airlines-manager.com/aircraft/show/122390305,9:30,13:14,320,"200,031$","157,271$",$491.47,"$42,126.16"
ORD - BNA,57658665153,O-MSY-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/51427545,https://www.airlines-manager.com/network/showflight/57658665153,https://www.airlines-manager.com/aircraft/show/122805425,14:30,18:14,320,"200,031$","157,271$",$491.47,"$42,126.16"
ORD - BNA,57668758296,O-MSY-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/51427545,https://www.airlines-manager.com/network/showflight/57668758296,https://www.airlines-manager.com/aircraft/show/122805426,19:15,22:59,320,"200,031$","157,271$",$491.47,"$42,126.16"
ORD - BOI,57632964510,O-PSP-MEM-4,A321-200,https://www.airlines-manager.com/network/showline/51427552,https://www.airlines-manager.com/network/showflight/57632964510,https://www.airlines-manager.com/aircraft/show/122771605,1:45,9:29,310,"483,433$","432,129$","$1,393.96","$55,878.75"
ORD - BOI,57632964511,O-PSP-MEM-3,A321-200,https://www.airlines-manager.com/network/showline/51427552,https://www.airlines-manager.com/network/showflight/57632964511,https://www.airlines-manager.com/aircraft/show/122771606,3:15,10:59,310,"483,433$","432,129$","$1,393.96","$55,878.75"
ORD - BOI,57637373132,O-PSP-MEM-5,A321-200,https://www.airlines-manager.com/network/showline/51427552,https://www.airlines-manager.com/network/showflight/57637373132,https://www.airlines-manager.com/aircraft/show/122771604,4:45,12:29,310,"483,433$","432,129$","$1,393.96","$55,878.75"
ORD - BOI,57651685687,O-PSP-MEM-2,A321-200,https://www.airlines-manager.com/network/showline/51427552,https://www.airlines-manager.com/network/showflight/57651685687,https://www.airlines-manager.com/aircraft/show/122771607,11:00,18:44,310,"483,433$","432,129$","$1,393.96","$55,878.75"
ORD - BOI,57671659311,O-PSP-MEM-1,A321-200,https://www.airlines-manager.com/network/showline/51427552,https://www.airlines-manager.com/network/showflight/57671659311,https://www.airlines-manager.com/aircraft/show/122771608,21:30,5:14,296,"470,486$","419,732$","$1,418.01","$54,275.69"
ORD - BOS,57644525197,O-SJC-ONT-5,737-900ER,https://www.airlines-manager.com/network/showline/51202004,https://www.airlines-manager.com/network/showflight/57644525197,https://www.airlines-manager.com/aircraft/show/122278407,8:00,13:29,320,"347,719$","292,330$",$913.53,"$53,312.46"
ORD - BOS,57651685647,O-SJC-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/51202004,https://www.airlines-manager.com/network/showflight/57651685647,https://www.airlines-manager.com/aircraft/show/122278409,11:00,16:29,320,"347,719$","292,330$",$913.53,"$53,312.46"
ORD - BOS,57655460115,O-SJC-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/51202004,https://www.airlines-manager.com/network/showflight/57655460115,https://www.airlines-manager.com/aircraft/show/122278408,13:00,18:29,320,"347,719$","292,330$",$913.53,"$53,312.46"
ORD - BOS,57655460116,O-SJC-BOS,ERJ-175,https://www.airlines-manager.com/network/showline/51202004,https://www.airlines-manager.com/network/showflight/57655460116,https://www.airlines-manager.com/aircraft/show/122320232,13:15,18:44,102,"154,783$","125,036$","$1,225.84","$22,802.92"
ORD - BOS,57668758428,O-SJC-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/51202004,https://www.airlines-manager.com/network/showflight/57668758428,https://www.airlines-manager.com/aircraft/show/122278411,20:15,1:44,320,"347,719$","292,330$",$913.53,"$53,312.46"
ORD - BOS,57674153200,O-SJC-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/51202004,https://www.airlines-manager.com/network/showflight/57674153200,https://www.airlines-manager.com/aircraft/show/122278410,22:15,3:44,320,"347,719$","292,330$",$913.53,"$53,312.46"
ORD - BUR,57632964543,O-SNA-BUR-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369092,https://www.airlines-manager.com/network/showflight/57632964543,https://www.airlines-manager.com/aircraft/show/122598444,2:15,10:59,272,"501,190$","459,236$","$1,688.37","$52,584.27"
ORD - BUR,57637373049,O-SNA-BUR-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369092,https://www.airlines-manager.com/network/showflight/57637373049,https://www.airlines-manager.com/aircraft/show/122598445,4:15,12:59,272,"501,190$","459,236$","$1,688.37","$52,584.27"
ORD - BUR,57651685559,O-SNA-BUR-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369092,https://www.airlines-manager.com/network/showflight/57651685559,https://www.airlines-manager.com/aircraft/show/122598448,11:00,19:44,272,"501,190$","459,236$","$1,688.37","$52,584.27"
ORD - BUR,57655460040,O-SNA-BUR-6,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369092,https://www.airlines-manager.com/network/showflight/57655460040,https://www.airlines-manager.com/aircraft/show/120993787,13:00,21:44,272,"501,190$","459,236$","$1,688.37","$52,584.27"
ORD - BUR,57665599534,O-SNA-BUR-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369092,https://www.airlines-manager.com/network/showflight/57665599534,https://www.airlines-manager.com/aircraft/show/122598446,17:30,2:14,272,"501,190$","459,236$","$1,688.37","$52,584.27"
ORD - BUR,57665599535,O-SNA-BUR-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369092,https://www.airlines-manager.com/network/showflight/57665599535,https://www.airlines-manager.com/aircraft/show/122598447,18:30,3:14,272,"501,190$","459,236$","$1,688.37","$52,584.27"
ORD - BWI,57632964324,O-BWI-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202040,https://www.airlines-manager.com/network/showflight/57632964324,https://www.airlines-manager.com/aircraft/show/122278393,1:15,5:44,320,"282,844$","233,250$",$728.91,"$52,026.02"
ORD - BWI,57637373188,O-BWI-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202040,https://www.airlines-manager.com/network/showflight/57637373188,https://www.airlines-manager.com/aircraft/show/122278394,5:30,9:59,320,"282,844$","233,250$",$728.91,"$52,026.02"
ORD - BWI,57644525243,O-BWI-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202040,https://www.airlines-manager.com/network/showflight/57644525243,https://www.airlines-manager.com/aircraft/show/122278395,8:30,12:59,320,"282,844$","233,250$",$728.91,"$52,026.02"
ORD - BWI,57658665169,O-BWI-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202040,https://www.airlines-manager.com/network/showflight/57658665169,https://www.airlines-manager.com/aircraft/show/122278396,14:45,19:14,320,"282,844$","233,250$",$728.91,"$52,026.02"
ORD - BWI,57674153160,O-BWI-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202040,https://www.airlines-manager.com/network/showflight/57674153160,https://www.airlines-manager.com/aircraft/show/122278392,22:00,2:29,320,"282,844$","233,250$",$728.91,"$52,026.02"
ORD - CLE,57632964451,O-BWI-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202033,https://www.airlines-manager.com/network/showflight/57632964451,https://www.airlines-manager.com/aircraft/show/122278396,1:30,4:44,320,"169,071$","129,280$",$404.00,"$39,983.51"
ORD - CLE,57644525270,O-BWI-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202033,https://www.airlines-manager.com/network/showflight/57644525270,https://www.airlines-manager.com/aircraft/show/122278392,8:45,11:59,320,"169,071$","129,280$",$404.00,"$39,983.51"
ORD - CLE,57655460027,O-BWI-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202033,https://www.airlines-manager.com/network/showflight/57655460027,https://www.airlines-manager.com/aircraft/show/122278393,12:45,15:59,320,"169,071$","129,280$",$404.00,"$39,983.51"
ORD - CLE,57662009427,O-BWI-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202033,https://www.airlines-manager.com/network/showflight/57662009427,https://www.airlines-manager.com/aircraft/show/122278394,17:00,20:14,320,"169,071$","129,280$",$404.00,"$39,983.51"
ORD - CLE,57668758390,O-BWI-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202033,https://www.airlines-manager.com/network/showflight/57668758390,https://www.airlines-manager.com/aircraft/show/122278395,20:00,23:14,320,"169,071$","129,280$",$404.00,"$39,983.51"
ORD - CLT,57632963856,O-YEG-YUL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202027,https://www.airlines-manager.com/network/showflight/57632963856,https://www.airlines-manager.com/aircraft/show/122278401,0:00,4:29,320,"278,986$","224,633$",$701.98,"$50,104.01"
ORD - CLT,57632963857,O-YEG-YUL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202027,https://www.airlines-manager.com/network/showflight/57632963857,https://www.airlines-manager.com/aircraft/show/122278397,3:45,8:14,320,"278,986$","224,633$",$701.98,"$50,104.01"
ORD - CLT,57644525217,O-YEG-YUL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202027,https://www.airlines-manager.com/network/showflight/57644525217,https://www.airlines-manager.com/aircraft/show/122278398,8:15,12:44,320,"278,986$","224,633$",$701.98,"$50,104.01"
ORD - CLT,57655460030,O-YEG-YUL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202027,https://www.airlines-manager.com/network/showflight/57655460030,https://www.airlines-manager.com/aircraft/show/122278399,12:45,17:14,320,"278,986$","224,633$",$701.98,"$50,104.01"
ORD - CLT,57662009373,O-YEG-YUL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202027,https://www.airlines-manager.com/network/showflight/57662009373,https://www.airlines-manager.com/aircraft/show/122278400,16:30,20:59,320,"278,986$","224,633$",$701.98,"$50,104.01"
ORD - CLT,57675937084,O-SJC-BOS,ERJ-175,https://www.airlines-manager.com/network/showline/51202027,https://www.airlines-manager.com/network/showflight/57675937084,https://www.airlines-manager.com/aircraft/show/122320232,23:30,3:59,102,"123,883$","95,283$",$934.15,"$21,252.71"
ORD - CMH,57632964691,O-MSY-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/51427542,https://www.airlines-manager.com/network/showflight/57632964691,https://www.airlines-manager.com/aircraft/show/122805427,3:45,6:59,320,"157,444$","117,823$",$368.20,"$36,440.10"
ORD - CMH,57648263033,O-MSY-RDU-5,A319-100,https://www.airlines-manager.com/network/showline/51427542,https://www.airlines-manager.com/network/showflight/57648263033,https://www.airlines-manager.com/aircraft/show/122771597,9:45,12:59,198,"119,092$","92,208$",$465.70,"$28,517.94"
ORD - CMH,57658665075,O-MSY-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/51427542,https://www.airlines-manager.com/network/showflight/57658665075,https://www.airlines-manager.com/aircraft/show/122390305,14:00,17:14,320,"157,444$","117,823$",$368.20,"$36,440.10"
ORD - CMH,57665599645,O-MSY-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/51427542,https://www.airlines-manager.com/network/showflight/57665599645,https://www.airlines-manager.com/aircraft/show/122805425,18:15,21:29,320,"157,444$","117,823$",$368.20,"$36,440.10"
ORD - CMH,57674153292,O-MSY-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/51427542,https://www.airlines-manager.com/network/showflight/57674153292,https://www.airlines-manager.com/aircraft/show/122805426,23:00,2:14,320,"157,444$","117,823$",$368.20,"$36,440.10"
ORD - CUN,57632964606,O-LAS-PHX-1,737-900ER,https://www.airlines-manager.com/network/showline/50984856,https://www.airlines-manager.com/network/showflight/57632964606,https://www.airlines-manager.com/aircraft/show/121383380,2:45,10:29,320,"494,858$","431,882$","$1,349.63","$55,846.81"
ORD - CUN,57640828150,O-LAS-PHX-6 B,A319-100,https://www.airlines-manager.com/network/showline/50984856,https://www.airlines-manager.com/network/showflight/57640828150,https://www.airlines-manager.com/aircraft/show/121383409,6:45,14:29,198,"367,693$","323,393$","$1,633.30","$41,818.06"
ORD - CUN,57651685642,O-LAS-PHX-3,737-900ER,https://www.airlines-manager.com/network/showline/50984856,https://www.airlines-manager.com/network/showflight/57651685642,https://www.airlines-manager.com/aircraft/show/121383378,11:00,18:44,320,"494,858$","431,882$","$1,349.63","$55,846.81"
ORD - CUN,57655460110,O-LAS-PHX-5,737-900ER,https://www.airlines-manager.com/network/showline/50984856,https://www.airlines-manager.com/network/showflight/57655460110,https://www.airlines-manager.com/aircraft/show/121383376,13:00,20:44,320,"494,858$","431,882$","$1,349.63","$55,846.81"
ORD - CUN,57665599700,O-LAS-PHX-2,737-900ER,https://www.airlines-manager.com/network/showline/50984856,https://www.airlines-manager.com/network/showflight/57665599700,https://www.airlines-manager.com/aircraft/show/121383379,18:45,2:29,320,"494,858$","431,882$","$1,349.63","$55,846.81"
ORD - CUN,57671659220,O-LAS-PHX-4,737-900ER,https://www.airlines-manager.com/network/showline/50984856,https://www.airlines-manager.com/network/showflight/57671659220,https://www.airlines-manager.com/aircraft/show/121383377,20:45,4:29,292,"456,763$","395,152$","$1,353.26","$51,097.24"
ORD - CVG,57637373187,O-BWI-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202038,https://www.airlines-manager.com/network/showflight/57637373187,https://www.airlines-manager.com/aircraft/show/122278392,5:30,8:44,320,"137,876$","96,497$",$301.55,"$29,844.43"
ORD - CVG,57644525271,O-BWI-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202038,https://www.airlines-manager.com/network/showflight/57644525271,https://www.airlines-manager.com/aircraft/show/122278393,8:45,11:59,320,"137,876$","96,497$",$301.55,"$29,844.43"
ORD - CVG,57655460204,O-BWI-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202038,https://www.airlines-manager.com/network/showflight/57655460204,https://www.airlines-manager.com/aircraft/show/122278394,13:45,16:59,320,"137,876$","96,497$",$301.55,"$29,844.43"
ORD - CVG,57662009393,O-BWI-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202038,https://www.airlines-manager.com/network/showflight/57662009393,https://www.airlines-manager.com/aircraft/show/122278395,16:45,19:59,320,"137,876$","96,497$",$301.55,"$29,844.43"
ORD - CVG,57674153199,O-BWI-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202038,https://www.airlines-manager.com/network/showflight/57674153199,https://www.airlines-manager.com/aircraft/show/122278396,22:15,1:29,320,"137,876$","96,497$",$301.55,"$29,844.43"
ORD - DEN,57648263012,O-YVR-GDL-1,757-300,https://www.airlines-manager.com/network/showline/50984812,https://www.airlines-manager.com/network/showflight/57648263012,https://www.airlines-manager.com/aircraft/show/121383385,9:30,14:59,400,"453,524$","375,130$",$937.83,"$68,412.77"
ORD - DEN,57651685595,O-YVR-GDL-4,757-300,https://www.airlines-manager.com/network/showline/50984812,https://www.airlines-manager.com/network/showflight/57651685595,https://www.airlines-manager.com/aircraft/show/121383382,11:00,16:29,400,"453,524$","375,130$",$937.83,"$68,412.77"
ORD - DEN,57655460070,O-YVR-GDL-5,757-300,https://www.airlines-manager.com/network/showline/50984812,https://www.airlines-manager.com/network/showflight/57655460070,https://www.airlines-manager.com/aircraft/show/121383381,13:00,18:29,400,"453,524$","375,130$",$937.83,"$68,412.77"
ORD - DEN,57668758349,O-YVR-GDL-2,757-300,https://www.airlines-manager.com/network/showline/50984812,https://www.airlines-manager.com/network/showflight/57668758349,https://www.airlines-manager.com/aircraft/show/121383384,19:45,1:14,400,"453,524$","375,130$",$937.83,"$68,412.77"
ORD - DEN,57671659323,O-YVR-GDL-3,757-300,https://www.airlines-manager.com/network/showline/50984812,https://www.airlines-manager.com/network/showflight/57671659323,https://www.airlines-manager.com/aircraft/show/121383383,21:45,3:14,400,"453,524$","375,130$",$937.83,"$68,412.77"
ORD - DFW,57644525212,O-OAK-SMF-3,A321neo,https://www.airlines-manager.com/network/showline/51097509,https://www.airlines-manager.com/network/showflight/57644525212,https://www.airlines-manager.com/aircraft/show/121813394,8:15,13:29,338,"366,044$","307,135$",$908.68,"$58,688.22"
ORD - DFW,57651685583,O-OAK-SMF-2,A321neo,https://www.airlines-manager.com/network/showline/51097509,https://www.airlines-manager.com/network/showflight/57651685583,https://www.airlines-manager.com/aircraft/show/121813395,11:00,16:14,338,"366,044$","307,135$",$908.68,"$58,688.22"
ORD - DFW,57655460055,O-OAK-SMF-5,A321neo,https://www.airlines-manager.com/network/showline/51097509,https://www.airlines-manager.com/network/showflight/57655460055,https://www.airlines-manager.com/aircraft/show/121813392,13:00,18:14,338,"366,044$","307,135$",$908.68,"$58,688.22"
ORD - DFW,57668758418,O-OAK-SMF-1,A321neo,https://www.airlines-manager.com/network/showline/51097509,https://www.airlines-manager.com/network/showflight/57668758418,https://www.airlines-manager.com/aircraft/show/121813396,20:15,1:29,338,"366,044$","307,135$",$908.68,"$58,688.22"
ORD - DFW,57674153187,O-OAK-SMF-4,A321neo,https://www.airlines-manager.com/network/showline/51097509,https://www.airlines-manager.com/network/showflight/57674153187,https://www.airlines-manager.com/aircraft/show/121813393,22:15,3:29,338,"366,044$","307,135$",$908.68,"$58,688.22"
ORD - DTW,57637373116,O-SJD-FLL-1,A321neo,https://www.airlines-manager.com/network/showline/51097518,https://www.airlines-manager.com/network/showflight/57637373116,https://www.airlines-manager.com/aircraft/show/121813386,4:45,7:44,338,"143,894$","104,421$",$308.94,"$35,001.45"
ORD - DTW,57651685578,O-SJD-FLL-5,A321neo,https://www.airlines-manager.com/network/showline/51097518,https://www.airlines-manager.com/network/showflight/57651685578,https://www.airlines-manager.com/aircraft/show/121813382,11:00,13:59,338,"143,894$","104,421$",$308.94,"$35,001.45"
ORD - DTW,57658665030,O-SJD-FLL-4,A321neo,https://www.airlines-manager.com/network/showline/51097518,https://www.airlines-manager.com/network/showflight/57658665030,https://www.airlines-manager.com/aircraft/show/121813383,14:00,16:59,338,"143,894$","104,421$",$308.94,"$35,001.45"
ORD - DTW,57665599563,O-SJD-FLL-2,A321neo,https://www.airlines-manager.com/network/showline/51097518,https://www.airlines-manager.com/network/showflight/57665599563,https://www.airlines-manager.com/aircraft/show/121813385,17:45,20:44,338,"143,894$","104,421$",$308.94,"$35,001.45"
ORD - DTW,57668758345,O-SJD-FLL-3,A321neo,https://www.airlines-manager.com/network/showline/51097518,https://www.airlines-manager.com/network/showflight/57668758345,https://www.airlines-manager.com/aircraft/show/121813384,19:45,22:44,338,"143,894$","104,421$",$308.94,"$35,001.45"
ORD - ELP,57632964531,O-GEG-ABQ-1,737-900ER,https://www.airlines-manager.com/network/showline/51552832,https://www.airlines-manager.com/network/showflight/57632964531,https://www.airlines-manager.com/aircraft/show/123133563,2:00,8:59,320,"433,495$","377,379$","$1,179.31","$54,039.95"
ORD - ELP,57651685716,O-GEG-ABQ-3,737-900ER,https://www.airlines-manager.com/network/showline/51552832,https://www.airlines-manager.com/network/showflight/57651685716,https://www.airlines-manager.com/aircraft/show/123133561,11:30,18:29,320,"433,495$","377,379$","$1,179.31","$54,039.95"
ORD - ELP,57658665159,O-GEG-ABQ-5,A319-100,https://www.airlines-manager.com/network/showline/51552832,https://www.airlines-manager.com/network/showflight/57658665159,https://www.airlines-manager.com/aircraft/show/123232505,14:30,21:29,198,"327,588$","288,202$","$1,455.57","$41,269.98"
ORD - ELP,57665599608,O-GEG-ABQ-2,737-900ER,https://www.airlines-manager.com/network/showline/51552832,https://www.airlines-manager.com/network/showflight/57665599608,https://www.airlines-manager.com/aircraft/show/123133562,18:00,0:59,320,"433,495$","377,379$","$1,179.31","$54,039.95"
ORD - ELP,57668758266,O-GEG-ABQ-4,737-900ER,https://www.airlines-manager.com/network/showline/51552832,https://www.airlines-manager.com/network/showflight/57668758266,https://www.airlines-manager.com/aircraft/show/123133560,19:00,1:59,320,"433,495$","377,379$","$1,179.31","$54,039.95"
ORD - EUG,57632964554,O-EUG-BDL-2,737-900ER,https://www.airlines-manager.com/network/showline/51552952,https://www.airlines-manager.com/network/showflight/57632964554,https://www.airlines-manager.com/aircraft/show/123133558,2:15,11:14,320,"568,293$","506,021$","$1,581.32","$56,328.87"
ORD - EUG,57632964555,O-EUG-BDL-5,ERJ-175,https://www.airlines-manager.com/network/showline/51552952,https://www.airlines-manager.com/network/showflight/57632964555,https://www.airlines-manager.com/aircraft/show/123133603,4:00,12:59,112,"267,104$","230,795$","$2,060.67","$25,691.47"
ORD - EUG,57655460120,O-EUG-BDL-1,737-900ER,https://www.airlines-manager.com/network/showline/51552952,https://www.airlines-manager.com/network/showflight/57655460120,https://www.airlines-manager.com/aircraft/show/123133559,13:00,21:59,320,"568,293$","506,021$","$1,581.32","$56,328.87"
ORD - EUG,57665599702,O-EUG-BDL-4,737-900ER,https://www.airlines-manager.com/network/showline/51552952,https://www.airlines-manager.com/network/showflight/57665599702,https://www.airlines-manager.com/aircraft/show/123133556,18:45,3:44,320,"568,293$","506,021$","$1,581.32","$56,328.87"
ORD - EUG,57674153266,O-EUG-BDL-3,737-900ER,https://www.airlines-manager.com/network/showline/51552952,https://www.airlines-manager.com/network/showflight/57674153266,https://www.airlines-manager.com/aircraft/show/123133557,22:45,7:44,320,"568,293$","506,021$","$1,581.32","$56,328.87"
ORD - FAI,57632964568,O-FAI-MFR-5,A319-100,https://www.airlines-manager.com/network/showline/51552942,https://www.airlines-manager.com/network/showflight/57632964568,https://www.airlines-manager.com/aircraft/show/123232506,2:15,15:14,198,"586,576$","527,359$","$2,663.43","$40,618.15"
ORD - FAI,57651685723,O-FAI-MFR-1,A321-200,https://www.airlines-manager.com/network/showline/51552942,https://www.airlines-manager.com/network/showflight/57651685723,https://www.airlines-manager.com/aircraft/show/123232513,11:30,0:29,310,"783,964$","710,093$","$2,290.62","$54,692.66"
ORD - FAI,57655460201,O-FAI-MFR-2,A321-200,https://www.airlines-manager.com/network/showline/51552942,https://www.airlines-manager.com/network/showflight/57655460201,https://www.airlines-manager.com/aircraft/show/123232512,13:30,2:29,310,"783,964$","710,093$","$2,290.62","$54,692.66"
ORD - FAI,57671659197,O-FAI-MFR-3,A321-200,https://www.airlines-manager.com/network/showline/51552942,https://www.airlines-manager.com/network/showflight/57671659197,https://www.airlines-manager.com/aircraft/show/123232511,20:30,9:29,310,"783,964$","710,093$","$2,290.62","$54,692.66"
ORD - FAI,57674153243,O-FAI-MFR-4,A321-200,https://www.airlines-manager.com/network/showline/51552942,https://www.airlines-manager.com/network/showflight/57674153243,https://www.airlines-manager.com/aircraft/show/123032787,22:30,11:29,310,"783,964$","710,093$","$2,290.62","$54,692.66"
ORD - FAT,57632964328,O-FAT-AUS-4,737-900ER,https://www.airlines-manager.com/network/showline/51427539,https://www.airlines-manager.com/network/showflight/57632964328,https://www.airlines-manager.com/aircraft/show/122805428,1:15,9:59,320,"554,465$","492,169$","$1,538.03","$56,355.23"
ORD - FAT,57651685650,O-FAT-AUS-1,737-900ER,https://www.airlines-manager.com/network/showline/51427539,https://www.airlines-manager.com/network/showflight/57651685650,https://www.airlines-manager.com/aircraft/show/122805431,11:00,19:44,320,"554,465$","492,169$","$1,538.03","$56,355.23"
ORD - FAT,57655460119,O-FAT-AUS-2,737-900ER,https://www.airlines-manager.com/network/showline/51427539,https://www.airlines-manager.com/network/showflight/57655460119,https://www.airlines-manager.com/aircraft/show/122805430,13:00,21:44,320,"554,465$","492,169$","$1,538.03","$56,355.23"
ORD - FAT,57665599653,O-FAT-AUS-5,A319-100,https://www.airlines-manager.com/network/showline/51427539,https://www.airlines-manager.com/network/showflight/57665599653,https://www.airlines-manager.com/aircraft/show/122771598,18:15,2:59,198,"417,886$","373,594$","$1,886.84","$42,777.94"
ORD - FAT,57674153322,O-FAT-AUS-3,737-900ER,https://www.airlines-manager.com/network/showline/51427539,https://www.airlines-manager.com/network/showflight/57674153322,https://www.airlines-manager.com/aircraft/show/122805429,23:15,7:59,320,"554,465$","492,169$","$1,538.03","$56,355.23"
ORD - FLL,57637373055,O-SJD-FLL-5,A321neo,https://www.airlines-manager.com/network/showline/51097513,https://www.airlines-manager.com/network/showflight/57637373055,https://www.airlines-manager.com/aircraft/show/121813382,4:15,10:59,338,"461,039$","411,813$","$1,218.38","$61,160.35"
ORD - FLL,57640828155,O-SJD-FLL-4,A321neo,https://www.airlines-manager.com/network/showline/51097513,https://www.airlines-manager.com/network/showflight/57640828155,https://www.airlines-manager.com/aircraft/show/121813383,7:00,13:44,338,"461,039$","411,813$","$1,218.38","$61,160.35"
ORD - FLL,57651685579,O-SJD-FLL-2,A321neo,https://www.airlines-manager.com/network/showline/51097513,https://www.airlines-manager.com/network/showflight/57651685579,https://www.airlines-manager.com/aircraft/show/121813385,11:00,17:44,338,"461,039$","411,813$","$1,218.38","$61,160.35"
ORD - FLL,57655460051,O-SJD-FLL-3,A321neo,https://www.airlines-manager.com/network/showline/51097513,https://www.airlines-manager.com/network/showflight/57655460051,https://www.airlines-manager.com/aircraft/show/121813384,13:00,19:44,338,"461,039$","411,813$","$1,218.38","$61,160.35"
ORD - FLL,57674153152,O-SJD-FLL-1,A321neo,https://www.airlines-manager.com/network/showline/51097513,https://www.airlines-manager.com/network/showflight/57674153152,https://www.airlines-manager.com/aircraft/show/121813386,22:00,4:44,338,"461,039$","411,813$","$1,218.38","$61,160.35"
ORD - GDL,57632964311,O-YVR-GDL-4,757-300,https://www.airlines-manager.com/network/showline/50984857,https://www.airlines-manager.com/network/showflight/57632964311,https://www.airlines-manager.com/aircraft/show/121383382,1:15,9:59,400,"718,146$","644,547$","$1,611.37","$73,803.09"
ORD - GDL,57632964312,O-YVR-GDL-5,757-300,https://www.airlines-manager.com/network/showline/50984857,https://www.airlines-manager.com/network/showflight/57632964312,https://www.airlines-manager.com/aircraft/show/121383381,3:15,11:59,400,"718,146$","644,547$","$1,611.37","$73,803.09"
ORD - GDL,57651685596,O-YVR-GDL-2,757-300,https://www.airlines-manager.com/network/showline/50984857,https://www.airlines-manager.com/network/showflight/57651685596,https://www.airlines-manager.com/aircraft/show/121383384,11:00,19:44,400,"718,146$","644,547$","$1,611.37","$73,803.09"
ORD - GDL,57655460071,O-YVR-GDL-3,757-300,https://www.airlines-manager.com/network/showline/50984857,https://www.airlines-manager.com/network/showflight/57655460071,https://www.airlines-manager.com/aircraft/show/121383383,13:00,21:44,400,"718,146$","644,547$","$1,611.37","$73,803.09"
ORD - GDL,57675937090,O-YVR-GDL-1,757-300,https://www.airlines-manager.com/network/showline/50984857,https://www.airlines-manager.com/network/showflight/57675937090,https://www.airlines-manager.com/aircraft/show/121383385,23:45,8:29,328,"607,712$","538,161$","$1,640.73","$61,621.49"
ORD - GEG,57632964265,O-GEG-ABQ-2,737-900ER,https://www.airlines-manager.com/network/showline/51552836,https://www.airlines-manager.com/network/showflight/57632964265,https://www.airlines-manager.com/aircraft/show/123133562,1:00,8:59,320,"500,847$","442,165$","$1,381.77","$55,386.01"
ORD - GEG,57637373105,O-GEG-ABQ-4,737-900ER,https://www.airlines-manager.com/network/showline/51552836,https://www.airlines-manager.com/network/showflight/57637373105,https://www.airlines-manager.com/aircraft/show/123133560,4:30,12:29,320,"500,847$","442,165$","$1,381.77","$55,386.01"
ORD - GEG,57651685718,O-GEG-ABQ-1,737-900ER,https://www.airlines-manager.com/network/showline/51552836,https://www.airlines-manager.com/network/showflight/57651685718,https://www.airlines-manager.com/aircraft/show/123133563,11:30,19:29,320,"500,847$","442,165$","$1,381.77","$55,386.01"
ORD - GEG,57665599673,O-GEG-ABQ-3,737-900ER,https://www.airlines-manager.com/network/showline/51552836,https://www.airlines-manager.com/network/showflight/57665599673,https://www.airlines-manager.com/aircraft/show/123133561,18:30,2:29,320,"500,847$","442,165$","$1,381.77","$55,386.01"
ORD - GEG,57671659314,O-GEG-ABQ-5,A319-100,https://www.airlines-manager.com/network/showline/51552836,https://www.airlines-manager.com/network/showflight/57671659314,https://www.airlines-manager.com/aircraft/show/123232505,21:30,5:29,198,"378,287$","336,777$","$1,700.89","$42,185.01"
ORD - IAD,57637373104,O-YEG-YUL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202029,https://www.airlines-manager.com/network/showflight/57637373104,https://www.airlines-manager.com/aircraft/show/122278401,4:30,8:59,320,"276,074$","225,496$",$704.68,"$50,296.51"
ORD - IAD,57644525216,O-YEG-YUL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202029,https://www.airlines-manager.com/network/showflight/57644525216,https://www.airlines-manager.com/aircraft/show/122278397,8:15,12:44,320,"276,074$","225,496$",$704.68,"$50,296.51"
ORD - IAD,57655460029,O-YEG-YUL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202029,https://www.airlines-manager.com/network/showflight/57655460029,https://www.airlines-manager.com/aircraft/show/122278398,12:45,17:14,320,"276,074$","225,496$",$704.68,"$50,296.51"
ORD - IAD,57665599517,O-YEG-YUL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202029,https://www.airlines-manager.com/network/showflight/57665599517,https://www.airlines-manager.com/aircraft/show/122278399,17:15,21:44,320,"276,074$","225,496$",$704.68,"$50,296.51"
ORD - IAD,57671659249,O-YEG-YUL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202029,https://www.airlines-manager.com/network/showflight/57671659249,https://www.airlines-manager.com/aircraft/show/122278400,21:00,1:29,320,"276,074$","225,496$",$704.68,"$50,296.51"
ORD - IND,57637373127,O-BWI-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202035,https://www.airlines-manager.com/network/showflight/57637373127,https://www.airlines-manager.com/aircraft/show/122278396,4:45,7:29,320,"100,552$","62,181$",$194.32,"$22,749.15"
ORD - IND,57655460026,O-BWI-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202035,https://www.airlines-manager.com/network/showflight/57655460026,https://www.airlines-manager.com/aircraft/show/122278392,12:45,15:29,320,"100,552$","62,181$",$194.32,"$22,749.15"
ORD - IND,57662009306,O-BWI-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202035,https://www.airlines-manager.com/network/showflight/57662009306,https://www.airlines-manager.com/aircraft/show/122278393,16:00,18:44,320,"100,552$","62,181$",$194.32,"$22,749.15"
ORD - IND,57668758427,O-BWI-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202035,https://www.airlines-manager.com/network/showflight/57668758427,https://www.airlines-manager.com/aircraft/show/122278394,20:15,22:59,320,"100,552$","62,181$",$194.32,"$22,749.15"
ORD - IND,57674153321,O-BWI-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202035,https://www.airlines-manager.com/network/showflight/57674153321,https://www.airlines-manager.com/aircraft/show/122278395,23:15,1:59,305,"97,653$","59,353$",$194.60,"$21,714.51"
ORD - JAC,57637373088,O-SNA-BUR-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369093,https://www.airlines-manager.com/network/showflight/57637373088,https://www.airlines-manager.com/aircraft/show/122598448,4:30,10:59,272,"371,377$","337,014$","$1,239.02","$51,981.59"
ORD - JAC,57651685557,O-SNA-BUR-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369093,https://www.airlines-manager.com/network/showflight/57651685557,https://www.airlines-manager.com/aircraft/show/122598446,11:00,17:29,272,"371,377$","337,014$","$1,239.02","$51,981.59"
ORD - JAC,57651685558,O-SNA-BUR-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369093,https://www.airlines-manager.com/network/showflight/57651685558,https://www.airlines-manager.com/aircraft/show/122598447,12:00,18:29,272,"371,377$","337,014$","$1,239.02","$51,981.59"
ORD - JAC,57668758343,O-SNA-BUR-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369093,https://www.airlines-manager.com/network/showflight/57668758343,https://www.airlines-manager.com/aircraft/show/122598444,19:45,2:14,272,"371,377$","337,014$","$1,239.02","$51,981.59"
ORD - JAC,57671659317,O-SNA-BUR-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369093,https://www.airlines-manager.com/network/showflight/57671659317,https://www.airlines-manager.com/aircraft/show/122598445,21:45,4:14,272,"371,377$","337,014$","$1,239.02","$51,981.59"
ORD - JAX,57632964669,O-JAX-BFF-2,A321neo,https://www.airlines-manager.com/network/showline/51552833,https://www.airlines-manager.com/network/showflight/57632964669,https://www.airlines-manager.com/aircraft/show/123232509,3:30,8:59,338,"373,724$","332,180$",$982.78,"$60,579.94"
ORD - JAX,57651685729,O-JAX-BFF-1,A321neo,https://www.airlines-manager.com/network/showline/51552833,https://www.airlines-manager.com/network/showflight/57651685729,https://www.airlines-manager.com/aircraft/show/123232510,11:45,17:14,338,"373,724$","332,180$",$982.78,"$60,579.94"
ORD - JAX,57662009349,O-JAX-BFF-4,A321neo,https://www.airlines-manager.com/network/showline/51552833,https://www.airlines-manager.com/network/showflight/57662009349,https://www.airlines-manager.com/aircraft/show/121813377,16:15,21:44,338,"373,724$","332,180$",$982.78,"$60,579.94"
ORD - JAX,57665599683,O-JAX-BFF-5,A319-100,https://www.airlines-manager.com/network/showline/51552833,https://www.airlines-manager.com/network/showflight/57665599683,https://www.airlines-manager.com/aircraft/show/123232507,18:30,23:59,198,"261,534$","227,396$","$1,148.46","$41,470.40"
ORD - JAX,57674153188,O-JAX-BFF-3,A321neo,https://www.airlines-manager.com/network/showline/51552833,https://www.airlines-manager.com/network/showflight/57674153188,https://www.airlines-manager.com/aircraft/show/123232508,22:15,3:44,338,"373,724$","332,180$",$982.78,"$60,579.94"
ORD - JFK,57644525171,O-SJD-FLL-1,A321neo,https://www.airlines-manager.com/network/showline/51097514,https://www.airlines-manager.com/network/showflight/57644525171,https://www.airlines-manager.com/aircraft/show/121813386,7:45,12:44,338,"349,136$","292,869$",$866.48,"$58,769.70"
ORD - JFK,57658665132,O-SJD-FLL-5,A321neo,https://www.airlines-manager.com/network/showline/51097514,https://www.airlines-manager.com/network/showflight/57658665132,https://www.airlines-manager.com/aircraft/show/121813382,14:15,19:14,338,"349,136$","292,869$",$866.48,"$58,769.70"
ORD - JFK,57662009404,O-SJD-FLL-4,A321neo,https://www.airlines-manager.com/network/showline/51097514,https://www.airlines-manager.com/network/showflight/57662009404,https://www.airlines-manager.com/aircraft/show/121813383,17:00,21:59,338,"349,136$","292,869$",$866.48,"$58,769.70"
ORD - JFK,57671659207,O-SJD-FLL-2,A321neo,https://www.airlines-manager.com/network/showline/51097514,https://www.airlines-manager.com/network/showflight/57671659207,https://www.airlines-manager.com/aircraft/show/121813385,20:45,1:44,338,"349,136$","292,869$",$866.48,"$58,769.70"
ORD - JFK,57674153250,O-SJD-FLL-3,A321neo,https://www.airlines-manager.com/network/showline/51097514,https://www.airlines-manager.com/network/showflight/57674153250,https://www.airlines-manager.com/aircraft/show/121813384,22:45,3:44,338,"349,136$","292,869$",$866.48,"$58,769.70"
ORD - LAS,57632964582,O-LAS-PHX-2,737-900ER,https://www.airlines-manager.com/network/showline/50984816,https://www.airlines-manager.com/network/showflight/57632964582,https://www.airlines-manager.com/aircraft/show/121383379,2:30,10:29,320,"510,022$","430,593$","$1,345.60","$53,936.49"
ORD - LAS,57637373103,O-LAS-PHX-4,737-900ER,https://www.airlines-manager.com/network/showline/50984816,https://www.airlines-manager.com/network/showflight/57637373103,https://www.airlines-manager.com/aircraft/show/121383377,4:30,12:29,320,"510,022$","430,593$","$1,345.60","$53,936.49"
ORD - LAS,57651685644,O-LAS-PHX-1,737-900ER,https://www.airlines-manager.com/network/showline/50984816,https://www.airlines-manager.com/network/showflight/57651685644,https://www.airlines-manager.com/aircraft/show/121383380,11:00,18:59,320,"510,022$","430,593$","$1,345.60","$53,936.49"
ORD - LAS,57658665237,O-LAS-PHX-6 B,A319-100,https://www.airlines-manager.com/network/showline/50984816,https://www.airlines-manager.com/network/showflight/57658665237,https://www.airlines-manager.com/aircraft/show/121383409,15:00,22:59,198,"384,665$","329,295$","$1,663.11","$41,247.81"
ORD - LAS,57665599699,O-LAS-PHX-3,737-900ER,https://www.airlines-manager.com/network/showline/50984816,https://www.airlines-manager.com/network/showflight/57665599699,https://www.airlines-manager.com/aircraft/show/121383378,18:45,2:44,320,"510,022$","430,593$","$1,345.60","$53,936.49"
ORD - LAS,57671659219,O-LAS-PHX-5,737-900ER,https://www.airlines-manager.com/network/showline/50984816,https://www.airlines-manager.com/network/showflight/57671659219,https://www.airlines-manager.com/aircraft/show/121383376,20:45,4:44,320,"510,022$","430,593$","$1,345.60","$53,936.49"
ORD - LAX,57632964366,O-LAX-SEA-2,757-300,https://www.airlines-manager.com/network/showline/50984815,https://www.airlines-manager.com/network/showflight/57632964366,https://www.airlines-manager.com/aircraft/show/121383389,1:30,10:14,400,"734,364$","641,084$","$1,602.71","$73,406.56"
ORD - LAX,57632964367,O-LAX-SEA-4,757-300,https://www.airlines-manager.com/network/showline/50984815,https://www.airlines-manager.com/network/showflight/57632964367,https://www.airlines-manager.com/aircraft/show/121383387,3:30,12:14,400,"734,364$","641,084$","$1,602.71","$73,406.56"
ORD - LAX,57658665194,O-LAX-SEA-1,757-300,https://www.airlines-manager.com/network/showline/50984815,https://www.airlines-manager.com/network/showflight/57658665194,https://www.airlines-manager.com/aircraft/show/121383390,15:00,23:44,400,"734,364$","641,084$","$1,602.71","$73,406.56"
ORD - LAX,57662009413,O-LAX-SEA-3,757-300,https://www.airlines-manager.com/network/showline/50984815,https://www.airlines-manager.com/network/showflight/57662009413,https://www.airlines-manager.com/aircraft/show/121383388,17:00,1:44,400,"734,364$","641,084$","$1,602.71","$73,406.56"
ORD - LAX,57668758237,O-LAX-SEA-5,757-300,https://www.airlines-manager.com/network/showline/50984815,https://www.airlines-manager.com/network/showflight/57668758237,https://www.airlines-manager.com/aircraft/show/121383386,19:00,3:44,400,"734,364$","641,084$","$1,602.71","$73,406.56"
ORD - LGB,57632964007,O-RNO-LGB-1,737-900ER,https://www.airlines-manager.com/network/showline/51202005,https://www.airlines-manager.com/network/showflight/57632964007,https://www.airlines-manager.com/aircraft/show/122278406,0:15,8:59,320,"554,757$","491,337$","$1,535.43","$56,259.96"
ORD - LGB,57632964008,O-RNO-LGB-2,737-900ER,https://www.airlines-manager.com/network/showline/51202005,https://www.airlines-manager.com/network/showflight/57632964008,https://www.airlines-manager.com/aircraft/show/122278405,2:15,10:59,320,"554,757$","491,337$","$1,535.43","$56,259.96"
ORD - LGB,57655460112,O-RNO-LGB-5,737-900ER,https://www.airlines-manager.com/network/showline/51202005,https://www.airlines-manager.com/network/showflight/57655460112,https://www.airlines-manager.com/aircraft/show/122278402,13:00,21:44,320,"554,757$","491,337$","$1,535.43","$56,259.96"
ORD - LGB,57662009250,O-RNO-LGB-3,737-900ER,https://www.airlines-manager.com/network/showline/51202005,https://www.airlines-manager.com/network/showflight/57662009250,https://www.airlines-manager.com/aircraft/show/122278404,15:45,0:29,320,"554,757$","491,337$","$1,535.43","$56,259.96"
ORD - LGB,57665599574,O-RNO-LGB-4,737-900ER,https://www.airlines-manager.com/network/showline/51202005,https://www.airlines-manager.com/network/showflight/57665599574,https://www.airlines-manager.com/aircraft/show/122278403,17:45,2:29,320,"554,757$","491,337$","$1,535.43","$56,259.96"
ORD - MCI,57648263006,O-PSP-MEM-1,A321-200,https://www.airlines-manager.com/network/showline/51427554,https://www.airlines-manager.com/network/showflight/57648263006,https://www.airlines-manager.com/aircraft/show/122771608,9:15,12:59,310,"198,340$","161,909$",$522.29,"$43,368.48"
ORD - MCI,57655460199,O-PSP-MEM-4,A321-200,https://www.airlines-manager.com/network/showline/51427554,https://www.airlines-manager.com/network/showflight/57655460199,https://www.airlines-manager.com/aircraft/show/122771605,13:30,17:14,310,"198,340$","161,909$",$522.29,"$43,368.48"
ORD - MCI,57658665233,O-PSP-MEM-3,A321-200,https://www.airlines-manager.com/network/showline/51427554,https://www.airlines-manager.com/network/showflight/57658665233,https://www.airlines-manager.com/aircraft/show/122771606,15:00,18:44,310,"198,340$","161,909$",$522.29,"$43,368.48"
ORD - MCI,57662009382,O-PSP-MEM-5,A321-200,https://www.airlines-manager.com/network/showline/51427554,https://www.airlines-manager.com/network/showflight/57662009382,https://www.airlines-manager.com/aircraft/show/122771604,16:30,20:14,310,"198,340$","161,909$",$522.29,"$43,368.48"
ORD - MCI,57674153278,O-PSP-MEM-2,A321-200,https://www.airlines-manager.com/network/showline/51427554,https://www.airlines-manager.com/network/showflight/57674153278,https://www.airlines-manager.com/aircraft/show/122771607,22:45,2:29,310,"198,340$","161,909$",$522.29,"$43,368.48"
ORD - MCO,57644525214,O-LAX-SEA-1,757-300,https://www.airlines-manager.com/network/showline/50984818,https://www.airlines-manager.com/network/showflight/57644525214,https://www.airlines-manager.com/aircraft/show/121383390,8:15,14:14,400,"486,278$","419,311$","$1,048.28","$70,079.83"
ORD - MCO,57651685597,O-LAX-SEA-3,757-300,https://www.airlines-manager.com/network/showline/50984818,https://www.airlines-manager.com/network/showflight/57651685597,https://www.airlines-manager.com/aircraft/show/121383388,11:00,16:59,400,"486,278$","419,311$","$1,048.28","$70,079.83"
ORD - MCO,57655460072,O-LAX-SEA-5,757-300,https://www.airlines-manager.com/network/showline/50984818,https://www.airlines-manager.com/network/showflight/57655460072,https://www.airlines-manager.com/aircraft/show/121383386,13:00,18:59,400,"486,278$","419,311$","$1,048.28","$70,079.83"
ORD - MCO,57668758317,O-LAX-SEA-2,757-300,https://www.airlines-manager.com/network/showline/50984818,https://www.airlines-manager.com/network/showflight/57668758317,https://www.airlines-manager.com/aircraft/show/121383389,19:30,1:29,400,"486,278$","419,311$","$1,048.28","$70,079.83"
ORD - MCO,57671659291,O-LAX-SEA-4,757-300,https://www.airlines-manager.com/network/showline/50984818,https://www.airlines-manager.com/network/showflight/57671659291,https://www.airlines-manager.com/aircraft/show/121383387,21:30,3:29,368,"463,265$","397,133$","$1,079.17","$66,373.20"
ORD - MEM,57637373174,O-PSP-MEM-1,A321-200,https://www.airlines-manager.com/network/showline/51427555,https://www.airlines-manager.com/network/showflight/57637373174,https://www.airlines-manager.com/aircraft/show/122771608,5:15,9:14,310,"228,935$","190,728$",$615.25,"$47,881.51"
ORD - MEM,57648263021,O-PSP-MEM-4,A321-200,https://www.airlines-manager.com/network/showline/51427555,https://www.airlines-manager.com/network/showflight/57648263021,https://www.airlines-manager.com/aircraft/show/122771605,9:30,13:29,310,"228,935$","190,728$",$615.25,"$47,881.51"
ORD - MEM,57651685686,O-PSP-MEM-3,A321-200,https://www.airlines-manager.com/network/showline/51427555,https://www.airlines-manager.com/network/showflight/57651685686,https://www.airlines-manager.com/aircraft/show/122771606,11:00,14:59,310,"228,935$","190,728$",$615.25,"$47,881.51"
ORD - MEM,57655460017,O-PSP-MEM-5,A321-200,https://www.airlines-manager.com/network/showline/51427555,https://www.airlines-manager.com/network/showflight/57655460017,https://www.airlines-manager.com/aircraft/show/122771604,12:30,16:29,310,"228,935$","190,728$",$615.25,"$47,881.51"
ORD - MEM,57665599717,O-PSP-MEM-2,A321-200,https://www.airlines-manager.com/network/showline/51427555,https://www.airlines-manager.com/network/showflight/57665599717,https://www.airlines-manager.com/aircraft/show/122771607,18:45,22:44,310,"228,935$","190,728$",$615.25,"$47,881.51"
ORD - MEX,57632964623,O-MEX E,787-10,https://www.airlines-manager.com/network/showline/50926864,https://www.airlines-manager.com/network/showflight/57632964623,https://www.airlines-manager.com/aircraft/show/121207125,3:00,10:59,648,"1,066,967$","966,855$","$1,492.06","$121,109.19"
ORD - MEX,57651685587,O-MEX E,787-10,https://www.airlines-manager.com/network/showline/50926864,https://www.airlines-manager.com/network/showflight/57651685587,https://www.airlines-manager.com/aircraft/show/121207125,11:00,18:59,648,"1,066,967$","966,855$","$1,492.06","$121,109.19"
ORD - MEX,57668758234,O-MEX E,787-10,https://www.airlines-manager.com/network/showline/50926864,https://www.airlines-manager.com/network/showflight/57668758234,https://www.airlines-manager.com/aircraft/show/121207125,19:00,2:59,648,"1,066,967$","966,855$","$1,492.06","$121,109.19"
ORD - MFR,57632964135,O-FAI-MFR-1,A321-200,https://www.airlines-manager.com/network/showline/51552943,https://www.airlines-manager.com/network/showflight/57632964135,https://www.airlines-manager.com/aircraft/show/123232513,0:30,9:29,310,"565,278$","509,400$","$1,643.23","$56,705.01"
ORD - MFR,57632964136,O-FAI-MFR-2,A321-200,https://www.airlines-manager.com/network/showline/51552943,https://www.airlines-manager.com/network/showflight/57632964136,https://www.airlines-manager.com/aircraft/show/123232512,2:30,11:29,310,"565,278$","509,400$","$1,643.23","$56,705.01"
ORD - MFR,57651685722,O-FAI-MFR-3,A321-200,https://www.airlines-manager.com/network/showline/51552943,https://www.airlines-manager.com/network/showflight/57651685722,https://www.airlines-manager.com/aircraft/show/123232511,11:30,20:29,310,"565,278$","509,400$","$1,643.23","$56,705.01"
ORD - MFR,57655460200,O-FAI-MFR-4,A321-200,https://www.airlines-manager.com/network/showline/51552943,https://www.airlines-manager.com/network/showflight/57655460200,https://www.airlines-manager.com/aircraft/show/123032787,13:30,22:29,310,"565,278$","509,400$","$1,643.23","$56,705.01"
ORD - MFR,57665599532,O-FAI-MFR-5,A319-100,https://www.airlines-manager.com/network/showline/51552943,https://www.airlines-manager.com/network/showflight/57665599532,https://www.airlines-manager.com/aircraft/show/123232506,17:15,2:14,198,"425,611$","380,831$","$1,923.39","$42,393.06"
ORD - MKE,57632964452,O-YEG-YUL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202032,https://www.airlines-manager.com/network/showflight/57632964452,https://www.airlines-manager.com/aircraft/show/122278400,1:30,3:59,320,"77,521$","42,051$",$131.41,"$16,933.29"
ORD - MKE,57648262980,O-YEG-YUL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202032,https://www.airlines-manager.com/network/showflight/57648262980,https://www.airlines-manager.com/aircraft/show/122278401,9:00,11:29,320,"77,521$","42,051$",$131.41,"$16,933.29"
ORD - MKE,57655460028,O-YEG-YUL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202032,https://www.airlines-manager.com/network/showflight/57655460028,https://www.airlines-manager.com/aircraft/show/122278397,12:45,15:14,320,"77,521$","42,051$",$131.41,"$16,933.29"
ORD - MKE,57665599516,O-YEG-YUL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202032,https://www.airlines-manager.com/network/showflight/57665599516,https://www.airlines-manager.com/aircraft/show/122278398,17:15,19:44,320,"77,521$","42,051$",$131.41,"$16,933.29"
ORD - MKE,57671659333,O-YEG-YUL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202032,https://www.airlines-manager.com/network/showflight/57671659333,https://www.airlines-manager.com/aircraft/show/122278399,21:45,0:14,320,"77,521$","42,051$",$131.41,"$16,933.29"
ORD - MSP,57637373167,O-ATL-YYZ-5,A321neo,https://www.airlines-manager.com/network/showline/51097519,https://www.airlines-manager.com/network/showflight/57637373167,https://www.airlines-manager.com/aircraft/show/115400545,5:15,8:44,338,"192,452$","152,247$",$450.43,"$43,707.27"
ORD - MSP,57651685575,O-ATL-YYZ-4,A321neo,https://www.airlines-manager.com/network/showline/51097519,https://www.airlines-manager.com/network/showflight/57651685575,https://www.airlines-manager.com/aircraft/show/121813378,11:00,14:29,338,"192,452$","152,247$",$450.43,"$43,707.27"
ORD - MSP,57658665163,O-ATL-YYZ-3,A321neo,https://www.airlines-manager.com/network/showline/51097519,https://www.airlines-manager.com/network/showflight/57658665163,https://www.airlines-manager.com/aircraft/show/121813379,14:45,18:14,338,"192,452$","152,247$",$450.43,"$43,707.27"
ORD - MSP,57668758286,O-ATL-YYZ-1,A321neo,https://www.airlines-manager.com/network/showline/51097519,https://www.airlines-manager.com/network/showflight/57668758286,https://www.airlines-manager.com/aircraft/show/121813381,19:15,22:44,338,"192,452$","152,247$",$450.43,"$43,707.27"
ORD - MSP,57671659268,O-ATL-YYZ-2,A321neo,https://www.airlines-manager.com/network/showline/51097519,https://www.airlines-manager.com/network/showflight/57671659268,https://www.airlines-manager.com/aircraft/show/121813380,21:15,0:44,338,"192,452$","152,247$",$450.43,"$43,707.27"
ORD - MSY,57632964706,O-MSY-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/51427544,https://www.airlines-manager.com/network/showflight/57632964706,https://www.airlines-manager.com/aircraft/show/122805425,4:00,9:14,320,"341,742$","292,357$",$913.62,"$55,864.39"
ORD - MSY,57644525272,O-MSY-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/51427544,https://www.airlines-manager.com/network/showflight/57644525272,https://www.airlines-manager.com/aircraft/show/122805426,8:45,13:59,320,"341,742$","292,357$",$913.62,"$55,864.39"
ORD - MSY,57658665139,O-MSY-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/51427544,https://www.airlines-manager.com/network/showflight/57658665139,https://www.airlines-manager.com/aircraft/show/122805427,14:15,19:29,320,"341,742$","292,357$",$913.62,"$55,864.39"
ORD - MSY,57668758371,O-MSY-RDU-5,A319-100,https://www.airlines-manager.com/network/showline/51427544,https://www.airlines-manager.com/network/showflight/57668758371,https://www.airlines-manager.com/aircraft/show/122771597,19:45,1:14,198,"260,466$","226,201$","$1,142.43","$41,252.46"
ORD - MSY,57675937099,O-MSY-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/51427544,https://www.airlines-manager.com/network/showflight/57675937099,https://www.airlines-manager.com/aircraft/show/122390305,23:45,4:59,320,"341,742$","292,357$",$913.62,"$55,864.39"
ORD - MTY,57632964547,O-JAX-BFF-1,A321neo,https://www.airlines-manager.com/network/showline/51552840,https://www.airlines-manager.com/network/showflight/57632964547,https://www.airlines-manager.com/aircraft/show/123232510,2:15,9:29,338,"506,321$","457,703$","$1,354.15","$63,276.91"
ORD - MTY,57648262973,O-JAX-BFF-4,A321neo,https://www.airlines-manager.com/network/showline/51552840,https://www.airlines-manager.com/network/showflight/57648262973,https://www.airlines-manager.com/aircraft/show/121813377,9:00,16:14,338,"506,321$","457,703$","$1,354.15","$63,276.91"
ORD - MTY,57651685709,O-JAX-BFF-5,A319-100,https://www.airlines-manager.com/network/showline/51552840,https://www.airlines-manager.com/network/showflight/57651685709,https://www.airlines-manager.com/aircraft/show/123232507,11:15,18:29,198,"347,370$","307,103$","$1,551.03","$42,456.64"
ORD - MTY,57658665185,O-JAX-BFF-3,A321neo,https://www.airlines-manager.com/network/showline/51552840,https://www.airlines-manager.com/network/showflight/57658665185,https://www.airlines-manager.com/aircraft/show/123232508,15:00,22:14,338,"506,321$","457,703$","$1,354.15","$63,276.91"
ORD - MTY,57668758419,O-JAX-BFF-2,A321neo,https://www.airlines-manager.com/network/showline/51552840,https://www.airlines-manager.com/network/showflight/57668758419,https://www.airlines-manager.com/aircraft/show/123232509,20:15,3:29,338,"506,321$","457,703$","$1,354.15","$63,276.91"
ORD - OAK,57632964308,O-OAK-SMF-2,A321neo,https://www.airlines-manager.com/network/showline/51097516,https://www.airlines-manager.com/network/showflight/57632964308,https://www.airlines-manager.com/aircraft/show/121813395,1:15,10:29,338,"632,876$","575,553$","$1,702.82","$62,334.26"
ORD - OAK,57632964309,O-OAK-SMF-5,A321neo,https://www.airlines-manager.com/network/showline/51097516,https://www.airlines-manager.com/network/showflight/57632964309,https://www.airlines-manager.com/aircraft/show/121813392,3:15,12:29,338,"632,876$","575,553$","$1,702.82","$62,334.26"
ORD - OAK,57651685584,O-OAK-SMF-1,A321neo,https://www.airlines-manager.com/network/showline/51097516,https://www.airlines-manager.com/network/showflight/57651685584,https://www.airlines-manager.com/aircraft/show/121813396,11:00,20:14,338,"632,876$","575,553$","$1,702.82","$62,334.26"
ORD - OAK,57655460056,O-OAK-SMF-4,A321neo,https://www.airlines-manager.com/network/showline/51097516,https://www.airlines-manager.com/network/showflight/57655460056,https://www.airlines-manager.com/aircraft/show/121813393,13:00,22:14,338,"632,876$","575,553$","$1,702.82","$62,334.26"
ORD - OAK,57674153284,O-OAK-SMF-3,A321neo,https://www.airlines-manager.com/network/showline/51097516,https://www.airlines-manager.com/network/showflight/57674153284,https://www.airlines-manager.com/aircraft/show/121813394,23:00,8:14,338,"632,876$","575,553$","$1,702.82","$62,334.26"
ORD - ONT,57632964495,O-SJC-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/51202009,https://www.airlines-manager.com/network/showflight/57632964495,https://www.airlines-manager.com/aircraft/show/122278411,1:45,10:29,320,"551,827$","486,749$","$1,521.09","$55,734.62"
ORD - ONT,57632964496,O-SJC-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/51202009,https://www.airlines-manager.com/network/showflight/57632964496,https://www.airlines-manager.com/aircraft/show/122278410,3:45,12:29,320,"551,827$","486,749$","$1,521.09","$55,734.62"
ORD - ONT,57658665074,O-SJC-ONT-5,737-900ER,https://www.airlines-manager.com/network/showline/51202009,https://www.airlines-manager.com/network/showflight/57658665074,https://www.airlines-manager.com/aircraft/show/122278407,14:00,22:44,320,"551,827$","486,749$","$1,521.09","$55,734.62"
ORD - ONT,57662009374,O-SJC-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/51202009,https://www.airlines-manager.com/network/showflight/57662009374,https://www.airlines-manager.com/aircraft/show/122278409,16:30,1:14,320,"551,827$","486,749$","$1,521.09","$55,734.62"
ORD - ONT,57665599672,O-SJC-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/51202009,https://www.airlines-manager.com/network/showflight/57665599672,https://www.airlines-manager.com/aircraft/show/122278408,18:30,3:14,320,"551,827$","486,749$","$1,521.09","$55,734.62"
ORD - PBI,57632964553,O-MSY-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/51427546,https://www.airlines-manager.com/network/showflight/57632964553,https://www.airlines-manager.com/aircraft/show/122805426,2:15,8:44,320,"410,736$","356,202$","$1,113.13","$54,941.18"
ORD - PBI,57640828168,O-MSY-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/51427546,https://www.airlines-manager.com/network/showflight/57640828168,https://www.airlines-manager.com/aircraft/show/122805427,7:00,13:29,320,"410,736$","356,202$","$1,113.13","$54,941.18"
ORD - PBI,57655460187,O-MSY-RDU-5,A319-100,https://www.airlines-manager.com/network/showline/51427546,https://www.airlines-manager.com/network/showflight/57655460187,https://www.airlines-manager.com/aircraft/show/122771597,13:15,19:44,198,"310,647$","272,458$","$1,376.05","$42,024.37"
ORD - PBI,57665599518,O-MSY-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/51427546,https://www.airlines-manager.com/network/showflight/57665599518,https://www.airlines-manager.com/aircraft/show/122390305,17:15,23:44,320,"410,736$","356,202$","$1,113.13","$54,941.18"
ORD - PBI,57671659301,O-MSY-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/51427546,https://www.airlines-manager.com/network/showflight/57671659301,https://www.airlines-manager.com/aircraft/show/122805425,21:30,3:59,320,"410,736$","356,202$","$1,113.13","$54,941.18"
ORD - PDX,57632964493,O-PDX-SAN-2,737-900ER,https://www.airlines-manager.com/network/showline/50984820,https://www.airlines-manager.com/network/showflight/57632964493,https://www.airlines-manager.com/aircraft/show/121383374,1:45,10:29,320,"557,358$","489,633$","$1,530.10","$56,064.85"
ORD - PDX,57632964494,O-PDX-SAN-4,737-900ER,https://www.airlines-manager.com/network/showline/50984820,https://www.airlines-manager.com/network/showflight/57632964494,https://www.airlines-manager.com/aircraft/show/121383372,3:45,12:29,320,"557,358$","489,633$","$1,530.10","$56,064.85"
ORD - PDX,57658665073,O-PDX-SAN-1,737-900ER,https://www.airlines-manager.com/network/showline/50984820,https://www.airlines-manager.com/network/showflight/57658665073,https://www.airlines-manager.com/aircraft/show/121383375,14:00,22:44,320,"557,358$","489,633$","$1,530.10","$56,064.85"
ORD - PDX,57662009341,O-PDX-SAN-6 B,A319-100,https://www.airlines-manager.com/network/showline/50984820,https://www.airlines-manager.com/network/showflight/57662009341,https://www.airlines-manager.com/aircraft/show/121383410,16:00,0:44,198,"420,196$","372,271$","$1,880.16","$42,626.45"
ORD - PDX,57662009342,O-PDX-SAN-3,737-900ER,https://www.airlines-manager.com/network/showline/50984820,https://www.airlines-manager.com/network/showflight/57662009342,https://www.airlines-manager.com/aircraft/show/121383373,17:00,1:44,320,"557,358$","489,633$","$1,530.10","$56,064.85"
ORD - PDX,57668758262,O-PDX-SAN-5,737-900ER,https://www.airlines-manager.com/network/showline/50984820,https://www.airlines-manager.com/network/showflight/57668758262,https://www.airlines-manager.com/aircraft/show/121383371,19:00,3:44,320,"557,358$","489,633$","$1,530.10","$56,064.85"
ORD - PHL,57644525218,O-RNO-LGB-5,737-900ER,https://www.airlines-manager.com/network/showline/51202010,https://www.airlines-manager.com/network/showflight/57644525218,https://www.airlines-manager.com/aircraft/show/122278402,8:15,12:59,320,"304,048$","250,679$",$783.37,"$52,960.35"
ORD - PHL,57651685645,O-RNO-LGB-3,737-900ER,https://www.airlines-manager.com/network/showline/51202010,https://www.airlines-manager.com/network/showflight/57651685645,https://www.airlines-manager.com/aircraft/show/122278404,11:00,15:44,320,"304,048$","250,679$",$783.37,"$52,960.35"
ORD - PHL,57655460113,O-RNO-LGB-4,737-900ER,https://www.airlines-manager.com/network/showline/51202010,https://www.airlines-manager.com/network/showflight/57655460113,https://www.airlines-manager.com/aircraft/show/122278403,13:00,17:44,320,"304,048$","250,679$",$783.37,"$52,960.35"
ORD - PHL,57665599721,O-SJC-BOS,ERJ-175,https://www.airlines-manager.com/network/showline/51202010,https://www.airlines-manager.com/network/showflight/57665599721,https://www.airlines-manager.com/aircraft/show/122320232,18:45,23:29,102,"135,842$","107,552$","$1,054.43","$22,722.25"
ORD - PHL,57668758327,O-RNO-LGB-1,737-900ER,https://www.airlines-manager.com/network/showline/51202010,https://www.airlines-manager.com/network/showflight/57668758327,https://www.airlines-manager.com/aircraft/show/122278406,19:30,0:14,320,"304,048$","250,679$",$783.37,"$52,960.35"
ORD - PHL,57671659300,O-RNO-LGB-2,737-900ER,https://www.airlines-manager.com/network/showline/51202010,https://www.airlines-manager.com/network/showflight/57671659300,https://www.airlines-manager.com/aircraft/show/122278405,21:30,2:14,320,"304,048$","250,679$",$783.37,"$52,960.35"
ORD - PHX,57632964605,O-LAS-PHX-3,737-900ER,https://www.airlines-manager.com/network/showline/50984819,https://www.airlines-manager.com/network/showflight/57632964605,https://www.airlines-manager.com/aircraft/show/121383378,2:45,10:29,320,"492,818$","420,732$","$1,314.79","$54,405.00"
ORD - PHX,57637373126,O-LAS-PHX-5,737-900ER,https://www.airlines-manager.com/network/showline/50984819,https://www.airlines-manager.com/network/showflight/57637373126,https://www.airlines-manager.com/aircraft/show/121383376,4:45,12:29,320,"492,818$","420,732$","$1,314.79","$54,405.00"
ORD - PHX,57651685643,O-LAS-PHX-2,737-900ER,https://www.airlines-manager.com/network/showline/50984819,https://www.airlines-manager.com/network/showflight/57651685643,https://www.airlines-manager.com/aircraft/show/121383379,11:00,18:44,320,"492,818$","420,732$","$1,314.79","$54,405.00"
ORD - PHX,57655460111,O-LAS-PHX-4,737-900ER,https://www.airlines-manager.com/network/showline/50984819,https://www.airlines-manager.com/network/showflight/57655460111,https://www.airlines-manager.com/aircraft/show/121383377,13:00,20:44,320,"492,818$","420,732$","$1,314.79","$54,405.00"
ORD - PHX,57668758263,O-LAS-PHX-1,737-900ER,https://www.airlines-manager.com/network/showline/50984819,https://www.airlines-manager.com/network/showflight/57668758263,https://www.airlines-manager.com/aircraft/show/121383380,19:00,2:44,320,"492,818$","420,732$","$1,314.79","$54,405.00"
ORD - PHX,57674153305,O-LAS-PHX-6 B,A319-100,https://www.airlines-manager.com/network/showline/50984819,https://www.airlines-manager.com/network/showflight/57674153305,https://www.airlines-manager.com/aircraft/show/121383409,23:00,6:44,198,"372,009$","321,652$","$1,624.51","$41,592.93"
ORD - PIT,57632964620,O-JAX-BFF-4,A321neo,https://www.airlines-manager.com/network/showline/51552834,https://www.airlines-manager.com/network/showflight/57632964620,https://www.airlines-manager.com/aircraft/show/121813377,3:00,6:44,338,"216,156$","180,148$",$532.98,"$48,253.93"
ORD - PIT,57637373176,O-JAX-BFF-5,A319-100,https://www.airlines-manager.com/network/showline/51552834,https://www.airlines-manager.com/network/showflight/57637373176,https://www.airlines-manager.com/aircraft/show/123232507,5:15,8:59,198,"150,536$","121,301$",$612.63,"$32,491.34"
ORD - PIT,57651685702,O-JAX-BFF-3,A321neo,https://www.airlines-manager.com/network/showline/51552834,https://www.airlines-manager.com/network/showflight/57651685702,https://www.airlines-manager.com/aircraft/show/123232508,11:15,14:59,338,"216,156$","180,148$",$532.98,"$48,253.93"
ORD - PIT,57662009366,O-JAX-BFF-2,A321neo,https://www.airlines-manager.com/network/showline/51552834,https://www.airlines-manager.com/network/showflight/57662009366,https://www.airlines-manager.com/aircraft/show/123232509,16:30,20:14,338,"216,156$","180,148$",$532.98,"$48,253.93"
ORD - PIT,57674153222,O-JAX-BFF-1,A321neo,https://www.airlines-manager.com/network/showline/51552834,https://www.airlines-manager.com/network/showflight/57674153222,https://www.airlines-manager.com/aircraft/show/123232510,22:30,2:14,338,"216,156$","180,148$",$532.98,"$48,253.93"
ORD - PSP,57632964591,O-PSP-MEM-2,A321-200,https://www.airlines-manager.com/network/showline/51427556,https://www.airlines-manager.com/network/showflight/57632964591,https://www.airlines-manager.com/aircraft/show/122771607,2:30,10:59,310,"534,197$","479,711$","$1,547.45","$56,547.47"
ORD - PSP,57655460161,O-PSP-MEM-1,A321-200,https://www.airlines-manager.com/network/showline/51427556,https://www.airlines-manager.com/network/showflight/57655460161,https://www.airlines-manager.com/aircraft/show/122771608,13:00,21:29,310,"534,197$","479,711$","$1,547.45","$56,547.47"
ORD - PSP,57665599527,O-PSP-MEM-4,A321-200,https://www.airlines-manager.com/network/showline/51427556,https://www.airlines-manager.com/network/showflight/57665599527,https://www.airlines-manager.com/aircraft/show/122771605,17:15,1:44,310,"534,197$","479,711$","$1,547.45","$56,547.47"
ORD - PSP,57665599528,O-PSP-MEM-3,A321-200,https://www.airlines-manager.com/network/showline/51427556,https://www.airlines-manager.com/network/showflight/57665599528,https://www.airlines-manager.com/aircraft/show/122771606,18:45,3:14,310,"534,197$","479,711$","$1,547.45","$56,547.47"
ORD - PSP,57668758435,O-PSP-MEM-5,A321-200,https://www.airlines-manager.com/network/showline/51427556,https://www.airlines-manager.com/network/showflight/57668758435,https://www.airlines-manager.com/aircraft/show/122771604,20:15,4:44,310,"534,197$","479,711$","$1,547.45","$56,547.47"
ORD - PVR,57632964357,O-YYC-SLC-1,A321neo,https://www.airlines-manager.com/network/showline/51097558,https://www.airlines-manager.com/network/showflight/57632964357,https://www.airlines-manager.com/aircraft/show/121813391,1:30,10:29,338,"619,880$","564,603$","$1,670.42","$62,850.06"
ORD - PVR,57632964358,O-YYC-SLC-4,A321neo,https://www.airlines-manager.com/network/showline/51097558,https://www.airlines-manager.com/network/showflight/57632964358,https://www.airlines-manager.com/aircraft/show/121813388,3:30,12:29,338,"619,880$","564,603$","$1,670.42","$62,850.06"
ORD - PVR,57651685580,O-YYC-SLC-3,A321neo,https://www.airlines-manager.com/network/showline/51097558,https://www.airlines-manager.com/network/showflight/57651685580,https://www.airlines-manager.com/aircraft/show/121813389,11:00,19:59,338,"619,880$","564,603$","$1,670.42","$62,850.06"
ORD - PVR,57655460053,O-YYC-SLC-5,A321neo,https://www.airlines-manager.com/network/showline/51097558,https://www.airlines-manager.com/network/showflight/57655460053,https://www.airlines-manager.com/aircraft/show/121813387,13:00,21:59,338,"619,880$","564,603$","$1,670.42","$62,850.06"
ORD - PVR,57665599593,O-YYC-SLC-2,A321neo,https://www.airlines-manager.com/network/showline/51097558,https://www.airlines-manager.com/network/showflight/57665599593,https://www.airlines-manager.com/aircraft/show/121813390,18:00,2:59,338,"619,880$","564,603$","$1,670.42","$62,850.06"
ORD - RDU,57632964348,O-MSY-RDU-5,A319-100,https://www.airlines-manager.com/network/showline/51427538,https://www.airlines-manager.com/network/showflight/57632964348,https://www.airlines-manager.com/aircraft/show/122771597,1:15,5:59,198,"227,145$","195,057$",$985.14,"$41,209.23"
ORD - RDU,57637373152,O-MSY-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/51427538,https://www.airlines-manager.com/network/showflight/57637373152,https://www.airlines-manager.com/aircraft/show/122390305,5:00,9:29,320,"296,849$","250,266$",$782.08,"$55,821.41"
ORD - RDU,57648263000,O-MSY-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/51427538,https://www.airlines-manager.com/network/showflight/57648263000,https://www.airlines-manager.com/aircraft/show/122805425,9:15,13:44,320,"296,849$","250,266$",$782.08,"$55,821.41"
ORD - RDU,57658665170,O-MSY-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/51427538,https://www.airlines-manager.com/network/showflight/57658665170,https://www.airlines-manager.com/aircraft/show/122805426,14:45,19:14,320,"296,849$","250,266$",$782.08,"$55,821.41"
ORD - RDU,57668758328,O-MSY-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/51427538,https://www.airlines-manager.com/network/showflight/57668758328,https://www.airlines-manager.com/aircraft/show/122805427,19:30,23:59,320,"296,849$","250,266$",$782.08,"$55,821.41"
ORD - RNO,57632964080,O-RNO-LGB-3,737-900ER,https://www.airlines-manager.com/network/showline/51202011,https://www.airlines-manager.com/network/showflight/57632964080,https://www.airlines-manager.com/aircraft/show/122278404,0:30,8:59,320,"541,593$","478,361$","$1,494.88","$56,388.33"
ORD - RNO,57632964083,O-RNO-LGB-4,737-900ER,https://www.airlines-manager.com/network/showline/51202011,https://www.airlines-manager.com/network/showflight/57632964083,https://www.airlines-manager.com/aircraft/show/122278403,2:30,10:59,320,"541,593$","478,361$","$1,494.88","$56,388.33"
ORD - RNO,57651685646,O-RNO-LGB-1,737-900ER,https://www.airlines-manager.com/network/showline/51202011,https://www.airlines-manager.com/network/showflight/57651685646,https://www.airlines-manager.com/aircraft/show/122278406,11:00,19:29,320,"541,593$","478,361$","$1,494.88","$56,388.33"
ORD - RNO,57655460114,O-RNO-LGB-2,737-900ER,https://www.airlines-manager.com/network/showline/51202011,https://www.airlines-manager.com/network/showflight/57655460114,https://www.airlines-manager.com/aircraft/show/122278405,13:00,21:29,320,"541,593$","478,361$","$1,494.88","$56,388.33"
ORD - RNO,57671659334,O-RNO-LGB-5,737-900ER,https://www.airlines-manager.com/network/showline/51202011,https://www.airlines-manager.com/network/showflight/57671659334,https://www.airlines-manager.com/aircraft/show/122278402,21:45,6:14,320,"541,593$","478,361$","$1,494.88","$56,388.33"
ORD - RSW,57632964530,O-BWI-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202039,https://www.airlines-manager.com/network/showflight/57632964530,https://www.airlines-manager.com/aircraft/show/122278395,2:00,8:29,320,"403,635$","347,958$","$1,087.37","$53,669.61"
ORD - RSW,57644525157,O-BWI-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202039,https://www.airlines-manager.com/network/showflight/57644525157,https://www.airlines-manager.com/aircraft/show/122278396,7:30,13:59,320,"403,635$","347,958$","$1,087.37","$53,669.61"
ORD - RSW,57662009234,O-BWI-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202039,https://www.airlines-manager.com/network/showflight/57662009234,https://www.airlines-manager.com/aircraft/show/122278392,15:30,21:59,320,"403,635$","347,958$","$1,087.37","$53,669.61"
ORD - RSW,57665599701,O-BWI-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202039,https://www.airlines-manager.com/network/showflight/57665599701,https://www.airlines-manager.com/aircraft/show/122278393,18:45,1:14,320,"403,635$","347,958$","$1,087.37","$53,669.61"
ORD - RSW,57674153291,O-BWI-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202039,https://www.airlines-manager.com/network/showflight/57674153291,https://www.airlines-manager.com/aircraft/show/122278394,23:00,5:29,276,"369,701$","315,353$","$1,142.58","$48,640.57"
ORD - SAN,57632964201,O-PDX-SAN-6 B,A319-100,https://www.airlines-manager.com/network/showline/50984821,https://www.airlines-manager.com/network/showflight/57632964201,https://www.airlines-manager.com/aircraft/show/121383410,0:45,9:29,198,"419,974$","372,484$","$1,881.23","$42,650.84"
ORD - SAN,57632964203,O-PDX-SAN-3,737-900ER,https://www.airlines-manager.com/network/showline/50984821,https://www.airlines-manager.com/network/showflight/57632964203,https://www.airlines-manager.com/aircraft/show/121383373,1:45,10:29,320,"557,448$","490,339$","$1,532.31","$56,145.69"
ORD - SAN,57632964205,O-PDX-SAN-5,737-900ER,https://www.airlines-manager.com/network/showline/50984821,https://www.airlines-manager.com/network/showflight/57632964205,https://www.airlines-manager.com/aircraft/show/121383371,3:45,12:29,320,"557,448$","490,339$","$1,532.31","$56,145.69"
ORD - SAN,57651685641,O-PDX-SAN-2,737-900ER,https://www.airlines-manager.com/network/showline/50984821,https://www.airlines-manager.com/network/showflight/57651685641,https://www.airlines-manager.com/aircraft/show/121383374,11:00,19:44,320,"557,448$","490,339$","$1,532.31","$56,145.69"
ORD - SAN,57655460109,O-PDX-SAN-4,737-900ER,https://www.airlines-manager.com/network/showline/50984821,https://www.airlines-manager.com/network/showflight/57655460109,https://www.airlines-manager.com/aircraft/show/121383372,13:00,21:44,320,"557,448$","490,339$","$1,532.31","$56,145.69"
ORD - SAN,57674153263,O-PDX-SAN-1,737-900ER,https://www.airlines-manager.com/network/showline/50984821,https://www.airlines-manager.com/network/showflight/57674153263,https://www.airlines-manager.com/aircraft/show/121383375,22:45,7:29,320,"557,448$","490,339$","$1,532.31","$56,145.69"
ORD - SAT,57632964497,O-FAT-AUS-1,737-900ER,https://www.airlines-manager.com/network/showline/51427547,https://www.airlines-manager.com/network/showflight/57632964497,https://www.airlines-manager.com/aircraft/show/122805431,1:45,7:59,320,"388,994$","337,307$","$1,054.08","$54,113.42"
ORD - SAT,57632964498,O-FAT-AUS-2,737-900ER,https://www.airlines-manager.com/network/showline/51427547,https://www.airlines-manager.com/network/showflight/57632964498,https://www.airlines-manager.com/aircraft/show/122805430,3:45,9:59,320,"388,994$","337,307$","$1,054.08","$54,113.42"
ORD - SAT,57651685789,O-FAT-AUS-5,A319-100,https://www.airlines-manager.com/network/showline/51427547,https://www.airlines-manager.com/network/showflight/57651685789,https://www.airlines-manager.com/aircraft/show/122771598,12:00,18:14,198,"294,555$","258,430$","$1,305.20","$41,459.36"
ORD - SAT,57662009428,O-FAT-AUS-3,737-900ER,https://www.airlines-manager.com/network/showline/51427547,https://www.airlines-manager.com/network/showflight/57662009428,https://www.airlines-manager.com/aircraft/show/122805429,17:00,23:14,320,"388,994$","337,307$","$1,054.08","$54,113.42"
ORD - SAT,57668758265,O-FAT-AUS-4,737-900ER,https://www.airlines-manager.com/network/showline/51427547,https://www.airlines-manager.com/network/showflight/57668758265,https://www.airlines-manager.com/aircraft/show/122805428,19:00,1:14,320,"388,994$","337,307$","$1,054.08","$54,113.42"
ORD - SEA,57632964478,O-LAX-SEA-3,757-300,https://www.airlines-manager.com/network/showline/50984822,https://www.airlines-manager.com/network/showflight/57632964478,https://www.airlines-manager.com/aircraft/show/121383388,1:45,10:14,400,"718,707$","637,475$","$1,593.69","$75,144.40"
ORD - SEA,57632964479,O-LAX-SEA-5,757-300,https://www.airlines-manager.com/network/showline/50984822,https://www.airlines-manager.com/network/showflight/57632964479,https://www.airlines-manager.com/aircraft/show/121383386,3:45,12:14,400,"718,707$","637,475$","$1,593.69","$75,144.40"
ORD - SEA,57651685598,O-LAX-SEA-2,757-300,https://www.airlines-manager.com/network/showline/50984822,https://www.airlines-manager.com/network/showflight/57651685598,https://www.airlines-manager.com/aircraft/show/121383389,11:00,19:29,400,"718,707$","637,475$","$1,593.69","$75,144.40"
ORD - SEA,57655460073,O-LAX-SEA-4,757-300,https://www.airlines-manager.com/network/showline/50984822,https://www.airlines-manager.com/network/showflight/57655460073,https://www.airlines-manager.com/aircraft/show/121383387,13:00,21:29,400,"718,707$","637,475$","$1,593.69","$75,144.40"
ORD - SEA,57675937091,O-LAX-SEA-1,757-300,https://www.airlines-manager.com/network/showline/50984822,https://www.airlines-manager.com/network/showflight/57675937091,https://www.airlines-manager.com/aircraft/show/121383390,23:45,8:14,400,"718,707$","637,475$","$1,593.69","$75,144.40"
ORD - SFJ,57655460007,O-SFJ E,787-10,https://www.airlines-manager.com/network/showline/51645279,https://www.airlines-manager.com/network/showflight/57655460007,https://www.airlines-manager.com/aircraft/show/123404392,12:15,22:14,648,"1,297,499$","1,197,830$","$1,848.50","$119,982.97"
ORD - SFJ,57674153190,O-SFJ E,787-10,https://www.airlines-manager.com/network/showline/51645279,https://www.airlines-manager.com/network/showflight/57674153190,https://www.airlines-manager.com/aircraft/show/123404392,22:15,8:14,648,"1,297,499$","1,197,830$","$1,848.50","$119,982.97"
ORD - SJC,57632964325,O-SJC-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/51202007,https://www.airlines-manager.com/network/showflight/57632964325,https://www.airlines-manager.com/aircraft/show/122278409,1:15,10:29,320,"580,147$","512,484$","$1,601.51","$55,503.68"
ORD - SJC,57632964326,O-SJC-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/51202007,https://www.airlines-manager.com/network/showflight/57632964326,https://www.airlines-manager.com/aircraft/show/122278408,3:15,12:29,320,"580,147$","512,484$","$1,601.51","$55,503.68"
ORD - SJC,57632964327,O-SJC-BOS,ERJ-175,https://www.airlines-manager.com/network/showline/51202007,https://www.airlines-manager.com/network/showflight/57632964327,https://www.airlines-manager.com/aircraft/show/122320232,4:00,13:14,102,"255,757$","217,593$","$2,133.26","$23,566.03"
ORD - SJC,57651685648,O-SJC-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/51202007,https://www.airlines-manager.com/network/showflight/57651685648,https://www.airlines-manager.com/aircraft/show/122278411,11:00,20:14,320,"580,147$","512,484$","$1,601.51","$55,503.68"
ORD - SJC,57655460117,O-SJC-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/51202007,https://www.airlines-manager.com/network/showflight/57655460117,https://www.airlines-manager.com/aircraft/show/122278410,13:00,22:14,320,"580,147$","512,484$","$1,601.51","$55,503.68"
ORD - SJC,57674153265,O-SJC-ONT-5,737-900ER,https://www.airlines-manager.com/network/showline/51202007,https://www.airlines-manager.com/network/showflight/57674153265,https://www.airlines-manager.com/aircraft/show/122278407,22:45,7:59,320,"580,147$","512,484$","$1,601.51","$55,503.68"
ORD - SJD,57632964474,O-SJD-FLL-2,A321neo,https://www.airlines-manager.com/network/showline/51097559,https://www.airlines-manager.com/network/showflight/57632964474,https://www.airlines-manager.com/aircraft/show/121813385,1:45,10:44,338,"623,013$","567,939$","$1,680.29","$63,221.41"
ORD - SJD,57632964475,O-SJD-FLL-3,A321neo,https://www.airlines-manager.com/network/showline/51097559,https://www.airlines-manager.com/network/showflight/57632964475,https://www.airlines-manager.com/aircraft/show/121813384,3:45,12:44,338,"623,013$","567,939$","$1,680.29","$63,221.41"
ORD - SJD,57655460052,O-SJD-FLL-1,A321neo,https://www.airlines-manager.com/network/showline/51097559,https://www.airlines-manager.com/network/showflight/57655460052,https://www.airlines-manager.com/aircraft/show/121813386,13:00,21:59,338,"623,013$","567,939$","$1,680.29","$63,221.41"
ORD - SJD,57668758287,O-SJD-FLL-5,A321neo,https://www.airlines-manager.com/network/showline/51097559,https://www.airlines-manager.com/network/showflight/57668758287,https://www.airlines-manager.com/aircraft/show/121813382,19:15,4:14,338,"623,013$","567,939$","$1,680.29","$63,221.41"
ORD - SJD,57674153151,O-SJD-FLL-4,A321neo,https://www.airlines-manager.com/network/showline/51097559,https://www.airlines-manager.com/network/showflight/57674153151,https://www.airlines-manager.com/aircraft/show/121813383,22:00,6:59,338,"623,013$","567,939$","$1,680.29","$63,221.41"
ORD - SJU,57632964148,O-ATL-YYZ-2,A321neo,https://www.airlines-manager.com/network/showline/51097587,https://www.airlines-manager.com/network/showflight/57632964148,https://www.airlines-manager.com/aircraft/show/121813380,0:45,10:44,338,"698,683$","637,914$","$1,887.32","$63,897.90"
ORD - SJU,57651685571,O-ATL-YYZ-5,A321neo,https://www.airlines-manager.com/network/showline/51097587,https://www.airlines-manager.com/network/showflight/57651685571,https://www.airlines-manager.com/aircraft/show/115400545,11:00,20:59,338,"698,683$","637,914$","$1,887.32","$63,897.90"
ORD - SJU,57658665150,O-ATL-YYZ-4,A321neo,https://www.airlines-manager.com/network/showline/51097587,https://www.airlines-manager.com/network/showflight/57658665150,https://www.airlines-manager.com/aircraft/show/121813378,14:30,0:29,338,"698,683$","637,914$","$1,887.32","$63,897.90"
ORD - SJU,57665599636,O-ATL-YYZ-3,A321neo,https://www.airlines-manager.com/network/showline/51097587,https://www.airlines-manager.com/network/showflight/57665599636,https://www.airlines-manager.com/aircraft/show/121813379,18:15,4:14,338,"698,683$","637,914$","$1,887.32","$63,897.90"
ORD - SJU,57674153249,O-ATL-YYZ-1,A321neo,https://www.airlines-manager.com/network/showline/51097587,https://www.airlines-manager.com/network/showflight/57674153249,https://www.airlines-manager.com/aircraft/show/121813381,22:45,8:44,338,"698,683$","637,914$","$1,887.32","$63,897.90"
ORD - SLC,57632964668,O-YYC-SLC-3,A321neo,https://www.airlines-manager.com/network/showline/51097521,https://www.airlines-manager.com/network/showflight/57632964668,https://www.airlines-manager.com/aircraft/show/121813389,3:30,10:29,338,"484,413$","431,505$","$1,276.64","$61,790.69"
ORD - SLC,57637373178,O-YYC-SLC-5,A321neo,https://www.airlines-manager.com/network/showline/51097521,https://www.airlines-manager.com/network/showflight/57637373178,https://www.airlines-manager.com/aircraft/show/121813387,5:30,12:29,338,"484,413$","431,505$","$1,276.64","$61,790.69"
ORD - SLC,57651685581,O-YYC-SLC-2,A321neo,https://www.airlines-manager.com/network/showline/51097521,https://www.airlines-manager.com/network/showflight/57651685581,https://www.airlines-manager.com/aircraft/show/121813390,11:00,17:59,338,"484,413$","431,505$","$1,276.64","$61,790.69"
ORD - SLC,57665599661,O-YYC-SLC-1,A321neo,https://www.airlines-manager.com/network/showline/51097521,https://www.airlines-manager.com/network/showflight/57665599661,https://www.airlines-manager.com/aircraft/show/121813391,18:30,1:29,338,"484,413$","431,505$","$1,276.64","$61,790.69"
ORD - SLC,57671659186,O-YYC-SLC-4,A321neo,https://www.airlines-manager.com/network/showline/51097521,https://www.airlines-manager.com/network/showflight/57671659186,https://www.airlines-manager.com/aircraft/show/121813388,20:30,3:29,338,"484,413$","431,505$","$1,276.64","$61,790.69"
ORD - SMF,57632964359,O-OAK-SMF-1,A321neo,https://www.airlines-manager.com/network/showline/51097520,https://www.airlines-manager.com/network/showflight/57632964359,https://www.airlines-manager.com/aircraft/show/121813396,1:30,10:29,338,"618,472$","563,095$","$1,665.96","$62,682.19"
ORD - SMF,57632964360,O-OAK-SMF-4,A321neo,https://www.airlines-manager.com/network/showline/51097520,https://www.airlines-manager.com/network/showflight/57632964360,https://www.airlines-manager.com/aircraft/show/121813393,3:30,12:29,338,"618,472$","563,095$","$1,665.96","$62,682.19"
ORD - SMF,57658665031,O-OAK-SMF-3,A321neo,https://www.airlines-manager.com/network/showline/51097520,https://www.airlines-manager.com/network/showflight/57658665031,https://www.airlines-manager.com/aircraft/show/121813394,14:00,22:59,338,"618,472$","563,095$","$1,665.96","$62,682.19"
ORD - SMF,57662009350,O-OAK-SMF-2,A321neo,https://www.airlines-manager.com/network/showline/51097520,https://www.airlines-manager.com/network/showflight/57662009350,https://www.airlines-manager.com/aircraft/show/121813395,16:15,1:14,338,"618,472$","563,095$","$1,665.96","$62,682.19"
ORD - SMF,57665599637,O-OAK-SMF-5,A321neo,https://www.airlines-manager.com/network/showline/51097520,https://www.airlines-manager.com/network/showflight/57665599637,https://www.airlines-manager.com/aircraft/show/121813392,18:15,3:14,338,"618,472$","563,095$","$1,665.96","$62,682.19"
ORD - SNA,57632964544,O-SNA-BUR-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/51184362,https://www.airlines-manager.com/network/showflight/57632964544,https://www.airlines-manager.com/aircraft/show/122598446,2:15,10:59,272,"504,659$","462,765$","$1,701.34","$52,988.36"
ORD - SNA,57632964545,O-SNA-BUR-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/51184362,https://www.airlines-manager.com/network/showflight/57632964545,https://www.airlines-manager.com/aircraft/show/122598447,3:15,11:59,272,"504,659$","462,765$","$1,701.34","$52,988.36"
ORD - SNA,57651685556,O-SNA-BUR-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/51184362,https://www.airlines-manager.com/network/showflight/57651685556,https://www.airlines-manager.com/aircraft/show/122598444,11:00,19:44,272,"504,659$","462,765$","$1,701.34","$52,988.36"
ORD - SNA,57655460041,O-SNA-BUR-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/51184362,https://www.airlines-manager.com/network/showflight/57655460041,https://www.airlines-manager.com/aircraft/show/122598445,13:00,21:44,272,"504,659$","462,765$","$1,701.34","$52,988.36"
ORD - SNA,57668758344,O-SNA-BUR-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/51184362,https://www.airlines-manager.com/network/showflight/57668758344,https://www.airlines-manager.com/aircraft/show/122598448,19:45,4:29,272,"504,659$","462,765$","$1,701.34","$52,988.36"
ORD - SNA,57671659316,O-SNA-BUR-6,737-MAX8-200,https://www.airlines-manager.com/network/showline/51184362,https://www.airlines-manager.com/network/showflight/57671659316,https://www.airlines-manager.com/aircraft/show/120993787,21:45,6:29,272,"504,659$","462,765$","$1,701.34","$52,988.36"
ORD - STL,57632964583,O-BWI-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202037,https://www.airlines-manager.com/network/showflight/57632964583,https://www.airlines-manager.com/aircraft/show/122278392,2:30,5:29,320,"135,708$","94,657$",$295.80,"$31,728.60"
ORD - STL,57637373208,O-BWI-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202037,https://www.airlines-manager.com/network/showflight/57637373208,https://www.airlines-manager.com/aircraft/show/122278393,5:45,8:44,320,"135,708$","94,657$",$295.80,"$31,728.60"
ORD - STL,57648263080,O-BWI-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202037,https://www.airlines-manager.com/network/showflight/57648263080,https://www.airlines-manager.com/aircraft/show/122278394,10:00,12:59,320,"135,708$","94,657$",$295.80,"$31,728.60"
ORD - STL,57655460205,O-BWI-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202037,https://www.airlines-manager.com/network/showflight/57655460205,https://www.airlines-manager.com/aircraft/show/122278395,13:45,16:44,320,"135,708$","94,657$",$295.80,"$31,728.60"
ORD - STL,57668758295,O-BWI-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202037,https://www.airlines-manager.com/network/showflight/57668758295,https://www.airlines-manager.com/aircraft/show/122278396,19:15,22:14,320,"135,708$","94,657$",$295.80,"$31,728.60"
ORD - TPA,57644525156,O-PDX-SAN-1,737-900ER,https://www.airlines-manager.com/network/showline/50984824,https://www.airlines-manager.com/network/showflight/57644525156,https://www.airlines-manager.com/aircraft/show/121383375,7:30,13:29,320,"375,820$","319,842$",$999.51,"$53,455.49"
ORD - TPA,57648263022,O-PDX-SAN-6 B,A319-100,https://www.airlines-manager.com/network/showline/50984824,https://www.airlines-manager.com/network/showflight/57648263022,https://www.airlines-manager.com/aircraft/show/121383410,9:30,15:29,198,"284,901$","245,962$","$1,242.23","$41,107.86"
ORD - TPA,57651685640,O-PDX-SAN-3,737-900ER,https://www.airlines-manager.com/network/showline/50984824,https://www.airlines-manager.com/network/showflight/57651685640,https://www.airlines-manager.com/aircraft/show/121383373,11:00,16:59,320,"375,820$","319,842$",$999.51,"$53,455.49"
ORD - TPA,57655460108,O-PDX-SAN-5,737-900ER,https://www.airlines-manager.com/network/showline/50984824,https://www.airlines-manager.com/network/showflight/57655460108,https://www.airlines-manager.com/aircraft/show/121383371,13:00,18:59,320,"375,820$","319,842$",$999.51,"$53,455.49"
ORD - TPA,57668758357,O-PDX-SAN-2,737-900ER,https://www.airlines-manager.com/network/showline/50984824,https://www.airlines-manager.com/network/showflight/57668758357,https://www.airlines-manager.com/aircraft/show/121383374,19:45,1:44,320,"375,820$","319,842$",$999.51,"$53,455.49"
ORD - TPA,57671659332,O-PDX-SAN-4,737-900ER,https://www.airlines-manager.com/network/showline/50984824,https://www.airlines-manager.com/network/showflight/57671659332,https://www.airlines-manager.com/aircraft/show/121383372,21:45,3:44,273,"341,893$","287,197$","$1,052.00","$47,999.50"
ORD - TUS,57632964018,O-ANC-TUS-1,A321-200,https://www.airlines-manager.com/network/showline/51427560,https://www.airlines-manager.com/network/showflight/57632964018,https://www.airlines-manager.com/aircraft/show/122771603,0:15,7:59,310,"484,774$","432,674$","$1,395.72","$55,949.22"
ORD - TUS,57632964019,O-ANC-TUS-2,A321-200,https://www.airlines-manager.com/network/showline/51427560,https://www.airlines-manager.com/network/showflight/57632964019,https://www.airlines-manager.com/aircraft/show/122771602,2:15,9:59,310,"484,774$","432,674$","$1,395.72","$55,949.22"
ORD - TUS,57651685684,O-ANC-TUS-3,A321-200,https://www.airlines-manager.com/network/showline/51427560,https://www.airlines-manager.com/network/showflight/57651685684,https://www.airlines-manager.com/aircraft/show/122771601,11:00,18:44,310,"484,774$","432,674$","$1,395.72","$55,949.22"
ORD - TUS,57655460159,O-ANC-TUS-4,A321-200,https://www.airlines-manager.com/network/showline/51427560,https://www.airlines-manager.com/network/showflight/57655460159,https://www.airlines-manager.com/aircraft/show/122771600,13:00,20:44,310,"484,774$","432,674$","$1,395.72","$55,949.22"
ORD - TUS,57658665232,O-ANC-TUS-5,A321-200,https://www.airlines-manager.com/network/showline/51427560,https://www.airlines-manager.com/network/showflight/57658665232,https://www.airlines-manager.com/aircraft/show/122771599,15:00,22:44,310,"484,774$","432,674$","$1,395.72","$55,949.22"
ORD - YEG,57632964005,O-YEG-YUL-3,737-900ER,https://www.airlines-manager.com/network/showline/51201991,https://www.airlines-manager.com/network/showflight/57632964005,https://www.airlines-manager.com/aircraft/show/122278399,0:15,7:44,320,"484,754$","424,935$","$1,327.92","$56,784.19"
ORD - YEG,57632964006,O-YEG-YUL-2,737-900ER,https://www.airlines-manager.com/network/showline/51201991,https://www.airlines-manager.com/network/showflight/57632964006,https://www.airlines-manager.com/aircraft/show/122278400,4:00,11:29,320,"484,754$","424,935$","$1,327.92","$56,784.19"
ORD - YEG,57651685714,O-YEG-YUL-1,737-900ER,https://www.airlines-manager.com/network/showline/51201991,https://www.airlines-manager.com/network/showflight/57651685714,https://www.airlines-manager.com/aircraft/show/122278401,11:30,18:59,320,"484,754$","424,935$","$1,327.92","$56,784.19"
ORD - YEG,57658665253,O-YEG-YUL-5,737-900ER,https://www.airlines-manager.com/network/showline/51201991,https://www.airlines-manager.com/network/showflight/57658665253,https://www.airlines-manager.com/aircraft/show/122278397,15:15,22:44,320,"484,754$","424,935$","$1,327.92","$56,784.19"
ORD - YEG,57668758358,O-YEG-YUL-4,737-900ER,https://www.airlines-manager.com/network/showline/51201991,https://www.airlines-manager.com/network/showflight/57668758358,https://www.airlines-manager.com/aircraft/show/122278398,19:45,3:14,320,"484,754$","424,935$","$1,327.92","$56,784.19"
ORD - YOW,57644525198,O-EUG-BDL-1,737-900ER,https://www.airlines-manager.com/network/showline/51552961,https://www.airlines-manager.com/network/showflight/57644525198,https://www.airlines-manager.com/aircraft/show/123133559,8:00,12:44,320,"301,038$","255,663$",$798.95,"$54,013.31"
ORD - YOW,57658665076,O-EUG-BDL-4,737-900ER,https://www.airlines-manager.com/network/showline/51552961,https://www.airlines-manager.com/network/showflight/57658665076,https://www.airlines-manager.com/aircraft/show/123133556,14:00,18:44,320,"301,038$","255,663$",$798.95,"$54,013.31"
ORD - YOW,57665599607,O-EUG-BDL-3,737-900ER,https://www.airlines-manager.com/network/showline/51552961,https://www.airlines-manager.com/network/showflight/57665599607,https://www.airlines-manager.com/aircraft/show/123133557,18:00,22:44,320,"301,038$","255,663$",$798.95,"$54,013.31"
ORD - YOW,57671659302,O-EUG-BDL-2,737-900ER,https://www.airlines-manager.com/network/showline/51552961,https://www.airlines-manager.com/network/showflight/57671659302,https://www.airlines-manager.com/aircraft/show/123133558,21:30,2:14,320,"301,038$","255,663$",$798.95,"$54,013.31"
ORD - YOW,57674153308,O-EUG-BDL-5,ERJ-175,https://www.airlines-manager.com/network/showline/51552961,https://www.airlines-manager.com/network/showflight/57674153308,https://www.airlines-manager.com/aircraft/show/123133603,23:00,3:44,112,"142,848$","118,258$","$1,055.88","$24,984.08"
ORD - YUL,57632964656,O-YEG-YUL-4,737-900ER,https://www.airlines-manager.com/network/showline/51201992,https://www.airlines-manager.com/network/showflight/57632964656,https://www.airlines-manager.com/aircraft/show/122278398,3:15,8:14,320,"322,103$","272,133$",$850.42,"$54,608.63"
ORD - YUL,57644525175,O-YEG-YUL-3,737-900ER,https://www.airlines-manager.com/network/showline/51201992,https://www.airlines-manager.com/network/showflight/57644525175,https://www.airlines-manager.com/aircraft/show/122278399,7:45,12:44,320,"322,103$","272,133$",$850.42,"$54,608.63"
ORD - YUL,57651685713,O-YEG-YUL-2,737-900ER,https://www.airlines-manager.com/network/showline/51201992,https://www.airlines-manager.com/network/showflight/57651685713,https://www.airlines-manager.com/aircraft/show/122278400,11:30,16:29,320,"322,103$","272,133$",$850.42,"$54,608.63"
ORD - YUL,57668758264,O-YEG-YUL-1,737-900ER,https://www.airlines-manager.com/network/showline/51201992,https://www.airlines-manager.com/network/showflight/57668758264,https://www.airlines-manager.com/aircraft/show/122278401,19:00,23:59,320,"322,103$","272,133$",$850.42,"$54,608.63"
ORD - YUL,57674153264,O-YEG-YUL-5,737-900ER,https://www.airlines-manager.com/network/showline/51201992,https://www.airlines-manager.com/network/showflight/57674153264,https://www.airlines-manager.com/aircraft/show/122278397,22:45,3:44,320,"322,103$","272,133$",$850.42,"$54,608.63"
ORD - YVR,57632964313,O-YVR-GDL-2,757-300,https://www.airlines-manager.com/network/showline/50984850,https://www.airlines-manager.com/network/showflight/57632964313,https://www.airlines-manager.com/aircraft/show/121383384,1:15,9:59,400,"728,709$","651,879$","$1,629.70","$74,642.63"
ORD - YVR,57632964314,O-YVR-GDL-3,757-300,https://www.airlines-manager.com/network/showline/50984850,https://www.airlines-manager.com/network/showflight/57632964314,https://www.airlines-manager.com/aircraft/show/121383383,3:15,11:59,400,"728,709$","651,879$","$1,629.70","$74,642.63"
ORD - YVR,57658665193,O-YVR-GDL-1,757-300,https://www.airlines-manager.com/network/showline/50984850,https://www.airlines-manager.com/network/showflight/57658665193,https://www.airlines-manager.com/aircraft/show/121383385,15:00,23:44,400,"728,709$","651,879$","$1,629.70","$74,642.63"
ORD - YVR,57662009368,O-YVR-GDL-4,757-300,https://www.airlines-manager.com/network/showline/50984850,https://www.airlines-manager.com/network/showflight/57662009368,https://www.airlines-manager.com/aircraft/show/121383382,16:30,1:14,400,"728,709$","651,879$","$1,629.70","$74,642.63"
ORD - YVR,57665599665,O-YVR-GDL-5,757-300,https://www.airlines-manager.com/network/showline/50984850,https://www.airlines-manager.com/network/showflight/57665599665,https://www.airlines-manager.com/aircraft/show/121383381,18:30,3:14,400,"728,709$","651,879$","$1,629.70","$74,642.63"
ORD - YWG,57632964657,O-EUG-BDL-1,737-900ER,https://www.airlines-manager.com/network/showline/51552960,https://www.airlines-manager.com/network/showflight/57632964657,https://www.airlines-manager.com/aircraft/show/123133559,3:15,7:59,320,"312,025$","265,631$",$830.10,"$56,119.23"
ORD - YWG,57648262981,O-EUG-BDL-4,737-900ER,https://www.airlines-manager.com/network/showline/51552960,https://www.airlines-manager.com/network/showflight/57648262981,https://www.airlines-manager.com/aircraft/show/123133556,9:00,13:44,320,"312,025$","265,631$",$830.10,"$56,119.23"
ORD - YWG,57655460186,O-EUG-BDL-3,737-900ER,https://www.airlines-manager.com/network/showline/51552960,https://www.airlines-manager.com/network/showflight/57655460186,https://www.airlines-manager.com/aircraft/show/123133557,13:15,17:59,320,"312,025$","265,631$",$830.10,"$56,119.23"
ORD - YWG,57662009394,O-EUG-BDL-2,737-900ER,https://www.airlines-manager.com/network/showline/51552960,https://www.airlines-manager.com/network/showflight/57662009394,https://www.airlines-manager.com/aircraft/show/123133558,16:45,21:29,320,"312,025$","265,631$",$830.10,"$56,119.23"
ORD - YWG,57665599656,O-EUG-BDL-5,ERJ-175,https://www.airlines-manager.com/network/showline/51552960,https://www.airlines-manager.com/network/showflight/57665599656,https://www.airlines-manager.com/aircraft/show/123133603,18:15,22:59,112,"147,949$","122,694$","$1,095.48","$25,921.27"
ORD - YYC,57632964621,O-YYC-SLC-2,A321neo,https://www.airlines-manager.com/network/showline/51097547,https://www.airlines-manager.com/network/showflight/57632964621,https://www.airlines-manager.com/aircraft/show/121813390,3:00,10:29,338,"518,520$","465,177$","$1,376.26","$62,161.74"
ORD - YYC,57651685582,O-YYC-SLC-1,A321neo,https://www.airlines-manager.com/network/showline/51097547,https://www.airlines-manager.com/network/showflight/57651685582,https://www.airlines-manager.com/aircraft/show/121813391,11:00,18:29,338,"518,520$","465,177$","$1,376.26","$62,161.74"
ORD - YYC,57655460054,O-YYC-SLC-4,A321neo,https://www.airlines-manager.com/network/showline/51097547,https://www.airlines-manager.com/network/showflight/57655460054,https://www.airlines-manager.com/aircraft/show/121813388,13:00,20:29,338,"518,520$","465,177$","$1,376.26","$62,161.74"
ORD - YYC,57668758375,O-YYC-SLC-3,A321neo,https://www.airlines-manager.com/network/showline/51097547,https://www.airlines-manager.com/network/showflight/57668758375,https://www.airlines-manager.com/aircraft/show/121813389,20:00,3:29,338,"518,520$","465,177$","$1,376.26","$62,161.74"
ORD - YYC,57674153153,O-YYC-SLC-5,A321neo,https://www.airlines-manager.com/network/showline/51097547,https://www.airlines-manager.com/network/showflight/57674153153,https://www.airlines-manager.com/aircraft/show/121813387,22:00,5:29,338,"518,520$","465,177$","$1,376.26","$62,161.74"
ORD - YYZ,57632964355,O-ATL-YYZ-5,A321neo,https://www.airlines-manager.com/network/showline/51097548,https://www.airlines-manager.com/network/showflight/57632964355,https://www.airlines-manager.com/aircraft/show/115400545,1:30,5:14,338,"237,420$","195,123$",$577.29,"$52,265.09"
ORD - YYZ,57637373142,O-ATL-YYZ-4,A321neo,https://www.airlines-manager.com/network/showline/51097548,https://www.airlines-manager.com/network/showflight/57637373142,https://www.airlines-manager.com/aircraft/show/121813378,5:00,8:44,338,"237,420$","195,123$",$577.29,"$52,265.09"
ORD - YYZ,57651685576,O-ATL-YYZ-3,A321neo,https://www.airlines-manager.com/network/showline/51097548,https://www.airlines-manager.com/network/showflight/57651685576,https://www.airlines-manager.com/aircraft/show/121813379,11:00,14:44,338,"237,420$","195,123$",$577.29,"$52,265.09"
ORD - YYZ,57662009228,O-ATL-YYZ-1,A321neo,https://www.airlines-manager.com/network/showline/51097548,https://www.airlines-manager.com/network/showflight/57662009228,https://www.airlines-manager.com/aircraft/show/121813381,15:30,19:14,338,"237,420$","195,123$",$577.29,"$52,265.09"
ORD - YYZ,57665599537,O-ATL-YYZ-2,A321neo,https://www.airlines-manager.com/network/showline/51097548,https://www.airlines-manager.com/network/showflight/57665599537,https://www.airlines-manager.com/aircraft/show/121813380,17:30,21:14,338,"237,420$","195,123$",$577.29,"$52,265.09"`;
