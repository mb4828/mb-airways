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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		tz: 'US/Pacific'
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
		tz: 'US/Central'
	},
	{
		name: 'Missoula Montana Airport (MSO)',
		city: 'Missoula, USA - Montana 🇺🇸',
		pos: [46.91876701016805, -114.08363087487372],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'ord'],
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
		name: 'Erik Nielsen Whitehorse International Airport (YXY)',
		city: 'Whitehorse, Canada 🇨🇦',
		pos: [60.7139263748326, -135.07421919200056],
		hubs: ['ord'],
		tz: 'Canada/Yukon'
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
EWR - ABQ,58017973212,E-ABQ-AUS-2,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/58017973212,https://www.airlines-manager.com/aircraft/show/90717078,0:45,9:59,310,"$575,728.00","$529,752.00","$1,708.88","$57,373.86"
EWR - ABQ,58017973213,E-ABQ-AUS-5,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/58017973213,https://www.airlines-manager.com/aircraft/show/95950199,2:45,11:59,310,"$575,728.00","$529,752.00","$1,708.88","$57,373.86"
EWR - ABQ,58034913898,E-ABQ-AUS-1,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/58034913898,https://www.airlines-manager.com/aircraft/show/90717079,10:00,19:14,310,"$575,728.00","$529,752.00","$1,708.88","$57,373.86"
EWR - ABQ,58048703655,E-ABQ-AUS-3,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/58048703655,https://www.airlines-manager.com/aircraft/show/90717077,16:45,1:59,310,"$575,728.00","$529,752.00","$1,708.88","$57,373.86"
EWR - ABQ,58048703656,E-ABQ-AUS-4,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/58048703656,https://www.airlines-manager.com/aircraft/show/90717076,17:45,2:59,310,"$575,728.00","$529,752.00","$1,708.88","$57,373.86"
EWR - ALB,58017973139,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/58017973139,https://www.airlines-manager.com/aircraft/show/119220543,0:15,2:59,310,"$97,112.00","$79,379.00",$256.06,"$29,041.10"
EWR - ALB,58021655932,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/58021655932,https://www.airlines-manager.com/aircraft/show/119220542,4:45,7:29,310,"$97,112.00","$79,379.00",$256.06,"$29,041.10"
EWR - ALB,58045346322,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/58045346322,https://www.airlines-manager.com/aircraft/show/119220545,16:00,18:44,310,"$97,112.00","$79,379.00",$256.06,"$29,041.10"
EWR - ALB,58054747928,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/58054747928,https://www.airlines-manager.com/aircraft/show/119220544,20:30,23:14,310,"$97,112.00","$79,379.00",$256.06,"$29,041.10"
EWR - AMS,58038353840,E-56B-4 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/58038353840,https://www.airlines-manager.com/aircraft/show/94521247,11:30,2:44,748,"$2,330,925.00","$2,066,730.00","$2,763.01","$135,671.55"
EWR - AMS,58042065620,E-56B-2 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/58042065620,https://www.airlines-manager.com/aircraft/show/90656556,13:15,4:29,748,"$2,330,925.00","$2,066,730.00","$2,763.01","$135,671.55"
EWR - AMS,58045346220,E-56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/58045346220,https://www.airlines-manager.com/aircraft/show/89124072,15:00,6:14,748,"$2,104,373.00","$1,900,580.00","$2,540.88","$124,764.55"
EWR - ANC,58034913832,E-STL-PIT-3,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/58034913832,https://www.airlines-manager.com/aircraft/show/115400546,10:00,0:59,338,"$1,007,405.00","$944,321.00","$2,793.85","$63,024.76"
EWR - ANC,58042065612,E-STL-PIT-2,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/58042065612,https://www.airlines-manager.com/aircraft/show/115400547,13:15,4:14,338,"$1,007,405.00","$944,321.00","$2,793.85","$63,024.76"
EWR - ANC,58051861597,E-STL-PIT-1,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/58051861597,https://www.airlines-manager.com/aircraft/show/115400548,18:45,9:44,338,"$1,007,405.00","$944,321.00","$2,793.85","$63,024.76"
EWR - ANC,58057474905,E-STL-PIT-4,A321neo-LR,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/58057474905,https://www.airlines-manager.com/aircraft/show/103406580,21:45,12:44,338,"$1,016,769.00","$951,951.00","$2,816.42","$63,533.99"
EWR - ARN,58017973685,E-56D-1 E,787-10,https://www.airlines-manager.com/network/showline/50072203,https://www.airlines-manager.com/network/showflight/58017973685,https://www.airlines-manager.com/aircraft/show/118644436,3:45,19:44,648,"$1,976,114.00","$1,844,631.00","$2,846.65","$115,409.66"
EWR - ARN,58038353940,E-56D-3 E,787-10,https://www.airlines-manager.com/network/showline/50072203,https://www.airlines-manager.com/network/showflight/58038353940,https://www.airlines-manager.com/aircraft/show/118644438,12:45,4:44,648,"$1,976,114.00","$1,844,631.00","$2,846.65","$115,409.66"
EWR - ARN,58051861599,E-56D-5 E,787-10,https://www.airlines-manager.com/network/showline/50072203,https://www.airlines-manager.com/network/showflight/58051861599,https://www.airlines-manager.com/aircraft/show/118644440,18:45,10:44,648,"$1,976,114.00","$1,844,631.00","$2,846.65","$115,409.66"
EWR - ATH,58017973088,E-84A-7 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/58017973088,https://www.airlines-manager.com/aircraft/show/94521249,0:00,19:59,852,"$3,250,987.00","$2,958,694.00","$3,472.65","$148,058.08"
EWR - ATH,58054747835,E-84A-4 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/58054747835,https://www.airlines-manager.com/aircraft/show/90656551,19:45,15:44,852,"$3,250,987.00","$2,958,694.00","$3,472.65","$148,058.08"
EWR - ATL,58034913842,E-DFW-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/58034913842,https://www.airlines-manager.com/aircraft/show/90489724,10:00,14:59,320,"$317,565.00","$256,248.00",$800.78,"$51,421.00"
EWR - ATL,58042065760,E-DFW-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/58042065760,https://www.airlines-manager.com/aircraft/show/90489726,14:15,19:14,320,"$317,565.00","$256,248.00",$800.78,"$51,421.00"
EWR - ATL,58048703748,E-DFW-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/58048703748,https://www.airlines-manager.com/aircraft/show/90489725,17:30,22:29,320,"$317,565.00","$256,248.00",$800.78,"$51,421.00"
EWR - ATL,58051861591,E-DFW-ATL-6 B,A319-100,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/58051861591,https://www.airlines-manager.com/aircraft/show/105222360,18:30,23:29,198,"$241,826.00","$199,756.00","$1,008.87","$40,084.82"
EWR - ATL,58054747812,E-DFW-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/58054747812,https://www.airlines-manager.com/aircraft/show/86238752,19:45,0:44,320,"$317,565.00","$256,248.00",$800.78,"$51,421.00"
EWR - ATL,58057474966,E-DFW-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/58057474966,https://www.airlines-manager.com/aircraft/show/86238753,22:15,3:14,320,"$317,565.00","$256,248.00",$800.78,"$51,421.00"
EWR - AUS,58017973531,E-ABQ-AUS-3,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/58017973531,https://www.airlines-manager.com/aircraft/show/90717077,2:00,9:59,310,"$501,297.00","$460,053.00","$1,484.04","$57,626.68"
EWR - AUS,58017973532,E-ABQ-AUS-4,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/58017973532,https://www.airlines-manager.com/aircraft/show/90717076,3:00,10:59,310,"$501,297.00","$460,053.00","$1,484.04","$57,626.68"
EWR - AUS,58034913896,E-ABQ-AUS-2,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/58034913896,https://www.airlines-manager.com/aircraft/show/90717078,10:00,17:59,310,"$501,297.00","$460,053.00","$1,484.04","$57,626.68"
EWR - AUS,58038353895,E-ABQ-AUS-5,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/58038353895,https://www.airlines-manager.com/aircraft/show/95950199,12:00,19:59,310,"$501,297.00","$460,053.00","$1,484.04","$57,626.68"
EWR - AUS,58051861700,E-ABQ-AUS-1,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/58051861700,https://www.airlines-manager.com/aircraft/show/90717079,19:15,3:14,310,"$501,297.00","$460,053.00","$1,484.04","$57,626.68"
EWR - BCN,58045346271,E-84A-5 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/58045346271,https://www.airlines-manager.com/aircraft/show/94521250,15:45,7:44,852,"$2,628,418.00","$2,386,121.00","$2,800.61","$149,288.07"
EWR - BCN,58054747877,E-84A-2 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/58054747877,https://www.airlines-manager.com/aircraft/show/94521252,20:00,11:59,852,"$2,628,418.00","$2,386,121.00","$2,800.61","$149,288.07"
EWR - BDA,58031343159,E-YEG-BFF-5 B,A319-100,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/58031343159,https://www.airlines-manager.com/aircraft/show/115493369,8:45,13:59,198,"$244,232.00","$222,459.00","$1,123.53","$42,508.09"
EWR - BDA,58034914037,E-YEG-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/58034914037,https://www.airlines-manager.com/aircraft/show/98936170,11:00,16:14,320,"$322,411.00","$291,621.00",$911.32,"$55,723.76"
EWR - BDA,58042065515,E-YEG-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/58042065515,https://www.airlines-manager.com/aircraft/show/98936171,13:00,18:14,320,"$322,411.00","$291,621.00",$911.32,"$55,723.76"
EWR - BDA,58057474824,E-YEG-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/58057474824,https://www.airlines-manager.com/aircraft/show/98936168,21:00,2:14,320,"$322,411.00","$291,621.00",$911.32,"$55,723.76"
EWR - BDA,58059513281,E-YEG-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/58059513281,https://www.airlines-manager.com/aircraft/show/98936169,22:30,3:44,256,"$262,766.00","$233,654.00",$912.71,"$44,647.26"
EWR - BDL,58017973271,E-COS-ICT-4,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/58017973271,https://www.airlines-manager.com/aircraft/show/108834811,1:00,3:29,310,"$89,797.00","$71,469.00",$230.55,"$28,779.46"
EWR - BDL,58031343214,E-COS-ICT-5,ERJ-175,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/58031343214,https://www.airlines-manager.com/aircraft/show/108466265,9:30,11:59,112,"$38,517.00","$27,319.00",$243.92,"$11,000.94"
EWR - BDL,58042065709,E-COS-ICT-3,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/58042065709,https://www.airlines-manager.com/aircraft/show/108834810,14:00,16:29,310,"$89,797.00","$71,469.00",$230.55,"$28,779.46"
EWR - BDL,58045346315,E-COS-ICT-2,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/58045346315,https://www.airlines-manager.com/aircraft/show/108834809,16:00,18:29,310,"$89,797.00","$71,469.00",$230.55,"$28,779.46"
EWR - BDL,58059513371,E-COS-ICT-1,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/58059513371,https://www.airlines-manager.com/aircraft/show/108834808,23:00,1:29,310,"$89,797.00","$71,469.00",$230.55,"$28,779.46"
EWR - BER,58024780660,E-84B-5  B2,777-300,https://www.airlines-manager.com/network/showline/49921899,https://www.airlines-manager.com/network/showflight/58024780660,https://www.airlines-manager.com/aircraft/show/117958699,5:45,22:14,852,"$2,719,031.00","$2,467,383.00","$2,895.99","$149,689.57"
EWR - BER,58048703785,E-84B-1  B2,777-300,https://www.airlines-manager.com/network/showline/49921899,https://www.airlines-manager.com/network/showflight/58048703785,https://www.airlines-manager.com/aircraft/show/117958695,17:45,10:14,852,"$2,719,031.00","$2,467,383.00","$2,895.99","$149,689.57"
EWR - BFF,58017973548,E-YEG-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/58017973548,https://www.airlines-manager.com/aircraft/show/98936168,2:15,10:14,320,"$507,802.00","$465,091.00","$1,453.41","$58,257.75"
EWR - BFF,58017973549,E-YEG-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/58017973549,https://www.airlines-manager.com/aircraft/show/98936169,3:45,11:44,320,"$507,802.00","$465,091.00","$1,453.41","$58,257.75"
EWR - BFF,58042065740,E-YEG-BFF-5 B,A319-100,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/58042065740,https://www.airlines-manager.com/aircraft/show/115493369,14:00,21:59,198,"$383,240.00","$352,330.00","$1,779.44","$44,133.19"
EWR - BFF,58048703610,E-YEG-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/58048703610,https://www.airlines-manager.com/aircraft/show/98936170,16:15,0:14,320,"$507,802.00","$465,091.00","$1,453.41","$58,257.75"
EWR - BFF,58051861542,E-YEG-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/58051861542,https://www.airlines-manager.com/aircraft/show/98936171,18:15,2:14,320,"$507,802.00","$465,091.00","$1,453.41","$58,257.75"
EWR - BHM,58017973558,E-RAP-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/58017973558,https://www.airlines-manager.com/aircraft/show/116042862,2:15,7:44,310,"$346,865.00","$318,072.00","$1,026.04","$58,007.05"
EWR - BHM,58031343133,E-RAP-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/58031343133,https://www.airlines-manager.com/aircraft/show/116042859,8:30,13:59,310,"$346,865.00","$318,072.00","$1,026.04","$58,007.05"
EWR - BHM,58042065720,E-RAP-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/58042065720,https://www.airlines-manager.com/aircraft/show/116042860,14:00,19:29,310,"$346,865.00","$318,072.00","$1,026.04","$58,007.05"
EWR - BHM,58045346241,E-RAP-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/58045346241,https://www.airlines-manager.com/aircraft/show/116042861,15:15,20:44,310,"$346,865.00","$318,072.00","$1,026.04","$58,007.05"
EWR - BIL,58034913869,E-BIL-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/58034913869,https://www.airlines-manager.com/aircraft/show/116047882,10:00,18:59,320,"$565,856.00","$519,899.00","$1,624.68","$57,873.73"
EWR - BIL,58038353880,E-BIL-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/58038353880,https://www.airlines-manager.com/aircraft/show/116047885,12:00,20:59,320,"$565,856.00","$519,899.00","$1,624.68","$57,873.73"
EWR - BIL,58057474860,E-BIL-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/58057474860,https://www.airlines-manager.com/aircraft/show/116047884,21:15,6:14,320,"$565,856.00","$519,899.00","$1,624.68","$57,873.73"
EWR - BIL,58059513318,E-BIL-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/58059513318,https://www.airlines-manager.com/aircraft/show/116047883,22:45,7:44,320,"$565,856.00","$519,899.00","$1,624.68","$57,873.73"
EWR - BNA,58017973658,E-BNA-JAX-3,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/58017973658,https://www.airlines-manager.com/aircraft/show/104610408,3:15,8:14,310,"$322,924.00","$293,584.00",$947.05,"$58,913.18"
EWR - BNA,58031343126,E-BNA-JAX-2,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/58031343126,https://www.airlines-manager.com/aircraft/show/104610409,8:30,13:29,310,"$322,924.00","$293,584.00",$947.05,"$58,913.18"
EWR - BNA,58042065579,E-BNA-JAX-1,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/58042065579,https://www.airlines-manager.com/aircraft/show/104610410,13:00,17:59,310,"$322,924.00","$293,584.00",$947.05,"$58,913.18"
EWR - BNA,58048703718,E-BNA-JAX-5,ERJ-175,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/58048703718,https://www.airlines-manager.com/aircraft/show/96421247,17:00,21:59,112,"$153,204.00","$134,298.00","$1,199.09","$26,949.43"
EWR - BNA,58057474861,E-BNA-JAX-4,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/58057474861,https://www.airlines-manager.com/aircraft/show/104610407,21:15,2:14,310,"$322,924.00","$293,584.00",$947.05,"$58,913.18"
EWR - BOI,58017973463,E-BOI-PBI-5 B,A319-100,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/58017973463,https://www.airlines-manager.com/aircraft/show/110582846,1:30,11:59,198,"$492,457.00","$454,215.00","$2,294.02","$43,327.34"
EWR - BOI,58034913913,E-BOI-PBI-1,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/58034913913,https://www.airlines-manager.com/aircraft/show/104418460,10:00,20:29,310,"$655,891.00","$608,204.00","$1,961.95","$58,016.28"
EWR - BOI,58045346194,E-BOI-PBI-4,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/58045346194,https://www.airlines-manager.com/aircraft/show/104418463,15:00,1:29,310,"$655,891.00","$608,204.00","$1,961.95","$58,016.28"
EWR - BOI,58048703637,E-BOI-PBI-3,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/58048703637,https://www.airlines-manager.com/aircraft/show/104418462,16:30,2:59,310,"$655,891.00","$608,204.00","$1,961.95","$58,016.28"
EWR - BOI,58059513419,E-BOI-PBI-2,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/58059513419,https://www.airlines-manager.com/aircraft/show/104418461,23:30,9:59,310,"$655,891.00","$608,204.00","$1,961.95","$58,016.28"
EWR - BOS,58017973637,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/58017973637,https://www.airlines-manager.com/aircraft/show/104034464,3:00,5:59,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,58034913940,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/58034913940,https://www.airlines-manager.com/aircraft/show/104034463,10:00,12:59,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,58038353950,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/58038353950,https://www.airlines-manager.com/aircraft/show/104034462,12:45,15:44,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,58042065644,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/58042065644,https://www.airlines-manager.com/aircraft/show/99316501,13:45,16:44,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,58048703711,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/58048703711,https://www.airlines-manager.com/aircraft/show/104034464,17:00,19:59,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,58054747870,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/58054747870,https://www.airlines-manager.com/aircraft/show/104034463,20:00,22:59,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,58059513335,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/58059513335,https://www.airlines-manager.com/aircraft/show/104034462,22:45,1:44,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BOS,58060881899,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/58060881899,https://www.airlines-manager.com/aircraft/show/99316501,23:45,2:44,216,"$94,144.00","$74,358.00",$344.25,"$24,924.47"
EWR - BRU,58017973590,E-84B-1  B2,777-300,https://www.airlines-manager.com/network/showline/49921920,https://www.airlines-manager.com/network/showflight/58017973590,https://www.airlines-manager.com/aircraft/show/117958695,2:30,17:44,852,"$2,501,229.00","$2,275,215.00","$2,670.44","$149,357.66"
EWR - BRU,58042065783,E-84B-4  B2,777-300,https://www.airlines-manager.com/network/showline/49921920,https://www.airlines-manager.com/network/showflight/58042065783,https://www.airlines-manager.com/aircraft/show/117958698,14:30,5:44,852,"$2,501,229.00","$2,275,215.00","$2,670.44","$149,357.66"
EWR - BTV,58031343158,E-FCA-CID-1,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/58031343158,https://www.airlines-manager.com/aircraft/show/116042866,8:45,11:59,310,"$140,026.00","$120,811.00",$389.71,"$37,364.23"
EWR - BTV,58038353906,E-FCA-CID-4,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/58038353906,https://www.airlines-manager.com/aircraft/show/116042863,12:00,15:14,310,"$140,026.00","$120,811.00",$389.71,"$37,364.23"
EWR - BTV,58042065590,E-FCA-CID-3,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/58042065590,https://www.airlines-manager.com/aircraft/show/116042864,13:00,16:14,310,"$140,026.00","$120,811.00",$389.71,"$37,364.23"
EWR - BTV,58051861624,E-FCA-CID-2,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/58051861624,https://www.airlines-manager.com/aircraft/show/116042865,18:45,21:59,310,"$140,026.00","$120,811.00",$389.71,"$37,364.23"
EWR - BUF,58024780643,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/58024780643,https://www.airlines-manager.com/aircraft/show/106104450,5:30,8:44,112,"70,781$","57,977$",$517.65,"$17,931.03"
EWR - BUF,58034914039,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/58034914039,https://www.airlines-manager.com/aircraft/show/105731236,11:00,14:14,320,"154,671$","130,701$",$408.44,"$40,422.99"
EWR - BUF,58045346125,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/58045346125,https://www.airlines-manager.com/aircraft/show/88494376,14:45,17:59,320,"154,671$","130,701$",$408.44,"$40,422.99"
EWR - BUF,58051861572,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/58051861572,https://www.airlines-manager.com/aircraft/show/88494377,18:30,21:44,320,"$154,671.00","$130,701.00",$408.44,"$40,422.99"
EWR - BUF,58059513343,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/58059513343,https://www.airlines-manager.com/aircraft/show/88494375,23:00,2:14,320,"$154,671.00","$130,701.00",$408.44,"$40,422.99"
EWR - BWI,58017973144,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/58017973144,https://www.airlines-manager.com/aircraft/show/104034464,0:15,2:59,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,58017973145,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/58017973145,https://www.airlines-manager.com/aircraft/show/104034463,3:15,5:59,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,58034913938,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/58034913938,https://www.airlines-manager.com/aircraft/show/104034462,10:00,12:44,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,58034913939,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/58034913939,https://www.airlines-manager.com/aircraft/show/99316501,11:00,13:44,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,58042065768,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/58042065768,https://www.airlines-manager.com/aircraft/show/104034464,14:15,16:59,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,58048703740,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/58048703740,https://www.airlines-manager.com/aircraft/show/104034463,17:15,19:59,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,58054747869,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/58054747869,https://www.airlines-manager.com/aircraft/show/104034462,20:00,22:44,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BWI,58057474842,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/58057474842,https://www.airlines-manager.com/aircraft/show/99316501,21:00,23:44,216,"$74,940.00","$56,370.00",$260.97,"$20,623.17"
EWR - BZN,58017973167,E-BIL-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/58017973167,https://www.airlines-manager.com/aircraft/show/116047885,0:30,9:44,320,"$592,989.00","$546,085.00","$1,706.52","$59,142.78"
EWR - BZN,58038353879,E-BIL-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/58038353879,https://www.airlines-manager.com/aircraft/show/116047884,12:00,21:14,320,"$592,989.00","$546,085.00","$1,706.52","$59,142.78"
EWR - BZN,58042065627,E-BIL-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/58042065627,https://www.airlines-manager.com/aircraft/show/116047883,13:30,22:44,320,"$592,989.00","$546,085.00","$1,706.52","$59,142.78"
EWR - BZN,58059513286,E-BIL-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/58059513286,https://www.airlines-manager.com/aircraft/show/116047882,22:30,7:44,320,"$592,989.00","$546,085.00","$1,706.52","$59,142.78"
EWR - CAK,58031343122,E-BIL-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/58031343122,https://www.airlines-manager.com/aircraft/show/116047884,8:30,11:59,320,"$191,026.00","$166,924.00",$521.64,"$47,920.77"
EWR - CAK,58034913870,E-BIL-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/58034913870,https://www.airlines-manager.com/aircraft/show/116047883,10:00,13:29,320,"$191,026.00","$166,924.00",$521.64,"$47,920.77"
EWR - CAK,58051861660,E-BIL-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/58051861660,https://www.airlines-manager.com/aircraft/show/116047882,19:00,22:29,320,"$191,026.00","$166,924.00",$521.64,"$47,920.77"
EWR - CAK,58057474829,E-BIL-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/58057474829,https://www.airlines-manager.com/aircraft/show/116047885,21:00,0:29,291,"$180,506.00","$156,700.00",$538.49,"$44,985.65"
EWR - CDG,58017973640,E-56A-5 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/58017973640,https://www.airlines-manager.com/aircraft/show/106813011,3:00,18:14,748,"$2,340,297.00","$2,079,866.00","$2,780.57","$136,533.87"
EWR - CDG,58031343160,E-56A-6 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/58031343160,https://www.airlines-manager.com/aircraft/show/106813012,8:45,23:59,748,"$2,340,297.00","$2,079,866.00","$2,780.57","$136,533.87"
EWR - CDG,58051861681,E-56A-2 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/58051861681,https://www.airlines-manager.com/aircraft/show/106813008,19:00,10:14,567,"1,767,364$","1,589,492$","$2,803.34","$104,343.02"
EWR - CHS,58031343129,E-TUL-DSM-1,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/58031343129,https://www.airlines-manager.com/aircraft/show/110044463,8:30,12:59,310,"289,603$","264,659$",$853.74,"$59,031.75"
EWR - CHS,58038353923,E-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/58038353923,https://www.airlines-manager.com/aircraft/show/110113039,12:00,16:29,112,"138,180$","122,117$","$1,090.33","$27,237.99"
EWR - CHS,58042065763,E-TUL-DSM-4,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/58042065763,https://www.airlines-manager.com/aircraft/show/110044466,14:15,18:44,310,"289,603$","264,659$",$853.74,"$59,031.75"
EWR - CHS,58057474865,E-TUL-DSM-3,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/58057474865,https://www.airlines-manager.com/aircraft/show/110044465,21:15,1:44,310,"$289,603.00","$264,659.00",$853.74,"$59,031.75"
EWR - CHS,58059513372,E-TUL-DSM-2,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/58059513372,https://www.airlines-manager.com/aircraft/show/110044464,23:00,3:29,286,"$276,494.00","$251,963.00",$880.99,"$56,199.93"
EWR - CID,58017973387,E-FCA-CID-4,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/58017973387,https://www.airlines-manager.com/aircraft/show/116042863,1:15,6:59,310,"$357,618.00","$329,009.00","$1,061.32","$57,385.29"
EWR - CID,58017973388,E-FCA-CID-3,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/58017973388,https://www.airlines-manager.com/aircraft/show/116042864,2:15,7:59,310,"$357,618.00","$329,009.00","$1,061.32","$57,385.29"
EWR - CID,58034913920,E-FCA-CID-2,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/58034913920,https://www.airlines-manager.com/aircraft/show/116042865,10:00,15:44,310,"$357,618.00","$329,009.00","$1,061.32","$57,385.29"
EWR - CID,58057474945,E-FCA-CID-1,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/58057474945,https://www.airlines-manager.com/aircraft/show/116042866,22:00,3:44,299,"$350,180.00","$321,846.00","$1,076.41","$56,135.93"
EWR - CLE,58017973518,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/58017973518,https://www.airlines-manager.com/aircraft/show/106104450,1:45,5:29,112,"$92,088.00","$77,509.00",$692.04,"$20,761.34"
EWR - CLE,58021655948,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/58021655948,https://www.airlines-manager.com/aircraft/show/105731236,5:00,8:44,320,"$198,609.00","$171,795.00",$536.86,"$46,016.52"
EWR - CLE,58034914028,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/58034914028,https://www.airlines-manager.com/aircraft/show/88494376,11:00,14:44,320,"$198,609.00","$171,795.00",$536.86,"$46,016.52"
EWR - CLE,58045346126,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/58045346126,https://www.airlines-manager.com/aircraft/show/88494377,14:45,18:29,320,"$198,609.00","$171,795.00",$536.86,"$46,016.52"
EWR - CLE,58051861688,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/58051861688,https://www.airlines-manager.com/aircraft/show/88494375,19:15,22:59,320,"$198,609.00","$171,795.00",$536.86,"$46,016.52"
EWR - CLT,58017973509,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/58017973509,https://www.airlines-manager.com/aircraft/show/104034462,1:45,5:59,216,"$190,091.00","$163,580.00",$757.31,"$38,640.94"
EWR - CLT,58017973510,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/58017973510,https://www.airlines-manager.com/aircraft/show/99316501,2:45,6:59,216,"190,091$","163,580$",$757.31,"$38,640.94"
EWR - CLT,58034913941,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/58034913941,https://www.airlines-manager.com/aircraft/show/104034464,10:00,14:14,216,"190,091$","163,580$",$757.31,"$38,640.94"
EWR - CLT,58042065597,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/58042065597,https://www.airlines-manager.com/aircraft/show/104034463,13:00,17:14,216,"190,091$","163,580$",$757.31,"$38,640.94"
EWR - CLT,58045346270,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/58045346270,https://www.airlines-manager.com/aircraft/show/104034462,15:45,19:59,216,"190,091$","163,580$",$757.31,"$38,640.94"
EWR - CLT,58048703663,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/58048703663,https://www.airlines-manager.com/aircraft/show/99316501,16:45,20:59,216,"$190,091.00","$163,580.00",$757.31,"$38,640.94"
EWR - CLT,58054747871,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/58054747871,https://www.airlines-manager.com/aircraft/show/104034464,20:00,0:14,216,"$190,091.00","$163,580.00",$757.31,"$38,640.94"
EWR - CLT,58059513376,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/58059513376,https://www.airlines-manager.com/aircraft/show/104034463,23:00,3:14,216,"$190,091.00","$163,580.00",$757.31,"$38,640.94"
EWR - CMH,58021655907,E-BNA-JAX-2,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/58021655907,https://www.airlines-manager.com/aircraft/show/104610409,4:30,8:29,310,"$223,693.00","$199,539.00",$643.67,"$50,093.47"
EWR - CMH,58031343127,E-BNA-JAX-1,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/58031343127,https://www.airlines-manager.com/aircraft/show/104610410,8:30,12:29,310,"$223,693.00","$199,539.00",$643.67,"$50,093.47"
EWR - CMH,58042065605,E-BNA-JAX-5,ERJ-175,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/58042065605,https://www.airlines-manager.com/aircraft/show/96421247,13:00,16:59,112,"$104,115.00","$88,818.00",$793.02,"$22,297.41"
EWR - CMH,58048703733,E-BNA-JAX-4,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/58048703733,https://www.airlines-manager.com/aircraft/show/104610407,17:15,21:14,310,"$223,693.00","$199,539.00",$643.67,"$50,093.47"
EWR - CMH,58059513397,E-BNA-JAX-3,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/58059513397,https://www.airlines-manager.com/aircraft/show/104610408,23:15,3:14,310,"$223,693.00","$199,539.00",$643.67,"$50,093.47"
EWR - COS,58017973451,E-COS-ICT-1,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/58017973451,https://www.airlines-manager.com/aircraft/show/108834808,1:30,9:59,310,"$535,609.00","$493,957.00","$1,593.41","$58,226.76"
EWR - COS,58017973452,E-COS-ICT-4,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/58017973452,https://www.airlines-manager.com/aircraft/show/108834811,3:30,11:59,310,"$535,609.00","$493,957.00","$1,593.41","$58,226.76"
EWR - COS,58042065609,E-COS-ICT-5,ERJ-175,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/58042065609,https://www.airlines-manager.com/aircraft/show/108466265,13:00,21:29,112,"$251,439.00","$223,621.00","$1,996.62","$26,360.04"
EWR - COS,58048703639,E-COS-ICT-3,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/58048703639,https://www.airlines-manager.com/aircraft/show/108834810,16:30,0:59,310,"$535,609.00","$493,957.00","$1,593.41","$58,226.76"
EWR - COS,58051861584,E-COS-ICT-2,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/58051861584,https://www.airlines-manager.com/aircraft/show/108834809,18:30,2:59,310,"$535,609.00","$493,957.00","$1,593.41","$58,226.76"
EWR - CRW,58017973464,E-CRW E,A319-100,https://www.airlines-manager.com/network/showline/50838186,https://www.airlines-manager.com/network/showflight/58017973464,https://www.airlines-manager.com/aircraft/show/120941964,1:30,5:14,216,"$155,815.00","$139,188.00",$644.39,"$37,282.50"
EWR - CRW,58034913976,E-CRW E,A319-100,https://www.airlines-manager.com/network/showline/50838186,https://www.airlines-manager.com/network/showflight/58034913976,https://www.airlines-manager.com/aircraft/show/120941964,10:30,14:14,216,"$155,815.00","$139,188.00",$644.39,"$37,282.50"
EWR - CRW,58042065769,E-CRW E,A319-100,https://www.airlines-manager.com/network/showline/50838186,https://www.airlines-manager.com/network/showflight/58042065769,https://www.airlines-manager.com/aircraft/show/120941964,14:15,17:59,216,"$155,815.00","$139,188.00",$644.39,"$37,282.50"
EWR - CRW,58051861526,E-CRW E,A319-100,https://www.airlines-manager.com/network/showline/50838186,https://www.airlines-manager.com/network/showflight/58051861526,https://www.airlines-manager.com/aircraft/show/120941964,18:00,21:44,216,"$155,815.00","$139,188.00",$644.39,"$37,282.50"
EWR - CRW,58057474924,E-CRW E,A319-100,https://www.airlines-manager.com/network/showline/50838186,https://www.airlines-manager.com/network/showflight/58057474924,https://www.airlines-manager.com/aircraft/show/120941964,21:45,1:29,216,"$155,815.00","$139,188.00",$644.39,"$37,282.50"
EWR - CUN,58017973203,E-CUN-SJU-3,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/58017973203,https://www.airlines-manager.com/aircraft/show/106581306,0:45,8:44,320,"$522,882.00","$475,106.00","$1,484.71","$59,512.23"
EWR - CUN,58017973204,E-CUN-SJU-2,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/58017973204,https://www.airlines-manager.com/aircraft/show/106581305,2:15,10:14,320,"$522,882.00","$475,106.00","$1,484.71","$59,512.23"
EWR - CUN,58042065520,E-CUN-SJU-1,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/58042065520,https://www.airlines-manager.com/aircraft/show/106581304,13:00,20:59,320,"$522,882.00","$475,106.00","$1,484.71","$59,512.23"
EWR - CUN,58042065521,E-CUN-SJU-4,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/58042065521,https://www.airlines-manager.com/aircraft/show/106581307,14:30,22:29,320,"$522,882.00","$475,106.00","$1,484.71","$59,512.23"
EWR - CUN,58057474967,E-CUN-SJU-5,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/58057474967,https://www.airlines-manager.com/aircraft/show/86238754,22:15,6:14,320,"$522,882.00","$475,106.00","$1,484.71","$59,512.23"
EWR - CVG,58017973137,E-BNA-JAX-2,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/58017973137,https://www.airlines-manager.com/aircraft/show/104610409,0:15,4:29,310,"$271,945.00","$244,220.00",$787.81,"$57,689.76"
EWR - CVG,58021655873,E-BNA-JAX-1,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/58021655873,https://www.airlines-manager.com/aircraft/show/104610410,4:15,8:29,310,"$271,945.00","$244,220.00",$787.81,"$57,689.76"
EWR - CVG,58031343112,E-BNA-JAX-5,ERJ-175,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/58031343112,https://www.airlines-manager.com/aircraft/show/96421247,8:15,12:29,112,"$128,787.00","$111,161.00",$992.51,"$26,258.50"
EWR - CVG,58042065578,E-BNA-JAX-4,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/58042065578,https://www.airlines-manager.com/aircraft/show/104610407,13:00,17:14,310,"$271,945.00","$244,220.00",$787.81,"$57,689.76"
EWR - CVG,58051861673,E-BNA-JAX-3,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/58051861673,https://www.airlines-manager.com/aircraft/show/104610408,19:00,23:14,310,"$271,945.00","$244,220.00",$787.81,"$57,689.76"
EWR - DEN,58017973498,E-DEN-SLC-1,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/58017973498,https://www.airlines-manager.com/aircraft/show/86270785,1:45,9:59,310,"$531,120.00","$467,014.00","$1,506.50","$56,722.35"
EWR - DEN,58017973499,E-DEN-SLC-4,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/58017973499,https://www.airlines-manager.com/aircraft/show/90452835,2:45,10:59,310,"$531,120.00","$467,014.00","$1,506.50","$56,722.35"
EWR - DEN,58034913885,E-DEN-SLC-2,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/58034913885,https://www.airlines-manager.com/aircraft/show/87153196,10:00,18:14,310,"$531,120.00","$467,014.00","$1,506.50","$56,722.35"
EWR - DEN,58034913887,E-DEN-SLC-3,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/58034913887,https://www.airlines-manager.com/aircraft/show/86270783,11:00,19:14,310,"$531,120.00","$467,014.00","$1,506.50","$56,722.35"
EWR - DEN,58045346310,E-DEN-SLC-5,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/58045346310,https://www.airlines-manager.com/aircraft/show/90452833,16:00,0:14,310,"$531,120.00","$467,014.00","$1,506.50","$56,722.35"
EWR - DEN,58048703712,E-DEN-SLC-6 B,A319-100,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/58048703712,https://www.airlines-manager.com/aircraft/show/105223076,17:00,1:14,198,"$399,942.00","$348,588.00","$1,760.55","$42,338.62"
EWR - DFW,58017973573,E-DFW-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/58017973573,https://www.airlines-manager.com/aircraft/show/90489724,2:30,9:59,320,"$475,228.00","$410,113.00","$1,281.60","$54,803.52"
EWR - DFW,58017973574,E-DFW-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/58017973574,https://www.airlines-manager.com/aircraft/show/86238753,3:30,10:59,320,"$475,228.00","$410,113.00","$1,281.60","$54,803.52"
EWR - DFW,58034913843,E-DFW-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/58034913843,https://www.airlines-manager.com/aircraft/show/90489725,10:00,17:29,320,"475,228$","410,113$","$1,281.60","$54,803.52"
EWR - DFW,58034913844,E-DFW-ATL-6 B,A319-100,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/58034913844,https://www.airlines-manager.com/aircraft/show/105222360,11:00,18:29,198,"359,120$","313,518$","$1,583.42","$41,895.50"
EWR - DFW,58038353928,E-DFW-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/58038353928,https://www.airlines-manager.com/aircraft/show/86238752,12:15,19:44,320,"475,228$","410,113$","$1,281.60","$54,803.52"
EWR - DFW,58051861689,E-DFW-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/58051861689,https://www.airlines-manager.com/aircraft/show/90489726,19:15,2:44,320,"475,228$","410,113$","$1,281.60","$54,803.52"
EWR - DSM,58017973540,E-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/58017973540,https://www.airlines-manager.com/aircraft/show/110113039,2:00,7:59,112,"$178,037.00","$157,997.00","$1,410.69","$26,406.18"
EWR - DSM,58021655876,E-TUL-DSM-4,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/58021655876,https://www.airlines-manager.com/aircraft/show/110044466,4:15,10:14,310,"$376,654.00","$346,204.00","$1,116.79","$57,861.39"
EWR - DSM,58038353903,E-TUL-DSM-3,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/58038353903,https://www.airlines-manager.com/aircraft/show/110044465,12:00,17:59,310,"$376,654.00","$346,204.00","$1,116.79","$57,861.39"
EWR - DSM,58042065640,E-TUL-DSM-2,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/58042065640,https://www.airlines-manager.com/aircraft/show/110044464,13:45,19:44,310,"$376,654.00","$346,204.00","$1,116.79","$57,861.39"
EWR - DSM,58059513293,E-TUL-DSM-1,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/58059513293,https://www.airlines-manager.com/aircraft/show/110044463,22:30,4:29,281,"$355,721.00","$326,077.00","$1,160.42","$54,497.55"
EWR - DTW,58017973672,E-DTW-YYZ-5,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/58017973672,https://www.airlines-manager.com/aircraft/show/92003921,3:30,7:29,320,"$228,249.00","$191,002.00",$596.88,"$47,950.29"
EWR - DTW,58034913849,E-DTW-YYZ-1,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/58034913849,https://www.airlines-manager.com/aircraft/show/92003925,10:00,13:59,320,"$228,249.00","$191,002.00",$596.88,"$47,950.29"
EWR - DTW,58042065624,E-DTW-YYZ-2,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/58042065624,https://www.airlines-manager.com/aircraft/show/92003924,13:30,17:29,320,"$228,249.00","$191,002.00",$596.88,"$47,950.29"
EWR - DTW,58057474909,E-DTW-YYZ-3,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/58057474909,https://www.airlines-manager.com/aircraft/show/92003923,21:45,1:44,320,"$228,249.00","$191,002.00",$596.88,"$47,950.29"
EWR - DTW,58057474910,E-DTW-YYZ-4,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/58057474910,https://www.airlines-manager.com/aircraft/show/92003922,22:15,2:14,320,"$228,249.00","$191,002.00",$596.88,"$47,950.29"
EWR - DUB,58017973668,E-56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/58017973668,https://www.airlines-manager.com/aircraft/show/106721557,3:30,16:59,598,"$1,662,831.00","$1,551,567.00","$2,594.59","$115,072.95"
EWR - DUB,58021655963,E-56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/58021655963,https://www.airlines-manager.com/aircraft/show/106721559,5:15,18:44,598,"$1,662,831.00","$1,551,567.00","$2,594.59","$115,072.95"
EWR - DUB,58034913968,E-56C-6 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/58034913968,https://www.airlines-manager.com/aircraft/show/106721561,10:30,23:59,598,"$1,662,831.00","$1,551,567.00","$2,594.59","$115,072.95"
EWR - ECP,58017973249,E-MTJ-ECP-3,737-900ER,https://www.airlines-manager.com/network/showline/50761178,https://www.airlines-manager.com/network/showflight/58017973249,https://www.airlines-manager.com/aircraft/show/120706944,1:00,6:44,320,"$371,504.00","$337,111.00","$1,053.47","$58,798.43"
EWR - ECP,58034913879,E-MTJ-ECP-2,737-900ER,https://www.airlines-manager.com/network/showline/50761178,https://www.airlines-manager.com/network/showflight/58034913879,https://www.airlines-manager.com/aircraft/show/120706945,10:00,15:44,320,"$371,504.00","$337,111.00","$1,053.47","$58,798.43"
EWR - ECP,58045346180,E-MTJ-ECP-4,737-900ER,https://www.airlines-manager.com/network/showline/50761178,https://www.airlines-manager.com/network/showflight/58045346180,https://www.airlines-manager.com/aircraft/show/120706943,15:00,20:44,320,"$371,504.00","$337,111.00","$1,053.47","$58,798.43"
EWR - ECP,58051861664,E-MTJ-ECP-1,737-900ER,https://www.airlines-manager.com/network/showline/50761178,https://www.airlines-manager.com/network/showflight/58051861664,https://www.airlines-manager.com/aircraft/show/120706946,19:00,0:44,320,"$371,504.00","$337,111.00","$1,053.47","$58,798.43"
EWR - EDI,58021655856,E-56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/58021655856,https://www.airlines-manager.com/aircraft/show/106721558,4:15,17:59,598,"$1,648,512.00","$1,541,221.00","$2,577.29","$112,224.83"
EWR - EDI,58024780666,E-56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/58024780666,https://www.airlines-manager.com/aircraft/show/106721560,6:00,19:44,598,"$1,648,512.00","$1,541,221.00","$2,577.29","$112,224.83"
EWR - EDI,58054747809,E-56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/58054747809,https://www.airlines-manager.com/aircraft/show/106721560,19:45,9:29,598,"$1,648,512.00","$1,541,221.00","$2,577.29","$112,224.83"
EWR - ELP,58017973158,E-ELP-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/58017973158,https://www.airlines-manager.com/aircraft/show/103365577,0:30,9:59,320,"$593,056.00","$543,274.00","$1,697.73","$57,287.24"
EWR - ELP,58017973159,E-ELP-SAT-5 B,A319-100,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/58017973159,https://www.airlines-manager.com/aircraft/show/110582847,2:30,11:59,198,"$446,662.00","$410,459.00","$2,073.03","$43,282.14"
EWR - ELP,58034913863,E-ELP-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/58034913863,https://www.airlines-manager.com/aircraft/show/103365578,10:00,19:29,320,"$593,056.00","$543,274.00","$1,697.73","$57,287.24"
EWR - ELP,58038353870,E-ELP-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/58038353870,https://www.airlines-manager.com/aircraft/show/103365575,12:00,21:29,320,"$593,056.00","$543,274.00","$1,697.73","$57,287.24"
EWR - ELP,58048703611,E-ELP-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/58048703611,https://www.airlines-manager.com/aircraft/show/103365576,16:15,1:44,320,"$593,056.00","$543,274.00","$1,697.73","$57,287.24"
EWR - EUG,58017973488,E-EUG-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/58017973488,https://www.airlines-manager.com/aircraft/show/119220438,1:45,13:29,320,"$729,984.00","$674,719.00","$2,108.50","$57,504.46"
EWR - EUG,58038353883,E-EUG-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/58038353883,https://www.airlines-manager.com/aircraft/show/119220435,12:00,23:44,320,"$729,984.00","$674,719.00","$2,108.50","$57,504.46"
EWR - EUG,58042065681,E-EUG-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/58042065681,https://www.airlines-manager.com/aircraft/show/119220436,14:00,1:44,320,"$729,984.00","$674,719.00","$2,108.50","$57,504.46"
EWR - EUG,58060881887,E-EUG-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/58060881887,https://www.airlines-manager.com/aircraft/show/119220437,23:45,11:29,320,"$729,984.00","$674,719.00","$2,108.50","$57,504.46"
EWR - FAR,58017973497,E-LIT-FAR-4,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/58017973497,https://www.airlines-manager.com/aircraft/show/86270784,1:45,8:29,310,"$425,315.00","$392,348.00","$1,265.64","$58,269.50"
EWR - FAR,58021655951,E-LIT-FAR-3,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/58021655951,https://www.airlines-manager.com/aircraft/show/86270786,5:00,11:44,310,"$425,315.00","$392,348.00","$1,265.64","$58,269.50"
EWR - FAR,58045346182,E-LIT-FAR-2,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/58045346182,https://www.airlines-manager.com/aircraft/show/86270787,15:00,21:44,310,"$425,315.00","$392,348.00","$1,265.64","$58,269.50"
EWR - FAR,58051861699,E-LIT-FAR-1,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/58051861699,https://www.airlines-manager.com/aircraft/show/90452834,19:15,1:59,310,"$425,315.00","$392,348.00","$1,265.64","$58,269.50"
EWR - FAT,58017973108,E-PSP-FAT-2,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/58017973108,https://www.airlines-manager.com/aircraft/show/119220451,0:15,11:44,338,"$779,642.00","$731,517.00","$2,164.25","$63,702.50"
EWR - FAT,58034914002,E-PSP-FAT-3,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/58034914002,https://www.airlines-manager.com/aircraft/show/119220452,11:00,22:29,338,"$779,642.00","$731,517.00","$2,164.25","$63,702.50"
EWR - FAT,58042065476,E-PSP-FAT-4,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/58042065476,https://www.airlines-manager.com/aircraft/show/116672810,13:00,0:29,338,"$779,642.00","$731,517.00","$2,164.25","$63,702.50"
EWR - FAT,58057474960,E-PSP-FAT-1,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/58057474960,https://www.airlines-manager.com/aircraft/show/119220450,22:15,9:44,338,"$779,642.00","$731,517.00","$2,164.25","$63,702.50"
EWR - FCA,58038353907,E-FCA-CID-1,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/58038353907,https://www.airlines-manager.com/aircraft/show/116042866,12:00,21:59,310,"$626,012.00","$581,310.00","$1,875.19","$58,228.05"
EWR - FCA,58045346242,E-FCA-CID-4,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/58045346242,https://www.airlines-manager.com/aircraft/show/116042863,15:15,1:14,310,"$626,012.00","$581,310.00","$1,875.19","$58,228.05"
EWR - FCA,58048703615,E-FCA-CID-3,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/58048703615,https://www.airlines-manager.com/aircraft/show/116042864,16:15,2:14,310,"$626,012.00","$581,310.00","$1,875.19","$58,228.05"
EWR - FCA,58057474944,E-FCA-CID-2,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/58057474944,https://www.airlines-manager.com/aircraft/show/116042865,22:00,7:59,310,"$626,012.00","$581,310.00","$1,875.19","$58,228.05"
EWR - FCO,58017973589,E-84A-2 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/58017973589,https://www.airlines-manager.com/aircraft/show/94521252,2:30,19:59,852,"$2,914,869.00","$2,640,955.00","$3,099.71","$151,055.58"
EWR - FCO,58038353916,E-84A-3 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/58038353916,https://www.airlines-manager.com/aircraft/show/90656553,12:00,5:29,852,"$2,914,869.00","$2,640,955.00","$3,099.71","$151,055.58"
EWR - FLL,58017973687,E-DTW-YYZ-2,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/58017973687,https://www.airlines-manager.com/aircraft/show/92003924,3:45,9:59,320,"$392,797.00","$352,784.00","$1,102.45","$56,596.36"
EWR - FLL,58024780649,E-DTW-YYZ-4,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/58024780649,https://www.airlines-manager.com/aircraft/show/92003922,5:45,11:59,320,"$392,797.00","$352,784.00","$1,102.45","$56,596.36"
EWR - FLL,58034914033,E-DTW-YYZ-5,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/58034914033,https://www.airlines-manager.com/aircraft/show/92003921,11:00,17:14,320,"$392,797.00","$352,784.00","$1,102.45","$56,596.36"
EWR - FLL,58038353865,E-DTW-YYZ-3,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/58038353865,https://www.airlines-manager.com/aircraft/show/92003923,12:00,18:14,320,"$392,797.00","$352,784.00","$1,102.45","$56,596.36"
EWR - FLL,58048703749,E-DTW-YYZ-1,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/58048703749,https://www.airlines-manager.com/aircraft/show/92003925,17:30,23:44,320,"$392,797.00","$352,784.00","$1,102.45","$56,596.36"
EWR - FRA,58017973616,E-56B-5 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/58017973616,https://www.airlines-manager.com/aircraft/show/94521253,2:45,18:44,748,"$2,453,250.00","$2,188,346.00","$2,925.60","$136,914.24"
EWR - FRA,58021655911,E-56B-3 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/58021655911,https://www.airlines-manager.com/aircraft/show/90656555,4:30,20:29,748,"$2,453,250.00","$2,188,346.00","$2,925.60","$136,914.24"
EWR - FRA,58024780698,E-56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/58024780698,https://www.airlines-manager.com/aircraft/show/94521251,6:15,22:14,748,"$2,215,081.00","$2,014,089.00","$2,692.63","$126,011.82"
EWR - FSD,58021655874,E-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/58021655874,https://www.airlines-manager.com/aircraft/show/107161240,4:15,10:59,310,"$412,992.00","$380,511.00","$1,227.45","$56,511.53"
EWR - FSD,58031343186,E-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/58031343186,https://www.airlines-manager.com/aircraft/show/86782214,9:00,15:44,112,"$194,519.00","$172,989.00","$1,544.54","$25,691.44"
EWR - FSD,58034914084,E-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/58034914084,https://www.airlines-manager.com/aircraft/show/107161239,11:00,17:44,310,"$412,992.00","$380,511.00","$1,227.45","$56,511.53"
EWR - FSD,58045346240,E-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/58045346240,https://www.airlines-manager.com/aircraft/show/107161241,15:15,21:59,310,"$412,992.00","$380,511.00","$1,227.45","$56,511.53"
EWR - FSD,58051861552,E-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/58051861552,https://www.airlines-manager.com/aircraft/show/107161238,18:15,0:59,286,"$393,955.00","$362,243.00","$1,266.58","$53,798.47"
EWR - GRR,58031343134,E-RAP-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/58031343134,https://www.airlines-manager.com/aircraft/show/116042862,8:30,12:59,310,"$278,034.00","$253,092.00",$816.43,"$56,451.75"
EWR - GRR,58042065719,E-RAP-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/58042065719,https://www.airlines-manager.com/aircraft/show/116042859,14:00,18:29,310,"$278,034.00","$253,092.00",$816.43,"$56,451.75"
EWR - GRR,58054747794,E-RAP-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/58054747794,https://www.airlines-manager.com/aircraft/show/116042860,19:30,23:59,310,"$278,034.00","$253,092.00",$816.43,"$56,451.75"
EWR - GRR,58054747795,E-RAP-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/58054747795,https://www.airlines-manager.com/aircraft/show/116042861,20:45,1:14,310,"$278,034.00","$253,092.00",$816.43,"$56,451.75"
EWR - GSO,58017973695,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/58017973695,https://www.airlines-manager.com/aircraft/show/119220544,3:45,7:29,310,"$217,652.00","$195,033.00",$629.14,"$52,240.98"
EWR - GSO,58034913926,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/58034913926,https://www.airlines-manager.com/aircraft/show/119220543,10:00,13:44,310,"$217,652.00","$195,033.00",$629.14,"$52,240.98"
EWR - GSO,58042065775,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/58042065775,https://www.airlines-manager.com/aircraft/show/119220542,14:30,18:14,310,"$217,652.00","$195,033.00",$629.14,"$52,240.98"
EWR - GSO,58059513400,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/58059513400,https://www.airlines-manager.com/aircraft/show/119220545,23:15,2:59,310,"$217,652.00","$195,033.00",$629.14,"$52,240.98"
EWR - HEL,58034913979,E-56D-6 E,787-10,https://www.airlines-manager.com/network/showline/50072206,https://www.airlines-manager.com/network/showflight/58034913979,https://www.airlines-manager.com/aircraft/show/118644441,10:45,3:29,648,"$2,056,992.00","$1,921,807.00","$2,965.75","$114,849.02"
EWR - HEL,58034913980,E-56D-7 E,787-10,https://www.airlines-manager.com/network/showline/50072206,https://www.airlines-manager.com/network/showflight/58034913980,https://www.airlines-manager.com/aircraft/show/118644442,11:00,3:44,648,"$2,056,992.00","$1,921,807.00","$2,965.75","$114,849.02"
EWR - HEL,58054747844,E-56D-2 E,787-10,https://www.airlines-manager.com/network/showline/50072206,https://www.airlines-manager.com/network/showflight/58054747844,https://www.airlines-manager.com/aircraft/show/118644437,20:00,12:44,583,"$1,918,366.00","$1,789,864.00","$3,070.09","$106,963.98"
EWR - IAH,58017973665,E-IAH-LAS-3,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/58017973665,https://www.airlines-manager.com/aircraft/show/105859512,3:30,10:59,338,"$514,124.00","$466,262.00","$1,379.47","$62,306.73"
EWR - IAH,58021655894,E-IAH-LAS-5,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/58021655894,https://www.airlines-manager.com/aircraft/show/105859514,4:30,11:59,338,"$514,124.00","$466,262.00","$1,379.47","$62,306.73"
EWR - IAH,58027885486,E-IAH-LAS-1,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/58027885486,https://www.airlines-manager.com/aircraft/show/105859510,7:30,14:59,338,"$514,124.00","$466,262.00","$1,379.47","$62,306.73"
EWR - IAH,58034913993,E-IAH-LAS-2,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/58034913993,https://www.airlines-manager.com/aircraft/show/105859511,11:00,18:29,338,"$514,124.00","$466,262.00","$1,379.47","$62,306.73"
EWR - IAH,58038353855,E-IAH-LAS-4,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/58038353855,https://www.airlines-manager.com/aircraft/show/105859513,12:00,19:29,338,"$514,124.00","$466,262.00","$1,379.47","$62,306.73"
EWR - IAH,58045346324,Corporate Jet,A320-200,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/58045346324,https://www.airlines-manager.com/aircraft/show/101412921,16:00,23:29,84,"$360,563.00","$313,010.00","$3,726.31","$41,827.62"
EWR - IAH,58051861632,E-IAH-LAS-6,ERJ-175,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/58051861632,https://www.airlines-manager.com/aircraft/show/105864236,18:45,2:14,112,"223,737$","191,530$","$1,710.09","$25,594.21"
EWR - ICT,58017973267,E-COS-ICT-3,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/58017973267,https://www.airlines-manager.com/aircraft/show/108834810,1:00,7:59,310,"442,853$","408,153$","$1,316.62","$58,446.73"
EWR - ICT,58017973269,E-COS-ICT-2,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/58017973269,https://www.airlines-manager.com/aircraft/show/108834809,3:00,9:59,310,"442,853$","408,153$","$1,316.62","$58,446.73"
EWR - ICT,58034914089,E-COS-ICT-1,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/58034914089,https://www.airlines-manager.com/aircraft/show/108834808,11:00,17:59,310,"442,853$","408,153$","$1,316.62","$58,446.73"
EWR - ICT,58042065584,E-COS-ICT-4,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/58042065584,https://www.airlines-manager.com/aircraft/show/108834811,13:00,19:59,310,"$442,853.00","$408,153.00","$1,316.62","$58,446.73"
EWR - ICT,58057474899,E-COS-ICT-5,ERJ-175,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/58057474899,https://www.airlines-manager.com/aircraft/show/108466265,21:30,4:29,112,"$209,485.00","$186,465.00","$1,664.87","$26,701.43"
EWR - IND,58017973154,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/58017973154,https://www.airlines-manager.com/aircraft/show/88494376,0:30,4:59,320,"$295,294.00","$263,726.00",$824.14,"$58,823.64"
EWR - IND,58021655859,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/58021655859,https://www.airlines-manager.com/aircraft/show/88494377,4:15,8:44,320,"$295,294.00","$263,726.00",$824.14,"$58,823.64"
EWR - IND,58034914027,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/58034914027,https://www.airlines-manager.com/aircraft/show/88494375,11:00,15:29,320,"295,294$","263,726$",$824.14,"$58,823.64"
EWR - IND,58048703764,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/58048703764,https://www.airlines-manager.com/aircraft/show/106104450,17:30,21:59,112,"140,854$","123,199$","$1,099.99","$27,479.33"
EWR - IND,58054747944,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/58054747944,https://www.airlines-manager.com/aircraft/show/105731236,20:45,1:14,320,"295,294$","263,726$",$824.14,"$58,823.64"
EWR - JAN,58017973530,E-LIT-FAR-1,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/58017973530,https://www.airlines-manager.com/aircraft/show/90452834,2:00,8:14,310,"389,232$","358,551$","$1,156.62","$57,521.55"
EWR - JAN,58031343124,E-LIT-FAR-4,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/58031343124,https://www.airlines-manager.com/aircraft/show/86270784,8:30,14:44,310,"$389,232.00","$358,551.00","$1,156.62","$57,521.55"
EWR - JAN,58038353891,E-LIT-FAR-3,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/58038353891,https://www.airlines-manager.com/aircraft/show/86270786,12:00,18:14,310,"$389,232.00","$358,551.00","$1,156.62","$57,521.55"
EWR - JAN,58057474921,E-LIT-FAR-2,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/58057474921,https://www.airlines-manager.com/aircraft/show/86270787,21:45,3:59,310,"$389,232.00","$358,551.00","$1,156.62","$57,521.55"
EWR - JAX,58017973556,E-BNA-JAX-4,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/58017973556,https://www.airlines-manager.com/aircraft/show/104610407,2:15,7:29,310,"$337,690.00","$308,667.00",$995.70,"$58,980.96"
EWR - JAX,58031343103,E-BNA-JAX-3,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/58031343103,https://www.airlines-manager.com/aircraft/show/104610408,8:15,13:29,310,"$337,690.00","$308,667.00",$995.70,"$58,980.96"
EWR - JAX,58042065703,E-BNA-JAX-2,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/58042065703,https://www.airlines-manager.com/aircraft/show/104610409,14:00,19:14,310,"$337,690.00","$308,667.00",$995.70,"$58,980.96"
EWR - JAX,58051861513,E-BNA-JAX-1,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/58051861513,https://www.airlines-manager.com/aircraft/show/104610410,18:00,23:14,310,"$337,690.00","$308,667.00",$995.70,"$58,980.96"
EWR - JAX,58057474956,E-BNA-JAX-5,ERJ-175,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/58057474956,https://www.airlines-manager.com/aircraft/show/96421247,22:00,3:14,112,"$160,212.00","$141,366.00","$1,262.20","$27,012.61"
EWR - KEF,58048703671,E-56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/58048703671,https://www.airlines-manager.com/aircraft/show/106721557,17:00,4:14,598,"$1,343,998.00","$1,254,987.00","$2,098.64","$111,719.91"
EWR - KEF,58051861492,E-56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/58051861492,https://www.airlines-manager.com/aircraft/show/106721558,18:00,5:14,598,"$1,343,998.00","$1,254,987.00","$2,098.64","$111,719.91"
EWR - KEF,58051861493,E-56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/58051861493,https://www.airlines-manager.com/aircraft/show/106721559,18:45,5:59,598,"$1,343,998.00","$1,254,987.00","$2,098.64","$111,719.91"
EWR - LAS,58017973104,E-IAH-LAS-2,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/58017973104,https://www.airlines-manager.com/aircraft/show/105859511,0:15,10:59,338,"$737,877.00","$673,713.00","$1,993.23","$62,768.29"
EWR - LAS,58017973105,E-IAH-LAS-4,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/58017973105,https://www.airlines-manager.com/aircraft/show/105859513,1:15,11:59,338,"$737,877.00","$673,713.00","$1,993.23","$62,768.29"
EWR - LAS,58017973106,E-IAH-LAS-6,ERJ-175,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/58017973106,https://www.airlines-manager.com/aircraft/show/105864236,2:15,12:59,112,"$318,546.00","$274,501.00","$2,450.90","$25,574.63"
EWR - LAS,58038353856,E-IAH-LAS-5,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/58038353856,https://www.airlines-manager.com/aircraft/show/105859514,12:00,22:44,338,"$737,877.00","$673,713.00","$1,993.23","$62,768.29"
EWR - LAS,58045346146,E-IAH-LAS-1,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/58045346146,https://www.airlines-manager.com/aircraft/show/105859510,15:00,1:44,338,"$737,877.00","$673,713.00","$1,993.23","$62,768.29"
EWR - LAS,58048703645,E-IAH-LAS-3,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/58048703645,https://www.airlines-manager.com/aircraft/show/105859512,16:45,3:29,338,"$737,877.00","$673,713.00","$1,993.23","$62,768.29"
EWR - LAX,58017973034,E-SFO-LAX-4,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/58017973034,https://www.airlines-manager.com/aircraft/show/89233030,0:00,11:29,400,"$937,587.00","$846,364.00","$2,115.91","$73,703.69"
EWR - LAX,58017973035,E-SFO-LAX-5,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/58017973035,https://www.airlines-manager.com/aircraft/show/89233027,2:00,13:29,400,"$937,587.00","$846,364.00","$2,115.91","$73,703.69"
EWR - LAX,58038353933,E-SFO-LAX-1,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/58038353933,https://www.airlines-manager.com/aircraft/show/83716137,12:30,23:59,400,"$937,587.00","$846,364.00","$2,115.91","$73,703.69"
EWR - LAX,58042065652,E-SFO-LAX-2,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/58042065652,https://www.airlines-manager.com/aircraft/show/89233028,14:00,1:29,400,"937,587$","846,364$","$2,115.91","$73,703.69"
EWR - LAX,58045346247,E-SFO-LAX-3,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/58045346247,https://www.airlines-manager.com/aircraft/show/89233029,15:30,2:59,400,"$937,587.00","$846,364.00","$2,115.91","$73,703.69"
EWR - LEX,58017973633,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/58017973633,https://www.airlines-manager.com/aircraft/show/119220545,3:00,7:29,310,"$273,360.00","$250,152.00",$806.94,"$55,795.99"
EWR - LEX,58034913927,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/58034913927,https://www.airlines-manager.com/aircraft/show/119220544,10:00,14:29,310,"$273,360.00","$250,152.00",$806.94,"$55,795.99"
EWR - LEX,58042065641,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/58042065641,https://www.airlines-manager.com/aircraft/show/119220543,13:45,18:14,310,"$273,360.00","$250,152.00",$806.94,"$55,795.99"
EWR - LEX,58051861553,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/58051861553,https://www.airlines-manager.com/aircraft/show/119220542,18:15,22:44,284,"$260,031.00","$237,241.00",$835.36,"$52,916.21"
EWR - LHR,58017973566,E-56A-1 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/58017973566,https://www.airlines-manager.com/aircraft/show/106813007,2:15,16:44,748,"$2,231,685.00","$1,980,082.00","$2,647.17","$136,714.52"
EWR - LHR,58038353938,E-56A-4 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/58038353938,https://www.airlines-manager.com/aircraft/show/106813010,12:30,2:59,748,"$2,231,685.00","$1,980,082.00","$2,647.17","$136,714.52"
EWR - LHR,58051861558,E-56A-5 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/58051861558,https://www.airlines-manager.com/aircraft/show/106813011,18:15,8:44,748,"$2,015,569.00","$1,821,209.00","$2,434.77","$125,745.16"
EWR - LIS,58024780642,E-84A-4 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/58024780642,https://www.airlines-manager.com/aircraft/show/90656551,5:30,19:44,852,"$2,340,226.00","$2,131,891.00","$2,502.22","$149,781.57"
EWR - LIS,58038353930,E-84A-1 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/58038353930,https://www.airlines-manager.com/aircraft/show/90656554,12:15,2:29,852,"$2,340,226.00","$2,131,891.00","$2,502.22","$149,781.57"
EWR - LIT,58031343125,E-LIT-FAR-2,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/58031343125,https://www.airlines-manager.com/aircraft/show/86270787,8:30,14:44,310,"$395,001.00","$364,044.00","$1,174.34","$58,402.78"
EWR - LIT,58042065563,E-LIT-FAR-1,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/58042065563,https://www.airlines-manager.com/aircraft/show/90452834,13:00,19:14,310,"$395,001.00","$364,044.00","$1,174.34","$58,402.78"
EWR - LIT,58054747789,E-LIT-FAR-4,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/58054747789,https://www.airlines-manager.com/aircraft/show/86270784,19:30,1:44,310,"$395,001.00","$364,044.00","$1,174.34","$58,402.78"
EWR - LIT,58059513323,E-LIT-FAR-3,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/58059513323,https://www.airlines-manager.com/aircraft/show/86270786,22:45,4:59,310,"$395,001.00","$364,044.00","$1,174.34","$58,402.78"
EWR - MAD,58017973087,E-56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/58017973087,https://www.airlines-manager.com/aircraft/show/89124072,0:00,14:59,748,"$2,301,537.00","$2,048,578.00","$2,738.74","$136,723.78"
EWR - MAD,58054747930,E-56B-3 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/58054747930,https://www.airlines-manager.com/aircraft/show/90656555,20:30,11:29,748,"$2,301,537.00","$2,048,578.00","$2,738.74","$136,723.78"
EWR - MAD,58057474989,E-56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/58057474989,https://www.airlines-manager.com/aircraft/show/94521251,22:15,13:14,748,"$2,077,752.00","$1,884,361.00","$2,519.20","$125,763.80"
EWR - MAF,58017973394,E-RDM-MAF-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761173,https://www.airlines-manager.com/network/showflight/58017973394,https://www.airlines-manager.com/aircraft/show/120706940,1:30,9:59,272,"$490,066.00","$459,903.00","$1,690.82","$54,212.53"
EWR - MAF,58027885467,E-RDM-MAF-5 B,A319-100,https://www.airlines-manager.com/network/showline/50761173,https://www.airlines-manager.com/network/showflight/58027885467,https://www.airlines-manager.com/aircraft/show/120707022,7:00,15:29,198,"$407,839.00","$375,811.00","$1,898.04","$44,299.92"
EWR - MAF,58034913824,E-RDM-MAF-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761173,https://www.airlines-manager.com/network/showflight/58034913824,https://www.airlines-manager.com/aircraft/show/120706941,10:00,18:29,272,"$490,066.00","$459,903.00","$1,690.82","$54,212.53"
EWR - MAF,58051861487,E-RDM-MAF-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761173,https://www.airlines-manager.com/network/showflight/58051861487,https://www.airlines-manager.com/aircraft/show/120706939,18:00,2:29,272,"$490,066.00","$459,903.00","$1,690.82","$54,212.53"
EWR - MAF,58060881875,E-RDM-MAF-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761173,https://www.airlines-manager.com/network/showflight/58060881875,https://www.airlines-manager.com/aircraft/show/120706942,23:45,8:14,272,"490,066$","459,903$","$1,690.82","$54,212.53"
EWR - MBJ,58017973670,E-56D-7 E,787-10,https://www.airlines-manager.com/network/showline/50072192,https://www.airlines-manager.com/network/showflight/58017973670,https://www.airlines-manager.com/aircraft/show/118644442,3:30,10:59,648,"945,645$","883,866$","$1,363.99","$118,111.27"
EWR - MBJ,58034914112,E-56D-5 E,787-10,https://www.airlines-manager.com/network/showline/50072192,https://www.airlines-manager.com/network/showflight/58034914112,https://www.airlines-manager.com/aircraft/show/118644440,11:15,18:44,648,"945,645$","883,866$","$1,363.99","$118,111.27"
EWR - MBJ,58054747810,E-56D-1 E,787-10,https://www.airlines-manager.com/network/showline/50072192,https://www.airlines-manager.com/network/showflight/58054747810,https://www.airlines-manager.com/aircraft/show/118644436,19:45,3:14,639,"928,544$","867,239$","$1,357.18","$115,889.40"
EWR - MCI,58017973688,E-ELP-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/58017973688,https://www.airlines-manager.com/aircraft/show/103365578,3:45,9:59,320,"396,816$","357,840$","$1,118.25","$57,407.49"
EWR - MCI,58024780651,E-ELP-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/58024780651,https://www.airlines-manager.com/aircraft/show/103365575,5:45,11:59,320,"$396,816.00","$357,840.00","$1,118.25","$57,407.49"
EWR - MCI,58034913859,E-ELP-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/58034913859,https://www.airlines-manager.com/aircraft/show/103365576,10:00,16:14,320,"$396,816.00","$357,840.00","$1,118.25","$57,407.49"
EWR - MCI,58051861543,E-ELP-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/58051861543,https://www.airlines-manager.com/aircraft/show/103365577,18:15,0:29,320,"$396,816.00","$357,840.00","$1,118.25","$57,407.49"
EWR - MCI,58054747908,E-ELP-SAT-5 B,A319-100,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/58054747908,https://www.airlines-manager.com/aircraft/show/110582847,20:15,2:29,198,"$300,349.00","$272,622.00","$1,376.88","$43,736.15"
EWR - MCO,58017973471,E-IAH-LAS-1,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/58017973471,https://www.airlines-manager.com/aircraft/show/105859510,1:45,7:29,338,"$391,232.00","$351,937.00","$1,041.23","$61,384.36"
EWR - MCO,58034913994,E-IAH-LAS-3,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/58034913994,https://www.airlines-manager.com/aircraft/show/105859512,11:00,16:44,338,"391,232$","351,937$","$1,041.23","$61,384.36"
EWR - MCO,58042065608,E-IAH-LAS-6,ERJ-175,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/58042065608,https://www.airlines-manager.com/aircraft/show/105864236,13:00,18:44,112,"171,315$","145,397$","$1,298.19","$25,359.94"
EWR - MCO,58051861564,E-IAH-LAS-2,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/58051861564,https://www.airlines-manager.com/aircraft/show/105859511,18:30,0:14,338,"391,232$","351,937$","$1,041.23","$61,384.36"
EWR - MCO,58054747772,E-IAH-LAS-4,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/58054747772,https://www.airlines-manager.com/aircraft/show/105859513,19:30,1:14,338,"391,232$","351,937$","$1,041.23","$61,384.36"
EWR - MCO,58059513302,E-IAH-LAS-5,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/58059513302,https://www.airlines-manager.com/aircraft/show/105859514,22:45,4:29,338,"391,232$","351,937$","$1,041.23","$61,384.36"
EWR - MEM,58017973365,E-RNO-MEM-4,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/58017973365,https://www.airlines-manager.com/aircraft/show/99920619,1:15,6:59,320,"365,097$","328,039$","$1,025.12","$57,216.10"
EWR - MEM,58017973366,E-RNO-MEM-3,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/58017973366,https://www.airlines-manager.com/aircraft/show/99920620,3:45,9:29,320,"365,097$","328,039$","$1,025.12","$57,216.10"
EWR - MEM,58034913958,E-RNO-MEM-2,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/58034913958,https://www.airlines-manager.com/aircraft/show/99920621,10:15,15:59,320,"365,097$","328,039$","$1,025.12","$57,216.10"
EWR - MEM,58054747904,E-RNO-MEM-5 B,A319-100,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/58054747904,https://www.airlines-manager.com/aircraft/show/100096560,20:15,1:59,198,"$276,827.00","$250,611.00","$1,265.71","$43,711.22"
EWR - MEM,58057474879,E-RNO-MEM-1,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/58057474879,https://www.airlines-manager.com/aircraft/show/99920622,21:30,3:14,320,"$365,097.00","$328,039.00","$1,025.12","$57,216.10"
EWR - MEX,58017973479,E-DTW-YYZ-3,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/58017973479,https://www.airlines-manager.com/aircraft/show/92003923,1:45,11:59,320,"$641,733.00","$578,133.00","$1,806.67","$56,495.08"
EWR - MEX,58034913942,E-DTW-YYZ-6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/58034913942,https://www.airlines-manager.com/aircraft/show/104258433,10:00,20:14,216,"$488,482.00","$441,977.00","$2,046.19","$43,189.93"
EWR - MEX,58038353864,E-DTW-YYZ-4,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/58038353864,https://www.airlines-manager.com/aircraft/show/92003922,12:00,22:14,320,"$641,733.00","$578,133.00","$1,806.67","$56,495.08"
EWR - MEX,58048703724,E-DTW-YYZ-5,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/58048703724,https://www.airlines-manager.com/aircraft/show/92003921,17:15,3:29,320,"$641,733.00","$578,133.00","$1,806.67","$56,495.08"
EWR - MEX,58048703725,E-DTW-YYZ-2,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/58048703725,https://www.airlines-manager.com/aircraft/show/92003924,17:30,3:44,320,"$641,733.00","$578,133.00","$1,806.67","$56,495.08"
EWR - MEX,58054747905,E-DTW-YYZ-6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/58054747905,https://www.airlines-manager.com/aircraft/show/104258433,20:15,6:29,216,"$488,482.00","$441,977.00","$2,046.19","$43,189.93"
EWR - MEX,58060881881,E-DTW-YYZ-1,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/58060881881,https://www.airlines-manager.com/aircraft/show/92003925,23:45,9:59,303,"$612,105.00","$549,693.00","$1,814.17","$53,715.93"
EWR - MFR,58017973487,E-EUG-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/58017973487,https://www.airlines-manager.com/aircraft/show/119220436,1:45,13:29,320,"$717,698.00","$661,635.00","$2,067.61","$56,389.35"
EWR - MFR,58038353884,E-EUG-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/58038353884,https://www.airlines-manager.com/aircraft/show/119220437,12:00,23:44,320,"$717,698.00","$661,635.00","$2,067.61","$56,389.35"
EWR - MFR,58042065682,E-EUG-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/58042065682,https://www.airlines-manager.com/aircraft/show/119220438,14:00,1:44,320,"$717,698.00","$661,635.00","$2,067.61","$56,389.35"
EWR - MFR,58060881886,E-EUG-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/58060881886,https://www.airlines-manager.com/aircraft/show/119220435,23:45,11:29,320,"$717,698.00","$661,635.00","$2,067.61","$56,389.35"
EWR - MHT,58017973693,E-FCA-CID-1,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/58017973693,https://www.airlines-manager.com/aircraft/show/116042866,3:45,6:44,310,"$126,850.00","$107,713.00",$347.46,"$36,104.92"
EWR - MHT,58031343179,E-FCA-CID-4,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/58031343179,https://www.airlines-manager.com/aircraft/show/116042863,9:00,11:59,310,"$126,850.00","$107,713.00",$347.46,"$36,104.92"
EWR - MHT,58034913918,E-FCA-CID-3,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/58034913918,https://www.airlines-manager.com/aircraft/show/116042864,10:00,12:59,310,"$126,850.00","$107,713.00",$347.46,"$36,104.92"
EWR - MHT,58034913919,E-STL-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/58034913919,https://www.airlines-manager.com/aircraft/show/98887257,11:00,13:59,112,"$56,500.00","$44,653.00",$398.69,"$14,967.49"
EWR - MHT,58045346268,E-FCA-CID-2,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/58045346268,https://www.airlines-manager.com/aircraft/show/116042865,15:45,18:44,310,"$126,850.00","$107,713.00",$347.46,"$36,104.92"
EWR - MIA,58017973571,E-MIA-ORD-5,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/58017973571,https://www.airlines-manager.com/aircraft/show/113251309,2:30,8:44,338,"$426,856.00","$383,770.00","$1,135.41","$61,567.38"
EWR - MIA,58021655811,E-MIA-ORD-1,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/58021655811,https://www.airlines-manager.com/aircraft/show/113251305,4:00,10:14,338,"$426,856.00","$383,770.00","$1,135.41","$61,567.38"
EWR - MIA,58034913829,E-MIA-ORD-2,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/58034913829,https://www.airlines-manager.com/aircraft/show/113251306,10:00,16:14,338,"$426,856.00","$383,770.00","$1,135.41","$61,567.38"
EWR - MIA,58034913830,E-MIA-ORD-4,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/58034913830,https://www.airlines-manager.com/aircraft/show/113251308,11:00,17:14,338,"$426,856.00","$383,770.00","$1,135.41","$61,567.38"
EWR - MIA,58048703621,E-MIA-ORD-3,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/58048703621,https://www.airlines-manager.com/aircraft/show/113251307,16:30,22:44,338,"$426,856.00","$383,770.00","$1,135.41","$61,567.38"
EWR - MIA,58059513422,Corporate Jet,A320-200,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/58059513422,https://www.airlines-manager.com/aircraft/show/101412921,23:30,5:44,84,"300,798$","257,952$","$3,070.86","$41,382.67"
EWR - MKE,58017973663,E-BNA-JAX-5,ERJ-175,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/58017973663,https://www.airlines-manager.com/aircraft/show/96421247,3:15,8:14,112,"150,329$","132,337$","$1,181.58","$26,555.92"
EWR - MKE,58027885497,E-BNA-JAX-4,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/58027885497,https://www.airlines-manager.com/aircraft/show/104610407,7:30,12:29,310,"316,661$","288,776$",$931.54,"$57,948.36"
EWR - MKE,58042065702,E-BNA-JAX-3,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/58042065702,https://www.airlines-manager.com/aircraft/show/104610408,14:00,18:59,310,"316,661$","288,776$",$931.54,"$57,948.36"
EWR - MKE,58051861704,E-BNA-JAX-2,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/58051861704,https://www.airlines-manager.com/aircraft/show/104610409,19:15,0:14,310,"316,661$","288,776$",$931.54,"$57,948.36"
EWR - MKE,58059513398,E-BNA-JAX-1,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/58059513398,https://www.airlines-manager.com/aircraft/show/104610410,23:15,4:14,310,"$316,661.00","$288,776.00",$931.54,"$57,948.36"
EWR - MSN,58017973584,E-RAP-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/58017973584,https://www.airlines-manager.com/aircraft/show/116042859,2:30,7:44,310,"$331,635.00","$304,391.00",$981.91,"$58,163.89"
EWR - MSN,58031343157,E-RAP-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/58031343157,https://www.airlines-manager.com/aircraft/show/116042860,8:45,13:59,310,"$331,635.00","$304,391.00",$981.91,"$58,163.89"
EWR - MSN,58034913917,E-RAP-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/58034913917,https://www.airlines-manager.com/aircraft/show/116042861,10:00,15:14,310,"$331,635.00","$304,391.00",$981.91,"$58,163.89"
EWR - MSN,58057474839,E-RAP-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/58057474839,https://www.airlines-manager.com/aircraft/show/116042862,21:00,2:14,310,"331,635$","304,391$",$981.91,"$58,163.89"
EWR - MSO,58017973265,E-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/58017973265,https://www.airlines-manager.com/aircraft/show/107161238,1:00,10:59,310,"618,420$","573,473$","$1,849.91","$57,443.04"
EWR - MSO,58034914085,E-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/58034914085,https://www.airlines-manager.com/aircraft/show/107161240,11:00,20:59,310,"618,420$","573,473$","$1,849.91","$57,443.04"
EWR - MSO,58045346274,E-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/58045346274,https://www.airlines-manager.com/aircraft/show/86782214,15:45,1:44,112,"290,250$","259,767$","$2,319.35","$26,020.07"
EWR - MSO,58048703782,E-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/58048703782,https://www.airlines-manager.com/aircraft/show/107161239,17:45,3:44,310,"618,420$","573,473$","$1,849.91","$57,443.04"
EWR - MSO,58057474942,E-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/58057474942,https://www.airlines-manager.com/aircraft/show/107161241,22:00,7:59,310,"$618,420.00","$573,473.00","$1,849.91","$57,443.04"
EWR - MSP,58021655950,E-DEN-SLC-3,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/58021655950,https://www.airlines-manager.com/aircraft/show/86270783,5:00,10:59,310,"$376,088.00","$336,853.00","$1,086.62","$56,298.55"
EWR - MSP,58034913890,E-DEN-SLC-5,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/58034913890,https://www.airlines-manager.com/aircraft/show/90452833,10:00,15:59,310,"$376,088.00","$336,853.00","$1,086.62","$56,298.55"
EWR - MSP,58034913892,E-DEN-SLC-6 B,A319-100,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/58034913892,https://www.airlines-manager.com/aircraft/show/105223076,11:00,16:59,198,"$284,972.00","$253,541.00","$1,280.51","$42,374.54"
EWR - MSP,58051861549,E-DEN-SLC-2,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/58051861549,https://www.airlines-manager.com/aircraft/show/87153196,18:15,0:14,310,"$376,088.00","$336,853.00","$1,086.62","$56,298.55"
EWR - MSP,58054747822,E-DEN-SLC-1,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/58054747822,https://www.airlines-manager.com/aircraft/show/86270785,19:45,1:44,310,"$376,088.00","$336,853.00","$1,086.62","$56,298.55"
EWR - MSP,58054747823,E-DEN-SLC-4,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/58054747823,https://www.airlines-manager.com/aircraft/show/90452835,20:45,2:44,310,"$376,088.00","$336,853.00","$1,086.62","$56,298.55"
EWR - MSY,58017973655,E-ABQ-AUS-1,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/58017973655,https://www.airlines-manager.com/aircraft/show/90717079,3:15,9:59,310,"$416,273.00","$381,522.00","$1,230.72","$56,661.68"
EWR - MSY,58034913893,E-ABQ-AUS-3,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/58034913893,https://www.airlines-manager.com/aircraft/show/90717077,10:00,16:44,310,"$416,273.00","$381,522.00","$1,230.72","$56,661.68"
EWR - MSY,58034913895,E-ABQ-AUS-4,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/58034913895,https://www.airlines-manager.com/aircraft/show/90717076,11:00,17:44,310,"$416,273.00","$381,522.00","$1,230.72","$56,661.68"
EWR - MSY,58051861508,E-ABQ-AUS-2,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/58051861508,https://www.airlines-manager.com/aircraft/show/90717078,18:00,0:44,310,"$416,273.00","$381,522.00","$1,230.72","$56,661.68"
EWR - MSY,58054747854,E-ABQ-AUS-5,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/58054747854,https://www.airlines-manager.com/aircraft/show/95950199,20:00,2:44,310,"$416,273.00","$381,522.00","$1,230.72","$56,661.68"
EWR - MTJ,58024780674,E-MTJ-ECP-4,737-900ER,https://www.airlines-manager.com/network/showline/50761177,https://www.airlines-manager.com/network/showflight/58024780674,https://www.airlines-manager.com/aircraft/show/120706943,6:00,14:59,320,"$565,136.00","$519,101.00","$1,622.19","$57,784.90"
EWR - MTJ,58034913880,E-MTJ-ECP-1,737-900ER,https://www.airlines-manager.com/network/showline/50761177,https://www.airlines-manager.com/network/showflight/58034913880,https://www.airlines-manager.com/aircraft/show/120706946,10:00,18:59,320,"$565,136.00","$519,101.00","$1,622.19","$57,784.90"
EWR - MTJ,58045346308,E-MTJ-ECP-3,737-900ER,https://www.airlines-manager.com/network/showline/50761177,https://www.airlines-manager.com/network/showflight/58045346308,https://www.airlines-manager.com/aircraft/show/120706944,16:00,0:59,320,"$565,136.00","$519,101.00","$1,622.19","$57,784.90"
EWR - MTJ,58057474916,E-MTJ-ECP-2,737-900ER,https://www.airlines-manager.com/network/showline/50761177,https://www.airlines-manager.com/network/showflight/58057474916,https://www.airlines-manager.com/aircraft/show/120706945,21:45,6:44,320,"$565,136.00","$519,101.00","$1,622.19","$57,784.90"
EWR - MUC,58017973029,E-56C-7 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/58017973029,https://www.airlines-manager.com/aircraft/show/106721562,0:00,16:29,598,"$2,049,665.00","$1,899,594.00","$3,176.58","$115,243.32"
EWR - MUC,58034914014,E-56C-1 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/58034914014,https://www.airlines-manager.com/aircraft/show/106721556,11:00,3:29,598,"$2,049,665.00","$1,899,594.00","$3,176.58","$115,243.32"
EWR - MUC,58051861567,E-56C-7 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/58051861567,https://www.airlines-manager.com/aircraft/show/106721562,18:30,10:59,598,"$2,049,665.00","$1,899,594.00","$3,176.58","$115,243.32"
EWR - MXP,58034913947,E-84B-7 B2,777-300,https://www.airlines-manager.com/network/showline/49921908,https://www.airlines-manager.com/network/showflight/58034913947,https://www.airlines-manager.com/aircraft/show/117958701,10:00,2:29,852,"$2,696,638.00","$2,451,348.00","$2,877.17","$148,716.76"
EWR - MXP,58057474954,E-84B-3  B2,777-300,https://www.airlines-manager.com/network/showline/49921908,https://www.airlines-manager.com/network/showflight/58057474954,https://www.airlines-manager.com/aircraft/show/117958697,22:00,14:29,852,"$2,696,638.00","$2,451,348.00","$2,877.17","$148,716.76"
EWR - MYR,58017973567,E-RDM-MAF-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761175,https://www.airlines-manager.com/network/showflight/58017973567,https://www.airlines-manager.com/aircraft/show/120706939,2:30,6:44,272,"$226,045.00","$207,541.00",$763.02,"$49,025.43"
EWR - MYR,58031343089,E-RDM-MAF-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761175,https://www.airlines-manager.com/network/showflight/58031343089,https://www.airlines-manager.com/aircraft/show/120706942,8:15,12:29,272,"$226,045.00","$207,541.00",$763.02,"$49,025.43"
EWR - MYR,58034913823,E-RDM-MAF-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761175,https://www.airlines-manager.com/network/showflight/58034913823,https://www.airlines-manager.com/aircraft/show/120706940,10:00,14:14,272,"$226,045.00","$207,541.00",$763.02,"$49,025.43"
EWR - MYR,58045346257,E-RDM-MAF-5 B,A319-100,https://www.airlines-manager.com/network/showline/50761175,https://www.airlines-manager.com/network/showflight/58045346257,https://www.airlines-manager.com/aircraft/show/120707022,15:30,19:44,198,"$189,562.00","$170,441.00",$860.81,"$40,261.65"
EWR - MYR,58051861561,E-RDM-MAF-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761175,https://www.airlines-manager.com/network/showflight/58051861561,https://www.airlines-manager.com/aircraft/show/120706941,18:30,22:44,272,"$226,045.00","$207,541.00",$763.02,"$49,025.43"
EWR - NAS,58021655966,E-TUS-TPA-1,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/58021655966,https://www.airlines-manager.com/aircraft/show/98379319,5:15,11:44,310,"$397,029.00","$364,028.00","$1,174.28","$56,148.28"
EWR - NAS,58042065568,E-TUS-TPA-3,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/58042065568,https://www.airlines-manager.com/aircraft/show/98379317,13:00,19:29,310,"$397,029.00","$364,028.00","$1,174.28","$56,148.28"
EWR - NAS,58051861510,E-TUS-TPA-4,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/58051861510,https://www.airlines-manager.com/aircraft/show/98379316,18:00,0:29,310,"$397,029.00","$364,028.00","$1,174.28","$56,148.28"
EWR - NAS,58051861511,E-TUS-TPA-2,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/58051861511,https://www.airlines-manager.com/aircraft/show/98379318,19:00,1:29,310,"$397,029.00","$364,028.00","$1,174.28","$56,148.28"
EWR - NAS,58057474834,E-TUS-TPA-5,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/58057474834,https://www.airlines-manager.com/aircraft/show/98379315,21:00,3:29,294,"$379,024.00","$346,625.00","$1,179.00","$53,464.01"
EWR - NRT,58017973090,E-56A-7 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/58017973090,https://www.airlines-manager.com/aircraft/show/106813013,0:00,2:14,748,"$4,002,745.00","$3,604,043.00","$4,818.24","$1,613,750.60"
EWR - NRT,58034913964,E-56A-3 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/58034913964,https://www.airlines-manager.com/aircraft/show/106813009,10:15,12:29,748,"3,976,929$","3,587,310$","$4,795.87","$1,606,258.21"
EWR - NRT,58048703664,E-56A-1 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/58048703664,https://www.airlines-manager.com/aircraft/show/106813007,16:45,18:59,748,"3,579,904$","3,294,738$","$4,404.73","$1,475,255.82"
EWR - OAK,58017973263,E-OAK-SJC-5,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/58017973263,https://www.airlines-manager.com/aircraft/show/104717239,1:00,12:59,310,"739,348$","683,774$","$2,205.72","$57,060.42"
EWR - OAK,58034913915,E-OAK-SJC-1,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/58034913915,https://www.airlines-manager.com/aircraft/show/104717243,10:00,21:59,310,"739,348$","683,774$","$2,205.72","$57,060.42"
EWR - OAK,58038353896,E-OAK-SJC-2,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/58038353896,https://www.airlines-manager.com/aircraft/show/104717242,12:00,23:59,310,"739,348$","683,774$","$2,205.72","$57,060.42"
EWR - OAK,58042065704,E-OAK-SJC-3,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/58042065704,https://www.airlines-manager.com/aircraft/show/104717241,14:00,1:59,310,"739,348$","683,774$","$2,205.72","$57,060.42"
EWR - OAK,58059513292,E-OAK-SJC-4,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/58059513292,https://www.airlines-manager.com/aircraft/show/104717240,22:30,10:29,310,"739,348$","683,774$","$2,205.72","$57,060.42"
EWR - OKC,58017973515,E-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/58017973515,https://www.airlines-manager.com/aircraft/show/86782214,1:45,8:59,112,"218,318$","194,572$","$1,737.25","$26,899.35"
EWR - OKC,58017973516,E-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/58017973516,https://www.airlines-manager.com/aircraft/show/107161239,3:45,10:59,310,"462,867$","427,138$","$1,377.86","$59,051.34"
EWR - OKC,58027885539,E-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/58027885539,https://www.airlines-manager.com/aircraft/show/107161241,8:00,15:14,310,"$462,867.00","$427,138.00","$1,377.86","$59,051.34"
EWR - OKC,58034914083,E-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/58034914083,https://www.airlines-manager.com/aircraft/show/107161238,11:00,18:14,310,"$462,867.00","$427,138.00","$1,377.86","$59,051.34"
EWR - OKC,58057474836,E-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/58057474836,https://www.airlines-manager.com/aircraft/show/107161240,21:00,4:14,310,"$462,867.00","$427,138.00","$1,377.86","$59,051.34"
EWR - OMA,58017973582,E-BOI-PBI-1,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/58017973582,https://www.airlines-manager.com/aircraft/show/104418460,2:30,8:59,310,"$403,514.00","$370,539.00","$1,195.29","$57,152.54"
EWR - OMA,58027885496,E-BOI-PBI-4,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/58027885496,https://www.airlines-manager.com/aircraft/show/104418463,7:30,13:59,310,"$403,514.00","$370,539.00","$1,195.29","$57,152.54"
EWR - OMA,58034913914,E-BOI-PBI-3,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/58034913914,https://www.airlines-manager.com/aircraft/show/104418462,10:00,16:29,310,"$403,514.00","$370,539.00","$1,195.29","$57,152.54"
EWR - OMA,58048703700,E-BOI-PBI-2,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/58048703700,https://www.airlines-manager.com/aircraft/show/104418461,17:00,23:29,310,"$403,514.00","$370,539.00","$1,195.29","$57,152.54"
EWR - OMA,58051861680,E-BOI-PBI-5 B,A319-100,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/58051861680,https://www.airlines-manager.com/aircraft/show/110582846,19:00,1:29,198,"$305,209.00","$278,781.00","$1,407.98","$42,999.64"
EWR - ONT,58017973050,E-SMF-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/58017973050,https://www.airlines-manager.com/aircraft/show/94889153,0:00,11:29,320,"$706,325.00","$647,621.00","$2,023.82","$56,396.60"
EWR - ONT,58017973051,E-SMF-ONT-5,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/58017973051,https://www.airlines-manager.com/aircraft/show/94889154,2:00,13:29,320,"$706,325.00","$647,621.00","$2,023.82","$56,396.60"
EWR - ONT,58038353846,E-SMF-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/58038353846,https://www.airlines-manager.com/aircraft/show/94889150,11:45,23:14,320,"$706,325.00","$647,621.00","$2,023.82","$56,396.60"
EWR - ONT,58042065614,E-SMF-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/58042065614,https://www.airlines-manager.com/aircraft/show/94889151,13:15,0:44,320,"$706,325.00","$647,621.00","$2,023.82","$56,396.60"
EWR - ONT,58045346129,E-SMF-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/58045346129,https://www.airlines-manager.com/aircraft/show/94889152,14:45,2:14,305,"$685,811.00","$628,077.00","$2,059.27","$54,694.66"
EWR - ORD,58021655940,E-MIA-ORD-2,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/58021655940,https://www.airlines-manager.com/aircraft/show/113251306,5:00,9:59,338,"$338,489.00","$291,454.00",$862.29,"$58,485.75"
EWR - ORD,58034913954,E-MIA-ORD-1,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/58034913954,https://www.airlines-manager.com/aircraft/show/113251305,10:15,15:14,338,"$338,489.00","$291,454.00",$862.29,"$58,485.75"
EWR - ORD,58034913955,Corporate Jet,A320-200,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/58034913955,https://www.airlines-manager.com/aircraft/show/101412921,11:00,15:59,84,"$242,231.00","$195,355.00","$2,325.65","$39,201.67"
EWR - ORD,58038353824,E-MIA-ORD-3,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/58038353824,https://www.airlines-manager.com/aircraft/show/113251307,11:30,16:29,338,"$338,489.00","$291,454.00",$862.29,"$58,485.75"
EWR - ORD,58048703720,E-MIA-ORD-4,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/58048703720,https://www.airlines-manager.com/aircraft/show/113251308,17:15,22:14,338,"$338,489.00","$291,454.00",$862.29,"$58,485.75"
EWR - ORD,58057474874,E-MIA-ORD-5,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/58057474874,https://www.airlines-manager.com/aircraft/show/113251309,21:30,2:29,338,"$338,489.00","$291,454.00",$862.29,"$58,485.75"
EWR - ORF,58017973546,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/58017973546,https://www.airlines-manager.com/aircraft/show/88494375,2:15,5:29,320,"$153,803.00","$130,253.00",$407.04,"$40,284.43"
EWR - ORF,58034914107,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/58034914107,https://www.airlines-manager.com/aircraft/show/106104450,11:00,14:14,112,"$70,512.00","$57,910.00",$517.05,"$17,910.31"
EWR - ORF,58042065761,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/58042065761,https://www.airlines-manager.com/aircraft/show/105731236,14:15,17:29,320,"$153,803.00","$130,253.00",$407.04,"$40,284.43"
EWR - ORF,58051861496,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/58051861496,https://www.airlines-manager.com/aircraft/show/88494376,18:00,21:14,320,"$153,803.00","$130,253.00",$407.04,"$40,284.43"
EWR - ORF,58057474908,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/58057474908,https://www.airlines-manager.com/aircraft/show/88494377,21:45,0:59,320,"$153,803.00","$130,253.00",$407.04,"$40,284.43"
EWR - OSL,58017973647,E-56D-2 E,787-10,https://www.airlines-manager.com/network/showline/50072202,https://www.airlines-manager.com/network/showflight/58017973647,https://www.airlines-manager.com/aircraft/show/118644437,3:15,18:29,648,"$1,894,675.00","$1,766,526.00","$2,726.12","$115,964.51"
EWR - OSL,58021655919,E-56D-4 E,787-10,https://www.airlines-manager.com/network/showline/50072202,https://www.airlines-manager.com/network/showflight/58021655919,https://www.airlines-manager.com/aircraft/show/118644439,4:45,19:59,648,"$1,894,675.00","$1,766,526.00","$2,726.12","$115,964.51"
EWR - OSL,58054747845,E-56D-4 E,787-10,https://www.airlines-manager.com/network/showline/50072202,https://www.airlines-manager.com/network/showflight/58054747845,https://www.airlines-manager.com/aircraft/show/118644439,20:00,11:14,648,"$1,894,675.00","$1,766,526.00","$2,726.12","$115,964.51"
EWR - PBI,58017973449,E-BOI-PBI-4,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/58017973449,https://www.airlines-manager.com/aircraft/show/104418463,1:30,7:29,310,"$380,892.00","$348,451.00","$1,124.04","$58,236.94"
EWR - PBI,58017973450,E-BOI-PBI-3,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/58017973450,https://www.airlines-manager.com/aircraft/show/104418462,3:00,8:59,310,"$380,892.00","$348,451.00","$1,124.04","$58,236.94"
EWR - PBI,58034914078,E-BOI-PBI-2,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/58034914078,https://www.airlines-manager.com/aircraft/show/104418461,11:00,16:59,310,"$380,892.00","$348,451.00","$1,124.04","$58,236.94"
EWR - PBI,58042065601,E-BOI-PBI-5 B,A319-100,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/58042065601,https://www.airlines-manager.com/aircraft/show/110582846,13:00,18:59,198,"$288,248.00","$262,252.00","$1,324.51","$43,830.42"
EWR - PBI,58054747925,E-BOI-PBI-1,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/58054747925,https://www.airlines-manager.com/aircraft/show/104418460,20:30,2:29,310,"$380,892.00","$348,451.00","$1,124.04","$58,236.94"
EWR - PDX,58017973023,E-PHX-PDX-3,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/58017973023,https://www.airlines-manager.com/aircraft/show/113595213,0:00,11:29,338,"$761,524.00","$708,817.00","$2,097.09","$61,725.72"
EWR - PDX,58017973024,E-PHX-PDX-4,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/58017973024,https://www.airlines-manager.com/aircraft/show/113595214,2:00,13:29,338,"$761,524.00","$708,817.00","$2,097.09","$61,725.72"
EWR - PDX,58021655941,E-PHX-PDX-5,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/58021655941,https://www.airlines-manager.com/aircraft/show/113595215,5:00,16:29,338,"$761,524.00","$708,817.00","$2,097.09","$61,725.72"
EWR - PDX,58024780709,E-PHX-PDX-6 B,A319-100,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/58024780709,https://www.airlines-manager.com/aircraft/show/99219630,6:30,17:59,198,"$528,797.00","$484,100.00","$2,444.95","$42,156.75"
EWR - PDX,58034913956,E-PHX-PDX-1,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/58034913956,https://www.airlines-manager.com/aircraft/show/113595211,10:15,21:44,338,"$761,524.00","$708,817.00","$2,097.09","$61,725.72"
EWR - PDX,58038353925,E-PHX-PDX-2,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/58038353925,https://www.airlines-manager.com/aircraft/show/113595212,12:15,23:44,313,"$727,060.00","$675,737.00","$2,158.90","$58,845.02"
EWR - PHX,58017973021,E-PHX-PDX-1,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/58017973021,https://www.airlines-manager.com/aircraft/show/113595211,0:00,10:14,338,"$707,316.00","$649,946.00","$1,922.92","$63,512.64"
EWR - PHX,58017973022,E-PHX-PDX-2,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/58017973022,https://www.airlines-manager.com/aircraft/show/113595212,2:00,12:14,338,"707,316$","649,946$","$1,922.92","$63,512.64"
EWR - PHX,58038353825,E-PHX-PDX-3,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/58038353825,https://www.airlines-manager.com/aircraft/show/113595213,11:30,21:44,338,"707,316$","649,946$","$1,922.92","$63,512.64"
EWR - PHX,58042065623,E-PHX-PDX-4,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/58042065623,https://www.airlines-manager.com/aircraft/show/113595214,13:30,23:44,338,"707,316$","649,946$","$1,922.92","$63,512.64"
EWR - PHX,58048703622,E-PHX-PDX-5,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/58048703622,https://www.airlines-manager.com/aircraft/show/113595215,16:30,2:44,338,"707,316$","649,946$","$1,922.92","$63,512.64"
EWR - PHX,58051861524,E-PHX-PDX-6 B,A319-100,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/58051861524,https://www.airlines-manager.com/aircraft/show/99219630,18:00,4:29,198,"491,654$","443,539$","$2,240.10","$42,308.97"
EWR - PIT,58021655887,E-STL-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/58021655887,https://www.airlines-manager.com/aircraft/show/98887257,4:15,7:29,112,"77,629$","63,269$",$564.90,"$19,567.73"
EWR - PIT,58024780700,E-STL-PIT-3,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/58024780700,https://www.airlines-manager.com/aircraft/show/115400546,6:30,9:44,338,"182,899$","160,287$",$474.22,"$49,573.30"
EWR - PIT,58034913833,E-STL-PIT-2,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/58034913833,https://www.airlines-manager.com/aircraft/show/115400547,10:00,13:14,338,"182,899$","160,287$",$474.22,"$49,573.30"
EWR - PIT,58042065486,E-STL-PIT-4,A321neo-LR,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/58042065486,https://www.airlines-manager.com/aircraft/show/103406580,13:00,16:14,338,"$184,682.00","$161,906.00",$479.01,"$50,074.02"
EWR - PIT,58045346244,E-STL-PIT-1,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/58045346244,https://www.airlines-manager.com/aircraft/show/115400548,15:30,18:44,338,"$182,899.00","$160,287.00",$474.22,"$49,573.30"
EWR - PIT,58054747803,E-STL-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/58054747803,https://www.airlines-manager.com/aircraft/show/98887257,19:30,22:44,112,"$77,629.00","$63,269.00",$564.90,"$19,567.73"
EWR - PRG,58034913965,E-84B-2  B2,777-300,https://www.airlines-manager.com/network/showline/44327652,https://www.airlines-manager.com/network/showflight/58034913965,https://www.airlines-manager.com/aircraft/show/117958696,10:15,2:59,852,"$2,750,049.00","$2,506,567.00","$2,941.98","$149,794.84"
EWR - PRG,58057474990,E-84B-5  B2,777-300,https://www.airlines-manager.com/network/showline/44327652,https://www.airlines-manager.com/network/showflight/58057474990,https://www.airlines-manager.com/aircraft/show/117958699,22:15,14:59,852,"$2,750,049.00","$2,506,567.00","$2,941.98","$149,794.84"
EWR - PSP,58017973152,E-PSP-FAT-4,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/58017973152,https://www.airlines-manager.com/aircraft/show/116672810,0:30,11:44,338,"$760,434.00","$712,970.00","$2,109.38","$63,469.14"
EWR - PSP,58034914001,E-PSP-FAT-1,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/58034914001,https://www.airlines-manager.com/aircraft/show/119220450,11:00,22:14,338,"$760,434.00","$712,970.00","$2,109.38","$63,469.14"
EWR - PSP,58042065477,E-PSP-FAT-2,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/58042065477,https://www.airlines-manager.com/aircraft/show/119220451,13:00,0:14,338,"$760,434.00","$712,970.00","$2,109.38","$63,469.14"
EWR - PSP,58059513273,E-PSP-FAT-3,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/58059513273,https://www.airlines-manager.com/aircraft/show/119220452,22:30,9:44,338,"$760,434.00","$712,970.00","$2,109.38","$63,469.14"
EWR - PVD,58017973453,E-TUL-DSM-4,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/58017973453,https://www.airlines-manager.com/aircraft/show/110044466,1:30,4:14,310,"$99,383.00","$81,748.00",$263.70,"$29,907.80"
EWR - PVD,58031343194,E-TUL-DSM-3,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/58031343194,https://www.airlines-manager.com/aircraft/show/110044465,9:15,11:59,310,"$99,383.00","$81,748.00",$263.70,"$29,907.80"
EWR - PVD,58034914091,E-TUL-DSM-2,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/58034914091,https://www.airlines-manager.com/aircraft/show/110044464,11:00,13:44,310,"$99,383.00","$81,748.00",$263.70,"$29,907.80"
EWR - PVD,58054747826,E-TUL-DSM-1,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/58054747826,https://www.airlines-manager.com/aircraft/show/110044463,19:45,22:29,310,"$99,383.00","$81,748.00",$263.70,"$29,907.80"
EWR - PVD,58059513407,E-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/58059513407,https://www.airlines-manager.com/aircraft/show/110113039,23:15,1:59,112,"$42,644.00","$31,786.00",$283.80,"$11,629.02"
EWR - PWM,58021655908,E-TUL-DSM-1,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/58021655908,https://www.airlines-manager.com/aircraft/show/110044463,4:30,7:44,310,"$154,650.00","$135,600.00",$437.42,"$41,938.14"
EWR - PWM,58031343163,E-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/58031343163,https://www.airlines-manager.com/aircraft/show/110113039,8:45,11:59,112,"$70,248.00","$58,322.00",$520.73,"$18,037.73"
EWR - PWM,58034914092,E-TUL-DSM-4,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/58034914092,https://www.airlines-manager.com/aircraft/show/110044466,11:00,14:14,310,"$154,650.00","$135,600.00",$437.42,"$41,938.14"
EWR - PWM,58051861517,E-TUL-DSM-3,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/58051861517,https://www.airlines-manager.com/aircraft/show/110044465,18:00,21:14,310,"$154,650.00","$135,600.00",$437.42,"$41,938.14"
EWR - PWM,58054747827,E-TUL-DSM-2,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/58054747827,https://www.airlines-manager.com/aircraft/show/110044464,19:45,22:59,305,"$153,190.00","$134,179.00",$439.93,"$41,498.66"
EWR - RAP,58017973070,E-RAP-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/58017973070,https://www.airlines-manager.com/aircraft/show/116042860,0:00,7:59,310,"$497,396.00","$460,380.00","$1,485.10","$57,667.64"
EWR - RAP,58017973071,E-RAP-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/58017973071,https://www.airlines-manager.com/aircraft/show/116042861,1:15,9:14,310,"$497,396.00","$460,380.00","$1,485.10","$57,667.64"
EWR - RAP,58042065589,E-RAP-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/58042065589,https://www.airlines-manager.com/aircraft/show/116042862,13:00,20:59,310,"$497,396.00","$460,380.00","$1,485.10","$57,667.64"
EWR - RAP,58051861585,E-RAP-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/58051861585,https://www.airlines-manager.com/aircraft/show/116042859,18:30,2:29,310,"$497,396.00","$460,380.00","$1,485.10","$57,667.64"
EWR - RDM,58024780712,E-RDM-MAF-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761172,https://www.airlines-manager.com/network/showflight/58024780712,https://www.airlines-manager.com/aircraft/show/120706939,6:45,17:59,272,"$630,804.00","$594,301.00","$2,184.93","$52,905.13"
EWR - RDM,58038353931,E-RDM-MAF-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761172,https://www.airlines-manager.com/network/showflight/58038353931,https://www.airlines-manager.com/aircraft/show/120706942,12:30,23:44,272,"$630,804.00","$594,301.00","$2,184.93","$52,905.13"
EWR - RDM,58042065750,E-RDM-MAF-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761172,https://www.airlines-manager.com/network/showflight/58042065750,https://www.airlines-manager.com/aircraft/show/120706940,14:15,1:29,272,"$630,804.00","$594,301.00","$2,184.93","$52,905.13"
EWR - RDM,58054747833,E-RDM-MAF-5 B,A319-100,https://www.airlines-manager.com/network/showline/50761172,https://www.airlines-manager.com/network/showflight/58054747833,https://www.airlines-manager.com/aircraft/show/120707022,19:45,6:59,198,"$524,065.00","$484,903.00","$2,449.01","$43,166.44"
EWR - RDM,58059513301,E-RDM-MAF-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761172,https://www.airlines-manager.com/network/showflight/58059513301,https://www.airlines-manager.com/aircraft/show/120706941,22:45,9:59,272,"$630,804.00","$594,301.00","$2,184.93","$52,905.13"
EWR - RDU,58017973368,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/58017973368,https://www.airlines-manager.com/aircraft/show/105731236,1:15,4:59,320,"$201,380.00","$173,412.00",$541.91,"$46,449.64"
EWR - RDU,58021655943,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/58021655943,https://www.airlines-manager.com/aircraft/show/88494376,5:00,8:44,320,"201,380$","173,412$",$541.91,"$46,449.64"
EWR - RDU,58034914029,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/58034914029,https://www.airlines-manager.com/aircraft/show/88494377,11:00,14:44,320,"201,380$","173,412$",$541.91,"$46,449.64"
EWR - RDU,58045346248,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/58045346248,https://www.airlines-manager.com/aircraft/show/88494375,15:30,19:14,320,"201,380$","173,412$",$541.91,"$46,449.64"
EWR - RDU,58057474958,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/58057474958,https://www.airlines-manager.com/aircraft/show/106104450,22:00,1:44,112,"93,326$","78,129$",$697.58,"$20,927.41"
EWR - RIC,58017973241,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/58017973241,https://www.airlines-manager.com/aircraft/show/88494377,1:00,4:14,320,"139,657$","116,236$",$363.24,"$35,949.28"
EWR - RIC,58024780621,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/58024780621,https://www.airlines-manager.com/aircraft/show/88494375,5:30,8:44,320,"$139,657.00","$116,236.00",$363.24,"$35,949.28"
EWR - RIC,58042065771,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/58042065771,https://www.airlines-manager.com/aircraft/show/106104450,14:15,17:29,112,"$62,868.00","$50,351.00",$449.56,"$15,572.47"
EWR - RIC,58048703752,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/58048703752,https://www.airlines-manager.com/aircraft/show/105731236,17:30,20:44,320,"$139,657.00","$116,236.00",$363.24,"$35,949.28"
EWR - RIC,58057474853,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/58057474853,https://www.airlines-manager.com/aircraft/show/88494376,21:15,0:29,320,"$139,657.00","$116,236.00",$363.24,"$35,949.28"
EWR - RNO,58017973539,E-RNO-MEM-5 B,A319-100,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/58017973539,https://www.airlines-manager.com/aircraft/show/100096560,2:00,13:29,198,"$532,092.00","$490,305.00","$2,476.29","$42,697.10"
EWR - RNO,58034913959,E-RNO-MEM-1,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/58034913959,https://www.airlines-manager.com/aircraft/show/99920622,10:15,21:29,320,"$706,113.00","$649,153.00","$2,028.60","$57,788.10"
EWR - RNO,58042065666,E-RNO-MEM-4,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/58042065666,https://www.airlines-manager.com/aircraft/show/99920619,14:00,1:14,320,"$706,113.00","$649,153.00","$2,028.60","$57,788.10"
EWR - RNO,58048703627,E-RNO-MEM-3,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/58048703627,https://www.airlines-manager.com/aircraft/show/99920620,16:30,3:44,320,"$706,113.00","$649,153.00","$2,028.60","$57,788.10"
EWR - RNO,58057474969,E-RNO-MEM-2,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/58057474969,https://www.airlines-manager.com/aircraft/show/99920621,22:15,9:29,320,"$706,113.00","$649,153.00","$2,028.60","$57,788.10"
EWR - ROC,58034913928,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/58034913928,https://www.airlines-manager.com/aircraft/show/119220545,10:00,12:59,310,"$135,540.00","$116,530.00",$375.90,"$39,060.34"
EWR - ROC,58042065776,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/58042065776,https://www.airlines-manager.com/aircraft/show/119220544,14:30,17:29,310,"$135,540.00","$116,530.00",$375.90,"$39,060.34"
EWR - ROC,58051861554,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/58051861554,https://www.airlines-manager.com/aircraft/show/119220543,18:15,21:14,310,"$135,540.00","$116,530.00",$375.90,"$39,060.34"
EWR - ROC,58059513332,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/58059513332,https://www.airlines-manager.com/aircraft/show/119220542,22:45,1:44,310,"$135,540.00","$116,530.00",$375.90,"$39,060.34"
EWR - RSW,58017973648,E-RNO-MEM-1,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/58017973648,https://www.airlines-manager.com/aircraft/show/99920622,3:15,9:29,320,"$390,547.00","$351,777.00","$1,099.30","$56,434.81"
EWR - RSW,58027885458,E-RNO-MEM-4,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/58027885458,https://www.airlines-manager.com/aircraft/show/99920619,7:00,13:14,320,"$390,547.00","$351,777.00","$1,099.30","$56,434.81"
EWR - RSW,58034913957,E-RNO-MEM-3,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/58034913957,https://www.airlines-manager.com/aircraft/show/99920620,10:15,16:29,320,"$390,547.00","$351,777.00","$1,099.30","$56,434.81"
EWR - RSW,58042065730,E-RNO-MEM-5 B,A319-100,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/58042065730,https://www.airlines-manager.com/aircraft/show/100096560,14:00,20:14,198,"$295,991.00","$268,432.00","$1,355.72","$43,063.96"
EWR - RSW,58045346293,E-RNO-MEM-2,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/58045346293,https://www.airlines-manager.com/aircraft/show/99920621,16:00,22:14,320,"$390,547.00","$351,777.00","$1,099.30","$56,434.81"
EWR - SAN,58017973020,E-MIA-ORD-3,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/58017973020,https://www.airlines-manager.com/aircraft/show/113251307,0:00,11:29,338,"$779,172.00","$726,876.00","$2,150.52","$63,298.35"
EWR - SAN,58034913831,E-MIA-ORD-5,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/58034913831,https://www.airlines-manager.com/aircraft/show/113251309,10:00,21:29,338,"$779,172.00","$726,876.00","$2,150.52","$63,298.35"
EWR - SAN,58045346233,E-MIA-ORD-1,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/58045346233,https://www.airlines-manager.com/aircraft/show/113251305,15:15,2:44,338,"$779,172.00","$726,876.00","$2,150.52","$63,298.35"
EWR - SAN,58048703604,E-MIA-ORD-2,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/58048703604,https://www.airlines-manager.com/aircraft/show/113251306,16:15,3:44,338,"$779,172.00","$726,876.00","$2,150.52","$63,298.35"
EWR - SAN,58057474959,E-MIA-ORD-4,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/58057474959,https://www.airlines-manager.com/aircraft/show/113251308,22:15,9:44,338,"$779,172.00","$726,876.00","$2,150.52","$63,298.35"
EWR - SAT,58017973480,E-ELP-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/58017973480,https://www.airlines-manager.com/aircraft/show/103365576,1:45,9:59,320,"$519,976.00","$476,182.00","$1,488.07","$57,835.87"
EWR - SAT,58034913861,E-ELP-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/58034913861,https://www.airlines-manager.com/aircraft/show/103365577,10:00,18:14,320,"$519,976.00","$476,182.00","$1,488.07","$57,835.87"
EWR - SAT,58038353912,E-ELP-SAT-5 B,A319-100,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/58038353912,https://www.airlines-manager.com/aircraft/show/110582847,12:00,20:14,198,"$392,241.00","$360,537.00","$1,820.89","$43,789.92"
EWR - SAT,58054747779,E-ELP-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/58054747779,https://www.airlines-manager.com/aircraft/show/103365578,19:30,3:44,320,"$519,976.00","$476,182.00","$1,488.07","$57,835.87"
EWR - SAT,58057474880,E-ELP-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/58057474880,https://www.airlines-manager.com/aircraft/show/103365575,21:30,5:44,320,"$519,976.00","$476,182.00","$1,488.07","$57,835.87"
EWR - SAV,58021655912,E-COS-ICT-5,ERJ-175,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/58021655912,https://www.airlines-manager.com/aircraft/show/108466265,4:30,9:29,112,"146,760$","129,843$","$1,159.31","$26,055.45"
EWR - SAV,58031343177,E-COS-ICT-3,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/58031343177,https://www.airlines-manager.com/aircraft/show/108834810,9:00,13:59,310,"308,702$","282,567$",$911.51,"$56,702.41"
EWR - SAV,58034914090,E-COS-ICT-2,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/58034914090,https://www.airlines-manager.com/aircraft/show/108834809,11:00,15:59,310,"308,702$","282,567$",$911.51,"$56,702.41"
EWR - SAV,58051861516,E-COS-ICT-1,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/58051861516,https://www.airlines-manager.com/aircraft/show/108834808,18:00,22:59,310,"308,702$","282,567$",$911.51,"$56,702.41"
EWR - SAV,58054747859,E-COS-ICT-4,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/58054747859,https://www.airlines-manager.com/aircraft/show/108834811,20:00,0:59,264,"281,893$","256,651$",$972.16,"$51,501.87"
EWR - SDF,58021655831,E-LIT-FAR-2,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/58021655831,https://www.airlines-manager.com/aircraft/show/86270787,4:00,8:29,310,"296,515$","269,422$",$869.10,"$60,094.13"
EWR - SDF,58031343099,E-LIT-FAR-1,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/58031343099,https://www.airlines-manager.com/aircraft/show/90452834,8:15,12:44,310,"296,515$","269,422$",$869.10,"$60,094.13"
EWR - SDF,58045346181,E-LIT-FAR-4,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/58045346181,https://www.airlines-manager.com/aircraft/show/86270784,15:00,19:29,310,"296,515$","269,422$",$869.10,"$60,094.13"
EWR - SDF,58051861548,E-LIT-FAR-3,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/58051861548,https://www.airlines-manager.com/aircraft/show/86270786,18:15,22:44,310,"$296,515.00","$269,422.00",$869.10,"$60,094.13"
EWR - SEA,58017973236,E-DFW-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/58017973236,https://www.airlines-manager.com/aircraft/show/86238752,1:00,12:14,320,"$713,191.00","$644,122.00","$2,012.88","$57,340.24"
EWR - SEA,58017973237,E-DFW-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/58017973237,https://www.airlines-manager.com/aircraft/show/90489726,3:00,14:14,320,"$713,191.00","$644,122.00","$2,012.88","$57,340.24"
EWR - SEA,58034914025,E-DFW-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/58034914025,https://www.airlines-manager.com/aircraft/show/86238753,11:00,22:14,320,"$713,191.00","$644,122.00","$2,012.88","$57,340.24"
EWR - SEA,58045346165,E-DFW-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/58045346165,https://www.airlines-manager.com/aircraft/show/90489724,15:00,2:14,320,"$713,191.00","$644,122.00","$2,012.88","$57,340.24"
EWR - SEA,58059513308,E-DFW-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/58059513308,https://www.airlines-manager.com/aircraft/show/90489725,22:45,9:59,320,"$713,191.00","$644,122.00","$2,012.88","$57,340.24"
EWR - SEA,58059513309,E-DFW-ATL-6 B,A319-100,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/58059513309,https://www.airlines-manager.com/aircraft/show/105222360,23:30,10:59,198,"$537,220.00","$487,342.00","$2,461.32","$42,439.07"
EWR - SFO,58017973031,E-SFO-LAX-1,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/58017973031,https://www.airlines-manager.com/aircraft/show/83716137,0:00,11:44,400,"$949,362.00","$864,753.00","$2,161.88","$73,700.54"
EWR - SFO,58017973032,E-SFO-LAX-2,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/58017973032,https://www.airlines-manager.com/aircraft/show/89233028,1:30,13:14,400,"$949,362.00","$864,753.00","$2,161.88","$73,700.54"
EWR - SFO,58017973033,E-SFO-LAX-3,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/58017973033,https://www.airlines-manager.com/aircraft/show/89233029,3:00,14:44,400,"$949,362.00","$864,753.00","$2,161.88","$73,700.54"
EWR - SFO,58038353927,E-SFO-LAX-4,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/58038353927,https://www.airlines-manager.com/aircraft/show/89233030,12:15,23:59,400,"$949,362.00","$864,753.00","$2,161.88","$73,700.54"
EWR - SFO,58042065756,E-SFO-LAX-5,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/58042065756,https://www.airlines-manager.com/aircraft/show/89233027,14:15,1:59,400,"$949,362.00","$864,753.00","$2,161.88","$73,700.54"
EWR - SJC,58017973066,E-OAK-SJC-2,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/58017973066,https://www.airlines-manager.com/aircraft/show/104717242,0:00,11:59,310,"$736,357.00","$680,407.00","$2,194.86","$56,779.44"
EWR - SJC,58017973067,E-OAK-SJC-3,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/58017973067,https://www.airlines-manager.com/aircraft/show/104717241,2:00,13:59,310,"$736,357.00","$680,407.00","$2,194.86","$56,779.44"
EWR - SJC,58034913975,E-OAK-SJC-4,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/58034913975,https://www.airlines-manager.com/aircraft/show/104717240,10:30,22:29,310,"$736,357.00","$680,407.00","$2,194.86","$56,779.44"
EWR - SJC,58042065580,E-OAK-SJC-5,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/58042065580,https://www.airlines-manager.com/aircraft/show/104717239,13:00,0:59,310,"$736,357.00","$680,407.00","$2,194.86","$56,779.44"
EWR - SJC,58057474940,E-OAK-SJC-1,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/58057474940,https://www.airlines-manager.com/aircraft/show/104717243,22:00,9:59,310,"$736,357.00","$680,407.00","$2,194.86","$56,779.44"
EWR - SJU,58017973160,E-CUN-SJU-1,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/58017973160,https://www.airlines-manager.com/aircraft/show/106581304,0:30,8:44,320,"$528,828.00","$482,931.00","$1,509.16","$58,655.59"
EWR - SJU,58017973161,E-CUN-SJU-4,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/58017973161,https://www.airlines-manager.com/aircraft/show/106581307,2:00,10:14,320,"$528,828.00","$482,931.00","$1,509.16","$58,655.59"
EWR - SJU,58027885455,E-CUN-SJU-5,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/58027885455,https://www.airlines-manager.com/aircraft/show/86238754,7:00,15:14,320,"$528,828.00","$482,931.00","$1,509.16","$58,655.59"
EWR - SJU,58042065522,E-CUN-SJU-3,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/58042065522,https://www.airlines-manager.com/aircraft/show/106581306,13:00,21:14,320,"$528,828.00","$482,931.00","$1,509.16","$58,655.59"
EWR - SJU,58042065523,E-CUN-SJU-2,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/58042065523,https://www.airlines-manager.com/aircraft/show/106581305,14:30,22:44,320,"$528,828.00","$482,931.00","$1,509.16","$58,655.59"
EWR - SLC,58017973133,E-DEN-SLC-2,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/58017973133,https://www.airlines-manager.com/aircraft/show/87153196,0:15,9:59,310,"$614,239.00","$562,310.00","$1,813.90","$57,771.58"
EWR - SLC,58017973134,E-DEN-SLC-5,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/58017973134,https://www.airlines-manager.com/aircraft/show/90452833,0:15,9:59,310,"$614,239.00","$562,310.00","$1,813.90","$57,771.58"
EWR - SLC,58017973135,E-DEN-SLC-6 B,A319-100,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/58017973135,https://www.airlines-manager.com/aircraft/show/105223076,1:15,10:59,198,"$461,814.00","$420,187.00","$2,122.16","$43,169.90"
EWR - SLC,58034913882,E-DEN-SLC-1,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/58034913882,https://www.airlines-manager.com/aircraft/show/86270785,10:00,19:44,310,"$614,239.00","$562,310.00","$1,813.90","$57,771.58"
EWR - SLC,58034913883,E-DEN-SLC-4,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/58034913883,https://www.airlines-manager.com/aircraft/show/90452835,11:00,20:44,310,"$614,239.00","$562,310.00","$1,813.90","$57,771.58"
EWR - SLC,58051861696,E-DEN-SLC-3,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/58051861696,https://www.airlines-manager.com/aircraft/show/86270783,19:15,4:59,310,"$614,239.00","$562,310.00","$1,813.90","$57,771.58"
EWR - SMF,58017973047,E-SMF-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/58017973047,https://www.airlines-manager.com/aircraft/show/94889150,0:00,11:44,320,"$720,802.00","$662,355.00","$2,069.86","$56,450.71"
EWR - SMF,58017973048,E-SMF-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/58017973048,https://www.airlines-manager.com/aircraft/show/94889151,1:30,13:14,320,"$720,802.00","$662,355.00","$2,069.86","$56,450.71"
EWR - SMF,58017973049,E-SMF-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/58017973049,https://www.airlines-manager.com/aircraft/show/94889152,3:00,14:44,320,"$720,802.00","$662,355.00","$2,069.86","$56,450.71"
EWR - SMF,58038353826,E-SMF-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/58038353826,https://www.airlines-manager.com/aircraft/show/94889153,11:30,23:14,320,"$720,802.00","$662,355.00","$2,069.86","$56,450.71"
EWR - SMF,58042065625,E-SMF-ONT-5,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/58042065625,https://www.airlines-manager.com/aircraft/show/94889154,13:30,1:14,320,"$720,802.00","$662,355.00","$2,069.86","$56,450.71"
EWR - SNN,58034913983,E-56B-6 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/58034913983,https://www.airlines-manager.com/aircraft/show/94521248,10:45,23:59,748,"$2,089,804.00","$1,906,543.00","$2,548.85","$144,071.26"
EWR - SNN,58051861630,E-56B-5 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/58051861630,https://www.airlines-manager.com/aircraft/show/94521253,18:45,7:59,748,"$2,003,611.00","$1,846,437.00","$2,468.50","$139,529.24"
EWR - SRQ,58017973210,E-MTJ-ECP-1,737-900ER,https://www.airlines-manager.com/network/showline/50761179,https://www.airlines-manager.com/network/showflight/58017973210,https://www.airlines-manager.com/aircraft/show/120706946,0:45,6:44,320,"$383,317.00","$348,639.00","$1,089.50","$58,268.36"
EWR - SRQ,58034913878,E-MTJ-ECP-3,737-900ER,https://www.airlines-manager.com/network/showline/50761179,https://www.airlines-manager.com/network/showflight/58034913878,https://www.airlines-manager.com/aircraft/show/120706944,10:00,15:59,320,"$383,317.00","$348,639.00","$1,089.50","$58,268.36"
EWR - SRQ,58045346260,E-MTJ-ECP-2,737-900ER,https://www.airlines-manager.com/network/showline/50761179,https://www.airlines-manager.com/network/showflight/58045346260,https://www.airlines-manager.com/aircraft/show/120706945,15:45,21:44,320,"$383,317.00","$348,639.00","$1,089.50","$58,268.36"
EWR - SRQ,58054747948,E-MTJ-ECP-4,737-900ER,https://www.airlines-manager.com/network/showline/50761179,https://www.airlines-manager.com/network/showflight/58054747948,https://www.airlines-manager.com/aircraft/show/120706943,20:45,2:44,299,"$367,947.00","$333,854.00","$1,116.57","$55,797.33"
EWR - STL,58017973228,E-STL-PIT-3,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/58017973228,https://www.airlines-manager.com/aircraft/show/115400546,1:00,6:29,338,"$374,762.00","$343,767.00","$1,017.06","$62,693.07"
EWR - STL,58021655851,E-STL-PIT-2,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/58021655851,https://www.airlines-manager.com/aircraft/show/115400547,4:15,9:44,338,"$374,762.00","$343,767.00","$1,017.06","$62,693.07"
EWR - STL,58034913834,E-STL-PIT-1,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/58034913834,https://www.airlines-manager.com/aircraft/show/115400548,10:00,15:29,338,"$374,762.00","$343,767.00","$1,017.06","$62,693.07"
EWR - STL,58042065748,E-STL-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/58042065748,https://www.airlines-manager.com/aircraft/show/98887257,14:00,19:29,112,"$163,866.00","$143,099.00","$1,277.67","$26,097.08"
EWR - STL,58048703607,E-STL-PIT-4,A321neo-LR,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/58048703607,https://www.airlines-manager.com/aircraft/show/103406580,16:15,21:44,338,"$378,117.00","$346,673.00","$1,025.66","$63,223.04"
EWR - STL,58059513338,E-STL-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/58059513338,https://www.airlines-manager.com/aircraft/show/98887257,22:45,4:14,112,"$163,866.00","$143,099.00","$1,277.67","$26,097.08"
EWR - SYR,58017973504,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/58017973504,https://www.airlines-manager.com/aircraft/show/119220542,1:45,4:44,310,"$125,306.00","$106,702.00",$344.20,"$35,766.03"
EWR - SYR,58042065591,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/58042065591,https://www.airlines-manager.com/aircraft/show/119220545,13:00,15:59,310,"$125,306.00","$106,702.00",$344.20,"$35,766.03"
EWR - SYR,58048703759,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/58048703759,https://www.airlines-manager.com/aircraft/show/119220544,17:30,20:29,310,"$125,306.00","$106,702.00",$344.20,"$35,766.03"
EWR - SYR,58057474866,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/58057474866,https://www.airlines-manager.com/aircraft/show/119220543,21:15,0:14,310,"$125,306.00","$106,702.00",$344.20,"$35,766.03"
EWR - TLV,58017973639,E-TLV-2 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/58017973639,https://www.airlines-manager.com/aircraft/show/89124073,3:00,1:29,884,"$3,672,705.00","$3,353,356.00","$3,793.39","$149,148.52"
EWR - TLV,58057474847,E-TLV-1 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/58057474847,https://www.airlines-manager.com/aircraft/show/93429385,21:00,19:29,884,"$3,672,705.00","$3,353,356.00","$3,793.39","$149,148.52"
EWR - TPA,58024780655,E-TUS-TPA-3,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/58024780655,https://www.airlines-manager.com/aircraft/show/98379317,5:45,11:44,310,"$377,862.00","$342,681.00","$1,105.42","$57,272.59"
EWR - TPA,58034913982,E-TUS-TPA-4,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/58034913982,https://www.airlines-manager.com/aircraft/show/98379316,10:45,16:44,310,"$377,862.00","$342,681.00","$1,105.42","$57,272.59"
EWR - TPA,58042065569,E-TUS-TPA-2,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/58042065569,https://www.airlines-manager.com/aircraft/show/98379318,13:00,18:59,310,"$377,862.00","$342,681.00","$1,105.42","$57,272.59"
EWR - TPA,58045346190,E-TUS-TPA-5,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/58045346190,https://www.airlines-manager.com/aircraft/show/98379315,15:00,20:59,310,"$377,862.00","$342,681.00","$1,105.42","$57,272.59"
EWR - TPA,58059513395,E-TUS-TPA-1,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/58059513395,https://www.airlines-manager.com/aircraft/show/98379319,23:15,5:14,310,"$377,862.00","$342,681.00","$1,105.42","$57,272.59"
EWR - TUL,58017973501,E-TUL-DSM-3,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/58017973501,https://www.airlines-manager.com/aircraft/show/110044465,1:45,8:29,310,"428,315$","394,214$","$1,271.66","$58,546.63"
EWR - TUL,58017973502,E-TUL-DSM-2,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/58017973502,https://www.airlines-manager.com/aircraft/show/110044464,3:30,10:14,310,"428,315$","394,214$","$1,271.66","$58,546.63"
EWR - TUL,58042065585,E-TUL-DSM-1,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/58042065585,https://www.airlines-manager.com/aircraft/show/110044463,13:00,19:44,310,"428,315$","394,214$","$1,271.66","$58,546.63"
EWR - TUL,58048703644,E-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/58048703644,https://www.airlines-manager.com/aircraft/show/110113039,16:30,23:14,112,"201,473$","178,896$","$1,597.29","$26,568.71"
EWR - TUL,58051861621,E-TUL-DSM-4,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/58051861621,https://www.airlines-manager.com/aircraft/show/110044466,18:45,1:29,310,"$428,315.00","$394,214.00","$1,271.66","$58,546.63"
EWR - TUS,58017973181,E-TUS-TPA-4,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/58017973181,https://www.airlines-manager.com/aircraft/show/98379316,0:30,10:44,310,"$641,733.00","$593,639.00","$1,914.96","$58,010.33"
EWR - TUS,58017973182,E-TUS-TPA-2,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/58017973182,https://www.airlines-manager.com/aircraft/show/98379318,1:30,11:44,310,"$641,733.00","$593,639.00","$1,914.96","$58,010.33"
EWR - TUS,58017973183,E-TUS-TPA-5,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/58017973183,https://www.airlines-manager.com/aircraft/show/98379315,3:30,13:44,310,"$641,733.00","$593,639.00","$1,914.96","$58,010.33"
EWR - TUS,58042065570,E-TUS-TPA-1,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/58042065570,https://www.airlines-manager.com/aircraft/show/98379319,13:00,23:14,310,"$641,733.00","$593,639.00","$1,914.96","$58,010.33"
EWR - TUS,58054747793,E-TUS-TPA-3,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/58054747793,https://www.airlines-manager.com/aircraft/show/98379317,19:30,5:44,310,"$641,733.00","$593,639.00","$1,914.96","$58,010.33"
EWR - TYS,58017973632,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/58017973632,https://www.airlines-manager.com/aircraft/show/119220543,3:00,7:29,310,"$291,829.00","$266,978.00",$861.22,"$59,549.00"
EWR - TYS,58034913925,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/58034913925,https://www.airlines-manager.com/aircraft/show/119220542,10:00,14:29,310,"$291,829.00","$266,978.00",$861.22,"$59,549.00"
EWR - TYS,58051861625,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/58051861625,https://www.airlines-manager.com/aircraft/show/119220545,18:45,23:14,310,"$291,829.00","$266,978.00",$861.22,"$59,549.00"
EWR - TYS,58059513399,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/58059513399,https://www.airlines-manager.com/aircraft/show/119220544,23:15,3:44,310,"$291,829.00","$266,978.00",$861.22,"$59,549.00"
EWR - VCE,58017973641,E-84B-3  B2,777-300,https://www.airlines-manager.com/network/showline/49921914,https://www.airlines-manager.com/network/showflight/58017973641,https://www.airlines-manager.com/aircraft/show/117958697,3:00,20:14,852,"$2,729,726.00","$2,489,336.00","$2,921.76","$144,448.90"
EWR - VCE,58045346221,E-84B-6  B2,777-300,https://www.airlines-manager.com/network/showline/49921914,https://www.airlines-manager.com/network/showflight/58045346221,https://www.airlines-manager.com/aircraft/show/117958700,15:00,8:14,826,"$2,661,406.00","$2,428,886.00","$2,940.54","$140,941.16"
EWR - YEG,58017973118,E-YEG-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/58017973118,https://www.airlines-manager.com/aircraft/show/98936170,0:15,10:14,320,"$636,684.00","$584,290.00","$1,825.91","$58,526.54"
EWR - YEG,58017973119,E-YEG-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/58017973119,https://www.airlines-manager.com/aircraft/show/98936171,2:15,12:14,320,"$636,684.00","$584,290.00","$1,825.91","$58,526.54"
EWR - YEG,58034914036,E-YEG-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/58034914036,https://www.airlines-manager.com/aircraft/show/98936168,11:00,20:59,320,"636,684$","584,290$","$1,825.91","$58,526.54"
EWR - YEG,58038353934,E-YEG-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/58038353934,https://www.airlines-manager.com/aircraft/show/98936169,12:30,22:29,320,"636,684$","584,290$","$1,825.91","$58,526.54"
EWR - YEG,58057474953,E-YEG-BFF-5 B,A319-100,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/58057474953,https://www.airlines-manager.com/aircraft/show/115493369,22:00,7:59,198,"475,490$","437,332$","$2,208.75","$43,806.21"
EWR - YOW,58031343204,E-CUN-SJU-1,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/58031343204,https://www.airlines-manager.com/aircraft/show/106581304,9:30,12:59,320,"171,271$","145,940$",$456.06,"$41,896.65"
EWR - YOW,58034914041,E-CUN-SJU-4,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/58034914041,https://www.airlines-manager.com/aircraft/show/106581307,11:00,14:29,320,"171,271$","145,940$",$456.06,"$41,896.65"
EWR - YOW,58051861601,E-CUN-SJU-5,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/58051861601,https://www.airlines-manager.com/aircraft/show/86238754,18:45,22:14,320,"$171,271.00","$145,940.00",$456.06,"$41,896.65"
EWR - YOW,58057474858,E-CUN-SJU-3,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/58057474858,https://www.airlines-manager.com/aircraft/show/106581306,21:15,0:44,320,"$171,271.00","$145,940.00",$456.06,"$41,896.65"
EWR - YOW,58059513313,E-CUN-SJU-2,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/58059513313,https://www.airlines-manager.com/aircraft/show/106581305,22:45,2:14,297,"$163,764.00","$138,636.00",$466.79,"$39,799.81"
EWR - YUL,58031343205,E-CUN-SJU-3,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/58031343205,https://www.airlines-manager.com/aircraft/show/106581306,9:30,12:59,320,"$174,699.00","$146,541.00",$457.94,"$42,069.19"
EWR - YUL,58034914040,E-CUN-SJU-2,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/58034914040,https://www.airlines-manager.com/aircraft/show/106581305,11:00,14:29,320,"$174,699.00","$146,541.00",$457.94,"$42,069.19"
EWR - YUL,58045346235,E-CUN-SJU-5,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/58045346235,https://www.airlines-manager.com/aircraft/show/86238754,15:15,18:44,320,"$174,699.00","$146,541.00",$457.94,"$42,069.19"
EWR - YUL,58057474826,E-CUN-SJU-1,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/58057474826,https://www.airlines-manager.com/aircraft/show/106581304,21:00,0:29,320,"$174,699.00","$146,541.00",$457.94,"$42,069.19"
EWR - YUL,58059513284,E-CUN-SJU-4,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/58059513284,https://www.airlines-manager.com/aircraft/show/106581307,22:30,1:59,320,"$174,699.00","$146,541.00",$457.94,"$42,069.19"
EWR - YVR,58017973043,E-YVR-YYC-1,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/58017973043,https://www.airlines-manager.com/aircraft/show/113681636,0:00,11:14,400,"$912,826.00","$840,448.00","$2,101.12","$74,817.33"
EWR - YVR,58017973044,E-YVR-YYC-2,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/58017973044,https://www.airlines-manager.com/aircraft/show/113681637,1:30,12:44,400,"$912,826.00","$840,448.00","$2,101.12","$74,817.33"
EWR - YVR,58017973045,E-YVR-YYC-3,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/58017973045,https://www.airlines-manager.com/aircraft/show/113681638,3:00,14:14,400,"$912,826.00","$840,448.00","$2,101.12","$74,817.33"
EWR - YVR,58034914114,E-YVR-YYC-4,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/58034914114,https://www.airlines-manager.com/aircraft/show/113681639,11:15,22:29,400,"$912,826.00","$840,448.00","$2,101.12","$74,817.33"
EWR - YVR,58038353943,E-YVR-YYC-5,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/58038353943,https://www.airlines-manager.com/aircraft/show/113681640,12:45,23:59,400,"$912,826.00","$840,448.00","$2,101.12","$74,817.33"
EWR - YYC,58017973408,E-YVR-YYC-4,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/58017973408,https://www.airlines-manager.com/aircraft/show/113681639,1:30,11:14,400,"$791,438.00","$727,885.00","$1,819.71","$74,782.71"
EWR - YYC,58017973409,E-YVR-YYC-5,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/58017973409,https://www.airlines-manager.com/aircraft/show/113681640,3:00,12:44,400,"$791,438.00","$727,885.00","$1,819.71","$74,782.71"
EWR - YYC,58034914113,E-YVR-YYC-1,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/58034914113,https://www.airlines-manager.com/aircraft/show/113681636,11:15,20:59,400,"$791,438.00","$727,885.00","$1,819.71","$74,782.71"
EWR - YYC,58038353942,E-YVR-YYC-2,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/58038353942,https://www.airlines-manager.com/aircraft/show/113681637,12:45,22:29,400,"$791,438.00","$727,885.00","$1,819.71","$74,782.71"
EWR - YYC,58042065757,E-YVR-YYC-3,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/58042065757,https://www.airlines-manager.com/aircraft/show/113681638,14:15,23:59,400,"$791,438.00","$727,885.00","$1,819.71","$74,782.71"
EWR - YYZ,58017973547,E-DTW-YYZ-4,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/58017973547,https://www.airlines-manager.com/aircraft/show/92003922,2:15,5:44,320,"$180,492.00","$146,154.00",$456.73,"$41,958.09"
EWR - YYZ,58027885488,E-DTW-YYZ-5,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/58027885488,https://www.airlines-manager.com/aircraft/show/92003921,7:30,10:59,320,"$180,492.00","$146,154.00",$456.73,"$41,958.09"
EWR - YYZ,58034913848,E-DTW-YYZ-2,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/58034913848,https://www.airlines-manager.com/aircraft/show/92003924,10:00,13:29,320,"$180,492.00","$146,154.00",$456.73,"$41,958.09"
EWR - YYZ,58042065661,E-DTW-YYZ-1,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/58042065661,https://www.airlines-manager.com/aircraft/show/92003925,14:00,17:29,320,"$180,492.00","$146,154.00",$456.73,"$41,958.09"
EWR - YYZ,58051861541,E-DTW-YYZ-3,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/58051861541,https://www.airlines-manager.com/aircraft/show/92003923,18:15,21:44,320,"$180,492.00","$146,154.00",$456.73,"$41,958.09"
EWR - ZRH,58027885521,E-84A-6 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/58027885521,https://www.airlines-manager.com/aircraft/show/90656552,7:45,23:59,852,"$2,642,406.00","$2,399,717.00","$2,816.57","$147,826.51"
EWR - ZRH,58054747876,E-84A-7 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/58054747876,https://www.airlines-manager.com/aircraft/show/94521249,20:00,12:14,852,"$2,642,406.00","$2,399,717.00","$2,816.57","$147,826.51"
HNL - AKL,58045346332,H-84B-2 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/58045346332,https://www.airlines-manager.com/aircraft/show/96807092,16:00,9:59,832,"$2,918,341.00","$2,661,151.00","$3,198.50","$147,978.74"
HNL - AKL,58059513380,H-84B-6 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/58059513380,https://www.airlines-manager.com/aircraft/show/96807088,23:00,16:59,832,"$2,900,946.00","$2,649,712.00","$3,184.75","$147,342.65"
HNL - ATL,58021655918,H-56B-2 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/58021655918,https://www.airlines-manager.com/aircraft/show/109187499,4:45,22:44,592,"$2,202,643.00","$2,016,788.00","$3,406.74","$112,147.62"
HNL - ATL,58045346279,H-56B-4 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/58045346279,https://www.airlines-manager.com/aircraft/show/109187501,16:00,9:59,592,"$2,202,643.00","$2,016,788.00","$3,406.74","$112,147.62"
HNL - ATL,58059513305,H-56B-2 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/58059513305,https://www.airlines-manager.com/aircraft/show/109187499,22:45,16:44,592,"$2,202,643.00","$2,016,788.00","$3,406.74","$112,147.62"
HNL - BNE,58021655842,H-84B-6 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/58021655842,https://www.airlines-manager.com/aircraft/show/96807088,4:00,22:59,832,"$3,061,944.00","$2,793,095.00","$3,357.09","$147,134.06"
HNL - BNE,58034913946,H-84B-3 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/58034913946,https://www.airlines-manager.com/aircraft/show/96807091,10:00,4:59,832,"$3,043,502.00","$2,780,999.00","$3,342.55","$146,496.87"
HNL - BOS,58017973030,H-56E-6 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/58017973030,https://www.airlines-manager.com/aircraft/show/117414505,0:00,19:59,592,"$2,408,347.00","$2,248,895.00","$3,798.81","$112,538.53"
HNL - BOS,58031343114,H-56E-1 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/58031343114,https://www.airlines-manager.com/aircraft/show/117414500,8:30,4:29,592,"$2,408,347.00","$2,248,895.00","$3,798.81","$112,538.53"
HNL - BOS,58034913836,H-56E-4 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/58034913836,https://www.airlines-manager.com/aircraft/show/117414503,10:00,5:59,592,"$2,408,347.00","$2,248,895.00","$3,798.81","$112,538.53"
HNL - BWI,58017973572,H-56F-4 B,787-10,https://www.airlines-manager.com/network/showline/50049284,https://www.airlines-manager.com/network/showflight/58017973572,https://www.airlines-manager.com/aircraft/show/118383854,2:30,21:44,592,"$2,293,871.00","$2,143,128.00","$3,620.15","$111,427.80"
HNL - BWI,58038353845,H-56F-5 B,787-10,https://www.airlines-manager.com/network/showline/50049284,https://www.airlines-manager.com/network/showflight/58038353845,https://www.airlines-manager.com/aircraft/show/118383855,11:45,6:59,592,"$2,293,871.00","$2,143,128.00","$3,620.15","$111,427.80"
HNL - BWI,58048703675,H-56F-1 B,787-10,https://www.airlines-manager.com/network/showline/50049284,https://www.airlines-manager.com/network/showflight/58048703675,https://www.airlines-manager.com/aircraft/show/118383851,17:00,12:14,592,"$2,293,871.00","$2,143,128.00","$3,620.15","$111,427.80"
HNL - CLT,58021655895,H-56D-3 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/58021655895,https://www.airlines-manager.com/aircraft/show/112066134,4:30,23:14,592,"$2,263,173.00","$2,107,474.00","$3,559.92","$112,498.61"
HNL - CLT,58024780619,H-56D-5 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/58024780619,https://www.airlines-manager.com/aircraft/show/112066136,5:30,0:14,592,"$2,263,173.00","$2,107,474.00","$3,559.92","$112,498.61"
HNL - CLT,58059513386,H-56D-3 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/58059513386,https://www.airlines-manager.com/aircraft/show/112066134,23:15,17:59,592,"$2,263,173.00","$2,107,474.00","$3,559.92","$112,498.61"
HNL - CXI,58024780632,H-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/58024780632,https://www.airlines-manager.com/aircraft/show/90717080,5:30,12:44,388,"$494,113.00","$463,605.00","$1,194.86","$64,092.86"
HNL - CXI,58045346187,H-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/58045346187,https://www.airlines-manager.com/aircraft/show/90717080,15:00,22:14,388,"$494,113.00","$463,605.00","$1,194.86","$64,092.86"
HNL - CXI,58057474975,H-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/58057474975,https://www.airlines-manager.com/aircraft/show/90717080,22:15,5:29,388,"$494,113.00","$463,605.00","$1,194.86","$64,092.86"
HNL - DEN,58027885452,H-56F-6 B,787-10,https://www.airlines-manager.com/network/showline/43762939,https://www.airlines-manager.com/network/showflight/58027885452,https://www.airlines-manager.com/aircraft/show/118383856,7:00,20:59,592,"$1,714,252.00","$1,569,460.00","$2,651.11","$112,237.90"
HNL - DEN,58048703676,H-56F-2 B,787-10,https://www.airlines-manager.com/network/showline/43762939,https://www.airlines-manager.com/network/showflight/58048703676,https://www.airlines-manager.com/aircraft/show/118383852,17:00,6:59,592,"$1,714,252.00","$1,569,460.00","$2,651.11","$112,237.90"
HNL - DEN,58057474906,H-56F-4 B,787-10,https://www.airlines-manager.com/network/showline/43762939,https://www.airlines-manager.com/network/showflight/58057474906,https://www.airlines-manager.com/aircraft/show/118383854,21:45,11:44,592,"$1,714,252.00","$1,569,460.00","$2,651.11","$112,237.90"
HNL - DFW,58021655896,H-56E-2 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/58021655896,https://www.airlines-manager.com/aircraft/show/117414501,4:30,19:59,592,"$1,894,637.00","$1,743,253.00","$2,944.68","$112,589.00"
HNL - DFW,58048703674,H-56E-7 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/58048703674,https://www.airlines-manager.com/aircraft/show/117414506,17:00,8:29,592,"1,894,637$","1,743,253$","$2,944.68","$112,589.00"
HNL - DFW,58051861568,H-56E-3 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/58051861568,https://www.airlines-manager.com/aircraft/show/117414502,18:30,9:59,592,"1,894,637$","1,743,253$","$2,944.68","$112,589.00"
HNL - DTW,58024780667,H-56E-5 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/58024780667,https://www.airlines-manager.com/aircraft/show/117414504,6:00,23:59,592,"2,160,456$","2,010,661$","$3,396.39","$111,806.91"
HNL - DTW,58054747842,H-56E-2 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/58054747842,https://www.airlines-manager.com/aircraft/show/117414501,20:00,13:59,592,"2,160,456$","2,010,661$","$3,396.39","$111,806.91"
HNL - DTW,58054747843,H-56E-6 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/58054747843,https://www.airlines-manager.com/aircraft/show/117414505,20:00,13:59,592,"$2,160,456.00","$2,010,661.00","$3,396.39","$111,806.91"
HNL - EWR,58021655855,H-56A-7 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/58021655855,https://www.airlines-manager.com/aircraft/show/95351586,4:15,23:59,592,"$2,374,139.00","$2,212,224.00","$3,736.86","$112,105.95"
HNL - EWR,58024780664,H-56A-6 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/58024780664,https://www.airlines-manager.com/aircraft/show/95351587,6:00,1:44,592,"$2,374,139.00","$2,212,224.00","$3,736.86","$112,105.95"
HNL - EWR,58054747808,H-56A-3 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/58054747808,https://www.airlines-manager.com/aircraft/show/95351590,19:45,15:29,592,"$2,374,139.00","$2,212,224.00","$3,736.86","$112,105.95"
HNL - GUM,58017973025,H-GUM,A321neo,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/58017973025,https://www.airlines-manager.com/aircraft/show/115400544,0:00,16:44,338,"$1,125,989.00","$1,062,930.00","$3,144.76","$63,521.71"
HNL - GUM,58021655936,H-84A-3 F,777-300,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/58021655936,https://www.airlines-manager.com/aircraft/show/95818924,4:45,20:29,832,"$2,562,457.00","$2,362,030.00","$2,838.98","$150,129.03"
HNL - IAD,58017973646,H-56C-3 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/58017973646,https://www.airlines-manager.com/aircraft/show/111639415,3:15,22:14,592,"$2,279,774.00","$2,127,047.00","$3,592.98","$112,048.13"
HNL - IAD,58031343189,H-56C-5 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/58031343189,https://www.airlines-manager.com/aircraft/show/111639417,9:15,4:14,592,"$2,279,774.00","$2,127,047.00","$3,592.98","$112,048.13"
HNL - IAD,58054747841,H-56C-7 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/58054747841,https://www.airlines-manager.com/aircraft/show/111639419,20:00,14:59,592,"$2,279,774.00","$2,127,047.00","$3,592.98","$112,048.13"
HNL - IAH,58017973027,H-56A-1 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/58017973027,https://www.airlines-manager.com/aircraft/show/95351592,0:00,15:59,592,"$1,936,223.00","$1,795,912.00","$3,033.64","$112,361.54"
HNL - IAH,58017973028,H-56A-3 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/58017973028,https://www.airlines-manager.com/aircraft/show/95351590,3:45,19:44,592,"$1,936,223.00","$1,795,912.00","$3,033.64","$112,361.54"
HNL - IAH,58045346278,H-56A-1 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/58045346278,https://www.airlines-manager.com/aircraft/show/95351592,16:00,7:59,592,"$1,936,223.00","$1,795,912.00","$3,033.64","$112,361.54"
HNL - ITO,58017973512,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/58017973512,https://www.airlines-manager.com/aircraft/show/94803593,1:45,4:44,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,58017973513,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/58017973513,https://www.airlines-manager.com/aircraft/show/94803596,3:15,6:14,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,58024780688,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/58024780688,https://www.airlines-manager.com/aircraft/show/94803595,6:00,8:59,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,58031343212,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/58031343212,https://www.airlines-manager.com/aircraft/show/94803594,9:30,12:29,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,58045346222,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/58045346222,https://www.airlines-manager.com/aircraft/show/94803593,15:00,17:59,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,58048703643,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/58048703643,https://www.airlines-manager.com/aircraft/show/94803596,16:30,19:29,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,58051861708,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/58051861708,https://www.airlines-manager.com/aircraft/show/94803595,19:15,22:14,170,"$77,322.00","$66,795.00",$392.91,"$22,389.39"
HNL - ITO,58059513337,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/58059513337,https://www.airlines-manager.com/aircraft/show/94803594,22:45,1:44,133,"$67,782.00","$57,657.00",$433.51,"$19,326.37"
HNL - JFK,58017973619,H-56B-6 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/58017973619,https://www.airlines-manager.com/aircraft/show/109187503,3:00,22:44,592,"$2,407,083.00","$2,224,643.00","$3,757.84","$112,735.29"
HNL - JFK,58031343168,H-56B-1 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/58031343168,https://www.airlines-manager.com/aircraft/show/109187498,9:00,4:44,592,"$2,407,083.00","$2,224,643.00","$3,757.84","$112,735.29"
HNL - JFK,58048703672,H-56B-3 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/58048703672,https://www.airlines-manager.com/aircraft/show/109187500,17:00,12:44,592,"2,407,083$","2,224,643$","$3,757.84","$112,735.29"
HNL - KOA,58017973222,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/58017973222,https://www.airlines-manager.com/aircraft/show/94803595,0:45,3:29,170,"58,952$","48,574$",$285.73,"$17,770.98"
HNL - KOA,58021655884,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/58021655884,https://www.airlines-manager.com/aircraft/show/94803594,4:15,6:59,170,"58,952$","48,574$",$285.73,"$17,770.98"
HNL - KOA,58027885483,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/58027885483,https://www.airlines-manager.com/aircraft/show/94803593,7:15,9:59,170,"58,952$","48,574$",$285.73,"$17,770.98"
HNL - KOA,58031343161,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/58031343161,https://www.airlines-manager.com/aircraft/show/94803596,8:45,11:29,170,"$58,952.00","$48,574.00",$285.73,"$17,770.98"
HNL - KOA,58042065742,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/58042065742,https://www.airlines-manager.com/aircraft/show/94803595,14:00,16:44,170,"$58,952.00","$48,574.00",$285.73,"$17,770.98"
HNL - KOA,58048703760,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/58048703760,https://www.airlines-manager.com/aircraft/show/94803594,17:30,20:14,170,"$58,952.00","$48,574.00",$285.73,"$17,770.98"
HNL - KOA,58054747934,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/58054747934,https://www.airlines-manager.com/aircraft/show/94803593,20:30,23:14,170,"$58,952.00","$48,574.00",$285.73,"$17,770.98"
HNL - KOA,58057474955,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/58057474955,https://www.airlines-manager.com/aircraft/show/94803596,22:00,0:44,170,"$58,952.00","$48,574.00",$285.73,"$17,770.98"
HNL - LAS,58024780711,H-84A-5 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/58024780711,https://www.airlines-manager.com/aircraft/show/95818922,6:30,18:29,832,"$1,898,127.00","$1,711,499.00","$2,057.09","$142,823.28"
HNL - LAS,58048703640,H-LAS S,A321-200,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/58048703640,https://www.airlines-manager.com/aircraft/show/116385511,16:30,5:14,232,"$747,103.00","$675,601.00","$2,912.07","$53,057.67"
HNL - LAS,58054747931,H-84A-3 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/58054747931,https://www.airlines-manager.com/aircraft/show/95818924,20:30,8:29,809,"$1,863,321.00","$1,678,838.00","$2,075.20","$140,097.75"
HNL - LAX,58027885449,H-SFO-LAX-3,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/58027885449,https://www.airlines-manager.com/aircraft/show/110044460,7:00,18:59,338,"$790,352.00","$722,080.00","$2,136.33","$60,257.02"
HNL - LAX,58031343165,H-SFO-LAX-4,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/58031343165,https://www.airlines-manager.com/aircraft/show/110044461,9:00,20:59,338,"$790,352.00","$722,080.00","$2,136.33","$60,257.02"
HNL - LAX,58034913943,H-SFO-LAX-6 B,A319-100,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/58034913943,https://www.airlines-manager.com/aircraft/show/106106389,10:00,21:59,198,"$546,807.00","$489,527.00","$2,472.36","$40,850.65"
HNL - LAX,58051861536,H-SFO-LAX-1,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/58051861536,https://www.airlines-manager.com/aircraft/show/110044458,18:15,6:14,338,"$790,352.00","$722,080.00","$2,136.33","$60,257.02"
HNL - LAX,58054747882,H-SFO-LAX-2,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/58054747882,https://www.airlines-manager.com/aircraft/show/110044459,20:15,8:14,338,"$790,352.00","$722,080.00","$2,136.33","$60,257.02"
HNL - LAX,58057474903,H-SFO-LAX-5,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/58057474903,https://www.airlines-manager.com/aircraft/show/110044462,21:45,9:44,338,"$790,352.00","$722,080.00","$2,136.33","$60,257.02"
HNL - LIH,58017973223,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/58017973223,https://www.airlines-manager.com/aircraft/show/94803596,0:45,3:14,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,58017973224,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/58017973224,https://www.airlines-manager.com/aircraft/show/94803595,3:30,5:59,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,58027885468,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/58027885468,https://www.airlines-manager.com/aircraft/show/94803594,7:00,9:29,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,58034913948,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/58034913948,https://www.airlines-manager.com/aircraft/show/94803593,10:00,12:29,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,58042065744,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/58042065744,https://www.airlines-manager.com/aircraft/show/94803596,14:00,16:29,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,58048703665,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/58048703665,https://www.airlines-manager.com/aircraft/show/94803595,16:45,19:14,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,58054747910,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/58054747910,https://www.airlines-manager.com/aircraft/show/94803594,20:15,22:44,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LIH,58059513405,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/58059513405,https://www.airlines-manager.com/aircraft/show/94803593,23:15,1:44,170,"$51,115.00","$42,695.00",$251.15,"$17,192.62"
HNL - LNY,58017973349,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/58017973349,https://www.airlines-manager.com/aircraft/show/106107514,1:00,3:29,116,"$30,431.00","$25,424.00",$219.17,"$10,237.85"
HNL - LNY,58017973350,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/58017973350,https://www.airlines-manager.com/aircraft/show/106107514,3:30,5:59,116,"30,431$","25,424$",$219.17,"$10,237.85"
HNL - LNY,58024780689,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/58024780689,https://www.airlines-manager.com/aircraft/show/106107514,6:00,8:29,116,"30,431$","25,424$",$219.17,"$10,237.85"
HNL - LNY,58031343143,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/58031343143,https://www.airlines-manager.com/aircraft/show/106107514,8:30,10:59,116,"30,431$","25,424$",$219.17,"$10,237.85"
HNL - LNY,58045346224,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/58045346224,https://www.airlines-manager.com/aircraft/show/106107514,15:00,17:29,116,"30,431$","25,424$",$219.17,"$10,237.85"
HNL - LNY,58048703761,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/58048703761,https://www.airlines-manager.com/aircraft/show/106107514,17:30,19:59,116,"$30,431.00","$25,424.00",$219.17,"$10,237.85"
HNL - LNY,58054747879,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/58054747879,https://www.airlines-manager.com/aircraft/show/106107514,20:00,22:29,116,"$30,431.00","$25,424.00",$219.17,"$10,237.85"
HNL - LNY,58059513300,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/58059513300,https://www.airlines-manager.com/aircraft/show/106107514,22:30,0:59,116,"$30,431.00","$25,424.00",$219.17,"$10,237.85"
HNL - MCO,58017973232,H-56C-7 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/58017973232,https://www.airlines-manager.com/aircraft/show/111639419,1:00,19:59,592,"$2,289,533.00","$2,129,434.00","$3,597.02","$112,173.87"
HNL - MCO,58021655857,H-56C-6 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/58021655857,https://www.airlines-manager.com/aircraft/show/111639418,4:15,23:14,592,"$2,289,533.00","$2,129,434.00","$3,597.02","$112,173.87"
HNL - MCO,58031343091,H-56C-2 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/58031343091,https://www.airlines-manager.com/aircraft/show/111639414,8:15,3:14,592,"2,289,533$","2,129,434$","$3,597.02","$112,173.87"
HNL - MEL,58031343142,H-84A-4 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/58031343142,https://www.airlines-manager.com/aircraft/show/95818923,8:30,6:29,832,"3,546,306$","3,244,924$","$3,900.15","$147,608.37"
HNL - MEL,58054747878,H-84A-7 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/58054747878,https://www.airlines-manager.com/aircraft/show/95818920,20:00,17:59,832,"3,546,306$","3,244,924$","$3,900.15","$147,608.37"
HNL - MIA,58031343113,H-56A-2 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/58031343113,https://www.airlines-manager.com/aircraft/show/95351591,8:30,3:44,592,"2,335,269$","2,169,008$","$3,663.86","$112,773.38"
HNL - MIA,58034913978,H-56A-5 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/58034913978,https://www.airlines-manager.com/aircraft/show/95351588,10:45,5:59,592,"2,335,269$","2,169,008$","$3,663.86","$112,773.38"
HNL - MIA,58045346246,H-56A-4 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/58045346246,https://www.airlines-manager.com/aircraft/show/95351589,15:30,10:44,592,"$2,335,269.00","$2,169,008.00","$3,663.86","$112,773.38"
HNL - MNL,58027885506,H-84A-2 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/58027885506,https://www.airlines-manager.com/aircraft/show/95818925,7:30,4:44,832,"$3,468,526.00","$3,179,229.00","$3,821.19","$149,728.21"
HNL - MNL,58051861594,H-84A-5 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/58051861594,https://www.airlines-manager.com/aircraft/show/95818922,18:30,15:44,832,"$3,468,526.00","$3,179,229.00","$3,821.19","$149,728.21"
HNL - MSP,58045346281,H-56C-1 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/58045346281,https://www.airlines-manager.com/aircraft/show/111639413,16:00,8:14,592,"$1,950,535.00","$1,816,162.00","$3,067.84","$111,878.56"
HNL - MSP,58048703673,H-56C-4 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/58048703673,https://www.airlines-manager.com/aircraft/show/111639416,17:00,9:14,592,"$1,950,535.00","$1,816,162.00","$3,067.84","$111,878.56"
HNL - MSP,58057474963,H-56C-3 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/58057474963,https://www.airlines-manager.com/aircraft/show/111639415,22:15,14:29,592,"$1,950,535.00","$1,816,162.00","$3,067.84","$111,878.56"
HNL - NAN,58017973697,H-84A-7 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/58017973697,https://www.airlines-manager.com/aircraft/show/95818920,3:45,17:14,832,"$2,077,351.00","$1,906,145.00","$2,291.04","$141,370.46"
HNL - NAN,58051861527,H-84A-1 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/58051861527,https://www.airlines-manager.com/aircraft/show/95818926,18:00,7:29,832,"$2,048,301.00","$1,886,749.00","$2,267.73","$139,931.94"
HNL - OGG,58017973514,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/58017973514,https://www.airlines-manager.com/aircraft/show/94803594,1:45,4:14,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,58021655937,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/58021655937,https://www.airlines-manager.com/aircraft/show/94803593,4:45,7:14,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,58024780699,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/58024780699,https://www.airlines-manager.com/aircraft/show/94803596,6:15,8:44,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,58031343184,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/58031343184,https://www.airlines-manager.com/aircraft/show/94803595,9:00,11:29,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,58045346223,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/58045346223,https://www.airlines-manager.com/aircraft/show/94803594,15:00,17:29,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,58051861528,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/58051861528,https://www.airlines-manager.com/aircraft/show/94803593,18:00,20:29,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,58054747802,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/58054747802,https://www.airlines-manager.com/aircraft/show/94803596,19:30,21:59,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - OGG,58057474991,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/58057474991,https://www.airlines-manager.com/aircraft/show/94803595,22:15,0:44,170,"$51,835.00","$43,037.00",$253.16,"$17,330.34"
HNL - ORD,58034913835,H-56B-5 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/58034913835,https://www.airlines-manager.com/aircraft/show/109187502,10:00,2:59,592,"$2,090,552.00","$1,921,092.00","$3,245.09","$113,116.31"
HNL - ORD,58045346280,H-56B-7 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/58045346280,https://www.airlines-manager.com/aircraft/show/109187504,16:00,8:59,592,"$2,090,552.00","$1,921,092.00","$3,245.09","$113,116.31"
HNL - ORD,58059513306,H-56B-6 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/58059513306,https://www.airlines-manager.com/aircraft/show/109187503,22:45,15:44,592,"$2,090,552.00","$1,921,092.00","$3,245.09","$113,116.31"
HNL - PHL,58027885451,H-56F-3 B,787-10,https://www.airlines-manager.com/network/showline/50049283,https://www.airlines-manager.com/network/showflight/58027885451,https://www.airlines-manager.com/aircraft/show/118383853,7:00,2:29,592,"$2,346,540.00","$2,188,960.00","$3,697.57","$112,350.38"
HNL - PHL,58048703677,H-56F-7 B,787-10,https://www.airlines-manager.com/network/showline/50049283,https://www.airlines-manager.com/network/showflight/58048703677,https://www.airlines-manager.com/aircraft/show/118383857,17:00,12:29,592,"$2,346,540.00","$2,188,960.00","$3,697.57","$112,350.38"
HNL - PHL,58057474819,H-56F-6 B,787-10,https://www.airlines-manager.com/network/showline/50049283,https://www.airlines-manager.com/network/showflight/58057474819,https://www.airlines-manager.com/aircraft/show/118383856,21:00,16:29,592,"$2,346,540.00","$2,188,960.00","$3,697.57","$112,350.38"
HNL - PHX,58017973669,H-56D-7 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/58017973669,https://www.airlines-manager.com/aircraft/show/112066138,3:30,15:59,592,"$1,520,203.00","$1,409,068.00","$2,380.18","$112,875.94"
HNL - PHX,58045346152,H-56D-6 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/58045346152,https://www.airlines-manager.com/aircraft/show/112066137,15:00,3:29,592,"$1,520,203.00","$1,409,068.00","$2,380.18","$112,875.94"
HNL - PHX,58045346153,H-56D-2 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/58045346153,https://www.airlines-manager.com/aircraft/show/112066133,16:00,4:29,592,"$1,520,203.00","$1,409,068.00","$2,380.18","$112,875.94"
HNL - PPG,58017973645,H-TRW-PPG-1 S,A321neo,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/58017973645,https://www.airlines-manager.com/aircraft/show/120872966,3:15,15:29,410,"$843,136.00","$795,552.00","$1,940.37","$65,031.50"
HNL - PPG,58045346276,H-TRW-PPG-2 S,A321neo,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/58045346276,https://www.airlines-manager.com/aircraft/show/120872965,16:00,4:14,410,"$843,136.00","$795,552.00","$1,940.37","$65,031.50"
HNL - PPG,58051861490,H-TRW-PPG-3 S,A321neo,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/58051861490,https://www.airlines-manager.com/aircraft/show/120872964,18:00,6:14,410,"$843,136.00","$795,552.00","$1,940.37","$65,031.50"
HNL - PPT,58021655929,H-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/58021655929,https://www.airlines-manager.com/aircraft/show/88725600,4:45,17:29,310,"$771,400.00","$718,433.00","$2,317.53","$56,421.44"
HNL - PPT,58045346272,H-84A-6 F,777-300,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/58045346272,https://www.airlines-manager.com/aircraft/show/95818921,15:45,3:44,832,"$1,903,144.00","$1,751,128.00","$2,104.72","$146,130.29"
HNL - PPT,58048703758,H-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/58048703758,https://www.airlines-manager.com/aircraft/show/88725600,17:30,6:14,310,"$771,400.00","$718,433.00","$2,317.53","$56,421.44"
HNL - SEA,58017973684,H-56D-1 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/58017973684,https://www.airlines-manager.com/aircraft/show/112066132,3:45,15:14,592,"$1,418,230.00","$1,316,557.00","$2,223.91","$114,649.38"
HNL - SEA,58045346282,H-56D-1 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/58045346282,https://www.airlines-manager.com/aircraft/show/112066132,16:00,3:29,592,"$1,418,230.00","$1,316,557.00","$2,223.91","$114,649.38"
HNL - SEA,58051861494,H-56D-4 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/58051861494,https://www.airlines-manager.com/aircraft/show/112066135,18:00,5:29,592,"$1,418,230.00","$1,316,557.00","$2,223.91","$114,649.38"
HNL - SFO,58027885448,H-SFO-LAX-1,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/58027885448,https://www.airlines-manager.com/aircraft/show/110044458,7:00,18:14,338,"$759,152.00","$700,668.00","$2,072.98","$62,374.01"
HNL - SFO,58031343164,H-SFO-LAX-2,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/58031343164,https://www.airlines-manager.com/aircraft/show/110044459,9:00,20:14,338,"$759,152.00","$700,668.00","$2,072.98","$62,374.01"
HNL - SFO,58034913967,H-SFO-LAX-5,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/58034913967,https://www.airlines-manager.com/aircraft/show/110044462,10:30,21:44,338,"$759,152.00","$700,668.00","$2,072.98","$62,374.01"
HNL - SFO,58051861636,H-SFO-LAX-3,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/58051861636,https://www.airlines-manager.com/aircraft/show/110044460,19:00,6:14,338,"$759,152.00","$700,668.00","$2,072.98","$62,374.01"
HNL - SFO,58057474816,H-SFO-LAX-4,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/58057474816,https://www.airlines-manager.com/aircraft/show/110044461,21:00,8:14,338,"$759,152.00","$700,668.00","$2,072.98","$62,374.01"
HNL - SFO,58057474817,H-SFO-LAX-6 B,A319-100,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/58057474817,https://www.airlines-manager.com/aircraft/show/106106389,22:00,9:29,198,"$528,428.00","$479,141.00","$2,419.90","$41,724.91"
HNL - SIN,58021655973,H-84B-4 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/58021655973,https://www.airlines-manager.com/aircraft/show/96807090,5:15,7:29,832,"$4,330,890.00","$3,932,668.00","$4,726.76","$1,760,896.12"
HNL - SIN,58048703716,H-84B-7 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/58048703716,https://www.airlines-manager.com/aircraft/show/96807087,17:00,19:14,832,"$4,330,890.00","$3,932,668.00","$4,726.76","$1,760,896.12"
HNL - SYD,58027885507,H-84B-5 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/58027885507,https://www.airlines-manager.com/aircraft/show/96807089,7:30,3:59,832,"$3,347,714.00","$3,040,683.00","$3,654.67","$148,446.69"
HNL - SYD,58051861707,H-84B-1 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/58051861707,https://www.airlines-manager.com/aircraft/show/96807093,19:15,15:44,832,"$3,347,714.00","$3,040,683.00","$3,654.67","$148,446.69"
HNL - TRW,58021655852,H-TRW-PPG-2 S,A321neo,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/58021655852,https://www.airlines-manager.com/aircraft/show/120872965,4:15,15:29,410,"$815,013.00","$772,225.00","$1,883.48","$68,744.07"
HNL - TRW,58024780693,H-TRW-PPG-3 S,A321neo,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/58024780693,https://www.airlines-manager.com/aircraft/show/120872964,6:15,17:29,410,"$815,013.00","$772,225.00","$1,883.48","$68,744.07"
HNL - TRW,58045346277,H-TRW-PPG-1 S,A321neo,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/58045346277,https://www.airlines-manager.com/aircraft/show/120872966,16:00,3:14,410,"$815,013.00","$772,225.00","$1,883.48","$68,744.07"
HNL - YVR,58017973109,H-56D-6 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/58017973109,https://www.airlines-manager.com/aircraft/show/112066137,0:15,11:59,592,"$1,421,513.00","$1,326,107.00","$2,240.05","$113,020.48"
HNL - YVR,58017973110,H-56D-2 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/58017973110,https://www.airlines-manager.com/aircraft/show/112066133,3:30,15:14,592,"$1,421,513.00","$1,326,107.00","$2,240.05","$113,020.48"
HNL - YVR,58045346283,H-56D-7 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/58045346283,https://www.airlines-manager.com/aircraft/show/112066138,16:00,3:44,592,"$1,421,513.00","$1,326,107.00","$2,240.05","$113,020.48"
IAH - ABQ,58017973255,I-CLE-STL-1,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/58017973255,https://www.airlines-manager.com/aircraft/show/103600700,1:00,5:59,310,"$318,057.00","$284,740.00",$918.52,"$57,138.46"
IAH - ABQ,58017973257,I-CLE-STL-5 B,A319-100,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/58017973257,https://www.airlines-manager.com/aircraft/show/110582844,2:30,7:29,198,"$241,670.00","$214,984.00","$1,085.78","$43,140.60"
IAH - ABQ,58024780676,I-CLE-STL-4,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/58024780676,https://www.airlines-manager.com/aircraft/show/88725601,6:00,10:59,310,"$318,057.00","$284,740.00",$918.52,"$57,138.46"
IAH - ABQ,58042065575,I-CLE-STL-3,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/58042065575,https://www.airlines-manager.com/aircraft/show/103600702,13:00,17:59,310,"$318,057.00","$284,740.00",$918.52,"$57,138.46"
IAH - ABQ,58051861620,I-CLE-STL-2,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/58051861620,https://www.airlines-manager.com/aircraft/show/103600701,18:45,23:44,310,"$318,057.00","$284,740.00",$918.52,"$57,138.46"
IAH - ALB,58017973123,I-MHT-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/58017973123,https://www.airlines-manager.com/aircraft/show/114266976,0:15,7:59,320,"497,488$","452,034$","$1,412.61","$58,452.67"
IAH - ALB,58017973124,I-MHT-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/58017973124,https://www.airlines-manager.com/aircraft/show/92800067,2:00,9:59,112,"235,267$","208,227$","$1,859.17","$26,082.71"
IAH - ALB,58038353877,I-MHT-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/58038353877,https://www.airlines-manager.com/aircraft/show/114266971,12:00,19:44,320,"497,488$","452,034$","$1,412.61","$58,452.67"
IAH - ALB,58045346178,I-MHT-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/58045346178,https://www.airlines-manager.com/aircraft/show/114266970,15:00,22:44,320,"497,488$","452,034$","$1,412.61","$58,452.67"
IAH - ALB,58054747892,I-MHT-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/58054747892,https://www.airlines-manager.com/aircraft/show/114266972,20:15,3:59,320,"$497,488.00","$452,034.00","$1,412.61","$58,452.67"
IAH - ANC,58038353901,I-ANC-ONT-1,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/58038353901,https://www.airlines-manager.com/aircraft/show/108258010,12:00,2:44,310,"$901,188.00","$830,964.00","$2,680.53","$56,400.27"
IAH - ANC,58042065707,I-ANC-ONT-2,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/58042065707,https://www.airlines-manager.com/aircraft/show/108258011,14:00,4:44,310,"$901,188.00","$830,964.00","$2,680.53","$56,400.27"
IAH - ANC,58051861705,I-ANC-ONT-3,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/58051861705,https://www.airlines-manager.com/aircraft/show/108258012,19:15,9:59,310,"$901,188.00","$830,964.00","$2,680.53","$56,400.27"
IAH - ANC,58057474864,I-ANC-ONT-4,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/58057474864,https://www.airlines-manager.com/aircraft/show/108089220,21:15,11:59,310,"$901,188.00","$830,964.00","$2,680.53","$56,400.27"
IAH - ANC,58059513404,I-ANC-ONT-5 B,A319-100,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/58059513404,https://www.airlines-manager.com/aircraft/show/108286957,23:15,13:59,198,"$672,390.00","$616,070.00","$3,111.46","$41,814.71"
IAH - ATL,58017973147,I-LAS-ATL-6,ERJ-175,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/58017973147,https://www.airlines-manager.com/aircraft/show/82323704,0:15,4:59,112,"$146,580.00","$112,539.00","$1,004.81","$23,775.85"
IAH - ATL,58034913850,I-LAS-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/58034913850,https://www.airlines-manager.com/aircraft/show/95894466,10:00,14:44,320,"$307,891.00","$243,816.00",$761.93,"$51,510.42"
IAH - ATL,58034913851,I-LAS-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/58034913851,https://www.airlines-manager.com/aircraft/show/96256511,10:45,15:29,320,"$307,891.00","$243,816.00",$761.93,"$51,510.42"
IAH - ATL,58045346290,I-LAS-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/58045346290,https://www.airlines-manager.com/aircraft/show/96183549,16:00,20:44,320,"$307,891.00","$243,816.00",$761.93,"$51,510.42"
IAH - ATL,58048703770,I-LAS-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/58048703770,https://www.airlines-manager.com/aircraft/show/96177955,17:45,22:29,320,"$307,891.00","$243,816.00",$761.93,"$51,510.42"
IAH - ATL,58060881883,I-LAS-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/58060881883,https://www.airlines-manager.com/aircraft/show/96250652,23:45,4:29,320,"$307,891.00","$243,816.00",$761.93,"$51,510.42"
IAH - AUS,58021655850,I-BWI-PHL-2,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/58021655850,https://www.airlines-manager.com/aircraft/show/106007214,4:15,6:59,338,"$100,920.00","$77,319.00",$228.75,"$28,287.44"
IAH - AUS,58034913995,I-BWI-PHL-1,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/58034913995,https://www.airlines-manager.com/aircraft/show/106007213,11:00,13:44,338,"$100,920.00","$77,319.00",$228.75,"$28,287.44"
IAH - AUS,58038353857,I-BWI-PHL-5,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/58038353857,https://www.airlines-manager.com/aircraft/show/106007217,12:00,14:44,338,"$100,920.00","$77,319.00",$228.75,"$28,287.44"
IAH - AUS,58051861535,I-BWI-PHL-4,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/58051861535,https://www.airlines-manager.com/aircraft/show/106007216,18:15,20:59,338,"$100,920.00","$77,319.00",$228.75,"$28,287.44"
IAH - AUS,58057474873,I-BWI-PHL-3,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/58057474873,https://www.airlines-manager.com/aircraft/show/106007215,21:30,0:14,274,"$89,669.00","$66,272.00",$241.87,"$24,245.85"
IAH - BDL,58024780680,I-CLE-STL-1,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/58024780680,https://www.airlines-manager.com/aircraft/show/103600700,6:00,13:59,310,"$500,324.00","$457,984.00","$1,477.37","$57,367.52"
IAH - BDL,58027885504,I-CLE-STL-5 B,A319-100,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/58027885504,https://www.airlines-manager.com/aircraft/show/110582844,7:30,15:29,198,"$377,004.00","$343,067.00","$1,732.66","$42,972.90"
IAH - BDL,58034914072,I-CLE-STL-4,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/58034914072,https://www.airlines-manager.com/aircraft/show/88725601,11:00,18:59,310,"$500,324.00","$457,984.00","$1,477.37","$57,367.52"
IAH - BDL,58051861512,I-CLE-STL-3,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/58051861512,https://www.airlines-manager.com/aircraft/show/103600702,18:00,1:59,310,"$500,324.00","$457,984.00","$1,477.37","$57,367.52"
IAH - BDL,58054747836,I-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/58054747836,https://www.airlines-manager.com/aircraft/show/96990010,19:45,3:44,112,"$235,319.00","$207,286.00","$1,850.77","$25,964.84"
IAH - BDL,58060881892,I-CLE-STL-2,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/58060881892,https://www.airlines-manager.com/aircraft/show/103600701,23:45,7:44,310,"$500,324.00","$457,984.00","$1,477.37","$57,367.52"
IAH - BFF,58021655826,I-MHT-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/58021655826,https://www.airlines-manager.com/aircraft/show/114266972,4:00,9:44,320,"$366,994.00","$329,116.00","$1,028.49","$57,403.95"
IAH - BFF,58034913960,I-MHT-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/58034913960,https://www.airlines-manager.com/aircraft/show/114266976,10:15,15:59,320,"$366,994.00","$329,116.00","$1,028.49","$57,403.95"
IAH - BFF,58038353918,I-MHT-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/58038353918,https://www.airlines-manager.com/aircraft/show/92800067,12:00,17:44,112,"$173,788.00","$152,107.00","$1,358.10","$26,530.29"
IAH - BFF,58054747816,I-MHT-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/58054747816,https://www.airlines-manager.com/aircraft/show/114266971,19:45,1:29,320,"$366,994.00","$329,116.00","$1,028.49","$57,403.95"
IAH - BFF,58059513317,I-MHT-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/58059513317,https://www.airlines-manager.com/aircraft/show/114266970,22:45,4:29,320,"$366,994.00","$329,116.00","$1,028.49","$57,403.95"
IAH - BHM,58017973057,I-BHM,737-900ER,https://www.airlines-manager.com/network/showline/50835066,https://www.airlines-manager.com/network/showflight/58017973057,https://www.airlines-manager.com/aircraft/show/120933644,0:00,4:14,320,"$268,942.00","$236,950.00",$740.47,"$55,972.44"
IAH - BHM,58034914060,I-BHM,737-900ER,https://www.airlines-manager.com/network/showline/50835066,https://www.airlines-manager.com/network/showflight/58034914060,https://www.airlines-manager.com/aircraft/show/120933644,11:00,15:14,320,"$268,942.00","$236,950.00",$740.47,"$55,972.44"
IAH - BHM,58045346237,I-BHM,737-900ER,https://www.airlines-manager.com/network/showline/50835066,https://www.airlines-manager.com/network/showflight/58045346237,https://www.airlines-manager.com/aircraft/show/120933644,15:15,19:29,320,"$268,942.00","$236,950.00",$740.47,"$55,972.44"
IAH - BHM,58054747785,I-BHM,737-900ER,https://www.airlines-manager.com/network/showline/50835066,https://www.airlines-manager.com/network/showflight/58054747785,https://www.airlines-manager.com/aircraft/show/120933644,19:30,23:44,320,"$268,942.00","$236,950.00",$740.47,"$55,972.44"
IAH - BIL,58017973600,I-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/58017973600,https://www.airlines-manager.com/aircraft/show/117273390,2:45,9:59,320,"$457,445.00","$414,054.00","$1,293.92","$57,242.49"
IAH - BIL,58031343172,I-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/58031343172,https://www.airlines-manager.com/aircraft/show/117273392,9:00,16:14,320,"$457,445.00","$414,054.00","$1,293.92","$57,242.49"
IAH - BIL,58034914052,I-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/58034914052,https://www.airlines-manager.com/aircraft/show/117273389,11:00,18:14,320,"$457,445.00","$414,054.00","$1,293.92","$57,242.49"
IAH - BIL,58051861576,I-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/58051861576,https://www.airlines-manager.com/aircraft/show/117273391,18:30,1:44,320,"$457,445.00","$414,054.00","$1,293.92","$57,242.49"
IAH - BNA,58021655835,I-BOI-BNA-4,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/58021655835,https://www.airlines-manager.com/aircraft/show/104258214,4:00,8:44,310,"$302,944.00","$271,735.00",$876.56,"$57,408.80"
IAH - BNA,58031343193,I-BOI-BNA-3,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/58031343193,https://www.airlines-manager.com/aircraft/show/104258213,9:15,13:59,310,"$302,944.00","$271,735.00",$876.56,"$57,408.80"
IAH - BNA,58045346193,I-BOI-BNA-2,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/58045346193,https://www.airlines-manager.com/aircraft/show/104258212,15:00,19:44,310,"$302,944.00","$271,735.00",$876.56,"$57,408.80"
IAH - BNA,58057474939,I-BOI-BNA-1,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/58057474939,https://www.airlines-manager.com/aircraft/show/104258211,22:00,2:44,310,"$302,944.00","$271,735.00",$876.56,"$57,408.80"
IAH - BNA,58059513382,I-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/58059513382,https://www.airlines-manager.com/aircraft/show/103534664,23:00,3:44,112,"$143,897.00","$124,026.00","$1,107.38","$26,202.68"
IAH - BOG,58024780665,I-56A-4 E,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/58024780665,https://www.airlines-manager.com/aircraft/show/106676235,6:00,15:59,648,"$1,306,935.00","$1,214,643.00","$1,874.45","$121,667.08"
IAH - BOG,58042065651,I-56A-6 E,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/58042065651,https://www.airlines-manager.com/aircraft/show/106676237,14:00,23:59,648,"$1,306,935.00","$1,214,643.00","$1,874.45","$121,667.08"
IAH - BOG,58054747840,I-56A-1 E,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/58054747840,https://www.airlines-manager.com/aircraft/show/106676232,20:00,5:59,648,"$1,306,935.00","$1,214,643.00","$1,874.45","$121,667.08"
IAH - BOI,58017973382,I-BOI-BNA-3,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/58017973382,https://www.airlines-manager.com/aircraft/show/104258213,1:15,9:14,310,"$502,482.00","$460,855.00","$1,486.63","$57,727.14"
IAH - BOI,58027885466,I-BOI-BNA-2,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/58027885466,https://www.airlines-manager.com/aircraft/show/104258212,7:00,14:59,310,"502,482$","460,855$","$1,486.63","$57,727.14"
IAH - BOI,58042065699,I-BOI-BNA-1,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/58042065699,https://www.airlines-manager.com/aircraft/show/104258211,14:00,21:59,310,"502,482$","460,855$","$1,486.63","$57,727.14"
IAH - BOI,58045346227,I-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/58045346227,https://www.airlines-manager.com/aircraft/show/103534664,15:00,22:59,112,"236,364$","208,802$","$1,864.30","$26,154.74"
IAH - BOI,58054747855,I-BOI-BNA-4,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/58054747855,https://www.airlines-manager.com/aircraft/show/104258214,20:00,3:59,310,"502,482$","460,855$","$1,486.63","$57,727.14"
IAH - BOS,58017973474,I-JFK-LAX-3,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/58017973474,https://www.airlines-manager.com/aircraft/show/88400800,1:45,9:59,400,"$668,982.00","$607,178.00","$1,517.95","$73,746.32"
IAH - BOS,58034914017,I-JFK-LAX-2,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/58034914017,https://www.airlines-manager.com/aircraft/show/88400799,11:00,19:14,400,"$668,982.00","$607,178.00","$1,517.95","$73,746.32"
IAH - BOS,58038353859,I-JFK-LAX-4,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/58038353859,https://www.airlines-manager.com/aircraft/show/88400801,12:00,20:14,400,"$668,982.00","$607,178.00","$1,517.95","$73,746.32"
IAH - BOS,58048703768,I-JFK-LAX-5,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/58048703768,https://www.airlines-manager.com/aircraft/show/89233038,17:45,1:59,400,"$668,982.00","$607,178.00","$1,517.95","$73,746.32"
IAH - BOS,58051861569,I-JFK-LAX-1,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/58051861569,https://www.airlines-manager.com/aircraft/show/88400798,18:30,2:44,386,"$654,998.00","$593,774.00","$1,538.27","$72,118.30"
IAH - BSB,58034914122,I-84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/58034914122,https://www.airlines-manager.com/aircraft/show/89124076,11:15,5:29,932,"$3,069,976.00","$2,802,042.00","$3,006.48","$153,676.89"
IAH - BSB,58054747909,I-84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/58054747909,https://www.airlines-manager.com/aircraft/show/88905140,20:15,14:29,932,"$3,069,976.00","$2,802,042.00","$3,006.48","$153,676.89"
IAH - BTV,58017973061,I-BTV-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/58017973061,https://www.airlines-manager.com/aircraft/show/86385103,0:00,8:14,310,"$517,662.00","$475,935.00","$1,535.27","$57,805.87"
IAH - BTV,58021655886,I-BTV-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/58021655886,https://www.airlines-manager.com/aircraft/show/82543907,4:15,12:29,112,"$243,763.00","$215,988.00","$1,928.46","$26,233.36"
IAH - BTV,58027885479,I-BTV-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/58027885479,https://www.airlines-manager.com/aircraft/show/114373409,7:15,15:29,310,"$517,662.00","$475,935.00","$1,535.27","$57,805.87"
IAH - BTV,58042065716,I-BTV-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/58042065716,https://www.airlines-manager.com/aircraft/show/114373410,14:00,22:14,310,"$517,662.00","$475,935.00","$1,535.27","$57,805.87"
IAH - BTV,58051861622,I-BTV-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/58051861622,https://www.airlines-manager.com/aircraft/show/113994196,18:45,2:59,310,"$517,662.00","$475,935.00","$1,535.27","$57,805.87"
IAH - BUF,58017973383,I-PVD-BUF-4,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/58017973383,https://www.airlines-manager.com/aircraft/show/107467127,1:15,8:14,310,"$454,004.00","$415,337.00","$1,339.80","$59,475.47"
IAH - BUF,58021655836,I-PVD-BUF-3,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/58021655836,https://www.airlines-manager.com/aircraft/show/107467128,4:00,10:59,310,"$454,004.00","$415,337.00","$1,339.80","$59,475.47"
IAH - BUF,58042065582,I-PVD-BUF-2,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/58042065582,https://www.airlines-manager.com/aircraft/show/107467129,13:00,19:59,310,"$454,004.00","$415,337.00","$1,339.80","$59,475.47"
IAH - BUF,58048703715,I-PVD-BUF-5 B,A319-100,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/58048703715,https://www.airlines-manager.com/aircraft/show/110582843,17:00,23:59,198,"$342,604.00","$311,616.00","$1,573.82","$44,622.82"
IAH - BUF,58057474863,I-PVD-BUF-1,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/58057474863,https://www.airlines-manager.com/aircraft/show/107467130,21:15,4:14,310,"$454,004.00","$415,337.00","$1,339.80","$59,475.47"
IAH - BUR,58017973585,I-YEG-BUR-4,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/58017973585,https://www.airlines-manager.com/aircraft/show/117273341,2:30,9:59,310,"469,559$","430,890$","$1,389.97","$57,579.96"
IAH - BUR,58017973586,I-YEG-BUR-3,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/58017973586,https://www.airlines-manager.com/aircraft/show/117273342,3:15,10:44,310,"469,559$","430,890$","$1,389.97","$57,579.96"
IAH - BUR,58034914000,I-YEG-BUR-5,A321neo,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/58034914000,https://www.airlines-manager.com/aircraft/show/117273340,11:00,18:29,338,"508,813$","471,862$","$1,396.04","$63,055.06"
IAH - BUR,58051861522,I-YEG-BUR-2,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/58051861522,https://www.airlines-manager.com/aircraft/show/117273343,18:00,1:29,310,"469,559$","430,890$","$1,389.97","$57,579.96"
IAH - BUR,58054747899,I-YEG-BUR-1,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/58054747899,https://www.airlines-manager.com/aircraft/show/117273344,20:15,3:44,298,"$458,780.00","$420,563.00","$1,411.29","$56,199.96"
IAH - BWI,58017973107,I-BWI-PHL-3,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/58017973107,https://www.airlines-manager.com/aircraft/show/106007215,0:15,6:59,338,"$470,491.00","$429,120.00","$1,269.59","$63,730.69"
IAH - BWI,58034913996,I-BWI-PHL-2,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/58034913996,https://www.airlines-manager.com/aircraft/show/106007214,11:00,17:44,338,"$470,491.00","$429,120.00","$1,269.59","$63,730.69"
IAH - BWI,58042065635,I-BWI-PHL-1,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/58042065635,https://www.airlines-manager.com/aircraft/show/106007213,13:45,20:29,338,"$470,491.00","$429,120.00","$1,269.59","$63,730.69"
IAH - BWI,58045346123,I-BWI-PHL-5,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/58045346123,https://www.airlines-manager.com/aircraft/show/106007217,14:45,21:29,338,"$470,491.00","$429,120.00","$1,269.59","$63,730.69"
IAH - BWI,58057474814,I-BWI-PHL-4,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/58057474814,https://www.airlines-manager.com/aircraft/show/106007216,21:00,3:44,338,"$470,491.00","$429,120.00","$1,269.59","$63,730.69"
IAH - BZN,58017973168,I-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/58017973168,https://www.airlines-manager.com/aircraft/show/117273392,0:30,7:59,320,"$475,071.00","$431,309.00","$1,347.84","$57,635.95"
IAH - BZN,58017973169,I-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/58017973169,https://www.airlines-manager.com/aircraft/show/117273389,2:30,9:59,320,"$475,071.00","$431,309.00","$1,347.84","$57,635.95"
IAH - BZN,58034914054,I-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/58034914054,https://www.airlines-manager.com/aircraft/show/117273391,11:00,18:29,320,"$475,071.00","$431,309.00","$1,347.84","$57,635.95"
IAH - BZN,58051861693,I-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/58051861693,https://www.airlines-manager.com/aircraft/show/117273390,19:15,2:44,320,"$475,071.00","$431,309.00","$1,347.84","$57,635.95"
IAH - CAK,58017973630,I-BTV-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/58017973630,https://www.airlines-manager.com/aircraft/show/113994196,3:00,9:14,310,"$393,368.00","$358,933.00","$1,157.85","$57,582.83"
IAH - CAK,58031343098,I-BTV-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/58031343098,https://www.airlines-manager.com/aircraft/show/86385103,8:15,14:29,310,"$393,368.00","$358,933.00","$1,157.85","$57,582.83"
IAH - CAK,58042065603,I-BTV-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/58042065603,https://www.airlines-manager.com/aircraft/show/82543907,13:00,19:14,112,"$185,783.00","$163,229.00","$1,457.40","$26,186.47"
IAH - CAK,58045346317,I-BTV-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/58045346317,https://www.airlines-manager.com/aircraft/show/114373409,16:00,22:14,310,"$393,368.00","$358,933.00","$1,157.85","$57,582.83"
IAH - CAK,58057474981,I-BTV-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/58057474981,https://www.airlines-manager.com/aircraft/show/114373410,22:15,4:29,298,"$384,310.00","$350,232.00","$1,175.28","$56,186.95"
IAH - CHS,58017973465,I-RIC-SDF-5,ERJ-175,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/58017973465,https://www.airlines-manager.com/aircraft/show/107467211,1:30,7:14,112,"$170,218.00","$149,061.00","$1,330.90","$25,999.01"
IAH - CHS,58017973466,I-RIC-SDF-4,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/58017973466,https://www.airlines-manager.com/aircraft/show/107467131,3:30,9:14,310,"$359,135.00","$326,559.00","$1,053.42","$56,957.97"
IAH - CHS,58038353898,I-RIC-SDF-3,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/58038353898,https://www.airlines-manager.com/aircraft/show/107467132,12:00,17:44,310,"$359,135.00","$326,559.00","$1,053.42","$56,957.97"
IAH - CHS,58048703734,I-RIC-SDF-2,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/58048703734,https://www.airlines-manager.com/aircraft/show/107467133,17:15,22:59,310,"$359,135.00","$326,559.00","$1,053.42","$56,957.97"
IAH - CHS,58060881895,I-RIC-SDF-1,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/58060881895,https://www.airlines-manager.com/aircraft/show/107467134,23:45,5:29,310,"359,135$","326,559$","$1,053.42","$56,957.97"
IAH - CID,58034914055,I-EUG-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/58034914055,https://www.airlines-manager.com/aircraft/show/119525218,11:00,16:29,320,"342,285$","307,102$",$959.69,"$56,006.44"
IAH - CID,58042065538,I-EUG-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/58042065538,https://www.airlines-manager.com/aircraft/show/119525217,13:00,18:29,320,"342,285$","307,102$",$959.69,"$56,006.44"
IAH - CID,58054747818,I-EUG-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/58054747818,https://www.airlines-manager.com/aircraft/show/119525219,19:45,1:14,320,"342,285$","307,102$",$959.69,"$56,006.44"
IAH - CID,58057474915,I-EUG-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/58057474915,https://www.airlines-manager.com/aircraft/show/119525220,21:45,3:14,306,"333,242$","298,378$",$975.09,"$54,415.44"
IAH - CLE,58017973534,I-CLE-STL-3,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/58017973534,https://www.airlines-manager.com/aircraft/show/103600702,2:00,8:14,310,"401,042$","364,331$","$1,175.26","$58,448.82"
IAH - CLE,58027885514,I-CLE-STL-2,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/58027885514,https://www.airlines-manager.com/aircraft/show/103600701,7:45,13:59,310,"401,042$","364,331$","$1,175.26","$58,448.82"
IAH - CLE,58042065696,I-CLE-STL-1,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/58042065696,https://www.airlines-manager.com/aircraft/show/103600700,14:00,20:14,310,"401,042$","364,331$","$1,175.26","$58,448.82"
IAH - CLE,58045346256,I-CLE-STL-5 B,A319-100,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/58045346256,https://www.airlines-manager.com/aircraft/show/110582844,15:30,21:44,198,"302,827$","273,411$","$1,380.86","$43,862.73"
IAH - CLE,58051861669,I-CLE-STL-4,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/58051861669,https://www.airlines-manager.com/aircraft/show/88725601,19:00,1:14,310,"$401,042.00","$364,331.00","$1,175.26","$58,448.82"
IAH - CLT,58017973691,I-SLC-CLT-3,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/58017973691,https://www.airlines-manager.com/aircraft/show/93094697,3:45,9:29,310,"$361,710.00","$319,410.00","$1,030.35","$55,711.05"
IAH - CLT,58034913908,I-SLC-CLT-2,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/58034913908,https://www.airlines-manager.com/aircraft/show/93094698,10:00,15:44,310,"$361,710.00","$319,410.00","$1,030.35","$55,711.05"
IAH - CLT,58038353919,I-SLC-CLT-6,ERJ-175,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/58038353919,https://www.airlines-manager.com/aircraft/show/93100455,12:00,17:44,112,"$171,081.00","$144,110.00","$1,286.70","$25,135.47"
IAH - CLT,58048703657,I-SLC-CLT-1,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/58048703657,https://www.airlines-manager.com/aircraft/show/93094699,16:45,22:29,310,"$361,710.00","$319,410.00","$1,030.35","$55,711.05"
IAH - CLT,58051861616,I-SLC-CLT-5,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/58051861616,https://www.airlines-manager.com/aircraft/show/93094695,18:45,0:29,310,"$361,710.00","$319,410.00","$1,030.35","$55,711.05"
IAH - CLT,58057474938,I-SLC-CLT-4,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/58057474938,https://www.airlines-manager.com/aircraft/show/93094696,22:00,3:44,310,"$361,710.00","$319,410.00","$1,030.35","$55,711.05"
IAH - CMH,58027885465,I-RNO-MCI-1,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/58027885465,https://www.airlines-manager.com/aircraft/show/103882355,7:00,12:59,310,"$379,267.00","$344,000.00","$1,109.68","$57,493.04"
IAH - CMH,58034914077,I-RNO-MCI-4,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/58034914077,https://www.airlines-manager.com/aircraft/show/103882358,11:00,16:59,310,"379,267$","344,000$","$1,109.68","$57,493.04"
IAH - CMH,58038353921,I-RNO-MCI-5,ERJ-175,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/58038353921,https://www.airlines-manager.com/aircraft/show/105099861,12:00,17:59,112,"179,105$","156,225$","$1,394.87","$26,110.03"
IAH - CMH,58051861702,I-RNO-MCI-3,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/58051861702,https://www.airlines-manager.com/aircraft/show/103882357,19:15,1:14,310,"379,267$","344,000$","$1,109.68","$57,493.04"
IAH - CMH,58059513358,I-RNO-MCI-2,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/58059513358,https://www.airlines-manager.com/aircraft/show/103882356,23:00,4:59,310,"379,267$","344,000$","$1,109.68","$57,493.04"
IAH - COS,58017973500,I-RNO-MCI-1,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/58017973500,https://www.airlines-manager.com/aircraft/show/103882355,1:45,6:59,310,"$331,840.00","$298,925.00",$964.27,"$57,119.43"
IAH - COS,58024780656,I-RNO-MCI-4,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/58024780656,https://www.airlines-manager.com/aircraft/show/103882358,5:45,10:59,310,"$331,840.00","$298,925.00",$964.27,"$57,119.43"
IAH - COS,58042065698,I-RNO-MCI-3,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/58042065698,https://www.airlines-manager.com/aircraft/show/103882357,14:00,19:14,310,"$331,840.00","$298,925.00",$964.27,"$57,119.43"
IAH - COS,58048703781,I-RNO-MCI-2,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/58048703781,https://www.airlines-manager.com/aircraft/show/103882356,17:45,22:59,310,"$331,840.00","$298,925.00",$964.27,"$57,119.43"
IAH - COS,58059513339,I-RNO-MCI-5,ERJ-175,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/58059513339,https://www.airlines-manager.com/aircraft/show/105099861,22:45,3:59,112,"$157,707.00","$136,546.00","$1,219.16","$26,091.59"
IAH - CUN,58017973230,I-56A-4 E,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/58017973230,https://www.airlines-manager.com/aircraft/show/106676235,1:00,5:59,648,"$626,023.00","$572,914.00",$884.13,"$114,966.02"
IAH - CUN,58038353932,I-56A-5 E,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/58038353932,https://www.airlines-manager.com/aircraft/show/106676236,12:30,17:29,648,"$626,023.00","$572,914.00",$884.13,"$114,966.02"
IAH - CUN,58054747919,I-56A-7 E,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/58054747919,https://www.airlines-manager.com/aircraft/show/106676238,20:30,1:29,648,"$626,023.00","$572,914.00",$884.13,"$114,966.02"
IAH - CVG,58017973120,I-SMF-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/58017973120,https://www.airlines-manager.com/aircraft/show/99093332,0:15,5:44,320,"$350,135.00","$309,434.00",$966.98,"$56,431.73"
IAH - CVG,58021655822,I-SMF-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/58021655822,https://www.airlines-manager.com/aircraft/show/99093333,4:00,9:29,320,"$350,135.00","$309,434.00",$966.98,"$56,431.73"
IAH - CVG,58027885530,I-SMF-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/58027885530,https://www.airlines-manager.com/aircraft/show/99093334,8:00,13:29,320,"$350,135.00","$309,434.00",$966.98,"$56,431.73"
IAH - CVG,58042065665,I-SMF-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/58042065665,https://www.airlines-manager.com/aircraft/show/99093335,14:00,19:29,320,"$350,135.00","$309,434.00",$966.98,"$56,431.73"
IAH - CVG,58045346325,I-SMF-CVG-5 B,A319-100,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/58045346325,https://www.airlines-manager.com/aircraft/show/106499070,16:00,21:29,198,"$265,556.00","$237,029.00","$1,197.12","$43,227.17"
IAH - DAB,58017973391,I-ILM-SRQ-4,A321-200,https://www.airlines-manager.com/network/showline/50666457,https://www.airlines-manager.com/network/showflight/58017973391,https://www.airlines-manager.com/aircraft/show/120452415,1:15,6:44,310,"344,468$","312,587$","$1,008.35","$57,006.75"
IAH - DAB,58031343182,I-ILM-SRQ-3,A321-200,https://www.airlines-manager.com/network/showline/50666457,https://www.airlines-manager.com/network/showflight/58031343182,https://www.airlines-manager.com/aircraft/show/120452416,9:00,14:29,310,"344,468$","312,587$","$1,008.35","$57,006.75"
IAH - DAB,58042065764,I-ILM-SRQ-2,A321-200,https://www.airlines-manager.com/network/showline/50666457,https://www.airlines-manager.com/network/showflight/58042065764,https://www.airlines-manager.com/aircraft/show/120452417,14:15,19:44,310,"344,468$","312,587$","$1,008.35","$57,006.75"
IAH - DAB,58054747796,I-ILM-SRQ-1,A321-200,https://www.airlines-manager.com/network/showline/50666457,https://www.airlines-manager.com/network/showflight/58054747796,https://www.airlines-manager.com/aircraft/show/120452418,19:30,0:59,282,"326,228$","295,006$","$1,046.12","$53,800.49"
IAH - DEN,58038353854,I-SEA-DEN-5,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/58038353854,https://www.airlines-manager.com/aircraft/show/105562975,12:00,17:29,338,"378,458$","325,224$",$962.20,"$59,311.37"
IAH - DEN,58042065472,I-SEA-DEN-1,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/58042065472,https://www.airlines-manager.com/aircraft/show/105562971,13:00,18:29,338,"$378,458.00","$325,224.00",$962.20,"$59,311.37"
IAH - DEN,58042065473,I-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/58042065473,https://www.airlines-manager.com/aircraft/show/120293379,14:00,19:29,0,"$97,604.00","$23,471.00",$0.00,"$4,280.43"
IAH - DEN,58059513270,I-SEA-DEN-2,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/58059513270,https://www.airlines-manager.com/aircraft/show/105562972,22:30,3:59,338,"$378,458.00","$325,224.00",$962.20,"$59,311.37"
IAH - DEN,58059513271,I-SEA-DEN-3,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/58059513271,https://www.airlines-manager.com/aircraft/show/105562973,23:00,4:29,338,"$378,458.00","$325,224.00",$962.20,"$59,311.37"
IAH - DEN,58059513272,I-SEA-DEN-4,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/58059513272,https://www.airlines-manager.com/aircraft/show/105562974,23:30,4:59,338,"378,458$","325,224$",$962.20,"$59,311.37"
IAH - DFW,58017973246,I-SMF-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/58017973246,https://www.airlines-manager.com/aircraft/show/99093333,1:00,3:59,320,"129,311$","81,717$",$255.37,"$27,391.17"
IAH - DFW,58021655946,I-SMF-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/58021655946,https://www.airlines-manager.com/aircraft/show/99093334,5:00,7:59,320,"129,311$","81,717$",$255.37,"$27,391.17"
IAH - DFW,58034914038,I-SMF-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/58034914038,https://www.airlines-manager.com/aircraft/show/99093335,11:00,13:59,320,"129,311$","81,717$",$255.37,"$27,391.17"
IAH - DFW,58042065598,I-SMF-CVG-5 B,A319-100,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/58042065598,https://www.airlines-manager.com/aircraft/show/106499070,13:00,15:59,198,"97,620$","65,532$",$330.97,"$21,966.03"
IAH - DFW,58042065599,I-YEG-BUR-4,A321-200,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/58042065599,https://www.airlines-manager.com/aircraft/show/117273341,14:15,17:14,310,"$130,762.00","$90,664.00",$292.46,"$30,390.17"
IAH - DFW,58057474855,I-SMF-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/58057474855,https://www.airlines-manager.com/aircraft/show/99093332,21:15,0:14,320,"$129,311.00","$81,717.00",$255.37,"$27,391.17"
IAH - DSM,58017973651,I-FAT-SAV-1,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/58017973651,https://www.airlines-manager.com/aircraft/show/110424761,3:15,8:29,320,"$333,281.00","$298,351.00",$932.35,"$57,009.75"
IAH - DSM,58031343150,I-FAT-SAV-4,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/58031343150,https://www.airlines-manager.com/aircraft/show/110424758,8:45,13:59,320,"$333,281.00","$298,351.00",$932.35,"$57,009.75"
IAH - DSM,58042065675,I-FAT-SAV-3,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/58042065675,https://www.airlines-manager.com/aircraft/show/110424759,14:00,19:14,320,"$333,281.00","$298,351.00",$932.35,"$57,009.75"
IAH - DSM,58051861575,I-FAT-SAV-2,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/58051861575,https://www.airlines-manager.com/aircraft/show/110424760,18:30,23:44,320,"$333,281.00","$298,351.00",$932.35,"$57,009.75"
IAH - DTW,58017973176,I-MIA-ORD-1,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/58017973176,https://www.airlines-manager.com/aircraft/show/90183184,0:30,6:44,310,"$395,838.00","$351,081.00","$1,132.52","$56,323.16"
IAH - DTW,58017973177,I-MIA-ORD-5,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/58017973177,https://www.airlines-manager.com/aircraft/show/90183180,2:30,8:44,310,"$395,838.00","$351,081.00","$1,132.52","$56,323.16"
IAH - DTW,58024780677,I-MIA-ORD-4,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/58024780677,https://www.airlines-manager.com/aircraft/show/90183181,6:00,12:14,310,"$395,838.00","$351,081.00","$1,132.52","$56,323.16"
IAH - DTW,58042065560,I-MIA-ORD-3,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/58042065560,https://www.airlines-manager.com/aircraft/show/90183182,13:00,19:14,310,"$395,838.00","$351,081.00","$1,132.52","$56,323.16"
IAH - DTW,58051861613,I-MIA-ORD-2,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/58051861613,https://www.airlines-manager.com/aircraft/show/90183183,18:45,0:59,310,"$395,838.00","$351,081.00","$1,132.52","$56,323.16"
IAH - DTW,58054747957,I-MIA-ORD-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/58054747957,https://www.airlines-manager.com/aircraft/show/90140936,20:45,2:59,136,"$188,161.00","$159,615.00","$1,173.64","$25,606.68"
IAH - ECP,58017973345,I-ILM-SRQ-1,A321-200,https://www.airlines-manager.com/network/showline/50666459,https://www.airlines-manager.com/network/showflight/58017973345,https://www.airlines-manager.com/aircraft/show/120452418,1:00,5:14,310,"$272,555.00","$244,634.00",$789.14,"$57,787.56"
IAH - ECP,58031343209,I-ILM-SRQ-4,A321-200,https://www.airlines-manager.com/network/showline/50666459,https://www.airlines-manager.com/network/showflight/58031343209,https://www.airlines-manager.com/aircraft/show/120452415,9:30,13:44,310,"$272,555.00","$244,634.00",$789.14,"$57,787.56"
IAH - ECP,58042065777,I-ILM-SRQ-3,A321-200,https://www.airlines-manager.com/network/showline/50666459,https://www.airlines-manager.com/network/showflight/58042065777,https://www.airlines-manager.com/aircraft/show/120452416,14:30,18:44,310,"$272,555.00","$244,634.00",$789.14,"$57,787.56"
IAH - ECP,58054747831,I-ILM-SRQ-2,A321-200,https://www.airlines-manager.com/network/showline/50666459,https://www.airlines-manager.com/network/showflight/58054747831,https://www.airlines-manager.com/aircraft/show/120452417,19:45,23:59,310,"$272,555.00","$244,634.00",$789.14,"$57,787.56"
IAH - ELP,58017973677,I-PBI-RSW-3,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/58017973677,https://www.airlines-manager.com/aircraft/show/104717245,3:30,8:14,310,"$300,686.00","$270,329.00",$872.03,"$57,111.76"
IAH - ELP,58034914081,I-PBI-RSW-2,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/58034914081,https://www.airlines-manager.com/aircraft/show/104717246,11:00,15:44,310,"$300,686.00","$270,329.00",$872.03,"$57,111.76"
IAH - ELP,58048703658,I-PBI-RSW-1,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/58048703658,https://www.airlines-manager.com/aircraft/show/104717247,16:45,21:29,310,"$300,686.00","$270,329.00",$872.03,"$57,111.76"
IAH - ELP,58051861683,I-PBI-RSW-5,ERJ-175,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/58051861683,https://www.airlines-manager.com/aircraft/show/104743902,19:00,23:44,112,"$143,217.00","$123,840.00","$1,105.71","$26,163.38"
IAH - ELP,58057474941,I-PBI-RSW-4,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/58057474941,https://www.airlines-manager.com/aircraft/show/104717244,22:00,2:44,310,"$300,686.00","$270,329.00",$872.03,"$57,111.76"
IAH - EUG,58017973369,I-EUG-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/58017973369,https://www.airlines-manager.com/aircraft/show/119525219,1:15,10:14,320,"$571,197.00","$521,465.00","$1,629.58","$58,048.05"
IAH - EUG,58017973370,I-EUG-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/58017973370,https://www.airlines-manager.com/aircraft/show/119525220,3:15,12:14,320,"$571,197.00","$521,465.00","$1,629.58","$58,048.05"
IAH - EUG,58034914109,I-EUG-MFR-5,ERJ-175,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/58034914109,https://www.airlines-manager.com/aircraft/show/119525248,11:00,20:14,112,"$269,366.00","$239,235.00","$2,136.03","$25,909.93"
IAH - EUG,58048703629,I-EUG-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/58048703629,https://www.airlines-manager.com/aircraft/show/119525218,16:30,1:29,320,"$571,197.00","$521,465.00","$1,629.58","$58,048.05"
IAH - EUG,58051861577,I-EUG-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/58051861577,https://www.airlines-manager.com/aircraft/show/119525217,18:30,3:29,320,"$571,197.00","$521,465.00","$1,629.58","$58,048.05"
IAH - EZE,58021655841,I-84A-2 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/58021655841,https://www.airlines-manager.com/aircraft/show/89439130,4:00,0:29,932,"$3,382,163.00","$3,084,901.00","$3,309.98","$150,605.42"
IAH - EZE,58024780641,I-84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/58024780641,https://www.airlines-manager.com/aircraft/show/89124075,5:30,1:59,932,"$3,382,163.00","$3,084,901.00","$3,309.98","$150,605.42"
IAH - FAR,58017973417,I-MSO-FAR-4,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/58017973417,https://www.airlines-manager.com/aircraft/show/110424754,1:30,8:14,320,"$419,119.00","$378,672.00","$1,183.35","$56,238.42"
IAH - FAR,58021655866,I-MSO-FAR-3,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/58021655866,https://www.airlines-manager.com/aircraft/show/110424755,4:15,10:59,320,"$419,119.00","$378,672.00","$1,183.35","$56,238.42"
IAH - FAR,58038353874,I-MSO-FAR-2,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/58038353874,https://www.airlines-manager.com/aircraft/show/110424756,12:00,18:44,320,"$419,119.00","$378,672.00","$1,183.35","$56,238.42"
IAH - FAR,58057474933,I-MSO-FAR-1,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/58057474933,https://www.airlines-manager.com/aircraft/show/110424757,22:00,4:44,320,"$419,119.00","$378,672.00","$1,183.35","$56,238.42"
IAH - FAT,58021655825,I-FAT-SAV-2,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/58021655825,https://www.airlines-manager.com/aircraft/show/110424760,4:00,11:44,320,"$499,203.00","$453,750.00","$1,417.97","$58,674.57"
IAH - FAT,58042065676,I-FAT-SAV-1,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/58042065676,https://www.airlines-manager.com/aircraft/show/110424761,14:00,21:44,320,"$499,203.00","$453,750.00","$1,417.97","$58,674.57"
IAH - FAT,58051861544,I-FAT-SAV-4,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/58051861544,https://www.airlines-manager.com/aircraft/show/110424758,18:15,1:59,320,"$499,203.00","$453,750.00","$1,417.97","$58,674.57"
IAH - FAT,58059513412,I-FAT-SAV-3,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/58059513412,https://www.airlines-manager.com/aircraft/show/110424759,23:30,7:14,320,"499,203$","453,750$","$1,417.97","$58,674.57"
IAH - FCA,58017973484,I-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/58017973484,https://www.airlines-manager.com/aircraft/show/117273391,1:45,9:59,320,"$523,626.00","$476,436.00","$1,488.86","$57,866.72"
IAH - FCA,58034914053,I-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/58034914053,https://www.airlines-manager.com/aircraft/show/117273390,11:00,19:14,320,"$523,626.00","$476,436.00","$1,488.86","$57,866.72"
IAH - FCA,58048703612,I-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/58048703612,https://www.airlines-manager.com/aircraft/show/117273392,16:15,0:29,320,"$523,626.00","$476,436.00","$1,488.86","$57,866.72"
IAH - FCA,58051861545,I-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/58051861545,https://www.airlines-manager.com/aircraft/show/117273389,18:15,2:29,312,"515,576$","468,733$","$1,502.35","$56,931.13"
IAH - FLL,58017973178,I-SLC-CLT-5,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/58017973178,https://www.airlines-manager.com/aircraft/show/93094695,0:30,6:14,310,"$368,422.00","$331,194.00","$1,068.37","$57,766.40"
IAH - FLL,58017973179,I-SLC-CLT-4,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/58017973179,https://www.airlines-manager.com/aircraft/show/93094696,3:45,9:29,310,"$368,422.00","$331,194.00","$1,068.37","$57,766.40"
IAH - FLL,58034913907,I-SLC-CLT-3,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/58034913907,https://www.airlines-manager.com/aircraft/show/93094697,10:00,15:44,310,"$368,422.00","$331,194.00","$1,068.37","$57,766.40"
IAH - FLL,58045346264,I-SLC-CLT-2,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/58045346264,https://www.airlines-manager.com/aircraft/show/93094698,15:45,21:29,310,"$368,422.00","$331,194.00","$1,068.37","$57,766.40"
IAH - FLL,58048703787,I-SLC-CLT-6,ERJ-175,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/58048703787,https://www.airlines-manager.com/aircraft/show/93100455,17:45,23:29,112,"174,669$","150,649$","$1,345.08","$26,275.99"
IAH - FLL,58059513290,I-SLC-CLT-1,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/58059513290,https://www.airlines-manager.com/aircraft/show/93094699,22:30,4:14,310,"368,422$","331,194$","$1,068.37","$57,766.40"
IAH - FSD,58021655926,I-MSO-FAR-1,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/58021655926,https://www.airlines-manager.com/aircraft/show/110424757,4:45,10:29,320,"363,297$","326,462$","$1,020.19","$56,941.05"
IAH - FSD,58031343094,I-MSO-FAR-4,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/58031343094,https://www.airlines-manager.com/aircraft/show/110424754,8:15,13:59,320,"363,297$","326,462$","$1,020.19","$56,941.05"
IAH - FSD,58034914047,I-MSO-FAR-3,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/58034914047,https://www.airlines-manager.com/aircraft/show/110424755,11:00,16:44,320,"363,297$","326,462$","$1,020.19","$56,941.05"
IAH - FSD,58051861604,I-MSO-FAR-2,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/58051861604,https://www.airlines-manager.com/aircraft/show/110424756,18:45,0:29,286,"$339,841.00","$303,869.00","$1,062.48","$53,000.41"
IAH - GDL,58021655922,I-YYC-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/58021655922,https://www.airlines-manager.com/aircraft/show/114266977,4:45,9:59,400,"$439,742.00","$397,229.00",$993.07,"$75,903.63"
IAH - GDL,58034913981,I-YYC-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/58034913981,https://www.airlines-manager.com/aircraft/show/114266980,10:45,15:59,400,"$439,742.00","$397,229.00",$993.07,"$75,903.63"
IAH - GDL,58038353863,I-YYC-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/58038353863,https://www.airlines-manager.com/aircraft/show/114266979,12:00,17:14,400,"$439,742.00","$397,229.00",$993.07,"$75,903.63"
IAH - GDL,58054747848,I-YYC-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/58054747848,https://www.airlines-manager.com/aircraft/show/114266978,20:00,1:14,359,"$400,518.00","$359,096.00","$1,000.27","$68,617.07"
IAH - GIG,58017973085,I-84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/58017973085,https://www.airlines-manager.com/aircraft/show/88905140,0:00,20:14,932,"$3,392,936.00","$3,090,291.00","$3,315.76","$152,732.67"
IAH - GIG,58017973086,I-84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/58017973086,https://www.airlines-manager.com/aircraft/show/89124074,2:00,22:14,932,"$3,392,936.00","$3,090,291.00","$3,315.76","$152,732.67"
IAH - GRR,58017973390,I-GRR-MSN-3,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/58017973390,https://www.airlines-manager.com/aircraft/show/117273346,1:15,7:29,310,"$391,082.00","$356,324.00","$1,149.43","$57,164.28"
IAH - GRR,58027885480,I-GRR-MSN-2,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/58027885480,https://www.airlines-manager.com/aircraft/show/117273347,7:15,13:29,310,"$391,082.00","$356,324.00","$1,149.43","$57,164.28"
IAH - GRR,58042065723,I-GRR-MSN-1,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/58042065723,https://www.airlines-manager.com/aircraft/show/117273348,14:00,20:14,310,"$391,082.00","$356,324.00","$1,149.43","$57,164.28"
IAH - GRR,58045346321,I-GRR-MSN-4,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/58045346321,https://www.airlines-manager.com/aircraft/show/117273345,16:00,22:14,310,"$391,082.00","$356,324.00","$1,149.43","$57,164.28"
IAH - GRU,58017973231,I-56A-7 E,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/58017973231,https://www.airlines-manager.com/aircraft/show/106676238,1:00,20:29,648,"$2,489,104.00","$2,319,462.00","$3,579.42","$119,048.52"
IAH - GRU,58034914013,I-56A-2 E,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/58034914013,https://www.airlines-manager.com/aircraft/show/106676233,11:00,6:29,648,"$2,489,104.00","$2,319,462.00","$3,579.42","$119,048.52"
IAH - GRU,58048703670,I-56A-4 E,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/58048703670,https://www.airlines-manager.com/aircraft/show/106676235,17:00,12:29,648,"$2,489,104.00","$2,319,462.00","$3,579.42","$119,048.52"
IAH - GSO,58017973489,I-SYR-ROC-1,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/58017973489,https://www.airlines-manager.com/aircraft/show/119525224,1:45,7:44,320,"$375,703.00","$337,351.00","$1,054.22","$56,381.78"
IAH - GSO,58017973490,I-SYR-ROC-4,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/58017973490,https://www.airlines-manager.com/aircraft/show/119525221,2:45,8:44,320,"$375,703.00","$337,351.00","$1,054.22","$56,381.78"
IAH - GSO,58034914057,I-SYR-ROC-3,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/58034914057,https://www.airlines-manager.com/aircraft/show/119525222,11:00,16:59,320,"$375,703.00","$337,351.00","$1,054.22","$56,381.78"
IAH - GSO,58051861546,I-SYR-ROC-2,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/58051861546,https://www.airlines-manager.com/aircraft/show/119525223,18:15,0:14,320,"$375,703.00","$337,351.00","$1,054.22","$56,381.78"
IAH - IAD,58017973682,I-IAD-SAN-6,ERJ-175,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/58017973682,https://www.airlines-manager.com/aircraft/show/105400635,3:30,10:14,112,"$199,547.00","$171,293.00","$1,529.40","$25,439.55"
IAH - IAD,58024780718,I-IAD-SAN-2,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/58024780718,https://www.airlines-manager.com/aircraft/show/98578923,6:45,13:29,320,"$423,598.00","$374,014.00","$1,168.79","$55,546.63"
IAH - IAD,58034913817,I-IAD-SAN-5,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/58034913817,https://www.airlines-manager.com/aircraft/show/98578920,9:45,16:29,320,"$423,598.00","$374,014.00","$1,168.79","$55,546.63"
IAH - IAD,58042065514,I-IAD-SAN-1,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/58042065514,https://www.airlines-manager.com/aircraft/show/98578924,13:00,19:44,320,"$423,598.00","$374,014.00","$1,168.79","$55,546.63"
IAH - IAD,58051861501,I-IAD-SAN-4,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/58051861501,https://www.airlines-manager.com/aircraft/show/98578921,18:00,0:44,320,"$423,598.00","$374,014.00","$1,168.79","$55,546.63"
IAH - IAD,58057474878,I-IAD-SAN-3,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/58057474878,https://www.airlines-manager.com/aircraft/show/98578922,21:30,4:14,320,"$423,598.00","$374,014.00","$1,168.79","$55,546.63"
IAH - ICT,58034913819,I-FAT-SAV-1,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/58034913819,https://www.airlines-manager.com/aircraft/show/110424761,9:45,13:59,320,"$250,907.00","$219,323.00",$685.38,"$51,808.58"
IAH - ICT,58042065674,I-FAT-SAV-4,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/58042065674,https://www.airlines-manager.com/aircraft/show/110424758,14:00,18:14,320,"$250,907.00","$219,323.00",$685.38,"$51,808.58"
IAH - ICT,58051861692,I-FAT-SAV-3,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/58051861692,https://www.airlines-manager.com/aircraft/show/110424759,19:15,23:29,320,"$250,907.00","$219,323.00",$685.38,"$51,808.58"
IAH - ICT,58060881885,I-FAT-SAV-2,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/58060881885,https://www.airlines-manager.com/aircraft/show/110424760,23:45,3:59,320,"$250,907.00","$219,323.00",$685.38,"$51,808.58"
IAH - ILM,58017973072,I-ILM-SRQ-2,A321-200,https://www.airlines-manager.com/network/showline/50666455,https://www.airlines-manager.com/network/showflight/58017973072,https://www.airlines-manager.com/aircraft/show/120452417,0:00,6:14,310,"$394,081.00","$360,168.00","$1,161.83","$57,780.96"
IAH - ILM,58027885544,I-ILM-SRQ-1,A321-200,https://www.airlines-manager.com/network/showline/50666455,https://www.airlines-manager.com/network/showflight/58027885544,https://www.airlines-manager.com/aircraft/show/120452418,8:00,14:14,310,"$394,081.00","$360,168.00","$1,161.83","$57,780.96"
IAH - ILM,58042065643,I-ILM-SRQ-4,A321-200,https://www.airlines-manager.com/network/showline/50666455,https://www.airlines-manager.com/network/showflight/58042065643,https://www.airlines-manager.com/aircraft/show/120452415,13:45,19:59,310,"$394,081.00","$360,168.00","$1,161.83","$57,780.96"
IAH - ILM,58051861626,I-ILM-SRQ-3,A321-200,https://www.airlines-manager.com/network/showline/50666455,https://www.airlines-manager.com/network/showflight/58051861626,https://www.airlines-manager.com/aircraft/show/120452416,18:45,0:59,310,"$394,081.00","$360,168.00","$1,161.83","$57,780.96"
IAH - IND,58017973065,I-PIT-RDU-1,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/58017973065,https://www.airlines-manager.com/aircraft/show/100684074,0:00,5:29,310,"$344,386.00","$310,520.00","$1,001.68","$56,629.79"
IAH - IND,58021655934,I-PIT-RDU-5 B,A319-100,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/58021655934,https://www.airlines-manager.com/aircraft/show/110582845,4:45,10:14,198,"$261,047.00","$233,918.00","$1,181.40","$42,659.82"
IAH - IND,58024780679,I-PIT-RDU-4,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/58024780679,https://www.airlines-manager.com/aircraft/show/100684071,6:00,11:29,310,"$344,386.00","$310,520.00","$1,001.68","$56,629.79"
IAH - IND,58038353835,I-PIT-RDU-3,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/58038353835,https://www.airlines-manager.com/aircraft/show/100684072,11:30,16:59,310,"$344,386.00","$310,520.00","$1,001.68","$56,629.79"
IAH - IND,58048703779,I-PIT-RDU-2,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/58048703779,https://www.airlines-manager.com/aircraft/show/100684073,17:45,23:14,310,"$344,386.00","$310,520.00","$1,001.68","$56,629.79"
IAH - JAC,58017973520,I-SNA-SBA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/58017973520,https://www.airlines-manager.com/aircraft/show/119525225,2:00,8:59,272,"$397,922.00","$370,446.00","$1,361.93","$53,047.16"
IAH - JAC,58034913988,I-SNA-SBA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/58034913988,https://www.airlines-manager.com/aircraft/show/119525227,11:00,17:59,272,"$397,922.00","$370,446.00","$1,361.93","$53,047.16"
IAH - JAC,58042065460,I-SNA-SBA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/58042065460,https://www.airlines-manager.com/aircraft/show/119525228,13:00,19:59,272,"$397,922.00","$370,446.00","$1,361.93","$53,047.16"
IAH - JAC,58051861596,I-SNA-SBA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/58051861596,https://www.airlines-manager.com/aircraft/show/119525226,18:45,1:44,272,"$397,922.00","$370,446.00","$1,361.93","$53,047.16"
IAH - JAC,58054747936,I-SNA-SBA-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/58054747936,https://www.airlines-manager.com/aircraft/show/119525229,20:45,3:44,272,"$397,922.00","$370,446.00","$1,361.93","$53,047.16"
IAH - JAN,58017973166,I-MSO-FAR-2,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/58017973166,https://www.airlines-manager.com/aircraft/show/110424756,0:30,3:59,320,"$177,596.00","$150,145.00",$469.20,"$43,103.83"
IAH - JAN,58034913974,I-MSO-FAR-1,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/58034913974,https://www.airlines-manager.com/aircraft/show/110424757,10:30,13:59,320,"$177,596.00","$150,145.00",$469.20,"$43,103.83"
IAH - JAN,58042065672,I-MSO-FAR-4,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/58042065672,https://www.airlines-manager.com/aircraft/show/110424754,14:00,17:29,320,"$177,596.00","$150,145.00",$469.20,"$43,103.83"
IAH - JAN,58048703651,I-MSO-FAR-3,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/58048703651,https://www.airlines-manager.com/aircraft/show/110424755,16:45,20:14,312,"$174,904.00","$147,528.00",$472.85,"$42,352.54"
IAH - JAX,58017973629,I-PBI-RSW-1,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/58017973629,https://www.airlines-manager.com/aircraft/show/104717247,3:00,8:14,310,"$338,093.00","$305,865.00",$986.66,"$58,445.54"
IAH - JAX,58027885548,I-PBI-RSW-5,ERJ-175,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/58027885548,https://www.airlines-manager.com/aircraft/show/104743902,8:00,13:14,112,"$160,251.00","$139,491.00","$1,245.46","$26,654.33"
IAH - JAX,58034914079,I-PBI-RSW-4,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/58034914079,https://www.airlines-manager.com/aircraft/show/104717244,11:00,16:14,310,"$338,093.00","$305,865.00",$986.66,"$58,445.54"
IAH - JAX,58048703638,I-PBI-RSW-3,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/58048703638,https://www.airlines-manager.com/aircraft/show/104717245,16:30,21:44,310,"$338,093.00","$305,865.00",$986.66,"$58,445.54"
IAH - JAX,58057474862,I-PBI-RSW-2,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/58057474862,https://www.airlines-manager.com/aircraft/show/104717246,21:15,2:29,310,"$338,093.00","$305,865.00",$986.66,"$58,445.54"
IAH - JFK,58017973523,I-JFK-LAX-5,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/58017973523,https://www.airlines-manager.com/aircraft/show/89233038,2:00,9:29,400,"$622,836.00","$549,527.00","$1,373.82","$73,433.45"
IAH - JFK,58034914016,I-JFK-LAX-1,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/58034914016,https://www.airlines-manager.com/aircraft/show/88400798,11:00,18:29,400,"$622,836.00","$549,527.00","$1,373.82","$73,433.45"
IAH - JFK,58051861539,I-JFK-LAX-3,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/58051861539,https://www.airlines-manager.com/aircraft/show/88400800,18:15,1:44,400,"$622,836.00","$549,527.00","$1,373.82","$73,433.45"
IAH - JFK,58051861540,I-JFK-LAX-2,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/58051861540,https://www.airlines-manager.com/aircraft/show/88400799,19:15,2:44,400,"$622,836.00","$549,527.00","$1,373.82","$73,433.45"
IAH - JFK,58057474851,I-JFK-LAX-4,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/58057474851,https://www.airlines-manager.com/aircraft/show/88400801,21:15,4:44,400,"$622,836.00","$549,527.00","$1,373.82","$73,433.45"
IAH - LAS,58021655819,I-LAS-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/58021655819,https://www.airlines-manager.com/aircraft/show/96256511,4:00,10:44,320,"$430,201.00","$368,720.00","$1,152.25","$54,760.40"
IAH - LAS,58021655820,I-LAS-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/58021655820,https://www.airlines-manager.com/aircraft/show/96250652,5:00,11:44,320,"$430,201.00","$368,720.00","$1,152.25","$54,760.40"
IAH - LAS,58021655821,I-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/58021655821,https://www.airlines-manager.com/aircraft/show/96990010,5:15,11:59,112,"$202,299.00","$168,005.00","$1,500.04","$24,951.24"
IAH - LAS,58034914035,I-LAS-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/58034914035,https://www.airlines-manager.com/aircraft/show/96177955,11:00,17:44,320,"$430,201.00","$368,720.00","$1,152.25","$54,760.40"
IAH - LAS,58045346130,I-LAS-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/58045346130,https://www.airlines-manager.com/aircraft/show/95894466,14:45,21:29,320,"$430,201.00","$368,720.00","$1,152.25","$54,760.40"
IAH - LAS,58048703762,I-LAS-ATL-6,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/58048703762,https://www.airlines-manager.com/aircraft/show/82323704,17:30,0:14,112,"$202,299.00","$168,005.00","$1,500.04","$24,951.24"
IAH - LAS,58054747940,I-LAS-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/58054747940,https://www.airlines-manager.com/aircraft/show/96183549,20:45,3:29,320,"$430,201.00","$368,720.00","$1,152.25","$54,760.40"
IAH - LAX,58017973594,I-JFK-LAX-2,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/58017973594,https://www.airlines-manager.com/aircraft/show/88400799,2:45,9:59,400,"$610,729.00","$538,556.00","$1,346.39","$74,454.75"
IAH - LAX,58017973595,I-JFK-LAX-1,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/58017973595,https://www.airlines-manager.com/aircraft/show/88400798,3:45,10:59,400,"$610,729.00","$538,556.00","$1,346.39","$74,454.75"
IAH - LAX,58021655920,I-JFK-LAX-4,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/58021655920,https://www.airlines-manager.com/aircraft/show/88400801,4:45,11:59,400,"$610,729.00","$538,556.00","$1,346.39","$74,454.75"
IAH - LAX,58034913969,I-JFK-LAX-5,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/58034913969,https://www.airlines-manager.com/aircraft/show/89233038,10:30,17:44,400,"$610,729.00","$538,556.00","$1,346.39","$74,454.75"
IAH - LAX,58034913970,I-JFK-LAX-3,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/58034913970,https://www.airlines-manager.com/aircraft/show/88400800,11:00,18:14,400,"$610,729.00","$538,556.00","$1,346.39","$74,454.75"
IAH - LEX,58021655909,I-BTV-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/58021655909,https://www.airlines-manager.com/aircraft/show/114373410,4:30,9:44,310,"$334,781.00","$304,803.00",$983.24,"$58,242.61"
IAH - LEX,58031343195,I-BTV-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/58031343195,https://www.airlines-manager.com/aircraft/show/113994196,9:15,14:29,310,"$334,781.00","$304,803.00",$983.24,"$58,242.61"
IAH - LEX,58045346185,I-BTV-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/58045346185,https://www.airlines-manager.com/aircraft/show/86385103,15:00,20:14,310,"$334,781.00","$304,803.00",$983.24,"$58,242.61"
IAH - LEX,58051861709,I-BTV-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/58051861709,https://www.airlines-manager.com/aircraft/show/82543907,19:15,0:29,112,"$158,973.00","$139,540.00","$1,245.89","$26,663.69"
IAH - LEX,58057474980,I-BTV-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/58057474980,https://www.airlines-manager.com/aircraft/show/114373409,22:15,3:29,269,"308,635$","279,587$","$1,039.36","$53,424.27"
IAH - LIM,58042065782,I-84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/58042065782,https://www.airlines-manager.com/aircraft/show/89439131,14:30,3:59,932,"2,260,419$","2,060,574$","$2,210.92","$152,823.78"
IAH - LIM,58060881901,I-84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/58060881901,https://www.airlines-manager.com/aircraft/show/89124074,23:45,13:14,932,"2,260,419$","2,060,574$","$2,210.92","$152,823.78"
IAH - LIT,58017973692,I-SJC-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/58017973692,https://www.airlines-manager.com/aircraft/show/96692491,3:45,7:14,310,"189,001$","164,995$",$532.24,"$47,366.99"
IAH - LIT,58034914075,I-SJC-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/58034914075,https://www.airlines-manager.com/aircraft/show/96692343,11:00,14:29,310,"189,001$","164,995$",$532.24,"$47,366.99"
IAH - LIT,58054747790,I-SJC-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/58054747790,https://www.airlines-manager.com/aircraft/show/96691558,19:30,22:59,310,"$189,001.00","$164,995.00",$532.24,"$47,366.99"
IAH - LIT,58054747791,I-SJC-PWM-5 B,A319-100,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/58054747791,https://www.airlines-manager.com/aircraft/show/106014350,20:00,23:29,198,"$142,596.00","$123,375.00",$623.11,"$35,418.66"
IAH - LIT,58059513418,I-SJC-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/58059513418,https://www.airlines-manager.com/aircraft/show/96694086,23:30,2:59,278,"$177,481.00","$153,803.00",$553.25,"$44,153.97"
IAH - MAF,58021655839,I-MYR-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50555962,https://www.airlines-manager.com/network/showflight/58021655839,https://www.airlines-manager.com/aircraft/show/120452411,4:00,7:44,310,"$203,259.00","$178,181.00",$574.78,"$47,727.05"
IAH - MAF,58034913929,I-MYR-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50555962,https://www.airlines-manager.com/network/showflight/58034913929,https://www.airlines-manager.com/aircraft/show/120452412,10:00,13:44,310,"$203,259.00","$178,181.00",$574.78,"$47,727.05"
IAH - MAF,58045346138,I-MYR-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50555962,https://www.airlines-manager.com/network/showflight/58045346138,https://www.airlines-manager.com/aircraft/show/120452413,14:45,18:29,310,"$203,259.00","$178,181.00",$574.78,"$47,727.05"
IAH - MAF,58054747830,I-MYR-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50555962,https://www.airlines-manager.com/network/showflight/58054747830,https://www.airlines-manager.com/aircraft/show/120452414,19:45,23:29,309,"$202,874.00","$177,808.00",$575.43,"$47,627.14"
IAH - MCI,58017973259,I-RNO-MCI-4,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/58017973259,https://www.airlines-manager.com/aircraft/show/103882358,1:00,5:44,310,"$299,574.00","$268,416.00",$865.86,"$56,707.61"
IAH - MCI,58031343192,I-RNO-MCI-3,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/58031343192,https://www.airlines-manager.com/aircraft/show/103882357,9:15,13:59,310,"299,574$","268,416$",$865.86,"$56,707.61"
IAH - MCI,58042065577,I-RNO-MCI-2,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/58042065577,https://www.airlines-manager.com/aircraft/show/103882356,13:00,17:44,310,"299,574$","268,416$",$865.86,"$56,707.61"
IAH - MCI,58051861529,I-RNO-MCI-5,ERJ-175,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/58051861529,https://www.airlines-manager.com/aircraft/show/105099861,18:00,22:44,112,"141,735$","121,915$","$1,088.53","$25,756.69"
IAH - MCI,58054747801,I-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/58054747801,https://www.airlines-manager.com/aircraft/show/120293379,19:30,23:59,0,"$78,755.00","$36,556.00",$0.00,"$8,153.75"
IAH - MCI,58057474835,I-RNO-MCI-1,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/58057474835,https://www.airlines-manager.com/aircraft/show/103882355,21:00,1:44,310,"$299,574.00","$268,416.00",$865.86,"$56,707.61"
IAH - MCO,58017973252,I-MIA-ORD-2,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/58017973252,https://www.airlines-manager.com/aircraft/show/90183183,1:00,6:29,310,"$346,660.00","$304,266.00",$981.50,"$55,489.24"
IAH - MCO,58017973253,I-MIA-ORD-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/58017973253,https://www.airlines-manager.com/aircraft/show/90140936,3:00,8:29,136,"$165,003.00","$138,225.00","$1,016.36","$25,208.21"
IAH - MCO,58024780722,I-MIA-ORD-1,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/58024780722,https://www.airlines-manager.com/aircraft/show/90183184,6:45,12:14,310,"$346,660.00","$304,266.00",$981.50,"$55,489.24"
IAH - MCO,58031343155,I-MIA-ORD-5,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/58031343155,https://www.airlines-manager.com/aircraft/show/90183180,8:45,14:14,310,"$346,660.00","$304,266.00",$981.50,"$55,489.24"
IAH - MCO,58042065559,I-MIA-ORD-4,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/58042065559,https://www.airlines-manager.com/aircraft/show/90183181,13:00,18:29,310,"$346,660.00","$304,266.00",$981.50,"$55,489.24"
IAH - MCO,58051861698,I-MIA-ORD-3,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/58051861698,https://www.airlines-manager.com/aircraft/show/90183182,19:15,0:44,310,"$346,660.00","$304,266.00",$981.50,"$55,489.24"
IAH - MEM,58024780650,I-SMF-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/58024780650,https://www.airlines-manager.com/aircraft/show/99093332,5:45,9:44,320,"$223,713.00","$190,351.00",$594.85,"$47,786.86"
IAH - MEM,58031343203,I-SMF-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/58031343203,https://www.airlines-manager.com/aircraft/show/99093333,9:30,13:29,320,"$223,713.00","$190,351.00",$594.85,"$47,786.86"
IAH - MEM,58042065664,I-SMF-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/58042065664,https://www.airlines-manager.com/aircraft/show/99093334,14:00,17:59,320,"$223,713.00","$190,351.00",$594.85,"$47,786.86"
IAH - MEM,58054747778,I-SMF-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/58054747778,https://www.airlines-manager.com/aircraft/show/99093335,19:30,23:29,320,"$223,713.00","$190,351.00",$594.85,"$47,786.86"
IAH - MEM,58057474897,I-SMF-CVG-5 B,A319-100,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/58057474897,https://www.airlines-manager.com/aircraft/show/106499070,21:30,1:29,198,"169,806$","146,816$",$741.49,"$36,857.57"
IAH - MEX,58017973517,I-MEX-YYZ-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/58017973517,https://www.airlines-manager.com/aircraft/show/97026605,1:45,6:44,136,"153,949$","129,048$",$948.88,"$25,895.92"
IAH - MEX,58024780620,I-MEX-YYZ-2,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/58024780620,https://www.airlines-manager.com/aircraft/show/97076945,5:30,10:29,400,"415,716$","367,373$",$918.43,"$73,720.33"
IAH - MEX,58031343115,I-MEX-YYZ-5,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/58031343115,https://www.airlines-manager.com/aircraft/show/97076942,8:30,13:29,400,"415,716$","367,373$",$918.43,"$73,720.33"
IAH - MEX,58042065492,I-MEX-YYZ-1,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/58042065492,https://www.airlines-manager.com/aircraft/show/97076946,13:00,17:59,400,"$415,716.00","$367,373.00",$918.43,"$73,720.33"
IAH - MEX,58045346286,I-MEX-YYZ-4,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/58045346286,https://www.airlines-manager.com/aircraft/show/97076943,16:00,20:59,395,"$411,103.00","$362,885.00",$918.70,"$72,819.73"
IAH - MEX,58059513275,I-MEX-YYZ-3,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/58059513275,https://www.airlines-manager.com/aircraft/show/97076944,22:30,3:29,284,"$308,683.00","$263,221.00",$926.83,"$52,820.27"
IAH - MFE,58017973679,I-MYR-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50555963,https://www.airlines-manager.com/network/showflight/58017973679,https://www.airlines-manager.com/aircraft/show/120452414,3:30,6:44,310,"$171,083.00","$148,684.00",$479.63,"$45,984.74"
IAH - MFE,58042065592,I-MYR-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50555963,https://www.airlines-manager.com/network/showflight/58042065592,https://www.airlines-manager.com/aircraft/show/120452411,13:00,16:14,310,"$171,083.00","$148,684.00",$479.63,"$45,984.74"
IAH - MFE,58048703784,I-MYR-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50555963,https://www.airlines-manager.com/network/showflight/58048703784,https://www.airlines-manager.com/aircraft/show/120452412,17:45,20:59,310,"$171,083.00","$148,684.00",$479.63,"$45,984.74"
IAH - MFE,58059513295,I-MYR-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50555963,https://www.airlines-manager.com/network/showflight/58059513295,https://www.airlines-manager.com/aircraft/show/120452413,22:30,1:44,310,"$171,083.00","$148,684.00",$479.63,"$45,984.74"
IAH - MFR,58017973421,I-EUG-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/58017973421,https://www.airlines-manager.com/aircraft/show/119525218,1:30,10:14,320,"$555,877.00","$506,508.00","$1,582.84","$57,997.10"
IAH - MFR,58017973444,I-EUG-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/58017973444,https://www.airlines-manager.com/aircraft/show/119525217,3:30,12:14,320,"$555,877.00","$506,508.00","$1,582.84","$57,997.10"
IAH - MFR,58034914056,I-EUG-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/58034914056,https://www.airlines-manager.com/aircraft/show/119525219,11:00,19:44,320,"555,877$","506,508$","$1,582.84","$57,997.10"
IAH - MFR,58042065539,I-EUG-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/58042065539,https://www.airlines-manager.com/aircraft/show/119525220,13:00,21:44,320,"555,877$","506,508$","$1,582.84","$57,997.10"
IAH - MFR,58054747912,I-EUG-MFR-5,ERJ-175,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/58054747912,https://www.airlines-manager.com/aircraft/show/119525248,20:15,5:14,112,"262,366$","232,593$","$2,076.72","$25,891.61"
IAH - MHT,58017973418,I-MHT-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/58017973418,https://www.airlines-manager.com/aircraft/show/114266971,1:30,9:44,320,"525,711$","477,855$","$1,493.30","$58,039.07"
IAH - MHT,58024780721,I-MHT-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/58024780721,https://www.airlines-manager.com/aircraft/show/114266970,6:45,14:59,320,"525,711$","477,855$","$1,493.30","$58,039.07"
IAH - MHT,58038353878,I-MHT-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/58038353878,https://www.airlines-manager.com/aircraft/show/114266972,12:00,20:14,320,"$525,711.00","$477,855.00","$1,493.30","$58,039.07"
IAH - MHT,58045346303,I-MHT-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/58045346303,https://www.airlines-manager.com/aircraft/show/114266976,16:00,0:14,320,"$525,711.00","$477,855.00","$1,493.30","$58,039.07"
IAH - MHT,58048703786,I-MHT-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/58048703786,https://www.airlines-manager.com/aircraft/show/92800067,17:45,1:59,112,"$247,615.00","$219,048.00","$1,955.79","$26,605.02"
IAH - MIA,58017973211,I-MIA-ORD-3,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/58017973211,https://www.airlines-manager.com/aircraft/show/90183182,0:45,6:29,310,"$371,613.00","$325,856.00","$1,051.15","$56,835.35"
IAH - MIA,58024780708,I-MIA-ORD-2,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/58024780708,https://www.airlines-manager.com/aircraft/show/90183183,6:30,12:14,310,"$371,613.00","$325,856.00","$1,051.15","$56,835.35"
IAH - MIA,58031343145,I-MIA-ORD-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/58031343145,https://www.airlines-manager.com/aircraft/show/90140936,8:30,14:14,136,"$176,905.00","$147,937.00","$1,087.77","$25,802.97"
IAH - MIA,58042065562,I-MIA-ORD-1,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/58042065562,https://www.airlines-manager.com/aircraft/show/90183184,13:00,18:44,310,"$371,613.00","$325,856.00","$1,051.15","$56,835.35"
IAH - MIA,58045346186,I-MIA-ORD-5,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/58045346186,https://www.airlines-manager.com/aircraft/show/90183180,15:00,20:44,310,"$371,613.00","$325,856.00","$1,051.15","$56,835.35"
IAH - MIA,58051861581,I-MIA-ORD-4,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/58051861581,https://www.airlines-manager.com/aircraft/show/90183181,18:30,0:14,310,"$371,613.00","$325,856.00","$1,051.15","$56,835.35"
IAH - MKE,58017973261,I-BOI-BNA-2,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/58017973261,https://www.airlines-manager.com/aircraft/show/104258212,1:00,6:59,310,"$380,561.00","$345,427.00","$1,114.28","$57,731.53"
IAH - MKE,58027885538,I-BOI-BNA-1,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/58027885538,https://www.airlines-manager.com/aircraft/show/104258211,8:00,13:59,310,"$380,561.00","$345,427.00","$1,114.28","$57,731.53"
IAH - MKE,58031343187,I-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/58031343187,https://www.airlines-manager.com/aircraft/show/103534664,9:00,14:59,112,"$179,601.00","$156,801.00","$1,400.01","$26,206.30"
IAH - MKE,58042065701,I-BOI-BNA-4,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/58042065701,https://www.airlines-manager.com/aircraft/show/104258214,14:00,19:59,310,"$380,561.00","$345,427.00","$1,114.28","$57,731.53"
IAH - MKE,58051861703,I-BOI-BNA-3,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/58051861703,https://www.airlines-manager.com/aircraft/show/104258213,19:15,1:14,310,"$380,561.00","$345,427.00","$1,114.28","$57,731.53"
IAH - MSN,58027885500,I-GRR-MSN-3,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/58027885500,https://www.airlines-manager.com/aircraft/show/117273346,7:30,13:29,310,"$373,584.00","$340,499.00","$1,098.38","$56,907.91"
IAH - MSN,58042065722,I-GRR-MSN-2,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/58042065722,https://www.airlines-manager.com/aircraft/show/117273347,14:00,19:59,310,"$373,584.00","$340,499.00","$1,098.38","$56,907.91"
IAH - MSN,58054747901,I-GRR-MSN-1,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/58054747901,https://www.airlines-manager.com/aircraft/show/117273348,20:15,2:14,310,"$373,584.00","$340,499.00","$1,098.38","$56,907.91"
IAH - MSN,58057474983,I-GRR-MSN-4,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/58057474983,https://www.airlines-manager.com/aircraft/show/117273345,22:15,4:14,310,"$373,584.00","$340,499.00","$1,098.38","$56,907.91"
IAH - MSO,58021655824,I-MSO-FAR-2,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/58021655824,https://www.airlines-manager.com/aircraft/show/110424756,4:00,11:59,320,"$509,127.00","$462,694.00","$1,445.92","$57,957.49"
IAH - MSO,58042065673,I-MSO-FAR-1,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/58042065673,https://www.airlines-manager.com/aircraft/show/110424757,14:00,21:59,320,"$509,127.00","$462,694.00","$1,445.92","$57,957.49"
IAH - MSO,58048703755,I-MSO-FAR-4,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/58048703755,https://www.airlines-manager.com/aircraft/show/110424754,17:30,1:29,320,"$509,127.00","$462,694.00","$1,445.92","$57,957.49"
IAH - MSO,58054747889,I-MSO-FAR-3,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/58054747889,https://www.airlines-manager.com/aircraft/show/110424755,20:15,4:14,320,"$509,127.00","$462,694.00","$1,445.92","$57,957.49"
IAH - MSP,58021655815,I-LAS-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/58021655815,https://www.airlines-manager.com/aircraft/show/95894466,4:00,9:59,320,"$384,765.00","$335,469.00","$1,048.34","$56,067.24"
IAH - MSP,58021655816,I-LAS-ATL-6,ERJ-175,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/58021655816,https://www.airlines-manager.com/aircraft/show/82323704,5:00,11:14,112,"$182,588.00","$154,923.00","$1,383.24","$24,853.96"
IAH - MSP,58034913852,I-LAS-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/58034913852,https://www.airlines-manager.com/aircraft/show/96183549,10:00,15:59,320,"$384,765.00","$335,469.00","$1,048.34","$56,067.24"
IAH - MSP,58048703771,I-LAS-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/58048703771,https://www.airlines-manager.com/aircraft/show/96250652,17:45,23:44,320,"$384,765.00","$335,469.00","$1,048.34","$56,067.24"
IAH - MSP,58057474877,I-LAS-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/58057474877,https://www.airlines-manager.com/aircraft/show/96256511,21:30,3:29,320,"384,765$","335,469$","$1,048.34","$56,067.24"
IAH - MSP,58059513279,I-LAS-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/58059513279,https://www.airlines-manager.com/aircraft/show/96177955,22:30,4:29,320,"384,765$","335,469$","$1,048.34","$56,067.24"
IAH - MSY,58017973683,I-BWI-PHL-4,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/58017973683,https://www.airlines-manager.com/aircraft/show/106007216,3:45,6:59,338,"171,070$","146,423$",$433.20,"$45,285.46"
IAH - MSY,58021655915,I-BWI-PHL-5,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/58021655915,https://www.airlines-manager.com/aircraft/show/106007217,4:45,7:59,338,"171,070$","146,423$",$433.20,"$45,285.46"
IAH - MSY,58034913997,I-BWI-PHL-3,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/58034913997,https://www.airlines-manager.com/aircraft/show/106007215,11:00,14:14,338,"$171,070.00","$146,423.00",$433.20,"$45,285.46"
IAH - MSY,58048703766,I-BWI-PHL-2,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/58048703766,https://www.airlines-manager.com/aircraft/show/106007214,17:45,20:59,338,"$171,070.00","$146,423.00",$433.20,"$45,285.46"
IAH - MSY,58054747917,I-BWI-PHL-1,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/58054747917,https://www.airlines-manager.com/aircraft/show/106007213,20:30,23:44,271,"$150,897.00","$126,715.00",$467.58,"$39,190.21"
IAH - MTJ,58017973634,I-MYR-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50683373,https://www.airlines-manager.com/network/showflight/58017973634,https://www.airlines-manager.com/aircraft/show/120452412,3:00,8:44,310,"$359,072.00","$326,458.00","$1,053.09","$56,940.35"
IAH - MTJ,58031343181,I-MYR-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50683373,https://www.airlines-manager.com/network/showflight/58031343181,https://www.airlines-manager.com/aircraft/show/120452413,9:00,14:44,310,"$359,072.00","$326,458.00","$1,053.09","$56,940.35"
IAH - MTJ,58042065724,I-MYR-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50683373,https://www.airlines-manager.com/network/showflight/58042065724,https://www.airlines-manager.com/aircraft/show/120452414,14:00,19:44,310,"$359,072.00","$326,458.00","$1,053.09","$56,940.35"
IAH - MTJ,58057474984,I-MYR-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50683373,https://www.airlines-manager.com/network/showflight/58057474984,https://www.airlines-manager.com/aircraft/show/120452411,22:15,3:59,247,"$316,071.00","$285,056.00","$1,154.07","$49,719.07"
IAH - MTY,58017973674,I-YOW-SJD-1,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/58017973674,https://www.airlines-manager.com/aircraft/show/114266974,3:30,7:14,320,"$203,277.00","$172,760.00",$539.88,"$46,275.00"
IAH - MTY,58031343201,I-YOW-SJD-5,ERJ-175,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/58031343201,https://www.airlines-manager.com/aircraft/show/105099862,9:15,12:59,112,"$92,839.00","$76,384.00",$682.00,"$20,460.00"
IAH - MTY,58042065677,I-YOW-SJD-4,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/58042065677,https://www.airlines-manager.com/aircraft/show/114266975,14:00,17:44,320,"$203,277.00","$172,760.00",$539.88,"$46,275.00"
IAH - MTY,58048703756,I-YOW-SJD-3,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/58048703756,https://www.airlines-manager.com/aircraft/show/113250059,17:30,21:14,320,"$203,277.00","$172,760.00",$539.88,"$46,275.00"
IAH - MTY,58059513413,I-YOW-SJD-2,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/58059513413,https://www.airlines-manager.com/aircraft/show/113114108,23:30,3:14,320,"$203,277.00","$172,760.00",$539.88,"$46,275.00"
IAH - MYR,58017973505,I-MYR-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50683370,https://www.airlines-manager.com/network/showflight/58017973505,https://www.airlines-manager.com/aircraft/show/120452413,1:45,7:44,310,"$378,289.00","$344,570.00","$1,111.52","$57,588.30"
IAH - MYR,58027885543,I-MYR-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50683370,https://www.airlines-manager.com/network/showflight/58027885543,https://www.airlines-manager.com/aircraft/show/120452414,8:00,13:59,310,"$378,289.00","$344,570.00","$1,111.52","$57,588.30"
IAH - MYR,58048703616,I-MYR-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50683370,https://www.airlines-manager.com/network/showflight/58048703616,https://www.airlines-manager.com/aircraft/show/120452411,16:15,22:14,310,"$378,289.00","$344,570.00","$1,111.52","$57,588.30"
IAH - MYR,58057474841,I-MYR-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50683370,https://www.airlines-manager.com/network/showflight/58057474841,https://www.airlines-manager.com/aircraft/show/120452412,21:00,2:59,310,"378,289$","344,570$","$1,111.52","$57,588.30"
IAH - OAK,58017973363,I-IAD-SAN-5,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/58017973363,https://www.airlines-manager.com/aircraft/show/98578920,1:15,9:44,320,"531,050$","480,227$","$1,500.71","$56,608.29"
IAH - OAK,58017973364,I-IAD-SAN-1,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/58017973364,https://www.airlines-manager.com/aircraft/show/98578924,3:00,11:29,320,"531,050$","480,227$","$1,500.71","$56,608.29"
IAH - OAK,58027885529,I-IAD-SAN-4,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/58027885529,https://www.airlines-manager.com/aircraft/show/98578921,8:00,16:29,320,"531,050$","480,227$","$1,500.71","$56,608.29"
IAH - OAK,58042065513,I-IAD-SAN-3,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/58042065513,https://www.airlines-manager.com/aircraft/show/98578922,13:00,21:29,320,"531,050$","480,227$","$1,500.71","$56,608.29"
IAH - OAK,58051861684,I-IAD-SAN-6,ERJ-175,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/58051861684,https://www.airlines-manager.com/aircraft/show/105400635,19:00,3:29,112,"250,246$","220,099$","$1,965.17","$25,944.87"
IAH - OAK,58057474968,I-IAD-SAN-2,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/58057474968,https://www.airlines-manager.com/aircraft/show/98578923,22:15,6:44,320,"531,050$","480,227$","$1,500.71","$56,608.29"
IAH - OKC,58024780634,I-RIC-SDF-1,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/58024780634,https://www.airlines-manager.com/aircraft/show/107467134,5:30,9:14,310,"197,208$","171,947$",$554.67,"$46,057.23"
IAH - OKC,58034913952,I-RIC-SDF-5,ERJ-175,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/58034913952,https://www.airlines-manager.com/aircraft/show/107467211,10:00,13:44,112,"$90,992.00","$75,145.00",$670.94,"$20,128.13"
IAH - OKC,58038353897,I-RIC-SDF-4,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/58038353897,https://www.airlines-manager.com/aircraft/show/107467131,12:00,15:44,310,"$197,208.00","$171,947.00",$554.67,"$46,057.23"
IAH - OKC,58048703783,I-RIC-SDF-3,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/58048703783,https://www.airlines-manager.com/aircraft/show/107467132,17:45,21:29,310,"$197,208.00","$171,947.00",$554.67,"$46,057.23"
IAH - OKC,58059513359,I-RIC-SDF-2,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/58059513359,https://www.airlines-manager.com/aircraft/show/107467133,23:00,2:44,310,"$197,208.00","$171,947.00",$554.67,"$46,057.23"
IAH - OMA,58017973606,I-BOI-BNA-1,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/58017973606,https://www.airlines-manager.com/aircraft/show/104258211,2:45,7:59,310,"$329,990.00","$298,847.00",$964.02,"$57,104.52"
IAH - OMA,58017973607,I-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/58017973607,https://www.airlines-manager.com/aircraft/show/103534664,3:45,8:59,112,"$156,520.00","$136,469.00","$1,218.47","$26,076.88"
IAH - OMA,58031343156,I-BOI-BNA-4,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/58031343156,https://www.airlines-manager.com/aircraft/show/104258214,8:45,13:59,310,"$329,990.00","$298,847.00",$964.02,"$57,104.52"
IAH - OMA,58042065700,I-BOI-BNA-3,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/58042065700,https://www.airlines-manager.com/aircraft/show/104258213,14:00,19:14,310,"$329,990.00","$298,847.00",$964.02,"$57,104.52"
IAH - OMA,58054747824,I-BOI-BNA-2,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/58054747824,https://www.airlines-manager.com/aircraft/show/104258212,19:45,0:59,310,"$329,990.00","$298,847.00",$964.02,"$57,104.52"
IAH - ONT,58017973611,I-ANC-ONT-1,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/58017973611,https://www.airlines-manager.com/aircraft/show/108258010,2:45,9:59,310,"465,347$","424,181$","$1,368.33","$58,642.53"
IAH - ONT,58021655930,I-ANC-ONT-2,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/58021655930,https://www.airlines-manager.com/aircraft/show/108258011,4:45,11:59,310,"$465,347.00","$424,181.00","$1,368.33","$58,642.53"
IAH - ONT,58038353902,I-ANC-ONT-3,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/58038353902,https://www.airlines-manager.com/aircraft/show/108258012,12:00,19:14,310,"$465,347.00","$424,181.00","$1,368.33","$58,642.53"
IAH - ONT,58042065706,I-ANC-ONT-4,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/58042065706,https://www.airlines-manager.com/aircraft/show/108089220,14:00,21:14,310,"$465,347.00","$424,181.00","$1,368.33","$58,642.53"
IAH - ONT,58045346326,I-ANC-ONT-5 B,A319-100,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/58045346326,https://www.airlines-manager.com/aircraft/show/108286957,16:00,23:14,198,"$351,162.00","$318,172.00","$1,606.93","$43,986.91"
IAH - ORD,58017973136,I-MIA-ORD-4,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/58017973136,https://www.airlines-manager.com/aircraft/show/90183181,0:15,5:59,310,"$364,400.00","$309,434.00",$998.17,"$53,971.05"
IAH - ORD,58024780707,I-MIA-ORD-3,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/58024780707,https://www.airlines-manager.com/aircraft/show/90183182,6:30,12:14,310,"$364,400.00","$309,434.00",$998.17,"$53,971.05"
IAH - ORD,58031343111,I-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/58031343111,https://www.airlines-manager.com/aircraft/show/120293379,8:15,13:59,0,"$101,420.00","$26,513.00",#DIV/0!,"$4,624.36"
IAH - ORD,58042065561,I-MIA-ORD-2,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/58042065561,https://www.airlines-manager.com/aircraft/show/90183183,13:00,18:44,310,"$364,400.00","$309,434.00",$998.17,"$53,971.05"
IAH - ORD,58045346225,I-MIA-ORD-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/58045346225,https://www.airlines-manager.com/aircraft/show/90140936,15:00,20:44,136,"$173,108.00","$138,672.00","$1,019.65","$24,186.98"
IAH - ORD,58051861614,I-MIA-ORD-1,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/58051861614,https://www.airlines-manager.com/aircraft/show/90183184,18:45,0:29,310,"$364,400.00","$309,434.00",$998.17,"$53,971.05"
IAH - ORD,58054747951,I-MIA-ORD-5,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/58054747951,https://www.airlines-manager.com/aircraft/show/90183180,20:45,2:29,310,"$364,400.00","$309,434.00",$998.17,"$53,971.05"
IAH - ORF,58017973082,I-PVD-BUF-5 B,A319-100,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/58017973082,https://www.airlines-manager.com/aircraft/show/110582843,0:00,6:44,198,"$320,725.00","$291,072.00","$1,470.06","$43,228.51"
IAH - ORF,58021655875,I-PVD-BUF-1,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/58021655875,https://www.airlines-manager.com/aircraft/show/107467130,4:15,10:59,310,"$425,000.00","$387,998.00","$1,251.61","$57,623.47"
IAH - ORF,58031343104,I-PVD-BUF-4,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/58031343104,https://www.airlines-manager.com/aircraft/show/107467127,8:15,14:59,310,"$425,000.00","$387,998.00","$1,251.61","$57,623.47"
IAH - ORF,58042065581,I-PVD-BUF-3,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/58042065581,https://www.airlines-manager.com/aircraft/show/107467128,13:00,19:44,310,"425,000$","387,998$","$1,251.61","$57,623.47"
IAH - ORF,58054747856,I-PVD-BUF-2,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/58054747856,https://www.airlines-manager.com/aircraft/show/107467129,20:00,2:44,310,"$425,000.00","$387,998.00","$1,251.61","$57,623.47"
IAH - PBI,58017973583,I-PBI-RSW-2,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/58017973583,https://www.airlines-manager.com/aircraft/show/104717246,2:30,8:14,310,"370,693$","335,957$","$1,083.73","$58,597.15"
IAH - PBI,58034914082,I-PBI-RSW-1,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/58034914082,https://www.airlines-manager.com/aircraft/show/104717247,11:00,16:44,310,"370,693$","335,957$","$1,083.73","$58,597.15"
IAH - PBI,58042065621,I-PBI-RSW-5,ERJ-175,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/58042065621,https://www.airlines-manager.com/aircraft/show/104743902,13:15,18:59,112,"$175,285.00","$152,779.00","$1,364.10","$26,647.50"
IAH - PBI,58048703613,I-PBI-RSW-4,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/58048703613,https://www.airlines-manager.com/aircraft/show/104717244,16:15,21:59,310,"$370,693.00","$335,957.00","$1,083.73","$58,597.15"
IAH - PBI,58057474922,I-PBI-RSW-3,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/58057474922,https://www.airlines-manager.com/aircraft/show/104717245,21:45,3:29,310,"$370,693.00","$335,957.00","$1,083.73","$58,597.15"
IAH - PDX,58017973593,I-SEA-DEN-5,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/58017973593,https://www.airlines-manager.com/aircraft/show/105562975,2:45,11:44,338,"$622,480.00","$574,378.00","$1,699.34","$63,938.18"
IAH - PDX,58021655809,I-SEA-DEN-2,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/58021655809,https://www.airlines-manager.com/aircraft/show/105562972,4:00,12:59,338,"$622,480.00","$574,378.00","$1,699.34","$63,938.18"
IAH - PDX,58021655810,I-SEA-DEN-4,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/58021655810,https://www.airlines-manager.com/aircraft/show/105562974,5:00,13:59,338,"$622,480.00","$574,378.00","$1,699.34","$63,938.18"
IAH - PDX,58038353922,I-SEA-DEN-6,ERJ-175,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/58038353922,https://www.airlines-manager.com/aircraft/show/105601215,12:00,21:14,112,"$270,856.00","$237,445.00","$2,120.04","$25,716.06"
IAH - PDX,58042065647,I-SEA-DEN-3,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/58042065647,https://www.airlines-manager.com/aircraft/show/105562973,14:00,22:59,338,"$622,480.00","$574,378.00","$1,699.34","$63,938.18"
IAH - PDX,58051861563,I-SEA-DEN-1,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/58051861563,https://www.airlines-manager.com/aircraft/show/105562971,18:30,3:29,338,"622,480$","574,378$","$1,699.34","$63,938.18"
IAH - PHL,58017973093,I-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/58017973093,https://www.airlines-manager.com/aircraft/show/120293379,0:00,7:14,0,"127,938$","65,291$",$0.00,"$9,026.41"
IAH - PHL,58034913998,I-BWI-PHL-4,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/58034913998,https://www.airlines-manager.com/aircraft/show/106007216,11:00,18:14,338,"503,297$","458,115$","$1,355.37","$63,333.87"
IAH - PHL,58042065753,I-BWI-PHL-3,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/58042065753,https://www.airlines-manager.com/aircraft/show/106007215,14:15,21:29,338,"503,297$","458,115$","$1,355.37","$63,333.87"
IAH - PHL,58057474812,I-BWI-PHL-2,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/58057474812,https://www.airlines-manager.com/aircraft/show/106007214,21:00,4:14,338,"503,297$","458,115$","$1,355.37","$63,333.87"
IAH - PHL,58057474813,I-BWI-PHL-5,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/58057474813,https://www.airlines-manager.com/aircraft/show/106007217,21:30,4:44,338,"$503,297.00","$458,115.00","$1,355.37","$63,333.87"
IAH - PHL,58060881876,I-BWI-PHL-1,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/58060881876,https://www.airlines-manager.com/aircraft/show/106007213,23:45,6:59,338,"$503,297.00","$458,115.00","$1,355.37","$63,333.87"
IAH - PHX,58021655817,I-LAS-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/58021655817,https://www.airlines-manager.com/aircraft/show/96183549,4:00,9:59,320,"$380,643.00","$328,609.00","$1,026.90","$54,920.72"
IAH - PHX,58021655818,I-LAS-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/58021655818,https://www.airlines-manager.com/aircraft/show/96177955,5:00,10:59,320,"$380,643.00","$328,609.00","$1,026.90","$54,920.72"
IAH - PHX,58038353842,I-LAS-ATL-6,ERJ-175,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/58038353842,https://www.airlines-manager.com/aircraft/show/82323704,11:30,17:29,112,"179,949$","150,998$","$1,348.20","$25,236.43"
IAH - PHX,58038353843,I-LAS-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/58038353843,https://www.airlines-manager.com/aircraft/show/96250652,11:45,17:44,320,"380,643$","328,609$","$1,026.90","$54,920.72"
IAH - PHX,58045346250,I-LAS-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/58045346250,https://www.airlines-manager.com/aircraft/show/96256511,15:30,21:29,320,"380,643$","328,609$","$1,026.90","$54,920.72"
IAH - PHX,58057474876,I-LAS-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/58057474876,https://www.airlines-manager.com/aircraft/show/95894466,21:30,3:29,320,"380,643$","328,609$","$1,026.90","$54,920.72"
IAH - PIT,58021655954,I-PIT-RDU-2,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/58021655954,https://www.airlines-manager.com/aircraft/show/100684073,5:00,11:29,310,"406,895$","368,531$","$1,188.81","$56,842.83"
IAH - PIT,58034914116,I-PIT-RDU-1,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/58034914116,https://www.airlines-manager.com/aircraft/show/100684074,11:15,17:44,310,"406,895$","368,531$","$1,188.81","$56,842.83"
IAH - PIT,58045346328,I-PIT-RDU-5 B,A319-100,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/58045346328,https://www.airlines-manager.com/aircraft/show/110582845,16:00,22:29,198,"307,277$","276,538$","$1,396.66","$42,653.68"
IAH - PIT,58048703732,I-PIT-RDU-4,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/58048703732,https://www.airlines-manager.com/aircraft/show/100684071,17:15,23:44,310,"406,895$","368,531$","$1,188.81","$56,842.83"
IAH - PIT,58059513329,I-PIT-RDU-3,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/58059513329,https://www.airlines-manager.com/aircraft/show/100684072,22:45,5:14,310,"406,895$","368,531$","$1,188.81","$56,842.83"
IAH - PNS,58031343180,I-MYR-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50683375,https://www.airlines-manager.com/network/showflight/58031343180,https://www.airlines-manager.com/aircraft/show/120452411,9:00,12:59,310,"228,813$","203,811$",$657.45,"$51,165.94"
IAH - PNS,58042065642,I-MYR-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50683375,https://www.airlines-manager.com/network/showflight/58042065642,https://www.airlines-manager.com/aircraft/show/120452412,13:45,17:44,310,"228,813$","203,811$",$657.45,"$51,165.94"
IAH - PNS,58051861587,I-MYR-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50683375,https://www.airlines-manager.com/network/showflight/58051861587,https://www.airlines-manager.com/aircraft/show/120452413,18:30,22:29,310,"228,813$","203,811$",$657.45,"$51,165.94"
IAH - PNS,58059513421,I-MYR-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50683375,https://www.airlines-manager.com/network/showflight/58059513421,https://www.airlines-manager.com/aircraft/show/120452414,23:30,3:29,310,"228,813$","203,811$",$657.45,"$51,165.94"
IAH - PSP,58017973455,I-YEG-BUR-2,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/58017973455,https://www.airlines-manager.com/aircraft/show/117273343,1:30,8:29,310,"452,503$","414,449$","$1,336.93","$59,348.31"
IAH - PSP,58017973456,I-YEG-BUR-1,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/58017973456,https://www.airlines-manager.com/aircraft/show/117273344,3:45,10:44,310,"452,503$","414,449$","$1,336.93","$59,348.31"
IAH - PSP,58034914096,I-YEG-BUR-3,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/58034914096,https://www.airlines-manager.com/aircraft/show/117273342,11:00,17:59,310,"$452,503.00","$414,449.00","$1,336.93","$59,348.31"
IAH - PSP,58051861565,I-YEG-BUR-5,A321neo,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/58051861565,https://www.airlines-manager.com/aircraft/show/117273340,18:30,1:29,338,"$490,459.00","$453,988.00","$1,343.16","$65,010.21"
IAH - PVD,58017973609,I-PVD-BUF-2,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/58017973609,https://www.airlines-manager.com/aircraft/show/107467129,2:45,10:59,310,"$518,459.00","$476,949.00","$1,538.55","$57,929.03"
IAH - PVD,58024780726,I-PVD-BUF-5 B,A319-100,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/58024780726,https://www.airlines-manager.com/aircraft/show/110582843,6:45,14:59,198,"$390,620.00","$357,345.00","$1,804.77","$43,402.23"
IAH - PVD,58042065583,I-PVD-BUF-1,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/58042065583,https://www.airlines-manager.com/aircraft/show/107467130,13:00,21:14,310,"$518,459.00","$476,949.00","$1,538.55","$57,929.03"
IAH - PVD,58048703701,I-PVD-BUF-4,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/58048703701,https://www.airlines-manager.com/aircraft/show/107467127,17:00,1:14,310,"518,459$","476,949$","$1,538.55","$57,929.03"
IAH - PVD,58054747825,I-PVD-BUF-3,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/58054747825,https://www.airlines-manager.com/aircraft/show/107467128,19:45,3:59,310,"518,459$","476,949$","$1,538.55","$57,929.03"
IAH - PVR,58017973643,I-YOW-SJD-5,ERJ-175,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/58017973643,https://www.airlines-manager.com/aircraft/show/105099862,3:00,8:29,112,"167,029$","145,615$","$1,300.13","$26,555.93"
IAH - PVR,58031343121,I-YOW-SJD-4,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/58031343121,https://www.airlines-manager.com/aircraft/show/114266975,8:30,13:59,320,"357,042$","319,408$",$998.15,"$58,250.70"
IAH - PVR,58038353876,I-YOW-SJD-3,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/58038353876,https://www.airlines-manager.com/aircraft/show/113250059,12:00,17:29,320,"$357,042.00","$319,408.00",$998.15,"$58,250.70"
IAH - PVR,58051861504,I-YOW-SJD-2,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/58051861504,https://www.airlines-manager.com/aircraft/show/113114108,18:00,23:29,320,"$357,042.00","$319,408.00",$998.15,"$58,250.70"
IAH - PVR,58057474934,I-YOW-SJD-1,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/58057474934,https://www.airlines-manager.com/aircraft/show/114266974,22:00,3:29,320,"$357,042.00","$319,408.00",$998.15,"$58,250.70"
IAH - PWM,58027885520,I-SJC-PWM-5 B,A319-100,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/58027885520,https://www.airlines-manager.com/aircraft/show/106014350,7:45,16:14,198,"$408,258.00","$374,074.00","$1,889.26","$44,095.17"
IAH - PWM,58034914074,I-SJC-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/58034914074,https://www.airlines-manager.com/aircraft/show/96691558,11:00,19:29,310,"$542,330.00","$499,689.00","$1,611.90","$58,902.44"
IAH - PWM,58045346189,I-SJC-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/58045346189,https://www.airlines-manager.com/aircraft/show/96694086,15:00,23:29,310,"$542,330.00","$499,689.00","$1,611.90","$58,902.44"
IAH - PWM,58051861701,I-SJC-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/58051861701,https://www.airlines-manager.com/aircraft/show/96692491,19:15,3:44,310,"$542,330.00","$499,689.00","$1,611.90","$58,902.44"
IAH - PWM,58059513327,I-SJC-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/58059513327,https://www.airlines-manager.com/aircraft/show/96692343,22:45,7:14,310,"$542,330.00","$499,689.00","$1,611.90","$58,902.44"
IAH - RAP,58017973560,I-GRR-MSN-1,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/58017973560,https://www.airlines-manager.com/aircraft/show/117273348,2:15,8:29,310,"$389,890.00","$355,642.00","$1,147.23","$57,054.87"
IAH - RAP,58021655880,I-GRR-MSN-4,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/58021655880,https://www.airlines-manager.com/aircraft/show/117273345,4:15,10:29,310,"$389,890.00","$355,642.00","$1,147.23","$57,054.87"
IAH - RAP,58042065721,I-GRR-MSN-3,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/58042065721,https://www.airlines-manager.com/aircraft/show/117273346,14:00,20:14,310,"$389,890.00","$355,642.00","$1,147.23","$57,054.87"
IAH - RAP,58054747862,I-GRR-MSN-2,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/58054747862,https://www.airlines-manager.com/aircraft/show/117273347,20:00,2:14,296,"$379,489.00","$345,648.00","$1,167.73","$55,451.55"
IAH - RDU,58021655968,I-PIT-RDU-3,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/58021655968,https://www.airlines-manager.com/aircraft/show/100684072,5:15,11:29,310,"$390,232.00","$353,428.00","$1,140.09","$56,699.68"
IAH - RDU,58038353836,I-PIT-RDU-2,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/58038353836,https://www.airlines-manager.com/aircraft/show/100684073,11:30,17:44,310,"$390,232.00","$353,428.00","$1,140.09","$56,699.68"
IAH - RDU,58048703780,I-PIT-RDU-1,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/58048703780,https://www.airlines-manager.com/aircraft/show/100684074,17:45,23:59,310,"$390,232.00","$353,428.00","$1,140.09","$56,699.68"
IAH - RDU,58059513297,I-PIT-RDU-5 B,A319-100,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/58059513297,https://www.airlines-manager.com/aircraft/show/110582845,22:30,4:44,198,"$294,889.00","$265,400.00","$1,340.40","$42,577.54"
IAH - RDU,58060881891,I-PIT-RDU-4,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/58060881891,https://www.airlines-manager.com/aircraft/show/100684071,23:45,5:59,310,"$390,232.00","$353,428.00","$1,140.09","$56,699.68"
IAH - RIC,58017973610,I-RIC-SDF-2,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/58017973610,https://www.airlines-manager.com/aircraft/show/107467133,2:45,9:14,310,"$418,233.00","$381,919.00","$1,232.00","$58,907.81"
IAH - RIC,58038353900,I-RIC-SDF-1,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/58038353900,https://www.airlines-manager.com/aircraft/show/107467134,12:00,18:29,310,"$418,233.00","$381,919.00","$1,232.00","$58,907.81"
IAH - RIC,58042065645,I-RIC-SDF-5,ERJ-175,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/58042065645,https://www.airlines-manager.com/aircraft/show/107467211,13:45,20:14,112,"$196,627.00","$172,821.00","$1,543.04","$26,656.20"
IAH - RIC,58045346267,I-RIC-SDF-4,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/58045346267,https://www.airlines-manager.com/aircraft/show/107467131,15:45,22:14,310,"$418,233.00","$381,919.00","$1,232.00","$58,907.81"
IAH - RIC,58057474892,I-RIC-SDF-3,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/58057474892,https://www.airlines-manager.com/aircraft/show/107467132,21:30,3:59,310,"$418,233.00","$381,919.00","$1,232.00","$58,907.81"
IAH - RNO,58017973381,I-RNO-MCI-3,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/58017973381,https://www.airlines-manager.com/aircraft/show/103882357,1:15,9:14,310,"$514,150.00","$471,042.00","$1,519.49","$59,003.17"
IAH - RNO,58021655843,I-RNO-MCI-5,ERJ-175,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/58021655843,https://www.airlines-manager.com/aircraft/show/105099861,4:00,11:59,112,"$241,738.00","$213,206.00","$1,903.63","$26,706.39"
IAH - RNO,58021655844,I-RNO-MCI-2,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/58021655844,https://www.airlines-manager.com/aircraft/show/103882356,5:00,12:59,310,"$514,150.00","$471,042.00","$1,519.49","$59,003.17"
IAH - RNO,58042065576,I-RNO-MCI-1,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/58042065576,https://www.airlines-manager.com/aircraft/show/103882355,13:00,20:59,310,"$514,150.00","$471,042.00","$1,519.49","$59,003.17"
IAH - RNO,58048703699,I-RNO-MCI-4,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/58048703699,https://www.airlines-manager.com/aircraft/show/103882358,17:00,0:59,310,"$514,150.00","$471,042.00","$1,519.49","$59,003.17"
IAH - ROC,58017973170,I-SYR-ROC-3,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/58017973170,https://www.airlines-manager.com/aircraft/show/119525222,0:30,7:44,320,"$463,219.00","$420,416.00","$1,313.80","$58,122.03"
IAH - ROC,58034914058,I-SYR-ROC-2,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/58034914058,https://www.airlines-manager.com/aircraft/show/119525223,11:00,18:14,320,"$463,219.00","$420,416.00","$1,313.80","$58,122.03"
IAH - ROC,58038353924,I-SYR-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/58038353924,https://www.airlines-manager.com/aircraft/show/119525249,12:00,19:14,112,"$218,849.00","$193,570.00","$1,728.30","$26,760.83"
IAH - ROC,58051861578,I-SYR-ROC-1,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/58051861578,https://www.airlines-manager.com/aircraft/show/119525224,18:30,1:44,320,"$463,219.00","$420,416.00","$1,313.80","$58,122.03"
IAH - ROC,58054747784,I-SYR-ROC-4,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/58054747784,https://www.airlines-manager.com/aircraft/show/119525221,19:30,2:44,320,"$463,219.00","$420,416.00","$1,313.80","$58,122.03"
IAH - RSW,58017973608,I-PBI-RSW-4,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/58017973608,https://www.airlines-manager.com/aircraft/show/104717244,2:45,8:14,310,"$350,834.00","$316,276.00","$1,020.25","$57,679.51"
IAH - RSW,58034914080,I-PBI-RSW-3,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/58034914080,https://www.airlines-manager.com/aircraft/show/104717245,11:00,16:29,310,"$350,834.00","$316,276.00","$1,020.25","$57,679.51"
IAH - RSW,58045346266,I-PBI-RSW-2,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/58045346266,https://www.airlines-manager.com/aircraft/show/104717246,15:45,21:14,310,"350,834$","316,276$","$1,020.25","$57,679.51"
IAH - RSW,58057474891,I-PBI-RSW-1,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/58057474891,https://www.airlines-manager.com/aircraft/show/104717247,21:30,2:59,310,"350,834$","316,276$","$1,020.25","$57,679.51"
IAH - RSW,58060881902,I-PBI-RSW-5,ERJ-175,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/58060881902,https://www.airlines-manager.com/aircraft/show/104743902,23:45,5:14,112,"165,937$","143,701$","$1,283.04","$26,206.87"
IAH - SAN,58017973201,I-IAD-SAN-4,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/58017973201,https://www.airlines-manager.com/aircraft/show/98578921,0:45,7:59,320,"454,470$","407,129$","$1,272.28","$56,285.12"
IAH - SAN,58021655861,I-IAD-SAN-3,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/58021655861,https://www.airlines-manager.com/aircraft/show/98578922,4:15,11:29,320,"454,470$","407,129$","$1,272.28","$56,285.12"
IAH - SAN,58034913966,I-IAD-SAN-6,ERJ-175,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/58034913966,https://www.airlines-manager.com/aircraft/show/105400635,10:15,17:29,112,"$215,045.00","$187,586.00","$1,674.88","$25,933.55"
IAH - SAN,58045346169,I-IAD-SAN-2,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/58045346169,https://www.airlines-manager.com/aircraft/show/98578923,15:00,22:14,320,"$454,470.00","$407,129.00","$1,272.28","$56,285.12"
IAH - SAN,58051861500,I-IAD-SAN-5,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/58051861500,https://www.airlines-manager.com/aircraft/show/98578920,18:00,1:14,320,"$454,470.00","$407,129.00","$1,272.28","$56,285.12"
IAH - SAN,58054747813,I-IAD-SAN-1,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/58054747813,https://www.airlines-manager.com/aircraft/show/98578924,19:45,2:59,320,"$454,470.00","$407,129.00","$1,272.28","$56,285.12"
IAH - SAT,58017973459,I-SMF-CVG-5 B,A319-100,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/58017973459,https://www.airlines-manager.com/aircraft/show/106499070,1:30,4:14,198,"$91,093.00","$73,214.00",$369.77,"$26,785.61"
IAH - SAT,58034913818,I-SMF-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/58034913818,https://www.airlines-manager.com/aircraft/show/99093332,9:45,12:29,320,"$120,541.00","$94,177.00",$294.30,"$34,455.00"
IAH - SAT,58042065663,I-SMF-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/58042065663,https://www.airlines-manager.com/aircraft/show/99093333,14:00,16:44,320,"$120,541.00","$94,177.00",$294.30,"$34,455.00"
IAH - SAT,58051861502,I-SMF-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/58051861502,https://www.airlines-manager.com/aircraft/show/99093334,18:00,20:44,320,"$120,541.00","$94,177.00",$294.30,"$34,455.00"
IAH - SAT,58059513410,I-SMF-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/58059513410,https://www.airlines-manager.com/aircraft/show/99093335,23:30,2:14,320,"$120,541.00","$94,177.00",$294.30,"$34,455.00"
IAH - SAV,58017973526,I-FAT-SAV-4,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/58017973526,https://www.airlines-manager.com/aircraft/show/110424758,2:00,7:29,320,"343,864$","308,058$",$962.68,"$56,180.79"
IAH - SAV,58031343119,I-FAT-SAV-3,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/58031343119,https://www.airlines-manager.com/aircraft/show/110424759,8:30,13:59,320,"343,864$","308,058$",$962.68,"$56,180.79"
IAH - SAV,58042065528,I-FAT-SAV-2,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/58042065528,https://www.airlines-manager.com/aircraft/show/110424760,13:00,18:29,320,"343,864$","308,058$",$962.68,"$56,180.79"
IAH - SAV,58057474913,I-FAT-SAV-1,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/58057474913,https://www.airlines-manager.com/aircraft/show/110424761,21:45,3:14,320,"343,864$","308,058$",$962.68,"$56,180.79"
IAH - SBA,58017973353,I-SNA-SBA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/58017973353,https://www.airlines-manager.com/aircraft/show/119525227,1:15,8:59,272,"$439,188.00","$409,680.00","$1,506.18","$52,975.86"
IAH - SBA,58017973354,I-SNA-SBA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/58017973354,https://www.airlines-manager.com/aircraft/show/119525228,3:15,10:59,272,"$439,188.00","$409,680.00","$1,506.18","$52,975.86"
IAH - SBA,58034913987,I-SNA-SBA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/58034913987,https://www.airlines-manager.com/aircraft/show/119525226,11:00,18:44,272,"$439,188.00","$409,680.00","$1,506.18","$52,975.86"
IAH - SBA,58042065461,I-SNA-SBA-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/58042065461,https://www.airlines-manager.com/aircraft/show/119525229,13:00,20:44,272,"$439,188.00","$409,680.00","$1,506.18","$52,975.86"
IAH - SBA,58051861532,I-SNA-SBA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/58051861532,https://www.airlines-manager.com/aircraft/show/119525225,18:15,1:59,272,"$439,188.00","$409,680.00","$1,506.18","$52,975.86"
IAH - SCL,58017973405,I-56A-1 E,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/58017973405,https://www.airlines-manager.com/aircraft/show/106676232,1:30,19:59,648,"$2,300,982.00","$2,144,866.00","$3,309.98","$116,043.25"
IAH - SCL,58024780701,I-56A-3 E,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/58024780701,https://www.airlines-manager.com/aircraft/show/106676234,6:30,0:59,648,"$2,300,982.00","$2,144,866.00","$3,309.98","$116,043.25"
IAH - SCL,58048703746,I-56A-5 E,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/58048703746,https://www.airlines-manager.com/aircraft/show/106676236,17:30,11:59,648,"$2,300,982.00","$2,144,866.00","$3,309.98","$116,043.25"
IAH - SDF,58021655837,I-RIC-SDF-3,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/58021655837,https://www.airlines-manager.com/aircraft/show/107467132,4:00,9:14,310,"$330,138.00","$297,585.00",$959.95,"$56,863.38"
IAH - SDF,58038353899,I-RIC-SDF-2,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/58038353899,https://www.airlines-manager.com/aircraft/show/107467133,12:00,17:14,310,"$330,138.00","$297,585.00",$959.95,"$56,863.38"
IAH - SDF,58051861583,I-RIC-SDF-1,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/58051861583,https://www.airlines-manager.com/aircraft/show/107467134,18:30,23:44,310,"$330,138.00","$297,585.00",$959.95,"$56,863.38"
IAH - SDF,58054747911,I-RIC-SDF-5,ERJ-175,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/58054747911,https://www.airlines-manager.com/aircraft/show/107467211,20:15,1:29,112,"$156,673.00","$135,766.00","$1,212.20","$25,942.55"
IAH - SDF,58057474978,I-RIC-SDF-4,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/58057474978,https://www.airlines-manager.com/aircraft/show/107467131,22:15,3:29,310,"$330,138.00","$297,585.00",$959.95,"$56,863.38"
IAH - SEA,58017973664,I-SEA-DEN-1,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/58017973664,https://www.airlines-manager.com/aircraft/show/105562971,3:30,12:44,338,"$646,653.00","$591,295.00","$1,749.39","$64,039.17"
IAH - SEA,58021655893,I-SEA-DEN-3,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/58021655893,https://www.airlines-manager.com/aircraft/show/105562973,4:30,13:44,338,"$646,653.00","$591,295.00","$1,749.39","$64,039.17"
IAH - SEA,58042065474,I-SEA-DEN-2,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/58042065474,https://www.airlines-manager.com/aircraft/show/105562972,13:00,22:14,338,"$646,653.00","$591,295.00","$1,749.39","$64,039.17"
IAH - SEA,58042065475,I-SEA-DEN-4,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/58042065475,https://www.airlines-manager.com/aircraft/show/105562974,14:00,23:14,338,"$646,653.00","$591,295.00","$1,749.39","$64,039.17"
IAH - SEA,58048703744,I-SEA-DEN-5,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/58048703744,https://www.airlines-manager.com/aircraft/show/105562975,17:30,2:44,338,"$646,653.00","$591,295.00","$1,749.39","$64,039.17"
IAH - SEA,58057474871,I-SEA-DEN-6,ERJ-175,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/58057474871,https://www.airlines-manager.com/aircraft/show/105601215,21:15,6:44,112,"$280,372.00","$242,484.00","$2,165.04","$25,569.49"
IAH - SJC,58017973628,I-SJC-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/58017973628,https://www.airlines-manager.com/aircraft/show/96694086,3:00,11:14,310,"$533,552.00","$487,923.00","$1,573.95","$59,261.90"
IAH - SJC,58034914076,I-SJC-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/58034914076,https://www.airlines-manager.com/aircraft/show/96692491,11:00,19:14,310,"$533,552.00","$487,923.00","$1,573.95","$59,261.90"
IAH - SJC,58042065774,I-SJC-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/58042065774,https://www.airlines-manager.com/aircraft/show/96692343,14:30,22:44,310,"$533,552.00","$487,923.00","$1,573.95","$59,261.90"
IAH - SJC,58059513355,I-SJC-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/58059513355,https://www.airlines-manager.com/aircraft/show/96691558,23:00,7:14,310,"$533,552.00","$487,923.00","$1,573.95","$59,261.90"
IAH - SJC,58059513356,I-SJC-PWM-5 B,A319-100,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/58059513356,https://www.airlines-manager.com/aircraft/show/106014350,23:30,7:44,198,"$401,349.00","$364,777.00","$1,842.31","$44,304.90"
IAH - SJD,58017973482,I-YOW-SJD-4,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/58017973482,https://www.airlines-manager.com/aircraft/show/114266975,1:45,7:44,320,"$382,514.00","$343,676.00","$1,073.99","$57,438.89"
IAH - SJD,58021655965,I-YOW-SJD-3,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/58021655965,https://www.airlines-manager.com/aircraft/show/113250059,5:15,11:14,320,"$382,514.00","$343,676.00","$1,073.99","$57,438.89"
IAH - SJD,58038353875,I-YOW-SJD-2,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/58038353875,https://www.airlines-manager.com/aircraft/show/113114108,12:00,17:59,320,"$382,514.00","$343,676.00","$1,073.99","$57,438.89"
IAH - SJD,58045346302,I-YOW-SJD-1,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/58045346302,https://www.airlines-manager.com/aircraft/show/114266974,16:00,21:59,320,"$382,514.00","$343,676.00","$1,073.99","$57,438.89"
IAH - SJD,58057474849,I-YOW-SJD-5,ERJ-175,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/58057474849,https://www.airlines-manager.com/aircraft/show/105099862,21:00,2:59,112,"$178,332.00","$155,986.00","$1,392.73","$26,070.08"
IAH - SLC,58017973604,I-SLC-CLT-2,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/58017973604,https://www.airlines-manager.com/aircraft/show/93094698,2:45,9:29,310,"$425,998.00","$382,511.00","$1,233.91","$56,808.56"
IAH - SLC,58021655938,I-SLC-CLT-6,ERJ-175,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/58021655938,https://www.airlines-manager.com/aircraft/show/93100455,4:45,11:29,112,"$200,317.00","$172,140.00","$1,536.96","$25,565.35"
IAH - SLC,58034913909,I-SLC-CLT-1,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/58034913909,https://www.airlines-manager.com/aircraft/show/93094699,10:00,16:44,310,"$425,998.00","$382,511.00","$1,233.91","$56,808.56"
IAH - SLC,58038353894,I-SLC-CLT-5,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/58038353894,https://www.airlines-manager.com/aircraft/show/93094695,12:00,18:44,310,"$425,998.00","$382,511.00","$1,233.91","$56,808.56"
IAH - SLC,58045346239,I-SLC-CLT-4,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/58045346239,https://www.airlines-manager.com/aircraft/show/93094696,15:15,21:59,310,"$425,998.00","$382,511.00","$1,233.91","$56,808.56"
IAH - SLC,58057474833,I-SLC-CLT-3,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/58057474833,https://www.airlines-manager.com/aircraft/show/93094697,21:00,3:44,310,"$425,998.00","$382,511.00","$1,233.91","$56,808.56"
IAH - SMF,58017973550,I-SMF-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/58017973550,https://www.airlines-manager.com/aircraft/show/99093335,2:15,10:29,320,"$532,190.00","$482,961.00","$1,509.25","$58,659.23"
IAH - SMF,58021655883,I-SMF-CVG-5 B,A319-100,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/58021655883,https://www.airlines-manager.com/aircraft/show/106499070,4:15,12:29,198,"$400,763.00","$365,374.00","$1,845.32","$44,377.41"
IAH - SMF,58042065516,I-SMF-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/58042065516,https://www.airlines-manager.com/aircraft/show/99093332,13:00,21:14,320,"$532,190.00","$482,961.00","$1,509.25","$58,659.23"
IAH - SMF,58048703650,I-SMF-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/58048703650,https://www.airlines-manager.com/aircraft/show/99093333,16:45,0:59,320,"$532,190.00","$482,961.00","$1,509.25","$58,659.23"
IAH - SMF,58054747941,I-SMF-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/58054747941,https://www.airlines-manager.com/aircraft/show/99093334,20:45,4:59,320,"$532,190.00","$482,961.00","$1,509.25","$58,659.23"
IAH - SNA,58017973468,I-SNA-SBA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/58017973468,https://www.airlines-manager.com/aircraft/show/119525226,1:45,8:59,272,"$423,610.00","$394,459.00","$1,450.22","$54,533.50"
IAH - SNA,58017973469,I-SYR-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/58017973469,https://www.airlines-manager.com/aircraft/show/119525249,2:45,9:59,112,"$220,728.00","$195,433.00","$1,744.94","$27,018.39"
IAH - SNA,58017973470,I-SNA-SBA-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/58017973470,https://www.airlines-manager.com/aircraft/show/119525229,3:45,10:59,272,"$423,610.00","$394,459.00","$1,450.22","$54,533.50"
IAH - SNA,58034913986,I-SNA-SBA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/58034913986,https://www.airlines-manager.com/aircraft/show/119525225,11:00,18:14,272,"423,610$","394,459$","$1,450.22","$54,533.50"
IAH - SNA,58051861485,I-SNA-SBA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/58051861485,https://www.airlines-manager.com/aircraft/show/119525227,18:00,1:14,272,"423,610$","394,459$","$1,450.22","$54,533.50"
IAH - SNA,58054747837,I-SNA-SBA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/58054747837,https://www.airlines-manager.com/aircraft/show/119525228,20:00,3:14,272,"423,610$","394,459$","$1,450.22","$54,533.50"
IAH - SRQ,58017973344,I-ILM-SRQ-3,A321-200,https://www.airlines-manager.com/network/showline/50666456,https://www.airlines-manager.com/network/showflight/58017973344,https://www.airlines-manager.com/aircraft/show/120452416,1:00,6:14,310,"332,420$","301,728$",$973.32,"$57,655.03"
IAH - SRQ,58031343183,I-ILM-SRQ-2,A321-200,https://www.airlines-manager.com/network/showline/50666456,https://www.airlines-manager.com/network/showflight/58031343183,https://www.airlines-manager.com/aircraft/show/120452417,9:00,14:14,310,"332,420$","301,728$",$973.32,"$57,655.03"
IAH - SRQ,58042065765,I-ILM-SRQ-1,A321-200,https://www.airlines-manager.com/network/showline/50666456,https://www.airlines-manager.com/network/showflight/58042065765,https://www.airlines-manager.com/aircraft/show/120452418,14:15,19:29,310,"$332,420.00","$301,728.00",$973.32,"$57,655.03"
IAH - SRQ,58054747863,I-ILM-SRQ-4,A321-200,https://www.airlines-manager.com/network/showline/50666456,https://www.airlines-manager.com/network/showflight/58054747863,https://www.airlines-manager.com/aircraft/show/120452415,20:00,1:14,310,"$332,420.00","$301,728.00",$973.32,"$57,655.03"
IAH - STL,58017973376,I-CLE-STL-4,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/58017973376,https://www.airlines-manager.com/aircraft/show/88725601,1:15,5:59,310,"$300,923.00","$268,652.00",$866.62,"$56,757.46"
IAH - STL,58031343102,I-CLE-STL-3,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/58031343102,https://www.airlines-manager.com/aircraft/show/103600702,8:15,12:59,310,"$300,923.00","$268,652.00",$866.62,"$56,757.46"
IAH - STL,58042065697,I-CLE-STL-2,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/58042065697,https://www.airlines-manager.com/aircraft/show/103600701,14:00,18:44,310,"$300,923.00","$268,652.00",$866.62,"$56,757.46"
IAH - STL,58045346226,I-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/58045346226,https://www.airlines-manager.com/aircraft/show/96990010,15:00,19:44,112,"$143,002.00","$122,472.00","$1,093.50","$25,874.37"
IAH - STL,58054747897,I-CLE-STL-1,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/58054747897,https://www.airlines-manager.com/aircraft/show/103600700,20:15,0:59,310,"$300,923.00","$268,652.00",$866.62,"$56,757.46"
IAH - STL,58057474923,I-CLE-STL-5 B,A319-100,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/58057474923,https://www.airlines-manager.com/aircraft/show/110582844,21:45,2:29,198,"$228,609.00","$202,763.00","$1,024.06","$42,837.25"
IAH - SYR,58017973127,I-SYR-ROC-2,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/58017973127,https://www.airlines-manager.com/aircraft/show/119525223,0:15,7:44,320,"$476,176.00","$431,891.00","$1,349.66","$57,713.72"
IAH - SYR,58034914059,I-SYR-ROC-1,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/58034914059,https://www.airlines-manager.com/aircraft/show/119525224,11:00,18:29,320,"$476,176.00","$431,891.00","$1,349.66","$57,713.72"
IAH - SYR,58038353885,I-SYR-ROC-4,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/58038353885,https://www.airlines-manager.com/aircraft/show/119525221,12:00,19:29,320,"$476,176.00","$431,891.00","$1,349.66","$57,713.72"
IAH - SYR,58048703692,I-SYR-ROC-3,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/58048703692,https://www.airlines-manager.com/aircraft/show/119525222,17:00,0:29,320,"$476,176.00","$431,891.00","$1,349.66","$57,713.72"
IAH - SYR,58051861710,I-SYR-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/58051861710,https://www.airlines-manager.com/aircraft/show/119525249,19:15,2:44,112,"$225,013.00","$198,807.00","$1,775.06","$26,566.64"
IAH - TPA,58021655869,I-SLC-CLT-1,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/58021655869,https://www.airlines-manager.com/aircraft/show/93094699,4:15,9:29,310,"$327,531.00","$292,309.00",$942.93,"$55,855.22"
IAH - TPA,58024780696,I-SLC-CLT-5,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/58024780696,https://www.airlines-manager.com/aircraft/show/93094695,6:15,11:29,310,"$327,531.00","$292,309.00",$942.93,"$55,855.22"
IAH - TPA,58034913906,I-SLC-CLT-4,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/58034913906,https://www.airlines-manager.com/aircraft/show/93094696,10:00,15:14,310,"$327,531.00","$292,309.00",$942.93,"$55,855.22"
IAH - TPA,58045346263,I-SLC-CLT-3,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/58045346263,https://www.airlines-manager.com/aircraft/show/93094697,15:45,20:59,310,"$327,531.00","$292,309.00",$942.93,"$55,855.22"
IAH - TPA,58057474889,I-SLC-CLT-2,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/58057474889,https://www.airlines-manager.com/aircraft/show/93094698,21:30,2:44,310,"$327,531.00","$292,309.00",$942.93,"$55,855.22"
IAH - TPA,58059513424,I-SLC-CLT-6,ERJ-175,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/58059513424,https://www.airlines-manager.com/aircraft/show/93100455,23:30,4:44,112,"$155,657.00","$133,151.00","$1,188.85","$25,442.87"
IAH - TUL,58017973189,I-BTV-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/58017973189,https://www.airlines-manager.com/aircraft/show/82543907,0:30,4:14,112,"$93,962.00","$77,748.00",$694.18,"$20,825.36"
IAH - TUL,58017973190,I-BTV-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/58017973190,https://www.airlines-manager.com/aircraft/show/114373409,3:30,7:14,310,"$203,562.00","$177,791.00",$573.52,"$47,622.59"
IAH - TUL,58034913820,I-BTV-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/58034913820,https://www.airlines-manager.com/aircraft/show/114373410,9:45,13:29,310,"$203,562.00","$177,791.00",$573.52,"$47,622.59"
IAH - TUL,58045346197,I-BTV-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/58045346197,https://www.airlines-manager.com/aircraft/show/113994196,15:00,18:44,310,"$203,562.00","$177,791.00",$573.52,"$47,622.59"
IAH - TUL,58054747896,I-BTV-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/58054747896,https://www.airlines-manager.com/aircraft/show/86385103,20:15,23:59,310,"$203,562.00","$177,791.00",$573.52,"$47,622.59"
IAH - TUS,58024780633,I-PIT-RDU-1,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/58024780633,https://www.airlines-manager.com/aircraft/show/100684074,5:30,11:14,310,"$360,113.00","$326,034.00","$1,051.72","$56,866.40"
IAH - TUS,58034913963,I-PIT-RDU-5 B,A319-100,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/58034913963,https://www.airlines-manager.com/aircraft/show/110582845,10:15,15:59,198,"$273,000.00","$245,697.00","$1,240.89","$42,854.13"
IAH - TUS,58038353834,I-PIT-RDU-4,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/58038353834,https://www.airlines-manager.com/aircraft/show/100684071,11:30,17:14,310,"$360,113.00","$326,034.00","$1,051.72","$56,866.40"
IAH - TUS,58048703698,I-PIT-RDU-3,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/58048703698,https://www.airlines-manager.com/aircraft/show/100684072,17:00,22:44,310,"$360,113.00","$326,034.00","$1,051.72","$56,866.40"
IAH - TUS,58059513396,I-PIT-RDU-2,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/58059513396,https://www.airlines-manager.com/aircraft/show/100684073,23:15,4:59,310,"$360,113.00","$326,034.00","$1,051.72","$56,866.40"
IAH - TYS,58017973559,I-GRR-MSN-2,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/58017973559,https://www.airlines-manager.com/aircraft/show/117273347,2:15,7:14,310,"$326,466.00","$296,307.00",$955.83,"$59,459.60"
IAH - TYS,58031343136,I-GRR-MSN-1,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/58031343136,https://www.airlines-manager.com/aircraft/show/117273348,8:30,13:29,310,"$326,466.00","$296,307.00",$955.83,"$59,459.60"
IAH - TYS,58034914098,I-GRR-MSN-4,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/58034914098,https://www.airlines-manager.com/aircraft/show/117273345,11:00,15:59,310,"$326,466.00","$296,307.00",$955.83,"$59,459.60"
IAH - TYS,58054747900,I-GRR-MSN-3,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/58054747900,https://www.airlines-manager.com/aircraft/show/117273346,20:15,1:14,310,"$326,466.00","$296,307.00",$955.83,"$59,459.60"
IAH - UIO,58017973188,I-84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/58017973188,https://www.airlines-manager.com/aircraft/show/89124076,0:30,11:14,932,"$1,803,944.00","$1,648,550.00","$1,768.83","$153,591.61"
IAH - UIO,58042065619,I-84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/58042065619,https://www.airlines-manager.com/aircraft/show/88905141,13:15,23:59,932,"$1,803,944.00","$1,648,550.00","$1,768.83","$153,591.61"
IAH - YEG,58017973400,I-YEG-BUR-5,A321neo,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/58017973400,https://www.airlines-manager.com/aircraft/show/117273340,1:30,10:44,338,"$643,713.00","$597,097.00","$1,766.56","$64,667.55"
IAH - YEG,58031343135,I-YEG-BUR-2,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/58031343135,https://www.airlines-manager.com/aircraft/show/117273343,8:30,17:44,310,"$594,387.00","$545,454.00","$1,759.53","$59,074.44"
IAH - YEG,58034914097,I-YEG-BUR-1,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/58034914097,https://www.airlines-manager.com/aircraft/show/117273344,11:00,20:14,310,"$594,387.00","$545,454.00","$1,759.53","$59,074.44"
IAH - YEG,58048703737,I-YEG-BUR-4,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/58048703737,https://www.airlines-manager.com/aircraft/show/117273341,17:15,2:29,310,"$594,387.00","$545,454.00","$1,759.53","$59,074.44"
IAH - YEG,58051861521,I-YEG-BUR-3,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/58051861521,https://www.airlines-manager.com/aircraft/show/117273342,18:00,3:14,310,"$594,387.00","$545,454.00","$1,759.53","$59,074.44"
IAH - YOW,58017973652,I-YOW-SJD-2,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/58017973652,https://www.airlines-manager.com/aircraft/show/113114108,3:15,11:14,320,"$510,982.00","$463,325.00","$1,447.89","$58,036.53"
IAH - YOW,58027885534,I-YOW-SJD-1,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/58027885534,https://www.airlines-manager.com/aircraft/show/114266974,8:00,15:59,320,"$510,982.00","$463,325.00","$1,447.89","$58,036.53"
IAH - YOW,58042065607,I-YOW-SJD-5,ERJ-175,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/58042065607,https://www.airlines-manager.com/aircraft/show/105099862,13:00,20:59,112,"$239,404.00","$211,199.00","$1,885.71","$26,454.99"
IAH - YOW,58048703775,I-YOW-SJD-4,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/58048703775,https://www.airlines-manager.com/aircraft/show/114266975,17:45,1:44,320,"$510,982.00","$463,325.00","$1,447.89","$58,036.53"
IAH - YOW,58057474859,I-YOW-SJD-3,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/58057474859,https://www.airlines-manager.com/aircraft/show/113250059,21:15,5:14,320,"$510,982.00","$463,325.00","$1,447.89","$58,036.53"
IAH - YUL,58017973194,I-YYC-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/58017973194,https://www.airlines-manager.com/aircraft/show/114266980,0:45,8:44,400,"$685,428.00","$627,487.00","$1,568.72","$78,599.62"
IAH - YUL,58017973195,I-YYC-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/58017973195,https://www.airlines-manager.com/aircraft/show/114266979,2:00,9:59,400,"$685,428.00","$627,487.00","$1,568.72","$78,599.62"
IAH - YUL,58038353862,I-YYC-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/58038353862,https://www.airlines-manager.com/aircraft/show/114266978,12:00,19:59,400,"685,428$","627,487$","$1,568.72","$78,599.62"
IAH - YUL,58054747939,I-YYC-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/58054747939,https://www.airlines-manager.com/aircraft/show/114266977,20:45,4:44,400,"685,428$","627,487$","$1,568.72","$78,599.62"
IAH - YVR,58017973235,I-MEX-YYZ-1,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/58017973235,https://www.airlines-manager.com/aircraft/show/97076946,1:00,10:29,400,"777,801$","709,739$","$1,774.35","$74,840.67"
IAH - YVR,58021655814,I-MEX-YYZ-4,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/58021655814,https://www.airlines-manager.com/aircraft/show/97076943,4:00,13:29,400,"777,801$","709,739$","$1,774.35","$74,840.67"
IAH - YVR,58042065490,I-MEX-YYZ-3,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/58042065490,https://www.airlines-manager.com/aircraft/show/97076944,13:00,22:29,400,"777,801$","709,739$","$1,774.35","$74,840.67"
IAH - YVR,58045346336,I-MEX-YYZ-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/58045346336,https://www.airlines-manager.com/aircraft/show/97026605,16:00,1:44,136,"286,977$","251,069$","$1,846.10","$25,794.76"
IAH - YVR,58054747846,I-MEX-YYZ-2,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/58054747846,https://www.airlines-manager.com/aircraft/show/97076945,20:00,5:29,400,"777,801$","709,739$","$1,774.35","$74,840.67"
IAH - YVR,58059513342,I-MEX-YYZ-5,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/58059513342,https://www.airlines-manager.com/aircraft/show/97076942,23:00,8:29,400,"777,801$","709,739$","$1,774.35","$74,840.67"
IAH - YYC,58017973357,I-YYC-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/58017973357,https://www.airlines-manager.com/aircraft/show/114266978,1:15,9:59,400,"746,053$","683,301$","$1,708.25","$78,240.57"
IAH - YYC,58038353861,I-YYC-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/58038353861,https://www.airlines-manager.com/aircraft/show/114266977,12:00,20:44,400,"746,053$","683,301$","$1,708.25","$78,240.57"
IAH - YYC,58045346287,I-YYC-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/58045346287,https://www.airlines-manager.com/aircraft/show/114266980,16:00,0:44,400,"746,053$","683,301$","$1,708.25","$78,240.57"
IAH - YYC,58048703723,I-YYC-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/58048703723,https://www.airlines-manager.com/aircraft/show/114266979,17:15,1:59,400,"746,053$","683,301$","$1,708.25","$78,240.57"
IAH - YYZ,58017973671,I-MEX-YYZ-3,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/58017973671,https://www.airlines-manager.com/aircraft/show/97076944,3:30,10:29,400,"574,924$","516,276$","$1,290.69","$73,929.74"
IAH - YYZ,58024780728,I-MEX-YYZ-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/58024780728,https://www.airlines-manager.com/aircraft/show/97026605,6:45,13:44,136,"212,224$","181,681$","$1,335.89","$26,016.37"
IAH - YYZ,58042065491,I-MEX-YYZ-2,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/58042065491,https://www.airlines-manager.com/aircraft/show/97076945,13:00,19:59,400,"$574,924.00","$516,276.00","$1,290.69","$73,929.74"
IAH - YYZ,58045346285,I-MEX-YYZ-5,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/58045346285,https://www.airlines-manager.com/aircraft/show/97076942,16:00,22:59,400,"$574,924.00","$516,276.00","$1,290.69","$73,929.74"
IAH - YYZ,58051861495,I-MEX-YYZ-1,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/58051861495,https://www.airlines-manager.com/aircraft/show/97076946,18:00,0:59,400,"$574,924.00","$516,276.00","$1,290.69","$73,929.74"
IAH - YYZ,58057474821,I-MEX-YYZ-4,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/58057474821,https://www.airlines-manager.com/aircraft/show/97076943,21:00,3:59,400,"$574,924.00","$516,276.00","$1,290.69","$73,929.74"
MIA - ABQ,58017973379,M-IAD-TUS-1,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/58017973379,https://www.airlines-manager.com/aircraft/show/97556721,1:15,9:59,310,"$549,643.00","$501,802.00","$1,618.72","$57,458.24"
MIA - ABQ,58021655870,M-IAD-TUS-4,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/58021655870,https://www.airlines-manager.com/aircraft/show/97556718,4:15,12:59,310,"$549,643.00","$501,802.00","$1,618.72","$57,458.24"
MIA - ABQ,58034913910,M-IAD-TUS-3,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/58034913910,https://www.airlines-manager.com/aircraft/show/97556719,10:00,18:44,310,"$549,643.00","$501,802.00","$1,618.72","$57,458.24"
MIA - ABQ,58054747792,M-IAD-TUS-2,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/58054747792,https://www.airlines-manager.com/aircraft/show/97556720,19:30,4:14,310,"$549,643.00","$501,802.00","$1,618.72","$57,458.24"
MIA - ABQ,58059513291,M-IAD-TUS-5,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/58059513291,https://www.airlines-manager.com/aircraft/show/97556716,22:30,7:14,310,"$549,643.00","$501,802.00","$1,618.72","$57,458.24"
MIA - ACC,58042065770,M-84B-2 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/58042065770,https://www.airlines-manager.com/aircraft/show/106676226,14:15,11:59,962,"$3,584,617.00","$3,274,304.00","$3,403.64","$150,658.16"
MIA - ACC,58059513336,M-84B-4 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/58059513336,https://www.airlines-manager.com/aircraft/show/106676228,22:45,20:29,962,"$3,584,617.00","$3,274,304.00","$3,403.64","$150,658.16"
MIA - ALB,58017973673,M-DSM-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/58017973673,https://www.airlines-manager.com/aircraft/show/113101233,3:30,10:14,320,"$429,480.00","$388,106.00","$1,212.83","$57,639.50"
MIA - ALB,58042065530,M-DSM-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/58042065530,https://www.airlines-manager.com/aircraft/show/113101230,13:00,19:44,320,"429,480$","388,106$","$1,212.83","$57,639.50"
MIA - ALB,58045346337,M-DSM-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/58045346337,https://www.airlines-manager.com/aircraft/show/100049776,16:00,22:59,112,"202,975$","178,712$","$1,595.64","$25,591.22"
MIA - ALB,58054747890,M-DSM-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/58054747890,https://www.airlines-manager.com/aircraft/show/111064081,20:15,2:59,320,"429,480$","388,106$","$1,212.83","$57,639.50"
MIA - ALB,58059513392,M-DSM-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/58059513392,https://www.airlines-manager.com/aircraft/show/113101228,23:15,5:59,320,"429,480$","388,106$","$1,212.83","$57,639.50"
MIA - ALG,58048703717,M-84B-7 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/58048703717,https://www.airlines-manager.com/aircraft/show/106676231,17:00,12:29,962,"3,254,925$","2,969,393$","$3,086.69","$152,406.83"
MIA - ALG,58054747933,M-84B-5 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/58054747933,https://www.airlines-manager.com/aircraft/show/106676229,20:30,15:59,962,"3,254,925$","2,969,393$","$3,086.69","$152,406.83"
MIA - ANU,58024780710,M-ANU-SXM-3 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/58024780710,https://www.airlines-manager.com/aircraft/show/110114297,6:30,13:44,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ANU,58031343140,M-ANU-SXM-4 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/58031343140,https://www.airlines-manager.com/aircraft/show/110114298,8:30,15:44,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ANU,58038353911,M-ANU-SXM-1 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/58038353911,https://www.airlines-manager.com/aircraft/show/110114295,12:00,19:14,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ANU,58042065600,M-ANU-SXM-2 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/58042065600,https://www.airlines-manager.com/aircraft/show/110114296,13:00,20:14,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ANU,58048703642,M-ANU-SXM-6 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/58048703642,https://www.airlines-manager.com/aircraft/show/110114300,16:30,23:44,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ANU,58059513423,M-ANU-SXM-5 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/58059513423,https://www.airlines-manager.com/aircraft/show/110114299,23:30,6:44,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ATL,58038353860,M-LAX-DEN-4,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/58038353860,https://www.airlines-manager.com/aircraft/show/91126652,12:00,16:29,400,"$366,475.00","$302,230.00",$755.58,"$67,411.90"
MIA - ATL,58042065489,M-LAX-DEN-2,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/58042065489,https://www.airlines-manager.com/aircraft/show/91126650,13:00,17:29,400,"$366,475.00","$302,230.00",$755.58,"$67,411.90"
MIA - ATL,58054747773,M-LAX-DEN-1,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/58054747773,https://www.airlines-manager.com/aircraft/show/91126649,19:30,23:59,400,"$366,475.00","$302,230.00",$755.58,"$67,411.90"
MIA - ATL,58057474820,M-LAX-DEN-3,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/58057474820,https://www.airlines-manager.com/aircraft/show/91126651,21:00,1:29,400,"366,475$","302,230$",$755.58,"$67,411.90"
MIA - AUA,58017973622,M-BGI-CUR-1,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/58017973622,https://www.airlines-manager.com/aircraft/show/107121795,3:00,9:29,320,"405,459$","365,639$","$1,142.62","$56,396.76"
MIA - AUA,58021655901,M-BGI-CUR-4,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/58021655901,https://www.airlines-manager.com/aircraft/show/107121798,4:30,10:59,320,"405,459$","365,639$","$1,142.62","$56,396.76"
MIA - AUA,58034914043,M-BGI-CUR-3,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/58034914043,https://www.airlines-manager.com/aircraft/show/107121797,11:00,17:29,320,"405,459$","365,639$","$1,142.62","$56,396.76"
MIA - AUA,58048703772,M-BGI-CUR-2,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/58048703772,https://www.airlines-manager.com/aircraft/show/107121796,17:45,0:14,320,"$405,459.00","$365,639.00","$1,142.62","$56,396.76"
MIA - AUA,58057474912,M-BGI-CUR-5,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/58057474912,https://www.airlines-manager.com/aircraft/show/107121799,21:45,4:14,245,"319,341$","282,387$","$1,152.60","$43,555.84"
MIA - AUS,58017973598,M-AUS-PIT-2,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/58017973598,https://www.airlines-manager.com/aircraft/show/99920625,2:45,9:14,320,"403,957$","360,258$","$1,125.81","$55,566.79"
MIA - AUS,58034913857,M-AUS-PIT-1,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/58034913857,https://www.airlines-manager.com/aircraft/show/99920626,10:00,16:29,320,"403,957$","360,258$","$1,125.81","$55,566.79"
MIA - AUS,58042065746,M-AUS-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/58042065746,https://www.airlines-manager.com/aircraft/show/82323689,14:00,20:29,112,"190,525$","165,466$","$1,477.38","$25,521.75"
MIA - AUS,58045346131,M-AUS-PIT-4,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/58045346131,https://www.airlines-manager.com/aircraft/show/99920623,14:45,21:14,320,"$403,957.00","$360,258.00","$1,125.81","$55,566.79"
MIA - AUS,58054747942,M-AUS-PIT-3,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/58054747942,https://www.airlines-manager.com/aircraft/show/99920624,20:45,3:14,320,"403,957$","360,258$","$1,125.81","$55,566.79"
MIA - BDA,58017973635,M-PUJ-BDA-1 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/58017973635,https://www.airlines-manager.com/aircraft/show/104034457,3:00,9:14,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDA,58017973636,M-PUJ-BDA-3 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/58017973636,https://www.airlines-manager.com/aircraft/show/104034459,3:45,9:59,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDA,58034913935,M-PUJ-BDA-4 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/58034913935,https://www.airlines-manager.com/aircraft/show/104034460,10:00,16:14,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDA,58034913936,M-PUJ-BDA-6 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/58034913936,https://www.airlines-manager.com/aircraft/show/99326789,11:00,17:14,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDA,58045346269,M-PUJ-BDA-5 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/58045346269,https://www.airlines-manager.com/aircraft/show/104034461,15:45,21:59,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDA,58057474870,M-PUJ-BDA-2 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/58057474870,https://www.airlines-manager.com/aircraft/show/104034458,21:15,3:29,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDL,58017973625,M-BDL-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/58017973625,https://www.airlines-manager.com/aircraft/show/107763565,3:00,9:44,320,"$428,052.00","$385,771.00","$1,205.53","$57,292.72"
MIA - BDL,58027885549,M-BDL-SAT-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/58027885549,https://www.airlines-manager.com/aircraft/show/107467213,8:00,14:44,112,"$201,310.00","$176,683.00","$1,577.53","$26,240.05"
MIA - BDL,58042065636,M-BDL-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/58042065636,https://www.airlines-manager.com/aircraft/show/107763561,13:45,20:29,320,"$428,052.00","$385,771.00","$1,205.53","$57,292.72"
MIA - BDL,58042065637,M-BDL-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/58042065637,https://www.airlines-manager.com/aircraft/show/107763566,14:00,20:44,320,"$428,052.00","$385,771.00","$1,205.53","$57,292.72"
MIA - BDL,58054747924,M-BDL-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/58054747924,https://www.airlines-manager.com/aircraft/show/107763562,20:30,3:14,320,"$428,052.00","$385,771.00","$1,205.53","$57,292.72"
MIA - BFF,58017973208,M-PSP-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/58017973208,https://www.airlines-manager.com/aircraft/show/116789634,0:45,9:29,320,"$556,654.00","$506,491.00","$1,582.78","$57,995.15"
MIA - BFF,58017973209,M-PSP-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/58017973209,https://www.airlines-manager.com/aircraft/show/116789632,1:00,9:44,320,"$556,654.00","$506,491.00","$1,582.78","$57,995.15"
MIA - BFF,58034913877,M-PSP-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/58034913877,https://www.airlines-manager.com/aircraft/show/116789633,10:00,18:44,320,"$556,654.00","$506,491.00","$1,582.78","$57,995.15"
MIA - BFF,58042065534,M-PSP-BFF-5,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/58042065534,https://www.airlines-manager.com/aircraft/show/116789630,13:00,21:44,320,"$556,654.00","$506,491.00","$1,582.78","$57,995.15"
MIA - BFF,58054747946,M-PSP-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/58054747946,https://www.airlines-manager.com/aircraft/show/116789631,20:45,5:29,320,"$556,654.00","$506,491.00","$1,582.78","$57,995.15"
MIA - BGI,58017973599,M-BGI-CUR-2,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/58017973599,https://www.airlines-manager.com/aircraft/show/107121796,2:45,10:59,320,"$518,059.00","$469,235.00","$1,466.36","$56,992.11"
MIA - BGI,58024780719,M-BGI-CUR-5,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/58024780719,https://www.airlines-manager.com/aircraft/show/107121799,6:45,14:59,320,"$518,059.00","$469,235.00","$1,466.36","$56,992.11"
MIA - BGI,58038353871,M-BGI-CUR-1,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/58038353871,https://www.airlines-manager.com/aircraft/show/107121795,12:00,20:14,320,"$518,059.00","$469,235.00","$1,466.36","$56,992.11"
MIA - BGI,58042065626,M-BGI-CUR-4,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/58042065626,https://www.airlines-manager.com/aircraft/show/107121798,13:30,21:44,320,"$518,059.00","$469,235.00","$1,466.36","$56,992.11"
MIA - BGI,58054747851,M-BGI-CUR-3,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/58054747851,https://www.airlines-manager.com/aircraft/show/107121797,20:00,4:14,320,"$518,059.00","$469,235.00","$1,466.36","$56,992.11"
MIA - BHM,58017973694,M-CID-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/58017973694,https://www.airlines-manager.com/aircraft/show/116789651,3:45,8:29,310,"$302,720.00","$273,542.00",$882.39,"$57,790.56"
MIA - BHM,58034913923,M-CID-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/58034913923,https://www.airlines-manager.com/aircraft/show/116789652,10:00,14:44,310,"$302,720.00","$273,542.00",$882.39,"$57,790.56"
MIA - BHM,58048703736,M-CID-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/58048703736,https://www.airlines-manager.com/aircraft/show/116789653,17:15,21:59,310,"$302,720.00","$273,542.00",$882.39,"$57,790.56"
MIA - BHM,58059513330,M-CID-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/58059513330,https://www.airlines-manager.com/aircraft/show/116789650,22:45,3:29,310,"$302,720.00","$273,542.00",$882.39,"$57,790.56"
MIA - BIL,58034913874,M-BIL-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/58034913874,https://www.airlines-manager.com/aircraft/show/116789629,10:00,20:14,320,"634,212$","578,720$","$1,808.50","$56,552.44"
MIA - BIL,58038353882,M-BIL-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/58038353882,https://www.airlines-manager.com/aircraft/show/116789628,12:00,22:14,320,"$634,212.00","$578,720.00","$1,808.50","$56,552.44"
MIA - BIL,58042065678,M-BIL-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/58042065678,https://www.airlines-manager.com/aircraft/show/116789627,14:00,0:14,320,"$634,212.00","$578,720.00","$1,808.50","$56,552.44"
MIA - BIL,58057474881,M-BIL-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/58057474881,https://www.airlines-manager.com/aircraft/show/116789626,21:30,7:44,320,"$634,212.00","$578,720.00","$1,808.50","$56,552.44"
MIA - BIL,58060881903,M-BIL-BZN-5,ERJ-175,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/58060881903,https://www.airlines-manager.com/aircraft/show/116042637,23:45,9:59,112,"$298,004.00","$264,192.00","$2,358.86","$25,816.81"
MIA - BNA,58017973225,M-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/58017973225,https://www.airlines-manager.com/aircraft/show/103534663,0:45,5:59,112,"$157,714.00","$136,236.00","$1,216.39","$26,032.36"
MIA - BNA,58017973226,M-BOI-BNA-4,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/58017973226,https://www.airlines-manager.com/aircraft/show/103775657,1:15,6:29,320,"$332,050.00","$293,799.00",$918.12,"$56,139.94"
MIA - BNA,58021655924,M-BOI-BNA-3,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/58021655924,https://www.airlines-manager.com/aircraft/show/104020880,4:45,9:59,320,"$332,050.00","$293,799.00",$918.12,"$56,139.94"
MIA - BNA,58034913865,M-BOI-BNA-2,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/58034913865,https://www.airlines-manager.com/aircraft/show/104022609,10:00,15:14,320,"$332,050.00","$293,799.00",$918.12,"$56,139.94"
MIA - BNA,58038353920,M-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/58038353920,https://www.airlines-manager.com/aircraft/show/103534663,12:00,17:14,112,"$157,714.00","$136,236.00","$1,216.39","$26,032.36"
MIA - BNA,58057474857,M-BOI-BNA-1,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/58057474857,https://www.airlines-manager.com/aircraft/show/104133006,21:15,2:29,320,"$332,050.00","$293,799.00",$918.12,"$56,139.94"
MIA - BOI,58017973511,M-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/58017973511,https://www.airlines-manager.com/aircraft/show/106339154,1:45,12:59,198,"$525,442.00","$481,573.00","$2,432.19","$42,870.00"
MIA - BOI,58034913866,M-BOI-BNA-1,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/58034913866,https://www.airlines-manager.com/aircraft/show/104133006,10:00,21:14,320,"$698,526.00","$638,374.00","$1,994.92","$56,828.55"
MIA - BOI,58042065669,M-BOI-BNA-4,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/58042065669,https://www.airlines-manager.com/aircraft/show/103775657,14:00,1:14,320,"$698,526.00","$638,374.00","$1,994.92","$56,828.55"
MIA - BOI,58048703751,M-BOI-BNA-3,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/58048703751,https://www.airlines-manager.com/aircraft/show/104020880,17:30,4:44,320,"$698,526.00","$638,374.00","$1,994.92","$56,828.55"
MIA - BOI,58059513312,M-BOI-BNA-2,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/58059513312,https://www.airlines-manager.com/aircraft/show/104022609,22:45,9:59,320,"$698,526.00","$638,374.00","$1,994.92","$56,828.55"
MIA - BOS,58017973533,M-SJU-BOS-5,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/58017973533,https://www.airlines-manager.com/aircraft/show/91352059,2:00,8:59,310,"$445,815.00","$401,406.00","$1,294.86","$57,480.57"
MIA - BOS,58021655952,M-SJU-BOS-1,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/58021655952,https://www.airlines-manager.com/aircraft/show/91352063,5:00,11:59,310,"$445,815.00","$401,406.00","$1,294.86","$57,480.57"
MIA - BOS,58034914115,M-SJU-BOS-4,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/58034914115,https://www.airlines-manager.com/aircraft/show/91352060,11:15,18:14,310,"$445,815.00","$401,406.00","$1,294.86","$57,480.57"
MIA - BOS,58048703632,M-SJU-BOS-2,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/58048703632,https://www.airlines-manager.com/aircraft/show/91352062,16:30,23:29,310,"$445,815.00","$401,406.00","$1,294.86","$57,480.57"
MIA - BOS,58051861670,M-SJU-BOS-3,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/58051861670,https://www.airlines-manager.com/aircraft/show/91352061,19:00,1:59,310,"$445,815.00","$401,406.00","$1,294.86","$57,480.57"
MIA - BOS,58054747907,M-SJU-BOS-6 B,A319-100,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/58054747907,https://www.airlines-manager.com/aircraft/show/110582841,20:15,3:14,198,"$337,082.00","$301,501.00","$1,522.73","$43,174.37"
MIA - BTV,58017973626,M-DSM-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/58017973626,https://www.airlines-manager.com/aircraft/show/111064081,3:00,10:14,320,"$461,408.00","$418,536.00","$1,307.93","$57,862.12"
MIA - BTV,58031343151,M-DSM-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/58031343151,https://www.airlines-manager.com/aircraft/show/113101228,8:45,15:59,320,"$461,408.00","$418,536.00","$1,307.93","$57,862.12"
MIA - BTV,58042065531,M-DSM-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/58042065531,https://www.airlines-manager.com/aircraft/show/113101233,13:00,20:14,320,"$461,408.00","$418,536.00","$1,307.93","$57,862.12"
MIA - BTV,58054747815,M-DSM-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/58054747815,https://www.airlines-manager.com/aircraft/show/113101230,19:45,2:59,320,"$461,408.00","$418,536.00","$1,307.93","$57,862.12"
MIA - BTV,58059513381,M-DSM-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/58059513381,https://www.airlines-manager.com/aircraft/show/100049776,23:00,6:29,112,"$219,081.00","$193,710.00","$1,729.55","$25,885.52"
MIA - BUF,58017973623,M-BDL-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/58017973623,https://www.airlines-manager.com/aircraft/show/107763561,3:00,9:44,320,"$425,908.00","$384,093.00","$1,200.29","$57,043.51"
MIA - BUF,58017973624,M-BDL-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/58017973624,https://www.airlines-manager.com/aircraft/show/107763566,3:15,9:59,320,"$425,908.00","$384,093.00","$1,200.29","$57,043.51"
MIA - BUF,58034914045,M-BDL-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/58034914045,https://www.airlines-manager.com/aircraft/show/107763562,11:00,17:44,320,"$425,908.00","$384,093.00","$1,200.29","$57,043.51"
MIA - BUF,58048703754,M-BDL-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/58048703754,https://www.airlines-manager.com/aircraft/show/107763565,17:30,0:14,320,"$425,908.00","$384,093.00","$1,200.29","$57,043.51"
MIA - BUF,58057474872,M-BDL-SAT-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/58057474872,https://www.airlines-manager.com/aircraft/show/107467213,21:15,3:59,112,"$200,324.00","$175,956.00","$1,571.04","$26,132.08"
MIA - BUR,58017973612,M-BUR-PVD-4,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/58017973612,https://www.airlines-manager.com/aircraft/show/108834806,2:45,13:59,310,"$704,259.00","$651,354.00","$2,101.14","$57,984.04"
MIA - BUR,58034914086,M-BUR-PVD-1,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/58034914086,https://www.airlines-manager.com/aircraft/show/108834803,11:00,22:14,310,"$704,259.00","$651,354.00","$2,101.14","$57,984.04"
MIA - BUR,58042065708,M-BUR-PVD-3,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/58042065708,https://www.airlines-manager.com/aircraft/show/108834805,14:00,1:14,310,"$704,259.00","$651,354.00","$2,101.14","$57,984.04"
MIA - BUR,58054747872,M-BUR-PVD-5 B,A319-100,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/58054747872,https://www.airlines-manager.com/aircraft/show/108834807,20:00,7:14,198,"528,191$","485,766$","$2,453.36","$43,243.26"
MIA - BUR,58054747873,M-BUR-PVD-2,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/58054747873,https://www.airlines-manager.com/aircraft/show/108834804,20:45,7:59,310,"$704,259.00","$651,354.00","$2,101.14","$57,984.04"
MIA - BWI,58021655834,M-BWI-YYZ-4,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/58021655834,https://www.airlines-manager.com/aircraft/show/92153442,4:00,9:44,310,"$362,448.00","$324,139.00","$1,045.61","$56,535.87"
MIA - BWI,58024780678,M-BWI-YYZ-5,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/58024780678,https://www.airlines-manager.com/aircraft/show/92153439,6:00,11:44,310,"$362,448.00","$324,139.00","$1,045.61","$56,535.87"
MIA - BWI,58034913905,M-BWI-YYZ-1,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/58034913905,https://www.airlines-manager.com/aircraft/show/92153443,10:00,15:44,310,"$362,448.00","$324,139.00","$1,045.61","$56,535.87"
MIA - BWI,58042065564,M-BWI-YYZ-2,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/58042065564,https://www.airlines-manager.com/aircraft/show/92153440,13:00,18:44,310,"$362,448.00","$324,139.00","$1,045.61","$56,535.87"
MIA - BWI,58057474832,M-BWI-YYZ-3,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/58057474832,https://www.airlines-manager.com/aircraft/show/92153441,21:00,2:44,310,"$362,448.00","$324,139.00","$1,045.61","$56,535.87"
MIA - BWI,58059513378,M-BWI-YYZ-6 B,A319-100,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/58059513378,https://www.airlines-manager.com/aircraft/show/120519717,23:00,4:44,173,"$257,396.00","$227,452.00","$1,314.75","$39,671.86"
MIA - BZN,58017973126,M-BIL-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/58017973126,https://www.airlines-manager.com/aircraft/show/116789627,0:15,10:44,320,"$656,911.00","$600,715.00","$1,877.23","$57,301.91"
MIA - BZN,58034914051,M-BIL-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/58034914051,https://www.airlines-manager.com/aircraft/show/116789626,11:00,21:29,320,"$656,911.00","$600,715.00","$1,877.23","$57,301.91"
MIA - BZN,58042065610,M-BIL-BZN-5,ERJ-175,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/58042065610,https://www.airlines-manager.com/aircraft/show/116042637,13:00,23:44,112,"$309,244.00","$274,765.00","$2,453.26","$25,599.22"
MIA - BZN,58054747893,M-BIL-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/58054747893,https://www.airlines-manager.com/aircraft/show/116789629,20:15,6:44,320,"656,911$","600,715$","$1,877.23","$57,301.91"
MIA - BZN,58057474971,M-BIL-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/58057474971,https://www.airlines-manager.com/aircraft/show/116789628,22:15,8:44,320,"$656,911.00","$600,715.00","$1,877.23","$57,301.91"
MIA - CAK,58017973537,M-MHT-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/58017973537,https://www.airlines-manager.com/aircraft/show/115493370,2:00,8:14,310,"$385,091.00","$351,321.00","$1,133.29","$56,361.66"
MIA - CAK,58031343107,M-MHT-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/58031343107,https://www.airlines-manager.com/aircraft/show/115493371,8:15,14:29,310,"$385,091.00","$351,321.00","$1,133.29","$56,361.66"
MIA - CAK,58034914095,M-MHT-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/58034914095,https://www.airlines-manager.com/aircraft/show/115493372,11:00,17:14,310,"$385,091.00","$351,321.00","$1,133.29","$56,361.66"
MIA - CAK,58051861531,M-MHT-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/58051861531,https://www.airlines-manager.com/aircraft/show/114912307,18:00,0:14,112,"$181,775.00","$159,685.00","$1,425.76","$25,617.91"
MIA - CAK,58057474838,M-MHT-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/58057474838,https://www.airlines-manager.com/aircraft/show/115493373,21:00,3:14,279,"$362,230.00","$329,349.00","$1,180.46","$52,836.74"
MIA - CHS,58017973657,M-SDF-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/58017973657,https://www.airlines-manager.com/aircraft/show/94886626,3:15,7:14,310,"$226,980.00","$200,988.00",$648.35,"$50,457.24"
MIA - CHS,58031343176,M-SDF-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/58031343176,https://www.airlines-manager.com/aircraft/show/96692674,9:00,12:59,310,"$226,980.00","$200,988.00",$648.35,"$50,457.24"
MIA - CHS,58034914106,M-SDF-PWM-5,ERJ-175,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/58034914106,https://www.airlines-manager.com/aircraft/show/105601657,11:00,14:59,112,"105,788$","89,336$",$797.64,"$22,427.45"
MIA - CHS,58042065692,M-SDF-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/58042065692,https://www.airlines-manager.com/aircraft/show/94886625,14:00,17:59,310,"226,980$","200,988$",$648.35,"$50,457.24"
MIA - CHS,58054747953,M-SDF-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/58054747953,https://www.airlines-manager.com/aircraft/show/94886629,20:45,0:44,297,"221,377$","195,560$",$658.45,"$49,094.56"
MIA - CID,58017973389,M-CID-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/58017973389,https://www.airlines-manager.com/aircraft/show/116789652,1:15,8:29,310,"455,731$","418,272$","$1,349.26","$57,825.62"
MIA - CID,58034913924,M-CID-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/58034913924,https://www.airlines-manager.com/aircraft/show/116789653,10:00,17:14,310,"$455,731.00","$418,272.00","$1,349.26","$57,825.62"
MIA - CID,58045346255,M-CID-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/58045346255,https://www.airlines-manager.com/aircraft/show/116789650,15:30,22:44,310,"$455,731.00","$418,272.00","$1,349.26","$57,825.62"
MIA - CID,58054747927,M-CID-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/58054747927,https://www.airlines-manager.com/aircraft/show/116789651,20:30,3:44,310,"455,731$","418,272$","$1,349.26","$57,825.62"
MIA - CLE,58017973191,M-COS-CVG-5,ERJ-175,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/58017973191,https://www.airlines-manager.com/aircraft/show/103534665,0:30,6:44,112,"$188,656.00","$164,872.00","$1,472.07","$26,450.05"
MIA - CLE,58021655863,M-COS-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/58021655863,https://www.airlines-manager.com/aircraft/show/103684630,4:15,10:29,320,"$400,132.00","$358,875.00","$1,121.48","$57,573.53"
MIA - CLE,58027885510,M-COS-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/58027885510,https://www.airlines-manager.com/aircraft/show/103365574,7:45,13:59,320,"$400,132.00","$358,875.00","$1,121.48","$57,573.53"
MIA - CLE,58042065519,M-COS-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/58042065519,https://www.airlines-manager.com/aircraft/show/103684632,13:00,19:14,320,"$400,132.00","$358,875.00","$1,121.48","$57,573.53"
MIA - CLE,58054747943,M-COS-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/58054747943,https://www.airlines-manager.com/aircraft/show/103684631,20:45,2:59,320,"$400,132.00","$358,875.00","$1,121.48","$57,573.53"
MIA - CLT,58021655885,M-ORD-DFW-6,ERJ-175,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/58021655885,https://www.airlines-manager.com/aircraft/show/82543123,4:15,8:59,112,"$142,655.00","$118,748.00","$1,060.25","$25,087.61"
MIA - CLT,58034913902,M-ORD-DFW-3,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/58034913902,https://www.airlines-manager.com/aircraft/show/91600939,10:00,14:44,310,"$299,768.00","$261,819.00",$844.58,"$55,313.87"
MIA - CLT,58045346311,M-ORD-DFW-2,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/58045346311,https://www.airlines-manager.com/aircraft/show/91600936,16:00,20:44,310,"$299,768.00","$261,819.00",$844.58,"$55,313.87"
MIA - CLT,58048703778,M-ORD-DFW-5,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/58048703778,https://www.airlines-manager.com/aircraft/show/91600937,17:45,22:29,310,"299,768$","261,819$",$844.58,"$55,313.87"
MIA - CLT,58059513287,M-ORD-DFW-1,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/58059513287,https://www.airlines-manager.com/aircraft/show/91600935,22:30,3:14,310,"$299,768.00","$261,819.00",$844.58,"$55,313.87"
MIA - CLT,58059513288,M-ORD-DFW-4,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/58059513288,https://www.airlines-manager.com/aircraft/show/91600938,23:30,4:14,310,"$299,768.00","$261,819.00",$844.58,"$55,313.87"
MIA - CMH,58017973478,M-MKE-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/58017973478,https://www.airlines-manager.com/aircraft/show/88494374,1:45,7:44,320,"$373,993.00","$333,972.00","$1,043.66","$55,817.05"
MIA - CMH,58027885472,M-MKE-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/58027885472,https://www.airlines-manager.com/aircraft/show/88494378,7:15,13:14,320,"$373,993.00","$333,972.00","$1,043.66","$55,817.05"
MIA - CMH,58042065660,M-MKE-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/58042065660,https://www.airlines-manager.com/aircraft/show/91806233,14:00,19:59,320,"$373,993.00","$333,972.00","$1,043.66","$55,817.05"
MIA - CMH,58051861525,M-MKE-CMH-5 B,A319-100,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/58051861525,https://www.airlines-manager.com/aircraft/show/110582842,18:00,23:59,198,"$283,790.00","$255,521.00","$1,290.51","$42,705.46"
MIA - CMH,58057474823,M-MKE-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/58057474823,https://www.airlines-manager.com/aircraft/show/88239556,21:00,2:59,320,"$373,993.00","$333,972.00","$1,043.66","$55,817.05"
MIA - CMN,58021655960,M-84B-4 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/58021655960,https://www.airlines-manager.com/aircraft/show/106676228,5:00,22:44,962,"$2,973,893.00","$2,715,224.00","$2,822.48","$153,114.14"
MIA - CMN,58054747932,M-84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/58054747932,https://www.airlines-manager.com/aircraft/show/106676225,20:30,14:14,962,"$2,973,893.00","$2,715,224.00","$2,822.48","$153,114.14"
MIA - COS,58024780704,M-COS-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/58024780704,https://www.airlines-manager.com/aircraft/show/103684631,6:30,14:59,320,"$546,028.00","$494,638.00","$1,545.74","$58,307.03"
MIA - COS,58034913950,M-COS-CVG-5,ERJ-175,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/58034913950,https://www.airlines-manager.com/aircraft/show/103534665,10:00,18:44,112,"$257,259.00","$226,678.00","$2,023.91","$25,955.50"
MIA - COS,58042065668,M-COS-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/58042065668,https://www.airlines-manager.com/aircraft/show/103684630,14:00,22:29,320,"$546,028.00","$494,638.00","$1,545.74","$58,307.03"
MIA - COS,58048703750,M-COS-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/58048703750,https://www.airlines-manager.com/aircraft/show/103365574,17:30,1:59,320,"$546,028.00","$494,638.00","$1,545.74","$58,307.03"
MIA - COS,58059513311,M-COS-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/58059513311,https://www.airlines-manager.com/aircraft/show/103684632,22:45,7:14,320,"$546,028.00","$494,638.00","$1,545.74","$58,307.03"
MIA - CPT,58021655957,M-84A-6 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/58021655957,https://www.airlines-manager.com/aircraft/show/93731916,5:00,10:29,1124,"$5,639,082.00","$5,244,474.00","$4,665.90","$956,439.03"
MIA - CPT,58051861523,M-84A-2 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/58051861523,https://www.airlines-manager.com/aircraft/show/93686968,18:00,23:29,1124,"$5,639,082.00","$5,244,474.00","$4,665.90","$956,439.03"
MIA - CUN,58024780628,M-PSP-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/58024780628,https://www.airlines-manager.com/aircraft/show/116789631,5:30,9:44,320,"$251,434.00","$216,081.00",$675.25,"$51,042.76"
MIA - CUN,58031343207,M-PSP-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/58031343207,https://www.airlines-manager.com/aircraft/show/116789634,9:30,13:44,320,"$251,434.00","$216,081.00",$675.25,"$51,042.76"
MIA - CUN,58034913876,M-PSP-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/58034913876,https://www.airlines-manager.com/aircraft/show/116789632,10:00,14:14,320,"$251,434.00","$216,081.00",$675.25,"$51,042.76"
MIA - CUN,58051861606,M-PSP-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/58051861606,https://www.airlines-manager.com/aircraft/show/116789633,18:45,22:59,320,"$251,434.00","$216,081.00",$675.25,"$51,042.76"
MIA - CUN,58057474914,M-PSP-BFF-5,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/58057474914,https://www.airlines-manager.com/aircraft/show/116789630,21:45,1:59,319,"$250,721.00","$215,386.00",$675.19,"$50,878.58"
MIA - CUR,58021655864,M-BGI-CUR-3,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/58021655864,https://www.airlines-manager.com/aircraft/show/107121797,4:15,10:59,320,"$414,925.00","$372,912.00","$1,165.35","$55,382.97"
MIA - CUR,58034914042,M-BGI-CUR-2,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/58034914042,https://www.airlines-manager.com/aircraft/show/107121796,11:00,17:44,320,"$414,925.00","$372,912.00","$1,165.35","$55,382.97"
MIA - CUR,58045346175,M-BGI-CUR-5,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/58045346175,https://www.airlines-manager.com/aircraft/show/107121799,15:00,21:44,320,"$414,925.00","$372,912.00","$1,165.35","$55,382.97"
MIA - CUR,58054747888,M-BGI-CUR-1,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/58054747888,https://www.airlines-manager.com/aircraft/show/107121795,20:15,2:59,320,"$414,925.00","$372,912.00","$1,165.35","$55,382.97"
MIA - CUR,58057474911,M-BGI-CUR-4,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/58057474911,https://www.airlines-manager.com/aircraft/show/107121798,21:45,4:29,299,"$390,040.00","$348,871.00","$1,166.79","$51,812.52"
MIA - CVG,58017973524,M-COS-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/58017973524,https://www.airlines-manager.com/aircraft/show/103365574,2:00,7:44,320,"370,605$","328,724$","$1,027.26","$57,335.58"
MIA - CVG,58027885474,M-COS-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/58027885474,https://www.airlines-manager.com/aircraft/show/103684632,7:15,12:59,320,"$370,605.00","$328,724.00","$1,027.26","$57,335.58"
MIA - CVG,58045346174,M-COS-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/58045346174,https://www.airlines-manager.com/aircraft/show/103684631,15:00,20:44,320,"$370,605.00","$328,724.00","$1,027.26","$57,335.58"
MIA - CVG,58051861631,M-COS-CVG-5,ERJ-175,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/58051861631,https://www.airlines-manager.com/aircraft/show/103534665,18:45,0:29,112,"$175,356.00","$151,647.00","$1,353.99","$26,450.06"
MIA - CVG,58059513283,M-COS-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/58059513283,https://www.airlines-manager.com/aircraft/show/103684630,22:30,4:14,320,"$370,605.00","$328,724.00","$1,027.26","$57,335.58"
MIA - DEN,58017973406,M-LAX-DEN-3,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/58017973406,https://www.airlines-manager.com/aircraft/show/91126651,1:30,9:59,400,"730,615$","644,983$","$1,612.46","$76,029.43"
MIA - DEN,58017973407,M-LAX-DEN-4,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/58017973407,https://www.airlines-manager.com/aircraft/show/91126652,3:30,11:59,400,"730,615$","644,983$","$1,612.46","$76,029.43"
MIA - DEN,58034914018,M-LAX-DEN-1,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/58034914018,https://www.airlines-manager.com/aircraft/show/91126649,11:00,19:29,400,"730,615$","644,983$","$1,612.46","$76,029.43"
MIA - DEN,58048703747,M-LAX-DEN-2,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/58048703747,https://www.airlines-manager.com/aircraft/show/91126650,17:30,1:59,400,"$730,615.00","$644,983.00","$1,612.46","$76,029.43"
MIA - DEN,58057474988,M-LAX-DEN-5 E,A319-100,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/58057474988,https://www.airlines-manager.com/aircraft/show/115181776,22:15,6:59,216,"428,425$","372,033$","$1,722.38","$42,599.20"
MIA - DFW,58017973676,M-ORD-DFW-2,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/58017973676,https://www.airlines-manager.com/aircraft/show/91600936,3:30,9:59,310,"$410,166.00","$354,245.00","$1,142.73","$54,639.33"
MIA - DFW,58034913899,M-ORD-DFW-1,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/58034913899,https://www.airlines-manager.com/aircraft/show/91600935,10:00,16:29,310,"$410,166.00","$354,245.00","$1,142.73","$54,639.33"
MIA - DFW,58034913900,M-ORD-DFW-4,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/58034913900,https://www.airlines-manager.com/aircraft/show/91600938,11:00,17:29,310,"$410,166.00","$354,245.00","$1,142.73","$54,639.33"
MIA - DFW,58045346273,M-ORD-DFW-6,ERJ-175,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/58045346273,https://www.airlines-manager.com/aircraft/show/82543123,15:45,22:14,112,"$193,018.00","$157,511.00","$1,406.35","$24,294.76"
MIA - DFW,58057474887,M-ORD-DFW-3,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/58057474887,https://www.airlines-manager.com/aircraft/show/91600939,21:30,3:59,310,"$410,166.00","$354,245.00","$1,142.73","$54,639.33"
MIA - DFW,58059513289,M-ORD-DFW-5,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/58059513289,https://www.airlines-manager.com/aircraft/show/91600937,22:30,4:59,310,"$410,166.00","$354,245.00","$1,142.73","$54,639.33"
MIA - DSM,58017973627,M-DSM-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/58017973627,https://www.airlines-manager.com/aircraft/show/113101230,3:00,10:14,320,"$457,870.00","$414,841.00","$1,296.38","$57,351.29"
MIA - DSM,58031343162,M-DSM-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/58031343162,https://www.airlines-manager.com/aircraft/show/100049776,8:45,15:59,112,"$216,773.00","$191,389.00","$1,708.83","$26,459.31"
MIA - DSM,58042065529,M-DSM-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/58042065529,https://www.airlines-manager.com/aircraft/show/111064081,13:00,20:14,320,"$457,870.00","$414,841.00","$1,296.38","$57,351.29"
MIA - DSM,58045346301,M-DSM-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/58045346301,https://www.airlines-manager.com/aircraft/show/113101228,16:00,23:14,320,"$457,870.00","$414,841.00","$1,296.38","$57,351.29"
MIA - DSM,58054747891,M-DSM-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/58054747891,https://www.airlines-manager.com/aircraft/show/113101233,20:15,3:29,320,"$457,870.00","$414,841.00","$1,296.38","$57,351.29"
MIA - DSS,58017973089,M-84B-7 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/58017973089,https://www.airlines-manager.com/aircraft/show/106676231,0:00,16:59,962,"$2,864,435.00","$2,618,423.00","$2,721.85","$154,176.04"
MIA - DSS,58038353917,M-84B-3 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/58038353917,https://www.airlines-manager.com/aircraft/show/106676227,12:00,4:59,962,"$2,864,435.00","$2,618,423.00","$2,721.85","$154,176.04"
MIA - DTW,58017973412,M-PDX-DTW-3,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/58017973412,https://www.airlines-manager.com/aircraft/show/89943713,1:30,7:59,320,"$414,846.00","$362,524.00","$1,132.89","$55,916.30"
MIA - DTW,58017973413,M-PDX-DTW-4,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/58017973413,https://www.airlines-manager.com/aircraft/show/89943712,2:30,8:59,320,"$414,846.00","$362,524.00","$1,132.89","$55,916.30"
MIA - DTW,58034913840,M-PDX-DTW-2,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/58034913840,https://www.airlines-manager.com/aircraft/show/89943714,10:00,16:29,320,"$414,846.00","$362,524.00","$1,132.89","$55,916.30"
MIA - DTW,58042065659,M-PDX-DTW-5,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/58042065659,https://www.airlines-manager.com/aircraft/show/89943711,14:00,20:29,320,"$414,846.00","$362,524.00","$1,132.89","$55,916.30"
MIA - DTW,58059513278,M-PDX-DTW-1,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/58059513278,https://www.airlines-manager.com/aircraft/show/89943715,22:30,4:59,320,"$414,846.00","$362,524.00","$1,132.89","$55,916.30"
MIA - ECP,58017973148,M-MAF-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50834918,https://www.airlines-manager.com/network/showflight/58017973148,https://www.airlines-manager.com/aircraft/show/92137503,0:15,4:14,112,"$103,168.00","$86,664.00",$773.79,"$21,756.65"
MIA - ECP,58017973149,M-MAF-ROC-4,A321-200,https://www.airlines-manager.com/network/showline/50834918,https://www.airlines-manager.com/network/showflight/58017973149,https://www.airlines-manager.com/aircraft/show/120933310,2:15,6:14,310,"221,304$","195,136$",$629.47,"$48,988.12"
MIA - ECP,58027885545,M-MAF-ROC-3,A321-200,https://www.airlines-manager.com/network/showline/50834918,https://www.airlines-manager.com/network/showflight/58027885545,https://www.airlines-manager.com/aircraft/show/120933309,8:00,11:59,310,"221,304$","195,136$",$629.47,"$48,988.12"
MIA - ECP,58034913931,M-MAF-ROC-2,A321-200,https://www.airlines-manager.com/network/showline/50834918,https://www.airlines-manager.com/network/showflight/58034913931,https://www.airlines-manager.com/aircraft/show/120933308,10:00,13:59,310,"221,304$","195,136$",$629.47,"$48,988.12"
MIA - ECP,58048703659,M-MAF-ROC-1,A321-200,https://www.airlines-manager.com/network/showline/50834918,https://www.airlines-manager.com/network/showflight/58048703659,https://www.airlines-manager.com/aircraft/show/120933307,16:45,20:44,310,"221,304$","195,136$",$629.47,"$48,988.12"
MIA - ELP,58031343109,M-ELP-MCI-5 B,A319-100,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/58031343109,https://www.airlines-manager.com/aircraft/show/105093924,8:15,16:44,198,"$402,779.00","$366,768.00","$1,852.36","$43,233.95"
MIA - ELP,58034913846,M-ELP-MCI-1,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/58034913846,https://www.airlines-manager.com/aircraft/show/91806234,10:00,18:29,320,"$534,175.00","$484,066.00","$1,512.71","$57,060.83"
MIA - ELP,58048703608,M-ELP-MCI-3,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/58048703608,https://www.airlines-manager.com/aircraft/show/91806232,16:15,0:44,320,"$534,175.00","$484,066.00","$1,512.71","$57,060.83"
MIA - ELP,58048703609,M-ELP-MCI-4,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/58048703609,https://www.airlines-manager.com/aircraft/show/91806231,17:00,1:29,320,"534,175$","484,066$","$1,512.71","$57,060.83"
MIA - ELP,58059513389,M-ELP-MCI-2,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/58059513389,https://www.airlines-manager.com/aircraft/show/91806235,23:15,7:44,320,"$534,175.00","$484,066.00","$1,512.71","$57,060.83"
MIA - EUG,58017973446,M-EUG-SYR-4,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/58017973446,https://www.airlines-manager.com/aircraft/show/119652480,1:30,13:59,320,"$770,422.00","$706,945.00","$2,209.20","$56,631.11"
MIA - EUG,58042065687,M-EUG-SYR-1,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/58042065687,https://www.airlines-manager.com/aircraft/show/119652483,14:00,2:29,320,"$770,422.00","$706,945.00","$2,209.20","$56,631.11"
MIA - EUG,58051861607,M-EUG-SYR-3,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/58051861607,https://www.airlines-manager.com/aircraft/show/119652481,18:45,7:14,320,"$770,422.00","$706,945.00","$2,209.20","$56,631.11"
MIA - EUG,58059513415,M-EUG-SYR-2,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/58059513415,https://www.airlines-manager.com/aircraft/show/119652482,23:30,11:59,320,"$770,422.00","$706,945.00","$2,209.20","$56,631.11"
MIA - FAR,58017973207,M-FAR-TUL-3,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/58017973207,https://www.airlines-manager.com/aircraft/show/110883161,0:45,9:29,320,"$548,683.00","$499,861.00","$1,562.07","$57,235.99"
MIA - FAR,58027885475,M-FAR-TUL-4,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/58027885475,https://www.airlines-manager.com/aircraft/show/110883162,7:15,15:59,320,"$548,683.00","$499,861.00","$1,562.07","$57,235.99"
MIA - FAR,58034914048,M-FAR-TUL-1,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/58034914048,https://www.airlines-manager.com/aircraft/show/110883159,11:00,19:44,320,"$548,683.00","$499,861.00","$1,562.07","$57,235.99"
MIA - FAR,58045346299,M-FAR-TUL-2,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/58045346299,https://www.airlines-manager.com/aircraft/show/110883160,16:00,0:44,320,"$548,683.00","$499,861.00","$1,562.07","$57,235.99"
MIA - FAR,58051861559,M-FAR-TUL-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/58051861559,https://www.airlines-manager.com/aircraft/show/87169421,18:15,2:59,112,"$258,578.00","$229,164.00","$2,046.11","$26,240.15"
MIA - FAT,58031343120,M-FAT-MSO-4,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/58031343120,https://www.airlines-manager.com/aircraft/show/113101232,8:30,19:59,320,"$721,117.00","$660,903.00","$2,065.32","$57,553.24"
MIA - FAT,58034913984,M-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/58034913984,https://www.airlines-manager.com/aircraft/show/120519142,10:45,22:14,0,"$202,638.00","$131,134.00",#DIV/0!,"$11,419.51"
MIA - FAT,58034913985,M-FAT-MSO-1,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/58034913985,https://www.airlines-manager.com/aircraft/show/113101229,11:00,22:29,320,"$721,117.00","$660,903.00","$2,065.32","$57,553.24"
MIA - FAT,58051861659,M-FAT-MSO-2,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/58051861659,https://www.airlines-manager.com/aircraft/show/113101231,19:00,6:29,320,"$721,117.00","$660,903.00","$2,065.32","$57,553.24"
MIA - FAT,58057474970,M-FAT-MSO-3,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/58057474970,https://www.airlines-manager.com/aircraft/show/113101234,22:15,9:44,320,"$684,642.00","$629,659.00","$1,967.68","$54,832.42"
MIA - FCA,58017973172,M-FCA-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/58017973172,https://www.airlines-manager.com/aircraft/show/119652477,0:30,11:59,320,"$707,833.00","$648,466.00","$2,026.46","$56,470.19"
MIA - FCA,58017973173,M-FCA-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/58017973173,https://www.airlines-manager.com/aircraft/show/119652476,2:30,13:59,320,"$707,833.00","$648,466.00","$2,026.46","$56,470.19"
MIA - FCA,58038353887,M-FCA-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/58038353887,https://www.airlines-manager.com/aircraft/show/119652479,12:00,23:29,320,"$707,833.00","$648,466.00","$2,026.46","$56,470.19"
MIA - FCA,58042065684,M-FCA-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/58042065684,https://www.airlines-manager.com/aircraft/show/119652478,14:00,1:29,320,"$707,833.00","$648,466.00","$2,026.46","$56,470.19"
MIA - FPO,58017973121,M-BGI-CUR-2,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/58017973121,https://www.airlines-manager.com/aircraft/show/107121796,0:15,2:44,320,"$84,372.00","$59,731.00",$186.66,"$24,052.75"
MIA - FPO,58021655865,M-BGI-CUR-5,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/58021655865,https://www.airlines-manager.com/aircraft/show/107121799,4:15,6:44,320,"$84,372.00","$59,731.00",$186.66,"$24,052.75"
MIA - FPO,58031343206,M-BGI-CUR-1,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/58031343206,https://www.airlines-manager.com/aircraft/show/107121795,9:30,11:59,320,"$84,372.00","$59,731.00",$186.66,"$24,052.75"
MIA - FPO,58034914044,M-BGI-CUR-4,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/58034914044,https://www.airlines-manager.com/aircraft/show/107121798,11:00,13:29,320,"$84,372.00","$59,731.00",$186.66,"$24,052.75"
MIA - FPO,58048703753,M-BGI-CUR-3,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/58048703753,https://www.airlines-manager.com/aircraft/show/107121797,17:30,19:59,209,"$62,240.00","$37,978.00",$181.71,"$15,293.15"
MIA - FSD,58017973273,M-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/58017973273,https://www.airlines-manager.com/aircraft/show/110883110,1:00,8:59,310,"$503,709.00","$462,376.00","$1,491.54","$57,917.66"
MIA - FSD,58017973342,M-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/58017973342,https://www.airlines-manager.com/aircraft/show/110883113,2:45,10:44,310,"503,709$","462,376$","$1,491.54","$57,917.66"
MIA - FSD,58042065710,M-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/58042065710,https://www.airlines-manager.com/aircraft/show/110883112,14:00,21:59,310,"$503,709.00","$462,376.00","$1,491.54","$57,917.66"
MIA - FSD,58048703614,M-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/58048703614,https://www.airlines-manager.com/aircraft/show/110883111,16:15,0:14,310,"$503,709.00","$462,376.00","$1,491.54","$57,917.66"
MIA - FSD,58057474957,M-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/58057474957,https://www.airlines-manager.com/aircraft/show/104353572,22:00,5:59,99,"$225,061.00","$198,438.00","$2,004.42","$24,856.53"
MIA - GRR,58017973096,M-RAP-GRR-5,ERJ-175,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/58017973096,https://www.airlines-manager.com/aircraft/show/116042630,0:00,6:44,112,"$200,498.00","$176,006.00","$1,571.48","$26,139.50"
MIA - GRR,58017973097,M-RAP-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/58017973097,https://www.airlines-manager.com/aircraft/show/116789623,2:15,8:59,320,"$424,936.00","$383,045.00","$1,197.02","$56,887.87"
MIA - GRR,58034913872,M-RAP-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/58034913872,https://www.airlines-manager.com/aircraft/show/116789624,10:00,16:44,320,"$424,936.00","$383,045.00","$1,197.02","$56,887.87"
MIA - GRR,58038353881,M-RAP-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/58038353881,https://www.airlines-manager.com/aircraft/show/116789622,12:00,18:44,320,"$424,936.00","$383,045.00","$1,197.02","$56,887.87"
MIA - GRR,58051861661,M-RAP-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/58051861661,https://www.airlines-manager.com/aircraft/show/116789625,19:00,1:44,320,"$424,936.00","$383,045.00","$1,197.02","$56,887.87"
MIA - GSO,58031343190,M-EUG-SYR-1,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/58031343190,https://www.airlines-manager.com/aircraft/show/119652483,9:15,13:59,320,"$310,263.00","$276,328.00",$863.53,"$58,379.15"
MIA - GSO,58042065686,M-EUG-SYR-3,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/58042065686,https://www.airlines-manager.com/aircraft/show/119652481,14:00,18:44,320,"$310,263.00","$276,328.00",$863.53,"$58,379.15"
MIA - GSO,58051861608,M-EUG-SYR-2,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/58051861608,https://www.airlines-manager.com/aircraft/show/119652482,18:45,23:29,320,"$310,263.00","$276,328.00",$863.53,"$58,379.15"
MIA - GSO,58054747947,M-EUG-SYR-4,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/58054747947,https://www.airlines-manager.com/aircraft/show/119652480,20:45,1:29,313,"$306,171.00","$272,370.00",$870.19,"$57,542.96"
MIA - HAV,58021655944,M-PDX-DTW-1,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/58021655944,https://www.airlines-manager.com/aircraft/show/89943715,5:00,7:59,320,"$131,980.00","$102,173.00",$319.29,"$34,247.93"
MIA - HAV,58031343169,M-PDX-DTW-4,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/58031343169,https://www.airlines-manager.com/aircraft/show/89943712,9:00,11:59,320,"$131,980.00","$102,173.00",$319.29,"$34,247.93"
MIA - HAV,58034913839,M-PDX-DTW-3,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/58034913839,https://www.airlines-manager.com/aircraft/show/89943713,10:00,12:59,320,"$131,980.00","$102,173.00",$319.29,"$34,247.93"
MIA - HAV,58048703626,M-PDX-DTW-2,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/58048703626,https://www.airlines-manager.com/aircraft/show/89943714,16:30,19:29,320,"$131,980.00","$102,173.00",$319.29,"$34,247.93"
MIA - HAV,58054747921,M-PDX-DTW-5,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/58054747921,https://www.airlines-manager.com/aircraft/show/89943711,20:30,23:29,292,"$121,785.00","$92,199.00",$315.75,"$30,904.69"
MIA - IAD,58021655871,M-IAD-TUS-2,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/58021655871,https://www.airlines-manager.com/aircraft/show/97556720,4:15,9:59,310,"$363,777.00","$324,476.00","$1,046.70","$56,594.65"
MIA - IAD,58027885477,M-IAD-TUS-5,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/58027885477,https://www.airlines-manager.com/aircraft/show/97556716,7:15,12:59,310,"$363,777.00","$324,476.00","$1,046.70","$56,594.65"
MIA - IAD,58034913912,M-IAD-TUS-1,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/58034913912,https://www.airlines-manager.com/aircraft/show/97556721,10:00,15:44,310,"$363,777.00","$324,476.00","$1,046.70","$56,594.65"
MIA - IAD,58042065567,M-IAD-TUS-4,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/58042065567,https://www.airlines-manager.com/aircraft/show/97556718,13:00,18:44,310,"$363,777.00","$324,476.00","$1,046.70","$56,594.65"
MIA - IAD,58051861619,M-IAD-TUS-3,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/58051861619,https://www.airlines-manager.com/aircraft/show/97556719,18:45,0:29,310,"$363,777.00","$324,476.00","$1,046.70","$56,594.65"
MIA - ICT,58017973576,M-FAR-TUL-1,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/58017973576,https://www.airlines-manager.com/aircraft/show/110883159,2:30,9:29,320,"$448,851.00","$405,534.00","$1,267.29","$58,071.69"
MIA - ICT,58031343171,M-FAR-TUL-2,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/58031343171,https://www.airlines-manager.com/aircraft/show/110883160,9:00,15:59,320,"$448,851.00","$405,534.00","$1,267.29","$58,071.69"
MIA - ICT,58034914105,M-FAR-TUL-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/58034914105,https://www.airlines-manager.com/aircraft/show/87169421,11:00,18:14,112,"$213,247.00","$187,816.00","$1,676.93","$25,965.35"
MIA - ICT,58048703774,M-FAR-TUL-3,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/58048703774,https://www.airlines-manager.com/aircraft/show/110883161,17:45,0:44,320,"$448,851.00","$405,534.00","$1,267.29","$58,071.69"
MIA - ICT,58059513316,M-FAR-TUL-4,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/58059513316,https://www.airlines-manager.com/aircraft/show/110883162,22:45,5:44,320,"$448,851.00","$405,534.00","$1,267.29","$58,071.69"
MIA - IND,58017973591,M-AUS-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/58017973591,https://www.airlines-manager.com/aircraft/show/82323689,2:30,8:29,112,"$181,512.00","$157,824.00","$1,409.14","$26,377.27"
MIA - IND,58017973592,M-AUS-PIT-4,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/58017973592,https://www.airlines-manager.com/aircraft/show/99920623,3:15,9:14,320,"$384,262.00","$342,843.00","$1,071.38","$57,299.67"
MIA - IND,58034913855,M-AUS-PIT-3,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/58034913855,https://www.airlines-manager.com/aircraft/show/99920624,10:00,15:59,320,"$384,262.00","$342,843.00","$1,071.38","$57,299.67"
MIA - IND,58045346295,M-AUS-PIT-2,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/58045346295,https://www.airlines-manager.com/aircraft/show/99920625,16:00,21:59,320,"384,262$","342,843$","$1,071.38","$57,299.67"
MIA - IND,58059513282,M-AUS-PIT-1,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/58059513282,https://www.airlines-manager.com/aircraft/show/99920626,22:30,4:29,320,"$384,262.00","$342,843.00","$1,071.38","$57,299.67"
MIA - JAN,58024780644,M-MHT-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/58024780644,https://www.airlines-manager.com/aircraft/show/114912307,5:30,10:29,112,"$149,970.00","$131,075.00","$1,170.31","$26,302.68"
MIA - JAN,58031343132,M-MHT-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/58031343132,https://www.airlines-manager.com/aircraft/show/115493373,8:30,13:29,310,"$315,458.00","$286,126.00",$922.99,"$57,416.59"
MIA - JAN,58042065717,M-MHT-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/58042065717,https://www.airlines-manager.com/aircraft/show/115493370,14:00,18:59,310,"$315,458.00","$286,126.00",$922.99,"$57,416.59"
MIA - JAN,58054747898,M-MHT-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/58054747898,https://www.airlines-manager.com/aircraft/show/115493371,20:15,1:14,310,"$315,458.00","$286,126.00",$922.99,"$57,416.59"
MIA - JAN,58059513294,M-MHT-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/58059513294,https://www.airlines-manager.com/aircraft/show/115493372,22:30,3:29,259,"$284,942.00","$256,648.00",$990.92,"$51,501.27"
MIA - JAX,58017973621,M-COS-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/58017973621,https://www.airlines-manager.com/aircraft/show/103684631,3:00,6:29,320,"$174,389.00","$145,350.00",$454.22,"$41,727.27"
MIA - JAX,58034913972,M-COS-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/58034913972,https://www.airlines-manager.com/aircraft/show/103684630,10:30,13:59,320,"174,389$","145,350$",$454.22,"$41,727.27"
MIA - JAX,58042065667,M-COS-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/58042065667,https://www.airlines-manager.com/aircraft/show/103365574,14:00,17:29,320,"$174,389.00","$145,350.00",$454.22,"$41,727.27"
MIA - JAX,58051861691,M-COS-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/58051861691,https://www.airlines-manager.com/aircraft/show/103684632,19:15,22:44,320,"174,389$","145,350$",$454.22,"$41,727.27"
MIA - JAX,58057474987,M-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/58057474987,https://www.airlines-manager.com/aircraft/show/106339154,22:15,1:44,198,"132,355$","112,459$",$567.97,"$32,284.88"
MIA - JFK,58024780645,M-JFK-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/58024780645,https://www.airlines-manager.com/aircraft/show/105308264,5:45,11:59,338,"$430,736.00","$378,260.00","$1,119.11","$60,683.42"
MIA - JFK,58024780646,M-JFK-PHX-6,ERJ-175,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/58024780646,https://www.airlines-manager.com/aircraft/show/82683137,6:45,12:59,112,"$187,689.00","$153,479.00","$1,370.35","$24,622.30"
MIA - JFK,58034913828,M-JFK-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/58034913828,https://www.airlines-manager.com/aircraft/show/105308267,10:00,16:14,338,"430,736$","378,260$","$1,119.11","$60,683.42"
MIA - JFK,58038353853,M-JFK-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/58038353853,https://www.airlines-manager.com/aircraft/show/105308265,12:00,18:14,338,"$430,736.00","$378,260.00","$1,119.11","$60,683.42"
MIA - JFK,58051861488,M-JFK-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/58051861488,https://www.airlines-manager.com/aircraft/show/105308266,18:00,0:14,338,"430,736$","378,260$","$1,119.11","$60,683.42"
MIA - JFK,58054747937,M-JFK-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/58054747937,https://www.airlines-manager.com/aircraft/show/105308268,20:45,2:59,338,"$430,736.00","$378,260.00","$1,119.11","$60,683.42"
MIA - JNB,58017973076,M-84A-4 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/58017973076,https://www.airlines-manager.com/aircraft/show/93686966,0:00,6:44,1124,"$6,037,007.00","$5,603,375.00","$4,985.21","$832,184.41"
MIA - JNB,58042065596,M-84A-7 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/58042065596,https://www.airlines-manager.com/aircraft/show/93776641,13:00,19:44,1124,"$6,037,007.00","$5,603,375.00","$4,985.21","$832,184.41"
MIA - LAS,58017973398,M-LAS-SEA-5,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/58017973398,https://www.airlines-manager.com/aircraft/show/105093929,1:30,11:59,338,"$720,041.00","$652,865.00","$1,931.55","$62,276.47"
MIA - LAS,58034913825,M-LAS-SEA-1,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/58034913825,https://www.airlines-manager.com/aircraft/show/105093925,10:00,20:29,338,"$720,041.00","$652,865.00","$1,931.55","$62,276.47"
MIA - LAS,58038353913,M-LAS-SEA-6 B,A319-100,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/58038353913,https://www.airlines-manager.com/aircraft/show/113251304,12:00,22:29,198,"$499,043.00","$443,039.00","$2,237.57","$42,261.27"
MIA - LAS,58042065470,M-LAS-SEA-2,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/58042065470,https://www.airlines-manager.com/aircraft/show/105093926,13:00,23:29,338,"720,041$","652,865$","$1,931.55","$62,276.47"
MIA - LAS,58045346141,M-LAS-SEA-3,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/58045346141,https://www.airlines-manager.com/aircraft/show/105093927,15:00,1:29,338,"$720,041.00","$652,865.00","$1,931.55","$62,276.47"
MIA - LAS,58059513269,M-LAS-SEA-4,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/58059513269,https://www.airlines-manager.com/aircraft/show/105093928,22:30,8:59,338,"$720,041.00","$652,865.00","$1,931.55","$62,276.47"
MIA - LAX,58017973036,M-LAX-DEN-1,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/58017973036,https://www.airlines-manager.com/aircraft/show/91126649,0:00,10:59,400,"921,726$","828,254$","$2,070.64","$75,410.08"
MIA - LAX,58017973037,M-LAX-DEN-2,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/58017973037,https://www.airlines-manager.com/aircraft/show/91126650,2:00,12:59,400,"$921,726.00","$828,254.00","$2,070.64","$75,410.08"
MIA - LAX,58034913837,M-LAX-DEN-3,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/58034913837,https://www.airlines-manager.com/aircraft/show/91126651,10:00,20:59,400,"$921,726.00","$828,254.00","$2,070.64","$75,410.08"
MIA - LAX,58034913838,M-LAX-DEN-5 E,A319-100,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/58034913838,https://www.airlines-manager.com/aircraft/show/115181776,11:00,22:14,216,"$539,517.00","$478,154.00","$2,213.68","$42,565.64"
MIA - LAX,58048703624,M-LAX-DEN-4,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/58048703624,https://www.airlines-manager.com/aircraft/show/91126652,16:30,3:29,400,"921,726$","828,254$","$2,070.64","$75,410.08"
MIA - LEX,58017973631,M-CID-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/58017973631,https://www.airlines-manager.com/aircraft/show/116789653,3:00,8:29,310,"349,957$","319,272$","$1,029.91","$58,225.90"
MIA - LEX,58034913921,M-CID-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/58034913921,https://www.airlines-manager.com/aircraft/show/116789650,10:00,15:29,310,"349,957$","319,272$","$1,029.91","$58,225.90"
MIA - LEX,58045346201,M-CID-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/58045346201,https://www.airlines-manager.com/aircraft/show/116789651,15:00,20:29,310,"349,957$","319,272$","$1,029.91","$58,225.90"
MIA - LEX,58054747829,M-CID-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/58054747829,https://www.airlines-manager.com/aircraft/show/116789652,19:45,1:14,306,"$347,307.00","$316,719.00","$1,035.03","$57,760.30"
MIA - LIT,58017973555,M-SDF-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/58017973555,https://www.airlines-manager.com/aircraft/show/96692674,2:15,7:59,310,"$361,995.00","$329,608.00","$1,063.25","$57,489.77"
MIA - LIT,58021655888,M-SDF-PWM-5,ERJ-175,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/58021655888,https://www.airlines-manager.com/aircraft/show/105601657,4:15,9:59,112,"$171,636.00","$150,561.00","$1,344.29","$26,260.64"
MIA - LIT,58031343100,M-SDF-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/58031343100,https://www.airlines-manager.com/aircraft/show/94886625,8:15,13:59,310,"$361,995.00","$329,608.00","$1,063.25","$57,489.77"
MIA - LIT,58045346188,M-SDF-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/58045346188,https://www.airlines-manager.com/aircraft/show/94886629,15:00,20:44,310,"$361,995.00","$329,608.00","$1,063.25","$57,489.77"
MIA - LIT,58057474890,M-SDF-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/58057474890,https://www.airlines-manager.com/aircraft/show/94886626,21:30,3:14,310,"$361,995.00","$329,608.00","$1,063.25","$57,489.77"
MIA - LOS,58024780723,M-84A-5 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/58024780723,https://www.airlines-manager.com/aircraft/show/93704215,6:45,4:59,1124,"$4,277,261.00","$3,977,814.00","$3,538.98","$178,912.17"
MIA - LOS,58054747832,M-84A-1 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/58054747832,https://www.airlines-manager.com/aircraft/show/93686969,19:45,17:59,1116,"$4,224,517.00","$3,927,164.00","$3,518.96","$176,634.06"
MIA - MAF,58017973346,M-MAF-ROC-1,A321-200,https://www.airlines-manager.com/network/showline/50834915,https://www.airlines-manager.com/network/showflight/58017973346,https://www.airlines-manager.com/aircraft/show/120933307,1:00,8:29,310,"$470,887.00","$431,493.00","$1,391.91","$57,660.53"
MIA - MAF,58034913949,M-MAF-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50834915,https://www.airlines-manager.com/network/showflight/58034913949,https://www.airlines-manager.com/aircraft/show/92137503,10:00,17:29,112,"$222,557.00","$196,495.00","$1,754.42","$26,257.68"
MIA - MAF,58038353909,M-MAF-ROC-4,A321-200,https://www.airlines-manager.com/network/showline/50834915,https://www.airlines-manager.com/network/showflight/58038353909,https://www.airlines-manager.com/aircraft/show/120933310,12:00,19:29,310,"$470,887.00","$431,493.00","$1,391.91","$57,660.53"
MIA - MAF,58048703617,M-MAF-ROC-3,A321-200,https://www.airlines-manager.com/network/showline/50834915,https://www.airlines-manager.com/network/showflight/58048703617,https://www.airlines-manager.com/aircraft/show/120933309,16:15,23:44,310,"$470,887.00","$431,493.00","$1,391.91","$57,660.53"
MIA - MAF,58051861555,M-MAF-ROC-2,A321-200,https://www.airlines-manager.com/network/showline/50834915,https://www.airlines-manager.com/network/showflight/58051861555,https://www.airlines-manager.com/aircraft/show/120933308,18:15,1:44,310,"$470,887.00","$431,493.00","$1,391.91","$57,660.53"
MIA - MBJ,58017973218,M-PUJ-BDA-4 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/58017973218,https://www.airlines-manager.com/aircraft/show/104034460,0:45,4:59,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MBJ,58021655959,M-PUJ-BDA-5 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/58021655959,https://www.airlines-manager.com/aircraft/show/104034461,5:00,9:14,228,"193,225$","171,899$",$753.94,"$40,606.06"
MIA - MBJ,58034913934,M-PUJ-BDA-3 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/58034913934,https://www.airlines-manager.com/aircraft/show/104034459,10:00,14:14,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MBJ,58038353949,M-PUJ-BDA-1 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/58038353949,https://www.airlines-manager.com/aircraft/show/104034457,12:45,16:59,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MBJ,58048703710,M-PUJ-BDA-2 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/58048703710,https://www.airlines-manager.com/aircraft/show/104034458,17:00,21:14,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MBJ,58059513375,M-PUJ-BDA-6 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/58059513375,https://www.airlines-manager.com/aircraft/show/99326789,23:00,3:14,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MCI,58017973197,M-ELP-MCI-3,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/58017973197,https://www.airlines-manager.com/aircraft/show/91806232,0:45,7:44,320,"$448,685.00","$403,102.00","$1,259.69","$57,723.44"
MIA - MCI,58017973198,M-ELP-MCI-4,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/58017973198,https://www.airlines-manager.com/aircraft/show/91806231,1:30,8:29,320,"$448,685.00","$403,102.00","$1,259.69","$57,723.44"
MIA - MCI,58034913847,M-ELP-MCI-2,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/58034913847,https://www.airlines-manager.com/aircraft/show/91806235,10:00,16:59,320,"$448,685.00","$403,102.00","$1,259.69","$57,723.44"
MIA - MCI,58051861573,M-ELP-MCI-1,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/58051861573,https://www.airlines-manager.com/aircraft/show/91806234,18:30,1:29,320,"448,685$","403,102$","$1,259.69","$57,723.44"
MIA - MCI,58051861574,M-ELP-MCI-5 B,A319-100,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/58051861574,https://www.airlines-manager.com/aircraft/show/105093924,19:00,1:59,198,"$338,938.00","$306,546.00","$1,548.21","$43,896.80"
MIA - MCO,58017973122,M-BDL-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/58017973122,https://www.airlines-manager.com/aircraft/show/107763565,0:15,2:59,320,"$122,517.00","$85,295.00",$266.55,"$31,205.49"
MIA - MCO,58021655845,M-BDL-SAT-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/58021655845,https://www.airlines-manager.com/aircraft/show/107467213,4:00,6:44,112,"$55,044.00","$35,872.00",$320.29,"$13,123.90"
MIA - MCO,58024780691,M-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/58024780691,https://www.airlines-manager.com/aircraft/show/103534663,6:00,8:44,112,"$55,044.00","$35,872.00",$320.29,"$13,123.90"
MIA - MCO,58031343200,M-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/58031343200,https://www.airlines-manager.com/aircraft/show/103534663,9:15,11:59,112,"55,044$","35,872$",$320.29,"$13,123.90"
MIA - MCO,58034913867,M-BDL-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/58034913867,https://www.airlines-manager.com/aircraft/show/107763566,10:00,12:44,320,"$122,517.00","$85,295.00",$266.55,"$31,205.49"
MIA - MCO,58034913868,M-BDL-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/58034913868,https://www.airlines-manager.com/aircraft/show/107763561,11:00,13:44,320,"122,517$","85,295$",$266.55,"$31,205.49"
MIA - MCO,58048703773,M-BDL-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/58048703773,https://www.airlines-manager.com/aircraft/show/107763562,17:45,20:29,320,"122,517$","85,295$",$266.55,"$31,205.49"
MIA - MEM,58017973080,M-MKE-CMH-5 B,A319-100,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/58017973080,https://www.airlines-manager.com/aircraft/show/110582842,0:00,5:29,198,"$263,114.00","$235,345.00","$1,188.61","$42,920.06"
MIA - MEM,58017973081,M-MKE-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/58017973081,https://www.airlines-manager.com/aircraft/show/88239556,3:00,8:29,320,"$346,619.00","$307,030.00",$959.47,"$55,993.31"
MIA - MEM,58027885509,M-MKE-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/58027885509,https://www.airlines-manager.com/aircraft/show/88494374,7:45,13:14,320,"$346,619.00","$307,030.00",$959.47,"$55,993.31"
MIA - MEM,58042065658,M-MKE-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/58042065658,https://www.airlines-manager.com/aircraft/show/88494378,14:00,19:29,320,"$346,619.00","$307,030.00",$959.47,"$55,993.31"
MIA - MEM,58054747849,M-MKE-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/58054747849,https://www.airlines-manager.com/aircraft/show/91806233,20:00,1:29,320,"$346,619.00","$307,030.00",$959.47,"$55,993.31"
MIA - MFR,58017973445,M-FCA-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/58017973445,https://www.airlines-manager.com/aircraft/show/119652478,1:30,13:59,320,"$759,604.00","$696,142.00","$2,175.44","$55,765.71"
MIA - MFR,58038353886,M-FCA-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/58038353886,https://www.airlines-manager.com/aircraft/show/119652477,12:00,0:29,320,"$759,604.00","$696,142.00","$2,175.44","$55,765.71"
MIA - MFR,58042065683,M-FCA-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/58042065683,https://www.airlines-manager.com/aircraft/show/119652476,14:00,2:29,320,"$759,604.00","$696,142.00","$2,175.44","$55,765.71"
MIA - MFR,58059513414,M-FCA-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/58059513414,https://www.airlines-manager.com/aircraft/show/119652479,23:30,11:59,320,"$759,604.00","$696,142.00","$2,175.44","$55,765.71"
MIA - MHT,58017973385,M-MHT-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/58017973385,https://www.airlines-manager.com/aircraft/show/115493371,1:15,8:14,310,"$454,152.00","$415,897.00","$1,341.60","$59,555.66"
MIA - MHT,58017973386,M-MHT-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/58017973386,https://www.airlines-manager.com/aircraft/show/115493372,3:30,10:29,310,"$454,152.00","$415,897.00","$1,341.60","$59,555.66"
MIA - MHT,58034914108,M-MHT-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/58034914108,https://www.airlines-manager.com/aircraft/show/114912307,11:00,17:59,112,"$214,353.00","$189,156.00","$1,688.89","$27,086.78"
MIA - MHT,58042065718,M-MHT-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/58042065718,https://www.airlines-manager.com/aircraft/show/115493373,14:00,20:59,310,"$454,152.00","$415,897.00","$1,341.60","$59,555.66"
MIA - MHT,58051861678,M-MHT-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/58051861678,https://www.airlines-manager.com/aircraft/show/115493370,19:00,1:59,310,"$454,152.00","$415,897.00","$1,341.60","$59,555.66"
MIA - MKE,58017973116,M-MKE-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/58017973116,https://www.airlines-manager.com/aircraft/show/88494378,0:15,7:14,320,"448,362$","404,235$","$1,263.23","$57,885.68"
MIA - MKE,58024780694,M-MKE-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/58024780694,https://www.airlines-manager.com/aircraft/show/91806233,6:15,13:14,320,"448,362$","404,235$","$1,263.23","$57,885.68"
MIA - MKE,58034914104,M-MKE-CMH-5 B,A319-100,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/58034914104,https://www.airlines-manager.com/aircraft/show/110582842,11:00,17:59,198,"$338,895.00","$307,460.00","$1,552.83","$44,027.68"
MIA - MKE,58042065656,M-MKE-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/58042065656,https://www.airlines-manager.com/aircraft/show/88239556,14:00,20:59,320,"$448,362.00","$404,235.00","$1,263.23","$57,885.68"
MIA - MKE,58051861603,M-MKE-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/58051861603,https://www.airlines-manager.com/aircraft/show/88494374,18:45,1:44,320,"$448,362.00","$404,235.00","$1,263.23","$57,885.68"
MIA - MSN,58017973483,M-RAP-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/58017973483,https://www.airlines-manager.com/aircraft/show/116789625,1:45,8:59,320,"$451,863.00","$409,290.00","$1,279.03","$56,583.87"
MIA - MSN,58027885522,M-RAP-GRR-5,ERJ-175,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/58027885522,https://www.airlines-manager.com/aircraft/show/116042630,7:45,14:59,112,"$214,048.00","$188,966.00","$1,687.20","$26,124.33"
MIA - MSN,58034913871,M-RAP-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/58034913871,https://www.airlines-manager.com/aircraft/show/116789623,10:00,17:14,320,"$451,863.00","$409,290.00","$1,279.03","$56,583.87"
MIA - MSN,58048703652,M-RAP-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/58048703652,https://www.airlines-manager.com/aircraft/show/116789624,16:45,23:59,320,"$451,863.00","$409,290.00","$1,279.03","$56,583.87"
MIA - MSN,58051861605,M-RAP-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/58051861605,https://www.airlines-manager.com/aircraft/show/116789622,18:45,1:59,320,"$451,863.00","$409,290.00","$1,279.03","$56,583.87"
MIA - MSO,58027885511,M-FAT-MSO-2,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/58027885511,https://www.airlines-manager.com/aircraft/show/113101231,7:45,18:59,320,"$700,402.00","$641,423.00","$2,004.45","$57,099.97"
MIA - MSO,58034914050,M-FAT-MSO-3,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/58034914050,https://www.airlines-manager.com/aircraft/show/113101234,11:00,22:14,320,"$700,402.00","$641,423.00","$2,004.45","$57,099.97"
MIA - MSO,58054747852,M-FAT-MSO-4,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/58054747852,https://www.airlines-manager.com/aircraft/show/113101232,20:00,7:14,320,"$700,402.00","$641,423.00","$2,004.45","$57,099.97"
MIA - MSO,58059513285,M-FAT-MSO-1,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/58059513285,https://www.airlines-manager.com/aircraft/show/113101229,22:30,9:44,320,"$700,402.00","$641,423.00","$2,004.45","$57,099.97"
MIA - MSP,58017973521,M-JFK-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/58017973521,https://www.airlines-manager.com/aircraft/show/105308267,2:00,9:59,338,"$544,122.00","$495,440.00","$1,465.80","$62,059.29"
MIA - MSP,58017973522,M-JFK-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/58017973522,https://www.airlines-manager.com/aircraft/show/105308268,3:00,10:59,338,"$544,122.00","$495,440.00","$1,465.80","$62,059.29"
MIA - MSP,58034913827,M-JFK-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/58034913827,https://www.airlines-manager.com/aircraft/show/105308266,10:00,17:59,338,"$544,122.00","$495,440.00","$1,465.80","$62,059.29"
MIA - MSP,58042065604,M-JFK-PHX-6,ERJ-175,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/58042065604,https://www.airlines-manager.com/aircraft/show/82683137,13:00,20:59,112,"$236,852.00","$203,894.00","$1,820.48","$25,539.96"
MIA - MSP,58051861534,M-JFK-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/58051861534,https://www.airlines-manager.com/aircraft/show/105308265,18:15,2:14,338,"544,122$","495,440$","$1,465.80","$62,059.29"
MIA - MSP,58057474902,M-JFK-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/58057474902,https://www.airlines-manager.com/aircraft/show/105308264,21:45,5:44,338,"$544,122.00","$495,440.00","$1,465.80","$62,059.29"
MIA - MSY,58017973414,M-MKE-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/58017973414,https://www.airlines-manager.com/aircraft/show/91806233,1:30,6:14,320,"$301,171.00","$266,048.00",$831.40,"$56,207.32"
MIA - MSY,58024780640,M-MKE-CMH-5 B,A319-100,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/58024780640,https://www.airlines-manager.com/aircraft/show/110582842,5:30,10:14,198,"229,505$","205,012$","$1,035.41","$43,312.39"
MIA - MSY,58031343117,M-MKE-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/58031343117,https://www.airlines-manager.com/aircraft/show/88239556,8:30,13:14,320,"$301,171.00","$266,048.00",$831.40,"$56,207.32"
MIA - MSY,58042065657,M-MKE-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/58042065657,https://www.airlines-manager.com/aircraft/show/88494374,14:00,18:44,320,"$301,171.00","$266,048.00",$831.40,"$56,207.32"
MIA - MSY,58054747776,M-MKE-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/58054747776,https://www.airlines-manager.com/aircraft/show/88494378,19:30,0:14,320,"$301,171.00","$266,048.00",$831.40,"$56,207.32"
MIA - MTJ,58017973375,M-RDM-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50834908,https://www.airlines-manager.com/network/showflight/58017973375,https://www.airlines-manager.com/aircraft/show/88725597,1:15,10:29,310,"$579,705.00","$533,668.00","$1,721.51","$57,797.98"
MIA - MTJ,58034913888,M-RDM-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50834908,https://www.airlines-manager.com/network/showflight/58034913888,https://www.airlines-manager.com/aircraft/show/88725598,10:00,19:14,310,"$579,705.00","$533,668.00","$1,721.51","$57,797.98"
MIA - MTJ,58042065558,M-RDM-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50834908,https://www.airlines-manager.com/network/showflight/58042065558,https://www.airlines-manager.com/aircraft/show/88725599,13:00,22:14,310,"$579,705.00","$533,668.00","$1,721.51","$57,797.98"
MIA - MTJ,58057474977,M-RDM-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50834908,https://www.airlines-manager.com/network/showflight/58057474977,https://www.airlines-manager.com/aircraft/show/106766698,22:15,7:29,310,"579,705$","533,668$","$1,721.51","$57,797.98"
MIA - MYR,58027885517,M-MAF-ROC-4,A321-200,https://www.airlines-manager.com/network/showline/50834920,https://www.airlines-manager.com/network/showflight/58027885517,https://www.airlines-manager.com/aircraft/show/120933310,7:45,11:59,310,"$253,255.00","$226,311.00",$730.04,"$53,459.29"
MIA - MYR,58038353908,M-MAF-ROC-3,A321-200,https://www.airlines-manager.com/network/showline/50834920,https://www.airlines-manager.com/network/showflight/58038353908,https://www.airlines-manager.com/aircraft/show/120933309,12:00,16:14,310,"$253,255.00","$226,311.00",$730.04,"$53,459.29"
MIA - MYR,58042065726,M-MAF-ROC-2,A321-200,https://www.airlines-manager.com/network/showline/50834920,https://www.airlines-manager.com/network/showflight/58042065726,https://www.airlines-manager.com/aircraft/show/120933308,14:00,18:14,310,"$253,255.00","$226,311.00",$730.04,"$53,459.29"
MIA - MYR,58054747955,M-MAF-ROC-1,A321-200,https://www.airlines-manager.com/network/showline/50834920,https://www.airlines-manager.com/network/showflight/58054747955,https://www.airlines-manager.com/aircraft/show/120933307,20:45,0:59,310,"$253,255.00","$226,311.00",$730.04,"$53,459.29"
MIA - NAS,58017973562,M-PUJ-BDA-5 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/58017973562,https://www.airlines-manager.com/aircraft/show/104034461,2:15,4:59,228,"$79,351.00","$61,380.00",$269.21,"$22,456.10"
MIA - NAS,58027885503,M-PUJ-BDA-6 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/58027885503,https://www.airlines-manager.com/aircraft/show/99326789,7:30,10:14,228,"$79,351.00","$61,380.00",$269.21,"$22,456.10"
MIA - NAS,58034913932,M-PUJ-BDA-1 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/58034913932,https://www.airlines-manager.com/aircraft/show/104034457,10:00,12:44,228,"$79,351.00","$61,380.00",$269.21,"$22,456.10"
MIA - NAS,58042065766,M-PUJ-BDA-2 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/58042065766,https://www.airlines-manager.com/aircraft/show/104034458,14:15,16:59,228,"$79,351.00","$61,380.00",$269.21,"$22,456.10"
MIA - NAS,58051861590,M-PUJ-BDA-3 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/58051861590,https://www.airlines-manager.com/aircraft/show/104034459,18:30,21:14,228,"$79,351.00","$61,380.00",$269.21,"$22,456.10"
MIA - NAS,58057474950,M-PUJ-BDA-4 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/58057474950,https://www.airlines-manager.com/aircraft/show/104034460,22:00,0:44,228,"79,351$","61,380$",$269.21,"$22,456.10"
MIA - OAK,58017973242,M-OAK-SMF-5,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/58017973242,https://www.airlines-manager.com/aircraft/show/91198617,1:00,12:59,320,"741,020$","675,128$","$2,109.78","$56,338.92"
MIA - OAK,58034914031,M-OAK-SMF-1,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/58034914031,https://www.airlines-manager.com/aircraft/show/91198615,11:00,22:59,320,"$741,020.00","$675,128.00","$2,109.78","$56,338.92"
MIA - OAK,58042065509,M-OAK-SMF-2,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/58042065509,https://www.airlines-manager.com/aircraft/show/91198619,13:00,0:59,320,"741,020$","675,128$","$2,109.78","$56,338.92"
MIA - OAK,58045346166,M-OAK-SMF-3,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/58045346166,https://www.airlines-manager.com/aircraft/show/91198616,15:00,2:59,320,"$741,020.00","$675,128.00","$2,109.78","$56,338.92"
MIA - OAK,58059513345,M-OAK-SMF-4,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/58059513345,https://www.airlines-manager.com/aircraft/show/91198618,23:00,10:59,320,"741,020$","675,128$","$2,109.78","$56,338.92"
MIA - OKC,58017973503,M-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/58017973503,https://www.airlines-manager.com/aircraft/show/110883112,1:45,8:29,310,"$432,205.00","$394,574.00","$1,272.82","$58,600.10"
MIA - OKC,58021655838,M-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/58021655838,https://www.airlines-manager.com/aircraft/show/110883111,4:00,10:44,310,"432,205$","394,574$","$1,272.82","$58,600.10"
MIA - OKC,58034913951,M-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/58034913951,https://www.airlines-manager.com/aircraft/show/104353572,10:00,16:44,112,"$203,116.00","$178,405.00","$1,592.90","$26,495.79"
MIA - OKC,58042065586,M-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/58042065586,https://www.airlines-manager.com/aircraft/show/110883110,13:00,19:44,310,"$432,205.00","$394,574.00","$1,272.82","$58,600.10"
MIA - OKC,58045346136,M-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/58045346136,https://www.airlines-manager.com/aircraft/show/110883113,14:45,21:29,310,"$432,205.00","$394,574.00","$1,272.82","$58,600.10"
MIA - OMA,58017973575,M-BOI-BNA-1,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/58017973575,https://www.airlines-manager.com/aircraft/show/104133006,2:30,9:59,320,"$479,555.00","$434,477.00","$1,357.74","$58,059.29"
MIA - OMA,58024780705,M-BOI-BNA-4,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/58024780705,https://www.airlines-manager.com/aircraft/show/103775657,6:30,13:59,320,"$479,555.00","$434,477.00","$1,357.74","$58,059.29"
MIA - OMA,58034913864,M-BOI-BNA-3,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/58034913864,https://www.airlines-manager.com/aircraft/show/104020880,10:00,17:29,320,"$479,555.00","$434,477.00","$1,357.74","$58,059.29"
MIA - OMA,58045346236,M-BOI-BNA-2,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/58045346236,https://www.airlines-manager.com/aircraft/show/104022609,15:15,22:44,320,"$479,555.00","$434,477.00","$1,357.74","$58,059.29"
MIA - OMA,58048703742,M-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/58048703742,https://www.airlines-manager.com/aircraft/show/103534663,17:15,0:44,112,"$226,251.00","$199,652.00","$1,782.61","$26,679.55"
MIA - ONT,58017973155,M-RNO-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/58017973155,https://www.airlines-manager.com/aircraft/show/90489722,0:30,11:29,320,"694,458$","632,850$","$1,977.66","$57,619.12"
MIA - ONT,58017973156,M-RNO-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/58017973156,https://www.airlines-manager.com/aircraft/show/86238756,2:30,13:29,320,"$694,458.00","$632,850.00","$1,977.66","$57,619.12"
MIA - ONT,58034914030,M-RNO-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/58034914030,https://www.airlines-manager.com/aircraft/show/90489723,11:00,21:59,320,"$694,458.00","$632,850.00","$1,977.66","$57,619.12"
MIA - ONT,58042065732,M-RNO-ONT-5 B,A319-100,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/58042065732,https://www.airlines-manager.com/aircraft/show/105223010,14:00,0:59,198,"$521,256.00","$476,516.00","$2,406.65","$43,385.37"
MIA - ONT,58059513277,M-RNO-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/58059513277,https://www.airlines-manager.com/aircraft/show/86238755,22:30,9:29,320,"$694,458.00","$632,850.00","$1,977.66","$57,619.12"
MIA - ORD,58017973656,M-ORD-DFW-1,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/58017973656,https://www.airlines-manager.com/aircraft/show/91600935,3:15,9:59,310,"$425,664.00","$365,859.00","$1,180.19","$54,335.50"
MIA - ORD,58021655868,M-ORD-DFW-4,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/58021655868,https://www.airlines-manager.com/aircraft/show/91600938,4:15,10:59,310,"$425,664.00","$365,859.00","$1,180.19","$54,335.50"
MIA - ORD,58031343185,M-ORD-DFW-6,ERJ-175,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/58031343185,https://www.airlines-manager.com/aircraft/show/82543123,9:00,15:44,112,"$199,854.00","$161,877.00","$1,445.33","$24,041.14"
MIA - ORD,58034914073,M-ORD-DFW-5,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/58034914073,https://www.airlines-manager.com/aircraft/show/91600937,11:00,17:44,310,"$425,664.00","$365,859.00","$1,180.19","$54,335.50"
MIA - ORD,58045346134,M-ORD-DFW-3,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/58045346134,https://www.airlines-manager.com/aircraft/show/91600939,14:45,21:29,310,"$425,664.00","$365,859.00","$1,180.19","$54,335.50"
MIA - ORD,58045346135,M-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/58045346135,https://www.airlines-manager.com/aircraft/show/106339154,15:30,22:14,198,"$320,961.00","$273,065.00","$1,379.12","$40,554.21"
MIA - ORD,58054747952,M-ORD-DFW-2,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/58054747952,https://www.airlines-manager.com/aircraft/show/91600936,20:45,3:29,310,"$425,664.00","$365,859.00","$1,180.19","$54,335.50"
MIA - ORF,58017973150,M-MHT-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/58017973150,https://www.airlines-manager.com/aircraft/show/114912307,0:15,5:29,112,"$157,906.00","$137,933.00","$1,231.54","$26,356.62"
MIA - ORF,58017973151,M-MHT-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/58017973151,https://www.airlines-manager.com/aircraft/show/115493373,3:15,8:29,310,"$332,506.00","$301,556.00",$972.76,"$57,622.17"
MIA - ORF,58031343106,M-MHT-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/58031343106,https://www.airlines-manager.com/aircraft/show/115493370,8:15,13:29,310,"$332,506.00","$301,556.00",$972.76,"$57,622.17"
MIA - ORF,58045346200,M-MHT-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/58045346200,https://www.airlines-manager.com/aircraft/show/115493371,15:00,20:14,310,"$332,506.00","$301,556.00",$972.76,"$57,622.17"
MIA - ORF,58048703735,M-MHT-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/58048703735,https://www.airlines-manager.com/aircraft/show/115493372,17:15,22:29,310,"$332,506.00","$301,556.00",$972.76,"$57,622.17"
MIA - PDX,58034913841,M-PDX-DTW-1,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/58034913841,https://www.airlines-manager.com/aircraft/show/89943715,10:00,22:29,320,"$774,889.00","$704,572.00","$2,201.79","$56,441.01"
MIA - PDX,58042065505,M-PDX-DTW-3,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/58042065505,https://www.airlines-manager.com/aircraft/show/89943713,13:00,1:29,320,"$774,889.00","$704,572.00","$2,201.79","$56,441.01"
MIA - PDX,58042065506,M-PDX-DTW-4,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/58042065506,https://www.airlines-manager.com/aircraft/show/89943712,14:00,2:29,320,"$774,889.00","$704,572.00","$2,201.79","$56,441.01"
MIA - PDX,58054747777,M-PDX-DTW-2,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/58054747777,https://www.airlines-manager.com/aircraft/show/89943714,19:30,7:59,320,"$774,889.00","$704,572.00","$2,201.79","$56,441.01"
MIA - PDX,58059513409,M-PDX-DTW-5,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/58059513409,https://www.airlines-manager.com/aircraft/show/89943711,23:30,11:59,320,"$774,889.00","$704,572.00","$2,201.79","$56,441.01"
MIA - PHL,58021655832,M-ORD-DFW-3,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/58021655832,https://www.airlines-manager.com/aircraft/show/91600939,4:00,9:59,310,"$381,305.00","$339,530.00","$1,095.26","$56,745.96"
MIA - PHL,58021655833,M-ORD-DFW-5,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/58021655833,https://www.airlines-manager.com/aircraft/show/91600937,5:00,10:59,310,"$381,305.00","$339,530.00","$1,095.26","$56,745.96"
MIA - PHL,58034913901,M-ORD-DFW-2,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/58034913901,https://www.airlines-manager.com/aircraft/show/91600936,10:00,15:59,310,"$381,305.00","$339,530.00","$1,095.26","$56,745.96"
MIA - PHL,58048703633,M-ORD-DFW-1,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/58048703633,https://www.airlines-manager.com/aircraft/show/91600935,16:30,22:29,310,"$381,305.00","$339,530.00","$1,095.26","$56,745.96"
MIA - PHL,58048703634,M-ORD-DFW-4,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/58048703634,https://www.airlines-manager.com/aircraft/show/91600938,17:30,23:29,310,"$381,305.00","$339,530.00","$1,095.26","$56,745.96"
MIA - PHL,58057474992,M-ORD-DFW-6,ERJ-175,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/58057474992,https://www.airlines-manager.com/aircraft/show/82543123,22:15,4:14,112,"$180,118.00","$153,280.00","$1,368.57","$25,617.83"
MIA - PHX,58017973099,M-JFK-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/58017973099,https://www.airlines-manager.com/aircraft/show/105308266,0:15,9:59,338,"$673,510.00","$614,805.00","$1,818.95","$63,164.90"
MIA - PHX,58017973102,M-JFK-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/58017973102,https://www.airlines-manager.com/aircraft/show/105308265,2:15,11:59,338,"$673,510.00","$614,805.00","$1,818.95","$63,164.90"
MIA - PHX,58034913992,M-JFK-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/58034913992,https://www.airlines-manager.com/aircraft/show/105308268,11:00,20:44,338,"$673,510.00","$614,805.00","$1,818.95","$63,164.90"
MIA - PHX,58038353852,M-JFK-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/58038353852,https://www.airlines-manager.com/aircraft/show/105308264,12:00,21:44,338,"$673,510.00","$614,805.00","$1,818.95","$63,164.90"
MIA - PHX,58048703603,M-JFK-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/58048703603,https://www.airlines-manager.com/aircraft/show/105308267,16:15,1:59,338,"$673,510.00","$614,805.00","$1,818.95","$63,164.90"
MIA - PHX,58057474848,M-JFK-PHX-6,ERJ-175,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/58057474848,https://www.airlines-manager.com/aircraft/show/82683137,21:00,6:44,112,"$291,110.00","$250,973.00","$2,240.83","$25,784.90"
MIA - PIT,58017973649,M-AUS-PIT-3,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/58017973649,https://www.airlines-manager.com/aircraft/show/99920624,3:15,9:14,320,"$382,895.00","$341,219.00","$1,066.31","$57,028.25"
MIA - PIT,58034913856,M-AUS-PIT-2,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/58034913856,https://www.airlines-manager.com/aircraft/show/99920625,10:00,15:59,320,"$382,895.00","$341,219.00","$1,066.31","$57,028.25"
MIA - PIT,58048703628,M-AUS-PIT-1,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/58048703628,https://www.airlines-manager.com/aircraft/show/99920626,16:30,22:29,320,"$382,895.00","$341,219.00","$1,066.31","$57,028.25"
MIA - PIT,58054747935,M-AUS-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/58054747935,https://www.airlines-manager.com/aircraft/show/82323689,20:30,2:29,112,"$180,854.00","$157,058.00","$1,402.30","$26,249.25"
MIA - PIT,58057474856,M-AUS-PIT-4,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/58057474856,https://www.airlines-manager.com/aircraft/show/99920623,21:15,3:14,320,"$382,895.00","$341,219.00","$1,066.31","$57,028.25"
MIA - PLS,58017973661,M-PUJ-BDA-6 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/58017973661,https://www.airlines-manager.com/aircraft/show/99326789,3:15,7:29,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - PLS,58021655958,M-PUJ-BDA-4 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/58021655958,https://www.airlines-manager.com/aircraft/show/104034460,5:00,9:14,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - PLS,58034913933,M-PUJ-BDA-2 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/58034913933,https://www.airlines-manager.com/aircraft/show/104034458,10:00,14:14,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - PLS,58042065767,M-PUJ-BDA-3 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/58042065767,https://www.airlines-manager.com/aircraft/show/104034459,14:15,18:29,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - PLS,58048703709,M-PUJ-BDA-1 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/58048703709,https://www.airlines-manager.com/aircraft/show/104034457,17:00,21:14,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - PLS,58057474951,M-PUJ-BDA-5 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/58057474951,https://www.airlines-manager.com/aircraft/show/104034461,22:00,2:14,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - POS,58038353937,M-84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/58038353937,https://www.airlines-manager.com/aircraft/show/106676225,12:30,20:29,962,"$1,341,807.00","$1,224,700.00","$1,273.08","$153,407.10"
MIA - POS,58045346334,M-84B-6 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/58045346334,https://www.airlines-manager.com/aircraft/show/106676230,16:00,23:59,738,"$1,115,185.00","$1,010,370.00","$1,369.07","$126,559.92"
MIA - PSP,58017973527,M-PSP-BFF-5,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/58017973527,https://www.airlines-manager.com/aircraft/show/116789630,2:00,12:44,320,"$662,540.00","$604,842.00","$1,890.13","$56,351.74"
MIA - PSP,58034913875,M-PSP-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/58034913875,https://www.airlines-manager.com/aircraft/show/116789631,10:00,20:44,320,"$662,540.00","$604,842.00","$1,890.13","$56,351.74"
MIA - PSP,58042065679,M-PSP-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/58042065679,https://www.airlines-manager.com/aircraft/show/116789634,14:00,0:44,320,"$662,540.00","$604,842.00","$1,890.13","$56,351.74"
MIA - PSP,58042065680,M-PSP-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/58042065680,https://www.airlines-manager.com/aircraft/show/116789632,14:15,0:59,320,"$662,540.00","$604,842.00","$1,890.13","$56,351.74"
MIA - PSP,58059513346,M-PSP-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/58059513346,https://www.airlines-manager.com/aircraft/show/116789633,23:00,9:44,246,"$567,302.00","$514,043.00","$2,089.61","$47,892.20"
MIA - PUJ,58017973681,M-PUJ-BDA-2 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/58017973681,https://www.airlines-manager.com/aircraft/show/104034458,3:30,9:14,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PUJ,58034913937,M-PUJ-BDA-5 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/58034913937,https://www.airlines-manager.com/aircraft/show/104034461,10:00,15:44,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PUJ,58048703618,M-PUJ-BDA-4 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/58048703618,https://www.airlines-manager.com/aircraft/show/104034460,16:15,21:59,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PUJ,58048703619,M-PUJ-BDA-6 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/58048703619,https://www.airlines-manager.com/aircraft/show/99326789,17:15,22:59,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PUJ,58057474868,M-PUJ-BDA-1 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/58057474868,https://www.airlines-manager.com/aircraft/show/104034457,21:15,2:59,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PUJ,58057474869,M-PUJ-BDA-3 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/58057474869,https://www.airlines-manager.com/aircraft/show/104034459,22:00,3:44,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PVD,58017973384,M-BUR-PVD-3,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/58017973384,https://www.airlines-manager.com/aircraft/show/108834805,1:15,7:59,310,"$427,684.00","$391,455.00","$1,262.76","$58,136.88"
MIA - PVD,58027885482,M-BUR-PVD-5 B,A319-100,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/58027885482,https://www.airlines-manager.com/aircraft/show/108834807,7:15,13:59,198,"$322,661.00","$293,626.00","$1,482.96","$43,607.82"
MIA - PVD,58034914087,M-BUR-PVD-2,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/58034914087,https://www.airlines-manager.com/aircraft/show/108834804,11:00,17:44,310,"$427,684.00","$391,455.00","$1,262.76","$58,136.88"
MIA - PVD,58048703702,M-BUR-PVD-4,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/58048703702,https://www.airlines-manager.com/aircraft/show/108834806,17:00,23:44,310,"$427,684.00","$391,455.00","$1,262.76","$58,136.88"
MIA - PVD,58057474979,M-BUR-PVD-1,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/58057474979,https://www.airlines-manager.com/aircraft/show/108834803,22:15,4:59,310,"$427,684.00","$391,455.00","$1,262.76","$58,136.88"
MIA - PWM,58027885495,M-SDF-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/58027885495,https://www.airlines-manager.com/aircraft/show/94886629,7:30,14:59,310,"$468,156.00","$430,232.00","$1,387.85","$57,492.03"
MIA - PWM,58042065693,M-SDF-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/58042065693,https://www.airlines-manager.com/aircraft/show/94886626,14:00,21:29,310,"$468,156.00","$430,232.00","$1,387.85","$57,492.03"
MIA - PWM,58051861617,M-SDF-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/58051861617,https://www.airlines-manager.com/aircraft/show/96692674,18:45,2:14,310,"$468,156.00","$430,232.00","$1,387.85","$57,492.03"
MIA - PWM,58054747958,M-SDF-PWM-5,ERJ-175,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/58054747958,https://www.airlines-manager.com/aircraft/show/105601657,20:45,4:14,112,"$220,894.00","$195,774.00","$1,747.98","$26,161.34"
MIA - PWM,58060881889,M-SDF-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/58060881889,https://www.airlines-manager.com/aircraft/show/94886625,23:45,7:14,310,"$468,156.00","$430,232.00","$1,387.85","$57,492.03"
MIA - RAP,58017973054,M-RAP-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/58017973054,https://www.airlines-manager.com/aircraft/show/116789624,0:00,8:59,320,"$563,858.00","$513,914.00","$1,605.98","$57,207.50"
MIA - RAP,58017973055,M-RAP-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/58017973055,https://www.airlines-manager.com/aircraft/show/116789622,2:00,10:59,320,"$563,858.00","$513,914.00","$1,605.98","$57,207.50"
MIA - RAP,58034913873,M-RAP-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/58034913873,https://www.airlines-manager.com/aircraft/show/116789625,10:00,18:59,320,"$563,858.00","$513,914.00","$1,605.98","$57,207.50"
MIA - RAP,58045346232,M-RAP-GRR-5,ERJ-175,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/58045346232,https://www.airlines-manager.com/aircraft/show/116042630,15:00,23:59,112,"$265,771.00","$235,577.00","$2,103.37","$26,223.78"
MIA - RAP,58048703726,M-RAP-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/58048703726,https://www.airlines-manager.com/aircraft/show/116789623,17:15,2:14,320,"$563,858.00","$513,914.00","$1,605.98","$57,207.50"
MIA - RDM,58034913916,M-RDM-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50834907,https://www.airlines-manager.com/network/showflight/58034913916,https://www.airlines-manager.com/aircraft/show/106766698,10:00,22:14,310,"$750,430.00","$694,304.00","$2,239.69","$56,755.10"
MIA - RDM,58042065557,M-RDM-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50834907,https://www.airlines-manager.com/network/showflight/58042065557,https://www.airlines-manager.com/aircraft/show/88725597,13:00,1:14,310,"$750,430.00","$694,304.00","$2,239.69","$56,755.10"
MIA - RDM,58051861697,M-RDM-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50834907,https://www.airlines-manager.com/network/showflight/58051861697,https://www.airlines-manager.com/aircraft/show/88725598,19:15,7:29,310,"750,430$","694,304$","$2,239.69","$56,755.10"
MIA - RDM,58057474974,M-RDM-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50834907,https://www.airlines-manager.com/network/showflight/58057474974,https://www.airlines-manager.com/aircraft/show/88725599,22:15,10:29,310,"750,430$","694,304$","$2,239.69","$56,755.10"
MIA - RDU,58021655900,M-AUS-PIT-1,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/58021655900,https://www.airlines-manager.com/aircraft/show/99920626,4:30,9:14,320,"310,630$","274,454$",$857.67,"$57,983.24"
MIA - RDU,58031343144,M-AUS-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/58031343144,https://www.airlines-manager.com/aircraft/show/82323689,8:30,13:14,112,"147,838$","127,705$","$1,140.22","$26,979.93"
MIA - RDU,58034913854,M-AUS-PIT-4,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/58034913854,https://www.airlines-manager.com/aircraft/show/99920623,10:00,14:44,320,"$310,630.00","$274,454.00",$857.67,"$57,983.24"
MIA - RDU,58045346294,M-AUS-PIT-3,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/58045346294,https://www.airlines-manager.com/aircraft/show/99920624,16:00,20:44,320,"$310,630.00","$274,454.00",$857.67,"$57,983.24"
MIA - RDU,58057474932,M-AUS-PIT-2,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/58057474932,https://www.airlines-manager.com/aircraft/show/99920625,22:00,2:44,320,"$310,630.00","$274,454.00",$857.67,"$57,983.24"
MIA - RIC,58031343130,M-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/58031343130,https://www.airlines-manager.com/aircraft/show/110883112,8:30,13:44,310,"$336,966.00","$305,684.00",$986.08,"$58,410.96"
MIA - RIC,58034914093,M-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/58034914093,https://www.airlines-manager.com/aircraft/show/110883111,11:00,16:14,310,"$336,966.00","$305,684.00",$986.08,"$58,410.96"
MIA - RIC,58048703666,M-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/58048703666,https://www.airlines-manager.com/aircraft/show/104353572,16:45,21:59,112,"$160,060.00","$139,846.00","$1,248.63","$26,722.17"
MIA - RIC,58054747828,M-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/58054747828,https://www.airlines-manager.com/aircraft/show/110883110,19:45,0:59,310,"$336,966.00","$305,684.00",$986.08,"$58,410.96"
MIA - RIC,58057474893,M-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/58057474893,https://www.airlines-manager.com/aircraft/show/110883113,21:30,2:44,310,"$336,966.00","$305,684.00",$986.08,"$58,410.96"
MIA - RNO,58017973347,M-RNO-ONT-5 B,A319-100,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/58017973347,https://www.airlines-manager.com/aircraft/show/105223010,1:00,12:44,198,"$546,103.00","$500,266.00","$2,526.60","$42,636.31"
MIA - RNO,58034914026,M-RNO-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/58034914026,https://www.airlines-manager.com/aircraft/show/86238755,11:00,22:29,320,"$725,284.00","$662,433.00","$2,070.10","$57,686.47"
MIA - RNO,58042065507,M-RNO-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/58042065507,https://www.airlines-manager.com/aircraft/show/90489722,13:00,0:29,320,"$725,284.00","$662,433.00","$2,070.10","$57,686.47"
MIA - RNO,58045346162,M-RNO-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/58045346162,https://www.airlines-manager.com/aircraft/show/86238756,15:00,2:29,320,"$725,284.00","$662,433.00","$2,070.10","$57,686.47"
MIA - RNO,58057474931,M-RNO-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/58057474931,https://www.airlines-manager.com/aircraft/show/90489723,22:00,9:29,320,"$725,284.00","$662,433.00","$2,070.10","$57,686.47"
MIA - ROC,58017973506,M-MAF-ROC-2,A321-200,https://www.airlines-manager.com/network/showline/50424914,https://www.airlines-manager.com/network/showflight/58017973506,https://www.airlines-manager.com/aircraft/show/120933308,1:45,8:29,310,"$427,406.00","$391,117.00","$1,261.67","$58,086.68"
MIA - ROC,58034913930,M-MAF-ROC-1,A321-200,https://www.airlines-manager.com/network/showline/50424914,https://www.airlines-manager.com/network/showflight/58034913930,https://www.airlines-manager.com/aircraft/show/120933307,10:00,16:44,310,"$427,406.00","$391,117.00","$1,261.67","$58,086.68"
MIA - ROC,58048703763,M-MAF-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50424914,https://www.airlines-manager.com/network/showflight/58048703763,https://www.airlines-manager.com/aircraft/show/92137503,17:30,0:14,112,"$201,000.00","$177,122.00","$1,581.45","$26,305.25"
MIA - ROC,58054747797,M-MAF-ROC-4,A321-200,https://www.airlines-manager.com/network/showline/50424914,https://www.airlines-manager.com/network/showflight/58054747797,https://www.airlines-manager.com/aircraft/show/120933310,19:30,2:14,310,"$427,406.00","$391,117.00","$1,261.67","$58,086.68"
MIA - ROC,58060881897,M-MAF-ROC-3,A321-200,https://www.airlines-manager.com/network/showline/50424914,https://www.airlines-manager.com/network/showflight/58060881897,https://www.airlines-manager.com/aircraft/show/120933309,23:45,6:29,310,"$427,406.00","$391,117.00","$1,261.67","$58,086.68"
MIA - RSW,58021655840,M-ANU-SXM-3 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/58021655840,https://www.airlines-manager.com/aircraft/show/110114297,4:00,6:29,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - RSW,58031343199,M-ANU-SXM-1 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/58031343199,https://www.airlines-manager.com/aircraft/show/110114295,9:15,11:44,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - RSW,58034913962,M-ANU-SXM-2 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/58034913962,https://www.airlines-manager.com/aircraft/show/110114296,10:15,12:44,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - RSW,58042065738,M-ANU-SXM-6 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/58042065738,https://www.airlines-manager.com/aircraft/show/110114300,14:00,16:29,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - RSW,58057474844,M-ANU-SXM-5 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/58057474844,https://www.airlines-manager.com/aircraft/show/110114299,21:00,23:29,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - RSW,58059513377,M-ANU-SXM-4 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/58059513377,https://www.airlines-manager.com/aircraft/show/110114298,23:00,1:29,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - SAN,58017973094,M-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/58017973094,https://www.airlines-manager.com/aircraft/show/120519142,0:00,10:44,0,"$190,591.00","$116,070.00",$0.00,"$10,813.98"
MIA - SAN,58017973095,M-BWI-YYZ-2,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/58017973095,https://www.airlines-manager.com/aircraft/show/92153440,1:45,12:44,310,"$680,679.00","$623,880.00","$2,012.52","$56,802.43"
MIA - SAN,58034913903,M-BWI-YYZ-3,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/58034913903,https://www.airlines-manager.com/aircraft/show/92153441,10:00,20:59,310,"$680,679.00","$623,880.00","$2,012.52","$56,802.43"
MIA - SAN,58038353914,M-BWI-YYZ-6 B,A319-100,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/58038353914,https://www.airlines-manager.com/aircraft/show/120519717,12:00,22:59,198,"$511,028.00","$465,491.00","$2,350.96","$42,381.58"
MIA - SAN,58048703696,M-BWI-YYZ-4,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/58048703696,https://www.airlines-manager.com/aircraft/show/92153442,17:00,3:59,310,"$680,679.00","$623,880.00","$2,012.52","$56,802.43"
MIA - SAN,58051861671,M-BWI-YYZ-5,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/58051861671,https://www.airlines-manager.com/aircraft/show/92153439,19:00,5:59,310,"$680,679.00","$623,880.00","$2,012.52","$56,802.43"
MIA - SAN,58059513325,M-BWI-YYZ-1,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/58059513325,https://www.airlines-manager.com/aircraft/show/92153443,22:45,9:44,310,"$664,966.00","$611,888.00","$1,973.83","$55,710.59"
MIA - SAT,58017973650,M-BDL-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/58017973650,https://www.airlines-manager.com/aircraft/show/107763562,3:15,9:44,320,"$412,163.00","$370,879.00","$1,159.00","$57,204.99"
MIA - SAT,58034914046,M-BDL-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/58034914046,https://www.airlines-manager.com/aircraft/show/107763565,11:00,17:29,320,"$412,163.00","$370,879.00","$1,159.00","$57,204.99"
MIA - SAT,58045346139,M-BDL-SAT-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/58045346139,https://www.airlines-manager.com/aircraft/show/107467213,14:45,21:14,112,"$194,327.00","$170,361.00","$1,521.08","$26,276.76"
MIA - SAT,58054747922,M-BDL-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/58054747922,https://www.airlines-manager.com/aircraft/show/107763561,20:30,2:59,320,"$412,163.00","$370,879.00","$1,159.00","$57,204.99"
MIA - SAT,58054747923,M-BDL-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/58054747923,https://www.airlines-manager.com/aircraft/show/107763566,20:45,3:14,320,"$412,163.00","$370,879.00","$1,159.00","$57,204.99"
MIA - SAV,58017973138,M-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/58017973138,https://www.airlines-manager.com/aircraft/show/110883111,0:15,3:59,310,"$215,345.00","$190,074.00",$613.14,"$50,912.68"
MIA - SAV,58024780692,M-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/58024780692,https://www.airlines-manager.com/aircraft/show/104353572,6:00,9:44,112,"$100,516.00","$84,583.00",$755.21,"$22,656.16"
MIA - SAV,58031343178,M-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/58031343178,https://www.airlines-manager.com/aircraft/show/110883110,9:00,12:44,310,"$215,345.00","$190,074.00",$613.14,"$50,912.68"
MIA - SAV,58034914094,M-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/58034914094,https://www.airlines-manager.com/aircraft/show/110883113,11:00,14:44,310,"$215,345.00","$190,074.00",$613.14,"$50,912.68"
MIA - SAV,58057474943,M-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/58057474943,https://www.airlines-manager.com/aircraft/show/110883112,22:00,1:44,274,"$200,617.00","$175,781.00",$641.54,"$47,084.20"
MIA - SDF,58017973216,M-SDF-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/58017973216,https://www.airlines-manager.com/aircraft/show/94886629,0:45,6:29,310,"$357,909.00","$323,543.00","$1,043.69","$56,431.92"
MIA - SDF,58031343101,M-SDF-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/58031343101,https://www.airlines-manager.com/aircraft/show/94886626,8:15,13:59,310,"$357,909.00","$323,543.00","$1,043.69","$56,431.92"
MIA - SDF,58042065565,M-SDF-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/58042065565,https://www.airlines-manager.com/aircraft/show/96692674,13:00,18:44,310,"$357,909.00","$323,543.00","$1,043.69","$56,431.92"
MIA - SDF,58045346228,M-SDF-PWM-5,ERJ-175,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/58045346228,https://www.airlines-manager.com/aircraft/show/105601657,15:00,20:44,112,"$169,578.00","$147,365.00","$1,315.76","$25,703.20"
MIA - SDF,58051861509,M-SDF-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/58051861509,https://www.airlines-manager.com/aircraft/show/94886625,18:00,23:44,310,"$357,909.00","$323,543.00","$1,043.69","$56,431.92"
MIA - SEA,58017973397,M-LAS-SEA-3,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/58017973397,https://www.airlines-manager.com/aircraft/show/105093927,1:30,13:59,338,"$834,881.00","$766,832.00","$2,268.73","$61,428.46"
MIA - SEA,58034913826,M-LAS-SEA-4,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/58034913826,https://www.airlines-manager.com/aircraft/show/105093928,10:00,22:29,338,"$834,881.00","$766,832.00","$2,268.73","$61,428.46"
MIA - SEA,58042065471,M-LAS-SEA-5,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/58042065471,https://www.airlines-manager.com/aircraft/show/105093929,13:00,1:29,338,"$834,881.00","$766,832.00","$2,268.73","$61,428.46"
MIA - SEA,58054747916,M-LAS-SEA-1,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/58054747916,https://www.airlines-manager.com/aircraft/show/105093925,20:30,8:59,338,"$834,881.00","$766,832.00","$2,268.73","$61,428.46"
MIA - SEA,58059513298,M-LAS-SEA-6 B,A319-100,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/58059513298,https://www.airlines-manager.com/aircraft/show/113251304,22:30,11:14,198,"578,175$","520,898$","$2,630.80","$40,908.22"
MIA - SEA,58059513299,M-LAS-SEA-2,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/58059513299,https://www.airlines-manager.com/aircraft/show/105093926,23:30,11:59,338,"$834,881.00","$766,832.00","$2,268.73","$61,428.46"
MIA - SJC,58017973481,M-SJC-YYC-5,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/58017973481,https://www.airlines-manager.com/aircraft/show/107763563,1:45,13:44,320,"$734,893.00","$668,726.00","$2,089.77","$55,804.67"
MIA - SJC,58038353873,M-SJC-YYC-1,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/58038353873,https://www.airlines-manager.com/aircraft/show/107763569,12:00,23:59,320,"$734,893.00","$668,726.00","$2,089.77","$55,804.67"
MIA - SJC,58042065671,M-SJC-YYC-2,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/58042065671,https://www.airlines-manager.com/aircraft/show/107763568,14:00,1:59,320,"$734,893.00","$668,726.00","$2,089.77","$55,804.67"
MIA - SJC,58045346298,M-SJC-YYC-3,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/58045346298,https://www.airlines-manager.com/aircraft/show/107763567,16:00,3:59,320,"734,893$","668,726$","$2,089.77","$55,804.67"
MIA - SJC,58060881884,M-SJC-YYC-4,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/58060881884,https://www.airlines-manager.com/aircraft/show/107763564,23:45,11:44,320,"734,893$","668,726$","$2,089.77","$55,804.67"
MIA - SJU,58017973662,M-SJU-BOS-6 B,A319-100,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/58017973662,https://www.airlines-manager.com/aircraft/show/110582841,3:15,9:29,198,"$287,737.00","$258,672.00","$1,306.42","$41,498.18"
MIA - SJU,58034913961,M-SJU-BOS-2,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/58034913961,https://www.airlines-manager.com/aircraft/show/91352062,10:15,16:29,310,"$381,512.00","$345,237.00","$1,113.67","$55,385.61"
MIA - SJU,58038353929,M-SJU-BOS-3,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/58038353929,https://www.airlines-manager.com/aircraft/show/91352061,12:15,18:29,310,"$381,512.00","$345,237.00","$1,113.67","$55,385.61"
MIA - SJU,58051861550,M-SJU-BOS-4,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/58051861550,https://www.airlines-manager.com/aircraft/show/91352060,18:15,0:29,310,"$381,512.00","$345,237.00","$1,113.67","$55,385.61"
MIA - SJU,58051861551,M-SJU-BOS-5,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/58051861551,https://www.airlines-manager.com/aircraft/show/91352059,19:15,1:29,310,"381,512$","345,237$","$1,113.67","$55,385.61"
MIA - SJU,58059513324,M-SJU-BOS-1,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/58059513324,https://www.airlines-manager.com/aircraft/show/91352063,22:45,4:59,277,"345,434$","310,341$","$1,120.36","$49,787.33"
MIA - SKB,58017973460,M-ANU-SXM-4 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/58017973460,https://www.airlines-manager.com/aircraft/show/110114298,1:30,8:29,228,"345,078$","315,549$","$1,383.99","$45,186.01"
MIA - SKB,58017973461,M-ANU-SXM-1 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/58017973461,https://www.airlines-manager.com/aircraft/show/110114295,2:15,9:14,228,"$345,078.00","$315,549.00","$1,383.99","$45,186.01"
MIA - SKB,58017973462,M-ANU-SXM-2 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/58017973462,https://www.airlines-manager.com/aircraft/show/110114296,3:15,10:14,228,"345,078$","315,549$","$1,383.99","$45,186.01"
MIA - SKB,58024780725,M-ANU-SXM-6 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/58024780725,https://www.airlines-manager.com/aircraft/show/110114300,6:45,13:44,228,"$345,078.00","$315,549.00","$1,383.99","$45,186.01"
MIA - SKB,58042065736,M-ANU-SXM-5 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/58042065736,https://www.airlines-manager.com/aircraft/show/110114299,14:00,20:59,228,"$345,078.00","$315,549.00","$1,383.99","$45,186.01"
MIA - SKB,58057474843,M-ANU-SXM-3 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/58057474843,https://www.airlines-manager.com/aircraft/show/110114297,21:00,3:59,228,"$345,078.00","$315,549.00","$1,383.99","$45,186.01"
MIA - SLC,58017973062,M-SJU-BOS-2,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/58017973062,https://www.airlines-manager.com/aircraft/show/91352062,0:00,10:14,310,"$644,121.00","$586,535.00","$1,892.05","$57,316.12"
MIA - SLC,58017973063,M-SJU-BOS-4,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/58017973063,https://www.airlines-manager.com/aircraft/show/91352060,1:00,11:14,310,"$644,121.00","$586,535.00","$1,892.05","$57,316.12"
MIA - SLC,58017973064,M-SJU-BOS-3,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/58017973064,https://www.airlines-manager.com/aircraft/show/91352061,2:00,12:14,310,"$644,121.00","$586,535.00","$1,892.05","$57,316.12"
MIA - SLC,58031343175,M-SJU-BOS-5,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/58031343175,https://www.airlines-manager.com/aircraft/show/91352059,9:00,19:14,310,"$644,121.00","$586,535.00","$1,892.05","$57,316.12"
MIA - SLC,58034913945,M-SJU-BOS-6 B,A319-100,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/58034913945,https://www.airlines-manager.com/aircraft/show/110582841,10:00,20:14,198,"$483,924.00","$437,765.00","$2,210.93","$42,778.34"
MIA - SLC,58038353892,M-SJU-BOS-1,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/58038353892,https://www.airlines-manager.com/aircraft/show/91352063,12:00,22:14,310,"$644,121.00","$586,535.00","$1,892.05","$57,316.12"
MIA - SMF,58017973243,M-OAK-SMF-2,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/58017973243,https://www.airlines-manager.com/aircraft/show/91198619,1:00,12:59,320,"735,091$","671,059$","$2,097.06","$55,999.36"
MIA - SMF,58017973244,M-OAK-SMF-3,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/58017973244,https://www.airlines-manager.com/aircraft/show/91198616,3:00,14:59,320,"$735,091.00","$671,059.00","$2,097.06","$55,999.36"
MIA - SMF,58034914032,M-OAK-SMF-4,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/58034914032,https://www.airlines-manager.com/aircraft/show/91198618,11:00,22:59,320,"735,091$","671,059$","$2,097.06","$55,999.36"
MIA - SMF,58042065508,M-OAK-SMF-5,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/58042065508,https://www.airlines-manager.com/aircraft/show/91198617,13:00,0:59,320,"$735,091.00","$671,059.00","$2,097.06","$55,999.36"
MIA - SMF,58059513344,M-OAK-SMF-1,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/58059513344,https://www.airlines-manager.com/aircraft/show/91198615,23:00,10:59,320,"$735,091.00","$671,059.00","$2,097.06","$55,999.36"
MIA - STL,58017973415,M-ELP-MCI-1,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/58017973415,https://www.airlines-manager.com/aircraft/show/91806234,1:30,7:44,320,"$395,052.00","$351,479.00","$1,098.37","$56,387.01"
MIA - STL,58017973416,M-ELP-MCI-5 B,A319-100,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/58017973416,https://www.airlines-manager.com/aircraft/show/105093924,2:00,8:14,198,"$298,871.00","$268,112.00","$1,354.10","$43,012.62"
MIA - STL,58031343118,M-ELP-MCI-4,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/58031343118,https://www.airlines-manager.com/aircraft/show/91806231,8:30,14:44,320,"$395,052.00","$351,479.00","$1,098.37","$56,387.01"
MIA - STL,58034913845,M-ELP-MCI-3,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/58034913845,https://www.airlines-manager.com/aircraft/show/91806232,10:00,16:14,320,"$395,052.00","$351,479.00","$1,098.37","$56,387.01"
MIA - STL,58048703684,M-ELP-MCI-2,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/58048703684,https://www.airlines-manager.com/aircraft/show/91806235,17:00,23:14,320,"$395,052.00","$351,479.00","$1,098.37","$56,387.01"
MIA - SXM,58024780724,M-ANU-SXM-5 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/58024780724,https://www.airlines-manager.com/aircraft/show/110114299,6:45,13:44,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SXM,58042065735,M-ANU-SXM-3 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/58042065735,https://www.airlines-manager.com/aircraft/show/110114297,14:00,20:59,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SXM,58045346327,M-ANU-SXM-4 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/58045346327,https://www.airlines-manager.com/aircraft/show/110114298,16:00,22:59,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SXM,58051861706,M-ANU-SXM-1 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/58051861706,https://www.airlines-manager.com/aircraft/show/110114295,19:15,2:14,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SXM,58054747906,M-ANU-SXM-2 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/58054747906,https://www.airlines-manager.com/aircraft/show/110114296,20:15,3:14,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SXM,58060881900,M-ANU-SXM-6 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/58060881900,https://www.airlines-manager.com/aircraft/show/110114300,23:45,6:44,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SYR,58017973577,M-EUG-SYR-1,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/58017973577,https://www.airlines-manager.com/aircraft/show/119652483,2:30,9:14,320,"433,063$","391,646$","$1,223.89","$58,165.25"
MIA - SYR,58027885476,M-EUG-SYR-3,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/58027885476,https://www.airlines-manager.com/aircraft/show/119652481,7:15,13:59,320,"$433,063.00","$391,646.00","$1,223.89","$58,165.25"
MIA - SYR,58038353888,M-EUG-SYR-2,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/58038353888,https://www.airlines-manager.com/aircraft/show/119652482,12:00,18:44,320,"$433,063.00","$391,646.00","$1,223.89","$58,165.25"
MIA - SYR,58042065685,M-EUG-SYR-4,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/58042065685,https://www.airlines-manager.com/aircraft/show/119652480,14:00,20:44,320,"$433,063.00","$391,646.00","$1,223.89","$58,165.25"
MIA - TPA,58021655955,M-BUR-PVD-1,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/58021655955,https://www.airlines-manager.com/aircraft/show/108834803,5:00,7:59,310,"$128,129.00","$102,113.00",$329.40,"$34,227.82"
MIA - TPA,58034914088,M-BUR-PVD-3,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/58034914088,https://www.airlines-manager.com/aircraft/show/108834805,11:00,13:59,310,"$128,129.00","$102,113.00",$329.40,"$34,227.82"
MIA - TPA,58048703713,M-BUR-PVD-5 B,A319-100,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/58048703713,https://www.airlines-manager.com/aircraft/show/108834807,17:00,19:59,198,"$95,593.00","$74,772.00",$377.64,"$25,063.24"
MIA - TPA,58048703714,M-BUR-PVD-2,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/58048703714,https://www.airlines-manager.com/aircraft/show/108834804,17:45,20:44,310,"$128,129.00","$102,113.00",$329.40,"$34,227.82"
MIA - TPA,58060881896,M-BUR-PVD-4,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/58060881896,https://www.airlines-manager.com/aircraft/show/108834806,23:45,2:44,310,"$128,129.00","$102,113.00",$329.40,"$34,227.82"
MIA - TUL,58017973205,M-FAR-TUL-2,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/58017973205,https://www.airlines-manager.com/aircraft/show/110883160,0:45,7:29,320,"$417,622.00","$376,181.00","$1,175.57","$55,868.47"
MIA - TUL,58017973206,M-FAR-TUL-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/58017973206,https://www.airlines-manager.com/aircraft/show/87169421,3:00,9:44,112,"$196,831.00","$172,707.00","$1,542.03","$25,649.55"
MIA - TUL,58034914049,M-FAR-TUL-3,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/58034914049,https://www.airlines-manager.com/aircraft/show/110883161,11:00,17:44,320,"$417,622.00","$376,181.00","$1,175.57","$55,868.47"
MIA - TUL,58045346300,M-FAR-TUL-4,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/58045346300,https://www.airlines-manager.com/aircraft/show/110883162,16:00,22:44,320,"$417,622.00","$376,181.00","$1,175.57","$55,868.47"
MIA - TUL,58054747814,M-FAR-TUL-1,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/58054747814,https://www.airlines-manager.com/aircraft/show/110883159,19:45,2:29,320,"$417,622.00","$376,181.00","$1,175.57","$55,868.47"
MIA - TUS,58017973180,M-IAD-TUS-3,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/58017973180,https://www.airlines-manager.com/aircraft/show/97556719,0:30,9:59,310,"$593,850.00","$545,245.00","$1,758.85","$57,495.08"
MIA - TUS,58034913911,M-IAD-TUS-2,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/58034913911,https://www.airlines-manager.com/aircraft/show/97556720,10:00,19:29,310,"$593,850.00","$545,245.00","$1,758.85","$57,495.08"
MIA - TUS,58042065566,M-IAD-TUS-5,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/58042065566,https://www.airlines-manager.com/aircraft/show/97556716,13:00,22:29,310,"$593,850.00","$545,245.00","$1,758.85","$57,495.08"
MIA - TUS,58045346265,M-IAD-TUS-1,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/58045346265,https://www.airlines-manager.com/aircraft/show/97556721,15:45,1:14,310,"$593,850.00","$545,245.00","$1,758.85","$57,495.08"
MIA - TUS,58051861618,M-IAD-TUS-4,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/58051861618,https://www.airlines-manager.com/aircraft/show/97556718,18:45,4:14,310,"593,850$","545,245$","$1,758.85","$57,495.08"
MIA - TYS,58017973678,M-CID-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/58017973678,https://www.airlines-manager.com/aircraft/show/116789650,3:30,8:29,310,"$315,564.00","$286,171.00",$923.13,"$57,425.62"
MIA - TYS,58034913922,M-CID-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/58034913922,https://www.airlines-manager.com/aircraft/show/116789651,10:00,14:59,310,"$315,564.00","$286,171.00",$923.13,"$57,425.62"
MIA - TYS,58045346137,M-CID-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/58045346137,https://www.airlines-manager.com/aircraft/show/116789652,14:45,19:44,310,"$315,564.00","$286,171.00",$923.13,"$57,425.62"
MIA - TYS,58057474946,M-CID-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/58057474946,https://www.airlines-manager.com/aircraft/show/116789653,22:00,2:59,310,"$315,564.00","$286,171.00",$923.13,"$57,425.62"
MIA - YUL,58024780703,M-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/58024780703,https://www.airlines-manager.com/aircraft/show/113101225,6:30,13:59,400,"$630,873.00","$576,566.00","$1,441.42","$77,046.68"
MIA - YUL,58034914020,M-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/58034914020,https://www.airlines-manager.com/aircraft/show/113101226,11:00,18:29,400,"630,873$","576,566$","$1,441.42","$77,046.68"
MIA - YUL,58045346159,M-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/58045346159,https://www.airlines-manager.com/aircraft/show/113101227,15:00,22:29,400,"630,873$","576,566$","$1,441.42","$77,046.68"
MIA - YUL,58060881878,M-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/58060881878,https://www.airlines-manager.com/aircraft/show/113101224,23:45,7:14,400,"$630,873.00","$576,566.00","$1,441.42","$77,046.68"
MIA - YVR,58034914019,M-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/58034914019,https://www.airlines-manager.com/aircraft/show/113101224,11:00,23:44,400,"$1,049,041.00","$964,395.00","$2,410.99","$75,737.83"
MIA - YVR,58042065653,M-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/58042065653,https://www.airlines-manager.com/aircraft/show/113101225,14:00,2:44,400,"$1,049,041.00","$964,395.00","$2,410.99","$75,737.83"
MIA - YVR,58051861570,M-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/58051861570,https://www.airlines-manager.com/aircraft/show/113101226,18:30,7:14,400,"$1,049,041.00","$964,395.00","$2,410.99","$75,737.83"
MIA - YVR,58059513276,M-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/58059513276,https://www.airlines-manager.com/aircraft/show/113101227,22:30,11:14,400,"$1,049,041.00","$964,395.00","$2,410.99","$75,737.83"
MIA - YYC,58017973052,M-SJC-YYC-1,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/58017973052,https://www.airlines-manager.com/aircraft/show/107763569,0:00,11:44,320,"$733,218.00","$664,622.00","$2,076.94","$56,643.92"
MIA - YYC,58017973053,M-SJC-YYC-2,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/58017973053,https://www.airlines-manager.com/aircraft/show/107763568,2:00,13:44,320,"$733,218.00","$664,622.00","$2,076.94","$56,643.92"
MIA - YYC,58021655823,M-SJC-YYC-3,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/58021655823,https://www.airlines-manager.com/aircraft/show/107763567,4:00,15:44,320,"$733,218.00","$664,622.00","$2,076.94","$56,643.92"
MIA - YYC,58038353872,M-SJC-YYC-4,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/58038353872,https://www.airlines-manager.com/aircraft/show/107763564,12:00,23:44,320,"$733,218.00","$664,622.00","$2,076.94","$56,643.92"
MIA - YYC,58042065670,M-SJC-YYC-5,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/58042065670,https://www.airlines-manager.com/aircraft/show/107763563,14:00,1:44,320,"$733,218.00","$664,622.00","$2,076.94","$56,643.92"
MIA - YYZ,58017973603,M-BWI-YYZ-3,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/58017973603,https://www.airlines-manager.com/aircraft/show/92153441,2:45,9:44,310,"$439,732.00","$392,992.00","$1,267.72","$56,275.70"
MIA - YYZ,58021655935,M-BWI-YYZ-6 B,A319-100,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/58021655935,https://www.airlines-manager.com/aircraft/show/120519717,4:45,11:44,198,"$329,542.00","$292,098.00","$1,475.24","$41,827.88"
MIA - YYZ,58034913904,M-BWI-YYZ-4,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/58034913904,https://www.airlines-manager.com/aircraft/show/92153442,10:00,16:59,310,"$439,732.00","$392,992.00","$1,267.72","$56,275.70"
MIA - YYZ,58038353893,M-BWI-YYZ-5,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/58038353893,https://www.airlines-manager.com/aircraft/show/92153439,12:00,18:59,310,"$439,732.00","$392,992.00","$1,267.72","$56,275.70"
MIA - YYZ,58045346262,M-BWI-YYZ-1,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/58045346262,https://www.airlines-manager.com/aircraft/show/92153443,15:45,22:44,310,"$439,732.00","$392,992.00","$1,267.72","$56,275.70"
MIA - YYZ,58051861615,M-BWI-YYZ-2,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/58051861615,https://www.airlines-manager.com/aircraft/show/92153440,18:45,1:44,310,"$439,732.00","$392,992.00","$1,267.72","$56,275.70"
SFO - ABQ,58031343147,S-MCI-OMA-1,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/58031343147,https://www.airlines-manager.com/aircraft/show/88239553,8:45,14:14,320,"$351,204.00","$311,153.00",$972.35,"$56,745.23"
SFO - ABQ,58031343148,S-MCI-OMA-5 B,A319-100,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/58031343148,https://www.airlines-manager.com/aircraft/show/105223003,8:45,14:14,198,"$266,605.00","$238,475.00","$1,204.42","$43,490.88"
SFO - ABQ,58034913971,S-MCI-OMA-4,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/58034913971,https://www.airlines-manager.com/aircraft/show/88239557,10:30,15:59,320,"351,204$","311,153$",$972.35,"$56,745.23"
SFO - ABQ,58045346164,S-MCI-OMA-3,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/58045346164,https://www.airlines-manager.com/aircraft/show/88239555,15:00,20:29,320,"$351,204.00","$311,153.00",$972.35,"$56,745.23"
SFO - ABQ,58059513307,S-MCI-OMA-2,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/58059513307,https://www.airlines-manager.com/aircraft/show/88239554,22:45,4:14,320,"$351,204.00","$311,153.00",$972.35,"$56,745.23"
SFO - ALB,58017973184,S-ALB-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/58017973184,https://www.airlines-manager.com/aircraft/show/112650097,0:30,12:29,310,"$737,199.00","$681,035.00","$2,196.89","$56,831.85"
SFO - ALB,58024780636,S-ALB-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/58024780636,https://www.airlines-manager.com/aircraft/show/112650096,5:30,17:29,310,"$737,199.00","$681,035.00","$2,196.89","$56,831.85"
SFO - ALB,58027885505,S-ALB-CAK-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/58027885505,https://www.airlines-manager.com/aircraft/show/112650090,7:30,19:29,198,"551,373$","506,332$","$2,557.23","$42,253.02"
SFO - ALB,58042065714,S-ALB-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/58042065714,https://www.airlines-manager.com/aircraft/show/112650099,14:00,1:59,310,"$737,199.00","$681,035.00","$2,196.89","$56,831.85"
SFO - ALB,58051861519,S-ALB-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/58051861519,https://www.airlines-manager.com/aircraft/show/112650098,18:00,5:59,310,"$737,199.00","$681,035.00","$2,196.89","$56,831.85"
SFO - ANC,58017973569,S-BWI-ANC-4,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/58017973569,https://www.airlines-manager.com/aircraft/show/106255848,2:30,12:14,338,"$665,760.00","$617,716.00","$1,827.56","$63,463.97"
SFO - ANC,58017973570,S-BWI-ANC-5,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/58017973570,https://www.airlines-manager.com/aircraft/show/106255849,3:30,13:14,338,"$665,760.00","$617,716.00","$1,827.56","$63,463.97"
SFO - ANC,58051861635,S-BWI-ANC-1,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/58051861635,https://www.airlines-manager.com/aircraft/show/106255845,19:00,4:44,338,"$665,760.00","$617,716.00","$1,827.56","$63,463.97"
SFO - ANC,58054747838,S-BWI-ANC-2,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/58054747838,https://www.airlines-manager.com/aircraft/show/106255846,20:00,5:44,338,"$665,760.00","$617,716.00","$1,827.56","$63,463.97"
SFO - ANC,58057474815,S-BWI-ANC-3,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/58057474815,https://www.airlines-manager.com/aircraft/show/106255847,21:00,6:44,338,"$665,760.00","$617,716.00","$1,827.56","$63,463.97"
SFO - ATL,58048703708,S-168C-3 B2,747-400,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/58048703708,https://www.airlines-manager.com/aircraft/show/120752303,17:00,2:44,968,"$1,863,868.00","$1,685,722.00","$1,741.45","$173,190.62"
SFO - ATL,58051861530,S-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/58051861530,https://www.airlines-manager.com/aircraft/show/107467212,18:00,4:29,112,"$307,106.00","$254,690.00","$2,274.02","$24,294.75"
SFO - ATL,58054747867,S-168D-6 B2,747-400,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/58054747867,https://www.airlines-manager.com/aircraft/show/120752299,20:00,5:44,968,"$1,863,868.00","$1,685,722.00","$1,741.45","$173,190.62"
SFO - AUS,58017973214,S-OGG-AUS-1,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/58017973214,https://www.airlines-manager.com/aircraft/show/92773481,0:45,8:44,310,"503,113$","458,860$","$1,480.19","$57,477.24"
SFO - AUS,58017973215,S-OGG-AUS-2,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/58017973215,https://www.airlines-manager.com/aircraft/show/92773480,2:45,10:44,310,"$503,113.00","$458,860.00","$1,480.19","$57,477.24"
SFO - AUS,58042065628,S-OGG-AUS-3,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/58042065628,https://www.airlines-manager.com/aircraft/show/92773479,13:30,21:29,310,"$503,113.00","$458,860.00","$1,480.19","$57,477.24"
SFO - AUS,58045346252,S-OGG-AUS-4,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/58045346252,https://www.airlines-manager.com/aircraft/show/92773478,15:30,23:29,310,"$503,113.00","$458,860.00","$1,480.19","$57,477.24"
SFO - AUS,58051861582,S-OGG-AUS-5,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/58051861582,https://www.airlines-manager.com/aircraft/show/92773477,18:30,2:29,310,"$503,113.00","$458,860.00","$1,480.19","$57,477.24"
SFO - BDL,58021655923,S-RSW-BDL-1,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/58021655923,https://www.airlines-manager.com/aircraft/show/84915098,4:45,16:59,320,"$745,353.00","$681,235.00","$2,128.86","$55,686.78"
SFO - BDL,58024780716,S-RSW-BDL-2,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/58024780716,https://www.airlines-manager.com/aircraft/show/84915099,6:45,18:59,320,"$745,353.00","$681,235.00","$2,128.86","$55,686.78"
SFO - BDL,58031343146,S-RSW-BDL-5,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/58031343146,https://www.airlines-manager.com/aircraft/show/84915102,8:45,20:59,320,"$745,353.00","$681,235.00","$2,128.86","$55,686.78"
SFO - BDL,58048703681,S-RSW-BDL-3,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/58048703681,https://www.airlines-manager.com/aircraft/show/84915100,17:00,5:14,320,"$745,353.00","$681,235.00","$2,128.86","$55,686.78"
SFO - BDL,58051861642,S-RSW-BDL-4,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/58051861642,https://www.airlines-manager.com/aircraft/show/84915101,19:00,7:14,320,"$745,353.00","$681,235.00","$2,128.86","$55,686.78"
SFO - BFF,58017973351,S-ICT-BFF-5,ERJ-175,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/58017973351,https://www.airlines-manager.com/aircraft/show/114912306,1:00,7:14,112,"$184,180.00","$161,791.00","$1,444.56","$25,955.78"
SFO - BFF,58017973352,S-ICT-BFF-4,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/58017973352,https://www.airlines-manager.com/aircraft/show/114912268,2:15,8:29,310,"$391,156.00","$356,860.00","$1,151.16","$57,250.27"
SFO - BFF,58031343105,S-ICT-BFF-3,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/58031343105,https://www.airlines-manager.com/aircraft/show/114912263,8:15,14:29,310,"$391,156.00","$356,860.00","$1,151.16","$57,250.27"
SFO - BFF,58045346319,S-ICT-BFF-2,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/58045346319,https://www.airlines-manager.com/aircraft/show/114912264,16:00,22:14,310,"$391,156.00","$356,860.00","$1,151.16","$57,250.27"
SFO - BFF,58059513420,S-ICT-BFF-1,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/58059513420,https://www.airlines-manager.com/aircraft/show/114912267,23:30,5:44,310,"$391,156.00","$356,860.00","$1,151.16","$57,250.27"
SFO - BHM,58024780629,S-BHM-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/58024780629,https://www.airlines-manager.com/aircraft/show/117782568,5:30,15:29,320,"$624,697.00","$570,602.00","$1,783.13","$57,155.46"
SFO - BHM,58027885462,S-BHM-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/58027885462,https://www.airlines-manager.com/aircraft/show/117782569,7:00,16:59,320,"624,697$","570,602$","$1,783.13","$57,155.46"
SFO - BHM,58045346218,S-BHM-GRR-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/58045346218,https://www.airlines-manager.com/aircraft/show/117782583,15:00,0:59,198,"469,973$","430,696$","$2,175.23","$43,141.50"
SFO - BHM,58054747817,S-BHM-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/58054747817,https://www.airlines-manager.com/aircraft/show/117782567,19:45,5:44,320,"624,697$","570,602$","$1,783.13","$57,155.46"
SFO - BHM,58057474935,S-BHM-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/58057474935,https://www.airlines-manager.com/aircraft/show/117782566,22:00,7:59,320,"624,697$","570,602$","$1,783.13","$57,155.46"
SFO - BIL,58017973561,S-FAR-BIL-4,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/58017973561,https://www.airlines-manager.com/aircraft/show/117782587,2:15,7:59,310,"357,113$","324,930$","$1,048.16","$56,673.84"
SFO - BIL,58031343196,S-FAR-BIL-3,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/58031343196,https://www.airlines-manager.com/aircraft/show/117782586,9:15,14:59,310,"$357,113.00","$324,930.00","$1,048.16","$56,673.84"
SFO - BIL,58045346210,S-FAR-BIL-2,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/58045346210,https://www.airlines-manager.com/aircraft/show/117782585,15:00,20:44,310,"$357,113.00","$324,930.00","$1,048.16","$56,673.84"
SFO - BIL,58059513331,S-FAR-BIL-1,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/58059513331,https://www.airlines-manager.com/aircraft/show/117782584,22:45,4:29,310,"$357,113.00","$324,930.00","$1,048.16","$56,673.84"
SFO - BNA,58017973367,S-BNA-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/58017973367,https://www.airlines-manager.com/aircraft/show/103365580,1:15,10:59,320,"$608,391.00","$552,114.00","$1,725.36","$56,724.04"
SFO - BNA,58024780690,S-BNA-CMH-6,ERJ-175,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/58024780690,https://www.airlines-manager.com/aircraft/show/82323681,6:00,15:44,112,"$286,104.00","$252,244.00","$2,252.18","$25,915.48"
SFO - BNA,58042065518,S-BNA-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/58042065518,https://www.airlines-manager.com/aircraft/show/103365583,13:00,22:44,320,"$608,391.00","$552,114.00","$1,725.36","$56,724.04"
SFO - BNA,58045346172,S-BNA-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/58045346172,https://www.airlines-manager.com/aircraft/show/103365582,15:00,0:44,320,"$608,391.00","$552,114.00","$1,725.36","$56,724.04"
SFO - BNA,58045346173,S-BNA-CMH-5,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/58045346173,https://www.airlines-manager.com/aircraft/show/103365579,15:45,1:29,320,"$608,391.00","$552,114.00","$1,725.36","$56,724.04"
SFO - BNA,58059513391,S-BNA-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/58059513391,https://www.airlines-manager.com/aircraft/show/103365581,23:15,8:59,320,"$608,391.00","$552,114.00","$1,725.36","$56,724.04"
SFO - BOI,58017973362,S-CLE-MKE-2,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/58017973362,https://www.airlines-manager.com/aircraft/show/92519369,1:15,5:29,320,"$248,121.00","$217,386.00",$679.33,"$51,351.02"
SFO - BOI,58034913816,S-CLE-MKE-1,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/58034913816,https://www.airlines-manager.com/aircraft/show/92519368,9:45,13:59,320,"$248,121.00","$217,386.00",$679.33,"$51,351.02"
SFO - BOI,58045346127,S-CLE-MKE-4,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/58045346127,https://www.airlines-manager.com/aircraft/show/92519371,14:45,18:59,320,"$248,121.00","$217,386.00",$679.33,"$51,351.02"
SFO - BOI,58045346128,S-CLE-MKE-3,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/58045346128,https://www.airlines-manager.com/aircraft/show/92519367,16:00,20:14,320,"$248,121.00","$217,386.00",$679.33,"$51,351.02"
SFO - BOS,58017973098,S-BOS-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/58017973098,https://www.airlines-manager.com/aircraft/show/104864961,0:15,12:44,338,"841,524$","778,167$","$2,302.27","$62,336.48"
SFO - BOS,58038353841,S-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/58038353841,https://www.airlines-manager.com/aircraft/show/120141531,11:30,23:59,0,"$222,034.00","$134,572.00",#DIV/0!,"$10,780.13"
SFO - BOS,58042065468,S-BOS-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/58042065468,https://www.airlines-manager.com/aircraft/show/104901564,13:00,1:29,338,"$841,524.00","$778,167.00","$2,302.27","$62,336.48"
SFO - BOS,58042065469,S-BOS-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/58042065469,https://www.airlines-manager.com/aircraft/show/104870960,14:00,2:29,338,"$841,524.00","$778,167.00","$2,302.27","$62,336.48"
SFO - BOS,58045346258,S-BOS-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/58045346258,https://www.airlines-manager.com/aircraft/show/104874465,15:45,4:14,338,"$841,524.00","$778,167.00","$2,302.27","$62,336.48"
SFO - BOS,58054747881,S-BOS-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/58054747881,https://www.airlines-manager.com/aircraft/show/104901544,20:15,8:44,338,"$841,524.00","$778,167.00","$2,302.27","$62,336.48"
SFO - BTV,58017973068,S-BTV-LEX-4,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/58017973068,https://www.airlines-manager.com/aircraft/show/112650092,0:00,11:59,310,"$733,303.00","$677,318.00","$2,184.90","$56,521.67"
SFO - BTV,58024780685,S-BTV-LEX-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/58024780685,https://www.airlines-manager.com/aircraft/show/112650089,6:00,17:59,198,"$549,048.00","$504,149.00","$2,546.21","$42,070.85"
SFO - BTV,58042065712,S-BTV-LEX-1,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/58042065712,https://www.airlines-manager.com/aircraft/show/112650095,14:00,1:59,310,"$733,303.00","$677,318.00","$2,184.90","$56,521.67"
SFO - BTV,58051861518,S-BTV-LEX-2,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/58051861518,https://www.airlines-manager.com/aircraft/show/112650094,18:00,5:59,310,"$733,303.00","$677,318.00","$2,184.90","$56,521.67"
SFO - BTV,58054747860,S-BTV-LEX-3,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/58054747860,https://www.airlines-manager.com/aircraft/show/112650093,20:00,7:59,310,"$733,303.00","$677,318.00","$2,184.90","$56,521.67"
SFO - BUF,58017973454,S-PVD-BUF-1,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/58017973454,https://www.airlines-manager.com/aircraft/show/112650108,1:30,12:29,310,"690,191$","636,733$","$2,053.98","$57,972.66"
SFO - BUF,58024780637,S-PVD-BUF-2,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/58024780637,https://www.airlines-manager.com/aircraft/show/112650107,5:30,16:29,310,"$690,191.00","$636,733.00","$2,053.98","$57,972.66"
SFO - BUF,58027885499,S-PVD-BUF-3,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/58027885499,https://www.airlines-manager.com/aircraft/show/112650106,7:30,18:29,310,"$690,191.00","$636,733.00","$2,053.98","$57,972.66"
SFO - BUF,58042065587,S-PVD-BUF-4,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/58042065587,https://www.airlines-manager.com/aircraft/show/112650105,13:00,23:59,310,"690,191$","636,733$","$2,053.98","$57,972.66"
SFO - BUF,58051861520,S-PVD-BUF-5,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/58051861520,https://www.airlines-manager.com/aircraft/show/112650104,18:00,4:59,310,"690,191$","636,733$","$2,053.98","$57,972.66"
SFO - BUR,58017973557,S-SAV-JAN-1,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/58017973557,https://www.airlines-manager.com/aircraft/show/114912265,2:15,5:44,310,"174,124$","151,614$",$489.08,"$43,525.55"
SFO - BUR,58021655879,S-SAV-JAN-4,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/58021655879,https://www.airlines-manager.com/aircraft/show/114912270,4:15,7:44,310,"174,124$","151,614$",$489.08,"$43,525.55"
SFO - BUR,58038353839,S-SAV-JAN-5 B,A319-100,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/58038353839,https://www.airlines-manager.com/aircraft/show/114917486,11:30,14:59,198,"131,182$","113,160$",$571.52,"$32,486.12"
SFO - BUR,58045346254,S-SAV-JAN-3,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/58045346254,https://www.airlines-manager.com/aircraft/show/114912269,15:30,18:59,310,"174,124$","151,614$",$489.08,"$43,525.55"
SFO - BUR,58048703706,S-SAV-JAN-2,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/58048703706,https://www.airlines-manager.com/aircraft/show/114912266,17:00,20:29,310,"$174,124.00","$151,614.00",$489.08,"$43,525.55"
SFO - BWI,58021655916,S-BWI-ANC-1,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/58021655916,https://www.airlines-manager.com/aircraft/show/106255845,4:45,16:14,338,"$792,718.00","$734,335.00","$2,172.59","$63,947.90"
SFO - BWI,58024780647,S-BWI-ANC-2,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/58024780647,https://www.airlines-manager.com/aircraft/show/106255846,5:45,17:14,338,"$792,718.00","$734,335.00","$2,172.59","$63,947.90"
SFO - BWI,58024780648,S-BWI-ANC-3,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/58024780648,https://www.airlines-manager.com/aircraft/show/106255847,6:45,18:14,338,"$792,718.00","$734,335.00","$2,172.59","$63,947.90"
SFO - BWI,58045346147,S-BWI-ANC-4,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/58045346147,https://www.airlines-manager.com/aircraft/show/106255848,15:00,2:29,338,"$792,718.00","$734,335.00","$2,172.59","$63,947.90"
SFO - BWI,58045346148,S-BWI-ANC-5,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/58045346148,https://www.airlines-manager.com/aircraft/show/106255849,16:00,3:29,338,"$792,718.00","$734,335.00","$2,172.59","$63,947.90"
SFO - BZN,58034913815,S-ROC-COS-1,A321neo,https://www.airlines-manager.com/network/showline/50555367,https://www.airlines-manager.com/network/showflight/58034913815,https://www.airlines-manager.com/aircraft/show/120112476,9:45,14:59,338,"$357,990.00","$329,036.00",$973.48,"$62,873.12"
SFO - BZN,58045346149,S-ROC-COS-3,A321neo,https://www.airlines-manager.com/network/showline/50555367,https://www.airlines-manager.com/network/showflight/58045346149,https://www.airlines-manager.com/aircraft/show/120112474,15:00,20:14,338,"$357,990.00","$329,036.00",$973.48,"$62,873.12"
SFO - BZN,58051861598,S-ROC-COS-2,A321neo,https://www.airlines-manager.com/network/showline/50555367,https://www.airlines-manager.com/network/showflight/58051861598,https://www.airlines-manager.com/aircraft/show/120112475,18:45,23:59,338,"$357,990.00","$329,036.00",$973.48,"$62,873.12"
SFO - BZN,58060881877,S-ROC-COS-4,A321neo,https://www.airlines-manager.com/network/showline/50555367,https://www.airlines-manager.com/network/showflight/58060881877,https://www.airlines-manager.com/aircraft/show/120051490,23:45,4:59,277,"319,704$","291,872$","$1,053.69","$55,771.72"
SFO - CAK,58017973536,S-ALB-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/58017973536,https://www.airlines-manager.com/aircraft/show/112650099,2:00,12:29,310,"$660,859.00","$610,685.00","$1,969.95","$58,252.94"
SFO - CAK,58024780683,S-ALB-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/58024780683,https://www.airlines-manager.com/aircraft/show/112650098,6:00,16:29,310,"$660,859.00","$610,685.00","$1,969.95","$58,252.94"
SFO - CAK,58042065713,S-ALB-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/58042065713,https://www.airlines-manager.com/aircraft/show/112650097,14:00,0:29,310,"$660,859.00","$610,685.00","$1,969.95","$58,252.94"
SFO - CAK,58051861674,S-ALB-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/58051861674,https://www.airlines-manager.com/aircraft/show/112650096,19:00,5:29,310,"$660,859.00","$610,685.00","$1,969.95","$58,252.94"
SFO - CAK,58057474845,S-ALB-CAK-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/58057474845,https://www.airlines-manager.com/aircraft/show/112650090,21:00,7:29,198,"$496,365.00","$456,132.00","$2,303.70","$43,510.21"
SFO - CDG,58017973680,S-168D-2 B2,747-400,https://www.airlines-manager.com/network/showline/50769259,https://www.airlines-manager.com/network/showflight/58017973680,https://www.airlines-manager.com/aircraft/show/120752295,3:30,1:29,968,"$4,129,579.00","$3,785,477.00","$3,910.62","$172,197.59"
SFO - CDG,58057474896,S-168C-1 B2,747-400,https://www.airlines-manager.com/network/showline/50769259,https://www.airlines-manager.com/network/showflight/58057474896,https://www.airlines-manager.com/aircraft/show/120752301,21:30,19:29,947,"$4,070,845.00","$3,730,372.00","$3,939.15","$169,690.92"
SFO - CHS,58017973419,S-MHT-CHS-1,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/58017973419,https://www.airlines-manager.com/aircraft/show/114917465,1:30,12:44,320,"$704,942.00","$645,793.00","$2,018.10","$57,488.99"
SFO - CHS,58024780627,S-MHT-CHS-2,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/58024780627,https://www.airlines-manager.com/aircraft/show/114917464,5:30,16:44,320,"$704,942.00","$645,793.00","$2,018.10","$57,488.99"
SFO - CHS,58031343141,S-MHT-CHS-5 B,A319-100,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/58031343141,https://www.airlines-manager.com/aircraft/show/114912262,8:30,19:59,198,"$531,446.00","$488,189.00","$2,465.60","$42,512.83"
SFO - CHS,58042065532,S-MHT-CHS-3,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/58042065532,https://www.airlines-manager.com/aircraft/show/114917463,13:00,0:14,320,"$704,942.00","$645,793.00","$2,018.10","$57,488.99"
SFO - CHS,58048703690,S-MHT-CHS-4,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/58048703690,https://www.airlines-manager.com/aircraft/show/114266973,17:00,4:14,320,"$704,942.00","$645,793.00","$2,018.10","$57,488.99"
SFO - CID,58017973420,S-YEG-YYC-1,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/58017973420,https://www.airlines-manager.com/aircraft/show/117782561,1:30,9:59,320,"$530,499.00","$483,550.00","$1,511.09","$57,000.00"
SFO - CID,58024780706,S-YEG-YYC-4,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/58024780706,https://www.airlines-manager.com/aircraft/show/116932364,6:30,14:59,320,"530,499$","483,550$","$1,511.09","$57,000.00"
SFO - CID,58042065535,S-YEG-YYC-3,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/58042065535,https://www.airlines-manager.com/aircraft/show/117782559,13:00,21:29,320,"$530,499.00","$483,550.00","$1,511.09","$57,000.00"
SFO - CID,58051861662,S-YEG-YYC-2,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/58051861662,https://www.airlines-manager.com/aircraft/show/117782560,19:00,3:29,320,"$530,499.00","$483,550.00","$1,511.09","$57,000.00"
SFO - CID,58057474846,S-YEG-YYC-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/58057474846,https://www.airlines-manager.com/aircraft/show/117782581,21:00,5:29,198,"$400,688.00","$366,754.00","$1,852.29","$43,232.30"
SFO - CLE,58024780622,S-CLE-MKE-2,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/58024780622,https://www.airlines-manager.com/aircraft/show/92519369,5:30,15:59,320,"$653,869.00","$596,150.00","$1,862.97","$56,866.45"
SFO - CLE,58024780623,S-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/58024780623,https://www.airlines-manager.com/aircraft/show/107467212,6:30,16:59,112,"307,058$","271,917$","$2,427.83","$25,938.03"
SFO - CLE,58027885490,S-CLE-MKE-5,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/58027885490,https://www.airlines-manager.com/aircraft/show/92519370,7:30,17:59,320,"$653,869.00","$596,150.00","$1,862.97","$56,866.45"
SFO - CLE,58042065662,S-CLE-MKE-1,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/58042065662,https://www.airlines-manager.com/aircraft/show/92519368,14:00,0:29,320,"$653,869.00","$596,150.00","$1,862.97","$56,866.45"
SFO - CLE,58051861643,S-CLE-MKE-4,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/58051861643,https://www.airlines-manager.com/aircraft/show/92519371,19:00,5:29,320,"$653,869.00","$596,150.00","$1,862.97","$56,866.45"
SFO - CLE,58054747887,S-CLE-MKE-3,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/58054747887,https://www.airlines-manager.com/aircraft/show/92519367,20:15,6:44,320,"$653,869.00","$596,150.00","$1,862.97","$56,866.45"
SFO - CLT,58017973038,S-IAD-CLT-3,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/58017973038,https://www.airlines-manager.com/aircraft/show/96135563,0:00,10:44,400,"$893,309.00","$813,344.00","$2,033.36","$75,777.39"
SFO - CLT,58024780668,S-IAD-CLT-4,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/58024780668,https://www.airlines-manager.com/aircraft/show/96135562,6:00,16:44,400,"$893,309.00","$813,344.00","$2,033.36","$75,777.39"
SFO - CLT,58042065613,S-IAD-CLT-1,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/58042065613,https://www.airlines-manager.com/aircraft/show/96135565,13:15,23:59,400,"$893,309.00","$813,344.00","$2,033.36","$75,777.39"
SFO - CLT,58045346234,S-IAD-CLT-5,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/58045346234,https://www.airlines-manager.com/aircraft/show/96135561,15:15,1:59,400,"$893,309.00","$813,344.00","$2,033.36","$75,777.39"
SFO - CLT,58048703722,S-IAD-CLT-2,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/58048703722,https://www.airlines-manager.com/aircraft/show/96135564,17:15,3:59,400,"$893,309.00","$813,344.00","$2,033.36","$75,777.39"
SFO - CMH,58017973202,S-BNA-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/58017973202,https://www.airlines-manager.com/aircraft/show/103365582,0:45,10:59,320,"$638,686.00","$581,389.00","$1,816.84","$56,813.26"
SFO - CMH,58024780626,S-BNA-CMH-5,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/58024780626,https://www.airlines-manager.com/aircraft/show/103365579,5:30,15:44,320,"$638,686.00","$581,389.00","$1,816.84","$56,813.26"
SFO - CMH,58042065517,S-BNA-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/58042065517,https://www.airlines-manager.com/aircraft/show/103365581,13:00,23:14,320,"$638,686.00","$581,389.00","$1,816.84","$56,813.26"
SFO - CMH,58045346170,S-BNA-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/58045346170,https://www.airlines-manager.com/aircraft/show/103365580,15:00,1:14,320,"$638,686.00","$581,389.00","$1,816.84","$56,813.26"
SFO - CMH,58045346171,S-BNA-CMH-6,ERJ-175,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/58045346171,https://www.airlines-manager.com/aircraft/show/82323681,15:45,1:59,112,"$300,499.00","$265,689.00","$2,372.22","$25,963.09"
SFO - CMH,58059513310,S-BNA-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/58059513310,https://www.airlines-manager.com/aircraft/show/103365583,22:45,8:59,320,"$638,686.00","$581,389.00","$1,816.84","$56,813.26"
SFO - COS,58017973544,S-ROC-COS-1,A321neo,https://www.airlines-manager.com/network/showline/50555364,https://www.airlines-manager.com/network/showflight/58017973544,https://www.airlines-manager.com/aircraft/show/120112476,2:15,7:59,338,"$397,466.00","$363,971.00","$1,076.84","$63,483.31"
SFO - COS,58031343188,S-ROC-COS-3,A321neo,https://www.airlines-manager.com/network/showline/50555364,https://www.airlines-manager.com/network/showflight/58031343188,https://www.airlines-manager.com/aircraft/show/120112474,9:15,14:59,338,"$397,466.00","$363,971.00","$1,076.84","$63,483.31"
SFO - COS,58042065478,S-ROC-COS-2,A321neo,https://www.airlines-manager.com/network/showline/50555364,https://www.airlines-manager.com/network/showflight/58042065478,https://www.airlines-manager.com/aircraft/show/120112475,13:00,18:44,338,"$397,466.00","$363,971.00","$1,076.84","$63,483.31"
SFO - COS,58051861489,S-ROC-COS-4,A321neo,https://www.airlines-manager.com/network/showline/50555364,https://www.airlines-manager.com/network/showflight/58051861489,https://www.airlines-manager.com/aircraft/show/120051490,18:00,23:44,338,"$397,466.00","$363,971.00","$1,076.84","$63,483.31"
SFO - CUN,58017973114,S-YOW-CUN-1,757-300,https://www.airlines-manager.com/network/showline/50555302,https://www.airlines-manager.com/network/showflight/58017973114,https://www.airlines-manager.com/aircraft/show/120056768,0:15,11:29,400,"$948,335.00","$874,378.00","$2,185.95","$77,837.80"
SFO - CUN,58017973115,S-YOW-CUN-2,757-300,https://www.airlines-manager.com/network/showline/50555302,https://www.airlines-manager.com/network/showflight/58017973115,https://www.airlines-manager.com/aircraft/show/120056767,1:15,12:29,400,"$948,335.00","$874,378.00","$2,185.95","$77,837.80"
SFO - CUN,58042065497,S-YOW-CUN-3,757-300,https://www.airlines-manager.com/network/showline/50555302,https://www.airlines-manager.com/network/showflight/58042065497,https://www.airlines-manager.com/aircraft/show/120056766,13:00,0:14,400,"$948,335.00","$874,378.00","$2,185.95","$77,837.80"
SFO - CUN,58042065498,S-YOW-CUN-4,757-300,https://www.airlines-manager.com/network/showline/50555302,https://www.airlines-manager.com/network/showflight/58042065498,https://www.airlines-manager.com/aircraft/show/120056765,14:00,1:14,400,"$948,335.00","$874,378.00","$2,185.95","$77,837.80"
SFO - CVG,58021655953,S-IND-CVG-3,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/58021655953,https://www.airlines-manager.com/aircraft/show/99316504,5:00,14:59,310,"$630,041.00","$577,014.00","$1,861.34","$57,797.73"
SFO - CVG,58027885464,S-IND-CVG-5,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/58027885464,https://www.airlines-manager.com/aircraft/show/99316502,7:00,16:59,310,"$630,041.00","$577,014.00","$1,861.34","$57,797.73"
SFO - CVG,58042065573,S-IND-CVG-2,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/58042065573,https://www.airlines-manager.com/aircraft/show/99316505,13:00,22:59,310,"$630,041.00","$577,014.00","$1,861.34","$57,797.73"
SFO - CVG,58045346191,S-IND-CVG-4,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/58045346191,https://www.airlines-manager.com/aircraft/show/99316503,15:00,0:59,310,"$630,041.00","$577,014.00","$1,861.34","$57,797.73"
SFO - CVG,58048703719,S-IND-CVG-6,ERJ-175,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/58048703719,https://www.airlines-manager.com/aircraft/show/99174346,17:00,2:59,112,"$295,248.00","$259,885.00","$2,320.40","$26,031.89"
SFO - CVG,58059513328,S-IND-CVG-1,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/58059513328,https://www.airlines-manager.com/aircraft/show/99316506,22:45,8:44,310,"$630,041.00","$577,014.00","$1,861.34","$57,797.73"
SFO - DEL,58017973074,S-168B-1 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/58017973074,https://www.airlines-manager.com/aircraft/show/86832727,0:00,5:29,1046,"$5,812,778.00","$5,394,209.00","$5,156.99","$983,746.32"
SFO - DEL,58017973075,S-168A-1 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/58017973075,https://www.airlines-manager.com/aircraft/show/86969602,2:00,7:29,1046,"$5,812,778.00","$5,394,209.00","$5,156.99","$983,746.32"
SFO - DEN,58017973111,S-IAH-MEX-5,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/58017973111,https://www.airlines-manager.com/aircraft/show/101045335,0:15,5:59,400,"$475,022.00","$407,058.00","$1,017.65","$70,998.49"
SFO - DEN,58024780702,S-IAH-MEX-1,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/58024780702,https://www.airlines-manager.com/aircraft/show/101045339,6:30,12:14,400,"$475,022.00","$407,058.00","$1,017.65","$70,998.49"
SFO - DEN,58031343116,S-IAH-MEX-4,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/58031343116,https://www.airlines-manager.com/aircraft/show/101045336,8:30,14:14,400,"$475,022.00","$407,058.00","$1,017.65","$70,998.49"
SFO - DEN,58042065494,S-IAH-MEX-3,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/58042065494,https://www.airlines-manager.com/aircraft/show/101045337,13:00,18:44,400,"$475,022.00","$407,058.00","$1,017.65","$70,998.49"
SFO - DEN,58057474965,S-IAH-MEX-2,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/58057474965,https://www.airlines-manager.com/aircraft/show/101045338,22:15,3:59,386,"$465,223.00","$397,610.00","$1,030.08","$69,350.58"
SFO - DFW,58017973192,S-DFW-2,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/58017973192,https://www.airlines-manager.com/aircraft/show/120752619,0:45,8:29,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DFW,58027885523,S-DFW-1,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/58027885523,https://www.airlines-manager.com/aircraft/show/120517724,8:00,15:44,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DFW,58031343166,S-DFW-2,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/58031343166,https://www.airlines-manager.com/aircraft/show/120752619,9:00,16:44,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DFW,58045346259,S-DFW-1,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/58045346259,https://www.airlines-manager.com/aircraft/show/120517724,15:45,23:29,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DFW,58048703646,S-DFW-2,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/58048703646,https://www.airlines-manager.com/aircraft/show/120752619,16:45,0:29,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DFW,58059513408,S-DFW-1,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/58059513408,https://www.airlines-manager.com/aircraft/show/120517724,23:30,7:14,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DSM,58021655903,S-TUL-DSM-3,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/58021655903,https://www.airlines-manager.com/aircraft/show/108410858,4:30,12:29,320,"$508,775.00","$462,937.00","$1,446.68","$57,987.93"
SFO - DSM,58042065525,S-TUL-DSM-2,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/58042065525,https://www.airlines-manager.com/aircraft/show/108410857,13:00,20:59,320,"$508,775.00","$462,937.00","$1,446.68","$57,987.93"
SFO - DSM,58045346231,S-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/58045346231,https://www.airlines-manager.com/aircraft/show/108466264,15:00,23:14,112,"$240,808.00","$213,387.00","$1,905.24","$25,917.45"
SFO - DSM,58059513314,S-TUL-DSM-1,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/58059513314,https://www.airlines-manager.com/aircraft/show/108410856,22:45,6:44,320,"$508,775.00","$462,937.00","$1,446.68","$57,987.93"
SFO - DSM,58059513315,S-TUL-DSM-4,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/58059513315,https://www.airlines-manager.com/aircraft/show/108410859,23:30,7:29,320,"$508,775.00","$462,937.00","$1,446.68","$57,987.93"
SFO - DTW,58021655897,S-ORD-DTW-4,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/58021655897,https://www.airlines-manager.com/aircraft/show/101045331,4:30,14:29,400,"$823,515.00","$748,392.00","$1,870.98","$74,964.14"
SFO - DTW,58021655898,S-ORD-DTW-3,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/58021655898,https://www.airlines-manager.com/aircraft/show/101045332,5:00,14:59,400,"$823,515.00","$748,392.00","$1,870.98","$74,964.14"
SFO - DTW,58045346156,S-ORD-DTW-2,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/58045346156,https://www.airlines-manager.com/aircraft/show/101045333,15:00,0:59,400,"$823,515.00","$748,392.00","$1,870.98","$74,964.14"
SFO - DTW,58048703678,S-ORD-DTW-5,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/58048703678,https://www.airlines-manager.com/aircraft/show/101045330,17:00,2:59,400,"$823,515.00","$748,392.00","$1,870.98","$74,964.14"
SFO - DTW,58057474930,S-ORD-DTW-1,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/58057474930,https://www.airlines-manager.com/aircraft/show/101045334,22:00,7:59,400,"$823,515.00","$748,392.00","$1,870.98","$74,964.14"
SFO - DXB,58024780638,S-168B-2 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/58024780638,https://www.airlines-manager.com/aircraft/show/87566901,5:30,12:29,1046,"$6,017,199.00","$5,552,011.00","$5,307.85","$795,037.37"
SFO - DXB,58027885501,S-168A-2 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/58027885501,https://www.airlines-manager.com/aircraft/show/86596991,7:30,14:29,1046,"$6,017,199.00","$5,552,011.00","$5,307.85","$795,037.37"
SFO - ELP,58024780658,S-ICT-BFF-1,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/58024780658,https://www.airlines-manager.com/aircraft/show/114912267,5:45,11:44,310,"$376,198.00","$341,426.00","$1,101.37","$57,062.84"
SFO - ELP,58027885485,S-ICT-BFF-5,ERJ-175,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/58027885485,https://www.airlines-manager.com/aircraft/show/114912306,7:15,13:14,112,"$178,042.00","$155,448.00","$1,387.93","$25,980.17"
SFO - ELP,58031343131,S-ICT-BFF-4,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/58031343131,https://www.airlines-manager.com/aircraft/show/114912268,8:30,14:29,310,"$376,198.00","$341,426.00","$1,101.37","$57,062.84"
SFO - ELP,58045346198,S-ICT-BFF-3,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/58045346198,https://www.airlines-manager.com/aircraft/show/114912263,15:00,20:59,310,"$376,198.00","$341,426.00","$1,101.37","$57,062.84"
SFO - ELP,58057474982,S-ICT-BFF-2,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/58057474982,https://www.airlines-manager.com/aircraft/show/114912264,22:15,4:14,310,"$376,198.00","$341,426.00","$1,101.37","$57,062.84"
SFO - EUG,58017973485,S-BHM-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/58017973485,https://www.airlines-manager.com/aircraft/show/117782568,1:45,5:29,320,"217,713$","189,681$",$592.75,"$50,807.41"
SFO - EUG,58017973486,S-BHM-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/58017973486,https://www.airlines-manager.com/aircraft/show/117782569,3:15,6:59,320,"217,713$","189,681$",$592.75,"$50,807.41"
SFO - EUG,58045346306,S-BHM-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/58045346306,https://www.airlines-manager.com/aircraft/show/117782567,16:00,19:44,320,"217,713$","189,681$",$592.75,"$50,807.41"
SFO - EUG,58048703776,S-BHM-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/58048703776,https://www.airlines-manager.com/aircraft/show/117782566,17:45,21:29,270,"197,028$","169,603$",$628.16,"$45,429.38"
SFO - FAR,58017973343,S-FAR-BIL-3,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/58017973343,https://www.airlines-manager.com/aircraft/show/117782586,1:00,8:44,310,"491,795$","452,290$","$1,459.00","$58,485.78"
SFO - FAR,58027885481,S-FAR-BIL-2,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/58027885481,https://www.airlines-manager.com/aircraft/show/117782585,7:15,14:59,310,"491,795$","452,290$","$1,459.00","$58,485.78"
SFO - FAR,58045346202,S-FAR-BIL-1,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/58045346202,https://www.airlines-manager.com/aircraft/show/117782584,15:00,22:44,310,"491,795$","452,290$","$1,459.00","$58,485.78"
SFO - FAR,58051861586,S-FAR-BIL-4,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/58051861586,https://www.airlines-manager.com/aircraft/show/117782587,18:30,2:14,310,"491,795$","452,290$","$1,459.00","$58,485.78"
SFO - FAT,58017973525,S-TUL-DSM-2,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/58017973525,https://www.airlines-manager.com/aircraft/show/108410857,2:00,4:44,320,"95,749$","71,553$",$223.60,"$26,177.93"
SFO - FAT,58038353847,S-TUL-DSM-1,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/58038353847,https://www.airlines-manager.com/aircraft/show/108410856,11:45,14:29,320,"95,749$","71,553$",$223.60,"$26,177.93"
SFO - FAT,58042065527,S-TUL-DSM-4,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/58042065527,https://www.airlines-manager.com/aircraft/show/108410859,13:00,15:44,320,"95,749$","71,553$",$223.60,"$26,177.93"
SFO - FAT,58051861503,S-TUL-DSM-3,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/58051861503,https://www.airlines-manager.com/aircraft/show/108410858,18:00,20:44,320,"95,749$","71,553$",$223.60,"$26,177.93"
SFO - FAT,58059513406,S-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/58059513406,https://www.airlines-manager.com/aircraft/show/108466264,23:15,1:59,72,"34,482$","22,197$",$308.29,"$8,120.85"
SFO - FCA,58021655914,S-MAF-FCA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/58021655914,https://www.airlines-manager.com/aircraft/show/120056759,4:45,9:59,272,"305,111$","281,676$","$1,035.57","$53,823.44"
SFO - FCA,58042065464,S-MAF-FCA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/58042065464,https://www.airlines-manager.com/aircraft/show/120056760,13:00,18:14,272,"305,111$","281,676$","$1,035.57","$53,823.44"
SFO - FCA,58045346140,S-MAF-FCA-5,ERJ-175,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/58045346140,https://www.airlines-manager.com/aircraft/show/119652600,14:45,20:14,112,"160,704$","140,973$","$1,258.69","$25,709.36"
SFO - FCA,58054747804,S-MAF-FCA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/58054747804,https://www.airlines-manager.com/aircraft/show/120056761,19:45,0:59,272,"305,111$","281,676$","$1,035.57","$53,823.44"
SFO - FCA,58060881874,S-MAF-FCA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/58060881874,https://www.airlines-manager.com/aircraft/show/120056758,23:45,4:59,272,"305,111$","281,676$","$1,035.57","$53,823.44"
SFO - FLL,58017973117,S-FLL-TPA-2,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/58017973117,https://www.airlines-manager.com/aircraft/show/97955543,0:15,12:14,320,"739,785$","671,757$","$2,099.24","$56,057.61"
SFO - FLL,58021655860,S-FLL-TPA-4,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/58021655860,https://www.airlines-manager.com/aircraft/show/97955541,4:15,16:14,320,"739,785$","671,757$","$2,099.24","$56,057.61"
SFO - FLL,58027885502,S-FLL-TPA-6 B,A319-100,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/58027885502,https://www.airlines-manager.com/aircraft/show/97900729,7:30,19:44,198,"556,070$","506,591$","$2,558.54","$41,410.71"
SFO - FLL,58042065511,S-FLL-TPA-1,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/58042065511,https://www.airlines-manager.com/aircraft/show/97955544,13:00,0:59,320,"739,785$","671,757$","$2,099.24","$56,057.61"
SFO - FLL,58048703686,S-FLL-TPA-3,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/58048703686,https://www.airlines-manager.com/aircraft/show/97955542,17:00,4:59,320,"739,785$","671,757$","$2,099.24","$56,057.61"
SFO - FLL,58054747850,S-FLL-TPA-5,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/58054747850,https://www.airlines-manager.com/aircraft/show/97955540,20:00,7:59,320,"739,785$","671,757$","$2,099.24","$56,057.61"
SFO - FSD,58017973162,S-OKC-FSD-1,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/58017973162,https://www.airlines-manager.com/aircraft/show/107160378,0:30,7:59,320,"471,889$","428,607$","$1,339.40","$57,274.88"
SFO - FSD,58017973163,S-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/58017973163,https://www.airlines-manager.com/aircraft/show/107132310,2:00,9:29,112,"223,210$","197,491$","$1,763.31","$26,390.78"
SFO - FSD,58017973164,S-OKC-FSD-4,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/58017973164,https://www.airlines-manager.com/aircraft/show/107160381,3:00,10:29,320,"471,889$","428,607$","$1,339.40","$57,274.88"
SFO - FSD,58027885533,S-OKC-FSD-3,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/58027885533,https://www.airlines-manager.com/aircraft/show/107160380,8:00,15:29,320,"471,889$","428,607$","$1,339.40","$57,274.88"
SFO - FSD,58045346296,S-OKC-FSD-2,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/58045346296,https://www.airlines-manager.com/aircraft/show/107160379,16:00,23:29,290,"444,613$","402,461$","$1,387.80","$53,780.98"
SFO - GRR,58017973348,S-BHM-GRR-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/58017973348,https://www.airlines-manager.com/aircraft/show/117782583,1:00,10:44,198,"458,303$","419,852$","$2,120.46","$43,135.48"
SFO - GRR,58024780653,S-BHM-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/58024780653,https://www.airlines-manager.com/aircraft/show/117782567,5:45,15:29,320,"608,484$","555,512$","$1,735.98","$57,073.15"
SFO - GRR,58027885535,S-BHM-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/58027885535,https://www.airlines-manager.com/aircraft/show/117782566,8:00,17:44,320,"608,484$","555,512$","$1,735.98","$57,073.15"
SFO - GRR,58045346307,S-BHM-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/58045346307,https://www.airlines-manager.com/aircraft/show/117782568,16:00,1:44,320,"608,484$","555,512$","$1,735.98","$57,073.15"
SFO - GRR,58048703757,S-BHM-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/58048703757,https://www.airlines-manager.com/aircraft/show/117782569,17:30,3:14,320,"608,484$","555,512$","$1,735.98","$57,073.15"
SFO - GSO,58017973171,S-GSO-SYR-4,737-900ER,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/58017973171,https://www.airlines-manager.com/aircraft/show/119550235,0:30,11:29,320,"687,935$","629,220$","$1,966.31","$57,288.62"
SFO - GSO,58024780686,S-GSO-SYR-5,A319-100,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/58024780686,https://www.airlines-manager.com/aircraft/show/120112473,6:00,17:14,198,"519,051$","476,182$","$2,404.96","$42,390.09"
SFO - GSO,58038353890,S-GSO-SYR-1,737-900ER,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/58038353890,https://www.airlines-manager.com/aircraft/show/120056764,12:00,22:59,320,"687,935$","629,220$","$1,966.31","$57,288.62"
SFO - GSO,58042065541,S-GSO-SYR-2,737-900ER,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/58042065541,https://www.airlines-manager.com/aircraft/show/120056763,13:00,23:59,320,"687,935$","629,220$","$1,966.31","$57,288.62"
SFO - GSO,58059513416,S-GSO-SYR-3,737-900ER,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/58059513416,https://www.airlines-manager.com/aircraft/show/120056762,23:30,10:29,320,"687,935$","629,220$","$1,966.31","$57,288.62"
SFO - HKG,58057474867,S-168B-6 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/58057474867,https://www.airlines-manager.com/aircraft/show/87083947,21:15,23:59,1046,"5,282,521$","4,883,932$","$4,669.15","$1,786,804.39"
SFO - HKG,58059513402,S-168A-6 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/58059513402,https://www.airlines-manager.com/aircraft/show/88032836,23:15,1:59,1046,"5,282,521$","4,883,932$","$4,669.15","$1,786,804.39"
SFO - IAD,58017973039,S-IAD-CLT-1,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/58017973039,https://www.airlines-manager.com/aircraft/show/96135565,0:00,11:14,400,"912,332$","834,314$","$2,085.79","$74,271.28"
SFO - IAD,58021655813,S-IAD-CLT-5,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/58021655813,https://www.airlines-manager.com/aircraft/show/96135561,4:00,15:14,400,"912,332$","834,314$","$2,085.79","$74,271.28"
SFO - IAD,58024780669,S-IAD-CLT-2,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/58024780669,https://www.airlines-manager.com/aircraft/show/96135564,6:00,17:14,400,"912,332$","834,314$","$2,085.79","$74,271.28"
SFO - IAD,58038353941,S-IAD-CLT-3,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/58038353941,https://www.airlines-manager.com/aircraft/show/96135563,12:45,23:59,400,"912,332$","834,314$","$2,085.79","$74,271.28"
SFO - IAD,58048703647,S-IAD-CLT-4,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/58048703647,https://www.airlines-manager.com/aircraft/show/96135562,16:45,3:59,400,"912,332$","834,314$","$2,085.79","$74,271.28"
SFO - IAH,58021655921,S-IAH-MEX-2,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/58021655921,https://www.airlines-manager.com/aircraft/show/101045338,4:45,12:59,400,"694,602$","624,794$","$1,561.99","$75,885.91"
SFO - IAH,58024780715,S-IAH-MEX-5,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/58024780715,https://www.airlines-manager.com/aircraft/show/101045335,6:45,14:59,400,"694,602$","624,794$","$1,561.99","$75,885.91"
SFO - IAH,58042065496,S-IAH-MEX-1,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/58042065496,https://www.airlines-manager.com/aircraft/show/101045339,13:00,21:14,400,"694,602$","624,794$","$1,561.99","$75,885.91"
SFO - IAH,58045346158,S-IAH-MEX-4,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/58045346158,https://www.airlines-manager.com/aircraft/show/101045336,15:00,23:14,400,"694,602$","624,794$","$1,561.99","$75,885.91"
SFO - IAH,58054747774,S-IAH-MEX-3,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/58054747774,https://www.airlines-manager.com/aircraft/show/101045337,19:30,3:44,400,"694,602$","624,794$","$1,561.99","$75,885.91"
SFO - ICN,58021655971,S-168D-1 B2,747-400,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/58021655971,https://www.airlines-manager.com/aircraft/show/120752294,5:15,3:29,968,"4,255,893$","3,935,008$","$4,065.09","$176,986.87"
SFO - ICN,58059513403,S-168C-7 B2,747-400,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/58059513403,https://www.airlines-manager.com/aircraft/show/120752307,23:15,21:29,968,"4,255,893$","3,935,008$","$4,065.09","$176,986.87"
SFO - ICT,58017973217,S-ICT-BFF-3,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/58017973217,https://www.airlines-manager.com/aircraft/show/114912263,0:45,8:14,310,"469,158$","430,023$","$1,387.17","$57,464.10"
SFO - ICT,58027885542,S-ICT-BFF-2,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/58027885542,https://www.airlines-manager.com/aircraft/show/114912264,8:00,15:29,310,"469,158$","430,023$","$1,387.17","$57,464.10"
SFO - ICT,58045346320,S-ICT-BFF-1,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/58045346320,https://www.airlines-manager.com/aircraft/show/114912267,16:00,23:29,310,"469,158$","430,023$","$1,387.17","$57,464.10"
SFO - ICT,58048703765,S-ICT-BFF-5,ERJ-175,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/58048703765,https://www.airlines-manager.com/aircraft/show/114912306,17:30,0:59,112,"221,348$","195,492$","$1,745.46","$26,123.65"
SFO - ICT,58051861623,S-ICT-BFF-4,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/58051861623,https://www.airlines-manager.com/aircraft/show/114912268,18:45,2:14,310,"469,158$","430,023$","$1,387.17","$57,464.10"
SFO - IND,58021655967,S-IND-CVG-4,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/58021655967,https://www.airlines-manager.com/aircraft/show/99316503,5:15,14:59,310,"605,607$","555,557$","$1,792.12","$57,077.77"
SFO - IND,58027885484,S-IND-CVG-6,ERJ-175,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/58027885484,https://www.airlines-manager.com/aircraft/show/99174346,7:15,16:59,112,"284,129$","250,715$","$2,238.53","$25,758.39"
SFO - IND,58042065574,S-IND-CVG-1,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/58042065574,https://www.airlines-manager.com/aircraft/show/99316506,13:00,22:44,310,"605,607$","555,557$","$1,792.12","$57,077.77"
SFO - IND,58045346192,S-IND-CVG-3,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/58045346192,https://www.airlines-manager.com/aircraft/show/99316504,15:00,0:44,310,"605,607$","555,557$","$1,792.12","$57,077.77"
SFO - IND,58048703697,S-IND-CVG-5,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/58048703697,https://www.airlines-manager.com/aircraft/show/99316502,17:00,2:44,310,"605,607$","555,557$","$1,792.12","$57,077.77"
SFO - IND,58059513357,S-IND-CVG-2,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/58059513357,https://www.airlines-manager.com/aircraft/show/99316505,23:00,8:44,310,"605,607$","555,557$","$1,792.12","$57,077.77"
SFO - JAC,58017973227,S-MAF-FCA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/58017973227,https://www.airlines-manager.com/aircraft/show/120056761,1:00,5:59,272,"285,290$","263,927$",$970.32,"$52,961.94"
SFO - JAC,58021655939,S-MAF-FCA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/58021655939,https://www.airlines-manager.com/aircraft/show/120056758,5:00,9:59,272,"285,290$","263,927$",$970.32,"$52,961.94"
SFO - JAC,58042065463,S-MAF-FCA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/58042065463,https://www.airlines-manager.com/aircraft/show/120056759,13:00,17:59,272,"285,290$","263,927$",$970.32,"$52,961.94"
SFO - JAC,58051861533,S-MAF-FCA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/58051861533,https://www.airlines-manager.com/aircraft/show/120056760,18:15,23:14,272,"285,290$","263,927$",$970.32,"$52,961.94"
SFO - JAC,58054747913,S-MAF-FCA-5,ERJ-175,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/58054747913,https://www.airlines-manager.com/aircraft/show/119652600,20:15,1:14,112,"149,834$","131,932$","$1,177.96","$26,474.65"
SFO - JAN,58017973563,S-SAV-JAN-5 B,A319-100,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/58017973563,https://www.airlines-manager.com/aircraft/show/114917486,2:15,11:29,198,"439,387$","402,942$","$2,035.06","$43,639.93"
SFO - JAN,58024780697,S-SAV-JAN-3,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/58024780697,https://www.airlines-manager.com/aircraft/show/114912269,6:15,15:29,310,"583,909$","538,452$","$1,736.94","$58,316.10"
SFO - JAN,58027885515,S-SAV-JAN-2,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/58027885515,https://www.airlines-manager.com/aircraft/show/114912266,7:45,16:59,310,"583,909$","538,452$","$1,736.94","$58,316.10"
SFO - JAN,58048703705,S-SAV-JAN-1,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/58048703705,https://www.airlines-manager.com/aircraft/show/114912265,17:00,2:14,310,"583,909$","538,452$","$1,736.94","$58,316.10"
SFO - JAN,58051861677,S-SAV-JAN-4,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/58051861677,https://www.airlines-manager.com/aircraft/show/114912270,19:00,4:14,310,"583,909$","538,452$","$1,736.94","$58,316.10"
SFO - JAX,58024780675,S-JAX-SAT-5,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/58024780675,https://www.airlines-manager.com/aircraft/show/86377315,6:00,17:14,310,"704,676$","649,607$","$2,095.51","$57,828.52"
SFO - JAX,58042065555,S-JAX-SAT-1,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/58042065555,https://www.airlines-manager.com/aircraft/show/86375568,13:00,0:14,310,"704,676$","649,607$","$2,095.51","$57,828.52"
SFO - JAX,58045346183,S-JAX-SAT-2,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/58045346183,https://www.airlines-manager.com/aircraft/show/86371267,15:00,2:14,310,"704,676$","649,607$","$2,095.51","$57,828.52"
SFO - JAX,58057474831,S-JAX-SAT-3,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/58057474831,https://www.airlines-manager.com/aircraft/show/86385102,21:00,8:14,310,"704,676$","649,607$","$2,095.51","$57,828.52"
SFO - JAX,58059513354,S-JAX-SAT-4,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/58059513354,https://www.airlines-manager.com/aircraft/show/86378760,23:00,10:14,310,"704,676$","649,607$","$2,095.51","$57,828.52"
SFO - JFK,58017973234,S-MIA-JFK-4,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/58017973234,https://www.airlines-manager.com/aircraft/show/89233034,1:00,12:59,400,"965,414$","866,916$","$2,167.29","$72,343.48"
SFO - JFK,58027885454,S-MIA-JFK-5,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/58027885454,https://www.airlines-manager.com/aircraft/show/89233035,7:00,18:59,400,"965,414$","866,916$","$2,167.29","$72,343.48"
SFO - JFK,58042065487,S-MIA-JFK-1,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/58042065487,https://www.airlines-manager.com/aircraft/show/89233032,13:00,0:59,400,"965,414$","866,916$","$2,167.29","$72,343.48"
SFO - JFK,58045346284,S-MIA-JFK-2,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/58045346284,https://www.airlines-manager.com/aircraft/show/84622093,16:00,3:59,400,"965,414$","866,916$","$2,167.29","$72,343.48"
SFO - JFK,58051861638,S-MIA-JFK-3,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/58051861638,https://www.airlines-manager.com/aircraft/show/89233031,19:00,6:59,400,"965,414$","866,916$","$2,167.29","$72,343.48"
SFO - KIX,58017973458,S-168D-3 B2,747-400,https://www.airlines-manager.com/network/showline/50769294,https://www.airlines-manager.com/network/showflight/58017973458,https://www.airlines-manager.com/aircraft/show/120752296,1:30,22:59,968,"4,000,997$","3,703,245$","$3,825.67","$172,377.58"
SFO - KIX,58054747800,S-168C-2 B2,747-400,https://www.airlines-manager.com/network/showline/50769294,https://www.airlines-manager.com/network/showflight/58054747800,https://www.airlines-manager.com/aircraft/show/120752302,19:30,16:59,968,"4,000,997$","3,703,245$","$3,825.67","$172,377.58"
SFO - KOA,58017973613,S-KOA-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/58017973613,https://www.airlines-manager.com/aircraft/show/112650101,2:45,13:59,310,"705,734$","650,862$","$2,099.55","$57,940.24"
SFO - KOA,58021655931,S-KOA-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/58021655931,https://www.airlines-manager.com/aircraft/show/112650100,4:45,15:59,310,"705,734$","650,862$","$2,099.55","$57,940.24"
SFO - KOA,58042065602,S-KOA-PWM-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/58042065602,https://www.airlines-manager.com/aircraft/show/112650091,13:00,0:14,198,"529,574$","485,575$","$2,452.40","$43,226.26"
SFO - KOA,58048703703,S-KOA-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/58048703703,https://www.airlines-manager.com/aircraft/show/112650103,17:00,4:14,310,"705,734$","650,862$","$2,099.55","$57,940.24"
SFO - KOA,58054747861,S-KOA-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/58054747861,https://www.airlines-manager.com/aircraft/show/112650102,20:00,7:14,310,"705,734$","650,862$","$2,099.55","$57,940.24"
SFO - LAS,58024780663,S-BOS-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/58024780663,https://www.airlines-manager.com/aircraft/show/104901564,6:00,9:44,338,"218,684$","179,991$",$532.52,"$48,211.88"
SFO - LAS,58027885447,S-BOS-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/58027885447,https://www.airlines-manager.com/aircraft/show/104870960,7:00,10:44,338,"218,684$","179,991$",$532.52,"$48,211.88"
SFO - LAS,58038353850,S-BOS-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/58038353850,https://www.airlines-manager.com/aircraft/show/104874465,12:00,15:44,338,"218,684$","179,991$",$532.52,"$48,211.88"
SFO - LAS,58048703620,S-BOS-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/58048703620,https://www.airlines-manager.com/aircraft/show/104901544,16:30,20:14,338,"218,684$","179,991$",$532.52,"$48,211.88"
SFO - LAS,58054747915,S-BOS-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/58054747915,https://www.airlines-manager.com/aircraft/show/104864961,20:30,0:14,338,"218,684$","179,991$",$532.52,"$48,211.88"
SFO - LAX,58017973538,S-PHL-SEA-6 B,A319-100,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/58017973538,https://www.airlines-manager.com/aircraft/show/97900730,2:00,5:29,198,"133,747$","101,733$",$513.80,"$29,205.65"
SFO - LAX,58021655899,S-PHL-SEA-1,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/58021655899,https://www.airlines-manager.com/aircraft/show/92390872,4:30,7:59,320,"176,398$","129,187$",$403.71,"$37,087.18"
SFO - LAX,58027885489,S-PHL-SEA-5,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/58027885489,https://www.airlines-manager.com/aircraft/show/92390869,7:30,10:59,320,"176,398$","129,187$",$403.71,"$37,087.18"
SFO - LAX,58031343093,S-PHL-SEA-4,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/58031343093,https://www.airlines-manager.com/aircraft/show/92390870,8:15,11:44,320,"176,398$","129,187$",$403.71,"$37,087.18"
SFO - LAX,58038353869,S-PHL-SEA-3,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/58038353869,https://www.airlines-manager.com/aircraft/show/92390873,12:00,15:29,320,"176,398$","129,187$",$403.71,"$37,087.18"
SFO - LAX,58048703649,S-PHL-SEA-2,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/58048703649,https://www.airlines-manager.com/aircraft/show/92390871,16:45,20:14,320,"176,398$","129,187$",$403.71,"$37,087.18"
SFO - LEX,58017973535,S-BTV-LEX-1,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/58017973535,https://www.airlines-manager.com/aircraft/show/112650095,2:00,11:59,310,"625,642$","578,194$","$1,865.14","$57,915.93"
SFO - LEX,58024780682,S-BTV-LEX-2,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/58024780682,https://www.airlines-manager.com/aircraft/show/112650094,6:00,15:59,310,"625,642$","578,194$","$1,865.14","$57,915.93"
SFO - LEX,58027885541,S-BTV-LEX-3,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/58027885541,https://www.airlines-manager.com/aircraft/show/112650093,8:00,17:59,310,"625,642$","578,194$","$1,865.14","$57,915.93"
SFO - LEX,58042065711,S-BTV-LEX-4,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/58042065711,https://www.airlines-manager.com/aircraft/show/112650092,14:00,23:59,310,"625,642$","578,194$","$1,865.14","$57,915.93"
SFO - LEX,58054747874,S-BTV-LEX-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/58054747874,https://www.airlines-manager.com/aircraft/show/112650089,20:00,5:59,198,"470,560$","432,514$","$2,184.41","$43,323.61"
SFO - LGB,58017973659,S-FAR-BIL-2,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/58017973659,https://www.airlines-manager.com/aircraft/show/117782585,3:15,6:44,310,"181,588$","157,489$",$508.03,"$45,212.15"
SFO - LGB,58034914099,S-FAR-BIL-1,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/58034914099,https://www.airlines-manager.com/aircraft/show/117782584,11:00,14:29,310,"181,588$","157,489$",$508.03,"$45,212.15"
SFO - LGB,58045346212,S-FAR-BIL-4,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/58045346212,https://www.airlines-manager.com/aircraft/show/117782587,15:00,18:29,310,"181,588$","157,489$",$508.03,"$45,212.15"
SFO - LGB,58057474894,S-FAR-BIL-3,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/58057474894,https://www.airlines-manager.com/aircraft/show/117782586,21:30,0:59,310,"181,588$","157,489$",$508.03,"$45,212.15"
SFO - LHR,58017973615,S-168C-4 B2,747-400,https://www.airlines-manager.com/network/showline/50769240,https://www.airlines-manager.com/network/showflight/58017973615,https://www.airlines-manager.com/aircraft/show/120752304,2:45,23:59,968,"4,060,744$","3,726,461$","$3,849.65","$175,500.52"
SFO - LHR,58059513374,S-168D-3 B2,747-400,https://www.airlines-manager.com/network/showline/50769240,https://www.airlines-manager.com/network/showflight/58059513374,https://www.airlines-manager.com/aircraft/show/120752296,23:00,20:14,968,"4,060,744$","3,726,461$","$3,849.65","$175,500.52"
SFO - LIT,58017973553,S-SDF-LIT-3,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/58017973553,https://www.airlines-manager.com/aircraft/show/94886627,2:15,10:59,310,"542,816$","499,788$","$1,612.22","$57,227.63"
SFO - LIT,58017973554,S-SDF-LIT-5,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/58017973554,https://www.airlines-manager.com/aircraft/show/106453498,3:15,11:59,310,"542,816$","499,788$","$1,612.22","$57,227.63"
SFO - LIT,58042065695,S-SDF-LIT-2,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/58042065695,https://www.airlines-manager.com/aircraft/show/94886628,14:00,22:44,310,"542,816$","499,788$","$1,612.22","$57,227.63"
SFO - LIT,58045346196,S-SDF-LIT-4,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/58045346196,https://www.airlines-manager.com/aircraft/show/106453500,15:00,23:44,310,"542,816$","499,788$","$1,612.22","$57,227.63"
SFO - LIT,58060881893,S-SDF-LIT-1,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/58060881893,https://www.airlines-manager.com/aircraft/show/106453499,23:45,8:29,310,"542,816$","499,788$","$1,612.22","$57,227.63"
SFO - MAF,58017973644,S-MAF-FCA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/58017973644,https://www.airlines-manager.com/aircraft/show/120056760,3:15,9:59,272,"388,045$","360,385$","$1,324.94","$53,522.52"
SFO - MAF,58027885550,S-MAF-FCA-5,ERJ-175,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/58027885550,https://www.airlines-manager.com/aircraft/show/119652600,8:00,14:44,112,"201,536$","177,709$","$1,586.69","$26,392.43"
SFO - MAF,58042065465,S-MAF-FCA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/58042065465,https://www.airlines-manager.com/aircraft/show/120056761,13:00,19:44,272,"388,045$","360,385$","$1,324.94","$53,522.52"
SFO - MAF,58048703667,S-MAF-FCA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/58048703667,https://www.airlines-manager.com/aircraft/show/120056758,17:00,23:44,272,"388,045$","360,385$","$1,324.94","$53,522.52"
SFO - MAF,58057474926,S-MAF-FCA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/58057474926,https://www.airlines-manager.com/aircraft/show/120056759,22:00,4:44,272,"388,045$","360,385$","$1,324.94","$53,522.52"
SFO - MCI,58027885456,S-MCI-OMA-2,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/58027885456,https://www.airlines-manager.com/aircraft/show/88239554,7:00,14:59,320,"507,197$","458,271$","$1,432.10","$57,403.47"
SFO - MCI,58048703682,S-MCI-OMA-1,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/58048703682,https://www.airlines-manager.com/aircraft/show/88239553,17:00,0:59,320,"507,197$","458,271$","$1,432.10","$57,403.47"
SFO - MCI,58048703683,S-MCI-OMA-5 B,A319-100,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/58048703683,https://www.airlines-manager.com/aircraft/show/105223003,17:00,0:59,198,"382,381$","347,373$","$1,754.41","$43,512.28"
SFO - MCI,58051861602,S-MCI-OMA-4,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/58051861602,https://www.airlines-manager.com/aircraft/show/88239557,18:45,2:44,320,"507,197$","458,271$","$1,432.10","$57,403.47"
SFO - MCI,58059513388,S-MCI-OMA-3,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/58059513388,https://www.airlines-manager.com/aircraft/show/88239555,23:15,7:14,320,"507,197$","458,271$","$1,432.10","$57,403.47"
SFO - MCO,58017973091,S-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/58017973091,https://www.airlines-manager.com/aircraft/show/120141531,0:00,11:29,0,"207,765$","117,928$",#DIV/0!,"$10,269.49"
SFO - MCO,58017973092,S-MCO-MSP-2,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/58017973092,https://www.airlines-manager.com/aircraft/show/105367367,3:30,14:59,338,"795,031$","730,062$","$2,159.95","$63,575.79"
SFO - MCO,58021655891,S-MCO-MSP-5,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/58021655891,https://www.airlines-manager.com/aircraft/show/105367364,4:30,15:59,338,"795,031$","730,062$","$2,159.95","$63,575.79"
SFO - MCO,58045346145,S-MCO-MSP-1,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/58045346145,https://www.airlines-manager.com/aircraft/show/105367368,15:00,2:29,338,"795,031$","730,062$","$2,159.95","$63,575.79"
SFO - MCO,58048703668,S-MCO-MSP-4,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/58048703668,https://www.airlines-manager.com/aircraft/show/105367365,17:00,4:29,338,"795,031$","730,062$","$2,159.95","$63,575.79"
SFO - MCO,58051861685,S-MCO-MSP-3,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/58051861685,https://www.airlines-manager.com/aircraft/show/105367366,19:15,6:44,338,"795,031$","730,062$","$2,159.95","$63,575.79"
SFO - MEM,58017973605,S-MEM-PIT-4,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/58017973605,https://www.airlines-manager.com/aircraft/show/98788934,2:45,11:59,310,"576,829$","528,105$","$1,703.56","$57,195.49"
SFO - MEM,58024780661,S-MEM-PIT-6,ERJ-175,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/58024780661,https://www.airlines-manager.com/aircraft/show/98675305,5:45,14:59,112,"270,633$","238,251$","$2,127.24","$25,803.36"
SFO - MEM,58042065572,S-MEM-PIT-1,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/58042065572,https://www.airlines-manager.com/aircraft/show/98788937,13:00,22:14,310,"576,829$","528,105$","$1,703.56","$57,195.49"
SFO - MEM,58045346314,S-MEM-PIT-3,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/58045346314,https://www.airlines-manager.com/aircraft/show/98788935,16:00,1:14,310,"576,829$","528,105$","$1,703.56","$57,195.49"
SFO - MEM,58051861672,S-MEM-PIT-5,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/58051861672,https://www.airlines-manager.com/aircraft/show/98788933,19:00,4:14,310,"576,829$","528,105$","$1,703.56","$57,195.49"
SFO - MEM,58060881890,S-MEM-PIT-2,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/58060881890,https://www.airlines-manager.com/aircraft/show/98788936,23:45,8:59,310,"576,829$","528,105$","$1,703.56","$57,195.49"
SFO - MEX,58017973686,S-IAH-MEX-3,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/58017973686,https://www.airlines-manager.com/aircraft/show/101045337,3:45,12:59,400,"773,222$","702,355$","$1,755.89","$76,067.33"
SFO - MEX,58042065495,S-IAH-MEX-2,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/58042065495,https://www.airlines-manager.com/aircraft/show/101045338,13:00,22:14,400,"773,222$","702,355$","$1,755.89","$76,067.33"
SFO - MEX,58045346157,S-IAH-MEX-5,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/58045346157,https://www.airlines-manager.com/aircraft/show/101045335,15:00,0:14,400,"773,222$","702,355$","$1,755.89","$76,067.33"
SFO - MEX,58057474852,S-IAH-MEX-1,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/58057474852,https://www.airlines-manager.com/aircraft/show/101045339,21:15,6:29,400,"773,222$","702,355$","$1,755.89","$76,067.33"
SFO - MEX,58059513387,S-IAH-MEX-4,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/58059513387,https://www.airlines-manager.com/aircraft/show/101045336,23:15,8:29,375,"732,633$","663,292$","$1,768.78","$71,836.68"
SFO - MFR,58017973247,S-TYS-MSN-2,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/58017973247,https://www.airlines-manager.com/aircraft/show/117782564,1:00,4:29,320,"173,273$","146,641$",$458.25,"$42,097.89"
SFO - MFR,58021655828,S-TYS-MSN-1,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/58021655828,https://www.airlines-manager.com/aircraft/show/117782565,4:00,7:29,320,"173,273$","146,641$",$458.25,"$42,097.89"
SFO - MFR,58045346304,S-TYS-MSN-3,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/58045346304,https://www.airlines-manager.com/aircraft/show/117782563,16:00,19:29,320,"173,273$","146,641$",$458.25,"$42,097.89"
SFO - MFR,58048703727,S-TYS-MSN-4,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/58048703727,https://www.airlines-manager.com/aircraft/show/117782562,17:15,20:44,295,"165,089$","138,679$",$470.10,"$39,812.15"
SFO - MHT,58017973125,S-MHT-CHS-3,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/58017973125,https://www.airlines-manager.com/aircraft/show/114917463,0:15,12:44,320,"762,087$","698,102$","$2,181.57","$55,922.72"
SFO - MHT,58021655867,S-MHT-CHS-4,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/58021655867,https://www.airlines-manager.com/aircraft/show/114266973,4:15,16:44,320,"762,087$","698,102$","$2,181.57","$55,922.72"
SFO - MHT,58042065533,S-MHT-CHS-1,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/58042065533,https://www.airlines-manager.com/aircraft/show/114917465,13:00,1:29,320,"762,087$","698,102$","$2,181.57","$55,922.72"
SFO - MHT,58048703691,S-MHT-CHS-2,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/58048703691,https://www.airlines-manager.com/aircraft/show/114917464,17:00,5:29,320,"762,087$","698,102$","$2,181.57","$55,922.72"
SFO - MHT,58054747875,S-MHT-CHS-5 B,A319-100,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/58054747875,https://www.airlines-manager.com/aircraft/show/114912262,20:00,8:29,198,"571,071$","524,144$","$2,647.19","$41,987.50"
SFO - MIA,58017973233,S-MIA-JFK-1,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/58017973233,https://www.airlines-manager.com/aircraft/show/89233032,1:00,12:59,400,"958,829$","868,986$","$2,172.47","$72,516.22"
SFO - MIA,58021655812,S-MIA-JFK-2,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/58021655812,https://www.airlines-manager.com/aircraft/show/84622093,4:00,15:59,400,"958,829$","868,986$","$2,172.47","$72,516.22"
SFO - MIA,58027885453,S-MIA-JFK-3,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/58027885453,https://www.airlines-manager.com/aircraft/show/89233031,7:00,18:59,400,"958,829$","868,986$","$2,172.47","$72,516.22"
SFO - MIA,58042065488,S-MIA-JFK-4,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/58042065488,https://www.airlines-manager.com/aircraft/show/89233034,13:00,0:59,400,"958,829$","868,986$","$2,172.47","$72,516.22"
SFO - MIA,58051861639,S-MIA-JFK-5,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/58051861639,https://www.airlines-manager.com/aircraft/show/89233035,19:00,6:59,400,"958,829$","868,986$","$2,172.47","$72,516.22"
SFO - MKE,58017973157,S-CLE-MKE-1,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/58017973157,https://www.airlines-manager.com/aircraft/show/92519368,0:30,9:44,320,"586,128$","533,360$","$1,666.75","$57,764.62"
SFO - MKE,58024780624,S-CLE-MKE-4,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/58024780624,https://www.airlines-manager.com/aircraft/show/92519371,5:30,14:44,320,"586,128$","533,360$","$1,666.75","$57,764.62"
SFO - MKE,58024780625,S-CLE-MKE-3,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/58024780625,https://www.airlines-manager.com/aircraft/show/92519367,6:45,15:59,320,"586,128$","533,360$","$1,666.75","$57,764.62"
SFO - MKE,58045346289,S-CLE-MKE-2,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/58045346289,https://www.airlines-manager.com/aircraft/show/92519369,16:00,1:14,320,"586,128$","533,360$","$1,666.75","$57,764.62"
SFO - MKE,58051861497,S-CLE-MKE-5,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/58051861497,https://www.airlines-manager.com/aircraft/show/92519370,18:00,3:14,320,"586,128$","533,360$","$1,666.75","$57,764.62"
SFO - MSN,58017973564,S-TYS-MSN-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/58017973564,https://www.airlines-manager.com/aircraft/show/117782582,2:15,11:14,198,"424,215$","388,553$","$1,962.39","$43,252.65"
SFO - MSN,58027885460,S-TYS-MSN-4,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/58027885460,https://www.airlines-manager.com/aircraft/show/117782562,7:00,15:59,320,"562,482$","513,233$","$1,603.85","$57,131.69"
SFO - MSN,58027885461,S-TYS-MSN-3,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/58027885461,https://www.airlines-manager.com/aircraft/show/117782563,7:00,15:59,320,"562,482$","513,233$","$1,603.85","$57,131.69"
SFO - MSN,58045346305,S-TYS-MSN-2,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/58045346305,https://www.airlines-manager.com/aircraft/show/117782564,16:00,0:59,320,"562,482$","513,233$","$1,603.85","$57,131.69"
SFO - MSN,58051861663,S-TYS-MSN-1,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/58051861663,https://www.airlines-manager.com/aircraft/show/117782565,19:00,3:59,320,"562,482$","513,233$","$1,603.85","$57,131.69"
SFO - MSO,58024780720,S-TUL-DSM-1,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/58024780720,https://www.airlines-manager.com/aircraft/show/108410856,6:45,11:44,320,"322,461$","288,750$",$902.34,"$57,943.14"
SFO - MSO,58027885491,S-TUL-DSM-4,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/58027885491,https://www.airlines-manager.com/aircraft/show/108410859,7:30,12:29,320,"322,461$","288,750$",$902.34,"$57,943.14"
SFO - MSO,58042065526,S-TUL-DSM-3,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/58042065526,https://www.airlines-manager.com/aircraft/show/108410858,13:00,17:59,320,"322,461$","288,750$",$902.34,"$57,943.14"
SFO - MSO,58057474828,S-TUL-DSM-2,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/58057474828,https://www.airlines-manager.com/aircraft/show/108410857,21:00,1:59,272,"293,168$","260,450$",$957.54,"$52,264.21"
SFO - MSP,58017973568,S-MCO-MSP-1,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/58017973568,https://www.airlines-manager.com/aircraft/show/105367368,2:30,10:44,338,"572,597$","523,159$","$1,547.81","$63,541.58"
SFO - MSP,58021655892,S-MCO-MSP-4,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/58021655892,https://www.airlines-manager.com/aircraft/show/105367365,4:30,12:44,338,"572,597$","523,159$","$1,547.81","$63,541.58"
SFO - MSP,58024780713,S-MCO-MSP-3,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/58024780713,https://www.airlines-manager.com/aircraft/show/105367366,6:45,14:59,338,"572,597$","523,159$","$1,547.81","$63,541.58"
SFO - MSP,58045346143,S-MCO-MSP-2,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/58045346143,https://www.airlines-manager.com/aircraft/show/105367367,15:00,23:14,338,"572,597$","523,159$","$1,547.81","$63,541.58"
SFO - MSP,58045346144,S-MCO-MSP-5,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/58045346144,https://www.airlines-manager.com/aircraft/show/105367364,16:00,0:14,338,"572,597$","523,159$","$1,547.81","$63,541.58"
SFO - MSY,58017973642,S-MSY-STL-6,ERJ-175,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/58017973642,https://www.airlines-manager.com/aircraft/show/103534666,3:00,12:29,112,"279,484$","246,810$","$2,203.66","$26,025.66"
SFO - MSY,58024780673,S-MSY-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/58024780673,https://www.airlines-manager.com/aircraft/show/98075266,6:00,15:29,320,"593,870$","539,636$","$1,686.36","$56,903.62"
SFO - MSY,58027885528,S-MSY-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/58027885528,https://www.airlines-manager.com/aircraft/show/98075264,8:00,17:29,320,"593,870$","539,636$","$1,686.36","$56,903.62"
SFO - MSY,58042065512,S-MSY-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/58042065512,https://www.airlines-manager.com/aircraft/show/98075267,13:00,22:29,320,"593,870$","539,636$","$1,686.36","$56,903.62"
SFO - MSY,58057474854,S-MSY-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/58057474854,https://www.airlines-manager.com/aircraft/show/98075265,21:15,6:44,320,"593,870$","539,636$","$1,686.36","$56,903.62"
SFO - MSY,58059513390,S-MSY-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/58059513390,https://www.airlines-manager.com/aircraft/show/98075263,23:15,8:44,320,"593,870$","539,636$","$1,686.36","$56,903.62"
SFO - NGO,58017973077,S-168C-5 B2,747-400,https://www.airlines-manager.com/network/showline/50769298,https://www.airlines-manager.com/network/showflight/58017973077,https://www.airlines-manager.com/aircraft/show/120752305,0:00,20:59,968,"3,903,860$","3,617,048$","$3,736.62","$172,377.19"
SFO - NGO,58054747903,S-168D-4 B2,747-400,https://www.airlines-manager.com/network/showline/50769298,https://www.airlines-manager.com/network/showflight/58054747903,https://www.airlines-manager.com/aircraft/show/120752297,20:15,17:14,968,"3,903,860$","3,617,048$","$3,736.62","$172,377.19"
SFO - NRT,58017973078,S-168C-6-B2,747-400,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/58017973078,https://www.airlines-manager.com/aircraft/show/120752306,0:00,20:14,968,"3,876,882$","3,579,468$","$3,697.80","$176,909.46"
SFO - NRT,58048703739,S-168D-5 B2,747-400,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/58048703739,https://www.airlines-manager.com/aircraft/show/120752298,17:15,13:29,968,"3,876,882$","3,579,468$","$3,697.80","$176,909.46"
SFO - OGG,58017973581,S-OGG-AUS-5,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/58017973581,https://www.airlines-manager.com/aircraft/show/92773477,2:30,13:44,310,"697,883$","645,321$","$2,081.68","$57,446.97"
SFO - OGG,58042065629,S-OGG-AUS-1,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/58042065629,https://www.airlines-manager.com/aircraft/show/92773481,13:30,0:44,310,"697,883$","645,321$","$2,081.68","$57,446.97"
SFO - OGG,58045346253,S-OGG-AUS-2,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/58045346253,https://www.airlines-manager.com/aircraft/show/92773480,15:30,2:44,310,"697,883$","645,321$","$2,081.68","$57,446.97"
SFO - OGG,58057474888,S-OGG-AUS-3,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/58057474888,https://www.airlines-manager.com/aircraft/show/92773479,21:30,8:44,310,"697,883$","645,321$","$2,081.68","$57,446.97"
SFO - OGG,58059513417,S-OGG-AUS-4,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/58059513417,https://www.airlines-manager.com/aircraft/show/92773478,23:30,10:44,310,"697,883$","645,321$","$2,081.68","$57,446.97"
SFO - OKC,58017973165,S-OKC-FSD-3,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/58017973165,https://www.airlines-manager.com/aircraft/show/107160380,0:30,7:59,320,"476,319$","432,077$","$1,350.24","$57,738.57"
SFO - OKC,58027885532,S-OKC-FSD-2,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/58027885532,https://www.airlines-manager.com/aircraft/show/107160379,8:00,15:29,320,"476,319$","432,077$","$1,350.24","$57,738.57"
SFO - OKC,58048703689,S-OKC-FSD-1,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/58048703689,https://www.airlines-manager.com/aircraft/show/107160378,17:00,0:29,320,"476,319$","432,077$","$1,350.24","$57,738.57"
SFO - OKC,58051861595,S-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/58051861595,https://www.airlines-manager.com/aircraft/show/107132310,18:30,1:59,112,"224,788$","198,645$","$1,773.62","$26,544.99"
SFO - OKC,58054747780,S-OKC-FSD-4,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/58054747780,https://www.airlines-manager.com/aircraft/show/107160381,19:30,2:59,320,"476,319$","432,077$","$1,350.24","$57,738.57"
SFO - OMA,58017973238,S-MCI-OMA-1,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/58017973238,https://www.airlines-manager.com/aircraft/show/88239553,1:00,8:44,320,"484,959$","439,887$","$1,374.65","$56,881.94"
SFO - OMA,58017973239,S-MCI-OMA-5 B,A319-100,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/58017973239,https://www.airlines-manager.com/aircraft/show/105223003,1:00,8:44,198,"366,607$","334,272$","$1,688.24","$43,224.83"
SFO - OMA,58017973240,S-MCI-OMA-4,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/58017973240,https://www.airlines-manager.com/aircraft/show/88239557,2:45,10:29,320,"484,959$","439,887$","$1,374.65","$56,881.94"
SFO - OMA,58027885471,S-MCI-OMA-3,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/58027885471,https://www.airlines-manager.com/aircraft/show/88239555,7:15,14:59,320,"484,959$","439,887$","$1,374.65","$56,881.94"
SFO - OMA,58045346163,S-MCI-OMA-2,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/58045346163,https://www.airlines-manager.com/aircraft/show/88239554,15:00,22:44,320,"484,959$","439,887$","$1,374.65","$56,881.94"
SFO - ONT,58021655902,S-OKC-FSD-2,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/58021655902,https://www.airlines-manager.com/aircraft/show/107160379,4:30,7:59,320,"180,494$","150,361$",$469.88,"$43,165.84"
SFO - ONT,58042065524,S-OKC-FSD-1,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/58042065524,https://www.airlines-manager.com/aircraft/show/107160378,13:00,16:29,320,"180,494$","150,361$",$469.88,"$43,165.84"
SFO - ONT,58045346229,S-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/58045346229,https://www.airlines-manager.com/aircraft/show/107132310,15:00,18:29,112,"83,245$","67,122$",$599.30,"$19,269.47"
SFO - ONT,58045346230,S-OKC-FSD-4,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/58045346230,https://www.airlines-manager.com/aircraft/show/107160381,16:00,19:29,320,"180,494$","150,361$",$469.88,"$43,165.84"
SFO - ONT,58057474827,S-OKC-FSD-3,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/58057474827,https://www.airlines-manager.com/aircraft/show/107160380,21:00,0:29,320,"180,494$","150,361$",$469.88,"$43,165.84"
SFO - ORD,58024780670,S-ORD-DTW-2,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/58024780670,https://www.airlines-manager.com/aircraft/show/101045333,6:00,14:59,400,"760,394$","672,993$","$1,682.48","$74,915.73"
SFO - ORD,58027885487,S-ORD-DTW-5,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/58027885487,https://www.airlines-manager.com/aircraft/show/101045330,7:30,16:29,400,"760,394$","672,993$","$1,682.48","$74,915.73"
SFO - ORD,58042065493,S-ORD-DTW-1,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/58042065493,https://www.airlines-manager.com/aircraft/show/101045334,13:00,21:59,400,"760,394$","672,993$","$1,682.48","$74,915.73"
SFO - ORD,58045346154,S-ORD-DTW-4,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/58045346154,https://www.airlines-manager.com/aircraft/show/101045331,15:00,23:59,400,"760,394$","672,993$","$1,682.48","$74,915.73"
SFO - ORD,58054747847,S-ORD-DTW-3,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/58054747847,https://www.airlines-manager.com/aircraft/show/101045332,20:00,4:59,400,"760,394$","672,993$","$1,682.48","$74,915.73"
SFO - ORF,58024780635,S-ORF-RIC-3,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/58024780635,https://www.airlines-manager.com/aircraft/show/108328836,5:30,17:29,310,"732,603$","676,491$","$2,182.23","$56,452.66"
SFO - ORF,58027885498,S-ORF-RIC-4,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/58027885498,https://www.airlines-manager.com/aircraft/show/108328837,7:30,19:29,310,"732,603$","676,491$","$2,182.23","$56,452.66"
SFO - ORF,58051861514,S-ORF-RIC-1,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/58051861514,https://www.airlines-manager.com/aircraft/show/108328834,18:00,5:59,310,"732,603$","676,491$","$2,182.23","$56,452.66"
SFO - ORF,58054747857,S-ORF-RIC-2,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/58054747857,https://www.airlines-manager.com/aircraft/show/108328835,20:00,7:59,310,"732,603$","676,491$","$2,182.23","$56,452.66"
SFO - ORF,58057474952,S-ORF-RIC-5 B,A319-100,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/58057474952,https://www.airlines-manager.com/aircraft/show/108328833,22:00,9:59,198,"547,743$","502,744$","$2,539.11","$41,953.60"
SFO - PBI,58021655862,S-PBI-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/58021655862,https://www.airlines-manager.com/aircraft/show/100301186,4:15,16:14,320,"734,200$","669,869$","$2,093.34","$55,900.06"
SFO - PBI,58024780695,S-PBI-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/58024780695,https://www.airlines-manager.com/aircraft/show/100301185,6:15,18:14,320,"734,200$","669,869$","$2,093.34","$55,900.06"
SFO - PBI,58048703688,S-PBI-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/58048703688,https://www.airlines-manager.com/aircraft/show/100301188,17:00,4:59,320,"734,200$","669,869$","$2,093.34","$55,900.06"
SFO - PBI,58051861658,S-PBI-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/58051861658,https://www.airlines-manager.com/aircraft/show/100301187,19:00,6:59,320,"734,200$","669,869$","$2,093.34","$55,900.06"
SFO - PBI,58057474825,S-PBI-RDU-5,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/58057474825,https://www.airlines-manager.com/aircraft/show/100301184,21:00,8:59,320,"734,200$","669,869$","$2,093.34","$55,900.06"
SFO - PDX,58017973103,S-MCO-MSP-5,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/58017973103,https://www.airlines-manager.com/aircraft/show/105367364,0:15,4:29,338,"272,269$","242,872$",$718.56,"$57,371.34"
SFO - PDX,58034913977,S-MCO-MSP-1,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/58034913977,https://www.airlines-manager.com/aircraft/show/105367368,10:45,14:59,338,"272,269$","242,872$",$718.56,"$57,371.34"
SFO - PDX,58038353939,S-MCO-MSP-4,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/58038353939,https://www.airlines-manager.com/aircraft/show/105367365,12:45,16:59,338,"272,269$","242,872$",$718.56,"$57,371.34"
SFO - PDX,58045346142,S-MCO-MSP-3,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/58045346142,https://www.airlines-manager.com/aircraft/show/105367366,15:00,19:14,338,"272,269$","242,872$",$718.56,"$57,371.34"
SFO - PDX,58059513385,S-MCO-MSP-2,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/58059513385,https://www.airlines-manager.com/aircraft/show/105367367,23:15,3:29,278,"243,683$","215,040$",$773.53,"$50,796.85"
SFO - PEK,58017973079,S-168C-7 B2,747-400,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/58017973079,https://www.airlines-manager.com/aircraft/show/120752307,0:00,23:14,968,"4,491,411$","4,124,325$","$4,260.67","$177,517.58"
SFO - PEK,58024780684,S-168D-7 B2,747-400,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/58024780684,https://www.airlines-manager.com/aircraft/show/120752300,6:00,5:14,968,"4,491,411$","4,124,325$","$4,260.67","$177,517.58"
SFO - PHL,58017973046,S-PHL-SEA-2,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/58017973046,https://www.airlines-manager.com/aircraft/show/92390871,0:00,11:44,320,"730,738$","658,186$","$2,056.83","$56,095.40"
SFO - PHL,58038353868,S-PHL-SEA-1,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/58038353868,https://www.airlines-manager.com/aircraft/show/92390872,12:00,23:44,320,"730,738$","658,186$","$2,056.83","$56,095.40"
SFO - PHL,58042065728,S-PHL-SEA-6 B,A319-100,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/58042065728,https://www.airlines-manager.com/aircraft/show/97900730,14:00,1:59,198,"548,740$","496,348$","$2,506.81","$41,419.86"
SFO - PHL,58045346167,S-PHL-SEA-5,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/58045346167,https://www.airlines-manager.com/aircraft/show/92390869,15:00,2:44,320,"730,738$","658,186$","$2,056.83","$56,095.40"
SFO - PHL,58045346168,S-PHL-SEA-4,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/58045346168,https://www.airlines-manager.com/aircraft/show/92390870,15:45,3:29,320,"730,738$","658,186$","$2,056.83","$56,095.40"
SFO - PHL,58051861690,S-PHL-SEA-3,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/58051861690,https://www.airlines-manager.com/aircraft/show/92390873,19:15,6:59,320,"730,738$","658,186$","$2,056.83","$56,095.40"
SFO - PHX,58017973395,S-BOS-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/58017973395,https://www.airlines-manager.com/aircraft/show/104901564,1:30,5:59,338,"323,043$","284,985$",$843.15,"$63,565.43"
SFO - PHX,58017973396,S-BOS-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/58017973396,https://www.airlines-manager.com/aircraft/show/104870960,2:30,6:59,338,"323,043$","284,985$",$843.15,"$63,565.43"
SFO - PHX,58021655849,S-BOS-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/58021655849,https://www.airlines-manager.com/aircraft/show/104874465,4:15,8:44,338,"323,043$","284,985$",$843.15,"$63,565.43"
SFO - PHX,58038353851,S-BOS-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/58038353851,https://www.airlines-manager.com/aircraft/show/104901544,12:00,16:29,338,"323,043$","284,985$",$843.15,"$63,565.43"
SFO - PHX,58045346275,S-BOS-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/58045346275,https://www.airlines-manager.com/aircraft/show/104864961,16:00,20:29,338,"323,043$","284,985$",$843.15,"$63,565.43"
SFO - PIT,58017973380,S-MEM-PIT-3,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/58017973380,https://www.airlines-manager.com/aircraft/show/98788935,1:15,11:59,310,"676,648$","621,492$","$2,004.81","$57,902.98"
SFO - PIT,58021655872,S-MEM-PIT-5,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/58021655872,https://www.airlines-manager.com/aircraft/show/98788933,4:15,14:59,310,"676,648$","621,492$","$2,004.81","$57,902.98"
SFO - PIT,58042065571,S-MEM-PIT-2,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/58042065571,https://www.airlines-manager.com/aircraft/show/98788936,13:00,23:44,310,"676,648$","621,492$","$2,004.81","$57,902.98"
SFO - PIT,58045346312,S-MEM-PIT-4,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/58045346312,https://www.airlines-manager.com/aircraft/show/98788934,16:00,2:44,310,"676,648$","621,492$","$2,004.81","$57,902.98"
SFO - PIT,58051861682,S-MEM-PIT-6,ERJ-175,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/58051861682,https://www.airlines-manager.com/aircraft/show/98675305,19:00,5:44,112,"317,025$","280,006$","$2,500.05","$26,087.52"
SFO - PIT,58057474976,S-MEM-PIT-1,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/58057474976,https://www.airlines-manager.com/aircraft/show/98788937,22:15,8:59,310,"676,648$","621,492$","$2,004.81","$57,902.98"
SFO - PSP,58021655878,S-ICT-BFF-2,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/58021655878,https://www.airlines-manager.com/aircraft/show/114912264,4:15,7:59,310,"200,274$","175,476$",$566.05,"$47,002.50"
SFO - PSP,58038353848,S-ICT-BFF-1,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/58038353848,https://www.airlines-manager.com/aircraft/show/114912267,11:45,15:29,310,"200,274$","175,476$",$566.05,"$47,002.50"
SFO - PSP,58042065622,S-ICT-BFF-5,ERJ-175,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/58042065622,https://www.airlines-manager.com/aircraft/show/114912306,13:15,16:59,112,"92,401$","76,790$",$685.63,"$20,568.75"
SFO - PSP,58045346199,S-ICT-BFF-4,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/58045346199,https://www.airlines-manager.com/aircraft/show/114912268,15:00,18:44,310,"200,274$","175,476$",$566.05,"$47,002.50"
SFO - PSP,58057474837,S-ICT-BFF-3,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/58057474837,https://www.airlines-manager.com/aircraft/show/114912263,21:00,0:44,283,"189,985$","165,498$",$584.80,"$44,329.82"
SFO - PVD,58017973069,S-PVD-BUF-4,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/58017973069,https://www.airlines-manager.com/aircraft/show/112650105,0:00,12:29,310,"763,375$","705,708$","$2,276.48","$56,532.02"
SFO - PVD,58021655956,S-PVD-BUF-5,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/58021655956,https://www.airlines-manager.com/aircraft/show/112650104,5:00,17:29,310,"763,375$","705,708$","$2,276.48","$56,532.02"
SFO - PVD,58042065588,S-PVD-BUF-1,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/58042065588,https://www.airlines-manager.com/aircraft/show/112650108,13:00,1:29,310,"763,375$","705,708$","$2,276.48","$56,532.02"
SFO - PVD,58048703704,S-PVD-BUF-2,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/58048703704,https://www.airlines-manager.com/aircraft/show/112650107,17:00,5:29,310,"763,375$","705,708$","$2,276.48","$56,532.02"
SFO - PVD,58051861675,S-PVD-BUF-3,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/58051861675,https://www.airlines-manager.com/aircraft/show/112650106,19:00,7:29,310,"763,375$","705,708$","$2,276.48","$56,532.02"
SFO - PWM,58017973146,S-KOA-PWM-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/58017973146,https://www.airlines-manager.com/aircraft/show/112650091,0:15,12:59,198,"576,974$","530,777$","$2,680.69","$41,684.06"
SFO - PWM,58021655877,S-KOA-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/58021655877,https://www.airlines-manager.com/aircraft/show/112650103,4:15,16:59,310,"771,182$","713,582$","$2,301.88","$56,040.47"
SFO - PWM,58027885478,S-KOA-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/58027885478,https://www.airlines-manager.com/aircraft/show/112650102,7:15,19:59,310,"771,182$","713,582$","$2,301.88","$56,040.47"
SFO - PWM,58042065715,S-KOA-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/58042065715,https://www.airlines-manager.com/aircraft/show/112650101,14:00,2:44,310,"771,182$","713,582$","$2,301.88","$56,040.47"
SFO - PWM,58045346316,S-KOA-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/58045346316,https://www.airlines-manager.com/aircraft/show/112650100,16:00,4:44,310,"771,182$","713,582$","$2,301.88","$56,040.47"
SFO - RAP,58021655910,S-FAR-BIL-1,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/58021655910,https://www.airlines-manager.com/aircraft/show/117782584,4:30,10:59,310,"399,527$","365,234$","$1,178.17","$56,334.29"
SFO - RAP,58031343137,S-FAR-BIL-4,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/58031343137,https://www.airlines-manager.com/aircraft/show/117782587,8:30,14:59,310,"399,527$","365,234$","$1,178.17","$56,334.29"
SFO - RAP,58045346211,S-FAR-BIL-3,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/58045346211,https://www.airlines-manager.com/aircraft/show/117782586,15:00,21:29,310,"399,527$","365,234$","$1,178.17","$56,334.29"
SFO - RAP,58054747954,S-FAR-BIL-2,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/58054747954,https://www.airlines-manager.com/aircraft/show/117782585,20:45,3:14,291,"385,065$","351,344$","$1,207.37","$54,191.88"
SFO - RDM,58017973393,S-MAF-FCA-5,ERJ-175,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/58017973393,https://www.airlines-manager.com/aircraft/show/119652600,1:15,5:14,112,"102,798$","87,608$",$782.21,"$21,993.64"
SFO - RDM,58024780662,S-MAF-FCA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/58024780662,https://www.airlines-manager.com/aircraft/show/120056761,6:00,9:59,272,"199,098$","180,421$",$663.31,"$45,293.97"
SFO - RDM,58042065462,S-MAF-FCA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/58042065462,https://www.airlines-manager.com/aircraft/show/120056758,13:00,16:59,272,"199,098$","180,421$",$663.31,"$45,293.97"
SFO - RDM,58051861486,S-MAF-FCA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/58051861486,https://www.airlines-manager.com/aircraft/show/120056759,18:00,21:59,272,"199,098$","180,421$",$663.31,"$45,293.97"
SFO - RDM,58059513384,S-MAF-FCA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/58059513384,https://www.airlines-manager.com/aircraft/show/120056760,23:15,3:14,272,"199,098$","180,421$",$663.31,"$45,293.97"
SFO - RDU,58021655947,S-PBI-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/58021655947,https://www.airlines-manager.com/aircraft/show/100301188,5:00,16:14,320,"712,851$","650,128$","$2,031.65","$57,874.90"
SFO - RDU,58027885459,S-PBI-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/58027885459,https://www.airlines-manager.com/aircraft/show/100301187,7:00,18:14,320,"712,851$","650,128$","$2,031.65","$57,874.90"
SFO - RDU,58031343170,S-PBI-RDU-5,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/58031343170,https://www.airlines-manager.com/aircraft/show/100301184,9:00,20:14,320,"712,851$","650,128$","$2,031.65","$57,874.90"
SFO - RDU,58048703687,S-PBI-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/58048703687,https://www.airlines-manager.com/aircraft/show/100301186,17:00,4:14,320,"712,851$","650,128$","$2,031.65","$57,874.90"
SFO - RDU,58051861644,S-PBI-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/58051861644,https://www.airlines-manager.com/aircraft/show/100301185,19:00,6:14,320,"712,851$","650,128$","$2,031.65","$57,874.90"
SFO - RIC,58024780681,S-ORF-RIC-1,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/58024780681,https://www.airlines-manager.com/aircraft/show/108328834,6:00,17:29,310,"726,691$","671,657$","$2,166.64","$58,489.72"
SFO - RIC,58027885540,S-ORF-RIC-2,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/58027885540,https://www.airlines-manager.com/aircraft/show/108328835,8:00,19:29,310,"726,691$","671,657$","$2,166.64","$58,489.72"
SFO - RIC,58034913944,S-ORF-RIC-5 B,A319-100,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/58034913944,https://www.airlines-manager.com/aircraft/show/108328833,10:00,21:29,198,"544,866$","500,734$","$2,528.96","$43,605.28"
SFO - RIC,58051861515,S-ORF-RIC-3,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/58051861515,https://www.airlines-manager.com/aircraft/show/108328836,18:00,5:29,310,"726,691$","671,657$","$2,166.64","$58,489.72"
SFO - RIC,58054747858,S-ORF-RIC-4,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/58054747858,https://www.airlines-manager.com/aircraft/show/108328837,20:00,7:29,310,"726,691$","671,657$","$2,166.64","$58,489.72"
SFO - RNO,58021655858,S-MCI-OMA-2,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/58021655858,https://www.airlines-manager.com/aircraft/show/88239554,4:15,6:59,320,"119,453$","93,133$",$291.04,"$34,073.05"
SFO - RNO,58042065758,S-MCI-OMA-1,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/58042065758,https://www.airlines-manager.com/aircraft/show/88239553,14:15,16:59,320,"119,453$","93,133$",$291.04,"$34,073.05"
SFO - RNO,58042065759,S-MCI-OMA-5 B,A319-100,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/58042065759,https://www.airlines-manager.com/aircraft/show/105223003,14:15,16:59,198,"90,385$","72,533$",$366.33,"$26,536.46"
SFO - RNO,58045346288,S-MCI-OMA-4,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/58045346288,https://www.airlines-manager.com/aircraft/show/88239557,16:00,18:44,320,"119,453$","93,133$",$291.04,"$34,073.05"
SFO - RNO,58054747920,S-MCI-OMA-3,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/58054747920,https://www.airlines-manager.com/aircraft/show/88239555,20:30,23:14,320,"119,453$","93,133$",$291.04,"$34,073.05"
SFO - ROC,58017973026,S-ROC-COS-2,A321neo,https://www.airlines-manager.com/network/showline/50555363,https://www.airlines-manager.com/network/showflight/58017973026,https://www.airlines-manager.com/aircraft/show/120112475,0:00,11:14,338,"771,233$","721,249$","$2,133.87","$64,206.14"
SFO - ROC,58024780714,S-ROC-COS-4,A321neo,https://www.airlines-manager.com/network/showline/50555363,https://www.airlines-manager.com/network/showflight/58024780714,https://www.airlines-manager.com/aircraft/show/120051490,6:45,17:59,338,"771,233$","721,249$","$2,133.87","$64,206.14"
SFO - ROC,58045346150,S-ROC-COS-1,A321neo,https://www.airlines-manager.com/network/showline/50555363,https://www.airlines-manager.com/network/showflight/58045346150,https://www.airlines-manager.com/aircraft/show/120112476,15:00,2:14,338,"771,233$","721,249$","$2,133.87","$64,206.14"
SFO - ROC,58054747883,S-ROC-COS-3,A321neo,https://www.airlines-manager.com/network/showline/50555363,https://www.airlines-manager.com/network/showflight/58054747883,https://www.airlines-manager.com/aircraft/show/120112474,20:15,7:29,338,"771,233$","721,249$","$2,133.87","$64,206.14"
SFO - RSW,58021655964,S-RSW-BDL-3,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/58021655964,https://www.airlines-manager.com/aircraft/show/84915100,5:15,16:59,320,"730,424$","665,610$","$2,080.03","$56,728.13"
SFO - RSW,58027885470,S-RSW-BDL-4,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/58027885470,https://www.airlines-manager.com/aircraft/show/84915101,7:15,18:59,320,"730,424$","665,610$","$2,080.03","$56,728.13"
SFO - RSW,58048703680,S-RSW-BDL-1,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/58048703680,https://www.airlines-manager.com/aircraft/show/84915098,17:00,4:44,320,"730,424$","665,610$","$2,080.03","$56,728.13"
SFO - RSW,58051861641,S-RSW-BDL-2,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/58051861641,https://www.airlines-manager.com/aircraft/show/84915099,19:00,6:44,320,"730,424$","665,610$","$2,080.03","$56,728.13"
SFO - RSW,58057474822,S-RSW-BDL-5,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/58057474822,https://www.airlines-manager.com/aircraft/show/84915102,21:00,8:44,320,"730,424$","665,610$","$2,080.03","$56,728.13"
SFO - SAN,58027885526,S-PHL-SEA-1,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/58027885526,https://www.airlines-manager.com/aircraft/show/92390872,8:00,11:44,320,"217,287$","184,448$",$576.40,"$49,405.71"
SFO - SAN,58034914034,S-PHL-SEA-5,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/58034914034,https://www.airlines-manager.com/aircraft/show/92390869,11:00,14:44,320,"217,287$","184,448$",$576.40,"$49,405.71"
SFO - SAN,58038353866,S-PHL-SEA-4,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/58038353866,https://www.airlines-manager.com/aircraft/show/92390870,12:00,15:44,320,"217,287$","184,448$",$576.40,"$49,405.71"
SFO - SAN,58045346249,S-PHL-SEA-3,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/58045346249,https://www.airlines-manager.com/aircraft/show/92390873,15:30,19:14,320,"217,287$","184,448$",$576.40,"$49,405.71"
SFO - SAN,58054747886,S-PHL-SEA-2,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/58054747886,https://www.airlines-manager.com/aircraft/show/92390871,20:15,23:59,320,"217,287$","184,448$",$576.40,"$49,405.71"
SFO - SAT,58017973131,S-JAX-SAT-1,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/58017973131,https://www.airlines-manager.com/aircraft/show/86375568,0:15,8:14,310,"498,478$","457,208$","$1,474.86","$57,270.31"
SFO - SAT,58017973132,S-JAX-SAT-2,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/58017973132,https://www.airlines-manager.com/aircraft/show/86371267,2:15,10:14,310,"498,478$","457,208$","$1,474.86","$57,270.31"
SFO - SAT,58042065556,S-JAX-SAT-3,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/58042065556,https://www.airlines-manager.com/aircraft/show/86385102,13:00,20:59,310,"498,478$","457,208$","$1,474.86","$57,270.31"
SFO - SAT,58045346184,S-JAX-SAT-4,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/58045346184,https://www.airlines-manager.com/aircraft/show/86378760,15:00,22:59,310,"498,478$","457,208$","$1,474.86","$57,270.31"
SFO - SAT,58048703731,S-JAX-SAT-5,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/58048703731,https://www.airlines-manager.com/aircraft/show/86377315,17:15,1:14,310,"498,478$","457,208$","$1,474.86","$57,270.31"
SFO - SAV,58024780657,S-SAV-JAN-1,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/58024780657,https://www.airlines-manager.com/aircraft/show/114912265,5:45,16:59,310,"696,685$","643,380$","$2,075.42","$57,274.18"
SFO - SAV,58027885516,S-SAV-JAN-4,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/58027885516,https://www.airlines-manager.com/aircraft/show/114912270,7:45,18:59,310,"696,685$","643,380$","$2,075.42","$57,274.18"
SFO - SAV,58045346216,S-SAV-JAN-5 B,A319-100,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/58045346216,https://www.airlines-manager.com/aircraft/show/114917486,15:00,2:14,198,"523,286$","480,541$","$2,426.97","$42,778.13"
SFO - SAV,58051861676,S-SAV-JAN-3,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/58051861676,https://www.airlines-manager.com/aircraft/show/114912269,19:00,6:14,310,"696,685$","643,380$","$2,075.42","$57,274.18"
SFO - SAV,58054747926,S-SAV-JAN-2,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/58054747926,https://www.airlines-manager.com/aircraft/show/114912266,20:30,7:44,310,"696,685$","643,380$","$2,075.42","$57,274.18"
SFO - SDF,58017973377,S-SDF-LIT-2,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/58017973377,https://www.airlines-manager.com/aircraft/show/94886628,1:15,10:59,310,"614,512$","564,269$","$1,820.22","$57,972.84"
SFO - SDF,58017973378,S-SDF-LIT-4,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/58017973378,https://www.airlines-manager.com/aircraft/show/106453500,2:15,11:59,310,"614,512$","564,269$","$1,820.22","$57,972.84"
SFO - SDF,58042065705,S-SDF-LIT-1,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/58042065705,https://www.airlines-manager.com/aircraft/show/106453499,14:00,23:44,310,"614,512$","564,269$","$1,820.22","$57,972.84"
SFO - SDF,58048703635,S-SDF-LIT-3,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/58048703635,https://www.airlines-manager.com/aircraft/show/94886627,16:30,2:14,310,"614,512$","564,269$","$1,820.22","$57,972.84"
SFO - SDF,58048703636,S-SDF-LIT-5,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/58048703636,https://www.airlines-manager.com/aircraft/show/106453498,17:30,3:14,310,"614,512$","564,269$","$1,820.22","$57,972.84"
SFO - SEA,58017973596,S-PHL-SEA-5,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/58017973596,https://www.airlines-manager.com/aircraft/show/92390869,2:45,7:29,320,"301,272$","257,664$",$805.20,"$54,436.06"
SFO - SEA,58017973597,S-PHL-SEA-4,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/58017973597,https://www.airlines-manager.com/aircraft/show/92390870,3:30,8:14,320,"301,272$","257,664$",$805.20,"$54,436.06"
SFO - SEA,58024780639,S-PHL-SEA-6 B,A319-100,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/58024780639,https://www.airlines-manager.com/aircraft/show/97900730,5:30,10:14,198,"229,629$","199,471$","$1,007.43","$42,141.76"
SFO - SEA,58027885457,S-PHL-SEA-3,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/58027885457,https://www.airlines-manager.com/aircraft/show/92390873,7:00,11:44,320,"301,272$","257,664$",$805.20,"$54,436.06"
SFO - SEA,58038353867,S-PHL-SEA-2,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/58038353867,https://www.airlines-manager.com/aircraft/show/92390871,12:00,16:44,320,"301,272$","257,664$",$805.20,"$54,436.06"
SFO - SEA,58060881882,S-PHL-SEA-1,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/58060881882,https://www.airlines-manager.com/aircraft/show/92390872,23:45,4:29,307,"293,875$","250,505$",$815.98,"$52,923.59"
SFO - SHA,58054747865,S-168B-4 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/58054747865,https://www.airlines-manager.com/aircraft/show/87933798,20:00,19:59,1046,"4,655,897$","4,320,364$","$4,130.37","$180,140.26"
SFO - SHA,58057474949,S-168A-4 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/58057474949,https://www.airlines-manager.com/aircraft/show/86817628,22:00,21:59,1046,"4,655,897$","4,320,364$","$4,130.37","$180,140.26"
SFO - SLC,58017973040,S-ORD-DTW-4,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/58017973040,https://www.airlines-manager.com/aircraft/show/101045331,0:00,4:29,400,"353,831$","312,930$",$782.33,"$69,798.51"
SFO - SLC,58017973041,S-ORD-DTW-2,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/58017973041,https://www.airlines-manager.com/aircraft/show/101045333,1:00,5:29,400,"353,831$","312,930$",$782.33,"$69,798.51"
SFO - SLC,58017973042,S-ORD-DTW-5,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/58017973042,https://www.airlines-manager.com/aircraft/show/101045330,3:00,7:29,400,"353,831$","312,930$",$782.33,"$69,798.51"
SFO - SLC,58027885525,S-ORD-DTW-1,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/58027885525,https://www.airlines-manager.com/aircraft/show/101045334,8:00,12:29,400,"353,831$","312,930$",$782.33,"$69,798.51"
SFO - SLC,58045346155,S-ORD-DTW-3,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/58045346155,https://www.airlines-manager.com/aircraft/show/101045332,15:00,19:29,230,"262,443$","224,226$",$974.90,"$50,013.23"
SFO - SMF,58031343128,S-SDF-LIT-1,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/58031343128,https://www.airlines-manager.com/aircraft/show/106453499,8:30,10:59,310,"83,132$","62,550$",$201.77,"$25,187.92"
SFO - SMF,58042065694,S-SDF-LIT-3,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/58042065694,https://www.airlines-manager.com/aircraft/show/94886627,14:00,16:29,310,"83,132$","62,550$",$201.77,"$25,187.92"
SFO - SMF,58045346195,S-SDF-LIT-5,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/58045346195,https://www.airlines-manager.com/aircraft/show/106453498,15:00,17:29,310,"83,132$","62,550$",$201.77,"$25,187.92"
SFO - SMF,58059513326,S-SDF-LIT-2,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/58059513326,https://www.airlines-manager.com/aircraft/show/94886628,22:45,1:14,310,"83,132$","62,550$",$201.77,"$25,187.92"
SFO - SMF,58060881894,S-SDF-LIT-4,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/58060881894,https://www.airlines-manager.com/aircraft/show/106453500,23:45,2:14,310,"83,132$","62,550$",$201.77,"$25,187.92"
SFO - STL,58024780717,S-MSY-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/58024780717,https://www.airlines-manager.com/aircraft/show/98075265,6:45,15:29,320,"557,439$","503,685$","$1,574.02","$57,673.85"
SFO - STL,58031343149,S-MSY-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/58031343149,https://www.airlines-manager.com/aircraft/show/98075263,8:45,17:29,320,"557,439$","503,685$","$1,574.02","$57,673.85"
SFO - STL,58042065606,S-MSY-STL-6,ERJ-175,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/58042065606,https://www.airlines-manager.com/aircraft/show/103534666,13:00,21:44,112,"262,228$","230,306$","$2,056.30","$26,370.92"
SFO - STL,58045346292,S-MSY-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/58045346292,https://www.airlines-manager.com/aircraft/show/98075266,16:00,0:44,320,"557,439$","503,685$","$1,574.02","$57,673.85"
SFO - STL,58051861499,S-MSY-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/58051861499,https://www.airlines-manager.com/aircraft/show/98075264,18:00,2:44,320,"557,439$","503,685$","$1,574.02","$57,673.85"
SFO - STL,58059513280,S-MSY-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/58059513280,https://www.airlines-manager.com/aircraft/show/98075267,22:30,7:14,320,"557,439$","503,685$","$1,574.02","$57,673.85"
SFO - SYR,58017973056,S-GSO-SYR-2,737-900ER,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/58017973056,https://www.airlines-manager.com/aircraft/show/120056763,0:00,11:29,320,"714,764$","654,987$","$2,046.83","$57,038.06"
SFO - SYR,58038353889,S-GSO-SYR-3,737-900ER,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/58038353889,https://www.airlines-manager.com/aircraft/show/120056762,12:00,23:29,320,"714,764$","654,987$","$2,046.83","$57,038.06"
SFO - SYR,58042065540,S-GSO-SYR-4,737-900ER,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/58042065540,https://www.airlines-manager.com/aircraft/show/119550235,13:00,0:29,320,"714,764$","654,987$","$2,046.83","$57,038.06"
SFO - SYR,58051861592,S-GSO-SYR-5,A319-100,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/58051861592,https://www.airlines-manager.com/aircraft/show/120112473,18:30,5:59,198,"537,637$","493,892$","$2,494.40","$43,009.46"
SFO - SYR,58059513347,S-GSO-SYR-1,737-900ER,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/58059513347,https://www.airlines-manager.com/aircraft/show/120056764,23:00,10:29,320,"714,764$","654,987$","$2,046.83","$57,038.06"
SFO - TFU,58038353936,S-168B-3 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/58038353936,https://www.airlines-manager.com/aircraft/show/87566902,12:30,14:59,1046,"5,238,347$","4,830,688$","$4,618.25","$1,945,243.49"
SFO - TFU,58042065780,S-168A-3 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/58042065780,https://www.airlines-manager.com/aircraft/show/86483501,14:30,16:59,1046,"5,238,347$","4,830,688$","$4,618.25","$1,945,243.49"
SFO - TPA,58017973245,S-FLL-TPA-1,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/58017973245,https://www.airlines-manager.com/aircraft/show/97955544,1:00,12:14,320,"704,621$","638,570$","$1,995.53","$56,845.99"
SFO - TPA,58021655945,S-FLL-TPA-3,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/58021655945,https://www.airlines-manager.com/aircraft/show/97955542,5:00,16:14,320,"704,621$","638,570$","$1,995.53","$56,845.99"
SFO - TPA,58027885527,S-FLL-TPA-5,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/58027885527,https://www.airlines-manager.com/aircraft/show/97955540,8:00,19:14,320,"704,621$","638,570$","$1,995.53","$56,845.99"
SFO - TPA,58042065510,S-FLL-TPA-2,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/58042065510,https://www.airlines-manager.com/aircraft/show/97955543,13:00,0:14,320,"704,621$","638,570$","$1,995.53","$56,845.99"
SFO - TPA,58048703685,S-FLL-TPA-4,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/58048703685,https://www.airlines-manager.com/aircraft/show/97955541,17:00,4:14,320,"704,621$","638,570$","$1,995.53","$56,845.99"
SFO - TPA,58054747868,S-FLL-TPA-6 B,A319-100,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/58054747868,https://www.airlines-manager.com/aircraft/show/97900729,20:00,7:29,198,"531,620$","483,764$","$2,443.25","$42,127.49"
SFO - TPE,58054747866,S-168B-5 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/58054747866,https://www.airlines-manager.com/aircraft/show/87933799,20:00,21:14,1046,"4,782,404$","4,432,378$","$4,237.46","$3,593,820.00"
SFO - TPE,58057474948,S-168A-5 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/58057474948,https://www.airlines-manager.com/aircraft/show/86808589,22:00,23:14,1036,"4,750,382$","4,402,359$","$4,249.38","$3,569,480.27"
SFO - TUL,58021655925,S-TUL-DSM-2,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/58021655925,https://www.airlines-manager.com/aircraft/show/108410857,4:45,12:29,320,"493,680$","448,182$","$1,400.57","$57,954.57"
SFO - TUL,58027885469,S-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/58027885469,https://www.airlines-manager.com/aircraft/show/108466264,7:00,14:44,112,"232,916$","205,908$","$1,838.46","$26,626.03"
SFO - TUL,58045346176,S-TUL-DSM-1,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/58045346176,https://www.airlines-manager.com/aircraft/show/108410856,15:00,22:44,320,"493,680$","448,182$","$1,400.57","$57,954.57"
SFO - TUL,58045346177,S-TUL-DSM-4,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/58045346177,https://www.airlines-manager.com/aircraft/show/108410859,15:45,23:29,320,"493,680$","448,182$","$1,400.57","$57,954.57"
SFO - TUL,58054747945,S-TUL-DSM-3,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/58054747945,https://www.airlines-manager.com/aircraft/show/108410858,20:45,4:29,320,"493,680$","448,182$","$1,400.57","$57,954.57"
SFO - TUS,58027885531,S-OKC-FSD-1,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/58027885531,https://www.airlines-manager.com/aircraft/show/107160378,8:00,12:59,320,"319,228$","284,067$",$887.71,"$57,003.41"
SFO - TUS,58031343213,S-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/58031343213,https://www.airlines-manager.com/aircraft/show/107132310,9:30,14:29,112,"152,035$","132,268$","$1,180.96","$26,542.07"
SFO - TUS,58034913973,S-OKC-FSD-4,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/58034913973,https://www.airlines-manager.com/aircraft/show/107160381,10:30,15:29,320,"319,228$","284,067$",$887.71,"$57,003.41"
SFO - TUS,58045346297,S-OKC-FSD-3,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/58045346297,https://www.airlines-manager.com/aircraft/show/107160380,16:00,20:59,320,"319,228$","284,067$",$887.71,"$57,003.41"
SFO - TUS,58059513411,S-OKC-FSD-2,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/58059513411,https://www.airlines-manager.com/aircraft/show/107160379,23:30,4:29,320,"319,228$","284,067$",$887.71,"$57,003.41"
SFO - TYS,58024780652,S-TYS-MSN-2,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/58024780652,https://www.airlines-manager.com/aircraft/show/117782564,5:45,15:59,320,"642,888$","588,205$","$1,838.14","$57,479.32"
SFO - TYS,58027885492,S-TYS-MSN-1,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/58027885492,https://www.airlines-manager.com/aircraft/show/117782565,7:30,17:44,320,"642,888$","588,205$","$1,838.14","$57,479.32"
SFO - TYS,58045346329,S-TYS-MSN-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/58045346329,https://www.airlines-manager.com/aircraft/show/117782582,16:00,2:14,198,"483,910$","444,071$","$2,242.78","$43,394.56"
SFO - TYS,58054747782,S-TYS-MSN-3,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/58054747782,https://www.airlines-manager.com/aircraft/show/117782563,19:30,5:44,320,"642,888$","588,205$","$1,838.14","$57,479.32"
SFO - TYS,58054747783,S-TYS-MSN-4,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/58054747783,https://www.airlines-manager.com/aircraft/show/117782562,20:45,6:59,320,"642,888$","588,205$","$1,838.14","$57,479.32"
SFO - YEG,58017973675,S-YEG-YYC-2,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/58017973675,https://www.airlines-manager.com/aircraft/show/117782560,3:30,9:59,320,"420,949$","378,331$","$1,182.28","$58,354.40"
SFO - YEG,58031343110,S-YEG-YYC-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/58031343110,https://www.airlines-manager.com/aircraft/show/117782581,8:15,14:59,198,"317,291$","287,019$","$1,449.59","$42,626.58"
SFO - YEG,58042065537,S-YEG-YYC-1,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/58042065537,https://www.airlines-manager.com/aircraft/show/117782561,13:00,19:29,320,"420,949$","378,331$","$1,182.28","$58,354.40"
SFO - YEG,58045346179,S-YEG-YYC-4,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/58045346179,https://www.airlines-manager.com/aircraft/show/116932364,15:00,21:29,320,"420,949$","378,331$","$1,182.28","$58,354.40"
SFO - YEG,58057474883,S-YEG-YYC-3,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/58057474883,https://www.airlines-manager.com/aircraft/show/117782559,21:30,3:59,320,"420,949$","378,331$","$1,182.28","$58,354.40"
SFO - YOW,58017973112,S-YOW-CUN-3,757-300,https://www.airlines-manager.com/network/showline/50555301,https://www.airlines-manager.com/network/showflight/58017973112,https://www.airlines-manager.com/aircraft/show/120056766,0:15,11:29,400,"934,986$","864,487$","$2,161.22","$76,957.30"
SFO - YOW,58017973113,S-YOW-CUN-4,757-300,https://www.airlines-manager.com/network/showline/50555301,https://www.airlines-manager.com/network/showflight/58017973113,https://www.airlines-manager.com/aircraft/show/120056765,1:15,12:29,400,"934,986$","864,487$","$2,161.22","$76,957.30"
SFO - YOW,58042065499,S-YOW-CUN-1,757-300,https://www.airlines-manager.com/network/showline/50555301,https://www.airlines-manager.com/network/showflight/58042065499,https://www.airlines-manager.com/aircraft/show/120056768,13:00,0:14,400,"934,986$","864,487$","$2,161.22","$76,957.30"
SFO - YOW,58042065500,S-YOW-CUN-2,757-300,https://www.airlines-manager.com/network/showline/50555301,https://www.airlines-manager.com/network/showflight/58042065500,https://www.airlines-manager.com/aircraft/show/120056767,14:00,1:14,400,"934,986$","864,487$","$2,161.22","$76,957.30"
SFO - YUL,58017973196,S-YYZ-YUL-1,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/58017973196,https://www.airlines-manager.com/aircraft/show/115413609,0:45,12:29,400,"926,903$","850,879$","$2,127.20","$72,518.10"
SFO - YUL,58024780672,S-YYZ-YUL-4,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/58024780672,https://www.airlines-manager.com/aircraft/show/115413612,6:00,17:44,400,"926,903$","850,879$","$2,127.20","$72,518.10"
SFO - YUL,58042065655,S-YYZ-YUL-2,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/58042065655,https://www.airlines-manager.com/aircraft/show/115413610,14:00,1:44,400,"926,903$","850,879$","$2,127.20","$72,518.10"
SFO - YUL,58048703648,S-YYZ-YUL-3,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/58048703648,https://www.airlines-manager.com/aircraft/show/115413611,16:45,4:29,400,"926,903$","850,879$","$2,127.20","$72,518.10"
SFO - YUL,58051861600,S-YYZ-YUL- 5,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/58051861600,https://www.airlines-manager.com/aircraft/show/91126653,18:45,6:29,400,"926,903$","850,879$","$2,127.20","$72,518.10"
SFO - YVR,58017973199,S-MSY-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/58017973199,https://www.airlines-manager.com/aircraft/show/98075266,0:45,5:59,320,"331,374$","290,411$",$907.53,"$55,492.55"
SFO - YVR,58017973200,S-MSY-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/58017973200,https://www.airlines-manager.com/aircraft/show/98075264,2:45,7:59,320,"331,374$","290,411$",$907.53,"$55,492.55"
SFO - YVR,58027885473,S-MSY-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/58027885473,https://www.airlines-manager.com/aircraft/show/98075267,7:15,12:29,320,"331,374$","290,411$",$907.53,"$55,492.55"
SFO - YVR,58045346291,S-MSY-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/58045346291,https://www.airlines-manager.com/aircraft/show/98075265,16:00,21:14,320,"331,374$","290,411$",$907.53,"$55,492.55"
SFO - YVR,58051861498,S-MSY-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/58051861498,https://www.airlines-manager.com/aircraft/show/98075263,18:00,23:14,320,"331,374$","290,411$",$907.53,"$55,492.55"
SFO - YVR,58057474925,S-MSY-STL-6,ERJ-175,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/58057474925,https://www.airlines-manager.com/aircraft/show/103534666,21:45,2:59,112,"156,970$","134,156$","$1,197.82","$25,634.90"
SFO - YYC,58021655827,S-YEG-YYC-3,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/58021655827,https://www.airlines-manager.com/aircraft/show/117782559,4:00,9:59,320,"386,674$","342,885$","$1,071.52","$57,306.69"
SFO - YYC,58042065536,S-YEG-YYC-2,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/58042065536,https://www.airlines-manager.com/aircraft/show/117782560,13:00,18:59,320,"386,674$","342,885$","$1,071.52","$57,306.69"
SFO - YYC,58045346217,S-YEG-YYC-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/58045346217,https://www.airlines-manager.com/aircraft/show/117782581,15:00,20:59,198,"290,770$","259,950$","$1,312.88","$43,445.68"
SFO - YYC,58054747781,S-YEG-YYC-1,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/58054747781,https://www.airlines-manager.com/aircraft/show/117782561,19:30,1:29,320,"386,674$","342,885$","$1,071.52","$57,306.69"
SFO - YYC,58057474882,S-YEG-YYC-4,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/58057474882,https://www.airlines-manager.com/aircraft/show/116932364,21:30,3:29,320,"386,674$","342,885$","$1,071.52","$57,306.69"
SFO - YYZ,58017973475,S-YYZ-YUL-2,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/58017973475,https://www.airlines-manager.com/aircraft/show/115413610,1:45,12:29,400,"886,073$","807,953$","$2,019.88","$75,275.12"
SFO - YYZ,58024780671,S-YYZ-YUL-3,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/58024780671,https://www.airlines-manager.com/aircraft/show/115413611,6:00,16:44,400,"886,073$","807,953$","$2,019.88","$75,275.12"
SFO - YYZ,58027885524,S-YYZ-YUL- 5,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/58027885524,https://www.airlines-manager.com/aircraft/show/91126653,8:00,18:44,400,"886,073$","807,953$","$2,019.88","$75,275.12"
SFO - YYZ,58042065654,S-YYZ-YUL-1,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/58042065654,https://www.airlines-manager.com/aircraft/show/115413609,14:00,0:44,400,"886,073$","807,953$","$2,019.88","$75,275.12"
SFO - YYZ,58048703769,S-YYZ-YUL-4,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/58048703769,https://www.airlines-manager.com/aircraft/show/115413612,17:45,4:29,400,"886,073$","807,953$","$2,019.88","$75,275.12"
ORD - ABQ,58017973580,O-GEG-ABQ-3,737-900ER,https://www.airlines-manager.com/network/showline/51552831,https://www.airlines-manager.com/network/showflight/58017973580,https://www.airlines-manager.com/aircraft/show/123133561,2:30,8:59,320,"404,279$","348,004$","$1,087.51","$53,676.71"
ORD - ABQ,58027885547,O-GEG-ABQ-5,A319-100,https://www.airlines-manager.com/network/showline/51552831,https://www.airlines-manager.com/network/showflight/58027885547,https://www.airlines-manager.com/aircraft/show/123232505,8:00,14:29,198,"306,047$","266,746$","$1,347.20","$41,143.34"
ORD - ABQ,58038353831,O-GEG-ABQ-2,737-900ER,https://www.airlines-manager.com/network/showline/51552831,https://www.airlines-manager.com/network/showflight/58038353831,https://www.airlines-manager.com/aircraft/show/123133562,11:30,17:59,320,"404,279$","348,004$","$1,087.51","$53,676.71"
ORD - ABQ,58038353832,O-GEG-ABQ-4,737-900ER,https://www.airlines-manager.com/network/showline/51552831,https://www.airlines-manager.com/network/showflight/58038353832,https://www.airlines-manager.com/aircraft/show/123133560,12:30,18:59,320,"404,279$","348,004$","$1,087.51","$53,676.71"
ORD - ABQ,58054747788,O-GEG-ABQ-1,737-900ER,https://www.airlines-manager.com/network/showline/51552831,https://www.airlines-manager.com/network/showflight/58054747788,https://www.airlines-manager.com/aircraft/show/123133563,19:30,1:59,320,"404,279$","348,004$","$1,087.51","$53,676.71"
ORD - ALB,58021655881,O-OKC-ORF-2,A321-200,https://www.airlines-manager.com/network/showline/51776638,https://www.airlines-manager.com/network/showflight/58021655881,https://www.airlines-manager.com/aircraft/show/123757727,4:15,9:14,310,"314,668$","275,862$",$889.88,"$55,356.92"
ORD - ALB,58031343139,O-OKC-ORF-1,A321-200,https://www.airlines-manager.com/network/showline/51776638,https://www.airlines-manager.com/network/showflight/58031343139,https://www.airlines-manager.com/aircraft/show/123757728,8:30,13:29,310,"314,668$","275,862$",$889.88,"$55,356.92"
ORD - ALB,58042065646,O-OKC-ORF-5,ERJ-175,https://www.airlines-manager.com/network/showline/51776638,https://www.airlines-manager.com/network/showflight/58042065646,https://www.airlines-manager.com/aircraft/show/123133602,13:45,18:44,112,"149,537$","124,995$","$1,116.03","$25,082.61"
ORD - ALB,58048703707,O-OKC-ORF-4,A321-200,https://www.airlines-manager.com/network/showline/51776638,https://www.airlines-manager.com/network/showflight/58048703707,https://www.airlines-manager.com/aircraft/show/123757725,17:00,21:59,310,"314,668$","275,862$",$889.88,"$55,356.92"
ORD - ALB,58057474985,O-OKC-ORF-3,A321-200,https://www.airlines-manager.com/network/showline/51776638,https://www.airlines-manager.com/network/showflight/58057474985,https://www.airlines-manager.com/aircraft/show/123757726,22:15,3:14,310,"314,668$","275,862$",$889.88,"$55,356.92"
ORD - ANC,58034914101,O-ANC-TUS-1,A321-200,https://www.airlines-manager.com/network/showline/51427559,https://www.airlines-manager.com/network/showflight/58034914101,https://www.airlines-manager.com/aircraft/show/122771603,11:00,0:14,310,"800,693$","724,629$","$2,337.51","$54,757.86"
ORD - ANC,58042065594,O-ANC-TUS-2,A321-200,https://www.airlines-manager.com/network/showline/51427559,https://www.airlines-manager.com/network/showflight/58042065594,https://www.airlines-manager.com/aircraft/show/122771602,13:00,2:14,310,"800,693$","724,629$","$2,337.51","$54,757.86"
ORD - ANC,58051861627,O-ANC-TUS-3,A321-200,https://www.airlines-manager.com/network/showline/51427559,https://www.airlines-manager.com/network/showflight/58051861627,https://www.airlines-manager.com/aircraft/show/122771601,18:45,7:59,310,"800,693$","724,629$","$2,337.51","$54,757.86"
ORD - ANC,58054747956,O-ANC-TUS-4,A321-200,https://www.airlines-manager.com/network/showline/51427559,https://www.airlines-manager.com/network/showflight/58054747956,https://www.airlines-manager.com/aircraft/show/122771600,20:45,9:59,310,"800,693$","724,629$","$2,337.51","$54,757.86"
ORD - ANC,58059513333,O-ANC-TUS-5,A321-200,https://www.airlines-manager.com/network/showline/51427559,https://www.airlines-manager.com/network/showflight/58059513333,https://www.airlines-manager.com/aircraft/show/122771599,22:45,11:59,310,"800,693$","724,629$","$2,337.51","$54,757.86"
ORD - ATL,58017973153,O-ATL-YYZ-4,A321neo,https://www.airlines-manager.com/network/showline/51097511,https://www.airlines-manager.com/network/showflight/58017973153,https://www.airlines-manager.com/aircraft/show/121813378,0:30,4:59,338,"306,011$","244,274$",$722.70,"$54,484.91"
ORD - ATL,58021655853,O-ATL-YYZ-3,A321neo,https://www.airlines-manager.com/network/showline/51097511,https://www.airlines-manager.com/network/showflight/58021655853,https://www.airlines-manager.com/aircraft/show/121813379,4:15,8:44,338,"306,011$","244,274$",$722.70,"$54,484.91"
ORD - ATL,58034914005,O-ATL-YYZ-1,A321neo,https://www.airlines-manager.com/network/showline/51097511,https://www.airlines-manager.com/network/showflight/58034914005,https://www.airlines-manager.com/aircraft/show/121813381,11:00,15:29,338,"306,011$","244,274$",$722.70,"$54,484.91"
ORD - ATL,58042065479,O-ATL-YYZ-2,A321neo,https://www.airlines-manager.com/network/showline/51097511,https://www.airlines-manager.com/network/showflight/58042065479,https://www.airlines-manager.com/aircraft/show/121813380,13:00,17:29,338,"306,011$","244,274$",$722.70,"$54,484.91"
ORD - ATL,58057474818,O-ATL-YYZ-5,A321neo,https://www.airlines-manager.com/network/showline/51097511,https://www.airlines-manager.com/network/showflight/58057474818,https://www.airlines-manager.com/aircraft/show/115400545,21:00,1:29,338,"306,011$","244,274$",$722.70,"$54,484.91"
ORD - AUS,58017973638,O-FAT-AUS-5,A319-100,https://www.airlines-manager.com/network/showline/51427537,https://www.airlines-manager.com/network/showflight/58017973638,https://www.airlines-manager.com/aircraft/show/122771598,3:00,8:59,198,"284,835$","247,560$","$1,250.30","$41,374.93"
ORD - AUS,58034914070,O-FAT-AUS-3,737-900ER,https://www.airlines-manager.com/network/showline/51427537,https://www.airlines-manager.com/network/showflight/58034914070,https://www.airlines-manager.com/aircraft/show/122805429,11:00,16:59,320,"375,971$","322,407$","$1,007.52","$53,884.18"
ORD - AUS,58042065552,O-FAT-AUS-4,737-900ER,https://www.airlines-manager.com/network/showline/51427537,https://www.airlines-manager.com/network/showflight/58042065552,https://www.airlines-manager.com/aircraft/show/122805428,13:00,18:59,320,"375,971$","322,407$","$1,007.52","$53,884.18"
ORD - AUS,58054747821,O-FAT-AUS-1,737-900ER,https://www.airlines-manager.com/network/showline/51427537,https://www.airlines-manager.com/network/showflight/58054747821,https://www.airlines-manager.com/aircraft/show/122805431,19:45,1:44,320,"375,971$","322,407$","$1,007.52","$53,884.18"
ORD - AUS,58057474920,O-FAT-AUS-2,737-900ER,https://www.airlines-manager.com/network/showline/51427537,https://www.airlines-manager.com/network/showflight/58057474920,https://www.airlines-manager.com/aircraft/show/122805430,21:45,3:44,320,"375,971$","322,407$","$1,007.52","$53,884.18"
ORD - BDL,58017973690,O-EUG-BDL-4,737-900ER,https://www.airlines-manager.com/network/showline/51552953,https://www.airlines-manager.com/network/showflight/58017973690,https://www.airlines-manager.com/aircraft/show/123133556,3:45,8:59,320,"330,682$","283,441$",$885.75,"$54,160.70"
ORD - BDL,58027885513,O-EUG-BDL-3,737-900ER,https://www.airlines-manager.com/network/showline/51552953,https://www.airlines-manager.com/network/showflight/58027885513,https://www.airlines-manager.com/aircraft/show/123133557,7:45,12:59,320,"330,682$","283,441$",$885.75,"$54,160.70"
ORD - BDL,58038353829,O-EUG-BDL-2,737-900ER,https://www.airlines-manager.com/network/showline/51552953,https://www.airlines-manager.com/network/showflight/58038353829,https://www.airlines-manager.com/aircraft/show/123133558,11:30,16:44,320,"330,682$","283,441$",$885.75,"$54,160.70"
ORD - BDL,58042065611,O-EUG-BDL-5,ERJ-175,https://www.airlines-manager.com/network/showline/51552953,https://www.airlines-manager.com/network/showflight/58042065611,https://www.airlines-manager.com/aircraft/show/123133603,13:00,18:14,112,"156,993$","131,097$","$1,170.51","$25,050.38"
ORD - BDL,58057474937,O-EUG-BDL-1,737-900ER,https://www.airlines-manager.com/network/showline/51552953,https://www.airlines-manager.com/network/showflight/58057474937,https://www.airlines-manager.com/aircraft/show/123133559,22:00,3:14,320,"330,682$","283,441$",$885.75,"$54,160.70"
ORD - BFF,58017973083,O-JAX-BFF-5,A319-100,https://www.airlines-manager.com/network/showline/51552837,https://www.airlines-manager.com/network/showflight/58017973083,https://www.airlines-manager.com/aircraft/show/123232507,0:00,5:14,198,"251,817$","219,067$","$1,106.40","$41,859.94"
ORD - BFF,58017973084,O-JAX-BFF-3,A321neo,https://www.airlines-manager.com/network/showline/51552837,https://www.airlines-manager.com/network/showflight/58017973084,https://www.airlines-manager.com/aircraft/show/123232508,3:45,8:59,338,"359,662$","319,773$",$946.07,"$61,103.12"
ORD - BFF,58034914111,O-JAX-BFF-2,A321neo,https://www.airlines-manager.com/network/showline/51552837,https://www.airlines-manager.com/network/showflight/58034914111,https://www.airlines-manager.com/aircraft/show/123232509,11:15,16:29,338,"359,662$","319,773$",$946.07,"$61,103.12"
ORD - BFF,58048703721,O-JAX-BFF-1,A321neo,https://www.airlines-manager.com/network/showline/51552837,https://www.airlines-manager.com/network/showflight/58048703721,https://www.airlines-manager.com/aircraft/show/123232510,17:15,22:29,338,"359,662$","319,773$",$946.07,"$61,103.12"
ORD - BFF,58057474904,O-JAX-BFF-4,A321neo,https://www.airlines-manager.com/network/showline/51552837,https://www.airlines-manager.com/network/showflight/58057474904,https://www.airlines-manager.com/aircraft/show/121813377,21:45,2:59,338,"359,662$","319,773$",$946.07,"$61,103.12"
ORD - BNA,58017973060,O-MSY-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/51427545,https://www.airlines-manager.com/network/showflight/58017973060,https://www.airlines-manager.com/aircraft/show/122805427,0:00,3:44,320,"200,031$","157,271$",$491.47,"$42,126.16"
ORD - BNA,58024780687,O-MSY-RDU-5,A319-100,https://www.airlines-manager.com/network/showline/51427545,https://www.airlines-manager.com/network/showflight/58024780687,https://www.airlines-manager.com/aircraft/show/122771597,6:00,9:44,198,"151,544$","122,383$",$618.10,"$32,781.16"
ORD - BNA,58031343208,O-MSY-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/51427545,https://www.airlines-manager.com/network/showflight/58031343208,https://www.airlines-manager.com/aircraft/show/122390305,9:30,13:14,320,"200,031$","157,271$",$491.47,"$42,126.16"
ORD - BNA,58042065773,O-MSY-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/51427545,https://www.airlines-manager.com/network/showflight/58042065773,https://www.airlines-manager.com/aircraft/show/122805425,14:30,18:14,320,"200,031$","157,271$",$491.47,"$42,126.16"
ORD - BNA,58051861695,O-MSY-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/51427545,https://www.airlines-manager.com/network/showflight/58051861695,https://www.airlines-manager.com/aircraft/show/122805426,19:15,22:59,320,"200,031$","157,271$",$491.47,"$42,126.16"
ORD - BOI,58017973507,O-PSP-MEM-4,A321-200,https://www.airlines-manager.com/network/showline/51427552,https://www.airlines-manager.com/network/showflight/58017973507,https://www.airlines-manager.com/aircraft/show/122771605,1:45,9:29,310,"483,433$","432,129$","$1,393.96","$55,878.75"
ORD - BOI,58017973508,O-PSP-MEM-3,A321-200,https://www.airlines-manager.com/network/showline/51427552,https://www.airlines-manager.com/network/showflight/58017973508,https://www.airlines-manager.com/aircraft/show/122771606,3:15,10:59,310,"483,433$","432,129$","$1,393.96","$55,878.75"
ORD - BOI,58021655933,O-PSP-MEM-5,A321-200,https://www.airlines-manager.com/network/showline/51427552,https://www.airlines-manager.com/network/showflight/58021655933,https://www.airlines-manager.com/aircraft/show/122771604,4:45,12:29,310,"483,433$","432,129$","$1,393.96","$55,878.75"
ORD - BOI,58034914103,O-PSP-MEM-2,A321-200,https://www.airlines-manager.com/network/showline/51427552,https://www.airlines-manager.com/network/showflight/58034914103,https://www.airlines-manager.com/aircraft/show/122771607,11:00,18:44,310,"483,433$","432,129$","$1,393.96","$55,878.75"
ORD - BOI,58057474895,O-PSP-MEM-1,A321-200,https://www.airlines-manager.com/network/showline/51427552,https://www.airlines-manager.com/network/showflight/58057474895,https://www.airlines-manager.com/aircraft/show/122771608,21:30,5:14,296,"470,486$","419,732$","$1,418.01","$54,275.69"
ORD - BOS,58027885536,O-SJC-ONT-5,737-900ER,https://www.airlines-manager.com/network/showline/51202004,https://www.airlines-manager.com/network/showflight/58027885536,https://www.airlines-manager.com/aircraft/show/122278407,8:00,13:29,320,"347,719$","292,330$",$913.53,"$53,312.46"
ORD - BOS,58034914068,O-SJC-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/51202004,https://www.airlines-manager.com/network/showflight/58034914068,https://www.airlines-manager.com/aircraft/show/122278409,11:00,16:29,320,"347,719$","292,330$",$913.53,"$53,312.46"
ORD - BOS,58042065549,O-SJC-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/51202004,https://www.airlines-manager.com/network/showflight/58042065549,https://www.airlines-manager.com/aircraft/show/122278408,13:00,18:29,320,"347,719$","292,330$",$913.53,"$53,312.46"
ORD - BOS,58042065550,O-SJC-BOS,ERJ-175,https://www.airlines-manager.com/network/showline/51202004,https://www.airlines-manager.com/network/showflight/58042065550,https://www.airlines-manager.com/aircraft/show/122320232,13:15,18:44,102,"154,783$","125,036$","$1,225.84","$22,802.92"
ORD - BOS,58054747895,O-SJC-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/51202004,https://www.airlines-manager.com/network/showflight/58054747895,https://www.airlines-manager.com/aircraft/show/122278411,20:15,1:44,320,"347,719$","292,330$",$913.53,"$53,312.46"
ORD - BOS,58057474973,O-SJC-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/51202004,https://www.airlines-manager.com/network/showflight/58057474973,https://www.airlines-manager.com/aircraft/show/122278410,22:15,3:44,320,"347,719$","292,330$",$913.53,"$53,312.46"
ORD - BUF,58017973457,O-YZF-PVD-4,A321-200,https://www.airlines-manager.com/network/showline/51776654,https://www.airlines-manager.com/network/showflight/58017973457,https://www.airlines-manager.com/aircraft/show/123757733,1:30,5:29,310,"227,419$","191,882$",$618.97,"$48,171.21"
ORD - BUF,58021655961,O-YZF-PVD-5,ERJ-175,https://www.airlines-manager.com/network/showline/51776654,https://www.airlines-manager.com/network/showflight/58021655961,https://www.airlines-manager.com/aircraft/show/123757768,5:00,8:59,112,"105,727$","83,581$",$746.26,"$20,982.68"
ORD - BUF,58034914118,O-YZF-PVD-3,A321-200,https://www.airlines-manager.com/network/showline/51776654,https://www.airlines-manager.com/network/showflight/58034914118,https://www.airlines-manager.com/aircraft/show/123757734,11:15,15:14,310,"227,419$","191,882$",$618.97,"$48,171.21"
ORD - BUF,58042065779,O-YZF-PVD-2,A321-200,https://www.airlines-manager.com/network/showline/51776654,https://www.airlines-manager.com/network/showflight/58042065779,https://www.airlines-manager.com/aircraft/show/123757735,14:30,18:29,310,"227,419$","191,882$",$618.97,"$48,171.21"
ORD - BUF,58054747864,O-YZF-PVD-1,A321-200,https://www.airlines-manager.com/network/showline/51776654,https://www.airlines-manager.com/network/showflight/58054747864,https://www.airlines-manager.com/aircraft/show/123757736,20:00,23:59,310,"227,419$","191,882$",$618.97,"$48,171.21"
ORD - BUR,58017973541,O-SNA-BUR-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369092,https://www.airlines-manager.com/network/showflight/58017973541,https://www.airlines-manager.com/aircraft/show/122598444,2:15,10:59,272,"501,190$","459,236$","$1,688.37","$52,584.27"
ORD - BUR,58021655848,O-SNA-BUR-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369092,https://www.airlines-manager.com/network/showflight/58021655848,https://www.airlines-manager.com/aircraft/show/122598445,4:15,12:59,272,"501,190$","459,236$","$1,688.37","$52,584.27"
ORD - BUR,58034913991,O-SNA-BUR-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369092,https://www.airlines-manager.com/network/showflight/58034913991,https://www.airlines-manager.com/aircraft/show/122598448,11:00,19:44,272,"501,190$","459,236$","$1,688.37","$52,584.27"
ORD - BUR,58042065466,O-SNA-BUR-6,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369092,https://www.airlines-manager.com/network/showflight/58042065466,https://www.airlines-manager.com/aircraft/show/120993787,13:00,21:44,272,"501,190$","459,236$","$1,688.37","$52,584.27"
ORD - BUR,58048703743,O-SNA-BUR-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369092,https://www.airlines-manager.com/network/showflight/58048703743,https://www.airlines-manager.com/aircraft/show/122598446,17:30,2:14,272,"501,190$","459,236$","$1,688.37","$52,584.27"
ORD - BUR,58051861562,O-SNA-BUR-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369092,https://www.airlines-manager.com/network/showflight/58051861562,https://www.airlines-manager.com/aircraft/show/122598447,18:30,3:14,272,"501,190$","459,236$","$1,688.37","$52,584.27"
ORD - BWI,58017973371,O-BWI-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202040,https://www.airlines-manager.com/network/showflight/58017973371,https://www.airlines-manager.com/aircraft/show/122278393,1:15,5:44,320,"282,844$","233,250$",$728.91,"$52,026.02"
ORD - BWI,58024780631,O-BWI-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202040,https://www.airlines-manager.com/network/showflight/58024780631,https://www.airlines-manager.com/aircraft/show/122278394,5:30,9:59,320,"282,844$","233,250$",$728.91,"$52,026.02"
ORD - BWI,58031343123,O-BWI-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202040,https://www.airlines-manager.com/network/showflight/58031343123,https://www.airlines-manager.com/aircraft/show/122278395,8:30,12:59,320,"282,844$","233,250$",$728.91,"$52,026.02"
ORD - BWI,58045346132,O-BWI-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202040,https://www.airlines-manager.com/network/showflight/58045346132,https://www.airlines-manager.com/aircraft/show/122278396,14:45,19:14,320,"282,844$","233,250$",$728.91,"$52,026.02"
ORD - BWI,58057474936,O-BWI-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202040,https://www.airlines-manager.com/network/showflight/58057474936,https://www.airlines-manager.com/aircraft/show/122278392,22:00,2:29,320,"282,844$","233,250$",$728.91,"$52,026.02"
ORD - CHS,58021655913,O-OKC-ORF-5,ERJ-175,https://www.airlines-manager.com/network/showline/51776641,https://www.airlines-manager.com/network/showflight/58021655913,https://www.airlines-manager.com/aircraft/show/123133602,4:30,9:29,112,"153,484$","128,383$","$1,146.28","$25,762.47"
ORD - CHS,58031343108,O-OKC-ORF-4,A321-200,https://www.airlines-manager.com/network/showline/51776641,https://www.airlines-manager.com/network/showflight/58031343108,https://www.airlines-manager.com/aircraft/show/123757725,8:15,13:14,310,"322,908$","283,285$",$913.82,"$56,846.49"
ORD - CHS,58042065633,O-OKC-ORF-3,A321-200,https://www.airlines-manager.com/network/showline/51776641,https://www.airlines-manager.com/network/showflight/58042065633,https://www.airlines-manager.com/aircraft/show/123757726,13:30,18:29,310,"322,908$","283,285$",$913.82,"$56,846.49"
ORD - CHS,58054747798,O-OKC-ORF-2,A321-200,https://www.airlines-manager.com/network/showline/51776641,https://www.airlines-manager.com/network/showflight/58054747798,https://www.airlines-manager.com/aircraft/show/123757727,19:30,0:29,310,"322,908$","283,285$",$913.82,"$56,846.49"
ORD - CHS,58059513401,O-OKC-ORF-1,A321-200,https://www.airlines-manager.com/network/showline/51776641,https://www.airlines-manager.com/network/showflight/58059513401,https://www.airlines-manager.com/aircraft/show/123757728,23:15,4:14,310,"322,908$","283,285$",$913.82,"$56,846.49"
ORD - CLE,58017973447,O-BWI-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202033,https://www.airlines-manager.com/network/showflight/58017973447,https://www.airlines-manager.com/aircraft/show/122278396,1:30,4:44,320,"169,071$","129,280$",$404.00,"$39,983.51"
ORD - CLE,58031343152,O-BWI-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202033,https://www.airlines-manager.com/network/showflight/58031343152,https://www.airlines-manager.com/aircraft/show/122278392,8:45,11:59,320,"169,071$","129,280$",$404.00,"$39,983.51"
ORD - CLE,58038353945,O-BWI-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202033,https://www.airlines-manager.com/network/showflight/58038353945,https://www.airlines-manager.com/aircraft/show/122278393,12:45,15:59,320,"169,071$","129,280$",$404.00,"$39,983.51"
ORD - CLE,58048703694,O-BWI-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202033,https://www.airlines-manager.com/network/showflight/58048703694,https://www.airlines-manager.com/aircraft/show/122278394,17:00,20:14,320,"169,071$","129,280$",$404.00,"$39,983.51"
ORD - CLE,58054747853,O-BWI-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202033,https://www.airlines-manager.com/network/showflight/58054747853,https://www.airlines-manager.com/aircraft/show/122278395,20:00,23:14,320,"169,071$","129,280$",$404.00,"$39,983.51"
ORD - CLT,58017973058,O-YEG-YUL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202027,https://www.airlines-manager.com/network/showflight/58017973058,https://www.airlines-manager.com/aircraft/show/122278401,0:00,4:29,320,"278,986$","224,633$",$701.98,"$50,104.01"
ORD - CLT,58017973059,O-YEG-YUL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202027,https://www.airlines-manager.com/network/showflight/58017973059,https://www.airlines-manager.com/aircraft/show/122278397,3:45,8:14,320,"278,986$","224,633$",$701.98,"$50,104.01"
ORD - CLT,58031343096,O-YEG-YUL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202027,https://www.airlines-manager.com/network/showflight/58031343096,https://www.airlines-manager.com/aircraft/show/122278398,8:15,12:44,320,"278,986$","224,633$",$701.98,"$50,104.01"
ORD - CLT,58038353948,O-YEG-YUL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202027,https://www.airlines-manager.com/network/showflight/58038353948,https://www.airlines-manager.com/aircraft/show/122278399,12:45,17:14,320,"278,986$","224,633$",$701.98,"$50,104.01"
ORD - CLT,58048703630,O-YEG-YUL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202027,https://www.airlines-manager.com/network/showflight/58048703630,https://www.airlines-manager.com/aircraft/show/122278400,16:30,20:59,320,"278,986$","224,633$",$701.98,"$50,104.01"
ORD - CLT,58059513425,O-SJC-BOS,ERJ-175,https://www.airlines-manager.com/network/showline/51202027,https://www.airlines-manager.com/network/showflight/58059513425,https://www.airlines-manager.com/aircraft/show/122320232,23:30,3:59,102,"123,883$","95,283$",$934.15,"$21,252.71"
ORD - CMH,58017973689,O-MSY-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/51427542,https://www.airlines-manager.com/network/showflight/58017973689,https://www.airlines-manager.com/aircraft/show/122805427,3:45,6:59,320,"157,444$","117,823$",$368.20,"$36,440.10"
ORD - CMH,58034913822,O-MSY-RDU-5,A319-100,https://www.airlines-manager.com/network/showline/51427542,https://www.airlines-manager.com/network/showflight/58034913822,https://www.airlines-manager.com/aircraft/show/122771597,9:45,12:59,198,"119,092$","92,208$",$465.70,"$28,517.94"
ORD - CMH,58042065690,O-MSY-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/51427542,https://www.airlines-manager.com/network/showflight/58042065690,https://www.airlines-manager.com/aircraft/show/122390305,14:00,17:14,320,"157,444$","117,823$",$368.20,"$36,440.10"
ORD - CMH,58051861547,O-MSY-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/51427542,https://www.airlines-manager.com/network/showflight/58051861547,https://www.airlines-manager.com/aircraft/show/122805425,18:15,21:29,320,"157,444$","117,823$",$368.20,"$36,440.10"
ORD - CMH,58059513353,O-MSY-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/51427542,https://www.airlines-manager.com/network/showflight/58059513353,https://www.airlines-manager.com/aircraft/show/122805426,23:00,2:14,320,"157,444$","117,823$",$368.20,"$36,440.10"
ORD - CUN,58017973602,O-LAS-PHX-1,737-900ER,https://www.airlines-manager.com/network/showline/50984856,https://www.airlines-manager.com/network/showflight/58017973602,https://www.airlines-manager.com/aircraft/show/121383380,2:45,10:29,320,"494,858$","431,882$","$1,349.63","$55,846.81"
ORD - CUN,58024780727,O-LAS-PHX-6 B,A319-100,https://www.airlines-manager.com/network/showline/50984856,https://www.airlines-manager.com/network/showflight/58024780727,https://www.airlines-manager.com/aircraft/show/121383409,6:45,14:29,198,"367,693$","323,393$","$1,633.30","$41,818.06"
ORD - CUN,58034914063,O-LAS-PHX-3,737-900ER,https://www.airlines-manager.com/network/showline/50984856,https://www.airlines-manager.com/network/showflight/58034914063,https://www.airlines-manager.com/aircraft/show/121383378,11:00,18:44,320,"494,858$","431,882$","$1,349.63","$55,846.81"
ORD - CUN,58042065544,O-LAS-PHX-5,737-900ER,https://www.airlines-manager.com/network/showline/50984856,https://www.airlines-manager.com/network/showflight/58042065544,https://www.airlines-manager.com/aircraft/show/121383376,13:00,20:44,320,"494,858$","431,882$","$1,349.63","$55,846.81"
ORD - CUN,58051861610,O-LAS-PHX-2,737-900ER,https://www.airlines-manager.com/network/showline/50984856,https://www.airlines-manager.com/network/showflight/58051861610,https://www.airlines-manager.com/aircraft/show/121383379,18:45,2:29,320,"494,858$","431,882$","$1,349.63","$55,846.81"
ORD - CUN,58054747950,O-LAS-PHX-4,737-900ER,https://www.airlines-manager.com/network/showline/50984856,https://www.airlines-manager.com/network/showflight/58054747950,https://www.airlines-manager.com/aircraft/show/121383377,20:45,4:29,294,"459,484$","397,775$","$1,352.98","$51,436.42"
ORD - CVG,58024780630,O-BWI-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202038,https://www.airlines-manager.com/network/showflight/58024780630,https://www.airlines-manager.com/aircraft/show/122278392,5:30,8:44,320,"137,876$","96,497$",$301.55,"$29,844.43"
ORD - CVG,58031343153,O-BWI-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202038,https://www.airlines-manager.com/network/showflight/58031343153,https://www.airlines-manager.com/aircraft/show/122278393,8:45,11:59,320,"137,876$","96,497$",$301.55,"$29,844.43"
ORD - CVG,58042065638,O-BWI-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202038,https://www.airlines-manager.com/network/showflight/58042065638,https://www.airlines-manager.com/aircraft/show/122278394,13:45,16:59,320,"137,876$","96,497$",$301.55,"$29,844.43"
ORD - CVG,58048703653,O-BWI-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202038,https://www.airlines-manager.com/network/showflight/58048703653,https://www.airlines-manager.com/aircraft/show/122278395,16:45,19:59,320,"137,876$","96,497$",$301.55,"$29,844.43"
ORD - CVG,58057474972,O-BWI-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202038,https://www.airlines-manager.com/network/showflight/58057474972,https://www.airlines-manager.com/aircraft/show/122278396,22:15,1:29,320,"137,876$","96,497$",$301.55,"$29,844.43"
ORD - DEN,58031343202,O-YVR-GDL-1,757-300,https://www.airlines-manager.com/network/showline/50984812,https://www.airlines-manager.com/network/showflight/58031343202,https://www.airlines-manager.com/aircraft/show/121383385,9:30,14:59,400,"453,524$","375,130$",$937.83,"$68,412.77"
ORD - DEN,58034914021,O-YVR-GDL-4,757-300,https://www.airlines-manager.com/network/showline/50984812,https://www.airlines-manager.com/network/showflight/58034914021,https://www.airlines-manager.com/aircraft/show/121383382,11:00,16:29,400,"453,524$","375,130$",$937.83,"$68,412.77"
ORD - DEN,58042065501,O-YVR-GDL-5,757-300,https://www.airlines-manager.com/network/showline/50984812,https://www.airlines-manager.com/network/showflight/58042065501,https://www.airlines-manager.com/aircraft/show/121383381,13:00,18:29,400,"453,524$","375,130$",$937.83,"$68,412.77"
ORD - DEN,58054747811,O-YVR-GDL-2,757-300,https://www.airlines-manager.com/network/showline/50984812,https://www.airlines-manager.com/network/showflight/58054747811,https://www.airlines-manager.com/aircraft/show/121383384,19:45,1:14,400,"453,524$","375,130$",$937.83,"$68,412.77"
ORD - DEN,58057474907,O-YVR-GDL-3,757-300,https://www.airlines-manager.com/network/showline/50984812,https://www.airlines-manager.com/network/showflight/58057474907,https://www.airlines-manager.com/aircraft/show/121383383,21:45,3:14,400,"453,524$","375,130$",$937.83,"$68,412.77"
ORD - DFW,58031343090,O-OAK-SMF-3,A321neo,https://www.airlines-manager.com/network/showline/51097509,https://www.airlines-manager.com/network/showflight/58031343090,https://www.airlines-manager.com/aircraft/show/121813394,8:15,13:29,338,"366,044$","307,135$",$908.68,"$58,688.22"
ORD - DFW,58034914011,O-OAK-SMF-2,A321neo,https://www.airlines-manager.com/network/showline/51097509,https://www.airlines-manager.com/network/showflight/58034914011,https://www.airlines-manager.com/aircraft/show/121813395,11:00,16:14,338,"366,044$","307,135$",$908.68,"$58,688.22"
ORD - DFW,58042065484,O-OAK-SMF-5,A321neo,https://www.airlines-manager.com/network/showline/51097509,https://www.airlines-manager.com/network/showflight/58042065484,https://www.airlines-manager.com/aircraft/show/121813392,13:00,18:14,338,"366,044$","307,135$",$908.68,"$58,688.22"
ORD - DFW,58054747884,O-OAK-SMF-1,A321neo,https://www.airlines-manager.com/network/showline/51097509,https://www.airlines-manager.com/network/showflight/58054747884,https://www.airlines-manager.com/aircraft/show/121813396,20:15,1:29,338,"366,044$","307,135$",$908.68,"$58,688.22"
ORD - DFW,58057474961,O-OAK-SMF-4,A321neo,https://www.airlines-manager.com/network/showline/51097509,https://www.airlines-manager.com/network/showflight/58057474961,https://www.airlines-manager.com/aircraft/show/121813393,22:15,3:29,338,"366,044$","307,135$",$908.68,"$58,688.22"
ORD - DTW,58021655917,O-SJD-FLL-1,A321neo,https://www.airlines-manager.com/network/showline/51097518,https://www.airlines-manager.com/network/showflight/58021655917,https://www.airlines-manager.com/aircraft/show/121813386,4:45,7:44,338,"143,894$","104,421$",$308.94,"$35,001.45"
ORD - DTW,58034914006,O-SJD-FLL-5,A321neo,https://www.airlines-manager.com/network/showline/51097518,https://www.airlines-manager.com/network/showflight/58034914006,https://www.airlines-manager.com/aircraft/show/121813382,11:00,13:59,338,"143,894$","104,421$",$308.94,"$35,001.45"
ORD - DTW,58042065648,O-SJD-FLL-4,A321neo,https://www.airlines-manager.com/network/showline/51097518,https://www.airlines-manager.com/network/showflight/58042065648,https://www.airlines-manager.com/aircraft/show/121813383,14:00,16:59,338,"143,894$","104,421$",$308.94,"$35,001.45"
ORD - DTW,58048703767,O-SJD-FLL-2,A321neo,https://www.airlines-manager.com/network/showline/51097518,https://www.airlines-manager.com/network/showflight/58048703767,https://www.airlines-manager.com/aircraft/show/121813385,17:45,20:44,338,"143,894$","104,421$",$308.94,"$35,001.45"
ORD - DTW,58054747807,O-SJD-FLL-3,A321neo,https://www.airlines-manager.com/network/showline/51097518,https://www.airlines-manager.com/network/showflight/58054747807,https://www.airlines-manager.com/aircraft/show/121813384,19:45,22:44,338,"143,894$","104,421$",$308.94,"$35,001.45"
ORD - ELP,58017973529,O-GEG-ABQ-1,737-900ER,https://www.airlines-manager.com/network/showline/51552832,https://www.airlines-manager.com/network/showflight/58017973529,https://www.airlines-manager.com/aircraft/show/123133563,2:00,8:59,320,"433,495$","377,379$","$1,179.31","$54,039.95"
ORD - ELP,58038353830,O-GEG-ABQ-3,737-900ER,https://www.airlines-manager.com/network/showline/51552832,https://www.airlines-manager.com/network/showflight/58038353830,https://www.airlines-manager.com/aircraft/show/123133561,11:30,18:29,320,"433,495$","377,379$","$1,179.31","$54,039.95"
ORD - ELP,58042065781,O-GEG-ABQ-5,A319-100,https://www.airlines-manager.com/network/showline/51552832,https://www.airlines-manager.com/network/showflight/58042065781,https://www.airlines-manager.com/aircraft/show/123232505,14:30,21:29,198,"327,588$","288,202$","$1,455.57","$41,269.98"
ORD - ELP,58051861506,O-GEG-ABQ-2,737-900ER,https://www.airlines-manager.com/network/showline/51552832,https://www.airlines-manager.com/network/showflight/58051861506,https://www.airlines-manager.com/aircraft/show/123133562,18:00,0:59,320,"433,495$","377,379$","$1,179.31","$54,039.95"
ORD - ELP,58051861507,O-GEG-ABQ-4,737-900ER,https://www.airlines-manager.com/network/showline/51552832,https://www.airlines-manager.com/network/showflight/58051861507,https://www.airlines-manager.com/aircraft/show/123133560,19:00,1:59,320,"433,495$","377,379$","$1,179.31","$54,039.95"
ORD - EUG,58017973552,O-EUG-BDL-2,737-900ER,https://www.airlines-manager.com/network/showline/51552952,https://www.airlines-manager.com/network/showflight/58017973552,https://www.airlines-manager.com/aircraft/show/123133558,2:15,11:14,320,"568,293$","506,021$","$1,581.32","$56,328.87"
ORD - EUG,58021655847,O-EUG-BDL-5,ERJ-175,https://www.airlines-manager.com/network/showline/51552952,https://www.airlines-manager.com/network/showflight/58021655847,https://www.airlines-manager.com/aircraft/show/123133603,4:00,12:59,112,"267,104$","230,795$","$2,060.67","$25,691.47"
ORD - EUG,58042065554,O-EUG-BDL-1,737-900ER,https://www.airlines-manager.com/network/showline/51552952,https://www.airlines-manager.com/network/showflight/58042065554,https://www.airlines-manager.com/aircraft/show/123133559,13:00,21:59,320,"568,293$","506,021$","$1,581.32","$56,328.87"
ORD - EUG,58051861612,O-EUG-BDL-4,737-900ER,https://www.airlines-manager.com/network/showline/51552952,https://www.airlines-manager.com/network/showflight/58051861612,https://www.airlines-manager.com/aircraft/show/123133556,18:45,3:44,320,"568,293$","506,021$","$1,581.32","$56,328.87"
ORD - EUG,58059513322,O-EUG-BDL-3,737-900ER,https://www.airlines-manager.com/network/showline/51552952,https://www.airlines-manager.com/network/showflight/58059513322,https://www.airlines-manager.com/aircraft/show/123133557,22:45,7:44,320,"568,293$","506,021$","$1,581.32","$56,328.87"
ORD - FAI,58017973565,O-FAI-MFR-5,A319-100,https://www.airlines-manager.com/network/showline/51552942,https://www.airlines-manager.com/network/showflight/58017973565,https://www.airlines-manager.com/aircraft/show/123232506,2:15,15:14,198,"586,576$","527,359$","$2,663.43","$40,618.15"
ORD - FAI,58038353838,O-FAI-MFR-1,A321-200,https://www.airlines-manager.com/network/showline/51552942,https://www.airlines-manager.com/network/showflight/58038353838,https://www.airlines-manager.com/aircraft/show/123232513,11:30,0:29,310,"783,964$","710,093$","$2,290.62","$54,692.66"
ORD - FAI,58042065632,O-FAI-MFR-2,A321-200,https://www.airlines-manager.com/network/showline/51552942,https://www.airlines-manager.com/network/showflight/58042065632,https://www.airlines-manager.com/aircraft/show/123232512,13:30,2:29,310,"783,964$","710,093$","$2,290.62","$54,692.66"
ORD - FAI,58054747929,O-FAI-MFR-3,A321-200,https://www.airlines-manager.com/network/showline/51552942,https://www.airlines-manager.com/network/showflight/58054747929,https://www.airlines-manager.com/aircraft/show/123232511,20:30,9:29,310,"783,964$","710,093$","$2,290.62","$54,692.66"
ORD - FAI,58059513296,O-FAI-MFR-4,A321-200,https://www.airlines-manager.com/network/showline/51552942,https://www.airlines-manager.com/network/showflight/58059513296,https://www.airlines-manager.com/aircraft/show/123032787,22:30,11:29,310,"783,964$","710,093$","$2,290.62","$54,692.66"
ORD - FAT,58017973374,O-FAT-AUS-4,737-900ER,https://www.airlines-manager.com/network/showline/51427539,https://www.airlines-manager.com/network/showflight/58017973374,https://www.airlines-manager.com/aircraft/show/122805428,1:15,9:59,320,"554,465$","492,169$","$1,538.03","$56,355.23"
ORD - FAT,58034914071,O-FAT-AUS-1,737-900ER,https://www.airlines-manager.com/network/showline/51427539,https://www.airlines-manager.com/network/showflight/58034914071,https://www.airlines-manager.com/aircraft/show/122805431,11:00,19:44,320,"554,465$","492,169$","$1,538.03","$56,355.23"
ORD - FAT,58042065553,O-FAT-AUS-2,737-900ER,https://www.airlines-manager.com/network/showline/51427539,https://www.airlines-manager.com/network/showflight/58042065553,https://www.airlines-manager.com/aircraft/show/122805430,13:00,21:44,320,"554,465$","492,169$","$1,538.03","$56,355.23"
ORD - FAT,58051861557,O-FAT-AUS-5,A319-100,https://www.airlines-manager.com/network/showline/51427539,https://www.airlines-manager.com/network/showflight/58051861557,https://www.airlines-manager.com/aircraft/show/122771598,18:15,2:59,198,"417,886$","373,594$","$1,886.84","$42,777.94"
ORD - FAT,58059513394,O-FAT-AUS-3,737-900ER,https://www.airlines-manager.com/network/showline/51427539,https://www.airlines-manager.com/network/showflight/58059513394,https://www.airlines-manager.com/aircraft/show/122805429,23:15,7:59,320,"554,465$","492,169$","$1,538.03","$56,355.23"
ORD - FLL,58021655854,O-SJD-FLL-5,A321neo,https://www.airlines-manager.com/network/showline/51097513,https://www.airlines-manager.com/network/showflight/58021655854,https://www.airlines-manager.com/aircraft/show/121813382,4:15,10:59,338,"461,039$","411,813$","$1,218.38","$61,160.35"
ORD - FLL,58027885450,O-SJD-FLL-4,A321neo,https://www.airlines-manager.com/network/showline/51097513,https://www.airlines-manager.com/network/showflight/58027885450,https://www.airlines-manager.com/aircraft/show/121813383,7:00,13:44,338,"461,039$","411,813$","$1,218.38","$61,160.35"
ORD - FLL,58034914007,O-SJD-FLL-2,A321neo,https://www.airlines-manager.com/network/showline/51097513,https://www.airlines-manager.com/network/showflight/58034914007,https://www.airlines-manager.com/aircraft/show/121813385,11:00,17:44,338,"461,039$","411,813$","$1,218.38","$61,160.35"
ORD - FLL,58042065480,O-SJD-FLL-3,A321neo,https://www.airlines-manager.com/network/showline/51097513,https://www.airlines-manager.com/network/showflight/58042065480,https://www.airlines-manager.com/aircraft/show/121813384,13:00,19:44,338,"461,039$","411,813$","$1,218.38","$61,160.35"
ORD - FLL,58057474928,O-SJD-FLL-1,A321neo,https://www.airlines-manager.com/network/showline/51097513,https://www.airlines-manager.com/network/showflight/58057474928,https://www.airlines-manager.com/aircraft/show/121813386,22:00,4:44,338,"461,039$","411,813$","$1,218.38","$61,160.35"
ORD - GDL,58017973358,O-YVR-GDL-4,757-300,https://www.airlines-manager.com/network/showline/50984857,https://www.airlines-manager.com/network/showflight/58017973358,https://www.airlines-manager.com/aircraft/show/121383382,1:15,9:59,400,"718,146$","644,547$","$1,611.37","$73,803.09"
ORD - GDL,58017973359,O-YVR-GDL-5,757-300,https://www.airlines-manager.com/network/showline/50984857,https://www.airlines-manager.com/network/showflight/58017973359,https://www.airlines-manager.com/aircraft/show/121383381,3:15,11:59,400,"718,146$","644,547$","$1,611.37","$73,803.09"
ORD - GDL,58034914022,O-YVR-GDL-2,757-300,https://www.airlines-manager.com/network/showline/50984857,https://www.airlines-manager.com/network/showflight/58034914022,https://www.airlines-manager.com/aircraft/show/121383384,11:00,19:44,400,"718,146$","644,547$","$1,611.37","$73,803.09"
ORD - GDL,58042065502,O-YVR-GDL-3,757-300,https://www.airlines-manager.com/network/showline/50984857,https://www.airlines-manager.com/network/showflight/58042065502,https://www.airlines-manager.com/aircraft/show/121383383,13:00,21:44,400,"718,146$","644,547$","$1,611.37","$73,803.09"
ORD - GDL,58060881879,O-YVR-GDL-1,757-300,https://www.airlines-manager.com/network/showline/50984857,https://www.airlines-manager.com/network/showflight/58060881879,https://www.airlines-manager.com/aircraft/show/121383385,23:45,8:29,330,"610,779$","541,115$","$1,639.74","$61,959.73"
ORD - GEG,58017973250,O-GEG-ABQ-2,737-900ER,https://www.airlines-manager.com/network/showline/51552836,https://www.airlines-manager.com/network/showflight/58017973250,https://www.airlines-manager.com/aircraft/show/123133562,1:00,8:59,320,"500,847$","442,165$","$1,381.77","$55,386.01"
ORD - GEG,58021655906,O-GEG-ABQ-4,737-900ER,https://www.airlines-manager.com/network/showline/51552836,https://www.airlines-manager.com/network/showflight/58021655906,https://www.airlines-manager.com/aircraft/show/123133560,4:30,12:29,320,"500,847$","442,165$","$1,381.77","$55,386.01"
ORD - GEG,58038353833,O-GEG-ABQ-1,737-900ER,https://www.airlines-manager.com/network/showline/51552836,https://www.airlines-manager.com/network/showflight/58038353833,https://www.airlines-manager.com/aircraft/show/123133563,11:30,19:29,320,"500,847$","442,165$","$1,381.77","$55,386.01"
ORD - GEG,58051861580,O-GEG-ABQ-3,737-900ER,https://www.airlines-manager.com/network/showline/51552836,https://www.airlines-manager.com/network/showflight/58051861580,https://www.airlines-manager.com/aircraft/show/123133561,18:30,2:29,320,"500,847$","442,165$","$1,381.77","$55,386.01"
ORD - GEG,58057474898,O-GEG-ABQ-5,A319-100,https://www.airlines-manager.com/network/showline/51552836,https://www.airlines-manager.com/network/showflight/58057474898,https://www.airlines-manager.com/aircraft/show/123232505,21:30,5:29,198,"378,287$","336,777$","$1,700.89","$42,185.01"
ORD - GRR,58017973467,O-RDM-MHT-5,ERJ-175,https://www.airlines-manager.com/network/showline/51776645,https://www.airlines-manager.com/network/showflight/58017973467,https://www.airlines-manager.com/aircraft/show/123757767,1:30,4:14,112,"40,589$","22,507$",$200.96,"$8,234.27"
ORD - GRR,58021655970,O-RDM-MHT-4,A321-200,https://www.airlines-manager.com/network/showline/51776645,https://www.airlines-manager.com/network/showflight/58021655970,https://www.airlines-manager.com/aircraft/show/123757729,5:15,7:59,310,"94,761$","65,020$",$209.74,"$23,787.80"
ORD - GRR,58031343198,O-RDM-MHT-3,A321-200,https://www.airlines-manager.com/network/showline/51776645,https://www.airlines-manager.com/network/showflight/58031343198,https://www.airlines-manager.com/aircraft/show/123757730,9:15,11:59,310,"94,761$","65,020$",$209.74,"$23,787.80"
ORD - GRR,58042065617,O-RDM-MHT-2,A321-200,https://www.airlines-manager.com/network/showline/51776645,https://www.airlines-manager.com/network/showflight/58042065617,https://www.airlines-manager.com/aircraft/show/123757731,13:15,15:59,310,"94,761$","65,020$",$209.74,"$23,787.80"
ORD - GRR,58048703660,O-RDM-MHT-1,A321-200,https://www.airlines-manager.com/network/showline/51776645,https://www.airlines-manager.com/network/showflight/58048703660,https://www.airlines-manager.com/aircraft/show/123757732,16:45,19:29,310,"94,761$","65,020$",$209.74,"$23,787.80"
ORD - IAD,58021655905,O-YEG-YUL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202029,https://www.airlines-manager.com/network/showflight/58021655905,https://www.airlines-manager.com/aircraft/show/122278401,4:30,8:59,320,"276,074$","225,496$",$704.68,"$50,296.51"
ORD - IAD,58031343095,O-YEG-YUL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202029,https://www.airlines-manager.com/network/showflight/58031343095,https://www.airlines-manager.com/aircraft/show/122278397,8:15,12:44,320,"276,074$","225,496$",$704.68,"$50,296.51"
ORD - IAD,58038353947,O-YEG-YUL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202029,https://www.airlines-manager.com/network/showflight/58038353947,https://www.airlines-manager.com/aircraft/show/122278398,12:45,17:14,320,"276,074$","225,496$",$704.68,"$50,296.51"
ORD - IAD,58048703729,O-YEG-YUL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202029,https://www.airlines-manager.com/network/showflight/58048703729,https://www.airlines-manager.com/aircraft/show/122278399,17:15,21:44,320,"276,074$","225,496$",$704.68,"$50,296.51"
ORD - IAD,58057474830,O-YEG-YUL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202029,https://www.airlines-manager.com/network/showflight/58057474830,https://www.airlines-manager.com/aircraft/show/122278400,21:00,1:29,320,"276,074$","225,496$",$704.68,"$50,296.51"
ORD - IND,58021655928,O-BWI-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202035,https://www.airlines-manager.com/network/showflight/58021655928,https://www.airlines-manager.com/aircraft/show/122278396,4:45,7:29,320,"100,552$","62,181$",$194.32,"$22,749.15"
ORD - IND,58038353944,O-BWI-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202035,https://www.airlines-manager.com/network/showflight/58038353944,https://www.airlines-manager.com/aircraft/show/122278392,12:45,15:29,320,"100,552$","62,181$",$194.32,"$22,749.15"
ORD - IND,58045346309,O-BWI-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202035,https://www.airlines-manager.com/network/showflight/58045346309,https://www.airlines-manager.com/aircraft/show/122278393,16:00,18:44,320,"100,552$","62,181$",$194.32,"$22,749.15"
ORD - IND,58054747894,O-BWI-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202035,https://www.airlines-manager.com/network/showflight/58054747894,https://www.airlines-manager.com/aircraft/show/122278394,20:15,22:59,320,"100,552$","62,181$",$194.32,"$22,749.15"
ORD - IND,58059513393,O-BWI-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202035,https://www.airlines-manager.com/network/showflight/58059513393,https://www.airlines-manager.com/aircraft/show/122278395,23:15,1:59,305,"97,653$","59,353$",$194.60,"$21,714.51"
ORD - JAC,58021655890,O-SNA-BUR-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369093,https://www.airlines-manager.com/network/showflight/58021655890,https://www.airlines-manager.com/aircraft/show/122598448,4:30,10:59,272,"371,377$","337,014$","$1,239.02","$51,981.59"
ORD - JAC,58034913990,O-SNA-BUR-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369093,https://www.airlines-manager.com/network/showflight/58034913990,https://www.airlines-manager.com/aircraft/show/122598446,11:00,17:29,272,"371,377$","337,014$","$1,239.02","$51,981.59"
ORD - JAC,58038353849,O-SNA-BUR-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369093,https://www.airlines-manager.com/network/showflight/58038353849,https://www.airlines-manager.com/aircraft/show/122598447,12:00,18:29,272,"371,377$","337,014$","$1,239.02","$51,981.59"
ORD - JAC,58054747805,O-SNA-BUR-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369093,https://www.airlines-manager.com/network/showflight/58054747805,https://www.airlines-manager.com/aircraft/show/122598444,19:45,2:14,272,"371,377$","337,014$","$1,239.02","$51,981.59"
ORD - JAC,58057474901,O-SNA-BUR-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369093,https://www.airlines-manager.com/network/showflight/58057474901,https://www.airlines-manager.com/aircraft/show/122598445,21:45,4:14,272,"371,377$","337,014$","$1,239.02","$51,981.59"
ORD - JAX,58017973667,O-JAX-BFF-2,A321neo,https://www.airlines-manager.com/network/showline/51552833,https://www.airlines-manager.com/network/showflight/58017973667,https://www.airlines-manager.com/aircraft/show/123232509,3:30,8:59,338,"373,724$","332,180$",$982.78,"$60,579.94"
ORD - JAX,58038353844,O-JAX-BFF-1,A321neo,https://www.airlines-manager.com/network/showline/51552833,https://www.airlines-manager.com/network/showflight/58038353844,https://www.airlines-manager.com/aircraft/show/123232510,11:45,17:14,338,"373,724$","332,180$",$982.78,"$60,579.94"
ORD - JAX,58048703605,O-JAX-BFF-4,A321neo,https://www.airlines-manager.com/network/showline/51552833,https://www.airlines-manager.com/network/showflight/58048703605,https://www.airlines-manager.com/aircraft/show/121813377,16:15,21:44,338,"373,724$","332,180$",$982.78,"$60,579.94"
ORD - JAX,58051861593,O-JAX-BFF-5,A319-100,https://www.airlines-manager.com/network/showline/51552833,https://www.airlines-manager.com/network/showflight/58051861593,https://www.airlines-manager.com/aircraft/show/123232507,18:30,23:59,198,"261,534$","227,396$","$1,148.46","$41,470.40"
ORD - JAX,58057474962,O-JAX-BFF-3,A321neo,https://www.airlines-manager.com/network/showline/51552833,https://www.airlines-manager.com/network/showflight/58057474962,https://www.airlines-manager.com/aircraft/show/123232508,22:15,3:44,338,"373,724$","332,180$",$982.78,"$60,579.94"
ORD - JFK,58027885508,O-SJD-FLL-1,A321neo,https://www.airlines-manager.com/network/showline/51097514,https://www.airlines-manager.com/network/showflight/58027885508,https://www.airlines-manager.com/aircraft/show/121813386,7:45,12:44,338,"349,136$","292,869$",$866.48,"$58,769.70"
ORD - JFK,58042065754,O-SJD-FLL-5,A321neo,https://www.airlines-manager.com/network/showline/51097514,https://www.airlines-manager.com/network/showflight/58042065754,https://www.airlines-manager.com/aircraft/show/121813382,14:15,19:14,338,"349,136$","292,869$",$866.48,"$58,769.70"
ORD - JFK,58048703669,O-SJD-FLL-4,A321neo,https://www.airlines-manager.com/network/showline/51097514,https://www.airlines-manager.com/network/showflight/58048703669,https://www.airlines-manager.com/aircraft/show/121813383,17:00,21:59,338,"349,136$","292,869$",$866.48,"$58,769.70"
ORD - JFK,58054747938,O-SJD-FLL-2,A321neo,https://www.airlines-manager.com/network/showline/51097514,https://www.airlines-manager.com/network/showflight/58054747938,https://www.airlines-manager.com/aircraft/show/121813385,20:45,1:44,338,"349,136$","292,869$",$866.48,"$58,769.70"
ORD - JFK,58059513304,O-SJD-FLL-3,A321neo,https://www.airlines-manager.com/network/showline/51097514,https://www.airlines-manager.com/network/showflight/58059513304,https://www.airlines-manager.com/aircraft/show/121813384,22:45,3:44,338,"349,136$","292,869$",$866.48,"$58,769.70"
ORD - JNU,58017973229,O-JNU-2,A321neo,https://www.airlines-manager.com/network/showline/51776308,https://www.airlines-manager.com/network/showflight/58017973229,https://www.airlines-manager.com/aircraft/show/123757738,1:00,11:59,338,"752,127$","691,009$","$2,044.41","$62,914.32"
ORD - JNU,58038353858,O-JNU-1,A321neo,https://www.airlines-manager.com/network/showline/51776308,https://www.airlines-manager.com/network/showflight/58038353858,https://www.airlines-manager.com/aircraft/show/123757737,12:00,22:59,338,"752,127$","691,009$","$2,044.41","$62,914.32"
ORD - JNU,58042065650,O-JNU-2,A321neo,https://www.airlines-manager.com/network/showline/51776308,https://www.airlines-manager.com/network/showflight/58042065650,https://www.airlines-manager.com/aircraft/show/123757738,14:00,0:59,338,"752,127$","691,009$","$2,044.41","$62,914.32"
ORD - JNU,58059513341,O-JNU-1,A321neo,https://www.airlines-manager.com/network/showline/51776308,https://www.airlines-manager.com/network/showflight/58059513341,https://www.airlines-manager.com/aircraft/show/123757737,23:00,9:59,338,"752,127$","691,009$","$2,044.41","$62,914.32"
ORD - LAS,58017973578,O-LAS-PHX-2,737-900ER,https://www.airlines-manager.com/network/showline/50984816,https://www.airlines-manager.com/network/showflight/58017973578,https://www.airlines-manager.com/aircraft/show/121383379,2:30,10:29,320,"510,022$","430,593$","$1,345.60","$53,936.49"
ORD - LAS,58021655904,O-LAS-PHX-4,737-900ER,https://www.airlines-manager.com/network/showline/50984816,https://www.airlines-manager.com/network/showflight/58021655904,https://www.airlines-manager.com/aircraft/show/121383377,4:30,12:29,320,"510,022$","430,593$","$1,345.60","$53,936.49"
ORD - LAS,58034914065,O-LAS-PHX-1,737-900ER,https://www.airlines-manager.com/network/showline/50984816,https://www.airlines-manager.com/network/showflight/58034914065,https://www.airlines-manager.com/aircraft/show/121383380,11:00,18:59,320,"510,022$","430,593$","$1,345.60","$53,936.49"
ORD - LAS,58045346219,O-LAS-PHX-6 B,A319-100,https://www.airlines-manager.com/network/showline/50984816,https://www.airlines-manager.com/network/showflight/58045346219,https://www.airlines-manager.com/aircraft/show/121383409,15:00,22:59,198,"384,665$","329,295$","$1,663.11","$41,247.81"
ORD - LAS,58051861609,O-LAS-PHX-3,737-900ER,https://www.airlines-manager.com/network/showline/50984816,https://www.airlines-manager.com/network/showflight/58051861609,https://www.airlines-manager.com/aircraft/show/121383378,18:45,2:44,320,"510,022$","430,593$","$1,345.60","$53,936.49"
ORD - LAS,58054747949,O-LAS-PHX-5,737-900ER,https://www.airlines-manager.com/network/showline/50984816,https://www.airlines-manager.com/network/showflight/58054747949,https://www.airlines-manager.com/aircraft/show/121383376,20:45,4:44,320,"510,022$","430,593$","$1,345.60","$53,936.49"
ORD - LAX,58017973410,O-LAX-SEA-2,757-300,https://www.airlines-manager.com/network/showline/50984815,https://www.airlines-manager.com/network/showflight/58017973410,https://www.airlines-manager.com/aircraft/show/121383389,1:30,10:14,400,"734,364$","641,084$","$1,602.71","$73,406.56"
ORD - LAX,58017973411,O-LAX-SEA-4,757-300,https://www.airlines-manager.com/network/showline/50984815,https://www.airlines-manager.com/network/showflight/58017973411,https://www.airlines-manager.com/aircraft/show/121383387,3:30,12:14,400,"734,364$","641,084$","$1,602.71","$73,406.56"
ORD - LAX,58045346161,O-LAX-SEA-1,757-300,https://www.airlines-manager.com/network/showline/50984815,https://www.airlines-manager.com/network/showflight/58045346161,https://www.airlines-manager.com/aircraft/show/121383390,15:00,23:44,400,"734,364$","641,084$","$1,602.71","$73,406.56"
ORD - LAX,58048703679,O-LAX-SEA-3,757-300,https://www.airlines-manager.com/network/showline/50984815,https://www.airlines-manager.com/network/showflight/58048703679,https://www.airlines-manager.com/aircraft/show/121383388,17:00,1:44,400,"734,364$","641,084$","$1,602.71","$73,406.56"
ORD - LAX,58051861640,O-LAX-SEA-5,757-300,https://www.airlines-manager.com/network/showline/50984815,https://www.airlines-manager.com/network/showflight/58051861640,https://www.airlines-manager.com/aircraft/show/121383386,19:00,3:44,400,"734,364$","641,084$","$1,602.71","$73,406.56"
ORD - LGB,58017973129,O-RNO-LGB-1,737-900ER,https://www.airlines-manager.com/network/showline/51202005,https://www.airlines-manager.com/network/showflight/58017973129,https://www.airlines-manager.com/aircraft/show/122278406,0:15,8:59,320,"554,757$","491,337$","$1,535.43","$56,259.96"
ORD - LGB,58017973130,O-RNO-LGB-2,737-900ER,https://www.airlines-manager.com/network/showline/51202005,https://www.airlines-manager.com/network/showflight/58017973130,https://www.airlines-manager.com/aircraft/show/122278405,2:15,10:59,320,"554,757$","491,337$","$1,535.43","$56,259.96"
ORD - LGB,58042065546,O-RNO-LGB-5,737-900ER,https://www.airlines-manager.com/network/showline/51202005,https://www.airlines-manager.com/network/showflight/58042065546,https://www.airlines-manager.com/aircraft/show/122278402,13:00,21:44,320,"554,757$","491,337$","$1,535.43","$56,259.96"
ORD - LGB,58045346261,O-RNO-LGB-3,737-900ER,https://www.airlines-manager.com/network/showline/51202005,https://www.airlines-manager.com/network/showflight/58045346261,https://www.airlines-manager.com/aircraft/show/122278404,15:45,0:29,320,"554,757$","491,337$","$1,535.43","$56,259.96"
ORD - LGB,58048703777,O-RNO-LGB-4,737-900ER,https://www.airlines-manager.com/network/showline/51202005,https://www.airlines-manager.com/network/showflight/58048703777,https://www.airlines-manager.com/aircraft/show/122278403,17:45,2:29,320,"554,757$","491,337$","$1,535.43","$56,259.96"
ORD - MCI,58031343197,O-PSP-MEM-1,A321-200,https://www.airlines-manager.com/network/showline/51427554,https://www.airlines-manager.com/network/showflight/58031343197,https://www.airlines-manager.com/aircraft/show/122771608,9:15,12:59,310,"198,340$","161,909$",$522.29,"$43,368.48"
ORD - MCI,58042065630,O-PSP-MEM-4,A321-200,https://www.airlines-manager.com/network/showline/51427554,https://www.airlines-manager.com/network/showflight/58042065630,https://www.airlines-manager.com/aircraft/show/122771605,13:30,17:14,310,"198,340$","161,909$",$522.29,"$43,368.48"
ORD - MCI,58045346214,O-PSP-MEM-3,A321-200,https://www.airlines-manager.com/network/showline/51427554,https://www.airlines-manager.com/network/showflight/58045346214,https://www.airlines-manager.com/aircraft/show/122771606,15:00,18:44,310,"198,340$","161,909$",$522.29,"$43,368.48"
ORD - MCI,58048703641,O-PSP-MEM-5,A321-200,https://www.airlines-manager.com/network/showline/51427554,https://www.airlines-manager.com/network/showflight/58048703641,https://www.airlines-manager.com/aircraft/show/122771604,16:30,20:14,310,"198,340$","161,909$",$522.29,"$43,368.48"
ORD - MCI,58059513334,O-PSP-MEM-2,A321-200,https://www.airlines-manager.com/network/showline/51427554,https://www.airlines-manager.com/network/showflight/58059513334,https://www.airlines-manager.com/aircraft/show/122771607,22:45,2:29,310,"198,340$","161,909$",$522.29,"$43,368.48"
ORD - MCO,58031343092,O-LAX-SEA-1,757-300,https://www.airlines-manager.com/network/showline/50984818,https://www.airlines-manager.com/network/showflight/58031343092,https://www.airlines-manager.com/aircraft/show/121383390,8:15,14:14,400,"486,278$","419,311$","$1,048.28","$70,079.83"
ORD - MCO,58034914023,O-LAX-SEA-3,757-300,https://www.airlines-manager.com/network/showline/50984818,https://www.airlines-manager.com/network/showflight/58034914023,https://www.airlines-manager.com/aircraft/show/121383388,11:00,16:59,400,"486,278$","419,311$","$1,048.28","$70,079.83"
ORD - MCO,58042065503,O-LAX-SEA-5,757-300,https://www.airlines-manager.com/network/showline/50984818,https://www.airlines-manager.com/network/showflight/58042065503,https://www.airlines-manager.com/aircraft/show/121383386,13:00,18:59,400,"486,278$","419,311$","$1,048.28","$70,079.83"
ORD - MCO,58054747775,O-LAX-SEA-2,757-300,https://www.airlines-manager.com/network/showline/50984818,https://www.airlines-manager.com/network/showflight/58054747775,https://www.airlines-manager.com/aircraft/show/121383389,19:30,1:29,400,"486,278$","419,311$","$1,048.28","$70,079.83"
ORD - MCO,58057474875,O-LAX-SEA-4,757-300,https://www.airlines-manager.com/network/showline/50984818,https://www.airlines-manager.com/network/showflight/58057474875,https://www.airlines-manager.com/aircraft/show/121383387,21:30,3:29,368,"463,265$","397,133$","$1,079.17","$66,373.20"
ORD - MEM,58021655969,O-PSP-MEM-1,A321-200,https://www.airlines-manager.com/network/showline/51427555,https://www.airlines-manager.com/network/showflight/58021655969,https://www.airlines-manager.com/aircraft/show/122771608,5:15,9:14,310,"228,935$","190,728$",$615.25,"$47,881.51"
ORD - MEM,58031343210,O-PSP-MEM-4,A321-200,https://www.airlines-manager.com/network/showline/51427555,https://www.airlines-manager.com/network/showflight/58031343210,https://www.airlines-manager.com/aircraft/show/122771605,9:30,13:29,310,"228,935$","190,728$",$615.25,"$47,881.51"
ORD - MEM,58034914102,O-PSP-MEM-3,A321-200,https://www.airlines-manager.com/network/showline/51427555,https://www.airlines-manager.com/network/showflight/58034914102,https://www.airlines-manager.com/aircraft/show/122771606,11:00,14:59,310,"228,935$","190,728$",$615.25,"$47,881.51"
ORD - MEM,58038353935,O-PSP-MEM-5,A321-200,https://www.airlines-manager.com/network/showline/51427555,https://www.airlines-manager.com/network/showflight/58038353935,https://www.airlines-manager.com/aircraft/show/122771604,12:30,16:29,310,"228,935$","190,728$",$615.25,"$47,881.51"
ORD - MEM,58051861629,O-PSP-MEM-2,A321-200,https://www.airlines-manager.com/network/showline/51427555,https://www.airlines-manager.com/network/showflight/58051861629,https://www.airlines-manager.com/aircraft/show/122771607,18:45,22:44,310,"228,935$","190,728$",$615.25,"$47,881.51"
ORD - MEX,58017973620,O-MEX E,787-10,https://www.airlines-manager.com/network/showline/50926864,https://www.airlines-manager.com/network/showflight/58017973620,https://www.airlines-manager.com/aircraft/show/121207125,3:00,10:59,648,"1,066,967$","966,855$","$1,492.06","$121,109.19"
ORD - MEX,58034914015,O-MEX E,787-10,https://www.airlines-manager.com/network/showline/50926864,https://www.airlines-manager.com/network/showflight/58034914015,https://www.airlines-manager.com/aircraft/show/121207125,11:00,18:59,648,"1,066,967$","966,855$","$1,492.06","$121,109.19"
ORD - MEX,58051861637,O-MEX E,787-10,https://www.airlines-manager.com/network/showline/50926864,https://www.airlines-manager.com/network/showflight/58051861637,https://www.airlines-manager.com/aircraft/show/121207125,19:00,2:59,648,"1,066,967$","966,855$","$1,492.06","$121,109.19"
ORD - MFE,58021655889,O-RDM-MHT-5,ERJ-175,https://www.airlines-manager.com/network/showline/51776653,https://www.airlines-manager.com/network/showflight/58021655889,https://www.airlines-manager.com/aircraft/show/123757767,4:15,11:14,112,"203,802$","173,896$","$1,552.64","$24,901.58"
ORD - MFE,58027885546,O-RDM-MHT-4,A321-200,https://www.airlines-manager.com/network/showline/51776653,https://www.airlines-manager.com/network/showflight/58027885546,https://www.airlines-manager.com/aircraft/show/123757729,8:00,14:59,310,"433,322$","387,084$","$1,248.66","$55,429.69"
ORD - MFE,58038353910,O-RDM-MHT-3,A321-200,https://www.airlines-manager.com/network/showline/51776653,https://www.airlines-manager.com/network/showflight/58038353910,https://www.airlines-manager.com/aircraft/show/123757730,12:00,18:59,310,"433,322$","387,084$","$1,248.66","$55,429.69"
ORD - MFE,58045346323,O-RDM-MHT-2,A321-200,https://www.airlines-manager.com/network/showline/51776653,https://www.airlines-manager.com/network/showflight/58045346323,https://www.airlines-manager.com/aircraft/show/123757731,16:00,22:59,310,"433,322$","387,084$","$1,248.66","$55,429.69"
ORD - MFE,58054747799,O-RDM-MHT-1,A321-200,https://www.airlines-manager.com/network/showline/51776653,https://www.airlines-manager.com/network/showflight/58054747799,https://www.airlines-manager.com/aircraft/show/123757732,19:30,2:29,310,"433,322$","387,084$","$1,248.66","$55,429.69"
ORD - MFR,58017973185,O-FAI-MFR-1,A321-200,https://www.airlines-manager.com/network/showline/51552943,https://www.airlines-manager.com/network/showflight/58017973185,https://www.airlines-manager.com/aircraft/show/123232513,0:30,9:29,310,"565,278$","509,400$","$1,643.23","$56,705.01"
ORD - MFR,58017973186,O-FAI-MFR-2,A321-200,https://www.airlines-manager.com/network/showline/51552943,https://www.airlines-manager.com/network/showflight/58017973186,https://www.airlines-manager.com/aircraft/show/123232512,2:30,11:29,310,"565,278$","509,400$","$1,643.23","$56,705.01"
ORD - MFR,58038353837,O-FAI-MFR-3,A321-200,https://www.airlines-manager.com/network/showline/51552943,https://www.airlines-manager.com/network/showflight/58038353837,https://www.airlines-manager.com/aircraft/show/123232511,11:30,20:29,310,"565,278$","509,400$","$1,643.23","$56,705.01"
ORD - MFR,58042065631,O-FAI-MFR-4,A321-200,https://www.airlines-manager.com/network/showline/51552943,https://www.airlines-manager.com/network/showflight/58042065631,https://www.airlines-manager.com/aircraft/show/123032787,13:30,22:29,310,"565,278$","509,400$","$1,643.23","$56,705.01"
ORD - MFR,58048703741,O-FAI-MFR-5,A319-100,https://www.airlines-manager.com/network/showline/51552943,https://www.airlines-manager.com/network/showflight/58048703741,https://www.airlines-manager.com/aircraft/show/123232506,17:15,2:14,198,"425,611$","380,831$","$1,923.39","$42,393.06"
ORD - MHT,58017973696,O-RDM-MHT-3,A321-200,https://www.airlines-manager.com/network/showline/51776651,https://www.airlines-manager.com/network/showflight/58017973696,https://www.airlines-manager.com/aircraft/show/123757730,3:45,9:14,310,"344,485$","303,227$",$978.15,"$55,299.76"
ORD - MHT,58027885518,O-RDM-MHT-2,A321-200,https://www.airlines-manager.com/network/showline/51776651,https://www.airlines-manager.com/network/showflight/58027885518,https://www.airlines-manager.com/aircraft/show/123757731,7:45,13:14,310,"344,485$","303,227$",$978.15,"$55,299.76"
ORD - MHT,58034914117,O-RDM-MHT-1,A321-200,https://www.airlines-manager.com/network/showline/51776651,https://www.airlines-manager.com/network/showflight/58034914117,https://www.airlines-manager.com/aircraft/show/123757732,11:15,16:44,310,"344,485$","303,227$",$978.15,"$55,299.76"
ORD - MHT,58054747880,O-RDM-MHT-5,ERJ-175,https://www.airlines-manager.com/network/showline/51776651,https://www.airlines-manager.com/network/showflight/58054747880,https://www.airlines-manager.com/aircraft/show/123757767,20:00,1:29,112,"163,120$","136,898$","$1,222.30","$24,966.20"
ORD - MHT,58060881898,O-RDM-MHT-4,A321-200,https://www.airlines-manager.com/network/showline/51776651,https://www.airlines-manager.com/network/showflight/58060881898,https://www.airlines-manager.com/aircraft/show/123757729,23:45,5:14,310,"344,485$","303,227$",$978.15,"$55,299.76"
ORD - MKE,58017973448,O-YEG-YUL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202032,https://www.airlines-manager.com/network/showflight/58017973448,https://www.airlines-manager.com/aircraft/show/122278400,1:30,3:59,320,"77,521$","42,051$",$131.41,"$16,933.29"
ORD - MKE,58031343173,O-YEG-YUL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202032,https://www.airlines-manager.com/network/showflight/58031343173,https://www.airlines-manager.com/aircraft/show/122278401,9:00,11:29,320,"77,521$","42,051$",$131.41,"$16,933.29"
ORD - MKE,58038353946,O-YEG-YUL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202032,https://www.airlines-manager.com/network/showflight/58038353946,https://www.airlines-manager.com/aircraft/show/122278397,12:45,15:14,320,"77,521$","42,051$",$131.41,"$16,933.29"
ORD - MKE,58048703728,O-YEG-YUL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202032,https://www.airlines-manager.com/network/showflight/58048703728,https://www.airlines-manager.com/aircraft/show/122278398,17:15,19:44,320,"77,521$","42,051$",$131.41,"$16,933.29"
ORD - MKE,58057474918,O-YEG-YUL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202032,https://www.airlines-manager.com/network/showflight/58057474918,https://www.airlines-manager.com/aircraft/show/122278399,21:45,0:14,320,"77,521$","42,051$",$131.41,"$16,933.29"
ORD - MSP,58021655962,O-ATL-YYZ-5,A321neo,https://www.airlines-manager.com/network/showline/51097519,https://www.airlines-manager.com/network/showflight/58021655962,https://www.airlines-manager.com/aircraft/show/115400545,5:15,8:44,338,"192,452$","152,247$",$450.43,"$43,707.27"
ORD - MSP,58034914003,O-ATL-YYZ-4,A321neo,https://www.airlines-manager.com/network/showline/51097519,https://www.airlines-manager.com/network/showflight/58034914003,https://www.airlines-manager.com/aircraft/show/121813378,11:00,14:29,338,"192,452$","152,247$",$450.43,"$43,707.27"
ORD - MSP,58045346124,O-ATL-YYZ-3,A321neo,https://www.airlines-manager.com/network/showline/51097519,https://www.airlines-manager.com/network/showflight/58045346124,https://www.airlines-manager.com/aircraft/show/121813379,14:45,18:14,338,"192,452$","152,247$",$450.43,"$43,707.27"
ORD - MSP,58051861686,O-ATL-YYZ-1,A321neo,https://www.airlines-manager.com/network/showline/51097519,https://www.airlines-manager.com/network/showflight/58051861686,https://www.airlines-manager.com/aircraft/show/121813381,19:15,22:44,338,"192,452$","152,247$",$450.43,"$43,707.27"
ORD - MSP,58057474850,O-ATL-YYZ-2,A321neo,https://www.airlines-manager.com/network/showline/51097519,https://www.airlines-manager.com/network/showflight/58057474850,https://www.airlines-manager.com/aircraft/show/121813380,21:15,0:44,338,"192,452$","152,247$",$450.43,"$43,707.27"
ORD - MSY,58021655830,O-MSY-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/51427544,https://www.airlines-manager.com/network/showflight/58021655830,https://www.airlines-manager.com/aircraft/show/122805425,4:00,9:14,320,"341,742$","292,357$",$913.62,"$55,864.39"
ORD - MSY,58031343154,O-MSY-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/51427544,https://www.airlines-manager.com/network/showflight/58031343154,https://www.airlines-manager.com/aircraft/show/122805426,8:45,13:59,320,"341,742$","292,357$",$913.62,"$55,864.39"
ORD - MSY,58042065762,O-MSY-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/51427544,https://www.airlines-manager.com/network/showflight/58042065762,https://www.airlines-manager.com/aircraft/show/122805427,14:15,19:29,320,"341,742$","292,357$",$913.62,"$55,864.39"
ORD - MSY,58054747834,O-MSY-RDU-5,A319-100,https://www.airlines-manager.com/network/showline/51427544,https://www.airlines-manager.com/network/showflight/58054747834,https://www.airlines-manager.com/aircraft/show/122771597,19:45,1:14,198,"260,466$","226,201$","$1,142.43","$41,252.46"
ORD - MSY,58060881888,O-MSY-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/51427544,https://www.airlines-manager.com/network/showflight/58060881888,https://www.airlines-manager.com/aircraft/show/122390305,23:45,4:59,320,"341,742$","292,357$",$913.62,"$55,864.39"
ORD - MTY,58017973545,O-JAX-BFF-1,A321neo,https://www.airlines-manager.com/network/showline/51552840,https://www.airlines-manager.com/network/showflight/58017973545,https://www.airlines-manager.com/aircraft/show/123232510,2:15,9:29,338,"506,321$","457,703$","$1,354.15","$63,276.91"
ORD - MTY,58031343167,O-JAX-BFF-4,A321neo,https://www.airlines-manager.com/network/showline/51552840,https://www.airlines-manager.com/network/showflight/58031343167,https://www.airlines-manager.com/aircraft/show/121813377,9:00,16:14,338,"506,321$","457,703$","$1,354.15","$63,276.91"
ORD - MTY,58034914121,O-JAX-BFF-5,A319-100,https://www.airlines-manager.com/network/showline/51552840,https://www.airlines-manager.com/network/showflight/58034914121,https://www.airlines-manager.com/aircraft/show/123232507,11:15,18:29,198,"347,370$","307,103$","$1,551.03","$42,456.64"
ORD - MTY,58045346151,O-JAX-BFF-3,A321neo,https://www.airlines-manager.com/network/showline/51552840,https://www.airlines-manager.com/network/showflight/58045346151,https://www.airlines-manager.com/aircraft/show/123232508,15:00,22:14,338,"506,321$","457,703$","$1,354.15","$63,276.91"
ORD - MTY,58054747885,O-JAX-BFF-2,A321neo,https://www.airlines-manager.com/network/showline/51552840,https://www.airlines-manager.com/network/showflight/58054747885,https://www.airlines-manager.com/aircraft/show/123232509,20:15,3:29,338,"506,321$","457,703$","$1,354.15","$63,276.91"
ORD - OAK,58017973355,O-OAK-SMF-2,A321neo,https://www.airlines-manager.com/network/showline/51097516,https://www.airlines-manager.com/network/showflight/58017973355,https://www.airlines-manager.com/aircraft/show/121813395,1:15,10:29,338,"632,876$","575,553$","$1,702.82","$62,334.26"
ORD - OAK,58017973356,O-OAK-SMF-5,A321neo,https://www.airlines-manager.com/network/showline/51097516,https://www.airlines-manager.com/network/showflight/58017973356,https://www.airlines-manager.com/aircraft/show/121813392,3:15,12:29,338,"632,876$","575,553$","$1,702.82","$62,334.26"
ORD - OAK,58034914012,O-OAK-SMF-1,A321neo,https://www.airlines-manager.com/network/showline/51097516,https://www.airlines-manager.com/network/showflight/58034914012,https://www.airlines-manager.com/aircraft/show/121813396,11:00,20:14,338,"632,876$","575,553$","$1,702.82","$62,334.26"
ORD - OAK,58042065485,O-OAK-SMF-4,A321neo,https://www.airlines-manager.com/network/showline/51097516,https://www.airlines-manager.com/network/showflight/58042065485,https://www.airlines-manager.com/aircraft/show/121813393,13:00,22:14,338,"632,876$","575,553$","$1,702.82","$62,334.26"
ORD - OAK,58059513340,O-OAK-SMF-3,A321neo,https://www.airlines-manager.com/network/showline/51097516,https://www.airlines-manager.com/network/showflight/58059513340,https://www.airlines-manager.com/aircraft/show/121813394,23:00,8:14,338,"632,876$","575,553$","$1,702.82","$62,334.26"
ORD - OKC,58017973660,O-OKC-ORF-3,A321-200,https://www.airlines-manager.com/network/showline/51776664,https://www.airlines-manager.com/network/showflight/58017973660,https://www.airlines-manager.com/aircraft/show/123757726,3:15,7:59,310,"308,011$","268,874$",$867.34,"$56,804.37"
ORD - OKC,58034913821,O-OKC-ORF-2,A321-200,https://www.airlines-manager.com/network/showline/51776664,https://www.airlines-manager.com/network/showflight/58034913821,https://www.airlines-manager.com/aircraft/show/123757727,9:45,14:29,310,"308,011$","268,874$",$867.34,"$56,804.37"
ORD - OKC,58042065634,O-OKC-ORF-1,A321-200,https://www.airlines-manager.com/network/showline/51776664,https://www.airlines-manager.com/network/showflight/58042065634,https://www.airlines-manager.com/aircraft/show/123757728,13:30,18:14,310,"308,011$","268,874$",$867.34,"$56,804.37"
ORD - OKC,58051861634,O-OKC-ORF-5,ERJ-175,https://www.airlines-manager.com/network/showline/51776664,https://www.airlines-manager.com/network/showflight/58051861634,https://www.airlines-manager.com/aircraft/show/123133602,18:45,23:29,112,"146,540$","121,850$","$1,087.95","$25,742.96"
ORD - OKC,58057474947,O-OKC-ORF-4,A321-200,https://www.airlines-manager.com/network/showline/51776664,https://www.airlines-manager.com/network/showflight/58057474947,https://www.airlines-manager.com/aircraft/show/123757725,22:00,2:44,310,"308,011$","268,874$",$867.34,"$56,804.37"
ORD - OMA,58017973187,O-OKC-ORF-2,A321-200,https://www.airlines-manager.com/network/showline/51776643,https://www.airlines-manager.com/network/showflight/58017973187,https://www.airlines-manager.com/aircraft/show/123757727,0:30,4:14,310,"202,856$","168,236$",$542.70,"$45,063.21"
ORD - OMA,58021655882,O-OKC-ORF-1,A321-200,https://www.airlines-manager.com/network/showline/51776643,https://www.airlines-manager.com/network/showflight/58021655882,https://www.airlines-manager.com/aircraft/show/123757728,4:15,7:59,310,"202,856$","168,236$",$542.70,"$45,063.21"
ORD - OMA,58034913953,O-OKC-ORF-5,ERJ-175,https://www.airlines-manager.com/network/showline/51776643,https://www.airlines-manager.com/network/showflight/58034913953,https://www.airlines-manager.com/aircraft/show/123133602,10:00,13:44,112,"93,470$","71,973$",$642.62,"$19,278.48"
ORD - OMA,58042065616,O-OKC-ORF-4,A321-200,https://www.airlines-manager.com/network/showline/51776643,https://www.airlines-manager.com/network/showflight/58042065616,https://www.airlines-manager.com/aircraft/show/123757725,13:15,16:59,310,"202,856$","168,236$",$542.70,"$45,063.21"
ORD - OMA,58051861588,O-OKC-ORF-3,A321-200,https://www.airlines-manager.com/network/showline/51776643,https://www.airlines-manager.com/network/showflight/58051861588,https://www.airlines-manager.com/aircraft/show/123757726,18:30,22:14,310,"202,856$","168,236$",$542.70,"$45,063.21"
ORD - ONT,58017973493,O-SJC-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/51202009,https://www.airlines-manager.com/network/showflight/58017973493,https://www.airlines-manager.com/aircraft/show/122278411,1:45,10:29,320,"551,827$","486,749$","$1,521.09","$55,734.62"
ORD - ONT,58017973494,O-SJC-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/51202009,https://www.airlines-manager.com/network/showflight/58017973494,https://www.airlines-manager.com/aircraft/show/122278410,3:45,12:29,320,"551,827$","486,749$","$1,521.09","$55,734.62"
ORD - ONT,58042065689,O-SJC-ONT-5,737-900ER,https://www.airlines-manager.com/network/showline/51202009,https://www.airlines-manager.com/network/showflight/58042065689,https://www.airlines-manager.com/aircraft/show/122278407,14:00,22:44,320,"551,827$","486,749$","$1,521.09","$55,734.62"
ORD - ONT,58048703631,O-SJC-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/51202009,https://www.airlines-manager.com/network/showflight/58048703631,https://www.airlines-manager.com/aircraft/show/122278409,16:30,1:14,320,"551,827$","486,749$","$1,521.09","$55,734.62"
ORD - ONT,58051861579,O-SJC-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/51202009,https://www.airlines-manager.com/network/showflight/58051861579,https://www.airlines-manager.com/aircraft/show/122278408,18:30,3:14,320,"551,827$","486,749$","$1,521.09","$55,734.62"
ORD - ORF,58017973614,O-OKC-ORF-4,A321-200,https://www.airlines-manager.com/network/showline/51776657,https://www.airlines-manager.com/network/showflight/58017973614,https://www.airlines-manager.com/aircraft/show/123757725,2:45,7:44,310,"314,527$","275,388$",$888.35,"$55,261.81"
ORD - ORF,58031343138,O-OKC-ORF-3,A321-200,https://www.airlines-manager.com/network/showline/51776657,https://www.airlines-manager.com/network/showflight/58031343138,https://www.airlines-manager.com/aircraft/show/123757726,8:30,13:29,310,"314,527$","275,388$",$888.35,"$55,261.81"
ORD - ORF,58042065778,O-OKC-ORF-2,A321-200,https://www.airlines-manager.com/network/showline/51776657,https://www.airlines-manager.com/network/showflight/58042065778,https://www.airlines-manager.com/aircraft/show/123757727,14:30,19:29,310,"314,527$","275,388$",$888.35,"$55,261.81"
ORD - ORF,58051861556,O-OKC-ORF-1,A321-200,https://www.airlines-manager.com/network/showline/51776657,https://www.airlines-manager.com/network/showflight/58051861556,https://www.airlines-manager.com/aircraft/show/123757728,18:15,23:14,310,"314,527$","275,388$",$888.35,"$55,261.81"
ORD - ORF,58059513426,O-OKC-ORF-5,ERJ-175,https://www.airlines-manager.com/network/showline/51776657,https://www.airlines-manager.com/network/showflight/58059513426,https://www.airlines-manager.com/aircraft/show/123133602,23:30,4:29,112,"149,392$","124,660$","$1,113.04","$25,015.38"
ORD - PBI,58017973551,O-MSY-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/51427546,https://www.airlines-manager.com/network/showflight/58017973551,https://www.airlines-manager.com/aircraft/show/122805426,2:15,8:44,320,"410,736$","356,202$","$1,113.13","$54,941.18"
ORD - PBI,58027885463,O-MSY-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/51427546,https://www.airlines-manager.com/network/showflight/58027885463,https://www.airlines-manager.com/aircraft/show/122805427,7:00,13:29,320,"410,736$","356,202$","$1,113.13","$54,941.18"
ORD - PBI,58042065618,O-MSY-RDU-5,A319-100,https://www.airlines-manager.com/network/showline/51427546,https://www.airlines-manager.com/network/showflight/58042065618,https://www.airlines-manager.com/aircraft/show/122771597,13:15,19:44,198,"310,647$","272,458$","$1,376.05","$42,024.37"
ORD - PBI,58048703730,O-MSY-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/51427546,https://www.airlines-manager.com/network/showflight/58048703730,https://www.airlines-manager.com/aircraft/show/122390305,17:15,23:44,320,"410,736$","356,202$","$1,113.13","$54,941.18"
ORD - PBI,58057474885,O-MSY-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/51427546,https://www.airlines-manager.com/network/showflight/58057474885,https://www.airlines-manager.com/aircraft/show/122805425,21:30,3:59,320,"410,736$","356,202$","$1,113.13","$54,941.18"
ORD - PDX,58017973491,O-PDX-SAN-2,737-900ER,https://www.airlines-manager.com/network/showline/50984820,https://www.airlines-manager.com/network/showflight/58017973491,https://www.airlines-manager.com/aircraft/show/121383374,1:45,10:29,320,"557,358$","489,633$","$1,530.10","$56,064.85"
ORD - PDX,58017973492,O-PDX-SAN-4,737-900ER,https://www.airlines-manager.com/network/showline/50984820,https://www.airlines-manager.com/network/showflight/58017973492,https://www.airlines-manager.com/aircraft/show/121383372,3:45,12:29,320,"557,358$","489,633$","$1,530.10","$56,064.85"
ORD - PDX,58042065688,O-PDX-SAN-1,737-900ER,https://www.airlines-manager.com/network/showline/50984820,https://www.airlines-manager.com/network/showflight/58042065688,https://www.airlines-manager.com/aircraft/show/121383375,14:00,22:44,320,"557,358$","489,633$","$1,530.10","$56,064.85"
ORD - PDX,58045346330,O-PDX-SAN-6 B,A319-100,https://www.airlines-manager.com/network/showline/50984820,https://www.airlines-manager.com/network/showflight/58045346330,https://www.airlines-manager.com/aircraft/show/121383410,16:00,0:44,198,"420,196$","372,271$","$1,880.16","$42,626.45"
ORD - PDX,58048703693,O-PDX-SAN-3,737-900ER,https://www.airlines-manager.com/network/showline/50984820,https://www.airlines-manager.com/network/showflight/58048703693,https://www.airlines-manager.com/aircraft/show/121383373,17:00,1:44,320,"557,358$","489,633$","$1,530.10","$56,064.85"
ORD - PDX,58051861665,O-PDX-SAN-5,737-900ER,https://www.airlines-manager.com/network/showline/50984820,https://www.airlines-manager.com/network/showflight/58051861665,https://www.airlines-manager.com/aircraft/show/121383371,19:00,3:44,320,"557,358$","489,633$","$1,530.10","$56,064.85"
ORD - PHL,58031343097,O-RNO-LGB-5,737-900ER,https://www.airlines-manager.com/network/showline/51202010,https://www.airlines-manager.com/network/showflight/58031343097,https://www.airlines-manager.com/aircraft/show/122278402,8:15,12:59,320,"304,048$","250,679$",$783.37,"$52,960.35"
ORD - PHL,58034914066,O-RNO-LGB-3,737-900ER,https://www.airlines-manager.com/network/showline/51202010,https://www.airlines-manager.com/network/showflight/58034914066,https://www.airlines-manager.com/aircraft/show/122278404,11:00,15:44,320,"304,048$","250,679$",$783.37,"$52,960.35"
ORD - PHL,58042065547,O-RNO-LGB-4,737-900ER,https://www.airlines-manager.com/network/showline/51202010,https://www.airlines-manager.com/network/showflight/58042065547,https://www.airlines-manager.com/aircraft/show/122278403,13:00,17:44,320,"304,048$","250,679$",$783.37,"$52,960.35"
ORD - PHL,58051861633,O-SJC-BOS,ERJ-175,https://www.airlines-manager.com/network/showline/51202010,https://www.airlines-manager.com/network/showflight/58051861633,https://www.airlines-manager.com/aircraft/show/122320232,18:45,23:29,102,"135,842$","107,552$","$1,054.43","$22,722.25"
ORD - PHL,58054747786,O-RNO-LGB-1,737-900ER,https://www.airlines-manager.com/network/showline/51202010,https://www.airlines-manager.com/network/showflight/58054747786,https://www.airlines-manager.com/aircraft/show/122278406,19:30,0:14,320,"304,048$","250,679$",$783.37,"$52,960.35"
ORD - PHL,58057474884,O-RNO-LGB-2,737-900ER,https://www.airlines-manager.com/network/showline/51202010,https://www.airlines-manager.com/network/showflight/58057474884,https://www.airlines-manager.com/aircraft/show/122278405,21:30,2:14,320,"304,048$","250,679$",$783.37,"$52,960.35"
ORD - PHX,58017973601,O-LAS-PHX-3,737-900ER,https://www.airlines-manager.com/network/showline/50984819,https://www.airlines-manager.com/network/showflight/58017973601,https://www.airlines-manager.com/aircraft/show/121383378,2:45,10:29,320,"492,818$","420,732$","$1,314.79","$54,405.00"
ORD - PHX,58021655927,O-LAS-PHX-5,737-900ER,https://www.airlines-manager.com/network/showline/50984819,https://www.airlines-manager.com/network/showflight/58021655927,https://www.airlines-manager.com/aircraft/show/121383376,4:45,12:29,320,"492,818$","420,732$","$1,314.79","$54,405.00"
ORD - PHX,58034914064,O-LAS-PHX-2,737-900ER,https://www.airlines-manager.com/network/showline/50984819,https://www.airlines-manager.com/network/showflight/58034914064,https://www.airlines-manager.com/aircraft/show/121383379,11:00,18:44,320,"492,818$","420,732$","$1,314.79","$54,405.00"
ORD - PHX,58042065545,O-LAS-PHX-4,737-900ER,https://www.airlines-manager.com/network/showline/50984819,https://www.airlines-manager.com/network/showflight/58042065545,https://www.airlines-manager.com/aircraft/show/121383377,13:00,20:44,320,"492,818$","420,732$","$1,314.79","$54,405.00"
ORD - PHX,58051861666,O-LAS-PHX-1,737-900ER,https://www.airlines-manager.com/network/showline/50984819,https://www.airlines-manager.com/network/showflight/58051861666,https://www.airlines-manager.com/aircraft/show/121383380,19:00,2:44,320,"492,818$","420,732$","$1,314.79","$54,405.00"
ORD - PHX,58059513379,O-LAS-PHX-6 B,A319-100,https://www.airlines-manager.com/network/showline/50984819,https://www.airlines-manager.com/network/showflight/58059513379,https://www.airlines-manager.com/aircraft/show/121383409,23:00,6:44,198,"372,009$","321,652$","$1,624.51","$41,592.93"
ORD - PIT,58017973617,O-JAX-BFF-4,A321neo,https://www.airlines-manager.com/network/showline/51552834,https://www.airlines-manager.com/network/showflight/58017973617,https://www.airlines-manager.com/aircraft/show/121813377,3:00,6:44,338,"216,156$","180,148$",$532.98,"$48,253.93"
ORD - PIT,58021655972,O-JAX-BFF-5,A319-100,https://www.airlines-manager.com/network/showline/51552834,https://www.airlines-manager.com/network/showflight/58021655972,https://www.airlines-manager.com/aircraft/show/123232507,5:15,8:59,198,"150,536$","121,301$",$612.63,"$32,491.34"
ORD - PIT,58034914110,O-JAX-BFF-3,A321neo,https://www.airlines-manager.com/network/showline/51552834,https://www.airlines-manager.com/network/showflight/58034914110,https://www.airlines-manager.com/aircraft/show/123232508,11:15,14:59,338,"216,156$","180,148$",$532.98,"$48,253.93"
ORD - PIT,58048703623,O-JAX-BFF-2,A321neo,https://www.airlines-manager.com/network/showline/51552834,https://www.airlines-manager.com/network/showflight/58048703623,https://www.airlines-manager.com/aircraft/show/123232509,16:30,20:14,338,"216,156$","180,148$",$532.98,"$48,253.93"
ORD - PIT,58059513274,O-JAX-BFF-1,A321neo,https://www.airlines-manager.com/network/showline/51552834,https://www.airlines-manager.com/network/showflight/58059513274,https://www.airlines-manager.com/aircraft/show/123232510,22:30,2:14,338,"216,156$","180,148$",$532.98,"$48,253.93"
ORD - PSP,58017973587,O-PSP-MEM-2,A321-200,https://www.airlines-manager.com/network/showline/51427556,https://www.airlines-manager.com/network/showflight/58017973587,https://www.airlines-manager.com/aircraft/show/122771607,2:30,10:59,310,"534,197$","479,711$","$1,547.45","$56,547.47"
ORD - PSP,58042065595,O-PSP-MEM-1,A321-200,https://www.airlines-manager.com/network/showline/51427556,https://www.airlines-manager.com/network/showflight/58042065595,https://www.airlines-manager.com/aircraft/show/122771608,13:00,21:29,310,"534,197$","479,711$","$1,547.45","$56,547.47"
ORD - PSP,58048703738,O-PSP-MEM-4,A321-200,https://www.airlines-manager.com/network/showline/51427556,https://www.airlines-manager.com/network/showflight/58048703738,https://www.airlines-manager.com/aircraft/show/122771605,17:15,1:44,310,"534,197$","479,711$","$1,547.45","$56,547.47"
ORD - PSP,58051861628,O-PSP-MEM-3,A321-200,https://www.airlines-manager.com/network/showline/51427556,https://www.airlines-manager.com/network/showflight/58051861628,https://www.airlines-manager.com/aircraft/show/122771606,18:45,3:14,310,"534,197$","479,711$","$1,547.45","$56,547.47"
ORD - PSP,58054747902,O-PSP-MEM-5,A321-200,https://www.airlines-manager.com/network/showline/51427556,https://www.airlines-manager.com/network/showflight/58054747902,https://www.airlines-manager.com/aircraft/show/122771604,20:15,4:44,310,"534,197$","479,711$","$1,547.45","$56,547.47"
ORD - PVD,58017973142,O-YZF-PVD-3,A321-200,https://www.airlines-manager.com/network/showline/51776662,https://www.airlines-manager.com/network/showflight/58017973142,https://www.airlines-manager.com/aircraft/show/123757734,0:15,5:44,310,"347,098$","306,598$",$989.03,"$55,914.53"
ORD - PVD,58017973143,O-YZF-PVD-2,A321-200,https://www.airlines-manager.com/network/showline/51776662,https://www.airlines-manager.com/network/showflight/58017973143,https://www.airlines-manager.com/aircraft/show/123757735,3:30,8:59,310,"347,098$","306,598$",$989.03,"$55,914.53"
ORD - PVD,58034914120,O-YZF-PVD-1,A321-200,https://www.airlines-manager.com/network/showline/51776662,https://www.airlines-manager.com/network/showflight/58034914120,https://www.airlines-manager.com/aircraft/show/123757736,11:15,16:44,310,"347,098$","306,598$",$989.03,"$55,914.53"
ORD - PVD,58048703661,O-YZF-PVD-4,A321-200,https://www.airlines-manager.com/network/showline/51776662,https://www.airlines-manager.com/network/showflight/58048703661,https://www.airlines-manager.com/aircraft/show/123757733,16:45,22:14,310,"347,098$","306,598$",$989.03,"$55,914.53"
ORD - PVD,58054747914,O-YZF-PVD-5,ERJ-175,https://www.airlines-manager.com/network/showline/51776662,https://www.airlines-manager.com/network/showflight/58054747914,https://www.airlines-manager.com/aircraft/show/123757768,20:15,1:44,112,"164,257$","138,479$","$1,236.42","$25,254.53"
ORD - PVR,58017973401,O-YYC-SLC-1,A321neo,https://www.airlines-manager.com/network/showline/51097558,https://www.airlines-manager.com/network/showflight/58017973401,https://www.airlines-manager.com/aircraft/show/121813391,1:30,10:29,338,"619,880$","564,603$","$1,670.42","$62,850.06"
ORD - PVR,58017973402,O-YYC-SLC-4,A321neo,https://www.airlines-manager.com/network/showline/51097558,https://www.airlines-manager.com/network/showflight/58017973402,https://www.airlines-manager.com/aircraft/show/121813388,3:30,12:29,338,"619,880$","564,603$","$1,670.42","$62,850.06"
ORD - PVR,58034914008,O-YYC-SLC-3,A321neo,https://www.airlines-manager.com/network/showline/51097558,https://www.airlines-manager.com/network/showflight/58034914008,https://www.airlines-manager.com/aircraft/show/121813389,11:00,19:59,338,"619,880$","564,603$","$1,670.42","$62,850.06"
ORD - PVR,58042065482,O-YYC-SLC-5,A321neo,https://www.airlines-manager.com/network/showline/51097558,https://www.airlines-manager.com/network/showflight/58042065482,https://www.airlines-manager.com/aircraft/show/121813387,13:00,21:59,338,"619,880$","564,603$","$1,670.42","$62,850.06"
ORD - PVR,58051861491,O-YYC-SLC-2,A321neo,https://www.airlines-manager.com/network/showline/51097558,https://www.airlines-manager.com/network/showflight/58051861491,https://www.airlines-manager.com/aircraft/show/121813390,18:00,2:59,338,"619,880$","564,603$","$1,670.42","$62,850.06"
ORD - RDM,58017973588,O-RDM-MHT-1,A321-200,https://www.airlines-manager.com/network/showline/51776659,https://www.airlines-manager.com/network/showflight/58017973588,https://www.airlines-manager.com/aircraft/show/123757732,2:30,11:14,310,"545,953$","492,803$","$1,589.69","$56,427.82"
ORD - RDM,58034914123,O-RDM-MHT-5,ERJ-175,https://www.airlines-manager.com/network/showline/51776659,https://www.airlines-manager.com/network/showflight/58034914123,https://www.airlines-manager.com/aircraft/show/123757767,11:15,19:59,112,"256,326$","221,516$","$1,977.82","$25,364.43"
ORD - RDM,58045346215,O-RDM-MHT-4,A321-200,https://www.airlines-manager.com/network/showline/51776659,https://www.airlines-manager.com/network/showflight/58045346215,https://www.airlines-manager.com/aircraft/show/123757729,15:00,23:44,310,"545,953$","492,803$","$1,589.69","$56,427.82"
ORD - RDM,58051861679,O-RDM-MHT-3,A321-200,https://www.airlines-manager.com/network/showline/51776659,https://www.airlines-manager.com/network/showflight/58051861679,https://www.airlines-manager.com/aircraft/show/123757730,19:00,3:44,310,"545,953$","492,803$","$1,589.69","$56,427.82"
ORD - RDM,58059513373,O-RDM-MHT-2,A321-200,https://www.airlines-manager.com/network/showline/51776659,https://www.airlines-manager.com/network/showflight/58059513373,https://www.airlines-manager.com/aircraft/show/123757731,23:00,7:44,310,"545,953$","492,803$","$1,589.69","$56,427.82"
ORD - RDU,58017973392,O-MSY-RDU-5,A319-100,https://www.airlines-manager.com/network/showline/51427538,https://www.airlines-manager.com/network/showflight/58017973392,https://www.airlines-manager.com/aircraft/show/122771597,1:15,5:59,198,"227,145$","195,057$",$985.14,"$41,209.23"
ORD - RDU,58021655949,O-MSY-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/51427538,https://www.airlines-manager.com/network/showflight/58021655949,https://www.airlines-manager.com/aircraft/show/122390305,5:00,9:29,320,"296,849$","250,266$",$782.08,"$55,821.41"
ORD - RDU,58031343191,O-MSY-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/51427538,https://www.airlines-manager.com/network/showflight/58031343191,https://www.airlines-manager.com/aircraft/show/122805425,9:15,13:44,320,"296,849$","250,266$",$782.08,"$55,821.41"
ORD - RDU,58045346133,O-MSY-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/51427538,https://www.airlines-manager.com/network/showflight/58045346133,https://www.airlines-manager.com/aircraft/show/122805426,14:45,19:14,320,"296,849$","250,266$",$782.08,"$55,821.41"
ORD - RDU,58054747787,O-MSY-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/51427538,https://www.airlines-manager.com/network/showflight/58054747787,https://www.airlines-manager.com/aircraft/show/122805427,19:30,23:59,320,"296,849$","250,266$",$782.08,"$55,821.41"
ORD - RNO,58017973174,O-RNO-LGB-3,737-900ER,https://www.airlines-manager.com/network/showline/51202011,https://www.airlines-manager.com/network/showflight/58017973174,https://www.airlines-manager.com/aircraft/show/122278404,0:30,8:59,320,"541,593$","478,361$","$1,494.88","$56,388.33"
ORD - RNO,58017973175,O-RNO-LGB-4,737-900ER,https://www.airlines-manager.com/network/showline/51202011,https://www.airlines-manager.com/network/showflight/58017973175,https://www.airlines-manager.com/aircraft/show/122278403,2:30,10:59,320,"541,593$","478,361$","$1,494.88","$56,388.33"
ORD - RNO,58034914067,O-RNO-LGB-1,737-900ER,https://www.airlines-manager.com/network/showline/51202011,https://www.airlines-manager.com/network/showflight/58034914067,https://www.airlines-manager.com/aircraft/show/122278406,11:00,19:29,320,"541,593$","478,361$","$1,494.88","$56,388.33"
ORD - RNO,58042065548,O-RNO-LGB-2,737-900ER,https://www.airlines-manager.com/network/showline/51202011,https://www.airlines-manager.com/network/showflight/58042065548,https://www.airlines-manager.com/aircraft/show/122278405,13:00,21:29,320,"541,593$","478,361$","$1,494.88","$56,388.33"
ORD - RNO,58057474919,O-RNO-LGB-5,737-900ER,https://www.airlines-manager.com/network/showline/51202011,https://www.airlines-manager.com/network/showflight/58057474919,https://www.airlines-manager.com/aircraft/show/122278402,21:45,6:14,320,"541,593$","478,361$","$1,494.88","$56,388.33"
ORD - RSW,58017973528,O-BWI-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202039,https://www.airlines-manager.com/network/showflight/58017973528,https://www.airlines-manager.com/aircraft/show/122278395,2:00,8:29,320,"403,635$","347,958$","$1,087.37","$53,669.61"
ORD - RSW,58027885494,O-BWI-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202039,https://www.airlines-manager.com/network/showflight/58027885494,https://www.airlines-manager.com/aircraft/show/122278396,7:30,13:59,320,"403,635$","347,958$","$1,087.37","$53,669.61"
ORD - RSW,58045346251,O-BWI-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202039,https://www.airlines-manager.com/network/showflight/58045346251,https://www.airlines-manager.com/aircraft/show/122278392,15:30,21:59,320,"403,635$","347,958$","$1,087.37","$53,669.61"
ORD - RSW,58051861611,O-BWI-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202039,https://www.airlines-manager.com/network/showflight/58051861611,https://www.airlines-manager.com/aircraft/show/122278393,18:45,1:14,320,"403,635$","347,958$","$1,087.37","$53,669.61"
ORD - RSW,58059513348,O-BWI-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202039,https://www.airlines-manager.com/network/showflight/58059513348,https://www.airlines-manager.com/aircraft/show/122278394,23:00,5:29,277,"370,472$","316,094$","$1,141.13","$48,754.86"
ORD - SAN,58017973219,O-PDX-SAN-6 B,A319-100,https://www.airlines-manager.com/network/showline/50984821,https://www.airlines-manager.com/network/showflight/58017973219,https://www.airlines-manager.com/aircraft/show/121383410,0:45,9:29,198,"419,974$","372,484$","$1,881.23","$42,650.84"
ORD - SAN,58017973220,O-PDX-SAN-3,737-900ER,https://www.airlines-manager.com/network/showline/50984821,https://www.airlines-manager.com/network/showflight/58017973220,https://www.airlines-manager.com/aircraft/show/121383373,1:45,10:29,320,"557,448$","490,339$","$1,532.31","$56,145.69"
ORD - SAN,58017973221,O-PDX-SAN-5,737-900ER,https://www.airlines-manager.com/network/showline/50984821,https://www.airlines-manager.com/network/showflight/58017973221,https://www.airlines-manager.com/aircraft/show/121383371,3:45,12:29,320,"557,448$","490,339$","$1,532.31","$56,145.69"
ORD - SAN,58034914062,O-PDX-SAN-2,737-900ER,https://www.airlines-manager.com/network/showline/50984821,https://www.airlines-manager.com/network/showflight/58034914062,https://www.airlines-manager.com/aircraft/show/121383374,11:00,19:44,320,"557,448$","490,339$","$1,532.31","$56,145.69"
ORD - SAN,58042065543,O-PDX-SAN-4,737-900ER,https://www.airlines-manager.com/network/showline/50984821,https://www.airlines-manager.com/network/showflight/58042065543,https://www.airlines-manager.com/aircraft/show/121383372,13:00,21:44,320,"557,448$","490,339$","$1,532.31","$56,145.69"
ORD - SAN,58059513319,O-PDX-SAN-1,737-900ER,https://www.airlines-manager.com/network/showline/50984821,https://www.airlines-manager.com/network/showflight/58059513319,https://www.airlines-manager.com/aircraft/show/121383375,22:45,7:29,320,"557,448$","490,339$","$1,532.31","$56,145.69"
ORD - SAT,58017973495,O-FAT-AUS-1,737-900ER,https://www.airlines-manager.com/network/showline/51427547,https://www.airlines-manager.com/network/showflight/58017973495,https://www.airlines-manager.com/aircraft/show/122805431,1:45,7:59,320,"388,994$","337,307$","$1,054.08","$54,113.42"
ORD - SAT,58017973496,O-FAT-AUS-2,737-900ER,https://www.airlines-manager.com/network/showline/51427547,https://www.airlines-manager.com/network/showflight/58017973496,https://www.airlines-manager.com/aircraft/show/122805430,3:45,9:59,320,"388,994$","337,307$","$1,054.08","$54,113.42"
ORD - SAT,58038353915,O-FAT-AUS-5,A319-100,https://www.airlines-manager.com/network/showline/51427547,https://www.airlines-manager.com/network/showflight/58038353915,https://www.airlines-manager.com/aircraft/show/122771598,12:00,18:14,198,"294,555$","258,430$","$1,305.20","$41,459.36"
ORD - SAT,58048703695,O-FAT-AUS-3,737-900ER,https://www.airlines-manager.com/network/showline/51427547,https://www.airlines-manager.com/network/showflight/58048703695,https://www.airlines-manager.com/aircraft/show/122805429,17:00,23:14,320,"388,994$","337,307$","$1,054.08","$54,113.42"
ORD - SAT,58051861668,O-FAT-AUS-4,737-900ER,https://www.airlines-manager.com/network/showline/51427547,https://www.airlines-manager.com/network/showflight/58051861668,https://www.airlines-manager.com/aircraft/show/122805428,19:00,1:14,320,"388,994$","337,307$","$1,054.08","$54,113.42"
ORD - SDF,58017973519,O-YZF-PVD-5,ERJ-175,https://www.airlines-manager.com/network/showline/51776649,https://www.airlines-manager.com/network/showflight/58017973519,https://www.airlines-manager.com/aircraft/show/123757768,1:45,4:59,112,"71,555$","50,815$",$453.71,"$15,715.98"
ORD - SDF,58024780659,O-YZF-PVD-3,A321-200,https://www.airlines-manager.com/network/showline/51776649,https://www.airlines-manager.com/network/showflight/58024780659,https://www.airlines-manager.com/aircraft/show/123757734,5:45,8:59,310,"157,871$","124,137$",$400.44,"$38,392.89"
ORD - SDF,58034914119,O-YZF-PVD-2,A321-200,https://www.airlines-manager.com/network/showline/51776649,https://www.airlines-manager.com/network/showflight/58034914119,https://www.airlines-manager.com/aircraft/show/123757735,11:15,14:29,310,"157,871$","124,137$",$400.44,"$38,392.89"
ORD - SDF,58048703662,O-YZF-PVD-1,A321-200,https://www.airlines-manager.com/network/showline/51776649,https://www.airlines-manager.com/network/showflight/58048703662,https://www.airlines-manager.com/aircraft/show/123757736,16:45,19:59,310,"157,871$","124,137$",$400.44,"$38,392.89"
ORD - SDF,58057474986,O-YZF-PVD-4,A321-200,https://www.airlines-manager.com/network/showline/51776649,https://www.airlines-manager.com/network/showflight/58057474986,https://www.airlines-manager.com/aircraft/show/123757733,22:15,1:29,310,"157,871$","124,137$",$400.44,"$38,392.89"
ORD - SEA,58017973476,O-LAX-SEA-3,757-300,https://www.airlines-manager.com/network/showline/50984822,https://www.airlines-manager.com/network/showflight/58017973476,https://www.airlines-manager.com/aircraft/show/121383388,1:45,10:14,400,"718,707$","637,475$","$1,593.69","$75,144.40"
ORD - SEA,58017973477,O-LAX-SEA-5,757-300,https://www.airlines-manager.com/network/showline/50984822,https://www.airlines-manager.com/network/showflight/58017973477,https://www.airlines-manager.com/aircraft/show/121383386,3:45,12:14,400,"718,707$","637,475$","$1,593.69","$75,144.40"
ORD - SEA,58034914024,O-LAX-SEA-2,757-300,https://www.airlines-manager.com/network/showline/50984822,https://www.airlines-manager.com/network/showflight/58034914024,https://www.airlines-manager.com/aircraft/show/121383389,11:00,19:29,400,"718,707$","637,475$","$1,593.69","$75,144.40"
ORD - SEA,58042065504,O-LAX-SEA-4,757-300,https://www.airlines-manager.com/network/showline/50984822,https://www.airlines-manager.com/network/showflight/58042065504,https://www.airlines-manager.com/aircraft/show/121383387,13:00,21:29,400,"718,707$","637,475$","$1,593.69","$75,144.40"
ORD - SEA,58060881880,O-LAX-SEA-1,757-300,https://www.airlines-manager.com/network/showline/50984822,https://www.airlines-manager.com/network/showflight/58060881880,https://www.airlines-manager.com/aircraft/show/121383390,23:45,8:14,400,"718,707$","637,475$","$1,593.69","$75,144.40"
ORD - SFJ,58038353926,O-SFJ E,787-10,https://www.airlines-manager.com/network/showline/51645279,https://www.airlines-manager.com/network/showflight/58038353926,https://www.airlines-manager.com/aircraft/show/123404392,12:15,22:14,648,"1,297,499$","1,197,830$","$1,848.50","$119,982.97"
ORD - SFJ,58057474964,O-SFJ E,787-10,https://www.airlines-manager.com/network/showline/51645279,https://www.airlines-manager.com/network/showflight/58057474964,https://www.airlines-manager.com/aircraft/show/123404392,22:15,8:14,648,"1,297,499$","1,197,830$","$1,848.50","$119,982.97"
ORD - SJC,58017973372,O-SJC-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/51202007,https://www.airlines-manager.com/network/showflight/58017973372,https://www.airlines-manager.com/aircraft/show/122278409,1:15,10:29,320,"580,147$","512,484$","$1,601.51","$55,503.68"
ORD - SJC,58017973373,O-SJC-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/51202007,https://www.airlines-manager.com/network/showflight/58017973373,https://www.airlines-manager.com/aircraft/show/122278408,3:15,12:29,320,"580,147$","512,484$","$1,601.51","$55,503.68"
ORD - SJC,58021655846,O-SJC-BOS,ERJ-175,https://www.airlines-manager.com/network/showline/51202007,https://www.airlines-manager.com/network/showflight/58021655846,https://www.airlines-manager.com/aircraft/show/122320232,4:00,13:14,102,"255,757$","217,593$","$2,133.26","$23,566.03"
ORD - SJC,58034914069,O-SJC-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/51202007,https://www.airlines-manager.com/network/showflight/58034914069,https://www.airlines-manager.com/aircraft/show/122278411,11:00,20:14,320,"580,147$","512,484$","$1,601.51","$55,503.68"
ORD - SJC,58042065551,O-SJC-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/51202007,https://www.airlines-manager.com/network/showflight/58042065551,https://www.airlines-manager.com/aircraft/show/122278410,13:00,22:14,320,"580,147$","512,484$","$1,601.51","$55,503.68"
ORD - SJC,58059513321,O-SJC-ONT-5,737-900ER,https://www.airlines-manager.com/network/showline/51202007,https://www.airlines-manager.com/network/showflight/58059513321,https://www.airlines-manager.com/aircraft/show/122278407,22:45,7:59,320,"580,147$","512,484$","$1,601.51","$55,503.68"
ORD - SJD,58017973472,O-SJD-FLL-2,A321neo,https://www.airlines-manager.com/network/showline/51097559,https://www.airlines-manager.com/network/showflight/58017973472,https://www.airlines-manager.com/aircraft/show/121813385,1:45,10:44,338,"623,013$","567,939$","$1,680.29","$63,221.41"
ORD - SJD,58017973473,O-SJD-FLL-3,A321neo,https://www.airlines-manager.com/network/showline/51097559,https://www.airlines-manager.com/network/showflight/58017973473,https://www.airlines-manager.com/aircraft/show/121813384,3:45,12:44,338,"623,013$","567,939$","$1,680.29","$63,221.41"
ORD - SJD,58042065481,O-SJD-FLL-1,A321neo,https://www.airlines-manager.com/network/showline/51097559,https://www.airlines-manager.com/network/showflight/58042065481,https://www.airlines-manager.com/aircraft/show/121813386,13:00,21:59,338,"623,013$","567,939$","$1,680.29","$63,221.41"
ORD - SJD,58051861687,O-SJD-FLL-5,A321neo,https://www.airlines-manager.com/network/showline/51097559,https://www.airlines-manager.com/network/showflight/58051861687,https://www.airlines-manager.com/aircraft/show/121813382,19:15,4:14,338,"623,013$","567,939$","$1,680.29","$63,221.41"
ORD - SJD,58057474927,O-SJD-FLL-4,A321neo,https://www.airlines-manager.com/network/showline/51097559,https://www.airlines-manager.com/network/showflight/58057474927,https://www.airlines-manager.com/aircraft/show/121813383,22:00,6:59,338,"623,013$","567,939$","$1,680.29","$63,221.41"
ORD - SJU,58017973193,O-ATL-YYZ-2,A321neo,https://www.airlines-manager.com/network/showline/51097587,https://www.airlines-manager.com/network/showflight/58017973193,https://www.airlines-manager.com/aircraft/show/121813380,0:45,10:44,338,"698,683$","637,914$","$1,887.32","$63,897.90"
ORD - SJU,58034913999,O-ATL-YYZ-5,A321neo,https://www.airlines-manager.com/network/showline/51097587,https://www.airlines-manager.com/network/showflight/58034913999,https://www.airlines-manager.com/aircraft/show/115400545,11:00,20:59,338,"698,683$","637,914$","$1,887.32","$63,897.90"
ORD - SJU,58042065772,O-ATL-YYZ-4,A321neo,https://www.airlines-manager.com/network/showline/51097587,https://www.airlines-manager.com/network/showflight/58042065772,https://www.airlines-manager.com/aircraft/show/121813378,14:30,0:29,338,"698,683$","637,914$","$1,887.32","$63,897.90"
ORD - SJU,58051861537,O-ATL-YYZ-3,A321neo,https://www.airlines-manager.com/network/showline/51097587,https://www.airlines-manager.com/network/showflight/58051861537,https://www.airlines-manager.com/aircraft/show/121813379,18:15,4:14,338,"698,683$","637,914$","$1,887.32","$63,897.90"
ORD - SJU,58059513303,O-ATL-YYZ-1,A321neo,https://www.airlines-manager.com/network/showline/51097587,https://www.airlines-manager.com/network/showflight/58059513303,https://www.airlines-manager.com/aircraft/show/121813381,22:45,8:44,338,"698,683$","637,914$","$1,887.32","$63,897.90"
ORD - SLC,58017973666,O-YYC-SLC-3,A321neo,https://www.airlines-manager.com/network/showline/51097521,https://www.airlines-manager.com/network/showflight/58017973666,https://www.airlines-manager.com/aircraft/show/121813389,3:30,10:29,338,"484,413$","431,505$","$1,276.64","$61,790.69"
ORD - SLC,58024780618,O-YYC-SLC-5,A321neo,https://www.airlines-manager.com/network/showline/51097521,https://www.airlines-manager.com/network/showflight/58024780618,https://www.airlines-manager.com/aircraft/show/121813387,5:30,12:29,338,"484,413$","431,505$","$1,276.64","$61,790.69"
ORD - SLC,58034914009,O-YYC-SLC-2,A321neo,https://www.airlines-manager.com/network/showline/51097521,https://www.airlines-manager.com/network/showflight/58034914009,https://www.airlines-manager.com/aircraft/show/121813390,11:00,17:59,338,"484,413$","431,505$","$1,276.64","$61,790.69"
ORD - SLC,58051861566,O-YYC-SLC-1,A321neo,https://www.airlines-manager.com/network/showline/51097521,https://www.airlines-manager.com/network/showflight/58051861566,https://www.airlines-manager.com/aircraft/show/121813391,18:30,1:29,338,"484,413$","431,505$","$1,276.64","$61,790.69"
ORD - SLC,58054747918,O-YYC-SLC-4,A321neo,https://www.airlines-manager.com/network/showline/51097521,https://www.airlines-manager.com/network/showflight/58054747918,https://www.airlines-manager.com/aircraft/show/121813388,20:30,3:29,338,"484,413$","431,505$","$1,276.64","$61,790.69"
ORD - SMF,58017973403,O-OAK-SMF-1,A321neo,https://www.airlines-manager.com/network/showline/51097520,https://www.airlines-manager.com/network/showflight/58017973403,https://www.airlines-manager.com/aircraft/show/121813396,1:30,10:29,338,"618,472$","563,095$","$1,665.96","$62,682.19"
ORD - SMF,58017973404,O-OAK-SMF-4,A321neo,https://www.airlines-manager.com/network/showline/51097520,https://www.airlines-manager.com/network/showflight/58017973404,https://www.airlines-manager.com/aircraft/show/121813393,3:30,12:29,338,"618,472$","563,095$","$1,665.96","$62,682.19"
ORD - SMF,58042065649,O-OAK-SMF-3,A321neo,https://www.airlines-manager.com/network/showline/51097520,https://www.airlines-manager.com/network/showflight/58042065649,https://www.airlines-manager.com/aircraft/show/121813394,14:00,22:59,338,"618,472$","563,095$","$1,665.96","$62,682.19"
ORD - SMF,58048703606,O-OAK-SMF-2,A321neo,https://www.airlines-manager.com/network/showline/51097520,https://www.airlines-manager.com/network/showflight/58048703606,https://www.airlines-manager.com/aircraft/show/121813395,16:15,1:14,338,"618,472$","563,095$","$1,665.96","$62,682.19"
ORD - SMF,58051861538,O-OAK-SMF-5,A321neo,https://www.airlines-manager.com/network/showline/51097520,https://www.airlines-manager.com/network/showflight/58051861538,https://www.airlines-manager.com/aircraft/show/121813392,18:15,3:14,338,"618,472$","563,095$","$1,665.96","$62,682.19"
ORD - SNA,58017973542,O-SNA-BUR-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/51184362,https://www.airlines-manager.com/network/showflight/58017973542,https://www.airlines-manager.com/aircraft/show/122598446,2:15,10:59,272,"504,659$","462,765$","$1,701.34","$52,988.36"
ORD - SNA,58017973543,O-SNA-BUR-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/51184362,https://www.airlines-manager.com/network/showflight/58017973543,https://www.airlines-manager.com/aircraft/show/122598447,3:15,11:59,272,"504,659$","462,765$","$1,701.34","$52,988.36"
ORD - SNA,58034913989,O-SNA-BUR-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/51184362,https://www.airlines-manager.com/network/showflight/58034913989,https://www.airlines-manager.com/aircraft/show/122598444,11:00,19:44,272,"504,659$","462,765$","$1,701.34","$52,988.36"
ORD - SNA,58042065467,O-SNA-BUR-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/51184362,https://www.airlines-manager.com/network/showflight/58042065467,https://www.airlines-manager.com/aircraft/show/122598445,13:00,21:44,272,"504,659$","462,765$","$1,701.34","$52,988.36"
ORD - SNA,58054747806,O-SNA-BUR-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/51184362,https://www.airlines-manager.com/network/showflight/58054747806,https://www.airlines-manager.com/aircraft/show/122598448,19:45,4:29,272,"504,659$","462,765$","$1,701.34","$52,988.36"
ORD - SNA,58057474900,O-SNA-BUR-6,737-MAX8-200,https://www.airlines-manager.com/network/showline/51184362,https://www.airlines-manager.com/network/showflight/58057474900,https://www.airlines-manager.com/aircraft/show/120993787,21:45,6:29,272,"504,659$","462,765$","$1,701.34","$52,988.36"
ORD - STL,58017973579,O-BWI-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202037,https://www.airlines-manager.com/network/showflight/58017973579,https://www.airlines-manager.com/aircraft/show/122278392,2:30,5:29,320,"135,708$","94,657$",$295.80,"$31,728.60"
ORD - STL,58024780654,O-BWI-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202037,https://www.airlines-manager.com/network/showflight/58024780654,https://www.airlines-manager.com/aircraft/show/122278393,5:45,8:44,320,"135,708$","94,657$",$295.80,"$31,728.60"
ORD - STL,58034913881,O-BWI-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202037,https://www.airlines-manager.com/network/showflight/58034913881,https://www.airlines-manager.com/aircraft/show/122278394,10:00,12:59,320,"135,708$","94,657$",$295.80,"$31,728.60"
ORD - STL,58042065639,O-BWI-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202037,https://www.airlines-manager.com/network/showflight/58042065639,https://www.airlines-manager.com/aircraft/show/122278395,13:45,16:44,320,"135,708$","94,657$",$295.80,"$31,728.60"
ORD - STL,58051861694,O-BWI-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202037,https://www.airlines-manager.com/network/showflight/58051861694,https://www.airlines-manager.com/aircraft/show/122278396,19:15,22:14,320,"135,708$","94,657$",$295.80,"$31,728.60"
ORD - TPA,58027885493,O-PDX-SAN-1,737-900ER,https://www.airlines-manager.com/network/showline/50984824,https://www.airlines-manager.com/network/showflight/58027885493,https://www.airlines-manager.com/aircraft/show/121383375,7:30,13:29,320,"375,820$","319,842$",$999.51,"$53,455.49"
ORD - TPA,58031343211,O-PDX-SAN-6 B,A319-100,https://www.airlines-manager.com/network/showline/50984824,https://www.airlines-manager.com/network/showflight/58031343211,https://www.airlines-manager.com/aircraft/show/121383410,9:30,15:29,198,"284,901$","245,962$","$1,242.23","$41,107.86"
ORD - TPA,58034914061,O-PDX-SAN-3,737-900ER,https://www.airlines-manager.com/network/showline/50984824,https://www.airlines-manager.com/network/showflight/58034914061,https://www.airlines-manager.com/aircraft/show/121383373,11:00,16:59,320,"375,820$","319,842$",$999.51,"$53,455.49"
ORD - TPA,58042065542,O-PDX-SAN-5,737-900ER,https://www.airlines-manager.com/network/showline/50984824,https://www.airlines-manager.com/network/showflight/58042065542,https://www.airlines-manager.com/aircraft/show/121383371,13:00,18:59,320,"375,820$","319,842$",$999.51,"$53,455.49"
ORD - TPA,58054747819,O-PDX-SAN-2,737-900ER,https://www.airlines-manager.com/network/showline/50984824,https://www.airlines-manager.com/network/showflight/58054747819,https://www.airlines-manager.com/aircraft/show/121383374,19:45,1:44,320,"375,820$","319,842$",$999.51,"$53,455.49"
ORD - TPA,58057474917,O-PDX-SAN-4,737-900ER,https://www.airlines-manager.com/network/showline/50984824,https://www.airlines-manager.com/network/showflight/58057474917,https://www.airlines-manager.com/aircraft/show/121383372,21:45,3:44,273,"341,893$","287,197$","$1,052.00","$47,999.50"
ORD - TUS,58017973140,O-ANC-TUS-1,A321-200,https://www.airlines-manager.com/network/showline/51427560,https://www.airlines-manager.com/network/showflight/58017973140,https://www.airlines-manager.com/aircraft/show/122771603,0:15,7:59,310,"484,774$","432,674$","$1,395.72","$55,949.22"
ORD - TUS,58017973141,O-ANC-TUS-2,A321-200,https://www.airlines-manager.com/network/showline/51427560,https://www.airlines-manager.com/network/showflight/58017973141,https://www.airlines-manager.com/aircraft/show/122771602,2:15,9:59,310,"484,774$","432,674$","$1,395.72","$55,949.22"
ORD - TUS,58034914100,O-ANC-TUS-3,A321-200,https://www.airlines-manager.com/network/showline/51427560,https://www.airlines-manager.com/network/showflight/58034914100,https://www.airlines-manager.com/aircraft/show/122771601,11:00,18:44,310,"484,774$","432,674$","$1,395.72","$55,949.22"
ORD - TUS,58042065593,O-ANC-TUS-4,A321-200,https://www.airlines-manager.com/network/showline/51427560,https://www.airlines-manager.com/network/showflight/58042065593,https://www.airlines-manager.com/aircraft/show/122771600,13:00,20:44,310,"484,774$","432,674$","$1,395.72","$55,949.22"
ORD - TUS,58045346213,O-ANC-TUS-5,A321-200,https://www.airlines-manager.com/network/showline/51427560,https://www.airlines-manager.com/network/showflight/58045346213,https://www.airlines-manager.com/aircraft/show/122771599,15:00,22:44,310,"484,774$","432,674$","$1,395.72","$55,949.22"
ORD - YEG,58017973128,O-YEG-YUL-3,737-900ER,https://www.airlines-manager.com/network/showline/51201991,https://www.airlines-manager.com/network/showflight/58017973128,https://www.airlines-manager.com/aircraft/show/122278399,0:15,7:44,320,"484,754$","424,935$","$1,327.92","$56,784.19"
ORD - YEG,58021655829,O-YEG-YUL-2,737-900ER,https://www.airlines-manager.com/network/showline/51201991,https://www.airlines-manager.com/network/showflight/58021655829,https://www.airlines-manager.com/aircraft/show/122278400,4:00,11:29,320,"484,754$","424,935$","$1,327.92","$56,784.19"
ORD - YEG,58038353828,O-YEG-YUL-1,737-900ER,https://www.airlines-manager.com/network/showline/51201991,https://www.airlines-manager.com/network/showflight/58038353828,https://www.airlines-manager.com/aircraft/show/122278401,11:30,18:59,320,"484,754$","424,935$","$1,327.92","$56,784.19"
ORD - YEG,58045346238,O-YEG-YUL-5,737-900ER,https://www.airlines-manager.com/network/showline/51201991,https://www.airlines-manager.com/network/showflight/58045346238,https://www.airlines-manager.com/aircraft/show/122278397,15:15,22:44,320,"484,754$","424,935$","$1,327.92","$56,784.19"
ORD - YEG,58054747820,O-YEG-YUL-4,737-900ER,https://www.airlines-manager.com/network/showline/51201991,https://www.airlines-manager.com/network/showflight/58054747820,https://www.airlines-manager.com/aircraft/show/122278398,19:45,3:14,320,"484,754$","424,935$","$1,327.92","$56,784.19"
ORD - YOW,58027885537,O-EUG-BDL-1,737-900ER,https://www.airlines-manager.com/network/showline/51552961,https://www.airlines-manager.com/network/showflight/58027885537,https://www.airlines-manager.com/aircraft/show/123133559,8:00,12:44,320,"301,038$","255,663$",$798.95,"$54,013.31"
ORD - YOW,58042065691,O-EUG-BDL-4,737-900ER,https://www.airlines-manager.com/network/showline/51552961,https://www.airlines-manager.com/network/showflight/58042065691,https://www.airlines-manager.com/aircraft/show/123133556,14:00,18:44,320,"301,038$","255,663$",$798.95,"$54,013.31"
ORD - YOW,58051861505,O-EUG-BDL-3,737-900ER,https://www.airlines-manager.com/network/showline/51552961,https://www.airlines-manager.com/network/showflight/58051861505,https://www.airlines-manager.com/aircraft/show/123133557,18:00,22:44,320,"301,038$","255,663$",$798.95,"$54,013.31"
ORD - YOW,58057474886,O-EUG-BDL-2,737-900ER,https://www.airlines-manager.com/network/showline/51552961,https://www.airlines-manager.com/network/showflight/58057474886,https://www.airlines-manager.com/aircraft/show/123133558,21:30,2:14,320,"301,038$","255,663$",$798.95,"$54,013.31"
ORD - YOW,58059513383,O-EUG-BDL-5,ERJ-175,https://www.airlines-manager.com/network/showline/51552961,https://www.airlines-manager.com/network/showflight/58059513383,https://www.airlines-manager.com/aircraft/show/123133603,23:00,3:44,112,"142,848$","118,258$","$1,055.88","$24,984.08"
ORD - YUL,58017973653,O-YEG-YUL-4,737-900ER,https://www.airlines-manager.com/network/showline/51201992,https://www.airlines-manager.com/network/showflight/58017973653,https://www.airlines-manager.com/aircraft/show/122278398,3:15,8:14,320,"322,103$","272,133$",$850.42,"$54,608.63"
ORD - YUL,58027885512,O-YEG-YUL-3,737-900ER,https://www.airlines-manager.com/network/showline/51201992,https://www.airlines-manager.com/network/showflight/58027885512,https://www.airlines-manager.com/aircraft/show/122278399,7:45,12:44,320,"322,103$","272,133$",$850.42,"$54,608.63"
ORD - YUL,58038353827,O-YEG-YUL-2,737-900ER,https://www.airlines-manager.com/network/showline/51201992,https://www.airlines-manager.com/network/showflight/58038353827,https://www.airlines-manager.com/aircraft/show/122278400,11:30,16:29,320,"322,103$","272,133$",$850.42,"$54,608.63"
ORD - YUL,58051861667,O-YEG-YUL-1,737-900ER,https://www.airlines-manager.com/network/showline/51201992,https://www.airlines-manager.com/network/showflight/58051861667,https://www.airlines-manager.com/aircraft/show/122278401,19:00,23:59,320,"322,103$","272,133$",$850.42,"$54,608.63"
ORD - YUL,58059513320,O-YEG-YUL-5,737-900ER,https://www.airlines-manager.com/network/showline/51201992,https://www.airlines-manager.com/network/showflight/58059513320,https://www.airlines-manager.com/aircraft/show/122278397,22:45,3:44,320,"322,103$","272,133$",$850.42,"$54,608.63"
ORD - YVR,58017973360,O-YVR-GDL-2,757-300,https://www.airlines-manager.com/network/showline/50984850,https://www.airlines-manager.com/network/showflight/58017973360,https://www.airlines-manager.com/aircraft/show/121383384,1:15,9:59,400,"728,709$","651,879$","$1,629.70","$74,642.63"
ORD - YVR,58017973361,O-YVR-GDL-3,757-300,https://www.airlines-manager.com/network/showline/50984850,https://www.airlines-manager.com/network/showflight/58017973361,https://www.airlines-manager.com/aircraft/show/121383383,3:15,11:59,400,"728,709$","651,879$","$1,629.70","$74,642.63"
ORD - YVR,58045346160,O-YVR-GDL-1,757-300,https://www.airlines-manager.com/network/showline/50984850,https://www.airlines-manager.com/network/showflight/58045346160,https://www.airlines-manager.com/aircraft/show/121383385,15:00,23:44,400,"728,709$","651,879$","$1,629.70","$74,642.63"
ORD - YVR,58048703625,O-YVR-GDL-4,757-300,https://www.airlines-manager.com/network/showline/50984850,https://www.airlines-manager.com/network/showflight/58048703625,https://www.airlines-manager.com/aircraft/show/121383382,16:30,1:14,400,"728,709$","651,879$","$1,629.70","$74,642.63"
ORD - YVR,58051861571,O-YVR-GDL-5,757-300,https://www.airlines-manager.com/network/showline/50984850,https://www.airlines-manager.com/network/showflight/58051861571,https://www.airlines-manager.com/aircraft/show/121383381,18:30,3:14,400,"728,709$","651,879$","$1,629.70","$74,642.63"
ORD - YWG,58017973654,O-EUG-BDL-1,737-900ER,https://www.airlines-manager.com/network/showline/51552960,https://www.airlines-manager.com/network/showflight/58017973654,https://www.airlines-manager.com/aircraft/show/123133559,3:15,7:59,320,"312,025$","265,631$",$830.10,"$56,119.23"
ORD - YWG,58031343174,O-EUG-BDL-4,737-900ER,https://www.airlines-manager.com/network/showline/51552960,https://www.airlines-manager.com/network/showflight/58031343174,https://www.airlines-manager.com/aircraft/show/123133556,9:00,13:44,320,"312,025$","265,631$",$830.10,"$56,119.23"
ORD - YWG,58042065615,O-EUG-BDL-3,737-900ER,https://www.airlines-manager.com/network/showline/51552960,https://www.airlines-manager.com/network/showflight/58042065615,https://www.airlines-manager.com/aircraft/show/123133557,13:15,17:59,320,"312,025$","265,631$",$830.10,"$56,119.23"
ORD - YWG,58048703654,O-EUG-BDL-2,737-900ER,https://www.airlines-manager.com/network/showline/51552960,https://www.airlines-manager.com/network/showflight/58048703654,https://www.airlines-manager.com/aircraft/show/123133558,16:45,21:29,320,"312,025$","265,631$",$830.10,"$56,119.23"
ORD - YWG,58051861560,O-EUG-BDL-5,ERJ-175,https://www.airlines-manager.com/network/showline/51552960,https://www.airlines-manager.com/network/showflight/58051861560,https://www.airlines-manager.com/aircraft/show/123133603,18:15,22:59,112,"147,949$","122,694$","$1,095.48","$25,921.27"
ORD - YYC,58017973618,O-YYC-SLC-2,A321neo,https://www.airlines-manager.com/network/showline/51097547,https://www.airlines-manager.com/network/showflight/58017973618,https://www.airlines-manager.com/aircraft/show/121813390,3:00,10:29,338,"518,520$","465,177$","$1,376.26","$62,161.74"
ORD - YYC,58034914010,O-YYC-SLC-1,A321neo,https://www.airlines-manager.com/network/showline/51097547,https://www.airlines-manager.com/network/showflight/58034914010,https://www.airlines-manager.com/aircraft/show/121813391,11:00,18:29,338,"518,520$","465,177$","$1,376.26","$62,161.74"
ORD - YYC,58042065483,O-YYC-SLC-4,A321neo,https://www.airlines-manager.com/network/showline/51097547,https://www.airlines-manager.com/network/showflight/58042065483,https://www.airlines-manager.com/aircraft/show/121813388,13:00,20:29,338,"518,520$","465,177$","$1,376.26","$62,161.74"
ORD - YYC,58054747839,O-YYC-SLC-3,A321neo,https://www.airlines-manager.com/network/showline/51097547,https://www.airlines-manager.com/network/showflight/58054747839,https://www.airlines-manager.com/aircraft/show/121813389,20:00,3:29,338,"518,520$","465,177$","$1,376.26","$62,161.74"
ORD - YYC,58057474929,O-YYC-SLC-5,A321neo,https://www.airlines-manager.com/network/showline/51097547,https://www.airlines-manager.com/network/showflight/58057474929,https://www.airlines-manager.com/aircraft/show/121813387,22:00,5:29,338,"518,520$","465,177$","$1,376.26","$62,161.74"
ORD - YYZ,58017973399,O-ATL-YYZ-5,A321neo,https://www.airlines-manager.com/network/showline/51097548,https://www.airlines-manager.com/network/showflight/58017973399,https://www.airlines-manager.com/aircraft/show/115400545,1:30,5:14,338,"237,420$","195,123$",$577.29,"$52,265.09"
ORD - YYZ,58021655942,O-ATL-YYZ-4,A321neo,https://www.airlines-manager.com/network/showline/51097548,https://www.airlines-manager.com/network/showflight/58021655942,https://www.airlines-manager.com/aircraft/show/121813378,5:00,8:44,338,"237,420$","195,123$",$577.29,"$52,265.09"
ORD - YYZ,58034914004,O-ATL-YYZ-3,A321neo,https://www.airlines-manager.com/network/showline/51097548,https://www.airlines-manager.com/network/showflight/58034914004,https://www.airlines-manager.com/aircraft/show/121813379,11:00,14:44,338,"237,420$","195,123$",$577.29,"$52,265.09"
ORD - YYZ,58045346245,O-ATL-YYZ-1,A321neo,https://www.airlines-manager.com/network/showline/51097548,https://www.airlines-manager.com/network/showflight/58045346245,https://www.airlines-manager.com/aircraft/show/121813381,15:30,19:14,338,"237,420$","195,123$",$577.29,"$52,265.09"
ORD - YYZ,58048703745,O-ATL-YYZ-2,A321neo,https://www.airlines-manager.com/network/showline/51097548,https://www.airlines-manager.com/network/showflight/58048703745,https://www.airlines-manager.com/aircraft/show/121813380,17:30,21:14,338,"237,420$","195,123$",$577.29,"$52,265.09"
ORD - YZF,58017973073,O-YZF-PVD-1,A321-200,https://www.airlines-manager.com/network/showline/51776678,https://www.airlines-manager.com/network/showflight/58017973073,https://www.airlines-manager.com/aircraft/show/123757736,0:00,8:59,310,"570,872$","515,778$","$1,663.80","$57,414.99"
ORD - YZF,58027885519,O-YZF-PVD-4,A321-200,https://www.airlines-manager.com/network/showline/51776678,https://www.airlines-manager.com/network/showflight/58027885519,https://www.airlines-manager.com/aircraft/show/123757733,7:45,16:44,310,"570,872$","515,778$","$1,663.80","$57,414.99"
ORD - YZF,58034914125,O-YZF-PVD-5,ERJ-175,https://www.airlines-manager.com/network/showline/51776678,https://www.airlines-manager.com/network/showflight/58034914125,https://www.airlines-manager.com/aircraft/show/123757768,11:15,20:14,112,"267,238$","231,073$","$2,063.15","$25,722.41"
ORD - YZF,58045346243,O-YZF-PVD-3,A321-200,https://www.airlines-manager.com/network/showline/51776678,https://www.airlines-manager.com/network/showflight/58045346243,https://www.airlines-manager.com/aircraft/show/123757734,15:15,0:14,310,"570,872$","515,778$","$1,663.80","$57,414.99"
ORD - YZF,58051861589,O-YZF-PVD-2,A321-200,https://www.airlines-manager.com/network/showline/51776678,https://www.airlines-manager.com/network/showflight/58051861589,https://www.airlines-manager.com/aircraft/show/123757735,18:30,3:29,310,"570,872$","515,778$","$1,663.80","$57,414.99"`;
