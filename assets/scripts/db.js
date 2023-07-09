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
		name: 'Chhatrapati Shivaji Maharaj International Airport (BOM)',
		city: 'Mumbai, India 🇮🇳',
		pos: [19.090096216386055, 72.86275505178068],
		hubs: ['ord'],
		tz: 'Asia/Kolkata'
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
		hubs: ['sfo', 'ord'],
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
		hubs: ['sfo', 'ord'],
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
		hubs: ['sfo', 'ord'],
		tz: 'Asia/Hong_Kong'
	},
	{
		name: 'Tokyo Haneda International Airport (HND)',
		city: 'Tokyo, Japan 🇯🇵',
		pos: [35.54933206852969, 139.77980640999556],
		hubs: ['ord'],
		tz: 'Asia/Tokyo'
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
		hubs: ['ewr', 'ord'],
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
EWR - ABQ,58394056581,E-ABQ-AUS-2,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/58394056581,https://www.airlines-manager.com/aircraft/show/90717078,0:45,9:59,310,"$576,658.00","$530,682.00","$1,711.88","$57,474.58"
EWR - ABQ,58405117933,E-ABQ-AUS-5,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/58405117933,https://www.airlines-manager.com/aircraft/show/95950199,2:45,11:59,310,"$576,658.00","$530,682.00","$1,711.88","$57,474.58"
EWR - ABQ,58418603328,E-ABQ-AUS-1,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/58418603328,https://www.airlines-manager.com/aircraft/show/90717079,10:00,19:14,310,"$576,658.00","$530,682.00","$1,711.88","$57,474.58"
EWR - ABQ,58435221220,E-ABQ-AUS-3,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/58435221220,https://www.airlines-manager.com/aircraft/show/90717077,16:45,1:59,310,"$576,658.00","$530,682.00","$1,711.88","$57,474.58"
EWR - ABQ,58435221221,E-ABQ-AUS-4,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/58435221221,https://www.airlines-manager.com/aircraft/show/90717076,17:45,2:59,310,"$576,658.00","$530,682.00","$1,711.88","$57,474.58"
EWR - ALB,58394056396,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/58394056396,https://www.airlines-manager.com/aircraft/show/119220543,0:15,2:59,310,"$97,322.00","$79,589.00",$256.74,"$29,117.93"
EWR - ALB,58408651795,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/58408651795,https://www.airlines-manager.com/aircraft/show/119220542,4:45,7:29,310,"$97,322.00","$79,589.00",$256.74,"$29,117.93"
EWR - ALB,58431664418,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/58431664418,https://www.airlines-manager.com/aircraft/show/119220545,16:00,18:44,310,"$97,322.00","$79,589.00",$256.74,"$29,117.93"
EWR - ALB,58441017467,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283479,https://www.airlines-manager.com/network/showflight/58441017467,https://www.airlines-manager.com/aircraft/show/119220544,20:30,23:14,310,"$97,322.00","$79,589.00",$256.74,"$29,117.93"
EWR - AMS,58421791625,E-56B-4 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/58421791625,https://www.airlines-manager.com/aircraft/show/94521247,11:30,2:44,748,"$2,340,297.00","$2,076,102.00","$2,775.54","$136,286.78"
EWR - AMS,58425450006,E-56B-2 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/58425450006,https://www.airlines-manager.com/aircraft/show/90656556,13:15,4:29,748,"$2,340,297.00","$2,076,102.00","$2,775.54","$136,286.78"
EWR - AMS,58431664299,E-56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/58431664299,https://www.airlines-manager.com/aircraft/show/89124072,15:00,6:14,748,"$2,113,745.00","$1,909,952.00","$2,553.41","$125,379.78"
EWR - ANC,58418603283,E-STL-PIT-3,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/58418603283,https://www.airlines-manager.com/aircraft/show/115400546,10:00,0:59,338,"$1,008,333.00","$945,249.00","$2,796.59","$63,086.70"
EWR - ANC,58425449996,E-STL-PIT-2,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/58425449996,https://www.airlines-manager.com/aircraft/show/115400547,13:15,4:14,338,"$1,008,333.00","$945,249.00","$2,796.59","$63,086.70"
EWR - ANC,58438157259,E-STL-PIT-1,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/58438157259,https://www.airlines-manager.com/aircraft/show/115400548,18:45,9:44,338,"$1,008,333.00","$945,249.00","$2,796.59","$63,086.70"
EWR - ANC,58443550941,E-STL-PIT-4,A321neo-LR,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/58443550941,https://www.airlines-manager.com/aircraft/show/103406580,21:45,12:44,338,"$1,017,697.00","$952,879.00","$2,819.17","$63,595.93"
EWR - ARN,58405118072,E-56D-1 E,787-10,https://www.airlines-manager.com/network/showline/50072203,https://www.airlines-manager.com/network/showflight/58405118072,https://www.airlines-manager.com/aircraft/show/118644436,3:45,19:44,648,"$1,979,852.00","$1,848,369.00","$2,852.42","$115,643.52"
EWR - ARN,58425449847,E-56D-3 E,787-10,https://www.airlines-manager.com/network/showline/50072203,https://www.airlines-manager.com/network/showflight/58425449847,https://www.airlines-manager.com/aircraft/show/118644438,12:45,4:44,648,"$1,979,852.00","$1,848,369.00","$2,852.42","$115,643.52"
EWR - ARN,58438157262,E-56D-5 E,787-10,https://www.airlines-manager.com/network/showline/50072203,https://www.airlines-manager.com/network/showflight/58438157262,https://www.airlines-manager.com/aircraft/show/118644440,18:45,10:44,648,"$1,979,852.00","$1,848,369.00","$2,852.42","$115,643.52"
EWR - ATH,58394056154,E-84A-7 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/58394056154,https://www.airlines-manager.com/aircraft/show/94521249,0:00,19:59,852,"$3,255,717.00","$2,963,424.00","$3,478.20","$148,294.78"
EWR - ATH,58441017340,E-84A-4 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/58441017340,https://www.airlines-manager.com/aircraft/show/90656551,19:45,15:44,852,"$3,255,717.00","$2,963,424.00","$3,478.20","$148,294.78"
EWR - ATL,58418603291,E-DFW-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/58418603291,https://www.airlines-manager.com/aircraft/show/90489724,10:00,14:59,320,"$317,987.00","$256,670.00",$802.09,"$51,505.69"
EWR - ATL,58428583401,E-DFW-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/58428583401,https://www.airlines-manager.com/aircraft/show/90489726,14:15,19:14,320,"$317,987.00","$256,670.00",$802.09,"$51,505.69"
EWR - ATL,58435221321,E-DFW-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/58435221321,https://www.airlines-manager.com/aircraft/show/90489725,17:30,22:29,320,"$317,987.00","$256,670.00",$802.09,"$51,505.69"
EWR - ATL,58438157251,E-DFW-ATL-6 B,A319-100,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/58438157251,https://www.airlines-manager.com/aircraft/show/105222360,18:30,23:29,198,"$242,128.00","$200,058.00","$1,010.39","$40,145.42"
EWR - ATL,58441017314,E-DFW-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/58441017314,https://www.airlines-manager.com/aircraft/show/86238752,19:45,0:44,320,"$317,987.00","$256,670.00",$802.09,"$51,505.69"
EWR - ATL,58443551008,E-DFW-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/58443551008,https://www.airlines-manager.com/aircraft/show/86238753,22:15,3:14,320,"$317,987.00","$256,670.00",$802.09,"$51,505.69"
EWR - AUS,58394056891,E-ABQ-AUS-3,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/58394056891,https://www.airlines-manager.com/aircraft/show/90717077,2:00,9:59,310,"$502,001.00","$460,757.00","$1,486.31","$57,714.86"
EWR - AUS,58405117974,E-ABQ-AUS-4,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/58405117974,https://www.airlines-manager.com/aircraft/show/90717076,3:00,10:59,310,"$502,001.00","$460,757.00","$1,486.31","$57,714.86"
EWR - AUS,58418603327,E-ABQ-AUS-2,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/58418603327,https://www.airlines-manager.com/aircraft/show/90717078,10:00,17:59,310,"$502,001.00","$460,757.00","$1,486.31","$57,714.86"
EWR - AUS,58425449786,E-ABQ-AUS-5,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/58425449786,https://www.airlines-manager.com/aircraft/show/95950199,12:00,19:59,310,"$502,001.00","$460,757.00","$1,486.31","$57,714.86"
EWR - AUS,58438157372,E-ABQ-AUS-1,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/58438157372,https://www.airlines-manager.com/aircraft/show/90717079,19:15,3:14,310,"$502,001.00","$460,757.00","$1,486.31","$57,714.86"
EWR - BCN,58431664367,E-84A-5 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/58431664367,https://www.airlines-manager.com/aircraft/show/94521250,15:45,7:44,852,"$2,632,266.00","$2,389,969.00","$2,805.13","$149,528.82"
EWR - BCN,58441017386,E-84A-2 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/58441017386,https://www.airlines-manager.com/aircraft/show/94521252,20:00,11:59,852,"$2,632,266.00","$2,389,969.00","$2,805.13","$149,528.82"
EWR - BDA,58415054129,E-YEG-BFF-5 B,A319-100,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/58415054129,https://www.airlines-manager.com/aircraft/show/115493369,8:45,13:59,198,"$244,374.00","$222,601.00","$1,124.25","$42,535.22"
EWR - BDA,58421791507,E-YEG-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/58421791507,https://www.airlines-manager.com/aircraft/show/98936170,11:00,16:14,320,"$322,677.00","$291,887.00",$912.15,"$55,774.59"
EWR - BDA,58425449906,E-YEG-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/58425449906,https://www.airlines-manager.com/aircraft/show/98936171,13:00,18:14,320,"$322,677.00","$291,887.00",$912.15,"$55,774.59"
EWR - BDA,58441017548,E-YEG-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/58441017548,https://www.airlines-manager.com/aircraft/show/98936168,21:00,2:14,320,"$322,677.00","$291,887.00",$912.15,"$55,774.59"
EWR - BDA,58446475110,E-YEG-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/58446475110,https://www.airlines-manager.com/aircraft/show/98936169,22:30,3:44,257,"$263,964.00","$234,826.00",$913.72,"$44,871.21"
EWR - BDL,58394056686,E-COS-ICT-4,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/58394056686,https://www.airlines-manager.com/aircraft/show/108834811,1:00,3:29,310,"$89,881.00","$71,553.00",$230.82,"$28,813.29"
EWR - BDL,58418603266,E-COS-ICT-5,ERJ-175,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/58418603266,https://www.airlines-manager.com/aircraft/show/108466265,9:30,11:59,112,"$38,565.00","$27,367.00",$244.35,"$11,020.27"
EWR - BDL,58428583363,E-COS-ICT-3,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/58428583363,https://www.airlines-manager.com/aircraft/show/108834810,14:00,16:29,310,"$89,881.00","$71,553.00",$230.82,"$28,813.29"
EWR - BDL,58431664412,E-COS-ICT-2,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/58431664412,https://www.airlines-manager.com/aircraft/show/108834809,16:00,18:29,310,"$89,881.00","$71,553.00",$230.82,"$28,813.29"
EWR - BDL,58446475190,E-COS-ICT-1,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/58446475190,https://www.airlines-manager.com/aircraft/show/108834808,23:00,1:29,310,"$89,881.00","$71,553.00",$230.82,"$28,813.29"
EWR - BER,58408651883,E-84B-5  B2,777-300,https://www.airlines-manager.com/network/showline/49921899,https://www.airlines-manager.com/network/showflight/58408651883,https://www.airlines-manager.com/aircraft/show/117958699,5:45,22:14,852,"$2,722,879.00","$2,471,231.00","$2,900.51","$149,923.01"
EWR - BER,58435221359,E-84B-1  B2,777-300,https://www.airlines-manager.com/network/showline/49921899,https://www.airlines-manager.com/network/showflight/58435221359,https://www.airlines-manager.com/aircraft/show/117958695,17:45,10:14,852,"$2,722,879.00","$2,471,231.00","$2,900.51","$149,923.01"
EWR - BFF,58394056906,E-YEG-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/58394056906,https://www.airlines-manager.com/aircraft/show/98936168,2:15,10:14,320,"$508,560.00","$465,849.00","$1,455.78","$58,352.69"
EWR - BFF,58405118076,E-YEG-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/58405118076,https://www.airlines-manager.com/aircraft/show/98936169,3:45,11:44,320,"$508,560.00","$465,849.00","$1,455.78","$58,352.69"
EWR - BFF,58428583386,E-YEG-BFF-5 B,A319-100,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/58428583386,https://www.airlines-manager.com/aircraft/show/115493369,14:00,21:59,198,"$383,756.00","$352,846.00","$1,782.05","$44,197.83"
EWR - BFF,58431664436,E-YEG-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/58431664436,https://www.airlines-manager.com/aircraft/show/98936170,16:15,0:14,320,"$508,560.00","$465,849.00","$1,455.78","$58,352.69"
EWR - BFF,58438157197,E-YEG-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/58438157197,https://www.airlines-manager.com/aircraft/show/98936171,18:15,2:14,320,"$508,560.00","$465,849.00","$1,455.78","$58,352.69"
EWR - BHM,58394056914,E-RAP-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/58394056914,https://www.airlines-manager.com/aircraft/show/116042862,2:15,7:44,310,"$347,275.00","$318,482.00","$1,027.36","$58,081.82"
EWR - BHM,58415054103,E-RAP-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/58415054103,https://www.airlines-manager.com/aircraft/show/116042859,8:30,13:59,310,"$347,275.00","$318,482.00","$1,027.36","$58,081.82"
EWR - BHM,58428583374,E-RAP-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/58428583374,https://www.airlines-manager.com/aircraft/show/116042860,14:00,19:29,310,"$347,275.00","$318,482.00","$1,027.36","$58,081.82"
EWR - BHM,58431664334,E-RAP-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/58431664334,https://www.airlines-manager.com/aircraft/show/116042861,15:15,20:44,310,"$347,275.00","$318,482.00","$1,027.36","$58,081.82"
EWR - BIL,58418603310,E-BIL-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/58418603310,https://www.airlines-manager.com/aircraft/show/116047882,10:00,18:59,320,"$566,684.00","$520,727.00","$1,627.27","$57,965.90"
EWR - BIL,58425449769,E-BIL-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/58425449769,https://www.airlines-manager.com/aircraft/show/116047885,12:00,20:59,320,"$566,684.00","$520,727.00","$1,627.27","$57,965.90"
EWR - BIL,58443550895,E-BIL-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/58443550895,https://www.airlines-manager.com/aircraft/show/116047884,21:15,6:14,320,"$566,684.00","$520,727.00","$1,627.27","$57,965.90"
EWR - BIL,58446475148,E-BIL-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/58446475148,https://www.airlines-manager.com/aircraft/show/116047883,22:45,7:44,320,"$566,684.00","$520,727.00","$1,627.27","$57,965.90"
EWR - BNA,58405118020,E-BNA-JAX-3,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/58405118020,https://www.airlines-manager.com/aircraft/show/104610408,3:15,8:14,310,"$323,250.00","$293,910.00",$948.10,"$58,978.60"
EWR - BNA,58415054096,E-BNA-JAX-2,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/58415054096,https://www.airlines-manager.com/aircraft/show/104610409,8:30,13:29,310,"$323,250.00","$293,910.00",$948.10,"$58,978.60"
EWR - BNA,58425449966,E-BNA-JAX-1,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/58425449966,https://www.airlines-manager.com/aircraft/show/104610410,13:00,17:59,310,"$323,250.00","$293,910.00",$948.10,"$58,978.60"
EWR - BNA,58435221289,E-BNA-JAX-5,ERJ-175,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/58435221289,https://www.airlines-manager.com/aircraft/show/96421247,17:00,21:59,112,"$153,324.00","$134,418.00","$1,200.16","$26,973.51"
EWR - BNA,58443550896,E-BNA-JAX-4,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/58443550896,https://www.airlines-manager.com/aircraft/show/104610407,21:15,2:14,310,"$323,250.00","$293,910.00",$948.10,"$58,978.60"
EWR - BOI,58394056840,E-BOI-PBI-5 B,A319-100,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/58394056840,https://www.airlines-manager.com/aircraft/show/110582846,1:30,11:59,198,"$493,093.00","$454,851.00","$2,297.23","$43,388.01"
EWR - BOI,58418603342,E-BOI-PBI-1,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/58418603342,https://www.airlines-manager.com/aircraft/show/104418460,10:00,20:29,310,"$656,743.00","$609,056.00","$1,964.70","$58,097.55"
EWR - BOI,58431664280,E-BOI-PBI-4,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/58431664280,https://www.airlines-manager.com/aircraft/show/104418463,15:00,1:29,310,"$656,743.00","$609,056.00","$1,964.70","$58,097.55"
EWR - BOI,58435221202,E-BOI-PBI-3,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/58435221202,https://www.airlines-manager.com/aircraft/show/104418462,16:30,2:59,310,"$656,743.00","$609,056.00","$1,964.70","$58,097.55"
EWR - BOI,58446475238,E-BOI-PBI-2,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/58446475238,https://www.airlines-manager.com/aircraft/show/104418461,23:30,9:59,310,"$656,743.00","$609,056.00","$1,964.70","$58,097.55"
EWR - BOS,58405117986,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/58405117986,https://www.airlines-manager.com/aircraft/show/104034464,3:00,5:59,216,"$94,360.00","$74,574.00",$345.25,"$24,996.87"
EWR - BOS,58418603365,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/58418603365,https://www.airlines-manager.com/aircraft/show/104034463,10:00,12:59,216,"$94,360.00","$74,574.00",$345.25,"$24,996.87"
EWR - BOS,58425449859,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/58425449859,https://www.airlines-manager.com/aircraft/show/104034462,12:45,15:44,216,"$94,360.00","$74,574.00",$345.25,"$24,996.87"
EWR - BOS,58428583292,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/58428583292,https://www.airlines-manager.com/aircraft/show/99316501,13:45,16:44,216,"$94,360.00","$74,574.00",$345.25,"$24,996.87"
EWR - BOS,58435221282,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/58435221282,https://www.airlines-manager.com/aircraft/show/104034464,17:00,19:59,216,"$94,360.00","$74,574.00",$345.25,"$24,996.87"
EWR - BOS,58441017378,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/58441017378,https://www.airlines-manager.com/aircraft/show/104034463,20:00,22:59,216,"$94,360.00","$74,574.00",$345.25,"$24,996.87"
EWR - BOS,58446475167,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/58446475167,https://www.airlines-manager.com/aircraft/show/104034462,22:45,1:44,216,"$94,360.00","$74,574.00",$345.25,"$24,996.87"
EWR - BOS,58446475168,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/58446475168,https://www.airlines-manager.com/aircraft/show/99316501,23:45,2:44,216,"$94,360.00","$74,574.00",$345.25,"$24,996.87"
EWR - BRU,58405117912,E-84B-1  B2,777-300,https://www.airlines-manager.com/network/showline/49921920,https://www.airlines-manager.com/network/showflight/58405117912,https://www.airlines-manager.com/aircraft/show/117958695,2:30,17:44,852,"$2,505,077.00","$2,279,063.00","$2,674.96","$149,610.26"
EWR - BRU,58428583428,E-84B-4  B2,777-300,https://www.airlines-manager.com/network/showline/49921920,https://www.airlines-manager.com/network/showflight/58428583428,https://www.airlines-manager.com/aircraft/show/117958698,14:30,5:44,852,"$2,505,077.00","$2,279,063.00","$2,674.96","$149,610.26"
EWR - BTV,58415054128,E-FCA-CID-1,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/58415054128,https://www.airlines-manager.com/aircraft/show/116042866,8:45,11:59,310,"$140,336.00","$121,121.00",$390.71,"$37,460.10"
EWR - BTV,58425449795,E-FCA-CID-4,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/58425449795,https://www.airlines-manager.com/aircraft/show/116042863,12:00,15:14,310,"$140,336.00","$121,121.00",$390.71,"$37,460.10"
EWR - BTV,58425449796,E-FCA-CID-3,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/58425449796,https://www.airlines-manager.com/aircraft/show/116042864,13:00,16:14,310,"$140,336.00","$121,121.00",$390.71,"$37,460.10"
EWR - BTV,58438157306,E-FCA-CID-2,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/58438157306,https://www.airlines-manager.com/aircraft/show/116042865,18:45,21:59,310,"$140,336.00","$121,121.00",$390.71,"$37,460.10"
EWR - BUF,58408651868,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/58408651868,https://www.airlines-manager.com/aircraft/show/106104450,5:30,8:44,112,"70,829$","58,025$",$518.08,"$17,945.88"
EWR - BUF,58421791509,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/58421791509,https://www.airlines-manager.com/aircraft/show/105731236,11:00,14:14,320,"154,757$","130,787$",$408.71,"$40,449.59"
EWR - BUF,58428583430,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/58428583430,https://www.airlines-manager.com/aircraft/show/88494376,14:45,17:59,320,"154,757$","130,787$",$408.71,"$40,449.59"
EWR - BUF,58438157229,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/58438157229,https://www.airlines-manager.com/aircraft/show/88494377,18:30,21:44,320,"$154,757.00","$130,787.00",$408.71,"$40,449.59"
EWR - BUF,58446475177,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/58446475177,https://www.airlines-manager.com/aircraft/show/88494375,23:00,2:14,320,"$154,757.00","$130,787.00",$408.71,"$40,449.59"
EWR - BWI,58394056406,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/58394056406,https://www.airlines-manager.com/aircraft/show/104034464,0:15,2:59,216,"$75,020.00","$56,450.00",$261.34,"$20,652.44"
EWR - BWI,58405118027,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/58405118027,https://www.airlines-manager.com/aircraft/show/104034463,3:15,5:59,216,"$75,020.00","$56,450.00",$261.34,"$20,652.44"
EWR - BWI,58418603364,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/58418603364,https://www.airlines-manager.com/aircraft/show/104034462,10:00,12:44,216,"$75,020.00","$56,450.00",$261.34,"$20,652.44"
EWR - BWI,58421791581,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/58421791581,https://www.airlines-manager.com/aircraft/show/99316501,11:00,13:44,216,"$75,020.00","$56,450.00",$261.34,"$20,652.44"
EWR - BWI,58428583411,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/58428583411,https://www.airlines-manager.com/aircraft/show/104034464,14:15,16:59,216,"$75,020.00","$56,450.00",$261.34,"$20,652.44"
EWR - BWI,58435221313,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/58435221313,https://www.airlines-manager.com/aircraft/show/104034463,17:15,19:59,216,"$75,020.00","$56,450.00",$261.34,"$20,652.44"
EWR - BWI,58441017376,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/58441017376,https://www.airlines-manager.com/aircraft/show/104034462,20:00,22:44,216,"$75,020.00","$56,450.00",$261.34,"$20,652.44"
EWR - BWI,58441017377,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/58441017377,https://www.airlines-manager.com/aircraft/show/99316501,21:00,23:44,216,"$75,020.00","$56,450.00",$261.34,"$20,652.44"
EWR - BZN,58394056450,E-BIL-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/58394056450,https://www.airlines-manager.com/aircraft/show/116047885,0:30,9:44,320,"$593,949.00","$547,045.00","$1,709.52","$59,246.75"
EWR - BZN,58425449768,E-BIL-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/58425449768,https://www.airlines-manager.com/aircraft/show/116047884,12:00,21:14,320,"$593,949.00","$547,045.00","$1,709.52","$59,246.75"
EWR - BZN,58428583272,E-BIL-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/58428583272,https://www.airlines-manager.com/aircraft/show/116047883,13:30,22:44,320,"$593,949.00","$547,045.00","$1,709.52","$59,246.75"
EWR - BZN,58446475115,E-BIL-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/58446475115,https://www.airlines-manager.com/aircraft/show/116047882,22:30,7:44,320,"$593,949.00","$547,045.00","$1,709.52","$59,246.75"
EWR - CAK,58415054091,E-BIL-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/58415054091,https://www.airlines-manager.com/aircraft/show/116047884,8:30,11:59,320,"$191,144.00","$167,042.00",$522.01,"$47,954.64"
EWR - CAK,58418603311,E-BIL-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/58418603311,https://www.airlines-manager.com/aircraft/show/116047883,10:00,13:29,320,"$191,144.00","$167,042.00",$522.01,"$47,954.64"
EWR - CAK,58438157330,E-BIL-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/58438157330,https://www.airlines-manager.com/aircraft/show/116047882,19:00,22:29,320,"$191,144.00","$167,042.00",$522.01,"$47,954.64"
EWR - CAK,58441017553,E-BIL-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/58441017553,https://www.airlines-manager.com/aircraft/show/116047885,21:00,0:29,292,"$180,987.00","$157,171.00",$538.26,"$45,120.86"
EWR - CDG,58405117989,E-56A-5 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/58405117989,https://www.airlines-manager.com/aircraft/show/106813011,3:00,18:14,748,"$2,342,651.00","$2,082,220.00","$2,783.72","$136,688.40"
EWR - CDG,58415054130,E-56A-6 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/58415054130,https://www.airlines-manager.com/aircraft/show/106813012,8:45,23:59,748,"$2,342,651.00","$2,082,220.00","$2,783.72","$136,688.40"
EWR - CDG,58438157353,E-56A-2 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/58438157353,https://www.airlines-manager.com/aircraft/show/106813008,19:00,10:14,569,"1,773,550$","1,595,432$","$2,803.92","$104,732.95"
EWR - CHS,58415054099,E-TUL-DSM-1,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/58415054099,https://www.airlines-manager.com/aircraft/show/110044463,8:30,12:59,310,"289,803$","264,859$",$854.38,"$59,076.36"
EWR - CHS,58425449829,E-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/58425449829,https://www.airlines-manager.com/aircraft/show/110113039,12:00,16:29,112,"138,292$","122,229$","$1,091.33","$27,262.97"
EWR - CHS,58428583405,E-TUL-DSM-4,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/58428583405,https://www.airlines-manager.com/aircraft/show/110044466,14:15,18:44,310,"289,803$","264,859$",$854.38,"$59,076.36"
EWR - CHS,58443550900,E-TUL-DSM-3,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/58443550900,https://www.airlines-manager.com/aircraft/show/110044465,21:15,1:44,310,"$289,803.00","$264,859.00",$854.38,"$59,076.36"
EWR - CHS,58446475191,E-TUL-DSM-2,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/58446475191,https://www.airlines-manager.com/aircraft/show/110044464,23:00,3:29,287,"$277,240.00","$252,692.00",$880.46,"$56,362.53"
EWR - CID,58394056798,E-FCA-CID-4,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/58394056798,https://www.airlines-manager.com/aircraft/show/116042863,1:15,6:59,310,"$357,818.00","$329,209.00","$1,061.96","$57,420.17"
EWR - CID,58394056799,E-FCA-CID-3,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/58394056799,https://www.airlines-manager.com/aircraft/show/116042864,2:15,7:59,310,"$357,818.00","$329,209.00","$1,061.96","$57,420.17"
EWR - CID,58418603347,E-FCA-CID-2,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/58418603347,https://www.airlines-manager.com/aircraft/show/116042865,10:00,15:44,310,"$357,818.00","$329,209.00","$1,061.96","$57,420.17"
EWR - CID,58443550985,E-FCA-CID-1,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/58443550985,https://www.airlines-manager.com/aircraft/show/116042866,22:00,3:44,299,"$350,380.00","$322,046.00","$1,077.08","$56,170.81"
EWR - CLE,58394056879,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/58394056879,https://www.airlines-manager.com/aircraft/show/106104450,1:45,5:29,112,"$92,208.00","$77,629.00",$693.12,"$20,793.48"
EWR - CLE,58408651816,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/58408651816,https://www.airlines-manager.com/aircraft/show/105731236,5:00,8:44,320,"$198,945.00","$172,131.00",$537.91,"$46,106.52"
EWR - CLE,58421791498,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/58421791498,https://www.airlines-manager.com/aircraft/show/88494376,11:00,14:44,320,"$198,945.00","$172,131.00",$537.91,"$46,106.52"
EWR - CLE,58428583431,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/58428583431,https://www.airlines-manager.com/aircraft/show/88494377,14:45,18:29,320,"$198,945.00","$172,131.00",$537.91,"$46,106.52"
EWR - CLE,58438157360,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/58438157360,https://www.airlines-manager.com/aircraft/show/88494375,19:15,22:59,320,"$198,945.00","$172,131.00",$537.91,"$46,106.52"
EWR - CLT,58394056873,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/58394056873,https://www.airlines-manager.com/aircraft/show/104034462,1:45,5:59,216,"$190,387.00","$163,876.00",$758.69,"$38,710.87"
EWR - CLT,58405117946,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/58405117946,https://www.airlines-manager.com/aircraft/show/99316501,2:45,6:59,216,"190,387$","163,876$",$758.69,"$38,710.87"
EWR - CLT,58418603366,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/58418603366,https://www.airlines-manager.com/aircraft/show/104034464,10:00,14:14,216,"190,387$","163,876$",$758.69,"$38,710.87"
EWR - CLT,58425449983,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/58425449983,https://www.airlines-manager.com/aircraft/show/104034463,13:00,17:14,216,"190,387$","163,876$",$758.69,"$38,710.87"
EWR - CLT,58431664366,E-BWI-BOS-1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/58431664366,https://www.airlines-manager.com/aircraft/show/104034462,15:45,19:59,216,"190,387$","163,876$",$758.69,"$38,710.87"
EWR - CLT,58435221228,E-BWI-BOS-4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/58435221228,https://www.airlines-manager.com/aircraft/show/99316501,16:45,20:59,216,"$190,387.00","$163,876.00",$758.69,"$38,710.87"
EWR - CLT,58441017379,E-BWI-BOS-3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/58441017379,https://www.airlines-manager.com/aircraft/show/104034464,20:00,0:14,216,"$190,387.00","$163,876.00",$758.69,"$38,710.87"
EWR - CLT,58446475195,E-BWI-BOS-2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/58446475195,https://www.airlines-manager.com/aircraft/show/104034463,23:00,3:14,216,"$190,387.00","$163,876.00",$758.69,"$38,710.87"
EWR - CMH,58408651769,E-BNA-JAX-2,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/58408651769,https://www.airlines-manager.com/aircraft/show/104610409,4:30,8:29,310,"$224,003.00","$199,849.00",$644.67,"$50,171.30"
EWR - CMH,58415054097,E-BNA-JAX-1,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/58415054097,https://www.airlines-manager.com/aircraft/show/104610410,8:30,12:29,310,"$224,003.00","$199,849.00",$644.67,"$50,171.30"
EWR - CMH,58425449989,E-BNA-JAX-5,ERJ-175,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/58425449989,https://www.airlines-manager.com/aircraft/show/96421247,13:00,16:59,112,"$104,227.00","$88,930.00",$794.02,"$22,325.52"
EWR - CMH,58435221304,E-BNA-JAX-4,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/58435221304,https://www.airlines-manager.com/aircraft/show/104610407,17:15,21:14,310,"$224,003.00","$199,849.00",$644.67,"$50,171.30"
EWR - CMH,58446475216,E-BNA-JAX-3,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/58446475216,https://www.airlines-manager.com/aircraft/show/104610408,23:15,3:14,310,"$224,003.00","$199,849.00",$644.67,"$50,171.30"
EWR - COS,58394056831,E-COS-ICT-1,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/58394056831,https://www.airlines-manager.com/aircraft/show/108834808,1:30,9:59,310,"$536,329.00","$494,677.00","$1,595.73","$58,311.63"
EWR - COS,58405118055,E-COS-ICT-4,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/58405118055,https://www.airlines-manager.com/aircraft/show/108834811,3:30,11:59,310,"$536,329.00","$494,677.00","$1,595.73","$58,311.63"
EWR - COS,58425449993,E-COS-ICT-5,ERJ-175,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/58425449993,https://www.airlines-manager.com/aircraft/show/108466265,13:00,21:29,112,"$251,719.00","$223,901.00","$1,999.12","$26,393.05"
EWR - COS,58435221204,E-COS-ICT-3,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/58435221204,https://www.airlines-manager.com/aircraft/show/108834810,16:30,0:59,310,"$536,329.00","$494,677.00","$1,595.73","$58,311.63"
EWR - COS,58438157244,E-COS-ICT-2,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/58438157244,https://www.airlines-manager.com/aircraft/show/108834809,18:30,2:59,310,"$536,329.00","$494,677.00","$1,595.73","$58,311.63"
EWR - CRW,58394056841,E-CRW E,A319-100,https://www.airlines-manager.com/network/showline/50838186,https://www.airlines-manager.com/network/showflight/58394056841,https://www.airlines-manager.com/aircraft/show/120941964,1:30,5:14,216,"$156,111.00","$139,484.00",$645.76,"$37,361.79"
EWR - CRW,58421791443,E-CRW E,A319-100,https://www.airlines-manager.com/network/showline/50838186,https://www.airlines-manager.com/network/showflight/58421791443,https://www.airlines-manager.com/aircraft/show/120941964,10:30,14:14,216,"$156,111.00","$139,484.00",$645.76,"$37,361.79"
EWR - CRW,58428583412,E-CRW E,A319-100,https://www.airlines-manager.com/network/showline/50838186,https://www.airlines-manager.com/network/showflight/58428583412,https://www.airlines-manager.com/aircraft/show/120941964,14:15,17:59,216,"$156,111.00","$139,484.00",$645.76,"$37,361.79"
EWR - CRW,58435221416,E-CRW E,A319-100,https://www.airlines-manager.com/network/showline/50838186,https://www.airlines-manager.com/network/showflight/58435221416,https://www.airlines-manager.com/aircraft/show/120941964,18:00,21:44,216,"$156,111.00","$139,484.00",$645.76,"$37,361.79"
EWR - CRW,58443550962,E-CRW E,A319-100,https://www.airlines-manager.com/network/showline/50838186,https://www.airlines-manager.com/network/showflight/58443550962,https://www.airlines-manager.com/aircraft/show/120941964,21:45,1:29,216,"$156,111.00","$139,484.00",$645.76,"$37,361.79"
EWR - CUN,58394056491,E-CUN-SJU-3,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/58394056491,https://www.airlines-manager.com/aircraft/show/106581306,0:45,8:44,320,"$523,422.00","$475,646.00","$1,486.39","$59,579.87"
EWR - CUN,58394056492,E-CUN-SJU-2,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/58394056492,https://www.airlines-manager.com/aircraft/show/106581305,2:15,10:14,320,"$523,422.00","$475,646.00","$1,486.39","$59,579.87"
EWR - CUN,58425449911,E-CUN-SJU-1,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/58425449911,https://www.airlines-manager.com/aircraft/show/106581304,13:00,20:59,320,"$523,422.00","$475,646.00","$1,486.39","$59,579.87"
EWR - CUN,58428583417,E-CUN-SJU-4,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/58428583417,https://www.airlines-manager.com/aircraft/show/106581307,14:30,22:29,320,"$523,422.00","$475,646.00","$1,486.39","$59,579.87"
EWR - CUN,58443551009,E-CUN-SJU-5,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/58443551009,https://www.airlines-manager.com/aircraft/show/86238754,22:15,6:14,320,"$523,422.00","$475,646.00","$1,486.39","$59,579.87"
EWR - CVG,58394056392,E-BNA-JAX-2,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/58394056392,https://www.airlines-manager.com/aircraft/show/104610409,0:15,4:29,310,"$272,255.00","$244,530.00",$788.81,"$57,762.99"
EWR - CVG,58405118153,E-BNA-JAX-1,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/58405118153,https://www.airlines-manager.com/aircraft/show/104610410,4:15,8:29,310,"$272,255.00","$244,530.00",$788.81,"$57,762.99"
EWR - CVG,58415054081,E-BNA-JAX-5,ERJ-175,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/58415054081,https://www.airlines-manager.com/aircraft/show/96421247,8:15,12:29,112,"$128,899.00","$111,273.00",$993.51,"$26,284.96"
EWR - CVG,58425449965,E-BNA-JAX-4,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/58425449965,https://www.airlines-manager.com/aircraft/show/104610407,13:00,17:14,310,"$272,255.00","$244,530.00",$788.81,"$57,762.99"
EWR - CVG,58438157345,E-BNA-JAX-3,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/58438157345,https://www.airlines-manager.com/aircraft/show/104610408,19:00,23:14,310,"$272,255.00","$244,530.00",$788.81,"$57,762.99"
EWR - DEN,58394056865,E-DEN-SLC-1,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/58394056865,https://www.airlines-manager.com/aircraft/show/86270785,1:45,9:59,310,"$531,840.00","$467,734.00","$1,508.82","$56,809.80"
EWR - DEN,58405117929,E-DEN-SLC-4,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/58405117929,https://www.airlines-manager.com/aircraft/show/90452835,2:45,10:59,310,"$531,840.00","$467,734.00","$1,508.82","$56,809.80"
EWR - DEN,58418603323,E-DEN-SLC-2,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/58418603323,https://www.airlines-manager.com/aircraft/show/87153196,10:00,18:14,310,"$531,840.00","$467,734.00","$1,508.82","$56,809.80"
EWR - DEN,58421791543,E-DEN-SLC-3,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/58421791543,https://www.airlines-manager.com/aircraft/show/86270783,11:00,19:14,310,"$531,840.00","$467,734.00","$1,508.82","$56,809.80"
EWR - DEN,58431664408,E-DEN-SLC-5,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/58431664408,https://www.airlines-manager.com/aircraft/show/90452833,16:00,0:14,310,"$531,840.00","$467,734.00","$1,508.82","$56,809.80"
EWR - DEN,58435221283,E-DEN-SLC-6 B,A319-100,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/58435221283,https://www.airlines-manager.com/aircraft/show/105223076,17:00,1:14,198,"$400,442.00","$349,088.00","$1,763.07","$42,399.35"
EWR - DFW,58405117885,E-DFW-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/58405117885,https://www.airlines-manager.com/aircraft/show/90489724,2:30,9:59,320,"$475,884.00","$410,769.00","$1,283.65","$54,891.18"
EWR - DFW,58405117886,E-DFW-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/58405117886,https://www.airlines-manager.com/aircraft/show/86238753,3:30,10:59,320,"$475,884.00","$410,769.00","$1,283.65","$54,891.18"
EWR - DFW,58418603292,E-DFW-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/58418603292,https://www.airlines-manager.com/aircraft/show/90489725,10:00,17:29,320,"475,884$","410,769$","$1,283.65","$54,891.18"
EWR - DFW,58421791583,E-DFW-ATL-6 B,A319-100,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/58421791583,https://www.airlines-manager.com/aircraft/show/105222360,11:00,18:29,198,"359,532$","313,930$","$1,585.51","$41,950.56"
EWR - DFW,58425449834,E-DFW-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/58425449834,https://www.airlines-manager.com/aircraft/show/86238752,12:15,19:44,320,"475,884$","410,769$","$1,283.65","$54,891.18"
EWR - DFW,58438157361,E-DFW-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/58438157361,https://www.airlines-manager.com/aircraft/show/90489726,19:15,2:44,320,"475,884$","410,769$","$1,283.65","$54,891.18"
EWR - DSM,58394056899,E-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/58394056899,https://www.airlines-manager.com/aircraft/show/110113039,2:00,7:59,112,"$178,149.00","$158,109.00","$1,411.69","$26,424.90"
EWR - DSM,58405118156,E-TUL-DSM-4,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/58405118156,https://www.airlines-manager.com/aircraft/show/110044466,4:15,10:14,310,"$376,854.00","$346,404.00","$1,117.43","$57,894.82"
EWR - DSM,58425449794,E-TUL-DSM-3,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/58425449794,https://www.airlines-manager.com/aircraft/show/110044465,12:00,17:59,310,"$376,854.00","$346,404.00","$1,117.43","$57,894.82"
EWR - DSM,58428583288,E-TUL-DSM-2,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/58428583288,https://www.airlines-manager.com/aircraft/show/110044464,13:45,19:44,310,"$376,854.00","$346,404.00","$1,117.43","$57,894.82"
EWR - DSM,58446475122,E-TUL-DSM-1,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/58446475122,https://www.airlines-manager.com/aircraft/show/110044463,22:30,4:29,282,"$356,643.00","$326,971.00","$1,159.47","$54,646.96"
EWR - DTW,58405118046,E-DTW-YYZ-5,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/58405118046,https://www.airlines-manager.com/aircraft/show/92003921,3:30,7:29,320,"$228,671.00","$191,424.00",$598.20,"$48,056.23"
EWR - DTW,58418603297,E-DTW-YYZ-1,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/58418603297,https://www.airlines-manager.com/aircraft/show/92003925,10:00,13:59,320,"$228,671.00","$191,424.00",$598.20,"$48,056.23"
EWR - DTW,58428583269,E-DTW-YYZ-2,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/58428583269,https://www.airlines-manager.com/aircraft/show/92003924,13:30,17:29,320,"$228,671.00","$191,424.00",$598.20,"$48,056.23"
EWR - DTW,58443550945,E-DTW-YYZ-3,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/58443550945,https://www.airlines-manager.com/aircraft/show/92003923,21:45,1:44,320,"$228,671.00","$191,424.00",$598.20,"$48,056.23"
EWR - DTW,58443550946,E-DTW-YYZ-4,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/58443550946,https://www.airlines-manager.com/aircraft/show/92003922,22:15,2:14,320,"$228,671.00","$191,424.00",$598.20,"$48,056.23"
EWR - DUB,58405118039,E-56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/58405118039,https://www.airlines-manager.com/aircraft/show/106721557,3:30,16:59,598,"$1,665,187.00","$1,553,923.00","$2,598.53","$115,247.69"
EWR - DUB,58408651835,E-56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/58408651835,https://www.airlines-manager.com/aircraft/show/106721559,5:15,18:44,598,"$1,665,187.00","$1,553,923.00","$2,598.53","$115,247.69"
EWR - DUB,58421791435,E-56C-6 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/58421791435,https://www.airlines-manager.com/aircraft/show/106721561,10:30,23:59,598,"$1,665,187.00","$1,553,923.00","$2,598.53","$115,247.69"
EWR - ECP,58394056651,E-MTJ-ECP-3,737-900ER,https://www.airlines-manager.com/network/showline/50761178,https://www.airlines-manager.com/network/showflight/58394056651,https://www.airlines-manager.com/aircraft/show/120706944,1:00,6:44,320,"$371,840.00","$337,447.00","$1,054.52","$58,857.03"
EWR - ECP,58418603319,E-MTJ-ECP-2,737-900ER,https://www.airlines-manager.com/network/showline/50761178,https://www.airlines-manager.com/network/showflight/58418603319,https://www.airlines-manager.com/aircraft/show/120706945,10:00,15:44,320,"$371,840.00","$337,447.00","$1,054.52","$58,857.03"
EWR - ECP,58431664266,E-MTJ-ECP-4,737-900ER,https://www.airlines-manager.com/network/showline/50761178,https://www.airlines-manager.com/network/showflight/58431664266,https://www.airlines-manager.com/aircraft/show/120706943,15:00,20:44,320,"$371,840.00","$337,447.00","$1,054.52","$58,857.03"
EWR - ECP,58438157334,E-MTJ-ECP-1,737-900ER,https://www.airlines-manager.com/network/showline/50761178,https://www.airlines-manager.com/network/showflight/58438157334,https://www.airlines-manager.com/aircraft/show/120706946,19:00,0:44,320,"$371,840.00","$337,447.00","$1,054.52","$58,857.03"
EWR - EDI,58405118136,E-56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/58405118136,https://www.airlines-manager.com/aircraft/show/106721558,4:15,17:59,598,"$1,651,310.00","$1,544,019.00","$2,581.97","$112,428.57"
EWR - EDI,58411831100,E-56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/58411831100,https://www.airlines-manager.com/aircraft/show/106721560,6:00,19:44,598,"$1,651,310.00","$1,544,019.00","$2,581.97","$112,428.57"
EWR - EDI,58441017307,E-56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/58441017307,https://www.airlines-manager.com/aircraft/show/106721560,19:45,9:29,598,"$1,651,310.00","$1,544,019.00","$2,581.97","$112,428.57"
EWR - ELP,58394056430,E-ELP-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/58394056430,https://www.airlines-manager.com/aircraft/show/103365577,0:30,9:59,320,"$593,916.00","$544,134.00","$1,700.42","$57,377.93"
EWR - ELP,58405117910,E-ELP-SAT-5 B,A319-100,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/58405117910,https://www.airlines-manager.com/aircraft/show/110582847,2:30,11:59,198,"$447,282.00","$411,079.00","$2,076.16","$43,347.52"
EWR - ELP,58418603306,E-ELP-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/58418603306,https://www.airlines-manager.com/aircraft/show/103365578,10:00,19:29,320,"$593,916.00","$544,134.00","$1,700.42","$57,377.93"
EWR - ELP,58425449759,E-ELP-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/58425449759,https://www.airlines-manager.com/aircraft/show/103365575,12:00,21:29,320,"$593,916.00","$544,134.00","$1,700.42","$57,377.93"
EWR - ELP,58431664437,E-ELP-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/58431664437,https://www.airlines-manager.com/aircraft/show/103365576,16:15,1:44,320,"$593,916.00","$544,134.00","$1,700.42","$57,377.93"
EWR - EUG,58394056859,E-EUG-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/58394056859,https://www.airlines-manager.com/aircraft/show/119220438,1:45,13:29,320,"$730,976.00","$675,711.00","$2,111.60","$57,589.01"
EWR - EUG,58425449772,E-EUG-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/58425449772,https://www.airlines-manager.com/aircraft/show/119220435,12:00,23:44,320,"$730,976.00","$675,711.00","$2,111.60","$57,589.01"
EWR - EUG,58428583335,E-EUG-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/58428583335,https://www.airlines-manager.com/aircraft/show/119220436,14:00,1:44,320,"$730,976.00","$675,711.00","$2,111.60","$57,589.01"
EWR - EUG,58446475259,E-EUG-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50283407,https://www.airlines-manager.com/network/showflight/58446475259,https://www.airlines-manager.com/aircraft/show/119220437,23:45,11:29,320,"$730,976.00","$675,711.00","$2,111.60","$57,589.01"
EWR - FAR,58394056864,E-LIT-FAR-4,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/58394056864,https://www.airlines-manager.com/aircraft/show/86270784,1:45,8:29,310,"$426,035.00","$393,068.00","$1,267.96","$58,376.44"
EWR - FAR,58408651820,E-LIT-FAR-3,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/58408651820,https://www.airlines-manager.com/aircraft/show/86270786,5:00,11:44,310,"$426,035.00","$393,068.00","$1,267.96","$58,376.44"
EWR - FAR,58431664268,E-LIT-FAR-2,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/58431664268,https://www.airlines-manager.com/aircraft/show/86270787,15:00,21:44,310,"$426,035.00","$393,068.00","$1,267.96","$58,376.44"
EWR - FAR,58438157371,E-LIT-FAR-1,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/58438157371,https://www.airlines-manager.com/aircraft/show/90452834,19:15,1:59,310,"$426,035.00","$393,068.00","$1,267.96","$58,376.44"
EWR - FAT,58394056171,E-PSP-FAT-2,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/58394056171,https://www.airlines-manager.com/aircraft/show/119220451,0:15,11:44,338,"$780,932.00","$732,807.00","$2,168.07","$63,814.83"
EWR - FAT,58421791472,E-PSP-FAT-3,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/58421791472,https://www.airlines-manager.com/aircraft/show/119220452,11:00,22:29,338,"$780,932.00","$732,807.00","$2,168.07","$63,814.83"
EWR - FAT,58425449871,E-PSP-FAT-4,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/58425449871,https://www.airlines-manager.com/aircraft/show/116672810,13:00,0:29,338,"$780,932.00","$732,807.00","$2,168.07","$63,814.83"
EWR - FAT,58443551002,E-PSP-FAT-1,A321neo,https://www.airlines-manager.com/network/showline/50283404,https://www.airlines-manager.com/network/showflight/58443551002,https://www.airlines-manager.com/aircraft/show/119220450,22:15,9:44,338,"$780,932.00","$732,807.00","$2,168.07","$63,814.83"
EWR - FCA,58425449797,E-FCA-CID-1,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/58425449797,https://www.airlines-manager.com/aircraft/show/116042866,12:00,21:59,310,"$627,042.00","$582,340.00","$1,878.52","$58,331.22"
EWR - FCA,58431664335,E-FCA-CID-4,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/58431664335,https://www.airlines-manager.com/aircraft/show/116042863,15:15,1:14,310,"$627,042.00","$582,340.00","$1,878.52","$58,331.22"
EWR - FCA,58431664336,E-FCA-CID-3,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/58431664336,https://www.airlines-manager.com/aircraft/show/116042864,16:15,2:14,310,"$627,042.00","$582,340.00","$1,878.52","$58,331.22"
EWR - FCA,58443550984,E-FCA-CID-2,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/58443550984,https://www.airlines-manager.com/aircraft/show/116042865,22:00,7:59,310,"$627,042.00","$582,340.00","$1,878.52","$58,331.22"
EWR - FCO,58405117911,E-84A-2 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/58405117911,https://www.airlines-manager.com/aircraft/show/94521252,2:30,19:59,852,"$2,918,877.00","$2,644,963.00","$3,104.42","$151,284.82"
EWR - FCO,58425449809,E-84A-3 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/58425449809,https://www.airlines-manager.com/aircraft/show/90656553,12:00,5:29,852,"$2,918,877.00","$2,644,963.00","$3,104.42","$151,284.82"
EWR - FLL,58405118075,E-DTW-YYZ-2,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/58405118075,https://www.airlines-manager.com/aircraft/show/92003924,3:45,9:59,320,"$393,133.00","$353,120.00","$1,103.50","$56,650.27"
EWR - FLL,58408651871,E-DTW-YYZ-4,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/58408651871,https://www.airlines-manager.com/aircraft/show/92003922,5:45,11:59,320,"$393,133.00","$353,120.00","$1,103.50","$56,650.27"
EWR - FLL,58421791503,E-DTW-YYZ-5,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/58421791503,https://www.airlines-manager.com/aircraft/show/92003921,11:00,17:14,320,"$393,133.00","$353,120.00","$1,103.50","$56,650.27"
EWR - FLL,58425449754,E-DTW-YYZ-3,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/58425449754,https://www.airlines-manager.com/aircraft/show/92003923,12:00,18:14,320,"$393,133.00","$353,120.00","$1,103.50","$56,650.27"
EWR - FLL,58435221322,E-DTW-YYZ-1,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/58435221322,https://www.airlines-manager.com/aircraft/show/92003925,17:30,23:44,320,"$393,133.00","$353,120.00","$1,103.50","$56,650.27"
EWR - FRA,58405117947,E-56B-5 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/58405117947,https://www.airlines-manager.com/aircraft/show/94521253,2:45,18:44,748,"$2,457,826.00","$2,192,922.00","$2,931.71","$137,200.54"
EWR - FRA,58408651773,E-56B-3 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/58408651773,https://www.airlines-manager.com/aircraft/show/90656555,4:30,20:29,748,"$2,457,826.00","$2,192,922.00","$2,931.71","$137,200.54"
EWR - FRA,58411831132,E-56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/58411831132,https://www.airlines-manager.com/aircraft/show/94521251,6:15,22:14,748,"$2,219,657.00","$2,018,665.00","$2,698.75","$126,298.12"
EWR - FSD,58405118154,E-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/58405118154,https://www.airlines-manager.com/aircraft/show/107161240,4:15,10:59,310,"$413,292.00","$380,811.00","$1,228.42","$56,556.09"
EWR - FSD,58418603230,E-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/58418603230,https://www.airlines-manager.com/aircraft/show/86782214,9:00,15:44,112,"$194,687.00","$173,157.00","$1,546.04","$25,716.39"
EWR - FSD,58421791559,E-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/58421791559,https://www.airlines-manager.com/aircraft/show/107161239,11:00,17:44,310,"$413,292.00","$380,811.00","$1,228.42","$56,556.09"
EWR - FSD,58431664333,E-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/58431664333,https://www.airlines-manager.com/aircraft/show/107161241,15:15,21:59,310,"$413,292.00","$380,811.00","$1,228.42","$56,556.09"
EWR - FSD,58438157208,E-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/58438157208,https://www.airlines-manager.com/aircraft/show/107161238,18:15,0:59,287,"$395,048.00","$363,304.00","$1,265.87","$53,956.04"
EWR - GRR,58415054104,E-RAP-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/58415054104,https://www.airlines-manager.com/aircraft/show/116042862,8:30,12:59,310,"$278,444.00","$253,502.00",$817.75,"$56,543.20"
EWR - GRR,58428583373,E-RAP-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/58428583373,https://www.airlines-manager.com/aircraft/show/116042859,14:00,18:29,310,"$278,444.00","$253,502.00",$817.75,"$56,543.20"
EWR - GRR,58438157401,E-RAP-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/58438157401,https://www.airlines-manager.com/aircraft/show/116042860,19:30,23:59,310,"$278,444.00","$253,502.00",$817.75,"$56,543.20"
EWR - GRR,58441017501,E-RAP-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/58441017501,https://www.airlines-manager.com/aircraft/show/116042861,20:45,1:14,310,"$278,444.00","$253,502.00",$817.75,"$56,543.20"
EWR - GSO,58405118093,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/58405118093,https://www.airlines-manager.com/aircraft/show/119220544,3:45,7:29,310,"$217,962.00","$195,343.00",$630.14,"$52,324.02"
EWR - GSO,58418603353,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/58418603353,https://www.airlines-manager.com/aircraft/show/119220543,10:00,13:44,310,"$217,962.00","$195,343.00",$630.14,"$52,324.02"
EWR - GSO,58428583420,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/58428583420,https://www.airlines-manager.com/aircraft/show/119220542,14:30,18:14,310,"$217,962.00","$195,343.00",$630.14,"$52,324.02"
EWR - GSO,58446475219,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283471,https://www.airlines-manager.com/network/showflight/58446475219,https://www.airlines-manager.com/aircraft/show/119220545,23:15,2:59,310,"$217,962.00","$195,343.00",$630.14,"$52,324.02"
EWR - HEL,58421791446,E-56D-6 E,787-10,https://www.airlines-manager.com/network/showline/50072206,https://www.airlines-manager.com/network/showflight/58421791446,https://www.airlines-manager.com/aircraft/show/118644441,10:45,3:29,648,"$2,058,420.00","$1,923,235.00","$2,967.96","$114,934.36"
EWR - HEL,58421791447,E-56D-7 E,787-10,https://www.airlines-manager.com/network/showline/50072206,https://www.airlines-manager.com/network/showflight/58421791447,https://www.airlines-manager.com/aircraft/show/118644442,11:00,3:44,648,"$2,058,420.00","$1,923,235.00","$2,967.96","$114,934.36"
EWR - HEL,58441017350,E-56D-2 E,787-10,https://www.airlines-manager.com/network/showline/50072206,https://www.airlines-manager.com/network/showflight/58441017350,https://www.airlines-manager.com/aircraft/show/118644437,20:00,12:44,585,"$1,924,059.00","$1,795,352.00","$3,068.98","$107,291.95"
EWR - IAH,58405118034,E-IAH-LAS-3,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/58405118034,https://www.airlines-manager.com/aircraft/show/105859512,3:30,10:59,338,"$514,558.00","$466,696.00","$1,380.76","$62,364.72"
EWR - IAH,58408651754,E-IAH-LAS-5,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/58408651754,https://www.airlines-manager.com/aircraft/show/105859514,4:30,11:59,338,"$514,558.00","$466,696.00","$1,380.76","$62,364.72"
EWR - IAH,58415053992,E-IAH-LAS-1,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/58415053992,https://www.airlines-manager.com/aircraft/show/105859510,7:30,14:59,338,"$514,558.00","$466,696.00","$1,380.76","$62,364.72"
EWR - IAH,58421791462,E-IAH-LAS-2,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/58421791462,https://www.airlines-manager.com/aircraft/show/105859511,11:00,18:29,338,"$514,558.00","$466,696.00","$1,380.76","$62,364.72"
EWR - IAH,58425449743,E-IAH-LAS-4,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/58425449743,https://www.airlines-manager.com/aircraft/show/105859513,12:00,19:29,338,"$514,558.00","$466,696.00","$1,380.76","$62,364.72"
EWR - IAH,58431664420,Corporate Jet,A320-200,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/58431664420,https://www.airlines-manager.com/aircraft/show/101412921,16:00,23:29,84,"$360,983.00","$313,430.00","$3,731.31","$41,883.74"
EWR - IAH,58438157314,E-IAH-LAS-6,ERJ-175,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/58438157314,https://www.airlines-manager.com/aircraft/show/105864236,18:45,2:14,112,"223,881$","191,674$","$1,711.38","$25,613.45"
EWR - ICT,58394056683,E-COS-ICT-3,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/58394056683,https://www.airlines-manager.com/aircraft/show/108834810,1:00,7:59,310,"443,657$","408,957$","$1,319.22","$58,561.86"
EWR - ICT,58405117978,E-COS-ICT-2,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/58405117978,https://www.airlines-manager.com/aircraft/show/108834809,3:00,9:59,310,"443,657$","408,957$","$1,319.22","$58,561.86"
EWR - ICT,58421791564,E-COS-ICT-1,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/58421791564,https://www.airlines-manager.com/aircraft/show/108834808,11:00,17:59,310,"443,657$","408,957$","$1,319.22","$58,561.86"
EWR - ICT,58425449971,E-COS-ICT-4,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/58425449971,https://www.airlines-manager.com/aircraft/show/108834811,13:00,19:59,310,"$443,657.00","$408,957.00","$1,319.22","$58,561.86"
EWR - ICT,58443550935,E-COS-ICT-5,ERJ-175,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/58443550935,https://www.airlines-manager.com/aircraft/show/108466265,21:30,4:29,112,"$209,813.00","$186,793.00","$1,667.79","$26,748.40"
EWR - IND,58394056422,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/58394056422,https://www.airlines-manager.com/aircraft/show/88494376,0:30,4:59,320,"$295,630.00","$264,062.00",$825.19,"$58,898.59"
EWR - IND,58405118139,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/58405118139,https://www.airlines-manager.com/aircraft/show/88494377,4:15,8:44,320,"$295,630.00","$264,062.00",$825.19,"$58,898.59"
EWR - IND,58421791497,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/58421791497,https://www.airlines-manager.com/aircraft/show/88494375,11:00,15:29,320,"295,630$","264,062$",$825.19,"$58,898.59"
EWR - IND,58435221338,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/58435221338,https://www.airlines-manager.com/aircraft/show/106104450,17:30,21:59,112,"140,974$","123,319$","$1,101.06","$27,506.10"
EWR - IND,58441017484,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/58441017484,https://www.airlines-manager.com/aircraft/show/105731236,20:45,1:14,320,"295,630$","264,062$",$825.19,"$58,898.59"
EWR - JAN,58394056890,E-LIT-FAR-1,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/58394056890,https://www.airlines-manager.com/aircraft/show/90452834,2:00,8:14,310,"389,658$","358,977$","$1,157.99","$57,589.89"
EWR - JAN,58415054094,E-LIT-FAR-4,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/58415054094,https://www.airlines-manager.com/aircraft/show/86270784,8:30,14:44,310,"$389,658.00","$358,977.00","$1,157.99","$57,589.89"
EWR - JAN,58425449782,E-LIT-FAR-3,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/58425449782,https://www.airlines-manager.com/aircraft/show/86270786,12:00,18:14,310,"$389,658.00","$358,977.00","$1,157.99","$57,589.89"
EWR - JAN,58443550959,E-LIT-FAR-2,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/58443550959,https://www.airlines-manager.com/aircraft/show/86270787,21:45,3:59,310,"$389,658.00","$358,977.00","$1,157.99","$57,589.89"
EWR - JAX,58394056912,E-BNA-JAX-4,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/58394056912,https://www.airlines-manager.com/aircraft/show/104610407,2:15,7:29,310,"$338,100.00","$309,077.00",$997.02,"$59,059.30"
EWR - JAX,58415054072,E-BNA-JAX-3,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/58415054072,https://www.airlines-manager.com/aircraft/show/104610408,8:15,13:29,310,"$338,100.00","$309,077.00",$997.02,"$59,059.30"
EWR - JAX,58428583357,E-BNA-JAX-2,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/58428583357,https://www.airlines-manager.com/aircraft/show/104610409,14:00,19:14,310,"$338,100.00","$309,077.00",$997.02,"$59,059.30"
EWR - JAX,58435221404,E-BNA-JAX-1,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/58435221404,https://www.airlines-manager.com/aircraft/show/104610410,18:00,23:14,310,"$338,100.00","$309,077.00",$997.02,"$59,059.30"
EWR - JAX,58443550997,E-BNA-JAX-5,ERJ-175,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/58443550997,https://www.airlines-manager.com/aircraft/show/96421247,22:00,3:14,112,"$160,380.00","$141,534.00","$1,263.70","$27,044.71"
EWR - KEF,58435221236,E-56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/58435221236,https://www.airlines-manager.com/aircraft/show/106721557,17:00,4:14,598,"$1,347,044.00","$1,258,033.00","$2,103.73","$111,991.07"
EWR - KEF,58435221237,E-56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/58435221237,https://www.airlines-manager.com/aircraft/show/106721558,18:00,5:14,598,"$1,347,044.00","$1,258,033.00","$2,103.73","$111,991.07"
EWR - KEF,58438157261,E-56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/58438157261,https://www.airlines-manager.com/aircraft/show/106721559,18:45,5:59,598,"$1,347,044.00","$1,258,033.00","$2,103.73","$111,991.07"
EWR - LAS,58394056167,E-IAH-LAS-2,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/58394056167,https://www.airlines-manager.com/aircraft/show/105859511,0:15,10:59,338,"$739,029.00","$674,865.00","$1,996.64","$62,875.62"
EWR - LAS,58394056168,E-IAH-LAS-4,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/58394056168,https://www.airlines-manager.com/aircraft/show/105859513,1:15,11:59,338,"$739,029.00","$674,865.00","$1,996.64","$62,875.62"
EWR - LAS,58394056169,E-IAH-LAS-6,ERJ-175,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/58394056169,https://www.airlines-manager.com/aircraft/show/105864236,2:15,12:59,112,"$318,946.00","$274,901.00","$2,454.47","$25,611.89"
EWR - LAS,58425449744,E-IAH-LAS-5,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/58425449744,https://www.airlines-manager.com/aircraft/show/105859514,12:00,22:44,338,"$739,029.00","$674,865.00","$1,996.64","$62,875.62"
EWR - LAS,58431664232,E-IAH-LAS-1,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/58431664232,https://www.airlines-manager.com/aircraft/show/105859510,15:00,1:44,338,"$739,029.00","$674,865.00","$1,996.64","$62,875.62"
EWR - LAS,58435221210,E-IAH-LAS-3,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/58435221210,https://www.airlines-manager.com/aircraft/show/105859512,16:45,3:29,338,"$739,029.00","$674,865.00","$1,996.64","$62,875.62"
EWR - LAX,58394056106,E-SFO-LAX-4,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/58394056106,https://www.airlines-manager.com/aircraft/show/89233030,0:00,11:29,400,"$939,053.00","$847,830.00","$2,119.58","$73,831.35"
EWR - LAX,58394056107,E-SFO-LAX-5,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/58394056107,https://www.airlines-manager.com/aircraft/show/89233027,2:00,13:29,400,"$939,053.00","$847,830.00","$2,119.58","$73,831.35"
EWR - LAX,58425449839,E-SFO-LAX-1,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/58425449839,https://www.airlines-manager.com/aircraft/show/83716137,12:30,23:59,400,"$939,053.00","$847,830.00","$2,119.58","$73,831.35"
EWR - LAX,58428583303,E-SFO-LAX-2,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/58428583303,https://www.airlines-manager.com/aircraft/show/89233028,14:00,1:29,400,"939,053$","847,830$","$2,119.58","$73,831.35"
EWR - LAX,58431664341,E-SFO-LAX-3,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/58431664341,https://www.airlines-manager.com/aircraft/show/89233029,15:30,2:59,400,"$939,053.00","$847,830.00","$2,119.58","$73,831.35"
EWR - LEX,58405117982,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/58405117982,https://www.airlines-manager.com/aircraft/show/119220545,3:00,7:29,310,"$273,544.00","$250,336.00",$807.54,"$55,837.03"
EWR - LEX,58418603354,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/58418603354,https://www.airlines-manager.com/aircraft/show/119220544,10:00,14:29,310,"$273,544.00","$250,336.00",$807.54,"$55,837.03"
EWR - LEX,58428583289,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/58428583289,https://www.airlines-manager.com/aircraft/show/119220543,13:45,18:14,310,"$273,544.00","$250,336.00",$807.54,"$55,837.03"
EWR - LEX,58438157209,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283473,https://www.airlines-manager.com/network/showflight/58438157209,https://www.airlines-manager.com/aircraft/show/119220542,18:15,22:44,284,"$260,215.00","$237,425.00",$836.00,"$52,957.25"
EWR - LHR,58394056922,E-56A-1 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/58394056922,https://www.airlines-manager.com/aircraft/show/106813007,2:15,16:44,748,"$2,236,129.00","$1,984,526.00","$2,653.11","$137,021.36"
EWR - LHR,58425449845,E-56A-4 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/58425449845,https://www.airlines-manager.com/aircraft/show/106813010,12:30,2:59,748,"$2,236,129.00","$1,984,526.00","$2,653.11","$137,021.36"
EWR - LHR,58438157214,E-56A-5 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/58438157214,https://www.airlines-manager.com/aircraft/show/106813011,18:15,8:44,748,"$2,020,013.00","$1,825,653.00","$2,440.71","$126,051.99"
EWR - LIS,58408651867,E-84A-4 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/58408651867,https://www.airlines-manager.com/aircraft/show/90656551,5:30,19:44,852,"$2,344,484.00","$2,136,149.00","$2,507.22","$150,080.73"
EWR - LIS,58425449836,E-84A-1 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/58425449836,https://www.airlines-manager.com/aircraft/show/90656554,12:15,2:29,852,"$2,344,484.00","$2,136,149.00","$2,507.22","$150,080.73"
EWR - LIT,58415054095,E-LIT-FAR-2,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/58415054095,https://www.airlines-manager.com/aircraft/show/86270787,8:30,14:44,310,"$395,427.00","$364,470.00","$1,175.71","$58,471.12"
EWR - LIT,58425449950,E-LIT-FAR-1,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/58425449950,https://www.airlines-manager.com/aircraft/show/90452834,13:00,19:14,310,"$395,427.00","$364,470.00","$1,175.71","$58,471.12"
EWR - LIT,58438157397,E-LIT-FAR-4,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/58438157397,https://www.airlines-manager.com/aircraft/show/86270784,19:30,1:44,310,"$395,427.00","$364,470.00","$1,175.71","$58,471.12"
EWR - LIT,58446475154,E-LIT-FAR-3,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/58446475154,https://www.airlines-manager.com/aircraft/show/86270786,22:45,4:59,310,"$395,427.00","$364,470.00","$1,175.71","$58,471.12"
EWR - MAD,58394056153,E-56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/58394056153,https://www.airlines-manager.com/aircraft/show/89124072,0:00,14:59,748,"$2,305,651.00","$2,052,692.00","$2,744.24","$136,998.35"
EWR - MAD,58441017469,E-56B-3 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/58441017469,https://www.airlines-manager.com/aircraft/show/90656555,20:30,11:29,748,"$2,305,651.00","$2,052,692.00","$2,744.24","$136,998.35"
EWR - MAD,58443551031,E-56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/58443551031,https://www.airlines-manager.com/aircraft/show/94521251,22:15,13:14,748,"$2,081,866.00","$1,888,475.00","$2,524.70","$126,038.38"
EWR - MAF,58394056805,E-RDM-MAF-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761173,https://www.airlines-manager.com/network/showflight/58394056805,https://www.airlines-manager.com/aircraft/show/120706940,1:30,9:59,272,"$490,770.00","$460,607.00","$1,693.41","$54,295.52"
EWR - MAF,58411831188,E-RDM-MAF-5 B,A319-100,https://www.airlines-manager.com/network/showline/50761173,https://www.airlines-manager.com/network/showflight/58411831188,https://www.airlines-manager.com/aircraft/show/120707022,7:00,15:29,198,"$408,411.00","$376,383.00","$1,900.92","$44,367.35"
EWR - MAF,58418603276,E-RDM-MAF-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761173,https://www.airlines-manager.com/network/showflight/58418603276,https://www.airlines-manager.com/aircraft/show/120706941,10:00,18:29,272,"$490,770.00","$460,607.00","$1,693.41","$54,295.52"
EWR - MAF,58435221364,E-RDM-MAF-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761173,https://www.airlines-manager.com/network/showflight/58435221364,https://www.airlines-manager.com/aircraft/show/120706939,18:00,2:29,272,"$490,770.00","$460,607.00","$1,693.41","$54,295.52"
EWR - MAF,58446475247,E-RDM-MAF-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761173,https://www.airlines-manager.com/network/showflight/58446475247,https://www.airlines-manager.com/aircraft/show/120706942,23:45,8:14,272,"490,770$","460,607$","$1,693.41","$54,295.52"
EWR - MBJ,58405118042,E-56D-7 E,787-10,https://www.airlines-manager.com/network/showline/50072192,https://www.airlines-manager.com/network/showflight/58405118042,https://www.airlines-manager.com/aircraft/show/118644442,3:30,10:59,648,"946,617$","884,838$","$1,365.49","$118,241.16"
EWR - MBJ,58421791596,E-56D-5 E,787-10,https://www.airlines-manager.com/network/showline/50072192,https://www.airlines-manager.com/network/showflight/58421791596,https://www.airlines-manager.com/aircraft/show/118644440,11:15,18:44,648,"946,617$","884,838$","$1,365.49","$118,241.16"
EWR - MBJ,58441017309,E-56D-1 E,787-10,https://www.airlines-manager.com/network/showline/50072192,https://www.airlines-manager.com/network/showflight/58441017309,https://www.airlines-manager.com/aircraft/show/118644436,19:45,3:14,639,"929,516$","868,211$","$1,358.70","$116,019.29"
EWR - MCI,58405118078,E-ELP-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/58405118078,https://www.airlines-manager.com/aircraft/show/103365578,3:45,9:59,320,"397,542$","358,566$","$1,120.52","$57,523.96"
EWR - MCI,58408651873,E-ELP-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/58408651873,https://www.airlines-manager.com/aircraft/show/103365575,5:45,11:59,320,"$397,542.00","$358,566.00","$1,120.52","$57,523.96"
EWR - MCI,58418603304,E-ELP-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/58418603304,https://www.airlines-manager.com/aircraft/show/103365576,10:00,16:14,320,"$397,542.00","$358,566.00","$1,120.52","$57,523.96"
EWR - MCI,58438157198,E-ELP-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/58438157198,https://www.airlines-manager.com/aircraft/show/103365577,18:15,0:29,320,"$397,542.00","$358,566.00","$1,120.52","$57,523.96"
EWR - MCI,58441017430,E-ELP-SAT-5 B,A319-100,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/58441017430,https://www.airlines-manager.com/aircraft/show/110582847,20:15,2:29,198,"$300,833.00","$273,106.00","$1,379.32","$43,813.80"
EWR - MCO,58394056845,E-IAH-LAS-1,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/58394056845,https://www.airlines-manager.com/aircraft/show/105859510,1:45,7:29,338,"$391,484.00","$352,189.00","$1,041.98","$61,428.31"
EWR - MCO,58421791463,E-IAH-LAS-3,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/58421791463,https://www.airlines-manager.com/aircraft/show/105859512,11:00,16:44,338,"391,484$","352,189$","$1,041.98","$61,428.31"
EWR - MCO,58425449992,E-IAH-LAS-6,ERJ-175,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/58425449992,https://www.airlines-manager.com/aircraft/show/105864236,13:00,18:44,112,"171,435$","145,517$","$1,299.26","$25,380.87"
EWR - MCO,58438157220,E-IAH-LAS-2,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/58438157220,https://www.airlines-manager.com/aircraft/show/105859511,18:30,0:14,338,"391,484$","352,189$","$1,041.98","$61,428.31"
EWR - MCO,58438157221,E-IAH-LAS-4,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/58438157221,https://www.airlines-manager.com/aircraft/show/105859513,19:30,1:14,338,"391,484$","352,189$","$1,041.98","$61,428.31"
EWR - MCO,58446475132,E-IAH-LAS-5,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/58446475132,https://www.airlines-manager.com/aircraft/show/105859514,22:45,4:29,338,"391,484$","352,189$","$1,041.98","$61,428.31"
EWR - MEM,58394056743,E-RNO-MEM-4,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/58394056743,https://www.airlines-manager.com/aircraft/show/99920619,1:15,6:59,320,"365,605$","328,547$","$1,026.71","$57,304.71"
EWR - MEM,58405118077,E-RNO-MEM-3,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/58405118077,https://www.airlines-manager.com/aircraft/show/99920620,3:45,9:29,320,"365,605$","328,547$","$1,026.71","$57,304.71"
EWR - MEM,58418603380,E-RNO-MEM-2,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/58418603380,https://www.airlines-manager.com/aircraft/show/99920621,10:15,15:59,320,"365,605$","328,547$","$1,026.71","$57,304.71"
EWR - MEM,58441017422,E-RNO-MEM-5 B,A319-100,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/58441017422,https://www.airlines-manager.com/aircraft/show/100096560,20:15,1:59,198,"$277,217.00","$251,001.00","$1,267.68","$43,779.24"
EWR - MEM,58443550915,E-RNO-MEM-1,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/58443550915,https://www.airlines-manager.com/aircraft/show/99920622,21:30,3:14,320,"$365,605.00","$328,547.00","$1,026.71","$57,304.71"
EWR - MEX,58394056851,E-DTW-YYZ-3,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/58394056851,https://www.airlines-manager.com/aircraft/show/92003923,1:45,11:59,320,"$642,249.00","$578,649.00","$1,808.28","$56,545.50"
EWR - MEX,58418603367,E-DTW-YYZ-6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/58418603367,https://www.airlines-manager.com/aircraft/show/104258433,10:00,20:14,216,"$488,834.00","$442,329.00","$2,047.82","$43,224.33"
EWR - MEX,58425449753,E-DTW-YYZ-4,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/58425449753,https://www.airlines-manager.com/aircraft/show/92003922,12:00,22:14,320,"$642,249.00","$578,649.00","$1,808.28","$56,545.50"
EWR - MEX,58435221295,E-DTW-YYZ-5,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/58435221295,https://www.airlines-manager.com/aircraft/show/92003921,17:15,3:29,320,"$642,249.00","$578,649.00","$1,808.28","$56,545.50"
EWR - MEX,58435221296,E-DTW-YYZ-2,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/58435221296,https://www.airlines-manager.com/aircraft/show/92003924,17:30,3:44,320,"$642,249.00","$578,649.00","$1,808.28","$56,545.50"
EWR - MEX,58441017424,E-DTW-YYZ-6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/58441017424,https://www.airlines-manager.com/aircraft/show/104258433,20:15,6:29,216,"$488,834.00","$442,329.00","$2,047.82","$43,224.33"
EWR - MEX,58446475253,E-DTW-YYZ-1,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/58446475253,https://www.airlines-manager.com/aircraft/show/92003925,23:45,9:59,304,"$614,364.00","$551,882.00","$1,815.40","$53,929.84"
EWR - MFR,58394056858,E-EUG-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/58394056858,https://www.airlines-manager.com/aircraft/show/119220436,1:45,13:29,320,"$718,830.00","$662,767.00","$2,071.15","$56,485.82"
EWR - MFR,58425449773,E-EUG-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/58425449773,https://www.airlines-manager.com/aircraft/show/119220437,12:00,23:44,320,"$718,830.00","$662,767.00","$2,071.15","$56,485.82"
EWR - MFR,58428583336,E-EUG-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/58428583336,https://www.airlines-manager.com/aircraft/show/119220438,14:00,1:44,320,"$718,830.00","$662,767.00","$2,071.15","$56,485.82"
EWR - MFR,58446475258,E-EUG-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50283408,https://www.airlines-manager.com/network/showflight/58446475258,https://www.airlines-manager.com/aircraft/show/119220435,23:45,11:29,320,"$718,830.00","$662,767.00","$2,071.15","$56,485.82"
EWR - MHT,58405118090,E-FCA-CID-1,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/58405118090,https://www.airlines-manager.com/aircraft/show/116042866,3:45,6:44,310,"$126,934.00","$107,797.00",$347.73,"$36,133.07"
EWR - MHT,58418603222,E-FCA-CID-4,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/58418603222,https://www.airlines-manager.com/aircraft/show/116042863,9:00,11:59,310,"$126,934.00","$107,797.00",$347.73,"$36,133.07"
EWR - MHT,58418603223,E-FCA-CID-3,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/58418603223,https://www.airlines-manager.com/aircraft/show/116042864,10:00,12:59,310,"$126,934.00","$107,797.00",$347.73,"$36,133.07"
EWR - MHT,58421791588,E-STL-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/58421791588,https://www.airlines-manager.com/aircraft/show/98887257,11:00,13:59,112,"$56,548.00","$44,701.00",$399.12,"$14,983.58"
EWR - MHT,58431664364,E-FCA-CID-2,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/58431664364,https://www.airlines-manager.com/aircraft/show/116042865,15:45,18:44,310,"$126,934.00","$107,797.00",$347.73,"$36,133.07"
EWR - MIA,58405117880,E-MIA-ORD-5,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/58405117880,https://www.airlines-manager.com/aircraft/show/113251309,2:30,8:44,338,"$427,042.00","$383,956.00","$1,135.96","$61,597.22"
EWR - MIA,58405117881,E-MIA-ORD-1,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/58405117881,https://www.airlines-manager.com/aircraft/show/113251305,4:00,10:14,338,"$427,042.00","$383,956.00","$1,135.96","$61,597.22"
EWR - MIA,58418603281,E-MIA-ORD-2,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/58418603281,https://www.airlines-manager.com/aircraft/show/113251306,10:00,16:14,338,"$427,042.00","$383,956.00","$1,135.96","$61,597.22"
EWR - MIA,58421791468,E-MIA-ORD-4,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/58421791468,https://www.airlines-manager.com/aircraft/show/113251308,11:00,17:14,338,"$427,042.00","$383,956.00","$1,135.96","$61,597.22"
EWR - MIA,58435221184,E-MIA-ORD-3,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/58435221184,https://www.airlines-manager.com/aircraft/show/113251307,16:30,22:44,338,"$427,042.00","$383,956.00","$1,135.96","$61,597.22"
EWR - MIA,58446475241,Corporate Jet,A320-200,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/58446475241,https://www.airlines-manager.com/aircraft/show/101412921,23:30,5:44,84,"301,134$","258,288$","$3,074.86","$41,436.58"
EWR - MKE,58405118031,E-BNA-JAX-5,ERJ-175,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/58405118031,https://www.airlines-manager.com/aircraft/show/96421247,3:15,8:14,112,"150,497$","132,505$","$1,183.08","$26,589.63"
EWR - MKE,58415054004,E-BNA-JAX-4,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/58415054004,https://www.airlines-manager.com/aircraft/show/104610407,7:30,12:29,310,"317,071$","289,186$",$932.86,"$58,030.64"
EWR - MKE,58428583356,E-BNA-JAX-3,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/58428583356,https://www.airlines-manager.com/aircraft/show/104610408,14:00,18:59,310,"317,071$","289,186$",$932.86,"$58,030.64"
EWR - MKE,58438157376,E-BNA-JAX-2,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/58438157376,https://www.airlines-manager.com/aircraft/show/104610409,19:15,0:14,310,"317,071$","289,186$",$932.86,"$58,030.64"
EWR - MKE,58446475217,E-BNA-JAX-1,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/58446475217,https://www.airlines-manager.com/aircraft/show/104610410,23:15,4:14,310,"$317,071.00","$289,186.00",$932.86,"$58,030.64"
EWR - MSN,58405117903,E-RAP-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/58405117903,https://www.airlines-manager.com/aircraft/show/116042859,2:30,7:44,310,"$332,029.00","$304,785.00",$983.18,"$58,239.17"
EWR - MSN,58415054127,E-RAP-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/58415054127,https://www.airlines-manager.com/aircraft/show/116042860,8:45,13:59,310,"$332,029.00","$304,785.00",$983.18,"$58,239.17"
EWR - MSN,58418603346,E-RAP-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/58418603346,https://www.airlines-manager.com/aircraft/show/116042861,10:00,15:14,310,"$332,029.00","$304,785.00",$983.18,"$58,239.17"
EWR - MSN,58441017563,E-RAP-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/58441017563,https://www.airlines-manager.com/aircraft/show/116042862,21:00,2:14,310,"332,029$","304,785$",$983.18,"$58,239.17"
EWR - MSO,58394056680,E-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/58394056680,https://www.airlines-manager.com/aircraft/show/107161238,1:00,10:59,310,"619,450$","574,503$","$1,853.24","$57,546.21"
EWR - MSO,58421791560,E-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/58421791560,https://www.airlines-manager.com/aircraft/show/107161240,11:00,20:59,310,"619,450$","574,503$","$1,853.24","$57,546.21"
EWR - MSO,58431664370,E-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/58431664370,https://www.airlines-manager.com/aircraft/show/86782214,15:45,1:44,112,"290,642$","260,159$","$2,322.85","$26,059.33"
EWR - MSO,58435221356,E-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/58435221356,https://www.airlines-manager.com/aircraft/show/107161239,17:45,3:44,310,"619,450$","574,503$","$1,853.24","$57,546.21"
EWR - MSO,58443550982,E-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/58443550982,https://www.airlines-manager.com/aircraft/show/107161241,22:00,7:59,310,"$619,450.00","$574,503.00","$1,853.24","$57,546.21"
EWR - MSP,58408651819,E-DEN-SLC-3,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/58408651819,https://www.airlines-manager.com/aircraft/show/86270783,5:00,10:59,310,"$376,498.00","$337,263.00","$1,087.95","$56,367.08"
EWR - MSP,58418603325,E-DEN-SLC-5,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/58418603325,https://www.airlines-manager.com/aircraft/show/90452833,10:00,15:59,310,"$376,498.00","$337,263.00","$1,087.95","$56,367.08"
EWR - MSP,58421791584,E-DEN-SLC-6 B,A319-100,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/58421791584,https://www.airlines-manager.com/aircraft/show/105223076,11:00,16:59,198,"$285,274.00","$253,843.00","$1,282.04","$42,425.01"
EWR - MSP,58438157205,E-DEN-SLC-2,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/58438157205,https://www.airlines-manager.com/aircraft/show/87153196,18:15,0:14,310,"$376,498.00","$337,263.00","$1,087.95","$56,367.08"
EWR - MSP,58441017324,E-DEN-SLC-1,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/58441017324,https://www.airlines-manager.com/aircraft/show/86270785,19:45,1:44,310,"$376,498.00","$337,263.00","$1,087.95","$56,367.08"
EWR - MSP,58441017325,E-DEN-SLC-4,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/58441017325,https://www.airlines-manager.com/aircraft/show/90452835,20:45,2:44,310,"$376,498.00","$337,263.00","$1,087.95","$56,367.08"
EWR - MSY,58405118016,E-ABQ-AUS-1,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/58405118016,https://www.airlines-manager.com/aircraft/show/90717079,3:15,9:59,310,"$416,893.00","$382,142.00","$1,232.72","$56,753.76"
EWR - MSY,58418603326,E-ABQ-AUS-3,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/58418603326,https://www.airlines-manager.com/aircraft/show/90717077,10:00,16:44,310,"$416,893.00","$382,142.00","$1,232.72","$56,753.76"
EWR - MSY,58421791546,E-ABQ-AUS-4,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/58421791546,https://www.airlines-manager.com/aircraft/show/90717076,11:00,17:44,310,"$416,893.00","$382,142.00","$1,232.72","$56,753.76"
EWR - MSY,58435221392,E-ABQ-AUS-2,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/58435221392,https://www.airlines-manager.com/aircraft/show/90717078,18:00,0:44,310,"$416,893.00","$382,142.00","$1,232.72","$56,753.76"
EWR - MSY,58441017361,E-ABQ-AUS-5,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/58441017361,https://www.airlines-manager.com/aircraft/show/95950199,20:00,2:44,310,"$416,893.00","$382,142.00","$1,232.72","$56,753.76"
EWR - MTJ,58411831108,E-MTJ-ECP-4,737-900ER,https://www.airlines-manager.com/network/showline/50761177,https://www.airlines-manager.com/network/showflight/58411831108,https://www.airlines-manager.com/aircraft/show/120706943,6:00,14:59,320,"$565,644.00","$519,609.00","$1,623.78","$57,841.45"
EWR - MTJ,58418603320,E-MTJ-ECP-1,737-900ER,https://www.airlines-manager.com/network/showline/50761177,https://www.airlines-manager.com/network/showflight/58418603320,https://www.airlines-manager.com/aircraft/show/120706946,10:00,18:59,320,"$565,644.00","$519,609.00","$1,623.78","$57,841.45"
EWR - MTJ,58431664406,E-MTJ-ECP-3,737-900ER,https://www.airlines-manager.com/network/showline/50761177,https://www.airlines-manager.com/network/showflight/58431664406,https://www.airlines-manager.com/aircraft/show/120706944,16:00,0:59,320,"$565,644.00","$519,609.00","$1,623.78","$57,841.45"
EWR - MTJ,58443550952,E-MTJ-ECP-2,737-900ER,https://www.airlines-manager.com/network/showline/50761177,https://www.airlines-manager.com/network/showflight/58443550952,https://www.airlines-manager.com/aircraft/show/120706945,21:45,6:44,320,"$565,644.00","$519,609.00","$1,623.78","$57,841.45"
EWR - MUC,58394056102,E-56C-7 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/58394056102,https://www.airlines-manager.com/aircraft/show/106721562,0:00,16:29,598,"$2,053,073.00","$1,903,002.00","$3,182.28","$115,450.07"
EWR - MUC,58421791484,E-56C-1 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/58421791484,https://www.airlines-manager.com/aircraft/show/106721556,11:00,3:29,598,"$2,053,073.00","$1,903,002.00","$3,182.28","$115,450.07"
EWR - MUC,58438157224,E-56C-7 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/58438157224,https://www.airlines-manager.com/aircraft/show/106721562,18:30,10:59,598,"$2,053,073.00","$1,903,002.00","$3,182.28","$115,450.07"
EWR - MXP,58418603370,E-84B-7 B2,777-300,https://www.airlines-manager.com/network/showline/49921908,https://www.airlines-manager.com/network/showflight/58418603370,https://www.airlines-manager.com/aircraft/show/117958701,10:00,2:29,852,"$2,701,368.00","$2,456,078.00","$2,882.72","$149,003.72"
EWR - MXP,58443550995,E-84B-3  B2,777-300,https://www.airlines-manager.com/network/showline/49921908,https://www.airlines-manager.com/network/showflight/58443550995,https://www.airlines-manager.com/aircraft/show/117958697,22:00,14:29,852,"$2,701,368.00","$2,456,078.00","$2,882.72","$149,003.72"
EWR - MYR,58405117874,E-RDM-MAF-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761175,https://www.airlines-manager.com/network/showflight/58405117874,https://www.airlines-manager.com/aircraft/show/120706939,2:30,6:44,272,"$226,333.00","$207,829.00",$764.08,"$49,093.46"
EWR - MYR,58415054058,E-RDM-MAF-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761175,https://www.airlines-manager.com/network/showflight/58415054058,https://www.airlines-manager.com/aircraft/show/120706942,8:15,12:29,272,"$226,333.00","$207,829.00",$764.08,"$49,093.46"
EWR - MYR,58418603275,E-RDM-MAF-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761175,https://www.airlines-manager.com/network/showflight/58418603275,https://www.airlines-manager.com/aircraft/show/120706940,10:00,14:14,272,"$226,333.00","$207,829.00",$764.08,"$49,093.46"
EWR - MYR,58431664352,E-RDM-MAF-5 B,A319-100,https://www.airlines-manager.com/network/showline/50761175,https://www.airlines-manager.com/network/showflight/58431664352,https://www.airlines-manager.com/aircraft/show/120707022,15:30,19:44,198,"$189,776.00","$170,655.00",$861.89,"$40,312.20"
EWR - MYR,58438157217,E-RDM-MAF-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761175,https://www.airlines-manager.com/network/showflight/58438157217,https://www.airlines-manager.com/aircraft/show/120706941,18:30,22:44,272,"$226,333.00","$207,829.00",$764.08,"$49,093.46"
EWR - NAS,58408651838,E-TUS-TPA-1,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/58408651838,https://www.airlines-manager.com/aircraft/show/98379319,5:15,11:44,310,"$397,319.00","$364,318.00","$1,175.22","$56,193.01"
EWR - NAS,58425449955,E-TUS-TPA-3,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/58425449955,https://www.airlines-manager.com/aircraft/show/98379317,13:00,19:29,310,"$397,319.00","$364,318.00","$1,175.22","$56,193.01"
EWR - NAS,58435221397,E-TUS-TPA-4,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/58435221397,https://www.airlines-manager.com/aircraft/show/98379316,18:00,0:29,310,"$397,319.00","$364,318.00","$1,175.22","$56,193.01"
EWR - NAS,58438157343,E-TUS-TPA-2,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/58438157343,https://www.airlines-manager.com/aircraft/show/98379318,19:00,1:29,310,"$397,319.00","$364,318.00","$1,175.22","$56,193.01"
EWR - NAS,58441017558,E-TUS-TPA-5,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/58441017558,https://www.airlines-manager.com/aircraft/show/98379315,21:00,3:29,295,"$380,439.00","$348,002.00","$1,179.67","$53,676.40"
EWR - NRT,58394056156,E-56A-7 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/58394056156,https://www.airlines-manager.com/aircraft/show/106813013,0:00,2:14,748,"$4,010,247.00","$3,611,545.00","$4,828.27","$1,617,109.70"
EWR - NRT,58418603386,E-56A-3 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/58418603386,https://www.airlines-manager.com/aircraft/show/106813009,10:15,12:29,748,"3,984,431$","3,594,812$","$4,805.90","$1,609,617.31"
EWR - NRT,58435221229,E-56A-1 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/58435221229,https://www.airlines-manager.com/aircraft/show/106813007,16:45,18:59,748,"3,587,406$","3,302,240$","$4,414.76","$1,478,614.93"
EWR - OAK,58394056677,E-OAK-SJC-5,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/58394056677,https://www.airlines-manager.com/aircraft/show/104717239,1:00,12:59,310,"740,394$","684,820$","$2,209.10","$57,147.71"
EWR - OAK,58418603344,E-OAK-SJC-1,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/58418603344,https://www.airlines-manager.com/aircraft/show/104717243,10:00,21:59,310,"740,394$","684,820$","$2,209.10","$57,147.71"
EWR - OAK,58425449787,E-OAK-SJC-2,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/58425449787,https://www.airlines-manager.com/aircraft/show/104717242,12:00,23:59,310,"740,394$","684,820$","$2,209.10","$57,147.71"
EWR - OAK,58428583358,E-OAK-SJC-3,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/58428583358,https://www.airlines-manager.com/aircraft/show/104717241,14:00,1:59,310,"740,394$","684,820$","$2,209.10","$57,147.71"
EWR - OAK,58446475121,E-OAK-SJC-4,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/58446475121,https://www.airlines-manager.com/aircraft/show/104717240,22:30,10:29,310,"740,394$","684,820$","$2,209.10","$57,147.71"
EWR - OKC,58394056877,E-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/58394056877,https://www.airlines-manager.com/aircraft/show/86782214,1:45,8:59,112,"218,550$","194,804$","$1,739.32","$26,931.43"
EWR - OKC,58405118089,E-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/58405118089,https://www.airlines-manager.com/aircraft/show/107161239,3:45,10:59,310,"463,503$","427,774$","$1,379.92","$59,139.26"
EWR - OKC,58415054046,E-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/58415054046,https://www.airlines-manager.com/aircraft/show/107161241,8:00,15:14,310,"$463,503.00","$427,774.00","$1,379.92","$59,139.26"
EWR - OKC,58421791558,E-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/58421791558,https://www.airlines-manager.com/aircraft/show/107161238,11:00,18:14,310,"$463,503.00","$427,774.00","$1,379.92","$59,139.26"
EWR - OKC,58441017560,E-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/58441017560,https://www.airlines-manager.com/aircraft/show/107161240,21:00,4:14,310,"$463,503.00","$427,774.00","$1,379.92","$59,139.26"
EWR - OMA,58405117901,E-BOI-PBI-1,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/58405117901,https://www.airlines-manager.com/aircraft/show/104418460,2:30,8:59,310,"$403,814.00","$370,839.00","$1,196.25","$57,198.82"
EWR - OMA,58415054003,E-BOI-PBI-4,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/58415054003,https://www.airlines-manager.com/aircraft/show/104418463,7:30,13:59,310,"$403,814.00","$370,839.00","$1,196.25","$57,198.82"
EWR - OMA,58418603343,E-BOI-PBI-3,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/58418603343,https://www.airlines-manager.com/aircraft/show/104418462,10:00,16:29,310,"$403,814.00","$370,839.00","$1,196.25","$57,198.82"
EWR - OMA,58435221270,E-BOI-PBI-2,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/58435221270,https://www.airlines-manager.com/aircraft/show/104418461,17:00,23:29,310,"$403,814.00","$370,839.00","$1,196.25","$57,198.82"
EWR - OMA,58438157352,E-BOI-PBI-5 B,A319-100,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/58438157352,https://www.airlines-manager.com/aircraft/show/110582846,19:00,1:29,198,"$305,521.00","$279,093.00","$1,409.56","$43,047.76"
EWR - ONT,58394056119,E-SMF-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/58394056119,https://www.airlines-manager.com/aircraft/show/94889153,0:00,11:29,320,"$706,819.00","$648,115.00","$2,025.36","$56,439.62"
EWR - ONT,58394056120,E-SMF-ONT-5,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/58394056120,https://www.airlines-manager.com/aircraft/show/94889154,2:00,13:29,320,"$706,819.00","$648,115.00","$2,025.36","$56,439.62"
EWR - ONT,58421791631,E-SMF-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/58421791631,https://www.airlines-manager.com/aircraft/show/94889150,11:45,23:14,320,"$706,819.00","$648,115.00","$2,025.36","$56,439.62"
EWR - ONT,58425449998,E-SMF-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/58425449998,https://www.airlines-manager.com/aircraft/show/94889151,13:15,0:44,320,"$706,819.00","$648,115.00","$2,025.36","$56,439.62"
EWR - ONT,58428583433,E-SMF-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/58428583433,https://www.airlines-manager.com/aircraft/show/94889152,14:45,2:14,306,"$687,673.00","$629,875.00","$2,058.42","$54,851.23"
EWR - ORD,58408651805,E-MIA-ORD-2,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/58408651805,https://www.airlines-manager.com/aircraft/show/113251306,5:00,9:59,338,"$338,651.00","$291,616.00",$862.77,"$58,518.26"
EWR - ORD,58418603377,E-MIA-ORD-1,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/58418603377,https://www.airlines-manager.com/aircraft/show/113251305,10:15,15:14,338,"$338,651.00","$291,616.00",$862.77,"$58,518.26"
EWR - ORD,58421791579,Corporate Jet,A320-200,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/58421791579,https://www.airlines-manager.com/aircraft/show/101412921,11:00,15:59,84,"$242,483.00","$195,607.00","$2,328.65","$39,252.24"
EWR - ORD,58421791580,E-MIA-ORD-3,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/58421791580,https://www.airlines-manager.com/aircraft/show/113251307,11:30,16:29,338,"$338,651.00","$291,616.00",$862.77,"$58,518.26"
EWR - ORD,58435221291,E-MIA-ORD-4,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/58435221291,https://www.airlines-manager.com/aircraft/show/113251308,17:15,22:14,338,"$338,651.00","$291,616.00",$862.77,"$58,518.26"
EWR - ORD,58443550910,E-MIA-ORD-5,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/58443550910,https://www.airlines-manager.com/aircraft/show/113251309,21:30,2:29,338,"$338,651.00","$291,616.00",$862.77,"$58,518.26"
EWR - ORF,58394056904,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/58394056904,https://www.airlines-manager.com/aircraft/show/88494375,2:15,5:29,320,"$154,037.00","$130,487.00",$407.77,"$40,356.80"
EWR - ORF,58421791590,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/58421791590,https://www.airlines-manager.com/aircraft/show/106104450,11:00,14:14,112,"$70,576.00","$57,974.00",$517.63,"$17,930.10"
EWR - ORF,58428583402,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/58428583402,https://www.airlines-manager.com/aircraft/show/105731236,14:15,17:29,320,"$154,037.00","$130,487.00",$407.77,"$40,356.80"
EWR - ORF,58435221372,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/58435221372,https://www.airlines-manager.com/aircraft/show/88494376,18:00,21:14,320,"$154,037.00","$130,487.00",$407.77,"$40,356.80"
EWR - ORF,58443550944,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/58443550944,https://www.airlines-manager.com/aircraft/show/88494377,21:45,0:59,320,"$154,037.00","$130,487.00",$407.77,"$40,356.80"
EWR - OSL,58405118002,E-56D-2 E,787-10,https://www.airlines-manager.com/network/showline/50072202,https://www.airlines-manager.com/network/showflight/58405118002,https://www.airlines-manager.com/aircraft/show/118644437,3:15,18:29,648,"$1,897,639.00","$1,769,490.00","$2,730.69","$116,159.08"
EWR - OSL,58408651782,E-56D-4 E,787-10,https://www.airlines-manager.com/network/showline/50072202,https://www.airlines-manager.com/network/showflight/58408651782,https://www.airlines-manager.com/aircraft/show/118644439,4:45,19:59,648,"$1,897,639.00","$1,769,490.00","$2,730.69","$116,159.08"
EWR - OSL,58441017351,E-56D-4 E,787-10,https://www.airlines-manager.com/network/showline/50072202,https://www.airlines-manager.com/network/showflight/58441017351,https://www.airlines-manager.com/aircraft/show/118644439,20:00,11:14,648,"$1,897,639.00","$1,769,490.00","$2,730.69","$116,159.08"
EWR - PBI,58394056830,E-BOI-PBI-4,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/58394056830,https://www.airlines-manager.com/aircraft/show/104418463,1:30,7:29,310,"$381,402.00","$348,961.00","$1,125.68","$58,322.17"
EWR - PBI,58405117976,E-BOI-PBI-3,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/58405117976,https://www.airlines-manager.com/aircraft/show/104418462,3:00,8:59,310,"$381,402.00","$348,961.00","$1,125.68","$58,322.17"
EWR - PBI,58421791553,E-BOI-PBI-2,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/58421791553,https://www.airlines-manager.com/aircraft/show/104418461,11:00,16:59,310,"$381,402.00","$348,961.00","$1,125.68","$58,322.17"
EWR - PBI,58425449985,E-BOI-PBI-5 B,A319-100,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/58425449985,https://www.airlines-manager.com/aircraft/show/110582846,13:00,18:59,198,"$288,654.00","$262,658.00","$1,326.56","$43,898.27"
EWR - PBI,58441017464,E-BOI-PBI-1,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/58441017464,https://www.airlines-manager.com/aircraft/show/104418460,20:30,2:29,310,"$381,402.00","$348,961.00","$1,125.68","$58,322.17"
EWR - PDX,58394056097,E-PHX-PDX-3,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/58394056097,https://www.airlines-manager.com/aircraft/show/113595213,0:00,11:29,338,"$762,256.00","$709,549.00","$2,099.26","$61,789.46"
EWR - PDX,58394056098,E-PHX-PDX-4,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/58394056098,https://www.airlines-manager.com/aircraft/show/113595214,2:00,13:29,338,"$762,256.00","$709,549.00","$2,099.26","$61,789.46"
EWR - PDX,58408651806,E-PHX-PDX-5,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/58408651806,https://www.airlines-manager.com/aircraft/show/113595215,5:00,16:29,338,"$762,256.00","$709,549.00","$2,099.26","$61,789.46"
EWR - PDX,58411831143,E-PHX-PDX-6 B,A319-100,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/58411831143,https://www.airlines-manager.com/aircraft/show/99219630,6:30,17:59,198,"$529,453.00","$484,756.00","$2,448.26","$42,213.88"
EWR - PDX,58418603378,E-PHX-PDX-1,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/58418603378,https://www.airlines-manager.com/aircraft/show/113595211,10:15,21:44,338,"$762,256.00","$709,549.00","$2,099.26","$61,789.46"
EWR - PDX,58425449831,E-PHX-PDX-2,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/58425449831,https://www.airlines-manager.com/aircraft/show/113595212,12:15,23:44,314,"$729,171.00","$677,793.00","$2,158.58","$59,024.06"
EWR - PHX,58394056095,E-PHX-PDX-1,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/58394056095,https://www.airlines-manager.com/aircraft/show/113595211,0:00,10:14,338,"$708,582.00","$651,212.00","$1,926.66","$63,636.35"
EWR - PHX,58394056096,E-PHX-PDX-2,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/58394056096,https://www.airlines-manager.com/aircraft/show/113595212,2:00,12:14,338,"708,582$","651,212$","$1,926.66","$63,636.35"
EWR - PHX,58421791610,E-PHX-PDX-3,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/58421791610,https://www.airlines-manager.com/aircraft/show/113595213,11:30,21:44,338,"708,582$","651,212$","$1,926.66","$63,636.35"
EWR - PHX,58428583268,E-PHX-PDX-4,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/58428583268,https://www.airlines-manager.com/aircraft/show/113595214,13:30,23:44,338,"708,582$","651,212$","$1,926.66","$63,636.35"
EWR - PHX,58435221185,E-PHX-PDX-5,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/58435221185,https://www.airlines-manager.com/aircraft/show/113595215,16:30,2:44,338,"708,582$","651,212$","$1,926.66","$63,636.35"
EWR - PHX,58435221186,E-PHX-PDX-6 B,A319-100,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/58435221186,https://www.airlines-manager.com/aircraft/show/99219630,18:00,4:29,198,"492,472$","444,357$","$2,244.23","$42,387.00"
EWR - PIT,58405118167,E-STL-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/58405118167,https://www.airlines-manager.com/aircraft/show/98887257,4:15,7:29,112,"77,741$","63,381$",$565.90,"$19,602.37"
EWR - PIT,58411831134,E-STL-PIT-3,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/58411831134,https://www.airlines-manager.com/aircraft/show/115400546,6:30,9:44,338,"183,237$","160,625$",$475.22,"$49,677.84"
EWR - PIT,58418603284,E-STL-PIT-2,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/58418603284,https://www.airlines-manager.com/aircraft/show/115400547,10:00,13:14,338,"183,237$","160,625$",$475.22,"$49,677.84"
EWR - PIT,58425449881,E-STL-PIT-4,A321neo-LR,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/58425449881,https://www.airlines-manager.com/aircraft/show/103406580,13:00,16:14,338,"$185,020.00","$162,244.00",$480.01,"$50,178.56"
EWR - PIT,58431664338,E-STL-PIT-1,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/58431664338,https://www.airlines-manager.com/aircraft/show/115400548,15:30,18:44,338,"$183,237.00","$160,625.00",$475.22,"$49,677.84"
EWR - PIT,58438157409,E-STL-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/58438157409,https://www.airlines-manager.com/aircraft/show/98887257,19:30,22:44,112,"$77,741.00","$63,381.00",$565.90,"$19,602.37"
EWR - PRG,58418603387,E-84B-2  B2,777-300,https://www.airlines-manager.com/network/showline/44327652,https://www.airlines-manager.com/network/showflight/58418603387,https://www.airlines-manager.com/aircraft/show/117958696,10:15,2:59,852,"$2,755,289.00","$2,511,807.00","$2,948.13","$150,107.99"
EWR - PRG,58443551032,E-84B-5  B2,777-300,https://www.airlines-manager.com/network/showline/44327652,https://www.airlines-manager.com/network/showflight/58443551032,https://www.airlines-manager.com/aircraft/show/117958699,22:15,14:59,852,"$2,755,289.00","$2,511,807.00","$2,948.13","$150,107.99"
EWR - PSP,58394056418,E-PSP-FAT-4,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/58394056418,https://www.airlines-manager.com/aircraft/show/116672810,0:30,11:44,338,"$761,610.00","$714,146.00","$2,112.86","$63,573.83"
EWR - PSP,58421791471,E-PSP-FAT-1,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/58421791471,https://www.airlines-manager.com/aircraft/show/119220450,11:00,22:14,338,"$761,610.00","$714,146.00","$2,112.86","$63,573.83"
EWR - PSP,58425449872,E-PSP-FAT-2,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/58425449872,https://www.airlines-manager.com/aircraft/show/119220451,13:00,0:14,338,"$761,610.00","$714,146.00","$2,112.86","$63,573.83"
EWR - PSP,58446475102,E-PSP-FAT-3,A321neo,https://www.airlines-manager.com/network/showline/50283402,https://www.airlines-manager.com/network/showflight/58446475102,https://www.airlines-manager.com/aircraft/show/119220452,22:30,9:44,338,"$761,610.00","$714,146.00","$2,112.86","$63,573.83"
EWR - PVD,58394056832,E-TUL-DSM-4,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/58394056832,https://www.airlines-manager.com/aircraft/show/110044466,1:30,4:14,310,"$99,677.00","$82,042.00",$264.65,"$30,015.37"
EWR - PVD,58418603240,E-TUL-DSM-3,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/58418603240,https://www.airlines-manager.com/aircraft/show/110044465,9:15,11:59,310,"$99,677.00","$82,042.00",$264.65,"$30,015.37"
EWR - PVD,58421791566,E-TUL-DSM-2,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/58421791566,https://www.airlines-manager.com/aircraft/show/110044464,11:00,13:44,310,"$99,677.00","$82,042.00",$264.65,"$30,015.37"
EWR - PVD,58441017328,E-TUL-DSM-1,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/58441017328,https://www.airlines-manager.com/aircraft/show/110044463,19:45,22:29,310,"$99,677.00","$82,042.00",$264.65,"$30,015.37"
EWR - PVD,58446475226,E-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/58446475226,https://www.airlines-manager.com/aircraft/show/110113039,23:15,1:59,112,"$42,748.00","$31,890.00",$284.73,"$11,667.07"
EWR - PWM,58408651770,E-TUL-DSM-1,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/58408651770,https://www.airlines-manager.com/aircraft/show/110044463,4:30,7:44,310,"$154,750.00","$135,700.00",$437.74,"$41,969.07"
EWR - PWM,58415054133,E-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/58415054133,https://www.airlines-manager.com/aircraft/show/110113039,8:45,11:59,112,"$70,304.00","$58,378.00",$521.23,"$18,055.05"
EWR - PWM,58421791567,E-TUL-DSM-4,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/58421791567,https://www.airlines-manager.com/aircraft/show/110044466,11:00,14:14,310,"$154,750.00","$135,700.00",$437.74,"$41,969.07"
EWR - PWM,58435221409,E-TUL-DSM-3,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/58435221409,https://www.airlines-manager.com/aircraft/show/110044465,18:00,21:14,310,"$154,750.00","$135,700.00",$437.74,"$41,969.07"
EWR - PWM,58441017329,E-TUL-DSM-2,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/58441017329,https://www.airlines-manager.com/aircraft/show/110044464,19:45,22:59,306,"$153,582.00","$134,563.00",$439.75,"$41,617.42"
EWR - RAP,58394056138,E-RAP-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/58394056138,https://www.airlines-manager.com/aircraft/show/116042860,0:00,7:59,310,"$498,032.00","$461,016.00","$1,487.15","$57,747.31"
EWR - RAP,58394056139,E-RAP-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/58394056139,https://www.airlines-manager.com/aircraft/show/116042861,1:15,9:14,310,"$498,032.00","$461,016.00","$1,487.15","$57,747.31"
EWR - RAP,58425449976,E-RAP-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/58425449976,https://www.airlines-manager.com/aircraft/show/116042862,13:00,20:59,310,"$498,032.00","$461,016.00","$1,487.15","$57,747.31"
EWR - RAP,58438157245,E-RAP-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/58438157245,https://www.airlines-manager.com/aircraft/show/116042859,18:30,2:29,310,"$498,032.00","$461,016.00","$1,487.15","$57,747.31"
EWR - RDM,58411831147,E-RDM-MAF-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761172,https://www.airlines-manager.com/network/showflight/58411831147,https://www.airlines-manager.com/aircraft/show/120706939,6:45,17:59,272,"$631,540.00","$595,037.00","$2,187.64","$52,970.65"
EWR - RDM,58425449837,E-RDM-MAF-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761172,https://www.airlines-manager.com/network/showflight/58425449837,https://www.airlines-manager.com/aircraft/show/120706942,12:30,23:44,272,"$631,540.00","$595,037.00","$2,187.64","$52,970.65"
EWR - RDM,58428583394,E-RDM-MAF-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761172,https://www.airlines-manager.com/network/showflight/58428583394,https://www.airlines-manager.com/aircraft/show/120706940,14:15,1:29,272,"$631,540.00","$595,037.00","$2,187.64","$52,970.65"
EWR - RDM,58441017338,E-RDM-MAF-5 B,A319-100,https://www.airlines-manager.com/network/showline/50761172,https://www.airlines-manager.com/network/showflight/58441017338,https://www.airlines-manager.com/aircraft/show/120707022,19:45,6:59,198,"$524,669.00","$485,507.00","$2,452.06","$43,220.21"
EWR - RDM,58446475131,E-RDM-MAF-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50761172,https://www.airlines-manager.com/network/showflight/58446475131,https://www.airlines-manager.com/aircraft/show/120706941,22:45,9:59,272,"$631,540.00","$595,037.00","$2,187.64","$52,970.65"
EWR - RDU,58394056749,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/58394056749,https://www.airlines-manager.com/aircraft/show/105731236,1:15,4:59,320,"$201,568.00","$173,600.00",$542.50,"$46,500.00"
EWR - RDU,58408651808,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/58408651808,https://www.airlines-manager.com/aircraft/show/88494376,5:00,8:44,320,"201,568$","173,600$",$542.50,"$46,500.00"
EWR - RDU,58421791499,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/58421791499,https://www.airlines-manager.com/aircraft/show/88494377,11:00,14:44,320,"201,568$","173,600$",$542.50,"$46,500.00"
EWR - RDU,58431664342,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/58431664342,https://www.airlines-manager.com/aircraft/show/88494375,15:30,19:14,320,"201,568$","173,600$",$542.50,"$46,500.00"
EWR - RDU,58443550999,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/58443550999,https://www.airlines-manager.com/aircraft/show/106104450,22:00,1:44,112,"93,430$","78,233$",$698.51,"$20,955.27"
EWR - RIC,58394056630,E-IND-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/58394056630,https://www.airlines-manager.com/aircraft/show/88494377,1:00,4:14,320,"139,977$","116,556$",$364.24,"$36,048.25"
EWR - RIC,58408651848,E-IND-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/58408651848,https://www.airlines-manager.com/aircraft/show/88494375,5:30,8:44,320,"$139,977.00","$116,556.00",$364.24,"$36,048.25"
EWR - RIC,58428583414,E-IND-RDU-5,ERJ-175,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/58428583414,https://www.airlines-manager.com/aircraft/show/106104450,14:15,17:29,112,"$62,980.00","$50,463.00",$450.56,"$15,607.11"
EWR - RIC,58435221325,E-IND-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/58435221325,https://www.airlines-manager.com/aircraft/show/105731236,17:30,20:44,320,"$139,977.00","$116,556.00",$364.24,"$36,048.25"
EWR - RIC,58443550888,E-IND-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/58443550888,https://www.airlines-manager.com/aircraft/show/88494376,21:15,0:29,320,"$139,977.00","$116,556.00",$364.24,"$36,048.25"
EWR - RNO,58394056898,E-RNO-MEM-5 B,A319-100,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/58394056898,https://www.airlines-manager.com/aircraft/show/100096560,2:00,13:29,198,"$532,878.00","$491,091.00","$2,480.26","$42,765.54"
EWR - RNO,58418603381,E-RNO-MEM-1,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/58418603381,https://www.airlines-manager.com/aircraft/show/99920622,10:15,21:29,320,"$707,261.00","$650,301.00","$2,032.19","$57,890.30"
EWR - RNO,58428583320,E-RNO-MEM-4,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/58428583320,https://www.airlines-manager.com/aircraft/show/99920619,14:00,1:14,320,"$707,261.00","$650,301.00","$2,032.19","$57,890.30"
EWR - RNO,58435221191,E-RNO-MEM-3,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/58435221191,https://www.airlines-manager.com/aircraft/show/99920620,16:30,3:44,320,"$707,261.00","$650,301.00","$2,032.19","$57,890.30"
EWR - RNO,58443551011,E-RNO-MEM-2,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/58443551011,https://www.airlines-manager.com/aircraft/show/99920621,22:15,9:29,320,"$707,261.00","$650,301.00","$2,032.19","$57,890.30"
EWR - ROC,58418603355,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/58418603355,https://www.airlines-manager.com/aircraft/show/119220545,10:00,12:59,310,"$135,766.00","$116,756.00",$376.63,"$39,136.09"
EWR - ROC,58428583421,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/58428583421,https://www.airlines-manager.com/aircraft/show/119220544,14:30,17:29,310,"$135,766.00","$116,756.00",$376.63,"$39,136.09"
EWR - ROC,58438157210,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/58438157210,https://www.airlines-manager.com/aircraft/show/119220543,18:15,21:14,310,"$135,766.00","$116,756.00",$376.63,"$39,136.09"
EWR - ROC,58446475164,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283477,https://www.airlines-manager.com/network/showflight/58446475164,https://www.airlines-manager.com/aircraft/show/119220542,22:45,1:44,310,"$135,766.00","$116,756.00",$376.63,"$39,136.09"
EWR - RSW,58405118005,E-RNO-MEM-1,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/58405118005,https://www.airlines-manager.com/aircraft/show/99920622,3:15,9:29,320,"$391,203.00","$352,433.00","$1,101.35","$56,540.05"
EWR - RSW,58411831178,E-RNO-MEM-4,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/58411831178,https://www.airlines-manager.com/aircraft/show/99920619,7:00,13:14,320,"$391,203.00","$352,433.00","$1,101.35","$56,540.05"
EWR - RSW,58418603379,E-RNO-MEM-3,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/58418603379,https://www.airlines-manager.com/aircraft/show/99920620,10:15,16:29,320,"$391,203.00","$352,433.00","$1,101.35","$56,540.05"
EWR - RSW,58428583381,E-RNO-MEM-5 B,A319-100,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/58428583381,https://www.airlines-manager.com/aircraft/show/100096560,14:00,20:14,198,"$296,403.00","$268,844.00","$1,357.80","$43,130.05"
EWR - RSW,58431664391,E-RNO-MEM-2,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/58431664391,https://www.airlines-manager.com/aircraft/show/99920621,16:00,22:14,320,"$391,203.00","$352,433.00","$1,101.35","$56,540.05"
EWR - SAN,58394056094,E-MIA-ORD-3,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/58394056094,https://www.airlines-manager.com/aircraft/show/113251307,0:00,11:29,338,"$780,372.00","$728,076.00","$2,154.07","$63,402.84"
EWR - SAN,58418603282,E-MIA-ORD-5,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/58418603282,https://www.airlines-manager.com/aircraft/show/113251309,10:00,21:29,338,"$780,372.00","$728,076.00","$2,154.07","$63,402.84"
EWR - SAN,58431664323,E-MIA-ORD-1,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/58431664323,https://www.airlines-manager.com/aircraft/show/113251305,15:15,2:44,338,"$780,372.00","$728,076.00","$2,154.07","$63,402.84"
EWR - SAN,58431664324,E-MIA-ORD-2,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/58431664324,https://www.airlines-manager.com/aircraft/show/113251306,16:15,3:44,338,"$780,372.00","$728,076.00","$2,154.07","$63,402.84"
EWR - SAN,58443551001,E-MIA-ORD-4,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/58443551001,https://www.airlines-manager.com/aircraft/show/113251308,22:15,9:44,338,"$780,372.00","$728,076.00","$2,154.07","$63,402.84"
EWR - SAT,58394056852,E-ELP-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/58394056852,https://www.airlines-manager.com/aircraft/show/103365576,1:45,9:59,320,"$520,586.00","$476,792.00","$1,489.98","$57,909.96"
EWR - SAT,58418603305,E-ELP-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/58418603305,https://www.airlines-manager.com/aircraft/show/103365577,10:00,18:14,320,"$520,586.00","$476,792.00","$1,489.98","$57,909.96"
EWR - SAT,58425449803,E-ELP-SAT-5 B,A319-100,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/58425449803,https://www.airlines-manager.com/aircraft/show/110582847,12:00,20:14,198,"$392,735.00","$361,031.00","$1,823.39","$43,849.92"
EWR - SAT,58438157390,E-ELP-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/58438157390,https://www.airlines-manager.com/aircraft/show/103365578,19:30,3:44,320,"$520,586.00","$476,792.00","$1,489.98","$57,909.96"
EWR - SAT,58443550916,E-ELP-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/58443550916,https://www.airlines-manager.com/aircraft/show/103365575,21:30,5:44,320,"$520,586.00","$476,792.00","$1,489.98","$57,909.96"
EWR - SAV,58408651774,E-COS-ICT-5,ERJ-175,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/58408651774,https://www.airlines-manager.com/aircraft/show/108466265,4:30,9:29,112,"146,872$","129,955$","$1,160.31","$26,077.93"
EWR - SAV,58418603220,E-COS-ICT-3,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/58418603220,https://www.airlines-manager.com/aircraft/show/108834810,9:00,13:59,310,"308,902$","282,767$",$912.15,"$56,742.54"
EWR - SAV,58421791565,E-COS-ICT-2,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/58421791565,https://www.airlines-manager.com/aircraft/show/108834809,11:00,15:59,310,"308,902$","282,767$",$912.15,"$56,742.54"
EWR - SAV,58435221408,E-COS-ICT-1,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/58435221408,https://www.airlines-manager.com/aircraft/show/108834808,18:00,22:59,310,"308,902$","282,767$",$912.15,"$56,742.54"
EWR - SAV,58441017366,E-COS-ICT-4,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/58441017366,https://www.airlines-manager.com/aircraft/show/108834811,20:00,0:59,265,"282,675$","257,414$",$971.37,"$51,654.98"
EWR - SDF,58405118111,E-LIT-FAR-2,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/58405118111,https://www.airlines-manager.com/aircraft/show/86270787,4:00,8:29,310,"296,909$","269,816$",$870.37,"$60,182.01"
EWR - SDF,58415054068,E-LIT-FAR-1,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/58415054068,https://www.airlines-manager.com/aircraft/show/90452834,8:15,12:44,310,"296,909$","269,816$",$870.37,"$60,182.01"
EWR - SDF,58431664267,E-LIT-FAR-4,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/58431664267,https://www.airlines-manager.com/aircraft/show/86270784,15:00,19:29,310,"296,909$","269,816$",$870.37,"$60,182.01"
EWR - SDF,58438157204,E-LIT-FAR-3,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/58438157204,https://www.airlines-manager.com/aircraft/show/86270786,18:15,22:44,310,"$296,909.00","$269,816.00",$870.37,"$60,182.01"
EWR - SEA,58394056621,E-DFW-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/58394056621,https://www.airlines-manager.com/aircraft/show/86238752,1:00,12:14,320,"$714,253.00","$645,184.00","$2,016.20","$57,434.78"
EWR - SEA,58405117961,E-DFW-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/58405117961,https://www.airlines-manager.com/aircraft/show/90489726,3:00,14:14,320,"$714,253.00","$645,184.00","$2,016.20","$57,434.78"
EWR - SEA,58421791495,E-DFW-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/58421791495,https://www.airlines-manager.com/aircraft/show/86238753,11:00,22:14,320,"$714,253.00","$645,184.00","$2,016.20","$57,434.78"
EWR - SEA,58431664251,E-DFW-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/58431664251,https://www.airlines-manager.com/aircraft/show/90489724,15:00,2:14,320,"$714,253.00","$645,184.00","$2,016.20","$57,434.78"
EWR - SEA,58446475138,E-DFW-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/58446475138,https://www.airlines-manager.com/aircraft/show/90489725,22:45,9:59,320,"$714,253.00","$645,184.00","$2,016.20","$57,434.78"
EWR - SEA,58446475139,E-DFW-ATL-6 B,A319-100,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/58446475139,https://www.airlines-manager.com/aircraft/show/105222360,23:30,10:59,198,"$537,918.00","$488,040.00","$2,464.85","$42,499.85"
EWR - SFO,58394056104,E-SFO-LAX-1,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/58394056104,https://www.airlines-manager.com/aircraft/show/83716137,0:00,11:44,400,"$950,914.00","$866,305.00","$2,165.76","$73,832.81"
EWR - SFO,58394056105,E-SFO-LAX-2,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/58394056105,https://www.airlines-manager.com/aircraft/show/89233028,1:30,13:14,400,"$950,914.00","$866,305.00","$2,165.76","$73,832.81"
EWR - SFO,58405117956,E-SFO-LAX-3,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/58405117956,https://www.airlines-manager.com/aircraft/show/89233029,3:00,14:44,400,"$950,914.00","$866,305.00","$2,165.76","$73,832.81"
EWR - SFO,58425449833,E-SFO-LAX-4,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/58425449833,https://www.airlines-manager.com/aircraft/show/89233030,12:15,23:59,400,"$950,914.00","$866,305.00","$2,165.76","$73,832.81"
EWR - SFO,58428583397,E-SFO-LAX-5,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/58428583397,https://www.airlines-manager.com/aircraft/show/89233027,14:15,1:59,400,"$950,914.00","$866,305.00","$2,165.76","$73,832.81"
EWR - SJC,58394056134,E-OAK-SJC-2,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/58394056134,https://www.airlines-manager.com/aircraft/show/104717242,0:00,11:59,310,"$737,403.00","$681,453.00","$2,198.24","$56,866.73"
EWR - SJC,58394056135,E-OAK-SJC-3,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/58394056135,https://www.airlines-manager.com/aircraft/show/104717241,2:00,13:59,310,"$737,403.00","$681,453.00","$2,198.24","$56,866.73"
EWR - SJC,58421791442,E-OAK-SJC-4,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/58421791442,https://www.airlines-manager.com/aircraft/show/104717240,10:30,22:29,310,"$737,403.00","$681,453.00","$2,198.24","$56,866.73"
EWR - SJC,58425449967,E-OAK-SJC-5,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/58425449967,https://www.airlines-manager.com/aircraft/show/104717239,13:00,0:59,310,"$737,403.00","$681,453.00","$2,198.24","$56,866.73"
EWR - SJC,58443550980,E-OAK-SJC-1,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/58443550980,https://www.airlines-manager.com/aircraft/show/104717243,22:00,9:59,310,"$737,403.00","$681,453.00","$2,198.24","$56,866.73"
EWR - SJU,58394056434,E-CUN-SJU-1,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/58394056434,https://www.airlines-manager.com/aircraft/show/106581304,0:30,8:44,320,"$529,586.00","$483,689.00","$1,511.53","$58,747.65"
EWR - SJU,58394056438,E-CUN-SJU-4,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/58394056438,https://www.airlines-manager.com/aircraft/show/106581307,2:00,10:14,320,"$529,586.00","$483,689.00","$1,511.53","$58,747.65"
EWR - SJU,58411831175,E-CUN-SJU-5,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/58411831175,https://www.airlines-manager.com/aircraft/show/86238754,7:00,15:14,320,"$529,586.00","$483,689.00","$1,511.53","$58,747.65"
EWR - SJU,58425449912,E-CUN-SJU-3,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/58425449912,https://www.airlines-manager.com/aircraft/show/106581306,13:00,21:14,320,"$529,586.00","$483,689.00","$1,511.53","$58,747.65"
EWR - SJU,58428583416,E-CUN-SJU-2,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/58428583416,https://www.airlines-manager.com/aircraft/show/106581305,14:30,22:44,320,"$529,586.00","$483,689.00","$1,511.53","$58,747.65"
EWR - SLC,58394056381,E-DEN-SLC-2,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/58394056381,https://www.airlines-manager.com/aircraft/show/87153196,0:15,9:59,310,"$615,075.00","$563,146.00","$1,816.60","$57,857.47"
EWR - SLC,58394056384,E-DEN-SLC-5,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/58394056384,https://www.airlines-manager.com/aircraft/show/90452833,0:15,9:59,310,"$615,075.00","$563,146.00","$1,816.60","$57,857.47"
EWR - SLC,58394056386,E-DEN-SLC-6 B,A319-100,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/58394056386,https://www.airlines-manager.com/aircraft/show/105223076,1:15,10:59,198,"$462,434.00","$420,807.00","$2,125.29","$43,233.60"
EWR - SLC,58418603322,E-DEN-SLC-1,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/58418603322,https://www.airlines-manager.com/aircraft/show/86270785,10:00,19:44,310,"$615,075.00","$563,146.00","$1,816.60","$57,857.47"
EWR - SLC,58421791545,E-DEN-SLC-4,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/58421791545,https://www.airlines-manager.com/aircraft/show/90452835,11:00,20:44,310,"$615,075.00","$563,146.00","$1,816.60","$57,857.47"
EWR - SLC,58438157368,E-DEN-SLC-3,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/58438157368,https://www.airlines-manager.com/aircraft/show/86270783,19:15,4:59,310,"$615,075.00","$563,146.00","$1,816.60","$57,857.47"
EWR - SMF,58394056117,E-SMF-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/58394056117,https://www.airlines-manager.com/aircraft/show/94889150,0:00,11:44,320,"$721,950.00","$663,503.00","$2,073.45","$56,548.55"
EWR - SMF,58394056118,E-SMF-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/58394056118,https://www.airlines-manager.com/aircraft/show/94889151,1:30,13:14,320,"$721,950.00","$663,503.00","$2,073.45","$56,548.55"
EWR - SMF,58405117963,E-SMF-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/58405117963,https://www.airlines-manager.com/aircraft/show/94889152,3:00,14:44,320,"$721,950.00","$663,503.00","$2,073.45","$56,548.55"
EWR - SMF,58421791612,E-SMF-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/58421791612,https://www.airlines-manager.com/aircraft/show/94889153,11:30,23:14,320,"$721,950.00","$663,503.00","$2,073.45","$56,548.55"
EWR - SMF,58428583270,E-SMF-ONT-5,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/58428583270,https://www.airlines-manager.com/aircraft/show/94889154,13:30,1:14,320,"$721,950.00","$663,503.00","$2,073.45","$56,548.55"
EWR - SNN,58421791452,E-56B-6 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/58421791452,https://www.airlines-manager.com/aircraft/show/94521248,10:45,23:59,748,"$2,092,994.00","$1,909,733.00","$2,553.12","$144,312.32"
EWR - SNN,58438157312,E-56B-5 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/58438157312,https://www.airlines-manager.com/aircraft/show/94521253,18:45,7:59,748,"$2,006,801.00","$1,849,627.00","$2,472.76","$139,770.30"
EWR - SRQ,58394056578,E-MTJ-ECP-1,737-900ER,https://www.airlines-manager.com/network/showline/50761179,https://www.airlines-manager.com/network/showflight/58394056578,https://www.airlines-manager.com/aircraft/show/120706946,0:45,6:44,320,"$383,521.00","$348,843.00","$1,090.13","$58,302.45"
EWR - SRQ,58418603318,E-MTJ-ECP-3,737-900ER,https://www.airlines-manager.com/network/showline/50761179,https://www.airlines-manager.com/network/showflight/58418603318,https://www.airlines-manager.com/aircraft/show/120706944,10:00,15:59,320,"$383,521.00","$348,843.00","$1,090.13","$58,302.45"
EWR - SRQ,58431664355,E-MTJ-ECP-2,737-900ER,https://www.airlines-manager.com/network/showline/50761179,https://www.airlines-manager.com/network/showflight/58431664355,https://www.airlines-manager.com/aircraft/show/120706945,15:45,21:44,320,"$383,521.00","$348,843.00","$1,090.13","$58,302.45"
EWR - SRQ,58441017489,E-MTJ-ECP-4,737-900ER,https://www.airlines-manager.com/network/showline/50761179,https://www.airlines-manager.com/network/showflight/58441017489,https://www.airlines-manager.com/aircraft/show/120706943,20:45,2:44,300,"$368,883.00","$334,762.00","$1,115.87","$55,949.08"
EWR - STL,58394056605,E-STL-PIT-3,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/58394056605,https://www.airlines-manager.com/aircraft/show/115400546,1:00,6:29,338,"$375,214.00","$344,219.00","$1,018.40","$62,775.50"
EWR - STL,58405118131,E-STL-PIT-2,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/58405118131,https://www.airlines-manager.com/aircraft/show/115400547,4:15,9:44,338,"$375,214.00","$344,219.00","$1,018.40","$62,775.50"
EWR - STL,58418603285,E-STL-PIT-1,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/58418603285,https://www.airlines-manager.com/aircraft/show/115400548,10:00,15:29,338,"$375,214.00","$344,219.00","$1,018.40","$62,775.50"
EWR - STL,58428583392,E-STL-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/58428583392,https://www.airlines-manager.com/aircraft/show/98887257,14:00,19:29,112,"$164,034.00","$143,267.00","$1,279.17","$26,127.72"
EWR - STL,58431664434,E-STL-PIT-4,A321neo-LR,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/58431664434,https://www.airlines-manager.com/aircraft/show/103406580,16:15,21:44,338,"$378,569.00","$347,125.00","$1,027.00","$63,305.47"
EWR - STL,58446475171,E-STL-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/58446475171,https://www.airlines-manager.com/aircraft/show/98887257,22:45,4:14,112,"$164,034.00","$143,267.00","$1,279.17","$26,127.72"
EWR - SYR,58394056869,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/58394056869,https://www.airlines-manager.com/aircraft/show/119220542,1:45,4:44,310,"$125,406.00","$106,802.00",$344.52,"$35,799.55"
EWR - SYR,58425449977,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/58425449977,https://www.airlines-manager.com/aircraft/show/119220545,13:00,15:59,310,"$125,406.00","$106,802.00",$344.52,"$35,799.55"
EWR - SYR,58435221333,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/58435221333,https://www.airlines-manager.com/aircraft/show/119220544,17:30,20:29,310,"$125,406.00","$106,802.00",$344.52,"$35,799.55"
EWR - SYR,58443550901,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283478,https://www.airlines-manager.com/network/showflight/58443550901,https://www.airlines-manager.com/aircraft/show/119220543,21:15,0:14,310,"$125,406.00","$106,802.00",$344.52,"$35,799.55"
EWR - TLV,58405117988,E-TLV-2 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/58405117988,https://www.airlines-manager.com/aircraft/show/89124073,3:00,1:29,884,"$3,678,253.00","$3,358,904.00","$3,799.67","$149,395.29"
EWR - TLV,58441017569,E-TLV-1 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/58441017569,https://www.airlines-manager.com/aircraft/show/93429385,21:00,19:29,884,"$3,678,253.00","$3,358,904.00","$3,799.67","$149,395.29"
EWR - TPA,58408651878,E-TUS-TPA-3,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/58408651878,https://www.airlines-manager.com/aircraft/show/98379317,5:45,11:44,310,"$378,272.00","$343,091.00","$1,106.75","$57,341.11"
EWR - TPA,58421791451,E-TUS-TPA-4,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/58421791451,https://www.airlines-manager.com/aircraft/show/98379316,10:45,16:44,310,"$378,272.00","$343,091.00","$1,106.75","$57,341.11"
EWR - TPA,58425449956,E-TUS-TPA-2,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/58425449956,https://www.airlines-manager.com/aircraft/show/98379318,13:00,18:59,310,"$378,272.00","$343,091.00","$1,106.75","$57,341.11"
EWR - TPA,58431664276,E-TUS-TPA-5,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/58431664276,https://www.airlines-manager.com/aircraft/show/98379315,15:00,20:59,310,"$378,272.00","$343,091.00","$1,106.75","$57,341.11"
EWR - TPA,58446475214,E-TUS-TPA-1,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/58446475214,https://www.airlines-manager.com/aircraft/show/98379319,23:15,5:14,310,"$378,272.00","$343,091.00","$1,106.75","$57,341.11"
EWR - TUL,58394056867,E-TUL-DSM-3,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/58394056867,https://www.airlines-manager.com/aircraft/show/110044465,1:45,8:29,310,"429,019$","394,918$","$1,273.93","$58,651.19"
EWR - TUL,58405118056,E-TUL-DSM-2,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/58405118056,https://www.airlines-manager.com/aircraft/show/110044464,3:30,10:14,310,"429,019$","394,918$","$1,273.93","$58,651.19"
EWR - TUL,58425449972,E-TUL-DSM-1,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/58425449972,https://www.airlines-manager.com/aircraft/show/110044463,13:00,19:44,310,"429,019$","394,918$","$1,273.93","$58,651.19"
EWR - TUL,58435221209,E-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/58435221209,https://www.airlines-manager.com/aircraft/show/110113039,16:30,23:14,112,"201,745$","179,168$","$1,599.71","$26,609.11"
EWR - TUL,58438157303,E-TUL-DSM-4,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/58438157303,https://www.airlines-manager.com/aircraft/show/110044466,18:45,1:29,310,"$429,019.00","$394,918.00","$1,273.93","$58,651.19"
EWR - TUS,58394056473,E-TUS-TPA-4,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/58394056473,https://www.airlines-manager.com/aircraft/show/98379316,0:30,10:44,310,"$642,747.00","$594,653.00","$1,918.24","$58,109.41"
EWR - TUS,58394056474,E-TUS-TPA-2,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/58394056474,https://www.airlines-manager.com/aircraft/show/98379318,1:30,11:44,310,"$642,747.00","$594,653.00","$1,918.24","$58,109.41"
EWR - TUS,58405118052,E-TUS-TPA-5,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/58405118052,https://www.airlines-manager.com/aircraft/show/98379315,3:30,13:44,310,"$642,747.00","$594,653.00","$1,918.24","$58,109.41"
EWR - TUS,58425449957,E-TUS-TPA-1,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/58425449957,https://www.airlines-manager.com/aircraft/show/98379319,13:00,23:14,310,"$642,747.00","$594,653.00","$1,918.24","$58,109.41"
EWR - TUS,58438157400,E-TUS-TPA-3,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/58438157400,https://www.airlines-manager.com/aircraft/show/98379317,19:30,5:44,310,"$642,747.00","$594,653.00","$1,918.24","$58,109.41"
EWR - TYS,58405117981,E-TYS-GSO-2,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/58405117981,https://www.airlines-manager.com/aircraft/show/119220543,3:00,7:29,310,"$292,223.00","$267,372.00",$862.49,"$59,636.88"
EWR - TYS,58418603352,E-TYS-GSO-1,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/58418603352,https://www.airlines-manager.com/aircraft/show/119220542,10:00,14:29,310,"$292,223.00","$267,372.00",$862.49,"$59,636.88"
EWR - TYS,58438157307,E-TYS-GSO-4,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/58438157307,https://www.airlines-manager.com/aircraft/show/119220545,18:45,23:14,310,"$292,223.00","$267,372.00",$862.49,"$59,636.88"
EWR - TYS,58446475218,E-TYS-GSO-3,A321-200,https://www.airlines-manager.com/network/showline/50283469,https://www.airlines-manager.com/network/showflight/58446475218,https://www.airlines-manager.com/aircraft/show/119220544,23:15,3:44,310,"$292,223.00","$267,372.00",$862.49,"$59,636.88"
EWR - VCE,58405117990,E-84B-3  B2,777-300,https://www.airlines-manager.com/network/showline/49921914,https://www.airlines-manager.com/network/showflight/58405117990,https://www.airlines-manager.com/aircraft/show/117958697,3:00,20:14,852,"$2,731,076.00","$2,490,686.00","$2,923.34","$144,527.23"
EWR - VCE,58431664300,E-84B-6  B2,777-300,https://www.airlines-manager.com/network/showline/49921914,https://www.airlines-manager.com/network/showflight/58431664300,https://www.airlines-manager.com/aircraft/show/117958700,15:00,8:14,828,"$2,667,060.00","$2,434,259.00","$2,939.93","$141,252.94"
EWR - YEG,58394056332,E-YEG-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/58394056332,https://www.airlines-manager.com/aircraft/show/98936170,0:15,10:14,320,"$637,544.00","$585,150.00","$1,828.59","$58,612.69"
EWR - YEG,58394056337,E-YEG-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/58394056337,https://www.airlines-manager.com/aircraft/show/98936171,2:15,12:14,320,"$637,544.00","$585,150.00","$1,828.59","$58,612.69"
EWR - YEG,58421791506,E-YEG-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/58421791506,https://www.airlines-manager.com/aircraft/show/98936168,11:00,20:59,320,"637,544$","585,150$","$1,828.59","$58,612.69"
EWR - YEG,58425449840,E-YEG-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/58425449840,https://www.airlines-manager.com/aircraft/show/98936169,12:30,22:29,320,"637,544$","585,150$","$1,828.59","$58,612.69"
EWR - YEG,58443550994,E-YEG-BFF-5 B,A319-100,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/58443550994,https://www.airlines-manager.com/aircraft/show/115493369,22:00,7:59,198,"476,110$","437,952$","$2,211.88","$43,868.31"
EWR - YOW,58418603253,E-CUN-SJU-1,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/58418603253,https://www.airlines-manager.com/aircraft/show/106581304,9:30,12:59,320,"171,373$","146,042$",$456.38,"$41,925.93"
EWR - YOW,58421791511,E-CUN-SJU-4,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/58421791511,https://www.airlines-manager.com/aircraft/show/106581307,11:00,14:29,320,"171,373$","146,042$",$456.38,"$41,925.93"
EWR - YOW,58438157264,E-CUN-SJU-5,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/58438157264,https://www.airlines-manager.com/aircraft/show/86238754,18:45,22:14,320,"$171,373.00","$146,042.00",$456.38,"$41,925.93"
EWR - YOW,58443550893,E-CUN-SJU-3,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/58443550893,https://www.airlines-manager.com/aircraft/show/106581306,21:15,0:44,320,"$171,373.00","$146,042.00",$456.38,"$41,925.93"
EWR - YOW,58446475143,E-CUN-SJU-2,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/58446475143,https://www.airlines-manager.com/aircraft/show/106581305,22:45,2:14,298,"$164,192.00","$139,055.00",$466.63,"$39,920.10"
EWR - YUL,58418603254,E-CUN-SJU-3,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/58418603254,https://www.airlines-manager.com/aircraft/show/106581306,9:30,12:59,320,"$175,019.00","$146,861.00",$458.94,"$42,161.05"
EWR - YUL,58421791510,E-CUN-SJU-2,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/58421791510,https://www.airlines-manager.com/aircraft/show/106581305,11:00,14:29,320,"$175,019.00","$146,861.00",$458.94,"$42,161.05"
EWR - YUL,58431664326,E-CUN-SJU-5,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/58431664326,https://www.airlines-manager.com/aircraft/show/86238754,15:15,18:44,320,"$175,019.00","$146,861.00",$458.94,"$42,161.05"
EWR - YUL,58441017550,E-CUN-SJU-1,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/58441017550,https://www.airlines-manager.com/aircraft/show/106581304,21:00,0:29,320,"$175,019.00","$146,861.00",$458.94,"$42,161.05"
EWR - YUL,58446475113,E-CUN-SJU-4,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/58446475113,https://www.airlines-manager.com/aircraft/show/106581307,22:30,1:59,320,"$175,019.00","$146,861.00",$458.94,"$42,161.05"
EWR - YVR,58394056114,E-YVR-YYC-1,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/58394056114,https://www.airlines-manager.com/aircraft/show/113681636,0:00,11:14,400,"$914,270.00","$841,892.00","$2,104.73","$74,945.88"
EWR - YVR,58394056115,E-YVR-YYC-2,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/58394056115,https://www.airlines-manager.com/aircraft/show/113681637,1:30,12:44,400,"$914,270.00","$841,892.00","$2,104.73","$74,945.88"
EWR - YVR,58405117958,E-YVR-YYC-3,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/58405117958,https://www.airlines-manager.com/aircraft/show/113681638,3:00,14:14,400,"$914,270.00","$841,892.00","$2,104.73","$74,945.88"
EWR - YVR,58421791598,E-YVR-YYC-4,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/58421791598,https://www.airlines-manager.com/aircraft/show/113681639,11:15,22:29,400,"$914,270.00","$841,892.00","$2,104.73","$74,945.88"
EWR - YVR,58425449850,E-YVR-YYC-5,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/58425449850,https://www.airlines-manager.com/aircraft/show/113681640,12:45,23:59,400,"$914,270.00","$841,892.00","$2,104.73","$74,945.88"
EWR - YYC,58394056815,E-YVR-YYC-4,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/58394056815,https://www.airlines-manager.com/aircraft/show/113681639,1:30,11:14,400,"$792,960.00","$729,407.00","$1,823.52","$74,939.08"
EWR - YYC,58405117959,E-YVR-YYC-5,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/58405117959,https://www.airlines-manager.com/aircraft/show/113681640,3:00,12:44,400,"$792,960.00","$729,407.00","$1,823.52","$74,939.08"
EWR - YYC,58421791597,E-YVR-YYC-1,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/58421791597,https://www.airlines-manager.com/aircraft/show/113681636,11:15,20:59,400,"$792,960.00","$729,407.00","$1,823.52","$74,939.08"
EWR - YYC,58425449849,E-YVR-YYC-2,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/58425449849,https://www.airlines-manager.com/aircraft/show/113681637,12:45,22:29,400,"$792,960.00","$729,407.00","$1,823.52","$74,939.08"
EWR - YYC,58428583398,E-YVR-YYC-3,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/58428583398,https://www.airlines-manager.com/aircraft/show/113681638,14:15,23:59,400,"$792,960.00","$729,407.00","$1,823.52","$74,939.08"
EWR - YYZ,58394056905,E-DTW-YYZ-4,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/58394056905,https://www.airlines-manager.com/aircraft/show/92003922,2:15,5:44,320,"$180,594.00","$146,256.00",$457.05,"$41,987.37"
EWR - YYZ,58415053994,E-DTW-YYZ-5,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/58415053994,https://www.airlines-manager.com/aircraft/show/92003921,7:30,10:59,320,"$180,594.00","$146,256.00",$457.05,"$41,987.37"
EWR - YYZ,58418603296,E-DTW-YYZ-2,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/58418603296,https://www.airlines-manager.com/aircraft/show/92003924,10:00,13:29,320,"$180,594.00","$146,256.00",$457.05,"$41,987.37"
EWR - YYZ,58428583315,E-DTW-YYZ-1,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/58428583315,https://www.airlines-manager.com/aircraft/show/92003925,14:00,17:29,320,"$180,594.00","$146,256.00",$457.05,"$41,987.37"
EWR - YYZ,58438157196,E-DTW-YYZ-3,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/58438157196,https://www.airlines-manager.com/aircraft/show/92003923,18:15,21:44,320,"$180,594.00","$146,256.00",$457.05,"$41,987.37"
EWR - ZRH,58415054028,E-84A-6 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/58415054028,https://www.airlines-manager.com/aircraft/show/90656552,7:45,23:59,852,"$2,646,064.00","$2,403,375.00","$2,820.86","$148,051.85"
EWR - ZRH,58441017385,E-84A-7 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/58441017385,https://www.airlines-manager.com/aircraft/show/94521249,20:00,12:14,852,"$2,646,064.00","$2,403,375.00","$2,820.86","$148,051.85"
HNL - AKL,58431664427,H-84B-2 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/58431664427,https://www.airlines-manager.com/aircraft/show/96807092,16:00,9:59,832,"$2,960,281.00","$2,703,091.00","$3,248.91","$150,310.90"
HNL - AKL,58446475199,H-84B-6 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/58446475199,https://www.airlines-manager.com/aircraft/show/96807088,23:00,16:59,832,"$2,942,886.00","$2,691,652.00","$3,235.16","$149,674.81"
HNL - ATL,58408651781,H-56B-2 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/58408651781,https://www.airlines-manager.com/aircraft/show/109187499,4:45,22:44,592,"$2,206,851.00","$2,020,996.00","$3,413.84","$112,381.61"
HNL - ATL,58431664376,H-56B-4 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/58431664376,https://www.airlines-manager.com/aircraft/show/109187501,16:00,9:59,592,"$2,206,851.00","$2,020,996.00","$3,413.84","$112,381.61"
HNL - ATL,58446475135,H-56B-2 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/58446475135,https://www.airlines-manager.com/aircraft/show/109187499,22:45,16:44,592,"$2,206,851.00","$2,020,996.00","$3,413.84","$112,381.61"
HNL - BNE,58405118125,H-84B-6 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/58405118125,https://www.airlines-manager.com/aircraft/show/96807088,4:00,22:59,832,"$3,066,580.00","$2,797,731.00","$3,362.66","$147,378.28"
HNL - BNE,58418603369,H-84B-3 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/58418603369,https://www.airlines-manager.com/aircraft/show/96807091,10:00,4:59,832,"$3,048,138.00","$2,785,635.00","$3,348.12","$146,741.09"
HNL - BOS,58394056103,H-56E-6 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/58394056103,https://www.airlines-manager.com/aircraft/show/117414505,0:00,19:59,592,"$2,413,101.00","$2,253,649.00","$3,806.84","$112,776.43"
HNL - BOS,58415054083,H-56E-1 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/58415054083,https://www.airlines-manager.com/aircraft/show/117414500,8:30,4:29,592,"$2,413,101.00","$2,253,649.00","$3,806.84","$112,776.43"
HNL - BOS,58418603287,H-56E-4 B,787-10,https://www.airlines-manager.com/network/showline/49750821,https://www.airlines-manager.com/network/showflight/58418603287,https://www.airlines-manager.com/aircraft/show/117414503,10:00,5:59,592,"$2,413,101.00","$2,253,649.00","$3,806.84","$112,776.43"
HNL - BWI,58405117882,H-56F-4 B,787-10,https://www.airlines-manager.com/network/showline/50049284,https://www.airlines-manager.com/network/showflight/58405117882,https://www.airlines-manager.com/aircraft/show/118383854,2:30,21:44,592,"$2,296,099.00","$2,145,356.00","$3,623.91","$111,543.64"
HNL - BWI,58421791630,H-56F-5 B,787-10,https://www.airlines-manager.com/network/showline/50049284,https://www.airlines-manager.com/network/showflight/58421791630,https://www.airlines-manager.com/aircraft/show/118383855,11:45,6:59,592,"$2,296,099.00","$2,145,356.00","$3,623.91","$111,543.64"
HNL - BWI,58435221241,H-56F-1 B,787-10,https://www.airlines-manager.com/network/showline/50049284,https://www.airlines-manager.com/network/showflight/58435221241,https://www.airlines-manager.com/aircraft/show/118383851,17:00,12:14,592,"$2,296,099.00","$2,145,356.00","$3,623.91","$111,543.64"
HNL - CLT,58408651755,H-56D-3 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/58408651755,https://www.airlines-manager.com/aircraft/show/112066134,4:30,23:14,592,"$2,267,113.00","$2,111,414.00","$3,566.58","$112,708.93"
HNL - CLT,58408651756,H-56D-5 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/58408651756,https://www.airlines-manager.com/aircraft/show/112066136,5:30,0:14,592,"$2,267,113.00","$2,111,414.00","$3,566.58","$112,708.93"
HNL - CLT,58446475205,H-56D-3 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/58446475205,https://www.airlines-manager.com/aircraft/show/112066134,23:15,17:59,592,"$2,267,113.00","$2,111,414.00","$3,566.58","$112,708.93"
HNL - CXI,58408651857,H-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/58408651857,https://www.airlines-manager.com/aircraft/show/90717080,5:30,12:44,388,"$494,605.00","$464,097.00","$1,196.13","$64,160.88"
HNL - CXI,58431664273,H-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/58431664273,https://www.airlines-manager.com/aircraft/show/90717080,15:00,22:14,388,"$494,605.00","$464,097.00","$1,196.13","$64,160.88"
HNL - CXI,58443551017,H-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/58443551017,https://www.airlines-manager.com/aircraft/show/90717080,22:15,5:29,388,"$494,605.00","$464,097.00","$1,196.13","$64,160.88"
HNL - DEN,58411831172,H-56F-6 B,787-10,https://www.airlines-manager.com/network/showline/43762939,https://www.airlines-manager.com/network/showflight/58411831172,https://www.airlines-manager.com/aircraft/show/118383856,7:00,20:59,592,"$1,717,424.00","$1,572,632.00","$2,656.47","$112,464.74"
HNL - DEN,58435221242,H-56F-2 B,787-10,https://www.airlines-manager.com/network/showline/43762939,https://www.airlines-manager.com/network/showflight/58435221242,https://www.airlines-manager.com/aircraft/show/118383852,17:00,6:59,592,"$1,717,424.00","$1,572,632.00","$2,656.47","$112,464.74"
HNL - DEN,58443550942,H-56F-4 B,787-10,https://www.airlines-manager.com/network/showline/43762939,https://www.airlines-manager.com/network/showflight/58443550942,https://www.airlines-manager.com/aircraft/show/118383854,21:45,11:44,592,"$1,717,424.00","$1,572,632.00","$2,656.47","$112,464.74"
HNL - DFW,58408651757,H-56E-2 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/58408651757,https://www.airlines-manager.com/aircraft/show/117414501,4:30,19:59,592,"$1,898,077.00","$1,746,693.00","$2,950.49","$112,811.17"
HNL - DFW,58435221240,H-56E-7 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/58435221240,https://www.airlines-manager.com/aircraft/show/117414506,17:00,8:29,592,"1,898,077$","1,746,693$","$2,950.49","$112,811.17"
HNL - DFW,58438157225,H-56E-3 B,787-10,https://www.airlines-manager.com/network/showline/49750831,https://www.airlines-manager.com/network/showflight/58438157225,https://www.airlines-manager.com/aircraft/show/117414502,18:30,9:59,592,"1,898,077$","1,746,693$","$2,950.49","$112,811.17"
HNL - DTW,58411831101,H-56E-5 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/58411831101,https://www.airlines-manager.com/aircraft/show/117414504,6:00,23:59,592,"2,164,950$","2,015,155$","$3,403.98","$112,056.81"
HNL - DTW,58441017348,H-56E-2 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/58441017348,https://www.airlines-manager.com/aircraft/show/117414501,20:00,13:59,592,"2,164,950$","2,015,155$","$3,403.98","$112,056.81"
HNL - DTW,58441017349,H-56E-6 B,787-10,https://www.airlines-manager.com/network/showline/49750826,https://www.airlines-manager.com/network/showflight/58441017349,https://www.airlines-manager.com/aircraft/show/117414505,20:00,13:59,592,"$2,164,950.00","$2,015,155.00","$3,403.98","$112,056.81"
HNL - EWR,58405118135,H-56A-7 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/58405118135,https://www.airlines-manager.com/aircraft/show/95351586,4:15,23:59,592,"$2,378,901.00","$2,216,986.00","$3,744.91","$112,347.26"
HNL - EWR,58411831098,H-56A-6 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/58411831098,https://www.airlines-manager.com/aircraft/show/95351587,6:00,1:44,592,"$2,378,901.00","$2,216,986.00","$3,744.91","$112,347.26"
HNL - EWR,58441017306,H-56A-3 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/58441017306,https://www.airlines-manager.com/aircraft/show/95351590,19:45,15:29,592,"$2,378,901.00","$2,216,986.00","$3,744.91","$112,347.26"
HNL - GUM,58394056099,H-GUM,A321neo,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/58394056099,https://www.airlines-manager.com/aircraft/show/115400544,0:00,16:44,338,"$1,127,689.00","$1,064,630.00","$3,149.79","$63,623.31"
HNL - GUM,58408651799,H-84A-3 F,777-300,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/58408651799,https://www.airlines-manager.com/aircraft/show/95818924,4:45,20:29,832,"$2,566,405.00","$2,365,978.00","$2,843.72","$150,379.96"
HNL - IAD,58405118001,H-56C-3 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/58405118001,https://www.airlines-manager.com/aircraft/show/111639415,3:15,22:14,592,"$2,284,342.00","$2,131,615.00","$3,600.70","$112,288.76"
HNL - IAD,58418603233,H-56C-5 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/58418603233,https://www.airlines-manager.com/aircraft/show/111639417,9:15,4:14,592,"$2,284,342.00","$2,131,615.00","$3,600.70","$112,288.76"
HNL - IAD,58441017347,H-56C-7 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/58441017347,https://www.airlines-manager.com/aircraft/show/111639419,20:00,14:59,592,"$2,284,342.00","$2,131,615.00","$3,600.70","$112,288.76"
HNL - IAH,58394056101,H-56A-1 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/58394056101,https://www.airlines-manager.com/aircraft/show/95351592,0:00,15:59,592,"$1,939,709.00","$1,799,398.00","$3,039.52","$112,579.65"
HNL - IAH,58405118070,H-56A-3 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/58405118070,https://www.airlines-manager.com/aircraft/show/95351590,3:45,19:44,592,"$1,939,709.00","$1,799,398.00","$3,039.52","$112,579.65"
HNL - IAH,58431664375,H-56A-1 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/58431664375,https://www.airlines-manager.com/aircraft/show/95351592,16:00,7:59,592,"$1,939,709.00","$1,799,398.00","$3,039.52","$112,579.65"
HNL - ITO,58394056875,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/58394056875,https://www.airlines-manager.com/aircraft/show/94803593,1:45,4:44,170,"$77,340.00","$66,813.00",$393.02,"$22,395.42"
HNL - ITO,58405118030,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/58405118030,https://www.airlines-manager.com/aircraft/show/94803596,3:15,6:14,170,"$77,340.00","$66,813.00",$393.02,"$22,395.42"
HNL - ITO,58411831122,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/58411831122,https://www.airlines-manager.com/aircraft/show/94803595,6:00,8:59,170,"$77,340.00","$66,813.00",$393.02,"$22,395.42"
HNL - ITO,58418603264,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/58418603264,https://www.airlines-manager.com/aircraft/show/94803594,9:30,12:29,170,"$77,340.00","$66,813.00",$393.02,"$22,395.42"
HNL - ITO,58431664301,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/58431664301,https://www.airlines-manager.com/aircraft/show/94803593,15:00,17:59,170,"$77,340.00","$66,813.00",$393.02,"$22,395.42"
HNL - ITO,58435221208,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/58435221208,https://www.airlines-manager.com/aircraft/show/94803596,16:30,19:29,170,"$77,340.00","$66,813.00",$393.02,"$22,395.42"
HNL - ITO,58438157381,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/58438157381,https://www.airlines-manager.com/aircraft/show/94803595,19:15,22:14,170,"$77,340.00","$66,813.00",$393.02,"$22,395.42"
HNL - ITO,58446475170,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/58446475170,https://www.airlines-manager.com/aircraft/show/94803594,22:45,1:44,134,"$68,039.00","$57,906.00",$432.13,"$19,409.83"
HNL - JFK,58405117954,H-56B-6 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/58405117954,https://www.airlines-manager.com/aircraft/show/109187503,3:00,22:44,592,"$2,411,207.00","$2,228,767.00","$3,764.81","$112,944.27"
HNL - JFK,58418603209,H-56B-1 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/58418603209,https://www.airlines-manager.com/aircraft/show/109187498,9:00,4:44,592,"$2,411,207.00","$2,228,767.00","$3,764.81","$112,944.27"
HNL - JFK,58435221238,H-56B-3 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/58435221238,https://www.airlines-manager.com/aircraft/show/109187500,17:00,12:44,592,"2,411,207$","2,228,767$","$3,764.81","$112,944.27"
HNL - KOA,58394056595,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/58394056595,https://www.airlines-manager.com/aircraft/show/94803595,0:45,3:29,170,"59,122$","48,744$",$286.73,"$17,833.17"
HNL - KOA,58405118164,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/58405118164,https://www.airlines-manager.com/aircraft/show/94803594,4:15,6:59,170,"59,122$","48,744$",$286.73,"$17,833.17"
HNL - KOA,58411831204,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/58411831204,https://www.airlines-manager.com/aircraft/show/94803593,7:15,9:59,170,"59,122$","48,744$",$286.73,"$17,833.17"
HNL - KOA,58415054131,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/58415054131,https://www.airlines-manager.com/aircraft/show/94803596,8:45,11:29,170,"$59,122.00","$48,744.00",$286.73,"$17,833.17"
HNL - KOA,58428583388,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/58428583388,https://www.airlines-manager.com/aircraft/show/94803595,14:00,16:44,170,"$59,122.00","$48,744.00",$286.73,"$17,833.17"
HNL - KOA,58435221334,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/58435221334,https://www.airlines-manager.com/aircraft/show/94803594,17:30,20:14,170,"$59,122.00","$48,744.00",$286.73,"$17,833.17"
HNL - KOA,58441017474,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/58441017474,https://www.airlines-manager.com/aircraft/show/94803593,20:30,23:14,170,"$59,122.00","$48,744.00",$286.73,"$17,833.17"
HNL - KOA,58443550996,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/58443550996,https://www.airlines-manager.com/aircraft/show/94803596,22:00,0:44,170,"$59,122.00","$48,744.00",$286.73,"$17,833.17"
HNL - LAS,58411831145,H-84A-5 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/58411831145,https://www.airlines-manager.com/aircraft/show/95818922,6:30,18:29,832,"$1,899,219.00","$1,712,591.00","$2,058.40","$142,914.41"
HNL - LAS,58435221205,H-LAS S,A321-200,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/58435221205,https://www.airlines-manager.com/aircraft/show/116385511,16:30,5:14,232,"$748,487.00","$676,985.00","$2,918.04","$53,166.36"
HNL - LAS,58441017470,H-84A-3 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/58441017470,https://www.airlines-manager.com/aircraft/show/95818924,20:30,8:29,810,"$1,865,927.00","$1,681,351.00","$2,075.74","$140,307.45"
HNL - LAX,58411831169,H-SFO-LAX-3,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/58411831169,https://www.airlines-manager.com/aircraft/show/110044460,7:00,18:59,338,"$791,642.00","$723,370.00","$2,140.15","$60,364.67"
HNL - LAX,58418603205,H-SFO-LAX-4,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/58418603205,https://www.airlines-manager.com/aircraft/show/110044461,9:00,20:59,338,"$791,642.00","$723,370.00","$2,140.15","$60,364.67"
HNL - LAX,58418603206,H-SFO-LAX-6 B,A319-100,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/58418603206,https://www.airlines-manager.com/aircraft/show/106106389,10:00,21:59,198,"$547,641.00","$490,361.00","$2,476.57","$40,920.25"
HNL - LAX,58438157191,H-SFO-LAX-1,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/58438157191,https://www.airlines-manager.com/aircraft/show/110044458,18:15,6:14,338,"$791,642.00","$723,370.00","$2,140.15","$60,364.67"
HNL - LAX,58441017391,H-SFO-LAX-2,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/58441017391,https://www.airlines-manager.com/aircraft/show/110044459,20:15,8:14,338,"$791,642.00","$723,370.00","$2,140.15","$60,364.67"
HNL - LAX,58443550939,H-SFO-LAX-5,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/58443550939,https://www.airlines-manager.com/aircraft/show/110044462,21:45,9:44,338,"$791,642.00","$723,370.00","$2,140.15","$60,364.67"
HNL - LIH,58394056597,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/58394056597,https://www.airlines-manager.com/aircraft/show/94803596,0:45,3:14,170,"$51,183.00","$42,763.00",$251.55,"$17,220.00"
HNL - LIH,58405118064,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/58405118064,https://www.airlines-manager.com/aircraft/show/94803595,3:30,5:59,170,"$51,183.00","$42,763.00",$251.55,"$17,220.00"
HNL - LIH,58411831189,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/58411831189,https://www.airlines-manager.com/aircraft/show/94803594,7:00,9:29,170,"$51,183.00","$42,763.00",$251.55,"$17,220.00"
HNL - LIH,58418603371,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/58418603371,https://www.airlines-manager.com/aircraft/show/94803593,10:00,12:29,170,"$51,183.00","$42,763.00",$251.55,"$17,220.00"
HNL - LIH,58428583389,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/58428583389,https://www.airlines-manager.com/aircraft/show/94803596,14:00,16:29,170,"$51,183.00","$42,763.00",$251.55,"$17,220.00"
HNL - LIH,58435221230,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/58435221230,https://www.airlines-manager.com/aircraft/show/94803595,16:45,19:14,170,"$51,183.00","$42,763.00",$251.55,"$17,220.00"
HNL - LIH,58441017435,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/58441017435,https://www.airlines-manager.com/aircraft/show/94803594,20:15,22:44,170,"$51,183.00","$42,763.00",$251.55,"$17,220.00"
HNL - LIH,58446475224,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/58446475224,https://www.airlines-manager.com/aircraft/show/94803593,23:15,1:44,170,"$51,183.00","$42,763.00",$251.55,"$17,220.00"
HNL - LNY,58394056713,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/58394056713,https://www.airlines-manager.com/aircraft/show/106107514,1:00,3:29,116,"$30,461.00","$25,454.00",$219.43,"$10,249.93"
HNL - LNY,58405118065,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/58405118065,https://www.airlines-manager.com/aircraft/show/106107514,3:30,5:59,116,"30,461$","25,454$",$219.43,"$10,249.93"
HNL - LNY,58411831123,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/58411831123,https://www.airlines-manager.com/aircraft/show/106107514,6:00,8:29,116,"30,461$","25,454$",$219.43,"$10,249.93"
HNL - LNY,58415054113,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/58415054113,https://www.airlines-manager.com/aircraft/show/106107514,8:30,10:59,116,"30,461$","25,454$",$219.43,"$10,249.93"
HNL - LNY,58431664303,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/58431664303,https://www.airlines-manager.com/aircraft/show/106107514,15:00,17:29,116,"30,461$","25,454$",$219.43,"$10,249.93"
HNL - LNY,58435221335,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/58435221335,https://www.airlines-manager.com/aircraft/show/106107514,17:30,19:59,116,"$30,461.00","$25,454.00",$219.43,"$10,249.93"
HNL - LNY,58441017388,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/58441017388,https://www.airlines-manager.com/aircraft/show/106107514,20:00,22:29,116,"$30,461.00","$25,454.00",$219.43,"$10,249.93"
HNL - LNY,58446475130,H-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/58446475130,https://www.airlines-manager.com/aircraft/show/106107514,22:30,0:59,116,"$30,461.00","$25,454.00",$219.43,"$10,249.93"
HNL - MCO,58394056613,H-56C-7 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/58394056613,https://www.airlines-manager.com/aircraft/show/111639419,1:00,19:59,592,"$2,293,833.00","$2,133,734.00","$3,604.28","$112,400.39"
HNL - MCO,58405118137,H-56C-6 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/58405118137,https://www.airlines-manager.com/aircraft/show/111639418,4:15,23:14,592,"$2,293,833.00","$2,133,734.00","$3,604.28","$112,400.39"
HNL - MCO,58415054060,H-56C-2 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/58415054060,https://www.airlines-manager.com/aircraft/show/111639414,8:15,3:14,592,"2,293,833$","2,133,734$","$3,604.28","$112,400.39"
HNL - MEL,58415054112,H-84A-4 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/58415054112,https://www.airlines-manager.com/aircraft/show/95818923,8:30,6:29,832,"3,551,682$","3,250,300$","$3,906.61","$147,852.92"
HNL - MEL,58441017387,H-84A-7 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/58441017387,https://www.airlines-manager.com/aircraft/show/95818920,20:00,17:59,832,"3,551,682$","3,250,300$","$3,906.61","$147,852.92"
HNL - MIA,58415054082,H-56A-2 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/58415054082,https://www.airlines-manager.com/aircraft/show/95351591,8:30,3:44,592,"2,338,839$","2,172,578$","$3,669.90","$112,958.99"
HNL - MIA,58421791445,H-56A-5 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/58421791445,https://www.airlines-manager.com/aircraft/show/95351588,10:45,5:59,592,"2,338,839$","2,172,578$","$3,669.90","$112,958.99"
HNL - MIA,58431664340,H-56A-4 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/58431664340,https://www.airlines-manager.com/aircraft/show/95351589,15:30,10:44,592,"$2,338,839.00","$2,172,578.00","$3,669.90","$112,958.99"
HNL - MNL,58415054013,H-84A-2 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/58415054013,https://www.airlines-manager.com/aircraft/show/95818925,7:30,4:44,832,"$3,473,428.00","$3,184,131.00","$3,827.08","$149,959.07"
HNL - MNL,58438157254,H-84A-5 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/58438157254,https://www.airlines-manager.com/aircraft/show/95818922,18:30,15:44,832,"$3,473,428.00","$3,184,131.00","$3,827.08","$149,959.07"
HNL - MSP,58431664378,H-56C-1 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/58431664378,https://www.airlines-manager.com/aircraft/show/111639413,16:00,8:14,592,"$1,954,391.00","$1,820,018.00","$3,074.35","$112,116.10"
HNL - MSP,58435221239,H-56C-4 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/58435221239,https://www.airlines-manager.com/aircraft/show/111639416,17:00,9:14,592,"$1,954,391.00","$1,820,018.00","$3,074.35","$112,116.10"
HNL - MSP,58443551005,H-56C-3 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/58443551005,https://www.airlines-manager.com/aircraft/show/111639415,22:15,14:29,592,"$1,954,391.00","$1,820,018.00","$3,074.35","$112,116.10"
HNL - NAN,58405118095,H-84A-7 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/58405118095,https://www.airlines-manager.com/aircraft/show/95818920,3:45,17:14,832,"$2,080,799.00","$1,909,593.00","$2,295.18","$141,626.18"
HNL - NAN,58435221417,H-84A-1 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/58435221417,https://www.airlines-manager.com/aircraft/show/95818926,18:00,7:29,832,"$2,051,749.00","$1,890,197.00","$2,271.87","$140,187.66"
HNL - OGG,58394056876,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/58394056876,https://www.airlines-manager.com/aircraft/show/94803594,1:45,4:14,170,"$51,853.00","$43,055.00",$253.26,"$17,337.58"
HNL - OGG,58408651800,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/58408651800,https://www.airlines-manager.com/aircraft/show/94803593,4:45,7:14,170,"$51,853.00","$43,055.00",$253.26,"$17,337.58"
HNL - OGG,58411831133,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/58411831133,https://www.airlines-manager.com/aircraft/show/94803596,6:15,8:44,170,"$51,853.00","$43,055.00",$253.26,"$17,337.58"
HNL - OGG,58418603228,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/58418603228,https://www.airlines-manager.com/aircraft/show/94803595,9:00,11:29,170,"$51,853.00","$43,055.00",$253.26,"$17,337.58"
HNL - OGG,58431664302,H-II-3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/58431664302,https://www.airlines-manager.com/aircraft/show/94803594,15:00,17:29,170,"$51,853.00","$43,055.00",$253.26,"$17,337.58"
HNL - OGG,58435221418,H-II-4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/58435221418,https://www.airlines-manager.com/aircraft/show/94803593,18:00,20:29,170,"$51,853.00","$43,055.00",$253.26,"$17,337.58"
HNL - OGG,58438157408,H-II-1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/58438157408,https://www.airlines-manager.com/aircraft/show/94803596,19:30,21:59,170,"$51,853.00","$43,055.00",$253.26,"$17,337.58"
HNL - OGG,58443551033,H-II-2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/58443551033,https://www.airlines-manager.com/aircraft/show/94803595,22:15,0:44,170,"$51,853.00","$43,055.00",$253.26,"$17,337.58"
HNL - ORD,58418603286,H-56B-5 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/58418603286,https://www.airlines-manager.com/aircraft/show/109187502,10:00,2:59,592,"$2,094,168.00","$1,924,708.00","$3,251.20","$113,329.22"
HNL - ORD,58431664377,H-56B-7 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/58431664377,https://www.airlines-manager.com/aircraft/show/109187504,16:00,8:59,592,"$2,094,168.00","$1,924,708.00","$3,251.20","$113,329.22"
HNL - ORD,58446475136,H-56B-6 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/58446475136,https://www.airlines-manager.com/aircraft/show/109187503,22:45,15:44,592,"$2,094,168.00","$1,924,708.00","$3,251.20","$113,329.22"
HNL - PHL,58411831171,H-56F-3 B,787-10,https://www.airlines-manager.com/network/showline/50049283,https://www.airlines-manager.com/network/showflight/58411831171,https://www.airlines-manager.com/aircraft/show/118383853,7:00,2:29,592,"$2,351,118.00","$2,193,538.00","$3,705.30","$112,585.36"
HNL - PHL,58435221243,H-56F-7 B,787-10,https://www.airlines-manager.com/network/showline/50049283,https://www.airlines-manager.com/network/showflight/58435221243,https://www.airlines-manager.com/aircraft/show/118383857,17:00,12:29,592,"$2,351,118.00","$2,193,538.00","$3,705.30","$112,585.36"
HNL - PHL,58441017543,H-56F-6 B,787-10,https://www.airlines-manager.com/network/showline/50049283,https://www.airlines-manager.com/network/showflight/58441017543,https://www.airlines-manager.com/aircraft/show/118383856,21:00,16:29,592,"$2,351,118.00","$2,193,538.00","$3,705.30","$112,585.36"
HNL - PHX,58405118041,H-56D-7 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/58405118041,https://www.airlines-manager.com/aircraft/show/112066138,3:30,15:59,592,"$1,522,321.00","$1,411,186.00","$2,383.76","$113,045.61"
HNL - PHX,58431664238,H-56D-6 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/58431664238,https://www.airlines-manager.com/aircraft/show/112066137,15:00,3:29,592,"$1,522,321.00","$1,411,186.00","$2,383.76","$113,045.61"
HNL - PHX,58431664239,H-56D-2 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/58431664239,https://www.airlines-manager.com/aircraft/show/112066133,16:00,4:29,592,"$1,522,321.00","$1,411,186.00","$2,383.76","$113,045.61"
HNL - PPG,58405117999,H-TRW-PPG-1 S,A321neo,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/58405117999,https://www.airlines-manager.com/aircraft/show/120872966,3:15,15:29,410,"$843,980.00","$796,396.00","$1,942.43","$65,100.49"
HNL - PPG,58431664372,H-TRW-PPG-2 S,A321neo,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/58431664372,https://www.airlines-manager.com/aircraft/show/120872965,16:00,4:14,410,"$843,980.00","$796,396.00","$1,942.43","$65,100.49"
HNL - PPG,58435221367,H-TRW-PPG-3 S,A321neo,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/58435221367,https://www.airlines-manager.com/aircraft/show/120872964,18:00,6:14,410,"$843,980.00","$796,396.00","$1,942.43","$65,100.49"
HNL - PPT,58408651792,H-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/58408651792,https://www.airlines-manager.com/aircraft/show/88725600,4:45,17:29,310,"$772,510.00","$719,543.00","$2,321.11","$56,508.61"
HNL - PPT,58431664368,H-84A-6 F,777-300,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/58431664368,https://www.airlines-manager.com/aircraft/show/95818921,15:45,3:44,832,"$1,906,070.00","$1,754,054.00","$2,108.24","$146,374.46"
HNL - PPT,58435221332,H-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/58435221332,https://www.airlines-manager.com/aircraft/show/88725600,17:30,6:14,310,"$772,510.00","$719,543.00","$2,321.11","$56,508.61"
HNL - SEA,58405118071,H-56D-1 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/58405118071,https://www.airlines-manager.com/aircraft/show/112066132,3:45,15:14,592,"$1,420,764.00","$1,319,091.00","$2,228.19","$114,870.04"
HNL - SEA,58431664379,H-56D-1 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/58431664379,https://www.airlines-manager.com/aircraft/show/112066132,16:00,3:29,592,"$1,420,764.00","$1,319,091.00","$2,228.19","$114,870.04"
HNL - SEA,58435221369,H-56D-4 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/58435221369,https://www.airlines-manager.com/aircraft/show/112066135,18:00,5:29,592,"$1,420,764.00","$1,319,091.00","$2,228.19","$114,870.04"
HNL - SFO,58411831168,H-SFO-LAX-1,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/58411831168,https://www.airlines-manager.com/aircraft/show/110044458,7:00,18:14,338,"$760,376.00","$701,892.00","$2,076.60","$62,482.97"
HNL - SFO,58418603204,H-SFO-LAX-2,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/58418603204,https://www.airlines-manager.com/aircraft/show/110044459,9:00,20:14,338,"$760,376.00","$701,892.00","$2,076.60","$62,482.97"
HNL - SFO,58421791434,H-SFO-LAX-5,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/58421791434,https://www.airlines-manager.com/aircraft/show/110044462,10:30,21:44,338,"$760,376.00","$701,892.00","$2,076.60","$62,482.97"
HNL - SFO,58438157319,H-SFO-LAX-3,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/58438157319,https://www.airlines-manager.com/aircraft/show/110044460,19:00,6:14,338,"$760,376.00","$701,892.00","$2,076.60","$62,482.97"
HNL - SFO,58441017541,H-SFO-LAX-4,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/58441017541,https://www.airlines-manager.com/aircraft/show/110044461,21:00,8:14,338,"$760,376.00","$701,892.00","$2,076.60","$62,482.97"
HNL - SFO,58443550992,H-SFO-LAX-6 B,A319-100,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/58443550992,https://www.airlines-manager.com/aircraft/show/106106389,22:00,9:29,198,"$529,190.00","$479,903.00","$2,423.75","$41,791.26"
HNL - SIN,58408651845,H-84B-4 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/58408651845,https://www.airlines-manager.com/aircraft/show/96807090,5:15,7:29,832,"$4,337,146.00","$3,938,924.00","$4,734.28","$1,763,697.31"
HNL - SIN,58435221287,H-84B-7 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/58435221287,https://www.airlines-manager.com/aircraft/show/96807087,17:00,19:14,832,"$4,337,146.00","$3,938,924.00","$4,734.28","$1,763,697.31"
HNL - SYD,58415054014,H-84B-5 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/58415054014,https://www.airlines-manager.com/aircraft/show/96807089,7:30,3:59,832,"$3,351,568.00","$3,044,537.00","$3,659.30","$148,634.84"
HNL - SYD,58438157380,H-84B-1 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/58438157380,https://www.airlines-manager.com/aircraft/show/96807093,19:15,15:44,832,"$3,351,568.00","$3,044,537.00","$3,659.30","$148,634.84"
HNL - TRW,58405118132,H-TRW-PPG-2 S,A321neo,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/58405118132,https://www.airlines-manager.com/aircraft/show/120872965,4:15,15:29,410,"$815,809.00","$773,021.00","$1,885.42","$68,814.93"
HNL - TRW,58411831127,H-TRW-PPG-3 S,A321neo,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/58411831127,https://www.airlines-manager.com/aircraft/show/120872964,6:15,17:29,410,"$815,809.00","$773,021.00","$1,885.42","$68,814.93"
HNL - TRW,58431664373,H-TRW-PPG-1 S,A321neo,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/58431664373,https://www.airlines-manager.com/aircraft/show/120872966,16:00,3:14,410,"$815,809.00","$773,021.00","$1,885.42","$68,814.93"
HNL - YVR,58394056172,H-56D-6 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/58394056172,https://www.airlines-manager.com/aircraft/show/112066137,0:15,11:59,592,"$1,424,139.00","$1,328,733.00","$2,244.48","$113,244.29"
HNL - YVR,58405118040,H-56D-2 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/58405118040,https://www.airlines-manager.com/aircraft/show/112066133,3:30,15:14,592,"$1,424,139.00","$1,328,733.00","$2,244.48","$113,244.29"
HNL - YVR,58431664380,H-56D-7 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/58431664380,https://www.airlines-manager.com/aircraft/show/112066138,16:00,3:44,592,"$1,424,139.00","$1,328,733.00","$2,244.48","$113,244.29"
IAH - ABQ,58394056668,I-CLE-STL-1,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/58394056668,https://www.airlines-manager.com/aircraft/show/103600700,1:00,5:59,310,"$318,467.00","$285,150.00",$919.84,"$57,220.74"
IAH - ABQ,58405117909,I-CLE-STL-5 B,A319-100,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/58405117909,https://www.airlines-manager.com/aircraft/show/110582844,2:30,7:29,198,"$241,972.00","$215,286.00","$1,087.30","$43,201.20"
IAH - ABQ,58411831110,I-CLE-STL-4,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/58411831110,https://www.airlines-manager.com/aircraft/show/88725601,6:00,10:59,310,"$318,467.00","$285,150.00",$919.84,"$57,220.74"
IAH - ABQ,58425449962,I-CLE-STL-3,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/58425449962,https://www.airlines-manager.com/aircraft/show/103600702,13:00,17:59,310,"$318,467.00","$285,150.00",$919.84,"$57,220.74"
IAH - ABQ,58438157302,I-CLE-STL-2,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/58438157302,https://www.airlines-manager.com/aircraft/show/103600701,18:45,23:44,310,"$318,467.00","$285,150.00",$919.84,"$57,220.74"
IAH - ALB,58394056354,I-MHT-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/58394056354,https://www.airlines-manager.com/aircraft/show/114266976,0:15,7:59,320,"498,246$","452,792$","$1,414.98","$58,550.69"
IAH - ALB,58394056356,I-MHT-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/58394056356,https://www.airlines-manager.com/aircraft/show/92800067,2:00,9:59,112,"235,555$","208,515$","$1,861.74","$26,118.79"
IAH - ALB,58425449766,I-MHT-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/58425449766,https://www.airlines-manager.com/aircraft/show/114266971,12:00,19:44,320,"498,246$","452,792$","$1,414.98","$58,550.69"
IAH - ALB,58431664264,I-MHT-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/58431664264,https://www.airlines-manager.com/aircraft/show/114266970,15:00,22:44,320,"498,246$","452,792$","$1,414.98","$58,550.69"
IAH - ALB,58441017401,I-MHT-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/58441017401,https://www.airlines-manager.com/aircraft/show/114266972,20:15,3:59,320,"$498,246.00","$452,792.00","$1,414.98","$58,550.69"
IAH - ANC,58425449792,I-ANC-ONT-1,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/58425449792,https://www.airlines-manager.com/aircraft/show/108258010,12:00,2:44,310,"$902,450.00","$832,226.00","$2,684.60","$56,485.93"
IAH - ANC,58428583361,I-ANC-ONT-2,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/58428583361,https://www.airlines-manager.com/aircraft/show/108258011,14:00,4:44,310,"$902,450.00","$832,226.00","$2,684.60","$56,485.93"
IAH - ANC,58438157377,I-ANC-ONT-3,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/58438157377,https://www.airlines-manager.com/aircraft/show/108258012,19:15,9:59,310,"$902,450.00","$832,226.00","$2,684.60","$56,485.93"
IAH - ANC,58443550899,I-ANC-ONT-4,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/58443550899,https://www.airlines-manager.com/aircraft/show/108089220,21:15,11:59,310,"$902,450.00","$832,226.00","$2,684.60","$56,485.93"
IAH - ANC,58446475223,I-ANC-ONT-5 B,A319-100,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/58446475223,https://www.airlines-manager.com/aircraft/show/108286957,23:15,13:59,198,"$673,328.00","$617,008.00","$3,116.20","$41,878.37"
IAH - ATL,58394056410,I-LAS-ATL-6,ERJ-175,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/58394056410,https://www.airlines-manager.com/aircraft/show/82323704,0:15,4:59,112,"$146,748.00","$112,707.00","$1,006.31","$23,811.34"
IAH - ATL,58418603298,I-LAS-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/58418603298,https://www.airlines-manager.com/aircraft/show/95894466,10:00,14:44,320,"$308,313.00","$244,238.00",$763.24,"$51,599.58"
IAH - ATL,58421791449,I-LAS-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/58421791449,https://www.airlines-manager.com/aircraft/show/96256511,10:45,15:29,320,"$308,313.00","$244,238.00",$763.24,"$51,599.58"
IAH - ATL,58431664388,I-LAS-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/58431664388,https://www.airlines-manager.com/aircraft/show/96183549,16:00,20:44,320,"$308,313.00","$244,238.00",$763.24,"$51,599.58"
IAH - ATL,58435221344,I-LAS-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/58435221344,https://www.airlines-manager.com/aircraft/show/96177955,17:45,22:29,320,"$308,313.00","$244,238.00",$763.24,"$51,599.58"
IAH - ATL,58446475255,I-LAS-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/58446475255,https://www.airlines-manager.com/aircraft/show/96250652,23:45,4:29,320,"$308,313.00","$244,238.00",$763.24,"$51,599.58"
IAH - AUS,58405118130,I-BWI-PHL-2,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/58405118130,https://www.airlines-manager.com/aircraft/show/106007214,4:15,6:59,338,"$101,034.00","$77,433.00",$229.09,"$28,329.15"
IAH - AUS,58421791464,I-BWI-PHL-1,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/58421791464,https://www.airlines-manager.com/aircraft/show/106007213,11:00,13:44,338,"$101,034.00","$77,433.00",$229.09,"$28,329.15"
IAH - AUS,58425449745,I-BWI-PHL-5,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/58425449745,https://www.airlines-manager.com/aircraft/show/106007217,12:00,14:44,338,"$101,034.00","$77,433.00",$229.09,"$28,329.15"
IAH - AUS,58438157190,I-BWI-PHL-4,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/58438157190,https://www.airlines-manager.com/aircraft/show/106007216,18:15,20:59,338,"$101,034.00","$77,433.00",$229.09,"$28,329.15"
IAH - AUS,58443550908,I-BWI-PHL-3,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/58443550908,https://www.airlines-manager.com/aircraft/show/106007215,21:30,0:14,274,"$89,783.00","$66,386.00",$242.28,"$24,287.56"
IAH - BDL,58411831114,I-CLE-STL-1,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/58411831114,https://www.airlines-manager.com/aircraft/show/103600700,6:00,13:59,310,"$501,060.00","$458,720.00","$1,479.74","$57,459.71"
IAH - BDL,58415054011,I-CLE-STL-5 B,A319-100,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/58415054011,https://www.airlines-manager.com/aircraft/show/110582844,7:30,15:29,198,"$377,520.00","$343,583.00","$1,735.27","$43,037.54"
IAH - BDL,58421791544,I-CLE-STL-4,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/58421791544,https://www.airlines-manager.com/aircraft/show/88725601,11:00,18:59,310,"$501,060.00","$458,720.00","$1,479.74","$57,459.71"
IAH - BDL,58435221400,I-CLE-STL-3,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/58435221400,https://www.airlines-manager.com/aircraft/show/103600702,18:00,1:59,310,"$501,060.00","$458,720.00","$1,479.74","$57,459.71"
IAH - BDL,58441017341,I-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/58441017341,https://www.airlines-manager.com/aircraft/show/96990010,19:45,3:44,112,"$235,607.00","$207,574.00","$1,853.34","$26,000.92"
IAH - BDL,58446475265,I-CLE-STL-2,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/58446475265,https://www.airlines-manager.com/aircraft/show/103600701,23:45,7:44,310,"$501,060.00","$458,720.00","$1,479.74","$57,459.71"
IAH - BFF,58405118106,I-MHT-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/58405118106,https://www.airlines-manager.com/aircraft/show/114266972,4:00,9:44,320,"$367,416.00","$329,538.00","$1,029.81","$57,477.56"
IAH - BFF,58418603382,I-MHT-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/58418603382,https://www.airlines-manager.com/aircraft/show/114266976,10:15,15:59,320,"$367,416.00","$329,538.00","$1,029.81","$57,477.56"
IAH - BFF,58425449811,I-MHT-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/58425449811,https://www.airlines-manager.com/aircraft/show/92800067,12:00,17:44,112,"$173,956.00","$152,275.00","$1,359.60","$26,559.59"
IAH - BFF,58441017318,I-MHT-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/58441017318,https://www.airlines-manager.com/aircraft/show/114266971,19:45,1:29,320,"$367,416.00","$329,538.00","$1,029.81","$57,477.56"
IAH - BFF,58446475147,I-MHT-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/58446475147,https://www.airlines-manager.com/aircraft/show/114266970,22:45,4:29,320,"$367,416.00","$329,538.00","$1,029.81","$57,477.56"
IAH - BHM,58394056126,I-BHM,737-900ER,https://www.airlines-manager.com/network/showline/50835066,https://www.airlines-manager.com/network/showflight/58394056126,https://www.airlines-manager.com/aircraft/show/120933644,0:00,4:14,320,"$269,130.00","$237,138.00",$741.06,"$56,016.85"
IAH - BHM,58421791531,I-BHM,737-900ER,https://www.airlines-manager.com/network/showline/50835066,https://www.airlines-manager.com/network/showflight/58421791531,https://www.airlines-manager.com/aircraft/show/120933644,11:00,15:14,320,"$269,130.00","$237,138.00",$741.06,"$56,016.85"
IAH - BHM,58431664328,I-BHM,737-900ER,https://www.airlines-manager.com/network/showline/50835066,https://www.airlines-manager.com/network/showflight/58431664328,https://www.airlines-manager.com/aircraft/show/120933644,15:15,19:29,320,"$269,130.00","$237,138.00",$741.06,"$56,016.85"
IAH - BHM,58438157393,I-BHM,737-900ER,https://www.airlines-manager.com/network/showline/50835066,https://www.airlines-manager.com/network/showflight/58438157393,https://www.airlines-manager.com/aircraft/show/120933644,19:30,23:44,320,"$269,130.00","$237,138.00",$741.06,"$56,016.85"
IAH - BIL,58405117925,I-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/58405117925,https://www.airlines-manager.com/aircraft/show/117273390,2:45,9:59,320,"$458,187.00","$414,796.00","$1,296.24","$57,345.07"
IAH - BIL,58418603214,I-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/58418603214,https://www.airlines-manager.com/aircraft/show/117273392,9:00,16:14,320,"$458,187.00","$414,796.00","$1,296.24","$57,345.07"
IAH - BIL,58421791523,I-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/58421791523,https://www.airlines-manager.com/aircraft/show/117273389,11:00,18:14,320,"$458,187.00","$414,796.00","$1,296.24","$57,345.07"
IAH - BIL,58438157233,I-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715327,https://www.airlines-manager.com/network/showflight/58438157233,https://www.airlines-manager.com/aircraft/show/117273391,18:30,1:44,320,"$458,187.00","$414,796.00","$1,296.24","$57,345.07"
IAH - BNA,58405118118,I-BOI-BNA-4,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/58405118118,https://www.airlines-manager.com/aircraft/show/104258214,4:00,8:44,310,"$303,270.00","$272,061.00",$877.62,"$57,477.68"
IAH - BNA,58418603239,I-BOI-BNA-3,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/58418603239,https://www.airlines-manager.com/aircraft/show/104258213,9:15,13:59,310,"$303,270.00","$272,061.00",$877.62,"$57,477.68"
IAH - BNA,58431664279,I-BOI-BNA-2,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/58431664279,https://www.airlines-manager.com/aircraft/show/104258212,15:00,19:44,310,"$303,270.00","$272,061.00",$877.62,"$57,477.68"
IAH - BNA,58443550979,I-BOI-BNA-1,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/58443550979,https://www.airlines-manager.com/aircraft/show/104258211,22:00,2:44,310,"$303,270.00","$272,061.00",$877.62,"$57,477.68"
IAH - BNA,58446475201,I-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/58446475201,https://www.airlines-manager.com/aircraft/show/103534664,23:00,3:44,112,"$144,017.00","$124,146.00","$1,108.45","$26,228.03"
IAH - BOG,58411831099,I-56A-4 E,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/58411831099,https://www.airlines-manager.com/aircraft/show/106676235,6:00,15:59,648,"$1,308,561.00","$1,216,269.00","$1,876.96","$121,829.95"
IAH - BOG,58428583302,I-56A-6 E,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/58428583302,https://www.airlines-manager.com/aircraft/show/106676237,14:00,23:59,648,"$1,308,561.00","$1,216,269.00","$1,876.96","$121,829.95"
IAH - BOG,58441017346,I-56A-1 E,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/58441017346,https://www.airlines-manager.com/aircraft/show/106676232,20:00,5:59,648,"$1,308,561.00","$1,216,269.00","$1,876.96","$121,829.95"
IAH - BOI,58394056780,I-BOI-BNA-3,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/58394056780,https://www.airlines-manager.com/aircraft/show/104258213,1:15,9:14,310,"$503,286.00","$461,659.00","$1,489.22","$57,827.85"
IAH - BOI,58411831187,I-BOI-BNA-2,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/58411831187,https://www.airlines-manager.com/aircraft/show/104258212,7:00,14:59,310,"503,286$","461,659$","$1,489.22","$57,827.85"
IAH - BOI,58428583353,I-BOI-BNA-1,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/58428583353,https://www.airlines-manager.com/aircraft/show/104258211,14:00,21:59,310,"503,286$","461,659$","$1,489.22","$57,827.85"
IAH - BOI,58431664306,I-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/58431664306,https://www.airlines-manager.com/aircraft/show/103534664,15:00,22:59,112,"236,692$","209,130$","$1,867.23","$26,195.82"
IAH - BOI,58441017362,I-BOI-BNA-4,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/58441017362,https://www.airlines-manager.com/aircraft/show/104258214,20:00,3:59,310,"503,286$","461,659$","$1,489.22","$57,827.85"
IAH - BOS,58394056847,I-JFK-LAX-3,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/58394056847,https://www.airlines-manager.com/aircraft/show/88400800,1:45,9:59,400,"$669,510.00","$607,706.00","$1,519.27","$73,810.45"
IAH - BOS,58421791487,I-JFK-LAX-2,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/58421791487,https://www.airlines-manager.com/aircraft/show/88400799,11:00,19:14,400,"$669,510.00","$607,706.00","$1,519.27","$73,810.45"
IAH - BOS,58425449747,I-JFK-LAX-4,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/58425449747,https://www.airlines-manager.com/aircraft/show/88400801,12:00,20:14,400,"$669,510.00","$607,706.00","$1,519.27","$73,810.45"
IAH - BOS,58435221342,I-JFK-LAX-5,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/58435221342,https://www.airlines-manager.com/aircraft/show/89233038,17:45,1:59,400,"$669,510.00","$607,706.00","$1,519.27","$73,810.45"
IAH - BOS,58438157226,I-JFK-LAX-1,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/58438157226,https://www.airlines-manager.com/aircraft/show/88400798,18:30,2:44,388,"$657,524.00","$596,217.00","$1,536.64","$72,415.02"
IAH - BSB,58421791607,I-84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/58421791607,https://www.airlines-manager.com/aircraft/show/89124076,11:15,5:29,932,"$3,074,782.00","$2,806,848.00","$3,011.64","$153,940.48"
IAH - BSB,58441017432,I-84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/58441017432,https://www.airlines-manager.com/aircraft/show/88905140,20:15,14:29,932,"$3,074,782.00","$2,806,848.00","$3,011.64","$153,940.48"
IAH - BTV,58394056129,I-BTV-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/58394056129,https://www.airlines-manager.com/aircraft/show/86385103,0:00,8:14,310,"$518,466.00","$476,739.00","$1,537.87","$57,903.52"
IAH - BTV,58405118166,I-BTV-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/58405118166,https://www.airlines-manager.com/aircraft/show/82543907,4:15,12:29,112,"$244,091.00","$216,316.00","$1,931.39","$26,273.20"
IAH - BTV,58411831200,I-BTV-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/58411831200,https://www.airlines-manager.com/aircraft/show/114373409,7:15,15:29,310,"$518,466.00","$476,739.00","$1,537.87","$57,903.52"
IAH - BTV,58428583370,I-BTV-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/58428583370,https://www.airlines-manager.com/aircraft/show/114373410,14:00,22:14,310,"$518,466.00","$476,739.00","$1,537.87","$57,903.52"
IAH - BTV,58438157304,I-BTV-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/58438157304,https://www.airlines-manager.com/aircraft/show/113994196,18:45,2:59,310,"$518,466.00","$476,739.00","$1,537.87","$57,903.52"
IAH - BUF,58394056782,I-PVD-BUF-4,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/58394056782,https://www.airlines-manager.com/aircraft/show/107467127,1:15,8:14,310,"$454,514.00","$415,847.00","$1,341.44","$59,548.50"
IAH - BUF,58405118119,I-PVD-BUF-3,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/58405118119,https://www.airlines-manager.com/aircraft/show/107467128,4:00,10:59,310,"$454,514.00","$415,847.00","$1,341.44","$59,548.50"
IAH - BUF,58425449969,I-PVD-BUF-2,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/58425449969,https://www.airlines-manager.com/aircraft/show/107467129,13:00,19:59,310,"$454,514.00","$415,847.00","$1,341.44","$59,548.50"
IAH - BUF,58435221286,I-PVD-BUF-5 B,A319-100,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/58435221286,https://www.airlines-manager.com/aircraft/show/110582843,17:00,23:59,198,"$343,010.00","$312,022.00","$1,575.87","$44,680.95"
IAH - BUF,58443550898,I-PVD-BUF-1,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/58443550898,https://www.airlines-manager.com/aircraft/show/107467130,21:15,4:14,310,"$454,514.00","$415,847.00","$1,341.44","$59,548.50"
IAH - BUR,58405117904,I-YEG-BUR-4,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/58405117904,https://www.airlines-manager.com/aircraft/show/117273341,2:30,9:59,310,"469,959$","431,290$","$1,391.26","$57,633.41"
IAH - BUR,58405117905,I-YEG-BUR-3,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/58405117905,https://www.airlines-manager.com/aircraft/show/117273342,3:15,10:44,310,"469,959$","431,290$","$1,391.26","$57,633.41"
IAH - BUR,58421791470,I-YEG-BUR-5,A321neo,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/58421791470,https://www.airlines-manager.com/aircraft/show/117273340,11:00,18:29,338,"509,269$","472,318$","$1,397.39","$63,115.99"
IAH - BUR,58435221413,I-YEG-BUR-2,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/58435221413,https://www.airlines-manager.com/aircraft/show/117273343,18:00,1:29,310,"469,959$","431,290$","$1,391.26","$57,633.41"
IAH - BUR,58441017411,I-YEG-BUR-1,A321-200,https://www.airlines-manager.com/network/showline/49715316,https://www.airlines-manager.com/network/showflight/58441017411,https://www.airlines-manager.com/aircraft/show/117273344,20:15,3:44,299,"$460,078.00","$421,823.00","$1,410.78","$56,368.33"
IAH - BWI,58394056170,I-BWI-PHL-3,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/58394056170,https://www.airlines-manager.com/aircraft/show/106007215,0:15,6:59,338,"$470,991.00","$429,620.00","$1,271.07","$63,804.95"
IAH - BWI,58421791465,I-BWI-PHL-2,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/58421791465,https://www.airlines-manager.com/aircraft/show/106007214,11:00,17:44,338,"$470,991.00","$429,620.00","$1,271.07","$63,804.95"
IAH - BWI,58428583280,I-BWI-PHL-1,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/58428583280,https://www.airlines-manager.com/aircraft/show/106007213,13:45,20:29,338,"$470,991.00","$429,620.00","$1,271.07","$63,804.95"
IAH - BWI,58428583281,I-BWI-PHL-5,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/58428583281,https://www.airlines-manager.com/aircraft/show/106007217,14:45,21:29,338,"$470,991.00","$429,620.00","$1,271.07","$63,804.95"
IAH - BWI,58441017540,I-BWI-PHL-4,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/58441017540,https://www.airlines-manager.com/aircraft/show/106007216,21:00,3:44,338,"$470,991.00","$429,620.00","$1,271.07","$63,804.95"
IAH - BZN,58394056453,I-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/58394056453,https://www.airlines-manager.com/aircraft/show/117273392,0:30,7:59,320,"$475,813.00","$432,051.00","$1,350.16","$57,735.10"
IAH - BZN,58405117889,I-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/58405117889,https://www.airlines-manager.com/aircraft/show/117273389,2:30,9:59,320,"$475,813.00","$432,051.00","$1,350.16","$57,735.10"
IAH - BZN,58421791525,I-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/58421791525,https://www.airlines-manager.com/aircraft/show/117273391,11:00,18:29,320,"$475,813.00","$432,051.00","$1,350.16","$57,735.10"
IAH - BZN,58438157365,I-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715337,https://www.airlines-manager.com/network/showflight/58438157365,https://www.airlines-manager.com/aircraft/show/117273390,19:15,2:44,320,"$475,813.00","$432,051.00","$1,350.16","$57,735.10"
IAH - CAK,58405117979,I-BTV-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/58405117979,https://www.airlines-manager.com/aircraft/show/113994196,3:00,9:14,310,"$393,568.00","$359,133.00","$1,158.49","$57,614.92"
IAH - CAK,58415054067,I-BTV-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/58415054067,https://www.airlines-manager.com/aircraft/show/86385103,8:15,14:29,310,"$393,568.00","$359,133.00","$1,158.49","$57,614.92"
IAH - CAK,58425449987,I-BTV-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/58425449987,https://www.airlines-manager.com/aircraft/show/82543907,13:00,19:14,112,"$185,895.00","$163,341.00","$1,458.40","$26,204.44"
IAH - CAK,58431664414,I-BTV-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/58431664414,https://www.airlines-manager.com/aircraft/show/114373409,16:00,22:14,310,"$393,568.00","$359,133.00","$1,158.49","$57,614.92"
IAH - CAK,58443551023,I-BTV-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/58443551023,https://www.airlines-manager.com/aircraft/show/114373410,22:15,4:29,299,"$385,265.00","$351,157.00","$1,174.44","$56,335.35"
IAH - CHS,58394056842,I-RIC-SDF-5,ERJ-175,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/58394056842,https://www.airlines-manager.com/aircraft/show/107467211,1:30,7:14,112,"$170,394.00","$149,237.00","$1,332.47","$26,029.71"
IAH - CHS,58405118054,I-RIC-SDF-4,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/58405118054,https://www.airlines-manager.com/aircraft/show/107467131,3:30,9:14,310,"$359,561.00","$326,985.00","$1,054.79","$57,032.27"
IAH - CHS,58425449789,I-RIC-SDF-3,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/58425449789,https://www.airlines-manager.com/aircraft/show/107467132,12:00,17:44,310,"$359,561.00","$326,985.00","$1,054.79","$57,032.27"
IAH - CHS,58435221305,I-RIC-SDF-2,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/58435221305,https://www.airlines-manager.com/aircraft/show/107467133,17:15,22:59,310,"$359,561.00","$326,985.00","$1,054.79","$57,032.27"
IAH - CHS,58446475267,I-RIC-SDF-1,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/58446475267,https://www.airlines-manager.com/aircraft/show/107467134,23:45,5:29,310,"359,561$","326,985$","$1,054.79","$57,032.27"
IAH - CID,58421791526,I-EUG-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/58421791526,https://www.airlines-manager.com/aircraft/show/119525218,11:00,16:29,320,"342,489$","307,306$",$960.33,"$56,043.65"
IAH - CID,58425449927,I-EUG-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/58425449927,https://www.airlines-manager.com/aircraft/show/119525217,13:00,18:29,320,"342,489$","307,306$",$960.33,"$56,043.65"
IAH - CID,58441017320,I-EUG-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/58441017320,https://www.airlines-manager.com/aircraft/show/119525219,19:45,1:14,320,"342,489$","307,306$",$960.33,"$56,043.65"
IAH - CID,58443550951,I-EUG-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50385690,https://www.airlines-manager.com/network/showflight/58443550951,https://www.airlines-manager.com/aircraft/show/119525220,21:45,3:14,307,"334,092$","299,205$",$974.61,"$54,566.26"
IAH - CLE,58394056893,I-CLE-STL-3,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/58394056893,https://www.airlines-manager.com/aircraft/show/103600702,2:00,8:14,310,"401,468$","364,757$","$1,176.64","$58,517.17"
IAH - CLE,58415054021,I-CLE-STL-2,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/58415054021,https://www.airlines-manager.com/aircraft/show/103600701,7:45,13:59,310,"401,468$","364,757$","$1,176.64","$58,517.17"
IAH - CLE,58428583350,I-CLE-STL-1,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/58428583350,https://www.airlines-manager.com/aircraft/show/103600700,14:00,20:14,310,"401,468$","364,757$","$1,176.64","$58,517.17"
IAH - CLE,58431664351,I-CLE-STL-5 B,A319-100,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/58431664351,https://www.airlines-manager.com/aircraft/show/110582844,15:30,21:44,198,"303,145$","273,729$","$1,382.47","$43,913.74"
IAH - CLE,58438157340,I-CLE-STL-4,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/58438157340,https://www.airlines-manager.com/aircraft/show/88725601,19:00,1:14,310,"$401,468.00","$364,757.00","$1,176.64","$58,517.17"
IAH - CLT,58405118087,I-SLC-CLT-3,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/58405118087,https://www.airlines-manager.com/aircraft/show/93094697,3:45,9:29,310,"$362,120.00","$319,820.00","$1,031.68","$55,782.56"
IAH - CLT,58418603337,I-SLC-CLT-2,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/58418603337,https://www.airlines-manager.com/aircraft/show/93094698,10:00,15:44,310,"$362,120.00","$319,820.00","$1,031.68","$55,782.56"
IAH - CLT,58425449812,I-SLC-CLT-6,ERJ-175,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/58425449812,https://www.airlines-manager.com/aircraft/show/93100455,12:00,17:44,112,"$171,249.00","$144,278.00","$1,288.20","$25,164.77"
IAH - CLT,58435221222,I-SLC-CLT-1,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/58435221222,https://www.airlines-manager.com/aircraft/show/93094699,16:45,22:29,310,"$362,120.00","$319,820.00","$1,031.68","$55,782.56"
IAH - CLT,58438157298,I-SLC-CLT-5,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/58438157298,https://www.airlines-manager.com/aircraft/show/93094695,18:45,0:29,310,"$362,120.00","$319,820.00","$1,031.68","$55,782.56"
IAH - CLT,58443550978,I-SLC-CLT-4,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/58443550978,https://www.airlines-manager.com/aircraft/show/93094696,22:00,3:44,310,"$362,120.00","$319,820.00","$1,031.68","$55,782.56"
IAH - CMH,58411831186,I-RNO-MCI-1,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/58411831186,https://www.airlines-manager.com/aircraft/show/103882355,7:00,12:59,310,"$379,887.00","$344,620.00","$1,111.68","$57,596.66"
IAH - CMH,58421791552,I-RNO-MCI-4,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/58421791552,https://www.airlines-manager.com/aircraft/show/103882358,11:00,16:59,310,"379,887$","344,620$","$1,111.68","$57,596.66"
IAH - CMH,58425449814,I-RNO-MCI-5,ERJ-175,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/58425449814,https://www.airlines-manager.com/aircraft/show/105099861,12:00,17:59,112,"179,329$","156,449$","$1,396.87","$26,147.47"
IAH - CMH,58438157374,I-RNO-MCI-3,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/58438157374,https://www.airlines-manager.com/aircraft/show/103882357,19:15,1:14,310,"379,887$","344,620$","$1,111.68","$57,596.66"
IAH - CMH,58446475188,I-RNO-MCI-2,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/58446475188,https://www.airlines-manager.com/aircraft/show/103882356,23:00,4:59,310,"379,887$","344,620$","$1,111.68","$57,596.66"
IAH - COS,58394056866,I-RNO-MCI-1,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/58394056866,https://www.airlines-manager.com/aircraft/show/103882355,1:45,6:59,310,"$332,166.00","$299,251.00",$965.33,"$57,181.72"
IAH - COS,58408651879,I-RNO-MCI-4,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/58408651879,https://www.airlines-manager.com/aircraft/show/103882358,5:45,10:59,310,"$332,166.00","$299,251.00",$965.33,"$57,181.72"
IAH - COS,58428583352,I-RNO-MCI-3,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/58428583352,https://www.airlines-manager.com/aircraft/show/103882357,14:00,19:14,310,"$332,166.00","$299,251.00",$965.33,"$57,181.72"
IAH - COS,58435221355,I-RNO-MCI-2,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/58435221355,https://www.airlines-manager.com/aircraft/show/103882356,17:45,22:59,310,"$332,166.00","$299,251.00",$965.33,"$57,181.72"
IAH - COS,58446475172,I-RNO-MCI-5,ERJ-175,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/58446475172,https://www.airlines-manager.com/aircraft/show/105099861,22:45,3:59,112,"$157,827.00","$136,666.00","$1,220.23","$26,114.52"
IAH - CUN,58394056609,I-56A-4 E,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/58394056609,https://www.airlines-manager.com/aircraft/show/106676235,1:00,5:59,648,"$627,403.00","$574,294.00",$886.26,"$115,242.94"
IAH - CUN,58425449838,I-56A-5 E,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/58425449838,https://www.airlines-manager.com/aircraft/show/106676236,12:30,17:29,648,"$627,403.00","$574,294.00",$886.26,"$115,242.94"
IAH - CUN,58441017451,I-56A-7 E,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/58441017451,https://www.airlines-manager.com/aircraft/show/106676238,20:30,1:29,648,"$627,403.00","$574,294.00",$886.26,"$115,242.94"
IAH - CVG,58394056340,I-SMF-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/58394056340,https://www.airlines-manager.com/aircraft/show/99093332,0:15,5:44,320,"$350,471.00","$309,770.00",$968.03,"$56,493.01"
IAH - CVG,58405118102,I-SMF-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/58405118102,https://www.airlines-manager.com/aircraft/show/99093333,4:00,9:29,320,"$350,471.00","$309,770.00",$968.03,"$56,493.01"
IAH - CVG,58415054037,I-SMF-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/58415054037,https://www.airlines-manager.com/aircraft/show/99093334,8:00,13:29,320,"$350,471.00","$309,770.00",$968.03,"$56,493.01"
IAH - CVG,58428583319,I-SMF-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/58428583319,https://www.airlines-manager.com/aircraft/show/99093335,14:00,19:29,320,"$350,471.00","$309,770.00",$968.03,"$56,493.01"
IAH - CVG,58431664421,I-SMF-CVG-5 B,A319-100,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/58431664421,https://www.airlines-manager.com/aircraft/show/106499070,16:00,21:29,198,"$265,770.00","$237,243.00","$1,198.20","$43,266.20"
IAH - DAB,58394056802,I-ILM-SRQ-4,A321-200,https://www.airlines-manager.com/network/showline/50666457,https://www.airlines-manager.com/network/showflight/58394056802,https://www.airlines-manager.com/aircraft/show/120452415,1:15,6:44,310,"344,652$","312,771$","$1,008.94","$57,040.30"
IAH - DAB,58418603226,I-ILM-SRQ-3,A321-200,https://www.airlines-manager.com/network/showline/50666457,https://www.airlines-manager.com/network/showflight/58418603226,https://www.airlines-manager.com/aircraft/show/120452416,9:00,14:29,310,"344,652$","312,771$","$1,008.94","$57,040.30"
IAH - DAB,58428583407,I-ILM-SRQ-2,A321-200,https://www.airlines-manager.com/network/showline/50666457,https://www.airlines-manager.com/network/showflight/58428583407,https://www.airlines-manager.com/aircraft/show/120452417,14:15,19:44,310,"344,652$","312,771$","$1,008.94","$57,040.30"
IAH - DAB,58438157402,I-ILM-SRQ-1,A321-200,https://www.airlines-manager.com/network/showline/50666457,https://www.airlines-manager.com/network/showflight/58438157402,https://www.airlines-manager.com/aircraft/show/120452418,19:30,0:59,283,"327,064$","295,819$","$1,045.30","$53,948.75"
IAH - DEN,58425449741,I-SEA-DEN-5,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/58425449741,https://www.airlines-manager.com/aircraft/show/105562975,12:00,17:29,338,"378,910$","325,676$",$963.54,"$59,393.80"
IAH - DEN,58425449742,I-SEA-DEN-1,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/58425449742,https://www.airlines-manager.com/aircraft/show/105562971,13:00,18:29,338,"$378,910.00","$325,676.00",$963.54,"$59,393.80"
IAH - DEN,58428583387,I-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/58428583387,https://www.airlines-manager.com/aircraft/show/120293379,14:00,19:29,0,"$97,604.00","$23,471.00",$0.00,"$4,280.43"
IAH - DEN,58446475099,I-SEA-DEN-2,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/58446475099,https://www.airlines-manager.com/aircraft/show/105562972,22:30,3:59,338,"$378,910.00","$325,676.00",$963.54,"$59,393.80"
IAH - DEN,58446475100,I-SEA-DEN-3,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/58446475100,https://www.airlines-manager.com/aircraft/show/105562973,23:00,4:29,338,"$378,910.00","$325,676.00",$963.54,"$59,393.80"
IAH - DEN,58446475101,I-SEA-DEN-4,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/58446475101,https://www.airlines-manager.com/aircraft/show/105562974,23:30,4:59,338,"378,910$","325,676$",$963.54,"$59,393.80"
IAH - DFW,58394056644,I-SMF-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/58394056644,https://www.airlines-manager.com/aircraft/show/99093333,1:00,3:59,320,"129,413$","81,819$",$255.68,"$27,425.36"
IAH - DFW,58408651814,I-SMF-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/58408651814,https://www.airlines-manager.com/aircraft/show/99093334,5:00,7:59,320,"129,413$","81,819$",$255.68,"$27,425.36"
IAH - DFW,58421791508,I-SMF-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/58421791508,https://www.airlines-manager.com/aircraft/show/99093335,11:00,13:59,320,"129,413$","81,819$",$255.68,"$27,425.36"
IAH - DFW,58425449984,I-SMF-CVG-5 B,A319-100,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/58425449984,https://www.airlines-manager.com/aircraft/show/106499070,13:00,15:59,198,"97,724$","65,636$",$331.49,"$22,000.89"
IAH - DFW,58428583406,I-YEG-BUR-4,A321-200,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/58428583406,https://www.airlines-manager.com/aircraft/show/117273341,14:15,17:14,310,"$130,862.00","$90,764.00",$292.79,"$30,423.69"
IAH - DFW,58443550890,I-SMF-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/58443550890,https://www.airlines-manager.com/aircraft/show/99093332,21:15,0:14,320,"$129,413.00","$81,819.00",$255.68,"$27,425.36"
IAH - DSM,58405118008,I-FAT-SAV-1,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/58405118008,https://www.airlines-manager.com/aircraft/show/110424761,3:15,8:29,320,"$333,617.00","$298,687.00",$933.40,"$57,073.95"
IAH - DSM,58415054120,I-FAT-SAV-4,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/58415054120,https://www.airlines-manager.com/aircraft/show/110424758,8:45,13:59,320,"$333,617.00","$298,687.00",$933.40,"$57,073.95"
IAH - DSM,58428583329,I-FAT-SAV-3,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/58428583329,https://www.airlines-manager.com/aircraft/show/110424759,14:00,19:14,320,"$333,617.00","$298,687.00",$933.40,"$57,073.95"
IAH - DSM,58438157232,I-FAT-SAV-2,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/58438157232,https://www.airlines-manager.com/aircraft/show/110424760,18:30,23:44,320,"$333,617.00","$298,687.00",$933.40,"$57,073.95"
IAH - DTW,58394056468,I-MIA-ORD-1,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/58394056468,https://www.airlines-manager.com/aircraft/show/90183184,0:30,6:44,310,"$396,458.00","$351,701.00","$1,134.52","$56,422.62"
IAH - DTW,58405117899,I-MIA-ORD-5,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/58405117899,https://www.airlines-manager.com/aircraft/show/90183180,2:30,8:44,310,"$396,458.00","$351,701.00","$1,134.52","$56,422.62"
IAH - DTW,58411831111,I-MIA-ORD-4,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/58411831111,https://www.airlines-manager.com/aircraft/show/90183181,6:00,12:14,310,"$396,458.00","$351,701.00","$1,134.52","$56,422.62"
IAH - DTW,58425449947,I-MIA-ORD-3,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/58425449947,https://www.airlines-manager.com/aircraft/show/90183182,13:00,19:14,310,"$396,458.00","$351,701.00","$1,134.52","$56,422.62"
IAH - DTW,58438157295,I-MIA-ORD-2,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/58438157295,https://www.airlines-manager.com/aircraft/show/90183183,18:45,0:59,310,"$396,458.00","$351,701.00","$1,134.52","$56,422.62"
IAH - DTW,58441017537,I-MIA-ORD-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/58441017537,https://www.airlines-manager.com/aircraft/show/90140936,20:45,2:59,136,"$188,433.00","$159,887.00","$1,175.64","$25,650.32"
IAH - ECP,58394056701,I-ILM-SRQ-1,A321-200,https://www.airlines-manager.com/network/showline/50666459,https://www.airlines-manager.com/network/showflight/58394056701,https://www.airlines-manager.com/aircraft/show/120452418,1:00,5:14,310,"$272,639.00","$244,718.00",$789.41,"$57,807.40"
IAH - ECP,58418603261,I-ILM-SRQ-4,A321-200,https://www.airlines-manager.com/network/showline/50666459,https://www.airlines-manager.com/network/showflight/58418603261,https://www.airlines-manager.com/aircraft/show/120452415,9:30,13:44,310,"$272,639.00","$244,718.00",$789.41,"$57,807.40"
IAH - ECP,58428583422,I-ILM-SRQ-3,A321-200,https://www.airlines-manager.com/network/showline/50666459,https://www.airlines-manager.com/network/showflight/58428583422,https://www.airlines-manager.com/aircraft/show/120452416,14:30,18:44,310,"$272,639.00","$244,718.00",$789.41,"$57,807.40"
IAH - ECP,58441017336,I-ILM-SRQ-2,A321-200,https://www.airlines-manager.com/network/showline/50666459,https://www.airlines-manager.com/network/showflight/58441017336,https://www.airlines-manager.com/aircraft/show/120452417,19:45,23:59,310,"$272,639.00","$244,718.00",$789.41,"$57,807.40"
IAH - ELP,58405118053,I-PBI-RSW-3,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/58405118053,https://www.airlines-manager.com/aircraft/show/104717245,3:30,8:14,310,"$301,012.00","$270,655.00",$873.08,"$57,180.63"
IAH - ELP,58421791556,I-PBI-RSW-2,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/58421791556,https://www.airlines-manager.com/aircraft/show/104717246,11:00,15:44,310,"$301,012.00","$270,655.00",$873.08,"$57,180.63"
IAH - ELP,58435221223,I-PBI-RSW-1,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/58435221223,https://www.airlines-manager.com/aircraft/show/104717247,16:45,21:29,310,"$301,012.00","$270,655.00",$873.08,"$57,180.63"
IAH - ELP,58438157355,I-PBI-RSW-5,ERJ-175,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/58438157355,https://www.airlines-manager.com/aircraft/show/104743902,19:00,23:44,112,"$143,337.00","$123,960.00","$1,106.79","$26,188.73"
IAH - ELP,58443550981,I-PBI-RSW-4,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/58443550981,https://www.airlines-manager.com/aircraft/show/104717244,22:00,2:44,310,"$301,012.00","$270,655.00",$873.08,"$57,180.63"
IAH - EUG,58394056752,I-EUG-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/58394056752,https://www.airlines-manager.com/aircraft/show/119525219,1:15,10:14,320,"$572,025.00","$522,293.00","$1,632.17","$58,140.22"
IAH - EUG,58405118011,I-EUG-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/58405118011,https://www.airlines-manager.com/aircraft/show/119525220,3:15,12:14,320,"$572,025.00","$522,293.00","$1,632.17","$58,140.22"
IAH - EUG,58421791592,I-EUG-MFR-5,ERJ-175,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/58421791592,https://www.airlines-manager.com/aircraft/show/119525248,11:00,20:14,112,"$269,694.00","$239,563.00","$2,138.96","$25,945.45"
IAH - EUG,58435221193,I-EUG-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/58435221193,https://www.airlines-manager.com/aircraft/show/119525218,16:30,1:29,320,"$572,025.00","$522,293.00","$1,632.17","$58,140.22"
IAH - EUG,58438157234,I-EUG-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50385696,https://www.airlines-manager.com/network/showflight/58438157234,https://www.airlines-manager.com/aircraft/show/119525217,18:30,3:29,320,"$572,025.00","$522,293.00","$1,632.17","$58,140.22"
IAH - EZE,58405118124,I-84A-2 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/58405118124,https://www.airlines-manager.com/aircraft/show/89439130,4:00,0:29,932,"$3,386,823.00","$3,089,561.00","$3,314.98","$150,832.92"
IAH - EZE,58408651866,I-84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/58408651866,https://www.airlines-manager.com/aircraft/show/89124075,5:30,1:59,932,"$3,386,823.00","$3,089,561.00","$3,314.98","$150,832.92"
IAH - FAR,58394056821,I-MSO-FAR-4,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/58394056821,https://www.airlines-manager.com/aircraft/show/110424754,1:30,8:14,320,"$419,627.00","$379,180.00","$1,184.94","$56,313.86"
IAH - FAR,58405118146,I-MSO-FAR-3,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/58405118146,https://www.airlines-manager.com/aircraft/show/110424755,4:15,10:59,320,"$419,627.00","$379,180.00","$1,184.94","$56,313.86"
IAH - FAR,58425449763,I-MSO-FAR-2,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/58425449763,https://www.airlines-manager.com/aircraft/show/110424756,12:00,18:44,320,"$419,627.00","$379,180.00","$1,184.94","$56,313.86"
IAH - FAR,58443550971,I-MSO-FAR-1,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/58443550971,https://www.airlines-manager.com/aircraft/show/110424757,22:00,4:44,320,"$419,627.00","$379,180.00","$1,184.94","$56,313.86"
IAH - FAT,58405118105,I-FAT-SAV-2,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/58405118105,https://www.airlines-manager.com/aircraft/show/110424760,4:00,11:44,320,"$499,859.00","$454,406.00","$1,420.02","$58,759.40"
IAH - FAT,58428583330,I-FAT-SAV-1,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/58428583330,https://www.airlines-manager.com/aircraft/show/110424761,14:00,21:44,320,"$499,859.00","$454,406.00","$1,420.02","$58,759.40"
IAH - FAT,58438157199,I-FAT-SAV-4,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/58438157199,https://www.airlines-manager.com/aircraft/show/110424758,18:15,1:59,320,"$499,859.00","$454,406.00","$1,420.02","$58,759.40"
IAH - FAT,58446475231,I-FAT-SAV-3,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/58446475231,https://www.airlines-manager.com/aircraft/show/110424759,23:30,7:14,320,"499,859$","454,406$","$1,420.02","$58,759.40"
IAH - FCA,58394056856,I-BIL-FCA-3,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/58394056856,https://www.airlines-manager.com/aircraft/show/117273391,1:45,9:59,320,"$524,002.00","$476,812.00","$1,490.04","$57,912.39"
IAH - FCA,58421791524,I-BIL-FCA-2,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/58421791524,https://www.airlines-manager.com/aircraft/show/117273390,11:00,19:14,320,"$524,002.00","$476,812.00","$1,490.04","$57,912.39"
IAH - FCA,58431664438,I-BIL-FCA-4,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/58431664438,https://www.airlines-manager.com/aircraft/show/117273392,16:15,0:29,320,"$524,002.00","$476,812.00","$1,490.04","$57,912.39"
IAH - FCA,58438157200,I-BIL-FCA-1,737-900ER,https://www.airlines-manager.com/network/showline/49715330,https://www.airlines-manager.com/network/showflight/58438157200,https://www.airlines-manager.com/aircraft/show/117273389,18:15,2:29,313,"516,958$","470,071$","$1,501.82","$57,093.64"
IAH - FLL,58394056470,I-SLC-CLT-5,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/58394056470,https://www.airlines-manager.com/aircraft/show/93094695,0:30,6:14,310,"$369,126.00","$331,898.00","$1,070.64","$57,889.19"
IAH - FLL,58405118086,I-SLC-CLT-4,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/58405118086,https://www.airlines-manager.com/aircraft/show/93094696,3:45,9:29,310,"$369,126.00","$331,898.00","$1,070.64","$57,889.19"
IAH - FLL,58418603336,I-SLC-CLT-3,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/58418603336,https://www.airlines-manager.com/aircraft/show/93094697,10:00,15:44,310,"$369,126.00","$331,898.00","$1,070.64","$57,889.19"
IAH - FLL,58431664360,I-SLC-CLT-2,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/58431664360,https://www.airlines-manager.com/aircraft/show/93094698,15:45,21:29,310,"$369,126.00","$331,898.00","$1,070.64","$57,889.19"
IAH - FLL,58435221361,I-SLC-CLT-6,ERJ-175,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/58435221361,https://www.airlines-manager.com/aircraft/show/93100455,17:45,23:29,112,"174,941$","150,921$","$1,347.51","$26,323.43"
IAH - FLL,58446475119,I-SLC-CLT-1,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/58446475119,https://www.airlines-manager.com/aircraft/show/93094699,22:30,4:14,310,"369,126$","331,898$","$1,070.64","$57,889.19"
IAH - FSD,58408651789,I-MSO-FAR-1,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/58408651789,https://www.airlines-manager.com/aircraft/show/110424757,4:45,10:29,320,"363,501$","326,666$","$1,020.83","$56,976.63"
IAH - FSD,58415054062,I-MSO-FAR-4,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/58415054062,https://www.airlines-manager.com/aircraft/show/110424754,8:15,13:59,320,"363,501$","326,666$","$1,020.83","$56,976.63"
IAH - FSD,58421791518,I-MSO-FAR-3,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/58421791518,https://www.airlines-manager.com/aircraft/show/110424755,11:00,16:44,320,"363,501$","326,666$","$1,020.83","$56,976.63"
IAH - FSD,58438157286,I-MSO-FAR-2,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/58438157286,https://www.airlines-manager.com/aircraft/show/110424756,18:45,0:29,286,"$340,045.00","$304,073.00","$1,063.19","$53,035.99"
IAH - GDL,58408651785,I-YYC-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/58408651785,https://www.airlines-manager.com/aircraft/show/114266977,4:45,9:59,400,"$440,176.00","$397,663.00",$994.16,"$75,986.56"
IAH - GDL,58421791448,I-YYC-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/58421791448,https://www.airlines-manager.com/aircraft/show/114266980,10:45,15:59,400,"$440,176.00","$397,663.00",$994.16,"$75,986.56"
IAH - GDL,58425449752,I-YYC-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/58425449752,https://www.airlines-manager.com/aircraft/show/114266979,12:00,17:14,400,"$440,176.00","$397,663.00",$994.16,"$75,986.56"
IAH - GDL,58441017354,I-YYC-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/58441017354,https://www.airlines-manager.com/aircraft/show/114266978,20:00,1:14,359,"$400,952.00","$359,530.00","$1,001.48","$68,700.00"
IAH - GIG,58394056151,I-84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/58394056151,https://www.airlines-manager.com/aircraft/show/88905140,0:00,20:14,932,"$3,397,888.00","$3,095,243.00","$3,321.08","$152,977.41"
IAH - GIG,58394056152,I-84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/58394056152,https://www.airlines-manager.com/aircraft/show/89124074,2:00,22:14,932,"$3,397,888.00","$3,095,243.00","$3,321.08","$152,977.41"
IAH - GRR,58394056801,I-GRR-MSN-3,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/58394056801,https://www.airlines-manager.com/aircraft/show/117273346,1:15,7:29,310,"$391,492.00","$356,734.00","$1,150.75","$57,230.05"
IAH - GRR,58411831201,I-GRR-MSN-2,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/58411831201,https://www.airlines-manager.com/aircraft/show/117273347,7:15,13:29,310,"$391,492.00","$356,734.00","$1,150.75","$57,230.05"
IAH - GRR,58428583377,I-GRR-MSN-1,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/58428583377,https://www.airlines-manager.com/aircraft/show/117273348,14:00,20:14,310,"$391,492.00","$356,734.00","$1,150.75","$57,230.05"
IAH - GRR,58431664417,I-GRR-MSN-4,A321-200,https://www.airlines-manager.com/network/showline/49715350,https://www.airlines-manager.com/network/showflight/58431664417,https://www.airlines-manager.com/aircraft/show/117273345,16:00,22:14,310,"$391,492.00","$356,734.00","$1,150.75","$57,230.05"
IAH - GRU,58394056611,I-56A-7 E,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/58394056611,https://www.airlines-manager.com/aircraft/show/106676238,1:00,20:29,648,"$2,492,644.00","$2,323,002.00","$3,584.88","$119,230.21"
IAH - GRU,58421791483,I-56A-2 E,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/58421791483,https://www.airlines-manager.com/aircraft/show/106676233,11:00,6:29,648,"$2,492,644.00","$2,323,002.00","$3,584.88","$119,230.21"
IAH - GRU,58435221235,I-56A-4 E,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/58435221235,https://www.airlines-manager.com/aircraft/show/106676235,17:00,12:29,648,"$2,492,644.00","$2,323,002.00","$3,584.88","$119,230.21"
IAH - GSO,58394056860,I-SYR-ROC-1,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/58394056860,https://www.airlines-manager.com/aircraft/show/119525224,1:45,7:44,320,"$376,343.00","$337,991.00","$1,056.22","$56,488.75"
IAH - GSO,58405117926,I-SYR-ROC-4,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/58405117926,https://www.airlines-manager.com/aircraft/show/119525221,2:45,8:44,320,"$376,343.00","$337,991.00","$1,056.22","$56,488.75"
IAH - GSO,58421791528,I-SYR-ROC-3,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/58421791528,https://www.airlines-manager.com/aircraft/show/119525222,11:00,16:59,320,"$376,343.00","$337,991.00","$1,056.22","$56,488.75"
IAH - GSO,58438157201,I-SYR-ROC-2,737-900ER,https://www.airlines-manager.com/network/showline/50385734,https://www.airlines-manager.com/network/showflight/58438157201,https://www.airlines-manager.com/aircraft/show/119525223,18:15,0:14,320,"$376,343.00","$337,991.00","$1,056.22","$56,488.75"
IAH - IAD,58405118066,I-IAD-SAN-6,ERJ-175,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/58405118066,https://www.airlines-manager.com/aircraft/show/105400635,3:30,10:14,112,"$199,779.00","$171,525.00","$1,531.47","$25,474.01"
IAH - IAD,58411831155,I-IAD-SAN-2,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/58411831155,https://www.airlines-manager.com/aircraft/show/98578923,6:45,13:29,320,"$424,254.00","$374,670.00","$1,170.84","$55,644.06"
IAH - IAD,58418603269,I-IAD-SAN-5,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/58418603269,https://www.airlines-manager.com/aircraft/show/98578920,9:45,16:29,320,"$424,254.00","$374,670.00","$1,170.84","$55,644.06"
IAH - IAD,58425449905,I-IAD-SAN-1,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/58425449905,https://www.airlines-manager.com/aircraft/show/98578924,13:00,19:44,320,"$424,254.00","$374,670.00","$1,170.84","$55,644.06"
IAH - IAD,58435221385,I-IAD-SAN-4,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/58435221385,https://www.airlines-manager.com/aircraft/show/98578921,18:00,0:44,320,"$424,254.00","$374,670.00","$1,170.84","$55,644.06"
IAH - IAD,58443550914,I-IAD-SAN-3,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/58443550914,https://www.airlines-manager.com/aircraft/show/98578922,21:30,4:14,320,"$424,254.00","$374,670.00","$1,170.84","$55,644.06"
IAH - ICT,58418603271,I-FAT-SAV-1,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/58418603271,https://www.airlines-manager.com/aircraft/show/110424761,9:45,13:59,320,"$251,025.00","$219,441.00",$685.75,"$51,836.46"
IAH - ICT,58428583328,I-FAT-SAV-4,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/58428583328,https://www.airlines-manager.com/aircraft/show/110424758,14:00,18:14,320,"$251,025.00","$219,441.00",$685.75,"$51,836.46"
IAH - ICT,58438157364,I-FAT-SAV-3,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/58438157364,https://www.airlines-manager.com/aircraft/show/110424759,19:15,23:29,320,"$251,025.00","$219,441.00",$685.75,"$51,836.46"
IAH - ICT,58446475257,I-FAT-SAV-2,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/58446475257,https://www.airlines-manager.com/aircraft/show/110424760,23:45,3:59,320,"$251,025.00","$219,441.00",$685.75,"$51,836.46"
IAH - ILM,58394056140,I-ILM-SRQ-2,A321-200,https://www.airlines-manager.com/network/showline/50666455,https://www.airlines-manager.com/network/showflight/58394056140,https://www.airlines-manager.com/aircraft/show/120452417,0:00,6:14,310,"$394,491.00","$360,578.00","$1,163.15","$57,846.74"
IAH - ILM,58415054051,I-ILM-SRQ-1,A321-200,https://www.airlines-manager.com/network/showline/50666455,https://www.airlines-manager.com/network/showflight/58415054051,https://www.airlines-manager.com/aircraft/show/120452418,8:00,14:14,310,"$394,491.00","$360,578.00","$1,163.15","$57,846.74"
IAH - ILM,58428583291,I-ILM-SRQ-4,A321-200,https://www.airlines-manager.com/network/showline/50666455,https://www.airlines-manager.com/network/showflight/58428583291,https://www.airlines-manager.com/aircraft/show/120452415,13:45,19:59,310,"$394,491.00","$360,578.00","$1,163.15","$57,846.74"
IAH - ILM,58438157308,I-ILM-SRQ-3,A321-200,https://www.airlines-manager.com/network/showline/50666455,https://www.airlines-manager.com/network/showflight/58438157308,https://www.airlines-manager.com/aircraft/show/120452416,18:45,0:59,310,"$394,491.00","$360,578.00","$1,163.15","$57,846.74"
IAH - IND,58394056133,I-PIT-RDU-1,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/58394056133,https://www.airlines-manager.com/aircraft/show/100684074,0:00,5:29,310,"$344,712.00","$310,846.00","$1,002.73","$56,689.24"
IAH - IND,58408651797,I-PIT-RDU-5 B,A319-100,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/58408651797,https://www.airlines-manager.com/aircraft/show/110582845,4:45,10:14,198,"$261,261.00","$234,132.00","$1,182.48","$42,698.84"
IAH - IND,58411831113,I-PIT-RDU-4,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/58411831113,https://www.airlines-manager.com/aircraft/show/100684071,6:00,11:29,310,"$344,712.00","$310,846.00","$1,002.73","$56,689.24"
IAH - IND,58421791620,I-PIT-RDU-3,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/58421791620,https://www.airlines-manager.com/aircraft/show/100684072,11:30,16:59,310,"$344,712.00","$310,846.00","$1,002.73","$56,689.24"
IAH - IND,58435221353,I-PIT-RDU-2,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/58435221353,https://www.airlines-manager.com/aircraft/show/100684073,17:45,23:14,310,"$344,712.00","$310,846.00","$1,002.73","$56,689.24"
IAH - JAC,58394056881,I-SNA-SBA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/58394056881,https://www.airlines-manager.com/aircraft/show/119525225,2:00,8:59,272,"$398,546.00","$371,070.00","$1,364.23","$53,136.52"
IAH - JAC,58421791457,I-SNA-SBA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/58421791457,https://www.airlines-manager.com/aircraft/show/119525227,11:00,17:59,272,"$398,546.00","$371,070.00","$1,364.23","$53,136.52"
IAH - JAC,58425449860,I-SNA-SBA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/58425449860,https://www.airlines-manager.com/aircraft/show/119525228,13:00,19:59,272,"$398,546.00","$371,070.00","$1,364.23","$53,136.52"
IAH - JAC,58438157258,I-SNA-SBA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/58438157258,https://www.airlines-manager.com/aircraft/show/119525226,18:45,1:44,272,"$398,546.00","$371,070.00","$1,364.23","$53,136.52"
IAH - JAC,58441017476,I-SNA-SBA-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385943,https://www.airlines-manager.com/network/showflight/58441017476,https://www.airlines-manager.com/aircraft/show/119525229,20:45,3:44,272,"$398,546.00","$371,070.00","$1,364.23","$53,136.52"
IAH - JAN,58394056447,I-MSO-FAR-2,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/58394056447,https://www.airlines-manager.com/aircraft/show/110424756,0:30,3:59,320,"$177,698.00","$150,247.00",$469.52,"$43,133.11"
IAH - JAN,58421791441,I-MSO-FAR-1,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/58421791441,https://www.airlines-manager.com/aircraft/show/110424757,10:30,13:59,320,"$177,698.00","$150,247.00",$469.52,"$43,133.11"
IAH - JAN,58428583326,I-MSO-FAR-4,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/58428583326,https://www.airlines-manager.com/aircraft/show/110424754,14:00,17:29,320,"$177,698.00","$150,247.00",$469.52,"$43,133.11"
IAH - JAN,58435221216,I-MSO-FAR-3,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/58435221216,https://www.airlines-manager.com/aircraft/show/110424755,16:45,20:14,313,"$175,342.00","$147,957.00",$472.71,"$42,475.69"
IAH - JAX,58405117977,I-PBI-RSW-1,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/58405117977,https://www.airlines-manager.com/aircraft/show/104717247,3:00,8:14,310,"$338,503.00","$306,275.00",$987.98,"$58,523.89"
IAH - JAX,58415054055,I-PBI-RSW-5,ERJ-175,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/58415054055,https://www.airlines-manager.com/aircraft/show/104743902,8:00,13:14,112,"$160,419.00","$139,659.00","$1,246.96","$26,686.43"
IAH - JAX,58421791554,I-PBI-RSW-4,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/58421791554,https://www.airlines-manager.com/aircraft/show/104717244,11:00,16:14,310,"$338,503.00","$306,275.00",$987.98,"$58,523.89"
IAH - JAX,58435221203,I-PBI-RSW-3,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/58435221203,https://www.airlines-manager.com/aircraft/show/104717245,16:30,21:44,310,"$338,503.00","$306,275.00",$987.98,"$58,523.89"
IAH - JAX,58443550897,I-PBI-RSW-2,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/58443550897,https://www.airlines-manager.com/aircraft/show/104717246,21:15,2:29,310,"$338,503.00","$306,275.00",$987.98,"$58,523.89"
IAH - JFK,58394056883,I-JFK-LAX-5,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/58394056883,https://www.airlines-manager.com/aircraft/show/89233038,2:00,9:29,400,"$623,812.00","$550,503.00","$1,376.26","$73,563.88"
IAH - JFK,58421791486,I-JFK-LAX-1,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/58421791486,https://www.airlines-manager.com/aircraft/show/88400798,11:00,18:29,400,"$623,812.00","$550,503.00","$1,376.26","$73,563.88"
IAH - JFK,58438157194,I-JFK-LAX-3,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/58438157194,https://www.airlines-manager.com/aircraft/show/88400800,18:15,1:44,400,"$623,812.00","$550,503.00","$1,376.26","$73,563.88"
IAH - JFK,58438157195,I-JFK-LAX-2,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/58438157195,https://www.airlines-manager.com/aircraft/show/88400799,19:15,2:44,400,"$623,812.00","$550,503.00","$1,376.26","$73,563.88"
IAH - JFK,58443550886,I-JFK-LAX-4,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/58443550886,https://www.airlines-manager.com/aircraft/show/88400801,21:15,4:44,400,"$623,812.00","$550,503.00","$1,376.26","$73,563.88"
IAH - LAS,58405118101,I-LAS-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/58405118101,https://www.airlines-manager.com/aircraft/show/96256511,4:00,10:44,320,"$430,927.00","$369,446.00","$1,154.52","$54,868.22"
IAH - LAS,58408651811,I-LAS-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/58408651811,https://www.airlines-manager.com/aircraft/show/96250652,5:00,11:44,320,"$430,927.00","$369,446.00","$1,154.52","$54,868.22"
IAH - LAS,58408651812,I-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/58408651812,https://www.airlines-manager.com/aircraft/show/96990010,5:15,11:59,112,"$202,571.00","$168,277.00","$1,502.47","$24,991.63"
IAH - LAS,58421791505,I-LAS-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/58421791505,https://www.airlines-manager.com/aircraft/show/96177955,11:00,17:44,320,"$430,927.00","$369,446.00","$1,154.52","$54,868.22"
IAH - LAS,58428583434,I-LAS-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/58428583434,https://www.airlines-manager.com/aircraft/show/95894466,14:45,21:29,320,"$430,927.00","$369,446.00","$1,154.52","$54,868.22"
IAH - LAS,58435221336,I-LAS-ATL-6,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/58435221336,https://www.airlines-manager.com/aircraft/show/82323704,17:30,0:14,112,"$202,571.00","$168,277.00","$1,502.47","$24,991.63"
IAH - LAS,58441017480,I-LAS-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/58441017480,https://www.airlines-manager.com/aircraft/show/96183549,20:45,3:29,320,"$430,927.00","$369,446.00","$1,154.52","$54,868.22"
IAH - LAX,58405117917,I-JFK-LAX-2,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/58405117917,https://www.airlines-manager.com/aircraft/show/88400799,2:45,9:59,400,"$611,705.00","$539,532.00","$1,348.83","$74,589.68"
IAH - LAX,58405117918,I-JFK-LAX-1,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/58405117918,https://www.airlines-manager.com/aircraft/show/88400798,3:45,10:59,400,"$611,705.00","$539,532.00","$1,348.83","$74,589.68"
IAH - LAX,58408651783,I-JFK-LAX-4,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/58408651783,https://www.airlines-manager.com/aircraft/show/88400801,4:45,11:59,400,"$611,705.00","$539,532.00","$1,348.83","$74,589.68"
IAH - LAX,58421791436,I-JFK-LAX-5,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/58421791436,https://www.airlines-manager.com/aircraft/show/89233038,10:30,17:44,400,"$611,705.00","$539,532.00","$1,348.83","$74,589.68"
IAH - LAX,58421791437,I-JFK-LAX-3,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/58421791437,https://www.airlines-manager.com/aircraft/show/88400800,11:00,18:14,400,"$611,705.00","$539,532.00","$1,348.83","$74,589.68"
IAH - LEX,58408651771,I-BTV-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/58408651771,https://www.airlines-manager.com/aircraft/show/114373410,4:30,9:44,310,"$334,997.00","$305,019.00",$983.93,"$58,283.89"
IAH - LEX,58418603241,I-BTV-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/58418603241,https://www.airlines-manager.com/aircraft/show/113994196,9:15,14:29,310,"$334,997.00","$305,019.00",$983.93,"$58,283.89"
IAH - LEX,58431664271,I-BTV-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/58431664271,https://www.airlines-manager.com/aircraft/show/86385103,15:00,20:14,310,"$334,997.00","$305,019.00",$983.93,"$58,283.89"
IAH - LEX,58438157382,I-BTV-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/58438157382,https://www.airlines-manager.com/aircraft/show/82543907,19:15,0:29,112,"$159,093.00","$139,660.00","$1,246.96","$26,686.62"
IAH - LEX,58443551022,I-BTV-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/58443551022,https://www.airlines-manager.com/aircraft/show/114373409,22:15,3:29,270,"309,488$","280,417$","$1,038.58","$53,582.87"
IAH - LIM,58428583427,I-84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/58428583427,https://www.airlines-manager.com/aircraft/show/89439131,14:30,3:59,932,"2,263,507$","2,063,662$","$2,214.23","$153,052.81"
IAH - LIM,58446475272,I-84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/58446475272,https://www.airlines-manager.com/aircraft/show/89124074,23:45,13:14,932,"2,263,507$","2,063,662$","$2,214.23","$153,052.81"
IAH - LIT,58405118088,I-SJC-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/58405118088,https://www.airlines-manager.com/aircraft/show/96692491,3:45,7:14,310,"189,101$","165,095$",$532.56,"$47,395.69"
IAH - LIT,58421791550,I-SJC-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/58421791550,https://www.airlines-manager.com/aircraft/show/96692343,11:00,14:29,310,"189,101$","165,095$",$532.56,"$47,395.69"
IAH - LIT,58438157398,I-SJC-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/58438157398,https://www.airlines-manager.com/aircraft/show/96691558,19:30,22:59,310,"$189,101.00","$165,095.00",$532.56,"$47,395.69"
IAH - LIT,58441017380,I-SJC-PWM-5 B,A319-100,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/58441017380,https://www.airlines-manager.com/aircraft/show/106014350,20:00,23:29,198,"$142,700.00","$123,479.00",$623.63,"$35,448.52"
IAH - LIT,58446475237,I-SJC-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/58446475237,https://www.airlines-manager.com/aircraft/show/96694086,23:30,2:59,279,"$177,941.00","$154,253.00",$552.88,"$44,283.16"
IAH - MAF,58405118122,I-MYR-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50555962,https://www.airlines-manager.com/network/showflight/58405118122,https://www.airlines-manager.com/aircraft/show/120452411,4:00,7:44,310,"$203,359.00","$178,281.00",$575.10,"$47,753.84"
IAH - MAF,58418603356,I-MYR-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50555962,https://www.airlines-manager.com/network/showflight/58418603356,https://www.airlines-manager.com/aircraft/show/120452412,10:00,13:44,310,"$203,359.00","$178,281.00",$575.10,"$47,753.84"
IAH - MAF,58428583441,I-MYR-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50555962,https://www.airlines-manager.com/network/showflight/58428583441,https://www.airlines-manager.com/aircraft/show/120452413,14:45,18:29,310,"$203,359.00","$178,281.00",$575.10,"$47,753.84"
IAH - MAF,58441017335,I-MYR-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50555962,https://www.airlines-manager.com/network/showflight/58441017335,https://www.airlines-manager.com/aircraft/show/120452414,19:45,23:29,310,"$203,359.00","$178,281.00",$575.10,"$47,753.84"
IAH - MCI,58394056671,I-RNO-MCI-4,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/58394056671,https://www.airlines-manager.com/aircraft/show/103882358,1:00,5:44,310,"$299,690.00","$268,532.00",$866.23,"$56,732.11"
IAH - MCI,58418603238,I-RNO-MCI-3,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/58418603238,https://www.airlines-manager.com/aircraft/show/103882357,9:15,13:59,310,"299,690$","268,532$",$866.23,"$56,732.11"
IAH - MCI,58425449964,I-RNO-MCI-2,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/58425449964,https://www.airlines-manager.com/aircraft/show/103882356,13:00,17:44,310,"299,690$","268,532$",$866.23,"$56,732.11"
IAH - MCI,58435221419,I-RNO-MCI-5,ERJ-175,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/58435221419,https://www.airlines-manager.com/aircraft/show/105099861,18:00,22:44,112,"141,799$","121,979$","$1,089.10","$25,770.21"
IAH - MCI,58438157407,I-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/58438157407,https://www.airlines-manager.com/aircraft/show/120293379,19:30,23:59,0,"$78,755.00","$36,556.00",$0.00,"$8,153.75"
IAH - MCI,58441017559,I-RNO-MCI-1,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/58441017559,https://www.airlines-manager.com/aircraft/show/103882355,21:00,1:44,310,"$299,690.00","$268,532.00",$866.23,"$56,732.11"
IAH - MCO,58394056665,I-MIA-ORD-2,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/58394056665,https://www.airlines-manager.com/aircraft/show/90183183,1:00,6:29,310,"$347,296.00","$304,902.00",$983.55,"$55,605.23"
IAH - MCO,58405117992,I-MIA-ORD-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/58405117992,https://www.airlines-manager.com/aircraft/show/90140936,3:00,8:29,136,"$165,283.00","$138,505.00","$1,018.42","$25,259.27"
IAH - MCO,58411831159,I-MIA-ORD-1,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/58411831159,https://www.airlines-manager.com/aircraft/show/90183184,6:45,12:14,310,"$347,296.00","$304,902.00",$983.55,"$55,605.23"
IAH - MCO,58415054125,I-MIA-ORD-5,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/58415054125,https://www.airlines-manager.com/aircraft/show/90183180,8:45,14:14,310,"$347,296.00","$304,902.00",$983.55,"$55,605.23"
IAH - MCO,58425449946,I-MIA-ORD-4,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/58425449946,https://www.airlines-manager.com/aircraft/show/90183181,13:00,18:29,310,"$347,296.00","$304,902.00",$983.55,"$55,605.23"
IAH - MCO,58438157370,I-MIA-ORD-3,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/58438157370,https://www.airlines-manager.com/aircraft/show/90183182,19:15,0:44,310,"$347,296.00","$304,902.00",$983.55,"$55,605.23"
IAH - MEM,58408651872,I-SMF-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/58408651872,https://www.airlines-manager.com/aircraft/show/99093332,5:45,9:44,320,"$224,135.00","$190,773.00",$596.17,"$47,892.80"
IAH - MEM,58418603252,I-SMF-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/58418603252,https://www.airlines-manager.com/aircraft/show/99093333,9:30,13:29,320,"$224,135.00","$190,773.00",$596.17,"$47,892.80"
IAH - MEM,58428583318,I-SMF-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/58428583318,https://www.airlines-manager.com/aircraft/show/99093334,14:00,17:59,320,"$224,135.00","$190,773.00",$596.17,"$47,892.80"
IAH - MEM,58438157389,I-SMF-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/58438157389,https://www.airlines-manager.com/aircraft/show/99093335,19:30,23:29,320,"$224,135.00","$190,773.00",$596.17,"$47,892.80"
IAH - MEM,58443550933,I-SMF-CVG-5 B,A319-100,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/58443550933,https://www.airlines-manager.com/aircraft/show/106499070,21:30,1:29,198,"170,108$","147,118$",$743.02,"$36,933.39"
IAH - MEX,58394056878,I-MEX-YYZ-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/58394056878,https://www.airlines-manager.com/aircraft/show/97026605,1:45,6:44,136,"154,093$","129,192$",$949.94,"$25,924.82"
IAH - MEX,58408651847,I-MEX-YYZ-2,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/58408651847,https://www.airlines-manager.com/aircraft/show/97076945,5:30,10:29,400,"416,090$","367,747$",$919.37,"$73,795.38"
IAH - MEX,58415054084,I-MEX-YYZ-5,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/58415054084,https://www.airlines-manager.com/aircraft/show/97076942,8:30,13:29,400,"416,090$","367,747$",$919.37,"$73,795.38"
IAH - MEX,58425449886,I-MEX-YYZ-1,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/58425449886,https://www.airlines-manager.com/aircraft/show/97076946,13:00,17:59,400,"$416,090.00","$367,747.00",$919.37,"$73,795.38"
IAH - MEX,58431664383,I-MEX-YYZ-4,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/58431664383,https://www.airlines-manager.com/aircraft/show/97076943,16:00,20:59,396,"$412,400.00","$364,157.00",$919.59,"$73,074.98"
IAH - MEX,58446475104,I-MEX-YYZ-3,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/58446475104,https://www.airlines-manager.com/aircraft/show/97076944,22:30,3:29,284,"$309,057.00","$263,595.00",$928.15,"$52,895.32"
IAH - MFE,58405118060,I-MYR-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50555963,https://www.airlines-manager.com/network/showflight/58405118060,https://www.airlines-manager.com/aircraft/show/120452414,3:30,6:44,310,"$171,393.00","$148,994.00",$480.63,"$46,080.62"
IAH - MFE,58425449978,I-MYR-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50555963,https://www.airlines-manager.com/network/showflight/58425449978,https://www.airlines-manager.com/aircraft/show/120452411,13:00,16:14,310,"$171,393.00","$148,994.00",$480.63,"$46,080.62"
IAH - MFE,58435221358,I-MYR-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50555963,https://www.airlines-manager.com/network/showflight/58435221358,https://www.airlines-manager.com/aircraft/show/120452412,17:45,20:59,310,"$171,393.00","$148,994.00",$480.63,"$46,080.62"
IAH - MFE,58446475124,I-MYR-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50555963,https://www.airlines-manager.com/network/showflight/58446475124,https://www.airlines-manager.com/aircraft/show/120452413,22:30,1:44,310,"$171,393.00","$148,994.00",$480.63,"$46,080.62"
IAH - MFR,58394056825,I-EUG-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/58394056825,https://www.airlines-manager.com/aircraft/show/119525218,1:30,10:14,320,"$556,705.00","$507,336.00","$1,585.43","$58,091.91"
IAH - MFR,58405118050,I-EUG-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/58405118050,https://www.airlines-manager.com/aircraft/show/119525217,3:30,12:14,320,"$556,705.00","$507,336.00","$1,585.43","$58,091.91"
IAH - MFR,58421791527,I-EUG-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/58421791527,https://www.airlines-manager.com/aircraft/show/119525219,11:00,19:44,320,"556,705$","507,336$","$1,585.43","$58,091.91"
IAH - MFR,58425449928,I-EUG-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/58425449928,https://www.airlines-manager.com/aircraft/show/119525220,13:00,21:44,320,"556,705$","507,336$","$1,585.43","$58,091.91"
IAH - MFR,58441017438,I-EUG-MFR-5,ERJ-175,https://www.airlines-manager.com/network/showline/50385703,https://www.airlines-manager.com/network/showflight/58441017438,https://www.airlines-manager.com/aircraft/show/119525248,20:15,5:14,112,"262,694$","232,921$","$2,079.65","$25,928.13"
IAH - MHT,58394056822,I-MHT-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/58394056822,https://www.airlines-manager.com/aircraft/show/114266971,1:30,9:44,320,"526,367$","478,511$","$1,495.35","$58,118.74"
IAH - MHT,58411831158,I-MHT-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/58411831158,https://www.airlines-manager.com/aircraft/show/114266970,6:45,14:59,320,"526,367$","478,511$","$1,495.35","$58,118.74"
IAH - MHT,58425449767,I-MHT-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/58425449767,https://www.airlines-manager.com/aircraft/show/114266972,12:00,20:14,320,"$526,367.00","$478,511.00","$1,495.35","$58,118.74"
IAH - MHT,58431664401,I-MHT-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/58431664401,https://www.airlines-manager.com/aircraft/show/114266976,16:00,0:14,320,"$526,367.00","$478,511.00","$1,495.35","$58,118.74"
IAH - MHT,58435221360,I-MHT-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/58435221360,https://www.airlines-manager.com/aircraft/show/92800067,17:45,1:59,112,"$247,847.00","$219,280.00","$1,957.86","$26,633.20"
IAH - MIA,58394056579,I-MIA-ORD-3,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/58394056579,https://www.airlines-manager.com/aircraft/show/90183182,0:45,6:29,310,"$372,039.00","$326,282.00","$1,052.52","$56,909.65"
IAH - MIA,58411831142,I-MIA-ORD-2,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/58411831142,https://www.airlines-manager.com/aircraft/show/90183183,6:30,12:14,310,"$372,039.00","$326,282.00","$1,052.52","$56,909.65"
IAH - MIA,58415054115,I-MIA-ORD-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/58415054115,https://www.airlines-manager.com/aircraft/show/90140936,8:30,14:14,136,"$177,073.00","$148,105.00","$1,089.01","$25,832.27"
IAH - MIA,58425449949,I-MIA-ORD-1,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/58425449949,https://www.airlines-manager.com/aircraft/show/90183184,13:00,18:44,310,"$372,039.00","$326,282.00","$1,052.52","$56,909.65"
IAH - MIA,58431664272,I-MIA-ORD-5,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/58431664272,https://www.airlines-manager.com/aircraft/show/90183180,15:00,20:44,310,"$372,039.00","$326,282.00","$1,052.52","$56,909.65"
IAH - MIA,58438157241,I-MIA-ORD-4,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/58438157241,https://www.airlines-manager.com/aircraft/show/90183181,18:30,0:14,310,"$372,039.00","$326,282.00","$1,052.52","$56,909.65"
IAH - MKE,58394056674,I-BOI-BNA-2,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/58394056674,https://www.airlines-manager.com/aircraft/show/104258212,1:00,6:59,310,"$380,971.00","$345,837.00","$1,115.60","$57,800.06"
IAH - MKE,58415054045,I-BOI-BNA-1,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/58415054045,https://www.airlines-manager.com/aircraft/show/104258211,8:00,13:59,310,"$380,971.00","$345,837.00","$1,115.60","$57,800.06"
IAH - MKE,58418603231,I-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/58418603231,https://www.airlines-manager.com/aircraft/show/103534664,9:00,14:59,112,"$179,769.00","$156,969.00","$1,401.51","$26,234.37"
IAH - MKE,58428583355,I-BOI-BNA-4,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/58428583355,https://www.airlines-manager.com/aircraft/show/104258214,14:00,19:59,310,"$380,971.00","$345,837.00","$1,115.60","$57,800.06"
IAH - MKE,58438157375,I-BOI-BNA-3,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/58438157375,https://www.airlines-manager.com/aircraft/show/104258213,19:15,1:14,310,"$380,971.00","$345,837.00","$1,115.60","$57,800.06"
IAH - MSN,58415054007,I-GRR-MSN-3,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/58415054007,https://www.airlines-manager.com/aircraft/show/117273346,7:30,13:29,310,"$374,204.00","$341,119.00","$1,100.38","$57,011.53"
IAH - MSN,58428583376,I-GRR-MSN-2,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/58428583376,https://www.airlines-manager.com/aircraft/show/117273347,14:00,19:59,310,"$374,204.00","$341,119.00","$1,100.38","$57,011.53"
IAH - MSN,58441017415,I-GRR-MSN-1,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/58441017415,https://www.airlines-manager.com/aircraft/show/117273348,20:15,2:14,310,"$374,204.00","$341,119.00","$1,100.38","$57,011.53"
IAH - MSN,58443551025,I-GRR-MSN-4,A321-200,https://www.airlines-manager.com/network/showline/49715351,https://www.airlines-manager.com/network/showflight/58443551025,https://www.airlines-manager.com/aircraft/show/117273345,22:15,4:14,310,"$374,204.00","$341,119.00","$1,100.38","$57,011.53"
IAH - MSO,58405118104,I-MSO-FAR-2,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/58405118104,https://www.airlines-manager.com/aircraft/show/110424756,4:00,11:59,320,"$510,189.00","$463,756.00","$1,449.24","$58,090.52"
IAH - MSO,58428583327,I-MSO-FAR-1,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/58428583327,https://www.airlines-manager.com/aircraft/show/110424757,14:00,21:59,320,"$510,189.00","$463,756.00","$1,449.24","$58,090.52"
IAH - MSO,58435221328,I-MSO-FAR-4,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/58435221328,https://www.airlines-manager.com/aircraft/show/110424754,17:30,1:29,320,"$510,189.00","$463,756.00","$1,449.24","$58,090.52"
IAH - MSO,58441017398,I-MSO-FAR-3,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/58441017398,https://www.airlines-manager.com/aircraft/show/110424755,20:15,4:14,320,"$510,189.00","$463,756.00","$1,449.24","$58,090.52"
IAH - MSP,58405118099,I-LAS-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/58405118099,https://www.airlines-manager.com/aircraft/show/95894466,4:00,9:59,320,"$385,491.00","$336,195.00","$1,050.61","$56,188.58"
IAH - MSP,58408651832,I-LAS-ATL-6,ERJ-175,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/58408651832,https://www.airlines-manager.com/aircraft/show/82323704,5:00,11:14,112,"$182,860.00","$155,195.00","$1,385.67","$24,897.59"
IAH - MSP,58418603299,I-LAS-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/58418603299,https://www.airlines-manager.com/aircraft/show/96183549,10:00,15:59,320,"$385,491.00","$336,195.00","$1,050.61","$56,188.58"
IAH - MSP,58435221345,I-LAS-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/58435221345,https://www.airlines-manager.com/aircraft/show/96250652,17:45,23:44,320,"$385,491.00","$336,195.00","$1,050.61","$56,188.58"
IAH - MSP,58443550913,I-LAS-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/58443550913,https://www.airlines-manager.com/aircraft/show/96256511,21:30,3:29,320,"385,491$","336,195$","$1,050.61","$56,188.58"
IAH - MSP,58446475108,I-LAS-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/58446475108,https://www.airlines-manager.com/aircraft/show/96177955,22:30,4:29,320,"385,491$","336,195$","$1,050.61","$56,188.58"
IAH - MSY,58405118067,I-BWI-PHL-4,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/58405118067,https://www.airlines-manager.com/aircraft/show/106007216,3:45,6:59,338,"171,118$","146,471$",$433.35,"$45,300.31"
IAH - MSY,58408651777,I-BWI-PHL-5,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/58408651777,https://www.airlines-manager.com/aircraft/show/106007217,4:45,7:59,338,"171,118$","146,471$",$433.35,"$45,300.31"
IAH - MSY,58421791466,I-BWI-PHL-3,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/58421791466,https://www.airlines-manager.com/aircraft/show/106007215,11:00,14:14,338,"$171,118.00","$146,471.00",$433.35,"$45,300.31"
IAH - MSY,58435221340,I-BWI-PHL-2,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/58435221340,https://www.airlines-manager.com/aircraft/show/106007214,17:45,20:59,338,"$171,118.00","$146,471.00",$433.35,"$45,300.31"
IAH - MSY,58441017447,I-BWI-PHL-1,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/58441017447,https://www.airlines-manager.com/aircraft/show/106007213,20:30,23:44,271,"$150,945.00","$126,763.00",$467.76,"$39,205.05"
IAH - MTJ,58405117983,I-MYR-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50683373,https://www.airlines-manager.com/network/showflight/58405117983,https://www.airlines-manager.com/aircraft/show/120452412,3:00,8:44,310,"$359,204.00","$326,590.00","$1,053.52","$56,963.37"
IAH - MTJ,58418603225,I-MYR-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50683373,https://www.airlines-manager.com/network/showflight/58418603225,https://www.airlines-manager.com/aircraft/show/120452413,9:00,14:44,310,"$359,204.00","$326,590.00","$1,053.52","$56,963.37"
IAH - MTJ,58428583378,I-MYR-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50683373,https://www.airlines-manager.com/network/showflight/58428583378,https://www.airlines-manager.com/aircraft/show/120452414,14:00,19:44,310,"$359,204.00","$326,590.00","$1,053.52","$56,963.37"
IAH - MTJ,58443551026,I-MYR-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50683373,https://www.airlines-manager.com/network/showflight/58443551026,https://www.airlines-manager.com/aircraft/show/120452411,22:15,3:59,247,"$316,203.00","$285,188.00","$1,154.61","$49,742.09"
IAH - MTY,58405118048,I-YOW-SJD-1,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/58405118048,https://www.airlines-manager.com/aircraft/show/114266974,3:30,7:14,320,"$203,699.00","$173,182.00",$541.19,"$46,388.04"
IAH - MTY,58418603249,I-YOW-SJD-5,ERJ-175,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/58418603249,https://www.airlines-manager.com/aircraft/show/105099862,9:15,12:59,112,"$93,007.00","$76,552.00",$683.50,"$20,505.00"
IAH - MTY,58428583331,I-YOW-SJD-4,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/58428583331,https://www.airlines-manager.com/aircraft/show/114266975,14:00,17:44,320,"$203,699.00","$173,182.00",$541.19,"$46,388.04"
IAH - MTY,58435221329,I-YOW-SJD-3,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/58435221329,https://www.airlines-manager.com/aircraft/show/113250059,17:30,21:14,320,"$203,699.00","$173,182.00",$541.19,"$46,388.04"
IAH - MTY,58446475232,I-YOW-SJD-2,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/58446475232,https://www.airlines-manager.com/aircraft/show/113114108,23:30,3:14,320,"$203,699.00","$173,182.00",$541.19,"$46,388.04"
IAH - MYR,58394056870,I-MYR-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50683370,https://www.airlines-manager.com/network/showflight/58394056870,https://www.airlines-manager.com/aircraft/show/120452413,1:45,7:44,310,"$378,615.00","$344,896.00","$1,112.57","$57,642.79"
IAH - MYR,58415054050,I-MYR-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50683370,https://www.airlines-manager.com/network/showflight/58415054050,https://www.airlines-manager.com/aircraft/show/120452414,8:00,13:59,310,"$378,615.00","$344,896.00","$1,112.57","$57,642.79"
IAH - MYR,58431664441,I-MYR-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50683370,https://www.airlines-manager.com/network/showflight/58431664441,https://www.airlines-manager.com/aircraft/show/120452411,16:15,22:14,310,"$378,615.00","$344,896.00","$1,112.57","$57,642.79"
IAH - MYR,58441017564,I-MYR-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50683370,https://www.airlines-manager.com/network/showflight/58441017564,https://www.airlines-manager.com/aircraft/show/120452412,21:00,2:59,310,"378,615$","344,896$","$1,112.57","$57,642.79"
IAH - OAK,58394056740,I-IAD-SAN-5,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/58394056740,https://www.airlines-manager.com/aircraft/show/98578920,1:15,9:44,320,"531,894$","481,071$","$1,503.35","$56,707.78"
IAH - OAK,58405117964,I-IAD-SAN-1,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/58405117964,https://www.airlines-manager.com/aircraft/show/98578924,3:00,11:29,320,"531,894$","481,071$","$1,503.35","$56,707.78"
IAH - OAK,58415054036,I-IAD-SAN-4,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/58415054036,https://www.airlines-manager.com/aircraft/show/98578921,8:00,16:29,320,"531,894$","481,071$","$1,503.35","$56,707.78"
IAH - OAK,58425449904,I-IAD-SAN-3,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/58425449904,https://www.airlines-manager.com/aircraft/show/98578922,13:00,21:29,320,"531,894$","481,071$","$1,503.35","$56,707.78"
IAH - OAK,58438157356,I-IAD-SAN-6,ERJ-175,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/58438157356,https://www.airlines-manager.com/aircraft/show/105400635,19:00,3:29,112,"250,582$","220,435$","$1,968.17","$25,984.48"
IAH - OAK,58443551010,I-IAD-SAN-2,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/58443551010,https://www.airlines-manager.com/aircraft/show/98578923,22:15,6:44,320,"531,894$","481,071$","$1,503.35","$56,707.78"
IAH - OKC,58408651859,I-RIC-SDF-1,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/58408651859,https://www.airlines-manager.com/aircraft/show/107467134,5:30,9:14,310,"197,534$","172,273$",$555.72,"$46,144.55"
IAH - OKC,58418603375,I-RIC-SDF-5,ERJ-175,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/58418603375,https://www.airlines-manager.com/aircraft/show/107467211,10:00,13:44,112,"$91,112.00","$75,265.00",$672.01,"$20,160.27"
IAH - OKC,58425449788,I-RIC-SDF-4,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/58425449788,https://www.airlines-manager.com/aircraft/show/107467131,12:00,15:44,310,"$197,534.00","$172,273.00",$555.72,"$46,144.55"
IAH - OKC,58435221357,I-RIC-SDF-3,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/58435221357,https://www.airlines-manager.com/aircraft/show/107467132,17:45,21:29,310,"$197,534.00","$172,273.00",$555.72,"$46,144.55"
IAH - OKC,58446475189,I-RIC-SDF-2,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/58446475189,https://www.airlines-manager.com/aircraft/show/107467133,23:00,2:44,310,"$197,534.00","$172,273.00",$555.72,"$46,144.55"
IAH - OMA,58405117935,I-BOI-BNA-1,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/58405117935,https://www.airlines-manager.com/aircraft/show/104258211,2:45,7:59,310,"$330,316.00","$299,173.00",$965.07,"$57,166.82"
IAH - OMA,58405117936,I-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/58405117936,https://www.airlines-manager.com/aircraft/show/103534664,3:45,8:59,112,"$156,640.00","$136,589.00","$1,219.54","$26,099.81"
IAH - OMA,58415054126,I-BOI-BNA-4,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/58415054126,https://www.airlines-manager.com/aircraft/show/104258214,8:45,13:59,310,"$330,316.00","$299,173.00",$965.07,"$57,166.82"
IAH - OMA,58428583354,I-BOI-BNA-3,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/58428583354,https://www.airlines-manager.com/aircraft/show/104258213,14:00,19:14,310,"$330,316.00","$299,173.00",$965.07,"$57,166.82"
IAH - OMA,58441017326,I-BOI-BNA-2,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/58441017326,https://www.airlines-manager.com/aircraft/show/104258212,19:45,0:59,310,"$330,316.00","$299,173.00",$965.07,"$57,166.82"
IAH - ONT,58405117940,I-ANC-ONT-1,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/58405117940,https://www.airlines-manager.com/aircraft/show/108258010,2:45,9:59,310,"466,067$","424,901$","$1,370.65","$58,742.07"
IAH - ONT,58408651793,I-ANC-ONT-2,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/58408651793,https://www.airlines-manager.com/aircraft/show/108258011,4:45,11:59,310,"$466,067.00","$424,901.00","$1,370.65","$58,742.07"
IAH - ONT,58425449793,I-ANC-ONT-3,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/58425449793,https://www.airlines-manager.com/aircraft/show/108258012,12:00,19:14,310,"$466,067.00","$424,901.00","$1,370.65","$58,742.07"
IAH - ONT,58428583360,I-ANC-ONT-4,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/58428583360,https://www.airlines-manager.com/aircraft/show/108089220,14:00,21:14,310,"$466,067.00","$424,901.00","$1,370.65","$58,742.07"
IAH - ONT,58431664422,I-ANC-ONT-5 B,A319-100,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/58431664422,https://www.airlines-manager.com/aircraft/show/108286957,16:00,23:14,198,"$351,662.00","$318,672.00","$1,609.45","$44,056.04"
IAH - ORD,58394056389,I-MIA-ORD-4,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/58394056389,https://www.airlines-manager.com/aircraft/show/90183181,0:15,5:59,310,"$364,810.00","$309,844.00",$999.50,"$54,042.56"
IAH - ORD,58411831141,I-MIA-ORD-3,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/58411831141,https://www.airlines-manager.com/aircraft/show/90183182,6:30,12:14,310,"$364,810.00","$309,844.00",$999.50,"$54,042.56"
IAH - ORD,58415054080,I-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/58415054080,https://www.airlines-manager.com/aircraft/show/120293379,8:15,13:59,0,"$101,420.00","$26,513.00",#DIV/0!,"$4,624.36"
IAH - ORD,58425449948,I-MIA-ORD-2,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/58425449948,https://www.airlines-manager.com/aircraft/show/90183183,13:00,18:44,310,"$364,810.00","$309,844.00",$999.50,"$54,042.56"
IAH - ORD,58431664304,I-MIA-ORD-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/58431664304,https://www.airlines-manager.com/aircraft/show/90140936,15:00,20:44,136,"$173,268.00","$138,832.00","$1,020.82","$24,214.88"
IAH - ORD,58438157296,I-MIA-ORD-1,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/58438157296,https://www.airlines-manager.com/aircraft/show/90183184,18:45,0:29,310,"$364,810.00","$309,844.00",$999.50,"$54,042.56"
IAH - ORD,58441017496,I-MIA-ORD-5,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/58441017496,https://www.airlines-manager.com/aircraft/show/90183180,20:45,2:29,310,"$364,810.00","$309,844.00",$999.50,"$54,042.56"
IAH - ORF,58394056149,I-PVD-BUF-5 B,A319-100,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/58394056149,https://www.airlines-manager.com/aircraft/show/110582843,0:00,6:44,198,"$321,209.00","$291,556.00","$1,472.51","$43,300.40"
IAH - ORF,58405118155,I-PVD-BUF-1,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/58405118155,https://www.airlines-manager.com/aircraft/show/107467130,4:15,10:59,310,"$425,704.00","$388,702.00","$1,253.88","$57,728.02"
IAH - ORF,58415054073,I-PVD-BUF-4,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/58415054073,https://www.airlines-manager.com/aircraft/show/107467127,8:15,14:59,310,"$425,704.00","$388,702.00","$1,253.88","$57,728.02"
IAH - ORF,58425449968,I-PVD-BUF-3,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/58425449968,https://www.airlines-manager.com/aircraft/show/107467128,13:00,19:44,310,"425,704$","388,702$","$1,253.88","$57,728.02"
IAH - ORF,58441017363,I-PVD-BUF-2,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/58441017363,https://www.airlines-manager.com/aircraft/show/107467129,20:00,2:44,310,"$425,704.00","$388,702.00","$1,253.88","$57,728.02"
IAH - PBI,58405117902,I-PBI-RSW-2,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/58405117902,https://www.airlines-manager.com/aircraft/show/104717246,2:30,8:14,310,"371,103$","336,367$","$1,085.05","$58,668.66"
IAH - PBI,58421791557,I-PBI-RSW-1,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/58421791557,https://www.airlines-manager.com/aircraft/show/104717247,11:00,16:44,310,"371,103$","336,367$","$1,085.05","$58,668.66"
IAH - PBI,58425450007,I-PBI-RSW-5,ERJ-175,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/58425450007,https://www.airlines-manager.com/aircraft/show/104743902,13:15,18:59,112,"$175,453.00","$152,947.00","$1,365.60","$26,676.80"
IAH - PBI,58431664439,I-PBI-RSW-4,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/58431664439,https://www.airlines-manager.com/aircraft/show/104717244,16:15,21:59,310,"$371,103.00","$336,367.00","$1,085.05","$58,668.66"
IAH - PBI,58443550960,I-PBI-RSW-3,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/58443550960,https://www.airlines-manager.com/aircraft/show/104717245,21:45,3:29,310,"$371,103.00","$336,367.00","$1,085.05","$58,668.66"
IAH - PDX,58405117915,I-SEA-DEN-5,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/58405117915,https://www.airlines-manager.com/aircraft/show/105562975,2:45,11:44,338,"$623,432.00","$575,330.00","$1,702.16","$64,044.16"
IAH - PDX,58405117916,I-SEA-DEN-2,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/58405117916,https://www.airlines-manager.com/aircraft/show/105562972,4:00,12:59,338,"$623,432.00","$575,330.00","$1,702.16","$64,044.16"
IAH - PDX,58408651804,I-SEA-DEN-4,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/58408651804,https://www.airlines-manager.com/aircraft/show/105562974,5:00,13:59,338,"$623,432.00","$575,330.00","$1,702.16","$64,044.16"
IAH - PDX,58425449815,I-SEA-DEN-6,ERJ-175,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/58425449815,https://www.airlines-manager.com/aircraft/show/105601215,12:00,21:14,112,"$271,208.00","$237,797.00","$2,123.19","$25,754.19"
IAH - PDX,58428583297,I-SEA-DEN-3,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/58428583297,https://www.airlines-manager.com/aircraft/show/105562973,14:00,22:59,338,"$623,432.00","$575,330.00","$1,702.16","$64,044.16"
IAH - PDX,58438157219,I-SEA-DEN-1,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/58438157219,https://www.airlines-manager.com/aircraft/show/105562971,18:30,3:29,338,"623,432$","575,330$","$1,702.16","$64,044.16"
IAH - PHL,58394056158,I-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/58394056158,https://www.airlines-manager.com/aircraft/show/120293379,0:00,7:14,0,"127,938$","65,291$",$0.00,"$9,026.41"
IAH - PHL,58421791467,I-BWI-PHL-4,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/58421791467,https://www.airlines-manager.com/aircraft/show/106007216,11:00,18:14,338,"504,021$","458,839$","$1,357.51","$63,433.96"
IAH - PHL,58428583395,I-BWI-PHL-3,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/58428583395,https://www.airlines-manager.com/aircraft/show/106007215,14:15,21:29,338,"504,021$","458,839$","$1,357.51","$63,433.96"
IAH - PHL,58441017539,I-BWI-PHL-2,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/58441017539,https://www.airlines-manager.com/aircraft/show/106007214,21:00,4:14,338,"504,021$","458,839$","$1,357.51","$63,433.96"
IAH - PHL,58443550909,I-BWI-PHL-5,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/58443550909,https://www.airlines-manager.com/aircraft/show/106007217,21:30,4:44,338,"$504,021.00","$458,839.00","$1,357.51","$63,433.96"
IAH - PHL,58446475248,I-BWI-PHL-1,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/58446475248,https://www.airlines-manager.com/aircraft/show/106007213,23:45,6:59,338,"$504,021.00","$458,839.00","$1,357.51","$63,433.96"
IAH - PHX,58405118100,I-LAS-ATL-3,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/58405118100,https://www.airlines-manager.com/aircraft/show/96183549,4:00,9:59,320,"$381,283.00","$329,249.00","$1,028.90","$55,027.69"
IAH - PHX,58408651810,I-LAS-ATL-4,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/58408651810,https://www.airlines-manager.com/aircraft/show/96177955,5:00,10:59,320,"$381,283.00","$329,249.00","$1,028.90","$55,027.69"
IAH - PHX,58421791627,I-LAS-ATL-6,ERJ-175,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/58421791627,https://www.airlines-manager.com/aircraft/show/82323704,11:30,17:29,112,"180,173$","151,222$","$1,350.20","$25,273.87"
IAH - PHX,58421791628,I-LAS-ATL-2,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/58421791628,https://www.airlines-manager.com/aircraft/show/96250652,11:45,17:44,320,"381,283$","329,249$","$1,028.90","$55,027.69"
IAH - PHX,58431664344,I-LAS-ATL-1,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/58431664344,https://www.airlines-manager.com/aircraft/show/96256511,15:30,21:29,320,"381,283$","329,249$","$1,028.90","$55,027.69"
IAH - PHX,58443550912,I-LAS-ATL-5,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/58443550912,https://www.airlines-manager.com/aircraft/show/95894466,21:30,3:29,320,"381,283$","329,249$","$1,028.90","$55,027.69"
IAH - PIT,58408651824,I-PIT-RDU-2,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/58408651824,https://www.airlines-manager.com/aircraft/show/100684073,5:00,11:29,310,"407,321$","368,957$","$1,190.18","$56,908.53"
IAH - PIT,58421791601,I-PIT-RDU-1,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/58421791601,https://www.airlines-manager.com/aircraft/show/100684074,11:15,17:44,310,"407,321$","368,957$","$1,190.18","$56,908.53"
IAH - PIT,58431664424,I-PIT-RDU-5 B,A319-100,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/58431664424,https://www.airlines-manager.com/aircraft/show/110582845,16:00,22:29,198,"307,595$","276,856$","$1,398.26","$42,702.72"
IAH - PIT,58435221303,I-PIT-RDU-4,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/58435221303,https://www.airlines-manager.com/aircraft/show/100684071,17:15,23:44,310,"407,321$","368,957$","$1,190.18","$56,908.53"
IAH - PIT,58446475161,I-PIT-RDU-3,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/58446475161,https://www.airlines-manager.com/aircraft/show/100684072,22:45,5:14,310,"407,321$","368,957$","$1,190.18","$56,908.53"
IAH - PNS,58418603224,I-MYR-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50683375,https://www.airlines-manager.com/network/showflight/58418603224,https://www.airlines-manager.com/aircraft/show/120452411,9:00,12:59,310,"228,929$","203,927$",$657.83,"$51,195.06"
IAH - PNS,58428583290,I-MYR-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50683375,https://www.airlines-manager.com/network/showflight/58428583290,https://www.airlines-manager.com/aircraft/show/120452412,13:45,17:44,310,"228,929$","203,927$",$657.83,"$51,195.06"
IAH - PNS,58438157247,I-MYR-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50683375,https://www.airlines-manager.com/network/showflight/58438157247,https://www.airlines-manager.com/aircraft/show/120452413,18:30,22:29,310,"228,929$","203,927$",$657.83,"$51,195.06"
IAH - PNS,58446475240,I-MYR-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50683375,https://www.airlines-manager.com/network/showflight/58446475240,https://www.airlines-manager.com/aircraft/show/120452414,23:30,3:29,310,"228,929$","203,927$",$657.83,"$51,195.06"
IAH - PSP,58394056834,I-YEG-BUR-2,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/58394056834,https://www.airlines-manager.com/aircraft/show/117273343,1:30,8:29,310,"453,223$","415,169$","$1,339.25","$59,451.41"
IAH - PSP,58405118092,I-YEG-BUR-1,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/58405118092,https://www.airlines-manager.com/aircraft/show/117273344,3:45,10:44,310,"453,223$","415,169$","$1,339.25","$59,451.41"
IAH - PSP,58421791571,I-YEG-BUR-3,A321-200,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/58421791571,https://www.airlines-manager.com/aircraft/show/117273342,11:00,17:59,310,"$453,223.00","$415,169.00","$1,339.25","$59,451.41"
IAH - PSP,58438157222,I-YEG-BUR-5,A321neo,https://www.airlines-manager.com/network/showline/49715320,https://www.airlines-manager.com/network/showflight/58438157222,https://www.airlines-manager.com/aircraft/show/117273340,18:30,1:29,338,"$491,249.00","$454,778.00","$1,345.50","$65,123.34"
IAH - PVD,58405117938,I-PVD-BUF-2,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/58405117938,https://www.airlines-manager.com/aircraft/show/107467129,2:45,10:59,310,"$519,279.00","$477,769.00","$1,541.19","$58,028.62"
IAH - PVD,58411831163,I-PVD-BUF-5 B,A319-100,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/58411831163,https://www.airlines-manager.com/aircraft/show/110582843,6:45,14:59,198,"$391,224.00","$357,949.00","$1,807.82","$43,475.59"
IAH - PVD,58425449970,I-PVD-BUF-1,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/58425449970,https://www.airlines-manager.com/aircraft/show/107467130,13:00,21:14,310,"$519,279.00","$477,769.00","$1,541.19","$58,028.62"
IAH - PVD,58435221271,I-PVD-BUF-4,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/58435221271,https://www.airlines-manager.com/aircraft/show/107467127,17:00,1:14,310,"519,279$","477,769$","$1,541.19","$58,028.62"
IAH - PVD,58441017327,I-PVD-BUF-3,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/58441017327,https://www.airlines-manager.com/aircraft/show/107467128,19:45,3:59,310,"519,279$","477,769$","$1,541.19","$58,028.62"
IAH - PVR,58405117994,I-YOW-SJD-5,ERJ-175,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/58405117994,https://www.airlines-manager.com/aircraft/show/105099862,3:00,8:29,112,"167,253$","145,839$","$1,302.13","$26,596.78"
IAH - PVR,58415054090,I-YOW-SJD-4,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/58415054090,https://www.airlines-manager.com/aircraft/show/114266975,8:30,13:59,320,"357,566$","319,932$",$999.79,"$58,346.26"
IAH - PVR,58425449765,I-YOW-SJD-3,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/58425449765,https://www.airlines-manager.com/aircraft/show/113250059,12:00,17:29,320,"$357,566.00","$319,932.00",$999.79,"$58,346.26"
IAH - PVR,58435221389,I-YOW-SJD-2,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/58435221389,https://www.airlines-manager.com/aircraft/show/113114108,18:00,23:29,320,"$357,566.00","$319,932.00",$999.79,"$58,346.26"
IAH - PVR,58443550972,I-YOW-SJD-1,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/58443550972,https://www.airlines-manager.com/aircraft/show/114266974,22:00,3:29,320,"$357,566.00","$319,932.00",$999.79,"$58,346.26"
IAH - PWM,58415054027,I-SJC-PWM-5 B,A319-100,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/58415054027,https://www.airlines-manager.com/aircraft/show/106014350,7:45,16:14,198,"$408,790.00","$374,606.00","$1,891.95","$44,157.88"
IAH - PWM,58421791549,I-SJC-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/58421791549,https://www.airlines-manager.com/aircraft/show/96691558,11:00,19:29,310,"$543,082.00","$500,441.00","$1,614.33","$58,991.08"
IAH - PWM,58431664275,I-SJC-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/58431664275,https://www.airlines-manager.com/aircraft/show/96694086,15:00,23:29,310,"$543,082.00","$500,441.00","$1,614.33","$58,991.08"
IAH - PWM,58438157373,I-SJC-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/58438157373,https://www.airlines-manager.com/aircraft/show/96692491,19:15,3:44,310,"$543,082.00","$500,441.00","$1,614.33","$58,991.08"
IAH - PWM,58446475159,I-SJC-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/58446475159,https://www.airlines-manager.com/aircraft/show/96692343,22:45,7:14,310,"$543,082.00","$500,441.00","$1,614.33","$58,991.08"
IAH - RAP,58394056916,I-GRR-MSN-1,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/58394056916,https://www.airlines-manager.com/aircraft/show/117273348,2:15,8:29,310,"$390,106.00","$355,858.00","$1,147.93","$57,089.52"
IAH - RAP,58405118160,I-GRR-MSN-4,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/58405118160,https://www.airlines-manager.com/aircraft/show/117273345,4:15,10:29,310,"$390,106.00","$355,858.00","$1,147.93","$57,089.52"
IAH - RAP,58428583375,I-GRR-MSN-3,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/58428583375,https://www.airlines-manager.com/aircraft/show/117273346,14:00,20:14,310,"$390,106.00","$355,858.00","$1,147.93","$57,089.52"
IAH - RAP,58441017369,I-GRR-MSN-2,A321-200,https://www.airlines-manager.com/network/showline/49715352,https://www.airlines-manager.com/network/showflight/58441017369,https://www.airlines-manager.com/aircraft/show/117273347,20:00,2:14,296,"$379,705.00","$345,864.00","$1,168.46","$55,486.20"
IAH - RDU,58408651840,I-PIT-RDU-3,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/58408651840,https://www.airlines-manager.com/aircraft/show/100684072,5:15,11:29,310,"$390,658.00","$353,854.00","$1,141.46","$56,768.02"
IAH - RDU,58421791621,I-PIT-RDU-2,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/58421791621,https://www.airlines-manager.com/aircraft/show/100684073,11:30,17:44,310,"$390,658.00","$353,854.00","$1,141.46","$56,768.02"
IAH - RDU,58435221354,I-PIT-RDU-1,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/58435221354,https://www.airlines-manager.com/aircraft/show/100684074,17:45,23:59,310,"$390,658.00","$353,854.00","$1,141.46","$56,768.02"
IAH - RDU,58446475126,I-PIT-RDU-5 B,A319-100,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/58446475126,https://www.airlines-manager.com/aircraft/show/110582845,22:30,4:44,198,"$295,207.00","$265,718.00","$1,342.01","$42,628.56"
IAH - RDU,58446475127,I-PIT-RDU-4,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/58446475127,https://www.airlines-manager.com/aircraft/show/100684071,23:45,5:59,310,"$390,658.00","$353,854.00","$1,141.46","$56,768.02"
IAH - RIC,58405117939,I-RIC-SDF-2,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/58405117939,https://www.airlines-manager.com/aircraft/show/107467133,2:45,9:14,310,"$418,659.00","$382,345.00","$1,233.37","$58,973.52"
IAH - RIC,58425449791,I-RIC-SDF-1,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/58425449791,https://www.airlines-manager.com/aircraft/show/107467134,12:00,18:29,310,"$418,659.00","$382,345.00","$1,233.37","$58,973.52"
IAH - RIC,58428583293,I-RIC-SDF-5,ERJ-175,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/58428583293,https://www.airlines-manager.com/aircraft/show/107467211,13:45,20:14,112,"$196,803.00","$172,997.00","$1,544.62","$26,683.34"
IAH - RIC,58431664363,I-RIC-SDF-4,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/58431664363,https://www.airlines-manager.com/aircraft/show/107467131,15:45,22:14,310,"$418,659.00","$382,345.00","$1,233.37","$58,973.52"
IAH - RIC,58443550928,I-RIC-SDF-3,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/58443550928,https://www.airlines-manager.com/aircraft/show/107467132,21:30,3:59,310,"$418,659.00","$382,345.00","$1,233.37","$58,973.52"
IAH - RNO,58394056778,I-RNO-MCI-3,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/58394056778,https://www.airlines-manager.com/aircraft/show/103882357,1:15,9:14,310,"$514,954.00","$471,846.00","$1,522.08","$59,103.88"
IAH - RNO,58405118126,I-RNO-MCI-5,ERJ-175,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/58405118126,https://www.airlines-manager.com/aircraft/show/105099861,4:00,11:59,112,"$242,066.00","$213,534.00","$1,906.55","$26,747.47"
IAH - RNO,58408651825,I-RNO-MCI-2,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/58408651825,https://www.airlines-manager.com/aircraft/show/103882356,5:00,12:59,310,"$514,954.00","$471,846.00","$1,522.08","$59,103.88"
IAH - RNO,58425449963,I-RNO-MCI-1,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/58425449963,https://www.airlines-manager.com/aircraft/show/103882355,13:00,20:59,310,"$514,954.00","$471,846.00","$1,522.08","$59,103.88"
IAH - RNO,58435221269,I-RNO-MCI-4,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/58435221269,https://www.airlines-manager.com/aircraft/show/103882358,17:00,0:59,310,"$514,954.00","$471,846.00","$1,522.08","$59,103.88"
IAH - ROC,58394056456,I-SYR-ROC-3,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/58394056456,https://www.airlines-manager.com/aircraft/show/119525222,0:30,7:44,320,"$463,727.00","$420,924.00","$1,315.39","$58,192.26"
IAH - ROC,58421791529,I-SYR-ROC-2,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/58421791529,https://www.airlines-manager.com/aircraft/show/119525223,11:00,18:14,320,"$463,727.00","$420,924.00","$1,315.39","$58,192.26"
IAH - ROC,58425449830,I-SYR-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/58425449830,https://www.airlines-manager.com/aircraft/show/119525249,12:00,19:14,112,"$219,065.00","$193,786.00","$1,730.23","$26,790.69"
IAH - ROC,58438157235,I-SYR-ROC-1,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/58438157235,https://www.airlines-manager.com/aircraft/show/119525224,18:30,1:44,320,"$463,727.00","$420,924.00","$1,315.39","$58,192.26"
IAH - ROC,58438157236,I-SYR-ROC-4,737-900ER,https://www.airlines-manager.com/network/showline/50385724,https://www.airlines-manager.com/network/showflight/58438157236,https://www.airlines-manager.com/aircraft/show/119525221,19:30,2:44,320,"$463,727.00","$420,924.00","$1,315.39","$58,192.26"
IAH - RSW,58405117937,I-PBI-RSW-4,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/58405117937,https://www.airlines-manager.com/aircraft/show/104717244,2:45,8:14,310,"$351,244.00","$316,686.00","$1,021.57","$57,754.29"
IAH - RSW,58421791555,I-PBI-RSW-3,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/58421791555,https://www.airlines-manager.com/aircraft/show/104717245,11:00,16:29,310,"$351,244.00","$316,686.00","$1,021.57","$57,754.29"
IAH - RSW,58431664362,I-PBI-RSW-2,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/58431664362,https://www.airlines-manager.com/aircraft/show/104717246,15:45,21:14,310,"351,244$","316,686$","$1,021.57","$57,754.29"
IAH - RSW,58443550927,I-PBI-RSW-1,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/58443550927,https://www.airlines-manager.com/aircraft/show/104717247,21:30,2:59,310,"351,244$","316,686$","$1,021.57","$57,754.29"
IAH - RSW,58446475273,I-PBI-RSW-5,ERJ-175,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/58446475273,https://www.airlines-manager.com/aircraft/show/104743902,23:45,5:14,112,"166,105$","143,869$","$1,284.54","$26,237.51"
IAH - SAN,58394056489,I-IAD-SAN-4,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/58394056489,https://www.airlines-manager.com/aircraft/show/98578921,0:45,7:59,320,"455,196$","407,855$","$1,274.55","$56,385.48"
IAH - SAN,58405118141,I-IAD-SAN-3,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/58405118141,https://www.airlines-manager.com/aircraft/show/98578922,4:15,11:29,320,"455,196$","407,855$","$1,274.55","$56,385.48"
IAH - SAN,58418603388,I-IAD-SAN-6,ERJ-175,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/58418603388,https://www.airlines-manager.com/aircraft/show/105400635,10:15,17:29,112,"$215,317.00","$187,858.00","$1,677.30","$25,971.15"
IAH - SAN,58431664255,I-IAD-SAN-2,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/58431664255,https://www.airlines-manager.com/aircraft/show/98578923,15:00,22:14,320,"$455,196.00","$407,855.00","$1,274.55","$56,385.48"
IAH - SAN,58435221382,I-IAD-SAN-5,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/58435221382,https://www.airlines-manager.com/aircraft/show/98578920,18:00,1:14,320,"$455,196.00","$407,855.00","$1,274.55","$56,385.48"
IAH - SAN,58441017315,I-IAD-SAN-1,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/58441017315,https://www.airlines-manager.com/aircraft/show/98578924,19:45,2:59,320,"$455,196.00","$407,855.00","$1,274.55","$56,385.48"
IAH - SAT,58394056837,I-SMF-CVG-5 B,A319-100,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/58394056837,https://www.airlines-manager.com/aircraft/show/106499070,1:30,4:14,198,"$91,291.00","$73,412.00",$370.77,"$26,858.05"
IAH - SAT,58418603270,I-SMF-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/58418603270,https://www.airlines-manager.com/aircraft/show/99093332,9:45,12:29,320,"$120,861.00","$94,497.00",$295.30,"$34,572.07"
IAH - SAT,58428583317,I-SMF-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/58428583317,https://www.airlines-manager.com/aircraft/show/99093333,14:00,16:44,320,"$120,861.00","$94,497.00",$295.30,"$34,572.07"
IAH - SAT,58435221387,I-SMF-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/58435221387,https://www.airlines-manager.com/aircraft/show/99093334,18:00,20:44,320,"$120,861.00","$94,497.00",$295.30,"$34,572.07"
IAH - SAT,58446475229,I-SMF-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/58446475229,https://www.airlines-manager.com/aircraft/show/99093335,23:30,2:14,320,"$120,861.00","$94,497.00",$295.30,"$34,572.07"
IAH - SAV,58394056886,I-FAT-SAV-4,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/58394056886,https://www.airlines-manager.com/aircraft/show/110424758,2:00,7:29,320,"344,270$","308,464$",$963.95,"$56,254.83"
IAH - SAV,58415054088,I-FAT-SAV-3,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/58415054088,https://www.airlines-manager.com/aircraft/show/110424759,8:30,13:59,320,"344,270$","308,464$",$963.95,"$56,254.83"
IAH - SAV,58425449917,I-FAT-SAV-2,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/58425449917,https://www.airlines-manager.com/aircraft/show/110424760,13:00,18:29,320,"344,270$","308,464$",$963.95,"$56,254.83"
IAH - SAV,58443550949,I-FAT-SAV-1,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/58443550949,https://www.airlines-manager.com/aircraft/show/110424761,21:45,3:14,320,"344,270$","308,464$",$963.95,"$56,254.83"
IAH - SBA,58394056722,I-SNA-SBA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/58394056722,https://www.airlines-manager.com/aircraft/show/119525227,1:15,8:59,272,"$439,924.00","$410,416.00","$1,508.88","$53,071.03"
IAH - SBA,58405117996,I-SNA-SBA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/58405117996,https://www.airlines-manager.com/aircraft/show/119525228,3:15,10:59,272,"$439,924.00","$410,416.00","$1,508.88","$53,071.03"
IAH - SBA,58421791456,I-SNA-SBA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/58421791456,https://www.airlines-manager.com/aircraft/show/119525226,11:00,18:44,272,"$439,924.00","$410,416.00","$1,508.88","$53,071.03"
IAH - SBA,58425449861,I-SNA-SBA-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/58425449861,https://www.airlines-manager.com/aircraft/show/119525229,13:00,20:44,272,"$439,924.00","$410,416.00","$1,508.88","$53,071.03"
IAH - SBA,58438157187,I-SNA-SBA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385937,https://www.airlines-manager.com/network/showflight/58438157187,https://www.airlines-manager.com/aircraft/show/119525225,18:15,1:59,272,"$439,924.00","$410,416.00","$1,508.88","$53,071.03"
IAH - SCL,58394056813,I-56A-1 E,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/58394056813,https://www.airlines-manager.com/aircraft/show/106676232,1:30,19:59,648,"$2,304,732.00","$2,148,616.00","$3,315.77","$116,246.13"
IAH - SCL,58411831135,I-56A-3 E,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/58411831135,https://www.airlines-manager.com/aircraft/show/106676234,6:30,0:59,648,"$2,304,732.00","$2,148,616.00","$3,315.77","$116,246.13"
IAH - SCL,58435221319,I-56A-5 E,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/58435221319,https://www.airlines-manager.com/aircraft/show/106676236,17:30,11:59,648,"$2,304,732.00","$2,148,616.00","$3,315.77","$116,246.13"
IAH - SDF,58405118120,I-RIC-SDF-3,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/58405118120,https://www.airlines-manager.com/aircraft/show/107467132,4:00,9:14,310,"$330,532.00","$297,979.00",$961.22,"$56,938.66"
IAH - SDF,58425449790,I-RIC-SDF-2,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/58425449790,https://www.airlines-manager.com/aircraft/show/107467133,12:00,17:14,310,"$330,532.00","$297,979.00",$961.22,"$56,938.66"
IAH - SDF,58438157243,I-RIC-SDF-1,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/58438157243,https://www.airlines-manager.com/aircraft/show/107467134,18:30,23:44,310,"$330,532.00","$297,979.00",$961.22,"$56,938.66"
IAH - SDF,58441017436,I-RIC-SDF-5,ERJ-175,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/58441017436,https://www.airlines-manager.com/aircraft/show/107467211,20:15,1:29,112,"$156,833.00","$135,926.00","$1,213.63","$25,973.12"
IAH - SDF,58443551020,I-RIC-SDF-4,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/58443551020,https://www.airlines-manager.com/aircraft/show/107467131,22:15,3:29,310,"$330,532.00","$297,979.00",$961.22,"$56,938.66"
IAH - SEA,58405118033,I-SEA-DEN-1,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/58405118033,https://www.airlines-manager.com/aircraft/show/105562971,3:30,12:44,338,"$647,581.00","$592,223.00","$1,752.14","$64,139.68"
IAH - SEA,58408651753,I-SEA-DEN-3,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/58408651753,https://www.airlines-manager.com/aircraft/show/105562973,4:30,13:44,338,"$647,581.00","$592,223.00","$1,752.14","$64,139.68"
IAH - SEA,58425449870,I-SEA-DEN-2,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/58425449870,https://www.airlines-manager.com/aircraft/show/105562972,13:00,22:14,338,"$647,581.00","$592,223.00","$1,752.14","$64,139.68"
IAH - SEA,58428583298,I-SEA-DEN-4,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/58428583298,https://www.airlines-manager.com/aircraft/show/105562974,14:00,23:14,338,"$647,581.00","$592,223.00","$1,752.14","$64,139.68"
IAH - SEA,58435221317,I-SEA-DEN-5,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/58435221317,https://www.airlines-manager.com/aircraft/show/105562975,17:30,2:44,338,"$647,581.00","$592,223.00","$1,752.14","$64,139.68"
IAH - SEA,58443550906,I-SEA-DEN-6,ERJ-175,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/58443550906,https://www.airlines-manager.com/aircraft/show/105601215,21:15,6:44,112,"$280,716.00","$242,828.00","$2,168.11","$25,605.76"
IAH - SJC,58405117975,I-SJC-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/58405117975,https://www.airlines-manager.com/aircraft/show/96694086,3:00,11:14,310,"$534,356.00","$488,727.00","$1,576.54","$59,359.55"
IAH - SJC,58421791551,I-SJC-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/58421791551,https://www.airlines-manager.com/aircraft/show/96692491,11:00,19:14,310,"$534,356.00","$488,727.00","$1,576.54","$59,359.55"
IAH - SJC,58428583419,I-SJC-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/58428583419,https://www.airlines-manager.com/aircraft/show/96692343,14:30,22:44,310,"$534,356.00","$488,727.00","$1,576.54","$59,359.55"
IAH - SJC,58446475185,I-SJC-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/58446475185,https://www.airlines-manager.com/aircraft/show/96691558,23:00,7:14,310,"$534,356.00","$488,727.00","$1,576.54","$59,359.55"
IAH - SJC,58446475186,I-SJC-PWM-5 B,A319-100,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/58446475186,https://www.airlines-manager.com/aircraft/show/106014350,23:30,7:44,198,"$401,937.00","$365,365.00","$1,845.28","$44,376.32"
IAH - SJD,58394056854,I-YOW-SJD-4,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/58394056854,https://www.airlines-manager.com/aircraft/show/114266975,1:45,7:44,320,"$382,780.00","$343,942.00","$1,074.82","$57,483.34"
IAH - SJD,58408651837,I-YOW-SJD-3,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/58408651837,https://www.airlines-manager.com/aircraft/show/113250059,5:15,11:14,320,"$382,780.00","$343,942.00","$1,074.82","$57,483.34"
IAH - SJD,58425449764,I-YOW-SJD-2,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/58425449764,https://www.airlines-manager.com/aircraft/show/113114108,12:00,17:59,320,"$382,780.00","$343,942.00","$1,074.82","$57,483.34"
IAH - SJD,58431664400,I-YOW-SJD-1,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/58431664400,https://www.airlines-manager.com/aircraft/show/114266974,16:00,21:59,320,"$382,780.00","$343,942.00","$1,074.82","$57,483.34"
IAH - SJD,58441017571,I-YOW-SJD-5,ERJ-175,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/58441017571,https://www.airlines-manager.com/aircraft/show/105099862,21:00,2:59,112,"$178,412.00","$156,066.00","$1,393.45","$26,083.45"
IAH - SLC,58405117932,I-SLC-CLT-2,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/58405117932,https://www.airlines-manager.com/aircraft/show/93094698,2:45,9:29,310,"$426,424.00","$382,937.00","$1,235.28","$56,871.83"
IAH - SLC,58408651801,I-SLC-CLT-6,ERJ-175,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/58408651801,https://www.airlines-manager.com/aircraft/show/93100455,4:45,11:29,112,"$200,493.00","$172,316.00","$1,538.54","$25,591.49"
IAH - SLC,58418603338,I-SLC-CLT-1,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/58418603338,https://www.airlines-manager.com/aircraft/show/93094699,10:00,16:44,310,"$426,424.00","$382,937.00","$1,235.28","$56,871.83"
IAH - SLC,58425449785,I-SLC-CLT-5,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/58425449785,https://www.airlines-manager.com/aircraft/show/93094695,12:00,18:44,310,"$426,424.00","$382,937.00","$1,235.28","$56,871.83"
IAH - SLC,58431664332,I-SLC-CLT-4,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/58431664332,https://www.airlines-manager.com/aircraft/show/93094696,15:15,21:59,310,"$426,424.00","$382,937.00","$1,235.28","$56,871.83"
IAH - SLC,58441017557,I-SLC-CLT-3,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/58441017557,https://www.airlines-manager.com/aircraft/show/93094697,21:00,3:44,310,"$426,424.00","$382,937.00","$1,235.28","$56,871.83"
IAH - SMF,58394056907,I-SMF-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/58394056907,https://www.airlines-manager.com/aircraft/show/99093335,2:15,10:29,320,"$532,932.00","$483,703.00","$1,511.57","$58,749.35"
IAH - SMF,58405118163,I-SMF-CVG-5 B,A319-100,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/58405118163,https://www.airlines-manager.com/aircraft/show/106499070,4:15,12:29,198,"$401,263.00","$365,874.00","$1,847.85","$44,438.14"
IAH - SMF,58425449907,I-SMF-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/58425449907,https://www.airlines-manager.com/aircraft/show/99093332,13:00,21:14,320,"$532,932.00","$483,703.00","$1,511.57","$58,749.35"
IAH - SMF,58435221215,I-SMF-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/58435221215,https://www.airlines-manager.com/aircraft/show/99093333,16:45,0:59,320,"$532,932.00","$483,703.00","$1,511.57","$58,749.35"
IAH - SMF,58441017481,I-SMF-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/58441017481,https://www.airlines-manager.com/aircraft/show/99093334,20:45,4:59,320,"$532,932.00","$483,703.00","$1,511.57","$58,749.35"
IAH - SNA,58394056844,I-SNA-SBA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/58394056844,https://www.airlines-manager.com/aircraft/show/119525226,1:45,8:59,272,"$424,074.00","$394,923.00","$1,451.92","$54,597.65"
IAH - SNA,58405117948,I-SYR-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/58405117948,https://www.airlines-manager.com/aircraft/show/119525249,2:45,9:59,112,"$220,952.00","$195,657.00","$1,746.94","$27,049.35"
IAH - SNA,58405117949,I-SNA-SBA-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/58405117949,https://www.airlines-manager.com/aircraft/show/119525229,3:45,10:59,272,"$424,074.00","$394,923.00","$1,451.92","$54,597.65"
IAH - SNA,58421791455,I-SNA-SBA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/58421791455,https://www.airlines-manager.com/aircraft/show/119525225,11:00,18:14,272,"424,074$","394,923$","$1,451.92","$54,597.65"
IAH - SNA,58435221362,I-SNA-SBA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/58435221362,https://www.airlines-manager.com/aircraft/show/119525227,18:00,1:14,272,"424,074$","394,923$","$1,451.92","$54,597.65"
IAH - SNA,58441017342,I-SNA-SBA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50385933,https://www.airlines-manager.com/network/showflight/58441017342,https://www.airlines-manager.com/aircraft/show/119525228,20:00,3:14,272,"424,074$","394,923$","$1,451.92","$54,597.65"
IAH - SRQ,58394056698,I-ILM-SRQ-3,A321-200,https://www.airlines-manager.com/network/showline/50666456,https://www.airlines-manager.com/network/showflight/58394056698,https://www.airlines-manager.com/aircraft/show/120452416,1:00,6:14,310,"332,830$","302,138$",$974.64,"$57,733.38"
IAH - SRQ,58418603227,I-ILM-SRQ-2,A321-200,https://www.airlines-manager.com/network/showline/50666456,https://www.airlines-manager.com/network/showflight/58418603227,https://www.airlines-manager.com/aircraft/show/120452417,9:00,14:14,310,"332,830$","302,138$",$974.64,"$57,733.38"
IAH - SRQ,58428583408,I-ILM-SRQ-1,A321-200,https://www.airlines-manager.com/network/showline/50666456,https://www.airlines-manager.com/network/showflight/58428583408,https://www.airlines-manager.com/aircraft/show/120452418,14:15,19:29,310,"$332,830.00","$302,138.00",$974.64,"$57,733.38"
IAH - SRQ,58441017370,I-ILM-SRQ-4,A321-200,https://www.airlines-manager.com/network/showline/50666456,https://www.airlines-manager.com/network/showflight/58441017370,https://www.airlines-manager.com/aircraft/show/120452415,20:00,1:14,310,"$332,830.00","$302,138.00",$974.64,"$57,733.38"
IAH - STL,58394056768,I-CLE-STL-4,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/58394056768,https://www.airlines-manager.com/aircraft/show/88725601,1:15,5:59,310,"$301,333.00","$269,062.00",$867.94,"$56,844.08"
IAH - STL,58415054071,I-CLE-STL-3,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/58415054071,https://www.airlines-manager.com/aircraft/show/103600702,8:15,12:59,310,"$301,333.00","$269,062.00",$867.94,"$56,844.08"
IAH - STL,58428583351,I-CLE-STL-2,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/58428583351,https://www.airlines-manager.com/aircraft/show/103600701,14:00,18:44,310,"$301,333.00","$269,062.00",$867.94,"$56,844.08"
IAH - STL,58431664305,I-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/58431664305,https://www.airlines-manager.com/aircraft/show/96990010,15:00,19:44,112,"$143,170.00","$122,640.00","$1,095.00","$25,909.86"
IAH - STL,58441017407,I-CLE-STL-1,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/58441017407,https://www.airlines-manager.com/aircraft/show/103600700,20:15,0:59,310,"$301,333.00","$269,062.00",$867.94,"$56,844.08"
IAH - STL,58443550961,I-CLE-STL-5 B,A319-100,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/58443550961,https://www.airlines-manager.com/aircraft/show/110582844,21:45,2:29,198,"$228,911.00","$203,065.00","$1,025.58","$42,901.06"
IAH - SYR,58394056364,I-SYR-ROC-2,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/58394056364,https://www.airlines-manager.com/aircraft/show/119525223,0:15,7:44,320,"$476,934.00","$432,649.00","$1,352.03","$57,815.01"
IAH - SYR,58421791530,I-SYR-ROC-1,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/58421791530,https://www.airlines-manager.com/aircraft/show/119525224,11:00,18:29,320,"$476,934.00","$432,649.00","$1,352.03","$57,815.01"
IAH - SYR,58425449774,I-SYR-ROC-4,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/58425449774,https://www.airlines-manager.com/aircraft/show/119525221,12:00,19:29,320,"$476,934.00","$432,649.00","$1,352.03","$57,815.01"
IAH - SYR,58435221259,I-SYR-ROC-3,737-900ER,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/58435221259,https://www.airlines-manager.com/aircraft/show/119525222,17:00,0:29,320,"$476,934.00","$432,649.00","$1,352.03","$57,815.01"
IAH - SYR,58438157383,I-SYR-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50385719,https://www.airlines-manager.com/network/showflight/58438157383,https://www.airlines-manager.com/aircraft/show/119525249,19:15,2:44,112,"$225,301.00","$199,095.00","$1,777.63","$26,605.12"
IAH - TPA,58405118149,I-SLC-CLT-1,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/58405118149,https://www.airlines-manager.com/aircraft/show/93094699,4:15,9:29,310,"$327,731.00","$292,509.00",$943.58,"$55,893.44"
IAH - TPA,58411831130,I-SLC-CLT-5,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/58411831130,https://www.airlines-manager.com/aircraft/show/93094695,6:15,11:29,310,"$327,731.00","$292,509.00",$943.58,"$55,893.44"
IAH - TPA,58418603335,I-SLC-CLT-4,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/58418603335,https://www.airlines-manager.com/aircraft/show/93094696,10:00,15:14,310,"$327,731.00","$292,509.00",$943.58,"$55,893.44"
IAH - TPA,58431664359,I-SLC-CLT-3,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/58431664359,https://www.airlines-manager.com/aircraft/show/93094697,15:45,20:59,310,"$327,731.00","$292,509.00",$943.58,"$55,893.44"
IAH - TPA,58443550925,I-SLC-CLT-2,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/58443550925,https://www.airlines-manager.com/aircraft/show/93094698,21:30,2:44,310,"$327,731.00","$292,509.00",$943.58,"$55,893.44"
IAH - TPA,58446475243,I-SLC-CLT-6,ERJ-175,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/58446475243,https://www.airlines-manager.com/aircraft/show/93100455,23:30,4:44,112,"$155,769.00","$133,263.00","$1,189.85","$25,464.27"
IAH - TUL,58394056479,I-BTV-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/58394056479,https://www.airlines-manager.com/aircraft/show/82543907,0:30,4:14,112,"$94,018.00","$77,804.00",$694.68,"$20,840.36"
IAH - TUL,58405118057,I-BTV-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/58405118057,https://www.airlines-manager.com/aircraft/show/114373409,3:30,7:14,310,"$203,662.00","$177,891.00",$573.84,"$47,649.38"
IAH - TUL,58418603272,I-BTV-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/58418603272,https://www.airlines-manager.com/aircraft/show/114373410,9:45,13:29,310,"$203,662.00","$177,891.00",$573.84,"$47,649.38"
IAH - TUL,58431664283,I-BTV-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/58431664283,https://www.airlines-manager.com/aircraft/show/113994196,15:00,18:44,310,"$203,662.00","$177,891.00",$573.84,"$47,649.38"
IAH - TUL,58441017406,I-BTV-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/58441017406,https://www.airlines-manager.com/aircraft/show/86385103,20:15,23:59,310,"$203,662.00","$177,891.00",$573.84,"$47,649.38"
IAH - TUS,58408651858,I-PIT-RDU-1,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/58408651858,https://www.airlines-manager.com/aircraft/show/100684074,5:30,11:14,310,"$360,623.00","$326,544.00","$1,053.37","$56,955.35"
IAH - TUS,58418603385,I-PIT-RDU-5 B,A319-100,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/58418603385,https://www.airlines-manager.com/aircraft/show/110582845,10:15,15:59,198,"$273,406.00","$246,103.00","$1,242.94","$42,924.94"
IAH - TUS,58421791619,I-PIT-RDU-4,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/58421791619,https://www.airlines-manager.com/aircraft/show/100684071,11:30,17:14,310,"$360,623.00","$326,544.00","$1,053.37","$56,955.35"
IAH - TUS,58435221268,I-PIT-RDU-3,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/58435221268,https://www.airlines-manager.com/aircraft/show/100684072,17:00,22:44,310,"$360,623.00","$326,544.00","$1,053.37","$56,955.35"
IAH - TUS,58446475215,I-PIT-RDU-2,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/58446475215,https://www.airlines-manager.com/aircraft/show/100684073,23:15,4:59,310,"$360,623.00","$326,544.00","$1,053.37","$56,955.35"
IAH - TYS,58394056915,I-GRR-MSN-2,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/58394056915,https://www.airlines-manager.com/aircraft/show/117273347,2:15,7:14,310,"$326,876.00","$296,717.00",$957.15,"$59,541.87"
IAH - TYS,58415054106,I-GRR-MSN-1,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/58415054106,https://www.airlines-manager.com/aircraft/show/117273348,8:30,13:29,310,"$326,876.00","$296,717.00",$957.15,"$59,541.87"
IAH - TYS,58421791573,I-GRR-MSN-4,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/58421791573,https://www.airlines-manager.com/aircraft/show/117273345,11:00,15:59,310,"$326,876.00","$296,717.00",$957.15,"$59,541.87"
IAH - TYS,58441017413,I-GRR-MSN-3,A321-200,https://www.airlines-manager.com/network/showline/49715354,https://www.airlines-manager.com/network/showflight/58441017413,https://www.airlines-manager.com/aircraft/show/117273346,20:15,1:14,310,"$326,876.00","$296,717.00",$957.15,"$59,541.87"
IAH - UIO,58394056478,I-84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/58394056478,https://www.airlines-manager.com/aircraft/show/89124076,0:30,11:14,932,"$1,806,870.00","$1,651,476.00","$1,771.97","$153,864.22"
IAH - UIO,58425450005,I-84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/58425450005,https://www.airlines-manager.com/aircraft/show/88905141,13:15,23:59,932,"$1,806,870.00","$1,651,476.00","$1,771.97","$153,864.22"
IAH - YEG,58394056810,I-YEG-BUR-5,A321neo,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/58394056810,https://www.airlines-manager.com/aircraft/show/117273340,1:30,10:44,338,"$644,551.00","$597,935.00","$1,769.04","$64,758.30"
IAH - YEG,58415054105,I-YEG-BUR-2,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/58415054105,https://www.airlines-manager.com/aircraft/show/117273343,8:30,17:44,310,"$595,139.00","$546,206.00","$1,761.95","$59,155.88"
IAH - YEG,58421791572,I-YEG-BUR-1,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/58421791572,https://www.airlines-manager.com/aircraft/show/117273344,11:00,20:14,310,"$595,139.00","$546,206.00","$1,761.95","$59,155.88"
IAH - YEG,58435221308,I-YEG-BUR-4,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/58435221308,https://www.airlines-manager.com/aircraft/show/117273341,17:15,2:29,310,"$595,139.00","$546,206.00","$1,761.95","$59,155.88"
IAH - YEG,58435221309,I-YEG-BUR-3,A321-200,https://www.airlines-manager.com/network/showline/49715233,https://www.airlines-manager.com/network/showflight/58435221309,https://www.airlines-manager.com/aircraft/show/117273342,18:00,3:14,310,"$595,139.00","$546,206.00","$1,761.95","$59,155.88"
IAH - YOW,58405118009,I-YOW-SJD-2,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/58405118009,https://www.airlines-manager.com/aircraft/show/113114108,3:15,11:14,320,"$511,724.00","$464,067.00","$1,450.21","$58,129.48"
IAH - YOW,58415054041,I-YOW-SJD-1,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/58415054041,https://www.airlines-manager.com/aircraft/show/114266974,8:00,15:59,320,"$511,724.00","$464,067.00","$1,450.21","$58,129.48"
IAH - YOW,58425449991,I-YOW-SJD-5,ERJ-175,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/58425449991,https://www.airlines-manager.com/aircraft/show/105099862,13:00,20:59,112,"$239,684.00","$211,479.00","$1,888.21","$26,490.06"
IAH - YOW,58435221349,I-YOW-SJD-4,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/58435221349,https://www.airlines-manager.com/aircraft/show/114266975,17:45,1:44,320,"$511,724.00","$464,067.00","$1,450.21","$58,129.48"
IAH - YOW,58443550894,I-YOW-SJD-3,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/58443550894,https://www.airlines-manager.com/aircraft/show/113250059,21:15,5:14,320,"$511,724.00","$464,067.00","$1,450.21","$58,129.48"
IAH - YUL,58394056483,I-YYC-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/58394056483,https://www.airlines-manager.com/aircraft/show/114266980,0:45,8:44,400,"$686,464.00","$628,523.00","$1,571.31","$78,729.39"
IAH - YUL,58394056484,I-YYC-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/58394056484,https://www.airlines-manager.com/aircraft/show/114266979,2:00,9:59,400,"$686,464.00","$628,523.00","$1,571.31","$78,729.39"
IAH - YUL,58425449751,I-YYC-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/58425449751,https://www.airlines-manager.com/aircraft/show/114266978,12:00,19:59,400,"686,464$","628,523$","$1,571.31","$78,729.39"
IAH - YUL,58441017479,I-YYC-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/58441017479,https://www.airlines-manager.com/aircraft/show/114266977,20:45,4:44,400,"686,464$","628,523$","$1,571.31","$78,729.39"
IAH - YVR,58394056619,I-MEX-YYZ-1,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/58394056619,https://www.airlines-manager.com/aircraft/show/97076946,1:00,10:29,400,"779,069$","711,007$","$1,777.52","$74,974.38"
IAH - YVR,58405118098,I-MEX-YYZ-4,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/58405118098,https://www.airlines-manager.com/aircraft/show/97076943,4:00,13:29,400,"779,069$","711,007$","$1,777.52","$74,974.38"
IAH - YVR,58425449884,I-MEX-YYZ-3,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/58425449884,https://www.airlines-manager.com/aircraft/show/97076944,13:00,22:29,400,"779,069$","711,007$","$1,777.52","$74,974.38"
IAH - YVR,58431664429,I-MEX-YYZ-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/58431664429,https://www.airlines-manager.com/aircraft/show/97026605,16:00,1:44,136,"287,329$","251,421$","$1,848.68","$25,830.92"
IAH - YVR,58441017352,I-MEX-YYZ-2,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/58441017352,https://www.airlines-manager.com/aircraft/show/97076945,20:00,5:29,400,"779,069$","711,007$","$1,777.52","$74,974.38"
IAH - YVR,58446475176,I-MEX-YYZ-5,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/58446475176,https://www.airlines-manager.com/aircraft/show/97076942,23:00,8:29,400,"779,069$","711,007$","$1,777.52","$74,974.38"
IAH - YYC,58394056728,I-YYC-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/58394056728,https://www.airlines-manager.com/aircraft/show/114266978,1:15,9:59,400,"746,951$","684,199$","$1,710.50","$78,343.40"
IAH - YYC,58425449750,I-YYC-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/58425449750,https://www.airlines-manager.com/aircraft/show/114266977,12:00,20:44,400,"746,951$","684,199$","$1,710.50","$78,343.40"
IAH - YYC,58431664384,I-YYC-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/58431664384,https://www.airlines-manager.com/aircraft/show/114266980,16:00,0:44,400,"746,951$","684,199$","$1,710.50","$78,343.40"
IAH - YYC,58435221294,I-YYC-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/58435221294,https://www.airlines-manager.com/aircraft/show/114266979,17:15,1:59,400,"746,951$","684,199$","$1,710.50","$78,343.40"
IAH - YYZ,58405118044,I-MEX-YYZ-3,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/58405118044,https://www.airlines-manager.com/aircraft/show/97076944,3:30,10:29,400,"575,646$","516,998$","$1,292.50","$74,033.13"
IAH - YYZ,58411831166,I-MEX-YYZ-6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/58411831166,https://www.airlines-manager.com/aircraft/show/97026605,6:45,13:44,136,"212,416$","181,873$","$1,337.30","$26,043.87"
IAH - YYZ,58425449885,I-MEX-YYZ-2,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/58425449885,https://www.airlines-manager.com/aircraft/show/97076945,13:00,19:59,400,"$575,646.00","$516,998.00","$1,292.50","$74,033.13"
IAH - YYZ,58431664382,I-MEX-YYZ-5,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/58431664382,https://www.airlines-manager.com/aircraft/show/97076942,16:00,22:59,400,"$575,646.00","$516,998.00","$1,292.50","$74,033.13"
IAH - YYZ,58435221371,I-MEX-YYZ-1,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/58435221371,https://www.airlines-manager.com/aircraft/show/97076946,18:00,0:59,400,"$575,646.00","$516,998.00","$1,292.50","$74,033.13"
IAH - YYZ,58441017545,I-MEX-YYZ-4,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/58441017545,https://www.airlines-manager.com/aircraft/show/97076943,21:00,3:59,400,"$575,646.00","$516,998.00","$1,292.50","$74,033.13"
MIA - ABQ,58394056775,M-IAD-TUS-1,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/58394056775,https://www.airlines-manager.com/aircraft/show/97556721,1:15,9:59,310,"$549,643.00","$501,802.00","$1,618.72","$57,458.24"
MIA - ABQ,58405118150,M-IAD-TUS-4,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/58405118150,https://www.airlines-manager.com/aircraft/show/97556718,4:15,12:59,310,"$549,643.00","$501,802.00","$1,618.72","$57,458.24"
MIA - ABQ,58418603339,M-IAD-TUS-3,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/58418603339,https://www.airlines-manager.com/aircraft/show/97556719,10:00,18:44,310,"$549,643.00","$501,802.00","$1,618.72","$57,458.24"
MIA - ABQ,58438157399,M-IAD-TUS-2,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/58438157399,https://www.airlines-manager.com/aircraft/show/97556720,19:30,4:14,310,"$549,643.00","$501,802.00","$1,618.72","$57,458.24"
MIA - ABQ,58446475120,M-IAD-TUS-5,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/58446475120,https://www.airlines-manager.com/aircraft/show/97556716,22:30,7:14,310,"$549,643.00","$501,802.00","$1,618.72","$57,458.24"
MIA - ACC,58428583413,M-84B-2 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/58428583413,https://www.airlines-manager.com/aircraft/show/106676226,14:15,11:59,962,"$3,584,617.00","$3,274,304.00","$3,403.64","$150,658.16"
MIA - ACC,58446475169,M-84B-4 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/58446475169,https://www.airlines-manager.com/aircraft/show/106676228,22:45,20:29,962,"$3,584,617.00","$3,274,304.00","$3,403.64","$150,658.16"
MIA - ALB,58405118047,M-DSM-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/58405118047,https://www.airlines-manager.com/aircraft/show/113101233,3:30,10:14,320,"$429,480.00","$388,106.00","$1,212.83","$57,639.50"
MIA - ALB,58425449919,M-DSM-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/58425449919,https://www.airlines-manager.com/aircraft/show/113101230,13:00,19:44,320,"429,480$","388,106$","$1,212.83","$57,639.50"
MIA - ALB,58431664430,M-DSM-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/58431664430,https://www.airlines-manager.com/aircraft/show/100049776,16:00,22:59,112,"202,975$","178,712$","$1,595.64","$25,591.22"
MIA - ALB,58441017399,M-DSM-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/58441017399,https://www.airlines-manager.com/aircraft/show/111064081,20:15,2:59,320,"429,480$","388,106$","$1,212.83","$57,639.50"
MIA - ALB,58446475211,M-DSM-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/58446475211,https://www.airlines-manager.com/aircraft/show/113101228,23:15,5:59,320,"429,480$","388,106$","$1,212.83","$57,639.50"
MIA - ALG,58435221288,M-84B-7 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/58435221288,https://www.airlines-manager.com/aircraft/show/106676231,17:00,12:29,962,"3,254,925$","2,969,393$","$3,086.69","$152,406.83"
MIA - ALG,58441017472,M-84B-5 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/58441017472,https://www.airlines-manager.com/aircraft/show/106676229,20:30,15:59,962,"3,254,925$","2,969,393$","$3,086.69","$152,406.83"
MIA - ANU,58411831144,M-ANU-SXM-3 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/58411831144,https://www.airlines-manager.com/aircraft/show/110114297,6:30,13:44,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ANU,58415054110,M-ANU-SXM-4 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/58415054110,https://www.airlines-manager.com/aircraft/show/110114298,8:30,15:44,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ANU,58425449801,M-ANU-SXM-1 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/58425449801,https://www.airlines-manager.com/aircraft/show/110114295,12:00,19:14,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ANU,58425449802,M-ANU-SXM-2 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/58425449802,https://www.airlines-manager.com/aircraft/show/110114296,13:00,20:14,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ANU,58435221207,M-ANU-SXM-6 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/58435221207,https://www.airlines-manager.com/aircraft/show/110114300,16:30,23:44,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ANU,58446475242,M-ANU-SXM-5 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/58446475242,https://www.airlines-manager.com/aircraft/show/110114299,23:30,6:44,228,"$356,854.00","$326,171.00","$1,430.57","$45,092.76"
MIA - ATL,58425449748,M-LAX-DEN-4,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/58425449748,https://www.airlines-manager.com/aircraft/show/91126652,12:00,16:29,400,"$366,475.00","$302,230.00",$755.58,"$67,411.90"
MIA - ATL,58425449749,M-LAX-DEN-2,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/58425449749,https://www.airlines-manager.com/aircraft/show/91126650,13:00,17:29,400,"$366,475.00","$302,230.00",$755.58,"$67,411.90"
MIA - ATL,58438157384,M-LAX-DEN-1,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/58438157384,https://www.airlines-manager.com/aircraft/show/91126649,19:30,23:59,400,"$366,475.00","$302,230.00",$755.58,"$67,411.90"
MIA - ATL,58441017544,M-LAX-DEN-3,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/58441017544,https://www.airlines-manager.com/aircraft/show/91126651,21:00,1:29,400,"366,475$","302,230$",$755.58,"$67,411.90"
MIA - AUA,58405117966,M-BGI-CUR-1,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/58405117966,https://www.airlines-manager.com/aircraft/show/107121795,3:00,9:29,320,"405,459$","365,639$","$1,142.62","$56,396.76"
MIA - AUA,58408651762,M-BGI-CUR-4,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/58408651762,https://www.airlines-manager.com/aircraft/show/107121798,4:30,10:59,320,"405,459$","365,639$","$1,142.62","$56,396.76"
MIA - AUA,58421791513,M-BGI-CUR-3,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/58421791513,https://www.airlines-manager.com/aircraft/show/107121797,11:00,17:29,320,"405,459$","365,639$","$1,142.62","$56,396.76"
MIA - AUA,58435221346,M-BGI-CUR-2,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/58435221346,https://www.airlines-manager.com/aircraft/show/107121796,17:45,0:14,320,"$405,459.00","$365,639.00","$1,142.62","$56,396.76"
MIA - AUA,58443550948,M-BGI-CUR-5,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/58443550948,https://www.airlines-manager.com/aircraft/show/107121799,21:45,4:14,246,"320,489$","283,497$","$1,152.43","$43,727.04"
MIA - AUS,58405117923,M-AUS-PIT-2,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/58405117923,https://www.airlines-manager.com/aircraft/show/99920625,2:45,9:14,320,"403,957$","360,258$","$1,125.81","$55,566.79"
MIA - AUS,58418603303,M-AUS-PIT-1,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/58418603303,https://www.airlines-manager.com/aircraft/show/99920626,10:00,16:29,320,"403,957$","360,258$","$1,125.81","$55,566.79"
MIA - AUS,58428583390,M-AUS-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/58428583390,https://www.airlines-manager.com/aircraft/show/82323689,14:00,20:29,112,"190,525$","165,466$","$1,477.38","$25,521.75"
MIA - AUS,58428583391,M-AUS-PIT-4,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/58428583391,https://www.airlines-manager.com/aircraft/show/99920623,14:45,21:14,320,"$403,957.00","$360,258.00","$1,125.81","$55,566.79"
MIA - AUS,58441017482,M-AUS-PIT-3,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/58441017482,https://www.airlines-manager.com/aircraft/show/99920624,20:45,3:14,320,"403,957$","360,258$","$1,125.81","$55,566.79"
MIA - BDA,58405117984,M-PUJ-BDA-1 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/58405117984,https://www.airlines-manager.com/aircraft/show/104034457,3:00,9:14,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDA,58405117985,M-PUJ-BDA-3 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/58405117985,https://www.airlines-manager.com/aircraft/show/104034459,3:45,9:59,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDA,58418603362,M-PUJ-BDA-4 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/58418603362,https://www.airlines-manager.com/aircraft/show/104034460,10:00,16:14,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDA,58421791582,M-PUJ-BDA-6 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/58421791582,https://www.airlines-manager.com/aircraft/show/99326789,11:00,17:14,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDA,58431664365,M-PUJ-BDA-5 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/58431664365,https://www.airlines-manager.com/aircraft/show/104034461,15:45,21:59,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDA,58443550905,M-PUJ-BDA-2 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/58443550905,https://www.airlines-manager.com/aircraft/show/104034458,21:15,3:29,228,"$296,165.00","$268,639.00","$1,178.24","$43,097.17"
MIA - BDL,58405117970,M-BDL-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/58405117970,https://www.airlines-manager.com/aircraft/show/107763565,3:00,9:44,320,"$428,052.00","$385,771.00","$1,205.53","$57,292.72"
MIA - BDL,58415054056,M-BDL-SAT-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/58415054056,https://www.airlines-manager.com/aircraft/show/107467213,8:00,14:44,112,"$201,310.00","$176,683.00","$1,577.53","$26,240.05"
MIA - BDL,58428583282,M-BDL-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/58428583282,https://www.airlines-manager.com/aircraft/show/107763561,13:45,20:29,320,"$428,052.00","$385,771.00","$1,205.53","$57,292.72"
MIA - BDL,58428583283,M-BDL-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/58428583283,https://www.airlines-manager.com/aircraft/show/107763566,14:00,20:44,320,"$428,052.00","$385,771.00","$1,205.53","$57,292.72"
MIA - BDL,58441017463,M-BDL-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/58441017463,https://www.airlines-manager.com/aircraft/show/107763562,20:30,3:14,320,"$428,052.00","$385,771.00","$1,205.53","$57,292.72"
MIA - BFF,58394056575,M-PSP-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/58394056575,https://www.airlines-manager.com/aircraft/show/116789634,0:45,9:29,320,"$556,654.00","$506,491.00","$1,582.78","$57,995.15"
MIA - BFF,58394056577,M-PSP-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/58394056577,https://www.airlines-manager.com/aircraft/show/116789632,1:00,9:44,320,"$556,654.00","$506,491.00","$1,582.78","$57,995.15"
MIA - BFF,58418603317,M-PSP-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/58418603317,https://www.airlines-manager.com/aircraft/show/116789633,10:00,18:44,320,"$556,654.00","$506,491.00","$1,582.78","$57,995.15"
MIA - BFF,58425449923,M-PSP-BFF-5,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/58425449923,https://www.airlines-manager.com/aircraft/show/116789630,13:00,21:44,320,"$556,654.00","$506,491.00","$1,582.78","$57,995.15"
MIA - BFF,58441017486,M-PSP-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/58441017486,https://www.airlines-manager.com/aircraft/show/116789631,20:45,5:29,320,"$556,654.00","$506,491.00","$1,582.78","$57,995.15"
MIA - BGI,58405117924,M-BGI-CUR-2,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/58405117924,https://www.airlines-manager.com/aircraft/show/107121796,2:45,10:59,320,"$518,059.00","$469,235.00","$1,466.36","$56,992.11"
MIA - BGI,58411831156,M-BGI-CUR-5,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/58411831156,https://www.airlines-manager.com/aircraft/show/107121799,6:45,14:59,320,"$518,059.00","$469,235.00","$1,466.36","$56,992.11"
MIA - BGI,58425449760,M-BGI-CUR-1,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/58425449760,https://www.airlines-manager.com/aircraft/show/107121795,12:00,20:14,320,"$518,059.00","$469,235.00","$1,466.36","$56,992.11"
MIA - BGI,58428583271,M-BGI-CUR-4,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/58428583271,https://www.airlines-manager.com/aircraft/show/107121798,13:30,21:44,320,"$518,059.00","$469,235.00","$1,466.36","$56,992.11"
MIA - BGI,58441017357,M-BGI-CUR-3,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/58441017357,https://www.airlines-manager.com/aircraft/show/107121797,20:00,4:14,320,"$518,059.00","$469,235.00","$1,466.36","$56,992.11"
MIA - BHM,58405118091,M-CID-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/58405118091,https://www.airlines-manager.com/aircraft/show/116789651,3:45,8:29,310,"$302,720.00","$273,542.00",$882.39,"$57,790.56"
MIA - BHM,58418603350,M-CID-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/58418603350,https://www.airlines-manager.com/aircraft/show/116789652,10:00,14:44,310,"$302,720.00","$273,542.00",$882.39,"$57,790.56"
MIA - BHM,58435221307,M-CID-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/58435221307,https://www.airlines-manager.com/aircraft/show/116789653,17:15,21:59,310,"$302,720.00","$273,542.00",$882.39,"$57,790.56"
MIA - BHM,58446475162,M-CID-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/58446475162,https://www.airlines-manager.com/aircraft/show/116789650,22:45,3:29,310,"$302,720.00","$273,542.00",$882.39,"$57,790.56"
MIA - BIL,58418603315,M-BIL-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/58418603315,https://www.airlines-manager.com/aircraft/show/116789629,10:00,20:14,320,"634,212$","578,720$","$1,808.50","$56,552.44"
MIA - BIL,58425449771,M-BIL-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/58425449771,https://www.airlines-manager.com/aircraft/show/116789628,12:00,22:14,320,"$634,212.00","$578,720.00","$1,808.50","$56,552.44"
MIA - BIL,58428583332,M-BIL-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/58428583332,https://www.airlines-manager.com/aircraft/show/116789627,14:00,0:14,320,"$634,212.00","$578,720.00","$1,808.50","$56,552.44"
MIA - BIL,58443550917,M-BIL-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/58443550917,https://www.airlines-manager.com/aircraft/show/116789626,21:30,7:44,320,"$634,212.00","$578,720.00","$1,808.50","$56,552.44"
MIA - BIL,58446475274,M-BIL-BZN-5,ERJ-175,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/58446475274,https://www.airlines-manager.com/aircraft/show/116042637,23:45,9:59,112,"$298,004.00","$264,192.00","$2,358.86","$25,816.81"
MIA - BNA,58394056599,M-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/58394056599,https://www.airlines-manager.com/aircraft/show/103534663,0:45,5:59,112,"$157,714.00","$136,236.00","$1,216.39","$26,032.36"
MIA - BNA,58394056601,M-BOI-BNA-4,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/58394056601,https://www.airlines-manager.com/aircraft/show/103775657,1:15,6:29,320,"$332,050.00","$293,799.00",$918.12,"$56,139.94"
MIA - BNA,58408651787,M-BOI-BNA-3,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/58408651787,https://www.airlines-manager.com/aircraft/show/104020880,4:45,9:59,320,"$332,050.00","$293,799.00",$918.12,"$56,139.94"
MIA - BNA,58418603308,M-BOI-BNA-2,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/58418603308,https://www.airlines-manager.com/aircraft/show/104022609,10:00,15:14,320,"$332,050.00","$293,799.00",$918.12,"$56,139.94"
MIA - BNA,58425449813,M-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/58425449813,https://www.airlines-manager.com/aircraft/show/103534663,12:00,17:14,112,"$157,714.00","$136,236.00","$1,216.39","$26,032.36"
MIA - BNA,58443550892,M-BOI-BNA-1,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/58443550892,https://www.airlines-manager.com/aircraft/show/104133006,21:15,2:29,320,"$332,050.00","$293,799.00",$918.12,"$56,139.94"
MIA - BOI,58394056874,M-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/58394056874,https://www.airlines-manager.com/aircraft/show/106339154,1:45,12:59,198,"$525,442.00","$481,573.00","$2,432.19","$42,870.00"
MIA - BOI,58418603309,M-BOI-BNA-1,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/58418603309,https://www.airlines-manager.com/aircraft/show/104133006,10:00,21:14,320,"$698,526.00","$638,374.00","$1,994.92","$56,828.55"
MIA - BOI,58428583323,M-BOI-BNA-4,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/58428583323,https://www.airlines-manager.com/aircraft/show/103775657,14:00,1:14,320,"$698,526.00","$638,374.00","$1,994.92","$56,828.55"
MIA - BOI,58435221324,M-BOI-BNA-3,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/58435221324,https://www.airlines-manager.com/aircraft/show/104020880,17:30,4:44,320,"$698,526.00","$638,374.00","$1,994.92","$56,828.55"
MIA - BOI,58446475142,M-BOI-BNA-2,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/58446475142,https://www.airlines-manager.com/aircraft/show/104022609,22:45,9:59,320,"$698,526.00","$638,374.00","$1,994.92","$56,828.55"
MIA - BOS,58394056892,M-SJU-BOS-5,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/58394056892,https://www.airlines-manager.com/aircraft/show/91352059,2:00,8:59,310,"$445,815.00","$401,406.00","$1,294.86","$57,480.57"
MIA - BOS,58408651821,M-SJU-BOS-1,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/58408651821,https://www.airlines-manager.com/aircraft/show/91352063,5:00,11:59,310,"$445,815.00","$401,406.00","$1,294.86","$57,480.57"
MIA - BOS,58421791600,M-SJU-BOS-4,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/58421791600,https://www.airlines-manager.com/aircraft/show/91352060,11:15,18:14,310,"$445,815.00","$401,406.00","$1,294.86","$57,480.57"
MIA - BOS,58435221197,M-SJU-BOS-2,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/58435221197,https://www.airlines-manager.com/aircraft/show/91352062,16:30,23:29,310,"$445,815.00","$401,406.00","$1,294.86","$57,480.57"
MIA - BOS,58438157341,M-SJU-BOS-3,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/58438157341,https://www.airlines-manager.com/aircraft/show/91352061,19:00,1:59,310,"$445,815.00","$401,406.00","$1,294.86","$57,480.57"
MIA - BOS,58441017428,M-SJU-BOS-6 B,A319-100,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/58441017428,https://www.airlines-manager.com/aircraft/show/110582841,20:15,3:14,198,"$337,082.00","$301,501.00","$1,522.73","$43,174.37"
MIA - BTV,58405117971,M-DSM-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/58405117971,https://www.airlines-manager.com/aircraft/show/111064081,3:00,10:14,320,"$461,408.00","$418,536.00","$1,307.93","$57,862.12"
MIA - BTV,58415054121,M-DSM-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/58415054121,https://www.airlines-manager.com/aircraft/show/113101228,8:45,15:59,320,"$461,408.00","$418,536.00","$1,307.93","$57,862.12"
MIA - BTV,58425449920,M-DSM-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/58425449920,https://www.airlines-manager.com/aircraft/show/113101233,13:00,20:14,320,"$461,408.00","$418,536.00","$1,307.93","$57,862.12"
MIA - BTV,58441017317,M-DSM-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/58441017317,https://www.airlines-manager.com/aircraft/show/113101230,19:45,2:59,320,"$461,408.00","$418,536.00","$1,307.93","$57,862.12"
MIA - BTV,58446475200,M-DSM-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/58446475200,https://www.airlines-manager.com/aircraft/show/100049776,23:00,6:29,112,"$219,081.00","$193,710.00","$1,729.55","$25,885.52"
MIA - BUF,58405117968,M-BDL-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/58405117968,https://www.airlines-manager.com/aircraft/show/107763561,3:00,9:44,320,"$425,908.00","$384,093.00","$1,200.29","$57,043.51"
MIA - BUF,58405117969,M-BDL-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/58405117969,https://www.airlines-manager.com/aircraft/show/107763566,3:15,9:59,320,"$425,908.00","$384,093.00","$1,200.29","$57,043.51"
MIA - BUF,58421791516,M-BDL-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/58421791516,https://www.airlines-manager.com/aircraft/show/107763562,11:00,17:44,320,"$425,908.00","$384,093.00","$1,200.29","$57,043.51"
MIA - BUF,58435221327,M-BDL-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/58435221327,https://www.airlines-manager.com/aircraft/show/107763565,17:30,0:14,320,"$425,908.00","$384,093.00","$1,200.29","$57,043.51"
MIA - BUF,58443550907,M-BDL-SAT-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/58443550907,https://www.airlines-manager.com/aircraft/show/107467213,21:15,3:59,112,"$200,324.00","$175,956.00","$1,571.04","$26,132.08"
MIA - BUR,58405117941,M-BUR-PVD-4,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/58405117941,https://www.airlines-manager.com/aircraft/show/108834806,2:45,13:59,310,"$704,259.00","$651,354.00","$2,101.14","$57,984.04"
MIA - BUR,58421791561,M-BUR-PVD-1,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/58421791561,https://www.airlines-manager.com/aircraft/show/108834803,11:00,22:14,310,"$704,259.00","$651,354.00","$2,101.14","$57,984.04"
MIA - BUR,58428583362,M-BUR-PVD-3,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/58428583362,https://www.airlines-manager.com/aircraft/show/108834805,14:00,1:14,310,"$704,259.00","$651,354.00","$2,101.14","$57,984.04"
MIA - BUR,58441017381,M-BUR-PVD-5 B,A319-100,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/58441017381,https://www.airlines-manager.com/aircraft/show/108834807,20:00,7:14,198,"528,191$","485,766$","$2,453.36","$43,243.26"
MIA - BUR,58441017382,M-BUR-PVD-2,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/58441017382,https://www.airlines-manager.com/aircraft/show/108834804,20:45,7:59,310,"$704,259.00","$651,354.00","$2,101.14","$57,984.04"
MIA - BWI,58405118113,M-BWI-YYZ-4,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/58405118113,https://www.airlines-manager.com/aircraft/show/92153442,4:00,9:44,310,"$362,448.00","$324,139.00","$1,045.61","$56,535.87"
MIA - BWI,58411831112,M-BWI-YYZ-5,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/58411831112,https://www.airlines-manager.com/aircraft/show/92153439,6:00,11:44,310,"$362,448.00","$324,139.00","$1,045.61","$56,535.87"
MIA - BWI,58418603334,M-BWI-YYZ-1,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/58418603334,https://www.airlines-manager.com/aircraft/show/92153443,10:00,15:44,310,"$362,448.00","$324,139.00","$1,045.61","$56,535.87"
MIA - BWI,58425449951,M-BWI-YYZ-2,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/58425449951,https://www.airlines-manager.com/aircraft/show/92153440,13:00,18:44,310,"$362,448.00","$324,139.00","$1,045.61","$56,535.87"
MIA - BWI,58441017556,M-BWI-YYZ-3,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/58441017556,https://www.airlines-manager.com/aircraft/show/92153441,21:00,2:44,310,"$362,448.00","$324,139.00","$1,045.61","$56,535.87"
MIA - BWI,58446475197,M-BWI-YYZ-6 B,A319-100,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/58446475197,https://www.airlines-manager.com/aircraft/show/120519717,23:00,4:44,174,"$258,088.00","$228,115.00","$1,311.01","$39,787.50"
MIA - BZN,58394056361,M-BIL-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/58394056361,https://www.airlines-manager.com/aircraft/show/116789627,0:15,10:44,320,"$656,911.00","$600,715.00","$1,877.23","$57,301.91"
MIA - BZN,58421791522,M-BIL-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/58421791522,https://www.airlines-manager.com/aircraft/show/116789626,11:00,21:29,320,"$656,911.00","$600,715.00","$1,877.23","$57,301.91"
MIA - BZN,58425449994,M-BIL-BZN-5,ERJ-175,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/58425449994,https://www.airlines-manager.com/aircraft/show/116042637,13:00,23:44,112,"$309,244.00","$274,765.00","$2,453.26","$25,599.22"
MIA - BZN,58441017402,M-BIL-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/58441017402,https://www.airlines-manager.com/aircraft/show/116789629,20:15,6:44,320,"656,911$","600,715$","$1,877.23","$57,301.91"
MIA - BZN,58443551013,M-BIL-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/58443551013,https://www.airlines-manager.com/aircraft/show/116789628,22:15,8:44,320,"$656,911.00","$600,715.00","$1,877.23","$57,301.91"
MIA - CAK,58394056896,M-MHT-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/58394056896,https://www.airlines-manager.com/aircraft/show/115493370,2:00,8:14,310,"$385,091.00","$351,321.00","$1,133.29","$56,361.66"
MIA - CAK,58415054076,M-MHT-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/58415054076,https://www.airlines-manager.com/aircraft/show/115493371,8:15,14:29,310,"$385,091.00","$351,321.00","$1,133.29","$56,361.66"
MIA - CAK,58421791570,M-MHT-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/58421791570,https://www.airlines-manager.com/aircraft/show/115493372,11:00,17:14,310,"$385,091.00","$351,321.00","$1,133.29","$56,361.66"
MIA - CAK,58435221420,M-MHT-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/58435221420,https://www.airlines-manager.com/aircraft/show/114912307,18:00,0:14,112,"$181,775.00","$159,685.00","$1,425.76","$25,617.91"
MIA - CAK,58441017562,M-MHT-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/58441017562,https://www.airlines-manager.com/aircraft/show/115493373,21:00,3:14,280,"$362,968.00","$330,058.00","$1,178.78","$52,950.48"
MIA - CHS,58405118019,M-SDF-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/58405118019,https://www.airlines-manager.com/aircraft/show/94886626,3:15,7:14,310,"$226,980.00","$200,988.00",$648.35,"$50,457.24"
MIA - CHS,58418603219,M-SDF-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/58418603219,https://www.airlines-manager.com/aircraft/show/96692674,9:00,12:59,310,"$226,980.00","$200,988.00",$648.35,"$50,457.24"
MIA - CHS,58421791589,M-SDF-PWM-5,ERJ-175,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/58421791589,https://www.airlines-manager.com/aircraft/show/105601657,11:00,14:59,112,"105,788$","89,336$",$797.64,"$22,427.45"
MIA - CHS,58428583346,M-SDF-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/58428583346,https://www.airlines-manager.com/aircraft/show/94886625,14:00,17:59,310,"226,980$","200,988$",$648.35,"$50,457.24"
MIA - CHS,58441017500,M-SDF-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/58441017500,https://www.airlines-manager.com/aircraft/show/94886629,20:45,0:44,297,"221,377$","195,560$",$658.45,"$49,094.56"
MIA - CID,58394056800,M-CID-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/58394056800,https://www.airlines-manager.com/aircraft/show/116789652,1:15,8:29,310,"455,731$","418,272$","$1,349.26","$57,825.62"
MIA - CID,58418603351,M-CID-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/58418603351,https://www.airlines-manager.com/aircraft/show/116789653,10:00,17:14,310,"$455,731.00","$418,272.00","$1,349.26","$57,825.62"
MIA - CID,58431664349,M-CID-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/58431664349,https://www.airlines-manager.com/aircraft/show/116789650,15:30,22:44,310,"$455,731.00","$418,272.00","$1,349.26","$57,825.62"
MIA - CID,58441017466,M-CID-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/58441017466,https://www.airlines-manager.com/aircraft/show/116789651,20:30,3:44,310,"455,731$","418,272$","$1,349.26","$57,825.62"
MIA - CLE,58394056480,M-COS-CVG-5,ERJ-175,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/58394056480,https://www.airlines-manager.com/aircraft/show/103534665,0:30,6:44,112,"$188,656.00","$164,872.00","$1,472.07","$26,450.05"
MIA - CLE,58405118143,M-COS-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/58405118143,https://www.airlines-manager.com/aircraft/show/103684630,4:15,10:29,320,"$400,132.00","$358,875.00","$1,121.48","$57,573.53"
MIA - CLE,58415054017,M-COS-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/58415054017,https://www.airlines-manager.com/aircraft/show/103365574,7:45,13:59,320,"$400,132.00","$358,875.00","$1,121.48","$57,573.53"
MIA - CLE,58425449910,M-COS-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/58425449910,https://www.airlines-manager.com/aircraft/show/103684632,13:00,19:14,320,"$400,132.00","$358,875.00","$1,121.48","$57,573.53"
MIA - CLE,58441017483,M-COS-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/58441017483,https://www.airlines-manager.com/aircraft/show/103684631,20:45,2:59,320,"$400,132.00","$358,875.00","$1,121.48","$57,573.53"
MIA - CLT,58405118165,M-ORD-DFW-6,ERJ-175,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/58405118165,https://www.airlines-manager.com/aircraft/show/82543123,4:15,8:59,112,"$142,655.00","$118,748.00","$1,060.25","$25,087.61"
MIA - CLT,58418603331,M-ORD-DFW-3,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/58418603331,https://www.airlines-manager.com/aircraft/show/91600939,10:00,14:44,310,"$299,768.00","$261,819.00",$844.58,"$55,313.87"
MIA - CLT,58431664409,M-ORD-DFW-2,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/58431664409,https://www.airlines-manager.com/aircraft/show/91600936,16:00,20:44,310,"$299,768.00","$261,819.00",$844.58,"$55,313.87"
MIA - CLT,58435221352,M-ORD-DFW-5,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/58435221352,https://www.airlines-manager.com/aircraft/show/91600937,17:45,22:29,310,"299,768$","261,819$",$844.58,"$55,313.87"
MIA - CLT,58446475116,M-ORD-DFW-1,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/58446475116,https://www.airlines-manager.com/aircraft/show/91600935,22:30,3:14,310,"$299,768.00","$261,819.00",$844.58,"$55,313.87"
MIA - CLT,58446475117,M-ORD-DFW-4,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/58446475117,https://www.airlines-manager.com/aircraft/show/91600938,23:30,4:14,310,"$299,768.00","$261,819.00",$844.58,"$55,313.87"
MIA - CMH,58394056850,M-MKE-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/58394056850,https://www.airlines-manager.com/aircraft/show/88494374,1:45,7:44,320,"$373,993.00","$333,972.00","$1,043.66","$55,817.05"
MIA - CMH,58411831193,M-MKE-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/58411831193,https://www.airlines-manager.com/aircraft/show/88494378,7:15,13:14,320,"$373,993.00","$333,972.00","$1,043.66","$55,817.05"
MIA - CMH,58428583314,M-MKE-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/58428583314,https://www.airlines-manager.com/aircraft/show/91806233,14:00,19:59,320,"$373,993.00","$333,972.00","$1,043.66","$55,817.05"
MIA - CMH,58435221415,M-MKE-CMH-5 B,A319-100,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/58435221415,https://www.airlines-manager.com/aircraft/show/110582842,18:00,23:59,198,"$283,790.00","$255,521.00","$1,290.51","$42,705.46"
MIA - CMH,58441017547,M-MKE-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/58441017547,https://www.airlines-manager.com/aircraft/show/88239556,21:00,2:59,320,"$373,993.00","$333,972.00","$1,043.66","$55,817.05"
MIA - CMN,58408651831,M-84B-4 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/58408651831,https://www.airlines-manager.com/aircraft/show/106676228,5:00,22:44,962,"$2,973,893.00","$2,715,224.00","$2,822.48","$153,114.14"
MIA - CMN,58441017471,M-84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/58441017471,https://www.airlines-manager.com/aircraft/show/106676225,20:30,14:14,962,"$2,973,893.00","$2,715,224.00","$2,822.48","$153,114.14"
MIA - COS,58411831138,M-COS-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/58411831138,https://www.airlines-manager.com/aircraft/show/103684631,6:30,14:59,320,"$546,028.00","$494,638.00","$1,545.74","$58,307.03"
MIA - COS,58418603373,M-COS-CVG-5,ERJ-175,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/58418603373,https://www.airlines-manager.com/aircraft/show/103534665,10:00,18:44,112,"$257,259.00","$226,678.00","$2,023.91","$25,955.50"
MIA - COS,58428583322,M-COS-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/58428583322,https://www.airlines-manager.com/aircraft/show/103684630,14:00,22:29,320,"$546,028.00","$494,638.00","$1,545.74","$58,307.03"
MIA - COS,58435221323,M-COS-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/58435221323,https://www.airlines-manager.com/aircraft/show/103365574,17:30,1:59,320,"$546,028.00","$494,638.00","$1,545.74","$58,307.03"
MIA - COS,58446475141,M-COS-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/58446475141,https://www.airlines-manager.com/aircraft/show/103684632,22:45,7:14,320,"$546,028.00","$494,638.00","$1,545.74","$58,307.03"
MIA - CPT,58408651828,M-84A-6 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/58408651828,https://www.airlines-manager.com/aircraft/show/93731916,5:00,10:29,1124,"$5,639,082.00","$5,244,474.00","$4,665.90","$956,439.03"
MIA - CPT,58435221414,M-84A-2 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/58435221414,https://www.airlines-manager.com/aircraft/show/93686968,18:00,23:29,1124,"$5,639,082.00","$5,244,474.00","$4,665.90","$956,439.03"
MIA - CUN,58408651853,M-PSP-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/58408651853,https://www.airlines-manager.com/aircraft/show/116789631,5:30,9:44,320,"$251,434.00","$216,081.00",$675.25,"$51,042.76"
MIA - CUN,58418603256,M-PSP-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/58418603256,https://www.airlines-manager.com/aircraft/show/116789634,9:30,13:44,320,"$251,434.00","$216,081.00",$675.25,"$51,042.76"
MIA - CUN,58418603257,M-PSP-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/58418603257,https://www.airlines-manager.com/aircraft/show/116789632,10:00,14:14,320,"$251,434.00","$216,081.00",$675.25,"$51,042.76"
MIA - CUN,58438157288,M-PSP-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/58438157288,https://www.airlines-manager.com/aircraft/show/116789633,18:45,22:59,320,"$251,434.00","$216,081.00",$675.25,"$51,042.76"
MIA - CUN,58443550950,M-PSP-BFF-5,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/58443550950,https://www.airlines-manager.com/aircraft/show/116789630,21:45,1:59,319,"$250,721.00","$215,386.00",$675.19,"$50,878.58"
MIA - CUR,58405118144,M-BGI-CUR-3,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/58405118144,https://www.airlines-manager.com/aircraft/show/107121797,4:15,10:59,320,"$414,925.00","$372,912.00","$1,165.35","$55,382.97"
MIA - CUR,58421791512,M-BGI-CUR-2,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/58421791512,https://www.airlines-manager.com/aircraft/show/107121796,11:00,17:44,320,"$414,925.00","$372,912.00","$1,165.35","$55,382.97"
MIA - CUR,58431664261,M-BGI-CUR-5,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/58431664261,https://www.airlines-manager.com/aircraft/show/107121799,15:00,21:44,320,"$414,925.00","$372,912.00","$1,165.35","$55,382.97"
MIA - CUR,58441017397,M-BGI-CUR-1,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/58441017397,https://www.airlines-manager.com/aircraft/show/107121795,20:15,2:59,320,"$414,925.00","$372,912.00","$1,165.35","$55,382.97"
MIA - CUR,58443550947,M-BGI-CUR-4,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/58443550947,https://www.airlines-manager.com/aircraft/show/107121798,21:45,4:29,300,"$391,225.00","$350,016.00","$1,166.72","$51,982.57"
MIA - CVG,58394056884,M-COS-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/58394056884,https://www.airlines-manager.com/aircraft/show/103365574,2:00,7:44,320,"370,605$","328,724$","$1,027.26","$57,335.58"
MIA - CVG,58411831195,M-COS-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/58411831195,https://www.airlines-manager.com/aircraft/show/103684632,7:15,12:59,320,"$370,605.00","$328,724.00","$1,027.26","$57,335.58"
MIA - CVG,58431664260,M-COS-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/58431664260,https://www.airlines-manager.com/aircraft/show/103684631,15:00,20:44,320,"$370,605.00","$328,724.00","$1,027.26","$57,335.58"
MIA - CVG,58438157313,M-COS-CVG-5,ERJ-175,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/58438157313,https://www.airlines-manager.com/aircraft/show/103534665,18:45,0:29,112,"$175,356.00","$151,647.00","$1,353.99","$26,450.06"
MIA - CVG,58446475112,M-COS-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/58446475112,https://www.airlines-manager.com/aircraft/show/103684630,22:30,4:14,320,"$370,605.00","$328,724.00","$1,027.26","$57,335.58"
MIA - DEN,58394056814,M-LAX-DEN-3,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/58394056814,https://www.airlines-manager.com/aircraft/show/91126651,1:30,9:59,400,"730,615$","644,983$","$1,612.46","$76,029.43"
MIA - DEN,58405118043,M-LAX-DEN-4,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/58405118043,https://www.airlines-manager.com/aircraft/show/91126652,3:30,11:59,400,"730,615$","644,983$","$1,612.46","$76,029.43"
MIA - DEN,58421791488,M-LAX-DEN-1,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/58421791488,https://www.airlines-manager.com/aircraft/show/91126649,11:00,19:29,400,"730,615$","644,983$","$1,612.46","$76,029.43"
MIA - DEN,58435221320,M-LAX-DEN-2,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/58435221320,https://www.airlines-manager.com/aircraft/show/91126650,17:30,1:59,400,"$730,615.00","$644,983.00","$1,612.46","$76,029.43"
MIA - DEN,58443551030,M-LAX-DEN-5 E,A319-100,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/58443551030,https://www.airlines-manager.com/aircraft/show/115181776,22:15,6:59,216,"428,425$","372,033$","$1,722.38","$42,599.20"
MIA - DFW,58405118051,M-ORD-DFW-2,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/58405118051,https://www.airlines-manager.com/aircraft/show/91600936,3:30,9:59,310,"$410,166.00","$354,245.00","$1,142.73","$54,639.33"
MIA - DFW,58418603329,M-ORD-DFW-1,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/58418603329,https://www.airlines-manager.com/aircraft/show/91600935,10:00,16:29,310,"$410,166.00","$354,245.00","$1,142.73","$54,639.33"
MIA - DFW,58421791548,M-ORD-DFW-4,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/58421791548,https://www.airlines-manager.com/aircraft/show/91600938,11:00,17:29,310,"$410,166.00","$354,245.00","$1,142.73","$54,639.33"
MIA - DFW,58431664369,M-ORD-DFW-6,ERJ-175,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/58431664369,https://www.airlines-manager.com/aircraft/show/82543123,15:45,22:14,112,"$193,018.00","$157,511.00","$1,406.35","$24,294.76"
MIA - DFW,58443550923,M-ORD-DFW-3,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/58443550923,https://www.airlines-manager.com/aircraft/show/91600939,21:30,3:59,310,"$410,166.00","$354,245.00","$1,142.73","$54,639.33"
MIA - DFW,58446475118,M-ORD-DFW-5,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/58446475118,https://www.airlines-manager.com/aircraft/show/91600937,22:30,4:59,310,"$410,166.00","$354,245.00","$1,142.73","$54,639.33"
MIA - DSM,58405117972,M-DSM-ALB-2,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/58405117972,https://www.airlines-manager.com/aircraft/show/113101230,3:00,10:14,320,"$457,870.00","$414,841.00","$1,296.38","$57,351.29"
MIA - DSM,58415054132,M-DSM-ALB-5,ERJ-175,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/58415054132,https://www.airlines-manager.com/aircraft/show/100049776,8:45,15:59,112,"$216,773.00","$191,389.00","$1,708.83","$26,459.31"
MIA - DSM,58425449918,M-DSM-ALB-1,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/58425449918,https://www.airlines-manager.com/aircraft/show/111064081,13:00,20:14,320,"$457,870.00","$414,841.00","$1,296.38","$57,351.29"
MIA - DSM,58431664399,M-DSM-ALB-4,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/58431664399,https://www.airlines-manager.com/aircraft/show/113101228,16:00,23:14,320,"$457,870.00","$414,841.00","$1,296.38","$57,351.29"
MIA - DSM,58441017400,M-DSM-ALB-3,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/58441017400,https://www.airlines-manager.com/aircraft/show/113101233,20:15,3:29,320,"$457,870.00","$414,841.00","$1,296.38","$57,351.29"
MIA - DSS,58394056155,M-84B-7 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/58394056155,https://www.airlines-manager.com/aircraft/show/106676231,0:00,16:59,962,"$2,864,435.00","$2,618,423.00","$2,721.85","$154,176.04"
MIA - DSS,58425449810,M-84B-3 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/58425449810,https://www.airlines-manager.com/aircraft/show/106676227,12:00,4:59,962,"$2,864,435.00","$2,618,423.00","$2,721.85","$154,176.04"
MIA - DTW,58394056817,M-PDX-DTW-3,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/58394056817,https://www.airlines-manager.com/aircraft/show/89943713,1:30,7:59,320,"$414,846.00","$362,524.00","$1,132.89","$55,916.30"
MIA - DTW,58405117884,M-PDX-DTW-4,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/58405117884,https://www.airlines-manager.com/aircraft/show/89943712,2:30,8:59,320,"$414,846.00","$362,524.00","$1,132.89","$55,916.30"
MIA - DTW,58418603289,M-PDX-DTW-2,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/58418603289,https://www.airlines-manager.com/aircraft/show/89943714,10:00,16:29,320,"$414,846.00","$362,524.00","$1,132.89","$55,916.30"
MIA - DTW,58428583312,M-PDX-DTW-5,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/58428583312,https://www.airlines-manager.com/aircraft/show/89943711,14:00,20:29,320,"$414,846.00","$362,524.00","$1,132.89","$55,916.30"
MIA - DTW,58446475107,M-PDX-DTW-1,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/58446475107,https://www.airlines-manager.com/aircraft/show/89943715,22:30,4:59,320,"$414,846.00","$362,524.00","$1,132.89","$55,916.30"
MIA - ECP,58394056411,M-MAF-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50834918,https://www.airlines-manager.com/network/showflight/58394056411,https://www.airlines-manager.com/aircraft/show/92137503,0:15,4:14,112,"$103,168.00","$86,664.00",$773.79,"$21,756.65"
MIA - ECP,58394056413,M-MAF-ROC-4,A321-200,https://www.airlines-manager.com/network/showline/50834918,https://www.airlines-manager.com/network/showflight/58394056413,https://www.airlines-manager.com/aircraft/show/120933310,2:15,6:14,310,"221,304$","195,136$",$629.47,"$48,988.12"
MIA - ECP,58415054052,M-MAF-ROC-3,A321-200,https://www.airlines-manager.com/network/showline/50834918,https://www.airlines-manager.com/network/showflight/58415054052,https://www.airlines-manager.com/aircraft/show/120933309,8:00,11:59,310,"221,304$","195,136$",$629.47,"$48,988.12"
MIA - ECP,58418603358,M-MAF-ROC-2,A321-200,https://www.airlines-manager.com/network/showline/50834918,https://www.airlines-manager.com/network/showflight/58418603358,https://www.airlines-manager.com/aircraft/show/120933308,10:00,13:59,310,"221,304$","195,136$",$629.47,"$48,988.12"
MIA - ECP,58435221224,M-MAF-ROC-1,A321-200,https://www.airlines-manager.com/network/showline/50834918,https://www.airlines-manager.com/network/showflight/58435221224,https://www.airlines-manager.com/aircraft/show/120933307,16:45,20:44,310,"221,304$","195,136$",$629.47,"$48,988.12"
MIA - ELP,58415054078,M-ELP-MCI-5 B,A319-100,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/58415054078,https://www.airlines-manager.com/aircraft/show/105093924,8:15,16:44,198,"$402,779.00","$366,768.00","$1,852.36","$43,233.95"
MIA - ELP,58418603294,M-ELP-MCI-1,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/58418603294,https://www.airlines-manager.com/aircraft/show/91806234,10:00,18:29,320,"$534,175.00","$484,066.00","$1,512.71","$57,060.83"
MIA - ELP,58431664435,M-ELP-MCI-3,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/58431664435,https://www.airlines-manager.com/aircraft/show/91806232,16:15,0:44,320,"$534,175.00","$484,066.00","$1,512.71","$57,060.83"
MIA - ELP,58435221250,M-ELP-MCI-4,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/58435221250,https://www.airlines-manager.com/aircraft/show/91806231,17:00,1:29,320,"534,175$","484,066$","$1,512.71","$57,060.83"
MIA - ELP,58446475208,M-ELP-MCI-2,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/58446475208,https://www.airlines-manager.com/aircraft/show/91806235,23:15,7:44,320,"$534,175.00","$484,066.00","$1,512.71","$57,060.83"
MIA - EUG,58394056827,M-EUG-SYR-4,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/58394056827,https://www.airlines-manager.com/aircraft/show/119652480,1:30,13:59,320,"$770,422.00","$706,945.00","$2,209.20","$56,631.11"
MIA - EUG,58428583341,M-EUG-SYR-1,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/58428583341,https://www.airlines-manager.com/aircraft/show/119652483,14:00,2:29,320,"$770,422.00","$706,945.00","$2,209.20","$56,631.11"
MIA - EUG,58438157289,M-EUG-SYR-3,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/58438157289,https://www.airlines-manager.com/aircraft/show/119652481,18:45,7:14,320,"$770,422.00","$706,945.00","$2,209.20","$56,631.11"
MIA - EUG,58446475234,M-EUG-SYR-2,737-900ER,https://www.airlines-manager.com/network/showline/50424905,https://www.airlines-manager.com/network/showflight/58446475234,https://www.airlines-manager.com/aircraft/show/119652482,23:30,11:59,320,"$770,422.00","$706,945.00","$2,209.20","$56,631.11"
MIA - FAR,58394056574,M-FAR-TUL-3,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/58394056574,https://www.airlines-manager.com/aircraft/show/110883161,0:45,9:29,320,"$548,683.00","$499,861.00","$1,562.07","$57,235.99"
MIA - FAR,58411831196,M-FAR-TUL-4,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/58411831196,https://www.airlines-manager.com/aircraft/show/110883162,7:15,15:59,320,"$548,683.00","$499,861.00","$1,562.07","$57,235.99"
MIA - FAR,58421791519,M-FAR-TUL-1,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/58421791519,https://www.airlines-manager.com/aircraft/show/110883159,11:00,19:44,320,"$548,683.00","$499,861.00","$1,562.07","$57,235.99"
MIA - FAR,58431664397,M-FAR-TUL-2,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/58431664397,https://www.airlines-manager.com/aircraft/show/110883160,16:00,0:44,320,"$548,683.00","$499,861.00","$1,562.07","$57,235.99"
MIA - FAR,58438157215,M-FAR-TUL-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/58438157215,https://www.airlines-manager.com/aircraft/show/87169421,18:15,2:59,112,"$258,578.00","$229,164.00","$2,046.11","$26,240.15"
MIA - FAT,58415054089,M-FAT-MSO-4,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/58415054089,https://www.airlines-manager.com/aircraft/show/113101232,8:30,19:59,320,"$721,117.00","$660,903.00","$2,065.32","$57,553.24"
MIA - FAT,58421791453,M-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/58421791453,https://www.airlines-manager.com/aircraft/show/120519142,10:45,22:14,0,"$202,638.00","$131,134.00",#DIV/0!,"$11,419.51"
MIA - FAT,58421791454,M-FAT-MSO-1,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/58421791454,https://www.airlines-manager.com/aircraft/show/113101229,11:00,22:29,320,"$721,117.00","$660,903.00","$2,065.32","$57,553.24"
MIA - FAT,58438157329,M-FAT-MSO-2,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/58438157329,https://www.airlines-manager.com/aircraft/show/113101231,19:00,6:29,320,"$721,117.00","$660,903.00","$2,065.32","$57,553.24"
MIA - FAT,58443551012,M-FAT-MSO-3,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/58443551012,https://www.airlines-manager.com/aircraft/show/113101234,22:15,9:44,320,"$684,642.00","$629,659.00","$1,967.68","$54,832.42"
MIA - FCA,58394056461,M-FCA-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/58394056461,https://www.airlines-manager.com/aircraft/show/119652477,0:30,11:59,320,"$707,833.00","$648,466.00","$2,026.46","$56,470.19"
MIA - FCA,58405117890,M-FCA-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/58405117890,https://www.airlines-manager.com/aircraft/show/119652476,2:30,13:59,320,"$707,833.00","$648,466.00","$2,026.46","$56,470.19"
MIA - FCA,58425449776,M-FCA-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/58425449776,https://www.airlines-manager.com/aircraft/show/119652479,12:00,23:29,320,"$707,833.00","$648,466.00","$2,026.46","$56,470.19"
MIA - FCA,58428583338,M-FCA-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50424916,https://www.airlines-manager.com/network/showflight/58428583338,https://www.airlines-manager.com/aircraft/show/119652478,14:00,1:29,320,"$707,833.00","$648,466.00","$2,026.46","$56,470.19"
MIA - FPO,58394056344,M-BGI-CUR-2,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/58394056344,https://www.airlines-manager.com/aircraft/show/107121796,0:15,2:44,320,"$84,372.00","$59,731.00",$186.66,"$24,052.75"
MIA - FPO,58405118145,M-BGI-CUR-5,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/58405118145,https://www.airlines-manager.com/aircraft/show/107121799,4:15,6:44,320,"$84,372.00","$59,731.00",$186.66,"$24,052.75"
MIA - FPO,58418603255,M-BGI-CUR-1,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/58418603255,https://www.airlines-manager.com/aircraft/show/107121795,9:30,11:59,320,"$84,372.00","$59,731.00",$186.66,"$24,052.75"
MIA - FPO,58421791514,M-BGI-CUR-4,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/58421791514,https://www.airlines-manager.com/aircraft/show/107121798,11:00,13:29,320,"$84,372.00","$59,731.00",$186.66,"$24,052.75"
MIA - FPO,58435221326,M-BGI-CUR-3,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/58435221326,https://www.airlines-manager.com/aircraft/show/107121797,17:30,19:59,212,"$62,798.00","$38,526.00",$181.73,"$15,513.83"
MIA - FSD,58394056691,M-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/58394056691,https://www.airlines-manager.com/aircraft/show/110883110,1:00,8:59,310,"$503,709.00","$462,376.00","$1,491.54","$57,917.66"
MIA - FSD,58405117942,M-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/58405117942,https://www.airlines-manager.com/aircraft/show/110883113,2:45,10:44,310,"503,709$","462,376$","$1,491.54","$57,917.66"
MIA - FSD,58428583364,M-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/58428583364,https://www.airlines-manager.com/aircraft/show/110883112,14:00,21:59,310,"$503,709.00","$462,376.00","$1,491.54","$57,917.66"
MIA - FSD,58431664440,M-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/58431664440,https://www.airlines-manager.com/aircraft/show/110883111,16:15,0:14,310,"$503,709.00","$462,376.00","$1,491.54","$57,917.66"
MIA - FSD,58443550998,M-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/58443550998,https://www.airlines-manager.com/aircraft/show/104353572,22:00,5:59,100,"$226,033.00","$199,344.00","$1,993.44","$24,970.02"
MIA - GRR,58394056161,M-RAP-GRR-5,ERJ-175,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/58394056161,https://www.airlines-manager.com/aircraft/show/116042630,0:00,6:44,112,"$200,498.00","$176,006.00","$1,571.48","$26,139.50"
MIA - GRR,58394056162,M-RAP-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/58394056162,https://www.airlines-manager.com/aircraft/show/116789623,2:15,8:59,320,"$424,936.00","$383,045.00","$1,197.02","$56,887.87"
MIA - GRR,58418603313,M-RAP-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/58418603313,https://www.airlines-manager.com/aircraft/show/116789624,10:00,16:44,320,"$424,936.00","$383,045.00","$1,197.02","$56,887.87"
MIA - GRR,58425449770,M-RAP-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/58425449770,https://www.airlines-manager.com/aircraft/show/116789622,12:00,18:44,320,"$424,936.00","$383,045.00","$1,197.02","$56,887.87"
MIA - GRR,58438157331,M-RAP-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/58438157331,https://www.airlines-manager.com/aircraft/show/116789625,19:00,1:44,320,"$424,936.00","$383,045.00","$1,197.02","$56,887.87"
MIA - GSO,58418603234,M-EUG-SYR-1,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/58418603234,https://www.airlines-manager.com/aircraft/show/119652483,9:15,13:59,320,"$310,263.00","$276,328.00",$863.53,"$58,379.15"
MIA - GSO,58428583340,M-EUG-SYR-3,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/58428583340,https://www.airlines-manager.com/aircraft/show/119652481,14:00,18:44,320,"$310,263.00","$276,328.00",$863.53,"$58,379.15"
MIA - GSO,58438157290,M-EUG-SYR-2,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/58438157290,https://www.airlines-manager.com/aircraft/show/119652482,18:45,23:29,320,"$310,263.00","$276,328.00",$863.53,"$58,379.15"
MIA - GSO,58441017488,M-EUG-SYR-4,737-900ER,https://www.airlines-manager.com/network/showline/50424907,https://www.airlines-manager.com/network/showflight/58441017488,https://www.airlines-manager.com/aircraft/show/119652480,20:45,1:29,314,"$306,755.00","$272,935.00",$869.22,"$57,662.32"
MIA - HAV,58408651809,M-PDX-DTW-1,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/58408651809,https://www.airlines-manager.com/aircraft/show/89943715,5:00,7:59,320,"$131,980.00","$102,173.00",$319.29,"$34,247.93"
MIA - HAV,58418603210,M-PDX-DTW-4,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/58418603210,https://www.airlines-manager.com/aircraft/show/89943712,9:00,11:59,320,"$131,980.00","$102,173.00",$319.29,"$34,247.93"
MIA - HAV,58418603211,M-PDX-DTW-3,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/58418603211,https://www.airlines-manager.com/aircraft/show/89943713,10:00,12:59,320,"$131,980.00","$102,173.00",$319.29,"$34,247.93"
MIA - HAV,58435221190,M-PDX-DTW-2,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/58435221190,https://www.airlines-manager.com/aircraft/show/89943714,16:30,19:29,320,"$131,980.00","$102,173.00",$319.29,"$34,247.93"
MIA - HAV,58441017460,M-PDX-DTW-5,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/58441017460,https://www.airlines-manager.com/aircraft/show/89943711,20:30,23:29,292,"$121,785.00","$92,199.00",$315.75,"$30,904.69"
MIA - IAD,58405118151,M-IAD-TUS-2,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/58405118151,https://www.airlines-manager.com/aircraft/show/97556720,4:15,9:59,310,"$363,777.00","$324,476.00","$1,046.70","$56,594.65"
MIA - IAD,58411831198,M-IAD-TUS-5,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/58411831198,https://www.airlines-manager.com/aircraft/show/97556716,7:15,12:59,310,"$363,777.00","$324,476.00","$1,046.70","$56,594.65"
MIA - IAD,58418603341,M-IAD-TUS-1,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/58418603341,https://www.airlines-manager.com/aircraft/show/97556721,10:00,15:44,310,"$363,777.00","$324,476.00","$1,046.70","$56,594.65"
MIA - IAD,58425449954,M-IAD-TUS-4,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/58425449954,https://www.airlines-manager.com/aircraft/show/97556718,13:00,18:44,310,"$363,777.00","$324,476.00","$1,046.70","$56,594.65"
MIA - IAD,58438157301,M-IAD-TUS-3,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/58438157301,https://www.airlines-manager.com/aircraft/show/97556719,18:45,0:29,310,"$363,777.00","$324,476.00","$1,046.70","$56,594.65"
MIA - ICT,58405117888,M-FAR-TUL-1,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/58405117888,https://www.airlines-manager.com/aircraft/show/110883159,2:30,9:29,320,"$448,851.00","$405,534.00","$1,267.29","$58,071.69"
MIA - ICT,58418603213,M-FAR-TUL-2,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/58418603213,https://www.airlines-manager.com/aircraft/show/110883160,9:00,15:59,320,"$448,851.00","$405,534.00","$1,267.29","$58,071.69"
MIA - ICT,58421791587,M-FAR-TUL-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/58421791587,https://www.airlines-manager.com/aircraft/show/87169421,11:00,18:14,112,"$213,247.00","$187,816.00","$1,676.93","$25,965.35"
MIA - ICT,58435221348,M-FAR-TUL-3,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/58435221348,https://www.airlines-manager.com/aircraft/show/110883161,17:45,0:44,320,"$448,851.00","$405,534.00","$1,267.29","$58,071.69"
MIA - ICT,58446475146,M-FAR-TUL-4,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/58446475146,https://www.airlines-manager.com/aircraft/show/110883162,22:45,5:44,320,"$448,851.00","$405,534.00","$1,267.29","$58,071.69"
MIA - IND,58405117913,M-AUS-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/58405117913,https://www.airlines-manager.com/aircraft/show/82323689,2:30,8:29,112,"$181,512.00","$157,824.00","$1,409.14","$26,377.27"
MIA - IND,58405117914,M-AUS-PIT-4,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/58405117914,https://www.airlines-manager.com/aircraft/show/99920623,3:15,9:14,320,"$384,262.00","$342,843.00","$1,071.38","$57,299.67"
MIA - IND,58418603301,M-AUS-PIT-3,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/58418603301,https://www.airlines-manager.com/aircraft/show/99920624,10:00,15:59,320,"$384,262.00","$342,843.00","$1,071.38","$57,299.67"
MIA - IND,58431664393,M-AUS-PIT-2,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/58431664393,https://www.airlines-manager.com/aircraft/show/99920625,16:00,21:59,320,"384,262$","342,843$","$1,071.38","$57,299.67"
MIA - IND,58446475111,M-AUS-PIT-1,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/58446475111,https://www.airlines-manager.com/aircraft/show/99920626,22:30,4:29,320,"$384,262.00","$342,843.00","$1,071.38","$57,299.67"
MIA - JAN,58408651869,M-MHT-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/58408651869,https://www.airlines-manager.com/aircraft/show/114912307,5:30,10:29,112,"$149,970.00","$131,075.00","$1,170.31","$26,302.68"
MIA - JAN,58415054102,M-MHT-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/58415054102,https://www.airlines-manager.com/aircraft/show/115493373,8:30,13:29,310,"$315,458.00","$286,126.00",$922.99,"$57,416.59"
MIA - JAN,58428583371,M-MHT-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/58428583371,https://www.airlines-manager.com/aircraft/show/115493370,14:00,18:59,310,"$315,458.00","$286,126.00",$922.99,"$57,416.59"
MIA - JAN,58441017409,M-MHT-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/58441017409,https://www.airlines-manager.com/aircraft/show/115493371,20:15,1:14,310,"$315,458.00","$286,126.00",$922.99,"$57,416.59"
MIA - JAN,58446475123,M-MHT-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/58446475123,https://www.airlines-manager.com/aircraft/show/115493372,22:30,3:29,260,"$285,540.00","$257,225.00",$989.33,"$51,617.06"
MIA - JAX,58405117965,M-COS-CVG-2,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/58405117965,https://www.airlines-manager.com/aircraft/show/103684631,3:00,6:29,320,"$174,389.00","$145,350.00",$454.22,"$41,727.27"
MIA - JAX,58421791439,M-COS-CVG-1,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/58421791439,https://www.airlines-manager.com/aircraft/show/103684630,10:30,13:59,320,"174,389$","145,350$",$454.22,"$41,727.27"
MIA - JAX,58428583321,M-COS-CVG-4,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/58428583321,https://www.airlines-manager.com/aircraft/show/103365574,14:00,17:29,320,"$174,389.00","$145,350.00",$454.22,"$41,727.27"
MIA - JAX,58438157363,M-COS-CVG-3,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/58438157363,https://www.airlines-manager.com/aircraft/show/103684632,19:15,22:44,320,"174,389$","145,350$",$454.22,"$41,727.27"
MIA - JAX,58443551029,M-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/58443551029,https://www.airlines-manager.com/aircraft/show/106339154,22:15,1:44,198,"132,355$","112,459$",$567.97,"$32,284.88"
MIA - JFK,58408651870,M-JFK-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/58408651870,https://www.airlines-manager.com/aircraft/show/105308264,5:45,11:59,338,"$430,736.00","$378,260.00","$1,119.11","$60,683.42"
MIA - JFK,58411831165,M-JFK-PHX-6,ERJ-175,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/58411831165,https://www.airlines-manager.com/aircraft/show/82683137,6:45,12:59,112,"$187,689.00","$153,479.00","$1,370.35","$24,622.30"
MIA - JFK,58418603280,M-JFK-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/58418603280,https://www.airlines-manager.com/aircraft/show/105308267,10:00,16:14,338,"430,736$","378,260$","$1,119.11","$60,683.42"
MIA - JFK,58425449740,M-JFK-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/58425449740,https://www.airlines-manager.com/aircraft/show/105308265,12:00,18:14,338,"$430,736.00","$378,260.00","$1,119.11","$60,683.42"
MIA - JFK,58435221365,M-JFK-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/58435221365,https://www.airlines-manager.com/aircraft/show/105308266,18:00,0:14,338,"430,736$","378,260$","$1,119.11","$60,683.42"
MIA - JFK,58441017477,M-JFK-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/58441017477,https://www.airlines-manager.com/aircraft/show/105308268,20:45,2:59,338,"$430,736.00","$378,260.00","$1,119.11","$60,683.42"
MIA - JNB,58394056144,M-84A-4 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/58394056144,https://www.airlines-manager.com/aircraft/show/93686966,0:00,6:44,1124,"$6,037,007.00","$5,603,375.00","$4,985.21","$832,184.41"
MIA - JNB,58425449982,M-84A-7 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/58425449982,https://www.airlines-manager.com/aircraft/show/93776641,13:00,19:44,1124,"$6,037,007.00","$5,603,375.00","$4,985.21","$832,184.41"
MIA - LAS,58394056808,M-LAS-SEA-5,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/58394056808,https://www.airlines-manager.com/aircraft/show/105093929,1:30,11:59,338,"$720,041.00","$652,865.00","$1,931.55","$62,276.47"
MIA - LAS,58418603277,M-LAS-SEA-1,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/58418603277,https://www.airlines-manager.com/aircraft/show/105093925,10:00,20:29,338,"$720,041.00","$652,865.00","$1,931.55","$62,276.47"
MIA - LAS,58425449804,M-LAS-SEA-6 B,A319-100,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/58425449804,https://www.airlines-manager.com/aircraft/show/113251304,12:00,22:29,198,"$499,043.00","$443,039.00","$2,237.57","$42,261.27"
MIA - LAS,58425449805,M-LAS-SEA-2,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/58425449805,https://www.airlines-manager.com/aircraft/show/105093926,13:00,23:29,338,"720,041$","652,865$","$1,931.55","$62,276.47"
MIA - LAS,58431664227,M-LAS-SEA-3,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/58431664227,https://www.airlines-manager.com/aircraft/show/105093927,15:00,1:29,338,"$720,041.00","$652,865.00","$1,931.55","$62,276.47"
MIA - LAS,58446475098,M-LAS-SEA-4,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/58446475098,https://www.airlines-manager.com/aircraft/show/105093928,22:30,8:59,338,"$720,041.00","$652,865.00","$1,931.55","$62,276.47"
MIA - LAX,58394056108,M-LAX-DEN-1,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/58394056108,https://www.airlines-manager.com/aircraft/show/91126649,0:00,10:59,400,"921,726$","828,254$","$2,070.64","$75,410.08"
MIA - LAX,58394056109,M-LAX-DEN-2,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/58394056109,https://www.airlines-manager.com/aircraft/show/91126650,2:00,12:59,400,"$921,726.00","$828,254.00","$2,070.64","$75,410.08"
MIA - LAX,58418603288,M-LAX-DEN-3,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/58418603288,https://www.airlines-manager.com/aircraft/show/91126651,10:00,20:59,400,"$921,726.00","$828,254.00","$2,070.64","$75,410.08"
MIA - LAX,58421791586,M-LAX-DEN-5 E,A319-100,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/58421791586,https://www.airlines-manager.com/aircraft/show/115181776,11:00,22:14,216,"$539,517.00","$478,154.00","$2,213.68","$42,565.64"
MIA - LAX,58435221188,M-LAX-DEN-4,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/58435221188,https://www.airlines-manager.com/aircraft/show/91126652,16:30,3:29,400,"921,726$","828,254$","$2,070.64","$75,410.08"
MIA - LEX,58405117980,M-CID-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/58405117980,https://www.airlines-manager.com/aircraft/show/116789653,3:00,8:29,310,"349,957$","319,272$","$1,029.91","$58,225.90"
MIA - LEX,58418603348,M-CID-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/58418603348,https://www.airlines-manager.com/aircraft/show/116789650,10:00,15:29,310,"349,957$","319,272$","$1,029.91","$58,225.90"
MIA - LEX,58431664287,M-CID-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/58431664287,https://www.airlines-manager.com/aircraft/show/116789651,15:00,20:29,310,"349,957$","319,272$","$1,029.91","$58,225.90"
MIA - LEX,58441017334,M-CID-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/58441017334,https://www.airlines-manager.com/aircraft/show/116789652,19:45,1:14,307,"$347,969.00","$317,357.00","$1,033.74","$57,876.66"
MIA - LIT,58394056911,M-SDF-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/58394056911,https://www.airlines-manager.com/aircraft/show/96692674,2:15,7:59,310,"$361,995.00","$329,608.00","$1,063.25","$57,489.77"
MIA - LIT,58405118168,M-SDF-PWM-5,ERJ-175,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/58405118168,https://www.airlines-manager.com/aircraft/show/105601657,4:15,9:59,112,"$171,636.00","$150,561.00","$1,344.29","$26,260.64"
MIA - LIT,58415054069,M-SDF-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/58415054069,https://www.airlines-manager.com/aircraft/show/94886625,8:15,13:59,310,"$361,995.00","$329,608.00","$1,063.25","$57,489.77"
MIA - LIT,58431664274,M-SDF-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/58431664274,https://www.airlines-manager.com/aircraft/show/94886629,15:00,20:44,310,"$361,995.00","$329,608.00","$1,063.25","$57,489.77"
MIA - LIT,58443550926,M-SDF-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/58443550926,https://www.airlines-manager.com/aircraft/show/94886626,21:30,3:14,310,"$361,995.00","$329,608.00","$1,063.25","$57,489.77"
MIA - LOS,58411831160,M-84A-5 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/58411831160,https://www.airlines-manager.com/aircraft/show/93704215,6:45,4:59,1124,"$4,277,261.00","$3,977,814.00","$3,538.98","$178,912.17"
MIA - LOS,58441017337,M-84A-1 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/58441017337,https://www.airlines-manager.com/aircraft/show/93686969,19:45,17:59,1116,"$4,224,517.00","$3,927,164.00","$3,518.96","$176,634.06"
MIA - MAF,58394056704,M-MAF-ROC-1,A321-200,https://www.airlines-manager.com/network/showline/50834915,https://www.airlines-manager.com/network/showflight/58394056704,https://www.airlines-manager.com/aircraft/show/120933307,1:00,8:29,310,"$470,887.00","$431,493.00","$1,391.91","$57,660.53"
MIA - MAF,58418603372,M-MAF-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50834915,https://www.airlines-manager.com/network/showflight/58418603372,https://www.airlines-manager.com/aircraft/show/92137503,10:00,17:29,112,"$222,557.00","$196,495.00","$1,754.42","$26,257.68"
MIA - MAF,58425449799,M-MAF-ROC-4,A321-200,https://www.airlines-manager.com/network/showline/50834915,https://www.airlines-manager.com/network/showflight/58425449799,https://www.airlines-manager.com/aircraft/show/120933310,12:00,19:29,310,"$470,887.00","$431,493.00","$1,391.91","$57,660.53"
MIA - MAF,58431664442,M-MAF-ROC-3,A321-200,https://www.airlines-manager.com/network/showline/50834915,https://www.airlines-manager.com/network/showflight/58431664442,https://www.airlines-manager.com/aircraft/show/120933309,16:15,23:44,310,"$470,887.00","$431,493.00","$1,391.91","$57,660.53"
MIA - MAF,58438157211,M-MAF-ROC-2,A321-200,https://www.airlines-manager.com/network/showline/50834915,https://www.airlines-manager.com/network/showflight/58438157211,https://www.airlines-manager.com/aircraft/show/120933308,18:15,1:44,310,"$470,887.00","$431,493.00","$1,391.91","$57,660.53"
MIA - MBJ,58394056589,M-PUJ-BDA-4 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/58394056589,https://www.airlines-manager.com/aircraft/show/104034460,0:45,4:59,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MBJ,58408651830,M-PUJ-BDA-5 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/58408651830,https://www.airlines-manager.com/aircraft/show/104034461,5:00,9:14,228,"193,225$","171,899$",$753.94,"$40,606.06"
MIA - MBJ,58418603361,M-PUJ-BDA-3 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/58418603361,https://www.airlines-manager.com/aircraft/show/104034459,10:00,14:14,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MBJ,58425449858,M-PUJ-BDA-1 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/58425449858,https://www.airlines-manager.com/aircraft/show/104034457,12:45,16:59,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MBJ,58435221281,M-PUJ-BDA-2 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/58435221281,https://www.airlines-manager.com/aircraft/show/104034458,17:00,21:14,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MBJ,58446475194,M-PUJ-BDA-6 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/58446475194,https://www.airlines-manager.com/aircraft/show/99326789,23:00,3:14,228,"$193,225.00","$171,899.00",$753.94,"$40,606.06"
MIA - MCI,58394056486,M-ELP-MCI-3,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/58394056486,https://www.airlines-manager.com/aircraft/show/91806232,0:45,7:44,320,"$448,685.00","$403,102.00","$1,259.69","$57,723.44"
MIA - MCI,58394056487,M-ELP-MCI-4,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/58394056487,https://www.airlines-manager.com/aircraft/show/91806231,1:30,8:29,320,"$448,685.00","$403,102.00","$1,259.69","$57,723.44"
MIA - MCI,58418603295,M-ELP-MCI-2,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/58418603295,https://www.airlines-manager.com/aircraft/show/91806235,10:00,16:59,320,"$448,685.00","$403,102.00","$1,259.69","$57,723.44"
MIA - MCI,58438157230,M-ELP-MCI-1,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/58438157230,https://www.airlines-manager.com/aircraft/show/91806234,18:30,1:29,320,"448,685$","403,102$","$1,259.69","$57,723.44"
MIA - MCI,58438157231,M-ELP-MCI-5 B,A319-100,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/58438157231,https://www.airlines-manager.com/aircraft/show/105093924,19:00,1:59,198,"$338,938.00","$306,546.00","$1,548.21","$43,896.80"
MIA - MCO,58394056349,M-BDL-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/58394056349,https://www.airlines-manager.com/aircraft/show/107763565,0:15,2:59,320,"$122,517.00","$85,295.00",$266.55,"$31,205.49"
MIA - MCO,58405118127,M-BDL-SAT-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/58405118127,https://www.airlines-manager.com/aircraft/show/107467213,4:00,6:44,112,"$55,044.00","$35,872.00",$320.29,"$13,123.90"
MIA - MCO,58411831125,M-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/58411831125,https://www.airlines-manager.com/aircraft/show/103534663,6:00,8:44,112,"$55,044.00","$35,872.00",$320.29,"$13,123.90"
MIA - MCO,58418603247,M-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/58418603247,https://www.airlines-manager.com/aircraft/show/103534663,9:15,11:59,112,"55,044$","35,872$",$320.29,"$13,123.90"
MIA - MCO,58418603248,M-BDL-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/58418603248,https://www.airlines-manager.com/aircraft/show/107763566,10:00,12:44,320,"$122,517.00","$85,295.00",$266.55,"$31,205.49"
MIA - MCO,58421791515,M-BDL-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/58421791515,https://www.airlines-manager.com/aircraft/show/107763561,11:00,13:44,320,"122,517$","85,295$",$266.55,"$31,205.49"
MIA - MCO,58435221347,M-BDL-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/58435221347,https://www.airlines-manager.com/aircraft/show/107763562,17:45,20:29,320,"122,517$","85,295$",$266.55,"$31,205.49"
MIA - MEM,58394056148,M-MKE-CMH-5 B,A319-100,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/58394056148,https://www.airlines-manager.com/aircraft/show/110582842,0:00,5:29,198,"$263,114.00","$235,345.00","$1,188.61","$42,920.06"
MIA - MEM,58405117960,M-MKE-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/58405117960,https://www.airlines-manager.com/aircraft/show/88239556,3:00,8:29,320,"$346,619.00","$307,030.00",$959.47,"$55,993.31"
MIA - MEM,58415054016,M-MKE-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/58415054016,https://www.airlines-manager.com/aircraft/show/88494374,7:45,13:14,320,"$346,619.00","$307,030.00",$959.47,"$55,993.31"
MIA - MEM,58428583311,M-MKE-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/58428583311,https://www.airlines-manager.com/aircraft/show/88494378,14:00,19:29,320,"$346,619.00","$307,030.00",$959.47,"$55,993.31"
MIA - MEM,58441017355,M-MKE-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/58441017355,https://www.airlines-manager.com/aircraft/show/91806233,20:00,1:29,320,"$346,619.00","$307,030.00",$959.47,"$55,993.31"
MIA - MFR,58394056826,M-FCA-MFR-2,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/58394056826,https://www.airlines-manager.com/aircraft/show/119652478,1:30,13:59,320,"$759,604.00","$696,142.00","$2,175.44","$55,765.71"
MIA - MFR,58425449775,M-FCA-MFR-3,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/58425449775,https://www.airlines-manager.com/aircraft/show/119652477,12:00,0:29,320,"$759,604.00","$696,142.00","$2,175.44","$55,765.71"
MIA - MFR,58428583337,M-FCA-MFR-4,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/58428583337,https://www.airlines-manager.com/aircraft/show/119652476,14:00,2:29,320,"$759,604.00","$696,142.00","$2,175.44","$55,765.71"
MIA - MFR,58446475233,M-FCA-MFR-1,737-900ER,https://www.airlines-manager.com/network/showline/50424903,https://www.airlines-manager.com/network/showflight/58446475233,https://www.airlines-manager.com/aircraft/show/119652479,23:30,11:59,320,"$759,604.00","$696,142.00","$2,175.44","$55,765.71"
MIA - MHT,58394056797,M-MHT-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/58394056797,https://www.airlines-manager.com/aircraft/show/115493371,1:15,8:14,310,"$454,152.00","$415,897.00","$1,341.60","$59,555.66"
MIA - MHT,58405118058,M-MHT-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/58405118058,https://www.airlines-manager.com/aircraft/show/115493372,3:30,10:29,310,"$454,152.00","$415,897.00","$1,341.60","$59,555.66"
MIA - MHT,58421791591,M-MHT-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/58421791591,https://www.airlines-manager.com/aircraft/show/114912307,11:00,17:59,112,"$214,353.00","$189,156.00","$1,688.89","$27,086.78"
MIA - MHT,58428583372,M-MHT-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/58428583372,https://www.airlines-manager.com/aircraft/show/115493373,14:00,20:59,310,"$454,152.00","$415,897.00","$1,341.60","$59,555.66"
MIA - MHT,58438157350,M-MHT-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/58438157350,https://www.airlines-manager.com/aircraft/show/115493370,19:00,1:59,310,"$454,152.00","$415,897.00","$1,341.60","$59,555.66"
MIA - MKE,58394056325,M-MKE-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/58394056325,https://www.airlines-manager.com/aircraft/show/88494378,0:15,7:14,320,"448,362$","404,235$","$1,263.23","$57,885.68"
MIA - MKE,58411831128,M-MKE-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/58411831128,https://www.airlines-manager.com/aircraft/show/91806233,6:15,13:14,320,"448,362$","404,235$","$1,263.23","$57,885.68"
MIA - MKE,58421791585,M-MKE-CMH-5 B,A319-100,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/58421791585,https://www.airlines-manager.com/aircraft/show/110582842,11:00,17:59,198,"$338,895.00","$307,460.00","$1,552.83","$44,027.68"
MIA - MKE,58428583309,M-MKE-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/58428583309,https://www.airlines-manager.com/aircraft/show/88239556,14:00,20:59,320,"$448,362.00","$404,235.00","$1,263.23","$57,885.68"
MIA - MKE,58438157266,M-MKE-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/58438157266,https://www.airlines-manager.com/aircraft/show/88494374,18:45,1:44,320,"$448,362.00","$404,235.00","$1,263.23","$57,885.68"
MIA - MSN,58394056855,M-RAP-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/58394056855,https://www.airlines-manager.com/aircraft/show/116789625,1:45,8:59,320,"$451,863.00","$409,290.00","$1,279.03","$56,583.87"
MIA - MSN,58415054029,M-RAP-GRR-5,ERJ-175,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/58415054029,https://www.airlines-manager.com/aircraft/show/116042630,7:45,14:59,112,"$214,048.00","$188,966.00","$1,687.20","$26,124.33"
MIA - MSN,58418603312,M-RAP-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/58418603312,https://www.airlines-manager.com/aircraft/show/116789623,10:00,17:14,320,"$451,863.00","$409,290.00","$1,279.03","$56,583.87"
MIA - MSN,58435221217,M-RAP-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/58435221217,https://www.airlines-manager.com/aircraft/show/116789624,16:45,23:59,320,"$451,863.00","$409,290.00","$1,279.03","$56,583.87"
MIA - MSN,58438157287,M-RAP-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/58438157287,https://www.airlines-manager.com/aircraft/show/116789622,18:45,1:59,320,"$451,863.00","$409,290.00","$1,279.03","$56,583.87"
MIA - MSO,58415054018,M-FAT-MSO-2,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/58415054018,https://www.airlines-manager.com/aircraft/show/113101231,7:45,18:59,320,"$700,402.00","$641,423.00","$2,004.45","$57,099.97"
MIA - MSO,58421791521,M-FAT-MSO-3,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/58421791521,https://www.airlines-manager.com/aircraft/show/113101234,11:00,22:14,320,"$700,402.00","$641,423.00","$2,004.45","$57,099.97"
MIA - MSO,58441017358,M-FAT-MSO-4,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/58441017358,https://www.airlines-manager.com/aircraft/show/113101232,20:00,7:14,320,"$700,402.00","$641,423.00","$2,004.45","$57,099.97"
MIA - MSO,58446475114,M-FAT-MSO-1,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/58446475114,https://www.airlines-manager.com/aircraft/show/113101229,22:30,9:44,320,"$700,402.00","$641,423.00","$2,004.45","$57,099.97"
MIA - MSP,58394056882,M-JFK-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/58394056882,https://www.airlines-manager.com/aircraft/show/105308267,2:00,9:59,338,"$544,122.00","$495,440.00","$1,465.80","$62,059.29"
MIA - MSP,58405117950,M-JFK-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/58405117950,https://www.airlines-manager.com/aircraft/show/105308268,3:00,10:59,338,"$544,122.00","$495,440.00","$1,465.80","$62,059.29"
MIA - MSP,58418603279,M-JFK-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/58418603279,https://www.airlines-manager.com/aircraft/show/105308266,10:00,17:59,338,"$544,122.00","$495,440.00","$1,465.80","$62,059.29"
MIA - MSP,58425449988,M-JFK-PHX-6,ERJ-175,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/58425449988,https://www.airlines-manager.com/aircraft/show/82683137,13:00,20:59,112,"$236,852.00","$203,894.00","$1,820.48","$25,539.96"
MIA - MSP,58438157189,M-JFK-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/58438157189,https://www.airlines-manager.com/aircraft/show/105308265,18:15,2:14,338,"544,122$","495,440$","$1,465.80","$62,059.29"
MIA - MSP,58443550938,M-JFK-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/58443550938,https://www.airlines-manager.com/aircraft/show/105308264,21:45,5:44,338,"$544,122.00","$495,440.00","$1,465.80","$62,059.29"
MIA - MSY,58394056818,M-MKE-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/58394056818,https://www.airlines-manager.com/aircraft/show/91806233,1:30,6:14,320,"$301,171.00","$266,048.00",$831.40,"$56,207.32"
MIA - MSY,58408651865,M-MKE-CMH-5 B,A319-100,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/58408651865,https://www.airlines-manager.com/aircraft/show/110582842,5:30,10:14,198,"229,505$","205,012$","$1,035.41","$43,312.39"
MIA - MSY,58415054086,M-MKE-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/58415054086,https://www.airlines-manager.com/aircraft/show/88239556,8:30,13:14,320,"$301,171.00","$266,048.00",$831.40,"$56,207.32"
MIA - MSY,58428583310,M-MKE-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/58428583310,https://www.airlines-manager.com/aircraft/show/88494374,14:00,18:44,320,"$301,171.00","$266,048.00",$831.40,"$56,207.32"
MIA - MSY,58438157387,M-MKE-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/58438157387,https://www.airlines-manager.com/aircraft/show/88494378,19:30,0:14,320,"$301,171.00","$266,048.00",$831.40,"$56,207.32"
MIA - MTJ,58394056765,M-RDM-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50834908,https://www.airlines-manager.com/network/showflight/58394056765,https://www.airlines-manager.com/aircraft/show/88725597,1:15,10:29,310,"$579,705.00","$533,668.00","$1,721.51","$57,797.98"
MIA - MTJ,58418603324,M-RDM-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50834908,https://www.airlines-manager.com/network/showflight/58418603324,https://www.airlines-manager.com/aircraft/show/88725598,10:00,19:14,310,"$579,705.00","$533,668.00","$1,721.51","$57,797.98"
MIA - MTJ,58425449945,M-RDM-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50834908,https://www.airlines-manager.com/network/showflight/58425449945,https://www.airlines-manager.com/aircraft/show/88725599,13:00,22:14,310,"$579,705.00","$533,668.00","$1,721.51","$57,797.98"
MIA - MTJ,58443551019,M-RDM-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50834908,https://www.airlines-manager.com/network/showflight/58443551019,https://www.airlines-manager.com/aircraft/show/106766698,22:15,7:29,310,"579,705$","533,668$","$1,721.51","$57,797.98"
MIA - MYR,58415054024,M-MAF-ROC-4,A321-200,https://www.airlines-manager.com/network/showline/50834920,https://www.airlines-manager.com/network/showflight/58415054024,https://www.airlines-manager.com/aircraft/show/120933310,7:45,11:59,310,"$253,255.00","$226,311.00",$730.04,"$53,459.29"
MIA - MYR,58425449798,M-MAF-ROC-3,A321-200,https://www.airlines-manager.com/network/showline/50834920,https://www.airlines-manager.com/network/showflight/58425449798,https://www.airlines-manager.com/aircraft/show/120933309,12:00,16:14,310,"$253,255.00","$226,311.00",$730.04,"$53,459.29"
MIA - MYR,58428583379,M-MAF-ROC-2,A321-200,https://www.airlines-manager.com/network/showline/50834920,https://www.airlines-manager.com/network/showflight/58428583379,https://www.airlines-manager.com/aircraft/show/120933308,14:00,18:14,310,"$253,255.00","$226,311.00",$730.04,"$53,459.29"
MIA - MYR,58441017503,M-MAF-ROC-1,A321-200,https://www.airlines-manager.com/network/showline/50834920,https://www.airlines-manager.com/network/showflight/58441017503,https://www.airlines-manager.com/aircraft/show/120933307,20:45,0:59,310,"$253,255.00","$226,311.00",$730.04,"$53,459.29"
MIA - NAS,58394056918,M-PUJ-BDA-5 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/58394056918,https://www.airlines-manager.com/aircraft/show/104034461,2:15,4:59,228,"$79,351.00","$61,380.00",$269.21,"$22,456.10"
MIA - NAS,58415054010,M-PUJ-BDA-6 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/58415054010,https://www.airlines-manager.com/aircraft/show/99326789,7:30,10:14,228,"$79,351.00","$61,380.00",$269.21,"$22,456.10"
MIA - NAS,58418603359,M-PUJ-BDA-1 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/58418603359,https://www.airlines-manager.com/aircraft/show/104034457,10:00,12:44,228,"$79,351.00","$61,380.00",$269.21,"$22,456.10"
MIA - NAS,58428583409,M-PUJ-BDA-2 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/58428583409,https://www.airlines-manager.com/aircraft/show/104034458,14:15,16:59,228,"$79,351.00","$61,380.00",$269.21,"$22,456.10"
MIA - NAS,58438157250,M-PUJ-BDA-3 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/58438157250,https://www.airlines-manager.com/aircraft/show/104034459,18:30,21:14,228,"$79,351.00","$61,380.00",$269.21,"$22,456.10"
MIA - NAS,58443550990,M-PUJ-BDA-4 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/58443550990,https://www.airlines-manager.com/aircraft/show/104034460,22:00,0:44,228,"79,351$","61,380$",$269.21,"$22,456.10"
MIA - OAK,58394056633,M-OAK-SMF-5,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/58394056633,https://www.airlines-manager.com/aircraft/show/91198617,1:00,12:59,320,"741,020$","675,128$","$2,109.78","$56,338.92"
MIA - OAK,58421791501,M-OAK-SMF-1,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/58421791501,https://www.airlines-manager.com/aircraft/show/91198615,11:00,22:59,320,"$741,020.00","$675,128.00","$2,109.78","$56,338.92"
MIA - OAK,58425449900,M-OAK-SMF-2,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/58425449900,https://www.airlines-manager.com/aircraft/show/91198619,13:00,0:59,320,"741,020$","675,128$","$2,109.78","$56,338.92"
MIA - OAK,58431664252,M-OAK-SMF-3,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/58431664252,https://www.airlines-manager.com/aircraft/show/91198616,15:00,2:59,320,"$741,020.00","$675,128.00","$2,109.78","$56,338.92"
MIA - OAK,58446475179,M-OAK-SMF-4,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/58446475179,https://www.airlines-manager.com/aircraft/show/91198618,23:00,10:59,320,"741,020$","675,128$","$2,109.78","$56,338.92"
MIA - OKC,58394056868,M-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/58394056868,https://www.airlines-manager.com/aircraft/show/110883112,1:45,8:29,310,"$432,205.00","$394,574.00","$1,272.82","$58,600.10"
MIA - OKC,58405118121,M-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/58405118121,https://www.airlines-manager.com/aircraft/show/110883111,4:00,10:44,310,"432,205$","394,574$","$1,272.82","$58,600.10"
MIA - OKC,58418603374,M-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/58418603374,https://www.airlines-manager.com/aircraft/show/104353572,10:00,16:44,112,"$203,116.00","$178,405.00","$1,592.90","$26,495.79"
MIA - OKC,58425449973,M-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/58425449973,https://www.airlines-manager.com/aircraft/show/110883110,13:00,19:44,310,"$432,205.00","$394,574.00","$1,272.82","$58,600.10"
MIA - OKC,58428583439,M-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/58428583439,https://www.airlines-manager.com/aircraft/show/110883113,14:45,21:29,310,"$432,205.00","$394,574.00","$1,272.82","$58,600.10"
MIA - OMA,58405117887,M-BOI-BNA-1,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/58405117887,https://www.airlines-manager.com/aircraft/show/104133006,2:30,9:59,320,"$479,555.00","$434,477.00","$1,357.74","$58,059.29"
MIA - OMA,58411831139,M-BOI-BNA-4,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/58411831139,https://www.airlines-manager.com/aircraft/show/103775657,6:30,13:59,320,"$479,555.00","$434,477.00","$1,357.74","$58,059.29"
MIA - OMA,58418603307,M-BOI-BNA-3,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/58418603307,https://www.airlines-manager.com/aircraft/show/104020880,10:00,17:29,320,"$479,555.00","$434,477.00","$1,357.74","$58,059.29"
MIA - OMA,58431664327,M-BOI-BNA-2,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/58431664327,https://www.airlines-manager.com/aircraft/show/104022609,15:15,22:44,320,"$479,555.00","$434,477.00","$1,357.74","$58,059.29"
MIA - OMA,58435221315,M-BOI-BNA-5,ERJ-175,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/58435221315,https://www.airlines-manager.com/aircraft/show/103534663,17:15,0:44,112,"$226,251.00","$199,652.00","$1,782.61","$26,679.55"
MIA - ONT,58394056425,M-RNO-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/58394056425,https://www.airlines-manager.com/aircraft/show/90489722,0:30,11:29,320,"694,458$","632,850$","$1,977.66","$57,619.12"
MIA - ONT,58405117883,M-RNO-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/58405117883,https://www.airlines-manager.com/aircraft/show/86238756,2:30,13:29,320,"$694,458.00","$632,850.00","$1,977.66","$57,619.12"
MIA - ONT,58421791500,M-RNO-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/58421791500,https://www.airlines-manager.com/aircraft/show/90489723,11:00,21:59,320,"$694,458.00","$632,850.00","$1,977.66","$57,619.12"
MIA - ONT,58428583382,M-RNO-ONT-5 B,A319-100,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/58428583382,https://www.airlines-manager.com/aircraft/show/105223010,14:00,0:59,198,"$521,256.00","$476,516.00","$2,406.65","$43,385.37"
MIA - ONT,58446475106,M-RNO-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/58446475106,https://www.airlines-manager.com/aircraft/show/86238755,22:30,9:29,320,"$694,458.00","$632,850.00","$1,977.66","$57,619.12"
MIA - ORD,58405118017,M-ORD-DFW-1,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/58405118017,https://www.airlines-manager.com/aircraft/show/91600935,3:15,9:59,310,"$425,664.00","$365,859.00","$1,180.19","$54,335.50"
MIA - ORD,58405118018,M-ORD-DFW-4,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/58405118018,https://www.airlines-manager.com/aircraft/show/91600938,4:15,10:59,310,"$425,664.00","$365,859.00","$1,180.19","$54,335.50"
MIA - ORD,58418603229,M-ORD-DFW-6,ERJ-175,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/58418603229,https://www.airlines-manager.com/aircraft/show/82543123,9:00,15:44,112,"$199,854.00","$161,877.00","$1,445.33","$24,041.14"
MIA - ORD,58421791547,M-ORD-DFW-5,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/58421791547,https://www.airlines-manager.com/aircraft/show/91600937,11:00,17:44,310,"$425,664.00","$365,859.00","$1,180.19","$54,335.50"
MIA - ORD,58428583438,M-ORD-DFW-3,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/58428583438,https://www.airlines-manager.com/aircraft/show/91600939,14:45,21:29,310,"$425,664.00","$365,859.00","$1,180.19","$54,335.50"
MIA - ORD,58431664350,M-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/58431664350,https://www.airlines-manager.com/aircraft/show/106339154,15:30,22:14,198,"$320,961.00","$273,065.00","$1,379.12","$40,554.21"
MIA - ORD,58441017499,M-ORD-DFW-2,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/58441017499,https://www.airlines-manager.com/aircraft/show/91600936,20:45,3:29,310,"$425,664.00","$365,859.00","$1,180.19","$54,335.50"
MIA - ORF,58394056416,M-MHT-CAK-5,ERJ-175,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/58394056416,https://www.airlines-manager.com/aircraft/show/114912307,0:15,5:29,112,"$157,906.00","$137,933.00","$1,231.54","$26,356.62"
MIA - ORF,58405118022,M-MHT-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/58405118022,https://www.airlines-manager.com/aircraft/show/115493373,3:15,8:29,310,"$332,506.00","$301,556.00",$972.76,"$57,622.17"
MIA - ORF,58415054075,M-MHT-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/58415054075,https://www.airlines-manager.com/aircraft/show/115493370,8:15,13:29,310,"$332,506.00","$301,556.00",$972.76,"$57,622.17"
MIA - ORF,58431664286,M-MHT-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/58431664286,https://www.airlines-manager.com/aircraft/show/115493371,15:00,20:14,310,"$332,506.00","$301,556.00",$972.76,"$57,622.17"
MIA - ORF,58435221306,M-MHT-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/58435221306,https://www.airlines-manager.com/aircraft/show/115493372,17:15,22:29,310,"$332,506.00","$301,556.00",$972.76,"$57,622.17"
MIA - PDX,58418603290,M-PDX-DTW-1,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/58418603290,https://www.airlines-manager.com/aircraft/show/89943715,10:00,22:29,320,"$774,889.00","$704,572.00","$2,201.79","$56,441.01"
MIA - PDX,58425449897,M-PDX-DTW-3,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/58425449897,https://www.airlines-manager.com/aircraft/show/89943713,13:00,1:29,320,"$774,889.00","$704,572.00","$2,201.79","$56,441.01"
MIA - PDX,58428583313,M-PDX-DTW-4,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/58428583313,https://www.airlines-manager.com/aircraft/show/89943712,14:00,2:29,320,"$774,889.00","$704,572.00","$2,201.79","$56,441.01"
MIA - PDX,58438157388,M-PDX-DTW-2,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/58438157388,https://www.airlines-manager.com/aircraft/show/89943714,19:30,7:59,320,"$774,889.00","$704,572.00","$2,201.79","$56,441.01"
MIA - PDX,58446475228,M-PDX-DTW-5,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/58446475228,https://www.airlines-manager.com/aircraft/show/89943711,23:30,11:59,320,"$774,889.00","$704,572.00","$2,201.79","$56,441.01"
MIA - PHL,58405118112,M-ORD-DFW-3,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/58405118112,https://www.airlines-manager.com/aircraft/show/91600939,4:00,9:59,310,"$381,305.00","$339,530.00","$1,095.26","$56,745.96"
MIA - PHL,58408651822,M-ORD-DFW-5,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/58408651822,https://www.airlines-manager.com/aircraft/show/91600937,5:00,10:59,310,"$381,305.00","$339,530.00","$1,095.26","$56,745.96"
MIA - PHL,58418603330,M-ORD-DFW-2,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/58418603330,https://www.airlines-manager.com/aircraft/show/91600936,10:00,15:59,310,"$381,305.00","$339,530.00","$1,095.26","$56,745.96"
MIA - PHL,58435221198,M-ORD-DFW-1,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/58435221198,https://www.airlines-manager.com/aircraft/show/91600935,16:30,22:29,310,"$381,305.00","$339,530.00","$1,095.26","$56,745.96"
MIA - PHL,58435221199,M-ORD-DFW-4,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/58435221199,https://www.airlines-manager.com/aircraft/show/91600938,17:30,23:29,310,"$381,305.00","$339,530.00","$1,095.26","$56,745.96"
MIA - PHL,58443551034,M-ORD-DFW-6,ERJ-175,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/58443551034,https://www.airlines-manager.com/aircraft/show/82543123,22:15,4:14,112,"$180,118.00","$153,280.00","$1,368.57","$25,617.83"
MIA - PHX,58394056164,M-JFK-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/58394056164,https://www.airlines-manager.com/aircraft/show/105308266,0:15,9:59,338,"$673,510.00","$614,805.00","$1,818.95","$63,164.90"
MIA - PHX,58394056165,M-JFK-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/58394056165,https://www.airlines-manager.com/aircraft/show/105308265,2:15,11:59,338,"$673,510.00","$614,805.00","$1,818.95","$63,164.90"
MIA - PHX,58421791461,M-JFK-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/58421791461,https://www.airlines-manager.com/aircraft/show/105308268,11:00,20:44,338,"$673,510.00","$614,805.00","$1,818.95","$63,164.90"
MIA - PHX,58425449739,M-JFK-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/58425449739,https://www.airlines-manager.com/aircraft/show/105308264,12:00,21:44,338,"$673,510.00","$614,805.00","$1,818.95","$63,164.90"
MIA - PHX,58431664431,M-JFK-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/58431664431,https://www.airlines-manager.com/aircraft/show/105308267,16:15,1:59,338,"$673,510.00","$614,805.00","$1,818.95","$63,164.90"
MIA - PHX,58441017570,M-JFK-PHX-6,ERJ-175,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/58441017570,https://www.airlines-manager.com/aircraft/show/82683137,21:00,6:44,112,"$291,110.00","$250,973.00","$2,240.83","$25,784.90"
MIA - PIT,58405118006,M-AUS-PIT-3,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/58405118006,https://www.airlines-manager.com/aircraft/show/99920624,3:15,9:14,320,"$382,895.00","$341,219.00","$1,066.31","$57,028.25"
MIA - PIT,58418603302,M-AUS-PIT-2,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/58418603302,https://www.airlines-manager.com/aircraft/show/99920625,10:00,15:59,320,"$382,895.00","$341,219.00","$1,066.31","$57,028.25"
MIA - PIT,58435221192,M-AUS-PIT-1,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/58435221192,https://www.airlines-manager.com/aircraft/show/99920626,16:30,22:29,320,"$382,895.00","$341,219.00","$1,066.31","$57,028.25"
MIA - PIT,58441017475,M-AUS-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/58441017475,https://www.airlines-manager.com/aircraft/show/82323689,20:30,2:29,112,"$180,854.00","$157,058.00","$1,402.30","$26,249.25"
MIA - PIT,58443550891,M-AUS-PIT-4,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/58443550891,https://www.airlines-manager.com/aircraft/show/99920623,21:15,3:14,320,"$382,895.00","$341,219.00","$1,066.31","$57,028.25"
MIA - PLS,58405118026,M-PUJ-BDA-6 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/58405118026,https://www.airlines-manager.com/aircraft/show/99326789,3:15,7:29,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - PLS,58408651829,M-PUJ-BDA-4 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/58408651829,https://www.airlines-manager.com/aircraft/show/104034460,5:00,9:14,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - PLS,58418603360,M-PUJ-BDA-2 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/58418603360,https://www.airlines-manager.com/aircraft/show/104034458,10:00,14:14,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - PLS,58428583410,M-PUJ-BDA-3 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/58428583410,https://www.airlines-manager.com/aircraft/show/104034459,14:15,18:29,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - PLS,58435221280,M-PUJ-BDA-1 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/58435221280,https://www.airlines-manager.com/aircraft/show/104034457,17:00,21:14,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - PLS,58443550991,M-PUJ-BDA-5 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/58443550991,https://www.airlines-manager.com/aircraft/show/104034461,22:00,2:14,228,"$206,254.00","$185,161.00",$812.11,"$43,738.82"
MIA - POS,58425449844,M-84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/58425449844,https://www.airlines-manager.com/aircraft/show/106676225,12:30,20:29,962,"$1,341,807.00","$1,224,700.00","$1,273.08","$153,407.10"
MIA - POS,58431664428,M-84B-6 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/58431664428,https://www.airlines-manager.com/aircraft/show/106676230,16:00,23:59,739,"$1,116,197.00","$1,011,327.00","$1,368.51","$126,679.79"
MIA - PSP,58394056887,M-PSP-BFF-5,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/58394056887,https://www.airlines-manager.com/aircraft/show/116789630,2:00,12:44,320,"$662,540.00","$604,842.00","$1,890.13","$56,351.74"
MIA - PSP,58418603316,M-PSP-BFF-4,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/58418603316,https://www.airlines-manager.com/aircraft/show/116789631,10:00,20:44,320,"$662,540.00","$604,842.00","$1,890.13","$56,351.74"
MIA - PSP,58428583333,M-PSP-BFF-1,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/58428583333,https://www.airlines-manager.com/aircraft/show/116789634,14:00,0:44,320,"$662,540.00","$604,842.00","$1,890.13","$56,351.74"
MIA - PSP,58428583334,M-PSP-BFF-3,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/58428583334,https://www.airlines-manager.com/aircraft/show/116789632,14:15,0:59,320,"$662,540.00","$604,842.00","$1,890.13","$56,351.74"
MIA - PSP,58446475180,M-PSP-BFF-2,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/58446475180,https://www.airlines-manager.com/aircraft/show/116789633,23:00,9:44,247,"$568,589.00","$515,270.00","$2,086.11","$48,006.52"
MIA - PUJ,58405118063,M-PUJ-BDA-2 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/58405118063,https://www.airlines-manager.com/aircraft/show/104034458,3:30,9:14,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PUJ,58418603363,M-PUJ-BDA-5 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/58418603363,https://www.airlines-manager.com/aircraft/show/104034461,10:00,15:44,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PUJ,58431664443,M-PUJ-BDA-4 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/58431664443,https://www.airlines-manager.com/aircraft/show/104034460,16:15,21:59,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PUJ,58435221312,M-PUJ-BDA-6 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/58435221312,https://www.airlines-manager.com/aircraft/show/99326789,17:15,22:59,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PUJ,58443550903,M-PUJ-BDA-1 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/58443550903,https://www.airlines-manager.com/aircraft/show/104034457,21:15,2:59,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PUJ,58443550904,M-PUJ-BDA-3 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/58443550904,https://www.airlines-manager.com/aircraft/show/104034459,22:00,3:44,228,"$278,349.00","$251,729.00","$1,104.07","$43,906.22"
MIA - PVD,58394056796,M-BUR-PVD-3,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/58394056796,https://www.airlines-manager.com/aircraft/show/108834805,1:15,7:59,310,"$427,684.00","$391,455.00","$1,262.76","$58,136.88"
MIA - PVD,58411831203,M-BUR-PVD-5 B,A319-100,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/58411831203,https://www.airlines-manager.com/aircraft/show/108834807,7:15,13:59,198,"$322,661.00","$293,626.00","$1,482.96","$43,607.82"
MIA - PVD,58421791562,M-BUR-PVD-2,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/58421791562,https://www.airlines-manager.com/aircraft/show/108834804,11:00,17:44,310,"$427,684.00","$391,455.00","$1,262.76","$58,136.88"
MIA - PVD,58435221272,M-BUR-PVD-4,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/58435221272,https://www.airlines-manager.com/aircraft/show/108834806,17:00,23:44,310,"$427,684.00","$391,455.00","$1,262.76","$58,136.88"
MIA - PVD,58443551021,M-BUR-PVD-1,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/58443551021,https://www.airlines-manager.com/aircraft/show/108834803,22:15,4:59,310,"$427,684.00","$391,455.00","$1,262.76","$58,136.88"
MIA - PWM,58415054002,M-SDF-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/58415054002,https://www.airlines-manager.com/aircraft/show/94886629,7:30,14:59,310,"$468,156.00","$430,232.00","$1,387.85","$57,492.03"
MIA - PWM,58428583347,M-SDF-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/58428583347,https://www.airlines-manager.com/aircraft/show/94886626,14:00,21:29,310,"$468,156.00","$430,232.00","$1,387.85","$57,492.03"
MIA - PWM,58438157299,M-SDF-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/58438157299,https://www.airlines-manager.com/aircraft/show/96692674,18:45,2:14,310,"$468,156.00","$430,232.00","$1,387.85","$57,492.03"
MIA - PWM,58441017538,M-SDF-PWM-5,ERJ-175,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/58441017538,https://www.airlines-manager.com/aircraft/show/105601657,20:45,4:14,112,"$220,894.00","$195,774.00","$1,747.98","$26,161.34"
MIA - PWM,58446475263,M-SDF-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/58446475263,https://www.airlines-manager.com/aircraft/show/94886625,23:45,7:14,310,"$468,156.00","$430,232.00","$1,387.85","$57,492.03"
MIA - RAP,58394056123,M-RAP-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/58394056123,https://www.airlines-manager.com/aircraft/show/116789624,0:00,8:59,320,"$563,858.00","$513,914.00","$1,605.98","$57,207.50"
MIA - RAP,58394056124,M-RAP-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/58394056124,https://www.airlines-manager.com/aircraft/show/116789622,2:00,10:59,320,"$563,858.00","$513,914.00","$1,605.98","$57,207.50"
MIA - RAP,58418603314,M-RAP-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/58418603314,https://www.airlines-manager.com/aircraft/show/116789625,10:00,18:59,320,"$563,858.00","$513,914.00","$1,605.98","$57,207.50"
MIA - RAP,58431664322,M-RAP-GRR-5,ERJ-175,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/58431664322,https://www.airlines-manager.com/aircraft/show/116042630,15:00,23:59,112,"$265,771.00","$235,577.00","$2,103.37","$26,223.78"
MIA - RAP,58435221297,M-RAP-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/58435221297,https://www.airlines-manager.com/aircraft/show/116789623,17:15,2:14,320,"$563,858.00","$513,914.00","$1,605.98","$57,207.50"
MIA - RDM,58418603345,M-RDM-MTJ-1,A321-200,https://www.airlines-manager.com/network/showline/50834907,https://www.airlines-manager.com/network/showflight/58418603345,https://www.airlines-manager.com/aircraft/show/106766698,10:00,22:14,310,"$750,430.00","$694,304.00","$2,239.69","$56,755.10"
MIA - RDM,58425449944,M-RDM-MTJ-2,A321-200,https://www.airlines-manager.com/network/showline/50834907,https://www.airlines-manager.com/network/showflight/58425449944,https://www.airlines-manager.com/aircraft/show/88725597,13:00,1:14,310,"$750,430.00","$694,304.00","$2,239.69","$56,755.10"
MIA - RDM,58438157369,M-RDM-MTJ-3,A321-200,https://www.airlines-manager.com/network/showline/50834907,https://www.airlines-manager.com/network/showflight/58438157369,https://www.airlines-manager.com/aircraft/show/88725598,19:15,7:29,310,"750,430$","694,304$","$2,239.69","$56,755.10"
MIA - RDM,58443551016,M-RDM-MTJ-4,A321-200,https://www.airlines-manager.com/network/showline/50834907,https://www.airlines-manager.com/network/showflight/58443551016,https://www.airlines-manager.com/aircraft/show/88725599,22:15,10:29,310,"750,430$","694,304$","$2,239.69","$56,755.10"
MIA - RDU,58408651761,M-AUS-PIT-1,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/58408651761,https://www.airlines-manager.com/aircraft/show/99920626,4:30,9:14,320,"310,630$","274,454$",$857.67,"$57,983.24"
MIA - RDU,58415054114,M-AUS-PIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/58415054114,https://www.airlines-manager.com/aircraft/show/82323689,8:30,13:14,112,"147,838$","127,705$","$1,140.22","$26,979.93"
MIA - RDU,58418603300,M-AUS-PIT-4,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/58418603300,https://www.airlines-manager.com/aircraft/show/99920623,10:00,14:44,320,"$310,630.00","$274,454.00",$857.67,"$57,983.24"
MIA - RDU,58431664392,M-AUS-PIT-3,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/58431664392,https://www.airlines-manager.com/aircraft/show/99920624,16:00,20:44,320,"$310,630.00","$274,454.00",$857.67,"$57,983.24"
MIA - RDU,58443550970,M-AUS-PIT-2,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/58443550970,https://www.airlines-manager.com/aircraft/show/99920625,22:00,2:44,320,"$310,630.00","$274,454.00",$857.67,"$57,983.24"
MIA - RIC,58415054100,M-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/58415054100,https://www.airlines-manager.com/aircraft/show/110883112,8:30,13:44,310,"$336,966.00","$305,684.00",$986.08,"$58,410.96"
MIA - RIC,58421791568,M-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/58421791568,https://www.airlines-manager.com/aircraft/show/110883111,11:00,16:14,310,"$336,966.00","$305,684.00",$986.08,"$58,410.96"
MIA - RIC,58435221231,M-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/58435221231,https://www.airlines-manager.com/aircraft/show/104353572,16:45,21:59,112,"$160,060.00","$139,846.00","$1,248.63","$26,722.17"
MIA - RIC,58441017330,M-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/58441017330,https://www.airlines-manager.com/aircraft/show/110883110,19:45,0:59,310,"$336,966.00","$305,684.00",$986.08,"$58,410.96"
MIA - RIC,58443550929,M-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/58443550929,https://www.airlines-manager.com/aircraft/show/110883113,21:30,2:44,310,"$336,966.00","$305,684.00",$986.08,"$58,410.96"
MIA - RNO,58394056707,M-RNO-ONT-5 B,A319-100,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/58394056707,https://www.airlines-manager.com/aircraft/show/105223010,1:00,12:44,198,"$546,103.00","$500,266.00","$2,526.60","$42,636.31"
MIA - RNO,58421791496,M-RNO-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/58421791496,https://www.airlines-manager.com/aircraft/show/86238755,11:00,22:29,320,"$725,284.00","$662,433.00","$2,070.10","$57,686.47"
MIA - RNO,58425449898,M-RNO-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/58425449898,https://www.airlines-manager.com/aircraft/show/90489722,13:00,0:29,320,"$725,284.00","$662,433.00","$2,070.10","$57,686.47"
MIA - RNO,58431664248,M-RNO-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/58431664248,https://www.airlines-manager.com/aircraft/show/86238756,15:00,2:29,320,"$725,284.00","$662,433.00","$2,070.10","$57,686.47"
MIA - RNO,58443550969,M-RNO-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/58443550969,https://www.airlines-manager.com/aircraft/show/90489723,22:00,9:29,320,"$725,284.00","$662,433.00","$2,070.10","$57,686.47"
MIA - ROC,58394056871,M-MAF-ROC-2,A321-200,https://www.airlines-manager.com/network/showline/50424914,https://www.airlines-manager.com/network/showflight/58394056871,https://www.airlines-manager.com/aircraft/show/120933308,1:45,8:29,310,"$427,406.00","$391,117.00","$1,261.67","$58,086.68"
MIA - ROC,58418603357,M-MAF-ROC-1,A321-200,https://www.airlines-manager.com/network/showline/50424914,https://www.airlines-manager.com/network/showflight/58418603357,https://www.airlines-manager.com/aircraft/show/120933307,10:00,16:44,310,"$427,406.00","$391,117.00","$1,261.67","$58,086.68"
MIA - ROC,58435221337,M-MAF-ROC-5,ERJ-175,https://www.airlines-manager.com/network/showline/50424914,https://www.airlines-manager.com/network/showflight/58435221337,https://www.airlines-manager.com/aircraft/show/92137503,17:30,0:14,112,"$201,000.00","$177,122.00","$1,581.45","$26,305.25"
MIA - ROC,58438157403,M-MAF-ROC-4,A321-200,https://www.airlines-manager.com/network/showline/50424914,https://www.airlines-manager.com/network/showflight/58438157403,https://www.airlines-manager.com/aircraft/show/120933310,19:30,2:14,310,"$427,406.00","$391,117.00","$1,261.67","$58,086.68"
MIA - ROC,58446475269,M-MAF-ROC-3,A321-200,https://www.airlines-manager.com/network/showline/50424914,https://www.airlines-manager.com/network/showflight/58446475269,https://www.airlines-manager.com/aircraft/show/120933309,23:45,6:29,310,"$427,406.00","$391,117.00","$1,261.67","$58,086.68"
MIA - RSW,58405118123,M-ANU-SXM-3 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/58405118123,https://www.airlines-manager.com/aircraft/show/110114297,4:00,6:29,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - RSW,58418603245,M-ANU-SXM-1 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/58418603245,https://www.airlines-manager.com/aircraft/show/110114295,9:15,11:44,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - RSW,58418603246,M-ANU-SXM-2 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/58418603246,https://www.airlines-manager.com/aircraft/show/110114296,10:15,12:44,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - RSW,58428583385,M-ANU-SXM-6 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/58428583385,https://www.airlines-manager.com/aircraft/show/110114300,14:00,16:29,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - RSW,58441017566,M-ANU-SXM-5 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/58441017566,https://www.airlines-manager.com/aircraft/show/110114299,21:00,23:29,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - RSW,58446475196,M-ANU-SXM-4 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/58446475196,https://www.airlines-manager.com/aircraft/show/110114298,23:00,1:29,228,"$65,948.00","$47,695.00",$209.19,"$19,206.04"
MIA - SAN,58394056159,M-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/58394056159,https://www.airlines-manager.com/aircraft/show/120519142,0:00,10:44,0,"$190,591.00","$116,070.00",$0.00,"$10,813.98"
MIA - SAN,58394056160,M-BWI-YYZ-2,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/58394056160,https://www.airlines-manager.com/aircraft/show/92153440,1:45,12:44,310,"$680,679.00","$623,880.00","$2,012.52","$56,802.43"
MIA - SAN,58418603332,M-BWI-YYZ-3,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/58418603332,https://www.airlines-manager.com/aircraft/show/92153441,10:00,20:59,310,"$680,679.00","$623,880.00","$2,012.52","$56,802.43"
MIA - SAN,58425449806,M-BWI-YYZ-6 B,A319-100,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/58425449806,https://www.airlines-manager.com/aircraft/show/120519717,12:00,22:59,198,"$511,028.00","$465,491.00","$2,350.96","$42,381.58"
MIA - SAN,58435221266,M-BWI-YYZ-4,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/58435221266,https://www.airlines-manager.com/aircraft/show/92153442,17:00,3:59,310,"$680,679.00","$623,880.00","$2,012.52","$56,802.43"
MIA - SAN,58438157342,M-BWI-YYZ-5,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/58438157342,https://www.airlines-manager.com/aircraft/show/92153439,19:00,5:59,310,"$680,679.00","$623,880.00","$2,012.52","$56,802.43"
MIA - SAN,58446475156,M-BWI-YYZ-1,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/58446475156,https://www.airlines-manager.com/aircraft/show/92153443,22:45,9:44,310,"$664,966.00","$611,888.00","$1,973.83","$55,710.59"
MIA - SAT,58405118007,M-BDL-SAT-3,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/58405118007,https://www.airlines-manager.com/aircraft/show/107763562,3:15,9:44,320,"$412,163.00","$370,879.00","$1,159.00","$57,204.99"
MIA - SAT,58421791517,M-BDL-SAT-2,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/58421791517,https://www.airlines-manager.com/aircraft/show/107763565,11:00,17:29,320,"$412,163.00","$370,879.00","$1,159.00","$57,204.99"
MIA - SAT,58428583442,M-BDL-SAT-5,ERJ-175,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/58428583442,https://www.airlines-manager.com/aircraft/show/107467213,14:45,21:14,112,"$194,327.00","$170,361.00","$1,521.08","$26,276.76"
MIA - SAT,58441017461,M-BDL-SAT-4,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/58441017461,https://www.airlines-manager.com/aircraft/show/107763561,20:30,2:59,320,"$412,163.00","$370,879.00","$1,159.00","$57,204.99"
MIA - SAT,58441017462,M-BDL-SAT-1,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/58441017462,https://www.airlines-manager.com/aircraft/show/107763566,20:45,3:14,320,"$412,163.00","$370,879.00","$1,159.00","$57,204.99"
MIA - SAV,58394056394,M-OKC-FSD-2,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/58394056394,https://www.airlines-manager.com/aircraft/show/110883111,0:15,3:59,310,"$215,345.00","$190,074.00",$613.14,"$50,912.68"
MIA - SAV,58411831126,M-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/58411831126,https://www.airlines-manager.com/aircraft/show/104353572,6:00,9:44,112,"$100,516.00","$84,583.00",$755.21,"$22,656.16"
MIA - SAV,58418603221,M-OKC-FSD-1,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/58418603221,https://www.airlines-manager.com/aircraft/show/110883110,9:00,12:44,310,"$215,345.00","$190,074.00",$613.14,"$50,912.68"
MIA - SAV,58421791569,M-OKC-FSD-4,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/58421791569,https://www.airlines-manager.com/aircraft/show/110883113,11:00,14:44,310,"$215,345.00","$190,074.00",$613.14,"$50,912.68"
MIA - SAV,58443550983,M-OKC-FSD-3,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/58443550983,https://www.airlines-manager.com/aircraft/show/110883112,22:00,1:44,275,"$201,026.00","$176,178.00",$640.65,"$47,190.54"
MIA - SDF,58394056585,M-SDF-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/58394056585,https://www.airlines-manager.com/aircraft/show/94886629,0:45,6:29,310,"$357,909.00","$323,543.00","$1,043.69","$56,431.92"
MIA - SDF,58415054070,M-SDF-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/58415054070,https://www.airlines-manager.com/aircraft/show/94886626,8:15,13:59,310,"$357,909.00","$323,543.00","$1,043.69","$56,431.92"
MIA - SDF,58425449952,M-SDF-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/58425449952,https://www.airlines-manager.com/aircraft/show/96692674,13:00,18:44,310,"$357,909.00","$323,543.00","$1,043.69","$56,431.92"
MIA - SDF,58431664318,M-SDF-PWM-5,ERJ-175,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/58431664318,https://www.airlines-manager.com/aircraft/show/105601657,15:00,20:44,112,"$169,578.00","$147,365.00","$1,315.76","$25,703.20"
MIA - SDF,58435221393,M-SDF-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/58435221393,https://www.airlines-manager.com/aircraft/show/94886625,18:00,23:44,310,"$357,909.00","$323,543.00","$1,043.69","$56,431.92"
MIA - SEA,58394056807,M-LAS-SEA-3,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/58394056807,https://www.airlines-manager.com/aircraft/show/105093927,1:30,13:59,338,"$834,881.00","$766,832.00","$2,268.73","$61,428.46"
MIA - SEA,58418603278,M-LAS-SEA-4,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/58418603278,https://www.airlines-manager.com/aircraft/show/105093928,10:00,22:29,338,"$834,881.00","$766,832.00","$2,268.73","$61,428.46"
MIA - SEA,58425449869,M-LAS-SEA-5,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/58425449869,https://www.airlines-manager.com/aircraft/show/105093929,13:00,1:29,338,"$834,881.00","$766,832.00","$2,268.73","$61,428.46"
MIA - SEA,58441017445,M-LAS-SEA-1,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/58441017445,https://www.airlines-manager.com/aircraft/show/105093925,20:30,8:59,338,"$834,881.00","$766,832.00","$2,268.73","$61,428.46"
MIA - SEA,58446475128,M-LAS-SEA-6 B,A319-100,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/58446475128,https://www.airlines-manager.com/aircraft/show/113251304,22:30,11:14,198,"578,175$","520,898$","$2,630.80","$40,908.22"
MIA - SEA,58446475129,M-LAS-SEA-2,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/58446475129,https://www.airlines-manager.com/aircraft/show/105093926,23:30,11:59,338,"$834,881.00","$766,832.00","$2,268.73","$61,428.46"
MIA - SJC,58394056853,M-SJC-YYC-5,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/58394056853,https://www.airlines-manager.com/aircraft/show/107763563,1:45,13:44,320,"$734,893.00","$668,726.00","$2,089.77","$55,804.67"
MIA - SJC,58425449762,M-SJC-YYC-1,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/58425449762,https://www.airlines-manager.com/aircraft/show/107763569,12:00,23:59,320,"$734,893.00","$668,726.00","$2,089.77","$55,804.67"
MIA - SJC,58428583325,M-SJC-YYC-2,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/58428583325,https://www.airlines-manager.com/aircraft/show/107763568,14:00,1:59,320,"$734,893.00","$668,726.00","$2,089.77","$55,804.67"
MIA - SJC,58431664396,M-SJC-YYC-3,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/58431664396,https://www.airlines-manager.com/aircraft/show/107763567,16:00,3:59,320,"734,893$","668,726$","$2,089.77","$55,804.67"
MIA - SJC,58446475256,M-SJC-YYC-4,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/58446475256,https://www.airlines-manager.com/aircraft/show/107763564,23:45,11:44,320,"734,893$","668,726$","$2,089.77","$55,804.67"
MIA - SJU,58405118029,M-SJU-BOS-6 B,A319-100,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/58405118029,https://www.airlines-manager.com/aircraft/show/110582841,3:15,9:29,198,"$287,737.00","$258,672.00","$1,306.42","$41,498.18"
MIA - SJU,58418603384,M-SJU-BOS-2,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/58418603384,https://www.airlines-manager.com/aircraft/show/91352062,10:15,16:29,310,"$381,512.00","$345,237.00","$1,113.67","$55,385.61"
MIA - SJU,58425449835,M-SJU-BOS-3,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/58425449835,https://www.airlines-manager.com/aircraft/show/91352061,12:15,18:29,310,"$381,512.00","$345,237.00","$1,113.67","$55,385.61"
MIA - SJU,58438157206,M-SJU-BOS-4,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/58438157206,https://www.airlines-manager.com/aircraft/show/91352060,18:15,0:29,310,"$381,512.00","$345,237.00","$1,113.67","$55,385.61"
MIA - SJU,58438157207,M-SJU-BOS-5,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/58438157207,https://www.airlines-manager.com/aircraft/show/91352059,19:15,1:29,310,"381,512$","345,237$","$1,113.67","$55,385.61"
MIA - SJU,58446475155,M-SJU-BOS-1,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/58446475155,https://www.airlines-manager.com/aircraft/show/91352063,22:45,4:59,278,"346,527$","311,398$","$1,120.14","$49,956.90"
MIA - SKB,58394056838,M-ANU-SXM-4 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/58394056838,https://www.airlines-manager.com/aircraft/show/110114298,1:30,8:29,228,"345,078$","315,549$","$1,383.99","$45,186.01"
MIA - SKB,58394056839,M-ANU-SXM-1 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/58394056839,https://www.airlines-manager.com/aircraft/show/110114295,2:15,9:14,228,"$345,078.00","$315,549.00","$1,383.99","$45,186.01"
MIA - SKB,58405118028,M-ANU-SXM-2 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/58405118028,https://www.airlines-manager.com/aircraft/show/110114296,3:15,10:14,228,"345,078$","315,549$","$1,383.99","$45,186.01"
MIA - SKB,58411831162,M-ANU-SXM-6 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/58411831162,https://www.airlines-manager.com/aircraft/show/110114300,6:45,13:44,228,"$345,078.00","$315,549.00","$1,383.99","$45,186.01"
MIA - SKB,58428583384,M-ANU-SXM-5 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/58428583384,https://www.airlines-manager.com/aircraft/show/110114299,14:00,20:59,228,"$345,078.00","$315,549.00","$1,383.99","$45,186.01"
MIA - SKB,58441017565,M-ANU-SXM-3 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/58441017565,https://www.airlines-manager.com/aircraft/show/110114297,21:00,3:59,228,"$345,078.00","$315,549.00","$1,383.99","$45,186.01"
MIA - SLC,58394056130,M-SJU-BOS-2,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/58394056130,https://www.airlines-manager.com/aircraft/show/91352062,0:00,10:14,310,"$644,121.00","$586,535.00","$1,892.05","$57,316.12"
MIA - SLC,58394056131,M-SJU-BOS-4,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/58394056131,https://www.airlines-manager.com/aircraft/show/91352060,1:00,11:14,310,"$644,121.00","$586,535.00","$1,892.05","$57,316.12"
MIA - SLC,58394056132,M-SJU-BOS-3,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/58394056132,https://www.airlines-manager.com/aircraft/show/91352061,2:00,12:14,310,"$644,121.00","$586,535.00","$1,892.05","$57,316.12"
MIA - SLC,58418603217,M-SJU-BOS-5,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/58418603217,https://www.airlines-manager.com/aircraft/show/91352059,9:00,19:14,310,"$644,121.00","$586,535.00","$1,892.05","$57,316.12"
MIA - SLC,58418603218,M-SJU-BOS-6 B,A319-100,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/58418603218,https://www.airlines-manager.com/aircraft/show/110582841,10:00,20:14,198,"$483,924.00","$437,765.00","$2,210.93","$42,778.34"
MIA - SLC,58425449783,M-SJU-BOS-1,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/58425449783,https://www.airlines-manager.com/aircraft/show/91352063,12:00,22:14,310,"$644,121.00","$586,535.00","$1,892.05","$57,316.12"
MIA - SMF,58394056636,M-OAK-SMF-2,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/58394056636,https://www.airlines-manager.com/aircraft/show/91198619,1:00,12:59,320,"735,091$","671,059$","$2,097.06","$55,999.36"
MIA - SMF,58405117962,M-OAK-SMF-3,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/58405117962,https://www.airlines-manager.com/aircraft/show/91198616,3:00,14:59,320,"$735,091.00","$671,059.00","$2,097.06","$55,999.36"
MIA - SMF,58421791502,M-OAK-SMF-4,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/58421791502,https://www.airlines-manager.com/aircraft/show/91198618,11:00,22:59,320,"735,091$","671,059$","$2,097.06","$55,999.36"
MIA - SMF,58425449899,M-OAK-SMF-5,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/58425449899,https://www.airlines-manager.com/aircraft/show/91198617,13:00,0:59,320,"$735,091.00","$671,059.00","$2,097.06","$55,999.36"
MIA - SMF,58446475178,M-OAK-SMF-1,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/58446475178,https://www.airlines-manager.com/aircraft/show/91198615,23:00,10:59,320,"$735,091.00","$671,059.00","$2,097.06","$55,999.36"
MIA - STL,58394056819,M-ELP-MCI-1,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/58394056819,https://www.airlines-manager.com/aircraft/show/91806234,1:30,7:44,320,"$395,052.00","$351,479.00","$1,098.37","$56,387.01"
MIA - STL,58394056820,M-ELP-MCI-5 B,A319-100,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/58394056820,https://www.airlines-manager.com/aircraft/show/105093924,2:00,8:14,198,"$298,871.00","$268,112.00","$1,354.10","$43,012.62"
MIA - STL,58415054087,M-ELP-MCI-4,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/58415054087,https://www.airlines-manager.com/aircraft/show/91806231,8:30,14:44,320,"$395,052.00","$351,479.00","$1,098.37","$56,387.01"
MIA - STL,58418603293,M-ELP-MCI-3,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/58418603293,https://www.airlines-manager.com/aircraft/show/91806232,10:00,16:14,320,"$395,052.00","$351,479.00","$1,098.37","$56,387.01"
MIA - STL,58435221251,M-ELP-MCI-2,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/58435221251,https://www.airlines-manager.com/aircraft/show/91806235,17:00,23:14,320,"$395,052.00","$351,479.00","$1,098.37","$56,387.01"
MIA - SXM,58411831161,M-ANU-SXM-5 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/58411831161,https://www.airlines-manager.com/aircraft/show/110114299,6:45,13:44,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SXM,58428583383,M-ANU-SXM-3 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/58428583383,https://www.airlines-manager.com/aircraft/show/110114297,14:00,20:59,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SXM,58431664423,M-ANU-SXM-4 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/58431664423,https://www.airlines-manager.com/aircraft/show/110114298,16:00,22:59,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SXM,58438157378,M-ANU-SXM-1 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/58438157378,https://www.airlines-manager.com/aircraft/show/110114295,19:15,2:14,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SXM,58441017426,M-ANU-SXM-2 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/58441017426,https://www.airlines-manager.com/aircraft/show/110114296,20:15,3:14,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SXM,58446475271,M-ANU-SXM-6 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/58446475271,https://www.airlines-manager.com/aircraft/show/110114300,23:45,6:44,228,"$334,792.00","$305,986.00","$1,342.04","$43,816.61"
MIA - SYR,58405117891,M-EUG-SYR-1,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/58405117891,https://www.airlines-manager.com/aircraft/show/119652483,2:30,9:14,320,"433,063$","391,646$","$1,223.89","$58,165.25"
MIA - SYR,58411831197,M-EUG-SYR-3,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/58411831197,https://www.airlines-manager.com/aircraft/show/119652481,7:15,13:59,320,"$433,063.00","$391,646.00","$1,223.89","$58,165.25"
MIA - SYR,58425449777,M-EUG-SYR-2,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/58425449777,https://www.airlines-manager.com/aircraft/show/119652482,12:00,18:44,320,"$433,063.00","$391,646.00","$1,223.89","$58,165.25"
MIA - SYR,58428583339,M-EUG-SYR-4,737-900ER,https://www.airlines-manager.com/network/showline/50424911,https://www.airlines-manager.com/network/showflight/58428583339,https://www.airlines-manager.com/aircraft/show/119652480,14:00,20:44,320,"$433,063.00","$391,646.00","$1,223.89","$58,165.25"
MIA - TPA,58408651826,M-BUR-PVD-1,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/58408651826,https://www.airlines-manager.com/aircraft/show/108834803,5:00,7:59,310,"$128,129.00","$102,113.00",$329.40,"$34,227.82"
MIA - TPA,58421791563,M-BUR-PVD-3,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/58421791563,https://www.airlines-manager.com/aircraft/show/108834805,11:00,13:59,310,"$128,129.00","$102,113.00",$329.40,"$34,227.82"
MIA - TPA,58435221284,M-BUR-PVD-5 B,A319-100,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/58435221284,https://www.airlines-manager.com/aircraft/show/108834807,17:00,19:59,198,"$95,593.00","$74,772.00",$377.64,"$25,063.24"
MIA - TPA,58435221285,M-BUR-PVD-2,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/58435221285,https://www.airlines-manager.com/aircraft/show/108834804,17:45,20:44,310,"$128,129.00","$102,113.00",$329.40,"$34,227.82"
MIA - TPA,58446475268,M-BUR-PVD-4,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/58446475268,https://www.airlines-manager.com/aircraft/show/108834806,23:45,2:44,310,"$128,129.00","$102,113.00",$329.40,"$34,227.82"
MIA - TUL,58394056493,M-FAR-TUL-2,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/58394056493,https://www.airlines-manager.com/aircraft/show/110883160,0:45,7:29,320,"$417,622.00","$376,181.00","$1,175.57","$55,868.47"
MIA - TUL,58405117991,M-FAR-TUL-5,ERJ-175,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/58405117991,https://www.airlines-manager.com/aircraft/show/87169421,3:00,9:44,112,"$196,831.00","$172,707.00","$1,542.03","$25,649.55"
MIA - TUL,58421791520,M-FAR-TUL-3,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/58421791520,https://www.airlines-manager.com/aircraft/show/110883161,11:00,17:44,320,"$417,622.00","$376,181.00","$1,175.57","$55,868.47"
MIA - TUL,58431664398,M-FAR-TUL-4,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/58431664398,https://www.airlines-manager.com/aircraft/show/110883162,16:00,22:44,320,"$417,622.00","$376,181.00","$1,175.57","$55,868.47"
MIA - TUL,58441017316,M-FAR-TUL-1,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/58441017316,https://www.airlines-manager.com/aircraft/show/110883159,19:45,2:29,320,"$417,622.00","$376,181.00","$1,175.57","$55,868.47"
MIA - TUS,58394056472,M-IAD-TUS-3,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/58394056472,https://www.airlines-manager.com/aircraft/show/97556719,0:30,9:59,310,"$593,850.00","$545,245.00","$1,758.85","$57,495.08"
MIA - TUS,58418603340,M-IAD-TUS-2,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/58418603340,https://www.airlines-manager.com/aircraft/show/97556720,10:00,19:29,310,"$593,850.00","$545,245.00","$1,758.85","$57,495.08"
MIA - TUS,58425449953,M-IAD-TUS-5,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/58425449953,https://www.airlines-manager.com/aircraft/show/97556716,13:00,22:29,310,"$593,850.00","$545,245.00","$1,758.85","$57,495.08"
MIA - TUS,58431664361,M-IAD-TUS-1,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/58431664361,https://www.airlines-manager.com/aircraft/show/97556721,15:45,1:14,310,"$593,850.00","$545,245.00","$1,758.85","$57,495.08"
MIA - TUS,58438157300,M-IAD-TUS-4,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/58438157300,https://www.airlines-manager.com/aircraft/show/97556718,18:45,4:14,310,"593,850$","545,245$","$1,758.85","$57,495.08"
MIA - TYS,58405118059,M-CID-BHM-4,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/58405118059,https://www.airlines-manager.com/aircraft/show/116789650,3:30,8:29,310,"$315,564.00","$286,171.00",$923.13,"$57,425.62"
MIA - TYS,58418603349,M-CID-BHM-3,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/58418603349,https://www.airlines-manager.com/aircraft/show/116789651,10:00,14:59,310,"$315,564.00","$286,171.00",$923.13,"$57,425.62"
MIA - TYS,58428583440,M-CID-BHM-2,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/58428583440,https://www.airlines-manager.com/aircraft/show/116789652,14:45,19:44,310,"$315,564.00","$286,171.00",$923.13,"$57,425.62"
MIA - TYS,58443550986,M-CID-BHM-1,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/58443550986,https://www.airlines-manager.com/aircraft/show/116789653,22:00,2:59,310,"$315,564.00","$286,171.00",$923.13,"$57,425.62"
MIA - YUL,58411831137,M-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/58411831137,https://www.airlines-manager.com/aircraft/show/113101225,6:30,13:59,400,"$630,873.00","$576,566.00","$1,441.42","$77,046.68"
MIA - YUL,58421791490,M-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/58421791490,https://www.airlines-manager.com/aircraft/show/113101226,11:00,18:29,400,"630,873$","576,566$","$1,441.42","$77,046.68"
MIA - YUL,58431664245,M-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/58431664245,https://www.airlines-manager.com/aircraft/show/113101227,15:00,22:29,400,"630,873$","576,566$","$1,441.42","$77,046.68"
MIA - YUL,58446475250,M-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/58446475250,https://www.airlines-manager.com/aircraft/show/113101224,23:45,7:14,400,"$630,873.00","$576,566.00","$1,441.42","$77,046.68"
MIA - YVR,58421791489,M-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/58421791489,https://www.airlines-manager.com/aircraft/show/113101224,11:00,23:44,400,"$1,049,041.00","$964,395.00","$2,410.99","$75,737.83"
MIA - YVR,58428583304,M-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/58428583304,https://www.airlines-manager.com/aircraft/show/113101225,14:00,2:44,400,"$1,049,041.00","$964,395.00","$2,410.99","$75,737.83"
MIA - YVR,58438157227,M-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/58438157227,https://www.airlines-manager.com/aircraft/show/113101226,18:30,7:14,400,"$1,049,041.00","$964,395.00","$2,410.99","$75,737.83"
MIA - YVR,58446475105,M-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/58446475105,https://www.airlines-manager.com/aircraft/show/113101227,22:30,11:14,400,"$1,049,041.00","$964,395.00","$2,410.99","$75,737.83"
MIA - YYC,58394056121,M-SJC-YYC-1,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/58394056121,https://www.airlines-manager.com/aircraft/show/107763569,0:00,11:44,320,"$733,218.00","$664,622.00","$2,076.94","$56,643.92"
MIA - YYC,58394056122,M-SJC-YYC-2,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/58394056122,https://www.airlines-manager.com/aircraft/show/107763568,2:00,13:44,320,"$733,218.00","$664,622.00","$2,076.94","$56,643.92"
MIA - YYC,58405118103,M-SJC-YYC-3,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/58405118103,https://www.airlines-manager.com/aircraft/show/107763567,4:00,15:44,320,"$733,218.00","$664,622.00","$2,076.94","$56,643.92"
MIA - YYC,58425449761,M-SJC-YYC-4,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/58425449761,https://www.airlines-manager.com/aircraft/show/107763564,12:00,23:44,320,"$733,218.00","$664,622.00","$2,076.94","$56,643.92"
MIA - YYC,58428583324,M-SJC-YYC-5,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/58428583324,https://www.airlines-manager.com/aircraft/show/107763563,14:00,1:44,320,"$733,218.00","$664,622.00","$2,076.94","$56,643.92"
MIA - YYZ,58405117930,M-BWI-YYZ-3,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/58405117930,https://www.airlines-manager.com/aircraft/show/92153441,2:45,9:44,310,"$439,732.00","$392,992.00","$1,267.72","$56,275.70"
MIA - YYZ,58408651798,M-BWI-YYZ-6 B,A319-100,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/58408651798,https://www.airlines-manager.com/aircraft/show/120519717,4:45,11:44,198,"$329,542.00","$292,098.00","$1,475.24","$41,827.88"
MIA - YYZ,58418603333,M-BWI-YYZ-4,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/58418603333,https://www.airlines-manager.com/aircraft/show/92153442,10:00,16:59,310,"$439,732.00","$392,992.00","$1,267.72","$56,275.70"
MIA - YYZ,58425449784,M-BWI-YYZ-5,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/58425449784,https://www.airlines-manager.com/aircraft/show/92153439,12:00,18:59,310,"$439,732.00","$392,992.00","$1,267.72","$56,275.70"
MIA - YYZ,58431664358,M-BWI-YYZ-1,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/58431664358,https://www.airlines-manager.com/aircraft/show/92153443,15:45,22:44,310,"$439,732.00","$392,992.00","$1,267.72","$56,275.70"
MIA - YYZ,58438157297,M-BWI-YYZ-2,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/58438157297,https://www.airlines-manager.com/aircraft/show/92153440,18:45,1:44,310,"$439,732.00","$392,992.00","$1,267.72","$56,275.70"
SFO - ABQ,58415054117,S-MCI-OMA-1,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/58415054117,https://www.airlines-manager.com/aircraft/show/88239553,8:45,14:14,320,"$351,204.00","$311,153.00",$972.35,"$56,745.23"
SFO - ABQ,58415054118,S-MCI-OMA-5 B,A319-100,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/58415054118,https://www.airlines-manager.com/aircraft/show/105223003,8:45,14:14,198,"$266,605.00","$238,475.00","$1,204.42","$43,490.88"
SFO - ABQ,58421791438,S-MCI-OMA-4,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/58421791438,https://www.airlines-manager.com/aircraft/show/88239557,10:30,15:59,320,"351,204$","311,153$",$972.35,"$56,745.23"
SFO - ABQ,58431664250,S-MCI-OMA-3,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/58431664250,https://www.airlines-manager.com/aircraft/show/88239555,15:00,20:29,320,"$351,204.00","$311,153.00",$972.35,"$56,745.23"
SFO - ABQ,58446475137,S-MCI-OMA-2,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/58446475137,https://www.airlines-manager.com/aircraft/show/88239554,22:45,4:14,320,"$351,204.00","$311,153.00",$972.35,"$56,745.23"
SFO - ALB,58394056475,S-ALB-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/58394056475,https://www.airlines-manager.com/aircraft/show/112650097,0:30,12:29,310,"$737,199.00","$681,035.00","$2,196.89","$56,831.85"
SFO - ALB,58408651861,S-ALB-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/58408651861,https://www.airlines-manager.com/aircraft/show/112650096,5:30,17:29,310,"$737,199.00","$681,035.00","$2,196.89","$56,831.85"
SFO - ALB,58415054012,S-ALB-CAK-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/58415054012,https://www.airlines-manager.com/aircraft/show/112650090,7:30,19:29,198,"551,373$","506,332$","$2,557.23","$42,253.02"
SFO - ALB,58428583368,S-ALB-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/58428583368,https://www.airlines-manager.com/aircraft/show/112650099,14:00,1:59,310,"$737,199.00","$681,035.00","$2,196.89","$56,831.85"
SFO - ALB,58435221411,S-ALB-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/58435221411,https://www.airlines-manager.com/aircraft/show/112650098,18:00,5:59,310,"$737,199.00","$681,035.00","$2,196.89","$56,831.85"
SFO - ANC,58405117878,S-BWI-ANC-4,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/58405117878,https://www.airlines-manager.com/aircraft/show/106255848,2:30,12:14,338,"$665,760.00","$617,716.00","$1,827.56","$63,463.97"
SFO - ANC,58405117879,S-BWI-ANC-5,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/58405117879,https://www.airlines-manager.com/aircraft/show/106255849,3:30,13:14,338,"$665,760.00","$617,716.00","$1,827.56","$63,463.97"
SFO - ANC,58438157318,S-BWI-ANC-1,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/58438157318,https://www.airlines-manager.com/aircraft/show/106255845,19:00,4:44,338,"$665,760.00","$617,716.00","$1,827.56","$63,463.97"
SFO - ANC,58441017343,S-BWI-ANC-2,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/58441017343,https://www.airlines-manager.com/aircraft/show/106255846,20:00,5:44,338,"$665,760.00","$617,716.00","$1,827.56","$63,463.97"
SFO - ANC,58441017344,S-BWI-ANC-3,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/58441017344,https://www.airlines-manager.com/aircraft/show/106255847,21:00,6:44,338,"$665,760.00","$617,716.00","$1,827.56","$63,463.97"
SFO - ATL,58435221278,S-168C-3 B2,747-400,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/58435221278,https://www.airlines-manager.com/aircraft/show/120752303,17:00,2:44,968,"$1,863,868.00","$1,685,722.00","$1,741.45","$173,190.62"
SFO - ATL,58435221279,S-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/58435221279,https://www.airlines-manager.com/aircraft/show/107467212,18:00,4:29,112,"$307,106.00","$254,690.00","$2,274.02","$24,294.75"
SFO - ATL,58441017374,S-168D-6 B2,747-400,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/58441017374,https://www.airlines-manager.com/aircraft/show/120752299,20:00,5:44,968,"$1,863,868.00","$1,685,722.00","$1,741.45","$173,190.62"
SFO - AUS,58394056583,S-OGG-AUS-1,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/58394056583,https://www.airlines-manager.com/aircraft/show/92773481,0:45,8:44,310,"503,113$","458,860$","$1,480.19","$57,477.24"
SFO - AUS,58405117931,S-OGG-AUS-2,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/58405117931,https://www.airlines-manager.com/aircraft/show/92773480,2:45,10:44,310,"$503,113.00","$458,860.00","$1,480.19","$57,477.24"
SFO - AUS,58428583273,S-OGG-AUS-3,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/58428583273,https://www.airlines-manager.com/aircraft/show/92773479,13:30,21:29,310,"$503,113.00","$458,860.00","$1,480.19","$57,477.24"
SFO - AUS,58431664346,S-OGG-AUS-4,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/58431664346,https://www.airlines-manager.com/aircraft/show/92773478,15:30,23:29,310,"$503,113.00","$458,860.00","$1,480.19","$57,477.24"
SFO - AUS,58438157242,S-OGG-AUS-5,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/58438157242,https://www.airlines-manager.com/aircraft/show/92773477,18:30,2:29,310,"$503,113.00","$458,860.00","$1,480.19","$57,477.24"
SFO - BDL,58408651786,S-RSW-BDL-1,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/58408651786,https://www.airlines-manager.com/aircraft/show/84915098,4:45,16:59,320,"$745,353.00","$681,235.00","$2,128.86","$55,686.78"
SFO - BDL,58411831152,S-RSW-BDL-2,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/58411831152,https://www.airlines-manager.com/aircraft/show/84915099,6:45,18:59,320,"$745,353.00","$681,235.00","$2,128.86","$55,686.78"
SFO - BDL,58415054116,S-RSW-BDL-5,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/58415054116,https://www.airlines-manager.com/aircraft/show/84915102,8:45,20:59,320,"$745,353.00","$681,235.00","$2,128.86","$55,686.78"
SFO - BDL,58435221247,S-RSW-BDL-3,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/58435221247,https://www.airlines-manager.com/aircraft/show/84915100,17:00,5:14,320,"$745,353.00","$681,235.00","$2,128.86","$55,686.78"
SFO - BDL,58438157325,S-RSW-BDL-4,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/58438157325,https://www.airlines-manager.com/aircraft/show/84915101,19:00,7:14,320,"$745,353.00","$681,235.00","$2,128.86","$55,686.78"
SFO - BFF,58394056716,S-ICT-BFF-5,ERJ-175,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/58394056716,https://www.airlines-manager.com/aircraft/show/114912306,1:00,7:14,112,"$184,180.00","$161,791.00","$1,444.56","$25,955.78"
SFO - BFF,58394056719,S-ICT-BFF-4,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/58394056719,https://www.airlines-manager.com/aircraft/show/114912268,2:15,8:29,310,"$391,156.00","$356,860.00","$1,151.16","$57,250.27"
SFO - BFF,58415054074,S-ICT-BFF-3,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/58415054074,https://www.airlines-manager.com/aircraft/show/114912263,8:15,14:29,310,"$391,156.00","$356,860.00","$1,151.16","$57,250.27"
SFO - BFF,58431664415,S-ICT-BFF-2,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/58431664415,https://www.airlines-manager.com/aircraft/show/114912264,16:00,22:14,310,"$391,156.00","$356,860.00","$1,151.16","$57,250.27"
SFO - BFF,58446475239,S-ICT-BFF-1,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/58446475239,https://www.airlines-manager.com/aircraft/show/114912267,23:30,5:44,310,"$391,156.00","$356,860.00","$1,151.16","$57,250.27"
SFO - BHM,58408651854,S-BHM-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/58408651854,https://www.airlines-manager.com/aircraft/show/117782568,5:30,15:29,320,"$624,697.00","$570,602.00","$1,783.13","$57,155.46"
SFO - BHM,58411831182,S-BHM-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/58411831182,https://www.airlines-manager.com/aircraft/show/117782569,7:00,16:59,320,"624,697$","570,602$","$1,783.13","$57,155.46"
SFO - BHM,58431664297,S-BHM-GRR-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/58431664297,https://www.airlines-manager.com/aircraft/show/117782583,15:00,0:59,198,"469,973$","430,696$","$2,175.23","$43,141.50"
SFO - BHM,58441017319,S-BHM-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/58441017319,https://www.airlines-manager.com/aircraft/show/117782567,19:45,5:44,320,"624,697$","570,602$","$1,783.13","$57,155.46"
SFO - BHM,58443550973,S-BHM-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49872027,https://www.airlines-manager.com/network/showflight/58443550973,https://www.airlines-manager.com/aircraft/show/117782566,22:00,7:59,320,"624,697$","570,602$","$1,783.13","$57,155.46"
SFO - BIL,58394056917,S-FAR-BIL-4,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/58394056917,https://www.airlines-manager.com/aircraft/show/117782587,2:15,7:59,310,"357,113$","324,930$","$1,048.16","$56,673.84"
SFO - BIL,58418603242,S-FAR-BIL-3,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/58418603242,https://www.airlines-manager.com/aircraft/show/117782586,9:15,14:59,310,"$357,113.00","$324,930.00","$1,048.16","$56,673.84"
SFO - BIL,58431664289,S-FAR-BIL-2,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/58431664289,https://www.airlines-manager.com/aircraft/show/117782585,15:00,20:44,310,"$357,113.00","$324,930.00","$1,048.16","$56,673.84"
SFO - BIL,58446475163,S-FAR-BIL-1,A321-200,https://www.airlines-manager.com/network/showline/49872056,https://www.airlines-manager.com/network/showflight/58446475163,https://www.airlines-manager.com/aircraft/show/117782584,22:45,4:29,310,"$357,113.00","$324,930.00","$1,048.16","$56,673.84"
SFO - BNA,58394056746,S-BNA-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/58394056746,https://www.airlines-manager.com/aircraft/show/103365580,1:15,10:59,320,"$608,391.00","$552,114.00","$1,725.36","$56,724.04"
SFO - BNA,58411831124,S-BNA-CMH-6,ERJ-175,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/58411831124,https://www.airlines-manager.com/aircraft/show/82323681,6:00,15:44,112,"$286,104.00","$252,244.00","$2,252.18","$25,915.48"
SFO - BNA,58425449909,S-BNA-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/58425449909,https://www.airlines-manager.com/aircraft/show/103365583,13:00,22:44,320,"$608,391.00","$552,114.00","$1,725.36","$56,724.04"
SFO - BNA,58431664258,S-BNA-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/58431664258,https://www.airlines-manager.com/aircraft/show/103365582,15:00,0:44,320,"$608,391.00","$552,114.00","$1,725.36","$56,724.04"
SFO - BNA,58431664259,S-BNA-CMH-5,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/58431664259,https://www.airlines-manager.com/aircraft/show/103365579,15:45,1:29,320,"$608,391.00","$552,114.00","$1,725.36","$56,724.04"
SFO - BNA,58446475210,S-BNA-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/58446475210,https://www.airlines-manager.com/aircraft/show/103365581,23:15,8:59,320,"$608,391.00","$552,114.00","$1,725.36","$56,724.04"
SFO - BOI,58394056737,S-CLE-MKE-2,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/58394056737,https://www.airlines-manager.com/aircraft/show/92519369,1:15,5:29,320,"$248,121.00","$217,386.00",$679.33,"$51,351.02"
SFO - BOI,58418603268,S-CLE-MKE-1,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/58418603268,https://www.airlines-manager.com/aircraft/show/92519368,9:45,13:59,320,"$248,121.00","$217,386.00",$679.33,"$51,351.02"
SFO - BOI,58428583432,S-CLE-MKE-4,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/58428583432,https://www.airlines-manager.com/aircraft/show/92519371,14:45,18:59,320,"$248,121.00","$217,386.00",$679.33,"$51,351.02"
SFO - BOI,58431664386,S-CLE-MKE-3,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/58431664386,https://www.airlines-manager.com/aircraft/show/92519367,16:00,20:14,320,"$248,121.00","$217,386.00",$679.33,"$51,351.02"
SFO - BOS,58394056163,S-BOS-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/58394056163,https://www.airlines-manager.com/aircraft/show/104864961,0:15,12:44,338,"841,524$","778,167$","$2,302.27","$62,336.48"
SFO - BOS,58421791626,S-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/58421791626,https://www.airlines-manager.com/aircraft/show/120141531,11:30,23:59,0,"$222,034.00","$134,572.00",#DIV/0!,"$10,780.13"
SFO - BOS,58425449868,S-BOS-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/58425449868,https://www.airlines-manager.com/aircraft/show/104901564,13:00,1:29,338,"$841,524.00","$778,167.00","$2,302.27","$62,336.48"
SFO - BOS,58428583296,S-BOS-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/58428583296,https://www.airlines-manager.com/aircraft/show/104870960,14:00,2:29,338,"$841,524.00","$778,167.00","$2,302.27","$62,336.48"
SFO - BOS,58431664353,S-BOS-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/58431664353,https://www.airlines-manager.com/aircraft/show/104874465,15:45,4:14,338,"$841,524.00","$778,167.00","$2,302.27","$62,336.48"
SFO - BOS,58441017390,S-BOS-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/58441017390,https://www.airlines-manager.com/aircraft/show/104901544,20:15,8:44,338,"$841,524.00","$778,167.00","$2,302.27","$62,336.48"
SFO - BTV,58394056136,S-BTV-LEX-4,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/58394056136,https://www.airlines-manager.com/aircraft/show/112650092,0:00,11:59,310,"$733,303.00","$677,318.00","$2,184.90","$56,521.67"
SFO - BTV,58411831119,S-BTV-LEX-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/58411831119,https://www.airlines-manager.com/aircraft/show/112650089,6:00,17:59,198,"$549,048.00","$504,149.00","$2,546.21","$42,070.85"
SFO - BTV,58428583366,S-BTV-LEX-1,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/58428583366,https://www.airlines-manager.com/aircraft/show/112650095,14:00,1:59,310,"$733,303.00","$677,318.00","$2,184.90","$56,521.67"
SFO - BTV,58435221410,S-BTV-LEX-2,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/58435221410,https://www.airlines-manager.com/aircraft/show/112650094,18:00,5:59,310,"$733,303.00","$677,318.00","$2,184.90","$56,521.67"
SFO - BTV,58441017367,S-BTV-LEX-3,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/58441017367,https://www.airlines-manager.com/aircraft/show/112650093,20:00,7:59,310,"$733,303.00","$677,318.00","$2,184.90","$56,521.67"
SFO - BUF,58394056833,S-PVD-BUF-1,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/58394056833,https://www.airlines-manager.com/aircraft/show/112650108,1:30,12:29,310,"690,191$","636,733$","$2,053.98","$57,972.66"
SFO - BUF,58408651862,S-PVD-BUF-2,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/58408651862,https://www.airlines-manager.com/aircraft/show/112650107,5:30,16:29,310,"$690,191.00","$636,733.00","$2,053.98","$57,972.66"
SFO - BUF,58415054006,S-PVD-BUF-3,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/58415054006,https://www.airlines-manager.com/aircraft/show/112650106,7:30,18:29,310,"$690,191.00","$636,733.00","$2,053.98","$57,972.66"
SFO - BUF,58425449974,S-PVD-BUF-4,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/58425449974,https://www.airlines-manager.com/aircraft/show/112650105,13:00,23:59,310,"690,191$","636,733$","$2,053.98","$57,972.66"
SFO - BUF,58435221412,S-PVD-BUF-5,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/58435221412,https://www.airlines-manager.com/aircraft/show/112650104,18:00,4:59,310,"690,191$","636,733$","$2,053.98","$57,972.66"
SFO - BUR,58394056913,S-SAV-JAN-1,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/58394056913,https://www.airlines-manager.com/aircraft/show/114912265,2:15,5:44,310,"174,124$","151,614$",$489.08,"$43,525.55"
SFO - BUR,58405118159,S-SAV-JAN-4,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/58405118159,https://www.airlines-manager.com/aircraft/show/114912270,4:15,7:44,310,"174,124$","151,614$",$489.08,"$43,525.55"
SFO - BUR,58421791624,S-SAV-JAN-5 B,A319-100,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/58421791624,https://www.airlines-manager.com/aircraft/show/114917486,11:30,14:59,198,"131,182$","113,160$",$571.52,"$32,486.12"
SFO - BUR,58431664348,S-SAV-JAN-3,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/58431664348,https://www.airlines-manager.com/aircraft/show/114912269,15:30,18:59,310,"174,124$","151,614$",$489.08,"$43,525.55"
SFO - BUR,58435221276,S-SAV-JAN-2,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/58435221276,https://www.airlines-manager.com/aircraft/show/114912266,17:00,20:29,310,"$174,124.00","$151,614.00",$489.08,"$43,525.55"
SFO - BWI,58408651778,S-BWI-ANC-1,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/58408651778,https://www.airlines-manager.com/aircraft/show/106255845,4:45,16:14,338,"$792,718.00","$734,335.00","$2,172.59","$63,947.90"
SFO - BWI,58408651779,S-BWI-ANC-2,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/58408651779,https://www.airlines-manager.com/aircraft/show/106255846,5:45,17:14,338,"$792,718.00","$734,335.00","$2,172.59","$63,947.90"
SFO - BWI,58411831149,S-BWI-ANC-3,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/58411831149,https://www.airlines-manager.com/aircraft/show/106255847,6:45,18:14,338,"$792,718.00","$734,335.00","$2,172.59","$63,947.90"
SFO - BWI,58431664233,S-BWI-ANC-4,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/58431664233,https://www.airlines-manager.com/aircraft/show/106255848,15:00,2:29,338,"$792,718.00","$734,335.00","$2,172.59","$63,947.90"
SFO - BWI,58431664234,S-BWI-ANC-5,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/58431664234,https://www.airlines-manager.com/aircraft/show/106255849,16:00,3:29,338,"$792,718.00","$734,335.00","$2,172.59","$63,947.90"
SFO - BZN,58418603267,S-ROC-COS-1,A321neo,https://www.airlines-manager.com/network/showline/50555367,https://www.airlines-manager.com/network/showflight/58418603267,https://www.airlines-manager.com/aircraft/show/120112476,9:45,14:59,338,"$357,990.00","$329,036.00",$973.48,"$62,873.12"
SFO - BZN,58431664235,S-ROC-COS-3,A321neo,https://www.airlines-manager.com/network/showline/50555367,https://www.airlines-manager.com/network/showflight/58431664235,https://www.airlines-manager.com/aircraft/show/120112474,15:00,20:14,338,"$357,990.00","$329,036.00",$973.48,"$62,873.12"
SFO - BZN,58438157260,S-ROC-COS-2,A321neo,https://www.airlines-manager.com/network/showline/50555367,https://www.airlines-manager.com/network/showflight/58438157260,https://www.airlines-manager.com/aircraft/show/120112475,18:45,23:59,338,"$357,990.00","$329,036.00",$973.48,"$62,873.12"
SFO - BZN,58446475249,S-ROC-COS-4,A321neo,https://www.airlines-manager.com/network/showline/50555367,https://www.airlines-manager.com/network/showflight/58446475249,https://www.airlines-manager.com/aircraft/show/120051490,23:45,4:59,277,"319,704$","291,872$","$1,053.69","$55,771.72"
SFO - CAK,58394056895,S-ALB-CAK-1,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/58394056895,https://www.airlines-manager.com/aircraft/show/112650099,2:00,12:29,310,"$660,859.00","$610,685.00","$1,969.95","$58,252.94"
SFO - CAK,58411831117,S-ALB-CAK-2,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/58411831117,https://www.airlines-manager.com/aircraft/show/112650098,6:00,16:29,310,"$660,859.00","$610,685.00","$1,969.95","$58,252.94"
SFO - CAK,58428583367,S-ALB-CAK-3,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/58428583367,https://www.airlines-manager.com/aircraft/show/112650097,14:00,0:29,310,"$660,859.00","$610,685.00","$1,969.95","$58,252.94"
SFO - CAK,58438157346,S-ALB-CAK-4,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/58438157346,https://www.airlines-manager.com/aircraft/show/112650096,19:00,5:29,310,"$660,859.00","$610,685.00","$1,969.95","$58,252.94"
SFO - CAK,58441017567,S-ALB-CAK-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/58441017567,https://www.airlines-manager.com/aircraft/show/112650090,21:00,7:29,198,"$496,365.00","$456,132.00","$2,303.70","$43,510.21"
SFO - CDG,58405118062,S-168D-2 B2,747-400,https://www.airlines-manager.com/network/showline/50769259,https://www.airlines-manager.com/network/showflight/58405118062,https://www.airlines-manager.com/aircraft/show/120752295,3:30,1:29,968,"$4,129,579.00","$3,785,477.00","$3,910.62","$172,197.59"
SFO - CDG,58443550932,S-168C-1 B2,747-400,https://www.airlines-manager.com/network/showline/50769259,https://www.airlines-manager.com/network/showflight/58443550932,https://www.airlines-manager.com/aircraft/show/120752301,21:30,19:29,948,"$4,073,642.00","$3,732,996.00","$3,937.76","$169,810.28"
SFO - CHS,58394056823,S-MHT-CHS-1,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/58394056823,https://www.airlines-manager.com/aircraft/show/114917465,1:30,12:44,320,"$704,942.00","$645,793.00","$2,018.10","$57,488.99"
SFO - CHS,58408651852,S-MHT-CHS-2,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/58408651852,https://www.airlines-manager.com/aircraft/show/114917464,5:30,16:44,320,"$704,942.00","$645,793.00","$2,018.10","$57,488.99"
SFO - CHS,58415054111,S-MHT-CHS-5 B,A319-100,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/58415054111,https://www.airlines-manager.com/aircraft/show/114912262,8:30,19:59,198,"$531,446.00","$488,189.00","$2,465.60","$42,512.83"
SFO - CHS,58425449921,S-MHT-CHS-3,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/58425449921,https://www.airlines-manager.com/aircraft/show/114917463,13:00,0:14,320,"$704,942.00","$645,793.00","$2,018.10","$57,488.99"
SFO - CHS,58435221257,S-MHT-CHS-4,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/58435221257,https://www.airlines-manager.com/aircraft/show/114266973,17:00,4:14,320,"$704,942.00","$645,793.00","$2,018.10","$57,488.99"
SFO - CID,58394056824,S-YEG-YYC-1,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/58394056824,https://www.airlines-manager.com/aircraft/show/117782561,1:30,9:59,320,"$530,499.00","$483,550.00","$1,511.09","$57,000.00"
SFO - CID,58411831140,S-YEG-YYC-4,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/58411831140,https://www.airlines-manager.com/aircraft/show/116932364,6:30,14:59,320,"530,499$","483,550$","$1,511.09","$57,000.00"
SFO - CID,58425449924,S-YEG-YYC-3,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/58425449924,https://www.airlines-manager.com/aircraft/show/117782559,13:00,21:29,320,"$530,499.00","$483,550.00","$1,511.09","$57,000.00"
SFO - CID,58438157332,S-YEG-YYC-2,737-900ER,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/58438157332,https://www.airlines-manager.com/aircraft/show/117782560,19:00,3:29,320,"$530,499.00","$483,550.00","$1,511.09","$57,000.00"
SFO - CID,58441017568,S-YEG-YYC-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872048,https://www.airlines-manager.com/network/showflight/58441017568,https://www.airlines-manager.com/aircraft/show/117782581,21:00,5:29,198,"$400,688.00","$366,754.00","$1,852.29","$43,232.30"
SFO - CLE,58408651849,S-CLE-MKE-2,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/58408651849,https://www.airlines-manager.com/aircraft/show/92519369,5:30,15:59,320,"$653,869.00","$596,150.00","$1,862.97","$56,866.45"
SFO - CLE,58411831146,S-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/58411831146,https://www.airlines-manager.com/aircraft/show/107467212,6:30,16:59,112,"307,058$","271,917$","$2,427.83","$25,938.03"
SFO - CLE,58415053997,S-CLE-MKE-5,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/58415053997,https://www.airlines-manager.com/aircraft/show/92519370,7:30,17:59,320,"$653,869.00","$596,150.00","$1,862.97","$56,866.45"
SFO - CLE,58428583316,S-CLE-MKE-1,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/58428583316,https://www.airlines-manager.com/aircraft/show/92519368,14:00,0:29,320,"$653,869.00","$596,150.00","$1,862.97","$56,866.45"
SFO - CLE,58438157326,S-CLE-MKE-4,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/58438157326,https://www.airlines-manager.com/aircraft/show/92519371,19:00,5:29,320,"$653,869.00","$596,150.00","$1,862.97","$56,866.45"
SFO - CLE,58441017396,S-CLE-MKE-3,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/58441017396,https://www.airlines-manager.com/aircraft/show/92519367,20:15,6:44,320,"$653,869.00","$596,150.00","$1,862.97","$56,866.45"
SFO - CLT,58394056110,S-IAD-CLT-3,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/58394056110,https://www.airlines-manager.com/aircraft/show/96135563,0:00,10:44,400,"$893,309.00","$813,344.00","$2,033.36","$75,777.39"
SFO - CLT,58411831102,S-IAD-CLT-4,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/58411831102,https://www.airlines-manager.com/aircraft/show/96135562,6:00,16:44,400,"$893,309.00","$813,344.00","$2,033.36","$75,777.39"
SFO - CLT,58425449997,S-IAD-CLT-1,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/58425449997,https://www.airlines-manager.com/aircraft/show/96135565,13:15,23:59,400,"$893,309.00","$813,344.00","$2,033.36","$75,777.39"
SFO - CLT,58431664325,S-IAD-CLT-5,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/58431664325,https://www.airlines-manager.com/aircraft/show/96135561,15:15,1:59,400,"$893,309.00","$813,344.00","$2,033.36","$75,777.39"
SFO - CLT,58435221293,S-IAD-CLT-2,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/58435221293,https://www.airlines-manager.com/aircraft/show/96135564,17:15,3:59,400,"$893,309.00","$813,344.00","$2,033.36","$75,777.39"
SFO - CMH,58394056490,S-BNA-CMH-2,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/58394056490,https://www.airlines-manager.com/aircraft/show/103365582,0:45,10:59,320,"$638,686.00","$581,389.00","$1,816.84","$56,813.26"
SFO - CMH,58408651851,S-BNA-CMH-5,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/58408651851,https://www.airlines-manager.com/aircraft/show/103365579,5:30,15:44,320,"$638,686.00","$581,389.00","$1,816.84","$56,813.26"
SFO - CMH,58425449908,S-BNA-CMH-3,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/58425449908,https://www.airlines-manager.com/aircraft/show/103365581,13:00,23:14,320,"$638,686.00","$581,389.00","$1,816.84","$56,813.26"
SFO - CMH,58431664256,S-BNA-CMH-4,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/58431664256,https://www.airlines-manager.com/aircraft/show/103365580,15:00,1:14,320,"$638,686.00","$581,389.00","$1,816.84","$56,813.26"
SFO - CMH,58431664257,S-BNA-CMH-6,ERJ-175,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/58431664257,https://www.airlines-manager.com/aircraft/show/82323681,15:45,1:59,112,"$300,499.00","$265,689.00","$2,372.22","$25,963.09"
SFO - CMH,58446475140,S-BNA-CMH-1,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/58446475140,https://www.airlines-manager.com/aircraft/show/103365583,22:45,8:59,320,"$638,686.00","$581,389.00","$1,816.84","$56,813.26"
SFO - COS,58394056902,S-ROC-COS-1,A321neo,https://www.airlines-manager.com/network/showline/50555364,https://www.airlines-manager.com/network/showflight/58394056902,https://www.airlines-manager.com/aircraft/show/120112476,2:15,7:59,338,"$397,466.00","$363,971.00","$1,076.84","$63,483.31"
SFO - COS,58418603232,S-ROC-COS-3,A321neo,https://www.airlines-manager.com/network/showline/50555364,https://www.airlines-manager.com/network/showflight/58418603232,https://www.airlines-manager.com/aircraft/show/120112474,9:15,14:59,338,"$397,466.00","$363,971.00","$1,076.84","$63,483.31"
SFO - COS,58425449873,S-ROC-COS-2,A321neo,https://www.airlines-manager.com/network/showline/50555364,https://www.airlines-manager.com/network/showflight/58425449873,https://www.airlines-manager.com/aircraft/show/120112475,13:00,18:44,338,"$397,466.00","$363,971.00","$1,076.84","$63,483.31"
SFO - COS,58435221366,S-ROC-COS-4,A321neo,https://www.airlines-manager.com/network/showline/50555364,https://www.airlines-manager.com/network/showflight/58435221366,https://www.airlines-manager.com/aircraft/show/120051490,18:00,23:44,338,"$397,466.00","$363,971.00","$1,076.84","$63,483.31"
SFO - CUN,58394056320,S-YOW-CUN-1,757-300,https://www.airlines-manager.com/network/showline/50555302,https://www.airlines-manager.com/network/showflight/58394056320,https://www.airlines-manager.com/aircraft/show/120056768,0:15,11:29,400,"$948,335.00","$874,378.00","$2,185.95","$77,837.80"
SFO - CUN,58394056323,S-YOW-CUN-2,757-300,https://www.airlines-manager.com/network/showline/50555302,https://www.airlines-manager.com/network/showflight/58394056323,https://www.airlines-manager.com/aircraft/show/120056767,1:15,12:29,400,"$948,335.00","$874,378.00","$2,185.95","$77,837.80"
SFO - CUN,58425449891,S-YOW-CUN-3,757-300,https://www.airlines-manager.com/network/showline/50555302,https://www.airlines-manager.com/network/showflight/58425449891,https://www.airlines-manager.com/aircraft/show/120056766,13:00,0:14,400,"$948,335.00","$874,378.00","$2,185.95","$77,837.80"
SFO - CUN,58428583307,S-YOW-CUN-4,757-300,https://www.airlines-manager.com/network/showline/50555302,https://www.airlines-manager.com/network/showflight/58428583307,https://www.airlines-manager.com/aircraft/show/120056765,14:00,1:14,400,"$948,335.00","$874,378.00","$2,185.95","$77,837.80"
SFO - CVG,58408651823,S-IND-CVG-3,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/58408651823,https://www.airlines-manager.com/aircraft/show/99316504,5:00,14:59,310,"$630,041.00","$577,014.00","$1,861.34","$57,797.73"
SFO - CVG,58411831185,S-IND-CVG-5,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/58411831185,https://www.airlines-manager.com/aircraft/show/99316502,7:00,16:59,310,"$630,041.00","$577,014.00","$1,861.34","$57,797.73"
SFO - CVG,58425449960,S-IND-CVG-2,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/58425449960,https://www.airlines-manager.com/aircraft/show/99316505,13:00,22:59,310,"$630,041.00","$577,014.00","$1,861.34","$57,797.73"
SFO - CVG,58431664277,S-IND-CVG-4,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/58431664277,https://www.airlines-manager.com/aircraft/show/99316503,15:00,0:59,310,"$630,041.00","$577,014.00","$1,861.34","$57,797.73"
SFO - CVG,58435221290,S-IND-CVG-6,ERJ-175,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/58435221290,https://www.airlines-manager.com/aircraft/show/99174346,17:00,2:59,112,"$295,248.00","$259,885.00","$2,320.40","$26,031.89"
SFO - CVG,58446475160,S-IND-CVG-1,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/58446475160,https://www.airlines-manager.com/aircraft/show/99316506,22:45,8:44,310,"$630,041.00","$577,014.00","$1,861.34","$57,797.73"
SFO - DEL,58394056142,S-168B-1 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/58394056142,https://www.airlines-manager.com/aircraft/show/86832727,0:00,5:29,1046,"$5,812,778.00","$5,394,209.00","$5,156.99","$983,746.32"
SFO - DEL,58394056143,S-168A-1 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/58394056143,https://www.airlines-manager.com/aircraft/show/86969602,2:00,7:29,1046,"$5,812,778.00","$5,394,209.00","$5,156.99","$983,746.32"
SFO - DEN,58394056173,S-IAH-MEX-5,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/58394056173,https://www.airlines-manager.com/aircraft/show/101045335,0:15,5:59,400,"$475,022.00","$407,058.00","$1,017.65","$70,998.49"
SFO - DEN,58411831136,S-IAH-MEX-1,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/58411831136,https://www.airlines-manager.com/aircraft/show/101045339,6:30,12:14,400,"$475,022.00","$407,058.00","$1,017.65","$70,998.49"
SFO - DEN,58415054085,S-IAH-MEX-4,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/58415054085,https://www.airlines-manager.com/aircraft/show/101045336,8:30,14:14,400,"$475,022.00","$407,058.00","$1,017.65","$70,998.49"
SFO - DEN,58425449888,S-IAH-MEX-3,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/58425449888,https://www.airlines-manager.com/aircraft/show/101045337,13:00,18:44,400,"$475,022.00","$407,058.00","$1,017.65","$70,998.49"
SFO - DEN,58443551007,S-IAH-MEX-2,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/58443551007,https://www.airlines-manager.com/aircraft/show/101045338,22:15,3:59,387,"$465,923.00","$398,285.00","$1,029.16","$69,468.31"
SFO - DFW,58394056481,S-DFW-2,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/58394056481,https://www.airlines-manager.com/aircraft/show/120752619,0:45,8:29,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DFW,58415054030,S-DFW-1,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/58415054030,https://www.airlines-manager.com/aircraft/show/120517724,8:00,15:44,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DFW,58418603207,S-DFW-2,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/58418603207,https://www.airlines-manager.com/aircraft/show/120752619,9:00,16:44,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DFW,58431664354,S-DFW-1,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/58431664354,https://www.airlines-manager.com/aircraft/show/120517724,15:45,23:29,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DFW,58435221211,S-DFW-2,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/58435221211,https://www.airlines-manager.com/aircraft/show/120752619,16:45,0:29,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DFW,58446475227,S-DFW-1,A321neo,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/58446475227,https://www.airlines-manager.com/aircraft/show/120517724,23:30,7:14,338,"$529,010.00","$469,323.00","$1,388.53","$60,688.32"
SFO - DSM,58408651764,S-TUL-DSM-3,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/58408651764,https://www.airlines-manager.com/aircraft/show/108410858,4:30,12:29,320,"$508,775.00","$462,937.00","$1,446.68","$57,987.93"
SFO - DSM,58425449914,S-TUL-DSM-2,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/58425449914,https://www.airlines-manager.com/aircraft/show/108410857,13:00,20:59,320,"$508,775.00","$462,937.00","$1,446.68","$57,987.93"
SFO - DSM,58431664321,S-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/58431664321,https://www.airlines-manager.com/aircraft/show/108466264,15:00,23:14,112,"$240,808.00","$213,387.00","$1,905.24","$25,917.45"
SFO - DSM,58446475144,S-TUL-DSM-1,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/58446475144,https://www.airlines-manager.com/aircraft/show/108410856,22:45,6:44,320,"$508,775.00","$462,937.00","$1,446.68","$57,987.93"
SFO - DSM,58446475145,S-TUL-DSM-4,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/58446475145,https://www.airlines-manager.com/aircraft/show/108410859,23:30,7:29,320,"$508,775.00","$462,937.00","$1,446.68","$57,987.93"
SFO - DTW,58408651758,S-ORD-DTW-4,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/58408651758,https://www.airlines-manager.com/aircraft/show/101045331,4:30,14:29,400,"$823,515.00","$748,392.00","$1,870.98","$74,964.14"
SFO - DTW,58408651759,S-ORD-DTW-3,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/58408651759,https://www.airlines-manager.com/aircraft/show/101045332,5:00,14:59,400,"$823,515.00","$748,392.00","$1,870.98","$74,964.14"
SFO - DTW,58431664242,S-ORD-DTW-2,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/58431664242,https://www.airlines-manager.com/aircraft/show/101045333,15:00,0:59,400,"$823,515.00","$748,392.00","$1,870.98","$74,964.14"
SFO - DTW,58435221244,S-ORD-DTW-5,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/58435221244,https://www.airlines-manager.com/aircraft/show/101045330,17:00,2:59,400,"$823,515.00","$748,392.00","$1,870.98","$74,964.14"
SFO - DTW,58443550968,S-ORD-DTW-1,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/58443550968,https://www.airlines-manager.com/aircraft/show/101045334,22:00,7:59,400,"$823,515.00","$748,392.00","$1,870.98","$74,964.14"
SFO - DXB,58408651863,S-168B-2 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/58408651863,https://www.airlines-manager.com/aircraft/show/87566901,5:30,12:29,1046,"$6,017,199.00","$5,552,011.00","$5,307.85","$795,037.37"
SFO - DXB,58415054008,S-168A-2 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/58415054008,https://www.airlines-manager.com/aircraft/show/86596991,7:30,14:29,1046,"$6,017,199.00","$5,552,011.00","$5,307.85","$795,037.37"
SFO - ELP,58408651881,S-ICT-BFF-1,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/58408651881,https://www.airlines-manager.com/aircraft/show/114912267,5:45,11:44,310,"$376,198.00","$341,426.00","$1,101.37","$57,062.84"
SFO - ELP,58411831206,S-ICT-BFF-5,ERJ-175,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/58411831206,https://www.airlines-manager.com/aircraft/show/114912306,7:15,13:14,112,"$178,042.00","$155,448.00","$1,387.93","$25,980.17"
SFO - ELP,58415054101,S-ICT-BFF-4,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/58415054101,https://www.airlines-manager.com/aircraft/show/114912268,8:30,14:29,310,"$376,198.00","$341,426.00","$1,101.37","$57,062.84"
SFO - ELP,58431664284,S-ICT-BFF-3,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/58431664284,https://www.airlines-manager.com/aircraft/show/114912263,15:00,20:59,310,"$376,198.00","$341,426.00","$1,101.37","$57,062.84"
SFO - ELP,58443551024,S-ICT-BFF-2,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/58443551024,https://www.airlines-manager.com/aircraft/show/114912264,22:15,4:14,310,"$376,198.00","$341,426.00","$1,101.37","$57,062.84"
SFO - EUG,58394056857,S-BHM-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/58394056857,https://www.airlines-manager.com/aircraft/show/117782568,1:45,5:29,320,"217,713$","189,681$",$592.75,"$50,807.41"
SFO - EUG,58405118010,S-BHM-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/58405118010,https://www.airlines-manager.com/aircraft/show/117782569,3:15,6:59,320,"217,713$","189,681$",$592.75,"$50,807.41"
SFO - EUG,58431664404,S-BHM-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/58431664404,https://www.airlines-manager.com/aircraft/show/117782567,16:00,19:44,320,"217,713$","189,681$",$592.75,"$50,807.41"
SFO - EUG,58435221350,S-BHM-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49872031,https://www.airlines-manager.com/network/showflight/58435221350,https://www.airlines-manager.com/aircraft/show/117782566,17:45,21:29,271,"197,441$","170,003$",$627.32,"$45,536.52"
SFO - FAR,58394056695,S-FAR-BIL-3,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/58394056695,https://www.airlines-manager.com/aircraft/show/117782586,1:00,8:44,310,"491,795$","452,290$","$1,459.00","$58,485.78"
SFO - FAR,58411831202,S-FAR-BIL-2,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/58411831202,https://www.airlines-manager.com/aircraft/show/117782585,7:15,14:59,310,"491,795$","452,290$","$1,459.00","$58,485.78"
SFO - FAR,58431664288,S-FAR-BIL-1,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/58431664288,https://www.airlines-manager.com/aircraft/show/117782584,15:00,22:44,310,"491,795$","452,290$","$1,459.00","$58,485.78"
SFO - FAR,58438157246,S-FAR-BIL-4,A321-200,https://www.airlines-manager.com/network/showline/49872054,https://www.airlines-manager.com/network/showflight/58438157246,https://www.airlines-manager.com/aircraft/show/117782587,18:30,2:14,310,"491,795$","452,290$","$1,459.00","$58,485.78"
SFO - FAT,58394056885,S-TUL-DSM-2,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/58394056885,https://www.airlines-manager.com/aircraft/show/108410857,2:00,4:44,320,"95,749$","71,553$",$223.60,"$26,177.93"
SFO - FAT,58421791632,S-TUL-DSM-1,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/58421791632,https://www.airlines-manager.com/aircraft/show/108410856,11:45,14:29,320,"95,749$","71,553$",$223.60,"$26,177.93"
SFO - FAT,58425449916,S-TUL-DSM-4,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/58425449916,https://www.airlines-manager.com/aircraft/show/108410859,13:00,15:44,320,"95,749$","71,553$",$223.60,"$26,177.93"
SFO - FAT,58435221388,S-TUL-DSM-3,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/58435221388,https://www.airlines-manager.com/aircraft/show/108410858,18:00,20:44,320,"95,749$","71,553$",$223.60,"$26,177.93"
SFO - FAT,58446475225,S-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/58446475225,https://www.airlines-manager.com/aircraft/show/108466264,23:15,1:59,73,"34,666$","22,375$",$306.51,"$8,185.98"
SFO - FCA,58408651776,S-MAF-FCA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/58408651776,https://www.airlines-manager.com/aircraft/show/120056759,4:45,9:59,272,"305,111$","281,676$","$1,035.57","$53,823.44"
SFO - FCA,58425449864,S-MAF-FCA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/58425449864,https://www.airlines-manager.com/aircraft/show/120056760,13:00,18:14,272,"305,111$","281,676$","$1,035.57","$53,823.44"
SFO - FCA,58428583443,S-MAF-FCA-5,ERJ-175,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/58428583443,https://www.airlines-manager.com/aircraft/show/119652600,14:45,20:14,112,"160,704$","140,973$","$1,258.69","$25,709.36"
SFO - FCA,58441017299,S-MAF-FCA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/58441017299,https://www.airlines-manager.com/aircraft/show/120056761,19:45,0:59,272,"305,111$","281,676$","$1,035.57","$53,823.44"
SFO - FCA,58446475246,S-MAF-FCA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555571,https://www.airlines-manager.com/network/showflight/58446475246,https://www.airlines-manager.com/aircraft/show/120056758,23:45,4:59,272,"305,111$","281,676$","$1,035.57","$53,823.44"
SFO - FLL,58394056329,S-FLL-TPA-2,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/58394056329,https://www.airlines-manager.com/aircraft/show/97955543,0:15,12:14,320,"739,785$","671,757$","$2,099.24","$56,057.61"
SFO - FLL,58405118140,S-FLL-TPA-4,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/58405118140,https://www.airlines-manager.com/aircraft/show/97955541,4:15,16:14,320,"739,785$","671,757$","$2,099.24","$56,057.61"
SFO - FLL,58415054009,S-FLL-TPA-6 B,A319-100,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/58415054009,https://www.airlines-manager.com/aircraft/show/97900729,7:30,19:44,198,"556,070$","506,591$","$2,558.54","$41,410.71"
SFO - FLL,58425449902,S-FLL-TPA-1,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/58425449902,https://www.airlines-manager.com/aircraft/show/97955544,13:00,0:59,320,"739,785$","671,757$","$2,099.24","$56,057.61"
SFO - FLL,58435221253,S-FLL-TPA-3,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/58435221253,https://www.airlines-manager.com/aircraft/show/97955542,17:00,4:59,320,"739,785$","671,757$","$2,099.24","$56,057.61"
SFO - FLL,58441017356,S-FLL-TPA-5,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/58441017356,https://www.airlines-manager.com/aircraft/show/97955540,20:00,7:59,320,"739,785$","671,757$","$2,099.24","$56,057.61"
SFO - FSD,58394056440,S-OKC-FSD-1,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/58394056440,https://www.airlines-manager.com/aircraft/show/107160378,0:30,7:59,320,"471,889$","428,607$","$1,339.40","$57,274.88"
SFO - FSD,58394056443,S-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/58394056443,https://www.airlines-manager.com/aircraft/show/107132310,2:00,9:29,112,"223,210$","197,491$","$1,763.31","$26,390.78"
SFO - FSD,58405117967,S-OKC-FSD-4,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/58405117967,https://www.airlines-manager.com/aircraft/show/107160381,3:00,10:29,320,"471,889$","428,607$","$1,339.40","$57,274.88"
SFO - FSD,58415054040,S-OKC-FSD-3,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/58415054040,https://www.airlines-manager.com/aircraft/show/107160380,8:00,15:29,320,"471,889$","428,607$","$1,339.40","$57,274.88"
SFO - FSD,58431664394,S-OKC-FSD-2,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/58431664394,https://www.airlines-manager.com/aircraft/show/107160379,16:00,23:29,291,"445,522$","403,332$","$1,386.02","$53,897.37"
SFO - GRR,58394056710,S-BHM-GRR-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/58394056710,https://www.airlines-manager.com/aircraft/show/117782583,1:00,10:44,198,"458,303$","419,852$","$2,120.46","$43,135.48"
SFO - GRR,58408651875,S-BHM-GRR-3,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/58408651875,https://www.airlines-manager.com/aircraft/show/117782567,5:45,15:29,320,"608,484$","555,512$","$1,735.98","$57,073.15"
SFO - GRR,58415054042,S-BHM-GRR-4,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/58415054042,https://www.airlines-manager.com/aircraft/show/117782566,8:00,17:44,320,"608,484$","555,512$","$1,735.98","$57,073.15"
SFO - GRR,58431664405,S-BHM-GRR-2,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/58431664405,https://www.airlines-manager.com/aircraft/show/117782568,16:00,1:44,320,"608,484$","555,512$","$1,735.98","$57,073.15"
SFO - GRR,58435221330,S-BHM-GRR-1,737-900ER,https://www.airlines-manager.com/network/showline/49872029,https://www.airlines-manager.com/network/showflight/58435221330,https://www.airlines-manager.com/aircraft/show/117782569,17:30,3:14,320,"608,484$","555,512$","$1,735.98","$57,073.15"
SFO - GSO,58394056459,S-GSO-SYR-4,737-900ER,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/58394056459,https://www.airlines-manager.com/aircraft/show/119550235,0:30,11:29,320,"687,935$","629,220$","$1,966.31","$57,288.62"
SFO - GSO,58411831120,S-GSO-SYR-5,A319-100,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/58411831120,https://www.airlines-manager.com/aircraft/show/120112473,6:00,17:14,198,"519,051$","476,182$","$2,404.96","$42,390.09"
SFO - GSO,58425449780,S-GSO-SYR-1,737-900ER,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/58425449780,https://www.airlines-manager.com/aircraft/show/120056764,12:00,22:59,320,"687,935$","629,220$","$1,966.31","$57,288.62"
SFO - GSO,58425449781,S-GSO-SYR-2,737-900ER,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/58425449781,https://www.airlines-manager.com/aircraft/show/120056763,13:00,23:59,320,"687,935$","629,220$","$1,966.31","$57,288.62"
SFO - GSO,58446475235,S-GSO-SYR-3,737-900ER,https://www.airlines-manager.com/network/showline/50555362,https://www.airlines-manager.com/network/showflight/58446475235,https://www.airlines-manager.com/aircraft/show/120056762,23:30,10:29,320,"687,935$","629,220$","$1,966.31","$57,288.62"
SFO - HKG,58443550902,S-168B-6 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/58443550902,https://www.airlines-manager.com/aircraft/show/87083947,21:15,23:59,1046,"5,282,521$","4,883,932$","$4,669.15","$1,786,804.39"
SFO - HKG,58446475221,S-168A-6 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/58446475221,https://www.airlines-manager.com/aircraft/show/88032836,23:15,1:59,1046,"5,282,521$","4,883,932$","$4,669.15","$1,786,804.39"
SFO - IAD,58394056111,S-IAD-CLT-1,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/58394056111,https://www.airlines-manager.com/aircraft/show/96135565,0:00,11:14,400,"912,332$","834,314$","$2,085.79","$74,271.28"
SFO - IAD,58405118097,S-IAD-CLT-5,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/58405118097,https://www.airlines-manager.com/aircraft/show/96135561,4:00,15:14,400,"912,332$","834,314$","$2,085.79","$74,271.28"
SFO - IAD,58411831103,S-IAD-CLT-2,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/58411831103,https://www.airlines-manager.com/aircraft/show/96135564,6:00,17:14,400,"912,332$","834,314$","$2,085.79","$74,271.28"
SFO - IAD,58425449848,S-IAD-CLT-3,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/58425449848,https://www.airlines-manager.com/aircraft/show/96135563,12:45,23:59,400,"912,332$","834,314$","$2,085.79","$74,271.28"
SFO - IAD,58435221212,S-IAD-CLT-4,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/58435221212,https://www.airlines-manager.com/aircraft/show/96135562,16:45,3:59,400,"912,332$","834,314$","$2,085.79","$74,271.28"
SFO - IAH,58408651784,S-IAH-MEX-2,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/58408651784,https://www.airlines-manager.com/aircraft/show/101045338,4:45,12:59,400,"694,602$","624,794$","$1,561.99","$75,885.91"
SFO - IAH,58411831151,S-IAH-MEX-5,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/58411831151,https://www.airlines-manager.com/aircraft/show/101045335,6:45,14:59,400,"694,602$","624,794$","$1,561.99","$75,885.91"
SFO - IAH,58425449890,S-IAH-MEX-1,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/58425449890,https://www.airlines-manager.com/aircraft/show/101045339,13:00,21:14,400,"694,602$","624,794$","$1,561.99","$75,885.91"
SFO - IAH,58431664244,S-IAH-MEX-4,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/58431664244,https://www.airlines-manager.com/aircraft/show/101045336,15:00,23:14,400,"694,602$","624,794$","$1,561.99","$75,885.91"
SFO - IAH,58438157385,S-IAH-MEX-3,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/58438157385,https://www.airlines-manager.com/aircraft/show/101045337,19:30,3:44,400,"694,602$","624,794$","$1,561.99","$75,885.91"
SFO - ICN,58408651843,S-168D-1 B2,747-400,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/58408651843,https://www.airlines-manager.com/aircraft/show/120752294,5:15,3:29,968,"4,255,893$","3,935,008$","$4,065.09","$176,986.87"
SFO - ICN,58446475222,S-168C-7 B2,747-400,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/58446475222,https://www.airlines-manager.com/aircraft/show/120752307,23:15,21:29,968,"4,255,893$","3,935,008$","$4,065.09","$176,986.87"
SFO - ICT,58394056587,S-ICT-BFF-3,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/58394056587,https://www.airlines-manager.com/aircraft/show/114912263,0:45,8:14,310,"469,158$","430,023$","$1,387.17","$57,464.10"
SFO - ICT,58415054049,S-ICT-BFF-2,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/58415054049,https://www.airlines-manager.com/aircraft/show/114912264,8:00,15:29,310,"469,158$","430,023$","$1,387.17","$57,464.10"
SFO - ICT,58431664416,S-ICT-BFF-1,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/58431664416,https://www.airlines-manager.com/aircraft/show/114912267,16:00,23:29,310,"469,158$","430,023$","$1,387.17","$57,464.10"
SFO - ICT,58435221339,S-ICT-BFF-5,ERJ-175,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/58435221339,https://www.airlines-manager.com/aircraft/show/114912306,17:30,0:59,112,"221,348$","195,492$","$1,745.46","$26,123.65"
SFO - ICT,58438157305,S-ICT-BFF-4,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/58438157305,https://www.airlines-manager.com/aircraft/show/114912268,18:45,2:14,310,"469,158$","430,023$","$1,387.17","$57,464.10"
SFO - IND,58408651839,S-IND-CVG-4,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/58408651839,https://www.airlines-manager.com/aircraft/show/99316503,5:15,14:59,310,"605,607$","555,557$","$1,792.12","$57,077.77"
SFO - IND,58411831205,S-IND-CVG-6,ERJ-175,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/58411831205,https://www.airlines-manager.com/aircraft/show/99174346,7:15,16:59,112,"284,129$","250,715$","$2,238.53","$25,758.39"
SFO - IND,58425449961,S-IND-CVG-1,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/58425449961,https://www.airlines-manager.com/aircraft/show/99316506,13:00,22:44,310,"605,607$","555,557$","$1,792.12","$57,077.77"
SFO - IND,58431664278,S-IND-CVG-3,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/58431664278,https://www.airlines-manager.com/aircraft/show/99316504,15:00,0:44,310,"605,607$","555,557$","$1,792.12","$57,077.77"
SFO - IND,58435221267,S-IND-CVG-5,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/58435221267,https://www.airlines-manager.com/aircraft/show/99316502,17:00,2:44,310,"605,607$","555,557$","$1,792.12","$57,077.77"
SFO - IND,58446475187,S-IND-CVG-2,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/58446475187,https://www.airlines-manager.com/aircraft/show/99316505,23:00,8:44,310,"605,607$","555,557$","$1,792.12","$57,077.77"
SFO - JAC,58394056603,S-MAF-FCA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/58394056603,https://www.airlines-manager.com/aircraft/show/120056761,1:00,5:59,272,"285,290$","263,927$",$970.32,"$52,961.94"
SFO - JAC,58408651803,S-MAF-FCA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/58408651803,https://www.airlines-manager.com/aircraft/show/120056758,5:00,9:59,272,"285,290$","263,927$",$970.32,"$52,961.94"
SFO - JAC,58425449863,S-MAF-FCA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/58425449863,https://www.airlines-manager.com/aircraft/show/120056759,13:00,17:59,272,"285,290$","263,927$",$970.32,"$52,961.94"
SFO - JAC,58438157188,S-MAF-FCA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/58438157188,https://www.airlines-manager.com/aircraft/show/120056760,18:15,23:14,272,"285,290$","263,927$",$970.32,"$52,961.94"
SFO - JAC,58441017440,S-MAF-FCA-5,ERJ-175,https://www.airlines-manager.com/network/showline/50555573,https://www.airlines-manager.com/network/showflight/58441017440,https://www.airlines-manager.com/aircraft/show/119652600,20:15,1:14,112,"149,834$","131,932$","$1,177.96","$26,474.65"
SFO - JAN,58394056919,S-SAV-JAN-5 B,A319-100,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/58394056919,https://www.airlines-manager.com/aircraft/show/114917486,2:15,11:29,198,"439,387$","402,942$","$2,035.06","$43,639.93"
SFO - JAN,58411831131,S-SAV-JAN-3,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/58411831131,https://www.airlines-manager.com/aircraft/show/114912269,6:15,15:29,310,"583,909$","538,452$","$1,736.94","$58,316.10"
SFO - JAN,58415054022,S-SAV-JAN-2,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/58415054022,https://www.airlines-manager.com/aircraft/show/114912266,7:45,16:59,310,"583,909$","538,452$","$1,736.94","$58,316.10"
SFO - JAN,58435221275,S-SAV-JAN-1,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/58435221275,https://www.airlines-manager.com/aircraft/show/114912265,17:00,2:14,310,"583,909$","538,452$","$1,736.94","$58,316.10"
SFO - JAN,58438157349,S-SAV-JAN-4,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/58438157349,https://www.airlines-manager.com/aircraft/show/114912270,19:00,4:14,310,"583,909$","538,452$","$1,736.94","$58,316.10"
SFO - JAX,58411831109,S-JAX-SAT-5,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/58411831109,https://www.airlines-manager.com/aircraft/show/86377315,6:00,17:14,310,"704,676$","649,607$","$2,095.51","$57,828.52"
SFO - JAX,58425449942,S-JAX-SAT-1,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/58425449942,https://www.airlines-manager.com/aircraft/show/86375568,13:00,0:14,310,"704,676$","649,607$","$2,095.51","$57,828.52"
SFO - JAX,58431664269,S-JAX-SAT-2,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/58431664269,https://www.airlines-manager.com/aircraft/show/86371267,15:00,2:14,310,"704,676$","649,607$","$2,095.51","$57,828.52"
SFO - JAX,58441017555,S-JAX-SAT-3,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/58441017555,https://www.airlines-manager.com/aircraft/show/86385102,21:00,8:14,310,"704,676$","649,607$","$2,095.51","$57,828.52"
SFO - JAX,58446475184,S-JAX-SAT-4,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/58446475184,https://www.airlines-manager.com/aircraft/show/86378760,23:00,10:14,310,"704,676$","649,607$","$2,095.51","$57,828.52"
SFO - JFK,58394056617,S-MIA-JFK-4,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/58394056617,https://www.airlines-manager.com/aircraft/show/89233034,1:00,12:59,400,"965,414$","866,916$","$2,167.29","$72,343.48"
SFO - JFK,58411831174,S-MIA-JFK-5,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/58411831174,https://www.airlines-manager.com/aircraft/show/89233035,7:00,18:59,400,"965,414$","866,916$","$2,167.29","$72,343.48"
SFO - JFK,58425449882,S-MIA-JFK-1,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/58425449882,https://www.airlines-manager.com/aircraft/show/89233032,13:00,0:59,400,"965,414$","866,916$","$2,167.29","$72,343.48"
SFO - JFK,58431664381,S-MIA-JFK-2,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/58431664381,https://www.airlines-manager.com/aircraft/show/84622093,16:00,3:59,400,"965,414$","866,916$","$2,167.29","$72,343.48"
SFO - JFK,58438157321,S-MIA-JFK-3,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/58438157321,https://www.airlines-manager.com/aircraft/show/89233031,19:00,6:59,400,"965,414$","866,916$","$2,167.29","$72,343.48"
SFO - KIX,58394056836,S-168D-3 B2,747-400,https://www.airlines-manager.com/network/showline/50769294,https://www.airlines-manager.com/network/showflight/58394056836,https://www.airlines-manager.com/aircraft/show/120752296,1:30,22:59,968,"4,000,997$","3,703,245$","$3,825.67","$172,377.58"
SFO - KIX,58438157406,S-168C-2 B2,747-400,https://www.airlines-manager.com/network/showline/50769294,https://www.airlines-manager.com/network/showflight/58438157406,https://www.airlines-manager.com/aircraft/show/120752302,19:30,16:59,968,"4,000,997$","3,703,245$","$3,825.67","$172,377.58"
SFO - KOA,58405117943,S-KOA-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/58405117943,https://www.airlines-manager.com/aircraft/show/112650101,2:45,13:59,310,"705,734$","650,862$","$2,099.55","$57,940.24"
SFO - KOA,58408651794,S-KOA-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/58408651794,https://www.airlines-manager.com/aircraft/show/112650100,4:45,15:59,310,"705,734$","650,862$","$2,099.55","$57,940.24"
SFO - KOA,58425449986,S-KOA-PWM-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/58425449986,https://www.airlines-manager.com/aircraft/show/112650091,13:00,0:14,198,"529,574$","485,575$","$2,452.40","$43,226.26"
SFO - KOA,58435221273,S-KOA-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/58435221273,https://www.airlines-manager.com/aircraft/show/112650103,17:00,4:14,310,"705,734$","650,862$","$2,099.55","$57,940.24"
SFO - KOA,58441017368,S-KOA-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/58441017368,https://www.airlines-manager.com/aircraft/show/112650102,20:00,7:14,310,"705,734$","650,862$","$2,099.55","$57,940.24"
SFO - LAS,58411831096,S-BOS-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/58411831096,https://www.airlines-manager.com/aircraft/show/104901564,6:00,9:44,338,"218,684$","179,991$",$532.52,"$48,211.88"
SFO - LAS,58411831097,S-BOS-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/58411831097,https://www.airlines-manager.com/aircraft/show/104870960,7:00,10:44,338,"218,684$","179,991$",$532.52,"$48,211.88"
SFO - LAS,58425449737,S-BOS-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/58425449737,https://www.airlines-manager.com/aircraft/show/104874465,12:00,15:44,338,"218,684$","179,991$",$532.52,"$48,211.88"
SFO - LAS,58435221183,S-BOS-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/58435221183,https://www.airlines-manager.com/aircraft/show/104901544,16:30,20:14,338,"218,684$","179,991$",$532.52,"$48,211.88"
SFO - LAS,58441017444,S-BOS-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/58441017444,https://www.airlines-manager.com/aircraft/show/104864961,20:30,0:14,338,"218,684$","179,991$",$532.52,"$48,211.88"
SFO - LAX,58394056897,S-PHL-SEA-6 B,A319-100,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/58394056897,https://www.airlines-manager.com/aircraft/show/97900730,2:00,5:29,198,"133,747$","101,733$",$513.80,"$29,205.65"
SFO - LAX,58408651760,S-PHL-SEA-1,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/58408651760,https://www.airlines-manager.com/aircraft/show/92390872,4:30,7:59,320,"176,398$","129,187$",$403.71,"$37,087.18"
SFO - LAX,58415053995,S-PHL-SEA-5,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/58415053995,https://www.airlines-manager.com/aircraft/show/92390869,7:30,10:59,320,"176,398$","129,187$",$403.71,"$37,087.18"
SFO - LAX,58415053996,S-PHL-SEA-4,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/58415053996,https://www.airlines-manager.com/aircraft/show/92390870,8:15,11:44,320,"176,398$","129,187$",$403.71,"$37,087.18"
SFO - LAX,58425449758,S-PHL-SEA-3,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/58425449758,https://www.airlines-manager.com/aircraft/show/92390873,12:00,15:29,320,"176,398$","129,187$",$403.71,"$37,087.18"
SFO - LAX,58435221214,S-PHL-SEA-2,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/58435221214,https://www.airlines-manager.com/aircraft/show/92390871,16:45,20:14,320,"176,398$","129,187$",$403.71,"$37,087.18"
SFO - LEX,58394056894,S-BTV-LEX-1,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/58394056894,https://www.airlines-manager.com/aircraft/show/112650095,2:00,11:59,310,"625,642$","578,194$","$1,865.14","$57,915.93"
SFO - LEX,58411831116,S-BTV-LEX-2,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/58411831116,https://www.airlines-manager.com/aircraft/show/112650094,6:00,15:59,310,"625,642$","578,194$","$1,865.14","$57,915.93"
SFO - LEX,58415054048,S-BTV-LEX-3,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/58415054048,https://www.airlines-manager.com/aircraft/show/112650093,8:00,17:59,310,"625,642$","578,194$","$1,865.14","$57,915.93"
SFO - LEX,58428583365,S-BTV-LEX-4,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/58428583365,https://www.airlines-manager.com/aircraft/show/112650092,14:00,23:59,310,"625,642$","578,194$","$1,865.14","$57,915.93"
SFO - LEX,58441017383,S-BTV-LEX-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/58441017383,https://www.airlines-manager.com/aircraft/show/112650089,20:00,5:59,198,"470,560$","432,514$","$2,184.41","$43,323.61"
SFO - LGB,58405118023,S-FAR-BIL-2,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/58405118023,https://www.airlines-manager.com/aircraft/show/117782585,3:15,6:44,310,"181,588$","157,489$",$508.03,"$45,212.15"
SFO - LGB,58421791574,S-FAR-BIL-1,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/58421791574,https://www.airlines-manager.com/aircraft/show/117782584,11:00,14:29,310,"181,588$","157,489$",$508.03,"$45,212.15"
SFO - LGB,58431664291,S-FAR-BIL-4,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/58431664291,https://www.airlines-manager.com/aircraft/show/117782587,15:00,18:29,310,"181,588$","157,489$",$508.03,"$45,212.15"
SFO - LGB,58443550930,S-FAR-BIL-3,A321-200,https://www.airlines-manager.com/network/showline/49872062,https://www.airlines-manager.com/network/showflight/58443550930,https://www.airlines-manager.com/aircraft/show/117782586,21:30,0:59,310,"181,588$","157,489$",$508.03,"$45,212.15"
SFO - LHR,58405117945,S-168C-4 B2,747-400,https://www.airlines-manager.com/network/showline/50769240,https://www.airlines-manager.com/network/showflight/58405117945,https://www.airlines-manager.com/aircraft/show/120752304,2:45,23:59,968,"4,060,744$","3,726,461$","$3,849.65","$175,500.52"
SFO - LHR,58446475193,S-168D-3 B2,747-400,https://www.airlines-manager.com/network/showline/50769240,https://www.airlines-manager.com/network/showflight/58446475193,https://www.airlines-manager.com/aircraft/show/120752296,23:00,20:14,968,"4,060,744$","3,726,461$","$3,849.65","$175,500.52"
SFO - LIT,58394056910,S-SDF-LIT-3,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/58394056910,https://www.airlines-manager.com/aircraft/show/94886627,2:15,10:59,310,"542,816$","499,788$","$1,612.22","$57,227.63"
SFO - LIT,58405118021,S-SDF-LIT-5,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/58405118021,https://www.airlines-manager.com/aircraft/show/106453498,3:15,11:59,310,"542,816$","499,788$","$1,612.22","$57,227.63"
SFO - LIT,58428583349,S-SDF-LIT-2,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/58428583349,https://www.airlines-manager.com/aircraft/show/94886628,14:00,22:44,310,"542,816$","499,788$","$1,612.22","$57,227.63"
SFO - LIT,58431664282,S-SDF-LIT-4,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/58431664282,https://www.airlines-manager.com/aircraft/show/106453500,15:00,23:44,310,"542,816$","499,788$","$1,612.22","$57,227.63"
SFO - LIT,58446475266,S-SDF-LIT-1,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/58446475266,https://www.airlines-manager.com/aircraft/show/106453499,23:45,8:29,310,"542,816$","499,788$","$1,612.22","$57,227.63"
SFO - MAF,58405117997,S-MAF-FCA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/58405117997,https://www.airlines-manager.com/aircraft/show/120056760,3:15,9:59,272,"388,045$","360,385$","$1,324.94","$53,522.52"
SFO - MAF,58415054057,S-MAF-FCA-5,ERJ-175,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/58415054057,https://www.airlines-manager.com/aircraft/show/119652600,8:00,14:44,112,"201,536$","177,709$","$1,586.69","$26,392.43"
SFO - MAF,58425449865,S-MAF-FCA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/58425449865,https://www.airlines-manager.com/aircraft/show/120056761,13:00,19:44,272,"388,045$","360,385$","$1,324.94","$53,522.52"
SFO - MAF,58435221232,S-MAF-FCA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/58435221232,https://www.airlines-manager.com/aircraft/show/120056758,17:00,23:44,272,"388,045$","360,385$","$1,324.94","$53,522.52"
SFO - MAF,58443550964,S-MAF-FCA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555567,https://www.airlines-manager.com/network/showflight/58443550964,https://www.airlines-manager.com/aircraft/show/120056759,22:00,4:44,272,"388,045$","360,385$","$1,324.94","$53,522.52"
SFO - MCI,58411831176,S-MCI-OMA-2,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/58411831176,https://www.airlines-manager.com/aircraft/show/88239554,7:00,14:59,320,"507,197$","458,271$","$1,432.10","$57,403.47"
SFO - MCI,58435221248,S-MCI-OMA-1,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/58435221248,https://www.airlines-manager.com/aircraft/show/88239553,17:00,0:59,320,"507,197$","458,271$","$1,432.10","$57,403.47"
SFO - MCI,58435221249,S-MCI-OMA-5 B,A319-100,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/58435221249,https://www.airlines-manager.com/aircraft/show/105223003,17:00,0:59,198,"382,381$","347,373$","$1,754.41","$43,512.28"
SFO - MCI,58438157265,S-MCI-OMA-4,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/58438157265,https://www.airlines-manager.com/aircraft/show/88239557,18:45,2:44,320,"507,197$","458,271$","$1,432.10","$57,403.47"
SFO - MCI,58446475207,S-MCI-OMA-3,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/58446475207,https://www.airlines-manager.com/aircraft/show/88239555,23:15,7:14,320,"507,197$","458,271$","$1,432.10","$57,403.47"
SFO - MCO,58394056157,S-CARGO,B737-700C,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/58394056157,https://www.airlines-manager.com/aircraft/show/120141531,0:00,11:29,0,"207,765$","117,928$",#DIV/0!,"$10,269.49"
SFO - MCO,58405118032,S-MCO-MSP-2,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/58405118032,https://www.airlines-manager.com/aircraft/show/105367367,3:30,14:59,338,"795,031$","730,062$","$2,159.95","$63,575.79"
SFO - MCO,58408651751,S-MCO-MSP-5,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/58408651751,https://www.airlines-manager.com/aircraft/show/105367364,4:30,15:59,338,"795,031$","730,062$","$2,159.95","$63,575.79"
SFO - MCO,58431664231,S-MCO-MSP-1,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/58431664231,https://www.airlines-manager.com/aircraft/show/105367368,15:00,2:29,338,"795,031$","730,062$","$2,159.95","$63,575.79"
SFO - MCO,58435221233,S-MCO-MSP-4,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/58435221233,https://www.airlines-manager.com/aircraft/show/105367365,17:00,4:29,338,"795,031$","730,062$","$2,159.95","$63,575.79"
SFO - MCO,58438157357,S-MCO-MSP-3,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/58438157357,https://www.airlines-manager.com/aircraft/show/105367366,19:15,6:44,338,"795,031$","730,062$","$2,159.95","$63,575.79"
SFO - MEM,58405117934,S-MEM-PIT-4,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/58405117934,https://www.airlines-manager.com/aircraft/show/98788934,2:45,11:59,310,"576,829$","528,105$","$1,703.56","$57,195.49"
SFO - MEM,58408651884,S-MEM-PIT-6,ERJ-175,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/58408651884,https://www.airlines-manager.com/aircraft/show/98675305,5:45,14:59,112,"270,633$","238,251$","$2,127.24","$25,803.36"
SFO - MEM,58425449959,S-MEM-PIT-1,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/58425449959,https://www.airlines-manager.com/aircraft/show/98788937,13:00,22:14,310,"576,829$","528,105$","$1,703.56","$57,195.49"
SFO - MEM,58431664411,S-MEM-PIT-3,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/58431664411,https://www.airlines-manager.com/aircraft/show/98788935,16:00,1:14,310,"576,829$","528,105$","$1,703.56","$57,195.49"
SFO - MEM,58438157344,S-MEM-PIT-5,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/58438157344,https://www.airlines-manager.com/aircraft/show/98788933,19:00,4:14,310,"576,829$","528,105$","$1,703.56","$57,195.49"
SFO - MEM,58446475264,S-MEM-PIT-2,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/58446475264,https://www.airlines-manager.com/aircraft/show/98788936,23:45,8:59,310,"576,829$","528,105$","$1,703.56","$57,195.49"
SFO - MEX,58405118073,S-IAH-MEX-3,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/58405118073,https://www.airlines-manager.com/aircraft/show/101045337,3:45,12:59,400,"773,222$","702,355$","$1,755.89","$76,067.33"
SFO - MEX,58425449889,S-IAH-MEX-2,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/58425449889,https://www.airlines-manager.com/aircraft/show/101045338,13:00,22:14,400,"773,222$","702,355$","$1,755.89","$76,067.33"
SFO - MEX,58431664243,S-IAH-MEX-5,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/58431664243,https://www.airlines-manager.com/aircraft/show/101045335,15:00,0:14,400,"773,222$","702,355$","$1,755.89","$76,067.33"
SFO - MEX,58443550887,S-IAH-MEX-1,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/58443550887,https://www.airlines-manager.com/aircraft/show/101045339,21:15,6:29,400,"773,222$","702,355$","$1,755.89","$76,067.33"
SFO - MEX,58446475206,S-IAH-MEX-4,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/58446475206,https://www.airlines-manager.com/aircraft/show/101045336,23:15,8:29,376,"734,256$","664,854$","$1,768.23","$72,005.85"
SFO - MFR,58394056647,S-TYS-MSN-2,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/58394056647,https://www.airlines-manager.com/aircraft/show/117782564,1:00,4:29,320,"173,273$","146,641$",$458.25,"$42,097.89"
SFO - MFR,58405118108,S-TYS-MSN-1,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/58405118108,https://www.airlines-manager.com/aircraft/show/117782565,4:00,7:29,320,"173,273$","146,641$",$458.25,"$42,097.89"
SFO - MFR,58431664402,S-TYS-MSN-3,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/58431664402,https://www.airlines-manager.com/aircraft/show/117782563,16:00,19:29,320,"173,273$","146,641$",$458.25,"$42,097.89"
SFO - MFR,58435221298,S-TYS-MSN-4,737-900ER,https://www.airlines-manager.com/network/showline/49872036,https://www.airlines-manager.com/network/showflight/58435221298,https://www.airlines-manager.com/aircraft/show/117782562,17:15,20:44,295,"165,089$","138,679$",$470.10,"$39,812.15"
SFO - MHT,58394056358,S-MHT-CHS-3,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/58394056358,https://www.airlines-manager.com/aircraft/show/114917463,0:15,12:44,320,"762,087$","698,102$","$2,181.57","$55,922.72"
SFO - MHT,58405118147,S-MHT-CHS-4,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/58405118147,https://www.airlines-manager.com/aircraft/show/114266973,4:15,16:44,320,"762,087$","698,102$","$2,181.57","$55,922.72"
SFO - MHT,58425449922,S-MHT-CHS-1,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/58425449922,https://www.airlines-manager.com/aircraft/show/114917465,13:00,1:29,320,"762,087$","698,102$","$2,181.57","$55,922.72"
SFO - MHT,58435221258,S-MHT-CHS-2,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/58435221258,https://www.airlines-manager.com/aircraft/show/114917464,17:00,5:29,320,"762,087$","698,102$","$2,181.57","$55,922.72"
SFO - MHT,58441017384,S-MHT-CHS-5 B,A319-100,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/58441017384,https://www.airlines-manager.com/aircraft/show/114912262,20:00,8:29,198,"571,071$","524,144$","$2,647.19","$41,987.50"
SFO - MIA,58394056615,S-MIA-JFK-1,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/58394056615,https://www.airlines-manager.com/aircraft/show/89233032,1:00,12:59,400,"958,829$","868,986$","$2,172.47","$72,516.22"
SFO - MIA,58405118096,S-MIA-JFK-2,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/58405118096,https://www.airlines-manager.com/aircraft/show/84622093,4:00,15:59,400,"958,829$","868,986$","$2,172.47","$72,516.22"
SFO - MIA,58411831173,S-MIA-JFK-3,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/58411831173,https://www.airlines-manager.com/aircraft/show/89233031,7:00,18:59,400,"958,829$","868,986$","$2,172.47","$72,516.22"
SFO - MIA,58425449883,S-MIA-JFK-4,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/58425449883,https://www.airlines-manager.com/aircraft/show/89233034,13:00,0:59,400,"958,829$","868,986$","$2,172.47","$72,516.22"
SFO - MIA,58438157322,S-MIA-JFK-5,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/58438157322,https://www.airlines-manager.com/aircraft/show/89233035,19:00,6:59,400,"958,829$","868,986$","$2,172.47","$72,516.22"
SFO - MKE,58394056428,S-CLE-MKE-1,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/58394056428,https://www.airlines-manager.com/aircraft/show/92519368,0:30,9:44,320,"586,128$","533,360$","$1,666.75","$57,764.62"
SFO - MKE,58408651850,S-CLE-MKE-4,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/58408651850,https://www.airlines-manager.com/aircraft/show/92519371,5:30,14:44,320,"586,128$","533,360$","$1,666.75","$57,764.62"
SFO - MKE,58411831153,S-CLE-MKE-3,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/58411831153,https://www.airlines-manager.com/aircraft/show/92519367,6:45,15:59,320,"586,128$","533,360$","$1,666.75","$57,764.62"
SFO - MKE,58431664387,S-CLE-MKE-2,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/58431664387,https://www.airlines-manager.com/aircraft/show/92519369,16:00,1:14,320,"586,128$","533,360$","$1,666.75","$57,764.62"
SFO - MKE,58435221374,S-CLE-MKE-5,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/58435221374,https://www.airlines-manager.com/aircraft/show/92519370,18:00,3:14,320,"586,128$","533,360$","$1,666.75","$57,764.62"
SFO - MSN,58394056920,S-TYS-MSN-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/58394056920,https://www.airlines-manager.com/aircraft/show/117782582,2:15,11:14,198,"424,215$","388,553$","$1,962.39","$43,252.65"
SFO - MSN,58411831180,S-TYS-MSN-4,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/58411831180,https://www.airlines-manager.com/aircraft/show/117782562,7:00,15:59,320,"562,482$","513,233$","$1,603.85","$57,131.69"
SFO - MSN,58411831181,S-TYS-MSN-3,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/58411831181,https://www.airlines-manager.com/aircraft/show/117782563,7:00,15:59,320,"562,482$","513,233$","$1,603.85","$57,131.69"
SFO - MSN,58431664403,S-TYS-MSN-2,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/58431664403,https://www.airlines-manager.com/aircraft/show/117782564,16:00,0:59,320,"562,482$","513,233$","$1,603.85","$57,131.69"
SFO - MSN,58438157333,S-TYS-MSN-1,737-900ER,https://www.airlines-manager.com/network/showline/49872035,https://www.airlines-manager.com/network/showflight/58438157333,https://www.airlines-manager.com/aircraft/show/117782565,19:00,3:59,320,"562,482$","513,233$","$1,603.85","$57,131.69"
SFO - MSO,58411831157,S-TUL-DSM-1,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/58411831157,https://www.airlines-manager.com/aircraft/show/108410856,6:45,11:44,320,"322,461$","288,750$",$902.34,"$57,943.14"
SFO - MSO,58415053998,S-TUL-DSM-4,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/58415053998,https://www.airlines-manager.com/aircraft/show/108410859,7:30,12:29,320,"322,461$","288,750$",$902.34,"$57,943.14"
SFO - MSO,58425449915,S-TUL-DSM-3,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/58425449915,https://www.airlines-manager.com/aircraft/show/108410858,13:00,17:59,320,"322,461$","288,750$",$902.34,"$57,943.14"
SFO - MSO,58441017552,S-TUL-DSM-2,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/58441017552,https://www.airlines-manager.com/aircraft/show/108410857,21:00,1:59,273,"293,779$","261,040$",$956.19,"$52,382.61"
SFO - MSP,58405117877,S-MCO-MSP-1,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/58405117877,https://www.airlines-manager.com/aircraft/show/105367368,2:30,10:44,338,"572,597$","523,159$","$1,547.81","$63,541.58"
SFO - MSP,58408651752,S-MCO-MSP-4,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/58408651752,https://www.airlines-manager.com/aircraft/show/105367365,4:30,12:44,338,"572,597$","523,159$","$1,547.81","$63,541.58"
SFO - MSP,58411831148,S-MCO-MSP-3,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/58411831148,https://www.airlines-manager.com/aircraft/show/105367366,6:45,14:59,338,"572,597$","523,159$","$1,547.81","$63,541.58"
SFO - MSP,58431664229,S-MCO-MSP-2,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/58431664229,https://www.airlines-manager.com/aircraft/show/105367367,15:00,23:14,338,"572,597$","523,159$","$1,547.81","$63,541.58"
SFO - MSP,58431664230,S-MCO-MSP-5,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/58431664230,https://www.airlines-manager.com/aircraft/show/105367364,16:00,0:14,338,"572,597$","523,159$","$1,547.81","$63,541.58"
SFO - MSY,58405117993,S-MSY-STL-6,ERJ-175,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/58405117993,https://www.airlines-manager.com/aircraft/show/103534666,3:00,12:29,112,"279,484$","246,810$","$2,203.66","$26,025.66"
SFO - MSY,58411831107,S-MSY-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/58411831107,https://www.airlines-manager.com/aircraft/show/98075266,6:00,15:29,320,"593,870$","539,636$","$1,686.36","$56,903.62"
SFO - MSY,58415054035,S-MSY-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/58415054035,https://www.airlines-manager.com/aircraft/show/98075264,8:00,17:29,320,"593,870$","539,636$","$1,686.36","$56,903.62"
SFO - MSY,58425449903,S-MSY-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/58425449903,https://www.airlines-manager.com/aircraft/show/98075267,13:00,22:29,320,"593,870$","539,636$","$1,686.36","$56,903.62"
SFO - MSY,58443550889,S-MSY-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/58443550889,https://www.airlines-manager.com/aircraft/show/98075265,21:15,6:44,320,"593,870$","539,636$","$1,686.36","$56,903.62"
SFO - MSY,58446475209,S-MSY-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/58446475209,https://www.airlines-manager.com/aircraft/show/98075263,23:15,8:44,320,"593,870$","539,636$","$1,686.36","$56,903.62"
SFO - NGO,58394056145,S-168C-5 B2,747-400,https://www.airlines-manager.com/network/showline/50769298,https://www.airlines-manager.com/network/showflight/58394056145,https://www.airlines-manager.com/aircraft/show/120752305,0:00,20:59,968,"3,903,860$","3,617,048$","$3,736.62","$172,377.19"
SFO - NGO,58441017420,S-168D-4 B2,747-400,https://www.airlines-manager.com/network/showline/50769298,https://www.airlines-manager.com/network/showflight/58441017420,https://www.airlines-manager.com/aircraft/show/120752297,20:15,17:14,968,"3,903,860$","3,617,048$","$3,736.62","$172,377.19"
SFO - NRT,58394056146,S-168C-6-B2,747-400,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/58394056146,https://www.airlines-manager.com/aircraft/show/120752306,0:00,20:14,968,"3,876,882$","3,579,468$","$3,697.80","$176,909.46"
SFO - NRT,58435221311,S-168D-5 B2,747-400,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/58435221311,https://www.airlines-manager.com/aircraft/show/120752298,17:15,13:29,968,"3,876,882$","3,579,468$","$3,697.80","$176,909.46"
SFO - OGG,58405117900,S-OGG-AUS-5,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/58405117900,https://www.airlines-manager.com/aircraft/show/92773477,2:30,13:44,310,"697,883$","645,321$","$2,081.68","$57,446.97"
SFO - OGG,58428583274,S-OGG-AUS-1,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/58428583274,https://www.airlines-manager.com/aircraft/show/92773481,13:30,0:44,310,"697,883$","645,321$","$2,081.68","$57,446.97"
SFO - OGG,58431664347,S-OGG-AUS-2,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/58431664347,https://www.airlines-manager.com/aircraft/show/92773480,15:30,2:44,310,"697,883$","645,321$","$2,081.68","$57,446.97"
SFO - OGG,58443550924,S-OGG-AUS-3,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/58443550924,https://www.airlines-manager.com/aircraft/show/92773479,21:30,8:44,310,"697,883$","645,321$","$2,081.68","$57,446.97"
SFO - OGG,58446475236,S-OGG-AUS-4,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/58446475236,https://www.airlines-manager.com/aircraft/show/92773478,23:30,10:44,310,"697,883$","645,321$","$2,081.68","$57,446.97"
SFO - OKC,58394056445,S-OKC-FSD-3,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/58394056445,https://www.airlines-manager.com/aircraft/show/107160380,0:30,7:59,320,"476,319$","432,077$","$1,350.24","$57,738.57"
SFO - OKC,58415054039,S-OKC-FSD-2,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/58415054039,https://www.airlines-manager.com/aircraft/show/107160379,8:00,15:29,320,"476,319$","432,077$","$1,350.24","$57,738.57"
SFO - OKC,58435221256,S-OKC-FSD-1,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/58435221256,https://www.airlines-manager.com/aircraft/show/107160378,17:00,0:29,320,"476,319$","432,077$","$1,350.24","$57,738.57"
SFO - OKC,58438157255,S-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/58438157255,https://www.airlines-manager.com/aircraft/show/107132310,18:30,1:59,112,"224,788$","198,645$","$1,773.62","$26,544.99"
SFO - OKC,58438157256,S-OKC-FSD-4,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/58438157256,https://www.airlines-manager.com/aircraft/show/107160381,19:30,2:59,320,"476,319$","432,077$","$1,350.24","$57,738.57"
SFO - OMA,58394056624,S-MCI-OMA-1,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/58394056624,https://www.airlines-manager.com/aircraft/show/88239553,1:00,8:44,320,"484,959$","439,887$","$1,374.65","$56,881.94"
SFO - OMA,58394056627,S-MCI-OMA-5 B,A319-100,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/58394056627,https://www.airlines-manager.com/aircraft/show/105223003,1:00,8:44,198,"366,607$","334,272$","$1,688.24","$43,224.83"
SFO - OMA,58405117919,S-MCI-OMA-4,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/58405117919,https://www.airlines-manager.com/aircraft/show/88239557,2:45,10:29,320,"484,959$","439,887$","$1,374.65","$56,881.94"
SFO - OMA,58411831192,S-MCI-OMA-3,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/58411831192,https://www.airlines-manager.com/aircraft/show/88239555,7:15,14:59,320,"484,959$","439,887$","$1,374.65","$56,881.94"
SFO - OMA,58431664249,S-MCI-OMA-2,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/58431664249,https://www.airlines-manager.com/aircraft/show/88239554,15:00,22:44,320,"484,959$","439,887$","$1,374.65","$56,881.94"
SFO - ONT,58408651763,S-OKC-FSD-2,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/58408651763,https://www.airlines-manager.com/aircraft/show/107160379,4:30,7:59,320,"180,494$","150,361$",$469.88,"$43,165.84"
SFO - ONT,58425449913,S-OKC-FSD-1,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/58425449913,https://www.airlines-manager.com/aircraft/show/107160378,13:00,16:29,320,"180,494$","150,361$",$469.88,"$43,165.84"
SFO - ONT,58431664319,S-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/58431664319,https://www.airlines-manager.com/aircraft/show/107132310,15:00,18:29,112,"83,245$","67,122$",$599.30,"$19,269.47"
SFO - ONT,58431664320,S-OKC-FSD-4,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/58431664320,https://www.airlines-manager.com/aircraft/show/107160381,16:00,19:29,320,"180,494$","150,361$",$469.88,"$43,165.84"
SFO - ONT,58441017551,S-OKC-FSD-3,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/58441017551,https://www.airlines-manager.com/aircraft/show/107160380,21:00,0:29,320,"180,494$","150,361$",$469.88,"$43,165.84"
SFO - ORD,58411831104,S-ORD-DTW-2,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/58411831104,https://www.airlines-manager.com/aircraft/show/101045333,6:00,14:59,400,"760,394$","672,993$","$1,682.48","$74,915.73"
SFO - ORD,58415053993,S-ORD-DTW-5,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/58415053993,https://www.airlines-manager.com/aircraft/show/101045330,7:30,16:29,400,"760,394$","672,993$","$1,682.48","$74,915.73"
SFO - ORD,58425449887,S-ORD-DTW-1,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/58425449887,https://www.airlines-manager.com/aircraft/show/101045334,13:00,21:59,400,"760,394$","672,993$","$1,682.48","$74,915.73"
SFO - ORD,58431664240,S-ORD-DTW-4,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/58431664240,https://www.airlines-manager.com/aircraft/show/101045331,15:00,23:59,400,"760,394$","672,993$","$1,682.48","$74,915.73"
SFO - ORD,58441017353,S-ORD-DTW-3,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/58441017353,https://www.airlines-manager.com/aircraft/show/101045332,20:00,4:59,400,"760,394$","672,993$","$1,682.48","$74,915.73"
SFO - ORF,58408651860,S-ORF-RIC-3,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/58408651860,https://www.airlines-manager.com/aircraft/show/108328836,5:30,17:29,310,"732,603$","676,491$","$2,182.23","$56,452.66"
SFO - ORF,58415054005,S-ORF-RIC-4,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/58415054005,https://www.airlines-manager.com/aircraft/show/108328837,7:30,19:29,310,"732,603$","676,491$","$2,182.23","$56,452.66"
SFO - ORF,58435221406,S-ORF-RIC-1,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/58435221406,https://www.airlines-manager.com/aircraft/show/108328834,18:00,5:59,310,"732,603$","676,491$","$2,182.23","$56,452.66"
SFO - ORF,58441017364,S-ORF-RIC-2,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/58441017364,https://www.airlines-manager.com/aircraft/show/108328835,20:00,7:59,310,"732,603$","676,491$","$2,182.23","$56,452.66"
SFO - ORF,58443550993,S-ORF-RIC-5 B,A319-100,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/58443550993,https://www.airlines-manager.com/aircraft/show/108328833,22:00,9:59,198,"547,743$","502,744$","$2,539.11","$41,953.60"
SFO - PBI,58405118142,S-PBI-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/58405118142,https://www.airlines-manager.com/aircraft/show/100301186,4:15,16:14,320,"734,200$","669,869$","$2,093.34","$55,900.06"
SFO - PBI,58411831129,S-PBI-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/58411831129,https://www.airlines-manager.com/aircraft/show/100301185,6:15,18:14,320,"734,200$","669,869$","$2,093.34","$55,900.06"
SFO - PBI,58435221255,S-PBI-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/58435221255,https://www.airlines-manager.com/aircraft/show/100301188,17:00,4:59,320,"734,200$","669,869$","$2,093.34","$55,900.06"
SFO - PBI,58438157328,S-PBI-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/58438157328,https://www.airlines-manager.com/aircraft/show/100301187,19:00,6:59,320,"734,200$","669,869$","$2,093.34","$55,900.06"
SFO - PBI,58441017549,S-PBI-RDU-5,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/58441017549,https://www.airlines-manager.com/aircraft/show/100301184,21:00,8:59,320,"734,200$","669,869$","$2,093.34","$55,900.06"
SFO - PDX,58394056166,S-MCO-MSP-5,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/58394056166,https://www.airlines-manager.com/aircraft/show/105367364,0:15,4:29,338,"272,269$","242,872$",$718.56,"$57,371.34"
SFO - PDX,58421791444,S-MCO-MSP-1,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/58421791444,https://www.airlines-manager.com/aircraft/show/105367368,10:45,14:59,338,"272,269$","242,872$",$718.56,"$57,371.34"
SFO - PDX,58425449846,S-MCO-MSP-4,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/58425449846,https://www.airlines-manager.com/aircraft/show/105367365,12:45,16:59,338,"272,269$","242,872$",$718.56,"$57,371.34"
SFO - PDX,58431664228,S-MCO-MSP-3,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/58431664228,https://www.airlines-manager.com/aircraft/show/105367366,15:00,19:14,338,"272,269$","242,872$",$718.56,"$57,371.34"
SFO - PDX,58446475204,S-MCO-MSP-2,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/58446475204,https://www.airlines-manager.com/aircraft/show/105367367,23:15,3:29,279,"244,160$","215,504$",$772.42,"$50,906.46"
SFO - PEK,58394056147,S-168C-7 B2,747-400,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/58394056147,https://www.airlines-manager.com/aircraft/show/120752307,0:00,23:14,968,"4,491,411$","4,124,325$","$4,260.67","$177,517.58"
SFO - PEK,58411831118,S-168D-7 B2,747-400,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/58411831118,https://www.airlines-manager.com/aircraft/show/120752300,6:00,5:14,968,"4,491,411$","4,124,325$","$4,260.67","$177,517.58"
SFO - PHL,58394056116,S-PHL-SEA-2,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/58394056116,https://www.airlines-manager.com/aircraft/show/92390871,0:00,11:44,320,"730,738$","658,186$","$2,056.83","$56,095.40"
SFO - PHL,58425449757,S-PHL-SEA-1,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/58425449757,https://www.airlines-manager.com/aircraft/show/92390872,12:00,23:44,320,"730,738$","658,186$","$2,056.83","$56,095.40"
SFO - PHL,58428583380,S-PHL-SEA-6 B,A319-100,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/58428583380,https://www.airlines-manager.com/aircraft/show/97900730,14:00,1:59,198,"548,740$","496,348$","$2,506.81","$41,419.86"
SFO - PHL,58431664253,S-PHL-SEA-5,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/58431664253,https://www.airlines-manager.com/aircraft/show/92390869,15:00,2:44,320,"730,738$","658,186$","$2,056.83","$56,095.40"
SFO - PHL,58431664254,S-PHL-SEA-4,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/58431664254,https://www.airlines-manager.com/aircraft/show/92390870,15:45,3:29,320,"730,738$","658,186$","$2,056.83","$56,095.40"
SFO - PHL,58438157362,S-PHL-SEA-3,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/58438157362,https://www.airlines-manager.com/aircraft/show/92390873,19:15,6:59,320,"730,738$","658,186$","$2,056.83","$56,095.40"
SFO - PHX,58394056806,S-BOS-PHX-1,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/58394056806,https://www.airlines-manager.com/aircraft/show/104901564,1:30,5:59,338,"323,043$","284,985$",$843.15,"$63,565.43"
SFO - PHX,58405117875,S-BOS-PHX-4,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/58405117875,https://www.airlines-manager.com/aircraft/show/104870960,2:30,6:59,338,"323,043$","284,985$",$843.15,"$63,565.43"
SFO - PHX,58405117876,S-BOS-PHX-3,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/58405117876,https://www.airlines-manager.com/aircraft/show/104874465,4:15,8:44,338,"323,043$","284,985$",$843.15,"$63,565.43"
SFO - PHX,58425449738,S-BOS-PHX-2,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/58425449738,https://www.airlines-manager.com/aircraft/show/104901544,12:00,16:29,338,"323,043$","284,985$",$843.15,"$63,565.43"
SFO - PHX,58431664371,S-BOS-PHX-5,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/58431664371,https://www.airlines-manager.com/aircraft/show/104864961,16:00,20:29,338,"323,043$","284,985$",$843.15,"$63,565.43"
SFO - PIT,58394056776,S-MEM-PIT-3,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/58394056776,https://www.airlines-manager.com/aircraft/show/98788935,1:15,11:59,310,"676,648$","621,492$","$2,004.81","$57,902.98"
SFO - PIT,58405118152,S-MEM-PIT-5,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/58405118152,https://www.airlines-manager.com/aircraft/show/98788933,4:15,14:59,310,"676,648$","621,492$","$2,004.81","$57,902.98"
SFO - PIT,58425449958,S-MEM-PIT-2,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/58425449958,https://www.airlines-manager.com/aircraft/show/98788936,13:00,23:44,310,"676,648$","621,492$","$2,004.81","$57,902.98"
SFO - PIT,58431664410,S-MEM-PIT-4,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/58431664410,https://www.airlines-manager.com/aircraft/show/98788934,16:00,2:44,310,"676,648$","621,492$","$2,004.81","$57,902.98"
SFO - PIT,58438157354,S-MEM-PIT-6,ERJ-175,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/58438157354,https://www.airlines-manager.com/aircraft/show/98675305,19:00,5:44,112,"317,025$","280,006$","$2,500.05","$26,087.52"
SFO - PIT,58443551018,S-MEM-PIT-1,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/58443551018,https://www.airlines-manager.com/aircraft/show/98788937,22:15,8:59,310,"676,648$","621,492$","$2,004.81","$57,902.98"
SFO - PSP,58405118158,S-ICT-BFF-2,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/58405118158,https://www.airlines-manager.com/aircraft/show/114912264,4:15,7:59,310,"200,274$","175,476$",$566.05,"$47,002.50"
SFO - PSP,58421791633,S-ICT-BFF-1,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/58421791633,https://www.airlines-manager.com/aircraft/show/114912267,11:45,15:29,310,"200,274$","175,476$",$566.05,"$47,002.50"
SFO - PSP,58425450008,S-ICT-BFF-5,ERJ-175,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/58425450008,https://www.airlines-manager.com/aircraft/show/114912306,13:15,16:59,112,"92,401$","76,790$",$685.63,"$20,568.75"
SFO - PSP,58431664285,S-ICT-BFF-4,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/58431664285,https://www.airlines-manager.com/aircraft/show/114912268,15:00,18:44,310,"200,274$","175,476$",$566.05,"$47,002.50"
SFO - PSP,58441017561,S-ICT-BFF-3,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/58441017561,https://www.airlines-manager.com/aircraft/show/114912263,21:00,0:44,284,"190,366$","165,867$",$584.04,"$44,428.66"
SFO - PVD,58394056137,S-PVD-BUF-4,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/58394056137,https://www.airlines-manager.com/aircraft/show/112650105,0:00,12:29,310,"763,375$","705,708$","$2,276.48","$56,532.02"
SFO - PVD,58408651827,S-PVD-BUF-5,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/58408651827,https://www.airlines-manager.com/aircraft/show/112650104,5:00,17:29,310,"763,375$","705,708$","$2,276.48","$56,532.02"
SFO - PVD,58425449975,S-PVD-BUF-1,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/58425449975,https://www.airlines-manager.com/aircraft/show/112650108,13:00,1:29,310,"763,375$","705,708$","$2,276.48","$56,532.02"
SFO - PVD,58435221274,S-PVD-BUF-2,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/58435221274,https://www.airlines-manager.com/aircraft/show/112650107,17:00,5:29,310,"763,375$","705,708$","$2,276.48","$56,532.02"
SFO - PVD,58438157347,S-PVD-BUF-3,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/58438157347,https://www.airlines-manager.com/aircraft/show/112650106,19:00,7:29,310,"763,375$","705,708$","$2,276.48","$56,532.02"
SFO - PWM,58394056408,S-KOA-PWM-5 B,A319-100,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/58394056408,https://www.airlines-manager.com/aircraft/show/112650091,0:15,12:59,198,"576,974$","530,777$","$2,680.69","$41,684.06"
SFO - PWM,58405118157,S-KOA-PWM-1,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/58405118157,https://www.airlines-manager.com/aircraft/show/112650103,4:15,16:59,310,"771,182$","713,582$","$2,301.88","$56,040.47"
SFO - PWM,58411831199,S-KOA-PWM-2,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/58411831199,https://www.airlines-manager.com/aircraft/show/112650102,7:15,19:59,310,"771,182$","713,582$","$2,301.88","$56,040.47"
SFO - PWM,58428583369,S-KOA-PWM-3,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/58428583369,https://www.airlines-manager.com/aircraft/show/112650101,14:00,2:44,310,"771,182$","713,582$","$2,301.88","$56,040.47"
SFO - PWM,58431664413,S-KOA-PWM-4,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/58431664413,https://www.airlines-manager.com/aircraft/show/112650100,16:00,4:44,310,"771,182$","713,582$","$2,301.88","$56,040.47"
SFO - RAP,58408651772,S-FAR-BIL-1,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/58408651772,https://www.airlines-manager.com/aircraft/show/117782584,4:30,10:59,310,"399,527$","365,234$","$1,178.17","$56,334.29"
SFO - RAP,58415054107,S-FAR-BIL-4,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/58415054107,https://www.airlines-manager.com/aircraft/show/117782587,8:30,14:59,310,"399,527$","365,234$","$1,178.17","$56,334.29"
SFO - RAP,58431664290,S-FAR-BIL-3,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/58431664290,https://www.airlines-manager.com/aircraft/show/117782586,15:00,21:29,310,"399,527$","365,234$","$1,178.17","$56,334.29"
SFO - RAP,58441017502,S-FAR-BIL-2,A321-200,https://www.airlines-manager.com/network/showline/49872058,https://www.airlines-manager.com/network/showflight/58441017502,https://www.airlines-manager.com/aircraft/show/117782585,20:45,3:14,292,"385,826$","352,075$","$1,205.74","$54,304.63"
SFO - RDM,58394056804,S-MAF-FCA-5,ERJ-175,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/58394056804,https://www.airlines-manager.com/aircraft/show/119652600,1:15,5:14,112,"102,798$","87,608$",$782.21,"$21,993.64"
SFO - RDM,58411831095,S-MAF-FCA-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/58411831095,https://www.airlines-manager.com/aircraft/show/120056761,6:00,9:59,272,"199,098$","180,421$",$663.31,"$45,293.97"
SFO - RDM,58425449862,S-MAF-FCA-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/58425449862,https://www.airlines-manager.com/aircraft/show/120056758,13:00,16:59,272,"199,098$","180,421$",$663.31,"$45,293.97"
SFO - RDM,58435221363,S-MAF-FCA-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/58435221363,https://www.airlines-manager.com/aircraft/show/120056759,18:00,21:59,272,"199,098$","180,421$",$663.31,"$45,293.97"
SFO - RDM,58446475203,S-MAF-FCA-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/50555576,https://www.airlines-manager.com/network/showflight/58446475203,https://www.airlines-manager.com/aircraft/show/120056760,23:15,3:14,272,"199,098$","180,421$",$663.31,"$45,293.97"
SFO - RDU,58408651815,S-PBI-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/58408651815,https://www.airlines-manager.com/aircraft/show/100301188,5:00,16:14,320,"712,851$","650,128$","$2,031.65","$57,874.90"
SFO - RDU,58411831179,S-PBI-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/58411831179,https://www.airlines-manager.com/aircraft/show/100301187,7:00,18:14,320,"712,851$","650,128$","$2,031.65","$57,874.90"
SFO - RDU,58418603212,S-PBI-RDU-5,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/58418603212,https://www.airlines-manager.com/aircraft/show/100301184,9:00,20:14,320,"712,851$","650,128$","$2,031.65","$57,874.90"
SFO - RDU,58435221254,S-PBI-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/58435221254,https://www.airlines-manager.com/aircraft/show/100301186,17:00,4:14,320,"712,851$","650,128$","$2,031.65","$57,874.90"
SFO - RDU,58438157327,S-PBI-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/58438157327,https://www.airlines-manager.com/aircraft/show/100301185,19:00,6:14,320,"712,851$","650,128$","$2,031.65","$57,874.90"
SFO - RIC,58411831115,S-ORF-RIC-1,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/58411831115,https://www.airlines-manager.com/aircraft/show/108328834,6:00,17:29,310,"726,691$","671,657$","$2,166.64","$58,489.72"
SFO - RIC,58415054047,S-ORF-RIC-2,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/58415054047,https://www.airlines-manager.com/aircraft/show/108328835,8:00,19:29,310,"726,691$","671,657$","$2,166.64","$58,489.72"
SFO - RIC,58418603368,S-ORF-RIC-5 B,A319-100,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/58418603368,https://www.airlines-manager.com/aircraft/show/108328833,10:00,21:29,198,"544,866$","500,734$","$2,528.96","$43,605.28"
SFO - RIC,58435221407,S-ORF-RIC-3,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/58435221407,https://www.airlines-manager.com/aircraft/show/108328836,18:00,5:29,310,"726,691$","671,657$","$2,166.64","$58,489.72"
SFO - RIC,58441017365,S-ORF-RIC-4,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/58441017365,https://www.airlines-manager.com/aircraft/show/108328837,20:00,7:29,310,"726,691$","671,657$","$2,166.64","$58,489.72"
SFO - RNO,58405118138,S-MCI-OMA-2,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/58405118138,https://www.airlines-manager.com/aircraft/show/88239554,4:15,6:59,320,"119,453$","93,133$",$291.04,"$34,073.05"
SFO - RNO,58428583399,S-MCI-OMA-1,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/58428583399,https://www.airlines-manager.com/aircraft/show/88239553,14:15,16:59,320,"119,453$","93,133$",$291.04,"$34,073.05"
SFO - RNO,58428583400,S-MCI-OMA-5 B,A319-100,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/58428583400,https://www.airlines-manager.com/aircraft/show/105223003,14:15,16:59,198,"90,385$","72,533$",$366.33,"$26,536.46"
SFO - RNO,58431664385,S-MCI-OMA-4,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/58431664385,https://www.airlines-manager.com/aircraft/show/88239557,16:00,18:44,320,"119,453$","93,133$",$291.04,"$34,073.05"
SFO - RNO,58441017453,S-MCI-OMA-3,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/58441017453,https://www.airlines-manager.com/aircraft/show/88239555,20:30,23:14,320,"119,453$","93,133$",$291.04,"$34,073.05"
SFO - ROC,58394056100,S-ROC-COS-2,A321neo,https://www.airlines-manager.com/network/showline/50555363,https://www.airlines-manager.com/network/showflight/58394056100,https://www.airlines-manager.com/aircraft/show/120112475,0:00,11:14,338,"771,233$","721,249$","$2,133.87","$64,206.14"
SFO - ROC,58411831150,S-ROC-COS-4,A321neo,https://www.airlines-manager.com/network/showline/50555363,https://www.airlines-manager.com/network/showflight/58411831150,https://www.airlines-manager.com/aircraft/show/120051490,6:45,17:59,338,"771,233$","721,249$","$2,133.87","$64,206.14"
SFO - ROC,58431664236,S-ROC-COS-1,A321neo,https://www.airlines-manager.com/network/showline/50555363,https://www.airlines-manager.com/network/showflight/58431664236,https://www.airlines-manager.com/aircraft/show/120112476,15:00,2:14,338,"771,233$","721,249$","$2,133.87","$64,206.14"
SFO - ROC,58441017392,S-ROC-COS-3,A321neo,https://www.airlines-manager.com/network/showline/50555363,https://www.airlines-manager.com/network/showflight/58441017392,https://www.airlines-manager.com/aircraft/show/120112474,20:15,7:29,338,"771,233$","721,249$","$2,133.87","$64,206.14"
SFO - RSW,58408651836,S-RSW-BDL-3,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/58408651836,https://www.airlines-manager.com/aircraft/show/84915100,5:15,16:59,320,"730,424$","665,610$","$2,080.03","$56,728.13"
SFO - RSW,58411831191,S-RSW-BDL-4,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/58411831191,https://www.airlines-manager.com/aircraft/show/84915101,7:15,18:59,320,"730,424$","665,610$","$2,080.03","$56,728.13"
SFO - RSW,58435221246,S-RSW-BDL-1,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/58435221246,https://www.airlines-manager.com/aircraft/show/84915098,17:00,4:44,320,"730,424$","665,610$","$2,080.03","$56,728.13"
SFO - RSW,58438157324,S-RSW-BDL-2,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/58438157324,https://www.airlines-manager.com/aircraft/show/84915099,19:00,6:44,320,"730,424$","665,610$","$2,080.03","$56,728.13"
SFO - RSW,58441017546,S-RSW-BDL-5,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/58441017546,https://www.airlines-manager.com/aircraft/show/84915102,21:00,8:44,320,"730,424$","665,610$","$2,080.03","$56,728.13"
SFO - SAN,58415054033,S-PHL-SEA-1,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/58415054033,https://www.airlines-manager.com/aircraft/show/92390872,8:00,11:44,320,"217,287$","184,448$",$576.40,"$49,405.71"
SFO - SAN,58421791504,S-PHL-SEA-5,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/58421791504,https://www.airlines-manager.com/aircraft/show/92390869,11:00,14:44,320,"217,287$","184,448$",$576.40,"$49,405.71"
SFO - SAN,58425449755,S-PHL-SEA-4,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/58425449755,https://www.airlines-manager.com/aircraft/show/92390870,12:00,15:44,320,"217,287$","184,448$",$576.40,"$49,405.71"
SFO - SAN,58431664343,S-PHL-SEA-3,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/58431664343,https://www.airlines-manager.com/aircraft/show/92390873,15:30,19:14,320,"217,287$","184,448$",$576.40,"$49,405.71"
SFO - SAN,58441017395,S-PHL-SEA-2,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/58441017395,https://www.airlines-manager.com/aircraft/show/92390871,20:15,23:59,320,"217,287$","184,448$",$576.40,"$49,405.71"
SFO - SAT,58394056377,S-JAX-SAT-1,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/58394056377,https://www.airlines-manager.com/aircraft/show/86375568,0:15,8:14,310,"498,478$","457,208$","$1,474.86","$57,270.31"
SFO - SAT,58394056379,S-JAX-SAT-2,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/58394056379,https://www.airlines-manager.com/aircraft/show/86371267,2:15,10:14,310,"498,478$","457,208$","$1,474.86","$57,270.31"
SFO - SAT,58425449943,S-JAX-SAT-3,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/58425449943,https://www.airlines-manager.com/aircraft/show/86385102,13:00,20:59,310,"498,478$","457,208$","$1,474.86","$57,270.31"
SFO - SAT,58431664270,S-JAX-SAT-4,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/58431664270,https://www.airlines-manager.com/aircraft/show/86378760,15:00,22:59,310,"498,478$","457,208$","$1,474.86","$57,270.31"
SFO - SAT,58435221302,S-JAX-SAT-5,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/58435221302,https://www.airlines-manager.com/aircraft/show/86377315,17:15,1:14,310,"498,478$","457,208$","$1,474.86","$57,270.31"
SFO - SAV,58408651880,S-SAV-JAN-1,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/58408651880,https://www.airlines-manager.com/aircraft/show/114912265,5:45,16:59,310,"696,685$","643,380$","$2,075.42","$57,274.18"
SFO - SAV,58415054023,S-SAV-JAN-4,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/58415054023,https://www.airlines-manager.com/aircraft/show/114912270,7:45,18:59,310,"696,685$","643,380$","$2,075.42","$57,274.18"
SFO - SAV,58431664295,S-SAV-JAN-5 B,A319-100,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/58431664295,https://www.airlines-manager.com/aircraft/show/114917486,15:00,2:14,198,"523,286$","480,541$","$2,426.97","$42,778.13"
SFO - SAV,58438157348,S-SAV-JAN-3,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/58438157348,https://www.airlines-manager.com/aircraft/show/114912269,19:00,6:14,310,"696,685$","643,380$","$2,075.42","$57,274.18"
SFO - SAV,58441017465,S-SAV-JAN-2,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/58441017465,https://www.airlines-manager.com/aircraft/show/114912266,20:30,7:44,310,"696,685$","643,380$","$2,075.42","$57,274.18"
SFO - SDF,58394056770,S-SDF-LIT-2,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/58394056770,https://www.airlines-manager.com/aircraft/show/94886628,1:15,10:59,310,"614,512$","564,269$","$1,820.22","$57,972.84"
SFO - SDF,58394056773,S-SDF-LIT-4,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/58394056773,https://www.airlines-manager.com/aircraft/show/106453500,2:15,11:59,310,"614,512$","564,269$","$1,820.22","$57,972.84"
SFO - SDF,58428583359,S-SDF-LIT-1,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/58428583359,https://www.airlines-manager.com/aircraft/show/106453499,14:00,23:44,310,"614,512$","564,269$","$1,820.22","$57,972.84"
SFO - SDF,58435221200,S-SDF-LIT-3,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/58435221200,https://www.airlines-manager.com/aircraft/show/94886627,16:30,2:14,310,"614,512$","564,269$","$1,820.22","$57,972.84"
SFO - SDF,58435221201,S-SDF-LIT-5,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/58435221201,https://www.airlines-manager.com/aircraft/show/106453498,17:30,3:14,310,"614,512$","564,269$","$1,820.22","$57,972.84"
SFO - SEA,58405117920,S-PHL-SEA-5,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/58405117920,https://www.airlines-manager.com/aircraft/show/92390869,2:45,7:29,320,"301,272$","257,664$",$805.20,"$54,436.06"
SFO - SEA,58405117921,S-PHL-SEA-4,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/58405117921,https://www.airlines-manager.com/aircraft/show/92390870,3:30,8:14,320,"301,272$","257,664$",$805.20,"$54,436.06"
SFO - SEA,58408651864,S-PHL-SEA-6 B,A319-100,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/58408651864,https://www.airlines-manager.com/aircraft/show/97900730,5:30,10:14,198,"229,629$","199,471$","$1,007.43","$42,141.76"
SFO - SEA,58411831177,S-PHL-SEA-3,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/58411831177,https://www.airlines-manager.com/aircraft/show/92390873,7:00,11:44,320,"301,272$","257,664$",$805.20,"$54,436.06"
SFO - SEA,58425449756,S-PHL-SEA-2,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/58425449756,https://www.airlines-manager.com/aircraft/show/92390871,12:00,16:44,320,"301,272$","257,664$",$805.20,"$54,436.06"
SFO - SEA,58446475254,S-PHL-SEA-1,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/58446475254,https://www.airlines-manager.com/aircraft/show/92390872,23:45,4:29,307,"293,875$","250,505$",$815.98,"$52,923.59"
SFO - SHA,58441017372,S-168B-4 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/58441017372,https://www.airlines-manager.com/aircraft/show/87933798,20:00,19:59,1046,"4,655,897$","4,320,364$","$4,130.37","$180,140.26"
SFO - SHA,58443550989,S-168A-4 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/58443550989,https://www.airlines-manager.com/aircraft/show/86817628,22:00,21:59,1046,"4,655,897$","4,320,364$","$4,130.37","$180,140.26"
SFO - SLC,58394056112,S-ORD-DTW-4,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/58394056112,https://www.airlines-manager.com/aircraft/show/101045331,0:00,4:29,400,"353,831$","312,930$",$782.33,"$69,798.51"
SFO - SLC,58394056113,S-ORD-DTW-2,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/58394056113,https://www.airlines-manager.com/aircraft/show/101045333,1:00,5:29,400,"353,831$","312,930$",$782.33,"$69,798.51"
SFO - SLC,58405117957,S-ORD-DTW-5,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/58405117957,https://www.airlines-manager.com/aircraft/show/101045330,3:00,7:29,400,"353,831$","312,930$",$782.33,"$69,798.51"
SFO - SLC,58415054032,S-ORD-DTW-1,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/58415054032,https://www.airlines-manager.com/aircraft/show/101045334,8:00,12:29,400,"353,831$","312,930$",$782.33,"$69,798.51"
SFO - SLC,58431664241,S-ORD-DTW-3,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/58431664241,https://www.airlines-manager.com/aircraft/show/101045332,15:00,19:29,231,"262,961$","224,728$",$972.85,"$50,125.20"
SFO - SMF,58415054098,S-SDF-LIT-1,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/58415054098,https://www.airlines-manager.com/aircraft/show/106453499,8:30,10:59,310,"83,132$","62,550$",$201.77,"$25,187.92"
SFO - SMF,58428583348,S-SDF-LIT-3,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/58428583348,https://www.airlines-manager.com/aircraft/show/94886627,14:00,16:29,310,"83,132$","62,550$",$201.77,"$25,187.92"
SFO - SMF,58431664281,S-SDF-LIT-5,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/58431664281,https://www.airlines-manager.com/aircraft/show/106453498,15:00,17:29,310,"83,132$","62,550$",$201.77,"$25,187.92"
SFO - SMF,58446475157,S-SDF-LIT-2,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/58446475157,https://www.airlines-manager.com/aircraft/show/94886628,22:45,1:14,310,"83,132$","62,550$",$201.77,"$25,187.92"
SFO - SMF,58446475158,S-SDF-LIT-4,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/58446475158,https://www.airlines-manager.com/aircraft/show/106453500,23:45,2:14,310,"83,132$","62,550$",$201.77,"$25,187.92"
SFO - STL,58411831154,S-MSY-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/58411831154,https://www.airlines-manager.com/aircraft/show/98075265,6:45,15:29,320,"557,439$","503,685$","$1,574.02","$57,673.85"
SFO - STL,58415054119,S-MSY-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/58415054119,https://www.airlines-manager.com/aircraft/show/98075263,8:45,17:29,320,"557,439$","503,685$","$1,574.02","$57,673.85"
SFO - STL,58425449990,S-MSY-STL-6,ERJ-175,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/58425449990,https://www.airlines-manager.com/aircraft/show/103534666,13:00,21:44,112,"262,228$","230,306$","$2,056.30","$26,370.92"
SFO - STL,58431664390,S-MSY-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/58431664390,https://www.airlines-manager.com/aircraft/show/98075266,16:00,0:44,320,"557,439$","503,685$","$1,574.02","$57,673.85"
SFO - STL,58435221379,S-MSY-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/58435221379,https://www.airlines-manager.com/aircraft/show/98075264,18:00,2:44,320,"557,439$","503,685$","$1,574.02","$57,673.85"
SFO - STL,58446475109,S-MSY-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/58446475109,https://www.airlines-manager.com/aircraft/show/98075267,22:30,7:14,320,"557,439$","503,685$","$1,574.02","$57,673.85"
SFO - SYR,58394056125,S-GSO-SYR-2,737-900ER,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/58394056125,https://www.airlines-manager.com/aircraft/show/120056763,0:00,11:29,320,"714,764$","654,987$","$2,046.83","$57,038.06"
SFO - SYR,58425449778,S-GSO-SYR-3,737-900ER,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/58425449778,https://www.airlines-manager.com/aircraft/show/120056762,12:00,23:29,320,"714,764$","654,987$","$2,046.83","$57,038.06"
SFO - SYR,58425449779,S-GSO-SYR-4,737-900ER,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/58425449779,https://www.airlines-manager.com/aircraft/show/119550235,13:00,0:29,320,"714,764$","654,987$","$2,046.83","$57,038.06"
SFO - SYR,58438157252,S-GSO-SYR-5,A319-100,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/58438157252,https://www.airlines-manager.com/aircraft/show/120112473,18:30,5:59,198,"537,637$","493,892$","$2,494.40","$43,009.46"
SFO - SYR,58446475181,S-GSO-SYR-1,737-900ER,https://www.airlines-manager.com/network/showline/50555358,https://www.airlines-manager.com/network/showflight/58446475181,https://www.airlines-manager.com/aircraft/show/120056764,23:00,10:29,320,"714,764$","654,987$","$2,046.83","$57,038.06"
SFO - TFU,58425449843,S-168B-3 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/58425449843,https://www.airlines-manager.com/aircraft/show/87566902,12:30,14:59,1046,"5,238,347$","4,830,688$","$4,618.25","$1,945,243.49"
SFO - TFU,58428583425,S-168A-3 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/58428583425,https://www.airlines-manager.com/aircraft/show/86483501,14:30,16:59,1046,"5,238,347$","4,830,688$","$4,618.25","$1,945,243.49"
SFO - TPA,58394056641,S-FLL-TPA-1,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/58394056641,https://www.airlines-manager.com/aircraft/show/97955544,1:00,12:14,320,"704,621$","638,570$","$1,995.53","$56,845.99"
SFO - TPA,58408651813,S-FLL-TPA-3,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/58408651813,https://www.airlines-manager.com/aircraft/show/97955542,5:00,16:14,320,"704,621$","638,570$","$1,995.53","$56,845.99"
SFO - TPA,58415054034,S-FLL-TPA-5,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/58415054034,https://www.airlines-manager.com/aircraft/show/97955540,8:00,19:14,320,"704,621$","638,570$","$1,995.53","$56,845.99"
SFO - TPA,58425449901,S-FLL-TPA-2,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/58425449901,https://www.airlines-manager.com/aircraft/show/97955543,13:00,0:14,320,"704,621$","638,570$","$1,995.53","$56,845.99"
SFO - TPA,58435221252,S-FLL-TPA-4,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/58435221252,https://www.airlines-manager.com/aircraft/show/97955541,17:00,4:14,320,"704,621$","638,570$","$1,995.53","$56,845.99"
SFO - TPA,58441017375,S-FLL-TPA-6 B,A319-100,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/58441017375,https://www.airlines-manager.com/aircraft/show/97900729,20:00,7:29,198,"531,620$","483,764$","$2,443.25","$42,127.49"
SFO - TPE,58441017373,S-168B-5 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/58441017373,https://www.airlines-manager.com/aircraft/show/87933799,20:00,21:14,1046,"4,782,404$","4,432,378$","$4,237.46","$3,593,820.00"
SFO - TPE,58443550988,S-168A-5 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/58443550988,https://www.airlines-manager.com/aircraft/show/86808589,22:00,23:14,1038,"4,756,787$","4,408,364$","$4,246.98","$3,574,349.19"
SFO - TUL,58408651788,S-TUL-DSM-2,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/58408651788,https://www.airlines-manager.com/aircraft/show/108410857,4:45,12:29,320,"493,680$","448,182$","$1,400.57","$57,954.57"
SFO - TUL,58411831190,S-TUL-DSM-5,ERJ-175,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/58411831190,https://www.airlines-manager.com/aircraft/show/108466264,7:00,14:44,112,"232,916$","205,908$","$1,838.46","$26,626.03"
SFO - TUL,58431664262,S-TUL-DSM-1,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/58431664262,https://www.airlines-manager.com/aircraft/show/108410856,15:00,22:44,320,"493,680$","448,182$","$1,400.57","$57,954.57"
SFO - TUL,58431664263,S-TUL-DSM-4,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/58431664263,https://www.airlines-manager.com/aircraft/show/108410859,15:45,23:29,320,"493,680$","448,182$","$1,400.57","$57,954.57"
SFO - TUL,58441017485,S-TUL-DSM-3,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/58441017485,https://www.airlines-manager.com/aircraft/show/108410858,20:45,4:29,320,"493,680$","448,182$","$1,400.57","$57,954.57"
SFO - TUS,58415054038,S-OKC-FSD-1,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/58415054038,https://www.airlines-manager.com/aircraft/show/107160378,8:00,12:59,320,"319,228$","284,067$",$887.71,"$57,003.41"
SFO - TUS,58418603265,S-OKC-FSD-5,ERJ-175,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/58418603265,https://www.airlines-manager.com/aircraft/show/107132310,9:30,14:29,112,"152,035$","132,268$","$1,180.96","$26,542.07"
SFO - TUS,58421791440,S-OKC-FSD-4,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/58421791440,https://www.airlines-manager.com/aircraft/show/107160381,10:30,15:29,320,"319,228$","284,067$",$887.71,"$57,003.41"
SFO - TUS,58431664395,S-OKC-FSD-3,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/58431664395,https://www.airlines-manager.com/aircraft/show/107160380,16:00,20:59,320,"319,228$","284,067$",$887.71,"$57,003.41"
SFO - TUS,58446475230,S-OKC-FSD-2,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/58446475230,https://www.airlines-manager.com/aircraft/show/107160379,23:30,4:29,320,"319,228$","284,067$",$887.71,"$57,003.41"
SFO - TYS,58408651874,S-TYS-MSN-2,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/58408651874,https://www.airlines-manager.com/aircraft/show/117782564,5:45,15:59,320,"642,888$","588,205$","$1,838.14","$57,479.32"
SFO - TYS,58415053999,S-TYS-MSN-1,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/58415053999,https://www.airlines-manager.com/aircraft/show/117782565,7:30,17:44,320,"642,888$","588,205$","$1,838.14","$57,479.32"
SFO - TYS,58431664425,S-TYS-MSN-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/58431664425,https://www.airlines-manager.com/aircraft/show/117782582,16:00,2:14,198,"483,910$","444,071$","$2,242.78","$43,394.56"
SFO - TYS,58438157392,S-TYS-MSN-3,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/58438157392,https://www.airlines-manager.com/aircraft/show/117782563,19:30,5:44,320,"642,888$","588,205$","$1,838.14","$57,479.32"
SFO - TYS,58441017487,S-TYS-MSN-4,737-900ER,https://www.airlines-manager.com/network/showline/49872033,https://www.airlines-manager.com/network/showflight/58441017487,https://www.airlines-manager.com/aircraft/show/117782562,20:45,6:59,320,"642,888$","588,205$","$1,838.14","$57,479.32"
SFO - YEG,58405118049,S-YEG-YYC-2,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/58405118049,https://www.airlines-manager.com/aircraft/show/117782560,3:30,9:59,320,"420,949$","378,331$","$1,182.28","$58,354.40"
SFO - YEG,58415054079,S-YEG-YYC-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/58415054079,https://www.airlines-manager.com/aircraft/show/117782581,8:15,14:59,198,"317,291$","287,019$","$1,449.59","$42,626.58"
SFO - YEG,58425449926,S-YEG-YYC-1,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/58425449926,https://www.airlines-manager.com/aircraft/show/117782561,13:00,19:29,320,"420,949$","378,331$","$1,182.28","$58,354.40"
SFO - YEG,58431664265,S-YEG-YYC-4,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/58431664265,https://www.airlines-manager.com/aircraft/show/116932364,15:00,21:29,320,"420,949$","378,331$","$1,182.28","$58,354.40"
SFO - YEG,58443550919,S-YEG-YYC-3,737-900ER,https://www.airlines-manager.com/network/showline/49872041,https://www.airlines-manager.com/network/showflight/58443550919,https://www.airlines-manager.com/aircraft/show/117782559,21:30,3:59,320,"420,949$","378,331$","$1,182.28","$58,354.40"
SFO - YOW,58394056314,S-YOW-CUN-3,757-300,https://www.airlines-manager.com/network/showline/50555301,https://www.airlines-manager.com/network/showflight/58394056314,https://www.airlines-manager.com/aircraft/show/120056766,0:15,11:29,400,"934,986$","864,487$","$2,161.22","$76,957.30"
SFO - YOW,58394056317,S-YOW-CUN-4,757-300,https://www.airlines-manager.com/network/showline/50555301,https://www.airlines-manager.com/network/showflight/58394056317,https://www.airlines-manager.com/aircraft/show/120056765,1:15,12:29,400,"934,986$","864,487$","$2,161.22","$76,957.30"
SFO - YOW,58425449892,S-YOW-CUN-1,757-300,https://www.airlines-manager.com/network/showline/50555301,https://www.airlines-manager.com/network/showflight/58425449892,https://www.airlines-manager.com/aircraft/show/120056768,13:00,0:14,400,"934,986$","864,487$","$2,161.22","$76,957.30"
SFO - YOW,58428583308,S-YOW-CUN-2,757-300,https://www.airlines-manager.com/network/showline/50555301,https://www.airlines-manager.com/network/showflight/58428583308,https://www.airlines-manager.com/aircraft/show/120056767,14:00,1:14,400,"934,986$","864,487$","$2,161.22","$76,957.30"
SFO - YUL,58394056485,S-YYZ-YUL-1,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/58394056485,https://www.airlines-manager.com/aircraft/show/115413609,0:45,12:29,400,"926,903$","850,879$","$2,127.20","$72,518.10"
SFO - YUL,58411831106,S-YYZ-YUL-4,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/58411831106,https://www.airlines-manager.com/aircraft/show/115413612,6:00,17:44,400,"926,903$","850,879$","$2,127.20","$72,518.10"
SFO - YUL,58428583306,S-YYZ-YUL-2,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/58428583306,https://www.airlines-manager.com/aircraft/show/115413610,14:00,1:44,400,"926,903$","850,879$","$2,127.20","$72,518.10"
SFO - YUL,58435221213,S-YYZ-YUL-3,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/58435221213,https://www.airlines-manager.com/aircraft/show/115413611,16:45,4:29,400,"926,903$","850,879$","$2,127.20","$72,518.10"
SFO - YUL,58438157263,S-YYZ-YUL- 5,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/58438157263,https://www.airlines-manager.com/aircraft/show/91126653,18:45,6:29,400,"926,903$","850,879$","$2,127.20","$72,518.10"
SFO - YVR,58394056488,S-MSY-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/58394056488,https://www.airlines-manager.com/aircraft/show/98075266,0:45,5:59,320,"331,374$","290,411$",$907.53,"$55,492.55"
SFO - YVR,58405117922,S-MSY-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/58405117922,https://www.airlines-manager.com/aircraft/show/98075264,2:45,7:59,320,"331,374$","290,411$",$907.53,"$55,492.55"
SFO - YVR,58411831194,S-MSY-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/58411831194,https://www.airlines-manager.com/aircraft/show/98075267,7:15,12:29,320,"331,374$","290,411$",$907.53,"$55,492.55"
SFO - YVR,58431664389,S-MSY-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/58431664389,https://www.airlines-manager.com/aircraft/show/98075265,16:00,21:14,320,"331,374$","290,411$",$907.53,"$55,492.55"
SFO - YVR,58435221377,S-MSY-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/58435221377,https://www.airlines-manager.com/aircraft/show/98075263,18:00,23:14,320,"331,374$","290,411$",$907.53,"$55,492.55"
SFO - YVR,58443550963,S-MSY-STL-6,ERJ-175,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/58443550963,https://www.airlines-manager.com/aircraft/show/103534666,21:45,2:59,112,"156,970$","134,156$","$1,197.82","$25,634.90"
SFO - YYC,58405118107,S-YEG-YYC-3,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/58405118107,https://www.airlines-manager.com/aircraft/show/117782559,4:00,9:59,320,"386,674$","342,885$","$1,071.52","$57,306.69"
SFO - YYC,58425449925,S-YEG-YYC-2,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/58425449925,https://www.airlines-manager.com/aircraft/show/117782560,13:00,18:59,320,"386,674$","342,885$","$1,071.52","$57,306.69"
SFO - YYC,58431664296,S-YEG-YYC-5 B,A319-100,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/58431664296,https://www.airlines-manager.com/aircraft/show/117782581,15:00,20:59,198,"290,770$","259,950$","$1,312.88","$43,445.68"
SFO - YYC,58438157391,S-YEG-YYC-1,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/58438157391,https://www.airlines-manager.com/aircraft/show/117782561,19:30,1:29,320,"386,674$","342,885$","$1,071.52","$57,306.69"
SFO - YYC,58443550918,S-YEG-YYC-4,737-900ER,https://www.airlines-manager.com/network/showline/49872044,https://www.airlines-manager.com/network/showflight/58443550918,https://www.airlines-manager.com/aircraft/show/116932364,21:30,3:29,320,"386,674$","342,885$","$1,071.52","$57,306.69"
SFO - YYZ,58394056848,S-YYZ-YUL-2,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/58394056848,https://www.airlines-manager.com/aircraft/show/115413610,1:45,12:29,400,"886,073$","807,953$","$2,019.88","$75,275.12"
SFO - YYZ,58411831105,S-YYZ-YUL-3,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/58411831105,https://www.airlines-manager.com/aircraft/show/115413611,6:00,16:44,400,"886,073$","807,953$","$2,019.88","$75,275.12"
SFO - YYZ,58415054031,S-YYZ-YUL- 5,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/58415054031,https://www.airlines-manager.com/aircraft/show/91126653,8:00,18:44,400,"886,073$","807,953$","$2,019.88","$75,275.12"
SFO - YYZ,58428583305,S-YYZ-YUL-1,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/58428583305,https://www.airlines-manager.com/aircraft/show/115413609,14:00,0:44,400,"886,073$","807,953$","$2,019.88","$75,275.12"
SFO - YYZ,58435221343,S-YYZ-YUL-4,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/58435221343,https://www.airlines-manager.com/aircraft/show/115413612,17:45,4:29,400,"886,073$","807,953$","$2,019.88","$75,275.12"
ORD - ABQ,58405117895,O-GEG-ABQ-3,737-900ER,https://www.airlines-manager.com/network/showline/51552831,https://www.airlines-manager.com/network/showflight/58405117895,https://www.airlines-manager.com/aircraft/show/123133561,2:30,8:59,320,"404,381$","348,106$","$1,087.83","$53,692.44"
ORD - ABQ,58415054054,O-GEG-ABQ-5,A319-100,https://www.airlines-manager.com/network/showline/51552831,https://www.airlines-manager.com/network/showflight/58415054054,https://www.airlines-manager.com/aircraft/show/123232505,8:00,14:29,198,"306,151$","266,850$","$1,347.73","$41,159.38"
ORD - ABQ,58421791617,O-GEG-ABQ-2,737-900ER,https://www.airlines-manager.com/network/showline/51552831,https://www.airlines-manager.com/network/showflight/58421791617,https://www.airlines-manager.com/aircraft/show/123133562,11:30,17:59,320,"404,381$","348,106$","$1,087.83","$53,692.44"
ORD - ABQ,58425449841,O-GEG-ABQ-4,737-900ER,https://www.airlines-manager.com/network/showline/51552831,https://www.airlines-manager.com/network/showflight/58425449841,https://www.airlines-manager.com/aircraft/show/123133560,12:30,18:59,320,"404,381$","348,106$","$1,087.83","$53,692.44"
ORD - ABQ,58438157395,O-GEG-ABQ-1,737-900ER,https://www.airlines-manager.com/network/showline/51552831,https://www.airlines-manager.com/network/showflight/58438157395,https://www.airlines-manager.com/aircraft/show/123133563,19:30,1:59,320,"404,381$","348,106$","$1,087.83","$53,692.44"
ORD - ALB,58405118161,O-OKC-ORF-2,A321-200,https://www.airlines-manager.com/network/showline/51776638,https://www.airlines-manager.com/network/showflight/58405118161,https://www.airlines-manager.com/aircraft/show/123757727,4:15,9:14,310,"314,668$","275,862$",$889.88,"$55,356.92"
ORD - ALB,58415054109,O-OKC-ORF-1,A321-200,https://www.airlines-manager.com/network/showline/51776638,https://www.airlines-manager.com/network/showflight/58415054109,https://www.airlines-manager.com/aircraft/show/123757728,8:30,13:29,310,"314,668$","275,862$",$889.88,"$55,356.92"
ORD - ALB,58428583294,O-OKC-ORF-5,ERJ-175,https://www.airlines-manager.com/network/showline/51776638,https://www.airlines-manager.com/network/showflight/58428583294,https://www.airlines-manager.com/aircraft/show/123133602,13:45,18:44,112,"149,537$","124,995$","$1,116.03","$25,082.61"
ORD - ALB,58435221277,O-OKC-ORF-4,A321-200,https://www.airlines-manager.com/network/showline/51776638,https://www.airlines-manager.com/network/showflight/58435221277,https://www.airlines-manager.com/aircraft/show/123757725,17:00,21:59,310,"314,668$","275,862$",$889.88,"$55,356.92"
ORD - ALB,58443551027,O-OKC-ORF-3,A321-200,https://www.airlines-manager.com/network/showline/51776638,https://www.airlines-manager.com/network/showflight/58443551027,https://www.airlines-manager.com/aircraft/show/123757726,22:15,3:14,310,"314,668$","275,862$",$889.88,"$55,356.92"
ORD - ANC,58421791576,O-ANC-TUS-1,A321-200,https://www.airlines-manager.com/network/showline/51427559,https://www.airlines-manager.com/network/showflight/58421791576,https://www.airlines-manager.com/aircraft/show/122771603,11:00,0:14,310,"801,203$","725,139$","$2,339.16","$54,796.40"
ORD - ANC,58425449980,O-ANC-TUS-2,A321-200,https://www.airlines-manager.com/network/showline/51427559,https://www.airlines-manager.com/network/showflight/58425449980,https://www.airlines-manager.com/aircraft/show/122771602,13:00,2:14,310,"801,203$","725,139$","$2,339.16","$54,796.40"
ORD - ANC,58438157309,O-ANC-TUS-3,A321-200,https://www.airlines-manager.com/network/showline/51427559,https://www.airlines-manager.com/network/showflight/58438157309,https://www.airlines-manager.com/aircraft/show/122771601,18:45,7:59,310,"801,203$","725,139$","$2,339.16","$54,796.40"
ORD - ANC,58441017536,O-ANC-TUS-4,A321-200,https://www.airlines-manager.com/network/showline/51427559,https://www.airlines-manager.com/network/showflight/58441017536,https://www.airlines-manager.com/aircraft/show/122771600,20:45,9:59,310,"801,203$","725,139$","$2,339.16","$54,796.40"
ORD - ANC,58446475165,O-ANC-TUS-5,A321-200,https://www.airlines-manager.com/network/showline/51427559,https://www.airlines-manager.com/network/showflight/58446475165,https://www.airlines-manager.com/aircraft/show/122771599,22:45,11:59,310,"801,203$","725,139$","$2,339.16","$54,796.40"
ORD - ATL,58394056420,O-ATL-YYZ-4,A321neo,https://www.airlines-manager.com/network/showline/51097511,https://www.airlines-manager.com/network/showflight/58394056420,https://www.airlines-manager.com/aircraft/show/121813378,0:30,4:59,338,"306,125$","244,388$",$723.04,"$54,510.33"
ORD - ATL,58405118133,O-ATL-YYZ-3,A321neo,https://www.airlines-manager.com/network/showline/51097511,https://www.airlines-manager.com/network/showflight/58405118133,https://www.airlines-manager.com/aircraft/show/121813379,4:15,8:44,338,"306,125$","244,388$",$723.04,"$54,510.33"
ORD - ATL,58421791475,O-ATL-YYZ-1,A321neo,https://www.airlines-manager.com/network/showline/51097511,https://www.airlines-manager.com/network/showflight/58421791475,https://www.airlines-manager.com/aircraft/show/121813381,11:00,15:29,338,"306,125$","244,388$",$723.04,"$54,510.33"
ORD - ATL,58425449874,O-ATL-YYZ-2,A321neo,https://www.airlines-manager.com/network/showline/51097511,https://www.airlines-manager.com/network/showflight/58425449874,https://www.airlines-manager.com/aircraft/show/121813380,13:00,17:29,338,"306,125$","244,388$",$723.04,"$54,510.33"
ORD - ATL,58441017542,O-ATL-YYZ-5,A321neo,https://www.airlines-manager.com/network/showline/51097511,https://www.airlines-manager.com/network/showflight/58441017542,https://www.airlines-manager.com/aircraft/show/115400545,21:00,1:29,338,"306,125$","244,388$",$723.04,"$54,510.33"
ORD - AUS,58405117987,O-FAT-AUS-5,A319-100,https://www.airlines-manager.com/network/showline/51427537,https://www.airlines-manager.com/network/showflight/58405117987,https://www.airlines-manager.com/aircraft/show/122771598,3:00,8:59,198,"284,939$","247,664$","$1,250.83","$41,392.31"
ORD - AUS,58421791541,O-FAT-AUS-3,737-900ER,https://www.airlines-manager.com/network/showline/51427537,https://www.airlines-manager.com/network/showflight/58421791541,https://www.airlines-manager.com/aircraft/show/122805429,11:00,16:59,320,"376,073$","322,509$","$1,007.84","$53,901.23"
ORD - AUS,58425449939,O-FAT-AUS-4,737-900ER,https://www.airlines-manager.com/network/showline/51427537,https://www.airlines-manager.com/network/showflight/58425449939,https://www.airlines-manager.com/aircraft/show/122805428,13:00,18:59,320,"376,073$","322,509$","$1,007.84","$53,901.23"
ORD - AUS,58441017323,O-FAT-AUS-1,737-900ER,https://www.airlines-manager.com/network/showline/51427537,https://www.airlines-manager.com/network/showflight/58441017323,https://www.airlines-manager.com/aircraft/show/122805431,19:45,1:44,320,"376,073$","322,509$","$1,007.84","$53,901.23"
ORD - AUS,58443550956,O-FAT-AUS-2,737-900ER,https://www.airlines-manager.com/network/showline/51427537,https://www.airlines-manager.com/network/showflight/58443550956,https://www.airlines-manager.com/aircraft/show/122805430,21:45,3:44,320,"376,073$","322,509$","$1,007.84","$53,901.23"
ORD - BDL,58405118085,O-EUG-BDL-4,737-900ER,https://www.airlines-manager.com/network/showline/51552953,https://www.airlines-manager.com/network/showflight/58405118085,https://www.airlines-manager.com/aircraft/show/123133556,3:45,8:59,320,"330,682$","283,441$",$885.75,"$54,160.70"
ORD - BDL,58415054020,O-EUG-BDL-3,737-900ER,https://www.airlines-manager.com/network/showline/51552953,https://www.airlines-manager.com/network/showflight/58415054020,https://www.airlines-manager.com/aircraft/show/123133557,7:45,12:59,320,"330,682$","283,441$",$885.75,"$54,160.70"
ORD - BDL,58421791615,O-EUG-BDL-2,737-900ER,https://www.airlines-manager.com/network/showline/51552953,https://www.airlines-manager.com/network/showflight/58421791615,https://www.airlines-manager.com/aircraft/show/123133558,11:30,16:44,320,"330,682$","283,441$",$885.75,"$54,160.70"
ORD - BDL,58425449995,O-EUG-BDL-5,ERJ-175,https://www.airlines-manager.com/network/showline/51552953,https://www.airlines-manager.com/network/showflight/58425449995,https://www.airlines-manager.com/aircraft/show/123133603,13:00,18:14,112,"156,993$","131,097$","$1,170.51","$25,050.38"
ORD - BDL,58443550975,O-EUG-BDL-1,737-900ER,https://www.airlines-manager.com/network/showline/51552953,https://www.airlines-manager.com/network/showflight/58443550975,https://www.airlines-manager.com/aircraft/show/123133559,22:00,3:14,320,"330,682$","283,441$",$885.75,"$54,160.70"
ORD - BFF,58394056150,O-JAX-BFF-5,A319-100,https://www.airlines-manager.com/network/showline/51552837,https://www.airlines-manager.com/network/showflight/58394056150,https://www.airlines-manager.com/aircraft/show/123232507,0:00,5:14,198,"251,849$","219,099$","$1,106.56","$41,866.05"
ORD - BFF,58405118069,O-JAX-BFF-3,A321neo,https://www.airlines-manager.com/network/showline/51552837,https://www.airlines-manager.com/network/showflight/58405118069,https://www.airlines-manager.com/aircraft/show/123232508,3:45,8:59,338,"359,710$","319,821$",$946.22,"$61,112.29"
ORD - BFF,58421791595,O-JAX-BFF-2,A321neo,https://www.airlines-manager.com/network/showline/51552837,https://www.airlines-manager.com/network/showflight/58421791595,https://www.airlines-manager.com/aircraft/show/123232509,11:15,16:29,338,"359,710$","319,821$",$946.22,"$61,112.29"
ORD - BFF,58435221292,O-JAX-BFF-1,A321neo,https://www.airlines-manager.com/network/showline/51552837,https://www.airlines-manager.com/network/showflight/58435221292,https://www.airlines-manager.com/aircraft/show/123232510,17:15,22:29,338,"359,710$","319,821$",$946.22,"$61,112.29"
ORD - BFF,58443550940,O-JAX-BFF-4,A321neo,https://www.airlines-manager.com/network/showline/51552837,https://www.airlines-manager.com/network/showflight/58443550940,https://www.airlines-manager.com/aircraft/show/121813377,21:45,2:59,338,"359,710$","319,821$",$946.22,"$61,112.29"
ORD - BHM,58394056762,O-COS-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/51889539,https://www.airlines-manager.com/network/showflight/58394056762,https://www.airlines-manager.com/aircraft/show/124069846,1:15,5:44,320,"272,987$","229,517$",$717.24,"$51,193.38"
ORD - BHM,58408651802,O-COS-BZN-5,ERJ-175,https://www.airlines-manager.com/network/showline/51889539,https://www.airlines-manager.com/network/showflight/58408651802,https://www.airlines-manager.com/aircraft/show/124069890,4:45,9:14,112,"129,675$","106,237$",$948.54,"$23,695.99"
ORD - BHM,58418603236,O-COS-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/51889539,https://www.airlines-manager.com/network/showflight/58418603236,https://www.airlines-manager.com/aircraft/show/124069843,9:15,13:44,320,"272,987$","229,517$",$717.24,"$51,193.38"
ORD - BHM,58421791599,O-COS-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/51889539,https://www.airlines-manager.com/network/showflight/58421791599,https://www.airlines-manager.com/aircraft/show/124069844,11:15,15:44,320,"272,987$","229,517$",$717.24,"$51,193.38"
ORD - BHM,58443550976,O-COS-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/51889539,https://www.airlines-manager.com/network/showflight/58443550976,https://www.airlines-manager.com/aircraft/show/124069845,22:00,2:29,320,"272,987$","229,517$",$717.24,"$51,193.38"
ORD - BNA,58394056128,O-MSY-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/51427545,https://www.airlines-manager.com/network/showflight/58394056128,https://www.airlines-manager.com/aircraft/show/122805427,0:00,3:44,320,"200,265$","157,505$",$492.20,"$42,188.84"
ORD - BNA,58411831121,O-MSY-RDU-5,A319-100,https://www.airlines-manager.com/network/showline/51427545,https://www.airlines-manager.com/network/showflight/58411831121,https://www.airlines-manager.com/aircraft/show/122771597,6:00,9:44,198,"151,654$","122,493$",$618.65,"$32,810.63"
ORD - BNA,58418603258,O-MSY-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/51427545,https://www.airlines-manager.com/network/showflight/58418603258,https://www.airlines-manager.com/aircraft/show/122390305,9:30,13:14,320,"200,265$","157,505$",$492.20,"$42,188.84"
ORD - BNA,58428583418,O-MSY-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/51427545,https://www.airlines-manager.com/network/showflight/58428583418,https://www.airlines-manager.com/aircraft/show/122805425,14:30,18:14,320,"200,265$","157,505$",$492.20,"$42,188.84"
ORD - BNA,58438157367,O-MSY-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/51427545,https://www.airlines-manager.com/network/showflight/58438157367,https://www.airlines-manager.com/aircraft/show/122805426,19:15,22:59,320,"200,265$","157,505$",$492.20,"$42,188.84"
ORD - BOI,58394056872,O-PSP-MEM-4,A321-200,https://www.airlines-manager.com/network/showline/51427552,https://www.airlines-manager.com/network/showflight/58394056872,https://www.airlines-manager.com/aircraft/show/122771605,1:45,9:29,310,"483,433$","432,129$","$1,393.96","$55,878.75"
ORD - BOI,58405118024,O-PSP-MEM-3,A321-200,https://www.airlines-manager.com/network/showline/51427552,https://www.airlines-manager.com/network/showflight/58405118024,https://www.airlines-manager.com/aircraft/show/122771606,3:15,10:59,310,"483,433$","432,129$","$1,393.96","$55,878.75"
ORD - BOI,58408651796,O-PSP-MEM-5,A321-200,https://www.airlines-manager.com/network/showline/51427552,https://www.airlines-manager.com/network/showflight/58408651796,https://www.airlines-manager.com/aircraft/show/122771604,4:45,12:29,310,"483,433$","432,129$","$1,393.96","$55,878.75"
ORD - BOI,58421791578,O-PSP-MEM-2,A321-200,https://www.airlines-manager.com/network/showline/51427552,https://www.airlines-manager.com/network/showflight/58421791578,https://www.airlines-manager.com/aircraft/show/122771607,11:00,18:44,310,"483,433$","432,129$","$1,393.96","$55,878.75"
ORD - BOI,58443550931,O-PSP-MEM-1,A321-200,https://www.airlines-manager.com/network/showline/51427552,https://www.airlines-manager.com/network/showflight/58443550931,https://www.airlines-manager.com/aircraft/show/122771608,21:30,5:14,297,"471,411$","420,618$","$1,416.22","$54,390.26"
ORD - BOS,58415054043,O-SJC-ONT-5,737-900ER,https://www.airlines-manager.com/network/showline/51202004,https://www.airlines-manager.com/network/showflight/58415054043,https://www.airlines-manager.com/aircraft/show/122278407,8:00,13:29,320,"347,821$","292,432$",$913.85,"$53,331.06"
ORD - BOS,58421791539,O-SJC-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/51202004,https://www.airlines-manager.com/network/showflight/58421791539,https://www.airlines-manager.com/aircraft/show/122278409,11:00,16:29,320,"347,821$","292,432$",$913.85,"$53,331.06"
ORD - BOS,58425449936,O-SJC-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/51202004,https://www.airlines-manager.com/network/showflight/58425449936,https://www.airlines-manager.com/aircraft/show/122278408,13:00,18:29,320,"347,821$","292,432$",$913.85,"$53,331.06"
ORD - BOS,58425449937,O-SJC-BOS,ERJ-175,https://www.airlines-manager.com/network/showline/51202004,https://www.airlines-manager.com/network/showflight/58425449937,https://www.airlines-manager.com/aircraft/show/122320232,13:15,18:44,102,"154,829$","125,082$","$1,226.29","$22,811.31"
ORD - BOS,58441017404,O-SJC-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/51202004,https://www.airlines-manager.com/network/showflight/58441017404,https://www.airlines-manager.com/aircraft/show/122278411,20:15,1:44,320,"347,821$","292,432$",$913.85,"$53,331.06"
ORD - BOS,58443551015,O-SJC-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/51202004,https://www.airlines-manager.com/network/showflight/58443551015,https://www.airlines-manager.com/aircraft/show/122278410,22:15,3:44,320,"347,821$","292,432$",$913.85,"$53,331.06"
ORD - BUF,58394056835,O-YZF-PVD-4,A321-200,https://www.airlines-manager.com/network/showline/51776654,https://www.airlines-manager.com/network/showflight/58394056835,https://www.airlines-manager.com/aircraft/show/123757733,1:30,5:29,310,"227,419$","191,882$",$618.97,"$48,171.21"
ORD - BUF,58408651833,O-YZF-PVD-5,ERJ-175,https://www.airlines-manager.com/network/showline/51776654,https://www.airlines-manager.com/network/showflight/58408651833,https://www.airlines-manager.com/aircraft/show/123757768,5:00,8:59,112,"105,727$","83,581$",$746.26,"$20,982.68"
ORD - BUF,58421791603,O-YZF-PVD-3,A321-200,https://www.airlines-manager.com/network/showline/51776654,https://www.airlines-manager.com/network/showflight/58421791603,https://www.airlines-manager.com/aircraft/show/123757734,11:15,15:14,310,"227,419$","191,882$",$618.97,"$48,171.21"
ORD - BUF,58428583424,O-YZF-PVD-2,A321-200,https://www.airlines-manager.com/network/showline/51776654,https://www.airlines-manager.com/network/showflight/58428583424,https://www.airlines-manager.com/aircraft/show/123757735,14:30,18:29,310,"227,419$","191,882$",$618.97,"$48,171.21"
ORD - BUF,58441017371,O-YZF-PVD-1,A321-200,https://www.airlines-manager.com/network/showline/51776654,https://www.airlines-manager.com/network/showflight/58441017371,https://www.airlines-manager.com/aircraft/show/123757736,20:00,23:59,310,"227,419$","191,882$",$618.97,"$48,171.21"
ORD - BUR,58394056900,O-SNA-BUR-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369092,https://www.airlines-manager.com/network/showflight/58394056900,https://www.airlines-manager.com/aircraft/show/122598444,2:15,10:59,272,"501,494$","459,540$","$1,689.49","$52,619.08"
ORD - BUR,58405118129,O-SNA-BUR-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369092,https://www.airlines-manager.com/network/showflight/58405118129,https://www.airlines-manager.com/aircraft/show/122598445,4:15,12:59,272,"501,494$","459,540$","$1,689.49","$52,619.08"
ORD - BUR,58421791460,O-SNA-BUR-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369092,https://www.airlines-manager.com/network/showflight/58421791460,https://www.airlines-manager.com/aircraft/show/122598448,11:00,19:44,272,"501,494$","459,540$","$1,689.49","$52,619.08"
ORD - BUR,58425449866,O-SNA-BUR-6,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369092,https://www.airlines-manager.com/network/showflight/58425449866,https://www.airlines-manager.com/aircraft/show/120993787,13:00,21:44,272,"501,494$","459,540$","$1,689.49","$52,619.08"
ORD - BUR,58435221316,O-SNA-BUR-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369092,https://www.airlines-manager.com/network/showflight/58435221316,https://www.airlines-manager.com/aircraft/show/122598446,17:30,2:14,272,"501,494$","459,540$","$1,689.49","$52,619.08"
ORD - BUR,58438157218,O-SNA-BUR-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369092,https://www.airlines-manager.com/network/showflight/58438157218,https://www.airlines-manager.com/aircraft/show/122598447,18:30,3:14,272,"501,494$","459,540$","$1,689.49","$52,619.08"
ORD - BWI,58394056754,O-BWI-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202040,https://www.airlines-manager.com/network/showflight/58394056754,https://www.airlines-manager.com/aircraft/show/122278393,1:15,5:44,320,"283,164$","233,570$",$729.91,"$52,097.40"
ORD - BWI,58408651856,O-BWI-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202040,https://www.airlines-manager.com/network/showflight/58408651856,https://www.airlines-manager.com/aircraft/show/122278394,5:30,9:59,320,"283,164$","233,570$",$729.91,"$52,097.40"
ORD - BWI,58415054092,O-BWI-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202040,https://www.airlines-manager.com/network/showflight/58415054092,https://www.airlines-manager.com/aircraft/show/122278395,8:30,12:59,320,"283,164$","233,570$",$729.91,"$52,097.40"
ORD - BWI,58428583435,O-BWI-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202040,https://www.airlines-manager.com/network/showflight/58428583435,https://www.airlines-manager.com/aircraft/show/122278396,14:45,19:14,320,"283,164$","233,570$",$729.91,"$52,097.40"
ORD - BWI,58443550974,O-BWI-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202040,https://www.airlines-manager.com/network/showflight/58443550974,https://www.airlines-manager.com/aircraft/show/122278392,22:00,2:29,320,"283,164$","233,570$",$729.91,"$52,097.40"
ORD - BZN,58405117896,O-COS-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/51889534,https://www.airlines-manager.com/network/showflight/58405117896,https://www.airlines-manager.com/aircraft/show/124069843,2:30,9:14,320,"416,902$","364,242$","$1,138.26","$54,095.35"
ORD - BZN,58408651768,O-COS-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/51889534,https://www.airlines-manager.com/network/showflight/58408651768,https://www.airlines-manager.com/aircraft/show/124069844,4:30,11:14,320,"416,902$","364,242$","$1,138.26","$54,095.35"
ORD - BZN,58431664331,O-COS-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/51889534,https://www.airlines-manager.com/network/showflight/58431664331,https://www.airlines-manager.com/aircraft/show/124069845,15:15,21:59,320,"416,902$","364,242$","$1,138.26","$54,095.35"
ORD - BZN,58438157240,O-COS-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/51889534,https://www.airlines-manager.com/network/showflight/58438157240,https://www.airlines-manager.com/aircraft/show/124069846,18:30,1:14,320,"416,902$","364,242$","$1,138.26","$54,095.35"
ORD - BZN,58443551000,O-COS-BZN-5,ERJ-175,https://www.airlines-manager.com/network/showline/51889534,https://www.airlines-manager.com/network/showflight/58443551000,https://www.airlines-manager.com/aircraft/show/124069890,22:00,4:44,112,"196,842$","167,067$","$1,491.67","$24,811.93"
ORD - CHS,58408651775,O-OKC-ORF-5,ERJ-175,https://www.airlines-manager.com/network/showline/51776641,https://www.airlines-manager.com/network/showflight/58408651775,https://www.airlines-manager.com/aircraft/show/123133602,4:30,9:29,112,"153,484$","128,383$","$1,146.28","$25,762.47"
ORD - CHS,58415054077,O-OKC-ORF-4,A321-200,https://www.airlines-manager.com/network/showline/51776641,https://www.airlines-manager.com/network/showflight/58415054077,https://www.airlines-manager.com/aircraft/show/123757725,8:15,13:14,310,"322,908$","283,285$",$913.82,"$56,846.49"
ORD - CHS,58428583278,O-OKC-ORF-3,A321-200,https://www.airlines-manager.com/network/showline/51776641,https://www.airlines-manager.com/network/showflight/58428583278,https://www.airlines-manager.com/aircraft/show/123757726,13:30,18:29,310,"322,908$","283,285$",$913.82,"$56,846.49"
ORD - CHS,58438157404,O-OKC-ORF-2,A321-200,https://www.airlines-manager.com/network/showline/51776641,https://www.airlines-manager.com/network/showflight/58438157404,https://www.airlines-manager.com/aircraft/show/123757727,19:30,0:29,310,"322,908$","283,285$",$913.82,"$56,846.49"
ORD - CHS,58446475220,O-OKC-ORF-1,A321-200,https://www.airlines-manager.com/network/showline/51776641,https://www.airlines-manager.com/network/showflight/58446475220,https://www.airlines-manager.com/aircraft/show/123757728,23:15,4:14,310,"322,908$","283,285$",$913.82,"$56,846.49"
ORD - CLE,58394056828,O-BWI-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202033,https://www.airlines-manager.com/network/showflight/58394056828,https://www.airlines-manager.com/aircraft/show/122278396,1:30,4:44,320,"169,173$","129,382$",$404.32,"$40,015.05"
ORD - CLE,58415054122,O-BWI-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202033,https://www.airlines-manager.com/network/showflight/58415054122,https://www.airlines-manager.com/aircraft/show/122278392,8:45,11:59,320,"169,173$","129,382$",$404.32,"$40,015.05"
ORD - CLE,58425449852,O-BWI-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202033,https://www.airlines-manager.com/network/showflight/58425449852,https://www.airlines-manager.com/aircraft/show/122278393,12:45,15:59,320,"169,173$","129,382$",$404.32,"$40,015.05"
ORD - CLE,58435221261,O-BWI-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202033,https://www.airlines-manager.com/network/showflight/58435221261,https://www.airlines-manager.com/aircraft/show/122278394,17:00,20:14,320,"169,173$","129,382$",$404.32,"$40,015.05"
ORD - CLE,58441017359,O-BWI-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202033,https://www.airlines-manager.com/network/showflight/58441017359,https://www.airlines-manager.com/aircraft/show/122278395,20:00,23:14,320,"169,173$","129,382$",$404.32,"$40,015.05"
ORD - CLT,58394056127,O-YEG-YUL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202027,https://www.airlines-manager.com/network/showflight/58394056127,https://www.airlines-manager.com/aircraft/show/122278401,0:00,4:29,320,"279,072$","224,719$",$702.25,"$50,123.20"
ORD - CLT,58405118081,O-YEG-YUL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202027,https://www.airlines-manager.com/network/showflight/58405118081,https://www.airlines-manager.com/aircraft/show/122278397,3:45,8:14,320,"279,072$","224,719$",$702.25,"$50,123.20"
ORD - CLT,58415054064,O-YEG-YUL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202027,https://www.airlines-manager.com/network/showflight/58415054064,https://www.airlines-manager.com/aircraft/show/122278398,8:15,12:44,320,"279,072$","224,719$",$702.25,"$50,123.20"
ORD - CLT,58425449855,O-YEG-YUL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202027,https://www.airlines-manager.com/network/showflight/58425449855,https://www.airlines-manager.com/aircraft/show/122278399,12:45,17:14,320,"279,072$","224,719$",$702.25,"$50,123.20"
ORD - CLT,58435221194,O-YEG-YUL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202027,https://www.airlines-manager.com/network/showflight/58435221194,https://www.airlines-manager.com/aircraft/show/122278400,16:30,20:59,320,"279,072$","224,719$",$702.25,"$50,123.20"
ORD - CLT,58446475244,O-SJC-BOS,ERJ-175,https://www.airlines-manager.com/network/showline/51202027,https://www.airlines-manager.com/network/showflight/58446475244,https://www.airlines-manager.com/aircraft/show/122320232,23:30,3:59,102,"123,921$","95,321$",$934.52,"$21,261.19"
ORD - CMH,58405118083,O-MSY-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/51427542,https://www.airlines-manager.com/network/showflight/58405118083,https://www.airlines-manager.com/aircraft/show/122805427,3:45,6:59,320,"157,444$","117,823$",$368.20,"$36,440.10"
ORD - CMH,58418603274,O-MSY-RDU-5,A319-100,https://www.airlines-manager.com/network/showline/51427542,https://www.airlines-manager.com/network/showflight/58418603274,https://www.airlines-manager.com/aircraft/show/122771597,9:45,12:59,198,"119,092$","92,208$",$465.70,"$28,517.94"
ORD - CMH,58428583344,O-MSY-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/51427542,https://www.airlines-manager.com/network/showflight/58428583344,https://www.airlines-manager.com/aircraft/show/122390305,14:00,17:14,320,"157,444$","117,823$",$368.20,"$36,440.10"
ORD - CMH,58438157202,O-MSY-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/51427542,https://www.airlines-manager.com/network/showflight/58438157202,https://www.airlines-manager.com/aircraft/show/122805425,18:15,21:29,320,"157,444$","117,823$",$368.20,"$36,440.10"
ORD - CMH,58446475183,O-MSY-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/51427542,https://www.airlines-manager.com/network/showflight/58446475183,https://www.airlines-manager.com/aircraft/show/122805426,23:00,2:14,320,"157,444$","117,823$",$368.20,"$36,440.10"
ORD - COS,58418603260,O-COS-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/51889531,https://www.airlines-manager.com/network/showflight/58418603260,https://www.airlines-manager.com/aircraft/show/124069845,9:30,15:14,320,"355,574$","304,733$",$952.29,"$53,151.10"
ORD - COS,58425449856,O-COS-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/51889531,https://www.airlines-manager.com/network/showflight/58425449856,https://www.airlines-manager.com/aircraft/show/124069846,12:45,18:29,320,"355,574$","304,733$",$952.29,"$53,151.10"
ORD - COS,58431664444,O-COS-BZN-5,ERJ-175,https://www.airlines-manager.com/network/showline/51889531,https://www.airlines-manager.com/network/showflight/58431664444,https://www.airlines-manager.com/aircraft/show/124069890,16:15,21:59,112,"168,888$","140,820$","$1,257.32","$24,561.63"
ORD - COS,58441017495,O-COS-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/51889531,https://www.airlines-manager.com/network/showflight/58441017495,https://www.airlines-manager.com/aircraft/show/124069843,20:45,2:29,320,"355,574$","304,733$",$952.29,"$53,151.10"
ORD - COS,58446475153,O-COS-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/51889531,https://www.airlines-manager.com/network/showflight/58446475153,https://www.airlines-manager.com/aircraft/show/124069844,22:45,4:29,320,"355,574$","304,733$",$952.29,"$53,151.10"
ORD - CUN,58405117928,O-LAS-PHX-1,737-900ER,https://www.airlines-manager.com/network/showline/50984856,https://www.airlines-manager.com/network/showflight/58405117928,https://www.airlines-manager.com/aircraft/show/121383380,2:45,10:29,320,"495,140$","432,164$","$1,350.51","$55,883.28"
ORD - CUN,58411831164,O-LAS-PHX-6 B,A319-100,https://www.airlines-manager.com/network/showline/50984856,https://www.airlines-manager.com/network/showflight/58411831164,https://www.airlines-manager.com/aircraft/show/121383409,6:45,14:29,198,"367,851$","323,551$","$1,634.10","$41,838.49"
ORD - CUN,58421791534,O-LAS-PHX-3,737-900ER,https://www.airlines-manager.com/network/showline/50984856,https://www.airlines-manager.com/network/showflight/58421791534,https://www.airlines-manager.com/aircraft/show/121383378,11:00,18:44,320,"495,140$","432,164$","$1,350.51","$55,883.28"
ORD - CUN,58425449931,O-LAS-PHX-5,737-900ER,https://www.airlines-manager.com/network/showline/50984856,https://www.airlines-manager.com/network/showflight/58425449931,https://www.airlines-manager.com/aircraft/show/121383376,13:00,20:44,320,"495,140$","432,164$","$1,350.51","$55,883.28"
ORD - CUN,58438157292,O-LAS-PHX-2,737-900ER,https://www.airlines-manager.com/network/showline/50984856,https://www.airlines-manager.com/network/showflight/58438157292,https://www.airlines-manager.com/aircraft/show/121383379,18:45,2:29,320,"495,140$","432,164$","$1,350.51","$55,883.28"
ORD - CUN,58441017493,O-LAS-PHX-4,737-900ER,https://www.airlines-manager.com/network/showline/50984856,https://www.airlines-manager.com/network/showflight/58441017493,https://www.airlines-manager.com/aircraft/show/121383377,20:45,4:29,295,"461,127$","399,370$","$1,353.80","$51,642.67"
ORD - CVG,58408651855,O-BWI-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202038,https://www.airlines-manager.com/network/showflight/58408651855,https://www.airlines-manager.com/aircraft/show/122278392,5:30,8:44,320,"137,892$","96,513$",$301.60,"$29,849.38"
ORD - CVG,58415054123,O-BWI-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202038,https://www.airlines-manager.com/network/showflight/58415054123,https://www.airlines-manager.com/aircraft/show/122278393,8:45,11:59,320,"137,892$","96,513$",$301.60,"$29,849.38"
ORD - CVG,58428583284,O-BWI-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202038,https://www.airlines-manager.com/network/showflight/58428583284,https://www.airlines-manager.com/aircraft/show/122278394,13:45,16:59,320,"137,892$","96,513$",$301.60,"$29,849.38"
ORD - CVG,58435221218,O-BWI-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202038,https://www.airlines-manager.com/network/showflight/58435221218,https://www.airlines-manager.com/aircraft/show/122278395,16:45,19:59,320,"137,892$","96,513$",$301.60,"$29,849.38"
ORD - CVG,58443551014,O-BWI-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202038,https://www.airlines-manager.com/network/showflight/58443551014,https://www.airlines-manager.com/aircraft/show/122278396,22:15,1:29,320,"137,892$","96,513$",$301.60,"$29,849.38"
ORD - DEN,58418603251,O-YVR-GDL-1,757-300,https://www.airlines-manager.com/network/showline/50984812,https://www.airlines-manager.com/network/showflight/58418603251,https://www.airlines-manager.com/aircraft/show/121383385,9:30,14:59,400,"454,070$","375,676$",$939.19,"$68,512.34"
ORD - DEN,58421791491,O-YVR-GDL-4,757-300,https://www.airlines-manager.com/network/showline/50984812,https://www.airlines-manager.com/network/showflight/58421791491,https://www.airlines-manager.com/aircraft/show/121383382,11:00,16:29,400,"454,070$","375,676$",$939.19,"$68,512.34"
ORD - DEN,58425449893,O-YVR-GDL-5,757-300,https://www.airlines-manager.com/network/showline/50984812,https://www.airlines-manager.com/network/showflight/58425449893,https://www.airlines-manager.com/aircraft/show/121383381,13:00,18:29,400,"454,070$","375,676$",$939.19,"$68,512.34"
ORD - DEN,58441017311,O-YVR-GDL-2,757-300,https://www.airlines-manager.com/network/showline/50984812,https://www.airlines-manager.com/network/showflight/58441017311,https://www.airlines-manager.com/aircraft/show/121383384,19:45,1:14,400,"454,070$","375,676$",$939.19,"$68,512.34"
ORD - DEN,58443550943,O-YVR-GDL-3,757-300,https://www.airlines-manager.com/network/showline/50984812,https://www.airlines-manager.com/network/showflight/58443550943,https://www.airlines-manager.com/aircraft/show/121383383,21:45,3:14,400,"454,070$","375,676$",$939.19,"$68,512.34"
ORD - DFW,58415054059,O-OAK-SMF-3,A321neo,https://www.airlines-manager.com/network/showline/51097509,https://www.airlines-manager.com/network/showflight/58415054059,https://www.airlines-manager.com/aircraft/show/121813394,8:15,13:29,338,"366,158$","307,249$",$909.02,"$58,710.00"
ORD - DFW,58421791481,O-OAK-SMF-2,A321neo,https://www.airlines-manager.com/network/showline/51097509,https://www.airlines-manager.com/network/showflight/58421791481,https://www.airlines-manager.com/aircraft/show/121813395,11:00,16:14,338,"366,158$","307,249$",$909.02,"$58,710.00"
ORD - DFW,58425449879,O-OAK-SMF-5,A321neo,https://www.airlines-manager.com/network/showline/51097509,https://www.airlines-manager.com/network/showflight/58425449879,https://www.airlines-manager.com/aircraft/show/121813392,13:00,18:14,338,"366,158$","307,249$",$909.02,"$58,710.00"
ORD - DFW,58441017393,O-OAK-SMF-1,A321neo,https://www.airlines-manager.com/network/showline/51097509,https://www.airlines-manager.com/network/showflight/58441017393,https://www.airlines-manager.com/aircraft/show/121813396,20:15,1:29,338,"366,158$","307,249$",$909.02,"$58,710.00"
ORD - DFW,58443551003,O-OAK-SMF-4,A321neo,https://www.airlines-manager.com/network/showline/51097509,https://www.airlines-manager.com/network/showflight/58443551003,https://www.airlines-manager.com/aircraft/show/121813393,22:15,3:29,338,"366,158$","307,249$",$909.02,"$58,710.00"
ORD - DSM,58405117995,O-SYR-LIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/51889533,https://www.airlines-manager.com/network/showflight/58405117995,https://www.airlines-manager.com/aircraft/show/124069889,3:00,6:14,112,"71,859$","52,161$",$465.72,"$16,132.27"
ORD - DSM,58425450000,O-SYR-LIT-4,737-900ER,https://www.airlines-manager.com/network/showline/51889533,https://www.airlines-manager.com/network/showflight/58425450000,https://www.airlines-manager.com/aircraft/show/124069839,13:15,16:29,320,"156,890$","119,231$",$372.60,"$36,875.57"
ORD - DSM,58438157239,O-SYR-LIT-3,737-900ER,https://www.airlines-manager.com/network/showline/51889533,https://www.airlines-manager.com/network/showflight/58438157239,https://www.airlines-manager.com/aircraft/show/124069840,18:30,21:44,320,"156,890$","119,231$",$372.60,"$36,875.57"
ORD - DSM,58443550958,O-SYR-LIT-2,737-900ER,https://www.airlines-manager.com/network/showline/51889533,https://www.airlines-manager.com/network/showflight/58443550958,https://www.airlines-manager.com/aircraft/show/124069841,21:45,0:59,320,"156,890$","119,231$",$372.60,"$36,875.57"
ORD - DSM,58446475262,O-SYR-LIT-1,737-900ER,https://www.airlines-manager.com/network/showline/51889533,https://www.airlines-manager.com/network/showflight/58446475262,https://www.airlines-manager.com/aircraft/show/124069842,23:45,2:59,320,"156,890$","119,231$",$372.60,"$36,875.57"
ORD - DTW,58408651780,O-SJD-FLL-1,A321neo,https://www.airlines-manager.com/network/showline/51097518,https://www.airlines-manager.com/network/showflight/58408651780,https://www.airlines-manager.com/aircraft/show/121813386,4:45,7:44,338,"144,008$","104,535$",$309.28,"$35,039.66"
ORD - DTW,58421791476,O-SJD-FLL-5,A321neo,https://www.airlines-manager.com/network/showline/51097518,https://www.airlines-manager.com/network/showflight/58421791476,https://www.airlines-manager.com/aircraft/show/121813382,11:00,13:59,338,"144,008$","104,535$",$309.28,"$35,039.66"
ORD - DTW,58428583299,O-SJD-FLL-4,A321neo,https://www.airlines-manager.com/network/showline/51097518,https://www.airlines-manager.com/network/showflight/58428583299,https://www.airlines-manager.com/aircraft/show/121813383,14:00,16:59,338,"144,008$","104,535$",$309.28,"$35,039.66"
ORD - DTW,58435221341,O-SJD-FLL-2,A321neo,https://www.airlines-manager.com/network/showline/51097518,https://www.airlines-manager.com/network/showflight/58435221341,https://www.airlines-manager.com/aircraft/show/121813385,17:45,20:44,338,"144,008$","104,535$",$309.28,"$35,039.66"
ORD - DTW,58441017304,O-SJD-FLL-3,A321neo,https://www.airlines-manager.com/network/showline/51097518,https://www.airlines-manager.com/network/showflight/58441017304,https://www.airlines-manager.com/aircraft/show/121813384,19:45,22:44,338,"144,008$","104,535$",$309.28,"$35,039.66"
ORD - ELP,58394056889,O-GEG-ABQ-1,737-900ER,https://www.airlines-manager.com/network/showline/51552832,https://www.airlines-manager.com/network/showflight/58394056889,https://www.airlines-manager.com/aircraft/show/123133563,2:00,8:59,320,"433,597$","377,481$","$1,179.63","$54,054.56"
ORD - ELP,58421791616,O-GEG-ABQ-3,737-900ER,https://www.airlines-manager.com/network/showline/51552832,https://www.airlines-manager.com/network/showflight/58421791616,https://www.airlines-manager.com/aircraft/show/123133561,11:30,18:29,320,"433,597$","377,481$","$1,179.63","$54,054.56"
ORD - ELP,58428583426,O-GEG-ABQ-5,A319-100,https://www.airlines-manager.com/network/showline/51552832,https://www.airlines-manager.com/network/showflight/58428583426,https://www.airlines-manager.com/aircraft/show/123232505,14:30,21:29,198,"327,692$","288,306$","$1,456.09","$41,284.87"
ORD - ELP,58435221391,O-GEG-ABQ-2,737-900ER,https://www.airlines-manager.com/network/showline/51552832,https://www.airlines-manager.com/network/showflight/58435221391,https://www.airlines-manager.com/aircraft/show/123133562,18:00,0:59,320,"433,597$","377,481$","$1,179.63","$54,054.56"
ORD - ELP,58438157339,O-GEG-ABQ-4,737-900ER,https://www.airlines-manager.com/network/showline/51552832,https://www.airlines-manager.com/network/showflight/58438157339,https://www.airlines-manager.com/aircraft/show/123133560,19:00,1:59,320,"433,597$","377,481$","$1,179.63","$54,054.56"
ORD - EUG,58394056909,O-EUG-BDL-2,737-900ER,https://www.airlines-manager.com/network/showline/51552952,https://www.airlines-manager.com/network/showflight/58394056909,https://www.airlines-manager.com/aircraft/show/123133558,2:15,11:14,320,"568,481$","506,209$","$1,581.90","$56,349.80"
ORD - EUG,58405118128,O-EUG-BDL-5,ERJ-175,https://www.airlines-manager.com/network/showline/51552952,https://www.airlines-manager.com/network/showflight/58405118128,https://www.airlines-manager.com/aircraft/show/123133603,4:00,12:59,112,"267,208$","230,899$","$2,061.60","$25,703.04"
ORD - EUG,58425449941,O-EUG-BDL-1,737-900ER,https://www.airlines-manager.com/network/showline/51552952,https://www.airlines-manager.com/network/showflight/58425449941,https://www.airlines-manager.com/aircraft/show/123133559,13:00,21:59,320,"568,481$","506,209$","$1,581.90","$56,349.80"
ORD - EUG,58438157294,O-EUG-BDL-4,737-900ER,https://www.airlines-manager.com/network/showline/51552952,https://www.airlines-manager.com/network/showflight/58438157294,https://www.airlines-manager.com/aircraft/show/123133556,18:45,3:44,320,"568,481$","506,209$","$1,581.90","$56,349.80"
ORD - EUG,58446475152,O-EUG-BDL-3,737-900ER,https://www.airlines-manager.com/network/showline/51552952,https://www.airlines-manager.com/network/showflight/58446475152,https://www.airlines-manager.com/aircraft/show/123133557,22:45,7:44,320,"568,481$","506,209$","$1,581.90","$56,349.80"
ORD - FAI,58394056921,O-FAI-MFR-5,A319-100,https://www.airlines-manager.com/network/showline/51552942,https://www.airlines-manager.com/network/showflight/58394056921,https://www.airlines-manager.com/aircraft/show/123232506,2:15,15:14,198,"586,712$","527,495$","$2,664.12","$40,628.63"
ORD - FAI,58421791623,O-FAI-MFR-1,A321-200,https://www.airlines-manager.com/network/showline/51552942,https://www.airlines-manager.com/network/showflight/58421791623,https://www.airlines-manager.com/aircraft/show/123232513,11:30,0:29,310,"784,096$","710,225$","$2,291.05","$54,702.82"
ORD - FAI,58428583277,O-FAI-MFR-2,A321-200,https://www.airlines-manager.com/network/showline/51552942,https://www.airlines-manager.com/network/showflight/58428583277,https://www.airlines-manager.com/aircraft/show/123232512,13:30,2:29,310,"784,096$","710,225$","$2,291.05","$54,702.82"
ORD - FAI,58441017468,O-FAI-MFR-3,A321-200,https://www.airlines-manager.com/network/showline/51552942,https://www.airlines-manager.com/network/showflight/58441017468,https://www.airlines-manager.com/aircraft/show/123232511,20:30,9:29,310,"784,096$","710,225$","$2,291.05","$54,702.82"
ORD - FAI,58446475125,O-FAI-MFR-4,A321-200,https://www.airlines-manager.com/network/showline/51552942,https://www.airlines-manager.com/network/showflight/58446475125,https://www.airlines-manager.com/aircraft/show/123032787,22:30,11:29,310,"784,096$","710,225$","$2,291.05","$54,702.82"
ORD - FAT,58394056760,O-FAT-AUS-4,737-900ER,https://www.airlines-manager.com/network/showline/51427539,https://www.airlines-manager.com/network/showflight/58394056760,https://www.airlines-manager.com/aircraft/show/122805428,1:15,9:59,320,"554,989$","492,693$","$1,539.67","$56,415.23"
ORD - FAT,58421791542,O-FAT-AUS-1,737-900ER,https://www.airlines-manager.com/network/showline/51427539,https://www.airlines-manager.com/network/showflight/58421791542,https://www.airlines-manager.com/aircraft/show/122805431,11:00,19:44,320,"554,989$","492,693$","$1,539.67","$56,415.23"
ORD - FAT,58425449940,O-FAT-AUS-2,737-900ER,https://www.airlines-manager.com/network/showline/51427539,https://www.airlines-manager.com/network/showflight/58425449940,https://www.airlines-manager.com/aircraft/show/122805430,13:00,21:44,320,"554,989$","492,693$","$1,539.67","$56,415.23"
ORD - FAT,58438157213,O-FAT-AUS-5,A319-100,https://www.airlines-manager.com/network/showline/51427539,https://www.airlines-manager.com/network/showflight/58438157213,https://www.airlines-manager.com/aircraft/show/122771598,18:15,2:59,198,"418,292$","374,000$","$1,888.89","$42,824.43"
ORD - FAT,58446475213,O-FAT-AUS-3,737-900ER,https://www.airlines-manager.com/network/showline/51427539,https://www.airlines-manager.com/network/showflight/58446475213,https://www.airlines-manager.com/aircraft/show/122805429,23:15,7:59,320,"554,989$","492,693$","$1,539.67","$56,415.23"
ORD - FLL,58405118134,O-SJD-FLL-5,A321neo,https://www.airlines-manager.com/network/showline/51097513,https://www.airlines-manager.com/network/showflight/58405118134,https://www.airlines-manager.com/aircraft/show/121813382,4:15,10:59,338,"461,291$","412,065$","$1,219.13","$61,197.77"
ORD - FLL,58411831170,O-SJD-FLL-4,A321neo,https://www.airlines-manager.com/network/showline/51097513,https://www.airlines-manager.com/network/showflight/58411831170,https://www.airlines-manager.com/aircraft/show/121813383,7:00,13:44,338,"461,291$","412,065$","$1,219.13","$61,197.77"
ORD - FLL,58421791477,O-SJD-FLL-2,A321neo,https://www.airlines-manager.com/network/showline/51097513,https://www.airlines-manager.com/network/showflight/58421791477,https://www.airlines-manager.com/aircraft/show/121813385,11:00,17:44,338,"461,291$","412,065$","$1,219.13","$61,197.77"
ORD - FLL,58425449875,O-SJD-FLL-3,A321neo,https://www.airlines-manager.com/network/showline/51097513,https://www.airlines-manager.com/network/showflight/58425449875,https://www.airlines-manager.com/aircraft/show/121813384,13:00,19:44,338,"461,291$","412,065$","$1,219.13","$61,197.77"
ORD - FLL,58443550966,O-SJD-FLL-1,A321neo,https://www.airlines-manager.com/network/showline/51097513,https://www.airlines-manager.com/network/showflight/58443550966,https://www.airlines-manager.com/aircraft/show/121813386,22:00,4:44,338,"461,291$","412,065$","$1,219.13","$61,197.77"
ORD - GDL,58394056731,O-YVR-GDL-4,757-300,https://www.airlines-manager.com/network/showline/50984857,https://www.airlines-manager.com/network/showflight/58394056731,https://www.airlines-manager.com/aircraft/show/121383382,1:15,9:59,400,"718,924$","645,325$","$1,613.31","$73,892.18"
ORD - GDL,58405118003,O-YVR-GDL-5,757-300,https://www.airlines-manager.com/network/showline/50984857,https://www.airlines-manager.com/network/showflight/58405118003,https://www.airlines-manager.com/aircraft/show/121383381,3:15,11:59,400,"718,924$","645,325$","$1,613.31","$73,892.18"
ORD - GDL,58421791492,O-YVR-GDL-2,757-300,https://www.airlines-manager.com/network/showline/50984857,https://www.airlines-manager.com/network/showflight/58421791492,https://www.airlines-manager.com/aircraft/show/121383384,11:00,19:44,400,"718,924$","645,325$","$1,613.31","$73,892.18"
ORD - GDL,58425449894,O-YVR-GDL-3,757-300,https://www.airlines-manager.com/network/showline/50984857,https://www.airlines-manager.com/network/showflight/58425449894,https://www.airlines-manager.com/aircraft/show/121383383,13:00,21:44,400,"718,924$","645,325$","$1,613.31","$73,892.18"
ORD - GDL,58446475251,O-YVR-GDL-1,757-300,https://www.airlines-manager.com/network/showline/50984857,https://www.airlines-manager.com/network/showflight/58446475251,https://www.airlines-manager.com/aircraft/show/121383385,23:45,8:29,331,"613,091$","543,371$","$1,641.60","$62,218.05"
ORD - GEG,58394056656,O-GEG-ABQ-2,737-900ER,https://www.airlines-manager.com/network/showline/51552836,https://www.airlines-manager.com/network/showflight/58394056656,https://www.airlines-manager.com/aircraft/show/123133562,1:00,8:59,320,"500,965$","442,283$","$1,382.13","$55,400.79"
ORD - GEG,58408651767,O-GEG-ABQ-4,737-900ER,https://www.airlines-manager.com/network/showline/51552836,https://www.airlines-manager.com/network/showflight/58408651767,https://www.airlines-manager.com/aircraft/show/123133560,4:30,12:29,320,"500,965$","442,283$","$1,382.13","$55,400.79"
ORD - GEG,58421791618,O-GEG-ABQ-1,737-900ER,https://www.airlines-manager.com/network/showline/51552836,https://www.airlines-manager.com/network/showflight/58421791618,https://www.airlines-manager.com/aircraft/show/123133563,11:30,19:29,320,"500,965$","442,283$","$1,382.13","$55,400.79"
ORD - GEG,58438157238,O-GEG-ABQ-3,737-900ER,https://www.airlines-manager.com/network/showline/51552836,https://www.airlines-manager.com/network/showflight/58438157238,https://www.airlines-manager.com/aircraft/show/123133561,18:30,2:29,320,"500,965$","442,283$","$1,382.13","$55,400.79"
ORD - GEG,58443550934,O-GEG-ABQ-5,A319-100,https://www.airlines-manager.com/network/showline/51552836,https://www.airlines-manager.com/network/showflight/58443550934,https://www.airlines-manager.com/aircraft/show/123232505,21:30,5:29,198,"378,407$","336,897$","$1,701.50","$42,200.04"
ORD - GRR,58394056843,O-RDM-MHT-5,ERJ-175,https://www.airlines-manager.com/network/showline/51776645,https://www.airlines-manager.com/network/showflight/58394056843,https://www.airlines-manager.com/aircraft/show/123757767,1:30,4:14,112,"40,589$","22,507$",$200.96,"$8,234.27"
ORD - GRR,58408651842,O-RDM-MHT-4,A321-200,https://www.airlines-manager.com/network/showline/51776645,https://www.airlines-manager.com/network/showflight/58408651842,https://www.airlines-manager.com/aircraft/show/123757729,5:15,7:59,310,"94,761$","65,020$",$209.74,"$23,787.80"
ORD - GRR,58418603244,O-RDM-MHT-3,A321-200,https://www.airlines-manager.com/network/showline/51776645,https://www.airlines-manager.com/network/showflight/58418603244,https://www.airlines-manager.com/aircraft/show/123757730,9:15,11:59,310,"94,761$","65,020$",$209.74,"$23,787.80"
ORD - GRR,58425450003,O-RDM-MHT-2,A321-200,https://www.airlines-manager.com/network/showline/51776645,https://www.airlines-manager.com/network/showflight/58425450003,https://www.airlines-manager.com/aircraft/show/123757731,13:15,15:59,310,"94,761$","65,020$",$209.74,"$23,787.80"
ORD - GRR,58435221225,O-RDM-MHT-1,A321-200,https://www.airlines-manager.com/network/showline/51776645,https://www.airlines-manager.com/network/showflight/58435221225,https://www.airlines-manager.com/aircraft/show/123757732,16:45,19:29,310,"94,761$","65,020$",$209.74,"$23,787.80"
ORD - IAD,58408651766,O-YEG-YUL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202029,https://www.airlines-manager.com/network/showflight/58408651766,https://www.airlines-manager.com/aircraft/show/122278401,4:30,8:59,320,"276,176$","225,598$",$704.99,"$50,319.26"
ORD - IAD,58415054063,O-YEG-YUL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202029,https://www.airlines-manager.com/network/showflight/58415054063,https://www.airlines-manager.com/aircraft/show/122278397,8:15,12:44,320,"276,176$","225,598$",$704.99,"$50,319.26"
ORD - IAD,58425449854,O-YEG-YUL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202029,https://www.airlines-manager.com/network/showflight/58425449854,https://www.airlines-manager.com/aircraft/show/122278398,12:45,17:14,320,"276,176$","225,598$",$704.99,"$50,319.26"
ORD - IAD,58435221300,O-YEG-YUL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202029,https://www.airlines-manager.com/network/showflight/58435221300,https://www.airlines-manager.com/aircraft/show/122278399,17:15,21:44,320,"276,176$","225,598$",$704.99,"$50,319.26"
ORD - IAD,58441017554,O-YEG-YUL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202029,https://www.airlines-manager.com/network/showflight/58441017554,https://www.airlines-manager.com/aircraft/show/122278400,21:00,1:29,320,"276,176$","225,598$",$704.99,"$50,319.26"
ORD - IND,58408651791,O-BWI-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202035,https://www.airlines-manager.com/network/showflight/58408651791,https://www.airlines-manager.com/aircraft/show/122278396,4:45,7:29,320,"100,654$","62,283$",$194.63,"$22,786.46"
ORD - IND,58425449851,O-BWI-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202035,https://www.airlines-manager.com/network/showflight/58425449851,https://www.airlines-manager.com/aircraft/show/122278392,12:45,15:29,320,"100,654$","62,283$",$194.63,"$22,786.46"
ORD - IND,58431664407,O-BWI-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202035,https://www.airlines-manager.com/network/showflight/58431664407,https://www.airlines-manager.com/aircraft/show/122278393,16:00,18:44,320,"100,654$","62,283$",$194.63,"$22,786.46"
ORD - IND,58441017403,O-BWI-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202035,https://www.airlines-manager.com/network/showflight/58441017403,https://www.airlines-manager.com/aircraft/show/122278394,20:15,22:59,320,"100,654$","62,283$",$194.63,"$22,786.46"
ORD - IND,58446475212,O-BWI-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202035,https://www.airlines-manager.com/network/showflight/58446475212,https://www.airlines-manager.com/aircraft/show/122278395,23:15,1:59,306,"97,949$","59,645$",$194.92,"$21,821.34"
ORD - JAC,58408651750,O-SNA-BUR-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369093,https://www.airlines-manager.com/network/showflight/58408651750,https://www.airlines-manager.com/aircraft/show/122598448,4:30,10:59,272,"371,489$","337,126$","$1,239.43","$51,998.87"
ORD - JAC,58421791459,O-SNA-BUR-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369093,https://www.airlines-manager.com/network/showflight/58421791459,https://www.airlines-manager.com/aircraft/show/122598446,11:00,17:29,272,"371,489$","337,126$","$1,239.43","$51,998.87"
ORD - JAC,58425449736,O-SNA-BUR-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369093,https://www.airlines-manager.com/network/showflight/58425449736,https://www.airlines-manager.com/aircraft/show/122598447,12:00,18:29,272,"371,489$","337,126$","$1,239.43","$51,998.87"
ORD - JAC,58441017301,O-SNA-BUR-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369093,https://www.airlines-manager.com/network/showflight/58441017301,https://www.airlines-manager.com/aircraft/show/122598444,19:45,2:14,272,"371,489$","337,126$","$1,239.43","$51,998.87"
ORD - JAC,58443550937,O-SNA-BUR-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/51369093,https://www.airlines-manager.com/network/showflight/58443550937,https://www.airlines-manager.com/aircraft/show/122598445,21:45,4:14,272,"371,489$","337,126$","$1,239.43","$51,998.87"
ORD - JAX,58405118038,O-JAX-BFF-2,A321neo,https://www.airlines-manager.com/network/showline/51552833,https://www.airlines-manager.com/network/showflight/58405118038,https://www.airlines-manager.com/aircraft/show/123232509,3:30,8:59,338,"373,862$","332,318$",$983.19,"$60,605.11"
ORD - JAX,58421791629,O-JAX-BFF-1,A321neo,https://www.airlines-manager.com/network/showline/51552833,https://www.airlines-manager.com/network/showflight/58421791629,https://www.airlines-manager.com/aircraft/show/123232510,11:45,17:14,338,"373,862$","332,318$",$983.19,"$60,605.11"
ORD - JAX,58431664432,O-JAX-BFF-4,A321neo,https://www.airlines-manager.com/network/showline/51552833,https://www.airlines-manager.com/network/showflight/58431664432,https://www.airlines-manager.com/aircraft/show/121813377,16:15,21:44,338,"373,862$","332,318$",$983.19,"$60,605.11"
ORD - JAX,58438157253,O-JAX-BFF-5,A319-100,https://www.airlines-manager.com/network/showline/51552833,https://www.airlines-manager.com/network/showflight/58438157253,https://www.airlines-manager.com/aircraft/show/123232507,18:30,23:59,198,"261,654$","227,516$","$1,149.07","$41,492.28"
ORD - JAX,58443551004,O-JAX-BFF-3,A321neo,https://www.airlines-manager.com/network/showline/51552833,https://www.airlines-manager.com/network/showflight/58443551004,https://www.airlines-manager.com/aircraft/show/123232508,22:15,3:44,338,"373,862$","332,318$",$983.19,"$60,605.11"
ORD - JFK,58415054015,O-SJD-FLL-1,A321neo,https://www.airlines-manager.com/network/showline/51097514,https://www.airlines-manager.com/network/showflight/58415054015,https://www.airlines-manager.com/aircraft/show/121813386,7:45,12:44,338,"349,274$","293,007$",$866.88,"$58,797.39"
ORD - JFK,58428583396,O-SJD-FLL-5,A321neo,https://www.airlines-manager.com/network/showline/51097514,https://www.airlines-manager.com/network/showflight/58428583396,https://www.airlines-manager.com/aircraft/show/121813382,14:15,19:14,338,"349,274$","293,007$",$866.88,"$58,797.39"
ORD - JFK,58435221234,O-SJD-FLL-4,A321neo,https://www.airlines-manager.com/network/showline/51097514,https://www.airlines-manager.com/network/showflight/58435221234,https://www.airlines-manager.com/aircraft/show/121813383,17:00,21:59,338,"349,274$","293,007$",$866.88,"$58,797.39"
ORD - JFK,58441017478,O-SJD-FLL-2,A321neo,https://www.airlines-manager.com/network/showline/51097514,https://www.airlines-manager.com/network/showflight/58441017478,https://www.airlines-manager.com/aircraft/show/121813385,20:45,1:44,338,"349,274$","293,007$",$866.88,"$58,797.39"
ORD - JFK,58446475134,O-SJD-FLL-3,A321neo,https://www.airlines-manager.com/network/showline/51097514,https://www.airlines-manager.com/network/showflight/58446475134,https://www.airlines-manager.com/aircraft/show/121813384,22:45,3:44,338,"349,274$","293,007$",$866.88,"$58,797.39"
ORD - JNU,58394056607,O-JNU-2,A321neo,https://www.airlines-manager.com/network/showline/51776308,https://www.airlines-manager.com/network/showflight/58394056607,https://www.airlines-manager.com/aircraft/show/123757738,1:00,11:59,338,"752,127$","691,009$","$2,044.41","$62,914.32"
ORD - JNU,58425449746,O-JNU-1,A321neo,https://www.airlines-manager.com/network/showline/51776308,https://www.airlines-manager.com/network/showflight/58425449746,https://www.airlines-manager.com/aircraft/show/123757737,12:00,22:59,338,"752,127$","691,009$","$2,044.41","$62,914.32"
ORD - JNU,58428583301,O-JNU-2,A321neo,https://www.airlines-manager.com/network/showline/51776308,https://www.airlines-manager.com/network/showflight/58428583301,https://www.airlines-manager.com/aircraft/show/123757738,14:00,0:59,338,"752,127$","691,009$","$2,044.41","$62,914.32"
ORD - JNU,58446475175,O-JNU-1,A321neo,https://www.airlines-manager.com/network/showline/51776308,https://www.airlines-manager.com/network/showflight/58446475175,https://www.airlines-manager.com/aircraft/show/123757737,23:00,9:59,338,"752,127$","691,009$","$2,044.41","$62,914.32"
ORD - LAS,58405117892,O-LAS-PHX-2,737-900ER,https://www.airlines-manager.com/network/showline/50984816,https://www.airlines-manager.com/network/showflight/58405117892,https://www.airlines-manager.com/aircraft/show/121383379,2:30,10:29,320,"510,546$","431,117$","$1,347.24","$54,002.13"
ORD - LAS,58408651765,O-LAS-PHX-4,737-900ER,https://www.airlines-manager.com/network/showline/50984816,https://www.airlines-manager.com/network/showflight/58408651765,https://www.airlines-manager.com/aircraft/show/121383377,4:30,12:29,320,"510,546$","431,117$","$1,347.24","$54,002.13"
ORD - LAS,58421791536,O-LAS-PHX-1,737-900ER,https://www.airlines-manager.com/network/showline/50984816,https://www.airlines-manager.com/network/showflight/58421791536,https://www.airlines-manager.com/aircraft/show/121383380,11:00,18:59,320,"510,546$","431,117$","$1,347.24","$54,002.13"
ORD - LAS,58431664298,O-LAS-PHX-6 B,A319-100,https://www.airlines-manager.com/network/showline/50984816,https://www.airlines-manager.com/network/showflight/58431664298,https://www.airlines-manager.com/aircraft/show/121383409,15:00,22:59,198,"385,071$","329,701$","$1,665.16","$41,298.66"
ORD - LAS,58438157291,O-LAS-PHX-3,737-900ER,https://www.airlines-manager.com/network/showline/50984816,https://www.airlines-manager.com/network/showflight/58438157291,https://www.airlines-manager.com/aircraft/show/121383378,18:45,2:44,320,"510,546$","431,117$","$1,347.24","$54,002.13"
ORD - LAS,58441017491,O-LAS-PHX-5,737-900ER,https://www.airlines-manager.com/network/showline/50984816,https://www.airlines-manager.com/network/showflight/58441017491,https://www.airlines-manager.com/aircraft/show/121383376,20:45,4:44,320,"510,546$","431,117$","$1,347.24","$54,002.13"
ORD - LAX,58394056816,O-LAX-SEA-2,757-300,https://www.airlines-manager.com/network/showline/50984815,https://www.airlines-manager.com/network/showflight/58394056816,https://www.airlines-manager.com/aircraft/show/121383389,1:30,10:14,400,"735,340$","642,060$","$1,605.15","$73,518.32"
ORD - LAX,58405118045,O-LAX-SEA-4,757-300,https://www.airlines-manager.com/network/showline/50984815,https://www.airlines-manager.com/network/showflight/58405118045,https://www.airlines-manager.com/aircraft/show/121383387,3:30,12:14,400,"735,340$","642,060$","$1,605.15","$73,518.32"
ORD - LAX,58431664247,O-LAX-SEA-1,757-300,https://www.airlines-manager.com/network/showline/50984815,https://www.airlines-manager.com/network/showflight/58431664247,https://www.airlines-manager.com/aircraft/show/121383390,15:00,23:44,400,"735,340$","642,060$","$1,605.15","$73,518.32"
ORD - LAX,58435221245,O-LAX-SEA-3,757-300,https://www.airlines-manager.com/network/showline/50984815,https://www.airlines-manager.com/network/showflight/58435221245,https://www.airlines-manager.com/aircraft/show/121383388,17:00,1:44,400,"735,340$","642,060$","$1,605.15","$73,518.32"
ORD - LAX,58438157323,O-LAX-SEA-5,757-300,https://www.airlines-manager.com/network/showline/50984815,https://www.airlines-manager.com/network/showflight/58438157323,https://www.airlines-manager.com/aircraft/show/121383386,19:00,3:44,400,"735,340$","642,060$","$1,605.15","$73,518.32"
ORD - LGB,58394056370,O-RNO-LGB-1,737-900ER,https://www.airlines-manager.com/network/showline/51202005,https://www.airlines-manager.com/network/showflight/58394056370,https://www.airlines-manager.com/aircraft/show/122278406,0:15,8:59,320,"554,961$","491,541$","$1,536.07","$56,283.32"
ORD - LGB,58394056374,O-RNO-LGB-2,737-900ER,https://www.airlines-manager.com/network/showline/51202005,https://www.airlines-manager.com/network/showflight/58394056374,https://www.airlines-manager.com/aircraft/show/122278405,2:15,10:59,320,"554,961$","491,541$","$1,536.07","$56,283.32"
ORD - LGB,58425449933,O-RNO-LGB-5,737-900ER,https://www.airlines-manager.com/network/showline/51202005,https://www.airlines-manager.com/network/showflight/58425449933,https://www.airlines-manager.com/aircraft/show/122278402,13:00,21:44,320,"554,961$","491,541$","$1,536.07","$56,283.32"
ORD - LGB,58431664356,O-RNO-LGB-3,737-900ER,https://www.airlines-manager.com/network/showline/51202005,https://www.airlines-manager.com/network/showflight/58431664356,https://www.airlines-manager.com/aircraft/show/122278404,15:45,0:29,320,"554,961$","491,541$","$1,536.07","$56,283.32"
ORD - LGB,58435221351,O-RNO-LGB-4,737-900ER,https://www.airlines-manager.com/network/showline/51202005,https://www.airlines-manager.com/network/showflight/58435221351,https://www.airlines-manager.com/aircraft/show/122278403,17:45,2:29,320,"554,961$","491,541$","$1,536.07","$56,283.32"
ORD - LIT,58405118148,O-SYR-LIT-4,737-900ER,https://www.airlines-manager.com/network/showline/51889530,https://www.airlines-manager.com/network/showflight/58405118148,https://www.airlines-manager.com/aircraft/show/124069839,4:15,8:29,320,"251,927$","210,167$",$656.77,"$49,645.75"
ORD - LIT,58418603259,O-SYR-LIT-3,737-900ER,https://www.airlines-manager.com/network/showline/51889530,https://www.airlines-manager.com/network/showflight/58418603259,https://www.airlines-manager.com/aircraft/show/124069840,9:30,13:44,320,"251,927$","210,167$",$656.77,"$49,645.75"
ORD - LIT,58425450001,O-SYR-LIT-2,737-900ER,https://www.airlines-manager.com/network/showline/51889530,https://www.airlines-manager.com/network/showflight/58425450001,https://www.airlines-manager.com/aircraft/show/124069841,13:15,17:29,320,"251,927$","210,167$",$656.77,"$49,645.75"
ORD - LIT,58431664330,O-SYR-LIT-1,737-900ER,https://www.airlines-manager.com/network/showline/51889530,https://www.airlines-manager.com/network/showflight/58431664330,https://www.airlines-manager.com/aircraft/show/124069842,15:15,19:29,320,"251,927$","210,167$",$656.77,"$49,645.75"
ORD - LIT,58438157257,O-SYR-LIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/51889530,https://www.airlines-manager.com/network/showflight/58438157257,https://www.airlines-manager.com/aircraft/show/124069889,18:30,22:44,112,"118,764$","96,275$",$859.60,"$22,742.13"
ORD - MCI,58418603243,O-PSP-MEM-1,A321-200,https://www.airlines-manager.com/network/showline/51427554,https://www.airlines-manager.com/network/showflight/58418603243,https://www.airlines-manager.com/aircraft/show/122771608,9:15,12:59,310,"198,566$","162,135$",$523.02,"$43,429.02"
ORD - MCI,58428583275,O-PSP-MEM-4,A321-200,https://www.airlines-manager.com/network/showline/51427554,https://www.airlines-manager.com/network/showflight/58428583275,https://www.airlines-manager.com/aircraft/show/122771605,13:30,17:14,310,"198,566$","162,135$",$523.02,"$43,429.02"
ORD - MCI,58431664293,O-PSP-MEM-3,A321-200,https://www.airlines-manager.com/network/showline/51427554,https://www.airlines-manager.com/network/showflight/58431664293,https://www.airlines-manager.com/aircraft/show/122771606,15:00,18:44,310,"198,566$","162,135$",$523.02,"$43,429.02"
ORD - MCI,58435221206,O-PSP-MEM-5,A321-200,https://www.airlines-manager.com/network/showline/51427554,https://www.airlines-manager.com/network/showflight/58435221206,https://www.airlines-manager.com/aircraft/show/122771604,16:30,20:14,310,"198,566$","162,135$",$523.02,"$43,429.02"
ORD - MCI,58446475166,O-PSP-MEM-2,A321-200,https://www.airlines-manager.com/network/showline/51427554,https://www.airlines-manager.com/network/showflight/58446475166,https://www.airlines-manager.com/aircraft/show/122771607,22:45,2:29,310,"198,566$","162,135$",$523.02,"$43,429.02"
ORD - MCO,58415054061,O-LAX-SEA-1,757-300,https://www.airlines-manager.com/network/showline/50984818,https://www.airlines-manager.com/network/showflight/58415054061,https://www.airlines-manager.com/aircraft/show/121383390,8:15,14:14,400,"486,600$","419,633$","$1,049.08","$70,133.65"
ORD - MCO,58421791493,O-LAX-SEA-3,757-300,https://www.airlines-manager.com/network/showline/50984818,https://www.airlines-manager.com/network/showflight/58421791493,https://www.airlines-manager.com/aircraft/show/121383388,11:00,16:59,400,"486,600$","419,633$","$1,049.08","$70,133.65"
ORD - MCO,58425449895,O-LAX-SEA-5,757-300,https://www.airlines-manager.com/network/showline/50984818,https://www.airlines-manager.com/network/showflight/58425449895,https://www.airlines-manager.com/aircraft/show/121383386,13:00,18:59,400,"486,600$","419,633$","$1,049.08","$70,133.65"
ORD - MCO,58438157386,O-LAX-SEA-2,757-300,https://www.airlines-manager.com/network/showline/50984818,https://www.airlines-manager.com/network/showflight/58438157386,https://www.airlines-manager.com/aircraft/show/121383389,19:30,1:29,400,"486,600$","419,633$","$1,049.08","$70,133.65"
ORD - MCO,58443550911,O-LAX-SEA-4,757-300,https://www.airlines-manager.com/network/showline/50984818,https://www.airlines-manager.com/network/showflight/58443550911,https://www.airlines-manager.com/aircraft/show/121383387,21:30,3:29,370,"465,025$","398,841$","$1,077.95","$66,658.66"
ORD - MEM,58408651841,O-PSP-MEM-1,A321-200,https://www.airlines-manager.com/network/showline/51427555,https://www.airlines-manager.com/network/showflight/58408651841,https://www.airlines-manager.com/aircraft/show/122771608,5:15,9:14,310,"229,035$","190,828$",$615.57,"$47,906.61"
ORD - MEM,58418603262,O-PSP-MEM-4,A321-200,https://www.airlines-manager.com/network/showline/51427555,https://www.airlines-manager.com/network/showflight/58418603262,https://www.airlines-manager.com/aircraft/show/122771605,9:30,13:29,310,"229,035$","190,828$",$615.57,"$47,906.61"
ORD - MEM,58421791577,O-PSP-MEM-3,A321-200,https://www.airlines-manager.com/network/showline/51427555,https://www.airlines-manager.com/network/showflight/58421791577,https://www.airlines-manager.com/aircraft/show/122771606,11:00,14:59,310,"229,035$","190,828$",$615.57,"$47,906.61"
ORD - MEM,58425449842,O-PSP-MEM-5,A321-200,https://www.airlines-manager.com/network/showline/51427555,https://www.airlines-manager.com/network/showflight/58425449842,https://www.airlines-manager.com/aircraft/show/122771604,12:30,16:29,310,"229,035$","190,828$",$615.57,"$47,906.61"
ORD - MEM,58438157311,O-PSP-MEM-2,A321-200,https://www.airlines-manager.com/network/showline/51427555,https://www.airlines-manager.com/network/showflight/58438157311,https://www.airlines-manager.com/aircraft/show/122771607,18:45,22:44,310,"229,035$","190,828$",$615.57,"$47,906.61"
ORD - MEX,58405117955,O-MEX E,787-10,https://www.airlines-manager.com/network/showline/50926864,https://www.airlines-manager.com/network/showflight/58405117955,https://www.airlines-manager.com/aircraft/show/121207125,3:00,10:59,648,"1,067,945$","967,833$","$1,493.57","$121,231.69"
ORD - MEX,58421791485,O-MEX E,787-10,https://www.airlines-manager.com/network/showline/50926864,https://www.airlines-manager.com/network/showflight/58421791485,https://www.airlines-manager.com/aircraft/show/121207125,11:00,18:59,648,"1,067,945$","967,833$","$1,493.57","$121,231.69"
ORD - MEX,58438157320,O-MEX E,787-10,https://www.airlines-manager.com/network/showline/50926864,https://www.airlines-manager.com/network/showflight/58438157320,https://www.airlines-manager.com/aircraft/show/121207125,19:00,2:59,648,"1,067,945$","967,833$","$1,493.57","$121,231.69"
ORD - MFE,58405118169,O-RDM-MHT-5,ERJ-175,https://www.airlines-manager.com/network/showline/51776653,https://www.airlines-manager.com/network/showflight/58405118169,https://www.airlines-manager.com/aircraft/show/123757767,4:15,11:14,112,"203,802$","173,896$","$1,552.64","$24,901.58"
ORD - MFE,58415054053,O-RDM-MHT-4,A321-200,https://www.airlines-manager.com/network/showline/51776653,https://www.airlines-manager.com/network/showflight/58415054053,https://www.airlines-manager.com/aircraft/show/123757729,8:00,14:59,310,"433,322$","387,084$","$1,248.66","$55,429.69"
ORD - MFE,58425449800,O-RDM-MHT-3,A321-200,https://www.airlines-manager.com/network/showline/51776653,https://www.airlines-manager.com/network/showflight/58425449800,https://www.airlines-manager.com/aircraft/show/123757730,12:00,18:59,310,"433,322$","387,084$","$1,248.66","$55,429.69"
ORD - MFE,58431664419,O-RDM-MHT-2,A321-200,https://www.airlines-manager.com/network/showline/51776653,https://www.airlines-manager.com/network/showflight/58431664419,https://www.airlines-manager.com/aircraft/show/123757731,16:00,22:59,310,"433,322$","387,084$","$1,248.66","$55,429.69"
ORD - MFE,58438157405,O-RDM-MHT-1,A321-200,https://www.airlines-manager.com/network/showline/51776653,https://www.airlines-manager.com/network/showflight/58438157405,https://www.airlines-manager.com/aircraft/show/123757732,19:30,2:29,310,"433,322$","387,084$","$1,248.66","$55,429.69"
ORD - MFR,58394056476,O-FAI-MFR-1,A321-200,https://www.airlines-manager.com/network/showline/51552943,https://www.airlines-manager.com/network/showflight/58394056476,https://www.airlines-manager.com/aircraft/show/123232513,0:30,9:29,310,"565,378$","509,500$","$1,643.55","$56,716.14"
ORD - MFR,58405117907,O-FAI-MFR-2,A321-200,https://www.airlines-manager.com/network/showline/51552943,https://www.airlines-manager.com/network/showflight/58405117907,https://www.airlines-manager.com/aircraft/show/123232512,2:30,11:29,310,"565,378$","509,500$","$1,643.55","$56,716.14"
ORD - MFR,58421791622,O-FAI-MFR-3,A321-200,https://www.airlines-manager.com/network/showline/51552943,https://www.airlines-manager.com/network/showflight/58421791622,https://www.airlines-manager.com/aircraft/show/123232511,11:30,20:29,310,"565,378$","509,500$","$1,643.55","$56,716.14"
ORD - MFR,58428583276,O-FAI-MFR-4,A321-200,https://www.airlines-manager.com/network/showline/51552943,https://www.airlines-manager.com/network/showflight/58428583276,https://www.airlines-manager.com/aircraft/show/123032787,13:30,22:29,310,"565,378$","509,500$","$1,643.55","$56,716.14"
ORD - MFR,58435221314,O-FAI-MFR-5,A319-100,https://www.airlines-manager.com/network/showline/51552943,https://www.airlines-manager.com/network/showflight/58435221314,https://www.airlines-manager.com/aircraft/show/123232506,17:15,2:14,198,"425,715$","380,935$","$1,923.91","$42,404.64"
ORD - MHT,58405118094,O-RDM-MHT-3,A321-200,https://www.airlines-manager.com/network/showline/51776651,https://www.airlines-manager.com/network/showflight/58405118094,https://www.airlines-manager.com/aircraft/show/123757730,3:45,9:14,310,"344,485$","303,227$",$978.15,"$55,299.76"
ORD - MHT,58415054025,O-RDM-MHT-2,A321-200,https://www.airlines-manager.com/network/showline/51776651,https://www.airlines-manager.com/network/showflight/58415054025,https://www.airlines-manager.com/aircraft/show/123757731,7:45,13:14,310,"344,485$","303,227$",$978.15,"$55,299.76"
ORD - MHT,58421791602,O-RDM-MHT-1,A321-200,https://www.airlines-manager.com/network/showline/51776651,https://www.airlines-manager.com/network/showflight/58421791602,https://www.airlines-manager.com/aircraft/show/123757732,11:15,16:44,310,"344,485$","303,227$",$978.15,"$55,299.76"
ORD - MHT,58441017389,O-RDM-MHT-5,ERJ-175,https://www.airlines-manager.com/network/showline/51776651,https://www.airlines-manager.com/network/showflight/58441017389,https://www.airlines-manager.com/aircraft/show/123757767,20:00,1:29,112,"163,120$","136,898$","$1,222.30","$24,966.20"
ORD - MHT,58446475270,O-RDM-MHT-4,A321-200,https://www.airlines-manager.com/network/showline/51776651,https://www.airlines-manager.com/network/showflight/58446475270,https://www.airlines-manager.com/aircraft/show/123757729,23:45,5:14,310,"344,485$","303,227$",$978.15,"$55,299.76"
ORD - MKE,58394056829,O-YEG-YUL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202032,https://www.airlines-manager.com/network/showflight/58394056829,https://www.airlines-manager.com/aircraft/show/122278400,1:30,3:59,320,"77,537$","42,067$",$131.46,"$16,939.73"
ORD - MKE,58418603215,O-YEG-YUL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202032,https://www.airlines-manager.com/network/showflight/58418603215,https://www.airlines-manager.com/aircraft/show/122278401,9:00,11:29,320,"77,537$","42,067$",$131.46,"$16,939.73"
ORD - MKE,58425449853,O-YEG-YUL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202032,https://www.airlines-manager.com/network/showflight/58425449853,https://www.airlines-manager.com/aircraft/show/122278397,12:45,15:14,320,"77,537$","42,067$",$131.46,"$16,939.73"
ORD - MKE,58435221299,O-YEG-YUL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202032,https://www.airlines-manager.com/network/showflight/58435221299,https://www.airlines-manager.com/aircraft/show/122278398,17:15,19:44,320,"77,537$","42,067$",$131.46,"$16,939.73"
ORD - MKE,58443550954,O-YEG-YUL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202032,https://www.airlines-manager.com/network/showflight/58443550954,https://www.airlines-manager.com/aircraft/show/122278399,21:45,0:14,320,"77,537$","42,067$",$131.46,"$16,939.73"
ORD - MSN,58411831184,O-COS-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/51889532,https://www.airlines-manager.com/network/showflight/58411831184,https://www.airlines-manager.com/aircraft/show/124069845,7:00,9:29,320,"85,455$","51,130$",$159.78,"$20,589.26"
ORD - MSN,58418603383,O-COS-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/51889532,https://www.airlines-manager.com/network/showflight/58418603383,https://www.airlines-manager.com/aircraft/show/124069846,10:15,12:44,320,"85,455$","51,130$",$159.78,"$20,589.26"
ORD - MSN,58428583295,O-COS-BZN-5,ERJ-175,https://www.airlines-manager.com/network/showline/51889532,https://www.airlines-manager.com/network/showflight/58428583295,https://www.airlines-manager.com/aircraft/show/124069890,13:45,16:14,112,"37,466$","19,989$",$178.47,"$8,049.26"
ORD - MSN,58438157203,O-COS-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/51889532,https://www.airlines-manager.com/network/showflight/58438157203,https://www.airlines-manager.com/aircraft/show/124069843,18:15,20:44,320,"85,455$","51,130$",$159.78,"$20,589.26"
ORD - MSN,58441017405,O-COS-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/51889532,https://www.airlines-manager.com/network/showflight/58441017405,https://www.airlines-manager.com/aircraft/show/124069844,20:15,22:44,320,"85,455$","51,130$",$159.78,"$20,589.26"
ORD - MSO,58394056662,O-YXY-MSO-1,737-900ER,https://www.airlines-manager.com/network/showline/51889537,https://www.airlines-manager.com/network/showflight/58394056662,https://www.airlines-manager.com/aircraft/show/124069849,1:00,8:14,320,"463,152$","407,717$","$1,274.12","$56,366.41"
ORD - MSO,58405117953,O-YXY-MSO-4,A321neo,https://www.airlines-manager.com/network/showline/51889537,https://www.airlines-manager.com/network/showflight/58405117953,https://www.airlines-manager.com/aircraft/show/124068451,3:00,10:14,338,"502,291$","455,169$","$1,346.65","$62,926.59"
ORD - MSO,58425449857,O-YXY-MSO-2,737-900ER,https://www.airlines-manager.com/network/showline/51889537,https://www.airlines-manager.com/network/showflight/58425449857,https://www.airlines-manager.com/aircraft/show/124069848,12:45,19:59,320,"463,152$","407,717$","$1,274.12","$56,366.41"
ORD - MSO,58428583437,O-YXY-MSO-3,737-900ER,https://www.airlines-manager.com/network/showline/51889537,https://www.airlines-manager.com/network/showflight/58428583437,https://www.airlines-manager.com/aircraft/show/124069847,14:45,21:59,320,"463,152$","407,717$","$1,274.12","$56,366.41"
ORD - MSP,58408651834,O-ATL-YYZ-5,A321neo,https://www.airlines-manager.com/network/showline/51097519,https://www.airlines-manager.com/network/showflight/58408651834,https://www.airlines-manager.com/aircraft/show/115400545,5:15,8:44,338,"192,476$","152,271$",$450.51,"$43,714.16"
ORD - MSP,58421791473,O-ATL-YYZ-4,A321neo,https://www.airlines-manager.com/network/showline/51097519,https://www.airlines-manager.com/network/showflight/58421791473,https://www.airlines-manager.com/aircraft/show/121813378,11:00,14:29,338,"192,476$","152,271$",$450.51,"$43,714.16"
ORD - MSP,58428583429,O-ATL-YYZ-3,A321neo,https://www.airlines-manager.com/network/showline/51097519,https://www.airlines-manager.com/network/showflight/58428583429,https://www.airlines-manager.com/aircraft/show/121813379,14:45,18:14,338,"192,476$","152,271$",$450.51,"$43,714.16"
ORD - MSP,58438157358,O-ATL-YYZ-1,A321neo,https://www.airlines-manager.com/network/showline/51097519,https://www.airlines-manager.com/network/showflight/58438157358,https://www.airlines-manager.com/aircraft/show/121813381,19:15,22:44,338,"192,476$","152,271$",$450.51,"$43,714.16"
ORD - MSP,58443550885,O-ATL-YYZ-2,A321neo,https://www.airlines-manager.com/network/showline/51097519,https://www.airlines-manager.com/network/showflight/58443550885,https://www.airlines-manager.com/aircraft/show/121813380,21:15,0:44,338,"192,476$","152,271$",$450.51,"$43,714.16"
ORD - MSY,58405118110,O-MSY-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/51427544,https://www.airlines-manager.com/network/showflight/58405118110,https://www.airlines-manager.com/aircraft/show/122805425,4:00,9:14,320,"342,164$","292,779$",$914.93,"$55,945.03"
ORD - MSY,58415054124,O-MSY-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/51427544,https://www.airlines-manager.com/network/showflight/58415054124,https://www.airlines-manager.com/aircraft/show/122805426,8:45,13:59,320,"342,164$","292,779$",$914.93,"$55,945.03"
ORD - MSY,58428583403,O-MSY-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/51427544,https://www.airlines-manager.com/network/showflight/58428583403,https://www.airlines-manager.com/aircraft/show/122805427,14:15,19:29,320,"342,164$","292,779$",$914.93,"$55,945.03"
ORD - MSY,58441017339,O-MSY-RDU-5,A319-100,https://www.airlines-manager.com/network/showline/51427544,https://www.airlines-manager.com/network/showflight/58441017339,https://www.airlines-manager.com/aircraft/show/122771597,19:45,1:14,198,"260,768$","226,503$","$1,143.95","$41,307.54"
ORD - MSY,58446475260,O-MSY-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/51427544,https://www.airlines-manager.com/network/showflight/58446475260,https://www.airlines-manager.com/aircraft/show/122390305,23:45,4:59,320,"342,164$","292,779$",$914.93,"$55,945.03"
ORD - MTY,58394056903,O-JAX-BFF-1,A321neo,https://www.airlines-manager.com/network/showline/51552840,https://www.airlines-manager.com/network/showflight/58394056903,https://www.airlines-manager.com/aircraft/show/123232510,2:15,9:29,338,"506,441$","457,823$","$1,354.51","$63,293.50"
ORD - MTY,58418603208,O-JAX-BFF-4,A321neo,https://www.airlines-manager.com/network/showline/51552840,https://www.airlines-manager.com/network/showflight/58418603208,https://www.airlines-manager.com/aircraft/show/121813377,9:00,16:14,338,"506,441$","457,823$","$1,354.51","$63,293.50"
ORD - MTY,58421791606,O-JAX-BFF-5,A319-100,https://www.airlines-manager.com/network/showline/51552840,https://www.airlines-manager.com/network/showflight/58421791606,https://www.airlines-manager.com/aircraft/show/123232507,11:15,18:29,198,"347,450$","307,183$","$1,551.43","$42,467.70"
ORD - MTY,58431664237,O-JAX-BFF-3,A321neo,https://www.airlines-manager.com/network/showline/51552840,https://www.airlines-manager.com/network/showflight/58431664237,https://www.airlines-manager.com/aircraft/show/123232508,15:00,22:14,338,"506,441$","457,823$","$1,354.51","$63,293.50"
ORD - MTY,58441017394,O-JAX-BFF-2,A321neo,https://www.airlines-manager.com/network/showline/51552840,https://www.airlines-manager.com/network/showflight/58441017394,https://www.airlines-manager.com/aircraft/show/123232509,20:15,3:29,338,"506,441$","457,823$","$1,354.51","$63,293.50"
ORD - NAS,58394056659,O-SYR-LIT-2,737-900ER,https://www.airlines-manager.com/network/showline/51889546,https://www.airlines-manager.com/network/showflight/58394056659,https://www.airlines-manager.com/aircraft/show/124069841,1:00,8:14,320,"447,382$","390,533$","$1,220.42","$53,990.74"
ORD - NAS,58405117973,O-SYR-LIT-1,737-900ER,https://www.airlines-manager.com/network/showline/51889546,https://www.airlines-manager.com/network/showflight/58405117973,https://www.airlines-manager.com/aircraft/show/124069842,3:00,10:14,320,"447,382$","390,533$","$1,220.42","$53,990.74"
ORD - NAS,58411831167,O-SYR-LIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/51889546,https://www.airlines-manager.com/network/showflight/58411831167,https://www.airlines-manager.com/aircraft/show/124069889,6:45,13:59,112,"211,413$","179,162$","$1,599.66","$24,768.94"
ORD - NAS,58425449808,O-NAS S,A319-100,https://www.airlines-manager.com/network/showline/51889546,https://www.airlines-manager.com/network/showflight/58425449808,https://www.airlines-manager.com/aircraft/show/123897005,12:00,19:14,248,"345,942$","306,148$","$1,234.47","$42,324.61"
ORD - NAS,58435221196,O-SYR-LIT-4,737-900ER,https://www.airlines-manager.com/network/showline/51889546,https://www.airlines-manager.com/network/showflight/58435221196,https://www.airlines-manager.com/aircraft/show/124069839,16:30,23:44,320,"447,382$","390,533$","$1,220.42","$53,990.74"
ORD - NAS,58438157379,O-NAS S,A319-100,https://www.airlines-manager.com/network/showline/51889546,https://www.airlines-manager.com/network/showflight/58438157379,https://www.airlines-manager.com/aircraft/show/123897005,19:15,2:29,248,"345,942$","306,148$","$1,234.47","$42,324.61"
ORD - NAS,58443550957,O-SYR-LIT-3,737-900ER,https://www.airlines-manager.com/network/showline/51889546,https://www.airlines-manager.com/network/showflight/58443550957,https://www.airlines-manager.com/aircraft/show/124069840,21:45,4:59,320,"447,382$","390,533$","$1,220.42","$53,990.74"
ORD - OAK,58394056725,O-OAK-SMF-2,A321neo,https://www.airlines-manager.com/network/showline/51097516,https://www.airlines-manager.com/network/showflight/58394056725,https://www.airlines-manager.com/aircraft/show/121813395,1:15,10:29,338,"633,690$","576,367$","$1,705.23","$62,422.42"
ORD - OAK,58405118000,O-OAK-SMF-5,A321neo,https://www.airlines-manager.com/network/showline/51097516,https://www.airlines-manager.com/network/showflight/58405118000,https://www.airlines-manager.com/aircraft/show/121813392,3:15,12:29,338,"633,690$","576,367$","$1,705.23","$62,422.42"
ORD - OAK,58421791482,O-OAK-SMF-1,A321neo,https://www.airlines-manager.com/network/showline/51097516,https://www.airlines-manager.com/network/showflight/58421791482,https://www.airlines-manager.com/aircraft/show/121813396,11:00,20:14,338,"633,690$","576,367$","$1,705.23","$62,422.42"
ORD - OAK,58425449880,O-OAK-SMF-4,A321neo,https://www.airlines-manager.com/network/showline/51097516,https://www.airlines-manager.com/network/showflight/58425449880,https://www.airlines-manager.com/aircraft/show/121813393,13:00,22:14,338,"633,690$","576,367$","$1,705.23","$62,422.42"
ORD - OAK,58446475174,O-OAK-SMF-3,A321neo,https://www.airlines-manager.com/network/showline/51097516,https://www.airlines-manager.com/network/showflight/58446475174,https://www.airlines-manager.com/aircraft/show/121813394,23:00,8:14,338,"633,690$","576,367$","$1,705.23","$62,422.42"
ORD - OKC,58405118025,O-OKC-ORF-3,A321-200,https://www.airlines-manager.com/network/showline/51776664,https://www.airlines-manager.com/network/showflight/58405118025,https://www.airlines-manager.com/aircraft/show/123757726,3:15,7:59,310,"308,011$","268,874$",$867.34,"$56,804.37"
ORD - OKC,58418603273,O-OKC-ORF-2,A321-200,https://www.airlines-manager.com/network/showline/51776664,https://www.airlines-manager.com/network/showflight/58418603273,https://www.airlines-manager.com/aircraft/show/123757727,9:45,14:29,310,"308,011$","268,874$",$867.34,"$56,804.37"
ORD - OKC,58428583279,O-OKC-ORF-1,A321-200,https://www.airlines-manager.com/network/showline/51776664,https://www.airlines-manager.com/network/showflight/58428583279,https://www.airlines-manager.com/aircraft/show/123757728,13:30,18:14,310,"308,011$","268,874$",$867.34,"$56,804.37"
ORD - OKC,58438157317,O-OKC-ORF-5,ERJ-175,https://www.airlines-manager.com/network/showline/51776664,https://www.airlines-manager.com/network/showflight/58438157317,https://www.airlines-manager.com/aircraft/show/123133602,18:45,23:29,112,"146,540$","121,850$","$1,087.95","$25,742.96"
ORD - OKC,58443550987,O-OKC-ORF-4,A321-200,https://www.airlines-manager.com/network/showline/51776664,https://www.airlines-manager.com/network/showflight/58443550987,https://www.airlines-manager.com/aircraft/show/123757725,22:00,2:44,310,"308,011$","268,874$",$867.34,"$56,804.37"
ORD - OMA,58394056477,O-OKC-ORF-2,A321-200,https://www.airlines-manager.com/network/showline/51776643,https://www.airlines-manager.com/network/showflight/58394056477,https://www.airlines-manager.com/aircraft/show/123757727,0:30,4:14,310,"202,856$","168,236$",$542.70,"$45,063.21"
ORD - OMA,58405118162,O-OKC-ORF-1,A321-200,https://www.airlines-manager.com/network/showline/51776643,https://www.airlines-manager.com/network/showflight/58405118162,https://www.airlines-manager.com/aircraft/show/123757728,4:15,7:59,310,"202,856$","168,236$",$542.70,"$45,063.21"
ORD - OMA,58418603376,O-OKC-ORF-5,ERJ-175,https://www.airlines-manager.com/network/showline/51776643,https://www.airlines-manager.com/network/showflight/58418603376,https://www.airlines-manager.com/aircraft/show/123133602,10:00,13:44,112,"93,470$","71,973$",$642.62,"$19,278.48"
ORD - OMA,58425450002,O-OKC-ORF-4,A321-200,https://www.airlines-manager.com/network/showline/51776643,https://www.airlines-manager.com/network/showflight/58425450002,https://www.airlines-manager.com/aircraft/show/123757725,13:15,16:59,310,"202,856$","168,236$",$542.70,"$45,063.21"
ORD - OMA,58438157248,O-OKC-ORF-3,A321-200,https://www.airlines-manager.com/network/showline/51776643,https://www.airlines-manager.com/network/showflight/58438157248,https://www.airlines-manager.com/aircraft/show/123757726,18:30,22:14,310,"202,856$","168,236$",$542.70,"$45,063.21"
ORD - ONT,58394056862,O-SJC-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/51202009,https://www.airlines-manager.com/network/showflight/58394056862,https://www.airlines-manager.com/aircraft/show/122278411,1:45,10:29,320,"552,233$","487,155$","$1,522.36","$55,781.11"
ORD - ONT,58405118082,O-SJC-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/51202009,https://www.airlines-manager.com/network/showflight/58405118082,https://www.airlines-manager.com/aircraft/show/122278410,3:45,12:29,320,"552,233$","487,155$","$1,522.36","$55,781.11"
ORD - ONT,58428583343,O-SJC-ONT-5,737-900ER,https://www.airlines-manager.com/network/showline/51202009,https://www.airlines-manager.com/network/showflight/58428583343,https://www.airlines-manager.com/aircraft/show/122278407,14:00,22:44,320,"552,233$","487,155$","$1,522.36","$55,781.11"
ORD - ONT,58435221195,O-SJC-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/51202009,https://www.airlines-manager.com/network/showflight/58435221195,https://www.airlines-manager.com/aircraft/show/122278409,16:30,1:14,320,"552,233$","487,155$","$1,522.36","$55,781.11"
ORD - ONT,58438157237,O-SJC-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/51202009,https://www.airlines-manager.com/network/showflight/58438157237,https://www.airlines-manager.com/aircraft/show/122278408,18:30,3:14,320,"552,233$","487,155$","$1,522.36","$55,781.11"
ORD - ORF,58405117944,O-OKC-ORF-4,A321-200,https://www.airlines-manager.com/network/showline/51776657,https://www.airlines-manager.com/network/showflight/58405117944,https://www.airlines-manager.com/aircraft/show/123757725,2:45,7:44,310,"314,527$","275,388$",$888.35,"$55,261.81"
ORD - ORF,58415054108,O-OKC-ORF-3,A321-200,https://www.airlines-manager.com/network/showline/51776657,https://www.airlines-manager.com/network/showflight/58415054108,https://www.airlines-manager.com/aircraft/show/123757726,8:30,13:29,310,"314,527$","275,388$",$888.35,"$55,261.81"
ORD - ORF,58428583423,O-OKC-ORF-2,A321-200,https://www.airlines-manager.com/network/showline/51776657,https://www.airlines-manager.com/network/showflight/58428583423,https://www.airlines-manager.com/aircraft/show/123757727,14:30,19:29,310,"314,527$","275,388$",$888.35,"$55,261.81"
ORD - ORF,58438157212,O-OKC-ORF-1,A321-200,https://www.airlines-manager.com/network/showline/51776657,https://www.airlines-manager.com/network/showflight/58438157212,https://www.airlines-manager.com/aircraft/show/123757728,18:15,23:14,310,"314,527$","275,388$",$888.35,"$55,261.81"
ORD - ORF,58446475245,O-OKC-ORF-5,ERJ-175,https://www.airlines-manager.com/network/showline/51776657,https://www.airlines-manager.com/network/showflight/58446475245,https://www.airlines-manager.com/aircraft/show/123133602,23:30,4:29,112,"149,392$","124,660$","$1,113.04","$25,015.38"
ORD - PBI,58394056908,O-MSY-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/51427546,https://www.airlines-manager.com/network/showflight/58394056908,https://www.airlines-manager.com/aircraft/show/122805426,2:15,8:44,320,"411,158$","356,624$","$1,114.45","$55,006.27"
ORD - PBI,58411831183,O-MSY-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/51427546,https://www.airlines-manager.com/network/showflight/58411831183,https://www.airlines-manager.com/aircraft/show/122805427,7:00,13:29,320,"411,158$","356,624$","$1,114.45","$55,006.27"
ORD - PBI,58425450004,O-MSY-RDU-5,A319-100,https://www.airlines-manager.com/network/showline/51427546,https://www.airlines-manager.com/network/showflight/58425450004,https://www.airlines-manager.com/aircraft/show/122771597,13:15,19:44,198,"310,949$","272,760$","$1,377.58","$42,070.95"
ORD - PBI,58435221301,O-MSY-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/51427546,https://www.airlines-manager.com/network/showflight/58435221301,https://www.airlines-manager.com/aircraft/show/122390305,17:15,23:44,320,"411,158$","356,624$","$1,114.45","$55,006.27"
ORD - PBI,58443550921,O-MSY-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/51427546,https://www.airlines-manager.com/network/showflight/58443550921,https://www.airlines-manager.com/aircraft/show/122805425,21:30,3:59,320,"411,158$","356,624$","$1,114.45","$55,006.27"
ORD - PDX,58394056861,O-PDX-SAN-2,737-900ER,https://www.airlines-manager.com/network/showline/50984820,https://www.airlines-manager.com/network/showflight/58394056861,https://www.airlines-manager.com/aircraft/show/121383374,1:45,10:29,320,"558,116$","490,391$","$1,532.47","$56,151.64"
ORD - PDX,58405118080,O-PDX-SAN-4,737-900ER,https://www.airlines-manager.com/network/showline/50984820,https://www.airlines-manager.com/network/showflight/58405118080,https://www.airlines-manager.com/aircraft/show/121383372,3:45,12:29,320,"558,116$","490,391$","$1,532.47","$56,151.64"
ORD - PDX,58428583342,O-PDX-SAN-1,737-900ER,https://www.airlines-manager.com/network/showline/50984820,https://www.airlines-manager.com/network/showflight/58428583342,https://www.airlines-manager.com/aircraft/show/121383375,14:00,22:44,320,"558,116$","490,391$","$1,532.47","$56,151.64"
ORD - PDX,58431664426,O-PDX-SAN-6 B,A319-100,https://www.airlines-manager.com/network/showline/50984820,https://www.airlines-manager.com/network/showflight/58431664426,https://www.airlines-manager.com/aircraft/show/121383410,16:00,0:44,198,"420,712$","372,787$","$1,882.76","$42,685.53"
ORD - PDX,58435221260,O-PDX-SAN-3,737-900ER,https://www.airlines-manager.com/network/showline/50984820,https://www.airlines-manager.com/network/showflight/58435221260,https://www.airlines-manager.com/aircraft/show/121383373,17:00,1:44,320,"558,116$","490,391$","$1,532.47","$56,151.64"
ORD - PDX,58438157335,O-PDX-SAN-5,737-900ER,https://www.airlines-manager.com/network/showline/50984820,https://www.airlines-manager.com/network/showflight/58438157335,https://www.airlines-manager.com/aircraft/show/121383371,19:00,3:44,320,"558,116$","490,391$","$1,532.47","$56,151.64"
ORD - PHL,58415054065,O-RNO-LGB-5,737-900ER,https://www.airlines-manager.com/network/showline/51202010,https://www.airlines-manager.com/network/showflight/58415054065,https://www.airlines-manager.com/aircraft/show/122278402,8:15,12:59,320,"304,368$","250,999$",$784.37,"$53,027.96"
ORD - PHL,58421791537,O-RNO-LGB-3,737-900ER,https://www.airlines-manager.com/network/showline/51202010,https://www.airlines-manager.com/network/showflight/58421791537,https://www.airlines-manager.com/aircraft/show/122278404,11:00,15:44,320,"304,368$","250,999$",$784.37,"$53,027.96"
ORD - PHL,58425449934,O-RNO-LGB-4,737-900ER,https://www.airlines-manager.com/network/showline/51202010,https://www.airlines-manager.com/network/showflight/58425449934,https://www.airlines-manager.com/aircraft/show/122278403,13:00,17:44,320,"304,368$","250,999$",$784.37,"$53,027.96"
ORD - PHL,58438157315,O-SJC-BOS,ERJ-175,https://www.airlines-manager.com/network/showline/51202010,https://www.airlines-manager.com/network/showflight/58438157315,https://www.airlines-manager.com/aircraft/show/122320232,18:45,23:29,102,"135,944$","107,654$","$1,055.43","$22,743.80"
ORD - PHL,58438157316,O-RNO-LGB-1,737-900ER,https://www.airlines-manager.com/network/showline/51202010,https://www.airlines-manager.com/network/showflight/58438157316,https://www.airlines-manager.com/aircraft/show/122278406,19:30,0:14,320,"304,368$","250,999$",$784.37,"$53,027.96"
ORD - PHL,58443550920,O-RNO-LGB-2,737-900ER,https://www.airlines-manager.com/network/showline/51202010,https://www.airlines-manager.com/network/showflight/58443550920,https://www.airlines-manager.com/aircraft/show/122278405,21:30,2:14,320,"304,368$","250,999$",$784.37,"$53,027.96"
ORD - PHX,58405117927,O-LAS-PHX-3,737-900ER,https://www.airlines-manager.com/network/showline/50984819,https://www.airlines-manager.com/network/showflight/58405117927,https://www.airlines-manager.com/aircraft/show/121383378,2:45,10:29,320,"493,256$","421,170$","$1,316.16","$54,461.64"
ORD - PHX,58408651790,O-LAS-PHX-5,737-900ER,https://www.airlines-manager.com/network/showline/50984819,https://www.airlines-manager.com/network/showflight/58408651790,https://www.airlines-manager.com/aircraft/show/121383376,4:45,12:29,320,"493,256$","421,170$","$1,316.16","$54,461.64"
ORD - PHX,58421791535,O-LAS-PHX-2,737-900ER,https://www.airlines-manager.com/network/showline/50984819,https://www.airlines-manager.com/network/showflight/58421791535,https://www.airlines-manager.com/aircraft/show/121383379,11:00,18:44,320,"493,256$","421,170$","$1,316.16","$54,461.64"
ORD - PHX,58425449932,O-LAS-PHX-4,737-900ER,https://www.airlines-manager.com/network/showline/50984819,https://www.airlines-manager.com/network/showflight/58425449932,https://www.airlines-manager.com/aircraft/show/121383377,13:00,20:44,320,"493,256$","421,170$","$1,316.16","$54,461.64"
ORD - PHX,58438157336,O-LAS-PHX-1,737-900ER,https://www.airlines-manager.com/network/showline/50984819,https://www.airlines-manager.com/network/showflight/58438157336,https://www.airlines-manager.com/aircraft/show/121383380,19:00,2:44,320,"493,256$","421,170$","$1,316.16","$54,461.64"
ORD - PHX,58446475198,O-LAS-PHX-6 B,A319-100,https://www.airlines-manager.com/network/showline/50984819,https://www.airlines-manager.com/network/showflight/58446475198,https://www.airlines-manager.com/aircraft/show/121383409,23:00,6:44,198,"372,327$","321,970$","$1,626.11","$41,634.05"
ORD - PIT,58405117951,O-JAX-BFF-4,A321neo,https://www.airlines-manager.com/network/showline/51552834,https://www.airlines-manager.com/network/showflight/58405117951,https://www.airlines-manager.com/aircraft/show/121813377,3:00,6:44,338,"216,180$","180,172$",$533.05,"$48,260.36"
ORD - PIT,58408651844,O-JAX-BFF-5,A319-100,https://www.airlines-manager.com/network/showline/51552834,https://www.airlines-manager.com/network/showflight/58408651844,https://www.airlines-manager.com/aircraft/show/123232507,5:15,8:59,198,"150,552$","121,317$",$612.71,"$32,495.63"
ORD - PIT,58421791593,O-JAX-BFF-3,A321neo,https://www.airlines-manager.com/network/showline/51552834,https://www.airlines-manager.com/network/showflight/58421791593,https://www.airlines-manager.com/aircraft/show/123232508,11:15,14:59,338,"216,180$","180,172$",$533.05,"$48,260.36"
ORD - PIT,58435221187,O-JAX-BFF-2,A321neo,https://www.airlines-manager.com/network/showline/51552834,https://www.airlines-manager.com/network/showflight/58435221187,https://www.airlines-manager.com/aircraft/show/123232509,16:30,20:14,338,"216,180$","180,172$",$533.05,"$48,260.36"
ORD - PIT,58446475103,O-JAX-BFF-1,A321neo,https://www.airlines-manager.com/network/showline/51552834,https://www.airlines-manager.com/network/showflight/58446475103,https://www.airlines-manager.com/aircraft/show/123232510,22:30,2:14,338,"216,180$","180,172$",$533.05,"$48,260.36"
ORD - PSP,58405117906,O-PSP-MEM-2,A321-200,https://www.airlines-manager.com/network/showline/51427556,https://www.airlines-manager.com/network/showflight/58405117906,https://www.airlines-manager.com/aircraft/show/122771607,2:30,10:59,310,"534,397$","479,911$","$1,548.10","$56,571.04"
ORD - PSP,58425449981,O-PSP-MEM-1,A321-200,https://www.airlines-manager.com/network/showline/51427556,https://www.airlines-manager.com/network/showflight/58425449981,https://www.airlines-manager.com/aircraft/show/122771608,13:00,21:29,310,"534,397$","479,911$","$1,548.10","$56,571.04"
ORD - PSP,58435221310,O-PSP-MEM-4,A321-200,https://www.airlines-manager.com/network/showline/51427556,https://www.airlines-manager.com/network/showflight/58435221310,https://www.airlines-manager.com/aircraft/show/122771605,17:15,1:44,310,"534,397$","479,911$","$1,548.10","$56,571.04"
ORD - PSP,58438157310,O-PSP-MEM-3,A321-200,https://www.airlines-manager.com/network/showline/51427556,https://www.airlines-manager.com/network/showflight/58438157310,https://www.airlines-manager.com/aircraft/show/122771606,18:45,3:14,310,"534,397$","479,911$","$1,548.10","$56,571.04"
ORD - PSP,58441017417,O-PSP-MEM-5,A321-200,https://www.airlines-manager.com/network/showline/51427556,https://www.airlines-manager.com/network/showflight/58441017417,https://www.airlines-manager.com/aircraft/show/122771604,20:15,4:44,310,"534,397$","479,911$","$1,548.10","$56,571.04"
ORD - PVD,58394056403,O-YZF-PVD-3,A321-200,https://www.airlines-manager.com/network/showline/51776662,https://www.airlines-manager.com/network/showflight/58394056403,https://www.airlines-manager.com/aircraft/show/123757734,0:15,5:44,310,"347,098$","306,598$",$989.03,"$55,914.53"
ORD - PVD,58405118061,O-YZF-PVD-2,A321-200,https://www.airlines-manager.com/network/showline/51776662,https://www.airlines-manager.com/network/showflight/58405118061,https://www.airlines-manager.com/aircraft/show/123757735,3:30,8:59,310,"347,098$","306,598$",$989.03,"$55,914.53"
ORD - PVD,58421791605,O-YZF-PVD-1,A321-200,https://www.airlines-manager.com/network/showline/51776662,https://www.airlines-manager.com/network/showflight/58421791605,https://www.airlines-manager.com/aircraft/show/123757736,11:15,16:44,310,"347,098$","306,598$",$989.03,"$55,914.53"
ORD - PVD,58435221226,O-YZF-PVD-4,A321-200,https://www.airlines-manager.com/network/showline/51776662,https://www.airlines-manager.com/network/showflight/58435221226,https://www.airlines-manager.com/aircraft/show/123757733,16:45,22:14,310,"347,098$","306,598$",$989.03,"$55,914.53"
ORD - PVD,58441017443,O-YZF-PVD-5,ERJ-175,https://www.airlines-manager.com/network/showline/51776662,https://www.airlines-manager.com/network/showflight/58441017443,https://www.airlines-manager.com/aircraft/show/123757768,20:15,1:44,112,"164,257$","138,479$","$1,236.42","$25,254.53"
ORD - PVR,58394056811,O-YYC-SLC-1,A321neo,https://www.airlines-manager.com/network/showline/51097558,https://www.airlines-manager.com/network/showflight/58394056811,https://www.airlines-manager.com/aircraft/show/121813391,1:30,10:29,338,"620,590$","565,313$","$1,672.52","$62,929.09"
ORD - PVR,58405118035,O-YYC-SLC-4,A321neo,https://www.airlines-manager.com/network/showline/51097558,https://www.airlines-manager.com/network/showflight/58405118035,https://www.airlines-manager.com/aircraft/show/121813388,3:30,12:29,338,"620,590$","565,313$","$1,672.52","$62,929.09"
ORD - PVR,58421791478,O-YYC-SLC-3,A321neo,https://www.airlines-manager.com/network/showline/51097558,https://www.airlines-manager.com/network/showflight/58421791478,https://www.airlines-manager.com/aircraft/show/121813389,11:00,19:59,338,"620,590$","565,313$","$1,672.52","$62,929.09"
ORD - PVR,58425449877,O-YYC-SLC-5,A321neo,https://www.airlines-manager.com/network/showline/51097558,https://www.airlines-manager.com/network/showflight/58425449877,https://www.airlines-manager.com/aircraft/show/121813387,13:00,21:59,338,"620,590$","565,313$","$1,672.52","$62,929.09"
ORD - PVR,58435221368,O-YYC-SLC-2,A321neo,https://www.airlines-manager.com/network/showline/51097558,https://www.airlines-manager.com/network/showflight/58435221368,https://www.airlines-manager.com/aircraft/show/121813390,18:00,2:59,338,"620,590$","565,313$","$1,672.52","$62,929.09"
ORD - RDM,58405117908,O-RDM-MHT-1,A321-200,https://www.airlines-manager.com/network/showline/51776659,https://www.airlines-manager.com/network/showflight/58405117908,https://www.airlines-manager.com/aircraft/show/123757732,2:30,11:14,310,"545,953$","492,803$","$1,589.69","$56,427.82"
ORD - RDM,58421791608,O-RDM-MHT-5,ERJ-175,https://www.airlines-manager.com/network/showline/51776659,https://www.airlines-manager.com/network/showflight/58421791608,https://www.airlines-manager.com/aircraft/show/123757767,11:15,19:59,112,"256,326$","221,516$","$1,977.82","$25,364.43"
ORD - RDM,58431664294,O-RDM-MHT-4,A321-200,https://www.airlines-manager.com/network/showline/51776659,https://www.airlines-manager.com/network/showflight/58431664294,https://www.airlines-manager.com/aircraft/show/123757729,15:00,23:44,310,"545,953$","492,803$","$1,589.69","$56,427.82"
ORD - RDM,58438157351,O-RDM-MHT-3,A321-200,https://www.airlines-manager.com/network/showline/51776659,https://www.airlines-manager.com/network/showflight/58438157351,https://www.airlines-manager.com/aircraft/show/123757730,19:00,3:44,310,"545,953$","492,803$","$1,589.69","$56,427.82"
ORD - RDM,58446475192,O-RDM-MHT-2,A321-200,https://www.airlines-manager.com/network/showline/51776659,https://www.airlines-manager.com/network/showflight/58446475192,https://www.airlines-manager.com/aircraft/show/123757731,23:00,7:44,310,"545,953$","492,803$","$1,589.69","$56,427.82"
ORD - RDU,58394056803,O-MSY-RDU-5,A319-100,https://www.airlines-manager.com/network/showline/51427538,https://www.airlines-manager.com/network/showflight/58394056803,https://www.airlines-manager.com/aircraft/show/122771597,1:15,5:59,198,"227,343$","195,255$",$986.14,"$41,251.06"
ORD - RDU,58408651817,O-MSY-RDU-4,737-900ER,https://www.airlines-manager.com/network/showline/51427538,https://www.airlines-manager.com/network/showflight/58408651817,https://www.airlines-manager.com/aircraft/show/122390305,5:00,9:29,320,"297,169$","250,586$",$783.08,"$55,892.79"
ORD - RDU,58418603235,O-MSY-RDU-3,737-900ER,https://www.airlines-manager.com/network/showline/51427538,https://www.airlines-manager.com/network/showflight/58418603235,https://www.airlines-manager.com/aircraft/show/122805425,9:15,13:44,320,"297,169$","250,586$",$783.08,"$55,892.79"
ORD - RDU,58428583436,O-MSY-RDU-2,737-900ER,https://www.airlines-manager.com/network/showline/51427538,https://www.airlines-manager.com/network/showflight/58428583436,https://www.airlines-manager.com/aircraft/show/122805426,14:45,19:14,320,"297,169$","250,586$",$783.08,"$55,892.79"
ORD - RDU,58438157394,O-MSY-RDU-1,737-900ER,https://www.airlines-manager.com/network/showline/51427538,https://www.airlines-manager.com/network/showflight/58438157394,https://www.airlines-manager.com/aircraft/show/122805427,19:30,23:59,320,"297,169$","250,586$",$783.08,"$55,892.79"
ORD - RIC,58418603237,O-YXY-MSO-1,737-900ER,https://www.airlines-manager.com/network/showline/51889538,https://www.airlines-manager.com/network/showflight/58418603237,https://www.airlines-manager.com/aircraft/show/124069849,9:15,13:44,320,"297,617$","253,640$",$792.63,"$56,573.98"
ORD - RIC,58421791611,O-YXY-MSO-4,A321neo,https://www.airlines-manager.com/network/showline/51889538,https://www.airlines-manager.com/network/showflight/58421791611,https://www.airlines-manager.com/aircraft/show/124068451,11:30,15:59,338,"322,907$","285,813$",$845.60,"$63,750.11"
ORD - RIC,58441017360,O-YXY-MSO-2,737-900ER,https://www.airlines-manager.com/network/showline/51889538,https://www.airlines-manager.com/network/showflight/58441017360,https://www.airlines-manager.com/aircraft/show/124069848,20:00,0:29,320,"297,617$","253,640$",$792.63,"$56,573.98"
ORD - RIC,58443550977,O-YXY-MSO-3,737-900ER,https://www.airlines-manager.com/network/showline/51889538,https://www.airlines-manager.com/network/showflight/58443550977,https://www.airlines-manager.com/aircraft/show/124069847,22:00,2:29,320,"297,617$","253,640$",$792.63,"$56,573.98"
ORD - RNO,58394056463,O-RNO-LGB-3,737-900ER,https://www.airlines-manager.com/network/showline/51202011,https://www.airlines-manager.com/network/showflight/58394056463,https://www.airlines-manager.com/aircraft/show/122278404,0:30,8:59,320,"542,015$","478,783$","$1,496.20","$56,438.07"
ORD - RNO,58405117894,O-RNO-LGB-4,737-900ER,https://www.airlines-manager.com/network/showline/51202011,https://www.airlines-manager.com/network/showflight/58405117894,https://www.airlines-manager.com/aircraft/show/122278403,2:30,10:59,320,"542,015$","478,783$","$1,496.20","$56,438.07"
ORD - RNO,58421791538,O-RNO-LGB-1,737-900ER,https://www.airlines-manager.com/network/showline/51202011,https://www.airlines-manager.com/network/showflight/58421791538,https://www.airlines-manager.com/aircraft/show/122278406,11:00,19:29,320,"542,015$","478,783$","$1,496.20","$56,438.07"
ORD - RNO,58425449935,O-RNO-LGB-2,737-900ER,https://www.airlines-manager.com/network/showline/51202011,https://www.airlines-manager.com/network/showflight/58425449935,https://www.airlines-manager.com/aircraft/show/122278405,13:00,21:29,320,"542,015$","478,783$","$1,496.20","$56,438.07"
ORD - RNO,58443550955,O-RNO-LGB-5,737-900ER,https://www.airlines-manager.com/network/showline/51202011,https://www.airlines-manager.com/network/showflight/58443550955,https://www.airlines-manager.com/aircraft/show/122278402,21:45,6:14,320,"542,015$","478,783$","$1,496.20","$56,438.07"
ORD - ROC,58415054093,O-SYR-LIT-4,737-900ER,https://www.airlines-manager.com/network/showline/51889535,https://www.airlines-manager.com/network/showflight/58415054093,https://www.airlines-manager.com/aircraft/show/124069839,8:30,12:44,320,"246,980$","205,728$",$642.90,"$48,597.17"
ORD - ROC,58428583404,O-SYR-LIT-3,737-900ER,https://www.airlines-manager.com/network/showline/51889535,https://www.airlines-manager.com/network/showflight/58428583404,https://www.airlines-manager.com/aircraft/show/124069840,14:15,18:29,320,"246,980$","205,728$",$642.90,"$48,597.17"
ORD - ROC,58435221331,O-SYR-LIT-2,737-900ER,https://www.airlines-manager.com/network/showline/51889535,https://www.airlines-manager.com/network/showflight/58435221331,https://www.airlines-manager.com/aircraft/show/124069841,17:30,21:44,320,"246,980$","205,728$",$642.90,"$48,597.17"
ORD - ROC,58438157396,O-SYR-LIT-1,737-900ER,https://www.airlines-manager.com/network/showline/51889535,https://www.airlines-manager.com/network/showflight/58438157396,https://www.airlines-manager.com/aircraft/show/124069842,19:30,23:44,320,"246,980$","205,728$",$642.90,"$48,597.17"
ORD - ROC,58446475173,O-SYR-LIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/51889535,https://www.airlines-manager.com/network/showflight/58446475173,https://www.airlines-manager.com/aircraft/show/124069889,22:45,2:59,112,"116,461$","94,302$",$841.98,"$22,276.06"
ORD - RSW,58394056888,O-BWI-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202039,https://www.airlines-manager.com/network/showflight/58394056888,https://www.airlines-manager.com/aircraft/show/122278395,2:00,8:29,320,"403,753$","348,076$","$1,087.74","$53,687.81"
ORD - RSW,58415054001,O-BWI-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202039,https://www.airlines-manager.com/network/showflight/58415054001,https://www.airlines-manager.com/aircraft/show/122278396,7:30,13:59,320,"403,753$","348,076$","$1,087.74","$53,687.81"
ORD - RSW,58431664345,O-BWI-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202039,https://www.airlines-manager.com/network/showflight/58431664345,https://www.airlines-manager.com/aircraft/show/122278392,15:30,21:59,320,"403,753$","348,076$","$1,087.74","$53,687.81"
ORD - RSW,58438157293,O-BWI-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202039,https://www.airlines-manager.com/network/showflight/58438157293,https://www.airlines-manager.com/aircraft/show/122278393,18:45,1:14,320,"403,753$","348,076$","$1,087.74","$53,687.81"
ORD - RSW,58446475182,O-BWI-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202039,https://www.airlines-manager.com/network/showflight/58446475182,https://www.airlines-manager.com/aircraft/show/122278394,23:00,5:29,277,"370,590$","316,212$","$1,141.56","$48,773.06"
ORD - SAN,58394056591,O-PDX-SAN-6 B,A319-100,https://www.airlines-manager.com/network/showline/50984821,https://www.airlines-manager.com/network/showflight/58394056591,https://www.airlines-manager.com/aircraft/show/121383410,0:45,9:29,198,"420,380$","372,890$","$1,883.28","$42,697.33"
ORD - SAN,58394056593,O-PDX-SAN-3,737-900ER,https://www.airlines-manager.com/network/showline/50984821,https://www.airlines-manager.com/network/showflight/58394056593,https://www.airlines-manager.com/aircraft/show/121383373,1:45,10:29,320,"557,972$","490,863$","$1,533.95","$56,205.69"
ORD - SAN,58405118079,O-PDX-SAN-5,737-900ER,https://www.airlines-manager.com/network/showline/50984821,https://www.airlines-manager.com/network/showflight/58405118079,https://www.airlines-manager.com/aircraft/show/121383371,3:45,12:29,320,"557,972$","490,863$","$1,533.95","$56,205.69"
ORD - SAN,58421791533,O-PDX-SAN-2,737-900ER,https://www.airlines-manager.com/network/showline/50984821,https://www.airlines-manager.com/network/showflight/58421791533,https://www.airlines-manager.com/aircraft/show/121383374,11:00,19:44,320,"557,972$","490,863$","$1,533.95","$56,205.69"
ORD - SAN,58425449930,O-PDX-SAN-4,737-900ER,https://www.airlines-manager.com/network/showline/50984821,https://www.airlines-manager.com/network/showflight/58425449930,https://www.airlines-manager.com/aircraft/show/121383372,13:00,21:44,320,"557,972$","490,863$","$1,533.95","$56,205.69"
ORD - SAN,58446475149,O-PDX-SAN-1,737-900ER,https://www.airlines-manager.com/network/showline/50984821,https://www.airlines-manager.com/network/showflight/58446475149,https://www.airlines-manager.com/aircraft/show/121383375,22:45,7:29,320,"557,972$","490,863$","$1,533.95","$56,205.69"
ORD - SAT,58394056863,O-FAT-AUS-1,737-900ER,https://www.airlines-manager.com/network/showline/51427547,https://www.airlines-manager.com/network/showflight/58394056863,https://www.airlines-manager.com/aircraft/show/122805431,1:45,7:59,320,"389,314$","337,627$","$1,055.08","$54,164.76"
ORD - SAT,58405118084,O-FAT-AUS-2,737-900ER,https://www.airlines-manager.com/network/showline/51427547,https://www.airlines-manager.com/network/showflight/58405118084,https://www.airlines-manager.com/aircraft/show/122805430,3:45,9:59,320,"389,314$","337,627$","$1,055.08","$54,164.76"
ORD - SAT,58425449807,O-FAT-AUS-5,A319-100,https://www.airlines-manager.com/network/showline/51427547,https://www.airlines-manager.com/network/showflight/58425449807,https://www.airlines-manager.com/aircraft/show/122771598,12:00,18:14,198,"294,753$","258,628$","$1,306.20","$41,491.12"
ORD - SAT,58435221262,O-FAT-AUS-3,737-900ER,https://www.airlines-manager.com/network/showline/51427547,https://www.airlines-manager.com/network/showflight/58435221262,https://www.airlines-manager.com/aircraft/show/122805429,17:00,23:14,320,"389,314$","337,627$","$1,055.08","$54,164.76"
ORD - SAT,58438157338,O-FAT-AUS-4,737-900ER,https://www.airlines-manager.com/network/showline/51427547,https://www.airlines-manager.com/network/showflight/58438157338,https://www.airlines-manager.com/aircraft/show/122805428,19:00,1:14,320,"389,314$","337,627$","$1,055.08","$54,164.76"
ORD - SDF,58394056880,O-YZF-PVD-5,ERJ-175,https://www.airlines-manager.com/network/showline/51776649,https://www.airlines-manager.com/network/showflight/58394056880,https://www.airlines-manager.com/aircraft/show/123757768,1:45,4:59,112,"71,555$","50,815$",$453.71,"$15,715.98"
ORD - SDF,58408651882,O-YZF-PVD-3,A321-200,https://www.airlines-manager.com/network/showline/51776649,https://www.airlines-manager.com/network/showflight/58408651882,https://www.airlines-manager.com/aircraft/show/123757734,5:45,8:59,310,"157,871$","124,137$",$400.44,"$38,392.89"
ORD - SDF,58421791604,O-YZF-PVD-2,A321-200,https://www.airlines-manager.com/network/showline/51776649,https://www.airlines-manager.com/network/showflight/58421791604,https://www.airlines-manager.com/aircraft/show/123757735,11:15,14:29,310,"157,871$","124,137$",$400.44,"$38,392.89"
ORD - SDF,58435221227,O-YZF-PVD-1,A321-200,https://www.airlines-manager.com/network/showline/51776649,https://www.airlines-manager.com/network/showflight/58435221227,https://www.airlines-manager.com/aircraft/show/123757736,16:45,19:59,310,"157,871$","124,137$",$400.44,"$38,392.89"
ORD - SDF,58443551028,O-YZF-PVD-4,A321-200,https://www.airlines-manager.com/network/showline/51776649,https://www.airlines-manager.com/network/showflight/58443551028,https://www.airlines-manager.com/aircraft/show/123757733,22:15,1:29,310,"157,871$","124,137$",$400.44,"$38,392.89"
ORD - SEA,58394056849,O-LAX-SEA-3,757-300,https://www.airlines-manager.com/network/showline/50984822,https://www.airlines-manager.com/network/showflight/58394056849,https://www.airlines-manager.com/aircraft/show/121383388,1:45,10:14,400,"719,399$","638,167$","$1,595.42","$75,225.97"
ORD - SEA,58405118074,O-LAX-SEA-5,757-300,https://www.airlines-manager.com/network/showline/50984822,https://www.airlines-manager.com/network/showflight/58405118074,https://www.airlines-manager.com/aircraft/show/121383386,3:45,12:14,400,"719,399$","638,167$","$1,595.42","$75,225.97"
ORD - SEA,58421791494,O-LAX-SEA-2,757-300,https://www.airlines-manager.com/network/showline/50984822,https://www.airlines-manager.com/network/showflight/58421791494,https://www.airlines-manager.com/aircraft/show/121383389,11:00,19:29,400,"719,399$","638,167$","$1,595.42","$75,225.97"
ORD - SEA,58425449896,O-LAX-SEA-4,757-300,https://www.airlines-manager.com/network/showline/50984822,https://www.airlines-manager.com/network/showflight/58425449896,https://www.airlines-manager.com/aircraft/show/121383387,13:00,21:29,400,"719,399$","638,167$","$1,595.42","$75,225.97"
ORD - SEA,58446475252,O-LAX-SEA-1,757-300,https://www.airlines-manager.com/network/showline/50984822,https://www.airlines-manager.com/network/showflight/58446475252,https://www.airlines-manager.com/aircraft/show/121383390,23:45,8:14,400,"719,399$","638,167$","$1,595.42","$75,225.97"
ORD - SFJ,58425449832,O-SFJ E,787-10,https://www.airlines-manager.com/network/showline/51645279,https://www.airlines-manager.com/network/showflight/58425449832,https://www.airlines-manager.com/aircraft/show/123404392,12:15,22:14,648,"1,297,745$","1,198,076$","$1,848.88","$120,007.61"
ORD - SFJ,58443551006,O-SFJ E,787-10,https://www.airlines-manager.com/network/showline/51645279,https://www.airlines-manager.com/network/showflight/58443551006,https://www.airlines-manager.com/aircraft/show/123404392,22:15,8:14,648,"1,297,745$","1,198,076$","$1,848.88","$120,007.61"
ORD - SJC,58394056757,O-SJC-ONT-3,737-900ER,https://www.airlines-manager.com/network/showline/51202007,https://www.airlines-manager.com/network/showflight/58394056757,https://www.airlines-manager.com/aircraft/show/122278409,1:15,10:29,320,"580,585$","512,922$","$1,602.88","$55,551.12"
ORD - SJC,58405118013,O-SJC-ONT-4,737-900ER,https://www.airlines-manager.com/network/showline/51202007,https://www.airlines-manager.com/network/showflight/58405118013,https://www.airlines-manager.com/aircraft/show/122278408,3:15,12:29,320,"580,585$","512,922$","$1,602.88","$55,551.12"
ORD - SJC,58405118014,O-SJC-BOS,ERJ-175,https://www.airlines-manager.com/network/showline/51202007,https://www.airlines-manager.com/network/showflight/58405118014,https://www.airlines-manager.com/aircraft/show/122320232,4:00,13:14,102,"255,913$","217,749$","$2,134.79","$23,582.92"
ORD - SJC,58421791540,O-SJC-ONT-1,737-900ER,https://www.airlines-manager.com/network/showline/51202007,https://www.airlines-manager.com/network/showflight/58421791540,https://www.airlines-manager.com/aircraft/show/122278411,11:00,20:14,320,"580,585$","512,922$","$1,602.88","$55,551.12"
ORD - SJC,58425449938,O-SJC-ONT-2,737-900ER,https://www.airlines-manager.com/network/showline/51202007,https://www.airlines-manager.com/network/showflight/58425449938,https://www.airlines-manager.com/aircraft/show/122278410,13:00,22:14,320,"580,585$","512,922$","$1,602.88","$55,551.12"
ORD - SJC,58446475151,O-SJC-ONT-5,737-900ER,https://www.airlines-manager.com/network/showline/51202007,https://www.airlines-manager.com/network/showflight/58446475151,https://www.airlines-manager.com/aircraft/show/122278407,22:45,7:59,320,"580,585$","512,922$","$1,602.88","$55,551.12"
ORD - SJD,58394056846,O-SJD-FLL-2,A321neo,https://www.airlines-manager.com/network/showline/51097559,https://www.airlines-manager.com/network/showflight/58394056846,https://www.airlines-manager.com/aircraft/show/121813385,1:45,10:44,338,"623,517$","568,443$","$1,681.78","$63,277.51"
ORD - SJD,58405118068,O-SJD-FLL-3,A321neo,https://www.airlines-manager.com/network/showline/51097559,https://www.airlines-manager.com/network/showflight/58405118068,https://www.airlines-manager.com/aircraft/show/121813384,3:45,12:44,338,"623,517$","568,443$","$1,681.78","$63,277.51"
ORD - SJD,58425449876,O-SJD-FLL-1,A321neo,https://www.airlines-manager.com/network/showline/51097559,https://www.airlines-manager.com/network/showflight/58425449876,https://www.airlines-manager.com/aircraft/show/121813386,13:00,21:59,338,"623,517$","568,443$","$1,681.78","$63,277.51"
ORD - SJD,58438157359,O-SJD-FLL-5,A321neo,https://www.airlines-manager.com/network/showline/51097559,https://www.airlines-manager.com/network/showflight/58438157359,https://www.airlines-manager.com/aircraft/show/121813382,19:15,4:14,338,"623,517$","568,443$","$1,681.78","$63,277.51"
ORD - SJD,58443550965,O-SJD-FLL-4,A321neo,https://www.airlines-manager.com/network/showline/51097559,https://www.airlines-manager.com/network/showflight/58443550965,https://www.airlines-manager.com/aircraft/show/121813383,22:00,6:59,338,"623,517$","568,443$","$1,681.78","$63,277.51"
ORD - SJU,58394056482,O-ATL-YYZ-2,A321neo,https://www.airlines-manager.com/network/showline/51097587,https://www.airlines-manager.com/network/showflight/58394056482,https://www.airlines-manager.com/aircraft/show/121813380,0:45,10:44,338,"699,183$","638,414$","$1,888.80","$63,947.98"
ORD - SJU,58421791469,O-ATL-YYZ-5,A321neo,https://www.airlines-manager.com/network/showline/51097587,https://www.airlines-manager.com/network/showflight/58421791469,https://www.airlines-manager.com/aircraft/show/115400545,11:00,20:59,338,"699,183$","638,414$","$1,888.80","$63,947.98"
ORD - SJU,58428583415,O-ATL-YYZ-4,A321neo,https://www.airlines-manager.com/network/showline/51097587,https://www.airlines-manager.com/network/showflight/58428583415,https://www.airlines-manager.com/aircraft/show/121813378,14:30,0:29,338,"699,183$","638,414$","$1,888.80","$63,947.98"
ORD - SJU,58438157192,O-ATL-YYZ-3,A321neo,https://www.airlines-manager.com/network/showline/51097587,https://www.airlines-manager.com/network/showflight/58438157192,https://www.airlines-manager.com/aircraft/show/121813379,18:15,4:14,338,"699,183$","638,414$","$1,888.80","$63,947.98"
ORD - SJU,58446475133,O-ATL-YYZ-1,A321neo,https://www.airlines-manager.com/network/showline/51097587,https://www.airlines-manager.com/network/showflight/58446475133,https://www.airlines-manager.com/aircraft/show/121813381,22:45,8:44,338,"699,183$","638,414$","$1,888.80","$63,947.98"
ORD - SLC,58405118036,O-YYC-SLC-3,A321neo,https://www.airlines-manager.com/network/showline/51097521,https://www.airlines-manager.com/network/showflight/58405118036,https://www.airlines-manager.com/aircraft/show/121813389,3:30,10:29,338,"484,799$","431,891$","$1,277.78","$61,845.97"
ORD - SLC,58408651846,O-YYC-SLC-5,A321neo,https://www.airlines-manager.com/network/showline/51097521,https://www.airlines-manager.com/network/showflight/58408651846,https://www.airlines-manager.com/aircraft/show/121813387,5:30,12:29,338,"484,799$","431,891$","$1,277.78","$61,845.97"
ORD - SLC,58421791479,O-YYC-SLC-2,A321neo,https://www.airlines-manager.com/network/showline/51097521,https://www.airlines-manager.com/network/showflight/58421791479,https://www.airlines-manager.com/aircraft/show/121813390,11:00,17:59,338,"484,799$","431,891$","$1,277.78","$61,845.97"
ORD - SLC,58438157223,O-YYC-SLC-1,A321neo,https://www.airlines-manager.com/network/showline/51097521,https://www.airlines-manager.com/network/showflight/58438157223,https://www.airlines-manager.com/aircraft/show/121813391,18:30,1:29,338,"484,799$","431,891$","$1,277.78","$61,845.97"
ORD - SLC,58441017449,O-YYC-SLC-4,A321neo,https://www.airlines-manager.com/network/showline/51097521,https://www.airlines-manager.com/network/showflight/58441017449,https://www.airlines-manager.com/aircraft/show/121813388,20:30,3:29,338,"484,799$","431,891$","$1,277.78","$61,845.97"
ORD - SMF,58394056812,O-OAK-SMF-1,A321neo,https://www.airlines-manager.com/network/showline/51097520,https://www.airlines-manager.com/network/showflight/58394056812,https://www.airlines-manager.com/aircraft/show/121813396,1:30,10:29,338,"618,972$","563,595$","$1,667.44","$62,737.85"
ORD - SMF,58405118037,O-OAK-SMF-4,A321neo,https://www.airlines-manager.com/network/showline/51097520,https://www.airlines-manager.com/network/showflight/58405118037,https://www.airlines-manager.com/aircraft/show/121813393,3:30,12:29,338,"618,972$","563,595$","$1,667.44","$62,737.85"
ORD - SMF,58428583300,O-OAK-SMF-3,A321neo,https://www.airlines-manager.com/network/showline/51097520,https://www.airlines-manager.com/network/showflight/58428583300,https://www.airlines-manager.com/aircraft/show/121813394,14:00,22:59,338,"618,972$","563,595$","$1,667.44","$62,737.85"
ORD - SMF,58431664433,O-OAK-SMF-2,A321neo,https://www.airlines-manager.com/network/showline/51097520,https://www.airlines-manager.com/network/showflight/58431664433,https://www.airlines-manager.com/aircraft/show/121813395,16:15,1:14,338,"618,972$","563,595$","$1,667.44","$62,737.85"
ORD - SMF,58438157193,O-OAK-SMF-5,A321neo,https://www.airlines-manager.com/network/showline/51097520,https://www.airlines-manager.com/network/showflight/58438157193,https://www.airlines-manager.com/aircraft/show/121813392,18:15,3:14,338,"618,972$","563,595$","$1,667.44","$62,737.85"
ORD - SNA,58394056901,O-SNA-BUR-3,737-MAX8-200,https://www.airlines-manager.com/network/showline/51184362,https://www.airlines-manager.com/network/showflight/58394056901,https://www.airlines-manager.com/aircraft/show/122598446,2:15,10:59,272,"505,043$","463,149$","$1,702.75","$53,032.33"
ORD - SNA,58405117998,O-SNA-BUR-4,737-MAX8-200,https://www.airlines-manager.com/network/showline/51184362,https://www.airlines-manager.com/network/showflight/58405117998,https://www.airlines-manager.com/aircraft/show/122598447,3:15,11:59,272,"505,043$","463,149$","$1,702.75","$53,032.33"
ORD - SNA,58421791458,O-SNA-BUR-1,737-MAX8-200,https://www.airlines-manager.com/network/showline/51184362,https://www.airlines-manager.com/network/showflight/58421791458,https://www.airlines-manager.com/aircraft/show/122598444,11:00,19:44,272,"505,043$","463,149$","$1,702.75","$53,032.33"
ORD - SNA,58425449867,O-SNA-BUR-2,737-MAX8-200,https://www.airlines-manager.com/network/showline/51184362,https://www.airlines-manager.com/network/showflight/58425449867,https://www.airlines-manager.com/aircraft/show/122598445,13:00,21:44,272,"505,043$","463,149$","$1,702.75","$53,032.33"
ORD - SNA,58441017302,O-SNA-BUR-5,737-MAX8-200,https://www.airlines-manager.com/network/showline/51184362,https://www.airlines-manager.com/network/showflight/58441017302,https://www.airlines-manager.com/aircraft/show/122598448,19:45,4:29,272,"505,043$","463,149$","$1,702.75","$53,032.33"
ORD - SNA,58443550936,O-SNA-BUR-6,737-MAX8-200,https://www.airlines-manager.com/network/showline/51184362,https://www.airlines-manager.com/network/showflight/58443550936,https://www.airlines-manager.com/aircraft/show/120993787,21:45,6:29,272,"505,043$","463,149$","$1,702.75","$53,032.33"
ORD - STL,58405117893,O-BWI-STL-5,737-900ER,https://www.airlines-manager.com/network/showline/51202037,https://www.airlines-manager.com/network/showflight/58405117893,https://www.airlines-manager.com/aircraft/show/122278392,2:30,5:29,320,"135,708$","94,657$",$295.80,"$31,728.60"
ORD - STL,58408651876,O-BWI-STL-4,737-900ER,https://www.airlines-manager.com/network/showline/51202037,https://www.airlines-manager.com/network/showflight/58408651876,https://www.airlines-manager.com/aircraft/show/122278393,5:45,8:44,320,"135,708$","94,657$",$295.80,"$31,728.60"
ORD - STL,58418603321,O-BWI-STL-3,737-900ER,https://www.airlines-manager.com/network/showline/51202037,https://www.airlines-manager.com/network/showflight/58418603321,https://www.airlines-manager.com/aircraft/show/122278394,10:00,12:59,320,"135,708$","94,657$",$295.80,"$31,728.60"
ORD - STL,58428583285,O-BWI-STL-2,737-900ER,https://www.airlines-manager.com/network/showline/51202037,https://www.airlines-manager.com/network/showflight/58428583285,https://www.airlines-manager.com/aircraft/show/122278395,13:45,16:44,320,"135,708$","94,657$",$295.80,"$31,728.60"
ORD - STL,58438157366,O-BWI-STL-1,737-900ER,https://www.airlines-manager.com/network/showline/51202037,https://www.airlines-manager.com/network/showflight/58438157366,https://www.airlines-manager.com/aircraft/show/122278396,19:15,22:14,320,"135,708$","94,657$",$295.80,"$31,728.60"
ORD - SYR,58408651818,O-SYR-LIT-3,737-900ER,https://www.airlines-manager.com/network/showline/51889536,https://www.airlines-manager.com/network/showflight/58408651818,https://www.airlines-manager.com/aircraft/show/124069840,5:00,9:29,320,"276,267$","233,221$",$728.82,"$52,019.55"
ORD - SYR,58415054066,O-SYR-LIT-2,737-900ER,https://www.airlines-manager.com/network/showline/51889536,https://www.airlines-manager.com/network/showflight/58415054066,https://www.airlines-manager.com/aircraft/show/124069841,8:15,12:44,320,"276,267$","233,221$",$728.82,"$52,019.55"
ORD - SYR,58421791450,O-SYR-LIT-1,737-900ER,https://www.airlines-manager.com/network/showline/51889536,https://www.airlines-manager.com/network/showflight/58421791450,https://www.airlines-manager.com/aircraft/show/124069842,10:45,15:14,320,"276,267$","233,221$",$728.82,"$52,019.55"
ORD - SYR,58428583393,O-SYR-LIT-5,ERJ-175,https://www.airlines-manager.com/network/showline/51889536,https://www.airlines-manager.com/network/showflight/58428583393,https://www.airlines-manager.com/aircraft/show/124069889,14:00,18:29,112,"131,243$","107,957$",$963.90,"$24,079.63"
ORD - SYR,58446475261,O-SYR-LIT-4,737-900ER,https://www.airlines-manager.com/network/showline/51889536,https://www.airlines-manager.com/network/showflight/58446475261,https://www.airlines-manager.com/aircraft/show/124069839,23:45,4:14,315,"273,663$","230,699$",$732.38,"$51,457.03"
ORD - TPA,58415054000,O-PDX-SAN-1,737-900ER,https://www.airlines-manager.com/network/showline/50984824,https://www.airlines-manager.com/network/showflight/58415054000,https://www.airlines-manager.com/aircraft/show/121383375,7:30,13:29,320,"376,110$","320,132$","$1,000.41","$53,503.96"
ORD - TPA,58418603263,O-PDX-SAN-6 B,A319-100,https://www.airlines-manager.com/network/showline/50984824,https://www.airlines-manager.com/network/showflight/58418603263,https://www.airlines-manager.com/aircraft/show/121383410,9:30,15:29,198,"285,197$","246,258$","$1,243.73","$41,157.33"
ORD - TPA,58421791532,O-PDX-SAN-3,737-900ER,https://www.airlines-manager.com/network/showline/50984824,https://www.airlines-manager.com/network/showflight/58421791532,https://www.airlines-manager.com/aircraft/show/121383373,11:00,16:59,320,"376,110$","320,132$","$1,000.41","$53,503.96"
ORD - TPA,58425449929,O-PDX-SAN-5,737-900ER,https://www.airlines-manager.com/network/showline/50984824,https://www.airlines-manager.com/network/showflight/58425449929,https://www.airlines-manager.com/aircraft/show/121383371,13:00,18:59,320,"376,110$","320,132$","$1,000.41","$53,503.96"
ORD - TPA,58441017321,O-PDX-SAN-2,737-900ER,https://www.airlines-manager.com/network/showline/50984824,https://www.airlines-manager.com/network/showflight/58441017321,https://www.airlines-manager.com/aircraft/show/121383374,19:45,1:44,320,"376,110$","320,132$","$1,000.41","$53,503.96"
ORD - TPA,58443550953,O-PDX-SAN-4,737-900ER,https://www.airlines-manager.com/network/showline/50984824,https://www.airlines-manager.com/network/showflight/58443550953,https://www.airlines-manager.com/aircraft/show/121383372,21:45,3:44,274,"342,905$","288,182$","$1,051.76","$48,164.12"
ORD - TUL,58405117897,O-COS-BZN-2,737-900ER,https://www.airlines-manager.com/network/showline/51889541,https://www.airlines-manager.com/network/showflight/58405117897,https://www.airlines-manager.com/aircraft/show/124069845,2:30,6:59,320,"272,987$","229,530$",$717.28,"$51,196.28"
ORD - TUL,58408651877,O-COS-BZN-1,737-900ER,https://www.airlines-manager.com/network/showline/51889541,https://www.airlines-manager.com/network/showflight/58408651877,https://www.airlines-manager.com/aircraft/show/124069846,5:45,10:14,320,"272,987$","229,530$",$717.28,"$51,196.28"
ORD - TUL,58418603250,O-COS-BZN-5,ERJ-175,https://www.airlines-manager.com/network/showline/51889541,https://www.airlines-manager.com/network/showflight/58418603250,https://www.airlines-manager.com/aircraft/show/124069890,9:15,13:44,112,"129,675$","106,244$",$948.61,"$23,697.55"
ORD - TUL,58428583286,O-COS-BZN-4,737-900ER,https://www.airlines-manager.com/network/showline/51889541,https://www.airlines-manager.com/network/showflight/58428583286,https://www.airlines-manager.com/aircraft/show/124069843,13:45,18:14,320,"272,987$","229,530$",$717.28,"$51,196.28"
ORD - TUL,58431664357,O-COS-BZN-3,737-900ER,https://www.airlines-manager.com/network/showline/51889541,https://www.airlines-manager.com/network/showflight/58431664357,https://www.airlines-manager.com/aircraft/show/124069844,15:45,20:14,320,"272,987$","229,530$",$717.28,"$51,196.28"
ORD - TUS,58394056399,O-ANC-TUS-1,A321-200,https://www.airlines-manager.com/network/showline/51427560,https://www.airlines-manager.com/network/showflight/58394056399,https://www.airlines-manager.com/aircraft/show/122771603,0:15,7:59,310,"485,184$","433,084$","$1,397.05","$56,002.24"
ORD - TUS,58394056401,O-ANC-TUS-2,A321-200,https://www.airlines-manager.com/network/showline/51427560,https://www.airlines-manager.com/network/showflight/58394056401,https://www.airlines-manager.com/aircraft/show/122771602,2:15,9:59,310,"485,184$","433,084$","$1,397.05","$56,002.24"
ORD - TUS,58421791575,O-ANC-TUS-3,A321-200,https://www.airlines-manager.com/network/showline/51427560,https://www.airlines-manager.com/network/showflight/58421791575,https://www.airlines-manager.com/aircraft/show/122771601,11:00,18:44,310,"485,184$","433,084$","$1,397.05","$56,002.24"
ORD - TUS,58425449979,O-ANC-TUS-4,A321-200,https://www.airlines-manager.com/network/showline/51427560,https://www.airlines-manager.com/network/showflight/58425449979,https://www.airlines-manager.com/aircraft/show/122771600,13:00,20:44,310,"485,184$","433,084$","$1,397.05","$56,002.24"
ORD - TUS,58431664292,O-ANC-TUS-5,A321-200,https://www.airlines-manager.com/network/showline/51427560,https://www.airlines-manager.com/network/showflight/58431664292,https://www.airlines-manager.com/aircraft/show/122771599,15:00,22:44,310,"485,184$","433,084$","$1,397.05","$56,002.24"
ORD - YEG,58394056368,O-YEG-YUL-3,737-900ER,https://www.airlines-manager.com/network/showline/51201991,https://www.airlines-manager.com/network/showflight/58394056368,https://www.airlines-manager.com/aircraft/show/122278399,0:15,7:44,320,"484,958$","425,139$","$1,328.56","$56,811.45"
ORD - YEG,58405118109,O-YEG-YUL-2,737-900ER,https://www.airlines-manager.com/network/showline/51201991,https://www.airlines-manager.com/network/showflight/58405118109,https://www.airlines-manager.com/aircraft/show/122278400,4:00,11:29,320,"484,958$","425,139$","$1,328.56","$56,811.45"
ORD - YEG,58421791614,O-YEG-YUL-1,737-900ER,https://www.airlines-manager.com/network/showline/51201991,https://www.airlines-manager.com/network/showflight/58421791614,https://www.airlines-manager.com/aircraft/show/122278401,11:30,18:59,320,"484,958$","425,139$","$1,328.56","$56,811.45"
ORD - YEG,58431664329,O-YEG-YUL-5,737-900ER,https://www.airlines-manager.com/network/showline/51201991,https://www.airlines-manager.com/network/showflight/58431664329,https://www.airlines-manager.com/aircraft/show/122278397,15:15,22:44,320,"484,958$","425,139$","$1,328.56","$56,811.45"
ORD - YEG,58441017322,O-YEG-YUL-4,737-900ER,https://www.airlines-manager.com/network/showline/51201991,https://www.airlines-manager.com/network/showflight/58441017322,https://www.airlines-manager.com/aircraft/show/122278398,19:45,3:14,320,"484,958$","425,139$","$1,328.56","$56,811.45"
ORD - YOW,58415054044,O-EUG-BDL-1,737-900ER,https://www.airlines-manager.com/network/showline/51552961,https://www.airlines-manager.com/network/showflight/58415054044,https://www.airlines-manager.com/aircraft/show/123133559,8:00,12:44,320,"301,038$","255,663$",$798.95,"$54,013.31"
ORD - YOW,58428583345,O-EUG-BDL-4,737-900ER,https://www.airlines-manager.com/network/showline/51552961,https://www.airlines-manager.com/network/showflight/58428583345,https://www.airlines-manager.com/aircraft/show/123133556,14:00,18:44,320,"301,038$","255,663$",$798.95,"$54,013.31"
ORD - YOW,58435221390,O-EUG-BDL-3,737-900ER,https://www.airlines-manager.com/network/showline/51552961,https://www.airlines-manager.com/network/showflight/58435221390,https://www.airlines-manager.com/aircraft/show/123133557,18:00,22:44,320,"301,038$","255,663$",$798.95,"$54,013.31"
ORD - YOW,58443550922,O-EUG-BDL-2,737-900ER,https://www.airlines-manager.com/network/showline/51552961,https://www.airlines-manager.com/network/showflight/58443550922,https://www.airlines-manager.com/aircraft/show/123133558,21:30,2:14,320,"301,038$","255,663$",$798.95,"$54,013.31"
ORD - YOW,58446475202,O-EUG-BDL-5,ERJ-175,https://www.airlines-manager.com/network/showline/51552961,https://www.airlines-manager.com/network/showflight/58446475202,https://www.airlines-manager.com/aircraft/show/123133603,23:00,3:44,112,"142,848$","118,258$","$1,055.88","$24,984.08"
ORD - YUL,58405118012,O-YEG-YUL-4,737-900ER,https://www.airlines-manager.com/network/showline/51201992,https://www.airlines-manager.com/network/showflight/58405118012,https://www.airlines-manager.com/aircraft/show/122278398,3:15,8:14,320,"322,423$","272,453$",$851.42,"$54,672.84"
ORD - YUL,58415054019,O-YEG-YUL-3,737-900ER,https://www.airlines-manager.com/network/showline/51201992,https://www.airlines-manager.com/network/showflight/58415054019,https://www.airlines-manager.com/aircraft/show/122278399,7:45,12:44,320,"322,423$","272,453$",$851.42,"$54,672.84"
ORD - YUL,58421791613,O-YEG-YUL-2,737-900ER,https://www.airlines-manager.com/network/showline/51201992,https://www.airlines-manager.com/network/showflight/58421791613,https://www.airlines-manager.com/aircraft/show/122278400,11:30,16:29,320,"322,423$","272,453$",$851.42,"$54,672.84"
ORD - YUL,58438157337,O-YEG-YUL-1,737-900ER,https://www.airlines-manager.com/network/showline/51201992,https://www.airlines-manager.com/network/showflight/58438157337,https://www.airlines-manager.com/aircraft/show/122278401,19:00,23:59,320,"322,423$","272,453$",$851.42,"$54,672.84"
ORD - YUL,58446475150,O-YEG-YUL-5,737-900ER,https://www.airlines-manager.com/network/showline/51201992,https://www.airlines-manager.com/network/showflight/58446475150,https://www.airlines-manager.com/aircraft/show/122278397,22:45,3:44,320,"322,423$","272,453$",$851.42,"$54,672.84"
ORD - YVR,58394056734,O-YVR-GDL-2,757-300,https://www.airlines-manager.com/network/showline/50984850,https://www.airlines-manager.com/network/showflight/58394056734,https://www.airlines-manager.com/aircraft/show/121383384,1:15,9:59,400,"729,461$","652,631$","$1,631.58","$74,728.74"
ORD - YVR,58405118004,O-YVR-GDL-3,757-300,https://www.airlines-manager.com/network/showline/50984850,https://www.airlines-manager.com/network/showflight/58405118004,https://www.airlines-manager.com/aircraft/show/121383383,3:15,11:59,400,"729,461$","652,631$","$1,631.58","$74,728.74"
ORD - YVR,58431664246,O-YVR-GDL-1,757-300,https://www.airlines-manager.com/network/showline/50984850,https://www.airlines-manager.com/network/showflight/58431664246,https://www.airlines-manager.com/aircraft/show/121383385,15:00,23:44,400,"729,461$","652,631$","$1,631.58","$74,728.74"
ORD - YVR,58435221189,O-YVR-GDL-4,757-300,https://www.airlines-manager.com/network/showline/50984850,https://www.airlines-manager.com/network/showflight/58435221189,https://www.airlines-manager.com/aircraft/show/121383382,16:30,1:14,400,"729,461$","652,631$","$1,631.58","$74,728.74"
ORD - YVR,58438157228,O-YVR-GDL-5,757-300,https://www.airlines-manager.com/network/showline/50984850,https://www.airlines-manager.com/network/showflight/58438157228,https://www.airlines-manager.com/aircraft/show/121383381,18:30,3:14,400,"729,461$","652,631$","$1,631.58","$74,728.74"
ORD - YWG,58405118015,O-EUG-BDL-1,737-900ER,https://www.airlines-manager.com/network/showline/51552960,https://www.airlines-manager.com/network/showflight/58405118015,https://www.airlines-manager.com/aircraft/show/123133559,3:15,7:59,320,"312,127$","265,733$",$830.42,"$56,140.77"
ORD - YWG,58418603216,O-EUG-BDL-4,737-900ER,https://www.airlines-manager.com/network/showline/51552960,https://www.airlines-manager.com/network/showflight/58418603216,https://www.airlines-manager.com/aircraft/show/123133556,9:00,13:44,320,"312,127$","265,733$",$830.42,"$56,140.77"
ORD - YWG,58425449999,O-EUG-BDL-3,737-900ER,https://www.airlines-manager.com/network/showline/51552960,https://www.airlines-manager.com/network/showflight/58425449999,https://www.airlines-manager.com/aircraft/show/123133557,13:15,17:59,320,"312,127$","265,733$",$830.42,"$56,140.77"
ORD - YWG,58435221219,O-EUG-BDL-2,737-900ER,https://www.airlines-manager.com/network/showline/51552960,https://www.airlines-manager.com/network/showflight/58435221219,https://www.airlines-manager.com/aircraft/show/123133558,16:45,21:29,320,"312,127$","265,733$",$830.42,"$56,140.77"
ORD - YWG,58438157216,O-EUG-BDL-5,ERJ-175,https://www.airlines-manager.com/network/showline/51552960,https://www.airlines-manager.com/network/showflight/58438157216,https://www.airlines-manager.com/aircraft/show/123133603,18:15,22:59,112,"148,005$","122,750$","$1,095.98","$25,933.10"
ORD - YXY,58394056466,O-YXY-MSO-2,737-900ER,https://www.airlines-manager.com/network/showline/51889528,https://www.airlines-manager.com/network/showflight/58394056466,https://www.airlines-manager.com/aircraft/show/124069848,0:30,11:44,320,"700,471$","627,727$","$1,961.65","$55,880.74"
ORD - YXY,58405117898,O-YXY-MSO-3,737-900ER,https://www.airlines-manager.com/network/showline/51889528,https://www.airlines-manager.com/network/showflight/58405117898,https://www.airlines-manager.com/aircraft/show/124069847,2:30,13:44,320,"700,471$","627,727$","$1,961.65","$55,880.74"
ORD - YXY,58428583287,O-YXY-MSO-1,737-900ER,https://www.airlines-manager.com/network/showline/51889528,https://www.airlines-manager.com/network/showflight/58428583287,https://www.airlines-manager.com/aircraft/show/124069849,13:45,0:59,320,"700,471$","627,727$","$1,961.65","$55,880.74"
ORD - YXY,58431664374,O-YXY-MSO-4,A321neo,https://www.airlines-manager.com/network/showline/51889528,https://www.airlines-manager.com/network/showflight/58431664374,https://www.airlines-manager.com/aircraft/show/124068451,16:00,2:59,338,"757,524$","695,275$","$2,057.03","$63,302.73"
ORD - YYC,58405117952,O-YYC-SLC-2,A321neo,https://www.airlines-manager.com/network/showline/51097547,https://www.airlines-manager.com/network/showflight/58405117952,https://www.airlines-manager.com/aircraft/show/121813390,3:00,10:29,338,"519,020$","465,677$","$1,377.74","$62,228.55"
ORD - YYC,58421791480,O-YYC-SLC-1,A321neo,https://www.airlines-manager.com/network/showline/51097547,https://www.airlines-manager.com/network/showflight/58421791480,https://www.airlines-manager.com/aircraft/show/121813391,11:00,18:29,338,"519,020$","465,677$","$1,377.74","$62,228.55"
ORD - YYC,58425449878,O-YYC-SLC-4,A321neo,https://www.airlines-manager.com/network/showline/51097547,https://www.airlines-manager.com/network/showflight/58425449878,https://www.airlines-manager.com/aircraft/show/121813388,13:00,20:29,338,"519,020$","465,677$","$1,377.74","$62,228.55"
ORD - YYC,58441017345,O-YYC-SLC-3,A321neo,https://www.airlines-manager.com/network/showline/51097547,https://www.airlines-manager.com/network/showflight/58441017345,https://www.airlines-manager.com/aircraft/show/121813389,20:00,3:29,338,"519,020$","465,677$","$1,377.74","$62,228.55"
ORD - YYC,58443550967,O-YYC-SLC-5,A321neo,https://www.airlines-manager.com/network/showline/51097547,https://www.airlines-manager.com/network/showflight/58443550967,https://www.airlines-manager.com/aircraft/show/121813387,22:00,5:29,338,"519,020$","465,677$","$1,377.74","$62,228.55"
ORD - YYZ,58394056809,O-ATL-YYZ-5,A321neo,https://www.airlines-manager.com/network/showline/51097548,https://www.airlines-manager.com/network/showflight/58394056809,https://www.airlines-manager.com/aircraft/show/115400545,1:30,5:14,338,"237,534$","195,237$",$577.62,"$52,295.63"
ORD - YYZ,58408651807,O-ATL-YYZ-4,A321neo,https://www.airlines-manager.com/network/showline/51097548,https://www.airlines-manager.com/network/showflight/58408651807,https://www.airlines-manager.com/aircraft/show/121813378,5:00,8:44,338,"237,534$","195,237$",$577.62,"$52,295.63"
ORD - YYZ,58421791474,O-ATL-YYZ-3,A321neo,https://www.airlines-manager.com/network/showline/51097548,https://www.airlines-manager.com/network/showflight/58421791474,https://www.airlines-manager.com/aircraft/show/121813379,11:00,14:44,338,"237,534$","195,237$",$577.62,"$52,295.63"
ORD - YYZ,58431664339,O-ATL-YYZ-1,A321neo,https://www.airlines-manager.com/network/showline/51097548,https://www.airlines-manager.com/network/showflight/58431664339,https://www.airlines-manager.com/aircraft/show/121813381,15:30,19:14,338,"237,534$","195,237$",$577.62,"$52,295.63"
ORD - YYZ,58435221318,O-ATL-YYZ-2,A321neo,https://www.airlines-manager.com/network/showline/51097548,https://www.airlines-manager.com/network/showflight/58435221318,https://www.airlines-manager.com/aircraft/show/121813380,17:30,21:14,338,"237,534$","195,237$",$577.62,"$52,295.63"
ORD - YZF,58394056141,O-YZF-PVD-1,A321-200,https://www.airlines-manager.com/network/showline/51776678,https://www.airlines-manager.com/network/showflight/58394056141,https://www.airlines-manager.com/aircraft/show/123757736,0:00,8:59,310,"570,872$","515,778$","$1,663.80","$57,414.99"
ORD - YZF,58415054026,O-YZF-PVD-4,A321-200,https://www.airlines-manager.com/network/showline/51776678,https://www.airlines-manager.com/network/showflight/58415054026,https://www.airlines-manager.com/aircraft/show/123757733,7:45,16:44,310,"570,872$","515,778$","$1,663.80","$57,414.99"
ORD - YZF,58421791609,O-YZF-PVD-5,ERJ-175,https://www.airlines-manager.com/network/showline/51776678,https://www.airlines-manager.com/network/showflight/58421791609,https://www.airlines-manager.com/aircraft/show/123757768,11:15,20:14,112,"267,238$","231,073$","$2,063.15","$25,722.41"
ORD - YZF,58431664337,O-YZF-PVD-3,A321-200,https://www.airlines-manager.com/network/showline/51776678,https://www.airlines-manager.com/network/showflight/58431664337,https://www.airlines-manager.com/aircraft/show/123757734,15:15,0:14,310,"570,872$","515,778$","$1,663.80","$57,414.99"
ORD - YZF,58438157249,O-YZF-PVD-2,A321-200,https://www.airlines-manager.com/network/showline/51776678,https://www.airlines-manager.com/network/showflight/58438157249,https://www.airlines-manager.com/aircraft/show/123757735,18:30,3:29,310,"570,872$","515,778$","$1,663.80","$57,414.99"`;
